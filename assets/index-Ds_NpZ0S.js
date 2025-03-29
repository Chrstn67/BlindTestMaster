(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const y of f)if(y.type==="childList")for(const A of y.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&r(A)}).observe(document,{childList:!0,subtree:!0});function h(f){const y={};return f.integrity&&(y.integrity=f.integrity),f.referrerPolicy&&(y.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?y.credentials="include":f.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function r(f){if(f.ep)return;f.ep=!0;const y=h(f);fetch(f.href,y)}})();function nf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Us={exports:{}},ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Np(){if(Rd)return ti;Rd=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function h(r,f,y){var A=null;if(y!==void 0&&(A=""+y),f.key!==void 0&&(A=""+f.key),"key"in f){y={};for(var x in f)x!=="key"&&(y[x]=f[x])}else y=f;return f=y.ref,{$$typeof:o,type:r,key:A,ref:f!==void 0?f:null,props:y}}return ti.Fragment=d,ti.jsx=h,ti.jsxs=h,ti}var Id;function Dp(){return Id||(Id=1,Us.exports=Np()),Us.exports}var s=Dp(),Bs={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Rp(){if(_d)return ce;_d=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),A=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.iterator;function N(g){return g===null||typeof g!="object"?null:(g=U&&g[U]||g["@@iterator"],typeof g=="function"?g:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,J={};function G(g,z,Q){this.props=g,this.context=z,this.refs=J,this.updater=Q||L}G.prototype.isReactComponent={},G.prototype.setState=function(g,z){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,z,"setState")},G.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function I(){}I.prototype=G.prototype;function K(g,z,Q){this.props=g,this.context=z,this.refs=J,this.updater=Q||L}var W=K.prototype=new I;W.constructor=K,C(W,G.prototype),W.isPureReactComponent=!0;var re=Array.isArray,ee={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function Ue(g,z,Q,Z,Y,se){return Q=se.ref,{$$typeof:o,type:g,key:z,ref:Q!==void 0?Q:null,props:se}}function qe(g,z){return Ue(g.type,z,void 0,void 0,void 0,g.props)}function V(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function R(g){var z={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Q){return z[Q]})}var B=/\/+/g;function le(g,z){return typeof g=="object"&&g!==null&&g.key!=null?R(""+g.key):z.toString(36)}function ln(){}function kn(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ln,ln):(g.status="pending",g.then(function(z){g.status==="pending"&&(g.status="fulfilled",g.value=z)},function(z){g.status==="pending"&&(g.status="rejected",g.reason=z)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function on(g,z,Q,Z,Y){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var P=!1;if(g===null)P=!0;else switch(se){case"bigint":case"string":case"number":P=!0;break;case"object":switch(g.$$typeof){case o:case d:P=!0;break;case k:return P=g._init,on(P(g._payload),z,Q,Z,Y)}}if(P)return Y=Y(g),P=Z===""?"."+le(g,0):Z,re(Y)?(Q="",P!=null&&(Q=P.replace(B,"$&/")+"/"),on(Y,z,Q,"",function(Oe){return Oe})):Y!=null&&(V(Y)&&(Y=qe(Y,Q+(Y.key==null||g&&g.key===Y.key?"":(""+Y.key).replace(B,"$&/")+"/")+P)),z.push(Y)),1;P=0;var ke=Z===""?".":Z+":";if(re(g))for(var ge=0;ge<g.length;ge++)Z=g[ge],se=ke+le(Z,ge),P+=on(Z,z,Q,se,Y);else if(ge=N(g),typeof ge=="function")for(g=ge.call(g),ge=0;!(Z=g.next()).done;)Z=Z.value,se=ke+le(Z,ge++),P+=on(Z,z,Q,se,Y);else if(se==="object"){if(typeof g.then=="function")return on(kn(g),z,Q,Z,Y);throw z=String(g),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return P}function H(g,z,Q){if(g==null)return g;var Z=[],Y=0;return on(g,Z,"","",function(se){return z.call(Q,se,Y++)}),Z}function ie(g){if(g._status===-1){var z=g._result;z=z(),z.then(function(Q){(g._status===0||g._status===-1)&&(g._status=1,g._result=Q)},function(Q){(g._status===0||g._status===-1)&&(g._status=2,g._result=Q)}),g._status===-1&&(g._status=0,g._result=z)}if(g._status===1)return g._result.default;throw g._result}var te=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function je(){}return ce.Children={map:H,forEach:function(g,z,Q){H(g,function(){z.apply(this,arguments)},Q)},count:function(g){var z=0;return H(g,function(){z++}),z},toArray:function(g){return H(g,function(z){return z})||[]},only:function(g){if(!V(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ce.Component=G,ce.Fragment=h,ce.Profiler=f,ce.PureComponent=K,ce.StrictMode=r,ce.Suspense=v,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ce.act=function(){throw Error("act(...) is not supported in production builds of React.")},ce.cache=function(g){return function(){return g.apply(null,arguments)}},ce.cloneElement=function(g,z,Q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Z=C({},g.props),Y=g.key,se=void 0;if(z!=null)for(P in z.ref!==void 0&&(se=void 0),z.key!==void 0&&(Y=""+z.key),z)!Ee.call(z,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&z.ref===void 0||(Z[P]=z[P]);var P=arguments.length-2;if(P===1)Z.children=Q;else if(1<P){for(var ke=Array(P),ge=0;ge<P;ge++)ke[ge]=arguments[ge+2];Z.children=ke}return Ue(g.type,Y,void 0,void 0,se,Z)},ce.createContext=function(g){return g={$$typeof:A,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:y,_context:g},g},ce.createElement=function(g,z,Q){var Z,Y={},se=null;if(z!=null)for(Z in z.key!==void 0&&(se=""+z.key),z)Ee.call(z,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(Y[Z]=z[Z]);var P=arguments.length-2;if(P===1)Y.children=Q;else if(1<P){for(var ke=Array(P),ge=0;ge<P;ge++)ke[ge]=arguments[ge+2];Y.children=ke}if(g&&g.defaultProps)for(Z in P=g.defaultProps,P)Y[Z]===void 0&&(Y[Z]=P[Z]);return Ue(g,se,void 0,void 0,null,Y)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(g){return{$$typeof:x,render:g}},ce.isValidElement=V,ce.lazy=function(g){return{$$typeof:k,_payload:{_status:-1,_result:g},_init:ie}},ce.memo=function(g,z){return{$$typeof:p,type:g,compare:z===void 0?null:z}},ce.startTransition=function(g){var z=ee.T,Q={};ee.T=Q;try{var Z=g(),Y=ee.S;Y!==null&&Y(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(je,te)}catch(se){te(se)}finally{ee.T=z}},ce.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ce.use=function(g){return ee.H.use(g)},ce.useActionState=function(g,z,Q){return ee.H.useActionState(g,z,Q)},ce.useCallback=function(g,z){return ee.H.useCallback(g,z)},ce.useContext=function(g){return ee.H.useContext(g)},ce.useDebugValue=function(){},ce.useDeferredValue=function(g,z){return ee.H.useDeferredValue(g,z)},ce.useEffect=function(g,z){return ee.H.useEffect(g,z)},ce.useId=function(){return ee.H.useId()},ce.useImperativeHandle=function(g,z,Q){return ee.H.useImperativeHandle(g,z,Q)},ce.useInsertionEffect=function(g,z){return ee.H.useInsertionEffect(g,z)},ce.useLayoutEffect=function(g,z){return ee.H.useLayoutEffect(g,z)},ce.useMemo=function(g,z){return ee.H.useMemo(g,z)},ce.useOptimistic=function(g,z){return ee.H.useOptimistic(g,z)},ce.useReducer=function(g,z,Q){return ee.H.useReducer(g,z,Q)},ce.useRef=function(g){return ee.H.useRef(g)},ce.useState=function(g){return ee.H.useState(g)},ce.useSyncExternalStore=function(g,z,Q){return ee.H.useSyncExternalStore(g,z,Q)},ce.useTransition=function(){return ee.H.useTransition()},ce.version="19.0.0",ce}var Ud;function Ps(){return Ud||(Ud=1,Bs.exports=Rp()),Bs.exports}var j=Ps();const Ip=nf(j);var Ls={exports:{}},ai={},Hs={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function _p(){return Bd||(Bd=1,function(o){function d(H,ie){var te=H.length;H.push(ie);e:for(;0<te;){var je=te-1>>>1,g=H[je];if(0<f(g,ie))H[je]=ie,H[te]=g,te=je;else break e}}function h(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],te=H.pop();if(te!==ie){H[0]=te;e:for(var je=0,g=H.length,z=g>>>1;je<z;){var Q=2*(je+1)-1,Z=H[Q],Y=Q+1,se=H[Y];if(0>f(Z,te))Y<g&&0>f(se,Z)?(H[je]=se,H[Y]=te,je=Y):(H[je]=Z,H[Q]=te,je=Q);else if(Y<g&&0>f(se,te))H[je]=se,H[Y]=te,je=Y;else break e}}return ie}function f(H,ie){var te=H.sortIndex-ie.sortIndex;return te!==0?te:H.id-ie.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;o.unstable_now=function(){return y.now()}}else{var A=Date,x=A.now();o.unstable_now=function(){return A.now()-x}}var v=[],p=[],k=1,U=null,N=3,L=!1,C=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function W(H){for(var ie=h(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=H)r(p),ie.sortIndex=ie.expirationTime,d(v,ie);else break;ie=h(p)}}function re(H){if(J=!1,W(H),!C)if(h(v)!==null)C=!0,kn();else{var ie=h(p);ie!==null&&on(re,ie.startTime-H)}}var ee=!1,Ee=-1,Ue=5,qe=-1;function V(){return!(o.unstable_now()-qe<Ue)}function R(){if(ee){var H=o.unstable_now();qe=H;var ie=!0;try{e:{C=!1,J&&(J=!1,I(Ee),Ee=-1),L=!0;var te=N;try{n:{for(W(H),U=h(v);U!==null&&!(U.expirationTime>H&&V());){var je=U.callback;if(typeof je=="function"){U.callback=null,N=U.priorityLevel;var g=je(U.expirationTime<=H);if(H=o.unstable_now(),typeof g=="function"){U.callback=g,W(H),ie=!0;break n}U===h(v)&&r(v),W(H)}else r(v);U=h(v)}if(U!==null)ie=!0;else{var z=h(p);z!==null&&on(re,z.startTime-H),ie=!1}}break e}finally{U=null,N=te,L=!1}ie=void 0}}finally{ie?B():ee=!1}}}var B;if(typeof K=="function")B=function(){K(R)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ln=le.port2;le.port1.onmessage=R,B=function(){ln.postMessage(null)}}else B=function(){G(R,0)};function kn(){ee||(ee=!0,B())}function on(H,ie){Ee=G(function(){H(o.unstable_now())},ie)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){C||L||(C=!0,kn())},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return N},o.unstable_getFirstCallbackNode=function(){return h(v)},o.unstable_next=function(H){switch(N){case 1:case 2:case 3:var ie=3;break;default:ie=N}var te=N;N=ie;try{return H()}finally{N=te}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=N;N=H;try{return ie()}finally{N=te}},o.unstable_scheduleCallback=function(H,ie,te){var je=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?je+te:je):te=je,H){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=te+g,H={id:k++,callback:ie,priorityLevel:H,startTime:te,expirationTime:g,sortIndex:-1},te>je?(H.sortIndex=te,d(p,H),h(v)===null&&H===h(p)&&(J?(I(Ee),Ee=-1):J=!0,on(re,te-je))):(H.sortIndex=g,d(v,H),C||L||(C=!0,kn())),H},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(H){var ie=N;return function(){var te=N;N=ie;try{return H.apply(this,arguments)}finally{N=te}}}}(Ys)),Ys}var Ld;function Up(){return Ld||(Ld=1,Hs.exports=_p()),Hs.exports}var Gs={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Bp(){if(Hd)return hn;Hd=1;var o=Ps();function d(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)p+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var r={d:{f:h,r:function(){throw Error(d(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},f=Symbol.for("react.portal");function y(v,p,k){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:U==null?null:""+U,children:v,containerInfo:p,implementation:k}}var A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,hn.createPortal=function(v,p){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(d(299));return y(v,p,null,k)},hn.flushSync=function(v){var p=A.T,k=r.p;try{if(A.T=null,r.p=2,v)return v()}finally{A.T=p,r.p=k,r.d.f()}},hn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},hn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},hn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var k=p.as,U=x(k,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;k==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:N,fetchPriority:L}):k==="script"&&r.d.X(v,{crossOrigin:U,integrity:N,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},hn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var k=x(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},hn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var k=p.as,U=x(k,p.crossOrigin);r.d.L(v,k,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},hn.preloadModule=function(v,p){if(typeof v=="string")if(p){var k=x(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},hn.requestFormReset=function(v){r.d.r(v)},hn.unstable_batchedUpdates=function(v,p){return v(p)},hn.useFormState=function(v,p,k){return A.H.useFormState(v,p,k)},hn.useFormStatus=function(){return A.H.useHostTransitionStatus()},hn.version="19.0.0",hn}var Yd;function Lp(){if(Yd)return Gs.exports;Yd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Gs.exports=Bp(),Gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Hp(){if(Gd)return ai;Gd=1;var o=Up(),d=Ps(),h=Lp();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var y=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),re=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function Ee(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case x:return"Portal";case k:return"Profiler";case p:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:qe(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return qe(e(n))}catch{}}return null}var V=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,B,le;function ln(e){if(B===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",le=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+le}var kn=!1;function on(e,n){if(!e||kn)return"";kn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var T=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){T=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){T=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var m=u.split(`
`),w=c.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===w.length)for(a=m.length-1,l=w.length-1;1<=a&&0<=l&&m[a]!==w[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==w[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==w[l]){var q=`
`+m[a].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=a&&0<=l);break}}}finally{kn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ln(t):""}function H(e){switch(e.tag){case 26:case 27:case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 15:return e=on(e.type,!1),e;case 11:return e=on(e.type.render,!1),e;case 1:return e=on(e.type,!0),e;default:return""}}function ie(e){try{var n="";do n+=H(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function te(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function je(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(te(e)!==e)throw Error(r(188))}function z(e){var n=e.alternate;if(!n){if(n=te(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return g(l),e;if(i===a)return g(l),n;i=i.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=i;else{for(var u=!1,c=l.child;c;){if(c===t){u=!0,t=l,a=i;break}if(c===a){u=!0,a=l,t=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===t){u=!0,t=i,a=l;break}if(c===a){u=!0,a=i,t=l;break}c=c.sibling}if(!u)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Q(e),n!==null)return n;e=e.sibling}return null}var Z=Array.isArray,Y=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},P=[],ke=-1;function ge(e){return{current:e}}function Oe(e){0>ke||(e.current=P[ke],P[ke]=null,ke--)}function we(e,n){ke++,P[ke]=e.current,e.current=n}var Ge=ge(null),nt=ge(null),Xn=ge(null),un=ge(null);function Zn(e,n){switch(we(Xn,n),we(nt,e),we(Ge,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?cd(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=cd(e),n=hd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Oe(Ge),we(Ge,n)}function Et(){Oe(Ge),Oe(nt),Oe(Xn)}function tt(e){e.memoizedState!==null&&we(un,e);var n=Ge.current,t=hd(n,e.type);n!==t&&(we(nt,e),we(Ge,t))}function At(e){nt.current===e&&(Oe(Ge),Oe(nt)),un.current===e&&(Oe(un),$l._currentValue=se)}var Tt=Object.prototype.hasOwnProperty,xt=o.unstable_scheduleCallback,il=o.unstable_cancelCallback,Mo=o.unstable_shouldYield,qo=o.unstable_requestPaint,Mn=o.unstable_now,Wt=o.unstable_getCurrentPriorityLevel,ol=o.unstable_ImmediatePriority,ul=o.unstable_UserBlockingPriority,Kt=o.unstable_NormalPriority,zo=o.unstable_LowPriority,di=o.unstable_IdlePriority,Co=o.log,Oo=o.unstable_setDisableYieldValue,$t=null,dn=null;function No(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot($t,e,void 0,(e.current.flags&128)===128)}catch{}}function _(e){if(typeof Co=="function"&&Oo(e),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode($t,e)}catch{}}var X=Math.clz32?Math.clz32:Ae,oe=Math.log,pe=Math.LN2;function Ae(e){return e>>>=0,e===0?32:31-(oe(e)/pe|0)|0}var Be=128,Qe=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yn(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var c=t&134217727;return c!==0?(t=c&~l,t!==0?a=pn(t):(i&=c,i!==0?a=pn(i):e||(u=c&~u,u!==0&&(a=pn(u))))):(c=t&~l,c!==0?a=pn(c):i!==0?a=pn(i):e||(u=t&~u,u!==0&&(a=pn(u)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,u=n&-n,l>=u||l===32&&(u&4194176)!==0)?n:a}function sn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function gn(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ja(){var e=Be;return Be<<=1,(Be&4194176)===0&&(Be=128),e}function Sn(){var e=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),e}function De(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hn(e,n,t,a,l,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,m=e.expirationTimes,w=e.hiddenUpdates;for(t=u&~t;0<t;){var q=31-X(t),D=1<<q;c[q]=0,m[q]=-1;var T=w[q];if(T!==null)for(w[q]=null,q=0;q<T.length;q++){var M=T[q];M!==null&&(M.lane&=-536870913)}t&=~D}a!==0&&Ft(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~n))}function Ft(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-X(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function sl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-X(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ur(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function Ef(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var kt=Math.random().toString(36).slice(2),rn="__reactFiber$"+kt,vn="__reactProps$"+kt,Ea="__reactContainer$"+kt,Do="__reactEvents$"+kt,Af="__reactListeners$"+kt,Tf="__reactHandles$"+kt,sr="__reactResources$"+kt,rl="__reactMarker$"+kt;function Ro(e){delete e[rn],delete e[vn],delete e[Do],delete e[Af],delete e[Tf]}function Pt(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ea]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=md(e);e!==null;){if(t=e[rn])return t;e=md(e)}return n}e=t,t=e.parentNode}return null}function Aa(e){if(e=e[rn]||e[Ea]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function cl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ta(e){var n=e[sr];return n||(n=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $e(e){e[rl]=!0}var rr=new Set,cr={};function ea(e,n){xa(e,n),xa(e+"Capture",n)}function xa(e,n){for(cr[e]=n,e=0;e<n.length;e++)rr.add(n[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hr={},dr={};function kf(e){return Tt.call(dr,e)?!0:Tt.call(hr,e)?!1:xf.test(e)?dr[e]=!0:(hr[e]=!0,!1)}function fi(e,n,t){if(kf(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function mi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function lt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mf(e){var n=fr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pi(e){e._valueTracker||(e._valueTracker=Mf(e))}function mr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=fr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qf=/[\n"\\]/g;function zn(e){return e.replace(qf,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Io(e,n,t,a,l,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+qn(n)):e.value!==""+qn(n)&&(e.value=""+qn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?_o(e,u,qn(n)):t!=null?_o(e,u,qn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+qn(c):e.removeAttribute("name")}function pr(e,n,t,a,l,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;t=t!=null?""+qn(t):"",n=n!=null?""+qn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function _o(e,n,t){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ka(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function yr(e,n,t){if(n!=null&&(n=""+qn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+qn(t):""}function gr(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(Z(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=qn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ma(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||zf.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function br(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&vr(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&vr(e,i,n[i])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Of=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return Of.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,za=null;function wr(e){var n=Aa(e);if(n&&(e=n.stateNode)){var t=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Io(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[vn]||null;if(!l)throw Error(r(90));Io(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&mr(a)}break e;case"textarea":yr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ka(e,!!t.multiple,n,!1)}}}var Ho=!1;function Sr(e,n,t){if(Ho)return e(n,t);Ho=!0;try{var a=e(n);return a}finally{if(Ho=!1,(qa!==null||za!==null)&&(eo(),qa&&(n=qa,e=za,za=qa=null,wr(n),e)))for(n=0;n<e.length;n++)wr(e[n])}}function hl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[vn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Yo=!1;if(at)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Yo=!1}var Mt=null,Go=null,vi=null;function jr(){if(vi)return vi;var e,n=Go,t=n.length,a,l="value"in Mt?Mt.value:Mt.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(a=1;a<=u&&n[t-a]===l[i-a];a++);return vi=l.slice(e,1<a?1-a:void 0)}function bi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Er(){return!1}function bn(e){function n(t,a,l,i,u){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wi:Er,this.isPropagationStopped=Er,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=bn(na),fl=R({},na,{view:0,detail:0}),Nf=bn(fl),Qo,Jo,ml,ji=R({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(Qo=e.screenX-ml.screenX,Jo=e.screenY-ml.screenY):Jo=Qo=0,ml=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),Ar=bn(ji),Df=R({},ji,{dataTransfer:0}),Rf=bn(Df),If=R({},fl,{relatedTarget:0}),Vo=bn(If),_f=R({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=bn(_f),Bf=R({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lf=bn(Bf),Hf=R({},na,{data:0}),Tr=bn(Hf),Yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qf[e])?!!n[e]:!1}function Xo(){return Jf}var Vf=R({},fl,{key:function(e){if(e.key){var n=Yf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xf=bn(Vf),Zf=R({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xr=bn(Zf),Wf=R({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Kf=bn(Wf),$f=R({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=bn($f),Pf=R({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=bn(Pf),nm=R({},na,{newState:0,oldState:0}),tm=bn(nm),am=[9,13,27,32],Zo=at&&"CompositionEvent"in window,pl=null;at&&"documentMode"in document&&(pl=document.documentMode);var lm=at&&"TextEvent"in window&&!pl,kr=at&&(!Zo||pl&&8<pl&&11>=pl),Mr=" ",qr=!1;function zr(e,n){switch(e){case"keyup":return am.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function im(e,n){switch(e){case"compositionend":return Cr(n);case"keypress":return n.which!==32?null:(qr=!0,Mr);case"textInput":return e=n.data,e===Mr&&qr?null:e;default:return null}}function om(e,n){if(Ca)return e==="compositionend"||!Zo&&zr(e,n)?(e=jr(),vi=Go=Mt=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kr&&n.locale!=="ko"?null:n.data;default:return null}}var um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!um[e.type]:n==="textarea"}function Nr(e,n,t,a){qa?za?za.push(a):za=[a]:qa=a,n=io(n,"onChange"),0<n.length&&(t=new Si("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var yl=null,gl=null;function sm(e){id(e,0)}function Ei(e){var n=cl(e);if(mr(n))return e}function Dr(e,n){if(e==="change")return n}var Rr=!1;if(at){var Wo;if(at){var Ko="oninput"in document;if(!Ko){var Ir=document.createElement("div");Ir.setAttribute("oninput","return;"),Ko=typeof Ir.oninput=="function"}Wo=Ko}else Wo=!1;Rr=Wo&&(!document.documentMode||9<document.documentMode)}function _r(){yl&&(yl.detachEvent("onpropertychange",Ur),gl=yl=null)}function Ur(e){if(e.propertyName==="value"&&Ei(gl)){var n=[];Nr(n,gl,e,Lo(e)),Sr(sm,n)}}function rm(e,n,t){e==="focusin"?(_r(),yl=n,gl=t,yl.attachEvent("onpropertychange",Ur)):e==="focusout"&&_r()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(gl)}function hm(e,n){if(e==="click")return Ei(n)}function dm(e,n){if(e==="input"||e==="change")return Ei(n)}function fm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:fm;function vl(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Tt.call(n,l)||!jn(e[l],n[l]))return!1}return!0}function Br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,n){var t=Br(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Br(t)}}function Hr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yi(e.document)}return n}function $o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mm(e,n){var t=Yr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hr(n.ownerDocument.documentElement,n)){if(a!==null&&$o(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!t.extend&&i>a&&(l=a,a=i,i=l),l=Lr(n,i);var u=Lr(n,a);l&&u&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==u.node||t.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),i>a?(t.addRange(e),t.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pm=at&&"documentMode"in document&&11>=document.documentMode,Oa=null,Fo=null,bl=null,Po=!1;function Gr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Po||Oa==null||Oa!==yi(a)||(a=Oa,"selectionStart"in a&&$o(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bl&&vl(bl,a)||(bl=a,a=io(Fo,"onSelect"),0<a.length&&(n=new Si("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Oa)))}function ta(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Na={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},eu={},Qr={};at&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete Na.animationend.animation,delete Na.animationiteration.animation,delete Na.animationstart.animation),"TransitionEvent"in window||delete Na.transitionend.transition);function aa(e){if(eu[e])return eu[e];if(!Na[e])return e;var n=Na[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qr)return eu[e]=n[t];return e}var Jr=aa("animationend"),Vr=aa("animationiteration"),Xr=aa("animationstart"),ym=aa("transitionrun"),gm=aa("transitionstart"),vm=aa("transitioncancel"),Zr=aa("transitionend"),Wr=new Map,Kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Yn(e,n){Wr.set(e,n),ea(n,[e])}var Cn=[],Da=0,nu=0;function Ai(){for(var e=Da,n=nu=Da=0;n<e;){var t=Cn[n];Cn[n++]=null;var a=Cn[n];Cn[n++]=null;var l=Cn[n];Cn[n++]=null;var i=Cn[n];if(Cn[n++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&$r(t,l,i)}}function Ti(e,n,t,a){Cn[Da++]=e,Cn[Da++]=n,Cn[Da++]=t,Cn[Da++]=a,nu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function tu(e,n,t,a){return Ti(e,n,t,a),xi(e)}function qt(e,n){return Ti(e,null,null,n),xi(e)}function $r(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;l&&n!==null&&e.tag===3&&(i=e.stateNode,l=31-X(t),i=i.hiddenUpdates,e=i[l],e===null?i[l]=[n]:e.push(n),n.lane=t|536870912)}function xi(e){if(50<Ql)throw Ql=0,ss=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ra={},Fr=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=Fr.get(e);return t!==void 0?t:(n={value:e,source:n,stack:ie(n)},Fr.set(e,n),n)}return{value:e,source:n,stack:ie(n)}}var Ia=[],_a=0,ki=null,Mi=0,Nn=[],Dn=0,la=null,it=1,ot="";function ia(e,n){Ia[_a++]=Mi,Ia[_a++]=ki,ki=e,Mi=n}function Pr(e,n,t){Nn[Dn++]=it,Nn[Dn++]=ot,Nn[Dn++]=la,la=e;var a=it;e=ot;var l=32-X(a)-1;a&=~(1<<l),t+=1;var i=32-X(n)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,it=1<<32-X(n)+l|t<<l|a,ot=i+e}else it=1<<i|t<<l|a,ot=e}function au(e){e.return!==null&&(ia(e,1),Pr(e,1,0))}function lu(e){for(;e===ki;)ki=Ia[--_a],Ia[_a]=null,Mi=Ia[--_a],Ia[_a]=null;for(;e===la;)la=Nn[--Dn],Nn[Dn]=null,ot=Nn[--Dn],Nn[Dn]=null,it=Nn[--Dn],Nn[Dn]=null}var fn=null,nn=null,ve=!1,Gn=null,Wn=!1,iu=Error(r(519));function oa(e){var n=Error(r(418,""));throw jl(On(n,e)),iu}function ec(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[rn]=e,n[vn]=a,t){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(t=0;t<Vl.length;t++)me(Vl[t],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),pr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),pi(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),gr(n,a.value,a.defaultValue,a.children),pi(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||rd(n.textContent,t)?(a.popover!=null&&(me("beforetoggle",n),me("toggle",n)),a.onScroll!=null&&me("scroll",n),a.onScrollEnd!=null&&me("scrollend",n),a.onClick!=null&&(n.onclick=oo),n=!0):n=!1,n||oa(e)}function nc(e){for(fn=e.return;fn;)switch(fn.tag){case 3:case 27:Wn=!0;return;case 5:case 13:Wn=!1;return;default:fn=fn.return}}function wl(e){if(e!==fn)return!1;if(!ve)return nc(e),ve=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ts(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&nn&&oa(e),nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){nn=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}nn=null}}else nn=fn?Jn(e.stateNode.nextSibling):null;return!0}function Sl(){nn=fn=null,ve=!1}function jl(e){Gn===null?Gn=[e]:Gn.push(e)}var El=Error(r(460)),tc=Error(r(474)),ou={then:function(){}};function ac(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qi(){}function lc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(qi,qi),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e}throw Al=n,El}}var Al=null;function ic(){if(Al===null)throw Error(r(459));var e=Al;return Al=null,e}var Ua=null,Tl=0;function zi(e){var n=Tl;return Tl+=1,Ua===null&&(Ua=[]),lc(Ua,e,n)}function xl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ci(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function oc(e){var n=e._init;return n(e._payload)}function uc(e){function n(S,b){if(e){var E=S.deletions;E===null?(S.deletions=[b],S.flags|=16):E.push(b)}}function t(S,b){if(!e)return null;for(;b!==null;)n(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function l(S,b){return S=Ht(S,b),S.index=0,S.sibling=null,S}function i(S,b,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<b?(S.flags|=33554434,b):E):(S.flags|=33554434,b)):(S.flags|=1048576,b)}function u(S){return e&&S.alternate===null&&(S.flags|=33554434),S}function c(S,b,E,O){return b===null||b.tag!==6?(b=es(E,S.mode,O),b.return=S,b):(b=l(b,E),b.return=S,b)}function m(S,b,E,O){var $=E.type;return $===v?q(S,b,E.props.children,O,E.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===K&&oc($)===b.type)?(b=l(b,E.props),xl(b,E),b.return=S,b):(b=Wi(E.type,E.key,E.props,null,S.mode,O),xl(b,E),b.return=S,b)}function w(S,b,E,O){return b===null||b.tag!==4||b.stateNode.containerInfo!==E.containerInfo||b.stateNode.implementation!==E.implementation?(b=ns(E,S.mode,O),b.return=S,b):(b=l(b,E.children||[]),b.return=S,b)}function q(S,b,E,O,$){return b===null||b.tag!==7?(b=ya(E,S.mode,O,$),b.return=S,b):(b=l(b,E),b.return=S,b)}function D(S,b,E){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=es(""+b,S.mode,E),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case A:return E=Wi(b.type,b.key,b.props,null,S.mode,E),xl(E,b),E.return=S,E;case x:return b=ns(b,S.mode,E),b.return=S,b;case K:var O=b._init;return b=O(b._payload),D(S,b,E)}if(Z(b)||Ee(b))return b=ya(b,S.mode,E,null),b.return=S,b;if(typeof b.then=="function")return D(S,zi(b),E);if(b.$$typeof===L)return D(S,Vi(S,b),E);Ci(S,b)}return null}function T(S,b,E,O){var $=b!==null?b.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return $!==null?null:c(S,b,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return E.key===$?m(S,b,E,O):null;case x:return E.key===$?w(S,b,E,O):null;case K:return $=E._init,E=$(E._payload),T(S,b,E,O)}if(Z(E)||Ee(E))return $!==null?null:q(S,b,E,O,null);if(typeof E.then=="function")return T(S,b,zi(E),O);if(E.$$typeof===L)return T(S,b,Vi(S,E),O);Ci(S,E)}return null}function M(S,b,E,O,$){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return S=S.get(E)||null,c(b,S,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return S=S.get(O.key===null?E:O.key)||null,m(b,S,O,$);case x:return S=S.get(O.key===null?E:O.key)||null,w(b,S,O,$);case K:var de=O._init;return O=de(O._payload),M(S,b,E,O,$)}if(Z(O)||Ee(O))return S=S.get(E)||null,q(b,S,O,$,null);if(typeof O.then=="function")return M(S,b,E,zi(O),$);if(O.$$typeof===L)return M(S,b,E,Vi(b,O),$);Ci(b,O)}return null}function F(S,b,E,O){for(var $=null,de=null,ne=b,ae=b=0,en=null;ne!==null&&ae<E.length;ae++){ne.index>ae?(en=ne,ne=null):en=ne.sibling;var be=T(S,ne,E[ae],O);if(be===null){ne===null&&(ne=en);break}e&&ne&&be.alternate===null&&n(S,ne),b=i(be,b,ae),de===null?$=be:de.sibling=be,de=be,ne=en}if(ae===E.length)return t(S,ne),ve&&ia(S,ae),$;if(ne===null){for(;ae<E.length;ae++)ne=D(S,E[ae],O),ne!==null&&(b=i(ne,b,ae),de===null?$=ne:de.sibling=ne,de=ne);return ve&&ia(S,ae),$}for(ne=a(ne);ae<E.length;ae++)en=M(ne,S,ae,E[ae],O),en!==null&&(e&&en.alternate!==null&&ne.delete(en.key===null?ae:en.key),b=i(en,b,ae),de===null?$=en:de.sibling=en,de=en);return e&&ne.forEach(function(Zt){return n(S,Zt)}),ve&&ia(S,ae),$}function ue(S,b,E,O){if(E==null)throw Error(r(151));for(var $=null,de=null,ne=b,ae=b=0,en=null,be=E.next();ne!==null&&!be.done;ae++,be=E.next()){ne.index>ae?(en=ne,ne=null):en=ne.sibling;var Zt=T(S,ne,be.value,O);if(Zt===null){ne===null&&(ne=en);break}e&&ne&&Zt.alternate===null&&n(S,ne),b=i(Zt,b,ae),de===null?$=Zt:de.sibling=Zt,de=Zt,ne=en}if(be.done)return t(S,ne),ve&&ia(S,ae),$;if(ne===null){for(;!be.done;ae++,be=E.next())be=D(S,be.value,O),be!==null&&(b=i(be,b,ae),de===null?$=be:de.sibling=be,de=be);return ve&&ia(S,ae),$}for(ne=a(ne);!be.done;ae++,be=E.next())be=M(ne,S,ae,be.value,O),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?ae:be.key),b=i(be,b,ae),de===null?$=be:de.sibling=be,de=be);return e&&ne.forEach(function(Op){return n(S,Op)}),ve&&ia(S,ae),$}function Ye(S,b,E,O){if(typeof E=="object"&&E!==null&&E.type===v&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case A:e:{for(var $=E.key;b!==null;){if(b.key===$){if($=E.type,$===v){if(b.tag===7){t(S,b.sibling),O=l(b,E.props.children),O.return=S,S=O;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===K&&oc($)===b.type){t(S,b.sibling),O=l(b,E.props),xl(O,E),O.return=S,S=O;break e}t(S,b);break}else n(S,b);b=b.sibling}E.type===v?(O=ya(E.props.children,S.mode,O,E.key),O.return=S,S=O):(O=Wi(E.type,E.key,E.props,null,S.mode,O),xl(O,E),O.return=S,S=O)}return u(S);case x:e:{for($=E.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===E.containerInfo&&b.stateNode.implementation===E.implementation){t(S,b.sibling),O=l(b,E.children||[]),O.return=S,S=O;break e}else{t(S,b);break}else n(S,b);b=b.sibling}O=ns(E,S.mode,O),O.return=S,S=O}return u(S);case K:return $=E._init,E=$(E._payload),Ye(S,b,E,O)}if(Z(E))return F(S,b,E,O);if(Ee(E)){if($=Ee(E),typeof $!="function")throw Error(r(150));return E=$.call(E),ue(S,b,E,O)}if(typeof E.then=="function")return Ye(S,b,zi(E),O);if(E.$$typeof===L)return Ye(S,b,Vi(S,E),O);Ci(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,b!==null&&b.tag===6?(t(S,b.sibling),O=l(b,E),O.return=S,S=O):(t(S,b),O=es(E,S.mode,O),O.return=S,S=O),u(S)):t(S,b)}return function(S,b,E,O){try{Tl=0;var $=Ye(S,b,E,O);return Ua=null,$}catch(ne){if(ne===El)throw ne;var de=Un(29,ne,null,S.mode);return de.lanes=O,de.return=S,de}finally{}}}var ua=uc(!0),sc=uc(!1),Ba=ge(null),Oi=ge(0);function rc(e,n){e=gt,we(Oi,e),we(Ba,n),gt=e|n.baseLanes}function uu(){we(Oi,gt),we(Ba,Ba.current)}function su(){gt=Oi.current,Oe(Ba),Oe(Oi)}var Rn=ge(null),Kn=null;function zt(e){var n=e.alternate;we(We,We.current&1),we(Rn,e),Kn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Kn=e)}function cc(e){if(e.tag===22){if(we(We,We.current),we(Rn,e),Kn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Kn=e)}}else Ct()}function Ct(){we(We,We.current),we(Rn,Rn.current)}function ut(e){Oe(Rn),Kn===e&&(Kn=null),Oe(We)}var We=ge(0);function Ni(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},wm=o.unstable_scheduleCallback,Sm=o.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new bm,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&wm(Sm,function(){e.controller.abort()})}var Ml=null,cu=0,La=0,Ha=null;function jm(e,n){if(Ml===null){var t=Ml=[];cu=0,La=ys(),Ha={status:"pending",value:void 0,then:function(a){t.push(a)}}}return cu++,n.then(hc,hc),n}function hc(){if(--cu===0&&Ml!==null){Ha!==null&&(Ha.status="fulfilled");var e=Ml;Ml=null,La=0,Ha=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Em(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var dc=V.S;V.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&jm(e,n),dc!==null&&dc(e,n)};var sa=ge(null);function hu(){var e=sa.current;return e!==null?e:ze.pooledCache}function Di(e,n){n===null?we(sa,sa.current):we(sa,n.pool)}function fc(){var e=hu();return e===null?null:{parent:Ke._currentValue,pool:e}}var Ot=0,he=null,Te=null,Ve=null,Ri=!1,Ya=!1,ra=!1,Ii=0,ql=0,Ga=null,Am=0;function Je(){throw Error(r(321))}function du(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jn(e[t],n[t]))return!1;return!0}function fu(e,n,t,a,l,i){return Ot=i,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,V.H=e===null||e.memoizedState===null?ca:Nt,ra=!1,i=t(a,l),ra=!1,Ya&&(i=pc(n,t,a,l)),mc(e),i}function mc(e){V.H=$n;var n=Te!==null&&Te.next!==null;if(Ot=0,Ve=Te=he=null,Ri=!1,ql=0,Ga=null,n)throw Error(r(300));e===null||Fe||(e=e.dependencies,e!==null&&Ji(e)&&(Fe=!0))}function pc(e,n,t,a){he=e;var l=0;do{if(Ya&&(Ga=null),ql=0,Ya=!1,25<=l)throw Error(r(301));if(l+=1,Ve=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}V.H=ha,i=n(t,a)}while(Ya);return i}function Tm(){var e=V.H,n=e.useState()[0];return n=typeof n.then=="function"?zl(n):n,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(he.flags|=1024),n}function mu(){var e=Ii!==0;return Ii=0,e}function pu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function yu(e){if(Ri){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ri=!1}Ot=0,Ve=Te=he=null,Ya=!1,ql=Ii=0,Ga=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?he.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Xe(){if(Te===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var n=Ve===null?he.memoizedState:Ve.next;if(n!==null)Ve=n,Te=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ve===null?he.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}var _i;_i=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function zl(e){var n=ql;return ql+=1,Ga===null&&(Ga=[]),e=lc(Ga,e,n),n=he,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,V.H=n===null||n.memoizedState===null?ca:Nt),e}function Ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zl(e);if(e.$$typeof===L)return cn(e)}throw Error(r(438,String(e)))}function gu(e){var n=null,t=he.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=he.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=_i(),he.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=re;return n.index++,t}function st(e,n){return typeof n=="function"?n(e):n}function Bi(e){var n=Xe();return vu(n,Te,e)}function vu(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var c=u=null,m=null,w=n,q=!1;do{var D=w.lane&-536870913;if(D!==w.lane?(ye&D)===D:(Ot&D)===D){var T=w.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),D===La&&(q=!0);else if((Ot&T)===T){w=w.next,T===La&&(q=!0);continue}else D={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(c=m=D,u=i):m=m.next=D,he.lanes|=T,Yt|=T;D=w.action,ra&&t(i,D),i=w.hasEagerState?w.eagerState:t(i,D)}else T={lane:D,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(c=m=T,u=i):m=m.next=T,he.lanes|=D,Yt|=D;w=w.next}while(w!==null&&w!==n);if(m===null?u=i:m.next=c,!jn(i,e.memoizedState)&&(Fe=!0,q&&(t=Ha,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=m,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function bu(e){var n=Xe(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);jn(i,n.memoizedState)||(Fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function yc(e,n,t){var a=he,l=Xe(),i=ve;if(i){if(t===void 0)throw Error(r(407));t=t()}else t=n();var u=!jn((Te||l).memoizedState,t);if(u&&(l.memoizedState=t,Fe=!0),l=l.queue,ju(bc.bind(null,a,l,e),[e]),l.getSnapshot!==n||u||Ve!==null&&Ve.memoizedState.tag&1){if(a.flags|=2048,Qa(9,vc.bind(null,a,l,t,n),{destroy:void 0},null),ze===null)throw Error(r(349));i||(Ot&60)!==0||gc(a,n,t)}return t}function gc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=he.updateQueue,n===null?(n=_i(),he.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vc(e,n,t,a){n.value=t,n.getSnapshot=a,wc(n)&&Sc(e)}function bc(e,n,t){return t(function(){wc(n)&&Sc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jn(e,t)}catch{return!0}}function Sc(e){var n=qt(e,2);n!==null&&mn(n,e,2)}function wu(e){var n=wn();if(typeof e=="function"){var t=e;if(e=t(),ra){_(!0);try{t()}finally{_(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:e},n}function jc(e,n,t,a){return e.baseState=t,vu(e,Te,typeof a=="function"?a:st)}function xm(e,n,t,a,l){if(Yi(e))throw Error(r(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};V.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Ec(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Ec(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=V.T,u={};V.T=u;try{var c=t(l,a),m=V.S;m!==null&&m(u,c),Ac(e,n,c)}catch(w){Su(e,n,w)}finally{V.T=i}}else try{i=t(l,a),Ac(e,n,i)}catch(w){Su(e,n,w)}}function Ac(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Tc(e,n,a)},function(a){return Su(e,n,a)}):Tc(e,n,t)}function Tc(e,n,t){n.status="fulfilled",n.value=t,xc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ec(e,t)))}function Su(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,xc(n),n=n.next;while(n!==a)}e.action=null}function xc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kc(e,n){return n}function Mc(e,n){if(ve){var t=ze.formState;if(t!==null){e:{var a=he;if(ve){if(nn){n:{for(var l=nn,i=Wn;l.nodeType!==8;){if(!i){l=null;break n}if(l=Jn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){nn=Jn(l.nextSibling),a=l.data==="F!";break e}}oa(a)}a=!1}a&&(n=t[0])}}return t=wn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kc,lastRenderedState:n},t.queue=a,t=Vc.bind(null,he,a),a.dispatch=t,a=wu(!1),i=ku.bind(null,he,!1,a.queue),a=wn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=xm.bind(null,he,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function qc(e){var n=Xe();return zc(n,Te,e)}function zc(e,n,t){n=vu(e,n,kc)[0],e=Bi(st)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?zl(n):n;var a=Xe(),l=a.queue,i=l.dispatch;return t!==a.memoizedState&&(he.flags|=2048,Qa(9,km.bind(null,l,t),{destroy:void 0},null)),[n,i,e]}function km(e,n){e.action=n}function Cc(e){var n=Xe(),t=Te;if(t!==null)return zc(n,t,e);Xe(),n=n.memoizedState,t=Xe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Qa(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=he.updateQueue,n===null&&(n=_i(),he.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Oc(){return Xe().memoizedState}function Li(e,n,t,a){var l=wn();he.flags|=e,l.memoizedState=Qa(1|n,t,{destroy:void 0},a===void 0?null:a)}function Hi(e,n,t,a){var l=Xe();a=a===void 0?null:a;var i=l.memoizedState.inst;Te!==null&&a!==null&&du(a,Te.memoizedState.deps)?l.memoizedState=Qa(n,t,i,a):(he.flags|=e,l.memoizedState=Qa(1|n,t,i,a))}function Nc(e,n){Li(8390656,8,e,n)}function ju(e,n){Hi(2048,8,e,n)}function Dc(e,n){return Hi(4,2,e,n)}function Rc(e,n){return Hi(4,4,e,n)}function Ic(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _c(e,n,t){t=t!=null?t.concat([e]):null,Hi(4,4,Ic.bind(null,n,e),t)}function Eu(){}function Uc(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&du(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Bc(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&du(n,a[1]))return a[0];if(a=e(),ra){_(!0);try{e()}finally{_(!1)}}return t.memoizedState=[a,n],a}function Au(e,n,t){return t===void 0||(Ot&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Hh(),he.lanes|=e,Yt|=e,t)}function Lc(e,n,t,a){return jn(t,n)?t:Ba.current!==null?(e=Au(e,t,a),jn(e,n)||(Fe=!0),e):(Ot&42)===0?(Fe=!0,e.memoizedState=t):(e=Hh(),he.lanes|=e,Yt|=e,n)}function Hc(e,n,t,a,l){var i=Y.p;Y.p=i!==0&&8>i?i:8;var u=V.T,c={};V.T=c,ku(e,!1,n,t);try{var m=l(),w=V.S;if(w!==null&&w(c,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var q=Em(m,a);Cl(e,n,q,xn(e))}else Cl(e,n,a,xn(e))}catch(D){Cl(e,n,{then:function(){},status:"rejected",reason:D},xn())}finally{Y.p=i,V.T=u}}function Mm(){}function Tu(e,n,t,a){if(e.tag!==5)throw Error(r(476));var l=Yc(e).queue;Hc(e,l,n,se,t===null?Mm:function(){return Gc(e),t(a)})}function Yc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:se},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gc(e){var n=Yc(e).next.queue;Cl(e,n,{},xn())}function xu(){return cn($l)}function Qc(){return Xe().memoizedState}function Jc(){return Xe().memoizedState}function qm(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=xn();e=It(t);var a=_t(n,e,t);a!==null&&(mn(a,n,t),Dl(a,n,t)),n={cache:ru()},e.payload=n;return}n=n.return}}function zm(e,n,t){var a=xn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Yi(e)?Xc(n,t):(t=tu(e,n,t,a),t!==null&&(mn(t,e,a),Zc(t,n,a)))}function Vc(e,n,t){var a=xn();Cl(e,n,t,a)}function Cl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))Xc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,c=i(u,t);if(l.hasEagerState=!0,l.eagerState=c,jn(c,u))return Ti(e,n,l,0),ze===null&&Ai(),!1}catch{}finally{}if(t=tu(e,n,l,a),t!==null)return mn(t,e,a),Zc(t,n,a),!0}return!1}function ku(e,n,t,a){if(a={lane:2,revertLane:ys(),action:a,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(n)throw Error(r(479))}else n=tu(e,t,a,2),n!==null&&mn(n,e,2)}function Yi(e){var n=e.alternate;return e===he||n!==null&&n===he}function Xc(e,n){Ya=Ri=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zc(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}var $n={readContext:cn,use:Ui,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};$n.useCacheRefresh=Je,$n.useMemoCache=Je,$n.useHostTransitionStatus=Je,$n.useFormState=Je,$n.useActionState=Je,$n.useOptimistic=Je;var ca={readContext:cn,use:Ui,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Nc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Li(4194308,4,Ic.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Li(4194308,4,e,n)},useInsertionEffect:function(e,n){Li(4,2,e,n)},useMemo:function(e,n){var t=wn();n=n===void 0?null:n;var a=e();if(ra){_(!0);try{e()}finally{_(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=wn();if(t!==void 0){var l=t(n);if(ra){_(!0);try{t(n)}finally{_(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=zm.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=wu(e);var n=e.queue,t=Vc.bind(null,he,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Eu,useDeferredValue:function(e,n){var t=wn();return Au(t,e,n)},useTransition:function(){var e=wu(!1);return e=Hc.bind(null,he,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=he,l=wn();if(ve){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),ze===null)throw Error(r(349));(ye&60)!==0||gc(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Nc(bc.bind(null,a,i,e),[e]),a.flags|=2048,Qa(9,vc.bind(null,a,i,t,n),{destroy:void 0},null),t},useId:function(){var e=wn(),n=ze.identifierPrefix;if(ve){var t=ot,a=it;t=(a&~(1<<32-X(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ii++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Am++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return wn().memoizedState=qm.bind(null,he)}};ca.useMemoCache=gu,ca.useHostTransitionStatus=xu,ca.useFormState=Mc,ca.useActionState=Mc,ca.useOptimistic=function(e){var n=wn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=ku.bind(null,he,!0,t),t.dispatch=n,[e,n]};var Nt={readContext:cn,use:Ui,useCallback:Uc,useContext:cn,useEffect:ju,useImperativeHandle:_c,useInsertionEffect:Dc,useLayoutEffect:Rc,useMemo:Bc,useReducer:Bi,useRef:Oc,useState:function(){return Bi(st)},useDebugValue:Eu,useDeferredValue:function(e,n){var t=Xe();return Lc(t,Te.memoizedState,e,n)},useTransition:function(){var e=Bi(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:zl(e),n]},useSyncExternalStore:yc,useId:Qc};Nt.useCacheRefresh=Jc,Nt.useMemoCache=gu,Nt.useHostTransitionStatus=xu,Nt.useFormState=qc,Nt.useActionState=qc,Nt.useOptimistic=function(e,n){var t=Xe();return jc(t,Te,e,n)};var ha={readContext:cn,use:Ui,useCallback:Uc,useContext:cn,useEffect:ju,useImperativeHandle:_c,useInsertionEffect:Dc,useLayoutEffect:Rc,useMemo:Bc,useReducer:bu,useRef:Oc,useState:function(){return bu(st)},useDebugValue:Eu,useDeferredValue:function(e,n){var t=Xe();return Te===null?Au(t,e,n):Lc(t,Te.memoizedState,e,n)},useTransition:function(){var e=bu(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:zl(e),n]},useSyncExternalStore:yc,useId:Qc};ha.useCacheRefresh=Jc,ha.useMemoCache=gu,ha.useHostTransitionStatus=xu,ha.useFormState=Cc,ha.useActionState=Cc,ha.useOptimistic=function(e,n){var t=Xe();return Te!==null?jc(t,Te,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Mu(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:R({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var qu={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=xn(),l=It(a);l.payload=n,t!=null&&(l.callback=t),n=_t(e,l,a),n!==null&&(mn(n,e,a),Dl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=xn(),l=It(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=_t(e,l,a),n!==null&&(mn(n,e,a),Dl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xn(),a=It(t);a.tag=2,n!=null&&(a.callback=n),n=_t(e,a,t),n!==null&&(mn(n,e,t),Dl(n,e,t))}};function Wc(e,n,t,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):n.prototype&&n.prototype.isPureReactComponent?!vl(t,a)||!vl(l,i):!0}function Kc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&qu.enqueueReplaceState(n,n.state,null)}function da(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=R({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $c(e){Gi(e)}function Fc(e){console.error(e)}function Pc(e){Gi(e)}function Qi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function eh(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zu(e,n,t){return t=It(t),t.tag=3,t.payload={element:null},t.callback=function(){Qi(e,n)},t}function nh(e){return e=It(e),e.tag=3,e}function th(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){eh(n,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){eh(n,t,a),typeof l!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Cm(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Nl(n,t,l,!0),t=Rn.current,t!==null){switch(t.tag){case 13:return Kn===null?hs():t.alternate===null&&He===0&&(He=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===ou?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),fs(e,a,l)),!1;case 22:return t.flags|=65536,a===ou?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),fs(e,a,l)),!1}throw Error(r(435,t.tag))}return fs(e,a,l),hs(),!1}if(ve)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==iu&&(e=Error(r(422),{cause:a}),jl(On(e,t)))):(a!==iu&&(n=Error(r(423),{cause:a}),jl(On(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=On(a,t),l=zu(e.stateNode,a,l),Ju(e,l),He!==4&&(He=2)),!1;var i=Error(r(520),{cause:a});if(i=On(i,t),Yl===null?Yl=[i]:Yl.push(i),He!==4&&(He=2),n===null)return!0;a=On(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=zu(t.stateNode,a,e),Ju(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Gt===null||!Gt.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=nh(l),th(l,e,t,a),Ju(t,l),!1}t=t.return}while(t!==null);return!1}var ah=Error(r(461)),Fe=!1;function tn(e,n,t,a){n.child=e===null?sc(n,null,t,a):ua(n,e.child,t,a)}function lh(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return ma(n),a=fu(e,n,t,u,i,l),c=mu(),e!==null&&!Fe?(pu(e,n,l),rt(e,n,l)):(ve&&c&&au(n),n.flags|=1,tn(e,n,a,l),n.child)}function ih(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,oh(e,n,i,a,l)):(e=Wi(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!Bu(e,l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:vl,t(u,a)&&e.ref===n.ref)return rt(e,n,l)}return n.flags|=1,e=Ht(i,a),e.ref=n.ref,e.return=n,n.child=e}function oh(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(vl(i,a)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=a=i,Bu(e,l))(e.flags&131072)!==0&&(Fe=!0);else return n.lanes=e.lanes,rt(e,n,l)}return Cu(e,n,t,a,l)}function uh(e,n,t){var a=n.pendingProps,l=a.children,i=(n.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Ol(e,n),a.mode==="hidden"||i){if((n.flags&128)!==0){if(a=u!==null?u.baseLanes|t:t,e!==null){for(l=n.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;n.childLanes=i&~a}else n.childLanes=0,n.child=null;return sh(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(n,u!==null?u.cachePool:null),u!==null?rc(n,u):uu(),cc(n);else return n.lanes=n.childLanes=536870912,sh(e,n,u!==null?u.baseLanes|t:t,t)}else u!==null?(Di(n,u.cachePool),rc(n,u),Ct(),n.memoizedState=null):(e!==null&&Di(n,null),uu(),Ct());return tn(e,n,l,t),n.child}function sh(e,n,t,a){var l=hu();return l=l===null?null:{parent:Ke._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Di(n,null),uu(),cc(n),e!==null&&Nl(e,n,a,!0),null}function Ol(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function Cu(e,n,t,a,l){return ma(n),t=fu(e,n,t,a,void 0,l),a=mu(),e!==null&&!Fe?(pu(e,n,l),rt(e,n,l)):(ve&&a&&au(n),n.flags|=1,tn(e,n,t,l),n.child)}function rh(e,n,t,a,l,i){return ma(n),n.updateQueue=null,t=pc(n,a,t,l),mc(e),a=mu(),e!==null&&!Fe?(pu(e,n,i),rt(e,n,i)):(ve&&a&&au(n),n.flags|=1,tn(e,n,t,i),n.child)}function ch(e,n,t,a,l){if(ma(n),n.stateNode===null){var i=Ra,u=t.contextType;typeof u=="object"&&u!==null&&(i=cn(u)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qu,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Gu(n),u=t.contextType,i.context=typeof u=="object"&&u!==null?cn(u):Ra,i.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Mu(n,t,u,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&qu.enqueueReplaceState(i,i.state,null),Il(n,a,i,l),Rl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var c=n.memoizedProps,m=da(t,c);i.props=m;var w=i.context,q=t.contextType;u=Ra,typeof q=="object"&&q!==null&&(u=cn(q));var D=t.getDerivedStateFromProps;q=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,q||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==u)&&Kc(n,i,a,u),Rt=!1;var T=n.memoizedState;i.state=T,Il(n,a,i,l),Rl(),w=n.memoizedState,c||T!==w||Rt?(typeof D=="function"&&(Mu(n,t,D,a),w=n.memoizedState),(m=Rt||Wc(n,t,m,a,T,w,u))?(q||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=w),i.props=a,i.state=w,i.context=u,a=m):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Qu(e,n),u=n.memoizedProps,q=da(t,u),i.props=q,D=n.pendingProps,T=i.context,w=t.contextType,m=Ra,typeof w=="object"&&w!==null&&(m=cn(w)),c=t.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==D||T!==m)&&Kc(n,i,a,m),Rt=!1,T=n.memoizedState,i.state=T,Il(n,a,i,l),Rl();var M=n.memoizedState;u!==D||T!==M||Rt||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof c=="function"&&(Mu(n,t,c,a),M=n.memoizedState),(q=Rt||Wc(n,t,q,a,T,M,m)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,M,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,M,m)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=M),i.props=a,i.state=M,i.context=m,a=q):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,Ol(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=ua(n,e.child,null,l),n.child=ua(n,null,t,l)):tn(e,n,t,l),n.memoizedState=i.state,e=n.child):e=rt(e,n,l),e}function hh(e,n,t,a){return Sl(),n.flags|=256,tn(e,n,t,a),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Nu(e){return{baseLanes:e,cachePool:fc()}}function Du(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Bn),e}function dh(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(ve){if(l?zt(n):Ct(),ve){var c=nn,m;if(m=c){e:{for(m=c,c=Wn;m.nodeType!==8;){if(!c){c=null;break e}if(m=Jn(m.nextSibling),m===null){c=null;break e}}c=m}c!==null?(n.memoizedState={dehydrated:c,treeContext:la!==null?{id:it,overflow:ot}:null,retryLane:536870912},m=Un(18,null,null,0),m.stateNode=c,m.return=n,n.child=m,fn=n,nn=null,m=!0):m=!1}m||oa(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?n.lanes=16:n.lanes=536870912,null;ut(n)}return c=a.children,a=a.fallback,l?(Ct(),l=n.mode,c=Iu({mode:"hidden",children:c},l),a=ya(a,l,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,l=n.child,l.memoizedState=Nu(t),l.childLanes=Du(e,u,t),n.memoizedState=Ou,a):(zt(n),Ru(n,c))}if(m=e.memoizedState,m!==null&&(c=m.dehydrated,c!==null)){if(i)n.flags&256?(zt(n),n.flags&=-257,n=_u(e,n,t)):n.memoizedState!==null?(Ct(),n.child=e.child,n.flags|=128,n=null):(Ct(),l=a.fallback,c=n.mode,a=Iu({mode:"visible",children:a.children},c),l=ya(l,c,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,ua(n,e.child,null,t),a=n.child,a.memoizedState=Nu(t),a.childLanes=Du(e,u,t),n.memoizedState=Ou,n=l);else if(zt(n),c.data==="$!"){if(u=c.nextSibling&&c.nextSibling.dataset,u)var w=u.dgst;u=w,a=Error(r(419)),a.stack="",a.digest=u,jl({value:a,source:null,stack:null}),n=_u(e,n,t)}else if(Fe||Nl(e,n,t,!1),u=(t&e.childLanes)!==0,Fe||u){if(u=ze,u!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|t))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,qt(e,a),mn(u,e,a),ah}c.data==="$?"||hs(),n=_u(e,n,t)}else c.data==="$?"?(n.flags|=128,n.child=e.child,n=Vm.bind(null,e),c._reactRetry=n,n=null):(e=m.treeContext,nn=Jn(c.nextSibling),fn=n,ve=!0,Gn=null,Wn=!1,e!==null&&(Nn[Dn++]=it,Nn[Dn++]=ot,Nn[Dn++]=la,it=e.id,ot=e.overflow,la=n),n=Ru(n,a.children),n.flags|=4096);return n}return l?(Ct(),l=a.fallback,c=n.mode,m=e.child,w=m.sibling,a=Ht(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,w!==null?l=Ht(w,l):(l=ya(l,c,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,c=e.child.memoizedState,c===null?c=Nu(t):(m=c.cachePool,m!==null?(w=Ke._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=fc(),c={baseLanes:c.baseLanes|t,cachePool:m}),l.memoizedState=c,l.childLanes=Du(e,u,t),n.memoizedState=Ou,a):(zt(n),t=e.child,e=t.sibling,t=Ht(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function Ru(e,n){return n=Iu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Iu(e,n){return Uh(e,n,0,null)}function _u(e,n,t){return ua(n,e.child,null,t),e=Ru(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Hu(e.return,n,t)}function Uu(e,n,t,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=l)}function mh(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;if(tn(e,n,a.children,t),a=We.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,t,n);else if(e.tag===19)fh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(we(We,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Ni(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Uu(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ni(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Uu(n,!0,t,null,i);break;case"together":Uu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Nl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Ht(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ht(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Om(e,n,t){switch(n.tag){case 3:Zn(n,n.stateNode.containerInfo),Dt(n,Ke,e.memoizedState.cache),Sl();break;case 27:case 5:tt(n);break;case 4:Zn(n,n.stateNode.containerInfo);break;case 10:Dt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(zt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?dh(e,n,t):(zt(n),e=rt(e,n,t),e!==null?e.sibling:null);zt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Nl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return mh(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(We,We.current),a)break;return null;case 22:case 23:return n.lanes=0,uh(e,n,t);case 24:Dt(n,Ke,e.memoizedState.cache)}return rt(e,n,t)}function ph(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Fe=!0;else{if(!Bu(e,t)&&(n.flags&128)===0)return Fe=!1,Om(e,n,t);Fe=(e.flags&131072)!==0}else Fe=!1,ve&&(n.flags&1048576)!==0&&Pr(n,Mi,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")Pu(a)?(e=da(a,e),n.tag=1,n=ch(null,n,a,e,t)):(n.tag=0,n=Cu(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===C){n.tag=11,n=lh(null,n,a,e,t);break e}else if(l===I){n.tag=14,n=ih(null,n,a,e,t);break e}}throw n=qe(a)||a,Error(r(306,n,""))}}return n;case 0:return Cu(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=da(a,n.pendingProps),ch(e,n,a,l,t);case 3:e:{if(Zn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var i=n.pendingProps;l=n.memoizedState,a=l.element,Qu(e,n),Il(n,i,null,t);var u=n.memoizedState;if(i=u.cache,Dt(n,Ke,i),i!==l.cache&&Yu(n,[Ke],t,!0),Rl(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=hh(e,n,i,t);break e}else if(i!==a){a=On(Error(r(424)),n),jl(a),n=hh(e,n,i,t);break e}else for(nn=Jn(n.stateNode.containerInfo.firstChild),fn=n,ve=!0,Gn=null,Wn=!0,t=sc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Sl(),i===a){n=rt(e,n,t);break e}tn(e,n,i,t)}n=n.child}return n;case 26:return Ol(e,n),e===null?(t=vd(n.type,null,n.pendingProps,null))?n.memoizedState=t:ve||(t=n.type,e=n.pendingProps,a=uo(Xn.current).createElement(t),a[rn]=n,a[vn]=e,an(a,t,e),$e(a),n.stateNode=a):n.memoizedState=vd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return tt(n),e===null&&ve&&(a=n.stateNode=pd(n.type,n.pendingProps,Xn.current),fn=n,Wn=!0,nn=Jn(a.firstChild)),a=n.pendingProps.children,e!==null||ve?tn(e,n,a,t):n.child=ua(n,null,a,t),Ol(e,n),n.child;case 5:return e===null&&ve&&((l=a=nn)&&(a=sp(a,n.type,n.pendingProps,Wn),a!==null?(n.stateNode=a,fn=n,nn=Jn(a.firstChild),Wn=!1,l=!0):l=!1),l||oa(n)),tt(n),l=n.type,i=n.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Ts(l,i)?a=null:u!==null&&Ts(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=fu(e,n,Tm,null,null,t),$l._currentValue=l),Ol(e,n),tn(e,n,a,t),n.child;case 6:return e===null&&ve&&((e=t=nn)&&(t=rp(t,n.pendingProps,Wn),t!==null?(n.stateNode=t,fn=n,nn=null,e=!0):e=!1),e||oa(n)),null;case 13:return dh(e,n,t);case 4:return Zn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ua(n,null,a,t):tn(e,n,a,t),n.child;case 11:return lh(e,n,n.type,n.pendingProps,t);case 7:return tn(e,n,n.pendingProps,t),n.child;case 8:return tn(e,n,n.pendingProps.children,t),n.child;case 12:return tn(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Dt(n,n.type,a.value),tn(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ma(n),l=cn(l),a=a(l),n.flags|=1,tn(e,n,a,t),n.child;case 14:return ih(e,n,n.type,n.pendingProps,t);case 15:return oh(e,n,n.type,n.pendingProps,t);case 19:return mh(e,n,t);case 22:return uh(e,n,t);case 24:return ma(n),a=cn(Ke),e===null?(l=hu(),l===null&&(l=ze,i=ru(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},Gu(n),Dt(n,Ke,l)):((e.lanes&t)!==0&&(Qu(e,n),Il(n,null,null,t),Rl()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Dt(n,Ke,a)):(a=i.cache,Dt(n,Ke,a),a!==l.cache&&Yu(n,[Ke],t,!0))),tn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Lu=ge(null),fa=null,ct=null;function Dt(e,n,t){we(Lu,n._currentValue),n._currentValue=t}function ht(e){e._currentValue=Lu.current,Oe(Lu)}function Hu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Yu(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var m=0;m<n.length;m++)if(c.context===n[m]){i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Hu(i.return,t,e),a||(u=null);break e}i=c.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(r(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Hu(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function Nl(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var c=l.type;jn(l.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(l===un.current){if(u=l.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}l=l.return}e!==null&&Yu(n,e,t,a),n.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){fa=e,ct=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return yh(fa,e)}function Vi(e,n){return fa===null&&ma(e),yh(e,n)}function yh(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ct===null){if(e===null)throw Error(r(308));ct=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ct=ct.next=n;return t}var Rt=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function It(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _t(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=xi(e),$r(e,null,t),n}return Ti(e,a,n,t),xi(e)}function Dl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}function Ju(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Vu=!1;function Rl(){if(Vu){var e=Ha;if(e!==null)throw e}}function Il(e,n,t,a){Vu=!1;var l=e.updateQueue;Rt=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var m=c,w=m.next;m.next=null,u===null?i=w:u.next=w,u=m;var q=e.alternate;q!==null&&(q=q.updateQueue,c=q.lastBaseUpdate,c!==u&&(c===null?q.firstBaseUpdate=w:c.next=w,q.lastBaseUpdate=m))}if(i!==null){var D=l.baseState;u=0,q=w=m=null,c=i;do{var T=c.lane&-536870913,M=T!==c.lane;if(M?(ye&T)===T:(a&T)===T){T!==0&&T===La&&(Vu=!0),q!==null&&(q=q.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var F=e,ue=c;T=n;var Ye=t;switch(ue.tag){case 1:if(F=ue.payload,typeof F=="function"){D=F.call(Ye,D,T);break e}D=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ue.payload,T=typeof F=="function"?F.call(Ye,D,T):F,T==null)break e;D=R({},D,T);break e;case 2:Rt=!0}}T=c.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[T]:M.push(T))}else M={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},q===null?(w=q=M,m=D):q=q.next=M,u|=T;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;M=c,c=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);q===null&&(m=D),l.baseState=m,l.firstBaseUpdate=w,l.lastBaseUpdate=q,i===null&&(l.shared.lanes=0),Yt|=u,e.lanes=u,e.memoizedState=D}}function gh(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function vh(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)gh(t[e],n)}function _l(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,u=t.inst;a=i(),u.destroy=a}t=t.next}while(t!==l)}}catch(c){Me(n,n.return,c)}}function Ut(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,l=n;var m=t;try{c()}catch(w){Me(l,m,w)}}}a=a.next}while(a!==i)}}catch(w){Me(n,n.return,w)}}function bh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{vh(n,t)}catch(a){Me(e,e.return,a)}}}function wh(e,n,t){t.props=da(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Me(e,n,a)}}function pa(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(i){Me(e,n,i)}}function En(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Me(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Me(e,n,l)}else t.current=null}function Sh(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Me(e,e.return,l)}}function jh(e,n,t){try{var a=e.stateNode;ap(a,e.type,t,n),a[vn]=n}catch(l){Me(e,e.return,l)}}function Eh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=oo));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Zu(e,n,t),e=e.sibling;e!==null;)Zu(e,n,t),e=e.sibling}function Xi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Xi(e,n,t),e=e.sibling;e!==null;)Xi(e,n,t),e=e.sibling}var dt=!1,Le=!1,Wu=!1,Ah=typeof WeakSet=="function"?WeakSet:Set,Pe=null,Th=!1;function Nm(e,n){if(e=e.containerInfo,Es=mo,e=Yr(e),$o(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,c=-1,m=-1,w=0,q=0,D=e,T=null;n:for(;;){for(var M;D!==t||l!==0&&D.nodeType!==3||(c=u+l),D!==i||a!==0&&D.nodeType!==3||(m=u+a),D.nodeType===3&&(u+=D.nodeValue.length),(M=D.firstChild)!==null;)T=D,D=M;for(;;){if(D===e)break n;if(T===t&&++w===l&&(c=u),T===i&&++q===a&&(m=u),(M=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=M}t=c===-1||m===-1?null:{start:c,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(As={focusedElem:e,selectionRange:t},mo=!1,Pe=n;Pe!==null;)if(n=Pe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Pe=e;else for(;Pe!==null;){switch(n=Pe,i=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var F=da(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(F,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Me(t,t.return,ue)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Ms(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Pe=e;break}Pe=n.return}return F=Th,Th=!1,F}function xh(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t),a&4&&_l(5,t);break;case 1:if(mt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){Me(t,t.return,c)}else{var l=da(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Me(t,t.return,c)}}a&64&&bh(t),a&512&&pa(t,t.return);break;case 3:if(mt(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vh(a,e)}catch(c){Me(t,t.return,c)}}break;case 26:mt(e,t),a&512&&pa(t,t.return);break;case 27:case 5:mt(e,t),n===null&&a&4&&Sh(t),a&512&&pa(t,t.return);break;case 12:mt(e,t);break;case 13:mt(e,t),a&4&&qh(e,t);break;case 22:if(l=t.memoizedState!==null||dt,!l){n=n!==null&&n.memoizedState!==null||Le;var i=dt,u=Le;dt=l,(Le=n)&&!u?Bt(e,t,(t.subtreeFlags&8772)!==0):mt(e,t),dt=i,Le=u}a&512&&(t.memoizedProps.mode==="manual"?pa(t,t.return):En(t,t.return));break;default:mt(e,t)}}function kh(e){var n=e.alternate;n!==null&&(e.alternate=null,kh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ro(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,An=!1;function ft(e,n,t){for(t=t.child;t!==null;)Mh(e,n,t),t=t.sibling}function Mh(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount($t,t)}catch{}switch(t.tag){case 26:Le||En(t,n),ft(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Le||En(t,n);var a=Ze,l=An;for(Ze=t.stateNode,ft(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ro(t),Ze=a,An=l;break;case 5:Le||En(t,n);case 6:l=Ze;var i=An;if(Ze=null,ft(e,n,t),Ze=l,An=i,Ze!==null)if(An)try{e=Ze,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(u){Me(t,n,u)}else try{Ze.removeChild(t.stateNode)}catch(u){Me(t,n,u)}break;case 18:Ze!==null&&(An?(n=Ze,t=t.stateNode,n.nodeType===8?ks(n.parentNode,t):n.nodeType===1&&ks(n,t),ni(n)):ks(Ze,t.stateNode));break;case 4:a=Ze,l=An,Ze=t.stateNode.containerInfo,An=!0,ft(e,n,t),Ze=a,An=l;break;case 0:case 11:case 14:case 15:Le||Ut(2,t,n),Le||Ut(4,t,n),ft(e,n,t);break;case 1:Le||(En(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&wh(t,n,a)),ft(e,n,t);break;case 21:ft(e,n,t);break;case 22:Le||En(t,n),Le=(a=Le)||t.memoizedState!==null,ft(e,n,t),Le=a;break;default:ft(e,n,t)}}function qh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ni(e)}catch(t){Me(n,n.return,t)}}function Dm(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ah),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ah),n;default:throw Error(r(435,e.tag))}}function Ku(e,n){var t=Dm(e);n.forEach(function(a){var l=Xm.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function In(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,u=n,c=u;e:for(;c!==null;){switch(c.tag){case 27:case 5:Ze=c.stateNode,An=!1;break e;case 3:Ze=c.stateNode.containerInfo,An=!0;break e;case 4:Ze=c.stateNode.containerInfo,An=!0;break e}c=c.return}if(Ze===null)throw Error(r(160));Mh(i,u,l),Ze=null,An=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zh(n,e),n=n.sibling}var Qn=null;function zh(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),_n(e),a&4&&(Ut(3,e,e.return),_l(3,e),Ut(5,e,e.return));break;case 1:In(n,e),_n(e),a&512&&(Le||t===null||En(t,t.return)),a&64&&dt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Qn;if(In(n,e),_n(e),a&512&&(Le||t===null||En(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[rl]||i[rn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),an(i,a,t),i[rn]=e,$e(i),a=i;break e;case"link":var u=Sd("link","href",l).get(a+(t.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(t.href==null?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(c,1);break n}}i=l.createElement(a),an(i,a,t),l.head.appendChild(i);break;case"meta":if(u=Sd("meta","content",l).get(a+(t.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(c,1);break n}}i=l.createElement(a),an(i,a,t),l.head.appendChild(i);break;default:throw Error(r(468,a))}i[rn]=e,$e(i),a=i}e.stateNode=a}else jd(l,e.type,e.stateNode);else e.stateNode=wd(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?jd(l,e.type,e.stateNode):wd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&jh(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,i=e.memoizedProps;try{for(var m=l.firstChild;m;){var w=m.nextSibling,q=m.nodeName;m[rl]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&m.rel.toLowerCase()==="stylesheet"||l.removeChild(m),m=w}for(var D=e.type,T=l.attributes;T.length;)l.removeAttributeNode(T[0]);an(l,D,i),l[rn]=e,l[vn]=i}catch(F){Me(e,e.return,F)}}case 5:if(In(n,e),_n(e),a&512&&(Le||t===null||En(t,t.return)),e.flags&32){l=e.stateNode;try{Ma(l,"")}catch(F){Me(e,e.return,F)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,jh(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Wu=!0);break;case 6:if(In(n,e),_n(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(F){Me(e,e.return,F)}}break;case 3:if(co=null,l=Qn,Qn=so(n.containerInfo),In(n,e),Qn=l,_n(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{ni(n.containerInfo)}catch(F){Me(e,e.return,F)}Wu&&(Wu=!1,Ch(e));break;case 4:a=Qn,Qn=so(e.stateNode.containerInfo),In(n,e),_n(e),Qn=a;break;case 12:In(n,e),_n(e);break;case 13:In(n,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(is=Mn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ku(e,a)));break;case 22:if(a&512&&(Le||t===null||En(t,t.return)),m=e.memoizedState!==null,w=t!==null&&t.memoizedState!==null,q=dt,D=Le,dt=q||m,Le=D||w,In(n,e),Le=D,dt=q,_n(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=m?n._visibility&-2:n._visibility|1,m&&(n=dt||Le,t===null||w||n||Ja(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){w=t=n;try{if(l=w.stateNode,m)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=w.stateNode,c=w.memoizedProps.style;var M=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(F){Me(w,w.return,F)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=m?"":w.memoizedProps}catch(F){Me(w,w.return,F)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ku(e,t))));break;case 19:In(n,e),_n(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ku(e,a)));break;case 21:break;default:In(n,e),_n(e)}}function _n(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Eh(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var l=a.stateNode,i=Xu(e);Xi(e,i,l);break;case 5:var u=a.stateNode;a.flags&32&&(Ma(u,""),a.flags&=-33);var c=Xu(e);Xi(e,c,u);break;case 3:case 4:var m=a.stateNode.containerInfo,w=Xu(e);Zu(e,w,m);break;default:throw Error(r(161))}}}catch(q){Me(e,e.return,q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ch(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ch(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function mt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xh(e,n.alternate,n),n=n.sibling}function Ja(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ut(4,n,n.return),Ja(n);break;case 1:En(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&wh(n,n.return,t),Ja(n);break;case 26:case 27:case 5:En(n,n.return),Ja(n);break;case 22:En(n,n.return),n.memoizedState===null&&Ja(n);break;default:Ja(n)}e=e.sibling}}function Bt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:Bt(l,i,t),_l(4,i);break;case 1:if(Bt(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(w){Me(a,a.return,w)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)gh(m[l],c)}catch(w){Me(a,a.return,w)}}t&&u&64&&bh(i),pa(i,i.return);break;case 26:case 27:case 5:Bt(l,i,t),t&&a===null&&u&4&&Sh(i),pa(i,i.return);break;case 12:Bt(l,i,t);break;case 13:Bt(l,i,t),t&&u&4&&qh(l,i);break;case 22:i.memoizedState===null&&Bt(l,i,t),pa(i,i.return);break;default:Bt(l,i,t)}n=n.sibling}}function $u(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&kl(t))}function Fu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kl(e))}function Lt(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Oh(e,n,t,a),n=n.sibling}function Oh(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Lt(e,n,t,a),l&2048&&_l(9,n);break;case 3:Lt(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kl(e)));break;case 12:if(l&2048){Lt(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Me(n,n.return,m)}}else Lt(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,n.memoizedState!==null?i._visibility&4?Lt(e,n,t,a):Ul(e,n):i._visibility&4?Lt(e,n,t,a):(i._visibility|=4,Va(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&$u(n.alternate,n);break;case 24:Lt(e,n,t,a),l&2048&&Fu(n.alternate,n);break;default:Lt(e,n,t,a)}}function Va(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=e,u=n,c=t,m=a,w=u.flags;switch(u.tag){case 0:case 11:case 15:Va(i,u,c,m,l),_l(8,u);break;case 23:break;case 22:var q=u.stateNode;u.memoizedState!==null?q._visibility&4?Va(i,u,c,m,l):Ul(i,u):(q._visibility|=4,Va(i,u,c,m,l)),l&&w&2048&&$u(u.alternate,u);break;case 24:Va(i,u,c,m,l),l&&w&2048&&Fu(u.alternate,u);break;default:Va(i,u,c,m,l)}n=n.sibling}}function Ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ul(t,a),l&2048&&$u(a.alternate,a);break;case 24:Ul(t,a),l&2048&&Fu(a.alternate,a);break;default:Ul(t,a)}n=n.sibling}}var Bl=8192;function Xa(e){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)Nh(e),e=e.sibling}function Nh(e){switch(e.tag){case 26:Xa(e),e.flags&Bl&&e.memoizedState!==null&&jp(Qn,e.memoizedState,e.memoizedProps);break;case 5:Xa(e);break;case 3:case 4:var n=Qn;Qn=so(e.stateNode.containerInfo),Xa(e),Qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bl,Bl=16777216,Xa(e),Bl=n):Xa(e));break;default:Xa(e)}}function Dh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Pe=a,Ih(a,e)}Dh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&Ut(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Zi(e)):Ll(e);break;default:Ll(e)}}function Zi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Pe=a,Ih(a,e)}Dh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ut(8,n,n.return),Zi(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Zi(n));break;default:Zi(n)}e=e.sibling}}function Ih(e,n){for(;Pe!==null;){var t=Pe;switch(t.tag){case 0:case 11:case 15:Ut(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:kl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Pe=a;else e:for(t=e;Pe!==null;){a=Pe;var l=a.sibling,i=a.return;if(kh(a),a===t){Pe=null;break e}if(l!==null){l.return=i,Pe=l;break e}Pe=i}}}function Rm(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(e,n,t,a){return new Rm(e,n,t,a)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,n){var t=e.alternate;return t===null?(t=Un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function _h(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wi(e,n,t,a,l,i){var u=0;if(a=e,typeof e=="function")Pu(e)&&(u=1);else if(typeof e=="string")u=wp(e,t,Ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case v:return ya(t.children,l,i,n);case p:u=8,l|=24;break;case k:return e=Un(12,t,n,l|2),e.elementType=k,e.lanes=i,e;case J:return e=Un(13,t,n,l),e.elementType=J,e.lanes=i,e;case G:return e=Un(19,t,n,l),e.elementType=G,e.lanes=i,e;case W:return Uh(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case L:u=10;break e;case N:u=9;break e;case C:u=11;break e;case I:u=14;break e;case K:u=16,a=null;break e}u=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=Un(u,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function ya(e,n,t,a){return e=Un(7,e,a,n),e.lanes=t,e}function Uh(e,n,t,a){e=Un(22,e,a,n),e.elementType=W,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(r(456));if((l._pendingVisibility&2)===0){var u=qt(i,2);u!==null&&(l._pendingVisibility|=2,mn(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(r(456));if((l._pendingVisibility&2)!==0){var u=qt(i,2);u!==null&&(l._pendingVisibility&=-3,mn(u,i,2))}}};return e.stateNode=l,e}function es(e,n,t){return e=Un(6,e,null,n),e.lanes=t,e}function ns(e,n,t){return n=Un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function pt(e){e.flags|=4}function Bh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(n)){if(n=Rn.current,n!==null&&((ye&4194176)===ye?Kn!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Kn))throw Al=ou,tc;e.flags|=8192}}function Ki(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Sn():536870912,e.lanes|=n,Wa|=n)}function Hl(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Im(e,n,t){var a=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Re(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ht(Ke),Et(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(wl(n)?pt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gn!==null&&(rs(Gn),Gn=null))),Re(n),null;case 26:return t=n.memoizedState,e===null?(pt(n),t!==null?(Re(n),Bh(n,t)):(Re(n),n.flags&=-16777217)):t?t!==e.memoizedState?(pt(n),Re(n),Bh(n,t)):(Re(n),n.flags&=-16777217):(e.memoizedProps!==a&&pt(n),Re(n),n.flags&=-16777217),null;case 27:At(n),t=Xn.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Re(n),null}e=Ge.current,wl(n)?ec(n):(e=pd(l,a,t),n.stateNode=e,pt(n))}return Re(n),null;case 5:if(At(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Re(n),null}if(e=Ge.current,wl(n))ec(n);else{switch(l=uo(Xn.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[rn]=n,e[vn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(an(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&pt(n)}}return Re(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Xn.current,wl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=fn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[rn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||rd(e.nodeValue,t)),e||oa(n)}else e=uo(e).createTextNode(a),e[rn]=n,n.stateNode=e}return Re(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=wl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[rn]=n}else Sl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),l=!1}else Gn!==null&&(rs(Gn),Gn=null),l=!0;if(!l)return n.flags&256?(ut(n),n):(ut(n),null)}if(ut(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Ki(n,n.updateQueue),Re(n),null;case 4:return Et(),e===null&&ws(n.stateNode.containerInfo),Re(n),null;case 10:return ht(n.type),Re(n),null;case 19:if(Oe(We),l=n.memoizedState,l===null)return Re(n),null;if(a=(n.flags&128)!==0,i=l.rendering,i===null)if(a)Hl(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Ni(e),i!==null){for(n.flags|=128,Hl(l,!1),e=i.updateQueue,n.updateQueue=e,Ki(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)_h(t,e),t=t.sibling;return we(We,We.current&1|2),n.child}e=e.sibling}l.tail!==null&&Mn()>$i&&(n.flags|=128,a=!0,Hl(l,!1),n.lanes=4194304)}else{if(!a)if(e=Ni(i),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Ki(n,e),Hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ve)return Re(n),null}else 2*Mn()-l.renderingStartTime>$i&&t!==536870912&&(n.flags|=128,a=!0,Hl(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(e=l.last,e!==null?e.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Mn(),n.sibling=null,e=We.current,we(We,a?e&1|2:e&1),n):(Re(n),null);case 22:case 23:return ut(n),su(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),t=n.updateQueue,t!==null&&Ki(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Oe(sa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),ht(Ke),Re(n),null;case 25:return null}throw Error(r(156,n.tag))}function _m(e,n){switch(lu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(Ke),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return At(n),null;case 13:if(ut(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Sl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Oe(We),null;case 4:return Et(),null;case 10:return ht(n.type),null;case 22:case 23:return ut(n),su(),e!==null&&Oe(sa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ht(Ke),null;case 25:return null;default:return null}}function Lh(e,n){switch(lu(n),n.tag){case 3:ht(Ke),Et();break;case 26:case 27:case 5:At(n);break;case 4:Et();break;case 13:ut(n);break;case 19:Oe(We);break;case 10:ht(n.type);break;case 22:case 23:ut(n),su(),e!==null&&Oe(sa);break;case 24:ht(Ke)}}var Um={getCacheForType:function(e){var n=cn(Ke),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},Bm=typeof WeakMap=="function"?WeakMap:Map,Ie=0,ze=null,fe=null,ye=0,Ce=0,Tn=null,yt=!1,Za=!1,ts=!1,gt=0,He=0,Yt=0,ga=0,as=0,Bn=0,Wa=0,Yl=null,Fn=null,ls=!1,is=0,$i=1/0,Fi=null,Gt=null,Pi=!1,va=null,Gl=0,os=0,us=null,Ql=0,ss=null;function xn(){if((Ie&2)!==0&&ye!==0)return ye&-ye;if(V.T!==null){var e=La;return e!==0?e:ys()}return ur()}function Hh(){Bn===0&&(Bn=(ye&536870912)===0||ve?ja():536870912);var e=Rn.current;return e!==null&&(e.flags|=32),Bn}function mn(e,n,t){(e===ze&&Ce===2||e.cancelPendingCommit!==null)&&(Ka(e,0),vt(e,ye,Bn,!1)),Ne(e,t),((Ie&2)===0||e!==ze)&&(e===ze&&((Ie&2)===0&&(ga|=t),He===4&&vt(e,ye,Bn,!1)),Pn(e))}function Yh(e,n,t){if((Ie&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||sn(e,n),l=a?Ym(e,n):ds(e,n,!0),i=a;do{if(l===0){Za&&!a&&vt(e,n,0,!1);break}else if(l===6)vt(e,n,0,!yt);else{if(t=e.current.alternate,i&&!Lm(t)){l=ds(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var c=e;l=Yl;var m=c.current.memoizedState.isDehydrated;if(m&&(Ka(c,u).flags|=256),u=ds(c,u,!1),u!==2){if(ts&&!m){c.errorRecoveryDisabledLanes|=i,ga|=i,l=4;break e}i=Fn,Fn=l,i!==null&&rs(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){Ka(e,0),vt(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){vt(a,n,Bn,!yt);break e}break;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(i=is+300-Mn(),10<i)){if(vt(a,n,Bn,!yt),yn(a,0)!==0)break e;a.timeoutHandle=dd(Gh.bind(null,a,t,Fn,Fi,ls,n,Bn,ga,Wa,yt,2,-0,0),i);break e}Gh(a,t,Fn,Fi,ls,n,Bn,ga,Wa,yt,0,-0,0)}}break}while(!0);Pn(e)}function rs(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function Gh(e,n,t,a,l,i,u,c,m,w,q,D,T){var M=n.subtreeFlags;if((M&8192||(M&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:Sp},Nh(n),n=Ep(),n!==null)){e.cancelPendingCommit=n(Kh.bind(null,e,t,a,l,u,c,m,1,D,T)),vt(e,i,u,!w);return}Kh(e,t,a,l,u,c,m,q,D,T)}function Lm(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!jn(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vt(e,n,t,a){n&=~as,n&=~ga,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-X(l),u=1<<i;a[i]=-1,l&=~u}t!==0&&Ft(e,t,n)}function eo(){return(Ie&6)===0?(Jl(0),!1):!0}function cs(){if(fe!==null){if(Ce===0)var e=fe.return;else e=fe,ct=fa=null,yu(e),Ua=null,Tl=0,e=fe;for(;e!==null;)Lh(e.alternate,e),e=e.return;fe=null}}function Ka(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,ip(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),cs(),ze=e,fe=t=Ht(e.current,null),ye=n,Ce=0,Tn=null,yt=!1,Za=sn(e,n),ts=!1,Wa=Bn=as=ga=Yt=He=0,Fn=Yl=null,ls=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-X(a),i=1<<l;n|=e[l],a&=~i}return gt=n,Ai(),t}function Qh(e,n){he=null,V.H=$n,n===El?(n=ic(),Ce=3):n===tc?(n=ic(),Ce=4):Ce=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,fe===null&&(He=1,Qi(e,On(n,e.current)))}function Jh(){var e=V.H;return V.H=$n,e===null?$n:e}function Vh(){var e=V.A;return V.A=Um,e}function hs(){He=4,yt||(ye&4194176)!==ye&&Rn.current!==null||(Za=!0),(Yt&134217727)===0&&(ga&134217727)===0||ze===null||vt(ze,ye,Bn,!1)}function ds(e,n,t){var a=Ie;Ie|=2;var l=Jh(),i=Vh();(ze!==e||ye!==n)&&(Fi=null,Ka(e,n)),n=!1;var u=He;e:do try{if(Ce!==0&&fe!==null){var c=fe,m=Tn;switch(Ce){case 8:cs(),u=6;break e;case 3:case 2:case 6:Rn.current===null&&(n=!0);var w=Ce;if(Ce=0,Tn=null,$a(e,c,m,w),t&&Za){u=0;break e}break;default:w=Ce,Ce=0,Tn=null,$a(e,c,m,w)}}Hm(),u=He;break}catch(q){Qh(e,q)}while(!0);return n&&e.shellSuspendCounter++,ct=fa=null,Ie=a,V.H=l,V.A=i,fe===null&&(ze=null,ye=0,Ai()),u}function Hm(){for(;fe!==null;)Xh(fe)}function Ym(e,n){var t=Ie;Ie|=2;var a=Jh(),l=Vh();ze!==e||ye!==n?(Fi=null,$i=Mn()+500,Ka(e,n)):Za=sn(e,n);e:do try{if(Ce!==0&&fe!==null){n=fe;var i=Tn;n:switch(Ce){case 1:Ce=0,Tn=null,$a(e,n,i,1);break;case 2:if(ac(i)){Ce=0,Tn=null,Zh(n);break}n=function(){Ce===2&&ze===e&&(Ce=7),Pn(e)},i.then(n,n);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:ac(i)?(Ce=0,Tn=null,Zh(n)):(Ce=0,Tn=null,$a(e,n,i,7));break;case 5:var u=null;switch(fe.tag){case 26:u=fe.memoizedState;case 5:case 27:var c=fe;if(!u||Ed(u)){Ce=0,Tn=null;var m=c.sibling;if(m!==null)fe=m;else{var w=c.return;w!==null?(fe=w,no(w)):fe=null}break n}}Ce=0,Tn=null,$a(e,n,i,5);break;case 6:Ce=0,Tn=null,$a(e,n,i,6);break;case 8:cs(),He=6;break e;default:throw Error(r(462))}}Gm();break}catch(q){Qh(e,q)}while(!0);return ct=fa=null,V.H=a,V.A=l,Ie=t,fe!==null?0:(ze=null,ye=0,Ai(),He)}function Gm(){for(;fe!==null&&!Mo();)Xh(fe)}function Xh(e){var n=ph(e.alternate,e,gt);e.memoizedProps=e.pendingProps,n===null?no(e):fe=n}function Zh(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=rh(t,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=rh(t,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:yu(n);default:Lh(t,n),n=fe=_h(n,gt),n=ph(t,n,gt)}e.memoizedProps=e.pendingProps,n===null?no(e):fe=n}function $a(e,n,t,a){ct=fa=null,yu(n),Ua=null,Tl=0;var l=n.return;try{if(Cm(e,l,n,t,ye)){He=1,Qi(e,On(t,e.current)),fe=null;return}}catch(i){if(l!==null)throw fe=l,i;He=1,Qi(e,On(t,e.current)),fe=null;return}n.flags&32768?(ve||a===1?e=!0:Za||(ye&536870912)!==0?e=!1:(yt=e=!0,(a===2||a===3||a===6)&&(a=Rn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Wh(n,e)):no(n)}function no(e){var n=e;do{if((n.flags&32768)!==0){Wh(n,yt);return}e=n.return;var t=Im(n.alternate,n,gt);if(t!==null){fe=t;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);He===0&&(He=5)}function Wh(e,n){do{var t=_m(e.alternate,e);if(t!==null){t.flags&=32767,fe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=t}while(e!==null);He=6,fe=null}function Kh(e,n,t,a,l,i,u,c,m,w){var q=V.T,D=Y.p;try{Y.p=2,V.T=null,Qm(e,n,t,a,D,l,i,u,c,m,w)}finally{V.T=q,Y.p=D}}function Qm(e,n,t,a,l,i,u,c){do Fa();while(va!==null);if((Ie&6)!==0)throw Error(r(327));var m=e.finishedWork;if(a=e.finishedLanes,m===null)return null;if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=m.lanes|m.childLanes;if(w|=nu,Hn(e,a,w,i,u,c),e===ze&&(fe=ze=null,ye=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||Pi||(Pi=!0,os=w,us=t,Zm(Kt,function(){return Fa(),null})),t=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||t?(t=V.T,V.T=null,i=Y.p,Y.p=2,u=Ie,Ie|=4,Nm(e,m),zh(m,e),mm(As,e.containerInfo),mo=!!Es,As=Es=null,e.current=m,xh(e,m.alternate,m),qo(),Ie=u,Y.p=i,V.T=t):e.current=m,Pi?(Pi=!1,va=e,Gl=a):$h(e,w),w=e.pendingLanes,w===0&&(Gt=null),No(m.stateNode),Pn(e),n!==null)for(l=e.onRecoverableError,m=0;m<n.length;m++)w=n[m],l(w.value,{componentStack:w.stack});return(Gl&3)!==0&&Fa(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===ss?Ql++:(Ql=0,ss=e):Ql=0,Jl(0),null}function $h(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,kl(n)))}function Fa(){if(va!==null){var e=va,n=os;os=0;var t=or(Gl),a=V.T,l=Y.p;try{if(Y.p=32>t?32:t,V.T=null,va===null)var i=!1;else{t=us,us=null;var u=va,c=Gl;if(va=null,Gl=0,(Ie&6)!==0)throw Error(r(331));var m=Ie;if(Ie|=4,Rh(u.current),Oh(u,u.current,c,t),Ie=m,Jl(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot($t,u)}catch{}i=!0}return i}finally{Y.p=l,V.T=a,$h(e,n)}}return!1}function Fh(e,n,t){n=On(t,n),n=zu(e.stateNode,n,2),e=_t(e,n,2),e!==null&&(Ne(e,2),Pn(e))}function Me(e,n,t){if(e.tag===3)Fh(e,e,t);else for(;n!==null;){if(n.tag===3){Fh(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Gt===null||!Gt.has(a))){e=On(t,e),t=nh(2),a=_t(n,t,2),a!==null&&(th(t,a,n,e),Ne(a,2),Pn(a));break}}n=n.return}}function fs(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Bm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(ts=!0,l.add(t),e=Jm.bind(null,e,n,t),n.then(e,e))}function Jm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ze===e&&(ye&t)===t&&(He===4||He===3&&(ye&62914560)===ye&&300>Mn()-is?(Ie&2)===0&&Ka(e,0):as|=t,Wa===ye&&(Wa=0)),Pn(e)}function Ph(e,n){n===0&&(n=Sn()),e=qt(e,n),e!==null&&(Ne(e,n),Pn(e))}function Vm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ph(e,t)}function Xm(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),Ph(e,t)}function Zm(e,n){return xt(e,n)}var to=null,Pa=null,ms=!1,ao=!1,ps=!1,ba=0;function Pn(e){e!==Pa&&e.next===null&&(Pa===null?to=Pa=e:Pa=Pa.next=e),ao=!0,ms||(ms=!0,Km(Wm))}function Jl(e,n){if(!ps&&ao){ps=!0;do for(var t=!1,a=to;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-X(42|e)+1)-1,i&=l&~(u&~c),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(t=!0,td(a,i))}else i=ye,i=yn(a,a===ze?i:0),(i&3)===0||sn(a,i)||(t=!0,td(a,i));a=a.next}while(t);ps=!1}}function Wm(){ao=ms=!1;var e=0;ba!==0&&(lp()&&(e=ba),ba=0);for(var n=Mn(),t=null,a=to;a!==null;){var l=a.next,i=ed(a,n);i===0?(a.next=null,t===null?to=l:t.next=l,l===null&&(Pa=t)):(t=a,(e!==0||(i&3)!==0)&&(ao=!0)),a=l}Jl(e)}function ed(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-X(i),c=1<<u,m=l[u];m===-1?((c&t)===0||(c&a)!==0)&&(l[u]=gn(c,n)):m<=n&&(e.expiredLanes|=c),i&=~c}if(n=ze,t=ye,t=yn(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Ce===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&il(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||sn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&il(a),or(t)){case 2:case 8:t=ul;break;case 32:t=Kt;break;case 268435456:t=di;break;default:t=Kt}return a=nd.bind(null,e),t=xt(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&il(a),e.callbackPriority=2,e.callbackNode=null,2}function nd(e,n){var t=e.callbackNode;if(Fa()&&e.callbackNode!==t)return null;var a=ye;return a=yn(e,e===ze?a:0),a===0?null:(Yh(e,a,n),ed(e,Mn()),e.callbackNode!=null&&e.callbackNode===t?nd.bind(null,e):null)}function td(e,n){if(Fa())return null;Yh(e,n,!0)}function Km(e){op(function(){(Ie&6)!==0?xt(ol,e):e()})}function ys(){return ba===0&&(ba=ja()),ba}function ad(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function ld(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function $m(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=ad((l[vn]||null).action),u=a.submitter;u&&(n=(n=u[vn]||null)?ad(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var c=new Si("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var m=u?ld(l,u):new FormData(l);Tu(t,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(c.preventDefault(),m=u?ld(l,u):new FormData(l),Tu(t,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var gs=0;gs<Kr.length;gs++){var vs=Kr[gs],Fm=vs.toLowerCase(),Pm=vs[0].toUpperCase()+vs.slice(1);Yn(Fm,"on"+Pm)}Yn(Jr,"onAnimationEnd"),Yn(Vr,"onAnimationIteration"),Yn(Xr,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(ym,"onTransitionRun"),Yn(gm,"onTransitionStart"),Yn(vm,"onTransitionCancel"),Yn(Zr,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function id(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var u=a.length-1;0<=u;u--){var c=a[u],m=c.instance,w=c.currentTarget;if(c=c.listener,m!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(q){Gi(q)}l.currentTarget=null,i=m}else for(u=0;u<a.length;u++){if(c=a[u],m=c.instance,w=c.currentTarget,c=c.listener,m!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(q){Gi(q)}l.currentTarget=null,i=m}}}}function me(e,n){var t=n[Do];t===void 0&&(t=n[Do]=new Set);var a=e+"__bubble";t.has(a)||(od(n,e,2,!1),t.add(a))}function bs(e,n,t){var a=0;n&&(a|=4),od(t,e,a,n)}var lo="_reactListening"+Math.random().toString(36).slice(2);function ws(e){if(!e[lo]){e[lo]=!0,rr.forEach(function(t){t!=="selectionchange"&&(ep.has(t)||bs(t,!1,e),bs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lo]||(n[lo]=!0,bs("selectionchange",!1,n))}}function od(e,n,t,a){switch(qd(n)){case 2:var l=xp;break;case 8:l=kp;break;default:l=Ns}t=l.bind(null,n,t,e),l=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ss(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;u=u.return}for(;c!==null;){if(u=Pt(c),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){a=i=u;continue e}c=c.parentNode}}a=a.return}Sr(function(){var w=i,q=Lo(t),D=[];e:{var T=Wr.get(e);if(T!==void 0){var M=Si,F=e;switch(e){case"keypress":if(bi(t)===0)break e;case"keydown":case"keyup":M=Xf;break;case"focusin":F="focus",M=Vo;break;case"focusout":F="blur",M=Vo;break;case"beforeblur":case"afterblur":M=Vo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Kf;break;case Jr:case Vr:case Xr:M=Uf;break;case Zr:M=Ff;break;case"scroll":case"scrollend":M=Nf;break;case"wheel":M=em;break;case"copy":case"cut":case"paste":M=Lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=xr;break;case"toggle":case"beforetoggle":M=tm}var ue=(n&4)!==0,Ye=!ue&&(e==="scroll"||e==="scrollend"),S=ue?T!==null?T+"Capture":null:T;ue=[];for(var b=w,E;b!==null;){var O=b;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||S===null||(O=hl(b,S),O!=null&&ue.push(Xl(b,O,E))),Ye)break;b=b.return}0<ue.length&&(T=new M(T,F,null,t,q),D.push({event:T,listeners:ue}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&t!==Bo&&(F=t.relatedTarget||t.fromElement)&&(Pt(F)||F[Ea]))break e;if((M||T)&&(T=q.window===q?q:(T=q.ownerDocument)?T.defaultView||T.parentWindow:window,M?(F=t.relatedTarget||t.toElement,M=w,F=F?Pt(F):null,F!==null&&(Ye=te(F),ue=F.tag,F!==Ye||ue!==5&&ue!==27&&ue!==6)&&(F=null)):(M=null,F=w),M!==F)){if(ue=Ar,O="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ue=xr,O="onPointerLeave",S="onPointerEnter",b="pointer"),Ye=M==null?T:cl(M),E=F==null?T:cl(F),T=new ue(O,b+"leave",M,t,q),T.target=Ye,T.relatedTarget=E,O=null,Pt(q)===w&&(ue=new ue(S,b+"enter",F,t,q),ue.target=E,ue.relatedTarget=Ye,O=ue),Ye=O,M&&F)n:{for(ue=M,S=F,b=0,E=ue;E;E=el(E))b++;for(E=0,O=S;O;O=el(O))E++;for(;0<b-E;)ue=el(ue),b--;for(;0<E-b;)S=el(S),E--;for(;b--;){if(ue===S||S!==null&&ue===S.alternate)break n;ue=el(ue),S=el(S)}ue=null}else ue=null;M!==null&&ud(D,T,M,ue,!1),F!==null&&Ye!==null&&ud(D,Ye,F,ue,!0)}}e:{if(T=w?cl(w):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var $=Dr;else if(Or(T))if(Rr)$=dm;else{$=cm;var de=rm}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&Uo(w.elementType)&&($=Dr):$=hm;if($&&($=$(e,w))){Nr(D,$,t,q);break e}de&&de(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&_o(T,"number",T.value)}switch(de=w?cl(w):window,e){case"focusin":(Or(de)||de.contentEditable==="true")&&(Oa=de,Fo=w,bl=null);break;case"focusout":bl=Fo=Oa=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Gr(D,t,q);break;case"selectionchange":if(pm)break;case"keydown":case"keyup":Gr(D,t,q)}var ne;if(Zo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Ca?zr(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(kr&&t.locale!=="ko"&&(Ca||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Ca&&(ne=jr()):(Mt=q,Go="value"in Mt?Mt.value:Mt.textContent,Ca=!0)),de=io(w,ae),0<de.length&&(ae=new Tr(ae,e,null,t,q),D.push({event:ae,listeners:de}),ne?ae.data=ne:(ne=Cr(t),ne!==null&&(ae.data=ne)))),(ne=lm?im(e,t):om(e,t))&&(ae=io(w,"onBeforeInput"),0<ae.length&&(de=new Tr("onBeforeInput","beforeinput",null,t,q),D.push({event:de,listeners:ae}),de.data=ne)),$m(D,e,w,t,q)}id(D,n)})}function Xl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function io(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=hl(e,t),l!=null&&a.unshift(Xl(e,l,i)),l=hl(e,n),l!=null&&a.push(Xl(e,l,i))),e=e.return}return a}function el(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ud(e,n,t,a,l){for(var i=n._reactName,u=[];t!==null&&t!==a;){var c=t,m=c.alternate,w=c.stateNode;if(c=c.tag,m!==null&&m===a)break;c!==5&&c!==26&&c!==27||w===null||(m=w,l?(w=hl(t,i),w!=null&&u.unshift(Xl(t,w,m))):l||(w=hl(t,i),w!=null&&u.push(Xl(t,w,m)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var np=/\r\n?/g,tp=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(np,`
`).replace(tp,"")}function rd(e,n){return n=sd(n),sd(e)===n}function oo(){}function xe(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ma(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ma(e,""+a);break;case"className":mi(e,"class",a);break;case"tabIndex":mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(e,t,a);break;case"style":br(e,a,i);break;case"data":if(n!=="object"){mi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&xe(e,n,"name",l.name,l,null),xe(e,n,"formEncType",l.formEncType,l,null),xe(e,n,"formMethod",l.formMethod,l,null),xe(e,n,"formTarget",l.formTarget,l,null)):(xe(e,n,"encType",l.encType,l,null),xe(e,n,"method",l.method,l,null),xe(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=oo);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=gi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":me("beforetoggle",e),me("toggle",e),fi(e,"popover",a);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":fi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Cf.get(t)||t,fi(e,t,a))}}function js(e,n,t,a,l,i){switch(t){case"style":br(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ma(e,a):(typeof a=="number"||typeof a=="bigint")&&Ma(e,""+a);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[vn]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):fi(e,t,a)}}}function an(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xe(e,n,i,u,t,null)}}l&&xe(e,n,"srcSet",t.srcSet,t,null),a&&xe(e,n,"src",t.src,t,null);return;case"input":me("invalid",e);var c=i=u=l=null,m=null,w=null;for(a in t)if(t.hasOwnProperty(a)){var q=t[a];if(q!=null)switch(a){case"name":l=q;break;case"type":u=q;break;case"checked":m=q;break;case"defaultChecked":w=q;break;case"value":i=q;break;case"defaultValue":c=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:xe(e,n,a,q,t,null)}}pr(e,i,c,m,w,u,l,!1),pi(e);return;case"select":me("invalid",e),a=u=i=null;for(l in t)if(t.hasOwnProperty(l)&&(c=t[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:xe(e,n,l,c,t,null)}n=i,t=u,e.multiple=!!a,n!=null?ka(e,!!a,n,!1):t!=null&&ka(e,!!a,t,!0);return;case"textarea":me("invalid",e),i=l=a=null;for(u in t)if(t.hasOwnProperty(u)&&(c=t[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:xe(e,n,u,c,t,null)}gr(e,a,l,i),pi(e);return;case"option":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xe(e,n,m,a,t,null)}return;case"dialog":me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(a=0;a<Vl.length;a++)me(Vl[a],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(a=t[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:xe(e,n,w,a,t,null)}return;default:if(Uo(n)){for(q in t)t.hasOwnProperty(q)&&(a=t[q],a!==void 0&&js(e,n,q,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&xe(e,n,c,a,t,null))}function ap(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,c=null,m=null,w=null,q=null;for(M in t){var D=t[M];if(t.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":m=D;default:a.hasOwnProperty(M)||xe(e,n,M,null,a,D)}}for(var T in a){var M=a[T];if(D=t[T],a.hasOwnProperty(T)&&(M!=null||D!=null))switch(T){case"type":i=M;break;case"name":l=M;break;case"checked":w=M;break;case"defaultChecked":q=M;break;case"value":u=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:M!==D&&xe(e,n,T,M,a,D)}}Io(e,u,c,m,w,q,i,l);return;case"select":M=u=c=T=null;for(i in t)if(m=t[i],t.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":M=m;default:a.hasOwnProperty(i)||xe(e,n,i,null,a,m)}for(l in a)if(i=a[l],m=t[l],a.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":T=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==m&&xe(e,n,l,i,a,m)}n=c,t=u,a=M,T!=null?ka(e,!!t,T,!1):!!a!=!!t&&(n!=null?ka(e,!!t,n,!0):ka(e,!!t,t?[]:"",!1));return;case"textarea":M=T=null;for(c in t)if(l=t[c],t.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:xe(e,n,c,null,a,l)}for(u in a)if(l=a[u],i=t[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":T=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&xe(e,n,u,l,a,i)}yr(e,T,M);return;case"option":for(var F in t)if(T=t[F],t.hasOwnProperty(F)&&T!=null&&!a.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:xe(e,n,F,null,a,T)}for(m in a)if(T=a[m],M=t[m],a.hasOwnProperty(m)&&T!==M&&(T!=null||M!=null))switch(m){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:xe(e,n,m,T,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in t)T=t[ue],t.hasOwnProperty(ue)&&T!=null&&!a.hasOwnProperty(ue)&&xe(e,n,ue,null,a,T);for(w in a)if(T=a[w],M=t[w],a.hasOwnProperty(w)&&T!==M&&(T!=null||M!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,n));break;default:xe(e,n,w,T,a,M)}return;default:if(Uo(n)){for(var Ye in t)T=t[Ye],t.hasOwnProperty(Ye)&&T!==void 0&&!a.hasOwnProperty(Ye)&&js(e,n,Ye,void 0,a,T);for(q in a)T=a[q],M=t[q],!a.hasOwnProperty(q)||T===M||T===void 0&&M===void 0||js(e,n,q,T,a,M);return}}for(var S in t)T=t[S],t.hasOwnProperty(S)&&T!=null&&!a.hasOwnProperty(S)&&xe(e,n,S,null,a,T);for(D in a)T=a[D],M=t[D],!a.hasOwnProperty(D)||T===M||T==null&&M==null||xe(e,n,D,T,a,M)}var Es=null,As=null;function uo(e){return e.nodeType===9?e:e.ownerDocument}function cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xs=null;function lp(){var e=window.event;return e&&e.type==="popstate"?e===xs?!1:(xs=e,!0):(xs=null,!1)}var dd=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(up)}:dd;function up(e){setTimeout(function(){throw e})}function ks(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),ni(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);ni(n)}function Ms(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ms(t),Ro(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function sp(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[rl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function rp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jn(e.nextSibling),e===null))return null;return e}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function md(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function pd(e,n,t){switch(n=uo(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Ln=new Map,yd=new Set;function so(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var bt=Y.d;Y.d={f:cp,r:hp,D:dp,C:fp,L:mp,m:pp,X:gp,S:yp,M:vp};function cp(){var e=bt.f(),n=eo();return e||n}function hp(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Gc(n):bt.r(e)}var nl=typeof document>"u"?null:document;function gd(e,n,t){var a=nl;if(a&&typeof n=="string"&&n){var l=zn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),yd.has(l)||(yd.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),an(n,"link",e),$e(n),a.head.appendChild(n)))}}function dp(e){bt.D(e),gd("dns-prefetch",e,null)}function fp(e,n){bt.C(e,n),gd("preconnect",e,n)}function mp(e,n,t){bt.L(e,n,t);var a=nl;if(a&&e&&n){var l='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+zn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+zn(t.imageSizes)+'"]')):l+='[href="'+zn(e)+'"]';var i=l;switch(n){case"style":i=tl(e);break;case"script":i=al(e)}Ln.has(i)||(e=R({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ln.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Zl(i))||n==="script"&&a.querySelector(Wl(i))||(n=a.createElement("link"),an(n,"link",e),$e(n),a.head.appendChild(n)))}}function pp(e,n){bt.m(e,n);var t=nl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+zn(a)+'"][href="'+zn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=al(e)}if(!Ln.has(i)&&(e=R({rel:"modulepreload",href:e},n),Ln.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wl(i)))return}a=t.createElement("link"),an(a,"link",e),$e(a),t.head.appendChild(a)}}}function yp(e,n,t){bt.S(e,n,t);var a=nl;if(a&&e){var l=Ta(a).hoistableStyles,i=tl(e);n=n||"default";var u=l.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Zl(i)))c.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ln.get(i))&&qs(e,t);var m=u=a.createElement("link");$e(m),an(m,"link",e),m._p=new Promise(function(w,q){m.onload=w,m.onerror=q}),m.addEventListener("load",function(){c.loading|=1}),m.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ro(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:c},l.set(i,u)}}}function gp(e,n){bt.X(e,n);var t=nl;if(t&&e){var a=Ta(t).hoistableScripts,l=al(e),i=a.get(l);i||(i=t.querySelector(Wl(l)),i||(e=R({src:e,async:!0},n),(n=Ln.get(l))&&zs(e,n),i=t.createElement("script"),$e(i),an(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function vp(e,n){bt.M(e,n);var t=nl;if(t&&e){var a=Ta(t).hoistableScripts,l=al(e),i=a.get(l);i||(i=t.querySelector(Wl(l)),i||(e=R({src:e,async:!0,type:"module"},n),(n=Ln.get(l))&&zs(e,n),i=t.createElement("script"),$e(i),an(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function vd(e,n,t,a){var l=(l=Xn.current)?so(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=tl(t.href),t=Ta(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=tl(t.href);var i=Ta(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(Zl(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ln.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ln.set(e,t),i||bp(l,e,t,u.state))),n&&a===null)throw Error(r(528,""));return u}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=al(t),t=Ta(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function tl(e){return'href="'+zn(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function bp(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),an(n,"link",t),$e(n),e.head.appendChild(n))}function al(e){return'[src="'+zn(e)+'"]'}function Wl(e){return"script[async]"+e}function wd(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+zn(t.href)+'"]');if(a)return n.instance=a,$e(a),a;var l=R({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),$e(a),an(a,"style",l),ro(a,t.precedence,e),n.instance=a;case"stylesheet":l=tl(t.href);var i=e.querySelector(Zl(l));if(i)return n.state.loading|=4,n.instance=i,$e(i),i;a=bd(t),(l=Ln.get(l))&&qs(a,l),i=(e.ownerDocument||e).createElement("link"),$e(i);var u=i;return u._p=new Promise(function(c,m){u.onload=c,u.onerror=m}),an(i,"link",a),n.state.loading|=4,ro(i,t.precedence,e),n.instance=i;case"script":return i=al(t.src),(l=e.querySelector(Wl(i)))?(n.instance=l,$e(l),l):(a=t,(l=Ln.get(i))&&(a=R({},t),zs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),$e(l),an(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,ro(a,t.precedence,e));return n.instance}function ro(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===n)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function qs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var co=null;function Sd(e,n,t){if(co===null){var a=new Map,l=co=new Map;l.set(t,a)}else l=co,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[rl]||i[rn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function jd(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function wp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function Sp(){}function jp(e,n,t){if(Kl===null)throw Error(r(475));var a=Kl;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=tl(t.href),i=e.querySelector(Zl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ho.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=i,$e(i);return}i=e.ownerDocument||e,t=bd(t),(l=Ln.get(l))&&qs(t,l),i=i.createElement("link"),$e(i);var u=i;u._p=new Promise(function(c,m){u.onload=c,u.onerror=m}),an(i,"link",t),n.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=ho.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ep(){if(Kl===null)throw Error(r(475));var e=Kl;return e.stylesheets&&e.count===0&&Cs(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function ho(){if(this.count--,this.count===0){if(this.stylesheets)Cs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fo=null;function Cs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fo=new Map,n.forEach(Ap,e),fo=null,ho.call(e))}function Ap(e,n){if(!(n.state.loading&4)){var t=fo.get(e);if(t)var a=t.get(null);else{t=new Map,fo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}l=n.instance,u=l.getAttribute("data-precedence"),i=t.get(u)||a,i===a&&t.set(null,l),t.set(u,l),this.count++,a=ho.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var $l={$$typeof:L,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Tp(e,n,t,a,l,i,u,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Ad(e,n,t,a,l,i,u,c,m,w,q,D){return e=new Tp(e,n,t,u,c,m,w,D),n=1,i===!0&&(n|=24),i=Un(3,null,null,n),e.current=i,i.stateNode=e,n=ru(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},Gu(i),e}function Td(e){return e?(e=Ra,e):Ra}function xd(e,n,t,a,l,i){l=Td(l),a.context===null?a.context=l:a.pendingContext=l,a=It(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=_t(e,a,n),t!==null&&(mn(t,e,n),Dl(t,e,n))}function kd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Os(e,n){kd(e,n),(e=e.alternate)&&kd(e,n)}function Md(e){if(e.tag===13){var n=qt(e,67108864);n!==null&&mn(n,e,67108864),Os(e,67108864)}}var mo=!0;function xp(e,n,t,a){var l=V.T;V.T=null;var i=Y.p;try{Y.p=2,Ns(e,n,t,a)}finally{Y.p=i,V.T=l}}function kp(e,n,t,a){var l=V.T;V.T=null;var i=Y.p;try{Y.p=8,Ns(e,n,t,a)}finally{Y.p=i,V.T=l}}function Ns(e,n,t,a){if(mo){var l=Ds(a);if(l===null)Ss(e,n,a,po,t),zd(e,a);else if(qp(l,e,n,t,a))a.stopPropagation();else if(zd(e,a),n&4&&-1<Mp.indexOf(e)){for(;l!==null;){var i=Aa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=pn(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var m=1<<31-X(u);c.entanglements[1]|=m,u&=~m}Pn(i),(Ie&6)===0&&($i=Mn()+500,Jl(0))}}break;case 13:c=qt(i,2),c!==null&&mn(c,i,2),eo(),Os(i,2)}if(i=Ds(a),i===null&&Ss(e,n,a,po,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else Ss(e,n,a,null,t)}}function Ds(e){return e=Lo(e),Rs(e)}var po=null;function Rs(e){if(po=null,e=Pt(e),e!==null){var n=te(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=je(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return po=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case ol:return 2;case ul:return 8;case Kt:case zo:return 32;case di:return 268435456;default:return 32}default:return 32}}var Is=!1,Qt=null,Jt=null,Vt=null,Fl=new Map,Pl=new Map,Xt=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zd(e,n){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function ei(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Aa(n),n!==null&&Md(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function qp(e,n,t,a,l){switch(n){case"focusin":return Qt=ei(Qt,e,n,t,a,l),!0;case"dragenter":return Jt=ei(Jt,e,n,t,a,l),!0;case"mouseover":return Vt=ei(Vt,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return Fl.set(i,ei(Fl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Pl.set(i,ei(Pl.get(i)||null,e,n,t,a,l)),!0}return!1}function Cd(e){var n=Pt(e.target);if(n!==null){var t=te(n);if(t!==null){if(n=t.tag,n===13){if(n=je(t),n!==null){e.blockedOn=n,Ef(e.priority,function(){if(t.tag===13){var a=xn(),l=qt(t,a);l!==null&&mn(l,t,a),Os(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ds(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Bo=a,t.target.dispatchEvent(a),Bo=null}else return n=Aa(t),n!==null&&Md(n),e.blockedOn=t,!1;n.shift()}return!0}function Od(e,n,t){yo(e)&&t.delete(n)}function zp(){Is=!1,Qt!==null&&yo(Qt)&&(Qt=null),Jt!==null&&yo(Jt)&&(Jt=null),Vt!==null&&yo(Vt)&&(Vt=null),Fl.forEach(Od),Pl.forEach(Od)}function go(e,n){e.blockedOn===n&&(e.blockedOn=null,Is||(Is=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zp)))}var vo=null;function Nd(e){vo!==e&&(vo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vo===e&&(vo=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Rs(a||t)===null)continue;break}var i=Aa(t);i!==null&&(e.splice(n,3),n-=3,Tu(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function ni(e){function n(m){return go(m,e)}Qt!==null&&go(Qt,e),Jt!==null&&go(Jt,e),Vt!==null&&go(Vt,e),Fl.forEach(n),Pl.forEach(n);for(var t=0;t<Xt.length;t++){var a=Xt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Xt.length&&(t=Xt[0],t.blockedOn===null);)Cd(t),t.blockedOn===null&&Xt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],u=l[vn]||null;if(typeof i=="function")u||Nd(t);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[vn]||null)c=u.formAction;else if(Rs(l)!==null)continue}else c=u.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),Nd(t)}}}function _s(e){this._internalRoot=e}bo.prototype.render=_s.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=xn();xd(t,a,e,n,null,null)},bo.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Fa(),xd(e.current,2,null,e,null,null),eo(),n[Ea]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ur();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xt.length&&n!==0&&n<Xt[t].priority;t++);Xt.splice(t,0,e),t===0&&Cd(e)}};var Dd=d.version;if(Dd!=="19.0.0")throw Error(r(527,Dd,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=z(n),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var Cp={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:V,findFiberByHostInstance:Pt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{$t=wo.inject(Cp),dn=wo}catch{}}return ai.createRoot=function(e,n){if(!f(e))throw Error(r(299));var t=!1,a="",l=$c,i=Fc,u=Pc,c=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=Ad(e,1,!1,null,null,t,a,l,i,u,c,null),e[Ea]=n.current,ws(e.nodeType===8?e.parentNode:e),new _s(n)},ai.hydrateRoot=function(e,n,t){if(!f(e))throw Error(r(299));var a=!1,l="",i=$c,u=Fc,c=Pc,m=null,w=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks),t.formState!==void 0&&(w=t.formState)),n=Ad(e,1,!0,n,t??null,a,l,i,u,c,m,w),n.context=Td(null),t=n.current,a=xn(),l=It(a),l.callback=null,_t(t,l,a),n.current.lanes=a,Ne(n,a),Pn(n),e[Ea]=n.current,ws(e),new bo(n)},ai.version="19.0.0",ai}var Qd;function Yp(){if(Qd)return Ls.exports;Qd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ls.exports=Hp(),Ls.exports}var Gp=Yp();const Qp=nf(Gp);var li={},Jd;function Jp(){if(Jd)return li;Jd=1,Object.defineProperty(li,"__esModule",{value:!0}),li.parse=A,li.serialize=p;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,d=/^[\u0021-\u003A\u003C-\u007E]*$/,h=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,y=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function A(N,L){const C=new y,J=N.length;if(J<2)return C;const G=(L==null?void 0:L.decode)||k;let I=0;do{const K=N.indexOf("=",I);if(K===-1)break;const W=N.indexOf(";",I),re=W===-1?J:W;if(K>re){I=N.lastIndexOf(";",K-1)+1;continue}const ee=x(N,I,K),Ee=v(N,K,ee),Ue=N.slice(ee,Ee);if(C[Ue]===void 0){let qe=x(N,K+1,re),V=v(N,re,qe);const R=G(N.slice(qe,V));C[Ue]=R}I=re+1}while(I<J);return C}function x(N,L,C){do{const J=N.charCodeAt(L);if(J!==32&&J!==9)return L}while(++L<C);return C}function v(N,L,C){for(;L>C;){const J=N.charCodeAt(--L);if(J!==32&&J!==9)return L+1}return C}function p(N,L,C){const J=(C==null?void 0:C.encode)||encodeURIComponent;if(!o.test(N))throw new TypeError(`argument name is invalid: ${N}`);const G=J(L);if(!d.test(G))throw new TypeError(`argument val is invalid: ${L}`);let I=N+"="+G;if(!C)return I;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);I+="; Max-Age="+C.maxAge}if(C.domain){if(!h.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);I+="; Domain="+C.domain}if(C.path){if(!r.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);I+="; Path="+C.path}if(C.expires){if(!U(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);I+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(I+="; HttpOnly"),C.secure&&(I+="; Secure"),C.partitioned&&(I+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":I+="; Priority=Low";break;case"medium":I+="; Priority=Medium";break;case"high":I+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":I+="; SameSite=Strict";break;case"lax":I+="; SameSite=Lax";break;case"none":I+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return I}function k(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function U(N){return f.call(N)==="[object Date]"}return li}Jp();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vd="popstate";function Vp(o={}){function d(f,y){let{pathname:A="/",search:x="",hash:v=""}=wa(f.location.hash.substring(1));return!A.startsWith("/")&&!A.startsWith(".")&&(A="/"+A),Ws("",{pathname:A,search:x,hash:v},y.state&&y.state.usr||null,y.state&&y.state.key||"default")}function h(f,y){let A=f.document.querySelector("base"),x="";if(A&&A.getAttribute("href")){let v=f.location.href,p=v.indexOf("#");x=p===-1?v:v.slice(0,p)}return x+"#"+(typeof y=="string"?y:si(y))}function r(f,y){Vn(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(y)})`)}return Zp(d,h,r,o)}function _e(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Vn(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Xp(){return Math.random().toString(36).substring(2,10)}function Xd(o,d){return{usr:o.state,key:o.key,idx:d}}function Ws(o,d,h=null,r){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?wa(d):d,state:h,key:d&&d.key||r||Xp()}}function si({pathname:o="/",search:d="",hash:h=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),h&&h!=="#"&&(o+=h.charAt(0)==="#"?h:"#"+h),o}function wa(o){let d={};if(o){let h=o.indexOf("#");h>=0&&(d.hash=o.substring(h),o=o.substring(0,h));let r=o.indexOf("?");r>=0&&(d.search=o.substring(r),o=o.substring(0,r)),o&&(d.pathname=o)}return d}function Zp(o,d,h,r={}){let{window:f=document.defaultView,v5Compat:y=!1}=r,A=f.history,x="POP",v=null,p=k();p==null&&(p=0,A.replaceState({...A.state,idx:p},""));function k(){return(A.state||{idx:null}).idx}function U(){x="POP";let G=k(),I=G==null?null:G-p;p=G,v&&v({action:x,location:J.location,delta:I})}function N(G,I){x="PUSH";let K=Ws(J.location,G,I);h&&h(K,G),p=k()+1;let W=Xd(K,p),re=J.createHref(K);try{A.pushState(W,"",re)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(re)}y&&v&&v({action:x,location:J.location,delta:1})}function L(G,I){x="REPLACE";let K=Ws(J.location,G,I);h&&h(K,G),p=k();let W=Xd(K,p),re=J.createHref(K);A.replaceState(W,"",re),y&&v&&v({action:x,location:J.location,delta:0})}function C(G){let I=f.location.origin!=="null"?f.location.origin:f.location.href,K=typeof G=="string"?G:si(G);return K=K.replace(/ $/,"%20"),_e(I,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,I)}let J={get action(){return x},get location(){return o(f,A)},listen(G){if(v)throw new Error("A history only accepts one active listener");return f.addEventListener(Vd,U),v=G,()=>{f.removeEventListener(Vd,U),v=null}},createHref(G){return d(f,G)},createURL:C,encodeLocation(G){let I=C(G);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:N,replace:L,go(G){return A.go(G)}};return J}function tf(o,d,h="/"){return Wp(o,d,h,!1)}function Wp(o,d,h,r){let f=typeof d=="string"?wa(d):d,y=St(f.pathname||"/",h);if(y==null)return null;let A=af(o);Kp(A);let x=null;for(let v=0;x==null&&v<A.length;++v){let p=uy(y);x=iy(A[v],p,r)}return x}function af(o,d=[],h=[],r=""){let f=(y,A,x)=>{let v={relativePath:x===void 0?y.path||"":x,caseSensitive:y.caseSensitive===!0,childrenIndex:A,route:y};v.relativePath.startsWith("/")&&(_e(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length));let p=wt([r,v.relativePath]),k=h.concat(v);y.children&&y.children.length>0&&(_e(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),af(y.children,d,k,p)),!(y.path==null&&!y.index)&&d.push({path:p,score:ay(p,y.index),routesMeta:k})};return o.forEach((y,A)=>{var x;if(y.path===""||!((x=y.path)!=null&&x.includes("?")))f(y,A);else for(let v of lf(y.path))f(y,A,v)}),d}function lf(o){let d=o.split("/");if(d.length===0)return[];let[h,...r]=d,f=h.endsWith("?"),y=h.replace(/\?$/,"");if(r.length===0)return f?[y,""]:[y];let A=lf(r.join("/")),x=[];return x.push(...A.map(v=>v===""?y:[y,v].join("/"))),f&&x.push(...A),x.map(v=>o.startsWith("/")&&v===""?"/":v)}function Kp(o){o.sort((d,h)=>d.score!==h.score?h.score-d.score:ly(d.routesMeta.map(r=>r.childrenIndex),h.routesMeta.map(r=>r.childrenIndex)))}var $p=/^:[\w-]+$/,Fp=3,Pp=2,ey=1,ny=10,ty=-2,Zd=o=>o==="*";function ay(o,d){let h=o.split("/"),r=h.length;return h.some(Zd)&&(r+=ty),d&&(r+=Pp),h.filter(f=>!Zd(f)).reduce((f,y)=>f+($p.test(y)?Fp:y===""?ey:ny),r)}function ly(o,d){return o.length===d.length&&o.slice(0,-1).every((r,f)=>r===d[f])?o[o.length-1]-d[d.length-1]:0}function iy(o,d,h=!1){let{routesMeta:r}=o,f={},y="/",A=[];for(let x=0;x<r.length;++x){let v=r[x],p=x===r.length-1,k=y==="/"?d:d.slice(y.length)||"/",U=Ao({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},k),N=v.route;if(!U&&p&&h&&!r[r.length-1].route.index&&(U=Ao({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},k)),!U)return null;Object.assign(f,U.params),A.push({params:f,pathname:wt([y,U.pathname]),pathnameBase:hy(wt([y,U.pathnameBase])),route:N}),U.pathnameBase!=="/"&&(y=wt([y,U.pathnameBase]))}return A}function Ao(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[h,r]=oy(o.path,o.caseSensitive,o.end),f=d.match(h);if(!f)return null;let y=f[0],A=y.replace(/(.)\/+$/,"$1"),x=f.slice(1);return{params:r.reduce((p,{paramName:k,isOptional:U},N)=>{if(k==="*"){let C=x[N]||"";A=y.slice(0,y.length-C.length).replace(/(.)\/+$/,"$1")}const L=x[N];return U&&!L?p[k]=void 0:p[k]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:y,pathnameBase:A,pattern:o}}function oy(o,d=!1,h=!0){Vn(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let r=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(A,x,v)=>(r.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(r.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,d?void 0:"i"),r]}function uy(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Vn(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function St(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let h=d.endsWith("/")?d.length-1:d.length,r=o.charAt(h);return r&&r!=="/"?null:o.slice(h)||"/"}function sy(o,d="/"){let{pathname:h,search:r="",hash:f=""}=typeof o=="string"?wa(o):o;return{pathname:h?h.startsWith("/")?h:ry(h,d):d,search:dy(r),hash:fy(f)}}function ry(o,d){let h=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(f=>{f===".."?h.length>1&&h.pop():f!=="."&&h.push(f)}),h.length>1?h.join("/"):"/"}function Qs(o,d,h,r){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cy(o){return o.filter((d,h)=>h===0||d.route.path&&d.route.path.length>0)}function of(o){let d=cy(o);return d.map((h,r)=>r===d.length-1?h.pathname:h.pathnameBase)}function uf(o,d,h,r=!1){let f;typeof o=="string"?f=wa(o):(f={...o},_e(!f.pathname||!f.pathname.includes("?"),Qs("?","pathname","search",f)),_e(!f.pathname||!f.pathname.includes("#"),Qs("#","pathname","hash",f)),_e(!f.search||!f.search.includes("#"),Qs("#","search","hash",f)));let y=o===""||f.pathname==="",A=y?"/":f.pathname,x;if(A==null)x=h;else{let U=d.length-1;if(!r&&A.startsWith("..")){let N=A.split("/");for(;N[0]==="..";)N.shift(),U-=1;f.pathname=N.join("/")}x=U>=0?d[U]:"/"}let v=sy(f,x),p=A&&A!=="/"&&A.endsWith("/"),k=(y||A===".")&&h.endsWith("/");return!v.pathname.endsWith("/")&&(p||k)&&(v.pathname+="/"),v}var wt=o=>o.join("/").replace(/\/\/+/g,"/"),hy=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),dy=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,fy=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function my(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var sf=["POST","PUT","PATCH","DELETE"];new Set(sf);var py=["GET",...sf];new Set(py);var ll=j.createContext(null);ll.displayName="DataRouter";var To=j.createContext(null);To.displayName="DataRouterState";var rf=j.createContext({isTransitioning:!1});rf.displayName="ViewTransition";var yy=j.createContext(new Map);yy.displayName="Fetchers";var gy=j.createContext(null);gy.displayName="Await";var et=j.createContext(null);et.displayName="Navigation";var ri=j.createContext(null);ri.displayName="Location";var jt=j.createContext({outlet:null,matches:[],isDataRoute:!1});jt.displayName="Route";var er=j.createContext(null);er.displayName="RouteError";function vy(o,{relative:d}={}){_e(ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:h,navigator:r}=j.useContext(et),{hash:f,pathname:y,search:A}=hi(o,{relative:d}),x=y;return h!=="/"&&(x=y==="/"?h:wt([h,y])),r.createHref({pathname:x,search:A,hash:f})}function ci(){return j.useContext(ri)!=null}function Sa(){return _e(ci(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ri).location}var cf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hf(o){j.useContext(et).static||j.useLayoutEffect(o)}function by(){let{isDataRoute:o}=j.useContext(jt);return o?Oy():wy()}function wy(){_e(ci(),"useNavigate() may be used only in the context of a <Router> component.");let o=j.useContext(ll),{basename:d,navigator:h}=j.useContext(et),{matches:r}=j.useContext(jt),{pathname:f}=Sa(),y=JSON.stringify(of(r)),A=j.useRef(!1);return hf(()=>{A.current=!0}),j.useCallback((v,p={})=>{if(Vn(A.current,cf),!A.current)return;if(typeof v=="number"){h.go(v);return}let k=uf(v,JSON.parse(y),f,p.relative==="path");o==null&&d!=="/"&&(k.pathname=k.pathname==="/"?d:wt([d,k.pathname])),(p.replace?h.replace:h.push)(k,p.state,p)},[d,h,y,f,o])}j.createContext(null);function hi(o,{relative:d}={}){let{matches:h}=j.useContext(jt),{pathname:r}=Sa(),f=JSON.stringify(of(h));return j.useMemo(()=>uf(o,JSON.parse(f),r,d==="path"),[o,f,r,d])}function Sy(o,d){return df(o,d)}function df(o,d,h,r){var K;_e(ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:y}=j.useContext(et),{matches:A}=j.useContext(jt),x=A[A.length-1],v=x?x.params:{},p=x?x.pathname:"/",k=x?x.pathnameBase:"/",U=x&&x.route;{let W=U&&U.path||"";ff(p,!U||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let N=Sa(),L;if(d){let W=typeof d=="string"?wa(d):d;_e(k==="/"||((K=W.pathname)==null?void 0:K.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${W.pathname}" was given in the \`location\` prop.`),L=W}else L=N;let C=L.pathname||"/",J=C;if(k!=="/"){let W=k.replace(/^\//,"").split("/");J="/"+C.replace(/^\//,"").split("/").slice(W.length).join("/")}let G=!y&&h&&h.matches&&h.matches.length>0?h.matches:tf(o,{pathname:J});Vn(U||G!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Vn(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=xy(G&&G.map(W=>Object.assign({},W,{params:Object.assign({},v,W.params),pathname:wt([k,f.encodeLocation?f.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?k:wt([k,f.encodeLocation?f.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),A,h,r);return d&&I?j.createElement(ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},I):I}function jy(){let o=Cy(),d=my(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),h=o instanceof Error?o.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},y={padding:"2px 4px",backgroundColor:r},A=null;return console.error("Error handled by React Router default ErrorBoundary:",o),A=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:y},"ErrorBoundary")," or"," ",j.createElement("code",{style:y},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},d),h?j.createElement("pre",{style:f},h):null,A)}var Ey=j.createElement(jy,null),Ay=class extends j.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){console.error("React Router caught the following error during render",o,d)}render(){return this.state.error!==void 0?j.createElement(jt.Provider,{value:this.props.routeContext},j.createElement(er.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ty({routeContext:o,match:d,children:h}){let r=j.useContext(ll);return r&&r.static&&r.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=d.route.id),j.createElement(jt.Provider,{value:o},h)}function xy(o,d=[],h=null,r=null){if(o==null){if(!h)return null;if(h.errors)o=h.matches;else if(d.length===0&&!h.initialized&&h.matches.length>0)o=h.matches;else return null}let f=o,y=h==null?void 0:h.errors;if(y!=null){let v=f.findIndex(p=>p.route.id&&(y==null?void 0:y[p.route.id])!==void 0);_e(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),f=f.slice(0,Math.min(f.length,v+1))}let A=!1,x=-1;if(h)for(let v=0;v<f.length;v++){let p=f[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=v),p.route.id){let{loaderData:k,errors:U}=h,N=p.route.loader&&!k.hasOwnProperty(p.route.id)&&(!U||U[p.route.id]===void 0);if(p.route.lazy||N){A=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}return f.reduceRight((v,p,k)=>{let U,N=!1,L=null,C=null;h&&(U=y&&p.route.id?y[p.route.id]:void 0,L=p.route.errorElement||Ey,A&&(x<0&&k===0?(ff("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,C=null):x===k&&(N=!0,C=p.route.hydrateFallbackElement||null)));let J=d.concat(f.slice(0,k+1)),G=()=>{let I;return U?I=L:N?I=C:p.route.Component?I=j.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=v,j.createElement(Ty,{match:p,routeContext:{outlet:v,matches:J,isDataRoute:h!=null},children:I})};return h&&(p.route.ErrorBoundary||p.route.errorElement||k===0)?j.createElement(Ay,{location:h.location,revalidation:h.revalidation,component:L,error:U,children:G(),routeContext:{outlet:null,matches:J,isDataRoute:!0}}):G()},null)}function nr(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ky(o){let d=j.useContext(ll);return _e(d,nr(o)),d}function My(o){let d=j.useContext(To);return _e(d,nr(o)),d}function qy(o){let d=j.useContext(jt);return _e(d,nr(o)),d}function tr(o){let d=qy(o),h=d.matches[d.matches.length-1];return _e(h.route.id,`${o} can only be used on routes that contain a unique "id"`),h.route.id}function zy(){return tr("useRouteId")}function Cy(){var r;let o=j.useContext(er),d=My("useRouteError"),h=tr("useRouteError");return o!==void 0?o:(r=d.errors)==null?void 0:r[h]}function Oy(){let{router:o}=ky("useNavigate"),d=tr("useNavigate"),h=j.useRef(!1);return hf(()=>{h.current=!0}),j.useCallback(async(f,y={})=>{Vn(h.current,cf),h.current&&(typeof f=="number"?o.navigate(f):await o.navigate(f,{fromRouteId:d,...y}))},[o,d])}var Wd={};function ff(o,d,h){!d&&!Wd[o]&&(Wd[o]=!0,Vn(!1,h))}j.memo(Ny);function Ny({routes:o,future:d,state:h}){return df(o,void 0,h,d)}function Ks(o){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dy({basename:o="/",children:d=null,location:h,navigationType:r="POP",navigator:f,static:y=!1}){_e(!ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=o.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:A,navigator:f,static:y,future:{}}),[A,f,y]);typeof h=="string"&&(h=wa(h));let{pathname:v="/",search:p="",hash:k="",state:U=null,key:N="default"}=h,L=j.useMemo(()=>{let C=St(v,A);return C==null?null:{location:{pathname:C,search:p,hash:k,state:U,key:N},navigationType:r}},[A,v,p,k,U,N,r]);return Vn(L!=null,`<Router basename="${A}"> is not able to match the URL "${v}${p}${k}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:j.createElement(et.Provider,{value:x},j.createElement(ri.Provider,{children:d,value:L}))}function Ry({children:o,location:d}){return Sy($s(o),d)}function $s(o,d=[]){let h=[];return j.Children.forEach(o,(r,f)=>{if(!j.isValidElement(r))return;let y=[...d,f];if(r.type===j.Fragment){h.push.apply(h,$s(r.props.children,y));return}_e(r.type===Ks,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let A={id:r.props.id||y.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(A.children=$s(r.props.children,y)),h.push(A)}),h}var jo="get",Eo="application/x-www-form-urlencoded";function xo(o){return o!=null&&typeof o.tagName=="string"}function Iy(o){return xo(o)&&o.tagName.toLowerCase()==="button"}function _y(o){return xo(o)&&o.tagName.toLowerCase()==="form"}function Uy(o){return xo(o)&&o.tagName.toLowerCase()==="input"}function By(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Ly(o,d){return o.button===0&&(!d||d==="_self")&&!By(o)}var So=null;function Hy(){if(So===null)try{new FormData(document.createElement("form"),0),So=!1}catch{So=!0}return So}var Yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Js(o){return o!=null&&!Yy.has(o)?(Vn(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eo}"`),null):o}function Gy(o,d){let h,r,f,y,A;if(_y(o)){let x=o.getAttribute("action");r=x?St(x,d):null,h=o.getAttribute("method")||jo,f=Js(o.getAttribute("enctype"))||Eo,y=new FormData(o)}else if(Iy(o)||Uy(o)&&(o.type==="submit"||o.type==="image")){let x=o.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=o.getAttribute("formaction")||x.getAttribute("action");if(r=v?St(v,d):null,h=o.getAttribute("formmethod")||x.getAttribute("method")||jo,f=Js(o.getAttribute("formenctype"))||Js(x.getAttribute("enctype"))||Eo,y=new FormData(x,o),!Hy()){let{name:p,type:k,value:U}=o;if(k==="image"){let N=p?`${p}.`:"";y.append(`${N}x`,"0"),y.append(`${N}y`,"0")}else p&&y.append(p,U)}}else{if(xo(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');h=jo,r=null,f=Eo,A=o}return y&&f==="text/plain"&&(A=y,y=void 0),{action:r,method:h.toLowerCase(),encType:f,formData:y,body:A}}function ar(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}async function Qy(o,d){if(o.id in d)return d[o.id];try{let h=await import(o.module);return d[o.id]=h,h}catch(h){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(h),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jy(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Vy(o,d,h){let r=await Promise.all(o.map(async f=>{let y=d.routes[f.route.id];if(y){let A=await Qy(y,h);return A.links?A.links():[]}return[]}));return Ky(r.flat(1).filter(Jy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Kd(o,d,h,r,f,y){let A=(v,p)=>h[p]?v.route.id!==h[p].route.id:!0,x=(v,p)=>{var k;return h[p].pathname!==v.pathname||((k=h[p].route.path)==null?void 0:k.endsWith("*"))&&h[p].params["*"]!==v.params["*"]};return y==="assets"?d.filter((v,p)=>A(v,p)||x(v,p)):y==="data"?d.filter((v,p)=>{var U;let k=r.routes[v.route.id];if(!k||!k.hasLoader)return!1;if(A(v,p)||x(v,p))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((U=h[0])==null?void 0:U.params)||{},nextUrl:new URL(o,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Xy(o,d,{includeHydrateFallback:h}={}){return Zy(o.map(r=>{let f=d.routes[r.route.id];if(!f)return[];let y=[f.module];return f.clientActionModule&&(y=y.concat(f.clientActionModule)),f.clientLoaderModule&&(y=y.concat(f.clientLoaderModule)),h&&f.hydrateFallbackModule&&(y=y.concat(f.hydrateFallbackModule)),f.imports&&(y=y.concat(f.imports)),y}).flat(1))}function Zy(o){return[...new Set(o)]}function Wy(o){let d={},h=Object.keys(o).sort();for(let r of h)d[r]=o[r];return d}function Ky(o,d){let h=new Set;return new Set(d),o.reduce((r,f)=>{let y=JSON.stringify(Wy(f));return h.has(y)||(h.add(y),r.push({key:y,link:f})),r},[])}function $y(o,d){let h=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return h.pathname==="/"?h.pathname="_root.data":d&&St(h.pathname,d)==="/"?h.pathname=`${d.replace(/\/$/,"")}/_root.data`:h.pathname=`${h.pathname.replace(/\/$/,"")}.data`,h}function mf(){let o=j.useContext(ll);return ar(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Fy(){let o=j.useContext(To);return ar(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var lr=j.createContext(void 0);lr.displayName="FrameworkContext";function pf(){let o=j.useContext(lr);return ar(o,"You must render this element inside a <HydratedRouter> element"),o}function Py(o,d){let h=j.useContext(lr),[r,f]=j.useState(!1),[y,A]=j.useState(!1),{onFocus:x,onBlur:v,onMouseEnter:p,onMouseLeave:k,onTouchStart:U}=d,N=j.useRef(null);j.useEffect(()=>{if(o==="render"&&A(!0),o==="viewport"){let J=I=>{I.forEach(K=>{A(K.isIntersecting)})},G=new IntersectionObserver(J,{threshold:.5});return N.current&&G.observe(N.current),()=>{G.disconnect()}}},[o]),j.useEffect(()=>{if(r){let J=setTimeout(()=>{A(!0)},100);return()=>{clearTimeout(J)}}},[r]);let L=()=>{f(!0)},C=()=>{f(!1),A(!1)};return h?o!=="intent"?[y,N,{}]:[y,N,{onFocus:ii(x,L),onBlur:ii(v,C),onMouseEnter:ii(p,L),onMouseLeave:ii(k,C),onTouchStart:ii(U,L)}]:[!1,N,{}]}function ii(o,d){return h=>{o&&o(h),h.defaultPrevented||d(h)}}function eg({page:o,...d}){let{router:h}=mf(),r=j.useMemo(()=>tf(h.routes,o,h.basename),[h.routes,o,h.basename]);return r?j.createElement(tg,{page:o,matches:r,...d}):null}function ng(o){let{manifest:d,routeModules:h}=pf(),[r,f]=j.useState([]);return j.useEffect(()=>{let y=!1;return Vy(o,d,h).then(A=>{y||f(A)}),()=>{y=!0}},[o,d,h]),r}function tg({page:o,matches:d,...h}){let r=Sa(),{manifest:f,routeModules:y}=pf(),{basename:A}=mf(),{loaderData:x,matches:v}=Fy(),p=j.useMemo(()=>Kd(o,d,v,f,r,"data"),[o,d,v,f,r]),k=j.useMemo(()=>Kd(o,d,v,f,r,"assets"),[o,d,v,f,r]),U=j.useMemo(()=>{if(o===r.pathname+r.search+r.hash)return[];let C=new Set,J=!1;if(d.forEach(I=>{var W;let K=f.routes[I.route.id];!K||!K.hasLoader||(!p.some(re=>re.route.id===I.route.id)&&I.route.id in x&&((W=y[I.route.id])!=null&&W.shouldRevalidate)||K.hasClientLoader?J=!0:C.add(I.route.id))}),C.size===0)return[];let G=$y(o,A);return J&&C.size>0&&G.searchParams.set("_routes",d.filter(I=>C.has(I.route.id)).map(I=>I.route.id).join(",")),[G.pathname+G.search]},[A,x,r,f,p,d,o,y]),N=j.useMemo(()=>Xy(k,f),[k,f]),L=ng(k);return j.createElement(j.Fragment,null,U.map(C=>j.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...h})),N.map(C=>j.createElement("link",{key:C,rel:"modulepreload",href:C,...h})),L.map(({key:C,link:J})=>j.createElement("link",{key:C,...J})))}function ag(...o){return d=>{o.forEach(h=>{typeof h=="function"?h(d):h!=null&&(h.current=d)})}}var yf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yf&&(window.__reactRouterVersion="7.4.0")}catch{}function lg({basename:o,children:d,window:h}){let r=j.useRef();r.current==null&&(r.current=Vp({window:h,v5Compat:!0}));let f=r.current,[y,A]=j.useState({action:f.action,location:f.location}),x=j.useCallback(v=>{j.startTransition(()=>A(v))},[A]);return j.useLayoutEffect(()=>f.listen(x),[f,x]),j.createElement(Dy,{basename:o,children:d,location:y.location,navigationType:y.action,navigator:f})}var gf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ko=j.forwardRef(function({onClick:d,discover:h="render",prefetch:r="none",relative:f,reloadDocument:y,replace:A,state:x,target:v,to:p,preventScrollReset:k,viewTransition:U,...N},L){let{basename:C}=j.useContext(et),J=typeof p=="string"&&gf.test(p),G,I=!1;if(typeof p=="string"&&J&&(G=p,yf))try{let V=new URL(window.location.href),R=p.startsWith("//")?new URL(V.protocol+p):new URL(p),B=St(R.pathname,C);R.origin===V.origin&&B!=null?p=B+R.search+R.hash:I=!0}catch{Vn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=vy(p,{relative:f}),[W,re,ee]=Py(r,N),Ee=sg(p,{replace:A,state:x,target:v,preventScrollReset:k,relative:f,viewTransition:U});function Ue(V){d&&d(V),V.defaultPrevented||Ee(V)}let qe=j.createElement("a",{...N,...ee,href:G||K,onClick:I||y?d:Ue,ref:ag(L,re),target:v,"data-discover":!J&&h==="render"?"true":void 0});return W&&!J?j.createElement(j.Fragment,null,qe,j.createElement(eg,{page:K})):qe});ko.displayName="Link";var ig=j.forwardRef(function({"aria-current":d="page",caseSensitive:h=!1,className:r="",end:f=!1,style:y,to:A,viewTransition:x,children:v,...p},k){let U=hi(A,{relative:p.relative}),N=Sa(),L=j.useContext(To),{navigator:C,basename:J}=j.useContext(et),G=L!=null&&fg(U)&&x===!0,I=C.encodeLocation?C.encodeLocation(U).pathname:U.pathname,K=N.pathname,W=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;h||(K=K.toLowerCase(),W=W?W.toLowerCase():null,I=I.toLowerCase()),W&&J&&(W=St(W,J)||W);const re=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let ee=K===I||!f&&K.startsWith(I)&&K.charAt(re)==="/",Ee=W!=null&&(W===I||!f&&W.startsWith(I)&&W.charAt(I.length)==="/"),Ue={isActive:ee,isPending:Ee,isTransitioning:G},qe=ee?d:void 0,V;typeof r=="function"?V=r(Ue):V=[r,ee?"active":null,Ee?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let R=typeof y=="function"?y(Ue):y;return j.createElement(ko,{...p,"aria-current":qe,className:V,ref:k,style:R,to:A,viewTransition:x},typeof v=="function"?v(Ue):v)});ig.displayName="NavLink";var og=j.forwardRef(({discover:o="render",fetcherKey:d,navigate:h,reloadDocument:r,replace:f,state:y,method:A=jo,action:x,onSubmit:v,relative:p,preventScrollReset:k,viewTransition:U,...N},L)=>{let C=hg(),J=dg(x,{relative:p}),G=A.toLowerCase()==="get"?"get":"post",I=typeof x=="string"&&gf.test(x),K=W=>{if(v&&v(W),W.defaultPrevented)return;W.preventDefault();let re=W.nativeEvent.submitter,ee=(re==null?void 0:re.getAttribute("formmethod"))||A;C(re||W.currentTarget,{fetcherKey:d,method:ee,navigate:h,replace:f,state:y,relative:p,preventScrollReset:k,viewTransition:U})};return j.createElement("form",{ref:L,method:G,action:J,onSubmit:r?v:K,...N,"data-discover":!I&&o==="render"?"true":void 0})});og.displayName="Form";function ug(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vf(o){let d=j.useContext(ll);return _e(d,ug(o)),d}function sg(o,{target:d,replace:h,state:r,preventScrollReset:f,relative:y,viewTransition:A}={}){let x=by(),v=Sa(),p=hi(o,{relative:y});return j.useCallback(k=>{if(Ly(k,d)){k.preventDefault();let U=h!==void 0?h:si(v)===si(p);x(o,{replace:U,state:r,preventScrollReset:f,relative:y,viewTransition:A})}},[v,x,p,h,r,d,o,f,y,A])}var rg=0,cg=()=>`__${String(++rg)}__`;function hg(){let{router:o}=vf("useSubmit"),{basename:d}=j.useContext(et),h=zy();return j.useCallback(async(r,f={})=>{let{action:y,method:A,encType:x,formData:v,body:p}=Gy(r,d);if(f.navigate===!1){let k=f.fetcherKey||cg();await o.fetch(k,h,f.action||y,{preventScrollReset:f.preventScrollReset,formData:v,body:p,formMethod:f.method||A,formEncType:f.encType||x,flushSync:f.flushSync})}else await o.navigate(f.action||y,{preventScrollReset:f.preventScrollReset,formData:v,body:p,formMethod:f.method||A,formEncType:f.encType||x,replace:f.replace,state:f.state,fromRouteId:h,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,d,h])}function dg(o,{relative:d}={}){let{basename:h}=j.useContext(et),r=j.useContext(jt);_e(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),y={...hi(o||".",{relative:d})},A=Sa();if(o==null){y.search=A.search;let x=new URLSearchParams(y.search),v=x.getAll("index");if(v.some(k=>k==="")){x.delete("index"),v.filter(U=>U).forEach(U=>x.append("index",U));let k=x.toString();y.search=k?`?${k}`:""}}return(!o||o===".")&&f.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),h!=="/"&&(y.pathname=y.pathname==="/"?h:wt([h,y.pathname])),si(y)}function fg(o,d={}){let h=j.useContext(rf);_e(h!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=vf("useViewTransitionState"),f=hi(o,{relative:d.relative});if(!h.isTransitioning)return!1;let y=St(h.currentLocation.pathname,r)||h.currentLocation.pathname,A=St(h.nextLocation.pathname,r)||h.nextLocation.pathname;return Ao(f.pathname,A)!=null||Ao(f.pathname,y)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,h,r)=>r?r.toUpperCase():h.toLowerCase()),$d=o=>{const d=pg(o);return d.charAt(0).toUpperCase()+d.slice(1)},bf=(...o)=>o.filter((d,h,r)=>!!d&&d.trim()!==""&&r.indexOf(d)===h).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=j.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:r,className:f="",children:y,iconNode:A,...x},v)=>j.createElement("svg",{ref:v,...yg,width:d,height:d,stroke:o,strokeWidth:r?Number(h)*24/Number(d):h,className:bf("lucide",f),...x},[...A.map(([p,k])=>j.createElement(p,k)),...Array.isArray(y)?y:[y]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(o,d)=>{const h=j.forwardRef(({className:r,...f},y)=>j.createElement(gg,{ref:y,iconNode:d,className:bf(`lucide-${mg($d(o))}`,`lucide-${o}`,r),...f}));return h.displayName=$d(o),h};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],Fd=Se("audio-waveform",vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],wg=Se("baby",bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],jg=Se("book-open",Sg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],wf=Se("chevron-down",Eg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Sf=Se("chevron-up",Ag);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],oi=Se("circle-help",Tg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],kg=Se("fast-forward",xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],qg=Se("house",Mg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Cg=Se("info",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],ui=Se("medal",Og);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],Dg=Se("mic",Ng);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ir=Se("music",Rg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],_g=Se("pause",Ig);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Bg=Se("play",Ug);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Hg=Se("plus",Lg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],Gg=Se("rewind",Yg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Jg=Se("rotate-ccw",Qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Xg=Se("shuffle",Vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Wg=Se("skip-forward",Zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],$g=Se("skull",Kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Pg=Se("sliders-vertical",Fg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],nv=Se("timer-off",ev);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],av=Se("timer-reset",tv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],iv=Se("timer",lv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],uv=Se("trash-2",ov);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Vs=Se("trophy",sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],cv=Se("users",rv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],jf=Se("volume-2",hv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],fv=Se("volume-x",dv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fs=Se("x",mv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xs=Se("zap",pv),yv=()=>s.jsx("main",{className:"accueil",children:s.jsxs("div",{className:"accueil-container",children:[s.jsxs("header",{className:"accueil-header",children:[s.jsx(ir,{className:"logo",size:48}),s.jsx("h1",{children:"BlindTest Master"})]}),s.jsxs("section",{className:"intro",children:[s.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),s.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),s.jsxs("section",{className:"manches-preview",children:[s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 1"}),s.jsx("p",{children:"Easy BlindTest"}),s.jsx("span",{className:"emoji",children:"🎵"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 2"}),s.jsx("p",{children:"dnilBtseT"}),s.jsx("span",{className:"emoji",children:"🎙️"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 3"}),s.jsx("p",{children:"X-trem BlindTest"}),s.jsx("span",{className:"emoji",children:"🔀"})]})]}),s.jsx(ko,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),gv=({manche:o})=>o?s.jsxs("section",{className:"info-manche",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-emoji",children:o.emoji}),s.jsxs("h2",{children:["Manche ",o.id,": ",o.nom]})]}),s.jsxs("div",{className:"manche-details",children:[s.jsx("p",{children:o.description}),s.jsx("p",{className:"points-info",children:o.points})]})]}):null,vv=({chanson:o,afficherTitre:d,afficherArtiste:h,afficherParoles:r})=>o?s.jsxs("div",{className:"affichage-chanson",children:[h&&s.jsx("p",{className:"chanson-artiste",children:o.artiste}),d&&s.jsx("h3",{className:"chanson-titre",children:o.titre}),r&&s.jsxs("div",{className:"paroles-container",children:[s.jsx("h4",{children:"Paroles:"}),s.jsx("p",{className:"paroles",children:o.paroles.split(`
`).map((f,y)=>s.jsxs("span",{className:"paroles-line",children:[f,s.jsx("br",{})]},y))})]})]}):null,bv=({teams:o=[],onAddTeam:d,onRemoveTeam:h,onAddPoints:r})=>{const[f,y]=j.useState(""),[A,x]=j.useState(!1),[v,p]=j.useState({}),[k,U]=j.useState({}),[N,L]=j.useState(!1),[C,J]=j.useState(null),G=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];j.useEffect(()=>{const R={};o.forEach(B=>{R[B.id]=B.score}),U(R)},[o]);const I=()=>{if(f.trim()==="")return;const R={id:Date.now().toString(),name:f,score:0,color:G[o.length%G.length]};d(R),y("")},K=R=>{R.key==="Enter"&&I()},W=()=>{x(!0)},re=()=>{x(!1),J(null)},ee=()=>{L(!N)},Ee=R=>{J(C===R?null:R)},Ue=(R,B)=>{U(le=>({...le,[R]:(le[R]||0)+B})),r(R,B),p(le=>({...le,[R]:B})),setTimeout(()=>{p(le=>{const ln={...le};return delete ln[R],ln})},1e3)},qe=[...o].sort((R,B)=>B.score-R.score),V=R=>{var B;return k[R]!==void 0?k[R]:((B=o.find(le=>le.id===R))==null?void 0:B.score)||0};return s.jsxs("div",{className:"team-manager-container",children:[s.jsxs("button",{className:"team-manager-button",onClick:W,children:[s.jsx(Vs,{size:20}),s.jsx("span",{children:"Équipes & Scores"})]}),s.jsxs("button",{className:"leaderboard-floating-button",onClick:ee,children:[s.jsx(ui,{size:20}),s.jsx("span",{children:"Classement"})]}),N&&s.jsxs("div",{className:"floating-leaderboard",children:[s.jsxs("div",{className:"floating-leaderboard-header",children:[s.jsx("h3",{children:"Classement"}),s.jsx("button",{className:"close-leaderboard",onClick:ee,children:s.jsx(Fs,{size:18})})]}),qe.length>0?s.jsx("div",{className:"floating-leaderboard-content",children:qe.map((R,B)=>s.jsxs("div",{className:`floating-leaderboard-item ${B===0?"first-place":B===1?"second-place":B===2?"third-place":""}`,children:[s.jsxs("div",{className:"leaderboard-position",children:[B===0&&s.jsx(Vs,{size:16,className:"gold-trophy"}),B===1&&s.jsx(ui,{size:16,className:"silver-medal"}),B===2&&s.jsx(ui,{size:16,className:"bronze-medal"}),B>2&&s.jsxs("span",{children:["#",B+1]})]}),s.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:R.color}}),s.jsx("div",{className:"leaderboard-team-name",children:R.name}),s.jsx("div",{className:"leaderboard-team-score",children:V(R.id)})]},R.id))}):s.jsx("div",{className:"floating-leaderboard-empty",children:s.jsx("p",{children:"Aucune équipe"})})]}),A&&s.jsx("div",{className:"team-modal-overlay",onClick:re,children:s.jsxs("div",{className:"team-modal",onClick:R=>R.stopPropagation(),children:[s.jsx("button",{className:"close-modal",onClick:re,children:s.jsx(Fs,{size:24})}),s.jsx("div",{className:"modal-header",children:s.jsx("h2",{children:"Gestion des Équipes & Scores"})}),s.jsxs("div",{className:"unified-team-tab",children:[s.jsxs("div",{className:"add-team-form",children:[s.jsx("input",{type:"text",value:f,onChange:R=>y(R.target.value),onKeyDown:K,placeholder:"Nom de l'équipe",maxLength:20}),s.jsxs("button",{className:"add-team-button",onClick:I,disabled:f.trim()==="",children:[s.jsx(Hg,{size:16}),"Ajouter une équipe"]})]}),o.length>0?s.jsx("div",{className:"teams-list",children:qe.map((R,B)=>s.jsxs("div",{className:`team-item ${C===R.id?"expanded":""} ${B===0?"first-place":B===1?"second-place":B===2?"third-place":""}`,children:[s.jsxs("div",{className:"team-item-header",onClick:()=>Ee(R.id),children:[s.jsxs("div",{className:"team-rank",children:[B===0&&s.jsx(Vs,{size:16,className:"gold-trophy"}),B===1&&s.jsx(ui,{size:16,className:"silver-medal"}),B===2&&s.jsx(ui,{size:16,className:"bronze-medal"}),B>2&&s.jsxs("span",{className:"rank-number",children:["#",B+1]})]}),s.jsx("div",{className:"team-color",style:{backgroundColor:R.color}}),s.jsx("div",{className:"team-name",children:R.name}),s.jsxs("div",{className:"team-score-display",children:[s.jsx("span",{className:"score-value",children:V(R.id)}),v[R.id]&&s.jsx("span",{className:`score-animation ${v[R.id]<0?"negative":"positive"}`,children:v[R.id]>0?`+${v[R.id]}`:v[R.id]})]}),s.jsx("button",{className:"expand-toggle",children:C===R.id?s.jsx(Sf,{size:18}):s.jsx(wf,{size:18})})]}),C===R.id&&s.jsx("div",{className:"team-actions",children:s.jsxs("div",{className:"team-actions-inner",children:[s.jsxs("div",{className:"point-buttons",children:[s.jsx("h4",{children:"Ajouter des points"}),s.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(le=>s.jsx("button",{className:`point-button ${le<0?"negative":""}`,style:{backgroundColor:le<0?"#ffeeee":`${R.color}20`,borderColor:le<0?"#e74c3c":R.color,color:le<0?"#e74c3c":void 0},onClick:()=>Ue(R.id,le),children:le>0?`+${le}`:le},le))})]}),s.jsxs("button",{className:"delete-team-button",onClick:()=>h(R.id),children:[s.jsx(uv,{size:16}),s.jsx("span",{children:"Supprimer l'équipe"})]})]})})]},R.id))}):s.jsxs("div",{className:"no-teams",children:[s.jsx("p",{children:"Aucune équipe ajoutée"}),s.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]})]})})]})},wv=({onEffectsChange:o,isExpanded:d,toggleExpanded:h,currentEffects:r})=>{const[f,y]=j.useState(r.distortion||5e3),[A,x]=j.useState(r.pitchShift||.6),[v,p]=j.useState(r.wahFrequency||1),[k,U]=j.useState(r.wahDepth||.3),[N,L]=j.useState(r.growlAmount||.03),[C,J]=j.useState(null),G=B=>{const le=Number.parseInt(B.target.value);y(le),o({distortion:le,pitchShift:A,wahFrequency:v,wahDepth:k,growlAmount:N})},I=B=>{const le=Number.parseFloat(B.target.value);x(le),o({distortion:f,pitchShift:le,wahFrequency:v,wahDepth:k,growlAmount:N})},K=B=>{const le=Number.parseFloat(B.target.value);p(le),o({distortion:f,pitchShift:A,wahFrequency:le,wahDepth:k,growlAmount:N})},W=B=>{const le=Number.parseFloat(B.target.value);U(le),o({distortion:f,pitchShift:A,wahFrequency:v,wahDepth:le,growlAmount:N})},re=B=>{const le=Number.parseFloat(B.target.value);L(le),o({distortion:f,pitchShift:A,wahFrequency:v,wahDepth:k,growlAmount:le})},ee=()=>{const B={distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03};y(B.distortion),x(B.pitchShift),p(B.wahFrequency),U(B.wahDepth),L(B.growlAmount),o(B)},Ee=()=>{const B={distortion:Math.floor(Math.random()*4e4)+5e3,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*3+.5,wahDepth:Math.random()*.3+.1,growlAmount:Math.random()*.3};y(B.distortion),x(B.pitchShift),p(B.wahFrequency),U(B.wahDepth),L(B.growlAmount),o(B)},Ue=()=>{const B={distortion:6e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:5,wahDepth:.4,growlAmount:.5};y(B.distortion),x(B.pitchShift),p(B.wahFrequency),U(B.wahDepth),L(B.growlAmount),o(B)},qe=()=>{const B={...r,pitchShift:.2};x(B.pitchShift),o(B)},V=()=>{const B={...r,pitchShift:3.5};x(B.pitchShift),o(B)},R={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return s.jsxs("div",{className:`audio-effects-controller ${d?"expanded":"collapsed"}`,children:[s.jsxs("div",{className:"effects-header",onClick:h,children:[s.jsx(Pg,{size:16}),s.jsx("h3",{children:"Effets Audio"}),s.jsx("span",{className:"toggle-icon",children:d?s.jsx(wf,{size:14}):s.jsx(Sf,{size:14})})]}),d&&s.jsxs("div",{className:"effects-content",children:[s.jsxs("div",{className:"voice-presets",children:[s.jsxs("button",{className:"voice-preset deep",onClick:qe,children:[s.jsx($g,{size:14}),s.jsx("span",{children:"Monstre"})]}),s.jsxs("button",{className:"voice-preset chipmunk",onClick:V,children:[s.jsx(wg,{size:14}),s.jsx("span",{children:"Chipmunk"})]})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Xs,{size:14}),s.jsx("span",{children:"Distorsion"}),s.jsxs("span",{className:"help-container",children:[s.jsx(oi,{size:14,className:"help-icon",onMouseEnter:()=>J("distortion"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:f})]}),C==="distortion"&&s.jsx("div",{className:"tooltip",children:R.distortion})]}),s.jsx("input",{type:"range",min:"1000",max:"70000",step:"1000",value:f,onChange:G,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(jf,{size:14}),s.jsx("span",{children:"Hauteur"}),s.jsxs("span",{className:"help-container",children:[s.jsx(oi,{size:14,className:"help-icon",onMouseEnter:()=>J("pitchShift"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:A.toFixed(2)})]}),C==="pitchShift"&&s.jsx("div",{className:"tooltip",children:R.pitchShift})]}),s.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:A,onChange:I,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Fd,{size:14}),s.jsx("span",{children:"Wah-Freq"}),s.jsxs("span",{className:"help-container",children:[s.jsx(oi,{size:14,className:"help-icon",onMouseEnter:()=>J("wahFrequency"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:v.toFixed(1)})]}),C==="wahFrequency"&&s.jsx("div",{className:"tooltip",children:R.wahFrequency})]}),s.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:v,onChange:K,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Fd,{size:14}),s.jsx("span",{children:"Wah-Prof"}),s.jsxs("span",{className:"help-container",children:[s.jsx(oi,{size:14,className:"help-icon",onMouseEnter:()=>J("wahDepth"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:k.toFixed(2)})]}),C==="wahDepth"&&s.jsx("div",{className:"tooltip",children:R.wahDepth})]}),s.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:k,onChange:W,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Xs,{size:14}),s.jsx("span",{children:"Grognement"}),s.jsxs("span",{className:"help-container",children:[s.jsx(oi,{size:14,className:"help-icon",onMouseEnter:()=>J("growlAmount"),onMouseLeave:()=>J(null)}),s.jsxs("span",{className:"effect-value",children:[(N*100).toFixed(0),"%"]})]}),C==="growlAmount"&&s.jsx("div",{className:"tooltip",children:R.growlAmount})]}),s.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:N,onChange:re,className:"effect-slider"})]}),s.jsxs("div",{className:"effects-buttons",children:[s.jsxs("button",{className:"random-button",onClick:Ee,children:[s.jsx(Xg,{size:14}),"Aléatoire"]}),s.jsxs("button",{className:"extreme-button",onClick:Ue,children:[s.jsx(Xs,{size:14}),"Extrême"]}),s.jsxs("button",{className:"reset-button",onClick:ee,children:[s.jsx(Jg,{size:14}),"Réinitialiser"]})]})]})]})},Pd=[{id:1,nom:"Easy BlindTest",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"dnilBtseT",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],Zs=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
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
That I shoot across the`}],Sv=()=>{const[o,d]=j.useState(!1),[h,r]=j.useState("general"),f=()=>d(!0),y=()=>d(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"regles-button",onClick:f,children:[s.jsx(jg,{size:20}),s.jsx("span",{children:"Règles du jeu"})]}),o&&s.jsx("div",{className:"regles-overlay",onClick:y,children:s.jsxs("div",{className:"regles-modal",onClick:A=>A.stopPropagation(),children:[s.jsx("button",{className:"regles-close",onClick:y,children:s.jsx(Fs,{size:24})}),s.jsxs("div",{className:"regles-header",children:[s.jsx("h2",{children:"Règles du BlindTest Master"}),s.jsx("p",{children:"Tout ce que tu dois savoir pour jouer"})]}),s.jsxs("div",{className:"regles-tabs",children:[s.jsxs("button",{className:`regles-tab ${h==="general"?"active":""}`,onClick:()=>r("general"),children:[s.jsx(Cg,{size:18}),s.jsx("span",{children:"Général"})]}),s.jsxs("button",{className:`regles-tab ${h==="manches"?"active":""}`,onClick:()=>r("manches"),children:[s.jsx(ir,{size:18}),s.jsx("span",{children:"Manches & Points"})]}),s.jsxs("button",{className:`regles-tab ${h==="equipes"?"active":""}`,onClick:()=>r("equipes"),children:[s.jsx(cv,{size:18}),s.jsx("span",{children:"Équipes & Temps"})]})]}),s.jsxs("div",{className:"regles-content",children:[h==="general"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Principe du jeu"}),s.jsxs("p",{children:[s.jsx("i",{children:"BlindTest Master"})," est un jeu musical où les joueurs doivent deviner le titre et/ou l'artiste d'une chanson jouée. Le jeu se déroule en plusieurs manches avec différents niveaux de difficulté."]}),s.jsx("h3",{children:"Objectif"}),s.jsx("p",{children:"Obtenir le maximum de points en identifiant correctement les chansons jouées. L'équipe avec le plus de points à la fin de toutes les manches remporte la partie."}),s.jsxs("div",{className:"buzzer-rule",children:[s.jsx("div",{className:"buzzer-icon",children:s.jsx(Dg,{size:24})}),s.jsxs("div",{className:"buzzer-content",children:[s.jsx("h3",{children:"Règle du micro-buzzer"}),s.jsx("p",{children:"Pour répondre, une équipe doit d'abord attraper le micro-buzzer. La première équipe qui s'empare du micro a le droit de proposer sa réponse. Si la réponse est incorrecte, les autres équipes peuvent alors tenter leur chance."})]})]}),s.jsx("h3",{children:"Déroulement"}),s.jsxs("p",{children:["1. Formez des équipes et donnez-leur un nom",s.jsx("br",{}),"2. Jouez les chansons une par une",s.jsx("br",{}),"3. L'équipe qui attrape le micro-buzzer en premier peut répondre",s.jsx("br",{}),"4. Les équipes qui devinent correctement gagnent des points",s.jsx("br",{}),"5. Passez à travers les différentes manches",s.jsx("br",{}),"6. L'équipe avec le plus de points à la fin gagne"]})]}),h==="manches"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Les différentes manches"}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"1"}),s.jsx("span",{className:"manche-emoji",children:"🎵"}),s.jsx("h4",{children:"Easy BlindTest"})]}),s.jsx("p",{children:"Les chansons sont jouées normalement. Les joueurs doivent identifier le titre et l'artiste."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +1 pour le titre, +1 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"2"}),s.jsx("span",{className:"manche-emoji",children:"🔄"}),s.jsx("h4",{children:"dnilBtseT"})]}),s.jsx("p",{children:"Les chansons sont jouées à l'envers. Les joueurs doivent reconnaître la mélodie malgré l'inversion."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +3 pour le titre, +3 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"3"}),s.jsx("span",{className:"manche-emoji",children:"👹"}),s.jsx("h4",{children:"X-trem BlindTest"})]}),s.jsx("p",{children:"Les chansons sont déformées avec des effets audio. C'est la manche la plus difficile où il faut vraiment avoir une sacrée bonne oreille..."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +4 pour le titre, +4 pour l'artiste"]})]}),s.jsxs("div",{className:"points-card malus",children:[s.jsx("h4",{children:"Malus"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"1 point seulement"})," : Réponse donnée après le temps"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-1 point"})," : Réponse incorrecte"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-2 points"})," : Règles non-respectées (ex: répondre sans avoir le micro-buzzer)"]})]})]}),s.jsx("p",{className:"points-note",children:"Note : Tu peux modifier ces valeurs pour rendre le jeu plus ou moins compétitif."})]}),h==="equipes"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Gestion des équipes"}),s.jsx("h4",{children:"Création des équipes"}),s.jsxs("p",{children:["Crée autant d'équipes que tu le souhaites en cliquant sur le bouton ",s.jsx("i",{children:'"Équipes & Scores"'}),". Donne un nom à chaque équipe. Chaque équipe recevra automatiquement une couleur distinctive."]}),s.jsx("h4",{children:"Nombre de joueurs"}),s.jsx("p",{children:"Il n'y a pas de limite au nombre de joueurs par équipe. Tu peux jouer avec :"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Plusieurs équipes de plusieurs joueurs"}),s.jsx("li",{children:'Plusieurs joueurs individuels (chacun étant sa propre "équipe")'})]}),s.jsx("h4",{children:"Classement"}),s.jsxs("p",{children:["Le classement des équipes est visible à tout moment en cliquant sur le bouton ",s.jsx("i",{children:'"Classement"'}),". Les trois premières équipes sont mises en évidence avec des médailles d'or, d'argent et de bronze."]}),s.jsx("h3",{children:"Gestion du temps"}),s.jsx("h4",{children:"Durée d'écoute"}),s.jsx("p",{children:"Chaque chanson peut être écoutée pendant un maximum de 25 secondes. La réponse doit être donnée durant ce temps imparti."}),s.jsx("h4",{children:"Temps de réponse"}),s.jsx("p",{children:"Après avoir attrapé le micro-buzzer, l'équipe dispose de 5 secondes pour donner sa réponse. Si elle ne répond pas correctement, le micro-buzzer est remis en jeu pour les autres équipes."}),s.jsx("div",{className:"time-warning",children:s.jsxs("p",{children:[s.jsx("strong",{children:"Astuce :"})," Pour rendre le jeu plus dynamique, tu peux arrêter la musique dès qu'une équipe attrape le micro-buzzer, augmentant ainsi la difficulté."]})})]})]}),s.jsxs("div",{className:"regles-footer",children:[s.jsx("p",{children:"Amuse-toi bien et que la meilleure équipe gagne !"}),s.jsx("button",{className:"regles-close-button",onClick:y,children:"Fermer"})]})]})})]})},ef=20,jv=()=>{const[o,d]=j.useState(1),[h,r]=j.useState(null),[f,y]=j.useState(!1),[A,x]=j.useState(!1),[v,p]=j.useState(!1),[k,U]=j.useState(!1),[N,L]=j.useState([]),[C,J]=j.useState({1:[],2:[],3:[]}),[G,I]=j.useState(!1),[K,W]=j.useState(null),[re,ee]=j.useState(null),[Ee,Ue]=j.useState(1),[qe,V]=j.useState(!1),[R,B]=j.useState([]),[le,ln]=j.useState(null),[kn,on]=j.useState(!1),[H,ie]=j.useState({distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03}),te=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[je,g]=j.useState({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()}),z=j.useRef(null),Q=j.useRef(null),Z=j.useRef(null),Y=j.useRef(null),se=j.useRef(null),P=j.useRef(null),ke=j.useRef(0),ge=Pd.find(_=>_.id===o),Oe=je.tempsEcoule,we=je.actif,Ge=je.termine,nt=()=>{const _=Zs.filter(oe=>!N.includes(oe.id)&&oe.id!==le);if(_.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),L([]),J({1:[],2:[],3:[]}),ln(null);const oe=Zs.filter(Ae=>Ae.id!==le),pe=Math.floor(Math.random()*oe.length);return oe[pe]}const X=Math.floor(Math.random()*_.length);return _[X]},Xn=j.useCallback(()=>{if(C[o].length>=ef){const X=o<3?o+1:1;return d(X),!0}return!1},[o,C]),un=()=>{if(Y.current){try{Y.current.stop()}catch{}Y.current=null}},Zn=()=>{try{Q.current||(Q.current=new(window.AudioContext||window.webkitAudioContext));const _=o===2?K:re;if(Q.current&&_){console.log(`Démarrage de la lecture du buffer ${o===2?"inversé":"monstre"}`),un();const X=Q.current.createBufferSource();if(X.buffer=_,o===3){let Ae=1;const{pitchShift:Be}=H;Be<.5?Ae=.4:Be<1?Ae=.6:Be>2?Ae=2.5:Ae=1.5,X.playbackRate.value=Ae}let oe;if(o===3){const{distortion:Ae,pitchShift:Be,wahFrequency:Qe,wahDepth:pn,growlAmount:yn}=H,sn=Q.current.createGain();sn.gain.value=k?0:Ee,se.current=sn;const gn=Q.current.createWaveShaper(),ja=Kt(Ae);gn.curve=ja,gn.oversample="4x";const Sn=Q.current.createBiquadFilter();Sn.type="bandpass",Sn.frequency.value=1e3,Sn.Q.value=2;const De=Q.current.createOscillator();De.type="sine",De.frequency.value=Qe;const Ne=Q.current.createGain();Ne.gain.value=pn*500,De.connect(Ne),Ne.connect(Sn.frequency),De.start(),Z.current={distortionNode:gn,filterNode:Sn,oscillator:De,oscillatorGain:Ne,pitchShift:Be,growlAmount:yn},X.connect(Sn),Sn.connect(gn),gn.connect(sn),sn.connect(Q.current.destination),oe=sn}else{const Ae=Q.current.createGain();Ae.gain.value=k?0:Ee,se.current=Ae,X.connect(Ae),Ae.connect(Q.current.destination),oe=Ae}const pe=isFinite(ke.current)?ke.current:0;return pe>=_.duration?(ke.current=0,X.start(0,0)):X.start(0,pe),Y.current=X,Y.current.startTime=Q.current.currentTime,Y.current.startOffset=pe,console.log(`Lecture ${o===2?"inversée":"monstre"} démarrée avec succès à la position ${pe}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(_){return console.error("Erreur lors de la lecture audio modifiée:",_),!1}},Et=j.useCallback(()=>{if(console.log("togglePlay appelé, manche:",o),o===2||o===3)if(console.log(`Manche ${o} - utilisation du mode audio modifié`),f){if(console.log("Arrêt de la lecture modifiée"),Y.current&&Q.current)try{if(Y.current.startTime!==void 0&&Y.current.startOffset!==void 0){const _=Q.current.currentTime-Y.current.startTime,X=Y.current.startOffset+_;isFinite(X)&&X>=0&&(ke.current=X,console.log("Position audio sauvegardée:",ke.current))}}catch(_){console.error("Erreur lors du calcul de la position audio:",_)}un(),y(!1),At()}else if(console.log("Démarrage de la lecture modifiée"),!K&&o===2||!re&&o===3||!qe){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),V(!0),!G&&h)(o===2?ol:ul)(h.audioUrl).then(X=>{X&&qe&&Zn()&&(y(!0),!we&&!Ge?tt():Ge||Tt())});else if(o===2&&K||o===3&&re){if(o===3&&h&&H){const X=di(re,H);ee(X)}Zn()&&(y(!0),!we&&!Ge?tt():Ge||Tt())}}else Zn()&&(y(!0),!we&&!Ge?tt():Ge||Tt());else console.log("Manche standard - utilisation de l'audio normal"),f?(z.current.pause(),y(!1),At()):z.current.play().then(()=>{y(!0),!we&&!Ge?tt():Ge||Tt()}).catch(_=>{console.error("Erreur lors de la lecture audio:",_)})},[f,o,K,re,G,h,qe,we,Ge,H]),tt=()=>{P.current&&clearInterval(P.current),g(_=>({..._,actif:!0,termine:!1,dernierTemps:Date.now()})),P.current=setInterval(()=>{g(_=>{const X=_.tempsEcoule+1;return X>=25?(clearInterval(P.current),P.current=null,f&&(o===2||o===3?un():z.current&&z.current.pause(),y(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:_.dernierTemps}):(X===20&&f&&(o===2||o===3?un():z.current&&z.current.pause(),y(!1)),{..._,tempsEcoule:X,dernierTemps:Date.now()})})},1e3)},At=()=>{P.current&&(clearInterval(P.current),P.current=null),g(_=>({..._,actif:!1,dernierTemps:Date.now()}))},Tt=()=>{P.current&&clearInterval(P.current),g(_=>({..._,actif:!0,dernierTemps:Date.now()})),P.current=setInterval(()=>{g(_=>{const X=_.tempsEcoule+1;return X>=25?(clearInterval(P.current),P.current=null,f&&(o===2||o===3?un():z.current&&z.current.pause(),y(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:_.dernierTemps}):(X===20&&f&&(o===2||o===3?un():z.current&&z.current.pause(),y(!1)),{..._,tempsEcoule:X,dernierTemps:Date.now()})})},1e3)},xt=()=>{P.current&&(clearInterval(P.current),P.current=null),g({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()})},il=()=>{o===2||o===3?Y.current&&Q.current&&(un(),ke.current+=5,f&&Zn()):z.current&&(z.current.currentTime+=5)},Mo=()=>{o===2||o===3?Y.current&&Q.current&&(un(),ke.current=Math.max(0,ke.current-5),f&&Zn()):z.current&&(z.current.currentTime=Math.max(0,z.current.currentTime-5))},qo=()=>{if(h&&(ln(h.id),L(X=>[...X,h.id]),J(X=>({...X,[o]:[...X[o],h.id]}))),(o===2||o===3)&&Y.current?un():z.current&&z.current.pause(),y(!1),p(!1),x(!1),I(!1),W(null),ee(null),V(!1),xt(),ke.current=0,Wt(),!Xn()){const X=nt();r(X)}},Mn=()=>{(o===2||o===3)&&se.current?se.current.gain.value=k?Ee:0:z.current&&(z.current.muted=!k),U(!k)},Wt=()=>{try{if(un(),Z.current){if(Z.current.oscillator)try{Z.current.oscillator.stop()}catch{}Z.current.distortionNode&&Z.current.distortionNode.disconnect(),Z.current.filterNode&&Z.current.filterNode.disconnect(),Z.current.oscillatorGain&&Z.current.oscillatorGain.disconnect(),Z.current=null}se.current&&(se.current.disconnect(),se.current=null),Q.current&&Q.current.state}catch(_){console.error("Erreur lors du nettoyage des connexions audio:",_)}},ol=async _=>{try{console.log("Préparation de l'audio inversé pour:",_),Wt(),Q.current=new(window.AudioContext||window.webkitAudioContext);const X=await fetch(_);if(!X.ok)throw new Error(`Erreur lors du chargement de l'audio: ${X.status}`);const oe=await X.arrayBuffer();if(!oe||oe.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",oe.byteLength);const pe=await Q.current.decodeAudioData(oe);console.log("Audio décodé, durée:",pe.duration,"secondes");const Ae=Q.current.createBuffer(pe.numberOfChannels,pe.length,pe.sampleRate);for(let Be=0;Be<pe.numberOfChannels;Be++){const Qe=pe.getChannelData(Be),pn=Ae.getChannelData(Be);for(let yn=0;yn<Qe.length;yn++)pn[yn]=Qe[Qe.length-1-yn]}return console.log("Buffer inversé créé avec succès"),W(Ae),I(!0),!0}catch(X){return console.error("Erreur lors de la préparation de l'audio inversé:",X),!1}},ul=async _=>{try{console.log("Préparation de l'audio monstre pour:",_),Q.current||(Q.current=new(window.AudioContext||window.webkitAudioContext));const X=await fetch(_);if(!X.ok)throw new Error(`Erreur lors du chargement de l'audio: ${X.status}`);const oe=await X.arrayBuffer();if(!oe||oe.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",oe.byteLength);const pe=await Q.current.decodeAudioData(oe);return console.log("Audio décodé, durée:",pe.duration,"secondes"),ee(pe),I(!0),!0}catch(X){return console.error("Erreur lors de la préparation de l'audio monstre:",X),!1}},Kt=_=>{const oe=new Float32Array(44100),pe=Math.PI/180;for(let Ae=0;Ae<44100;++Ae){const Be=Ae*2/44100-1;oe[Ae]=(3+_/1e3)*Be*20*pe/(Math.PI+_/1e3*Math.abs(Be))}return oe},zo=_=>{if(ie(_),o===3&&Q.current&&Z.current){const{distortion:X,pitchShift:oe,wahFrequency:pe,wahDepth:Ae,growlAmount:Be}=_;if(Z.current.distortionNode&&(Z.current.distortionNode.curve=Kt(X)),Z.current.oscillator&&(Z.current.oscillator.frequency.value=pe),Z.current.oscillatorGain&&(Z.current.oscillatorGain.gain.value=Ae*500),Z.current.pitchShift=oe,Y.current){let Qe;oe<.5?Qe=.4:oe<1?Qe=.6:oe>2?Qe=2.5:Qe=1.5;try{Y.current.playbackRate.value=Qe}catch(pn){console.error("Erreur lors de l'ajustement du playbackRate:",pn)}}Z.current.growlAmount=Be,console.log("Paramètres d'effets mis à jour en temps réel")}},di=(_,X)=>{const{distortion:oe,pitchShift:pe,wahFrequency:Ae,wahDepth:Be,growlAmount:Qe}=X,yn=Q.current.createBuffer(_.numberOfChannels,_.length,_.sampleRate);for(let sn=0;sn<_.numberOfChannels;sn++){const gn=_.getChannelData(sn),ja=yn.getChannelData(sn),Sn=new Float32Array(gn.length);for(let De=0;De<gn.length;De++){const Ne=Math.sin(De/_.sampleRate*Ae*Math.PI*2)*Be*.5;gn[De]*(1+Ne);let Hn;pe<.5?Hn=2.5:pe<1?Hn=1.8:pe>2?Hn=.4:Hn=.6;const Ft=Math.floor(De/(pe*Hn));Ft<gn.length&&(Sn[De]=gn[Ft])}for(let De=0;De<gn.length;De++){let Ne=Sn[De]||0;if(Ne=Math.tanh(Ne*(oe/2e3))*.9,Math.random()<Qe*.7){const Hn=Qe*1.5;Ne+=(Math.random()*.4-.2)*Math.sin(De/_.sampleRate*40*Math.PI*2)*Hn,Math.random()<Qe*.4&&(Ne*=1+Math.random()*.3),Math.random()<Qe*.1&&(Ne=0)}if(oe>2e4){const Hn=(oe-2e4)/4e4;if(Ne+=Ne*Math.sin(De/_.sampleRate*80*Math.PI*2)*Hn,oe>6e4){const Ft=Math.max(4,Math.floor(16-(oe-6e4)/15e3)),sl=2/Math.pow(2,Ft);Ne=Math.round(Ne/sl)*sl}}Ne=Math.max(-.95,Math.min(.95,Ne)),ja[De]=Ne}}return yn},Co=()=>{on(!kn)};j.useEffect(()=>()=>{Wt(),P.current&&clearInterval(P.current)},[]),j.useEffect(()=>{if(!h){const _=nt();r(_)}},[h]),j.useEffect(()=>{h&&(console.log("Changement de chanson détecté, manche:",o),z.current&&z.current.pause(),un(),y(!1),I(!1),W(null),ee(null),V(!1),xt(),ke.current=0,Wt(),o===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),ol(h.audioUrl)):o===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),ul(h.audioUrl)):(console.log("Manche standard - chargement audio normal"),z.current&&(z.current.src=h.audioUrl,z.current.load(),I(!0))))},[h,o]),j.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",o),I(!1),W(null),ee(null),V(!1),ke.current=0,Wt(),xt();const _=nt();r(_)},[o]);const Oo=_=>{d(_),y(!1),p(!1),x(!1),V(!1)},$t=_=>{if(console.log("Fonction ajouterEquipe appelée avec:",_),typeof _=="string"){const X={id:Date.now().toString(),name:_,score:0,color:te[R.length%te.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",X),B(oe=>[...oe,X])}else _&&typeof _=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",_),B(X=>[...X,_])):console.error("Format d'équipe invalide:",_);console.log("Équipes après ajout:",R)},dn=_=>{const X=R.filter(oe=>oe.id!==_);B(X)},No=(_,X)=>{const oe=R.findIndex(pe=>pe.id===_);if(oe>=0){const pe=[...R];pe[oe]={...pe[oe],score:pe[oe].score+X},B(pe)}else console.error("Équipe non trouvée avec l'ID:",_)};return s.jsxs("main",{className:"jeu",children:[s.jsx("audio",{ref:z}),s.jsxs("header",{className:"jeu-header",children:[s.jsx(ko,{to:"/",className:"accueil-link",children:s.jsx(qg,{size:24})}),s.jsx("h1",{children:"BlindTest Master"}),s.jsx(ir,{className:"logo",size:32})]}),s.jsx(bv,{teams:R,onAddTeam:$t,onRemoveTeam:dn,onAddPoints:No}),s.jsx(Sv,{}),s.jsx(gv,{manche:ge}),o===3&&s.jsxs("div",{className:"effets-info",children:[s.jsxs("span",{className:"effet-badge",children:["Distorsion: ",H.distortion]}),s.jsxs("span",{className:"effet-badge",children:["Hauteur: ",H.pitchShift.toFixed(2)]}),s.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",H.wahFrequency.toFixed(1),"Hz"]}),s.jsxs("span",{className:"effet-badge",children:["Grognement: ",(H.growlAmount*100).toFixed(0),"%"]})]}),s.jsx("section",{className:"jeu-content",children:h?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"chrono-container",children:[s.jsxs("div",{className:`chrono ${Oe>20?"time-critical":Oe>15?"time-warning":""}`,children:[s.jsxs("span",{children:[Oe," / 25 secondes"]}),s.jsx("div",{className:"chrono-progress",style:{width:`${Oe/25*100}%`}})]}),s.jsxs("div",{className:"chrono-controls",children:[we?s.jsxs("button",{className:"chrono-button stop",onClick:At,children:[s.jsx(nv,{size:20}),s.jsx("span",{children:"Arrêter Chrono"})]}):s.jsxs("button",{className:"chrono-button start",onClick:tt,disabled:Ge,children:[s.jsx(iv,{size:20}),s.jsx("span",{children:"Démarrer Chrono"})]}),s.jsxs("button",{className:"chrono-button reset",onClick:xt,children:[s.jsx(av,{size:20}),s.jsx("span",{children:"Réinitialiser"})]})]})]}),s.jsxs("div",{className:"player-controls-container",children:[s.jsxs("div",{className:"player-controls",children:[s.jsx("button",{className:"control-button rewind",onClick:Mo,"aria-label":"Reculer",children:s.jsx(Gg,{size:24})}),s.jsx("button",{className:"control-button play-pause",onClick:Et,"aria-label":f?"Pause":"Lecture",children:f?s.jsx(_g,{size:32}):s.jsx(Bg,{size:32})}),s.jsx("button",{className:"control-button forward",onClick:il,"aria-label":"Avancer",children:s.jsx(kg,{size:24})}),s.jsx("button",{className:"control-button next",onClick:qo,"aria-label":"Chanson suivante",children:s.jsx(Wg,{size:32})}),s.jsx("button",{className:"control-button mute",onClick:Mn,"aria-label":k?"Activer le son":"Couper le son",children:k?s.jsx(fv,{size:24}):s.jsx(jf,{size:24})})]}),o===3&&s.jsx(wv,{onEffectsChange:zo,isExpanded:kn,toggleExpanded:Co,currentEffects:H})]}),s.jsxs("div",{className:"guess-mode",children:[v?s.jsxs(s.Fragment,{children:[s.jsx(vv,{chanson:h,afficherTitre:!0,afficherArtiste:!0,afficherParoles:A}),(o===2||o===3)&&s.jsxs("div",{className:"normal-audio-player",children:[s.jsx("h4",{children:"Version normale:"}),s.jsx("audio",{src:h.audioUrl,controls:!0,className:"normal-audio-controls"})]})]}):s.jsx("div",{className:"hidden-answer",children:s.jsx("p",{children:"?????"})}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"answer-toggle",onClick:()=>p(!v),children:v?"Masquer la réponse":"Révéler la réponse"}),v&&s.jsx("button",{className:"lyrics-toggle",onClick:()=>x(!A),children:A?"Masquer les paroles":"Afficher les paroles"})]})]})]}):s.jsxs("div",{className:"no-songs-message",children:[s.jsx("p",{children:"Aucune chanson disponible."}),s.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),s.jsxs("footer",{className:"jeu-footer",children:[s.jsx("div",{className:"round-navigation",children:Pd.map(_=>s.jsxs("button",{className:`round-button ${o===_.id?"active":""}`,onClick:()=>Oo(_.id),children:[s.jsx("span",{className:"round-number",children:_.id}),s.jsx("span",{className:"round-emoji",children:_.emoji})]},_.id))}),s.jsxs("div",{className:"songs-played-info",children:[s.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",C[o].length," /"," ",ef]}),s.jsxs("p",{children:["Total des chansons jouées: ",N.length," /"," ",Zs.length]})]})]})]})},Ev=()=>{const o=new Date().getFullYear();return s.jsxs("footer",{className:"footer",children:[s.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"}),s.jsxs("p",{className:"footer-text",children:["© ",o," - Tous droits réservés"]})]})};function Av(){return s.jsxs(lg,{children:[s.jsxs(Ry,{children:[s.jsx(Ks,{path:"/",element:s.jsx(yv,{})}),s.jsx(Ks,{path:"/jeu",element:s.jsx(jv,{})})]}),s.jsx(Ev,{})]})}Qp.createRoot(document.getElementById("root")).render(s.jsx(Ip.StrictMode,{children:s.jsx(Av,{})}));
