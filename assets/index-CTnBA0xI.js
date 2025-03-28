(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const y of h)if(y.type==="childList")for(const A of y.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&r(A)}).observe(document,{childList:!0,subtree:!0});function d(h){const y={};return h.integrity&&(y.integrity=h.integrity),h.referrerPolicy&&(y.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?y.credentials="include":h.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function r(h){if(h.ep)return;h.ep=!0;const y=d(h);fetch(h.href,y)}})();function lh(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Bs={exports:{}},ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function Dp(){if(_f)return ti;_f=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(r,h,y){var A=null;if(y!==void 0&&(A=""+y),h.key!==void 0&&(A=""+h.key),"key"in h){y={};for(var T in h)T!=="key"&&(y[T]=h[T])}else y=h;return h=y.ref,{$$typeof:u,type:r,key:A,ref:h!==void 0?h:null,props:y}}return ti.Fragment=f,ti.jsx=d,ti.jsxs=d,ti}var Uf;function Rp(){return Uf||(Uf=1,Bs.exports=Dp()),Bs.exports}var s=Rp(),Ls={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function _p(){if(Bf)return re;Bf=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),A=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),_=Symbol.iterator;function C(v){return v===null||typeof v!="object"?null:(v=_&&v[_]||v["@@iterator"],typeof v=="function"?v:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,J={};function G(v,O,Q){this.props=v,this.context=O,this.refs=J,this.updater=Q||L}G.prototype.isReactComponent={},G.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=G.prototype;function K(v,O,Q){this.props=v,this.context=O,this.refs=J,this.updater=Q||L}var X=K.prototype=new U;X.constructor=K,k(X,G.prototype),X.isPureReactComponent=!0;var ce=Array.isArray,ee={H:null,A:null,T:null,S:null},Se=Object.prototype.hasOwnProperty;function De(v,O,Q,Z,Y,se){return Q=se.ref,{$$typeof:u,type:v,key:O,ref:Q!==void 0?Q:null,props:se}}function xe(v,O){return De(v.type,O,void 0,void 0,void 0,v.props)}function D(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function W(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Q){return O[Q]})}var I=/\/+/g;function le(v,O){return typeof v=="object"&&v!==null&&v.key!=null?W(""+v.key):O.toString(36)}function $e(){}function Mn(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then($e,$e):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function un(v,O,Q,Z,Y){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var P=!1;if(v===null)P=!0;else switch(se){case"bigint":case"string":case"number":P=!0;break;case"object":switch(v.$$typeof){case u:case f:P=!0;break;case M:return P=v._init,un(P(v._payload),O,Q,Z,Y)}}if(P)return Y=Y(v),P=Z===""?"."+le(v,0):Z,ce(Y)?(Q="",P!=null&&(Q=P.replace(I,"$&/")+"/"),un(Y,O,Q,"",function(Ce){return Ce})):Y!=null&&(D(Y)&&(Y=xe(Y,Q+(Y.key==null||v&&v.key===Y.key?"":(""+Y.key).replace(I,"$&/")+"/")+P)),O.push(Y)),1;P=0;var qe=Z===""?".":Z+":";if(ce(v))for(var ge=0;ge<v.length;ge++)Z=v[ge],se=qe+le(Z,ge),P+=un(Z,O,Q,se,Y);else if(ge=C(v),typeof ge=="function")for(v=ge.call(v),ge=0;!(Z=v.next()).done;)Z=Z.value,se=qe+le(Z,ge++),P+=un(Z,O,Q,se,Y);else if(se==="object"){if(typeof v.then=="function")return un(Mn(v),O,Q,Z,Y);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return P}function H(v,O,Q){if(v==null)return v;var Z=[],Y=0;return un(v,Z,"","",function(se){return O.call(Q,se,Y++)}),Z}function ie(v){if(v._status===-1){var O=v._result;O=O(),O.then(function(Q){(v._status===0||v._status===-1)&&(v._status=1,v._result=Q)},function(Q){(v._status===0||v._status===-1)&&(v._status=2,v._result=Q)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var te=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function je(){}return re.Children={map:H,forEach:function(v,O,Q){H(v,function(){O.apply(this,arguments)},Q)},count:function(v){var O=0;return H(v,function(){O++}),O},toArray:function(v){return H(v,function(O){return O})||[]},only:function(v){if(!D(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},re.Component=G,re.Fragment=d,re.Profiler=h,re.PureComponent=K,re.StrictMode=r,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,re.act=function(){throw Error("act(...) is not supported in production builds of React.")},re.cache=function(v){return function(){return v.apply(null,arguments)}},re.cloneElement=function(v,O,Q){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Z=k({},v.props),Y=v.key,se=void 0;if(O!=null)for(P in O.ref!==void 0&&(se=void 0),O.key!==void 0&&(Y=""+O.key),O)!Se.call(O,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&O.ref===void 0||(Z[P]=O[P]);var P=arguments.length-2;if(P===1)Z.children=Q;else if(1<P){for(var qe=Array(P),ge=0;ge<P;ge++)qe[ge]=arguments[ge+2];Z.children=qe}return De(v.type,Y,void 0,void 0,se,Z)},re.createContext=function(v){return v={$$typeof:A,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:y,_context:v},v},re.createElement=function(v,O,Q){var Z,Y={},se=null;if(O!=null)for(Z in O.key!==void 0&&(se=""+O.key),O)Se.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(Y[Z]=O[Z]);var P=arguments.length-2;if(P===1)Y.children=Q;else if(1<P){for(var qe=Array(P),ge=0;ge<P;ge++)qe[ge]=arguments[ge+2];Y.children=qe}if(v&&v.defaultProps)for(Z in P=v.defaultProps,P)Y[Z]===void 0&&(Y[Z]=P[Z]);return De(v,se,void 0,void 0,null,Y)},re.createRef=function(){return{current:null}},re.forwardRef=function(v){return{$$typeof:T,render:v}},re.isValidElement=D,re.lazy=function(v){return{$$typeof:M,_payload:{_status:-1,_result:v},_init:ie}},re.memo=function(v,O){return{$$typeof:p,type:v,compare:O===void 0?null:O}},re.startTransition=function(v){var O=ee.T,Q={};ee.T=Q;try{var Z=v(),Y=ee.S;Y!==null&&Y(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(je,te)}catch(se){te(se)}finally{ee.T=O}},re.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},re.use=function(v){return ee.H.use(v)},re.useActionState=function(v,O,Q){return ee.H.useActionState(v,O,Q)},re.useCallback=function(v,O){return ee.H.useCallback(v,O)},re.useContext=function(v){return ee.H.useContext(v)},re.useDebugValue=function(){},re.useDeferredValue=function(v,O){return ee.H.useDeferredValue(v,O)},re.useEffect=function(v,O){return ee.H.useEffect(v,O)},re.useId=function(){return ee.H.useId()},re.useImperativeHandle=function(v,O,Q){return ee.H.useImperativeHandle(v,O,Q)},re.useInsertionEffect=function(v,O){return ee.H.useInsertionEffect(v,O)},re.useLayoutEffect=function(v,O){return ee.H.useLayoutEffect(v,O)},re.useMemo=function(v,O){return ee.H.useMemo(v,O)},re.useOptimistic=function(v,O){return ee.H.useOptimistic(v,O)},re.useReducer=function(v,O,Q){return ee.H.useReducer(v,O,Q)},re.useRef=function(v){return ee.H.useRef(v)},re.useState=function(v){return ee.H.useState(v)},re.useSyncExternalStore=function(v,O,Q){return ee.H.useSyncExternalStore(v,O,Q)},re.useTransition=function(){return ee.H.useTransition()},re.version="19.0.0",re}var Lf;function Ps(){return Lf||(Lf=1,Ls.exports=_p()),Ls.exports}var j=Ps();const Up=lh(j);var Hs={exports:{}},ai={},Ys={exports:{}},Gs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Bp(){return Hf||(Hf=1,function(u){function f(H,ie){var te=H.length;H.push(ie);e:for(;0<te;){var je=te-1>>>1,v=H[je];if(0<h(v,ie))H[je]=ie,H[te]=v,te=je;else break e}}function d(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],te=H.pop();if(te!==ie){H[0]=te;e:for(var je=0,v=H.length,O=v>>>1;je<O;){var Q=2*(je+1)-1,Z=H[Q],Y=Q+1,se=H[Y];if(0>h(Z,te))Y<v&&0>h(se,Z)?(H[je]=se,H[Y]=te,je=Y):(H[je]=Z,H[Q]=te,je=Q);else if(Y<v&&0>h(se,te))H[je]=se,H[Y]=te,je=Y;else break e}}return ie}function h(H,ie){var te=H.sortIndex-ie.sortIndex;return te!==0?te:H.id-ie.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;u.unstable_now=function(){return y.now()}}else{var A=Date,T=A.now();u.unstable_now=function(){return A.now()-T}}var g=[],p=[],M=1,_=null,C=3,L=!1,k=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function X(H){for(var ie=d(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=H)r(p),ie.sortIndex=ie.expirationTime,f(g,ie);else break;ie=d(p)}}function ce(H){if(J=!1,X(H),!k)if(d(g)!==null)k=!0,Mn();else{var ie=d(p);ie!==null&&un(ce,ie.startTime-H)}}var ee=!1,Se=-1,De=5,xe=-1;function D(){return!(u.unstable_now()-xe<De)}function W(){if(ee){var H=u.unstable_now();xe=H;var ie=!0;try{e:{k=!1,J&&(J=!1,U(Se),Se=-1),L=!0;var te=C;try{n:{for(X(H),_=d(g);_!==null&&!(_.expirationTime>H&&D());){var je=_.callback;if(typeof je=="function"){_.callback=null,C=_.priorityLevel;var v=je(_.expirationTime<=H);if(H=u.unstable_now(),typeof v=="function"){_.callback=v,X(H),ie=!0;break n}_===d(g)&&r(g),X(H)}else r(g);_=d(g)}if(_!==null)ie=!0;else{var O=d(p);O!==null&&un(ce,O.startTime-H),ie=!1}}break e}finally{_=null,C=te,L=!1}ie=void 0}}finally{ie?I():ee=!1}}}var I;if(typeof K=="function")I=function(){K(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,$e=le.port2;le.port1.onmessage=W,I=function(){$e.postMessage(null)}}else I=function(){G(W,0)};function Mn(){ee||(ee=!0,I())}function un(H,ie){Se=G(function(){H(u.unstable_now())},ie)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(H){H.callback=null},u.unstable_continueExecution=function(){k||L||(k=!0,Mn())},u.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<H?Math.floor(1e3/H):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_getFirstCallbackNode=function(){return d(g)},u.unstable_next=function(H){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var te=C;C=ie;try{return H()}finally{C=te}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=C;C=H;try{return ie()}finally{C=te}},u.unstable_scheduleCallback=function(H,ie,te){var je=u.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?je+te:je):te=je,H){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=te+v,H={id:M++,callback:ie,priorityLevel:H,startTime:te,expirationTime:v,sortIndex:-1},te>je?(H.sortIndex=te,f(p,H),d(g)===null&&H===d(p)&&(J?(U(Se),Se=-1):J=!0,un(ce,te-je))):(H.sortIndex=v,f(g,H),k||L||(k=!0,Mn())),H},u.unstable_shouldYield=D,u.unstable_wrapCallback=function(H){var ie=C;return function(){var te=C;C=ie;try{return H.apply(this,arguments)}finally{C=te}}}}(Gs)),Gs}var Yf;function Lp(){return Yf||(Yf=1,Ys.exports=Bp()),Ys.exports}var Is={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Hp(){if(Gf)return dn;Gf=1;var u=Ps();function f(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)p+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function y(g,p,M){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:_==null?null:""+_,children:g,containerInfo:p,implementation:M}}var A=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,dn.createPortal=function(g,p){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return y(g,p,null,M)},dn.flushSync=function(g){var p=A.T,M=r.p;try{if(A.T=null,r.p=2,g)return g()}finally{A.T=p,r.p=M,r.d.f()}},dn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},dn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},dn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var M=p.as,_=T(M,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;M==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:C,fetchPriority:L}):M==="script"&&r.d.X(g,{crossOrigin:_,integrity:C,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},dn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var M=T(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},dn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var M=p.as,_=T(M,p.crossOrigin);r.d.L(g,M,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},dn.preloadModule=function(g,p){if(typeof g=="string")if(p){var M=T(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},dn.requestFormReset=function(g){r.d.r(g)},dn.unstable_batchedUpdates=function(g,p){return g(p)},dn.useFormState=function(g,p,M){return A.H.useFormState(g,p,M)},dn.useFormStatus=function(){return A.H.useHostTransitionStatus()},dn.version="19.0.0",dn}var If;function Yp(){if(If)return Is.exports;If=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Is.exports=Hp(),Is.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Gp(){if(Qf)return ai;Qf=1;var u=Lp(),f=Ps(),d=Yp();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var y=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),ce=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case T:return"Portal";case M:return"Profiler";case p:return"StrictMode";case J:return"Suspense";case G:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}var D=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=Object.assign,I,le;function $e(e){if(I===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",le=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+le}var Mn=!1;function un(e,n){if(!e||Mn)return"";Mn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(q){var x=q}Reflect.construct(e,[],R)}else{try{R.call()}catch(q){x=q}e.call(R.prototype)}}else{try{throw Error()}catch(q){x=q}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(q){if(q&&x&&typeof q.stack=="string")return[q.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var m=o.split(`
`),w=c.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===w.length)for(a=m.length-1,l=w.length-1;1<=a&&0<=l&&m[a]!==w[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==w[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==w[l]){var z=`
`+m[a].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=a&&0<=l);break}}}finally{Mn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?$e(t):""}function H(e){switch(e.tag){case 26:case 27:case 5:return $e(e.type);case 16:return $e("Lazy");case 13:return $e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return e=un(e.type,!1),e;case 11:return e=un(e.type.render,!1),e;case 1:return e=un(e.type,!0),e;default:return""}}function ie(e){try{var n="";do n+=H(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function te(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function je(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(te(e)!==e)throw Error(r(188))}function O(e){var n=e.alternate;if(!n){if(n=te(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return v(l),e;if(i===a)return v(l),n;i=i.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=i;else{for(var o=!1,c=l.child;c;){if(c===t){o=!0,t=l,a=i;break}if(c===a){o=!0,a=l,t=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===t){o=!0,t=i,a=l;break}if(c===a){o=!0,a=i,t=l;break}c=c.sibling}if(!o)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Q(e),n!==null)return n;e=e.sibling}return null}var Z=Array.isArray,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},P=[],qe=-1;function ge(e){return{current:e}}function Ce(e){0>qe||(e.current=P[qe],P[qe]=null,qe--)}function we(e,n){qe++,P[qe]=e.current,e.current=n}var Ie=ge(null),nt=ge(null),Xn=ge(null),on=ge(null);function Zn(e,n){switch(we(Xn,n),we(nt,e),we(Ie,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?df(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=df(e),n=ff(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ce(Ie),we(Ie,n)}function Et(){Ce(Ie),Ce(nt),Ce(Xn)}function tt(e){e.memoizedState!==null&&we(on,e);var n=Ie.current,t=ff(n,e.type);n!==t&&(we(nt,e),we(Ie,t))}function At(e){nt.current===e&&(Ce(Ie),Ce(nt)),on.current===e&&(Ce(on),$l._currentValue=se)}var xt=Object.prototype.hasOwnProperty,Tt=u.unstable_scheduleCallback,il=u.unstable_cancelCallback,Mu=u.unstable_shouldYield,qu=u.unstable_requestPaint,qn=u.unstable_now,Kt=u.unstable_getCurrentPriorityLevel,ul=u.unstable_ImmediatePriority,ol=u.unstable_UserBlockingPriority,Wt=u.unstable_NormalPriority,zu=u.unstable_LowPriority,fi=u.unstable_IdlePriority,Ou=u.log,Nu=u.unstable_setDisableYieldValue,$t=null,fn=null;function Cu(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot($t,e,void 0,(e.current.flags&128)===128)}catch{}}function B(e){if(typeof Ou=="function"&&Nu(e),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode($t,e)}catch{}}var V=Math.clz32?Math.clz32:Ee,ue=Math.log,pe=Math.LN2;function Ee(e){return e>>>=0,e===0?32:31-(ue(e)/pe|0)|0}var Le=128,Qe=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yn(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,o=e.warmLanes;e=e.finishedLanes!==0;var c=t&134217727;return c!==0?(t=c&~l,t!==0?a=pn(t):(i&=c,i!==0?a=pn(i):e||(o=c&~o,o!==0&&(a=pn(o))))):(c=t&~l,c!==0?a=pn(c):i!==0?a=pn(i):e||(o=t&~o,o!==0&&(a=pn(o)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,o=n&-n,l>=o||l===32&&(o&4194176)!==0)?n:a}function sn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function gn(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ja(){var e=Le;return Le<<=1,(Le&4194176)===0&&(Le=128),e}function Sn(){var e=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),e}function Re(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ke(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,t,a,l,i){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,m=e.expirationTimes,w=e.hiddenUpdates;for(t=o&~t;0<t;){var z=31-V(t),R=1<<z;c[z]=0,m[z]=-1;var x=w[z];if(x!==null)for(w[z]=null,z=0;z<x.length;z++){var q=x[z];q!==null&&(q.lane&=-536870913)}t&=~R}a!==0&&Ft(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~n))}function Ft(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-V(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function sl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-V(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function or(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Of(e.type))}function Ah(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var Mt=Math.random().toString(36).slice(2),rn="__reactFiber$"+Mt,vn="__reactProps$"+Mt,Ea="__reactContainer$"+Mt,ku="__reactEvents$"+Mt,xh="__reactListeners$"+Mt,Th="__reactHandles$"+Mt,sr="__reactResources$"+Mt,rl="__reactMarker$"+Mt;function Du(e){delete e[rn],delete e[vn],delete e[ku],delete e[xh],delete e[Th]}function Pt(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ea]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=pf(e);e!==null;){if(t=e[rn])return t;e=pf(e)}return n}e=t,t=e.parentNode}return null}function Aa(e){if(e=e[rn]||e[Ea]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function cl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function xa(e){var n=e[sr];return n||(n=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Fe(e){e[rl]=!0}var rr=new Set,cr={};function ea(e,n){Ta(e,n),Ta(e+"Capture",n)}function Ta(e,n){for(cr[e]=n,e=0;e<n.length;e++)rr.add(n[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dr={},fr={};function qh(e){return xt.call(fr,e)?!0:xt.call(dr,e)?!1:Mh.test(e)?fr[e]=!0:(dr[e]=!0,!1)}function hi(e,n,t){if(qh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function mi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function lt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zh(e){var n=hr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pi(e){e._valueTracker||(e._valueTracker=zh(e))}function mr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=hr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function On(e){return e.replace(Oh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ru(e,n,t,a,l,i,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zn(n)):e.value!==""+zn(n)&&(e.value=""+zn(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?_u(e,o,zn(n)):t!=null?_u(e,o,zn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+zn(c):e.removeAttribute("name")}function pr(e,n,t,a,l,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;t=t!=null?""+zn(t):"",n=n!=null?""+zn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function _u(e,n,t){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ma(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+zn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function yr(e,n,t){if(n!=null&&(n=""+zn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+zn(t):""}function gr(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(Z(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=zn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function qa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Nh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function br(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&vr(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&vr(e,i,n[i])}function Uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return kh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bu=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Oa=null;function wr(e){var n=Aa(e);if(n&&(e=n.stateNode)){var t=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ru(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+On(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[vn]||null;if(!l)throw Error(r(90));Ru(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&mr(a)}break e;case"textarea":yr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ma(e,!!t.multiple,n,!1)}}}var Hu=!1;function Sr(e,n,t){if(Hu)return e(n,t);Hu=!0;try{var a=e(n);return a}finally{if(Hu=!1,(za!==null||Oa!==null)&&(eu(),za&&(n=za,e=Oa,Oa=za=null,wr(n),e)))for(n=0;n<e.length;n++)wr(e[n])}}function dl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[vn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Yu=!1;if(at)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{Yu=!1}var qt=null,Gu=null,vi=null;function jr(){if(vi)return vi;var e,n=Gu,t=n.length,a,l="value"in qt?qt.value:qt.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===l[i-a];a++);return vi=l.slice(e,1<a?1-a:void 0)}function bi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Er(){return!1}function bn(e){function n(t,a,l,i,o){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wi:Er,this.isPropagationStopped=Er,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=bn(na),hl=W({},na,{view:0,detail:0}),Dh=bn(hl),Iu,Qu,ml,ji=W({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(Iu=e.screenX-ml.screenX,Qu=e.screenY-ml.screenY):Qu=Iu=0,ml=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Ar=bn(ji),Rh=W({},ji,{dataTransfer:0}),_h=bn(Rh),Uh=W({},hl,{relatedTarget:0}),Ju=bn(Uh),Bh=W({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=bn(Bh),Hh=W({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yh=bn(Hh),Gh=W({},na,{data:0}),xr=bn(Gh),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jh[e])?!!n[e]:!1}function Vu(){return Vh}var Xh=W({},hl,{key:function(e){if(e.key){var n=Ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=bn(Xh),Kh=W({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tr=bn(Kh),Wh=W({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),$h=bn(Wh),Fh=W({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ph=bn(Fh),em=W({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=bn(em),tm=W({},na,{newState:0,oldState:0}),am=bn(tm),lm=[9,13,27,32],Xu=at&&"CompositionEvent"in window,pl=null;at&&"documentMode"in document&&(pl=document.documentMode);var im=at&&"TextEvent"in window&&!pl,Mr=at&&(!Xu||pl&&8<pl&&11>=pl),qr=" ",zr=!1;function Or(e,n){switch(e){case"keyup":return lm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function um(e,n){switch(e){case"compositionend":return Nr(n);case"keypress":return n.which!==32?null:(zr=!0,qr);case"textInput":return e=n.data,e===qr&&zr?null:e;default:return null}}function om(e,n){if(Na)return e==="compositionend"||!Xu&&Or(e,n)?(e=jr(),vi=Gu=qt=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mr&&n.locale!=="ko"?null:n.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sm[e.type]:n==="textarea"}function kr(e,n,t,a){za?Oa?Oa.push(a):Oa=[a]:za=a,n=iu(n,"onChange"),0<n.length&&(t=new Si("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var yl=null,gl=null;function rm(e){uf(e,0)}function Ei(e){var n=cl(e);if(mr(n))return e}function Dr(e,n){if(e==="change")return n}var Rr=!1;if(at){var Zu;if(at){var Ku="oninput"in document;if(!Ku){var _r=document.createElement("div");_r.setAttribute("oninput","return;"),Ku=typeof _r.oninput=="function"}Zu=Ku}else Zu=!1;Rr=Zu&&(!document.documentMode||9<document.documentMode)}function Ur(){yl&&(yl.detachEvent("onpropertychange",Br),gl=yl=null)}function Br(e){if(e.propertyName==="value"&&Ei(gl)){var n=[];kr(n,gl,e,Lu(e)),Sr(rm,n)}}function cm(e,n,t){e==="focusin"?(Ur(),yl=n,gl=t,yl.attachEvent("onpropertychange",Br)):e==="focusout"&&Ur()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(gl)}function fm(e,n){if(e==="click")return Ei(n)}function hm(e,n){if(e==="input"||e==="change")return Ei(n)}function mm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:mm;function vl(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!xt.call(n,l)||!jn(e[l],n[l]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,n){var t=Lr(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lr(t)}}function Yr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yi(e.document)}return n}function Wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pm(e,n){var t=Gr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yr(n.ownerDocument.documentElement,n)){if(a!==null&&Wu(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!t.extend&&i>a&&(l=a,a=i,i=l),l=Hr(n,i);var o=Hr(n,a);l&&o&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),i>a?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ym=at&&"documentMode"in document&&11>=document.documentMode,Ca=null,$u=null,bl=null,Fu=!1;function Ir(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fu||Ca==null||Ca!==yi(a)||(a=Ca,"selectionStart"in a&&Wu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bl&&vl(bl,a)||(bl=a,a=iu($u,"onSelect"),0<a.length&&(n=new Si("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Ca)))}function ta(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ka={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},Pu={},Qr={};at&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function aa(e){if(Pu[e])return Pu[e];if(!ka[e])return e;var n=ka[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qr)return Pu[e]=n[t];return e}var Jr=aa("animationend"),Vr=aa("animationiteration"),Xr=aa("animationstart"),gm=aa("transitionrun"),vm=aa("transitionstart"),bm=aa("transitioncancel"),Zr=aa("transitionend"),Kr=new Map,Wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Gn(e,n){Kr.set(e,n),ea(n,[e])}var Nn=[],Da=0,eo=0;function Ai(){for(var e=Da,n=eo=Da=0;n<e;){var t=Nn[n];Nn[n++]=null;var a=Nn[n];Nn[n++]=null;var l=Nn[n];Nn[n++]=null;var i=Nn[n];if(Nn[n++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&$r(t,l,i)}}function xi(e,n,t,a){Nn[Da++]=e,Nn[Da++]=n,Nn[Da++]=t,Nn[Da++]=a,eo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function no(e,n,t,a){return xi(e,n,t,a),Ti(e)}function zt(e,n){return xi(e,null,null,n),Ti(e)}function $r(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;l&&n!==null&&e.tag===3&&(i=e.stateNode,l=31-V(t),i=i.hiddenUpdates,e=i[l],e===null?i[l]=[n]:e.push(n),n.lane=t|536870912)}function Ti(e){if(50<Ql)throw Ql=0,ss=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ra={},Fr=new WeakMap;function Cn(e,n){if(typeof e=="object"&&e!==null){var t=Fr.get(e);return t!==void 0?t:(n={value:e,source:n,stack:ie(n)},Fr.set(e,n),n)}return{value:e,source:n,stack:ie(n)}}var _a=[],Ua=0,Mi=null,qi=0,kn=[],Dn=0,la=null,it=1,ut="";function ia(e,n){_a[Ua++]=qi,_a[Ua++]=Mi,Mi=e,qi=n}function Pr(e,n,t){kn[Dn++]=it,kn[Dn++]=ut,kn[Dn++]=la,la=e;var a=it;e=ut;var l=32-V(a)-1;a&=~(1<<l),t+=1;var i=32-V(n)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,it=1<<32-V(n)+l|t<<l|a,ut=i+e}else it=1<<i|t<<l|a,ut=e}function to(e){e.return!==null&&(ia(e,1),Pr(e,1,0))}function ao(e){for(;e===Mi;)Mi=_a[--Ua],_a[Ua]=null,qi=_a[--Ua],_a[Ua]=null;for(;e===la;)la=kn[--Dn],kn[Dn]=null,ut=kn[--Dn],kn[Dn]=null,it=kn[--Dn],kn[Dn]=null}var hn=null,tn=null,ve=!1,In=null,Kn=!1,lo=Error(r(519));function ua(e){var n=Error(r(418,""));throw jl(Cn(n,e)),lo}function ec(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[rn]=e,n[vn]=a,t){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(t=0;t<Vl.length;t++)me(Vl[t],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),pr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),pi(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),gr(n,a.value,a.defaultValue,a.children),pi(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||cf(n.textContent,t)?(a.popover!=null&&(me("beforetoggle",n),me("toggle",n)),a.onScroll!=null&&me("scroll",n),a.onScrollEnd!=null&&me("scrollend",n),a.onClick!=null&&(n.onclick=uu),n=!0):n=!1,n||ua(e)}function nc(e){for(hn=e.return;hn;)switch(hn.tag){case 3:case 27:Kn=!0;return;case 5:case 13:Kn=!1;return;default:hn=hn.return}}function wl(e){if(e!==hn)return!1;if(!ve)return nc(e),ve=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||xs(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&tn&&ua(e),nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){tn=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}tn=null}}else tn=hn?Jn(e.stateNode.nextSibling):null;return!0}function Sl(){tn=hn=null,ve=!1}function jl(e){In===null?In=[e]:In.push(e)}var El=Error(r(460)),tc=Error(r(474)),io={then:function(){}};function ac(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function lc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(zi,zi),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e;default:if(typeof n.status=="string")n.then(zi,zi);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===El?Error(r(483)):e}throw Al=n,El}}var Al=null;function ic(){if(Al===null)throw Error(r(459));var e=Al;return Al=null,e}var Ba=null,xl=0;function Oi(e){var n=xl;return xl+=1,Ba===null&&(Ba=[]),lc(Ba,e,n)}function Tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ni(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function uc(e){var n=e._init;return n(e._payload)}function oc(e){function n(S,b){if(e){var E=S.deletions;E===null?(S.deletions=[b],S.flags|=16):E.push(b)}}function t(S,b){if(!e)return null;for(;b!==null;)n(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function l(S,b){return S=Yt(S,b),S.index=0,S.sibling=null,S}function i(S,b,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<b?(S.flags|=33554434,b):E):(S.flags|=33554434,b)):(S.flags|=1048576,b)}function o(S){return e&&S.alternate===null&&(S.flags|=33554434),S}function c(S,b,E,N){return b===null||b.tag!==6?(b=es(E,S.mode,N),b.return=S,b):(b=l(b,E),b.return=S,b)}function m(S,b,E,N){var $=E.type;return $===g?z(S,b,E.props.children,N,E.key):b!==null&&(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===K&&uc($)===b.type)?(b=l(b,E.props),Tl(b,E),b.return=S,b):(b=Ki(E.type,E.key,E.props,null,S.mode,N),Tl(b,E),b.return=S,b)}function w(S,b,E,N){return b===null||b.tag!==4||b.stateNode.containerInfo!==E.containerInfo||b.stateNode.implementation!==E.implementation?(b=ns(E,S.mode,N),b.return=S,b):(b=l(b,E.children||[]),b.return=S,b)}function z(S,b,E,N,$){return b===null||b.tag!==7?(b=ya(E,S.mode,N,$),b.return=S,b):(b=l(b,E),b.return=S,b)}function R(S,b,E){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=es(""+b,S.mode,E),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case A:return E=Ki(b.type,b.key,b.props,null,S.mode,E),Tl(E,b),E.return=S,E;case T:return b=ns(b,S.mode,E),b.return=S,b;case K:var N=b._init;return b=N(b._payload),R(S,b,E)}if(Z(b)||Se(b))return b=ya(b,S.mode,E,null),b.return=S,b;if(typeof b.then=="function")return R(S,Oi(b),E);if(b.$$typeof===L)return R(S,Vi(S,b),E);Ni(S,b)}return null}function x(S,b,E,N){var $=b!==null?b.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return $!==null?null:c(S,b,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return E.key===$?m(S,b,E,N):null;case T:return E.key===$?w(S,b,E,N):null;case K:return $=E._init,E=$(E._payload),x(S,b,E,N)}if(Z(E)||Se(E))return $!==null?null:z(S,b,E,N,null);if(typeof E.then=="function")return x(S,b,Oi(E),N);if(E.$$typeof===L)return x(S,b,Vi(S,E),N);Ni(S,E)}return null}function q(S,b,E,N,$){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return S=S.get(E)||null,c(b,S,""+N,$);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return S=S.get(N.key===null?E:N.key)||null,m(b,S,N,$);case T:return S=S.get(N.key===null?E:N.key)||null,w(b,S,N,$);case K:var fe=N._init;return N=fe(N._payload),q(S,b,E,N,$)}if(Z(N)||Se(N))return S=S.get(E)||null,z(b,S,N,$,null);if(typeof N.then=="function")return q(S,b,E,Oi(N),$);if(N.$$typeof===L)return q(S,b,E,Vi(b,N),$);Ni(b,N)}return null}function F(S,b,E,N){for(var $=null,fe=null,ne=b,ae=b=0,nn=null;ne!==null&&ae<E.length;ae++){ne.index>ae?(nn=ne,ne=null):nn=ne.sibling;var be=x(S,ne,E[ae],N);if(be===null){ne===null&&(ne=nn);break}e&&ne&&be.alternate===null&&n(S,ne),b=i(be,b,ae),fe===null?$=be:fe.sibling=be,fe=be,ne=nn}if(ae===E.length)return t(S,ne),ve&&ia(S,ae),$;if(ne===null){for(;ae<E.length;ae++)ne=R(S,E[ae],N),ne!==null&&(b=i(ne,b,ae),fe===null?$=ne:fe.sibling=ne,fe=ne);return ve&&ia(S,ae),$}for(ne=a(ne);ae<E.length;ae++)nn=q(ne,S,ae,E[ae],N),nn!==null&&(e&&nn.alternate!==null&&ne.delete(nn.key===null?ae:nn.key),b=i(nn,b,ae),fe===null?$=nn:fe.sibling=nn,fe=nn);return e&&ne.forEach(function(Zt){return n(S,Zt)}),ve&&ia(S,ae),$}function oe(S,b,E,N){if(E==null)throw Error(r(151));for(var $=null,fe=null,ne=b,ae=b=0,nn=null,be=E.next();ne!==null&&!be.done;ae++,be=E.next()){ne.index>ae?(nn=ne,ne=null):nn=ne.sibling;var Zt=x(S,ne,be.value,N);if(Zt===null){ne===null&&(ne=nn);break}e&&ne&&Zt.alternate===null&&n(S,ne),b=i(Zt,b,ae),fe===null?$=Zt:fe.sibling=Zt,fe=Zt,ne=nn}if(be.done)return t(S,ne),ve&&ia(S,ae),$;if(ne===null){for(;!be.done;ae++,be=E.next())be=R(S,be.value,N),be!==null&&(b=i(be,b,ae),fe===null?$=be:fe.sibling=be,fe=be);return ve&&ia(S,ae),$}for(ne=a(ne);!be.done;ae++,be=E.next())be=q(ne,S,ae,be.value,N),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?ae:be.key),b=i(be,b,ae),fe===null?$=be:fe.sibling=be,fe=be);return e&&ne.forEach(function(kp){return n(S,kp)}),ve&&ia(S,ae),$}function Ge(S,b,E,N){if(typeof E=="object"&&E!==null&&E.type===g&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case A:e:{for(var $=E.key;b!==null;){if(b.key===$){if($=E.type,$===g){if(b.tag===7){t(S,b.sibling),N=l(b,E.props.children),N.return=S,S=N;break e}}else if(b.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===K&&uc($)===b.type){t(S,b.sibling),N=l(b,E.props),Tl(N,E),N.return=S,S=N;break e}t(S,b);break}else n(S,b);b=b.sibling}E.type===g?(N=ya(E.props.children,S.mode,N,E.key),N.return=S,S=N):(N=Ki(E.type,E.key,E.props,null,S.mode,N),Tl(N,E),N.return=S,S=N)}return o(S);case T:e:{for($=E.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===E.containerInfo&&b.stateNode.implementation===E.implementation){t(S,b.sibling),N=l(b,E.children||[]),N.return=S,S=N;break e}else{t(S,b);break}else n(S,b);b=b.sibling}N=ns(E,S.mode,N),N.return=S,S=N}return o(S);case K:return $=E._init,E=$(E._payload),Ge(S,b,E,N)}if(Z(E))return F(S,b,E,N);if(Se(E)){if($=Se(E),typeof $!="function")throw Error(r(150));return E=$.call(E),oe(S,b,E,N)}if(typeof E.then=="function")return Ge(S,b,Oi(E),N);if(E.$$typeof===L)return Ge(S,b,Vi(S,E),N);Ni(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,b!==null&&b.tag===6?(t(S,b.sibling),N=l(b,E),N.return=S,S=N):(t(S,b),N=es(E,S.mode,N),N.return=S,S=N),o(S)):t(S,b)}return function(S,b,E,N){try{xl=0;var $=Ge(S,b,E,N);return Ba=null,$}catch(ne){if(ne===El)throw ne;var fe=Bn(29,ne,null,S.mode);return fe.lanes=N,fe.return=S,fe}finally{}}}var oa=oc(!0),sc=oc(!1),La=ge(null),Ci=ge(0);function rc(e,n){e=gt,we(Ci,e),we(La,n),gt=e|n.baseLanes}function uo(){we(Ci,gt),we(La,La.current)}function oo(){gt=Ci.current,Ce(La),Ce(Ci)}var Rn=ge(null),Wn=null;function Ot(e){var n=e.alternate;we(Ke,Ke.current&1),we(Rn,e),Wn===null&&(n===null||La.current!==null||n.memoizedState!==null)&&(Wn=e)}function cc(e){if(e.tag===22){if(we(Ke,Ke.current),we(Rn,e),Wn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Wn=e)}}else Nt()}function Nt(){we(Ke,Ke.current),we(Rn,Rn.current)}function ot(e){Ce(Rn),Wn===e&&(Wn=null),Ce(Ke)}var Ke=ge(0);function ki(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Sm=u.unstable_scheduleCallback,jm=u.unstable_NormalPriority,We={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new wm,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Sm(jm,function(){e.controller.abort()})}var ql=null,ro=0,Ha=0,Ya=null;function Em(e,n){if(ql===null){var t=ql=[];ro=0,Ha=ys(),Ya={status:"pending",value:void 0,then:function(a){t.push(a)}}}return ro++,n.then(dc,dc),n}function dc(){if(--ro===0&&ql!==null){Ya!==null&&(Ya.status="fulfilled");var e=ql;ql=null,Ha=0,Ya=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Am(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var fc=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Em(e,n),fc!==null&&fc(e,n)};var sa=ge(null);function co(){var e=sa.current;return e!==null?e:Oe.pooledCache}function Di(e,n){n===null?we(sa,sa.current):we(sa,n.pool)}function hc(){var e=co();return e===null?null:{parent:We._currentValue,pool:e}}var Ct=0,de=null,Te=null,Ve=null,Ri=!1,Ga=!1,ra=!1,_i=0,zl=0,Ia=null,xm=0;function Je(){throw Error(r(321))}function fo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jn(e[t],n[t]))return!1;return!0}function ho(e,n,t,a,l,i){return Ct=i,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?ca:kt,ra=!1,i=t(a,l),ra=!1,Ga&&(i=pc(n,t,a,l)),mc(e),i}function mc(e){D.H=$n;var n=Te!==null&&Te.next!==null;if(Ct=0,Ve=Te=de=null,Ri=!1,zl=0,Ia=null,n)throw Error(r(300));e===null||Pe||(e=e.dependencies,e!==null&&Ji(e)&&(Pe=!0))}function pc(e,n,t,a){de=e;var l=0;do{if(Ga&&(Ia=null),zl=0,Ga=!1,25<=l)throw Error(r(301));if(l+=1,Ve=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=da,i=n(t,a)}while(Ga);return i}function Tm(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ol(n):n,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(de.flags|=1024),n}function mo(){var e=_i!==0;return _i=0,e}function po(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function yo(e){if(Ri){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ri=!1}Ct=0,Ve=Te=de=null,Ga=!1,zl=_i=0,Ia=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?de.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Xe(){if(Te===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var n=Ve===null?de.memoizedState:Ve.next;if(n!==null)Ve=n,Te=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ve===null?de.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}var Ui;Ui=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ol(e){var n=zl;return zl+=1,Ia===null&&(Ia=[]),e=lc(Ia,e,n),n=de,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?ca:kt),e}function Bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===L)return cn(e)}throw Error(r(438,String(e)))}function go(e){var n=null,t=de.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ui(),de.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ce;return n.index++,t}function st(e,n){return typeof n=="function"?n(e):n}function Li(e){var n=Xe();return vo(n,Te,e)}function vo(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var c=o=null,m=null,w=n,z=!1;do{var R=w.lane&-536870913;if(R!==w.lane?(ye&R)===R:(Ct&R)===R){var x=w.revertLane;if(x===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),R===Ha&&(z=!0);else if((Ct&x)===x){w=w.next,x===Ha&&(z=!0);continue}else R={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(c=m=R,o=i):m=m.next=R,de.lanes|=x,Gt|=x;R=w.action,ra&&t(i,R),i=w.hasEagerState?w.eagerState:t(i,R)}else x={lane:R,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},m===null?(c=m=x,o=i):m=m.next=x,de.lanes|=R,Gt|=R;w=w.next}while(w!==null&&w!==n);if(m===null?o=i:m.next=c,!jn(i,e.memoizedState)&&(Pe=!0,z&&(t=Ya,t!==null)))throw t;e.memoizedState=i,e.baseState=o,e.baseQueue=m,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function bo(e){var n=Xe(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);jn(i,n.memoizedState)||(Pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function yc(e,n,t){var a=de,l=Xe(),i=ve;if(i){if(t===void 0)throw Error(r(407));t=t()}else t=n();var o=!jn((Te||l).memoizedState,t);if(o&&(l.memoizedState=t,Pe=!0),l=l.queue,jo(bc.bind(null,a,l,e),[e]),l.getSnapshot!==n||o||Ve!==null&&Ve.memoizedState.tag&1){if(a.flags|=2048,Qa(9,vc.bind(null,a,l,t,n),{destroy:void 0},null),Oe===null)throw Error(r(349));i||(Ct&60)!==0||gc(a,n,t)}return t}function gc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n=Ui(),de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vc(e,n,t,a){n.value=t,n.getSnapshot=a,wc(n)&&Sc(e)}function bc(e,n,t){return t(function(){wc(n)&&Sc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jn(e,t)}catch{return!0}}function Sc(e){var n=zt(e,2);n!==null&&mn(n,e,2)}function wo(e){var n=wn();if(typeof e=="function"){var t=e;if(e=t(),ra){B(!0);try{t()}finally{B(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:e},n}function jc(e,n,t,a){return e.baseState=t,vo(e,Te,typeof a=="function"?a:st)}function Mm(e,n,t,a,l){if(Gi(e))throw Error(r(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};D.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Ec(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Ec(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=D.T,o={};D.T=o;try{var c=t(l,a),m=D.S;m!==null&&m(o,c),Ac(e,n,c)}catch(w){So(e,n,w)}finally{D.T=i}}else try{i=t(l,a),Ac(e,n,i)}catch(w){So(e,n,w)}}function Ac(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){xc(e,n,a)},function(a){return So(e,n,a)}):xc(e,n,t)}function xc(e,n,t){n.status="fulfilled",n.value=t,Tc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ec(e,t)))}function So(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Tc(n),n=n.next;while(n!==a)}e.action=null}function Tc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Mc(e,n){return n}function qc(e,n){if(ve){var t=Oe.formState;if(t!==null){e:{var a=de;if(ve){if(tn){n:{for(var l=tn,i=Kn;l.nodeType!==8;){if(!i){l=null;break n}if(l=Jn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){tn=Jn(l.nextSibling),a=l.data==="F!";break e}}ua(a)}a=!1}a&&(n=t[0])}}return t=wn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mc,lastRenderedState:n},t.queue=a,t=Vc.bind(null,de,a),a.dispatch=t,a=wo(!1),i=Mo.bind(null,de,!1,a.queue),a=wn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Mm.bind(null,de,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function zc(e){var n=Xe();return Oc(n,Te,e)}function Oc(e,n,t){n=vo(e,n,Mc)[0],e=Li(st)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ol(n):n;var a=Xe(),l=a.queue,i=l.dispatch;return t!==a.memoizedState&&(de.flags|=2048,Qa(9,qm.bind(null,l,t),{destroy:void 0},null)),[n,i,e]}function qm(e,n){e.action=n}function Nc(e){var n=Xe(),t=Te;if(t!==null)return Oc(n,t,e);Xe(),n=n.memoizedState,t=Xe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Qa(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=de.updateQueue,n===null&&(n=Ui(),de.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Cc(){return Xe().memoizedState}function Hi(e,n,t,a){var l=wn();de.flags|=e,l.memoizedState=Qa(1|n,t,{destroy:void 0},a===void 0?null:a)}function Yi(e,n,t,a){var l=Xe();a=a===void 0?null:a;var i=l.memoizedState.inst;Te!==null&&a!==null&&fo(a,Te.memoizedState.deps)?l.memoizedState=Qa(n,t,i,a):(de.flags|=e,l.memoizedState=Qa(1|n,t,i,a))}function kc(e,n){Hi(8390656,8,e,n)}function jo(e,n){Yi(2048,8,e,n)}function Dc(e,n){return Yi(4,2,e,n)}function Rc(e,n){return Yi(4,4,e,n)}function _c(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Uc(e,n,t){t=t!=null?t.concat([e]):null,Yi(4,4,_c.bind(null,n,e),t)}function Eo(){}function Bc(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&fo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Lc(e,n){var t=Xe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&fo(n,a[1]))return a[0];if(a=e(),ra){B(!0);try{e()}finally{B(!1)}}return t.memoizedState=[a,n],a}function Ao(e,n,t){return t===void 0||(Ct&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Yd(),de.lanes|=e,Gt|=e,t)}function Hc(e,n,t,a){return jn(t,n)?t:La.current!==null?(e=Ao(e,t,a),jn(e,n)||(Pe=!0),e):(Ct&42)===0?(Pe=!0,e.memoizedState=t):(e=Yd(),de.lanes|=e,Gt|=e,n)}function Yc(e,n,t,a,l){var i=Y.p;Y.p=i!==0&&8>i?i:8;var o=D.T,c={};D.T=c,Mo(e,!1,n,t);try{var m=l(),w=D.S;if(w!==null&&w(c,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var z=Am(m,a);Nl(e,n,z,Tn(e))}else Nl(e,n,a,Tn(e))}catch(R){Nl(e,n,{then:function(){},status:"rejected",reason:R},Tn())}finally{Y.p=i,D.T=o}}function zm(){}function xo(e,n,t,a){if(e.tag!==5)throw Error(r(476));var l=Gc(e).queue;Yc(e,l,n,se,t===null?zm:function(){return Ic(e),t(a)})}function Gc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:se},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ic(e){var n=Gc(e).next.queue;Nl(e,n,{},Tn())}function To(){return cn($l)}function Qc(){return Xe().memoizedState}function Jc(){return Xe().memoizedState}function Om(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Tn();e=_t(t);var a=Ut(n,e,t);a!==null&&(mn(a,n,t),Dl(a,n,t)),n={cache:so()},e.payload=n;return}n=n.return}}function Nm(e,n,t){var a=Tn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Xc(n,t):(t=no(e,n,t,a),t!==null&&(mn(t,e,a),Zc(t,n,a)))}function Vc(e,n,t){var a=Tn();Nl(e,n,t,a)}function Nl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Xc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,c=i(o,t);if(l.hasEagerState=!0,l.eagerState=c,jn(c,o))return xi(e,n,l,0),Oe===null&&Ai(),!1}catch{}finally{}if(t=no(e,n,l,a),t!==null)return mn(t,e,a),Zc(t,n,a),!0}return!1}function Mo(e,n,t,a){if(a={lane:2,revertLane:ys(),action:a,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(n)throw Error(r(479))}else n=no(e,t,a,2),n!==null&&mn(n,e,2)}function Gi(e){var n=e.alternate;return e===de||n!==null&&n===de}function Xc(e,n){Ga=Ri=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zc(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}var $n={readContext:cn,use:Bi,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};$n.useCacheRefresh=Je,$n.useMemoCache=Je,$n.useHostTransitionStatus=Je,$n.useFormState=Je,$n.useActionState=Je,$n.useOptimistic=Je;var ca={readContext:cn,use:Bi,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:kc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Hi(4194308,4,_c.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Hi(4194308,4,e,n)},useInsertionEffect:function(e,n){Hi(4,2,e,n)},useMemo:function(e,n){var t=wn();n=n===void 0?null:n;var a=e();if(ra){B(!0);try{e()}finally{B(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=wn();if(t!==void 0){var l=t(n);if(ra){B(!0);try{t(n)}finally{B(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Nm.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=wo(e);var n=e.queue,t=Vc.bind(null,de,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Eo,useDeferredValue:function(e,n){var t=wn();return Ao(t,e,n)},useTransition:function(){var e=wo(!1);return e=Yc.bind(null,de,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=de,l=wn();if(ve){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),Oe===null)throw Error(r(349));(ye&60)!==0||gc(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,kc(bc.bind(null,a,i,e),[e]),a.flags|=2048,Qa(9,vc.bind(null,a,i,t,n),{destroy:void 0},null),t},useId:function(){var e=wn(),n=Oe.identifierPrefix;if(ve){var t=ut,a=it;t=(a&~(1<<32-V(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=_i++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return wn().memoizedState=Om.bind(null,de)}};ca.useMemoCache=go,ca.useHostTransitionStatus=To,ca.useFormState=qc,ca.useActionState=qc,ca.useOptimistic=function(e){var n=wn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Mo.bind(null,de,!0,t),t.dispatch=n,[e,n]};var kt={readContext:cn,use:Bi,useCallback:Bc,useContext:cn,useEffect:jo,useImperativeHandle:Uc,useInsertionEffect:Dc,useLayoutEffect:Rc,useMemo:Lc,useReducer:Li,useRef:Cc,useState:function(){return Li(st)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Xe();return Hc(t,Te.memoizedState,e,n)},useTransition:function(){var e=Li(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:yc,useId:Qc};kt.useCacheRefresh=Jc,kt.useMemoCache=go,kt.useHostTransitionStatus=To,kt.useFormState=zc,kt.useActionState=zc,kt.useOptimistic=function(e,n){var t=Xe();return jc(t,Te,e,n)};var da={readContext:cn,use:Bi,useCallback:Bc,useContext:cn,useEffect:jo,useImperativeHandle:Uc,useInsertionEffect:Dc,useLayoutEffect:Rc,useMemo:Lc,useReducer:bo,useRef:Cc,useState:function(){return bo(st)},useDebugValue:Eo,useDeferredValue:function(e,n){var t=Xe();return Te===null?Ao(t,e,n):Hc(t,Te.memoizedState,e,n)},useTransition:function(){var e=bo(st)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:Ol(e),n]},useSyncExternalStore:yc,useId:Qc};da.useCacheRefresh=Jc,da.useMemoCache=go,da.useHostTransitionStatus=To,da.useFormState=Nc,da.useActionState=Nc,da.useOptimistic=function(e,n){var t=Xe();return Te!==null?jc(t,Te,e,n):(t.baseState=e,[e,t.queue.dispatch])};function qo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zo={isMounted:function(e){return(e=e._reactInternals)?te(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Tn(),l=_t(a);l.payload=n,t!=null&&(l.callback=t),n=Ut(e,l,a),n!==null&&(mn(n,e,a),Dl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Tn(),l=_t(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Ut(e,l,a),n!==null&&(mn(n,e,a),Dl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Tn(),a=_t(t);a.tag=2,n!=null&&(a.callback=n),n=Ut(e,a,t),n!==null&&(mn(n,e,t),Dl(n,e,t))}};function Kc(e,n,t,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):n.prototype&&n.prototype.isPureReactComponent?!vl(t,a)||!vl(l,i):!0}function Wc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&zo.enqueueReplaceState(n,n.state,null)}function fa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=W({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Ii=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $c(e){Ii(e)}function Fc(e){console.error(e)}function Pc(e){Ii(e)}function Qi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function ed(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oo(e,n,t){return t=_t(t),t.tag=3,t.payload={element:null},t.callback=function(){Qi(e,n)},t}function nd(e){return e=_t(e),e.tag=3,e}function td(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){ed(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ed(n,t,a),typeof l!="function"&&(It===null?It=new Set([this]):It.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Cm(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&kl(n,t,l,!0),t=Rn.current,t!==null){switch(t.tag){case 13:return Wn===null?ds():t.alternate===null&&Ye===0&&(Ye=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===io?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),hs(e,a,l)),!1;case 22:return t.flags|=65536,a===io?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),hs(e,a,l)),!1}throw Error(r(435,t.tag))}return hs(e,a,l),ds(),!1}if(ve)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==lo&&(e=Error(r(422),{cause:a}),jl(Cn(e,t)))):(a!==lo&&(n=Error(r(423),{cause:a}),jl(Cn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Cn(a,t),l=Oo(e.stateNode,a,l),Jo(e,l),Ye!==4&&(Ye=2)),!1;var i=Error(r(520),{cause:a});if(i=Cn(i,t),Gl===null?Gl=[i]:Gl.push(i),Ye!==4&&(Ye=2),n===null)return!0;a=Cn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Oo(t.stateNode,a,e),Jo(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(It===null||!It.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=nd(l),td(l,e,t,a),Jo(t,l),!1}t=t.return}while(t!==null);return!1}var ad=Error(r(461)),Pe=!1;function an(e,n,t,a){n.child=e===null?sc(n,null,t,a):oa(n,e.child,t,a)}function ld(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return ma(n),a=ho(e,n,t,o,i,l),c=mo(),e!==null&&!Pe?(po(e,n,l),rt(e,n,l)):(ve&&c&&to(n),n.flags|=1,an(e,n,a,l),n.child)}function id(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,ud(e,n,i,a,l)):(e=Ki(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!Lo(e,l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:vl,t(o,a)&&e.ref===n.ref)return rt(e,n,l)}return n.flags|=1,e=Yt(i,a),e.ref=n.ref,e.return=n,n.child=e}function ud(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(vl(i,a)&&e.ref===n.ref)if(Pe=!1,n.pendingProps=a=i,Lo(e,l))(e.flags&131072)!==0&&(Pe=!0);else return n.lanes=e.lanes,rt(e,n,l)}return No(e,n,t,a,l)}function od(e,n,t){var a=n.pendingProps,l=a.children,i=(n.stateNode._pendingVisibility&2)!==0,o=e!==null?e.memoizedState:null;if(Cl(e,n),a.mode==="hidden"||i){if((n.flags&128)!==0){if(a=o!==null?o.baseLanes|t:t,e!==null){for(l=n.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;n.childLanes=i&~a}else n.childLanes=0,n.child=null;return sd(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(n,o!==null?o.cachePool:null),o!==null?rc(n,o):uo(),cc(n);else return n.lanes=n.childLanes=536870912,sd(e,n,o!==null?o.baseLanes|t:t,t)}else o!==null?(Di(n,o.cachePool),rc(n,o),Nt(),n.memoizedState=null):(e!==null&&Di(n,null),uo(),Nt());return an(e,n,l,t),n.child}function sd(e,n,t,a){var l=co();return l=l===null?null:{parent:We._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Di(n,null),uo(),cc(n),e!==null&&kl(e,n,a,!0),null}function Cl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function No(e,n,t,a,l){return ma(n),t=ho(e,n,t,a,void 0,l),a=mo(),e!==null&&!Pe?(po(e,n,l),rt(e,n,l)):(ve&&a&&to(n),n.flags|=1,an(e,n,t,l),n.child)}function rd(e,n,t,a,l,i){return ma(n),n.updateQueue=null,t=pc(n,a,t,l),mc(e),a=mo(),e!==null&&!Pe?(po(e,n,i),rt(e,n,i)):(ve&&a&&to(n),n.flags|=1,an(e,n,t,i),n.child)}function cd(e,n,t,a,l){if(ma(n),n.stateNode===null){var i=Ra,o=t.contextType;typeof o=="object"&&o!==null&&(i=cn(o)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zo,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Io(n),o=t.contextType,i.context=typeof o=="object"&&o!==null?cn(o):Ra,i.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(qo(n,t,o,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&zo.enqueueReplaceState(i,i.state,null),_l(n,a,i,l),Rl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var c=n.memoizedProps,m=fa(t,c);i.props=m;var w=i.context,z=t.contextType;o=Ra,typeof z=="object"&&z!==null&&(o=cn(z));var R=t.getDerivedStateFromProps;z=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||w!==o)&&Wc(n,i,a,o),Rt=!1;var x=n.memoizedState;i.state=x,_l(n,a,i,l),Rl(),w=n.memoizedState,c||x!==w||Rt?(typeof R=="function"&&(qo(n,t,R,a),w=n.memoizedState),(m=Rt||Kc(n,t,m,a,x,w,o))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=w),i.props=a,i.state=w,i.context=o,a=m):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Qo(e,n),o=n.memoizedProps,z=fa(t,o),i.props=z,R=n.pendingProps,x=i.context,w=t.contextType,m=Ra,typeof w=="object"&&w!==null&&(m=cn(w)),c=t.getDerivedStateFromProps,(w=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==R||x!==m)&&Wc(n,i,a,m),Rt=!1,x=n.memoizedState,i.state=x,_l(n,a,i,l),Rl();var q=n.memoizedState;o!==R||x!==q||Rt||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof c=="function"&&(qo(n,t,c,a),q=n.memoizedState),(z=Rt||Kc(n,t,z,a,x,q,m)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,q,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,q,m)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=q),i.props=a,i.state=q,i.context=m,a=z):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,Cl(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=oa(n,e.child,null,l),n.child=oa(n,null,t,l)):an(e,n,t,l),n.memoizedState=i.state,e=n.child):e=rt(e,n,l),e}function dd(e,n,t,a){return Sl(),n.flags|=256,an(e,n,t,a),n.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function ko(e){return{baseLanes:e,cachePool:hc()}}function Do(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Ln),e}function fd(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),o&&(l=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(ve){if(l?Ot(n):Nt(),ve){var c=tn,m;if(m=c){e:{for(m=c,c=Kn;m.nodeType!==8;){if(!c){c=null;break e}if(m=Jn(m.nextSibling),m===null){c=null;break e}}c=m}c!==null?(n.memoizedState={dehydrated:c,treeContext:la!==null?{id:it,overflow:ut}:null,retryLane:536870912},m=Bn(18,null,null,0),m.stateNode=c,m.return=n,n.child=m,hn=n,tn=null,m=!0):m=!1}m||ua(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?n.lanes=16:n.lanes=536870912,null;ot(n)}return c=a.children,a=a.fallback,l?(Nt(),l=n.mode,c=_o({mode:"hidden",children:c},l),a=ya(a,l,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,l=n.child,l.memoizedState=ko(t),l.childLanes=Do(e,o,t),n.memoizedState=Co,a):(Ot(n),Ro(n,c))}if(m=e.memoizedState,m!==null&&(c=m.dehydrated,c!==null)){if(i)n.flags&256?(Ot(n),n.flags&=-257,n=Uo(e,n,t)):n.memoizedState!==null?(Nt(),n.child=e.child,n.flags|=128,n=null):(Nt(),l=a.fallback,c=n.mode,a=_o({mode:"visible",children:a.children},c),l=ya(l,c,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,oa(n,e.child,null,t),a=n.child,a.memoizedState=ko(t),a.childLanes=Do(e,o,t),n.memoizedState=Co,n=l);else if(Ot(n),c.data==="$!"){if(o=c.nextSibling&&c.nextSibling.dataset,o)var w=o.dgst;o=w,a=Error(r(419)),a.stack="",a.digest=o,jl({value:a,source:null,stack:null}),n=Uo(e,n,t)}else if(Pe||kl(e,n,t,!1),o=(t&e.childLanes)!==0,Pe||o){if(o=Oe,o!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(o.suspendedLanes|t))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,zt(e,a),mn(o,e,a),ad}c.data==="$?"||ds(),n=Uo(e,n,t)}else c.data==="$?"?(n.flags|=128,n.child=e.child,n=Xm.bind(null,e),c._reactRetry=n,n=null):(e=m.treeContext,tn=Jn(c.nextSibling),hn=n,ve=!0,In=null,Kn=!1,e!==null&&(kn[Dn++]=it,kn[Dn++]=ut,kn[Dn++]=la,it=e.id,ut=e.overflow,la=n),n=Ro(n,a.children),n.flags|=4096);return n}return l?(Nt(),l=a.fallback,c=n.mode,m=e.child,w=m.sibling,a=Yt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,w!==null?l=Yt(w,l):(l=ya(l,c,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,c=e.child.memoizedState,c===null?c=ko(t):(m=c.cachePool,m!==null?(w=We._currentValue,m=m.parent!==w?{parent:w,pool:w}:m):m=hc(),c={baseLanes:c.baseLanes|t,cachePool:m}),l.memoizedState=c,l.childLanes=Do(e,o,t),n.memoizedState=Co,a):(Ot(n),t=e.child,e=t.sibling,t=Yt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function Ro(e,n){return n=_o({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _o(e,n){return Bd(e,n,0,null)}function Uo(e,n,t){return oa(n,e.child,null,t),e=Ro(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Yo(e.return,n,t)}function Bo(e,n,t,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=l)}function md(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;if(an(e,n,a.children,t),a=Ke.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,t,n);else if(e.tag===19)hd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(we(Ke,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ki(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Bo(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ki(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Bo(n,!0,t,null,i);break;case"together":Bo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(kl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Yt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Yt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lo(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function km(e,n,t){switch(n.tag){case 3:Zn(n,n.stateNode.containerInfo),Dt(n,We,e.memoizedState.cache),Sl();break;case 27:case 5:tt(n);break;case 4:Zn(n,n.stateNode.containerInfo);break;case 10:Dt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Ot(n),n.flags|=128,null):(t&n.child.childLanes)!==0?fd(e,n,t):(Ot(n),e=rt(e,n,t),e!==null?e.sibling:null);Ot(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(kl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return md(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(Ke,Ke.current),a)break;return null;case 22:case 23:return n.lanes=0,od(e,n,t);case 24:Dt(n,We,e.memoizedState.cache)}return rt(e,n,t)}function pd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Pe=!0;else{if(!Lo(e,t)&&(n.flags&128)===0)return Pe=!1,km(e,n,t);Pe=(e.flags&131072)!==0}else Pe=!1,ve&&(n.flags&1048576)!==0&&Pr(n,qi,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")Po(a)?(e=fa(a,e),n.tag=1,n=cd(null,n,a,e,t)):(n.tag=0,n=No(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===k){n.tag=11,n=ld(null,n,a,e,t);break e}else if(l===U){n.tag=14,n=id(null,n,a,e,t);break e}}throw n=xe(a)||a,Error(r(306,n,""))}}return n;case 0:return No(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=fa(a,n.pendingProps),cd(e,n,a,l,t);case 3:e:{if(Zn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var i=n.pendingProps;l=n.memoizedState,a=l.element,Qo(e,n),_l(n,i,null,t);var o=n.memoizedState;if(i=o.cache,Dt(n,We,i),i!==l.cache&&Go(n,[We],t,!0),Rl(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=dd(e,n,i,t);break e}else if(i!==a){a=Cn(Error(r(424)),n),jl(a),n=dd(e,n,i,t);break e}else for(tn=Jn(n.stateNode.containerInfo.firstChild),hn=n,ve=!0,In=null,Kn=!0,t=sc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Sl(),i===a){n=rt(e,n,t);break e}an(e,n,i,t)}n=n.child}return n;case 26:return Cl(e,n),e===null?(t=bf(n.type,null,n.pendingProps,null))?n.memoizedState=t:ve||(t=n.type,e=n.pendingProps,a=ou(Xn.current).createElement(t),a[rn]=n,a[vn]=e,ln(a,t,e),Fe(a),n.stateNode=a):n.memoizedState=bf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return tt(n),e===null&&ve&&(a=n.stateNode=yf(n.type,n.pendingProps,Xn.current),hn=n,Kn=!0,tn=Jn(a.firstChild)),a=n.pendingProps.children,e!==null||ve?an(e,n,a,t):n.child=oa(n,null,a,t),Cl(e,n),n.child;case 5:return e===null&&ve&&((l=a=tn)&&(a=rp(a,n.type,n.pendingProps,Kn),a!==null?(n.stateNode=a,hn=n,tn=Jn(a.firstChild),Kn=!1,l=!0):l=!1),l||ua(n)),tt(n),l=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,xs(l,i)?a=null:o!==null&&xs(l,o)&&(n.flags|=32),n.memoizedState!==null&&(l=ho(e,n,Tm,null,null,t),$l._currentValue=l),Cl(e,n),an(e,n,a,t),n.child;case 6:return e===null&&ve&&((e=t=tn)&&(t=cp(t,n.pendingProps,Kn),t!==null?(n.stateNode=t,hn=n,tn=null,e=!0):e=!1),e||ua(n)),null;case 13:return fd(e,n,t);case 4:return Zn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=oa(n,null,a,t):an(e,n,a,t),n.child;case 11:return ld(e,n,n.type,n.pendingProps,t);case 7:return an(e,n,n.pendingProps,t),n.child;case 8:return an(e,n,n.pendingProps.children,t),n.child;case 12:return an(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Dt(n,n.type,a.value),an(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ma(n),l=cn(l),a=a(l),n.flags|=1,an(e,n,a,t),n.child;case 14:return id(e,n,n.type,n.pendingProps,t);case 15:return ud(e,n,n.type,n.pendingProps,t);case 19:return md(e,n,t);case 22:return od(e,n,t);case 24:return ma(n),a=cn(We),e===null?(l=co(),l===null&&(l=Oe,i=so(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},Io(n),Dt(n,We,l)):((e.lanes&t)!==0&&(Qo(e,n),_l(n,null,null,t),Rl()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Dt(n,We,a)):(a=i.cache,Dt(n,We,a),a!==l.cache&&Go(n,[We],t,!0))),an(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Ho=ge(null),ha=null,ct=null;function Dt(e,n,t){we(Ho,n._currentValue),n._currentValue=t}function dt(e){e._currentValue=Ho.current,Ce(Ho)}function Yo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Go(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var m=0;m<n.length;m++)if(c.context===n[m]){i.lanes|=t,c=i.alternate,c!==null&&(c.lanes|=t),Yo(i.return,t,e),a||(o=null);break e}i=c.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(r(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),Yo(o,t,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function kl(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var c=l.type;jn(l.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(l===on.current){if(o=l.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}l=l.return}e!==null&&Go(n,e,t,a),n.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){ha=e,ct=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return yd(ha,e)}function Vi(e,n){return ha===null&&ma(e),yd(e,n)}function yd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ct===null){if(e===null)throw Error(r(308));ct=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ct=ct.next=n;return t}var Rt=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _t(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ut(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ue&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Ti(e),$r(e,null,t),n}return xi(e,a,n,t),Ti(e)}function Dl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}function Jo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Vo=!1;function Rl(){if(Vo){var e=Ya;if(e!==null)throw e}}function _l(e,n,t,a){Vo=!1;var l=e.updateQueue;Rt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var m=c,w=m.next;m.next=null,o===null?i=w:o.next=w,o=m;var z=e.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==o&&(c===null?z.firstBaseUpdate=w:c.next=w,z.lastBaseUpdate=m))}if(i!==null){var R=l.baseState;o=0,z=w=m=null,c=i;do{var x=c.lane&-536870913,q=x!==c.lane;if(q?(ye&x)===x:(a&x)===x){x!==0&&x===Ha&&(Vo=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var F=e,oe=c;x=n;var Ge=t;switch(oe.tag){case 1:if(F=oe.payload,typeof F=="function"){R=F.call(Ge,R,x);break e}R=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=oe.payload,x=typeof F=="function"?F.call(Ge,R,x):F,x==null)break e;R=W({},R,x);break e;case 2:Rt=!0}}x=c.callback,x!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[x]:q.push(x))}else q={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(w=z=q,m=R):z=z.next=q,o|=x;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;q=c,c=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);z===null&&(m=R),l.baseState=m,l.firstBaseUpdate=w,l.lastBaseUpdate=z,i===null&&(l.shared.lanes=0),Gt|=o,e.lanes=o,e.memoizedState=R}}function gd(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function vd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)gd(t[e],n)}function Ul(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,o=t.inst;a=i(),o.destroy=a}t=t.next}while(t!==l)}}catch(c){ze(n,n.return,c)}}function Bt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,l=n;var m=t;try{c()}catch(w){ze(l,m,w)}}}a=a.next}while(a!==i)}}catch(w){ze(n,n.return,w)}}function bd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{vd(n,t)}catch(a){ze(e,e.return,a)}}}function wd(e,n,t){t.props=fa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ze(e,n,a)}}function pa(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(i){ze(e,n,i)}}function En(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){ze(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ze(e,n,l)}else t.current=null}function Sd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){ze(e,e.return,l)}}function jd(e,n,t){try{var a=e.stateNode;lp(a,e.type,t,n),a[vn]=n}catch(l){ze(e,e.return,l)}}function Ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=uu));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Zo(e,n,t),e=e.sibling;e!==null;)Zo(e,n,t),e=e.sibling}function Xi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Xi(e,n,t),e=e.sibling;e!==null;)Xi(e,n,t),e=e.sibling}var ft=!1,He=!1,Ko=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,en=null,xd=!1;function Dm(e,n){if(e=e.containerInfo,Es=hu,e=Gr(e),Wu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,c=-1,m=-1,w=0,z=0,R=e,x=null;n:for(;;){for(var q;R!==t||l!==0&&R.nodeType!==3||(c=o+l),R!==i||a!==0&&R.nodeType!==3||(m=o+a),R.nodeType===3&&(o+=R.nodeValue.length),(q=R.firstChild)!==null;)x=R,R=q;for(;;){if(R===e)break n;if(x===t&&++w===l&&(c=o),x===i&&++z===a&&(m=o),(q=R.nextSibling)!==null)break;R=x,x=R.parentNode}R=q}t=c===-1||m===-1?null:{start:c,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(As={focusedElem:e,selectionRange:t},hu=!1,en=n;en!==null;)if(n=en,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,en=e;else for(;en!==null;){switch(n=en,i=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var F=fa(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(F,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){ze(t,t.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)qs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,en=e;break}en=n.return}return F=xd,xd=!1,F}function Td(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t),a&4&&Ul(5,t);break;case 1:if(mt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){ze(t,t.return,c)}else{var l=fa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ze(t,t.return,c)}}a&64&&bd(t),a&512&&pa(t,t.return);break;case 3:if(mt(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vd(a,e)}catch(c){ze(t,t.return,c)}}break;case 26:mt(e,t),a&512&&pa(t,t.return);break;case 27:case 5:mt(e,t),n===null&&a&4&&Sd(t),a&512&&pa(t,t.return);break;case 12:mt(e,t);break;case 13:mt(e,t),a&4&&zd(e,t);break;case 22:if(l=t.memoizedState!==null||ft,!l){n=n!==null&&n.memoizedState!==null||He;var i=ft,o=He;ft=l,(He=n)&&!o?Lt(e,t,(t.subtreeFlags&8772)!==0):mt(e,t),ft=i,He=o}a&512&&(t.memoizedProps.mode==="manual"?pa(t,t.return):En(t,t.return));break;default:mt(e,t)}}function Md(e){var n=e.alternate;n!==null&&(e.alternate=null,Md(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Du(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,An=!1;function ht(e,n,t){for(t=t.child;t!==null;)qd(e,n,t),t=t.sibling}function qd(e,n,t){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount($t,t)}catch{}switch(t.tag){case 26:He||En(t,n),ht(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:He||En(t,n);var a=Ze,l=An;for(Ze=t.stateNode,ht(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Du(t),Ze=a,An=l;break;case 5:He||En(t,n);case 6:l=Ze;var i=An;if(Ze=null,ht(e,n,t),Ze=l,An=i,Ze!==null)if(An)try{e=Ze,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(o){ze(t,n,o)}else try{Ze.removeChild(t.stateNode)}catch(o){ze(t,n,o)}break;case 18:Ze!==null&&(An?(n=Ze,t=t.stateNode,n.nodeType===8?Ms(n.parentNode,t):n.nodeType===1&&Ms(n,t),ni(n)):Ms(Ze,t.stateNode));break;case 4:a=Ze,l=An,Ze=t.stateNode.containerInfo,An=!0,ht(e,n,t),Ze=a,An=l;break;case 0:case 11:case 14:case 15:He||Bt(2,t,n),He||Bt(4,t,n),ht(e,n,t);break;case 1:He||(En(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&wd(t,n,a)),ht(e,n,t);break;case 21:ht(e,n,t);break;case 22:He||En(t,n),He=(a=He)||t.memoizedState!==null,ht(e,n,t),He=a;break;default:ht(e,n,t)}}function zd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ni(e)}catch(t){ze(n,n.return,t)}}function Rm(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ad),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ad),n;default:throw Error(r(435,e.tag))}}function Wo(e,n){var t=Rm(e);n.forEach(function(a){var l=Zm.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function _n(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,o=n,c=o;e:for(;c!==null;){switch(c.tag){case 27:case 5:Ze=c.stateNode,An=!1;break e;case 3:Ze=c.stateNode.containerInfo,An=!0;break e;case 4:Ze=c.stateNode.containerInfo,An=!0;break e}c=c.return}if(Ze===null)throw Error(r(160));qd(i,o,l),Ze=null,An=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Od(n,e),n=n.sibling}var Qn=null;function Od(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_n(n,e),Un(e),a&4&&(Bt(3,e,e.return),Ul(3,e),Bt(5,e,e.return));break;case 1:_n(n,e),Un(e),a&512&&(He||t===null||En(t,t.return)),a&64&&ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Qn;if(_n(n,e),Un(e),a&512&&(He||t===null||En(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[rl]||i[rn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),ln(i,a,t),i[rn]=e,Fe(i),a=i;break e;case"link":var o=jf("link","href",l).get(a+(t.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(t.href==null?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(c,1);break n}}i=l.createElement(a),ln(i,a,t),l.head.appendChild(i);break;case"meta":if(o=jf("meta","content",l).get(a+(t.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(c,1);break n}}i=l.createElement(a),ln(i,a,t),l.head.appendChild(i);break;default:throw Error(r(468,a))}i[rn]=e,Fe(i),a=i}e.stateNode=a}else Ef(l,e.type,e.stateNode);else e.stateNode=Sf(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?Ef(l,e.type,e.stateNode):Sf(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&jd(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,i=e.memoizedProps;try{for(var m=l.firstChild;m;){var w=m.nextSibling,z=m.nodeName;m[rl]||z==="HEAD"||z==="BODY"||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&m.rel.toLowerCase()==="stylesheet"||l.removeChild(m),m=w}for(var R=e.type,x=l.attributes;x.length;)l.removeAttributeNode(x[0]);ln(l,R,i),l[rn]=e,l[vn]=i}catch(F){ze(e,e.return,F)}}case 5:if(_n(n,e),Un(e),a&512&&(He||t===null||En(t,t.return)),e.flags&32){l=e.stateNode;try{qa(l,"")}catch(F){ze(e,e.return,F)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,jd(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Ko=!0);break;case 6:if(_n(n,e),Un(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(F){ze(e,e.return,F)}}break;case 3:if(cu=null,l=Qn,Qn=su(n.containerInfo),_n(n,e),Qn=l,Un(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{ni(n.containerInfo)}catch(F){ze(e,e.return,F)}Ko&&(Ko=!1,Nd(e));break;case 4:a=Qn,Qn=su(e.stateNode.containerInfo),_n(n,e),Un(e),Qn=a;break;case 12:_n(n,e),Un(e);break;case 13:_n(n,e),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(is=qn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Wo(e,a)));break;case 22:if(a&512&&(He||t===null||En(t,t.return)),m=e.memoizedState!==null,w=t!==null&&t.memoizedState!==null,z=ft,R=He,ft=z||m,He=R||w,_n(n,e),He=R,ft=z,Un(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=m?n._visibility&-2:n._visibility|1,m&&(n=ft||He,t===null||w||n||Ja(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){w=t=n;try{if(l=w.stateNode,m)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=w.stateNode,c=w.memoizedProps.style;var q=c!=null&&c.hasOwnProperty("display")?c.display:null;o.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){ze(w,w.return,F)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=m?"":w.memoizedProps}catch(F){ze(w,w.return,F)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Wo(e,t))));break;case 19:_n(n,e),Un(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Wo(e,a)));break;case 21:break;default:_n(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Ed(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var l=a.stateNode,i=Xo(e);Xi(e,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(qa(o,""),a.flags&=-33);var c=Xo(e);Xi(e,c,o);break;case 3:case 4:var m=a.stateNode.containerInfo,w=Xo(e);Zo(e,w,m);break;default:throw Error(r(161))}}}catch(z){ze(e,e.return,z)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Nd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function mt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Td(e,n.alternate,n),n=n.sibling}function Ja(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Bt(4,n,n.return),Ja(n);break;case 1:En(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&wd(n,n.return,t),Ja(n);break;case 26:case 27:case 5:En(n,n.return),Ja(n);break;case 22:En(n,n.return),n.memoizedState===null&&Ja(n);break;default:Ja(n)}e=e.sibling}}function Lt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,o=i.flags;switch(i.tag){case 0:case 11:case 15:Lt(l,i,t),Ul(4,i);break;case 1:if(Lt(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(w){ze(a,a.return,w)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)gd(m[l],c)}catch(w){ze(a,a.return,w)}}t&&o&64&&bd(i),pa(i,i.return);break;case 26:case 27:case 5:Lt(l,i,t),t&&a===null&&o&4&&Sd(i),pa(i,i.return);break;case 12:Lt(l,i,t);break;case 13:Lt(l,i,t),t&&o&4&&zd(l,i);break;case 22:i.memoizedState===null&&Lt(l,i,t),pa(i,i.return);break;default:Lt(l,i,t)}n=n.sibling}}function $o(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ml(t))}function Fo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e))}function Ht(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cd(e,n,t,a),n=n.sibling}function Cd(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ht(e,n,t,a),l&2048&&Ul(9,n);break;case 3:Ht(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e)));break;case 12:if(l&2048){Ht(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ze(n,n.return,m)}}else Ht(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,n.memoizedState!==null?i._visibility&4?Ht(e,n,t,a):Bl(e,n):i._visibility&4?Ht(e,n,t,a):(i._visibility|=4,Va(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&$o(n.alternate,n);break;case 24:Ht(e,n,t,a),l&2048&&Fo(n.alternate,n);break;default:Ht(e,n,t,a)}}function Va(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=e,o=n,c=t,m=a,w=o.flags;switch(o.tag){case 0:case 11:case 15:Va(i,o,c,m,l),Ul(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&4?Va(i,o,c,m,l):Bl(i,o):(z._visibility|=4,Va(i,o,c,m,l)),l&&w&2048&&$o(o.alternate,o);break;case 24:Va(i,o,c,m,l),l&&w&2048&&Fo(o.alternate,o);break;default:Va(i,o,c,m,l)}n=n.sibling}}function Bl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Bl(t,a),l&2048&&$o(a.alternate,a);break;case 24:Bl(t,a),l&2048&&Fo(a.alternate,a);break;default:Bl(t,a)}n=n.sibling}}var Ll=8192;function Xa(e){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)kd(e),e=e.sibling}function kd(e){switch(e.tag){case 26:Xa(e),e.flags&Ll&&e.memoizedState!==null&&Ep(Qn,e.memoizedState,e.memoizedProps);break;case 5:Xa(e);break;case 3:case 4:var n=Qn;Qn=su(e.stateNode.containerInfo),Xa(e),Qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ll,Ll=16777216,Xa(e),Ll=n):Xa(e));break;default:Xa(e)}}function Dd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];en=a,_d(a,e)}Dd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rd(e),e=e.sibling}function Rd(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Bt(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Zi(e)):Hl(e);break;default:Hl(e)}}function Zi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];en=a,_d(a,e)}Dd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Bt(8,n,n.return),Zi(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Zi(n));break;default:Zi(n)}e=e.sibling}}function _d(e,n){for(;en!==null;){var t=en;switch(t.tag){case 0:case 11:case 15:Bt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ml(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,en=a;else e:for(t=e;en!==null;){a=en;var l=a.sibling,i=a.return;if(Md(a),a===t){en=null;break e}if(l!==null){l.return=i,en=l;break e}en=i}}}function _m(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,n,t,a){return new _m(e,n,t,a)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,n){var t=e.alternate;return t===null?(t=Bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ud(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ki(e,n,t,a,l,i){var o=0;if(a=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=Sp(e,t,Ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return ya(t.children,l,i,n);case p:o=8,l|=24;break;case M:return e=Bn(12,t,n,l|2),e.elementType=M,e.lanes=i,e;case J:return e=Bn(13,t,n,l),e.elementType=J,e.lanes=i,e;case G:return e=Bn(19,t,n,l),e.elementType=G,e.lanes=i,e;case X:return Bd(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case L:o=10;break e;case C:o=9;break e;case k:o=11;break e;case U:o=14;break e;case K:o=16,a=null;break e}o=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=Bn(o,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function ya(e,n,t,a){return e=Bn(7,e,a,n),e.lanes=t,e}function Bd(e,n,t,a){e=Bn(22,e,a,n),e.elementType=X,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(r(456));if((l._pendingVisibility&2)===0){var o=zt(i,2);o!==null&&(l._pendingVisibility|=2,mn(o,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(r(456));if((l._pendingVisibility&2)!==0){var o=zt(i,2);o!==null&&(l._pendingVisibility&=-3,mn(o,i,2))}}};return e.stateNode=l,e}function es(e,n,t){return e=Bn(6,e,null,n),e.lanes=t,e}function ns(e,n,t){return n=Bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function pt(e){e.flags|=4}function Ld(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Af(n)){if(n=Rn.current,n!==null&&((ye&4194176)===ye?Wn!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Wn))throw Al=io,tc;e.flags|=8192}}function Wi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Sn():536870912,e.lanes|=n,Ka|=n)}function Yl(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function _e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Um(e,n,t){var a=n.pendingProps;switch(ao(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(n),null;case 1:return _e(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),dt(We),Et(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(wl(n)?pt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,In!==null&&(rs(In),In=null))),_e(n),null;case 26:return t=n.memoizedState,e===null?(pt(n),t!==null?(_e(n),Ld(n,t)):(_e(n),n.flags&=-16777217)):t?t!==e.memoizedState?(pt(n),_e(n),Ld(n,t)):(_e(n),n.flags&=-16777217):(e.memoizedProps!==a&&pt(n),_e(n),n.flags&=-16777217),null;case 27:At(n),t=Xn.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return _e(n),null}e=Ie.current,wl(n)?ec(n):(e=yf(l,a,t),n.stateNode=e,pt(n))}return _e(n),null;case 5:if(At(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return _e(n),null}if(e=Ie.current,wl(n))ec(n);else{switch(l=ou(Xn.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[rn]=n,e[vn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(ln(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&pt(n)}}return _e(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&pt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Xn.current,wl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=hn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[rn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||cf(e.nodeValue,t)),e||ua(n)}else e=ou(e).createTextNode(a),e[rn]=n,n.stateNode=e}return _e(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=wl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[rn]=n}else Sl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_e(n),l=!1}else In!==null&&(rs(In),In=null),l=!0;if(!l)return n.flags&256?(ot(n),n):(ot(n),null)}if(ot(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Wi(n,n.updateQueue),_e(n),null;case 4:return Et(),e===null&&ws(n.stateNode.containerInfo),_e(n),null;case 10:return dt(n.type),_e(n),null;case 19:if(Ce(Ke),l=n.memoizedState,l===null)return _e(n),null;if(a=(n.flags&128)!==0,i=l.rendering,i===null)if(a)Yl(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=ki(e),i!==null){for(n.flags|=128,Yl(l,!1),e=i.updateQueue,n.updateQueue=e,Wi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Ud(t,e),t=t.sibling;return we(Ke,Ke.current&1|2),n.child}e=e.sibling}l.tail!==null&&qn()>$i&&(n.flags|=128,a=!0,Yl(l,!1),n.lanes=4194304)}else{if(!a)if(e=ki(i),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Wi(n,e),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ve)return _e(n),null}else 2*qn()-l.renderingStartTime>$i&&t!==536870912&&(n.flags|=128,a=!0,Yl(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(e=l.last,e!==null?e.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=qn(),n.sibling=null,e=Ke.current,we(Ke,a?e&1|2:e&1),n):(_e(n),null);case 22:case 23:return ot(n),oo(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(_e(n),n.subtreeFlags&6&&(n.flags|=8192)):_e(n),t=n.updateQueue,t!==null&&Wi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&Ce(sa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),dt(We),_e(n),null;case 25:return null}throw Error(r(156,n.tag))}function Bm(e,n){switch(ao(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(We),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return At(n),null;case 13:if(ot(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Sl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ce(Ke),null;case 4:return Et(),null;case 10:return dt(n.type),null;case 22:case 23:return ot(n),oo(),e!==null&&Ce(sa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return dt(We),null;case 25:return null;default:return null}}function Hd(e,n){switch(ao(n),n.tag){case 3:dt(We),Et();break;case 26:case 27:case 5:At(n);break;case 4:Et();break;case 13:ot(n);break;case 19:Ce(Ke);break;case 10:dt(n.type);break;case 22:case 23:ot(n),oo(),e!==null&&Ce(sa);break;case 24:dt(We)}}var Lm={getCacheForType:function(e){var n=cn(We),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Oe=null,he=null,ye=0,Ne=0,xn=null,yt=!1,Za=!1,ts=!1,gt=0,Ye=0,Gt=0,ga=0,as=0,Ln=0,Ka=0,Gl=null,Fn=null,ls=!1,is=0,$i=1/0,Fi=null,It=null,Pi=!1,va=null,Il=0,us=0,os=null,Ql=0,ss=null;function Tn(){if((Ue&2)!==0&&ye!==0)return ye&-ye;if(D.T!==null){var e=Ha;return e!==0?e:ys()}return or()}function Yd(){Ln===0&&(Ln=(ye&536870912)===0||ve?ja():536870912);var e=Rn.current;return e!==null&&(e.flags|=32),Ln}function mn(e,n,t){(e===Oe&&Ne===2||e.cancelPendingCommit!==null)&&(Wa(e,0),vt(e,ye,Ln,!1)),ke(e,t),((Ue&2)===0||e!==Oe)&&(e===Oe&&((Ue&2)===0&&(ga|=t),Ye===4&&vt(e,ye,Ln,!1)),Pn(e))}function Gd(e,n,t){if((Ue&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||sn(e,n),l=a?Im(e,n):fs(e,n,!0),i=a;do{if(l===0){Za&&!a&&vt(e,n,0,!1);break}else if(l===6)vt(e,n,0,!yt);else{if(t=e.current.alternate,i&&!Ym(t)){l=fs(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var c=e;l=Gl;var m=c.current.memoizedState.isDehydrated;if(m&&(Wa(c,o).flags|=256),o=fs(c,o,!1),o!==2){if(ts&&!m){c.errorRecoveryDisabledLanes|=i,ga|=i,l=4;break e}i=Fn,Fn=l,i!==null&&rs(i)}l=o}if(i=!1,l!==2)continue}}if(l===1){Wa(e,0),vt(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){vt(a,n,Ln,!yt);break e}break;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(i=is+300-qn(),10<i)){if(vt(a,n,Ln,!yt),yn(a,0)!==0)break e;a.timeoutHandle=hf(Id.bind(null,a,t,Fn,Fi,ls,n,Ln,ga,Ka,yt,2,-0,0),i);break e}Id(a,t,Fn,Fi,ls,n,Ln,ga,Ka,yt,0,-0,0)}}break}while(!0);Pn(e)}function rs(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function Id(e,n,t,a,l,i,o,c,m,w,z,R,x){var q=n.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(Wl={stylesheets:null,count:0,unsuspend:jp},kd(n),n=Ap(),n!==null)){e.cancelPendingCommit=n(Wd.bind(null,e,t,a,l,o,c,m,1,R,x)),vt(e,i,o,!w);return}Wd(e,t,a,l,o,c,m,z,R,x)}function Ym(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!jn(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vt(e,n,t,a){n&=~as,n&=~ga,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-V(l),o=1<<i;a[i]=-1,l&=~o}t!==0&&Ft(e,t,n)}function eu(){return(Ue&6)===0?(Jl(0),!1):!0}function cs(){if(he!==null){if(Ne===0)var e=he.return;else e=he,ct=ha=null,yo(e),Ba=null,xl=0,e=he;for(;e!==null;)Hd(e.alternate,e),e=e.return;he=null}}function Wa(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,up(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),cs(),Oe=e,he=t=Yt(e.current,null),ye=n,Ne=0,xn=null,yt=!1,Za=sn(e,n),ts=!1,Ka=Ln=as=ga=Gt=Ye=0,Fn=Gl=null,ls=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-V(a),i=1<<l;n|=e[l],a&=~i}return gt=n,Ai(),t}function Qd(e,n){de=null,D.H=$n,n===El?(n=ic(),Ne=3):n===tc?(n=ic(),Ne=4):Ne=n===ad?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xn=n,he===null&&(Ye=1,Qi(e,Cn(n,e.current)))}function Jd(){var e=D.H;return D.H=$n,e===null?$n:e}function Vd(){var e=D.A;return D.A=Lm,e}function ds(){Ye=4,yt||(ye&4194176)!==ye&&Rn.current!==null||(Za=!0),(Gt&134217727)===0&&(ga&134217727)===0||Oe===null||vt(Oe,ye,Ln,!1)}function fs(e,n,t){var a=Ue;Ue|=2;var l=Jd(),i=Vd();(Oe!==e||ye!==n)&&(Fi=null,Wa(e,n)),n=!1;var o=Ye;e:do try{if(Ne!==0&&he!==null){var c=he,m=xn;switch(Ne){case 8:cs(),o=6;break e;case 3:case 2:case 6:Rn.current===null&&(n=!0);var w=Ne;if(Ne=0,xn=null,$a(e,c,m,w),t&&Za){o=0;break e}break;default:w=Ne,Ne=0,xn=null,$a(e,c,m,w)}}Gm(),o=Ye;break}catch(z){Qd(e,z)}while(!0);return n&&e.shellSuspendCounter++,ct=ha=null,Ue=a,D.H=l,D.A=i,he===null&&(Oe=null,ye=0,Ai()),o}function Gm(){for(;he!==null;)Xd(he)}function Im(e,n){var t=Ue;Ue|=2;var a=Jd(),l=Vd();Oe!==e||ye!==n?(Fi=null,$i=qn()+500,Wa(e,n)):Za=sn(e,n);e:do try{if(Ne!==0&&he!==null){n=he;var i=xn;n:switch(Ne){case 1:Ne=0,xn=null,$a(e,n,i,1);break;case 2:if(ac(i)){Ne=0,xn=null,Zd(n);break}n=function(){Ne===2&&Oe===e&&(Ne=7),Pn(e)},i.then(n,n);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:ac(i)?(Ne=0,xn=null,Zd(n)):(Ne=0,xn=null,$a(e,n,i,7));break;case 5:var o=null;switch(he.tag){case 26:o=he.memoizedState;case 5:case 27:var c=he;if(!o||Af(o)){Ne=0,xn=null;var m=c.sibling;if(m!==null)he=m;else{var w=c.return;w!==null?(he=w,nu(w)):he=null}break n}}Ne=0,xn=null,$a(e,n,i,5);break;case 6:Ne=0,xn=null,$a(e,n,i,6);break;case 8:cs(),Ye=6;break e;default:throw Error(r(462))}}Qm();break}catch(z){Qd(e,z)}while(!0);return ct=ha=null,D.H=a,D.A=l,Ue=t,he!==null?0:(Oe=null,ye=0,Ai(),Ye)}function Qm(){for(;he!==null&&!Mu();)Xd(he)}function Xd(e){var n=pd(e.alternate,e,gt);e.memoizedProps=e.pendingProps,n===null?nu(e):he=n}function Zd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=rd(t,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=rd(t,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:yo(n);default:Hd(t,n),n=he=Ud(n,gt),n=pd(t,n,gt)}e.memoizedProps=e.pendingProps,n===null?nu(e):he=n}function $a(e,n,t,a){ct=ha=null,yo(n),Ba=null,xl=0;var l=n.return;try{if(Cm(e,l,n,t,ye)){Ye=1,Qi(e,Cn(t,e.current)),he=null;return}}catch(i){if(l!==null)throw he=l,i;Ye=1,Qi(e,Cn(t,e.current)),he=null;return}n.flags&32768?(ve||a===1?e=!0:Za||(ye&536870912)!==0?e=!1:(yt=e=!0,(a===2||a===3||a===6)&&(a=Rn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Kd(n,e)):nu(n)}function nu(e){var n=e;do{if((n.flags&32768)!==0){Kd(n,yt);return}e=n.return;var t=Um(n.alternate,n,gt);if(t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);Ye===0&&(Ye=5)}function Kd(e,n){do{var t=Bm(e.alternate,e);if(t!==null){t.flags&=32767,he=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=t}while(e!==null);Ye=6,he=null}function Wd(e,n,t,a,l,i,o,c,m,w){var z=D.T,R=Y.p;try{Y.p=2,D.T=null,Jm(e,n,t,a,R,l,i,o,c,m,w)}finally{D.T=z,Y.p=R}}function Jm(e,n,t,a,l,i,o,c){do Fa();while(va!==null);if((Ue&6)!==0)throw Error(r(327));var m=e.finishedWork;if(a=e.finishedLanes,m===null)return null;if(e.finishedWork=null,e.finishedLanes=0,m===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=m.lanes|m.childLanes;if(w|=eo,Yn(e,a,w,i,o,c),e===Oe&&(he=Oe=null,ye=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||Pi||(Pi=!0,us=w,os=t,Km(Wt,function(){return Fa(),null})),t=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||t?(t=D.T,D.T=null,i=Y.p,Y.p=2,o=Ue,Ue|=4,Dm(e,m),Od(m,e),pm(As,e.containerInfo),hu=!!Es,As=Es=null,e.current=m,Td(e,m.alternate,m),qu(),Ue=o,Y.p=i,D.T=t):e.current=m,Pi?(Pi=!1,va=e,Il=a):$d(e,w),w=e.pendingLanes,w===0&&(It=null),Cu(m.stateNode),Pn(e),n!==null)for(l=e.onRecoverableError,m=0;m<n.length;m++)w=n[m],l(w.value,{componentStack:w.stack});return(Il&3)!==0&&Fa(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===ss?Ql++:(Ql=0,ss=e):Ql=0,Jl(0),null}function $d(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ml(n)))}function Fa(){if(va!==null){var e=va,n=us;us=0;var t=ur(Il),a=D.T,l=Y.p;try{if(Y.p=32>t?32:t,D.T=null,va===null)var i=!1;else{t=os,os=null;var o=va,c=Il;if(va=null,Il=0,(Ue&6)!==0)throw Error(r(331));var m=Ue;if(Ue|=4,Rd(o.current),Cd(o,o.current,c,t),Ue=m,Jl(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot($t,o)}catch{}i=!0}return i}finally{Y.p=l,D.T=a,$d(e,n)}}return!1}function Fd(e,n,t){n=Cn(t,n),n=Oo(e.stateNode,n,2),e=Ut(e,n,2),e!==null&&(ke(e,2),Pn(e))}function ze(e,n,t){if(e.tag===3)Fd(e,e,t);else for(;n!==null;){if(n.tag===3){Fd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(It===null||!It.has(a))){e=Cn(t,e),t=nd(2),a=Ut(n,t,2),a!==null&&(td(t,a,n,e),ke(a,2),Pn(a));break}}n=n.return}}function hs(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Hm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(ts=!0,l.add(t),e=Vm.bind(null,e,n,t),n.then(e,e))}function Vm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Oe===e&&(ye&t)===t&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>qn()-is?(Ue&2)===0&&Wa(e,0):as|=t,Ka===ye&&(Ka=0)),Pn(e)}function Pd(e,n){n===0&&(n=Sn()),e=zt(e,n),e!==null&&(ke(e,n),Pn(e))}function Xm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pd(e,t)}function Zm(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),Pd(e,t)}function Km(e,n){return Tt(e,n)}var tu=null,Pa=null,ms=!1,au=!1,ps=!1,ba=0;function Pn(e){e!==Pa&&e.next===null&&(Pa===null?tu=Pa=e:Pa=Pa.next=e),au=!0,ms||(ms=!0,$m(Wm))}function Jl(e,n){if(!ps&&au){ps=!0;do for(var t=!1,a=tu;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-V(42|e)+1)-1,i&=l&~(o&~c),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(t=!0,tf(a,i))}else i=ye,i=yn(a,a===Oe?i:0),(i&3)===0||sn(a,i)||(t=!0,tf(a,i));a=a.next}while(t);ps=!1}}function Wm(){au=ms=!1;var e=0;ba!==0&&(ip()&&(e=ba),ba=0);for(var n=qn(),t=null,a=tu;a!==null;){var l=a.next,i=ef(a,n);i===0?(a.next=null,t===null?tu=l:t.next=l,l===null&&(Pa=t)):(t=a,(e!==0||(i&3)!==0)&&(au=!0)),a=l}Jl(e)}function ef(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-V(i),c=1<<o,m=l[o];m===-1?((c&t)===0||(c&a)!==0)&&(l[o]=gn(c,n)):m<=n&&(e.expiredLanes|=c),i&=~c}if(n=Oe,t=ye,t=yn(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Ne===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&il(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||sn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&il(a),ur(t)){case 2:case 8:t=ol;break;case 32:t=Wt;break;case 268435456:t=fi;break;default:t=Wt}return a=nf.bind(null,e),t=Tt(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&il(a),e.callbackPriority=2,e.callbackNode=null,2}function nf(e,n){var t=e.callbackNode;if(Fa()&&e.callbackNode!==t)return null;var a=ye;return a=yn(e,e===Oe?a:0),a===0?null:(Gd(e,a,n),ef(e,qn()),e.callbackNode!=null&&e.callbackNode===t?nf.bind(null,e):null)}function tf(e,n){if(Fa())return null;Gd(e,n,!0)}function $m(e){op(function(){(Ue&6)!==0?Tt(ul,e):e()})}function ys(){return ba===0&&(ba=ja()),ba}function af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function lf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Fm(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=af((l[vn]||null).action),o=a.submitter;o&&(n=(n=o[vn]||null)?af(n.formAction):o.getAttribute("formAction"),n!==null&&(i=n,o=null));var c=new Si("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var m=o?lf(l,o):new FormData(l);xo(t,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(c.preventDefault(),m=o?lf(l,o):new FormData(l),xo(t,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var gs=0;gs<Wr.length;gs++){var vs=Wr[gs],Pm=vs.toLowerCase(),ep=vs[0].toUpperCase()+vs.slice(1);Gn(Pm,"on"+ep)}Gn(Jr,"onAnimationEnd"),Gn(Vr,"onAnimationIteration"),Gn(Xr,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(gm,"onTransitionRun"),Gn(vm,"onTransitionStart"),Gn(bm,"onTransitionCancel"),Gn(Zr,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function uf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var o=a.length-1;0<=o;o--){var c=a[o],m=c.instance,w=c.currentTarget;if(c=c.listener,m!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(z){Ii(z)}l.currentTarget=null,i=m}else for(o=0;o<a.length;o++){if(c=a[o],m=c.instance,w=c.currentTarget,c=c.listener,m!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=w;try{i(l)}catch(z){Ii(z)}l.currentTarget=null,i=m}}}}function me(e,n){var t=n[ku];t===void 0&&(t=n[ku]=new Set);var a=e+"__bubble";t.has(a)||(of(n,e,2,!1),t.add(a))}function bs(e,n,t){var a=0;n&&(a|=4),of(t,e,a,n)}var lu="_reactListening"+Math.random().toString(36).slice(2);function ws(e){if(!e[lu]){e[lu]=!0,rr.forEach(function(t){t!=="selectionchange"&&(np.has(t)||bs(t,!1,e),bs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lu]||(n[lu]=!0,bs("selectionchange",!1,n))}}function of(e,n,t,a){switch(Of(n)){case 2:var l=Mp;break;case 8:l=qp;break;default:l=ks}t=l.bind(null,n,t,e),l=void 0,!Yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ss(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(o===4)for(o=a.return;o!==null;){var m=o.tag;if((m===3||m===4)&&(m=o.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;o=o.return}for(;c!==null;){if(o=Pt(c),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){a=i=o;continue e}c=c.parentNode}}a=a.return}Sr(function(){var w=i,z=Lu(t),R=[];e:{var x=Kr.get(e);if(x!==void 0){var q=Si,F=e;switch(e){case"keypress":if(bi(t)===0)break e;case"keydown":case"keyup":q=Zh;break;case"focusin":F="focus",q=Ju;break;case"focusout":F="blur",q=Ju;break;case"beforeblur":case"afterblur":q=Ju;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=_h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=$h;break;case Jr:case Vr:case Xr:q=Lh;break;case Zr:q=Ph;break;case"scroll":case"scrollend":q=Dh;break;case"wheel":q=nm;break;case"copy":case"cut":case"paste":q=Yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Tr;break;case"toggle":case"beforetoggle":q=am}var oe=(n&4)!==0,Ge=!oe&&(e==="scroll"||e==="scrollend"),S=oe?x!==null?x+"Capture":null:x;oe=[];for(var b=w,E;b!==null;){var N=b;if(E=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||E===null||S===null||(N=dl(b,S),N!=null&&oe.push(Xl(b,N,E))),Ge)break;b=b.return}0<oe.length&&(x=new q(x,F,null,t,z),R.push({event:x,listeners:oe}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",x&&t!==Bu&&(F=t.relatedTarget||t.fromElement)&&(Pt(F)||F[Ea]))break e;if((q||x)&&(x=z.window===z?z:(x=z.ownerDocument)?x.defaultView||x.parentWindow:window,q?(F=t.relatedTarget||t.toElement,q=w,F=F?Pt(F):null,F!==null&&(Ge=te(F),oe=F.tag,F!==Ge||oe!==5&&oe!==27&&oe!==6)&&(F=null)):(q=null,F=w),q!==F)){if(oe=Ar,N="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Tr,N="onPointerLeave",S="onPointerEnter",b="pointer"),Ge=q==null?x:cl(q),E=F==null?x:cl(F),x=new oe(N,b+"leave",q,t,z),x.target=Ge,x.relatedTarget=E,N=null,Pt(z)===w&&(oe=new oe(S,b+"enter",F,t,z),oe.target=E,oe.relatedTarget=Ge,N=oe),Ge=N,q&&F)n:{for(oe=q,S=F,b=0,E=oe;E;E=el(E))b++;for(E=0,N=S;N;N=el(N))E++;for(;0<b-E;)oe=el(oe),b--;for(;0<E-b;)S=el(S),E--;for(;b--;){if(oe===S||S!==null&&oe===S.alternate)break n;oe=el(oe),S=el(S)}oe=null}else oe=null;q!==null&&sf(R,x,q,oe,!1),F!==null&&Ge!==null&&sf(R,Ge,F,oe,!0)}}e:{if(x=w?cl(w):window,q=x.nodeName&&x.nodeName.toLowerCase(),q==="select"||q==="input"&&x.type==="file")var $=Dr;else if(Cr(x))if(Rr)$=hm;else{$=dm;var fe=cm}else q=x.nodeName,!q||q.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?w&&Uu(w.elementType)&&($=Dr):$=fm;if($&&($=$(e,w))){kr(R,$,t,z);break e}fe&&fe(e,x,w),e==="focusout"&&w&&x.type==="number"&&w.memoizedProps.value!=null&&_u(x,"number",x.value)}switch(fe=w?cl(w):window,e){case"focusin":(Cr(fe)||fe.contentEditable==="true")&&(Ca=fe,$u=w,bl=null);break;case"focusout":bl=$u=Ca=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Ir(R,t,z);break;case"selectionchange":if(ym)break;case"keydown":case"keyup":Ir(R,t,z)}var ne;if(Xu)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Na?Or(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(Mr&&t.locale!=="ko"&&(Na||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Na&&(ne=jr()):(qt=z,Gu="value"in qt?qt.value:qt.textContent,Na=!0)),fe=iu(w,ae),0<fe.length&&(ae=new xr(ae,e,null,t,z),R.push({event:ae,listeners:fe}),ne?ae.data=ne:(ne=Nr(t),ne!==null&&(ae.data=ne)))),(ne=im?um(e,t):om(e,t))&&(ae=iu(w,"onBeforeInput"),0<ae.length&&(fe=new xr("onBeforeInput","beforeinput",null,t,z),R.push({event:fe,listeners:ae}),fe.data=ne)),Fm(R,e,w,t,z)}uf(R,n)})}function Xl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function iu(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=dl(e,t),l!=null&&a.unshift(Xl(e,l,i)),l=dl(e,n),l!=null&&a.push(Xl(e,l,i))),e=e.return}return a}function el(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sf(e,n,t,a,l){for(var i=n._reactName,o=[];t!==null&&t!==a;){var c=t,m=c.alternate,w=c.stateNode;if(c=c.tag,m!==null&&m===a)break;c!==5&&c!==26&&c!==27||w===null||(m=w,l?(w=dl(t,i),w!=null&&o.unshift(Xl(t,w,m))):l||(w=dl(t,i),w!=null&&o.push(Xl(t,w,m)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var tp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function rf(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(ap,"")}function cf(e,n){return n=rf(n),rf(e)===n}function uu(){}function Me(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||qa(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&qa(e,""+a);break;case"className":mi(e,"class",a);break;case"tabIndex":mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(e,t,a);break;case"style":br(e,a,i);break;case"data":if(n!=="object"){mi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&Me(e,n,"name",l.name,l,null),Me(e,n,"formEncType",l.formEncType,l,null),Me(e,n,"formMethod",l.formMethod,l,null),Me(e,n,"formTarget",l.formTarget,l,null)):(Me(e,n,"encType",l.encType,l,null),Me(e,n,"method",l.method,l,null),Me(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=gi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=uu);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=gi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":me("beforetoggle",e),me("toggle",e),hi(e,"popover",a);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Ch.get(t)||t,hi(e,t,a))}}function js(e,n,t,a,l,i){switch(t){case"style":br(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?qa(e,a):(typeof a=="number"||typeof a=="bigint")&&qa(e,""+a);break;case"onScroll":a!=null&&me("scroll",e);break;case"onScrollEnd":a!=null&&me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=uu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[vn]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):hi(e,t,a)}}}function ln(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var o=t[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Me(e,n,i,o,t,null)}}l&&Me(e,n,"srcSet",t.srcSet,t,null),a&&Me(e,n,"src",t.src,t,null);return;case"input":me("invalid",e);var c=i=o=l=null,m=null,w=null;for(a in t)if(t.hasOwnProperty(a)){var z=t[a];if(z!=null)switch(a){case"name":l=z;break;case"type":o=z;break;case"checked":m=z;break;case"defaultChecked":w=z;break;case"value":i=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,n));break;default:Me(e,n,a,z,t,null)}}pr(e,i,c,m,w,o,l,!1),pi(e);return;case"select":me("invalid",e),a=o=i=null;for(l in t)if(t.hasOwnProperty(l)&&(c=t[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:Me(e,n,l,c,t,null)}n=i,t=o,e.multiple=!!a,n!=null?Ma(e,!!a,n,!1):t!=null&&Ma(e,!!a,t,!0);return;case"textarea":me("invalid",e),i=l=a=null;for(o in t)if(t.hasOwnProperty(o)&&(c=t[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:Me(e,n,o,c,t,null)}gr(e,a,l,i),pi(e);return;case"option":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Me(e,n,m,a,t,null)}return;case"dialog":me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(a=0;a<Vl.length;a++)me(Vl[a],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(a=t[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Me(e,n,w,a,t,null)}return;default:if(Uu(n)){for(z in t)t.hasOwnProperty(z)&&(a=t[z],a!==void 0&&js(e,n,z,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Me(e,n,c,a,t,null))}function lp(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,c=null,m=null,w=null,z=null;for(q in t){var R=t[q];if(t.hasOwnProperty(q)&&R!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":m=R;default:a.hasOwnProperty(q)||Me(e,n,q,null,a,R)}}for(var x in a){var q=a[x];if(R=t[x],a.hasOwnProperty(x)&&(q!=null||R!=null))switch(x){case"type":i=q;break;case"name":l=q;break;case"checked":w=q;break;case"defaultChecked":z=q;break;case"value":o=q;break;case"defaultValue":c=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:q!==R&&Me(e,n,x,q,a,R)}}Ru(e,o,c,m,w,z,i,l);return;case"select":q=o=c=x=null;for(i in t)if(m=t[i],t.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":q=m;default:a.hasOwnProperty(i)||Me(e,n,i,null,a,m)}for(l in a)if(i=a[l],m=t[l],a.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":x=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==m&&Me(e,n,l,i,a,m)}n=c,t=o,a=q,x!=null?Ma(e,!!t,x,!1):!!a!=!!t&&(n!=null?Ma(e,!!t,n,!0):Ma(e,!!t,t?[]:"",!1));return;case"textarea":q=x=null;for(c in t)if(l=t[c],t.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Me(e,n,c,null,a,l)}for(o in a)if(l=a[o],i=t[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":x=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&Me(e,n,o,l,a,i)}yr(e,x,q);return;case"option":for(var F in t)if(x=t[F],t.hasOwnProperty(F)&&x!=null&&!a.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:Me(e,n,F,null,a,x)}for(m in a)if(x=a[m],q=t[m],a.hasOwnProperty(m)&&x!==q&&(x!=null||q!=null))switch(m){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:Me(e,n,m,x,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)x=t[oe],t.hasOwnProperty(oe)&&x!=null&&!a.hasOwnProperty(oe)&&Me(e,n,oe,null,a,x);for(w in a)if(x=a[w],q=t[w],a.hasOwnProperty(w)&&x!==q&&(x!=null||q!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,n));break;default:Me(e,n,w,x,a,q)}return;default:if(Uu(n)){for(var Ge in t)x=t[Ge],t.hasOwnProperty(Ge)&&x!==void 0&&!a.hasOwnProperty(Ge)&&js(e,n,Ge,void 0,a,x);for(z in a)x=a[z],q=t[z],!a.hasOwnProperty(z)||x===q||x===void 0&&q===void 0||js(e,n,z,x,a,q);return}}for(var S in t)x=t[S],t.hasOwnProperty(S)&&x!=null&&!a.hasOwnProperty(S)&&Me(e,n,S,null,a,x);for(R in a)x=a[R],q=t[R],!a.hasOwnProperty(R)||x===q||x==null&&q==null||Me(e,n,R,x,a,q)}var Es=null,As=null;function ou(e){return e.nodeType===9?e:e.ownerDocument}function df(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ff(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ts=null;function ip(){var e=window.event;return e&&e.type==="popstate"?e===Ts?!1:(Ts=e,!0):(Ts=null,!1)}var hf=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(e){return mf.resolve(null).then(e).catch(sp)}:hf;function sp(e){setTimeout(function(){throw e})}function Ms(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),ni(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);ni(n)}function qs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":qs(t),Du(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function rp(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[rl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function cp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jn(e.nextSibling),e===null))return null;return e}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function pf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function yf(e,n,t){switch(n=ou(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Hn=new Map,gf=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var bt=Y.d;Y.d={f:dp,r:fp,D:hp,C:mp,L:pp,m:yp,X:vp,S:gp,M:bp};function dp(){var e=bt.f(),n=eu();return e||n}function fp(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Ic(n):bt.r(e)}var nl=typeof document>"u"?null:document;function vf(e,n,t){var a=nl;if(a&&typeof n=="string"&&n){var l=On(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),gf.has(l)||(gf.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),ln(n,"link",e),Fe(n),a.head.appendChild(n)))}}function hp(e){bt.D(e),vf("dns-prefetch",e,null)}function mp(e,n){bt.C(e,n),vf("preconnect",e,n)}function pp(e,n,t){bt.L(e,n,t);var a=nl;if(a&&e&&n){var l='link[rel="preload"][as="'+On(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+On(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+On(t.imageSizes)+'"]')):l+='[href="'+On(e)+'"]';var i=l;switch(n){case"style":i=tl(e);break;case"script":i=al(e)}Hn.has(i)||(e=W({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Hn.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Zl(i))||n==="script"&&a.querySelector(Kl(i))||(n=a.createElement("link"),ln(n,"link",e),Fe(n),a.head.appendChild(n)))}}function yp(e,n){bt.m(e,n);var t=nl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+On(a)+'"][href="'+On(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=al(e)}if(!Hn.has(i)&&(e=W({rel:"modulepreload",href:e},n),Hn.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Kl(i)))return}a=t.createElement("link"),ln(a,"link",e),Fe(a),t.head.appendChild(a)}}}function gp(e,n,t){bt.S(e,n,t);var a=nl;if(a&&e){var l=xa(a).hoistableStyles,i=tl(e);n=n||"default";var o=l.get(i);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(Zl(i)))c.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Hn.get(i))&&zs(e,t);var m=o=a.createElement("link");Fe(m),ln(m,"link",e),m._p=new Promise(function(w,z){m.onload=w,m.onerror=z}),m.addEventListener("load",function(){c.loading|=1}),m.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ru(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:c},l.set(i,o)}}}function vp(e,n){bt.X(e,n);var t=nl;if(t&&e){var a=xa(t).hoistableScripts,l=al(e),i=a.get(l);i||(i=t.querySelector(Kl(l)),i||(e=W({src:e,async:!0},n),(n=Hn.get(l))&&Os(e,n),i=t.createElement("script"),Fe(i),ln(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function bp(e,n){bt.M(e,n);var t=nl;if(t&&e){var a=xa(t).hoistableScripts,l=al(e),i=a.get(l);i||(i=t.querySelector(Kl(l)),i||(e=W({src:e,async:!0,type:"module"},n),(n=Hn.get(l))&&Os(e,n),i=t.createElement("script"),Fe(i),ln(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function bf(e,n,t,a){var l=(l=Xn.current)?su(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=tl(t.href),t=xa(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=tl(t.href);var i=xa(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Zl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Hn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Hn.set(e,t),i||wp(l,e,t,o.state))),n&&a===null)throw Error(r(528,""));return o}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=al(t),t=xa(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function tl(e){return'href="'+On(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function wf(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function wp(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),ln(n,"link",t),Fe(n),e.head.appendChild(n))}function al(e){return'[src="'+On(e)+'"]'}function Kl(e){return"script[async]"+e}function Sf(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+On(t.href)+'"]');if(a)return n.instance=a,Fe(a),a;var l=W({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),ln(a,"style",l),ru(a,t.precedence,e),n.instance=a;case"stylesheet":l=tl(t.href);var i=e.querySelector(Zl(l));if(i)return n.state.loading|=4,n.instance=i,Fe(i),i;a=wf(t),(l=Hn.get(l))&&zs(a,l),i=(e.ownerDocument||e).createElement("link"),Fe(i);var o=i;return o._p=new Promise(function(c,m){o.onload=c,o.onerror=m}),ln(i,"link",a),n.state.loading|=4,ru(i,t.precedence,e),n.instance=i;case"script":return i=al(t.src),(l=e.querySelector(Kl(i)))?(n.instance=l,Fe(l),l):(a=t,(l=Hn.get(i))&&(a=W({},t),Os(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),ln(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,ru(a,t.precedence,e));return n.instance}function ru(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===n)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function zs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Os(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cu=null;function jf(e,n,t){if(cu===null){var a=new Map,l=cu=new Map;l.set(t,a)}else l=cu,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[rl]||i[rn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(n)||"";o=e+o;var c=a.get(o);c?c.push(i):a.set(o,[i])}}return a}function Ef(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Sp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Af(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wl=null;function jp(){}function Ep(e,n,t){if(Wl===null)throw Error(r(475));var a=Wl;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=tl(t.href),i=e.querySelector(Zl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=du.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=i,Fe(i);return}i=e.ownerDocument||e,t=wf(t),(l=Hn.get(l))&&zs(t,l),i=i.createElement("link"),Fe(i);var o=i;o._p=new Promise(function(c,m){o.onload=c,o.onerror=m}),ln(i,"link",t),n.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=du.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ap(){if(Wl===null)throw Error(r(475));var e=Wl;return e.stylesheets&&e.count===0&&Ns(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Ns(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function du(){if(this.count--,this.count===0){if(this.stylesheets)Ns(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function Ns(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,n.forEach(xp,e),fu=null,du.call(e))}function xp(e,n){if(!(n.state.loading&4)){var t=fu.get(e);if(t)var a=t.get(null);else{t=new Map,fu.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}l=n.instance,o=l.getAttribute("data-precedence"),i=t.get(o)||a,i===a&&t.set(null,l),t.set(o,l),this.count++,a=du.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var $l={$$typeof:L,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Tp(e,n,t,a,l,i,o,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function xf(e,n,t,a,l,i,o,c,m,w,z,R){return e=new Tp(e,n,t,o,c,m,w,R),n=1,i===!0&&(n|=24),i=Bn(3,null,null,n),e.current=i,i.stateNode=e,n=so(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},Io(i),e}function Tf(e){return e?(e=Ra,e):Ra}function Mf(e,n,t,a,l,i){l=Tf(l),a.context===null?a.context=l:a.pendingContext=l,a=_t(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=Ut(e,a,n),t!==null&&(mn(t,e,n),Dl(t,e,n))}function qf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Cs(e,n){qf(e,n),(e=e.alternate)&&qf(e,n)}function zf(e){if(e.tag===13){var n=zt(e,67108864);n!==null&&mn(n,e,67108864),Cs(e,67108864)}}var hu=!0;function Mp(e,n,t,a){var l=D.T;D.T=null;var i=Y.p;try{Y.p=2,ks(e,n,t,a)}finally{Y.p=i,D.T=l}}function qp(e,n,t,a){var l=D.T;D.T=null;var i=Y.p;try{Y.p=8,ks(e,n,t,a)}finally{Y.p=i,D.T=l}}function ks(e,n,t,a){if(hu){var l=Ds(a);if(l===null)Ss(e,n,a,mu,t),Nf(e,a);else if(Op(l,e,n,t,a))a.stopPropagation();else if(Nf(e,a),n&4&&-1<zp.indexOf(e)){for(;l!==null;){var i=Aa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=pn(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var m=1<<31-V(o);c.entanglements[1]|=m,o&=~m}Pn(i),(Ue&6)===0&&($i=qn()+500,Jl(0))}}break;case 13:c=zt(i,2),c!==null&&mn(c,i,2),eu(),Cs(i,2)}if(i=Ds(a),i===null&&Ss(e,n,a,mu,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else Ss(e,n,a,null,t)}}function Ds(e){return e=Lu(e),Rs(e)}var mu=null;function Rs(e){if(mu=null,e=Pt(e),e!==null){var n=te(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=je(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function Of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case ul:return 2;case ol:return 8;case Wt:case zu:return 32;case fi:return 268435456;default:return 32}default:return 32}}var _s=!1,Qt=null,Jt=null,Vt=null,Fl=new Map,Pl=new Map,Xt=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nf(e,n){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function ei(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Aa(n),n!==null&&zf(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Op(e,n,t,a,l){switch(n){case"focusin":return Qt=ei(Qt,e,n,t,a,l),!0;case"dragenter":return Jt=ei(Jt,e,n,t,a,l),!0;case"mouseover":return Vt=ei(Vt,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return Fl.set(i,ei(Fl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Pl.set(i,ei(Pl.get(i)||null,e,n,t,a,l)),!0}return!1}function Cf(e){var n=Pt(e.target);if(n!==null){var t=te(n);if(t!==null){if(n=t.tag,n===13){if(n=je(t),n!==null){e.blockedOn=n,Ah(e.priority,function(){if(t.tag===13){var a=Tn(),l=zt(t,a);l!==null&&mn(l,t,a),Cs(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ds(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Bu=a,t.target.dispatchEvent(a),Bu=null}else return n=Aa(t),n!==null&&zf(n),e.blockedOn=t,!1;n.shift()}return!0}function kf(e,n,t){pu(e)&&t.delete(n)}function Np(){_s=!1,Qt!==null&&pu(Qt)&&(Qt=null),Jt!==null&&pu(Jt)&&(Jt=null),Vt!==null&&pu(Vt)&&(Vt=null),Fl.forEach(kf),Pl.forEach(kf)}function yu(e,n){e.blockedOn===n&&(e.blockedOn=null,_s||(_s=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Np)))}var gu=null;function Df(e){gu!==e&&(gu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Rs(a||t)===null)continue;break}var i=Aa(t);i!==null&&(e.splice(n,3),n-=3,xo(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function ni(e){function n(m){return yu(m,e)}Qt!==null&&yu(Qt,e),Jt!==null&&yu(Jt,e),Vt!==null&&yu(Vt,e),Fl.forEach(n),Pl.forEach(n);for(var t=0;t<Xt.length;t++){var a=Xt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Xt.length&&(t=Xt[0],t.blockedOn===null);)Cf(t),t.blockedOn===null&&Xt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],o=l[vn]||null;if(typeof i=="function")o||Df(t);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[vn]||null)c=o.formAction;else if(Rs(l)!==null)continue}else c=o.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),Df(t)}}}function Us(e){this._internalRoot=e}vu.prototype.render=Us.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=Tn();Mf(t,a,e,n,null,null)},vu.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Fa(),Mf(e.current,2,null,e,null,null),eu(),n[Ea]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var n=or();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xt.length&&n!==0&&n<Xt[t].priority;t++);Xt.splice(t,0,e),t===0&&Cf(e)}};var Rf=f.version;if(Rf!=="19.0.0")throw Error(r(527,Rf,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=O(n),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var Cp={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:D,findFiberByHostInstance:Pt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{$t=bu.inject(Cp),fn=bu}catch{}}return ai.createRoot=function(e,n){if(!h(e))throw Error(r(299));var t=!1,a="",l=$c,i=Fc,o=Pc,c=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=xf(e,1,!1,null,null,t,a,l,i,o,c,null),e[Ea]=n.current,ws(e.nodeType===8?e.parentNode:e),new Us(n)},ai.hydrateRoot=function(e,n,t){if(!h(e))throw Error(r(299));var a=!1,l="",i=$c,o=Fc,c=Pc,m=null,w=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks),t.formState!==void 0&&(w=t.formState)),n=xf(e,1,!0,n,t??null,a,l,i,o,c,m,w),n.context=Tf(null),t=n.current,a=Tn(),l=_t(a),l.callback=null,Ut(t,l,a),n.current.lanes=a,ke(n,a),Pn(n),e[Ea]=n.current,ws(e),new vu(n)},ai.version="19.0.0",ai}var Jf;function Ip(){if(Jf)return Hs.exports;Jf=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),Hs.exports=Gp(),Hs.exports}var Qp=Ip();const Jp=lh(Qp);var li={},Vf;function Vp(){if(Vf)return li;Vf=1,Object.defineProperty(li,"__esModule",{value:!0}),li.parse=A,li.serialize=p;const u=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,f=/^[\u0021-\u003A\u003C-\u007E]*$/,d=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,h=Object.prototype.toString,y=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function A(C,L){const k=new y,J=C.length;if(J<2)return k;const G=(L==null?void 0:L.decode)||M;let U=0;do{const K=C.indexOf("=",U);if(K===-1)break;const X=C.indexOf(";",U),ce=X===-1?J:X;if(K>ce){U=C.lastIndexOf(";",K-1)+1;continue}const ee=T(C,U,K),Se=g(C,K,ee),De=C.slice(ee,Se);if(k[De]===void 0){let xe=T(C,K+1,ce),D=g(C,ce,xe);const W=G(C.slice(xe,D));k[De]=W}U=ce+1}while(U<J);return k}function T(C,L,k){do{const J=C.charCodeAt(L);if(J!==32&&J!==9)return L}while(++L<k);return k}function g(C,L,k){for(;L>k;){const J=C.charCodeAt(--L);if(J!==32&&J!==9)return L+1}return k}function p(C,L,k){const J=(k==null?void 0:k.encode)||encodeURIComponent;if(!u.test(C))throw new TypeError(`argument name is invalid: ${C}`);const G=J(L);if(!f.test(G))throw new TypeError(`argument val is invalid: ${L}`);let U=C+"="+G;if(!k)return U;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);U+="; Max-Age="+k.maxAge}if(k.domain){if(!d.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);U+="; Domain="+k.domain}if(k.path){if(!r.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);U+="; Path="+k.path}if(k.expires){if(!_(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);U+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(U+="; HttpOnly"),k.secure&&(U+="; Secure"),k.partitioned&&(U+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":U+="; Priority=Low";break;case"medium":U+="; Priority=Medium";break;case"high":U+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":U+="; SameSite=Strict";break;case"lax":U+="; SameSite=Lax";break;case"none":U+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return U}function M(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function _(C){return h.call(C)==="[object Date]"}return li}Vp();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xf="popstate";function Xp(u={}){function f(h,y){let{pathname:A="/",search:T="",hash:g=""}=wa(h.location.hash.substring(1));return!A.startsWith("/")&&!A.startsWith(".")&&(A="/"+A),Ks("",{pathname:A,search:T,hash:g},y.state&&y.state.usr||null,y.state&&y.state.key||"default")}function d(h,y){let A=h.document.querySelector("base"),T="";if(A&&A.getAttribute("href")){let g=h.location.href,p=g.indexOf("#");T=p===-1?g:g.slice(0,p)}return T+"#"+(typeof y=="string"?y:si(y))}function r(h,y){Vn(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(y)})`)}return Kp(f,d,r,u)}function Be(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}function Vn(u,f){if(!u){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Zp(){return Math.random().toString(36).substring(2,10)}function Zf(u,f){return{usr:u.state,key:u.key,idx:f}}function Ks(u,f,d=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof f=="string"?wa(f):f,state:d,key:f&&f.key||r||Zp()}}function si({pathname:u="/",search:f="",hash:d=""}){return f&&f!=="?"&&(u+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function wa(u){let f={};if(u){let d=u.indexOf("#");d>=0&&(f.hash=u.substring(d),u=u.substring(0,d));let r=u.indexOf("?");r>=0&&(f.search=u.substring(r),u=u.substring(0,r)),u&&(f.pathname=u)}return f}function Kp(u,f,d,r={}){let{window:h=document.defaultView,v5Compat:y=!1}=r,A=h.history,T="POP",g=null,p=M();p==null&&(p=0,A.replaceState({...A.state,idx:p},""));function M(){return(A.state||{idx:null}).idx}function _(){T="POP";let G=M(),U=G==null?null:G-p;p=G,g&&g({action:T,location:J.location,delta:U})}function C(G,U){T="PUSH";let K=Ks(J.location,G,U);d&&d(K,G),p=M()+1;let X=Zf(K,p),ce=J.createHref(K);try{A.pushState(X,"",ce)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;h.location.assign(ce)}y&&g&&g({action:T,location:J.location,delta:1})}function L(G,U){T="REPLACE";let K=Ks(J.location,G,U);d&&d(K,G),p=M();let X=Zf(K,p),ce=J.createHref(K);A.replaceState(X,"",ce),y&&g&&g({action:T,location:J.location,delta:0})}function k(G){let U=h.location.origin!=="null"?h.location.origin:h.location.href,K=typeof G=="string"?G:si(G);return K=K.replace(/ $/,"%20"),Be(U,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,U)}let J={get action(){return T},get location(){return u(h,A)},listen(G){if(g)throw new Error("A history only accepts one active listener");return h.addEventListener(Xf,_),g=G,()=>{h.removeEventListener(Xf,_),g=null}},createHref(G){return f(h,G)},createURL:k,encodeLocation(G){let U=k(G);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:C,replace:L,go(G){return A.go(G)}};return J}function ih(u,f,d="/"){return Wp(u,f,d,!1)}function Wp(u,f,d,r){let h=typeof f=="string"?wa(f):f,y=St(h.pathname||"/",d);if(y==null)return null;let A=uh(u);$p(A);let T=null;for(let g=0;T==null&&g<A.length;++g){let p=sy(y);T=uy(A[g],p,r)}return T}function uh(u,f=[],d=[],r=""){let h=(y,A,T)=>{let g={relativePath:T===void 0?y.path||"":T,caseSensitive:y.caseSensitive===!0,childrenIndex:A,route:y};g.relativePath.startsWith("/")&&(Be(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length));let p=wt([r,g.relativePath]),M=d.concat(g);y.children&&y.children.length>0&&(Be(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),uh(y.children,f,M,p)),!(y.path==null&&!y.index)&&f.push({path:p,score:ly(p,y.index),routesMeta:M})};return u.forEach((y,A)=>{var T;if(y.path===""||!((T=y.path)!=null&&T.includes("?")))h(y,A);else for(let g of oh(y.path))h(y,A,g)}),f}function oh(u){let f=u.split("/");if(f.length===0)return[];let[d,...r]=f,h=d.endsWith("?"),y=d.replace(/\?$/,"");if(r.length===0)return h?[y,""]:[y];let A=oh(r.join("/")),T=[];return T.push(...A.map(g=>g===""?y:[y,g].join("/"))),h&&T.push(...A),T.map(g=>u.startsWith("/")&&g===""?"/":g)}function $p(u){u.sort((f,d)=>f.score!==d.score?d.score-f.score:iy(f.routesMeta.map(r=>r.childrenIndex),d.routesMeta.map(r=>r.childrenIndex)))}var Fp=/^:[\w-]+$/,Pp=3,ey=2,ny=1,ty=10,ay=-2,Kf=u=>u==="*";function ly(u,f){let d=u.split("/"),r=d.length;return d.some(Kf)&&(r+=ay),f&&(r+=ey),d.filter(h=>!Kf(h)).reduce((h,y)=>h+(Fp.test(y)?Pp:y===""?ny:ty),r)}function iy(u,f){return u.length===f.length&&u.slice(0,-1).every((r,h)=>r===f[h])?u[u.length-1]-f[f.length-1]:0}function uy(u,f,d=!1){let{routesMeta:r}=u,h={},y="/",A=[];for(let T=0;T<r.length;++T){let g=r[T],p=T===r.length-1,M=y==="/"?f:f.slice(y.length)||"/",_=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},M),C=g.route;if(!_&&p&&d&&!r[r.length-1].route.index&&(_=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},M)),!_)return null;Object.assign(h,_.params),A.push({params:h,pathname:wt([y,_.pathname]),pathnameBase:fy(wt([y,_.pathnameBase])),route:C}),_.pathnameBase!=="/"&&(y=wt([y,_.pathnameBase]))}return A}function Eu(u,f){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[d,r]=oy(u.path,u.caseSensitive,u.end),h=f.match(d);if(!h)return null;let y=h[0],A=y.replace(/(.)\/+$/,"$1"),T=h.slice(1);return{params:r.reduce((p,{paramName:M,isOptional:_},C)=>{if(M==="*"){let k=T[C]||"";A=y.slice(0,y.length-k.length).replace(/(.)\/+$/,"$1")}const L=T[C];return _&&!L?p[M]=void 0:p[M]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:y,pathnameBase:A,pattern:u}}function oy(u,f=!1,d=!0){Vn(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],h="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(A,T,g)=>(r.push({paramName:T,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(r.push({paramName:"*"}),h+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":u!==""&&u!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,f?void 0:"i"),r]}function sy(u){try{return u.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Vn(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),u}}function St(u,f){if(f==="/")return u;if(!u.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,r=u.charAt(d);return r&&r!=="/"?null:u.slice(d)||"/"}function ry(u,f="/"){let{pathname:d,search:r="",hash:h=""}=typeof u=="string"?wa(u):u;return{pathname:d?d.startsWith("/")?d:cy(d,f):f,search:hy(r),hash:my(h)}}function cy(u,f){let d=f.replace(/\/+$/,"").split("/");return u.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Qs(u,f,d,r){return`Cannot include a '${u}' character in a manually specified \`to.${f}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dy(u){return u.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function sh(u){let f=dy(u);return f.map((d,r)=>r===f.length-1?d.pathname:d.pathnameBase)}function rh(u,f,d,r=!1){let h;typeof u=="string"?h=wa(u):(h={...u},Be(!h.pathname||!h.pathname.includes("?"),Qs("?","pathname","search",h)),Be(!h.pathname||!h.pathname.includes("#"),Qs("#","pathname","hash",h)),Be(!h.search||!h.search.includes("#"),Qs("#","search","hash",h)));let y=u===""||h.pathname==="",A=y?"/":h.pathname,T;if(A==null)T=d;else{let _=f.length-1;if(!r&&A.startsWith("..")){let C=A.split("/");for(;C[0]==="..";)C.shift(),_-=1;h.pathname=C.join("/")}T=_>=0?f[_]:"/"}let g=ry(h,T),p=A&&A!=="/"&&A.endsWith("/"),M=(y||A===".")&&d.endsWith("/");return!g.pathname.endsWith("/")&&(p||M)&&(g.pathname+="/"),g}var wt=u=>u.join("/").replace(/\/\/+/g,"/"),fy=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,my=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function py(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var ch=["POST","PUT","PATCH","DELETE"];new Set(ch);var yy=["GET",...ch];new Set(yy);var ll=j.createContext(null);ll.displayName="DataRouter";var Au=j.createContext(null);Au.displayName="DataRouterState";var dh=j.createContext({isTransitioning:!1});dh.displayName="ViewTransition";var gy=j.createContext(new Map);gy.displayName="Fetchers";var vy=j.createContext(null);vy.displayName="Await";var et=j.createContext(null);et.displayName="Navigation";var ri=j.createContext(null);ri.displayName="Location";var jt=j.createContext({outlet:null,matches:[],isDataRoute:!1});jt.displayName="Route";var er=j.createContext(null);er.displayName="RouteError";function by(u,{relative:f}={}){Be(ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:r}=j.useContext(et),{hash:h,pathname:y,search:A}=di(u,{relative:f}),T=y;return d!=="/"&&(T=y==="/"?d:wt([d,y])),r.createHref({pathname:T,search:A,hash:h})}function ci(){return j.useContext(ri)!=null}function Sa(){return Be(ci(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ri).location}var fh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hh(u){j.useContext(et).static||j.useLayoutEffect(u)}function wy(){let{isDataRoute:u}=j.useContext(jt);return u?ky():Sy()}function Sy(){Be(ci(),"useNavigate() may be used only in the context of a <Router> component.");let u=j.useContext(ll),{basename:f,navigator:d}=j.useContext(et),{matches:r}=j.useContext(jt),{pathname:h}=Sa(),y=JSON.stringify(sh(r)),A=j.useRef(!1);return hh(()=>{A.current=!0}),j.useCallback((g,p={})=>{if(Vn(A.current,fh),!A.current)return;if(typeof g=="number"){d.go(g);return}let M=rh(g,JSON.parse(y),h,p.relative==="path");u==null&&f!=="/"&&(M.pathname=M.pathname==="/"?f:wt([f,M.pathname])),(p.replace?d.replace:d.push)(M,p.state,p)},[f,d,y,h,u])}j.createContext(null);function di(u,{relative:f}={}){let{matches:d}=j.useContext(jt),{pathname:r}=Sa(),h=JSON.stringify(sh(d));return j.useMemo(()=>rh(u,JSON.parse(h),r,f==="path"),[u,h,r,f])}function jy(u,f){return mh(u,f)}function mh(u,f,d,r){var K;Be(ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h,static:y}=j.useContext(et),{matches:A}=j.useContext(jt),T=A[A.length-1],g=T?T.params:{},p=T?T.pathname:"/",M=T?T.pathnameBase:"/",_=T&&T.route;{let X=_&&_.path||"";ph(p,!_||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let C=Sa(),L;if(f){let X=typeof f=="string"?wa(f):f;Be(M==="/"||((K=X.pathname)==null?void 0:K.startsWith(M)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${X.pathname}" was given in the \`location\` prop.`),L=X}else L=C;let k=L.pathname||"/",J=k;if(M!=="/"){let X=M.replace(/^\//,"").split("/");J="/"+k.replace(/^\//,"").split("/").slice(X.length).join("/")}let G=!y&&d&&d.matches&&d.matches.length>0?d.matches:ih(u,{pathname:J});Vn(_||G!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Vn(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=My(G&&G.map(X=>Object.assign({},X,{params:Object.assign({},g,X.params),pathname:wt([M,h.encodeLocation?h.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?M:wt([M,h.encodeLocation?h.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),A,d,r);return f&&U?j.createElement(ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},U):U}function Ey(){let u=Cy(),f=py(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),d=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:r},y={padding:"2px 4px",backgroundColor:r},A=null;return console.error("Error handled by React Router default ErrorBoundary:",u),A=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:y},"ErrorBoundary")," or"," ",j.createElement("code",{style:y},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},f),d?j.createElement("pre",{style:h},d):null,A)}var Ay=j.createElement(Ey,null),xy=class extends j.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,f){return f.location!==u.location||f.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:f.error,location:f.location,revalidation:u.revalidation||f.revalidation}}componentDidCatch(u,f){console.error("React Router caught the following error during render",u,f)}render(){return this.state.error!==void 0?j.createElement(jt.Provider,{value:this.props.routeContext},j.createElement(er.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ty({routeContext:u,match:f,children:d}){let r=j.useContext(ll);return r&&r.static&&r.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=f.route.id),j.createElement(jt.Provider,{value:u},d)}function My(u,f=[],d=null,r=null){if(u==null){if(!d)return null;if(d.errors)u=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)u=d.matches;else return null}let h=u,y=d==null?void 0:d.errors;if(y!=null){let g=h.findIndex(p=>p.route.id&&(y==null?void 0:y[p.route.id])!==void 0);Be(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),h=h.slice(0,Math.min(h.length,g+1))}let A=!1,T=-1;if(d)for(let g=0;g<h.length;g++){let p=h[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(T=g),p.route.id){let{loaderData:M,errors:_}=d,C=p.route.loader&&!M.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||C){A=!0,T>=0?h=h.slice(0,T+1):h=[h[0]];break}}}return h.reduceRight((g,p,M)=>{let _,C=!1,L=null,k=null;d&&(_=y&&p.route.id?y[p.route.id]:void 0,L=p.route.errorElement||Ay,A&&(T<0&&M===0?(ph("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,k=null):T===M&&(C=!0,k=p.route.hydrateFallbackElement||null)));let J=f.concat(h.slice(0,M+1)),G=()=>{let U;return _?U=L:C?U=k:p.route.Component?U=j.createElement(p.route.Component,null):p.route.element?U=p.route.element:U=g,j.createElement(Ty,{match:p,routeContext:{outlet:g,matches:J,isDataRoute:d!=null},children:U})};return d&&(p.route.ErrorBoundary||p.route.errorElement||M===0)?j.createElement(xy,{location:d.location,revalidation:d.revalidation,component:L,error:_,children:G(),routeContext:{outlet:null,matches:J,isDataRoute:!0}}):G()},null)}function nr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qy(u){let f=j.useContext(ll);return Be(f,nr(u)),f}function zy(u){let f=j.useContext(Au);return Be(f,nr(u)),f}function Oy(u){let f=j.useContext(jt);return Be(f,nr(u)),f}function tr(u){let f=Oy(u),d=f.matches[f.matches.length-1];return Be(d.route.id,`${u} can only be used on routes that contain a unique "id"`),d.route.id}function Ny(){return tr("useRouteId")}function Cy(){var r;let u=j.useContext(er),f=zy("useRouteError"),d=tr("useRouteError");return u!==void 0?u:(r=f.errors)==null?void 0:r[d]}function ky(){let{router:u}=qy("useNavigate"),f=tr("useNavigate"),d=j.useRef(!1);return hh(()=>{d.current=!0}),j.useCallback(async(h,y={})=>{Vn(d.current,fh),d.current&&(typeof h=="number"?u.navigate(h):await u.navigate(h,{fromRouteId:f,...y}))},[u,f])}var Wf={};function ph(u,f,d){!f&&!Wf[u]&&(Wf[u]=!0,Vn(!1,d))}j.memo(Dy);function Dy({routes:u,future:f,state:d}){return mh(u,void 0,d,f)}function Ws(u){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ry({basename:u="/",children:f=null,location:d,navigationType:r="POP",navigator:h,static:y=!1}){Be(!ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=u.replace(/^\/*/,"/"),T=j.useMemo(()=>({basename:A,navigator:h,static:y,future:{}}),[A,h,y]);typeof d=="string"&&(d=wa(d));let{pathname:g="/",search:p="",hash:M="",state:_=null,key:C="default"}=d,L=j.useMemo(()=>{let k=St(g,A);return k==null?null:{location:{pathname:k,search:p,hash:M,state:_,key:C},navigationType:r}},[A,g,p,M,_,C,r]);return Vn(L!=null,`<Router basename="${A}"> is not able to match the URL "${g}${p}${M}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:j.createElement(et.Provider,{value:T},j.createElement(ri.Provider,{children:f,value:L}))}function _y({children:u,location:f}){return jy($s(u),f)}function $s(u,f=[]){let d=[];return j.Children.forEach(u,(r,h)=>{if(!j.isValidElement(r))return;let y=[...f,h];if(r.type===j.Fragment){d.push.apply(d,$s(r.props.children,y));return}Be(r.type===Ws,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!r.props.index||!r.props.children,"An index route cannot have child routes.");let A={id:r.props.id||y.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(A.children=$s(r.props.children,y)),d.push(A)}),d}var Su="get",ju="application/x-www-form-urlencoded";function xu(u){return u!=null&&typeof u.tagName=="string"}function Uy(u){return xu(u)&&u.tagName.toLowerCase()==="button"}function By(u){return xu(u)&&u.tagName.toLowerCase()==="form"}function Ly(u){return xu(u)&&u.tagName.toLowerCase()==="input"}function Hy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Yy(u,f){return u.button===0&&(!f||f==="_self")&&!Hy(u)}var wu=null;function Gy(){if(wu===null)try{new FormData(document.createElement("form"),0),wu=!1}catch{wu=!0}return wu}var Iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Js(u){return u!=null&&!Iy.has(u)?(Vn(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):u}function Qy(u,f){let d,r,h,y,A;if(By(u)){let T=u.getAttribute("action");r=T?St(T,f):null,d=u.getAttribute("method")||Su,h=Js(u.getAttribute("enctype"))||ju,y=new FormData(u)}else if(Uy(u)||Ly(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=u.getAttribute("formaction")||T.getAttribute("action");if(r=g?St(g,f):null,d=u.getAttribute("formmethod")||T.getAttribute("method")||Su,h=Js(u.getAttribute("formenctype"))||Js(T.getAttribute("enctype"))||ju,y=new FormData(T,u),!Gy()){let{name:p,type:M,value:_}=u;if(M==="image"){let C=p?`${p}.`:"";y.append(`${C}x`,"0"),y.append(`${C}y`,"0")}else p&&y.append(p,_)}}else{if(xu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Su,r=null,h=ju,A=u}return y&&h==="text/plain"&&(A=y,y=void 0),{action:r,method:d.toLowerCase(),encType:h,formData:y,body:A}}function ar(u,f){if(u===!1||u===null||typeof u>"u")throw new Error(f)}async function Jy(u,f){if(u.id in f)return f[u.id];try{let d=await import(u.module);return f[u.id]=d,d}catch(d){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Xy(u,f,d){let r=await Promise.all(u.map(async h=>{let y=f.routes[h.route.id];if(y){let A=await Jy(y,d);return A.links?A.links():[]}return[]}));return $y(r.flat(1).filter(Vy).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function $f(u,f,d,r,h,y){let A=(g,p)=>d[p]?g.route.id!==d[p].route.id:!0,T=(g,p)=>{var M;return d[p].pathname!==g.pathname||((M=d[p].route.path)==null?void 0:M.endsWith("*"))&&d[p].params["*"]!==g.params["*"]};return y==="assets"?f.filter((g,p)=>A(g,p)||T(g,p)):y==="data"?f.filter((g,p)=>{var _;let M=r.routes[g.route.id];if(!M||!M.hasLoader)return!1;if(A(g,p)||T(g,p))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((_=d[0])==null?void 0:_.params)||{},nextUrl:new URL(u,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Zy(u,f,{includeHydrateFallback:d}={}){return Ky(u.map(r=>{let h=f.routes[r.route.id];if(!h)return[];let y=[h.module];return h.clientActionModule&&(y=y.concat(h.clientActionModule)),h.clientLoaderModule&&(y=y.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(y=y.concat(h.hydrateFallbackModule)),h.imports&&(y=y.concat(h.imports)),y}).flat(1))}function Ky(u){return[...new Set(u)]}function Wy(u){let f={},d=Object.keys(u).sort();for(let r of d)f[r]=u[r];return f}function $y(u,f){let d=new Set;return new Set(f),u.reduce((r,h)=>{let y=JSON.stringify(Wy(h));return d.has(y)||(d.add(y),r.push({key:y,link:h})),r},[])}function Fy(u,f){let d=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return d.pathname==="/"?d.pathname="_root.data":f&&St(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.data`:d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function yh(){let u=j.useContext(ll);return ar(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Py(){let u=j.useContext(Au);return ar(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var lr=j.createContext(void 0);lr.displayName="FrameworkContext";function gh(){let u=j.useContext(lr);return ar(u,"You must render this element inside a <HydratedRouter> element"),u}function eg(u,f){let d=j.useContext(lr),[r,h]=j.useState(!1),[y,A]=j.useState(!1),{onFocus:T,onBlur:g,onMouseEnter:p,onMouseLeave:M,onTouchStart:_}=f,C=j.useRef(null);j.useEffect(()=>{if(u==="render"&&A(!0),u==="viewport"){let J=U=>{U.forEach(K=>{A(K.isIntersecting)})},G=new IntersectionObserver(J,{threshold:.5});return C.current&&G.observe(C.current),()=>{G.disconnect()}}},[u]),j.useEffect(()=>{if(r){let J=setTimeout(()=>{A(!0)},100);return()=>{clearTimeout(J)}}},[r]);let L=()=>{h(!0)},k=()=>{h(!1),A(!1)};return d?u!=="intent"?[y,C,{}]:[y,C,{onFocus:ii(T,L),onBlur:ii(g,k),onMouseEnter:ii(p,L),onMouseLeave:ii(M,k),onTouchStart:ii(_,L)}]:[!1,C,{}]}function ii(u,f){return d=>{u&&u(d),d.defaultPrevented||f(d)}}function ng({page:u,...f}){let{router:d}=yh(),r=j.useMemo(()=>ih(d.routes,u,d.basename),[d.routes,u,d.basename]);return r?j.createElement(ag,{page:u,matches:r,...f}):null}function tg(u){let{manifest:f,routeModules:d}=gh(),[r,h]=j.useState([]);return j.useEffect(()=>{let y=!1;return Xy(u,f,d).then(A=>{y||h(A)}),()=>{y=!0}},[u,f,d]),r}function ag({page:u,matches:f,...d}){let r=Sa(),{manifest:h,routeModules:y}=gh(),{basename:A}=yh(),{loaderData:T,matches:g}=Py(),p=j.useMemo(()=>$f(u,f,g,h,r,"data"),[u,f,g,h,r]),M=j.useMemo(()=>$f(u,f,g,h,r,"assets"),[u,f,g,h,r]),_=j.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let k=new Set,J=!1;if(f.forEach(U=>{var X;let K=h.routes[U.route.id];!K||!K.hasLoader||(!p.some(ce=>ce.route.id===U.route.id)&&U.route.id in T&&((X=y[U.route.id])!=null&&X.shouldRevalidate)||K.hasClientLoader?J=!0:k.add(U.route.id))}),k.size===0)return[];let G=Fy(u,A);return J&&k.size>0&&G.searchParams.set("_routes",f.filter(U=>k.has(U.route.id)).map(U=>U.route.id).join(",")),[G.pathname+G.search]},[A,T,r,h,p,f,u,y]),C=j.useMemo(()=>Zy(M,h),[M,h]),L=tg(M);return j.createElement(j.Fragment,null,_.map(k=>j.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),C.map(k=>j.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),L.map(({key:k,link:J})=>j.createElement("link",{key:k,...J})))}function lg(...u){return f=>{u.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vh&&(window.__reactRouterVersion="7.4.0")}catch{}function ig({basename:u,children:f,window:d}){let r=j.useRef();r.current==null&&(r.current=Xp({window:d,v5Compat:!0}));let h=r.current,[y,A]=j.useState({action:h.action,location:h.location}),T=j.useCallback(g=>{j.startTransition(()=>A(g))},[A]);return j.useLayoutEffect(()=>h.listen(T),[h,T]),j.createElement(Ry,{basename:u,children:f,location:y.location,navigationType:y.action,navigator:h})}var bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tu=j.forwardRef(function({onClick:f,discover:d="render",prefetch:r="none",relative:h,reloadDocument:y,replace:A,state:T,target:g,to:p,preventScrollReset:M,viewTransition:_,...C},L){let{basename:k}=j.useContext(et),J=typeof p=="string"&&bh.test(p),G,U=!1;if(typeof p=="string"&&J&&(G=p,vh))try{let D=new URL(window.location.href),W=p.startsWith("//")?new URL(D.protocol+p):new URL(p),I=St(W.pathname,k);W.origin===D.origin&&I!=null?p=I+W.search+W.hash:U=!0}catch{Vn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=by(p,{relative:h}),[X,ce,ee]=eg(r,C),Se=rg(p,{replace:A,state:T,target:g,preventScrollReset:M,relative:h,viewTransition:_});function De(D){f&&f(D),D.defaultPrevented||Se(D)}let xe=j.createElement("a",{...C,...ee,href:G||K,onClick:U||y?f:De,ref:lg(L,ce),target:g,"data-discover":!J&&d==="render"?"true":void 0});return X&&!J?j.createElement(j.Fragment,null,xe,j.createElement(ng,{page:K})):xe});Tu.displayName="Link";var ug=j.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:r="",end:h=!1,style:y,to:A,viewTransition:T,children:g,...p},M){let _=di(A,{relative:p.relative}),C=Sa(),L=j.useContext(Au),{navigator:k,basename:J}=j.useContext(et),G=L!=null&&mg(_)&&T===!0,U=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,K=C.pathname,X=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;d||(K=K.toLowerCase(),X=X?X.toLowerCase():null,U=U.toLowerCase()),X&&J&&(X=St(X,J)||X);const ce=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let ee=K===U||!h&&K.startsWith(U)&&K.charAt(ce)==="/",Se=X!=null&&(X===U||!h&&X.startsWith(U)&&X.charAt(U.length)==="/"),De={isActive:ee,isPending:Se,isTransitioning:G},xe=ee?f:void 0,D;typeof r=="function"?D=r(De):D=[r,ee?"active":null,Se?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let W=typeof y=="function"?y(De):y;return j.createElement(Tu,{...p,"aria-current":xe,className:D,ref:M,style:W,to:A,viewTransition:T},typeof g=="function"?g(De):g)});ug.displayName="NavLink";var og=j.forwardRef(({discover:u="render",fetcherKey:f,navigate:d,reloadDocument:r,replace:h,state:y,method:A=Su,action:T,onSubmit:g,relative:p,preventScrollReset:M,viewTransition:_,...C},L)=>{let k=fg(),J=hg(T,{relative:p}),G=A.toLowerCase()==="get"?"get":"post",U=typeof T=="string"&&bh.test(T),K=X=>{if(g&&g(X),X.defaultPrevented)return;X.preventDefault();let ce=X.nativeEvent.submitter,ee=(ce==null?void 0:ce.getAttribute("formmethod"))||A;k(ce||X.currentTarget,{fetcherKey:f,method:ee,navigate:d,replace:h,state:y,relative:p,preventScrollReset:M,viewTransition:_})};return j.createElement("form",{ref:L,method:G,action:J,onSubmit:r?g:K,...C,"data-discover":!U&&u==="render"?"true":void 0})});og.displayName="Form";function sg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wh(u){let f=j.useContext(ll);return Be(f,sg(u)),f}function rg(u,{target:f,replace:d,state:r,preventScrollReset:h,relative:y,viewTransition:A}={}){let T=wy(),g=Sa(),p=di(u,{relative:y});return j.useCallback(M=>{if(Yy(M,f)){M.preventDefault();let _=d!==void 0?d:si(g)===si(p);T(u,{replace:_,state:r,preventScrollReset:h,relative:y,viewTransition:A})}},[g,T,p,d,r,f,u,h,y,A])}var cg=0,dg=()=>`__${String(++cg)}__`;function fg(){let{router:u}=wh("useSubmit"),{basename:f}=j.useContext(et),d=Ny();return j.useCallback(async(r,h={})=>{let{action:y,method:A,encType:T,formData:g,body:p}=Qy(r,f);if(h.navigate===!1){let M=h.fetcherKey||dg();await u.fetch(M,d,h.action||y,{preventScrollReset:h.preventScrollReset,formData:g,body:p,formMethod:h.method||A,formEncType:h.encType||T,flushSync:h.flushSync})}else await u.navigate(h.action||y,{preventScrollReset:h.preventScrollReset,formData:g,body:p,formMethod:h.method||A,formEncType:h.encType||T,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,f,d])}function hg(u,{relative:f}={}){let{basename:d}=j.useContext(et),r=j.useContext(jt);Be(r,"useFormAction must be used inside a RouteContext");let[h]=r.matches.slice(-1),y={...di(u||".",{relative:f})},A=Sa();if(u==null){y.search=A.search;let T=new URLSearchParams(y.search),g=T.getAll("index");if(g.some(M=>M==="")){T.delete("index"),g.filter(_=>_).forEach(_=>T.append("index",_));let M=T.toString();y.search=M?`?${M}`:""}}return(!u||u===".")&&h.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(y.pathname=y.pathname==="/"?d:wt([d,y.pathname])),si(y)}function mg(u,f={}){let d=j.useContext(dh);Be(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=wh("useViewTransitionState"),h=di(u,{relative:f.relative});if(!d.isTransitioning)return!1;let y=St(d.currentLocation.pathname,r)||d.currentLocation.pathname,A=St(d.nextLocation.pathname,r)||d.nextLocation.pathname;return Eu(h.pathname,A)!=null||Eu(h.pathname,y)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yg=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,d,r)=>r?r.toUpperCase():d.toLowerCase()),Ff=u=>{const f=yg(u);return f.charAt(0).toUpperCase()+f.slice(1)},Sh=(...u)=>u.filter((f,d,r)=>!!f&&f.trim()!==""&&r.indexOf(f)===d).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=j.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:h="",children:y,iconNode:A,...T},g)=>j.createElement("svg",{ref:g,...gg,width:f,height:f,stroke:u,strokeWidth:r?Number(d)*24/Number(f):d,className:Sh("lucide",h),...T},[...A.map(([p,M])=>j.createElement(p,M)),...Array.isArray(y)?y:[y]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(u,f)=>{const d=j.forwardRef(({className:r,...h},y)=>j.createElement(vg,{ref:y,iconNode:f,className:Sh(`lucide-${pg(Ff(u))}`,`lucide-${u}`,r),...h}));return d.displayName=Ff(u),d};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],Pf=Ae("audio-waveform",bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],eh=Ae("award",wg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],jg=Ae("book-open",Sg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ag=Ae("chevron-left",Eg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nh=Ae("chevron-right",xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ui=Ae("circle-help",Tg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],qg=Ae("fast-forward",Mg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Og=Ae("house",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Cg=Ae("info",Ng);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],oi=Ae("medal",kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],Rg=Ae("mic",Dg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ir=Ae("music",_g);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Bg=Ae("pause",Ug);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Hg=Ae("play",Lg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gg=Ae("plus",Yg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],Qg=Ae("rewind",Ig);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],Vg=Ae("shuffle",Jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],Zg=Ae("skip-forward",Xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Wg=Ae("sliders-vertical",Kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],Fg=Ae("timer-off",$g);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],ev=Ae("timer-reset",Pg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],tv=Ae("timer",nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],lv=Ae("trash-2",av);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Vs=Ae("trophy",iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],jh=Ae("users",uv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Eh=Ae("volume-2",ov);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],rv=Ae("volume-x",sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fs=Ae("x",cv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xs=Ae("zap",dv),fv=()=>s.jsx("main",{className:"accueil",children:s.jsxs("div",{className:"accueil-container",children:[s.jsxs("header",{className:"accueil-header",children:[s.jsx(ir,{className:"logo",size:48}),s.jsx("h1",{children:"BlindTest Master"})]}),s.jsxs("section",{className:"intro",children:[s.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),s.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),s.jsxs("section",{className:"manches-preview",children:[s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 1"}),s.jsx("p",{children:"Easy BlindTest"}),s.jsx("span",{className:"emoji",children:"🎵"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 2"}),s.jsx("p",{children:"dnilBtseT"}),s.jsx("span",{className:"emoji",children:"🎙️"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 3"}),s.jsx("p",{children:"X-trem BlindTest"}),s.jsx("span",{className:"emoji",children:"🔀"})]})]}),s.jsx(Tu,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),hv=({manche:u})=>u?s.jsxs("section",{className:"info-manche",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-emoji",children:u.emoji}),s.jsxs("h2",{children:["Manche ",u.id,": ",u.nom]})]}),s.jsxs("div",{className:"manche-details",children:[s.jsx("p",{children:u.description}),s.jsx("p",{className:"points-info",children:u.points})]})]}):null,mv=({chanson:u,afficherTitre:f,afficherArtiste:d,afficherParoles:r})=>u?s.jsxs("div",{className:"affichage-chanson",children:[f&&s.jsx("h3",{className:"chanson-titre",children:u.titre}),d&&s.jsx("p",{className:"chanson-artiste",children:u.artiste}),r&&s.jsxs("div",{className:"paroles-container",children:[s.jsx("h4",{children:"Paroles:"}),s.jsx("p",{className:"paroles",children:u.paroles.split(`
`).map((h,y)=>s.jsxs("span",{className:"paroles-line",children:[h,s.jsx("br",{})]},y))})]})]}):null,pv=({teams:u=[],onAddTeam:f,onRemoveTeam:d,onAddPoints:r})=>{const[h,y]=j.useState(""),[A,T]=j.useState(!1),[g,p]=j.useState(null),[M,_]=j.useState("teams"),[C,L]=j.useState(null),[k,J]=j.useState({}),[G,U]=j.useState(!1),K=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];j.useEffect(()=>{const I={};u.forEach(le=>{I[le.id]=le.score}),J(I)},[u]),j.useEffect(()=>{if(g){const I=u.find(le=>le.id===g.id);I&&p(I)}},[u,g]);const X=()=>{if(h.trim()==="")return;const I={id:Date.now().toString(),name:h,score:0,color:K[u.length%K.length]};f(I),y(""),console.log("Équipe ajoutée:",I)},ce=I=>{I.key==="Enter"&&X()},ee=(I,le=null)=>{_(I),p(le),T(!0)},Se=()=>{T(!1),p(null),L(null)},De=()=>{U(!G)},xe=(I,le)=>{J($e=>({...$e,[I]:($e[I]||0)+le})),r(I,le),L(le),setTimeout(()=>{L(null)},1e3)},D=[...u].sort((I,le)=>le.score-I.score),W=I=>{var le;return k[I]!==void 0?k[I]:((le=u.find($e=>$e.id===I))==null?void 0:le.score)||0};return s.jsxs("div",{className:"team-manager-container",children:[s.jsxs("button",{className:"team-manager-button",onClick:()=>ee("teams"),children:[s.jsx(Vs,{size:20}),s.jsx("span",{children:"Équipes & Scores"})]}),s.jsxs("button",{className:"leaderboard-floating-button",onClick:De,children:[s.jsx(oi,{size:20}),s.jsx("span",{children:"Classement"})]}),G&&s.jsxs("div",{className:"floating-leaderboard",children:[s.jsxs("div",{className:"floating-leaderboard-header",children:[s.jsx("h3",{children:"Classement"}),s.jsx("button",{className:"close-leaderboard",onClick:De,children:s.jsx(Fs,{size:18})})]}),D.length>0?s.jsx("div",{className:"floating-leaderboard-content",children:D.map((I,le)=>s.jsxs("div",{className:`floating-leaderboard-item ${le===0?"first-place":le===1?"second-place":le===2?"third-place":""}`,children:[s.jsxs("div",{className:"leaderboard-position",children:[le===0&&s.jsx(Vs,{size:16,className:"gold-trophy"}),le===1&&s.jsx(oi,{size:16,className:"silver-medal"}),le===2&&s.jsx(oi,{size:16,className:"bronze-medal"}),le>2&&s.jsxs("span",{children:["#",le+1]})]}),s.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:I.color}}),s.jsx("div",{className:"leaderboard-team-name",children:I.name}),s.jsx("div",{className:"leaderboard-team-score",children:W(I.id)})]},I.id))}):s.jsx("div",{className:"floating-leaderboard-empty",children:s.jsx("p",{children:"Aucune équipe"})})]}),A&&s.jsx("div",{className:"team-modal-overlay",onClick:Se,children:s.jsxs("div",{className:"team-modal",onClick:I=>I.stopPropagation(),children:[s.jsx("button",{className:"close-modal",onClick:Se,children:s.jsx(Fs,{size:24})}),s.jsxs("div",{className:"modal-tabs",children:[s.jsxs("button",{className:`tab-button ${M==="teams"?"active":""}`,onClick:()=>_("teams"),children:[s.jsx(jh,{size:18}),s.jsx("span",{children:"Équipes"})]}),s.jsxs("button",{className:`tab-button ${M==="scores"?"active":""}`,onClick:()=>_("scores"),children:[s.jsx(eh,{size:18}),s.jsx("span",{children:"Scores"})]})]}),M==="teams"&&s.jsxs("div",{className:"teams-tab",children:[s.jsx("h2",{children:"Gestion des Équipes"}),s.jsxs("div",{className:"add-team-form",children:[s.jsx("input",{type:"text",value:h,onChange:I=>y(I.target.value),onKeyDown:ce,placeholder:"Nom de l'équipe",maxLength:20}),s.jsxs("button",{className:"add-team-button",onClick:X,disabled:h.trim()==="",children:[s.jsx(Gg,{size:16}),"Ajouter"]})]}),u.length>0?s.jsx("div",{className:"teams-grid",children:u.map(I=>s.jsxs("div",{className:"team-card",style:{borderColor:I.color,backgroundColor:`${I.color}10`},children:[s.jsx("div",{className:"team-card-header",style:{backgroundColor:I.color},children:s.jsx("h3",{children:I.name})}),s.jsxs("div",{className:"team-card-content",children:[s.jsx("div",{className:"team-score",children:W(I.id)}),s.jsxs("div",{className:"team-card-actions",children:[s.jsxs("button",{className:"team-action-button score-button",onClick:()=>{p(I),_("scores")},children:[s.jsx(eh,{size:16}),s.jsx("span",{children:"Scores"}),s.jsx(nh,{size:14})]}),s.jsxs("button",{className:"team-action-button delete-button",onClick:()=>d(I.id),children:[s.jsx(lv,{size:16}),s.jsx("span",{children:"Supprimer"})]})]})]})]},I.id))}):s.jsxs("div",{className:"no-teams",children:[s.jsx("p",{children:"Aucune équipe ajoutée"}),s.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]}),M==="scores"&&s.jsx("div",{className:"scores-tab",children:g?s.jsxs("div",{className:"team-score-detail",children:[s.jsxs("button",{className:"back-button",onClick:()=>_("teams"),children:[s.jsx(Ag,{size:16}),s.jsx("span",{children:"Retour"})]}),s.jsx("div",{className:"team-score-header",style:{backgroundColor:g.color},children:s.jsx("h2",{children:g.name})}),s.jsxs("div",{className:"current-score-container",children:[s.jsxs("div",{className:"current-score-value",children:[W(g.id),C&&s.jsx("span",{className:"score-animation",children:C>0?`+${C}`:C})]}),s.jsx("div",{className:"current-score-label",children:"points"})]}),s.jsxs("div",{className:"point-buttons-container",children:[s.jsx("h3",{children:"Ajouter des points"}),s.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(I=>s.jsx("button",{className:`point-button ${I<0?"negative":""}`,style:{backgroundColor:I<0?"#ffeeee":`${g.color}20`,borderColor:I<0?"#e74c3c":g.color,color:I<0?"#e74c3c":void 0},onClick:()=>xe(g.id,I),children:I>0?`+${I}`:I},I))})]})]}):s.jsxs("div",{className:"scores-leaderboard",children:[s.jsx("h2",{children:"Classement des Équipes"}),D.length>0?s.jsx("div",{className:"leaderboard",children:D.map((I,le)=>s.jsxs("div",{className:`leaderboard-item ${le===0?"first-place":le===1?"second-place":le===2?"third-place":""}`,onClick:()=>p(I),children:[s.jsxs("div",{className:"leaderboard-rank",children:[le===0&&s.jsx(Vs,{size:18,className:"gold-trophy"}),le===1&&s.jsx(oi,{size:18,className:"silver-medal"}),le===2&&s.jsx(oi,{size:18,className:"bronze-medal"}),le>2&&s.jsxs("span",{children:["#",le+1]})]}),s.jsx("div",{className:"leaderboard-color",style:{backgroundColor:I.color}}),s.jsx("div",{className:"leaderboard-name",children:I.name}),s.jsx("div",{className:"leaderboard-score",children:W(I.id)}),s.jsx(nh,{size:16,className:"leaderboard-arrow"})]},I.id))}):s.jsxs("div",{className:"no-teams",children:[s.jsx("p",{children:"Aucune équipe ajoutée"}),s.jsx("p",{children:"Créez des équipes pour voir le classement!"})]})]})})]})})]})},yv=({onEffectsChange:u,isExpanded:f,toggleExpanded:d,currentEffects:r})=>{const[h,y]=j.useState(r.distortion||1e4),[A,T]=j.useState(r.pitchShift||.6),[g,p]=j.useState(r.wahFrequency||1),[M,_]=j.useState(r.wahDepth||.3),[C,L]=j.useState(r.growlAmount||.05),[k,J]=j.useState(null),G=D=>{const W=Number.parseInt(D.target.value);y(W),u({distortion:W,pitchShift:A,wahFrequency:g,wahDepth:M,growlAmount:C})},U=D=>{const W=Number.parseFloat(D.target.value);T(W),u({distortion:h,pitchShift:W,wahFrequency:g,wahDepth:M,growlAmount:C})},K=D=>{const W=Number.parseFloat(D.target.value);p(W),u({distortion:h,pitchShift:A,wahFrequency:W,wahDepth:M,growlAmount:C})},X=D=>{const W=Number.parseFloat(D.target.value);_(W),u({distortion:h,pitchShift:A,wahFrequency:g,wahDepth:W,growlAmount:C})},ce=D=>{const W=Number.parseFloat(D.target.value);L(W),u({distortion:h,pitchShift:A,wahFrequency:g,wahDepth:M,growlAmount:W})},ee=()=>{const D={distortion:1e4,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.05};y(D.distortion),T(D.pitchShift),p(D.wahFrequency),_(D.wahDepth),L(D.growlAmount),u(D)},Se=()=>{const D={distortion:Math.floor(Math.random()*8e4)+1e4,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*5+.5,wahDepth:Math.random()*.5+.1,growlAmount:Math.random()*.5};y(D.distortion),T(D.pitchShift),p(D.wahFrequency),_(D.wahDepth),L(D.growlAmount),u(D)},De=()=>{const D={distortion:9e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:8,wahDepth:.5,growlAmount:.8};y(D.distortion),T(D.pitchShift),p(D.wahFrequency),_(D.wahDepth),L(D.growlAmount),u(D)},xe={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return s.jsxs("div",{className:`audio-effects-controller ${f?"expanded":"collapsed"}`,children:[s.jsxs("div",{className:"effects-header",onClick:d,children:[s.jsx(Wg,{size:16}),s.jsx("h3",{children:"Effets Audio"}),s.jsx("span",{className:"toggle-icon",children:f?"▼":"▲"})]}),f&&s.jsxs("div",{className:"effects-content",children:[s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Xs,{size:14}),s.jsx("span",{children:"Distorsion"}),s.jsxs("span",{className:"help-container",children:[s.jsx(ui,{size:14,className:"help-icon",onMouseEnter:()=>J("distortion"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:h})]}),k==="distortion"&&s.jsx("div",{className:"tooltip",children:xe.distortion})]}),s.jsx("input",{type:"range",min:"1000",max:"100000",step:"1000",value:h,onChange:G,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Eh,{size:14}),s.jsx("span",{children:"Hauteur"}),s.jsxs("span",{className:"help-container",children:[s.jsx(ui,{size:14,className:"help-icon",onMouseEnter:()=>J("pitchShift"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:A.toFixed(2)})]}),k==="pitchShift"&&s.jsx("div",{className:"tooltip",children:xe.pitchShift})]}),s.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:A,onChange:U,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Pf,{size:14}),s.jsx("span",{children:"Wah-Freq"}),s.jsxs("span",{className:"help-container",children:[s.jsx(ui,{size:14,className:"help-icon",onMouseEnter:()=>J("wahFrequency"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:g.toFixed(1)})]}),k==="wahFrequency"&&s.jsx("div",{className:"tooltip",children:xe.wahFrequency})]}),s.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.1",value:g,onChange:K,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Pf,{size:14}),s.jsx("span",{children:"Wah-Prof"}),s.jsxs("span",{className:"help-container",children:[s.jsx(ui,{size:14,className:"help-icon",onMouseEnter:()=>J("wahDepth"),onMouseLeave:()=>J(null)}),s.jsx("span",{className:"effect-value",children:M.toFixed(2)})]}),k==="wahDepth"&&s.jsx("div",{className:"tooltip",children:xe.wahDepth})]}),s.jsx("input",{type:"range",min:"0",max:"0.6",step:"0.05",value:M,onChange:X,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Xs,{size:14}),s.jsx("span",{children:"Grognement"}),s.jsxs("span",{className:"help-container",children:[s.jsx(ui,{size:14,className:"help-icon",onMouseEnter:()=>J("growlAmount"),onMouseLeave:()=>J(null)}),s.jsxs("span",{className:"effect-value",children:[(C*100).toFixed(0),"%"]})]}),k==="growlAmount"&&s.jsx("div",{className:"tooltip",children:xe.growlAmount})]}),s.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:C,onChange:ce,className:"effect-slider"})]}),s.jsxs("div",{className:"effects-buttons",children:[s.jsxs("button",{className:"random-button",onClick:Se,children:[s.jsx(Vg,{size:14}),"Effets aléatoires"]}),s.jsxs("button",{className:"extreme-button",onClick:De,children:[s.jsx(Xs,{size:14}),"Mode Extrême"]}),s.jsx("button",{className:"reset-button",onClick:ee,children:"Réinitialiser"})]})]})]})},th=[{id:1,nom:"Easy BlindTest",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"dnilBtseT",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],Zs=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
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
That we will be the ones that hold the highest truth`}],gv=()=>{const[u,f]=j.useState(!1),[d,r]=j.useState("general"),h=()=>f(!0),y=()=>f(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"regles-button",onClick:h,children:[s.jsx(jg,{size:20}),s.jsx("span",{children:"Règles du jeu"})]}),u&&s.jsx("div",{className:"regles-overlay",onClick:y,children:s.jsxs("div",{className:"regles-modal",onClick:A=>A.stopPropagation(),children:[s.jsx("button",{className:"regles-close",onClick:y,children:s.jsx(Fs,{size:24})}),s.jsxs("div",{className:"regles-header",children:[s.jsx("h2",{children:"Règles du BlindTest Master"}),s.jsx("p",{children:"Tout ce que tu dois savoir pour jouer"})]}),s.jsxs("div",{className:"regles-tabs",children:[s.jsxs("button",{className:`regles-tab ${d==="general"?"active":""}`,onClick:()=>r("general"),children:[s.jsx(Cg,{size:18}),s.jsx("span",{children:"Général"})]}),s.jsxs("button",{className:`regles-tab ${d==="manches"?"active":""}`,onClick:()=>r("manches"),children:[s.jsx(ir,{size:18}),s.jsx("span",{children:"Manches & Points"})]}),s.jsxs("button",{className:`regles-tab ${d==="equipes"?"active":""}`,onClick:()=>r("equipes"),children:[s.jsx(jh,{size:18}),s.jsx("span",{children:"Équipes & Temps"})]})]}),s.jsxs("div",{className:"regles-content",children:[d==="general"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Principe du jeu"}),s.jsxs("p",{children:[s.jsx("i",{children:"BlindTest Master"})," est un jeu musical où les joueurs doivent deviner le titre et/ou l'artiste d'une chanson jouée. Le jeu se déroule en plusieurs manches avec différents niveaux de difficulté."]}),s.jsx("h3",{children:"Objectif"}),s.jsx("p",{children:"Obtenir le maximum de points en identifiant correctement les chansons jouées. L'équipe avec le plus de points à la fin de toutes les manches remporte la partie."}),s.jsxs("div",{className:"buzzer-rule",children:[s.jsx("div",{className:"buzzer-icon",children:s.jsx(Rg,{size:24})}),s.jsxs("div",{className:"buzzer-content",children:[s.jsx("h3",{children:"Règle du micro-buzzer"}),s.jsx("p",{children:"Pour répondre, une équipe doit d'abord attraper le micro-buzzer. La première équipe qui s'empare du micro a le droit de proposer sa réponse. Si la réponse est incorrecte, les autres équipes peuvent alors tenter leur chance."})]})]}),s.jsx("h3",{children:"Déroulement"}),s.jsxs("p",{children:["1. Formez des équipes et donnez-leur un nom",s.jsx("br",{}),"2. Jouez les chansons une par une",s.jsx("br",{}),"3. L'équipe qui attrape le micro-buzzer en premier peut répondre",s.jsx("br",{}),"4. Les équipes qui devinent correctement gagnent des points",s.jsx("br",{}),"5. Passez à travers les différentes manches",s.jsx("br",{}),"6. L'équipe avec le plus de points à la fin gagne"]})]}),d==="manches"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Les différentes manches"}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"1"}),s.jsx("span",{className:"manche-emoji",children:"🎵"}),s.jsx("h4",{children:"Easy BlindTest"})]}),s.jsx("p",{children:"Les chansons sont jouées normalement. Les joueurs doivent identifier le titre et l'artiste."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +1 pour le titre, +1 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"2"}),s.jsx("span",{className:"manche-emoji",children:"🔄"}),s.jsx("h4",{children:"dnilBtseT"})]}),s.jsx("p",{children:"Les chansons sont jouées à l'envers. Les joueurs doivent reconnaître la mélodie malgré l'inversion."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +3 pour le titre, +3 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"3"}),s.jsx("span",{className:"manche-emoji",children:"👹"}),s.jsx("h4",{children:"X-trem BlindTest"})]}),s.jsx("p",{children:"Les chansons sont déformées avec des effets audio. C'est la manche la plus difficile où il faut vraiment avoir une sacrée bonne oreille..."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +4 pour le titre, +4 pour l'artiste"]})]}),s.jsxs("div",{className:"points-card malus",children:[s.jsx("h4",{children:"Malus"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"1 point seulement"})," : Réponse donnée après le temps"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-1 point"})," : Réponse incorrecte"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-2 points"})," : Règles non-respectées (ex: répondre sans avoir le micro-buzzer)"]})]})]}),s.jsx("p",{className:"points-note",children:"Note : Tu peux modifier ces valeurs pour rendre le jeu plus ou moins compétitif."})]}),d==="equipes"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Gestion des équipes"}),s.jsx("h4",{children:"Création des équipes"}),s.jsxs("p",{children:["Crée autant d'équipes que tu le souhaites en cliquant sur le bouton ",s.jsx("i",{children:'"Équipes & Scores"'}),". Donne un nom à chaque équipe. Chaque équipe recevra automatiquement une couleur distinctive."]}),s.jsx("h4",{children:"Nombre de joueurs"}),s.jsx("p",{children:"Il n'y a pas de limite au nombre de joueurs par équipe. Tu peux jouer avec :"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Plusieurs équipes de plusieurs joueurs"}),s.jsx("li",{children:'Plusieurs joueurs individuels (chacun étant sa propre "équipe")'})]}),s.jsx("h4",{children:"Classement"}),s.jsxs("p",{children:["Le classement des équipes est visible à tout moment en cliquant sur le bouton ",s.jsx("i",{children:'"Classement"'}),". Les trois premières équipes sont mises en évidence avec des médailles d'or, d'argent et de bronze."]}),s.jsx("h3",{children:"Gestion du temps"}),s.jsx("h4",{children:"Durée d'écoute"}),s.jsx("p",{children:"Chaque chanson peut être écoutée pendant un maximum de 25 secondes. La réponse doit être donnée durant ce temps imparti."}),s.jsx("h4",{children:"Temps de réponse"}),s.jsx("p",{children:"Après avoir attrapé le micro-buzzer, l'équipe dispose de 5 secondes pour donner sa réponse. Si elle ne répond pas correctement, le micro-buzzer est remis en jeu pour les autres équipes."}),s.jsx("div",{className:"time-warning",children:s.jsxs("p",{children:[s.jsx("strong",{children:"Astuce :"})," Pour rendre le jeu plus dynamique, tu peux arrêter la musique dès qu'une équipe attrape le micro-buzzer, augmentant ainsi la difficulté."]})})]})]}),s.jsxs("div",{className:"regles-footer",children:[s.jsx("p",{children:"Amuse-toi bien et que la meilleure équipe gagne !"}),s.jsx("button",{className:"regles-close-button",onClick:y,children:"Fermer"})]})]})})]})},ah=20,vv=()=>{const[u,f]=j.useState(1),[d,r]=j.useState(null),[h,y]=j.useState(!1),[A,T]=j.useState(!1),[g,p]=j.useState(!1),[M,_]=j.useState(!1),[C,L]=j.useState([]),[k,J]=j.useState({1:[],2:[],3:[]}),[G,U]=j.useState(!1),[K,X]=j.useState(null),[ce,ee]=j.useState(null),[Se,De]=j.useState(1),[xe,D]=j.useState(!1),[W,I]=j.useState([]),[le,$e]=j.useState(null),[Mn,un]=j.useState(!1),[H,ie]=j.useState({distortion:1e4,pitchShift:.6,wahFrequency:2,wahDepth:.6,growlAmount:.05}),te=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[je,v]=j.useState({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()}),O=j.useRef(null),Q=j.useRef(null),Z=j.useRef(null),Y=j.useRef(null),se=j.useRef(null),P=j.useRef(null),qe=j.useRef(0),ge=th.find(B=>B.id===u),Ce=je.tempsEcoule,we=je.actif,Ie=je.termine,nt=()=>{const B=Zs.filter(ue=>!C.includes(ue.id)&&ue.id!==le);if(B.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),L([]),J({1:[],2:[],3:[]}),$e(null);const ue=Zs.filter(Ee=>Ee.id!==le),pe=Math.floor(Math.random()*ue.length);return ue[pe]}const V=Math.floor(Math.random()*B.length);return B[V]},Xn=j.useCallback(()=>{if(k[u].length>=ah){const V=u<3?u+1:1;return f(V),!0}return!1},[u,k]),on=()=>{if(Y.current){try{Y.current.stop()}catch{}Y.current=null}},Zn=()=>{try{Q.current||(Q.current=new(window.AudioContext||window.webkitAudioContext));const B=u===2?K:ce;if(Q.current&&B){console.log(`Démarrage de la lecture du buffer ${u===2?"inversé":"monstre"}`),on();const V=Q.current.createBufferSource();if(V.buffer=B,u===3){let Ee=1;const{pitchShift:Le}=H;Le<.5?Ee=.4:Le<1?Ee=.6:Le>2?Ee=2.5:Ee=1.5,V.playbackRate.value=Ee}let ue;if(u===3){const{distortion:Ee,pitchShift:Le,wahFrequency:Qe,wahDepth:pn,growlAmount:yn}=H,sn=Q.current.createGain();sn.gain.value=M?0:Se,se.current=sn;const gn=Q.current.createWaveShaper(),ja=Wt(Ee);gn.curve=ja,gn.oversample="4x";const Sn=Q.current.createBiquadFilter();Sn.type="bandpass",Sn.frequency.value=1e3,Sn.Q.value=3;const Re=Q.current.createOscillator();Re.type="sine",Re.frequency.value=Qe;const ke=Q.current.createGain();ke.gain.value=pn*800,Re.connect(ke),ke.connect(Sn.frequency),Re.start(),Z.current={distortionNode:gn,filterNode:Sn,oscillator:Re,oscillatorGain:ke,pitchShift:Le,growlAmount:yn},V.connect(Sn),Sn.connect(gn),gn.connect(sn),sn.connect(Q.current.destination),ue=sn}else{const Ee=Q.current.createGain();Ee.gain.value=M?0:Se,se.current=Ee,V.connect(Ee),Ee.connect(Q.current.destination),ue=Ee}const pe=isFinite(qe.current)?qe.current:0;return pe>=B.duration?(qe.current=0,V.start(0,0)):V.start(0,pe),Y.current=V,Y.current.startTime=Q.current.currentTime,Y.current.startOffset=pe,console.log(`Lecture ${u===2?"inversée":"monstre"} démarrée avec succès à la position ${pe}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(B){return console.error("Erreur lors de la lecture audio modifiée:",B),!1}},Et=j.useCallback(()=>{if(console.log("togglePlay appelé, manche:",u),u===2||u===3)if(console.log(`Manche ${u} - utilisation du mode audio modifié`),h){if(console.log("Arrêt de la lecture modifiée"),Y.current&&Q.current)try{if(Y.current.startTime!==void 0&&Y.current.startOffset!==void 0){const B=Q.current.currentTime-Y.current.startTime,V=Y.current.startOffset+B;isFinite(V)&&V>=0&&(qe.current=V,console.log("Position audio sauvegardée:",qe.current))}}catch(B){console.error("Erreur lors du calcul de la position audio:",B)}on(),y(!1),At()}else if(console.log("Démarrage de la lecture modifiée"),!K&&u===2||!ce&&u===3||!xe){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),D(!0),!G&&d)(u===2?ul:ol)(d.audioUrl).then(V=>{V&&xe&&Zn()&&(y(!0),!we&&!Ie?tt():Ie||xt())});else if(u===2&&K||u===3&&ce){if(u===3&&d&&H){const V=fi(ce,H);ee(V)}Zn()&&(y(!0),!we&&!Ie?tt():Ie||xt())}}else Zn()&&(y(!0),!we&&!Ie?tt():Ie||xt());else console.log("Manche standard - utilisation de l'audio normal"),h?(O.current.pause(),y(!1),At()):O.current.play().then(()=>{y(!0),!we&&!Ie?tt():Ie||xt()}).catch(B=>{console.error("Erreur lors de la lecture audio:",B)})},[h,u,K,ce,G,d,xe,we,Ie,H]),tt=()=>{P.current&&clearInterval(P.current),v(B=>({...B,actif:!0,termine:!1,dernierTemps:Date.now()})),P.current=setInterval(()=>{v(B=>{const V=B.tempsEcoule+1;return V>=25?(clearInterval(P.current),P.current=null,h&&(u===2||u===3?on():O.current&&O.current.pause(),y(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:B.dernierTemps}):(V===20&&h&&(u===2||u===3?on():O.current&&O.current.pause(),y(!1)),{...B,tempsEcoule:V,dernierTemps:Date.now()})})},1e3)},At=()=>{P.current&&(clearInterval(P.current),P.current=null),v(B=>({...B,actif:!1,dernierTemps:Date.now()}))},xt=()=>{P.current&&clearInterval(P.current),v(B=>({...B,actif:!0,dernierTemps:Date.now()})),P.current=setInterval(()=>{v(B=>{const V=B.tempsEcoule+1;return V>=25?(clearInterval(P.current),P.current=null,h&&(u===2||u===3?on():O.current&&O.current.pause(),y(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:B.dernierTemps}):(V===20&&h&&(u===2||u===3?on():O.current&&O.current.pause(),y(!1)),{...B,tempsEcoule:V,dernierTemps:Date.now()})})},1e3)},Tt=()=>{P.current&&(clearInterval(P.current),P.current=null),v({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()})},il=()=>{u===2||u===3?Y.current&&Q.current&&(on(),qe.current+=5,h&&Zn()):O.current&&(O.current.currentTime+=5)},Mu=()=>{u===2||u===3?Y.current&&Q.current&&(on(),qe.current=Math.max(0,qe.current-5),h&&Zn()):O.current&&(O.current.currentTime=Math.max(0,O.current.currentTime-5))},qu=()=>{if(d&&($e(d.id),L(V=>[...V,d.id]),J(V=>({...V,[u]:[...V[u],d.id]}))),(u===2||u===3)&&Y.current?on():O.current&&O.current.pause(),y(!1),p(!1),T(!1),U(!1),X(null),ee(null),D(!1),Tt(),qe.current=0,Kt(),!Xn()){const V=nt();r(V)}},qn=()=>{(u===2||u===3)&&se.current?se.current.gain.value=M?Se:0:O.current&&(O.current.muted=!M),_(!M)},Kt=()=>{try{if(on(),Z.current){if(Z.current.oscillator)try{Z.current.oscillator.stop()}catch{}Z.current.distortionNode&&Z.current.distortionNode.disconnect(),Z.current.filterNode&&Z.current.filterNode.disconnect(),Z.current.oscillatorGain&&Z.current.oscillatorGain.disconnect(),Z.current=null}se.current&&(se.current.disconnect(),se.current=null),Q.current&&Q.current.state}catch(B){console.error("Erreur lors du nettoyage des connexions audio:",B)}},ul=async B=>{try{console.log("Préparation de l'audio inversé pour:",B),Kt(),Q.current=new(window.AudioContext||window.webkitAudioContext);const V=await fetch(B);if(!V.ok)throw new Error(`Erreur lors du chargement de l'audio: ${V.status}`);const ue=await V.arrayBuffer();if(!ue||ue.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ue.byteLength);const pe=await Q.current.decodeAudioData(ue);console.log("Audio décodé, durée:",pe.duration,"secondes");const Ee=Q.current.createBuffer(pe.numberOfChannels,pe.length,pe.sampleRate);for(let Le=0;Le<pe.numberOfChannels;Le++){const Qe=pe.getChannelData(Le),pn=Ee.getChannelData(Le);for(let yn=0;yn<Qe.length;yn++)pn[yn]=Qe[Qe.length-1-yn]}return console.log("Buffer inversé créé avec succès"),X(Ee),U(!0),!0}catch(V){return console.error("Erreur lors de la préparation de l'audio inversé:",V),!1}},ol=async B=>{try{console.log("Préparation de l'audio monstre pour:",B),Q.current||(Q.current=new(window.AudioContext||window.webkitAudioContext));const V=await fetch(B);if(!V.ok)throw new Error(`Erreur lors du chargement de l'audio: ${V.status}`);const ue=await V.arrayBuffer();if(!ue||ue.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ue.byteLength);const pe=await Q.current.decodeAudioData(ue);return console.log("Audio décodé, durée:",pe.duration,"secondes"),ee(pe),U(!0),!0}catch(V){return console.error("Erreur lors de la préparation de l'audio monstre:",V),!1}},Wt=B=>{const ue=new Float32Array(44100),pe=Math.PI/180;for(let Ee=0;Ee<44100;++Ee){const Le=Ee*2/44100-1;ue[Ee]=(3+B/500)*Le*20*pe/(Math.PI+B/500*Math.abs(Le))}return ue},zu=B=>{if(ie(B),u===3&&Q.current&&Z.current){const{distortion:V,pitchShift:ue,wahFrequency:pe,wahDepth:Ee,growlAmount:Le}=B;if(Z.current.distortionNode&&(Z.current.distortionNode.curve=Wt(V)),Z.current.oscillator&&(Z.current.oscillator.frequency.value=pe),Z.current.oscillatorGain&&(Z.current.oscillatorGain.gain.value=Ee*800),Z.current.pitchShift=ue,Y.current){let Qe;ue<.5?Qe=.4:ue<1?Qe=.6:ue>2?Qe=2.5:Qe=1.5;try{Y.current.playbackRate.value=Qe}catch(pn){console.error("Erreur lors de l'ajustement du playbackRate:",pn)}}Z.current.growlAmount=Le,console.log("Paramètres d'effets mis à jour en temps réel")}},fi=(B,V)=>{const{distortion:ue,pitchShift:pe,wahFrequency:Ee,wahDepth:Le,growlAmount:Qe}=V,yn=Q.current.createBuffer(B.numberOfChannels,B.length,B.sampleRate);for(let sn=0;sn<B.numberOfChannels;sn++){const gn=B.getChannelData(sn),ja=yn.getChannelData(sn),Sn=new Float32Array(gn.length);for(let Re=0;Re<gn.length;Re++){const ke=Math.sin(Re/B.sampleRate*Ee*Math.PI*2)*Le*.8;gn[Re]*(1+ke);let Yn;pe<.5?Yn=2.5:pe<1?Yn=1.8:pe>2?Yn=.4:Yn=.6;const Ft=Math.floor(Re/(pe*Yn));Ft<gn.length&&(Sn[Re]=gn[Ft])}for(let Re=0;Re<gn.length;Re++){let ke=Sn[Re]||0;if(ke=Math.tanh(ke*(ue/800))*.7,Math.random()<Qe){const Yn=Qe*3;ke+=(Math.random()*.6-.3)*Math.sin(Re/B.sampleRate*40*Math.PI*2)*Yn,Math.random()<Qe*.7&&(ke*=1+Math.random()*.5),Math.random()<Qe*.3&&(ke=0)}if(ue>2e4){const Yn=(ue-2e4)/2e4;if(ke+=ke*Math.sin(Re/B.sampleRate*120*Math.PI*2)*Yn,ue>5e4){const Ft=Math.max(2,Math.floor(16-(ue-5e4)/1e4)),sl=2/Math.pow(2,Ft);ke=Math.round(ke/sl)*sl}}ke=Math.max(-.99,Math.min(.99,ke)),ja[Re]=ke}}return yn},Ou=()=>{un(!Mn)};j.useEffect(()=>()=>{Kt(),P.current&&clearInterval(P.current)},[]),j.useEffect(()=>{if(!d){const B=nt();r(B)}},[d]),j.useEffect(()=>{d&&(console.log("Changement de chanson détecté, manche:",u),O.current&&O.current.pause(),on(),y(!1),U(!1),X(null),ee(null),D(!1),Tt(),qe.current=0,Kt(),u===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),ul(d.audioUrl)):u===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),ol(d.audioUrl)):(console.log("Manche standard - chargement audio normal"),O.current&&(O.current.src=d.audioUrl,O.current.load(),U(!0))))},[d,u]),j.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",u),U(!1),X(null),ee(null),D(!1),qe.current=0,Kt(),Tt();const B=nt();r(B)},[u]);const Nu=B=>{f(B),y(!1),p(!1),T(!1),D(!1)},$t=B=>{if(console.log("Fonction ajouterEquipe appelée avec:",B),typeof B=="string"){const V={id:Date.now().toString(),name:B,score:0,color:te[W.length%te.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",V),I(ue=>[...ue,V])}else B&&typeof B=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",B),I(V=>[...V,B])):console.error("Format d'équipe invalide:",B);console.log("Équipes après ajout:",W)},fn=B=>{const V=W.filter(ue=>ue.id!==B);I(V)},Cu=(B,V)=>{const ue=W.findIndex(pe=>pe.id===B);if(ue>=0){const pe=[...W];pe[ue]={...pe[ue],score:pe[ue].score+V},I(pe)}else console.error("Équipe non trouvée avec l'ID:",B)};return s.jsxs("main",{className:"jeu",children:[s.jsx("audio",{ref:O}),s.jsxs("header",{className:"jeu-header",children:[s.jsx(Tu,{to:"/",className:"accueil-link",children:s.jsx(Og,{size:24})}),s.jsx("h1",{children:"BlindTest Master"}),s.jsx(ir,{className:"logo",size:32})]}),s.jsx(pv,{teams:W,onAddTeam:$t,onRemoveTeam:fn,onAddPoints:Cu}),s.jsx(gv,{}),s.jsx(hv,{manche:ge}),u===3&&s.jsxs("div",{className:"effets-info",children:[s.jsxs("span",{className:"effet-badge",children:["Distorsion: ",H.distortion]}),s.jsxs("span",{className:"effet-badge",children:["Hauteur: ",H.pitchShift.toFixed(2)]}),s.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",H.wahFrequency.toFixed(1),"Hz"]}),s.jsxs("span",{className:"effet-badge",children:["Grognement: ",(H.growlAmount*100).toFixed(0),"%"]})]}),s.jsx("section",{className:"jeu-content",children:d?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"chrono-container",children:[s.jsxs("div",{className:`chrono ${Ce>20?"time-critical":Ce>15?"time-warning":""}`,children:[s.jsxs("span",{children:[Ce," / 25 secondes"]}),s.jsx("div",{className:"chrono-progress",style:{width:`${Ce/25*100}%`}})]}),s.jsxs("div",{className:"chrono-controls",children:[we?s.jsxs("button",{className:"chrono-button stop",onClick:At,children:[s.jsx(Fg,{size:20}),s.jsx("span",{children:"Arrêter Chrono"})]}):s.jsxs("button",{className:"chrono-button start",onClick:tt,disabled:Ie,children:[s.jsx(tv,{size:20}),s.jsx("span",{children:"Démarrer Chrono"})]}),s.jsxs("button",{className:"chrono-button reset",onClick:Tt,children:[s.jsx(ev,{size:20}),s.jsx("span",{children:"Réinitialiser"})]})]})]}),s.jsxs("div",{className:"player-controls-container",children:[s.jsxs("div",{className:"player-controls",children:[s.jsx("button",{className:"control-button rewind",onClick:Mu,"aria-label":"Reculer",children:s.jsx(Qg,{size:24})}),s.jsx("button",{className:"control-button play-pause",onClick:Et,"aria-label":h?"Pause":"Lecture",children:h?s.jsx(Bg,{size:32}):s.jsx(Hg,{size:32})}),s.jsx("button",{className:"control-button forward",onClick:il,"aria-label":"Avancer",children:s.jsx(qg,{size:24})}),s.jsx("button",{className:"control-button next",onClick:qu,"aria-label":"Chanson suivante",children:s.jsx(Zg,{size:32})}),s.jsx("button",{className:"control-button mute",onClick:qn,"aria-label":M?"Activer le son":"Couper le son",children:M?s.jsx(rv,{size:24}):s.jsx(Eh,{size:24})})]}),u===3&&s.jsx(yv,{onEffectsChange:zu,isExpanded:Mn,toggleExpanded:Ou,currentEffects:H})]}),s.jsxs("div",{className:"guess-mode",children:[g?s.jsxs(s.Fragment,{children:[s.jsx(mv,{chanson:d,afficherTitre:!0,afficherArtiste:!0,afficherParoles:A}),(u===2||u===3)&&s.jsxs("div",{className:"normal-audio-player",children:[s.jsx("h4",{children:"Version normale:"}),s.jsx("audio",{src:d.audioUrl,controls:!0,className:"normal-audio-controls"})]})]}):s.jsx("div",{className:"hidden-answer",children:s.jsx("p",{children:"?????"})}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"answer-toggle",onClick:()=>p(!g),children:g?"Masquer la réponse":"Révéler la réponse"}),g&&s.jsx("button",{className:"lyrics-toggle",onClick:()=>T(!A),children:A?"Masquer les paroles":"Afficher les paroles"})]})]})]}):s.jsxs("div",{className:"no-songs-message",children:[s.jsx("p",{children:"Aucune chanson disponible."}),s.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),s.jsxs("footer",{className:"jeu-footer",children:[s.jsx("div",{className:"round-navigation",children:th.map(B=>s.jsxs("button",{className:`round-button ${u===B.id?"active":""}`,onClick:()=>Nu(B.id),children:[s.jsx("span",{className:"round-number",children:B.id}),s.jsx("span",{className:"round-emoji",children:B.emoji})]},B.id))}),s.jsxs("div",{className:"songs-played-info",children:[s.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",k[u].length," /"," ",ah]}),s.jsxs("p",{children:["Total des chansons jouées: ",C.length," /"," ",Zs.length]})]})]})]})},bv=()=>{const u=new Date().getFullYear();return s.jsxs("footer",{className:"footer",children:[s.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"}),s.jsxs("p",{className:"footer-text",children:["© ",u," - Tous droits réservés"]})]})};function wv(){return s.jsxs(ig,{children:[s.jsxs(_y,{children:[s.jsx(Ws,{path:"/",element:s.jsx(fv,{})}),s.jsx(Ws,{path:"/jeu",element:s.jsx(vv,{})})]}),s.jsx(bv,{})]})}Jp.createRoot(document.getElementById("root")).render(s.jsx(Up.StrictMode,{children:s.jsx(wv,{})}));
