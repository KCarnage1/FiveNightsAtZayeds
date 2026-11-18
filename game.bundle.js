(()=>{var Cl="170";var Cu=0,gc=1,Iu=2;var Sh=1,Il=2,Nn=3,ii=0,Yt=1,qt=2,ti=0,es=1,_c=2,yc=3,xc=4,Pu=5,vi=100,Lu=101,Du=102,Uu=103,Nu=104,Fu=200,Ou=201,Bu=202,zu=203,ao=204,oo=205,ku=206,Hu=207,Vu=208,Gu=209,Wu=210,Xu=211,qu=212,Yu=213,Zu=214,lo=0,co=1,ho=2,ss=3,uo=4,fo=5,po=6,mo=7,bh=0,$u=1,Ju=2,ni=0,Ku=1,Qu=2,ju=3,la=4,ed=5,td=6,nd=7;var Eh=300,rs=301,as=302,go=303,_o=304,ca=306,Os=1e3,bi=1001,yo=1002,_n=1003,id=1004;var cr=1005;var bn=1006,wa=1007;var Ei=1008;var kn=1009,wh=1010,Th=1011,Bs=1012,Pl=1013,wi=1014,On=1015,Zs=1016,Ll=1017,Dl=1018,os=1020,Ah=35902,Rh=1021,Ch=1022,gn=1023,Ih=1024,Ph=1025,ts=1026,ls=1027,Lh=1028,Ul=1029,Dh=1030,Nl=1031;var Fl=1033,Lr=33776,Dr=33777,Ur=33778,Nr=33779,xo=35840,vo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,wo=37496,To=37808,Ao=37809,Ro=37810,Co=37811,Io=37812,Po=37813,Lo=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,Fr=36492,ko=36494,Ho=36495,Uh=36283,Vo=36284,Go=36285,Wo=36286;var Or=2300,Xo=2301,Ta=2302,vc=2400,Mc=2401,Sc=2402;var sd=3200,rd=3201;var Nh=0,ad=1,ei="",Bt="srgb",_s="srgb-linear",ha="linear",at="srgb";var zi=7680;var bc=519,od=512,ld=513,cd=514,Fh=515,hd=516,ud=517,dd=518,fd=519,Ec=35044;var wc="300 es",Bn=2e3,Br=2001,si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Aa=Math.PI/180,zr=180/Math.PI;function $s(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function pd(i,e){return(i%e+e)%e}function Ra(i,e,t){return(1-t)*i+t*e}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=s[0],m=s[3],u=s[6],w=s[1],E=s[4],M=s[7],L=s[2],A=s[5],C=s[8];return r[0]=a*v+o*w+l*L,r[3]=a*m+o*E+l*A,r[6]=a*u+o*M+l*C,r[1]=c*v+h*w+d*L,r[4]=c*m+h*E+d*A,r[7]=c*u+h*M+d*C,r[2]=f*v+p*w+_*L,r[5]=f*m+p*E+_*A,r[8]=f*u+p*M+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,_=t*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Be;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){let i=kr("canvas");return i.style.display="block",i}var Tc={};function Ls(i){i in Tc||(Tc[i]=!0,console.warn(i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _d(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ac=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Cc=[.3127,.329],Ic=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[_s]:{primaries:Ac,whitePoint:Cc,transfer:ha,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:Ac,whitePoint:Cc,transfer:at,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});var ki,qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=kr("canvas")),ki.width=e.width,ki.height=e.height;let n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xd=0,Hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ia(s[a].image)):r.push(Ia(s[a]))}else r=Ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vd=0,Vt=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=bn,a=Ei,o=gn,l=kn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=$s(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Eh;Vt.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,L=(u+1)/2,A=(h+f)/4,C=(d+v)/4,P=(_+m)/4;return E>M&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=C/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=P/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==_){let m=1-o,u=l*f+c*p+h*_+d*v,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let L=Math.sqrt(E),A=Math.atan2(L,u*w);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}let M=o*w;if(l=l*m+f*M,c=c*m+p*M,h=h*m+_*M,d=d*m+v*M,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*p-c*f,e[t+1]=l*_+h*f+c*d-o*p,e[t+2]=c*_+h*p+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new I,Lc=new ri,Ti=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ur.subVectors(this.max,As),Hi.subVectors(e.a,As),Vi.subVectors(e.b,As),Gi.subVectors(e.c,As),Zn.subVectors(Vi,Hi),$n.subVectors(Gi,Vi),fi.subVectors(Hi,Gi);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!La(t,Hi,Vi,Gi,ur)||(t=[1,0,0,0,1,0,0,0,1],!La(t,Hi,Vi,Gi,ur))?!1:(dr.crossVectors(Zn,$n),t=[dr.x,dr.y,dr.z],La(t,Hi,Vi,Gi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new I,new I,new I,new I,new I,new I,new I,new I],fn=new I,hr=new Ti,Hi=new I,Vi=new I,Gi=new I,Zn=new I,$n=new I,fi=new I,As=new I,ur=new I,dr=new I,pi=new I;function La(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Md=new Ti,Rs=new I,Da=new I,zs=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Da)),this.expandByPoint(Rs.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new I,Ua=new I,fr=new I,Jn=new I,Na=new I,pr=new I,Fa=new I,Gr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ua.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Ua);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fr),o=Jn.dot(this.direction),l=-Jn.dot(fr),c=Jn.lengthSq(),h=Math.abs(1-a*a),d,f,p,_;if(h>0)if(d=a*l-o,f=a*o-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ua).addScaledVector(fr,f),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){Na.subVectors(t,e),pr.subVectors(n,e),Fa.crossVectors(Na,pr);let a=this.direction.dot(Fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);let l=o*this.direction.dot(pr.crossVectors(Jn,pr));if(l<0)return null;let c=o*this.direction.dot(Na.cross(Jn));if(c<0||l+c>a)return null;let h=-o*Jn.dot(Fa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,f,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,p,_,v,m)}set(e,t,n,s,r,a,o,l,c,h,d,f,p,_,v,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,_=c*h,v=c*d;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,_=c*h,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=a*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,bd)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Kn.crossVectors(n,jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Kn.crossVectors(n,jt)),Kn.normalize(),mr.crossVectors(jt,Kn),s[0]=Kn.x,s[4]=mr.x,s[8]=jt.x,s[1]=Kn.y,s[5]=mr.y,s[9]=jt.y,s[2]=Kn.z,s[6]=mr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],u=n[14],w=n[3],E=n[7],M=n[11],L=n[15],A=s[0],C=s[4],P=s[8],b=s[12],g=s[1],R=s[5],k=s[9],z=s[13],q=s[2],ne=s[6],Y=s[10],oe=s[14],J=s[3],me=s[7],ve=s[11],Te=s[15];return r[0]=a*A+o*g+l*q+c*J,r[4]=a*C+o*R+l*ne+c*me,r[8]=a*P+o*k+l*Y+c*ve,r[12]=a*b+o*z+l*oe+c*Te,r[1]=h*A+d*g+f*q+p*J,r[5]=h*C+d*R+f*ne+p*me,r[9]=h*P+d*k+f*Y+p*ve,r[13]=h*b+d*z+f*oe+p*Te,r[2]=_*A+v*g+m*q+u*J,r[6]=_*C+v*R+m*ne+u*me,r[10]=_*P+v*k+m*Y+u*ve,r[14]=_*b+v*z+m*oe+u*Te,r[3]=w*A+E*g+M*q+L*J,r[7]=w*C+E*R+M*ne+L*me,r[11]=w*P+E*k+M*Y+L*ve,r[15]=w*b+E*z+M*oe+L*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],w=d*m*c-v*f*c+v*l*p-o*m*p-d*l*u+o*f*u,E=_*f*c-h*m*c-_*l*p+a*m*p+h*l*u-a*f*u,M=h*v*c-_*d*c+_*o*p-a*v*p-h*o*u+a*d*u,L=_*d*l-h*v*l-_*o*f+a*v*f+h*o*m-a*d*m,A=t*w+n*E+s*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=w*C,e[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*u-n*f*u)*C,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*u+n*l*u)*C,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*C,e[4]=E*C,e[5]=(h*m*r-_*f*r+_*s*p-t*m*p-h*s*u+t*f*u)*C,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*u-t*l*u)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*C,e[8]=M*C,e[9]=(_*d*r-h*v*r-_*n*p+t*v*p+h*n*u-t*d*u)*C,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*u+t*o*u)*C,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*C,e[12]=L*C,e[13]=(h*v*s-_*d*s+_*n*f-t*v*f-h*n*m+t*d*m)*C,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*m-t*o*m)*C,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,_=r*d,v=a*h,m=a*d,u=o*d,w=l*c,E=l*h,M=l*d,L=n.x,A=n.y,C=n.z;return s[0]=(1-(v+u))*L,s[1]=(p+M)*L,s[2]=(_-E)*L,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+u))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(_+E)*C,s[9]=(m-w)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);let c=1/r,h=1/a,d=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Bn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(o===Bn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Br)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),f=(t+e)*c,p=(n+s)*h,_,v;if(o===Bn)_=(a+r)*d,v=-2*d;else if(o===Br)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wi=new I,pn=new gt,Sd=new I(0,0,0),bd=new I(1,1,1),Kn=new I,mr=new I,jt=new I,Dc=new gt,Uc=new ri,En=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ed=0,Nc=new I,Xi=new ri,Ln=new gt,gr=new I,Cs=new I,wd=new I,Td=new ri,Fc=new I(1,0,0),Oc=new I(0,1,0),Bc=new I(0,0,1),zc={type:"added"},Ad={type:"removed"},qi={type:"childadded",child:null},Oa={type:"childremoved",child:null},Lt=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new En,n=new ri,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Be}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Cs,gr,this.up):Ln.lookAt(gr,Cs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ad),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new I,Dn=new I,Ba=new I,Un=new I,Yi=new I,Zi=new I,kc=new I,za=new I,ka=new I,Ha=new I,Va=new ot,Ga=new ot,Wa=new ot,Mi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Dn.subVectors(n,t),Ba.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(Dn),l=mn.dot(Ba),c=Dn.dot(Dn),h=Dn.dot(Ba),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Va.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Va.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Dn.subVectors(e,t),mn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),Zi.subVectors(r,n),za.subVectors(e,n);let l=Yi.dot(za),c=Zi.dot(za);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,s);let h=Yi.dot(ka),d=Zi.dot(ka);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yi,a);Ha.subVectors(e,r);let p=Yi.dot(Ha),_=Zi.dot(Ha);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Zi,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return kc.subVectors(r,s),o=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(kc,o);let u=1/(m+v+f);return a=v*u,o=f*u,t.copy(n).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=pd(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xa(a,r,e+1/3),this.g=Xa(a,r,e),this.b=Xa(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return $e.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Bt){$e.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(_r);let n=Ra(Qn.h,_r.h,t),s=Ra(Qn.s,_r.s,t),r=Ra(Qn.l,_r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new ke;ke.NAMES=Bh;var Rd=0,Ai=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=$s(),this.name="",this.blending=es,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zt=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new I,yr=new ye,an=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}};var Wr=class extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xr=class extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cd=0,rn=new gt,qa=new Lt,$i=new I,en=new Ti,Is=new Ti,Ct=new I,$t=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Xr:Wr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(en.min,Is.min),en.expandByPoint(Ct),Ct.addVectors(en.max,Is.max),en.expandByPoint(Ct)):(en.expandByPoint(Is.min),en.expandByPoint(Is.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Ct.add($i)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let c=new I,h=new I,d=new I,f=new ye,p=new ye,_=new ye,v=new I,m=new I;function u(P,b,g){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,g),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,g),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[P].add(v),o[b].add(v),o[g].add(v),l[P].add(m),l[b].add(m),l[g].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,b=w.length;P<b;++P){let g=w[P],R=g.start,k=g.count;for(let z=R,q=R+k;z<q;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let E=new I,M=new I,L=new I,A=new I;function C(P){L.fromBufferAttribute(s,P),A.copy(L);let b=o[P];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),M.crossVectors(A,b);let R=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,b=w.length;P<b;++P){let g=w[P],R=g.start,k=g.count;for(let z=R,q=R+k;z<q;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new an(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new gt,mi=new Gr,xr=new zs,Vc=new I,vr=new I,Mr=new I,Sr=new I,Ya=new I,br=new I,Gc=new I,Er=new I,vt=class extends Lt{constructor(e=new $t,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ya.fromBufferAttribute(d,e),a?br.addScaledVector(Ya,h):br.addScaledVector(Ya.sub(t),h))}t.add(br)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(xr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(xr,Vc)===null||mi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,L=E;M<L;M+=3){let A=o.getX(M),C=o.getX(M+1),P=o.getX(M+2);s=wr(this,u,e,n,c,h,d,A,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let w=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=wr(this,a,e,n,c,h,d,w,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,L=E;M<L;M+=3){let A=M,C=M+1,P=M+2;s=wr(this,u,e,n,c,h,d,A,C,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let w=m,E=m+1,M=m+2;s=wr(this,a,e,n,c,h,d,w,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Id(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function wr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);let h=Id(i,e,t,n,vr,Mr,Sr,Gc);if(h){let d=new I;Mi.getBarycoord(Gc,vr,Mr,Sr,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,d,new ye)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,d,new ye)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Mi.getNormal(vr,Mr,Sr,f.normal),h.face=f,h.barycoord=d}return h}var yt=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function _(v,m,u,w,E,M,L,A,C,P,b){let g=M/C,R=L/P,k=M/2,z=L/2,q=A/2,ne=C+1,Y=P+1,oe=0,J=0,me=new I;for(let ve=0;ve<Y;ve++){let Te=ve*R-z;for(let He=0;He<ne;He++){let je=He*g-k;me[v]=je*w,me[m]=Te*E,me[u]=q,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[u]=A>0?1:-1,h.push(me.x,me.y,me.z),d.push(He/C),d.push(1-ve/P),oe+=1}}for(let ve=0;ve<P;ve++)for(let Te=0;Te<C;Te++){let He=f+Te+ne*ve,je=f+Te+ne*(ve+1),Q=f+(Te+1)+ne*(ve+1),ae=f+(Te+1)+ne*ve;l.push(He,je,ae),l.push(je,Q,ae),J+=6}o.addGroup(p,J,b),p+=J,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Pd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Ld={clone:cs,merge:Ht},Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new I,Wc=new ye,Xc=new ye,xt=class extends qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=-90,Ki=1,$o=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xt(Ji,Ki,e,t);s.layers=this.layers,this.add(s);let r=new xt(Ji,Ki,e,t);r.layers=this.layers,this.add(r);let a=new xt(Ji,Ki,e,t);a.layers=this.layers,this.add(a);let o=new xt(Ji,Ki,e,t);o.layers=this.layers,this.add(o);let l=new xt(Ji,Ki,e,t);l.layers=this.layers,this.add(l);let c=new xt(Ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yr=class extends Vt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jo=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yt(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=bn),new $o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Za=new I,Nd=new I,Fd=new Be,Fn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Za.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fd.getNormalMatrix(e),s=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new zs,Tr=new I,Hs=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],u=s[12],w=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-u).normalize(),n[1].setComponents(l+r,f+c,m+p,M+u).normalize(),n[2].setComponents(l+a,f+h,m+_,M+w).normalize(),n[3].setComponents(l-a,f-h,m-_,M-w).normalize(),n[4].setComponents(l-o,f-d,m-v,M-E).normalize(),t===Bn)n[5].setComponents(l+o,f+d,m+v,M+E).normalize();else if(t===Br)n[5].setComponents(o,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Od(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pt=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){let w=u*f-a;for(let E=0;E<c;E++){let M=E*d-r;_.push(M,-w,0),v.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let E=w+c*u,M=w+c*(u+1),L=w+1+c*(u+1),A=w+1+c*u;p.push(E,M,A),p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:Kd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:af,color_vertex:of,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:_f,envmap_common_pars_fragment:yf,envmap_pars_fragment:xf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Pf,envmap_vertex:Mf,fog_vertex:Sf,fog_pars_vertex:bf,fog_fragment:Ef,fog_pars_fragment:wf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:If,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:zf,lights_fragment_end:kf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:Zf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Jf,morphinstance_vertex:Kf,morphcolor_vertex:Qf,morphnormal_vertex:jf,morphtarget_pars_vertex:ep,morphtarget_vertex:tp,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:yp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:Ep,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Np,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Hp,cube_vert:Vp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:Zp,equirect_frag:$p,linedashed_vert:Jp,linedashed_frag:Kp,meshbasic_vert:Qp,meshbasic_frag:jp,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:am,meshphong_frag:om,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Sn={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Sn.physical={uniforms:Ht([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Ar={r:0,b:0,g:0},_i=new En,ym=new gt;function xm(i,e,t,n,s,r,a){let o=new ke(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function _(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function v(w){let E=!1,M=_(w);M===null?u(o,l):M&&M.isColor&&(u(M,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,E){let M=_(E);M&&(M.isCubeTexture||M.mapping===ca)?(h===void 0&&(h=new vt(new yt(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:cs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(E.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(_i)),h.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,(d!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new Pt(2,2),new wn({name:"BackgroundMaterial",uniforms:cs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,E){w.getRGB(Ar,zh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:v,addToRenderList:m}}function vm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(g,R,k,z,q){let ne=!1,Y=d(z,k,R);r!==Y&&(r=Y,c(r.object)),ne=p(g,z,k,q),ne&&_(g,z,k,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,M(g,R,k,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function d(g,R,k){let z=k.wireframe===!0,q=n[g.id];q===void 0&&(q={},n[g.id]=q);let ne=q[R.id];ne===void 0&&(ne={},q[R.id]=ne);let Y=ne[z];return Y===void 0&&(Y=f(l()),ne[z]=Y),Y}function f(g){let R=[],k=[],z=[];for(let q=0;q<t;q++)R[q]=0,k[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:z,object:g,attributes:{},index:null}}function p(g,R,k,z){let q=r.attributes,ne=R.attributes,Y=0,oe=k.getAttributes();for(let J in oe)if(oe[J].location>=0){let ve=q[J],Te=ne[J];if(Te===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(Te=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(Te=g.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function _(g,R,k,z){let q={},ne=R.attributes,Y=0,oe=k.getAttributes();for(let J in oe)if(oe[J].location>=0){let ve=ne[J];ve===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(ve=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(ve=g.instanceColor));let Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),q[J]=Te,Y++}r.attributes=q,r.attributesNum=Y,r.index=z}function v(){let g=r.newAttributes;for(let R=0,k=g.length;R<k;R++)g[R]=0}function m(g){u(g,0)}function u(g,R){let k=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;k[g]=1,z[g]===0&&(i.enableVertexAttribArray(g),z[g]=1),q[g]!==R&&(i.vertexAttribDivisor(g,R),q[g]=R)}function w(){let g=r.newAttributes,R=r.enabledAttributes;for(let k=0,z=R.length;k<z;k++)R[k]!==g[k]&&(i.disableVertexAttribArray(k),R[k]=0)}function E(g,R,k,z,q,ne,Y){Y===!0?i.vertexAttribIPointer(g,R,k,q,ne):i.vertexAttribPointer(g,R,k,z,q,ne)}function M(g,R,k,z){v();let q=z.attributes,ne=k.getAttributes(),Y=R.defaultAttributeValues;for(let oe in ne){let J=ne[oe];if(J.location>=0){let me=q[oe];if(me===void 0&&(oe==="instanceMatrix"&&g.instanceMatrix&&(me=g.instanceMatrix),oe==="instanceColor"&&g.instanceColor&&(me=g.instanceColor)),me!==void 0){let ve=me.normalized,Te=me.itemSize,He=e.get(me);if(He===void 0)continue;let je=He.buffer,Q=He.type,ae=He.bytesPerElement,xe=Q===i.INT||Q===i.UNSIGNED_INT||me.gpuType===Pl;if(me.isInterleavedBufferAttribute){let he=me.data,Le=he.stride,Ue=me.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<J.locationSize;Ve++)u(J.location+Ve,he.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)m(J.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ve=0;Ve<J.locationSize;Ve++)E(J.location+Ve,Te/J.locationSize,Q,ve,Le*ae,(Ue+Te/J.locationSize*Ve)*ae,xe)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)u(J.location+he,me.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<J.locationSize;he++)m(J.location+he);i.bindBuffer(i.ARRAY_BUFFER,je);for(let he=0;he<J.locationSize;he++)E(J.location+he,Te/J.locationSize,Q,ve,Te*ae,Te/J.locationSize*he*ae,xe)}}else if(Y!==void 0){let ve=Y[oe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(J.location,ve);break;case 3:i.vertexAttrib3fv(J.location,ve);break;case 4:i.vertexAttrib4fv(J.location,ve);break;default:i.vertexAttrib1fv(J.location,ve)}}}}w()}function L(){P();for(let g in n){let R=n[g];for(let k in R){let z=R[k];for(let q in z)h(z[q].object),delete z[q];delete R[k]}delete n[g]}}function A(g){if(n[g.id]===void 0)return;let R=n[g.id];for(let k in R){let z=R[k];for(let q in z)h(z[q].object),delete z[q];delete R[k]}delete n[g.id]}function C(g){for(let R in n){let k=n[R];if(k[g.id]===void 0)continue;let z=k[g.id];for(let q in z)h(z[q].object),delete z[q];delete k[g.id]}}function P(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Mm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function bm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Fn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,E=w*4,M=u.clippingState||null;l.value=M,M=h(_,f,E,p);for(let L=0;L!==E;++L)M[L]=t[L];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let u=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=p;E!==v;++E,M+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Em(i){let e=new WeakMap;function t(a,o){return o===go?a.mapping=rs:o===_o&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===go||o===_o)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Jo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zr=class extends qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ji=4,qc=[.125,.215,.35,.446,.526,.582],Si=20,$a=new Zr,Yc=new ke,Ja=null,Ka=0,Qa=0,ja=!1,xi=(1+Math.sqrt(5))/2,Qi=1/xi,Zc=[new I(-xi,Qi,0),new I(xi,Qi,0),new I(-Qi,0,xi),new I(Qi,0,xi),new I(0,xi,-Qi),new I(0,xi,Qi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],$r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Ka,Qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Zs,format:gn,colorSpace:_s,depthBuffer:!1},s=$c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(r)),this._blurMaterial=Tm(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,s){let o=new xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yc),h.toneMapping=ni,h.autoClear=!1;let p=new Zt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new vt(new yt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Yc),v=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let E=this._cubeSize;Rr(s,w*E,u>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zc[(s-r-1)%Zc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new vt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let u=[],w=0;for(let C=0;C<Si;++C){let P=C/v,b=Math.exp(-P*P/2);u.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let M=this._sizeLods[s],L=3*M*(s>E-ji?s-E+ji:0),A=4*(this._cubeSize-M);Rr(t,L,A,3*M,2*M),l.setRenderTarget(t),l.render(d,$a)}};function wm(i){let e=[],t=[],n=[],s=i,r=i-ji+1+qc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ji?l=qc[a-i+ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,m=2,u=1,w=new Float32Array(v*_*p),E=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(b,v*_*A),E.set(f,m*_*A);let g=[A,A,A,A,A,A];M.set(g,u*_*A)}let L=new $t;L.setAttribute("position",new an(w,v)),L.setAttribute("uv",new an(E,m)),L.setAttribute("faceIndex",new an(M,u)),e.push(L),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $c(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tm(i,e,t){let n=new Float32Array(Si),s=new I(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Jc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Kc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Am(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===go||l===_o,h=l===rs||l===as;if(c||h){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new $r(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new $r(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)e.update(f[_],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let E=0,M=w.length;E<M;E+=3){let L=w[E+0],A=w[E+1],C=w[E+2];f.push(L,A,A,C,C,L)}}else if(_!==void 0){let w=_.array;v=_.version;for(let E=0,M=w.length/3-1;E<M;E+=3){let L=E+0,A=E+1,C=E+2;f.push(L,A,A,C,C,L)}}else return;let m=new(Oh(f)?Xr:Wr)(f,1);m.version=v;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Im(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),t.update(p,n,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function d(f,p,_,v){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let u=0;for(let w=0;w<_;w++)u+=p[w]*v[w];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;p===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*L*4*d),C=new Vr(A,M,L,d);C.type=On,C.needsUpdate=!0;let P=E*4;for(let g=0;g<d;g++){let R=m[g],k=u[g],z=w[g],q=M*L*4*g;for(let ne=0;ne<R.count;ne++){let Y=ne*P;p===!0&&(s.fromBufferAttribute(R,ne),A[q+Y+0]=s.x,A[q+Y+1]=s.y,A[q+Y+2]=s.z,A[q+Y+3]=0),_===!0&&(s.fromBufferAttribute(k,ne),A[q+Y+4]=s.x,A[q+Y+5]=s.y,A[q+Y+6]=s.z,A[q+Y+7]=0),v===!0&&(s.fromBufferAttribute(z,ne),A[q+Y+8]=s.x,A[q+Y+9]=s.y,A[q+Y+10]=s.z,A[q+Y+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:C,size:new ye(M,L)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Dm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Jr=class extends Vt{constructor(e,t,n,s,r,a,o,l,c,h=ts){if(h!==ts&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=wi),n===void 0&&h===ls&&(n=os),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hh=new Vt,Qc=new Jr(1,1),Vh=new Vr,Gh=new Zo,Wh=new Yr,jc=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Tt(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Tt(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Tt(t,n)}}function Hm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=Fh,r=Qc):r=Hh,t.setTexture2D(e||r,s)}function Jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gh,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wh,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vh,s)}function jm(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Qm}}function e0(i,e){i.uniform1fv(this.addr,e)}function t0(i,e){let t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function n0(i,e){let t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function i0(i,e){let t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function s0(i,e){let t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r0(i,e){let t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a0(i,e){let t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o0(i,e){i.uniform1iv(this.addr,e)}function l0(i,e){i.uniform2iv(this.addr,e)}function c0(i,e){i.uniform3iv(this.addr,e)}function h0(i,e){i.uniform4iv(this.addr,e)}function u0(i,e){i.uniform1uiv(this.addr,e)}function d0(i,e){i.uniform2uiv(this.addr,e)}function f0(i,e){i.uniform3uiv(this.addr,e)}function p0(i,e){i.uniform4uiv(this.addr,e)}function m0(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hh,r[a])}function g0(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gh,r[a])}function _0(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wh,r[a])}function y0(i,e,t){let n=this.cache,s=e.length,r=ua(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vh,r[a])}function x0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return y0}}var Ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jm(t.type)}},Qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x0(t.type)}},jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},eo=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function v0(i,e,t){let n=i.name,s=n.length;for(eo.lastIndex=0;;){let r=eo.exec(n),a=eo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sh(t,c===void 0?new Ko(o,i,e):new Qo(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new jo(o),sh(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);v0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function rh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var M0=37297,S0=0;function b0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ah=new Be;function E0(i){$e._getMatrix(ah,$e.workingColorSpace,i);let e=`mat3( ${ah.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+b0(i.getShaderSource(e),a)}else return s}function w0(i,e){let t=E0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T0(i,e){let t;switch(e){case Ku:t="Linear";break;case Qu:t="Reinhard";break;case ju:t="Cineon";break;case la:t="ACESFilmic";break;case td:t="AgX";break;case nd:t="Neutral";break;case ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cr=new I;function A0(){$e.getLuminanceCoefficients(Cr);let i=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function C0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ds(i){return i!==""}function lh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(P0,D0)}var L0=new Map;function D0(i,e){let t=ze[e];if(t===void 0){let n=L0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(U0,N0)}function N0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case as:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case $u:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function k0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=F0(t),c=O0(t),h=B0(t),d=z0(t),f=k0(t),p=R0(t),_=C0(r),v=s.createProgram(),m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),u.length>0&&(u+=`
`)):(m=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),u=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ze.tonemapping_pars_fragment:"",t.toneMapping!==ni?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=el(a),a=lh(a,t),a=ch(a,t),o=el(o),o=lh(o,t),o=ch(o,t),a=hh(a),o=hh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=w+m+a,M=w+u+o,L=rh(s,s.VERTEX_SHADER,E),A=rh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,L),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(A).trim(),ne=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,A);else{let oe=oh(s,L,"vertex"),J=oh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+oe+`
`+J)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||q==="")&&(Y=!1);Y&&(R.diagnostics={runnable:ne,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(L),s.deleteShader(A),P=new is(s,v),b=I0(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,M0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}var V0=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}};function G0(i,e,t,n,s,r,a){let o=new ks,l=new tl,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,g,R,k,z){let q=k.fog,ne=z.geometry,Y=b.isMeshStandardMaterial?k.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),J=oe&&oe.mapping===ca?oe.image.height:null,me=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Te=ve!==void 0?ve.length:0,He=0;ne.morphAttributes.position!==void 0&&(He=1),ne.morphAttributes.normal!==void 0&&(He=2),ne.morphAttributes.color!==void 0&&(He=3);let je,Q,ae,xe;if(me){let Ke=Sn[me];je=Ke.vertexShader,Q=Ke.fragmentShader}else je=b.vertexShader,Q=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),xe=l.getFragmentShaderID(b);let he=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,lt=!!b.map,Ye=!!b.matcap,st=!!oe,N=!!b.aoMap,zt=!!b.lightMap,Ge=!!b.bumpMap,Xe=!!b.normalMap,Ae=!!b.displacementMap,rt=!!b.emissiveMap,Re=!!b.metalnessMap,T=!!b.roughnessMap,x=b.anisotropy>0,V=b.clearcoat>0,ee=b.dispersion>0,ie=b.iridescence>0,j=b.sheen>0,Me=b.transmission>0,ge=x&&!!b.anisotropyMap,U=V&&!!b.clearcoatMap,Z=V&&!!b.clearcoatNormalMap,B=V&&!!b.clearcoatRoughnessMap,H=ie&&!!b.iridescenceMap,K=ie&&!!b.iridescenceThicknessMap,se=j&&!!b.sheenColorMap,re=j&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,Ie=!!b.specularColorMap,Ze=!!b.specularIntensityMap,D=Me&&!!b.transmissionMap,pe=Me&&!!b.thicknessMap,$=!!b.gradientMap,te=!!b.alphaMap,ue=b.alphaTest>0,de=!!b.alphaHash,Fe=!!b.extensions,ht=ni;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Et={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:Q,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_s,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:Ye,envMap:st,envMapMode:st&&oe.mapping,envMapCubeUVHeight:J,aoMap:N,lightMap:zt,bumpMap:Ge,normalMap:Xe,displacementMap:f&&Ae,emissiveMap:rt,normalMapObjectSpace:Xe&&b.normalMapType===ad,normalMapTangentSpace:Xe&&b.normalMapType===Nh,metalnessMap:Re,roughnessMap:T,anisotropy:x,anisotropyMap:ge,clearcoat:V,clearcoatMap:U,clearcoatNormalMap:Z,clearcoatRoughnessMap:B,dispersion:ee,iridescence:ie,iridescenceMap:H,iridescenceThicknessMap:K,sheen:j,sheenColorMap:se,sheenRoughnessMap:re,specularMap:Ce,specularColorMap:Ie,specularIntensityMap:Ze,transmission:Me,transmissionMap:D,thicknessMap:pe,gradientMap:$,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:ue,alphaHash:de,combine:b.combine,mapUv:lt&&v(b.map.channel),aoMapUv:N&&v(b.aoMap.channel),lightMapUv:zt&&v(b.lightMap.channel),bumpMapUv:Ge&&v(b.bumpMap.channel),normalMapUv:Xe&&v(b.normalMap.channel),displacementMapUv:Ae&&v(b.displacementMap.channel),emissiveMapUv:rt&&v(b.emissiveMap.channel),metalnessMapUv:Re&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:ge&&v(b.anisotropyMap.channel),clearcoatMapUv:U&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Z&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(b.sheenRoughnessMap.channel),specularMapUv:Ce&&v(b.specularMap.channel),specularColorMapUv:Ie&&v(b.specularColorMap.channel),specularIntensityMapUv:Ze&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:pe&&v(b.thicknessMap.channel),alphaMapUv:te&&v(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Xe||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(lt||te),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:He,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qt,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function u(b){let g=[];if(b.shaderID?g.push(b.shaderID):(g.push(b.customVertexShaderID),g.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)g.push(R),g.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(g,b),E(g,b),g.push(i.outputColorSpace)),g.push(b.customProgramCacheKey),g.join()}function w(b,g){b.push(g.precision),b.push(g.outputColorSpace),b.push(g.envMapMode),b.push(g.envMapCubeUVHeight),b.push(g.mapUv),b.push(g.alphaMapUv),b.push(g.lightMapUv),b.push(g.aoMapUv),b.push(g.bumpMapUv),b.push(g.normalMapUv),b.push(g.displacementMapUv),b.push(g.emissiveMapUv),b.push(g.metalnessMapUv),b.push(g.roughnessMapUv),b.push(g.anisotropyMapUv),b.push(g.clearcoatMapUv),b.push(g.clearcoatNormalMapUv),b.push(g.clearcoatRoughnessMapUv),b.push(g.iridescenceMapUv),b.push(g.iridescenceThicknessMapUv),b.push(g.sheenColorMapUv),b.push(g.sheenRoughnessMapUv),b.push(g.specularMapUv),b.push(g.specularColorMapUv),b.push(g.specularIntensityMapUv),b.push(g.transmissionMapUv),b.push(g.thicknessMapUv),b.push(g.combine),b.push(g.fogExp2),b.push(g.sizeAttenuation),b.push(g.morphTargetsCount),b.push(g.morphAttributeCount),b.push(g.numDirLights),b.push(g.numPointLights),b.push(g.numSpotLights),b.push(g.numSpotLightMaps),b.push(g.numHemiLights),b.push(g.numRectAreaLights),b.push(g.numDirLightShadows),b.push(g.numPointLightShadows),b.push(g.numSpotLightShadows),b.push(g.numSpotLightShadowsWithMaps),b.push(g.numLightProbes),b.push(g.shadowMapType),b.push(g.toneMapping),b.push(g.numClippingPlanes),b.push(g.numClipIntersection),b.push(g.depthPacking)}function E(b,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reverseDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let g=_[b.type],R;if(g){let k=Sn[g];R=Ld.clone(k.uniforms)}else R=b.uniforms;return R}function L(b,g){let R;for(let k=0,z=h.length;k<z;k++){let q=h[k];if(q.cacheKey===g){R=q,++R.usedTimes;break}}return R===void 0&&(R=new H0(i,g,b,r),h.push(R)),R}function A(b){if(--b.usedTimes===0){let g=h.indexOf(b);h[g]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function W0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function X0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,_,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,f,p,_,v,m){let u=a(d,f,p,_,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,_,v,m){let u=a(d,f,p,_,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||X0),n.length>1&&n.sort(f||dh),s.length>1&&s.sort(f||dh)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function q0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new fh,i.set(n,[a])):s>=r.length?(a=new fh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Z0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $0=0;function J0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K0(i){let e=new Y0,t=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new gt,a=new gt;function o(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,w=0,E=0,M=0,L=0,A=0,C=0;c.sort(J0);for(let b=0,g=c.length;b<g;b++){let R=c[b],k=R.color,z=R.intensity,q=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*z,d+=k.g*z,f+=k.b*z;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],z);C++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let oe=R.shadow,J=t.get(R);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=Y,p++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=q,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[v]=Y;let oe=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,oe.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=oe.matrix,R.castShadow){let J=t.get(R);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=ne,M++}v++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=Y,m++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let oe=R.shadow,J=t.get(R);J.shadowIntensity=oe.intensity,J.shadowBias=oe.bias,J.shadowNormalBias=oe.normalBias,J.shadowRadius=oe.radius,J.shadowMapSize=oe.mapSize,J.shadowCameraNear=oe.camera.near,J.shadowCameraFar=oe.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=Y,_++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(z),Y.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=p,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=C,n.version=$0++)}function l(c,h){let d=0,f=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let E=c[u];if(E.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function ph(i){let e=new K0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ph(i),e.set(s,[o])):r>=a.length?(o=new ph(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var il=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tg(i,e,t){let n=new Hs,s=new ye,r=new ye,a=new ot,o=new il({depthPacking:rd}),l=new sl,c={},h=t.maxTextureSize,d={[ii]:Yt,[Yt]:ii,[qt]:qt},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:j0,fragmentShader:eg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new $t;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let u=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),g=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=u!==Nn&&this.type===Nn,q=u===Nn&&this.type!==Nn;for(let ne=0,Y=A.length;ne<Y;ne++){let oe=A[ne],J=oe.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let me=J.getFrameExtents();if(s.multiply(me),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,J.mapSize.y=r.y)),J.map===null||z===!0||q===!0){let Te=this.type!==Nn?{minFilter:_n,magFilter:_n}:{};J.map!==null&&J.map.dispose(),J.map=new Hn(s.x,s.y,Te),J.map.texture.name=oe.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ve=J.getViewportCount();for(let Te=0;Te<ve;Te++){let He=J.getViewport(Te);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),k.viewport(a),J.updateMatrices(oe,Te),n=J.getFrustum(),M(C,P,J.camera,oe,this.type)}J.isPointLightShadow!==!0&&this.type===Nn&&w(J,P),J.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,g,R)};function w(A,C){let P=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,p,v,null)}function E(A,C,P,b){let g=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)g=R;else if(g=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=g.uuid,z=C.uuid,q=c[k];q===void 0&&(q={},c[k]=q);let ne=q[z];ne===void 0&&(ne=g.clone(),q[z]=ne,C.addEventListener("dispose",L)),g=ne}if(g.visible=C.visible,g.wireframe=C.wireframe,b===Nn?g.side=C.shadowSide!==null?C.shadowSide:C.side:g.side=C.shadowSide!==null?C.shadowSide:d[C.side],g.alphaMap=C.alphaMap,g.alphaTest=C.alphaTest,g.map=C.map,g.clipShadows=C.clipShadows,g.clippingPlanes=C.clippingPlanes,g.clipIntersection=C.clipIntersection,g.displacementMap=C.displacementMap,g.displacementScale=C.displacementScale,g.displacementBias=C.displacementBias,g.wireframeLinewidth=C.wireframeLinewidth,g.linewidth=C.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let k=i.properties.get(g);k.light=P}return g}function M(A,C,P,b,g){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===Nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let z=e.update(A),q=A.material;if(Array.isArray(q)){let ne=z.groups;for(let Y=0,oe=ne.length;Y<oe;Y++){let J=ne[Y],me=q[J.materialIndex];if(me&&me.visible){let ve=E(A,me,b,g);A.onBeforeShadow(i,A,C,P,z,ve,J),i.renderBufferDirect(P,null,z,ve,A,J),A.onAfterShadow(i,A,C,P,z,ve,J)}}}else if(q.visible){let ne=E(A,q,b,g);A.onBeforeShadow(i,A,C,P,z,ne,null),i.renderBufferDirect(P,null,z,ne,A,null),A.onAfterShadow(i,A,C,P,z,ne,null)}}let k=A.children;for(let z=0,q=k.length;z<q;z++)M(k[z],C,P,b,g)}function L(A){A.target.removeEventListener("dispose",L);for(let P in c){let b=c[P],g=A.target.uuid;g in b&&(b[g].dispose(),delete b[g])}}}var ng={[lo]:co,[ho]:po,[uo]:mo,[ss]:fo,[co]:lo,[po]:ho,[mo]:uo,[fo]:ss};function ig(i,e){function t(){let D=!1,pe=new ot,$=null,te=new ot(0,0,0,0);return{setMask:function(ue){$!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){D=ue},setClear:function(ue,de,Fe,ht,Et){Et===!0&&(ue*=ht,de*=ht,Fe*=ht),pe.set(ue,de,Fe,ht),te.equals(pe)===!1&&(i.clearColor(ue,de,Fe,ht),te.copy(pe))},reset:function(){D=!1,$=null,te.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,$=null,te=null,ue=null;return{setReversed:function(de){if(pe!==de){let Fe=e.get("EXT_clip_control");pe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);let ht=ue;ue=null,this.setClear(ht)}pe=de},getReversed:function(){return pe},setTest:function(de){de?he(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(de){$!==de&&!D&&(i.depthMask(de),$=de)},setFunc:function(de){if(pe&&(de=ng[de]),te!==de){switch(de){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=de}},setLocked:function(de){D=de},setClear:function(de){ue!==de&&(pe&&(de=1-de),i.clearDepth(de),ue=de)},reset:function(){D=!1,$=null,te=null,ue=null,pe=!1}}}function s(){let D=!1,pe=null,$=null,te=null,ue=null,de=null,Fe=null,ht=null,Et=null;return{setTest:function(Ke){D||(Ke?he(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ke){pe!==Ke&&!D&&(i.stencilMask(Ke),pe=Ke)},setFunc:function(Ke,Nt,kt){($!==Ke||te!==Nt||ue!==kt)&&(i.stencilFunc(Ke,Nt,kt),$=Ke,te=Nt,ue=kt)},setOp:function(Ke,Nt,kt){(de!==Ke||Fe!==Nt||ht!==kt)&&(i.stencilOp(Ke,Nt,kt),de=Ke,Fe=Nt,ht=kt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){Et!==Ke&&(i.clearStencil(Ke),Et=Ke)},reset:function(){D=!1,pe=null,$=null,te=null,ue=null,de=null,Fe=null,ht=null,Et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,w=null,E=null,M=null,L=null,A=null,C=new ke(0,0,0),P=0,b=!1,g=null,R=null,k=null,z=null,q=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,oe=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=oe>=1):J.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=oe>=2);let me=null,ve={},Te=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),je=new ot().fromArray(Te),Q=new ot().fromArray(He);function ae(D,pe,$,te){let ue=new Uint8Array(4),de=i.createTexture();i.bindTexture(D,de),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<$;Fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return de}let xe={};xe[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(ss),Ge(!1),Xe(gc),he(i.CULL_FACE),N(ti);function he(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ue(D,pe){return d[D]!==pe?(i.bindFramebuffer(D,pe),d[D]=pe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ve(D,pe){let $=p,te=!1;if(D){$=f.get(pe),$===void 0&&($=[],f.set(pe,$));let ue=D.textures;if($.length!==ue.length||$[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Fe=ue.length;de<Fe;de++)$[de]=i.COLOR_ATTACHMENT0+de;$.length=ue.length,te=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,te=!0);te&&i.drawBuffers($)}function lt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Ye={[vi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};Ye[Uu]=i.MIN,Ye[Nu]=i.MAX;let st={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,pe,$,te,ue,de,Fe,ht,Et,Ke){if(D===ti){v===!0&&(Le(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),D!==Pu){if(D!==m||Ke!==b){if((u!==vi||M!==vi)&&(i.blendEquation(i.FUNC_ADD),u=vi,M=vi),Ke)switch(D){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,L=null,A=null,C.set(0,0,0),P=0,m=D,b=Ke}return}ue=ue||pe,de=de||$,Fe=Fe||te,(pe!==u||ue!==M)&&(i.blendEquationSeparate(Ye[pe],Ye[ue]),u=pe,M=ue),($!==w||te!==E||de!==L||Fe!==A)&&(i.blendFuncSeparate(st[$],st[te],st[de],st[Fe]),w=$,E=te,L=de,A=Fe),(ht.equals(C)===!1||Et!==P)&&(i.blendColor(ht.r,ht.g,ht.b,Et),C.copy(ht),P=Et),m=D,b=!1}function zt(D,pe){D.side===qt?Le(i.CULL_FACE):he(i.CULL_FACE);let $=D.side===Yt;pe&&($=!$),Ge($),D.blending===es&&D.transparent===!1?N(ti):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let te=D.stencilWrite;o.setTest(te),te&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){g!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),g=D)}function Xe(D){D!==Cu?(he(i.CULL_FACE),D!==R&&(D===gc?i.cullFace(i.BACK):D===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),R=D}function Ae(D){D!==k&&(Y&&i.lineWidth(D),k=D)}function rt(D,pe,$){D?(he(i.POLYGON_OFFSET_FILL),(z!==pe||q!==$)&&(i.polygonOffset(pe,$),z=pe,q=$)):Le(i.POLYGON_OFFSET_FILL)}function Re(D){D?he(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+ne-1),me!==D&&(i.activeTexture(D),me=D)}function x(D,pe,$){$===void 0&&(me===null?$=i.TEXTURE0+ne-1:$=me);let te=ve[$];te===void 0&&(te={type:void 0,texture:void 0},ve[$]=te),(te.type!==D||te.texture!==pe)&&(me!==$&&(i.activeTexture($),me=$),i.bindTexture(D,pe||xe[D]),te.type=D,te.texture=pe)}function V(){let D=ve[me];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(D){je.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function re(D){Q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function Ce(D,pe){let $=c.get(pe);$===void 0&&($=new WeakMap,c.set(pe,$));let te=$.get(D);te===void 0&&(te=i.getUniformBlockIndex(pe,D.name),$.set(D,te))}function Ie(D,pe){let te=c.get(pe).get(D);l.get(pe)!==te&&(i.uniformBlockBinding(pe,te,D.__bindingPointIndex),l.set(pe,te))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,w=null,E=null,M=null,L=null,A=null,C=new ke(0,0,0),P=0,b=!1,g=null,R=null,k=null,z=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Le,bindFramebuffer:Ue,drawBuffers:Ve,useProgram:lt,setBlending:N,setMaterial:zt,setFlipSided:Ge,setCullFace:Xe,setLineWidth:Ae,setPolygonOffset:rt,setScissorTest:Re,activeTexture:T,bindTexture:x,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:H,texImage3D:K,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:Z,texStorage3D:B,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:ge,compressedTexSubImage3D:U,scissor:se,viewport:re,reset:Ze}}function mh(i,e,t,n){let s=sg(n);switch(t){case Rh:return i*e;case Ih:return i*e;case Ph:return i*e*2;case Lh:return i*e/s.components*s.byteLength;case Ul:return i*e/s.components*s.byteLength;case Dh:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case Ch:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case Fl:return i*e*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case So:return Math.max(i,16)*Math.max(e,8)/4;case xo:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fr:case ko:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uh:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Go:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(i){switch(i){case kn:case wh:return{byteLength:1,components:1};case Bs:case Th:case Zs:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case wi:case Pl:case On:return{byteLength:4,components:1};case Ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return p?new OffscreenCanvas(T,x):kr("canvas")}function v(T,x,V){let ee=1,ie=Re(T);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let j=Math.floor(ee*ie.width),Me=Math.floor(ee*ie.height);d===void 0&&(d=_(j,Me));let ge=x?_(j,Me):d;return ge.width=j,ge.height=Me,ge.getContext("2d").drawImage(T,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Me+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,V,ee,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),x===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),x===i.RGBA){let Me=ie?ha:$e.getTransfer(ee);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=Me===at?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(T,x){let V;return T?x===null||x===wi||x===os?V=i.DEPTH24_STENCIL8:x===On?V=i.DEPTH32F_STENCIL8:x===Bs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===os?V=i.DEPTH_COMPONENT24:x===On?V=i.DEPTH_COMPONENT32F:x===Bs&&(V=i.DEPTH_COMPONENT16),V}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function C(T){let x=T.target;x.removeEventListener("dispose",C),g(x)}function P(T){let x=n.get(T);if(x.__webglInit===void 0)return;let V=T.source,ee=f.get(V);if(ee){let ie=ee[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(T),Object.keys(ee).length===0&&f.delete(V)}n.remove(T)}function b(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let V=T.source,ee=f.get(V);delete ee[x.__cacheKey],a.memory.textures--}function g(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let ie=0;ie<x.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=T.textures;for(let ee=0,ie=V.length;ee<ie;ee++){let j=n.get(V[ee]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[ee])}n.remove(T)}let R=0;function k(){R=0}function z(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function q(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ne(T,x){let V=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,T,x);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function Y(T,x){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Q(V,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function oe(T,x){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Q(V,T,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function J(T,x){let V=n.get(T);if(T.version>0&&V.__version!==T.version){ae(V,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let me={[Os]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},ve={[_n]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Te={[od]:i.NEVER,[fd]:i.ALWAYS,[ld]:i.LESS,[Fh]:i.LEQUAL,[cd]:i.EQUAL,[dd]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function He(T,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===wa||x.magFilter===cr||x.magFilter===Ei||x.minFilter===bn||x.minFilter===wa||x.minFilter===cr||x.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,me[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,me[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,me[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==cr&&x.minFilter!==Ei||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function je(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let ee=x.source,ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));let j=q(x);if(j!==T.__cacheKey){ie[j]===void 0&&(ie[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[j].usedTimes++;let Me=ie[T.__cacheKey];Me!==void 0&&(ie[T.__cacheKey].usedTimes--,Me.usedTimes===0&&b(x)),T.__cacheKey=j,T.__webglTexture=ie[j].texture}return V}function Q(T,x,V){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);let ie=je(T,x),j=x.source;t.bindTexture(ee,T.__webglTexture,i.TEXTURE0+V);let Me=n.get(j);if(j.version!==Me.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);let ge=$e.getPrimaries($e.workingColorSpace),U=x.colorSpace===ei?null:$e.getPrimaries(x.colorSpace),Z=x.colorSpace===ei||ge===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let B=v(x.image,!1,s.maxTextureSize);B=rt(x,B);let H=r.convert(x.format,x.colorSpace),K=r.convert(x.type),se=E(x.internalFormat,H,K,x.colorSpace,x.isVideoTexture);He(ee,x);let re,Ce=x.mipmaps,Ie=x.isVideoTexture!==!0,Ze=Me.__version===void 0||ie===!0,D=j.dataReady,pe=L(x,B);if(x.isDepthTexture)se=M(x.format===ls,x.type),Ze&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,se,B.width,B.height):t.texImage2D(i.TEXTURE_2D,0,se,B.width,B.height,0,H,K,null));else if(x.isDataTexture)if(Ce.length>0){Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,pe,se,Ce[0].width,Ce[0].height);for(let $=0,te=Ce.length;$<te;$++)re=Ce[$],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,re.width,re.height,H,K,re.data):t.texImage2D(i.TEXTURE_2D,$,se,re.width,re.height,0,H,K,re.data);x.generateMipmaps=!1}else Ie?(Ze&&t.texStorage2D(i.TEXTURE_2D,pe,se,B.width,B.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,H,K,B.data)):t.texImage2D(i.TEXTURE_2D,0,se,B.width,B.height,0,H,K,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,se,Ce[0].width,Ce[0].height,B.depth);for(let $=0,te=Ce.length;$<te;$++)if(re=Ce[$],x.format!==gn)if(H!==null)if(Ie){if(D)if(x.layerUpdates.size>0){let ue=mh(re.width,re.height,x.format,x.type);for(let de of x.layerUpdates){let Fe=re.data.subarray(de*ue/re.data.BYTES_PER_ELEMENT,(de+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,de,re.width,re.height,1,H,Fe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,B.depth,H,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,se,re.width,re.height,B.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,B.depth,H,K,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,se,re.width,re.height,B.depth,0,H,K,re.data)}else{Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,pe,se,Ce[0].width,Ce[0].height);for(let $=0,te=Ce.length;$<te;$++)re=Ce[$],x.format!==gn?H!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,re.width,re.height,H,re.data):t.compressedTexImage2D(i.TEXTURE_2D,$,se,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,re.width,re.height,H,K,re.data):t.texImage2D(i.TEXTURE_2D,$,se,re.width,re.height,0,H,K,re.data)}else if(x.isDataArrayTexture)if(Ie){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,se,B.width,B.height,B.depth),D)if(x.layerUpdates.size>0){let $=mh(B.width,B.height,x.format,x.type);for(let te of x.layerUpdates){let ue=B.data.subarray(te*$/B.data.BYTES_PER_ELEMENT,(te+1)*$/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,B.width,B.height,1,H,K,ue)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,H,K,B.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,B.width,B.height,B.depth,0,H,K,B.data);else if(x.isData3DTexture)Ie?(Ze&&t.texStorage3D(i.TEXTURE_3D,pe,se,B.width,B.height,B.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,H,K,B.data)):t.texImage3D(i.TEXTURE_3D,0,se,B.width,B.height,B.depth,0,H,K,B.data);else if(x.isFramebufferTexture){if(Ze)if(Ie)t.texStorage2D(i.TEXTURE_2D,pe,se,B.width,B.height);else{let $=B.width,te=B.height;for(let ue=0;ue<pe;ue++)t.texImage2D(i.TEXTURE_2D,ue,se,$,te,0,H,K,null),$>>=1,te>>=1}}else if(Ce.length>0){if(Ie&&Ze){let $=Re(Ce[0]);t.texStorage2D(i.TEXTURE_2D,pe,se,$.width,$.height)}for(let $=0,te=Ce.length;$<te;$++)re=Ce[$],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,H,K,re):t.texImage2D(i.TEXTURE_2D,$,se,H,K,re);x.generateMipmaps=!1}else if(Ie){if(Ze){let $=Re(B);t.texStorage2D(i.TEXTURE_2D,pe,se,$.width,$.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,H,K,B)}else t.texImage2D(i.TEXTURE_2D,0,se,H,K,B);m(x)&&u(ee),Me.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ae(T,x,V){if(x.image.length!==6)return;let ee=je(T,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let j=n.get(ie);if(ie.version!==j.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);let Me=$e.getPrimaries($e.workingColorSpace),ge=x.colorSpace===ei?null:$e.getPrimaries(x.colorSpace),U=x.colorSpace===ei||Me===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);let Z=x.isCompressedTexture||x.image[0].isCompressedTexture,B=x.image[0]&&x.image[0].isDataTexture,H=[];for(let te=0;te<6;te++)!Z&&!B?H[te]=v(x.image[te],!0,s.maxCubemapSize):H[te]=B?x.image[te].image:x.image[te],H[te]=rt(x,H[te]);let K=H[0],se=r.convert(x.format,x.colorSpace),re=r.convert(x.type),Ce=E(x.internalFormat,se,re,x.colorSpace),Ie=x.isVideoTexture!==!0,Ze=j.__version===void 0||ee===!0,D=ie.dataReady,pe=L(x,K);He(i.TEXTURE_CUBE_MAP,x);let $;if(Z){Ie&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ce,K.width,K.height);for(let te=0;te<6;te++){$=H[te].mipmaps;for(let ue=0;ue<$.length;ue++){let de=$[ue];x.format!==gn?se!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,de.width,de.height,se,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,de.width,de.height,se,re,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ce,de.width,de.height,0,se,re,de.data)}}}else{if($=x.mipmaps,Ie&&Ze){$.length>0&&pe++;let te=Re(H[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ce,te.width,te.height)}for(let te=0;te<6;te++)if(B){Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,H[te].width,H[te].height,se,re,H[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,H[te].width,H[te].height,0,se,re,H[te].data);for(let ue=0;ue<$.length;ue++){let Fe=$[ue].image[te].image;Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Fe.width,Fe.height,se,re,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ce,Fe.width,Fe.height,0,se,re,Fe.data)}}else{Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,se,re,H[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,se,re,H[te]);for(let ue=0;ue<$.length;ue++){let de=$[ue];Ie?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,se,re,de.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ce,se,re,de.image[te])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),j.__version=ie.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xe(T,x,V,ee,ie,j){let Me=r.convert(V.format,V.colorSpace),ge=r.convert(V.type),U=E(V.internalFormat,Me,ge,V.colorSpace),Z=n.get(x),B=n.get(V);if(B.__renderTarget=x,!Z.__hasExternalTextures){let H=Math.max(1,x.width>>j),K=Math.max(1,x.height>>j);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,U,H,K,x.depth,0,Me,ge,null):t.texImage2D(ie,j,U,H,K,0,Me,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,B.__webglTexture,0,Ge(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,B.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(T,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let ee=x.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,j=M(x.stencilBuffer,ie),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ge(x);Xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,j,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let ee=x.textures;for(let ie=0;ie<ee.length;ie++){let j=ee[ie],Me=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),U=E(j.internalFormat,Me,ge,j.colorSpace),Z=Ge(x);V&&Xe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,U,x.width,x.height):Xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,U,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,U,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(x.depthTexture);ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne(x.depthTexture,0);let ie=ee.__webglTexture,j=Ge(x);if(x.depthTexture.format===ts)Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===ls)Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ue(T){let x=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ee=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=ee}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(x.__webglFramebuffer,T)}else if(V){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=i.createRenderbuffer(),he(x.__webglDepthbuffer[ee],T,!1);else{let ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),he(x.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,x,V){let ee=n.get(T);x!==void 0&&xe(ee.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ue(T)}function lt(T){let x=T.texture,V=n.get(T),ee=n.get(x);T.addEventListener("dispose",C);let ie=T.textures,j=T.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let U=0;U<x.mipmaps.length;U++)V.__webglFramebuffer[ge][U]=i.createFramebuffer()}else V.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)V.__webglFramebuffer[ge]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ge=0,U=ie.length;ge<U;ge++){let Z=n.get(ie[ge]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Xe(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){let U=ie[ge];V.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ge]);let Z=r.convert(U.format,U.colorSpace),B=r.convert(U.type),H=E(U.internalFormat,Z,B,U.colorSpace,T.isXRRenderTarget===!0),K=Ge(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,H,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,V.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),he(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),He(i.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let U=0;U<x.mipmaps.length;U++)xe(V.__webglFramebuffer[ge][U],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U);else xe(V.__webglFramebuffer[ge],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ge=0,U=ie.length;ge<U;ge++){let Z=ie[ge],B=n.get(Z);t.bindTexture(i.TEXTURE_2D,B.__webglTexture),He(i.TEXTURE_2D,Z),xe(V.__webglFramebuffer,T,Z,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Z)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),He(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let U=0;U<x.mipmaps.length;U++)xe(V.__webglFramebuffer[U],T,x,i.COLOR_ATTACHMENT0,ge,U);else xe(V.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ge,0);m(x)&&u(ge),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Ye(T){let x=T.textures;for(let V=0,ee=x.length;V<ee;V++){let ie=x[V];if(m(ie)){let j=w(T),Me=n.get(ie).__webglTexture;t.bindTexture(j,Me),u(j),t.unbindTexture()}}}let st=[],N=[];function zt(T){if(T.samples>0){if(Xe(T)===!1){let x=T.textures,V=T.width,ee=T.height,ie=i.COLOR_BUFFER_BIT,j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),ge=x.length>1;if(ge)for(let U=0;U<x.length;U++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let U=0;U<x.length;U++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[U]);let Z=n.get(x[U]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,i.NEAREST),l===!0&&(st.length=0,N.length=0,st.push(i.COLOR_ATTACHMENT0+U),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let U=0;U<x.length;U++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,Me.__webglColorRenderbuffer[U]);let Z=n.get(x[U]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ge(T){return Math.min(s.maxSamples,T.samples)}function Xe(T){let x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function rt(T,x){let V=T.colorSpace,ee=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==_s&&V!==ei&&($e.getTransfer(V)===at?(ee!==gn||ie!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=oe,this.setTextureCube=J,this.rebindTextures=Ve,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Xe}function ag(i,e){function t(n,s=ei){let r,a=$e.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.BYTE;if(n===Th)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===gn)return i.RGBA;if(n===Ih)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===Dh)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ur||n===Nr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===Eo)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===ko||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===Vo||n===Go||n===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rl=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:lg,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,v=new al,m=t.getContextAttributes(),u=null,w=null,E=[],M=[],L=new ye,A=null,C=new xt;C.viewport=new ot;let P=new xt;P.viewport=new ot;let b=[C,P],g=new rl,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Us,E[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Us,E[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=E[Q];return ae===void 0&&(ae=new Us,E[Q]=ae),ae.getHandSpace()};function z(Q){let ae=M.indexOf(Q.inputSource);if(ae===-1)return;let xe=E[ae];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<E.length;Q++){let ae=M[Q];ae!==null&&(M[Q]=null,E[Q].disconnect(ae))}R=null,k=null,v.reset(),e.setRenderTarget(u),p=null,f=null,d=null,s=null,w=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Hn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,xe=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ls:ts,xe=m.stencil?os:wi);let Le={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Hn(f.textureWidth,f.textureHeight,{format:gn,type:kn,depthTexture:new Jr(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(Q){for(let ae=0;ae<Q.removed.length;ae++){let xe=Q.removed[ae],he=M.indexOf(xe);he>=0&&(M[he]=null,E[he].disconnect(xe))}for(let ae=0;ae<Q.added.length;ae++){let xe=Q.added[ae],he=M.indexOf(xe);if(he===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=M.length){M.push(xe),he=Ue;break}else if(M[Ue]===null){M[Ue]=xe,he=Ue;break}if(he===-1)break}let Le=E[he];Le&&Le.connect(xe)}}let Y=new I,oe=new I;function J(Q,ae,xe){Y.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let he=Y.distanceTo(oe),Le=ae.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Ve=Le[14]/(Le[10]-1),lt=Le[14]/(Le[10]+1),Ye=(Le[9]+1)/Le[5],st=(Le[9]-1)/Le[5],N=(Le[8]-1)/Le[0],zt=(Ue[8]+1)/Ue[0],Ge=Ve*N,Xe=Ve*zt,Ae=he/(-N+zt),rt=Ae*-N;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(Ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Re=Ve+Ae,T=lt+Ae,x=Ge-rt,V=Xe+(he-rt),ee=Ye*lt/T*Re,ie=st*lt/T*Re;Q.projectionMatrix.makePerspective(x,V,ee,ie,Re,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function me(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,xe=Q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),g.near=P.near=C.near=ae,g.far=P.far=C.far=xe,(R!==g.near||k!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),R=g.near,k=g.far),C.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,g.layers.mask=C.layers.mask|P.layers.mask;let he=Q.parent,Le=g.cameras;me(g,he);for(let Ue=0;Ue<Le.length;Ue++)me(Le[Ue],he);Le.length===2?J(g,C,P):g.projectionMatrix.copy(C.projectionMatrix),ve(Q,g,he)};function ve(Q,ae,xe){xe===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let Te=null;function He(Q,ae){if(h=ae.getViewerPose(c||a),_=ae,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let he=!1;xe.length!==g.cameras.length&&(g.cameras.length=0,he=!0);for(let Ue=0;Ue<xe.length;Ue++){let Ve=xe[Ue],lt=null;if(p!==null)lt=p.getViewport(Ve);else{let st=d.getViewSubImage(f,Ve);lt=st.viewport,Ue===0&&(e.setRenderTargetTextures(w,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(w))}let Ye=b[Ue];Ye===void 0&&(Ye=new xt,Ye.layers.enable(Ue),Ye.viewport=new ot,b[Ue]=Ye),Ye.matrix.fromArray(Ve.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ve.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(lt.x,lt.y,lt.width,lt.height),Ue===0&&(g.matrix.copy(Ye.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),he===!0&&g.cameras.push(Ye)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Ue=d.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,s.renderState)}}for(let xe=0;xe<E.length;xe++){let he=M[xe],Le=E[xe];he!==null&&Le!==void 0&&Le.update(he,ae,c||a)}Te&&Te(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}let je=new kh;je.setAnimationLoop(He),this.setAnimationLoop=function(Q){Te=Q},this.dispose=function(){}}},yi=new En,hg=new gt;function ug(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,zh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let w=e.get(u),E=w.envMap,M=w.envMapRotation;E&&(m.envMap.value=E,yi.copy(M),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(yi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Yt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let M=E.program;n.uniformBlockBinding(w,M)}function c(w,E){let M=s[w.id];M===void 0&&(_(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));let L=E.program;n.updateUBOMapping(w,L);let A=e.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){let E=d();w.__bindingPointIndex=E;let M=i.createBuffer(),L=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=s[w.id],M=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=M.length;A<C;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,g=P.length;b<g;b++){let R=P[b];if(p(R,A,b,L)===!0){let k=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],q=0;for(let ne=0;ne<z.length;ne++){let Y=z[ne],oe=v(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,k+q,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,q),q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,M,L){let A=w.value,C=E+"_"+M;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{let P=L[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(w){let E=w.uniforms,M=0,L=16;for(let C=0,P=E.length;C<P;C++){let b=Array.isArray(E[C])?E[C]:[E[C]];for(let g=0,R=b.length;g<R;g++){let k=b[g],z=Array.isArray(k.value)?k.value:[k.value];for(let q=0,ne=z.length;q<ne;q++){let Y=z[q],oe=v(Y),J=M%L,me=J%oe.boundary,ve=J+me;M+=me,ve!==0&&L-ve<oe.storage&&(M+=L-ve),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=oe.storage}}}let A=M%L;return A>0&&(M+=L-A),w.__size=M,w.__cache={},this}function v(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Vs=class{constructor(e={}){let{canvas:t=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=ni,this.toneMappingExposure=1;let M=this,L=!1,A=0,C=0,P=null,b=-1,g=null,R=new ot,k=new ot,z=null,q=new ke(0),ne=0,Y=t.width,oe=t.height,J=1,me=null,ve=null,Te=new ot(0,0,Y,oe),He=new ot(0,0,Y,oe),je=!1,Q=new Hs,ae=!1,xe=!1,he=new gt,Le=new gt,Ue=new I,Ve=new ot,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function st(){return P===null?J:1}let N=n;function zt(S,F){return t.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){let F="webgl2";if(N=zt(F,S),N===null)throw zt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ge,Xe,Ae,rt,Re,T,x,V,ee,ie,j,Me,ge,U,Z,B,H,K,se,re,Ce,Ie,Ze,D;function pe(){Ge=new Rm(N),Ge.init(),Ie=new ag(N,Ge),Xe=new Sm(N,Ge,e,Ie),Ae=new ig(N,Ge),Xe.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),rt=new Pm(N),Re=new W0,T=new rg(N,Ge,Ae,Re,Xe,Ie,rt),x=new Em(M),V=new Am(M),ee=new Od(N),Ze=new vm(N,ee),ie=new Cm(N,ee,rt,Ze),j=new Dm(N,ie,ee,rt),se=new Lm(N,Xe,T),B=new bm(Re),Me=new G0(M,x,V,Ge,Xe,Ze,B),ge=new ug(M,Re),U=new q0,Z=new Q0(Ge),K=new xm(M,x,V,Ae,j,p,l),H=new tg(M,j,Xe),D=new dg(N,rt,Xe,Ae),re=new Mm(N,Ge,rt),Ce=new Im(N,Ge,rt),rt.programs=Me.programs,M.capabilities=Xe,M.extensions=Ge,M.properties=Re,M.renderLists=U,M.shadowMap=H,M.state=Ae,M.info=rt}pe();let $=new ol(M,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(Y,oe,!1))},this.getSize=function(S){return S.set(Y,oe)},this.setSize=function(S,F,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,oe=F,t.width=Math.floor(S*J),t.height=Math.floor(F*J),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Y*J,oe*J).floor()},this.setDrawingBufferSize=function(S,F,G){Y=S,oe=F,J=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,F,G,W){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,F,G,W),Ae.viewport(R.copy(Te).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(He)},this.setScissor=function(S,F,G,W){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,F,G,W),Ae.scissor(k.copy(He).multiplyScalar(J).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){Ae.setScissorTest(je=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(S=!0,F=!0,G=!0){let W=0;if(S){let O=!1;if(P!==null){let le=P.texture.format;O=le===Fl||le===Nl||le===Ul}if(O){let le=P.texture.type,_e=le===kn||le===wi||le===Bs||le===os||le===Ll||le===Dl,Se=K.getClearColor(),be=K.getClearAlpha(),Ne=Se.r,Oe=Se.g,Ee=Se.b;_e?(_[0]=Ne,_[1]=Oe,_[2]=Ee,_[3]=be,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=Ne,v[1]=Oe,v[2]=Ee,v[3]=be,N.clearBufferiv(N.COLOR,0,v))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",de,!1),U.dispose(),Z.dispose(),Re.dispose(),x.dispose(),V.dispose(),j.dispose(),Ze.dispose(),D.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",un),$.removeEventListener("sessionend",vn),Kt.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=rt.autoReset,F=H.enabled,G=H.autoUpdate,W=H.needsUpdate,O=H.type;pe(),rt.autoReset=S,H.enabled=F,H.autoUpdate=G,H.needsUpdate=W,H.type=O}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){let F=S.target;F.removeEventListener("dispose",Fe),ht(F)}function ht(S){Et(S),Re.remove(S)}function Et(S){let F=Re.get(S).programs;F!==void 0&&(F.forEach(function(G){Me.releaseProgram(G)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,W,O,le){F===null&&(F=lt);let _e=O.isMesh&&O.matrixWorld.determinant()<0,Se=Tu(S,F,G,W,O);Ae.setMaterial(W,_e);let be=G.index,Ne=1;if(W.wireframe===!0){if(be=ie.getWireframeAttribute(G),be===void 0)return;Ne=2}let Oe=G.drawRange,Ee=G.attributes.position,Je=Oe.start*Ne,ct=(Oe.start+Oe.count)*Ne;le!==null&&(Je=Math.max(Je,le.start*Ne),ct=Math.min(ct,(le.start+le.count)*Ne)),be!==null?(Je=Math.max(Je,0),ct=Math.min(ct,be.count)):Ee!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Ee.count));let ut=ct-Je;if(ut<0||ut===1/0)return;Ze.setup(O,W,Se,G,be);let Wt,et=re;if(be!==null&&(Wt=ee.get(be),et=Ce,et.setIndex(Wt)),O.isMesh)W.wireframe===!0?(Ae.setLineWidth(W.wireframeLinewidth*st()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(O.isLine){let we=W.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*st()),O.isLineSegments?et.setMode(N.LINES):O.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else O.isPoints?et.setMode(N.POINTS):O.isSprite&&et.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let we=O._multiDrawStarts,Cn=O._multiDrawCounts,tt=O._multiDrawCount,dn=be?ee.get(be).bytesPerElement:1,Bi=Re.get(W).currentProgram.getUniforms();for(let Qt=0;Qt<tt;Qt++)Bi.setValue(N,"_gl_DrawID",Qt),et.render(we[Qt]/dn,Cn[Qt])}else if(O.isInstancedMesh)et.renderInstances(Je,ut,O.count);else if(G.isInstancedBufferGeometry){let we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Cn=Math.min(G.instanceCount,we);et.renderInstances(Je,ut,Cn)}else et.render(Je,ut)};function Ke(S,F,G){S.transparent===!0&&S.side===qt&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,ui(S,F,G),S.side=ii,S.needsUpdate=!0,ui(S,F,G),S.side=qt):ui(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),u=Z.get(G),u.init(F),E.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();let W=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let le=O.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){let Se=le[_e];Ke(Se,G,O),W.add(Se)}else Ke(le,G,O),W.add(le)}),E.pop(),u=null,W},this.compileAsync=function(S,F,G=null){let W=this.compile(S,F,G);return new Promise(O=>{function le(){if(W.forEach(function(_e){Re.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){O(S);return}setTimeout(le,10)}Ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Nt=null;function kt(S){Nt&&Nt(S)}function un(){Kt.stop()}function vn(){Kt.start()}let Kt=new kh;Kt.setAnimationLoop(kt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(S){Nt=S,$.setAnimationLoop(S),S===null?Kt.stop():Kt.start()},$.addEventListener("sessionstart",un),$.addEventListener("sessionend",vn),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,F,P),u=Z.get(S,E.length),u.init(F),E.push(u),Le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,ae=B.init(this.clippingPlanes,xe),m=U.get(S,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){let le=M.xr.getDepthSensingMesh();le!==null&&Fi(le,F,-1/0,M.sortObjects)}Fi(S,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,ve),Ye=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ye&&K.addToRenderList(m,S),this.info.render.frame++,ae===!0&&B.beginShadows();let G=u.state.shadowsArray;H.render(G,S,F),ae===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(u.setupLights(),F.isArrayCamera){let le=F.cameras;if(O.length>0)for(let _e=0,Se=le.length;_e<Se;_e++){let be=le[_e];hi(W,O,S,be)}Ye&&K.render(S);for(let _e=0,Se=le.length;_e<Se;_e++){let be=le[_e];ci(m,S,be,be.viewport)}}else O.length>0&&hi(W,O,S,F),Ye&&K.render(S),ci(m,S,F);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,F),Ze.resetDefaultState(),b=-1,g=null,E.pop(),E.length>0?(u=E[E.length-1],ae===!0&&B.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Fi(S,F,G,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){W&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);let _e=j.update(S),Se=S.material;Se.visible&&m.push(S,_e,Se,G,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){let _e=j.update(S),Se=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(Se)){let be=_e.groups;for(let Ne=0,Oe=be.length;Ne<Oe;Ne++){let Ee=be[Ne],Je=Se[Ee.materialIndex];Je&&Je.visible&&m.push(S,_e,Je,G,Ve.z,Ee)}}else Se.visible&&m.push(S,_e,Se,G,Ve.z,null)}}let le=S.children;for(let _e=0,Se=le.length;_e<Se;_e++)Fi(le[_e],F,G,W)}function ci(S,F,G,W){let O=S.opaque,le=S.transmissive,_e=S.transparent;u.setupLightsView(G),ae===!0&&B.setGlobalState(M.clippingPlanes,G),W&&Ae.viewport(R.copy(W)),O.length>0&&Xn(O,F,G),le.length>0&&Xn(le,F,G),_e.length>0&&Xn(_e,F,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function hi(S,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Hn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Zs:kn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let le=u.state.transmissionRenderTarget[W.id],_e=W.viewport||R;le.setSize(_e.z,_e.w);let Se=M.getRenderTarget();M.setRenderTarget(le),M.getClearColor(q),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&K.render(G);let be=M.toneMapping;M.toneMapping=ni;let Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ae===!0&&B.setGlobalState(M.clippingPlanes,W),Xn(S,G,W),T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ee=0,Je=F.length;Ee<Je;Ee++){let ct=F[Ee],ut=ct.object,Wt=ct.geometry,et=ct.material,we=ct.group;if(et.side===qt&&ut.layers.test(W.layers)){let Cn=et.side;et.side=Yt,et.needsUpdate=!0,Oi(ut,G,W,Wt,et,we),et.side=Cn,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le))}M.setRenderTarget(Se),M.setClearColor(q,ne),Ne!==void 0&&(W.viewport=Ne),M.toneMapping=be}function Xn(S,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=S.length;O<le;O++){let _e=S[O],Se=_e.object,be=_e.geometry,Ne=W===null?_e.material:W,Oe=_e.group;Se.layers.test(G.layers)&&Oi(Se,F,G,be,Ne,Oe)}}function Oi(S,F,G,W,O,le){S.onBeforeRender(M,F,G,W,O,le),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(M,F,G,W,S,le),O.transparent===!0&&O.side===qt&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,M.renderBufferDirect(G,F,W,O,S,le),O.side=ii,O.needsUpdate=!0,M.renderBufferDirect(G,F,W,O,S,le),O.side=qt):M.renderBufferDirect(G,F,W,O,S,le),S.onAfterRender(M,F,G,W,O,le)}function ui(S,F,G){F.isScene!==!0&&(F=lt);let W=Re.get(S),O=u.state.lights,le=u.state.shadowsArray,_e=O.state.version,Se=Me.getParameters(S,O.state,le,F,G),be=Me.getProgramCacheKey(Se),Ne=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?V:x).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Fe),Ne=new Map,W.programs=Ne);let Oe=Ne.get(be);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===_e)return di(S,Se),Oe}else Se.uniforms=Me.getUniforms(S),S.onBeforeCompile(Se,M),Oe=Me.acquireProgram(Se,be),Ne.set(be,Oe),W.uniforms=Se.uniforms;let Ee=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=B.uniform),di(S,Se),W.needsLights=Ru(S),W.lightsStateVersion=_e,W.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function bs(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=is.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function di(S,F){let G=Re.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Tu(S,F,G,W,O){F.isScene!==!0&&(F=lt),T.resetTextureUnits();let le=F.fog,_e=W.isMeshStandardMaterial?F.environment:null,Se=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_s,be=(W.isMeshStandardMaterial?V:x).get(W.envMap||_e),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color,ut=ni;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=M.toneMapping);let Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Wt!==void 0?Wt.length:0,we=Re.get(W),Cn=u.state.lights;if(ae===!0&&(xe===!0||S!==g)){let sn=S===g&&W.id===b;B.setState(W,S,sn)}let tt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Cn.state.version||we.outputColorSpace!==Se||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==be||W.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==B.numPlanes||we.numIntersection!==B.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Oe||we.morphTargets!==Ee||we.morphNormals!==Je||we.morphColors!==ct||we.toneMapping!==ut||we.morphTargetsCount!==et)&&(tt=!0):(tt=!0,we.__version=W.version);let dn=we.currentProgram;tt===!0&&(dn=ui(W,F,O));let Bi=!1,Qt=!1,Es=!1,dt=dn.getUniforms(),Mn=we.uniforms;if(Ae.useProgram(dn.program)&&(Bi=!0,Qt=!0,Es=!0),W.id!==b&&(b=W.id,Qt=!0),Bi||g!==S){Ae.buffers.depth.getReversed()?(he.copy(S.projectionMatrix),_d(he),yd(he),dt.setValue(N,"projectionMatrix",he)):dt.setValue(N,"projectionMatrix",S.projectionMatrix),dt.setValue(N,"viewMatrix",S.matrixWorldInverse);let qn=dt.map.cameraPosition;qn!==void 0&&qn.setValue(N,Ue.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,Qt=!0,Es=!0)}if(O.isSkinnedMesh){dt.setOptional(N,O,"bindMatrix"),dt.setOptional(N,O,"bindMatrixInverse");let sn=O.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),dt.setValue(N,"boneTexture",sn.boneTexture,T))}O.isBatchedMesh&&(dt.setOptional(N,O,"batchingTexture"),dt.setValue(N,"batchingTexture",O._matricesTexture,T),dt.setOptional(N,O,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",O._indirectTexture,T),dt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",O._colorsTexture,T));let ws=G.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&se.update(O,G,dn),(Qt||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,dt.setValue(N,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mn.envMap.value=be,Mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),Qt&&(dt.setValue(N,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&Au(Mn,Es),le&&W.fog===!0&&ge.refreshFogUniforms(Mn,le),ge.refreshMaterialUniforms(Mn,W,J,oe,u.state.transmissionRenderTarget[S.id]),is.upload(N,bs(we),Mn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(is.upload(N,bs(we),Mn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(N,"center",O.center),dt.setValue(N,"modelViewMatrix",O.modelViewMatrix),dt.setValue(N,"normalMatrix",O.normalMatrix),dt.setValue(N,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let sn=W.uniformsGroups;for(let qn=0,Yn=sn.length;qn<Yn;qn++){let mc=sn[qn];D.update(mc,dn),D.bind(mc,dn)}}return dn}function Au(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ru(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,F,G){Re.get(S.texture).__webglTexture=F,Re.get(S.depthTexture).__webglTexture=G;let W=Re.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){let G=Re.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){P=S,A=F,C=G;let W=!0,O=null,le=!1,_e=!1;if(S){let be=Re.get(S);if(be.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(be.__hasExternalTextures)T.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ee=S.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);let Oe=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][G]:O=Oe[F],le=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?O=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[G]:O=Oe,R.copy(S.viewport),k.copy(S.scissor),z=S.scissorTest}else R.copy(Te).multiplyScalar(J).floor(),k.copy(He).multiplyScalar(J).floor(),z=je;if(Ae.bindFramebuffer(N.FRAMEBUFFER,O)&&W&&Ae.drawBuffers(S,O),Ae.viewport(R),Ae.scissor(k),Ae.setScissorTest(z),le){let be=Re.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,G)}else if(_e){let be=Re.get(S.texture),Ne=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Ne)}b=-1},this.readRenderTargetPixels=function(S,F,G,W,O,le,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Ae.bindFramebuffer(N.FRAMEBUFFER,Se);try{let be=S.texture,Ne=be.format,Oe=be.type;if(!Xe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O&&N.readPixels(F,G,W,O,Ie.convert(Ne),Ie.convert(Oe),le)}finally{let be=P!==null?Re.get(P).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,W,O,le,_e){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){let be=S.texture,Ne=be.format,Oe=be.type;if(!Xe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O){Ae.bindFramebuffer(N.FRAMEBUFFER,Se);let Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),N.readPixels(F,G,W,O,Ie.convert(Ne),Ie.convert(Oe),0);let Je=P!==null?Re.get(P).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Je);let ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gd(N,ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(Ee),N.deleteSync(ct),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,G=0){S.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(S.image.width*W),le=Math.floor(S.image.height*W),_e=F!==null?F.x:0,Se=F!==null?F.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,_e,Se,O,le),Ae.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,W=null,O=0){S.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let le,_e,Se,be,Ne,Oe,Ee,Je,ct,ut=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(le=G.max.x-G.min.x,_e=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Ne=G.min.y,Oe=G.isBox3?G.min.z:0):(le=ut.width,_e=ut.height,Se=ut.depth||1,be=0,Ne=0,Oe=0),W!==null?(Ee=W.x,Je=W.y,ct=W.z):(Ee=0,Je=0,ct=0);let Wt=Ie.convert(F.format),et=Ie.convert(F.type),we;F.isData3DTexture?(T.setTexture3D(F,0),we=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),we=N.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Cn=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),Bi=N.getParameter(N.UNPACK_SKIP_ROWS),Qt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Oe);let Es=S.isDataArrayTexture||S.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Mn=Re.get(S),ws=Re.get(F),sn=Re.get(Mn.__renderTarget),qn=Re.get(ws.__renderTarget);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<Se;Yn++)Es&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,O,Oe+Yn),S.isDepthTexture?(dt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,O,ct+Yn),N.blitFramebuffer(be,Ne,le,_e,Ee,Je,le,_e,N.DEPTH_BUFFER_BIT,N.NEAREST)):dt?N.copyTexSubImage3D(we,O,Ee,Je,ct+Yn,be,Ne,le,_e):N.copyTexSubImage2D(we,O,Ee,Je,ct+Yn,be,Ne,le,_e);Ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(we,O,Ee,Je,ct,le,_e,Se,Wt,et,ut.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(we,O,Ee,Je,ct,le,_e,Se,Wt,ut.data):N.texSubImage3D(we,O,Ee,Je,ct,le,_e,Se,Wt,et,ut):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ee,Je,le,_e,Wt,et,ut.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ee,Je,ut.width,ut.height,Wt,ut.data):N.texSubImage2D(N.TEXTURE_2D,O,Ee,Je,le,_e,Wt,et,ut);N.pixelStorei(N.UNPACK_ROW_LENGTH,Cn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt),O===0&&F.generateMipmaps&&N.generateMipmap(we),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,W=null,O=0){return S.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,W,O)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Ae.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}},Kr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var us=class extends Vt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,l=new gt;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(It(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(It(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gs=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ll=class extends Gs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ir=new I,to=new Bl,no=new Bl,io=new Bl,Ws=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),c=Ir);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),to.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,v,m),no.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,v,m),io.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(to.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),no.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),io.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(to.calc(l),no.calc(l),io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function fg(i,e){let t=1-i;return t*t*e}function pg(i,e){return 2*(1-i)*i*e}function mg(i,e){return i*i*e}function Ns(i,e,t,n){return fg(i,e)+pg(i,t)+mg(i,n)}function gg(i,e){let t=1-i;return t*t*t*e}function _g(i,e){let t=1-i;return 3*t*t*i*e}function yg(i,e){return 3*(1-i)*i*i*e}function xg(i,e){return i*i*i*e}function Fs(i,e,t,n,s){return gg(i,e)+_g(i,t)+yg(i,n)+xg(i,s)}var Qr=class extends on{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends on{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,s.x,r.x,a.x,o.x),Fs(e,s.y,r.y,a.y,o.y),Fs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jr=class extends on{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends on{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends on{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,s.x,r.x,a.x),Ns(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends on{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,s.x,r.x,a.x),Ns(e,s.y,r.y,a.y),Ns(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(gh(o,l.x,c.x,h.x,d.x),gh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:Ws,CubicBezierCurve:Qr,CubicBezierCurve3:cl,EllipseCurve:Gs,LineCurve:jr,LineCurve3:hl,QuadraticBezierCurve:ea,QuadraticBezierCurve3:ta,SplineCurve:na}),dl=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ul[s.type]().fromJSON(s))}return this}},fl=class extends dl{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jr(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ea(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Qr(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Gs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xs=class i extends $t{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new I,f=new ye,p=new I,_=new I,v=new I,m=0,u=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,u=e[w+1].y-e[w].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[w+1].x-e[w].x,u=e[w+1].y-e[w].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(_)}for(let w=0;w<=t;w++){let E=n+w*h*s,M=Math.sin(E),L=Math.cos(E);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*L,a.push(d.x,d.y,d.z),f.x=w/t,f.y=A/(e.length-1),o.push(f.x,f.y);let C=l[3*A+0]*M,P=l[3*A+1],b=l[3*A+0]*L;c.push(C,P,b)}}for(let w=0;w<t;w++)for(let E=0;E<e.length-1;E++){let M=E+w*e.length,L=M,A=M+e.length,C=M+e.length+1,P=M+1;r.push(L,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ri=class i extends Xs{constructor(e=1,t=1,n=4,s=8){let r=new fl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ia=class i extends $t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ft=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],_=0,v=[],m=n/2,u=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function w(){let M=new I,L=new I,A=0,C=(t-e)/n;for(let P=0;P<=r;P++){let b=[],g=P/r,R=g*(t-e)+e;for(let k=0;k<=s;k++){let z=k/s,q=z*l+o,ne=Math.sin(q),Y=Math.cos(q);L.x=R*ne,L.y=-g*n+m,L.z=R*Y,d.push(L.x,L.y,L.z),M.set(ne,C,Y).normalize(),f.push(M.x,M.y,M.z),p.push(z,1-g),b.push(_++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let g=v[b][P],R=v[b+1][P],k=v[b+1][P+1],z=v[b][P+1];(e>0||b!==0)&&(h.push(g,R,z),A+=3),(t>0||b!==r-1)&&(h.push(R,k,z),A+=3)}c.addGroup(u,A,0),u+=A}function E(M){let L=_,A=new ye,C=new I,P=0,b=M===!0?e:t,g=M===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*g,0),f.push(0,g,0),p.push(.5,.5),_++;let R=_;for(let k=0;k<=s;k++){let q=k/s*l+o,ne=Math.cos(q),Y=Math.sin(q);C.x=b*Y,C.y=m*g,C.z=b*ne,d.push(C.x,C.y,C.z),f.push(0,g,0),A.x=ne*.5+.5,A.y=Y*.5*g+.5,p.push(A.x,A.y),_++}for(let k=0;k<s;k++){let z=L+k,q=R+k;M===!0?h.push(q,q+1,z):h.push(q+1,q,z),P+=3}c.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jt=class i extends ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pl=class i extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let E=new I,M=new I,L=new I;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],M),p(t[A+2],L),l(E,M,L,w)}function l(w,E,M,L){let A=L+1,C=[];for(let P=0;P<=A;P++){C[P]=[];let b=w.clone().lerp(M,P/A),g=E.clone().lerp(M,P/A),R=A-P;for(let k=0;k<=R;k++)k===0&&P===A?C[P][k]=b:C[P][k]=b.clone().lerp(g,k/R)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){let g=Math.floor(b/2);b%2===0?(f(C[P][g+1]),f(C[P+1][g]),f(C[P][g])):(f(C[P][g+1]),f(C[P+1][g+1]),f(C[P+1][g]))}}function c(w){let E=new I;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(w),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let w=new I;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];let M=m(w)/2/Math.PI+.5,L=u(w)/Math.PI+.5;a.push(M,1-L)}_(),d()}function d(){for(let w=0;w<a.length;w+=6){let E=a[w+0],M=a[w+2],L=a[w+4],A=Math.max(E,M,L),C=Math.min(E,M,L);A>.9&&C<.1&&(E<.2&&(a[w+0]+=1),M<.2&&(a[w+2]+=1),L<.2&&(a[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function p(w,E){let M=w*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){let w=new I,E=new I,M=new I,L=new I,A=new ye,C=new ye,P=new ye;for(let b=0,g=0;b<r.length;b+=9,g+=6){w.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(a[g+0],a[g+1]),C.set(a[g+2],a[g+3]),P.set(a[g+4],a[g+5]),L.copy(w).add(E).add(M).divideScalar(3);let R=m(L);v(A,g+0,w,R),v(C,g+2,E,R),v(P,g+4,M,R)}}function v(w,E,M,L){L<0&&w.x===1&&(a[E]=w.x-1),M.x===0&&M.z===0&&(a[E]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var sa=class i extends pl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Qe=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,f=new I,p=[],_=[],v=[],m=[];for(let u=0;u<=n;u++){let w=[],E=u/n,M=0;u===0&&a===0?M=.5/t:u===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let A=L/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-E),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){let E=h[u][w+1],M=h[u][w],L=h[u+1][w],A=h[u+1][w+1];(u!==0||a>0)&&p.push(E,M,A),(u!==n-1||l<Math.PI)&&p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,d=new I,f=new I;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let v=_/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let v=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,u=(s+1)*(p-1)+_,w=(s+1)*p+_;a.push(v,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ra=class i extends $t{constructor(e=new ta(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ye,h=new I,d=[],f=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),w(),u()}function m(E){h=e.getPointAt(E/t,h);let M=a.normals[E],L=a.binormals[E];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);l.x=b*M.x+P*L.x,l.y=b*M.y+P*L.y,l.z=b*M.z+P*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){let L=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),C=(s+1)*E+M,P=(s+1)*(E-1)+M;_.push(L,A,P),_.push(A,C,P)}}function w(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var St=class extends Ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ds=class extends St{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ml=class extends fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=e,o=2*t-n;break;case Sc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=e,l=2*n-t;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,u=-f*m+2*f*v-f*_,w=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,E=(-1-p)*m+(1.5+p)*v+.5*_,M=p*m-p*v;for(let L=0;L!==o;++L)r[L]=u*a[h+L]+w*a[c+L]+E*a[l+L]+M*a[d+L];return r}},gl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},_l=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&vg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Xo;var Ci=class extends yn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Or;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends yn{};yl.prototype.ValueTypeName="color";var xl=class extends yn{};xl.prototype.ValueTypeName="number";var vl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},aa=class extends yn{InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Or;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends yn{};Ml.prototype.ValueTypeName="vector";var Sl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},Mg=new Sl,bl=class{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},so=new gt,_h=new I,yh=new I,qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},El=class extends qs{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=zr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},gs=class extends ps{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new El}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xh=new gt,Ps=new I,ro=new I,wl=class extends qs{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),ro.copy(n.position),ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ro),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}},Pi=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tl=class extends qs{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Tl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zl="\\[\\]\\.:\\/",Sg=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",bg="[^"+zl.replace("\\.","")+"]",Eg=/((?:WC+[\/:])*)/.source.replace("WC",kl),wg=/(WCOD+)?/.source.replace("WCOD",bg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),Ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Rg=new RegExp("^"+Eg+wg+Tg+Ag+"$"),Cg=["material","materials","bones","map"],Al=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Rg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Al;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var vh=new gt,oa=class{constructor(e,t,n=0,s=1/0){this.ray=new Gr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(e,t=!0,n=[]){return Rl(e,this,n,t),n.sort(Mh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Rl(e[s],this,n,t);return n.sort(Mh),n}};function Mh(i,e){return i.distance-e.distance}function Rl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Rl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);var Js=new I;function ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Js.copy(e),Js[n]=0,Js.normalize();let c=.5*a/(a+o),h=1-Js.angleTo(i)/l;return Math.sign(Js[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Gt=class extends yt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,_=new I,v=.5/s;for(let m=0,u=0;m<h.length;m+=3,u+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),f[u+0]=ln(_,l,"z","y",r,n),f[u+1]=1-ln(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[u+0]=1-ln(_,l,"z","y",r,n),f[u+1]=1-ln(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[u+0]=1-ln(_,l,"x","z",r,e),f[u+1]=ln(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[u+0]=1-ln(_,l,"x","z",r,e),f[u+1]=1-ln(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[u+0]=1-ln(_,l,"x","y",r,e),f[u+1]=1-ln(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[u+0]=ln(_,l,"x","y",r,e),f[u+1]=1-ln(_,l,"y","x",r,t);break}}};var _t=new Map;function Dt(i,e,t,{srgb:n=!0,wrap:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);let a=new us(r);return n&&(a.colorSpace=Bt),s&&(a.wrapS=a.wrapT=Os),a.anisotropy=8,a}var Hl='"Titan One", "Comic Sans MS", cursive';function Li(i,e,t,n,s){for(let r=0;r<n;r++){let a=Math.random()*e,o=Math.random()*t,l=10+Math.random()*e*.12,c=i.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(30,20,10,${s*Math.random()})`),c.addColorStop(1,"rgba(30,20,10,0)"),i.fillStyle=c,i.fillRect(a-l,o-l,l*2,l*2)}}function Vn(i,{stripes:e=null,spots:t=null}={}){let n="fur"+i+e+t;if(_t.has(n))return _t.get(n);let s=Dt(512,512,(r,a,o)=>{if(r.fillStyle=i,r.fillRect(0,0,a,o),e){r.strokeStyle=e,r.lineWidth=46;for(let l=-10;l<20;l++)r.beginPath(),r.moveTo(l*90,0),r.lineTo(l*90+300,o),r.stroke()}if(t){r.fillStyle=t;for(let l=0;l<18;l++)r.beginPath(),r.ellipse(Math.random()*a,Math.random()*o,14+Math.random()*24,10+Math.random()*18,Math.random()*3,0,7),r.fill()}for(let l=0;l<9e3;l++){let c=Math.random()*a,h=Math.random()*o,d=4+Math.random()*9,f=Math.PI/2+(Math.random()-.5)*.7;r.strokeStyle=Math.random()<.5?"rgba(255,255,255,.09)":"rgba(0,0,0,.13)",r.lineWidth=1+Math.random(),r.beginPath(),r.moveTo(c,h),r.lineTo(c+Math.cos(f)*d,h+Math.sin(f)*d),r.stroke()}Li(r,a,o,14,.35)});return _t.set(n,s),s}function Ut(){if(_t.has("bump"))return _t.get("bump");let i=Dt(256,256,(e,t,n)=>{let s=e.createImageData(t,n);for(let r=0;r<s.data.length;r+=4){let a=110+Math.random()*60;s.data[r]=s.data[r+1]=s.data[r+2]=a,s.data[r+3]=255}e.putImageData(s,0,0)},{srgb:!1});return _t.set("bump",i),i}function Vl(i="#151515",e="#e8e4da",t=8){let n="chk"+i+e;if(_t.has(n))return _t.get(n);let s=Dt(512,512,(r,a,o)=>{let l=a/t;for(let c=0;c<t;c++)for(let h=0;h<t;h++)r.fillStyle=(c+h)%2?i:e,r.fillRect(c*l,h*l,l,l);r.strokeStyle="rgba(0,0,0,.35)";for(let c=0;c<=t;c++)r.beginPath(),r.moveTo(c*l,0),r.lineTo(c*l,o),r.moveTo(0,c*l),r.lineTo(a,c*l),r.stroke();Li(r,a,o,30,.5)});return _t.set(n,s),s}function Ks(i="#f6b8d2",e="#fbe3ee",t="#5a2140",n="#ffd84a"){let s="wp"+i+t;if(_t.has(s))return _t.get(s);let r=Dt(512,1024,(a,o,l)=>{for(let h=0;h<o/32;h++)a.fillStyle=h%2?i:e,a.fillRect(h*32,0,32,l*.62);for(let h=0;h<40;h++){let d=Math.random()*o,f=Math.random()*l*.55;a.fillStyle=["#ff4d6d","#3bc7ff","#7dff6b","#ffe23b"][h%4],a.beginPath(),a.ellipse(d,f,9,6,0,0,7),a.fill(),a.beginPath(),a.moveTo(d-9,f),a.lineTo(d-16,f-5),a.lineTo(d-16,f+5),a.fill(),a.beginPath(),a.moveTo(d+9,f),a.lineTo(d+16,f-5),a.lineTo(d+16,f+5),a.fill()}a.fillStyle=n,a.fillRect(0,l*.62,o,18),a.fillStyle=t,a.fillRect(0,l*.62+18,o,l);for(let h=0;h<o/64;h++)a.fillStyle="rgba(0,0,0,.25)",a.fillRect(h*64,l*.62+18,4,l);a.fillStyle="#1a0a12",a.fillRect(0,l-30,o,30),Li(a,o,l,12,.22);for(let h=0;h<3;h++){let d=Math.random()*o,f=a.createLinearGradient(0,0,0,220);f.addColorStop(0,"rgba(90,60,30,.18)"),f.addColorStop(1,"rgba(90,60,30,0)"),a.fillStyle=f,a.fillRect(d,0,14+Math.random()*20,220)}});return _t.set(s,r),r}function fa(i="#cfd8d6"){let e="tile"+i;if(_t.has(e))return _t.get(e);let t=Dt(256,256,(n,s,r)=>{n.fillStyle="#555",n.fillRect(0,0,s,r);let a=64;for(let o=0;o<4;o++)for(let l=0;l<4;l++)n.fillStyle=i,n.fillRect(o*a+2,l*a+2,a-4,a-4);Li(n,s,r,12,.5)});return _t.set(e,t),t}function Xh(){if(_t.has("wood"))return _t.get("wood");let i=Dt(512,256,(e,t,n)=>{e.fillStyle="#6b4224",e.fillRect(0,0,t,n);for(let s=0;s<160;s++){e.strokeStyle=`rgba(${40+Math.random()*40},${20+Math.random()*20},10,.35)`,e.lineWidth=1+Math.random()*2;let r=Math.random()*n;e.beginPath(),e.moveTo(0,r);for(let a=0;a<=t;a+=32)e.lineTo(a,r+Math.sin(a/60+s)*3);e.stroke()}Li(e,t,n,10,.4)});return _t.set("wood",i),i}function Gl(i=!1){let e="metal"+i;if(_t.has(e))return _t.get(e);let t=Dt(256,512,(n,s,r)=>{n.fillStyle="#7d858c",n.fillRect(0,0,s,r);for(let a=0;a<400;a++)n.fillStyle=`rgba(255,255,255,${Math.random()*.06})`,n.fillRect(0,Math.random()*r,s,1);for(let a=0;a<r;a+=48)n.fillStyle="rgba(0,0,0,.35)",n.fillRect(0,a,s,5),n.fillStyle="rgba(255,255,255,.12)",n.fillRect(0,a+5,s,2);if(i){n.save(),n.beginPath(),n.rect(0,r-56,s,56),n.clip(),n.fillStyle="#ffcc00",n.fillRect(0,r-56,s,56),n.fillStyle="#111";for(let a=-2;a<10;a++)n.beginPath(),n.moveTo(a*40,r),n.lineTo(a*40+20,r),n.lineTo(a*40+76,r-56),n.lineTo(a*40+56,r-56),n.fill();n.restore()}Li(n,s,r,20,.6);for(let a=0;a<8;a++)n.fillStyle="rgba(120,60,20,.25)",n.fillRect(Math.random()*s,Math.random()*r*.6,3,40+Math.random()*90)});return _t.set(e,t),t}function qh(){if(_t.has("pleats"))return _t.get("pleats");let i=Dt(256,64,(e,t)=>{for(let n=0;n<16;n++)e.fillStyle=n%2?"#ff5f9e":"#ff8fbd",e.fillRect(n*t/16,0,t/16,64)});return _t.set("pleats",i),i}function tn(i,e,t,n,s,{w:r=360,h:a=480}={}){return Dt(r,a,o=>{if(o.fillStyle=t,o.fillRect(0,0,r,a),o.strokeStyle=n,o.lineWidth=10,o.strokeRect(14,14,r-28,a-28),o.fillStyle=n,o.textAlign="center",o.textBaseline="middle",o.font=`bold ${Math.min(52,(r-40)/i.length*1.7)}px ${Hl}`,o.fillText(i,r/2,62),s&&s.width){let l=a*.52,c=l*s.width/s.height;o.drawImage(s,(r-c)/2,100,c,l)}e&&(o.font=`bold ${Math.min(40,(r-40)/e.length*1.8)}px ${Hl}`,o.fillText(e,r/2,a-60)),Li(o,r,a,10,.45),o.fillStyle="rgba(0,0,0,.6)",o.beginPath(),o.moveTo(r,a),o.lineTo(r-40,a),o.lineTo(r,a-50),o.fill()},{wrap:!1})}function Gn(i,e="#ff4d8d",{w:t=1024,h:n=192,bg:s="rgba(0,0,0,0)",font:r=Hl}={}){return Dt(t,n,a=>{a.fillStyle=s,a.fillRect(0,0,t,n),a.textAlign="center",a.textBaseline="middle",a.font=`bold ${n*.6}px ${r}`,a.shadowColor=e,a.shadowBlur=30,a.fillStyle=e,a.fillText(i,t/2,n/2),a.shadowBlur=0,a.fillStyle="#fff",a.globalAlpha=.6,a.fillText(i,t/2,n/2)},{wrap:!1})}function Yh(i,e,t){return Dt(256,300,(n,s,r)=>{n.fillStyle="#fbfaf2",n.fillRect(0,0,s,r),i&&i.width&&n.drawImage(i,78,20,100,100*i.height/i.width),n.strokeStyle=e,n.lineWidth=7,n.lineCap="round",n.beginPath(),n.moveTo(128,150),n.lineTo(128,220),n.moveTo(80,175),n.lineTo(176,175),n.moveTo(128,220),n.lineTo(95,275),n.moveTo(128,220),n.lineTo(161,275),n.stroke(),n.fillStyle=e,n.font='bold 26px "Ink Free", "Segoe Print", cursive',n.textAlign="center",n.fillText(t,128,292)},{wrap:!1})}var it=(i,e,t)=>new I(i,e,t),Ig=it(0,1,0);function Pe(i,e,t,n,s,r){let a=new vt(i,e);return n&&a.position.set(...n),s&&a.rotation.set(...s),r&&a.scale.set(...r),a.castShadow=!0,a.receiveShadow=!0,t&&t.add(a),a}function cn(i,e,t,n,s){let r=new I().subVectors(t,e),a=Pe(new Ri(n,r.length(),6,14),s,i);return a.position.copy(e).addScaledVector(r,.5),a.quaternion.setFromUnitVectors(Ig,r.normalize()),a}function $h(i,e){return new St({map:Vn(i,e),bumpMap:Ut(),bumpScale:1.5,roughness:.92,metalness:0})}var Pg=()=>new St({color:9080982,metalness:.85,roughness:.35,bumpMap:Ut(),bumpScale:.6}),Lg=()=>new St({color:2895667,metalness:.7,roughness:.5}),bt=(i,e=.4)=>new St({color:i,roughness:e});function Dg(i,e,t,n,s,r){let o=1.75*n,l=new Qe(t,40,32,Math.PI/2-o/2,o,Math.PI/2-1.75/2,1.75),c=new St({map:e,roughness:.55,alphaTest:.45,transparent:!1,emissiveMap:e,emissive:0}),h=Pe(l,c,i,[0,s,r]);return h.castShadow=!1,h}var Ug={zayed:{kind:"camel",fur:"#c99556",fur2:"#ecd2a6",tie:"#c4122a",word:"ZAYED"},bubbles:{kind:"cat",fur:"#ef86bd",fur2:"#ffd3ea",tie:"#2fb7ff",word:"ZAYED"},taffy:{kind:"goat",fur:"#f4ead8",fur2:"#ffffff",tie:"#ff3b6b",word:"ZAYED",stripes:"rgba(230,40,70,.85)"},sherbet:{kind:"falcon",fur:"#7a6a5c",fur2:"#efe6d8",tie:"#ff9d2e",word:"ZAYED",spots:"rgba(40,30,20,.5)"},golden:{kind:"camel",fur:"#c9a03a",fur2:"#e8cf7a",tie:"#3a2a05",word:"ABDULLA",gold:!0}};function pa(i,e){let t=Ug[i],n=new mt;n.name=i;let s=new mt;n.add(s);let r=t.gold?new St({map:Vn(t.fur),bumpMap:Ut(),bumpScale:2,metalness:.55,roughness:.55}):$h(t.fur,{stripes:t.stripes,spots:t.spots}),a=$h(t.fur2),o=Pg(),l=Lg(),c=t.kind==="camel";[-1,1].forEach(g=>{Pe(new Gt(.3,.15,.44,4,.06),r,s,[g*.19,.075,.07]),i==="sherbet"&&(Pe(new Gt(.26,.04,.46,2,.02),l,s,[g*.19,.02,.07]),[-.15,.15].forEach(R=>Pe(new ft(.05,.05,.05,16),bt(16751918),s,[g*.19,0,.07+R],[0,0,Math.PI/2]))),cn(s,it(g*.19,.14,0),it(g*.19,.5,0),.085,r),Pe(new Qe(.095,16,12),o,s,[g*.19,.53,0]),cn(s,it(g*.19,.56,0),it(g*.17,.92,0),.115,r)}),Pe(new Qe(.3,24,16),r,s,[0,.98,0],null,[1.15,.6,.85]);let h=[[.27,0],[.36,.1],[.41,.28],[.4,.46],[.33,.6],[.18,.7],[.08,.73]].map(g=>new ye(g[0],g[1]));Pe(new Xs(h,32),r,s,[0,.95,0],null,[1,1,.82]);let d=Dt(256,256,g=>{g.drawImage(Vn(t.fur2).image,0,0,256,256),g.fillStyle="rgba(80,30,40,.85)",g.textAlign="center",g.textBaseline="middle",g.font=`bold ${t.word.length>6?38:48}px "Titan One", "Comic Sans MS", cursive`,g.fillText(t.word,128,128)},{wrap:!1});Pe(new Qe(.4,32,20,Math.PI/2-.7,1.4,1,1.15),new St({map:d,roughness:.9,bumpMap:Ut(),bumpScale:1}),s,[0,1.25,.005],null,[1,1,.84]),[[-.3,1.55,.22],[.3,1.55,.22],[-.36,1.08,.24],[.36,1.08,.24]].forEach(g=>Pe(new Qe(.025,8,6),o,s,g)),c&&Pe(new Qe(.3,24,16),r,s,[0,1.6,-.28],null,[1,.8,.9]);let f=g=>{let R=new mt;R.position.set(g*.44,1.56,0),s.add(R),Pe(new Qe(.13,18,14),r,R),cn(R,it(0,0,0),it(g*.05,-.38,.02),.088,r),Pe(new Qe(.075,14,10),o,R,[g*.05,-.41,.02]),cn(R,it(g*.05,-.44,.02),it(g*.04,-.76,.06),.08,r);let k=Pe(new Qe(.1,16,12),a,R,[g*.04,-.85,.07],null,[1,1.15,.7]);for(let z=0;z<3;z++)cn(R,it(g*.04+(z-1)*.045,-.9,.1),it(g*.04+(z-1)*.055,-1,.12),.022,l);if(i==="sherbet")for(let z=0;z<5;z++)Pe(new Qe(.16,12,8),r,R,[g*(.12+z*.012),-.2-z*.12,-.06],[0,0,g*.2],[.35,1,.12]);return R.userData.hand=k,R},p=f(-1),_=f(1),v=bt(t.tie,.5);[-1,1].forEach(g=>Pe(new Jt(.07,.14,4),v,s,[g*.07,1.67,.2],[0,0,g*Math.PI/2])),Pe(new Qe(.035,10,8),v,s,[0,1.67,.21]);let m=c?.34:.16;Pe(new ft(.075,.09,m,16),o,s,[0,1.7+m/2,0]);for(let g=0;g<3;g++)Pe(new Tn(.085,.012,6,20),l,s,[0,1.72+g*m/3,0],[Math.PI/2,0,0]);let u=new mt;u.position.set(0,1.7+m,0),s.add(u),Pe(new Qe(.3,32,24),r,u,[0,.27,-.03],null,[1.02,.98,.95]);let w=e[i],E=w&&w.image?w.image.width/w.image.height:.7,M=Dg(u,w,.315,E,.27,-.03),L=new mt;L.position.set(0,-.03,-.05),L.scale.setScalar(.85),u.add(L),Pe(new Qe(.22,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),a,L,[0,.02,.06],null,[1,.55,1.05]),Pe(new Qe(.19,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),bt(3803658,.8),L,[0,.03,.08],null,[.9,.3,.95]);let A=bt(15920344,.3);for(let g=0;g<9;g++){let R=(g/8-.5)*2.2;Pe(new Jt(.018,.06,6),A,L,[Math.sin(R)*.17,.04,.08+Math.cos(R)*.17])}if(c)if([-1,1].forEach(g=>Pe(new Qe(.06,12,10),r,u,[g*.27,.5,-.08],null,[.7,1.2,.5])),t.gold){u.children[u.children.length-1].visible=!1;for(let g=0;g<4;g++)cn(u,it(-.2+g*.1,.45,-.2),it(-.25+g*.13,.25,-.32),.008,bt([13903407,3127295,16769595,1118481][g]))}else{let g=bt(11735583,.7);Pe(new ft(.13,.17,.2,24),g,u,[.02,.6,-.06],[-.15,0,.12]),cn(u,it(.04,.7,-.05),it(.18,.62,-.1),.012,bt(1118481)),Pe(new Jt(.03,.08,8),bt(1118481),u,[.19,.57,-.1])}else if(t.kind==="cat"){[-1,1].forEach(R=>{Pe(new Jt(.11,.24,4),r,u,[R*.19,.58,-.05],[0,Math.PI/4,R*-.35]),Pe(new Jt(.06,.15,4),bt(16757718,.8),u,[R*.185,.56,0],[.1,Math.PI/4,R*-.35]);for(let k=0;k<3;k++)cn(u,it(R*.22,.18+k*.03,.18),it(R*.45,.14+k*.07,.2),.004,bt(16777215))});let g=new Ws([it(0,.95,-.25),it(.1,.8,-.55),it(.25,1.1,-.7),it(.15,1.45,-.6)]);Pe(new ra(g,24,.05,10),r,s)}else if(t.kind==="goat"){let g=new St({color:14272931,roughness:.6,bumpMap:Ut(),bumpScale:3});[-1,1].forEach(R=>{Pe(new Tn(.11,.035,10,24,Math.PI*1.4),g,u,[R*.2,.55,-.12],[0,R*Math.PI/2,.6]),Pe(new Qe(.07,12,10),r,u,[R*.32,.4,-.04],[0,0,R*.5],[1.6,.5,.7])}),Pe(new Jt(.06,.18,10),a,L,[0,-.1,.16],[Math.PI,0,0])}else if(t.kind==="falcon"){let g=bt(16761375,.35);Pe(new Jt(.1,.26,16),g,u,[0,.56,.2],[Math.PI/2+.5,0,0]);for(let z=0;z<4;z++)Pe(new Jt(.04,.26,6),r,u,[(z-1.5)*.07,.56,-.2],[-.9,0,(z-1.5)*.25]);let R=Pe(new Gt(.42,.36,.22,3,.04),bt(16751918,.7),s,[0,1.3,-.42]),k=Gn("ZAYED EXPRESS","#ffffff",{w:512,h:128});Pe(new Pt(.4,.1),new Zt({map:k,transparent:!0}),R,[0,0,-.112],[0,Math.PI,0])}let C=_.userData.hand,P=p.userData.hand;if(i==="zayed"){let g=new mt;g.position.copy(C.position),_.add(g),cn(g,it(0,-.2,.06),it(0,.75,.06),.012,o);let R=new St({map:Vn("#8a4a22",{stripes:"rgba(60,25,8,.6)"}),roughness:.75,bumpMap:Ut(),bumpScale:4});Pe(new ft(.06,.16,.5,20),R,g,[0,.38,.06])}else if(i==="bubbles"){let g=new mt;g.position.copy(C.position),_.add(g),cn(g,it(0,0,.05),it(0,.35,.2),.012,bt(16769595)),Pe(new Tn(.07,.012,8,24),bt(16769595),g,[0,.42,.24],[.6,0,0]);let R=new ds({color:12577023,transparent:!0,opacity:.28,roughness:0,iridescence:1,iridescenceIOR:1.3,clearcoat:1});n.userData.bubbles=[];for(let k=0;k<6;k++)n.userData.bubbles.push(Pe(new Qe(.05+k*.012,16,12),R,n,[.5,2+k*.15,.3]))}else if(i==="taffy"){let g=new mt;g.position.copy(C.position),_.add(g),Pe(new ft(.2,.18,.02,28),bt(15658734,.2),g,[0,.1,.12]);let R=Qs(e);R.scale.setScalar(1.3),R.position.set(0,.11,.12),g.add(R),_.rotation.x=-.9}i==="golden"&&(u.rotation.set(.45,0,.35),p.rotation.z=.15,_.rotation.z=-.15,s.rotation.x=.12);let b={root:n,body:s,head:u,jaw:L,armL:p,armR:_,face:M,who:i,t:Math.random()*10};return n.traverse(g=>{g.frustumCulled=!0}),b}function Jh(i,e,t){i.t+=e;let n=i.t;if(t==="scare"){i.jaw.rotation.x=0,i.jaw.position.y=-.17+Math.sin(n*40)*.025,i.head.rotation.set(Math.sin(n*31)*.12,Math.sin(n*23)*.15,Math.sin(n*37)*.1),i.armL.rotation.x=i.armR.rotation.x=-1.5+Math.sin(n*20)*.1,i.armL.rotation.z=-.4,i.armR.rotation.z=.4;return}i.who!=="golden"&&(i.jaw.rotation.x=Math.max(0,Math.sin(n*.7)-.92)*2,i.head.rotation.z=Math.sin(n*.5)*.04,i.head.rotation.y=Math.sin(n*.31)*.06,i.root.userData.bubbles&&i.root.userData.bubbles.forEach((s,r)=>{let a=(n*.25+r/6)%1;s.position.set(.5+Math.sin(r*2+n)*.2+a*.4,2+a*1.2,.3+Math.cos(r+n)*.2)}))}function Wl(i){i.jaw.rotation.set(0,0,0),i.jaw.position.y=-.03,i.head.rotation.set(0,0,0),i.armL.rotation.set(0,0,0),i.armR.rotation.set(i.who==="taffy"?-.9:0,0,0),i.who==="golden"&&(i.head.rotation.set(.45,0,.35),i.armL.rotation.z=.15,i.armR.rotation.z=-.15)}function Qs(i,e=!1){let t=new mt,n=new St({map:qh(),roughness:.6,side:qt});Pe(new ft(.1,.075,.1,32,1,!0),n,t,[0,.05,0]),Pe(new ia(.075,24),n,t,[0,.001,0],[-Math.PI/2,0,0]),Pe(new Qe(.1,24,12),bt(8012576,.9),t,[0,.1,0],null,[1,.35,1]);let s=new St({color:16762078,roughness:.35,bumpMap:Ut(),bumpScale:.8});Pe(new Tn(.075,.036,14,32),s,t,[0,.12,0],[Math.PI/2,0,0]),Pe(new Tn(.05,.03,14,28),s,t,[0,.16,0],[Math.PI/2,0,0]),Pe(new Qe(.045,16,12),s,t,[0,.19,0]);let r=[16726843,3920383,16769595,8257387,12872703];for(let _=0;_<40;_++){let v=Math.random()*Math.PI*2,m=.05+Math.random()*.06,u=.13+Math.random()*.06;Pe(new Ri(.004,.012,2,4),bt(r[_%5]),t,[Math.cos(v)*m,u,Math.sin(v)*m],[Math.random()*3,Math.random()*3,0]).castShadow=!1}let a=i.cupcake,o=Pe(new Qe(.112,32,24,Math.PI/2-.62,1.24,Math.PI/2-.62,1.24),new St({map:a,alphaTest:.4,roughness:.5,emissiveMap:a,emissive:16777215,emissiveIntensity:.35}),t,[0,.13,0]);o.castShadow=!1,[-1,1].forEach(_=>cn(t,it(_*.09,.06,0),it(_*.15,.11,.03),.015,n));let l=new mt;l.position.set(0,.215,0),l.rotation.set(.1,0,.18),t.add(l);let c=new St({map:Vn("#e3b46a",{spots:"rgba(150,80,20,.55)"}),roughness:.85,bumpMap:Ut(),bumpScale:2});Pe(new Ri(.032,.09,6,16),c,l,[0,.07,0]);let h=Gn("SHAWARMA","#ffffff",{w:512,h:96,bg:"#c4122a"});Pe(new ft(.035,.03,.07,18,1,!0),new St({map:h,roughness:.6,side:qt}),l,[0,.035,0]);let d=bt(8010776,.8);for(let _=0;_<7;_++)Pe(new Ri(.009,.04,3,6),d,l,[(_-3)*.009,.14,_%2*.01],[.3,0,(_-3)*.22]);[[5224520,-.016,.006],[5224520,.014,-.008],[14827823,.004,.012],[15986912,-.004,-.012]].forEach(([_,v,m])=>Pe(new Qe(.009,8,6),bt(_),l,[v,.14,m])),cn(l,it(0,.145,0),it(0,.17,0),.0018,bt(1118481));let f=new vt(new Jt(.009,.03,12),new Zt({color:16752672}));f.position.set(0,.195,0),l.add(f);let p=new vt(new Qe(.008,8,6),new Zt({color:16774320}));if(p.position.set(0,.182,0),l.add(p),e){let _=new Pi(16752704,.25,1.5,2);_.position.set(0,.2,.12),l.add(_),t.userData.light=_}return t.userData.flame=f,t}var xs=.12;function qe(i){return new St(Object.assign({roughness:.85},i))}function De(i,e,t,n,s){let r=new vt(e,t);return n&&r.position.set(...n),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xl(i,e,t){let n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*e,n.getY(s)*t);return i}function Kh(i,e){let t=new hs;t.background=new ke(0),t.fog=new Kr(328455,.045);let n={},s={},r={},a=[],o=[],l={wall:qe({map:Ks(),bumpMap:Ut(),bumpScale:.6}),wallOffice:qe({map:Ks("#7fb7b0","#a9d5cf","#22312f","#ff4d8d"),bumpMap:Ut(),bumpScale:.6}),wallBack:qe({map:Ks("#6d6a72","#85828a","#2a2a2e","#a33"),bumpMap:Ut(),bumpScale:.6}),wallRest:qe({map:fa("#d7e3e6"),bumpMap:Ut(),bumpScale:.6}),floor:qe({map:Vl(),roughness:.45,bumpMap:Ut(),bumpScale:.3}),floorRest:qe({map:fa("#9aa7aa"),roughness:.5}),ceil:qe({map:fa("#3c3a36"),roughness:1}),wood:qe({map:Xh(),roughness:.6,bumpMap:Ut(),bumpScale:.5}),metal:qe({map:Gl(),metalness:.75,roughness:.4}),shutter:qe({map:Gl(!0),metalness:.7,roughness:.45,bumpMap:Ut(),bumpScale:.8}),dark:qe({color:1710620,roughness:.6})};function c(U,Z,B,H,K,se={}){let re=se.h||3,Ce=new mt;Ce.name=U,t.add(Ce),s[U]=Ce,r[U]=[Z,B,H,K];let Ie=se.floor||l.floor,Ze=se.wall||l.wall,D=De(Ce,Xl(new Pt(H-Z,K-B),(H-Z)/2.4,(K-B)/2.4),Ie,[(Z+H)/2,0,(B+K)/2],[-Math.PI/2,0,0]);D.castShadow=!1;let pe=De(Ce,Xl(new Pt(H-Z,K-B),(H-Z)/1.2,(K-B)/1.2),l.ceil,[(Z+H)/2,re,(B+K)/2],[Math.PI/2,0,0]);pe.castShadow=!1;let $=se.gaps||{},te=ue=>{let de=ue==="n"||ue==="s",Fe=de?Z:B,ht=de?H:K,Et=ue==="n"?B+xs/2:ue==="s"?K-xs/2:ue==="w"?Z+xs/2:H-xs/2,Ke=($[ue]||[]).slice().sort((un,vn)=>un[0]-vn[0]),Nt=[],kt=Fe;Ke.forEach(([un,vn,Kt])=>{un>kt&&Nt.push([kt,un,0,re]),Nt.push([un,vn,Kt||2.4,re]),kt=vn}),kt<ht&&Nt.push([kt,ht,0,re]),Nt.forEach(([un,vn,Kt,Fi])=>{let ci=vn-un,hi=Fi-Kt;if(ci<=.001||hi<=.001)return;let Xn=de?new yt(ci,hi,xs):new yt(xs,hi,ci);Xl(Xn,ci/1.6,hi/re);let Oi=Xn.attributes.uv;for(let di=0;di<Oi.count;di++)Oi.setY(di,Oi.getY(di)+Kt/re);let ui=(un+vn)/2,bs=(Kt+Fi)/2;De(Ce,Xn,Ze,de?[ui,bs,Et]:[Et,bs,ui])})};return["n","s","e","w"].forEach(te),Ce}function h(U,Z,B,H,K,se,re,Ce){let Ie=new Pi(K,se,re,2);Ie.position.set(Z,B,H),Ie.userData.base=se,t.add(Ie),(n[U]=n[U]||[]).push(Ie),Ce&&a.push(Ie),De(t,new ft(.25,.32,.08,20),l.metal,[Z,B+.22,H]);let Ze=new vt(new Qe(.08,12,8),new Zt({color:16773576}));return Ze.position.set(Z,B+.14,H),t.add(Ze),Ie.userData.bulb=Ze,Ie}function d(U,Z,B,H,K,se){return De(U,new Pt(B,H),qe({map:Z,roughness:.9}),K,[0,se,(Math.random()-.5)*.06])}function f(U,Z){let B=new mt;B.position.set(U,0,Z),t.add(B),De(B,new ft(.06,.08,.75,12),l.metal,[0,.375,0]),De(B,new ft(.75,.75,.05,32),qe({map:Vl("#d4262f","#f6f6f6",6),roughness:.7}),[0,.77,0]);for(let H=0;H<3;H++){let K=H*2.1;De(B,new Jt(.08,.22,16),qe({color:[3917823,16743616,16769595][H],roughness:.5}),[Math.cos(K)*.4,.9,Math.sin(K)*.4]),De(B,new ft(.12,.12,.02,20),qe({color:15658734,roughness:.2}),[Math.cos(K+1)*.45,.8,Math.sin(K+1)*.45])}for(let H=0;H<4;H++){let K=H*Math.PI/2+.4,se=new mt;se.position.set(Math.cos(K)*1.1,0,Math.sin(K)*1.1),se.rotation.y=-K,B.add(se),De(se,new Gt(.45,.08,.45,2,.03),qe({color:16743616,roughness:.5}),[0,.46,0]),De(se,new Gt(.08,.5,.45,2,.03),qe({color:16743616,roughness:.5}),[.2,.72,0]),De(se,new ft(.03,.03,.44,8),l.metal,[0,.22,0])}}function p(U,Z,B,H){De(t,new ft(.04,.04,B,10),qe({color:16777215}),[U,B/2,Z]);let K=Dt(256,256,se=>{for(let re=0;re<24;re++)se.fillStyle=re%2?H:"#ffffff",se.beginPath(),se.moveTo(128,128),se.arc(128,128,128,re*Math.PI/12,(re+1)*Math.PI/12+.5),se.fill()},{wrap:!1});De(t,new ft(.5,.5,.12,32),qe({map:K,roughness:.25,emissiveMap:K,emissive:16777215,emissiveIntensity:.3}),[U,B+.45,Z],[Math.PI/2,0,0])}function _(U,Z,B,H,K){De(U,new ft(.11,.11,.28,20),new ds({color:16777215,transparent:!0,opacity:.25,roughness:.05,clearcoat:1}),[Z,B+.14,H]).castShadow=!1,De(U,new ft(.115,.115,.04,20),qe({color:13903407,roughness:.4}),[Z,B+.3,H]);for(let se=0;se<14;se++)De(U,new Qe(.028,8,6),qe({color:K,roughness:.25}),[Z+(Math.random()-.5)*.14,B+.03+Math.random()*.17,H+(Math.random()-.5)*.14])}c("office",-3,0,3,5,{h:2.8,wall:l.wallOffice,gaps:{w:[[.8,2.6,2.3]],e:[[.8,2.6,2.3]]}}),c("westCorr",-5.5,-14,-3,4,{h:2.8,gaps:{e:[[.8,2.6,2.3]],n:[[-5.5,-3,2.8]],w:[[-5,-3,2.3]]}}),c("eastCorr",3,-14,5.5,4,{h:2.8,gaps:{w:[[.8,2.6,2.3]],n:[[3,5.5,2.8]]}}),c("supply",-9,-6,-5.5,-2,{h:2.8,wall:l.wallBack,gaps:{e:[[-5,-3,2.3]]}}),c("dining",-9,-26,9,-14,{h:3.6,gaps:{s:[[-5.5,-3,2.8],[3,5.5,2.8]],n:[[-8.5,-7,2.4],[-5,5,3.4],[6.5,8,2.4]],w:[[-22,-18,2.6]],e:[[-22,-18,2.4]]}}),c("stage",-5,-32,5,-26,{h:3.6,gaps:{s:[[-5,5,3.4]],w:[[-30,-28,2.4]]}}),c("backstage",-10,-32,-5,-26,{h:3,wall:l.wallBack,gaps:{e:[[-30,-28,2.4]],s:[[-8.5,-7,2.4]]}}),c("restroom",5,-32,10,-26,{h:3,wall:l.wallRest,floor:l.floorRest,gaps:{s:[[6.5,8,2.4]]}}),c("nest",-14,-24,-9,-16,{h:3.4,wall:qe({map:Ks("#3c2a5a","#4b3570","#1a1026","#ff9d2e")}),gaps:{e:[[-22,-18,2.6]]}}),c("kitchen",9,-24,14,-16,{h:3,wall:l.wallRest,floor:l.floorRest,gaps:{w:[[-22,-18,2.4]]}}),h("office",0,2.5,2.4,16769712,3.2,9,!0),h("westHallN",-4.25,2.5,-10,16767392,19.8,8,!0),h("westHallS",-4.25,2.5,-2,16767392,14.4,6,!0),h("eastHallN",4.25,2.5,-10,16767392,19.8,8,!0),h("eastHallS",4.25,2.5,-2,16767392,14.4,6,!0),h("supply",-7.2,2.5,-4,12582864,14.4,6,!0),h("dining",-4,3.3,-20,16765152,45,14),h("dining",4,3.3,-20,16765152,45,14),h("stage",0,3.3,-28.5,16760992,54,12),h("backstage",-7.5,2.7,-29,13160703,21.6,7,!0),h("restroom",7.5,2.7,-29,14745592,23.4,7,!0),h("nest",-10,3.1,-20,13672703,27,8),h("kitchen",11.5,2.7,-20,16777215,18,7),[[-3,16731533],[0,16769595],[3,3917823]].forEach(([U,Z])=>{let B=new gs(Z,160,16,.38,.6,2);B.position.set(U,3.4,-24),B.target.position.set(U*.8,.6,-29.5),t.add(B,B.target),B.userData.base=160,n.stage.push(B)});let v=new ms(4214880,1050632,.18);t.add(v),De(t,new yt(9.4,.6,4.2),l.wood,[0,.3,-29.9]);let m=Dt(512,256,(U,Z,B)=>{for(let H=0;H<32;H++){let K=U.createLinearGradient(H*16,0,H*16+16,0);K.addColorStop(0,"#4a0c1e"),K.addColorStop(.5,"#8e1a3c"),K.addColorStop(1,"#4a0c1e"),U.fillStyle=K,U.fillRect(H*16,0,16,B)}});De(t,new Pt(9.8,3.4),qe({map:m,roughness:.95}),[0,1.7,-31.85]);let u=new vt(new Pt(6,1.1),new Zt({map:Gn("SALEM'S CANDY","#ff4d8d"),transparent:!0}));u.position.set(0,3,-31.7),t.add(u),p(-4.4,-27,1.6,"#ff4d6d"),p(4.4,-27,1.6,"#3bc7ff"),f(-5,-18),f(0,-17.5),f(5,-18.5),f(-2.5,-22.5),f(3,-23),p(-8.3,-15,2,"#7dff6b"),p(8.3,-24.8,2,"#ffe23b"),d(t,tn("TRY THE","GUMMY WORMS","#fff5d6","#d4262f",e.bubbles),1.2,1.6,[-8.85,1.9,-24],Math.PI/2),d(t,tn("SALEM SAYS","NO REFUNDS","#d6f0ff","#1d4b8f",null),1.1,1.5,[8.85,1.9,-15.5],-Math.PI/2),De(t,new yt(4,1.1,.8),qe({map:Vn("#ff7cc0",{stripes:"rgba(255,255,255,.6)"}),roughness:.4}),[6,.55,-14.6]);for(let U=0;U<5;U++)_(t,4.4+U*.75,1.1,-14.6,[16726843,3920383,16769595,8257387,12872703][U]);d(t,tn("ZAYED SAYS","POP POP POP","#ffd1ea","#a53d7c",e.bubbles),1,1.35,[-5.36,1.6,-8],Math.PI/2),d(t,tn("ZAYED SAYS","CHEW SLOWLY","#fff1f1","#c4122a",e.taffy),1,1.35,[5.36,1.6,-8],-Math.PI/2),d(t,tn("LOST","ONE SHAWARMA","#fffbe0","#333",e.zayed),.8,1.05,[-3.14,1.6,-5],-Math.PI/2),d(t,tn("CELEBRATE!","ZAYED DAY","#ffe8b0","#a8743f",e.zayed),1,1.35,[3.14,1.6,-5],Math.PI/2);let w=tn("EMPLOYEE OF","THE MONTH: YOUSEF","#fff6d0","#5e3c1e",e.scream),E=tn("IT'S ME","ABDULLA","#1e1400","#ffd84a",e.goldenTint),M=d(t,w,1.1,1.45,[-4.25,1.6,3.86],Math.PI);d(t,tn("NO AXES","IN THE STORE","#fff","#c4122a",null),.9,1.2,[4.25,1.6,3.86],Math.PI);for(let U=0;U<3;U++){De(t,new yt(3,.05,.6),l.metal,[-7.25,.5+U*.7,-5.55]);for(let Z=0;Z<5;Z++)De(t,new Gt(.45,.4,.4,2,.03),qe({color:11766354,roughness:.9}),[-8.4+Z*.6,.73+U*.7,-5.55])}De(t,new ft(.3,.3,.8,16),qe({color:2976655,metalness:.4,roughness:.5}),[-8.4,.4,-2.6]);for(let U=0;U<4;U++){De(t,new yt(4.6,.05,.6),l.metal,[-7.5,1.3,-31.6]);let Z=["zayed","bubbles","taffy","sherbet"][U],B=De(t,new Qe(.28,20,16),qe({map:Vn(["#c99556","#ef86bd","#f4ead8","#7a6a5c"][U]),roughness:.9}),[-9.2+U*1.1,1.62,-31.6]),H=i[Z],K=H.image?H.image.width/H.image.height:.7;De(t,new Qe(.29,24,20,Math.PI/2-K*.85,K*1.7,Math.PI/2-.85,1.7),qe({map:H,alphaTest:.45}),[-9.2+U*1.1,1.62,-31.6]).rotation.y=(U-1.5)*.25,B.rotation.y=(U-1.5)*.25}d(t,tn("IN MEMORY OF","ABDULLA'S CAFETERIA","#e8e0c8","#222",e.goldenTint),1.1,1.45,[-9.86,1.7,-28],Math.PI/2),De(t,new Gt(1,1.2,.7,3,.05),qe({color:4473924,metalness:.5,roughness:.6}),[-6,.6,-26.6]),["BOYS","GIRLS","ROBOTS"].forEach((U,Z)=>{De(t,new yt(1.1,2.2,.06),qe({color:6060682,roughness:.5}),[5.9+Z*1.5,1.1,-31.82]),d(t,Gn(U,"#203040",{w:512,h:160,bg:"#ffffff",font:"Consolas, monospace"}),.7,.22,[5.9+Z*1.5,1.9,-31.78],0)}),De(t,new yt(3,.95,.8),l.metal,[11.5,.475,-23.4]),De(t,new yt(3.4,.5,2.6),l.wood,[-12.2,.25,-20]);let L=new vt(new Pt(3,.6),new Zt({map:Gn("ZAYED EXPRESS","#ff9d2e"),transparent:!0}));L.position.set(-13.86,2.9,-20),L.rotation.y=Math.PI/2,t.add(L);let A=qe({map:Dt(256,256,(U,Z,B)=>{for(let H=0;H<16;H++){let K=U.createLinearGradient(H*16,0,H*16+16,0);K.addColorStop(0,"#2a1440"),K.addColorStop(.5,"#5a2a80"),K.addColorStop(1,"#2a1440"),U.fillStyle=K,U.fillRect(H*16,0,16,B)}U.fillStyle="#ffd84a",U.font="40px serif";for(let H=0;H<6;H++)U.fillText("\u2605",Math.random()*Z,Math.random()*B)}),roughness:.95,side:qt}),C=De(t,new Pt(1.4,2.6),A,[-11,1.8,-20.65],[0,Math.PI/2,0]),P=De(t,new Pt(1.4,2.6),A,[-11,1.8,-19.35],[0,Math.PI/2,0]),b=De(t,new Pt(1.2,.7),new Zt({map:Gn("OUT FOR DELIVERY :)","#ff3b3b",{w:1024,h:300,bg:"#ffffff"})}),[-10.9,.95,-20],[0,Math.PI/2,.08]);b.visible=!1;let g=new mt;t.add(g),De(g,new Gt(2.8,.08,1,2,.02),l.wood,[0,.78,2.35]),De(g,new yt(2.7,.72,.06),l.wood,[0,.38,1.9]),[-1,1].forEach(U=>De(g,new yt(.06,.74,.9),l.wood,[U*1.33,.37,2.35])),De(g,new Gt(.62,.5,.5,3,.05),qe({color:13222824,roughness:.6}),[.1,1.07,2.2]);let R=document.createElement("canvas");R.width=128,R.height=96;let k=new us(R),z=new vt(new Pt(.5,.38),new Zt({map:k,color:8978346}));z.position.set(.1,1.08,2.452),g.add(z);let q=new mt;q.position.set(-.8,.82,2.25),g.add(q),De(q,new ft(.12,.14,.04,20),l.dark,[0,.02,0]),De(q,new ft(.02,.02,.3,8),l.metal,[0,.17,0]),De(q,new Tn(.18,.008,6,32),l.metal,[0,.42,.04]);let ne=new mt;ne.position.set(0,.42,.04),q.add(ne);for(let U=0;U<3;U++){let Z=De(ne,new Qe(.08,12,8),qe({color:10133670,metalness:.6,roughness:.4}),[Math.cos(U*2.09)*.09,Math.sin(U*2.09)*.09,0],[0,0,U*2.09]);Z.scale.set(1,.45,.12),Z.castShadow=!1}q.rotation.y=.4;let Y=Qs(i,!0);Y.scale.setScalar(2.1),Y.position.set(.82,.82,2.55),Y.rotation.y=-.18,g.add(Y),Y.traverse(U=>{U.isMesh&&(U.userData.act="cupcake")}),o.push(Y),_(g,1.15,.82,2.1,16726843),_(g,-1.15,.82,2.1,8257387),De(g,new Gt(.3,.1,.18,2,.03),qe({color:11869212,roughness:.4}),[-.35,.87,2.6]),De(g,new Pt(.3,.4),qe({color:15921898}),[.45,.825,2.62],[-Math.PI/2,0,.3]),De(g,new sa(.06,1),qe({color:13620956,metalness:.9,roughness:.35,flatShading:!0}),[-.55,.86,2.7]),d(g,tn("SALEM'S CANDY","SWEETS FOR EVERY SOUL","#ffd1ea","#a53d7c",e.zayed),1.2,1.6,[-1.5,1.7,.135],0),d(g,tn("RULES","1. NO AXES  2. NO SHAWARMA","#ffffff","#222",null),.9,1.2,[1.7,1.6,.135],0),[["zayed","#e2412f","ZAYED"],["bubbles","#c46bff","ZAYED"],["taffy","#3bc7ff","ZAYED 2"],["sherbet","#4fb848","ZAYED!!"]].forEach(([U,Z,B],H)=>d(g,Yh(e[U],Z,B),.42,.5,[-.15+H%2*.5,1.95-Math.floor(H/2)*.55,.135],0));let oe=U=>{let Z=U*2.93;De(g,new Gt(.06,1,.5,2,.02),l.metal,[Z,1.3,.42]);let B=(H,K,se,re)=>{let Ce=De(g,new ft(.12,.12,.07,28),qe({color:K,roughness:.3,emissive:K,emissiveIntensity:0}),[Z-U*.05,H,.42],[0,0,Math.PI/2]);return Ce.userData.act=se,o.push(Ce),d(g,Gn(re,"#ffffff",{w:256,h:64,bg:"#222",font:"Consolas, monospace"}),.32,.08,[Z-U*.035,H-.18,.42],-U*Math.PI/2),Ce};return{door:B(1.6,14820911,U<0?"doorL":"doorR","DOOR"),light:B(1.15,16774848,U<0?"lightL":"lightR","LIGHT")}},J=oe(-1),me=oe(1),ve=U=>{let Z=U*3;[[.74,0],[2.66,0]].forEach(([K])=>De(g,new yt(.3,2.3,.12),l.shutter,[Z,1.15,K])),De(g,new yt(.3,.14,2.04),l.shutter,[Z,2.37,1.7]);let B=new yt(.08,2.3,1.8);B.translate(0,-1.15,0);let H=De(g,B,l.shutter,[Z,2.3,1.7]);return H.scale.y=.001,H},Te=ve(-1),He=ve(1),je=U=>{let Z=new gs(16773320,0,12,.85,.5,1.6);return Z.position.set(U*3.1,2.25,1.7),Z.target.position.set(U*4.6,.9,1.7),Z.castShadow=!0,Z.shadow.mapSize.set(1024,1024),Z.shadow.bias=-.002,t.add(Z,Z.target),Z},Q=je(-1),ae=je(1),xe=new gs(16767392,14,7,.9,.7,1.7);xe.position.set(0,2.62,2.6),xe.target.position.set(0,0,2.2),xe.castShadow=!0,xe.shadow.mapSize.set(1024,1024),xe.shadow.bias=-.002,xe.userData.base=14,t.add(xe,xe.target),n.office.push(xe);let he=new Pi(16769232,0,4,2);he.position.set(0,1.6,2.9),t.add(he);function Le(U,Z){let B="office",H=1/0;for(let K in r){let[se,re,Ce,Ie]=r[K],Ze=Math.max(se-U,0,U-Ce)+Math.max(re-Z,0,Z-Ie);Ze<H&&(H=Ze,B=K)}return B}s.office.attach(g),t.children.slice().forEach(U=>{U===v||s[U.name]===U||s[Le(U.position.x,U.position.z)].attach(U)});let Ue=[Q,ae,he],Ve=[xe,Q,ae],lt=[],Ye=(U,Z)=>lt.includes(Le(U,Z)),st={};["zayed","bubbles","taffy","sherbet","golden"].forEach(U=>{st[U]=pa(U,i),t.add(st[U].root)});let N=new I(0,1.42,4.25),zt=new xt(64,16/9,.05,80);zt.position.copy(N);let Ge={stage:[[0,2.9,-24.3],[0,1.6,-30],["stage"],["stage","dining"]],dining:[[8.3,3.3,-14.7],[-3,.6,-22],["dining"],["dining","stage"]],cove:[[-9.6,2.9,-16.6],[-13,1.2,-21],["nest"],["nest","dining"]],westHall:[[-4.25,2.6,-13.6],[-4.25,.9,0],["westHallN","westHallS"],["westCorr","supply"]],westCor:[[-3.3,2.55,-2.6],[-4.6,.8,3],["westHallS"],["westCorr","office"]],supply:[[-5.85,2.55,-2.4],[-8.5,.6,-5.6],["supply"],["supply","westCorr"]],eastHall:[[4.25,2.6,-13.6],[4.25,.9,0],["eastHallN","eastHallS"],["eastCorr"]],eastCor:[[3.3,2.55,-2.6],[4.6,.8,3],["eastHallS"],["eastCorr","office"]],backstage:[[-5.4,2.7,-26.5],[-9.5,.8,-31],["backstage"],["backstage","stage"]],kitchen:[[11.5,2.6,-16.5],[11.5,.8,-23],["kitchen"],["kitchen"]],restroom:[[5.4,2.7,-26.5],[9.5,.8,-31],["restroom"],["restroom"]]},Xe=[null,null,["office"],["office","westCorr","eastCorr"]],Ae={};Object.keys(Ge).forEach(U=>{let[Z,B]=Ge[U],H=new xt(70,16/9,.05,60);H.position.set(...Z),H.lookAt(...B),H.userData.base=H.quaternion.clone(),Ae[U]=H});let rt={stage:{zayed:[0,-29.4,.6],bubbles:[-2.4,-29.2,.6],taffy:[2.4,-29.2,.6]},dining:{zayed:[-1,-21.5,0],bubbles:[-5.5,-20.5,0],taffy:[3.8,-21,0]},backstage:{bubbles:[-8.2,-29.4,0]},westHall:{bubbles:[-4.25,-6.5,0]},westCor:{bubbles:[-3.3,1.7,0]},supply:{bubbles:[-7.4,-4.2,0]},restroom:{zayed:[8.6,-29.6,0],taffy:[6.6,-28.8,0]},kitchen:{zayed:[10.5,-20,0],taffy:[12,-21,0]},eastHall:{zayed:[4.25,-8.5,0],taffy:[4.25,-5.5,0]},eastCor:{zayed:[3.3,1.7,0],taffy:[3.3,1.7,0]}};function Re(U,Z){let B=st[U],H=rt[Z]&&rt[Z][U];if(!H){B.root.visible=!1;return}B.root.visible=Ye(H[0],H[1]),B.root.position.set(H[0],H[2],H[1]);let K=Z==="westCor"&&U==="bubbles"||Z==="eastCor"&&(U==="taffy"||U==="zayed")?N:Ae[Z]?Ae[Z].position:N;B.root.rotation.set(0,Math.atan2(K.x-H[0],K.z-H[1]),0)}function T(U,Z){let B=st.sherbet;if(B.root.visible=Ye(Z!=null?-4.25:-12,Z!=null?-5:-20),Z!=null){let se=-12+Z*13.6;B.root.position.set(-4.25+Z*.4,0,se),B.root.rotation.set(.25,Math.atan2(.4,1),0);return}B.root.rotation.set(0,Math.PI/2,0);let H=[-12.9,-12.3,-11.6,-10.6];U>=4?B.root.visible=!1:B.root.position.set(H[U],.5,-20);let K=[0,.35,.8,1.2,1.2][Math.min(4,U)];C.position.z=-20.65-K*.6,P.position.z=-19.35+K*.6,C.scale.x=P.scale.x=1-K*.4,b.visible=U>=4}function x(U){let Z=st.golden;Z.root.visible=U&&s.office.visible,Z.root.position.set(.05,-.15,1.05),Z.root.rotation.set(0,0,0),Z.root.scale.setScalar(.92)}x(!1);function V(U){M.material.map=U?E:w,M.material.needsUpdate=!0}function ee(U,Z){let B=Ge[U]||Xe;lt=B[3];for(let H in s)s[H].visible=lt.includes(H);for(let H in n){let K=B[2].includes(H);n[H].forEach(se=>{se.visible=K,se.intensity=K&&!Z?se.userData.base:0,se.userData.bulb&&(se.userData.bulb.visible=K&&!Z)})}Ue.forEach(H=>{H.visible=B===Xe})}let ie=["office"].concat(Object.keys(Ge));function j(U){Ve.forEach(Z=>{Z.castShadow=U})}let Me=0;function ge(U,Z,B){if(ne.rotation.z+=U*(B.blackout?0:22),Me+=U,Me>.08&&s.office.visible){Me=0;let K=R.getContext("2d"),se=K.createImageData(128,96);for(let re=0;re<se.data.length;re+=4){let Ce=B.blackout?0:Math.random()*200;se.data[re]=se.data[re+1]=se.data[re+2]=Ce,se.data[re+3]=255}K.putImageData(se,0,0),k.needsUpdate=!0}a.forEach(K=>{K.intensity>0&&Math.random()<.015?K.intensity=K.userData.base*(.2+Math.random()*.5):K.intensity>0&&(K.intensity+=(K.userData.base-K.intensity)*.2)}),Y.userData.flame.scale.set(1,1+Math.sin(Z*13)*.15+Math.sin(Z*7.3)*.1,1),Y.userData.light.intensity=B.blackout?.6:.25+Math.sin(Z*11)*.05}return{scene:t,player:zt,cams:Ae,bots:st,buttons:o,hemi:v,scareLight:he,cupcake:Y,doorL:Te,doorR:He,hallL:Q,hallR:ae,panelL:J,panelR:me,PLAYER:N,place:Re,placeSherbet:T,placeGolden:x,setPoster:V,setView:ee,setShadows:j,viewNames:ie,update:ge,lights:n}}var sc=i=>document.querySelector(i),X=new Proxy({},{get:(i,e)=>i[e]||(i[e]=document.getElementById(e))}),sr=(i,e)=>i+Math.random()*(e-i),Rn=(i,e,t)=>Math.max(e,Math.min(t,i)),rc=i=>i[Math.random()*i.length|0],Ui=1600,rr=900,Sa=matchMedia("(prefers-reduced-motion: reduce)").matches,ac=88,Qh=ac*6,Ng=.35,Fg=.11,Og=1013,or={low:{ratio:.75,shadows:!1,hint:"Softer picture, no shadows. For older laptops."},medium:{ratio:1,shadows:!0,hint:"Shadows on, medium sharpness."},high:{ratio:1.25,shadows:!0,hint:"Full sharpness and shadows."}},vs={stage:{id:"1A",name:"Show stage"},dining:{id:"1B",name:"Candy hall"},cove:{id:"1C",name:"The Nest"},westHall:{id:"2A",name:"West hall"},westCor:{id:"2B",name:"West hall corner"},supply:{id:"3",name:"Supply closet"},eastHall:{id:"4A",name:"East hall"},eastCor:{id:"4B",name:"East hall corner"},backstage:{id:"5",name:"Backstage"},kitchen:{id:"6",name:"Kitchen"},restroom:{id:"7",name:"Restrooms"}},Bg=["stage","dining","cove","westHall","westCor","supply","eastHall","eastCor","backstage","kitchen"],jh={backstage:[20,30,100,60],cove:[20,110,90,60],stage:[160,10,150,50],dining:[130,70,210,110],restroom:[360,30,90,60],kitchen:[360,110,90,70],supply:[20,210,90,60],westHall:[130,195,50,130],eastHall:[290,195,50,130],westCor:[130,335,50,70],eastCor:[290,335,50,70]},eu=["stage","dining","restroom","kitchen","eastHall","eastCor"],zg={bubbles:{stage:["dining"],dining:["backstage","westHall"],backstage:["dining","westHall"],westHall:["supply","westCor","dining"],supply:["westHall","westCor"],westCor:[]},taffy:{stage:["dining"],dining:["restroom","kitchen","eastHall"],restroom:["dining","kitchen"],kitchen:["dining","eastHall"],eastHall:["eastCor","kitchen","dining"],eastCor:[]}},kg=["zayed","bubbles","taffy","sherbet"],Hg={1:[3,0,0,0],2:[4,3,1,2],3:[5,5,4,4],4:[7,7,6,7],5:[9,10,9,10],6:[20,20,20,20]},nn={zayed:"Zayed the Camel",bubbles:"Zayed the Cat",taffy:"Zayed the Goat",sherbet:"Zayed the Falcon",golden:"Abdulla"},Vg={1:["The Daily Pita","Tragedy at Abdulla's Cafeteria","A customer named Rashid got very mad, and very hungry, and ate everybody in the store with his big axe. Owner Abdulla and regular customer Zayed, who only wanted his shawarma, did not make it home. Rashid was never charged."],2:["The Daily Pita","Salem's Candy opens on the same street",'Meet the band: a camel, a cat, a goat and a falcon. All four answer to the name Zayed. "They came like that," says owner Salem. New hires include a father and son, Rashid and Yousef. Rashid takes the night shift.'],3:["The Daily Pita","Candy robots keep asking for shawarma",'Children report that every robot asks where the nearest shawarma is. "It is a candy shop," says Salem. "We do not sell shawarma. Please stop asking, Zayed. All of you."'],4:["The Daily Pita","Who is the golden camel?","Staff deny owning a fifth, gold-plated robot. The Employee of the Month poster in the west corner has been replaced 1,013 times. Each time, the new photo is of Abdulla."],5:["The Daily Pita","Salem's Candy to close after five nights","Police have reopened the cafeteria case. Yousef has not come to work. A cupcake was found on the night guard's desk. Its candle is a shawarma. It is still lit."],6:["4/20 Edition","Every Zayed is awake","All four at level 20. Every roll succeeds. Zayed is very, very hungry. All of him."],7:["Health Inspection","Salem's Candy fails inspection (again)",`Inspector's note: "The robots are set to whatever the night guard wants. Why would you want that." Rating: one lollipop out of five.`]},Kl={1:{audio:1,who:"Phone guy, Qerh Cooperations",end:45,lines:[[0,"Hello? Hello, yoo-hoo!"],[3.5,"Welcome to Five Nights at Zayed's, produced by Qerh Cooperations."],[9.8,"Please keep in mind that Zayed and his friends will kill you in the upcoming nights."],[16,"Luckily, I'm here to help you avoid getting eaten by them. So listen closely."],[21.8,"To counter them, use the tablet and doors to make sure they don't get in your office."],[27.5,"So far, only Zayed is awake on the first night. He isn't as aggressive, so you're probably fine."],[35.3,"Try not to get your balls knocked off."],[38.2,"That's it for the first night. Stay safe, and I'll see you tomorrow."],[43.2,"Goodbye!"]]},2:{audio:2,who:"Phone guy, Qerh Cooperations",end:66,lines:[[0,"Zayed is a very sad guy."],[3.9,"All he wanted to have was his shawarma from Abdulla's Cafeteria."],[8.3,"An incident occurred when some stupid guy named Rashid was very hungry and decided to eat everybody in there."],[18.4,"This caused the death of Abdulla and Zayed."],[22.6,"After some time, they became souls and possessed a candy shop called Salem's Candy."],[30.8,"It's a bad name, but whatever."],[33.8,"And they took over the animatronics, who looked like animals? I dunno."],[40,"Turns out, Rashid works there."],[42.2,"So that's probably why they want to kill you, thinking you're Rashid."],[47.6,"So, stay safe. Goodbye!"],[52,"The Cat takes the west door. The Goat takes the east.","note"],[59,"If the Nest says OUT FOR DELIVERY, shut the west door.","note"]]},3:{audio:3,who:"Phone guy, Qerh Cooperations",end:48.3,lines:[[0.4,"Hello? Hello, yoo-hoo! Yeah, it's me. The phone guy."],[4.4,"Don't hang up. I know what the automated message said. \"It was HIM the whole time.\""],[10.1,"That was me being dramatic. I'd had a long week."],[13.1,"Anyway, I did some digging, and it turns out the owner of Salem's Candy bought this place for one reason: it's across the street from Abdulla's Cafeteria."],[23.1,"He wanted to keep an eye on the souls."],[25.1,"He's been dead since night two. Nobody told the paperwork."],[27.8,"So here's the situation. The Zayeds aren't just angry anymore, they're organised. The Cat and the Goat are working together, and the Falcon is on a delivery schedule."],[36.8,"I've never seen him this punctual."],[39.4,"Use the doors, use the tablet, keep an eye on your power,"],[42.1,"and for the love of shawarma, do not eat the cupcake. Stay safe, Rashid. Goodbye!"]]},4:{audio:4,who:"Phone guy, Qerh Cooperations",end:60.4,lines:[[1.0,"Hello? Hello, yoo-hoo!"],[4.9,"Rashid, it's the phone guy. Final night. I'll be honest with you. I never expected you to make it this far."],[10.7,"Nobody did. The betting pool at Qerh Cooperations closed on night two,"],[14.8,"and the winner collected on night three."],[18.5,"Awkward. But you're still here, so here's everything I know. Zayed is the Camel."],[24.0,"He only moves in the dark."],[25.8,"The Cat comes from the west, and the Goat from the east. The Falcon delivers, and you don't want to be the delivery."],[33.2,"And if a gold camel is sitting in your office, tablet up, and don't look at him. I mean it."],[41.3,"Tonight they're all awake, and they're all angry."],[44.5,"Here's my advice. Close a door only when someone's behind it."],[49.0,"Don't waste power. And if the lights go out, just stay calm."],[53.4,"Staying calm is easier said than done. Stay safe, Rashid. It's been an honour. Goodbye!"]]},5:{who:"Qerh Cooperations (automated)",text:["This is an automated message from Qerh Cooperations.",'Your phone guy has quit. He says, and we quote, "it was HIM the whole time."',"A complimentary cupcake is on your desk. It is from Zayed.","Do not eat the cupcake."]},6:{who:"Unknown caller",text:["4/20 mode. Every Zayed at level 20.","Nobody is coming to help you, Rashid."]},7:{who:"Salem (voicemail)",text:["Custom night. I set the robots to these numbers myself.","I have heard the rumours, Rashid."]}},Gg={1:"Night one survived. Somewhere in the dark, a camel sighs.",2:"Two down. The Cat left a bubble on your chair. It popped.",3:'Halfway. A note on your desk reads: "WHERE IS MY SHAWARMA, RASHID."',4:"You called Yousef. A gold camel picked up.",5:window.FNAZ5?"You survived five nights. At six, Abdulla finally served the Falcon his last order, and the Falcon did not get up. Salem's Candy closes today and the police are waiting outside. Behind you, three Zayeds watch you go, still waiting for a shawarma that will never come. 4/20 mode is open on your time card.":"You survived five nights. Salem's Candy closes tomorrow and the police are waiting outside. Through the window, four Zayeds watch you go, still waiting for a shawarma that will never come. 4/20 mode is open on your time card.",6:"4/20 mode beaten. Zayed finally got his shawarma. All four of him. Abdulla closed the cafeteria for good. You are free, Rashid. For now.",7:"Custom night cleared. The inspector is impressed. And concerned.",8:"Nightmare one done. Shamshamumu nods slowly.",9:"Nightmare two done. The robots are taking notes.",10:"Nightmare three done. Even the cupcake is nervous.",11:"Nightmare four done. One more, Rashid.",12:"Nightmare Shamshamumu cleared. Nobody has done this. Nobody should."},Wg={zayed:'"I just wanted my shawarma, Rashid."',bubbles:'"Yoo-hoo. Remember me from the cafeteria?"',taffy:`"Table for one? Just like at Abdulla's."`,sherbet:'"Special delivery: payback."',golden:'"Your order is ready, Rashid."'},Xg={zayed:"walked in through the open east door",bubbles:"slipped in through the west door while the tablet was up",taffy:"slipped in through the east door while the tablet was up",sherbet:"sprinted in through the open west door",golden:"was sitting in the office the whole time"},tu={zayed:"The Camel only moves while the tablet is down, and freezes while you watch him. When he reaches camera 4B, shut the east door.",bubbles:"The Cat comes from the west. Hold the west light. If he is in the doorway, shut the door until he leaves.",taffy:"The Goat comes from the east. Pans clattering in the kitchen mean she is close.",sherbet:"If the Nest says OUT FOR DELIVERY, shut the west door at once. Checking the west hall camera makes him run.",golden:"If the gold camel is sitting in your office, raise the tablet at once.",power:"Shut a door only while someone is behind it, and do not leave the tablet up."},qg=["i am the cupcake.","the candle is a shawarma. do not ask.","zayed says hi. all of him.","pls do not eat me","beep.","rashid. RASHID.","i see everything.","honk."],oc=[["zayed",nn.zayed,"Lead robot. East hall.","All Zayed wanted was a shawarma from Abdulla's Cafeteria. Now his soul drives every robot in the shop, and this is the one in charge. He freezes when watched and only moves in the dark.","East hall. Moves when you are not watching."],["bubbles",nn.bubbles,"Bubble act. West door.",'Also Zayed. Blows bubbles, knocks on the west door and says "Yoo-hoo". Do not answer.',"West door. Says hello first."],["taffy",nn.taffy,"Hostess. East door.","Still Zayed. Carries the Cupcake everywhere. Cannot cook, cooks anyway: pans in the kitchen mean she is heading for the east door.","East door. Cooks on the way."],["sherbet",nn.sherbet,"Zayed Express delivery. The Nest.","Zayed again, on roller skates. When the sign in the Nest says OUT FOR DELIVERY, the delivery is you.","Sprints down the west hall."],["cupcake","The Cupcake","Desk ornament. Possibly alive.","It has a face. Its candle is the shawarma Zayed never got to eat. It sits on your desk and it is fine. Click it."],["golden",nn.golden,"Not on the payroll.","Owner of Abdulla's Cafeteria, first to meet the axe. A one in 1013 chance you will ever see him. If you do: tablet up."],["scream","Yousef","Day shift. Employee of the Month.","Rashid's son. His photo is on the poster in the west corner, most of the time."],["","Rashid","Night guard. You.","You took a job across the street from the cafeteria. The phone guy has no idea who he is talking to. The robots do."]],cu="fnaz_save_v1",hu=()=>({night:1,unlocked:1,stars:{},custom:[5,5,5,5]}),ce=Object.assign(hu(),{volume:.8,quality:matchMedia("(pointer:coarse)").matches?"low":"high",subs:!0,fit:"fit",fps:"auto",fpsCustom:144,fpsShow:!1,rpc:!0,authentic:!0});try{Object.assign(ce,JSON.parse(localStorage.getItem(cu)||"{}"))}catch{}ce.muted&&(ce.volume=0);delete ce.muted;ce.authenticSet||(ce.authentic=!0);Voice.setAuthentic(!!ce.authentic);document.body.classList.toggle("calm",!!ce.calm);or[ce.quality]||(ce.quality="high");ce.fps!=="auto"&&!(ce.fps>=15&&ce.fps<=1e3)&&(ce.fps="auto");ce.fpsCustom>=30&&ce.fpsCustom<=360||(ce.fpsCustom=144);var hn=null,Ms=()=>{try{localStorage.setItem(cu,JSON.stringify(ce))}catch{}};function nu(i){return new Promise(e=>{let t=new Image;t.onload=t.onerror=()=>e(t),t.src=i})}function ql(i){let e=new Vt(i);return e.colorSpace=Bt,e.anisotropy=8,e.needsUpdate=!0,e}async function Yg(){let i=["zayed","bubbles","taffy","sherbet","golden","scream"],e={};await Promise.all(i.map(async c=>{e[c]=await nu("assets/faces/"+c+".png")})),e.cupRaw=await nu("assets/faces/Screenshot_1.png");let t=e.golden,n=document.createElement("canvas");n.width=t.width||4,n.height=t.height||4;let s=n.getContext("2d");s.drawImage(t,0,0),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(230,175,30,.5)",s.fillRect(0,0,n.width,n.height),e.goldenTint=n;let r=256,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d");o.beginPath(),o.arc(r/2,r/2,r/2,0,Math.PI*2),o.clip(),e.cupRaw.width&&o.drawImage(e.cupRaw,14,18,184,184,0,0,r,r);let l={};return["zayed","bubbles","taffy","sherbet","scream"].forEach(c=>{l[c]=ql(e[c])}),l.golden=ql(n),l.cupcake=ql(a),{imgs:e,faces:l}}var y={screen:"title",running:!1,paused:!1,night:1,mx:Ui/2,yaw:0,goldenOdds:Og,heard:{}},We,Rt,_a,ya,xa={},lc=new xt(42,16/9,.1,60);lc.position.set(.5,1.5,-20.7);lc.lookAt(-1.6,1.9,-29.3);var ar={};function At(i,e,t){ar[i]!==e&&(ar[i]=e,t(e))}function xn(i){document.querySelectorAll(".screen").forEach(e=>e.classList.toggle("active",e.id===i)),y.screen=i,X.hud.classList.toggle("on",i==="game"),i!=="game"&&cc()}function cc(){let i=sc(".screen.active"),e=i&&(i.querySelector("[data-primary]:not([hidden])")||i.querySelector("button:not(:disabled):not([hidden])"));e&&e.focus({preventScroll:!0})}var FITS={fit:"Shows the whole picture. Thin black bars appear on screens with a different shape.",fill:"Fills the screen. The edges of the picture may be cut off.",stretch:"Fills the screen without cutting anything off. The picture is stretched a little."};function hc(){let w=innerWidth/Ui,h=innerHeight/rr,m=ce.fit==="stretch"?[w,h]:ce.fit==="fill"?[Math.max(w,h),Math.max(w,h)]:[Math.min(w,h),Math.min(w,h)],i=Math.max(m[0],m[1])||1;X.stage.style.transform=`translate(-50%,-50%) scale(${m[0]||1},${m[1]||1})`,Rt&&(Rt.setPixelRatio(Rn(i*(devicePixelRatio||1),.5,or[ce.quality].ratio)),Rt.setSize(Ui,rr,!1),y.screen==="title"?du():y.running&&y.paused&&pc(0,performance.now()/1e3))}function uu(){We.setShadows(or[ce.quality].shadows),Rt.shadowMap.needsUpdate=!0,hc()}var lr=i=>i>=8?"Nightmare "+(i-7):i===6?"4/20 mode":i===7?"Custom night":"Night "+i;function Zg(){let i=Rn(ce.night,1,ce.unlocked)>1;X.btnContinue.hidden=!i,X.btnContinue.textContent="Continue: night "+Rn(ce.night,1,ce.unlocked),X.btnContinue.toggleAttribute("data-primary",i),/Electron/.test(navigator.userAgent)||(X.btnQuit.hidden=!0)}function du(){We.setView("stage"),We.hemi.intensity=.18,["zayed","bubbles","taffy"].forEach(i=>{Wl(We.bots[i]),We.bots[i].root.scale.setScalar(1),We.place(i,"stage")}),We.bots.sherbet.root.visible=!1,We.placeGolden(!1),Rt.render(We.scene,lc),delete ar.view}function va(){FNAZNET.role&&FNAZNET.leave(!0);y.running=!1,y.paused=!1,y.scare=null,li(),Ea(),Voice.stop(),Sound.stopAll(),Sound.ambient(!1),Zg(),xn("title"),du()}function $g(){let i=["First shift","Meet the band","No signal","The golden camel","Last night"],e="";for(let n=1;n<=5;n++){let s=n>ce.unlocked,r=n<ce.unlocked||n===5&&ce.stars.n5,a=s?`Locked. Survive night ${n-1} first.`:r?"Survived":"Clock in";e+=`<button type="button" class="${r?"done":""}" data-night="${n}"${s?" disabled":""}><span class="r-n">Night ${n}</span><span class="r-l">${i[n-1]}</span><span class="r-s">${a}</span></button>`}e+=`<button type="button" class="${ce.stars.n6?"done":""}" data-night="6"><span class="r-n">4/20</span><span class="r-l">Every Zayed at level 20</span><span class="r-s">${ce.stars.n6?"Beaten":"Challenge"}</span></button>`,X.nightGrid.innerHTML=e;let t=[ce.stars.n5&&"five nights",ce.stars.n6&&"4/20 mode",ce.stars.max&&"custom night with all four at 20"].filter(Boolean);X.stars.textContent=t.length?"\u2605".repeat(t.length)+" Earned for: "+t.join(", ")+".":"No stars yet. Survive night 5 to earn the first."}function zNm(){let L=[[10,12,12,12],[12,14,14,14],[14,16,16,16],[17,18,18,18],[20,20,20,20]],u=ce.nmUnlocked||1,e="";for(let n=1;n<=5;n++){let s=n>u,r=n<u||n===5&&ce.stars.nm,l=L[n-1],a=s?"Locked":r?"Survived":"Clock in";e+=`<button type="button" class="${r?"done":""}" data-night="${n+7}"${s?" disabled":""}><span class="r-n">Nightmare ${n}</span><span class="r-l">${l.join("  ·  ")}</span><span class="r-s">${a}</span></button>`}X.nmGrid.innerHTML=e,X.nmNote.textContent=ce.stars.nm?"\u2605 Nightmare Shamshamumu cleared.":"Five nights, all very hard. Power drains faster, and they do not let up."}function iu(){X.customGrid.innerHTML=kg.map((i,e)=>`<div class="cn"><img src="${xa[i]}" width="400" height="500" alt=""><h3>${nn[i]}</h3><p>${oc[e][4]}</p><label for="cn${e}">Level <output id="cnOut${e}" for="cn${e}">${ce.custom[e]}</output></label><input id="cn${e}" data-cn="${e}" type="range" min="0" max="20" value="${ce.custom[e]}"></div>`).join("")}function Jg(){X.castList.innerHTML=oc.map((i,e)=>`<button type="button" data-cast="${e}">${i[1]}</button>`).join(""),fu(0)}function fu(i){let[e,t,n,s]=oc[i];X.castList.querySelectorAll("button").forEach((a,o)=>a.setAttribute("aria-current",i===o));let r=xa[e]||ya[e]&&ya[e].src;X.castPhoto.innerHTML=r?`<img src="${r}" width="400" height="500" alt="${t}">`:"No photo on file. He never looks at the camera.",X.castName.textContent=t,X.castRole.textContent=n,X.castBio.textContent=s}function Kg(){X.setVolume.value=Math.round(ce.volume*100),X.setVolumeOut.textContent=Math.round(ce.volume*100)+"%",X.setQuality.querySelectorAll("input").forEach(i=>{i.checked=i.value===ce.quality}),X.setFit.querySelectorAll("input").forEach(i=>{i.checked=i.value===(ce.fit||"fit")}),X.fitHint.textContent=FITS[ce.fit||"fit"],X.qualityHint.textContent=or[ce.quality].hint,X.setSubs.checked=ce.subs,X.setFpsShow.checked=ce.fpsShow,X.setRpc.checked=ce.rpc,X.setAuthentic.checked=!!ce.authentic,X.setCalm.checked=!!ce.calm,Ma(),su(),ma(!1),window.fnaz&&fnaz.info().then(i=>{hn=i,Ma(),su()}).catch(()=>{})}function Ma(){let i=ce.fps==="auto";X.setFpsMode.querySelectorAll("input").forEach(n=>{n.checked=n.value===(i?"auto":"custom")}),X.setFps.disabled=i,X.setFps.value=ce.fpsCustom,X.setFpsOut.textContent=i?"Auto":ce.fpsCustom+" FPS";let e=!!hn&&!i!==hn.uncapped,t;hn?e?t=i?"Going back to Auto needs a restart.":"A custom limit turns VSync off so frames can pass your monitor's "+hn.refresh+" Hz. That needs a restart.":i?t="One frame per screen refresh ("+hn.refresh+" Hz), with VSync. No tearing.":t="VSync is off, so frames can pass "+hn.refresh+" Hz and the picture may tear.":t="In a browser the game draws at most one frame per screen refresh. The desktop app can go higher.",X.fpsHint.textContent=t,X.btnRestart.hidden=!e}function su(){X.setRpc.disabled=!hn,X.rpcHint.textContent=hn?hn.discord==="off"?"No Discord application ID is set yet. See discord.json.":hn.discord==="connected"?"Your night shows on your Discord profile.":"Waiting for Discord to open.":"Only in the desktop app."}function ma(i){X.resetBox.innerHTML=i?'<span class="danger">Erase every survived night and star?</span><button type="button" data-act="resetYes">Yes, erase</button><button type="button" data-act="resetNo">Keep it</button>':'<button type="button" data-act="resetAsk">Erase progress</button>',i&&X.resetBox.querySelector("[data-act=resetNo]").focus()}function Qg(){let i=new Vs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(400,500),i.toneMapping=la;let e=new hs,t=new Ys(16770768,3);t.position.set(1.5,3,3),e.add(t);let n=new Ys(16731533,2.5);n.position.set(-2,2,-2),e.add(n),e.add(new ms(8425632,2101264,.6));let s=new xt(30,400/500,.1,20);["zayed","bubbles","taffy","sherbet","golden"].forEach(r=>{let a=pa(r,_a);e.add(a.root);let o=r==="zayed"||r==="golden"?2.3:2.12;s.position.set(.35,o+.05,2.7),s.lookAt(0,o-.38,0),i.render(e,s),xa[r]=i.domElement.toDataURL(),e.remove(a.root)}),e.add(Qs(_a)),s.position.set(.1,.24,.8),s.lookAt(0,.17,0),i.render(e,s),xa.cupcake=i.domElement.toDataURL(),i.dispose(),i.forceContextLoss()}function Di(i,e){if(Sound.unlock(),li(),Ea(),X.pause.classList.remove("active"),y.night=i,y.running=!1,y.paused=!1,i<=5&&(ce.night=i,Ms()),e||i>=8)return ba(i,!0);let t=Vg[i];X.paper.innerHTML=`<div class="mast">${t[0]}</div><div class="date">Vol. 1013. Price: one pita.</div><div class="head">${t[1]}</div><div class="body">${t[2]}</div><div class="shift">Tonight: ${lr(i)}, 12 AM to 6 AM.</div>`,X.paper.style.animation="none",X.paper.offsetWidth,X.paper.style.animation="",xn("loading")}function ba(i,e){let t=i===7?ce.custom.slice():i>=8?[[10,12,12,12],[12,14,14,14],[14,16,16,16],[17,18,18,18],[20,20,20,20]][i-8].slice():Hg[i].slice();Object.assign(y,{rng:Math.random()*4294967296>>>0,pre:!1,cut:null,usedCams:!1,calmT:0,zPrev:0,heatL:0,heatR:0,coolL:0,coolR:0,wbubbles:0,wtaffy:0,night:i,time:0,hour:0,power:100,doorL:!1,doorR:!1,lightL:!1,lightR:!1,dAnimL:0,dAnimR:0,monitor:!1,monA:0,cam:"stage",blackout:!1,bT:0,zFlash:!1,dead:!1,won:!1,paused:!1,scare:null,fade:1,statBurst:0,poster:!1,goldenArmed:!1,goldenIn:!1,goldenT:0,cupT:0,capT:0,halluc:0,clatterT:0,barT:0,yaw:0,shake:0,shSig:"",lv:t,who:null}),y.ai={zayed:{room:"stage",ai:t[0],t:0,pending:0,pendMax:0,armed:!1,office:!1,officeT:0},bubbles:{room:"stage",ai:t[1],t:0,iv:4.97,office:!1,officeT:0},taffy:{room:"stage",ai:t[2],t:0,iv:4.98,office:!1,officeT:0},sherbet:{stage:0,ai:t[3],t:0,cd:0,wait:0,running:!1,runT:0,hits:0}},Object.values(We.bots).forEach(n=>{Wl(n),n.root.scale.setScalar(1),n.face.material.emissive.setHex(0)}),We.setPoster(!1),We.scareLight.intensity=0;for(let n in ar)delete ar[n];X.nightLbl.textContent=X.fadeNight.textContent=lr(i),X.pause.classList.remove("active"),xn("game"),document.activeElement&&document.activeElement.blur(),y.running=!0,Sound.ambient(!0),!e&&!y.heard[i]&&Kl[i]&&(y.heard[i]=!0,pu(i))}function pu(i){if(i===5&&window.FNAZ5)return FNAZ5.startCall(i);let e=Kl[i],t=e.lines,n=e.end;if(!t){let s=0;t=e.text.map(r=>{let a=[s,r];return s+=2.5+r.length*.055,a}),n=s}y.call={n:i,lines:t,end:n,t:-1.9,idx:-1,audio:null,voiced:!!e.audio,fit:!!e.audio&&!e.lines},Sound.ring(),X.callWho.textContent=e.who,X.callText.textContent="Ringing",X.call.classList.remove("note"),X.call.classList.add("on")}function fitCall(e){let d=e.audio.duration,w=l=>l[1].length+8,tot=e.lines.reduce((a,l)=>a+w(l),0),acc=0;e.lines=e.lines.map(l=>{let r=l.length>2?[acc/tot*d,l[1],l[2]]:[acc/tot*d,l[1]];return acc+=w(l),r}),e.end=d+.5}function jg(i){let e=y.call;if(!e)return;if(e.parts)return FNAZ5.callStep(e,i);let t=e.t;if(e.t+=i,t<0&&e.t>=0&&e.voiced&&(e.audio=Voice.phone(Kl[e.n].audio)),e.t<0)return;e.audio&&!e.audio.ended&&e.audio.currentTime>0&&(e.t=e.audio.currentTime);e.fit&&e.audio&&!e.fitted&&isFinite(e.audio.duration)&&e.audio.duration>0&&(fitCall(e),e.fitted=!0);let n=-1;for(let s=0;s<e.lines.length;s++)e.lines[s][0]<=e.t&&(n=s);if(n!==e.idx&&n>=0){e.idx=n;let[,s,r]=e.lines[n],a=r==="note";X.call.classList.toggle("note",a),X.callWho.textContent=a?"Sticky note on the monitor":Kl[e.n].who,X.callText.textContent=e.voiced&&!a&&Kl[e.n].nosub?"Call in progress.":e.voiced&&!a&&!ce.subs?"Call in progress (subtitles are off).":s}e.t>e.end&&li()}function li(){y.call&&(y.call=null,Voice.stop("phone"),Voice.stop("phone2"),X.call.classList.remove("on")),window.FNAZ5&&FNAZ5.preEnd()}var e_={camel:nn.zayed,cat:nn.bubbles,goat:nn.taffy,falcon:nn.sherbet};function oi(i,e,t){t&&Voice.stop(i);let n=Voice.say(i,e);!n||!ce.subs||(X.caption.innerHTML="<span></span>",X.caption.firstChild.textContent=e_[i]+": "+n,y.capT=2.6)}var uc=i=>Math.floor(Math.random()*20)+1<=i;function mu(i){if(y.cut)return FNAZ5.cutStep(i);if(FNAZNET.role==="guest")return FNAZNET.guestStep(i);FNAZNET.role==="host"&&FNAZNET.hostStep(i);if(y.scare){y.scare.t+=i;return}if(y.dead||y.won)return;y.fade=Math.max(0,y.fade-i*.45),y.dAnimL=Rn(y.dAnimL+(y.doorL?6:-6)*i,0,1),y.dAnimR=Rn(y.dAnimR+(y.doorR?6:-6)*i,0,1),y.monA=Rn(y.monA+(y.monitor?4.5:-4.5)*i,0,1),y.statBurst=Math.max(0,y.statBurst-i*2.5),y.cupT=Math.max(0,y.cupT-i),y.capT=Math.max(0,y.capT-i),jg(i),zApply(FNAZAI.step(y,i,zEnv()))}function zEnv(){return{online:!!FNAZNET.role,guest:FNAZNET.role==="guest",reduced:Sa}}function zApply(ev){for(let e of ev)switch(e[0]){case"tick":Sound.tick();break;case"nightEnd":fc();break;case"kill":zKillFx(e[1]);break;case"doorSlam":Sound.doorSlam();break;case"steps":Sound.steps(e[1],e[2],e[3]);break;case"laugh":Sound.laugh(e[1],e[2]);break;case"knock":Sound.knock(e[1]);break;case"breathing":Sound.breathing();break;case"run":Sound.run();break;case"bang":Sound.bang();break;case"whisper":Sound.whisper();break;case"camDown":Sound.camDown();break;case"clatter":Sound.clatter(e[1]);break;case"musicBox":Sound.musicBox(e[1]);break;case"say":oi(e[1],e[2],e[3]);break;case"achieve":window.FNAZ_ACH&&FNAZ_ACH.event(e[1]);break;case"blackout":zBlackoutFx();break}}function zKillFx(i){FNAZNET.ev("dead",i),y.dead=!0,y.who=i,li(),Voice.stop(),Sound.stopAll(),Sound.ambient(!1);try{X.powerVideo.pause()}catch{}if(X.powerWrap.classList.remove("on"),y.pvid=!1,y.monitor=!1,y.monA=0,We.bots.zayed.face.material.emissive.setHex(0),i==="golden")return l_();y.scare={who:i,t:0},Sound.jumpscare(),setTimeout(Su,1450)}function zBlackoutFx(){FNAZNET.ev("blackout"),li(),Sound.stopAll(),Sound.ambient(!1),Sound.powerOut(),Sound.doorSlam(),y.pvid=!0,X.powerWrap.classList.add("on"),dc(X.powerVideo).catch(()=>{y.pvid=!1,X.powerWrap.classList.remove("on")})}function gu(){return Rn(1+y.doorL+y.doorR+y.lightL+y.lightR+y.monitor,1,5)}function t_(i){let e=y.ai.zayed;if(e.office){!y.monitor&&(e.officeT+=i)>=1&&(e.officeT-=1,Math.random()<.25&&Ni("zayed"));return}if(e.armed){if(y.monitor&&y.cam===e.room){e.pending=e.pendMax;return}if(e.pending>0&&(e.pending-=i)>0)return;n_();return}e.human||(e.t+=i)<3.02||(e.t=0,!(y.monitor||!uc(e.ai))&&(e.armed=!0,e.pending=e.pendMax=Math.max(.05,(1e3-100*e.ai)/60)))}function n_(){let i=y.ai.zayed;if(i.room==="eastCor"){if(y.cam==="eastCor")return;if(!y.doorR){i.office=!0,i.officeT=0,i.armed=!1,Sound.laugh(.14,.6),oi("camel",1,!0);return}if(y.cam==="eastHall")return;i.room="eastHall",i.armed=!1,Sound.steps(.6,2,.12),oi("camel");return}if(y.monitor)return;if(eu[eu.indexOf(i.room)+1]==="eastCor"&&(y.ai.taffy.room==="eastCor"||zBlocked("zayed")))return;i.room=eu[eu.indexOf(i.room)+1],i.armed=!1,Sound.steps(.5,3,.12),Sound.laugh(.07,.5),oi("camel")}function ru(i,e){let t=y.ai[i],n=i==="bubbles";if(t.office){y.monitor&&(t.officeT+=e)>12&&nr(!1);return}if(!t.human&&t.room===(n?"westCor":"eastCor")){if((t.dw=(t.dw||0)+e)>((n?y.doorL:y.doorR)?6:10)){t.dw=0,t.t=0,ru2(i);return}}else t.dw=0;if(t.human||(t.t+=e)<t.iv||(t.t=0,!uc(t.ai)))return;ru2(i)}function ru2(i,to){let t=y.ai[i],n=i==="bubbles",s=n?-.7:.7,r=n?"westCor":"eastCor",a=n?"cat":"goat";if(t.room===r){(n?y.doorL:y.doorR)?(t.room=n?"dining":"eastHall",Sound.steps(s,3,.14),oi(a)):(t.office=!0,t.officeT=0,Sound.breathing(),oi(a,1,!0));return}let d=to||rc(zg[i][t.room]);if(d===r&&(i==="taffy"&&y.ai.zayed.room==="eastCor"||zBlocked(i)))return;t.room=d,t.room===r?Sound.knock(s):Sound.steps(s,3,.13),oi(a,t.room===r?0:void 0)}function i_(i){let e=y.ai.sherbet;if(e.running){(e.runT+=i)>=1.6&&s_();return}if(e.stage>=4){if(y.monitor&&y.cam==="westHall"&&y.monA>=1)return Ql();(e.wait-=i)<=0&&Ql();return}if(e.cd>0){e.cd-=i;return}e.human||(e.t+=i)<4.2||(e.t=0,!(y.monitor||!uc(e.ai))&&(e.stage++,oi("falcon"),e.stage===4&&(e.wait=12,Sound.steps(-.8,2,.1))))}function zMax(){return y.night>=8?6:8}function zDoors(i){if(FNAZNET.role||y.night>=8){y.heatL=y.heatR=y.coolL=y.coolR=0;return}for(let s of["L","R"]){let d="door"+s,h="heat"+s,c="cool"+s;y[d]?(y[h]+=i,y[h]>=zMax()&&(y[d]=!1,y[h]=0,y[c]=y.night>=8?6:5,Sound.doorSlam())):(y[h]=Math.max(0,y[h]-i*1.5),y[c]=Math.max(0,y[c]-i))}}function zWatch(i){let on=y.monitor&&y.monA>=1;for(let k of["bubbles","taffy"]){let a=y.ai[k],r=k==="bubbles"?"westCor":"eastCor",w="w"+k;if(on&&y.cam===r&&a.room===r&&!a.office&&!a.human){if((y[w]=(y[w]||0)+i)>=2){y[w]=0,a.room=k==="bubbles"?"dining":"eastHall",a.dw=0,Sound.steps(k==="bubbles"?-.7:.7,3,.1)}}else y[w]=0}}function zFd(i){let a=y.ai.zayed;if(a.office||a.human||a.room!=="eastCor"){a.dw=0;return}if((a.dw=(a.dw||0)+i)<(y.night>=8?7:10))return;a.dw=0;if(y.cam==="eastCor"||y.doorR&&y.cam==="eastHall"){a.room="eastHall",a.armed=!1,Sound.steps(.6,2,.12);return}a.armed=!0,a.pending=0,n_()}function zThreat(ex){let a=y.ai,n=0;for(let k of["bubbles","taffy","zayed"])k!==ex&&(a[k].office||a[k].room===(k==="bubbles"?"westCor":"eastCor"))&&n++;ex!=="sherbet"&&a.sherbet.running&&n++;return n}function zBlocked(ex){return!y.ai[ex].human&&(zThreat(ex)>=(y.night>=8?2:1)||y.calmT>0)}function zCalm(i){let c=zThreat("");c<y.zPrev&&(y.calmT=y.night>=8?1.5:4),y.zPrev=c,y.calmT=Math.max(0,y.calmT-i)}function Ql(){let i=y.ai.sherbet;if(zBlocked("sherbet"))return;i.running=!0,i.runT=0,Sound.run(),oi("falcon",0,!0)}function s_(){let i=y.ai.sherbet;if(i.running=!1,!y.doorL)return Ni("sherbet");Sound.bang(),window.FNAZ_ACH&&FNAZ_ACH.event("foxy"),y.power=Math.max(0,y.power-(1+5*i.hits)),i.hits++,i.stage=Math.random()<.5?1:2,i.cd=sr(.83,6),y.shake=.35}function r_(i){if(y.goldenIn){if(y.monitor){y.goldenIn=!1,window.FNAZ_ACH&&FNAZ_ACH.event("golden");return}(y.goldenT-=i)<=0&&(y.goldenIn=!1,Ni("golden"))}}function ai(){return y.running&&!y.paused&&!y.dead&&!y.won&&!y.scare}function _u(i){return i==="left"?y.ai.bubbles.office:y.ai.taffy.office}function er(i){if(FNAZNET.i("er",[i]))return;if(!(!ai()||y.blackout)){if(_u(i)){Sound.lightClick();return}if(!(i==="left"?y.doorL:y.doorR)&&(i==="left"?y.coolL:y.coolR)>0){Sound.lightClick();return}i==="left"?y.doorL=!y.doorL:y.doorR=!y.doorR,Sound.doorSlam()}}function Wn(i,e){if(FNAZNET.i("Wn",[i,e]))return;if(!y.running)return;if(e&&(!ai()||y.blackout||_u(i)||y.monitor)){Sound.lightClick();return}let t=i==="left"?"lightL":"lightR";y[t]!==e&&(y[t]=e,e&&(y[i==="left"?"lightR":"lightL"]=!1,Sound.lightClick()),Sound.lightBuzz(y.lightL||y.lightR),e&&jl(i)&&Sound.laugh(.06,i==="left"?-.7:.7))}function nr(i){if(FNAZNET.i("nr",[i]))return;!y.running||y.dead||y.won||y.scare||(y.blackout&&(i=!1),y.monitor!==i&&(y.monitor=i,i?(y.usedCams=!0,Sound.camUp(),y.statBurst=1,y.lightL=y.lightR=!1,Sound.lightBuzz(!1),yu()):zApply(FNAZAI.monitorDown(y,zEnv()))))}function a_(){let i=["bubbles","taffy"].find(t=>y.ai[t].office);if(i)return Ni(i);let e=y.ai.sherbet;!e.running&&e.stage<4&&(e.cd=sr(.83,6),e.t=0),y.goldenArmed&&(y.goldenArmed=!1,y.poster=!1,y.goldenIn=!0,y.goldenT=2.5,Sound.whisper())}function zCamStep(d){let o=["stage","dining","cove","westHall","westCor","supply","eastHall","eastCor","backstage","kitchen","restroom"];ga(o[(o.indexOf(y.cam)+d+o.length)%o.length])}function ga(i){if(FNAZNET.i("ga",[i]))return;!vs[i]||y.cam===i||(y.cam=i,y.statBurst=.8,Sound.camSwitch(),yu())}function yu(){zApply(FNAZAI.cameraChanged(y,zEnv()))}function xu(){y.cupT=2.4,X.bubble.textContent=rc(qg),Voice.poke()}function dc(i){return i.muted=!1,i.volume=ce.volume,i.currentTime=0,i.play()}function vu(){FNAZNET.ev("blackout"),y.blackout=!0,y.bT=0,y.doorL=y.doorR=y.lightL=y.lightR=!1,y.monitor&&(y.monitor=!1,Sound.camDown()),y.goldenIn=!1,li(),Sound.stopAll(),Sound.ambient(!1),Sound.powerOut(),Sound.doorSlam(),y.pvid=!0,X.powerWrap.classList.add("on"),dc(X.powerVideo).catch(()=>{y.pvid=!1,X.powerWrap.classList.remove("on")})}function o_(i){if(y.pvid)return;y.bT+=i;let e=y.bT>5&&y.bT<17;Sound.musicBox(e),y.zFlash=e&&Math.sin(y.bT*9)>.2,y.bT>20&&Ni("zayed")}function Ea(){[X.powerVideo,X.goldenVideo,X.opVideo].forEach(i=>{try{i.pause()}catch{}}),X.opWrap.classList.remove("on"),X.powerWrap.classList.remove("on"),X.goldenWrap.classList.remove("on"),y.pvid=!1}function Ni(i){if(FNAZNET.role!=="guest"&&(i==="zayed"||i==="bubbles"||i==="taffy")&&!y.blackout&&!y.ai[i].office)return;if(!(y.dead||y.won)){if(y.time>=Qh-Ng)return y.time=Qh,fc();FNAZNET.ev("dead",i),y.dead=!0,y.who=i,li(),Voice.stop(),Sound.stopAll(),Sound.ambient(!1);try{X.powerVideo.pause()}catch{}if(X.powerWrap.classList.remove("on"),y.pvid=!1,y.monitor=!1,y.monA=0,We.bots.zayed.face.material.emissive.setHex(0),i==="golden")return l_();y.scare={who:i,t:0},Sound.jumpscare(),setTimeout(Su,1450)}}function l_(){y.running=!1,X.goldenWrap.classList.add("on"),X.goldenVideo.preload="auto",dc(X.goldenVideo).catch(ir),X.goldenWrap.querySelector("button").focus()}var Mu=i=>i==="power"?{wrap:X.powerWrap,vid:X.powerVideo,btn:"[data-act=secretStar]"}:{wrap:X.goldenWrap,vid:X.goldenVideo,btn:"[data-act=secret]"};function au(i){if(y.pvid||y.secret)return;y.secret=i;let{wrap:e,vid:t}=Mu(i);e.classList.add("on","bonus"),t.preload="auto",dc(t).catch(Ss),e.querySelector("button").focus()}function Ss(){let i=y.secret;if(!i)return;y.secret=null;let{wrap:e,vid:t,btn:n}=Mu(i);try{t.pause()}catch{}e.classList.remove("on","bonus");let s=document.querySelector(n);s&&s.focus()}function ir(){if(y.secret)return Ss();X.goldenWrap.classList.contains("on")&&(Ea(),Su())}function Su(){y.screen==="game"&&(y.running=!1,y.scare=null,We.scareLight.intensity=0,X.overNight.textContent=lr(y.night),X.overTime.textContent=(y.hour===0?12:y.hour)+" AM",X.overCause.textContent=(y.blackout?"The power ran out. Then ":"")+nn[y.who]+" "+(y.blackout?"came for you in the dark":Xg[y.who])+".",X.overQuote.textContent=Wg[y.who],X.overTip.textContent=y.blackout?tu.power:tu[y.who],xn("over"))}function fc(){if(y.won||y.dead)return;FNAZNET.ev("win");y.won=!0,y.running=!1,li(),Ea(),Voice.stop(),Sound.stopAll(),Sound.ambient(!1),y.night===4||Sound.chime();let i=y.night;window.FNAZ_ACH&&FNAZ_ACH.win({night:i,power:y.power,usedCams:y.usedCams,lv:y.lv});i>=8&&(ce.nmUnlocked=Math.max(ce.nmUnlocked||1,Math.min(5,i-6)),i===12&&(ce.stars.nm=1)),i<=5&&(ce.unlocked=Math.max(ce.unlocked,Math.min(5,i+1)),ce.night=Math.min(5,i+1),i===5&&(ce.stars.n5=1)),i===6&&(ce.stars.n6=1),i===7&&y.lv.every(e=>e>=20)&&(ce.stars.max=1),Ms(),X.winTitle.textContent=lr(i)+" survived",X.winNote.textContent=Gg[i],X.btnNext.textContent=i>=8?i<12?"Next nightmare":"Play again":i<5?"Next night":i===5?"Play 4/20 mode":"Play again",[X.winBox,sc("#win .clock-roll")].forEach(e=>{e.style.display="none",e.offsetWidth,e.style.display=""}),i===4?pOp():i===5&&window.FNAZ5?FNAZ5.startCut():xn("win")}function pOp(){X.opWrap.classList.add("on"),dc(X.opVideo).catch(Oq)}function Oq(){X.opWrap.classList.contains("on")&&(X.opWrap.classList.remove("on"),(()=>{try{X.opVideo.pause()}catch{}})(),y.screen!=="win"&&xn("win"))}function jl(i){let e=y.ai;return i==="left"?e.sherbet.running&&e.sherbet.runT>1.1?"sherbet":e.bubbles.room==="westCor"&&!e.bubbles.office?"bubbles":null:e.taffy.room==="eastCor"&&!e.taffy.office?"taffy":null}function c_(i,e){let t=y.ai,n=We,s=y.scare&&y.scare.who;if(["zayed","bubbles","taffy"].forEach(a=>{a!==s&&(t[a].office?n.bots[a].root.visible=!1:(n.place(a,t[a].room),!(y.monitor&&y.monA>=1)&&(a==="bubbles"&&t[a].room==="westCor"&&!y.lightL||a!=="bubbles"&&t[a].room==="eastCor"&&!y.lightR)&&(n.bots[a].root.visible=!1)))}),s!=="sherbet"&&n.placeSherbet(t.sherbet.stage,t.sherbet.running?t.sherbet.runT/1.6:null),n.placeGolden(y.goldenIn),At("poster",y.poster,a=>n.setPoster(a)),y.blackout&&!y.pvid&&y.bT>4&&s!=="zayed"){let a=n.bots.zayed;a.root.visible=!0,a.root.position.set(-3.9,0,1.7),a.root.rotation.set(0,Math.atan2(n.PLAYER.x+3.9,n.PLAYER.z-1.7),0),a.face.material.emissive.setHex(y.zFlash?16777215:0),a.face.material.emissiveIntensity=.8}n.doorL.scale.y=Math.max(.001,y.dAnimL),n.doorR.scale.y=Math.max(.001,y.dAnimR),n.panelL.door.material.emissiveIntensity=y.doorL?1.4:0,n.panelR.door.material.emissiveIntensity=y.doorR?1.4:0,n.panelL.light.material.emissiveIntensity=y.lightL?1.2:0,n.panelR.light.material.emissiveIntensity=y.lightR?1.2:0;let r=()=>Math.random()<.06?.3:1;n.hallL.intensity=y.lightL?45*r():0,n.hallR.intensity=y.lightR?45*r():0,Object.values(n.bots).forEach(a=>{a.root.visible&&Jh(a,i,a.who===s?"scare":"idle")}),n.update(i,e,y)}var An=new I,h_=new I(0,1,0);function u_(i){let e=y.scare,t=We.bots[e.who],n=We.player,r=1.5-Math.min(1,e.t/.2)*.72;n.getWorldDirection(An),An.y=0,An.normalize(),t.root.visible=!0,t.root.scale.setScalar(1.15);let a=t.head.position.y+.27;t.root.position.set(n.position.x+An.x*r,n.position.y-a*1.15+.02,n.position.z+An.z*r),t.root.lookAt(n.position.x,t.root.position.y,n.position.z),t.root.rotation.z=Math.sin(i*40)*.05,We.scareLight.position.set(n.position.x,n.position.y+.3,n.position.z),We.scareLight.intensity=!Sa&&Math.random()<.25?.5:4}function pc(i,e){if(y.cut)return FNAZ5.cutDraw(i,e);let t=y.monitor&&y.monA>=1&&!y.scare,n=t?y.cam:"office";At("view",n+(y.blackout?"!":""),()=>{We.setView(n,y.blackout),We.hemi.intensity=y.blackout?.04:.18}),c_(i,e);let s=We.player;if(!y.monitor&&!y.scare){let a=Rn((y.mx/Ui-.5)*2,-1,1),o=-Math.sign(a)*Math.max(0,Math.abs(a)-.12)/.88*1.15;y.yaw+=(o-y.yaw)*Math.min(1,i*(document.body.classList.contains("touch")?10:5))}s.rotation.set(-.08,y.yaw,0,"YXZ");let r=Sa?0:y.scare?.03:y.shake>0?.02:0;if(y.scare&&u_(e),y.shake>0&&(y.shake-=i),s.rotation.x+=sr(-r,r),s.rotation.y+=sr(-r,r),t){if(y.cam!=="kitchen"){let a=We.cams[y.cam];a.quaternion.copy(a.userData.base),a.rotateOnWorldAxis(h_,Math.sin(e*.25)*.12),Rt.render(We.scene,a)}}else{let a=[y.dAnimL.toFixed(2),y.dAnimR.toFixed(2),y.lightL,y.lightR,jl("left"),jl("right"),y.goldenIn,y.blackout&&y.bT>4].join();(a!==y.shSig||y.scare||y.ai.sherbet.running)&&(y.shSig=a,Rt.shadowMap.needsUpdate=!0),Rt.render(We.scene,s)}f_(t)}var bu=[],Eu;function d_(){for(let i=0;i<6;i++){let e=document.createElement("canvas");e.width=320,e.height=180;let t=e.getContext("2d"),n=t.createImageData(320,180);for(let s=0;s<n.data.length;s+=4){let r=Math.random()*255;n.data[s]=n.data[s+1]=n.data[s+2]=r,n.data[s+3]=255}t.putImageData(n,0,0),bu.push(e)}Eu=X.noise.getContext("2d")}function f_(i){At("cctv",i,n=>{X.gl.classList.toggle("cctv",n),X.camOverlay.classList.toggle("on",n),document.body.classList.toggle("cams",n)});let e=y.monA>0&&!i&&!y.scare;At("flip",e,n=>X.tablet.classList.toggle("on",n)),e&&(X.tablet.style.transform=`perspective(1500px) rotateX(${(1-y.monA)*86}deg)`),i&&(Eu.drawImage(rc(bu),0,0),X.noise.style.opacity=.11+y.statBurst*.75+(Math.random()<.03?.25:0),At("cam",y.cam,n=>{X.camName.textContent=vs[n].name,X.camId.textContent="CAM "+vs[n].id,X.kitchen.classList.toggle("on",n==="kitchen"),X.map.querySelectorAll(".map-btn").forEach(s=>{let r=s.dataset.cam===n;s.classList.toggle("sel",r),s.setAttribute("aria-pressed",r)})}),At("pans",y.cam==="kitchen"&&["zayed","taffy"].some(n=>y.ai[n].room==="kitchen"),n=>{X.kitchenMsg.textContent=n?"Pots and pans, loudly.":""})),At("clock",y.hour===0?12:Math.min(6,y.hour),n=>{X.clock.textContent=n+" AM"}),At("power",Math.ceil(y.power)+(y.pre?"u":""),()=>{let n=Math.ceil(y.power);X.power.textContent=y.pre?"Power unlimited":"Power "+n+"%",X.power.classList.toggle("low",!y.pre&&n<=15)}),At("usage",gu(),n=>{X.usage.innerHTML=Array.from({length:n},(s,r)=>`<i class="u${r}"></i>`).join("")}),At("doorW",y.doorL+"|"+Math.ceil(y.coolL||0)+"|"+(y.heatL>zMax()-3),()=>{X.doorWest.textContent="West door "+(y.doorL?y.heatL>zMax()-3?"shut (hot!)":"shut":y.coolL>0?"cooling "+Math.ceil(y.coolL)+"s":"open"),X.doorWest.classList.toggle("shut",y.doorL)}),At("doorE",y.doorR+"|"+Math.ceil(y.coolR||0)+"|"+(y.heatR>zMax()-3),()=>{X.doorEast.textContent="East door "+(y.doorR?y.heatR>zMax()-3?"shut (hot!)":"shut":y.coolR>0?"cooling "+Math.ceil(y.coolR)+"s":"open"),X.doorEast.classList.toggle("shut",y.doorR)}),At("bar",y.monitor,n=>{X.bar.firstChild.textContent=n?"Close cameras ":"Cameras "}),At("dark",y.blackout||!!y.scare,n=>X.hud.classList.toggle("dark",n)),At("fade",Math.round(y.fade*50),n=>{X.fade.style.opacity=n/50,X.fade.style.display=n?"":"none"}),At("halluc",y.halluc>0,n=>X.halluc.classList.toggle("on",n)),At("flash",!!y.scare&&!Sa&&Math.random()<.35,n=>X.scareFlash.classList.toggle("on",n)),At("keys",y.night===1&&y.time<75&&!y.monitor&&!y.call,n=>X.keys.classList.toggle("on",n)),At("caption",y.capT>0,n=>X.caption.classList.toggle("on",n));let t=y.cupT>0&&!i&&!y.scare;At("bubble",t,n=>X.bubble.classList.toggle("on",n)),t&&(An.setFromMatrixPosition(We.cupcake.matrixWorld),An.y+=.75,An.project(We.player),X.bubble.style.left=(An.x+1)/2*Ui+"px",X.bubble.style.top=(1-An.y)/2*rr+"px")}function ou(i){let e=X.stage.getBoundingClientRect();return[(i.clientX-e.left)/e.width*Ui,(i.clientY-e.top)/e.height*rr]}var lu=new oa,Yl={newgame(){ce.night=1,Ms(),Di(1)},continue(){Di(Rn(ce.night,1,ce.unlocked))},nights(){$g(),xn("nights")},custom(){iu(),xn("custom")},extras(){Jg(),xn("extras")},help(){xn("help")},settings(){y.settingsFrom=y.paused?"pause":"title",Kg(),xn("settings")},settingsBack(){if(y.settingsFrom!=="pause")return va();xn("game"),X.pause.classList.add("active"),cc()},title:va,quit(){window.close()},skip(){ba(y.night)},resume(){ec()},retry(){if(FNAZNET.role)return FNAZNET.again();Di(y.night,!0)},next(){if(FNAZNET.role)return FNAZNET.again();Di(y.night>=8?y.night<12?y.night+1:8:y.night<5?y.night+1:6)},online(){FNAZNET.open()},nightmare(){zNm(),xn("nightmare")},preset(i){ce.custom=[0,0,0,0].map(()=>+i.dataset.p),Ms(),iu()},customGo(){Di(7)},muteCall:li,skipGolden:ir,skipOp:Oq,skipCut(){FNAZ5.endCut()},secret(){au("golden")},secretStar(){au("power")},skipSecret:Ss,restartGame(){window.fnaz&&fnaz.relaunch()},resetAsk(){ma(!0)},resetNo(){ma(!1)},resetYes(){Object.assign(ce,hu()),Ms(),ma(!1),X.resetBox.insertAdjacentHTML("beforeend","<span>Progress erased.</span>")}};function p_(){let sk="";window.FNAZ_unlock=()=>{let a=ce.unlocked<5||(ce.nmUnlocked||1)<5;ce.unlocked=5,ce.nmUnlocked=5,Ms(),Zg(),window.FNAZ_ACH&&FNAZ_ACH.event("secret"),y.screen==="nights"&&$g(),y.screen==="nightmare"&&zNm();let d=document.createElement("div");d.className="cheat-toast",d.textContent=a?"Shawarma! All nights unlocked.":"All nights are already unlocked.",X.stage.appendChild(d),setTimeout(()=>d.remove(),3500),a&&Sound.chime()};document.addEventListener("keydown",e=>{if(y.screen==="game"||e.ctrlKey||e.metaKey||e.altKey||/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)||e.key.length!==1)return;sk=(sk+e.key.toLowerCase()).slice(-8);if(sk!=="shawarma")return;sk="";window.FNAZ_unlock()});addEventListener("resize",hc),addEventListener("blur",()=>{ai()&&ec()}),X.stage.addEventListener("pointermove",i=>{i.pointerType!=="touch"&&([y.mx]=ou(i))}),[X.hud,X.camOverlay].forEach(i=>i.addEventListener("mousedown",e=>e.preventDefault())),X.bar.addEventListener("pointerenter",i=>{i.pointerType==="mouse"&&ai()&&(y.barT=performance.now(),nr(!y.monitor))}),X.bar.addEventListener("click",()=>{ai()&&performance.now()-y.barT>500&&nr(!y.monitor)}),X.gl.addEventListener("pointerdown",i=>{if(y.screen!=="game"||!ai()||y.monitor)return;let[e,t]=ou(i);lu.setFromCamera(new ye(e/Ui*2-1,-(t/rr*2-1)),We.player);let n=lu.intersectObjects(We.buttons,!0)[0],s,r;if(n){s=n.object;for(;s&&!s.userData.act;)s=s.parent;r=s&&s.userData.act}else if(i.pointerType==="touch"){let a=1e9,v=new I;We.buttons.forEach(b=>{b.getWorldPosition(v),v.project(We.player);if(v.z>-1&&v.z<1){let d=Math.hypot((v.x+1)/2*Ui-e,(1-v.y)/2*rr-t);d<a&&d<130&&(a=d,r=b.userData.act)}})}if(!r)return;r==="doorL"?er("left"):r==="doorR"?er("right"):r==="lightL"?Wn("left",!0):r==="lightR"?Wn("right",!0):r==="cupcake"&&xu()}),["pointerup","pointercancel"].forEach(t=>addEventListener(t,()=>{y.running&&(Wn("left",!1),Wn("right",!1))})),X.camOverlay.addEventListener("wheel",i=>{ai()&&y.monitor&&(i.preventDefault(),zCamStep(i.deltaY>0?1:-1))},{passive:!1}),X.map.addEventListener("click",i=>{let e=i.target.closest(".map-btn");e&&ai()&&ga(e.dataset.cam)}),document.addEventListener("keydown",i=>{if(Sound.unlock(),(y.screen!=="game"||y.paused)&&(i.code==="ArrowDown"||i.code==="ArrowUp")){let n=sc(".screen.active"),s=n?[...n.querySelectorAll("button:not(:disabled), input")].filter(o=>o.offsetParent):[];if(!s.length)return;i.preventDefault();let r=s.indexOf(document.activeElement),a=i.code==="ArrowDown"?1:-1;s[r<0?0:(r+a+s.length)%s.length].focus();return}if(i.repeat)return;if(i.code==="Escape")return y.secret?Ss():X.opWrap.classList.contains("on")?Oq():y.cut?FNAZ5.endCut():X.goldenWrap.classList.contains("on")?ir():y.screen==="game"&&y.running&&!y.dead&&!y.won?ec():y.screen==="settings"?Yl.settingsBack():["nights","custom","extras","help","loading","nightmare","achievements"].includes(y.screen)?va():void 0;if(y.screen!=="game"||!ai())return;let t=i.code;t==="KeyA"?er("left"):t==="KeyD"?er("right"):t==="KeyQ"?Wn("left",!0):t==="KeyE"?Wn("right",!0):t==="Space"?(i.preventDefault(),nr(!y.monitor)):t==="KeyM"?li():/^Digit\d$/.test(t)&&y.monitor?ga(Bg[(+t.slice(5)+9)%10]):t==="KeyR"&&y.monitor?ga("restroom"):t==="ArrowLeft"&&y.monitor?(i.preventDefault(),zCamStep(-1)):t==="ArrowRight"&&y.monitor&&(i.preventDefault(),zCamStep(1))}),document.addEventListener("keyup",i=>{i.code==="KeyQ"&&Wn("left",!1),i.code==="KeyE"&&Wn("right",!1)}),document.addEventListener("click",i=>{Sound.unlock();let e=i.target.closest("[data-night]");if(e)return Di(+e.dataset.night);let t=i.target.closest("[data-cast]");if(t)return fu(+t.dataset.cast);let n=i.target.closest("[data-act]");n&&Yl[n.dataset.act]&&Yl[n.dataset.act](n)}),document.addEventListener("input",i=>{let e=i.target;if(e.dataset.cn)ce.custom[+e.dataset.cn]=+e.value,X["cnOut"+e.dataset.cn].textContent=e.value;else if(e.id==="setVolume")ce.volume=e.value/100,X.setVolumeOut.textContent=e.value+"%",Sound.setVolume(ce.volume);else if(e.name==="fit")ce.fit=e.value,X.fitHint.textContent=FITS[e.value],hc();else if(e.name==="quality")ce.quality=e.value,X.qualityHint.textContent=or[e.value].hint,uu();else if(e.id==="setSubs")ce.subs=e.checked;else if(e.id==="setCalm")ce.calm=e.checked,document.body.classList.toggle("calm",e.checked);else if(e.id==="setAuthentic")ce.authentic=e.checked,ce.authenticSet=!0,Voice.setAuthentic(e.checked);else if(e.name==="fpsMode")ce.fps=e.value==="auto"?"auto":ce.fpsCustom,window.fnaz&&fnaz.setFps(ce.fps),Ma();else if(e.id==="setFps")ce.fpsCustom=+e.value,ce.fps!=="auto"&&(ce.fps=ce.fpsCustom,window.fnaz&&fnaz.setFps(ce.fps)),Ma();else if(e.id==="setFpsShow")ce.fpsShow=e.checked,X.fpsMeter.classList.toggle("on",ce.fpsShow);else if(e.id==="setRpc")ce.rpc=e.checked,nc="",ic();else return;Ms()}),X.setVolume.addEventListener("change",()=>Sound.tick()),X.powerVideo.addEventListener("ended",()=>{if(y.secret==="power")return Ss();X.powerWrap.classList.remove("on"),y.pvid=!1,y.blackout&&Ni("zayed")}),X.powerVideo.addEventListener("error",()=>{if(y.secret==="power")return Ss();X.powerWrap.classList.remove("on"),y.pvid=!1}),X.goldenVideo.addEventListener("ended",ir),X.goldenVideo.addEventListener("error",ir),X.opVideo.addEventListener("ended",Oq),X.opVideo.addEventListener("error",Oq)}function ec(){if(FNAZNET.role)return FNAZNET.menu();y.paused=!y.paused,X.pause.classList.toggle("active",y.paused),Sound.lightBuzz(!y.paused&&(y.lightL||y.lightR)),Voice.pause(y.paused),y.pvid&&(y.paused?X.powerVideo.pause():X.powerVideo.play().catch(()=>{})),y.paused?cc():document.activeElement&&document.activeElement.blur()}function m_(){X.map.innerHTML=Object.keys(jh).map(i=>{let[e,t,n,s]=jh[i];return`<button type="button" class="map-btn" data-cam="${i}" aria-label="Camera ${vs[i].id}, ${vs[i].name}" aria-pressed="false" style="left:${e}px;top:${t}px;width:${n}px;height:${s}px"><small>CAM</small>${vs[i].id}</button>`}).join("")+`<div class="map-you" style="left:190px;top:345px;width:90px;height:60px">YOU</div><div class="map-lbl">SALEM'S CANDY</div>`}var tc=16,wu=0,g_=window.FNZ={G:y,save:ce,startNight:Di,beginOffice:ba,kill:Ni,win:fc,setCam:ga,setMonitor:nr,toggleDoor:er,setLight:Wn,enterBlackout:vu,startCall:pu,move(i,e){y.ai[i].room=e},cove(i){y.ai.sherbet.stage=i,y.ai.sherbet.wait=25},run:()=>Ql(),hour(i){y.time=i*ac-.5},power(i){y.power=i},goldenOdds(i){y.goldenOdds=i},cupcake:xu,step(i=1,e=1/30){for(let t=0;t<i&&(y.running||y.scare);t++)mu(e),(y.running||y.scare)&&pc(e,performance.now()/1e3)},info:()=>({calls:Rt.info.render.calls,triangles:Rt.info.render.triangles,programs:Rt.info.programs.length,frameMs:+tc.toFixed(1),ratio:Rt.getPixelRatio()}),async selftest(){let i=["phone1","phone2","bonnie1","bonnie2","bonnie3","bonnie4","foxy1","foxy2","foxy3","foxy4"].map(t=>["audio","assets/voice/"+t+".mp3"]).concat([["video","assets/verity-song-dub.mp4"],["video","assets/FNAZ_.mp4"]]),e=[];return await Promise.all(i.map(([t,n])=>new Promise(s=>{let r=document.createElement(t),a=o=>{o||e.push(n),s()};r.oncanplay=()=>a(!0),r.onerror=()=>a(!1),setTimeout(()=>a(r.readyState>=2),8e3),r.preload="auto",r.src=n,r.load()}))),{media:i.length,failed:[...new Set(e)],world:!!We,screen:y.screen,font:document.fonts.check('40px "Titan One"')}},get frames(){return wu},get world(){return We}},nc="";function ic(){if(!window.fnaz)return;let i=(y.hour===0?12:Math.min(6,y.hour))+" AM",e=lr(y.night),t;y.screen==="game"?(t={details:e,state:y.dead?"Being eaten by "+nn[y.who]:y.paused?"Paused at "+i:y.blackout?"Power out at "+i:i+", surviving the Zayeds"},t.since=Date.now()-y.time*1e3):y.screen==="over"?t={details:"Died on "+e,state:"Killed by "+nn[y.who]+" at "+i}:y.screen==="win"?t={details:"Survived "+e,state:"Made it to 6 AM"}:y.screen==="loading"?t={details:"Reading the paper: "+e,state:"Before the shift"}:t={details:"In the menus",state:"Main menu"};t=FNAZNET.presence(t)||t;let n=ce.rpc?[t.details,t.state,t.party].join("|"):"off";n!==nc&&(nc=n,fnaz.presence(ce.rpc?t:null))}var Zl=performance.now(),js=0,$l=0,Jl=performance.now(),__=()=>ce.fps==="auto"?matchMedia("(pointer:coarse)").matches?1e3/30:/Mac/.test(navigator.platform)&&hn&&hn.refresh>75?1e3/60:0:1e3/ce.fps;function tr(i){if(!((y.running||y.scare)&&!y.paused)){setTimeout(()=>requestAnimationFrame(tr),60);return}let e=__();if(e&&i<js-.5){let n=js-i;n>20?setTimeout(()=>requestAnimationFrame(tr),n-17):requestAnimationFrame(tr);return}e&&(js=i-js>e?i+e:js+e);let t=Math.min(.06,(i-Zl)/1e3);tc+=(i-Zl-tc)*.05,Zl=i,mu(t),(y.running||y.scare)&&pc(t,i/1e3),$l++,wu++,i-Jl>=500&&(ce.fpsShow&&(X.fpsMeter.textContent=Math.round($l*1e3/(i-Jl))+" FPS"),$l=0,Jl=i),requestAnimationFrame(tr)}(async function(){hc();try{({imgs:ya,faces:_a}=await Yg()),await document.fonts.load('40px "Titan One"').catch(()=>{}),Rt=new Vs({canvas:X.gl,antialias:(devicePixelRatio||1)<2,powerPreference:"high-performance"})}catch{X.bootMsg.textContent="Could not start 3D graphics (WebGL). Update your graphics driver, then start the game again.";return}Rt.shadowMap.enabled=!0,Rt.shadowMap.type=Il,Rt.shadowMap.autoUpdate=!1,Rt.toneMapping=la,Rt.toneMappingExposure=1.25,We=Kh(_a,ya),Qg(),d_(),m_(),p_(),FNAZNET.bind({y,ba,Ni,fc,vu,er,Wn,nr,ga,n_,Ql,ru2,oi,ai,xn,va,ce,nn,vs,zg,ec,cs:zCamStep,We,Rt,X,xt,Wl,ar,li}),window.fnaz&&(hn=await fnaz.info().catch(()=>null),fnaz.setFps(ce.fps)),X.fpsMeter.classList.toggle("on",ce.fpsShow),uu(),Sound.setVolume(ce.volume);for(let t of We.viewNames)We.setView(t),Object.values(We.bots).forEach(n=>{n.root.visible=!0}),Rt.compile(We.scene,We.cams[t]||We.player);X.boot.remove();let e=new URLSearchParams(location.search);e.has("night")?ba(Rn(+e.get("night")||1,1,7),!0):va(),g_.ready=!0,setInterval(ic,1e3),ic(),requestAnimationFrame(tr)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
