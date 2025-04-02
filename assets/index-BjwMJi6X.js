(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const k of p.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&r(k)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();function rm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hs={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function Hy(){if(_h)return ao;_h=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function d(r,m,p){var k=null;if(p!==void 0&&(k=""+p),m.key!==void 0&&(k=""+m.key),"key"in m){p={};for(var A in m)A!=="key"&&(p[A]=m[A])}else p=m;return m=p.ref,{$$typeof:i,type:r,key:k,ref:m!==void 0?m:null,props:p}}return ao.Fragment=h,ao.jsx=d,ao.jsxs=d,ao}var Yh;function Gy(){return Yh||(Yh=1,Hs.exports=Hy()),Hs.exports}var u=Gy(),Gs={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Jy(){if(Hh)return he;Hh=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),k=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.iterator;function N(g){return g===null||typeof g!="object"?null:(g=L&&g[L]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,V={};function J(g,E,W){this.props=g,this.context=E,this.refs=V,this.updater=W||G}J.prototype.isReactComponent={},J.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},J.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function z(){}z.prototype=J.prototype;function X(g,E,W){this.props=g,this.context=E,this.refs=V,this.updater=W||G}var H=X.prototype=new z;H.constructor=X,C(H,J.prototype),H.isPureReactComponent=!0;var ee=Array.isArray,P={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function Ae(g,E,W,D,_,de){return W=de.ref,{$$typeof:i,type:g,key:E,ref:W!==void 0?W:null,props:de}}function je(g,E){return Ae(g.type,E,void 0,void 0,void 0,g.props)}function Q(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function B(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(W){return E[W]})}var ae=/\/+/g;function ce(g,E){return typeof g=="object"&&g!==null&&g.key!=null?B(""+g.key):E.toString(36)}function ze(){}function Pe(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ze,ze):(g.status="pending",g.then(function(E){g.status==="pending"&&(g.status="fulfilled",g.value=E)},function(E){g.status==="pending"&&(g.status="rejected",g.reason=E)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function F(g,E,W,D,_){var de=typeof g;(de==="undefined"||de==="boolean")&&(g=null);var le=!1;if(g===null)le=!0;else switch(de){case"bigint":case"string":case"number":le=!0;break;case"object":switch(g.$$typeof){case i:case h:le=!0;break;case T:return le=g._init,F(le(g._payload),E,W,D,_)}}if(le)return _=_(g),le=D===""?"."+ce(g,0):D,ee(_)?(W="",le!=null&&(W=le.replace(ae,"$&/")+"/"),F(_,E,W,"",function(De){return De})):_!=null&&(Q(_)&&(_=je(_,W+(_.key==null||g&&g.key===_.key?"":(""+_.key).replace(ae,"$&/")+"/")+le)),E.push(_)),1;le=0;var qe=D===""?".":D+":";if(ee(g))for(var Ie=0;Ie<g.length;Ie++)D=g[Ie],de=qe+ce(D,Ie),le+=F(D,E,W,de,_);else if(Ie=N(g),typeof Ie=="function")for(g=Ie.call(g),Ie=0;!(D=g.next()).done;)D=D.value,de=qe+ce(D,Ie++),le+=F(D,E,W,de,_);else if(de==="object"){if(typeof g.then=="function")return F(Pe(g),E,W,D,_);throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return le}function q(g,E,W){if(g==null)return g;var D=[],_=0;return F(g,D,"","",function(de){return E.call(W,de,_++)}),D}function $(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(W){(g._status===0||g._status===-1)&&(g._status=1,g._result=W)},function(W){(g._status===0||g._status===-1)&&(g._status=2,g._result=W)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var Z=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function ie(){}return he.Children={map:q,forEach:function(g,E,W){q(g,function(){E.apply(this,arguments)},W)},count:function(g){var E=0;return q(g,function(){E++}),E},toArray:function(g){return q(g,function(E){return E})||[]},only:function(g){if(!Q(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},he.Component=J,he.Fragment=d,he.Profiler=m,he.PureComponent=X,he.StrictMode=r,he.Suspense=v,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,he.act=function(){throw Error("act(...) is not supported in production builds of React.")},he.cache=function(g){return function(){return g.apply(null,arguments)}},he.cloneElement=function(g,E,W){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var D=C({},g.props),_=g.key,de=void 0;if(E!=null)for(le in E.ref!==void 0&&(de=void 0),E.key!==void 0&&(_=""+E.key),E)!ye.call(E,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&E.ref===void 0||(D[le]=E[le]);var le=arguments.length-2;if(le===1)D.children=W;else if(1<le){for(var qe=Array(le),Ie=0;Ie<le;Ie++)qe[Ie]=arguments[Ie+2];D.children=qe}return Ae(g.type,_,void 0,void 0,de,D)},he.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},he.createElement=function(g,E,W){var D,_={},de=null;if(E!=null)for(D in E.key!==void 0&&(de=""+E.key),E)ye.call(E,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(_[D]=E[D]);var le=arguments.length-2;if(le===1)_.children=W;else if(1<le){for(var qe=Array(le),Ie=0;Ie<le;Ie++)qe[Ie]=arguments[Ie+2];_.children=qe}if(g&&g.defaultProps)for(D in le=g.defaultProps,le)_[D]===void 0&&(_[D]=le[D]);return Ae(g,de,void 0,void 0,null,_)},he.createRef=function(){return{current:null}},he.forwardRef=function(g){return{$$typeof:A,render:g}},he.isValidElement=Q,he.lazy=function(g){return{$$typeof:T,_payload:{_status:-1,_result:g},_init:$}},he.memo=function(g,E){return{$$typeof:y,type:g,compare:E===void 0?null:E}},he.startTransition=function(g){var E=P.T,W={};P.T=W;try{var D=g(),_=P.S;_!==null&&_(W,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(ie,Z)}catch(de){Z(de)}finally{P.T=E}},he.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},he.use=function(g){return P.H.use(g)},he.useActionState=function(g,E,W){return P.H.useActionState(g,E,W)},he.useCallback=function(g,E){return P.H.useCallback(g,E)},he.useContext=function(g){return P.H.useContext(g)},he.useDebugValue=function(){},he.useDeferredValue=function(g,E){return P.H.useDeferredValue(g,E)},he.useEffect=function(g,E){return P.H.useEffect(g,E)},he.useId=function(){return P.H.useId()},he.useImperativeHandle=function(g,E,W){return P.H.useImperativeHandle(g,E,W)},he.useInsertionEffect=function(g,E){return P.H.useInsertionEffect(g,E)},he.useLayoutEffect=function(g,E){return P.H.useLayoutEffect(g,E)},he.useMemo=function(g,E){return P.H.useMemo(g,E)},he.useOptimistic=function(g,E){return P.H.useOptimistic(g,E)},he.useReducer=function(g,E,W){return P.H.useReducer(g,E,W)},he.useRef=function(g){return P.H.useRef(g)},he.useState=function(g){return P.H.useState(g)},he.useSyncExternalStore=function(g,E,W){return P.H.useSyncExternalStore(g,E,W)},he.useTransition=function(){return P.H.useTransition()},he.version="19.0.0",he}var Gh;function lr(){return Gh||(Gh=1,Gs.exports=Jy()),Gs.exports}var b=lr();const Qy=rm(b);var Js={exports:{}},lo={},Qs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Wy(){return Jh||(Jh=1,function(i){function h(q,$){var Z=q.length;q.push($);e:for(;0<Z;){var ie=Z-1>>>1,g=q[ie];if(0<m(g,$))q[ie]=$,q[Z]=g,Z=ie;else break e}}function d(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var $=q[0],Z=q.pop();if(Z!==$){q[0]=Z;e:for(var ie=0,g=q.length,E=g>>>1;ie<E;){var W=2*(ie+1)-1,D=q[W],_=W+1,de=q[_];if(0>m(D,Z))_<g&&0>m(de,D)?(q[ie]=de,q[_]=Z,ie=_):(q[ie]=D,q[W]=Z,ie=W);else if(_<g&&0>m(de,Z))q[ie]=de,q[_]=Z,ie=_;else break e}}return $}function m(q,$){var Z=q.sortIndex-$.sortIndex;return Z!==0?Z:q.id-$.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var k=Date,A=k.now();i.unstable_now=function(){return k.now()-A}}var v=[],y=[],T=1,L=null,N=3,G=!1,C=!1,V=!1,J=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function H(q){for(var $=d(y);$!==null;){if($.callback===null)r(y);else if($.startTime<=q)r(y),$.sortIndex=$.expirationTime,h(v,$);else break;$=d(y)}}function ee(q){if(V=!1,H(q),!C)if(d(v)!==null)C=!0,Pe();else{var $=d(y);$!==null&&F(ee,$.startTime-q)}}var P=!1,ye=-1,Ae=5,je=-1;function Q(){return!(i.unstable_now()-je<Ae)}function B(){if(P){var q=i.unstable_now();je=q;var $=!0;try{e:{C=!1,V&&(V=!1,z(ye),ye=-1),G=!0;var Z=N;try{n:{for(H(q),L=d(v);L!==null&&!(L.expirationTime>q&&Q());){var ie=L.callback;if(typeof ie=="function"){L.callback=null,N=L.priorityLevel;var g=ie(L.expirationTime<=q);if(q=i.unstable_now(),typeof g=="function"){L.callback=g,H(q),$=!0;break n}L===d(v)&&r(v),H(q)}else r(v);L=d(v)}if(L!==null)$=!0;else{var E=d(y);E!==null&&F(ee,E.startTime-q),$=!1}}break e}finally{L=null,N=Z,G=!1}$=void 0}}finally{$?ae():P=!1}}}var ae;if(typeof X=="function")ae=function(){X(B)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ze=ce.port2;ce.port1.onmessage=B,ae=function(){ze.postMessage(null)}}else ae=function(){J(B,0)};function Pe(){P||(P=!0,ae())}function F(q,$){ye=J(function(){q(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){C||G||(C=!0,Pe())},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return d(v)},i.unstable_next=function(q){switch(N){case 1:case 2:case 3:var $=3;break;default:$=N}var Z=N;N=$;try{return q()}finally{N=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,$){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=N;N=q;try{return $()}finally{N=Z}},i.unstable_scheduleCallback=function(q,$,Z){var ie=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,q){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=Z+g,q={id:T++,callback:$,priorityLevel:q,startTime:Z,expirationTime:g,sortIndex:-1},Z>ie?(q.sortIndex=Z,h(y,q),d(v)===null&&q===d(y)&&(V?(z(ye),ye=-1):V=!0,F(ee,Z-ie))):(q.sortIndex=g,h(v,q),C||G||(C=!0,Pe())),q},i.unstable_shouldYield=Q,i.unstable_wrapCallback=function(q){var $=N;return function(){var Z=N;N=$;try{return q.apply(this,arguments)}finally{N=Z}}}}(Ws)),Ws}var Qh;function Vy(){return Qh||(Qh=1,Qs.exports=Wy()),Qs.exports}var Vs={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Xy(){if(Wh)return dn;Wh=1;var i=lr();function h(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(h(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(v,y,T){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:L==null?null:""+L,children:v,containerInfo:y,implementation:T}}var k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,dn.createPortal=function(v,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(h(299));return p(v,y,null,T)},dn.flushSync=function(v){var y=k.T,T=r.p;try{if(k.T=null,r.p=2,v)return v()}finally{k.T=y,r.p=T,r.d.f()}},dn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,r.d.C(v,y))},dn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},dn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var T=y.as,L=A(T,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?r.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:L,integrity:N,fetchPriority:G}):T==="script"&&r.d.X(v,{crossOrigin:L,integrity:N,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},dn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=A(y.as,y.crossOrigin);r.d.M(v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&r.d.M(v)},dn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,L=A(T,y.crossOrigin);r.d.L(v,T,{crossOrigin:L,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},dn.preloadModule=function(v,y){if(typeof v=="string")if(y){var T=A(y.as,y.crossOrigin);r.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else r.d.m(v)},dn.requestFormReset=function(v){r.d.r(v)},dn.unstable_batchedUpdates=function(v,y){return v(y)},dn.useFormState=function(v,y,T){return k.H.useFormState(v,y,T)},dn.useFormStatus=function(){return k.H.useHostTransitionStatus()},dn.version="19.0.0",dn}var Vh;function Zy(){if(Vh)return Vs.exports;Vh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),Vs.exports=Xy(),Vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Ky(){if(Xh)return lo;Xh=1;var i=Vy(),h=lr(),d=Zy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var p=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),G=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),ee=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case A:return"Portal";case T:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:je(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return je(e(n))}catch{}}return null}var Q=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=Object.assign,ae,ce;function ze(e){if(ae===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",ce=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+ce}var Pe=!1;function F(e,n){if(!e||Pe)return"";Pe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(M){var x=M}Reflect.construct(e,[],U)}else{try{U.call()}catch(M){x=M}e.call(U.prototype)}}else{try{throw Error()}catch(M){x=M}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(M){if(M&&x&&typeof M.stack=="string")return[M.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var f=s.split(`
`),j=c.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===j.length)for(a=f.length-1,l=j.length-1;1<=a&&0<=l&&f[a]!==j[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==j[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==j[l]){var O=`
`+f[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=l);break}}}finally{Pe=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ze(t):""}function q(e){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze("Lazy");case 13:return ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return e=F(e.type,!1),e;case 11:return e=F(e.type.render,!1),e;case 1:return e=F(e.type,!0),e;default:return""}}function $(e){try{var n="";do n+=q(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Z(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ie(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(Z(e)!==e)throw Error(r(188))}function E(e){var n=e.alternate;if(!n){if(n=Z(e),n===null)throw Error(r(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return g(l),e;if(o===a)return g(l),n;o=o.sibling}throw Error(r(188))}if(t.return!==a.return)t=l,a=o;else{for(var s=!1,c=l.child;c;){if(c===t){s=!0,t=l,a=o;break}if(c===a){s=!0,a=l,t=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===t){s=!0,t=o,a=l;break}if(c===a){s=!0,a=o,t=l;break}c=c.sibling}if(!s)throw Error(r(189))}}if(t.alternate!==a)throw Error(r(190))}if(t.tag!==3)throw Error(r(188));return t.stateNode.current===t?e:n}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=W(e),n!==null)return n;e=e.sibling}return null}var D=Array.isArray,_=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},le=[],qe=-1;function Ie(e){return{current:e}}function De(e){0>qe||(e.current=le[qe],le[qe]=null,qe--)}function xe(e,n){qe++,le[qe]=e.current,e.current=n}var Qe=Ie(null),Vn=Ie(null),Xn=Ie(null),sn=Ie(null);function Zn(e,n){switch(xe(Xn,n),xe(Vn,e),xe(Qe,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?yh(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=yh(e),n=ph(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}De(Qe),xe(Qe,n)}function At(){De(Qe),De(Vn),De(Xn)}function lt(e){e.memoizedState!==null&&xe(sn,e);var n=Qe.current,t=ph(n,e.type);n!==t&&(xe(Vn,e),xe(Qe,t))}function qt(e){Vn.current===e&&(De(Qe),De(Vn)),sn.current===e&&(De(sn),Fl._currentValue=de)}var Tt=Object.prototype.hasOwnProperty,Kn=i.unstable_scheduleCallback,il=i.unstable_cancelCallback,Oi=i.unstable_shouldYield,Ni=i.unstable_requestPaint,An=i.unstable_now,ot=i.unstable_getCurrentPriorityLevel,ul=i.unstable_ImmediatePriority,sl=i.unstable_UserBlockingPriority,$t=i.unstable_NormalPriority,zi=i.unstable_LowPriority,po=i.unstable_IdlePriority,Di=i.log,Ri=i.unstable_setDisableYieldValue,Ft=null,hn=null;function Bi(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ft,e,void 0,(e.current.flags&128)===128)}catch{}}function Y(e){if(typeof Di=="function"&&Ri(e),hn&&typeof hn.setStrictMode=="function")try{hn.setStrictMode(Ft,e)}catch{}}var K=Math.clz32?Math.clz32:Te,se=Math.log,be=Math.LN2;function Te(e){return e>>>=0,e===0?32:31-(se(e)/be|0)|0}var Ye=128,We=4194304;function yn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,s=e.warmLanes;e=e.finishedLanes!==0;var c=t&134217727;return c!==0?(t=c&~l,t!==0?a=yn(t):(o&=c,o!==0?a=yn(o):e||(s=c&~s,s!==0&&(a=yn(s))))):(c=t&~l,c!==0?a=yn(c):o!==0?a=yn(o):e||(s=t&~s,s!==0&&(a=yn(s)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,s=n&-n,l>=s||l===32&&(s&4194176)!==0)?n:a}function gn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qn(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(){var e=Ye;return Ye<<=1,(Ye&4194176)===0&&(Ye=128),e}function Tn(){var e=We;return We<<=1,(We&62914560)===0&&(We=4194304),e}function Be(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Re(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,t,a,l,o){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,j=e.hiddenUpdates;for(t=s&~t;0<t;){var O=31-K(t),U=1<<O;c[O]=0,f[O]=-1;var x=j[O];if(x!==null)for(j[O]=null,O=0;O<x.length;O++){var M=x[O];M!==null&&(M.lane&=-536870913)}t&=~U}a!==0&&Pt(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~n))}function Pt(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-K(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194218}function rl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-K(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hr(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:zh(e.type))}function Cm(e,n){var t=_.p;try{return _.p=e,n()}finally{_.p=t}}var Et=Math.random().toString(36).slice(2),rn="__reactFiber$"+Et,vn="__reactProps$"+Et,Sa="__reactContainer$"+Et,Li="__reactEvents$"+Et,Om="__reactListeners$"+Et,Nm="__reactHandles$"+Et,mr="__reactResources$"+Et,cl="__reactMarker$"+Et;function Ui(e){delete e[rn],delete e[vn],delete e[Li],delete e[Om],delete e[Nm]}function ea(e){var n=e[rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Sa]||t[rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bh(e);e!==null;){if(t=e[rn])return t;e=bh(e)}return n}e=t,t=e.parentNode}return null}function xa(e){if(e=e[rn]||e[Sa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function dl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Aa(e){var n=e[mr];return n||(n=e[mr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[cl]=!0}var fr=new Set,yr={};function na(e,n){qa(e,n),qa(e+"Capture",n)}function qa(e,n){for(yr[e]=n,e=0;e<n.length;e++)fr.add(n[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pr={},gr={};function Dm(e){return Tt.call(gr,e)?!0:Tt.call(pr,e)?!1:zm.test(e)?gr[e]=!0:(pr[e]=!0,!1)}function go(e,n,t){if(Dm(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function vo(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ut(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function En(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rm(e){var n=vr(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bo(e){e._valueTracker||(e._valueTracker=Rm(e))}function br(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=vr(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bm=/[\n"\\]/g;function Mn(e){return e.replace(Bm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _i(e,n,t,a,l,o,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+En(n)):e.value!==""+En(n)&&(e.value=""+En(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?Yi(e,s,En(n)):t!=null?Yi(e,s,En(t)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+En(c):e.removeAttribute("name")}function wr(e,n,t,a,l,o,s,c){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null))return;t=t!=null?""+En(t):"",n=n!=null?""+En(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Yi(e,n,t){n==="number"&&wo(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Ta(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function jr(e,n,t){if(n!=null&&(n=""+En(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+En(t):""}function Ir(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(r(92));if(D(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=En(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ea(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kr(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Lm.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Sr(e,n,t){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&kr(e,l,a)}else for(var o in n)n.hasOwnProperty(o)&&kr(e,o,n[o])}function Hi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return _m.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gi=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Ca=null;function xr(e){var n=xa(e);if(n&&(e=n.stateNode)){var t=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(_i(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Mn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[vn]||null;if(!l)throw Error(r(90));_i(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&br(a)}break e;case"textarea":jr(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Ta(e,!!t.multiple,n,!1)}}}var Qi=!1;function Ar(e,n,t){if(Qi)return e(n,t);Qi=!0;try{var a=e(n);return a}finally{if(Qi=!1,(Ma!==null||Ca!==null)&&(li(),Ma&&(n=Ma,e=Ca,Ca=Ma=null,xr(n),e)))for(n=0;n<e.length;n++)xr(e[n])}}function hl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[vn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(r(231,n,typeof t));return t}var Wi=!1;if(it)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{Wi=!1}var Mt=null,Vi=null,Io=null;function qr(){if(Io)return Io;var e,n=Vi,t=n.length,a,l="value"in Mt?Mt.value:Mt.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===l[o-a];a++);return Io=l.slice(e,1<a?1-a:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Tr(){return!1}function bn(e){function n(t,a,l,o,s){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?So:Tr,this.isPropagationStopped=Tr,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),n}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=bn(ta),fl=B({},ta,{view:0,detail:0}),Ym=bn(fl),Xi,Zi,yl,Ao=B({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(Xi=e.screenX-yl.screenX,Zi=e.screenY-yl.screenY):Zi=Xi=0,yl=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Er=bn(Ao),Hm=B({},Ao,{dataTransfer:0}),Gm=bn(Hm),Jm=B({},fl,{relatedTarget:0}),Ki=bn(Jm),Qm=B({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=bn(Qm),Vm=B({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=bn(Vm),Zm=B({},ta,{data:0}),Mr=bn(Zm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fm[e])?!!n[e]:!1}function $i(){return Pm}var ef=B({},fl,{key:function(e){if(e.key){var n=Km[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=bn(ef),tf=B({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cr=bn(tf),af=B({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),lf=bn(af),of=B({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=bn(of),sf=B({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=bn(sf),cf=B({},ta,{newState:0,oldState:0}),df=bn(cf),hf=[9,13,27,32],Fi=it&&"CompositionEvent"in window,pl=null;it&&"documentMode"in document&&(pl=document.documentMode);var mf=it&&"TextEvent"in window&&!pl,Or=it&&(!Fi||pl&&8<pl&&11>=pl),Nr=" ",zr=!1;function Dr(e,n){switch(e){case"keyup":return hf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function ff(e,n){switch(e){case"compositionend":return Rr(n);case"keypress":return n.which!==32?null:(zr=!0,Nr);case"textInput":return e=n.data,e===Nr&&zr?null:e;default:return null}}function yf(e,n){if(Oa)return e==="compositionend"||!Fi&&Dr(e,n)?(e=qr(),Io=Vi=Mt=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Or&&n.locale!=="ko"?null:n.data;default:return null}}var pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pf[e.type]:n==="textarea"}function Lr(e,n,t,a){Ma?Ca?Ca.push(a):Ca=[a]:Ma=a,n=ri(n,"onChange"),0<n.length&&(t=new xo("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var gl=null,vl=null;function gf(e){ch(e,0)}function qo(e){var n=dl(e);if(br(n))return e}function Ur(e,n){if(e==="change")return n}var _r=!1;if(it){var Pi;if(it){var eu="oninput"in document;if(!eu){var Yr=document.createElement("div");Yr.setAttribute("oninput","return;"),eu=typeof Yr.oninput=="function"}Pi=eu}else Pi=!1;_r=Pi&&(!document.documentMode||9<document.documentMode)}function Hr(){gl&&(gl.detachEvent("onpropertychange",Gr),vl=gl=null)}function Gr(e){if(e.propertyName==="value"&&qo(vl)){var n=[];Lr(n,vl,e,Ji(e)),Ar(gf,n)}}function vf(e,n,t){e==="focusin"?(Hr(),gl=n,vl=t,gl.attachEvent("onpropertychange",Gr)):e==="focusout"&&Hr()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(vl)}function wf(e,n){if(e==="click")return qo(n)}function jf(e,n){if(e==="input"||e==="change")return qo(n)}function If(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:If;function bl(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Tt.call(n,l)||!jn(e[l],n[l]))return!1}return!0}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,n){var t=Jr(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jr(t)}}function Wr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wo(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=wo(e.document)}return n}function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function kf(e,n){var t=Vr(n);n=e.focusedElem;var a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wr(n.ownerDocument.documentElement,n)){if(a!==null&&nu(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!t.extend&&o>a&&(l=a,a=o,o=l),l=Qr(n,o);var s=Qr(n,a);l&&s&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),o>a?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sf=it&&"documentMode"in document&&11>=document.documentMode,Na=null,tu=null,wl=null,au=!1;function Xr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;au||Na==null||Na!==wo(a)||(a=Na,"selectionStart"in a&&nu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wl&&bl(wl,a)||(wl=a,a=ri(tu,"onSelect"),0<a.length&&(n=new xo("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Na)))}function aa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var za={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},lu={},Zr={};it&&(Zr=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function la(e){if(lu[e])return lu[e];if(!za[e])return e;var n=za[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zr)return lu[e]=n[t];return e}var Kr=la("animationend"),$r=la("animationiteration"),Fr=la("animationstart"),xf=la("transitionrun"),Af=la("transitionstart"),qf=la("transitioncancel"),Pr=la("transitionend"),ec=new Map,nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Hn(e,n){ec.set(e,n),na(n,[e])}var Cn=[],Da=0,ou=0;function To(){for(var e=Da,n=ou=Da=0;n<e;){var t=Cn[n];Cn[n++]=null;var a=Cn[n];Cn[n++]=null;var l=Cn[n];Cn[n++]=null;var o=Cn[n];if(Cn[n++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}o!==0&&tc(t,l,o)}}function Eo(e,n,t,a){Cn[Da++]=e,Cn[Da++]=n,Cn[Da++]=t,Cn[Da++]=a,ou|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function iu(e,n,t,a){return Eo(e,n,t,a),Mo(e)}function Ct(e,n){return Eo(e,null,null,n),Mo(e)}function tc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;l&&n!==null&&e.tag===3&&(o=e.stateNode,l=31-K(t),o=o.hiddenUpdates,e=o[l],e===null?o[l]=[n]:e.push(n),n.lane=t|536870912)}function Mo(e){if(50<Ql)throw Ql=0,hs=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ra={},ac=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=ac.get(e);return t!==void 0?t:(n={value:e,source:n,stack:$(n)},ac.set(e,n),n)}return{value:e,source:n,stack:$(n)}}var Ba=[],La=0,Co=null,Oo=0,Nn=[],zn=0,oa=null,st=1,rt="";function ia(e,n){Ba[La++]=Oo,Ba[La++]=Co,Co=e,Oo=n}function lc(e,n,t){Nn[zn++]=st,Nn[zn++]=rt,Nn[zn++]=oa,oa=e;var a=st;e=rt;var l=32-K(a)-1;a&=~(1<<l),t+=1;var o=32-K(n)+l;if(30<o){var s=l-l%5;o=(a&(1<<s)-1).toString(32),a>>=s,l-=s,st=1<<32-K(n)+l|t<<l|a,rt=o+e}else st=1<<o|t<<l|a,rt=e}function uu(e){e.return!==null&&(ia(e,1),lc(e,1,0))}function su(e){for(;e===Co;)Co=Ba[--La],Ba[La]=null,Oo=Ba[--La],Ba[La]=null;for(;e===oa;)oa=Nn[--zn],Nn[zn]=null,rt=Nn[--zn],Nn[zn]=null,st=Nn[--zn],Nn[zn]=null}var mn=null,ln=null,ke=!1,Gn=null,Fn=!1,ru=Error(r(519));function ua(e){var n=Error(r(418,""));throw kl(On(n,e)),ru}function oc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[rn]=e,n[vn]=a,t){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(t=0;t<Vl.length;t++)ve(Vl[t],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),wr(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),bo(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Ir(n,a.value,a.defaultValue,a.children),bo(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||fh(n.textContent,t)?(a.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),a.onScroll!=null&&ve("scroll",n),a.onScrollEnd!=null&&ve("scrollend",n),a.onClick!=null&&(n.onclick=ci),n=!0):n=!1,n||ua(e)}function ic(e){for(mn=e.return;mn;)switch(mn.tag){case 3:case 27:Fn=!0;return;case 5:case 13:Fn=!1;return;default:mn=mn.return}}function jl(e){if(e!==mn)return!1;if(!ke)return ic(e),ke=!0,!1;var n=!1,t;if((t=e.tag!==3&&e.tag!==27)&&((t=e.tag===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Es(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&ln&&ua(e),ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){ln=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}ln=null}}else ln=mn?Qn(e.stateNode.nextSibling):null;return!0}function Il(){ln=mn=null,ke=!1}function kl(e){Gn===null?Gn=[e]:Gn.push(e)}var Sl=Error(r(460)),uc=Error(r(474)),cu={then:function(){}};function sc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function No(){}function rc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(No,No),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(r(483)):e;default:if(typeof n.status=="string")n.then(No,No);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(r(483)):e}throw xl=n,Sl}}var xl=null;function cc(){if(xl===null)throw Error(r(459));var e=xl;return xl=null,e}var Ua=null,Al=0;function zo(e){var n=Al;return Al+=1,Ua===null&&(Ua=[]),rc(Ua,e,n)}function ql(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Do(e,n){throw n.$$typeof===p?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dc(e){var n=e._init;return n(e._payload)}function hc(e){function n(I,w){if(e){var S=I.deletions;S===null?(I.deletions=[w],I.flags|=16):S.push(w)}}function t(I,w){if(!e)return null;for(;w!==null;)n(I,w),w=w.sibling;return null}function a(I){for(var w=new Map;I!==null;)I.key!==null?w.set(I.key,I):w.set(I.index,I),I=I.sibling;return w}function l(I,w){return I=Gt(I,w),I.index=0,I.sibling=null,I}function o(I,w,S){return I.index=S,e?(S=I.alternate,S!==null?(S=S.index,S<w?(I.flags|=33554434,w):S):(I.flags|=33554434,w)):(I.flags|=1048576,w)}function s(I){return e&&I.alternate===null&&(I.flags|=33554434),I}function c(I,w,S,R){return w===null||w.tag!==6?(w=ls(S,I.mode,R),w.return=I,w):(w=l(w,S),w.return=I,w)}function f(I,w,S,R){var ne=S.type;return ne===v?O(I,w,S.props.children,R,S.key):w!==null&&(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===X&&dc(ne)===w.type)?(w=l(w,S.props),ql(w,S),w.return=I,w):(w=Po(S.type,S.key,S.props,null,I.mode,R),ql(w,S),w.return=I,w)}function j(I,w,S,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=os(S,I.mode,R),w.return=I,w):(w=l(w,S.children||[]),w.return=I,w)}function O(I,w,S,R,ne){return w===null||w.tag!==7?(w=ga(S,I.mode,R,ne),w.return=I,w):(w=l(w,S),w.return=I,w)}function U(I,w,S){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=ls(""+w,I.mode,S),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case k:return S=Po(w.type,w.key,w.props,null,I.mode,S),ql(S,w),S.return=I,S;case A:return w=os(w,I.mode,S),w.return=I,w;case X:var R=w._init;return w=R(w._payload),U(I,w,S)}if(D(w)||ye(w))return w=ga(w,I.mode,S,null),w.return=I,w;if(typeof w.then=="function")return U(I,zo(w),S);if(w.$$typeof===G)return U(I,Ko(I,w),S);Do(I,w)}return null}function x(I,w,S,R){var ne=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return ne!==null?null:c(I,w,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case k:return S.key===ne?f(I,w,S,R):null;case A:return S.key===ne?j(I,w,S,R):null;case X:return ne=S._init,S=ne(S._payload),x(I,w,S,R)}if(D(S)||ye(S))return ne!==null?null:O(I,w,S,R,null);if(typeof S.then=="function")return x(I,w,zo(S),R);if(S.$$typeof===G)return x(I,w,Ko(I,S),R);Do(I,S)}return null}function M(I,w,S,R,ne){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return I=I.get(S)||null,c(w,I,""+R,ne);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case k:return I=I.get(R.key===null?S:R.key)||null,f(w,I,R,ne);case A:return I=I.get(R.key===null?S:R.key)||null,j(w,I,R,ne);case X:var pe=R._init;return R=pe(R._payload),M(I,w,S,R,ne)}if(D(R)||ye(R))return I=I.get(S)||null,O(w,I,R,ne,null);if(typeof R.then=="function")return M(I,w,S,zo(R),ne);if(R.$$typeof===G)return M(I,w,S,Ko(w,R),ne);Do(w,R)}return null}function te(I,w,S,R){for(var ne=null,pe=null,oe=w,ue=w=0,an=null;oe!==null&&ue<S.length;ue++){oe.index>ue?(an=oe,oe=null):an=oe.sibling;var Se=x(I,oe,S[ue],R);if(Se===null){oe===null&&(oe=an);break}e&&oe&&Se.alternate===null&&n(I,oe),w=o(Se,w,ue),pe===null?ne=Se:pe.sibling=Se,pe=Se,oe=an}if(ue===S.length)return t(I,oe),ke&&ia(I,ue),ne;if(oe===null){for(;ue<S.length;ue++)oe=U(I,S[ue],R),oe!==null&&(w=o(oe,w,ue),pe===null?ne=oe:pe.sibling=oe,pe=oe);return ke&&ia(I,ue),ne}for(oe=a(oe);ue<S.length;ue++)an=M(oe,I,ue,S[ue],R),an!==null&&(e&&an.alternate!==null&&oe.delete(an.key===null?ue:an.key),w=o(an,w,ue),pe===null?ne=an:pe.sibling=an,pe=an);return e&&oe.forEach(function(Kt){return n(I,Kt)}),ke&&ia(I,ue),ne}function re(I,w,S,R){if(S==null)throw Error(r(151));for(var ne=null,pe=null,oe=w,ue=w=0,an=null,Se=S.next();oe!==null&&!Se.done;ue++,Se=S.next()){oe.index>ue?(an=oe,oe=null):an=oe.sibling;var Kt=x(I,oe,Se.value,R);if(Kt===null){oe===null&&(oe=an);break}e&&oe&&Kt.alternate===null&&n(I,oe),w=o(Kt,w,ue),pe===null?ne=Kt:pe.sibling=Kt,pe=Kt,oe=an}if(Se.done)return t(I,oe),ke&&ia(I,ue),ne;if(oe===null){for(;!Se.done;ue++,Se=S.next())Se=U(I,Se.value,R),Se!==null&&(w=o(Se,w,ue),pe===null?ne=Se:pe.sibling=Se,pe=Se);return ke&&ia(I,ue),ne}for(oe=a(oe);!Se.done;ue++,Se=S.next())Se=M(oe,I,ue,Se.value,R),Se!==null&&(e&&Se.alternate!==null&&oe.delete(Se.key===null?ue:Se.key),w=o(Se,w,ue),pe===null?ne=Se:pe.sibling=Se,pe=Se);return e&&oe.forEach(function(Yy){return n(I,Yy)}),ke&&ia(I,ue),ne}function Je(I,w,S,R){if(typeof S=="object"&&S!==null&&S.type===v&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case k:e:{for(var ne=S.key;w!==null;){if(w.key===ne){if(ne=S.type,ne===v){if(w.tag===7){t(I,w.sibling),R=l(w,S.props.children),R.return=I,I=R;break e}}else if(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===X&&dc(ne)===w.type){t(I,w.sibling),R=l(w,S.props),ql(R,S),R.return=I,I=R;break e}t(I,w);break}else n(I,w);w=w.sibling}S.type===v?(R=ga(S.props.children,I.mode,R,S.key),R.return=I,I=R):(R=Po(S.type,S.key,S.props,null,I.mode,R),ql(R,S),R.return=I,I=R)}return s(I);case A:e:{for(ne=S.key;w!==null;){if(w.key===ne)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){t(I,w.sibling),R=l(w,S.children||[]),R.return=I,I=R;break e}else{t(I,w);break}else n(I,w);w=w.sibling}R=os(S,I.mode,R),R.return=I,I=R}return s(I);case X:return ne=S._init,S=ne(S._payload),Je(I,w,S,R)}if(D(S))return te(I,w,S,R);if(ye(S)){if(ne=ye(S),typeof ne!="function")throw Error(r(150));return S=ne.call(S),re(I,w,S,R)}if(typeof S.then=="function")return Je(I,w,zo(S),R);if(S.$$typeof===G)return Je(I,w,Ko(I,S),R);Do(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,w!==null&&w.tag===6?(t(I,w.sibling),R=l(w,S),R.return=I,I=R):(t(I,w),R=ls(S,I.mode,R),R.return=I,I=R),s(I)):t(I,w)}return function(I,w,S,R){try{Al=0;var ne=Je(I,w,S,R);return Ua=null,ne}catch(oe){if(oe===Sl)throw oe;var pe=Ln(29,oe,null,I.mode);return pe.lanes=R,pe.return=I,pe}finally{}}}var sa=hc(!0),mc=hc(!1),_a=Ie(null),Ro=Ie(0);function fc(e,n){e=wt,xe(Ro,e),xe(_a,n),wt=e|n.baseLanes}function du(){xe(Ro,wt),xe(_a,_a.current)}function hu(){wt=Ro.current,De(_a),De(Ro)}var Dn=Ie(null),Pn=null;function Ot(e){var n=e.alternate;xe($e,$e.current&1),xe(Dn,e),Pn===null&&(n===null||_a.current!==null||n.memoizedState!==null)&&(Pn=e)}function yc(e){if(e.tag===22){if(xe($e,$e.current),xe(Dn,e),Pn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Pn=e)}}else Nt()}function Nt(){xe($e,$e.current),xe(Dn,Dn.current)}function ct(e){De(Dn),Pn===e&&(Pn=null),De($e)}var $e=Ie(0);function Bo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Tf=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ef=i.unstable_scheduleCallback,Mf=i.unstable_NormalPriority,Fe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new Tf,data:new Map,refCount:0}}function Tl(e){e.refCount--,e.refCount===0&&Ef(Mf,function(){e.controller.abort()})}var El=null,fu=0,Ya=0,Ha=null;function Cf(e,n){if(El===null){var t=El=[];fu=0,Ya=ws(),Ha={status:"pending",value:void 0,then:function(a){t.push(a)}}}return fu++,n.then(pc,pc),n}function pc(){if(--fu===0&&El!==null){Ha!==null&&(Ha.status="fulfilled");var e=El;El=null,Ya=0,Ha=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Of(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var gc=Q.S;Q.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cf(e,n),gc!==null&&gc(e,n)};var ra=Ie(null);function yu(){var e=ra.current;return e!==null?e:Oe.pooledCache}function Lo(e,n){n===null?xe(ra,ra.current):xe(ra,n.pool)}function vc(){var e=yu();return e===null?null:{parent:Fe._currentValue,pool:e}}var zt=0,fe=null,Ee=null,Xe=null,Uo=!1,Ga=!1,ca=!1,_o=0,Ml=0,Ja=null,Nf=0;function Ve(){throw Error(r(321))}function pu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jn(e[t],n[t]))return!1;return!0}function gu(e,n,t,a,l,o){return zt=o,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Q.H=e===null||e.memoizedState===null?da:Dt,ca=!1,o=t(a,l),ca=!1,Ga&&(o=wc(n,t,a,l)),bc(e),o}function bc(e){Q.H=et;var n=Ee!==null&&Ee.next!==null;if(zt=0,Xe=Ee=fe=null,Uo=!1,Ml=0,Ja=null,n)throw Error(r(300));e===null||nn||(e=e.dependencies,e!==null&&Zo(e)&&(nn=!0))}function wc(e,n,t,a){fe=e;var l=0;do{if(Ga&&(Ja=null),Ml=0,Ga=!1,25<=l)throw Error(r(301));if(l+=1,Xe=Ee=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Q.H=ha,o=n(t,a)}while(Ga);return o}function zf(){var e=Q.H,n=e.useState()[0];return n=typeof n.then=="function"?Cl(n):n,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(fe.flags|=1024),n}function vu(){var e=_o!==0;return _o=0,e}function bu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function wu(e){if(Uo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Uo=!1}zt=0,Xe=Ee=fe=null,Ga=!1,Ml=_o=0,Ja=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ze(){if(Ee===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=Xe===null?fe.memoizedState:Xe.next;if(n!==null)Xe=n,Ee=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Xe===null?fe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}var Yo;Yo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Cl(e){var n=Ml;return Ml+=1,Ja===null&&(Ja=[]),e=rc(Ja,e,n),n=fe,(Xe===null?n.memoizedState:Xe.next)===null&&(n=n.alternate,Q.H=n===null||n.memoizedState===null?da:Dt),e}function Ho(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===G)return cn(e)}throw Error(r(438,String(e)))}function ju(e){var n=null,t=fe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Yo(),fe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ee;return n.index++,t}function dt(e,n){return typeof n=="function"?n(e):n}function Go(e){var n=Ze();return Iu(n,Ee,e)}function Iu(e,n,t){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}n.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var c=s=null,f=null,j=n,O=!1;do{var U=j.lane&-536870913;if(U!==j.lane?(we&U)===U:(zt&U)===U){var x=j.revertLane;if(x===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),U===Ya&&(O=!0);else if((zt&x)===x){j=j.next,x===Ya&&(O=!0);continue}else U={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(c=f=U,s=o):f=f.next=U,fe.lanes|=x,Jt|=x;U=j.action,ca&&t(o,U),o=j.hasEagerState?j.eagerState:t(o,U)}else x={lane:U,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(c=f=x,s=o):f=f.next=x,fe.lanes|=U,Jt|=U;j=j.next}while(j!==null&&j!==n);if(f===null?s=o:f.next=c,!jn(o,e.memoizedState)&&(nn=!0,O&&(t=Ha,t!==null)))throw t;e.memoizedState=o,e.baseState=s,e.baseQueue=f,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ku(e){var n=Ze(),t=n.queue;if(t===null)throw Error(r(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);jn(o,n.memoizedState)||(nn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function jc(e,n,t){var a=fe,l=Ze(),o=ke;if(o){if(t===void 0)throw Error(r(407));t=t()}else t=n();var s=!jn((Ee||l).memoizedState,t);if(s&&(l.memoizedState=t,nn=!0),l=l.queue,Au(Sc.bind(null,a,l,e),[e]),l.getSnapshot!==n||s||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,Qa(9,kc.bind(null,a,l,t,n),{destroy:void 0},null),Oe===null)throw Error(r(349));o||(zt&60)!==0||Ic(a,n,t)}return t}function Ic(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n=Yo(),fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function kc(e,n,t,a){n.value=t,n.getSnapshot=a,xc(n)&&Ac(e)}function Sc(e,n,t){return t(function(){xc(n)&&Ac(e)})}function xc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jn(e,t)}catch{return!0}}function Ac(e){var n=Ct(e,2);n!==null&&fn(n,e,2)}function Su(e){var n=wn();if(typeof e=="function"){var t=e;if(e=t(),ca){Y(!0);try{t()}finally{Y(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:e},n}function qc(e,n,t,a){return e.baseState=t,Iu(e,Ee,typeof a=="function"?a:dt)}function Df(e,n,t,a,l){if(Wo(e))throw Error(r(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};Q.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,Tc(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Tc(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var o=Q.T,s={};Q.T=s;try{var c=t(l,a),f=Q.S;f!==null&&f(s,c),Ec(e,n,c)}catch(j){xu(e,n,j)}finally{Q.T=o}}else try{o=t(l,a),Ec(e,n,o)}catch(j){xu(e,n,j)}}function Ec(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Mc(e,n,a)},function(a){return xu(e,n,a)}):Mc(e,n,t)}function Mc(e,n,t){n.status="fulfilled",n.value=t,Cc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Tc(e,t)))}function xu(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Cc(n),n=n.next;while(n!==a)}e.action=null}function Cc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Oc(e,n){return n}function Nc(e,n){if(ke){var t=Oe.formState;if(t!==null){e:{var a=fe;if(ke){if(ln){n:{for(var l=ln,o=Fn;l.nodeType!==8;){if(!o){l=null;break n}if(l=Qn(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){ln=Qn(l.nextSibling),a=l.data==="F!";break e}}ua(a)}a=!1}a&&(n=t[0])}}return t=wn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oc,lastRenderedState:n},t.queue=a,t=$c.bind(null,fe,a),a.dispatch=t,a=Su(!1),o=Cu.bind(null,fe,!1,a.queue),a=wn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Df.bind(null,fe,l,o,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function zc(e){var n=Ze();return Dc(n,Ee,e)}function Dc(e,n,t){n=Iu(e,n,Oc)[0],e=Go(dt)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Cl(n):n;var a=Ze(),l=a.queue,o=l.dispatch;return t!==a.memoizedState&&(fe.flags|=2048,Qa(9,Rf.bind(null,l,t),{destroy:void 0},null)),[n,o,e]}function Rf(e,n){e.action=n}function Rc(e){var n=Ze(),t=Ee;if(t!==null)return Dc(n,t,e);Ze(),n=n.memoizedState,t=Ze();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Qa(e,n,t,a){return e={tag:e,create:n,inst:t,deps:a,next:null},n=fe.updateQueue,n===null&&(n=Yo(),fe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Bc(){return Ze().memoizedState}function Jo(e,n,t,a){var l=wn();fe.flags|=e,l.memoizedState=Qa(1|n,t,{destroy:void 0},a===void 0?null:a)}function Qo(e,n,t,a){var l=Ze();a=a===void 0?null:a;var o=l.memoizedState.inst;Ee!==null&&a!==null&&pu(a,Ee.memoizedState.deps)?l.memoizedState=Qa(n,t,o,a):(fe.flags|=e,l.memoizedState=Qa(1|n,t,o,a))}function Lc(e,n){Jo(8390656,8,e,n)}function Au(e,n){Qo(2048,8,e,n)}function Uc(e,n){return Qo(4,2,e,n)}function _c(e,n){return Qo(4,4,e,n)}function Yc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hc(e,n,t){t=t!=null?t.concat([e]):null,Qo(4,4,Yc.bind(null,n,e),t)}function qu(){}function Gc(e,n){var t=Ze();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&pu(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Jc(e,n){var t=Ze();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&pu(n,a[1]))return a[0];if(a=e(),ca){Y(!0);try{e()}finally{Y(!1)}}return t.memoizedState=[a,n],a}function Tu(e,n,t){return t===void 0||(zt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Wd(),fe.lanes|=e,Jt|=e,t)}function Qc(e,n,t,a){return jn(t,n)?t:_a.current!==null?(e=Tu(e,t,a),jn(e,n)||(nn=!0),e):(zt&42)===0?(nn=!0,e.memoizedState=t):(e=Wd(),fe.lanes|=e,Jt|=e,n)}function Wc(e,n,t,a,l){var o=_.p;_.p=o!==0&&8>o?o:8;var s=Q.T,c={};Q.T=c,Cu(e,!1,n,t);try{var f=l(),j=Q.S;if(j!==null&&j(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var O=Of(f,a);Ol(e,n,O,xn(e))}else Ol(e,n,a,xn(e))}catch(U){Ol(e,n,{then:function(){},status:"rejected",reason:U},xn())}finally{_.p=o,Q.T=s}}function Bf(){}function Eu(e,n,t,a){if(e.tag!==5)throw Error(r(476));var l=Vc(e).queue;Wc(e,l,n,de,t===null?Bf:function(){return Xc(e),t(a)})}function Vc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:de},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xc(e){var n=Vc(e).next.queue;Ol(e,n,{},xn())}function Mu(){return cn(Fl)}function Zc(){return Ze().memoizedState}function Kc(){return Ze().memoizedState}function Lf(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=xn();e=Lt(t);var a=Ut(n,e,t);a!==null&&(fn(a,n,t),Dl(a,n,t)),n={cache:mu()},e.payload=n;return}n=n.return}}function Uf(e,n,t){var a=xn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Wo(e)?Fc(n,t):(t=iu(e,n,t,a),t!==null&&(fn(t,e,a),Pc(t,n,a)))}function $c(e,n,t){var a=xn();Ol(e,n,t,a)}function Ol(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wo(e))Fc(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,c=o(s,t);if(l.hasEagerState=!0,l.eagerState=c,jn(c,s))return Eo(e,n,l,0),Oe===null&&To(),!1}catch{}finally{}if(t=iu(e,n,l,a),t!==null)return fn(t,e,a),Pc(t,n,a),!0}return!1}function Cu(e,n,t,a){if(a={lane:2,revertLane:ws(),action:a,hasEagerState:!1,eagerState:null,next:null},Wo(e)){if(n)throw Error(r(479))}else n=iu(e,t,a,2),n!==null&&fn(n,e,2)}function Wo(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Fc(e,n){Ga=Uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pc(e,n,t){if((t&4194176)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,rl(e,t)}}var et={readContext:cn,use:Ho,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve};et.useCacheRefresh=Ve,et.useMemoCache=Ve,et.useHostTransitionStatus=Ve,et.useFormState=Ve,et.useActionState=Ve,et.useOptimistic=Ve;var da={readContext:cn,use:Ho,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Lc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Jo(4194308,4,Yc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Jo(4194308,4,e,n)},useInsertionEffect:function(e,n){Jo(4,2,e,n)},useMemo:function(e,n){var t=wn();n=n===void 0?null:n;var a=e();if(ca){Y(!0);try{e()}finally{Y(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=wn();if(t!==void 0){var l=t(n);if(ca){Y(!0);try{t(n)}finally{Y(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Uf.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Su(e);var n=e.queue,t=$c.bind(null,fe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:qu,useDeferredValue:function(e,n){var t=wn();return Tu(t,e,n)},useTransition:function(){var e=Su(!1);return e=Wc.bind(null,fe,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=fe,l=wn();if(ke){if(t===void 0)throw Error(r(407));t=t()}else{if(t=n(),Oe===null)throw Error(r(349));(we&60)!==0||Ic(a,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Lc(Sc.bind(null,a,o,e),[e]),a.flags|=2048,Qa(9,kc.bind(null,a,o,t,n),{destroy:void 0},null),t},useId:function(){var e=wn(),n=Oe.identifierPrefix;if(ke){var t=rt,a=st;t=(a&~(1<<32-K(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=_o++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Nf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return wn().memoizedState=Lf.bind(null,fe)}};da.useMemoCache=ju,da.useHostTransitionStatus=Mu,da.useFormState=Nc,da.useActionState=Nc,da.useOptimistic=function(e){var n=wn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Cu.bind(null,fe,!0,t),t.dispatch=n,[e,n]};var Dt={readContext:cn,use:Ho,useCallback:Gc,useContext:cn,useEffect:Au,useImperativeHandle:Hc,useInsertionEffect:Uc,useLayoutEffect:_c,useMemo:Jc,useReducer:Go,useRef:Bc,useState:function(){return Go(dt)},useDebugValue:qu,useDeferredValue:function(e,n){var t=Ze();return Qc(t,Ee.memoizedState,e,n)},useTransition:function(){var e=Go(dt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Cl(e),n]},useSyncExternalStore:jc,useId:Zc};Dt.useCacheRefresh=Kc,Dt.useMemoCache=ju,Dt.useHostTransitionStatus=Mu,Dt.useFormState=zc,Dt.useActionState=zc,Dt.useOptimistic=function(e,n){var t=Ze();return qc(t,Ee,e,n)};var ha={readContext:cn,use:Ho,useCallback:Gc,useContext:cn,useEffect:Au,useImperativeHandle:Hc,useInsertionEffect:Uc,useLayoutEffect:_c,useMemo:Jc,useReducer:ku,useRef:Bc,useState:function(){return ku(dt)},useDebugValue:qu,useDeferredValue:function(e,n){var t=Ze();return Ee===null?Tu(t,e,n):Qc(t,Ee.memoizedState,e,n)},useTransition:function(){var e=ku(dt)[0],n=Ze().memoizedState;return[typeof e=="boolean"?e:Cl(e),n]},useSyncExternalStore:jc,useId:Zc};ha.useCacheRefresh=Kc,ha.useMemoCache=ju,ha.useHostTransitionStatus=Mu,ha.useFormState=Rc,ha.useActionState=Rc,ha.useOptimistic=function(e,n){var t=Ze();return Ee!==null?qc(t,Ee,e,n):(t.baseState=e,[e,t.queue.dispatch])};function Ou(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Nu={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=xn(),l=Lt(a);l.payload=n,t!=null&&(l.callback=t),n=Ut(e,l,a),n!==null&&(fn(n,e,a),Dl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=xn(),l=Lt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Ut(e,l,a),n!==null&&(fn(n,e,a),Dl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xn(),a=Lt(t);a.tag=2,n!=null&&(a.callback=n),n=Ut(e,a,t),n!==null&&(fn(n,e,t),Dl(n,e,t))}};function ed(e,n,t,a,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):n.prototype&&n.prototype.isPureReactComponent?!bl(t,a)||!bl(l,o):!0}function nd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Nu.enqueueReplaceState(n,n.state,null)}function ma(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=B({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Vo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function td(e){Vo(e)}function ad(e){console.error(e)}function ld(e){Vo(e)}function Xo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function od(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zu(e,n,t){return t=Lt(t),t.tag=3,t.payload={element:null},t.callback=function(){Xo(e,n)},t}function id(e){return e=Lt(e),e.tag=3,e}function ud(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){od(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){od(n,t,a),typeof l!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function _f(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&zl(n,t,l,!0),t=Dn.current,t!==null){switch(t.tag){case 13:return Pn===null?ys():t.alternate===null&&Ge===0&&(Ge=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===cu?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),gs(e,a,l)),!1;case 22:return t.flags|=65536,a===cu?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),gs(e,a,l)),!1}throw Error(r(435,t.tag))}return gs(e,a,l),ys(),!1}if(ke)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==ru&&(e=Error(r(422),{cause:a}),kl(On(e,t)))):(a!==ru&&(n=Error(r(423),{cause:a}),kl(On(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=On(a,t),l=zu(e.stateNode,a,l),Zu(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(r(520),{cause:a});if(o=On(o,t),Gl===null?Gl=[o]:Gl.push(o),Ge!==4&&(Ge=2),n===null)return!0;a=On(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=zu(t.stateNode,a,e),Zu(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Qt===null||!Qt.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=id(l),ud(l,e,t,a),Zu(t,l),!1}t=t.return}while(t!==null);return!1}var sd=Error(r(461)),nn=!1;function on(e,n,t,a){n.child=e===null?mc(n,null,t,a):sa(n,e.child,t,a)}function rd(e,n,t,a,l){t=t.render;var o=n.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return ya(n),a=gu(e,n,t,s,o,l),c=vu(),e!==null&&!nn?(bu(e,n,l),ht(e,n,l)):(ke&&c&&uu(n),n.flags|=1,on(e,n,a,l),n.child)}function cd(e,n,t,a,l){if(e===null){var o=t.type;return typeof o=="function"&&!as(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,dd(e,n,o,a,l)):(e=Po(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Gu(e,l)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:bl,t(s,a)&&e.ref===n.ref)return ht(e,n,l)}return n.flags|=1,e=Gt(o,a),e.ref=n.ref,e.return=n,n.child=e}function dd(e,n,t,a,l){if(e!==null){var o=e.memoizedProps;if(bl(o,a)&&e.ref===n.ref)if(nn=!1,n.pendingProps=a=o,Gu(e,l))(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,ht(e,n,l)}return Du(e,n,t,a,l)}function hd(e,n,t){var a=n.pendingProps,l=a.children,o=(n.stateNode._pendingVisibility&2)!==0,s=e!==null?e.memoizedState:null;if(Nl(e,n),a.mode==="hidden"||o){if((n.flags&128)!==0){if(a=s!==null?s.baseLanes|t:t,e!==null){for(l=n.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;n.childLanes=o&~a}else n.childLanes=0,n.child=null;return md(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lo(n,s!==null?s.cachePool:null),s!==null?fc(n,s):du(),yc(n);else return n.lanes=n.childLanes=536870912,md(e,n,s!==null?s.baseLanes|t:t,t)}else s!==null?(Lo(n,s.cachePool),fc(n,s),Nt(),n.memoizedState=null):(e!==null&&Lo(n,null),du(),Nt());return on(e,n,l,t),n.child}function md(e,n,t,a){var l=yu();return l=l===null?null:{parent:Fe._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Lo(n,null),du(),yc(n),e!==null&&zl(e,n,a,!0),null}function Nl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof t!="function"&&typeof t!="object")throw Error(r(284));(e===null||e.ref!==t)&&(n.flags|=2097664)}}function Du(e,n,t,a,l){return ya(n),t=gu(e,n,t,a,void 0,l),a=vu(),e!==null&&!nn?(bu(e,n,l),ht(e,n,l)):(ke&&a&&uu(n),n.flags|=1,on(e,n,t,l),n.child)}function fd(e,n,t,a,l,o){return ya(n),n.updateQueue=null,t=wc(n,a,t,l),bc(e),a=vu(),e!==null&&!nn?(bu(e,n,o),ht(e,n,o)):(ke&&a&&uu(n),n.flags|=1,on(e,n,t,o),n.child)}function yd(e,n,t,a,l){if(ya(n),n.stateNode===null){var o=Ra,s=t.contextType;typeof s=="object"&&s!==null&&(o=cn(s)),o=new t(a,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Nu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},Vu(n),s=t.contextType,o.context=typeof s=="object"&&s!==null?cn(s):Ra,o.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ou(n,t,s,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&Nu.enqueueReplaceState(o,o.state,null),Bl(n,a,o,l),Rl(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){o=n.stateNode;var c=n.memoizedProps,f=ma(t,c);o.props=f;var j=o.context,O=t.contextType;s=Ra,typeof O=="object"&&O!==null&&(s=cn(O));var U=t.getDerivedStateFromProps;O=typeof U=="function"||typeof o.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,O||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c||j!==s)&&nd(n,o,a,s),Bt=!1;var x=n.memoizedState;o.state=x,Bl(n,a,o,l),Rl(),j=n.memoizedState,c||x!==j||Bt?(typeof U=="function"&&(Ou(n,t,U,a),j=n.memoizedState),(f=Bt||ed(n,t,f,a,x,j,s))?(O||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=j),o.props=a,o.state=j,o.context=s,a=f):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Xu(e,n),s=n.memoizedProps,O=ma(t,s),o.props=O,U=n.pendingProps,x=o.context,j=t.contextType,f=Ra,typeof j=="object"&&j!==null&&(f=cn(j)),c=t.getDerivedStateFromProps,(j=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==U||x!==f)&&nd(n,o,a,f),Bt=!1,x=n.memoizedState,o.state=x,Bl(n,a,o,l),Rl();var M=n.memoizedState;s!==U||x!==M||Bt||e!==null&&e.dependencies!==null&&Zo(e.dependencies)?(typeof c=="function"&&(Ou(n,t,c,a),M=n.memoizedState),(O=Bt||ed(n,t,O,a,x,M,f)||e!==null&&e.dependencies!==null&&Zo(e.dependencies))?(j||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,M,f),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,M,f)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=M),o.props=a,o.state=M,o.context=f,a=O):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),a=!1)}return o=a,Nl(e,n),a=(n.flags&128)!==0,o||a?(o=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&a?(n.child=sa(n,e.child,null,l),n.child=sa(n,null,t,l)):on(e,n,t,l),n.memoizedState=o.state,e=n.child):e=ht(e,n,l),e}function pd(e,n,t,a){return Il(),n.flags|=256,on(e,n,t,a),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Bu(e){return{baseLanes:e,cachePool:vc()}}function Lu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Un),e}function gd(e,n,t){var a=n.pendingProps,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),s&&(l=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(ke){if(l?Ot(n):Nt(),ke){var c=ln,f;if(f=c){e:{for(f=c,c=Fn;f.nodeType!==8;){if(!c){c=null;break e}if(f=Qn(f.nextSibling),f===null){c=null;break e}}c=f}c!==null?(n.memoizedState={dehydrated:c,treeContext:oa!==null?{id:st,overflow:rt}:null,retryLane:536870912},f=Ln(18,null,null,0),f.stateNode=c,f.return=n,n.child=f,mn=n,ln=null,f=!0):f=!1}f||ua(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return c.data==="$!"?n.lanes=16:n.lanes=536870912,null;ct(n)}return c=a.children,a=a.fallback,l?(Nt(),l=n.mode,c=_u({mode:"hidden",children:c},l),a=ga(a,l,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,l=n.child,l.memoizedState=Bu(t),l.childLanes=Lu(e,s,t),n.memoizedState=Ru,a):(Ot(n),Uu(n,c))}if(f=e.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(o)n.flags&256?(Ot(n),n.flags&=-257,n=Yu(e,n,t)):n.memoizedState!==null?(Nt(),n.child=e.child,n.flags|=128,n=null):(Nt(),l=a.fallback,c=n.mode,a=_u({mode:"visible",children:a.children},c),l=ga(l,c,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,sa(n,e.child,null,t),a=n.child,a.memoizedState=Bu(t),a.childLanes=Lu(e,s,t),n.memoizedState=Ru,n=l);else if(Ot(n),c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var j=s.dgst;s=j,a=Error(r(419)),a.stack="",a.digest=s,kl({value:a,source:null,stack:null}),n=Yu(e,n,t)}else if(nn||zl(e,n,t,!1),s=(t&e.childLanes)!==0,nn||s){if(s=Oe,s!==null){if(a=t&-t,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(s.suspendedLanes|t))!==0?0:a,a!==0&&a!==f.retryLane)throw f.retryLane=a,Ct(e,a),fn(s,e,a),sd}c.data==="$?"||ys(),n=Yu(e,n,t)}else c.data==="$?"?(n.flags|=128,n.child=e.child,n=ny.bind(null,e),c._reactRetry=n,n=null):(e=f.treeContext,ln=Qn(c.nextSibling),mn=n,ke=!0,Gn=null,Fn=!1,e!==null&&(Nn[zn++]=st,Nn[zn++]=rt,Nn[zn++]=oa,st=e.id,rt=e.overflow,oa=n),n=Uu(n,a.children),n.flags|=4096);return n}return l?(Nt(),l=a.fallback,c=n.mode,f=e.child,j=f.sibling,a=Gt(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&31457280,j!==null?l=Gt(j,l):(l=ga(l,c,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,c=e.child.memoizedState,c===null?c=Bu(t):(f=c.cachePool,f!==null?(j=Fe._currentValue,f=f.parent!==j?{parent:j,pool:j}:f):f=vc(),c={baseLanes:c.baseLanes|t,cachePool:f}),l.memoizedState=c,l.childLanes=Lu(e,s,t),n.memoizedState=Ru,a):(Ot(n),t=e.child,e=t.sibling,t=Gt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function Uu(e,n){return n=_u({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _u(e,n){return Gd(e,n,0,null)}function Yu(e,n,t){return sa(n,e.child,null,t),e=Uu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Qu(e.return,n,t)}function Hu(e,n,t,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=l)}function bd(e,n,t){var a=n.pendingProps,l=a.revealOrder,o=a.tail;if(on(e,n,a.children,t),a=$e.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,t,n);else if(e.tag===19)vd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(xe($e,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Bo(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Hu(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Bo(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Hu(n,!0,t,null,o);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ht(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(zl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,t=Gt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Gt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Gu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zo(e)))}function Yf(e,n,t){switch(n.tag){case 3:Zn(n,n.stateNode.containerInfo),Rt(n,Fe,e.memoizedState.cache),Il();break;case 27:case 5:lt(n);break;case 4:Zn(n,n.stateNode.containerInfo);break;case 10:Rt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Ot(n),n.flags|=128,null):(t&n.child.childLanes)!==0?gd(e,n,t):(Ot(n),e=ht(e,n,t),e!==null?e.sibling:null);Ot(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(zl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return bd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),xe($e,$e.current),a)break;return null;case 22:case 23:return n.lanes=0,hd(e,n,t);case 24:Rt(n,Fe,e.memoizedState.cache)}return ht(e,n,t)}function wd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)nn=!0;else{if(!Gu(e,t)&&(n.flags&128)===0)return nn=!1,Yf(e,n,t);nn=(e.flags&131072)!==0}else nn=!1,ke&&(n.flags&1048576)!==0&&lc(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")as(a)?(e=ma(a,e),n.tag=1,n=yd(null,n,a,e,t)):(n.tag=0,n=Du(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===C){n.tag=11,n=rd(null,n,a,e,t);break e}else if(l===z){n.tag=14,n=cd(null,n,a,e,t);break e}}throw n=je(a)||a,Error(r(306,n,""))}}return n;case 0:return Du(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=ma(a,n.pendingProps),yd(e,n,a,l,t);case 3:e:{if(Zn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var o=n.pendingProps;l=n.memoizedState,a=l.element,Xu(e,n),Bl(n,o,null,t);var s=n.memoizedState;if(o=s.cache,Rt(n,Fe,o),o!==l.cache&&Wu(n,[Fe],t,!0),Rl(),o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=pd(e,n,o,t);break e}else if(o!==a){a=On(Error(r(424)),n),kl(a),n=pd(e,n,o,t);break e}else for(ln=Qn(n.stateNode.containerInfo.firstChild),mn=n,ke=!0,Gn=null,Fn=!0,t=mc(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Il(),o===a){n=ht(e,n,t);break e}on(e,n,o,t)}n=n.child}return n;case 26:return Nl(e,n),e===null?(t=kh(n.type,null,n.pendingProps,null))?n.memoizedState=t:ke||(t=n.type,e=n.pendingProps,a=di(Xn.current).createElement(t),a[rn]=n,a[vn]=e,un(a,t,e),en(a),n.stateNode=a):n.memoizedState=kh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return lt(n),e===null&&ke&&(a=n.stateNode=wh(n.type,n.pendingProps,Xn.current),mn=n,Fn=!0,ln=Qn(a.firstChild)),a=n.pendingProps.children,e!==null||ke?on(e,n,a,t):n.child=sa(n,null,a,t),Nl(e,n),n.child;case 5:return e===null&&ke&&((l=a=ln)&&(a=gy(a,n.type,n.pendingProps,Fn),a!==null?(n.stateNode=a,mn=n,ln=Qn(a.firstChild),Fn=!1,l=!0):l=!1),l||ua(n)),lt(n),l=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,Es(l,o)?a=null:s!==null&&Es(l,s)&&(n.flags|=32),n.memoizedState!==null&&(l=gu(e,n,zf,null,null,t),Fl._currentValue=l),Nl(e,n),on(e,n,a,t),n.child;case 6:return e===null&&ke&&((e=t=ln)&&(t=vy(t,n.pendingProps,Fn),t!==null?(n.stateNode=t,mn=n,ln=null,e=!0):e=!1),e||ua(n)),null;case 13:return gd(e,n,t);case 4:return Zn(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=sa(n,null,a,t):on(e,n,a,t),n.child;case 11:return rd(e,n,n.type,n.pendingProps,t);case 7:return on(e,n,n.pendingProps,t),n.child;case 8:return on(e,n,n.pendingProps.children,t),n.child;case 12:return on(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,Rt(n,n.type,a.value),on(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ya(n),l=cn(l),a=a(l),n.flags|=1,on(e,n,a,t),n.child;case 14:return cd(e,n,n.type,n.pendingProps,t);case 15:return dd(e,n,n.type,n.pendingProps,t);case 19:return bd(e,n,t);case 22:return hd(e,n,t);case 24:return ya(n),a=cn(Fe),e===null?(l=yu(),l===null&&(l=Oe,o=mu(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:a,cache:l},Vu(n),Rt(n,Fe,l)):((e.lanes&t)!==0&&(Xu(e,n),Bl(n,null,null,t),Rl()),l=e.memoizedState,o=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Rt(n,Fe,a)):(a=o.cache,Rt(n,Fe,a),a!==l.cache&&Wu(n,[Fe],t,!0))),on(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Ju=Ie(null),fa=null,mt=null;function Rt(e,n,t){xe(Ju,n._currentValue),n._currentValue=t}function ft(e){e._currentValue=Ju.current,De(Ju)}function Qu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Wu(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var c=o;o=l;for(var f=0;f<n.length;f++)if(c.context===n[f]){o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Qu(o.return,t,e),a||(s=null);break e}o=c.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(r(341));s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Qu(s,t,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function zl(e,n,t,a){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var c=l.type;jn(l.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(l===sn.current){if(s=l.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Fl):e=[Fl])}l=l.return}e!==null&&Wu(n,e,t,a),n.flags|=262144}function Zo(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){fa=e,mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return jd(fa,e)}function Ko(e,n){return fa===null&&ya(e),jd(e,n)}function jd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},mt===null){if(e===null)throw Error(r(308));mt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else mt=mt.next=n;return t}var Bt=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Lt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ut(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ue&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Mo(e),tc(e,null,t),n}return Eo(e,a,n,t),Mo(e)}function Dl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194176)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,rl(e,t)}}function Zu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Ku=!1;function Rl(){if(Ku){var e=Ha;if(e!==null)throw e}}function Bl(e,n,t,a){Ku=!1;var l=e.updateQueue;Bt=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var f=c,j=f.next;f.next=null,s===null?o=j:s.next=j,s=f;var O=e.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==s&&(c===null?O.firstBaseUpdate=j:c.next=j,O.lastBaseUpdate=f))}if(o!==null){var U=l.baseState;s=0,O=j=f=null,c=o;do{var x=c.lane&-536870913,M=x!==c.lane;if(M?(we&x)===x:(a&x)===x){x!==0&&x===Ya&&(Ku=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var te=e,re=c;x=n;var Je=t;switch(re.tag){case 1:if(te=re.payload,typeof te=="function"){U=te.call(Je,U,x);break e}U=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,x=typeof te=="function"?te.call(Je,U,x):te,x==null)break e;U=B({},U,x);break e;case 2:Bt=!0}}x=c.callback,x!==null&&(e.flags|=64,M&&(e.flags|=8192),M=l.callbacks,M===null?l.callbacks=[x]:M.push(x))}else M={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(j=O=M,f=U):O=O.next=M,s|=x;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;M=c,c=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);O===null&&(f=U),l.baseState=f,l.firstBaseUpdate=j,l.lastBaseUpdate=O,o===null&&(l.shared.lanes=0),Jt|=s,e.lanes=s,e.memoizedState=U}}function Id(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Id(t[e],n)}function Ll(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var o=t.create,s=t.inst;a=o(),s.destroy=a}t=t.next}while(t!==l)}}catch(c){Ce(n,n.return,c)}}function _t(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,l=n;var f=t;try{c()}catch(j){Ce(l,f,j)}}}a=a.next}while(a!==o)}}catch(j){Ce(n,n.return,j)}}function Sd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{kd(n,t)}catch(a){Ce(e,e.return,a)}}}function xd(e,n,t){t.props=ma(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Ce(e,n,a)}}function pa(e,n){try{var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(o){Ce(e,n,o)}}function In(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Ce(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ce(e,n,l)}else t.current=null}function Ad(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Ce(e,e.return,l)}}function qd(e,n,t){try{var a=e.stateNode;hy(a,e.type,t,n),a[vn]=n}catch(l){Ce(e,e.return,l)}}function Td(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ci));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(Fu(e,n,t),e=e.sibling;e!==null;)Fu(e,n,t),e=e.sibling}function $o(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for($o(e,n,t),e=e.sibling;e!==null;)$o(e,n,t),e=e.sibling}var yt=!1,He=!1,Pu=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,tn=null,Md=!1;function Hf(e,n){if(e=e.containerInfo,qs=gi,e=Vr(e),nu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,c=-1,f=-1,j=0,O=0,U=e,x=null;n:for(;;){for(var M;U!==t||l!==0&&U.nodeType!==3||(c=s+l),U!==o||a!==0&&U.nodeType!==3||(f=s+a),U.nodeType===3&&(s+=U.nodeValue.length),(M=U.firstChild)!==null;)x=U,U=M;for(;;){if(U===e)break n;if(x===t&&++j===l&&(c=s),x===o&&++O===a&&(f=s),(M=U.nextSibling)!==null)break;U=x,x=U.parentNode}U=M}t=c===-1||f===-1?null:{start:c,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ts={focusedElem:e,selectionRange:t},gi=!1,tn=n;tn!==null;)if(n=tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,tn=e;else for(;tn!==null;){switch(n=tn,o=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,a=t.stateNode;try{var te=ma(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(te,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ce(t,t.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Os(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Os(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,tn=e;break}tn=n.return}return te=Md,Md=!1,te}function Cd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:gt(e,t),a&4&&Ll(5,t);break;case 1:if(gt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){Ce(t,t.return,c)}else{var l=ma(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ce(t,t.return,c)}}a&64&&Sd(t),a&512&&pa(t,t.return);break;case 3:if(gt(e,t),a&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{kd(a,e)}catch(c){Ce(t,t.return,c)}}break;case 26:gt(e,t),a&512&&pa(t,t.return);break;case 27:case 5:gt(e,t),n===null&&a&4&&Ad(t),a&512&&pa(t,t.return);break;case 12:gt(e,t);break;case 13:gt(e,t),a&4&&zd(e,t);break;case 22:if(l=t.memoizedState!==null||yt,!l){n=n!==null&&n.memoizedState!==null||He;var o=yt,s=He;yt=l,(He=n)&&!s?Yt(e,t,(t.subtreeFlags&8772)!==0):gt(e,t),yt=o,He=s}a&512&&(t.memoizedProps.mode==="manual"?pa(t,t.return):In(t,t.return));break;default:gt(e,t)}}function Od(e){var n=e.alternate;n!==null&&(e.alternate=null,Od(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ui(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function pt(e,n,t){for(t=t.child;t!==null;)Nd(e,n,t),t=t.sibling}function Nd(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ft,t)}catch{}switch(t.tag){case 26:He||In(t,n),pt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:He||In(t,n);var a=Ke,l=kn;for(Ke=t.stateNode,pt(e,n,t),t=t.stateNode,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ui(t),Ke=a,kn=l;break;case 5:He||In(t,n);case 6:l=Ke;var o=kn;if(Ke=null,pt(e,n,t),Ke=l,kn=o,Ke!==null)if(kn)try{e=Ke,a=t.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(s){Ce(t,n,s)}else try{Ke.removeChild(t.stateNode)}catch(s){Ce(t,n,s)}break;case 18:Ke!==null&&(kn?(n=Ke,t=t.stateNode,n.nodeType===8?Cs(n.parentNode,t):n.nodeType===1&&Cs(n,t),to(n)):Cs(Ke,t.stateNode));break;case 4:a=Ke,l=kn,Ke=t.stateNode.containerInfo,kn=!0,pt(e,n,t),Ke=a,kn=l;break;case 0:case 11:case 14:case 15:He||_t(2,t,n),He||_t(4,t,n),pt(e,n,t);break;case 1:He||(In(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&xd(t,n,a)),pt(e,n,t);break;case 21:pt(e,n,t);break;case 22:He||In(t,n),He=(a=He)||t.memoizedState!==null,pt(e,n,t),He=a;break;default:pt(e,n,t)}}function zd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(t){Ce(n,n.return,t)}}function Gf(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ed),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ed),n;default:throw Error(r(435,e.tag))}}function es(e,n){var t=Gf(e);n.forEach(function(a){var l=ty.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function Rn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],o=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 27:case 5:Ke=c.stateNode,kn=!1;break e;case 3:Ke=c.stateNode.containerInfo,kn=!0;break e;case 4:Ke=c.stateNode.containerInfo,kn=!0;break e}c=c.return}if(Ke===null)throw Error(r(160));Nd(o,s,l),Ke=null,kn=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Dd(n,e),n=n.sibling}var Jn=null;function Dd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(n,e),Bn(e),a&4&&(_t(3,e,e.return),Ll(3,e),_t(5,e,e.return));break;case 1:Rn(n,e),Bn(e),a&512&&(He||t===null||In(t,t.return)),a&64&&yt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Jn;if(Rn(n,e),Bn(e),a&512&&(He||t===null||In(t,t.return)),a&4){var o=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[cl]||o[rn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),un(o,a,t),o[rn]=e,en(o),a=o;break e;case"link":var s=Ah("link","href",l).get(a+(t.href||""));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute("href")===(t.href==null?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(c,1);break n}}o=l.createElement(a),un(o,a,t),l.head.appendChild(o);break;case"meta":if(s=Ah("meta","content",l).get(a+(t.content||""))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(c,1);break n}}o=l.createElement(a),un(o,a,t),l.head.appendChild(o);break;default:throw Error(r(468,a))}o[rn]=e,en(o),a=o}e.stateNode=a}else qh(l,e.type,e.stateNode);else e.stateNode=xh(l,a,e.memoizedProps);else o!==a?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,a===null?qh(l,e.type,e.stateNode):xh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qd(e,e.memoizedProps,t.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,o=e.memoizedProps;try{for(var f=l.firstChild;f;){var j=f.nextSibling,O=f.nodeName;f[cl]||O==="HEAD"||O==="BODY"||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=j}for(var U=e.type,x=l.attributes;x.length;)l.removeAttributeNode(x[0]);un(l,U,o),l[rn]=e,l[vn]=o}catch(te){Ce(e,e.return,te)}}case 5:if(Rn(n,e),Bn(e),a&512&&(He||t===null||In(t,t.return)),e.flags&32){l=e.stateNode;try{Ea(l,"")}catch(te){Ce(e,e.return,te)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qd(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Pu=!0);break;case 6:if(Rn(n,e),Bn(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(te){Ce(e,e.return,te)}}break;case 3:if(fi=null,l=Jn,Jn=hi(n.containerInfo),Rn(n,e),Jn=l,Bn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{to(n.containerInfo)}catch(te){Ce(e,e.return,te)}Pu&&(Pu=!1,Rd(e));break;case 4:a=Jn,Jn=hi(e.stateNode.containerInfo),Rn(n,e),Bn(e),Jn=a;break;case 12:Rn(n,e),Bn(e);break;case 13:Rn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(rs=An()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 22:if(a&512&&(He||t===null||In(t,t.return)),f=e.memoizedState!==null,j=t!==null&&t.memoizedState!==null,O=yt,U=He,yt=O||f,He=U||j,Rn(n,e),He=U,yt=O,Bn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=f?n._visibility&-2:n._visibility|1,f&&(n=yt||He,t===null||j||n||Wa(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(t=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(t===null){j=t=n;try{if(l=j.stateNode,f)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=j.stateNode,c=j.memoizedProps.style;var M=c!=null&&c.hasOwnProperty("display")?c.display:null;s.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(te){Ce(j,j.return,te)}}}else if(n.tag===6){if(t===null){j=n;try{j.stateNode.nodeValue=f?"":j.memoizedProps}catch(te){Ce(j,j.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,es(e,t))));break;case 19:Rn(n,e),Bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 21:break;default:Rn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){e:{for(var t=e.return;t!==null;){if(Td(t)){var a=t;break e}t=t.return}throw Error(r(160))}switch(a.tag){case 27:var l=a.stateNode,o=$u(e);$o(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ea(s,""),a.flags&=-33);var c=$u(e);$o(e,c,s);break;case 3:case 4:var f=a.stateNode.containerInfo,j=$u(e);Fu(e,j,f);break;default:throw Error(r(161))}}}catch(O){Ce(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Rd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function gt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cd(e,n.alternate,n),n=n.sibling}function Wa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_t(4,n,n.return),Wa(n);break;case 1:In(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&xd(n,n.return,t),Wa(n);break;case 26:case 27:case 5:In(n,n.return),Wa(n);break;case 22:In(n,n.return),n.memoizedState===null&&Wa(n);break;default:Wa(n)}e=e.sibling}}function Yt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,o=n,s=o.flags;switch(o.tag){case 0:case 11:case 15:Yt(l,o,t),Ll(4,o);break;case 1:if(Yt(l,o,t),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(j){Ce(a,a.return,j)}if(a=o,l=a.updateQueue,l!==null){var c=a.stateNode;try{var f=l.shared.hiddenCallbacks;if(f!==null)for(l.shared.hiddenCallbacks=null,l=0;l<f.length;l++)Id(f[l],c)}catch(j){Ce(a,a.return,j)}}t&&s&64&&Sd(o),pa(o,o.return);break;case 26:case 27:case 5:Yt(l,o,t),t&&a===null&&s&4&&Ad(o),pa(o,o.return);break;case 12:Yt(l,o,t);break;case 13:Yt(l,o,t),t&&s&4&&zd(l,o);break;case 22:o.memoizedState===null&&Yt(l,o,t),pa(o,o.return);break;default:Yt(l,o,t)}n=n.sibling}}function ns(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Tl(t))}function ts(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e))}function Ht(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bd(e,n,t,a),n=n.sibling}function Bd(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ht(e,n,t,a),l&2048&&Ll(9,n);break;case 3:Ht(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e)));break;case 12:if(l&2048){Ht(e,n,t,a),e=n.stateNode;try{var o=n.memoizedProps,s=o.id,c=o.onPostCommit;typeof c=="function"&&c(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){Ce(n,n.return,f)}}else Ht(e,n,t,a);break;case 23:break;case 22:o=n.stateNode,n.memoizedState!==null?o._visibility&4?Ht(e,n,t,a):Ul(e,n):o._visibility&4?Ht(e,n,t,a):(o._visibility|=4,Va(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&ns(n.alternate,n);break;case 24:Ht(e,n,t,a),l&2048&&ts(n.alternate,n);break;default:Ht(e,n,t,a)}}function Va(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var o=e,s=n,c=t,f=a,j=s.flags;switch(s.tag){case 0:case 11:case 15:Va(o,s,c,f,l),Ll(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&4?Va(o,s,c,f,l):Ul(o,s):(O._visibility|=4,Va(o,s,c,f,l)),l&&j&2048&&ns(s.alternate,s);break;case 24:Va(o,s,c,f,l),l&&j&2048&&ts(s.alternate,s);break;default:Va(o,s,c,f,l)}n=n.sibling}}function Ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ul(t,a),l&2048&&ns(a.alternate,a);break;case 24:Ul(t,a),l&2048&&ts(a.alternate,a);break;default:Ul(t,a)}n=n.sibling}}var _l=8192;function Xa(e){if(e.subtreeFlags&_l)for(e=e.child;e!==null;)Ld(e),e=e.sibling}function Ld(e){switch(e.tag){case 26:Xa(e),e.flags&_l&&e.memoizedState!==null&&Cy(Jn,e.memoizedState,e.memoizedProps);break;case 5:Xa(e);break;case 3:case 4:var n=Jn;Jn=hi(e.stateNode.containerInfo),Xa(e),Jn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_l,_l=16777216,Xa(e),_l=n):Xa(e));break;default:Xa(e)}}function Ud(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];tn=a,Yd(a,e)}Ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_d(e),e=e.sibling}function _d(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&_t(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Fo(e)):Yl(e);break;default:Yl(e)}}function Fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];tn=a,Yd(a,e)}Ud(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_t(8,n,n.return),Fo(n);break;case 22:t=n.stateNode,t._visibility&4&&(t._visibility&=-5,Fo(n));break;default:Fo(n)}e=e.sibling}}function Yd(e,n){for(;tn!==null;){var t=tn;switch(t.tag){case 0:case 11:case 15:_t(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Tl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,tn=a;else e:for(t=e;tn!==null;){a=tn;var l=a.sibling,o=a.return;if(Od(a),a===t){tn=null;break e}if(l!==null){l.return=o,tn=l;break e}tn=o}}}function Jf(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,n,t,a){return new Jf(e,n,t,a)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,n){var t=e.alternate;return t===null?(t=Ln(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&31457280,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Hd(e,n){e.flags&=31457282;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Po(e,n,t,a,l,o){var s=0;if(a=e,typeof e=="function")as(e)&&(s=1);else if(typeof e=="string")s=Ey(e,t,Qe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case v:return ga(t.children,l,o,n);case y:s=8,l|=24;break;case T:return e=Ln(12,t,n,l|2),e.elementType=T,e.lanes=o,e;case V:return e=Ln(13,t,n,l),e.elementType=V,e.lanes=o,e;case J:return e=Ln(19,t,n,l),e.elementType=J,e.lanes=o,e;case H:return Gd(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case G:s=10;break e;case N:s=9;break e;case C:s=11;break e;case z:s=14;break e;case X:s=16,a=null;break e}s=29,t=Error(r(130,e===null?"null":typeof e,"")),a=null}return n=Ln(s,t,n,l),n.elementType=e,n.type=a,n.lanes=o,n}function ga(e,n,t,a){return e=Ln(7,e,a,n),e.lanes=t,e}function Gd(e,n,t,a){e=Ln(22,e,a,n),e.elementType=H,e.lanes=t;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=l._current;if(o===null)throw Error(r(456));if((l._pendingVisibility&2)===0){var s=Ct(o,2);s!==null&&(l._pendingVisibility|=2,fn(s,o,2))}},attach:function(){var o=l._current;if(o===null)throw Error(r(456));if((l._pendingVisibility&2)!==0){var s=Ct(o,2);s!==null&&(l._pendingVisibility&=-3,fn(s,o,2))}}};return e.stateNode=l,e}function ls(e,n,t){return e=Ln(6,e,null,n),e.lanes=t,e}function os(e,n,t){return n=Ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vt(e){e.flags|=4}function Jd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Th(n)){if(n=Dn.current,n!==null&&((we&4194176)===we?Pn!==null:(we&62914560)!==we&&(we&536870912)===0||n!==Pn))throw xl=cu,uc;e.flags|=8192}}function ei(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tn():536870912,e.lanes|=n,Ka|=n)}function Hl(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Qf(e,n,t){var a=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ft(Fe),At(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(jl(n)?vt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gn!==null&&(ms(Gn),Gn=null))),Le(n),null;case 26:return t=n.memoizedState,e===null?(vt(n),t!==null?(Le(n),Jd(n,t)):(Le(n),n.flags&=-16777217)):t?t!==e.memoizedState?(vt(n),Le(n),Jd(n,t)):(Le(n),n.flags&=-16777217):(e.memoizedProps!==a&&vt(n),Le(n),n.flags&=-16777217),null;case 27:qt(n),t=Xn.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&vt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Le(n),null}e=Qe.current,jl(n)?oc(n):(e=wh(l,a,t),n.stateNode=e,vt(n))}return Le(n),null;case 5:if(qt(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&vt(n);else{if(!a){if(n.stateNode===null)throw Error(r(166));return Le(n),null}if(e=Qe.current,jl(n))oc(n);else{switch(l=di(Xn.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[rn]=n,e[vn]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(un(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&vt(n)}}return Le(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&vt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(r(166));if(e=Xn.current,jl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=mn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[rn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||fh(e.nodeValue,t)),e||ua(n)}else e=di(e).createTextNode(a),e[rn]=n,n.stateNode=e}return Le(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=jl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[rn]=n}else Il(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),l=!1}else Gn!==null&&(ms(Gn),Gn=null),l=!0;if(!l)return n.flags&256?(ct(n),n):(ct(n),null)}if(ct(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),ei(n,n.updateQueue),Le(n),null;case 4:return At(),e===null&&Ss(n.stateNode.containerInfo),Le(n),null;case 10:return ft(n.type),Le(n),null;case 19:if(De($e),l=n.memoizedState,l===null)return Le(n),null;if(a=(n.flags&128)!==0,o=l.rendering,o===null)if(a)Hl(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Bo(e),o!==null){for(n.flags|=128,Hl(l,!1),e=o.updateQueue,n.updateQueue=e,ei(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Hd(t,e),t=t.sibling;return xe($e,$e.current&1|2),n.child}e=e.sibling}l.tail!==null&&An()>ni&&(n.flags|=128,a=!0,Hl(l,!1),n.lanes=4194304)}else{if(!a)if(e=Bo(o),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,ei(n,e),Hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ke)return Le(n),null}else 2*An()-l.renderingStartTime>ni&&t!==536870912&&(n.flags|=128,a=!0,Hl(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(e=l.last,e!==null?e.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=An(),n.sibling=null,e=$e.current,xe($e,a?e&1|2:e&1),n):(Le(n),null);case 22:case 23:return ct(n),hu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),t=n.updateQueue,t!==null&&ei(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&De(ra),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),ft(Fe),Le(n),null;case 25:return null}throw Error(r(156,n.tag))}function Wf(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ft(Fe),At(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 13:if(ct(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Il()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De($e),null;case 4:return At(),null;case 10:return ft(n.type),null;case 22:case 23:return ct(n),hu(),e!==null&&De(ra),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ft(Fe),null;case 25:return null;default:return null}}function Qd(e,n){switch(su(n),n.tag){case 3:ft(Fe),At();break;case 26:case 27:case 5:qt(n);break;case 4:At();break;case 13:ct(n);break;case 19:De($e);break;case 10:ft(n.type);break;case 22:case 23:ct(n),hu(),e!==null&&De(ra);break;case 24:ft(Fe)}}var Vf={getCacheForType:function(e){var n=cn(Fe),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},Xf=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Oe=null,ge=null,we=0,Ne=0,Sn=null,bt=!1,Za=!1,is=!1,wt=0,Ge=0,Jt=0,va=0,us=0,Un=0,Ka=0,Gl=null,nt=null,ss=!1,rs=0,ni=1/0,ti=null,Qt=null,ai=!1,ba=null,Jl=0,cs=0,ds=null,Ql=0,hs=null;function xn(){if((Ue&2)!==0&&we!==0)return we&-we;if(Q.T!==null){var e=Ya;return e!==0?e:ws()}return hr()}function Wd(){Un===0&&(Un=(we&536870912)===0||ke?$n():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),Un}function fn(e,n,t){(e===Oe&&Ne===2||e.cancelPendingCommit!==null)&&($a(e,0),jt(e,we,Un,!1)),Re(e,t),((Ue&2)===0||e!==Oe)&&(e===Oe&&((Ue&2)===0&&(va|=t),Ge===4&&jt(e,we,Un,!1)),tt(e))}function Vd(e,n,t){if((Ue&6)!==0)throw Error(r(327));var a=!t&&(n&60)===0&&(n&e.expiredLanes)===0||gn(e,n),l=a?$f(e,n):ps(e,n,!0),o=a;do{if(l===0){Za&&!a&&jt(e,n,0,!1);break}else if(l===6)jt(e,n,0,!bt);else{if(t=e.current.alternate,o&&!Zf(t)){l=ps(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var c=e;l=Gl;var f=c.current.memoizedState.isDehydrated;if(f&&($a(c,s).flags|=256),s=ps(c,s,!1),s!==2){if(is&&!f){c.errorRecoveryDisabledLanes|=o,va|=o,l=4;break e}o=nt,nt=l,o!==null&&ms(o)}l=s}if(o=!1,l!==2)continue}}if(l===1){$a(e,0),jt(e,n,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){jt(a,n,Un,!bt);break e}break;case 2:nt=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=t,a.finishedLanes=n,(n&62914560)===n&&(o=rs+300-An(),10<o)){if(jt(a,n,Un,!bt),pn(a,0)!==0)break e;a.timeoutHandle=gh(Xd.bind(null,a,t,nt,ti,ss,n,Un,va,Ka,bt,2,-0,0),o);break e}Xd(a,t,nt,ti,ss,n,Un,va,Ka,bt,0,-0,0)}}break}while(!0);tt(e)}function ms(e){nt===null?nt=e:nt.push.apply(nt,e)}function Xd(e,n,t,a,l,o,s,c,f,j,O,U,x){var M=n.subtreeFlags;if((M&8192||(M&16785408)===16785408)&&($l={stylesheets:null,count:0,unsuspend:My},Ld(n),n=Oy(),n!==null)){e.cancelPendingCommit=n(nh.bind(null,e,t,a,l,s,c,f,1,U,x)),jt(e,o,s,!j);return}nh(e,t,a,l,s,c,f,O,U,x)}function Zf(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],o=l.getSnapshot;l=l.value;try{if(!jn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jt(e,n,t,a){n&=~us,n&=~va,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var o=31-K(l),s=1<<o;a[o]=-1,l&=~s}t!==0&&Pt(e,t,n)}function li(){return(Ue&6)===0?(Wl(0),!1):!0}function fs(){if(ge!==null){if(Ne===0)var e=ge.return;else e=ge,mt=fa=null,wu(e),Ua=null,Al=0,e=ge;for(;e!==null;)Qd(e.alternate,e),e=e.return;ge=null}}function $a(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,fy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),fs(),Oe=e,ge=t=Gt(e.current,null),we=n,Ne=0,Sn=null,bt=!1,Za=gn(e,n),is=!1,Ka=Un=us=va=Jt=Ge=0,nt=Gl=null,ss=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-K(a),o=1<<l;n|=e[l],a&=~o}return wt=n,To(),t}function Zd(e,n){fe=null,Q.H=et,n===Sl?(n=cc(),Ne=3):n===uc?(n=cc(),Ne=4):Ne=n===sd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Sn=n,ge===null&&(Ge=1,Xo(e,On(n,e.current)))}function Kd(){var e=Q.H;return Q.H=et,e===null?et:e}function $d(){var e=Q.A;return Q.A=Vf,e}function ys(){Ge=4,bt||(we&4194176)!==we&&Dn.current!==null||(Za=!0),(Jt&134217727)===0&&(va&134217727)===0||Oe===null||jt(Oe,we,Un,!1)}function ps(e,n,t){var a=Ue;Ue|=2;var l=Kd(),o=$d();(Oe!==e||we!==n)&&(ti=null,$a(e,n)),n=!1;var s=Ge;e:do try{if(Ne!==0&&ge!==null){var c=ge,f=Sn;switch(Ne){case 8:fs(),s=6;break e;case 3:case 2:case 6:Dn.current===null&&(n=!0);var j=Ne;if(Ne=0,Sn=null,Fa(e,c,f,j),t&&Za){s=0;break e}break;default:j=Ne,Ne=0,Sn=null,Fa(e,c,f,j)}}Kf(),s=Ge;break}catch(O){Zd(e,O)}while(!0);return n&&e.shellSuspendCounter++,mt=fa=null,Ue=a,Q.H=l,Q.A=o,ge===null&&(Oe=null,we=0,To()),s}function Kf(){for(;ge!==null;)Fd(ge)}function $f(e,n){var t=Ue;Ue|=2;var a=Kd(),l=$d();Oe!==e||we!==n?(ti=null,ni=An()+500,$a(e,n)):Za=gn(e,n);e:do try{if(Ne!==0&&ge!==null){n=ge;var o=Sn;n:switch(Ne){case 1:Ne=0,Sn=null,Fa(e,n,o,1);break;case 2:if(sc(o)){Ne=0,Sn=null,Pd(n);break}n=function(){Ne===2&&Oe===e&&(Ne=7),tt(e)},o.then(n,n);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:sc(o)?(Ne=0,Sn=null,Pd(n)):(Ne=0,Sn=null,Fa(e,n,o,7));break;case 5:var s=null;switch(ge.tag){case 26:s=ge.memoizedState;case 5:case 27:var c=ge;if(!s||Th(s)){Ne=0,Sn=null;var f=c.sibling;if(f!==null)ge=f;else{var j=c.return;j!==null?(ge=j,oi(j)):ge=null}break n}}Ne=0,Sn=null,Fa(e,n,o,5);break;case 6:Ne=0,Sn=null,Fa(e,n,o,6);break;case 8:fs(),Ge=6;break e;default:throw Error(r(462))}}Ff();break}catch(O){Zd(e,O)}while(!0);return mt=fa=null,Q.H=a,Q.A=l,Ue=t,ge!==null?0:(Oe=null,we=0,To(),Ge)}function Ff(){for(;ge!==null&&!Oi();)Fd(ge)}function Fd(e){var n=wd(e.alternate,e,wt);e.memoizedProps=e.pendingProps,n===null?oi(e):ge=n}function Pd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=fd(t,n,n.pendingProps,n.type,void 0,we);break;case 11:n=fd(t,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:wu(n);default:Qd(t,n),n=ge=Hd(n,wt),n=wd(t,n,wt)}e.memoizedProps=e.pendingProps,n===null?oi(e):ge=n}function Fa(e,n,t,a){mt=fa=null,wu(n),Ua=null,Al=0;var l=n.return;try{if(_f(e,l,n,t,we)){Ge=1,Xo(e,On(t,e.current)),ge=null;return}}catch(o){if(l!==null)throw ge=l,o;Ge=1,Xo(e,On(t,e.current)),ge=null;return}n.flags&32768?(ke||a===1?e=!0:Za||(we&536870912)!==0?e=!1:(bt=e=!0,(a===2||a===3||a===6)&&(a=Dn.current,a!==null&&a.tag===13&&(a.flags|=16384))),eh(n,e)):oi(n)}function oi(e){var n=e;do{if((n.flags&32768)!==0){eh(n,bt);return}e=n.return;var t=Qf(n.alternate,n,wt);if(t!==null){ge=t;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Ge===0&&(Ge=5)}function eh(e,n){do{var t=Wf(e.alternate,e);if(t!==null){t.flags&=32767,ge=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=t}while(e!==null);Ge=6,ge=null}function nh(e,n,t,a,l,o,s,c,f,j){var O=Q.T,U=_.p;try{_.p=2,Q.T=null,Pf(e,n,t,a,U,l,o,s,c,f,j)}finally{Q.T=O,_.p=U}}function Pf(e,n,t,a,l,o,s,c){do Pa();while(ba!==null);if((Ue&6)!==0)throw Error(r(327));var f=e.finishedWork;if(a=e.finishedLanes,f===null)return null;if(e.finishedWork=null,e.finishedLanes=0,f===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var j=f.lanes|f.childLanes;if(j|=ou,Yn(e,a,j,o,s,c),e===Oe&&(ge=Oe=null,we=0),(f.subtreeFlags&10256)===0&&(f.flags&10256)===0||ai||(ai=!0,cs=j,ds=t,ay($t,function(){return Pa(),null})),t=(f.flags&15990)!==0,(f.subtreeFlags&15990)!==0||t?(t=Q.T,Q.T=null,o=_.p,_.p=2,s=Ue,Ue|=4,Hf(e,f),Dd(f,e),kf(Ts,e.containerInfo),gi=!!qs,Ts=qs=null,e.current=f,Cd(e,f.alternate,f),Ni(),Ue=s,_.p=o,Q.T=t):e.current=f,ai?(ai=!1,ba=e,Jl=a):th(e,j),j=e.pendingLanes,j===0&&(Qt=null),Bi(f.stateNode),tt(e),n!==null)for(l=e.onRecoverableError,f=0;f<n.length;f++)j=n[f],l(j.value,{componentStack:j.stack});return(Jl&3)!==0&&Pa(),j=e.pendingLanes,(a&4194218)!==0&&(j&42)!==0?e===hs?Ql++:(Ql=0,hs=e):Ql=0,Wl(0),null}function th(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Tl(n)))}function Pa(){if(ba!==null){var e=ba,n=cs;cs=0;var t=dr(Jl),a=Q.T,l=_.p;try{if(_.p=32>t?32:t,Q.T=null,ba===null)var o=!1;else{t=ds,ds=null;var s=ba,c=Jl;if(ba=null,Jl=0,(Ue&6)!==0)throw Error(r(331));var f=Ue;if(Ue|=4,_d(s.current),Bd(s,s.current,c,t),Ue=f,Wl(0,!1),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ft,s)}catch{}o=!0}return o}finally{_.p=l,Q.T=a,th(e,n)}}return!1}function ah(e,n,t){n=On(t,n),n=zu(e.stateNode,n,2),e=Ut(e,n,2),e!==null&&(Re(e,2),tt(e))}function Ce(e,n,t){if(e.tag===3)ah(e,e,t);else for(;n!==null;){if(n.tag===3){ah(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qt===null||!Qt.has(a))){e=On(t,e),t=id(2),a=Ut(n,t,2),a!==null&&(ud(t,a,n,e),Re(a,2),tt(a));break}}n=n.return}}function gs(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Xf;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(is=!0,l.add(t),e=ey.bind(null,e,n,t),n.then(e,e))}function ey(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Oe===e&&(we&t)===t&&(Ge===4||Ge===3&&(we&62914560)===we&&300>An()-rs?(Ue&2)===0&&$a(e,0):us|=t,Ka===we&&(Ka=0)),tt(e)}function lh(e,n){n===0&&(n=Tn()),e=Ct(e,n),e!==null&&(Re(e,n),tt(e))}function ny(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lh(e,t)}function ty(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(n),lh(e,t)}function ay(e,n){return Kn(e,n)}var ii=null,el=null,vs=!1,ui=!1,bs=!1,wa=0;function tt(e){e!==el&&e.next===null&&(el===null?ii=el=e:el=el.next=e),ui=!0,vs||(vs=!0,oy(ly))}function Wl(e,n){if(!bs&&ui){bs=!0;do for(var t=!1,a=ii;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var s=a.suspendedLanes,c=a.pingedLanes;o=(1<<31-K(42|e)+1)-1,o&=l&~(s&~c),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(t=!0,uh(a,o))}else o=we,o=pn(a,a===Oe?o:0),(o&3)===0||gn(a,o)||(t=!0,uh(a,o));a=a.next}while(t);bs=!1}}function ly(){ui=vs=!1;var e=0;wa!==0&&(my()&&(e=wa),wa=0);for(var n=An(),t=null,a=ii;a!==null;){var l=a.next,o=oh(a,n);o===0?(a.next=null,t===null?ii=l:t.next=l,l===null&&(el=t)):(t=a,(e!==0||(o&3)!==0)&&(ui=!0)),a=l}Wl(e)}function oh(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-K(o),c=1<<s,f=l[s];f===-1?((c&t)===0||(c&a)!==0)&&(l[s]=qn(c,n)):f<=n&&(e.expiredLanes|=c),o&=~c}if(n=Oe,t=we,t=pn(e,e===n?t:0),a=e.callbackNode,t===0||e===n&&Ne===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&il(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||gn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&il(a),dr(t)){case 2:case 8:t=sl;break;case 32:t=$t;break;case 268435456:t=po;break;default:t=$t}return a=ih.bind(null,e),t=Kn(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&il(a),e.callbackPriority=2,e.callbackNode=null,2}function ih(e,n){var t=e.callbackNode;if(Pa()&&e.callbackNode!==t)return null;var a=we;return a=pn(e,e===Oe?a:0),a===0?null:(Vd(e,a,n),oh(e,An()),e.callbackNode!=null&&e.callbackNode===t?ih.bind(null,e):null)}function uh(e,n){if(Pa())return null;Vd(e,n,!0)}function oy(e){yy(function(){(Ue&6)!==0?Kn(ul,e):e()})}function ws(){return wa===0&&(wa=$n()),wa}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function rh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function iy(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var o=sh((l[vn]||null).action),s=a.submitter;s&&(n=(n=s[vn]||null)?sh(n.formAction):s.getAttribute("formAction"),n!==null&&(o=n,s=null));var c=new xo("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(wa!==0){var f=s?rh(l,s):new FormData(l);Eu(t,{pending:!0,data:f,method:l.method,action:o},null,f)}}else typeof o=="function"&&(c.preventDefault(),f=s?rh(l,s):new FormData(l),Eu(t,{pending:!0,data:f,method:l.method,action:o},o,f))},currentTarget:l}]})}}for(var js=0;js<nc.length;js++){var Is=nc[js],uy=Is.toLowerCase(),sy=Is[0].toUpperCase()+Is.slice(1);Hn(uy,"on"+sy)}Hn(Kr,"onAnimationEnd"),Hn($r,"onAnimationIteration"),Hn(Fr,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(xf,"onTransitionRun"),Hn(Af,"onTransitionStart"),Hn(qf,"onTransitionCancel"),Hn(Pr,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function ch(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var s=a.length-1;0<=s;s--){var c=a[s],f=c.instance,j=c.currentTarget;if(c=c.listener,f!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=j;try{o(l)}catch(O){Vo(O)}l.currentTarget=null,o=f}else for(s=0;s<a.length;s++){if(c=a[s],f=c.instance,j=c.currentTarget,c=c.listener,f!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=j;try{o(l)}catch(O){Vo(O)}l.currentTarget=null,o=f}}}}function ve(e,n){var t=n[Li];t===void 0&&(t=n[Li]=new Set);var a=e+"__bubble";t.has(a)||(dh(n,e,2,!1),t.add(a))}function ks(e,n,t){var a=0;n&&(a|=4),dh(t,e,a,n)}var si="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[si]){e[si]=!0,fr.forEach(function(t){t!=="selectionchange"&&(ry.has(t)||ks(t,!1,e),ks(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[si]||(n[si]=!0,ks("selectionchange",!1,n))}}function dh(e,n,t,a){switch(zh(n)){case 2:var l=Dy;break;case 8:l=Ry;break;default:l=Bs}t=l.bind(null,n,t,e),l=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function xs(e,n,t,a,l){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(s===4)for(s=a.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===l||f.nodeType===8&&f.parentNode===l))return;s=s.return}for(;c!==null;){if(s=ea(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){a=o=s;continue e}c=c.parentNode}}a=a.return}Ar(function(){var j=o,O=Ji(t),U=[];e:{var x=ec.get(e);if(x!==void 0){var M=xo,te=e;switch(e){case"keypress":if(ko(t)===0)break e;case"keydown":case"keyup":M=nf;break;case"focusin":te="focus",M=Ki;break;case"focusout":te="blur",M=Ki;break;case"beforeblur":case"afterblur":M=Ki;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=lf;break;case Kr:case $r:case Fr:M=Wm;break;case Pr:M=uf;break;case"scroll":case"scrollend":M=Ym;break;case"wheel":M=rf;break;case"copy":case"cut":case"paste":M=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Cr;break;case"toggle":case"beforetoggle":M=df}var re=(n&4)!==0,Je=!re&&(e==="scroll"||e==="scrollend"),I=re?x!==null?x+"Capture":null:x;re=[];for(var w=j,S;w!==null;){var R=w;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||I===null||(R=hl(w,I),R!=null&&re.push(Xl(w,R,S))),Je)break;w=w.return}0<re.length&&(x=new M(x,te,null,t,O),U.push({event:x,listeners:re}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",x&&t!==Gi&&(te=t.relatedTarget||t.fromElement)&&(ea(te)||te[Sa]))break e;if((M||x)&&(x=O.window===O?O:(x=O.ownerDocument)?x.defaultView||x.parentWindow:window,M?(te=t.relatedTarget||t.toElement,M=j,te=te?ea(te):null,te!==null&&(Je=Z(te),re=te.tag,te!==Je||re!==5&&re!==27&&re!==6)&&(te=null)):(M=null,te=j),M!==te)){if(re=Er,R="onMouseLeave",I="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(re=Cr,R="onPointerLeave",I="onPointerEnter",w="pointer"),Je=M==null?x:dl(M),S=te==null?x:dl(te),x=new re(R,w+"leave",M,t,O),x.target=Je,x.relatedTarget=S,R=null,ea(O)===j&&(re=new re(I,w+"enter",te,t,O),re.target=S,re.relatedTarget=Je,R=re),Je=R,M&&te)n:{for(re=M,I=te,w=0,S=re;S;S=nl(S))w++;for(S=0,R=I;R;R=nl(R))S++;for(;0<w-S;)re=nl(re),w--;for(;0<S-w;)I=nl(I),S--;for(;w--;){if(re===I||I!==null&&re===I.alternate)break n;re=nl(re),I=nl(I)}re=null}else re=null;M!==null&&hh(U,x,M,re,!1),te!==null&&Je!==null&&hh(U,Je,te,re,!0)}}e:{if(x=j?dl(j):window,M=x.nodeName&&x.nodeName.toLowerCase(),M==="select"||M==="input"&&x.type==="file")var ne=Ur;else if(Br(x))if(_r)ne=jf;else{ne=bf;var pe=vf}else M=x.nodeName,!M||M.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?j&&Hi(j.elementType)&&(ne=Ur):ne=wf;if(ne&&(ne=ne(e,j))){Lr(U,ne,t,O);break e}pe&&pe(e,x,j),e==="focusout"&&j&&x.type==="number"&&j.memoizedProps.value!=null&&Yi(x,"number",x.value)}switch(pe=j?dl(j):window,e){case"focusin":(Br(pe)||pe.contentEditable==="true")&&(Na=pe,tu=j,wl=null);break;case"focusout":wl=tu=Na=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Xr(U,t,O);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":Xr(U,t,O)}var oe;if(Fi)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Oa?Dr(e,t)&&(ue="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Or&&t.locale!=="ko"&&(Oa||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Oa&&(oe=qr()):(Mt=O,Vi="value"in Mt?Mt.value:Mt.textContent,Oa=!0)),pe=ri(j,ue),0<pe.length&&(ue=new Mr(ue,e,null,t,O),U.push({event:ue,listeners:pe}),oe?ue.data=oe:(oe=Rr(t),oe!==null&&(ue.data=oe)))),(oe=mf?ff(e,t):yf(e,t))&&(ue=ri(j,"onBeforeInput"),0<ue.length&&(pe=new Mr("onBeforeInput","beforeinput",null,t,O),U.push({event:pe,listeners:ue}),pe.data=oe)),iy(U,e,j,t,O)}ch(U,n)})}function Xl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ri(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=hl(e,t),l!=null&&a.unshift(Xl(e,l,o)),l=hl(e,n),l!=null&&a.push(Xl(e,l,o))),e=e.return}return a}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hh(e,n,t,a,l){for(var o=n._reactName,s=[];t!==null&&t!==a;){var c=t,f=c.alternate,j=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||j===null||(f=j,l?(j=hl(t,o),j!=null&&s.unshift(Xl(t,j,f))):l||(j=hl(t,o),j!=null&&s.push(Xl(t,j,f)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var cy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(dy,"")}function fh(e,n){return n=mh(n),mh(e)===n}function ci(){}function Me(e,n,t,a,l,o){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ea(e,""+a);break;case"className":vo(e,"class",a);break;case"tabIndex":vo(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":vo(e,t,a);break;case"style":Sr(e,a,o);break;case"data":if(n!=="object"){vo(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=jo(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Me(e,n,"name",l.name,l,null),Me(e,n,"formEncType",l.formEncType,l,null),Me(e,n,"formMethod",l.formMethod,l,null),Me(e,n,"formTarget",l.formTarget,l,null)):(Me(e,n,"encType",l.encType,l,null),Me(e,n,"method",l.method,l,null),Me(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=jo(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=ci);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=jo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),go(e,"popover",a);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":go(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Um.get(t)||t,go(e,t,a))}}function As(e,n,t,a,l,o){switch(t){case"style":Sr(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[vn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):go(e,t,a)}}}function un(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var s=t[o];if(s!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Me(e,n,o,s,t,null)}}l&&Me(e,n,"srcSet",t.srcSet,t,null),a&&Me(e,n,"src",t.src,t,null);return;case"input":ve("invalid",e);var c=o=s=l=null,f=null,j=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":l=O;break;case"type":s=O;break;case"checked":f=O;break;case"defaultChecked":j=O;break;case"value":o=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:Me(e,n,a,O,t,null)}}wr(e,o,c,f,j,s,l,!1),bo(e);return;case"select":ve("invalid",e),a=s=o=null;for(l in t)if(t.hasOwnProperty(l)&&(c=t[l],c!=null))switch(l){case"value":o=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:Me(e,n,l,c,t,null)}n=o,t=s,e.multiple=!!a,n!=null?Ta(e,!!a,n,!1):t!=null&&Ta(e,!!a,t,!0);return;case"textarea":ve("invalid",e),o=l=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":l=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:Me(e,n,s,c,t,null)}Ir(e,a,l,o),bo(e);return;case"option":for(f in t)if(t.hasOwnProperty(f)&&(a=t[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Me(e,n,f,a,t,null)}return;case"dialog":ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<Vl.length;a++)ve(Vl[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in t)if(t.hasOwnProperty(j)&&(a=t[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Me(e,n,j,a,t,null)}return;default:if(Hi(n)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&As(e,n,O,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&Me(e,n,c,a,t,null))}function hy(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,c=null,f=null,j=null,O=null;for(M in t){var U=t[M];if(t.hasOwnProperty(M)&&U!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":f=U;default:a.hasOwnProperty(M)||Me(e,n,M,null,a,U)}}for(var x in a){var M=a[x];if(U=t[x],a.hasOwnProperty(x)&&(M!=null||U!=null))switch(x){case"type":o=M;break;case"name":l=M;break;case"checked":j=M;break;case"defaultChecked":O=M;break;case"value":s=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:M!==U&&Me(e,n,x,M,a,U)}}_i(e,s,c,f,j,O,o,l);return;case"select":M=s=c=x=null;for(o in t)if(f=t[o],t.hasOwnProperty(o)&&f!=null)switch(o){case"value":break;case"multiple":M=f;default:a.hasOwnProperty(o)||Me(e,n,o,null,a,f)}for(l in a)if(o=a[l],f=t[l],a.hasOwnProperty(l)&&(o!=null||f!=null))switch(l){case"value":x=o;break;case"defaultValue":c=o;break;case"multiple":s=o;default:o!==f&&Me(e,n,l,o,a,f)}n=c,t=s,a=M,x!=null?Ta(e,!!t,x,!1):!!a!=!!t&&(n!=null?Ta(e,!!t,n,!0):Ta(e,!!t,t?[]:"",!1));return;case"textarea":M=x=null;for(c in t)if(l=t[c],t.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Me(e,n,c,null,a,l)}for(s in a)if(l=a[s],o=t[s],a.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":x=l;break;case"defaultValue":M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==o&&Me(e,n,s,l,a,o)}jr(e,x,M);return;case"option":for(var te in t)if(x=t[te],t.hasOwnProperty(te)&&x!=null&&!a.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Me(e,n,te,null,a,x)}for(f in a)if(x=a[f],M=t[f],a.hasOwnProperty(f)&&x!==M&&(x!=null||M!=null))switch(f){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:Me(e,n,f,x,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in t)x=t[re],t.hasOwnProperty(re)&&x!=null&&!a.hasOwnProperty(re)&&Me(e,n,re,null,a,x);for(j in a)if(x=a[j],M=t[j],a.hasOwnProperty(j)&&x!==M&&(x!=null||M!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,n));break;default:Me(e,n,j,x,a,M)}return;default:if(Hi(n)){for(var Je in t)x=t[Je],t.hasOwnProperty(Je)&&x!==void 0&&!a.hasOwnProperty(Je)&&As(e,n,Je,void 0,a,x);for(O in a)x=a[O],M=t[O],!a.hasOwnProperty(O)||x===M||x===void 0&&M===void 0||As(e,n,O,x,a,M);return}}for(var I in t)x=t[I],t.hasOwnProperty(I)&&x!=null&&!a.hasOwnProperty(I)&&Me(e,n,I,null,a,x);for(U in a)x=a[U],M=t[U],!a.hasOwnProperty(U)||x===M||x==null&&M==null||Me(e,n,U,x,a,M)}var qs=null,Ts=null;function di(e){return e.nodeType===9?e:e.ownerDocument}function yh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ph(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Es(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ms=null;function my(){var e=window.event;return e&&e.type==="popstate"?e===Ms?!1:(Ms=e,!0):(Ms=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(e){return vh.resolve(null).then(e).catch(py)}:gh;function py(e){setTimeout(function(){throw e})}function Cs(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),to(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);to(n)}function Os(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Os(t),Ui(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function gy(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[cl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function vy(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qn(e.nextSibling),e===null))return null;return e}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function bh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function wh(e,n,t){switch(n=di(t),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var _n=new Map,jh=new Set;function hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var It=_.d;_.d={f:by,r:wy,D:jy,C:Iy,L:ky,m:Sy,X:Ay,S:xy,M:qy};function by(){var e=It.f(),n=li();return e||n}function wy(e){var n=xa(e);n!==null&&n.tag===5&&n.type==="form"?Xc(n):It.r(e)}var tl=typeof document>"u"?null:document;function Ih(e,n,t){var a=tl;if(a&&typeof n=="string"&&n){var l=Mn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),jh.has(l)||(jh.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),un(n,"link",e),en(n),a.head.appendChild(n)))}}function jy(e){It.D(e),Ih("dns-prefetch",e,null)}function Iy(e,n){It.C(e,n),Ih("preconnect",e,n)}function ky(e,n,t){It.L(e,n,t);var a=tl;if(a&&e&&n){var l='link[rel="preload"][as="'+Mn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Mn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Mn(t.imageSizes)+'"]')):l+='[href="'+Mn(e)+'"]';var o=l;switch(n){case"style":o=al(e);break;case"script":o=ll(e)}_n.has(o)||(e=B({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),_n.set(o,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Zl(o))||n==="script"&&a.querySelector(Kl(o))||(n=a.createElement("link"),un(n,"link",e),en(n),a.head.appendChild(n)))}}function Sy(e,n){It.m(e,n);var t=tl;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Mn(a)+'"][href="'+Mn(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ll(e)}if(!_n.has(o)&&(e=B({rel:"modulepreload",href:e},n),_n.set(o,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Kl(o)))return}a=t.createElement("link"),un(a,"link",e),en(a),t.head.appendChild(a)}}}function xy(e,n,t){It.S(e,n,t);var a=tl;if(a&&e){var l=Aa(a).hoistableStyles,o=al(e);n=n||"default";var s=l.get(o);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(Zl(o)))c.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":n},t),(t=_n.get(o))&&Ns(e,t);var f=s=a.createElement("link");en(f),un(f,"link",e),f._p=new Promise(function(j,O){f.onload=j,f.onerror=O}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,mi(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:c},l.set(o,s)}}}function Ay(e,n){It.X(e,n);var t=tl;if(t&&e){var a=Aa(t).hoistableScripts,l=ll(e),o=a.get(l);o||(o=t.querySelector(Kl(l)),o||(e=B({src:e,async:!0},n),(n=_n.get(l))&&zs(e,n),o=t.createElement("script"),en(o),un(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function qy(e,n){It.M(e,n);var t=tl;if(t&&e){var a=Aa(t).hoistableScripts,l=ll(e),o=a.get(l);o||(o=t.querySelector(Kl(l)),o||(e=B({src:e,async:!0,type:"module"},n),(n=_n.get(l))&&zs(e,n),o=t.createElement("script"),en(o),un(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function kh(e,n,t,a){var l=(l=Xn.current)?hi(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=al(t.href),t=Aa(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=al(t.href);var o=Aa(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Zl(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_n.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},_n.set(e,t),o||Ty(l,e,t,s.state))),n&&a===null)throw Error(r(528,""));return s}if(n&&a!==null)throw Error(r(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ll(t),t=Aa(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function al(e){return'href="'+Mn(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function Sh(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Ty(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),un(n,"link",t),en(n),e.head.appendChild(n))}function ll(e){return'[src="'+Mn(e)+'"]'}function Kl(e){return"script[async]"+e}function xh(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Mn(t.href)+'"]');if(a)return n.instance=a,en(a),a;var l=B({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),en(a),un(a,"style",l),mi(a,t.precedence,e),n.instance=a;case"stylesheet":l=al(t.href);var o=e.querySelector(Zl(l));if(o)return n.state.loading|=4,n.instance=o,en(o),o;a=Sh(t),(l=_n.get(l))&&Ns(a,l),o=(e.ownerDocument||e).createElement("link"),en(o);var s=o;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),un(o,"link",a),n.state.loading|=4,mi(o,t.precedence,e),n.instance=o;case"script":return o=ll(t.src),(l=e.querySelector(Kl(o)))?(n.instance=l,en(l),l):(a=t,(l=_n.get(o))&&(a=B({},t),zs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),en(l),un(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,mi(a,t.precedence,e));return n.instance}function mi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===n)o=c;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Ns(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fi=null;function Ah(e,n,t){if(fi===null){var a=new Map,l=fi=new Map;l.set(t,a)}else l=fi,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[cl]||o[rn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(n)||"";s=e+s;var c=a.get(s);c?c.push(o):a.set(s,[o])}}return a}function qh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Ey(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $l=null;function My(){}function Cy(e,n,t){if($l===null)throw Error(r(475));var a=$l;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=al(t.href),o=e.querySelector(Zl(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=yi.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=o,en(o);return}o=e.ownerDocument||e,t=Sh(t),(l=_n.get(l))&&Ns(t,l),o=o.createElement("link"),en(o);var s=o;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),un(o,"link",t),n.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=yi.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Oy(){if($l===null)throw Error(r(475));var e=$l;return e.stylesheets&&e.count===0&&Ds(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Ds(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function yi(){if(this.count--,this.count===0){if(this.stylesheets)Ds(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pi=null;function Ds(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pi=new Map,n.forEach(Ny,e),pi=null,yi.call(e))}function Ny(e,n){if(!(n.state.loading&4)){var t=pi.get(e);if(t)var a=t.get(null);else{t=new Map,pi.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}l=n.instance,s=l.getAttribute("data-precedence"),o=t.get(s)||a,o===a&&t.set(null,l),t.set(s,l),this.count++,a=yi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Fl={$$typeof:G,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function zy(e,n,t,a,l,o,s,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.hiddenUpdates=Be(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Eh(e,n,t,a,l,o,s,c,f,j,O,U){return e=new zy(e,n,t,s,c,f,j,U),n=1,o===!0&&(n|=24),o=Ln(3,null,null,n),e.current=o,o.stateNode=e,n=mu(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:a,isDehydrated:t,cache:n},Vu(o),e}function Mh(e){return e?(e=Ra,e):Ra}function Ch(e,n,t,a,l,o){l=Mh(l),a.context===null?a.context=l:a.pendingContext=l,a=Lt(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(a.callback=o),t=Ut(e,a,n),t!==null&&(fn(t,e,n),Dl(t,e,n))}function Oh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Rs(e,n){Oh(e,n),(e=e.alternate)&&Oh(e,n)}function Nh(e){if(e.tag===13){var n=Ct(e,67108864);n!==null&&fn(n,e,67108864),Rs(e,67108864)}}var gi=!0;function Dy(e,n,t,a){var l=Q.T;Q.T=null;var o=_.p;try{_.p=2,Bs(e,n,t,a)}finally{_.p=o,Q.T=l}}function Ry(e,n,t,a){var l=Q.T;Q.T=null;var o=_.p;try{_.p=8,Bs(e,n,t,a)}finally{_.p=o,Q.T=l}}function Bs(e,n,t,a){if(gi){var l=Ls(a);if(l===null)xs(e,n,a,vi,t),Dh(e,a);else if(Ly(l,e,n,t,a))a.stopPropagation();else if(Dh(e,a),n&4&&-1<By.indexOf(e)){for(;l!==null;){var o=xa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=yn(o.pendingLanes);if(s!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-K(s);c.entanglements[1]|=f,s&=~f}tt(o),(Ue&6)===0&&(ni=An()+500,Wl(0))}}break;case 13:c=Ct(o,2),c!==null&&fn(c,o,2),li(),Rs(o,2)}if(o=Ls(a),o===null&&xs(e,n,a,vi,t),o===l)break;l=o}l!==null&&a.stopPropagation()}else xs(e,n,a,null,t)}}function Ls(e){return e=Ji(e),Us(e)}var vi=null;function Us(e){if(vi=null,e=ea(e),e!==null){var n=Z(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=ie(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vi=e,null}function zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case ul:return 2;case sl:return 8;case $t:case zi:return 32;case po:return 268435456;default:return 32}default:return 32}}var _s=!1,Wt=null,Vt=null,Xt=null,Pl=new Map,eo=new Map,Zt=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(e,n){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(n.pointerId)}}function no(e,n,t,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},n!==null&&(n=xa(n),n!==null&&Nh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Ly(e,n,t,a,l){switch(n){case"focusin":return Wt=no(Wt,e,n,t,a,l),!0;case"dragenter":return Vt=no(Vt,e,n,t,a,l),!0;case"mouseover":return Xt=no(Xt,e,n,t,a,l),!0;case"pointerover":var o=l.pointerId;return Pl.set(o,no(Pl.get(o)||null,e,n,t,a,l)),!0;case"gotpointercapture":return o=l.pointerId,eo.set(o,no(eo.get(o)||null,e,n,t,a,l)),!0}return!1}function Rh(e){var n=ea(e.target);if(n!==null){var t=Z(n);if(t!==null){if(n=t.tag,n===13){if(n=ie(t),n!==null){e.blockedOn=n,Cm(e.priority,function(){if(t.tag===13){var a=xn(),l=Ct(t,a);l!==null&&fn(l,t,a),Rs(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ls(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Gi=a,t.target.dispatchEvent(a),Gi=null}else return n=xa(t),n!==null&&Nh(n),e.blockedOn=t,!1;n.shift()}return!0}function Bh(e,n,t){bi(e)&&t.delete(n)}function Uy(){_s=!1,Wt!==null&&bi(Wt)&&(Wt=null),Vt!==null&&bi(Vt)&&(Vt=null),Xt!==null&&bi(Xt)&&(Xt=null),Pl.forEach(Bh),eo.forEach(Bh)}function wi(e,n){e.blockedOn===n&&(e.blockedOn=null,_s||(_s=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Uy)))}var ji=null;function Lh(e){ji!==e&&(ji=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ji===e&&(ji=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Us(a||t)===null)continue;break}var o=xa(t);o!==null&&(e.splice(n,3),n-=3,Eu(o,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function to(e){function n(f){return wi(f,e)}Wt!==null&&wi(Wt,e),Vt!==null&&wi(Vt,e),Xt!==null&&wi(Xt,e),Pl.forEach(n),eo.forEach(n);for(var t=0;t<Zt.length;t++){var a=Zt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Zt.length&&(t=Zt[0],t.blockedOn===null);)Rh(t),t.blockedOn===null&&Zt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],o=t[a+1],s=l[vn]||null;if(typeof o=="function")s||Lh(t);else if(s){var c=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[vn]||null)c=s.formAction;else if(Us(l)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),Lh(t)}}}function Ys(e){this._internalRoot=e}Ii.prototype.render=Ys.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var t=n.current,a=xn();Ch(t,a,e,n,null,null)},Ii.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Pa(),Ch(e.current,2,null,e,null,null),li(),n[Sa]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var n=hr();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Zt.length&&n!==0&&n<Zt[t].priority;t++);Zt.splice(t,0,e),t===0&&Rh(e)}};var Uh=h.version;if(Uh!=="19.0.0")throw Error(r(527,Uh,"19.0.0"));_.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=E(n),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var _y={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,findFiberByHostInstance:ea,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{Ft=ki.inject(_y),hn=ki}catch{}}return lo.createRoot=function(e,n){if(!m(e))throw Error(r(299));var t=!1,a="",l=td,o=ad,s=ld,c=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=Eh(e,1,!1,null,null,t,a,l,o,s,c,null),e[Sa]=n.current,Ss(e.nodeType===8?e.parentNode:e),new Ys(n)},lo.hydrateRoot=function(e,n,t){if(!m(e))throw Error(r(299));var a=!1,l="",o=td,s=ad,c=ld,f=null,j=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks),t.formState!==void 0&&(j=t.formState)),n=Eh(e,1,!0,n,t??null,a,l,o,s,c,f,j),n.context=Mh(null),t=n.current,a=xn(),l=Lt(a),l.callback=null,Ut(t,l,a),n.current.lanes=a,Re(n,a),tt(n),e[Sa]=n.current,Ss(e),new Ii(n)},lo.version="19.0.0",lo}var Zh;function $y(){if(Zh)return Js.exports;Zh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),Js.exports=Ky(),Js.exports}var Fy=$y();const Py=rm(Fy);var oo={},Kh;function ep(){if(Kh)return oo;Kh=1,Object.defineProperty(oo,"__esModule",{value:!0}),oo.parse=k,oo.serialize=y;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,h=/^[\u0021-\u003A\u003C-\u007E]*$/,d=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,m=Object.prototype.toString,p=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function k(N,G){const C=new p,V=N.length;if(V<2)return C;const J=(G==null?void 0:G.decode)||T;let z=0;do{const X=N.indexOf("=",z);if(X===-1)break;const H=N.indexOf(";",z),ee=H===-1?V:H;if(X>ee){z=N.lastIndexOf(";",X-1)+1;continue}const P=A(N,z,X),ye=v(N,X,P),Ae=N.slice(P,ye);if(C[Ae]===void 0){let je=A(N,X+1,ee),Q=v(N,ee,je);const B=J(N.slice(je,Q));C[Ae]=B}z=ee+1}while(z<V);return C}function A(N,G,C){do{const V=N.charCodeAt(G);if(V!==32&&V!==9)return G}while(++G<C);return C}function v(N,G,C){for(;G>C;){const V=N.charCodeAt(--G);if(V!==32&&V!==9)return G+1}return C}function y(N,G,C){const V=(C==null?void 0:C.encode)||encodeURIComponent;if(!i.test(N))throw new TypeError(`argument name is invalid: ${N}`);const J=V(G);if(!h.test(J))throw new TypeError(`argument val is invalid: ${G}`);let z=N+"="+J;if(!C)return z;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);z+="; Max-Age="+C.maxAge}if(C.domain){if(!d.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);z+="; Domain="+C.domain}if(C.path){if(!r.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);z+="; Path="+C.path}if(C.expires){if(!L(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);z+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(z+="; HttpOnly"),C.secure&&(z+="; Secure"),C.partitioned&&(z+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return z}function T(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function L(N){return m.call(N)==="[object Date]"}return oo}ep();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $h="popstate";function np(i={}){function h(m,p){let{pathname:k="/",search:A="",hash:v=""}=Ia(m.location.hash.substring(1));return!k.startsWith("/")&&!k.startsWith(".")&&(k="/"+k),er("",{pathname:k,search:A,hash:v},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(m,p){let k=m.document.querySelector("base"),A="";if(k&&k.getAttribute("href")){let v=m.location.href,y=v.indexOf("#");A=y===-1?v:v.slice(0,y)}return A+"#"+(typeof p=="string"?p:ro(p))}function r(m,p){Wn(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return ap(h,d,r,i)}function _e(i,h){if(i===!1||i===null||typeof i>"u")throw new Error(h)}function Wn(i,h){if(!i){typeof console<"u"&&console.warn(h);try{throw new Error(h)}catch{}}}function tp(){return Math.random().toString(36).substring(2,10)}function Fh(i,h){return{usr:i.state,key:i.key,idx:h}}function er(i,h,d=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof h=="string"?Ia(h):h,state:d,key:h&&h.key||r||tp()}}function ro({pathname:i="/",search:h="",hash:d=""}){return h&&h!=="?"&&(i+=h.charAt(0)==="?"?h:"?"+h),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Ia(i){let h={};if(i){let d=i.indexOf("#");d>=0&&(h.hash=i.substring(d),i=i.substring(0,d));let r=i.indexOf("?");r>=0&&(h.search=i.substring(r),i=i.substring(0,r)),i&&(h.pathname=i)}return h}function ap(i,h,d,r={}){let{window:m=document.defaultView,v5Compat:p=!1}=r,k=m.history,A="POP",v=null,y=T();y==null&&(y=0,k.replaceState({...k.state,idx:y},""));function T(){return(k.state||{idx:null}).idx}function L(){A="POP";let J=T(),z=J==null?null:J-y;y=J,v&&v({action:A,location:V.location,delta:z})}function N(J,z){A="PUSH";let X=er(V.location,J,z);d&&d(X,J),y=T()+1;let H=Fh(X,y),ee=V.createHref(X);try{k.pushState(H,"",ee)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;m.location.assign(ee)}p&&v&&v({action:A,location:V.location,delta:1})}function G(J,z){A="REPLACE";let X=er(V.location,J,z);d&&d(X,J),y=T();let H=Fh(X,y),ee=V.createHref(X);k.replaceState(H,"",ee),p&&v&&v({action:A,location:V.location,delta:0})}function C(J){let z=m.location.origin!=="null"?m.location.origin:m.location.href,X=typeof J=="string"?J:ro(J);return X=X.replace(/ $/,"%20"),_e(z,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,z)}let V={get action(){return A},get location(){return i(m,k)},listen(J){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener($h,L),v=J,()=>{m.removeEventListener($h,L),v=null}},createHref(J){return h(m,J)},createURL:C,encodeLocation(J){let z=C(J);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:N,replace:G,go(J){return k.go(J)}};return V}function cm(i,h,d="/"){return lp(i,h,d,!1)}function lp(i,h,d,r){let m=typeof h=="string"?Ia(h):h,p=St(m.pathname||"/",d);if(p==null)return null;let k=dm(i);op(k);let A=null;for(let v=0;A==null&&v<k.length;++v){let y=pp(p);A=fp(k[v],y,r)}return A}function dm(i,h=[],d=[],r=""){let m=(p,k,A)=>{let v={relativePath:A===void 0?p.path||"":A,caseSensitive:p.caseSensitive===!0,childrenIndex:k,route:p};v.relativePath.startsWith("/")&&(_e(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length));let y=kt([r,v.relativePath]),T=d.concat(v);p.children&&p.children.length>0&&(_e(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),dm(p.children,h,T,y)),!(p.path==null&&!p.index)&&h.push({path:y,score:hp(y,p.index),routesMeta:T})};return i.forEach((p,k)=>{var A;if(p.path===""||!((A=p.path)!=null&&A.includes("?")))m(p,k);else for(let v of hm(p.path))m(p,k,v)}),h}function hm(i){let h=i.split("/");if(h.length===0)return[];let[d,...r]=h,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(r.length===0)return m?[p,""]:[p];let k=hm(r.join("/")),A=[];return A.push(...k.map(v=>v===""?p:[p,v].join("/"))),m&&A.push(...k),A.map(v=>i.startsWith("/")&&v===""?"/":v)}function op(i){i.sort((h,d)=>h.score!==d.score?d.score-h.score:mp(h.routesMeta.map(r=>r.childrenIndex),d.routesMeta.map(r=>r.childrenIndex)))}var ip=/^:[\w-]+$/,up=3,sp=2,rp=1,cp=10,dp=-2,Ph=i=>i==="*";function hp(i,h){let d=i.split("/"),r=d.length;return d.some(Ph)&&(r+=dp),h&&(r+=sp),d.filter(m=>!Ph(m)).reduce((m,p)=>m+(ip.test(p)?up:p===""?rp:cp),r)}function mp(i,h){return i.length===h.length&&i.slice(0,-1).every((r,m)=>r===h[m])?i[i.length-1]-h[h.length-1]:0}function fp(i,h,d=!1){let{routesMeta:r}=i,m={},p="/",k=[];for(let A=0;A<r.length;++A){let v=r[A],y=A===r.length-1,T=p==="/"?h:h.slice(p.length)||"/",L=Ti({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},T),N=v.route;if(!L&&y&&d&&!r[r.length-1].route.index&&(L=Ti({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!L)return null;Object.assign(m,L.params),k.push({params:m,pathname:kt([p,L.pathname]),pathnameBase:wp(kt([p,L.pathnameBase])),route:N}),L.pathnameBase!=="/"&&(p=kt([p,L.pathnameBase]))}return k}function Ti(i,h){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[d,r]=yp(i.path,i.caseSensitive,i.end),m=h.match(d);if(!m)return null;let p=m[0],k=p.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:r.reduce((y,{paramName:T,isOptional:L},N)=>{if(T==="*"){let C=A[N]||"";k=p.slice(0,p.length-C.length).replace(/(.)\/+$/,"$1")}const G=A[N];return L&&!G?y[T]=void 0:y[T]=(G||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:k,pattern:i}}function yp(i,h=!1,d=!0){Wn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(k,A,v)=>(r.push({paramName:A,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,h?void 0:"i"),r]}function pp(i){try{return i.split("/").map(h=>decodeURIComponent(h).replace(/\//g,"%2F")).join("/")}catch(h){return Wn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${h}).`),i}}function St(i,h){if(h==="/")return i;if(!i.toLowerCase().startsWith(h.toLowerCase()))return null;let d=h.endsWith("/")?h.length-1:h.length,r=i.charAt(d);return r&&r!=="/"?null:i.slice(d)||"/"}function gp(i,h="/"){let{pathname:d,search:r="",hash:m=""}=typeof i=="string"?Ia(i):i;return{pathname:d?d.startsWith("/")?d:vp(d,h):h,search:jp(r),hash:Ip(m)}}function vp(i,h){let d=h.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Xs(i,h,d,r){return`Cannot include a '${i}' character in a manually specified \`to.${h}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bp(i){return i.filter((h,d)=>d===0||h.route.path&&h.route.path.length>0)}function mm(i){let h=bp(i);return h.map((d,r)=>r===h.length-1?d.pathname:d.pathnameBase)}function fm(i,h,d,r=!1){let m;typeof i=="string"?m=Ia(i):(m={...i},_e(!m.pathname||!m.pathname.includes("?"),Xs("?","pathname","search",m)),_e(!m.pathname||!m.pathname.includes("#"),Xs("#","pathname","hash",m)),_e(!m.search||!m.search.includes("#"),Xs("#","search","hash",m)));let p=i===""||m.pathname==="",k=p?"/":m.pathname,A;if(k==null)A=d;else{let L=h.length-1;if(!r&&k.startsWith("..")){let N=k.split("/");for(;N[0]==="..";)N.shift(),L-=1;m.pathname=N.join("/")}A=L>=0?h[L]:"/"}let v=gp(m,A),y=k&&k!=="/"&&k.endsWith("/"),T=(p||k===".")&&d.endsWith("/");return!v.pathname.endsWith("/")&&(y||T)&&(v.pathname+="/"),v}var kt=i=>i.join("/").replace(/\/\/+/g,"/"),wp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),jp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Ip=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function kp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var ym=["POST","PUT","PATCH","DELETE"];new Set(ym);var Sp=["GET",...ym];new Set(Sp);var ol=b.createContext(null);ol.displayName="DataRouter";var Ei=b.createContext(null);Ei.displayName="DataRouterState";var pm=b.createContext({isTransitioning:!1});pm.displayName="ViewTransition";var xp=b.createContext(new Map);xp.displayName="Fetchers";var Ap=b.createContext(null);Ap.displayName="Await";var at=b.createContext(null);at.displayName="Navigation";var mo=b.createContext(null);mo.displayName="Location";var xt=b.createContext({outlet:null,matches:[],isDataRoute:!1});xt.displayName="Route";var or=b.createContext(null);or.displayName="RouteError";function qp(i,{relative:h}={}){_e(fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:r}=b.useContext(at),{hash:m,pathname:p,search:k}=yo(i,{relative:h}),A=p;return d!=="/"&&(A=p==="/"?d:kt([d,p])),r.createHref({pathname:A,search:k,hash:m})}function fo(){return b.useContext(mo)!=null}function ka(){return _e(fo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(mo).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(i){b.useContext(at).static||b.useLayoutEffect(i)}function Tp(){let{isDataRoute:i}=b.useContext(xt);return i?Yp():Ep()}function Ep(){_e(fo(),"useNavigate() may be used only in the context of a <Router> component.");let i=b.useContext(ol),{basename:h,navigator:d}=b.useContext(at),{matches:r}=b.useContext(xt),{pathname:m}=ka(),p=JSON.stringify(mm(r)),k=b.useRef(!1);return vm(()=>{k.current=!0}),b.useCallback((v,y={})=>{if(Wn(k.current,gm),!k.current)return;if(typeof v=="number"){d.go(v);return}let T=fm(v,JSON.parse(p),m,y.relative==="path");i==null&&h!=="/"&&(T.pathname=T.pathname==="/"?h:kt([h,T.pathname])),(y.replace?d.replace:d.push)(T,y.state,y)},[h,d,p,m,i])}b.createContext(null);function yo(i,{relative:h}={}){let{matches:d}=b.useContext(xt),{pathname:r}=ka(),m=JSON.stringify(mm(d));return b.useMemo(()=>fm(i,JSON.parse(m),r,h==="path"),[i,m,r,h])}function Mp(i,h){return bm(i,h)}function bm(i,h,d,r){var X;_e(fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m,static:p}=b.useContext(at),{matches:k}=b.useContext(xt),A=k[k.length-1],v=A?A.params:{},y=A?A.pathname:"/",T=A?A.pathnameBase:"/",L=A&&A.route;{let H=L&&L.path||"";wm(y,!L||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let N=ka(),G;if(h){let H=typeof h=="string"?Ia(h):h;_e(T==="/"||((X=H.pathname)==null?void 0:X.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${H.pathname}" was given in the \`location\` prop.`),G=H}else G=N;let C=G.pathname||"/",V=C;if(T!=="/"){let H=T.replace(/^\//,"").split("/");V="/"+C.replace(/^\//,"").split("/").slice(H.length).join("/")}let J=!p&&d&&d.matches&&d.matches.length>0?d.matches:cm(i,{pathname:V});Wn(L||J!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Wn(J==null||J[J.length-1].route.element!==void 0||J[J.length-1].route.Component!==void 0||J[J.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=Dp(J&&J.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:kt([T,m.encodeLocation?m.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?T:kt([T,m.encodeLocation?m.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),k,d,r);return h&&z?b.createElement(mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},z):z}function Cp(){let i=_p(),h=kp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),d=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},k=null;return console.error("Error handled by React Router default ErrorBoundary:",i),k=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},h),d?b.createElement("pre",{style:m},d):null,k)}var Op=b.createElement(Cp,null),Np=class extends b.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,h){return h.location!==i.location||h.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:h.error,location:h.location,revalidation:i.revalidation||h.revalidation}}componentDidCatch(i,h){console.error("React Router caught the following error during render",i,h)}render(){return this.state.error!==void 0?b.createElement(xt.Provider,{value:this.props.routeContext},b.createElement(or.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zp({routeContext:i,match:h,children:d}){let r=b.useContext(ol);return r&&r.static&&r.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=h.route.id),b.createElement(xt.Provider,{value:i},d)}function Dp(i,h=[],d=null,r=null){if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(h.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let m=i,p=d==null?void 0:d.errors;if(p!=null){let v=m.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);_e(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,v+1))}let k=!1,A=-1;if(d)for(let v=0;v<m.length;v++){let y=m[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(A=v),y.route.id){let{loaderData:T,errors:L}=d,N=y.route.loader&&!T.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||N){k=!0,A>=0?m=m.slice(0,A+1):m=[m[0]];break}}}return m.reduceRight((v,y,T)=>{let L,N=!1,G=null,C=null;d&&(L=p&&y.route.id?p[y.route.id]:void 0,G=y.route.errorElement||Op,k&&(A<0&&T===0?(wm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,C=null):A===T&&(N=!0,C=y.route.hydrateFallbackElement||null)));let V=h.concat(m.slice(0,T+1)),J=()=>{let z;return L?z=G:N?z=C:y.route.Component?z=b.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=v,b.createElement(zp,{match:y,routeContext:{outlet:v,matches:V,isDataRoute:d!=null},children:z})};return d&&(y.route.ErrorBoundary||y.route.errorElement||T===0)?b.createElement(Np,{location:d.location,revalidation:d.revalidation,component:G,error:L,children:J(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):J()},null)}function ir(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rp(i){let h=b.useContext(ol);return _e(h,ir(i)),h}function Bp(i){let h=b.useContext(Ei);return _e(h,ir(i)),h}function Lp(i){let h=b.useContext(xt);return _e(h,ir(i)),h}function ur(i){let h=Lp(i),d=h.matches[h.matches.length-1];return _e(d.route.id,`${i} can only be used on routes that contain a unique "id"`),d.route.id}function Up(){return ur("useRouteId")}function _p(){var r;let i=b.useContext(or),h=Bp("useRouteError"),d=ur("useRouteError");return i!==void 0?i:(r=h.errors)==null?void 0:r[d]}function Yp(){let{router:i}=Rp("useNavigate"),h=ur("useNavigate"),d=b.useRef(!1);return vm(()=>{d.current=!0}),b.useCallback(async(m,p={})=>{Wn(d.current,gm),d.current&&(typeof m=="number"?i.navigate(m):await i.navigate(m,{fromRouteId:h,...p}))},[i,h])}var em={};function wm(i,h,d){!h&&!em[i]&&(em[i]=!0,Wn(!1,d))}b.memo(Hp);function Hp({routes:i,future:h,state:d}){return bm(i,void 0,d,h)}function nr(i){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gp({basename:i="/",children:h=null,location:d,navigationType:r="POP",navigator:m,static:p=!1}){_e(!fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=i.replace(/^\/*/,"/"),A=b.useMemo(()=>({basename:k,navigator:m,static:p,future:{}}),[k,m,p]);typeof d=="string"&&(d=Ia(d));let{pathname:v="/",search:y="",hash:T="",state:L=null,key:N="default"}=d,G=b.useMemo(()=>{let C=St(v,k);return C==null?null:{location:{pathname:C,search:y,hash:T,state:L,key:N},navigationType:r}},[k,v,y,T,L,N,r]);return Wn(G!=null,`<Router basename="${k}"> is not able to match the URL "${v}${y}${T}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:b.createElement(at.Provider,{value:A},b.createElement(mo.Provider,{children:h,value:G}))}function Jp({children:i,location:h}){return Mp(tr(i),h)}function tr(i,h=[]){let d=[];return b.Children.forEach(i,(r,m)=>{if(!b.isValidElement(r))return;let p=[...h,m];if(r.type===b.Fragment){d.push.apply(d,tr(r.props.children,p));return}_e(r.type===nr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let k={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(k.children=tr(r.props.children,p)),d.push(k)}),d}var Ai="get",qi="application/x-www-form-urlencoded";function Mi(i){return i!=null&&typeof i.tagName=="string"}function Qp(i){return Mi(i)&&i.tagName.toLowerCase()==="button"}function Wp(i){return Mi(i)&&i.tagName.toLowerCase()==="form"}function Vp(i){return Mi(i)&&i.tagName.toLowerCase()==="input"}function Xp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Zp(i,h){return i.button===0&&(!h||h==="_self")&&!Xp(i)}var Si=null;function Kp(){if(Si===null)try{new FormData(document.createElement("form"),0),Si=!1}catch{Si=!0}return Si}var $p=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zs(i){return i!=null&&!$p.has(i)?(Wn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qi}"`),null):i}function Fp(i,h){let d,r,m,p,k;if(Wp(i)){let A=i.getAttribute("action");r=A?St(A,h):null,d=i.getAttribute("method")||Ai,m=Zs(i.getAttribute("enctype"))||qi,p=new FormData(i)}else if(Qp(i)||Vp(i)&&(i.type==="submit"||i.type==="image")){let A=i.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||A.getAttribute("action");if(r=v?St(v,h):null,d=i.getAttribute("formmethod")||A.getAttribute("method")||Ai,m=Zs(i.getAttribute("formenctype"))||Zs(A.getAttribute("enctype"))||qi,p=new FormData(A,i),!Kp()){let{name:y,type:T,value:L}=i;if(T==="image"){let N=y?`${y}.`:"";p.append(`${N}x`,"0"),p.append(`${N}y`,"0")}else y&&p.append(y,L)}}else{if(Mi(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ai,r=null,m=qi,k=i}return p&&m==="text/plain"&&(k=p,p=void 0),{action:r,method:d.toLowerCase(),encType:m,formData:p,body:k}}function sr(i,h){if(i===!1||i===null||typeof i>"u")throw new Error(h)}async function Pp(i,h){if(i.id in h)return h[i.id];try{let d=await import(i.module);return h[i.id]=d,d}catch(d){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eg(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ng(i,h,d){let r=await Promise.all(i.map(async m=>{let p=h.routes[m.route.id];if(p){let k=await Pp(p,d);return k.links?k.links():[]}return[]}));return og(r.flat(1).filter(eg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function nm(i,h,d,r,m,p){let k=(v,y)=>d[y]?v.route.id!==d[y].route.id:!0,A=(v,y)=>{var T;return d[y].pathname!==v.pathname||((T=d[y].route.path)==null?void 0:T.endsWith("*"))&&d[y].params["*"]!==v.params["*"]};return p==="assets"?h.filter((v,y)=>k(v,y)||A(v,y)):p==="data"?h.filter((v,y)=>{var L;let T=r.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(k(v,y)||A(v,y))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((L=d[0])==null?void 0:L.params)||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function tg(i,h,{includeHydrateFallback:d}={}){return ag(i.map(r=>{let m=h.routes[r.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function ag(i){return[...new Set(i)]}function lg(i){let h={},d=Object.keys(i).sort();for(let r of d)h[r]=i[r];return h}function og(i,h){let d=new Set;return new Set(h),i.reduce((r,m)=>{let p=JSON.stringify(lg(m));return d.has(p)||(d.add(p),r.push({key:p,link:m})),r},[])}function ig(i,h){let d=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return d.pathname==="/"?d.pathname="_root.data":h&&St(d.pathname,h)==="/"?d.pathname=`${h.replace(/\/$/,"")}/_root.data`:d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function jm(){let i=b.useContext(ol);return sr(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ug(){let i=b.useContext(Ei);return sr(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var rr=b.createContext(void 0);rr.displayName="FrameworkContext";function Im(){let i=b.useContext(rr);return sr(i,"You must render this element inside a <HydratedRouter> element"),i}function sg(i,h){let d=b.useContext(rr),[r,m]=b.useState(!1),[p,k]=b.useState(!1),{onFocus:A,onBlur:v,onMouseEnter:y,onMouseLeave:T,onTouchStart:L}=h,N=b.useRef(null);b.useEffect(()=>{if(i==="render"&&k(!0),i==="viewport"){let V=z=>{z.forEach(X=>{k(X.isIntersecting)})},J=new IntersectionObserver(V,{threshold:.5});return N.current&&J.observe(N.current),()=>{J.disconnect()}}},[i]),b.useEffect(()=>{if(r){let V=setTimeout(()=>{k(!0)},100);return()=>{clearTimeout(V)}}},[r]);let G=()=>{m(!0)},C=()=>{m(!1),k(!1)};return d?i!=="intent"?[p,N,{}]:[p,N,{onFocus:io(A,G),onBlur:io(v,C),onMouseEnter:io(y,G),onMouseLeave:io(T,C),onTouchStart:io(L,G)}]:[!1,N,{}]}function io(i,h){return d=>{i&&i(d),d.defaultPrevented||h(d)}}function rg({page:i,...h}){let{router:d}=jm(),r=b.useMemo(()=>cm(d.routes,i,d.basename),[d.routes,i,d.basename]);return r?b.createElement(dg,{page:i,matches:r,...h}):null}function cg(i){let{manifest:h,routeModules:d}=Im(),[r,m]=b.useState([]);return b.useEffect(()=>{let p=!1;return ng(i,h,d).then(k=>{p||m(k)}),()=>{p=!0}},[i,h,d]),r}function dg({page:i,matches:h,...d}){let r=ka(),{manifest:m,routeModules:p}=Im(),{basename:k}=jm(),{loaderData:A,matches:v}=ug(),y=b.useMemo(()=>nm(i,h,v,m,r,"data"),[i,h,v,m,r]),T=b.useMemo(()=>nm(i,h,v,m,r,"assets"),[i,h,v,m,r]),L=b.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let C=new Set,V=!1;if(h.forEach(z=>{var H;let X=m.routes[z.route.id];!X||!X.hasLoader||(!y.some(ee=>ee.route.id===z.route.id)&&z.route.id in A&&((H=p[z.route.id])!=null&&H.shouldRevalidate)||X.hasClientLoader?V=!0:C.add(z.route.id))}),C.size===0)return[];let J=ig(i,k);return V&&C.size>0&&J.searchParams.set("_routes",h.filter(z=>C.has(z.route.id)).map(z=>z.route.id).join(",")),[J.pathname+J.search]},[k,A,r,m,y,h,i,p]),N=b.useMemo(()=>tg(T,m),[T,m]),G=cg(T);return b.createElement(b.Fragment,null,L.map(C=>b.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...d})),N.map(C=>b.createElement("link",{key:C,rel:"modulepreload",href:C,...d})),G.map(({key:C,link:V})=>b.createElement("link",{key:C,...V})))}function hg(...i){return h=>{i.forEach(d=>{typeof d=="function"?d(h):d!=null&&(d.current=h)})}}var km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{km&&(window.__reactRouterVersion="7.4.0")}catch{}function mg({basename:i,children:h,window:d}){let r=b.useRef();r.current==null&&(r.current=np({window:d,v5Compat:!0}));let m=r.current,[p,k]=b.useState({action:m.action,location:m.location}),A=b.useCallback(v=>{b.startTransition(()=>k(v))},[k]);return b.useLayoutEffect(()=>m.listen(A),[m,A]),b.createElement(Gp,{basename:i,children:h,location:p.location,navigationType:p.action,navigator:m})}var Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ci=b.forwardRef(function({onClick:h,discover:d="render",prefetch:r="none",relative:m,reloadDocument:p,replace:k,state:A,target:v,to:y,preventScrollReset:T,viewTransition:L,...N},G){let{basename:C}=b.useContext(at),V=typeof y=="string"&&Sm.test(y),J,z=!1;if(typeof y=="string"&&V&&(J=y,km))try{let Q=new URL(window.location.href),B=y.startsWith("//")?new URL(Q.protocol+y):new URL(y),ae=St(B.pathname,C);B.origin===Q.origin&&ae!=null?y=ae+B.search+B.hash:z=!0}catch{Wn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=qp(y,{relative:m}),[H,ee,P]=sg(r,N),ye=gg(y,{replace:k,state:A,target:v,preventScrollReset:T,relative:m,viewTransition:L});function Ae(Q){h&&h(Q),Q.defaultPrevented||ye(Q)}let je=b.createElement("a",{...N,...P,href:J||X,onClick:z||p?h:Ae,ref:hg(G,ee),target:v,"data-discover":!V&&d==="render"?"true":void 0});return H&&!V?b.createElement(b.Fragment,null,je,b.createElement(rg,{page:X})):je});Ci.displayName="Link";var fg=b.forwardRef(function({"aria-current":h="page",caseSensitive:d=!1,className:r="",end:m=!1,style:p,to:k,viewTransition:A,children:v,...y},T){let L=yo(k,{relative:y.relative}),N=ka(),G=b.useContext(Ei),{navigator:C,basename:V}=b.useContext(at),J=G!=null&&Ig(L)&&A===!0,z=C.encodeLocation?C.encodeLocation(L).pathname:L.pathname,X=N.pathname,H=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(X=X.toLowerCase(),H=H?H.toLowerCase():null,z=z.toLowerCase()),H&&V&&(H=St(H,V)||H);const ee=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let P=X===z||!m&&X.startsWith(z)&&X.charAt(ee)==="/",ye=H!=null&&(H===z||!m&&H.startsWith(z)&&H.charAt(z.length)==="/"),Ae={isActive:P,isPending:ye,isTransitioning:J},je=P?h:void 0,Q;typeof r=="function"?Q=r(Ae):Q=[r,P?"active":null,ye?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let B=typeof p=="function"?p(Ae):p;return b.createElement(Ci,{...y,"aria-current":je,className:Q,ref:T,style:B,to:k,viewTransition:A},typeof v=="function"?v(Ae):v)});fg.displayName="NavLink";var yg=b.forwardRef(({discover:i="render",fetcherKey:h,navigate:d,reloadDocument:r,replace:m,state:p,method:k=Ai,action:A,onSubmit:v,relative:y,preventScrollReset:T,viewTransition:L,...N},G)=>{let C=wg(),V=jg(A,{relative:y}),J=k.toLowerCase()==="get"?"get":"post",z=typeof A=="string"&&Sm.test(A),X=H=>{if(v&&v(H),H.defaultPrevented)return;H.preventDefault();let ee=H.nativeEvent.submitter,P=(ee==null?void 0:ee.getAttribute("formmethod"))||k;C(ee||H.currentTarget,{fetcherKey:h,method:P,navigate:d,replace:m,state:p,relative:y,preventScrollReset:T,viewTransition:L})};return b.createElement("form",{ref:G,method:J,action:V,onSubmit:r?v:X,...N,"data-discover":!z&&i==="render"?"true":void 0})});yg.displayName="Form";function pg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xm(i){let h=b.useContext(ol);return _e(h,pg(i)),h}function gg(i,{target:h,replace:d,state:r,preventScrollReset:m,relative:p,viewTransition:k}={}){let A=Tp(),v=ka(),y=yo(i,{relative:p});return b.useCallback(T=>{if(Zp(T,h)){T.preventDefault();let L=d!==void 0?d:ro(v)===ro(y);A(i,{replace:L,state:r,preventScrollReset:m,relative:p,viewTransition:k})}},[v,A,y,d,r,h,i,m,p,k])}var vg=0,bg=()=>`__${String(++vg)}__`;function wg(){let{router:i}=xm("useSubmit"),{basename:h}=b.useContext(at),d=Up();return b.useCallback(async(r,m={})=>{let{action:p,method:k,encType:A,formData:v,body:y}=Fp(r,h);if(m.navigate===!1){let T=m.fetcherKey||bg();await i.fetch(T,d,m.action||p,{preventScrollReset:m.preventScrollReset,formData:v,body:y,formMethod:m.method||k,formEncType:m.encType||A,flushSync:m.flushSync})}else await i.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:v,body:y,formMethod:m.method||k,formEncType:m.encType||A,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[i,h,d])}function jg(i,{relative:h}={}){let{basename:d}=b.useContext(at),r=b.useContext(xt);_e(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),p={...yo(i||".",{relative:h})},k=ka();if(i==null){p.search=k.search;let A=new URLSearchParams(p.search),v=A.getAll("index");if(v.some(T=>T==="")){A.delete("index"),v.filter(L=>L).forEach(L=>A.append("index",L));let T=A.toString();p.search=T?`?${T}`:""}}return(!i||i===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:kt([d,p.pathname])),ro(p)}function Ig(i,h={}){let d=b.useContext(pm);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=xm("useViewTransitionState"),m=yo(i,{relative:h.relative});if(!d.isTransitioning)return!1;let p=St(d.currentLocation.pathname,r)||d.currentLocation.pathname,k=St(d.nextLocation.pathname,r)||d.nextLocation.pathname;return Ti(m.pathname,k)!=null||Ti(m.pathname,p)!=null}new TextEncoder;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,d,r)=>r?r.toUpperCase():d.toLowerCase()),tm=i=>{const h=Sg(i);return h.charAt(0).toUpperCase()+h.slice(1)},Am=(...i)=>i.filter((h,d,r)=>!!h&&h.trim()!==""&&r.indexOf(h)===d).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=b.forwardRef(({color:i="currentColor",size:h=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:m="",children:p,iconNode:k,...A},v)=>b.createElement("svg",{ref:v,...xg,width:h,height:h,stroke:i,strokeWidth:r?Number(d)*24/Number(h):d,className:Am("lucide",m),...A},[...k.map(([y,T])=>b.createElement(y,T)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(i,h)=>{const d=b.forwardRef(({className:r,...m},p)=>b.createElement(Ag,{ref:p,iconNode:h,className:Am(`lucide-${kg(tm(i))}`,`lucide-${i}`,r),...m}));return d.displayName=tm(i),d};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],am=me("arrow-up-down",qg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],lm=me("audio-waveform",Tg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],Mg=me("baby",Eg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Og=me("book-open",Cg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qm=me("chevron-down",Ng);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Tm=me("chevron-up",zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ks=me("circle-check-big",Dg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],uo=me("circle-help",Rg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],om=me("clock",Bg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Ug=me("download",Lg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],Yg=me("fast-forward",_g);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Gg=me("funnel",Hg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Qg=me("grid-3x3",Jg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],im=me("headphones",Wg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Xg=me("house",Vg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Em=me("info",Zg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],$g=me("list",Kg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],so=me("medal",Fg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],ev=me("mic",Pg);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ja=me("music",nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],co=me("pause",tv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],ar=me("play",av);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ov=me("plus",lv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],uv=me("rewind",iv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],rv=me("rotate-ccw",sv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],$s=me("search",cv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],hv=me("shuffle",dv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],fv=me("skip-forward",mv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],pv=me("skull",yv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],vv=me("sliders-vertical",gv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],wv=me("table",bv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],Iv=me("timer-off",jv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],Sv=me("timer-reset",kv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Av=me("timer",xv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Tv=me("trash-2",qv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Fs=me("trophy",Ev);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Cv=me("users",Mv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],cr=me("volume-2",Ov);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Mm=me("volume-x",Nv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ho=me("x",zv);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ps=me("zap",Dv),Rv=()=>u.jsx("main",{className:"accueil",children:u.jsxs("div",{className:"accueil-container",children:[u.jsxs("header",{className:"accueil-header",children:[u.jsx(ja,{className:"logo",size:48}),u.jsx("h1",{children:"BlindTest Master"})]}),u.jsxs("section",{className:"intro",children:[u.jsx("p",{children:"Testez vos connaissances musicales avec notre jeu de blindtest interactif !"}),u.jsx("p",{children:"Trois manches passionnantes avec une difficulté croissante et des défis amusants."})]}),u.jsxs("section",{className:"manches-preview",children:[u.jsxs("div",{className:"manche-card",children:[u.jsx("h3",{children:"Manche 1"}),u.jsx("p",{children:"Easy BlindTest"}),u.jsx("span",{className:"emoji",children:"🎵"})]}),u.jsxs("div",{className:"manche-card",children:[u.jsx("h3",{children:"Manche 2"}),u.jsx("p",{children:"dnilBtseT"}),u.jsx("span",{className:"emoji",children:"🎙️"})]}),u.jsxs("div",{className:"manche-card",children:[u.jsx("h3",{children:"Manche 3"}),u.jsx("p",{children:"X-trem BlindTest"}),u.jsx("span",{className:"emoji",children:"🔀"})]})]}),u.jsx(Ci,{to:"/jeu",className:"start-button",children:"Commencer le Jeu"})]})}),Bv=({manche:i})=>i?u.jsxs("section",{className:"info-manche",children:[u.jsxs("div",{className:"manche-header",children:[u.jsx("span",{className:"manche-emoji",children:i.emoji}),u.jsxs("h2",{children:["Manche ",i.id,": ",i.nom]})]}),u.jsxs("div",{className:"manche-details",children:[u.jsx("p",{children:i.description}),u.jsx("p",{className:"points-info",children:i.points})]})]}):null,Lv=({chanson:i,afficherTitre:h,afficherArtiste:d,afficherParoles:r,mancheActuelle:m,isModifiedAudio:p,onVerify:k=()=>{}})=>{const[A,v]=b.useState(!1),[y,T]=b.useState(!1),[L,N]=b.useState(!1),[G,C]=b.useState(0),[V,J]=b.useState(0),[z,X]=b.useState(!1),H=b.useRef(null),ee=b.useRef(null),P=b.useRef(null);if(b.useEffect(()=>{if(i){const q=H.current;if(q){const $=()=>C(q.currentTime),Z=()=>J(q.duration),ie=()=>v(!1);return q.addEventListener("timeupdate",$),q.addEventListener("loadedmetadata",Z),q.addEventListener("ended",ie),()=>{q.removeEventListener("timeupdate",$),q.removeEventListener("loadedmetadata",Z),q.removeEventListener("ended",ie)}}}},[i]),b.useEffect(()=>{if(ee.current){const q=()=>T(!1);return ee.current.addEventListener("ended",q),()=>{ee.current&&ee.current.removeEventListener("ended",q)}}},[ee.current]),b.useEffect(()=>{X(!1)},[i]),!i)return null;const ye=()=>{H.current&&(A?H.current.pause():(y&&ee.current&&(ee.current.pause(),T(!1)),H.current.play().catch(q=>console.error("Erreur lors de la lecture audio:",q))),v(!A))},Ae=()=>{ee.current&&(y?ee.current.pause():(A&&H.current&&(H.current.pause(),v(!1)),ee.current.play().catch(q=>console.error("Erreur lors de la lecture audio normal:",q))),T(!y))},je=()=>{H.current&&(H.current.muted=!L,ee.current&&(ee.current.muted=!L),N(!L))},Q=q=>{if(isNaN(q))return"0:00";const $=Math.floor(q/60),Z=Math.floor(q%60).toString().padStart(2,"0");return`${$}:${Z}`},B=()=>{const q=document.createElement("a");q.href=i.audioUrl,q.download=`${i.artiste} - ${i.titre}.mp3`,document.body.appendChild(q),q.click(),document.body.removeChild(q)},ae=q=>{if(H.current&&V){const Z=q.currentTarget.getBoundingClientRect(),g=(q.clientX-Z.left)/Z.width*V;H.current.currentTime=g,C(g)}},ce=q=>{if(P.current&&H.current&&V){const $=P.current.getBoundingClientRect(),ie=Math.max(0,Math.min(1,(q.clientX-$.left)/$.width))*V;H.current.currentTime=ie,C(ie)}},ze=q=>{ae(q);const $=ie=>{ce(ie)},Z=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",Z)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",Z)},Pe=()=>{X(!0),k(i);const q=document.querySelector(".normal-audio-info");q&&(q.classList.add("verified"),setTimeout(()=>{q.classList.remove("verified")},1e3))},F=()=>{switch(m){case 2:return"Version inversée";case 3:return"Version modifiée";default:return""}};return u.jsxs("div",{className:"affichage-chanson",children:[u.jsx("audio",{ref:H,src:i.audioUrl,onEnded:()=>v(!1)}),u.jsxs("div",{className:"chanson-info",children:[h&&u.jsx("h2",{className:"chanson-titre",children:i.titre}),d&&u.jsx("h3",{className:"chanson-artiste",children:i.artiste}),u.jsxs("div",{className:"chanson-player",children:[p&&u.jsx("div",{className:"player-badge",children:F()}),u.jsxs("div",{className:"player-controls",children:[u.jsx("button",{className:"control-button play-pause",onClick:ye,"aria-label":A?"Pause":"Lecture",children:A?u.jsx(co,{size:20}):u.jsx(ar,{size:20})}),u.jsxs("div",{className:"progress-container",children:[u.jsx("div",{className:"time current-time",children:Q(G)}),u.jsx("div",{className:"progress-bar",ref:P,onClick:ae,onMouseDown:ze,children:u.jsx("div",{className:"progress-fill",style:{width:`${V?G/V*100:0}%`}})}),u.jsx("div",{className:"time duration",children:Q(V)})]}),u.jsx("button",{className:"control-button mute",onClick:je,"aria-label":L?"Activer le son":"Couper le son",children:L?u.jsx(Mm,{size:20}):u.jsx(cr,{size:20})}),u.jsx("button",{className:"control-button download",onClick:B,"aria-label":"Télécharger",children:u.jsx(Ug,{size:20})})]})]})]}),p&&u.jsxs("div",{className:"normal-audio-player",children:[u.jsxs("div",{className:"normal-player-header",children:[u.jsx("h4",{children:"Version normale"}),u.jsxs("div",{className:"normal-player-actions",children:[u.jsxs("button",{className:`normal-play-button ${y?"playing":""}`,onClick:Ae,children:[y?u.jsx(co,{size:16}):u.jsx(ar,{size:16}),u.jsx("span",{children:y?"Pause":"Écouter"})]}),!z&&u.jsxs("button",{className:"verify-button",onClick:Pe,children:[u.jsx(Em,{size:16}),u.jsx("span",{children:"Vérifier"})]})]})]}),u.jsx("audio",{ref:ee,src:i.audioUrl,onEnded:()=>T(!1),className:"hidden-audio"}),u.jsxs("div",{className:"normal-audio-info",children:[u.jsx(ja,{size:20}),u.jsx("span",{children:z?`Titre: ${i.titre} - Artiste: ${i.artiste}`:"Écoutez la version originale pour comparer"})]})]}),r&&i.paroles&&u.jsxs("div",{className:"chanson-paroles",children:[u.jsx("h4",{children:"Paroles"}),u.jsx("div",{className:"paroles-content",children:i.paroles.split(`
`).map((q,$)=>u.jsx("p",{children:q||u.jsx("br",{})},$))})]})]})},Uv=({teams:i=[],onAddTeam:h,onRemoveTeam:d,onAddPoints:r})=>{const[m,p]=b.useState(""),[k,A]=b.useState(!1),[v,y]=b.useState({}),[T,L]=b.useState({}),[N,G]=b.useState(!1),[C,V]=b.useState(null),J=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"];b.useEffect(()=>{const B={};i.forEach(ae=>{B[ae.id]=ae.score}),L(B)},[i]);const z=()=>{if(m.trim()==="")return;const B={id:Date.now().toString(),name:m,score:0,color:J[i.length%J.length]};h(B),p("")},X=B=>{B.key==="Enter"&&z()},H=()=>{A(!0)},ee=()=>{A(!1),V(null)},P=()=>{G(!N)},ye=B=>{V(C===B?null:B)},Ae=(B,ae)=>{L(ce=>({...ce,[B]:(ce[B]||0)+ae})),r(B,ae),y(ce=>({...ce,[B]:ae})),setTimeout(()=>{y(ce=>{const ze={...ce};return delete ze[B],ze})},1e3)},je=[...i].sort((B,ae)=>ae.score-B.score),Q=B=>{var ae;return T[B]!==void 0?T[B]:((ae=i.find(ce=>ce.id===B))==null?void 0:ae.score)||0};return u.jsxs("div",{className:"team-manager-container",children:[u.jsxs("button",{className:"team-manager-button",onClick:H,children:[u.jsx(Fs,{size:20}),u.jsx("span",{children:"Équipes & Scores"})]}),u.jsxs("button",{className:"leaderboard-floating-button",onClick:P,children:[u.jsx(so,{size:20}),u.jsx("span",{children:"Classement"})]}),N&&u.jsxs("div",{className:"floating-leaderboard",children:[u.jsxs("div",{className:"floating-leaderboard-header",children:[u.jsx("h3",{children:"Classement"}),u.jsx("button",{className:"close-leaderboard",onClick:P,children:u.jsx(ho,{size:18})})]}),je.length>0?u.jsx("div",{className:"floating-leaderboard-content",children:je.map((B,ae)=>u.jsxs("div",{className:`floating-leaderboard-item ${ae===0?"first-place":ae===1?"second-place":ae===2?"third-place":""}`,children:[u.jsxs("div",{className:"leaderboard-position",children:[ae===0&&u.jsx(Fs,{size:16,className:"gold-trophy"}),ae===1&&u.jsx(so,{size:16,className:"silver-medal"}),ae===2&&u.jsx(so,{size:16,className:"bronze-medal"}),ae>2&&u.jsxs("span",{children:["#",ae+1]})]}),u.jsx("div",{className:"leaderboard-team-color",style:{backgroundColor:B.color}}),u.jsx("div",{className:"leaderboard-team-name",children:B.name}),u.jsx("div",{className:"leaderboard-team-score",children:Q(B.id)})]},B.id))}):u.jsx("div",{className:"floating-leaderboard-empty",children:u.jsx("p",{children:"Aucune équipe"})})]}),k&&u.jsx("div",{className:"team-modal-overlay",onClick:ee,children:u.jsxs("div",{className:"team-modal",onClick:B=>B.stopPropagation(),children:[u.jsx("button",{className:"close-modal",onClick:ee,children:u.jsx(ho,{size:24})}),u.jsx("div",{className:"modal-header",children:u.jsx("h2",{children:"Gestion des Équipes & Scores"})}),u.jsxs("div",{className:"unified-team-tab",children:[u.jsxs("div",{className:"add-team-form",children:[u.jsx("input",{type:"text",value:m,onChange:B=>p(B.target.value),onKeyDown:X,placeholder:"Nom de l'équipe",maxLength:20}),u.jsxs("button",{className:"add-team-button",onClick:z,disabled:m.trim()==="",children:[u.jsx(ov,{size:16}),"Ajouter une équipe"]})]}),i.length>0?u.jsx("div",{className:"teams-list",children:je.map((B,ae)=>u.jsxs("div",{className:`team-item ${C===B.id?"expanded":""} ${ae===0?"first-place":ae===1?"second-place":ae===2?"third-place":""}`,children:[u.jsxs("div",{className:"team-item-header",onClick:()=>ye(B.id),children:[u.jsxs("div",{className:"team-rank",children:[ae===0&&u.jsx(Fs,{size:16,className:"gold-trophy"}),ae===1&&u.jsx(so,{size:16,className:"silver-medal"}),ae===2&&u.jsx(so,{size:16,className:"bronze-medal"}),ae>2&&u.jsxs("span",{className:"rank-number",children:["#",ae+1]})]}),u.jsx("div",{className:"team-color",style:{backgroundColor:B.color}}),u.jsx("div",{className:"team-name",children:B.name}),u.jsxs("div",{className:"team-score-display",children:[u.jsx("span",{className:"score-value",children:Q(B.id)}),v[B.id]&&u.jsx("span",{className:`score-animation ${v[B.id]<0?"negative":"positive"}`,children:v[B.id]>0?`+${v[B.id]}`:v[B.id]})]}),u.jsx("button",{className:"expand-toggle",children:C===B.id?u.jsx(Tm,{size:18}):u.jsx(qm,{size:18})})]}),C===B.id&&u.jsx("div",{className:"team-actions",children:u.jsxs("div",{className:"team-actions-inner",children:[u.jsxs("div",{className:"point-buttons",children:[u.jsx("h4",{children:"Ajouter des points"}),u.jsx("div",{className:"point-buttons-grid",children:[1,3,4,-1].map(ce=>u.jsx("button",{className:`point-button ${ce<0?"negative":""}`,style:{backgroundColor:ce<0?"#ffeeee":`${B.color}20`,borderColor:ce<0?"#e74c3c":B.color,color:ce<0?"#e74c3c":void 0},onClick:()=>Ae(B.id,ce),children:ce>0?`+${ce}`:ce},ce))})]}),u.jsxs("button",{className:"delete-team-button",onClick:()=>d(B.id),children:[u.jsx(Tv,{size:16}),u.jsx("span",{children:"Supprimer l'équipe"})]})]})})]},B.id))}):u.jsxs("div",{className:"no-teams",children:[u.jsx("p",{children:"Aucune équipe ajoutée"}),u.jsx("p",{children:"Créez des équipes pour commencer à jouer!"})]})]})]})})]})},_v=({onEffectsChange:i,isExpanded:h,toggleExpanded:d,currentEffects:r,isPlaying:m,mancheActuelle:p})=>{const[k,A]=b.useState(r.distortion||5e3),[v,y]=b.useState(r.pitchShift||.6),[T,L]=b.useState(r.wahFrequency||1),[N,G]=b.useState(r.wahDepth||.3),[C,V]=b.useState(r.growlAmount||.03),[J,z]=b.useState(null),[X,H]=b.useState(!0),[ee,P]=b.useState(5),ye=b.useRef(null),Ae=b.useRef(!0),je=b.useRef(null),Q=b.useRef(!1);b.useEffect(()=>{if(p!==3||!m||!X){clearInterval(ye.current),ye.current=null;return}if(!Q.current)return ye.current||(P(5),ye.current=setInterval(()=>{P(D=>D<=1?(Q.current||$(),5):D-1)},1e3)),()=>{clearInterval(ye.current),ye.current=null}},[p,m,X,Q.current]),b.useEffect(()=>{if(Ae.current){Ae.current=!1;return}A(r.distortion),y(r.pitchShift),L(r.wahFrequency),G(r.wahDepth),V(r.growlAmount)},[r]);const B=()=>{Q.current=!0,je.current&&clearTimeout(je.current),je.current=setTimeout(()=>{Q.current=!1},1e4)},ae=D=>{B();const _=Number.parseInt(D.target.value);A(_),i({distortion:_,pitchShift:v,wahFrequency:T,wahDepth:N,growlAmount:C})},ce=D=>{B();const _=Number.parseFloat(D.target.value);y(_),i({distortion:k,pitchShift:_,wahFrequency:T,wahDepth:N,growlAmount:C})},ze=D=>{B();const _=Number.parseFloat(D.target.value);L(_),i({distortion:k,pitchShift:v,wahFrequency:_,wahDepth:N,growlAmount:C})},Pe=D=>{B();const _=Number.parseFloat(D.target.value);G(_),i({distortion:k,pitchShift:v,wahFrequency:T,wahDepth:_,growlAmount:C})},F=D=>{B();const _=Number.parseFloat(D.target.value);V(_),i({distortion:k,pitchShift:v,wahFrequency:T,wahDepth:N,growlAmount:_})},q=()=>{B();const D={distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03};A(D.distortion),y(D.pitchShift),L(D.wahFrequency),G(D.wahDepth),V(D.growlAmount),i(D)},$=()=>{const D={distortion:Math.floor(Math.random()*4e4)+5e3,pitchShift:Math.random()>.5?Math.random()*2.5+1.5:Math.random()*.3+.05,wahFrequency:Math.random()*3+.5,wahDepth:Math.random()*.3+.1,growlAmount:Math.random()*.3};A(D.distortion),y(D.pitchShift),L(D.wahFrequency),G(D.wahDepth),V(D.growlAmount),i(D)},Z=()=>{B();const D={distortion:6e4,pitchShift:Math.random()>.5?3.5:.05,wahFrequency:5,wahDepth:.4,growlAmount:.5};A(D.distortion),y(D.pitchShift),L(D.wahFrequency),G(D.wahDepth),V(D.growlAmount),i(D)},ie=()=>{B();const D={...r,pitchShift:.2};y(D.pitchShift),i(D)},g=()=>{B();const D={...r,pitchShift:3.5};y(D.pitchShift),i(D)},E=()=>{H(!X)},W={distortion:"Déforme le son. Valeur élevée = son saturé et méconnaissable.",pitchShift:"Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",wahFrequency:"Vitesse d'oscillation du filtre wah-wah.",wahDepth:"Intensité de l'effet wah-wah.",growlAmount:"Ajoute des craquements et perturbations aléatoires."};return u.jsxs("div",{className:`audio-effects-controller ${h?"expanded":"collapsed"}`,children:[u.jsxs("div",{className:"effects-header",onClick:d,children:[u.jsx(vv,{size:16}),u.jsx("h3",{children:"Effets Audio"}),p===3&&m&&X&&u.jsx("div",{className:"auto-change-indicator",children:u.jsxs("span",{className:"countdown",children:[ee,"s"]})}),u.jsx("span",{className:"toggle-icon",children:h?u.jsx(qm,{size:14}):u.jsx(Tm,{size:14})})]}),h&&u.jsxs("div",{className:"effects-content",children:[p===3&&u.jsxs("div",{className:"auto-change-toggle",children:[u.jsx("button",{className:`auto-change-button ${X?"active":""}`,onClick:E,title:X?"Désactiver le changement automatique":"Activer le changement automatique",children:X?u.jsxs(u.Fragment,{children:[u.jsx(om,{size:14}),u.jsx("span",{children:"Auto (ON)"})]}):u.jsxs(u.Fragment,{children:[u.jsx(om,{size:14}),u.jsx("span",{children:"Auto (OFF)"})]})}),u.jsx("div",{className:"auto-change-info",children:X?"Les effets changent automatiquement toutes les 5 secondes":"Changement automatique désactivé"})]}),u.jsxs("div",{className:"voice-presets",children:[u.jsxs("button",{className:"voice-preset deep",onClick:ie,children:[u.jsx(pv,{size:14}),u.jsx("span",{children:"Monstre"})]}),u.jsxs("button",{className:"voice-preset chipmunk",onClick:g,children:[u.jsx(Mg,{size:14}),u.jsx("span",{children:"Chipmunk"})]})]}),u.jsxs("div",{className:"effect-group",children:[u.jsxs("label",{className:"effect-label",children:[u.jsx(Ps,{size:14}),u.jsx("span",{children:"Distorsion"}),u.jsxs("span",{className:"help-container",children:[u.jsx(uo,{size:14,className:"help-icon",onMouseEnter:()=>z("distortion"),onMouseLeave:()=>z(null)}),u.jsx("span",{className:"effect-value",children:k})]}),J==="distortion"&&u.jsx("div",{className:"tooltip",children:W.distortion})]}),u.jsx("input",{type:"range",min:"1000",max:"70000",step:"1000",value:k,onChange:ae,className:"effect-slider"})]}),u.jsxs("div",{className:"effect-group",children:[u.jsxs("label",{className:"effect-label",children:[u.jsx(cr,{size:14}),u.jsx("span",{children:"Hauteur"}),u.jsxs("span",{className:"help-container",children:[u.jsx(uo,{size:14,className:"help-icon",onMouseEnter:()=>z("pitchShift"),onMouseLeave:()=>z(null)}),u.jsx("span",{className:"effect-value",children:v.toFixed(2)})]}),J==="pitchShift"&&u.jsx("div",{className:"tooltip",children:W.pitchShift})]}),u.jsx("input",{type:"range",min:"0.05",max:"4.0",step:"0.05",value:v,onChange:ce,className:"effect-slider"})]}),u.jsxs("div",{className:"effect-group",children:[u.jsxs("label",{className:"effect-label",children:[u.jsx(lm,{size:14}),u.jsx("span",{children:"Wah-Freq"}),u.jsxs("span",{className:"help-container",children:[u.jsx(uo,{size:14,className:"help-icon",onMouseEnter:()=>z("wahFrequency"),onMouseLeave:()=>z(null)}),u.jsx("span",{className:"effect-value",children:T.toFixed(1)})]}),J==="wahFrequency"&&u.jsx("div",{className:"tooltip",children:W.wahFrequency})]}),u.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:T,onChange:ze,className:"effect-slider"})]}),u.jsxs("div",{className:"effect-group",children:[u.jsxs("label",{className:"effect-label",children:[u.jsx(lm,{size:14}),u.jsx("span",{children:"Wah-Prof"}),u.jsxs("span",{className:"help-container",children:[u.jsx(uo,{size:14,className:"help-icon",onMouseEnter:()=>z("wahDepth"),onMouseLeave:()=>z(null)}),u.jsx("span",{className:"effect-value",children:N.toFixed(2)})]}),J==="wahDepth"&&u.jsx("div",{className:"tooltip",children:W.wahDepth})]}),u.jsx("input",{type:"range",min:"0.1",max:"0.5",step:"0.01",value:N,onChange:Pe,className:"effect-slider"})]}),u.jsxs("div",{className:"effect-group",children:[u.jsxs("label",{className:"effect-label",children:[u.jsx(Ps,{size:14}),u.jsx("span",{children:"Grognement"}),u.jsxs("span",{className:"help-container",children:[u.jsx(uo,{size:14,className:"help-icon",onMouseEnter:()=>z("growlAmount"),onMouseLeave:()=>z(null)}),u.jsxs("span",{className:"effect-value",children:[(C*100).toFixed(0),"%"]})]}),J==="growlAmount"&&u.jsx("div",{className:"tooltip",children:W.growlAmount})]}),u.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:C,onChange:F,className:"effect-slider"})]}),u.jsxs("div",{className:"effects-buttons",children:[u.jsxs("button",{className:"random-button",onClick:$,children:[u.jsx(hv,{size:14}),"Aléatoire"]}),u.jsxs("button",{className:"extreme-button",onClick:Z,children:[u.jsx(Ps,{size:14}),"Extrême"]}),u.jsxs("button",{className:"reset-button",onClick:q,children:[u.jsx(rv,{size:14}),"Réinitialiser"]})]})]})]})},um=[{id:1,nom:"Easy BlindTest",description:"Devinez le plus vite possible le titre et/ou l'artiste de la chanson",emoji:"🎵",points:"1 point pour l'artiste, 1 point pour le titre",effet:null},{id:2,nom:"dnilBtseT",description:"Devine la chanson... jouée à l'envers",emoji:"🔄",points:"3 points pour l'artiste, 3 points pour le titre",effet:"inverse"},{id:3,nom:"X-trem BlindTest",description:"Devine la chanson cachée dans les effets sonores improbables...",emoji:"👹",points:"4 points pour l'artiste, 4 points pour le titre",effet:"monstre"}],xi=[{id:1,titre:"L'effet de Masse",artiste:"Maëlle",audioUrl:"./audio/Maelle-LeffetDeMasse.mp3",paroles:`Il était dans ma classe, il vivait dans ta rue
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
Qu'y a-t-il au-delà ?`},{id:115,titre:"",artiste:"",audioUrl:"./audio/",paroles:""},{id:116,titre:"",artiste:"",audioUrl:"./audio/",paroles:""},{id:117,titre:"",artiste:"",audioUrl:"./audio/",paroles:""},{id:118,titre:"",artiste:"",audioUrl:"./audio/",paroles:""}],Yv=()=>{const[i,h]=b.useState(!1),[d,r]=b.useState("general"),m=()=>h(!0),p=()=>h(!1);return u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"regles-button",onClick:m,children:[u.jsx(Og,{size:20}),u.jsx("span",{children:"Règles du jeu"})]}),i&&u.jsx("div",{className:"regles-overlay",onClick:p,children:u.jsxs("div",{className:"regles-modal",onClick:k=>k.stopPropagation(),children:[u.jsx("button",{className:"regles-close",onClick:p,children:u.jsx(ho,{size:24})}),u.jsxs("div",{className:"regles-header",children:[u.jsx("h2",{children:"Règles du BlindTest Master"}),u.jsx("p",{children:"Tout ce que tu dois savoir pour jouer"})]}),u.jsxs("div",{className:"regles-tabs",children:[u.jsxs("button",{className:`regles-tab ${d==="general"?"active":""}`,onClick:()=>r("general"),children:[u.jsx(Em,{size:18}),u.jsx("span",{children:"Général"})]}),u.jsxs("button",{className:`regles-tab ${d==="manches"?"active":""}`,onClick:()=>r("manches"),children:[u.jsx(ja,{size:18}),u.jsx("span",{children:"Manches & Points"})]}),u.jsxs("button",{className:`regles-tab ${d==="equipes"?"active":""}`,onClick:()=>r("equipes"),children:[u.jsx(Cv,{size:18}),u.jsx("span",{children:"Équipes & Temps"})]})]}),u.jsxs("div",{className:"regles-content",children:[d==="general"&&u.jsxs("div",{className:"regles-section",children:[u.jsx("h3",{children:"Principe du jeu"}),u.jsxs("p",{children:[u.jsx("i",{children:"BlindTest Master"})," est un jeu musical où les joueurs doivent deviner le titre et/ou l'artiste d'une chanson jouée. Le jeu se déroule en plusieurs manches avec différents niveaux de difficulté."]}),u.jsx("h3",{children:"Objectif"}),u.jsx("p",{children:"Obtenir le maximum de points en identifiant correctement les chansons jouées. L'équipe avec le plus de points à la fin de toutes les manches remporte la partie."}),u.jsxs("div",{className:"buzzer-rule",children:[u.jsx("div",{className:"buzzer-icon",children:u.jsx(ev,{size:24})}),u.jsxs("div",{className:"buzzer-content",children:[u.jsx("h3",{children:"Règle du micro-buzzer"}),u.jsx("p",{children:"Pour répondre, une équipe doit d'abord attraper le micro-buzzer. La première équipe qui s'empare du micro a le droit de proposer sa réponse. Si la réponse est incorrecte, les autres équipes peuvent alors tenter leur chance."})]})]}),u.jsx("h3",{children:"Déroulement"}),u.jsxs("p",{children:["1. Formez des équipes et donnez-leur un nom",u.jsx("br",{}),"2. Jouez les chansons une par une",u.jsx("br",{}),"3. L'équipe qui attrape le micro-buzzer en premier peut répondre",u.jsx("br",{}),"4. Les équipes qui devinent correctement gagnent des points",u.jsx("br",{}),"5. Passez à travers les différentes manches",u.jsx("br",{}),"6. L'équipe avec le plus de points à la fin gagne"]})]}),d==="manches"&&u.jsxs("div",{className:"regles-section",children:[u.jsx("h3",{children:"Les différentes manches"}),u.jsxs("div",{className:"manche-card",children:[u.jsxs("div",{className:"manche-header",children:[u.jsx("span",{className:"manche-number",children:"1"}),u.jsx("span",{className:"manche-emoji",children:"🎵"}),u.jsx("h4",{children:"Easy BlindTest"})]}),u.jsx("p",{children:"Les chansons sont jouées normalement. Les joueurs doivent identifier le titre et l'artiste."}),u.jsxs("div",{className:"points-info",children:[u.jsx("strong",{children:"Points :"})," +1 pour le titre, +1 pour l'artiste"]})]}),u.jsxs("div",{className:"manche-card",children:[u.jsxs("div",{className:"manche-header",children:[u.jsx("span",{className:"manche-number",children:"2"}),u.jsx("span",{className:"manche-emoji",children:"🔄"}),u.jsx("h4",{children:"dnilBtseT"})]}),u.jsx("p",{children:"Les chansons sont jouées à l'envers. Les joueurs doivent reconnaître la mélodie malgré l'inversion."}),u.jsxs("div",{className:"points-info",children:[u.jsx("strong",{children:"Points :"})," +3 pour le titre, +3 pour l'artiste"]})]}),u.jsxs("div",{className:"manche-card",children:[u.jsxs("div",{className:"manche-header",children:[u.jsx("span",{className:"manche-number",children:"3"}),u.jsx("span",{className:"manche-emoji",children:"👹"}),u.jsx("h4",{children:"X-trem BlindTest"})]}),u.jsx("p",{children:"Les chansons sont déformées avec des effets audio. C'est la manche la plus difficile où il faut vraiment avoir une sacrée bonne oreille..."}),u.jsxs("div",{className:"points-info",children:[u.jsx("strong",{children:"Points :"})," +4 pour le titre, +4 pour l'artiste"]})]}),u.jsxs("div",{className:"points-card malus",children:[u.jsx("h4",{children:"Malus"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"1 point seulement"})," : Réponse donnée après le temps"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"-1 point"})," : Réponse incorrecte"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"-2 points"})," : Règles non-respectées (ex: répondre sans avoir le micro-buzzer)"]})]})]}),u.jsx("p",{className:"points-note",children:"Note : Tu peux modifier ces valeurs pour rendre le jeu plus ou moins compétitif."})]}),d==="equipes"&&u.jsxs("div",{className:"regles-section",children:[u.jsx("h3",{children:"Gestion des équipes"}),u.jsx("h4",{children:"Création des équipes"}),u.jsxs("p",{children:["Crée autant d'équipes que tu le souhaites en cliquant sur le bouton ",u.jsx("i",{children:'"Équipes & Scores"'}),". Donne un nom à chaque équipe. Chaque équipe recevra automatiquement une couleur distinctive."]}),u.jsx("h4",{children:"Nombre de joueurs"}),u.jsx("p",{children:"Il n'y a pas de limite au nombre de joueurs par équipe. Tu peux jouer avec :"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Plusieurs équipes de plusieurs joueurs"}),u.jsx("li",{children:'Plusieurs joueurs individuels (chacun étant sa propre "équipe")'})]}),u.jsx("h4",{children:"Classement"}),u.jsxs("p",{children:["Le classement des équipes est visible à tout moment en cliquant sur le bouton ",u.jsx("i",{children:'"Classement"'}),". Les trois premières équipes sont mises en évidence avec des médailles d'or, d'argent et de bronze."]}),u.jsx("h3",{children:"Gestion du temps"}),u.jsx("h4",{children:"Durée d'écoute"}),u.jsx("p",{children:"Chaque chanson peut être écoutée pendant un maximum de 25 secondes. La réponse doit être donnée durant ce temps imparti."}),u.jsx("h4",{children:"Temps de réponse"}),u.jsx("p",{children:"Après avoir attrapé le micro-buzzer, l'équipe dispose de 5 secondes pour donner sa réponse. Si elle ne répond pas correctement, le micro-buzzer est remis en jeu pour les autres équipes."}),u.jsx("div",{className:"time-warning",children:u.jsxs("p",{children:[u.jsx("strong",{children:"Astuce :"})," Pour rendre le jeu plus dynamique, tu peux arrêter la musique dès qu'une équipe attrape le micro-buzzer, augmentant ainsi la difficulté."]})})]})]}),u.jsxs("div",{className:"regles-footer",children:[u.jsx("p",{children:"Amuse-toi bien et que la meilleure équipe gagne !"}),u.jsx("button",{className:"regles-close-button",onClick:p,children:"Fermer"})]})]})})]})},Hv=({chansons:i,chansonsJouees:h,chansonsJoueesParManche:d,mancheActuelle:r})=>{const[m,p]=b.useState(!1),[k,A]=b.useState("titre"),[v,y]=b.useState("asc"),[T,L]=b.useState(""),[N,G]=b.useState("all"),[C,V]=b.useState("table"),[J,z]=b.useState("all"),[X,H]=b.useState(null),ee=b.useRef(null),P=b.useRef(window.innerWidth<=768);b.useEffect(()=>{const F=()=>{P.current=window.innerWidth<=768};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]);const ye=()=>p(!0),Ae=()=>{p(!1),ee.current&&(ee.current.pause(),H(null))},je=F=>{k===F?y(v==="asc"?"desc":"asc"):(A(F),y("asc"))},Q=F=>h.includes(F),B=F=>{var q;return((q=d[r])==null?void 0:q.includes(F))||!1},ae=F=>{ee.current&&(X===F.id?ee.current.paused?ee.current.play():(ee.current.pause(),H(null)):(ee.current.src=F.audioUrl,ee.current.play(),H(F.id)))},ce=b.useMemo(()=>i.filter(q=>{const $=q.titre.toLowerCase().includes(T.toLowerCase())||q.artiste.toLowerCase().includes(T.toLowerCase());return N==="all"?$:N==="played"?$&&Q(q.id):N==="notPlayed"?$&&!Q(q.id):$}).sort((q,$)=>{const Z=k==="titre"?q.titre.toLowerCase():q.artiste.toLowerCase(),ie=k==="titre"?$.titre.toLowerCase():$.artiste.toLowerCase();return v==="asc"?Z.localeCompare(ie):ie.localeCompare(Z)}),[i,k,v,T,N,h]),ze=b.useMemo(()=>{var F;return{total:i.length,played:h.length,remaining:i.length-h.length,playedInCurrentRound:((F=d[r])==null?void 0:F.length)||0}},[i,h,d,r]),Pe=b.useMemo(()=>Object.entries(d).map(([F,q])=>({round:Number.parseInt(F),count:q.length})),[d]);return u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"liste-chansons-button",onClick:ye,children:[u.jsx($g,{size:20}),u.jsx("span",{children:"Liste des Chansons"})]}),u.jsx("audio",{ref:ee,onEnded:()=>H(null),onError:()=>H(null)}),m&&u.jsx("div",{className:"liste-chansons-overlay",onClick:Ae,children:u.jsxs("div",{className:"liste-chansons-modal",onClick:F=>F.stopPropagation(),children:[u.jsx("button",{className:"liste-chansons-close",onClick:Ae,children:u.jsx(ho,{size:24})}),u.jsxs("div",{className:"liste-chansons-header",children:[u.jsx("h2",{children:"Liste des Chansons"}),u.jsx("p",{children:"Toutes les chansons disponibles dans le jeu"})]}),u.jsxs("div",{className:"liste-chansons-tabs",children:[u.jsxs("button",{className:`liste-chansons-tab ${J==="all"?"active":""}`,onClick:()=>z("all"),children:[u.jsx(ja,{size:16}),u.jsx("span",{children:"Chansons"})]}),u.jsxs("button",{className:`liste-chansons-tab ${J==="stats"?"active":""}`,onClick:()=>z("stats"),children:[u.jsx(Ks,{size:16}),u.jsx("span",{children:"Statistiques"})]})]}),u.jsxs("div",{className:`liste-chansons-stats ${J==="stats"?"mobile-visible":""}`,children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:ze.total}),u.jsx("span",{className:"stat-label",children:"Total"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:ze.played}),u.jsx("span",{className:"stat-label",children:"Jouées"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:ze.remaining}),u.jsx("span",{className:"stat-label",children:"Restantes"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:ze.playedInCurrentRound}),u.jsxs("span",{className:"stat-label",children:["Manche ",r]})]})]}),J==="stats"&&u.jsxs("div",{className:"round-stats",children:[u.jsx("h3",{children:"Chansons jouées par manche"}),u.jsx("div",{className:"round-stats-grid",children:Pe.map(F=>u.jsxs("div",{className:"round-stat-item",children:[u.jsx("div",{className:`round-badge round-${F.round}`,children:F.round}),u.jsx("span",{className:"round-stat-count",children:F.count}),u.jsx("span",{className:"round-stat-label",children:"chansons"})]},F.round))})]}),(J==="all"||!P.current)&&u.jsxs("div",{className:"liste-chansons-controls",children:[u.jsxs("div",{className:"search-container",children:[u.jsx($s,{size:18,className:"search-icon"}),u.jsx("input",{type:"text",placeholder:"Rechercher une chanson ou un artiste...",value:T,onChange:F=>L(F.target.value),className:"search-input"}),T&&u.jsx("button",{className:"clear-search",onClick:()=>L(""),"aria-label":"Effacer la recherche",children:u.jsx(ho,{size:16})})]}),u.jsxs("div",{className:"filter-container",children:[u.jsx(Gg,{size:18,className:"filter-icon"}),u.jsxs("select",{value:N,onChange:F=>G(F.target.value),className:"filter-select",children:[u.jsx("option",{value:"all",children:"Toutes les chansons"}),u.jsx("option",{value:"played",children:"Déjà jouées"}),u.jsx("option",{value:"notPlayed",children:"Non jouées"})]})]}),u.jsxs("div",{className:"view-toggle",children:[u.jsx("button",{className:`view-button ${C==="table"?"active":""}`,onClick:()=>V("table"),"aria-label":"Vue tableau",children:u.jsx(wv,{size:18})}),u.jsx("button",{className:`view-button ${C==="grid"?"active":""}`,onClick:()=>V("grid"),"aria-label":"Vue grille",children:u.jsx(Qg,{size:18})})]})]}),(J==="all"||!P.current)&&u.jsxs(u.Fragment,{children:[C==="table"&&u.jsx("div",{className:"liste-chansons-table-container",children:u.jsxs("table",{className:"liste-chansons-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{className:"status-column",children:"Statut"}),u.jsxs("th",{className:`sortable ${k==="titre"?"active":""}`,onClick:()=>je("titre"),children:["Titre",k==="titre"&&u.jsx(am,{size:16,className:`sort-icon ${v==="desc"?"desc":""}`})]}),u.jsxs("th",{className:`sortable ${k==="artiste"?"active":""}`,onClick:()=>je("artiste"),children:["Artiste",k==="artiste"&&u.jsx(am,{size:16,className:`sort-icon ${v==="desc"?"desc":""}`})]}),u.jsx("th",{className:"round-column",children:"Manche"}),u.jsx("th",{className:"action-column",children:"Écouter"})]})}),u.jsx("tbody",{children:ce.length>0?ce.map(F=>{const q=Q(F.id),$=B(F.id),Z=X===F.id;let ie=null;for(const[g,E]of Object.entries(d))if(E.includes(F.id)){ie=g;break}return u.jsxs("tr",{className:`
                                  ${q?"played":""} 
                                  ${$?"played-current-round":""}
                                  ${Z?"playing":""}
                                `,children:[u.jsx("td",{className:"status-cell",children:q?u.jsx(Ks,{size:18,className:"played-icon"}):u.jsx(ja,{size:18,className:"not-played-icon"})}),u.jsx("td",{children:F.titre}),u.jsx("td",{children:F.artiste}),u.jsx("td",{className:"round-cell",children:ie?u.jsx("span",{className:`round-badge round-${ie}`,children:ie}):"-"}),u.jsx("td",{className:"action-cell",children:u.jsx("button",{className:"play-button",onClick:()=>ae(F),"aria-label":Z?"Pause":"Écouter",children:Z?u.jsx(co,{size:18}):u.jsx(im,{size:18})})})]},F.id)}):u.jsx("tr",{className:"no-results",children:u.jsx("td",{colSpan:5,children:u.jsxs("div",{className:"no-results-message",children:[u.jsx($s,{size:24}),u.jsx("p",{children:"Aucune chanson ne correspond à votre recherche"})]})})})})]})}),C==="grid"&&u.jsx("div",{className:"liste-chansons-grid-container",children:ce.length>0?u.jsx("div",{className:"liste-chansons-grid",children:ce.map(F=>{const q=Q(F.id),$=B(F.id),Z=X===F.id;let ie=null;for(const[g,E]of Object.entries(d))if(E.includes(F.id)){ie=g;break}return u.jsxs("div",{className:`
                                song-card
                                ${q?"played":""} 
                                ${$?"played-current-round":""}
                                ${Z?"playing":""}
                              `,children:[u.jsxs("div",{className:"song-card-header",children:[q?u.jsx(Ks,{size:18,className:"played-icon"}):u.jsx(ja,{size:18,className:"not-played-icon"}),ie&&u.jsx("span",{className:`round-badge round-${ie}`,children:ie})]}),u.jsxs("div",{className:"song-card-content",children:[u.jsx("h3",{className:"song-title",children:F.titre}),u.jsx("p",{className:"song-artist",children:F.artiste})]}),u.jsx("button",{className:"song-play-button",onClick:()=>ae(F),"aria-label":Z?"Pause":"Écouter",children:Z?u.jsx(co,{size:20}):u.jsx(im,{size:20})})]},F.id)})}):u.jsxs("div",{className:"no-results-grid",children:[u.jsx($s,{size:32}),u.jsx("p",{children:"Aucune chanson ne correspond à votre recherche"})]})})]}),u.jsxs("div",{className:"liste-chansons-footer",children:[u.jsxs("p",{children:[ce.length," chanson",ce.length!==1?"s":""," affichée",ce.length!==1?"s":""]}),u.jsx("button",{className:"liste-chansons-close-button",onClick:Ae,children:"Fermer"})]})]})})]})},sm=25,Gv=()=>{const[i,h]=b.useState(1),[d,r]=b.useState(null),[m,p]=b.useState(!1),[k,A]=b.useState(!1),[v,y]=b.useState(!1),[T,L]=b.useState(!1),[N,G]=b.useState([]),[C,V]=b.useState({1:[],2:[],3:[]}),[J,z]=b.useState(!1),[X,H]=b.useState(null),[ee,P]=b.useState(null),[ye,Ae]=b.useState(1),[je,Q]=b.useState(!1),[B,ae]=b.useState([]),[ce,ze]=b.useState(null),[Pe,F]=b.useState(!1),[q,$]=b.useState({distortion:5e3,pitchShift:.6,wahFrequency:1,wahDepth:.3,growlAmount:.03}),Z=["#6c5ce7","#e84393","#00b894","#fdcb6e","#e17055","#0984e3","#6c5ce7","#00cec9"],[ie,g]=b.useState({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()}),E=b.useRef(null),W=b.useRef(null),D=b.useRef(null),_=b.useRef(null),de=b.useRef(null),le=b.useRef(null),qe=b.useRef(0),Ie=um.find(Y=>Y.id===i),De=ie.tempsEcoule,xe=ie.actif,Qe=ie.termine,Vn=()=>{const Y=xi.filter(se=>!N.includes(se.id)&&se.id!==ce);if(Y.length===0){alert("Toutes les chansons ont été jouées ! Le jeu va recommencer."),G([]),V({1:[],2:[],3:[]}),ze(null);const se=xi.filter(Te=>Te.id!==ce),be=Math.floor(Math.random()*se.length);return se[be]}const K=Math.floor(Math.random()*Y.length);return Y[K]},Xn=b.useCallback(()=>{if(C[i].length>=sm){p(!1),y(!1),A(!1),Q(!1),z(!1),H(null),P(null),qe.current=0,ot(),Kn();const K=i<3?i+1:1;return h(K),!0}return!1},[i,C]),sn=()=>{if(_.current){try{_.current.stop()}catch{}_.current=null}},Zn=()=>{try{W.current||(W.current=new(window.AudioContext||window.webkitAudioContext));const Y=i===2?X:ee;if(W.current&&Y){console.log(`Démarrage de la lecture du buffer ${i===2?"inversé":"monstre"}`),sn();const K=W.current.createBufferSource();if(K.buffer=Y,i===3){let Te=1;const{pitchShift:Ye}=q;Ye<.5?Te=.4:Ye<1?Te=.6:Ye>2?Te=2.5:Te=1.5,K.playbackRate.value=Te}let se;if(i===3){const{distortion:Te,pitchShift:Ye,wahFrequency:We,wahDepth:yn,growlAmount:pn}=q,gn=W.current.createGain();gn.gain.value=T?0:ye,de.current=gn;const qn=W.current.createWaveShaper(),$n=$t(Te);qn.curve=$n,qn.oversample="4x";const Tn=W.current.createBiquadFilter();Tn.type="bandpass",Tn.frequency.value=1e3,Tn.Q.value=2;const Be=W.current.createOscillator();Be.type="sine",Be.frequency.value=We;const Re=W.current.createGain();Re.gain.value=yn*500,Be.connect(Re),Re.connect(Tn.frequency),Be.start(),D.current={distortionNode:qn,filterNode:Tn,oscillator:Be,oscillatorGain:Re,pitchShift:Ye,growlAmount:pn},K.connect(Tn),Tn.connect(qn),qn.connect(gn),gn.connect(W.current.destination),se=gn}else{const Te=W.current.createGain();Te.gain.value=T?0:ye,de.current=Te,K.connect(Te),Te.connect(W.current.destination),se=Te}const be=isFinite(qe.current)?qe.current:0;return be>=Y.duration?(qe.current=0,K.start(0,0)):K.start(0,be),_.current=K,_.current.startTime=W.current.currentTime,_.current.startOffset=be,console.log(`Lecture ${i===2?"inversée":"monstre"} démarrée avec succès à la position ${be}s`),!0}else return console.error("Impossible de démarrer la lecture: contexte audio ou buffer manquant"),!1}catch(Y){return console.error("Erreur lors de la lecture audio modifiée:",Y),!1}},At=b.useCallback(()=>{if(console.log("togglePlay appelé, manche:",i),i===2||i===3)if(console.log(`Manche ${i} - utilisation du mode audio modifié`),m){if(console.log("Arrêt de la lecture modifiée"),_.current&&W.current)try{if(_.current.startTime!==void 0&&_.current.startOffset!==void 0){const Y=W.current.currentTime-_.current.startTime,K=_.current.startOffset+Y;isFinite(K)&&K>=0&&(qe.current=K,console.log("Position audio sauvegardée:",qe.current))}}catch(Y){console.error("Erreur lors du calcul de la position audio:",Y)}sn(),p(!1),qt()}else if(console.log("Démarrage de la lecture modifiée"),!X&&i===2||!ee&&i===3||!je){if(console.log("Premier clic ou buffer non prêt, préparation de l'audio..."),Q(!0),!J&&d)(i===2?ul:sl)(d.audioUrl).then(K=>{K&&je&&Zn()&&(p(!0),!xe&&!Qe?lt():Qe||Tt())});else if(i===2&&X||i===3&&ee){if(i===3&&d&&q){const K=po(ee,q);P(K)}Zn()&&(p(!0),!xe&&!Qe?lt():Qe||Tt())}}else Zn()&&(p(!0),!xe&&!Qe?lt():Qe||Tt());else console.log("Manche standard - utilisation de l'audio normal"),m?(E.current.pause(),p(!1),qt()):E.current.play().then(()=>{p(!0),!xe&&!Qe?lt():Qe||Tt()}).catch(Y=>{console.error("Erreur lors de la lecture audio:",Y)})},[m,i,X,ee,J,d,je,xe,Qe,q]),lt=()=>{le.current&&clearInterval(le.current),g(Y=>({...Y,actif:!0,termine:!1,dernierTemps:Date.now()})),le.current=setInterval(()=>{g(Y=>{const K=Y.tempsEcoule+1;return K>=25?(clearInterval(le.current),le.current=null,m&&(i===2||i===3?sn():E.current&&E.current.pause(),p(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:Y.dernierTemps}):(K===20&&m&&(i===2||i===3?sn():E.current&&E.current.pause(),p(!1)),{...Y,tempsEcoule:K,dernierTemps:Date.now()})})},1e3)},qt=()=>{le.current&&(clearInterval(le.current),le.current=null),g(Y=>({...Y,actif:!1,dernierTemps:Date.now()}))},Tt=()=>{le.current&&clearInterval(le.current),g(Y=>({...Y,actif:!0,dernierTemps:Date.now()})),le.current=setInterval(()=>{g(Y=>{const K=Y.tempsEcoule+1;return K>=25?(clearInterval(le.current),le.current=null,m&&(i===2||i===3?sn():E.current&&E.current.pause(),p(!1)),{tempsEcoule:25,actif:!1,termine:!0,dernierTemps:Y.dernierTemps}):(K===20&&m&&(i===2||i===3?sn():E.current&&E.current.pause(),p(!1)),{...Y,tempsEcoule:K,dernierTemps:Date.now()})})},1e3)},Kn=()=>{le.current&&(clearInterval(le.current),le.current=null),g({tempsEcoule:0,actif:!1,termine:!1,dernierTemps:Date.now()})},il=()=>{i===2||i===3?_.current&&W.current&&(sn(),qe.current+=5,m&&Zn()):E.current&&(E.current.currentTime+=5)},Oi=()=>{i===2||i===3?_.current&&W.current&&(sn(),qe.current=Math.max(0,qe.current-5),m&&Zn()):E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-5))},Ni=()=>{if(d&&(ze(d.id),G(K=>[...K,d.id]),V(K=>({...K,[i]:[...K[i],d.id]}))),(i===2||i===3)&&_.current?sn():E.current&&E.current.pause(),p(!1),y(!1),A(!1),z(!1),H(null),P(null),Q(!1),Kn(),qe.current=0,ot(),!Xn()){const K=Vn();r(K)}},An=()=>{(i===2||i===3)&&de.current?de.current.gain.value=T?ye:0:E.current&&(E.current.muted=!T),L(!T)},ot=()=>{try{if(sn(),D.current){if(D.current.oscillator)try{D.current.oscillator.stop()}catch{}D.current.distortionNode&&D.current.distortionNode.disconnect(),D.current.filterNode&&D.current.filterNode.disconnect(),D.current.oscillatorGain&&D.current.oscillatorGain.disconnect(),D.current=null}de.current&&(de.current.disconnect(),de.current=null),W.current&&W.current.state}catch(Y){console.error("Erreur lors du nettoyage des connexions audio:",Y)}},ul=async Y=>{try{console.log("Préparation de l'audio inversé pour:",Y),ot(),W.current=new(window.AudioContext||window.webkitAudioContext);const K=await fetch(Y);if(!K.ok)throw new Error(`Erreur lors du chargement de l'audio: ${K.status}`);const se=await K.arrayBuffer();if(!se||se.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",se.byteLength);const be=await W.current.decodeAudioData(se);console.log("Audio décodé, durée:",be.duration,"secondes");const Te=W.current.createBuffer(be.numberOfChannels,be.length,be.sampleRate);for(let Ye=0;Ye<be.numberOfChannels;Ye++){const We=be.getChannelData(Ye),yn=Te.getChannelData(Ye);for(let pn=0;pn<We.length;pn++)yn[pn]=We[We.length-1-pn]}return console.log("Buffer inversé créé avec succès"),H(Te),z(!0),!0}catch(K){return console.error("Erreur lors de la préparation de l'audio inversé:",K),!1}},sl=async Y=>{try{console.log("Préparation de l'audio monstre pour:",Y),W.current||(W.current=new(window.AudioContext||window.webkitAudioContext));const K=await fetch(Y);if(!K.ok)throw new Error(`Erreur lors du chargement de l'audio: ${K.status}`);const se=await K.arrayBuffer();if(!se||se.byteLength===0)throw new Error("Buffer audio vide");console.log("Audio chargé, taille:",se.byteLength);const be=await W.current.decodeAudioData(se);return console.log("Audio décodé, durée:",be.duration,"secondes"),P(be),z(!0),!0}catch(K){return console.error("Erreur lors de la préparation de l'audio monstre:",K),!1}},$t=Y=>{const se=new Float32Array(44100),be=Math.PI/180;for(let Te=0;Te<44100;++Te){const Ye=Te*2/44100-1;se[Te]=(3+Y/1e3)*Ye*20*be/(Math.PI+Y/1e3*Math.abs(Ye))}return se},zi=Y=>{if($(Y),i===3&&W.current&&D.current){const{distortion:K,pitchShift:se,wahFrequency:be,wahDepth:Te,growlAmount:Ye}=Y;if(D.current.distortionNode&&(D.current.distortionNode.curve=$t(K)),D.current.oscillator&&(D.current.oscillator.frequency.value=be),D.current.oscillatorGain&&(D.current.oscillatorGain.gain.value=Te*500),D.current.pitchShift=se,_.current){let We;se<.5?We=.4:se<1?We=.6:se>2?We=2.5:We=1.5;try{_.current.playbackRate.value=We}catch(yn){console.error("Erreur lors de l'ajustement du playbackRate:",yn)}}D.current.growlAmount=Ye,console.log("Paramètres d'effets mis à jour en temps réel")}},po=(Y,K)=>{const{distortion:se,pitchShift:be,wahFrequency:Te,wahDepth:Ye,growlAmount:We}=K,pn=W.current.createBuffer(Y.numberOfChannels,Y.length,Y.sampleRate),gn=new Float32Array(Y.length);for(let qn=0;qn<Y.numberOfChannels;qn++){const $n=Y.getChannelData(qn),Tn=pn.getChannelData(qn);for(let Be=0;Be<$n.length;Be++){const Re=Math.sin(Be/Y.sampleRate*Te*Math.PI*2)*Ye*.5;$n[Be]*(1+Re);let Yn;be<.5?Yn=2.5:be<1?Yn=1.8:be>2?Yn=.4:Yn=.6;const Pt=Math.floor(Be/(be*Yn));Pt<$n.length&&(gn[Be]=$n[Pt])}for(let Be=0;Be<$n.length;Be++){let Re=gn[Be]||0;if(Re=Math.tanh(Re*(se/2e3))*.9,Math.random()<We*.7){const Yn=We*1.5;Re+=(Math.random()*.4-.2)*Math.sin(Be/Y.sampleRate*40*Math.PI*2)*Yn,Math.random()<We*.4&&(Re*=1+Math.random()*.3),Math.random()<We*.1&&(Re=0)}if(se>2e4){const Yn=(se-2e4)/4e4;if(Re+=Re*Math.sin(Be/Y.sampleRate*80*Math.PI*2)*Yn,se>6e4){const Pt=Math.max(4,Math.floor(16-(se-6e4)/15e3)),rl=2/Math.pow(2,Pt);Re=Math.round(Re/rl)*rl}}Re=Math.max(-.95,Math.min(.95,Re)),Tn[Be]=Re}}return pn},Di=()=>{F(!Pe)};b.useEffect(()=>()=>{ot(),le.current&&clearInterval(le.current)},[]),b.useEffect(()=>{if(!d){const Y=Vn();r(Y)}},[d]),b.useEffect(()=>{d&&(console.log("Changement de chanson détecté, manche:",i),E.current&&E.current.pause(),sn(),p(!1),z(!1),H(null),P(null),Q(!1),Kn(),qe.current=0,ot(),i===2?(console.log("Manche 2 (Inversé) - préparation de l'audio inversé"),ul(d.audioUrl)):i===3?(console.log("Manche 3 (Monstre) - préparation de l'audio monstre"),sl(d.audioUrl)):(console.log("Manche standard - chargement audio normal"),E.current&&(E.current.src=d.audioUrl,E.current.load(),z(!0))))},[d,i]),b.useEffect(()=>{console.log("Changement de manche détecté, nouvelle manche:",i),z(!1),H(null),P(null),Q(!1),qe.current=0,ot(),Kn();const Y=Vn();r(Y)},[i]);const Ri=Y=>{h(Y),p(!1),y(!1),A(!1),Q(!1),z(!1),H(null),P(null),qe.current=0,ot(),Kn();const K=Vn();r(K)},Ft=Y=>{if(console.log("Fonction ajouterEquipe appelée avec:",Y),typeof Y=="string"){const K={id:Date.now().toString(),name:Y,score:0,color:Z[B.length%Z.length]};console.log("Ajout d'une équipe à partir d'une chaîne:",K),ae(se=>[...se,K])}else Y&&typeof Y=="object"?(console.log("Ajout d'une équipe à partir d'un objet:",Y),ae(K=>[...K,Y])):console.error("Format d'équipe invalide:",Y);console.log("Équipes après ajout:",B)},hn=Y=>{const K=B.filter(se=>se.id!==Y);ae(K)},Bi=(Y,K)=>{const se=B.findIndex(be=>be.id===Y);if(se>=0){const be=[...B];be[se]={...be[se],score:be[se].score+K},ae(be)}else console.error("Équipe non trouvée avec l'ID:",Y)};return u.jsxs("main",{className:"jeu",children:[u.jsx("audio",{ref:E}),u.jsxs("header",{className:"jeu-header",children:[u.jsx(Ci,{to:"/",className:"accueil-link",children:u.jsx(Xg,{size:24})}),u.jsx("h1",{children:"BlindTest Master"}),u.jsx(ja,{className:"logo",size:32})]}),u.jsx(Uv,{teams:B,onAddTeam:Ft,onRemoveTeam:hn,onAddPoints:Bi}),u.jsx(Yv,{}),u.jsx(Hv,{chansons:xi,chansonsJouees:N,chansonsJoueesParManche:C,mancheActuelle:i}),u.jsx(Bv,{manche:Ie}),i===3&&u.jsxs("div",{className:"effets-info",children:[u.jsxs("span",{className:"effet-badge",children:["Distorsion: ",q.distortion]}),u.jsxs("span",{className:"effet-badge",children:["Hauteur: ",q.pitchShift.toFixed(2)]}),u.jsxs("span",{className:"effet-badge",children:["Wah-Wah: ",q.wahFrequency.toFixed(1),"Hz"]}),u.jsxs("span",{className:"effet-badge",children:["Grognement: ",(q.growlAmount*100).toFixed(0),"%"]})]}),u.jsx("section",{className:"jeu-content",children:d?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"chrono-container",children:[u.jsxs("div",{className:`chrono ${De>20?"time-critical":De>15?"time-warning":""}`,children:[u.jsxs("span",{children:[De," / 25 secondes"]}),u.jsx("div",{className:"chrono-progress",style:{width:`${De/25*100}%`}})]}),u.jsxs("div",{className:"chrono-controls",children:[xe?u.jsxs("button",{className:"chrono-button stop",onClick:qt,children:[u.jsx(Iv,{size:20}),u.jsx("span",{children:"Arrêter Chrono"})]}):u.jsxs("button",{className:"chrono-button start",onClick:lt,disabled:Qe,children:[u.jsx(Av,{size:20}),u.jsx("span",{children:"Démarrer Chrono"})]}),u.jsxs("button",{className:"chrono-button reset",onClick:Kn,children:[u.jsx(Sv,{size:20}),u.jsx("span",{children:"Réinitialiser"})]})]})]}),u.jsxs("div",{className:"player-controls-container",children:[u.jsxs("div",{className:"player-controls",children:[u.jsx("button",{className:"control-button rewind",onClick:Oi,"aria-label":"Reculer",children:u.jsx(uv,{size:24})}),u.jsx("button",{className:"control-button play-pause",onClick:At,"aria-label":m?"Pause":"Lecture",children:m?u.jsx(co,{size:32}):u.jsx(ar,{size:32})}),u.jsx("button",{className:"control-button forward",onClick:il,"aria-label":"Avancer",children:u.jsx(Yg,{size:24})}),u.jsx("button",{className:"control-button next",onClick:Ni,"aria-label":"Chanson suivante",children:u.jsx(fv,{size:32})}),u.jsx("button",{className:"control-button mute",onClick:An,"aria-label":T?"Activer le son":"Couper le son",children:T?u.jsx(Mm,{size:24}):u.jsx(cr,{size:24})})]}),i===3&&u.jsx(_v,{onEffectsChange:zi,isExpanded:Pe,toggleExpanded:Di,currentEffects:q,isPlaying:m,mancheActuelle:i})]}),u.jsxs("div",{className:"guess-mode",children:[v?u.jsx(Lv,{chanson:d,afficherTitre:!0,afficherArtiste:!0,afficherParoles:k,mancheActuelle:i,isModifiedAudio:i===2||i===3,onVerify:()=>{console.log("Chanson vérifiée:",d==null?void 0:d.titre)}}):u.jsx("div",{className:"hidden-answer",children:u.jsx("p",{children:"?????"})}),u.jsxs("div",{className:"action-buttons",children:[u.jsx("button",{className:"answer-toggle",onClick:()=>y(!v),children:v?"Masquer la réponse":"Révéler la réponse"}),v&&u.jsx("button",{className:"lyrics-toggle",onClick:()=>A(!k),children:k?"Masquer les paroles":"Afficher les paroles"})]})]})]}):u.jsxs("div",{className:"no-songs-message",children:[u.jsx("p",{children:"Aucune chanson disponible."}),u.jsx("p",{children:"Toutes les chansons ont été jouées ou il y a un problème de chargement."})]})}),u.jsxs("footer",{className:"jeu-footer",children:[u.jsx("div",{className:"round-navigation",children:um.map(Y=>u.jsxs("button",{className:`round-button ${i===Y.id?"active":""}`,onClick:()=>Ri(Y.id),children:[u.jsx("span",{className:"round-number",children:Y.id}),u.jsx("span",{className:"round-emoji",children:Y.emoji})]},Y.id))}),u.jsxs("div",{className:"songs-played-info",children:[u.jsxs("p",{children:["Chansons jouées dans cette manche:"," ",C[i].length," /"," ",sm]}),u.jsxs("p",{children:["Total des chansons jouées: ",N.length," /"," ",xi.length]})]})]})]})},Jv=()=>{const i=new Date().getFullYear();return u.jsxs("footer",{className:"footer",children:[u.jsx("img",{src:"Logo.jpg",alt:"Logo développeur",className:"footer-logo"}),u.jsxs("p",{className:"footer-text",children:["© ",i," - Tous droits réservés"]})]})};function Qv(){return u.jsxs(mg,{children:[u.jsxs(Jp,{children:[u.jsx(nr,{path:"/",element:u.jsx(Rv,{})}),u.jsx(nr,{path:"/jeu",element:u.jsx(Gv,{})})]}),u.jsx(Jv,{})]})}Py.createRoot(document.getElementById("root")).render(u.jsx(Qy.StrictMode,{children:u.jsx(Qv,{})}));
