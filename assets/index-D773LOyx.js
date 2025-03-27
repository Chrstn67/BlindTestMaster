(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const T of p.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&r(T)}).observe(document,{childList:!0,subtree:!0});function c(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(h){if(h.ep)return;h.ep=!0;const p=c(h);fetch(h.href,p)}})();function ah(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Us={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Dy(){if(Rd)return nu;Rd=1;var i=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function c(r,h,p){var T=null;if(p!==void 0&&(T=""+p),h.key!==void 0&&(T=""+h.key),"key"in h){p={};for(var x in h)x!=="key"&&(p[x]=h[x])}else p=h;return h=p.ref,{$$typeof:i,type:r,key:T,ref:h!==void 0?h:null,props:p}}return nu.Fragment=f,nu.jsx=c,nu.jsxs=c,nu}var kd;function Ry(){return kd||(kd=1,Us.exports=Dy()),Us.exports}var d=Ry(),Bs={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function ky(){if(_d)return re;_d=1;var i=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),T=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),_=Symbol.iterator;function N(v){return v===null||typeof v!="object"?null:(v=_&&v[_]||v["@@iterator"],typeof v=="function"?v:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,X={};function G(v,z,I){this.props=v,this.context=z,this.refs=X,this.updater=I||B}G.prototype.isReactComponent={},G.prototype.setState=function(v,z){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,z,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=G.prototype;function J(v,z,I){this.props=v,this.context=z,this.refs=X,this.updater=I||B}var Z=J.prototype=new U;Z.constructor=J,D(Z,G.prototype),Z.isPureReactComponent=!0;var ce=Array.isArray,P={H:null,A:null,T:null,S:null},Se=Object.prototype.hasOwnProperty;function De(v,z,I,V,L,se){return I=se.ref,{$$typeof:i,type:v,key:z,ref:I!==void 0?I:null,props:se}}function Te(v,z){return De(v.type,z,void 0,void 0,void 0,v.props)}function R(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function K(v){var z={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(I){return z[I]})}var Q=/\/+/g;function ue(v,z){return typeof v=="object"&&v!==null&&v.key!=null?K(""+v.key):z.toString(36)}function We(){}function qn(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(We,We):(v.status="pending",v.then(function(z){v.status==="pending"&&(v.status="fulfilled",v.value=z)},function(z){v.status==="pending"&&(v.status="rejected",v.reason=z)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function sn(v,z,I,V,L){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var te=!1;if(v===null)te=!0;else switch(se){case"bigint":case"string":case"number":te=!0;break;case"object":switch(v.$$typeof){case i:case f:te=!0;break;case M:return te=v._init,sn(te(v._payload),z,I,V,L)}}if(te)return L=L(v),te=V===""?"."+ue(v,0):V,ce(L)?(I="",te!=null&&(I=te.replace(Q,"$&/")+"/"),sn(L,z,I,"",function(Ne){return Ne})):L!=null&&(R(L)&&(L=Te(L,I+(L.key==null||v&&v.key===L.key?"":(""+L.key).replace(Q,"$&/")+"/")+te)),z.push(L)),1;te=0;var Me=V===""?".":V+":";if(ce(v))for(var ge=0;ge<v.length;ge++)V=v[ge],se=Me+ue(V,ge),te+=sn(V,z,I,se,L);else if(ge=N(v),typeof ge=="function")for(v=ge.call(v),ge=0;!(V=v.next()).done;)V=V.value,se=Me+ue(V,ge++),te+=sn(V,z,I,se,L);else if(se==="object"){if(typeof v.then=="function")return sn(qn(v),z,I,V,L);throw z=String(v),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return te}function H(v,z,I){if(v==null)return v;var V=[],L=0;return sn(v,V,"","",function(se){return z.call(I,se,L++)}),V}function ie(v){if(v._status===-1){var z=v._result;z=z(),z.then(function(I){(v._status===0||v._status===-1)&&(v._status=1,v._result=I)},function(I){(v._status===0||v._status===-1)&&(v._status=2,v._result=I)}),v._status===-1&&(v._status=0,v._result=z)}if(v._status===1)return v._result.default;throw v._result}var ae=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function Ee(){}return re.Children={map:H,forEach:function(v,z,I){H(v,function(){z.apply(this,arguments)},I)},count:function(v){var z=0;return H(v,function(){z++}),z},toArray:function(v){return H(v,function(z){return z})||[]},only:function(v){if(!R(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},re.Component=G,re.Fragment=c,re.Profiler=h,re.PureComponent=J,re.StrictMode=r,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.act=function(){throw Error("act(...) is not supported in production builds of React.")},re.cache=function(v){return function(){return v.apply(null,arguments)}},re.cloneElement=function(v,z,I){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var V=D({},v.props),L=v.key,se=void 0;if(z!=null)for(te in z.ref!==void 0&&(se=void 0),z.key!==void 0&&(L=""+z.key),z)!Se.call(z,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&z.ref===void 0||(V[te]=z[te]);var te=arguments.length-2;if(te===1)V.children=I;else if(1<te){for(var Me=Array(te),ge=0;ge<te;ge++)Me[ge]=arguments[ge+2];V.children=Me}return De(v.type,L,void 0,void 0,se,V)},re.createContext=function(v){return v={$$typeof:T,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},re.createElement=function(v,z,I){var V,L={},se=null;if(z!=null)for(V in z.key!==void 0&&(se=""+z.key),z)Se.call(z,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(L[V]=z[V]);var te=arguments.length-2;if(te===1)L.children=I;else if(1<te){for(var Me=Array(te),ge=0;ge<te;ge++)Me[ge]=arguments[ge+2];L.children=Me}if(v&&v.defaultProps)for(V in te=v.defaultProps,te)L[V]===void 0&&(L[V]=te[V]);return De(v,se,void 0,void 0,null,L)},re.createRef=function(){return{current:null}},re.forwardRef=function(v){return{$$typeof:x,render:v}},re.isValidElement=R,re.lazy=function(v){return{$$typeof:M,_payload:{_status:-1,_result:v},_init:ie}},re.memo=function(v,z){return{$$typeof:y,type:v,compare:z===void 0?null:z}},re.startTransition=function(v){var z=P.T,I={};P.T=I;try{var V=v(),L=P.S;L!==null&&L(I,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Ee,ae)}catch(se){ae(se)}finally{P.T=z}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(v){return P.H.use(v)},re.useActionState=function(v,z,I){return P.H.useActionState(v,z,I)},re.useCallback=function(v,z){return P.H.useCallback(v,z)},re.useContext=function(v){return P.H.useContext(v)},re.useDebugValue=function(){},re.useDeferredValue=function(v,z){return P.H.useDeferredValue(v,z)},re.useEffect=function(v,z){return P.H.useEffect(v,z)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(v,z,I){return P.H.useImperativeHandle(v,z,I)},re.useInsertionEffect=function(v,z){return P.H.useInsertionEffect(v,z)},re.useLayoutEffect=function(v,z){return P.H.useLayoutEffect(v,z)},re.useMemo=function(v,z){return P.H.useMemo(v,z)},re.useOptimistic=function(v,z){return P.H.useOptimistic(v,z)},re.useReducer=function(v,z,I){return P.H.useReducer(v,z,I)},re.useRef=function(v){return P.H.useRef(v)},re.useState=function(v){return P.H.useState(v)},re.useSyncExternalStore=function(v,z,I){return P.H.useSyncExternalStore(v,z,I)},re.useTransition=function(){return P.H.useTransition()},re.version="19.0.0",re}var Ud;function $s(){return Ud||(Ud=1,Bs.exports=ky()),Bs.exports}var E=$s();const _y=ah(E);var Hs={exports:{}},tu={},Ls={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Uy(){return Bd||(Bd=1,function(i){function f(H,ie){var ae=H.length;H.push(ie);e:for(;0<ae;){var Ee=ae-1>>>1,v=H[Ee];if(0<h(v,ie))H[Ee]=ie,H[ae]=v,ae=Ee;else break e}}function c(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],ae=H.pop();if(ae!==ie){H[0]=ae;e:for(var Ee=0,v=H.length,z=v>>>1;Ee<z;){var I=2*(Ee+1)-1,V=H[I],L=I+1,se=H[L];if(0>h(V,ae))L<v&&0>h(se,V)?(H[Ee]=se,H[L]=ae,Ee=L):(H[Ee]=V,H[I]=ae,Ee=I);else if(L<v&&0>h(se,ae))H[Ee]=se,H[L]=ae,Ee=L;else break e}}return ie}function h(H,ie){var ae=H.sortIndex-ie.sortIndex;return ae!==0?ae:H.id-ie.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var T=Date,x=T.now();i.unstable_now=function(){return T.now()-x}}var g=[],y=[],M=1,_=null,N=3,B=!1,D=!1,X=!1,G=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function Z(H){for(var ie=c(y);ie!==null;){if(ie.callback===null)r(y);else if(ie.startTime<=H)r(y),ie.sortIndex=ie.expirationTime,f(g,ie);else break;ie=c(y)}}function ce(H){if(X=!1,Z(H),!D)if(c(g)!==null)D=!0,qn();else{var ie=c(y);ie!==null&&sn(ce,ie.startTime-H)}}var P=!1,Se=-1,De=5,Te=-1;function R(){return!(i.unstable_now()-Te<De)}function K(){if(P){var H=i.unstable_now();Te=H;var ie=!0;try{e:{D=!1,X&&(X=!1,U(Se),Se=-1),B=!0;var ae=N;try{n:{for(Z(H),_=c(g);_!==null&&!(_.expirationTime>H&&R());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,N=_.priorityLevel;var v=Ee(_.expirationTime<=H);if(H=i.unstable_now(),typeof v=="function"){_.callback=v,Z(H),ie=!0;break n}_===c(g)&&r(g),Z(H)}else r(g);_=c(g)}if(_!==null)ie=!0;else{var z=c(y);z!==null&&sn(ce,z.startTime-H),ie=!1}}break e}finally{_=null,N=ae,B=!1}ie=void 0}}finally{ie?Q():P=!1}}}var Q;if(typeof J=="function")Q=function(){J(K)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,We=ue.port2;ue.port1.onmessage=K,Q=function(){We.postMessage(null)}}else Q=function(){G(K,0)};function qn(){P||(P=!0,Q())}function sn(H,ie){Se=G(function(){H(i.unstable_now())},ie)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){D||B||(D=!0,qn())},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return c(g)},i.unstable_next=function(H){switch(N){case 1:case 2:case 3:var ie=3;break;default:ie=N}var ae=N;N=ie;try{return H()}finally{N=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=N;N=H;try{return ie()}finally{N=ae}},i.unstable_scheduleCallback=function(H,ie,ae){var Ee=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ee+ae:Ee):ae=Ee,H){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=ae+v,H={id:M++,callback:ie,priorityLevel:H,startTime:ae,expirationTime:v,sortIndex:-1},ae>Ee?(H.sortIndex=ae,f(y,H),c(g)===null&&H===c(y)&&(X?(U(Se),Se=-1):X=!0,sn(ce,ae-Ee))):(H.sortIndex=v,f(g,H),D||B||(D=!0,qn())),H},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(H){var ie=N;return function(){var ae=N;N=ie;try{return H.apply(this,arguments)}finally{N=ae}}}}(Ys)),Ys}var Hd;function By(){return Hd||(Hd=1,Ls.exports=Uy()),Ls.exports}var Gs={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Hy(){if(Ld)return dn;Ld=1;var i=$s();function f(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)y+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(f(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(g,y,M){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:g,containerInfo:y,implementation:M}}var T=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,dn.createPortal=function(g,y){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return p(g,y,null,M)},dn.flushSync=function(g){var y=T.T,M=r.p;try{if(T.T=null,r.p=2,g)return g()}finally{T.T=y,r.p=M,r.d.f()}},dn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(g,y))},dn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},dn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var M=y.as,_=x(M,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;M==="style"?r.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:_,integrity:N,fetchPriority:B}):M==="script"&&r.d.X(g,{crossOrigin:_,integrity:N,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},dn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var M=x(y.as,y.crossOrigin);r.d.M(g,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(g)},dn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var M=y.as,_=x(M,y.crossOrigin);r.d.L(g,M,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},dn.preloadModule=function(g,y){if(typeof g=="string")if(y){var M=x(y.as,y.crossOrigin);r.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(g)},dn.requestFormReset=function(g){r.d.r(g)},dn.unstable_batchedUpdates=function(g,y){return g(y)},dn.useFormState=function(g,y,M){return T.H.useFormState(g,y,M)},dn.useFormStatus=function(){return T.H.useHostTransitionStatus()},dn.version="19.0.0",dn}var Yd;function Ly(){if(Yd)return Gs.exports;Yd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),Gs.exports=Hy(),Gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Yy(){if(Gd)return tu;Gd=1;var i=By(),f=$s(),c=Ly();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var p=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),B=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),ce=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case x:return"Portal";case M:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=Object.assign,Q,ue;function We(e){if(Q===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Q=n&&n[1]||"",ue=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Q+e+ue}var qn=!1;function sn(e,n){if(!e||qn)return"";qn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(q){var j=q}Reflect.construct(e,[],k)}else{try{k.call()}catch(q){j=q}e.call(k.prototype)}}else{try{throw Error()}catch(q){j=q}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),o=u[0],s=u[1];if(o&&s){var m=o.split(`
`),w=s.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===w.length)for(a=m.length-1,l=w.length-1;1<=a&&0<=l&&m[a]!==w[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==w[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==w[l]){var O=`
`+m[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=l);break}}}finally{qn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?We(t):""}function H(e){switch(e.tag){case 26:case 27:case 5:return We(e.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return e=sn(e.type,!1),e;case 11:return e=sn(e.type.render,!1),e;case 1:return e=sn(e.type,!0),e;default:return""}}function ie(e){try{var n="";do n+=H(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ae(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ee(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(ae(e)!==e)throw Error(r(188))}function z(e){var n=e.alternate;if(!n){if(n=ae(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return v(l),e;if(u===a)return v(l),n;u=u.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=u;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,a=u;break}if(s===a){o=!0,a=l,t=u;break}s=s.sibling}if(!o){for(s=u.child;s;){if(s===t){o=!0,t=u,a=l;break}if(s===a){o=!0,a=u,t=l;break}s=s.sibling}if(!o)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function I(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=I(e),n!==null)return n;e=e.sibling}return null}var V=Array.isArray,L=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},te=[],Me=-1;function ge(e){return{current:e}}function Ne(e){0>Me||(e.current=te[Me],te[Me]=null,Me--)}function we(e,n){Me++,te[Me]=e.current,e.current=n}var tn=ge(null),nt=ge(null),Vn=ge(null),vn=ge(null);function Jn(e,n){switch(we(Vn,n),we(nt,e),we(tn,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?rd(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=rd(e),n=cd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ne(tn),we(tn,n)}function At(){Ne(tn),Ne(nt),Ne(Vn)}function tt(e){e.memoizedState!==null&&we(vn,e);var n=tn.current,t=cd(n,e.type);n!==t&&(we(nt,e),we(tn,t))}function ga(e){nt.current===e&&(Ne(tn),Ne(nt)),vn.current===e&&(Ne(vn),Wl._currentValue=se)}var Tt=Object.prototype.hasOwnProperty,tl=i.unstable_scheduleCallback,al=i.unstable_cancelCallback,Mi=i.unstable_shouldYield,qi=i.unstable_requestPaint,rn=i.unstable_now,fu=i.unstable_getCurrentPriorityLevel,ll=i.unstable_ImmediatePriority,ul=i.unstable_UserBlockingPriority,va=i.unstable_NormalPriority,Oi=i.unstable_LowPriority,du=i.unstable_IdlePriority,zi=i.log,Ci=i.unstable_setDisableYieldValue,Vt=null,hn=null;function Y(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Vt,e,void 0,(e.current.flags&128)===128)}catch{}}function W(e){if(typeof zi=="function"&&Ci(e),hn&&typeof hn.setStrictMode=="function")try{hn.setStrictMode(Vt,e)}catch{}}var ee=Math.clz32?Math.clz32:Ve,ye=Math.log,Ae=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ye(e)/Ae|0)|0}var Ge=128,Yn=4194304;function an(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,u=e.pingedLanes,o=e.warmLanes;e=e.finishedLanes!==0;var s=t&134217727;return s!==0?(t=s&~l,t!==0?a=an(t):(u&=s,u!==0?a=an(u):e||(o=s&~o,o!==0&&(a=an(o))))):(s=t&~l,s!==0?a=an(s):u!==0?a=an(u):e||(o=t&~o,o!==0&&(a=an(o)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,o=n&-n,l>=o||l===32&&(o&4194176)!==0)?n:a}function $e(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function il(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(){var e=Ge;return Ge<<=1,(Ge&4194176)===0&&(Ge=128),e}function Be(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function Re(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function yn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ba(e,n,t,a,l,u){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,m=e.expirationTimes,w=e.hiddenUpdates;for(t=o&~t;0<t;){var O=31-ee(t),k=1<<O;s[O]=0,m[O]=-1;var j=w[O];if(j!==null)for(w[O]=null,O=0;O<j.length;O++){var q=j[O];q!==null&&(q.lane&=-536870913)}t&=~k}a!==0&&ol(e,a,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(o&~n))}function ol(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-ee(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function ar(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-ee(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ur(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function Ah(e,n){var t=L.p;try{return L.p=e,n()}finally{L.p=t}}var jt=Math.random().toString(36).slice(2),cn="__reactFiber$"+jt,bn="__reactProps$"+jt,wa="__reactContainer$"+jt,Ni="__reactEvents$"+jt,Th="__reactListeners$"+jt,jh="__reactHandles$"+jt,ir="__reactResources$"+jt,sl="__reactMarker$"+jt;function Di(e){delete e[cn],delete e[bn],delete e[Ni],delete e[Th],delete e[jh]}function Jt(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[wa]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hd(e);e!==null;){if(t=e[cn])return t;e=hd(e)}return n}e=t,t=e.parentNode}return null}function Sa(e){if(e=e[cn]||e[wa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function rl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ea(e){var n=e[ir];return n||(n=e[ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Fe(e){e[sl]=!0}var or=new Set,sr={};function Kt(e,n){Aa(e,n),Aa(e+"Capture",n)}function Aa(e,n){for(sr[e]=n,e=0;e<n.length;e++)or.add(n[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rr={},cr={};function Mh(e){return Tt.call(cr,e)?!0:Tt.call(rr,e)?!1:xh.test(e)?cr[e]=!0:(rr[e]=!0,!1)}function hu(e,n,t){if(Mh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function mu(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function lt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function On(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qh(e){var n=fr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,u=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,u.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yu(e){e._valueTracker||(e._valueTracker=qh(e))}function dr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=fr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function zn(e){return e.replace(Oh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ri(e,n,t,a,l,u,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+On(n)):e.value!==""+On(n)&&(e.value=""+On(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?ki(e,o,On(n)):t!=null?ki(e,o,On(t)):a!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+On(s):e.removeAttribute("name")}function hr(e,n,t,a,l,u,o,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||n!=null))return;t=t!=null?""+On(t):"",n=n!=null?""+On(n):t,s||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function ki(e,n,t){n==="number"&&pu(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ta(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+On(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function mr(e,n,t){if(n!=null&&(n=""+On(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+On(t):""}function yr(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(V(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=On(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function ja(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||zh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function gr(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&pr(e,l,a)}else for(var u in n)n.hasOwnProperty(u)&&pr(e,u,n[u])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gu(e){return Nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ui=null;function Bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,Ma=null;function vr(e){var n=Sa(e);if(n&&(e=n.stateNode)){var t=e[bn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ri(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[bn]||null;if(!l)throw Error(r(90));Ri(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&dr(a)}break e;case"textarea":mr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ta(e,!!t.multiple,n,!1)}}}var Hi=!1;function br(e,n,t){if(Hi)return e(n,t);Hi=!0;try{var a=e(n);return a}finally{if(Hi=!1,(xa!==null||Ma!==null)&&(ei(),xa&&(n=xa,e=Ma,Ma=xa=null,vr(n),e)))for(n=0;n<e.length;n++)vr(e[n])}}function cl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[bn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Li=!1;if(at)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){Li=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{Li=!1}var xt=null,Yi=null,vu=null;function wr(){if(vu)return vu;var e,n=Yi,t=n.length,a,l="value"in xt?xt.value:xt.textContent,u=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===l[u-a];a++);return vu=l.slice(e,1<a?1-a:void 0)}function bu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wu(){return!0}function Sr(){return!1}function wn(e){function n(t,a,l,u,o){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?wu:Sr,this.isPropagationStopped=Sr,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=wn(Wt),dl=K({},Wt,{view:0,detail:0}),Dh=wn(dl),Gi,Qi,hl,Eu=K({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(Gi=e.screenX-hl.screenX,Qi=e.screenY-hl.screenY):Qi=Gi=0,hl=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Qi}}),Er=wn(Eu),Rh=K({},Eu,{dataTransfer:0}),kh=wn(Rh),_h=K({},dl,{relatedTarget:0}),Ii=wn(_h),Uh=K({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=wn(Uh),Hh=K({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=wn(Hh),Yh=K({},Wt,{data:0}),Ar=wn(Yh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ih[e])?!!n[e]:!1}function Xi(){return Xh}var Zh=K({},dl,{key:function(e){if(e.key){var n=Gh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(e){return e.type==="keypress"?bu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=wn(Zh),Jh=K({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tr=wn(Jh),Kh=K({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),Wh=wn(Kh),$h=K({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=wn($h),Ph=K({},Eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=wn(Ph),nm=K({},Wt,{newState:0,oldState:0}),tm=wn(nm),am=[9,13,27,32],Zi=at&&"CompositionEvent"in window,ml=null;at&&"documentMode"in document&&(ml=document.documentMode);var lm=at&&"TextEvent"in window&&!ml,jr=at&&(!Zi||ml&&8<ml&&11>=ml),xr=" ",Mr=!1;function qr(e,n){switch(e){case"keyup":return am.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Or(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function um(e,n){switch(e){case"compositionend":return Or(n);case"keypress":return n.which!==32?null:(Mr=!0,xr);case"textInput":return e=n.data,e===xr&&Mr?null:e;default:return null}}function im(e,n){if(qa)return e==="compositionend"||!Zi&&qr(e,n)?(e=wr(),vu=Yi=xt=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jr&&n.locale!=="ko"?null:n.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!om[e.type]:n==="textarea"}function Cr(e,n,t,a){xa?Ma?Ma.push(a):Ma=[a]:xa=a,n=ui(n,"onChange"),0<n.length&&(t=new Su("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var yl=null,pl=null;function sm(e){ld(e,0)}function Au(e){var n=rl(e);if(dr(n))return e}function Nr(e,n){if(e==="change")return n}var Dr=!1;if(at){var Vi;if(at){var Ji="oninput"in document;if(!Ji){var Rr=document.createElement("div");Rr.setAttribute("oninput","return;"),Ji=typeof Rr.oninput=="function"}Vi=Ji}else Vi=!1;Dr=Vi&&(!document.documentMode||9<document.documentMode)}function kr(){yl&&(yl.detachEvent("onpropertychange",_r),pl=yl=null)}function _r(e){if(e.propertyName==="value"&&Au(pl)){var n=[];Cr(n,pl,e,Bi(e)),br(sm,n)}}function rm(e,n,t){e==="focusin"?(kr(),yl=n,pl=t,yl.attachEvent("onpropertychange",_r)):e==="focusout"&&kr()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Au(pl)}function fm(e,n){if(e==="click")return Au(n)}function dm(e,n){if(e==="input"||e==="change")return Au(n)}function hm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var An=typeof Object.is=="function"?Object.is:hm;function gl(e,n){if(An(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Tt.call(n,l)||!An(e[l],n[l]))return!1}return!0}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,n){var t=Ur(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ur(t)}}function Hr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pu(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=pu(e.document)}return n}function Ki(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mm(e,n){var t=Lr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hr(n.ownerDocument.documentElement,n)){if(a!==null&&Ki(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,u=Math.min(a.start,l);a=a.end===void 0?u:Math.min(a.end,l),!t.extend&&u>a&&(l=a,a=u,u=l),l=Br(n,u);var o=Br(n,a);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),u>a?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ym=at&&"documentMode"in document&&11>=document.documentMode,Oa=null,Wi=null,vl=null,$i=!1;function Yr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||Oa==null||Oa!==pu(a)||(a=Oa,"selectionStart"in a&&Ki(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vl&&gl(vl,a)||(vl=a,a=ui(Wi,"onSelect"),0<a.length&&(n=new Su("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Oa)))}function $t(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var za={animationend:$t("Animation","AnimationEnd"),animationiteration:$t("Animation","AnimationIteration"),animationstart:$t("Animation","AnimationStart"),transitionrun:$t("Transition","TransitionRun"),transitionstart:$t("Transition","TransitionStart"),transitioncancel:$t("Transition","TransitionCancel"),transitionend:$t("Transition","TransitionEnd")},Fi={},Gr={};at&&(Gr=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Ft(e){if(Fi[e])return Fi[e];if(!za[e])return e;var n=za[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gr)return Fi[e]=n[t];return e}var Qr=Ft("animationend"),Ir=Ft("animationiteration"),Xr=Ft("animationstart"),pm=Ft("transitionrun"),gm=Ft("transitionstart"),vm=Ft("transitioncancel"),Zr=Ft("transitionend"),Vr=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Gn(e,n){Vr.set(e,n),Kt(n,[e])}var Cn=[],Ca=0,Pi=0;function Tu(){for(var e=Ca,n=Pi=Ca=0;n<e;){var t=Cn[n];Cn[n++]=null;var a=Cn[n];Cn[n++]=null;var l=Cn[n];Cn[n++]=null;var u=Cn[n];if(Cn[n++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}u!==0&&Kr(t,l,u)}}function ju(e,n,t,a){Cn[Ca++]=e,Cn[Ca++]=n,Cn[Ca++]=t,Cn[Ca++]=a,Pi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function eo(e,n,t,a){return ju(e,n,t,a),xu(e)}function Mt(e,n){return ju(e,null,null,n),xu(e)}function Kr(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,u=e.return;u!==null;)u.childLanes|=t,a=u.alternate,a!==null&&(a.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;l&&n!==null&&e.tag===3&&(u=e.stateNode,l=31-ee(t),u=u.hiddenUpdates,e=u[l],e===null?u[l]=[n]:e.push(n),n.lane=t|536870912)}function xu(e){if(50<Ql)throw Ql=0,os=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Na={},Wr=new WeakMap;function Nn(e,n){if(typeof e=="object"&&e!==null){var t=Wr.get(e);return t!==void 0?t:(n={value:e,source:n,stack:ie(n)},Wr.set(e,n),n)}return{value:e,source:n,stack:ie(n)}}var Da=[],Ra=0,Mu=null,qu=0,Dn=[],Rn=0,Pt=null,ut=1,it="";function ea(e,n){Da[Ra++]=qu,Da[Ra++]=Mu,Mu=e,qu=n}function $r(e,n,t){Dn[Rn++]=ut,Dn[Rn++]=it,Dn[Rn++]=Pt,Pt=e;var a=ut;e=it;var l=32-ee(a)-1;a&=~(1<<l),t+=1;var u=32-ee(n)+l;if(30<u){var o=l-l%5;u=(a&(1<<o)-1).toString(32),a>>=o,l-=o,ut=1<<32-ee(n)+l|t<<l|a,it=u+e}else ut=1<<u|t<<l|a,it=e}function no(e){e.return!==null&&(ea(e,1),$r(e,1,0))}function to(e){for(;e===Mu;)Mu=Da[--Ra],Da[Ra]=null,qu=Da[--Ra],Da[Ra]=null;for(;e===Pt;)Pt=Dn[--Rn],Dn[Rn]=null,it=Dn[--Rn],Dn[Rn]=null,ut=Dn[--Rn],Dn[Rn]=null}var pn=null,ln=null,ve=!1,Qn=null,Kn=!1,ao=Error(r(519));function na(e){var n=Error(r(418,""));throw Sl(Nn(n,e)),ao}function Fr(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[cn]=e,n[bn]=a,t){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(t=0;t<Xl.length;t++)me(Xl[t],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),hr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),yu(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yr(n,a.value,a.defaultValue,a.children),yu(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||sd(n.textContent,t)?(a.popover!=null&&(me("beforetoggle",n),me("toggle",n)),a.onScroll!=null&&me("scroll",n),a.onScrollEnd!=null&&me("scrollend",n),a.onClick!=null&&(n.onclick=ii),n=!0):n=!1,n||na(e)}function Pr(e){for(pn=e.return;pn;)switch(pn.tag){case 3:case 27:Kn=!0;return;case 5:case 13:Kn=!1;return;default:pn=pn.return}}function bl(e){if(e!==pn)return!1;if(!ve)return Pr(e),ve=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ts(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&ln&&na(e),Pr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){ln=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}ln=null}}else ln=pn?Xn(e.stateNode.nextSibling):null;return!0}function wl(){ln=pn=null,ve=!1}function Sl(e){Qn===null?Qn=[e]:Qn.push(e)}var El=Error(r(460)),ec=Error(r(474)),lo={then:function(){}};function nc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ou(){}function tc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Ou,Ou),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e;default:if(typeof n.status=="string")n.then(Ou,Ou);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e}throw Al=n,El}}var Al=null;function ac(){if(Al===null)throw Error(r(459));var e=Al;return Al=null,e}var ka=null,Tl=0;function zu(e){var n=Tl;return Tl+=1,ka===null&&(ka=[]),tc(ka,e,n)}function jl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cu(e,n){throw n.$$typeof===p?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lc(e){var n=e._init;return n(e._payload)}function uc(e){function n(S,b){if(e){var A=S.deletions;A===null?(S.deletions=[b],S.flags|=16):A.push(b)}}function t(S,b){if(!e)return null;for(;b!==null;)n(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function l(S,b){return S=Ht(S,b),S.index=0,S.sibling=null,S}function u(S,b,A){return S.index=A,e?(A=S.alternate,A!==null?(A=A.index,A<b?(S.flags|=33554434,b):A):(S.flags|=33554434,b)):(S.flags|=1048576,b)}function o(S){return e&&S.alternate===null&&(S.flags|=33554434),S}function s(S,b,A,C){return b===null||b.tag!==6?(b=Po(A,S.mode,C),b.return=S,b):(b=l(b,A),b.return=S,b)}function m(S,b,A,C){var $=A.type;return $===g?O(S,b,A.props.children,C,A.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===J&&lc($)===b.type)?(b=l(b,A.props),jl(b,A),b.return=S,b):(b=Ku(A.type,A.key,A.props,null,S.mode,C),jl(b,A),b.return=S,b)}function w(S,b,A,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=es(A,S.mode,C),b.return=S,b):(b=l(b,A.children||[]),b.return=S,b)}function O(S,b,A,C,$){return b===null||b.tag!==7?(b=fa(A,S.mode,C,$),b.return=S,b):(b=l(b,A),b.return=S,b)}function k(S,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Po(""+b,S.mode,A),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case T:return A=Ku(b.type,b.key,b.props,null,S.mode,A),jl(A,b),A.return=S,A;case x:return b=es(b,S.mode,A),b.return=S,b;case J:var C=b._init;return b=C(b._payload),k(S,b,A)}if(V(b)||Se(b))return b=fa(b,S.mode,A,null),b.return=S,b;if(typeof b.then=="function")return k(S,zu(b),A);if(b.$$typeof===B)return k(S,Zu(S,b),A);Cu(S,b)}return null}function j(S,b,A,C){var $=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return $!==null?null:s(S,b,""+A,C);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return A.key===$?m(S,b,A,C):null;case x:return A.key===$?w(S,b,A,C):null;case J:return $=A._init,A=$(A._payload),j(S,b,A,C)}if(V(A)||Se(A))return $!==null?null:O(S,b,A,C,null);if(typeof A.then=="function")return j(S,b,zu(A),C);if(A.$$typeof===B)return j(S,b,Zu(S,A),C);Cu(S,A)}return null}function q(S,b,A,C,$){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(A)||null,s(b,S,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case T:return S=S.get(C.key===null?A:C.key)||null,m(b,S,C,$);case x:return S=S.get(C.key===null?A:C.key)||null,w(b,S,C,$);case J:var de=C._init;return C=de(C._payload),q(S,b,A,C,$)}if(V(C)||Se(C))return S=S.get(A)||null,O(b,S,C,$,null);if(typeof C.then=="function")return q(S,b,A,zu(C),$);if(C.$$typeof===B)return q(S,b,A,Zu(b,C),$);Cu(b,C)}return null}function F(S,b,A,C){for(var $=null,de=null,ne=b,le=b=0,nn=null;ne!==null&&le<A.length;le++){ne.index>le?(nn=ne,ne=null):nn=ne.sibling;var be=j(S,ne,A[le],C);if(be===null){ne===null&&(ne=nn);break}e&&ne&&be.alternate===null&&n(S,ne),b=u(be,b,le),de===null?$=be:de.sibling=be,de=be,ne=nn}if(le===A.length)return t(S,ne),ve&&ea(S,le),$;if(ne===null){for(;le<A.length;le++)ne=k(S,A[le],C),ne!==null&&(b=u(ne,b,le),de===null?$=ne:de.sibling=ne,de=ne);return ve&&ea(S,le),$}for(ne=a(ne);le<A.length;le++)nn=q(ne,S,le,A[le],C),nn!==null&&(e&&nn.alternate!==null&&ne.delete(nn.key===null?le:nn.key),b=u(nn,b,le),de===null?$=nn:de.sibling=nn,de=nn);return e&&ne.forEach(function(Zt){return n(S,Zt)}),ve&&ea(S,le),$}function oe(S,b,A,C){if(A==null)throw Error(r(151));for(var $=null,de=null,ne=b,le=b=0,nn=null,be=A.next();ne!==null&&!be.done;le++,be=A.next()){ne.index>le?(nn=ne,ne=null):nn=ne.sibling;var Zt=j(S,ne,be.value,C);if(Zt===null){ne===null&&(ne=nn);break}e&&ne&&Zt.alternate===null&&n(S,ne),b=u(Zt,b,le),de===null?$=Zt:de.sibling=Zt,de=Zt,ne=nn}if(be.done)return t(S,ne),ve&&ea(S,le),$;if(ne===null){for(;!be.done;le++,be=A.next())be=k(S,be.value,C),be!==null&&(b=u(be,b,le),de===null?$=be:de.sibling=be,de=be);return ve&&ea(S,le),$}for(ne=a(ne);!be.done;le++,be=A.next())be=q(ne,S,le,be.value,C),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?le:be.key),b=u(be,b,le),de===null?$=be:de.sibling=be,de=be);return e&&ne.forEach(function(Ny){return n(S,Ny)}),ve&&ea(S,le),$}function Ye(S,b,A,C){if(typeof A=="object"&&A!==null&&A.type===g&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case T:e:{for(var $=A.key;b!==null;){if(b.key===$){if($=A.type,$===g){if(b.tag===7){t(S,b.sibling),C=l(b,A.props.children),C.return=S,S=C;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===J&&lc($)===b.type){t(S,b.sibling),C=l(b,A.props),jl(C,A),C.return=S,S=C;break e}t(S,b);break}else n(S,b);b=b.sibling}A.type===g?(C=fa(A.props.children,S.mode,C,A.key),C.return=S,S=C):(C=Ku(A.type,A.key,A.props,null,S.mode,C),jl(C,A),C.return=S,S=C)}return o(S);case x:e:{for($=A.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){t(S,b.sibling),C=l(b,A.children||[]),C.return=S,S=C;break e}else{t(S,b);break}else n(S,b);b=b.sibling}C=es(A,S.mode,C),C.return=S,S=C}return o(S);case J:return $=A._init,A=$(A._payload),Ye(S,b,A,C)}if(V(A))return F(S,b,A,C);if(Se(A)){if($=Se(A),typeof $!="function")throw Error(r(150));return A=$.call(A),oe(S,b,A,C)}if(typeof A.then=="function")return Ye(S,b,zu(A),C);if(A.$$typeof===B)return Ye(S,b,Zu(S,A),C);Cu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(t(S,b.sibling),C=l(b,A),C.return=S,S=C):(t(S,b),C=Po(A,S.mode,C),C.return=S,S=C),o(S)):t(S,b)}return function(S,b,A,C){try{Tl=0;var $=Ye(S,b,A,C);return ka=null,$}catch(ne){if(ne===El)throw ne;var de=Bn(29,ne,null,S.mode);return de.lanes=C,de.return=S,de}finally{}}}var ta=uc(!0),ic=uc(!1),_a=ge(null),Nu=ge(0);function oc(e,n){e=gt,we(Nu,e),we(_a,n),gt=e|n.baseLanes}function uo(){we(Nu,gt),we(_a,_a.current)}function io(){gt=Nu.current,Ne(_a),Ne(Nu)}var kn=ge(null),Wn=null;function qt(e){var n=e.alternate;we(Je,Je.current&1),we(kn,e),Wn===null&&(n===null||_a.current!==null||n.memoizedState!==null)&&(Wn=e)}function sc(e){if(e.tag===22){if(we(Je,Je.current),we(kn,e),Wn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Wn=e)}}else Ot()}function Ot(){we(Je,Je.current),we(kn,kn.current)}function ot(e){Ne(kn),Wn===e&&(Wn=null),Ne(Je)}var Je=ge(0);function Du(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},wm=i.unstable_scheduleCallback,Sm=i.unstable_NormalPriority,Ke={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oo(){return{controller:new bm,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&wm(Sm,function(){e.controller.abort()})}var Ml=null,so=0,Ua=0,Ba=null;function Em(e,n){if(Ml===null){var t=Ml=[];so=0,Ua=ys(),Ba={status:"pending",value:void 0,then:function(a){t.push(a)}}}return so++,n.then(rc,rc),n}function rc(){if(--so===0&&Ml!==null){Ba!==null&&(Ba.status="fulfilled");var e=Ml;Ml=null,Ua=0,Ba=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Am(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var cc=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Em(e,n),cc!==null&&cc(e,n)};var aa=ge(null);function ro(){var e=aa.current;return e!==null?e:Oe.pooledCache}function Ru(e,n){n===null?we(aa,aa.current):we(aa,n.pool)}function fc(){var e=ro();return e===null?null:{parent:Ke._currentValue,pool:e}}var zt=0,fe=null,je=null,Ie=null,ku=!1,Ha=!1,la=!1,_u=0,ql=0,La=null,Tm=0;function Qe(){throw Error(r(321))}function co(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!An(e[t],n[t]))return!1;return!0}function fo(e,n,t,a,l,u){return zt=u,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?ua:Ct,la=!1,u=t(a,l),la=!1,Ha&&(u=hc(n,t,a,l)),dc(e),u}function dc(e){R.H=$n;var n=je!==null&&je.next!==null;if(zt=0,Ie=je=fe=null,ku=!1,ql=0,La=null,n)throw Error(r(300));e===null||Pe||(e=e.dependencies,e!==null&&Xu(e)&&(Pe=!0))}function hc(e,n,t,a){fe=e;var l=0;do{if(Ha&&(La=null),ql=0,Ha=!1,25<=l)throw Error(r(301));if(l+=1,Ie=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=ia,u=n(t,a)}while(Ha);return u}function jm(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?Ol(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(fe.flags|=1024),n}function ho(){var e=_u!==0;return _u=0,e}function mo(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function yo(e){if(ku){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ku=!1}zt=0,Ie=je=fe=null,Ha=!1,ql=_u=0,La=null}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?fe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Xe(){if(je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=Ie===null?fe.memoizedState:Ie.next;if(n!==null)Ie=n,je=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ie===null?fe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}var Uu;Uu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ol(e){var n=ql;return ql+=1,La===null&&(La=[]),e=tc(La,e,n),n=fe,(Ie===null?n.memoizedState:Ie.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?ua:Ct),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===B)return fn(e)}throw Error(r(438,String(e)))}function po(e){var n=null,t=fe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Uu(),fe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ce;return n.index++,t}function st(e,n){return typeof n=="function"?n(e):n}function Hu(e){var n=Xe();return go(n,je,e)}function go(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=e.baseQueue,u=a.pending;if(u!==null){if(l!==null){var o=l.next;l.next=u.next,u.next=o}n.baseQueue=l=u,a.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var s=o=null,m=null,w=n,O=!1;do{var k=w.lane&-536870913;if(k!==w.lane?(pe&k)===k:(zt&k)===k){var j=w.revertLane;if(j===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),k===Ua&&(O=!0);else if((zt&j)===j){w=w.next,j===Ua&&(O=!0);continue}else k={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(s=m=k,o=u):m=m.next=k,fe.lanes|=j,Lt|=j;k=w.action,la&&t(u,k),u=w.hasEagerState?w.eagerState:t(u,k)}else j={lane:k,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(s=m=j,o=u):m=m.next=j,fe.lanes|=k,Lt|=k;w=w.next}while(w!==null&&w!==n);if(m===null?o=u:m.next=s,!An(u,e.memoizedState)&&(Pe=!0,O&&(t=Ba,t!==null)))throw t;e.memoizedState=u,e.baseState=o,e.baseQueue=m,a.lastRenderedState=u}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vo(e){var n=Xe(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,u=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do u=e(u,o.action),o=o.next;while(o!==l);An(u,n.memoizedState)||(Pe=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,a]}function mc(e,n,t){var a=fe,l=Xe(),u=ve;if(u){if(t===void 0)throw Error(r(407));t=t()}else t=n();var o=!An((je||l).memoizedState,t);if(o&&(l.memoizedState=t,Pe=!0),l=l.queue,So(gc.bind(null,a,l,e),[e]),l.getSnapshot!==n||o||Ie!==null&&Ie.memoizedState.tag&1){if(a.flags|=2048,Ya(9,pc.bind(null,a,l,t,n),{destroy:void 0},null),Oe===null)throw Error(r(349));u||(zt&60)!==0||yc(a,n,t)}return t}function yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n=Uu(),fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pc(e,n,t,a){n.value=t,n.getSnapshot=a,vc(n)&&bc(e)}function gc(e,n,t){return t(function(){vc(n)&&bc(e)})}function vc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!An(e,t)}catch{return!0}}function bc(e){var n=Mt(e,2);n!==null&&gn(n,e,2)}function bo(e){var n=Sn();if(typeof e=="function"){var t=e;if(e=t(),la){W(!0);try{t()}finally{W(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:e},n}function wc(e,n,t,a){return e.baseState=t,go(e,je,typeof a=="function"?a:st)}function xm(e,n,t,a,l){if(Gu(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};R.T!==null?t(!0):u.isTransition=!1,a(u),t=n.pending,t===null?(u.next=n.pending=u,Sc(n,u)):(u.next=t.next,n.pending=t.next=u)}}function Sc(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var u=R.T,o={};R.T=o;try{var s=t(l,a),m=R.S;m!==null&&m(o,s),Ec(e,n,s)}catch(w){wo(e,n,w)}finally{R.T=u}}else try{u=t(l,a),Ec(e,n,u)}catch(w){wo(e,n,w)}}function Ec(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Ac(e,n,a)},function(a){return wo(e,n,a)}):Ac(e,n,t)}function Ac(e,n,t){n.status="fulfilled",n.value=t,Tc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Sc(e,t)))}function wo(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Tc(n),n=n.next;while(n!==a)}e.action=null}function Tc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jc(e,n){return n}function xc(e,n){if(ve){var t=Oe.formState;if(t!==null){e:{var a=fe;if(ve){if(ln){n:{for(var l=ln,u=Kn;l.nodeType!==8;){if(!u){l=null;break n}if(l=Xn(l.nextSibling),l===null){l=null;break n}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){ln=Xn(l.nextSibling),a=l.data==="F!";break e}}na(a)}a=!1}a&&(n=t[0])}}return t=Sn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jc,lastRenderedState:n},t.queue=a,t=Ic.bind(null,fe,a),a.dispatch=t,a=bo(!1),u=xo.bind(null,fe,!1,a.queue),a=Sn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=xm.bind(null,fe,l,u,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function Mc(e){var n=Xe();return qc(n,je,e)}function qc(e,n,t){n=go(e,n,jc)[0],e=Hu(st)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ol(n):n;var a=Xe(),l=a.queue,u=l.dispatch;return t!==a.memoizedState&&(fe.flags|=2048,Ya(9,Mm.bind(null,l,t),{destroy:void 0},null)),[n,u,e]}function Mm(e,n){e.action=n}function Oc(e){var n=Xe(),t=je;if(t!==null)return qc(n,t,e);Xe(),n=n.memoizedState,t=Xe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ya(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=fe.updateQueue,n===null&&(n=Uu(),fe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function zc(){return Xe().memoizedState}function Lu(e,n,t,a){var l=Sn();fe.flags|=e,l.memoizedState=Ya(1|n,t,{destroy:void 0},a===void 0?null:a)}function Yu(e,n,t,a){var l=Xe();a=a===void 0?null:a;var u=l.memoizedState.inst;je!==null&&a!==null&&co(a,je.memoizedState.deps)?l.memoizedState=Ya(n,t,u,a):(fe.flags|=e,l.memoizedState=Ya(1|n,t,u,a))}function Cc(e,n){Lu(8390656,8,e,n)}function So(e,n){Yu(2048,8,e,n)}function Nc(e,n){return Yu(4,2,e,n)}function Dc(e,n){return Yu(4,4,e,n)}function Rc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kc(e,n,t){t=t!=null?t.concat([e]):null,Yu(4,4,Rc.bind(null,n,e),t)}function Eo(){}function _c(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&co(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Uc(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&co(n,a[1]))return a[0];if(a=e(),la){W(!0);try{e()}finally{W(!1)}}return t.memoizedState=[a,n],a}function Ao(e,n,t){return t===void 0||(zt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Lf(),fe.lanes|=e,Lt|=e,t)}function Bc(e,n,t,a){return An(t,n)?t:_a.current!==null?(e=Ao(e,t,a),An(e,n)||(Pe=!0),e):(zt&42)===0?(Pe=!0,e.memoizedState=t):(e=Lf(),fe.lanes|=e,Lt|=e,n)}function Hc(e,n,t,a,l){var u=L.p;L.p=u!==0&&8>u?u:8;var o=R.T,s={};R.T=s,xo(e,!1,n,t);try{var m=l(),w=R.S;if(w!==null&&w(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var O=Am(m,a);zl(e,n,O,Mn(e))}else zl(e,n,a,Mn(e))}catch(k){zl(e,n,{then:function(){},status:"rejected",reason:k},Mn())}finally{L.p=u,R.T=o}}function qm(){}function To(e,n,t,a){if(e.tag!==5)throw Error(r(476));var l=Lc(e).queue;Hc(e,l,n,se,t===null?qm:function(){return Yc(e),t(a)})}function Lc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:se},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Yc(e){var n=Lc(e).next.queue;zl(e,n,{},Mn())}function jo(){return fn(Wl)}function Gc(){return Xe().memoizedState}function Qc(){return Xe().memoizedState}function Om(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Mn();e=Rt(t);var a=kt(n,e,t);a!==null&&(gn(a,n,t),Dl(a,n,t)),n={cache:oo()},e.payload=n;return}n=n.return}}function zm(e,n,t){var a=Mn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Gu(e)?Xc(n,t):(t=eo(e,n,t,a),t!==null&&(gn(t,e,a),Zc(t,n,a)))}function Ic(e,n,t){var a=Mn();zl(e,n,t,a)}function zl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))Xc(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var o=n.lastRenderedState,s=u(o,t);if(l.hasEagerState=!0,l.eagerState=s,An(s,o))return ju(e,n,l,0),Oe===null&&Tu(),!1}catch{}finally{}if(t=eo(e,n,l,a),t!==null)return gn(t,e,a),Zc(t,n,a),!0}return!1}function xo(e,n,t,a){if(a={lane:2,revertLane:ys(),action:a,hasEagerState:!1,eagerState:null,next:null},Gu(e)){if(n)throw Error(r(479))}else n=eo(e,t,a,2),n!==null&&gn(n,e,2)}function Gu(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Xc(e,n){Ha=ku=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zc(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ar(e,t)}}var $n={readContext:fn,use:Bu,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe};$n.useCacheRefresh=Qe,$n.useMemoCache=Qe,$n.useHostTransitionStatus=Qe,$n.useFormState=Qe,$n.useActionState=Qe,$n.useOptimistic=Qe;var ua={readContext:fn,use:Bu,useCallback:function(e,n){return Sn().memoizedState=[e,n===void 0?null:n],e},useContext:fn,useEffect:Cc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Lu(4194308,4,Rc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Lu(4194308,4,e,n)},useInsertionEffect:function(e,n){Lu(4,2,e,n)},useMemo:function(e,n){var t=Sn();n=n===void 0?null:n;var a=e();if(la){W(!0);try{e()}finally{W(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Sn();if(t!==void 0){var l=t(n);if(la){W(!0);try{t(n)}finally{W(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=zm.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var n=Sn();return e={current:e},n.memoizedState=e},useState:function(e){e=bo(e);var n=e.queue,t=Ic.bind(null,fe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Sn();return Ao(t,e,n)},useTransition:function(){var e=bo(!1);return e=Hc.bind(null,fe,e.queue,!0,!1),Sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=fe,l=Sn();if(ve){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),Oe===null)throw Error(r(349));(pe&60)!==0||yc(a,n,t)}l.memoizedState=t;var u={value:t,getSnapshot:n};return l.queue=u,Cc(gc.bind(null,a,u,e),[e]),a.flags|=2048,Ya(9,pc.bind(null,a,u,t,n),{destroy:void 0},null),t},useId:function(){var e=Sn(),n=Oe.identifierPrefix;if(ve){var t=it,a=ut;t=(a&~(1<<32-ee(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=_u++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Tm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Sn().memoizedState=Om.bind(null,fe)}};ua.useMemoCache=po,ua.useHostTransitionStatus=jo,ua.useFormState=xc,ua.useActionState=xc,ua.useOptimistic=function(e){var n=Sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=xo.bind(null,fe,!0,t),t.dispatch=n,[e,n]};var Ct={readContext:fn,use:Bu,useCallback:_c,useContext:fn,useEffect:So,useImperativeHandle:kc,useInsertionEffect:Nc,useLayoutEffect:Dc,useMemo:Uc,useReducer:Hu,useRef:zc,useState:function(){return Hu(st)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Xe();return Bc(t,je.memoizedState,e,n)},useTransition:function(){var e=Hu(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:mc,useId:Gc};Ct.useCacheRefresh=Qc,Ct.useMemoCache=po,Ct.useHostTransitionStatus=jo,Ct.useFormState=Mc,Ct.useActionState=Mc,Ct.useOptimistic=function(e,n){var t=Xe();return wc(t,je,e,n)};var ia={readContext:fn,use:Bu,useCallback:_c,useContext:fn,useEffect:So,useImperativeHandle:kc,useInsertionEffect:Nc,useLayoutEffect:Dc,useMemo:Uc,useReducer:vo,useRef:zc,useState:function(){return vo(st)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Xe();return je===null?Ao(t,e,n):Bc(t,je.memoizedState,e,n)},useTransition:function(){var e=vo(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:mc,useId:Gc};ia.useCacheRefresh=Qc,ia.useMemoCache=po,ia.useHostTransitionStatus=jo,ia.useFormState=Oc,ia.useActionState=Oc,ia.useOptimistic=function(e,n){var t=Xe();return je!==null?wc(t,je,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Mo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var qo={isMounted:function(e){return(e=e._reactInternals)?ae(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Mn(),l=Rt(a);l.payload=n,t!=null&&(l.callback=t),n=kt(e,l,a),n!==null&&(gn(n,e,a),Dl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Mn(),l=Rt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=kt(e,l,a),n!==null&&(gn(n,e,a),Dl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Mn(),a=Rt(t);a.tag=2,n!=null&&(a.callback=n),n=kt(e,a,t),n!==null&&(gn(n,e,t),Dl(n,e,t))}};function Vc(e,n,t,a,l,u,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,o):n.prototype&&n.prototype.isPureReactComponent?!gl(t,a)||!gl(l,u):!0}function Jc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&qo.enqueueReplaceState(n,n.state,null)}function oa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=K({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Qu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kc(e){Qu(e)}function Wc(e){console.error(e)}function $c(e){Qu(e)}function Iu(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Fc(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oo(e,n,t){return t=Rt(t),t.tag=3,t.payload={element:null},t.callback=function(){Iu(e,n)},t}function Pc(e){return e=Rt(e),e.tag=3,e}function ef(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=a.value;e.payload=function(){return l(u)},e.callback=function(){Fc(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Fc(n,t,a),typeof l!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Cm(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Nl(n,t,l,!0),t=kn.current,t!==null){switch(t.tag){case 13:return Wn===null?cs():t.alternate===null&&Le===0&&(Le=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===lo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ds(e,a,l)),!1;case 22:return t.flags|=65536,a===lo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ds(e,a,l)),!1}throw Error(r(435,t.tag))}return ds(e,a,l),cs(),!1}if(ve)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==ao&&(e=Error(r(422),{cause:a}),Sl(Nn(e,t)))):(a!==ao&&(n=Error(r(423),{cause:a}),Sl(Nn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Nn(a,t),l=Oo(e.stateNode,a,l),Io(e,l),Le!==4&&(Le=2)),!1;var u=Error(r(520),{cause:a});if(u=Nn(u,t),Yl===null?Yl=[u]:Yl.push(u),Le!==4&&(Le=2),n===null)return!0;a=Nn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Oo(t.stateNode,a,e),Io(t,e),!1;case 1:if(n=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Yt===null||!Yt.has(u))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Pc(l),ef(l,e,t,a),Io(t,l),!1}t=t.return}while(t!==null);return!1}var nf=Error(r(461)),Pe=!1;function un(e,n,t,a){n.child=e===null?ic(n,null,t,a):ta(n,e.child,t,a)}function tf(e,n,t,a,l){t=t.render;var u=n.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return ra(n),a=fo(e,n,t,o,u,l),s=ho(),e!==null&&!Pe?(mo(e,n,l),rt(e,n,l)):(ve&&s&&no(n),n.flags|=1,un(e,n,a,l),n.child)}function af(e,n,t,a,l){if(e===null){var u=t.type;return typeof u=="function"&&!Fo(u)&&u.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=u,lf(e,n,u,a,l)):(e=Ku(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Bo(e,l)){var o=u.memoizedProps;if(t=t.compare,t=t!==null?t:gl,t(o,a)&&e.ref===n.ref)return rt(e,n,l)}return n.flags|=1,e=Ht(u,a),e.ref=n.ref,e.return=n,n.child=e}function lf(e,n,t,a,l){if(e!==null){var u=e.memoizedProps;if(gl(u,a)&&e.ref===n.ref)if(Pe=!1,n.pendingProps=a=u,Bo(e,l))(e.flags&131072)!==0&&(Pe=!0);else return n.lanes=e.lanes,rt(e,n,l)}return zo(e,n,t,a,l)}function uf(e,n,t){var a=n.pendingProps,l=a.children,u=(n.stateNode._pendingVisibility&2)!==0,o=e!==null?e.memoizedState:null;if(Cl(e,n),a.mode==="hidden"||u){if((n.flags&128)!==0){if(a=o!==null?o.baseLanes|t:t,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;n.childLanes=u&~a}else n.childLanes=0,n.child=null;return of(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ru(n,o!==null?o.cachePool:null),o!==null?oc(n,o):uo(),sc(n);else return n.lanes=n.childLanes=536870912,of(e,n,o!==null?o.baseLanes|t:t,t)}else o!==null?(Ru(n,o.cachePool),oc(n,o),Ot(),n.memoizedState=null):(e!==null&&Ru(n,null),uo(),Ot());return un(e,n,l,t),n.child}function of(e,n,t,a){var l=ro();return l=l===null?null:{parent:Ke._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Ru(n,null),uo(),sc(n),e!==null&&Nl(e,n,a,!0),null}function Cl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function zo(e,n,t,a,l){return ra(n),t=fo(e,n,t,a,void 0,l),a=ho(),e!==null&&!Pe?(mo(e,n,l),rt(e,n,l)):(ve&&a&&no(n),n.flags|=1,un(e,n,t,l),n.child)}function sf(e,n,t,a,l,u){return ra(n),n.updateQueue=null,t=hc(n,a,t,l),dc(e),a=ho(),e!==null&&!Pe?(mo(e,n,u),rt(e,n,u)):(ve&&a&&no(n),n.flags|=1,un(e,n,t,u),n.child)}function rf(e,n,t,a,l){if(ra(n),n.stateNode===null){var u=Na,o=t.contextType;typeof o=="object"&&o!==null&&(u=fn(o)),u=new t(a,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=qo,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=a,u.state=n.memoizedState,u.refs={},Go(n),o=t.contextType,u.context=typeof o=="object"&&o!==null?fn(o):Na,u.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mo(n,t,o,a),u.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&qo.enqueueReplaceState(u,u.state,null),kl(n,a,u,l),Rl(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){u=n.stateNode;var s=n.memoizedProps,m=oa(t,s);u.props=m;var w=u.context,O=t.contextType;o=Na,typeof O=="object"&&O!==null&&(o=fn(O));var k=t.getDerivedStateFromProps;O=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=n.pendingProps!==s,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||w!==o)&&Jc(n,u,a,o),Dt=!1;var j=n.memoizedState;u.state=j,kl(n,a,u,l),Rl(),w=n.memoizedState,s||j!==w||Dt?(typeof k=="function"&&(Mo(n,t,k,a),w=n.memoizedState),(m=Dt||Vc(n,t,m,a,j,w,o))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=w),u.props=a,u.state=w,u.context=o,a=m):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{u=n.stateNode,Qo(e,n),o=n.memoizedProps,O=oa(t,o),u.props=O,k=n.pendingProps,j=u.context,w=t.contextType,m=Na,typeof w=="object"&&w!==null&&(m=fn(w)),s=t.getDerivedStateFromProps,(w=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==k||j!==m)&&Jc(n,u,a,m),Dt=!1,j=n.memoizedState,u.state=j,kl(n,a,u,l),Rl();var q=n.memoizedState;o!==k||j!==q||Dt||e!==null&&e.dependencies!==null&&Xu(e.dependencies)?(typeof s=="function"&&(Mo(n,t,s,a),q=n.memoizedState),(O=Dt||Vc(n,t,O,a,j,q,m)||e!==null&&e.dependencies!==null&&Xu(e.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,q,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,q,m)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=q),u.props=a,u.state=q,u.context=m,a=O):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),a=!1)}return u=a,Cl(e,n),a=(n.flags&128)!==0,u||a?(u=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&a?(n.child=ta(n,e.child,null,l),n.child=ta(n,null,t,l)):un(e,n,t,l),n.memoizedState=u.state,e=n.child):e=rt(e,n,l),e}function cf(e,n,t,a){return wl(),n.flags|=256,un(e,n,t,a),n.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:fc()}}function Do(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Hn),e}function ff(e,n,t){var a=n.pendingProps,l=!1,u=(n.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),o&&(l=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(ve){if(l?qt(n):Ot(),ve){var s=ln,m;if(m=s){e:{for(m=s,s=Kn;m.nodeType!==8;){if(!s){s=null;break e}if(m=Xn(m.nextSibling),m===null){s=null;break e}}s=m}s!==null?(n.memoizedState={dehydrated:s,treeContext:Pt!==null?{id:ut,overflow:it}:null,retryLane:536870912},m=Bn(18,null,null,0),m.stateNode=s,m.return=n,n.child=m,pn=n,ln=null,m=!0):m=!1}m||na(n)}if(s=n.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return s.data==="$!"?n.lanes=16:n.lanes=536870912,null;ot(n)}return s=a.children,a=a.fallback,l?(Ot(),l=n.mode,s=ko({mode:"hidden",children:s},l),a=fa(a,l,t,null),s.return=n,a.return=n,s.sibling=a,n.child=s,l=n.child,l.memoizedState=No(t),l.childLanes=Do(e,o,t),n.memoizedState=Co,a):(qt(n),Ro(n,s))}if(m=e.memoizedState,m!==null&&(s=m.dehydrated,s!==null)){if(u)n.flags&256?(qt(n),n.flags&=-257,n=_o(e,n,t)):n.memoizedState!==null?(Ot(),n.child=e.child,n.flags|=128,n=null):(Ot(),l=a.fallback,s=n.mode,a=ko({mode:"visible",children:a.children},s),l=fa(l,s,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,ta(n,e.child,null,t),a=n.child,a.memoizedState=No(t),a.childLanes=Do(e,o,t),n.memoizedState=Co,n=l);else if(qt(n),s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var w=o.dgst;o=w,a=Error(r(419)),a.stack="",a.digest=o,Sl({value:a,source:null,stack:null}),n=_o(e,n,t)}else if(Pe||Nl(e,n,t,!1),o=(t&e.childLanes)!==0,Pe||o){if(o=Oe,o!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(o.suspendedLanes|t))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,Mt(e,a),gn(o,e,a),nf}s.data==="$?"||cs(),n=_o(e,n,t)}else s.data==="$?"?(n.flags|=128,n.child=e.child,n=Zm.bind(null,e),s._reactRetry=n,n=null):(e=m.treeContext,ln=Xn(s.nextSibling),pn=n,ve=!0,Qn=null,Kn=!1,e!==null&&(Dn[Rn++]=ut,Dn[Rn++]=it,Dn[Rn++]=Pt,ut=e.id,it=e.overflow,Pt=n),n=Ro(n,a.children),n.flags|=4096);return n}return l?(Ot(),l=a.fallback,s=n.mode,m=e.child,w=m.sibling,a=Ht(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,w!==null?l=Ht(w,l):(l=fa(l,s,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,s=e.child.memoizedState,s===null?s=No(t):(m=s.cachePool,m!==null?(w=Ke._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=fc(),s={baseLanes:s.baseLanes|t,cachePool:m}),l.memoizedState=s,l.childLanes=Do(e,o,t),n.memoizedState=Co,a):(qt(n),t=e.child,e=t.sibling,t=Ht(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function Ro(e,n){return n=ko({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ko(e,n){return Uf(e,n,0,null)}function _o(e,n,t){return ta(n,e.child,null,t),e=Ro(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function df(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Lo(e.return,n,t)}function Uo(e,n,t,a,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=t,u.tailMode=l)}function hf(e,n,t){var a=n.pendingProps,l=a.revealOrder,u=a.tail;if(un(e,n,a.children,t),a=Je.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,t,n);else if(e.tag===19)df(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(we(Je,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Du(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Uo(n,!1,l,t,u);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Du(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Uo(n,!0,t,null,u);break;case"together":Uo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Lt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Nl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Ht(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ht(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bo(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xu(e)))}function Nm(e,n,t){switch(n.tag){case 3:Jn(n,n.stateNode.containerInfo),Nt(n,Ke,e.memoizedState.cache),wl();break;case 27:case 5:tt(n);break;case 4:Jn(n,n.stateNode.containerInfo);break;case 10:Nt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(qt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ff(e,n,t):(qt(n),e=rt(e,n,t),e!==null?e.sibling:null);qt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Nl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return hf(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(Je,Je.current),a)break;return null;case 22:case 23:return n.lanes=0,uf(e,n,t);case 24:Nt(n,Ke,e.memoizedState.cache)}return rt(e,n,t)}function mf(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Pe=!0;else{if(!Bo(e,t)&&(n.flags&128)===0)return Pe=!1,Nm(e,n,t);Pe=(e.flags&131072)!==0}else Pe=!1,ve&&(n.flags&1048576)!==0&&$r(n,qu,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")Fo(a)?(e=oa(a,e),n.tag=1,n=rf(null,n,a,e,t)):(n.tag=0,n=zo(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===D){n.tag=11,n=tf(null,n,a,e,t);break e}else if(l===U){n.tag=14,n=af(null,n,a,e,t);break e}}throw n=Te(a)||a,Error(r(306,n,""))}}return n;case 0:return zo(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=oa(a,n.pendingProps),rf(e,n,a,l,t);case 3:e:{if(Jn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var u=n.pendingProps;l=n.memoizedState,a=l.element,Qo(e,n),kl(n,u,null,t);var o=n.memoizedState;if(u=o.cache,Nt(n,Ke,u),u!==l.cache&&Yo(n,[Ke],t,!0),Rl(),u=o.element,l.isDehydrated)if(l={element:u,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=cf(e,n,u,t);break e}else if(u!==a){a=Nn(Error(r(424)),n),Sl(a),n=cf(e,n,u,t);break e}else for(ln=Xn(n.stateNode.containerInfo.firstChild),pn=n,ve=!0,Qn=null,Kn=!0,t=ic(n,null,u,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wl(),u===a){n=rt(e,n,t);break e}un(e,n,u,t)}n=n.child}return n;case 26:return Cl(e,n),e===null?(t=gd(n.type,null,n.pendingProps,null))?n.memoizedState=t:ve||(t=n.type,e=n.pendingProps,a=oi(Vn.current).createElement(t),a[cn]=n,a[bn]=e,on(a,t,e),Fe(a),n.stateNode=a):n.memoizedState=gd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return tt(n),e===null&&ve&&(a=n.stateNode=md(n.type,n.pendingProps,Vn.current),pn=n,Kn=!0,ln=Xn(a.firstChild)),a=n.pendingProps.children,e!==null||ve?un(e,n,a,t):n.child=ta(n,null,a,t),Cl(e,n),n.child;case 5:return e===null&&ve&&((l=a=ln)&&(a=sy(a,n.type,n.pendingProps,Kn),a!==null?(n.stateNode=a,pn=n,ln=Xn(a.firstChild),Kn=!1,l=!0):l=!1),l||na(n)),tt(n),l=n.type,u=n.pendingProps,o=e!==null?e.memoizedProps:null,a=u.children,Ts(l,u)?a=null:o!==null&&Ts(l,o)&&(n.flags|=32),n.memoizedState!==null&&(l=fo(e,n,jm,null,null,t),Wl._currentValue=l),Cl(e,n),un(e,n,a,t),n.child;case 6:return e===null&&ve&&((e=t=ln)&&(t=ry(t,n.pendingProps,Kn),t!==null?(n.stateNode=t,pn=n,ln=null,e=!0):e=!1),e||na(n)),null;case 13:return ff(e,n,t);case 4:return Jn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ta(n,null,a,t):un(e,n,a,t),n.child;case 11:return tf(e,n,n.type,n.pendingProps,t);case 7:return un(e,n,n.pendingProps,t),n.child;case 8:return un(e,n,n.pendingProps.children,t),n.child;case 12:return un(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Nt(n,n.type,a.value),un(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ra(n),l=fn(l),a=a(l),n.flags|=1,un(e,n,a,t),n.child;case 14:return af(e,n,n.type,n.pendingProps,t);case 15:return lf(e,n,n.type,n.pendingProps,t);case 19:return hf(e,n,t);case 22:return uf(e,n,t);case 24:return ra(n),a=fn(Ke),e===null?(l=ro(),l===null&&(l=Oe,u=oo(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=t),l=u),n.memoizedState={parent:a,cache:l},Go(n),Nt(n,Ke,l)):((e.lanes&t)!==0&&(Qo(e,n),kl(n,null,null,t),Rl()),l=e.memoizedState,u=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Nt(n,Ke,a)):(a=u.cache,Nt(n,Ke,a),a!==l.cache&&Yo(n,[Ke],t,!0))),un(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Ho=ge(null),sa=null,ct=null;function Nt(e,n,t){we(Ho,n._currentValue),n._currentValue=t}function ft(e){e._currentValue=Ho.current,Ne(Ho)}function Lo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Yo(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var o=l.child;u=u.firstContext;e:for(;u!==null;){var s=u;u=l;for(var m=0;m<n.length;m++)if(s.context===n[m]){u.lanes|=t,s=u.alternate,s!==null&&(s.lanes|=t),Lo(u.return,t,e),a||(o=null);break e}u=s.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(r(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Lo(o,t,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Nl(e,n,t,a){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var s=l.type;An(l.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(l===vn.current){if(o=l.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Wl):e=[Wl])}l=l.return}e!==null&&Yo(n,e,t,a),n.flags|=262144}function Xu(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){sa=e,ct=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return yf(sa,e)}function Zu(e,n){return sa===null&&ra(e),yf(e,n)}function yf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ct===null){if(e===null)throw Error(r(308));ct=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ct=ct.next=n;return t}var Dt=!1;function Go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=xu(e),Kr(e,null,t),n}return ju(e,a,n,t),xu(e)}function Dl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ar(e,t)}}function Io(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?l=u=o:u=u.next=o,t=t.next}while(t!==null);u===null?l=u=n:u=u.next=n}else l=u=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Xo=!1;function Rl(){if(Xo){var e=Ba;if(e!==null)throw e}}function kl(e,n,t,a){Xo=!1;var l=e.updateQueue;Dt=!1;var u=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var m=s,w=m.next;m.next=null,o===null?u=w:o.next=w,o=m;var O=e.alternate;O!==null&&(O=O.updateQueue,s=O.lastBaseUpdate,s!==o&&(s===null?O.firstBaseUpdate=w:s.next=w,O.lastBaseUpdate=m))}if(u!==null){var k=l.baseState;o=0,O=w=m=null,s=u;do{var j=s.lane&-536870913,q=j!==s.lane;if(q?(pe&j)===j:(a&j)===j){j!==0&&j===Ua&&(Xo=!0),O!==null&&(O=O.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var F=e,oe=s;j=n;var Ye=t;switch(oe.tag){case 1:if(F=oe.payload,typeof F=="function"){k=F.call(Ye,k,j);break e}k=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=oe.payload,j=typeof F=="function"?F.call(Ye,k,j):F,j==null)break e;k=K({},k,j);break e;case 2:Dt=!0}}j=s.callback,j!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[j]:q.push(j))}else q={lane:j,tag:s.tag,payload:s.payload,callback:s.callback,next:null},O===null?(w=O=q,m=k):O=O.next=q,o|=j;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;q=s,s=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);O===null&&(m=k),l.baseState=m,l.firstBaseUpdate=w,l.lastBaseUpdate=O,u===null&&(l.shared.lanes=0),Lt|=o,e.lanes=o,e.memoizedState=k}}function pf(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)pf(t[e],n)}function _l(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var u=t.create,o=t.inst;a=u(),o.destroy=a}t=t.next}while(t!==l)}}catch(s){qe(n,n.return,s)}}function _t(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,l=n;var m=t;try{s()}catch(w){qe(l,m,w)}}}a=a.next}while(a!==u)}}catch(w){qe(n,n.return,w)}}function vf(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{gf(n,t)}catch(a){qe(e,e.return,a)}}}function bf(e,n,t){t.props=oa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){qe(e,n,a)}}function ca(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(u){qe(e,n,u)}}function Tn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){qe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){qe(e,n,l)}else t.current=null}function wf(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){qe(e,e.return,l)}}function Sf(e,n,t){try{var a=e.stateNode;ay(a,e.type,t,n),a[bn]=n}catch(l){qe(e,e.return,l)}}function Ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ii));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Vo(e,n,t),e=e.sibling;e!==null;)Vo(e,n,t),e=e.sibling}function Vu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Vu(e,n,t),e=e.sibling;e!==null;)Vu(e,n,t),e=e.sibling}var dt=!1,He=!1,Jo=!1,Af=typeof WeakSet=="function"?WeakSet:Set,en=null,Tf=!1;function Dm(e,n){if(e=e.containerInfo,Es=hi,e=Lr(e),Ki(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var o=0,s=-1,m=-1,w=0,O=0,k=e,j=null;n:for(;;){for(var q;k!==t||l!==0&&k.nodeType!==3||(s=o+l),k!==u||a!==0&&k.nodeType!==3||(m=o+a),k.nodeType===3&&(o+=k.nodeValue.length),(q=k.firstChild)!==null;)j=k,k=q;for(;;){if(k===e)break n;if(j===t&&++w===l&&(s=o),j===u&&++O===a&&(m=o),(q=k.nextSibling)!==null)break;k=j,j=k.parentNode}k=q}t=s===-1||m===-1?null:{start:s,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(As={focusedElem:e,selectionRange:t},hi=!1,en=n;en!==null;)if(n=en,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,en=e;else for(;en!==null;){switch(n=en,u=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=n,l=u.memoizedProps,u=u.memoizedState,a=t.stateNode;try{var F=oa(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(F,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){qe(t,t.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Ms(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,en=e;break}en=n.return}return F=Tf,Tf=!1,F}function jf(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t),a&4&&_l(5,t);break;case 1:if(mt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){qe(t,t.return,s)}else{var l=oa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){qe(t,t.return,s)}}a&64&&vf(t),a&512&&ca(t,t.return);break;case 3:if(mt(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{gf(a,e)}catch(s){qe(t,t.return,s)}}break;case 26:mt(e,t),a&512&&ca(t,t.return);break;case 27:case 5:mt(e,t),n===null&&a&4&&wf(t),a&512&&ca(t,t.return);break;case 12:mt(e,t);break;case 13:mt(e,t),a&4&&qf(e,t);break;case 22:if(l=t.memoizedState!==null||dt,!l){n=n!==null&&n.memoizedState!==null||He;var u=dt,o=He;dt=l,(He=n)&&!o?Ut(e,t,(t.subtreeFlags&8772)!==0):mt(e,t),dt=u,He=o}a&512&&(t.memoizedProps.mode==="manual"?ca(t,t.return):Tn(t,t.return));break;default:mt(e,t)}}function xf(e){var n=e.alternate;n!==null&&(e.alternate=null,xf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Di(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,jn=!1;function ht(e,n,t){for(t=t.child;t!==null;)Mf(e,n,t),t=t.sibling}function Mf(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Vt,t)}catch{}switch(t.tag){case 26:He||Tn(t,n),ht(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:He||Tn(t,n);var a=Ze,l=jn;for(Ze=t.stateNode,ht(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Di(t),Ze=a,jn=l;break;case 5:He||Tn(t,n);case 6:l=Ze;var u=jn;if(Ze=null,ht(e,n,t),Ze=l,jn=u,Ze!==null)if(jn)try{e=Ze,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(o){qe(t,n,o)}else try{Ze.removeChild(t.stateNode)}catch(o){qe(t,n,o)}break;case 18:Ze!==null&&(jn?(n=Ze,t=t.stateNode,n.nodeType===8?xs(n.parentNode,t):n.nodeType===1&&xs(n,t),eu(n)):xs(Ze,t.stateNode));break;case 4:a=Ze,l=jn,Ze=t.stateNode.containerInfo,jn=!0,ht(e,n,t),Ze=a,jn=l;break;case 0:case 11:case 14:case 15:He||_t(2,t,n),He||_t(4,t,n),ht(e,n,t);break;case 1:He||(Tn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&bf(t,n,a)),ht(e,n,t);break;case 21:ht(e,n,t);break;case 22:He||Tn(t,n),He=(a=He)||t.memoizedState!==null,ht(e,n,t),He=a;break;default:ht(e,n,t)}}function qf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eu(e)}catch(t){qe(n,n.return,t)}}function Rm(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Af),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Af),n;default:throw Error(r(435,e.tag))}}function Ko(e,n){var t=Rm(e);n.forEach(function(a){var l=Vm.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function _n(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],u=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 27:case 5:Ze=s.stateNode,jn=!1;break e;case 3:Ze=s.stateNode.containerInfo,jn=!0;break e;case 4:Ze=s.stateNode.containerInfo,jn=!0;break e}s=s.return}if(Ze===null)throw Error(r(160));Mf(u,o,l),Ze=null,jn=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Of(n,e),n=n.sibling}var In=null;function Of(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_n(n,e),Un(e),a&4&&(_t(3,e,e.return),_l(3,e),_t(5,e,e.return));break;case 1:_n(n,e),Un(e),a&512&&(He||t===null||Tn(t,t.return)),a&64&&dt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=In;if(_n(n,e),Un(e),a&512&&(He||t===null||Tn(t,t.return)),a&4){var u=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":u=l.getElementsByTagName("title")[0],(!u||u[sl]||u[cn]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(a),l.head.insertBefore(u,l.querySelector("head > title"))),on(u,a,t),u[cn]=e,Fe(u),a=u;break e;case"link":var o=wd("link","href",l).get(a+(t.href||""));if(o){for(var s=0;s<o.length;s++)if(u=o[s],u.getAttribute("href")===(t.href==null?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(s,1);break n}}u=l.createElement(a),on(u,a,t),l.head.appendChild(u);break;case"meta":if(o=wd("meta","content",l).get(a+(t.content||""))){for(s=0;s<o.length;s++)if(u=o[s],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(s,1);break n}}u=l.createElement(a),on(u,a,t),l.head.appendChild(u);break;default:throw Error(r(468,a))}u[cn]=e,Fe(u),a=u}e.stateNode=a}else Sd(l,e.type,e.stateNode);else e.stateNode=bd(l,a,e.memoizedProps);else u!==a?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,a===null?Sd(l,e.type,e.stateNode):bd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,u=e.memoizedProps;try{for(var m=l.firstChild;m;){var w=m.nextSibling,O=m.nodeName;m[sl]||O==="HEAD"||O==="BODY"||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&m.rel.toLowerCase()==="stylesheet"||l.removeChild(m),m=w}for(var k=e.type,j=l.attributes;j.length;)l.removeAttributeNode(j[0]);on(l,k,u),l[cn]=e,l[bn]=u}catch(F){qe(e,e.return,F)}}case 5:if(_n(n,e),Un(e),a&512&&(He||t===null||Tn(t,t.return)),e.flags&32){l=e.stateNode;try{ja(l,"")}catch(F){qe(e,e.return,F)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Sf(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Jo=!0);break;case 6:if(_n(n,e),Un(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(F){qe(e,e.return,F)}}break;case 3:if(ci=null,l=In,In=si(n.containerInfo),_n(n,e),In=l,Un(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{eu(n.containerInfo)}catch(F){qe(e,e.return,F)}Jo&&(Jo=!1,zf(e));break;case 4:a=In,In=si(e.stateNode.containerInfo),_n(n,e),Un(e),In=a;break;case 12:_n(n,e),Un(e);break;case 13:_n(n,e),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ls=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ko(e,a)));break;case 22:if(a&512&&(He||t===null||Tn(t,t.return)),m=e.memoizedState!==null,w=t!==null&&t.memoizedState!==null,O=dt,k=He,dt=O||m,He=k||w,_n(n,e),He=k,dt=O,Un(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=m?n._visibility&-2:n._visibility|1,m&&(n=dt||He,t===null||w||n||Ga(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){w=t=n;try{if(l=w.stateNode,m)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=w.stateNode,s=w.memoizedProps.style;var q=s!=null&&s.hasOwnProperty("display")?s.display:null;o.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){qe(w,w.return,F)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=m?"":w.memoizedProps}catch(F){qe(w,w.return,F)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ko(e,t))));break;case 19:_n(n,e),Un(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ko(e,a)));break;case 21:break;default:_n(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Ef(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var l=a.stateNode,u=Zo(e);Vu(e,u,l);break;case 5:var o=a.stateNode;a.flags&32&&(ja(o,""),a.flags&=-33);var s=Zo(e);Vu(e,s,o);break;case 3:case 4:var m=a.stateNode.containerInfo,w=Zo(e);Vo(e,w,m);break;default:throw Error(r(161))}}}catch(O){qe(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function mt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jf(e,n.alternate,n),n=n.sibling}function Ga(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_t(4,n,n.return),Ga(n);break;case 1:Tn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&bf(n,n.return,t),Ga(n);break;case 26:case 27:case 5:Tn(n,n.return),Ga(n);break;case 22:Tn(n,n.return),n.memoizedState===null&&Ga(n);break;default:Ga(n)}e=e.sibling}}function Ut(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,u=n,o=u.flags;switch(u.tag){case 0:case 11:case 15:Ut(l,u,t),_l(4,u);break;case 1:if(Ut(l,u,t),a=u,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(w){qe(a,a.return,w)}if(a=u,l=a.updateQueue,l!==null){var s=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)pf(m[l],s)}catch(w){qe(a,a.return,w)}}t&&o&64&&vf(u),ca(u,u.return);break;case 26:case 27:case 5:Ut(l,u,t),t&&a===null&&o&4&&wf(u),ca(u,u.return);break;case 12:Ut(l,u,t);break;case 13:Ut(l,u,t),t&&o&4&&qf(l,u);break;case 22:u.memoizedState===null&&Ut(l,u,t),ca(u,u.return);break;default:Ut(l,u,t)}n=n.sibling}}function Wo(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&xl(t))}function $o(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e))}function Bt(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cf(e,n,t,a),n=n.sibling}function Cf(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Bt(e,n,t,a),l&2048&&_l(9,n);break;case 3:Bt(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e)));break;case 12:if(l&2048){Bt(e,n,t,a),e=n.stateNode;try{var u=n.memoizedProps,o=u.id,s=u.onPostCommit;typeof s=="function"&&s(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){qe(n,n.return,m)}}else Bt(e,n,t,a);break;case 23:break;case 22:u=n.stateNode,n.memoizedState!==null?u._visibility&4?Bt(e,n,t,a):Ul(e,n):u._visibility&4?Bt(e,n,t,a):(u._visibility|=4,Qa(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&Wo(n.alternate,n);break;case 24:Bt(e,n,t,a),l&2048&&$o(n.alternate,n);break;default:Bt(e,n,t,a)}}function Qa(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var u=e,o=n,s=t,m=a,w=o.flags;switch(o.tag){case 0:case 11:case 15:Qa(u,o,s,m,l),_l(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&4?Qa(u,o,s,m,l):Ul(u,o):(O._visibility|=4,Qa(u,o,s,m,l)),l&&w&2048&&Wo(o.alternate,o);break;case 24:Qa(u,o,s,m,l),l&&w&2048&&$o(o.alternate,o);break;default:Qa(u,o,s,m,l)}n=n.sibling}}function Ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ul(t,a),l&2048&&Wo(a.alternate,a);break;case 24:Ul(t,a),l&2048&&$o(a.alternate,a);break;default:Ul(t,a)}n=n.sibling}}var Bl=8192;function Ia(e){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 26:Ia(e),e.flags&Bl&&e.memoizedState!==null&&Ey(In,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var n=In;In=si(e.stateNode.containerInfo),Ia(e),In=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bl,Bl=16777216,Ia(e),Bl=n):Ia(e));break;default:Ia(e)}}function Df(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];en=a,kf(a,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rf(e),e=e.sibling}function Rf(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&_t(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Ju(e)):Hl(e);break;default:Hl(e)}}function Ju(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];en=a,kf(a,e)}Df(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_t(8,n,n.return),Ju(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Ju(n));break;default:Ju(n)}e=e.sibling}}function kf(e,n){for(;en!==null;){var t=en;switch(t.tag){case 0:case 11:case 15:_t(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,en=a;else e:for(t=e;en!==null;){a=en;var l=a.sibling,u=a.return;if(xf(a),a===t){en=null;break e}if(l!==null){l.return=u,en=l;break e}en=u}}}function km(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,n,t,a){return new km(e,n,t,a)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,n){var t=e.alternate;return t===null?(t=Bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function _f(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ku(e,n,t,a,l,u){var o=0;if(a=e,typeof e=="function")Fo(e)&&(o=1);else if(typeof e=="string")o=wy(e,t,tn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return fa(t.children,l,u,n);case y:o=8,l|=24;break;case M:return e=Bn(12,t,n,l|2),e.elementType=M,e.lanes=u,e;case X:return e=Bn(13,t,n,l),e.elementType=X,e.lanes=u,e;case G:return e=Bn(19,t,n,l),e.elementType=G,e.lanes=u,e;case Z:return Uf(t,l,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case B:o=10;break e;case N:o=9;break e;case D:o=11;break e;case U:o=14;break e;case J:o=16,a=null;break e}o=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=Bn(o,t,n,l),n.elementType=e,n.type=a,n.lanes=u,n}function fa(e,n,t,a){return e=Bn(7,e,a,n),e.lanes=t,e}function Uf(e,n,t,a){e=Bn(22,e,a,n),e.elementType=Z,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=l._current;if(u===null)throw Error(r(456));if((l._pendingVisibility&2)===0){var o=Mt(u,2);o!==null&&(l._pendingVisibility|=2,gn(o,u,2))}},attach:function(){var u=l._current;if(u===null)throw Error(r(456));if((l._pendingVisibility&2)!==0){var o=Mt(u,2);o!==null&&(l._pendingVisibility&=-3,gn(o,u,2))}}};return e.stateNode=l,e}function Po(e,n,t){return e=Bn(6,e,null,n),e.lanes=t,e}function es(e,n,t){return n=Bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function yt(e){e.flags|=4}function Bf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(n)){if(n=kn.current,n!==null&&((pe&4194176)===pe?Wn!==null:(pe&62914560)!==pe&&(pe&536870912)===0||n!==Wn))throw Al=lo,ec;e.flags|=8192}}function Wu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,Za|=n)}function Ll(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function _m(e,n,t){var a=n.pendingProps;switch(to(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ft(Ke),At(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(bl(n)?yt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qn!==null&&(ss(Qn),Qn=null))),ke(n),null;case 26:return t=n.memoizedState,e===null?(yt(n),t!==null?(ke(n),Bf(n,t)):(ke(n),n.flags&=-16777217)):t?t!==e.memoizedState?(yt(n),ke(n),Bf(n,t)):(ke(n),n.flags&=-16777217):(e.memoizedProps!==a&&yt(n),ke(n),n.flags&=-16777217),null;case 27:ga(n),t=Vn.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return ke(n),null}e=tn.current,bl(n)?Fr(n):(e=md(l,a,t),n.stateNode=e,yt(n))}return ke(n),null;case 5:if(ga(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(e=tn.current,bl(n))Fr(n);else{switch(l=oi(Vn.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[cn]=n,e[bn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(on(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yt(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Vn.current,bl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=pn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||sd(e.nodeValue,t)),e||na(n)}else e=oi(e).createTextNode(a),e[cn]=n,n.stateNode=e}return ke(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=bl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[cn]=n}else wl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),l=!1}else Qn!==null&&(ss(Qn),Qn=null),l=!0;if(!l)return n.flags&256?(ot(n),n):(ot(n),null)}if(ot(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Wu(n,n.updateQueue),ke(n),null;case 4:return At(),e===null&&bs(n.stateNode.containerInfo),ke(n),null;case 10:return ft(n.type),ke(n),null;case 19:if(Ne(Je),l=n.memoizedState,l===null)return ke(n),null;if(a=(n.flags&128)!==0,u=l.rendering,u===null)if(a)Ll(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Du(e),u!==null){for(n.flags|=128,Ll(l,!1),e=u.updateQueue,n.updateQueue=e,Wu(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)_f(t,e),t=t.sibling;return we(Je,Je.current&1|2),n.child}e=e.sibling}l.tail!==null&&rn()>$u&&(n.flags|=128,a=!0,Ll(l,!1),n.lanes=4194304)}else{if(!a)if(e=Du(u),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Wu(n,e),Ll(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ve)return ke(n),null}else 2*rn()-l.renderingStartTime>$u&&t!==536870912&&(n.flags|=128,a=!0,Ll(l,!1),n.lanes=4194304);l.isBackwards?(u.sibling=n.child,n.child=u):(e=l.last,e!==null?e.sibling=u:n.child=u,l.last=u)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=rn(),n.sibling=null,e=Je.current,we(Je,a?e&1|2:e&1),n):(ke(n),null);case 22:case 23:return ot(n),io(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),t=n.updateQueue,t!==null&&Wu(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Ne(aa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),ft(Ke),ke(n),null;case 25:return null}throw Error(r(156,n.tag))}function Um(e,n){switch(to(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(Ke),At(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ga(n),null;case 13:if(ot(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ne(Je),null;case 4:return At(),null;case 10:return ft(n.type),null;case 22:case 23:return ot(n),io(),e!==null&&Ne(aa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ft(Ke),null;case 25:return null;default:return null}}function Hf(e,n){switch(to(n),n.tag){case 3:ft(Ke),At();break;case 26:case 27:case 5:ga(n);break;case 4:At();break;case 13:ot(n);break;case 19:Ne(Je);break;case 10:ft(n.type);break;case 22:case 23:ot(n),io(),e!==null&&Ne(aa);break;case 24:ft(Ke)}}var Bm={getCacheForType:function(e){var n=fn(Ke),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,_e=0,Oe=null,he=null,pe=0,ze=0,xn=null,pt=!1,Xa=!1,ns=!1,gt=0,Le=0,Lt=0,da=0,ts=0,Hn=0,Za=0,Yl=null,Fn=null,as=!1,ls=0,$u=1/0,Fu=null,Yt=null,Pu=!1,ha=null,Gl=0,us=0,is=null,Ql=0,os=null;function Mn(){if((_e&2)!==0&&pe!==0)return pe&-pe;if(R.T!==null){var e=Ua;return e!==0?e:ys()}return ur()}function Lf(){Hn===0&&(Hn=(pe&536870912)===0||ve?En():536870912);var e=kn.current;return e!==null&&(e.flags|=32),Hn}function gn(e,n,t){(e===Oe&&ze===2||e.cancelPendingCommit!==null)&&(Va(e,0),vt(e,pe,Hn,!1)),yn(e,t),((_e&2)===0||e!==Oe)&&(e===Oe&&((_e&2)===0&&(da|=t),Le===4&&vt(e,pe,Hn,!1)),Pn(e))}function Yf(e,n,t){if((_e&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||$e(e,n),l=a?Gm(e,n):fs(e,n,!0),u=a;do{if(l===0){Xa&&!a&&vt(e,n,0,!1);break}else if(l===6)vt(e,n,0,!pt);else{if(t=e.current.alternate,u&&!Lm(t)){l=fs(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var s=e;l=Yl;var m=s.current.memoizedState.isDehydrated;if(m&&(Va(s,o).flags|=256),o=fs(s,o,!1),o!==2){if(ns&&!m){s.errorRecoveryDisabledLanes|=u,da|=u,l=4;break e}u=Fn,Fn=l,u!==null&&ss(u)}l=o}if(u=!1,l!==2)continue}}if(l===1){Va(e,0),vt(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){vt(a,n,Hn,!pt);break e}break;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(u=ls+300-rn(),10<u)){if(vt(a,n,Hn,!pt),mn(a,0)!==0)break e;a.timeoutHandle=fd(Gf.bind(null,a,t,Fn,Fu,as,n,Hn,da,Za,pt,2,-0,0),u);break e}Gf(a,t,Fn,Fu,as,n,Hn,da,Za,pt,0,-0,0)}}break}while(!0);Pn(e)}function ss(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function Gf(e,n,t,a,l,u,o,s,m,w,O,k,j){var q=n.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:Sy},Nf(n),n=Ay(),n!==null)){e.cancelPendingCommit=n(Kf.bind(null,e,t,a,l,o,s,m,1,k,j)),vt(e,u,o,!w);return}Kf(e,t,a,l,o,s,m,O,k,j)}function Lm(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],u=l.getSnapshot;l=l.value;try{if(!An(u(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vt(e,n,t,a){n&=~ts,n&=~da,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var u=31-ee(l),o=1<<u;a[u]=-1,l&=~o}t!==0&&ol(e,t,n)}function ei(){return(_e&6)===0?(Il(0),!1):!0}function rs(){if(he!==null){if(ze===0)var e=he.return;else e=he,ct=sa=null,yo(e),ka=null,Tl=0,e=he;for(;e!==null;)Hf(e.alternate,e),e=e.return;he=null}}function Va(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,uy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rs(),Oe=e,he=t=Ht(e.current,null),pe=n,ze=0,xn=null,pt=!1,Xa=$e(e,n),ns=!1,Za=Hn=ts=da=Lt=Le=0,Fn=Yl=null,as=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-ee(a),u=1<<l;n|=e[l],a&=~u}return gt=n,Tu(),t}function Qf(e,n){fe=null,R.H=$n,n===El?(n=ac(),ze=3):n===ec?(n=ac(),ze=4):ze=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xn=n,he===null&&(Le=1,Iu(e,Nn(n,e.current)))}function If(){var e=R.H;return R.H=$n,e===null?$n:e}function Xf(){var e=R.A;return R.A=Bm,e}function cs(){Le=4,pt||(pe&4194176)!==pe&&kn.current!==null||(Xa=!0),(Lt&134217727)===0&&(da&134217727)===0||Oe===null||vt(Oe,pe,Hn,!1)}function fs(e,n,t){var a=_e;_e|=2;var l=If(),u=Xf();(Oe!==e||pe!==n)&&(Fu=null,Va(e,n)),n=!1;var o=Le;e:do try{if(ze!==0&&he!==null){var s=he,m=xn;switch(ze){case 8:rs(),o=6;break e;case 3:case 2:case 6:kn.current===null&&(n=!0);var w=ze;if(ze=0,xn=null,Ja(e,s,m,w),t&&Xa){o=0;break e}break;default:w=ze,ze=0,xn=null,Ja(e,s,m,w)}}Ym(),o=Le;break}catch(O){Qf(e,O)}while(!0);return n&&e.shellSuspendCounter++,ct=sa=null,_e=a,R.H=l,R.A=u,he===null&&(Oe=null,pe=0,Tu()),o}function Ym(){for(;he!==null;)Zf(he)}function Gm(e,n){var t=_e;_e|=2;var a=If(),l=Xf();Oe!==e||pe!==n?(Fu=null,$u=rn()+500,Va(e,n)):Xa=$e(e,n);e:do try{if(ze!==0&&he!==null){n=he;var u=xn;n:switch(ze){case 1:ze=0,xn=null,Ja(e,n,u,1);break;case 2:if(nc(u)){ze=0,xn=null,Vf(n);break}n=function(){ze===2&&Oe===e&&(ze=7),Pn(e)},u.then(n,n);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:nc(u)?(ze=0,xn=null,Vf(n)):(ze=0,xn=null,Ja(e,n,u,7));break;case 5:var o=null;switch(he.tag){case 26:o=he.memoizedState;case 5:case 27:var s=he;if(!o||Ed(o)){ze=0,xn=null;var m=s.sibling;if(m!==null)he=m;else{var w=s.return;w!==null?(he=w,ni(w)):he=null}break n}}ze=0,xn=null,Ja(e,n,u,5);break;case 6:ze=0,xn=null,Ja(e,n,u,6);break;case 8:rs(),Le=6;break e;default:throw Error(r(462))}}Qm();break}catch(O){Qf(e,O)}while(!0);return ct=sa=null,R.H=a,R.A=l,_e=t,he!==null?0:(Oe=null,pe=0,Tu(),Le)}function Qm(){for(;he!==null&&!Mi();)Zf(he)}function Zf(e){var n=mf(e.alternate,e,gt);e.memoizedProps=e.pendingProps,n===null?ni(e):he=n}function Vf(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=sf(t,n,n.pendingProps,n.type,void 0,pe);break;case 11:n=sf(t,n,n.pendingProps,n.type.render,n.ref,pe);break;case 5:yo(n);default:Hf(t,n),n=he=_f(n,gt),n=mf(t,n,gt)}e.memoizedProps=e.pendingProps,n===null?ni(e):he=n}function Ja(e,n,t,a){ct=sa=null,yo(n),ka=null,Tl=0;var l=n.return;try{if(Cm(e,l,n,t,pe)){Le=1,Iu(e,Nn(t,e.current)),he=null;return}}catch(u){if(l!==null)throw he=l,u;Le=1,Iu(e,Nn(t,e.current)),he=null;return}n.flags&32768?(ve||a===1?e=!0:Xa||(pe&536870912)!==0?e=!1:(pt=e=!0,(a===2||a===3||a===6)&&(a=kn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Jf(n,e)):ni(n)}function ni(e){var n=e;do{if((n.flags&32768)!==0){Jf(n,pt);return}e=n.return;var t=_m(n.alternate,n,gt);if(t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);Le===0&&(Le=5)}function Jf(e,n){do{var t=Um(e.alternate,e);if(t!==null){t.flags&=32767,he=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=t}while(e!==null);Le=6,he=null}function Kf(e,n,t,a,l,u,o,s,m,w){var O=R.T,k=L.p;try{L.p=2,R.T=null,Im(e,n,t,a,k,l,u,o,s,m,w)}finally{R.T=O,L.p=k}}function Im(e,n,t,a,l,u,o,s){do Ka();while(ha!==null);if((_e&6)!==0)throw Error(r(327));var m=e.finishedWork;if(a=e.finishedLanes,m===null)return null;if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=m.lanes|m.childLanes;if(w|=Pi,ba(e,a,w,u,o,s),e===Oe&&(he=Oe=null,pe=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||Pu||(Pu=!0,us=w,is=t,Jm(va,function(){return Ka(),null})),t=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||t?(t=R.T,R.T=null,u=L.p,L.p=2,o=_e,_e|=4,Dm(e,m),Of(m,e),mm(As,e.containerInfo),hi=!!Es,As=Es=null,e.current=m,jf(e,m.alternate,m),qi(),_e=o,L.p=u,R.T=t):e.current=m,Pu?(Pu=!1,ha=e,Gl=a):Wf(e,w),w=e.pendingLanes,w===0&&(Yt=null),Y(m.stateNode),Pn(e),n!==null)for(l=e.onRecoverableError,m=0;m<n.length;m++)w=n[m],l(w.value,{componentStack:w.stack});return(Gl&3)!==0&&Ka(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===os?Ql++:(Ql=0,os=e):Ql=0,Il(0),null}function Wf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xl(n)))}function Ka(){if(ha!==null){var e=ha,n=us;us=0;var t=lr(Gl),a=R.T,l=L.p;try{if(L.p=32>t?32:t,R.T=null,ha===null)var u=!1;else{t=is,is=null;var o=ha,s=Gl;if(ha=null,Gl=0,(_e&6)!==0)throw Error(r(331));var m=_e;if(_e|=4,Rf(o.current),Cf(o,o.current,s,t),_e=m,Il(0,!1),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Vt,o)}catch{}u=!0}return u}finally{L.p=l,R.T=a,Wf(e,n)}}return!1}function $f(e,n,t){n=Nn(t,n),n=Oo(e.stateNode,n,2),e=kt(e,n,2),e!==null&&(yn(e,2),Pn(e))}function qe(e,n,t){if(e.tag===3)$f(e,e,t);else for(;n!==null;){if(n.tag===3){$f(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yt===null||!Yt.has(a))){e=Nn(t,e),t=Pc(2),a=kt(n,t,2),a!==null&&(ef(t,a,n,e),yn(a,2),Pn(a));break}}n=n.return}}function ds(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Hm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(ns=!0,l.add(t),e=Xm.bind(null,e,n,t),n.then(e,e))}function Xm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Oe===e&&(pe&t)===t&&(Le===4||Le===3&&(pe&62914560)===pe&&300>rn()-ls?(_e&2)===0&&Va(e,0):ts|=t,Za===pe&&(Za=0)),Pn(e)}function Ff(e,n){n===0&&(n=Be()),e=Mt(e,n),e!==null&&(yn(e,n),Pn(e))}function Zm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ff(e,t)}function Vm(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),Ff(e,t)}function Jm(e,n){return tl(e,n)}var ti=null,Wa=null,hs=!1,ai=!1,ms=!1,ma=0;function Pn(e){e!==Wa&&e.next===null&&(Wa===null?ti=Wa=e:Wa=Wa.next=e),ai=!0,hs||(hs=!0,Wm(Km))}function Il(e,n){if(!ms&&ai){ms=!0;do for(var t=!1,a=ti;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var u=0;else{var o=a.suspendedLanes,s=a.pingedLanes;u=(1<<31-ee(42|e)+1)-1,u&=l&~(o&~s),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(t=!0,nd(a,u))}else u=pe,u=mn(a,a===Oe?u:0),(u&3)===0||$e(a,u)||(t=!0,nd(a,u));a=a.next}while(t);ms=!1}}function Km(){ai=hs=!1;var e=0;ma!==0&&(ly()&&(e=ma),ma=0);for(var n=rn(),t=null,a=ti;a!==null;){var l=a.next,u=Pf(a,n);u===0?(a.next=null,t===null?ti=l:t.next=l,l===null&&(Wa=t)):(t=a,(e!==0||(u&3)!==0)&&(ai=!0)),a=l}Il(e)}function Pf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var o=31-ee(u),s=1<<o,m=l[o];m===-1?((s&t)===0||(s&a)!==0)&&(l[o]=il(s,n)):m<=n&&(e.expiredLanes|=s),u&=~s}if(n=Oe,t=pe,t=mn(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&ze===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&al(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||$e(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&al(a),lr(t)){case 2:case 8:t=ul;break;case 32:t=va;break;case 268435456:t=du;break;default:t=va}return a=ed.bind(null,e),t=tl(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&al(a),e.callbackPriority=2,e.callbackNode=null,2}function ed(e,n){var t=e.callbackNode;if(Ka()&&e.callbackNode!==t)return null;var a=pe;return a=mn(e,e===Oe?a:0),a===0?null:(Yf(e,a,n),Pf(e,rn()),e.callbackNode!=null&&e.callbackNode===t?ed.bind(null,e):null)}function nd(e,n){if(Ka())return null;Yf(e,n,!0)}function Wm(e){iy(function(){(_e&6)!==0?tl(ll,e):e()})}function ys(){return ma===0&&(ma=En()),ma}function td(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gu(""+e)}function ad(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function $m(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var u=td((l[bn]||null).action),o=a.submitter;o&&(n=(n=o[bn]||null)?td(n.formAction):o.getAttribute("formAction"),n!==null&&(u=n,o=null));var s=new Su("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ma!==0){var m=o?ad(l,o):new FormData(l);To(t,{pending:!0,data:m,method:l.method,action:u},null,m)}}else typeof u=="function"&&(s.preventDefault(),m=o?ad(l,o):new FormData(l),To(t,{pending:!0,data:m,method:l.method,action:u},u,m))},currentTarget:l}]})}}for(var ps=0;ps<Jr.length;ps++){var gs=Jr[ps],Fm=gs.toLowerCase(),Pm=gs[0].toUpperCase()+gs.slice(1);Gn(Fm,"on"+Pm)}Gn(Qr,"onAnimationEnd"),Gn(Ir,"onAnimationIteration"),Gn(Xr,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(pm,"onTransitionRun"),Gn(gm,"onTransitionStart"),Gn(vm,"onTransitionCancel"),Gn(Zr,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function ld(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var u=void 0;if(n)for(var o=a.length-1;0<=o;o--){var s=a[o],m=s.instance,w=s.currentTarget;if(s=s.listener,m!==u&&l.isPropagationStopped())break e;u=s,l.currentTarget=w;try{u(l)}catch(O){Qu(O)}l.currentTarget=null,u=m}else for(o=0;o<a.length;o++){if(s=a[o],m=s.instance,w=s.currentTarget,s=s.listener,m!==u&&l.isPropagationStopped())break e;u=s,l.currentTarget=w;try{u(l)}catch(O){Qu(O)}l.currentTarget=null,u=m}}}}function me(e,n){var t=n[Ni];t===void 0&&(t=n[Ni]=new Set);var a=e+"__bubble";t.has(a)||(ud(n,e,2,!1),t.add(a))}function vs(e,n,t){var a=0;n&&(a|=4),ud(t,e,a,n)}var li="_reactListening"+Math.random().toString(36).slice(2);function bs(e){if(!e[li]){e[li]=!0,or.forEach(function(t){t!=="selectionchange"&&(ey.has(t)||vs(t,!1,e),vs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[li]||(n[li]=!0,vs("selectionchange",!1,n))}}function ud(e,n,t,a){switch(qd(n)){case 2:var l=xy;break;case 8:l=My;break;default:l=Ns}t=l.bind(null,n,t,e),l=void 0,!Li||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ws(e,n,t,a,l){var u=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=a.return;o!==null;){var m=o.tag;if((m===3||m===4)&&(m=o.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Jt(s),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){a=u=o;continue e}s=s.parentNode}}a=a.return}br(function(){var w=u,O=Bi(t),k=[];e:{var j=Vr.get(e);if(j!==void 0){var q=Su,F=e;switch(e){case"keypress":if(bu(t)===0)break e;case"keydown":case"keyup":q=Vh;break;case"focusin":F="focus",q=Ii;break;case"focusout":F="blur",q=Ii;break;case"beforeblur":case"afterblur":q=Ii;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Wh;break;case Qr:case Ir:case Xr:q=Bh;break;case Zr:q=Fh;break;case"scroll":case"scrollend":q=Dh;break;case"wheel":q=em;break;case"copy":case"cut":case"paste":q=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Tr;break;case"toggle":case"beforetoggle":q=tm}var oe=(n&4)!==0,Ye=!oe&&(e==="scroll"||e==="scrollend"),S=oe?j!==null?j+"Capture":null:j;oe=[];for(var b=w,A;b!==null;){var C=b;if(A=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||A===null||S===null||(C=cl(b,S),C!=null&&oe.push(Zl(b,C,A))),Ye)break;b=b.return}0<oe.length&&(j=new q(j,F,null,t,O),k.push({event:j,listeners:oe}))}}if((n&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",j&&t!==Ui&&(F=t.relatedTarget||t.fromElement)&&(Jt(F)||F[wa]))break e;if((q||j)&&(j=O.window===O?O:(j=O.ownerDocument)?j.defaultView||j.parentWindow:window,q?(F=t.relatedTarget||t.toElement,q=w,F=F?Jt(F):null,F!==null&&(Ye=ae(F),oe=F.tag,F!==Ye||oe!==5&&oe!==27&&oe!==6)&&(F=null)):(q=null,F=w),q!==F)){if(oe=Er,C="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Tr,C="onPointerLeave",S="onPointerEnter",b="pointer"),Ye=q==null?j:rl(q),A=F==null?j:rl(F),j=new oe(C,b+"leave",q,t,O),j.target=Ye,j.relatedTarget=A,C=null,Jt(O)===w&&(oe=new oe(S,b+"enter",F,t,O),oe.target=A,oe.relatedTarget=Ye,C=oe),Ye=C,q&&F)n:{for(oe=q,S=F,b=0,A=oe;A;A=$a(A))b++;for(A=0,C=S;C;C=$a(C))A++;for(;0<b-A;)oe=$a(oe),b--;for(;0<A-b;)S=$a(S),A--;for(;b--;){if(oe===S||S!==null&&oe===S.alternate)break n;oe=$a(oe),S=$a(S)}oe=null}else oe=null;q!==null&&id(k,j,q,oe,!1),F!==null&&Ye!==null&&id(k,Ye,F,oe,!0)}}e:{if(j=w?rl(w):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var $=Nr;else if(zr(j))if(Dr)$=dm;else{$=cm;var de=rm}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?w&&_i(w.elementType)&&($=Nr):$=fm;if($&&($=$(e,w))){Cr(k,$,t,O);break e}de&&de(e,j,w),e==="focusout"&&w&&j.type==="number"&&w.memoizedProps.value!=null&&ki(j,"number",j.value)}switch(de=w?rl(w):window,e){case"focusin":(zr(de)||de.contentEditable==="true")&&(Oa=de,Wi=w,vl=null);break;case"focusout":vl=Wi=Oa=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Yr(k,t,O);break;case"selectionchange":if(ym)break;case"keydown":case"keyup":Yr(k,t,O)}var ne;if(Zi)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else qa?qr(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(jr&&t.locale!=="ko"&&(qa||le!=="onCompositionStart"?le==="onCompositionEnd"&&qa&&(ne=wr()):(xt=O,Yi="value"in xt?xt.value:xt.textContent,qa=!0)),de=ui(w,le),0<de.length&&(le=new Ar(le,e,null,t,O),k.push({event:le,listeners:de}),ne?le.data=ne:(ne=Or(t),ne!==null&&(le.data=ne)))),(ne=lm?um(e,t):im(e,t))&&(le=ui(w,"onBeforeInput"),0<le.length&&(de=new Ar("onBeforeInput","beforeinput",null,t,O),k.push({event:de,listeners:le}),de.data=ne)),$m(k,e,w,t,O)}ld(k,n)})}function Zl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,u=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=cl(e,t),l!=null&&a.unshift(Zl(e,l,u)),l=cl(e,n),l!=null&&a.push(Zl(e,l,u))),e=e.return}return a}function $a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function id(e,n,t,a,l){for(var u=n._reactName,o=[];t!==null&&t!==a;){var s=t,m=s.alternate,w=s.stateNode;if(s=s.tag,m!==null&&m===a)break;s!==5&&s!==26&&s!==27||w===null||(m=w,l?(w=cl(t,u),w!=null&&o.unshift(Zl(t,w,m))):l||(w=cl(t,u),w!=null&&o.push(Zl(t,w,m)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var ny=/\r\n?/g,ty=/\u0000|\uFFFD/g;function od(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(ty,"")}function sd(e,n){return n=od(n),od(e)===n}function ii(){}function xe(e,n,t,a,l,u){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ja(e,""+a);break;case"className":mu(e,"class",a);break;case"tabIndex":mu(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":mu(e,t,a);break;case"style":gr(e,a,u);break;case"data":if(n!=="object"){mu(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gu(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(n!=="input"&&xe(e,n,"name",l.name,l,null),xe(e,n,"formEncType",l.formEncType,l,null),xe(e,n,"formMethod",l.formMethod,l,null),xe(e,n,"formTarget",l.formTarget,l,null)):(xe(e,n,"encType",l.encType,l,null),xe(e,n,"method",l.method,l,null),xe(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gu(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=ii);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=gu(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":me("beforetoggle",e),me("toggle",e),hu(e,"popover",a);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hu(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Ch.get(t)||t,hu(e,t,a))}}function Ss(e,n,t,a,l,u){switch(t){case"style":gr(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),u=e[bn]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(n,u,l),typeof a=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):hu(e,t,a)}}}function on(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var a=!1,l=!1,u;for(u in t)if(t.hasOwnProperty(u)){var o=t[u];if(o!=null)switch(u){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xe(e,n,u,o,t,null)}}l&&xe(e,n,"srcSet",t.srcSet,t,null),a&&xe(e,n,"src",t.src,t,null);return;case"input":me("invalid",e);var s=u=o=l=null,m=null,w=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":l=O;break;case"type":o=O;break;case"checked":m=O;break;case"defaultChecked":w=O;break;case"value":u=O;break;case"defaultValue":s=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:xe(e,n,a,O,t,null)}}hr(e,u,s,m,w,o,l,!1),yu(e);return;case"select":me("invalid",e),a=o=u=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:xe(e,n,l,s,t,null)}n=u,t=o,e.multiple=!!a,n!=null?Ta(e,!!a,n,!1):t!=null&&Ta(e,!!a,t,!0);return;case"textarea":me("invalid",e),u=l=a=null;for(o in t)if(t.hasOwnProperty(o)&&(s=t[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":l=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:xe(e,n,o,s,t,null)}yr(e,a,l,u),yu(e);return;case"option":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xe(e,n,m,a,t,null)}return;case"dialog":me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(a=0;a<Xl.length;a++)me(Xl[a],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(a=t[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xe(e,n,w,a,t,null)}return;default:if(_i(n)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&Ss(e,n,O,a,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null&&xe(e,n,s,a,t,null))}function ay(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,o=null,s=null,m=null,w=null,O=null;for(q in t){var k=t[q];if(t.hasOwnProperty(q)&&k!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":m=k;default:a.hasOwnProperty(q)||xe(e,n,q,null,a,k)}}for(var j in a){var q=a[j];if(k=t[j],a.hasOwnProperty(j)&&(q!=null||k!=null))switch(j){case"type":u=q;break;case"name":l=q;break;case"checked":w=q;break;case"defaultChecked":O=q;break;case"value":o=q;break;case"defaultValue":s=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:q!==k&&xe(e,n,j,q,a,k)}}Ri(e,o,s,m,w,O,u,l);return;case"select":q=o=s=j=null;for(u in t)if(m=t[u],t.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":q=m;default:a.hasOwnProperty(u)||xe(e,n,u,null,a,m)}for(l in a)if(u=a[l],m=t[l],a.hasOwnProperty(l)&&(u!=null||m!=null))switch(l){case"value":j=u;break;case"defaultValue":s=u;break;case"multiple":o=u;default:u!==m&&xe(e,n,l,u,a,m)}n=s,t=o,a=q,j!=null?Ta(e,!!t,j,!1):!!a!=!!t&&(n!=null?Ta(e,!!t,n,!0):Ta(e,!!t,t?[]:"",!1));return;case"textarea":q=j=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:xe(e,n,s,null,a,l)}for(o in a)if(l=a[o],u=t[o],a.hasOwnProperty(o)&&(l!=null||u!=null))switch(o){case"value":j=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==u&&xe(e,n,o,l,a,u)}mr(e,j,q);return;case"option":for(var F in t)if(j=t[F],t.hasOwnProperty(F)&&j!=null&&!a.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:xe(e,n,F,null,a,j)}for(m in a)if(j=a[m],q=t[m],a.hasOwnProperty(m)&&j!==q&&(j!=null||q!=null))switch(m){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:xe(e,n,m,j,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)j=t[oe],t.hasOwnProperty(oe)&&j!=null&&!a.hasOwnProperty(oe)&&xe(e,n,oe,null,a,j);for(w in a)if(j=a[w],q=t[w],a.hasOwnProperty(w)&&j!==q&&(j!=null||q!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:xe(e,n,w,j,a,q)}return;default:if(_i(n)){for(var Ye in t)j=t[Ye],t.hasOwnProperty(Ye)&&j!==void 0&&!a.hasOwnProperty(Ye)&&Ss(e,n,Ye,void 0,a,j);for(O in a)j=a[O],q=t[O],!a.hasOwnProperty(O)||j===q||j===void 0&&q===void 0||Ss(e,n,O,j,a,q);return}}for(var S in t)j=t[S],t.hasOwnProperty(S)&&j!=null&&!a.hasOwnProperty(S)&&xe(e,n,S,null,a,j);for(k in a)j=a[k],q=t[k],!a.hasOwnProperty(k)||j===q||j==null&&q==null||xe(e,n,k,j,a,q)}var Es=null,As=null;function oi(e){return e.nodeType===9?e:e.ownerDocument}function rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var js=null;function ly(){var e=window.event;return e&&e.type==="popstate"?e===js?!1:(js=e,!0):(js=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch(oy)}:fd;function oy(e){setTimeout(function(){throw e})}function xs(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),eu(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);eu(n)}function Ms(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ms(t),Di(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function sy(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[sl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Xn(e.nextSibling),e===null)break}return null}function ry(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xn(e.nextSibling),e===null))return null;return e}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function hd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function md(e,n,t){switch(n=oi(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Ln=new Map,yd=new Set;function si(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var bt=L.d;L.d={f:cy,r:fy,D:dy,C:hy,L:my,m:yy,X:gy,S:py,M:vy};function cy(){var e=bt.f(),n=ei();return e||n}function fy(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?Yc(n):bt.r(e)}var Fa=typeof document>"u"?null:document;function pd(e,n,t){var a=Fa;if(a&&typeof n=="string"&&n){var l=zn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),yd.has(l)||(yd.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),on(n,"link",e),Fe(n),a.head.appendChild(n)))}}function dy(e){bt.D(e),pd("dns-prefetch",e,null)}function hy(e,n){bt.C(e,n),pd("preconnect",e,n)}function my(e,n,t){bt.L(e,n,t);var a=Fa;if(a&&e&&n){var l='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+zn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+zn(t.imageSizes)+'"]')):l+='[href="'+zn(e)+'"]';var u=l;switch(n){case"style":u=Pa(e);break;case"script":u=el(e)}Ln.has(u)||(e=K({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ln.set(u,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Vl(u))||n==="script"&&a.querySelector(Jl(u))||(n=a.createElement("link"),on(n,"link",e),Fe(n),a.head.appendChild(n)))}}function yy(e,n){bt.m(e,n);var t=Fa;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+zn(a)+'"][href="'+zn(e)+'"]',u=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=el(e)}if(!Ln.has(u)&&(e=K({rel:"modulepreload",href:e},n),Ln.set(u,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Jl(u)))return}a=t.createElement("link"),on(a,"link",e),Fe(a),t.head.appendChild(a)}}}function py(e,n,t){bt.S(e,n,t);var a=Fa;if(a&&e){var l=Ea(a).hoistableStyles,u=Pa(e);n=n||"default";var o=l.get(u);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(Vl(u)))s.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ln.get(u))&&qs(e,t);var m=o=a.createElement("link");Fe(m),on(m,"link",e),m._p=new Promise(function(w,O){m.onload=w,m.onerror=O}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ri(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:s},l.set(u,o)}}}function gy(e,n){bt.X(e,n);var t=Fa;if(t&&e){var a=Ea(t).hoistableScripts,l=el(e),u=a.get(l);u||(u=t.querySelector(Jl(l)),u||(e=K({src:e,async:!0},n),(n=Ln.get(l))&&Os(e,n),u=t.createElement("script"),Fe(u),on(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(l,u))}}function vy(e,n){bt.M(e,n);var t=Fa;if(t&&e){var a=Ea(t).hoistableScripts,l=el(e),u=a.get(l);u||(u=t.querySelector(Jl(l)),u||(e=K({src:e,async:!0,type:"module"},n),(n=Ln.get(l))&&Os(e,n),u=t.createElement("script"),Fe(u),on(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(l,u))}}function gd(e,n,t,a){var l=(l=Vn.current)?si(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Pa(t.href),t=Ea(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Pa(t.href);var u=Ea(l).hoistableStyles,o=u.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,o),(u=l.querySelector(Vl(e)))&&!u._p&&(o.instance=u,o.state.loading=5),Ln.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ln.set(e,t),u||by(l,e,t,o.state))),n&&a===null)throw Error(r(528,""));return o}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=el(t),t=Ea(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Pa(e){return'href="'+zn(e)+'"'}function Vl(e){return'link[rel="stylesheet"]['+e+"]"}function vd(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function by(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),on(n,"link",t),Fe(n),e.head.appendChild(n))}function el(e){return'[src="'+zn(e)+'"]'}function Jl(e){return"script[async]"+e}function bd(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+zn(t.href)+'"]');if(a)return n.instance=a,Fe(a),a;var l=K({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),on(a,"style",l),ri(a,t.precedence,e),n.instance=a;case"stylesheet":l=Pa(t.href);var u=e.querySelector(Vl(l));if(u)return n.state.loading|=4,n.instance=u,Fe(u),u;a=vd(t),(l=Ln.get(l))&&qs(a,l),u=(e.ownerDocument||e).createElement("link"),Fe(u);var o=u;return o._p=new Promise(function(s,m){o.onload=s,o.onerror=m}),on(u,"link",a),n.state.loading|=4,ri(u,t.precedence,e),n.instance=u;case"script":return u=el(t.src),(l=e.querySelector(Jl(u)))?(n.instance=l,Fe(l),l):(a=t,(l=Ln.get(u))&&(a=K({},t),Os(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),on(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,ri(a,t.precedence,e));return n.instance}function ri(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,u=l,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===n)u=s;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function qs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Os(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ci=null;function wd(e,n,t){if(ci===null){var a=new Map,l=ci=new Map;l.set(t,a)}else l=ci,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var u=t[l];if(!(u[sl]||u[cn]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(n)||"";o=e+o;var s=a.get(o);s?s.push(u):a.set(o,[u])}}return a}function Sd(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function wy(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function Sy(){}function Ey(e,n,t){if(Kl===null)throw Error(r(475));var a=Kl;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Pa(t.href),u=e.querySelector(Vl(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=fi.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=u,Fe(u);return}u=e.ownerDocument||e,t=vd(t),(l=Ln.get(l))&&qs(t,l),u=u.createElement("link"),Fe(u);var o=u;o._p=new Promise(function(s,m){o.onload=s,o.onerror=m}),on(u,"link",t),n.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=fi.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ay(){if(Kl===null)throw Error(r(475));var e=Kl;return e.stylesheets&&e.count===0&&zs(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function fi(){if(this.count--,this.count===0){if(this.stylesheets)zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var di=null;function zs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,di=new Map,n.forEach(Ty,e),di=null,fi.call(e))}function Ty(e,n){if(!(n.state.loading&4)){var t=di.get(e);if(t)var a=t.get(null);else{t=new Map,di.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var o=l[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}l=n.instance,o=l.getAttribute("data-precedence"),u=t.get(o)||a,u===a&&t.set(null,l),t.set(o,l),this.count++,a=fi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Wl={$$typeof:B,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function jy(e,n,t,a,l,u,o,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Ad(e,n,t,a,l,u,o,s,m,w,O,k){return e=new jy(e,n,t,o,s,m,w,k),n=1,u===!0&&(n|=24),u=Bn(3,null,null,n),e.current=u,u.stateNode=e,n=oo(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:a,isDehydrated:t,cache:n},Go(u),e}function Td(e){return e?(e=Na,e):Na}function jd(e,n,t,a,l,u){l=Td(l),a.context===null?a.context=l:a.pendingContext=l,a=Rt(n),a.payload={element:t},u=u===void 0?null:u,u!==null&&(a.callback=u),t=kt(e,a,n),t!==null&&(gn(t,e,n),Dl(t,e,n))}function xd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Cs(e,n){xd(e,n),(e=e.alternate)&&xd(e,n)}function Md(e){if(e.tag===13){var n=Mt(e,67108864);n!==null&&gn(n,e,67108864),Cs(e,67108864)}}var hi=!0;function xy(e,n,t,a){var l=R.T;R.T=null;var u=L.p;try{L.p=2,Ns(e,n,t,a)}finally{L.p=u,R.T=l}}function My(e,n,t,a){var l=R.T;R.T=null;var u=L.p;try{L.p=8,Ns(e,n,t,a)}finally{L.p=u,R.T=l}}function Ns(e,n,t,a){if(hi){var l=Ds(a);if(l===null)ws(e,n,a,mi,t),Od(e,a);else if(Oy(l,e,n,t,a))a.stopPropagation();else if(Od(e,a),n&4&&-1<qy.indexOf(e)){for(;l!==null;){var u=Sa(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=an(u.pendingLanes);if(o!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var m=1<<31-ee(o);s.entanglements[1]|=m,o&=~m}Pn(u),(_e&6)===0&&($u=rn()+500,Il(0))}}break;case 13:s=Mt(u,2),s!==null&&gn(s,u,2),ei(),Cs(u,2)}if(u=Ds(a),u===null&&ws(e,n,a,mi,t),u===l)break;l=u}l!==null&&a.stopPropagation()}else ws(e,n,a,null,t)}}function Ds(e){return e=Bi(e),Rs(e)}var mi=null;function Rs(e){if(mi=null,e=Jt(e),e!==null){var n=ae(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=Ee(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mi=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fu()){case ll:return 2;case ul:return 8;case va:case Oi:return 32;case du:return 268435456;default:return 32}default:return 32}}var ks=!1,Gt=null,Qt=null,It=null,$l=new Map,Fl=new Map,Xt=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Od(e,n){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":$l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(n.pointerId)}}function Pl(e,n,t,a,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Sa(n),n!==null&&Md(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Oy(e,n,t,a,l){switch(n){case"focusin":return Gt=Pl(Gt,e,n,t,a,l),!0;case"dragenter":return Qt=Pl(Qt,e,n,t,a,l),!0;case"mouseover":return It=Pl(It,e,n,t,a,l),!0;case"pointerover":var u=l.pointerId;return $l.set(u,Pl($l.get(u)||null,e,n,t,a,l)),!0;case"gotpointercapture":return u=l.pointerId,Fl.set(u,Pl(Fl.get(u)||null,e,n,t,a,l)),!0}return!1}function zd(e){var n=Jt(e.target);if(n!==null){var t=ae(n);if(t!==null){if(n=t.tag,n===13){if(n=Ee(t),n!==null){e.blockedOn=n,Ah(e.priority,function(){if(t.tag===13){var a=Mn(),l=Mt(t,a);l!==null&&gn(l,t,a),Cs(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ds(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ui=a,t.target.dispatchEvent(a),Ui=null}else return n=Sa(t),n!==null&&Md(n),e.blockedOn=t,!1;n.shift()}return!0}function Cd(e,n,t){yi(e)&&t.delete(n)}function zy(){ks=!1,Gt!==null&&yi(Gt)&&(Gt=null),Qt!==null&&yi(Qt)&&(Qt=null),It!==null&&yi(It)&&(It=null),$l.forEach(Cd),Fl.forEach(Cd)}function pi(e,n){e.blockedOn===n&&(e.blockedOn=null,ks||(ks=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zy)))}var gi=null;function Nd(e){gi!==e&&(gi=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gi===e&&(gi=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Rs(a||t)===null)continue;break}var u=Sa(t);u!==null&&(e.splice(n,3),n-=3,To(u,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function eu(e){function n(m){return pi(m,e)}Gt!==null&&pi(Gt,e),Qt!==null&&pi(Qt,e),It!==null&&pi(It,e),$l.forEach(n),Fl.forEach(n);for(var t=0;t<Xt.length;t++){var a=Xt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Xt.length&&(t=Xt[0],t.blockedOn===null);)zd(t),t.blockedOn===null&&Xt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],u=t[a+1],o=l[bn]||null;if(typeof u=="function")o||Nd(t);else if(o){var s=null;if(u&&u.hasAttribute("formAction")){if(l=u,o=u[bn]||null)s=o.formAction;else if(Rs(l)!==null)continue}else s=o.action;typeof s=="function"?t[a+1]=s:(t.splice(a,3),a-=3),Nd(t)}}}function _s(e){this._internalRoot=e}vi.prototype.render=_s.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=Mn();jd(t,a,e,n,null,null)},vi.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ka(),jd(e.current,2,null,e,null,null),ei(),n[wa]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ur();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xt.length&&n!==0&&n<Xt[t].priority;t++);Xt.splice(t,0,e),t===0&&zd(e)}};var Dd=f.version;if(Dd!=="19.0.0")throw Error(r(527,Dd,"19.0.0"));L.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=z(n),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Cy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Jt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Vt=bi.inject(Cy),hn=bi}catch{}}return tu.createRoot=function(e,n){if(!h(e))throw Error(r(299));var t=!1,a="",l=Kc,u=Wc,o=$c,s=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(s=n.unstable_transitionCallbacks)),n=Ad(e,1,!1,null,null,t,a,l,u,o,s,null),e[wa]=n.current,bs(e.nodeType===8?e.parentNode:e),new _s(n)},tu.hydrateRoot=function(e,n,t){if(!h(e))throw Error(r(299));var a=!1,l="",u=Kc,o=Wc,s=$c,m=null,w=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks),t.formState!==void 0&&(w=t.formState)),n=Ad(e,1,!0,n,t??null,a,l,u,o,s,m,w),n.context=Td(null),t=n.current,a=Mn(),l=Rt(a),l.callback=null,kt(t,l,a),n.current.lanes=a,yn(n,a),Pn(n),e[wa]=n.current,bs(e),new vi(n)},tu.version="19.0.0",tu}var Qd;function Gy(){if(Qd)return Hs.exports;Qd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),Hs.exports=Yy(),Hs.exports}var Qy=Gy();const Iy=ah(Qy);var au={},Id;function Xy(){if(Id)return au;Id=1,Object.defineProperty(au,"__esModule",{value:!0}),au.parse=T,au.serialize=y;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,f=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,h=Object.prototype.toString,p=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function T(N,B){const D=new p,X=N.length;if(X<2)return D;const G=(B==null?void 0:B.decode)||M;let U=0;do{const J=N.indexOf("=",U);if(J===-1)break;const Z=N.indexOf(";",U),ce=Z===-1?X:Z;if(J>ce){U=N.lastIndexOf(";",J-1)+1;continue}const P=x(N,U,J),Se=g(N,J,P),De=N.slice(P,Se);if(D[De]===void 0){let Te=x(N,J+1,ce),R=g(N,ce,Te);const K=G(N.slice(Te,R));D[De]=K}U=ce+1}while(U<X);return D}function x(N,B,D){do{const X=N.charCodeAt(B);if(X!==32&&X!==9)return B}while(++B<D);return D}function g(N,B,D){for(;B>D;){const X=N.charCodeAt(--B);if(X!==32&&X!==9)return B+1}return D}function y(N,B,D){const X=(D==null?void 0:D.encode)||encodeURIComponent;if(!i.test(N))throw new TypeError(`argument name is invalid: ${N}`);const G=X(B);if(!f.test(G))throw new TypeError(`argument val is invalid: ${B}`);let U=N+"="+G;if(!D)return U;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);U+="; Max-Age="+D.maxAge}if(D.domain){if(!c.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);U+="; Domain="+D.domain}if(D.path){if(!r.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);U+="; Path="+D.path}if(D.expires){if(!_(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);U+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(U+="; HttpOnly"),D.secure&&(U+="; Secure"),D.partitioned&&(U+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":U+="; Priority=Low";break;case"medium":U+="; Priority=Medium";break;case"high":U+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":U+="; SameSite=Strict";break;case"lax":U+="; SameSite=Lax";break;case"none":U+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return U}function M(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function _(N){return h.call(N)==="[object Date]"}return au}Xy();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xd="popstate";function Zy(i={}){function f(h,p){let{pathname:T="/",search:x="",hash:g=""}=ya(h.location.hash.substring(1));return!T.startsWith("/")&&!T.startsWith(".")&&(T="/"+T),Js("",{pathname:T,search:x,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function c(h,p){let T=h.document.querySelector("base"),x="";if(T&&T.getAttribute("href")){let g=h.location.href,y=g.indexOf("#");x=y===-1?g:g.slice(0,y)}return x+"#"+(typeof p=="string"?p:ou(p))}function r(h,p){Zn(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return Jy(f,c,r,i)}function Ue(i,f){if(i===!1||i===null||typeof i>"u")throw new Error(f)}function Zn(i,f){if(!i){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Vy(){return Math.random().toString(36).substring(2,10)}function Zd(i,f){return{usr:i.state,key:i.key,idx:f}}function Js(i,f,c=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof f=="string"?ya(f):f,state:c,key:f&&f.key||r||Vy()}}function ou({pathname:i="/",search:f="",hash:c=""}){return f&&f!=="?"&&(i+=f.charAt(0)==="?"?f:"?"+f),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function ya(i){let f={};if(i){let c=i.indexOf("#");c>=0&&(f.hash=i.substring(c),i=i.substring(0,c));let r=i.indexOf("?");r>=0&&(f.search=i.substring(r),i=i.substring(0,r)),i&&(f.pathname=i)}return f}function Jy(i,f,c,r={}){let{window:h=document.defaultView,v5Compat:p=!1}=r,T=h.history,x="POP",g=null,y=M();y==null&&(y=0,T.replaceState({...T.state,idx:y},""));function M(){return(T.state||{idx:null}).idx}function _(){x="POP";let G=M(),U=G==null?null:G-y;y=G,g&&g({action:x,location:X.location,delta:U})}function N(G,U){x="PUSH";let J=Js(X.location,G,U);c&&c(J,G),y=M()+1;let Z=Zd(J,y),ce=X.createHref(J);try{T.pushState(Z,"",ce)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;h.location.assign(ce)}p&&g&&g({action:x,location:X.location,delta:1})}function B(G,U){x="REPLACE";let J=Js(X.location,G,U);c&&c(J,G),y=M();let Z=Zd(J,y),ce=X.createHref(J);T.replaceState(Z,"",ce),p&&g&&g({action:x,location:X.location,delta:0})}function D(G){let U=h.location.origin!=="null"?h.location.origin:h.location.href,J=typeof G=="string"?G:ou(G);return J=J.replace(/ $/,"%20"),Ue(U,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,U)}let X={get action(){return x},get location(){return i(h,T)},listen(G){if(g)throw new Error("A history only accepts one active listener");return h.addEventListener(Xd,_),g=G,()=>{h.removeEventListener(Xd,_),g=null}},createHref(G){return f(h,G)},createURL:D,encodeLocation(G){let U=D(G);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:N,replace:B,go(G){return T.go(G)}};return X}function lh(i,f,c="/"){return Ky(i,f,c,!1)}function Ky(i,f,c,r){let h=typeof f=="string"?ya(f):f,p=St(h.pathname||"/",c);if(p==null)return null;let T=uh(i);Wy(T);let x=null;for(let g=0;x==null&&g<T.length;++g){let y=op(p);x=up(T[g],y,r)}return x}function uh(i,f=[],c=[],r=""){let h=(p,T,x)=>{let g={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:T,route:p};g.relativePath.startsWith("/")&&(Ue(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length));let y=wt([r,g.relativePath]),M=c.concat(g);p.children&&p.children.length>0&&(Ue(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),uh(p.children,f,M,y)),!(p.path==null&&!p.index)&&f.push({path:y,score:ap(y,p.index),routesMeta:M})};return i.forEach((p,T)=>{var x;if(p.path===""||!((x=p.path)!=null&&x.includes("?")))h(p,T);else for(let g of ih(p.path))h(p,T,g)}),f}function ih(i){let f=i.split("/");if(f.length===0)return[];let[c,...r]=f,h=c.endsWith("?"),p=c.replace(/\?$/,"");if(r.length===0)return h?[p,""]:[p];let T=ih(r.join("/")),x=[];return x.push(...T.map(g=>g===""?p:[p,g].join("/"))),h&&x.push(...T),x.map(g=>i.startsWith("/")&&g===""?"/":g)}function Wy(i){i.sort((f,c)=>f.score!==c.score?c.score-f.score:lp(f.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var $y=/^:[\w-]+$/,Fy=3,Py=2,ep=1,np=10,tp=-2,Vd=i=>i==="*";function ap(i,f){let c=i.split("/"),r=c.length;return c.some(Vd)&&(r+=tp),f&&(r+=Py),c.filter(h=>!Vd(h)).reduce((h,p)=>h+($y.test(p)?Fy:p===""?ep:np),r)}function lp(i,f){return i.length===f.length&&i.slice(0,-1).every((r,h)=>r===f[h])?i[i.length-1]-f[f.length-1]:0}function up(i,f,c=!1){let{routesMeta:r}=i,h={},p="/",T=[];for(let x=0;x<r.length;++x){let g=r[x],y=x===r.length-1,M=p==="/"?f:f.slice(p.length)||"/",_=Ai({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},M),N=g.route;if(!_&&y&&c&&!r[r.length-1].route.index&&(_=Ai({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},M)),!_)return null;Object.assign(h,_.params),T.push({params:h,pathname:wt([p,_.pathname]),pathnameBase:fp(wt([p,_.pathnameBase])),route:N}),_.pathnameBase!=="/"&&(p=wt([p,_.pathnameBase]))}return T}function Ai(i,f){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,r]=ip(i.path,i.caseSensitive,i.end),h=f.match(c);if(!h)return null;let p=h[0],T=p.replace(/(.)\/+$/,"$1"),x=h.slice(1);return{params:r.reduce((y,{paramName:M,isOptional:_},N)=>{if(M==="*"){let D=x[N]||"";T=p.slice(0,p.length-D.length).replace(/(.)\/+$/,"$1")}const B=x[N];return _&&!B?y[M]=void 0:y[M]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:T,pattern:i}}function ip(i,f=!1,c=!0){Zn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],h="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,x,g)=>(r.push({paramName:x,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),h+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?h+="\\/*$":i!==""&&i!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),r]}function op(i){try{return i.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Zn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),i}}function St(i,f){if(f==="/")return i;if(!i.toLowerCase().startsWith(f.toLowerCase()))return null;let c=f.endsWith("/")?f.length-1:f.length,r=i.charAt(c);return r&&r!=="/"?null:i.slice(c)||"/"}function sp(i,f="/"){let{pathname:c,search:r="",hash:h=""}=typeof i=="string"?ya(i):i;return{pathname:c?c.startsWith("/")?c:rp(c,f):f,search:dp(r),hash:hp(h)}}function rp(i,f){let c=f.replace(/\/+$/,"").split("/");return i.split("/").forEach(h=>{h===".."?c.length>1&&c.pop():h!=="."&&c.push(h)}),c.length>1?c.join("/"):"/"}function Qs(i,f,c,r){return`Cannot include a '${i}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cp(i){return i.filter((f,c)=>c===0||f.route.path&&f.route.path.length>0)}function oh(i){let f=cp(i);return f.map((c,r)=>r===f.length-1?c.pathname:c.pathnameBase)}function sh(i,f,c,r=!1){let h;typeof i=="string"?h=ya(i):(h={...i},Ue(!h.pathname||!h.pathname.includes("?"),Qs("?","pathname","search",h)),Ue(!h.pathname||!h.pathname.includes("#"),Qs("#","pathname","hash",h)),Ue(!h.search||!h.search.includes("#"),Qs("#","search","hash",h)));let p=i===""||h.pathname==="",T=p?"/":h.pathname,x;if(T==null)x=c;else{let _=f.length-1;if(!r&&T.startsWith("..")){let N=T.split("/");for(;N[0]==="..";)N.shift(),_-=1;h.pathname=N.join("/")}x=_>=0?f[_]:"/"}let g=sp(h,x),y=T&&T!=="/"&&T.endsWith("/"),M=(p||T===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(y||M)&&(g.pathname+="/"),g}var wt=i=>i.join("/").replace(/\/\/+/g,"/"),fp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),dp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,hp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function mp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var rh=["POST","PUT","PATCH","DELETE"];new Set(rh);var yp=["GET",...rh];new Set(yp);var nl=E.createContext(null);nl.displayName="DataRouter";var Ti=E.createContext(null);Ti.displayName="DataRouterState";var ch=E.createContext({isTransitioning:!1});ch.displayName="ViewTransition";var pp=E.createContext(new Map);pp.displayName="Fetchers";var gp=E.createContext(null);gp.displayName="Await";var et=E.createContext(null);et.displayName="Navigation";var su=E.createContext(null);su.displayName="Location";var Et=E.createContext({outlet:null,matches:[],isDataRoute:!1});Et.displayName="Route";var Fs=E.createContext(null);Fs.displayName="RouteError";function vp(i,{relative:f}={}){Ue(ru(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=E.useContext(et),{hash:h,pathname:p,search:T}=cu(i,{relative:f}),x=p;return c!=="/"&&(x=p==="/"?c:wt([c,p])),r.createHref({pathname:x,search:T,hash:h})}function ru(){return E.useContext(su)!=null}function pa(){return Ue(ru(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(su).location}var fh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dh(i){E.useContext(et).static||E.useLayoutEffect(i)}function bp(){let{isDataRoute:i}=E.useContext(Et);return i?Np():wp()}function wp(){Ue(ru(),"useNavigate() may be used only in the context of a <Router> component.");let i=E.useContext(nl),{basename:f,navigator:c}=E.useContext(et),{matches:r}=E.useContext(Et),{pathname:h}=pa(),p=JSON.stringify(oh(r)),T=E.useRef(!1);return dh(()=>{T.current=!0}),E.useCallback((g,y={})=>{if(Zn(T.current,fh),!T.current)return;if(typeof g=="number"){c.go(g);return}let M=sh(g,JSON.parse(p),h,y.relative==="path");i==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:wt([f,M.pathname])),(y.replace?c.replace:c.push)(M,y.state,y)},[f,c,p,h,i])}E.createContext(null);function cu(i,{relative:f}={}){let{matches:c}=E.useContext(Et),{pathname:r}=pa(),h=JSON.stringify(oh(c));return E.useMemo(()=>sh(i,JSON.parse(h),r,f==="path"),[i,h,r,f])}function Sp(i,f){return hh(i,f)}function hh(i,f,c,r){var J;Ue(ru(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h,static:p}=E.useContext(et),{matches:T}=E.useContext(Et),x=T[T.length-1],g=x?x.params:{},y=x?x.pathname:"/",M=x?x.pathnameBase:"/",_=x&&x.route;{let Z=_&&_.path||"";mh(y,!_||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let N=pa(),B;if(f){let Z=typeof f=="string"?ya(f):f;Ue(M==="/"||((J=Z.pathname)==null?void 0:J.startsWith(M)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),B=Z}else B=N;let D=B.pathname||"/",X=D;if(M!=="/"){let Z=M.replace(/^\//,"").split("/");X="/"+D.replace(/^\//,"").split("/").slice(Z.length).join("/")}let G=!p&&c&&c.matches&&c.matches.length>0?c.matches:lh(i,{pathname:X});Zn(_||G!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Zn(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=xp(G&&G.map(Z=>Object.assign({},Z,{params:Object.assign({},g,Z.params),pathname:wt([M,h.encodeLocation?h.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?M:wt([M,h.encodeLocation?h.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),T,c,r);return f&&U?E.createElement(su.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},U):U}function Ep(){let i=Cp(),f=mp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},T=null;return console.error("Error handled by React Router default ErrorBoundary:",i),T=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},f),c?E.createElement("pre",{style:h},c):null,T)}var Ap=E.createElement(Ep,null),Tp=class extends E.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,f){return f.location!==i.location||f.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:f.error,location:f.location,revalidation:i.revalidation||f.revalidation}}componentDidCatch(i,f){console.error("React Router caught the following error during render",i,f)}render(){return this.state.error!==void 0?E.createElement(Et.Provider,{value:this.props.routeContext},E.createElement(Fs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jp({routeContext:i,match:f,children:c}){let r=E.useContext(nl);return r&&r.static&&r.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=f.route.id),E.createElement(Et.Provider,{value:i},c)}function xp(i,f=[],c=null,r=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(f.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let h=i,p=c==null?void 0:c.errors;if(p!=null){let g=h.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);Ue(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,g+1))}let T=!1,x=-1;if(c)for(let g=0;g<h.length;g++){let y=h[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(x=g),y.route.id){let{loaderData:M,errors:_}=c,N=y.route.loader&&!M.hasOwnProperty(y.route.id)&&(!_||_[y.route.id]===void 0);if(y.route.lazy||N){T=!0,x>=0?h=h.slice(0,x+1):h=[h[0]];break}}}return h.reduceRight((g,y,M)=>{let _,N=!1,B=null,D=null;c&&(_=p&&y.route.id?p[y.route.id]:void 0,B=y.route.errorElement||Ap,T&&(x<0&&M===0?(mh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,D=null):x===M&&(N=!0,D=y.route.hydrateFallbackElement||null)));let X=f.concat(h.slice(0,M+1)),G=()=>{let U;return _?U=B:N?U=D:y.route.Component?U=E.createElement(y.route.Component,null):y.route.element?U=y.route.element:U=g,E.createElement(jp,{match:y,routeContext:{outlet:g,matches:X,isDataRoute:c!=null},children:U})};return c&&(y.route.ErrorBoundary||y.route.errorElement||M===0)?E.createElement(Tp,{location:c.location,revalidation:c.revalidation,component:B,error:_,children:G(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):G()},null)}function Ps(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(i){let f=E.useContext(nl);return Ue(f,Ps(i)),f}function qp(i){let f=E.useContext(Ti);return Ue(f,Ps(i)),f}function Op(i){let f=E.useContext(Et);return Ue(f,Ps(i)),f}function er(i){let f=Op(i),c=f.matches[f.matches.length-1];return Ue(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function zp(){return er("useRouteId")}function Cp(){var r;let i=E.useContext(Fs),f=qp("useRouteError"),c=er("useRouteError");return i!==void 0?i:(r=f.errors)==null?void 0:r[c]}function Np(){let{router:i}=Mp("useNavigate"),f=er("useNavigate"),c=E.useRef(!1);return dh(()=>{c.current=!0}),E.useCallback(async(h,p={})=>{Zn(c.current,fh),c.current&&(typeof h=="number"?i.navigate(h):await i.navigate(h,{fromRouteId:f,...p}))},[i,f])}var Jd={};function mh(i,f,c){!f&&!Jd[i]&&(Jd[i]=!0,Zn(!1,c))}E.memo(Dp);function Dp({routes:i,future:f,state:c}){return hh(i,void 0,c,f)}function Ks(i){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Rp({basename:i="/",children:f=null,location:c,navigationType:r="POP",navigator:h,static:p=!1}){Ue(!ru(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=i.replace(/^\/*/,"/"),x=E.useMemo(()=>({basename:T,navigator:h,static:p,future:{}}),[T,h,p]);typeof c=="string"&&(c=ya(c));let{pathname:g="/",search:y="",hash:M="",state:_=null,key:N="default"}=c,B=E.useMemo(()=>{let D=St(g,T);return D==null?null:{location:{pathname:D,search:y,hash:M,state:_,key:N},navigationType:r}},[T,g,y,M,_,N,r]);return Zn(B!=null,`<Router basename="${T}"> is not able to match the URL "${g}${y}${M}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:E.createElement(et.Provider,{value:x},E.createElement(su.Provider,{children:f,value:B}))}function kp({children:i,location:f}){return Sp(Ws(i),f)}function Ws(i,f=[]){let c=[];return E.Children.forEach(i,(r,h)=>{if(!E.isValidElement(r))return;let p=[...f,h];if(r.type===E.Fragment){c.push.apply(c,Ws(r.props.children,p));return}Ue(r.type===Ks,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let T={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(T.children=Ws(r.props.children,p)),c.push(T)}),c}var Si="get",Ei="application/x-www-form-urlencoded";function ji(i){return i!=null&&typeof i.tagName=="string"}function _p(i){return ji(i)&&i.tagName.toLowerCase()==="button"}function Up(i){return ji(i)&&i.tagName.toLowerCase()==="form"}function Bp(i){return ji(i)&&i.tagName.toLowerCase()==="input"}function Hp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Lp(i,f){return i.button===0&&(!f||f==="_self")&&!Hp(i)}var wi=null;function Yp(){if(wi===null)try{new FormData(document.createElement("form"),0),wi=!1}catch{wi=!0}return wi}var Gp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Is(i){return i!=null&&!Gp.has(i)?(Zn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ei}"`),null):i}function Qp(i,f){let c,r,h,p,T;if(Up(i)){let x=i.getAttribute("action");r=x?St(x,f):null,c=i.getAttribute("method")||Si,h=Is(i.getAttribute("enctype"))||Ei,p=new FormData(i)}else if(_p(i)||Bp(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=i.getAttribute("formaction")||x.getAttribute("action");if(r=g?St(g,f):null,c=i.getAttribute("formmethod")||x.getAttribute("method")||Si,h=Is(i.getAttribute("formenctype"))||Is(x.getAttribute("enctype"))||Ei,p=new FormData(x,i),!Yp()){let{name:y,type:M,value:_}=i;if(M==="image"){let N=y?`${y}.`:"";p.append(`${N}x`,"0"),p.append(`${N}y`,"0")}else y&&p.append(y,_)}}else{if(ji(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Si,r=null,h=Ei,T=i}return p&&h==="text/plain"&&(T=p,p=void 0),{action:r,method:c.toLowerCase(),encType:h,formData:p,body:T}}function nr(i,f){if(i===!1||i===null||typeof i>"u")throw new Error(f)}async function Ip(i,f){if(i.id in f)return f[i.id];try{let c=await import(i.module);return f[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Zp(i,f,c){let r=await Promise.all(i.map(async h=>{let p=f.routes[h.route.id];if(p){let T=await Ip(p,c);return T.links?T.links():[]}return[]}));return Wp(r.flat(1).filter(Xp).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Kd(i,f,c,r,h,p){let T=(g,y)=>c[y]?g.route.id!==c[y].route.id:!0,x=(g,y)=>{var M;return c[y].pathname!==g.pathname||((M=c[y].route.path)==null?void 0:M.endsWith("*"))&&c[y].params["*"]!==g.params["*"]};return p==="assets"?f.filter((g,y)=>T(g,y)||x(g,y)):p==="data"?f.filter((g,y)=>{var _;let M=r.routes[g.route.id];if(!M||!M.hasLoader)return!1;if(T(g,y)||x(g,y))return!0;if(g.route.shouldRevalidate){let N=g.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((_=c[0])==null?void 0:_.params)||{},nextUrl:new URL(i,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Vp(i,f,{includeHydrateFallback:c}={}){return Jp(i.map(r=>{let h=f.routes[r.route.id];if(!h)return[];let p=[h.module];return h.clientActionModule&&(p=p.concat(h.clientActionModule)),h.clientLoaderModule&&(p=p.concat(h.clientLoaderModule)),c&&h.hydrateFallbackModule&&(p=p.concat(h.hydrateFallbackModule)),h.imports&&(p=p.concat(h.imports)),p}).flat(1))}function Jp(i){return[...new Set(i)]}function Kp(i){let f={},c=Object.keys(i).sort();for(let r of c)f[r]=i[r];return f}function Wp(i,f){let c=new Set;return new Set(f),i.reduce((r,h)=>{let p=JSON.stringify(Kp(h));return c.has(p)||(c.add(p),r.push({key:p,link:h})),r},[])}function $p(i,f){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":f&&St(c.pathname,f)==="/"?c.pathname=`${f.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function yh(){let i=E.useContext(nl);return nr(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Fp(){let i=E.useContext(Ti);return nr(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var tr=E.createContext(void 0);tr.displayName="FrameworkContext";function ph(){let i=E.useContext(tr);return nr(i,"You must render this element inside a <HydratedRouter> element"),i}function Pp(i,f){let c=E.useContext(tr),[r,h]=E.useState(!1),[p,T]=E.useState(!1),{onFocus:x,onBlur:g,onMouseEnter:y,onMouseLeave:M,onTouchStart:_}=f,N=E.useRef(null);E.useEffect(()=>{if(i==="render"&&T(!0),i==="viewport"){let X=U=>{U.forEach(J=>{T(J.isIntersecting)})},G=new IntersectionObserver(X,{threshold:.5});return N.current&&G.observe(N.current),()=>{G.disconnect()}}},[i]),E.useEffect(()=>{if(r){let X=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(X)}}},[r]);let B=()=>{h(!0)},D=()=>{h(!1),T(!1)};return c?i!=="intent"?[p,N,{}]:[p,N,{onFocus:lu(x,B),onBlur:lu(g,D),onMouseEnter:lu(y,B),onMouseLeave:lu(M,D),onTouchStart:lu(_,B)}]:[!1,N,{}]}function lu(i,f){return c=>{i&&i(c),c.defaultPrevented||f(c)}}function eg({page:i,...f}){let{router:c}=yh(),r=E.useMemo(()=>lh(c.routes,i,c.basename),[c.routes,i,c.basename]);return r?E.createElement(tg,{page:i,matches:r,...f}):null}function ng(i){let{manifest:f,routeModules:c}=ph(),[r,h]=E.useState([]);return E.useEffect(()=>{let p=!1;return Zp(i,f,c).then(T=>{p||h(T)}),()=>{p=!0}},[i,f,c]),r}function tg({page:i,matches:f,...c}){let r=pa(),{manifest:h,routeModules:p}=ph(),{basename:T}=yh(),{loaderData:x,matches:g}=Fp(),y=E.useMemo(()=>Kd(i,f,g,h,r,"data"),[i,f,g,h,r]),M=E.useMemo(()=>Kd(i,f,g,h,r,"assets"),[i,f,g,h,r]),_=E.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let D=new Set,X=!1;if(f.forEach(U=>{var Z;let J=h.routes[U.route.id];!J||!J.hasLoader||(!y.some(ce=>ce.route.id===U.route.id)&&U.route.id in x&&((Z=p[U.route.id])!=null&&Z.shouldRevalidate)||J.hasClientLoader?X=!0:D.add(U.route.id))}),D.size===0)return[];let G=$p(i,T);return X&&D.size>0&&G.searchParams.set("_routes",f.filter(U=>D.has(U.route.id)).map(U=>U.route.id).join(",")),[G.pathname+G.search]},[T,x,r,h,y,f,i,p]),N=E.useMemo(()=>Vp(M,h),[M,h]),B=ng(M);return E.createElement(E.Fragment,null,_.map(D=>E.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...c})),N.map(D=>E.createElement("link",{key:D,rel:"modulepreload",href:D,...c})),B.map(({key:D,link:X})=>E.createElement("link",{key:D,...X})))}function ag(...i){return f=>{i.forEach(c=>{typeof c=="function"?c(f):c!=null&&(c.current=f)})}}var gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gh&&(window.__reactRouterVersion="7.4.0")}catch{}function lg({basename:i,children:f,window:c}){let r=E.useRef();r.current==null&&(r.current=Zy({window:c,v5Compat:!0}));let h=r.current,[p,T]=E.useState({action:h.action,location:h.location}),x=E.useCallback(g=>{E.startTransition(()=>T(g))},[T]);return E.useLayoutEffect(()=>h.listen(x),[h,x]),E.createElement(Rp,{basename:i,children:f,location:p.location,navigationType:p.action,navigator:h})}var vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xi=E.forwardRef(function({onClick:f,discover:c="render",prefetch:r="none",relative:h,reloadDocument:p,replace:T,state:x,target:g,to:y,preventScrollReset:M,viewTransition:_,...N},B){let{basename:D}=E.useContext(et),X=typeof y=="string"&&vh.test(y),G,U=!1;if(typeof y=="string"&&X&&(G=y,gh))try{let R=new URL(window.location.href),K=y.startsWith("//")?new URL(R.protocol+y):new URL(y),Q=St(K.pathname,D);K.origin===R.origin&&Q!=null?y=Q+K.search+K.hash:U=!0}catch{Zn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=vp(y,{relative:h}),[Z,ce,P]=Pp(r,N),Se=sg(y,{replace:T,state:x,target:g,preventScrollReset:M,relative:h,viewTransition:_});function De(R){f&&f(R),R.defaultPrevented||Se(R)}let Te=E.createElement("a",{...N,...P,href:G||J,onClick:U||p?f:De,ref:ag(B,ce),target:g,"data-discover":!X&&c==="render"?"true":void 0});return Z&&!X?E.createElement(E.Fragment,null,Te,E.createElement(eg,{page:J})):Te});xi.displayName="Link";var ug=E.forwardRef(function({"aria-current":f="page",caseSensitive:c=!1,className:r="",end:h=!1,style:p,to:T,viewTransition:x,children:g,...y},M){let _=cu(T,{relative:y.relative}),N=pa(),B=E.useContext(Ti),{navigator:D,basename:X}=E.useContext(et),G=B!=null&&hg(_)&&x===!0,U=D.encodeLocation?D.encodeLocation(_).pathname:_.pathname,J=N.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;c||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,U=U.toLowerCase()),Z&&X&&(Z=St(Z,X)||Z);const ce=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let P=J===U||!h&&J.startsWith(U)&&J.charAt(ce)==="/",Se=Z!=null&&(Z===U||!h&&Z.startsWith(U)&&Z.charAt(U.length)==="/"),De={isActive:P,isPending:Se,isTransitioning:G},Te=P?f:void 0,R;typeof r=="function"?R=r(De):R=[r,P?"active":null,Se?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let K=typeof p=="function"?p(De):p;return E.createElement(xi,{...y,"aria-current":Te,className:R,ref:M,style:K,to:T,viewTransition:x},typeof g=="function"?g(De):g)});ug.displayName="NavLink";var ig=E.forwardRef(({discover:i="render",fetcherKey:f,navigate:c,reloadDocument:r,replace:h,state:p,method:T=Si,action:x,onSubmit:g,relative:y,preventScrollReset:M,viewTransition:_,...N},B)=>{let D=fg(),X=dg(x,{relative:y}),G=T.toLowerCase()==="get"?"get":"post",U=typeof x=="string"&&vh.test(x),J=Z=>{if(g&&g(Z),Z.defaultPrevented)return;Z.preventDefault();let ce=Z.nativeEvent.submitter,P=(ce==null?void 0:ce.getAttribute("formmethod"))||T;D(ce||Z.currentTarget,{fetcherKey:f,method:P,navigate:c,replace:h,state:p,relative:y,preventScrollReset:M,viewTransition:_})};return E.createElement("form",{ref:B,method:G,action:X,onSubmit:r?g:J,...N,"data-discover":!U&&i==="render"?"true":void 0})});ig.displayName="Form";function og(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bh(i){let f=E.useContext(nl);return Ue(f,og(i)),f}function sg(i,{target:f,replace:c,state:r,preventScrollReset:h,relative:p,viewTransition:T}={}){let x=bp(),g=pa(),y=cu(i,{relative:p});return E.useCallback(M=>{if(Lp(M,f)){M.preventDefault();let _=c!==void 0?c:ou(g)===ou(y);x(i,{replace:_,state:r,preventScrollReset:h,relative:p,viewTransition:T})}},[g,x,y,c,r,f,i,h,p,T])}var rg=0,cg=()=>`__${String(++rg)}__`;function fg(){let{router:i}=bh("useSubmit"),{basename:f}=E.useContext(et),c=zp();return E.useCallback(async(r,h={})=>{let{action:p,method:T,encType:x,formData:g,body:y}=Qp(r,f);if(h.navigate===!1){let M=h.fetcherKey||cg();await i.fetch(M,c,h.action||p,{preventScrollReset:h.preventScrollReset,formData:g,body:y,formMethod:h.method||T,formEncType:h.encType||x,flushSync:h.flushSync})}else await i.navigate(h.action||p,{preventScrollReset:h.preventScrollReset,formData:g,body:y,formMethod:h.method||T,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:c,flushSync:h.flushSync,viewTransition:h.viewTransition})},[i,f,c])}function dg(i,{relative:f}={}){let{basename:c}=E.useContext(et),r=E.useContext(Et);Ue(r,"useFormAction must be used inside a RouteContext");let[h]=r.matches.slice(-1),p={...cu(i||".",{relative:f})},T=pa();if(i==null){p.search=T.search;let x=new URLSearchParams(p.search),g=x.getAll("index");if(g.some(M=>M==="")){x.delete("index"),g.filter(_=>_).forEach(_=>x.append("index",_));let M=x.toString();p.search=M?`?${M}`:""}}return(!i||i===".")&&h.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:wt([c,p.pathname])),ou(p)}function hg(i,f={}){let c=E.useContext(ch);Ue(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bh("useViewTransitionState"),h=cu(i,{relative:f.relative});if(!c.isTransitioning)return!1;let p=St(c.currentLocation.pathname,r)||c.currentLocation.pathname,T=St(c.nextLocation.pathname,r)||c.nextLocation.pathname;return Ai(h.pathname,T)!=null||Ai(h.pathname,p)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,c,r)=>r?r.toUpperCase():c.toLowerCase()),Wd=i=>{const f=yg(i);return f.charAt(0).toUpperCase()+f.slice(1)},wh=(...i)=>i.filter((f,c,r)=>!!f&&f.trim()!==""&&r.indexOf(f)===c).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=E.forwardRef(({color:i="currentColor",size:f=24,strokeWidth:c=2,absoluteStrokeWidth:r,className:h="",children:p,iconNode:T,...x},g)=>E.createElement("svg",{ref:g,...pg,width:f,height:f,stroke:i,strokeWidth:r?Number(c)*24/Number(f):c,className:wh("lucide",h),...x},[...T.map(([y,M])=>E.createElement(y,M)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(i,f)=>{const c=E.forwardRef(({className:r,...h},p)=>E.createElement(gg,{ref:p,iconNode:f,className:wh(`lucide-${mg(Wd(i))}`,`lucide-${i}`,r),...h}));return c.displayName=Wd(i),c};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],$d=Ce("audio-waveform",vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Fd=Ce("award",bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sg=Ce("chevron-left",wg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Pd=Ce("chevron-right",Eg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],uu=Ce("circle-help",Ag);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],jg=Ce("fast-forward",Tg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Mg=Ce("house",xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],iu=Ce("medal",qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Sh=Ce("music",Og);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Cg=Ce("pause",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Dg=Ce("play",Ng);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],kg=Ce("plus",Rg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],Ug=Ce("rewind",_g);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Hg=Ce("shuffle",Bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Yg=Ce("skip-forward",Lg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Qg=Ce("sliders-vertical",Gg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],Xg=Ce("timer-off",Ig);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],Vg=Ce("timer-reset",Zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Kg=Ce("timer",Jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],$g=Ce("trash-2",Wg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Xs=Ce("trophy",Fg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ev=Ce("users",Pg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Eh=Ce("volume-2",nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],av=Ce("volume-x",tv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eh=Ce("x",lv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zs=Ce("zap",uv),iv=()=>d.jsx("main",{className:"accueil",children:d.jsxs("div",{className:"accueil-container",children:[d.jsxs("header",{className:"accueil-header",children:[d.jsx(Sh,{className:"logo",size:48}),d.jsx("h1",{children:"BlindTest Master"})]}),d.jsxs("section",{className:"intro",children:[d.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),d.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),d.jsxs("section",{className:"manches-preview",children:[d.jsxs("div",{className:"manche-card",children:[d.jsx("h3",{children:"Manche 1"}),d.jsx("p",{children:"BlindTest Classique"}),d.jsx("span",{className:"emoji",children:"🎵"})]}),d.jsxs("div",{className:"manche-card",children:[d.jsx("h3",{children:"Manche 2"}),d.jsx("p",{children:"TestBlind"}),d.jsx("span",{className:"emoji",children:"🎙️"})]}),d.jsxs("div",{className:"manche-card",children:[d.jsx("h3",{children:"Manche 3"}),d.jsx("p",{children:"X-trem BlindTest"}),d.jsx("span",{className:"emoji",children:"🔀"})]})]}),d.jsx(xi,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),ov=({manche:i})=>i?d.jsxs("section",{className:"info-manche",children:[d.jsxs("div",{className:"manche-header",children:[d.jsx("span",{className:"manche-emoji",children:i.emoji}),d.jsxs("h2",{children:["Manche ",i.id,": ",i.nom]})]}),d.jsxs("div",{className:"manche-details",children:[d.jsx("p",{children:i.description}),d.jsx("p",{className:"points-info",children:i.points})]})]}):null,sv=({chanson:i,afficherTitre:f,afficherArtiste:c,afficherParoles:r})=>i?d.jsxs("div",{className:"affichage-chanson",children:[f&&d.jsx("h3",{className:"chanson-titre",children:i.titre}),c&&d.jsx("p",{className:"chanson-artiste",children:i.artiste}),r&&d.jsxs("div",{className:"paroles-container",children:[d.jsx("h4",{children:"Paroles:"}),d.jsx("p",{className:"paroles",children:i.paroles.split(`
`).map((h,p)=>d.jsxs("span",{className:"paroles-line",children:[h,d.jsx("br",{})]},p))})]})]}):null,rv=({teams:i=[],onAddTeam:f,onRemoveTeam:c,onAddPoints:r})=>{const[h,p]=E.useState(""),[T,x]=E.useState(!1),[g,y]=E.useState(null),[M,_]=E.useState("teams"),[N,B]=E.useState(null),[D,X]=E.useState({}),[G,U]=E.useState(!1),J=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];E.useEffect(()=>{const Q={};i.forEach(ue=>{Q[ue.id]=ue.score}),X(Q)},[i]),E.useEffect(()=>{if(g){const Q=i.find(ue=>ue.id===g.id);Q&&y(Q)}},[i,g]);const Z=()=>{if(h.trim()==="")return;const Q={id:Date.now().toString(),name:h,score:0,color:J[i.length%J.length]};f(Q),p(""),console.log("Équipe ajoutée:",Q)},ce=Q=>{Q.key==="Enter"&&Z()},P=(Q,ue=null)=>{_(Q),y(ue),x(!0)},Se=()=>{x(!1),y(null),B(null)},De=()=>{U(!G)},Te=(Q,ue)=>{X(We=>({...We,[Q]:(We[Q]||0)+ue})),r(Q,ue),B(ue),setTimeout(()=>{B(null)},1e3)},R=[...i].sort((Q,ue)=>ue.score-Q.score),K=Q=>{var ue;return D[Q]!==void 0?D[Q]:((ue=i.find(We=>We.id===Q))==null?void 0:ue.score)||0};return d.jsxs("div",{className:"team-manager-container",children:[d.jsxs("button",{className:"team-manager-button",onClick:()=>P("teams"),children:[d.jsx(Xs,{size:20}),d.jsx("span",{children:"Équipes & Scores"})]}),d.jsxs("button",{className:"leaderboard-floating-button",onClick:De,children:[d.jsx(iu,{size:20}),d.jsx("span",{children:"Classement"})]}),G&&d.jsxs("div",{className:"floating-leaderboard",children:[d.jsxs("div",{className:"floating-leaderboard-header",children:[d.jsx("h3",{children:"Classement"}),d.jsx("button",{className:"close-leaderboard",onClick:De,children:d.jsx(eh,{size:18})})]}),R.length>0?d.jsx("div",{className:"floating-leaderboard-content",children:R.map((Q,ue)=>d.jsxs("div",{className:`floating-leaderboard-item ${ue===0?"first-place":ue===1?"second-place":ue===2?"third-place":""}`,children:[d.jsxs("div",{className:"leaderboard-position",children:[ue===0&&d.jsx(Xs,{size:16,className:"gold-trophy"}),ue===1&&d.jsx(iu,{size:16,className:"silver-medal"}),ue===2&&d.jsx(iu,{size:16,className:"bronze-medal"}),ue>2&&d.jsxs("span",{children:["#",ue+1]})]}),d.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:Q.color}}),d.jsx("div",{className:"leaderboard-team-name",children:Q.name}),d.jsx("div",{className:"leaderboard-team-score",children:K(Q.id)})]},Q.id))}):d.jsx("div",{className:"floating-leaderboard-empty",children:d.jsx("p",{children:"Aucune équipe"})})]}),T&&d.jsx("div",{className:"team-modal-overlay",onClick:Se,children:d.jsxs("div",{className:"team-modal",onClick:Q=>Q.stopPropagation(),children:[d.jsx("button",{className:"close-modal",onClick:Se,children:d.jsx(eh,{size:24})}),d.jsxs("div",{className:"modal-tabs",children:[d.jsxs("button",{className:`tab-button ${M==="teams"?"active":""}`,onClick:()=>_("teams"),children:[d.jsx(ev,{size:18}),d.jsx("span",{children:"Équipes"})]}),d.jsxs("button",{className:`tab-button ${M==="scores"?"active":""}`,onClick:()=>_("scores"),children:[d.jsx(Fd,{size:18}),d.jsx("span",{children:"Scores"})]})]}),M==="teams"&&d.jsxs("div",{className:"teams-tab",children:[d.jsx("h2",{children:"Gestion des Équipes"}),d.jsxs("div",{className:"add-team-form",children:[d.jsx("input",{type:"text",value:h,onChange:Q=>p(Q.target.value),onKeyDown:ce,placeholder:"Nom de l'équipe",maxLength:20}),d.jsxs("button",{className:"add-team-button",onClick:Z,disabled:h.trim()==="",children:[d.jsx(kg,{size:16}),"Ajouter"]})]}),i.length>0?d.jsx("div",{className:"teams-grid",children:i.map(Q=>d.jsxs("div",{className:"team-card",style:{borderColor:Q.color,backgroundColor:`${Q.color}10`},children:[d.jsx("div",{className:"team-card-header",style:{backgroundColor:Q.color},children:d.jsx("h3",{children:Q.name})}),d.jsxs("div",{className:"team-card-content",children:[d.jsx("div",{className:"team-score",children:K(Q.id)}),d.jsxs("div",{className:"team-card-actions",children:[d.jsxs("button",{className:"team-action-button score-button",onClick:()=>{y(Q),_("scores")},children:[d.jsx(Fd,{size:16}),d.jsx("span",{children:"Scores"}),d.jsx(Pd,{size:14})]}),d.jsxs("button",{className:"team-action-button delete-button",onClick:()=>c(Q.id),children:[d.jsx($g,{size:16}),d.jsx("span",{children:"Supprimer"})]})]})]})]},Q.id))}):d.jsxs("div",{className:"no-teams",children:[d.jsx("p",{children:"Aucune équipe ajoutée"}),d.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]}),M==="scores"&&d.jsx("div",{className:"scores-tab",children:g?d.jsxs("div",{className:"team-score-detail",children:[d.jsxs("button",{className:"back-button",onClick:()=>_("teams"),children:[d.jsx(Sg,{size:16}),d.jsx("span",{children:"Retour"})]}),d.jsx("div",{className:"team-score-header",style:{backgroundColor:g.color},children:d.jsx("h2",{children:g.name})}),d.jsxs("div",{className:"current-score-container",children:[d.jsxs("div",{className:"current-score-value",children:[K(g.id),N&&d.jsx("span",{className:"score-animation",children:N>0?`+${N}`:N})]}),d.jsx("div",{className:"current-score-label",children:"points"})]}),d.jsxs("div",{className:"point-buttons-container",children:[d.jsx("h3",{children:"Ajouter des points"}),d.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(Q=>d.jsx("button",{className:`point-button ${Q<0?"negative":""}`,style:{backgroundColor:Q<0?"#ffeeee":`${g.color}20`,borderColor:Q<0?"#e74c3c":g.color,color:Q<0?"#e74c3c":void 0},onClick:()=>Te(g.id,Q),children:Q>0?`+${Q}`:Q},Q))})]})]}):d.jsxs("div",{className:"scores-leaderboard",children:[d.jsx("h2",{children:"Classement des Équipes"}),R.length>0?d.jsx("div",{className:"leaderboard",children:R.map((Q,ue)=>d.jsxs("div",{className:`leaderboard-item ${ue===0?"first-place":ue===1?"second-place":ue===2?"third-place":""}`,onClick:()=>y(Q),children:[d.jsxs("div",{className:"leaderboard-rank",children:[ue===0&&d.jsx(Xs,{size:18,className:"gold-trophy"}),ue===1&&d.jsx(iu,{size:18,className:"silver-medal"}),ue===2&&d.jsx(iu,{size:18,className:"bronze-medal"}),ue>2&&d.jsxs("span",{children:["#",ue+1]})]}),d.jsx("div",{className:"leaderboard-color",style:{backgroundColor:Q.color}}),d.jsx("div",{className:"leaderboard-name",children:Q.name}),d.jsx("div",{className:"leaderboard-score",children:K(Q.id)}),d.jsx(Pd,{size:16,className:"leaderboard-arrow"})]},Q.id))}):d.jsxs("div",{className:"no-teams",children:[d.jsx("p",{children:"Aucune équipe ajoutée"}),d.jsx("p",{children:"Créez des équipes pour voir le classement!"})]})]})})]})})]})},cv=({onEffectsChange:i,isExpanded:f,toggleExpanded:c,currentEffects:r})=>{const[h,p]=E.useState(r.distortion||1e4),[T,x]=E.useState(r.pitchShift||.6),[g,y]=E.useState(r.wahFrequency||1),[M,_]=E.useState(r.wahDepth||.3),[N,B]=E.useState(r.growlAmount||.05),[D,X]=E.useState(null),G=R=>{const K=Number.parseInt(R.target.value);p(K),i({distortion:K,pitchShift:T,wahFrequency:g,wahDepth:M,growlAmount:N})},U=R=>{const K=Number.parseFloat(R.target.value);x(K),i({distortion:h,pitchShift:K,wahFrequency:g,wahDepth:M,growlAmount:N})},J=R=>{const K=Number.parseFloat(R.target.value);y(K),i({distortion:h,pitchShift:T,wahFrequency:K,wahDepth:M,growlAmount:N})},Z=R=>{const K=Number.parseFloat(R.target.value);_(K),i({distortion:h,pitchShift:T,wahFrequency:g,wahDepth:K,growlAmount:N})},ce=R=>{const K=Number.parseFloat(R.target.value);B(K),i({distortion:h,pitchShift:T,wahFrequency:g,wahDepth:M,growlAmount:K})},P=()=>{const R={distortion:1e4,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.05};p(R.distortion),x(R.pitchShift),y(R.wahFrequency),_(R.wahDepth),B(R.growlAmount),i(R)},Se=()=>{const R={distortion:Math.floor(Math.random()*8e4)+1e4,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*5+.5,wahDepth:Math.random()*.5+.1,growlAmount:Math.random()*.5};p(R.distortion),x(R.pitchShift),y(R.wahFrequency),_(R.wahDepth),B(R.growlAmount),i(R)},De=()=>{const R={distortion:9e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:8,wahDepth:.5,growlAmount:.8};p(R.distortion),x(R.pitchShift),y(R.wahFrequency),_(R.wahDepth),B(R.growlAmount),i(R)},Te={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return d.jsxs("div",{className:`audio-effects-controller ${f?"expanded":"collapsed"}`,children:[d.jsxs("div",{className:"effects-header",onClick:c,children:[d.jsx(Qg,{size:16}),d.jsx("h3",{children:"Effets Audio"}),d.jsx("span",{className:"toggle-icon",children:f?"▼":"▲"})]}),f&&d.jsxs("div",{className:"effects-content",children:[d.jsxs("div",{className:"effect-group",children:[d.jsxs("label",{className:"effect-label",children:[d.jsx(Zs,{size:14}),d.jsx("span",{children:"Distorsion"}),d.jsxs("span",{className:"help-container",children:[d.jsx(uu,{size:14,className:"help-icon",onMouseEnter:()=>X("distortion"),onMouseLeave:()=>X(null)}),d.jsx("span",{className:"effect-value",children:h})]}),D==="distortion"&&d.jsx("div",{className:"tooltip",children:Te.distortion})]}),d.jsx("input",{type:"range",min:"1000",max:"100000",step:"1000",value:h,onChange:G,className:"effect-slider"})]}),d.jsxs("div",{className:"effect-group",children:[d.jsxs("label",{className:"effect-label",children:[d.jsx(Eh,{size:14}),d.jsx("span",{children:"Hauteur"}),d.jsxs("span",{className:"help-container",children:[d.jsx(uu,{size:14,className:"help-icon",onMouseEnter:()=>X("pitchShift"),onMouseLeave:()=>X(null)}),d.jsx("span",{className:"effect-value",children:T.toFixed(2)})]}),D==="pitchShift"&&d.jsx("div",{className:"tooltip",children:Te.pitchShift})]}),d.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:T,onChange:U,className:"effect-slider"})]}),d.jsxs("div",{className:"effect-group",children:[d.jsxs("label",{className:"effect-label",children:[d.jsx($d,{size:14}),d.jsx("span",{children:"Wah-Freq"}),d.jsxs("span",{className:"help-container",children:[d.jsx(uu,{size:14,className:"help-icon",onMouseEnter:()=>X("wahFrequency"),onMouseLeave:()=>X(null)}),d.jsx("span",{className:"effect-value",children:g.toFixed(1)})]}),D==="wahFrequency"&&d.jsx("div",{className:"tooltip",children:Te.wahFrequency})]}),d.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.1",value:g,onChange:J,className:"effect-slider"})]}),d.jsxs("div",{className:"effect-group",children:[d.jsxs("label",{className:"effect-label",children:[d.jsx($d,{size:14}),d.jsx("span",{children:"Wah-Prof"}),d.jsxs("span",{className:"help-container",children:[d.jsx(uu,{size:14,className:"help-icon",onMouseEnter:()=>X("wahDepth"),onMouseLeave:()=>X(null)}),d.jsx("span",{className:"effect-value",children:M.toFixed(2)})]}),D==="wahDepth"&&d.jsx("div",{className:"tooltip",children:Te.wahDepth})]}),d.jsx("input",{type:"range",min:"0",max:"0.6",step:"0.05",value:M,onChange:Z,className:"effect-slider"})]}),d.jsxs("div",{className:"effect-group",children:[d.jsxs("label",{className:"effect-label",children:[d.jsx(Zs,{size:14}),d.jsx("span",{children:"Grognement"}),d.jsxs("span",{className:"help-container",children:[d.jsx(uu,{size:14,className:"help-icon",onMouseEnter:()=>X("growlAmount"),onMouseLeave:()=>X(null)}),d.jsxs("span",{className:"effect-value",children:[(N*100).toFixed(0),"%"]})]}),D==="growlAmount"&&d.jsx("div",{className:"tooltip",children:Te.growlAmount})]}),d.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:N,onChange:ce,className:"effect-slider"})]}),d.jsxs("div",{className:"effects-buttons",children:[d.jsxs("button",{className:"random-button",onClick:Se,children:[d.jsx(Hg,{size:14}),"Effets aléatoires"]}),d.jsxs("button",{className:"extreme-button",onClick:De,children:[d.jsx(Zs,{size:14}),"Mode Extrême"]}),d.jsx("button",{className:"reset-button",onClick:P,children:"Réinitialiser"})]})]})]})},nh=[{id:1,nom:"BlindTest Classique",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"TestBlind",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],Vs=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
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
Impossible`},{id:16,titre:"Zoe Wees",artiste:"Don't Give Up",audioUrl:"./audio/ZoeWees-DontGive-Up.mp3",paroles:`Don't give up, no, no, don't give up, no, no
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
So I'll be on my way`},{id:33,titre:"Girl on Fire",artiste:"AliciaKeys",audioUrl:"./audio/Alicia-Keys_Girl-on-Fire.mp3",paroles:`She's just a girl and she's on fire
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
And you give me all of you, oh-oh`}],th=20,fv=()=>{const[i,f]=E.useState(1),[c,r]=E.useState(null),[h,p]=E.useState(!1),[T,x]=E.useState(!1),[g,y]=E.useState(!1),[M,_]=E.useState(!1),[N,B]=E.useState([]),[D,X]=E.useState({1:[],2:[],3:[]}),[G,U]=E.useState(!1),[J,Z]=E.useState(null),[ce,P]=E.useState(null),[Se,De]=E.useState(1),[Te,R]=E.useState(!1),[K,Q]=E.useState([]),[ue,We]=E.useState(null),[qn,sn]=E.useState(!1),[H,ie]=E.useState({distortion:1e4,pitchShift:.6,wahFrequency:2,wahDepth:.6,growlAmount:.05}),ae=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[Ee,v]=E.useState({tempsEcoule:0,actif:!1,termine:!1}),z=E.useRef(null),I=E.useRef(null),V=E.useRef(null),L=E.useRef(null),se=E.useRef(null),te=E.useRef(null),Me=E.useRef(0),ge=nh.find(Y=>Y.id===i),Ne=Ee.tempsEcoule,we=Ee.actif,tn=Ee.termine,nt=()=>{const Y=Vs.filter(ee=>!N.includes(ee.id)&&ee.id!==ue);if(Y.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),B([]),X({1:[],2:[],3:[]}),We(null);const ee=Vs.filter(Ae=>Ae.id!==ue),ye=Math.floor(Math.random()*ee.length);return ee[ye]}const W=Math.floor(Math.random()*Y.length);return Y[W]},Vn=E.useCallback(()=>{if(D[i].length>=th){const W=i<3?i+1:1;return f(W),!0}return!1},[i,D]),vn=()=>{if(L.current){try{L.current.stop()}catch{}L.current=null}},Jn=()=>{try{I.current||(I.current=new(window.AudioContext||window.webkitAudioContext));const Y=i===2?J:ce;if(I.current&&Y){console.log(`Démarrage de la lecture du buffer ${i===2?"inversé":"monstre"}`),vn();const W=I.current.createBufferSource();if(W.buffer=Y,i===3){let Ae=1;const{pitchShift:Ve}=H;Ve<.5?Ae=.4:Ve<1?Ae=.6:Ve>2?Ae=2.5:Ae=1.5,W.playbackRate.value=Ae}let ee;if(i===3){const{distortion:Ae,pitchShift:Ve,wahFrequency:Ge,wahDepth:Yn,growlAmount:an}=H,mn=I.current.createGain();mn.gain.value=M?0:Se,se.current=mn;const $e=I.current.createWaveShaper(),il=ul(Ae);$e.curve=il,$e.oversample="4x";const En=I.current.createBiquadFilter();En.type="bandpass",En.frequency.value=1e3,En.Q.value=3;const Be=I.current.createOscillator();Be.type="sine",Be.frequency.value=Ge;const Re=I.current.createGain();Re.gain.value=Yn*800,Be.connect(Re),Re.connect(En.frequency),Be.start(),V.current={distortionNode:$e,filterNode:En,oscillator:Be,oscillatorGain:Re,pitchShift:Ve,growlAmount:an},W.connect(En),En.connect($e),$e.connect(mn),mn.connect(I.current.destination),ee=mn}else{const Ae=I.current.createGain();Ae.gain.value=M?0:Se,se.current=Ae,W.connect(Ae),Ae.connect(I.current.destination),ee=Ae}const ye=isFinite(Me.current)?Me.current:0;return ye>=Y.duration?(Me.current=0,W.start(0,0)):W.start(0,ye),L.current=W,L.current.startTime=I.current.currentTime,L.current.startOffset=ye,console.log(`Lecture ${i===2?"inversée":"monstre"} démarrée avec succès à la position ${ye}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(Y){return console.error("Erreur lors de la lecture audio modifiée:",Y),!1}},At=E.useCallback(()=>{if(console.log("togglePlay appelé, manche:",i),i===2||i===3)if(console.log(`Manche ${i} - utilisation du mode audio modifié`),h){if(console.log("Arrêt de la lecture modifiée"),L.current&&I.current)try{if(L.current.startTime!==void 0&&L.current.startOffset!==void 0){const Y=I.current.currentTime-L.current.startTime,W=L.current.startOffset+Y;isFinite(W)&&W>=0&&(Me.current=W,console.log("Position audio sauvegardée:",Me.current))}}catch(Y){console.error("Erreur lors du calcul de la position audio:",Y)}vn(),p(!1)}else if(console.log("Démarrage de la lecture modifiée"),!J&&i===2||!ce&&i===3||!Te){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),R(!0),!G&&c)(i===2?fu:ll)(c.audioUrl).then(W=>{W&&Te&&Jn()&&(p(!0),!we&&!tn&&tt())});else if(i===2&&J||i===3&&ce){if(i===3&&c&&H){const W=Oi(ce,H);P(W)}Jn()&&(p(!0),!we&&!tn&&tt())}}else Jn()&&(p(!0),!we&&!tn&&tt());else console.log("Manche standard - utilisation de l'audio normal"),h?(z.current.pause(),p(!1)):z.current.play().then(()=>{p(!0),!we&&!tn&&tt()}).catch(Y=>{console.error("Erreur lors de la lecture audio:",Y)})},[h,i,J,ce,G,c,Te,we,tn,H]),tt=()=>{te.current&&clearInterval(te.current),v(Y=>({...Y,actif:!0,termine:!1})),te.current=setInterval(()=>{v(Y=>{const W=Y.tempsEcoule+1;return W>=25?(clearInterval(te.current),te.current=null,h&&(i===2||i===3?vn():z.current&&z.current.pause(),p(!1)),{tempsEcoule:25,actif:!1,termine:!0}):(W===20&&h&&(i===2||i===3?vn():z.current&&z.current.pause(),p(!1)),{...Y,tempsEcoule:W})})},1e3)},ga=()=>{te.current&&(clearInterval(te.current),te.current=null),v(Y=>({...Y,actif:!1}))},Tt=()=>{te.current&&(clearInterval(te.current),te.current=null),v({tempsEcoule:0,actif:!1,termine:!1})},tl=()=>{i===2||i===3?L.current&&I.current&&(vn(),Me.current+=5,h&&Jn()):z.current&&(z.current.currentTime+=5)},al=()=>{i===2||i===3?L.current&&I.current&&(vn(),Me.current=Math.max(0,Me.current-5),h&&Jn()):z.current&&(z.current.currentTime=Math.max(0,z.current.currentTime-5))},Mi=()=>{if(c&&(We(c.id),B(W=>[...W,c.id]),X(W=>({...W,[i]:[...W[i],c.id]}))),(i===2||i===3)&&L.current?vn():z.current&&z.current.pause(),p(!1),y(!1),x(!1),U(!1),Z(null),P(null),R(!1),Tt(),Me.current=0,rn(),!Vn()){const W=nt();r(W)}},qi=()=>{(i===2||i===3)&&se.current?se.current.gain.value=M?Se:0:z.current&&(z.current.muted=!M),_(!M)},rn=()=>{try{if(vn(),V.current){if(V.current.oscillator)try{V.current.oscillator.stop()}catch{}V.current.distortionNode&&V.current.distortionNode.disconnect(),V.current.filterNode&&V.current.filterNode.disconnect(),V.current.oscillatorGain&&V.current.oscillatorGain.disconnect(),V.current=null}se.current&&(se.current.disconnect(),se.current=null),I.current&&I.current.state}catch(Y){console.error("Erreur lors du nettoyage des connexions audio:",Y)}},fu=async Y=>{try{console.log("Préparation de l'audio inversé pour:",Y),rn(),I.current=new(window.AudioContext||window.webkitAudioContext);const W=await fetch(Y);if(!W.ok)throw new Error(`Erreur lors du chargement de l'audio: ${W.status}`);const ee=await W.arrayBuffer();if(!ee||ee.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ee.byteLength);const ye=await I.current.decodeAudioData(ee);console.log("Audio décodé, durée:",ye.duration,"secondes");const Ae=I.current.createBuffer(ye.numberOfChannels,ye.length,ye.sampleRate);for(let Ve=0;Ve<ye.numberOfChannels;Ve++){const Ge=ye.getChannelData(Ve),Yn=Ae.getChannelData(Ve);for(let an=0;an<Ge.length;an++)Yn[an]=Ge[Ge.length-1-an]}return console.log("Buffer inversé créé avec succès"),Z(Ae),U(!0),!0}catch(W){return console.error("Erreur lors de la préparation de l'audio inversé:",W),!1}},ll=async Y=>{try{console.log("Préparation de l'audio monstre pour:",Y),I.current||(I.current=new(window.AudioContext||window.webkitAudioContext));const W=await fetch(Y);if(!W.ok)throw new Error(`Erreur lors du chargement de l'audio: ${W.status}`);const ee=await W.arrayBuffer();if(!ee||ee.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ee.byteLength);const ye=await I.current.decodeAudioData(ee);return console.log("Audio décodé, durée:",ye.duration,"secondes"),P(ye),U(!0),!0}catch(W){return console.error("Erreur lors de la préparation de l'audio monstre:",W),!1}},ul=Y=>{const ee=new Float32Array(44100),ye=Math.PI/180;for(let Ae=0;Ae<44100;++Ae){const Ve=Ae*2/44100-1;ee[Ae]=(3+Y/500)*Ve*20*ye/(Math.PI+Y/500*Math.abs(Ve))}return ee},va=Y=>{if(ie(Y),i===3&&I.current&&V.current){const{distortion:W,pitchShift:ee,wahFrequency:ye,wahDepth:Ae,growlAmount:Ve}=Y;if(V.current.distortionNode&&(V.current.distortionNode.curve=ul(W)),V.current.oscillator&&(V.current.oscillator.frequency.value=ye),V.current.oscillatorGain&&(V.current.oscillatorGain.gain.value=Ae*800),V.current.pitchShift=ee,L.current){let Ge;ee<.5?Ge=.4:ee<1?Ge=.6:ee>2?Ge=2.5:Ge=1.5;try{L.current.playbackRate.value=Ge}catch(Yn){console.error("Erreur lors de l'ajustement du playbackRate:",Yn)}}V.current.growlAmount=Ve,console.log("Paramètres d'effets mis à jour en temps réel")}},Oi=(Y,W)=>{const{distortion:ee,pitchShift:ye,wahFrequency:Ae,wahDepth:Ve,growlAmount:Ge}=W,an=I.current.createBuffer(Y.numberOfChannels,Y.length,Y.sampleRate);for(let mn=0;mn<Y.numberOfChannels;mn++){const $e=Y.getChannelData(mn),il=an.getChannelData(mn),En=new Float32Array($e.length);for(let Be=0;Be<$e.length;Be++){const Re=Math.sin(Be/Y.sampleRate*Ae*Math.PI*2)*Ve*.8;$e[Be]*(1+Re);let yn;ye<.5?yn=2.5:ye<1?yn=1.8:ye>2?yn=.4:yn=.6;const ba=Math.floor(Be/(ye*yn));ba<$e.length&&(En[Be]=$e[ba])}for(let Be=0;Be<$e.length;Be++){let Re=En[Be]||0;if(Re=Math.tanh(Re*(ee/800))*.7,Math.random()<Ge){const yn=Ge*3;Re+=(Math.random()*.6-.3)*Math.sin(Be/Y.sampleRate*40*Math.PI*2)*yn,Math.random()<Ge*.7&&(Re*=1+Math.random()*.5),Math.random()<Ge*.3&&(Re=0)}if(ee>2e4){const yn=(ee-2e4)/2e4;if(Re+=Re*Math.sin(Be/Y.sampleRate*120*Math.PI*2)*yn,ee>5e4){const ba=Math.max(2,Math.floor(16-(ee-5e4)/1e4)),ol=2/Math.pow(2,ba);Re=Math.round(Re/ol)*ol}}Re=Math.max(-.99,Math.min(.99,Re)),il[Be]=Re}}return an},du=()=>{sn(!qn)};E.useEffect(()=>()=>{rn(),te.current&&clearInterval(te.current)},[]),E.useEffect(()=>{if(!c){const Y=nt();r(Y)}},[c]),E.useEffect(()=>{c&&(console.log("Changement de chanson détecté, manche:",i),z.current&&z.current.pause(),vn(),p(!1),U(!1),Z(null),P(null),R(!1),Tt(),Me.current=0,rn(),i===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),fu(c.audioUrl)):i===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),ll(c.audioUrl)):(console.log("Manche standard - chargement audio normal"),z.current&&(z.current.src=c.audioUrl,z.current.load(),U(!0))))},[c,i]),E.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",i),U(!1),Z(null),P(null),R(!1),Me.current=0,rn(),Tt();const Y=nt();r(Y)},[i]);const zi=Y=>{f(Y),p(!1),y(!1),x(!1),R(!1)},Ci=Y=>{if(console.log("Fonction ajouterEquipe appelée avec:",Y),typeof Y=="string"){const W={id:Date.now().toString(),name:Y,score:0,color:ae[K.length%ae.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",W),Q(ee=>[...ee,W])}else Y&&typeof Y=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",Y),Q(W=>[...W,Y])):console.error("Format d'équipe invalide:",Y);console.log("Équipes après ajout:",K)},Vt=Y=>{const W=K.filter(ee=>ee.id!==Y);Q(W)},hn=(Y,W)=>{const ee=K.findIndex(ye=>ye.id===Y);if(ee>=0){const ye=[...K];ye[ee]={...ye[ee],score:ye[ee].score+W},Q(ye)}else console.error("Équipe non trouvée avec l'ID:",Y)};return d.jsxs("main",{className:"jeu",children:[d.jsx("audio",{ref:z}),d.jsxs("header",{className:"jeu-header",children:[d.jsx(xi,{to:"/",className:"accueil-link",children:d.jsx(Mg,{size:24})}),d.jsx("h1",{children:"BlindTest Master"}),d.jsx(Sh,{className:"logo",size:32})]}),d.jsx(rv,{teams:K,onAddTeam:Ci,onRemoveTeam:Vt,onAddPoints:hn}),d.jsx(ov,{manche:ge}),i===3&&d.jsxs("div",{className:"effets-info",children:[d.jsxs("span",{className:"effet-badge",children:["Distorsion: ",H.distortion]}),d.jsxs("span",{className:"effet-badge",children:["Hauteur: ",H.pitchShift.toFixed(2)]}),d.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",H.wahFrequency.toFixed(1),"Hz"]}),d.jsxs("span",{className:"effet-badge",children:["Grognement: ",(H.growlAmount*100).toFixed(0),"%"]})]}),d.jsx("section",{className:"jeu-content",children:c?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"chrono-container",children:[d.jsxs("div",{className:`chrono ${Ne>20?"time-critical":Ne>15?"time-warning":""}`,children:[d.jsxs("span",{children:[Ne," / 25 secondes"]}),d.jsx("div",{className:"chrono-progress",style:{width:`${Ne/25*100}%`}})]}),d.jsxs("div",{className:"chrono-controls",children:[we?d.jsxs("button",{className:"chrono-button stop",onClick:ga,children:[d.jsx(Xg,{size:20}),d.jsx("span",{children:"Arrêter Chrono"})]}):d.jsxs("button",{className:"chrono-button start",onClick:tt,disabled:tn,children:[d.jsx(Kg,{size:20}),d.jsx("span",{children:"Démarrer Chrono"})]}),d.jsxs("button",{className:"chrono-button reset",onClick:Tt,children:[d.jsx(Vg,{size:20}),d.jsx("span",{children:"Réinitialiser"})]})]})]}),d.jsxs("div",{className:"player-controls-container",children:[d.jsxs("div",{className:"player-controls",children:[d.jsx("button",{className:"control-button rewind",onClick:al,"aria-label":"Reculer",children:d.jsx(Ug,{size:24})}),d.jsx("button",{className:"control-button play-pause",onClick:At,"aria-label":h?"Pause":"Lecture",children:h?d.jsx(Cg,{size:32}):d.jsx(Dg,{size:32})}),d.jsx("button",{className:"control-button forward",onClick:tl,"aria-label":"Avancer",children:d.jsx(jg,{size:24})}),d.jsx("button",{className:"control-button next",onClick:Mi,"aria-label":"Chanson suivante",children:d.jsx(Yg,{size:32})}),d.jsx("button",{className:"control-button mute",onClick:qi,"aria-label":M?"Activer le son":"Couper le son",children:M?d.jsx(av,{size:24}):d.jsx(Eh,{size:24})})]}),i===3&&d.jsx(cv,{onEffectsChange:va,isExpanded:qn,toggleExpanded:du,currentEffects:H})]}),d.jsxs("div",{className:"guess-mode",children:[g?d.jsxs(d.Fragment,{children:[d.jsx(sv,{chanson:c,afficherTitre:!0,afficherArtiste:!0,afficherParoles:T}),(i===2||i===3)&&d.jsxs("div",{className:"normal-audio-player",children:[d.jsx("h4",{children:"Version normale:"}),d.jsx("audio",{src:c.audioUrl,controls:!0,className:"normal-audio-controls"})]})]}):d.jsx("div",{className:"hidden-answer",children:d.jsx("p",{children:"?????"})}),d.jsxs("div",{className:"action-buttons",children:[d.jsx("button",{className:"answer-toggle",onClick:()=>y(!g),children:g?"Masquer la réponse":"Révéler la réponse"}),g&&d.jsx("button",{className:"lyrics-toggle",onClick:()=>x(!T),children:T?"Masquer les paroles":"Afficher les paroles"})]})]})]}):d.jsxs("div",{className:"no-songs-message",children:[d.jsx("p",{children:"Aucune chanson disponible."}),d.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),d.jsxs("footer",{className:"jeu-footer",children:[d.jsx("div",{className:"round-navigation",children:nh.map(Y=>d.jsxs("button",{className:`round-button ${i===Y.id?"active":""}`,onClick:()=>zi(Y.id),children:[d.jsx("span",{className:"round-number",children:Y.id}),d.jsx("span",{className:"round-emoji",children:Y.emoji})]},Y.id))}),d.jsxs("div",{className:"songs-played-info",children:[d.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",D[i].length," /"," ",th]}),d.jsxs("p",{children:["Total des chansons jouées: ",N.length," /"," ",Vs.length]})]})]})]})},dv=()=>d.jsx("footer",{className:"footer",children:d.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"})});function hv(){return d.jsxs(lg,{children:[d.jsxs(kp,{children:[d.jsx(Ks,{path:"/",element:d.jsx(iv,{})}),d.jsx(Ks,{path:"/jeu",element:d.jsx(fv,{})})]}),d.jsx(dv,{})]})}Iy.createRoot(document.getElementById("root")).render(d.jsx(_y.StrictMode,{children:d.jsx(hv,{})}));
