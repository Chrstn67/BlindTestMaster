(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const S of p.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function h(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(m){if(m.ep)return;m.ep=!0;const p=h(m);fetch(m.href,p)}})();function lm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ys={exports:{}},to={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Ry(){if(Dd)return to;Dd=1;var i=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function h(r,m,p){var S=null;if(p!==void 0&&(S=""+p),m.key!==void 0&&(S=""+m.key),"key"in m){p={};for(var T in m)T!=="key"&&(p[T]=m[T])}else p=m;return m=p.ref,{$$typeof:i,type:r,key:S,ref:m!==void 0?m:null,props:p}}return to.Fragment=d,to.jsx=h,to.jsxs=h,to}var Rd;function By(){return Rd||(Rd=1,Ys.exports=Ry()),Ys.exports}var s=By(),Hs={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function _y(){if(Bd)return ce;Bd=1;var i=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),S=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),U=Symbol.iterator;function C(v){return v===null||typeof v!="object"?null:(v=U&&v[U]||v["@@iterator"],typeof v=="function"?v:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,Z={};function G(v,M,W){this.props=v,this.context=M,this.refs=Z,this.updater=W||Y}G.prototype.isReactComponent={},G.prototype.setState=function(v,M){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,M,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function D(){}D.prototype=G.prototype;function X(v,M,W){this.props=v,this.context=M,this.refs=Z,this.updater=W||Y}var V=X.prototype=new D;V.constructor=X,O(V,G.prototype),V.isPureReactComponent=!0;var ie=Array.isArray,J={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function be(v,M,W,z,_,re){return W=re.ref,{$$typeof:i,type:v,key:M,ref:W!==void 0?W:null,props:re}}function ye(v,M){return be(v.type,M,void 0,void 0,void 0,v.props)}function Q(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function R(v){var M={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(W){return M[W]})}var te=/\/+/g;function we(v,M){return typeof v=="object"&&v!==null&&v.key!=null?R(""+v.key):M.toString(36)}function Fe(){}function yn(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Fe,Fe):(v.status="pending",v.then(function(M){v.status==="pending"&&(v.status="fulfilled",v.value=M)},function(M){v.status==="pending"&&(v.status="rejected",v.reason=M)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function $e(v,M,W,z,_){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var P=!1;if(v===null)P=!0;else switch(re){case"bigint":case"string":case"number":P=!0;break;case"object":switch(v.$$typeof){case i:case d:P=!0;break;case x:return P=v._init,$e(P(v._payload),M,W,z,_)}}if(P)return _=_(v),P=z===""?"."+we(v,0):z,ie(_)?(W="",P!=null&&(W=P.replace(te,"$&/")+"/"),$e(_,M,W,"",function(ze){return ze})):_!=null&&(Q(_)&&(_=ye(_,W+(_.key==null||v&&v.key===_.key?"":(""+_.key).replace(te,"$&/")+"/")+P)),M.push(_)),1;P=0;var qe=z===""?".":z+":";if(ie(v))for(var ke=0;ke<v.length;ke++)z=v[ke],re=qe+we(z,ke),P+=$e(z,M,W,re,_);else if(ke=C(v),typeof ke=="function")for(v=ke.call(v),ke=0;!(z=v.next()).done;)z=z.value,re=qe+we(z,ke++),P+=$e(z,M,W,re,_);else if(re==="object"){if(typeof v.then=="function")return $e(yn(v),M,W,z,_);throw M=String(v),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return P}function H(v,M,W){if(v==null)return v;var z=[],_=0;return $e(v,z,"","",function(re){return M.call(W,re,_++)}),z}function oe(v){if(v._status===-1){var M=v._result;M=M(),M.then(function(W){(v._status===0||v._status===-1)&&(v._status=1,v._result=W)},function(W){(v._status===0||v._status===-1)&&(v._status=2,v._result=W)}),v._status===-1&&(v._status=0,v._result=M)}if(v._status===1)return v._result.default;throw v._result}var ne=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function je(){}return ce.Children={map:H,forEach:function(v,M,W){H(v,function(){M.apply(this,arguments)},W)},count:function(v){var M=0;return H(v,function(){M++}),M},toArray:function(v){return H(v,function(M){return M})||[]},only:function(v){if(!Q(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ce.Component=G,ce.Fragment=h,ce.Profiler=m,ce.PureComponent=X,ce.StrictMode=r,ce.Suspense=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ce.act=function(){throw Error("act(...) is not supported in production builds of React.")},ce.cache=function(v){return function(){return v.apply(null,arguments)}},ce.cloneElement=function(v,M,W){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var z=O({},v.props),_=v.key,re=void 0;if(M!=null)for(P in M.ref!==void 0&&(re=void 0),M.key!==void 0&&(_=""+M.key),M)!le.call(M,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&M.ref===void 0||(z[P]=M[P]);var P=arguments.length-2;if(P===1)z.children=W;else if(1<P){for(var qe=Array(P),ke=0;ke<P;ke++)qe[ke]=arguments[ke+2];z.children=qe}return be(v.type,_,void 0,void 0,re,z)},ce.createContext=function(v){return v={$$typeof:S,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},ce.createElement=function(v,M,W){var z,_={},re=null;if(M!=null)for(z in M.key!==void 0&&(re=""+M.key),M)le.call(M,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(_[z]=M[z]);var P=arguments.length-2;if(P===1)_.children=W;else if(1<P){for(var qe=Array(P),ke=0;ke<P;ke++)qe[ke]=arguments[ke+2];_.children=qe}if(v&&v.defaultProps)for(z in P=v.defaultProps,P)_[z]===void 0&&(_[z]=P[z]);return be(v,re,void 0,void 0,null,_)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(v){return{$$typeof:T,render:v}},ce.isValidElement=Q,ce.lazy=function(v){return{$$typeof:x,_payload:{_status:-1,_result:v},_init:oe}},ce.memo=function(v,M){return{$$typeof:y,type:v,compare:M===void 0?null:M}},ce.startTransition=function(v){var M=J.T,W={};J.T=W;try{var z=v(),_=J.S;_!==null&&_(W,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(je,ne)}catch(re){ne(re)}finally{J.T=M}},ce.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ce.use=function(v){return J.H.use(v)},ce.useActionState=function(v,M,W){return J.H.useActionState(v,M,W)},ce.useCallback=function(v,M){return J.H.useCallback(v,M)},ce.useContext=function(v){return J.H.useContext(v)},ce.useDebugValue=function(){},ce.useDeferredValue=function(v,M){return J.H.useDeferredValue(v,M)},ce.useEffect=function(v,M){return J.H.useEffect(v,M)},ce.useId=function(){return J.H.useId()},ce.useImperativeHandle=function(v,M,W){return J.H.useImperativeHandle(v,M,W)},ce.useInsertionEffect=function(v,M){return J.H.useInsertionEffect(v,M)},ce.useLayoutEffect=function(v,M){return J.H.useLayoutEffect(v,M)},ce.useMemo=function(v,M){return J.H.useMemo(v,M)},ce.useOptimistic=function(v,M){return J.H.useOptimistic(v,M)},ce.useReducer=function(v,M,W){return J.H.useReducer(v,M,W)},ce.useRef=function(v){return J.H.useRef(v)},ce.useState=function(v){return J.H.useState(v)},ce.useSyncExternalStore=function(v,M,W){return J.H.useSyncExternalStore(v,M,W)},ce.useTransition=function(){return J.H.useTransition()},ce.version="19.0.0",ce}var _d;function er(){return _d||(_d=1,Hs.exports=_y()),Hs.exports}var j=er();const Uy=lm(j);var Gs={exports:{}},ao={},Qs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Ly(){return Ud||(Ud=1,function(i){function d(H,oe){var ne=H.length;H.push(oe);e:for(;0<ne;){var je=ne-1>>>1,v=H[je];if(0<m(v,oe))H[je]=oe,H[ne]=v,ne=je;else break e}}function h(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var oe=H[0],ne=H.pop();if(ne!==oe){H[0]=ne;e:for(var je=0,v=H.length,M=v>>>1;je<M;){var W=2*(je+1)-1,z=H[W],_=W+1,re=H[_];if(0>m(z,ne))_<v&&0>m(re,z)?(H[je]=re,H[_]=ne,je=_):(H[je]=z,H[W]=ne,je=W);else if(_<v&&0>m(re,ne))H[je]=re,H[_]=ne,je=_;else break e}}return oe}function m(H,oe){var ne=H.sortIndex-oe.sortIndex;return ne!==0?ne:H.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var S=Date,T=S.now();i.unstable_now=function(){return S.now()-T}}var g=[],y=[],x=1,U=null,C=3,Y=!1,O=!1,Z=!1,G=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function V(H){for(var oe=h(y);oe!==null;){if(oe.callback===null)r(y);else if(oe.startTime<=H)r(y),oe.sortIndex=oe.expirationTime,d(g,oe);else break;oe=h(y)}}function ie(H){if(Z=!1,V(H),!O)if(h(g)!==null)O=!0,yn();else{var oe=h(y);oe!==null&&$e(ie,oe.startTime-H)}}var J=!1,le=-1,be=5,ye=-1;function Q(){return!(i.unstable_now()-ye<be)}function R(){if(J){var H=i.unstable_now();ye=H;var oe=!0;try{e:{O=!1,Z&&(Z=!1,D(le),le=-1),Y=!0;var ne=C;try{n:{for(V(H),U=h(g);U!==null&&!(U.expirationTime>H&&Q());){var je=U.callback;if(typeof je=="function"){U.callback=null,C=U.priorityLevel;var v=je(U.expirationTime<=H);if(H=i.unstable_now(),typeof v=="function"){U.callback=v,V(H),oe=!0;break n}U===h(g)&&r(g),V(H)}else r(g);U=h(g)}if(U!==null)oe=!0;else{var M=h(y);M!==null&&$e(ie,M.startTime-H),oe=!1}}break e}finally{U=null,C=ne,Y=!1}oe=void 0}}finally{oe?te():J=!1}}}var te;if(typeof X=="function")te=function(){X(R)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Fe=we.port2;we.port1.onmessage=R,te=function(){Fe.postMessage(null)}}else te=function(){G(R,0)};function yn(){J||(J=!0,te())}function $e(H,oe){le=G(function(){H(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(H){H.callback=null},i.unstable_continueExecution=function(){O||Y||(O=!0,yn())},i.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<H?Math.floor(1e3/H):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return h(g)},i.unstable_next=function(H){switch(C){case 1:case 2:case 3:var oe=3;break;default:oe=C}var ne=C;C=oe;try{return H()}finally{C=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=C;C=H;try{return oe()}finally{C=ne}},i.unstable_scheduleCallback=function(H,oe,ne){var je=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?je+ne:je):ne=je,H){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=ne+v,H={id:x++,callback:oe,priorityLevel:H,startTime:ne,expirationTime:v,sortIndex:-1},ne>je?(H.sortIndex=ne,d(y,H),h(g)===null&&H===h(y)&&(Z?(D(le),le=-1):Z=!0,$e(ie,ne-je))):(H.sortIndex=v,d(g,H),O||Y||(O=!0,yn())),H},i.unstable_shouldYield=Q,i.unstable_wrapCallback=function(H){var oe=C;return function(){var ne=C;C=oe;try{return H.apply(this,arguments)}finally{C=ne}}}}(Ws)),Ws}var Ld;function Yy(){return Ld||(Ld=1,Qs.exports=Ly()),Qs.exports}var Js={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Hy(){if(Yd)return hn;Yd=1;var i=er();function d(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var r={d:{f:h,r:function(){throw Error(d(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(g,y,x){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:g,containerInfo:y,implementation:x}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,hn.createPortal=function(g,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(d(299));return p(g,y,null,x)},hn.flushSync=function(g){var y=S.T,x=r.p;try{if(S.T=null,r.p=2,g)return g()}finally{S.T=y,r.p=x,r.d.f()}},hn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(g,y))},hn.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},hn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var x=y.as,U=T(x,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,Y=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?r.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:U,integrity:C,fetchPriority:Y}):x==="script"&&r.d.X(g,{crossOrigin:U,integrity:C,fetchPriority:Y,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},hn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=T(y.as,y.crossOrigin);r.d.M(g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(g)},hn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,U=T(x,y.crossOrigin);r.d.L(g,x,{crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},hn.preloadModule=function(g,y){if(typeof g=="string")if(y){var x=T(y.as,y.crossOrigin);r.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(g)},hn.requestFormReset=function(g){r.d.r(g)},hn.unstable_batchedUpdates=function(g,y){return g(y)},hn.useFormState=function(g,y,x){return S.H.useFormState(g,y,x)},hn.useFormStatus=function(){return S.H.useHostTransitionStatus()},hn.version="19.0.0",hn}var Hd;function Gy(){if(Hd)return Js.exports;Hd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),Js.exports=Hy(),Js.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Qy(){if(Gd)return ao;Gd=1;var i=Yy(),d=er(),h=Gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var p=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),ie=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case T:return"Portal";case x:return"Profiler";case y:return"StrictMode";case Z:return"Suspense";case G:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Y:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}var Q=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,te,we;function Fe(e){if(te===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",we=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+we}var yn=!1;function $e(e,n){if(!e||yn)return"";yn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(E){var A=E}Reflect.construct(e,[],B)}else{try{B.call()}catch(E){A=E}e.call(B.prototype)}}else{try{throw Error()}catch(E){A=E}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),u=o[0],c=o[1];if(u&&c){var f=u.split(`
`),w=c.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===w.length)for(a=f.length-1,l=w.length-1;1<=a&&0<=l&&f[a]!==w[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==w[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==w[l]){var q=`
`+f[a].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=a&&0<=l);break}}}finally{yn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Fe(t):""}function H(e){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return e=$e(e.type,!1),e;case 11:return e=$e(e.type.render,!1),e;case 1:return e=$e(e.type,!0),e;default:return""}}function oe(e){try{var n="";do n+=H(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ne(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function je(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(ne(e)!==e)throw Error(r(188))}function M(e){var n=e.alternate;if(!n){if(n=ne(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return v(l),e;if(o===a)return v(l),n;o=o.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=o;else{for(var u=!1,c=l.child;c;){if(c===t){u=!0,t=l,a=o;break}if(c===a){u=!0,a=l,t=o;break}c=c.sibling}if(!u){for(c=o.child;c;){if(c===t){u=!0,t=o,a=l;break}if(c===a){u=!0,a=o,t=l;break}c=c.sibling}if(!u)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=W(e),n!==null)return n;e=e.sibling}return null}var z=Array.isArray,_=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},P=[],qe=-1;function ke(e){return{current:e}}function ze(e){0>qe||(e.current=P[qe],P[qe]=null,qe--)}function Ae(e,n){qe++,P[qe]=e.current,e.current=n}var Ge=ke(null),nt=ke(null),Vn=ke(null),un=ke(null);function Xn(e,n){switch(Ae(Vn,n),Ae(nt,e),Ae(Ge,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?cd(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=cd(e),n=hd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ze(Ge),Ae(Ge,n)}function St(){ze(Ge),ze(nt),ze(Vn)}function tt(e){e.memoizedState!==null&&Ae(un,e);var n=Ge.current,t=hd(n,e.type);n!==t&&(Ae(nt,e),Ae(Ge,t))}function It(e){nt.current===e&&(ze(Ge),ze(nt)),un.current===e&&(ze(un),Fl._currentValue=re)}var At=Object.prototype.hasOwnProperty,Tt=i.unstable_scheduleCallback,ol=i.unstable_cancelCallback,Ci=i.unstable_shouldYield,Oi=i.unstable_requestPaint,En=i.unstable_now,Zt=i.unstable_getCurrentPriorityLevel,il=i.unstable_ImmediatePriority,ul=i.unstable_UserBlockingPriority,Kt=i.unstable_NormalPriority,zi=i.unstable_LowPriority,fo=i.unstable_IdlePriority,Ni=i.log,Di=i.unstable_setDisableYieldValue,Ft=null,dn=null;function Ri(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ft,e,void 0,(e.current.flags&128)===128)}catch{}}function L(e){if(typeof Ni=="function"&&Di(e),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(Ft,e)}catch{}}var K=Math.clz32?Math.clz32:Te,ue=Math.log,ge=Math.LN2;function Te(e){return e>>>=0,e===0?32:31-(ue(e)/ge|0)|0}var Ue=128,Qe=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gn(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var c=t&134217727;return c!==0?(t=c&~l,t!==0?a=pn(t):(o&=c,o!==0?a=pn(o):e||(u=c&~u,u!==0&&(a=pn(u))))):(c=t&~l,c!==0?a=pn(c):o!==0?a=pn(o):e||(u=t&~u,u!==0&&(a=pn(u)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,u=n&-n,l>=u||l===32&&(u&4194176)!==0)?n:a}function sn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function vn(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ka(){var e=Ue;return Ue<<=1,(Ue&4194176)===0&&(Ue=128),e}function kn(){var e=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),e}function De(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ne(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,t,a,l,o){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,w=e.hiddenUpdates;for(t=u&~t;0<t;){var q=31-K(t),B=1<<q;c[q]=0,f[q]=-1;var A=w[q];if(A!==null)for(w[q]=null,q=0;q<A.length;q++){var E=A[q];E!==null&&(E.lane&=-536870913)}t&=~B}a!==0&&$t(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(u&~n))}function $t(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-K(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function sl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-K(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function ir(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ur(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function Am(e,n){var t=_.p;try{return _.p=e,n()}finally{_.p=t}}var xt=Math.random().toString(36).slice(2),rn="__reactFiber$"+xt,bn="__reactProps$"+xt,Sa="__reactContainer$"+xt,Bi="__reactEvents$"+xt,Tm="__reactListeners$"+xt,xm="__reactHandles$"+xt,sr="__reactResources$"+xt,rl="__reactMarker$"+xt;function _i(e){delete e[rn],delete e[bn],delete e[Bi],delete e[Tm],delete e[xm]}function Pt(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Sa]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fd(e);e!==null;){if(t=e[rn])return t;e=fd(e)}return n}e=t,t=e.parentNode}return null}function Ia(e){if(e=e[rn]||e[Sa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function cl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Aa(e){var n=e[sr];return n||(n=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[rl]=!0}var rr=new Set,cr={};function ea(e,n){Ta(e,n),Ta(e+"Capture",n)}function Ta(e,n){for(cr[e]=n,e=0;e<n.length;e++)rr.add(n[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Em=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hr={},dr={};function qm(e){return At.call(dr,e)?!0:At.call(hr,e)?!1:Em.test(e)?dr[e]=!0:(hr[e]=!0,!1)}function yo(e,n,t){if(qm(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function po(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function lt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mm(e){var n=mr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,o.call(this,u)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function go(e){e._valueTracker||(e._valueTracker=Mm(e))}function fr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=mr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function Mn(e){return e.replace(Cm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,t,a,l,o,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+qn(n)):e.value!==""+qn(n)&&(e.value=""+qn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?Li(e,u,qn(n)):t!=null?Li(e,u,qn(t)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+qn(c):e.removeAttribute("name")}function yr(e,n,t,a,l,o,u,c){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null))return;t=t!=null?""+qn(t):"",n=n!=null?""+qn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function Li(e,n,t){n==="number"&&vo(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function xa(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function pr(e,n,t){if(n!=null&&(n=""+qn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+qn(t):""}function gr(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(z(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=qn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ea(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Om.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function br(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&vr(e,l,a)}else for(var o in n)n.hasOwnProperty(o)&&vr(e,o,n[o])}function Yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bo(e){return Nm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hi=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Ma=null;function wr(e){var n=Ia(e);if(n&&(e=n.stateNode)){var t=e[bn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ui(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Mn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[bn]||null;if(!l)throw Error(r(90));Ui(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&fr(a)}break e;case"textarea":pr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&xa(e,!!t.multiple,n,!1)}}}var Qi=!1;function jr(e,n,t){if(Qi)return e(n,t);Qi=!0;try{var a=e(n);return a}finally{if(Qi=!1,(qa!==null||Ma!==null)&&(ti(),qa&&(n=qa,e=Ma,Ma=qa=null,wr(n),e)))for(n=0;n<e.length;n++)wr(e[n])}}function hl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[bn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Wi=!1;if(at)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Wi=!1}var Et=null,Ji=null,wo=null;function kr(){if(wo)return wo;var e,n=Ji,t=n.length,a,l="value"in Et?Et.value:Et.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(a=1;a<=u&&n[t-a]===l[o-a];a++);return wo=l.slice(e,1<a?1-a:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Sr(){return!1}function wn(e){function n(t,a,l,o,u){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ko:Sr,this.isPropagationStopped=Sr,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=wn(na),ml=R({},na,{view:0,detail:0}),Dm=wn(ml),Vi,Xi,fl,Io=R({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fl&&(fl&&e.type==="mousemove"?(Vi=e.screenX-fl.screenX,Xi=e.screenY-fl.screenY):Xi=Vi=0,fl=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Ir=wn(Io),Rm=R({},Io,{dataTransfer:0}),Bm=wn(Rm),_m=R({},ml,{relatedTarget:0}),Zi=wn(_m),Um=R({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=wn(Um),Ym=R({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=wn(Ym),Gm=R({},na,{data:0}),Ar=wn(Gm),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jm[e])?!!n[e]:!1}function Ki(){return Vm}var Xm=R({},ml,{key:function(e){if(e.key){var n=Qm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ki,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zm=wn(Xm),Km=R({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tr=wn(Km),Fm=R({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ki}),$m=wn(Fm),Pm=R({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=wn(Pm),nf=R({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=wn(nf),af=R({},na,{newState:0,oldState:0}),lf=wn(af),of=[9,13,27,32],Fi=at&&"CompositionEvent"in window,yl=null;at&&"documentMode"in document&&(yl=document.documentMode);var uf=at&&"TextEvent"in window&&!yl,xr=at&&(!Fi||yl&&8<yl&&11>=yl),Er=" ",qr=!1;function Mr(e,n){switch(e){case"keyup":return of.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function sf(e,n){switch(e){case"compositionend":return Cr(n);case"keypress":return n.which!==32?null:(qr=!0,Er);case"textInput":return e=n.data,e===Er&&qr?null:e;default:return null}}function rf(e,n){if(Ca)return e==="compositionend"||!Fi&&Mr(e,n)?(e=kr(),wo=Ji=Et=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xr&&n.locale!=="ko"?null:n.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cf[e.type]:n==="textarea"}function zr(e,n,t,a){qa?Ma?Ma.push(a):Ma=[a]:qa=a,n=ui(n,"onChange"),0<n.length&&(t=new So("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var pl=null,gl=null;function hf(e){od(e,0)}function Ao(e){var n=cl(e);if(fr(n))return e}function Nr(e,n){if(e==="change")return n}var Dr=!1;if(at){var $i;if(at){var Pi="oninput"in document;if(!Pi){var Rr=document.createElement("div");Rr.setAttribute("oninput","return;"),Pi=typeof Rr.oninput=="function"}$i=Pi}else $i=!1;Dr=$i&&(!document.documentMode||9<document.documentMode)}function Br(){pl&&(pl.detachEvent("onpropertychange",_r),gl=pl=null)}function _r(e){if(e.propertyName==="value"&&Ao(gl)){var n=[];zr(n,gl,e,Gi(e)),jr(hf,n)}}function df(e,n,t){e==="focusin"?(Br(),pl=n,gl=t,pl.attachEvent("onpropertychange",_r)):e==="focusout"&&Br()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(gl)}function ff(e,n){if(e==="click")return Ao(n)}function yf(e,n){if(e==="input"||e==="change")return Ao(n)}function pf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:pf;function vl(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!At.call(n,l)||!Sn(e[l],n[l]))return!1}return!0}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,n){var t=Ur(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ur(t)}}function Yr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vo(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vo(e.document)}return n}function eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function gf(e,n){var t=Hr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yr(n.ownerDocument.documentElement,n)){if(a!==null&&eu(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!t.extend&&o>a&&(l=a,a=o,o=l),l=Lr(n,o);var u=Lr(n,a);l&&u&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==u.node||t.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),o>a?(t.addRange(e),t.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vf=at&&"documentMode"in document&&11>=document.documentMode,Oa=null,nu=null,bl=null,tu=!1;function Gr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;tu||Oa==null||Oa!==vo(a)||(a=Oa,"selectionStart"in a&&eu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bl&&vl(bl,a)||(bl=a,a=ui(nu,"onSelect"),0<a.length&&(n=new So("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Oa)))}function ta(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var za={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},au={},Qr={};at&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function aa(e){if(au[e])return au[e];if(!za[e])return e;var n=za[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qr)return au[e]=n[t];return e}var Wr=aa("animationend"),Jr=aa("animationiteration"),Vr=aa("animationstart"),bf=aa("transitionrun"),wf=aa("transitionstart"),jf=aa("transitioncancel"),Xr=aa("transitionend"),Zr=new Map,Kr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Hn(e,n){Zr.set(e,n),ea(n,[e])}var Cn=[],Na=0,lu=0;function To(){for(var e=Na,n=lu=Na=0;n<e;){var t=Cn[n];Cn[n++]=null;var a=Cn[n];Cn[n++]=null;var l=Cn[n];Cn[n++]=null;var o=Cn[n];if(Cn[n++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}o!==0&&Fr(t,l,o)}}function xo(e,n,t,a){Cn[Na++]=e,Cn[Na++]=n,Cn[Na++]=t,Cn[Na++]=a,lu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ou(e,n,t,a){return xo(e,n,t,a),Eo(e)}function qt(e,n){return xo(e,null,null,n),Eo(e)}function Fr(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;l&&n!==null&&e.tag===3&&(o=e.stateNode,l=31-K(t),o=o.hiddenUpdates,e=o[l],e===null?o[l]=[n]:e.push(n),n.lane=t|536870912)}function Eo(e){if(50<Ql)throw Ql=0,hs=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Da={},$r=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=$r.get(e);return t!==void 0?t:(n={value:e,source:n,stack:oe(n)},$r.set(e,n),n)}return{value:e,source:n,stack:oe(n)}}var Ra=[],Ba=0,qo=null,Mo=0,zn=[],Nn=0,la=null,ot=1,it="";function oa(e,n){Ra[Ba++]=Mo,Ra[Ba++]=qo,qo=e,Mo=n}function Pr(e,n,t){zn[Nn++]=ot,zn[Nn++]=it,zn[Nn++]=la,la=e;var a=ot;e=it;var l=32-K(a)-1;a&=~(1<<l),t+=1;var o=32-K(n)+l;if(30<o){var u=l-l%5;o=(a&(1<<u)-1).toString(32),a>>=u,l-=u,ot=1<<32-K(n)+l|t<<l|a,it=o+e}else ot=1<<o|t<<l|a,it=e}function iu(e){e.return!==null&&(oa(e,1),Pr(e,1,0))}function uu(e){for(;e===qo;)qo=Ra[--Ba],Ra[Ba]=null,Mo=Ra[--Ba],Ra[Ba]=null;for(;e===la;)la=zn[--Nn],zn[Nn]=null,it=zn[--Nn],zn[Nn]=null,ot=zn[--Nn],zn[Nn]=null}var mn=null,an=null,Se=!1,Gn=null,Zn=!1,su=Error(r(519));function ia(e){var n=Error(r(418,""));throw kl(On(n,e)),su}function ec(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[rn]=e,n[bn]=a,t){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(t=0;t<Jl.length;t++)pe(Jl[t],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),yr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),go(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),gr(n,a.value,a.defaultValue,a.children),go(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||rd(n.textContent,t)?(a.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),a.onScroll!=null&&pe("scroll",n),a.onScrollEnd!=null&&pe("scrollend",n),a.onClick!=null&&(n.onclick=si),n=!0):n=!1,n||ia(e)}function nc(e){for(mn=e.return;mn;)switch(mn.tag){case 3:case 27:Zn=!0;return;case 5:case 13:Zn=!1;return;default:mn=mn.return}}function wl(e){if(e!==mn)return!1;if(!Se)return nc(e),Se=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Es(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&an&&ia(e),nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){an=Wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}an=null}}else an=mn?Wn(e.stateNode.nextSibling):null;return!0}function jl(){an=mn=null,Se=!1}function kl(e){Gn===null?Gn=[e]:Gn.push(e)}var Sl=Error(r(460)),tc=Error(r(474)),ru={then:function(){}};function ac(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Co(){}function lc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Co,Co),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(r(483)):e;default:if(typeof n.status=="string")n.then(Co,Co);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(r(483)):e}throw Il=n,Sl}}var Il=null;function oc(){if(Il===null)throw Error(r(459));var e=Il;return Il=null,e}var _a=null,Al=0;function Oo(e){var n=Al;return Al+=1,_a===null&&(_a=[]),lc(_a,e,n)}function Tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zo(e,n){throw n.$$typeof===p?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ic(e){var n=e._init;return n(e._payload)}function uc(e){function n(k,b){if(e){var I=k.deletions;I===null?(k.deletions=[b],k.flags|=16):I.push(b)}}function t(k,b){if(!e)return null;for(;b!==null;)n(k,b),b=b.sibling;return null}function a(k){for(var b=new Map;k!==null;)k.key!==null?b.set(k.key,k):b.set(k.index,k),k=k.sibling;return b}function l(k,b){return k=Yt(k,b),k.index=0,k.sibling=null,k}function o(k,b,I){return k.index=I,e?(I=k.alternate,I!==null?(I=I.index,I<b?(k.flags|=33554434,b):I):(k.flags|=33554434,b)):(k.flags|=1048576,b)}function u(k){return e&&k.alternate===null&&(k.flags|=33554434),k}function c(k,b,I,N){return b===null||b.tag!==6?(b=as(I,k.mode,N),b.return=k,b):(b=l(b,I),b.return=k,b)}function f(k,b,I,N){var F=I.type;return F===g?q(k,b,I.props.children,N,I.key):b!==null&&(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===X&&ic(F)===b.type)?(b=l(b,I.props),Tl(b,I),b.return=k,b):(b=Fo(I.type,I.key,I.props,null,k.mode,N),Tl(b,I),b.return=k,b)}function w(k,b,I,N){return b===null||b.tag!==4||b.stateNode.containerInfo!==I.containerInfo||b.stateNode.implementation!==I.implementation?(b=ls(I,k.mode,N),b.return=k,b):(b=l(b,I.children||[]),b.return=k,b)}function q(k,b,I,N,F){return b===null||b.tag!==7?(b=pa(I,k.mode,N,F),b.return=k,b):(b=l(b,I),b.return=k,b)}function B(k,b,I){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=as(""+b,k.mode,I),b.return=k,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case S:return I=Fo(b.type,b.key,b.props,null,k.mode,I),Tl(I,b),I.return=k,I;case T:return b=ls(b,k.mode,I),b.return=k,b;case X:var N=b._init;return b=N(b._payload),B(k,b,I)}if(z(b)||le(b))return b=pa(b,k.mode,I,null),b.return=k,b;if(typeof b.then=="function")return B(k,Oo(b),I);if(b.$$typeof===Y)return B(k,Xo(k,b),I);zo(k,b)}return null}function A(k,b,I,N){var F=b!==null?b.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return F!==null?null:c(k,b,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case S:return I.key===F?f(k,b,I,N):null;case T:return I.key===F?w(k,b,I,N):null;case X:return F=I._init,I=F(I._payload),A(k,b,I,N)}if(z(I)||le(I))return F!==null?null:q(k,b,I,N,null);if(typeof I.then=="function")return A(k,b,Oo(I),N);if(I.$$typeof===Y)return A(k,b,Xo(k,I),N);zo(k,I)}return null}function E(k,b,I,N,F){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return k=k.get(I)||null,c(b,k,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case S:return k=k.get(N.key===null?I:N.key)||null,f(b,k,N,F);case T:return k=k.get(N.key===null?I:N.key)||null,w(b,k,N,F);case X:var de=N._init;return N=de(N._payload),E(k,b,I,N,F)}if(z(N)||le(N))return k=k.get(I)||null,q(b,k,N,F,null);if(typeof N.then=="function")return E(k,b,I,Oo(N),F);if(N.$$typeof===Y)return E(k,b,I,Xo(b,N),F);zo(b,N)}return null}function $(k,b,I,N){for(var F=null,de=null,ee=b,ae=b=0,tn=null;ee!==null&&ae<I.length;ae++){ee.index>ae?(tn=ee,ee=null):tn=ee.sibling;var Ie=A(k,ee,I[ae],N);if(Ie===null){ee===null&&(ee=tn);break}e&&ee&&Ie.alternate===null&&n(k,ee),b=o(Ie,b,ae),de===null?F=Ie:de.sibling=Ie,de=Ie,ee=tn}if(ae===I.length)return t(k,ee),Se&&oa(k,ae),F;if(ee===null){for(;ae<I.length;ae++)ee=B(k,I[ae],N),ee!==null&&(b=o(ee,b,ae),de===null?F=ee:de.sibling=ee,de=ee);return Se&&oa(k,ae),F}for(ee=a(ee);ae<I.length;ae++)tn=E(ee,k,ae,I[ae],N),tn!==null&&(e&&tn.alternate!==null&&ee.delete(tn.key===null?ae:tn.key),b=o(tn,b,ae),de===null?F=tn:de.sibling=tn,de=tn);return e&&ee.forEach(function(Xt){return n(k,Xt)}),Se&&oa(k,ae),F}function se(k,b,I,N){if(I==null)throw Error(r(151));for(var F=null,de=null,ee=b,ae=b=0,tn=null,Ie=I.next();ee!==null&&!Ie.done;ae++,Ie=I.next()){ee.index>ae?(tn=ee,ee=null):tn=ee.sibling;var Xt=A(k,ee,Ie.value,N);if(Xt===null){ee===null&&(ee=tn);break}e&&ee&&Xt.alternate===null&&n(k,ee),b=o(Xt,b,ae),de===null?F=Xt:de.sibling=Xt,de=Xt,ee=tn}if(Ie.done)return t(k,ee),Se&&oa(k,ae),F;if(ee===null){for(;!Ie.done;ae++,Ie=I.next())Ie=B(k,Ie.value,N),Ie!==null&&(b=o(Ie,b,ae),de===null?F=Ie:de.sibling=Ie,de=Ie);return Se&&oa(k,ae),F}for(ee=a(ee);!Ie.done;ae++,Ie=I.next())Ie=E(ee,k,ae,Ie.value,N),Ie!==null&&(e&&Ie.alternate!==null&&ee.delete(Ie.key===null?ae:Ie.key),b=o(Ie,b,ae),de===null?F=Ie:de.sibling=Ie,de=Ie);return e&&ee.forEach(function(Dy){return n(k,Dy)}),Se&&oa(k,ae),F}function He(k,b,I,N){if(typeof I=="object"&&I!==null&&I.type===g&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case S:e:{for(var F=I.key;b!==null;){if(b.key===F){if(F=I.type,F===g){if(b.tag===7){t(k,b.sibling),N=l(b,I.props.children),N.return=k,k=N;break e}}else if(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===X&&ic(F)===b.type){t(k,b.sibling),N=l(b,I.props),Tl(N,I),N.return=k,k=N;break e}t(k,b);break}else n(k,b);b=b.sibling}I.type===g?(N=pa(I.props.children,k.mode,N,I.key),N.return=k,k=N):(N=Fo(I.type,I.key,I.props,null,k.mode,N),Tl(N,I),N.return=k,k=N)}return u(k);case T:e:{for(F=I.key;b!==null;){if(b.key===F)if(b.tag===4&&b.stateNode.containerInfo===I.containerInfo&&b.stateNode.implementation===I.implementation){t(k,b.sibling),N=l(b,I.children||[]),N.return=k,k=N;break e}else{t(k,b);break}else n(k,b);b=b.sibling}N=ls(I,k.mode,N),N.return=k,k=N}return u(k);case X:return F=I._init,I=F(I._payload),He(k,b,I,N)}if(z(I))return $(k,b,I,N);if(le(I)){if(F=le(I),typeof F!="function")throw Error(r(150));return I=F.call(I),se(k,b,I,N)}if(typeof I.then=="function")return He(k,b,Oo(I),N);if(I.$$typeof===Y)return He(k,b,Xo(k,I),N);zo(k,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,b!==null&&b.tag===6?(t(k,b.sibling),N=l(b,I),N.return=k,k=N):(t(k,b),N=as(I,k.mode,N),N.return=k,k=N),u(k)):t(k,b)}return function(k,b,I,N){try{Al=0;var F=He(k,b,I,N);return _a=null,F}catch(ee){if(ee===Sl)throw ee;var de=_n(29,ee,null,k.mode);return de.lanes=N,de.return=k,de}finally{}}}var ua=uc(!0),sc=uc(!1),Ua=ke(null),No=ke(0);function rc(e,n){e=gt,Ae(No,e),Ae(Ua,n),gt=e|n.baseLanes}function cu(){Ae(No,gt),Ae(Ua,Ua.current)}function hu(){gt=No.current,ze(Ua),ze(No)}var Dn=ke(null),Kn=null;function Mt(e){var n=e.alternate;Ae(Ze,Ze.current&1),Ae(Dn,e),Kn===null&&(n===null||Ua.current!==null||n.memoizedState!==null)&&(Kn=e)}function cc(e){if(e.tag===22){if(Ae(Ze,Ze.current),Ae(Dn,e),Kn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Kn=e)}}else Ct()}function Ct(){Ae(Ze,Ze.current),Ae(Dn,Dn.current)}function ut(e){ze(Dn),Kn===e&&(Kn=null),ze(Ze)}var Ze=ke(0);function Do(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var kf=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Sf=i.unstable_scheduleCallback,If=i.unstable_NormalPriority,Ke={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new kf,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&Sf(If,function(){e.controller.abort()})}var El=null,mu=0,La=0,Ya=null;function Af(e,n){if(El===null){var t=El=[];mu=0,La=bs(),Ya={status:"pending",value:void 0,then:function(a){t.push(a)}}}return mu++,n.then(hc,hc),n}function hc(){if(--mu===0&&El!==null){Ya!==null&&(Ya.status="fulfilled");var e=El;El=null,La=0,Ya=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Tf(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var dc=Q.S;Q.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Af(e,n),dc!==null&&dc(e,n)};var sa=ke(null);function fu(){var e=sa.current;return e!==null?e:Ce.pooledCache}function Ro(e,n){n===null?Ae(sa,sa.current):Ae(sa,n.pool)}function mc(){var e=fu();return e===null?null:{parent:Ke._currentValue,pool:e}}var Ot=0,he=null,xe=null,Je=null,Bo=!1,Ha=!1,ra=!1,_o=0,ql=0,Ga=null,xf=0;function We(){throw Error(r(321))}function yu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function pu(e,n,t,a,l,o){return Ot=o,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Q.H=e===null||e.memoizedState===null?ca:zt,ra=!1,o=t(a,l),ra=!1,Ha&&(o=yc(n,t,a,l)),fc(e),o}function fc(e){Q.H=Fn;var n=xe!==null&&xe.next!==null;if(Ot=0,Je=xe=he=null,Bo=!1,ql=0,Ga=null,n)throw Error(r(300));e===null||en||(e=e.dependencies,e!==null&&Vo(e)&&(en=!0))}function yc(e,n,t,a){he=e;var l=0;do{if(Ha&&(Ga=null),ql=0,Ha=!1,25<=l)throw Error(r(301));if(l+=1,Je=xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Q.H=ha,o=n(t,a)}while(Ha);return o}function Ef(){var e=Q.H,n=e.useState()[0];return n=typeof n.then=="function"?Ml(n):n,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(he.flags|=1024),n}function gu(){var e=_o!==0;return _o=0,e}function vu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function bu(e){if(Bo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bo=!1}Ot=0,Je=xe=he=null,Ha=!1,ql=_o=0,Ga=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?he.memoizedState=Je=e:Je=Je.next=e,Je}function Ve(){if(xe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Je===null?he.memoizedState:Je.next;if(n!==null)Je=n,xe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Je===null?he.memoizedState=Je=e:Je=Je.next=e}return Je}var Uo;Uo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ml(e){var n=ql;return ql+=1,Ga===null&&(Ga=[]),e=lc(Ga,e,n),n=he,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,Q.H=n===null||n.memoizedState===null?ca:zt),e}function Lo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===Y)return cn(e)}throw Error(r(438,String(e)))}function wu(e){var n=null,t=he.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=he.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Uo(),he.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ie;return n.index++,t}function st(e,n){return typeof n=="function"?n(e):n}function Yo(e){var n=Ve();return ju(n,xe,e)}function ju(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}n.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var c=u=null,f=null,w=n,q=!1;do{var B=w.lane&-536870913;if(B!==w.lane?(ve&B)===B:(Ot&B)===B){var A=w.revertLane;if(A===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),B===La&&(q=!0);else if((Ot&A)===A){w=w.next,A===La&&(q=!0);continue}else B={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=B,u=o):f=f.next=B,he.lanes|=A,Ht|=A;B=w.action,ra&&t(o,B),o=w.hasEagerState?w.eagerState:t(o,B)}else A={lane:B,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},f===null?(c=f=A,u=o):f=f.next=A,he.lanes|=B,Ht|=B;w=w.next}while(w!==null&&w!==n);if(f===null?u=o:f.next=c,!Sn(o,e.memoizedState)&&(en=!0,q&&(t=Ya,t!==null)))throw t;e.memoizedState=o,e.baseState=u,e.baseQueue=f,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ku(e){var n=Ve(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);Sn(o,n.memoizedState)||(en=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function pc(e,n,t){var a=he,l=Ve(),o=Se;if(o){if(t===void 0)throw Error(r(407));t=t()}else t=n();var u=!Sn((xe||l).memoizedState,t);if(u&&(l.memoizedState=t,en=!0),l=l.queue,Au(bc.bind(null,a,l,e),[e]),l.getSnapshot!==n||u||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,Qa(9,vc.bind(null,a,l,t,n),{destroy:void 0},null),Ce===null)throw Error(r(349));o||(Ot&60)!==0||gc(a,n,t)}return t}function gc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=he.updateQueue,n===null?(n=Uo(),he.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vc(e,n,t,a){n.value=t,n.getSnapshot=a,wc(n)&&jc(e)}function bc(e,n,t){return t(function(){wc(n)&&jc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function jc(e){var n=qt(e,2);n!==null&&fn(n,e,2)}function Su(e){var n=jn();if(typeof e=="function"){var t=e;if(e=t(),ra){L(!0);try{t()}finally{L(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:e},n}function kc(e,n,t,a){return e.baseState=t,ju(e,xe,typeof a=="function"?a:st)}function qf(e,n,t,a,l){if(Qo(e))throw Error(r(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){o.listeners.push(u)}};Q.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,Sc(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Sc(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var o=Q.T,u={};Q.T=u;try{var c=t(l,a),f=Q.S;f!==null&&f(u,c),Ic(e,n,c)}catch(w){Iu(e,n,w)}finally{Q.T=o}}else try{o=t(l,a),Ic(e,n,o)}catch(w){Iu(e,n,w)}}function Ic(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Ac(e,n,a)},function(a){return Iu(e,n,a)}):Ac(e,n,t)}function Ac(e,n,t){n.status="fulfilled",n.value=t,Tc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Sc(e,t)))}function Iu(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Tc(n),n=n.next;while(n!==a)}e.action=null}function Tc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xc(e,n){return n}function Ec(e,n){if(Se){var t=Ce.formState;if(t!==null){e:{var a=he;if(Se){if(an){n:{for(var l=an,o=Zn;l.nodeType!==8;){if(!o){l=null;break n}if(l=Wn(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){an=Wn(l.nextSibling),a=l.data==="F!";break e}}ia(a)}a=!1}a&&(n=t[0])}}return t=jn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xc,lastRenderedState:n},t.queue=a,t=Jc.bind(null,he,a),a.dispatch=t,a=Su(!1),o=Mu.bind(null,he,!1,a.queue),a=jn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=qf.bind(null,he,l,o,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function qc(e){var n=Ve();return Mc(n,xe,e)}function Mc(e,n,t){n=ju(e,n,xc)[0],e=Yo(st)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ml(n):n;var a=Ve(),l=a.queue,o=l.dispatch;return t!==a.memoizedState&&(he.flags|=2048,Qa(9,Mf.bind(null,l,t),{destroy:void 0},null)),[n,o,e]}function Mf(e,n){e.action=n}function Cc(e){var n=Ve(),t=xe;if(t!==null)return Mc(n,t,e);Ve(),n=n.memoizedState,t=Ve();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Qa(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=he.updateQueue,n===null&&(n=Uo(),he.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Oc(){return Ve().memoizedState}function Ho(e,n,t,a){var l=jn();he.flags|=e,l.memoizedState=Qa(1|n,t,{destroy:void 0},a===void 0?null:a)}function Go(e,n,t,a){var l=Ve();a=a===void 0?null:a;var o=l.memoizedState.inst;xe!==null&&a!==null&&yu(a,xe.memoizedState.deps)?l.memoizedState=Qa(n,t,o,a):(he.flags|=e,l.memoizedState=Qa(1|n,t,o,a))}function zc(e,n){Ho(8390656,8,e,n)}function Au(e,n){Go(2048,8,e,n)}function Nc(e,n){return Go(4,2,e,n)}function Dc(e,n){return Go(4,4,e,n)}function Rc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bc(e,n,t){t=t!=null?t.concat([e]):null,Go(4,4,Rc.bind(null,n,e),t)}function Tu(){}function _c(e,n){var t=Ve();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&yu(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Uc(e,n){var t=Ve();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&yu(n,a[1]))return a[0];if(a=e(),ra){L(!0);try{e()}finally{L(!1)}}return t.memoizedState=[a,n],a}function xu(e,n,t){return t===void 0||(Ot&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Yh(),he.lanes|=e,Ht|=e,t)}function Lc(e,n,t,a){return Sn(t,n)?t:Ua.current!==null?(e=xu(e,t,a),Sn(e,n)||(en=!0),e):(Ot&42)===0?(en=!0,e.memoizedState=t):(e=Yh(),he.lanes|=e,Ht|=e,n)}function Yc(e,n,t,a,l){var o=_.p;_.p=o!==0&&8>o?o:8;var u=Q.T,c={};Q.T=c,Mu(e,!1,n,t);try{var f=l(),w=Q.S;if(w!==null&&w(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var q=Tf(f,a);Cl(e,n,q,xn(e))}else Cl(e,n,a,xn(e))}catch(B){Cl(e,n,{then:function(){},status:"rejected",reason:B},xn())}finally{_.p=o,Q.T=u}}function Cf(){}function Eu(e,n,t,a){if(e.tag!==5)throw Error(r(476));var l=Hc(e).queue;Yc(e,l,n,re,t===null?Cf:function(){return Gc(e),t(a)})}function Hc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:re},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gc(e){var n=Hc(e).next.queue;Cl(e,n,{},xn())}function qu(){return cn(Fl)}function Qc(){return Ve().memoizedState}function Wc(){return Ve().memoizedState}function Of(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=xn();e=Rt(t);var a=Bt(n,e,t);a!==null&&(fn(a,n,t),Nl(a,n,t)),n={cache:du()},e.payload=n;return}n=n.return}}function zf(e,n,t){var a=xn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Qo(e)?Vc(n,t):(t=ou(e,n,t,a),t!==null&&(fn(t,e,a),Xc(t,n,a)))}function Jc(e,n,t){var a=xn();Cl(e,n,t,a)}function Cl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Vc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var u=n.lastRenderedState,c=o(u,t);if(l.hasEagerState=!0,l.eagerState=c,Sn(c,u))return xo(e,n,l,0),Ce===null&&To(),!1}catch{}finally{}if(t=ou(e,n,l,a),t!==null)return fn(t,e,a),Xc(t,n,a),!0}return!1}function Mu(e,n,t,a){if(a={lane:2,revertLane:bs(),action:a,hasEagerState:!1,eagerState:null,next:null},Qo(e)){if(n)throw Error(r(479))}else n=ou(e,t,a,2),n!==null&&fn(n,e,2)}function Qo(e){var n=e.alternate;return e===he||n!==null&&n===he}function Vc(e,n){Ha=Bo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xc(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}var Fn={readContext:cn,use:Lo,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We};Fn.useCacheRefresh=We,Fn.useMemoCache=We,Fn.useHostTransitionStatus=We,Fn.useFormState=We,Fn.useActionState=We,Fn.useOptimistic=We;var ca={readContext:cn,use:Lo,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:zc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ho(4194308,4,Rc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ho(4194308,4,e,n)},useInsertionEffect:function(e,n){Ho(4,2,e,n)},useMemo:function(e,n){var t=jn();n=n===void 0?null:n;var a=e();if(ra){L(!0);try{e()}finally{L(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=jn();if(t!==void 0){var l=t(n);if(ra){L(!0);try{t(n)}finally{L(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=zf.bind(null,he,e),[a.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=Su(e);var n=e.queue,t=Jc.bind(null,he,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Tu,useDeferredValue:function(e,n){var t=jn();return xu(t,e,n)},useTransition:function(){var e=Su(!1);return e=Yc.bind(null,he,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=he,l=jn();if(Se){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),Ce===null)throw Error(r(349));(ve&60)!==0||gc(a,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,zc(bc.bind(null,a,o,e),[e]),a.flags|=2048,Qa(9,vc.bind(null,a,o,t,n),{destroy:void 0},null),t},useId:function(){var e=jn(),n=Ce.identifierPrefix;if(Se){var t=it,a=ot;t=(a&~(1<<32-K(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=_o++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return jn().memoizedState=Of.bind(null,he)}};ca.useMemoCache=wu,ca.useHostTransitionStatus=qu,ca.useFormState=Ec,ca.useActionState=Ec,ca.useOptimistic=function(e){var n=jn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Mu.bind(null,he,!0,t),t.dispatch=n,[e,n]};var zt={readContext:cn,use:Lo,useCallback:_c,useContext:cn,useEffect:Au,useImperativeHandle:Bc,useInsertionEffect:Nc,useLayoutEffect:Dc,useMemo:Uc,useReducer:Yo,useRef:Oc,useState:function(){return Yo(st)},useDebugValue:Tu,useDeferredValue:function(e,n){var t=Ve();return Lc(t,xe.memoizedState,e,n)},useTransition:function(){var e=Yo(st)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Ml(e),n]},useSyncExternalStore:pc,useId:Qc};zt.useCacheRefresh=Wc,zt.useMemoCache=wu,zt.useHostTransitionStatus=qu,zt.useFormState=qc,zt.useActionState=qc,zt.useOptimistic=function(e,n){var t=Ve();return kc(t,xe,e,n)};var ha={readContext:cn,use:Lo,useCallback:_c,useContext:cn,useEffect:Au,useImperativeHandle:Bc,useInsertionEffect:Nc,useLayoutEffect:Dc,useMemo:Uc,useReducer:ku,useRef:Oc,useState:function(){return ku(st)},useDebugValue:Tu,useDeferredValue:function(e,n){var t=Ve();return xe===null?xu(t,e,n):Lc(t,xe.memoizedState,e,n)},useTransition:function(){var e=ku(st)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Ml(e),n]},useSyncExternalStore:pc,useId:Qc};ha.useCacheRefresh=Wc,ha.useMemoCache=wu,ha.useHostTransitionStatus=qu,ha.useFormState=Cc,ha.useActionState=Cc,ha.useOptimistic=function(e,n){var t=Ve();return xe!==null?kc(t,xe,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Cu(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:R({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ou={isMounted:function(e){return(e=e._reactInternals)?ne(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=xn(),l=Rt(a);l.payload=n,t!=null&&(l.callback=t),n=Bt(e,l,a),n!==null&&(fn(n,e,a),Nl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=xn(),l=Rt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Bt(e,l,a),n!==null&&(fn(n,e,a),Nl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xn(),a=Rt(t);a.tag=2,n!=null&&(a.callback=n),n=Bt(e,a,t),n!==null&&(fn(n,e,t),Nl(n,e,t))}};function Zc(e,n,t,a,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,u):n.prototype&&n.prototype.isPureReactComponent?!vl(t,a)||!vl(l,o):!0}function Kc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Ou.enqueueReplaceState(n,n.state,null)}function da(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=R({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Wo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fc(e){Wo(e)}function $c(e){console.error(e)}function Pc(e){Wo(e)}function Jo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function eh(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zu(e,n,t){return t=Rt(t),t.tag=3,t.payload={element:null},t.callback=function(){Jo(e,n)},t}function nh(e){return e=Rt(e),e.tag=3,e}function th(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){eh(n,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){eh(n,t,a),typeof l!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Nf(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&zl(n,t,l,!0),t=Dn.current,t!==null){switch(t.tag){case 13:return Kn===null?fs():t.alternate===null&&Ye===0&&(Ye=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===ru?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),ps(e,a,l)),!1;case 22:return t.flags|=65536,a===ru?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),ps(e,a,l)),!1}throw Error(r(435,t.tag))}return ps(e,a,l),fs(),!1}if(Se)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==su&&(e=Error(r(422),{cause:a}),kl(On(e,t)))):(a!==su&&(n=Error(r(423),{cause:a}),kl(On(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=On(a,t),l=zu(e.stateNode,a,l),Xu(e,l),Ye!==4&&(Ye=2)),!1;var o=Error(r(520),{cause:a});if(o=On(o,t),Hl===null?Hl=[o]:Hl.push(o),Ye!==4&&(Ye=2),n===null)return!0;a=On(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=zu(t.stateNode,a,e),Xu(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Gt===null||!Gt.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=nh(l),th(l,e,t,a),Xu(t,l),!1}t=t.return}while(t!==null);return!1}var ah=Error(r(461)),en=!1;function ln(e,n,t,a){n.child=e===null?sc(n,null,t,a):ua(n,e.child,t,a)}function lh(e,n,t,a,l){t=t.render;var o=n.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return fa(n),a=pu(e,n,t,u,o,l),c=gu(),e!==null&&!en?(vu(e,n,l),rt(e,n,l)):(Se&&c&&iu(n),n.flags|=1,ln(e,n,a,l),n.child)}function oh(e,n,t,a,l){if(e===null){var o=t.type;return typeof o=="function"&&!ts(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,ih(e,n,o,a,l)):(e=Fo(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Hu(e,l)){var u=o.memoizedProps;if(t=t.compare,t=t!==null?t:vl,t(u,a)&&e.ref===n.ref)return rt(e,n,l)}return n.flags|=1,e=Yt(o,a),e.ref=n.ref,e.return=n,n.child=e}function ih(e,n,t,a,l){if(e!==null){var o=e.memoizedProps;if(vl(o,a)&&e.ref===n.ref)if(en=!1,n.pendingProps=a=o,Hu(e,l))(e.flags&131072)!==0&&(en=!0);else return n.lanes=e.lanes,rt(e,n,l)}return Nu(e,n,t,a,l)}function uh(e,n,t){var a=n.pendingProps,l=a.children,o=(n.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(Ol(e,n),a.mode==="hidden"||o){if((n.flags&128)!==0){if(a=u!==null?u.baseLanes|t:t,e!==null){for(l=n.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;n.childLanes=o&~a}else n.childLanes=0,n.child=null;return sh(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ro(n,u!==null?u.cachePool:null),u!==null?rc(n,u):cu(),cc(n);else return n.lanes=n.childLanes=536870912,sh(e,n,u!==null?u.baseLanes|t:t,t)}else u!==null?(Ro(n,u.cachePool),rc(n,u),Ct(),n.memoizedState=null):(e!==null&&Ro(n,null),cu(),Ct());return ln(e,n,l,t),n.child}function sh(e,n,t,a){var l=fu();return l=l===null?null:{parent:Ke._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Ro(n,null),cu(),cc(n),e!==null&&zl(e,n,a,!0),null}function Ol(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function Nu(e,n,t,a,l){return fa(n),t=pu(e,n,t,a,void 0,l),a=gu(),e!==null&&!en?(vu(e,n,l),rt(e,n,l)):(Se&&a&&iu(n),n.flags|=1,ln(e,n,t,l),n.child)}function rh(e,n,t,a,l,o){return fa(n),n.updateQueue=null,t=yc(n,a,t,l),fc(e),a=gu(),e!==null&&!en?(vu(e,n,o),rt(e,n,o)):(Se&&a&&iu(n),n.flags|=1,ln(e,n,t,o),n.child)}function ch(e,n,t,a,l){if(fa(n),n.stateNode===null){var o=Da,u=t.contextType;typeof u=="object"&&u!==null&&(o=cn(u)),o=new t(a,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ou,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},Ju(n),u=t.contextType,o.context=typeof u=="object"&&u!==null?cn(u):Da,o.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Cu(n,t,u,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(u=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),u!==o.state&&Ou.enqueueReplaceState(o,o.state,null),Rl(n,a,o,l),Dl(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){o=n.stateNode;var c=n.memoizedProps,f=da(t,c);o.props=f;var w=o.context,q=t.contextType;u=Da,typeof q=="object"&&q!==null&&(u=cn(q));var B=t.getDerivedStateFromProps;q=typeof B=="function"||typeof o.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c||w!==u)&&Kc(n,o,a,u),Dt=!1;var A=n.memoizedState;o.state=A,Rl(n,a,o,l),Dl(),w=n.memoizedState,c||A!==w||Dt?(typeof B=="function"&&(Cu(n,t,B,a),w=n.memoizedState),(f=Dt||Zc(n,t,f,a,A,w,u))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=w),o.props=a,o.state=w,o.context=u,a=f):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Vu(e,n),u=n.memoizedProps,q=da(t,u),o.props=q,B=n.pendingProps,A=o.context,w=t.contextType,f=Da,typeof w=="object"&&w!==null&&(f=cn(w)),c=t.getDerivedStateFromProps,(w=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==B||A!==f)&&Kc(n,o,a,f),Dt=!1,A=n.memoizedState,o.state=A,Rl(n,a,o,l),Dl();var E=n.memoizedState;u!==B||A!==E||Dt||e!==null&&e.dependencies!==null&&Vo(e.dependencies)?(typeof c=="function"&&(Cu(n,t,c,a),E=n.memoizedState),(q=Dt||Zc(n,t,q,a,A,E,f)||e!==null&&e.dependencies!==null&&Vo(e.dependencies))?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,E,f),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,E,f)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=E),o.props=a,o.state=E,o.context=f,a=q):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),a=!1)}return o=a,Ol(e,n),a=(n.flags&128)!==0,o||a?(o=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&a?(n.child=ua(n,e.child,null,l),n.child=ua(n,null,t,l)):ln(e,n,t,l),n.memoizedState=o.state,e=n.child):e=rt(e,n,l),e}function hh(e,n,t,a){return jl(),n.flags|=256,ln(e,n,t,a),n.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:mc()}}function Bu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Un),e}function dh(e,n,t){var a=n.pendingProps,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(l?Mt(n):Ct(),Se){var c=an,f;if(f=c){e:{for(f=c,c=Zn;f.nodeType!==8;){if(!c){c=null;break e}if(f=Wn(f.nextSibling),f===null){c=null;break e}}c=f}c!==null?(n.memoizedState={dehydrated:c,treeContext:la!==null?{id:ot,overflow:it}:null,retryLane:536870912},f=_n(18,null,null,0),f.stateNode=c,f.return=n,n.child=f,mn=n,an=null,f=!0):f=!1}f||ia(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?n.lanes=16:n.lanes=536870912,null;ut(n)}return c=a.children,a=a.fallback,l?(Ct(),l=n.mode,c=Uu({mode:"hidden",children:c},l),a=pa(a,l,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,l=n.child,l.memoizedState=Ru(t),l.childLanes=Bu(e,u,t),n.memoizedState=Du,a):(Mt(n),_u(n,c))}if(f=e.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(o)n.flags&256?(Mt(n),n.flags&=-257,n=Lu(e,n,t)):n.memoizedState!==null?(Ct(),n.child=e.child,n.flags|=128,n=null):(Ct(),l=a.fallback,c=n.mode,a=Uu({mode:"visible",children:a.children},c),l=pa(l,c,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,ua(n,e.child,null,t),a=n.child,a.memoizedState=Ru(t),a.childLanes=Bu(e,u,t),n.memoizedState=Du,n=l);else if(Mt(n),c.data==="$!"){if(u=c.nextSibling&&c.nextSibling.dataset,u)var w=u.dgst;u=w,a=Error(r(419)),a.stack="",a.digest=u,kl({value:a,source:null,stack:null}),n=Lu(e,n,t)}else if(en||zl(e,n,t,!1),u=(t&e.childLanes)!==0,en||u){if(u=Ce,u!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|t))!==0?0:a,a!==0&&a!==f.retryLane)throw f.retryLane=a,qt(e,a),fn(u,e,a),ah}c.data==="$?"||fs(),n=Lu(e,n,t)}else c.data==="$?"?(n.flags|=128,n.child=e.child,n=Zf.bind(null,e),c._reactRetry=n,n=null):(e=f.treeContext,an=Wn(c.nextSibling),mn=n,Se=!0,Gn=null,Zn=!1,e!==null&&(zn[Nn++]=ot,zn[Nn++]=it,zn[Nn++]=la,ot=e.id,it=e.overflow,la=n),n=_u(n,a.children),n.flags|=4096);return n}return l?(Ct(),l=a.fallback,c=n.mode,f=e.child,w=f.sibling,a=Yt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&31457280,w!==null?l=Yt(w,l):(l=pa(l,c,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,c=e.child.memoizedState,c===null?c=Ru(t):(f=c.cachePool,f!==null?(w=Ke._currentValue,f=f.parent!==w?{parent:w,pool:w}:f):f=mc(),c={baseLanes:c.baseLanes|t,cachePool:f}),l.memoizedState=c,l.childLanes=Bu(e,u,t),n.memoizedState=Du,a):(Mt(n),t=e.child,e=t.sibling,t=Yt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function _u(e,n){return n=Uu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uu(e,n){return _h(e,n,0,null)}function Lu(e,n,t){return ua(n,e.child,null,t),e=_u(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Qu(e.return,n,t)}function Yu(e,n,t,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=l)}function fh(e,n,t){var a=n.pendingProps,l=a.revealOrder,o=a.tail;if(ln(e,n,a.children,t),a=Ze.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,t,n);else if(e.tag===19)mh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Ae(Ze,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Do(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Yu(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Do(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Yu(n,!0,t,null,o);break;case"together":Yu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ht|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(zl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Yt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Yt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Hu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Vo(e)))}function Df(e,n,t){switch(n.tag){case 3:Xn(n,n.stateNode.containerInfo),Nt(n,Ke,e.memoizedState.cache),jl();break;case 27:case 5:tt(n);break;case 4:Xn(n,n.stateNode.containerInfo);break;case 10:Nt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Mt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?dh(e,n,t):(Mt(n),e=rt(e,n,t),e!==null?e.sibling:null);Mt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(zl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return fh(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ae(Ze,Ze.current),a)break;return null;case 22:case 23:return n.lanes=0,uh(e,n,t);case 24:Nt(n,Ke,e.memoizedState.cache)}return rt(e,n,t)}function yh(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)en=!0;else{if(!Hu(e,t)&&(n.flags&128)===0)return en=!1,Df(e,n,t);en=(e.flags&131072)!==0}else en=!1,Se&&(n.flags&1048576)!==0&&Pr(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")ts(a)?(e=da(a,e),n.tag=1,n=ch(null,n,a,e,t)):(n.tag=0,n=Nu(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===O){n.tag=11,n=lh(null,n,a,e,t);break e}else if(l===D){n.tag=14,n=oh(null,n,a,e,t);break e}}throw n=ye(a)||a,Error(r(306,n,""))}}return n;case 0:return Nu(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=da(a,n.pendingProps),ch(e,n,a,l,t);case 3:e:{if(Xn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var o=n.pendingProps;l=n.memoizedState,a=l.element,Vu(e,n),Rl(n,o,null,t);var u=n.memoizedState;if(o=u.cache,Nt(n,Ke,o),o!==l.cache&&Wu(n,[Ke],t,!0),Dl(),o=u.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=hh(e,n,o,t);break e}else if(o!==a){a=On(Error(r(424)),n),kl(a),n=hh(e,n,o,t);break e}else for(an=Wn(n.stateNode.containerInfo.firstChild),mn=n,Se=!0,Gn=null,Zn=!0,t=sc(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jl(),o===a){n=rt(e,n,t);break e}ln(e,n,o,t)}n=n.child}return n;case 26:return Ol(e,n),e===null?(t=vd(n.type,null,n.pendingProps,null))?n.memoizedState=t:Se||(t=n.type,e=n.pendingProps,a=ri(Vn.current).createElement(t),a[rn]=n,a[bn]=e,on(a,t,e),Pe(a),n.stateNode=a):n.memoizedState=vd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return tt(n),e===null&&Se&&(a=n.stateNode=yd(n.type,n.pendingProps,Vn.current),mn=n,Zn=!0,an=Wn(a.firstChild)),a=n.pendingProps.children,e!==null||Se?ln(e,n,a,t):n.child=ua(n,null,a,t),Ol(e,n),n.child;case 5:return e===null&&Se&&((l=a=an)&&(a=hy(a,n.type,n.pendingProps,Zn),a!==null?(n.stateNode=a,mn=n,an=Wn(a.firstChild),Zn=!1,l=!0):l=!1),l||ia(n)),tt(n),l=n.type,o=n.pendingProps,u=e!==null?e.memoizedProps:null,a=o.children,Es(l,o)?a=null:u!==null&&Es(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=pu(e,n,Ef,null,null,t),Fl._currentValue=l),Ol(e,n),ln(e,n,a,t),n.child;case 6:return e===null&&Se&&((e=t=an)&&(t=dy(t,n.pendingProps,Zn),t!==null?(n.stateNode=t,mn=n,an=null,e=!0):e=!1),e||ia(n)),null;case 13:return dh(e,n,t);case 4:return Xn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ua(n,null,a,t):ln(e,n,a,t),n.child;case 11:return lh(e,n,n.type,n.pendingProps,t);case 7:return ln(e,n,n.pendingProps,t),n.child;case 8:return ln(e,n,n.pendingProps.children,t),n.child;case 12:return ln(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Nt(n,n.type,a.value),ln(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,fa(n),l=cn(l),a=a(l),n.flags|=1,ln(e,n,a,t),n.child;case 14:return oh(e,n,n.type,n.pendingProps,t);case 15:return ih(e,n,n.type,n.pendingProps,t);case 19:return fh(e,n,t);case 22:return uh(e,n,t);case 24:return fa(n),a=cn(Ke),e===null?(l=fu(),l===null&&(l=Ce,o=du(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:a,cache:l},Ju(n),Nt(n,Ke,l)):((e.lanes&t)!==0&&(Vu(e,n),Rl(n,null,null,t),Dl()),l=e.memoizedState,o=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Nt(n,Ke,a)):(a=o.cache,Nt(n,Ke,a),a!==l.cache&&Wu(n,[Ke],t,!0))),ln(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Gu=ke(null),ma=null,ct=null;function Nt(e,n,t){Ae(Gu,n._currentValue),n._currentValue=t}function ht(e){e._currentValue=Gu.current,ze(Gu)}function Qu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Wu(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var u=l.child;o=o.firstContext;e:for(;o!==null;){var c=o;o=l;for(var f=0;f<n.length;f++)if(c.context===n[f]){o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Qu(o.return,t,e),a||(u=null);break e}o=c.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(r(341));u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),Qu(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function zl(e,n,t,a){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(r(387));if(u=u.memoizedProps,u!==null){var c=l.type;Sn(l.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(l===un.current){if(u=l.alternate,u===null)throw Error(r(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Fl):e=[Fl])}l=l.return}e!==null&&Wu(n,e,t,a),n.flags|=262144}function Vo(e){for(e=e.firstContext;e!==null;){if(!Sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fa(e){ma=e,ct=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return ph(ma,e)}function Xo(e,n){return ma===null&&fa(e),ph(e,n)}function ph(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},ct===null){if(e===null)throw Error(r(308));ct=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ct=ct.next=n;return t}var Dt=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Be&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Eo(e),Fr(e,null,t),n}return xo(e,a,n,t),Eo(e)}function Nl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,sl(e,t)}}function Xu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=u:o=o.next=u,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Zu=!1;function Dl(){if(Zu){var e=Ya;if(e!==null)throw e}}function Rl(e,n,t,a){Zu=!1;var l=e.updateQueue;Dt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var f=c,w=f.next;f.next=null,u===null?o=w:u.next=w,u=f;var q=e.alternate;q!==null&&(q=q.updateQueue,c=q.lastBaseUpdate,c!==u&&(c===null?q.firstBaseUpdate=w:c.next=w,q.lastBaseUpdate=f))}if(o!==null){var B=l.baseState;u=0,q=w=f=null,c=o;do{var A=c.lane&-536870913,E=A!==c.lane;if(E?(ve&A)===A:(a&A)===A){A!==0&&A===La&&(Zu=!0),q!==null&&(q=q.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var $=e,se=c;A=n;var He=t;switch(se.tag){case 1:if($=se.payload,typeof $=="function"){B=$.call(He,B,A);break e}B=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=se.payload,A=typeof $=="function"?$.call(He,B,A):$,A==null)break e;B=R({},B,A);break e;case 2:Dt=!0}}A=c.callback,A!==null&&(e.flags|=64,E&&(e.flags|=8192),E=l.callbacks,E===null?l.callbacks=[A]:E.push(A))}else E={lane:A,tag:c.tag,payload:c.payload,callback:c.callback,next:null},q===null?(w=q=E,f=B):q=q.next=E,u|=A;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;E=c,c=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);q===null&&(f=B),l.baseState=f,l.firstBaseUpdate=w,l.lastBaseUpdate=q,o===null&&(l.shared.lanes=0),Ht|=u,e.lanes=u,e.memoizedState=B}}function gh(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function vh(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)gh(t[e],n)}function Bl(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var o=t.create,u=t.inst;a=o(),u.destroy=a}t=t.next}while(t!==l)}}catch(c){Me(n,n.return,c)}}function _t(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,l=n;var f=t;try{c()}catch(w){Me(l,f,w)}}}a=a.next}while(a!==o)}}catch(w){Me(n,n.return,w)}}function bh(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{vh(n,t)}catch(a){Me(e,e.return,a)}}}function wh(e,n,t){t.props=da(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Me(e,n,a)}}function ya(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(o){Me(e,n,o)}}function In(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Me(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Me(e,n,l)}else t.current=null}function jh(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Me(e,e.return,l)}}function kh(e,n,t){try{var a=e.stateNode;iy(a,e.type,t,n),a[bn]=n}catch(l){Me(e,e.return,l)}}function Sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Fu(e,n,t),e=e.sibling;e!==null;)Fu(e,n,t),e=e.sibling}function Zo(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Zo(e,n,t),e=e.sibling;e!==null;)Zo(e,n,t),e=e.sibling}var dt=!1,Le=!1,$u=!1,Ih=typeof WeakSet=="function"?WeakSet:Set,nn=null,Ah=!1;function Rf(e,n){if(e=e.containerInfo,Ts=yi,e=Hr(e),eu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var u=0,c=-1,f=-1,w=0,q=0,B=e,A=null;n:for(;;){for(var E;B!==t||l!==0&&B.nodeType!==3||(c=u+l),B!==o||a!==0&&B.nodeType!==3||(f=u+a),B.nodeType===3&&(u+=B.nodeValue.length),(E=B.firstChild)!==null;)A=B,B=E;for(;;){if(B===e)break n;if(A===t&&++w===l&&(c=u),A===o&&++q===a&&(f=u),(E=B.nextSibling)!==null)break;B=A,A=B.parentNode}B=E}t=c===-1||f===-1?null:{start:c,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(xs={focusedElem:e,selectionRange:t},yi=!1,nn=n;nn!==null;)if(n=nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,nn=e;else for(;nn!==null;){switch(n=nn,o=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,a=t.stateNode;try{var $=da(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate($,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(se){Me(t,t.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Cs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,nn=e;break}nn=n.return}return $=Ah,Ah=!1,$}function Th(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ft(e,t),a&4&&Bl(5,t);break;case 1:if(ft(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){Me(t,t.return,c)}else{var l=da(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Me(t,t.return,c)}}a&64&&bh(t),a&512&&ya(t,t.return);break;case 3:if(ft(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vh(a,e)}catch(c){Me(t,t.return,c)}}break;case 26:ft(e,t),a&512&&ya(t,t.return);break;case 27:case 5:ft(e,t),n===null&&a&4&&jh(t),a&512&&ya(t,t.return);break;case 12:ft(e,t);break;case 13:ft(e,t),a&4&&qh(e,t);break;case 22:if(l=t.memoizedState!==null||dt,!l){n=n!==null&&n.memoizedState!==null||Le;var o=dt,u=Le;dt=l,(Le=n)&&!u?Ut(e,t,(t.subtreeFlags&8772)!==0):ft(e,t),dt=o,Le=u}a&512&&(t.memoizedProps.mode==="manual"?ya(t,t.return):In(t,t.return));break;default:ft(e,t)}}function xh(e){var n=e.alternate;n!==null&&(e.alternate=null,xh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_i(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,An=!1;function mt(e,n,t){for(t=t.child;t!==null;)Eh(e,n,t),t=t.sibling}function Eh(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ft,t)}catch{}switch(t.tag){case 26:Le||In(t,n),mt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Le||In(t,n);var a=Xe,l=An;for(Xe=t.stateNode,mt(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_i(t),Xe=a,An=l;break;case 5:Le||In(t,n);case 6:l=Xe;var o=An;if(Xe=null,mt(e,n,t),Xe=l,An=o,Xe!==null)if(An)try{e=Xe,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(u){Me(t,n,u)}else try{Xe.removeChild(t.stateNode)}catch(u){Me(t,n,u)}break;case 18:Xe!==null&&(An?(n=Xe,t=t.stateNode,n.nodeType===8?Ms(n.parentNode,t):n.nodeType===1&&Ms(n,t),no(n)):Ms(Xe,t.stateNode));break;case 4:a=Xe,l=An,Xe=t.stateNode.containerInfo,An=!0,mt(e,n,t),Xe=a,An=l;break;case 0:case 11:case 14:case 15:Le||_t(2,t,n),Le||_t(4,t,n),mt(e,n,t);break;case 1:Le||(In(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&wh(t,n,a)),mt(e,n,t);break;case 21:mt(e,n,t);break;case 22:Le||In(t,n),Le=(a=Le)||t.memoizedState!==null,mt(e,n,t),Le=a;break;default:mt(e,n,t)}}function qh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{no(e)}catch(t){Me(n,n.return,t)}}function Bf(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ih),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ih),n;default:throw Error(r(435,e.tag))}}function Pu(e,n){var t=Bf(e);n.forEach(function(a){var l=Kf.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function Rn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],o=e,u=n,c=u;e:for(;c!==null;){switch(c.tag){case 27:case 5:Xe=c.stateNode,An=!1;break e;case 3:Xe=c.stateNode.containerInfo,An=!0;break e;case 4:Xe=c.stateNode.containerInfo,An=!0;break e}c=c.return}if(Xe===null)throw Error(r(160));Eh(o,u,l),Xe=null,An=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Mh(n,e),n=n.sibling}var Qn=null;function Mh(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(n,e),Bn(e),a&4&&(_t(3,e,e.return),Bl(3,e),_t(5,e,e.return));break;case 1:Rn(n,e),Bn(e),a&512&&(Le||t===null||In(t,t.return)),a&64&&dt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Qn;if(Rn(n,e),Bn(e),a&512&&(Le||t===null||In(t,t.return)),a&4){var o=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[rl]||o[rn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),on(o,a,t),o[rn]=e,Pe(o),a=o;break e;case"link":var u=jd("link","href",l).get(a+(t.href||""));if(u){for(var c=0;c<u.length;c++)if(o=u[c],o.getAttribute("href")===(t.href==null?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(c,1);break n}}o=l.createElement(a),on(o,a,t),l.head.appendChild(o);break;case"meta":if(u=jd("meta","content",l).get(a+(t.content||""))){for(c=0;c<u.length;c++)if(o=u[c],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(c,1);break n}}o=l.createElement(a),on(o,a,t),l.head.appendChild(o);break;default:throw Error(r(468,a))}o[rn]=e,Pe(o),a=o}e.stateNode=a}else kd(l,e.type,e.stateNode);else e.stateNode=wd(l,a,e.memoizedProps);else o!==a?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,a===null?kd(l,e.type,e.stateNode):wd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&kh(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,o=e.memoizedProps;try{for(var f=l.firstChild;f;){var w=f.nextSibling,q=f.nodeName;f[rl]||q==="HEAD"||q==="BODY"||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=w}for(var B=e.type,A=l.attributes;A.length;)l.removeAttributeNode(A[0]);on(l,B,o),l[rn]=e,l[bn]=o}catch($){Me(e,e.return,$)}}case 5:if(Rn(n,e),Bn(e),a&512&&(Le||t===null||In(t,t.return)),e.flags&32){l=e.stateNode;try{Ea(l,"")}catch($){Me(e,e.return,$)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,kh(e,l,t!==null?t.memoizedProps:l)),a&1024&&($u=!0);break;case 6:if(Rn(n,e),Bn(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch($){Me(e,e.return,$)}}break;case 3:if(di=null,l=Qn,Qn=ci(n.containerInfo),Rn(n,e),Qn=l,Bn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{no(n.containerInfo)}catch($){Me(e,e.return,$)}$u&&($u=!1,Ch(e));break;case 4:a=Qn,Qn=ci(e.stateNode.containerInfo),Rn(n,e),Bn(e),Qn=a;break;case 12:Rn(n,e),Bn(e);break;case 13:Rn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ss=En()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pu(e,a)));break;case 22:if(a&512&&(Le||t===null||In(t,t.return)),f=e.memoizedState!==null,w=t!==null&&t.memoizedState!==null,q=dt,B=Le,dt=q||f,Le=B||w,Rn(n,e),Le=B,dt=q,Bn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=f?n._visibility&-2:n._visibility|1,f&&(n=dt||Le,t===null||w||n||Wa(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){w=t=n;try{if(l=w.stateNode,f)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=w.stateNode,c=w.memoizedProps.style;var E=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch($){Me(w,w.return,$)}}}else if(n.tag===6){if(t===null){w=n;try{w.stateNode.nodeValue=f?"":w.memoizedProps}catch($){Me(w,w.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Pu(e,t))));break;case 19:Rn(n,e),Bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pu(e,a)));break;case 21:break;default:Rn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Sh(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var l=a.stateNode,o=Ku(e);Zo(e,o,l);break;case 5:var u=a.stateNode;a.flags&32&&(Ea(u,""),a.flags&=-33);var c=Ku(e);Zo(e,c,u);break;case 3:case 4:var f=a.stateNode.containerInfo,w=Ku(e);Fu(e,w,f);break;default:throw Error(r(161))}}}catch(q){Me(e,e.return,q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ch(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ch(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ft(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Th(e,n.alternate,n),n=n.sibling}function Wa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_t(4,n,n.return),Wa(n);break;case 1:In(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&wh(n,n.return,t),Wa(n);break;case 26:case 27:case 5:In(n,n.return),Wa(n);break;case 22:In(n,n.return),n.memoizedState===null&&Wa(n);break;default:Wa(n)}e=e.sibling}}function Ut(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,o=n,u=o.flags;switch(o.tag){case 0:case 11:case 15:Ut(l,o,t),Bl(4,o);break;case 1:if(Ut(l,o,t),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(w){Me(a,a.return,w)}if(a=o,l=a.updateQueue,l!==null){var c=a.stateNode;try{var f=l.shared.hiddenCallbacks;if(f!==null)for(l.shared.hiddenCallbacks=null,l=0;l<f.length;l++)gh(f[l],c)}catch(w){Me(a,a.return,w)}}t&&u&64&&bh(o),ya(o,o.return);break;case 26:case 27:case 5:Ut(l,o,t),t&&a===null&&u&4&&jh(o),ya(o,o.return);break;case 12:Ut(l,o,t);break;case 13:Ut(l,o,t),t&&u&4&&qh(l,o);break;case 22:o.memoizedState===null&&Ut(l,o,t),ya(o,o.return);break;default:Ut(l,o,t)}n=n.sibling}}function es(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&xl(t))}function ns(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e))}function Lt(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Oh(e,n,t,a),n=n.sibling}function Oh(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Lt(e,n,t,a),l&2048&&Bl(9,n);break;case 3:Lt(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e)));break;case 12:if(l&2048){Lt(e,n,t,a),e=n.stateNode;try{var o=n.memoizedProps,u=o.id,c=o.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){Me(n,n.return,f)}}else Lt(e,n,t,a);break;case 23:break;case 22:o=n.stateNode,n.memoizedState!==null?o._visibility&4?Lt(e,n,t,a):_l(e,n):o._visibility&4?Lt(e,n,t,a):(o._visibility|=4,Ja(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&es(n.alternate,n);break;case 24:Lt(e,n,t,a),l&2048&&ns(n.alternate,n);break;default:Lt(e,n,t,a)}}function Ja(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var o=e,u=n,c=t,f=a,w=u.flags;switch(u.tag){case 0:case 11:case 15:Ja(o,u,c,f,l),Bl(8,u);break;case 23:break;case 22:var q=u.stateNode;u.memoizedState!==null?q._visibility&4?Ja(o,u,c,f,l):_l(o,u):(q._visibility|=4,Ja(o,u,c,f,l)),l&&w&2048&&es(u.alternate,u);break;case 24:Ja(o,u,c,f,l),l&&w&2048&&ns(u.alternate,u);break;default:Ja(o,u,c,f,l)}n=n.sibling}}function _l(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:_l(t,a),l&2048&&es(a.alternate,a);break;case 24:_l(t,a),l&2048&&ns(a.alternate,a);break;default:_l(t,a)}n=n.sibling}}var Ul=8192;function Va(e){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)zh(e),e=e.sibling}function zh(e){switch(e.tag){case 26:Va(e),e.flags&Ul&&e.memoizedState!==null&&Ay(Qn,e.memoizedState,e.memoizedProps);break;case 5:Va(e);break;case 3:case 4:var n=Qn;Qn=ci(e.stateNode.containerInfo),Va(e),Qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ul,Ul=16777216,Va(e),Ul=n):Va(e));break;default:Va(e)}}function Nh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];nn=a,Rh(a,e)}Nh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dh(e),e=e.sibling}function Dh(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&_t(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Ko(e)):Ll(e);break;default:Ll(e)}}function Ko(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];nn=a,Rh(a,e)}Nh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_t(8,n,n.return),Ko(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Ko(n));break;default:Ko(n)}e=e.sibling}}function Rh(e,n){for(;nn!==null;){var t=nn;switch(t.tag){case 0:case 11:case 15:_t(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,nn=a;else e:for(t=e;nn!==null;){a=nn;var l=a.sibling,o=a.return;if(xh(a),a===t){nn=null;break e}if(l!==null){l.return=o,nn=l;break e}nn=o}}}function _f(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,n,t,a){return new _f(e,n,t,a)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,n){var t=e.alternate;return t===null?(t=_n(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Bh(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fo(e,n,t,a,l,o){var u=0;if(a=e,typeof e=="function")ts(e)&&(u=1);else if(typeof e=="string")u=Sy(e,t,Ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case g:return pa(t.children,l,o,n);case y:u=8,l|=24;break;case x:return e=_n(12,t,n,l|2),e.elementType=x,e.lanes=o,e;case Z:return e=_n(13,t,n,l),e.elementType=Z,e.lanes=o,e;case G:return e=_n(19,t,n,l),e.elementType=G,e.lanes=o,e;case V:return _h(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case Y:u=10;break e;case C:u=9;break e;case O:u=11;break e;case D:u=14;break e;case X:u=16,a=null;break e}u=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=_n(u,t,n,l),n.elementType=e,n.type=a,n.lanes=o,n}function pa(e,n,t,a){return e=_n(7,e,a,n),e.lanes=t,e}function _h(e,n,t,a){e=_n(22,e,a,n),e.elementType=V,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=l._current;if(o===null)throw Error(r(456));if((l._pendingVisibility&2)===0){var u=qt(o,2);u!==null&&(l._pendingVisibility|=2,fn(u,o,2))}},attach:function(){var o=l._current;if(o===null)throw Error(r(456));if((l._pendingVisibility&2)!==0){var u=qt(o,2);u!==null&&(l._pendingVisibility&=-3,fn(u,o,2))}}};return e.stateNode=l,e}function as(e,n,t){return e=_n(6,e,null,n),e.lanes=t,e}function ls(e,n,t){return n=_n(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function yt(e){e.flags|=4}function Uh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sd(n)){if(n=Dn.current,n!==null&&((ve&4194176)===ve?Kn!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Kn))throw Il=ru,tc;e.flags|=8192}}function $o(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?kn():536870912,e.lanes|=n,Za|=n)}function Yl(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Uf(e,n,t){var a=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Re(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ht(Ke),St(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(wl(n)?yt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gn!==null&&(ds(Gn),Gn=null))),Re(n),null;case 26:return t=n.memoizedState,e===null?(yt(n),t!==null?(Re(n),Uh(n,t)):(Re(n),n.flags&=-16777217)):t?t!==e.memoizedState?(yt(n),Re(n),Uh(n,t)):(Re(n),n.flags&=-16777217):(e.memoizedProps!==a&&yt(n),Re(n),n.flags&=-16777217),null;case 27:It(n),t=Vn.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Re(n),null}e=Ge.current,wl(n)?ec(n):(e=yd(l,a,t),n.stateNode=e,yt(n))}return Re(n),null;case 5:if(It(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Re(n),null}if(e=Ge.current,wl(n))ec(n);else{switch(l=ri(Vn.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[rn]=n,e[bn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(on(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yt(n)}}return Re(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&yt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Vn.current,wl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=mn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[rn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||rd(e.nodeValue,t)),e||ia(n)}else e=ri(e).createTextNode(a),e[rn]=n,n.stateNode=e}return Re(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=wl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[rn]=n}else jl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),l=!1}else Gn!==null&&(ds(Gn),Gn=null),l=!0;if(!l)return n.flags&256?(ut(n),n):(ut(n),null)}if(ut(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),$o(n,n.updateQueue),Re(n),null;case 4:return St(),e===null&&Ss(n.stateNode.containerInfo),Re(n),null;case 10:return ht(n.type),Re(n),null;case 19:if(ze(Ze),l=n.memoizedState,l===null)return Re(n),null;if(a=(n.flags&128)!==0,o=l.rendering,o===null)if(a)Yl(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Do(e),o!==null){for(n.flags|=128,Yl(l,!1),e=o.updateQueue,n.updateQueue=e,$o(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Bh(t,e),t=t.sibling;return Ae(Ze,Ze.current&1|2),n.child}e=e.sibling}l.tail!==null&&En()>Po&&(n.flags|=128,a=!0,Yl(l,!1),n.lanes=4194304)}else{if(!a)if(e=Do(o),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,$o(n,e),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Se)return Re(n),null}else 2*En()-l.renderingStartTime>Po&&t!==536870912&&(n.flags|=128,a=!0,Yl(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(e=l.last,e!==null?e.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=En(),n.sibling=null,e=Ze.current,Ae(Ze,a?e&1|2:e&1),n):(Re(n),null);case 22:case 23:return ut(n),hu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),t=n.updateQueue,t!==null&&$o(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&ze(sa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),ht(Ke),Re(n),null;case 25:return null}throw Error(r(156,n.tag))}function Lf(e,n){switch(uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(Ke),St(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return It(n),null;case 13:if(ut(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));jl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ze(Ze),null;case 4:return St(),null;case 10:return ht(n.type),null;case 22:case 23:return ut(n),hu(),e!==null&&ze(sa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ht(Ke),null;case 25:return null;default:return null}}function Lh(e,n){switch(uu(n),n.tag){case 3:ht(Ke),St();break;case 26:case 27:case 5:It(n);break;case 4:St();break;case 13:ut(n);break;case 19:ze(Ze);break;case 10:ht(n.type);break;case 22:case 23:ut(n),hu(),e!==null&&ze(sa);break;case 24:ht(Ke)}}var Yf={getCacheForType:function(e){var n=cn(Ke),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},Hf=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ce=null,me=null,ve=0,Oe=0,Tn=null,pt=!1,Xa=!1,os=!1,gt=0,Ye=0,Ht=0,ga=0,is=0,Un=0,Za=0,Hl=null,$n=null,us=!1,ss=0,Po=1/0,ei=null,Gt=null,ni=!1,va=null,Gl=0,rs=0,cs=null,Ql=0,hs=null;function xn(){if((Be&2)!==0&&ve!==0)return ve&-ve;if(Q.T!==null){var e=La;return e!==0?e:bs()}return ur()}function Yh(){Un===0&&(Un=(ve&536870912)===0||Se?ka():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),Un}function fn(e,n,t){(e===Ce&&Oe===2||e.cancelPendingCommit!==null)&&(Ka(e,0),vt(e,ve,Un,!1)),Ne(e,t),((Be&2)===0||e!==Ce)&&(e===Ce&&((Be&2)===0&&(ga|=t),Ye===4&&vt(e,ve,Un,!1)),Pn(e))}function Hh(e,n,t){if((Be&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||sn(e,n),l=a?Wf(e,n):ys(e,n,!0),o=a;do{if(l===0){Xa&&!a&&vt(e,n,0,!1);break}else if(l===6)vt(e,n,0,!pt);else{if(t=e.current.alternate,o&&!Gf(t)){l=ys(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var c=e;l=Hl;var f=c.current.memoizedState.isDehydrated;if(f&&(Ka(c,u).flags|=256),u=ys(c,u,!1),u!==2){if(os&&!f){c.errorRecoveryDisabledLanes|=o,ga|=o,l=4;break e}o=$n,$n=l,o!==null&&ds(o)}l=u}if(o=!1,l!==2)continue}}if(l===1){Ka(e,0),vt(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){vt(a,n,Un,!pt);break e}break;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(o=ss+300-En(),10<o)){if(vt(a,n,Un,!pt),gn(a,0)!==0)break e;a.timeoutHandle=dd(Gh.bind(null,a,t,$n,ei,us,n,Un,ga,Za,pt,2,-0,0),o);break e}Gh(a,t,$n,ei,us,n,Un,ga,Za,pt,0,-0,0)}}break}while(!0);Pn(e)}function ds(e){$n===null?$n=e:$n.push.apply($n,e)}function Gh(e,n,t,a,l,o,u,c,f,w,q,B,A){var E=n.subtreeFlags;if((E&8192||(E&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:Iy},zh(n),n=Ty(),n!==null)){e.cancelPendingCommit=n(Kh.bind(null,e,t,a,l,u,c,f,1,B,A)),vt(e,o,u,!w);return}Kh(e,t,a,l,u,c,f,q,B,A)}function Gf(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],o=l.getSnapshot;l=l.value;try{if(!Sn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vt(e,n,t,a){n&=~is,n&=~ga,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var o=31-K(l),u=1<<o;a[o]=-1,l&=~u}t!==0&&$t(e,t,n)}function ti(){return(Be&6)===0?(Wl(0),!1):!0}function ms(){if(me!==null){if(Oe===0)var e=me.return;else e=me,ct=ma=null,bu(e),_a=null,Al=0,e=me;for(;e!==null;)Lh(e.alternate,e),e=e.return;me=null}}function Ka(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,sy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ms(),Ce=e,me=t=Yt(e.current,null),ve=n,Oe=0,Tn=null,pt=!1,Xa=sn(e,n),os=!1,Za=Un=is=ga=Ht=Ye=0,$n=Hl=null,us=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-K(a),o=1<<l;n|=e[l],a&=~o}return gt=n,To(),t}function Qh(e,n){he=null,Q.H=Fn,n===Sl?(n=oc(),Oe=3):n===tc?(n=oc(),Oe=4):Oe=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,me===null&&(Ye=1,Jo(e,On(n,e.current)))}function Wh(){var e=Q.H;return Q.H=Fn,e===null?Fn:e}function Jh(){var e=Q.A;return Q.A=Yf,e}function fs(){Ye=4,pt||(ve&4194176)!==ve&&Dn.current!==null||(Xa=!0),(Ht&134217727)===0&&(ga&134217727)===0||Ce===null||vt(Ce,ve,Un,!1)}function ys(e,n,t){var a=Be;Be|=2;var l=Wh(),o=Jh();(Ce!==e||ve!==n)&&(ei=null,Ka(e,n)),n=!1;var u=Ye;e:do try{if(Oe!==0&&me!==null){var c=me,f=Tn;switch(Oe){case 8:ms(),u=6;break e;case 3:case 2:case 6:Dn.current===null&&(n=!0);var w=Oe;if(Oe=0,Tn=null,Fa(e,c,f,w),t&&Xa){u=0;break e}break;default:w=Oe,Oe=0,Tn=null,Fa(e,c,f,w)}}Qf(),u=Ye;break}catch(q){Qh(e,q)}while(!0);return n&&e.shellSuspendCounter++,ct=ma=null,Be=a,Q.H=l,Q.A=o,me===null&&(Ce=null,ve=0,To()),u}function Qf(){for(;me!==null;)Vh(me)}function Wf(e,n){var t=Be;Be|=2;var a=Wh(),l=Jh();Ce!==e||ve!==n?(ei=null,Po=En()+500,Ka(e,n)):Xa=sn(e,n);e:do try{if(Oe!==0&&me!==null){n=me;var o=Tn;n:switch(Oe){case 1:Oe=0,Tn=null,Fa(e,n,o,1);break;case 2:if(ac(o)){Oe=0,Tn=null,Xh(n);break}n=function(){Oe===2&&Ce===e&&(Oe=7),Pn(e)},o.then(n,n);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:ac(o)?(Oe=0,Tn=null,Xh(n)):(Oe=0,Tn=null,Fa(e,n,o,7));break;case 5:var u=null;switch(me.tag){case 26:u=me.memoizedState;case 5:case 27:var c=me;if(!u||Sd(u)){Oe=0,Tn=null;var f=c.sibling;if(f!==null)me=f;else{var w=c.return;w!==null?(me=w,ai(w)):me=null}break n}}Oe=0,Tn=null,Fa(e,n,o,5);break;case 6:Oe=0,Tn=null,Fa(e,n,o,6);break;case 8:ms(),Ye=6;break e;default:throw Error(r(462))}}Jf();break}catch(q){Qh(e,q)}while(!0);return ct=ma=null,Q.H=a,Q.A=l,Be=t,me!==null?0:(Ce=null,ve=0,To(),Ye)}function Jf(){for(;me!==null&&!Ci();)Vh(me)}function Vh(e){var n=yh(e.alternate,e,gt);e.memoizedProps=e.pendingProps,n===null?ai(e):me=n}function Xh(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=rh(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=rh(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:bu(n);default:Lh(t,n),n=me=Bh(n,gt),n=yh(t,n,gt)}e.memoizedProps=e.pendingProps,n===null?ai(e):me=n}function Fa(e,n,t,a){ct=ma=null,bu(n),_a=null,Al=0;var l=n.return;try{if(Nf(e,l,n,t,ve)){Ye=1,Jo(e,On(t,e.current)),me=null;return}}catch(o){if(l!==null)throw me=l,o;Ye=1,Jo(e,On(t,e.current)),me=null;return}n.flags&32768?(Se||a===1?e=!0:Xa||(ve&536870912)!==0?e=!1:(pt=e=!0,(a===2||a===3||a===6)&&(a=Dn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Zh(n,e)):ai(n)}function ai(e){var n=e;do{if((n.flags&32768)!==0){Zh(n,pt);return}e=n.return;var t=Uf(n.alternate,n,gt);if(t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ye===0&&(Ye=5)}function Zh(e,n){do{var t=Lf(e.alternate,e);if(t!==null){t.flags&=32767,me=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=t}while(e!==null);Ye=6,me=null}function Kh(e,n,t,a,l,o,u,c,f,w){var q=Q.T,B=_.p;try{_.p=2,Q.T=null,Vf(e,n,t,a,B,l,o,u,c,f,w)}finally{Q.T=q,_.p=B}}function Vf(e,n,t,a,l,o,u,c){do $a();while(va!==null);if((Be&6)!==0)throw Error(r(327));var f=e.finishedWork;if(a=e.finishedLanes,f===null)return null;if(e.finishedWork=null,e.finishedLanes=0,f===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var w=f.lanes|f.childLanes;if(w|=lu,Yn(e,a,w,o,u,c),e===Ce&&(me=Ce=null,ve=0),(f.subtreeFlags&10256)===0&&(f.flags&10256)===0||ni||(ni=!0,rs=w,cs=t,Ff(Kt,function(){return $a(),null})),t=(f.flags&15990)!==0,(f.subtreeFlags&15990)!==0||t?(t=Q.T,Q.T=null,o=_.p,_.p=2,u=Be,Be|=4,Rf(e,f),Mh(f,e),gf(xs,e.containerInfo),yi=!!Ts,xs=Ts=null,e.current=f,Th(e,f.alternate,f),Oi(),Be=u,_.p=o,Q.T=t):e.current=f,ni?(ni=!1,va=e,Gl=a):Fh(e,w),w=e.pendingLanes,w===0&&(Gt=null),Ri(f.stateNode),Pn(e),n!==null)for(l=e.onRecoverableError,f=0;f<n.length;f++)w=n[f],l(w.value,{componentStack:w.stack});return(Gl&3)!==0&&$a(),w=e.pendingLanes,(a&4194218)!==0&&(w&42)!==0?e===hs?Ql++:(Ql=0,hs=e):Ql=0,Wl(0),null}function Fh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xl(n)))}function $a(){if(va!==null){var e=va,n=rs;rs=0;var t=ir(Gl),a=Q.T,l=_.p;try{if(_.p=32>t?32:t,Q.T=null,va===null)var o=!1;else{t=cs,cs=null;var u=va,c=Gl;if(va=null,Gl=0,(Be&6)!==0)throw Error(r(331));var f=Be;if(Be|=4,Dh(u.current),Oh(u,u.current,c,t),Be=f,Wl(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ft,u)}catch{}o=!0}return o}finally{_.p=l,Q.T=a,Fh(e,n)}}return!1}function $h(e,n,t){n=On(t,n),n=zu(e.stateNode,n,2),e=Bt(e,n,2),e!==null&&(Ne(e,2),Pn(e))}function Me(e,n,t){if(e.tag===3)$h(e,e,t);else for(;n!==null;){if(n.tag===3){$h(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Gt===null||!Gt.has(a))){e=On(t,e),t=nh(2),a=Bt(n,t,2),a!==null&&(th(t,a,n,e),Ne(a,2),Pn(a));break}}n=n.return}}function ps(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Hf;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(os=!0,l.add(t),e=Xf.bind(null,e,n,t),n.then(e,e))}function Xf(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ce===e&&(ve&t)===t&&(Ye===4||Ye===3&&(ve&62914560)===ve&&300>En()-ss?(Be&2)===0&&Ka(e,0):is|=t,Za===ve&&(Za=0)),Pn(e)}function Ph(e,n){n===0&&(n=kn()),e=qt(e,n),e!==null&&(Ne(e,n),Pn(e))}function Zf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ph(e,t)}function Kf(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),Ph(e,t)}function Ff(e,n){return Tt(e,n)}var li=null,Pa=null,gs=!1,oi=!1,vs=!1,ba=0;function Pn(e){e!==Pa&&e.next===null&&(Pa===null?li=Pa=e:Pa=Pa.next=e),oi=!0,gs||(gs=!0,Pf($f))}function Wl(e,n){if(!vs&&oi){vs=!0;do for(var t=!1,a=li;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var u=a.suspendedLanes,c=a.pingedLanes;o=(1<<31-K(42|e)+1)-1,o&=l&~(u&~c),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(t=!0,td(a,o))}else o=ve,o=gn(a,a===Ce?o:0),(o&3)===0||sn(a,o)||(t=!0,td(a,o));a=a.next}while(t);vs=!1}}function $f(){oi=gs=!1;var e=0;ba!==0&&(uy()&&(e=ba),ba=0);for(var n=En(),t=null,a=li;a!==null;){var l=a.next,o=ed(a,n);o===0?(a.next=null,t===null?li=l:t.next=l,l===null&&(Pa=t)):(t=a,(e!==0||(o&3)!==0)&&(oi=!0)),a=l}Wl(e)}function ed(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var u=31-K(o),c=1<<u,f=l[u];f===-1?((c&t)===0||(c&a)!==0)&&(l[u]=vn(c,n)):f<=n&&(e.expiredLanes|=c),o&=~c}if(n=Ce,t=ve,t=gn(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Oe===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ol(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||sn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ol(a),ir(t)){case 2:case 8:t=ul;break;case 32:t=Kt;break;case 268435456:t=fo;break;default:t=Kt}return a=nd.bind(null,e),t=Tt(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ol(a),e.callbackPriority=2,e.callbackNode=null,2}function nd(e,n){var t=e.callbackNode;if($a()&&e.callbackNode!==t)return null;var a=ve;return a=gn(e,e===Ce?a:0),a===0?null:(Hh(e,a,n),ed(e,En()),e.callbackNode!=null&&e.callbackNode===t?nd.bind(null,e):null)}function td(e,n){if($a())return null;Hh(e,n,!0)}function Pf(e){ry(function(){(Be&6)!==0?Tt(il,e):e()})}function bs(){return ba===0&&(ba=ka()),ba}function ad(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bo(""+e)}function ld(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function ey(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var o=ad((l[bn]||null).action),u=a.submitter;u&&(n=(n=u[bn]||null)?ad(n.formAction):u.getAttribute("formAction"),n!==null&&(o=n,u=null));var c=new So("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ba!==0){var f=u?ld(l,u):new FormData(l);Eu(t,{pending:!0,data:f,method:l.method,action:o},null,f)}}else typeof o=="function"&&(c.preventDefault(),f=u?ld(l,u):new FormData(l),Eu(t,{pending:!0,data:f,method:l.method,action:o},o,f))},currentTarget:l}]})}}for(var ws=0;ws<Kr.length;ws++){var js=Kr[ws],ny=js.toLowerCase(),ty=js[0].toUpperCase()+js.slice(1);Hn(ny,"on"+ty)}Hn(Wr,"onAnimationEnd"),Hn(Jr,"onAnimationIteration"),Hn(Vr,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(bf,"onTransitionRun"),Hn(wf,"onTransitionStart"),Hn(jf,"onTransitionCancel"),Hn(Xr,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function od(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,w=c.currentTarget;if(c=c.listener,f!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=w;try{o(l)}catch(q){Wo(q)}l.currentTarget=null,o=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,w=c.currentTarget,c=c.listener,f!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=w;try{o(l)}catch(q){Wo(q)}l.currentTarget=null,o=f}}}}function pe(e,n){var t=n[Bi];t===void 0&&(t=n[Bi]=new Set);var a=e+"__bubble";t.has(a)||(id(n,e,2,!1),t.add(a))}function ks(e,n,t){var a=0;n&&(a|=4),id(t,e,a,n)}var ii="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[ii]){e[ii]=!0,rr.forEach(function(t){t!=="selectionchange"&&(ay.has(t)||ks(t,!1,e),ks(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ii]||(n[ii]=!0,ks("selectionchange",!1,n))}}function id(e,n,t,a){switch(qd(n)){case 2:var l=qy;break;case 8:l=My;break;default:l=Rs}t=l.bind(null,n,t,e),l=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Is(e,n,t,a,l){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===l||f.nodeType===8&&f.parentNode===l))return;u=u.return}for(;c!==null;){if(u=Pt(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=o=u;continue e}c=c.parentNode}}a=a.return}jr(function(){var w=o,q=Gi(t),B=[];e:{var A=Zr.get(e);if(A!==void 0){var E=So,$=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":E=Zm;break;case"focusin":$="focus",E=Zi;break;case"focusout":$="blur",E=Zi;break;case"beforeblur":case"afterblur":E=Zi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Ir;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=$m;break;case Wr:case Jr:case Vr:E=Lm;break;case Xr:E=ef;break;case"scroll":case"scrollend":E=Dm;break;case"wheel":E=tf;break;case"copy":case"cut":case"paste":E=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Tr;break;case"toggle":case"beforetoggle":E=lf}var se=(n&4)!==0,He=!se&&(e==="scroll"||e==="scrollend"),k=se?A!==null?A+"Capture":null:A;se=[];for(var b=w,I;b!==null;){var N=b;if(I=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||I===null||k===null||(N=hl(b,k),N!=null&&se.push(Vl(b,N,I))),He)break;b=b.return}0<se.length&&(A=new E(A,$,null,t,q),B.push({event:A,listeners:se}))}}if((n&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",A&&t!==Hi&&($=t.relatedTarget||t.fromElement)&&(Pt($)||$[Sa]))break e;if((E||A)&&(A=q.window===q?q:(A=q.ownerDocument)?A.defaultView||A.parentWindow:window,E?($=t.relatedTarget||t.toElement,E=w,$=$?Pt($):null,$!==null&&(He=ne($),se=$.tag,$!==He||se!==5&&se!==27&&se!==6)&&($=null)):(E=null,$=w),E!==$)){if(se=Ir,N="onMouseLeave",k="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(se=Tr,N="onPointerLeave",k="onPointerEnter",b="pointer"),He=E==null?A:cl(E),I=$==null?A:cl($),A=new se(N,b+"leave",E,t,q),A.target=He,A.relatedTarget=I,N=null,Pt(q)===w&&(se=new se(k,b+"enter",$,t,q),se.target=I,se.relatedTarget=He,N=se),He=N,E&&$)n:{for(se=E,k=$,b=0,I=se;I;I=el(I))b++;for(I=0,N=k;N;N=el(N))I++;for(;0<b-I;)se=el(se),b--;for(;0<I-b;)k=el(k),I--;for(;b--;){if(se===k||k!==null&&se===k.alternate)break n;se=el(se),k=el(k)}se=null}else se=null;E!==null&&ud(B,A,E,se,!1),$!==null&&He!==null&&ud(B,He,$,se,!0)}}e:{if(A=w?cl(w):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var F=Nr;else if(Or(A))if(Dr)F=yf;else{F=mf;var de=df}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?w&&Yi(w.elementType)&&(F=Nr):F=ff;if(F&&(F=F(e,w))){zr(B,F,t,q);break e}de&&de(e,A,w),e==="focusout"&&w&&A.type==="number"&&w.memoizedProps.value!=null&&Li(A,"number",A.value)}switch(de=w?cl(w):window,e){case"focusin":(Or(de)||de.contentEditable==="true")&&(Oa=de,nu=w,bl=null);break;case"focusout":bl=nu=Oa=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Gr(B,t,q);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":Gr(B,t,q)}var ee;if(Fi)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Ca?Mr(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(xr&&t.locale!=="ko"&&(Ca||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Ca&&(ee=kr()):(Et=q,Ji="value"in Et?Et.value:Et.textContent,Ca=!0)),de=ui(w,ae),0<de.length&&(ae=new Ar(ae,e,null,t,q),B.push({event:ae,listeners:de}),ee?ae.data=ee:(ee=Cr(t),ee!==null&&(ae.data=ee)))),(ee=uf?sf(e,t):rf(e,t))&&(ae=ui(w,"onBeforeInput"),0<ae.length&&(de=new Ar("onBeforeInput","beforeinput",null,t,q),B.push({event:de,listeners:ae}),de.data=ee)),ey(B,e,w,t,q)}od(B,n)})}function Vl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=hl(e,t),l!=null&&a.unshift(Vl(e,l,o)),l=hl(e,n),l!=null&&a.push(Vl(e,l,o))),e=e.return}return a}function el(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ud(e,n,t,a,l){for(var o=n._reactName,u=[];t!==null&&t!==a;){var c=t,f=c.alternate,w=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||w===null||(f=w,l?(w=hl(t,o),w!=null&&u.unshift(Vl(t,w,f))):l||(w=hl(t,o),w!=null&&u.push(Vl(t,w,f)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var ly=/\r\n?/g,oy=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(oy,"")}function rd(e,n){return n=sd(n),sd(e)===n}function si(){}function Ee(e,n,t,a,l,o){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ea(e,""+a);break;case"className":po(e,"class",a);break;case"tabIndex":po(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":po(e,t,a);break;case"style":br(e,a,o);break;case"data":if(n!=="object"){po(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=bo(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Ee(e,n,"name",l.name,l,null),Ee(e,n,"formEncType",l.formEncType,l,null),Ee(e,n,"formMethod",l.formMethod,l,null),Ee(e,n,"formTarget",l.formTarget,l,null)):(Ee(e,n,"encType",l.encType,l,null),Ee(e,n,"method",l.method,l,null),Ee(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=bo(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=si);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=bo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),yo(e,"popover",a);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":yo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=zm.get(t)||t,yo(e,t,a))}}function As(e,n,t,a,l,o){switch(t){case"style":br(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[bn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):yo(e,t,a)}}}function on(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var u=t[o];if(u!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(e,n,o,u,t,null)}}l&&Ee(e,n,"srcSet",t.srcSet,t,null),a&&Ee(e,n,"src",t.src,t,null);return;case"input":pe("invalid",e);var c=o=u=l=null,f=null,w=null;for(a in t)if(t.hasOwnProperty(a)){var q=t[a];if(q!=null)switch(a){case"name":l=q;break;case"type":u=q;break;case"checked":f=q;break;case"defaultChecked":w=q;break;case"value":o=q;break;case"defaultValue":c=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:Ee(e,n,a,q,t,null)}}yr(e,o,c,f,w,u,l,!1),go(e);return;case"select":pe("invalid",e),a=u=o=null;for(l in t)if(t.hasOwnProperty(l)&&(c=t[l],c!=null))switch(l){case"value":o=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Ee(e,n,l,c,t,null)}n=o,t=u,e.multiple=!!a,n!=null?xa(e,!!a,n,!1):t!=null&&xa(e,!!a,t,!0);return;case"textarea":pe("invalid",e),o=l=a=null;for(u in t)if(t.hasOwnProperty(u)&&(c=t[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":l=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:Ee(e,n,u,c,t,null)}gr(e,a,l,o),go(e);return;case"option":for(f in t)if(t.hasOwnProperty(f)&&(a=t[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ee(e,n,f,a,t,null)}return;case"dialog":pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<Jl.length;a++)pe(Jl[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(a=t[w],a!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(e,n,w,a,t,null)}return;default:if(Yi(n)){for(q in t)t.hasOwnProperty(q)&&(a=t[q],a!==void 0&&As(e,n,q,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Ee(e,n,c,a,t,null))}function iy(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,u=null,c=null,f=null,w=null,q=null;for(E in t){var B=t[E];if(t.hasOwnProperty(E)&&B!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":f=B;default:a.hasOwnProperty(E)||Ee(e,n,E,null,a,B)}}for(var A in a){var E=a[A];if(B=t[A],a.hasOwnProperty(A)&&(E!=null||B!=null))switch(A){case"type":o=E;break;case"name":l=E;break;case"checked":w=E;break;case"defaultChecked":q=E;break;case"value":u=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,n));break;default:E!==B&&Ee(e,n,A,E,a,B)}}Ui(e,u,c,f,w,q,o,l);return;case"select":E=u=c=A=null;for(o in t)if(f=t[o],t.hasOwnProperty(o)&&f!=null)switch(o){case"value":break;case"multiple":E=f;default:a.hasOwnProperty(o)||Ee(e,n,o,null,a,f)}for(l in a)if(o=a[l],f=t[l],a.hasOwnProperty(l)&&(o!=null||f!=null))switch(l){case"value":A=o;break;case"defaultValue":c=o;break;case"multiple":u=o;default:o!==f&&Ee(e,n,l,o,a,f)}n=c,t=u,a=E,A!=null?xa(e,!!t,A,!1):!!a!=!!t&&(n!=null?xa(e,!!t,n,!0):xa(e,!!t,t?[]:"",!1));return;case"textarea":E=A=null;for(c in t)if(l=t[c],t.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ee(e,n,c,null,a,l)}for(u in a)if(l=a[u],o=t[u],a.hasOwnProperty(u)&&(l!=null||o!=null))switch(u){case"value":A=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==o&&Ee(e,n,u,l,a,o)}pr(e,A,E);return;case"option":for(var $ in t)if(A=t[$],t.hasOwnProperty($)&&A!=null&&!a.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Ee(e,n,$,null,a,A)}for(f in a)if(A=a[f],E=t[f],a.hasOwnProperty(f)&&A!==E&&(A!=null||E!=null))switch(f){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ee(e,n,f,A,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in t)A=t[se],t.hasOwnProperty(se)&&A!=null&&!a.hasOwnProperty(se)&&Ee(e,n,se,null,a,A);for(w in a)if(A=a[w],E=t[w],a.hasOwnProperty(w)&&A!==E&&(A!=null||E!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,n));break;default:Ee(e,n,w,A,a,E)}return;default:if(Yi(n)){for(var He in t)A=t[He],t.hasOwnProperty(He)&&A!==void 0&&!a.hasOwnProperty(He)&&As(e,n,He,void 0,a,A);for(q in a)A=a[q],E=t[q],!a.hasOwnProperty(q)||A===E||A===void 0&&E===void 0||As(e,n,q,A,a,E);return}}for(var k in t)A=t[k],t.hasOwnProperty(k)&&A!=null&&!a.hasOwnProperty(k)&&Ee(e,n,k,null,a,A);for(B in a)A=a[B],E=t[B],!a.hasOwnProperty(B)||A===E||A==null&&E==null||Ee(e,n,B,A,a,E)}var Ts=null,xs=null;function ri(e){return e.nodeType===9?e:e.ownerDocument}function cd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Es(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qs=null;function uy(){var e=window.event;return e&&e.type==="popstate"?e===qs?!1:(qs=e,!0):(qs=null,!1)}var dd=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(cy)}:dd;function cy(e){setTimeout(function(){throw e})}function Ms(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),no(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);no(n)}function Cs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Cs(t),_i(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function hy(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[rl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Wn(e.nextSibling),e===null)break}return null}function dy(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wn(e.nextSibling),e===null))return null;return e}function Wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function fd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function yd(e,n,t){switch(n=ri(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var Ln=new Map,pd=new Set;function ci(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var bt=_.d;_.d={f:my,r:fy,D:yy,C:py,L:gy,m:vy,X:wy,S:by,M:jy};function my(){var e=bt.f(),n=ti();return e||n}function fy(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?Gc(n):bt.r(e)}var nl=typeof document>"u"?null:document;function gd(e,n,t){var a=nl;if(a&&typeof n=="string"&&n){var l=Mn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),pd.has(l)||(pd.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),on(n,"link",e),Pe(n),a.head.appendChild(n)))}}function yy(e){bt.D(e),gd("dns-prefetch",e,null)}function py(e,n){bt.C(e,n),gd("preconnect",e,n)}function gy(e,n,t){bt.L(e,n,t);var a=nl;if(a&&e&&n){var l='link[rel="preload"][as="'+Mn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Mn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Mn(t.imageSizes)+'"]')):l+='[href="'+Mn(e)+'"]';var o=l;switch(n){case"style":o=tl(e);break;case"script":o=al(e)}Ln.has(o)||(e=R({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ln.set(o,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Xl(o))||n==="script"&&a.querySelector(Zl(o))||(n=a.createElement("link"),on(n,"link",e),Pe(n),a.head.appendChild(n)))}}function vy(e,n){bt.m(e,n);var t=nl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Mn(a)+'"][href="'+Mn(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=al(e)}if(!Ln.has(o)&&(e=R({rel:"modulepreload",href:e},n),Ln.set(o,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Zl(o)))return}a=t.createElement("link"),on(a,"link",e),Pe(a),t.head.appendChild(a)}}}function by(e,n,t){bt.S(e,n,t);var a=nl;if(a&&e){var l=Aa(a).hoistableStyles,o=tl(e);n=n||"default";var u=l.get(o);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Xl(o)))c.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ln.get(o))&&Os(e,t);var f=u=a.createElement("link");Pe(f),on(f,"link",e),f._p=new Promise(function(w,q){f.onload=w,f.onerror=q}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,hi(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:c},l.set(o,u)}}}function wy(e,n){bt.X(e,n);var t=nl;if(t&&e){var a=Aa(t).hoistableScripts,l=al(e),o=a.get(l);o||(o=t.querySelector(Zl(l)),o||(e=R({src:e,async:!0},n),(n=Ln.get(l))&&zs(e,n),o=t.createElement("script"),Pe(o),on(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function jy(e,n){bt.M(e,n);var t=nl;if(t&&e){var a=Aa(t).hoistableScripts,l=al(e),o=a.get(l);o||(o=t.querySelector(Zl(l)),o||(e=R({src:e,async:!0,type:"module"},n),(n=Ln.get(l))&&zs(e,n),o=t.createElement("script"),Pe(o),on(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function vd(e,n,t,a){var l=(l=Vn.current)?ci(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=tl(t.href),t=Aa(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=tl(t.href);var o=Aa(l).hoistableStyles,u=o.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,u),(o=l.querySelector(Xl(e)))&&!o._p&&(u.instance=o,u.state.loading=5),Ln.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ln.set(e,t),o||ky(l,e,t,u.state))),n&&a===null)throw Error(r(528,""));return u}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=al(t),t=Aa(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function tl(e){return'href="'+Mn(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function ky(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),on(n,"link",t),Pe(n),e.head.appendChild(n))}function al(e){return'[src="'+Mn(e)+'"]'}function Zl(e){return"script[async]"+e}function wd(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Mn(t.href)+'"]');if(a)return n.instance=a,Pe(a),a;var l=R({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),on(a,"style",l),hi(a,t.precedence,e),n.instance=a;case"stylesheet":l=tl(t.href);var o=e.querySelector(Xl(l));if(o)return n.state.loading|=4,n.instance=o,Pe(o),o;a=bd(t),(l=Ln.get(l))&&Os(a,l),o=(e.ownerDocument||e).createElement("link"),Pe(o);var u=o;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),on(o,"link",a),n.state.loading|=4,hi(o,t.precedence,e),n.instance=o;case"script":return o=al(t.src),(l=e.querySelector(Zl(o)))?(n.instance=l,Pe(l),l):(a=t,(l=Ln.get(o))&&(a=R({},t),zs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Pe(l),on(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,hi(a,t.precedence,e));return n.instance}function hi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===n)o=c;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Os(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var di=null;function jd(e,n,t){if(di===null){var a=new Map,l=di=new Map;l.set(t,a)}else l=di,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[rl]||o[rn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var u=o.getAttribute(n)||"";u=e+u;var c=a.get(u);c?c.push(o):a.set(u,[o])}}return a}function kd(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Sy(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function Iy(){}function Ay(e,n,t){if(Kl===null)throw Error(r(475));var a=Kl;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=tl(t.href),o=e.querySelector(Xl(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=mi.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=o,Pe(o);return}o=e.ownerDocument||e,t=bd(t),(l=Ln.get(l))&&Os(t,l),o=o.createElement("link"),Pe(o);var u=o;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),on(o,"link",t),n.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=mi.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ty(){if(Kl===null)throw Error(r(475));var e=Kl;return e.stylesheets&&e.count===0&&Ns(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Ns(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function mi(){if(this.count--,this.count===0){if(this.stylesheets)Ns(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fi=null;function Ns(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fi=new Map,n.forEach(xy,e),fi=null,mi.call(e))}function xy(e,n){if(!(n.state.loading&4)){var t=fi.get(e);if(t)var a=t.get(null);else{t=new Map,fi.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var u=l[o];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}l=n.instance,u=l.getAttribute("data-precedence"),o=t.get(u)||a,o===a&&t.set(null,l),t.set(u,l),this.count++,a=mi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Fl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function Ey(e,n,t,a,l,o,u,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Id(e,n,t,a,l,o,u,c,f,w,q,B){return e=new Ey(e,n,t,u,c,f,w,B),n=1,o===!0&&(n|=24),o=_n(3,null,null,n),e.current=o,o.stateNode=e,n=du(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:a,isDehydrated:t,cache:n},Ju(o),e}function Ad(e){return e?(e=Da,e):Da}function Td(e,n,t,a,l,o){l=Ad(l),a.context===null?a.context=l:a.pendingContext=l,a=Rt(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(a.callback=o),t=Bt(e,a,n),t!==null&&(fn(t,e,n),Nl(t,e,n))}function xd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ds(e,n){xd(e,n),(e=e.alternate)&&xd(e,n)}function Ed(e){if(e.tag===13){var n=qt(e,67108864);n!==null&&fn(n,e,67108864),Ds(e,67108864)}}var yi=!0;function qy(e,n,t,a){var l=Q.T;Q.T=null;var o=_.p;try{_.p=2,Rs(e,n,t,a)}finally{_.p=o,Q.T=l}}function My(e,n,t,a){var l=Q.T;Q.T=null;var o=_.p;try{_.p=8,Rs(e,n,t,a)}finally{_.p=o,Q.T=l}}function Rs(e,n,t,a){if(yi){var l=Bs(a);if(l===null)Is(e,n,a,pi,t),Md(e,a);else if(Oy(l,e,n,t,a))a.stopPropagation();else if(Md(e,a),n&4&&-1<Cy.indexOf(e)){for(;l!==null;){var o=Ia(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var u=pn(o.pendingLanes);if(u!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-K(u);c.entanglements[1]|=f,u&=~f}Pn(o),(Be&6)===0&&(Po=En()+500,Wl(0))}}break;case 13:c=qt(o,2),c!==null&&fn(c,o,2),ti(),Ds(o,2)}if(o=Bs(a),o===null&&Is(e,n,a,pi,t),o===l)break;l=o}l!==null&&a.stopPropagation()}else Is(e,n,a,null,t)}}function Bs(e){return e=Gi(e),_s(e)}var pi=null;function _s(e){if(pi=null,e=Pt(e),e!==null){var n=ne(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=je(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pi=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case il:return 2;case ul:return 8;case Kt:case zi:return 32;case fo:return 268435456;default:return 32}default:return 32}}var Us=!1,Qt=null,Wt=null,Jt=null,$l=new Map,Pl=new Map,Vt=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Md(e,n){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":$l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function eo(e,n,t,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Ia(n),n!==null&&Ed(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Oy(e,n,t,a,l){switch(n){case"focusin":return Qt=eo(Qt,e,n,t,a,l),!0;case"dragenter":return Wt=eo(Wt,e,n,t,a,l),!0;case"mouseover":return Jt=eo(Jt,e,n,t,a,l),!0;case"pointerover":var o=l.pointerId;return $l.set(o,eo($l.get(o)||null,e,n,t,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Pl.set(o,eo(Pl.get(o)||null,e,n,t,a,l)),!0}return!1}function Cd(e){var n=Pt(e.target);if(n!==null){var t=ne(n);if(t!==null){if(n=t.tag,n===13){if(n=je(t),n!==null){e.blockedOn=n,Am(e.priority,function(){if(t.tag===13){var a=xn(),l=qt(t,a);l!==null&&fn(l,t,a),Ds(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Bs(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Hi=a,t.target.dispatchEvent(a),Hi=null}else return n=Ia(t),n!==null&&Ed(n),e.blockedOn=t,!1;n.shift()}return!0}function Od(e,n,t){gi(e)&&t.delete(n)}function zy(){Us=!1,Qt!==null&&gi(Qt)&&(Qt=null),Wt!==null&&gi(Wt)&&(Wt=null),Jt!==null&&gi(Jt)&&(Jt=null),$l.forEach(Od),Pl.forEach(Od)}function vi(e,n){e.blockedOn===n&&(e.blockedOn=null,Us||(Us=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zy)))}var bi=null;function zd(e){bi!==e&&(bi=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){bi===e&&(bi=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(_s(a||t)===null)continue;break}var o=Ia(t);o!==null&&(e.splice(n,3),n-=3,Eu(o,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function no(e){function n(f){return vi(f,e)}Qt!==null&&vi(Qt,e),Wt!==null&&vi(Wt,e),Jt!==null&&vi(Jt,e),$l.forEach(n),Pl.forEach(n);for(var t=0;t<Vt.length;t++){var a=Vt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Vt.length&&(t=Vt[0],t.blockedOn===null);)Cd(t),t.blockedOn===null&&Vt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],o=t[a+1],u=l[bn]||null;if(typeof o=="function")u||zd(t);else if(u){var c=null;if(o&&o.hasAttribute("formAction")){if(l=o,u=o[bn]||null)c=u.formAction;else if(_s(l)!==null)continue}else c=u.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),zd(t)}}}function Ls(e){this._internalRoot=e}wi.prototype.render=Ls.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=xn();Td(t,a,e,n,null,null)},wi.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&$a(),Td(e.current,2,null,e,null,null),ti(),n[Sa]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ur();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Vt.length&&n!==0&&n<Vt[t].priority;t++);Vt.splice(t,0,e),t===0&&Cd(e)}};var Nd=d.version;if(Nd!=="19.0.0")throw Error(r(527,Nd,"19.0.0"));_.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=M(n),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Ny={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,findFiberByHostInstance:Pt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Ft=ji.inject(Ny),dn=ji}catch{}}return ao.createRoot=function(e,n){if(!m(e))throw Error(r(299));var t=!1,a="",l=Fc,o=$c,u=Pc,c=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=Id(e,1,!1,null,null,t,a,l,o,u,c,null),e[Sa]=n.current,Ss(e.nodeType===8?e.parentNode:e),new Ls(n)},ao.hydrateRoot=function(e,n,t){if(!m(e))throw Error(r(299));var a=!1,l="",o=Fc,u=$c,c=Pc,f=null,w=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks),t.formState!==void 0&&(w=t.formState)),n=Id(e,1,!0,n,t??null,a,l,o,u,c,f,w),n.context=Ad(null),t=n.current,a=xn(),l=Rt(a),l.callback=null,Bt(t,l,a),n.current.lanes=a,Ne(n,a),Pn(n),e[Sa]=n.current,Ss(e),new wi(n)},ao.version="19.0.0",ao}var Qd;function Wy(){if(Qd)return Gs.exports;Qd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),Gs.exports=Qy(),Gs.exports}var Jy=Wy();const Vy=lm(Jy);var lo={},Wd;function Xy(){if(Wd)return lo;Wd=1,Object.defineProperty(lo,"__esModule",{value:!0}),lo.parse=S,lo.serialize=y;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,d=/^[\u0021-\u003A\u003C-\u007E]*$/,h=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,m=Object.prototype.toString,p=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function S(C,Y){const O=new p,Z=C.length;if(Z<2)return O;const G=(Y==null?void 0:Y.decode)||x;let D=0;do{const X=C.indexOf("=",D);if(X===-1)break;const V=C.indexOf(";",D),ie=V===-1?Z:V;if(X>ie){D=C.lastIndexOf(";",X-1)+1;continue}const J=T(C,D,X),le=g(C,X,J),be=C.slice(J,le);if(O[be]===void 0){let ye=T(C,X+1,ie),Q=g(C,ie,ye);const R=G(C.slice(ye,Q));O[be]=R}D=ie+1}while(D<Z);return O}function T(C,Y,O){do{const Z=C.charCodeAt(Y);if(Z!==32&&Z!==9)return Y}while(++Y<O);return O}function g(C,Y,O){for(;Y>O;){const Z=C.charCodeAt(--Y);if(Z!==32&&Z!==9)return Y+1}return O}function y(C,Y,O){const Z=(O==null?void 0:O.encode)||encodeURIComponent;if(!i.test(C))throw new TypeError(`argument name is invalid: ${C}`);const G=Z(Y);if(!d.test(G))throw new TypeError(`argument val is invalid: ${Y}`);let D=C+"="+G;if(!O)return D;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);D+="; Max-Age="+O.maxAge}if(O.domain){if(!h.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);D+="; Domain="+O.domain}if(O.path){if(!r.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);D+="; Path="+O.path}if(O.expires){if(!U(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);D+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(D+="; HttpOnly"),O.secure&&(D+="; Secure"),O.partitioned&&(D+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return D}function x(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function U(C){return m.call(C)==="[object Date]"}return lo}Xy();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jd="popstate";function Zy(i={}){function d(m,p){let{pathname:S="/",search:T="",hash:g=""}=wa(m.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Fs("",{pathname:S,search:T,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function h(m,p){let S=m.document.querySelector("base"),T="";if(S&&S.getAttribute("href")){let g=m.location.href,y=g.indexOf("#");T=y===-1?g:g.slice(0,y)}return T+"#"+(typeof p=="string"?p:so(p))}function r(m,p){Jn(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return Fy(d,h,r,i)}function _e(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}function Jn(i,d){if(!i){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Ky(){return Math.random().toString(36).substring(2,10)}function Vd(i,d){return{usr:i.state,key:i.key,idx:d}}function Fs(i,d,h=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof d=="string"?wa(d):d,state:h,key:d&&d.key||r||Ky()}}function so({pathname:i="/",search:d="",hash:h=""}){return d&&d!=="?"&&(i+=d.charAt(0)==="?"?d:"?"+d),h&&h!=="#"&&(i+=h.charAt(0)==="#"?h:"#"+h),i}function wa(i){let d={};if(i){let h=i.indexOf("#");h>=0&&(d.hash=i.substring(h),i=i.substring(0,h));let r=i.indexOf("?");r>=0&&(d.search=i.substring(r),i=i.substring(0,r)),i&&(d.pathname=i)}return d}function Fy(i,d,h,r={}){let{window:m=document.defaultView,v5Compat:p=!1}=r,S=m.history,T="POP",g=null,y=x();y==null&&(y=0,S.replaceState({...S.state,idx:y},""));function x(){return(S.state||{idx:null}).idx}function U(){T="POP";let G=x(),D=G==null?null:G-y;y=G,g&&g({action:T,location:Z.location,delta:D})}function C(G,D){T="PUSH";let X=Fs(Z.location,G,D);h&&h(X,G),y=x()+1;let V=Vd(X,y),ie=Z.createHref(X);try{S.pushState(V,"",ie)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;m.location.assign(ie)}p&&g&&g({action:T,location:Z.location,delta:1})}function Y(G,D){T="REPLACE";let X=Fs(Z.location,G,D);h&&h(X,G),y=x();let V=Vd(X,y),ie=Z.createHref(X);S.replaceState(V,"",ie),p&&g&&g({action:T,location:Z.location,delta:0})}function O(G){let D=m.location.origin!=="null"?m.location.origin:m.location.href,X=typeof G=="string"?G:so(G);return X=X.replace(/ $/,"%20"),_e(D,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,D)}let Z={get action(){return T},get location(){return i(m,S)},listen(G){if(g)throw new Error("A history only accepts one active listener");return m.addEventListener(Jd,U),g=G,()=>{m.removeEventListener(Jd,U),g=null}},createHref(G){return d(m,G)},createURL:O,encodeLocation(G){let D=O(G);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:C,replace:Y,go(G){return S.go(G)}};return Z}function om(i,d,h="/"){return $y(i,d,h,!1)}function $y(i,d,h,r){let m=typeof d=="string"?wa(d):d,p=jt(m.pathname||"/",h);if(p==null)return null;let S=im(i);Py(S);let T=null;for(let g=0;T==null&&g<S.length;++g){let y=cp(p);T=sp(S[g],y,r)}return T}function im(i,d=[],h=[],r=""){let m=(p,S,T)=>{let g={relativePath:T===void 0?p.path||"":T,caseSensitive:p.caseSensitive===!0,childrenIndex:S,route:p};g.relativePath.startsWith("/")&&(_e(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length));let y=wt([r,g.relativePath]),x=h.concat(g);p.children&&p.children.length>0&&(_e(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),im(p.children,d,x,y)),!(p.path==null&&!p.index)&&d.push({path:y,score:ip(y,p.index),routesMeta:x})};return i.forEach((p,S)=>{var T;if(p.path===""||!((T=p.path)!=null&&T.includes("?")))m(p,S);else for(let g of um(p.path))m(p,S,g)}),d}function um(i){let d=i.split("/");if(d.length===0)return[];let[h,...r]=d,m=h.endsWith("?"),p=h.replace(/\?$/,"");if(r.length===0)return m?[p,""]:[p];let S=um(r.join("/")),T=[];return T.push(...S.map(g=>g===""?p:[p,g].join("/"))),m&&T.push(...S),T.map(g=>i.startsWith("/")&&g===""?"/":g)}function Py(i){i.sort((d,h)=>d.score!==h.score?h.score-d.score:up(d.routesMeta.map(r=>r.childrenIndex),h.routesMeta.map(r=>r.childrenIndex)))}var ep=/^:[\w-]+$/,np=3,tp=2,ap=1,lp=10,op=-2,Xd=i=>i==="*";function ip(i,d){let h=i.split("/"),r=h.length;return h.some(Xd)&&(r+=op),d&&(r+=tp),h.filter(m=>!Xd(m)).reduce((m,p)=>m+(ep.test(p)?np:p===""?ap:lp),r)}function up(i,d){return i.length===d.length&&i.slice(0,-1).every((r,m)=>r===d[m])?i[i.length-1]-d[d.length-1]:0}function sp(i,d,h=!1){let{routesMeta:r}=i,m={},p="/",S=[];for(let T=0;T<r.length;++T){let g=r[T],y=T===r.length-1,x=p==="/"?d:d.slice(p.length)||"/",U=Ti({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},x),C=g.route;if(!U&&y&&h&&!r[r.length-1].route.index&&(U=Ti({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!U)return null;Object.assign(m,U.params),S.push({params:m,pathname:wt([p,U.pathname]),pathnameBase:fp(wt([p,U.pathnameBase])),route:C}),U.pathnameBase!=="/"&&(p=wt([p,U.pathnameBase]))}return S}function Ti(i,d){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[h,r]=rp(i.path,i.caseSensitive,i.end),m=d.match(h);if(!m)return null;let p=m[0],S=p.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:r.reduce((y,{paramName:x,isOptional:U},C)=>{if(x==="*"){let O=T[C]||"";S=p.slice(0,p.length-O.length).replace(/(.)\/+$/,"$1")}const Y=T[C];return U&&!Y?y[x]=void 0:y[x]=(Y||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:S,pattern:i}}function rp(i,d=!1,h=!0){Jn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,T,g)=>(r.push({paramName:T,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):h?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),r]}function cp(i){try{return i.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Jn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),i}}function jt(i,d){if(d==="/")return i;if(!i.toLowerCase().startsWith(d.toLowerCase()))return null;let h=d.endsWith("/")?d.length-1:d.length,r=i.charAt(h);return r&&r!=="/"?null:i.slice(h)||"/"}function hp(i,d="/"){let{pathname:h,search:r="",hash:m=""}=typeof i=="string"?wa(i):i;return{pathname:h?h.startsWith("/")?h:dp(h,d):d,search:yp(r),hash:pp(m)}}function dp(i,d){let h=d.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?h.length>1&&h.pop():m!=="."&&h.push(m)}),h.length>1?h.join("/"):"/"}function Vs(i,d,h,r){return`Cannot include a '${i}' character in a manually specified \`to.${d}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mp(i){return i.filter((d,h)=>h===0||d.route.path&&d.route.path.length>0)}function sm(i){let d=mp(i);return d.map((h,r)=>r===d.length-1?h.pathname:h.pathnameBase)}function rm(i,d,h,r=!1){let m;typeof i=="string"?m=wa(i):(m={...i},_e(!m.pathname||!m.pathname.includes("?"),Vs("?","pathname","search",m)),_e(!m.pathname||!m.pathname.includes("#"),Vs("#","pathname","hash",m)),_e(!m.search||!m.search.includes("#"),Vs("#","search","hash",m)));let p=i===""||m.pathname==="",S=p?"/":m.pathname,T;if(S==null)T=h;else{let U=d.length-1;if(!r&&S.startsWith("..")){let C=S.split("/");for(;C[0]==="..";)C.shift(),U-=1;m.pathname=C.join("/")}T=U>=0?d[U]:"/"}let g=hp(m,T),y=S&&S!=="/"&&S.endsWith("/"),x=(p||S===".")&&h.endsWith("/");return!g.pathname.endsWith("/")&&(y||x)&&(g.pathname+="/"),g}var wt=i=>i.join("/").replace(/\/\/+/g,"/"),fp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,pp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function gp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var cm=["POST","PUT","PATCH","DELETE"];new Set(cm);var vp=["GET",...cm];new Set(vp);var ll=j.createContext(null);ll.displayName="DataRouter";var xi=j.createContext(null);xi.displayName="DataRouterState";var hm=j.createContext({isTransitioning:!1});hm.displayName="ViewTransition";var bp=j.createContext(new Map);bp.displayName="Fetchers";var wp=j.createContext(null);wp.displayName="Await";var et=j.createContext(null);et.displayName="Navigation";var co=j.createContext(null);co.displayName="Location";var kt=j.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var nr=j.createContext(null);nr.displayName="RouteError";function jp(i,{relative:d}={}){_e(ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:h,navigator:r}=j.useContext(et),{hash:m,pathname:p,search:S}=mo(i,{relative:d}),T=p;return h!=="/"&&(T=p==="/"?h:wt([h,p])),r.createHref({pathname:T,search:S,hash:m})}function ho(){return j.useContext(co)!=null}function ja(){return _e(ho(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(co).location}var dm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mm(i){j.useContext(et).static||j.useLayoutEffect(i)}function kp(){let{isDataRoute:i}=j.useContext(kt);return i?Dp():Sp()}function Sp(){_e(ho(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(ll),{basename:d,navigator:h}=j.useContext(et),{matches:r}=j.useContext(kt),{pathname:m}=ja(),p=JSON.stringify(sm(r)),S=j.useRef(!1);return mm(()=>{S.current=!0}),j.useCallback((g,y={})=>{if(Jn(S.current,dm),!S.current)return;if(typeof g=="number"){h.go(g);return}let x=rm(g,JSON.parse(p),m,y.relative==="path");i==null&&d!=="/"&&(x.pathname=x.pathname==="/"?d:wt([d,x.pathname])),(y.replace?h.replace:h.push)(x,y.state,y)},[d,h,p,m,i])}j.createContext(null);function mo(i,{relative:d}={}){let{matches:h}=j.useContext(kt),{pathname:r}=ja(),m=JSON.stringify(sm(h));return j.useMemo(()=>rm(i,JSON.parse(m),r,d==="path"),[i,m,r,d])}function Ip(i,d){return fm(i,d)}function fm(i,d,h,r){var X;_e(ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m,static:p}=j.useContext(et),{matches:S}=j.useContext(kt),T=S[S.length-1],g=T?T.params:{},y=T?T.pathname:"/",x=T?T.pathnameBase:"/",U=T&&T.route;{let V=U&&U.path||"";ym(y,!U||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let C=ja(),Y;if(d){let V=typeof d=="string"?wa(d):d;_e(x==="/"||((X=V.pathname)==null?void 0:X.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${V.pathname}" was given in the \`location\` prop.`),Y=V}else Y=C;let O=Y.pathname||"/",Z=O;if(x!=="/"){let V=x.replace(/^\//,"").split("/");Z="/"+O.replace(/^\//,"").split("/").slice(V.length).join("/")}let G=!p&&h&&h.matches&&h.matches.length>0?h.matches:om(i,{pathname:Z});Jn(U||G!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),Jn(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=qp(G&&G.map(V=>Object.assign({},V,{params:Object.assign({},g,V.params),pathname:wt([x,m.encodeLocation?m.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?x:wt([x,m.encodeLocation?m.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),S,h,r);return d&&D?j.createElement(co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},D):D}function Ap(){let i=Np(),d=gp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),h=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},S=null;return console.error("Error handled by React Router default ErrorBoundary:",i),S=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},d),h?j.createElement("pre",{style:m},h):null,S)}var Tp=j.createElement(Ap,null),xp=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,d){return d.location!==i.location||d.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:d.error,location:d.location,revalidation:i.revalidation||d.revalidation}}componentDidCatch(i,d){console.error("React Router caught the following error during render",i,d)}render(){return this.state.error!==void 0?j.createElement(kt.Provider,{value:this.props.routeContext},j.createElement(nr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ep({routeContext:i,match:d,children:h}){let r=j.useContext(ll);return r&&r.static&&r.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=d.route.id),j.createElement(kt.Provider,{value:i},h)}function qp(i,d=[],h=null,r=null){if(i==null){if(!h)return null;if(h.errors)i=h.matches;else if(d.length===0&&!h.initialized&&h.matches.length>0)i=h.matches;else return null}let m=i,p=h==null?void 0:h.errors;if(p!=null){let g=m.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);_e(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,g+1))}let S=!1,T=-1;if(h)for(let g=0;g<m.length;g++){let y=m[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(T=g),y.route.id){let{loaderData:x,errors:U}=h,C=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!U||U[y.route.id]===void 0);if(y.route.lazy||C){S=!0,T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}return m.reduceRight((g,y,x)=>{let U,C=!1,Y=null,O=null;h&&(U=p&&y.route.id?p[y.route.id]:void 0,Y=y.route.errorElement||Tp,S&&(T<0&&x===0?(ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,O=null):T===x&&(C=!0,O=y.route.hydrateFallbackElement||null)));let Z=d.concat(m.slice(0,x+1)),G=()=>{let D;return U?D=Y:C?D=O:y.route.Component?D=j.createElement(y.route.Component,null):y.route.element?D=y.route.element:D=g,j.createElement(Ep,{match:y,routeContext:{outlet:g,matches:Z,isDataRoute:h!=null},children:D})};return h&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?j.createElement(xp,{location:h.location,revalidation:h.revalidation,component:Y,error:U,children:G(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):G()},null)}function tr(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(i){let d=j.useContext(ll);return _e(d,tr(i)),d}function Cp(i){let d=j.useContext(xi);return _e(d,tr(i)),d}function Op(i){let d=j.useContext(kt);return _e(d,tr(i)),d}function ar(i){let d=Op(i),h=d.matches[d.matches.length-1];return _e(h.route.id,`${i} can only be used on routes that contain a unique "id"`),h.route.id}function zp(){return ar("useRouteId")}function Np(){var r;let i=j.useContext(nr),d=Cp("useRouteError"),h=ar("useRouteError");return i!==void 0?i:(r=d.errors)==null?void 0:r[h]}function Dp(){let{router:i}=Mp("useNavigate"),d=ar("useNavigate"),h=j.useRef(!1);return mm(()=>{h.current=!0}),j.useCallback(async(m,p={})=>{Jn(h.current,dm),h.current&&(typeof m=="number"?i.navigate(m):await i.navigate(m,{fromRouteId:d,...p}))},[i,d])}var Zd={};function ym(i,d,h){!d&&!Zd[i]&&(Zd[i]=!0,Jn(!1,h))}j.memo(Rp);function Rp({routes:i,future:d,state:h}){return fm(i,void 0,h,d)}function $s(i){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bp({basename:i="/",children:d=null,location:h,navigationType:r="POP",navigator:m,static:p=!1}){_e(!ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=i.replace(/^\/*/,"/"),T=j.useMemo(()=>({basename:S,navigator:m,static:p,future:{}}),[S,m,p]);typeof h=="string"&&(h=wa(h));let{pathname:g="/",search:y="",hash:x="",state:U=null,key:C="default"}=h,Y=j.useMemo(()=>{let O=jt(g,S);return O==null?null:{location:{pathname:O,search:y,hash:x,state:U,key:C},navigationType:r}},[S,g,y,x,U,C,r]);return Jn(Y!=null,`<Router basename="${S}"> is not able to match the URL "${g}${y}${x}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:j.createElement(et.Provider,{value:T},j.createElement(co.Provider,{children:d,value:Y}))}function _p({children:i,location:d}){return Ip(Ps(i),d)}function Ps(i,d=[]){let h=[];return j.Children.forEach(i,(r,m)=>{if(!j.isValidElement(r))return;let p=[...d,m];if(r.type===j.Fragment){h.push.apply(h,Ps(r.props.children,p));return}_e(r.type===$s,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let S={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(S.children=Ps(r.props.children,p)),h.push(S)}),h}var Ii="get",Ai="application/x-www-form-urlencoded";function Ei(i){return i!=null&&typeof i.tagName=="string"}function Up(i){return Ei(i)&&i.tagName.toLowerCase()==="button"}function Lp(i){return Ei(i)&&i.tagName.toLowerCase()==="form"}function Yp(i){return Ei(i)&&i.tagName.toLowerCase()==="input"}function Hp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Gp(i,d){return i.button===0&&(!d||d==="_self")&&!Hp(i)}var ki=null;function Qp(){if(ki===null)try{new FormData(document.createElement("form"),0),ki=!1}catch{ki=!0}return ki}var Wp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xs(i){return i!=null&&!Wp.has(i)?(Jn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ai}"`),null):i}function Jp(i,d){let h,r,m,p,S;if(Lp(i)){let T=i.getAttribute("action");r=T?jt(T,d):null,h=i.getAttribute("method")||Ii,m=Xs(i.getAttribute("enctype"))||Ai,p=new FormData(i)}else if(Up(i)||Yp(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=i.getAttribute("formaction")||T.getAttribute("action");if(r=g?jt(g,d):null,h=i.getAttribute("formmethod")||T.getAttribute("method")||Ii,m=Xs(i.getAttribute("formenctype"))||Xs(T.getAttribute("enctype"))||Ai,p=new FormData(T,i),!Qp()){let{name:y,type:x,value:U}=i;if(x==="image"){let C=y?`${y}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else y&&p.append(y,U)}}else{if(Ei(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');h=Ii,r=null,m=Ai,S=i}return p&&m==="text/plain"&&(S=p,p=void 0),{action:r,method:h.toLowerCase(),encType:m,formData:p,body:S}}function lr(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}async function Vp(i,d){if(i.id in d)return d[i.id];try{let h=await import(i.module);return d[i.id]=h,h}catch(h){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(h),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Zp(i,d,h){let r=await Promise.all(i.map(async m=>{let p=d.routes[m.route.id];if(p){let S=await Vp(p,h);return S.links?S.links():[]}return[]}));return Pp(r.flat(1).filter(Xp).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Kd(i,d,h,r,m,p){let S=(g,y)=>h[y]?g.route.id!==h[y].route.id:!0,T=(g,y)=>{var x;return h[y].pathname!==g.pathname||((x=h[y].route.path)==null?void 0:x.endsWith("*"))&&h[y].params["*"]!==g.params["*"]};return p==="assets"?d.filter((g,y)=>S(g,y)||T(g,y)):p==="data"?d.filter((g,y)=>{var U;let x=r.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(S(g,y)||T(g,y))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((U=h[0])==null?void 0:U.params)||{},nextUrl:new URL(i,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Kp(i,d,{includeHydrateFallback:h}={}){return Fp(i.map(r=>{let m=d.routes[r.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),h&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function Fp(i){return[...new Set(i)]}function $p(i){let d={},h=Object.keys(i).sort();for(let r of h)d[r]=i[r];return d}function Pp(i,d){let h=new Set;return new Set(d),i.reduce((r,m)=>{let p=JSON.stringify($p(m));return h.has(p)||(h.add(p),r.push({key:p,link:m})),r},[])}function eg(i,d){let h=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return h.pathname==="/"?h.pathname="_root.data":d&&jt(h.pathname,d)==="/"?h.pathname=`${d.replace(/\/$/,"")}/_root.data`:h.pathname=`${h.pathname.replace(/\/$/,"")}.data`,h}function pm(){let i=j.useContext(ll);return lr(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ng(){let i=j.useContext(xi);return lr(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var or=j.createContext(void 0);or.displayName="FrameworkContext";function gm(){let i=j.useContext(or);return lr(i,"You must render this element inside a <HydratedRouter> element"),i}function tg(i,d){let h=j.useContext(or),[r,m]=j.useState(!1),[p,S]=j.useState(!1),{onFocus:T,onBlur:g,onMouseEnter:y,onMouseLeave:x,onTouchStart:U}=d,C=j.useRef(null);j.useEffect(()=>{if(i==="render"&&S(!0),i==="viewport"){let Z=D=>{D.forEach(X=>{S(X.isIntersecting)})},G=new IntersectionObserver(Z,{threshold:.5});return C.current&&G.observe(C.current),()=>{G.disconnect()}}},[i]),j.useEffect(()=>{if(r){let Z=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(Z)}}},[r]);let Y=()=>{m(!0)},O=()=>{m(!1),S(!1)};return h?i!=="intent"?[p,C,{}]:[p,C,{onFocus:oo(T,Y),onBlur:oo(g,O),onMouseEnter:oo(y,Y),onMouseLeave:oo(x,O),onTouchStart:oo(U,Y)}]:[!1,C,{}]}function oo(i,d){return h=>{i&&i(h),h.defaultPrevented||d(h)}}function ag({page:i,...d}){let{router:h}=pm(),r=j.useMemo(()=>om(h.routes,i,h.basename),[h.routes,i,h.basename]);return r?j.createElement(og,{page:i,matches:r,...d}):null}function lg(i){let{manifest:d,routeModules:h}=gm(),[r,m]=j.useState([]);return j.useEffect(()=>{let p=!1;return Zp(i,d,h).then(S=>{p||m(S)}),()=>{p=!0}},[i,d,h]),r}function og({page:i,matches:d,...h}){let r=ja(),{manifest:m,routeModules:p}=gm(),{basename:S}=pm(),{loaderData:T,matches:g}=ng(),y=j.useMemo(()=>Kd(i,d,g,m,r,"data"),[i,d,g,m,r]),x=j.useMemo(()=>Kd(i,d,g,m,r,"assets"),[i,d,g,m,r]),U=j.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let O=new Set,Z=!1;if(d.forEach(D=>{var V;let X=m.routes[D.route.id];!X||!X.hasLoader||(!y.some(ie=>ie.route.id===D.route.id)&&D.route.id in T&&((V=p[D.route.id])!=null&&V.shouldRevalidate)||X.hasClientLoader?Z=!0:O.add(D.route.id))}),O.size===0)return[];let G=eg(i,S);return Z&&O.size>0&&G.searchParams.set("_routes",d.filter(D=>O.has(D.route.id)).map(D=>D.route.id).join(",")),[G.pathname+G.search]},[S,T,r,m,y,d,i,p]),C=j.useMemo(()=>Kp(x,m),[x,m]),Y=lg(x);return j.createElement(j.Fragment,null,U.map(O=>j.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...h})),C.map(O=>j.createElement("link",{key:O,rel:"modulepreload",href:O,...h})),Y.map(({key:O,link:Z})=>j.createElement("link",{key:O,...Z})))}function ig(...i){return d=>{i.forEach(h=>{typeof h=="function"?h(d):h!=null&&(h.current=d)})}}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vm&&(window.__reactRouterVersion="7.4.0")}catch{}function ug({basename:i,children:d,window:h}){let r=j.useRef();r.current==null&&(r.current=Zy({window:h,v5Compat:!0}));let m=r.current,[p,S]=j.useState({action:m.action,location:m.location}),T=j.useCallback(g=>{j.startTransition(()=>S(g))},[S]);return j.useLayoutEffect(()=>m.listen(T),[m,T]),j.createElement(Bp,{basename:i,children:d,location:p.location,navigationType:p.action,navigator:m})}var bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qi=j.forwardRef(function({onClick:d,discover:h="render",prefetch:r="none",relative:m,reloadDocument:p,replace:S,state:T,target:g,to:y,preventScrollReset:x,viewTransition:U,...C},Y){let{basename:O}=j.useContext(et),Z=typeof y=="string"&&bm.test(y),G,D=!1;if(typeof y=="string"&&Z&&(G=y,vm))try{let Q=new URL(window.location.href),R=y.startsWith("//")?new URL(Q.protocol+y):new URL(y),te=jt(R.pathname,O);R.origin===Q.origin&&te!=null?y=te+R.search+R.hash:D=!0}catch{Jn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=jp(y,{relative:m}),[V,ie,J]=tg(r,C),le=hg(y,{replace:S,state:T,target:g,preventScrollReset:x,relative:m,viewTransition:U});function be(Q){d&&d(Q),Q.defaultPrevented||le(Q)}let ye=j.createElement("a",{...C,...J,href:G||X,onClick:D||p?d:be,ref:ig(Y,ie),target:g,"data-discover":!Z&&h==="render"?"true":void 0});return V&&!Z?j.createElement(j.Fragment,null,ye,j.createElement(ag,{page:X})):ye});qi.displayName="Link";var sg=j.forwardRef(function({"aria-current":d="page",caseSensitive:h=!1,className:r="",end:m=!1,style:p,to:S,viewTransition:T,children:g,...y},x){let U=mo(S,{relative:y.relative}),C=ja(),Y=j.useContext(xi),{navigator:O,basename:Z}=j.useContext(et),G=Y!=null&&pg(U)&&T===!0,D=O.encodeLocation?O.encodeLocation(U).pathname:U.pathname,X=C.pathname,V=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;h||(X=X.toLowerCase(),V=V?V.toLowerCase():null,D=D.toLowerCase()),V&&Z&&(V=jt(V,Z)||V);const ie=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let J=X===D||!m&&X.startsWith(D)&&X.charAt(ie)==="/",le=V!=null&&(V===D||!m&&V.startsWith(D)&&V.charAt(D.length)==="/"),be={isActive:J,isPending:le,isTransitioning:G},ye=J?d:void 0,Q;typeof r=="function"?Q=r(be):Q=[r,J?"active":null,le?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let R=typeof p=="function"?p(be):p;return j.createElement(qi,{...y,"aria-current":ye,className:Q,ref:x,style:R,to:S,viewTransition:T},typeof g=="function"?g(be):g)});sg.displayName="NavLink";var rg=j.forwardRef(({discover:i="render",fetcherKey:d,navigate:h,reloadDocument:r,replace:m,state:p,method:S=Ii,action:T,onSubmit:g,relative:y,preventScrollReset:x,viewTransition:U,...C},Y)=>{let O=fg(),Z=yg(T,{relative:y}),G=S.toLowerCase()==="get"?"get":"post",D=typeof T=="string"&&bm.test(T),X=V=>{if(g&&g(V),V.defaultPrevented)return;V.preventDefault();let ie=V.nativeEvent.submitter,J=(ie==null?void 0:ie.getAttribute("formmethod"))||S;O(ie||V.currentTarget,{fetcherKey:d,method:J,navigate:h,replace:m,state:p,relative:y,preventScrollReset:x,viewTransition:U})};return j.createElement("form",{ref:Y,method:G,action:Z,onSubmit:r?g:X,...C,"data-discover":!D&&i==="render"?"true":void 0})});rg.displayName="Form";function cg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wm(i){let d=j.useContext(ll);return _e(d,cg(i)),d}function hg(i,{target:d,replace:h,state:r,preventScrollReset:m,relative:p,viewTransition:S}={}){let T=kp(),g=ja(),y=mo(i,{relative:p});return j.useCallback(x=>{if(Gp(x,d)){x.preventDefault();let U=h!==void 0?h:so(g)===so(y);T(i,{replace:U,state:r,preventScrollReset:m,relative:p,viewTransition:S})}},[g,T,y,h,r,d,i,m,p,S])}var dg=0,mg=()=>`__${String(++dg)}__`;function fg(){let{router:i}=wm("useSubmit"),{basename:d}=j.useContext(et),h=zp();return j.useCallback(async(r,m={})=>{let{action:p,method:S,encType:T,formData:g,body:y}=Jp(r,d);if(m.navigate===!1){let x=m.fetcherKey||mg();await i.fetch(x,h,m.action||p,{preventScrollReset:m.preventScrollReset,formData:g,body:y,formMethod:m.method||S,formEncType:m.encType||T,flushSync:m.flushSync})}else await i.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:g,body:y,formMethod:m.method||S,formEncType:m.encType||T,replace:m.replace,state:m.state,fromRouteId:h,flushSync:m.flushSync,viewTransition:m.viewTransition})},[i,d,h])}function yg(i,{relative:d}={}){let{basename:h}=j.useContext(et),r=j.useContext(kt);_e(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),p={...mo(i||".",{relative:d})},S=ja();if(i==null){p.search=S.search;let T=new URLSearchParams(p.search),g=T.getAll("index");if(g.some(x=>x==="")){T.delete("index"),g.filter(U=>U).forEach(U=>T.append("index",U));let x=T.toString();p.search=x?`?${x}`:""}}return(!i||i===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),h!=="/"&&(p.pathname=p.pathname==="/"?h:wt([h,p.pathname])),so(p)}function pg(i,d={}){let h=j.useContext(hm);_e(h!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=wm("useViewTransitionState"),m=mo(i,{relative:d.relative});if(!h.isTransitioning)return!1;let p=jt(h.currentLocation.pathname,r)||h.currentLocation.pathname,S=jt(h.nextLocation.pathname,r)||h.nextLocation.pathname;return Ti(m.pathname,S)!=null||Ti(m.pathname,p)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,h,r)=>r?r.toUpperCase():h.toLowerCase()),Fd=i=>{const d=vg(i);return d.charAt(0).toUpperCase()+d.slice(1)},jm=(...i)=>i.filter((d,h,r)=>!!d&&d.trim()!==""&&r.indexOf(d)===h).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=j.forwardRef(({color:i="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:r,className:m="",children:p,iconNode:S,...T},g)=>j.createElement("svg",{ref:g,...bg,width:d,height:d,stroke:i,strokeWidth:r?Number(h)*24/Number(d):h,className:jm("lucide",m),...T},[...S.map(([y,x])=>j.createElement(y,x)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(i,d)=>{const h=j.forwardRef(({className:r,...m},p)=>j.createElement(wg,{ref:p,iconNode:d,className:jm(`lucide-${gg(Fd(i))}`,`lucide-${i}`,r),...m}));return h.displayName=Fd(i),h};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],$d=fe("arrow-up-down",jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],Pd=fe("audio-waveform",kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],Ig=fe("baby",Sg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Tg=fe("book-open",Ag);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],km=fe("chevron-down",xg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Sm=fe("chevron-up",Eg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Mg=fe("circle-check-big",qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],io=fe("circle-help",Cg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],em=fe("clock",Og);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],Ng=fe("fast-forward",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Rg=fe("funnel",Dg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],_g=fe("house",Bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Lg=fe("info",Ug);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Hg=fe("list",Yg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],uo=fe("medal",Gg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],Wg=fe("mic",Qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Mi=fe("music",Jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Xg=fe("pause",Vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Kg=fe("play",Zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$g=fe("plus",Fg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],ev=fe("rewind",Pg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],tv=fe("rotate-ccw",nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],nm=fe("search",av);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],ov=fe("shuffle",lv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],uv=fe("skip-forward",iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],rv=fe("skull",sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],hv=fe("sliders-vertical",cv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],mv=fe("timer-off",dv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],yv=fe("timer-reset",fv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],gv=fe("timer",pv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],bv=fe("trash-2",vv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Zs=fe("trophy",wv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],kv=fe("users",jv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Im=fe("volume-2",Sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Av=fe("volume-x",Iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ro=fe("x",Tv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ks=fe("zap",xv),Ev=()=>s.jsx("main",{className:"accueil",children:s.jsxs("div",{className:"accueil-container",children:[s.jsxs("header",{className:"accueil-header",children:[s.jsx(Mi,{className:"logo",size:48}),s.jsx("h1",{children:"BlindTest Master"})]}),s.jsxs("section",{className:"intro",children:[s.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),s.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),s.jsxs("section",{className:"manches-preview",children:[s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 1"}),s.jsx("p",{children:"Easy BlindTest"}),s.jsx("span",{className:"emoji",children:"🎵"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 2"}),s.jsx("p",{children:"dnilBtseT"}),s.jsx("span",{className:"emoji",children:"🎙️"})]}),s.jsxs("div",{className:"manche-card",children:[s.jsx("h3",{children:"Manche 3"}),s.jsx("p",{children:"X-trem BlindTest"}),s.jsx("span",{className:"emoji",children:"🔀"})]})]}),s.jsx(qi,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),qv=({manche:i})=>i?s.jsxs("section",{className:"info-manche",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-emoji",children:i.emoji}),s.jsxs("h2",{children:["Manche ",i.id,": ",i.nom]})]}),s.jsxs("div",{className:"manche-details",children:[s.jsx("p",{children:i.description}),s.jsx("p",{className:"points-info",children:i.points})]})]}):null,Mv=({chanson:i,afficherTitre:d,afficherArtiste:h,afficherParoles:r})=>i?s.jsxs("div",{className:"affichage-chanson",children:[h&&s.jsx("p",{className:"chanson-artiste",children:i.artiste}),d&&s.jsx("h3",{className:"chanson-titre",children:i.titre}),r&&s.jsxs("div",{className:"paroles-container",children:[s.jsx("h4",{children:"Paroles:"}),s.jsx("p",{className:"paroles",children:i.paroles.split(`
`).map((m,p)=>s.jsxs("span",{className:"paroles-line",children:[m,s.jsx("br",{})]},p))})]})]}):null,Cv=({teams:i=[],onAddTeam:d,onRemoveTeam:h,onAddPoints:r})=>{const[m,p]=j.useState(""),[S,T]=j.useState(!1),[g,y]=j.useState({}),[x,U]=j.useState({}),[C,Y]=j.useState(!1),[O,Z]=j.useState(null),G=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];j.useEffect(()=>{const R={};i.forEach(te=>{R[te.id]=te.score}),U(R)},[i]);const D=()=>{if(m.trim()==="")return;const R={id:Date.now().toString(),name:m,score:0,color:G[i.length%G.length]};d(R),p("")},X=R=>{R.key==="Enter"&&D()},V=()=>{T(!0)},ie=()=>{T(!1),Z(null)},J=()=>{Y(!C)},le=R=>{Z(O===R?null:R)},be=(R,te)=>{U(we=>({...we,[R]:(we[R]||0)+te})),r(R,te),y(we=>({...we,[R]:te})),setTimeout(()=>{y(we=>{const Fe={...we};return delete Fe[R],Fe})},1e3)},ye=[...i].sort((R,te)=>te.score-R.score),Q=R=>{var te;return x[R]!==void 0?x[R]:((te=i.find(we=>we.id===R))==null?void 0:te.score)||0};return s.jsxs("div",{className:"team-manager-container",children:[s.jsxs("button",{className:"team-manager-button",onClick:V,children:[s.jsx(Zs,{size:20}),s.jsx("span",{children:"Équipes & Scores"})]}),s.jsxs("button",{className:"leaderboard-floating-button",onClick:J,children:[s.jsx(uo,{size:20}),s.jsx("span",{children:"Classement"})]}),C&&s.jsxs("div",{className:"floating-leaderboard",children:[s.jsxs("div",{className:"floating-leaderboard-header",children:[s.jsx("h3",{children:"Classement"}),s.jsx("button",{className:"close-leaderboard",onClick:J,children:s.jsx(ro,{size:18})})]}),ye.length>0?s.jsx("div",{className:"floating-leaderboard-content",children:ye.map((R,te)=>s.jsxs("div",{className:`floating-leaderboard-item ${te===0?"first-place":te===1?"second-place":te===2?"third-place":""}`,children:[s.jsxs("div",{className:"leaderboard-position",children:[te===0&&s.jsx(Zs,{size:16,className:"gold-trophy"}),te===1&&s.jsx(uo,{size:16,className:"silver-medal"}),te===2&&s.jsx(uo,{size:16,className:"bronze-medal"}),te>2&&s.jsxs("span",{children:["#",te+1]})]}),s.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:R.color}}),s.jsx("div",{className:"leaderboard-team-name",children:R.name}),s.jsx("div",{className:"leaderboard-team-score",children:Q(R.id)})]},R.id))}):s.jsx("div",{className:"floating-leaderboard-empty",children:s.jsx("p",{children:"Aucune équipe"})})]}),S&&s.jsx("div",{className:"team-modal-overlay",onClick:ie,children:s.jsxs("div",{className:"team-modal",onClick:R=>R.stopPropagation(),children:[s.jsx("button",{className:"close-modal",onClick:ie,children:s.jsx(ro,{size:24})}),s.jsx("div",{className:"modal-header",children:s.jsx("h2",{children:"Gestion des Équipes & Scores"})}),s.jsxs("div",{className:"unified-team-tab",children:[s.jsxs("div",{className:"add-team-form",children:[s.jsx("input",{type:"text",value:m,onChange:R=>p(R.target.value),onKeyDown:X,placeholder:"Nom de l'équipe",maxLength:20}),s.jsxs("button",{className:"add-team-button",onClick:D,disabled:m.trim()==="",children:[s.jsx($g,{size:16}),"Ajouter une équipe"]})]}),i.length>0?s.jsx("div",{className:"teams-list",children:ye.map((R,te)=>s.jsxs("div",{className:`team-item ${O===R.id?"expanded":""} ${te===0?"first-place":te===1?"second-place":te===2?"third-place":""}`,children:[s.jsxs("div",{className:"team-item-header",onClick:()=>le(R.id),children:[s.jsxs("div",{className:"team-rank",children:[te===0&&s.jsx(Zs,{size:16,className:"gold-trophy"}),te===1&&s.jsx(uo,{size:16,className:"silver-medal"}),te===2&&s.jsx(uo,{size:16,className:"bronze-medal"}),te>2&&s.jsxs("span",{className:"rank-number",children:["#",te+1]})]}),s.jsx("div",{className:"team-color",style:{backgroundColor:R.color}}),s.jsx("div",{className:"team-name",children:R.name}),s.jsxs("div",{className:"team-score-display",children:[s.jsx("span",{className:"score-value",children:Q(R.id)}),g[R.id]&&s.jsx("span",{className:`score-animation ${g[R.id]<0?"negative":"positive"}`,children:g[R.id]>0?`+${g[R.id]}`:g[R.id]})]}),s.jsx("button",{className:"expand-toggle",children:O===R.id?s.jsx(Sm,{size:18}):s.jsx(km,{size:18})})]}),O===R.id&&s.jsx("div",{className:"team-actions",children:s.jsxs("div",{className:"team-actions-inner",children:[s.jsxs("div",{className:"point-buttons",children:[s.jsx("h4",{children:"Ajouter des points"}),s.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(we=>s.jsx("button",{className:`point-button ${we<0?"negative":""}`,style:{backgroundColor:we<0?"#ffeeee":`${R.color}20`,borderColor:we<0?"#e74c3c":R.color,color:we<0?"#e74c3c":void 0},onClick:()=>be(R.id,we),children:we>0?`+${we}`:we},we))})]}),s.jsxs("button",{className:"delete-team-button",onClick:()=>h(R.id),children:[s.jsx(bv,{size:16}),s.jsx("span",{children:"Supprimer l'équipe"})]})]})})]},R.id))}):s.jsxs("div",{className:"no-teams",children:[s.jsx("p",{children:"Aucune équipe ajoutée"}),s.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]})]})})]})},Ov=({onEffectsChange:i,isExpanded:d,toggleExpanded:h,currentEffects:r,isPlaying:m,mancheActuelle:p})=>{const[S,T]=j.useState(r.distortion||5e3),[g,y]=j.useState(r.pitchShift||.6),[x,U]=j.useState(r.wahFrequency||1),[C,Y]=j.useState(r.wahDepth||.3),[O,Z]=j.useState(r.growlAmount||.03),[G,D]=j.useState(null),[X,V]=j.useState(!0),[ie,J]=j.useState(5),le=j.useRef(null),be=j.useRef(!0),ye=j.useRef(null),Q=j.useRef(!1);j.useEffect(()=>{if(p!==3||!m||!X){clearInterval(le.current),le.current=null;return}if(!Q.current)return le.current||(J(5),le.current=setInterval(()=>{J(z=>z<=1?(Q.current||oe(),5):z-1)},1e3)),()=>{clearInterval(le.current),le.current=null}},[p,m,X,Q.current]),j.useEffect(()=>{if(be.current){be.current=!1;return}T(r.distortion),y(r.pitchShift),U(r.wahFrequency),Y(r.wahDepth),Z(r.growlAmount)},[r]);const R=()=>{Q.current=!0,ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{Q.current=!1},1e4)},te=z=>{R();const _=Number.parseInt(z.target.value);T(_),i({distortion:_,pitchShift:g,wahFrequency:x,wahDepth:C,growlAmount:O})},we=z=>{R();const _=Number.parseFloat(z.target.value);y(_),i({distortion:S,pitchShift:_,wahFrequency:x,wahDepth:C,growlAmount:O})},Fe=z=>{R();const _=Number.parseFloat(z.target.value);U(_),i({distortion:S,pitchShift:g,wahFrequency:_,wahDepth:C,growlAmount:O})},yn=z=>{R();const _=Number.parseFloat(z.target.value);Y(_),i({distortion:S,pitchShift:g,wahFrequency:x,wahDepth:_,growlAmount:O})},$e=z=>{R();const _=Number.parseFloat(z.target.value);Z(_),i({distortion:S,pitchShift:g,wahFrequency:x,wahDepth:C,growlAmount:_})},H=()=>{R();const z={distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03};T(z.distortion),y(z.pitchShift),U(z.wahFrequency),Y(z.wahDepth),Z(z.growlAmount),i(z)},oe=()=>{const z={distortion:Math.floor(Math.random()*4e4)+5e3,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*3+.5,wahDepth:Math.random()*.3+.1,growlAmount:Math.random()*.3};T(z.distortion),y(z.pitchShift),U(z.wahFrequency),Y(z.wahDepth),Z(z.growlAmount),i(z)},ne=()=>{R();const z={distortion:6e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:5,wahDepth:.4,growlAmount:.5};T(z.distortion),y(z.pitchShift),U(z.wahFrequency),Y(z.wahDepth),Z(z.growlAmount),i(z)},je=()=>{R();const z={...r,pitchShift:.2};y(z.pitchShift),i(z)},v=()=>{R();const z={...r,pitchShift:3.5};y(z.pitchShift),i(z)},M=()=>{V(!X)},W={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return s.jsxs("div",{className:`audio-effects-controller ${d?"expanded":"collapsed"}`,children:[s.jsxs("div",{className:"effects-header",onClick:h,children:[s.jsx(hv,{size:16}),s.jsx("h3",{children:"Effets Audio"}),p===3&&m&&X&&s.jsx("div",{className:"auto-change-indicator",children:s.jsxs("span",{className:"countdown",children:[ie,"s"]})}),s.jsx("span",{className:"toggle-icon",children:d?s.jsx(km,{size:14}):s.jsx(Sm,{size:14})})]}),d&&s.jsxs("div",{className:"effects-content",children:[p===3&&s.jsxs("div",{className:"auto-change-toggle",children:[s.jsx("button",{className:`auto-change-button ${X?"active":""}`,onClick:M,title:X?"Désactiver le changement automatique":"Activer le changement automatique",children:X?s.jsxs(s.Fragment,{children:[s.jsx(em,{size:14}),s.jsx("span",{children:"Auto (ON)"})]}):s.jsxs(s.Fragment,{children:[s.jsx(em,{size:14}),s.jsx("span",{children:"Auto (OFF)"})]})}),s.jsx("div",{className:"auto-change-info",children:X?"Les effets changent automatiquement toutes les 5 secondes":"Changement automatique désactivé"})]}),s.jsxs("div",{className:"voice-presets",children:[s.jsxs("button",{className:"voice-preset deep",onClick:je,children:[s.jsx(rv,{size:14}),s.jsx("span",{children:"Monstre"})]}),s.jsxs("button",{className:"voice-preset chipmunk",onClick:v,children:[s.jsx(Ig,{size:14}),s.jsx("span",{children:"Chipmunk"})]})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Ks,{size:14}),s.jsx("span",{children:"Distorsion"}),s.jsxs("span",{className:"help-container",children:[s.jsx(io,{size:14,className:"help-icon",onMouseEnter:()=>D("distortion"),onMouseLeave:()=>D(null)}),s.jsx("span",{className:"effect-value",children:S})]}),G==="distortion"&&s.jsx("div",{className:"tooltip",children:W.distortion})]}),s.jsx("input",{type:"range",min:"1000",max:"70000",step:"1000",value:S,onChange:te,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Im,{size:14}),s.jsx("span",{children:"Hauteur"}),s.jsxs("span",{className:"help-container",children:[s.jsx(io,{size:14,className:"help-icon",onMouseEnter:()=>D("pitchShift"),onMouseLeave:()=>D(null)}),s.jsx("span",{className:"effect-value",children:g.toFixed(2)})]}),G==="pitchShift"&&s.jsx("div",{className:"tooltip",children:W.pitchShift})]}),s.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:g,onChange:we,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Pd,{size:14}),s.jsx("span",{children:"Wah-Freq"}),s.jsxs("span",{className:"help-container",children:[s.jsx(io,{size:14,className:"help-icon",onMouseEnter:()=>D("wahFrequency"),onMouseLeave:()=>D(null)}),s.jsx("span",{className:"effect-value",children:x.toFixed(1)})]}),G==="wahFrequency"&&s.jsx("div",{className:"tooltip",children:W.wahFrequency})]}),s.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:x,onChange:Fe,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Pd,{size:14}),s.jsx("span",{children:"Wah-Prof"}),s.jsxs("span",{className:"help-container",children:[s.jsx(io,{size:14,className:"help-icon",onMouseEnter:()=>D("wahDepth"),onMouseLeave:()=>D(null)}),s.jsx("span",{className:"effect-value",children:C.toFixed(2)})]}),G==="wahDepth"&&s.jsx("div",{className:"tooltip",children:W.wahDepth})]}),s.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:C,onChange:yn,className:"effect-slider"})]}),s.jsxs("div",{className:"effect-group",children:[s.jsxs("label",{className:"effect-label",children:[s.jsx(Ks,{size:14}),s.jsx("span",{children:"Grognement"}),s.jsxs("span",{className:"help-container",children:[s.jsx(io,{size:14,className:"help-icon",onMouseEnter:()=>D("growlAmount"),onMouseLeave:()=>D(null)}),s.jsxs("span",{className:"effect-value",children:[(O*100).toFixed(0),"%"]})]}),G==="growlAmount"&&s.jsx("div",{className:"tooltip",children:W.growlAmount})]}),s.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:O,onChange:$e,className:"effect-slider"})]}),s.jsxs("div",{className:"effects-buttons",children:[s.jsxs("button",{className:"random-button",onClick:oe,children:[s.jsx(ov,{size:14}),"Aléatoire"]}),s.jsxs("button",{className:"extreme-button",onClick:ne,children:[s.jsx(Ks,{size:14}),"Extrême"]}),s.jsxs("button",{className:"reset-button",onClick:H,children:[s.jsx(tv,{size:14}),"Réinitialiser"]})]})]})]})},tm=[{id:1,nom:"Easy BlindTest",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"dnilBtseT",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],Si=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
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
And we can learn to love again`},{id:75,titre:"Popcorn Salé",artiste:"Santa",audioUrl:"./audio/",paroles:`J'pourrais jouer le faux héros au milieu des flammes
Repartir à zéro pour un supplément d'âme
J'pourrais te regarder dans les yeux
Te dire que tout ira mieux
J'mettrai la musique plus fort pour plus entendre dehors

Allez viens
Je t'emmène loin regarder le monde s'écrouler
Y'aura du popcorn salé
Y'aura un nouveau monde à nos pieds

J'pourrais jouer les beaux mots au milieu des femmes
Le premier domino de ton cœur qui s'emballe
J'pourrais te regarder dans les yeux
Te dire qu'avant c'était mieux
Remettre la musique plus fort pour plus entendre nos remords
J'entendrai les bravos étouffer les flammes
J'éteindrai le chaos, tu seras ma femme
En on se regardera dans les yeux
Dire que demain sera mieux
Je chanterai toujours plus fort pour qu'on m'entende dehors

Allez viens
Je t'emmène loin regarder le monde s'écrouler
Y'aura du popcorn salé
Y'aura un nouveau monde à nos pieds
Allez viens
Je t'emmène loin regarder le monde s'écrouler
Y'aura du popcorn salé
Y'aura un nouveau monde à nos pieds
Allez viens
Je t'emmène loin regarder le monde s'écrouler
Y'aura du popcorn salé
Y'aura un nouveau monde à nos pieds`},{id:76,titre:"Au Cœur De Moi",artiste:"Amir",audioUrl:"./audio/Amir.mp3",paroles:`Un jour, je suis prédateur
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
Because of you, mm, ooh`},{id:86,titre:"Jonas Blue ft. JP Cooper",artiste:"Perfect Strangers",audioUrl:"./audio/Jonas-Blue_Perfect-Strangers.mp3",paroles:`You were looking at me like you wanted to stay
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
Ooh (Indescribable)`},{id:94,titre:"Le Sud",artiste:"Nino Ferrer",audioUrl:"./audio/Le-Sud.mp3",paroles:`C'est un endroit
Qui ressemble à la Louisiane
À l'Italie
Il y a du linge
Étendu sur la terrasse
Et c'est joli

On dirait le Sud
Le temps dure longtemps
Et la vie sûrement
Plus d'un million d'années
Et toujours en été

Y a plein d'enfants
Qui se roulent sur la pelouse
Y a plein de chiens
Y a même un chat
Une tortue, des poissons rouges
Il ne manque rien

On dirait le Sud
Le temps dure longtemps
Et la vie sûrement
Plus d'un million d'années
Et toujours en été

Un jour ou l'autre
Il faudra qu'il y ait la guerre
On le sait bien
On n'aime pas ça
Mais on ne sait pas quoi faire
On dit 'c'est le destin'

Tant pis pour le Sud
C'était pourtant bien
On aurait pu vivre
Plus d'un million d'années
Et toujours en été`}],zv=()=>{const[i,d]=j.useState(!1),[h,r]=j.useState("general"),m=()=>d(!0),p=()=>d(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"regles-button",onClick:m,children:[s.jsx(Tg,{size:20}),s.jsx("span",{children:"Règles du jeu"})]}),i&&s.jsx("div",{className:"regles-overlay",onClick:p,children:s.jsxs("div",{className:"regles-modal",onClick:S=>S.stopPropagation(),children:[s.jsx("button",{className:"regles-close",onClick:p,children:s.jsx(ro,{size:24})}),s.jsxs("div",{className:"regles-header",children:[s.jsx("h2",{children:"Règles du BlindTest Master"}),s.jsx("p",{children:"Tout ce que tu dois savoir pour jouer"})]}),s.jsxs("div",{className:"regles-tabs",children:[s.jsxs("button",{className:`regles-tab ${h==="general"?"active":""}`,onClick:()=>r("general"),children:[s.jsx(Lg,{size:18}),s.jsx("span",{children:"Général"})]}),s.jsxs("button",{className:`regles-tab ${h==="manches"?"active":""}`,onClick:()=>r("manches"),children:[s.jsx(Mi,{size:18}),s.jsx("span",{children:"Manches & Points"})]}),s.jsxs("button",{className:`regles-tab ${h==="equipes"?"active":""}`,onClick:()=>r("equipes"),children:[s.jsx(kv,{size:18}),s.jsx("span",{children:"Équipes & Temps"})]})]}),s.jsxs("div",{className:"regles-content",children:[h==="general"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Principe du jeu"}),s.jsxs("p",{children:[s.jsx("i",{children:"BlindTest Master"})," est un jeu musical où les joueurs doivent deviner le titre et/ou l'artiste d'une chanson jouée. Le jeu se déroule en plusieurs manches avec différents niveaux de difficulté."]}),s.jsx("h3",{children:"Objectif"}),s.jsx("p",{children:"Obtenir le maximum de points en identifiant correctement les chansons jouées. L'équipe avec le plus de points à la fin de toutes les manches remporte la partie."}),s.jsxs("div",{className:"buzzer-rule",children:[s.jsx("div",{className:"buzzer-icon",children:s.jsx(Wg,{size:24})}),s.jsxs("div",{className:"buzzer-content",children:[s.jsx("h3",{children:"Règle du micro-buzzer"}),s.jsx("p",{children:"Pour répondre, une équipe doit d'abord attraper le micro-buzzer. La première équipe qui s'empare du micro a le droit de proposer sa réponse. Si la réponse est incorrecte, les autres équipes peuvent alors tenter leur chance."})]})]}),s.jsx("h3",{children:"Déroulement"}),s.jsxs("p",{children:["1. Formez des équipes et donnez-leur un nom",s.jsx("br",{}),"2. Jouez les chansons une par une",s.jsx("br",{}),"3. L'équipe qui attrape le micro-buzzer en premier peut répondre",s.jsx("br",{}),"4. Les équipes qui devinent correctement gagnent des points",s.jsx("br",{}),"5. Passez à travers les différentes manches",s.jsx("br",{}),"6. L'équipe avec le plus de points à la fin gagne"]})]}),h==="manches"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Les différentes manches"}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"1"}),s.jsx("span",{className:"manche-emoji",children:"🎵"}),s.jsx("h4",{children:"Easy BlindTest"})]}),s.jsx("p",{children:"Les chansons sont jouées normalement. Les joueurs doivent identifier le titre et l'artiste."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +1 pour le titre, +1 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"2"}),s.jsx("span",{className:"manche-emoji",children:"🔄"}),s.jsx("h4",{children:"dnilBtseT"})]}),s.jsx("p",{children:"Les chansons sont jouées à l'envers. Les joueurs doivent reconnaître la mélodie malgré l'inversion."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +3 pour le titre, +3 pour l'artiste"]})]}),s.jsxs("div",{className:"manche-card",children:[s.jsxs("div",{className:"manche-header",children:[s.jsx("span",{className:"manche-number",children:"3"}),s.jsx("span",{className:"manche-emoji",children:"👹"}),s.jsx("h4",{children:"X-trem BlindTest"})]}),s.jsx("p",{children:"Les chansons sont déformées avec des effets audio. C'est la manche la plus difficile où il faut vraiment avoir une sacrée bonne oreille..."}),s.jsxs("div",{className:"points-info",children:[s.jsx("strong",{children:"Points :"})," +4 pour le titre, +4 pour l'artiste"]})]}),s.jsxs("div",{className:"points-card malus",children:[s.jsx("h4",{children:"Malus"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"1 point seulement"})," : Réponse donnée après le temps"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-1 point"})," : Réponse incorrecte"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"-2 points"})," : Règles non-respectées (ex: répondre sans avoir le micro-buzzer)"]})]})]}),s.jsx("p",{className:"points-note",children:"Note : Tu peux modifier ces valeurs pour rendre le jeu plus ou moins compétitif."})]}),h==="equipes"&&s.jsxs("div",{className:"regles-section",children:[s.jsx("h3",{children:"Gestion des équipes"}),s.jsx("h4",{children:"Création des équipes"}),s.jsxs("p",{children:["Crée autant d'équipes que tu le souhaites en cliquant sur le bouton ",s.jsx("i",{children:'"Équipes & Scores"'}),". Donne un nom à chaque équipe. Chaque équipe recevra automatiquement une couleur distinctive."]}),s.jsx("h4",{children:"Nombre de joueurs"}),s.jsx("p",{children:"Il n'y a pas de limite au nombre de joueurs par équipe. Tu peux jouer avec :"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Plusieurs équipes de plusieurs joueurs"}),s.jsx("li",{children:'Plusieurs joueurs individuels (chacun étant sa propre "équipe")'})]}),s.jsx("h4",{children:"Classement"}),s.jsxs("p",{children:["Le classement des équipes est visible à tout moment en cliquant sur le bouton ",s.jsx("i",{children:'"Classement"'}),". Les trois premières équipes sont mises en évidence avec des médailles d'or, d'argent et de bronze."]}),s.jsx("h3",{children:"Gestion du temps"}),s.jsx("h4",{children:"Durée d'écoute"}),s.jsx("p",{children:"Chaque chanson peut être écoutée pendant un maximum de 25 secondes. La réponse doit être donnée durant ce temps imparti."}),s.jsx("h4",{children:"Temps de réponse"}),s.jsx("p",{children:"Après avoir attrapé le micro-buzzer, l'équipe dispose de 5 secondes pour donner sa réponse. Si elle ne répond pas correctement, le micro-buzzer est remis en jeu pour les autres équipes."}),s.jsx("div",{className:"time-warning",children:s.jsxs("p",{children:[s.jsx("strong",{children:"Astuce :"})," Pour rendre le jeu plus dynamique, tu peux arrêter la musique dès qu'une équipe attrape le micro-buzzer, augmentant ainsi la difficulté."]})})]})]}),s.jsxs("div",{className:"regles-footer",children:[s.jsx("p",{children:"Amuse-toi bien et que la meilleure équipe gagne !"}),s.jsx("button",{className:"regles-close-button",onClick:p,children:"Fermer"})]})]})})]})},Nv=({chansons:i,chansonsJouees:d,chansonsJoueesParManche:h,mancheActuelle:r})=>{const[m,p]=j.useState(!1),[S,T]=j.useState("titre"),[g,y]=j.useState("asc"),[x,U]=j.useState(""),[C,Y]=j.useState("all"),O=()=>p(!0),Z=()=>p(!1),G=J=>{S===J?y(g==="asc"?"desc":"asc"):(T(J),y("asc"))},D=J=>d.includes(J),X=J=>{var le;return((le=h[r])==null?void 0:le.includes(J))||!1},V=j.useMemo(()=>i.filter(le=>{const be=le.titre.toLowerCase().includes(x.toLowerCase())||le.artiste.toLowerCase().includes(x.toLowerCase());return C==="all"?be:C==="played"?be&&D(le.id):C==="notPlayed"?be&&!D(le.id):be}).sort((le,be)=>{const ye=S==="titre"?le.titre.toLowerCase():le.artiste.toLowerCase(),Q=S==="titre"?be.titre.toLowerCase():be.artiste.toLowerCase();return g==="asc"?ye.localeCompare(Q):Q.localeCompare(ye)}),[i,S,g,x,C,d]),ie=j.useMemo(()=>{var J;return{total:i.length,played:d.length,remaining:i.length-d.length,playedInCurrentRound:((J=h[r])==null?void 0:J.length)||0}},[i,d,h,r]);return s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"liste-chansons-button",onClick:O,children:[s.jsx(Hg,{size:20}),s.jsx("span",{children:"Liste des Chansons"})]}),m&&s.jsx("div",{className:"liste-chansons-overlay",onClick:Z,children:s.jsxs("div",{className:"liste-chansons-modal",onClick:J=>J.stopPropagation(),children:[s.jsx("button",{className:"liste-chansons-close",onClick:Z,children:s.jsx(ro,{size:24})}),s.jsxs("div",{className:"liste-chansons-header",children:[s.jsx("h2",{children:"Liste des Chansons"}),s.jsx("p",{children:"Toutes les chansons disponibles dans le jeu"})]}),s.jsxs("div",{className:"liste-chansons-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-value",children:ie.total}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-value",children:ie.played}),s.jsx("span",{className:"stat-label",children:"Jouées"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-value",children:ie.remaining}),s.jsx("span",{className:"stat-label",children:"Restantes"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-value",children:ie.playedInCurrentRound}),s.jsxs("span",{className:"stat-label",children:["Manche ",r]})]})]}),s.jsxs("div",{className:"liste-chansons-controls",children:[s.jsxs("div",{className:"search-container",children:[s.jsx(nm,{size:18,className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Rechercher une chanson ou un artiste...",value:x,onChange:J=>U(J.target.value),className:"search-input"}),x&&s.jsx("button",{className:"clear-search",onClick:()=>U(""),"aria-label":"Effacer la recherche",children:s.jsx(ro,{size:16})})]}),s.jsxs("div",{className:"filter-container",children:[s.jsx(Rg,{size:18,className:"filter-icon"}),s.jsxs("select",{value:C,onChange:J=>Y(J.target.value),className:"filter-select",children:[s.jsx("option",{value:"all",children:"Toutes les chansons"}),s.jsx("option",{value:"played",children:"Déjà jouées"}),s.jsx("option",{value:"notPlayed",children:"Non jouées"})]})]})]}),s.jsx("div",{className:"liste-chansons-table-container",children:s.jsxs("table",{className:"liste-chansons-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"status-column",children:"Statut"}),s.jsxs("th",{className:`sortable ${S==="titre"?"active":""}`,onClick:()=>G("titre"),children:["Titre",S==="titre"&&s.jsx($d,{size:16,className:`sort-icon ${g==="desc"?"desc":""}`})]}),s.jsxs("th",{className:`sortable ${S==="artiste"?"active":""}`,onClick:()=>G("artiste"),children:["Artiste",S==="artiste"&&s.jsx($d,{size:16,className:`sort-icon ${g==="desc"?"desc":""}`})]}),s.jsx("th",{className:"round-column",children:"Manche"})]})}),s.jsx("tbody",{children:V.length>0?V.map(J=>{const le=D(J.id),be=X(J.id);let ye=null;for(const[Q,R]of Object.entries(h))if(R.includes(J.id)){ye=Q;break}return s.jsxs("tr",{className:`
                            ${le?"played":""} 
                            ${be?"played-current-round":""}
                          `,children:[s.jsx("td",{className:"status-cell",children:le?s.jsx(Mg,{size:18,className:"played-icon"}):s.jsx(Mi,{size:18,className:"not-played-icon"})}),s.jsx("td",{children:J.titre}),s.jsx("td",{children:J.artiste}),s.jsx("td",{className:"round-cell",children:ye?s.jsx("span",{className:`round-badge round-${ye}`,children:ye}):"-"})]},J.id)}):s.jsx("tr",{className:"no-results",children:s.jsx("td",{colSpan:4,children:s.jsxs("div",{className:"no-results-message",children:[s.jsx(nm,{size:24}),s.jsx("p",{children:"Aucune chanson ne correspond à votre recherche"})]})})})})]})}),s.jsxs("div",{className:"liste-chansons-footer",children:[s.jsxs("p",{children:[V.length," chanson",V.length!==1?"s":""," affichée",V.length!==1?"s":""]}),s.jsx("button",{className:"liste-chansons-close-button",onClick:Z,children:"Fermer"})]})]})})]})},am=20,Dv=()=>{const[i,d]=j.useState(1),[h,r]=j.useState(null),[m,p]=j.useState(!1),[S,T]=j.useState(!1),[g,y]=j.useState(!1),[x,U]=j.useState(!1),[C,Y]=j.useState([]),[O,Z]=j.useState({1:[],2:[],3:[]}),[G,D]=j.useState(!1),[X,V]=j.useState(null),[ie,J]=j.useState(null),[le,be]=j.useState(1),[ye,Q]=j.useState(!1),[R,te]=j.useState([]),[we,Fe]=j.useState(null),[yn,$e]=j.useState(!1),[H,oe]=j.useState({distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03}),ne=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[je,v]=j.useState({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()}),M=j.useRef(null),W=j.useRef(null),z=j.useRef(null),_=j.useRef(null),re=j.useRef(null),P=j.useRef(null),qe=j.useRef(0),ke=tm.find(L=>L.id===i),ze=je.tempsEcoule,Ae=je.actif,Ge=je.termine,nt=()=>{const L=Si.filter(ue=>!C.includes(ue.id)&&ue.id!==we);if(L.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),Y([]),Z({1:[],2:[],3:[]}),Fe(null);const ue=Si.filter(Te=>Te.id!==we),ge=Math.floor(Math.random()*ue.length);return ue[ge]}const K=Math.floor(Math.random()*L.length);return L[K]},Vn=j.useCallback(()=>{if(O[i].length>=am){const K=i<3?i+1:1;return d(K),!0}return!1},[i,O]),un=()=>{if(_.current){try{_.current.stop()}catch{}_.current=null}},Xn=()=>{try{W.current||(W.current=new(window.AudioContext||window.webkitAudioContext));const L=i===2?X:ie;if(W.current&&L){console.log(`Démarrage de la lecture du buffer ${i===2?"inversé":"monstre"}`),un();const K=W.current.createBufferSource();if(K.buffer=L,i===3){let Te=1;const{pitchShift:Ue}=H;Ue<.5?Te=.4:Ue<1?Te=.6:Ue>2?Te=2.5:Te=1.5,K.playbackRate.value=Te}let ue;if(i===3){const{distortion:Te,pitchShift:Ue,wahFrequency:Qe,wahDepth:pn,growlAmount:gn}=H,sn=W.current.createGain();sn.gain.value=x?0:le,re.current=sn;const vn=W.current.createWaveShaper(),ka=Kt(Te);vn.curve=ka,vn.oversample="4x";const kn=W.current.createBiquadFilter();kn.type="bandpass",kn.frequency.value=1e3,kn.Q.value=2;const De=W.current.createOscillator();De.type="sine",De.frequency.value=Qe;const Ne=W.current.createGain();Ne.gain.value=pn*500,De.connect(Ne),Ne.connect(kn.frequency),De.start(),z.current={distortionNode:vn,filterNode:kn,oscillator:De,oscillatorGain:Ne,pitchShift:Ue,growlAmount:gn},K.connect(kn),kn.connect(vn),vn.connect(sn),sn.connect(W.current.destination),ue=sn}else{const Te=W.current.createGain();Te.gain.value=x?0:le,re.current=Te,K.connect(Te),Te.connect(W.current.destination),ue=Te}const ge=isFinite(qe.current)?qe.current:0;return ge>=L.duration?(qe.current=0,K.start(0,0)):K.start(0,ge),_.current=K,_.current.startTime=W.current.currentTime,_.current.startOffset=ge,console.log(`Lecture ${i===2?"inversée":"monstre"} démarrée avec succès à la position ${ge}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(L){return console.error("Erreur lors de la lecture audio modifiée:",L),!1}},St=j.useCallback(()=>{if(console.log("togglePlay appelé, manche:",i),i===2||i===3)if(console.log(`Manche ${i} - utilisation du mode audio modifié`),m){if(console.log("Arrêt de la lecture modifiée"),_.current&&W.current)try{if(_.current.startTime!==void 0&&_.current.startOffset!==void 0){const L=W.current.currentTime-_.current.startTime,K=_.current.startOffset+L;isFinite(K)&&K>=0&&(qe.current=K,console.log("Position audio sauvegardée:",qe.current))}}catch(L){console.error("Erreur lors du calcul de la position audio:",L)}un(),p(!1),It()}else if(console.log("Démarrage de la lecture modifiée"),!X&&i===2||!ie&&i===3||!ye){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),Q(!0),!G&&h)(i===2?il:ul)(h.audioUrl).then(K=>{K&&ye&&Xn()&&(p(!0),!Ae&&!Ge?tt():Ge||At())});else if(i===2&&X||i===3&&ie){if(i===3&&h&&H){const K=fo(ie,H);J(K)}Xn()&&(p(!0),!Ae&&!Ge?tt():Ge||At())}}else Xn()&&(p(!0),!Ae&&!Ge?tt():Ge||At());else console.log("Manche standard - utilisation de l'audio normal"),m?(M.current.pause(),p(!1),It()):M.current.play().then(()=>{p(!0),!Ae&&!Ge?tt():Ge||At()}).catch(L=>{console.error("Erreur lors de la lecture audio:",L)})},[m,i,X,ie,G,h,ye,Ae,Ge,H]),tt=()=>{P.current&&clearInterval(P.current),v(L=>({...L,actif:!0,termine:!1,dernierTemps:Date.now()})),P.current=setInterval(()=>{v(L=>{const K=L.tempsEcoule+1;return K>=25?(clearInterval(P.current),P.current=null,m&&(i===2||i===3?un():M.current&&M.current.pause(),p(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:L.dernierTemps}):(K===20&&m&&(i===2||i===3?un():M.current&&M.current.pause(),p(!1)),{...L,tempsEcoule:K,dernierTemps:Date.now()})})},1e3)},It=()=>{P.current&&(clearInterval(P.current),P.current=null),v(L=>({...L,actif:!1,dernierTemps:Date.now()}))},At=()=>{P.current&&clearInterval(P.current),v(L=>({...L,actif:!0,dernierTemps:Date.now()})),P.current=setInterval(()=>{v(L=>{const K=L.tempsEcoule+1;return K>=25?(clearInterval(P.current),P.current=null,m&&(i===2||i===3?un():M.current&&M.current.pause(),p(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:L.dernierTemps}):(K===20&&m&&(i===2||i===3?un():M.current&&M.current.pause(),p(!1)),{...L,tempsEcoule:K,dernierTemps:Date.now()})})},1e3)},Tt=()=>{P.current&&(clearInterval(P.current),P.current=null),v({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()})},ol=()=>{i===2||i===3?_.current&&W.current&&(un(),qe.current+=5,m&&Xn()):M.current&&(M.current.currentTime+=5)},Ci=()=>{i===2||i===3?_.current&&W.current&&(un(),qe.current=Math.max(0,qe.current-5),m&&Xn()):M.current&&(M.current.currentTime=Math.max(0,M.current.currentTime-5))},Oi=()=>{if(h&&(Fe(h.id),Y(K=>[...K,h.id]),Z(K=>({...K,[i]:[...K[i],h.id]}))),(i===2||i===3)&&_.current?un():M.current&&M.current.pause(),p(!1),y(!1),T(!1),D(!1),V(null),J(null),Q(!1),Tt(),qe.current=0,Zt(),!Vn()){const K=nt();r(K)}},En=()=>{(i===2||i===3)&&re.current?re.current.gain.value=x?le:0:M.current&&(M.current.muted=!x),U(!x)},Zt=()=>{try{if(un(),z.current){if(z.current.oscillator)try{z.current.oscillator.stop()}catch{}z.current.distortionNode&&z.current.distortionNode.disconnect(),z.current.filterNode&&z.current.filterNode.disconnect(),z.current.oscillatorGain&&z.current.oscillatorGain.disconnect(),z.current=null}re.current&&(re.current.disconnect(),re.current=null),W.current&&W.current.state}catch(L){console.error("Erreur lors du nettoyage des connexions audio:",L)}},il=async L=>{try{console.log("Préparation de l'audio inversé pour:",L),Zt(),W.current=new(window.AudioContext||window.webkitAudioContext);const K=await fetch(L);if(!K.ok)throw new Error(`Erreur lors du chargement de l'audio: ${K.status}`);const ue=await K.arrayBuffer();if(!ue||ue.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ue.byteLength);const ge=await W.current.decodeAudioData(ue);console.log("Audio décodé, durée:",ge.duration,"secondes");const Te=W.current.createBuffer(ge.numberOfChannels,ge.length,ge.sampleRate);for(let Ue=0;Ue<ge.numberOfChannels;Ue++){const Qe=ge.getChannelData(Ue),pn=Te.getChannelData(Ue);for(let gn=0;gn<Qe.length;gn++)pn[gn]=Qe[Qe.length-1-gn]}return console.log("Buffer inversé créé avec succès"),V(Te),D(!0),!0}catch(K){return console.error("Erreur lors de la préparation de l'audio inversé:",K),!1}},ul=async L=>{try{console.log("Préparation de l'audio monstre pour:",L),W.current||(W.current=new(window.AudioContext||window.webkitAudioContext));const K=await fetch(L);if(!K.ok)throw new Error(`Erreur lors du chargement de l'audio: ${K.status}`);const ue=await K.arrayBuffer();if(!ue||ue.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",ue.byteLength);const ge=await W.current.decodeAudioData(ue);return console.log("Audio décodé, durée:",ge.duration,"secondes"),J(ge),D(!0),!0}catch(K){return console.error("Erreur lors de la préparation de l'audio monstre:",K),!1}},Kt=L=>{const ue=new Float32Array(44100),ge=Math.PI/180;for(let Te=0;Te<44100;++Te){const Ue=Te*2/44100-1;ue[Te]=(3+L/1e3)*Ue*20*ge/(Math.PI+L/1e3*Math.abs(Ue))}return ue},zi=L=>{if(oe(L),i===3&&W.current&&z.current){const{distortion:K,pitchShift:ue,wahFrequency:ge,wahDepth:Te,growlAmount:Ue}=L;if(z.current.distortionNode&&(z.current.distortionNode.curve=Kt(K)),z.current.oscillator&&(z.current.oscillator.frequency.value=ge),z.current.oscillatorGain&&(z.current.oscillatorGain.gain.value=Te*500),z.current.pitchShift=ue,_.current){let Qe;ue<.5?Qe=.4:ue<1?Qe=.6:ue>2?Qe=2.5:Qe=1.5;try{_.current.playbackRate.value=Qe}catch(pn){console.error("Erreur lors de l'ajustement du playbackRate:",pn)}}z.current.growlAmount=Ue,console.log("Paramètres d'effets mis à jour en temps réel")}},fo=(L,K)=>{const{distortion:ue,pitchShift:ge,wahFrequency:Te,wahDepth:Ue,growlAmount:Qe}=K,gn=W.current.createBuffer(L.numberOfChannels,L.length,L.sampleRate);for(let sn=0;sn<L.numberOfChannels;sn++){const vn=L.getChannelData(sn),ka=gn.getChannelData(sn),kn=new Float32Array(vn.length);for(let De=0;De<vn.length;De++){const Ne=Math.sin(De/L.sampleRate*Te*Math.PI*2)*Ue*.5;vn[De]*(1+Ne);let Yn;ge<.5?Yn=2.5:ge<1?Yn=1.8:ge>2?Yn=.4:Yn=.6;const $t=Math.floor(De/(ge*Yn));$t<vn.length&&(kn[De]=vn[$t])}for(let De=0;De<vn.length;De++){let Ne=kn[De]||0;if(Ne=Math.tanh(Ne*(ue/2e3))*.9,Math.random()<Qe*.7){const Yn=Qe*1.5;Ne+=(Math.random()*.4-.2)*Math.sin(De/L.sampleRate*40*Math.PI*2)*Yn,Math.random()<Qe*.4&&(Ne*=1+Math.random()*.3),Math.random()<Qe*.1&&(Ne=0)}if(ue>2e4){const Yn=(ue-2e4)/4e4;if(Ne+=Ne*Math.sin(De/L.sampleRate*80*Math.PI*2)*Yn,ue>6e4){const $t=Math.max(4,Math.floor(16-(ue-6e4)/15e3)),sl=2/Math.pow(2,$t);Ne=Math.round(Ne/sl)*sl}}Ne=Math.max(-.95,Math.min(.95,Ne)),ka[De]=Ne}}return gn},Ni=()=>{$e(!yn)};j.useEffect(()=>()=>{Zt(),P.current&&clearInterval(P.current)},[]),j.useEffect(()=>{if(!h){const L=nt();r(L)}},[h]),j.useEffect(()=>{h&&(console.log("Changement de chanson détecté, manche:",i),M.current&&M.current.pause(),un(),p(!1),D(!1),V(null),J(null),Q(!1),Tt(),qe.current=0,Zt(),i===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),il(h.audioUrl)):i===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),ul(h.audioUrl)):(console.log("Manche standard - chargement audio normal"),M.current&&(M.current.src=h.audioUrl,M.current.load(),D(!0))))},[h,i]),j.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",i),D(!1),V(null),J(null),Q(!1),qe.current=0,Zt(),Tt();const L=nt();r(L)},[i]);const Di=L=>{d(L),p(!1),y(!1),T(!1),Q(!1)},Ft=L=>{if(console.log("Fonction ajouterEquipe appelée avec:",L),typeof L=="string"){const K={id:Date.now().toString(),name:L,score:0,color:ne[R.length%ne.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",K),te(ue=>[...ue,K])}else L&&typeof L=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",L),te(K=>[...K,L])):console.error("Format d'équipe invalide:",L);console.log("Équipes après ajout:",R)},dn=L=>{const K=R.filter(ue=>ue.id!==L);te(K)},Ri=(L,K)=>{const ue=R.findIndex(ge=>ge.id===L);if(ue>=0){const ge=[...R];ge[ue]={...ge[ue],score:ge[ue].score+K},te(ge)}else console.error("Équipe non trouvée avec l'ID:",L)};return s.jsxs("main",{className:"jeu",children:[s.jsx("audio",{ref:M}),s.jsxs("header",{className:"jeu-header",children:[s.jsx(qi,{to:"/",className:"accueil-link",children:s.jsx(_g,{size:24})}),s.jsx("h1",{children:"BlindTest Master"}),s.jsx(Mi,{className:"logo",size:32})]}),s.jsx(Cv,{teams:R,onAddTeam:Ft,onRemoveTeam:dn,onAddPoints:Ri}),s.jsx(zv,{}),s.jsx(Nv,{chansons:Si,chansonsJouees:C,chansonsJoueesParManche:O,mancheActuelle:i}),s.jsx(qv,{manche:ke}),i===3&&s.jsxs("div",{className:"effets-info",children:[s.jsxs("span",{className:"effet-badge",children:["Distorsion: ",H.distortion]}),s.jsxs("span",{className:"effet-badge",children:["Hauteur: ",H.pitchShift.toFixed(2)]}),s.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",H.wahFrequency.toFixed(1),"Hz"]}),s.jsxs("span",{className:"effet-badge",children:["Grognement: ",(H.growlAmount*100).toFixed(0),"%"]})]}),s.jsx("section",{className:"jeu-content",children:h?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"chrono-container",children:[s.jsxs("div",{className:`chrono ${ze>20?"time-critical":ze>15?"time-warning":""}`,children:[s.jsxs("span",{children:[ze," / 25 secondes"]}),s.jsx("div",{className:"chrono-progress",style:{width:`${ze/25*100}%`}})]}),s.jsxs("div",{className:"chrono-controls",children:[Ae?s.jsxs("button",{className:"chrono-button stop",onClick:It,children:[s.jsx(mv,{size:20}),s.jsx("span",{children:"Arrêter Chrono"})]}):s.jsxs("button",{className:"chrono-button start",onClick:tt,disabled:Ge,children:[s.jsx(gv,{size:20}),s.jsx("span",{children:"Démarrer Chrono"})]}),s.jsxs("button",{className:"chrono-button reset",onClick:Tt,children:[s.jsx(yv,{size:20}),s.jsx("span",{children:"Réinitialiser"})]})]})]}),s.jsxs("div",{className:"player-controls-container",children:[s.jsxs("div",{className:"player-controls",children:[s.jsx("button",{className:"control-button rewind",onClick:Ci,"aria-label":"Reculer",children:s.jsx(ev,{size:24})}),s.jsx("button",{className:"control-button play-pause",onClick:St,"aria-label":m?"Pause":"Lecture",children:m?s.jsx(Xg,{size:32}):s.jsx(Kg,{size:32})}),s.jsx("button",{className:"control-button forward",onClick:ol,"aria-label":"Avancer",children:s.jsx(Ng,{size:24})}),s.jsx("button",{className:"control-button next",onClick:Oi,"aria-label":"Chanson suivante",children:s.jsx(uv,{size:32})}),s.jsx("button",{className:"control-button mute",onClick:En,"aria-label":x?"Activer le son":"Couper le son",children:x?s.jsx(Av,{size:24}):s.jsx(Im,{size:24})})]}),i===3&&s.jsx(Ov,{onEffectsChange:zi,isExpanded:yn,toggleExpanded:Ni,currentEffects:H,isPlaying:m,mancheActuelle:i})]}),s.jsxs("div",{className:"guess-mode",children:[g?s.jsxs(s.Fragment,{children:[s.jsx(Mv,{chanson:h,afficherTitre:!0,afficherArtiste:!0,afficherParoles:S}),(i===2||i===3)&&s.jsxs("div",{className:"normal-audio-player",children:[s.jsx("h4",{children:"Version normale:"}),s.jsx("audio",{src:h.audioUrl,controls:!0,className:"normal-audio-controls"})]})]}):s.jsx("div",{className:"hidden-answer",children:s.jsx("p",{children:"?????"})}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"answer-toggle",onClick:()=>y(!g),children:g?"Masquer la réponse":"Révéler la réponse"}),g&&s.jsx("button",{className:"lyrics-toggle",onClick:()=>T(!S),children:S?"Masquer les paroles":"Afficher les paroles"})]})]})]}):s.jsxs("div",{className:"no-songs-message",children:[s.jsx("p",{children:"Aucune chanson disponible."}),s.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),s.jsxs("footer",{className:"jeu-footer",children:[s.jsx("div",{className:"round-navigation",children:tm.map(L=>s.jsxs("button",{className:`round-button ${i===L.id?"active":""}`,onClick:()=>Di(L.id),children:[s.jsx("span",{className:"round-number",children:L.id}),s.jsx("span",{className:"round-emoji",children:L.emoji})]},L.id))}),s.jsxs("div",{className:"songs-played-info",children:[s.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",O[i].length," /"," ",am]}),s.jsxs("p",{children:["Total des chansons jouées: ",C.length," /"," ",Si.length]})]})]})]})},Rv=()=>{const i=new Date().getFullYear();return s.jsxs("footer",{className:"footer",children:[s.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"}),s.jsxs("p",{className:"footer-text",children:["© ",i," - Tous droits réservés"]})]})};function Bv(){return s.jsxs(ug,{children:[s.jsxs(_p,{children:[s.jsx($s,{path:"/",element:s.jsx(Ev,{})}),s.jsx($s,{path:"/jeu",element:s.jsx(Dv,{})})]}),s.jsx(Rv,{})]})}Vy.createRoot(document.getElementById("root")).render(s.jsx(Uy.StrictMode,{children:s.jsx(Bv,{})}));
