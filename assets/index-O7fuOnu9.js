(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const I of g.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&r(I)}).observe(document,{childList:!0,subtree:!0});function d(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function r(m){if(m.ep)return;m.ep=!0;const g=d(m);fetch(m.href,g)}})();function gm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Xp(){if(Hh)return hl;Hh=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function d(r,m,g){var I=null;if(g!==void 0&&(I=""+g),m.key!==void 0&&(I=""+m.key),"key"in m){g={};for(var S in m)S!=="key"&&(g[S]=m[S])}else g=m;return m=g.ref,{$$typeof:s,type:r,key:I,ref:m!==void 0?m:null,props:g}}return hl.Fragment=h,hl.jsx=d,hl.jsxs=d,hl}var Gh;function Kp(){return Gh||(Gh=1,Wu.exports=Xp()),Wu.exports}var i=Kp(),Vu={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Zp(){if(Qh)return ye;Qh=1;var s=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),I=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.iterator;function z(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,K={};function _(y,T,X){this.props=y,this.context=T,this.refs=K,this.updater=X||Y}_.prototype.isReactComponent={},_.prototype.setState=function(y,T){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,T,"setState")},_.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function D(){}D.prototype=_.prototype;function V(y,T,X){this.props=y,this.context=T,this.refs=K,this.updater=X||Y}var W=V.prototype=new D;W.constructor=V,O(W,_.prototype),W.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function re(y,T,X,E,N,$){return X=$.ref,{$$typeof:s,type:y,key:T,ref:X!==void 0?X:null,props:$}}function he(y,T){return re(y.type,T,void 0,void 0,void 0,y.props)}function Q(y){return typeof y=="object"&&y!==null&&y.$$typeof===s}function L(y){var T={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(X){return T[X]})}var oe=/\/+/g;function be(y,T){return typeof y=="object"&&y!==null&&y.key!=null?L(""+y.key):T.toString(36)}function Ye(){}function ln(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ye,Ye):(y.status="pending",y.then(function(T){y.status==="pending"&&(y.status="fulfilled",y.value=T)},function(T){y.status==="pending"&&(y.status="rejected",y.reason=T)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Ge(y,T,X,E,N){var $=typeof y;($==="undefined"||$==="boolean")&&(y=null);var ne=!1;if(y===null)ne=!0;else switch($){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(y.$$typeof){case s:case h:ne=!0;break;case A:return ne=y._init,Ge(ne(y._payload),T,X,E,N)}}if(ne)return N=N(y),ne=E===""?"."+be(y,0):E,ae(N)?(X="",ne!=null&&(X=ne.replace(oe,"$&/")+"/"),Ge(N,T,X,"",function(ge){return ge})):N!=null&&(Q(N)&&(N=he(N,X+(N.key==null||y&&y.key===N.key?"":(""+N.key).replace(oe,"$&/")+"/")+ne)),T.push(N)),1;ne=0;var Oe=E===""?".":E+":";if(ae(y))for(var se=0;se<y.length;se++)E=y[se],$=Oe+be(E,se),ne+=Ge(E,T,X,$,N);else if(se=z(y),typeof se=="function")for(y=se.call(y),se=0;!(E=y.next()).done;)E=E.value,$=Oe+be(E,se++),ne+=Ge(E,T,X,$,N);else if($==="object"){if(typeof y.then=="function")return Ge(ln(y),T,X,E,N);throw T=String(y),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ne}function H(y,T,X){if(y==null)return y;var E=[],N=0;return Ge(y,E,"","",function($){return T.call(X,$,N++)}),E}function ie(y){if(y._status===-1){var T=y._result;T=T(),T.then(function(X){(y._status===0||y._status===-1)&&(y._status=1,y._result=X)},function(X){(y._status===0||y._status===-1)&&(y._status=2,y._result=X)}),y._status===-1&&(y._status=0,y._result=T)}if(y._status===1)return y._result.default;throw y._result}var ee=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function qe(){}return ye.Children={map:H,forEach:function(y,T,X){H(y,function(){T.apply(this,arguments)},X)},count:function(y){var T=0;return H(y,function(){T++}),T},toArray:function(y){return H(y,function(T){return T})||[]},only:function(y){if(!Q(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ye.Component=_,ye.Fragment=d,ye.Profiler=m,ye.PureComponent=V,ye.StrictMode=r,ye.Suspense=b,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ye.act=function(){throw Error("act(...) is not supported in production builds of React.")},ye.cache=function(y){return function(){return y.apply(null,arguments)}},ye.cloneElement=function(y,T,X){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var E=O({},y.props),N=y.key,$=void 0;if(T!=null)for(ne in T.ref!==void 0&&($=void 0),T.key!==void 0&&(N=""+T.key),T)!ce.call(T,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&T.ref===void 0||(E[ne]=T[ne]);var ne=arguments.length-2;if(ne===1)E.children=X;else if(1<ne){for(var Oe=Array(ne),se=0;se<ne;se++)Oe[se]=arguments[se+2];E.children=Oe}return re(y.type,N,void 0,void 0,$,E)},ye.createContext=function(y){return y={$$typeof:I,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:g,_context:y},y},ye.createElement=function(y,T,X){var E,N={},$=null;if(T!=null)for(E in T.key!==void 0&&($=""+T.key),T)ce.call(T,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(N[E]=T[E]);var ne=arguments.length-2;if(ne===1)N.children=X;else if(1<ne){for(var Oe=Array(ne),se=0;se<ne;se++)Oe[se]=arguments[se+2];N.children=Oe}if(y&&y.defaultProps)for(E in ne=y.defaultProps,ne)N[E]===void 0&&(N[E]=ne[E]);return re(y,$,void 0,void 0,null,N)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(y){return{$$typeof:S,render:y}},ye.isValidElement=Q,ye.lazy=function(y){return{$$typeof:A,_payload:{_status:-1,_result:y},_init:ie}},ye.memo=function(y,T){return{$$typeof:p,type:y,compare:T===void 0?null:T}},ye.startTransition=function(y){var T=Z.T,X={};Z.T=X;try{var E=y(),N=Z.S;N!==null&&N(X,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(qe,ee)}catch($){ee($)}finally{Z.T=T}},ye.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ye.use=function(y){return Z.H.use(y)},ye.useActionState=function(y,T,X){return Z.H.useActionState(y,T,X)},ye.useCallback=function(y,T){return Z.H.useCallback(y,T)},ye.useContext=function(y){return Z.H.useContext(y)},ye.useDebugValue=function(){},ye.useDeferredValue=function(y,T){return Z.H.useDeferredValue(y,T)},ye.useEffect=function(y,T){return Z.H.useEffect(y,T)},ye.useId=function(){return Z.H.useId()},ye.useImperativeHandle=function(y,T,X){return Z.H.useImperativeHandle(y,T,X)},ye.useInsertionEffect=function(y,T){return Z.H.useInsertionEffect(y,T)},ye.useLayoutEffect=function(y,T){return Z.H.useLayoutEffect(y,T)},ye.useMemo=function(y,T){return Z.H.useMemo(y,T)},ye.useOptimistic=function(y,T){return Z.H.useOptimistic(y,T)},ye.useReducer=function(y,T,X){return Z.H.useReducer(y,T,X)},ye.useRef=function(y){return Z.H.useRef(y)},ye.useState=function(y){return Z.H.useState(y)},ye.useSyncExternalStore=function(y,T,X){return Z.H.useSyncExternalStore(y,T,X)},ye.useTransition=function(){return Z.H.useTransition()},ye.version="19.0.0",ye}var Wh;function lr(){return Wh||(Wh=1,Vu.exports=Zp()),Vu.exports}var v=lr();const Pp=gm(v);var Xu={exports:{}},ml={},Ku={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Fp(){return Vh||(Vh=1,function(s){function h(H,ie){var ee=H.length;H.push(ie);e:for(;0<ee;){var qe=ee-1>>>1,y=H[qe];if(0<m(y,ie))H[qe]=ie,H[ee]=y,ee=qe;else break e}}function d(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],ee=H.pop();if(ee!==ie){H[0]=ee;e:for(var qe=0,y=H.length,T=y>>>1;qe<T;){var X=2*(qe+1)-1,E=H[X],N=X+1,$=H[N];if(0>m(E,ee))N<y&&0>m($,E)?(H[qe]=$,H[N]=ee,qe=N):(H[qe]=E,H[X]=ee,qe=X);else if(N<y&&0>m($,ee))H[qe]=$,H[N]=ee,qe=N;else break e}}return ie}function m(H,ie){var ee=H.sortIndex-ie.sortIndex;return ee!==0?ee:H.id-ie.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;s.unstable_now=function(){return g.now()}}else{var I=Date,S=I.now();s.unstable_now=function(){return I.now()-S}}var b=[],p=[],A=1,U=null,z=3,Y=!1,O=!1,K=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function W(H){for(var ie=d(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=H)r(p),ie.sortIndex=ie.expirationTime,h(b,ie);else break;ie=d(p)}}function ae(H){if(K=!1,W(H),!O)if(d(b)!==null)O=!0,ln();else{var ie=d(p);ie!==null&&Ge(ae,ie.startTime-H)}}var Z=!1,ce=-1,re=5,he=-1;function Q(){return!(s.unstable_now()-he<re)}function L(){if(Z){var H=s.unstable_now();he=H;var ie=!0;try{e:{O=!1,K&&(K=!1,D(ce),ce=-1),Y=!0;var ee=z;try{n:{for(W(H),U=d(b);U!==null&&!(U.expirationTime>H&&Q());){var qe=U.callback;if(typeof qe=="function"){U.callback=null,z=U.priorityLevel;var y=qe(U.expirationTime<=H);if(H=s.unstable_now(),typeof y=="function"){U.callback=y,W(H),ie=!0;break n}U===d(b)&&r(b),W(H)}else r(b);U=d(b)}if(U!==null)ie=!0;else{var T=d(p);T!==null&&Ge(ae,T.startTime-H),ie=!1}}break e}finally{U=null,z=ee,Y=!1}ie=void 0}}finally{ie?oe():Z=!1}}}var oe;if(typeof V=="function")oe=function(){V(L)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Ye=be.port2;be.port1.onmessage=L,oe=function(){Ye.postMessage(null)}}else oe=function(){_(L,0)};function ln(){Z||(Z=!0,oe())}function Ge(H,ie){ce=_(function(){H(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){O||Y||(O=!0,ln())},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return z},s.unstable_getFirstCallbackNode=function(){return d(b)},s.unstable_next=function(H){switch(z){case 1:case 2:case 3:var ie=3;break;default:ie=z}var ee=z;z=ie;try{return H()}finally{z=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ee=z;z=H;try{return ie()}finally{z=ee}},s.unstable_scheduleCallback=function(H,ie,ee){var qe=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?qe+ee:qe):ee=qe,H){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=ee+y,H={id:A++,callback:ie,priorityLevel:H,startTime:ee,expirationTime:y,sortIndex:-1},ee>qe?(H.sortIndex=ee,h(p,H),d(b)===null&&H===d(p)&&(K?(D(ce),ce=-1):K=!0,Ge(ae,ee-qe))):(H.sortIndex=y,h(b,H),O||Y||(O=!0,ln())),H},s.unstable_shouldYield=Q,s.unstable_wrapCallback=function(H){var ie=z;return function(){var ee=z;z=ie;try{return H.apply(this,arguments)}finally{z=ee}}}}(Zu)),Zu}var Xh;function $p(){return Xh||(Xh=1,Ku.exports=Fp()),Ku.exports}var Pu={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function ey(){if(Kh)return bn;Kh=1;var s=lr();function h(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)p+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(h(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function g(b,p,A){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:b,containerInfo:p,implementation:A}}var I=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(b,p){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(h(299));return g(b,p,null,A)},bn.flushSync=function(b){var p=I.T,A=r.p;try{if(I.T=null,r.p=2,b)return b()}finally{I.T=p,r.p=A,r.d.f()}},bn.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(b,p))},bn.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},bn.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var A=p.as,U=S(A,p.crossOrigin),z=typeof p.integrity=="string"?p.integrity:void 0,Y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;A==="style"?r.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:z,fetchPriority:Y}):A==="script"&&r.d.X(b,{crossOrigin:U,integrity:z,fetchPriority:Y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var A=S(p.as,p.crossOrigin);r.d.M(b,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(b)},bn.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var A=p.as,U=S(A,p.crossOrigin);r.d.L(b,A,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(b,p){if(typeof b=="string")if(p){var A=S(p.as,p.crossOrigin);r.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(b)},bn.requestFormReset=function(b){r.d.r(b)},bn.unstable_batchedUpdates=function(b,p){return b(p)},bn.useFormState=function(b,p,A){return I.H.useFormState(b,p,A)},bn.useFormStatus=function(){return I.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var Zh;function ny(){if(Zh)return Pu.exports;Zh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Pu.exports=ey(),Pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function ty(){if(Ph)return ml;Ph=1;var s=$p(),h=lr(),d=ny();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var g=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ae=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Portal";case A:return"Profiler";case p:return"StrictMode";case K:return"Suspense";case _:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Y:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var Q=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=Object.assign,oe,be;function Ye(e){if(oe===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);oe=n&&n[1]||"",be=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+e+be}var ln=!1;function Ge(e,n){if(!e||ln)return"";ln=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(C){var x=C}Reflect.construct(e,[],B)}else{try{B.call()}catch(C){x=C}e.call(B.prototype)}}else{try{throw Error()}catch(C){x=C}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(C){if(C&&x&&typeof C.stack=="string")return[C.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),u=l[0],c=l[1];if(u&&c){var f=u.split(`
`),j=c.split(`
`);for(o=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;if(a===f.length||o===j.length)for(a=f.length-1,o=j.length-1;1<=a&&0<=o&&f[a]!==j[o];)o--;for(;1<=a&&0<=o;a--,o--)if(f[a]!==j[o]){if(a!==1||o!==1)do if(a--,o--,0>o||f[a]!==j[o]){var M=`
`+f[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=o);break}}}finally{ln=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Ye(t):""}function H(e){switch(e.tag){case 26:case 27:case 5:return Ye(e.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return e=Ge(e.type,!1),e;case 11:return e=Ge(e.type.render,!1),e;case 1:return e=Ge(e.type,!0),e;default:return""}}function ie(e){try{var n="";do n+=H(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ee(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qe(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(ee(e)!==e)throw Error(r(188))}function T(e){var n=e.alternate;if(!n){if(n=ee(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return y(o),e;if(l===a)return y(o),n;l=l.sibling}throw Error(r(188))}if(t.return!==a.return)t=o,a=l;else{for(var u=!1,c=o.child;c;){if(c===t){u=!0,t=o,a=l;break}if(c===a){u=!0,a=o,t=l;break}c=c.sibling}if(!u){for(c=l.child;c;){if(c===t){u=!0,t=l,a=o;break}if(c===a){u=!0,a=l,t=o;break}c=c.sibling}if(!u)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=X(e),n!==null)return n;e=e.sibling}return null}var E=Array.isArray,N=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ne=[],Oe=-1;function se(e){return{current:e}}function ge(e){0>Oe||(e.current=ne[Oe],ne[Oe]=null,Oe--)}function Me(e,n){Oe++,ne[Oe]=e.current,e.current=n}var $e=se(null),Sn=se(null),Ke=se(null),Fn=se(null);function gt(e,n){switch(Me(Ke,n),Me(Sn,e),Me($e,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?vh(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=vh(e),n=bh(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ge($e),Me($e,n)}function en(){ge($e),ge(Sn),ge(Ke)}function Ln(e){e.memoizedState!==null&&Me(Fn,e);var n=$e.current,t=bh(n,e.type);n!==t&&(Me(Sn,e),Me($e,t))}function Bt(e){Sn.current===e&&(ge($e),ge(Sn)),Fn.current===e&&(ge(Fn),sl._currentValue=$)}var sn=Object.prototype.hasOwnProperty,Rn=s.unstable_scheduleCallback,ut=s.unstable_cancelCallback,$n=s.unstable_shouldYield,Na=s.unstable_requestPaint,wn=s.unstable_now,G=s.unstable_getCurrentPriorityLevel,je=s.unstable_ImmediatePriority,de=s.unstable_UserBlockingPriority,Ce=s.unstable_NormalPriority,De=s.unstable_LowPriority,nn=s.unstable_IdlePriority,rt=s.log,Yi=s.unstable_setDisableYieldValue,sa=null,jn=null;function _i(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}function ct(e){if(typeof rt=="function"&&Yi(e),jn&&typeof jn.setStrictMode=="function")try{jn.setStrictMode(sa,e)}catch{}}var kn=Math.clz32?Math.clz32:me,J=Math.log,P=Math.LN2;function me(e){return e>>>=0,e===0?32:31-(J(e)/P|0)|0}var ke=128,Ae=4194304;function Ue(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var c=t&134217727;return c!==0?(t=c&~o,t!==0?a=Ue(t):(l&=c,l!==0?a=Ue(l):e||(u=c&~u,u!==0&&(a=Ue(u))))):(c=t&~o,c!==0?a=Ue(c):l!==0?a=Ue(l):e||(u=t&~u,u!==0&&(a=Ue(u)))),a===0?0:n!==0&&n!==a&&(n&o)===0&&(o=a&-a,u=n&-n,o>=u||o===32&&(u&4194176)!==0)?n:a}function Bn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function et(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=ke;return ke<<=1,(ke&4194176)===0&&(ke=128),e}function Cn(){var e=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),e}function tt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,n,t,a,o,l){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,j=e.hiddenUpdates;for(t=u&~t;0<t;){var M=31-kn(t),B=1<<M;c[M]=0,f[M]=-1;var x=j[M];if(x!==null)for(j[M]=null,M=0;M<x.length;M++){var C=x[M];C!==null&&(C.lane&=-536870913)}t&=~B}a!==0&&Qe(e,a,0),l!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=l&~(u&~n))}function Qe(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-kn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function Un(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-kn(t),o=1<<a;o&n|e[a]&n&&(e[a]|=n),t&=~o}}function ua(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vo(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Rh(e.type))}function Rm(e,n){var t=N.p;try{return N.p=e,n()}finally{N.p=t}}var Ut=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ut,An="__reactProps$"+Ut,za="__reactContainer$"+Ut,Ji="__reactEvents$"+Ut,Bm="__reactListeners$"+Ut,Um="__reactHandles$"+Ut,yr="__reactResources$"+Ut,bo="__reactMarker$"+Ut;function Hi(e){delete e[gn],delete e[An],delete e[Ji],delete e[Bm],delete e[Um]}function ra(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[za]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=kh(e);e!==null;){if(t=e[gn])return t;e=kh(e)}return n}e=t,t=e.parentNode}return null}function Da(e){if(e=e[gn]||e[za]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function wo(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function La(e){var n=e[yr];return n||(n=e[yr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[bo]=!0}var gr=new Set,vr={};function ca(e,n){Ra(e,n),Ra(e+"Capture",n)}function Ra(e,n){for(vr[e]=n,e=0;e<n.length;e++)gr.add(n[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),br={},wr={};function _m(e){return sn.call(wr,e)?!0:sn.call(br,e)?!1:Ym.test(e)?wr[e]=!0:(br[e]=!0,!1)}function ql(e,n,t){if(_m(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function xl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function bt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jm(e){var n=jr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(u){a=""+u,l.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sl(e){e._valueTracker||(e._valueTracker=Jm(e))}function kr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=jr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hm=/[\n"\\]/g;function _n(e){return e.replace(Hm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(e,n,t,a,o,l,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yn(n)):e.value!==""+Yn(n)&&(e.value=""+Yn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?Qi(e,u,Yn(n)):t!=null?Qi(e,u,Yn(t)):a!=null&&e.removeAttribute("value"),o==null&&l!=null&&(e.defaultChecked=!!l),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Yn(c):e.removeAttribute("name")}function Ir(e,n,t,a,o,l,u,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null))return;t=t!=null?""+Yn(t):"",n=n!=null?""+Yn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function Qi(e,n,t){n==="number"&&Al(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ba(e,n,t,a){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Yn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function qr(e,n,t){if(n!=null&&(n=""+Yn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Yn(t):""}function xr(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(E(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Yn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ua(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Gm.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Ar(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in n)a=n[o],n.hasOwnProperty(o)&&t[o]!==a&&Sr(e,o,a)}else for(var l in n)n.hasOwnProperty(l)&&Sr(e,l,n[l])}function Wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return Wm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vi=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,_a=null;function Tr(e){var n=Da(e);if(n&&(e=n.stateNode)){var t=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(Gi(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var o=a[An]||null;if(!o)throw Error(r(90));Gi(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&kr(a)}break e;case"textarea":qr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ba(e,!!t.multiple,n,!1)}}}var Ki=!1;function Er(e,n,t){if(Ki)return e(n,t);Ki=!0;try{var a=e(n);return a}finally{if(Ki=!1,(Ya!==null||_a!==null)&&(di(),Ya&&(n=Ya,e=_a,_a=Ya=null,Tr(n),e)))for(n=0;n<e.length;n++)Tr(e[n])}}function jo(e,n){var t=e.stateNode;if(t===null)return null;var a=t[An]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Zi=!1;if(vt)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Zi=!1}var Yt=null,Pi=null,El=null;function Cr(){if(El)return El;var e,n=Pi,t=n.length,a,o="value"in Yt?Yt.value:Yt.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var u=t-e;for(a=1;a<=u&&n[t-a]===o[l-a];a++);return El=o.slice(e,1<a?1-a:void 0)}function Cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Mr(){return!1}function Tn(e){function n(t,a,o,l,u){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ml:Mr,this.isPropagationStopped=Mr,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Tn(da),Io=L({},da,{view:0,detail:0}),Vm=Tn(Io),Fi,$i,qo,Nl=L({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qo&&(qo&&e.type==="mousemove"?(Fi=e.screenX-qo.screenX,$i=e.screenY-qo.screenY):$i=Fi=0,qo=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Or=Tn(Nl),Xm=L({},Nl,{dataTransfer:0}),Km=Tn(Xm),Zm=L({},Io,{relatedTarget:0}),es=Tn(Zm),Pm=L({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Tn(Pm),$m=L({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ef=Tn($m),nf=L({},da,{data:0}),Nr=Tn(nf),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=of[e])?!!n[e]:!1}function ns(){return lf}var sf=L({},Io,{key:function(e){if(e.key){var n=tf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?Cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Tn(sf),rf=L({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zr=Tn(rf),cf=L({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),df=Tn(cf),hf=L({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=Tn(hf),ff=L({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Tn(ff),yf=L({},da,{newState:0,oldState:0}),gf=Tn(yf),vf=[9,13,27,32],ts=vt&&"CompositionEvent"in window,xo=null;vt&&"documentMode"in document&&(xo=document.documentMode);var bf=vt&&"TextEvent"in window&&!xo,Dr=vt&&(!ts||xo&&8<xo&&11>=xo),Lr=" ",Rr=!1;function Br(e,n){switch(e){case"keyup":return vf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function wf(e,n){switch(e){case"compositionend":return Ur(n);case"keypress":return n.which!==32?null:(Rr=!0,Lr);case"textInput":return e=n.data,e===Lr&&Rr?null:e;default:return null}}function jf(e,n){if(Ja)return e==="compositionend"||!ts&&Br(e,n)?(e=Cr(),El=Pi=Yt=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dr&&n.locale!=="ko"?null:n.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kf[e.type]:n==="textarea"}function _r(e,n,t,a){Ya?_a?_a.push(a):_a=[a]:Ya=a,n=yi(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var So=null,Ao=null;function If(e){mh(e,0)}function zl(e){var n=wo(e);if(kr(n))return e}function Jr(e,n){if(e==="change")return n}var Hr=!1;if(vt){var as;if(vt){var os="oninput"in document;if(!os){var Gr=document.createElement("div");Gr.setAttribute("oninput","return;"),os=typeof Gr.oninput=="function"}as=os}else as=!1;Hr=as&&(!document.documentMode||9<document.documentMode)}function Qr(){So&&(So.detachEvent("onpropertychange",Wr),Ao=So=null)}function Wr(e){if(e.propertyName==="value"&&zl(Ao)){var n=[];_r(n,Ao,e,Xi(e)),Er(If,n)}}function qf(e,n,t){e==="focusin"?(Qr(),So=n,Ao=t,So.attachEvent("onpropertychange",Wr)):e==="focusout"&&Qr()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(Ao)}function Sf(e,n){if(e==="click")return zl(n)}function Af(e,n){if(e==="input"||e==="change")return zl(n)}function Tf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:Tf;function To(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!sn.call(n,o)||!Mn(e[o],n[o]))return!1}return!0}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xr(e,n){var t=Vr(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vr(t)}}function Kr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Al(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Al(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ef(e,n){var t=Zr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kr(n.ownerDocument.documentElement,n)){if(a!==null&&ls(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var o=n.textContent.length,l=Math.min(a.start,o);a=a.end===void 0?l:Math.min(a.end,o),!t.extend&&l>a&&(o=a,a=l,l=o),o=Xr(n,l);var u=Xr(n,a);o&&u&&(t.rangeCount!==1||t.anchorNode!==o.node||t.anchorOffset!==o.offset||t.focusNode!==u.node||t.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),t.removeAllRanges(),l>a?(t.addRange(e),t.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cf=vt&&"documentMode"in document&&11>=document.documentMode,Ha=null,is=null,Eo=null,ss=!1;function Pr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ss||Ha==null||Ha!==Al(a)||(a=Ha,"selectionStart"in a&&ls(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Eo&&To(Eo,a)||(Eo=a,a=yi(is,"onSelect"),0<a.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Ha)))}function ha(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ga={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},us={},Fr={};vt&&(Fr=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ma(e){if(us[e])return us[e];if(!Ga[e])return e;var n=Ga[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fr)return us[e]=n[t];return e}var $r=ma("animationend"),ec=ma("animationiteration"),nc=ma("animationstart"),Mf=ma("transitionrun"),Of=ma("transitionstart"),Nf=ma("transitioncancel"),tc=ma("transitionend"),ac=new Map,oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function at(e,n){ac.set(e,n),ca(n,[e])}var Jn=[],Qa=0,rs=0;function Dl(){for(var e=Qa,n=rs=Qa=0;n<e;){var t=Jn[n];Jn[n++]=null;var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var l=Jn[n];if(Jn[n++]=null,a!==null&&o!==null){var u=a.pending;u===null?o.next=o:(o.next=u.next,u.next=o),a.pending=o}l!==0&&lc(t,o,l)}}function Ll(e,n,t,a){Jn[Qa++]=e,Jn[Qa++]=n,Jn[Qa++]=t,Jn[Qa++]=a,rs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function cs(e,n,t,a){return Ll(e,n,t,a),Rl(e)}function _t(e,n){return Ll(e,null,null,n),Rl(e)}function lc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var o=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(o=!0)),e=l,l=l.return;o&&n!==null&&e.tag===3&&(l=e.stateNode,o=31-kn(t),l=l.hiddenUpdates,e=l[o],e===null?l[o]=[n]:e.push(n),n.lane=t|536870912)}function Rl(e){if(50<el)throw el=0,yu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Wa={},ic=new WeakMap;function Hn(e,n){if(typeof e=="object"&&e!==null){var t=ic.get(e);return t!==void 0?t:(n={value:e,source:n,stack:ie(n)},ic.set(e,n),n)}return{value:e,source:n,stack:ie(n)}}var Va=[],Xa=0,Bl=null,Ul=0,Gn=[],Qn=0,fa=null,wt=1,jt="";function pa(e,n){Va[Xa++]=Ul,Va[Xa++]=Bl,Bl=e,Ul=n}function sc(e,n,t){Gn[Qn++]=wt,Gn[Qn++]=jt,Gn[Qn++]=fa,fa=e;var a=wt;e=jt;var o=32-kn(a)-1;a&=~(1<<o),t+=1;var l=32-kn(n)+o;if(30<l){var u=o-o%5;l=(a&(1<<u)-1).toString(32),a>>=u,o-=u,wt=1<<32-kn(n)+o|t<<o|a,jt=l+e}else wt=1<<l|t<<o|a,jt=e}function ds(e){e.return!==null&&(pa(e,1),sc(e,1,0))}function hs(e){for(;e===Bl;)Bl=Va[--Xa],Va[Xa]=null,Ul=Va[--Xa],Va[Xa]=null;for(;e===fa;)fa=Gn[--Qn],Gn[Qn]=null,jt=Gn[--Qn],Gn[Qn]=null,wt=Gn[--Qn],Gn[Qn]=null}var qn=null,fn=null,Te=!1,ot=null,dt=!1,ms=Error(r(519));function ya(e){var n=Error(r(418,""));throw Oo(Hn(n,e)),ms}function uc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[gn]=e,n[An]=a,t){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(t=0;t<tl.length;t++)xe(tl[t],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ir(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Sl(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),xr(n,a.value,a.defaultValue,a.children),Sl(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||gh(n.textContent,t)?(a.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),a.onScroll!=null&&xe("scroll",n),a.onScrollEnd!=null&&xe("scrollend",n),a.onClick!=null&&(n.onclick=gi),n=!0):n=!1,n||ya(e)}function rc(e){for(qn=e.return;qn;)switch(qn.tag){case 3:case 27:dt=!0;return;case 5:case 13:dt=!1;return;default:qn=qn.return}}function Co(e){if(e!==qn)return!1;if(!Te)return rc(e),Te=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Nu(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&fn&&ya(e),rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){fn=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}fn=null}}else fn=qn?it(e.stateNode.nextSibling):null;return!0}function Mo(){fn=qn=null,Te=!1}function Oo(e){ot===null?ot=[e]:ot.push(e)}var No=Error(r(460)),cc=Error(r(474)),fs={then:function(){}};function dc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yl(){}function hc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Yl,Yl),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===No?Error(r(483)):e;default:if(typeof n.status=="string")n.then(Yl,Yl);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=a}},function(a){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===No?Error(r(483)):e}throw zo=n,No}}var zo=null;function mc(){if(zo===null)throw Error(r(459));var e=zo;return zo=null,e}var Ka=null,Do=0;function _l(e){var n=Do;return Do+=1,Ka===null&&(Ka=[]),hc(Ka,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Jl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fc(e){var n=e._init;return n(e._payload)}function pc(e){function n(k,w){if(e){var q=k.deletions;q===null?(k.deletions=[w],k.flags|=16):q.push(w)}}function t(k,w){if(!e)return null;for(;w!==null;)n(k,w),w=w.sibling;return null}function a(k){for(var w=new Map;k!==null;)k.key!==null?w.set(k.key,k):w.set(k.index,k),k=k.sibling;return w}function o(k,w){return k=$t(k,w),k.index=0,k.sibling=null,k}function l(k,w,q){return k.index=q,e?(q=k.alternate,q!==null?(q=q.index,q<w?(k.flags|=33554434,w):q):(k.flags|=33554434,w)):(k.flags|=1048576,w)}function u(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function c(k,w,q,R){return w===null||w.tag!==6?(w=uu(q,k.mode,R),w.return=k,w):(w=o(w,q),w.return=k,w)}function f(k,w,q,R){var F=q.type;return F===b?M(k,w,q.props.children,R,q.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===V&&fc(F)===w.type)?(w=o(w,q.props),Lo(w,q),w.return=k,w):(w=ii(q.type,q.key,q.props,null,k.mode,R),Lo(w,q),w.return=k,w)}function j(k,w,q,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==q.containerInfo||w.stateNode.implementation!==q.implementation?(w=ru(q,k.mode,R),w.return=k,w):(w=o(w,q.children||[]),w.return=k,w)}function M(k,w,q,R,F){return w===null||w.tag!==7?(w=Sa(q,k.mode,R,F),w.return=k,w):(w=o(w,q),w.return=k,w)}function B(k,w,q){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=uu(""+w,k.mode,q),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case I:return q=ii(w.type,w.key,w.props,null,k.mode,q),Lo(q,w),q.return=k,q;case S:return w=ru(w,k.mode,q),w.return=k,w;case V:var R=w._init;return w=R(w._payload),B(k,w,q)}if(E(w)||ce(w))return w=Sa(w,k.mode,q,null),w.return=k,w;if(typeof w.then=="function")return B(k,_l(w),q);if(w.$$typeof===Y)return B(k,ai(k,w),q);Jl(k,w)}return null}function x(k,w,q,R){var F=w!==null?w.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return F!==null?null:c(k,w,""+q,R);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return q.key===F?f(k,w,q,R):null;case S:return q.key===F?j(k,w,q,R):null;case V:return F=q._init,q=F(q._payload),x(k,w,q,R)}if(E(q)||ce(q))return F!==null?null:M(k,w,q,R,null);if(typeof q.then=="function")return x(k,w,_l(q),R);if(q.$$typeof===Y)return x(k,w,ai(k,q),R);Jl(k,q)}return null}function C(k,w,q,R,F){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return k=k.get(q)||null,c(w,k,""+R,F);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case I:return k=k.get(R.key===null?q:R.key)||null,f(w,k,R,F);case S:return k=k.get(R.key===null?q:R.key)||null,j(w,k,R,F);case V:var we=R._init;return R=we(R._payload),C(k,w,q,R,F)}if(E(R)||ce(R))return k=k.get(q)||null,M(w,k,R,F,null);if(typeof R.then=="function")return C(k,w,q,_l(R),F);if(R.$$typeof===Y)return C(k,w,q,ai(w,R),F);Jl(w,R)}return null}function te(k,w,q,R){for(var F=null,we=null,le=w,ue=w=0,mn=null;le!==null&&ue<q.length;ue++){le.index>ue?(mn=le,le=null):mn=le.sibling;var Ee=x(k,le,q[ue],R);if(Ee===null){le===null&&(le=mn);break}e&&le&&Ee.alternate===null&&n(k,le),w=l(Ee,w,ue),we===null?F=Ee:we.sibling=Ee,we=Ee,le=mn}if(ue===q.length)return t(k,le),Te&&pa(k,ue),F;if(le===null){for(;ue<q.length;ue++)le=B(k,q[ue],R),le!==null&&(w=l(le,w,ue),we===null?F=le:we.sibling=le,we=le);return Te&&pa(k,ue),F}for(le=a(le);ue<q.length;ue++)mn=C(le,k,ue,q[ue],R),mn!==null&&(e&&mn.alternate!==null&&le.delete(mn.key===null?ue:mn.key),w=l(mn,w,ue),we===null?F=mn:we.sibling=mn,we=mn);return e&&le.forEach(function(ia){return n(k,ia)}),Te&&pa(k,ue),F}function fe(k,w,q,R){if(q==null)throw Error(r(151));for(var F=null,we=null,le=w,ue=w=0,mn=null,Ee=q.next();le!==null&&!Ee.done;ue++,Ee=q.next()){le.index>ue?(mn=le,le=null):mn=le.sibling;var ia=x(k,le,Ee.value,R);if(ia===null){le===null&&(le=mn);break}e&&le&&ia.alternate===null&&n(k,le),w=l(ia,w,ue),we===null?F=ia:we.sibling=ia,we=ia,le=mn}if(Ee.done)return t(k,le),Te&&pa(k,ue),F;if(le===null){for(;!Ee.done;ue++,Ee=q.next())Ee=B(k,Ee.value,R),Ee!==null&&(w=l(Ee,w,ue),we===null?F=Ee:we.sibling=Ee,we=Ee);return Te&&pa(k,ue),F}for(le=a(le);!Ee.done;ue++,Ee=q.next())Ee=C(le,k,ue,Ee.value,R),Ee!==null&&(e&&Ee.alternate!==null&&le.delete(Ee.key===null?ue:Ee.key),w=l(Ee,w,ue),we===null?F=Ee:we.sibling=Ee,we=Ee);return e&&le.forEach(function(Vp){return n(k,Vp)}),Te&&pa(k,ue),F}function Xe(k,w,q,R){if(typeof q=="object"&&q!==null&&q.type===b&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case I:e:{for(var F=q.key;w!==null;){if(w.key===F){if(F=q.type,F===b){if(w.tag===7){t(k,w.sibling),R=o(w,q.props.children),R.return=k,k=R;break e}}else if(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===V&&fc(F)===w.type){t(k,w.sibling),R=o(w,q.props),Lo(R,q),R.return=k,k=R;break e}t(k,w);break}else n(k,w);w=w.sibling}q.type===b?(R=Sa(q.props.children,k.mode,R,q.key),R.return=k,k=R):(R=ii(q.type,q.key,q.props,null,k.mode,R),Lo(R,q),R.return=k,k=R)}return u(k);case S:e:{for(F=q.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===q.containerInfo&&w.stateNode.implementation===q.implementation){t(k,w.sibling),R=o(w,q.children||[]),R.return=k,k=R;break e}else{t(k,w);break}else n(k,w);w=w.sibling}R=ru(q,k.mode,R),R.return=k,k=R}return u(k);case V:return F=q._init,q=F(q._payload),Xe(k,w,q,R)}if(E(q))return te(k,w,q,R);if(ce(q)){if(F=ce(q),typeof F!="function")throw Error(r(150));return q=F.call(q),fe(k,w,q,R)}if(typeof q.then=="function")return Xe(k,w,_l(q),R);if(q.$$typeof===Y)return Xe(k,w,ai(k,q),R);Jl(k,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,w!==null&&w.tag===6?(t(k,w.sibling),R=o(w,q),R.return=k,k=R):(t(k,w),R=uu(q,k.mode,R),R.return=k,k=R),u(k)):t(k,w)}return function(k,w,q,R){try{Do=0;var F=Xe(k,w,q,R);return Ka=null,F}catch(le){if(le===No)throw le;var we=Kn(29,le,null,k.mode);return we.lanes=R,we.return=k,we}finally{}}}var ga=pc(!0),yc=pc(!1),Za=se(null),Hl=se(0);function gc(e,n){e=Ot,Me(Hl,e),Me(Za,n),Ot=e|n.baseLanes}function ps(){Me(Hl,Ot),Me(Za,Za.current)}function ys(){Ot=Hl.current,ge(Za),ge(Hl)}var Wn=se(null),ht=null;function Jt(e){var n=e.alternate;Me(un,un.current&1),Me(Wn,e),ht===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(ht=e)}function vc(e){if(e.tag===22){if(Me(un,un.current),Me(Wn,e),ht===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ht=e)}}else Ht()}function Ht(){Me(un,un.current),Me(Wn,Wn.current)}function kt(e){ge(Wn),ht===e&&(ht=null),ge(un)}var un=se(0);function Gl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zf=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Df=s.unstable_scheduleCallback,Lf=s.unstable_NormalPriority,rn={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gs(){return{controller:new zf,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&Df(Lf,function(){e.controller.abort()})}var Bo=null,vs=0,Pa=0,Fa=null;function Rf(e,n){if(Bo===null){var t=Bo=[];vs=0,Pa=qu(),Fa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return vs++,n.then(bc,bc),n}function bc(){if(--vs===0&&Bo!==null){Fa!==null&&(Fa.status="fulfilled");var e=Bo;Bo=null,Pa=0,Fa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bf(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var o=0;o<t.length;o++)(0,t[o])(n)},function(o){for(a.status="rejected",a.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),a}var wc=Q.S;Q.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rf(e,n),wc!==null&&wc(e,n)};var va=se(null);function bs(){var e=va.current;return e!==null?e:Re.pooledCache}function Ql(e,n){n===null?Me(va,va.current):Me(va,n.pool)}function jc(){var e=bs();return e===null?null:{parent:rn._currentValue,pool:e}}var Gt=0,ve=null,Ne=null,tn=null,Wl=!1,$a=!1,ba=!1,Vl=0,Uo=0,eo=null,Uf=0;function Fe(){throw Error(r(321))}function ws(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function js(e,n,t,a,o,l){return Gt=l,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Q.H=e===null||e.memoizedState===null?wa:Qt,ba=!1,l=t(a,o),ba=!1,$a&&(l=Ic(n,t,a,o)),kc(e),l}function kc(e){Q.H=mt;var n=Ne!==null&&Ne.next!==null;if(Gt=0,tn=Ne=ve=null,Wl=!1,Uo=0,eo=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&ti(e)&&(dn=!0))}function Ic(e,n,t,a){ve=e;var o=0;do{if($a&&(eo=null),Uo=0,$a=!1,25<=o)throw Error(r(301));if(o+=1,tn=Ne=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}Q.H=ja,l=n(t,a)}while($a);return l}function Yf(){var e=Q.H,n=e.useState()[0];return n=typeof n.then=="function"?Yo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ve.flags|=1024),n}function ks(){var e=Vl!==0;return Vl=0,e}function Is(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function qs(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}Gt=0,tn=Ne=ve=null,$a=!1,Uo=Vl=0,eo=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ve.memoizedState=tn=e:tn=tn.next=e,tn}function an(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=tn===null?ve.memoizedState:tn.next;if(n!==null)tn=n,Ne=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},tn===null?ve.memoizedState=tn=e:tn=tn.next=e}return tn}var Xl;Xl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Yo(e){var n=Uo;return Uo+=1,eo===null&&(eo=[]),e=hc(eo,e,n),n=ve,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,Q.H=n===null||n.memoizedState===null?wa:Qt),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===Y)return vn(e)}throw Error(r(438,String(e)))}function xs(e){var n=null,t=ve.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=ve.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Xl(),ve.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ae;return n.index++,t}function It(e,n){return typeof n=="function"?n(e):n}function Zl(e){var n=an();return Ss(n,Ne,e)}function Ss(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=e.baseQueue,l=a.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}n.baseQueue=o=l,a.pending=null}if(l=e.baseState,o===null)e.memoizedState=l;else{n=o.next;var c=u=null,f=null,j=n,M=!1;do{var B=j.lane&-536870913;if(B!==j.lane?(Se&B)===B:(Gt&B)===B){var x=j.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),B===Pa&&(M=!0);else if((Gt&x)===x){j=j.next,x===Pa&&(M=!0);continue}else B={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(c=f=B,u=l):f=f.next=B,ve.lanes|=x,ea|=x;B=j.action,ba&&t(l,B),l=j.hasEagerState?j.eagerState:t(l,B)}else x={lane:B,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(c=f=x,u=l):f=f.next=x,ve.lanes|=B,ea|=B;j=j.next}while(j!==null&&j!==n);if(f===null?u=l:f.next=c,!Mn(l,e.memoizedState)&&(dn=!0,M&&(t=Fa,t!==null)))throw t;e.memoizedState=l,e.baseState=u,e.baseQueue=f,a.lastRenderedState=l}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function As(e){var n=an(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);Mn(l,n.memoizedState)||(dn=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function qc(e,n,t){var a=ve,o=an(),l=Te;if(l){if(t===void 0)throw Error(r(407));t=t()}else t=n();var u=!Mn((Ne||o).memoizedState,t);if(u&&(o.memoizedState=t,dn=!0),o=o.queue,Cs(Ac.bind(null,a,o,e),[e]),o.getSnapshot!==n||u||tn!==null&&tn.memoizedState.tag&1){if(a.flags|=2048,no(9,Sc.bind(null,a,o,t,n),{destroy:void 0},null),Re===null)throw Error(r(349));l||(Gt&60)!==0||xc(a,n,t)}return t}function xc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n=Xl(),ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sc(e,n,t,a){n.value=t,n.getSnapshot=a,Tc(n)&&Ec(e)}function Ac(e,n,t){return t(function(){Tc(n)&&Ec(e)})}function Tc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function Ec(e){var n=_t(e,2);n!==null&&xn(n,e,2)}function Ts(e){var n=En();if(typeof e=="function"){var t=e;if(e=t(),ba){ct(!0);try{t()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},n}function Cc(e,n,t,a){return e.baseState=t,Ss(e,Ne,typeof a=="function"?a:It)}function _f(e,n,t,a,o){if($l(e))throw Error(r(485));if(e=n.action,e!==null){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};Q.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,Mc(n,l)):(l.next=t.next,n.pending=t.next=l)}}function Mc(e,n){var t=n.action,a=n.payload,o=e.state;if(n.isTransition){var l=Q.T,u={};Q.T=u;try{var c=t(o,a),f=Q.S;f!==null&&f(u,c),Oc(e,n,c)}catch(j){Es(e,n,j)}finally{Q.T=l}}else try{l=t(o,a),Oc(e,n,l)}catch(j){Es(e,n,j)}}function Oc(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Nc(e,n,a)},function(a){return Es(e,n,a)}):Nc(e,n,t)}function Nc(e,n,t){n.status="fulfilled",n.value=t,zc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Mc(e,t)))}function Es(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,zc(n),n=n.next;while(n!==a)}e.action=null}function zc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dc(e,n){return n}function Lc(e,n){if(Te){var t=Re.formState;if(t!==null){e:{var a=ve;if(Te){if(fn){n:{for(var o=fn,l=dt;o.nodeType!==8;){if(!l){o=null;break n}if(o=it(o.nextSibling),o===null){o=null;break n}}l=o.data,o=l==="F!"||l==="F"?o:null}if(o){fn=it(o.nextSibling),a=o.data==="F!";break e}}ya(a)}a=!1}a&&(n=t[0])}}return t=En(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dc,lastRenderedState:n},t.queue=a,t=ed.bind(null,ve,a),a.dispatch=t,a=Ts(!1),l=Ds.bind(null,ve,!1,a.queue),a=En(),o={state:n,dispatch:null,action:e,pending:null},a.queue=o,t=_f.bind(null,ve,o,l,t),o.dispatch=t,a.memoizedState=e,[n,t,!1]}function Rc(e){var n=an();return Bc(n,Ne,e)}function Bc(e,n,t){n=Ss(e,n,Dc)[0],e=Zl(It)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Yo(n):n;var a=an(),o=a.queue,l=o.dispatch;return t!==a.memoizedState&&(ve.flags|=2048,no(9,Jf.bind(null,o,t),{destroy:void 0},null)),[n,l,e]}function Jf(e,n){e.action=n}function Uc(e){var n=an(),t=Ne;if(t!==null)return Bc(n,t,e);an(),n=n.memoizedState,t=an();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function no(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=ve.updateQueue,n===null&&(n=Xl(),ve.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Yc(){return an().memoizedState}function Pl(e,n,t,a){var o=En();ve.flags|=e,o.memoizedState=no(1|n,t,{destroy:void 0},a===void 0?null:a)}function Fl(e,n,t,a){var o=an();a=a===void 0?null:a;var l=o.memoizedState.inst;Ne!==null&&a!==null&&ws(a,Ne.memoizedState.deps)?o.memoizedState=no(n,t,l,a):(ve.flags|=e,o.memoizedState=no(1|n,t,l,a))}function _c(e,n){Pl(8390656,8,e,n)}function Cs(e,n){Fl(2048,8,e,n)}function Jc(e,n){return Fl(4,2,e,n)}function Hc(e,n){return Fl(4,4,e,n)}function Gc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qc(e,n,t){t=t!=null?t.concat([e]):null,Fl(4,4,Gc.bind(null,n,e),t)}function Ms(){}function Wc(e,n){var t=an();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&ws(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Vc(e,n){var t=an();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&ws(n,a[1]))return a[0];if(a=e(),ba){ct(!0);try{e()}finally{ct(!1)}}return t.memoizedState=[a,n],a}function Os(e,n,t){return t===void 0||(Gt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Kd(),ve.lanes|=e,ea|=e,t)}function Xc(e,n,t,a){return Mn(t,n)?t:Za.current!==null?(e=Os(e,t,a),Mn(e,n)||(dn=!0),e):(Gt&42)===0?(dn=!0,e.memoizedState=t):(e=Kd(),ve.lanes|=e,ea|=e,n)}function Kc(e,n,t,a,o){var l=N.p;N.p=l!==0&&8>l?l:8;var u=Q.T,c={};Q.T=c,Ds(e,!1,n,t);try{var f=o(),j=Q.S;if(j!==null&&j(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var M=Bf(f,a);_o(e,n,M,Dn(e))}else _o(e,n,a,Dn(e))}catch(B){_o(e,n,{then:function(){},status:"rejected",reason:B},Dn())}finally{N.p=l,Q.T=u}}function Hf(){}function Ns(e,n,t,a){if(e.tag!==5)throw Error(r(476));var o=Zc(e).queue;Kc(e,o,n,$,t===null?Hf:function(){return Pc(e),t(a)})}function Zc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:$},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Pc(e){var n=Zc(e).next.queue;_o(e,n,{},Dn())}function zs(){return vn(sl)}function Fc(){return an().memoizedState}function $c(){return an().memoizedState}function Gf(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Dn();e=Xt(t);var a=Kt(n,e,t);a!==null&&(xn(a,n,t),Go(a,n,t)),n={cache:gs()},e.payload=n;return}n=n.return}}function Qf(e,n,t){var a=Dn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},$l(e)?nd(n,t):(t=cs(e,n,t,a),t!==null&&(xn(t,e,a),td(t,n,a)))}function ed(e,n,t){var a=Dn();_o(e,n,t,a)}function _o(e,n,t,a){var o={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if($l(e))nd(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var u=n.lastRenderedState,c=l(u,t);if(o.hasEagerState=!0,o.eagerState=c,Mn(c,u))return Ll(e,n,o,0),Re===null&&Dl(),!1}catch{}finally{}if(t=cs(e,n,o,a),t!==null)return xn(t,e,a),td(t,n,a),!0}return!1}function Ds(e,n,t,a){if(a={lane:2,revertLane:qu(),action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(r(479))}else n=cs(e,t,a,2),n!==null&&xn(n,e,2)}function $l(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function nd(e,n){$a=Wl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function td(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Un(e,t)}}var mt={readContext:vn,use:Kl,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe};mt.useCacheRefresh=Fe,mt.useMemoCache=Fe,mt.useHostTransitionStatus=Fe,mt.useFormState=Fe,mt.useActionState=Fe,mt.useOptimistic=Fe;var wa={readContext:vn,use:Kl,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:_c,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Pl(4194308,4,Gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var t=En();n=n===void 0?null:n;var a=e();if(ba){ct(!0);try{e()}finally{ct(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=En();if(t!==void 0){var o=t(n);if(ba){ct(!0);try{t(n)}finally{ct(!1)}}}else o=n;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Qf.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:function(e){e=Ts(e);var n=e.queue,t=ed.bind(null,ve,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Ms,useDeferredValue:function(e,n){var t=En();return Os(t,e,n)},useTransition:function(){var e=Ts(!1);return e=Kc.bind(null,ve,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=ve,o=En();if(Te){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),Re===null)throw Error(r(349));(Se&60)!==0||xc(a,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,_c(Ac.bind(null,a,l,e),[e]),a.flags|=2048,no(9,Sc.bind(null,a,l,t,n),{destroy:void 0},null),t},useId:function(){var e=En(),n=Re.identifierPrefix;if(Te){var t=jt,a=wt;t=(a&~(1<<32-kn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Vl++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Uf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return En().memoizedState=Gf.bind(null,ve)}};wa.useMemoCache=xs,wa.useHostTransitionStatus=zs,wa.useFormState=Lc,wa.useActionState=Lc,wa.useOptimistic=function(e){var n=En();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Ds.bind(null,ve,!0,t),t.dispatch=n,[e,n]};var Qt={readContext:vn,use:Kl,useCallback:Wc,useContext:vn,useEffect:Cs,useImperativeHandle:Qc,useInsertionEffect:Jc,useLayoutEffect:Hc,useMemo:Vc,useReducer:Zl,useRef:Yc,useState:function(){return Zl(It)},useDebugValue:Ms,useDeferredValue:function(e,n){var t=an();return Xc(t,Ne.memoizedState,e,n)},useTransition:function(){var e=Zl(It)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:qc,useId:Fc};Qt.useCacheRefresh=$c,Qt.useMemoCache=xs,Qt.useHostTransitionStatus=zs,Qt.useFormState=Rc,Qt.useActionState=Rc,Qt.useOptimistic=function(e,n){var t=an();return Cc(t,Ne,e,n)};var ja={readContext:vn,use:Kl,useCallback:Wc,useContext:vn,useEffect:Cs,useImperativeHandle:Qc,useInsertionEffect:Jc,useLayoutEffect:Hc,useMemo:Vc,useReducer:As,useRef:Yc,useState:function(){return As(It)},useDebugValue:Ms,useDeferredValue:function(e,n){var t=an();return Ne===null?Os(t,e,n):Xc(t,Ne.memoizedState,e,n)},useTransition:function(){var e=As(It)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:qc,useId:Fc};ja.useCacheRefresh=$c,ja.useMemoCache=xs,ja.useHostTransitionStatus=zs,ja.useFormState=Uc,ja.useActionState=Uc,ja.useOptimistic=function(e,n){var t=an();return Ne!==null?Cc(t,Ne,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Ls(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rs={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Dn(),o=Xt(a);o.payload=n,t!=null&&(o.callback=t),n=Kt(e,o,a),n!==null&&(xn(n,e,a),Go(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Dn(),o=Xt(a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Kt(e,o,a),n!==null&&(xn(n,e,a),Go(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Dn(),a=Xt(t);a.tag=2,n!=null&&(a.callback=n),n=Kt(e,a,t),n!==null&&(xn(n,e,t),Go(n,e,t))}};function ad(e,n,t,a,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,u):n.prototype&&n.prototype.isPureReactComponent?!To(t,a)||!To(o,l):!0}function od(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Rs.enqueueReplaceState(n,n.state,null)}function ka(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=L({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ld(e){ei(e)}function id(e){console.error(e)}function sd(e){ei(e)}function ni(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function ud(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Bs(e,n,t){return t=Xt(t),t.tag=3,t.payload={element:null},t.callback=function(){ni(e,n)},t}function rd(e){return e=Xt(e),e.tag=3,e}function cd(e,n,t,a){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var l=a.value;e.payload=function(){return o(l)},e.callback=function(){ud(n,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){ud(n,t,a),typeof o!="function"&&(na===null?na=new Set([this]):na.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Wf(e,n,t,a,o){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Ho(n,t,o,!0),t=Wn.current,t!==null){switch(t.tag){case 13:return ht===null?bu():t.alternate===null&&Ve===0&&(Ve=3),t.flags&=-257,t.flags|=65536,t.lanes=o,a===fs?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ju(e,a,o)),!1;case 22:return t.flags|=65536,a===fs?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ju(e,a,o)),!1}throw Error(r(435,t.tag))}return ju(e,a,o),bu(),!1}if(Te)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,a!==ms&&(e=Error(r(422),{cause:a}),Oo(Hn(e,t)))):(a!==ms&&(n=Error(r(423),{cause:a}),Oo(Hn(n,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Hn(a,t),o=Bs(e.stateNode,a,o),$s(e,o),Ve!==4&&(Ve=2)),!1;var l=Error(r(520),{cause:a});if(l=Hn(l,t),Fo===null?Fo=[l]:Fo.push(l),Ve!==4&&(Ve=2),n===null)return!0;a=Hn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=Bs(t.stateNode,a,e),$s(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(na===null||!na.has(l))))return t.flags|=65536,o&=-o,t.lanes|=o,o=rd(o),cd(o,e,t,a),$s(t,o),!1}t=t.return}while(t!==null);return!1}var dd=Error(r(461)),dn=!1;function pn(e,n,t,a){n.child=e===null?yc(n,null,t,a):ga(n,e.child,t,a)}function hd(e,n,t,a,o){t=t.render;var l=n.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return qa(n),a=js(e,n,t,u,l,o),c=ks(),e!==null&&!dn?(Is(e,n,o),qt(e,n,o)):(Te&&c&&ds(n),n.flags|=1,pn(e,n,a,o),n.child)}function md(e,n,t,a,o){if(e===null){var l=t.type;return typeof l=="function"&&!su(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,fd(e,n,l,a,o)):(e=ii(t.type,null,a,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!Vs(e,o)){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:To,t(u,a)&&e.ref===n.ref)return qt(e,n,o)}return n.flags|=1,e=$t(l,a),e.ref=n.ref,e.return=n,n.child=e}function fd(e,n,t,a,o){if(e!==null){var l=e.memoizedProps;if(To(l,a)&&e.ref===n.ref)if(dn=!1,n.pendingProps=a=l,Vs(e,o))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,qt(e,n,o)}return Us(e,n,t,a,o)}function pd(e,n,t){var a=n.pendingProps,o=a.children,l=(n.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Jo(e,n),a.mode==="hidden"||l){if((n.flags&128)!==0){if(a=u!==null?u.baseLanes|t:t,e!==null){for(o=n.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;n.childLanes=l&~a}else n.childLanes=0,n.child=null;return yd(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ql(n,u!==null?u.cachePool:null),u!==null?gc(n,u):ps(),vc(n);else return n.lanes=n.childLanes=536870912,yd(e,n,u!==null?u.baseLanes|t:t,t)}else u!==null?(Ql(n,u.cachePool),gc(n,u),Ht(),n.memoizedState=null):(e!==null&&Ql(n,null),ps(),Ht());return pn(e,n,o,t),n.child}function yd(e,n,t,a){var o=bs();return o=o===null?null:{parent:rn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Ql(n,null),ps(),vc(n),e!==null&&Ho(e,n,a,!0),null}function Jo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function Us(e,n,t,a,o){return qa(n),t=js(e,n,t,a,void 0,o),a=ks(),e!==null&&!dn?(Is(e,n,o),qt(e,n,o)):(Te&&a&&ds(n),n.flags|=1,pn(e,n,t,o),n.child)}function gd(e,n,t,a,o,l){return qa(n),n.updateQueue=null,t=Ic(n,a,t,o),kc(e),a=ks(),e!==null&&!dn?(Is(e,n,l),qt(e,n,l)):(Te&&a&&ds(n),n.flags|=1,pn(e,n,t,l),n.child)}function vd(e,n,t,a,o){if(qa(n),n.stateNode===null){var l=Wa,u=t.contextType;typeof u=="object"&&u!==null&&(l=vn(u)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Rs,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Ps(n),u=t.contextType,l.context=typeof u=="object"&&u!==null?vn(u):Wa,l.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ls(n,t,u,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&Rs.enqueueReplaceState(l,l.state,null),Wo(n,a,l,o),Qo(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var c=n.memoizedProps,f=ka(t,c);l.props=f;var j=l.context,M=t.contextType;u=Wa,typeof M=="object"&&M!==null&&(u=vn(M));var B=t.getDerivedStateFromProps;M=typeof B=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,M||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||j!==u)&&od(n,l,a,u),Vt=!1;var x=n.memoizedState;l.state=x,Wo(n,a,l,o),Qo(),j=n.memoizedState,c||x!==j||Vt?(typeof B=="function"&&(Ls(n,t,B,a),j=n.memoizedState),(f=Vt||ad(n,t,f,a,x,j,u))?(M||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=j),l.props=a,l.state=j,l.context=u,a=f):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Fs(e,n),u=n.memoizedProps,M=ka(t,u),l.props=M,B=n.pendingProps,x=l.context,j=t.contextType,f=Wa,typeof j=="object"&&j!==null&&(f=vn(j)),c=t.getDerivedStateFromProps,(j=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==B||x!==f)&&od(n,l,a,f),Vt=!1,x=n.memoizedState,l.state=x,Wo(n,a,l,o),Qo();var C=n.memoizedState;u!==B||x!==C||Vt||e!==null&&e.dependencies!==null&&ti(e.dependencies)?(typeof c=="function"&&(Ls(n,t,c,a),C=n.memoizedState),(M=Vt||ad(n,t,M,a,x,C,f)||e!==null&&e.dependencies!==null&&ti(e.dependencies))?(j||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,C,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,C,f)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=C),l.props=a,l.state=C,l.context=f,a=M):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,Jo(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=ga(n,e.child,null,o),n.child=ga(n,null,t,o)):pn(e,n,t,o),n.memoizedState=l.state,e=n.child):e=qt(e,n,o),e}function bd(e,n,t,a){return Mo(),n.flags|=256,pn(e,n,t,a),n.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:jc()}}function Js(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Zn),e}function wd(e,n,t){var a=n.pendingProps,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),u&&(o=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(o?Jt(n):Ht(),Te){var c=fn,f;if(f=c){e:{for(f=c,c=dt;f.nodeType!==8;){if(!c){c=null;break e}if(f=it(f.nextSibling),f===null){c=null;break e}}c=f}c!==null?(n.memoizedState={dehydrated:c,treeContext:fa!==null?{id:wt,overflow:jt}:null,retryLane:536870912},f=Kn(18,null,null,0),f.stateNode=c,f.return=n,n.child=f,qn=n,fn=null,f=!0):f=!1}f||ya(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?n.lanes=16:n.lanes=536870912,null;kt(n)}return c=a.children,a=a.fallback,o?(Ht(),o=n.mode,c=Gs({mode:"hidden",children:c},o),a=Sa(a,o,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,o=n.child,o.memoizedState=_s(t),o.childLanes=Js(e,u,t),n.memoizedState=Ys,a):(Jt(n),Hs(n,c))}if(f=e.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(l)n.flags&256?(Jt(n),n.flags&=-257,n=Qs(e,n,t)):n.memoizedState!==null?(Ht(),n.child=e.child,n.flags|=128,n=null):(Ht(),o=a.fallback,c=n.mode,a=Gs({mode:"visible",children:a.children},c),o=Sa(o,c,t,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,ga(n,e.child,null,t),a=n.child,a.memoizedState=_s(t),a.childLanes=Js(e,u,t),n.memoizedState=Ys,n=o);else if(Jt(n),c.data==="$!"){if(u=c.nextSibling&&c.nextSibling.dataset,u)var j=u.dgst;u=j,a=Error(r(419)),a.stack="",a.digest=u,Oo({value:a,source:null,stack:null}),n=Qs(e,n,t)}else if(dn||Ho(e,n,t,!1),u=(t&e.childLanes)!==0,dn||u){if(u=Re,u!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|t))!==0?0:a,a!==0&&a!==f.retryLane)throw f.retryLane=a,_t(e,a),xn(u,e,a),dd}c.data==="$?"||bu(),n=Qs(e,n,t)}else c.data==="$?"?(n.flags|=128,n.child=e.child,n=sp.bind(null,e),c._reactRetry=n,n=null):(e=f.treeContext,fn=it(c.nextSibling),qn=n,Te=!0,ot=null,dt=!1,e!==null&&(Gn[Qn++]=wt,Gn[Qn++]=jt,Gn[Qn++]=fa,wt=e.id,jt=e.overflow,fa=n),n=Hs(n,a.children),n.flags|=4096);return n}return o?(Ht(),o=a.fallback,c=n.mode,f=e.child,j=f.sibling,a=$t(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&31457280,j!==null?o=$t(j,o):(o=Sa(o,c,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,c=e.child.memoizedState,c===null?c=_s(t):(f=c.cachePool,f!==null?(j=rn._currentValue,f=f.parent!==j?{parent:j,pool:j}:f):f=jc(),c={baseLanes:c.baseLanes|t,cachePool:f}),o.memoizedState=c,o.childLanes=Js(e,u,t),n.memoizedState=Ys,a):(Jt(n),t=e.child,e=t.sibling,t=$t(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function Hs(e,n){return n=Gs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gs(e,n){return Wd(e,n,0,null)}function Qs(e,n,t){return ga(n,e.child,null,t),e=Hs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Ks(e.return,n,t)}function Ws(e,n,t,a,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=o)}function kd(e,n,t){var a=n.pendingProps,o=a.revealOrder,l=a.tail;if(pn(e,n,a.children,t),a=un.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,t,n);else if(e.tag===19)jd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Me(un,a),o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Gl(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ws(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Gl(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ws(n,!0,t,null,l);break;case"together":Ws(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ea|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ho(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=$t(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$t(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Vs(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ti(e)))}function Vf(e,n,t){switch(n.tag){case 3:gt(n,n.stateNode.containerInfo),Wt(n,rn,e.memoizedState.cache),Mo();break;case 27:case 5:Ln(n);break;case 4:gt(n,n.stateNode.containerInfo);break;case 10:Wt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Jt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?wd(e,n,t):(Jt(n),e=qt(e,n,t),e!==null?e.sibling:null);Jt(n);break;case 19:var o=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Ho(e,n,t,!1),a=(t&n.childLanes)!==0),o){if(a)return kd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(un,un.current),a)break;return null;case 22:case 23:return n.lanes=0,pd(e,n,t);case 24:Wt(n,rn,e.memoizedState.cache)}return qt(e,n,t)}function Id(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Vs(e,t)&&(n.flags&128)===0)return dn=!1,Vf(e,n,t);dn=(e.flags&131072)!==0}else dn=!1,Te&&(n.flags&1048576)!==0&&sc(n,Ul,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,o=a._init;if(a=o(a._payload),n.type=a,typeof a=="function")su(a)?(e=ka(a,e),n.tag=1,n=vd(null,n,a,e,t)):(n.tag=0,n=Us(null,n,a,e,t));else{if(a!=null){if(o=a.$$typeof,o===O){n.tag=11,n=hd(null,n,a,e,t);break e}else if(o===D){n.tag=14,n=md(null,n,a,e,t);break e}}throw n=he(a)||a,Error(r(306,n,""))}}return n;case 0:return Us(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,o=ka(a,n.pendingProps),vd(e,n,a,o,t);case 3:e:{if(gt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var l=n.pendingProps;o=n.memoizedState,a=o.element,Fs(e,n),Wo(n,l,null,t);var u=n.memoizedState;if(l=u.cache,Wt(n,rn,l),l!==o.cache&&Zs(n,[rn],t,!0),Qo(),l=u.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=bd(e,n,l,t);break e}else if(l!==a){a=Hn(Error(r(424)),n),Oo(a),n=bd(e,n,l,t);break e}else for(fn=it(n.stateNode.containerInfo.firstChild),qn=n,Te=!0,ot=null,dt=!0,t=yc(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mo(),l===a){n=qt(e,n,t);break e}pn(e,n,l,t)}n=n.child}return n;case 26:return Jo(e,n),e===null?(t=Sh(n.type,null,n.pendingProps,null))?n.memoizedState=t:Te||(t=n.type,e=n.pendingProps,a=vi(Ke.current).createElement(t),a[gn]=n,a[An]=e,yn(a,t,e),cn(a),n.stateNode=a):n.memoizedState=Sh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ln(n),e===null&&Te&&(a=n.stateNode=Ih(n.type,n.pendingProps,Ke.current),qn=n,dt=!0,fn=it(a.firstChild)),a=n.pendingProps.children,e!==null||Te?pn(e,n,a,t):n.child=ga(n,null,a,t),Jo(e,n),n.child;case 5:return e===null&&Te&&((o=a=fn)&&(a=Ip(a,n.type,n.pendingProps,dt),a!==null?(n.stateNode=a,qn=n,fn=it(a.firstChild),dt=!1,o=!0):o=!1),o||ya(n)),Ln(n),o=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,a=l.children,Nu(o,l)?a=null:u!==null&&Nu(o,u)&&(n.flags|=32),n.memoizedState!==null&&(o=js(e,n,Yf,null,null,t),sl._currentValue=o),Jo(e,n),pn(e,n,a,t),n.child;case 6:return e===null&&Te&&((e=t=fn)&&(t=qp(t,n.pendingProps,dt),t!==null?(n.stateNode=t,qn=n,fn=null,e=!0):e=!1),e||ya(n)),null;case 13:return wd(e,n,t);case 4:return gt(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ga(n,null,a,t):pn(e,n,a,t),n.child;case 11:return hd(e,n,n.type,n.pendingProps,t);case 7:return pn(e,n,n.pendingProps,t),n.child;case 8:return pn(e,n,n.pendingProps.children,t),n.child;case 12:return pn(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Wt(n,n.type,a.value),pn(e,n,a.children,t),n.child;case 9:return o=n.type._context,a=n.pendingProps.children,qa(n),o=vn(o),a=a(o),n.flags|=1,pn(e,n,a,t),n.child;case 14:return md(e,n,n.type,n.pendingProps,t);case 15:return fd(e,n,n.type,n.pendingProps,t);case 19:return kd(e,n,t);case 22:return pd(e,n,t);case 24:return qa(n),a=vn(rn),e===null?(o=bs(),o===null&&(o=Re,l=gs(),o.pooledCache=l,l.refCount++,l!==null&&(o.pooledCacheLanes|=t),o=l),n.memoizedState={parent:a,cache:o},Ps(n),Wt(n,rn,o)):((e.lanes&t)!==0&&(Fs(e,n),Wo(n,null,null,t),Qo()),o=e.memoizedState,l=n.memoizedState,o.parent!==a?(o={parent:a,cache:a},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Wt(n,rn,a)):(a=l.cache,Wt(n,rn,a),a!==o.cache&&Zs(n,[rn],t,!0))),pn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Xs=se(null),Ia=null,xt=null;function Wt(e,n,t){Me(Xs,n._currentValue),n._currentValue=t}function St(e){e._currentValue=Xs.current,ge(Xs)}function Ks(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Zs(e,n,t,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){var u=o.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=o;for(var f=0;f<n.length;f++)if(c.context===n[f]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Ks(l.return,t,e),a||(u=null);break e}l=c.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(r(341));u.lanes|=t,l=u.alternate,l!==null&&(l.lanes|=t),Ks(u,t,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function Ho(e,n,t,a){e=null;for(var o=n,l=!1;o!==null;){if(!l){if((o.flags&524288)!==0)l=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var c=o.type;Mn(o.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(o===Fn.current){if(u=o.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}o=o.return}e!==null&&Zs(n,e,t,a),n.flags|=262144}function ti(e){for(e=e.firstContext;e!==null;){if(!Mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ia=e,xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return qd(Ia,e)}function ai(e,n){return Ia===null&&qa(e),qd(e,n)}function qd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},xt===null){if(e===null)throw Error(r(308));xt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xt=xt.next=n;return t}var Vt=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Je&2)!==0){var o=a.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n,n=Rl(e),lc(e,null,t),n}return Ll(e,a,n,t),Rl(e)}function Go(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Un(e,t)}}function $s(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?o=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var eu=!1;function Qo(){if(eu){var e=Fa;if(e!==null)throw e}}function Wo(e,n,t,a){eu=!1;var o=e.updateQueue;Vt=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,j=f.next;f.next=null,u===null?l=j:u.next=j,u=f;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==u&&(c===null?M.firstBaseUpdate=j:c.next=j,M.lastBaseUpdate=f))}if(l!==null){var B=o.baseState;u=0,M=j=f=null,c=l;do{var x=c.lane&-536870913,C=x!==c.lane;if(C?(Se&x)===x:(a&x)===x){x!==0&&x===Pa&&(eu=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var te=e,fe=c;x=n;var Xe=t;switch(fe.tag){case 1:if(te=fe.payload,typeof te=="function"){B=te.call(Xe,B,x);break e}B=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=fe.payload,x=typeof te=="function"?te.call(Xe,B,x):te,x==null)break e;B=L({},B,x);break e;case 2:Vt=!0}}x=c.callback,x!==null&&(e.flags|=64,C&&(e.flags|=8192),C=o.callbacks,C===null?o.callbacks=[x]:C.push(x))}else C={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(j=M=C,f=B):M=M.next=C,u|=x;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;C=c,c=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(!0);M===null&&(f=B),o.baseState=f,o.firstBaseUpdate=j,o.lastBaseUpdate=M,l===null&&(o.shared.lanes=0),ea|=u,e.lanes=u,e.memoizedState=B}}function xd(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Sd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)xd(t[e],n)}function Vo(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var o=a.next;t=o;do{if((t.tag&e)===e){a=void 0;var l=t.create,u=t.inst;a=l(),u.destroy=a}t=t.next}while(t!==o)}}catch(c){Le(n,n.return,c)}}function Zt(e,n,t){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,o=n;var f=t;try{c()}catch(j){Le(o,f,j)}}}a=a.next}while(a!==l)}}catch(j){Le(n,n.return,j)}}function Ad(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Sd(n,t)}catch(a){Le(e,e.return,a)}}}function Td(e,n,t){t.props=ka(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Le(e,n,a)}}function xa(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=a;break;default:o=a}typeof t=="function"?e.refCleanup=t(o):t.current=o}}catch(l){Le(e,n,l)}}function On(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(o){Le(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Le(e,n,o)}else t.current=null}function Ed(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(o){Le(e,e.return,o)}}function Cd(e,n,t){try{var a=e.stateNode;vp(a,e.type,t,n),a[An]=n}catch(o){Le(e,e.return,o)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gi));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(tu(e,n,t),e=e.sibling;e!==null;)tu(e,n,t),e=e.sibling}function oi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(oi(e,n,t),e=e.sibling;e!==null;)oi(e,n,t),e=e.sibling}var At=!1,We=!1,au=!1,Od=typeof WeakSet=="function"?WeakSet:Set,hn=null,Nd=!1;function Xf(e,n){if(e=e.containerInfo,Mu=qi,e=Zr(e),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var u=0,c=-1,f=-1,j=0,M=0,B=e,x=null;n:for(;;){for(var C;B!==t||o!==0&&B.nodeType!==3||(c=u+o),B!==l||a!==0&&B.nodeType!==3||(f=u+a),B.nodeType===3&&(u+=B.nodeValue.length),(C=B.firstChild)!==null;)x=B,B=C;for(;;){if(B===e)break n;if(x===t&&++j===o&&(c=u),x===l&&++M===a&&(f=u),(C=B.nextSibling)!==null)break;B=x,x=B.parentNode}B=C}t=c===-1||f===-1?null:{start:c,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ou={focusedElem:e,selectionRange:t},qi=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,l=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,o=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var te=ka(t.type,o,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(te,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Le(t,t.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Lu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}return te=Nd,Nd=!1,te}function zd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t),a&4&&Vo(5,t);break;case 1:if(Et(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){Le(t,t.return,c)}else{var o=ka(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Le(t,t.return,c)}}a&64&&Ad(t),a&512&&xa(t,t.return);break;case 3:if(Et(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Sd(a,e)}catch(c){Le(t,t.return,c)}}break;case 26:Et(e,t),a&512&&xa(t,t.return);break;case 27:case 5:Et(e,t),n===null&&a&4&&Ed(t),a&512&&xa(t,t.return);break;case 12:Et(e,t);break;case 13:Et(e,t),a&4&&Rd(e,t);break;case 22:if(o=t.memoizedState!==null||At,!o){n=n!==null&&n.memoizedState!==null||We;var l=At,u=We;At=o,(We=n)&&!u?Pt(e,t,(t.subtreeFlags&8772)!==0):Et(e,t),At=l,We=u}a&512&&(t.memoizedProps.mode==="manual"?xa(t,t.return):On(t,t.return));break;default:Et(e,t)}}function Dd(e){var n=e.alternate;n!==null&&(e.alternate=null,Dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,Nn=!1;function Tt(e,n,t){for(t=t.child;t!==null;)Ld(e,n,t),t=t.sibling}function Ld(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(sa,t)}catch{}switch(t.tag){case 26:We||On(t,n),Tt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:We||On(t,n);var a=on,o=Nn;for(on=t.stateNode,Tt(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hi(t),on=a,Nn=o;break;case 5:We||On(t,n);case 6:o=on;var l=Nn;if(on=null,Tt(e,n,t),on=o,Nn=l,on!==null)if(Nn)try{e=on,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(u){Le(t,n,u)}else try{on.removeChild(t.stateNode)}catch(u){Le(t,n,u)}break;case 18:on!==null&&(Nn?(n=on,t=t.stateNode,n.nodeType===8?Du(n.parentNode,t):n.nodeType===1&&Du(n,t),dl(n)):Du(on,t.stateNode));break;case 4:a=on,o=Nn,on=t.stateNode.containerInfo,Nn=!0,Tt(e,n,t),on=a,Nn=o;break;case 0:case 11:case 14:case 15:We||Zt(2,t,n),We||Zt(4,t,n),Tt(e,n,t);break;case 1:We||(On(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Td(t,n,a)),Tt(e,n,t);break;case 21:Tt(e,n,t);break;case 22:We||On(t,n),We=(a=We)||t.memoizedState!==null,Tt(e,n,t),We=a;break;default:Tt(e,n,t)}}function Rd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dl(e)}catch(t){Le(n,n.return,t)}}function Kf(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Od),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Od),n;default:throw Error(r(435,e.tag))}}function ou(e,n){var t=Kf(e);n.forEach(function(a){var o=up.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}function Vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a],l=e,u=n,c=u;e:for(;c!==null;){switch(c.tag){case 27:case 5:on=c.stateNode,Nn=!1;break e;case 3:on=c.stateNode.containerInfo,Nn=!0;break e;case 4:on=c.stateNode.containerInfo,Nn=!0;break e}c=c.return}if(on===null)throw Error(r(160));Ld(l,u,o),on=null,Nn=!1,l=o.alternate,l!==null&&(l.return=null),o.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Bd(n,e),n=n.sibling}var lt=null;function Bd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),Xn(e),a&4&&(Zt(3,e,e.return),Vo(3,e),Zt(5,e,e.return));break;case 1:Vn(n,e),Xn(e),a&512&&(We||t===null||On(t,t.return)),a&64&&At&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var o=lt;if(Vn(n,e),Xn(e),a&512&&(We||t===null||On(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,o=o.ownerDocument||o;n:switch(a){case"title":l=o.getElementsByTagName("title")[0],(!l||l[bo]||l[gn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=o.createElement(a),o.head.insertBefore(l,o.querySelector("head > title"))),yn(l,a,t),l[gn]=e,cn(l),a=l;break e;case"link":var u=Eh("link","href",o).get(a+(t.href||""));if(u){for(var c=0;c<u.length;c++)if(l=u[c],l.getAttribute("href")===(t.href==null?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(c,1);break n}}l=o.createElement(a),yn(l,a,t),o.head.appendChild(l);break;case"meta":if(u=Eh("meta","content",o).get(a+(t.content||""))){for(c=0;c<u.length;c++)if(l=u[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(c,1);break n}}l=o.createElement(a),yn(l,a,t),o.head.appendChild(l);break;default:throw Error(r(468,a))}l[gn]=e,cn(l),a=l}e.stateNode=a}else Ch(o,e.type,e.stateNode);else e.stateNode=Th(o,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?Ch(o,e.type,e.stateNode):Th(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Cd(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){o=e.stateNode,l=e.memoizedProps;try{for(var f=o.firstChild;f;){var j=f.nextSibling,M=f.nodeName;f[bo]||M==="HEAD"||M==="BODY"||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&f.rel.toLowerCase()==="stylesheet"||o.removeChild(f),f=j}for(var B=e.type,x=o.attributes;x.length;)o.removeAttributeNode(x[0]);yn(o,B,l),o[gn]=e,o[An]=l}catch(te){Le(e,e.return,te)}}case 5:if(Vn(n,e),Xn(e),a&512&&(We||t===null||On(t,t.return)),e.flags&32){o=e.stateNode;try{Ua(o,"")}catch(te){Le(e,e.return,te)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,Cd(e,o,t!==null?t.memoizedProps:o)),a&1024&&(au=!0);break;case 6:if(Vn(n,e),Xn(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(te){Le(e,e.return,te)}}break;case 3:if(ji=null,o=lt,lt=bi(n.containerInfo),Vn(n,e),lt=o,Xn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{dl(n.containerInfo)}catch(te){Le(e,e.return,te)}au&&(au=!1,Ud(e));break;case 4:a=lt,lt=bi(e.stateNode.containerInfo),Vn(n,e),Xn(e),lt=a;break;case 12:Vn(n,e),Xn(e);break;case 13:Vn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(mu=wn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ou(e,a)));break;case 22:if(a&512&&(We||t===null||On(t,t.return)),f=e.memoizedState!==null,j=t!==null&&t.memoizedState!==null,M=At,B=We,At=M||f,We=B||j,Vn(n,e),We=B,At=M,Xn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=f?n._visibility&-2:n._visibility|1,f&&(n=At||We,t===null||j||n||to(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){j=t=n;try{if(o=j.stateNode,f)l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{u=j.stateNode,c=j.memoizedProps.style;var C=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(te){Le(j,j.return,te)}}}else if(n.tag===6){if(t===null){j=n;try{j.stateNode.nodeValue=f?"":j.memoizedProps}catch(te){Le(j,j.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,ou(e,t))));break;case 19:Vn(n,e),Xn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ou(e,a)));break;case 21:break;default:Vn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Md(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var o=a.stateNode,l=nu(e);oi(e,l,o);break;case 5:var u=a.stateNode;a.flags&32&&(Ua(u,""),a.flags&=-33);var c=nu(e);oi(e,c,u);break;case 3:case 4:var f=a.stateNode.containerInfo,j=nu(e);tu(e,j,f);break;default:throw Error(r(161))}}}catch(M){Le(e,e.return,M)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ud(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ud(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Et(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zd(e,n.alternate,n),n=n.sibling}function to(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zt(4,n,n.return),to(n);break;case 1:On(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Td(n,n.return,t),to(n);break;case 26:case 27:case 5:On(n,n.return),to(n);break;case 22:On(n,n.return),n.memoizedState===null&&to(n);break;default:to(n)}e=e.sibling}}function Pt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,o=e,l=n,u=l.flags;switch(l.tag){case 0:case 11:case 15:Pt(o,l,t),Vo(4,l);break;case 1:if(Pt(o,l,t),a=l,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(j){Le(a,a.return,j)}if(a=l,o=a.updateQueue,o!==null){var c=a.stateNode;try{var f=o.shared.hiddenCallbacks;if(f!==null)for(o.shared.hiddenCallbacks=null,o=0;o<f.length;o++)xd(f[o],c)}catch(j){Le(a,a.return,j)}}t&&u&64&&Ad(l),xa(l,l.return);break;case 26:case 27:case 5:Pt(o,l,t),t&&a===null&&u&4&&Ed(l),xa(l,l.return);break;case 12:Pt(o,l,t);break;case 13:Pt(o,l,t),t&&u&4&&Rd(o,l);break;case 22:l.memoizedState===null&&Pt(o,l,t),xa(l,l.return);break;default:Pt(o,l,t)}n=n.sibling}}function lu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ro(t))}function iu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e))}function Ft(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yd(e,n,t,a),n=n.sibling}function Yd(e,n,t,a){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Ft(e,n,t,a),o&2048&&Vo(9,n);break;case 3:Ft(e,n,t,a),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e)));break;case 12:if(o&2048){Ft(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,u=l.id,c=l.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){Le(n,n.return,f)}}else Ft(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,n.memoizedState!==null?l._visibility&4?Ft(e,n,t,a):Xo(e,n):l._visibility&4?Ft(e,n,t,a):(l._visibility|=4,ao(e,n,t,a,(n.subtreeFlags&10256)!==0)),o&2048&&lu(n.alternate,n);break;case 24:Ft(e,n,t,a),o&2048&&iu(n.alternate,n);break;default:Ft(e,n,t,a)}}function ao(e,n,t,a,o){for(o=o&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var l=e,u=n,c=t,f=a,j=u.flags;switch(u.tag){case 0:case 11:case 15:ao(l,u,c,f,o),Vo(8,u);break;case 23:break;case 22:var M=u.stateNode;u.memoizedState!==null?M._visibility&4?ao(l,u,c,f,o):Xo(l,u):(M._visibility|=4,ao(l,u,c,f,o)),o&&j&2048&&lu(u.alternate,u);break;case 24:ao(l,u,c,f,o),o&&j&2048&&iu(u.alternate,u);break;default:ao(l,u,c,f,o)}n=n.sibling}}function Xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,o=a.flags;switch(a.tag){case 22:Xo(t,a),o&2048&&lu(a.alternate,a);break;case 24:Xo(t,a),o&2048&&iu(a.alternate,a);break;default:Xo(t,a)}n=n.sibling}}var Ko=8192;function oo(e){if(e.subtreeFlags&Ko)for(e=e.child;e!==null;)_d(e),e=e.sibling}function _d(e){switch(e.tag){case 26:oo(e),e.flags&Ko&&e.memoizedState!==null&&Rp(lt,e.memoizedState,e.memoizedProps);break;case 5:oo(e);break;case 3:case 4:var n=lt;lt=bi(e.stateNode.containerInfo),oo(e),lt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ko,Ko=16777216,oo(e),Ko=n):oo(e));break;default:oo(e)}}function Jd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Zo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,Gd(a,e)}Jd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 0:case 11:case 15:Zo(e),e.flags&2048&&Zt(9,e,e.return);break;case 3:Zo(e);break;case 12:Zo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,li(e)):Zo(e);break;default:Zo(e)}}function li(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,Gd(a,e)}Jd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zt(8,n,n.return),li(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,li(n));break;default:li(n)}e=e.sibling}}function Gd(e,n){for(;hn!==null;){var t=hn;switch(t.tag){case 0:case 11:case 15:Zt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ro(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,hn=a;else e:for(t=e;hn!==null;){a=hn;var o=a.sibling,l=a.return;if(Dd(a),a===t){hn=null;break e}if(o!==null){o.return=l,hn=o;break e}hn=l}}}function Zf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,t,a){return new Zf(e,n,t,a)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,n){var t=e.alternate;return t===null?(t=Kn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Qd(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ii(e,n,t,a,o,l){var u=0;if(a=e,typeof e=="function")su(e)&&(u=1);else if(typeof e=="string")u=Dp(e,t,$e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case b:return Sa(t.children,o,l,n);case p:u=8,o|=24;break;case A:return e=Kn(12,t,n,o|2),e.elementType=A,e.lanes=l,e;case K:return e=Kn(13,t,n,o),e.elementType=K,e.lanes=l,e;case _:return e=Kn(19,t,n,o),e.elementType=_,e.lanes=l,e;case W:return Wd(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case Y:u=10;break e;case z:u=9;break e;case O:u=11;break e;case D:u=14;break e;case V:u=16,a=null;break e}u=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=Kn(u,t,n,o),n.elementType=e,n.type=a,n.lanes=l,n}function Sa(e,n,t,a){return e=Kn(7,e,a,n),e.lanes=t,e}function Wd(e,n,t,a){e=Kn(22,e,a,n),e.elementType=W,e.lanes=t;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var l=o._current;if(l===null)throw Error(r(456));if((o._pendingVisibility&2)===0){var u=_t(l,2);u!==null&&(o._pendingVisibility|=2,xn(u,l,2))}},attach:function(){var l=o._current;if(l===null)throw Error(r(456));if((o._pendingVisibility&2)!==0){var u=_t(l,2);u!==null&&(o._pendingVisibility&=-3,xn(u,l,2))}}};return e.stateNode=o,e}function uu(e,n,t){return e=Kn(6,e,null,n),e.lanes=t,e}function ru(e,n,t){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ct(e){e.flags|=4}function Vd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mh(n)){if(n=Wn.current,n!==null&&((Se&4194176)===Se?ht!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==ht))throw zo=fs,cc;e.flags|=8192}}function si(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Cn():536870912,e.lanes|=n,io|=n)}function Po(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function _e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&31457280,a|=o.flags&31457280,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Pf(e,n,t){var a=n.pendingProps;switch(hs(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(n),null;case 1:return _e(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),St(rn),en(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Co(n)?Ct(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ot!==null&&(gu(ot),ot=null))),_e(n),null;case 26:return t=n.memoizedState,e===null?(Ct(n),t!==null?(_e(n),Vd(n,t)):(_e(n),n.flags&=-16777217)):t?t!==e.memoizedState?(Ct(n),_e(n),Vd(n,t)):(_e(n),n.flags&=-16777217):(e.memoizedProps!==a&&Ct(n),_e(n),n.flags&=-16777217),null;case 27:Bt(n),t=Ke.current;var o=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return _e(n),null}e=$e.current,Co(n)?uc(n):(e=Ih(o,a,t),n.stateNode=e,Ct(n))}return _e(n),null;case 5:if(Bt(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return _e(n),null}if(e=$e.current,Co(n))uc(n);else{switch(o=vi(Ke.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?o.createElement(t,{is:a.is}):o.createElement(t)}}e[gn]=n,e[An]=a;e:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break e;for(;o.sibling===null;){if(o.return===null||o.return===n)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=e;e:switch(yn(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ct(n)}}return _e(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Ct(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ke.current,Co(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,o=qn,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[gn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||gh(e.nodeValue,t)),e||ya(n)}else e=vi(e).createTextNode(a),e[gn]=n,n.stateNode=e}return _e(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Co(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[gn]=n}else Mo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_e(n),o=!1}else ot!==null&&(gu(ot),ot=null),o=!0;if(!o)return n.flags&256?(kt(n),n):(kt(n),null)}if(kt(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),si(n,n.updateQueue),_e(n),null;case 4:return en(),e===null&&Tu(n.stateNode.containerInfo),_e(n),null;case 10:return St(n.type),_e(n),null;case 19:if(ge(un),o=n.memoizedState,o===null)return _e(n),null;if(a=(n.flags&128)!==0,l=o.rendering,l===null)if(a)Po(o,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=Gl(e),l!==null){for(n.flags|=128,Po(o,!1),e=l.updateQueue,n.updateQueue=e,si(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Qd(t,e),t=t.sibling;return Me(un,un.current&1|2),n.child}e=e.sibling}o.tail!==null&&wn()>ui&&(n.flags|=128,a=!0,Po(o,!1),n.lanes=4194304)}else{if(!a)if(e=Gl(l),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,si(n,e),Po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Te)return _e(n),null}else 2*wn()-o.renderingStartTime>ui&&t!==536870912&&(n.flags|=128,a=!0,Po(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(e=o.last,e!==null?e.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=wn(),n.sibling=null,e=un.current,Me(un,a?e&1|2:e&1),n):(_e(n),null);case 22:case 23:return kt(n),ys(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(_e(n),n.subtreeFlags&6&&(n.flags|=8192)):_e(n),t=n.updateQueue,t!==null&&si(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&ge(va),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),St(rn),_e(n),null;case 25:return null}throw Error(r(156,n.tag))}function Ff(e,n){switch(hs(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return St(rn),en(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Bt(n),null;case 13:if(kt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge(un),null;case 4:return en(),null;case 10:return St(n.type),null;case 22:case 23:return kt(n),ys(),e!==null&&ge(va),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return St(rn),null;case 25:return null;default:return null}}function Xd(e,n){switch(hs(n),n.tag){case 3:St(rn),en();break;case 26:case 27:case 5:Bt(n);break;case 4:en();break;case 13:kt(n);break;case 19:ge(un);break;case 10:St(n.type);break;case 22:case 23:kt(n),ys(),e!==null&&ge(va);break;case 24:St(rn)}}var $f={getCacheForType:function(e){var n=vn(rn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},ep=typeof WeakMap=="function"?WeakMap:Map,Je=0,Re=null,Ie=null,Se=0,Be=0,zn=null,Mt=!1,lo=!1,cu=!1,Ot=0,Ve=0,ea=0,Aa=0,du=0,Zn=0,io=0,Fo=null,ft=null,hu=!1,mu=0,ui=1/0,ri=null,na=null,ci=!1,Ta=null,$o=0,fu=0,pu=null,el=0,yu=null;function Dn(){if((Je&2)!==0&&Se!==0)return Se&-Se;if(Q.T!==null){var e=Pa;return e!==0?e:qu()}return vo()}function Kd(){Zn===0&&(Zn=(Se&536870912)===0||Te?nt():536870912);var e=Wn.current;return e!==null&&(e.flags|=32),Zn}function xn(e,n,t){(e===Re&&Be===2||e.cancelPendingCommit!==null)&&(so(e,0),Nt(e,Se,Zn,!1)),In(e,t),((Je&2)===0||e!==Re)&&(e===Re&&((Je&2)===0&&(Aa|=t),Ve===4&&Nt(e,Se,Zn,!1)),pt(e))}function Zd(e,n,t){if((Je&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||Bn(e,n),o=a?ap(e,n):wu(e,n,!0),l=a;do{if(o===0){lo&&!a&&Nt(e,n,0,!1);break}else if(o===6)Nt(e,n,0,!Mt);else{if(t=e.current.alternate,l&&!np(t)){o=wu(e,n,!1),l=!1;continue}if(o===2){if(l=n,e.errorRecoveryDisabledLanes&l)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var c=e;o=Fo;var f=c.current.memoizedState.isDehydrated;if(f&&(so(c,u).flags|=256),u=wu(c,u,!1),u!==2){if(cu&&!f){c.errorRecoveryDisabledLanes|=l,Aa|=l,o=4;break e}l=ft,ft=o,l!==null&&gu(l)}o=u}if(l=!1,o!==2)continue}}if(o===1){so(e,0),Nt(e,n,0,!0);break}e:{switch(a=e,o){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Nt(a,n,Zn,!Mt);break e}break;case 2:ft=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(l=mu+300-wn(),10<l)){if(Nt(a,n,Zn,!Mt),Ze(a,0)!==0)break e;a.timeoutHandle=wh(Pd.bind(null,a,t,ft,ri,hu,n,Zn,Aa,io,Mt,2,-0,0),l);break e}Pd(a,t,ft,ri,hu,n,Zn,Aa,io,Mt,0,-0,0)}}break}while(!0);pt(e)}function gu(e){ft===null?ft=e:ft.push.apply(ft,e)}function Pd(e,n,t,a,o,l,u,c,f,j,M,B,x){var C=n.subtreeFlags;if((C&8192||(C&16785408)===16785408)&&(il={stylesheets:null,count:0,unsuspend:Lp},_d(n),n=Bp(),n!==null)){e.cancelPendingCommit=n(oh.bind(null,e,t,a,o,u,c,f,1,B,x)),Nt(e,l,u,!j);return}oh(e,t,a,o,u,c,f,M,B,x)}function np(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var o=t[a],l=o.getSnapshot;o=o.value;try{if(!Mn(l(),o))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nt(e,n,t,a){n&=~du,n&=~Aa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var o=n;0<o;){var l=31-kn(o),u=1<<l;a[l]=-1,o&=~u}t!==0&&Qe(e,t,n)}function di(){return(Je&6)===0?(nl(0),!1):!0}function vu(){if(Ie!==null){if(Be===0)var e=Ie.return;else e=Ie,xt=Ia=null,qs(e),Ka=null,Do=0,e=Ie;for(;e!==null;)Xd(e.alternate,e),e=e.return;Ie=null}}function so(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),vu(),Re=e,Ie=t=$t(e.current,null),Se=n,Be=0,zn=null,Mt=!1,lo=Bn(e,n),cu=!1,io=Zn=du=Aa=ea=Ve=0,ft=Fo=null,hu=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-kn(a),l=1<<o;n|=e[o],a&=~l}return Ot=n,Dl(),t}function Fd(e,n){ve=null,Q.H=mt,n===No?(n=mc(),Be=3):n===cc?(n=mc(),Be=4):Be=n===dd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zn=n,Ie===null&&(Ve=1,ni(e,Hn(n,e.current)))}function $d(){var e=Q.H;return Q.H=mt,e===null?mt:e}function eh(){var e=Q.A;return Q.A=$f,e}function bu(){Ve=4,Mt||(Se&4194176)!==Se&&Wn.current!==null||(lo=!0),(ea&134217727)===0&&(Aa&134217727)===0||Re===null||Nt(Re,Se,Zn,!1)}function wu(e,n,t){var a=Je;Je|=2;var o=$d(),l=eh();(Re!==e||Se!==n)&&(ri=null,so(e,n)),n=!1;var u=Ve;e:do try{if(Be!==0&&Ie!==null){var c=Ie,f=zn;switch(Be){case 8:vu(),u=6;break e;case 3:case 2:case 6:Wn.current===null&&(n=!0);var j=Be;if(Be=0,zn=null,uo(e,c,f,j),t&&lo){u=0;break e}break;default:j=Be,Be=0,zn=null,uo(e,c,f,j)}}tp(),u=Ve;break}catch(M){Fd(e,M)}while(!0);return n&&e.shellSuspendCounter++,xt=Ia=null,Je=a,Q.H=o,Q.A=l,Ie===null&&(Re=null,Se=0,Dl()),u}function tp(){for(;Ie!==null;)nh(Ie)}function ap(e,n){var t=Je;Je|=2;var a=$d(),o=eh();Re!==e||Se!==n?(ri=null,ui=wn()+500,so(e,n)):lo=Bn(e,n);e:do try{if(Be!==0&&Ie!==null){n=Ie;var l=zn;n:switch(Be){case 1:Be=0,zn=null,uo(e,n,l,1);break;case 2:if(dc(l)){Be=0,zn=null,th(n);break}n=function(){Be===2&&Re===e&&(Be=7),pt(e)},l.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:dc(l)?(Be=0,zn=null,th(n)):(Be=0,zn=null,uo(e,n,l,7));break;case 5:var u=null;switch(Ie.tag){case 26:u=Ie.memoizedState;case 5:case 27:var c=Ie;if(!u||Mh(u)){Be=0,zn=null;var f=c.sibling;if(f!==null)Ie=f;else{var j=c.return;j!==null?(Ie=j,hi(j)):Ie=null}break n}}Be=0,zn=null,uo(e,n,l,5);break;case 6:Be=0,zn=null,uo(e,n,l,6);break;case 8:vu(),Ve=6;break e;default:throw Error(r(462))}}op();break}catch(M){Fd(e,M)}while(!0);return xt=Ia=null,Q.H=a,Q.A=o,Je=t,Ie!==null?0:(Re=null,Se=0,Dl(),Ve)}function op(){for(;Ie!==null&&!$n();)nh(Ie)}function nh(e){var n=Id(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,n===null?hi(e):Ie=n}function th(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=gd(t,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=gd(t,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:qs(n);default:Xd(t,n),n=Ie=Qd(n,Ot),n=Id(t,n,Ot)}e.memoizedProps=e.pendingProps,n===null?hi(e):Ie=n}function uo(e,n,t,a){xt=Ia=null,qs(n),Ka=null,Do=0;var o=n.return;try{if(Wf(e,o,n,t,Se)){Ve=1,ni(e,Hn(t,e.current)),Ie=null;return}}catch(l){if(o!==null)throw Ie=o,l;Ve=1,ni(e,Hn(t,e.current)),Ie=null;return}n.flags&32768?(Te||a===1?e=!0:lo||(Se&536870912)!==0?e=!1:(Mt=e=!0,(a===2||a===3||a===6)&&(a=Wn.current,a!==null&&a.tag===13&&(a.flags|=16384))),ah(n,e)):hi(n)}function hi(e){var n=e;do{if((n.flags&32768)!==0){ah(n,Mt);return}e=n.return;var t=Pf(n.alternate,n,Ot);if(t!==null){Ie=t;return}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=e}while(n!==null);Ve===0&&(Ve=5)}function ah(e,n){do{var t=Ff(e.alternate,e);if(t!==null){t.flags&=32767,Ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Ie=e;return}Ie=e=t}while(e!==null);Ve=6,Ie=null}function oh(e,n,t,a,o,l,u,c,f,j){var M=Q.T,B=N.p;try{N.p=2,Q.T=null,lp(e,n,t,a,B,o,l,u,c,f,j)}finally{Q.T=M,N.p=B}}function lp(e,n,t,a,o,l,u,c){do ro();while(Ta!==null);if((Je&6)!==0)throw Error(r(327));var f=e.finishedWork;if(a=e.finishedLanes,f===null)return null;if(e.finishedWork=null,e.finishedLanes=0,f===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var j=f.lanes|f.childLanes;if(j|=rs,Pe(e,a,j,l,u,c),e===Re&&(Ie=Re=null,Se=0),(f.subtreeFlags&10256)===0&&(f.flags&10256)===0||ci||(ci=!0,fu=j,pu=t,rp(Ce,function(){return ro(),null})),t=(f.flags&15990)!==0,(f.subtreeFlags&15990)!==0||t?(t=Q.T,Q.T=null,l=N.p,N.p=2,u=Je,Je|=4,Xf(e,f),Bd(f,e),Ef(Ou,e.containerInfo),qi=!!Mu,Ou=Mu=null,e.current=f,zd(e,f.alternate,f),Na(),Je=u,N.p=l,Q.T=t):e.current=f,ci?(ci=!1,Ta=e,$o=a):lh(e,j),j=e.pendingLanes,j===0&&(na=null),_i(f.stateNode),pt(e),n!==null)for(o=e.onRecoverableError,f=0;f<n.length;f++)j=n[f],o(j.value,{componentStack:j.stack});return($o&3)!==0&&ro(),j=e.pendingLanes,(a&4194218)!==0&&(j&42)!==0?e===yu?el++:(el=0,yu=e):el=0,nl(0),null}function lh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ro(n)))}function ro(){if(Ta!==null){var e=Ta,n=fu;fu=0;var t=ua($o),a=Q.T,o=N.p;try{if(N.p=32>t?32:t,Q.T=null,Ta===null)var l=!1;else{t=pu,pu=null;var u=Ta,c=$o;if(Ta=null,$o=0,(Je&6)!==0)throw Error(r(331));var f=Je;if(Je|=4,Hd(u.current),Yd(u,u.current,c,t),Je=f,nl(0,!1),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(sa,u)}catch{}l=!0}return l}finally{N.p=o,Q.T=a,lh(e,n)}}return!1}function ih(e,n,t){n=Hn(t,n),n=Bs(e.stateNode,n,2),e=Kt(e,n,2),e!==null&&(In(e,2),pt(e))}function Le(e,n,t){if(e.tag===3)ih(e,e,t);else for(;n!==null;){if(n.tag===3){ih(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(na===null||!na.has(a))){e=Hn(t,e),t=rd(2),a=Kt(n,t,2),a!==null&&(cd(t,a,n,e),In(a,2),pt(a));break}}n=n.return}}function ju(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new ep;var o=new Set;a.set(n,o)}else o=a.get(n),o===void 0&&(o=new Set,a.set(n,o));o.has(t)||(cu=!0,o.add(t),e=ip.bind(null,e,n,t),n.then(e,e))}function ip(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Re===e&&(Se&t)===t&&(Ve===4||Ve===3&&(Se&62914560)===Se&&300>wn()-mu?(Je&2)===0&&so(e,0):du|=t,io===Se&&(io=0)),pt(e)}function sh(e,n){n===0&&(n=Cn()),e=_t(e,n),e!==null&&(In(e,n),pt(e))}function sp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sh(e,t)}function up(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),sh(e,t)}function rp(e,n){return Rn(e,n)}var mi=null,co=null,ku=!1,fi=!1,Iu=!1,Ea=0;function pt(e){e!==co&&e.next===null&&(co===null?mi=co=e:co=co.next=e),fi=!0,ku||(ku=!0,dp(cp))}function nl(e,n){if(!Iu&&fi){Iu=!0;do for(var t=!1,a=mi;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var l=0;else{var u=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-kn(42|e)+1)-1,l&=o&~(u&~c),l=l&201326677?l&201326677|1:l?l|2:0}l!==0&&(t=!0,ch(a,l))}else l=Se,l=Ze(a,a===Re?l:0),(l&3)===0||Bn(a,l)||(t=!0,ch(a,l));a=a.next}while(t);Iu=!1}}function cp(){fi=ku=!1;var e=0;Ea!==0&&(bp()&&(e=Ea),Ea=0);for(var n=wn(),t=null,a=mi;a!==null;){var o=a.next,l=uh(a,n);l===0?(a.next=null,t===null?mi=o:t.next=o,o===null&&(co=t)):(t=a,(e!==0||(l&3)!==0)&&(fi=!0)),a=o}nl(e)}function uh(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var u=31-kn(l),c=1<<u,f=o[u];f===-1?((c&t)===0||(c&a)!==0)&&(o[u]=et(c,n)):f<=n&&(e.expiredLanes|=c),l&=~c}if(n=Re,t=Se,t=Ze(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Be===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ut(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Bn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ut(a),ua(t)){case 2:case 8:t=de;break;case 32:t=Ce;break;case 268435456:t=nn;break;default:t=Ce}return a=rh.bind(null,e),t=Rn(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ut(a),e.callbackPriority=2,e.callbackNode=null,2}function rh(e,n){var t=e.callbackNode;if(ro()&&e.callbackNode!==t)return null;var a=Se;return a=Ze(e,e===Re?a:0),a===0?null:(Zd(e,a,n),uh(e,wn()),e.callbackNode!=null&&e.callbackNode===t?rh.bind(null,e):null)}function ch(e,n){if(ro())return null;Zd(e,n,!0)}function dp(e){jp(function(){(Je&6)!==0?Rn(je,e):e()})}function qu(){return Ea===0&&(Ea=nt()),Ea}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function hh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function hp(e,n,t,a,o){if(n==="submit"&&t&&t.stateNode===o){var l=dh((o[An]||null).action),u=a.submitter;u&&(n=(n=u[An]||null)?dh(n.formAction):u.getAttribute("formAction"),n!==null&&(l=n,u=null));var c=new Ol("action","action",null,a,o);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ea!==0){var f=u?hh(o,u):new FormData(o);Ns(t,{pending:!0,data:f,method:o.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=u?hh(o,u):new FormData(o),Ns(t,{pending:!0,data:f,method:o.method,action:l},l,f))},currentTarget:o}]})}}for(var xu=0;xu<oc.length;xu++){var Su=oc[xu],mp=Su.toLowerCase(),fp=Su[0].toUpperCase()+Su.slice(1);at(mp,"on"+fp)}at($r,"onAnimationEnd"),at(ec,"onAnimationIteration"),at(nc,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(Mf,"onTransitionRun"),at(Of,"onTransitionStart"),at(Nf,"onTransitionCancel"),at(tc,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function mh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,j=c.currentTarget;if(c=c.listener,f!==l&&o.isPropagationStopped())break e;l=c,o.currentTarget=j;try{l(o)}catch(M){ei(M)}o.currentTarget=null,l=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,j=c.currentTarget,c=c.listener,f!==l&&o.isPropagationStopped())break e;l=c,o.currentTarget=j;try{l(o)}catch(M){ei(M)}o.currentTarget=null,l=f}}}}function xe(e,n){var t=n[Ji];t===void 0&&(t=n[Ji]=new Set);var a=e+"__bubble";t.has(a)||(fh(n,e,2,!1),t.add(a))}function Au(e,n,t){var a=0;n&&(a|=4),fh(t,e,a,n)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Tu(e){if(!e[pi]){e[pi]=!0,gr.forEach(function(t){t!=="selectionchange"&&(pp.has(t)||Au(t,!1,e),Au(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pi]||(n[pi]=!0,Au("selectionchange",!1,n))}}function fh(e,n,t,a){switch(Rh(n)){case 2:var o=_p;break;case 8:o=Jp;break;default:o=_u}t=o.bind(null,n,t,e),o=void 0,!Zi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Eu(e,n,t,a,o){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;u=u.return}for(;c!==null;){if(u=ra(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=l=u;continue e}c=c.parentNode}}a=a.return}Er(function(){var j=l,M=Xi(t),B=[];e:{var x=ac.get(e);if(x!==void 0){var C=Ol,te=e;switch(e){case"keypress":if(Cl(t)===0)break e;case"keydown":case"keyup":C=uf;break;case"focusin":te="focus",C=es;break;case"focusout":te="blur",C=es;break;case"beforeblur":case"afterblur":C=es;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=df;break;case $r:case ec:case nc:C=Fm;break;case tc:C=mf;break;case"scroll":case"scrollend":C=Vm;break;case"wheel":C=pf;break;case"copy":case"cut":case"paste":C=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=zr;break;case"toggle":case"beforetoggle":C=gf}var fe=(n&4)!==0,Xe=!fe&&(e==="scroll"||e==="scrollend"),k=fe?x!==null?x+"Capture":null:x;fe=[];for(var w=j,q;w!==null;){var R=w;if(q=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||q===null||k===null||(R=jo(w,k),R!=null&&fe.push(al(w,R,q))),Xe)break;w=w.return}0<fe.length&&(x=new C(x,te,null,t,M),B.push({event:x,listeners:fe}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",x&&t!==Vi&&(te=t.relatedTarget||t.fromElement)&&(ra(te)||te[za]))break e;if((C||x)&&(x=M.window===M?M:(x=M.ownerDocument)?x.defaultView||x.parentWindow:window,C?(te=t.relatedTarget||t.toElement,C=j,te=te?ra(te):null,te!==null&&(Xe=ee(te),fe=te.tag,te!==Xe||fe!==5&&fe!==27&&fe!==6)&&(te=null)):(C=null,te=j),C!==te)){if(fe=Or,R="onMouseLeave",k="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(fe=zr,R="onPointerLeave",k="onPointerEnter",w="pointer"),Xe=C==null?x:wo(C),q=te==null?x:wo(te),x=new fe(R,w+"leave",C,t,M),x.target=Xe,x.relatedTarget=q,R=null,ra(M)===j&&(fe=new fe(k,w+"enter",te,t,M),fe.target=q,fe.relatedTarget=Xe,R=fe),Xe=R,C&&te)n:{for(fe=C,k=te,w=0,q=fe;q;q=ho(q))w++;for(q=0,R=k;R;R=ho(R))q++;for(;0<w-q;)fe=ho(fe),w--;for(;0<q-w;)k=ho(k),q--;for(;w--;){if(fe===k||k!==null&&fe===k.alternate)break n;fe=ho(fe),k=ho(k)}fe=null}else fe=null;C!==null&&ph(B,x,C,fe,!1),te!==null&&Xe!==null&&ph(B,Xe,te,fe,!0)}}e:{if(x=j?wo(j):window,C=x.nodeName&&x.nodeName.toLowerCase(),C==="select"||C==="input"&&x.type==="file")var F=Jr;else if(Yr(x))if(Hr)F=Af;else{F=xf;var we=qf}else C=x.nodeName,!C||C.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?j&&Wi(j.elementType)&&(F=Jr):F=Sf;if(F&&(F=F(e,j))){_r(B,F,t,M);break e}we&&we(e,x,j),e==="focusout"&&j&&x.type==="number"&&j.memoizedProps.value!=null&&Qi(x,"number",x.value)}switch(we=j?wo(j):window,e){case"focusin":(Yr(we)||we.contentEditable==="true")&&(Ha=we,is=j,Eo=null);break;case"focusout":Eo=is=Ha=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Pr(B,t,M);break;case"selectionchange":if(Cf)break;case"keydown":case"keyup":Pr(B,t,M)}var le;if(ts)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Ja?Br(e,t)&&(ue="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Dr&&t.locale!=="ko"&&(Ja||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Ja&&(le=Cr()):(Yt=M,Pi="value"in Yt?Yt.value:Yt.textContent,Ja=!0)),we=yi(j,ue),0<we.length&&(ue=new Nr(ue,e,null,t,M),B.push({event:ue,listeners:we}),le?ue.data=le:(le=Ur(t),le!==null&&(ue.data=le)))),(le=bf?wf(e,t):jf(e,t))&&(ue=yi(j,"onBeforeInput"),0<ue.length&&(we=new Nr("onBeforeInput","beforeinput",null,t,M),B.push({event:we,listeners:ue}),we.data=le)),hp(B,e,j,t,M)}mh(B,n)})}function al(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yi(e,n){for(var t=n+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||l===null||(o=jo(e,t),o!=null&&a.unshift(al(e,o,l)),o=jo(e,n),o!=null&&a.push(al(e,o,l))),e=e.return}return a}function ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ph(e,n,t,a,o){for(var l=n._reactName,u=[];t!==null&&t!==a;){var c=t,f=c.alternate,j=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||j===null||(f=j,o?(j=jo(t,l),j!=null&&u.unshift(al(t,j,f))):o||(j=jo(t,l),j!=null&&u.push(al(t,j,f)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var yp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function yh(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(gp,"")}function gh(e,n){return n=yh(n),yh(e)===n}function gi(){}function ze(e,n,t,a,o,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ua(e,""+a);break;case"className":xl(e,"class",a);break;case"tabIndex":xl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":xl(e,t,a);break;case"style":Ar(e,a,l);break;case"data":if(n!=="object"){xl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Tl(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&ze(e,n,"name",o.name,o,null),ze(e,n,"formEncType",o.formEncType,o,null),ze(e,n,"formMethod",o.formMethod,o,null),ze(e,n,"formTarget",o.formTarget,o,null)):(ze(e,n,"encType",o.encType,o,null),ze(e,n,"method",o.method,o,null),ze(e,n,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Tl(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=gi);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Tl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ql(e,"popover",a);break;case"xlinkActuate":bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ql(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Qm.get(t)||t,ql(e,t,a))}}function Cu(e,n,t,a,o,l){switch(t){case"style":Ar(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ua(e,a):(typeof a=="number"||typeof a=="bigint")&&Ua(e,""+a);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),n=t.slice(2,o?t.length-7:void 0),l=e[An]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,o),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,o);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):ql(e,t,a)}}}function yn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var a=!1,o=!1,l;for(l in t)if(t.hasOwnProperty(l)){var u=t[l];if(u!=null)switch(l){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,l,u,t,null)}}o&&ze(e,n,"srcSet",t.srcSet,t,null),a&&ze(e,n,"src",t.src,t,null);return;case"input":xe("invalid",e);var c=l=u=o=null,f=null,j=null;for(a in t)if(t.hasOwnProperty(a)){var M=t[a];if(M!=null)switch(a){case"name":o=M;break;case"type":u=M;break;case"checked":f=M;break;case"defaultChecked":j=M;break;case"value":l=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:ze(e,n,a,M,t,null)}}Ir(e,l,c,f,j,u,o,!1),Sl(e);return;case"select":xe("invalid",e),a=u=l=null;for(o in t)if(t.hasOwnProperty(o)&&(c=t[o],c!=null))switch(o){case"value":l=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ze(e,n,o,c,t,null)}n=l,t=u,e.multiple=!!a,n!=null?Ba(e,!!a,n,!1):t!=null&&Ba(e,!!a,t,!0);return;case"textarea":xe("invalid",e),l=o=a=null;for(u in t)if(t.hasOwnProperty(u)&&(c=t[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":o=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:ze(e,n,u,c,t,null)}xr(e,a,o,l),Sl(e);return;case"option":for(f in t)if(t.hasOwnProperty(f)&&(a=t[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ze(e,n,f,a,t,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(a=0;a<tl.length;a++)xe(tl[a],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in t)if(t.hasOwnProperty(j)&&(a=t[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,j,a,t,null)}return;default:if(Wi(n)){for(M in t)t.hasOwnProperty(M)&&(a=t[M],a!==void 0&&Cu(e,n,M,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&ze(e,n,c,a,t,null))}function vp(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,u=null,c=null,f=null,j=null,M=null;for(C in t){var B=t[C];if(t.hasOwnProperty(C)&&B!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":f=B;default:a.hasOwnProperty(C)||ze(e,n,C,null,a,B)}}for(var x in a){var C=a[x];if(B=t[x],a.hasOwnProperty(x)&&(C!=null||B!=null))switch(x){case"type":l=C;break;case"name":o=C;break;case"checked":j=C;break;case"defaultChecked":M=C;break;case"value":u=C;break;case"defaultValue":c=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,n));break;default:C!==B&&ze(e,n,x,C,a,B)}}Gi(e,u,c,f,j,M,l,o);return;case"select":C=u=c=x=null;for(l in t)if(f=t[l],t.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":C=f;default:a.hasOwnProperty(l)||ze(e,n,l,null,a,f)}for(o in a)if(l=a[o],f=t[o],a.hasOwnProperty(o)&&(l!=null||f!=null))switch(o){case"value":x=l;break;case"defaultValue":c=l;break;case"multiple":u=l;default:l!==f&&ze(e,n,o,l,a,f)}n=c,t=u,a=C,x!=null?Ba(e,!!t,x,!1):!!a!=!!t&&(n!=null?Ba(e,!!t,n,!0):Ba(e,!!t,t?[]:"",!1));return;case"textarea":C=x=null;for(c in t)if(o=t[c],t.hasOwnProperty(c)&&o!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ze(e,n,c,null,a,o)}for(u in a)if(o=a[u],l=t[u],a.hasOwnProperty(u)&&(o!=null||l!=null))switch(u){case"value":x=o;break;case"defaultValue":C=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==l&&ze(e,n,u,o,a,l)}qr(e,x,C);return;case"option":for(var te in t)if(x=t[te],t.hasOwnProperty(te)&&x!=null&&!a.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:ze(e,n,te,null,a,x)}for(f in a)if(x=a[f],C=t[f],a.hasOwnProperty(f)&&x!==C&&(x!=null||C!=null))switch(f){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:ze(e,n,f,x,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in t)x=t[fe],t.hasOwnProperty(fe)&&x!=null&&!a.hasOwnProperty(fe)&&ze(e,n,fe,null,a,x);for(j in a)if(x=a[j],C=t[j],a.hasOwnProperty(j)&&x!==C&&(x!=null||C!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,n));break;default:ze(e,n,j,x,a,C)}return;default:if(Wi(n)){for(var Xe in t)x=t[Xe],t.hasOwnProperty(Xe)&&x!==void 0&&!a.hasOwnProperty(Xe)&&Cu(e,n,Xe,void 0,a,x);for(M in a)x=a[M],C=t[M],!a.hasOwnProperty(M)||x===C||x===void 0&&C===void 0||Cu(e,n,M,x,a,C);return}}for(var k in t)x=t[k],t.hasOwnProperty(k)&&x!=null&&!a.hasOwnProperty(k)&&ze(e,n,k,null,a,x);for(B in a)x=a[B],C=t[B],!a.hasOwnProperty(B)||x===C||x==null&&C==null||ze(e,n,B,x,a,C)}var Mu=null,Ou=null;function vi(e){return e.nodeType===9?e:e.ownerDocument}function vh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zu=null;function bp(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var wh=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(kp)}:wh;function kp(e){setTimeout(function(){throw e})}function Du(e,n){var t=n,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(a===0){e.removeChild(o),dl(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=o}while(t);dl(n)}function Lu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Lu(t),Hi(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Ip(e,n,t,a){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[bo])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==o.rel||e.getAttribute("href")!==(o.href==null?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=it(e.nextSibling),e===null)break}return null}function qp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=it(e.nextSibling),e===null))return null;return e}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function kh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function Ih(e,n,t){switch(n=vi(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Pn=new Map,qh=new Set;function bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var zt=N.d;N.d={f:xp,r:Sp,D:Ap,C:Tp,L:Ep,m:Cp,X:Op,S:Mp,M:Np};function xp(){var e=zt.f(),n=di();return e||n}function Sp(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?Pc(n):zt.r(e)}var mo=typeof document>"u"?null:document;function xh(e,n,t){var a=mo;if(a&&typeof n=="string"&&n){var o=_n(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),qh.has(o)||(qh.add(o),e={rel:e,crossOrigin:t,href:n},a.querySelector(o)===null&&(n=a.createElement("link"),yn(n,"link",e),cn(n),a.head.appendChild(n)))}}function Ap(e){zt.D(e),xh("dns-prefetch",e,null)}function Tp(e,n){zt.C(e,n),xh("preconnect",e,n)}function Ep(e,n,t){zt.L(e,n,t);var a=mo;if(a&&e&&n){var o='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+_n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+_n(t.imageSizes)+'"]')):o+='[href="'+_n(e)+'"]';var l=o;switch(n){case"style":l=fo(e);break;case"script":l=po(e)}Pn.has(l)||(e=L({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Pn.set(l,e),a.querySelector(o)!==null||n==="style"&&a.querySelector(ol(l))||n==="script"&&a.querySelector(ll(l))||(n=a.createElement("link"),yn(n,"link",e),cn(n),a.head.appendChild(n)))}}function Cp(e,n){zt.m(e,n);var t=mo;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+_n(a)+'"][href="'+_n(e)+'"]',l=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=po(e)}if(!Pn.has(l)&&(e=L({rel:"modulepreload",href:e},n),Pn.set(l,e),t.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ll(l)))return}a=t.createElement("link"),yn(a,"link",e),cn(a),t.head.appendChild(a)}}}function Mp(e,n,t){zt.S(e,n,t);var a=mo;if(a&&e){var o=La(a).hoistableStyles,l=fo(e);n=n||"default";var u=o.get(l);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(ol(l)))c.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Pn.get(l))&&Ru(e,t);var f=u=a.createElement("link");cn(f),yn(f,"link",e),f._p=new Promise(function(j,M){f.onload=j,f.onerror=M}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,wi(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:c},o.set(l,u)}}}function Op(e,n){zt.X(e,n);var t=mo;if(t&&e){var a=La(t).hoistableScripts,o=po(e),l=a.get(o);l||(l=t.querySelector(ll(o)),l||(e=L({src:e,async:!0},n),(n=Pn.get(o))&&Bu(e,n),l=t.createElement("script"),cn(l),yn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function Np(e,n){zt.M(e,n);var t=mo;if(t&&e){var a=La(t).hoistableScripts,o=po(e),l=a.get(o);l||(l=t.querySelector(ll(o)),l||(e=L({src:e,async:!0,type:"module"},n),(n=Pn.get(o))&&Bu(e,n),l=t.createElement("script"),cn(l),yn(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function Sh(e,n,t,a){var o=(o=Ke.current)?bi(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=fo(t.href),t=La(o).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=fo(t.href);var l=La(o).hoistableStyles,u=l.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,u),(l=o.querySelector(ol(e)))&&!l._p&&(u.instance=l,u.state.loading=5),Pn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Pn.set(e,t),l||zp(o,e,t,u.state))),n&&a===null)throw Error(r(528,""));return u}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=po(t),t=La(o).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function fo(e){return'href="'+_n(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function Ah(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function zp(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),yn(n,"link",t),cn(n),e.head.appendChild(n))}function po(e){return'[src="'+_n(e)+'"]'}function ll(e){return"script[async]"+e}function Th(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+_n(t.href)+'"]');if(a)return n.instance=a,cn(a),a;var o=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),cn(a),yn(a,"style",o),wi(a,t.precedence,e),n.instance=a;case"stylesheet":o=fo(t.href);var l=e.querySelector(ol(o));if(l)return n.state.loading|=4,n.instance=l,cn(l),l;a=Ah(t),(o=Pn.get(o))&&Ru(a,o),l=(e.ownerDocument||e).createElement("link"),cn(l);var u=l;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),yn(l,"link",a),n.state.loading|=4,wi(l,t.precedence,e),n.instance=l;case"script":return l=po(t.src),(o=e.querySelector(ll(l)))?(n.instance=o,cn(o),o):(a=t,(o=Pn.get(l))&&(a=L({},t),Bu(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),cn(o),yn(o,"link",a),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,wi(a,t.precedence,e));return n.instance}function wi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,l=o,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===n)l=c;else if(l!==o)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Ru(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ji=null;function Eh(e,n,t){if(ji===null){var a=new Map,o=ji=new Map;o.set(t,a)}else o=ji,a=o.get(t),a||(a=new Map,o.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var l=t[o];if(!(l[bo]||l[gn]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(n)||"";u=e+u;var c=a.get(u);c?c.push(l):a.set(u,[l])}}return a}function Ch(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Dp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var il=null;function Lp(){}function Rp(e,n,t){if(il===null)throw Error(r(475));var a=il;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=fo(t.href),l=e.querySelector(ol(o));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ki.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=l,cn(l);return}l=e.ownerDocument||e,t=Ah(t),(o=Pn.get(o))&&Ru(t,o),l=l.createElement("link"),cn(l);var u=l;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),yn(l,"link",t),n.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=ki.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Bp(){if(il===null)throw Error(r(475));var e=il;return e.stylesheets&&e.count===0&&Uu(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Uu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function ki(){if(this.count--,this.count===0){if(this.stylesheets)Uu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ii=null;function Uu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ii=new Map,n.forEach(Up,e),Ii=null,ki.call(e))}function Up(e,n){if(!(n.state.loading&4)){var t=Ii.get(e);if(t)var a=t.get(null);else{t=new Map,Ii.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<o.length;l++){var u=o[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}o=n.instance,u=o.getAttribute("data-precedence"),l=t.get(u)||a,l===a&&t.set(null,o),t.set(u,o),this.count++,a=ki.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),l?l.parentNode.insertBefore(o,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var sl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Yp(e,n,t,a,o,l,u,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Oh(e,n,t,a,o,l,u,c,f,j,M,B){return e=new Yp(e,n,t,u,c,f,j,B),n=1,l===!0&&(n|=24),l=Kn(3,null,null,n),e.current=l,l.stateNode=e,n=gs(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},Ps(l),e}function Nh(e){return e?(e=Wa,e):Wa}function zh(e,n,t,a,o,l){o=Nh(o),a.context===null?a.context=o:a.pendingContext=o,a=Xt(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Kt(e,a,n),t!==null&&(xn(t,e,n),Go(t,e,n))}function Dh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yu(e,n){Dh(e,n),(e=e.alternate)&&Dh(e,n)}function Lh(e){if(e.tag===13){var n=_t(e,67108864);n!==null&&xn(n,e,67108864),Yu(e,67108864)}}var qi=!0;function _p(e,n,t,a){var o=Q.T;Q.T=null;var l=N.p;try{N.p=2,_u(e,n,t,a)}finally{N.p=l,Q.T=o}}function Jp(e,n,t,a){var o=Q.T;Q.T=null;var l=N.p;try{N.p=8,_u(e,n,t,a)}finally{N.p=l,Q.T=o}}function _u(e,n,t,a){if(qi){var o=Ju(a);if(o===null)Eu(e,n,a,xi,t),Bh(e,a);else if(Gp(o,e,n,t,a))a.stopPropagation();else if(Bh(e,a),n&4&&-1<Hp.indexOf(e)){for(;o!==null;){var l=Da(o);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=Ue(l.pendingLanes);if(u!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-kn(u);c.entanglements[1]|=f,u&=~f}pt(l),(Je&6)===0&&(ui=wn()+500,nl(0))}}break;case 13:c=_t(l,2),c!==null&&xn(c,l,2),di(),Yu(l,2)}if(l=Ju(a),l===null&&Eu(e,n,a,xi,t),l===o)break;o=l}o!==null&&a.stopPropagation()}else Eu(e,n,a,null,t)}}function Ju(e){return e=Xi(e),Hu(e)}var xi=null;function Hu(e){if(xi=null,e=ra(e),e!==null){var n=ee(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=qe(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xi=e,null}function Rh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case je:return 2;case de:return 8;case Ce:case De:return 32;case nn:return 268435456;default:return 32}default:return 32}}var Gu=!1,ta=null,aa=null,oa=null,ul=new Map,rl=new Map,la=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,n){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(n.pointerId)}}function cl(e,n,t,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Da(n),n!==null&&Lh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Gp(e,n,t,a,o){switch(n){case"focusin":return ta=cl(ta,e,n,t,a,o),!0;case"dragenter":return aa=cl(aa,e,n,t,a,o),!0;case"mouseover":return oa=cl(oa,e,n,t,a,o),!0;case"pointerover":var l=o.pointerId;return ul.set(l,cl(ul.get(l)||null,e,n,t,a,o)),!0;case"gotpointercapture":return l=o.pointerId,rl.set(l,cl(rl.get(l)||null,e,n,t,a,o)),!0}return!1}function Uh(e){var n=ra(e.target);if(n!==null){var t=ee(n);if(t!==null){if(n=t.tag,n===13){if(n=qe(t),n!==null){e.blockedOn=n,Rm(e.priority,function(){if(t.tag===13){var a=Dn(),o=_t(t,a);o!==null&&xn(o,t,a),Yu(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ju(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Vi=a,t.target.dispatchEvent(a),Vi=null}else return n=Da(t),n!==null&&Lh(n),e.blockedOn=t,!1;n.shift()}return!0}function Yh(e,n,t){Si(e)&&t.delete(n)}function Qp(){Gu=!1,ta!==null&&Si(ta)&&(ta=null),aa!==null&&Si(aa)&&(aa=null),oa!==null&&Si(oa)&&(oa=null),ul.forEach(Yh),rl.forEach(Yh)}function Ai(e,n){e.blockedOn===n&&(e.blockedOn=null,Gu||(Gu=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qp)))}var Ti=null;function _h(e){Ti!==e&&(Ti=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ti===e&&(Ti=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],o=e[n+2];if(typeof a!="function"){if(Hu(a||t)===null)continue;break}var l=Da(t);l!==null&&(e.splice(n,3),n-=3,Ns(l,{pending:!0,data:o,method:t.method,action:a},a,o))}}))}function dl(e){function n(f){return Ai(f,e)}ta!==null&&Ai(ta,e),aa!==null&&Ai(aa,e),oa!==null&&Ai(oa,e),ul.forEach(n),rl.forEach(n);for(var t=0;t<la.length;t++){var a=la[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<la.length&&(t=la[0],t.blockedOn===null);)Uh(t),t.blockedOn===null&&la.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var o=t[a],l=t[a+1],u=o[An]||null;if(typeof l=="function")u||_h(t);else if(u){var c=null;if(l&&l.hasAttribute("formAction")){if(o=l,u=l[An]||null)c=u.formAction;else if(Hu(o)!==null)continue}else c=u.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),_h(t)}}}function Qu(e){this._internalRoot=e}Ei.prototype.render=Qu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=Dn();zh(t,a,e,n,null,null)},Ei.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&ro(),zh(e.current,2,null,e,null,null),di(),n[za]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=vo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<la.length&&n!==0&&n<la[t].priority;t++);la.splice(t,0,e),t===0&&Uh(e)}};var Jh=h.version;if(Jh!=="19.0.0")throw Error(r(527,Jh,"19.0.0"));N.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=T(n),e=e!==null?X(e):null,e=e===null?null:e.stateNode,e};var Wp={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,findFiberByHostInstance:ra,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{sa=Ci.inject(Wp),jn=Ci}catch{}}return ml.createRoot=function(e,n){if(!m(e))throw Error(r(299));var t=!1,a="",o=ld,l=id,u=sd,c=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=Oh(e,1,!1,null,null,t,a,o,l,u,c,null),e[za]=n.current,Tu(e.nodeType===8?e.parentNode:e),new Qu(n)},ml.hydrateRoot=function(e,n,t){if(!m(e))throw Error(r(299));var a=!1,o="",l=ld,u=id,c=sd,f=null,j=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks),t.formState!==void 0&&(j=t.formState)),n=Oh(e,1,!0,n,t??null,a,o,l,u,c,f,j),n.context=Nh(null),t=n.current,a=Dn(),o=Xt(a),o.callback=null,Kt(t,o,a),n.current.lanes=a,In(n,a),pt(n),e[za]=n.current,Tu(e),new Ei(n)},ml.version="19.0.0",ml}var Fh;function ay(){if(Fh)return Xu.exports;Fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(h){console.error(h)}}return s(),Xu.exports=ty(),Xu.exports}var oy=ay();const ly=gm(oy);var fl={},$h;function iy(){if($h)return fl;$h=1,Object.defineProperty(fl,"__esModule",{value:!0}),fl.parse=I,fl.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,h=/^[\u0021-\u003A\u003C-\u007E]*$/,d=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,m=Object.prototype.toString,g=(()=>{const z=function(){};return z.prototype=Object.create(null),z})();function I(z,Y){const O=new g,K=z.length;if(K<2)return O;const _=(Y==null?void 0:Y.decode)||A;let D=0;do{const V=z.indexOf("=",D);if(V===-1)break;const W=z.indexOf(";",D),ae=W===-1?K:W;if(V>ae){D=z.lastIndexOf(";",V-1)+1;continue}const Z=S(z,D,V),ce=b(z,V,Z),re=z.slice(Z,ce);if(O[re]===void 0){let he=S(z,V+1,ae),Q=b(z,ae,he);const L=_(z.slice(he,Q));O[re]=L}D=ae+1}while(D<K);return O}function S(z,Y,O){do{const K=z.charCodeAt(Y);if(K!==32&&K!==9)return Y}while(++Y<O);return O}function b(z,Y,O){for(;Y>O;){const K=z.charCodeAt(--Y);if(K!==32&&K!==9)return Y+1}return O}function p(z,Y,O){const K=(O==null?void 0:O.encode)||encodeURIComponent;if(!s.test(z))throw new TypeError(`argument name is invalid: ${z}`);const _=K(Y);if(!h.test(_))throw new TypeError(`argument val is invalid: ${Y}`);let D=z+"="+_;if(!O)return D;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);D+="; Max-Age="+O.maxAge}if(O.domain){if(!d.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);D+="; Domain="+O.domain}if(O.path){if(!r.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);D+="; Path="+O.path}if(O.expires){if(!U(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);D+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(D+="; HttpOnly"),O.secure&&(D+="; Secure"),O.partitioned&&(D+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return D}function A(z){if(z.indexOf("%")===-1)return z;try{return decodeURIComponent(z)}catch{return z}}function U(z){return m.call(z)==="[object Date]"}return fl}iy();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var em="popstate";function sy(s={}){function h(m,g){let{pathname:I="/",search:S="",hash:b=""}=Ma(m.location.hash.substring(1));return!I.startsWith("/")&&!I.startsWith(".")&&(I="/"+I),tr("",{pathname:I,search:S,hash:b},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function d(m,g){let I=m.document.querySelector("base"),S="";if(I&&I.getAttribute("href")){let b=m.location.href,p=b.indexOf("#");S=p===-1?b:b.slice(0,p)}return S+"#"+(typeof g=="string"?g:wl(g))}function r(m,g){st(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(g)})`)}return ry(h,d,r,s)}function He(s,h){if(s===!1||s===null||typeof s>"u")throw new Error(h)}function st(s,h){if(!s){typeof console<"u"&&console.warn(h);try{throw new Error(h)}catch{}}}function uy(){return Math.random().toString(36).substring(2,10)}function nm(s,h){return{usr:s.state,key:s.key,idx:h}}function tr(s,h,d=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof h=="string"?Ma(h):h,state:d,key:h&&h.key||r||uy()}}function wl({pathname:s="/",search:h="",hash:d=""}){return h&&h!=="?"&&(s+=h.charAt(0)==="?"?h:"?"+h),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Ma(s){let h={};if(s){let d=s.indexOf("#");d>=0&&(h.hash=s.substring(d),s=s.substring(0,d));let r=s.indexOf("?");r>=0&&(h.search=s.substring(r),s=s.substring(0,r)),s&&(h.pathname=s)}return h}function ry(s,h,d,r={}){let{window:m=document.defaultView,v5Compat:g=!1}=r,I=m.history,S="POP",b=null,p=A();p==null&&(p=0,I.replaceState({...I.state,idx:p},""));function A(){return(I.state||{idx:null}).idx}function U(){S="POP";let _=A(),D=_==null?null:_-p;p=_,b&&b({action:S,location:K.location,delta:D})}function z(_,D){S="PUSH";let V=tr(K.location,_,D);d&&d(V,_),p=A()+1;let W=nm(V,p),ae=K.createHref(V);try{I.pushState(W,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;m.location.assign(ae)}g&&b&&b({action:S,location:K.location,delta:1})}function Y(_,D){S="REPLACE";let V=tr(K.location,_,D);d&&d(V,_),p=A();let W=nm(V,p),ae=K.createHref(V);I.replaceState(W,"",ae),g&&b&&b({action:S,location:K.location,delta:0})}function O(_){let D=m.location.origin!=="null"?m.location.origin:m.location.href,V=typeof _=="string"?_:wl(_);return V=V.replace(/ $/,"%20"),He(D,`No window.location.(origin|href) available to create URL for href: ${V}`),new URL(V,D)}let K={get action(){return S},get location(){return s(m,I)},listen(_){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(em,U),b=_,()=>{m.removeEventListener(em,U),b=null}},createHref(_){return h(m,_)},createURL:O,encodeLocation(_){let D=O(_);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:z,replace:Y,go(_){return I.go(_)}};return K}function vm(s,h,d="/"){return cy(s,h,d,!1)}function cy(s,h,d,r){let m=typeof h=="string"?Ma(h):h,g=Lt(m.pathname||"/",d);if(g==null)return null;let I=bm(s);dy(I);let S=null;for(let b=0;S==null&&b<I.length;++b){let p=ky(g);S=wy(I[b],p,r)}return S}function bm(s,h=[],d=[],r=""){let m=(g,I,S)=>{let b={relativePath:S===void 0?g.path||"":S,caseSensitive:g.caseSensitive===!0,childrenIndex:I,route:g};b.relativePath.startsWith("/")&&(He(b.relativePath.startsWith(r),`Absolute route path "${b.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(r.length));let p=Dt([r,b.relativePath]),A=d.concat(b);g.children&&g.children.length>0&&(He(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),bm(g.children,h,A,p)),!(g.path==null&&!g.index)&&h.push({path:p,score:vy(p,g.index),routesMeta:A})};return s.forEach((g,I)=>{var S;if(g.path===""||!((S=g.path)!=null&&S.includes("?")))m(g,I);else for(let b of wm(g.path))m(g,I,b)}),h}function wm(s){let h=s.split("/");if(h.length===0)return[];let[d,...r]=h,m=d.endsWith("?"),g=d.replace(/\?$/,"");if(r.length===0)return m?[g,""]:[g];let I=wm(r.join("/")),S=[];return S.push(...I.map(b=>b===""?g:[g,b].join("/"))),m&&S.push(...I),S.map(b=>s.startsWith("/")&&b===""?"/":b)}function dy(s){s.sort((h,d)=>h.score!==d.score?d.score-h.score:by(h.routesMeta.map(r=>r.childrenIndex),d.routesMeta.map(r=>r.childrenIndex)))}var hy=/^:[\w-]+$/,my=3,fy=2,py=1,yy=10,gy=-2,tm=s=>s==="*";function vy(s,h){let d=s.split("/"),r=d.length;return d.some(tm)&&(r+=gy),h&&(r+=fy),d.filter(m=>!tm(m)).reduce((m,g)=>m+(hy.test(g)?my:g===""?py:yy),r)}function by(s,h){return s.length===h.length&&s.slice(0,-1).every((r,m)=>r===h[m])?s[s.length-1]-h[h.length-1]:0}function wy(s,h,d=!1){let{routesMeta:r}=s,m={},g="/",I=[];for(let S=0;S<r.length;++S){let b=r[S],p=S===r.length-1,A=g==="/"?h:h.slice(g.length)||"/",U=Li({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},A),z=b.route;if(!U&&p&&d&&!r[r.length-1].route.index&&(U=Li({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},A)),!U)return null;Object.assign(m,U.params),I.push({params:m,pathname:Dt([g,U.pathname]),pathnameBase:Sy(Dt([g,U.pathnameBase])),route:z}),U.pathnameBase!=="/"&&(g=Dt([g,U.pathnameBase]))}return I}function Li(s,h){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,r]=jy(s.path,s.caseSensitive,s.end),m=h.match(d);if(!m)return null;let g=m[0],I=g.replace(/(.)\/+$/,"$1"),S=m.slice(1);return{params:r.reduce((p,{paramName:A,isOptional:U},z)=>{if(A==="*"){let O=S[z]||"";I=g.slice(0,g.length-O.length).replace(/(.)\/+$/,"$1")}const Y=S[z];return U&&!Y?p[A]=void 0:p[A]=(Y||"").replace(/%2F/g,"/"),p},{}),pathname:g,pathnameBase:I,pattern:s}}function jy(s,h=!1,d=!0){st(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(I,S,b)=>(r.push({paramName:S,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,h?void 0:"i"),r]}function ky(s){try{return s.split("/").map(h=>decodeURIComponent(h).replace(/\//g,"%2F")).join("/")}catch(h){return st(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${h}).`),s}}function Lt(s,h){if(h==="/")return s;if(!s.toLowerCase().startsWith(h.toLowerCase()))return null;let d=h.endsWith("/")?h.length-1:h.length,r=s.charAt(d);return r&&r!=="/"?null:s.slice(d)||"/"}function Iy(s,h="/"){let{pathname:d,search:r="",hash:m=""}=typeof s=="string"?Ma(s):s;return{pathname:d?d.startsWith("/")?d:qy(d,h):h,search:Ay(r),hash:Ty(m)}}function qy(s,h){let d=h.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Fu(s,h,d,r){return`Cannot include a '${s}' character in a manually specified \`to.${h}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xy(s){return s.filter((h,d)=>d===0||h.route.path&&h.route.path.length>0)}function jm(s){let h=xy(s);return h.map((d,r)=>r===h.length-1?d.pathname:d.pathnameBase)}function km(s,h,d,r=!1){let m;typeof s=="string"?m=Ma(s):(m={...s},He(!m.pathname||!m.pathname.includes("?"),Fu("?","pathname","search",m)),He(!m.pathname||!m.pathname.includes("#"),Fu("#","pathname","hash",m)),He(!m.search||!m.search.includes("#"),Fu("#","search","hash",m)));let g=s===""||m.pathname==="",I=g?"/":m.pathname,S;if(I==null)S=d;else{let U=h.length-1;if(!r&&I.startsWith("..")){let z=I.split("/");for(;z[0]==="..";)z.shift(),U-=1;m.pathname=z.join("/")}S=U>=0?h[U]:"/"}let b=Iy(m,S),p=I&&I!=="/"&&I.endsWith("/"),A=(g||I===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(p||A)&&(b.pathname+="/"),b}var Dt=s=>s.join("/").replace(/\/\/+/g,"/"),Sy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ay=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ty=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ey(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Im=["POST","PUT","PATCH","DELETE"];new Set(Im);var Cy=["GET",...Im];new Set(Cy);var go=v.createContext(null);go.displayName="DataRouter";var Ri=v.createContext(null);Ri.displayName="DataRouterState";var qm=v.createContext({isTransitioning:!1});qm.displayName="ViewTransition";var My=v.createContext(new Map);My.displayName="Fetchers";var Oy=v.createContext(null);Oy.displayName="Await";var yt=v.createContext(null);yt.displayName="Navigation";var jl=v.createContext(null);jl.displayName="Location";var Rt=v.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var ir=v.createContext(null);ir.displayName="RouteError";function Ny(s,{relative:h}={}){He(kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:r}=v.useContext(yt),{hash:m,pathname:g,search:I}=Il(s,{relative:h}),S=g;return d!=="/"&&(S=g==="/"?d:Dt([d,g])),r.createHref({pathname:S,search:I,hash:m})}function kl(){return v.useContext(jl)!=null}function Oa(){return He(kl(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(jl).location}var xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sm(s){v.useContext(yt).static||v.useLayoutEffect(s)}function zy(){let{isDataRoute:s}=v.useContext(Rt);return s?Vy():Dy()}function Dy(){He(kl(),"useNavigate() may be used only in the context of a <Router> component.");let s=v.useContext(go),{basename:h,navigator:d}=v.useContext(yt),{matches:r}=v.useContext(Rt),{pathname:m}=Oa(),g=JSON.stringify(jm(r)),I=v.useRef(!1);return Sm(()=>{I.current=!0}),v.useCallback((b,p={})=>{if(st(I.current,xm),!I.current)return;if(typeof b=="number"){d.go(b);return}let A=km(b,JSON.parse(g),m,p.relative==="path");s==null&&h!=="/"&&(A.pathname=A.pathname==="/"?h:Dt([h,A.pathname])),(p.replace?d.replace:d.push)(A,p.state,p)},[h,d,g,m,s])}v.createContext(null);function Il(s,{relative:h}={}){let{matches:d}=v.useContext(Rt),{pathname:r}=Oa(),m=JSON.stringify(jm(d));return v.useMemo(()=>km(s,JSON.parse(m),r,h==="path"),[s,m,r,h])}function Ly(s,h){return Am(s,h)}function Am(s,h,d,r){var V;He(kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m,static:g}=v.useContext(yt),{matches:I}=v.useContext(Rt),S=I[I.length-1],b=S?S.params:{},p=S?S.pathname:"/",A=S?S.pathnameBase:"/",U=S&&S.route;{let W=U&&U.path||"";Tm(p,!U||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let z=Oa(),Y;if(h){let W=typeof h=="string"?Ma(h):h;He(A==="/"||((V=W.pathname)==null?void 0:V.startsWith(A)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${W.pathname}" was given in the \`location\` prop.`),Y=W}else Y=z;let O=Y.pathname||"/",K=O;if(A!=="/"){let W=A.replace(/^\//,"").split("/");K="/"+O.replace(/^\//,"").split("/").slice(W.length).join("/")}let _=!g&&d&&d.matches&&d.matches.length>0?d.matches:vm(s,{pathname:K});st(U||_!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),st(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=_y(_&&_.map(W=>Object.assign({},W,{params:Object.assign({},b,W.params),pathname:Dt([A,m.encodeLocation?m.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?A:Dt([A,m.encodeLocation?m.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),I,d,r);return h&&D?v.createElement(jl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},D):D}function Ry(){let s=Wy(),h=Ey(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},g={padding:"2px 4px",backgroundColor:r},I=null;return console.error("Error handled by React Router default ErrorBoundary:",s),I=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:g},"ErrorBoundary")," or"," ",v.createElement("code",{style:g},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},h),d?v.createElement("pre",{style:m},d):null,I)}var By=v.createElement(Ry,null),Uy=class extends v.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,h){return h.location!==s.location||h.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:h.error,location:h.location,revalidation:s.revalidation||h.revalidation}}componentDidCatch(s,h){console.error("React Router caught the following error during render",s,h)}render(){return this.state.error!==void 0?v.createElement(Rt.Provider,{value:this.props.routeContext},v.createElement(ir.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yy({routeContext:s,match:h,children:d}){let r=v.useContext(go);return r&&r.static&&r.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=h.route.id),v.createElement(Rt.Provider,{value:s},d)}function _y(s,h=[],d=null,r=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(h.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let m=s,g=d==null?void 0:d.errors;if(g!=null){let b=m.findIndex(p=>p.route.id&&(g==null?void 0:g[p.route.id])!==void 0);He(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),m=m.slice(0,Math.min(m.length,b+1))}let I=!1,S=-1;if(d)for(let b=0;b<m.length;b++){let p=m[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(S=b),p.route.id){let{loaderData:A,errors:U}=d,z=p.route.loader&&!A.hasOwnProperty(p.route.id)&&(!U||U[p.route.id]===void 0);if(p.route.lazy||z){I=!0,S>=0?m=m.slice(0,S+1):m=[m[0]];break}}}return m.reduceRight((b,p,A)=>{let U,z=!1,Y=null,O=null;d&&(U=g&&p.route.id?g[p.route.id]:void 0,Y=p.route.errorElement||By,I&&(S<0&&A===0?(Tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,O=null):S===A&&(z=!0,O=p.route.hydrateFallbackElement||null)));let K=h.concat(m.slice(0,A+1)),_=()=>{let D;return U?D=Y:z?D=O:p.route.Component?D=v.createElement(p.route.Component,null):p.route.element?D=p.route.element:D=b,v.createElement(Yy,{match:p,routeContext:{outlet:b,matches:K,isDataRoute:d!=null},children:D})};return d&&(p.route.ErrorBoundary||p.route.errorElement||A===0)?v.createElement(Uy,{location:d.location,revalidation:d.revalidation,component:Y,error:U,children:_(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):_()},null)}function sr(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jy(s){let h=v.useContext(go);return He(h,sr(s)),h}function Hy(s){let h=v.useContext(Ri);return He(h,sr(s)),h}function Gy(s){let h=v.useContext(Rt);return He(h,sr(s)),h}function ur(s){let h=Gy(s),d=h.matches[h.matches.length-1];return He(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function Qy(){return ur("useRouteId")}function Wy(){var r;let s=v.useContext(ir),h=Hy("useRouteError"),d=ur("useRouteError");return s!==void 0?s:(r=h.errors)==null?void 0:r[d]}function Vy(){let{router:s}=Jy("useNavigate"),h=ur("useNavigate"),d=v.useRef(!1);return Sm(()=>{d.current=!0}),v.useCallback(async(m,g={})=>{st(d.current,xm),d.current&&(typeof m=="number"?s.navigate(m):await s.navigate(m,{fromRouteId:h,...g}))},[s,h])}var am={};function Tm(s,h,d){!h&&!am[s]&&(am[s]=!0,st(!1,d))}v.memo(Xy);function Xy({routes:s,future:h,state:d}){return Am(s,void 0,d,h)}function ar(s){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ky({basename:s="/",children:h=null,location:d,navigationType:r="POP",navigator:m,static:g=!1}){He(!kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let I=s.replace(/^\/*/,"/"),S=v.useMemo(()=>({basename:I,navigator:m,static:g,future:{}}),[I,m,g]);typeof d=="string"&&(d=Ma(d));let{pathname:b="/",search:p="",hash:A="",state:U=null,key:z="default"}=d,Y=v.useMemo(()=>{let O=Lt(b,I);return O==null?null:{location:{pathname:O,search:p,hash:A,state:U,key:z},navigationType:r}},[I,b,p,A,U,z,r]);return st(Y!=null,`<Router basename="${I}"> is not able to match the URL "${b}${p}${A}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:v.createElement(yt.Provider,{value:S},v.createElement(jl.Provider,{children:h,value:Y}))}function Zy({children:s,location:h}){return Ly(or(s),h)}function or(s,h=[]){let d=[];return v.Children.forEach(s,(r,m)=>{if(!v.isValidElement(r))return;let g=[...h,m];if(r.type===v.Fragment){d.push.apply(d,or(r.props.children,g));return}He(r.type===ar,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!r.props.index||!r.props.children,"An index route cannot have child routes.");let I={id:r.props.id||g.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(I.children=or(r.props.children,g)),d.push(I)}),d}var Ni="get",zi="application/x-www-form-urlencoded";function Bi(s){return s!=null&&typeof s.tagName=="string"}function Py(s){return Bi(s)&&s.tagName.toLowerCase()==="button"}function Fy(s){return Bi(s)&&s.tagName.toLowerCase()==="form"}function $y(s){return Bi(s)&&s.tagName.toLowerCase()==="input"}function eg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ng(s,h){return s.button===0&&(!h||h==="_self")&&!eg(s)}var Mi=null;function tg(){if(Mi===null)try{new FormData(document.createElement("form"),0),Mi=!1}catch{Mi=!0}return Mi}var ag=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $u(s){return s!=null&&!ag.has(s)?(st(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zi}"`),null):s}function og(s,h){let d,r,m,g,I;if(Fy(s)){let S=s.getAttribute("action");r=S?Lt(S,h):null,d=s.getAttribute("method")||Ni,m=$u(s.getAttribute("enctype"))||zi,g=new FormData(s)}else if(Py(s)||$y(s)&&(s.type==="submit"||s.type==="image")){let S=s.form;if(S==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=s.getAttribute("formaction")||S.getAttribute("action");if(r=b?Lt(b,h):null,d=s.getAttribute("formmethod")||S.getAttribute("method")||Ni,m=$u(s.getAttribute("formenctype"))||$u(S.getAttribute("enctype"))||zi,g=new FormData(S,s),!tg()){let{name:p,type:A,value:U}=s;if(A==="image"){let z=p?`${p}.`:"";g.append(`${z}x`,"0"),g.append(`${z}y`,"0")}else p&&g.append(p,U)}}else{if(Bi(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ni,r=null,m=zi,I=s}return g&&m==="text/plain"&&(I=g,g=void 0),{action:r,method:d.toLowerCase(),encType:m,formData:g,body:I}}function rr(s,h){if(s===!1||s===null||typeof s>"u")throw new Error(h)}async function lg(s,h){if(s.id in h)return h[s.id];try{let d=await import(s.module);return h[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ig(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function sg(s,h,d){let r=await Promise.all(s.map(async m=>{let g=h.routes[m.route.id];if(g){let I=await lg(g,d);return I.links?I.links():[]}return[]}));return dg(r.flat(1).filter(ig).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function om(s,h,d,r,m,g){let I=(b,p)=>d[p]?b.route.id!==d[p].route.id:!0,S=(b,p)=>{var A;return d[p].pathname!==b.pathname||((A=d[p].route.path)==null?void 0:A.endsWith("*"))&&d[p].params["*"]!==b.params["*"]};return g==="assets"?h.filter((b,p)=>I(b,p)||S(b,p)):g==="data"?h.filter((b,p)=>{var U;let A=r.routes[b.route.id];if(!A||!A.hasLoader)return!1;if(I(b,p)||S(b,p))return!0;if(b.route.shouldRevalidate){let z=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((U=d[0])==null?void 0:U.params)||{},nextUrl:new URL(s,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function ug(s,h,{includeHydrateFallback:d}={}){return rg(s.map(r=>{let m=h.routes[r.route.id];if(!m)return[];let g=[m.module];return m.clientActionModule&&(g=g.concat(m.clientActionModule)),m.clientLoaderModule&&(g=g.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(g=g.concat(m.hydrateFallbackModule)),m.imports&&(g=g.concat(m.imports)),g}).flat(1))}function rg(s){return[...new Set(s)]}function cg(s){let h={},d=Object.keys(s).sort();for(let r of d)h[r]=s[r];return h}function dg(s,h){let d=new Set;return new Set(h),s.reduce((r,m)=>{let g=JSON.stringify(cg(m));return d.has(g)||(d.add(g),r.push({key:g,link:m})),r},[])}function hg(s,h){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d.pathname==="/"?d.pathname="_root.data":h&&Lt(d.pathname,h)==="/"?d.pathname=`${h.replace(/\/$/,"")}/_root.data`:d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function Em(){let s=v.useContext(go);return rr(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function mg(){let s=v.useContext(Ri);return rr(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var cr=v.createContext(void 0);cr.displayName="FrameworkContext";function Cm(){let s=v.useContext(cr);return rr(s,"You must render this element inside a <HydratedRouter> element"),s}function fg(s,h){let d=v.useContext(cr),[r,m]=v.useState(!1),[g,I]=v.useState(!1),{onFocus:S,onBlur:b,onMouseEnter:p,onMouseLeave:A,onTouchStart:U}=h,z=v.useRef(null);v.useEffect(()=>{if(s==="render"&&I(!0),s==="viewport"){let K=D=>{D.forEach(V=>{I(V.isIntersecting)})},_=new IntersectionObserver(K,{threshold:.5});return z.current&&_.observe(z.current),()=>{_.disconnect()}}},[s]),v.useEffect(()=>{if(r){let K=setTimeout(()=>{I(!0)},100);return()=>{clearTimeout(K)}}},[r]);let Y=()=>{m(!0)},O=()=>{m(!1),I(!1)};return d?s!=="intent"?[g,z,{}]:[g,z,{onFocus:pl(S,Y),onBlur:pl(b,O),onMouseEnter:pl(p,Y),onMouseLeave:pl(A,O),onTouchStart:pl(U,Y)}]:[!1,z,{}]}function pl(s,h){return d=>{s&&s(d),d.defaultPrevented||h(d)}}function pg({page:s,...h}){let{router:d}=Em(),r=v.useMemo(()=>vm(d.routes,s,d.basename),[d.routes,s,d.basename]);return r?v.createElement(gg,{page:s,matches:r,...h}):null}function yg(s){let{manifest:h,routeModules:d}=Cm(),[r,m]=v.useState([]);return v.useEffect(()=>{let g=!1;return sg(s,h,d).then(I=>{g||m(I)}),()=>{g=!0}},[s,h,d]),r}function gg({page:s,matches:h,...d}){let r=Oa(),{manifest:m,routeModules:g}=Cm(),{basename:I}=Em(),{loaderData:S,matches:b}=mg(),p=v.useMemo(()=>om(s,h,b,m,r,"data"),[s,h,b,m,r]),A=v.useMemo(()=>om(s,h,b,m,r,"assets"),[s,h,b,m,r]),U=v.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let O=new Set,K=!1;if(h.forEach(D=>{var W;let V=m.routes[D.route.id];!V||!V.hasLoader||(!p.some(ae=>ae.route.id===D.route.id)&&D.route.id in S&&((W=g[D.route.id])!=null&&W.shouldRevalidate)||V.hasClientLoader?K=!0:O.add(D.route.id))}),O.size===0)return[];let _=hg(s,I);return K&&O.size>0&&_.searchParams.set("_routes",h.filter(D=>O.has(D.route.id)).map(D=>D.route.id).join(",")),[_.pathname+_.search]},[I,S,r,m,p,h,s,g]),z=v.useMemo(()=>ug(A,m),[A,m]),Y=yg(A);return v.createElement(v.Fragment,null,U.map(O=>v.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...d})),z.map(O=>v.createElement("link",{key:O,rel:"modulepreload",href:O,...d})),Y.map(({key:O,link:K})=>v.createElement("link",{key:O,...K})))}function vg(...s){return h=>{s.forEach(d=>{typeof d=="function"?d(h):d!=null&&(d.current=h)})}}var Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mm&&(window.__reactRouterVersion="7.4.0")}catch{}function bg({basename:s,children:h,window:d}){let r=v.useRef();r.current==null&&(r.current=sy({window:d,v5Compat:!0}));let m=r.current,[g,I]=v.useState({action:m.action,location:m.location}),S=v.useCallback(b=>{v.startTransition(()=>I(b))},[I]);return v.useLayoutEffect(()=>m.listen(S),[m,S]),v.createElement(Ky,{basename:s,children:h,location:g.location,navigationType:g.action,navigator:m})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ui=v.forwardRef(function({onClick:h,discover:d="render",prefetch:r="none",relative:m,reloadDocument:g,replace:I,state:S,target:b,to:p,preventScrollReset:A,viewTransition:U,...z},Y){let{basename:O}=v.useContext(yt),K=typeof p=="string"&&Om.test(p),_,D=!1;if(typeof p=="string"&&K&&(_=p,Mm))try{let Q=new URL(window.location.href),L=p.startsWith("//")?new URL(Q.protocol+p):new URL(p),oe=Lt(L.pathname,O);L.origin===Q.origin&&oe!=null?p=oe+L.search+L.hash:D=!0}catch{st(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Ny(p,{relative:m}),[W,ae,Z]=fg(r,z),ce=Ig(p,{replace:I,state:S,target:b,preventScrollReset:A,relative:m,viewTransition:U});function re(Q){h&&h(Q),Q.defaultPrevented||ce(Q)}let he=v.createElement("a",{...z,...Z,href:_||V,onClick:D||g?h:re,ref:vg(Y,ae),target:b,"data-discover":!K&&d==="render"?"true":void 0});return W&&!K?v.createElement(v.Fragment,null,he,v.createElement(pg,{page:V})):he});Ui.displayName="Link";var wg=v.forwardRef(function({"aria-current":h="page",caseSensitive:d=!1,className:r="",end:m=!1,style:g,to:I,viewTransition:S,children:b,...p},A){let U=Il(I,{relative:p.relative}),z=Oa(),Y=v.useContext(Ri),{navigator:O,basename:K}=v.useContext(yt),_=Y!=null&&Tg(U)&&S===!0,D=O.encodeLocation?O.encodeLocation(U).pathname:U.pathname,V=z.pathname,W=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;d||(V=V.toLowerCase(),W=W?W.toLowerCase():null,D=D.toLowerCase()),W&&K&&(W=Lt(W,K)||W);const ae=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let Z=V===D||!m&&V.startsWith(D)&&V.charAt(ae)==="/",ce=W!=null&&(W===D||!m&&W.startsWith(D)&&W.charAt(D.length)==="/"),re={isActive:Z,isPending:ce,isTransitioning:_},he=Z?h:void 0,Q;typeof r=="function"?Q=r(re):Q=[r,Z?"active":null,ce?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let L=typeof g=="function"?g(re):g;return v.createElement(Ui,{...p,"aria-current":he,className:Q,ref:A,style:L,to:I,viewTransition:S},typeof b=="function"?b(re):b)});wg.displayName="NavLink";var jg=v.forwardRef(({discover:s="render",fetcherKey:h,navigate:d,reloadDocument:r,replace:m,state:g,method:I=Ni,action:S,onSubmit:b,relative:p,preventScrollReset:A,viewTransition:U,...z},Y)=>{let O=Sg(),K=Ag(S,{relative:p}),_=I.toLowerCase()==="get"?"get":"post",D=typeof S=="string"&&Om.test(S),V=W=>{if(b&&b(W),W.defaultPrevented)return;W.preventDefault();let ae=W.nativeEvent.submitter,Z=(ae==null?void 0:ae.getAttribute("formmethod"))||I;O(ae||W.currentTarget,{fetcherKey:h,method:Z,navigate:d,replace:m,state:g,relative:p,preventScrollReset:A,viewTransition:U})};return v.createElement("form",{ref:Y,method:_,action:K,onSubmit:r?b:V,...z,"data-discover":!D&&s==="render"?"true":void 0})});jg.displayName="Form";function kg(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(s){let h=v.useContext(go);return He(h,kg(s)),h}function Ig(s,{target:h,replace:d,state:r,preventScrollReset:m,relative:g,viewTransition:I}={}){let S=zy(),b=Oa(),p=Il(s,{relative:g});return v.useCallback(A=>{if(ng(A,h)){A.preventDefault();let U=d!==void 0?d:wl(b)===wl(p);S(s,{replace:U,state:r,preventScrollReset:m,relative:g,viewTransition:I})}},[b,S,p,d,r,h,s,m,g,I])}var qg=0,xg=()=>`__${String(++qg)}__`;function Sg(){let{router:s}=Nm("useSubmit"),{basename:h}=v.useContext(yt),d=Qy();return v.useCallback(async(r,m={})=>{let{action:g,method:I,encType:S,formData:b,body:p}=og(r,h);if(m.navigate===!1){let A=m.fetcherKey||xg();await s.fetch(A,d,m.action||g,{preventScrollReset:m.preventScrollReset,formData:b,body:p,formMethod:m.method||I,formEncType:m.encType||S,flushSync:m.flushSync})}else await s.navigate(m.action||g,{preventScrollReset:m.preventScrollReset,formData:b,body:p,formMethod:m.method||I,formEncType:m.encType||S,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,h,d])}function Ag(s,{relative:h}={}){let{basename:d}=v.useContext(yt),r=v.useContext(Rt);He(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),g={...Il(s||".",{relative:h})},I=Oa();if(s==null){g.search=I.search;let S=new URLSearchParams(g.search),b=S.getAll("index");if(b.some(A=>A==="")){S.delete("index"),b.filter(U=>U).forEach(U=>S.append("index",U));let A=S.toString();g.search=A?`?${A}`:""}}return(!s||s===".")&&m.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(g.pathname=g.pathname==="/"?d:Dt([d,g.pathname])),wl(g)}function Tg(s,h={}){let d=v.useContext(qm);He(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nm("useViewTransitionState"),m=Il(s,{relative:h.relative});if(!d.isTransitioning)return!1;let g=Lt(d.currentLocation.pathname,r)||d.currentLocation.pathname,I=Lt(d.nextLocation.pathname,r)||d.nextLocation.pathname;return Li(m.pathname,I)!=null||Li(m.pathname,g)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cg=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,d,r)=>r?r.toUpperCase():d.toLowerCase()),lm=s=>{const h=Cg(s);return h.charAt(0).toUpperCase()+h.slice(1)},zm=(...s)=>s.filter((h,d,r)=>!!h&&h.trim()!==""&&r.indexOf(h)===d).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=v.forwardRef(({color:s="currentColor",size:h=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:m="",children:g,iconNode:I,...S},b)=>v.createElement("svg",{ref:b,...Mg,width:h,height:h,stroke:s,strokeWidth:r?Number(d)*24/Number(h):d,className:zm("lucide",m),...S},[...I.map(([p,A])=>v.createElement(p,A)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(s,h)=>{const d=v.forwardRef(({className:r,...m},g)=>v.createElement(Og,{ref:g,iconNode:h,className:zm(`lucide-${Eg(lm(s))}`,`lucide-${s}`,r),...m}));return d.displayName=lm(s),d};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],im=pe("arrow-up-down",Ng);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],sm=pe("audio-waveform",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],Lg=pe("baby",Dg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bg=pe("book-open",Rg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dr=pe("chevron-down",Ug);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hr=pe("chevron-up",Yg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],um=pe("circle-alert",_g);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],rm=pe("circle-check-big",Jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yl=pe("circle-help",Hg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],cm=pe("clock",Gg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],dm=pe("download",Qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],mr=pe("fast-forward",Wg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],hm=pe("file-text",Vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],mm=pe("funnel",Xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Zg=pe("grid-3x3",Kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],fm=pe("headphones",Pg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],$g=pe("house",Fg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Dm=pe("info",ev);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],tv=pe("list",nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],gl=pe("medal",av);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],lv=pe("mic",ov);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],yo=pe("music",iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],vl=pe("pause",sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],bl=pe("play",uv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],cv=pe("plus",rv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],fr=pe("rewind",dv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],mv=pe("rotate-ccw",hv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],pv=pe("search",fv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Di=pe("shuffle",yv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],vv=pe("skip-forward",gv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],wv=pe("skull",bv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],kv=pe("sliders-vertical",jv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],qv=pe("table",Iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],Sv=pe("timer-off",xv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],Tv=pe("timer-reset",Av);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Cv=pe("timer",Ev);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ov=pe("trash-2",Mv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],er=pe("trophy",Nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Dv=pe("users",zv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],pr=pe("volume-2",Lv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Lm=pe("volume-x",Rv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ca=pe("x",Bv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],nr=pe("zap",Uv),Yv=()=>i.jsx("main",{className:"accueil",children:i.jsxs("div",{className:"accueil-container",children:[i.jsxs("header",{className:"accueil-header",children:[i.jsx(yo,{className:"logo",size:48}),i.jsx("h1",{children:"BlindTest Master"})]}),i.jsxs("section",{className:"intro",children:[i.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),i.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),i.jsxs("section",{className:"manches-preview",children:[i.jsxs("div",{className:"manche-card",children:[i.jsx("h3",{children:"Manche 1"}),i.jsx("p",{children:"Easy BlindTest"}),i.jsx("span",{className:"emoji",children:"🎵"})]}),i.jsxs("div",{className:"manche-card",children:[i.jsx("h3",{children:"Manche 2"}),i.jsx("p",{children:"dnilBtseT"}),i.jsx("span",{className:"emoji",children:"🎙️"})]}),i.jsxs("div",{className:"manche-card",children:[i.jsx("h3",{children:"Manche 3"}),i.jsx("p",{children:"X-trem BlindTest"}),i.jsx("span",{className:"emoji",children:"🔀"})]})]}),i.jsx(Ui,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),_v=({manche:s})=>s?i.jsxs("section",{className:"info-manche",children:[i.jsxs("div",{className:"manche-header",children:[i.jsx("span",{className:"manche-emoji",children:s.emoji}),i.jsxs("h2",{children:["Manche ",s.id,": ",s.nom]})]}),i.jsxs("div",{className:"manche-details",children:[i.jsx("p",{children:s.description}),i.jsx("p",{className:"points-info",children:s.points})]})]}):null,Jv=({chanson:s,afficherTitre:h,afficherArtiste:d,afficherParoles:r,mancheActuelle:m,isModifiedAudio:g,isOpen:I=!0,onClose:S=()=>{},onVerify:b=()=>{}})=>{const[p,A]=v.useState(!1),[U,z]=v.useState(!1),[Y,O]=v.useState(!1),[K,_]=v.useState(0),[D,V]=v.useState(0),[W,ae]=v.useState(!1),[Z,ce]=v.useState(r),re=v.useRef(null),he=v.useRef(null),Q=v.useRef(null);if(v.useEffect(()=>{ce(r)},[r]),v.useEffect(()=>{if(s){const T=re.current;if(T){const X=()=>_(T.currentTime),E=()=>V(T.duration),N=()=>A(!1);return T.addEventListener("timeupdate",X),T.addEventListener("loadedmetadata",E),T.addEventListener("ended",N),()=>{T.removeEventListener("timeupdate",X),T.removeEventListener("loadedmetadata",E),T.removeEventListener("ended",N)}}}},[s]),v.useEffect(()=>{if(he.current){const T=()=>z(!1);return he.current.addEventListener("ended",T),()=>{he.current&&he.current.removeEventListener("ended",T)}}},[he.current]),v.useEffect(()=>{ae(!1)},[s]),!s)return null;const L=()=>{re.current&&(p?re.current.pause():(U&&he.current&&(he.current.pause(),z(!1)),re.current.play().catch(T=>console.error("Erreur lors de la lecture audio:",T))),A(!p))},oe=()=>{re.current&&(re.current.muted=!Y,he.current&&(he.current.muted=!Y),O(!Y))},be=T=>{if(isNaN(T))return"0:00";const X=Math.floor(T/60),E=Math.floor(T%60).toString().padStart(2,"0");return`${X}:${E}`},Ye=()=>{const T=document.createElement("a");T.href=s.audioUrl,T.download=`${s.artiste} - ${s.titre}.mp3`,document.body.appendChild(T),T.click(),document.body.removeChild(T)},ln=T=>{if(re.current&&D){const E=T.currentTarget.getBoundingClientRect(),$=(T.clientX-E.left)/E.width*D;re.current.currentTime=$,_($)}},Ge=T=>{if(Q.current&&re.current&&D){const X=Q.current.getBoundingClientRect(),N=Math.max(0,Math.min(1,(T.clientX-X.left)/X.width))*D;re.current.currentTime=N,_(N)}},H=T=>{ln(T);const X=N=>{Ge(N)},E=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",E)},ie=()=>{re.current&&(re.current.currentTime=Math.min(re.current.duration,re.current.currentTime+10))},ee=()=>{re.current&&(re.current.currentTime=Math.max(0,re.current.currentTime-10))},qe=()=>{switch(m){case 2:return"Version inversée";case 3:return"Version modifiée";default:return""}},y=()=>{ce(!Z)};return i.jsxs("div",{className:`affichage-chanson ${I?"modal-open":""}`,children:[i.jsx("div",{className:"modal-overlay",onClick:S}),i.jsxs("div",{className:"modal-content",children:[i.jsx("button",{className:"modal-close-btn",onClick:S,children:i.jsx(Ca,{size:18})}),i.jsx("audio",{ref:re,src:s.audioUrl,onEnded:()=>A(!1)}),i.jsxs("div",{className:"chanson-info",children:[h&&i.jsx("h2",{className:"chanson-titre",children:s.titre}),d&&i.jsx("h3",{className:"chanson-artiste",children:s.artiste}),i.jsxs("div",{className:"chanson-player",children:[g&&i.jsx("div",{className:"player-badge",children:qe()}),i.jsxs("div",{className:"player-controls",children:[i.jsx("button",{className:"control-button rewind",onClick:ee,"aria-label":"Reculer de 10 secondes",children:i.jsx(fr,{size:20})}),i.jsx("button",{className:"control-button play-pause",onClick:L,"aria-label":p?"Pause":"Lecture",children:p?i.jsx(vl,{size:20}):i.jsx(bl,{size:20})}),i.jsx("button",{className:"control-button forward",onClick:ie,"aria-label":"Avancer de 10 secondes",children:i.jsx(mr,{size:20})}),i.jsxs("div",{className:"progress-container",children:[i.jsx("div",{className:"time current-time",children:be(K)}),i.jsx("div",{className:"progress-bar",ref:Q,onClick:ln,onMouseDown:H,children:i.jsx("div",{className:"progress-fill",style:{width:`${D?K/D*100:0}%`}})}),i.jsx("div",{className:"time duration",children:be(D)})]}),i.jsx("button",{className:"control-button mute",onClick:oe,"aria-label":Y?"Activer le son":"Couper le son",children:Y?i.jsx(Lm,{size:20}):i.jsx(pr,{size:20})}),i.jsx("button",{className:"control-button download",onClick:Ye,"aria-label":"Télécharger",children:i.jsx(dm,{size:20})})]})]})]}),i.jsxs("div",{className:"modal-actions",children:[i.jsxs("button",{className:"modal-action-btn download",onClick:Ye,children:[i.jsx(dm,{size:18}),i.jsx("span",{children:"Télécharger la chanson"})]}),i.jsxs("button",{className:"modal-action-btn lyrics",onClick:y,children:[i.jsx(hm,{size:18}),i.jsx("span",{children:Z?"Masquer les paroles":"Afficher les paroles"})]})]}),Z&&s.paroles&&i.jsxs("div",{className:"chanson-paroles",children:[i.jsxs("h4",{children:[i.jsx(hm,{size:18}),"Paroles"]}),i.jsx("div",{className:"paroles-content",children:s.paroles.split(`
`).map((T,X)=>i.jsx("p",{children:T||i.jsx("br",{})},X))})]})]})]})},Hv=({teams:s=[],onAddTeam:h,onRemoveTeam:d,onAddPoints:r})=>{const[m,g]=v.useState(""),[I,S]=v.useState(!1),[b,p]=v.useState({}),[A,U]=v.useState({}),[z,Y]=v.useState(!1),[O,K]=v.useState(null),_=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];v.useEffect(()=>{const L={};s.forEach(oe=>{L[oe.id]=oe.score}),U(L)},[s]);const D=()=>{if(m.trim()==="")return;const L={id:Date.now().toString(),name:m,score:0,color:_[s.length%_.length]};h(L),g("")},V=L=>{L.key==="Enter"&&D()},W=()=>{S(!0)},ae=()=>{S(!1),K(null)},Z=()=>{Y(!z)},ce=L=>{K(O===L?null:L)},re=(L,oe)=>{U(be=>({...be,[L]:(be[L]||0)+oe})),r(L,oe),p(be=>({...be,[L]:oe})),setTimeout(()=>{p(be=>{const Ye={...be};return delete Ye[L],Ye})},1e3)},he=[...s].sort((L,oe)=>oe.score-L.score),Q=L=>{var oe;return A[L]!==void 0?A[L]:((oe=s.find(be=>be.id===L))==null?void 0:oe.score)||0};return i.jsxs("div",{className:"team-manager-container",children:[i.jsxs("button",{className:"team-manager-button",onClick:W,children:[i.jsx(er,{size:20}),i.jsx("span",{children:"Équipes & Scores"})]}),i.jsxs("button",{className:"leaderboard-floating-button",onClick:Z,children:[i.jsx(gl,{size:20}),i.jsx("span",{children:"Classement"})]}),z&&i.jsxs("div",{className:"floating-leaderboard",children:[i.jsxs("div",{className:"floating-leaderboard-header",children:[i.jsx("h3",{children:"Classement"}),i.jsx("button",{className:"close-leaderboard",onClick:Z,children:i.jsx(Ca,{size:18})})]}),he.length>0?i.jsx("div",{className:"floating-leaderboard-content",children:he.map((L,oe)=>i.jsxs("div",{className:`floating-leaderboard-item ${oe===0?"first-place":oe===1?"second-place":oe===2?"third-place":""}`,children:[i.jsxs("div",{className:"leaderboard-position",children:[oe===0&&i.jsx(er,{size:16,className:"gold-trophy"}),oe===1&&i.jsx(gl,{size:16,className:"silver-medal"}),oe===2&&i.jsx(gl,{size:16,className:"bronze-medal"}),oe>2&&i.jsxs("span",{children:["#",oe+1]})]}),i.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:L.color}}),i.jsx("div",{className:"leaderboard-team-name",children:L.name}),i.jsx("div",{className:"leaderboard-team-score",children:Q(L.id)})]},L.id))}):i.jsx("div",{className:"floating-leaderboard-empty",children:i.jsx("p",{children:"Aucune équipe"})})]}),I&&i.jsx("div",{className:"team-modal-overlay",onClick:ae,children:i.jsxs("div",{className:"team-modal",onClick:L=>L.stopPropagation(),children:[i.jsx("button",{className:"close-modal",onClick:ae,children:i.jsx(Ca,{size:24})}),i.jsx("div",{className:"modal-header",children:i.jsx("h2",{children:"Gestion des Équipes & Scores"})}),i.jsxs("div",{className:"unified-team-tab",children:[i.jsxs("div",{className:"add-team-form",children:[i.jsx("input",{type:"text",value:m,onChange:L=>g(L.target.value),onKeyDown:V,placeholder:"Nom de l'équipe",maxLength:20}),i.jsxs("button",{className:"add-team-button",onClick:D,disabled:m.trim()==="",children:[i.jsx(cv,{size:16}),"Ajouter une équipe"]})]}),s.length>0?i.jsx("div",{className:"teams-list",children:he.map((L,oe)=>i.jsxs("div",{className:`team-item ${O===L.id?"expanded":""} ${oe===0?"first-place":oe===1?"second-place":oe===2?"third-place":""}`,children:[i.jsxs("div",{className:"team-item-header",onClick:()=>ce(L.id),children:[i.jsxs("div",{className:"team-rank",children:[oe===0&&i.jsx(er,{size:16,className:"gold-trophy"}),oe===1&&i.jsx(gl,{size:16,className:"silver-medal"}),oe===2&&i.jsx(gl,{size:16,className:"bronze-medal"}),oe>2&&i.jsxs("span",{className:"rank-number",children:["#",oe+1]})]}),i.jsx("div",{className:"team-color",style:{backgroundColor:L.color}}),i.jsx("div",{className:"team-name",children:L.name}),i.jsxs("div",{className:"team-score-display",children:[i.jsx("span",{className:"score-value",children:Q(L.id)}),b[L.id]&&i.jsx("span",{className:`score-animation ${b[L.id]<0?"negative":"positive"}`,children:b[L.id]>0?`+${b[L.id]}`:b[L.id]})]}),i.jsx("button",{className:"expand-toggle",children:O===L.id?i.jsx(hr,{size:18}):i.jsx(dr,{size:18})})]}),O===L.id&&i.jsx("div",{className:"team-actions",children:i.jsxs("div",{className:"team-actions-inner",children:[i.jsxs("div",{className:"point-buttons",children:[i.jsx("h4",{children:"Ajouter des points"}),i.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(be=>i.jsx("button",{className:`point-button ${be<0?"negative":""}`,style:{backgroundColor:be<0?"#ffeeee":`${L.color}20`,borderColor:be<0?"#e74c3c":L.color,color:be<0?"#e74c3c":void 0},onClick:()=>re(L.id,be),children:be>0?`+${be}`:be},be))})]}),i.jsxs("button",{className:"delete-team-button",onClick:()=>d(L.id),children:[i.jsx(Ov,{size:16}),i.jsx("span",{children:"Supprimer l'équipe"})]})]})})]},L.id))}):i.jsxs("div",{className:"no-teams",children:[i.jsx("p",{children:"Aucune équipe ajoutée"}),i.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]})]})})]})},Gv=({onEffectsChange:s,isExpanded:h,toggleExpanded:d,currentEffects:r,isPlaying:m,mancheActuelle:g})=>{const[I,S]=v.useState(r.distortion||5e3),[b,p]=v.useState(r.pitchShift||.6),[A,U]=v.useState(r.wahFrequency||1),[z,Y]=v.useState(r.wahDepth||.3),[O,K]=v.useState(r.growlAmount||.03),[_,D]=v.useState(null),[V,W]=v.useState(!0),[ae,Z]=v.useState(5),ce=v.useRef(null),re=v.useRef(!0),he=v.useRef(null),Q=v.useRef(!1);v.useEffect(()=>{if(g!==3||!m||!V){clearInterval(ce.current),ce.current=null;return}if(!Q.current)return ce.current||(Z(5),ce.current=setInterval(()=>{Z(E=>E<=1?(Q.current||ie(),5):E-1)},1e3)),()=>{clearInterval(ce.current),ce.current=null}},[g,m,V,Q.current]),v.useEffect(()=>{if(re.current){re.current=!1;return}S(r.distortion),p(r.pitchShift),U(r.wahFrequency),Y(r.wahDepth),K(r.growlAmount)},[r]);const L=()=>{Q.current=!0,he.current&&clearTimeout(he.current),he.current=setTimeout(()=>{Q.current=!1},1e4)},oe=E=>{L();const N=Number.parseInt(E.target.value);S(N),s({distortion:N,pitchShift:b,wahFrequency:A,wahDepth:z,growlAmount:O})},be=E=>{L();const N=Number.parseFloat(E.target.value);p(N),s({distortion:I,pitchShift:N,wahFrequency:A,wahDepth:z,growlAmount:O})},Ye=E=>{L();const N=Number.parseFloat(E.target.value);U(N),s({distortion:I,pitchShift:b,wahFrequency:N,wahDepth:z,growlAmount:O})},ln=E=>{L();const N=Number.parseFloat(E.target.value);Y(N),s({distortion:I,pitchShift:b,wahFrequency:A,wahDepth:N,growlAmount:O})},Ge=E=>{L();const N=Number.parseFloat(E.target.value);K(N),s({distortion:I,pitchShift:b,wahFrequency:A,wahDepth:z,growlAmount:N})},H=()=>{L();const E={distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03};S(E.distortion),p(E.pitchShift),U(E.wahFrequency),Y(E.wahDepth),K(E.growlAmount),s(E)},ie=()=>{const E={distortion:Math.floor(Math.random()*4e4)+5e3,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*3+.5,wahDepth:Math.random()*.3+.1,growlAmount:Math.random()*.3};S(E.distortion),p(E.pitchShift),U(E.wahFrequency),Y(E.wahDepth),K(E.growlAmount),s(E)},ee=()=>{L();const E={distortion:6e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:5,wahDepth:.4,growlAmount:.5};S(E.distortion),p(E.pitchShift),U(E.wahFrequency),Y(E.wahDepth),K(E.growlAmount),s(E)},qe=()=>{L();const E={...r,pitchShift:.2};p(E.pitchShift),s(E)},y=()=>{L();const E={...r,pitchShift:3.5};p(E.pitchShift),s(E)},T=()=>{W(!V)},X={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return i.jsxs("div",{className:`audio-effects-controller ${h?"expanded":"collapsed"}`,children:[i.jsxs("div",{className:"effects-header",onClick:d,children:[i.jsx(kv,{size:16}),i.jsx("h3",{children:"Effets Audio"}),g===3&&m&&V&&i.jsx("div",{className:"auto-change-indicator",children:i.jsxs("span",{className:"countdown",children:[ae,"s"]})}),i.jsx("span",{className:"toggle-icon",children:h?i.jsx(dr,{size:14}):i.jsx(hr,{size:14})})]}),h&&i.jsxs("div",{className:"effects-content",children:[g===3&&i.jsxs("div",{className:"auto-change-toggle",children:[i.jsx("button",{className:`auto-change-button ${V?"active":""}`,onClick:T,title:V?"Désactiver le changement automatique":"Activer le changement automatique",children:V?i.jsxs(i.Fragment,{children:[i.jsx(cm,{size:14}),i.jsx("span",{children:"Auto (ON)"})]}):i.jsxs(i.Fragment,{children:[i.jsx(cm,{size:14}),i.jsx("span",{children:"Auto (OFF)"})]})}),i.jsx("div",{className:"auto-change-info",children:V?"Les effets changent automatiquement toutes les 5 secondes":"Changement automatique désactivé"})]}),i.jsxs("div",{className:"voice-presets",children:[i.jsxs("button",{className:"voice-preset deep",onClick:qe,children:[i.jsx(wv,{size:14}),i.jsx("span",{children:"Monstre"})]}),i.jsxs("button",{className:"voice-preset chipmunk",onClick:y,children:[i.jsx(Lg,{size:14}),i.jsx("span",{children:"Chipmunk"})]})]}),i.jsxs("div",{className:"effect-group",children:[i.jsxs("label",{className:"effect-label",children:[i.jsx(nr,{size:14}),i.jsx("span",{children:"Distorsion"}),i.jsxs("span",{className:"help-container",children:[i.jsx(yl,{size:14,className:"help-icon",onMouseEnter:()=>D("distortion"),onMouseLeave:()=>D(null)}),i.jsx("span",{className:"effect-value",children:I})]}),_==="distortion"&&i.jsx("div",{className:"tooltip",children:X.distortion})]}),i.jsx("input",{type:"range",min:"1000",max:"70000",step:"1000",value:I,onChange:oe,className:"effect-slider"})]}),i.jsxs("div",{className:"effect-group",children:[i.jsxs("label",{className:"effect-label",children:[i.jsx(pr,{size:14}),i.jsx("span",{children:"Hauteur"}),i.jsxs("span",{className:"help-container",children:[i.jsx(yl,{size:14,className:"help-icon",onMouseEnter:()=>D("pitchShift"),onMouseLeave:()=>D(null)}),i.jsx("span",{className:"effect-value",children:b.toFixed(2)})]}),_==="pitchShift"&&i.jsx("div",{className:"tooltip",children:X.pitchShift})]}),i.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:b,onChange:be,className:"effect-slider"})]}),i.jsxs("div",{className:"effect-group",children:[i.jsxs("label",{className:"effect-label",children:[i.jsx(sm,{size:14}),i.jsx("span",{children:"Wah-Freq"}),i.jsxs("span",{className:"help-container",children:[i.jsx(yl,{size:14,className:"help-icon",onMouseEnter:()=>D("wahFrequency"),onMouseLeave:()=>D(null)}),i.jsx("span",{className:"effect-value",children:A.toFixed(1)})]}),_==="wahFrequency"&&i.jsx("div",{className:"tooltip",children:X.wahFrequency})]}),i.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:A,onChange:Ye,className:"effect-slider"})]}),i.jsxs("div",{className:"effect-group",children:[i.jsxs("label",{className:"effect-label",children:[i.jsx(sm,{size:14}),i.jsx("span",{children:"Wah-Prof"}),i.jsxs("span",{className:"help-container",children:[i.jsx(yl,{size:14,className:"help-icon",onMouseEnter:()=>D("wahDepth"),onMouseLeave:()=>D(null)}),i.jsx("span",{className:"effect-value",children:z.toFixed(2)})]}),_==="wahDepth"&&i.jsx("div",{className:"tooltip",children:X.wahDepth})]}),i.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:z,onChange:ln,className:"effect-slider"})]}),i.jsxs("div",{className:"effect-group",children:[i.jsxs("label",{className:"effect-label",children:[i.jsx(nr,{size:14}),i.jsx("span",{children:"Grognement"}),i.jsxs("span",{className:"help-container",children:[i.jsx(yl,{size:14,className:"help-icon",onMouseEnter:()=>D("growlAmount"),onMouseLeave:()=>D(null)}),i.jsxs("span",{className:"effect-value",children:[(O*100).toFixed(0),"%"]})]}),_==="growlAmount"&&i.jsx("div",{className:"tooltip",children:X.growlAmount})]}),i.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:O,onChange:Ge,className:"effect-slider"})]}),i.jsxs("div",{className:"effects-buttons",children:[i.jsxs("button",{className:"random-button",onClick:ie,children:[i.jsx(Di,{size:14}),"Aléatoire"]}),i.jsxs("button",{className:"extreme-button",onClick:ee,children:[i.jsx(nr,{size:14}),"Extrême"]}),i.jsxs("button",{className:"reset-button",onClick:H,children:[i.jsx(mv,{size:14}),"Réinitialiser"]})]})]})]})},pm=[{id:1,nom:"Easy BlindTest",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"dnilBtseT",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],Oi=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
C'était celui dans face, oui tu l'as déjà vu
Il partageait ton car dans les matins, méchants
Tu riais de lui car il était différent
Aujourd'hui c'est toujours la même histoire
Dans la vie ou dans les bruits de couloir

Dans les beaux bureaux en glace
Comme dans les couloirs d'école
C'est toujours l'effet de masse
Qui nous casse et nous isole
Sur les écrans, sous des masques
Dans des regards qui rigolent
C'est toujours l'effet de masse
Qui nous casse et nous isole

Il était dans ma classe, il vivait dans ta rue
C'était celui qui passe mais son nom je sais plus
Qu'est ce qu'on peut être idiot quand on est plus nombreux
Je l'avoue, le cœur gros, oui j'ai ris avec eux
Aujourd'hui c'est toujours la même histoire
Dans la vie ou dans les bruits de couloir

Dans les beaux bureaux en glace
Comme dans toutes les cours d'école
C'est toujours l'effet de masse
Qui nous classe et qui nous cogne
Sur les écrans, sous des masques
Dans des regards qui rigolent
C'est toujours l'effet de masse
Qui nous casse et nous isole

Il était à l'écart et on était plusieurs
Il faut un faire valoir pour se sentir meilleur
Il était dans ma classe, il vivait dans ta rue
C'était celui d'en face
On ne l'a plus jamais vu`},{id:2,titre:"Lean On",artiste:"Major Lazer ft. DJ Snake & MO",audioUrl:"./audio/Lean-On.mp3",paroles:`Do you recall, not long ago
We would walk on the sidewalk?
Innocent, remember?
All we did was care for each other
But the night was warm
We were bold and young
All around, the wind blows
We would only hold on to let go

Blow a kiss, fire a gun
We need someone to lean on
Blow a kiss, fire a gun
All we need is somebody to lean on
Blow a kiss, fire a gun
We need someone to lean on
Blow a kiss, fire a gun
A-A-All we need is somebody to lean on

What will we do when we get old?
Will we walk down the same road?
Will you be there by my side?
Standin' strong as the waves roll over
When the nights are long
Longing for you to come home
All around, the wind blows
We would only hold on to let go

Blow a kiss, fire a gun
We need someone to lean on
Blow a kiss, fire a gun
All we need is somebody to lean on (hey)
Blow a kiss, fire a gun
We need someone to lean on
Blow a kiss, fire a gun
A-A-All we need is somebody to lean on

All we need is somebody to lean on
(We need someone to lean on, hey)
(Hey, hey)
A-A-All we need is somebody to lean on
(Major Lazer, hey)

Oh, oh-oh
(Hey, hey, hey, hey)
(Hey, hey, hey, hey, hey)

Blow a kiss, fire a gun (hey, hey)
We need someone to lean on (hey, hey)
Blow a kiss, fire a gun (hey, hey)
All we need is somebody to lean on (hey, hey)
Blow a kiss, fire a gun (hey, hey)
We need someone to lean on (hey, hey)
Blow a kiss, fire a gun (hey, hey)
A-A-All we need is somebody to lean on (hey, hey)`},{id:3,titre:"Waka Waka (Spanish Version)",artiste:"Shakira",audioUrl:"./audio/Waka-Waka_Spanish.mp3",paroles:`Llegó el momento, caen las murallas
Va a comenzar la única justa de las batallas
No duele el golpe, no existe el miedo
Quítate el polvo, ponte de pie, y vuelves al ruedo

Y la presión se siente
Espera en ti tu gente

Ahora vamos por todo
Y te acompaña la suerte
Tsamina mina zangalewa
Porque esto es África

Tsamina mina, eh eh
Waka waka, eh eh
Tsamina mina zangalewa
Porque esto es África

Oye a tu Dios y no estarás solo
Llegaste aquí para brillar, lo tienes todo
La hora se acerca, es el momento
Vas a ganar cada batalla, ya lo presiento

Hay que empezar de cero
Para tocar el cielo

Ahora vamos por todo
Y todos vamos por ellos
Tsamina mina zangalewa
Porque esto es África

Tsamina mina, eh eh
Waka waka, eh eh
Tsamina mina zangalewa
Anawa ah ah

Tsamina mina, eh eh
Waka waka, eh eh
Tsamina mina zangalewa
Porque esto es África

Tsamina mina
Tsamina mina zangalewa
Porque esto es África

Tsamina mina, eh eh
Waka waka, eh eh
Tsamina mina zangalewa
Anawa ah ah

Tsamina mina, eh eh
Waka waka, eh eh
Tsamina mina zangalewa
Porque esto es África

Django, eh eh
Django, eh eh
Tsamina mina zangalewa
Anawa ah ah

Django, eh eh
Django, eh eh
Tsamina mina zangalewa
Anawa ah ah

Porque esto es África
Porque esto es África
We're all Africa
We're all Africa`},{id:4,titre:"Le temps",artiste:"Tayc",audioUrl:"./audio/Tayc-Le temps.mp3",paroles:`Eeh
Eeh-eeh-eeh
Oh, ooh
Tayc day Tayc
Wanna do, wanna do, wanna do, wanna do, wanna do, wanna do, wanna do
Mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh

Oh, le temps, le temps m'a réparé
Plus rien n'est comme avant
Quelqu'un m'a déjà soigné
Ooh, le vent, le vent a bien tourné
Ne gaspille pas mon temps
Une autre a su me soigner

Toi là, tu disparais sans laisser un mot
T'as préféré fuir comme un enfant
Partir sans te retourner
J't'ai prêté mon cœur et tu lui as donné ton dos
Toi, tu m'as fait gaspiller mon temps
Tu m'as pas laissé parler (ah, hee)
Et maintenant (maintenant)
Tu reviens (tu reviens)
Et comme avant (comme avant)
Tu espères retrouver celui qui t'a aimé
Celui avec qui t'as joué, ah
Et maintenant, maintenant c'est toi qui veux parler
Et toutes tes meilleures phrases tu veux les caler
Ne gaspille pas mon temps, yeah, yeah

Oh, le temps, le temps m'a réparé
Plus rien n'est comme avant
Quelqu'un m'a déjà soigné
Ooh, le vent, le vent a bien tourné
Ne gaspille pas mon temps
Une autre a su me soigner

Ne me fais pas croire
Que j'n'ai pas fait ce qu'il faut
Moi je t'ai fait passer avant tout
J'en ai perdu la raison
Sans aucun remords
Toi, t'as tout jeté à l'eau, oh-oh
J'étais devenu accro à ton goût
Le goût de ton poison, eh yeah
Mais maintenant, yeah
Moi ça va, avec toi
J'avais comme l'impression de devoir supplier
Pour quelque chose que tu me dois, non
Et maintenant toi tu veux enfin m'entendre
Où on s'est arrêtés, tu veux reprendre
Ne gaspille pas mon temps, non-non, non-non

Oh, le temps, le temps m'a réparé (ooh)
Plus rien n'est comme avant
Quelqu'un m'a déjà soigné (ooh)
Ooh, le vent, le vent a bien tourné
Ne gaspille pas mon temps
Une autre a su me soigner

Oh, yeah, yeah, yeah
Wanna do, wanna do, wanna do, wanna do, wanna do, wanna do, wanna do
Mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh
Ouh je ne céderai pas, yeah
Wanna do, wanna do, wanna do, wanna do, wanna do, wanna do, wanna do
Mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh, mami ouh
Tayc day Tayc`},{id:5,titre:"Laissons entrer le soleil",artiste:"Julien Clerc",audioUrl:"./audio/Julien-Clerc_Laissons-entrer-le-soleil.mp3",paroles:`On se guette
Traqués, à bout de souffle marchant
Pétrifiés dans nos manteaux d'hiver
Refoulés aux frontières du mensonge des nations qui crèvent

Tués par des rêves chimériques
Écrasés de certitudes
Dans un monde glacé de solitude

Savoir
Si quelque part il y a l'espoir
D'être un jour les enfants du hasard
Je vois ma vie projeter son futur dans l'espace

Et le silence me répond
En secret
Parker, j'ai l'impression de mourir

Manchester, England, England
Manchester, England, England

Au bout de l'atlantique
Je suis un génie, génie
Et je crois en Dieu
Et je crois que Dieu
En Claude a foi
Et Claude
C'est moi, c'est moi

On se guette
Traqués, à bout de souffle marchant
Pétrifiés dans nos manteaux d'hiver
Refoulés aux frontières du mensonge des nations qui crèvent

Tués par des rêves chimériques
Écrasés de certitudes
Dans un monde glacé de solitude

Chantons
Nos rêves d'espoir sur un sitar
Sitar
De toi le roi est né et chantons
La vie qui est en nous et autour de nous

Laissons, laissons entrer le soleil
Laissons, laissons
Laissez, laissez entrer le soleil
Laissez, laissez

Let the sun shine
Let the sun shine in
The sun shine in

Let the sun shine
Let the sun shine in
The sun shine in

Let the sun shine
Let the sun shine in
The sun shine in`},{id:6,titre:"Les yeux de la mama",artiste:"Kendji Girac",audioUrl:"./audio/Les-yeux-de-la-mama.mp3",paroles:`Quand j'ai froid elle se fait lumière
Comme un soleil dans l'existence
Quand j'ai mal elle se fait prière
Elle me dit tout dans un silence
Quand je souffre, elle souffre avec moi
Quand je ris, elle rit aux éclats
Mes chansons sont souvent pour elle
Elle sera toujours ma merveille
Quand je n'suis pas à la hauteur
Elle m'élève plus haut que le ciel
Elle est la splendeur des splendeurs
Elle est la sève, elle est le miel
C'est son sang qui coule dans mes veines
Et des souvenirs par centaines
Bercent mon cœur de mille étoiles
Elle est ma quête, elle est mon Graal

Oh mon Dieu, laissez-les moi
Les beaux yeux de la Mama
Enlevez-moi même tout le reste
Mais pas la douceur de ses gestes
Elle m'a porté avant le monde
Elle me porte encore chaque seconde
Elle m'emportera avec elle
Je lui serai toujours fidèle

Quand je me blesse elle est douceur
Comme une caresse dans l'existence
Quand j'abandonne elle devient lionne
Et me relève avec patience
Quand j'ai la folie des grandeurs
Elle me ramène sans me faire mal
Elle est dans ce monde infernal
Mon étoile parmi les étoiles

Oh mon Dieu, laissez-les moi
Les beaux yeux de la Mama
Enlevez-moi même tout le reste
Mais pas la douceur de ses gestes
Elle m'a porté avant le monde
Elle me porte encore chaque seconde
Elle m'emportera avec elle
Je lui serai toujours fidèle

Oh mon Dieu, laissez-les moi
Les beaux yeux de la Mama
Enlevez-moi même tout le reste
Mais pas la douceur de ses gestes
Elle m'a porté avant le monde
Elle me porte encore chaque seconde
Elle m'emportera avec elle
Je lui serai toujours fidèle

Oh mon Dieu, laissez-les moi
Les beaux yeux de la Mama
Enlevez-moi même tout le reste
Mais pas la douceur de ses gestes
Elle m'a porté avant le monde
Elle me porte encore chaque seconde
Elle m'emportera avec elle
Je lui serai toujours fidèle`},{id:7,titre:"The Show Must Go On",artiste:"Queen",audioUrl:"./audio/The-Show-Must-Go-On.mp3",paroles:`Empty spaces, what are we living for?
Abandoned places, I guess we know the score
On and on
Does anybody know what we are looking for?
Another hero, another mindless crime
Behind the curtain, in the pantomime
Hold the line
Does anybody want to take it anymore?

The show must go on
The show must go on
Yeah
Inside my heart is breaking
My make-up may be flaking
But my smile still stays on

Whatever happens, I'll leave it all to chance
Another heartache, another failed romance
On and on
Does anybody know what we are living for?
I guess I'm learning (I'm learning), I must be warmer now
I'll soon be turning (turning, turning, turning), 'round the corner now
Outside the dawn is breaking
But inside in the dark I'm aching to be free

The show must go on
The show must go on, yeah, yeah
Ooh, inside my heart is breaking
My make-up may be flaking
But my smile still stays on

Yeah, yeah
Oh, whoa, whoa
Oh, whoa
My soul is painted like the wings of butterflies
Fairy tales of yesterday will grow but never die
I can fly, my friends

The show must go on, yeah
The show must go on
I'll face it with a grin
I'm never givin' in
On with the show

Ooh, I'll top the bill, I'll overkill
I have to find the will to carry on
(On with the show, on with the show)
Show
(The show must go on, go on)`},{id:8,titre:"Robin Schulz & Rita Ora & Tiago PZK",artiste:"I'll Be There",audioUrl:"./audio/Rita-Ora_Ill-Be-There.mp3",paroles:`Oh, oh
Oh, oh

Circles, keep runnin' in circles
Feels like every dream you've ever had just slowly fades away
Hopeless, some days feels so hopeless
Just another day, another struggle, 'nother win to chase

Yeah, I get that sometimes life can bring you down
And you try to win the fight, but you don't know how

Whenever you're fallin' and you don't know where you're goin'
Even if your wings are broken, soon enough, you'll fly again
When everything's failin' and your eyes just won't stop rainin'
Even if your fire's out, yeah, soon enough, you'll burn again

You know in the ups and downs, I'll be there
When the lights go out, I'll be there
In the coldest town, I'll be there for you
In the highs and lows, I'll be there
When you lose control, I'll be there
It'll be alright, yeah, I'll be there for you (I'll be there for you)

Donde te encontrés al borde
Y tocando fondo, hacéte amigo de la soledad
Vive, intenta y sonríe
Es un paso, avanza y tiempo pa' dejar lo malo atrás
Es hoy, conexión, con vos mismo, con el interior
Trabajar en tu mejor versión y poner a volar el corazón

Whenever you're fallin' and you don't know where you're goin'
Even if your wings are broken, soon enough, you'll fly again
When everything's failin' and your eyes just won't stop rainin'
Even if your fire's out, yeah, soon enough, you'll burn again

You know in the ups and downs, I'll be there
When the lights go out, I'll be there
In the coldest town, I'll be there for you (I'll be there)
In the highs and lows, I'll be there
When you lose control, I'll be there
It'll be alright, yeah, I'll be there for you

In the highs and lows, I'll be there
When you lose control
It'll be alright, I'll be there for you`},{id:9,titre:"Le Pire",artiste:"GIMS",audioUrl:"./audio/GIMS-Le Pire.mp3",paroles:`Le pire, c'est pas la méchanceté des Hommes
Mais le silence des autres qui font tous semblant d'hésiter
Et quand les enfants me demandent
Pourquoi la mer est-elle salée?
Je suis obligé de répondre que les poissons ont trop pleuré

Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait

J'suis posé sur mon divan, j'regarde la télévision
Explique-moi ce qu'il se passe, c'est comme si j'avais dix ans
Assombrie est ma vision, pourtant l'soleil est présent
Les gens qui font la morale avec une veste en vison
Ou p't-être simplement qu'on a perdu la raison
La vie, un terrain glissant, mais dans quel monde nous vivons?

Stop
Et en effet, le mal est fait
Mais stop, stop, stop, car en effet, le mal est fait

Le pire, c'est pas la méchanceté des Hommes
Mais le silence des autres qui font tous semblant d'hésiter
Et quand les enfants me demandent
Pourquoi la mer est-elle salée?
Je suis obligé de répondre que les poissons ont trop pleuré

Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait

J'me rassois sur le divan, toujours la télévision
Obligé d'plisser les yeux, rien à l'horizon
J'vais raconter mes problèmes à des gens qui vivent dans l'aisance
Ils vont me prendre au sérieux que si j'm'asperge d'essence
Ou p't-être que, tout simplement, j'n'intéresse pas grand-monde
J'suis p't-être une valeur marchande aux yeux de quelques passants

Stop
Et en effet, le mal est fait
Mais stop, stop, stop, car en effet, le mal est fait

Le pire, c'est pas la méchanceté des Hommes
Mais le silence des autres qui font tous semblant d'hésiter
Et quand les enfants me demandent
Pourquoi la mer est-elle salée?
Je suis obligé de répondre que les poissons ont trop pleuré

Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait

Le pire, c'est de ne pas profiter du temps qu'il nous reste à vivre
Le pire, c'est de ne pas reconnaître tout ce qui nous arrive
Le pire, c'est de ne pas profiter du temps qu'il nous reste à vivre
Le pire, c'est de ne pas reconnaître tout ce qui nous arrive

Le pire, c'est pas la méchanceté des Hommes
Mais le silence des autres qui font tous semblant d'hésiter
Et quand les enfants me demandent
Pourquoi la mer est-elle salée?
Je suis obligé de répondre que les poissons ont trop pleuré

Le pire, c'est pas la méchanceté des Hommes
Mais le silence des autres qui font tous semblant d'hésiter
Et quand les enfants me demandent
Pourquoi la mer est-elle salée?
Je suis obligé de répondre que les poissons ont trop pleuré

Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait
Eh eh eh eh
Mais dis-moi c'qu'on a fait`},{id:10,titre:"Le déserteur",artiste:"Boris Vian",audioUrl:"./audio/Boris-Vian_Le-deserteur.mp3",paroles:`Monsieur le Président
Je vous fais une lettre
Que vous lirez peut-être
Si vous avez le temps

Je viens de recevoir
Mes papiers militaires
Pour partir à la guerre
Avant mercredi soir

Monsieur le Président
Je ne veux pas la faire
Je ne suis pas sur terre
Pour tuer des pauvres gens

C'est pas pour vous fâcher
Il faut que je vous dise
Ma décision est prise
Je m'en vais déserter

Depuis que je suis né
J'ai vu mourir mon père
J'ai vu partir mes frères
Et pleurer mes enfants

Ma mère a tant souffert
Qu'elle est dedans sa tombe
Et se moque des bombes
Et se moque des vers

Quand j'étais prisonnier
On m'a volé ma femme
On m'a volé mon âme
Et tout mon cher passé

Demain de bon matin
Je fermerai ma porte
Au nez des années mortes
J'irai sur les chemins

Je mendierai ma vie
Sur les routes de France
De Bretagne en Provence
Et je dirai aux gens

Refusez d'obéir
Refusez de la faire
N'allez pas à la guerre
Refusez de partir

S'il faut donner son sang
Allez donner le vôtre
Vous êtes bon apôtre
Monsieur le Président

Si vous me poursuivez
Prévenez vos gendarmes
Que je n'aurai pas d'armes
Et qu'ils pourront tirer`},{id:11,titre:"Tuesday",artiste:"Burak Yeter ft. Danelle Sandoval",audioUrl:"./audio/BurakYeter-Tuesday.mp3",paroles:`Got the club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey

Club going up
Got the club going up
Got the club going up
Got the club going up

Got the club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey

Club going up
Got the club going up
Got the club going up
Got the club going up

Always working OT
Overtime and outta town
Things is crazy back home
It kills me that you're not around
I think we're getting too deep
Ain't no party on the weekend
Upstairs I got Xans in a Advil bottle
I don't take that shit, but you do
So I got 'em

Got the club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey

Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey
Club going up, on a Tuesday
Got your girl in the cut and she ain't choosey

The club going up
Got the club going up
Got the club going up`},{id:12,titre:"Ain't Nobody (Loves Me Better)",artiste:"Felix Jaehn ft. Jasmine Thompson",audioUrl:"./audio/Felix-Jaehn_Aint-Nobody.mp3",paroles:`Captured effortlessly
That's the way it was
Happened so naturally
I did not know it was love
The next thing I felt was you
Holding me close
What was I gonna do?
I let myself go

And now we're flyin' through the stars
I hope this night will last forever
Oh-whoa-oh-oh

Ain't nobody
Loves me better
Makes me happy
Makes me feel this way
Ain't nobody
Loves me better than you

I've been waitin' for you
It's been so long
I knew just what I would do
When I heard your song
You filled my heart with a kiss
You gave me freedom
You knew I could not resist
I needed someone

And now we're flyin' through the stars
I hope this night will last forever
Oh-whoa-oh-oh

Ain't nobody
Loves me better
Makes me happy
Makes me feel this way
Ain't nobody
Loves me better than you

At first you put your arms around me
Then you put your charms around me
We stare into each other's eyes
And what we see is no surprise
Got a feeling most would treasure
And a love so deep we cannot measure

Ain't nobody
Loves me better
Makes me happy
Makes me feel this way
Ain't nobody
Loves me better than you

Ain't nobody
Loves me better
Makes me happy
Makes me feel this way
Ain't nobody
Loves me better than you`},{id:13,titre:"Ces Gens-Là",artiste:"Jacques Brel",audioUrl:"./audio/Ces-Gens-La.mp3",paroles:`D'abord...
D'abord, y'a l'aîné
Lui qu'est comme un melon
Lui qui a un gros nez
Lui qui sait plus son nom, Monsieur, tellement qu'il boit
Ou tellement qu'il a bu
Qui fait rien d'ses dix doigts
Mais lui qui n'en peut plus
Lui qui est complètement cuit
Et qui s'prend pour le roi
Qui se soule toutes les nuits
Avec du mauvais vin
Mais qu'on retrouve au matin
Dans l'église, qui roupille
Raide comme une saillie
Blanc comme un cierge de Pâques
Et puis qui bal-bu-tie
Et qui a l'œil qui divague...
Faut vous dire, Monsieur
Que chez ces gens-là
On n'pense pas, Monsieur
On n'pense pas
On prie

Et puis, y'a l'autre
Des carottes dans les cheveux
Qu'a jamais vu un peigne
Qu'est méchant comme une teigne
Même qu'il donnerait sa chemise
À des pauvres gens heureux
Qui a marié la Denise
Une fille de la ville, enfin, d'une autre ville
Et que c'est pas fini
Qui fait ses p'tites affaires
Avec son p'tit chapeau
Avec son p'tit manteau
Avec sa p'tite auto
Qu'aimerait bien avoir l'air
Mais qu'a pas l'air du tout
Faut pas jouer les riches
Quand on n'a pas le sou
Faut vous dire, Monsieur
Que chez ces gens-là
On n'vit pas, Monsieur
On n'vit pas
On triche

Et puis, y'a les autres
La mère qui n'dit rien
Ou bien n'importe quoi
Et du soir au matin
Sous sa belle gueule d'apôtre
Et dans son cadre en bois
Y'a la moustache du père
Qui est mort d'une glissade
Et qui regarde son troupeau
Bouffer la soupe froide
Et ça fait des grands flchss
Et ça fait des grands flchss

Et puis y'a la toute vieille
Qu'en finit pas de vibrer
Et qu'on attend qu'elle crève
Vu que c'est elle qui a l'oseille
Et qu'on écoute même pas
C'que ses pauv' mains racontent
Faut vous dire, Monsieur
Que chez ces gens-là
On n'cause pas, Monsieur
On n'cause pas
On compte

Et puis
Et puis
Et puis y'a Frida!
Qu'est belle comme un soleil!
Et qui m'aime pareil
Que moi j'aime Frida!
Même qu'on se dit souvent
Qu'on aura une maison
Avec des tas d'fenêtres
Avec presque pas d'murs
Et qu'on vivra dedans
Et qu'il f'ra bon y être
Et que si c'est pas sûr
C'est quand même peut-être
Parce que les autres veulent pas
Parce que les autres veulent pas
Les autres ils disent comme ça
Qu'elle est trop belle pour moi
Que je suis tout juste bon
À égorger les chats
J'ai jamais tué d'chats
Ou alors y'a longtemps
Ou bien j'ai oublié
Ou ils sentaient pas bon
Enfin ils veulent pas
Enfin ils veulent pas

Parfois, quand on se voit
Semblant qu'c'est pas exprès
Avec ses yeux mouillants
Elle dit qu'elle partira
Elle dit qu'elle me suivra
Alors pour un instant
Pour un instant seulement
Alors moi je la crois, Monsieur
Pour un instant
Pour un instant seulement
Parce que chez ces gens-là, Monsieur
On n's'en va pas
On s'en va pas, Monsieur
On s'en va pas

Mais il est tard, Monsieur
Il faut que je rentre
Chez moi`},{id:14,titre:"Rodéo",artiste:"Zazie",audioUrl:"./audio/Zazie-Rodeo.mp3",paroles:`C'est la vie, pas l'Paradis
(Rodéo)
C'est la vie, pas l'Paradis

T'es tombé dans l'piège
Cow-boy, par le siège
T'as misé sur le mauvais cheval
C'est ton premier cri
Et tout l'monde applaudit
Ça fait plaisir, mais ça fait mal

Tu tombes sur maman
Tu te dis finalement
Que t'aurais pu tomber plus mal
Jusque-là, ça va
Mais cow-boy, n'oublie pas
Qu'il est à bascule, ton cheval

C'est du

C'est la vie, pas l'Paradis
(Rodéo)
C'est la vie, pas l'Paradis

D'abord à quatre pattes
Tu tombes, tu t'rattrapes
Et puis l'école, on peut pas dire qu'ça t'emballe
Du coup, tu traînes dehors
Cow-boy, t'es l'plus fort
Pour la défonce et la cavale

Tu laisses ta famille
Et tu tombes les filles
Qu'elles pleurent, tu t'en fiches pas mal
Une nuit, une heure
Une seconde de bonheur
Comme toutes ces pillules que t'avales
Comme au

C'est la vie, pas l'Paradis
(Rodéo)
C'est la vie, pas l'Paradis
T'es tombé dans l'piège
Le nez dans la neige
En route vers le paradis
Tu parles d'un héros
Fauché en plein galop
Et dire que tout l'monde applaudit

Tu tombes, tu t'relèves
Jusqu'au jour où tu crèves
Tout ça pour tomber dans l'oubli

C'est fini, cow-boy, fini, mais rassure-toi
On peut pas tomber plus bas

Rodéo
Rodéo
Rodéo

(C'est la vie, pas l'Paradis)
Rodéo
(C'est la vie, pas l'Paradis)
On n'peut pas tomber plus bas
(C'est la vie, pas l'Paradis)
On n'peut pas tomber plus bas
(C'est la vie, pas l'Paradis)`},{id:15,titre:" Impossible",artiste:"James Arthur",audioUrl:"./audio/JamesArthur-Impossible.mp3",paroles:`Mmm-mmm

I remember, years ago
Someone told me I should take
Caution when it comes to love, I did
And you were strong and I was not
My illusion, my mistake
I was careless, I forgot, I did
And now

When all is done, there is nothing to say
You have gone and so effortlessly
You have won, you can go ahead, tell them
Tell them all I know now
Shout it from the rooftops
Write it on the skyline
All we had is gone now
Tell them I was happy
And my heart is broken
All my scars are open
Tell them what I hoped would be impossible
Impossible
Impossible
Impossible

Falling out of love is hard
Falling for betrayal is worse
Broken trust and broken hearts
I know, I know
And thinking all you need is there
Building faith on love and words
Empty promises will wear
I know
I know and now

When all is done, there is nothing to say
And if you're done with embarrassing me
On your own, you can go ahead, tell them
Tell them all I know now
Shout it from the rooftops
Write it on the skyline
All we had is gone now
Tell them I was happy
And my heart is broken
All my scars are open
Tell them what I hoped would be impossible
Impossible
Impossible
Impossible

I remember, years ago
Someone told me I should take
Caution when it comes to love
I did
Tell them all I know now
Shout it from the rooftops
Write it on the skyline
All we had is gone now
Tell them I was happy
And my heart is broken
Oh, hoped would be impossible
Impossible (impossible)
Impossible (impossible)
(Impossible)
impossible
(Impossible) impossible
(Impossible)
Impossible`},{id:16,titre:"Don't Give Up",artiste:"Zoe Wees",audioUrl:"./audio/ZoeWees-DontGive-Up.mp3",paroles:`Don't give up, no, no, don't give up, no, no
Don't give up, no, no
Do you ever feel like the teardrops just won't dry? (They just won't dry, they just won't dry)
Smiling in a crowd when all you wanna do is cry (you wanna cry, you wanna cry)
Do you ever feel, do you ever feel alone? (Alone, alone, alone, alone)
Do you ever feel like there's just nowhere to go? (Nowhere to go, nowhere to go)
When the world turns upside down, and you're falling to the ground
And the oceans in the sky got you feeling low
When the world turns upside down, and you're falling to the ground
And the oceans in the sky, don't give up, no, no
Don't give up, no, no, don't give up, no, no
Don't give up, no, no
Don't you give up, no, no, no
Dancing with the sun, but there's thunder in your mind (thunder in your mind, thunder in your mind)
You're gon' be okay, I know it's hard, but you'll survive (yeah, you'll survive, yeah, you'll survive)
Do you ever feel, do you ever feel alone? (Alone, alone, alone, alone)
When the world turns upside down, and you're falling to the ground
And the oceans in the sky got you feeling low
When the world turns upside down, and you're falling to the ground
And the oceans in the sky, don't give up, no, no
Don't give up, no, no, don't give up, no, no
Don't give up, no, no
Don't you give up, no, no, no
Keep running through the clouds, you're gonna make it out
You're gonna make it out, you'll keep flying
When the world turns upside down, and you're falling to the ground
And the oceans in the sky, don't give up, no, no
Don't give up, no, no, don't give up, no, no
Don't give up, no, no
Don't you give up, no, no, no`},{id:17,titre:"I Adore You",artiste:"HUGEL, Topic, Arash ft. Daecolm",audioUrl:"./audio/Hugel-IAdoreYou.mp3",paroles:`Plenty more, plenty more
But you're my hope for the night, oh
Gimme more control
Slow down for the night, oh
Lemme know, lemme know
That you're down for the vibe
Are you down for the vibe? Oh
We don't say bye-bye
You can see my eyes
That I'm on the rise, oh
I believe body lies
But your body be smilin' though (ayy, ayy)
These are the nights I love
'Cause you know, baby, I adore you, I adore you
Can't ignore you, can't ignore you, ah
Body-ody, my soul and that
I'm outta control, I can't
I adore you, I adore you, I do

Plenty more, plenty more
But you're my hope for the night, oh
Gimme more control
Slow down for the night, oh
Lemme know, lemme know
That you're down for the vibe
Are you down for the vibe? Oh
We don't say bye-bye
Le-le-le, le-le-le, yeah, yeah
Le-le-le, le-le-le, yeah, yeah
Le-le-le, le-le-le, yeah
Baby, I adore you, I adore you, I do

She gon' keep it minimal, poco
Pull you in and walk in like model
She like Mona Lisa, oh majo
Majo, oh
You can see my eyes
That I'm on the rise, oh
I believe body lies
But your body be smilin' though (ayy, ayy)
These are the nights I love
'Cause you know, baby, I adore you, I adore you
Can't ignore you, can't ignore you, ah
Body-ody, my soul and that
I'm outta control, I can't
I adore you, I adore you (ooh, baby)

Baby, I adore you, I adore you
Can't ignore you, can't ignore you, ah
Body-ody, my soul and that
I'm outta control, I can't
I adore you, I adore you, I do
Body-ody, my soul and that, I'm outta control, I can't (I do, I do, I do, I do)
I adore you (I do, I do)
'Cause you know, baby, I adore you, I adore you
Can't ignore you, can't ignore you, ah
Body-ody, my soul and that
I'm outta control, I can't
I adore you, I adore you, I do

Plenty more, plenty more
But you're my hope for the night, oh
Gimme more control
Slow down for the night, oh
Lemme know, lemme know
That you're down for the vibe
Are you down for the vibe? Oh
We don't say bye-bye
Le-le-le, le-le-le, yeah, yeah
Le-le-le, le-le-le, yeah, yeah
Le-le-le, le-le-le, yeah
Baby, I adore you, I adore you, I do`},{id:18,titre:"Te Imaginaba",artiste:"Alvaro Soler",audioUrl:"./audio/Alvaro-Soler_Te-Imaginaba.mp3",paroles:`Entre ocho mil millones no sé cómo te encontré
No sé si es cuestión de suerte o que no perdí la fe
Qué bonita que es la vida cuando estás aquí dormida a mi lado
Ah-ah-ah
Me perdí entre mil planetas y en el tuyo aterricé
Yo venía sin maleta y sin pensarlo me quedé
Tanto tiempo en blanco y negro, pero ahora solo veo colores
Y yo siempre
Te imaginaba
Así como eres tú te imaginaba
Aunque te vean hermosa maquillada
Estás más guapa recién levantada
Te imaginaba
Desayunando besos en la cama
Despertando a tu lado cada mañana
Y si peleamos que sea con almohada
Como te imaginaba
Hablemos de nuestros sueños, yo te quiero ver brillar
Yo prometo ser tu compi en cielo azul y en tempestad
Contigo quiero crecer, de ti yo quiero aprender
Y ahora que el momento es de los dos
Que apaguen la luna
Quedemos a oscuras
Me quedo contigo, me quedo contigo
Te imaginaba
Así como eres tú te imaginaba
Y aunque te vean hermosa maquillada
Estás más guapa recién levantada
Te imaginaba
Desayunando besos en la cama
Despertando a tu lado cada mañana
Y si peleamos que sea con almohada
Como te imaginaba
Que apaguen la luna
Quedemos a oscuras
Ya no tengo dudas
Me quedo contigo, me quedo contigo
Entre ocho mil millones no sé cómo te encontré
Será cuestión de suerte o que no perdí la fe`},{id:19,titre:"Burn",artiste:"Ellie Goulding",audioUrl:"./audio/Burn_Ellie-Goulding.mp3",paroles:`We, we don't have to worry 'bout nothing
'Cause we got the fire, and we're burning one hell of a something
They, they're gonna see us from outer space, outer space
Light it up, like we're the stars of the human race, human race
When the lights started out, they don't know what they heard
Strike the match, play it loud, giving love to the world
We'll be raising our hands, shining up to the sky
'Cause we got that fire, fire, fire
Yeah, we got that fire, fire, fire
And we gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
Gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
We don't wanna leave, no
We just wanna be right now
Right, ri-ri-right now
And what we see, is everybody's on the floor acting crazy, getting loco till the light's out
Music's on, I'm waking up
We start the fire, then we burn it up
And it's over now, we got the love
There's no sleeping now
No sleeping now
When the lights started out, they don't know what they heard
Strike the match, play it loud, giving love to the world
We'll be raising our hands, shining up to the sky
'Cause we got that fire, fire, fire
Yeah, we got that fire, fire, fire
And we gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
Gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
When the lights started out, they don't know what they heard
Strike the match, play it loud, giving love to the world
We gonna let it burn, burn, burn, burn, burn, burn (ooh)
Burn, burn, burn, burn, burn, burn (ooh)
We can light it up, up, up
So they can't put it out, out, out
We can light it up, up, up
So they can't put it out, out, out
We can light it up, up, up
So they can't put it out, out, out
We can light it up, up, up
So they can't put it out, out, out
When the lights started out, they don't know what they heard
Strike the match, play it loud, giving love to the world
We'll be raising our hands, shining up to the sky
'Cause we got that fire, fire, fire
Yeah, we got that fire, fire, fire
And we gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
Gonna let it burn, burn, burn, burn
We gonna let it burn, burn, burn, burn
When the lights started out, they don't know what they heard
Strike the match, play it loud, giving love to the world
We'll be raising our hands, shining up to the sky
'Cause we got that fire, fire, fire
Yeah, we got that fire, fire, fire
And we gonna let it burn`},{id:20,titre:"Thunder",artiste:"Imagine Dragons",audioUrl:"./audio/Imagine-Dragons_Thunder.mp3",paroles:`Just a young gun with a quick fuse
I was uptight, wanna let loose
I was dreaming of bigger things and
Wanna leave my own life behind
Not a yessir, not a follower
Fit the box, fit the mold
Have a seat in the foyer, take a number
I was lighting before the thunder

Thunder, feel the thunder
Lighting then the thunder
Thunder, feel the thunder
Lighting then the thunder
Thunder, thunder
Thunder

Kids were laughing in my classes
While I was scheming for the masses
Who do you think you are
Dreaming 'bout being a big star
They say you're basic, they say you're easy
You're always riding in the backseat
Now I'm smiling from the stage
While you were clapping in the nose bleeds

Thunder, feel the thunder
Lighting then the thunder
Thunder, feel the thunder
Lighting then the thunder
Thunder, thunder

Thunder, feel the thunder
Lighting then the thunder, thunder
Thunder, feel the thunder
Lighting then the thunder, thunder
Thunder, feel the thunder
Lighting then the thunder, thunder
Thunder, feel the thunder
Lighting then the thunder, thunder
Thunder, feel the thunder
Lighting then the thunder, thunder`},{id:21,titre:"Ma p'tite étoile",artiste:"Hatik",audioUrl:"./audio/Hatik_Ma-Petite-Etoile.mp3",paroles:`Y a plein de pages dans le livret, ouais
Toute une vie à écrire
Quand tu m'étreins j'suis libre, ouais
Le ciel sait c'que je prie
Peu importe les démons, eh
Peu importe le mal qu'on s'fait
Les semaines passent comme des secondes
Mais c'est toujours toi que j'vous quand mes yeux se referment
S'il suffisait d'un claquement de doigts
Pour sceller nos sorts jusqu'à l'éternité
Je claquerais, je claquerais des doigts toute la nuit
Je chercherais ton regard dans la brume
Jusqu'à la rosée du matin
Oh, ma p'tite étoile
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile, t'es venue briller dans ma vie
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile, t'es venue briller dans ma vie
J'pars à la guerre pour toi
J'suis ton épée et ton bouclier
J'traverserai le monde pour t'voir
J'peux réparer ton cœur, j'suis outillé
Entre nous c'est simple, on n'a pas besoin de bague
On n'a pas besoin de grand chose, pas besoin de masque
J't'aime comme never, t'es la best ever
T'as une vie de cauchemar, j'veux la changer en rêve
S'il suffisait d'un claquement de doigts
Pour sceller nos sorts jusqu'à l'éternité
S'il suffisait d'un claquement de doigts
Pour sceller nos sorts jusqu'à l'éternité
Je claquerais, je claquerais des doigts toute la nuit
Je chercherais ton regard dans la brume
Jusqu'à la rosée du matin
Oh, ma p'tite étoile
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile, t'es venue briller dans ma vie
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile, t'es venue briller dans ma vie
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile, t'es venue briller dans ma vie
Ma p'tite étoile, ma p'tite étoile qui s'illumine
Ma p'tite étoile
J'ai la tête dans les étoiles, ouais
T'es ma p'tite étoile, ouais
Tu m'fais grimper les étages, ouais
T'es ma p'tite étoile, ouais
J'ai la tête dans les étoiles, ouais
T'es ma p'tite étoile, ouais
Tu m'fais grimper les étages, ouais
T'es ma p'tite étoile, ouais
J'ai la tête dans les étoiles, ouais
T'es ma p'tite étoile, ouais
Tu m'fais grimper les étages, ouais
T'es ma p'tite étoile, ouais
J'ai la tête dans les étoiles, ouais
T'es ma p'tite étoile, ouais
Tu m'fais grimper les étages, ouais
T'es ma p'tite étoile, ouais`},{id:22,titre:"Kids",artiste:"OneRepublic ft. Seeb",audioUrl:"./audio/OneRepublic–Kids.mp3",paroles:`Days when
We'd fight, we'd fight 'til I would give in
Yeah, perfect disasters
We were reaching, reaching for the rafters
And on most of the days we were searching for ways
To get up and get out of the town that we were raised, yeah
'Cause we were done
I remember, we were sleeping in cars, we were searching for OZ
We were burning cigars with white plastics tips 'til we saw the sun
And we said crazy things like
I refuse to look back thinking days were better
Just because they're younger days
I don't know what's 'round the corner
Way I feel right now I swear we'll never change
Back when we were kids
Swore we would never die
You and me were kids
Swear that we'll never die
Lights down
And we drive and we're drivin' just to get out
Yeah, perfect disasters
Yeah, we were swinging, swinging from the rafters
Hey, we were dancing in cars, we were looking for ours
We were naming the stars after people we knew 'til we had to go
And we were saying things like
I refuse to look back thinking days were better
Just because they're younger days
I don't know what's 'round the corner
Way I feel right now I swear we'll never change
Back when we were kids
Swore we would never die
You and me were kids
Swear that we'll never die
Nights when we kept dancing
Changing all our plans and
Making every day a holiday
Feel the years start burning
City lights they're turning
Something 'bout this feels the same
Back when we were kids
Swore we would never die
You and me were kids
Swear that we'll never die
I refuse to look back thinking days were better
Just because they're younger days
I don't know what's 'round the corner
Way I feel right now I swear we'll never change
You and me were kids`},{id:23,titre:"All In",artiste:"Leon Lour ft. Victoria Duffield",audioUrl:"./audio/Leon-Lour_All-In.mp3",paroles:`All in
All in

We're only losing time
To question what feels right
It's building from inside
Unspoken dynamite

Oh no we don't need to speak at all
Follow me and the pieces start to fall
Let go and let me take away your fear
No words, but I hear you loud and clear

All In, make the jump
Talking ain't enough
All in, don't think so much
All in, and let us make the most of it

All In, make the jump
Talking ain't no fun
All in, and let us make the most of it

It's in the way that we touch
The feeling's rising up
Go ahead and call it lust
But we don't want to stop

Oh no we don't need to speak at all
Follow me and the pieces start to fall
Let go and let me take away your fear
No words, but I hear you loud and clear

All In, make the jump
Talking ain't no fun
All in, don't think so much
All in, and let us make the most of it

All In, In, In
All In, In, In
All In, In, In
And let us the most of it`},{id:24,titre:"La Grenade",artiste:"Clara Luciani",audioUrl:"./audio/La-Grenade.mp3",paroles:`Hé toi
Qu'est-ce que tu regardes?
T'as jamais vu une femme qui se bat
Suis-moi
Dans la ville blafarde
Et je te montrerai
Comme je mords, comme j'aboie
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Hé toi
Mais qu'est-ce que tu crois?
Je ne suis qu'un animal
Déguisé en madone
Hé toi
Je pourrais te faire mal
Je pourrais te blesser, oui
Dans la nuit qui frissonne
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Hé toi
Qu'est-ce que tu t'imagines?
Je suis aussi vorace
Aussi vivante que toi
Sais-tu
Que là sous ma poitrine
Une rage sommeille (une rage sommeille)
Que tu ne soupçonnes pas?
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Prends garde
Sous mon sein, la grenade
Sous mon sein, là, regarde
Sous mon sein, la grenade
Prends garde`},{id:25,titre:"Papaoutai",artiste:"Stromae",audioUrl:"./audio/Papaoutai.mp3",paroles:`Dites-moi d'où il vient
Enfin je saurai où je vais
Maman dit que lorsqu'on cherche bien
On finit toujours par trouver
Elle dit qu'il n'est jamais très loin
Qu'il part très souvent travailler
Maman dit "travailler, c'est bien"
Bien mieux qu'être mal accompagné
Pas vrai?
Où est ton papa?
Dis-moi, où est ton papa?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah, sacré papa
Dis-moi, où es-tu caché?
Ça doit faire au moins mille fois que j'ai
Compté mes doigts
Hey
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?
Quoi? Qu'on y croie ou pas
Y aura bien un jour où on n'y croira plus
Un jour ou l'autre, on sera tous papas
Et d'un jour à l'autre, on aura disparu
Serons-nous détestables?
Serons-nous admirables?
Des géniteurs ou des génies?
Dites-nous qui donne naissance aux irresponsables?
Ah, dites-nous qui?
Tiens, tout le monde sait comment on fait des bébés
Mais personne sait comment on fait des papas
Monsieur je-sais-tout en aurait hérité, c'est ça
Faut l'sucer d'son pouce ou quoi?
Dites-nous où c'est caché, ça doit
Faire au moins mille fois qu'on a
Bouffé nos doigts
Hey
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?
Où est ton papa?
Dis-moi, où est ton papa?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah, sacré papa
Dis-moi, où es-tu caché?
Ça doit faire au moins mille fois que j'ai
Compté mes doigts
Hey
Où est ton papa?
Dis-moi, où est ton papa?
Sans même devoir lui parler
Il sait ce qui ne va pas
Ah, sacré papa
Dis-moi, où es-tu caché?
Ça doit faire au moins mille fois que j'ai
Compté mes doigts
Hey
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, papaoutai?
Où t'es, où t'es où, papaoutai?`},{id:26,titre:"Shape of You",artiste:"Ed Sheeran",audioUrl:"./audio/Shape-of-You.mp3",paroles:`The club isn't the best place to find a lover
So the bar is where I go
Me and my friends at the table doing shots
Drinking fast and then we talk slow
Come over and start up a conversation with just me
And trust me I'll give it a chance now
Take my hand, stop, put Van the Man on the jukebox
And then we start to dance, and now I'm singing like
Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you
One week in we let the story begin
We're going out on our first date
You and me are thrifty, so go all you can eat
Fill up your bag and I fill up a plate
We talk for hours and hours about the sweet and the sour
And how your family is doing okay
And leave and get in a taxi, then kiss in the backseat
Tell the driver make the radio play, and I'm singing like
Girl, you know I want your love
Your love was handmade for somebody like me
Come on now, follow my lead
I may be crazy, don't mind me
Say, boy, let's not talk too much
Grab on my waist and put that body on me
Come on now, follow my lead
Come, come on now, follow my lead
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
(Oh-I-oh-I-oh-I-oh-I)
I'm in love with your body
Every day discovering something brand new
I'm in love with the shape of you
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
Come on, be my baby, come on
I'm in love with the shape of you
We push and pull like a magnet do
Although my heart is falling too
I'm in love with your body
And last night you were in my room
And now my bedsheets smell like you
Every day discovering something brand new
I'm in love with your body
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Come on, be my baby, come on
Come on (I'm in love with your body), be my baby, come on
Every day discovering something brand new
I'm in love with the shape of you`},{id:27,titre:"Rolling In The Deep",artiste:"Adele",audioUrl:"./audio/Adele_Rolling-In-The-Deep.mp3",paroles:`There's a fire starting in my heart
Reaching a fever pitch and it's bringing me out the dark
Finally, I can see you crystal clear
Go ahead and sell me out and I'll lay your shit bare

See how I'll leave with every piece of you
Don't underestimate the things that I will do

There's a fire starting in my heart
Reaching a fever pitch and it's bringing me out the dark

The scars of your love remind me of us
They keep me thinking that we almost had it all
The scars of your love, they leave me breathless
I can't help feeling

We could've had it all
(You're gonna wish you never had met me)
Rolling in the deep
(Tears are gonna fall, rolling in the deep)
You had my heart inside of your hand
(You're gonna wish you never had met me)
And you played it to the beat
(Tears are gonna fall, rolling in the deep)

Baby, I have no story to be told
But I've heard one of you and I'm gonna make your head burn
Think of me in the depths of your despair
Making home down there, as mine sure won't be shared

(You're gonna wish you never had met me)
The scars of your love remind me of us
(Tears are gonna fall, rolling in the deep)
They keep me thinking that we almost had it all
(You're gonna wish you never had met me)
The scars of your love, they leave me breathless
(Tears are gonna fall, rolling in the deep)
I can't help feeling

We could've had it all
(You're gonna wish you never had met me)
Rolling in the deep
(Tears are gonna fall, rolling in the deep)
You had my heart inside of your hand
(You're gonna wish you never had met me)
And you played it to the beat
(Tears are gonna fall, rolling in the deep)

We could've had it all
Rolling in the deep
You had my heart inside of your hand
But you played it with a beating

Throw your soul through every open door
Count your blessings to find what you look for
Turn my sorrow into treasured gold
You pay me back in kind and reap just what you sow

(You're gonna wish you never had met me)
We could've had it all
(Tears are gonna fall, rolling in the deep)
We could've had it all
(You're gonna wish you never had met me)
It all, it all, it all
(Tears are gonna fall, rolling in the deep)

We could've had it all
(You're gonna wish you never had met me)
Rolling in the deep
(Tears are gonna fall, rolling in the deep)
You had my heart inside of your hand
(You're gonna wish you never had met me)
And you played it to the beat
(Tears are gonna fall, rolling in the deep)

Could've had it all
(You're gonna wish you never had met me)
Rolling in the deep
(Tears are gonna fall, rolling in the deep)
You had my heart inside of your hand
(You're gonna wish you never had met me)

But you played it
You played it
You played it
You played it to the beat`},{id:28,titre:"Jerusalema",artiste:"Master KG ft. Burna Boy & Nomcebo Zikode",audioUrl:"./audio/Master-KG_Jerusalema.mp3",paroles:`Owanitwa mos
Owanitwa mos
Pastor Master KG
Owanitwa mos
Jerusalema ikhaya lami
Ngilondoloze
Uhambe nami
Zungangishiyi lana
Jerusalema ikhaya lami
Ngilondoloze
Uhambe nami
Zungangishiyi lana
Ndawo yami ayikho lana
Mbuso wami awukho lana
Ngilondoloze
Zuhambe nami
Ndawo yami ayikho lana
Mbuso wami awukho lana
Ngilondoloze
Zuhambe nami
Ngilondoloze
Ngilondoloze
Ngilondoloze
Zungangishiyi lana
Ngilondoloze
Ngilondoloze
Ngilondoloze
Zungangishiyi lana (owanitwa mos)
Ndawo yami ayikho lana
Mbuso wami awukho lana
Ngilondoloze
Zuhambe nami
Ngilondoloze
Ngilondoloze
Ngilondoloze
Zungangishiyi lana
Ngilondoloze
Ngilondoloze
Ngilondoloze
Zungangishiyi lana`},{id:29,titre:"Chanter",artiste:"Florent Pagny",audioUrl:"./audio/Florent-Pagny_Chanter.mp3",paroles:`Chanter pour oublier ses peines
Pour bercer un enfant, chanter
Pour pouvoir dire je t'aime
Mais chanter tout le temps
Pour implorer le ciel ensemble
En une seule et même église
Retrouver l'essentiel et faire
Que les silences se brisent
En haut des barricades
Les pieds et poings liés
Couvrant les fusillades
Chanter sans s'arrêter
Et faire s'unir nos voix
Autour du vin qui ennivre
Chanter quelqu'un qui s'en va
Pour ne pas cesser de vivre
Quelqu'un qui s'en va
Pour ne pas cesser de vivre
Chanter celui qui vient au monde, l'aimer
Ne lui apprendre que l'amour
En ne formant qu'une même ronde
Chanter encore et toujours
Un nouveau jour vient d'éclore
Pouvoir encore s'en émerveiller
Chanter malgré tout toujours plus fort
Ne plus faire que chanter
Et faire s'unir nos voix
Autour du vin qui ennivre
Chanter quelqu'un qui s'en va
Pour ne pas cesser de vivre
Oh oh oh
Je ne sais faire que chanter
Pour quelqu'un qui s'en va
Pour ne pas cesser de vivre
Chanter pour oublier ses peines
Pour bercer un enfant, chanter
Pour pouvoir dire je t'aime
Et chanter tout le temps
En haut des barricades
Les pieds et poings liés
Couvrant les fusillades
Chanter sans s'arrêter
Et faire s'unir nos voix
Autour du vin qui ennivre
Chanter quelqu'un qui s'en va
Pour ne pas cesser de vivre
Oh oh oh
Je ne sais faire que chanter
Pour quelqu'un qui s'en va
Pour ne pas cesser de vivre
Oh oh oh
Oh oh oh`},{id:30,titre:"Prosper (Yop la boum)",artiste:"Maurice Chevalier",audioUrl:"./audio/Maurice-Chevalier_Prosper.mp3",paroles:`Quand on voit passer le grand Prosper
Sur la place Pigalle
Avec son beau petit chapeau vert et sa martingale
À son air malabar et sa démarche en canard
Faut pas être bachelier pour deviner son métier
… Prosper yop la boum
C'est le chéri de ces dames
Prosper yop la boum
C'est le roi du macadam
Comme il a toujours la flemme
Y n'fait jamais rien lui-même
Il a son Harem
Qui de Clichy à Barbés
Le jour et la nuit sans cesse
Fait son petit business
Et le soir, tous les soirs
Dans un coin d'ombre propice
Faut le voir, faut bien l'voir
Encaisser les bénéfices
Il ramasse les billets
Et leur laisse la monnaie
Ah quel sacrifice
En somme c'est leur manager
Et yop la boum, Prosper
Avec sa belle gueule d'affranchi
Là-haut sur la butte
Ah, toutes les gonzesses sont folles de lui
Et se le disputent
Y en a qui s'flanquent des gnons
Mais oui, et se crêpent le chignon
Pendant c'temps voyez-vous
Tranquillement il compte les coups
… Prosper yop la boum
C'est le chéri de ces dames
Prosper yop la boum
C'est le roi du macadam
Quand une femme se fait coincer
Par les roussins du quartier
Il la laisse tomber
Et il s'en va carrément
Vers son réassortiment
Dans l'arrondissement
Et quand sur le champ
Elles ne sont pas à la page
Voulant faire comment
Faire leur apprentissage
Dans une ville de garnison
Il les envoie en saison
Faire un petit stage
Il a de la classe et du flair
Et yop la boum, Prosper
… Et yop la boum
Yop la boum
Dans une ville de garnison
Il les envoie en saison
Faire un petit stage
Il a de la classe et du flair
Et yop la boum, Prosper`},{id:31,titre:"Black or White",artiste:"Michael Jackson",audioUrl:"./audio/Black-or-White.mp3",paroles:`I took my baby on a Saturday bang
Boy is that girl with you?
Yes we're one and the same
Now I believe in miracles
And a miracle has happened tonight
But, if you're thinkin' about my baby
It don't matter if you're black or white
They print my message in the Saturday Sun
I had to tell them I ain't second to none
And I told about equality and it's true
Either you're wrong or you're right
But, if you're thinkin' about my baby
It don't matter if you're black or white
I am tired of this devil
I am tired of this stuff
I am tired of this business
Sew when the going gets rough
I ain't scared of your brother
I ain't scared of no sheets
I ain't scared of nobody
Girl, when the going gets mean
Protection
For gangs, clubs, and nations
Causing grief in human relations
It's a turf war on a global scale
I'd rather hear both sides of the tale
See, it's not about races
Just places, faces
Where your blood comes from
Is were your space is
I've seen the bright get duller
I'm not going to spend my life being a color
Don't tell me you agree with me
When I saw you kicking dirt in my eye
But, if you're thinkin' about my baby
It don't matter if you're black or white
I said if you're thinkin' of being my baby
It don't matter if you're black or white
I said if you're thinkin' of being my brother
It don't matter if you're black or white
Ooh, ooh
Yea, yea, yea now
Ooh, ooh
Yea, yea, yea now
It's black, it's white
It's tough for you to get by (yeah, yeah, yeah)
It's black, it's white
It's black, it's white
It's tough for you to get by (yeah, yeah, yeah)
It's black, it's white`},{id:32,titre:"Too Close",artiste:"Alex Clare",audioUrl:"./audio/Alex-Clare_Too-Close.mp3",paroles:`You know I'm not one to break promises
I don't want to hurt you but I need to breathe
At the end of it all, you're still my best friend
But there's something inside that I need to release
Which way is right, which way is wrong
How do I say that I need to move on?
You know we're heading separate ways

And it feels like I am just too close to love you
There's nothing I can really say
I can't lie no more, I can't hide no more
Got to be true to myself
And it feels like I am just too close to love you
So I'll be on my way

You've given me more than I can return
Yet there's oh so much that you deserve
There's nothing to say, nothing to do
I've nothing to give
I must live without you
You know we're heading separate ways

And it feels like I am just too close to love you
There's nothing I can really say
I can't lie no more, I can't hide no more
Got to be true to myself
And it feels like I am just too close to love you
So I'll be on my way

So I'll be on my way

And it feels like I am just too close to love you
There's nothing that I can really say
I can't lie no more, I can't hide no more
Got to be true to myself
And it feels like I am just too close to love you
So I'll be on my way

So I'll be on my way
So I'll be on my way`},{id:33,titre:"Girl on Fire",artiste:"Alicia Keys",audioUrl:"./audio/Alicia-Keys_Girl-on-Fire.mp3",paroles:`She's just a girl and she's on fire
Hotter than a fantasy, lonely like a highway
She's living in a world and it's on fire
Filled with catastrophe, but she knows she can fly away

Ohhhh oh oh oh oh
She got both feet on the ground
And she's burning it down
Ohhhh oh oh oh oh
She got her head in the clouds
And she's not backing down

This girl is on fire...
This girl is on fire...
She's walking on fire...
This girl is on fire...

Looks like a girl, but she's a flame
So bright, she can burn your eyes
Better look the other way
You can try but you'll never forget her name
She's on top of the world
Hottest of the hottest girls say

Ohhhh oh oh oh oh
We got our feet on the ground
And we're burning it down
Ohhhh oh oh oh oh
Got our head in the clouds
And we're not coming down

This girl is on fire...
This girl is on fire...
She's walking on fire...
This girl is on fire...

Everybody stares, as she goes by
'Cause they can see the flame that's in her eyes
Watch her when she's lighting up the night
Nobody knows that she's a lonely girl
And it's a lonely world
But she gon' let it burn, baby, burn, baby

This girl is on fire...
This girl is on fire...
She's walking on fire...
This girl is on fire...

This girl is on fire...
This girl is on fire...
She's walking on fire...
This girl is on fire...
This girl is on fire`},{id:34,titre:"Can't Stop The Feeling !",artiste:"Justin Timberlake",audioUrl:"./audio/Cant-Stop-The-Feeling.mp3",paroles:`I got this feelin' inside my bones
It goes electric, wavy when I turn it on
All through my city, all through my home
We're flyin' up, no ceilin', when we in our zone
I got that sunshine in my pocket
Got that good soul in my feet
I feel that hot blood in my body when it drops (ooh)
I can't take my eyes up off it, movin' so phenomenally
Room on lock, the way we rock it, so don't stop
And under the lights when everything goes
Nowhere to hide when I'm gettin' you close
When we move, well, you already know
So just imagine, just imagine, just imagine
Nothin' I can see but you when you dance, dance, dance
Feel a good, good creepin' up on you
So just dance, dance, dance, come on
All those things I shouldn't do
But you dance, dance, dance
And ain't nobody leavin' soon, so keep dancin'
I can't stop the feelin'
So just dance, dance, dance
I can't stop the feelin'
So just dance, dance, dance, come on
Ooh, it's something magical
It's in the air, it's in my blood, it's rushin' on (rushin' on)
I don't need no reason, don't need control (don't need control)
I fly so high, no ceiling, when I'm in my zone
'Cause I got that sunshine in my pocket
Got that good soul in my feet
I feel that hot blood in my body when it drops (ooh)
I can't take my eyes up off it, moving so phenomenally
Room on lock, the way we rock it, so don't stop
Under the lights when everything goes
Nowhere to hide when I'm gettin' you close
When we move, well, you already know
So just imagine, just imagine, just imagine
Nothing I can see but you when you dance, dance, dance
Feel a good, good creepin' up on you
So just dance, dance, dance, come on
All those things I shouldn't do
But you dance, dance, dance
And ain't nobody leavin' soon, so keep dancin'
I can't stop the feelin'
So just dance, dance, dance
I can't stop the feelin'
So just dance, dance, dance
I can't stop the feelin'
So just dance, dance, dance
I can't stop the feelin' (yeah)
So keep dancin', come on
Oh, yeah, oh
I can't stop the, I can't stop the
I can't stop the, I can't stop the
I can't stop the feelin'
Nothin' I can see but you when you dance, dance, dance (I can't stop the feelin')
Feel a good, good creepin' up on you
So just dance, dance, dance, come on (I can't stop the feelin')
All those things I shouldn't do
But you dance, dance, dance (dance, dance, dance) (I can't stop the feelin')
And ain't nobody leavin' soon, so keep dancin' (I can't stop the feelin')
Everybody sing
Got this feeling in my body (I can't stop the feelin')
Got this feeling in my body (I can't stop the feelin')
Wanna see you move your body (I can't stop the feelin')
Got this feelin' in my body
Break it down
Got this feelin' in my body (can't stop the feelin')
Got this feelin' in my body, come on (ooh)`},{id:35,titre:"The Emptiness Machine",artiste:"Linkin Park",audioUrl:"./audio/Linkin_Park_The-Emptiness-Machine.mp3",paroles:`Your blades are sharpened with precision
Flashing your favorite point of view
I know you're waiting in the distance
Just like you always do
Just like you always do
Already pulling me in
Already under my skin
And I know exactly how this ends
I let you cut me open, just to watch me bleed
Gave up who I am for who you wanted me to be
Don't know why I'm hoping for what I won't receive
Falling for the promise of the emptiness machine
Going around like a revolver
It's been decided how we lose
'Cause there's a fire under the altar
I keep on lying to
I keep on lying to
Already pulling me in
Already under my skin
And I know exactly how this ends
I let you cut me open just to watch me bleed
Gave up who I am for who you wanted me to be
Don't know why I'm hoping for what I won't receive
Falling for the promise of the emptiness machine
I only wanted to be part of something
I only wanted to be part of, part of
I only wanted to be part of something
I only wanted to be part of, part of
I only wanted to be part of something
I only wanted to be part
I let you cut me open, just to watch me bleed
Gave up who I am for who you wanted me to be
Don't know why I'm hoping, so fucking naive
Falling for the promise of the emptiness machine
The emptiness machine (I only wanted to be part of something)
The emptiness machine (I only wanted to be part of)
The emptiness machine`},{id:36,titre:"Runaway",artiste:"AURORA",audioUrl:"./audio/Aurora-Runaway.mp3",paroles:`Ah, ah, ah-ah, ah
Ah, ah, ah-ah
Ah, ah, ah-ah, ah
Ah, ah, ah-ah, ah
I was listening to the ocean
I saw a face in the sand
But when I picked it up
Then it vanished away from my hands, down
I had a dream, I was seven
Climbing my way in a tree
I saw a piece of Heaven
Waiting, impatient for me, down
And I was running far away, would I run off the world someday?
Nobody knows, nobody knows
And I was dancing in the rain, I felt alive and I can't complain
No, take me home, take me home where I belong
I can't take it any more
I was painting a picture
The picture was a painting of you
And for a moment, I thought you were here
But then again, it wasn't true, down
And all this time I have been lying
Oh, lying in secret to myself
I've been putting sorrow on the farthest place on my shelf
Da-di-da
And I was running far away, would I run off the world someday?
Nobody knows, nobody knows
And I was dancing in the rain, I felt alive and I can't complain
No, take me home, take me home where I belong
I got no other place to go
No, take me home, take me home where I belong
I got no other place to go
No, take me home, take me home where I belong
I can't take it any more
But I kept running for a soft place to fall
And I kept running for a soft place to fall
And I kept running for a soft place to fall
And I kept running for a soft place to fall
And I was running far away, would I run off the world someday?
No, take me home, take me home where I belong
I got no other place to go
No, take me home, take me home where I belong
I got no other place to go
No, take me home, home where I belong, oh, no, no
No, take me home, home where I belong, ho-home, home
No, take me home, home where I belong, oh, no, no
No, take me home, home where I belong, I can't take it any more`},{id:37,titre:"Messy",artiste:"Lola Young",audioUrl:"./audio/Lola-Young _Messy.mp3",paroles:`You know I'm impatient
So why would you leave me waiting outside the station
When it was like minus four degrees? And I
I get what you're sayin'
I just really don't wanna hear it right now
Can you shut up for like once in your life?
Listen to me, I took your nice words of advice
About how you think I'm gonna die, lucky if I turn thirty-three
Okay, so yeah, I smoke like a chimney
I'm not skinny and I pull a Britney every other week
But cut me some slack, who do you want me to be?
'Cause I'm too messy, and then I'm too fucking clean
You told me, "Get a job", then you ask where the hell I've been
And I'm too perfect 'til I open my big mouth
I want to be me, is that not allowed?
And I'm too clever and then I'm too fucking dumb
You hate it when I cry unless it's that time of the month
And I'm too perfect 'til I show you that I'm not
A thousand people I could be for you when you hate the fucking lot
You hate the fucking lot
You hate the fucking lot
You hate, you hate
It's taking you ages
You still don't get the hint I'm not asking for pages
But one text or two would be nice and
Please, don't pull those faces
When I've been out working my ass off all day
It's just one bottle of wine or two, but, hey
You can't even talk, you smoke weed just to help you sleep
Then why you out getting stoned at four o'clock
And then you come home to me?
And don't say hello 'cause I got high again
And forgot to fold my clothes
'Cause I'm too messy, and then I'm too fucking clean
You told me, "Get a job", then you ask where the hell I've been
And I'm too perfect 'til I open my big mouth
I want to be me, is that not allowed?
And I'm too clever and then I'm too fucking dumb
You hate it when I cry unless it's that time of the month
And I'm too perfect 'til I show you that I'm not
A thousand people I could be for you when you hate the fucking lot
You hate the fucking lot
You hate the fucking lot
Oh, and I'm too messy, and then I'm too fucking clean
You told me, "Get a job", then you ask where the hell I've been
And I'm too perfect 'til I open my big mouth
I want to be me, is that not allowed?
And I'm too clever and then I'm too fucking dumb
You hate it when I cry unless it's that time of the month
And I'm too perfect 'til I show you that I'm not
A thousand people I could be for you when you hate the fucking lot
You hate the fucking lot
You hate the fucking lot
You hate the fucking lot
You hate the fucking lot`},{id:38,titre:"It's My Life",artiste:"Bon Jovi",audioUrl:"./audio/Its-My-Life_Bon-Jovi.mp3",paroles:`This ain't a song for the broken-hearted
No silent prayer for the faith-departed
I ain't gonna be just a face in the crowd
You're gonna hear my voice
When I shout it out loud
It's my life
It's now or never
I ain't gonna live forever
I just want to live while I'm alive
It's my life
My heart is like the open highway
Like Frankie said, "I did it my way"
I just want to live while I'm alive
It's my life
This is for the ones who stood their ground
It's for Tommy and Gina who never backed down
Tomorrow's getting harder, make no mistake
Luck ain't enough, you've got to make your own breaks
It's my life
It's now or never
I ain't gonna live forever
I just want to live while I'm alive
It's my life
My heart is like the open highway
Like Frankie said, "I did it my way"
I just want to live while I'm alive
It's my life
You better stand tall when they're calling you out
Don't bend, don't break, baby, don't back down
It's my life
It's now or never
I ain't gonna live forever
I just want to live while I'm alive
It's my life
My heart is like the open highway
Like Frankie said, "I did it my way"
I just want to live while I'm alive
It's my life`},{id:39,titre:"Qui a le droit",artiste:"Patrick Bruel",audioUrl:"./audio/PatrickBruel_Qui-a-le-droit.mp3",paroles:`On m'avait dit "te pose pas trop de questions"
Tu sais petit, c'est la vie qui te répond
À quoi ça sert de vouloir tout savoir?
Regarde en l'air et vois ce que tu peux voir
On m'avait dit "faut écouter son père"
Le mien a rien dit, quand il s'est fait la paire
Maman m'a dit "t'es trop p'tit pour comprendre"
Et j'ai grandi avec une place à prendre
Qui a le droit, qui a le droit
Qui a le droit d'faire ça
À un enfant qui croit vraiment
C'que disent les grands?
On passe sa vie à dire merci
Merci à qui, à quoi?
À faire la pluie et le beau temps
Pour des enfants à qui l'on ment
On m'avait dit que les hommes sont tous pareils
Y'a plusieurs dieux, mais y'a qu'un seul soleil
Oui mais, l'soleil il brille ou bien il brûle
Tu meurs de soif ou bien tu bois des bulles
À toi aussi, j'suis sûr qu'on t'en a dit
De belles histoires, tu parles, que des conneries
Alors maintenant, on s'retrouve sur la route
Avec nos peurs, nos angoisses et nos doutes
Qui a le droit, qui a le droit
Qui a le droit d'faire ça
À un enfant qui croit vraiment
C'que disent les grands?
On passe sa vie à dire merci
Merci à qui, à quoi?
À faire la pluie et le beau temps
Pour des enfants à qui l'on ment
Qui a le droit, qui a le droit
Qui a le droit d'faire ça
À un enfant qui croit vraiment
C'que disent les grands?
On passe sa vie à dire merci
Merci à qui, à quoi?
À faire la pluie et le beau temps
Pour des enfants à qui l'on ment`},{id:40,titre:"On verra",artiste:"Nekfeu",audioUrl:"./audio/Nekfeu_On-verra.mp3",paroles:`On sèche les cours, la flemme marque le quotidien
Être en couple, ça fait mal que quand t'y tiens
Même si j'ai rien à prouver, j'me sens un peu seul
J'ai toujours pas trouvé la pièce manquante du puzzle
En possession d'drogues, les jeunes sont fêtards
Quelle ironie d'mourir en position fœtale
Je viens à peine de naitre, demain j'serai vieux
Mais j'vais tout faire pour être à jamais ce rêveur

On verra bien ce que l'avenir nous réservera
On verra bien, vas-y, viens, on n'y pense pas
On verra bien ce que l'avenir nous réservera
On verra bien, on verra bien

Ce soir, on ira faire un tour chez l'épicier ouvert en bas
Et on parlera d'amour, entassés sur une véranda
Élevé par une vraie ronne-da, j'ai des valeurs qu'ils verront pas
Être un homme ça prend du temps
Comme commander un verre en boîte
J'ai l'vertige quand j'pense à toute la route
Qu'il me reste à accomplir
J'suis prêt à t'casser les couilles si t'as bu
J'te laisserai pas conduire
Le temps ça file, on a peur d’enchaîner les défaites et puis rater
Sa vie, pas de projets à part mater des dvd piratés
Ah, on verra bien
Ce monde rend fou, tout le monde est en guerre
Plus on s'renfloue et moins on voit clair
Quand t'as pas d'argent, dans ce monde, t'as pas d'droit
Y'a ceux qui cassent un tête et ceux qui tapent à trois
Combien d'fois j'ai volé par flemme de faire la queue?
Mon papa m'croit pas, mes sappes sentent le tabac froid
On s'fait chier au taff, on attend les cances-va
On s'parle derrière un ordi mais, en vrai, quand est-ce qu'on s'voit?

On verra bien ce que l'avenir nous réservera
On verra bien, vas-y, viens, on n'y pense pas
On verra bien ce que l'avenir nous réservera
On verra bien, on verra bien

Ici, non seulement ça rappe
Mais quand y'a un gros ceau-mor ça rapplique
N'aie pas peur des insultes qu'on se lance
Aux consonances arabiques
On est tous dans le même bateau
Même ceux que l'on aime pas trop
Car l'amour, le son et la bouffe sont devenus consommation rapide
Les jeunes pensent plus à des stars débiles qu'à martin luther king
Se lèvent jamais avant midi à part le matin d'une perquis'
Pendant qu'ses copains révisaient, le petit ken devenait écrivain
Oui, je pense qu'à m'amuser mais pour la coke j'ai le nez de krilin
S-crew, 1.9.9.5, on en a rien à foutre de rien
Blackbird, l'entourage, on en a rien à foutre de rien
Nos corps fonctionnent à l'envers, on marche avec des têtes
On se sent avec un regard et on joue avec les nerfs
Moi, je parle avec les mains, parfois j'pense avec ma
Mais je touche avec mes pensées et j'écris avec le cœur
J'en ai

Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien
Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien
Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien
Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien
Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien
Rien à foutre de rien, rien à foutre de rien, je n'en ai vraiment
Rien à foutre de rien, rien à foutre de rien, on verra bien`},{id:41,titre:"Pump It",artiste:"Black Eyed Peas",audioUrl:"./audio/Black-Eyed-Peas_Pump-It.mp3",paroles:`Ha, ha, ha
Pump it
Ha, ha, ha
And pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Turn up the radio
Blast your stereo
Right (ha, ha, ha)
Niggas wanna hate on us (who?)
Niggas be envious (who?)
And I know why they hating on us (why?)
'Cause that's so fabulous (what?)
I'ma be real on us (c'mon)
Nobody got nothing on us (no)
Girls be all on us
From London back down to the U.S. (S.S.)
We rockin' this (contagious)
Monkey business (outrageous)
Just confess, your girl admits that we the shit
F-R-E-S-H we (fresh)
D-E-F, that's right we def' (rock)
We definite, B-E-P we reppin' it
So
Turn me up (turn it up)
Turn me up (turn it up)
Turn me up
Come on baby, just
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
And say, "Oh-oh, oh-oh"
Say, "Oh-oh, oh-oh"
Yo, yo
Turn up the radio
Blast your stereo
Right now (huh)
This joint is fizzlin'
It's sizzlin'
Right
Yo, check this out right here
Dude wanna hate on us (dude)
Dude need to ease on up (dude)
Dude wanna act on up
But dude get shut like flava shut (down)
Chick say she ain't down
But chick backstage when we in town (ha)
She like man on drum (boom)
She wanna hit 'n' run (err)
Yeah, that's the speed
That's who we do
That's who we be
B-L-A-C-K E-Y-E-D P to the E
Then the A to the S
When we play, you shake your ass
Shake it, shake it, shake it girl
Make sure you don't break it, girl
'Cause we gonna
Turn it up (turn it up)
Turn it up (turn it up)
Turn it up
Come on baby, just
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
And say, "Oh-oh, oh-oh"
Say, "Oh-oh, oh-oh"
Yo, yo
Turn up the radio
Blast your stereo
Right now (huh)
This joint is fizzlin'
It's sizzlin'
Right
Damn (damn)
Damn (damn)
Damn (damn)
Damn (damn, oh)
Damn (damn, oh)
Apl.de.ap from the Philippines
Live and direct, rocking this scene
Breaking on down for the B-boys
And B-girls waiting to do they thing
Pump it, louder come on
Don't stop, and keep it goin'
Do it, let's get it on
Move it!
Come on, baby, do it (uhh)
La-da-dee-da-da-dee-da
On the stere-ere-ere-ere-o (huh)
Let those speakers blow your mind
(Blow my mind baby)
Just let it go, let it go
Here we go (huh)
La-da-dee-da-da-dee-da (come on, yeah)
On the radi-adi-adi-adi-o (huh)
The system's gonna feel so fi-i-i-i-i-i-ine
(I'm fine, yeah, I'm fine and you?)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
Pump it (louder)
And say, "Oh-oh, oh-oh"
Say, "Oh-oh, oh-oh"
Yo, yo
Turn up the radio
Blast your stereo
Right now (uhh)
This joint is fizzlin'
It's sizzlin'
Right`},{id:42,titre:"Ninja",artiste:"Soprano",audioUrl:"./audio/Ninja.mp3",paroles:`Ya
Ya
Ya

Tu l'as plaqué pour un prince charmant
Grand, musclé, gros bolide allemand
Cultivé, riche et élégant
Il avait le pedigree d'un super amant
L'homme parfait, l'homme rêvé
Il avait tout ce que l'autre n'avait pas
Il t'offrait du LV
T'as tout fait pour qu'un jour il te mette la bague au doigt
Doigt, doigt

Mais dès qu'il a eu son premier soir
Soir, soir
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh

Tu l'as larguée pour une latina
Grande brune gaulée comme une Rihanna
Robe moulante, prof de zumba
Au lit elle t'a fait croire que t'avais 20 ans
La femme parfaite, t'en rêvais
Elle avait tout ce que l'autre n'avait pas
Tu lui offrais du Dolce
T'as tout fait pour qu'un jour tu lui mettes la bague au doigt
Doigt, doigt

Mais dès qu'elle a vidé ta Visa
-Sa, -sa
Elle est partie comme un ninja, shéh-ja, shéh-ja, shéh
Elle est partie comme un ninja, shéh-ja, shéh-ja, shéh
Elle est partie comme un ninja, shéh-ja, shéh-ja, shéh
Elle est partie comme un ninja, shéh-ja, shéh-ja, shéh

Dans la vie rien n'est parfait
En amour rien n'est parfait
Tu envois tous tes regrets
À ton ex en espérant le revoir
Voir, voir

Ton message est resté en "lu" un soir
Cinq soirs, dix soirs
Car il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh
Il est parti comme un ninja, shéh-ja, shéh-ja, shéh

Elle t'a fait le coup du ninja, oh`},{id:43,titre:"All of Me",artiste:"John Legend",audioUrl:"./audio/John-Legend_All-of-Me.mp3",paroles:`What would I do without your smart mouth?
Drawing me in, and you kicking me out
You've got my head spinning, no kidding
I can't pin you down

What's going on in that beautiful mind?
I'm on your magical mystery ride
And I'm so dizzy, don't know what hit me
But I'll be alright

My head's underwater
But I'm breathing fine
You're crazy and I'm out of my mind
'Cause all of me loves all of you

Love your curves and all your edges
All your perfect imperfections
Give your all to me, I'll give my all to you
You're my end and my beginning
Even when I lose, I'm winning
'Cause I give you all of me
And you give me all of you, oh-oh

How many times do I have to tell you
Even when you're crying, you're beautiful too?
The world is beating you down
I'm around through every mood

You're my downfall, you're my muse
My worst distraction, my rhythm and blues
I can't stop singing
It's ringing in my head for you

My head's underwater
But I'm breathing fine
You're crazy, and I'm out of my mind
'Cause all of me loves all of you

Love your curves and all your edges
All your perfect imperfections
Give your all to me, I'll give my all to you
You're my end and my beginning
Even when I lose, I'm winning
'Cause I give you all of me
And you give me all of you, oh-oh

Give me all of you
Cards on the table, we're both showing hearts
Risking it all, though it's hard
'Cause all of me loves all of you

Love your curves and all your edges
All your perfect imperfections
Give your all to me, I'll give my all to you
You're my end and my beginning
Even when I lose, I'm winning
'Cause I give you all of me
And you give me all of you

I give you all of me
And you give me all of you, oh-oh`},{id:44,titre:"Ramenez la coupe à la maison",artiste:"Vegedream",audioUrl:"./audio/Vegedream_Ramenez-la-coupe.mp3",paroles:`Et ça, c'est Vegedream de Gagnoa
Casse la démarche comme Samuel, Samuel Umtiti
Casse la démarche comme Samuel, Samuel Umtiti
Casse la démarche comme Samuel, Samuel Umtiti
Casse la démarche comme Samuel, Samuel Umtiti

Et si y a drah, on peut toujours appeler Benjamin Mendy
Et si y a drah, on peut toujours appeler Benjamin Mendy

Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, c'est le moment
Allez les bleus, allez
Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, on est champion
Allez les bleus, allez

Qui contrôle le terrain? (Matuidi)
Blaise Matuidi, yeah (Matuidi)
Avec lui, on est serein (Matuidi)
Blaise Matuidi, yeah (Matuidi)
Qui contrôle le terrain? (Matuidi)
Blaise Matuidi, yeah (Matuidi)
Avec lui, on est serein (Matuidi)
Blaise Matuidi, yeah (Matuidi)

Passement de jambe, crochet à gauche, à droite
Kylian Mbappé
Accélération, virgule, petit-pont, frappe
Kylian Mbappé
J'sais plus si j'suis gaucher ou droitier
Je tire des deux pieds, Ousmane Dembélé
J'sais plus si j'suis gaucher ou droitier
Je tire des deux pieds, Ousmane Dembélé

Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, c'est le moment
Allez les bleus, allez
Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, on est champion
Allez les bleus, allez

Mais comment il s'appelle? Kanté
N'Golo, N'Golo Kanté
Comment il s'appelle? Kanté
N'Golo, N'Golo Kanté
Comment il s'appelle? Kanté
N'Golo, N'golo Kanté
Mais comment il s'appelle? Kanté
N'Golo, N'Golo Kanté

Maestro Kimpembe, Kimpembe, Kimpembe, Kimpembe
Kimpembe, Kimpembe, Kimpembe
Le milieu est assuré, attaquant, défenseur, Paulo
Paulo, Paul Pogba
La Pioche, Paulo
Paulo, Paul Pogba

Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, c'est le moment
Allez les bleus, allez
Ramenez la coupe à la maison
Allez les bleus, allez
20 ans après, on est champion
Allez les bleus, allez (eh, ehy)

On est ensemble
Antoine Griezmann, pénalty
On est ensemble (eh, ehy)
On est ensemble
Nabil Fékir, Tolisso
On est ensemble (eh, hey)
On est ensemble
Pavard, Rami, Hernandez
On est ensemble (eh, hey)
On est ensemble
Mandanda, Lloris, Sidibé
On est ensemble (eh, hey)
On est ensemble
Olivier Giroud, Nzonzi
On est ensemble
Raphaël Varane, Flo' Thauvin
On est ensemble
Thomas Lemar, Areola
On est ensemble

Ça, c'est Vegedream de Gagnoa
Didier Deschamps, merci beaucoup
On est ensemble
On est ensemble`},{id:45,titre:"Reine",artiste:"Dadju",audioUrl:"./audio/Dadju-Reine.mp3",paroles:`Aujourd'hui, je suis fatigué
Je t'ai regardé dormir
Et si ma voix peut t'apaiser
Je chanterai pour toi toute la nuit

Je t'entends dire à tes pines-co
Dadju, j'peux plus me passer de lui
Hey, tout va glisser sur ta peau
C'est comme si je te passais de l'huile

Et s'ils ne sont pas nous, c'est tant pis pour eux
Et s'ils sont jaloux, c'est tant pis pour eux
Fais-le moi savoir quand c'est douloureux
Je suis là s'il faut encaisser pour nous deux

Et je le sais, je te fais confiance
Quand tu me souris, tu fais pas semblant
J'ai pas besoin d'attendre plus longtemps
Je sais qu'il est temps de partager mon sang

Et t'élever au rang de reine
Au rang de reine, au rang de reine
J'vais t'élever au rang de reine
Au rang de reine, au rang de reine

Je sais que l'amour c'est compliqué, mais avec toi, c'est plus facile
Continue de rester toi-même et je ne regrette pas de t'avoir choisi
Je l'ai promis à ton papa, je vais prendre soin de sa fille
Tu fais partie de ma famille et Dieu sait combien j'aime ma famille

Et s'ils te demandent, c'est qu'ils sont curieux
S'ils te redemandent, c'est qu'ils sont envieux
Ferme la porte à ceux qui font de leur mieux
Pour nous empêcher d'être deux quand on sera vieux

Et je le sais, je te fais confiance
Quand tu me souris, tu fais pas semblant
J'ai pas besoin d'attendre plus longtemps
Je sais qu'il est temps de partager mon sang

Et t'élever au rang de reine
Au rang de reine, au rang de reine
J'vais t'élever au rang de reine
Au rang de reine, au rang de reine

Assez parlé, au bout d'un moment y'a plus les mots
Ça y'est, j'ai délaissé mon cœur dans ta paume
J'te laisserai pas t'en aller, c'est mort
J'ai mis du temps à te trouver mi amor

Celui qui dit qu'on s'est trompé a tort
On se battra même contre les coups du sort
Assez parlé, au bout d'un moment y'a plus les mots
Ça y'est, j'ai délaissé mon cœur dans ta paume
J'te laisserai pas t'en aller, c'est mort
J'ai mis du temps à te trouver mi amor

Celui qui dit qu'on s'est trompé a tort
On se battra même contre les coups du sort

Et je le sais, je te fais confiance
Quand tu me souris, tu fais pas semblant
J'ai pas besoin d'attendre plus longtemps
Je sais qu'il est temps de partager mon sang

Et t'élever au rang de reine
Au rang de reine, au rang de reine
J'vais t'élever au rang de reine
Au rang de reine, au rang de reine

Au rang de, au rang de
Je vais t'élever au rang de reine
Au rang de, au rang de
Laisse-moi t'élever au rang de reine`},{id:46,titre:"Dommage",artiste:"Bigflo & Oli",audioUrl:"./audio/Bigflo-et-Oli_Dommage.mp3",paroles:`Louis prend son bus, comme tous les matins
Il croisa cette même fille, avec son doux parfum
Qu'elle vienne lui parler, il espère tous les jours
Ce qu'il ressent au fond d'lui, c'est ce qu'on appelle l'amour

Mais Louis, il est timide
Et elle, elle est si belle
Il ne veux pas y aller, il est collé au fond d'son siège
Une fois elle lui a souri quand elle est descendu
Et depuis ce jour là, il ne l'a jamais revu

Ah il aurait dû y aller, il aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage,
C'est p't'être la dernière fois"

Yasmine a une belle voix, elle sait qu'elle est douée
Dans la tempête de sa vie, la musique est sa bouée
Face à sa mélodie, le monde est à ses pieds
Mais son père lui répétait: "trouve-toi un vrai métier"

Parfois elle s'imagine sous la lumière des projecteurs
Sur la scène à recevoir les compliments et les jets de fleurs
Mais Yasmine est rouillée, coincée dans la routine
Ça lui arrive de chanter quand elle travaille à l'usine

Ah elle aurait dû y aller, elle aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage,
C'est p't'être la dernière fois"

Ah elle aurait dû y aller, elle aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage,
C'est p't'être la dernière fois"

Diego est affalé au fond du canapé
Il engueule son p'tit frère quand il passe devant la télé
Ses amis sont sortis, il ne les a pas suivis
Comme souvent seule la Lune viendra lui tenir compagnie

Diego est triste il ne veut rien faire de sa nuit
Il déprime de ne pas trouver la femme de sa vie
Mais mon pauvre Diego, tu t'es tellement trompé
C'était à cette soirée que t'allais la rencontrer

Ah il aurait dû y aller, il aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage,
C'est p't'être la dernière fois"

Pauline elle est discrète, elle oublie qu'elle est belle
Elle a sur tout le corps des tâches de la couleur du ciel
Son mari rentre bientôt, elle veut même pas y penser
Quand il lui prend le bras, c'est pas pour la faire danser

Elle repense à la mairie, cette décision qu’elle a prise
A cette après midi où elle avait fait sa valise
Elle avait un avenir, un fils à élever
Après la dernière danse, elle s'est pas relevée

Ah elle aurait dû y aller, elle aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage
C'est p't'être la dernière fois"

On a tous dit : "Ah c'est dommage, ah c'est dommage,
ah c'est dommage, ah c'est dommage"
On a tous dit : "Ah c'est dommage, ah c'est dommage,
ah c'est dommage, ah c'est dommage"

Ah elle aurait dû y aller, elle aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage,
C'est p't'être la dernière fois"

Ah elle aurait dû y aller, elle aurait dû le faire
Crois-moi
On a tous dit : "Ah c'est dommage, ah c'est dommage
C'est p't'être la dernière fois"

Vaut mieux vivre avec des remords qu'avec des regrets
Vaut mieux vivre avec des remords qu'avec des regrets
Vaut mieux vivre avec des remords qu'avec des regrets
Vaut mieux vivre avec des remords c'est ça le secret`},{id:47,titre:"Firework",artiste:"Katy Perry",audioUrl:"./audio/Katy-Perry_Firework.mp3",paroles:`Do you ever feel like a plastic bag
Drifting through the wind
Wanting to start again?

Do you ever feel, feel so paper thin
Like a house of cards
One blow from caving in?

Do you ever feel already buried deep?
Six feet under screams, but no one seems to hear a thing

Do you know that there's still a chance for you
'Cause there's a spark in you
You just gotta ignite the light, and let it shine

Just own the night like the 4th of July
'Cause, baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky

Baby, you're a firework
Come on, let your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe

You don't have to feel like a waste of space
You're original, cannot be replaced
If you only knew what the future holds
After a hurricane comes a rainbow

Maybe a reason why all the doors are closed
So you could open one that leads you to the perfect road
Like a lightning bolt, your heart will blow
And when it's time, you'll know

You just gotta ignite the light, and let it shine
Just own the night like the 4th of July
'Cause, baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky

Baby, you're a firework
Come on, let your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe

Boom, boom, boom
Even brighter than the moon, moon, moon
It's always been inside of you, you, you
And now it's time to let it through

'Cause, baby, you're a firework
Come on, show 'em what you're worth
Make 'em go, "Oh, oh, oh"
As you shoot across the sky

Baby, you're a firework
Come on, make your colors burst
Make 'em go, "Oh, oh, oh"
You're gonna leave 'em all in awe, awe, awe

Boom, boom, boom
Even brighter than the moon, moon, moon
Boom, boom, boom
Even brighter than the moon, moon, moon`},{id:48,titre:"Femme libérée",artiste:"Cookie Dingler",audioUrl:"./audio/Femme-liberee_Cookie-Dingler.mp3",paroles:`Ouh, maximum respect à toutes les femmes libérées, ouais
Wesh, bébé, on parle de toi, ouais
Tu parles de moi? Ah-ha
C'est pour toi, c'est pour toi
C'est pour moi?
C'est pour toi, c'est pour toi
Ouais

Elle est abonnée á Marie-Claire
Dans l'Nouvel Ob's elle ne lit que Brétécher
Le Monde, y a longtemps qu'elle fait plus semblant
Elle a achète Match en cachette, c'est bien plus marrant

Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
(Ne la laisse pas tomber)

Au fond de son lit, un macho s'endort (hé-héà
Qui ne l'aimera pas plus loin que l'aurore (oh, non)
Mais elle s'en fout, elle s'éclate quand même
Et lui ronronne des tonnes de "je t'aime"

Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber (oh, non, oh, non, oh, non)
Ne la laisse pas tomber (yeah)
Ne la laisse pas tomber (ne la laisse pas tomber)
C'est une femme libérée
Ne la laisse pas tomber (ne la laisse pas tomber)
C'est une femme libérée

Sa première ride lui fait du souci
Le reflet du miroir pèse sur sa vie
Elle rentre son ventre à chaque fois qu'elle sort
Même dans "Elle" ils disent qu'il faut faire des efforts (tout l'monde, tout l'monde)

Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
(C'est pas si facile)
Ne la laisse pas tomber (ne la laisse pas tomber)
Ne la laisse pas tomber

Toujours motivée, a pas laissé tomber
Sans rien calculer, sans jamais regretter
Toujours à avancer d'un pas décidé
Elle se fait remarquer, cette jeune femme libérée
Elle fume beaucoup, elle a des avis sur tout
Elle aime raconter qu'elle sait changer une roue
Elle avoue son âge, celui d'ses enfants
Et goûte même un petit joint de temps en temps

Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
(Tout l'monde, tout l'monde, tout l'monde)
Ne la laisse pas tomber (yeah)
Ne la laisse pas tomber (everybody)
Ne la laisse pas tomber (balancez, balancez)
Ne la laisse pas tomber (tomber)
Ne la laisse pas tomber
C'est une femme libérée
Rrr-bada-baday
Yeah

Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber
Elle est si fragile
Être une femme libérée, tu sais, c'est pas si facile
Ne la laisse pas tomber`},{id:49,titre:"Laisse-moi",artiste:"Keblack",audioUrl:"./audio/Keblack_Laisse-moi.mp3",paroles:`J'suis rentré chez toi, j'ai tout pris, même ton cœur, j'suis parti avec
Bébé a l'bras long comme Luffy, j'sais pas si t'as la réf
Pour t'emmener au soleil, t'sais pas c'que j'ai fait
J'ai dû vendre de la neige

Elle c'est ma sicario, elle est restée même quand c'est la hess
J'la vois dans mes DMs, elle veut revenir, j'lui dis "c'est mort"
Elle dit "j'suis mieux qu'tes babies", mais j'lui dis qu'c'est mort

Porte pas, porte pas l'œil
S'il te plaît, porte pas l'œil
Nous deux, c'est plus pareil
Elle veut qu'on s'voit t'à l'heure

Porte pas, porte pas l'œil
S'il te plaît, porte pas l'œil
Nous deux, c'est plus pareil
Elle veut qu'on s'voit t'à l'heure

Laisse-moi, s'il te plaît, laisse-moi
J'te dis qu'c'est mort, s'il te plaît laisse-moi
Laisse-moi, s'il te plaît, laisse-moi
J'te dis qu'c'est mort, s'il te plaît laisse-moi

J'suis rentré dans son cœur pour voir mon avenir, j'me suis pas vu avec
Entre nous, trop d'latence, j'suis pas dans les temps
J'sais qu't'as capté la réf (t'as capté la ref)
Qu'est-c'qu'tu veux au final? (Dis-moi)

Nous deux y a plus de feeling (pourquoi?)
Elle veut me rendre fêlé
Nous deux, c'est de l'histoire ancienne comme les Fila

Porte pas, porte pas l'œil
S'il te plaît, porte pas l'œil
Nous deux, c'est plus pareil
Elle veut qu'on s'voit t'à l'heure

Porte pas, porte pas l'œil
S'il te plaît, porte pas l'œil
Nous deux, c'est plus pareil
Elle veut qu'on s'voit t'à l'heure

Laisse-moi, s'il te plaît, laisse-moi
J'te dis qu'c'est mort, s'il te plaît laisse-moi
Laisse-moi, s'il te plaît, laisse-moi
J'te dis qu'c'est mort, s'il te plaît laisse-moi`},{id:50,titre:"Parado no Bailão",artiste:"MC L da Vinte ft. MC Gury",audioUrl:"./audio/MC-l-da-vinte-e-mc-gury_parado-no-bailao.mp3",paroles:`É, é que eu queria muito ela
Ela não me dava atenção
Fiz de tudo por ela pra manter uma relação
E hoje nóis nem conversa

Tô decidido e não é à toa
Que eu me joguei no Mandela (oi)
Oi, que eu me joguei pro Mandela
(Que eu me joguei no Mandela)

Eu parado no bailão (oi, no bailão)
Ela com o popozão e o popozão no chão
O popozão no chão e o popozão no chão
Eu parado no bailão, no bailão

Ela com o popozão, o popozão no chão
O popozão no chão, o popozão no chão
O popozão no chão

Eu (eu) parado no bailão, no, no bailão
Ela com o popozão e o popozão no chão
E o popozão no chão, e o popozão no chão

É, é que eu queria muito ela
Ela não me dava atenção
Fiz de tudo por ela pra manter uma relação
E hoje nóis nem conversa

Tô decidido e não é à toa
Que eu me joguei no Mandela (oi)
Oi, que eu me joguei pro Mandela
(Que eu me joguei no Mandela)

Eu parado no bailão (oi, no bailão)
Ela com o popozão e o popozão no chão
O popozão no chão e o popozão no chão
Eu parado no bailão, no bailão

Ela com o popozão, o popozão no chão
O popozão no chão, o popozão no chão
O popozão no chão

Eu (eu) parado no bailão, no, no bailão
Ela com o popozão e o popozão no chão
Ela com o popozão e o popozão no chão`},{id:51,titre:"Pour de vrai",artiste:"Vianney",audioUrl:"./audio/Vianney_Pour-de-vrai.mp3",paroles:`J'étais pas le même, vendredi
T'avais pas non plus croisé ma vie
J'étais pas pareil, à gueuler sous la pluie
J't'ai attendue, vois-tu, et depuis

C'est pas demain la veille que je maudirai le réveil
Et réveille-moi si je n'm'émerveille pas
Devant la vie que l'on a, tant qu'on vit tous les deux
Pas demain la veille que je maudirai le soleil
Car le soleil, c'est toi et moi, solennels pour une fois, hmm

J'ris pas, oh-oh
On peut voir le monde en tout petit
Ou s'aimer toute la vie
J'ris pas
On peut voir le monde en tout petit
Moi, j't'aimerai toute la vie

Pour de vrai
T'es tout c'que j'ai
Pour de vrai
T'es tout c'que j'ai

Est-ce qu'on sera les mêmes toute la vie?
Même rire aux lèvres et même envie
On fera mentir l'époque, on va quitter Paris
Puis j'te chanterai "En Cloque" en attendant le p'tit

J'ris pas, oh-oh
On peut voir le monde en tout petit
Ou s'aimer toute la vie
J'ris pas
On peut voir le monde en tout petit
Moi, j't'aimerai toute la vie

Pour de vrai
T'es tout c'que j'ai
Pour de vrai
T'es tout c'que j'ai

Et les coups de poing, les coups de vieux
J'veux qu'on les prenne à deux
Dis, les coups de poing, les coups de vieux
J'veux qu'on les prenne à deux

Et les coups de poing, les coups de vieux
J'veux qu'on les prenne à deux
Dis, les coups de poing, les coups de vieux
J'veux qu'on les prenne à deux

J'ris pas, oh-oh
On peut voir le monde en tout petit
Ou s'aimer toute la vie
J'ris pas
On peut voir le monde en tout petit
Moi, j't'aimerai toute la vie

Pour de vrai
T'es tout c'que j'ai
Pour de vrai
T'es tout c'que j'ai`},{id:52,titre:"Bad Guy (Sasha Vector Remix)",artiste:"Billie Eilish",audioUrl:"./audio/Billie-Eilish_Bad-Guy.mp3",paroles:`White shirt now red, my bloody nose
Sleepin', you're on your tippy toes
Creepin' around like no one knows
Think you're so criminal

Bruises on both my knees for you
Don't say thank you or please
I do what I want when I'm wanting to
My soul? So cynical

So you're a tough guy
Like it really rough guy
Just can't get enough guy
Chest always so puffed guy

I'm that bad type
Make your mama sad type
Make your girlfriend mad tight
Might seduce your dad type
I'm the bad guy
Duh

I'm the bad guy

I like it when you take control
Even if you know that you don't
Own me, I'll let you play the role
I'll be your animal

My mommy likes to sing along with me
But she won't sing this song
If she reads all the lyrics
She'll pity the men I know

So you're a tough guy
Like it really rough guy
Just can't get enough guy
Chest always so puffed guy

I'm that bad type
Make your mama sad type
Make your girlfriend mad tight
Might seduce your dad type
I'm the bad guy
Duh

I'm the bad guy, duh
I'm only good at bein' bad, bad

I like when you get mad
I guess I'm pretty glad that you're alone
You said she's scared of me?
I mean, I don't see what she sees
But maybe it's 'cause I'm wearing your cologne

I'm a bad guy
I'm, I'm a bad guy
Bad guy, bad guy
I'm a bad`},{id:53,titre:"Promis Juré",artiste:"Lilian Renaud",audioUrl:"./audio/Promis-jure_Lilian-Renaud.mp3",paroles:`Combien de navires ont pris l'eau
Avant de toucher le rivage
Combien de soupirs, de sanglots
Avant de guérir nos visages

L'adversité écorche nos rêves
Qui tracent nos parcours, notre histoire
Et pour qu'un nouveau jour se lève,
Partir avant qu'il soit trop tard

Promis juré
Tout ira mieux demain
A l'abri des regrets
Attendons l'aube si tu veux bien
Tout ira mieux demain

Combien de nuits pleines d'éclairs
Avant de connaître les grands jours
Combien de lumières éphémères
Avant celles qui brillent pour toujours

Pourquoi se priver d'être nous
De faire ce qu'on fait de mieux
Puisque mes espoirs les plus fous
Vivrons à travers vos yeux

Promis juré
Tout ira mieux demain
Mon promis juré, mon promis juré
Attendons l'aube si tu veux bien
Tout ira mieux demain`},{id:54,titre:"The Ocean",artiste:"Mike Perry ft. Shy Martin",audioUrl:"./audio/Mike-Perry_The-Ocean.mp3",paroles:`You can be my guiding light
Keep me
Company in the night
That's all I need
All I want
Is for you to stay a little longer now

With arms around me
Like a border
Like the air I breathe
I let you in
Keep me warm underneath my skin
'Cause I'm
Giving in
To your touch
I can never get enough
Dive in deep
Into your ocean
Ocean
Ocean
Ocean

You can be my safety zone
Somewhere
I can go and feel unknown
That's all I need
All I want
Is to stay a little longer now
Arms around me like a border
Like an endless stream
You take me in
To a place that I've never been
Now I'm
Giving in to your touch
I will never get enough
Dive in deep into your ocean
Ocean
Ocean
Ocean`},{id:55,titre:"Lordly",artiste:"FEDER ft. Alex Aiono (MDZN remix)",audioUrl:"./audio/Lordly-FEDER.mp3",paroles:`And once we run the show everyone will know
That we will be the ones that hold the highest truth
And once we run the show everyone will know
That we will be the ones that hold the highest truth

I'm from that game strong on my face
I tell 'em don't go, we love, we love, that's my place
There's nothing to do, I just do it
Nothing but love under the sun

And once we run the show everyone will know
That we will be the ones that hold the highest truth
And once we run the show everyone will know
That we will be the ones that hold the highest truth

There lies a kingdom in my heart
A reign of light that lights up the dark
When I step to it, I just do it
Nothing but love under the sun

And once we run the show everyone will know
That we will be the ones that hold the highest truth
And once we run the show everyone will know
That we will be the ones that hold the highest truth`},{id:56,titre:"La Pluie",artiste:"OrelSan ft. Stromae",audioUrl:"./audio/OrelSan_La-Pluie].mp3",paroles:`J'viens d'la France où on danse la chenille
Où on prend plus de caisses que des crash tests dummies
J'ai des potes diplômés, d'autres qu'ont pas lu deux livres
Qui sont sûrement sur un muret, dans les rues du centre ville

Mon père a gravi l'échelle pour devenir c'qu'il voulait être
Ma mère est la ménagère à qui les publicitaires veulent la mettre
J'connais la campagne et ses gros sabots
Où ça vole pas haut, les ragots et les oiseaux

Toujours autant d'pluie chez moi
Toujours autant d'pluie chez moi
Mais il fait quand même beau, il fait beau
Il fait beau, il fait beau
Chez moi, il fait beau, il fait beau
Il fait beau, il fait beau
Chez moi, il fait beau

J'viens d'la terre du milieu où y'a plein de p'tits vieux
Où l'chômage et la tisane forment un cercle vicieux
Où on critique les invités qui viennent de partir
C'est pas qu'on est lent, c'est qu'on prend notre temps pour réfléchir

J'viens d'la classe moyenne, moyennement classe
Où tout l'monde cherche une place, Julien Clerc dans l'monospace
J'freestylais dans ma tête sur le bruit des essuie-glaces
Y'a la pluie en featuring dans toutes mes phrases

Toujours autant d'pluie chez moi
Mais il fait quand même beau, il fait beau
Il fait beau, il fait beau
Chez moi, il fait beau, il fait beau
Il fait beau, il fait beau

Chez moi, y'a du soleil quarante jours par an
Tu peux passer la plupart de l'année à l'attendre
J'regardais par la fenêtre, enfermé dans ma chambre
J'priais pour la fin d'l'averse et aller faire d'la rampe

J'connais qu'le bruit d'la pluie, l'odeur du béton mouillé
Si j'suis parti, c'est parce que j'avais peur de rouiller
Trempé, j'aurais jamais pensé
Qu'le mauvais temps finirait par me manquer

Il fait quand même beau, il fait beau
Il fait beau, il fait beau
Chez moi, il fait beau, il fait beau
Il fait beau, il fait beau
Mais il fait quand même beau, il fait beau
Il fait beau, il fait beau
Chez moi, il fait beau, il fait beau
Il fait beau, il fait beau

Toujours autant d'pluie chez moi
Toujours autant d'pluie chez moi
Toujours autant d'pluie chez moi
Toujours autant d'pluie chez moi
Toujours autant d'pluie chez moi`},{id:57,titre:"Human",artiste:"Rag'n'Bone Man",audioUrl:"./audio/RagnBoneMan-Human.mp3",paroles:`I'm only human
I'm only—I'm only—
I'm only human, human

Maybe I'm foolish
Maybe I'm blind
Thinking I can see through this
And see what's behind
Got no way to prove it
So maybe I'm lying

But I'm only human after all
I'm only human after all
Don't put your blame on me
Don't put your blame on me

Take a look in the mirror
And what do you see?
Do you see it clearer
Or are you deceived
In what you believe?

'Cause I'm only human after all
You're only human after all
Don't put the blame on me
Don't put your blame on me

Some people got the real problems
Some people out of luck
Some people think I can solve them
Lord heavens above

I'm only human after all
I'm only human after all
Don't put the blame on me
Don't put your blame on me

Don't ask my opinion
Don't ask me to lie
Then beg for forgiveness
For making you cry
For making you cry

'Cause I'm only human after all
I'm only human after all
Don't put your blame on me
Don't put the blame on me

Some people got the real problems
Some people out of luck
Some people think I can solve them
Lord heavens above

I'm only human after all
I'm only human after all
Don't put the blame on me
Don't put the blame on me

I'm only human, I make mistakes
I'm only human that's all it takes
To put the blame on me
Don't put the blame on me

'Cause I'm no prophet or messiah
You should go looking somewhere higher

I'm only human after all
I'm only human after all
Don't put the blame on me
Don't put the blame on me

I'm only human, I do what I can
I'm just a man, I do what I can
Don't put the blame on me
Don't put your blame on me`},{id:58,titre:"7 rings",artiste:"Ariana Grande",audioUrl:"./audio/Ariana-Grande_7-rings.mp3",paroles:`Breakfast at Tiffany's and bottles of bubbles
Girls with tattoos who like getting in trouble
Lashes and diamonds, ATM machines
Buy myself all of my favorite things

Yeah
Been through some bad shit, I should be a sad bitch
Who would have thought it'd turn me to a savage?
Rather be tied up with calls and not strings
Write my own checks like I write what I sing, yeah (Yeah)

My wrist, stop watchin'
My neck is flossy
Make big deposits
My gloss is poppin'

You like my hair?
Gee, thanks! Just bought it
I see it, I like it
I want it, I got it
Yeah

I want it, I got it
I want it, I got it
I want it, I got it
I want it, I got it

You like my hair?
Gee, thanks! Just bought it
I see it, I like it
I want it, I got it
(Yep)

Wearin' a ring but ain't gon' be no "Mrs."
Bought matching diamonds for six of my bitches
I'd rather spoil all my friends with my riches
Think retail therapy my new addiction

Whoever said money can't solve your problems
Must not have had enough money to solve 'em
They say, "Which one?" I say, "Nah, I want all of 'em"
Happiness is the same price as "red-bottoms"

My smile is beamin' (yeah)
My skin is gleamin' (is gleamin')
The way it shine
I know you've seen it
You've seen it

I bought a crib
Just for just for the closet closet
Both his and hers
I want it, I got it
Yeah

I want it, I got it
I want it, I got it
I want it, I got it
I want it, I got it
Baby

You like my hair?
Gee, thanks! Just bought it
Oh, yeah
I see it, I like it
I want it, I got it
Yep

Yeah, my receipts be lookin' like phone numbers
If it ain't money, then wrong number
Black Card is my business card
The way it be settin' the tone for me

I don't mean to brag
But I be like, "Put it in the bag"
Yeah
When you see them racks
They stacked up like my ass
Yeah

Shoot
Go from the store to the booth
Make it all back in one loop
Gimme the loot
Never mind, I got the juice
Nothin' but net when we shoot

Look at my neck
Look at my jet
Ain't got enough money to pay me respect
Ain't no budget when I'm on the set
If I like it then that's what I get
Yeah

I want it, I got it
I want it, I got it
(Oh yeah)
Yeah
I want it, I got it
I want it, I got it
Oh, yeah, yeah

You like my hair?
Gee, thanks! Just bought it
I see it, I like it
I want it, I got it
(I see, yep)`},{id:59,titre:"Lady (Hear Me Tonight)",artiste:"Modjo",audioUrl:"./audio/Modjo.mp3",paroles:`Lady
Hear me tonight
'Cos my feeling
Is just so right
As we dance
By the moonlight
Can't you see
You're my delight

Lady
I just feel like
I won't get you
Out of my mind
I feel loved
For the first time
And I know that it's true
I can tell by the look in your eyes

Lady
Hear me tonight
'Cos my feeling
Is just so right
As we dance
By the moonlight
Can't you see
You're my delight

Lady
I just feel like
I won't get you
Out of my mind
I feel loved
For the first time
And I know that it's true
I can tell by the look in your eyes

Lady
Hear me tonight
'Cos my feeling
Is just so right
As we dance
By the moonlight
Can't you see
You're my delight

Lady
I just feel like
I won't get you
Out of my mind
I feel loved
For the first time
And I know that it's true
I can tell by the look in your eyes

Lady
Hear me tonight
'Cos my feeling
Is just so right

Lady
I just feel like
I feel loved
For the first time

Lady
Hear me tonight
Can't you see
You're my delight`},{id:60,titre:"Hey Brother",artiste:"Avicii",audioUrl:"./audio/Avicii_Hey-Brother.mp3",paroles:`Hey, brother, there's an endless road to re-discover
Hey, sister, know the water's sweet but blood is thicker
Oh, if the sky comes falling down for you
There's nothing in this world I wouldn't do

Hey, brother, do you still believe in one another?
Hey, sister, do you still believe in love, I wonder?
Oh, if the sky comes falling down for you
There's nothing in this world I wouldn't do

What if I'm far from home?
Oh, brother, I will hear you call
What if I lose it all?
Oh, sister, I will help you out!
Oh, if the sky comes falling down for you
There's nothing in this world I wouldn't do

Hey, brother, there's an endless road to re-discover
Hey, sister, do you still believe in love, I wonder?
Oh, if the sky comes falling down for you
There's nothing in this world I wouldn't do

What if I'm far from home?
Oh, brother, I will hear you call
What if I lose it all?
Oh, sister, I will help you out!
Oh, if the sky comes falling down for you
There's nothing in this world I wouldn't do`},{id:61,titre:"Like I Can",artiste:"Sam Smith",audioUrl:"./audio/Sam-Smith_Like-I-Can.mp3",paroles:`He could be a sinner, or a gentleman
He could be a preacher when your soul is damned
He could be a lawyer on a witness stand
But he'll never love you like I can, can

He could be a stranger you gave a second glance
He could be a trophy of a one night stand
He could have your humour, but I don't understand
'Cause he'll never love you like I can, can, can

Why are you looking down all the wrong roads?
When mine is the heart and the salt of the soul
There may be lovers who hold out their hands
But they'll never love you like I can, can, can
They'll never love you like I can, can

A chance encounter of circumstance
Maybe he's a mantra keeps your mind entranced
He could be the silence in this mayhem, but then again
He'll never love you like I can, can, can

Why are you looking down all the wrong roads?
When mine is the heart and the salt of the soul
There may be lovers who hold out their hands
But they'll never love you like I can, can, can
They'll never love you like I can, can, can

They'll never love you like I can, can, can

We both have demons, that we can't stand
I love your demons, like devils can
If you're self-seeking an honest man
Then stop deceiving, Lord, please

Why are you looking down all the wrong roads?
When mine is the heart and the salt of the soul
There may be lovers who hold out their hands
But they'll never love you like I can, can, can
They'll never love you like I can, can, can
They'll never love you like I can, can, can`},{id:62,titre:"Get Lucky",artiste:"Daft Punk ft. Pharrell Williams",audioUrl:"./audio/Get-Lucky.mp3",paroles:`Like the legend of the Phoenix
All ends with beginnings
What keeps the planets spinning (uh)
The force from the beginning

(Look)

We've come too far to give up who we are
So let's raise the bar and our cups to the stars

She's up all night to the sun
I'm up all night to get some
She's up all night for good fun
I'm up all night to get lucky

We're up all night to the sun
We're up all night to get some
We're up all night for good fun
We're up all night to get lucky

We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky

The present has no ribbon
Your gift keeps on giving
What is this I'm feeling?
If you wanna leave I'm with it (ah)

We've come too far to give up who we are
So let's raise the bar and our cups to the stars

She's up all night to the sun
I'm up all night to get some
She's up all night for good fun
I'm up all night to get lucky

We're up all night to the sun
We're up all night to get some
We're up all night for good fun
We're up all night to get lucky

We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky

(We're up all night to get
We're up all night to get
We're up all night to get
We're up all night to get)

(We're up all night to get (together)
We're up all night to get (let's get funked again)
We're up all night to get lucky
We're up all night to get lucky)

(We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky)

(We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky)

We've (we're up all night to get lucky)
Come too far (we're up all night to get lucky)
To give up (we're up all night to get lucky)
Who we are (we're up all night to get lucky)
So let's (we're up all night to get lucky)
Raise the bar (we're up all night to get lucky)
And our cups (we're up all night to get lucky)
To the stars (we're up all night to get lucky)

She's up all night to the sun
I'm up all night to get some
She's up all night for good fun
I'm up all night to get lucky

We're up all night to the sun
We're up all night to get some
We're up all night for good fun
We're up all night to get lucky

We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky

We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky
We're up all night to get lucky`},{id:63,titre:"Happy",artiste:"Pharrell Wiliams",audioUrl:"./audio/Pharrell-Williams_Happy.mp3",paroles:`It might seem crazy what I'm about to say
Sunshine she's here, you can take a break
I'm a hot air balloon that could go to space
With the air, like I don't care, baby, by the way

Uh

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

Here come bad news, talking this and that (Yeah!)
Well, give me all you got, don't hold it back (Yeah!)
Well, I should probably warn you I'll be just fine (Yeah!)
No offense to you
Don't waste your time, here's why

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said

Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

Bring me down
Can't nothing bring me down
My level's too high to bring me down
Can't nothing bring me down, I said

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do

(Because I'm happy)
Clap along if you feel like a room without a roof
(Because I'm happy)
Clap along if you feel like happiness is the truth
(Because I'm happy)
Clap along if you know what happiness is to you
(Because I'm happy)
Clap along if you feel like that's what you wanna do`},{id:64,titre:"Story of My Life",artiste:"One Direction",audioUrl:"./audio/OneDirection_Story-of-My-Life.mp3",paroles:`Written in these walls are the stories that I can't explain
I leave my heart open but it stays right here empty for days
She told me in the morning she don't feel the same about us in her bones
It seems to me that when I die these words will be written on my stone

And I'll be gone, gone tonight
The ground beneath my feet is open wide
The way that I been holding on too tight
With nothing in between

The story of my life
I take her home
I drive all night
To keep her warm
And time is frozen (the story of, the story of)
The story of my life
I give her hope
I spend her love
Until she's broke
Inside
The story of my life (the story of, the story of)

Written on these walls are the colors that I can't change
Leave my heart open but it stays right here in its cage
I know that in the morning now I'll see us in the light upon a hill
Although I am broken, my heart is untamed, still

And I'll be gone, gone tonight
The fire beneath my feet is burning bright
The way that I've been holding on so tight
With nothing in between

The story of my life
I take her home
I drive all night
To keep her warm
And time is frozen (the story of, the story of)
The story of my life
I give her hope
I spend her love
Until she's broke
Inside
The story of my life (the story of, the story of)

And I been waiting for this time to come around
But baby running after you is like chasing the clouds

The story of my life
I take her home
I drive all night
To keep her warm
And time is frozen
The story of my life
I give her hope (give her hope)
I spend her love
Until she's broke (until she's broke inside)
Inside
The story of my life (the story of, the story of)

The story of my life
The story of my life (the story of, the story of)
The story of my life`},{id:65,titre:"Hymn For The Weekend",artiste:"Coldplay ft. Beyoncé (Seeb Remix)",audioUrl:"./audio/Coldplay_Hymn-For-The-Weekend.mp3",paroles:`Drink from me, drink from me
That I shoot across the sky
Symphony
That I shoot across the sky
We're on a...
Drink from me, drink from me
That I shoot across the sky
Symphony
(So high, so high)
That I shoot across the sky

Oh, angel sent from up above
You know you make my world light up
When I was down, when I was hurt
You came to lift me up
Life is a drink, and love's a drug
Oh, now I think I must be miles up
When I was a river, dried up
You came to rain a flood

You said drink from me, drink from me
When I was so thirsty
Poured on a symphony
Now I just can't get enough
Put your wings on me, wings on me
When I was so heavy
Poured on a symphony
When I'm low, low, low, low

I, oh, I, oh, I
Got me feeling drunk and high
So high, so high
Oh, I, oh, I, oh, I
Now I'm feeling drunk and high
So high, so high
Woo!

Oh, angel sent from up above
I feel it coursing through my blood
Life is a drink, your love's about
To make the stars come out

Put your wings on me, wings on me
When I was so heavy
Poured on a symphony
When I'm low, low, low, low

I, oh, I, oh, I
Got me feeling drunk and high
So high, so high
Oh I, oh, I, oh, I
Now I'm feeling drunk and high
So high, so high

I, oh, I, oh, I
La la la la la la la
So high, so high
I, oh, I, oh, I
I'm feeling drunk and high
So high, so high

That I shoot across the sky
That I shoot across the...
That I shoot across the sky
Watch me shoot across the..
That I shoot across the sky
That I shoot across the...
That I shoot across the sky
That I shoot across the`},{id:66,titre:"Le Lac",artiste:"Julien Doré",audioUrl:"./audio/Le-lac.mp3",paroles:`La Madone au Nord
Et le lac se dessine
Courageux et fort
Où rien ne respire

Corps contre corps
Ciel contre cils
La forêt se tord
L'horizon soupire

T'aimer sur les bords du lac
Ton cœur sur mon corps qui respire
Pourvu que les hommes nous regardent
Amoureux de l'ombre et du pire

T'aimer sur les bords du lac
Ton cœur sur mon corps qui respire
Pourvu que les hommes nous regardent
Amoureux de l'ombre et du pire

Je reviendrai fort
Surprendre la cime
La rivière et l'or
Font prendre racine

J'ai trompé la mort
La pente est facile
Serre-moi encore
Que mes anges vacillent

T'aimer sur les bords du lac
Ton cœur sur mon corps qui respire
Pourvu que les hommes nous regardent
Amoureux de l'ombre et du pire

Si demain tu regrettes
Le miroir écorché
Que le lac te reflète
Promets-moi d'oublier

Si demain tu regrettes
Le miroir écorché
Que le lac te reflète
Promets-moi d'oublier

T'aimer sur les bords du lac
Ton cœur sur mon corps qui respire
Pourvu que les hommes nous regardent
Amoureux de l'ombre et du pire

T'aimer sur les bords du lac
Ton cœur sur mon corps qui respire
Pourvu que les hommes nous regardent
Amoureux de l'ombre et du pire`},{id:67,titre:"Diamonds",artiste:"Rihanna",audioUrl:"./audio/Rihanna-Diamonds.mp3",paroles:`Shine bright like a diamond
Shine bright like a diamond

Find light in the beautiful sea
I choose to be happy
You and I, you and I
We're like diamonds in the sky

You're a shooting star I see
A vision of ecstasy
When you hold me, I'm alive
We're like diamonds in the sky

I knew that we'd become one right away
Oh, right away
At first sight I felt the energy of sun rays
I saw the life inside your eyes

So shine bright tonight, you and I
We're beautiful like diamonds in the sky
Eye to eye, so alive
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
We're beautiful like diamonds in the sky

Palms rise to the universe
As we moonshine and molly
Feel the warmth, we'll never die
We're like diamonds in the sky

You're a shooting star I see
A vision of ecstasy
When you hold me, I'm alive
We're like diamonds in the sky

At first sight I felt the energy of sun rays
I saw the life inside your eyes

So shine bright tonight, you and I
We're beautiful like diamonds in the sky
Eye to eye, so alive
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
So shine bright tonight, you and I
We're beautiful like diamonds in the sky
Eye to eye, so alive
We're beautiful like diamonds in the sky

Shine bright like a diamond
Shine bright like a diamond
Shine bright like a diamond
Oh, yeah 
Shine bright like a diamond 
Shine bright like a diamond 
Shine bright like a diamond 
Shine bright like a diamond`},{id:68,titre:"Whatever",artiste:"Kygo X Ava Max",audioUrl:"./audio/Kygo-Ava Max_Whatever.mp3",paroles:`There's a space in my heart
When it all comes crashing down
Anytime I hear your name out in public
There's a place that I go
Every time that you're in town
It's just me and the knots in my stomach

And it's true
It wasn't easy
Getting over you
But that's just what I had to do

Whatever, whatever
We were never good together
I'll be here and you stay there
Truth is I never cared
Whatever, whatever
Two years, that ain't forever
I'll be here and you stay there
Won't see me cry no tears

Whatever, whatever
Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears

Never mind, never mind
Feels like you were never mine
Go lose myself
In the arms of a stranger
And yeah, it sucks
Sometimes in love
You try your best but it doesn't work out
And it don't matter either way, oh yeah

Whatever, whatever
We were never good together
I'll be here and you stay there
Truth is I never cared
Whatever, whatever
Two years, that ain't forever
I'll be here and you stay there
Won't see me cry no tears

Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears
Whatever, whatever
Won't see me cry no tears

Whatever, whatever
We were never good together
I'll be here and you stay there
Truth is I never cared
Whatever, whatever
Two years, that ain't forever
I'll be here and you stay there
Won't see me cry no tears`},{id:69,titre:"Scared To Be Lonely",artiste:"Martin Garrix X Dua Lipa",audioUrl:"./audio/Garrix_Scared-To-Be-Only.mp3",paroles:`It was great at the very start
Hands on each other
Couldn't stand to be far apart
Closer the better

Now we're picking fights
And slamming doors
Magnifying all our flaws
And I wonder why
Wonder what for
Why we keep coming back for more

Is it just our bodies?
Are we both losing our minds?
Is the only reason you're holding me tonight
'Cause we're scared to be lonely?
Do we need somebody
Just to feel like we're alright?
Is the only reason you're holding me tonight
'Cause we're scared to be lonely?

Too much time, losing track of us
Where was the real?
Undefined, spiraling out of touch
Forgot how it feels

All the messed up fights
And slamming doors
Magnifying all our flaws
And I wonder why
Wonder what for
It's like we keep coming back for more

Is it just our bodies?
Are we both losing our minds?
Is the only reason you're holding me tonight
'Cause we're scared to be lonely?
Do we need somebody
Just to feel like we're alright?
Is the only reason you're holding me tonight
'Cause we're scared to be lonely?

Scared to be lonely

Even when we know it's wrong
Been somebody better for us all along
Tell me, how can we keep holding on?
Holding on tonight
'Cause we're scared to be lonely
Even when we know it's wrong
Been somebody better for us all along
Tell me, how can we keep holding on?
Holding on tonight
'Cause we're scared to be lonely

Is it just our bodies?
Are we both losing our minds?
Is the only reason you're holding me tonight
'Cause we're scared to be lonely?

Scared to be lonely
Scared to be lonely
Eh, eh, scared to be lonely`},{id:70,titre:"Be The One",artiste:"Dua Lipa",audioUrl:"./audio/Dua-Lipa_Be-The-One.mp3",paroles:`I see the moon, I see the moon, I see the moon
Oh, when you're looking at the sun
Not a fool, I'm not a fool, not a fool
No, you're not fooling anyone

Oh, but when you're gone
When you're gone, when you're gone
Oh baby, all the lights go out
Thinking, oh that, baby, I was wrong
I was wrong, I was wrong
Come back to me, baby, we can work this out

Oh baby, come on, let me get to know you
Just another chance so that I can show
That I won't let you down and run
No, I won't let you down and run
Cause I could be the one
I could be the one
I could be the one
I could be the one

I see in blue, I see in blue, I see in blue
Oh, when you see everything in red
There is nothing that I wouldn't do for you
Do for you, do for you
Oh, cause you got inside my head

Oh, but when you're gone
When you're gone, when you're gone
Oh baby, all the lights go out
Thinking, oh that, baby, I was wrong
I was wrong, I was wrong
Come back to me, baby, we can work this out

Oh baby, come on, let me get to know you
Just another chance so that I can show
That I won't let you down and run
No, I won't let you down and run
Cause I could be the one
I could be the one
I could be the one

Be the one, be the one, be the one
Be the one, be the one, be the one
I could be the one
Be the one, be the one, be the one
Be the one, be the one, be the one
I could be the one
Be the one, be the one, be the one
Be the one, be the one, be the one
I could be the one
Be the one, be the one, be the one
Be the one, be the one, be the one
Will you be mine?

Oh baby, come on, let me get to know you
Just another chance so that I can show
That I won't let you down and run
No, I won't let you down and run
Cause I could be the one
I could be the one
I could be the one`},{id:71,titre:"Without You",artiste:"Mariah Carey",audioUrl:"./audio/WithoutYou.mp3",paroles:`No I can't forget this evening
Or your face as you were leaving
But I guess that's just the way the story goes
You always smile but in your eyes your sorrow shows
Yes it shows

No I can't forget tomorrow
When I think of all my sorrow
When I had you there but then I let you go
And now it's only fair that I should let you know
What you should know

I can't live
If living is without you
I can't live
I can't give anymore
Can't live
If living is without you
I can't give
I can't give anymore

Well I can't forget this evening
Or your face as you were leaving
But I guess that's just the way the story goes
You always smile but in your eyes your sorrow shows
Yes it shows

I can't live
If living is without you
I can't live
I can't give anymore
Can't live
If living is without you
I can't live
I can't give anymore

Can't live
Oh I can't live
No no no no

I can't live
Oh can't live
Living is without you
Oh I can't live
I can't live
I can't give anymore

Oh can't live
Oh I can't live
No no no I`},{id:72,titre:"Rehab",artiste:"Amy Winehouse",audioUrl:"./audio/Amy-Winehouse_Rehab.mp3",paroles:`They tried to make me go to rehab, but I said 'no, no, no'
Yes, I've been black, but when I come back, you'll know, know, know
I ain't got the time and if my daddy thinks I'm fine
He's tried to make me go to rehab, but I won't go, go, go

I'd rather be at home with Ray
I ain't got seventy days
'Cause there's nothing
There's nothing you can teach me
That I can't learn from Mr. Hathaway

I didn't get a lot in class
But I know it don't come in a shot glass

They tried to make me go to rehab, but I said 'no, no, no'
Yes, I've been black, but when I come back, you'll know, know, know
I ain't got the time and if my daddy thinks I'm fine
He's tried to make me go to rehab, but I won't go, go, go

The man said 'Why do you think you're here?'
I said 'I got no idea'
I'm gonna, I'm gonna lose my Baby
So I always keep a bottle near

He said 'I just think you're depressed'
This me 'Yeah, baby, and the rest'

They tried to make me go to rehab but I said 'no, no, no'
Yes, I've been black, but when I come back, you'll know, know, know..

I don't ever wanna drink again
I just, ooh, I just need a friend
I'm not gonna spend ten weeks
Have everyone think I'm on the mend

It's not just my pride
It's just 'til these tears have dried

They tried to make me go to rehab, but I said 'no, no, no'
Yes, I've been black, but when I come back, you'll know, know, know
I ain't got the time and if my daddy thinks I'm fine
He's tried to make me go to rehab, but I won't 'go, go, go'`},{id:73,titre:"Donne-moi ton coeur",artiste:"Louane",audioUrl:"./audio/Donne-moi-ton-cœur.mp3",paroles:`Donne-moi ton cœur
Ta main et le reste
Donne-moi c'que tu es, c'que tu es
Dis-moi tes peurs
Chagrin et le reste
Dis-moi qui tu es, qui tu es

J'imagine un monde
Un monde céleste
Où personne ne sort, non
Où personne ne reste
J'imagine un cri (J'imagine un cri)
Des cris dans la nuit (Des cris dans la nuit)
J'imagine tellement de choses de toi
C'est peut-être toi que je suis des fois

J'imagine un nid de récits, de mots tristes
J'imagine un lit, une insomnie complice
J'imagine une moi qui se noie dans tes vices
Sans foi, ni loi, dans les mailles je me glisse
J'imagine un homme, une femme, une nourrice
Qui ne voit qu'un clone de moi dans mes disques
Un gros tintamarre dans mon âme novice
Je vais rentrer tard car j'ne vois plus les risques

S'te plaît donne-moi ton cœur
Donne-moi c'que tu es, c'que tu es, c'que tu es (C'que tu es)
Dis-moi tes peurs
Dis-moi qui tu es, qui tu es, qui tu es (Qui tu es)

J'veux revoir le monde de l'autrefois
Celui que le monde ne connaît pas
J'veux revoir l'ombre de l'autre toi
Celui que le monde ne connaît pas

J'veux revoir le monde de l'autre fois
Celui que le monde ne connaît pas
J'veux revoir en toi tout c'que j'suis pas
Dis-moi qui tu es mais surtout

S'te plaît donne-moi ton cœur
Donne-moi c'que tu es, c'que tu es, c'que tu es (C'que tu es)
Dis-moi tes peurs
Dis-moi qui tu es, qui tu es, qui tu es (Qui tu es)
S'te plaît donne-moi ton cœur
Donne-moi c'que tu es, c'que tu es
Dis-moi tes peurs
Dis-moi qui tu es, qui tu es`},{id:74,titre:"Just Give Me a Reason",artiste:"P!nk ft. Nate Ruess",audioUrl:"./audio/P!nk_Just-Give-Me-A-Reason.mp3",paroles:`Right from the start
You were a thief
You stole my heart
And I your willing victim
I let you see the parts of me
That weren't all that pretty
And with every touch you fixed them

Now you've been talking in your sleep, oh, oh
Things you never say to me, oh, oh
Tell me that you've had enough
Of our love, our love

Just give me a reason
Just a little bit's enough
Just a second we're not broken just bent
And we can learn to love again
It's in the stars
It's been written in the scars on our hearts
We're not broken just bent
And we can learn to love again

I'm sorry I don't understand
Where all of this is coming from
I thought that we were fine
(Oh, we had everything)
Your head is running wild again
My dear we still have everythin'
And it's all in your mind
(Yeah, but this is happenin')

You've been havin' real bad dreams, oh, oh
You used to lie so close to me, oh, oh
There's nothing more than empty sheets
Between our love, our love
Oh, our love, our love, love

Just give me a reason
Just a little bit's enough
Just a second we're not broken just bent
And we can learn to love again
I never stopped
You're still written in the scars on my heart
You're not broken just bent
And we can learn to love again

Oh, tear ducts and rust
I'll fix it for us
We're collecting dust
But our love's enough
You're holding it in
You're pouring a drink
No nothing is as bad as it seems
We'll come clean

Just give me a reason
Just a little bit's enough
Just a second we're not broken just bent
And we can learn to love again
It's in the stars
It's been written in the scars on our hearts
That we're not broken just bent
And we can learn to love again

Just give me a reason
Just a little bit's enough
Just a second we're not broken just bent
And we can learn to love again
It's in the stars
It's still written in the scars on our hearts
That we're not broken just bent
And we can learn to love again

Oh-oh, we can learn to love again
Oh-oh, can learn to love again
Oh, oh, that we're not broken just bent
And we can learn to love again`},{id:75,titre:"Just need your love",artiste:"Hyphen Hyphen",audioUrl:"./audio/Hyphen-Hyphen.mp3",paroles:`Call looking for someone
Look down, maybe she's the best
Baby, you can always be mine
Come, let's get obsessed
We're looking in the dark
'Cause we're always mean
Been here so long and my life like a second skin
Can't you give a sight of your brightest side?
Can't you show me the dark, 'cause you always liked to?
Can you explain to me what you're looking for?
You're looking for something, for someone more
You're always so near
We're always far
We come from the dust
Where we hopelessly rise
You're run into fever
Desire's so fine
You come from the fire
You're always mine
You're always so near
We're always far
You come from this fight and
You're always round
Maybe you're candle like you...
Oooh, oh
You're looking for
And I just need your love
And I just need it
And I just need your love
And I just need it
And I just need your love
And I just need it
And I just need your love
And I just need it
If you're looking for someone other way
Come on, be my guest
Baby, I will always be blind
Come, let's get obsessed
Fire starts from a spark
'Cause you're on my scene
Been here so long and my life like a second skin
You're always so near
We're always so far
We come from the dust
Where we hopelessly rise
You're run into fever
Desire's so fine
You come from the fire
You're always mine
You're always so near
We're always far
You come from this fight and
You're always round
Maybe you're candle like you...
Oooh, oh
You're looking for
And I just need your love
And I just need it
And I just need your love
And I just need it`},{id:76,titre:"Au Cœur De Moi",artiste:"Amir",audioUrl:"./audio/Amir.mp3",paroles:`Un jour, je suis prédateur
Un jour, je suis la proie
Un jour, j’ai chaud au cœur
Un jour, j’ai tellement froid
Parfois je ne vois plus clair
Le miroir me déforme
Je me lève sans lumière
Et mes rêves s’endorment

Plonge au cœur de moi
Au fond de mes abimes, de mes abimes
Dis-moi ce que tu vois
Plonge au cœur de moi
Et quand tout me décime, tout me décime
Je veux renaitre en toi

Viens, écris sur ma peau les mots que je n’ose pas
Même au bord du KO, si je tombe retiens-moi

Un jour, je suis l’acteur qui fait son cinéma
Un jour, c’est le destin qui tient la caméra
Mon esprit solitaire se perd au fond des bois
Je vois le monde à l’envers, mes rêves sont à l’étroit

Plonge au cœur de moi
Au fond de mes racines, de mes racines
Ou personne ne va
Plonge au cœur de moi
Le temps nous laisse en ruine, nous laisse en ruine
Je veux renaitre en toi

Viens, écris sur ma peau les mots que je n’ose pas
Même au bord du KO si je tombe retiens-moi

Et j’entends ton écho, ohohohooo
C’est la voix d’un jour nouveau
Le plus beau des flambeaux

Viens, écris sur ma peau les mots que je n’ose pas
Même au bord du KO si je tombe retiens-moi

Viens, écris sur ma peau les mots que je n’ose pas
Même au bord du KO si je tombe retiens-moi`},{id:77,titre:"Ceux qu'on était",artiste:"Pierre Garnier",audioUrl:"./audio/Pierre-Garnier_Ceux-quon-etait.mp3",paroles:`Je sais c'que tu vas dire, que c'est pas à cause de moi
Mais t'es prête à partir, et tout est rangé déjà
Y a plus qu'des affaires à moi
J'vais pas te retenir, j'l'ai déjà fait trop de fois
Et comme dernier souvenir, je n'veux pas de celui-là
Pas celui où tu t'en vas

J'aimerais garder le meilleur de ceux qu'on était
Et je sais qu'ailleurs t'iras chercher
Un peu de ce que je ne t'ai pas donné
Je vais garder le meilleur de ceux qu'on était
Et c'est pas grave si tu vas chercher
Un peu de ce que je ne t'ai pas donné, pas donné

S'il fallait recommencer, je crois que je n'changerais rien
De nous j'ai tout aimé, même quand ça s'passait pas bien
T'avais de l'or dans les mains

J'aimerais garder le meilleur de ceux qu'on était
Et je sais qu'ailleurs t'iras chercher
Un peu de ce que je ne t'ai pas donné
Je vais garder le meilleur de ceux qu'on était
Et c'est pas grave si tu vas chercher
Un peu de ce que je ne t'ai pas donné

On se regarde, peut-être pour la dernière fois
Et sans se parler, c'est comme un dernier au revoir

J'aimerais garder le meilleur de ceux qu'on était
Et je sais qu'ailleurs t'iras chercher
Un peu de ce que je ne t'ai pas donné
Je vais garder (Je vais garder) le meilleur de ceux qu'on était
Et c'est pas grave si tu vas chercher (Ailleurs t'iras chercher)
Un peu de ce que je ne t'ai pas donné, pas donné

Le meilleur de ceux qu'on était
Le meilleur de ceux qu'on était`},{id:78,titre:"Stay",artiste:"The Kid LAROI & Justin Bieber",audioUrl:"./audio/STAY-TheKidLAROI.mp3",paroles:`I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could
Know that I can't find nobody else as good as you
I need you to stay, need you to stay, hey (Oh)

I get drunk, wake up, I'm wasted still
I realize the time that I wasted here
I feel like you can't feel the way I feel
Oh, I'll be fucked up if you can't be right here

Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
Oh, I'll be fucked up if you can't be right here

I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could
Know that I can't find nobody else as good as you
I need you to stay, need you to stay, hey
I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could
Know that I can't find nobody else as good as you
I need you to stay, need you to stay, hey

When I'm away from you, I miss your touch (Ooh)
You're the reason I believe in love
It's been difficult for me to trust (Ooh)
And I'm afraid that I'ma fuck it up
Ain't no way that I can leave you stranded
'Cause you ain't never left me empty-handed
And you know that I know that I can't live without you
So, baby, stay

Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
Oh, ooh-whoa (Oh, ooh-whoa, ooh-whoa)
I'll be fucked up if you can't be right here

I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could
Know that I can't find nobody else as good as you
I need you to stay, need you to stay, hey
I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could
Know that I can't find nobody else as good as you
I need you to stay, need you to stay, hey

Whoa-oh
I need you to stay, need you to stay, hey`},{id:79,titre:"Falling",artiste:"Harry Styles",audioUrl:"./audio/Harry-Styles_Falling.mp3",paroles:`I'm in my bed
And you're not here
And there's no one to blame but the drink and my wandering hands

Forget what I said
It's not what I meant
And I can't take it back, I can't unpack the baggage you left

What am I now?
What am I now?
What if I'm someone I don't want around?
I'm falling again
I'm falling again
I'm falling

What if I'm down?
What if I'm out?
What if I'm someone you won't talk about?
I'm falling again
I'm falling again
I'm falling

You said you cared
And you missed me too
And I'm well aware I write too many songs about you

And the coffee's out
At the Beachwood Cafe
And it kills me 'cause I know we've run out of things we can say

What am I now?
What am I now?
What if I'm someone I don't want around?
I'm falling again
I'm falling again
I'm falling

What if I'm down?
What if I'm out?
What if I'm someone you won't talk about?
I'm falling again
I'm falling again
I'm falling

And I get the feeling that you'll never need me again

What am I now?
What am I now?
What if you're someone I just want around?
I'm falling again
I'm falling again
I'm falling

What if I'm down?
What if I'm out?
What if I'm someone you won't talk about?
I'm falling again
I'm falling again
I'm falling`},{id:80,titre:"Bad Dreams",artiste:"Teddy Swims",audioUrl:"./audio/Teddy-Swims_Bad-Dreams.mp3",paroles:`Sun is going down, time is running out
No one else around but me
Steady losing light
Steady losing my mind
Moving shadows and grinding teeth

Without you, there ain't no place for me to hide
Without you, there's no way I can sleep tonight
What I'd do for a little bit of peace and quiet
Without you I keep

Slippin' into bad dreams
Where there's no you and I
No sound when I cry
I love you and I need you to set me free
From all of these bad dreams
Waiting on the other side
No sound when I cry
I love you and I need you to set me free
From all of these, all of these

(Ooh) Bad dreams
(Ooh) All of these, baby, please

Come around
Help me settle down
Hellish habits can cloud my head
What you waiting for
Something physical
I can't do this by myself

Without you, there ain't no place for me to hide
Without you, there's no way I can sleep tonight
What I'd do for a little bit of peace and quiet
Without you I keep

Slippin' into bad dreams
Where there's no you and I
No sound when I cry
I love you and I need you to set me free
From all of these bad dreams
Waiting on the other side
No sound when I cry
I love you and I need you to set me free
From all of these, all of these

(Ooh) Bad dreams (bad dreams), baby, please
(Ooh) All of these (baby, please), all of these`},{id:81,titre:"Emmenez-moi",artiste:"Charles Aznavour",audioUrl:"./audio/Charles-Aznavour_Emmenez-moi.mp3",paroles:`Vers les docks où le poids et l'ennui, me courbent le dos
Ils arrivent le ventre alourdi de fruits, les bateaux
Ils viennent du bout du monde, apportant avec eux, des idées vagabondes, aux reflets de ciels bleus
De mirages...
Traînant un parfum poivré de pays inconnus et d'éternels étés, où l'on vit presque nus
Sur les plages...
Moi qui n'ai connu toute ma vie que le ciel du nord
J'aimerais débarbouiller ce gris, en virant de bord

Emmenez-moi au bout de la terre
Emmenez-moi au pays des merveilles
Il me semble que la misère
Serait moins pénible au soleil

Dans les bars à la tombée du jour, avec les marins
Quand on parle de filles et d'amour, un verre à la main
Je perds la notion des choses et soudain ma pensée m'enlève et me dépose un merveilleux été
Sur la grève...
Où je vois tendant les bras l'amour qui, comme un fou, court au devant de moi et je me pends au cou
De mon rêve...
Quand les bars ferment, que les marins rejoignent leur bord
Moi je rêve encore jusqu'au matin debout sur le port

Emmenez-moi au bout de la terre
Emmenez-moi au pays des merveilles
Il me semble que la misère
Serait moins pénible au soleil

Un beau jour sur un rafiot craquant de la coque au pont
Pour partir je travaillerais dans la soute à charbon
Prenant la route qui mène à mes rêves d'enfant, sur des îles lointaines où rien n'est important
Que de vivre...
Où les filles alanguies vous ravissent le cœur en tressant, m'a-t-on dit, de ces colliers de fleurs
Qui enivrent...
Je fuirais laissant là mon passé, sans aucun remords
Sans bagage et le cœur libéré, en chantant très fort

Emmenez-moi au bout de la terre
Emmenez-moi au pays des merveilles
Il me semble que la misère
Serait moins pénible au soleil

Emmenez-moi au bout de la terre
Emmenez-moi au pays des merveilles
Il me semble que la misère
Serait moins pénible au soleil`},{id:82,titre:"Rouge",artiste:"Michel Sardou",audioUrl:"./audio/Michel-Sardou_Rouge.mp3",paroles:`Rouge
Comme un soleil couchant
De Méditerranée
Rouge
Comme le vin de Bordeaux
Dans ma tête étoilée
Rouge
Comme le sang de Rimbaud
Coulant sur un cahier
Rouge
Comme la mer qui recouvre
Le désert de Judée

Rouge
Comme les joues d'un enfant
Quand il a trop joué
Rouge
Comme la pomme qui te donne
Le parfum du péché
Rouge
Comme le feu du volcan
Qui va se réveiller
Rouge
Comme cette étoile au cœur
De ce dormeur couché

Comme un oiseau tué
Par un chasseur tragique
Comme un acteur blessé
Par les cris du public
Comme un violon brisé
Qui rejoue l'Héroïque
Comme la vision glacée
Du dernier Titanic

Rouge
Comme le feu des tziganes
Quand les violons s'affolent
Rouge
Comme un phare de signal
Quand un avion s'envole
Rouge
Comme les lèvres d'une femme
Quand l'amour la rend folle
Rouge
Comme le front du menteur
Qui trahit sur parole

Comme un oiseau tué
Par un chasseur tragique
Comme un acteur blessé
Par les cris du public
Comme un violon brisé
Qui rejoue l'Héroïque
Comme la vision glacée
Du dernier Titanic

Comme le silence qui suit
Les paroles en musique
Comme une symphonie
Quand elle est pathétique

Rouge
Comme la colère d'un homme
Quand il voit s'en aller
Rouge
Tout ce qu'il a construit
Tout ce qu'il a aimé
Rouge
Comme le manteau du Christ
Que les soldats ont joué
Rouge
Comme la couleur du ciel 
Quand il va s'écrouler 
 
Comme un oiseau tué 
Par un chasseur tragique 
Comme un acteur blessé 
Par les cris du public 
Comme un violon brisé 
Qui rejoue l'Héroïque 
Comme la vision glacée 
Du dernier Titanic 
 
Comme le silence qui suit 
Les paroles en musique 
Comme une symphonie 
Quand elle est pathétique`},{id:83,titre:"Tattoo",artiste:"Loreen",audioUrl:"./audio/Loreen-Tattoo.mp3",paroles:`I don't wanna go
But baby, we both know
This is not our time
It's time to say goodbye
Until we meet again
'Cause this is not the end
It will come a day
When we will find our way

Violins playing and the angels crying
When the stars align then I'll be there

No, I don't care about them all
'Cause all I want is to be loved
And all I care about is you
You're stuck on me like a tattoo
No, I don't care about the pain
I'll walk through fire and through rain
Just to get closer to you
You're stuck on me like a tattoo

I'm letting my hair down
I'm taking it cool
You got my heart in your hand
Don't lose it, my friend
It's all that I got

Violins playing and the angels crying
When the stars align then I'll be there

No, I don't care about them all
'Cause all I want is to be loved
And all I care about is you
You're stuck on me like a tattoo
No, I don't care about the pain
I'll walk through fire and through rain
Just to get closer to you
You're stuck on me like a tattoo

No, I don't care about them all
'Cause all I want is to be loved
And all I care about is you
You're stuck on me like a tattoo
No, I don't care about the pain
I'll walk through fire and through rain
Just to get closer to you
You're stuck on me like a tattoo

All I care about is love
Oh, oh, oh
All I care about is love
You're stuck on me like a tattoo`},{id:84,titre:"Enjoy of The Silence",artiste:"Depech Mode",audioUrl:"./audio/Depeche-Mode_Enjoy-the-Silence.mp3",paroles:`Words like violence break the silence
Come crashing in into my little world
Painful to me, pierce right through me
Can't you understand? Oh, my little girl

All I ever wanted
All I ever needed is here in my arms
Words are very unnecessary
They can only do harm

Vows are spoken to be broken
Feelings are intense, words are trivial
Pleasures remain, so does the pain
Words are meaningless and forgettable

All I ever wanted
All I ever needed is here in my arms
Words are very unnecessary
They can only do harm

All I ever wanted
All I ever needed is here in my arms
Words are very unnecessary
They can only do harm
All I ever wanted
All I ever needed is here in my arms
Words are very unnecessary
They can only do harm

Enjoy the silence`},{id:85,titre:"Because Of You",artiste:"Kelly Clarkson",audioUrl:"./audio/Kelly-Clarkson.mp3",paroles:`I will not make the same mistakes that you did
I will not let myself
'Cause my heart so much misery
I will not break the way you did
You fell so hard
I've learned the hard way
To never let it get that far

Because of you
I never stray too far from the sidewalk
Because of you
I learned to play on the safe side so I don't get hurt
Because of you
I find it hard to trust not only me, but everyone around me
Because of you
I am afraid

I lose my way
And it's not too long before you point it out
I cannot cry
Because I know that's weakness in your eyes
I'm forced to fake
A smile, a laugh every day of my life
My heart can't possibly break
When it wasn't even whole to start with

Because of you
I never stray too far from the sidewalk
Because of you
I learned to play on the safe side so I don't get hurt
Because of you
I find it hard to trust not only me, but everyone around me
Because of you
I am afraid

I watched you die
I heard you cry every night in your sleep
(I watched you die, in your sleep)
I was so young
You should have known better than to lean on me
(I was too young for you to lean on me)
You never thought of anyone else
You just saw your pain
(You never saw me, yeah, yeah)
And now I cry in the middle of the night
For the same damn thing

Because of you
I never stray too far from the sidewalk
Because of you
I learned to play on the safe side so I don't get hurt
Because of you
I try my hardest just to forget everything
Because of you
I don't know how to let anyone else in
Because of you
I'm ashamed of my life because it's empty
Because of you
I am afraid

Because of you (Ah-ah, ah, ah)
Because of you, mm, ooh`},{id:86,titre:"Perfect Strangers",artiste:"Jonas Blue ft. JP Cooper",audioUrl:"./audio/Jonas-Blue_Perfect-Strangers.mp3",paroles:`You were looking at me like you wanted to stay
When I saw you yesterday
I'm not wasting your time, I'm not playing no games
I see you

Who knows the secret tomorrow will hold?
We don't really need to know
'Cause you're here with me now, I don't want you to go
You're here with me now, I don't want you to go

Maybe we're perfect strangers
Maybe it's not forever
Maybe the night will change us
Maybe we'll stay together
Maybe we'll walk away
Maybe we'll realize
We're only human
Maybe we don't need no reason
Maybe we're perfect strangers
Maybe it's not forever
Maybe the night will change us
Maybe we'll stay together
Maybe we'll walk away
Maybe we'll realize
We're only human

Maybe we don't need no reason why
Come on, come on, come over
Maybe we don't need no reason why
Come on, come on, come over

No one but you got me feeling this way
There's so much we can't explain
Maybe we're helping each other escape
I'm with you

Who knows the secret tomorrow will hold?
We don't really need to know
'Cause you're here with me now, I don't want you to go
You're here with me now, I don't want you to go

Maybe we're perfect strangers
Maybe it's not forever
Maybe the night will change us
Maybe we'll stay together
Maybe we'll walk away
Maybe we'll realize
We're only human
Maybe we don't need no reason
Maybe we're perfect strangers
Maybe it's not forever
Maybe the night will change us
Maybe we'll stay together
Maybe we'll walk away
Maybe we'll realize
We're only human

Maybe we don't need no reason why
Come on, come on, come over
Maybe we don't need no reason why
Come on, come on, come over 
Come on, come on, come over 
Maybe we don't need no reason why 
Come on, come on, come over`},{id:87,titre:"Don't Let Me Down (Illenium Remix)",artiste:"The Chainsmokers ft. Daya",audioUrl:"./audio/The-Chainsmokers_Dont-Let-Me-Down.mp3",paroles:`Crashing, hit a wall
Right now I need a miracle
Hurry up now, I need a miracle
Stranded, reaching out
I call your name but you're not around
I say your name but you're not around

I need you, I need you, I need you right now
Yeah, I need you right now
So don't let me, don't let me, don't let me down
I think I'm losing my mind now
It's in my head, darling, I hope
That you'll be here when I need you the most
So don't let me, don't let me, don't let me down
D-don't let me down

Don't let me down
Don't let me down, down, down
Don't let me down, don't let me down, down, down

Running out of time
I really thought you were on my side
But now there's nobody by my side

I need you, I need you, I need you right now
Yeah, I need you right now
So don't let me, don't let me, don't let me down
I think I'm losing my mind now
It's in my head, darling, I hope
That you'll be here when I need you the most
So don't let me, don't let me, don't let me down
D-don't let me down

Don't let me down
Don't let me down, down, down
Don't let me down, down, down
Don't let me down, down, down
Don't let me down, don't let me down, down, down

Oh, I think I'm losing my mind now, yeah
Oh, I think I'm losing my mind now, yeah

I need you, I need you, I need you right now
Yeah, I need you right now
So don't let me, don't let me, don't let me down
I think I'm losing my mind now
It's in my head, darling, I hope
That you'll be here when I need you the most
So don't let me, don't let me, don't let me down
Don't let me down

Yeah, don't let me down
Yeah, don't let me down
Don't let me down, oh no
Said don't let me down 
Don't let me down 
Don't let me down, down, down 
Don't let me down`},{id:88,titre:"Hall Of Fame",artiste:"The Script ft. Will.i.am",audioUrl:"./audio/The-Script_Hall-Of-Fame.mp3",paroles:`Yeah, you can be the greatest
You can be the best
You can be the King Kong banging on your chest

You can beat the world
You can beat the war
You can talk to God, go banging on his door

You can throw your hands up
You can beat the clock (yeah)
You can move a mountain
You can break rocks
You can be a master
Don't wait for luck
Dedicate yourself and you gon' find yourself

Standing in the hall of fame (yeah)
And the world's gonna know your name (yeah)
'Cause you burn with the brightest flame (yeah)
And the world's gonna know your name (yeah)
And you'll be on the walls of the hall of fame

You can go the distance
You can run the mile
You can walk straight through hell with a smile

You can be the hero
You can get the gold
Breaking all the records they thought never could be broke

Yeah, do it for your people
Do it for your pride
How are you ever gonna know if you never even try?

Do it for your country
Do it for your name
'Cause there's gonna be a day...

When you're standing in the hall of fame (yeah)
And the world's gonna know your name (yeah)
'Cause you burn with the brightest flame (yeah)
And the world's gonna know your name (yeah)
And you'll be on the walls of the hall of fame

Be a champion, be a champion, be a champion, be a champion
On the walls of the hall of fame

Be students
Be teachers
Be politicians
Be preachers
(Yeah)

Be believers
Be leaders
Be astronauts
Be champions
Be truth seekers

Be students
Be teachers
Be politicians
Be preachers
(Be preachers)
Be believers (be believers)
Be leaders (be leaders)
Be astronauts (be astronauts)
Be champions (be champions)
(Be champions!)
Standing in the hall of fame (yeah, yeah, yeah)
And the world's gonna know your name (yeah, yeah, yeah)
'Cause you burn with the brightest flame (yeah, yeah, yeah)
And the world's gonna know your name (yeah, yeah, yeah)
And you'll be on the walls of the hall of fame!
(Be a champion!)
You could be the greatest! You could be the best!
(Be a champion!)
You could be King Kong banging on your chest!
(Be a champion!)
You could beat the world! You could beat the war!
(Be a champion!)
You could talk to God, go banging on his door!
(Be a champion!)
You could throw your hands up!
(Be a champion!)
You could beat the clock! Yeah!
(Be a champion!)
Move mountains! Break rocks!!`},{id:89,titre:"Happier",artiste:"Marshmello X Bastille",audioUrl:"./audio/Marshmello&Bastille_Happier.mp3",paroles:`Lately, I've been, I've been thinking
I want you to be happier
I want you to be happier

When the morning comes
When we see what we've become
In the cold light of day, we're a flame in the wind
Not the fire that we've begun
Every argument, every word we can't take back
'Cause with all that has happened
I think that we both know the way that the story ends

Then only for a minute
I want to change my mind
'Cause this just don't feel right to me
I wanna raise your spirits
I want to see you smile but
Know that means I'll have to leave

Know that means I'll have to leave
Lately, I've been, I've been thinking
I want you to be happier
I want you to be happier

When the evening falls
And I'm left there with my thoughts
And the image of you being with someone else
Well, it's eating me up inside

But we ran our course, we pretended we're OK
Now if we jump together at least we can swing
Far away from the wreck we made

Then only for a minute
I want to change my mind
'Cause this just don't feel right to me
I wanna raise your spirits
I want to see you smile but
Know that means I'll have to leave

Know that means I'll have to leave
Lately, I've been, I've been thinking
I want you to be happier
I want you to be happier

So I'll go, I'll go
I will go, go, go
So I'll go, I'll go
I will go, go, go

Lately, I've been, I've been thinking
I want you to be happier
I want you to be happier
Even though I might not like this
I think that you'll be happier
I want you to be happier

Then only for a minute
I want to change my mind
'Cause this just don't feel right to me
I wanna raise your spirits
I want to see you smile but
Know that means I'll have to leave

Know that means I'll have to leave
Lately, I've been, I've been thinking
I want you to be happier
I want you to be happier 
 
So I'll go, I'll go 
I will go, go, go`},{id:90,titre:"Chandelier",artiste:"Sia",audioUrl:"./audio/Sia-Chandelier.mp3",paroles:`Party girls don't get hurt
Can't feel anything, when will I learn
I push it down, push it down

I'm the one 'for a good time call'
Phone's blowin' up, ringin' my doorbell
I feel the love, feel the love

1, 2, 3, 1, 2, 3 drink
1, 2, 3, 1, 2, 3 drink
1, 2, 3, 1, 2, 3 drink
Throw 'em back till I lose count

I'm gonna swing from the chandelier
From the chandelier
I'm gonna live like tomorrow doesn't exist
Like it doesn't exist
I'm gonna fly like a bird through the night
Feel my tears as they dry
I'm gonna swing from the chandelier
From the chandelier

But I'm holding on for dear life
Won't look down, won't open my eyes
Keep my glass full until morning light
'Cause I'm just holding on for tonight
Help me, I'm holding on for dear life
Won't look down, won't open my eyes
Keep my glass full until morning light
'Cause I'm just holding on for tonight
On for tonight

Sun is up, I'm a mess
Gotta get out now, gotta run from this
Here comes the shame, here comes the shame

1, 2, 3, 1, 2, 3 drink
1, 2, 3, 1, 2, 3 drink
1, 2, 3, 1, 2, 3 drink
Throw 'em back till I lose count

I'm gonna swing from the chandelier
From the chandelier
I'm gonna live like tomorrow doesn't exist
Like it doesn't exist
I'm gonna fly like a bird through the night
Feel my tears as they dry
I'm gonna swing from the chandelier
From the chandelier

But I'm holding on for dear life
Won't look down, won't open my eyes
Keep my glass full until morning light
'Cause I'm just holding on for tonight
Help me, I'm holding on for dear life
Won't look down, won't open my eyes
Keep my glass full until morning light
'Cause I'm just holding on for tonight
On for tonight 
 
On for tonight 
'Cause I'm just holding on for tonight 
Oh, I'm just holding on for tonight 
On for tonight 
On for tonight 
'Cause I'm just holding on for tonight 
'Cause I'm just holding on for tonight 
Oh, I'm just holding on for tonight 
On for tonight 
On for tonight`},{id:91,titre:"Gimme Gimme Gimme (A Man After Midnight)",artiste:"ABBA",audioUrl:"./audio/Abba-Gimme.mp3",paroles:`Half past twelve
And I'm watching the late show in my flat all alone
How I hate to spend the evening on my own
Autumn winds
Blowing outside the window as I look around the room
And it makes me so depressed to see the gloom

There's not a soul out there
No one to hear my prayer

Gimme, gimme, gimme a man after midnight
Won't somebody help me chase the shadows away?
Gimme, gimme, gimme a man after midnight
Take me through the darkness to the break of the day

Movie stars
Find the end of the rainbow, with a fortune to win
It's so different from the world I'm living in
Tired of T.V.
I open the window and I gaze into the night
But there's nothing there to see, no one in sight

There's not a soul out there
No one to hear my prayer

Gimme, gimme, gimme a man after midnight
Won't somebody help me chase the shadows away?
Gimme, gimme, gimme a man after midnight
Take me through the darkness to the break of the day
Gimme, gimme, gimme a man after midnight...
Gimme, gimme, gimme a man after midnight...

There's not a soul out there
No one to hear my prayer

Gimme, gimme, gimme a man after midnight
Won't somebody help me chase the shadows away?
Gimme, gimme, gimme a man after midnight
Take me through the darkness to the break of the day
Gimme, gimme, gimme a man after midnight
Won't somebody help me chase the shadows away?
Gimme, gimme, gimme a man after midnight
Take me through the darkness to the break of the day`},{id:92,titre:"Si j'avais su",artiste:"Claudio Capéo",audioUrl:"./audio/Claudio-Capeo_Si-javais-su.mp3",paroles:`Je t'aurais dit toutes les choses
Que je ne t'avais jamais dites
Que ta peau a l'odeur des roses
Que j'adore le prénom Édith
Je t'aurais dit toutes les choses
Qu'on ne dit pas assez souvent
Car souvent dans la vie, on n'ose
Pas dire les choses tant qu'il est temps

Je t'aurais raconté la mer
Que tu la voies une fois encore
On aurait viré l'infirmière
Puis, on aurait rigolé fort
Je t'aurais dit que ton visage
Me fait penser à l'océan
Que tes rides ressemblent à des vagues
Où vont se baigner les enfants

Si j'avais su
En partant ce soir-là
Si j'avais su
Que le temps n'attend pas
Si j'avais su, si j'avais su
Que c'était la première fois
Que j'te voyais pour la dernière fois

Je t'aurais refait ton chignon
Et toi, tu m'aurais dit ça tire
Moi, j'aurais fait un peu le con
Juste pour regarder ton sourire
J't'aurais promis d'faire une chanson
Qui racont'rait comme t'étais belle
Qui racont'rait comme on est cons
D'croire que les gens sont éternels

Et puis j't'aurais serrée si fort
Qu'il y aurait des marques à ton cou
Je t'aurais regardée encore
Et puis j't'aurais gardée surtout
J't'aurais enfermée dans mes yeux
J'aurais capturé ton parfum
J't'aurais dit au revoir un peu mieux
Puis j'aurais menti à demain

Si j'avais su
En partant ce soir-là
Si j'avais su
Que le temps n'attend pas
Si j'avais su, si j'avais su
Que c'était la première fois
Que j'te voyais pour la dernière fois

J'me s'rais dépêché de t'aimer
Comme l'on court après la vie
Car on n'aime jamais assez
Je t'aurais dit, je t'aime aussi
Les mots faut pas qu'on les conserve
Faut les distribuer à la ronde
Sinon les mots à quoi ils servent?
À part à décorer les tombes?
 
Si j'avais su 
En partant ce soir-là 
Si j'avais su 
Que le temps n'attend pas 
Si j'avais su, si j'avais su 
Mais souvent, on ne sait pas 
Qu'on voit quelqu'un pour la dernière fois`},{id:93,titre:"Dancing In The Flames",artiste:"The Weeknd",audioUrl:"./audio/TheWeeknd_Dancing-In-The-Flames.mp3",paroles:`(Yeah)

Traffic dies while we are racing home
Melted lights cover the open road
I hope we make it, 'cause I've been chasin'
Another odyssey, oh

I can't wait to see your face
Crash when we're switchin' lanes
My love's beyond the pain
But if I miss the brake
We're dancin' in the flames
It's indescribable

Ooh, yeah

'The world can't heal', they say on the radio (Oh, no)
So grab the wheel, want you to be in control
We're dodgin' headlights and you say, 'Hold tight'
Another odyssey, oh (Hey)

I can't wait to see your face
Crash when we're switchin' lanes
My love's beyond the pain
But if I miss the brake
We're dancin' in the flames
It's indescribable

Ooh (Indescribable), oh
Ooh

Everything's faded, we barely made it
The fire's ragin', but you're still beautiful
And it's amazin', 'cause I can taste it
Our final odyssey, ooh

I can't (I can't) wait to see your face (Wait, ha)
Crash when we're switchin' lanes
My love's beyond the pain (Hey)
But if I miss the brake
We're dancin' in the flames (Dancin' in the flames)
So, just have faith (Just have faith in me, baby)
We'll never be the same (We'll never, we'll never be the same, hey)
It's indescribable

Ooh (Indescribable)
Oh, hey
Ooh (Indescribable)`},{id:94,titre:"La vie est belle",artiste:"Indochine",audioUrl:"./audio/Indochine.mp3",paroles:`Moi je suis né ici pour n’être qu’avec toi
Comme quelqu’un qui te sera
Et dont on parlera
Moi je suis né ici pour n’être qu’avec toi
Je serai quelqu’un qui sera tu verras

Nous irions faire la vie
Réussir au moins ça
Nous irions faire la nuit
Aussi loin que tu pourras
Moi je suis né ici pour n’être qu’avec toi

La vie est belle et cruelle à la fois
Elle nous ressemble parfois
Moi je suis né pour n’être qu’avec toi
La vie est belle aussi belle que toi
Elle te ressemble parfois
Moi je suis né pour n’être qu’avec toi

J’étais pourtant si fier de vivre près de toi
La vie va trop vite, ton cancer est le mien
C’était pourtant si clair de finir avec toi
Ton sang est le mien, on ne fera plus qu’un
Mais nous serions invincible
Réussir au moins ça
Nous voulions tout est possible
Aussi loin que l’on pourra

La vie est belle aussi cruelle que ça
Elle nous ressemble parfois
Moi j’étais né pour n’être qu’avec toi
Nous, on y aurait cru
Seuls et tristes à la fois
Tout ne finiras pas juste ici
On y aurait vu que nos sourires et nos joies
Moi je suis né ici pour n’être qu’avec toi

La vie est belle mais cruelle parfois
Elle nous ressemble toi et moi
La vie est belle aussi belle que toi
La vie est belle mais cruelle parfois
Elle nous ressemble toi et moi
Moi je suis né pour n’être qu’avec toi

Nous, on y aurait cru
À nos sourires à nos joies
Moi je suis né ici pour n’être qu’avec toi`},{id:95,titre:"Aimer est plus fort que d'être aimé",artiste:"Daniel Balavoine",audioUrl:"./audio/Daniel-Balavoine.mp3",paroles:`Toi qui sais ce qu'est un rempart
Tu avances sous les regards
Courroucés
Tu écris mais sur le buvard
Tous les mots se sont inversés

Si tu parles il te faut savoir
Que ceux qui lancent des regards
Courroucés
Ne voudront voir dans leur miroir
Que ce qui peut les arranger

Toi qui as brisé la glace
Sais que rien ne remplace
La vérité
Et qu'il n'y a que deux races
Ou les faux ou les vrais

L'amour
Te porte dans tes efforts
L'amour
De tout délie les secrets
Et face à tous ceux qui te dévorent
Aimer est plus fort que d'être aimé

Toi qui sais ce qu'est le blasphème
On ne récolte pas toujours
Ce qu'on sème
Tu connais l'ambition suprême
De ceux qui te vouent de la haine

Ils voudraient sous la menace
Te fondre dans la masse
Pour t'étouffer
Mais pour couler le brise-glace
Il faudrait un rocher

L'amour
Te porte dans tes efforts
L'amour
De tout délie les secrets
Et face à tous ceux qui te dévorent
Aimer est plus fort que d'être aimé`},{id:96,titre:"Ton visage",artiste:"Fréro Delavega",audioUrl:"./audio/Ton-visage_FreroDelavega.mp3",paroles:`Quand en ville, le grain se lève
Vent de nerfs agités
Que se ternissent les rêves
Dans ma réalité
J'veux des ballades sur la grève
Oh, un peu d'humanité
Moins de béton plus de trêve
Une vie de qualité
Moins de béton plus de rêve
Dans ma réalité

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage

J'veux des larmes, qui ne coupent pas
Et moins de peine en 4 par 3
Un bonheur simple, mais à mon goût
C'est un peu vrai mais ça fait tout
J'veux plus de houle dans mon écume
Et moins de foule dans mon bitume
Ces petites choses qui n'ont au clair
De sens qu'une fois qu'on les perd
Ces petites choses qui n'ont au clair
De sens qu'une fois qu'on les perd

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage

Que n'ai-je alors? Une planche de salut
Pour chevaucher mon vague à l'âme
Bel océan, brise-talus
Pour sécher le sel de mes larmes

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage

Que n'ai-je? Une planche de salut
Loin du métro, de son raffut
Les yeux rivés sur le rivage
Oublié ton lointain visage 
 
Que n'ai-je? Une planche de salut 
Loin du métro, de son raffut 
Les yeux rivés sur le rivage 
Oublié ton lointain visage`},{id:97,titre:"Ton Combat",artiste:"Arcadian",audioUrl:"./audio/Arcadian_Ton-combat.mp3",paroles:`Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat

Quand le bonheur s'efface, quand l'amour se casse, quand la vie ne te sourit plus
Les passants que tu vois sont vivants pendant que toi, tu leur cries que tu n'en peux plus
Plus rien ne compense ton éternel absence, quand tu ne vois plus que des murs
Plus de soleil, d'orage, de fous rires ni de rage, quand tu ne vois plus le futur

Il suffirait qu'une main touche la tienne, que ton regard vers demain le comprenne

Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat
Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat

Avant le premier signe, avant que tu t'abîmes, avant que tu ne perdes pied
On mettra tout en œuvre, on ira faire ton bonheur, qu'importe ce que ça doit coûter
J't'emmènerais dans les coins où ça chante et ça résonne et personne, personne, juste personne
On te reconstruira une vie, pas à pas, tu guéris, tu guériras

Il suffirait que ta main touche la mienne, que ton regard vers demain le comprenne

Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat
Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat
Ah Yeah
Ah Yeah Yeah
Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat
Allez je ne laisserais pas tes bras blesser plus longtemps
Allez je ne lâcherais, je ne lâcherais pas tu m'entends
Ça prendra le temps que ça prendra et ton combat tu m'entends, c'est mon combat`},{id:98,titre:"En Apesenteur",artiste:"Calogéro",audioUrl:"./audio/Calogero_En-Apesanteur.mp3",paroles:`J'arrive à me glisser
Juste avant que les portes ne se referment
Elle me dit : 'Quel étage ?'
Et sa voix me fait quitter la terre ferme
Alors
Les chiffres dansent
Tout se mélange
Je suis en tête-à-tête avec un ange

En apesanteur
Pourvu que les secondes soient des heures
En apesanteur
Pourvu qu'on soit les seuls
Dans cet ascenseur

Elle arrange ses cheveux
J'ai le cœur juste au bord des yeux
Et sans la regarder je sens la chaleur
D'un autre langage
Alors
Les yeux rivés
Sur les étages
Pourvu que rien n'arrête le voyage

En apesanteur
Pourvu que les secondes soient des heures
En apesanteur
Pourvu qu'on soit les seuls
Dans cet ascenseur

Dans cet ascenseur
J'arrive à me glisser
Juste avant que les portes ne se referment

En apesanteur
Pourvu que les secondes soient des heures
En apesanteur
Pourvu qu'on soit les seuls
Dans cet ascenseur

En apesanteur
Pourvu que les secondes soient des heures
En apesanteur
Pourvu qu'on soit les seuls
Dans cet ascenseur`},{id:99,titre:"Toi et moi",artiste:"Céline Dion & Charles Aznavour",audioUrl:"./audio/Dion-Aznavour_ToiEtMoi.mp3",paroles:`Hmm...

Toi et moi, deux cœurs qui se confondent
Au seuil de l'infini, loin du reste du monde
Haletants et soumis, à bord du lit
Qui tangue et va, sous toi et moi
Toi et moi, libérés des mensonges
Et sevrés des tabous
Quand la nuit se prolonge entre râles et remous
Nos songes fous inventent un nous

Entre chien et loup dans nos rêves déserts
L'amour a su combler les silences
Et nous, ses enfants nus, vierges de nos hier
Devenons toi et moi, lavés de nos enfers
Porte-moi (porte-moi), au delà des angoisses
À l'appel du désir (appel du désir)
Du cœur de nos fantasmes, aux confins du plaisir
Que Dieu créa, pour toi et moi

J'étais sans espoir, tu as changé mon sort
Offrant à ma vie une autre chance
Les mots ne sont que mots, les tiens vibraient si fort
Qu'en parlant à ma peau, ils éveillaient mon corps
Aime-moi, fais-moi l'amour encore
Encore et parle-moi
Pour que jusqu'aux aurores, aux sources de nos joies
Mes jours se noient, dans toi et moi
Dans toi et moi, dans toi et moi
Dans toi et moi, hmm, hmm...`},{id:100,titre:"Blah Blah Blah",artiste:"Armin van Buuren",audioUrl:"./audio/Blah-Blah-Blah_ArminVanBuuren.mp3",paroles:`All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah

All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah

All we ever hear from you is blah blah blah
Blah blah blah
Blah blah blah
Blah blah blah
Blah blah blah
Blah blah blah
Blah blah blah

All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah
All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah

All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah

All we ever hear from you is blah blah blah
So, all we ever do is go ya ya ya
And we don't even care about what they say 'cause it's
Ya ya ya ya
Blah blah blah blah`},{id:101,titre:"Outside",artiste:"Calvin Harris ft. Ellie Goulding",audioUrl:"./audio/Outside.mp3",paroles:`Look at what you've done
Stand still, falling away from me
When it takes so long
Fire's out, what do you want to be?

Now I'm holdin' on
Myself was never enough for me
Gotta be so strong
There's a power in what you do
Now, every other day I'll be watching you

I'll show you what it feels like
Now I'm on the outside
We did everything right
Now I'm on the outside
I'll show you what it feels like
Now I'm on the outside
We did everything right
Now I'm on the outside

So, you give me no reason
For me to stay close to you
Tell me what lovers do
How are we still breathing?
It's never for us to choose
I'll be the strength in you

Now I'm holding on (I'm holding on)
Myself was never enough for me
Gotta be so strong
There's a power in what you do
Now, every other day I'll be watching you

I'll show you what it feels like
Now I'm on the outside
We did everything right
Now I'm on the outside
I'll show you what it feels like
Now I'm on the outside
We did everything right
Now I'm on the outside

I'll show you what it feels like
Now I'm on the outside
I'll show you what it feels like
Show you what it feels like
Now I'm on the outside
We did everything right
Now I'm on the outside`},{id:102,titre:"Don't Call Me Up",artiste:"Mabel",audioUrl:"./audio/Mabel.mp3",paroles:`When I'm underneath the bright lights
When I'm tryna have a good time
'Cause I'm good now you ain't mine
Now, now, now, now, don't call me up
When you're looking at my photos
Getting hot, losing control
You want me more now I let go
Now, now, now, now

I'm over you and I don't need your lies no more
'Cause the truth is, without you, boy, I'm stronger
And I know you said that I changed with my cold heart
But it was your game that left scars
Ooh, I'm over you

Don't call me up
I'm going out tonight
Feeling good now you're outta my life
Don't wanna talk about us
Gotta leave it behind
One drink and you're outta my mind
Now, now take it up
Baby, I'm on a high
You're alone, going out of your mind
When I'm here up in the club
And I don't wanna talk
So don't call me up

'Cause I'm here looking fine, babe
And I got eyes looking my way
And everybody's on my vibe, babe
Now, now, now, now, don't call me up
My friends said you were a bad man
I should have listened to them back then
And now you're tryna hit me up again
Now, now, now, now

I'm over you and I don't need your lies no more
'Cause the truth is, without you, boy, I'm stronger
And I know you said that I changed with my cold heart
But it was your game that left scars
Ooh, I'm over you

Don't call me up
I'm going out tonight
Feeling good now you're outta my life
Don't wanna talk about us
Gotta leave it behind
One drink and you're outta my mind
Now, now take it up
Baby, I'm on a high
You're alone, going out of your mind
When I'm here up in the club
And I don't wanna talk
So don't call me up 
 
Don't call me up 
So don't call me up 
Don't call me up 
 
I'm over you and I don't need your lies no more 
'Cause the truth is, without you, boy, I'm stronger 
And I know you said that I changed with my cold heart 
But it was your game that left scars 
Ooh, I'm over you 
 
Don't call me up 
I'm going out tonight 
Feeling good now you're outta my life 
Don't wanna talk about us 
Gotta leave it behind 
One drink and you're outta my mind 
Now, now take it up 
Baby, I'm on a high 
You're alone, going out of your mind 
When I'm here up in the club 
And I don't wanna talk 
So don't call me up`},{id:103,titre:"Whatcha Say",artiste:"Jason Derulo",audioUrl:"./audio/Jason-Derulo.mp3",paroles:`Wha-wha-wha-wha-what did you say?
(J-J-J-J-J.R.)

Mm, whatcha say
Mm, that you only meant well?
Well, of course you did
Mm, whatcha say (Jason Derulo)
Mm, that it's all for the best?
Of course, it is

I (I) was so wrong (Wrong) for so long (Long)
Only tryna please myself (Myself)
Girl, I (I) was caught up (Up) in her lust (Lust)
When I don't really want no one else, so no
I know I should have treated you better (Better)
But me and you were meant to last forever (Forever)
So let me in (Let me in), give me another chance (Another chance)
To really be your man (Oh)

'Cause when the roof caved in and the truth came out
I just didn't know what to do
But when I become a star, we'll be living so large
I'll do anything for you
So tell me, girl

Mm, whatcha say
Mm, that you only meant well?
Well, of course you did
Mm, whatcha say (Whatcha say, whatcha say)
Mm, that it's all for the best?
Of course it is
Mm, whatcha say
Mm, that you only meant well?
Well, of course you did
Mm, whatcha say (Whatcha say, whatcha say)
Wha-wha-wha-wha-what did you say?

How (How) could I live (Live) with myself (Self)
Knowing that I let our love go? (Love go)
And ooh (Ooh), what I'd do (Do) with one chance (Chance)
I just gotta let you know
I know what I did wasn't clever
But me and you we're meant to be together
So let me in (Let me in), give me another chance (Another chance)
To really be your man

'Cause when the roof caved in and the truth came out
I just didn't know what to do
But when I become a star, we'll be living so large
I'll do anything for you
So tell me, girl

Mm, whatcha say
Mm, that you only meant well?
Well of course you did
Mm, whatcha say (Whatcha say, whatcha say)
Mm, that it's all for the best?
Of course it is
Mm, whatcha say
Mm, that you only meant well?
Well of course you did
Mm, whatcha say (Whatcha say, whatcha say)
Wha-wha-wha-wha-what did you say?

Girl, tell me what to say, I (Say, I)
I don't want you to leave me, though you caught me cheating
Tell me, tell me what to say, I (Say, I)
I really need you in my life 'cause things ain't right, girl
Girl, tell me what to say, I (Say, I)
I don't want you to leave me, though you caught me cheating
Tell me, tell me what to say, I (Say, I)
I really need you in my life 'cause things ain't right

'Cause when the roof caved in and the truth came out
I just didn't know what to do (I just didn't know what to do)
But when I become a star we'll be living so large I'll do anything for you
So baby, whatcha say

Mm, whatcha say
Mm, that you only meant well? (Well of course I did, baby)
Well of course you did
Mm, whatcha say (Whatcha say, whatcha say)
Mm, that it's all for the best?
Of course it is`},{id:104,titre:"Remedy",artiste:"Leony",audioUrl:"./audio/Leony.mp3",paroles:`Got me higher than life, you're like my remedy
And your touch's like ecstasy
I know that I can't fight the chemistry
I'm falling into you

I'm scared of letting you go
I'm scared that I might be losing control
I feel like nobody knows
I was hiding behind the shadows

Holding on
'Cause there's no one better than you
I am holding on
'Cause I can't go on without you

Got me higher than life, you're like my remedy
And your touch's like ecstasy
I know that I can't fight the chemistry
I'm falling into you

Got me higher than life, you're like the harmony
To every single melody
I know that I can't fight the chemistry
I'm falling into you

It's like you turned on the lights
It's like you brought all the colors to life
No longer lonely at night (Night)
You make me shine like the stars in the sky

Holding on
'Cause there's no one better than you
I am holding on
'Cause I can't go on without you

Got me higher than life, you're like my remedy
And your touch's like ecstasy
I know that I can't fight the chemistry
I'm falling into you

Got me higher than life, you're like the harmony
To every single melody
I know that I can't fight the chemistry
I'm falling into you

Got me higher than life, you're like my remedy
And your touch's like ecstasy
I know that I can't fight the chemistry
I'm falling into you

Got me higher than life, you're like the harmony
To every single melody
I know that I can't fight the chemistry
I'm falling into you

Ooh ooh
Ooh ooh
Falling into you

I'm falling into you`},{id:105,titre:"Dear Darlin'",artiste:"Olly Murs",audioUrl:"./audio/Olly-Murs.mp3",paroles:`Dear darlin’, please excuse my writing
I can’t stop my hands from shaking
'Cause I’m cold and alone tonight

I miss you and nothing hurts like no you
And no one understands what we went through
It was short. It was sweet. We tried

And if my words break through the wall
And meet you at your door
All I can say is 'Girl, I mean them all'

Dear darlin’, please excuse my writing
I can’t stop my hands from shaking
'Cause I’m cold and alone tonight

I miss you and nothing hurts like no you
And no one understands what we went through
It was short. It was sweet. We tried. We tried

[Woman:] I understand where he's coming from

Been thinking about the bar we drank in
Feeling like the sofa was sinking
I was warm in the hold of your eyes

So if my words break through the wall
To meet you at your door
All I can say is 'Girl, I mean them all'

Dear darlin’, please excuse my writing
I can’t stop my hands from shaking
'Cause I’m cold and alone tonight

I miss you and nothing hurts like no you
And no one understands what we went through
It was short. It was sweet. We tried

Oh I can't cope. These arms are yours to hold

And I miss you and nothing hurts like no you
And no one understands what we went through
It was short. It was sweet. We tried
We tried`},{id:106,titre:"Forget Me",artiste:"Lewis Capaldi",audioUrl:"./audio/LewisCapaldi_Forget-Me.mp3",paroles:`Days ache and nights are long
Two years and still, you're not gone
Guess I'm still holding on

Drag my name through the dirt
Somehow it doesn't hurt though
Guess you're still holding on
You told your friends you want me dead
And said that I did everything wrong
And you're not wrong

Well, I'll take all the vitriol
But not the thought of you moving on

'Cause I'm not ready
To find out you know how to forget me
I'd rather hear how much you regret me
And pray to God that you never met me
Than forget me
Oh, I hate to know I made you cry
But love to know I cross your mind, babe, oh, I
Even after all, it still wrecks me
To find out you knew how to forget me
Even after all this time

Days ache and nights are grey
My heart is still your place, babe
Guess I still feel the same
Know you can't stand my face
Some scars you can't erase, babe
Guess you still feel the same

Well, I'll take all the vitriol
But not the thought of you moving on

'Cause I'm not ready
To find out you know how to forget me
I'd rather hear how much you regret me
And pray to God that you never met me
Than forget me
Oh, I hate to know I made you cry
But love to know I cross your mind, babe, oh, I
Even after all, it still wrecks me
To find out you knew how to forget me
Even after all this time

I'm not ready to let you forget me, to let you forget me, to let you for—, oh
I'm not ready to let you forget me, to let you forget me, to let you for—, oh (Even after all this time)
I'm not ready to let you forget me, to let you forget me, to let you for—, oh
I'm not ready to let you forget me, to let you forget me, to let you for—, oh

'Cause I'm not ready
To find out you know how to forget me
I'd rather hear how much you regret me
And pray to God that you never met me
Than forget me
Oh, I hate to know I made you cry
But love to know I cross your mind, babe, oh, I
Even after all, it still wrecks me
To find out you knew how to forget me
Even after all this time`},{id:107,titre:"Et Bam",artiste:"Mentissa",audioUrl:"./audio/Mentissa.mp3",paroles:`Gare du Nord en novembre
Les cheveux en pagaille
Comme une boule au ventre
Qui me tend, qui me tord
Et Paris qui s'étale

Tout à coup, me voilà
Les jambes fébriles
Qu'elle est grande pour moi
Cette scène imposante
Où tout devient fragile

Et bam, et bam
Dans la poitrine
Maman, je l'ai fait pour ça
Je veux pas, je veux pas l'Amérique

Je veux ce cœur qui bat
Et bam, et bam
Sur la musique
Maman, je l'ai fait pour toi
Je veux pas, je veux pas l'Amérique

Envolée mon enfance
Mais jamais rien n'efface
Les rêves ou la violence
Ah, oui, ça vous glace
Mais c'est pour ça qu'on chante

Donnez-moi d'échouer
Et que vienne la pluie
On ne m'ôtera jamais
Que j'ai déjà gagné
De nouveaux amis

Et bam, et bam
Dans la poitrine
Maman, je l'ai fait pour ça
Je veux pas, je veux pas l'Amérique

Je veux ce cœur qui bat
Et bam, et bam
Sur la musique
Maman, je l'ai fait pour toi
Je veux pas, je veux pas l'Amérique

Et plus fort que ma voix
Je l'entends frapper
Ce cœur qui bat
Déballer mes larmes
Et mes « pourquoi »

Et bam, et bam
Dans la poitrine
Maman, je l'ai fait pour ça
Je veux pas, je veux pas l'Amérique

Je veux ce cœur qui bat
Et bam, et bam
Sur la musique
Messieurs, mesdames, me voilà
Je veux pas, je veux pas l'Amérique

(Je veux ce cœur qui bat, et bam, et bam)
Oh, oh, oh, oh (Et bam, et bam)
Oh, oh, oh, oh (Et bam, et bam)
Oh, oh, oh, oh
Je veux ce cœur qui bat`},{id:108,titre:"Laisser couler",artiste:"Ridsa",audioUrl:"./audio/Ridsa.mp3",paroles:`Faut parler tu fais le sourd
Et tu pleures quand faut rire
J'suis perdu dans les amis
Chaqu'un sa vie

Si personne te relève
Pourquoi tu restes assis
Tu te voile sla face
En faite tu fuis

Tout ira bien, oublie, avance Sans bruit
Hier c'est loin, maintenant faut faire ta vie
Tout ira bien, oublie, avance Sans bruit
Regarde au loin, tu peux, souris

Faut laisser couler, faut laisser couler
Faut laisser couler, faut laisser couler
Couler couler

Ne retiens pas les gens vaut mieux les laisser s'en aller (s'en aller)
Si j'en suis pas ton genre tu n'devrai même pas m'calculer (m'calculer)
Le temps finira par dire si t'es bien accompagné (accompagné)
T'as assez donné maintenant laisse couler (couler)

Tout ira bien, oublie, avance Sans bruit
Hier c'est loin, maintenant faut faire ta vie
Tout ira bien, oublie, avance Sans bruit
Regarde au loin, tu peux, souris
Faut laisser couler, faut laisser couler
Faut laisser couler, faut laisser couler
Couler couler

Aller respire un peu
C'est dure qu'es ce que on y peut
Qui dit qu'ailleurs c'est mieux, c'est mieux, c'est mieux
On aura pas besoin d'eux
Les soucis les envieux
Pense à toi juste un peu

Faut laisser couler, faut laisser couler
Faut laisser couler, faut laisser couler
Couler couler
Faut laisser couler, faut laisser couler
Faut laisser couler, faut laisser couler
Couler couler

Aller Aller Oh, Aller Aller Oh
Aller Aller Oh, Aller Aller Oh
Aller Aller Oh, Aller Aller Oh
Aller Aller Oh, Aller Aller Oh`},{id:109,titre:"Quand La Musique Est Bonne",artiste:"Jean-Jacques Goldman",audioUrl:"./audio/Quand-la-musique-est-bonne.mp3",paroles:`J'ai trop saigné sur les Gibson
J'ai trop rôdé dans les Tobacco road
Y'a plus que les caisses qui me résonnent
Et quand je me casse, je voyage toujours en fraude

Des champs de coton dans ma mémoire
Trois notes de blues c'est un peu d'amour noir
Quand je suis trop court, quand je suis trop tard
C'est un recours pour une autre histoire

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle ne triche pas

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle guide mes pas

J'ai plus d'amour, j'ai pas le temps
J'ai plus d'humour, j'sais plus d'où vient le vent
J'ai plus qu'un clou, une étincelle
Des trucs en plomb qui me brisent les ailes

Un peu de swing, un peu du King
Pas mal de feeling et de décibels
C'est pas l'usine, c'est pas la mine
Mais ça suffit pour se faire la belle

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle ne triche pas

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle guide mes pas

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle ne triche pas

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle guide mes pas

Quand la musique est bonne
Quand la musique donne
Quand la musique sonne, sonne, sonne
Quand elle ne triche pas

Quand la musique est bonne
Quand la musique donne`},{id:110,titre:"La ballade de Jim",artiste:"Alain Souchon",audioUrl:"./audio/La-ballade-de-Jim.mp3",paroles:`Comme elle est partie, Jim a les nerfs
Jimmy boit du gin dans sa Chrysler
La presqu'île, le boulevard de la mer est con
Comme elle est partie, attention: Jimmy tourne en rond

Hier soir encore, son héroïne
Le serrait si fort en disant "Jim"
Elle était son calmant, son alcool profond
Comme elle est partie, attention: Jimmy tourne pas rond

Jimmy, t'es fort, mais tu pleures
Sur le cuir de ta Chrysler
Là-bas le soleil s'écroule dans la mer
Jimmy, les filles pour le cœur
Comme l'alcool et les revolvers
C'est sauter en l'air
Tomber par terre
Boum!

Depuis deux ans, sûr, Jim bossait fort
Pour que sa starlette bronze en hors-bord
Avec elle, il voulait un bébé, sans rire
Comme elle est partie, attention: Jimmy veut mourir

Jimmy, t'es fort, mais tu pleures
Sur le cuir de ta Chrysler
Là-bas le soleil s'écroule dans la mer
Jimmy, les filles pour le cœur
Comme l'alcool et les revolvers
C'est sauter en l'air
Tomber par terre
Boum!

Jimmy va trop vite, Jimmy pleurniche
Il sent son parfum sur la corniche
Les lacets, le gravier, et, dans l'air du soir
La Chrysler s'envole dans les fougères et les nénuphars

Jimmy s'éveille dans l'air idéal
Le paradis clair d'une chambre d'hôpital
L'infirmière est un ange et ses yeux sont verts
Comme elle lui sourit, attention: Jimmy veut lui plaire`},{id:111,titre:"Parle à ta tête",artiste:"Indila",audioUrl:"./audio/Indila_Parle-a-ta-tete.mp3",paroles:`Je veux qu'on m'écoute, oui, je veux qu'on m'comprenne
Je veux aimer savoir pourquoi je suis là, dis-moi pourquoi je suis là
Et je marche seule cachée sous mon ombrelle
S'te plaît, ne te moques pas de moi, j'vais au pôle emploi
Le moral à plat

Et je fais le mariole, parfois j'fais des marmites
J'en ai marre d'aller très vite, j'peux démarrer de suite
Dites moi c'que vous en dites
Oh, dites moi c'que vous en dites

Parle p-p-p-p-p, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête
Parle à tê-tê-tê-tête, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête

J'suis en mode burn out, est-ce qu'il faut qu'j'te l'répète ?
Ça brûle, ça pique et ça monte à la tête, j'deviens encore plus bête
J'garde le sourire, paraît qu'la vie est belle
S'te plaît non, non ne me ment pas, oui j'ai dit ne ment pas
C'est bien trop pour moi

Parle p-p-p-p-p, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête (c'est bien trop pour moi)
Parle à tê-tê-tê-tête, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête

Toutes ces belles lumières et ce tumulte autour de moi
M’embrument et m’enivre , d'amour et j'y crois
Je donnerai tout, sans rien garder sauf ta réalité
Je mourrai comme j'ai vécu une fois l'rideau tombé
L'idéal, auquel je rêve, il n'a rien d'anormal
Par delà, le bien, le mal le temps m'emportera
Comme une rose en cristal vacille et perd tous ces pétales
J'veux faire briller ma vie comme l'éclat d'une étoile
Pardonne-moi le jour où je ne pourrai plus te parler
Pardonne-moi chaque moment où je n't'ai pas regardé
Oh, pardonne-moi tout le temps que je ne t'ai pas donné
Et chaque lendemain qui s'ra un jour de moins

Moi, je veux vivre que mon cœur brûle, j'veux m'sentir exister
Souffrir, pleurer, danser, aimer à en crever
Paris, Athènes, Venise, Harlem, Moscou à tes cotés
Le temps ne vaut qu'du jour où il nous est compté

Parle p-p-p-p-p, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête
Parle à tê-tê-tê-tête, parle à, parle à ta tête
Parle à, parle à ta tête, parle à, parle à ta tête`},{id:112,titre:"On Écrit Sur Les Murs",artiste:"Demis Roussos",audioUrl:"./audio/On-ecrit-sur-les-murs.mp3",paroles:`Partout autour de nous,
Y'a des signes d'espoir dans les regards
Donnons leurs écrits car dans la nuit
Tout s'efface même leur trace
On écrit sur les murs le nom de ceux qu'on aime

Des messages pour les jours à venir
On écrit sur les murs à l'encre de nos veines
On dessine tout ce que l'on voudrait dire
On écrit sur les murs la force de nos rêves

Nos espoirs en forme de graffiti
On écrit sur les murs pour que l'amour se lève
Un beau jour sur le monde endormi
Des mots seulement gravés pour ne pas oublier pour tout changer

Mélangeons demain dans un refrain nos visages, métissages
On écrit sur les murs le nom de ceux qu'on aime
Des messages pour les jours à venir
On écrit sur les murs à l'encre de nos veines
On dessine tout ce que l'on voudrait dire

On écrit sur les murs la force de nos rêves
Nos espoirs en forme de graffiti
On écrit sur les murs pour que l'amour se lève
Un beau jour sur le monde endormi

On écrit sur les murs le nom de ceux qu'on aime
Des messages pour les jours à venir
On écrit sur les murs à l'encre de nos veines
On dessine tout ce que l'on voudrait dire

On écrit sur les murs la force de nos rêves
Nos espoirs en forme de graffiti
On écrit sur les murs pour que l'amour se lève
Un beau jour sur le monde endormi`},{id:113,titre:"Derrière le brouillard",artiste:"Grand Corps Malade ft. Louane",audioUrl:"./audio/Grand-Corps-Malade_Louane.mp3",paroles:`Et dans le noir, derrière le brouillard, j'entends ce piano chanter
Chanter l'espoir, l'envie de croire, qu'on peut tout réinventer
Alors je joins ma voix encore une fois pour tenir dans l'orage
Je joins ma voix encore une fois pour trouver le courage

Il n'y a pas d'recette, pour supporter les épreuves
Remonter les cours des fleuves, quand les tragédies pleuvent
Il n'y a pas de recette, pour encaisser les drames
Franchir les mers à la rame, quand le rêve te fait du charme
Il n'y a pas de recette, quand t'en avais pas non plus
Personne ne t'avait prévenu, tu t'es battu comme t'as pu
Il n'y a pas de recette, quand l'enfer te sers la main
Abandonner c'est humain, l'avenir c'est loin
Mais tu t'es mise à chanter, même pas par choix
Comme à chaque chute, à chaque fois, ça c'est imposé en toi
Chanter, comme un enfant surpris, comme un instinct d'survie, comme un instant d'furie
Chanter pour accepter, exprimer, résister, avancer, progresser, exister
Chanter comme une résilience, une délivrance
Chanter comme une évidence

Et dans le noir, derrière le brouillard, j'entends ce piano chanter
Chanter l'espoir, l'envie de croire, qu'on peut tout réinventer
Alors je joins ma voix encore une fois pour tenir dans l'orage
Je joins ma voix encore une fois pour trouver le courage

À quel moment, tu comprends que c'est ton truc ?
Que la musique revient te relever de chaque chute
À quel moment, tu sais qu'elle est ta boussole ?
Quand la vie te punis, la musique te console
À quel moment, ce piano a chanté ?
Ses accords t'ont hanté, au choyé ta santé
À quel moment, il est ta respiration ?
Et à quel moment, on en fait une chanson ?

Si je me sens comme une enfant, j'ai déjà eu plusieurs vies
Je peux regarder devant, en chantant ce qu'on m'a pris
Moi aussi, j'ai connu une sorte brouillard et j'ai entendu ce piano au loin
Et moi aussi, sans vraiment le prévoir, naturellement ma voix la rejoint
On a pas du tout les mêmes histoires, mais finalement quelques points communs
Comme un air de force oratoire, j'écris, tu chantes, le brouillard est bien loin

Et dans le noir, derrière le brouillard, j'entends ce piano chanter
Chanter l'espoir, l'envie de croire, qu'on peut tout réinventer
Alors je joins ma voix encore une fois pour tenir dans l'orage
Je joins ma voix encore une fois pour trouver le courage`},{id:114,titre:"De l'or",artiste:"Vitaa & Slimane",audioUrl:"./audio/Vitaa-Slimane_De-l-or.mp3",paroles:`Le temps pourrait finir par nous vider
Le monde entier pourrait bien essayer
On a ce qu'ils ont du mal à trouver
Ça vaut de l'or (ça vaut de l'or)

Quand tu parles, ma tête se met à trembler
Et dans tes larmes, j'pourrais me noyer
Ce que tu fais même quand c'est pas assez
Ça vaut de l'or (ça vaut de l'or)

Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or
Prends mon cœur, garde-le, mon cœur, j'peux tenir encore
Et ça, ça vaut de l'or
Si tu tombes, moi, je tombe, j'peux encaisser
Je peux tenir encore
Si tu tombes, moi, je tombe, rien n'a changé
Je t'aime, et alors ?
Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or

J'veux commencer, recommencer, partir de zéro
Quand moi, je m'amuse de tes défauts
Je suis touché par tous les mots bateaux
Mais ça vaut de l'or (mais ça vaut de l'or)

Mmh, mmh

Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or
Prends mon cœur, garde-le, mon cœur, j'peux tenir encore
Et ça, ça vaut de l'or
Si tu tombes, moi, je tombe, j'peux encaisser
Je peux tenir encore
Si tu tombes, moi, je tombe, rien n'a changé
Je t'aime, et alors ?
Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or

Non, non, on en est là
Est-ce qu'on sait quand c'est là ?
Qu'y a-t-il au-delà ?
Non, non, on en est là
Est-ce qu'on sait quand c'est là ?
Qu'y a-t-il au-delà ?

Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or
Prends mon cœur, garde-le, mon cœur, j'peux tenir encore
Et ça, ça vaut de l'or
Si tu tombes, moi, je tombe, j'peux encaisser
Je peux tenir encore
Si tu tombes, moi, je tombe, rien n'a changé
Je t'aime, et alors ?
Détruis-moi, sers-toi de moi, j'peux tenir encore
Et ça, ça vaut de l'or

Non, non, on en est là
Est-ce qu'on sait quand c'est là ?
Qu'y a-t-il au-delà ?
Non, non, on en est là
Est-ce qu'on sait quand c'est là ?
Qu'y a-t-il au-delà ?`},{id:115,titre:"Everytime We Touch",artiste:"Cascada",audioUrl:"./audio/Cascada.mp3",paroles:`I still hear your voice, when you sleep next to me.
I still feel your touch in my dream.
(in my dream)
Forgive me my weakness, but I don't know why,
Without you, it's hard to survive.

'Cause every time we touch, I get this feeling.
And every time we kiss, I swear I could fly.
Can't you feel my heart beat fast?
I want this to last.
Need you by my side.

'Cause every time we touch, I feel the static.
And every time we kiss, I reach for the sky.
Can't you hear my heart beat so?
I can't let you go.
Want you in my life.

Your arms are my castle, your heart is my sky.
They wipe away tears that I cry.
(that I cry)
The good and the bad times: we've been through them all.
You make me rise when I fall.

'Cause every time we touch, I get this feeling.
And every time we kiss, I swear I could fly.
Can't you feel my heart beat fast?
I want this to last.
Need you by my side.

'Cause every time we touch, I feel the static.
And every time we kiss, I reach for the sky.
Can't you hear my heart beat so?
I can't let you go.
Want you in my life.

'Cause every time we touch, I get this feeling.
And every time we kiss, I swear I could fly.
Can't you feel my heart beat fast?
I want this to last.
Need you by my side.`},{id:116,titre:"Summertime Sadness",artiste:"Lana Del Rey",audioUrl:"./audio/Lana-Del-Rey_Summertime-Sadness.mp3",paroles:`Kiss me hard before you go
Summertime sadness
I just wanted you to know
That, baby, you're the best

I got my red dress on tonight
Dancing in the dark in the pale moonlight
Done my hair up real big beauty queen style
High heels off, I'm feeling alive

Oh, my God, I feel it in the air
Telephone wires above are sizzling like a snare
Honey, I'm on fire, I feel it everywhere
Nothing scares me anymore

(1, 2, 3, 4)

Kiss me hard before you go
Summertime sadness
I just wanted you to know
That, baby, you're the best

I got that summertime, summertime sadness
S-s-summertime, summertime sadness
Got that summertime, summertime sadness
Oh, oh, oh, oh, oh

I'm feeling electric tonight
Cruising down the coast going 'bout 99
Got my bad baby by my heavenly side
I know if I go, I'll die happy tonight

Oh, my God, I feel it in the air
Telephone wires above are sizzling like a snare
Honey, I'm on fire, I feel it everywhere
Nothing scares me anymore

(1, 2, 3, 4)

Kiss me hard before you go
Summertime sadness
I just wanted you to know
That, baby, you're the best

I got that summertime, summertime sadness
S-s-summertime, summertime sadness
Got that summertime, summertime sadness
Oh, oh, oh, oh, oh

Think I'll miss you forever
Like the stars miss the sun in the morning sky
Later's better than never
Even if you're gone I'm gonna drive (drive, drive)

I got that summertime, summertime sadness
S-s-summertime, summertime sadness
Got that summertime, summertime sadness
Oh, oh, oh, oh, oh

Kiss me hard before you go
Summertime sadness
I just wanted you to know
That, baby, you're the best

I got that summertime, summertime sadness
S-s-summertime, summertime sadness
Got that summertime, summertime sadness
Oh, oh, oh, oh, oh`},{id:117,titre:"M'envoler",artiste:"Jeck & Carla Lazzari",audioUrl:"./audio/M-envoler_Jeck&Carla-Lazzari.mp3",paroles:`Encore un soir, encore une heure
Toujours ce désert dans mon coeur
Je broie du noir, là, j'suis pas d'humeur
Dis-moi, il est où le bonheur ?
Dix ans plus tard et autant d'erreurs
Toujours ce parfum, cette odeur
J'veux nous revoir ici ou ailleurs

J'veux m'envoler
Graver ton nom sur la Tour Eiffel
Chanter du matin au soir pour t'aimer
Braver les vents, les marées, les tempêtes
S'il le fallait, j'veux m'envoler
Que le ciel s'assombrisse et nous arrose
J'inonderais ton cœur de mille et une roses
Et on prendra la vie comme elle viendra
Rien qu'toi et moi, j'veux m'envoler
M'envoler, m'envoler

Dernier regard, dernières fleurs
L'eau a coulé, les larmes meurent
Et notre histoire, un nous meilleur
S'abandonner, faire fuir nos peurs
Que nos mémoires effacent ces heures
Passées à torturer nos cœurs
Une dernière danse pour deux âmes soeurs

J'veux m'envoler
Graver ton nom sur la Tour Eiffel
Chanter du matin au soir pour t'aimer
Braver les vents, les marées, les tempêtes
S'il le fallait, j'veux m'envoler
Que le ciel s'assombrisse et nous arrose
J'inonderais ton cœur de mille et une roses
Et on prendra la vie comme elle viendra
Rien qu'toi et moi, j'veux m'envoler
M'envoler, m'envoler
J'veux m'envoler
M'envoler, m'envoler
Envole-toi
Envole-moi
Nos lendemains comme autrefois

J'veux m'envoler
Graver ton nom sur la Tour Eiffel
Chanter du matin au soir pour t'aimer
Braver les vents, les marées, les tempêtes
S'il le fallait, j'veux m'envoler
Que le ciel s'assombrisse et nous arrose
J'inonderais ton cœur de mille et une roses
Et on prendra la vie comme elle viendra
Rien qu'toi et moi, j'veux m'envoler
M'envoler, m'envoler
J'veux m'envoler
M'envoler, m'envoler`},{id:118,titre:"Don't Be So Shy",artiste:"Imany",audioUrl:"./audio/Imany.mp3",paroles:`Take a breath
Rest your head
Close your eyes
You alright
Just lay down
To my side
Do you feel my heat
On your skin?

Take off your clothes
Blow out the fire
Don't be so shy
You're alright, you're alright

Take off my clothes
Oh, bless me, father
Don't ask me why
You're alright, you're alright

Hold my stare
I'm in command
Can you feel my hips
In your hands?
And I'm laying down
By your side
I taste the sweet
Of your skin

Take off your clothes
Blow out the fire
Don't be so shy
You're alright, you're alright

Take off my clothes
Oh, bless me, father
Don't ask me why
You're alright, you're alright

And my heart does race so much faster
I drown myself in your holy water
And both my eyes just got so much brighter
And I saw God, oh yeah, so much closer

In the dark
I see your smile
Do you feel my heat
On my skin?

Take off your clothes
Blow out the fire
Don't be so shy
You're alright, you're alright

Take off my clothes
Oh, bless me, father
Don't ask me why
You're alright, you're alright

Take off my clothes
Blow out the fire
Don't be so shy
You're alright, you're alright

Take off my clothes
And bless me further
Don't ask me why
Don't ask me why, don't ask me why`},{id:119,titre:"Mon Beau-frère",artiste:"Black M",audioUrl:"./audio/BlackM-MonBeauFrere.mp3",paroles:`Mon beau-frère (hahaha)

À la base, personne ne touche à ma sœur, tu sais
Même avec un bouquet d'fleurs
T'as bien raison d'avoir des gouttes de sueur
Quarante de nos cousins débarquent tout à l'heure

Félicitations
Tu t'es engagé à vie, t'as dit " oui ", sans hésitation
J'te comprends, ma sœur est belle (Belle), et intelligente
Quand je vois tes mocassins, j'ai du mal à la comprendre

Viens avec moi, j'vais te présenter ma bande
Bois un verre à la nôtre, faut te détendre
On a tellement de choses à échanger (Hein, hein)
J'espère que tu t'es vraiment rangé

Elle nous a beaucoup parlé d'toi, elle nous a dit qu't'étais le bon
Si tu merdes, y a pas le choix, on va devoir t'jeter d'un pont
Doucement avec ma sœur, le mariage c'est pas de l'eau
En entrant dans sa vie, tu es rentré dans la nôtre

Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Fais attention à elle
Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Tant que tu l'aimes, on t'aime

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah
Bienvenue
Yeah, yeah, yeah, yeah, yeah
Tant que tu l'aimes, on t'aime

À la base, personne ne touche à ma sœur, tu sais
Où tu peux te foutre ta fleur (Oups)
T'as de la chance que maman t'apprécie fort
Mais t'es mort le jour où ça va parler divorce

J'ai enquêté sur toi, monsieur l'gendre idéal, j'ai des petits dossiers
Après, c'est toi qui vois, si tu veux pas que j'parle, va falloir négocier

Je sais qu'tu m'aimes
La meilleure façon de s'intégrer, c'est d'être soi-même
T'es arrivé dans la famille comme un rayon d'soleil
Il ne faut pas nous en vouloir si parfois on s'protège

Et j'avoue que
J'aimerais voir le mélange de vous deux (Eh)
Mais pas touche
Elle est pas encore à toi, attends un peu

Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Fais attention à elle
Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Tant que tu l'aimes, on t'aime

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah
Bienvenue
Yeah, yeah, yeah, yeah, yeah
Tant que tu l'aimes, on t'aime, bienvenue

Eh approchez-vous, approchez-vous
Faites un cercle autour de lui là, on va rigoler un p'tit peu
Montre-nous c'que tu sais faire, frérot

Tout l'monde, tout l'monde
Le beau-reuf, le beau-reuf, le beau-reuf, le beau-reuf
Le beau-reuf, le beau-reuf, le beau-reuf, le beau-reuf

Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Fais attention à elle

Bienvenue, mon frère
Mais attention quand même
Bienvenue, mon frère
Tant que tu l'aimes, on t'aime

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Yeah, yeah, yeah, yeah

Bienvenue
Yeah, yeah, yeah, yeah, yeah
Tant que tu l'aimes, on t'aime

Bienvenue
Yeah, yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Yeah, yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Bienvenue
Yeah, yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Yeah, yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Bienvenue
Yeah, yeah, yeah, yeah, yeah (Le beau-reuf, le beau-reuf)
Tant que tu l'aimes, on t'aime, bienvenue`},{id:120,titre:"Can You Feel The Love Tonight",artiste:"Elton John",audioUrl:"./audio/Elton-John_Can-You-Feel.mp3",paroles:`There's a calm surrender to the rush of day
When the heat of a rolling wind can be turned away
An enchanted moment, and it sees me through
It's enough for this restless warrior just to be with you

Can you feel the love tonight?
It is where we are
It's enough for this wide-eyed wanderer
That we've got this far

And can you feel the love tonight?
How it's laid to rest?
Oh, it's enough to make kings and vagabonds
Believe the very best

There's a time for everyone if they only learn
That the twisting kaleidoscope moves us all in turn
There's a rhyme and reason to the wild outdoors
When the heart of this star-crossed voyager beats in time with yours

Can you feel the love tonight?
It is where we are
It's enough for this wide-eyed wanderer
That we've got this far

Can you feel the love tonight?
How it's laid to rest?
Oh, it's enough to make kings and vagabonds
Believe the very best

Oh, it's enough to make kings and vagabonds
Believe the very best`},{id:121,titre:"Spirit ('The King Lion') ",artiste:"Beyoncé",audioUrl:"./audio/Beyonce-SPIRIT.mp3",paroles:`Uishi kwa muda mrefu mfalme
(Uishi kwa uishi kwa)
Uishi kwa muda mrefu mfalme
(Uishi kwa, uishi kwa)

Yeah, yeah, and the wind is talking
Yeah, yeah, for the very first time
With a melody that pulls you towards it
Painting pictures of paradise

Saying rise up
To the light in the sky, yeah
Watch the light lift your heart up
Burn your flame through the night, whoa

Spirit, watch the heavens open (Open)
Yeah
Spirit, can you hear it calling? (Calling)
Yeah

Yeah, yeah, and the water's crashing
Trying to keep your head up high
While you're trembling, that's when the magic happens
And the stars gather by, by your side

Saying rise up
To the light in the sky, yeah
Let the light lift your heart up
Burn your flame through the night, yeah

Spirit, watch the heavens open (Open)
Yeah
Spirit, can you hear it calling? (Calling)
Yeah

Your destiny is coming close
Stand up and fight
So go into that far off land
And be one with the great "I Am", "I Am"
A boy becomes a man, whoa

Spirit, watch the heavens open (Open)
Yeah
Spirit, can you hear it calling? (Calling)
Yeah
Spirit, yeah, watch the heavens open, open
Yeah
Spirit, spirit, can you hear it calling? (Calling)
Yeah
Your destiny is coming close
Stand up and fight
So go into a far off land
And be one with the great "I Am"`},{id:122,titre:"Power Over Me",artiste:"Dermot Kennedy",audioUrl:"./audio/Dermot-Kennedy.mp3",paroles:`I wanna be king in your story
I wanna know who you are
I want your heart to beat for me
Oh I

Want you to sing to me softly
You can stand, I'm outrunning the dark
That's all that love ever taught me
Oh I

Call and I'll rush out
All out of breath now

You got that power over me, my my
Everything I hold dear resides in those eyes
You got that power over me, my my
The only one I know, the only one on my mind

You got that power over me (my my)
You got that power over me (my my)
You got that power over me

Remember the lake in the moonlight?
Remember you shivered and shone
I'll never forget what you looked like
On that night

I know that time's gonna take me
I know that day's gonna come
I just want the devil to hate me
Oh I

Call and I'll rush out
All out of breath now

You got that power over me, my my
Everything I hold dear resides in those eyes
You got that power over me, my my
The only one I know, the only one on my mind

You got that power over me (my love)
You got that power over me (my love)
You got that power over me

It was all in doubt
They were all around

So we hide away and never tell
You decide that darkness knows you well
That lesson of love, all that it was
I need you to see

You got that power over me, my my
Everything I hold dear resides in those eyes
You got that power over me, my my
The only one I know, the only one on my mind
You got that power over me, woo!

I know that you let her down, no
Let her down low

You got that power over me, my my
Everything I hold dear resides in those eyes
You got that power over me, my my
The only one I know, the only one on my mind
You got that power over me

Mmm-mmm
Mmm-mmm`},{id:123,titre:"Évidemment",artiste:"La Zarra",audioUrl:"./audio/LaZarra.mp3",paroles:`Mon cœur, mes mains, mes yeux, mes reins
Plus rien ne m'appartient
J'me fais du mal pour faire du bien
J'oublie comme si c'n'était rien

Dans mon jardin d'enfer poussent des fleurs
Que j'arrose de mes rêves, de mes pleurs
On a beau être sur le toit du monde
On ne peut toucher le ciel du doigt

Évidemment
Toutes ces belles promesses que j'entends
C'n'est que du vent
Évidemment
Car après l'beau temps vient la pluie
C'est c'qu'on oublie
C'est toujours trop beau pour être vrai
Mais c'n'est jamais trop laid pour être faux
Évidemment
Elle ne s'ra plus jamais la même
Cette fille d'avant

Je vends demain, j'rachète hier
Le temps est assassin
Je cherche l'amour, je n'trouve rien
Comme dans mon sac à main

Dans ma tête c'n'est pas tant évident
Je recherche la vérité, tout en l'évitant
On a beau être sur le toit du monde
On ne peut toucher le ciel du doigt

Évidemment
Toutes ces belles promesses que j'entends
C'n'est que du vent
Évidemment
Elle ne s'ra plus jamais la même
Cette fille d'avant

Car moi je chante
Ma vie, la vôtre, et un peu de romance
Je suis nue devant vous
Donnez-moi donc une chance
De vous à moi, de moi à vous
Ai-je réussi à chanter
À chanter la Grande France ?

C'est toujours trop beau pour être vrai
Mais c'n'est jamais trop laid pour être faux
Évidemment
Elle ne s'ra plus jamais la même
Cette fille d'avant
Évidemment`},{id:124,titre:"Beau",artiste:"Joseph Kamel ft. Julien Doré",audioUrl:"./audio/JKamel-JDoré_Beau.mp3",paroles:`Assis sur le trottoir la soirée n'est pas belle
Il est sûrement trop tard pour qu'elle prenne mon appel
Je laisserai un message pour avoir des nouvelles
Elle l'écoutera tout bas et le gardera pour elle
Cette nuit j'suis dans ma vie, elle en est tellement loin
Ses yeux rivés sur lui et sa peau sous ses mains
Assis sur le trottoir c'est plus du tout pareil
Ce soir j'envie celui qui veillera son réveil

Si tu savais comme c'est beau (oh oh, oh oh)
Si tu voyais comme c'est beau (oh oh, oh oh)
J'ai vu son reflet dans l'eau (oh oh, oh oh)
Si tu savais comme c'est beau (oh oh, oh oh)

Assise en face de moi elle me regarde à peine
Quelque chose dans sa voix sonne comme un cœur qui saigne
Elle reçoit ce message qui soudain la rend belle
La lumière de l'écran, le sourire qu'il révèle
Cette nuit elle pense à lui elle dit qu'elle n'y peut rien
J'me bats contre un souvenir en lui tenant la main
Assise en face de moi c'est plus du tout pareil
Ce soir j'envie celui qui lui manque au réveil

Si tu savais comme c'est beau (oh oh, oh oh)
Si tu voyais comme c'est beau (oh oh, oh oh)
J'ai vu son reflet dans l'eau (oh oh, oh oh)
Si tu savais comme c'est beau (oh oh, oh oh)

Elle a laissé son cœur entre nous
Entre nous et le reste
Elle a laissé son cœur à genoux
Sur le sol, des promesses
Elle a laissé son cœur entre nous
Elle nous laisse le pire et le reste elle s'en fout
Si tu savais comme c'est beau (si tu savais comme c'est beau, oh oh, oh oh)
Si tu voyais comme c'est beau (si tu voyais comme c'est beau, oh oh, oh oh)
J'ai vu son reflet dans l'eau (oh oh, oh oh)
Si tu savais comme c'est beau (oh oh, oh oh)
Si tu savais comme c'est beau
Si tu voyais comme c'est beau`},{id:125,titre:"LOVE'N'TENDRESSE",artiste:"Eddy de Pretto",audioUrl:"./audio/Eddy-de-Pretto.mp3",paroles:`C'était l'début des années 20
Le début de la fin sûrement
Toi, tu courais toujours en vain
Ouais tu aimais gagner ton temps
Dans les trop-tard de tes trente ans
Ouais, tu étais déjà sous l'eau
Et tout l'apnée de ton dedans
Semblait te lancer des signaux
Tu changeais d'appartement
Pour une dixième fois peut-être
Tu te lavais dans les fêtes
Entre bureau et tristesse
C'était peut-être ça la vie
T'en étais persuadé aussi
Jusqu'à c'qu'enfin tu découvres
Qu'il existait l'amour

Un peu de love et de tendresse
Finalement, c'est c'qu'il nous reste
Que de l'amour, que de beaux gestes
Pour essuyer le temps qui blesse
Un peu de love et de tendresse
Finalement, c'est c'qu'il nous faut
Que de beaux jours, que de beaux gestes
Pour attraper le temps qui presse

Mhhh
Un peu de love et de tendresse, un peu de love et de tendresse
Un peu de love, un peu de love
Un peu de love et de tendresse
Un peu de love et de tendresse, un peu de love et de tendresse
Un peu de love, un peu de love, un peu de love et de tendresse

Fermé sans sentiments
Tu as tenu longtemps comme ça
A faire des petits bâtons d'sang
Sur les murs de ton célibat
Puis si tu vois, ce que tu rates
Tu n'auras pas mon amour mille fois
Alors que le taf sans relâche
Tu pourras y revenir sans moi

Un peu de love et de tendresse
Finalement, c'est c'qu'il nous reste
Que de l'amour, que de beaux gestes
Pour essuyer le temps qui blesse
Un peu de love et de tendresse
Finalement, c'est c'qu'il nous faut
Que de beaux jours, que de beaux gestes
Pour attraper le temps qui presse

Mhhh
Un peu de love et de tendresse, un peu de love et de tendresse
Un peu de love, un peu de love
Un peu de love et de tendresse
Un peu de love et de tendresse, un peu de love et de tendresse
Un peu de love, un peu de love, un peu de love et de tendresse`},{id:126,titre:"A nos actes manquées",artiste:"Matt Pokora",audioUrl:"./audio/Pokora_ANosActesManques.mp3",paroles:`À tous mes loupés, mes ratés, mes vrais soleils
Tous les chemins qui me sont passés à côté
À tous mes bateaux manqués, mes mauvais sommeils
À tous ceux que je n'ai pas été

Aux malentendus, aux mensonges, à nos silences
À tous ces moments que j'avais cru partager
Aux phrases qu'on dit trop vite et sans qu'on les pense
À celles que je n'ai pas osées

À nos actes manqués

Aux années perdues à tenter de ressembler
À tous les murs que je n'aurais pas su briser
À tout c'que j'ai pas vu tout près, juste à côté
Tout c'que j'aurais mieux fait d'ignorer

Au monde, à ses douleurs qui ne me touchent plus
Aux notes, aux solos que je n'ai pas inventés
Tous ces mots que d'autres ont fait rimer qui me tuent
Comme autant d'enfants jamais portés

À nos actes manqués

Aux amours échoués de s'être trop aimé
Visages et dentelles croisés juste frôlés
Aux trahisons que j'ai pas vraiment regrettées
Aux vivants qu'il aurait fallu tuer

À tout ce qui nous arrive enfin, mais trop tard
À tous les masques qu'il aura fallu porter
À nos faiblesses, à nos oublis, nos désespoirs
Aux peurs impossibles à échanger

À nos actes manqués`},{id:127,titre:"Le lien",artiste:"Grégory Lemarchal",audioUrl:"./audio/Gregory-Lemarchal_Le-lien.mp3",paroles:`Elle regarde ma main
Elle s'accorde une pause
J'appelle à mon destin
Mon cœur lourd se repose
Je ne sens que le bien
Et le mal se suppose, le lien
Elle remonte trop loin
Les souvenirs s'essoufflent
Je trouve un peu de moi
Dans cette vie sur ces routes
C'est comme aux bords d'un rien
Que le lien me revient, enfin

Racontez-moi
Quel est ce lien qui me tient vivant dans ce monde
Rassurez-moi
Si les douleurs nous rendaient meilleurs
Racontez-moi
À ceux qui rêvent sans fin
Qui s'accordent un repos
Comme ceux qui meurent pour rien
Si loin sans une rose
Je me dis que soudain
Mes peurs ce n'est pas grand-chose, pas grand-chose

Racontez-moi
Quel est ce lien qui me tient vivant dans ce monde
Rassurez-moi
Si les douleurs nous rendaient meilleurs
Racontez-moi
Quel est ce lien qui nous tient vivant dans ce monde
Rassurez-moi
Si les douleurs nous rendaient meilleurs
Le pendu me foudroie
Mais la lune s'interpose
La lutte se fait sans foi
Le jugement explose
L'ermite est au soleil
L'impératrice, le monde, pour moi
Je serre encore les poings et je crie pour demain,
Et je crie pour demain, ouh, ouh
Le lien, ouh, ouh, le lien
Racontez-moi
Quel est ce lien qui me tient vivant dans ce monde
Rassurez-moi
Si les douleurs nous rendaient meilleurs
Racontez-moi
Quel est ce lien qui nous tient vivant dans ce monde
Rassurez-moi
Si les douleurs nous rendaient meilleurs, nous rendaient meilleurs, ouh, ouh`},{id:128,titre:"Nice To Meet You",artiste:"Myles Smith",audioUrl:"./audio/Myles-Smith.mp3",paroles:`Lonely in this crowd, I see the low, oh-oh
One more drink away from letting home, home

Oh-oh-oh-oh-oh, I could feel the night slipping by
Oh-oh-oh-oh, away from me
And oh-oh-oh-oh, she caught my eye through the light
Then she came right up to me

She said, "Oh, hi, nice to meet you
Tonight, maybe we could
Go dance, get up off our feet"
She said, "This life ain't forever
One song, here together
Then let's play it on repeat"
We could dance, we could dance all night
We could dance till the morning light
Let's forget about our worries and the wild world outside
She said, "Oh, hi, nice to meet you
Tonight, maybe we could
Go dance, get up off our feet"
We could dance, we could dance all night

She took my hand and led me through the dark, oh-oh
She said, "Feel the beat, forget that broken heart", oh-oh

And oh-oh-oh-oh-oh, I could feel the night slipping by
Oh-oh-oh-oh, away from me
And oh-oh-oh-oh, I saw the light in her eyes
Glad she came right up to me

She said, "Oh, hi, nice to meet you
Tonight, maybe we could
Go dance, get up off our feet"
She said, "This life ain't forever
One song, here together
Then let's play it on repeat"
We could dance, we could dance all night
We could dance till the morning light
Let's forget about our worries and the wild world outside
She said, "Oh, hi, nice to meet you
Tonight, maybe we could
Go dance, get up off our feet"
We could dance, we could dance all night
We could dance all night`},{id:129,titre:"Le jeu",artiste:"Julien Lieb",audioUrl:"./audio/Julien-Lieb.mp3",paroles:`J'ai juste besoin de tes yeux
De leur éclat dans la nuit
Tu sais j'finirai p't'être pas vieux
Mais ensemble on fera du bruit
On criera tous les deux
À l'ombre de la pluie
Mais avant faut que je poste ma story ce soir avant minuit
J'laisse filer la folie

Pour toi je sillonne le monde
À la poursuite de tes "bravos"
En me demandant toutes les secondes
Si il est trop tard ou bien trop tôt
Pour toi je sillonne le monde
À la poursuite de tes "bravos"
En me demandant toutes les secondes
Est-ce que ça me mène en bateau?

Tu vois si je joue le jeu
C'est pour que tes yeux baissent les armes
Le temps de rallumer la flamme
Si je joue le jeu
C'est pour que tes yeux sèchent leurs larmes
Quitte à le payer de mon âme

Si je joue le jeu
Moi de quoi j'ai l'air? Le soir j'en ai assez
Prendre la lumière, des néons fatigués
J'en ai rien à faire, si je dois m'y brûler
J'prendrai la lumière
(Si je joue le jeu)
Moi de quoi j'ai l'air? Le soir j'en ai assez
Prendre la lumière, des néons fatigués
J'en ai rien à faire, si je dois m'y brûler
J'prendrai la lumière
(Si je joue le jeu)
Moi j'ai tout ce qu'il me faut
L'amour des miens, le soleil dans la peau
Et quand tournent les chiens
Moi je leur tourne le dos
Derrière mon sourire y'a tes mots
C'est pour toi que j'tends la main
Quand tu crie ça me tient chaud
Faut pas que j'brûle avant la fin
Pour toi je sillonne le monde
À la poursuite de tes "bravos"
En me demandant toutes les secondes
Si il est trop tard ou bien trop tôt
Pour toi je sillonne le monde
À la poursuite de tes "bravos"
En me demandant toutes les secondes
Est ce que ça me mène en bateau?
Tu vois si je joue le jeu C'est pour que tes yeux baissent les armes Le temps de rallumer la flamme Si je joue le jeu C'est pour que tes yeux sèchent leurs larmes Quitte à le payer de mon âme Si je joue le jeu Moi de quoi j'ai l'air? Le soir j'en ai assez Prendre la lumière, des néons fatigués J'en ai rien à faire, si je dois m'y brûler J'prendrai la lumière (Si je joue le jeu) Moi de quoi j'ai l'air? Le soir j'en ai assez Prendre la lumière, des néons fatigués J'en ai rien à faire, si je dois m'y brûler J'prendrai la lumière (Si je joue le jeu)`},{id:130,titre:"Je pense à vous",artiste:"Linh",audioUrl:"./audio/Linh.mp3",paroles:`Je ne m'y attendais pas, au grand départ
Fermez la porte sans revenir
Je sais, vous ne comprenez pas
Ma vie mes choix et l'envie de toucher à l'avenir
Non, je ne vous oublie pas, j'le dirai pas
Mais quand j'y pense, danse ma poitrine
Alors, pardonnez-moi pour tous ces soirs où
J'ai prié qu'on me laisse tranquille

C'est la même photo
Que je regarde quand mon ciel est pas beau
Chez moi, ça me manque, c'est pas nouveau
Je sais qu'on se reverra bientôt
Même à des kilomètres, quand le temps, tout s'arrête
Je pense à vous encore
Ça souffle dans ma tête, souvenirs en tempête
Et je pense à vous plus fort
Malgré les kilomètres et Paris qui fait la fête
Moi, je pense à vous encore
Ça tourne dans ma tête, quand le temps, tout s'arrête
Je pense à vous plus fort

Comment ça va? Je ne sais pas
Je vis la vie dont j'avais envie
Mais ne vous méprenez pas, mes rêves ont raison de moi
Mon cœur, lui, voudrait quitter la ville
J'vous mens pas, cette fois, c'est la dernière fois
Que je me lance, non plus, dans le vide
Si vous saviez comme j'y crois
Malgré les peines, les faux pas
À ce rêve immense qui m'anime

C'est la même photo
Que je regarde quand mon ciel est pas beau
Chez moi, ça me manque, c'est pas nouveau
Je sais qu'on se reverra bientôt
Même à des kilomètres, quand le temps, tout s'arrête
Je pense à vous encore
Ça souffle dans ma tête, souvenirs en tempête
Et je pense à vous plus fort
Malgré les kilomètres et Paris qui fait la fête
Moi, je pense à vous encore
Ça tourne dans ma tête, quand le temps, tout s'arrête
Je pense à vous plus fort`},{id:131,titre:"Je te promets",artiste:"Johnny Halliday",audioUrl:"./audio/Je-te-promets.mp3",paroles:`Je te promets le sel au baiser de ma bouche
Je te promets le miel à ma main qui te touche
Je te promets le ciel au dessus de ta couche
Des fleurs et des dentelles pour que tes nuits soient douces

Je te promets la clé des secrets de mon âme
Je te promets ma vie de mes rires à mes larmes
Je te promets le feu à la place des armes
Plus jamais des adieux rien que des au revoirs

J'y crois comme à la Terre, j'y crois comme au soleil
J'y crois comme un enfant, comme on peut croire au ciel
J'y crois comme à ta peau, à tes bras qui me serrent
J'te promets une histoire différente des autres
J'ai tant besoin d'y croire encore

Je te promets des jours tout bleus comme tes veines
Je te promets des nuits rouges comme tes rêves
Des heures incandescentes et des minutes blanches
Des secondes insouciantes au rythme de tes hanches

Je te promets mes bras pour porter tes angoisses
Je te promets mes mains pour que tu les embrasses
Je te promets mes yeux si tu ne peux plus voir
J'te promets d'être heureux si tu n'as plus d'espoir

J'y crois comme à la terre, j'y crois comme au soleil
J'y crois comme un enfant, comme on peut croire au ciel
J'y crois comme à ta peau, à tes bras qui me serrent
J'te promets une histoire différente des autres
Si tu m'aides à y croire encore

Et même si c'est pas vrai, si on te l'a trop fait
Si les mots sont usés, comme écrits à la craie
On fait bien des grands feux en frottant des cailloux
Peut-être avec le temps à la force d'y croire
On peut juste essayer pour voir

Et même si c'est pas vrai, même si je mens
Si les mots sont usés, légers comme du vent
Et même si notre histoire se termine au matin
J'te promets un moment de fièvre et de douceur
Pas toute le nuit mais quelques heures`},{id:132,titre:"Je vis pour elle (Vivo per lei)",artiste:"Andrea Bocelli & Kendji Girac",audioUrl:"./audio/Je-vis-pour-elle.mp3",paroles:`Vivo per lei da quando sai
La prima volta l'ho incontrata
Non mi ricordo come ma
Mi é entrata dentro e c'é restata
Vivo per lei perché mi fa
Vibrare forte l'anima
Vivo per lei e non è un peso

Je vis pour elle depuis toujours
Qu'elle me déchire ou qu'elle soit tendre
Elle nous dessine après l'amour
Un arc-en-ciel dans notre chambre
Elle est musique et certains jours
Quand notre cœur se fait trop lourd
Elle est la seule à pouvoir nous porter secours

E' una musa che ci invita
Elle vivra toujours en moi
Attraverso un pianoforte la morte è
Lontana io vivo per lei

Je vis pour elle jour après jour
Quand ses accords en moi se fondent
C'est ma plus belle histoire d'amour
E un pugno che non fa mai male
Vivo per lei lo so mi fa
Girare di città in città
Soffrire un po ma almeno io vivo
Je serais perdue sans elle
Vivo per lei dentro gli hotels
Je suis triste et je l'appelle
Vivo per lei nel vortice
Attraverso la mia voce
Si espande e amore produce
Vivo per lei nient'altro ho
E quanti altri incontrerò
Che come me hanno scritto in viso "Io vivo per lei"
Io vivo per lei, Io vivo per lei.
Sopra un palco o contro ad un muro (Elle nous ressemble encore tu vois)
Anche in un domani duro (J'existe encore je sais pourquoi)
Ogni giorno una conquista, La protagonista sarà sempre lei.
Oh, oh, oh.
Vivo per lei perchè oramai, Io non ha altra via d'uscita.
Perchè la musica lo sai, Davvero non l'ho mai tradita.
Elle est musique, elle a des ailes, Elle m'a donné la clé du ciel.
Qui m'ouvre enfin les portes du soleil, J'existe par elle.
Vivo per lei la musica (J'existe pour elle).
Vivo per lei è unica (Elle est toi et moi).
Io vivo per lei. Io vivo per lei.`},{id:133,titre:"Il avait les mots",artiste:"Sheryfa Luna",audioUrl:"./audio/Sheryfa-Luna.mp3",paroles:`Il était vraiment plus âgé que moi
Je suis tout bêtement tombée dans ses bras
Par lui, j'ai découvert ce que je ne connaissais pas
Il semblait sincère, je l'aimais pour ça
Ce qui m'a toujours dérangé, est que rarement
Le soir je pouvais le capter
Mais dès qu'il me parlait, je la fermais

Refrain :
Il avait les mots, m'a rendue accro
Je voyais déjà l'avenir dans ses bras
Il avait les mots, m'a rendue accro
Je ne savais pas que je ne le connaissais pas
Il avait les mots

Je n'avais plus de vie. Je ne pensais qu'à lui
Même si j'ai cramé que souvent il mentait
Il se perdait dans ce qu'il me racontait
Se trompait de nom quand il disait qu'il m'aimait
Et je supportais, je pardonnais
Dans sa caisse, j'ai trouvé des jouets
J'ai grillé que son ex continuait à l'appeler
Mais qu'est-ce qu'il cachait ?
Je le découvrais

Refrain :
Il avait les mots, m'a rendue accro
Je voyais déjà l'avenir dans ses bras
Il avait les mots, m'a rendue accro
Je ne savais pas que je ne le connaissais pas
Il avait les mots

Je l'ai suivi chez lui, bête de jardin et chien de compagnie
Putain de maison, on s'imagine tout de suite la vie de famille
Pendant tout ce temps, j'étais dans le faux, j'étais dans le faux
Sa femme m'a surprise, elle est tout de suite venue m'avouer
Que je n'étais pas la première conne avec qui il s'amusait,
Pendant tout ce temps, j'étais dans le faux, j'étais dans le faux
Ce qui m'a toujours dérangé, est que rarement
Le soir je pouvais le capter
Mais dès qu'il me parlait, je la fermais`},{id:134,titre:"Comme un fils",artiste:"Corneille",audioUrl:"./audio/Corneille.mp3",paroles:`Donne-moi tout même quand il reste plus rien
Rends-moi soûl de toi quand rien n'est bien
Fais demain quand le présent est chien
Car j'en ferai autant
Lis mes peines avant que je les dise
Oublie mes hontes sans que je précise
Cache-le moi si un jour tu me méprises
Car j'en ferai autant

Et je sais, que c'est un peu trop
Que je demande plus qu'il faut
Mais je te donne plus que des mots
Comme un fils, fais-moi croire quand tout finit
Et comme un fils, fais-moi voir quand tout est nuit
Et comme un fils, je t'aimerai qu'importe le prix
Comme un fils, je te devrai toujours la vie
Si tu m'aimes comme un fils

Dis-le moi si tout autour de moi
M'est hostile et que je ne le vois pas
Tiens ma main quand tout me pointe du doigt
Car j'en ferai autant
Et si je prends pour acquis mes chances
Fais-moi peur, que plus jamais j'y pense
Prends ma tête quand elle fait plus de sens
Car j'en ferai autant

Et je sais, que c'est un peu trop
Que je demande plus que je vaux
Mais je promets plus que des mots
Comme un fils, fais-moi croire quand tout finit
Et comme un fils, fais-moi voir quand tout est nuit
Et comme un fils, je t'aimerai, qu'importe le prix
Comme un fils, je te devrai toujours la vie
Si tu m'aimes comme un fils

Et si leurs yeux se croisent, dis que c'est toi
On s'en voudrait à vie si on se manquait
Et si tu es passé, reviens-moi
Car je ne passerai pas toute ma vie à t'écrire, ni à t'imaginer
Comme un fils, fais-moi croire quand tout finit
Et comme un fils, fais-moi voir quand tout est nuit
Comme un fils, je t'aimerai qu'importe le prix
Comme un fils, je te devrai toujours la vie.
Si tu m'aimes comme un fils`},{id:135,titre:"Ne parle pas de tes projets",artiste:"SMARTY ft. Korka Dieng",audioUrl:"./audio/SMARTY.mp3",paroles:`Ne parle pas de tes projets, garde-les dans le secret
En silence se construit, et ta réussite fera du bruit

Ne parle pas de tes projets, avance dans le silence
Ne vois-tu pas tous les dangers, tiens la langue loin de la confiance
Tu parles trop de tes envies, t'expose tes ambitions
Le lionceau qui fait trop de bruit devient une proie pour le faucon
Donc silence sur tes ouvrages, silence sur tes voyages
Sans rien dire, fais tes bagages vers le succès et ses ombrages
Protège-toi de tes paroles, elles n'attirent que des problèmes
Tu ne joueras pas de grand rôle si tu crois que tout le monde t'aime

Refrain :
Ne parle pas de tes projets (bou kéne kham finga dieum)
Garde-les dans le secret (wakh touti liguéye lou beurry)
En silence se construit (kouy yoote dou seukeute)
Et ta réussite fera du bruit (bo tékkiiwé amal nieup ndieurigne)

On n'aime pas les ambitieux, les personnes qui se projettent
Les battantes et les courageux sont les miroirs que l'on rejette
Les sourires sont mesquins, quand tu parles de tes défis
Tu ne seras jamais quelqu'un aux yeux de l'envie et du mépris
Donc tais-toi sur tes promesses, c'est comme ça que les gros naissent
Sois discrète sur tes prouesses, seul le silence est la noblesse
Les grandes choses ne font pas de bruit, les grands hommes sont muets
Ta vision sera accomplie, si tu parles moins, je te promets

Refrain :
Ne parle pas de tes projets (bou kéne kham finga dieum)
Garde-les dans le secret (wakh touti liguéye lou beurry)
En silence se construit (kouy yoote dou seukeute)
Et ta réussite fera du bruit (bo tékkiiwé amal nieup ndieurigne)

Le silence est d'or, le silence est magique (ah-ah-ah, mon ami)
Construis tes projets, sois toujours discret
Un jour ton étoile va briller, oh-oh

Refrain :
Ne parle pas de tes projets (bou kéne kham finga dieum)
Garde-les dans le secret (wakh touti liguéye lou beurry)
En silence se construit (kouy yoote dou seukeute)
Et ta réussite fera du bruit (bo tékkiiwé amal nieup ndieurigne)`},{id:136,titre:"Mignon Mignon",artiste:"René La Taupe",audioUrl:"./audio/Rene-La-Taupe.mp3",paroles:`Ce qui me plaît chez toi
C'est ton petit bidon
Tes petites poignées d'amour
Je trouve ça trop mignon
Même si les autres dans la rue
Te trouvent un peu trop gras
Pour moi c'est confortable
Quand tu me prends dans tes bras

T'es si mignon mignon mignon mignon
Mais gros gros gros
Mignon mignon mignon mignon
Mais gros gros gros
En été tu fais de l'ombre
Et en hiver tu te tiens chaud
Et quand t'as fini de bouffer
Tu nous lâches un gros pet

J'aime bien tes petits bourrelets
Et tes mollets bien potelés
Quand on commence à manger
Plus rien ne peut nous arrêter
J'ai vraiment très très faim
Et j'ai envie de te manger
Et rien qu'en pensant à toi
Je commence à saliver
Dans le chocolat il y a beaucoup de vitamines
Pour être en bonne santé toi t'arrêtes pas d'en manger
Tu te moques des gens trop maigres et tu te trouves le plus beau
Et aujourd'hui t'es fier d'avoir des calories en trop

T'es si mignon mignon mignon mignon
Mais gros gros gros
Mignon mignon mignon mignon
Mais gros gros gros
En été tu fais de l'ombre
Et en hiver tu te tiens chaud
Et quand t'as fini de bouffer
Tu nous lâches un gros pet`},{id:137,titre:"Je ne suis pas bien portant",artiste:"Gaston Ouvrard",audioUrl:"./audio/GastonOuvrard.mp3",paroles:`Depuis que je suis militaire
Ce n'est pas rigolo entre nous
Je suis d'une santé précaire
Et je m'fais un mauvais sang fou
J'ai beau vouloir me remonter
Je souffre de tous les côtés

J'ai la rate qui s'dilate
J'ai le foie qu'est pas droit
J'ai le ventre qui se rentre
J'ai l'pylore qui s'colore
J'ai l'gosier anémié
L'estomac bien trop bas
Et les côtes bien trop hautes
J'ai les hanches qui s'démanchent
L'épigastre qui s'encastre
L'abdomen qui s'démène
J'ai l'thorax qui s'désaxe
La poitrine qui s'débine
Les épaules qui se frôlent
J'ai les reins bien trop fins
Les boyaux bien trop gros
J'ai l'sternum qui s'dégomme
Et l'sacrum c'est tout comme
J'ai l'nombril tout en vrille
Et l'coccyx qui s'dévisse
Ah, bon Dieu, qu'c'est embêtant
D'être toujours patraque
Ah, bon Dieu, qu'c'est embêtant
Je n'suis pas bien portant

Afin de guérir au plus vite
Un matin tout dernièrement
Je suis allé à la visite
Voir le major du régiment.
"D'où souffrez-vous ?" qu'il m'a demandé.
"C'est bien simple !" que j'lui ai répliqué.
J'ai la rate qui s'dilate,
J'ai le foie qu'est pas droit,
Et puis j'ai ajouté :
Voyez-vous ce n'est pas tout.
J'ai les genoux qui sont mous,
J'ai l'fémur qu'est trop dur,
J'ai les cuisses qui s'raidissent,
Les guiboles qui flageolent,
J'ai les chevilles qui s'tortillent,
Les rotules qui ondulent,
Les tibias raplapla,
Les mollets trop épais,
Les orteils pas pareils,
J'ai le cœur en largeur,
Les poumons tout en long,
L'occiput qui chahute,
J'ai les coudes qui se dessoudent,
J'ai les seins sous l'bassin,
Et l'bassin qu'est pas sain.
Ah, bon Dieu, qu'c'est embêtant
D'être toujours patraque.
Ah, bon Dieu, qu'c'est embêtant.
Je n'suis pas bien portant.

Avec une charmante demoiselle,
J'devais me marier par amour.
Mais un soir comme j'étais près d'elle,
En train de lui faire la cour,
Me voyant troublé, elle me dit :
"Qu'avez-vous ?"
Moi j'lui répondis :
J'ai la rate qui s'dilate,
J'ai le foie qu'est pas droit,
J'ai le ventre qui se rentre,
J'ai l'pylore qui s'colore.
J'ai l'gosier anémié,
L'estomac bien trop bas,
Et les côtes bien trop hautes.
J'ai les hanches qui s'démanchent,
L'épigastre qui s'encastre,
L'abdomen qui s'démène.
J'ai l'thorax qui s'désaxe,
La poitrine qui s'débine,
Les épaules qui se frôlent.
J'ai les reins bien trop fins,
Les boyaux bien trop gros.
J'ai l'sternum qui s'dégomme,
Et l'sacrum c'est tout comme.
J'ai l'nombril tout en vrille,
Et l'coccyx qui s'dévisse.
Et puis j'ai ajouté :
Voyez-vous ce n'est pas tout !
J'ai les genoux qui sont mous,
J'ai l'fémur qu'est trop dur.
J'ai les cuisses qui s'raidissent,
Les guiboles qui flageolent.
J'ai les chevilles qui s'tortillent,
Les rotules qui ondulent.
Les tibias raplapla,
Les mollets trop épais.
Les orteils pas pareils !
J'ai le cœur en largeur !
Les poumons tout en long !
l'occiput qui chahute !
l'nez tout bouché !
et du coup voyez-vous je suis gêné pour parler !
c'est vexant car maintenant je suis forcé de m'arrêter !`}],Qv=()=>{const[s,h]=v.useState(!1),[d,r]=v.useState("general"),m=()=>h(!0),g=()=>h(!1);return i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"regles-button",onClick:m,children:[i.jsx(Bg,{size:20}),i.jsx("span",{children:"Règles du jeu"})]}),s&&i.jsx("div",{className:"regles-overlay",onClick:g,children:i.jsxs("div",{className:"regles-modal",onClick:I=>I.stopPropagation(),children:[i.jsx("button",{className:"regles-close",onClick:g,children:i.jsx(Ca,{size:24})}),i.jsxs("div",{className:"regles-header",children:[i.jsx("h2",{children:"Règles du BlindTest Master"}),i.jsx("p",{children:"Tout ce que tu dois savoir pour jouer"})]}),i.jsxs("div",{className:"regles-tabs",children:[i.jsxs("button",{className:`regles-tab ${d==="general"?"active":""}`,onClick:()=>r("general"),children:[i.jsx(Dm,{size:18}),i.jsx("span",{children:"Général"})]}),i.jsxs("button",{className:`regles-tab ${d==="manches"?"active":""}`,onClick:()=>r("manches"),children:[i.jsx(yo,{size:18}),i.jsx("span",{children:"Manches & Points"})]}),i.jsxs("button",{className:`regles-tab ${d==="equipes"?"active":""}`,onClick:()=>r("equipes"),children:[i.jsx(Dv,{size:18}),i.jsx("span",{children:"Équipes & Temps"})]})]}),i.jsxs("div",{className:"regles-content",children:[d==="general"&&i.jsxs("div",{className:"regles-section",children:[i.jsx("h3",{children:"Principe du jeu"}),i.jsxs("p",{children:[i.jsx("i",{children:"BlindTest Master"})," est un jeu musical où les joueurs doivent deviner le titre et/ou l'artiste d'une chanson jouée. Le jeu se déroule en plusieurs manches avec 3 variantes correspondant à 3 différents niveaux de difficulté."]}),i.jsx("h3",{children:"Objectif"}),i.jsx("p",{children:"Obtenir le maximum de points en identifiant correctement les chansons jouées. L'équipe avec le plus de points à la fin de toutes les manches remporte la partie."}),i.jsxs("div",{className:"buzzer-rule",children:[i.jsx("div",{className:"buzzer-icon",children:i.jsx(lv,{size:24})}),i.jsxs("div",{className:"buzzer-content",children:[i.jsx("h3",{children:"Règle du micro-buzzer"}),i.jsxs("p",{className:"points-note",children:[" ","S'il n'y a pas de buzzer, nous utiliserons un faux micro qu'il faut attraper le plus rapidement possible."]}),i.jsxs("p",{children:["Pour répondre, une équipe doit d'abord, et le plus rapidement possible, appuyer sur le buzzer ou attraper le micro-buzzer. ",i.jsx("br",{})," La première équipe qui buzz ou s'empare du micro a le droit de proposer sa réponse. Si la réponse est incorrecte, les autres équipes peuvent alors tenter leur chance."]})]})]}),i.jsx("h3",{children:"Déroulement"}),i.jsxs("p",{children:["1. Forme des équipes et donne-leur un nom",i.jsx("br",{}),"2. Joue les chansons une par une",i.jsx("br",{}),"3. L'équipe qui buzz ou qui attrape le micro-buzzer en premier peut répondre",i.jsx("br",{}),"4. L'équipe qui donne la réponse en premier et correctement gagne les points en jeu",i.jsx("br",{}),"5. L'équipe avec le plus de points à la fin gagne. ",i.jsx("br",{}),"6. Pendant l’écoute d’une chanson, les équipes doivent rester silencieuses pour ne pas influencer les autres."," ",i.jsx("br",{}),"7. L’extrait n’est joué qu’une seule fois."]})]}),d==="manches"&&i.jsxs("div",{className:"regles-section",children:[i.jsx("h3",{children:"Les différentes manches"}),i.jsxs("div",{className:"manche-card",children:[i.jsxs("div",{className:"manche-header",children:[i.jsx("span",{className:"manche-number",children:"1"}),i.jsx("span",{className:"manche-emoji",children:"🎵"}),i.jsx("h4",{children:"Easy BlindTest"})]}),i.jsx("p",{children:"Les chansons sont jouées normalement. Les joueurs doivent identifier le titre et l'artiste."}),i.jsxs("div",{className:"points-info",children:[i.jsx("strong",{children:"Points :"})," +1 pour le titre, +1 pour l'artiste"]})]}),i.jsxs("div",{className:"manche-card",children:[i.jsxs("div",{className:"manche-header",children:[i.jsx("span",{className:"manche-number",children:"2"}),i.jsx("span",{className:"manche-emoji",children:"🔄"}),i.jsx("h4",{children:"dnilBtseT"})]}),i.jsx("p",{children:"Les chansons sont jouées à l'envers. Les joueurs doivent reconnaître la mélodie malgré l'inversion."}),i.jsxs("div",{className:"points-info",children:[i.jsx("strong",{children:"Points :"})," +3 pour le titre, +3 pour l'artiste"]})]}),i.jsxs("div",{className:"manche-card",children:[i.jsxs("div",{className:"manche-header",children:[i.jsx("span",{className:"manche-number",children:"3"}),i.jsx("span",{className:"manche-emoji",children:"👹"}),i.jsx("h4",{children:"X-trem BlindTest"})]}),i.jsx("p",{children:"Les chansons sont déformées avec des effets audio qui changent toutes les 5 secondes. C'est la manche la plus difficile où il faut vraiment avoir une sacrée bonne oreille..."}),i.jsxs("div",{className:"points-info",children:[i.jsx("strong",{children:"Points :"})," +4 pour le titre, +4 pour l'artiste"]})]}),i.jsxs("div",{className:"points-card malus",children:[i.jsx("h4",{children:"Malus"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"1 point seulement"})," : Réponse donnée après le temps"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"-1 point"})," : Réponse incorrecte (même si une partie est juste)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"-2 points"})," : Règles non-respectées (Ex : répondre sans avoir buzzé, etc...)"]})]})]}),i.jsx("p",{className:"points-note",children:"Note : Tu peux modifier ces valeurs pour rendre le jeu plus ou moins compétitif."})]}),d==="equipes"&&i.jsxs("div",{className:"regles-section",children:[i.jsx("h3",{children:"Gestion des équipes"}),i.jsx("h4",{children:"Création des équipes"}),i.jsxs("p",{children:["Crée autant d'équipes que tu le souhaites en cliquant sur le bouton ",i.jsx("i",{children:'"Équipes & Scores"'}),". Donne un nom à chaque équipe."]}),i.jsx("h4",{children:"Nombre de joueurs"}),i.jsx("p",{children:"Il n'y a pas de limite au nombre de joueurs par équipe. Tu peux jouer avec :"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Plusieurs équipes de plusieurs joueurs"}),i.jsx("li",{children:'Plusieurs joueurs individuels (chacun étant sa propre "équipe")'})]}),i.jsx("h4",{children:"Classement"}),i.jsxs("p",{children:["Le classement des équipes est visible à tout moment en cliquant sur le bouton ",i.jsx("i",{children:'"Classement"'}),". Les trois premières équipes sont mises en évidence avec des médailles d'or, d'argent et de bronze."]}),i.jsx("h3",{children:"Gestion du temps"}),i.jsx("h4",{children:"Durée d'écoute"}),i.jsxs("p",{children:["Chaque chanson peut être écoutée pendant un maximum de 25 secondes. La réponse doit être donnée durant ce temps imparti pour obtenir tous les points possibles. ",i.jsx("br",{}),"Si une équipe donne la réponse en dehors du temps imparti, et que la réponse est juste, elle gagnera 1 point."]}),i.jsx("h4",{children:"Temps de réponse"}),i.jsxs("p",{children:["Après avoir attrapé buzzé, l'équipe dispose de 5 secondes pour donner sa réponse. ",i.jsx("br",{})," Lors de l'utilisation d'un micro-buzzer, si elle ne répond pas correctement, le micro-buzzer est remis en jeu pour les autres équipes."]}),i.jsx("div",{className:"time-warning",children:i.jsxs("p",{children:[i.jsx("strong",{children:"Astuce :"})," Pour rendre le jeu plus dynamique, tu peux arrêter la musique dès qu'une équipe buzz ou attrape le micro-buzzer, augmentant ainsi la difficulté."]})})]})]}),i.jsxs("div",{className:"regles-footer",children:[i.jsx("p",{children:"Amuse-toi bien et que la meilleure équipe gagne !"}),i.jsx("button",{className:"regles-close-button",onClick:g,children:"Fermer"})]})]})})]})},Wv=({chansons:s,chansonsJouees:h,chansonsJoueesParManche:d,mancheActuelle:r})=>{var $n,Na,wn;const[m,g]=v.useState(!1),[I,S]=v.useState("titre"),[b,p]=v.useState("asc"),[A,U]=v.useState(""),[z,Y]=v.useState("all"),[O,K]=v.useState("table"),[_,D]=v.useState("all"),[V,W]=v.useState(null),[ae,Z]=v.useState([]),[ce,re]=v.useState(0),[he,Q]=v.useState(!1),[L,oe]=v.useState(!1),[be,Ye]=v.useState(0),[ln,Ge]=v.useState(0),[H,ie]=v.useState(!1),[ee,qe]=v.useState(!1),y=v.useRef(null),T=v.useRef(window.innerWidth<=768),X=v.useRef(null),E=v.useRef(null);v.useEffect(()=>{const G=()=>{T.current=window.innerWidth<=768};return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const N=()=>g(!0),$=()=>{g(!1),y.current&&(y.current.pause(),W(null))},ne=G=>{I===G?p(b==="asc"?"desc":"asc"):(S(G),p("asc"))},Oe=G=>h.includes(G),se=G=>{var je;return((je=d[r])==null?void 0:je.includes(G))||!1},ge=(G,je=!1)=>{y.current&&y.current.pause();let de=[...sn];if(je&&(de=[...de].sort(()=>Math.random()-.5)),G){const Ce=de.findIndex(De=>De.id===G);if(Ce!==-1){const De=de[Ce];de.splice(Ce,1),de.unshift(De)}}Z(de),re(0),oe(je),Q(!0),de.length>0&&Me(de[0])},Me=G=>{y.current&&(y.current.src=G.audioUrl,y.current.load(),y.current.play().then(()=>{W(G.id),ie(!0)}).catch(je=>{console.error("Erreur lors de la lecture audio:",je),W(null),$e()}))},$e=()=>{if(!he||ae.length===0)return;let G=ce+1;G>=ae.length&&(G=0),re(G),Me(ae[G])},Sn=()=>{if(!he||ae.length===0)return;let G=ce-1;G<0&&(G=ae.length-1),re(G),Me(ae[G])},Ke=()=>{if(y.current){const G=y.current.currentTime/y.current.duration*100;Ye(G),Ge(y.current.duration)}},Fn=G=>{if(!y.current||!X.current)return;const de=X.current.getBoundingClientRect(),De=(G.clientX-de.left)/de.width*100;y.current.currentTime=De/100*y.current.duration,Ye(De)},gt=G=>{if(isNaN(G))return"0:00";const je=Math.floor(G/60),de=Math.floor(G%60).toString().padStart(2,"0");return`${je}:${de}`},en=()=>{const G=!L;if(oe(G),he&&ae.length>0){const je=ae[ce],de=[...sn].filter(Ce=>Ce.id!==je.id);G?de.sort(()=>Math.random()-.5):de.sort((Ce,De)=>{const nn=I==="titre"?Ce.titre.toLowerCase():Ce.artiste.toLowerCase(),rt=I==="titre"?De.titre.toLowerCase():De.artiste.toLowerCase();return b==="asc"?nn.localeCompare(rt):rt.localeCompare(nn)}),de.unshift(je),Z(de),re(0)}},Ln=G=>{y.current&&(V===G.id?y.current.paused?y.current.play():(y.current.pause(),W(null)):ge(G.id,L))},Bt=()=>{qe(!ee)},sn=v.useMemo(()=>s.filter(je=>{const de=je.titre.toLowerCase().includes(A.toLowerCase())||je.artiste.toLowerCase().includes(A.toLowerCase());return z==="all"?de:z==="played"?de&&Oe(je.id):z==="notPlayed"?de&&!Oe(je.id):de}).sort((je,de)=>{const Ce=I==="titre"?je.titre.toLowerCase():je.artiste.toLowerCase(),De=I==="titre"?de.titre.toLowerCase():de.artiste.toLowerCase();return b==="asc"?Ce.localeCompare(De):De.localeCompare(Ce)}),[s,I,b,A,z,h]),Rn=v.useMemo(()=>{var G;return{total:s.length,played:h.length,remaining:s.length-h.length,playedInCurrentRound:((G=d[r])==null?void 0:G.length)||0}},[s,h,d,r]),ut=v.useMemo(()=>Object.entries(d).map(([G,je])=>({round:Number.parseInt(G),count:je.length})),[d]);return v.useEffect(()=>{if(y.current){const G=y.current,je=()=>Ke(),de=()=>$e(),Ce=()=>ie(!0);return G.addEventListener("timeupdate",je),G.addEventListener("ended",de),G.addEventListener("loadedmetadata",Ce),()=>{G.removeEventListener("timeupdate",je),G.removeEventListener("ended",de),G.removeEventListener("loadedmetadata",Ce)}}},[ce,ae]),v.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]),i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"liste-chansons-button",onClick:N,children:[i.jsx(tv,{size:20}),i.jsx("span",{children:"Liste des Chansons"})]}),i.jsx("audio",{ref:y,onEnded:()=>{W(null),he&&$e()},onError:()=>W(null)}),he&&V&&i.jsxs("div",{className:"floating-audio-player",children:[i.jsx("div",{className:"player-song-info",children:ae.length>0&&ce<ae.length&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"player-song-title",children:ae[ce].titre}),i.jsx("div",{className:"player-song-artist",children:ae[ce].artiste})]})}),i.jsxs("div",{className:"player-progress-container",children:[i.jsx("span",{className:"player-time",children:gt((($n=y.current)==null?void 0:$n.currentTime)||0)}),i.jsx("div",{className:"player-progress-bar",ref:X,onClick:Fn,children:i.jsx("div",{className:"player-progress-fill",style:{width:`${be}%`}})}),i.jsx("span",{className:"player-time",children:gt(ln||0)})]}),i.jsxs("div",{className:"player-controls",children:[i.jsx("button",{className:`player-shuffle-button ${L?"active":""}`,onClick:en,"aria-label":L?"Désactiver la lecture aléatoire":"Activer la lecture aléatoire",children:i.jsx(Di,{size:16})}),i.jsx("button",{className:"player-prev-button",onClick:Sn,"aria-label":"Chanson précédente",children:i.jsx(fr,{size:16})}),i.jsx("button",{className:"player-play-button",onClick:()=>{y.current&&(y.current.paused?y.current.play():y.current.pause())},"aria-label":(Na=y.current)!=null&&Na.paused?"Lecture":"Pause",children:(wn=y.current)!=null&&wn.paused?i.jsx(bl,{size:20}):i.jsx(vl,{size:20})}),i.jsx("button",{className:"player-next-button",onClick:$e,"aria-label":"Chanson suivante",children:i.jsx(mr,{size:16})}),i.jsx("button",{className:"player-close-button",onClick:()=>{y.current&&y.current.pause(),Q(!1),W(null)},"aria-label":"Fermer le lecteur",children:i.jsx(Ca,{size:16})})]})]}),m&&i.jsx("div",{className:"liste-chansons-overlay",onClick:$,children:i.jsxs("div",{className:"liste-chansons-modal",onClick:G=>G.stopPropagation(),children:[i.jsx("button",{className:"liste-chansons-close",onClick:$,children:i.jsx(Ca,{size:24})}),i.jsxs("div",{className:"liste-chansons-header",children:[i.jsx("h2",{children:"Liste des Chansons"}),i.jsx("p",{children:"Toutes les chansons disponibles dans le jeu"})]}),i.jsxs("div",{className:"liste-chansons-tabs",children:[i.jsxs("button",{className:`liste-chansons-tab ${_==="all"?"active":""}`,onClick:()=>D("all"),children:[i.jsx(yo,{size:16}),i.jsx("span",{children:"Chansons"})]}),i.jsxs("button",{className:`liste-chansons-tab ${_==="stats"?"active":""}`,onClick:()=>D("stats"),children:[i.jsx(Dm,{size:16}),i.jsx("span",{children:"Statistiques"})]})]}),_==="stats"&&i.jsxs("div",{className:"stats-tab-content",children:[i.jsxs("div",{className:"liste-chansons-stats",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-value",children:Rn.total}),i.jsx("span",{className:"stat-label",children:"Total"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-value",children:Rn.played}),i.jsx("span",{className:"stat-label",children:"Jouées"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-value",children:Rn.remaining}),i.jsx("span",{className:"stat-label",children:"Restantes"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-value",children:Rn.playedInCurrentRound}),i.jsxs("span",{className:"stat-label",children:["Manche ",r]})]})]}),i.jsxs("div",{className:"round-stats",children:[i.jsx("h3",{children:"Chansons jouées par manche"}),i.jsx("div",{className:"round-stats-grid",children:ut.map(G=>i.jsxs("div",{className:"round-stat-item",children:[i.jsx("div",{className:`round-badge round-${G.round}`,children:G.round}),i.jsx("span",{className:"round-stat-count",children:G.count}),i.jsx("span",{className:"round-stat-label",children:"chansons"})]},G.round))})]})]}),_==="all"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"liste-chansons-controls-container",children:[i.jsxs("button",{className:"controls-toggle-button",onClick:Bt,"aria-expanded":ee,"aria-label":"Afficher les filtres et options",children:[i.jsx(mm,{size:18}),i.jsx("span",{children:"Filtres et options"}),ee?i.jsx(hr,{size:16}):i.jsx(dr,{size:16})]}),i.jsxs("div",{className:`liste-chansons-controls ${ee?"expanded":""}`,children:[i.jsxs("div",{className:"search-container",children:[i.jsx(pv,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Rechercher une chanson ou un artiste...",value:A,onChange:G=>U(G.target.value),className:"search-input"}),A&&i.jsx("button",{className:"clear-search",onClick:()=>U(""),"aria-label":"Effacer la recherche",children:i.jsx(Ca,{size:16})})]}),i.jsxs("div",{className:"filter-container",children:[i.jsx(mm,{size:18,className:"filter-icon"}),i.jsxs("select",{value:z,onChange:G=>Y(G.target.value),className:"filter-select",children:[i.jsx("option",{value:"all",children:"Toutes les chansons"}),i.jsx("option",{value:"played",children:"Déjà jouées"}),i.jsx("option",{value:"notPlayed",children:"Non jouées"})]})]}),i.jsxs("div",{className:"view-toggle",children:[i.jsx("button",{className:`view-button ${O==="table"?"active":""}`,onClick:()=>K("table"),"aria-label":"Vue tableau",children:i.jsx(qv,{size:18})}),i.jsx("button",{className:`view-button ${O==="grid"?"active":""}`,onClick:()=>K("grid"),"aria-label":"Vue grille",children:i.jsx(Zg,{size:18})})]})]})]}),O==="table"&&i.jsx("div",{className:"liste-chansons-table-container",children:i.jsxs("table",{className:"liste-chansons-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{className:"status-column",children:"Statut"}),i.jsxs("th",{className:`sortable ${I==="titre"?"active":""}`,onClick:()=>ne("titre"),children:["Titre",I==="titre"&&i.jsx(im,{size:16,className:`sort-icon ${b==="desc"?"desc":""}`})]}),i.jsxs("th",{className:`sortable ${I==="artiste"?"active":""}`,onClick:()=>ne("artiste"),children:["Artiste",I==="artiste"&&i.jsx(im,{size:16,className:`sort-icon ${b==="desc"?"desc":""}`})]}),i.jsx("th",{className:"round-column",children:"Manche"}),i.jsx("th",{className:"action-column",children:"Écouter"})]})}),i.jsx("tbody",{children:sn.length>0?sn.map(G=>{const je=Oe(G.id),de=se(G.id),Ce=V===G.id;let De=null;for(const[nn,rt]of Object.entries(d))if(rt.includes(G.id)){De=nn;break}return i.jsxs("tr",{className:`
                                ${je?"played":""} 
                                ${de?"played-current-round":""}
                                ${Ce?"playing":""}
                              `,children:[i.jsx("td",{className:"status-cell",children:je?i.jsx(rm,{size:18,className:"played-icon"}):i.jsx(yo,{size:18,className:"not-played-icon"})}),i.jsx("td",{children:G.titre}),i.jsx("td",{children:G.artiste}),i.jsx("td",{className:"round-cell",children:De?i.jsx("span",{className:`round-badge round-${De}`,children:De}):"-"}),i.jsx("td",{className:"action-cell",children:i.jsxs("div",{className:"play-button-container",children:[i.jsx("button",{className:"play-button",onClick:()=>Ln(G),"aria-label":Ce?"Pause":"Écouter",children:Ce?i.jsx(vl,{size:18}):i.jsx(fm,{size:18})}),i.jsxs("div",{className:"play-options",children:[i.jsx("button",{className:"play-option-button",onClick:nn=>{nn.stopPropagation(),ge(G.id,!1)},title:"Lire dans l'ordre",children:i.jsx(bl,{size:14})}),i.jsx("button",{className:"play-option-button",onClick:nn=>{nn.stopPropagation(),ge(G.id,!0)},title:"Lecture aléatoire",children:i.jsx(Di,{size:14})})]})]})})]},G.id)}):i.jsx("tr",{className:"no-results",children:i.jsx("td",{colSpan:5,children:i.jsxs("div",{className:"no-results-message",children:[i.jsx(um,{size:32}),i.jsx("p",{children:"Aucune chanson ne correspond à votre recherche"})]})})})})]})}),O==="grid"&&i.jsx("div",{className:"liste-chansons-grid-container",children:sn.length>0?i.jsx("div",{className:"liste-chansons-grid",children:sn.map(G=>{const je=Oe(G.id),de=se(G.id),Ce=V===G.id;let De=null;for(const[nn,rt]of Object.entries(d))if(rt.includes(G.id)){De=nn;break}return i.jsxs("div",{className:`
                              song-card
                              ${je?"played":""} 
                              ${de?"played-current-round":""}
                              ${Ce?"playing":""}
                            `,children:[i.jsxs("div",{className:"song-card-header",children:[je?i.jsx(rm,{size:18,className:"played-icon"}):i.jsx(yo,{size:18,className:"not-played-icon"}),De&&i.jsx("span",{className:`round-badge round-${De}`,children:De})]}),i.jsxs("div",{className:"song-card-content",children:[i.jsx("h3",{className:"song-title",children:G.titre}),i.jsx("p",{className:"song-artist",children:G.artiste})]}),i.jsxs("div",{className:"song-play-controls",children:[i.jsx("button",{className:"song-play-button",onClick:()=>Ln(G),"aria-label":Ce?"Pause":"Écouter",children:Ce?i.jsx(vl,{size:20}):i.jsx(fm,{size:20})}),i.jsxs("div",{className:"song-play-options",children:[i.jsx("button",{className:"song-play-option",onClick:nn=>{nn.stopPropagation(),ge(G.id,!1)},title:"Lire dans l'ordre",children:i.jsx(bl,{size:16})}),i.jsx("button",{className:"song-play-option",onClick:nn=>{nn.stopPropagation(),ge(G.id,!0)},title:"Lecture aléatoire",children:i.jsx(Di,{size:16})})]})]})]},G.id)})}):i.jsxs("div",{className:"no-results-grid",children:[i.jsx(um,{size:40}),i.jsx("p",{children:"Aucune chanson ne correspond à votre recherche"})]})})]}),i.jsxs("div",{className:"liste-chansons-footer",children:[i.jsxs("p",{children:[sn.length," chanson",sn.length!==1?"s":""," affichée",sn.length!==1?"s":""]}),i.jsx("button",{className:"liste-chansons-close-button",onClick:$,children:"Fermer"})]})]})})]})},ym=30,Vv=()=>{const[s,h]=v.useState(1),[d,r]=v.useState(null),[m,g]=v.useState(!1),[I,S]=v.useState(!1),[b,p]=v.useState(!1),[A,U]=v.useState(!1),[z,Y]=v.useState([]),[O,K]=v.useState({1:[],2:[],3:[]}),[_,D]=v.useState(!1),[V,W]=v.useState(null),[ae,Z]=v.useState(null),[ce,re]=v.useState(1),[he,Q]=v.useState(!1),[L,oe]=v.useState([]),[be,Ye]=v.useState(null),[ln,Ge]=v.useState(!1),[H,ie]=v.useState({distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03}),ee=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[qe,y]=v.useState({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()}),[T,X]=v.useState(!1),E=v.useRef(null),N=v.useRef(null),$=v.useRef(null),ne=v.useRef(null),Oe=v.useRef(null),se=v.useRef(null),ge=v.useRef(0),Me=pm.find(J=>J.id===s),$e=qe.tempsEcoule,Sn=qe.actif,Ke=qe.termine,Fn=()=>{const J=Oi.filter(me=>!z.includes(me.id)&&me.id!==be);if(J.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),Y([]),K({1:[],2:[],3:[]}),Ye(null);const me=Oi.filter(Ae=>Ae.id!==be),ke=Math.floor(Math.random()*me.length);return me[ke]}const P=Math.floor(Math.random()*J.length);return J[P]},gt=v.useCallback(()=>{if(O[s].length>=ym){g(!1),p(!1),S(!1),Q(!1),D(!1),W(null),Z(null),ge.current=0,de(),$n();const P=s<3?s+1:1;return h(P),!0}return!1},[s,O]),en=()=>{if(ne.current){try{ne.current.stop()}catch{}ne.current=null}},Ln=()=>{try{N.current||(N.current=new(window.AudioContext||window.webkitAudioContext));const J=s===2?V:ae;if(N.current&&J){console.log(`Démarrage de la lecture du buffer ${s===2?"inversé":"monstre"}`),en();const P=N.current.createBufferSource();if(P.buffer=J,s===3){let Ae=1;const{pitchShift:Ue}=H;Ue<.5?Ae=.4:Ue<1?Ae=.6:Ue>2?Ae=2.5:Ae=1.5,P.playbackRate.value=Ae}let me;if(s===3){const{distortion:Ae,pitchShift:Ue,wahFrequency:Ze,wahDepth:Bn,growlAmount:et}=H,nt=N.current.createGain();nt.gain.value=A?0:ce,Oe.current=nt;const Cn=N.current.createWaveShaper(),tt=nn(Ae);Cn.curve=tt,Cn.oversample="4x";const In=N.current.createBiquadFilter();In.type="bandpass",In.frequency.value=1e3,In.Q.value=2;const Pe=N.current.createOscillator();Pe.type="sine",Pe.frequency.value=Ze;const Qe=N.current.createGain();Qe.gain.value=Bn*500,Pe.connect(Qe),Qe.connect(In.frequency),Pe.start(),$.current={distortionNode:Cn,filterNode:In,oscillator:Pe,oscillatorGain:Qe,pitchShift:Ue,growlAmount:et},P.connect(In),In.connect(Cn),Cn.connect(nt),nt.connect(N.current.destination),me=nt}else{const Ae=N.current.createGain();Ae.gain.value=A?0:ce,Oe.current=Ae,P.connect(Ae),Ae.connect(N.current.destination),me=Ae}const ke=isFinite(ge.current)?ge.current:0;return ke>=J.duration?(ge.current=0,P.start(0,0)):P.start(0,ke),ne.current=P,ne.current.startTime=N.current.currentTime,ne.current.startOffset=ke,console.log(`Lecture ${s===2?"inversée":"monstre"} démarrée avec succès à la position ${ke}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(J){return console.error("Erreur lors de la lecture audio modifiée:",J),!1}},Bt=v.useCallback(()=>{if(console.log("togglePlay appelé, manche:",s),s===2||s===3)if(console.log(`Manche ${s} - utilisation du mode audio modifié`),m){if(console.log("Arrêt de la lecture modifiée"),ne.current&&N.current)try{if(ne.current.startTime!==void 0&&ne.current.startOffset!==void 0){const J=N.current.currentTime-ne.current.startTime,P=ne.current.startOffset+J;isFinite(P)&&P>=0&&(ge.current=P,console.log("Position audio sauvegardée:",ge.current))}}catch(J){console.error("Erreur lors du calcul de la position audio:",J)}en(),g(!1),Rn()}else if(console.log("Démarrage de la lecture modifiée"),!V&&s===2||!ae&&s===3||!he){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),Q(!0),!_&&d)(s===2?Ce:De)(d.audioUrl).then(P=>{P&&he&&Ln()&&(g(!0),!Sn&&!Ke?sn():Ke||ut())});else if(s===2&&V||s===3&&ae){if(s===3&&d&&H){const P=Yi(ae,H);Z(P)}Ln()&&(g(!0),!Sn&&!Ke?sn():Ke||ut())}}else Ln()&&(g(!0),!Sn&&!Ke?sn():Ke||ut());else console.log("Manche standard - utilisation de l'audio normal"),m?(E.current.pause(),g(!1),Rn()):E.current.play().then(()=>{g(!0),!Sn&&!Ke?sn():Ke||ut()}).catch(J=>{console.error("Erreur lors de la lecture audio:",J)})},[m,s,V,ae,_,d,he,Sn,Ke,H]),sn=()=>{se.current&&clearInterval(se.current),y(J=>({...J,actif:!0,termine:!1,dernierTemps:Date.now()})),se.current=setInterval(()=>{y(J=>{const P=J.tempsEcoule+1;return P>=25?(clearInterval(se.current),se.current=null,m&&(s===2||s===3?en():E.current&&E.current.pause(),g(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:J.dernierTemps}):(P===20&&m&&(s===2||s===3?en():E.current&&E.current.pause(),g(!1)),{...J,tempsEcoule:P,dernierTemps:Date.now()})})},1e3)},Rn=()=>{se.current&&(clearInterval(se.current),se.current=null),y(J=>({...J,actif:!1,dernierTemps:Date.now()}))},ut=()=>{se.current&&clearInterval(se.current),y(J=>({...J,actif:!0,dernierTemps:Date.now()})),se.current=setInterval(()=>{y(J=>{const P=J.tempsEcoule+1;return P>=25?(clearInterval(se.current),se.current=null,m&&(s===2||s===3?en():E.current&&E.current.pause(),g(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:J.dernierTemps}):(P===20&&m&&(s===2||s===3?en():E.current&&E.current.pause(),g(!1)),{...J,tempsEcoule:P,dernierTemps:Date.now()})})},1e3)},$n=()=>{se.current&&(clearInterval(se.current),se.current=null),y({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()})},Na=()=>{s===2||s===3?ne.current&&N.current&&(en(),ge.current+=5,m&&Ln()):E.current&&(E.current.currentTime+=5)},wn=()=>{s===2||s===3?ne.current&&N.current&&(en(),ge.current=Math.max(0,ge.current-5),m&&Ln()):E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-5))},G=()=>{if(d&&(Ye(d.id),Y(P=>[...P,d.id]),K(P=>({...P,[s]:[...P[s],d.id]}))),(s===2||s===3)&&ne.current?en():E.current&&E.current.pause(),g(!1),p(!1),S(!1),D(!1),W(null),Z(null),Q(!1),$n(),ge.current=0,de(),!gt()){const P=Fn();r(P)}},je=()=>{(s===2||s===3)&&Oe.current?Oe.current.gain.value=A?ce:0:E.current&&(E.current.muted=!A),U(!A)},de=()=>{try{if(en(),$.current){if($.current.oscillator)try{$.current.oscillator.stop()}catch{}$.current.distortionNode&&$.current.distortionNode.disconnect(),$.current.filterNode&&$.current.filterNode.disconnect(),$.current.oscillatorGain&&$.current.oscillatorGain.disconnect(),$.current=null}Oe.current&&(Oe.current.disconnect(),Oe.current=null),N.current&&N.current.state}catch(J){console.error("Erreur lors du nettoyage des connexions audio:",J)}},Ce=async J=>{try{console.log("Préparation de l'audio inversé pour:",J),de(),N.current=new(window.AudioContext||window.webkitAudioContext);const P=await fetch(J);if(!P.ok)throw new Error(`Erreur lors du chargement de l'audio: ${P.status}`);const me=await P.arrayBuffer();if(!me||me.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",me.byteLength);const ke=await N.current.decodeAudioData(me);console.log("Audio décodé, durée:",ke.duration,"secondes");const Ae=N.current.createBuffer(ke.numberOfChannels,ke.length,ke.sampleRate);for(let Ue=0;Ue<ke.numberOfChannels;Ue++){const Ze=ke.getChannelData(Ue),Bn=Ae.getChannelData(Ue);for(let et=0;et<Ze.length;et++)Bn[et]=Ze[Ze.length-1-et]}return console.log("Buffer inversé créé avec succès"),W(Ae),D(!0),!0}catch(P){return console.error("Erreur lors de la préparation de l'audio inversé:",P),!1}},De=async J=>{try{console.log("Préparation de l'audio monstre pour:",J),N.current||(N.current=new(window.AudioContext||window.webkitAudioContext));const P=await fetch(J);if(!P.ok)throw new Error(`Erreur lors du chargement de l'audio: ${P.status}`);const me=await P.arrayBuffer();if(!me||me.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",me.byteLength);const ke=await N.current.decodeAudioData(me);return console.log("Audio décodé, durée:",ke.duration,"secondes"),Z(ke),D(!0),!0}catch(P){return console.error("Erreur lors de la préparation de l'audio monstre:",P),!1}},nn=J=>{const me=new Float32Array(44100),ke=Math.PI/180;for(let Ae=0;Ae<44100;++Ae){const Ue=Ae*2/44100-1;me[Ae]=(3+J/1e3)*Ue*20*ke/(Math.PI+J/1e3*Math.abs(Ue))}return me},rt=J=>{if(ie(J),s===3&&N.current&&$.current){const{distortion:P,pitchShift:me,wahFrequency:ke,wahDepth:Ae,growlAmount:Ue}=J;if($.current.distortionNode&&($.current.distortionNode.curve=nn(P)),$.current.oscillator&&($.current.oscillator.frequency.value=ke),$.current.oscillatorGain&&($.current.oscillatorGain.gain.value=Ae*500),$.current.pitchShift=me,ne.current){let Ze;me<.5?Ze=.4:me<1?Ze=.6:me>2?Ze=2.5:Ze=1.5;try{ne.current.playbackRate.value=Ze}catch(Bn){console.error("Erreur lors de l'ajustement du playbackRate:",Bn)}}$.current.growlAmount=Ue,console.log("Paramètres d'effets mis à jour en temps réel")}},Yi=(J,P)=>{const{distortion:me,pitchShift:ke,wahFrequency:Ae,wahDepth:Ue,growlAmount:Ze}=P,et=N.current.createBuffer(J.numberOfChannels,J.length,J.sampleRate),nt=new Float32Array(J.length);for(let Cn=0;Cn<J.numberOfChannels;Cn++){const tt=J.getChannelData(Cn),In=et.getChannelData(Cn);for(let Pe=0;Pe<tt.length;Pe++){const Qe=Math.sin(Pe/J.sampleRate*Ae*Math.PI*2)*Ue*.5;tt[Pe]*(1+Qe);let Un;ke<.5?Un=2.5:ke<1?Un=1.8:ke>2?Un=.4:Un=.6;const ua=Math.floor(Pe/(ke*Un));ua<tt.length&&(nt[Pe]=tt[ua])}for(let Pe=0;Pe<tt.length;Pe++){let Qe=nt[Pe]||0;if(Qe=Math.tanh(Qe*(me/2e3))*.9,Math.random()<Ze*.7){const Un=Ze*1.5;Qe+=(Math.random()*.4-.2)*Math.sin(Pe/J.sampleRate*40*Math.PI*2)*Un,Math.random()<Ze*.4&&(Qe*=1+Math.random()*.3),Math.random()<Ze*.1&&(Qe=0)}if(me>2e4){const Un=(me-2e4)/4e4;if(Qe+=Qe*Math.sin(Pe/J.sampleRate*80*Math.PI*2)*Un,me>6e4){const ua=Math.max(4,Math.floor(16-(me-6e4)/15e3)),vo=2/Math.pow(2,ua);Qe=Math.round(Qe/vo)*vo}}Qe=Math.max(-.95,Math.min(.95,Qe)),In[Pe]=Qe}}return et},sa=()=>{Ge(!ln)};v.useEffect(()=>()=>{de(),se.current&&clearInterval(se.current)},[]),v.useEffect(()=>{if(!d){const J=Fn();r(J)}},[d]),v.useEffect(()=>{d&&(console.log("Changement de chanson détecté, manche:",s),E.current&&E.current.pause(),en(),g(!1),D(!1),W(null),Z(null),Q(!1),$n(),ge.current=0,de(),s===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),Ce(d.audioUrl)):s===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),De(d.audioUrl)):(console.log("Manche standard - chargement audio normal"),E.current&&(E.current.src=d.audioUrl,E.current.load(),D(!0))))},[d,s]),v.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",s),D(!1),W(null),Z(null),Q(!1),ge.current=0,de(),$n();const J=Fn();r(J)},[s]);const jn=J=>{h(J),g(!1),p(!1),S(!1),Q(!1),D(!1),W(null),Z(null),ge.current=0,de(),$n();const P=Fn();r(P)},_i=J=>{if(console.log("Fonction ajouterEquipe appelée avec:",J),typeof J=="string"){const P={id:Date.now().toString(),name:J,score:0,color:ee[L.length%ee.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",P),oe(me=>[...me,P])}else J&&typeof J=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",J),oe(P=>[...P,J])):console.error("Format d'équipe invalide:",J);console.log("Équipes après ajout:",L)},ct=J=>{const P=L.filter(me=>me.id!==J);oe(P)},kn=(J,P)=>{const me=L.findIndex(ke=>ke.id===J);if(me>=0){const ke=[...L];ke[me]={...ke[me],score:ke[me].score+P},oe(ke)}else console.error("Équipe non trouvée avec l'ID:",J)};return i.jsxs("main",{className:"jeu",children:[i.jsx("audio",{ref:E}),i.jsxs("header",{className:"jeu-header",children:[i.jsx(Ui,{to:"/",className:"accueil-link",children:i.jsx($g,{size:24})}),i.jsx("h1",{children:"BlindTest Master"}),i.jsx(yo,{className:"logo",size:32})]}),i.jsx(Hv,{teams:L,onAddTeam:_i,onRemoveTeam:ct,onAddPoints:kn}),i.jsx(Qv,{}),i.jsx(Wv,{chansons:Oi,chansonsJouees:z,chansonsJoueesParManche:O,mancheActuelle:s}),i.jsx(_v,{manche:Me}),s===3&&i.jsxs("div",{className:"effets-info",children:[i.jsxs("span",{className:"effet-badge",children:["Distorsion: ",H.distortion]}),i.jsxs("span",{className:"effet-badge",children:["Hauteur: ",H.pitchShift.toFixed(2)]}),i.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",H.wahFrequency.toFixed(1),"Hz"]}),i.jsxs("span",{className:"effet-badge",children:["Grognement: ",(H.growlAmount*100).toFixed(0),"%"]})]}),i.jsx("section",{className:"jeu-content",children:d?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"chrono-container",children:[i.jsxs("div",{className:`chrono ${$e>20?"time-critical":$e>15?"time-warning":""}`,children:[i.jsxs("span",{children:[$e," / 25 secondes"]}),i.jsx("div",{className:"chrono-progress",style:{width:`${$e/25*100}%`}})]}),i.jsxs("div",{className:"chrono-controls",children:[Sn?i.jsxs("button",{className:"chrono-button stop",onClick:Rn,children:[i.jsx(Sv,{size:20}),i.jsx("span",{children:"Arrêter Chrono"})]}):i.jsxs("button",{className:"chrono-button start",onClick:sn,disabled:Ke,children:[i.jsx(Cv,{size:20}),i.jsx("span",{children:"Démarrer Chrono"})]}),i.jsxs("button",{className:"chrono-button reset",onClick:$n,children:[i.jsx(Tv,{size:20}),i.jsx("span",{children:"Réinitialiser"})]})]})]}),i.jsxs("div",{className:"player-controls-container",children:[i.jsxs("div",{className:"player-controls",children:[i.jsx("button",{className:"control-button rewind",onClick:wn,"aria-label":"Reculer",children:i.jsx(fr,{size:24})}),i.jsx("button",{className:"control-button play-pause",onClick:Bt,"aria-label":m?"Pause":"Lecture",children:m?i.jsx(vl,{size:32}):i.jsx(bl,{size:32})}),i.jsx("button",{className:"control-button forward",onClick:Na,"aria-label":"Avancer",children:i.jsx(mr,{size:24})}),i.jsx("button",{className:"control-button next",onClick:G,"aria-label":"Chanson suivante",children:i.jsx(vv,{size:32})}),i.jsx("button",{className:"control-button mute",onClick:je,"aria-label":A?"Activer le son":"Couper le son",children:A?i.jsx(Lm,{size:24}):i.jsx(pr,{size:24})})]}),s===3&&i.jsx(Gv,{onEffectsChange:rt,isExpanded:ln,toggleExpanded:sa,currentEffects:H,isPlaying:m,mancheActuelle:s})]}),i.jsxs("div",{className:"guess-mode",children:[i.jsx(i.Fragment,{children:i.jsx(Jv,{chanson:d,afficherTitre:!0,afficherArtiste:!0,afficherParoles:I,mancheActuelle:s,isModifiedAudio:s===2||s===3,isOpen:T,onClose:()=>{X(!1),p(!1)},onVerify:()=>{console.log("Chanson vérifiée:",d==null?void 0:d.titre)}})}),i.jsx("div",{className:"action-buttons",children:i.jsx("button",{className:"answer-toggle",onClick:()=>{b?(p(!1),X(!1)):(p(!0),X(!0))},children:b?"Masquer la réponse":"Révéler la réponse"})})]})]}):i.jsxs("div",{className:"no-songs-message",children:[i.jsx("p",{children:"Aucune chanson disponible."}),i.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),i.jsxs("footer",{className:"jeu-footer",children:[i.jsx("div",{className:"round-navigation",children:pm.map(J=>i.jsxs("button",{className:`round-button ${s===J.id?"active":""}`,onClick:()=>jn(J.id),children:[i.jsx("span",{className:"round-number",children:J.id}),i.jsx("span",{className:"round-emoji",children:J.emoji})]},J.id))}),i.jsxs("div",{className:"songs-played-info",children:[i.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",O[s].length," /"," ",ym]}),i.jsxs("p",{children:["Total des chansons jouées: ",z.length," /"," ",Oi.length]})]})]})]})},Xv=()=>{const s=new Date().getFullYear();return i.jsxs("footer",{className:"footer",children:[i.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"}),i.jsxs("p",{className:"footer-text",children:["© ",s," - Tous droits réservés"]})]})};function Kv(){return i.jsxs(bg,{children:[i.jsxs(Zy,{children:[i.jsx(ar,{path:"/",element:i.jsx(Yv,{})}),i.jsx(ar,{path:"/jeu",element:i.jsx(Vv,{})})]}),i.jsx(Xv,{})]})}ly.createRoot(document.getElementById("root")).render(i.jsx(Pp.StrictMode,{children:i.jsx(Kv,{})}));
