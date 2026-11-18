//! A tiny hand-written WebAssembly interface (no wasm-bindgen): the game writes a JSON request into this module's memory,
//! calls `fnaz_call`, and reads the JSON answer back.

use std::cell::RefCell;

thread_local! {
    static OUT: RefCell<Vec<u8>> = const { RefCell::new(Vec::new()) };
}

/// Reserve `len` bytes for the caller to write a request into. The pointer stays valid until `fnaz_free`.
#[no_mangle]
pub extern "C" fn fnaz_alloc(len: usize) -> *mut u8 {
    let mut buf: Vec<u8> = Vec::with_capacity(len.max(1));
    let ptr = buf.as_mut_ptr();
    std::mem::forget(buf);
    ptr
}

/// Release a request buffer from `fnaz_alloc`.
///
/// # Safety
/// `ptr` and `len` must be exactly what `fnaz_alloc(len)` returned and was asked for, and not freed before.
#[no_mangle]
pub unsafe extern "C" fn fnaz_free(ptr: *mut u8, len: usize) {
    // SAFETY: the caller passes the pointer and capacity that `fnaz_alloc` leaked.
    drop(unsafe { Vec::from_raw_parts(ptr, 0, len.max(1)) });
}

/// Run a request (JSON, UTF-8) and return the length of the answer; read it with `fnaz_result`.
///
/// # Safety
/// `ptr..ptr+len` must be memory the caller wrote (from `fnaz_alloc`).
#[no_mangle]
pub unsafe extern "C" fn fnaz_call(ptr: *const u8, len: usize) -> usize {
    // SAFETY: the caller guarantees the range is initialised memory it owns.
    let bytes = unsafe { std::slice::from_raw_parts(ptr, len) };
    let answer = match std::str::from_utf8(bytes) {
        Ok(text) => crate::call_json(text),
        Err(_) => "{\"error\":\"the request was not UTF-8\"}".to_string(),
    };
    OUT.with(|o| {
        let mut o = o.borrow_mut();
        *o = answer.into_bytes();
        o.len()
    })
}

/// Where the last answer is in memory.
#[no_mangle]
pub extern "C" fn fnaz_result() -> *const u8 {
    OUT.with(|o| o.borrow().as_ptr())
}
