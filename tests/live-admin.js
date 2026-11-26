// Needs the secret word in the environment: FNAZ_ADMIN_WORD=... node tests/live-admin.js (it is not written in this repo)
const {chromium}=require('playwright');const assert=require('assert');
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const ctx=await b.newContext({viewport:{width:1280,height:900}});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
const PW='correct-horse-battery';const calls=[];let ann={v:0,data:{}};let published=null;let players=[{id:'a1b2c3',ver:'1.6.2',platform:'desktop-win',screen:'game',night:3,mode:'single',mins:12},{id:'d4e5f6',ver:'1.6.1',platform:'phone',screen:'title',night:0,mode:'single',mins:2}];
const J=(r,body)=>r.fulfill({status:200,contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify(body)});
await p.route('**/rest/v1/rpc/*',async r=>{const req=r.request();const name=new URL(req.url()).pathname.split('/').pop();
 if(req.method()==='OPTIONS')return r.fulfill({status:204,headers:{'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'*'}});
 const a=JSON.parse(req.postData()||'{}');calls.push({name,a,key:req.headers().apikey});
 if(name==='get_announcement')return J(r,ann);
 if(name==='heartbeat')return J(r,null);
 if(name==='admin_check')return J(r,a.p_secret===PW);
 if(name==='admin_publish'){if(a.p_secret!==PW)return J(r,null);published=a.p_data;ann={v:Date.now(),data:a.p_data};return J(r,ann.v)}
 if(name==='admin_online')return J(r,a.p_secret===PW?{total:players.length,today:5,players}:null);
 if(name==='admin_change_secret')return J(r,a.p_old===PW);
 r.fulfill({status:404,body:'{}'})});
await p.route('**/raw.githubusercontent.com/**',r=>r.abort());await p.route('**/api.github.com/**',r=>r.abort());await p.route('**/cdn.jsdelivr.net/**',r=>r.abort());
await p.goto('file://'+require('path').resolve(__dirname,'../index.html')+'');await p.waitForTimeout(6000);
// 1. presence heartbeat, anonymous and well-formed
const hb=calls.find(c=>c.name==='heartbeat');console.log('1 first heartbeat:',JSON.stringify(hb&&hb.a),'| key header sent:',hb&&hb.key.startsWith('sb_publishable_'));
assert(hb&&/^[A-Za-z0-9-]{8,40}$/.test(hb.a.p_id)&&hb.a.p_platform==='web'&&hb.a.p_screen==='title');
// 2. the admin word only opens a login box
await p.keyboard.type(process.env.FNAZ_ADMIN_WORD||'x',{delay:30});await p.waitForTimeout(500);
console.log('2 word typed -> login box:',await p.evaluate(()=>!document.getElementById('adminLogin').hidden),'| admin panel open:',await p.evaluate(()=>!document.getElementById('modMenu').hidden));
await p.fill('#alPw','not-the-password');await p.click('#alGo');await p.waitForTimeout(600);console.log('  wrong password ->',await p.evaluate(()=>document.getElementById('alMsg').textContent),'| panel:',await p.evaluate(()=>!document.getElementById('modMenu').hidden));
for(let i=0;i<4;i++){await p.fill('#alPw','nope'+i+'xxxx');await p.click('#alGo');await p.waitForTimeout(400)}await p.fill('#alPw',PW);await p.click('#alGo');await p.waitForTimeout(500);
console.log('  after 5 wrong tries, even the right one is refused for a minute ->',await p.evaluate(()=>document.getElementById('alMsg').textContent));
await p.evaluate(()=>{document.getElementById('alNo').click()});
// bypass attempt: calling the panel function directly without a password must not open it
await p.evaluate(()=>FNAZMOD.toggle(true));await p.waitForTimeout(300);console.log('  console bypass (toggle without login) -> panel open?',await p.evaluate(()=>!document.getElementById('modMenu').hidden),'| login box shown instead:',await p.evaluate(()=>!document.getElementById('adminLogin').hidden));
await p.evaluate(()=>document.getElementById('alNo').click());
// 3. a fresh page: right password on the first go
const ctx2=await b.newContext({viewport:{width:1280,height:900}});const p2=await ctx2.newPage();p2.on('pageerror',e=>errs.push(e.message));
for(const [m,h] of [['**/rest/v1/rpc/*',null]]){}
await p2.route('**/rest/v1/rpc/*',async r=>{const req=r.request();const name=new URL(req.url()).pathname.split('/').pop();if(req.method()==='OPTIONS')return r.fulfill({status:204,headers:{'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'*'}});const a=JSON.parse(req.postData()||'{}');calls.push({name,a});
 if(name==='get_announcement')return J(r,ann);if(name==='heartbeat')return J(r,null);if(name==='admin_check')return J(r,a.p_secret===PW);if(name==='admin_publish'){if(a.p_secret!==PW)return J(r,null);published=a.p_data;ann={v:Date.now(),data:a.p_data};return J(r,ann.v)}if(name==='admin_online')return J(r,a.p_secret===PW?{total:players.length,today:5,players}:null);if(name==='admin_change_secret')return J(r,a.p_old===PW);r.fulfill({status:404,body:'{}'})});
await p2.route('**/raw.githubusercontent.com/**',r=>r.abort());await p2.route('**/api.github.com/**',r=>r.abort());await p2.route('**/cdn.jsdelivr.net/**',r=>r.abort());
await p2.setViewportSize({width:1280,height:900});await p2.goto('file://'+require('path').resolve(__dirname,'../index.html')+'');await p2.waitForTimeout(3500);
await p2.keyboard.type(process.env.FNAZ_ADMIN_WORD||'x',{delay:30});await p2.waitForTimeout(400);await p2.fill('#alPw',PW);await p2.click('#alGo');await p2.waitForTimeout(1500);
console.log('3 right password -> panel open:',await p2.evaluate(()=>!document.getElementById('modMenu').hidden));
console.log('  online now:',await p2.evaluate(()=>document.getElementById('lvTotal').textContent),'|',JSON.stringify(await p2.evaluate(()=>[...document.querySelectorAll('#lvChips span')].map(s=>s.textContent))),'|',await p2.evaluate(()=>document.querySelectorAll('#lvList div').length),'rows, first:',await p2.evaluate(()=>document.querySelector('#lvList div').innerText.replace(/\n/g,' ')));
// 4. publish a double-coins event + gift, then see it arrive
await p2.click('[data-tab=broadcast]');await p2.click('[data-preset=gift]');await p2.fill('#anG','300');await p2.selectOption('#anE','double');await p2.fill('#anEM','45');
const t0=Date.now();await p2.click('#anPub');await p2.waitForTimeout(900);
console.log('4 publish ->',await p2.evaluate(()=>document.getElementById('anH').textContent));
console.log('  server received:',JSON.stringify({gift:published.gift,event:published.event&&published.event.type,eventMin:Math.round((Date.parse(published.event.until)-Date.now())/60000),pwSent:calls.filter(c=>c.name==='admin_publish').pop().a.p_secret===PW}));
// 5. a player (the first page) gets it within the 5 second poll, with the event active
await p.waitForTimeout(6500);
const got=await p.evaluate(()=>({card:(()=>{const c=document.getElementById('newsCard');return c&&!c.hidden?c.querySelector('#newsT').textContent:null})(),coins:FNAZMOD.save().coins,event:!!FNAZMOD.event()}));
console.log('5 player received:',JSON.stringify(got),'| seconds since publish ~',Math.round((Date.now()-t0)/1000));
assert.strictEqual(got.coins,300);assert(got.event);
const e1=await p.evaluate(()=>{const b=FNAZMOD.save().coins;FNAZMOD.earn(10,'test',true);return FNAZMOD.save().coins-b});console.log('  earning 10 coins during a double-coins event gives:',e1);assert.strictEqual(e1,20);
// 6. take it down: event ends everywhere
await p2.click('#anX');await p2.waitForTimeout(6500);
console.log('6 after take-down, player event active:',await p.evaluate(()=>!!FNAZMOD.event()));
// 7. opt out in Settings stops the heartbeats
const before=calls.filter(c=>c.name==='heartbeat').length;
await p.evaluate(()=>{const b=document.getElementById('setShare');b.checked=false;b.dispatchEvent(new Event('change'))});await p.waitForTimeout(100);
const c1=calls.filter(c=>c.name==='heartbeat').length;await p.evaluate(()=>{FNAZNET.h.y.screen='settings'});await p.waitForTimeout(4500);
console.log('7 opted out -> heartbeats after a screen change:',calls.filter(c=>c.name==='heartbeat').length-c1,'(expect 0)');
// 8. daily reward in the shop
await p.evaluate(()=>{document.getElementById('modMenu').hidden=true;FNAZNET.h.xn('title')});
const d1=await p.evaluate(()=>{const b=document.getElementById('shopDaily');const was=FNAZMOD.save().coins;b.click();return {gain:FNAZMOD.save().coins-was,disabledAfter:b.disabled}});console.log('8 daily reward:',JSON.stringify(d1));
console.log(errs.length?errs:'no errors');await b.close()})().catch(e=>{console.error('FAILED',e.message);process.exit(1)});
