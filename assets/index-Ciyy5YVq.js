(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Af={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function T5(){if(sx)return Bo;sx=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var p in c)p!=="key"&&(d[p]=c[p])}else d=c;return c=d.ref,{$$typeof:n,type:l,key:h,ref:c!==void 0?c:null,props:d}}return Bo.Fragment=a,Bo.jsx=i,Bo.jsxs=i,Bo}var cx;function _5(){return cx||(cx=1,Af.exports=T5()),Af.exports}var u=_5(),Of={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function C5(){if(ux)return _e;ux=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function R(E,O,Q){this.props=E,this.context=O,this.refs=_,this.updater=Q||C}R.prototype.isReactComponent={},R.prototype.setState=function(E,O){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,O,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function A(){}A.prototype=R.prototype;function N(E,O,Q){this.props=E,this.context=O,this.refs=_,this.updater=Q||C}var z=N.prototype=new A;z.constructor=N,T(z,R.prototype),z.isPureReactComponent=!0;var P=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Z(E,O,Q,V,te,oe){return Q=oe.ref,{$$typeof:n,type:E,key:O,ref:Q!==void 0?Q:null,props:oe}}function ue(E,O){return Z(E.type,O,void 0,void 0,void 0,E.props)}function I(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function le(E){var O={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return O[Q]})}var ie=/\/+/g;function ce(E,O){return typeof E=="object"&&E!==null&&E.key!=null?le(""+E.key):O.toString(36)}function je(){}function we(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(je,je):(E.status="pending",E.then(function(O){E.status==="pending"&&(E.status="fulfilled",E.value=O)},function(O){E.status==="pending"&&(E.status="rejected",E.reason=O)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function ge(E,O,Q,V,te){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var Y=!1;if(E===null)Y=!0;else switch(oe){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(E.$$typeof){case n:case a:Y=!0;break;case y:return Y=E._init,ge(Y(E._payload),O,Q,V,te)}}if(Y)return te=te(E),Y=V===""?"."+ce(E,0):V,P(te)?(Q="",Y!=null&&(Q=Y.replace(ie,"$&/")+"/"),ge(te,O,Q,"",function(re){return re})):te!=null&&(I(te)&&(te=ue(te,Q+(te.key==null||E&&E.key===te.key?"":(""+te.key).replace(ie,"$&/")+"/")+Y)),O.push(te)),1;Y=0;var ne=V===""?".":V+":";if(P(E))for(var ae=0;ae<E.length;ae++)V=E[ae],oe=ne+ce(V,ae),Y+=ge(V,O,Q,oe,te);else if(ae=S(E),typeof ae=="function")for(E=ae.call(E),ae=0;!(V=E.next()).done;)V=V.value,oe=ne+ce(V,ae++),Y+=ge(V,O,Q,oe,te);else if(oe==="object"){if(typeof E.then=="function")return ge(we(E),O,Q,V,te);throw O=String(E),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return Y}function H(E,O,Q){if(E==null)return E;var V=[],te=0;return ge(E,V,"","",function(oe){return O.call(Q,oe,te++)}),V}function ee(E){if(E._status===-1){var O=E._result;O=O(),O.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=O)}if(E._status===1)return E._result.default;throw E._result}var se=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function L(){}return _e.Children={map:H,forEach:function(E,O,Q){H(E,function(){O.apply(this,arguments)},Q)},count:function(E){var O=0;return H(E,function(){O++}),O},toArray:function(E){return H(E,function(O){return O})||[]},only:function(E){if(!I(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},_e.Component=R,_e.Fragment=i,_e.Profiler=c,_e.PureComponent=N,_e.StrictMode=l,_e.Suspense=x,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,_e.__COMPILER_RUNTIME={__proto__:null,c:function(E){return $.H.useMemoCache(E)}},_e.cache=function(E){return function(){return E.apply(null,arguments)}},_e.cloneElement=function(E,O,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var V=T({},E.props),te=E.key,oe=void 0;if(O!=null)for(Y in O.ref!==void 0&&(oe=void 0),O.key!==void 0&&(te=""+O.key),O)!F.call(O,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&O.ref===void 0||(V[Y]=O[Y]);var Y=arguments.length-2;if(Y===1)V.children=Q;else if(1<Y){for(var ne=Array(Y),ae=0;ae<Y;ae++)ne[ae]=arguments[ae+2];V.children=ne}return Z(E.type,te,void 0,void 0,oe,V)},_e.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},_e.createElement=function(E,O,Q){var V,te={},oe=null;if(O!=null)for(V in O.key!==void 0&&(oe=""+O.key),O)F.call(O,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(te[V]=O[V]);var Y=arguments.length-2;if(Y===1)te.children=Q;else if(1<Y){for(var ne=Array(Y),ae=0;ae<Y;ae++)ne[ae]=arguments[ae+2];te.children=ne}if(E&&E.defaultProps)for(V in Y=E.defaultProps,Y)te[V]===void 0&&(te[V]=Y[V]);return Z(E,oe,void 0,void 0,null,te)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(E){return{$$typeof:p,render:E}},_e.isValidElement=I,_e.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ee}},_e.memo=function(E,O){return{$$typeof:g,type:E,compare:O===void 0?null:O}},_e.startTransition=function(E){var O=$.T,Q={};$.T=Q;try{var V=E(),te=$.S;te!==null&&te(Q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(L,se)}catch(oe){se(oe)}finally{$.T=O}},_e.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},_e.use=function(E){return $.H.use(E)},_e.useActionState=function(E,O,Q){return $.H.useActionState(E,O,Q)},_e.useCallback=function(E,O){return $.H.useCallback(E,O)},_e.useContext=function(E){return $.H.useContext(E)},_e.useDebugValue=function(){},_e.useDeferredValue=function(E,O){return $.H.useDeferredValue(E,O)},_e.useEffect=function(E,O,Q){var V=$.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(E,O)},_e.useId=function(){return $.H.useId()},_e.useImperativeHandle=function(E,O,Q){return $.H.useImperativeHandle(E,O,Q)},_e.useInsertionEffect=function(E,O){return $.H.useInsertionEffect(E,O)},_e.useLayoutEffect=function(E,O){return $.H.useLayoutEffect(E,O)},_e.useMemo=function(E,O){return $.H.useMemo(E,O)},_e.useOptimistic=function(E,O){return $.H.useOptimistic(E,O)},_e.useReducer=function(E,O,Q){return $.H.useReducer(E,O,Q)},_e.useRef=function(E){return $.H.useRef(E)},_e.useState=function(E){return $.H.useState(E)},_e.useSyncExternalStore=function(E,O,Q){return $.H.useSyncExternalStore(E,O,Q)},_e.useTransition=function(){return $.H.useTransition()},_e.version="19.1.1",_e}var fx;function ah(){return fx||(fx=1,Of.exports=C5()),Of.exports}var w=ah();const Jo=ac(w);var Mf={exports:{}},Lo={},Nf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function R5(){return dx||(dx=1,(function(n){function a(H,ee){var se=H.length;H.push(ee);e:for(;0<se;){var L=se-1>>>1,E=H[L];if(0<c(E,ee))H[L]=ee,H[se]=E,se=L;else break e}}function i(H){return H.length===0?null:H[0]}function l(H){if(H.length===0)return null;var ee=H[0],se=H.pop();if(se!==ee){H[0]=se;e:for(var L=0,E=H.length,O=E>>>1;L<O;){var Q=2*(L+1)-1,V=H[Q],te=Q+1,oe=H[te];if(0>c(V,se))te<E&&0>c(oe,V)?(H[L]=oe,H[te]=se,L=te):(H[L]=V,H[Q]=se,L=Q);else if(te<E&&0>c(oe,se))H[L]=oe,H[te]=se,L=te;else break e}}return ee}function c(H,ee){var se=H.sortIndex-ee.sortIndex;return se!==0?se:H.id-ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();n.unstable_now=function(){return h.now()-p}}var x=[],g=[],y=1,v=null,S=3,C=!1,T=!1,_=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function P(H){for(var ee=i(g);ee!==null;){if(ee.callback===null)l(g);else if(ee.startTime<=H)l(g),ee.sortIndex=ee.expirationTime,a(x,ee);else break;ee=i(g)}}function $(H){if(_=!1,P(H),!T)if(i(x)!==null)T=!0,F||(F=!0,ce());else{var ee=i(g);ee!==null&&ge($,ee.startTime-H)}}var F=!1,Z=-1,ue=5,I=-1;function le(){return R?!0:!(n.unstable_now()-I<ue)}function ie(){if(R=!1,F){var H=n.unstable_now();I=H;var ee=!0;try{e:{T=!1,_&&(_=!1,N(Z),Z=-1),C=!0;var se=S;try{t:{for(P(H),v=i(x);v!==null&&!(v.expirationTime>H&&le());){var L=v.callback;if(typeof L=="function"){v.callback=null,S=v.priorityLevel;var E=L(v.expirationTime<=H);if(H=n.unstable_now(),typeof E=="function"){v.callback=E,P(H),ee=!0;break t}v===i(x)&&l(x),P(H)}else l(x);v=i(x)}if(v!==null)ee=!0;else{var O=i(g);O!==null&&ge($,O.startTime-H),ee=!1}}break e}finally{v=null,S=se,C=!1}ee=void 0}}finally{ee?ce():F=!1}}}var ce;if(typeof z=="function")ce=function(){z(ie)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,we=je.port2;je.port1.onmessage=ie,ce=function(){we.postMessage(null)}}else ce=function(){A(ie,0)};function ge(H,ee){Z=A(function(){H(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(H){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var se=S;S=ee;try{return H()}finally{S=se}},n.unstable_requestPaint=function(){R=!0},n.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=S;S=H;try{return ee()}finally{S=se}},n.unstable_scheduleCallback=function(H,ee,se){var L=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,H){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=se+E,H={id:y++,callback:ee,priorityLevel:H,startTime:se,expirationTime:E,sortIndex:-1},se>L?(H.sortIndex=se,a(g,H),i(x)===null&&H===i(g)&&(_?(N(Z),Z=-1):_=!0,ge($,se-L))):(H.sortIndex=E,a(x,H),T||C||(T=!0,F||(F=!0,ce()))),H},n.unstable_shouldYield=le,n.unstable_wrapCallback=function(H){var ee=S;return function(){var se=S;S=ee;try{return H.apply(this,arguments)}finally{S=se}}}})(zf)),zf}var hx;function k5(){return hx||(hx=1,Nf.exports=R5()),Nf.exports}var Df={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function A5(){if(px)return zt;px=1;var n=ah();function a(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(x,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:x,containerInfo:g,implementation:y}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,zt.createPortal=function(x,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return d(x,g,null,y)},zt.flushSync=function(x){var g=h.T,y=l.p;try{if(h.T=null,l.p=2,x)return x()}finally{h.T=g,l.p=y,l.d.f()}},zt.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(x,g))},zt.prefetchDNS=function(x){typeof x=="string"&&l.d.D(x)},zt.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var y=g.as,v=p(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:C}):y==="script"&&l.d.X(x,{crossOrigin:v,integrity:S,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},zt.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);l.d.M(x,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(x)},zt.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=p(y,g.crossOrigin);l.d.L(x,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},zt.preloadModule=function(x,g){if(typeof x=="string")if(g){var y=p(g.as,g.crossOrigin);l.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(x)},zt.requestFormReset=function(x){l.d.r(x)},zt.unstable_batchedUpdates=function(x,g){return x(g)},zt.useFormState=function(x,g,y){return h.H.useFormState(x,g,y)},zt.useFormStatus=function(){return h.H.useHostTransitionStatus()},zt.version="19.1.1",zt}var gx;function Eb(){if(gx)return Df.exports;gx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Df.exports=A5(),Df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function O5(){if(xx)return Lo;xx=1;var n=k5(),a=ah(),i=Eb();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(l(188))}function x(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var f=s.alternate;if(f===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===f.child){for(f=s.child;f;){if(f===r)return p(s),e;if(f===o)return p(s),t;f=f.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=f;else{for(var m=!1,j=s.child;j;){if(j===r){m=!0,r=s,o=f;break}if(j===o){m=!0,o=s,r=f;break}j=j.sibling}if(!m){for(j=f.child;j;){if(j===r){m=!0,r=f,o=s;break}if(j===o){m=!0,o=f,r=s;break}j=j.sibling}if(!m)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),z=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var je=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===je?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case R:return"Profiler";case _:return"StrictMode";case $:return"Suspense";case F:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case z:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:we(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var ge=Array.isArray,H=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},L=[],E=-1;function O(e){return{current:e}}function Q(e){0>E||(e.current=L[E],L[E]=null,E--)}function V(e,t){E++,L[E]=e.current,e.current=t}var te=O(null),oe=O(null),Y=O(null),ne=O(null);function ae(e,t){switch(V(Y,t),V(oe,e),V(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?B0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=B0(t),e=L0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(te),V(te,e)}function re(){Q(te),Q(oe),Q(Y)}function fe(e){e.memoizedState!==null&&V(ne,e);var t=te.current,r=L0(t,e.type);t!==r&&(V(oe,e),V(te,r))}function xe(e){oe.current===e&&(Q(te),Q(oe)),ne.current===e&&(Q(ne),Oo._currentValue=se)}var Ee=Object.prototype.hasOwnProperty,Ze=n.unstable_scheduleCallback,Qe=n.unstable_cancelCallback,cn=n.unstable_shouldYield,Lt=n.unstable_requestPaint,ot=n.unstable_now,jn=n.unstable_getCurrentPriorityLevel,Ut=n.unstable_ImmediatePriority,Zn=n.unstable_UserBlockingPriority,En=n.unstable_NormalPriority,jr=n.unstable_LowPriority,Kt=n.unstable_IdlePriority,Zt=n.log,Jn=n.unstable_setDisableYieldValue,un=null,rt=null;function Et(e){if(typeof Zt=="function"&&Jn(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(un,e)}catch{}}var Fe=Math.clz32?Math.clz32:wc,Er=Math.log,In=Math.LN2;function wc(e){return e>>>=0,e===0?32:31-(Er(e)/In|0)|0}var Wn=256,za=4194304;function Ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function er(e,t,r){var o=e.pendingLanes;if(o===0)return 0;var s=0,f=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var j=o&134217727;return j!==0?(o=j&~f,o!==0?s=Ln(o):(m&=j,m!==0?s=Ln(m):r||(r=j&~e,r!==0&&(s=Ln(r))))):(j=o&~f,j!==0?s=Ln(j):m!==0?s=Ln(m):r||(r=o&~e,r!==0&&(s=Ln(r)))),s===0?0:t!==0&&t!==s&&(t&f)===0&&(f=s&-s,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:s}function Tr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(){var e=Wn;return Wn<<=1,(Wn&4194048)===0&&(Wn=256),e}function Tn(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function Li(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _r(e,t,r,o,s,f){var m=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var j=e.entanglements,k=e.expirationTimes,U=e.hiddenUpdates;for(r=m&~r;0<r;){var K=31-Fe(r),W=1<<K;j[K]=0,k[K]=-1;var q=U[K];if(q!==null)for(U[K]=null,K=0;K<q.length;K++){var G=q[K];G!==null&&(G.lane&=-536870913)}r&=~W}o!==0&&oa(e,o,0),f!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=f&~(m&~t))}function oa(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Fe(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function Ui(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Fe(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cr(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:nx(e.type))}function ul(e,t){var r=ee.p;try{return ee.p=e,t()}finally{ee.p=r}}var Un=Math.random().toString(36).slice(2),xt="__reactFiber$"+Un,mt="__reactProps$"+Un,tr="__reactContainer$"+Un,Da="__reactEvents$"+Un,jc="__reactListeners$"+Un,Ec="__reactHandles$"+Un,qi="__reactResources$"+Un,nr="__reactMarker$"+Un;function Ba(e){delete e[xt],delete e[mt],delete e[Da],delete e[jc],delete e[Ec]}function Rr(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[tr]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=q0(e);e!==null;){if(r=e[xt])return r;e=q0(e)}return t}e=r,r=e.parentNode}return null}function kr(e){if(e=e[xt]||e[tr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ar(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function rr(e){var t=e[qi];return t||(t=e[qi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[nr]=!0}var fl=new Set,Yi={};function $n(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Yi[e]=t,e=0;e<t.length;e++)fl.add(t[e])}var Tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},me={};function $e(e){return Ee.call(me,e)?!0:Ee.call(De,e)?!1:Tc.test(e)?me[e]=!0:(De[e]=!0,!1)}function Ye(e,t,r){if($e(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function tt(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function bt(e,t,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+o)}}var Jt,fn;function Mt(e){if(Jt===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Jt=t&&t[1]||"",fn=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+fn}var _n=!1;function Hn(e,t){if(!e||_n)return"";_n=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(G){var q=G}Reflect.construct(e,[],W)}else{try{W.call()}catch(G){q=G}e.call(W.prototype)}}else{try{throw Error()}catch(G){q=G}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(G){if(G&&q&&typeof G.stack=="string")return[G.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),m=f[0],j=f[1];if(m&&j){var k=m.split(`
`),U=j.split(`
`);for(s=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;if(o===k.length||s===U.length)for(o=k.length-1,s=U.length-1;1<=o&&0<=s&&k[o]!==U[s];)s--;for(;1<=o&&0<=s;o--,s--)if(k[o]!==U[s]){if(o!==1||s!==1)do if(o--,s--,0>s||k[o]!==U[s]){var K=`
`+k[o].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=o&&0<=s);break}}}finally{_n=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Mt(r):""}function qn(e){switch(e.tag){case 26:case 27:case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return Hn(e.type,!1);case 11:return Hn(e.type.render,!1);case 1:return Hn(e.type,!0);case 31:return Mt("Activity");default:return""}}function la(e){try{var t="";do t+=qn(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v1(e){var t=Oh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,f=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(m){o=""+m,f.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dl(e){e._valueTracker||(e._valueTracker=v1(e))}function Mh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Oh(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var w1=/[\n"\\]/g;function dn(e){return e.replace(w1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _c(e,t,r,o,s,f,m,j){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Cc(e,m,$t(t)):r!=null?Cc(e,m,$t(r)):o!=null&&e.removeAttribute("value"),s==null&&f!=null&&(e.defaultChecked=!!f),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+$t(j):e.removeAttribute("name")}function Nh(e,t,r,o,s,f,m,j){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;r=r!=null?""+$t(r):"",t=t!=null?""+$t(t):r,j||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=j?e.checked:!!o,e.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Cc(e,t,r){t==="number"&&hl(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function La(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+$t(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function zh(e,t,r){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+$t(r):""}function Dh(e,t,r,o){if(t==null){if(o!=null){if(r!=null)throw Error(l(92));if(ge(o)){if(1<o.length)throw Error(l(93));o=o[0]}r=o}r==null&&(r=""),t=r}r=$t(t),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function Ua(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var S1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(e,t,r){var o=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,r):typeof r!="number"||r===0||S1.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Lh(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&r[s]!==o&&Bh(e,s,o)}else for(var f in t)t.hasOwnProperty(f)&&Bh(e,f,t[f])}function Rc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return E1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var kc=null;function Ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Ha=null;function Uh(e){var t=kr(e);if(t&&(e=t.stateNode)){var r=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(_c(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+dn(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=o[mt]||null;if(!s)throw Error(l(90));_c(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<r.length;t++)o=r[t],o.form===e.form&&Mh(o)}break e;case"textarea":zh(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&La(e,!!r.multiple,t,!1)}}}var Oc=!1;function $h(e,t,r){if(Oc)return e(t,r);Oc=!0;try{var o=e(t);return o}finally{if(Oc=!1,($a!==null||Ha!==null)&&(Wl(),$a&&(t=$a,e=Ha,Ha=$a=null,Uh(t),e)))for(t=0;t<e.length;t++)Uh(e[t])}}function Gi(e,t){var r=e.stateNode;if(r===null)return null;var o=r[mt]||null;if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=!1;if(ir)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Mc=!1}var Or=null,Nc=null,gl=null;function Hh(){if(gl)return gl;var e,t=Nc,r=t.length,o,s="value"in Or?Or.value:Or.textContent,f=s.length;for(e=0;e<r&&t[e]===s[e];e++);var m=r-e;for(o=1;o<=m&&t[r-o]===s[f-o];o++);return gl=s.slice(e,1<o?1-o:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function qh(){return!1}function qt(e){function t(r,o,s,f,m){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(f):f[j]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:qh,this.isPropagationStopped=qh,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=qt(sa),Xi=y({},sa,{view:0,detail:0}),T1=qt(Xi),zc,Dc,Pi,yl=y({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pi&&(Pi&&e.type==="mousemove"?(zc=e.screenX-Pi.screenX,Dc=e.screenY-Pi.screenY):Dc=zc=0,Pi=e),zc)},movementY:function(e){return"movementY"in e?e.movementY:Dc}}),Yh=qt(yl),_1=y({},yl,{dataTransfer:0}),C1=qt(_1),R1=y({},Xi,{relatedTarget:0}),Bc=qt(R1),k1=y({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=qt(k1),O1=y({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M1=qt(O1),N1=y({},sa,{data:0}),Gh=qt(N1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B1[e])?!!t[e]:!1}function Lc(){return L1}var U1=y({},Xi,{key:function(e){if(e.key){var t=z1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$1=qt(U1),H1=y({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=qt(H1),q1=y({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),Y1=qt(q1),G1=y({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=qt(G1),X1=y({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=qt(X1),Q1=y({},sa,{newState:0,oldState:0}),F1=qt(Q1),K1=[9,13,27,32],Uc=ir&&"CompositionEvent"in window,Qi=null;ir&&"documentMode"in document&&(Qi=document.documentMode);var Z1=ir&&"TextEvent"in window&&!Qi,Xh=ir&&(!Uc||Qi&&8<Qi&&11>=Qi),Ph=" ",Qh=!1;function Fh(e,t){switch(e){case"keyup":return K1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function J1(e,t){switch(e){case"compositionend":return Kh(t);case"keypress":return t.which!==32?null:(Qh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Qh?null:e;default:return null}}function I1(e,t){if(qa)return e==="compositionend"||!Uc&&Fh(e,t)?(e=Hh(),gl=Nc=Or=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xh&&t.locale!=="ko"?null:t.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W1[e.type]:t==="textarea"}function Jh(e,t,r,o){$a?Ha?Ha.push(o):Ha=[o]:$a=o,t=is(t,"onChange"),0<t.length&&(r=new bl("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Fi=null,Ki=null;function ev(e){O0(e,0)}function vl(e){var t=Ar(e);if(Mh(t))return e}function Ih(e,t){if(e==="change")return t}var Wh=!1;if(ir){var $c;if(ir){var Hc="oninput"in document;if(!Hc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Hc=typeof ep.oninput=="function"}$c=Hc}else $c=!1;Wh=$c&&(!document.documentMode||9<document.documentMode)}function tp(){Fi&&(Fi.detachEvent("onpropertychange",np),Ki=Fi=null)}function np(e){if(e.propertyName==="value"&&vl(Ki)){var t=[];Jh(t,Ki,e,Ac(e)),$h(ev,t)}}function tv(e,t,r){e==="focusin"?(tp(),Fi=t,Ki=r,Fi.attachEvent("onpropertychange",np)):e==="focusout"&&tp()}function nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Ki)}function rv(e,t){if(e==="click")return vl(t)}function av(e,t){if(e==="input"||e==="change")return vl(t)}function iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:iv;function Zi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!Ee.call(t,s)||!It(e[s],t[s]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ap(e,t){var r=rp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rp(r)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hl(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=hl(e.document)}return t}function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ov=ir&&"documentMode"in document&&11>=document.documentMode,Ya=null,Yc=null,Ji=null,Gc=!1;function lp(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gc||Ya==null||Ya!==hl(o)||(o=Ya,"selectionStart"in o&&qc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ji&&Zi(Ji,o)||(Ji=o,o=is(Yc,"onSelect"),0<o.length&&(t=new bl("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Ya)))}function ca(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ga={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Vc={},sp={};ir&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ua(e){if(Vc[e])return Vc[e];if(!Ga[e])return e;var t=Ga[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sp)return Vc[e]=t[r];return e}var cp=ua("animationend"),up=ua("animationiteration"),fp=ua("animationstart"),lv=ua("transitionrun"),sv=ua("transitionstart"),cv=ua("transitioncancel"),dp=ua("transitionend"),hp=new Map,Xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xc.push("scrollEnd");function Cn(e,t){hp.set(e,t),$n(t,[e])}var pp=new WeakMap;function hn(e,t){if(typeof e=="object"&&e!==null){var r=pp.get(e);return r!==void 0?r:(t={value:e,source:t,stack:la(t)},pp.set(e,t),t)}return{value:e,source:t,stack:la(t)}}var pn=[],Va=0,Pc=0;function wl(){for(var e=Va,t=Pc=Va=0;t<e;){var r=pn[t];pn[t++]=null;var o=pn[t];pn[t++]=null;var s=pn[t];pn[t++]=null;var f=pn[t];if(pn[t++]=null,o!==null&&s!==null){var m=o.pending;m===null?s.next=s:(s.next=m.next,m.next=s),o.pending=s}f!==0&&gp(r,s,f)}}function Sl(e,t,r,o){pn[Va++]=e,pn[Va++]=t,pn[Va++]=r,pn[Va++]=o,Pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Qc(e,t,r,o){return Sl(e,t,r,o),jl(e)}function Xa(e,t){return Sl(e,null,null,t),jl(e)}function gp(e,t,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var s=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(s=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,s&&t!==null&&(s=31-Fe(r),e=f.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=r|536870912),f):null}function jl(e){if(50<jo)throw jo=0,Wu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function uv(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,r,o){return new uv(e,t,r,o)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function or(e,t){var r=e.alternate;return r===null?(r=Wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function xp(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function El(e,t,r,o,s,f){var m=0;if(o=e,typeof e=="function")Fc(e)&&(m=1);else if(typeof e=="string")m=d5(e,r,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=Wt(31,r,t,s),e.elementType=I,e.lanes=f,e;case T:return fa(r.children,s,f,t);case _:m=8,s|=24;break;case R:return e=Wt(12,r,t,s|2),e.elementType=R,e.lanes=f,e;case $:return e=Wt(13,r,t,s),e.elementType=$,e.lanes=f,e;case F:return e=Wt(19,r,t,s),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case z:m=10;break e;case N:m=9;break e;case P:m=11;break e;case Z:m=14;break e;case ue:m=16,o=null;break e}m=29,r=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=Wt(m,r,t,s),t.elementType=e,t.type=o,t.lanes=f,t}function fa(e,t,r,o){return e=Wt(7,e,o,t),e.lanes=r,e}function Kc(e,t,r){return e=Wt(6,e,null,t),e.lanes=r,e}function Zc(e,t,r){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qa=[],Fa=0,Tl=null,_l=0,gn=[],xn=0,da=null,lr=1,sr="";function ha(e,t){Qa[Fa++]=_l,Qa[Fa++]=Tl,Tl=e,_l=t}function mp(e,t,r){gn[xn++]=lr,gn[xn++]=sr,gn[xn++]=da,da=e;var o=lr;e=sr;var s=32-Fe(o)-1;o&=~(1<<s),r+=1;var f=32-Fe(t)+s;if(30<f){var m=s-s%5;f=(o&(1<<m)-1).toString(32),o>>=m,s-=m,lr=1<<32-Fe(t)+s|r<<s|o,sr=f+e}else lr=1<<f|r<<s|o,sr=e}function Jc(e){e.return!==null&&(ha(e,1),mp(e,1,0))}function Ic(e){for(;e===Tl;)Tl=Qa[--Fa],Qa[Fa]=null,_l=Qa[--Fa],Qa[Fa]=null;for(;e===da;)da=gn[--xn],gn[xn]=null,sr=gn[--xn],gn[xn]=null,lr=gn[--xn],gn[xn]=null}var Ht=null,at=null,Le=!1,pa=null,Yn=!1,Wc=Error(l(519));function ga(e){var t=Error(l(418,""));throw eo(hn(t,e)),Wc}function bp(e){var t=e.stateNode,r=e.type,o=e.memoizedProps;switch(t[xt]=e,t[mt]=o,r){case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":case"embed":Oe("load",t);break;case"video":case"audio":for(r=0;r<To.length;r++)Oe(To[r],t);break;case"source":Oe("error",t);break;case"img":case"image":case"link":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"input":Oe("invalid",t),Nh(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),dl(t);break;case"select":Oe("invalid",t);break;case"textarea":Oe("invalid",t),Dh(t,o.value,o.defaultValue,o.children),dl(t)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||o.suppressHydrationWarning===!0||D0(t.textContent,r)?(o.popover!=null&&(Oe("beforetoggle",t),Oe("toggle",t)),o.onScroll!=null&&Oe("scroll",t),o.onScrollEnd!=null&&Oe("scrollend",t),o.onClick!=null&&(t.onclick=os),t=!0):t=!1,t||ga(e)}function yp(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:Ht=Ht.return}}function Ii(e){if(e!==Ht)return!1;if(!Le)return yp(e),Le=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||xf(e.type,e.memoizedProps)),r=!r),r&&at&&ga(e),yp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){at=kn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}at=null}}else t===27?(t=at,Qr(e.type)?(e=vf,vf=null,at=e):at=t):at=Ht?kn(e.stateNode.nextSibling):null;return!0}function Wi(){at=Ht=null,Le=!1}function vp(){var e=pa;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),pa=null),e}function eo(e){pa===null?pa=[e]:pa.push(e)}var eu=O(null),xa=null,cr=null;function Mr(e,t,r){V(eu,t._currentValue),t._currentValue=r}function ur(e){e._currentValue=eu.current,Q(eu)}function tu(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function nu(e,t,r,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var f=s.dependencies;if(f!==null){var m=s.child;f=f.firstContext;e:for(;f!==null;){var j=f;f=s;for(var k=0;k<t.length;k++)if(j.context===t[k]){f.lanes|=r,j=f.alternate,j!==null&&(j.lanes|=r),tu(f.return,r,e),o||(m=null);break e}f=j.next}}else if(s.tag===18){if(m=s.return,m===null)throw Error(l(341));m.lanes|=r,f=m.alternate,f!==null&&(f.lanes|=r),tu(m,r,e),m=null}else m=s.child;if(m!==null)m.return=s;else for(m=s;m!==null;){if(m===e){m=null;break}if(s=m.sibling,s!==null){s.return=m.return,m=s;break}m=m.return}s=m}}function to(e,t,r,o){e=null;for(var s=t,f=!1;s!==null;){if(!f){if((s.flags&524288)!==0)f=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var m=s.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var j=s.type;It(s.pendingProps.value,m.value)||(e!==null?e.push(j):e=[j])}}else if(s===ne.current){if(m=s.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}s=s.return}e!==null&&nu(t,e,r,o),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){xa=e,cr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nt(e){return wp(xa,e)}function Rl(e,t){return xa===null&&ma(e),wp(e,t)}function wp(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},cr===null){if(e===null)throw Error(l(308));cr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cr=cr.next=t;return r}var fv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},dv=n.unstable_scheduleCallback,hv=n.unstable_NormalPriority,pt={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new fv,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&dv(hv,function(){e.controller.abort()})}var ro=null,au=0,Ka=0,Za=null;function pv(e,t){if(ro===null){var r=ro=[];au=0,Ka=lf(),Za={status:"pending",value:void 0,then:function(o){r.push(o)}}}return au++,t.then(Sp,Sp),t}function Sp(){if(--au===0&&ro!==null){Za!==null&&(Za.status="fulfilled");var e=ro;ro=null,Ka=0,Za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gv(e,t){var r=[],o={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<r.length;s++)(0,r[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),o}var jp=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&pv(e,t),jp!==null&&jp(e,t)};var ba=O(null);function iu(){var e=ba.current;return e!==null?e:Ke.pooledCache}function kl(e,t){t===null?V(ba,ba.current):V(ba,t.pool)}function Ep(){var e=iu();return e===null?null:{parent:pt._currentValue,pool:e}}var ao=Error(l(460)),Tp=Error(l(474)),Al=Error(l(542)),ou={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function Cp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Ol,Ol),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kp(e),e;default:if(typeof t.status=="string")t.then(Ol,Ol);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kp(e),e}throw io=t,ao}}var io=null;function Rp(){if(io===null)throw Error(l(459));var e=io;return io=null,e}function kp(e){if(e===ao||e===Al)throw Error(l(483))}var Nr=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=jl(e),gp(e,null,r),t}return Sl(e,o,t,r),jl(e)}function oo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ui(e,r)}}function cu(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var m={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?s=f=m:f=f.next=m,r=r.next}while(r!==null);f===null?s=f=t:f=f.next=t}else s=f=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var uu=!1;function lo(){if(uu){var e=Za;if(e!==null)throw e}}function so(e,t,r,o){uu=!1;var s=e.updateQueue;Nr=!1;var f=s.firstBaseUpdate,m=s.lastBaseUpdate,j=s.shared.pending;if(j!==null){s.shared.pending=null;var k=j,U=k.next;k.next=null,m===null?f=U:m.next=U,m=k;var K=e.alternate;K!==null&&(K=K.updateQueue,j=K.lastBaseUpdate,j!==m&&(j===null?K.firstBaseUpdate=U:j.next=U,K.lastBaseUpdate=k))}if(f!==null){var W=s.baseState;m=0,K=U=k=null,j=f;do{var q=j.lane&-536870913,G=q!==j.lane;if(G?(ze&q)===q:(o&q)===q){q!==0&&q===Ka&&(uu=!0),K!==null&&(K=K.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var Se=e,be=j;q=t;var Xe=r;switch(be.tag){case 1:if(Se=be.payload,typeof Se=="function"){W=Se.call(Xe,W,q);break e}W=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=be.payload,q=typeof Se=="function"?Se.call(Xe,W,q):Se,q==null)break e;W=y({},W,q);break e;case 2:Nr=!0}}q=j.callback,q!==null&&(e.flags|=64,G&&(e.flags|=8192),G=s.callbacks,G===null?s.callbacks=[q]:G.push(q))}else G={lane:q,tag:j.tag,payload:j.payload,callback:j.callback,next:null},K===null?(U=K=G,k=W):K=K.next=G,m|=q;if(j=j.next,j===null){if(j=s.shared.pending,j===null)break;G=j,j=G.next,G.next=null,s.lastBaseUpdate=G,s.shared.pending=null}}while(!0);K===null&&(k=W),s.baseState=k,s.firstBaseUpdate=U,s.lastBaseUpdate=K,f===null&&(s.shared.lanes=0),Gr|=m,e.lanes=m,e.memoizedState=W}}function Ap(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Op(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Ap(r[e],t)}var Ja=O(null),Ml=O(0);function Mp(e,t){e=mr,V(Ml,e),V(Ja,t),mr=e|t.baseLanes}function fu(){V(Ml,mr),V(Ja,Ja.current)}function du(){mr=Ml.current,Q(Ja),Q(Ml)}var Br=0,Re=null,Ge=null,ut=null,Nl=!1,Ia=!1,ya=!1,zl=0,co=0,Wa=null,xv=0;function st(){throw Error(l(321))}function hu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!It(e[r],t[r]))return!1;return!0}function pu(e,t,r,o,s,f){return Br=f,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?gg:xg,ya=!1,f=r(o,s),ya=!1,Ia&&(f=zp(t,r,o,s)),Np(e),f}function Np(e){H.H=Hl;var t=Ge!==null&&Ge.next!==null;if(Br=0,ut=Ge=Re=null,Nl=!1,co=0,Wa=null,t)throw Error(l(300));e===null||yt||(e=e.dependencies,e!==null&&Cl(e)&&(yt=!0))}function zp(e,t,r,o){Re=e;var s=0;do{if(Ia&&(Wa=null),co=0,Ia=!1,25<=s)throw Error(l(301));if(s+=1,ut=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=jv,f=t(r,o)}while(Ia);return f}function mv(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?uo(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Re.flags|=1024),t}function gu(){var e=zl!==0;return zl=0,e}function xu(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function mu(e){if(Nl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nl=!1}Br=0,ut=Ge=Re=null,Ia=!1,co=zl=0,Wa=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Re.memoizedState=ut=e:ut=ut.next=e,ut}function ft(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=ut===null?Re.memoizedState:ut.next;if(t!==null)ut=t,Ge=e;else{if(e===null)throw Re.alternate===null?Error(l(467)):Error(l(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},ut===null?Re.memoizedState=ut=e:ut=ut.next=e}return ut}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var t=co;return co+=1,Wa===null&&(Wa=[]),e=Cp(Wa,e,t),t=Re,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?gg:xg),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===z)return Nt(e)}throw Error(l(438,String(e)))}function yu(e){var t=null,r=Re.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var o=Re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=bu(),Re.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),o=0;o<e;o++)r[o]=le;return t.index++,r}function fr(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ft();return vu(t,Ge,e)}function vu(e,t,r){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=r;var s=e.baseQueue,f=o.pending;if(f!==null){if(s!==null){var m=s.next;s.next=f.next,f.next=m}t.baseQueue=s=f,o.pending=null}if(f=e.baseState,s===null)e.memoizedState=f;else{t=s.next;var j=m=null,k=null,U=t,K=!1;do{var W=U.lane&-536870913;if(W!==U.lane?(ze&W)===W:(Br&W)===W){var q=U.revertLane;if(q===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),W===Ka&&(K=!0);else if((Br&q)===q){U=U.next,q===Ka&&(K=!0);continue}else W={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},k===null?(j=k=W,m=f):k=k.next=W,Re.lanes|=q,Gr|=q;W=U.action,ya&&r(f,W),f=U.hasEagerState?U.eagerState:r(f,W)}else q={lane:W,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},k===null?(j=k=q,m=f):k=k.next=q,Re.lanes|=W,Gr|=W;U=U.next}while(U!==null&&U!==t);if(k===null?m=f:k.next=j,!It(f,e.memoizedState)&&(yt=!0,K&&(r=Za,r!==null)))throw r;e.memoizedState=f,e.baseState=m,e.baseQueue=k,o.lastRenderedState=f}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wu(e){var t=ft(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,f=t.memoizedState;if(s!==null){r.pending=null;var m=s=s.next;do f=e(f,m.action),m=m.next;while(m!==s);It(f,t.memoizedState)||(yt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,o]}function Dp(e,t,r){var o=Re,s=ft(),f=Le;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var m=!It((Ge||s).memoizedState,r);m&&(s.memoizedState=r,yt=!0),s=s.queue;var j=Up.bind(null,o,s,e);if(fo(2048,8,j,[e]),s.getSnapshot!==t||m||ut!==null&&ut.memoizedState.tag&1){if(o.flags|=2048,ei(9,Ll(),Lp.bind(null,o,s,r,t),null),Ke===null)throw Error(l(349));f||(Br&124)!==0||Bp(o,t,r)}return r}function Bp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Re.updateQueue,t===null?(t=bu(),Re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Lp(e,t,r,o){t.value=r,t.getSnapshot=o,$p(t)&&Hp(e)}function Up(e,t,r){return r(function(){$p(t)&&Hp(e)})}function $p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!It(e,r)}catch{return!0}}function Hp(e){var t=Xa(e,2);t!==null&&an(t,e,2)}function Su(e){var t=Yt();if(typeof e=="function"){var r=e;if(e=r(),ya){Et(!0);try{r()}finally{Et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t}function qp(e,t,r,o){return e.baseState=r,vu(e,Ge,typeof o=="function"?o:fr)}function bv(e,t,r,o,s){if($l(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};H.T!==null?r(!0):f.isTransition=!1,o(f),r=t.pending,r===null?(f.next=t.pending=f,Yp(t,f)):(f.next=r.next,t.pending=r.next=f)}}function Yp(e,t){var r=t.action,o=t.payload,s=e.state;if(t.isTransition){var f=H.T,m={};H.T=m;try{var j=r(s,o),k=H.S;k!==null&&k(m,j),Gp(e,t,j)}catch(U){ju(e,t,U)}finally{H.T=f}}else try{f=r(s,o),Gp(e,t,f)}catch(U){ju(e,t,U)}}function Gp(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Vp(e,t,o)},function(o){return ju(e,t,o)}):Vp(e,t,r)}function Vp(e,t,r){t.status="fulfilled",t.value=r,Xp(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,Yp(e,r)))}function ju(e,t,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=r,Xp(t),t=t.next;while(t!==o)}e.action=null}function Xp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pp(e,t){return t}function Qp(e,t){if(Le){var r=Ke.formState;if(r!==null){e:{var o=Re;if(Le){if(at){t:{for(var s=at,f=Yn;s.nodeType!==8;){if(!f){s=null;break t}if(s=kn(s.nextSibling),s===null){s=null;break t}}f=s.data,s=f==="F!"||f==="F"?s:null}if(s){at=kn(s.nextSibling),o=s.data==="F!";break e}}ga(o)}o=!1}o&&(t=r[0])}}return r=Yt(),r.memoizedState=r.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:t},r.queue=o,r=dg.bind(null,Re,o),o.dispatch=r,o=Su(!1),f=Ru.bind(null,Re,!1,o.queue),o=Yt(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,r=bv.bind(null,Re,s,f,r),s.dispatch=r,o.memoizedState=e,[t,r,!1]}function Fp(e){var t=ft();return Kp(t,Ge,e)}function Kp(e,t,r){if(t=vu(e,t,Pp)[0],e=Bl(fr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=uo(t)}catch(m){throw m===ao?Al:m}else o=t;t=ft();var s=t.queue,f=s.dispatch;return r!==t.memoizedState&&(Re.flags|=2048,ei(9,Ll(),yv.bind(null,s,r),null)),[o,f,e]}function yv(e,t){e.action=t}function Zp(e){var t=ft(),r=Ge;if(r!==null)return Kp(t,r,e);ft(),t=t.memoizedState,r=ft();var o=r.queue.dispatch;return r.memoizedState=e,[t,o,!1]}function ei(e,t,r,o){return e={tag:e,create:r,deps:o,inst:t,next:null},t=Re.updateQueue,t===null&&(t=bu(),Re.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e),e}function Ll(){return{destroy:void 0,resource:void 0}}function Jp(){return ft().memoizedState}function Ul(e,t,r,o){var s=Yt();o=o===void 0?null:o,Re.flags|=e,s.memoizedState=ei(1|t,Ll(),r,o)}function fo(e,t,r,o){var s=ft();o=o===void 0?null:o;var f=s.memoizedState.inst;Ge!==null&&o!==null&&hu(o,Ge.memoizedState.deps)?s.memoizedState=ei(t,f,r,o):(Re.flags|=e,s.memoizedState=ei(1|t,f,r,o))}function Ip(e,t){Ul(8390656,8,e,t)}function Wp(e,t){fo(2048,8,e,t)}function eg(e,t){return fo(4,2,e,t)}function tg(e,t){return fo(4,4,e,t)}function ng(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rg(e,t,r){r=r!=null?r.concat([e]):null,fo(4,4,ng.bind(null,t,e),r)}function Eu(){}function ag(e,t){var r=ft();t=t===void 0?null:t;var o=r.memoizedState;return t!==null&&hu(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function ig(e,t){var r=ft();t=t===void 0?null:t;var o=r.memoizedState;if(t!==null&&hu(t,o[1]))return o[0];if(o=e(),ya){Et(!0);try{e()}finally{Et(!1)}}return r.memoizedState=[o,t],o}function Tu(e,t,r){return r===void 0||(Br&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=s0(),Re.lanes|=e,Gr|=e,r)}function og(e,t,r,o){return It(r,t)?r:Ja.current!==null?(e=Tu(e,r,o),It(e,t)||(yt=!0),e):(Br&42)===0?(yt=!0,e.memoizedState=r):(e=s0(),Re.lanes|=e,Gr|=e,t)}function lg(e,t,r,o,s){var f=ee.p;ee.p=f!==0&&8>f?f:8;var m=H.T,j={};H.T=j,Ru(e,!1,t,r);try{var k=s(),U=H.S;if(U!==null&&U(j,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var K=gv(k,o);ho(e,t,K,rn(e))}else ho(e,t,o,rn(e))}catch(W){ho(e,t,{then:function(){},status:"rejected",reason:W},rn())}finally{ee.p=f,H.T=m}}function vv(){}function _u(e,t,r,o){if(e.tag!==5)throw Error(l(476));var s=sg(e).queue;lg(e,s,t,se,r===null?vv:function(){return cg(e),r(o)})}function sg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:se},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cg(e){var t=sg(e).next.queue;ho(e,t,{},rn())}function Cu(){return Nt(Oo)}function ug(){return ft().memoizedState}function fg(){return ft().memoizedState}function wv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=rn();e=zr(r);var o=Dr(t,e,r);o!==null&&(an(o,t,r),oo(o,t,r)),t={cache:ru()},e.payload=t;return}t=t.return}}function Sv(e,t,r){var o=rn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},$l(e)?hg(t,r):(r=Qc(e,t,r,o),r!==null&&(an(r,e,o),pg(r,t,o)))}function dg(e,t,r){var o=rn();ho(e,t,r,o)}function ho(e,t,r,o){var s={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if($l(e))hg(t,s);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,j=f(m,r);if(s.hasEagerState=!0,s.eagerState=j,It(j,m))return Sl(e,t,s,0),Ke===null&&wl(),!1}catch{}finally{}if(r=Qc(e,t,s,o),r!==null)return an(r,e,o),pg(r,t,o),!0}return!1}function Ru(e,t,r,o){if(o={lane:2,revertLane:lf(),action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(t)throw Error(l(479))}else t=Qc(e,r,o,2),t!==null&&an(t,e,2)}function $l(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function hg(e,t){Ia=Nl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function pg(e,t,r){if((r&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ui(e,r)}}var Hl={readContext:Nt,use:Dl,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},gg={readContext:Nt,use:Dl,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Ip,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,Ul(4194308,4,ng.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){Ul(4,2,e,t)},useMemo:function(e,t){var r=Yt();t=t===void 0?null:t;var o=e();if(ya){Et(!0);try{e()}finally{Et(!1)}}return r.memoizedState=[o,t],o},useReducer:function(e,t,r){var o=Yt();if(r!==void 0){var s=r(t);if(ya){Et(!0);try{r(t)}finally{Et(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=Sv.bind(null,Re,e),[o.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Su(e);var t=e.queue,r=dg.bind(null,Re,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Eu,useDeferredValue:function(e,t){var r=Yt();return Tu(r,e,t)},useTransition:function(){var e=Su(!1);return e=lg.bind(null,Re,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var o=Re,s=Yt();if(Le){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ke===null)throw Error(l(349));(ze&124)!==0||Bp(o,t,r)}s.memoizedState=r;var f={value:r,getSnapshot:t};return s.queue=f,Ip(Up.bind(null,o,f,e),[e]),o.flags|=2048,ei(9,Ll(),Lp.bind(null,o,f,r,t),null),r},useId:function(){var e=Yt(),t=Ke.identifierPrefix;if(Le){var r=sr,o=lr;r=(o&~(1<<32-Fe(o)-1)).toString(32)+r,t="«"+t+"R"+r,r=zl++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=xv++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Cu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Ru.bind(null,Re,!0,r),r.dispatch=t,[e,t]},useMemoCache:yu,useCacheRefresh:function(){return Yt().memoizedState=wv.bind(null,Re)}},xg={readContext:Nt,use:Dl,useCallback:ag,useContext:Nt,useEffect:Wp,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:ig,useReducer:Bl,useRef:Jp,useState:function(){return Bl(fr)},useDebugValue:Eu,useDeferredValue:function(e,t){var r=ft();return og(r,Ge.memoizedState,e,t)},useTransition:function(){var e=Bl(fr)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:uo(e),t]},useSyncExternalStore:Dp,useId:ug,useHostTransitionStatus:Cu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,t){var r=ft();return qp(r,Ge,e,t)},useMemoCache:yu,useCacheRefresh:fg},jv={readContext:Nt,use:Dl,useCallback:ag,useContext:Nt,useEffect:Wp,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:ig,useReducer:wu,useRef:Jp,useState:function(){return wu(fr)},useDebugValue:Eu,useDeferredValue:function(e,t){var r=ft();return Ge===null?Tu(r,e,t):og(r,Ge.memoizedState,e,t)},useTransition:function(){var e=wu(fr)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:uo(e),t]},useSyncExternalStore:Dp,useId:ug,useHostTransitionStatus:Cu,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,t){var r=ft();return Ge!==null?qp(r,Ge,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:yu,useCacheRefresh:fg},ti=null,po=0;function ql(e){var t=po;return po+=1,ti===null&&(ti=[]),Cp(ti,e,t)}function go(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yl(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mg(e){var t=e._init;return t(e._payload)}function bg(e){function t(D,M){if(e){var B=D.deletions;B===null?(D.deletions=[M],D.flags|=16):B.push(M)}}function r(D,M){if(!e)return null;for(;M!==null;)t(D,M),M=M.sibling;return null}function o(D){for(var M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function s(D,M){return D=or(D,M),D.index=0,D.sibling=null,D}function f(D,M,B){return D.index=B,e?(B=D.alternate,B!==null?(B=B.index,B<M?(D.flags|=67108866,M):B):(D.flags|=67108866,M)):(D.flags|=1048576,M)}function m(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function j(D,M,B,J){return M===null||M.tag!==6?(M=Kc(B,D.mode,J),M.return=D,M):(M=s(M,B),M.return=D,M)}function k(D,M,B,J){var de=B.type;return de===T?K(D,M,B.props.children,J,B.key):M!==null&&(M.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ue&&mg(de)===M.type)?(M=s(M,B.props),go(M,B),M.return=D,M):(M=El(B.type,B.key,B.props,null,D.mode,J),go(M,B),M.return=D,M)}function U(D,M,B,J){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Zc(B,D.mode,J),M.return=D,M):(M=s(M,B.children||[]),M.return=D,M)}function K(D,M,B,J,de){return M===null||M.tag!==7?(M=fa(B,D.mode,J,de),M.return=D,M):(M=s(M,B),M.return=D,M)}function W(D,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Kc(""+M,D.mode,B),M.return=D,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return B=El(M.type,M.key,M.props,null,D.mode,B),go(B,M),B.return=D,B;case C:return M=Zc(M,D.mode,B),M.return=D,M;case ue:var J=M._init;return M=J(M._payload),W(D,M,B)}if(ge(M)||ce(M))return M=fa(M,D.mode,B,null),M.return=D,M;if(typeof M.then=="function")return W(D,ql(M),B);if(M.$$typeof===z)return W(D,Rl(D,M),B);Yl(D,M)}return null}function q(D,M,B,J){var de=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return de!==null?null:j(D,M,""+B,J);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===de?k(D,M,B,J):null;case C:return B.key===de?U(D,M,B,J):null;case ue:return de=B._init,B=de(B._payload),q(D,M,B,J)}if(ge(B)||ce(B))return de!==null?null:K(D,M,B,J,null);if(typeof B.then=="function")return q(D,M,ql(B),J);if(B.$$typeof===z)return q(D,M,Rl(D,B),J);Yl(D,B)}return null}function G(D,M,B,J,de){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return D=D.get(B)||null,j(M,D,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return D=D.get(J.key===null?B:J.key)||null,k(M,D,J,de);case C:return D=D.get(J.key===null?B:J.key)||null,U(M,D,J,de);case ue:var ke=J._init;return J=ke(J._payload),G(D,M,B,J,de)}if(ge(J)||ce(J))return D=D.get(B)||null,K(M,D,J,de,null);if(typeof J.then=="function")return G(D,M,B,ql(J),de);if(J.$$typeof===z)return G(D,M,B,Rl(M,J),de);Yl(M,J)}return null}function Se(D,M,B,J){for(var de=null,ke=null,pe=M,ve=M=0,wt=null;pe!==null&&ve<B.length;ve++){pe.index>ve?(wt=pe,pe=null):wt=pe.sibling;var Be=q(D,pe,B[ve],J);if(Be===null){pe===null&&(pe=wt);break}e&&pe&&Be.alternate===null&&t(D,pe),M=f(Be,M,ve),ke===null?de=Be:ke.sibling=Be,ke=Be,pe=wt}if(ve===B.length)return r(D,pe),Le&&ha(D,ve),de;if(pe===null){for(;ve<B.length;ve++)pe=W(D,B[ve],J),pe!==null&&(M=f(pe,M,ve),ke===null?de=pe:ke.sibling=pe,ke=pe);return Le&&ha(D,ve),de}for(pe=o(pe);ve<B.length;ve++)wt=G(pe,D,ve,B[ve],J),wt!==null&&(e&&wt.alternate!==null&&pe.delete(wt.key===null?ve:wt.key),M=f(wt,M,ve),ke===null?de=wt:ke.sibling=wt,ke=wt);return e&&pe.forEach(function(Ir){return t(D,Ir)}),Le&&ha(D,ve),de}function be(D,M,B,J){if(B==null)throw Error(l(151));for(var de=null,ke=null,pe=M,ve=M=0,wt=null,Be=B.next();pe!==null&&!Be.done;ve++,Be=B.next()){pe.index>ve?(wt=pe,pe=null):wt=pe.sibling;var Ir=q(D,pe,Be.value,J);if(Ir===null){pe===null&&(pe=wt);break}e&&pe&&Ir.alternate===null&&t(D,pe),M=f(Ir,M,ve),ke===null?de=Ir:ke.sibling=Ir,ke=Ir,pe=wt}if(Be.done)return r(D,pe),Le&&ha(D,ve),de;if(pe===null){for(;!Be.done;ve++,Be=B.next())Be=W(D,Be.value,J),Be!==null&&(M=f(Be,M,ve),ke===null?de=Be:ke.sibling=Be,ke=Be);return Le&&ha(D,ve),de}for(pe=o(pe);!Be.done;ve++,Be=B.next())Be=G(pe,D,ve,Be.value,J),Be!==null&&(e&&Be.alternate!==null&&pe.delete(Be.key===null?ve:Be.key),M=f(Be,M,ve),ke===null?de=Be:ke.sibling=Be,ke=Be);return e&&pe.forEach(function(E5){return t(D,E5)}),Le&&ha(D,ve),de}function Xe(D,M,B,J){if(typeof B=="object"&&B!==null&&B.type===T&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:e:{for(var de=B.key;M!==null;){if(M.key===de){if(de=B.type,de===T){if(M.tag===7){r(D,M.sibling),J=s(M,B.props.children),J.return=D,D=J;break e}}else if(M.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ue&&mg(de)===M.type){r(D,M.sibling),J=s(M,B.props),go(J,B),J.return=D,D=J;break e}r(D,M);break}else t(D,M);M=M.sibling}B.type===T?(J=fa(B.props.children,D.mode,J,B.key),J.return=D,D=J):(J=El(B.type,B.key,B.props,null,D.mode,J),go(J,B),J.return=D,D=J)}return m(D);case C:e:{for(de=B.key;M!==null;){if(M.key===de)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){r(D,M.sibling),J=s(M,B.children||[]),J.return=D,D=J;break e}else{r(D,M);break}else t(D,M);M=M.sibling}J=Zc(B,D.mode,J),J.return=D,D=J}return m(D);case ue:return de=B._init,B=de(B._payload),Xe(D,M,B,J)}if(ge(B))return Se(D,M,B,J);if(ce(B)){if(de=ce(B),typeof de!="function")throw Error(l(150));return B=de.call(B),be(D,M,B,J)}if(typeof B.then=="function")return Xe(D,M,ql(B),J);if(B.$$typeof===z)return Xe(D,M,Rl(D,B),J);Yl(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(r(D,M.sibling),J=s(M,B),J.return=D,D=J):(r(D,M),J=Kc(B,D.mode,J),J.return=D,D=J),m(D)):r(D,M)}return function(D,M,B,J){try{po=0;var de=Xe(D,M,B,J);return ti=null,de}catch(pe){if(pe===ao||pe===Al)throw pe;var ke=Wt(29,pe,null,D.mode);return ke.lanes=J,ke.return=D,ke}finally{}}}var ni=bg(!0),yg=bg(!1),mn=O(null),Gn=null;function Lr(e){var t=e.alternate;V(gt,gt.current&1),V(mn,e),Gn===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(Gn=e)}function vg(e){if(e.tag===22){if(V(gt,gt.current),V(mn,e),Gn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gn=e)}}else Ur()}function Ur(){V(gt,gt.current),V(mn,mn.current)}function dr(e){Q(mn),Gn===e&&(Gn=null),Q(gt)}var gt=O(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||yf(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ku(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Au={enqueueSetState:function(e,t,r){e=e._reactInternals;var o=rn(),s=zr(o);s.payload=t,r!=null&&(s.callback=r),t=Dr(e,s,o),t!==null&&(an(t,e,o),oo(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=rn(),s=zr(o);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Dr(e,s,o),t!==null&&(an(t,e,o),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=rn(),o=zr(r);o.tag=2,t!=null&&(o.callback=t),t=Dr(e,o,r),t!==null&&(an(t,e,r),oo(t,e,r))}};function wg(e,t,r,o,s,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,m):t.prototype&&t.prototype.isPureReactComponent?!Zi(r,o)||!Zi(s,f):!0}function Sg(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function va(e,t){var r=t;if("ref"in t){r={};for(var o in t)o!=="ref"&&(r[o]=t[o])}if(e=e.defaultProps){r===t&&(r=y({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jg(e){Vl(e)}function Eg(e){console.error(e)}function Tg(e){Vl(e)}function Xl(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function _g(e,t,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ou(e,t,r){return r=zr(r),r.tag=3,r.payload={element:null},r.callback=function(){Xl(e,t)},r}function Cg(e){return e=zr(e),e.tag=3,e}function Rg(e,t,r,o){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var f=o.value;e.payload=function(){return s(f)},e.callback=function(){_g(t,r,o)}}var m=r.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){_g(t,r,o),typeof s!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var j=o.stack;this.componentDidCatch(o.value,{componentStack:j!==null?j:""})})}function Ev(e,t,r,o,s){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=r.alternate,t!==null&&to(t,r,s,!0),r=mn.current,r!==null){switch(r.tag){case 13:return Gn===null?tf():r.alternate===null&&it===0&&(it=3),r.flags&=-257,r.flags|=65536,r.lanes=s,o===ou?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([o]):t.add(o),rf(e,o,s)),!1;case 22:return r.flags|=65536,o===ou?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([o]):r.add(o)),rf(e,o,s)),!1}throw Error(l(435,r.tag))}return rf(e,o,s),tf(),!1}if(Le)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==Wc&&(e=Error(l(422),{cause:o}),eo(hn(e,r)))):(o!==Wc&&(t=Error(l(423),{cause:o}),eo(hn(t,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=hn(o,r),s=Ou(e.stateNode,o,s),cu(e,s),it!==4&&(it=2)),!1;var f=Error(l(520),{cause:o});if(f=hn(f,r),So===null?So=[f]:So.push(f),it!==4&&(it=2),t===null)return!0;o=hn(o,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=Ou(r.stateNode,o,e),cu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vr===null||!Vr.has(f))))return r.flags|=65536,s&=-s,r.lanes|=s,s=Cg(s),Rg(s,e,r,o),cu(r,s),!1}r=r.return}while(r!==null);return!1}var kg=Error(l(461)),yt=!1;function Tt(e,t,r,o){t.child=e===null?yg(t,null,r,o):ni(t,e.child,r,o)}function Ag(e,t,r,o,s){r=r.render;var f=t.ref;if("ref"in o){var m={};for(var j in o)j!=="ref"&&(m[j]=o[j])}else m=o;return ma(t),o=pu(e,t,r,m,f,s),j=gu(),e!==null&&!yt?(xu(e,t,s),hr(e,t,s)):(Le&&j&&Jc(t),t.flags|=1,Tt(e,t,o,s),t.child)}function Og(e,t,r,o,s){if(e===null){var f=r.type;return typeof f=="function"&&!Fc(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,Mg(e,t,f,o,s)):(e=El(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!$u(e,s)){var m=f.memoizedProps;if(r=r.compare,r=r!==null?r:Zi,r(m,o)&&e.ref===t.ref)return hr(e,t,s)}return t.flags|=1,e=or(f,o),e.ref=t.ref,e.return=t,t.child=e}function Mg(e,t,r,o,s){if(e!==null){var f=e.memoizedProps;if(Zi(f,o)&&e.ref===t.ref)if(yt=!1,t.pendingProps=o=f,$u(e,s))(e.flags&131072)!==0&&(yt=!0);else return t.lanes=e.lanes,hr(e,t,s)}return Mu(e,t,r,o,s)}function Ng(e,t,r){var o=t.pendingProps,s=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=f!==null?f.baseLanes|r:r,e!==null){for(s=t.child=e.child,f=0;s!==null;)f=f|s.lanes|s.childLanes,s=s.sibling;t.childLanes=f&~o}else t.childLanes=0,t.child=null;return zg(e,t,o,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,f!==null?f.cachePool:null),f!==null?Mp(t,f):fu(),vg(t);else return t.lanes=t.childLanes=536870912,zg(e,t,f!==null?f.baseLanes|r:r,r)}else f!==null?(kl(t,f.cachePool),Mp(t,f),Ur(),t.memoizedState=null):(e!==null&&kl(t,null),fu(),Ur());return Tt(e,t,s,r),t.child}function zg(e,t,r,o){var s=iu();return s=s===null?null:{parent:pt._currentValue,pool:s},t.memoizedState={baseLanes:r,cachePool:s},e!==null&&kl(t,null),fu(),vg(t),e!==null&&to(e,t,o,!0),null}function Pl(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Mu(e,t,r,o,s){return ma(t),r=pu(e,t,r,o,void 0,s),o=gu(),e!==null&&!yt?(xu(e,t,s),hr(e,t,s)):(Le&&o&&Jc(t),t.flags|=1,Tt(e,t,r,s),t.child)}function Dg(e,t,r,o,s,f){return ma(t),t.updateQueue=null,r=zp(t,o,r,s),Np(e),o=gu(),e!==null&&!yt?(xu(e,t,f),hr(e,t,f)):(Le&&o&&Jc(t),t.flags|=1,Tt(e,t,r,f),t.child)}function Bg(e,t,r,o,s){if(ma(t),t.stateNode===null){var f=Pa,m=r.contextType;typeof m=="object"&&m!==null&&(f=Nt(m)),f=new r(o,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Au,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=o,f.state=t.memoizedState,f.refs={},lu(t),m=r.contextType,f.context=typeof m=="object"&&m!==null?Nt(m):Pa,f.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(ku(t,r,m,o),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&Au.enqueueReplaceState(f,f.state,null),so(t,o,f,s),lo(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){f=t.stateNode;var j=t.memoizedProps,k=va(r,j);f.props=k;var U=f.context,K=r.contextType;m=Pa,typeof K=="object"&&K!==null&&(m=Nt(K));var W=r.getDerivedStateFromProps;K=typeof W=="function"||typeof f.getSnapshotBeforeUpdate=="function",j=t.pendingProps!==j,K||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j||U!==m)&&Sg(t,f,o,m),Nr=!1;var q=t.memoizedState;f.state=q,so(t,o,f,s),lo(),U=t.memoizedState,j||q!==U||Nr?(typeof W=="function"&&(ku(t,r,W,o),U=t.memoizedState),(k=Nr||wg(t,r,k,o,q,U,m))?(K||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=U),f.props=o,f.state=U,f.context=m,o=k):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,su(e,t),m=t.memoizedProps,K=va(r,m),f.props=K,W=t.pendingProps,q=f.context,U=r.contextType,k=Pa,typeof U=="object"&&U!==null&&(k=Nt(U)),j=r.getDerivedStateFromProps,(U=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==W||q!==k)&&Sg(t,f,o,k),Nr=!1,q=t.memoizedState,f.state=q,so(t,o,f,s),lo();var G=t.memoizedState;m!==W||q!==G||Nr||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof j=="function"&&(ku(t,r,j,o),G=t.memoizedState),(K=Nr||wg(t,r,K,o,q,G,k)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(U||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,G,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,G,k)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=G),f.props=o,f.state=G,f.context=k,o=K):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),o=!1)}return f=o,Pl(e,t),o=(t.flags&128)!==0,f||o?(f=t.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&o?(t.child=ni(t,e.child,null,s),t.child=ni(t,null,r,s)):Tt(e,t,r,s),t.memoizedState=f.state,e=t.child):e=hr(e,t,s),e}function Lg(e,t,r,o){return Wi(),t.flags|=256,Tt(e,t,r,o),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(e){return{baseLanes:e,cachePool:Ep()}}function Du(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=bn),e}function Ug(e,t,r){var o=t.pendingProps,s=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),m&&(s=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(s?Lr(t):Ur(),Le){var j=at,k;if(k=j){e:{for(k=j,j=Yn;k.nodeType!==8;){if(!j){j=null;break e}if(k=kn(k.nextSibling),k===null){j=null;break e}}j=k}j!==null?(t.memoizedState={dehydrated:j,treeContext:da!==null?{id:lr,overflow:sr}:null,retryLane:536870912,hydrationErrors:null},k=Wt(18,null,null,0),k.stateNode=j,k.return=t,t.child=k,Ht=t,at=null,k=!0):k=!1}k||ga(t)}if(j=t.memoizedState,j!==null&&(j=j.dehydrated,j!==null))return yf(j)?t.lanes=32:t.lanes=536870912,null;dr(t)}return j=o.children,o=o.fallback,s?(Ur(),s=t.mode,j=Ql({mode:"hidden",children:j},s),o=fa(o,s,r,null),j.return=t,o.return=t,j.sibling=o,t.child=j,s=t.child,s.memoizedState=zu(r),s.childLanes=Du(e,m,r),t.memoizedState=Nu,o):(Lr(t),Bu(t,j))}if(k=e.memoizedState,k!==null&&(j=k.dehydrated,j!==null)){if(f)t.flags&256?(Lr(t),t.flags&=-257,t=Lu(e,t,r)):t.memoizedState!==null?(Ur(),t.child=e.child,t.flags|=128,t=null):(Ur(),s=o.fallback,j=t.mode,o=Ql({mode:"visible",children:o.children},j),s=fa(s,j,r,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,ni(t,e.child,null,r),o=t.child,o.memoizedState=zu(r),o.childLanes=Du(e,m,r),t.memoizedState=Nu,t=s);else if(Lr(t),yf(j)){if(m=j.nextSibling&&j.nextSibling.dataset,m)var U=m.dgst;m=U,o=Error(l(419)),o.stack="",o.digest=m,eo({value:o,source:null,stack:null}),t=Lu(e,t,r)}else if(yt||to(e,t,r,!1),m=(r&e.childLanes)!==0,yt||m){if(m=Ke,m!==null&&(o=r&-r,o=(o&42)!==0?1:$i(o),o=(o&(m.suspendedLanes|r))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,Xa(e,o),an(m,e,o),kg;j.data==="$?"||tf(),t=Lu(e,t,r)}else j.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=k.treeContext,at=kn(j.nextSibling),Ht=t,Le=!0,pa=null,Yn=!1,e!==null&&(gn[xn++]=lr,gn[xn++]=sr,gn[xn++]=da,lr=e.id,sr=e.overflow,da=t),t=Bu(t,o.children),t.flags|=4096);return t}return s?(Ur(),s=o.fallback,j=t.mode,k=e.child,U=k.sibling,o=or(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,U!==null?s=or(U,s):(s=fa(s,j,r,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,j=e.child.memoizedState,j===null?j=zu(r):(k=j.cachePool,k!==null?(U=pt._currentValue,k=k.parent!==U?{parent:U,pool:U}:k):k=Ep(),j={baseLanes:j.baseLanes|r,cachePool:k}),s.memoizedState=j,s.childLanes=Du(e,m,r),t.memoizedState=Nu,o):(Lr(t),r=e.child,e=r.sibling,r=or(r,{mode:"visible",children:o.children}),r.return=t,r.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=r,t.memoizedState=null,r)}function Bu(e,t){return t=Ql({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ql(e,t){return e=Wt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Lu(e,t,r){return ni(t,e.child,null,r),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $g(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),tu(e.return,t,r)}function Uu(e,t,r,o,s){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=s)}function Hg(e,t,r){var o=t.pendingProps,s=o.revealOrder,f=o.tail;if(Tt(e,t,o.children,r),o=gt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,r,t);else if(e.tag===19)$g(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(V(gt,o),s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Gl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Uu(t,!1,s,r,f);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Gl(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Uu(t,!0,r,null,f);break;case"together":Uu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(to(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=or(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=or(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function $u(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function Tv(e,t,r){switch(t.tag){case 3:ae(t,t.stateNode.containerInfo),Mr(t,pt,e.memoizedState.cache),Wi();break;case 27:case 5:fe(t);break;case 4:ae(t,t.stateNode.containerInfo);break;case 10:Mr(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Lr(t),t.flags|=128,null):(r&t.child.childLanes)!==0?Ug(e,t,r):(Lr(t),e=hr(e,t,r),e!==null?e.sibling:null);Lr(t);break;case 19:var s=(e.flags&128)!==0;if(o=(r&t.childLanes)!==0,o||(to(e,t,r,!1),o=(r&t.childLanes)!==0),s){if(o)return Hg(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),V(gt,gt.current),o)break;return null;case 22:case 23:return t.lanes=0,Ng(e,t,r);case 24:Mr(t,pt,e.memoizedState.cache)}return hr(e,t,r)}function qg(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)yt=!0;else{if(!$u(e,r)&&(t.flags&128)===0)return yt=!1,Tv(e,t,r);yt=(e.flags&131072)!==0}else yt=!1,Le&&(t.flags&1048576)!==0&&mp(t,_l,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,s=o._init;if(o=s(o._payload),t.type=o,typeof o=="function")Fc(o)?(e=va(o,e),t.tag=1,t=Bg(null,t,o,e,r)):(t.tag=0,t=Mu(null,t,o,e,r));else{if(o!=null){if(s=o.$$typeof,s===P){t.tag=11,t=Ag(null,t,o,e,r);break e}else if(s===Z){t.tag=14,t=Og(null,t,o,e,r);break e}}throw t=we(o)||o,Error(l(306,t,""))}}return t;case 0:return Mu(e,t,t.type,t.pendingProps,r);case 1:return o=t.type,s=va(o,t.pendingProps),Bg(e,t,o,s,r);case 3:e:{if(ae(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var f=t.memoizedState;s=f.element,su(e,t),so(t,o,null,r);var m=t.memoizedState;if(o=m.cache,Mr(t,pt,o),o!==f.cache&&nu(t,[pt],r,!0),lo(),o=m.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Lg(e,t,o,r);break e}else if(o!==s){s=hn(Error(l(424)),t),eo(s),t=Lg(e,t,o,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(at=kn(e.firstChild),Ht=t,Le=!0,pa=null,Yn=!0,r=yg(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Wi(),o===s){t=hr(e,t,r);break e}Tt(e,t,o,r)}t=t.child}return t;case 26:return Pl(e,t),e===null?(r=X0(t.type,null,t.pendingProps,null))?t.memoizedState=r:Le||(r=t.type,e=t.pendingProps,o=ls(Y.current).createElement(r),o[xt]=t,o[mt]=e,Ct(o,r,e),Ie(o),t.stateNode=o):t.memoizedState=X0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&Le&&(o=t.stateNode=Y0(t.type,t.pendingProps,Y.current),Ht=t,Yn=!0,s=at,Qr(t.type)?(vf=s,at=kn(o.firstChild)):at=s),Tt(e,t,t.pendingProps.children,r),Pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((s=o=at)&&(o=Wv(o,t.type,t.pendingProps,Yn),o!==null?(t.stateNode=o,Ht=t,at=kn(o.firstChild),Yn=!1,s=!0):s=!1),s||ga(t)),fe(t),s=t.type,f=t.pendingProps,m=e!==null?e.memoizedProps:null,o=f.children,xf(s,f)?o=null:m!==null&&xf(s,m)&&(t.flags|=32),t.memoizedState!==null&&(s=pu(e,t,mv,null,null,r),Oo._currentValue=s),Pl(e,t),Tt(e,t,o,r),t.child;case 6:return e===null&&Le&&((e=r=at)&&(r=e5(r,t.pendingProps,Yn),r!==null?(t.stateNode=r,Ht=t,at=null,e=!0):e=!1),e||ga(t)),null;case 13:return Ug(e,t,r);case 4:return ae(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=ni(t,null,o,r):Tt(e,t,o,r),t.child;case 11:return Ag(e,t,t.type,t.pendingProps,r);case 7:return Tt(e,t,t.pendingProps,r),t.child;case 8:return Tt(e,t,t.pendingProps.children,r),t.child;case 12:return Tt(e,t,t.pendingProps.children,r),t.child;case 10:return o=t.pendingProps,Mr(t,t.type,o.value),Tt(e,t,o.children,r),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,ma(t),s=Nt(s),o=o(s),t.flags|=1,Tt(e,t,o,r),t.child;case 14:return Og(e,t,t.type,t.pendingProps,r);case 15:return Mg(e,t,t.type,t.pendingProps,r);case 19:return Hg(e,t,r);case 31:return o=t.pendingProps,r=t.mode,o={mode:o.mode,children:o.children},e===null?(r=Ql(o,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=or(e.child,o),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Ng(e,t,r);case 24:return ma(t),o=Nt(pt),e===null?(s=iu(),s===null&&(s=Ke,f=ru(),s.pooledCache=f,f.refCount++,f!==null&&(s.pooledCacheLanes|=r),s=f),t.memoizedState={parent:o,cache:s},lu(t),Mr(t,pt,s)):((e.lanes&r)!==0&&(su(e,t),so(t,null,null,r),lo()),s=e.memoizedState,f=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Mr(t,pt,o)):(o=f.cache,Mr(t,pt,o),o!==s.cache&&nu(t,[pt],r,!0))),Tt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function pr(e){e.flags|=4}function Yg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z0(t)){if(t=mn.current,t!==null&&((ze&4194048)===ze?Gn!==null:(ze&62914560)!==ze&&(ze&536870912)===0||t!==Gn))throw io=ou,Tp;e.flags|=8192}}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tn():536870912,e.lanes|=t,oi|=t)}function xo(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function _v(e,t,r){var o=t.pendingProps;switch(Ic(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return r=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ur(pt),re(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?pr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vp())),nt(t),null;case 26:return r=t.memoizedState,e===null?(pr(t),r!==null?(nt(t),Yg(t,r)):(nt(t),t.flags&=-16777217)):r?r!==e.memoizedState?(pr(t),nt(t),Yg(t,r)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==o&&pr(t),nt(t),t.flags&=-16777217),null;case 27:xe(t),r=Y.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&pr(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return nt(t),null}e=te.current,Ii(t)?bp(t):(e=Y0(s,o,r),t.stateNode=e,pr(t))}return nt(t),null;case 5:if(xe(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&pr(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return nt(t),null}if(e=te.current,Ii(t))bp(t);else{switch(s=ls(Y.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?s.createElement(r,{is:o.is}):s.createElement(r)}}e[xt]=t,e[mt]=o;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;e:switch(Ct(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&pr(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&pr(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=Y.current,Ii(t)){if(e=t.stateNode,r=t.memoizedProps,o=null,s=Ht,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[xt]=t,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||D0(e.nodeValue,r)),e||ga(t)}else e=ls(e).createTextNode(o),e[xt]=t,t.stateNode=e}return nt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ii(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[xt]=t}else Wi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else s=vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(dr(t),t):(dr(t),null)}if(dr(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==s&&(o.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),Fl(t,t.updateQueue),nt(t),null;case 4:return re(),e===null&&ff(t.stateNode.containerInfo),nt(t),null;case 10:return ur(t.type),nt(t),null;case 19:if(Q(gt),s=t.memoizedState,s===null)return nt(t),null;if(o=(t.flags&128)!==0,f=s.rendering,f===null)if(o)xo(s,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Gl(e),f!==null){for(t.flags|=128,xo(s,!1),e=f.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)xp(r,e),r=r.sibling;return V(gt,gt.current&1|2),t.child}e=e.sibling}s.tail!==null&&ot()>Jl&&(t.flags|=128,o=!0,xo(s,!1),t.lanes=4194304)}else{if(!o)if(e=Gl(f),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Le)return nt(t),null}else 2*ot()-s.renderingStartTime>Jl&&r!==536870912&&(t.flags|=128,o=!0,xo(s,!1),t.lanes=4194304);s.isBackwards?(f.sibling=t.child,t.child=f):(e=s.last,e!==null?e.sibling=f:t.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ot(),t.sibling=null,e=gt.current,V(gt,o?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return dr(t),du(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(r&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),r=t.updateQueue,r!==null&&Fl(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==r&&(t.flags|=2048),e!==null&&Q(ba),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ur(pt),nt(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Cv(e,t){switch(Ic(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(pt),re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 13:if(dr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(gt),null;case 4:return re(),null;case 10:return ur(t.type),null;case 22:case 23:return dr(t),du(),e!==null&&Q(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ur(pt),null;case 25:return null;default:return null}}function Gg(e,t){switch(Ic(t),t.tag){case 3:ur(pt),re();break;case 26:case 27:case 5:xe(t);break;case 4:re();break;case 13:dr(t);break;case 19:Q(gt);break;case 10:ur(t.type);break;case 22:case 23:dr(t),du(),e!==null&&Q(ba);break;case 24:ur(pt)}}function mo(e,t){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var s=o.next;r=s;do{if((r.tag&e)===e){o=void 0;var f=r.create,m=r.inst;o=f(),m.destroy=o}r=r.next}while(r!==s)}}catch(j){Pe(t,t.return,j)}}function $r(e,t,r){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var f=s.next;o=f;do{if((o.tag&e)===e){var m=o.inst,j=m.destroy;if(j!==void 0){m.destroy=void 0,s=t;var k=r,U=j;try{U()}catch(K){Pe(s,k,K)}}}o=o.next}while(o!==f)}}catch(K){Pe(t,t.return,K)}}function Vg(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{Op(t,r)}catch(o){Pe(e,e.return,o)}}}function Xg(e,t,r){r.props=va(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Pe(e,t,o)}}function bo(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(s){Pe(e,t,s)}}function Vn(e,t){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(s){Pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Pe(e,t,s)}else r.current=null}function Pg(e){var t=e.type,r=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(s){Pe(e,e.return,s)}}function Hu(e,t,r){try{var o=e.stateNode;Fv(o,e.type,r,t),o[mt]=t}catch(s){Pe(e,e.return,s)}}function Qg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qr(e.type)||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=os));else if(o!==4&&(o===27&&Qr(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(Yu(e,t,r),e=e.sibling;e!==null;)Yu(e,t,r),e=e.sibling}function Kl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(o===27&&Qr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Kl(e,t,r),e=e.sibling;e!==null;)Kl(e,t,r),e=e.sibling}function Fg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ct(t,o,r),t[xt]=e,t[mt]=r}catch(f){Pe(e,e.return,f)}}var gr=!1,ct=!1,Gu=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,vt=null;function Rv(e,t){if(e=e.containerInfo,pf=hs,e=op(e),qc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var m=0,j=-1,k=-1,U=0,K=0,W=e,q=null;t:for(;;){for(var G;W!==r||s!==0&&W.nodeType!==3||(j=m+s),W!==f||o!==0&&W.nodeType!==3||(k=m+o),W.nodeType===3&&(m+=W.nodeValue.length),(G=W.firstChild)!==null;)q=W,W=G;for(;;){if(W===e)break t;if(q===r&&++U===s&&(j=m),q===f&&++K===o&&(k=m),(G=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=G}r=j===-1||k===-1?null:{start:j,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(gf={focusedElem:e,selectionRange:r},hs=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,s=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var Se=va(r.type,s,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(Se,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(be){Pe(r,r.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)bf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Zg(e,t,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Hr(e,r),o&4&&mo(5,r);break;case 1:if(Hr(e,r),o&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(m){Pe(r,r.return,m)}else{var s=va(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Pe(r,r.return,m)}}o&64&&Vg(r),o&512&&bo(r,r.return);break;case 3:if(Hr(e,r),o&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{Op(e,t)}catch(m){Pe(r,r.return,m)}}break;case 27:t===null&&o&4&&Fg(r);case 26:case 5:Hr(e,r),t===null&&o&4&&Pg(r),o&512&&bo(r,r.return);break;case 12:Hr(e,r);break;case 13:Hr(e,r),o&4&&Wg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Lv.bind(null,r),t5(e,r))));break;case 22:if(o=r.memoizedState!==null||gr,!o){t=t!==null&&t.memoizedState!==null||ct,s=gr;var f=ct;gr=o,(ct=t)&&!f?qr(e,r,(r.subtreeFlags&8772)!==0):Hr(e,r),gr=s,ct=f}break;case 30:break;default:Hr(e,r)}}function Jg(e){var t=e.alternate;t!==null&&(e.alternate=null,Jg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ba(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Gt=!1;function xr(e,t,r){for(r=r.child;r!==null;)Ig(e,t,r),r=r.sibling}function Ig(e,t,r){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(un,r)}catch{}switch(r.tag){case 26:ct||Vn(r,t),xr(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ct||Vn(r,t);var o=We,s=Gt;Qr(r.type)&&(We=r.stateNode,Gt=!1),xr(e,t,r),Co(r.stateNode),We=o,Gt=s;break;case 5:ct||Vn(r,t);case 6:if(o=We,s=Gt,We=null,xr(e,t,r),We=o,Gt=s,We!==null)if(Gt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(r.stateNode)}catch(f){Pe(r,t,f)}else try{We.removeChild(r.stateNode)}catch(f){Pe(r,t,f)}break;case 18:We!==null&&(Gt?(e=We,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Do(e)):H0(We,r.stateNode));break;case 4:o=We,s=Gt,We=r.stateNode.containerInfo,Gt=!0,xr(e,t,r),We=o,Gt=s;break;case 0:case 11:case 14:case 15:ct||$r(2,r,t),ct||$r(4,r,t),xr(e,t,r);break;case 1:ct||(Vn(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Xg(r,t,o)),xr(e,t,r);break;case 21:xr(e,t,r);break;case 22:ct=(o=ct)||r.memoizedState!==null,xr(e,t,r),ct=o;break;default:xr(e,t,r)}}function Wg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(r){Pe(t,t.return,r)}}function kv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kg),t;default:throw Error(l(435,e.tag))}}function Vu(e,t){var r=kv(e);t.forEach(function(o){var s=Uv.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}function en(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o],f=e,m=t,j=m;e:for(;j!==null;){switch(j.tag){case 27:if(Qr(j.type)){We=j.stateNode,Gt=!1;break e}break;case 5:We=j.stateNode,Gt=!1;break e;case 3:case 4:We=j.stateNode.containerInfo,Gt=!0;break e}j=j.return}if(We===null)throw Error(l(160));Ig(f,m,s),We=null,Gt=!1,f=s.alternate,f!==null&&(f.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)e0(t,e),t=t.sibling}var Rn=null;function e0(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:en(t,e),tn(e),o&4&&($r(3,e,e.return),mo(3,e),$r(5,e,e.return));break;case 1:en(t,e),tn(e),o&512&&(ct||r===null||Vn(r,r.return)),o&64&&gr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var s=Rn;if(en(t,e),tn(e),o&512&&(ct||r===null||Vn(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){e:{o=e.type,r=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":f=s.getElementsByTagName("title")[0],(!f||f[nr]||f[xt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=s.createElement(o),s.head.insertBefore(f,s.querySelector("head > title"))),Ct(f,o,r),f[xt]=e,Ie(f),o=f;break e;case"link":var m=F0("link","href",s).get(o+(r.href||""));if(m){for(var j=0;j<m.length;j++)if(f=m[j],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){m.splice(j,1);break t}}f=s.createElement(o),Ct(f,o,r),s.head.appendChild(f);break;case"meta":if(m=F0("meta","content",s).get(o+(r.content||""))){for(j=0;j<m.length;j++)if(f=m[j],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){m.splice(j,1);break t}}f=s.createElement(o),Ct(f,o,r),s.head.appendChild(f);break;default:throw Error(l(468,o))}f[xt]=e,Ie(f),o=f}e.stateNode=o}else K0(s,e.type,e.stateNode);else e.stateNode=Q0(s,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?K0(s,e.type,e.stateNode):Q0(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hu(e,e.memoizedProps,r.memoizedProps)}break;case 27:en(t,e),tn(e),o&512&&(ct||r===null||Vn(r,r.return)),r!==null&&o&4&&Hu(e,e.memoizedProps,r.memoizedProps);break;case 5:if(en(t,e),tn(e),o&512&&(ct||r===null||Vn(r,r.return)),e.flags&32){s=e.stateNode;try{Ua(s,"")}catch(G){Pe(e,e.return,G)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,Hu(e,s,r!==null?r.memoizedProps:s)),o&1024&&(Gu=!0);break;case 6:if(en(t,e),tn(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(G){Pe(e,e.return,G)}}break;case 3:if(us=null,s=Rn,Rn=ss(t.containerInfo),en(t,e),Rn=s,tn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(G){Pe(e,e.return,G)}Gu&&(Gu=!1,t0(e));break;case 4:o=Rn,Rn=ss(e.stateNode.containerInfo),en(t,e),tn(e),Rn=o;break;case 12:en(t,e),tn(e);break;case 13:en(t,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zu=ot()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vu(e,o)));break;case 22:s=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,U=gr,K=ct;if(gr=U||s,ct=K||k,en(t,e),ct=K,gr=U,tn(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(r===null||k||gr||ct||wa(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){k=r=t;try{if(f=k.stateNode,s)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{j=k.stateNode;var W=k.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;j.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(G){Pe(k,k.return,G)}}}else if(t.tag===6){if(r===null){k=t;try{k.stateNode.nodeValue=s?"":k.memoizedProps}catch(G){Pe(k,k.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Vu(e,r))));break;case 19:en(t,e),tn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vu(e,o)));break;case 30:break;case 21:break;default:en(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{for(var r,o=e.return;o!==null;){if(Qg(o)){r=o;break}o=o.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var s=r.stateNode,f=qu(e);Kl(e,f,s);break;case 5:var m=r.stateNode;r.flags&32&&(Ua(m,""),r.flags&=-33);var j=qu(e);Kl(e,j,m);break;case 3:case 4:var k=r.stateNode.containerInfo,U=qu(e);Yu(e,U,k);break;default:throw Error(l(161))}}catch(K){Pe(e,e.return,K)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;t0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Hr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zg(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$r(4,t,t.return),wa(t);break;case 1:Vn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Xg(t,t.return,r),wa(t);break;case 27:Co(t.stateNode);case 26:case 5:Vn(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function qr(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,f=t,m=f.flags;switch(f.tag){case 0:case 11:case 15:qr(s,f,r),mo(4,f);break;case 1:if(qr(s,f,r),o=f,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(U){Pe(o,o.return,U)}if(o=f,s=o.updateQueue,s!==null){var j=o.stateNode;try{var k=s.shared.hiddenCallbacks;if(k!==null)for(s.shared.hiddenCallbacks=null,s=0;s<k.length;s++)Ap(k[s],j)}catch(U){Pe(o,o.return,U)}}r&&m&64&&Vg(f),bo(f,f.return);break;case 27:Fg(f);case 26:case 5:qr(s,f,r),r&&o===null&&m&4&&Pg(f),bo(f,f.return);break;case 12:qr(s,f,r);break;case 13:qr(s,f,r),r&&m&4&&Wg(s,f);break;case 22:f.memoizedState===null&&qr(s,f,r),bo(f,f.return);break;case 30:break;default:qr(s,f,r)}t=t.sibling}}function Xu(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&no(r))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&no(e))}function Xn(e,t,r,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n0(e,t,r,o),t=t.sibling}function n0(e,t,r,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Xn(e,t,r,o),s&2048&&mo(9,t);break;case 1:Xn(e,t,r,o);break;case 3:Xn(e,t,r,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&no(e)));break;case 12:if(s&2048){Xn(e,t,r,o),e=t.stateNode;try{var f=t.memoizedProps,m=f.id,j=f.onPostCommit;typeof j=="function"&&j(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Pe(t,t.return,k)}}else Xn(e,t,r,o);break;case 13:Xn(e,t,r,o);break;case 23:break;case 22:f=t.stateNode,m=t.alternate,t.memoizedState!==null?f._visibility&2?Xn(e,t,r,o):yo(e,t):f._visibility&2?Xn(e,t,r,o):(f._visibility|=2,ri(e,t,r,o,(t.subtreeFlags&10256)!==0)),s&2048&&Xu(m,t);break;case 24:Xn(e,t,r,o),s&2048&&Pu(t.alternate,t);break;default:Xn(e,t,r,o)}}function ri(e,t,r,o,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,m=t,j=r,k=o,U=m.flags;switch(m.tag){case 0:case 11:case 15:ri(f,m,j,k,s),mo(8,m);break;case 23:break;case 22:var K=m.stateNode;m.memoizedState!==null?K._visibility&2?ri(f,m,j,k,s):yo(f,m):(K._visibility|=2,ri(f,m,j,k,s)),s&&U&2048&&Xu(m.alternate,m);break;case 24:ri(f,m,j,k,s),s&&U&2048&&Pu(m.alternate,m);break;default:ri(f,m,j,k,s)}t=t.sibling}}function yo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,o=t,s=o.flags;switch(o.tag){case 22:yo(r,o),s&2048&&Xu(o.alternate,o);break;case 24:yo(r,o),s&2048&&Pu(o.alternate,o);break;default:yo(r,o)}t=t.sibling}}var vo=8192;function ai(e){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 26:ai(e),e.flags&vo&&e.memoizedState!==null&&p5(Rn,e.memoizedState,e.memoizedProps);break;case 5:ai(e);break;case 3:case 4:var t=Rn;Rn=ss(e.stateNode.containerInfo),ai(e),Rn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=vo,vo=16777216,ai(e),vo=t):ai(e));break;default:ai(e)}}function a0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];vt=o,o0(o,e)}a0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(e),e=e.sibling}function i0(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&$r(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zl(e)):wo(e);break;default:wo(e)}}function Zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];vt=o,o0(o,e)}a0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$r(8,t,t.return),Zl(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,Zl(t));break;default:Zl(t)}e=e.sibling}}function o0(e,t){for(;vt!==null;){var r=vt;switch(r.tag){case 0:case 11:case 15:$r(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,vt=o;else e:for(r=e;vt!==null;){o=vt;var s=o.sibling,f=o.return;if(Jg(o),o===r){vt=null;break e}if(s!==null){s.return=f,vt=s;break e}vt=f}}}var Av={getCacheForType:function(e){var t=Nt(pt),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Ov=typeof WeakMap=="function"?WeakMap:Map,He=0,Ke=null,Ae=null,ze=0,qe=0,nn=null,Yr=!1,ii=!1,Qu=!1,mr=0,it=0,Gr=0,Sa=0,Fu=0,bn=0,oi=0,So=null,Vt=null,Ku=!1,Zu=0,Jl=1/0,Il=null,Vr=null,_t=0,Xr=null,li=null,si=0,Ju=0,Iu=null,l0=null,jo=0,Wu=null;function rn(){if((He&2)!==0&&ze!==0)return ze&-ze;if(H.T!==null){var e=Ka;return e!==0?e:lf()}return Cr()}function s0(){bn===0&&(bn=(ze&536870912)===0||Le?Bi():536870912);var e=mn.current;return e!==null&&(e.flags|=32),bn}function an(e,t,r){(e===Ke&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(ci(e,0),Pr(e,ze,bn,!1)),lt(e,r),((He&2)===0||e!==Ke)&&(e===Ke&&((He&2)===0&&(Sa|=r),it===4&&Pr(e,ze,bn,!1)),Pn(e))}function c0(e,t,r){if((He&6)!==0)throw Error(l(327));var o=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Tr(e,t),s=o?zv(e,t):nf(e,t,!0),f=o;do{if(s===0){ii&&!o&&Pr(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!Mv(r)){s=nf(e,t,!1),f=!1;continue}if(s===2){if(f=t,e.errorRecoveryDisabledLanes&f)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var j=e;s=So;var k=j.current.memoizedState.isDehydrated;if(k&&(ci(j,m).flags|=256),m=nf(j,m,!1),m!==2){if(Qu&&!k){j.errorRecoveryDisabledLanes|=f,Sa|=f,s=4;break e}f=Vt,Vt=s,f!==null&&(Vt===null?Vt=f:Vt.push.apply(Vt,f))}s=m}if(f=!1,s!==2)continue}}if(s===1){ci(e,0),Pr(e,t,0,!0);break}e:{switch(o=e,f=s,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Pr(o,t,bn,!Yr);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Zu+300-ot(),10<s)){if(Pr(o,t,bn,!Yr),er(o,0,!0)!==0)break e;o.timeoutHandle=U0(u0.bind(null,o,r,Vt,Il,Ku,t,bn,Sa,oi,Yr,f,2,-0,0),s);break e}u0(o,r,Vt,Il,Ku,t,bn,Sa,oi,Yr,f,0,-0,0)}}break}while(!0);Pn(e)}function u0(e,t,r,o,s,f,m,j,k,U,K,W,q,G){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:h5},r0(t),W=g5(),W!==null)){e.cancelPendingCommit=W(m0.bind(null,e,t,f,r,o,s,m,j,k,K,1,q,G)),Pr(e,f,m,!U);return}m0(e,t,f,r,o,s,m,j,k)}function Mv(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var s=r[o],f=s.getSnapshot;s=s.value;try{if(!It(f(),s))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pr(e,t,r,o){t&=~Fu,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var f=31-Fe(s),m=1<<f;o[f]=-1,s&=~m}r!==0&&oa(e,r,t)}function Wl(){return(He&6)===0?(Eo(0),!1):!0}function ef(){if(Ae!==null){if(qe===0)var e=Ae.return;else e=Ae,cr=xa=null,mu(e),ti=null,po=0,e=Ae;for(;e!==null;)Gg(e.alternate,e),e=e.return;Ae=null}}function ci(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Zv(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ef(),Ke=e,Ae=r=or(e.current,null),ze=t,qe=0,nn=null,Yr=!1,ii=Tr(e,t),Qu=!1,oi=bn=Fu=Sa=Gr=it=0,Vt=So=null,Ku=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-Fe(o),f=1<<s;t|=e[s],o&=~f}return mr=t,wl(),r}function f0(e,t){Re=null,H.H=Hl,t===ao||t===Al?(t=Rp(),qe=3):t===Tp?(t=Rp(),qe=4):qe=t===kg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nn=t,Ae===null&&(it=1,Xl(e,hn(t,e.current)))}function d0(){var e=H.H;return H.H=Hl,e===null?Hl:e}function h0(){var e=H.A;return H.A=Av,e}function tf(){it=4,Yr||(ze&4194048)!==ze&&mn.current!==null||(ii=!0),(Gr&134217727)===0&&(Sa&134217727)===0||Ke===null||Pr(Ke,ze,bn,!1)}function nf(e,t,r){var o=He;He|=2;var s=d0(),f=h0();(Ke!==e||ze!==t)&&(Il=null,ci(e,t)),t=!1;var m=it;e:do try{if(qe!==0&&Ae!==null){var j=Ae,k=nn;switch(qe){case 8:ef(),m=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var U=qe;if(qe=0,nn=null,ui(e,j,k,U),r&&ii){m=0;break e}break;default:U=qe,qe=0,nn=null,ui(e,j,k,U)}}Nv(),m=it;break}catch(K){f0(e,K)}while(!0);return t&&e.shellSuspendCounter++,cr=xa=null,He=o,H.H=s,H.A=f,Ae===null&&(Ke=null,ze=0,wl()),m}function Nv(){for(;Ae!==null;)p0(Ae)}function zv(e,t){var r=He;He|=2;var o=d0(),s=h0();Ke!==e||ze!==t?(Il=null,Jl=ot()+500,ci(e,t)):ii=Tr(e,t);e:do try{if(qe!==0&&Ae!==null){t=Ae;var f=nn;t:switch(qe){case 1:qe=0,nn=null,ui(e,t,f,1);break;case 2:case 9:if(_p(f)){qe=0,nn=null,g0(t);break}t=function(){qe!==2&&qe!==9||Ke!==e||(qe=7),Pn(e)},f.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:_p(f)?(qe=0,nn=null,g0(t)):(qe=0,nn=null,ui(e,t,f,7));break;case 5:var m=null;switch(Ae.tag){case 26:m=Ae.memoizedState;case 5:case 27:var j=Ae;if(!m||Z0(m)){qe=0,nn=null;var k=j.sibling;if(k!==null)Ae=k;else{var U=j.return;U!==null?(Ae=U,es(U)):Ae=null}break t}}qe=0,nn=null,ui(e,t,f,5);break;case 6:qe=0,nn=null,ui(e,t,f,6);break;case 8:ef(),it=6;break e;default:throw Error(l(462))}}Dv();break}catch(K){f0(e,K)}while(!0);return cr=xa=null,H.H=o,H.A=s,He=r,Ae!==null?0:(Ke=null,ze=0,wl(),it)}function Dv(){for(;Ae!==null&&!cn();)p0(Ae)}function p0(e){var t=qg(e.alternate,e,mr);e.memoizedProps=e.pendingProps,t===null?es(e):Ae=t}function g0(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Dg(r,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Dg(r,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:mu(t);default:Gg(r,t),t=Ae=xp(t,mr),t=qg(r,t,mr)}e.memoizedProps=e.pendingProps,t===null?es(e):Ae=t}function ui(e,t,r,o){cr=xa=null,mu(t),ti=null,po=0;var s=t.return;try{if(Ev(e,s,t,r,ze)){it=1,Xl(e,hn(r,e.current)),Ae=null;return}}catch(f){if(s!==null)throw Ae=s,f;it=1,Xl(e,hn(r,e.current)),Ae=null;return}t.flags&32768?(Le||o===1?e=!0:ii||(ze&536870912)!==0?e=!1:(Yr=e=!0,(o===2||o===9||o===3||o===6)&&(o=mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),x0(t,e)):es(t)}function es(e){var t=e;do{if((t.flags&32768)!==0){x0(t,Yr);return}e=t.return;var r=_v(t.alternate,t,mr);if(r!==null){Ae=r;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);it===0&&(it=5)}function x0(e,t){do{var r=Cv(e.alternate,e);if(r!==null){r.flags&=32767,Ae=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=r}while(e!==null);it=6,Ae=null}function m0(e,t,r,o,s,f,m,j,k){e.cancelPendingCommit=null;do ts();while(_t!==0);if((He&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Pc,_r(e,r,f,m,j,k),e===Ke&&(Ae=Ke=null,ze=0),li=t,Xr=e,si=r,Ju=f,Iu=s,l0=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$v(En,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,s=ee.p,ee.p=2,m=He,He|=4;try{Rv(e,t,r)}finally{He=m,ee.p=s,H.T=o}}_t=1,b0(),y0(),v0()}}function b0(){if(_t===1){_t=0;var e=Xr,t=li,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var o=ee.p;ee.p=2;var s=He;He|=4;try{e0(t,e);var f=gf,m=op(e.containerInfo),j=f.focusedElem,k=f.selectionRange;if(m!==j&&j&&j.ownerDocument&&ip(j.ownerDocument.documentElement,j)){if(k!==null&&qc(j)){var U=k.start,K=k.end;if(K===void 0&&(K=U),"selectionStart"in j)j.selectionStart=U,j.selectionEnd=Math.min(K,j.value.length);else{var W=j.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var G=q.getSelection(),Se=j.textContent.length,be=Math.min(k.start,Se),Xe=k.end===void 0?be:Math.min(k.end,Se);!G.extend&&be>Xe&&(m=Xe,Xe=be,be=m);var D=ap(j,be),M=ap(j,Xe);if(D&&M&&(G.rangeCount!==1||G.anchorNode!==D.node||G.anchorOffset!==D.offset||G.focusNode!==M.node||G.focusOffset!==M.offset)){var B=W.createRange();B.setStart(D.node,D.offset),G.removeAllRanges(),be>Xe?(G.addRange(B),G.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),G.addRange(B))}}}}for(W=[],G=j;G=G.parentNode;)G.nodeType===1&&W.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<W.length;j++){var J=W[j];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}hs=!!pf,gf=pf=null}finally{He=s,ee.p=o,H.T=r}}e.current=t,_t=2}}function y0(){if(_t===2){_t=0;var e=Xr,t=li,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var o=ee.p;ee.p=2;var s=He;He|=4;try{Zg(e,t.alternate,t)}finally{He=s,ee.p=o,H.T=r}}_t=3}}function v0(){if(_t===4||_t===3){_t=0,Lt();var e=Xr,t=li,r=si,o=l0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_t=5:(_t=0,li=Xr=null,w0(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Vr=null),Hi(r),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(un,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=H.T,s=ee.p,ee.p=2,H.T=null;try{for(var f=e.onRecoverableError,m=0;m<o.length;m++){var j=o[m];f(j.value,{componentStack:j.stack})}}finally{H.T=t,ee.p=s}}(si&3)!==0&&ts(),Pn(e),s=e.pendingLanes,(r&4194090)!==0&&(s&42)!==0?e===Wu?jo++:(jo=0,Wu=e):jo=0,Eo(0)}}function w0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,no(t)))}function ts(e){return b0(),y0(),v0(),S0()}function S0(){if(_t!==5)return!1;var e=Xr,t=Ju;Ju=0;var r=Hi(si),o=H.T,s=ee.p;try{ee.p=32>r?32:r,H.T=null,r=Iu,Iu=null;var f=Xr,m=si;if(_t=0,li=Xr=null,si=0,(He&6)!==0)throw Error(l(331));var j=He;if(He|=4,i0(f.current),n0(f,f.current,m,r),He=j,Eo(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(un,f)}catch{}return!0}finally{ee.p=s,H.T=o,w0(e,t)}}function j0(e,t,r){t=hn(r,t),t=Ou(e.stateNode,t,2),e=Dr(e,t,2),e!==null&&(lt(e,2),Pn(e))}function Pe(e,t,r){if(e.tag===3)j0(e,e,r);else for(;t!==null;){if(t.tag===3){j0(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vr===null||!Vr.has(o))){e=hn(r,e),r=Cg(2),o=Dr(t,r,2),o!==null&&(Rg(r,o,t,e),lt(o,2),Pn(o));break}}t=t.return}}function rf(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ov;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(Qu=!0,s.add(r),e=Bv.bind(null,e,t,r),t.then(e,e))}function Bv(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ke===e&&(ze&r)===r&&(it===4||it===3&&(ze&62914560)===ze&&300>ot()-Zu?(He&2)===0&&ci(e,0):Fu|=r,oi===ze&&(oi=0)),Pn(e)}function E0(e,t){t===0&&(t=Tn()),e=Xa(e,t),e!==null&&(lt(e,t),Pn(e))}function Lv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),E0(e,r)}function Uv(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),E0(e,r)}function $v(e,t){return Ze(e,t)}var ns=null,fi=null,af=!1,rs=!1,of=!1,ja=0;function Pn(e){e!==fi&&e.next===null&&(fi===null?ns=fi=e:fi=fi.next=e),rs=!0,af||(af=!0,qv())}function Eo(e,t){if(!of&&rs){of=!0;do for(var r=!1,o=ns;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var f=0;else{var m=o.suspendedLanes,j=o.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=s&~(m&~j),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,R0(o,f))}else f=ze,f=er(o,o===Ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Tr(o,f)||(r=!0,R0(o,f));o=o.next}while(r);of=!1}}function Hv(){T0()}function T0(){rs=af=!1;var e=0;ja!==0&&(Kv()&&(e=ja),ja=0);for(var t=ot(),r=null,o=ns;o!==null;){var s=o.next,f=_0(o,t);f===0?(o.next=null,r===null?ns=s:r.next=s,s===null&&(fi=r)):(r=o,(e!==0||(f&3)!==0)&&(rs=!0)),o=s}Eo(e)}function _0(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var m=31-Fe(f),j=1<<m,k=s[m];k===-1?((j&r)===0||(j&o)!==0)&&(s[m]=Sc(j,t)):k<=t&&(e.expiredLanes|=j),f&=~j}if(t=Ke,r=ze,r=er(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Tr(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(o!==null&&Qe(o),Hi(r)){case 2:case 8:r=Zn;break;case 32:r=En;break;case 268435456:r=Kt;break;default:r=En}return o=C0.bind(null,e),r=Ze(r,o),e.callbackPriority=t,e.callbackNode=r,t}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function C0(e,t){if(_t!==0&&_t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ts()&&e.callbackNode!==r)return null;var o=ze;return o=er(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(c0(e,o,t),_0(e,ot()),e.callbackNode!=null&&e.callbackNode===r?C0.bind(null,e):null)}function R0(e,t){if(ts())return null;c0(e,t,!0)}function qv(){Jv(function(){(He&6)!==0?Ze(Ut,Hv):T0()})}function lf(){return ja===0&&(ja=Bi()),ja}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function A0(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function Yv(e,t,r,o,s){if(t==="submit"&&r&&r.stateNode===s){var f=k0((s[mt]||null).action),m=o.submitter;m&&(t=(t=m[mt]||null)?k0(t.formAction):m.getAttribute("formAction"),t!==null&&(f=t,m=null));var j=new bl("action","action",null,o,s);e.push({event:j,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var k=m?A0(s,m):new FormData(s);_u(r,{pending:!0,data:k,method:s.method,action:f},null,k)}}else typeof f=="function"&&(j.preventDefault(),k=m?A0(s,m):new FormData(s),_u(r,{pending:!0,data:k,method:s.method,action:f},f,k))},currentTarget:s}]})}}for(var sf=0;sf<Xc.length;sf++){var cf=Xc[sf],Gv=cf.toLowerCase(),Vv=cf[0].toUpperCase()+cf.slice(1);Cn(Gv,"on"+Vv)}Cn(cp,"onAnimationEnd"),Cn(up,"onAnimationIteration"),Cn(fp,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(lv,"onTransitionRun"),Cn(sv,"onTransitionStart"),Cn(cv,"onTransitionCancel"),Cn(dp,"onTransitionEnd"),ar("onMouseEnter",["mouseout","mouseover"]),ar("onMouseLeave",["mouseout","mouseover"]),ar("onPointerEnter",["pointerout","pointerover"]),ar("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function O0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var f=void 0;if(t)for(var m=o.length-1;0<=m;m--){var j=o[m],k=j.instance,U=j.currentTarget;if(j=j.listener,k!==f&&s.isPropagationStopped())break e;f=j,s.currentTarget=U;try{f(s)}catch(K){Vl(K)}s.currentTarget=null,f=k}else for(m=0;m<o.length;m++){if(j=o[m],k=j.instance,U=j.currentTarget,j=j.listener,k!==f&&s.isPropagationStopped())break e;f=j,s.currentTarget=U;try{f(s)}catch(K){Vl(K)}s.currentTarget=null,f=k}}}}function Oe(e,t){var r=t[Da];r===void 0&&(r=t[Da]=new Set);var o=e+"__bubble";r.has(o)||(M0(t,e,2,!1),r.add(o))}function uf(e,t,r){var o=0;t&&(o|=4),M0(r,e,o,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function ff(e){if(!e[as]){e[as]=!0,fl.forEach(function(r){r!=="selectionchange"&&(Xv.has(r)||uf(r,!1,e),uf(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,uf("selectionchange",!1,t))}}function M0(e,t,r,o){switch(nx(t)){case 2:var s=b5;break;case 8:s=y5;break;default:s=Tf}r=s.bind(null,t,r,e),s=void 0,!Mc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function df(e,t,r,o,s){var f=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var j=o.stateNode.containerInfo;if(j===s)break;if(m===4)for(m=o.return;m!==null;){var k=m.tag;if((k===3||k===4)&&m.stateNode.containerInfo===s)return;m=m.return}for(;j!==null;){if(m=Rr(j),m===null)return;if(k=m.tag,k===5||k===6||k===26||k===27){o=f=m;continue e}j=j.parentNode}}o=o.return}$h(function(){var U=f,K=Ac(r),W=[];e:{var q=hp.get(e);if(q!==void 0){var G=bl,Se=e;switch(e){case"keypress":if(xl(r)===0)break e;case"keydown":case"keyup":G=$1;break;case"focusin":Se="focus",G=Bc;break;case"focusout":Se="blur",G=Bc;break;case"beforeblur":case"afterblur":G=Bc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Y1;break;case cp:case up:case fp:G=A1;break;case dp:G=V1;break;case"scroll":case"scrollend":G=T1;break;case"wheel":G=P1;break;case"copy":case"cut":case"paste":G=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Vh;break;case"toggle":case"beforetoggle":G=F1}var be=(t&4)!==0,Xe=!be&&(e==="scroll"||e==="scrollend"),D=be?q!==null?q+"Capture":null:q;be=[];for(var M=U,B;M!==null;){var J=M;if(B=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||B===null||D===null||(J=Gi(M,D),J!=null&&be.push(_o(M,J,B))),Xe)break;M=M.return}0<be.length&&(q=new G(q,Se,null,r,K),W.push({event:q,listeners:be}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",q&&r!==kc&&(Se=r.relatedTarget||r.fromElement)&&(Rr(Se)||Se[tr]))break e;if((G||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,G?(Se=r.relatedTarget||r.toElement,G=U,Se=Se?Rr(Se):null,Se!==null&&(Xe=d(Se),be=Se.tag,Se!==Xe||be!==5&&be!==27&&be!==6)&&(Se=null)):(G=null,Se=U),G!==Se)){if(be=Yh,J="onMouseLeave",D="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(be=Vh,J="onPointerLeave",D="onPointerEnter",M="pointer"),Xe=G==null?q:Ar(G),B=Se==null?q:Ar(Se),q=new be(J,M+"leave",G,r,K),q.target=Xe,q.relatedTarget=B,J=null,Rr(K)===U&&(be=new be(D,M+"enter",Se,r,K),be.target=B,be.relatedTarget=Xe,J=be),Xe=J,G&&Se)t:{for(be=G,D=Se,M=0,B=be;B;B=di(B))M++;for(B=0,J=D;J;J=di(J))B++;for(;0<M-B;)be=di(be),M--;for(;0<B-M;)D=di(D),B--;for(;M--;){if(be===D||D!==null&&be===D.alternate)break t;be=di(be),D=di(D)}be=null}else be=null;G!==null&&N0(W,q,G,be,!1),Se!==null&&Xe!==null&&N0(W,Xe,Se,be,!0)}}e:{if(q=U?Ar(U):window,G=q.nodeName&&q.nodeName.toLowerCase(),G==="select"||G==="input"&&q.type==="file")var de=Ih;else if(Zh(q))if(Wh)de=av;else{de=nv;var ke=tv}else G=q.nodeName,!G||G.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&Rc(U.elementType)&&(de=Ih):de=rv;if(de&&(de=de(e,U))){Jh(W,de,r,K);break e}ke&&ke(e,q,U),e==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&Cc(q,"number",q.value)}switch(ke=U?Ar(U):window,e){case"focusin":(Zh(ke)||ke.contentEditable==="true")&&(Ya=ke,Yc=U,Ji=null);break;case"focusout":Ji=Yc=Ya=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,lp(W,r,K);break;case"selectionchange":if(ov)break;case"keydown":case"keyup":lp(W,r,K)}var pe;if(Uc)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else qa?Fh(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(Xh&&r.locale!=="ko"&&(qa||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&qa&&(pe=Hh()):(Or=K,Nc="value"in Or?Or.value:Or.textContent,qa=!0)),ke=is(U,ve),0<ke.length&&(ve=new Gh(ve,e,null,r,K),W.push({event:ve,listeners:ke}),pe?ve.data=pe:(pe=Kh(r),pe!==null&&(ve.data=pe)))),(pe=Z1?J1(e,r):I1(e,r))&&(ve=is(U,"onBeforeInput"),0<ve.length&&(ke=new Gh("onBeforeInput","beforeinput",null,r,K),W.push({event:ke,listeners:ve}),ke.data=pe)),Yv(W,e,U,r,K)}O0(W,t)})}function _o(e,t,r){return{instance:e,listener:t,currentTarget:r}}function is(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,f=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||f===null||(s=Gi(e,r),s!=null&&o.unshift(_o(e,s,f)),s=Gi(e,t),s!=null&&o.push(_o(e,s,f))),e.tag===3)return o;e=e.return}return[]}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N0(e,t,r,o,s){for(var f=t._reactName,m=[];r!==null&&r!==o;){var j=r,k=j.alternate,U=j.stateNode;if(j=j.tag,k!==null&&k===o)break;j!==5&&j!==26&&j!==27||U===null||(k=U,s?(U=Gi(r,f),U!=null&&m.unshift(_o(r,U,k))):s||(U=Gi(r,f),U!=null&&m.push(_o(r,U,k)))),r=r.return}m.length!==0&&e.push({event:t,listeners:m})}var Pv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function z0(e){return(typeof e=="string"?e:""+e).replace(Pv,`
`).replace(Qv,"")}function D0(e,t){return t=z0(t),z0(e)===t}function os(){}function Ve(e,t,r,o,s,f){switch(r){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ua(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ua(e,""+o);break;case"className":tt(e,"class",o);break;case"tabIndex":tt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(e,r,o);break;case"style":Lh(e,o,f);break;case"data":if(t!=="object"){tt(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=pl(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Ve(e,t,"name",s.name,s,null),Ve(e,t,"formEncType",s.formEncType,s,null),Ve(e,t,"formMethod",s.formMethod,s,null),Ve(e,t,"formTarget",s.formTarget,s,null)):(Ve(e,t,"encType",s.encType,s,null),Ve(e,t,"method",s.method,s,null),Ve(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=pl(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=os);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=j1.get(r)||r,Ye(e,r,o))}}function hf(e,t,r,o,s,f){switch(r){case"style":Lh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(r=o.__html,r!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Ua(e,o):(typeof o=="number"||typeof o=="bigint")&&Ua(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=os);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yi.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),t=r.slice(2,s?r.length-7:void 0),f=e[mt]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,s),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,o,s);break e}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Ye(e,r,o)}}}function Ct(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,s=!1,f;for(f in r)if(r.hasOwnProperty(f)){var m=r[f];if(m!=null)switch(f){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,f,m,r,null)}}s&&Ve(e,t,"srcSet",r.srcSet,r,null),o&&Ve(e,t,"src",r.src,r,null);return;case"input":Oe("invalid",e);var j=f=m=s=null,k=null,U=null;for(o in r)if(r.hasOwnProperty(o)){var K=r[o];if(K!=null)switch(o){case"name":s=K;break;case"type":m=K;break;case"checked":k=K;break;case"defaultChecked":U=K;break;case"value":f=K;break;case"defaultValue":j=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(l(137,t));break;default:Ve(e,t,o,K,r,null)}}Nh(e,f,j,k,U,m,s,!1),dl(e);return;case"select":Oe("invalid",e),o=m=f=null;for(s in r)if(r.hasOwnProperty(s)&&(j=r[s],j!=null))switch(s){case"value":f=j;break;case"defaultValue":m=j;break;case"multiple":o=j;default:Ve(e,t,s,j,r,null)}t=f,r=m,e.multiple=!!o,t!=null?La(e,!!o,t,!1):r!=null&&La(e,!!o,r,!0);return;case"textarea":Oe("invalid",e),f=s=o=null;for(m in r)if(r.hasOwnProperty(m)&&(j=r[m],j!=null))switch(m){case"value":o=j;break;case"defaultValue":s=j;break;case"children":f=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(91));break;default:Ve(e,t,m,j,r,null)}Dh(e,o,s,f),dl(e);return;case"option":for(k in r)if(r.hasOwnProperty(k)&&(o=r[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,t,k,o,r,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)Oe(To[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in r)if(r.hasOwnProperty(U)&&(o=r[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,U,o,r,null)}return;default:if(Rc(t)){for(K in r)r.hasOwnProperty(K)&&(o=r[K],o!==void 0&&hf(e,t,K,o,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(o=r[j],o!=null&&Ve(e,t,j,o,r,null))}function Fv(e,t,r,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,f=null,m=null,j=null,k=null,U=null,K=null;for(G in r){var W=r[G];if(r.hasOwnProperty(G)&&W!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":k=W;default:o.hasOwnProperty(G)||Ve(e,t,G,null,o,W)}}for(var q in o){var G=o[q];if(W=r[q],o.hasOwnProperty(q)&&(G!=null||W!=null))switch(q){case"type":f=G;break;case"name":s=G;break;case"checked":U=G;break;case"defaultChecked":K=G;break;case"value":m=G;break;case"defaultValue":j=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:G!==W&&Ve(e,t,q,G,o,W)}}_c(e,m,j,k,U,K,f,s);return;case"select":G=m=j=q=null;for(f in r)if(k=r[f],r.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":G=k;default:o.hasOwnProperty(f)||Ve(e,t,f,null,o,k)}for(s in o)if(f=o[s],k=r[s],o.hasOwnProperty(s)&&(f!=null||k!=null))switch(s){case"value":q=f;break;case"defaultValue":j=f;break;case"multiple":m=f;default:f!==k&&Ve(e,t,s,f,o,k)}t=j,r=m,o=G,q!=null?La(e,!!r,q,!1):!!o!=!!r&&(t!=null?La(e,!!r,t,!0):La(e,!!r,r?[]:"",!1));return;case"textarea":G=q=null;for(j in r)if(s=r[j],r.hasOwnProperty(j)&&s!=null&&!o.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Ve(e,t,j,null,o,s)}for(m in o)if(s=o[m],f=r[m],o.hasOwnProperty(m)&&(s!=null||f!=null))switch(m){case"value":q=s;break;case"defaultValue":G=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==f&&Ve(e,t,m,s,o,f)}zh(e,q,G);return;case"option":for(var Se in r)if(q=r[Se],r.hasOwnProperty(Se)&&q!=null&&!o.hasOwnProperty(Se))switch(Se){case"selected":e.selected=!1;break;default:Ve(e,t,Se,null,o,q)}for(k in o)if(q=o[k],G=r[k],o.hasOwnProperty(k)&&q!==G&&(q!=null||G!=null))switch(k){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ve(e,t,k,q,o,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in r)q=r[be],r.hasOwnProperty(be)&&q!=null&&!o.hasOwnProperty(be)&&Ve(e,t,be,null,o,q);for(U in o)if(q=o[U],G=r[U],o.hasOwnProperty(U)&&q!==G&&(q!=null||G!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:Ve(e,t,U,q,o,G)}return;default:if(Rc(t)){for(var Xe in r)q=r[Xe],r.hasOwnProperty(Xe)&&q!==void 0&&!o.hasOwnProperty(Xe)&&hf(e,t,Xe,void 0,o,q);for(K in o)q=o[K],G=r[K],!o.hasOwnProperty(K)||q===G||q===void 0&&G===void 0||hf(e,t,K,q,o,G);return}}for(var D in r)q=r[D],r.hasOwnProperty(D)&&q!=null&&!o.hasOwnProperty(D)&&Ve(e,t,D,null,o,q);for(W in o)q=o[W],G=r[W],!o.hasOwnProperty(W)||q===G||q==null&&G==null||Ve(e,t,W,q,o,G)}var pf=null,gf=null;function ls(e){return e.nodeType===9?e:e.ownerDocument}function B0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mf=null;function Kv(){var e=window.event;return e&&e.type==="popstate"?e===mf?!1:(mf=e,!0):(mf=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(e){return $0.resolve(null).then(e).catch(Iv)}:U0;function Iv(e){setTimeout(function(){throw e})}function Qr(e){return e==="head"}function H0(e,t){var r=t,o=0,s=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<o&&8>o){r=o;var m=e.ownerDocument;if(r&1&&Co(m.documentElement),r&2&&Co(m.body),r&4)for(r=m.head,Co(r),m=r.firstChild;m;){var j=m.nextSibling,k=m.nodeName;m[nr]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=j}}if(s===0){e.removeChild(f),Do(t);return}s--}else r==="$"||r==="$?"||r==="$!"?s++:o=r.charCodeAt(0)-48;else o=0;r=f}while(r);Do(t)}function bf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":bf(r),Ba(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Wv(e,t,r,o){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[nr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=kn(e.nextSibling),e===null)break}return null}function e5(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=kn(e.nextSibling),e===null))return null;return e}function yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function t5(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var o=function(){t(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var vf=null;function q0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function Y0(e,t,r){switch(t=ls(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Co(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ba(e)}var yn=new Map,G0=new Set;function ss(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var br=ee.d;ee.d={f:n5,r:r5,D:a5,C:i5,L:o5,m:l5,X:c5,S:s5,M:u5};function n5(){var e=br.f(),t=Wl();return e||t}function r5(e){var t=kr(e);t!==null&&t.tag===5&&t.type==="form"?cg(t):br.r(e)}var hi=typeof document>"u"?null:document;function V0(e,t,r){var o=hi;if(o&&typeof t=="string"&&t){var s=dn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),G0.has(s)||(G0.add(s),e={rel:e,crossOrigin:r,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),Ct(t,"link",e),Ie(t),o.head.appendChild(t)))}}function a5(e){br.D(e),V0("dns-prefetch",e,null)}function i5(e,t){br.C(e,t),V0("preconnect",e,t)}function o5(e,t,r){br.L(e,t,r);var o=hi;if(o&&e&&t){var s='link[rel="preload"][as="'+dn(t)+'"]';t==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+dn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+dn(r.imageSizes)+'"]')):s+='[href="'+dn(e)+'"]';var f=s;switch(t){case"style":f=pi(e);break;case"script":f=gi(e)}yn.has(f)||(e=y({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),yn.set(f,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(Ro(f))||t==="script"&&o.querySelector(ko(f))||(t=o.createElement("link"),Ct(t,"link",e),Ie(t),o.head.appendChild(t)))}}function l5(e,t){br.m(e,t);var r=hi;if(r&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',f=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gi(e)}if(!yn.has(f)&&(e=y({rel:"modulepreload",href:e},t),yn.set(f,e),r.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ko(f)))return}o=r.createElement("link"),Ct(o,"link",e),Ie(o),r.head.appendChild(o)}}}function s5(e,t,r){br.S(e,t,r);var o=hi;if(o&&e){var s=rr(o).hoistableStyles,f=pi(e);t=t||"default";var m=s.get(f);if(!m){var j={loading:0,preload:null};if(m=o.querySelector(Ro(f)))j.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},r),(r=yn.get(f))&&wf(e,r);var k=m=o.createElement("link");Ie(k),Ct(k,"link",e),k._p=new Promise(function(U,K){k.onload=U,k.onerror=K}),k.addEventListener("load",function(){j.loading|=1}),k.addEventListener("error",function(){j.loading|=2}),j.loading|=4,cs(m,t,o)}m={type:"stylesheet",instance:m,count:1,state:j},s.set(f,m)}}}function c5(e,t){br.X(e,t);var r=hi;if(r&&e){var o=rr(r).hoistableScripts,s=gi(e),f=o.get(s);f||(f=r.querySelector(ko(s)),f||(e=y({src:e,async:!0},t),(t=yn.get(s))&&Sf(e,t),f=r.createElement("script"),Ie(f),Ct(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(s,f))}}function u5(e,t){br.M(e,t);var r=hi;if(r&&e){var o=rr(r).hoistableScripts,s=gi(e),f=o.get(s);f||(f=r.querySelector(ko(s)),f||(e=y({src:e,async:!0,type:"module"},t),(t=yn.get(s))&&Sf(e,t),f=r.createElement("script"),Ie(f),Ct(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(s,f))}}function X0(e,t,r,o){var s=(s=Y.current)?ss(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=pi(r.href),r=rr(s).hoistableStyles,o=r.get(t),o||(o={type:"style",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=pi(r.href);var f=rr(s).hoistableStyles,m=f.get(e);if(m||(s=s.ownerDocument||s,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,m),(f=s.querySelector(Ro(e)))&&!f._p&&(m.instance=f,m.state.loading=5),yn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},yn.set(e,r),f||f5(s,e,r,m.state))),t&&o===null)throw Error(l(528,""));return m}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gi(r),r=rr(s).hoistableScripts,o=r.get(t),o||(o={type:"script",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function pi(e){return'href="'+dn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function P0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function f5(e,t,r,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Ct(t,"link",r),Ie(t),e.head.appendChild(t))}function gi(e){return'[src="'+dn(e)+'"]'}function ko(e){return"script[async]"+e}function Q0(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+dn(r.href)+'"]');if(o)return t.instance=o,Ie(o),o;var s=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ie(o),Ct(o,"style",s),cs(o,r.precedence,e),t.instance=o;case"stylesheet":s=pi(r.href);var f=e.querySelector(Ro(s));if(f)return t.state.loading|=4,t.instance=f,Ie(f),f;o=P0(r),(s=yn.get(s))&&wf(o,s),f=(e.ownerDocument||e).createElement("link"),Ie(f);var m=f;return m._p=new Promise(function(j,k){m.onload=j,m.onerror=k}),Ct(f,"link",o),t.state.loading|=4,cs(f,r.precedence,e),t.instance=f;case"script":return f=gi(r.src),(s=e.querySelector(ko(f)))?(t.instance=s,Ie(s),s):(o=r,(s=yn.get(f))&&(o=y({},r),Sf(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ie(s),Ct(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,cs(o,r.precedence,e));return t.instance}function cs(e,t,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,f=s,m=0;m<o.length;m++){var j=o[m];if(j.dataset.precedence===t)f=j;else if(f!==s)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function wf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var us=null;function F0(e,t,r){if(us===null){var o=new Map,s=us=new Map;s.set(r,o)}else s=us,o=s.get(r),o||(o=new Map,s.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var f=r[s];if(!(f[nr]||f[xt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(t)||"";m=e+m;var j=o.get(m);j?j.push(f):o.set(m,[f])}}return o}function K0(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function d5(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function h5(){}function p5(e,t,r){if(Ao===null)throw Error(l(475));var o=Ao;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=pi(r.href),f=e.querySelector(Ro(s));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fs.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=f,Ie(f);return}f=e.ownerDocument||e,r=P0(r),(s=yn.get(s))&&wf(r,s),f=f.createElement("link"),Ie(f);var m=f;m._p=new Promise(function(j,k){m.onload=j,m.onerror=k}),Ct(f,"link",r),t.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=fs.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function g5(){if(Ao===null)throw Error(l(475));var e=Ao;return e.stylesheets&&e.count===0&&jf(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function fs(){if(this.count--,this.count===0){if(this.stylesheets)jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ds=null;function jf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ds=new Map,t.forEach(x5,e),ds=null,fs.call(e))}function x5(e,t){if(!(t.state.loading&4)){var r=ds.get(e);if(r)var o=r.get(null);else{r=new Map,ds.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<s.length;f++){var m=s[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(r.set(m.dataset.precedence,m),o=m)}o&&r.set(null,o)}s=t.instance,m=s.getAttribute("data-precedence"),f=r.get(m)||o,f===o&&r.set(null,s),r.set(m,s),this.count++,o=fs.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),f?f.parentNode.insertBefore(s,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Oo={$$typeof:z,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function m5(e,t,r,o,s,f,m,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Li(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Li(0),this.hiddenUpdates=Li(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function J0(e,t,r,o,s,f,m,j,k,U,K,W){return e=new m5(e,t,r,m,j,k,U,W),t=1,f===!0&&(t|=24),f=Wt(3,null,null,t),e.current=f,f.stateNode=e,t=ru(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:t},lu(f),e}function I0(e){return e?(e=Pa,e):Pa}function W0(e,t,r,o,s,f){s=I0(s),o.context===null?o.context=s:o.pendingContext=s,o=zr(t),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Dr(e,o,t),r!==null&&(an(r,e,t),oo(r,e,t))}function ex(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ef(e,t){ex(e,t),(e=e.alternate)&&ex(e,t)}function tx(e){if(e.tag===13){var t=Xa(e,67108864);t!==null&&an(t,e,67108864),Ef(e,67108864)}}var hs=!0;function b5(e,t,r,o){var s=H.T;H.T=null;var f=ee.p;try{ee.p=2,Tf(e,t,r,o)}finally{ee.p=f,H.T=s}}function y5(e,t,r,o){var s=H.T;H.T=null;var f=ee.p;try{ee.p=8,Tf(e,t,r,o)}finally{ee.p=f,H.T=s}}function Tf(e,t,r,o){if(hs){var s=_f(o);if(s===null)df(e,t,o,ps,r),rx(e,o);else if(w5(s,e,t,r,o))o.stopPropagation();else if(rx(e,o),t&4&&-1<v5.indexOf(e)){for(;s!==null;){var f=kr(s);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=Ln(f.pendingLanes);if(m!==0){var j=f;for(j.pendingLanes|=2,j.entangledLanes|=2;m;){var k=1<<31-Fe(m);j.entanglements[1]|=k,m&=~k}Pn(f),(He&6)===0&&(Jl=ot()+500,Eo(0))}}break;case 13:j=Xa(f,2),j!==null&&an(j,f,2),Wl(),Ef(f,2)}if(f=_f(o),f===null&&df(e,t,o,ps,r),f===s)break;s=f}s!==null&&o.stopPropagation()}else df(e,t,o,null,r)}}function _f(e){return e=Ac(e),Cf(e)}var ps=null;function Cf(e){if(ps=null,e=Rr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=h(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ps=e,null}function nx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jn()){case Ut:return 2;case Zn:return 8;case En:case jr:return 32;case Kt:return 268435456;default:return 32}default:return 32}}var Rf=!1,Fr=null,Kr=null,Zr=null,Mo=new Map,No=new Map,Jr=[],v5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(t.pointerId)}}function zo(e,t,r,o,s,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[s]},t!==null&&(t=kr(t),t!==null&&tx(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function w5(e,t,r,o,s){switch(t){case"focusin":return Fr=zo(Fr,e,t,r,o,s),!0;case"dragenter":return Kr=zo(Kr,e,t,r,o,s),!0;case"mouseover":return Zr=zo(Zr,e,t,r,o,s),!0;case"pointerover":var f=s.pointerId;return Mo.set(f,zo(Mo.get(f)||null,e,t,r,o,s)),!0;case"gotpointercapture":return f=s.pointerId,No.set(f,zo(No.get(f)||null,e,t,r,o,s)),!0}return!1}function ax(e){var t=Rr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=h(r),t!==null){e.blockedOn=t,ul(e.priority,function(){if(r.tag===13){var o=rn();o=$i(o);var s=Xa(r,o);s!==null&&an(s,r,o),Ef(r,o)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=_f(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);kc=o,r.target.dispatchEvent(o),kc=null}else return t=kr(r),t!==null&&tx(t),e.blockedOn=r,!1;t.shift()}return!0}function ix(e,t,r){gs(e)&&r.delete(t)}function S5(){Rf=!1,Fr!==null&&gs(Fr)&&(Fr=null),Kr!==null&&gs(Kr)&&(Kr=null),Zr!==null&&gs(Zr)&&(Zr=null),Mo.forEach(ix),No.forEach(ix)}function xs(e,t){e.blockedOn===t&&(e.blockedOn=null,Rf||(Rf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,S5)))}var ms=null;function ox(e){ms!==e&&(ms=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ms===e&&(ms=null);for(var t=0;t<e.length;t+=3){var r=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(Cf(o||r)===null)continue;break}var f=kr(r);f!==null&&(e.splice(t,3),t-=3,_u(f,{pending:!0,data:s,method:r.method,action:o},o,s))}}))}function Do(e){function t(k){return xs(k,e)}Fr!==null&&xs(Fr,e),Kr!==null&&xs(Kr,e),Zr!==null&&xs(Zr,e),Mo.forEach(t),No.forEach(t);for(var r=0;r<Jr.length;r++){var o=Jr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Jr.length&&(r=Jr[0],r.blockedOn===null);)ax(r),r.blockedOn===null&&Jr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var s=r[o],f=r[o+1],m=s[mt]||null;if(typeof f=="function")m||ox(r);else if(m){var j=null;if(f&&f.hasAttribute("formAction")){if(s=f,m=f[mt]||null)j=m.formAction;else if(Cf(s)!==null)continue}else j=m.action;typeof j=="function"?r[o+1]=j:(r.splice(o,3),o-=3),ox(r)}}}function kf(e){this._internalRoot=e}bs.prototype.render=kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,o=rn();W0(r,o,e,t,null,null)},bs.prototype.unmount=kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;W0(e.current,2,null,e,null,null),Wl(),t[tr]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cr();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Jr.length&&t!==0&&t<Jr[r].priority;r++);Jr.splice(r,0,e),r===0&&ax(e)}};var lx=a.version;if(lx!=="19.1.1")throw Error(l(527,lx,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var j5={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{un=ys.inject(j5),rt=ys}catch{}}return Lo.createRoot=function(e,t){if(!c(e))throw Error(l(299));var r=!1,o="",s=jg,f=Eg,m=Tg,j=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(j=t.unstable_transitionCallbacks)),t=J0(e,1,!1,null,null,r,o,s,f,m,j,null),e[tr]=t.current,ff(e),new kf(t)},Lo.hydrateRoot=function(e,t,r){if(!c(e))throw Error(l(299));var o=!1,s="",f=jg,m=Eg,j=Tg,k=null,U=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(k=r.unstable_transitionCallbacks),r.formState!==void 0&&(U=r.formState)),t=J0(e,1,!0,t,r??null,o,s,f,m,j,k,U),t.context=I0(null),r=t.current,o=rn(),o=$i(o),s=zr(o),s.callback=null,Dr(r,s,o),r=o,t.current.lanes=r,lt(t,r),Pn(t),e[tr]=t.current,ff(e),new bs(t)},Lo.version="19.1.1",Lo}var mx;function M5(){if(mx)return Mf.exports;mx=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Mf.exports=O5(),Mf.exports}var N5=M5();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bx="popstate";function z5(n={}){function a(l,c){let{pathname:d,search:h,hash:p}=l.location;return Nd("",{pathname:d,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){return typeof c=="string"?c:Io(c)}return B5(a,i,null,n)}function et(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Mn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function D5(){return Math.random().toString(36).substring(2,10)}function yx(n,a){return{usr:n.state,key:n.key,idx:a}}function Nd(n,a,i=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?ki(a):a,state:i,key:a&&a.key||l||D5()}}function Io({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ki(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function B5(n,a,i,l={}){let{window:c=document.defaultView,v5Compat:d=!1}=l,h=c.history,p="POP",x=null,g=y();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function y(){return(h.state||{idx:null}).idx}function v(){p="POP";let R=y(),A=R==null?null:R-g;g=R,x&&x({action:p,location:_.location,delta:A})}function S(R,A){p="PUSH";let N=Nd(_.location,R,A);g=y()+1;let z=yx(N,g),P=_.createHref(N);try{h.pushState(z,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;c.location.assign(P)}d&&x&&x({action:p,location:_.location,delta:1})}function C(R,A){p="REPLACE";let N=Nd(_.location,R,A);g=y();let z=yx(N,g),P=_.createHref(N);h.replaceState(z,"",P),d&&x&&x({action:p,location:_.location,delta:0})}function T(R){return L5(R)}let _={get action(){return p},get location(){return n(c,h)},listen(R){if(x)throw new Error("A history only accepts one active listener");return c.addEventListener(bx,v),x=R,()=>{c.removeEventListener(bx,v),x=null}},createHref(R){return a(c,R)},createURL:T,encodeLocation(R){let A=T(R);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:S,replace:C,go(R){return h.go(R)}};return _}function L5(n,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),et(i,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:Io(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=i+l),new URL(l,i)}function Tb(n,a,i="/"){return U5(n,a,i,!1)}function U5(n,a,i,l){let c=typeof a=="string"?ki(a):a,d=Sr(c.pathname||"/",i);if(d==null)return null;let h=_b(n);$5(h);let p=null;for(let x=0;p==null&&x<h.length;++x){let g=Z5(d);p=F5(h[x],g,l)}return p}function _b(n,a=[],i=[],l="",c=!1){let d=(h,p,x=c,g)=>{let y={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&x)return;et(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let v=wr([l,y.relativePath]),S=i.concat(y);h.children&&h.children.length>0&&(et(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),_b(h.children,a,S,v,x)),!(h.path==null&&!h.index)&&a.push({path:v,score:P5(v,h.index),routesMeta:S})};return n.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))d(h,p);else for(let x of Cb(h.path))d(h,p,!0,x)}),a}function Cb(n){let a=n.split("/");if(a.length===0)return[];let[i,...l]=a,c=i.endsWith("?"),d=i.replace(/\?$/,"");if(l.length===0)return c?[d,""]:[d];let h=Cb(l.join("/")),p=[];return p.push(...h.map(x=>x===""?d:[d,x].join("/"))),c&&p.push(...h),p.map(x=>n.startsWith("/")&&x===""?"/":x)}function $5(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:Q5(a.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var H5=/^:[\w-]+$/,q5=3,Y5=2,G5=1,V5=10,X5=-2,vx=n=>n==="*";function P5(n,a){let i=n.split("/"),l=i.length;return i.some(vx)&&(l+=X5),a&&(l+=Y5),i.filter(c=>!vx(c)).reduce((c,d)=>c+(H5.test(d)?q5:d===""?G5:V5),l)}function Q5(n,a){return n.length===a.length&&n.slice(0,-1).every((l,c)=>l===a[c])?n[n.length-1]-a[a.length-1]:0}function F5(n,a,i=!1){let{routesMeta:l}=n,c={},d="/",h=[];for(let p=0;p<l.length;++p){let x=l[p],g=p===l.length-1,y=d==="/"?a:a.slice(d.length)||"/",v=Is({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},y),S=x.route;if(!v&&g&&i&&!l[l.length-1].route.index&&(v=Is({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},y)),!v)return null;Object.assign(c,v.params),h.push({params:c,pathname:wr([d,v.pathname]),pathnameBase:e2(wr([d,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(d=wr([d,v.pathnameBase]))}return h}function Is(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,l]=K5(n.path,n.caseSensitive,n.end),c=a.match(i);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:l.reduce((g,{paramName:y,isOptional:v},S)=>{if(y==="*"){let T=p[S]||"";h=d.slice(0,d.length-T.length).replace(/(.)\/+$/,"$1")}const C=p[S];return v&&!C?g[y]=void 0:g[y]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:n}}function K5(n,a=!1,i=!0){Mn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,x)=>(l.push({paramName:p,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),l]}function Z5(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Mn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function Sr(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,l=n.charAt(i);return l&&l!=="/"?null:n.slice(i)||"/"}function J5(n,a="/"){let{pathname:i,search:l="",hash:c=""}=typeof n=="string"?ki(n):n;return{pathname:i?i.startsWith("/")?i:I5(i,a):a,search:t2(l),hash:n2(c)}}function I5(n,a){let i=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Bf(n,a,i,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function W5(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function ih(n){let a=W5(n);return a.map((i,l)=>l===a.length-1?i.pathname:i.pathnameBase)}function oh(n,a,i,l=!1){let c;typeof n=="string"?c=ki(n):(c={...n},et(!c.pathname||!c.pathname.includes("?"),Bf("?","pathname","search",c)),et(!c.pathname||!c.pathname.includes("#"),Bf("#","pathname","hash",c)),et(!c.search||!c.search.includes("#"),Bf("#","search","hash",c)));let d=n===""||c.pathname==="",h=d?"/":c.pathname,p;if(h==null)p=i;else{let v=a.length-1;if(!l&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),v-=1;c.pathname=S.join("/")}p=v>=0?a[v]:"/"}let x=J5(c,p),g=h&&h!=="/"&&h.endsWith("/"),y=(d||h===".")&&i.endsWith("/");return!x.pathname.endsWith("/")&&(g||y)&&(x.pathname+="/"),x}var wr=n=>n.join("/").replace(/\/\/+/g,"/"),e2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),t2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,n2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function r2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Rb=["POST","PUT","PATCH","DELETE"];new Set(Rb);var a2=["GET",...Rb];new Set(a2);var Ai=w.createContext(null);Ai.displayName="DataRouter";var ic=w.createContext(null);ic.displayName="DataRouterState";w.createContext(!1);var kb=w.createContext({isTransitioning:!1});kb.displayName="ViewTransition";var i2=w.createContext(new Map);i2.displayName="Fetchers";var o2=w.createContext(null);o2.displayName="Await";var Nn=w.createContext(null);Nn.displayName="Navigation";var rl=w.createContext(null);rl.displayName="Location";var zn=w.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var lh=w.createContext(null);lh.displayName="RouteError";function l2(n,{relative:a}={}){et(Oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=w.useContext(Nn),{hash:c,pathname:d,search:h}=al(n,{relative:a}),p=d;return i!=="/"&&(p=d==="/"?i:wr([i,d])),l.createHref({pathname:p,search:h,hash:c})}function Oi(){return w.useContext(rl)!=null}function Dn(){return et(Oi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(rl).location}var Ab="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ob(n){w.useContext(Nn).static||w.useLayoutEffect(n)}function Ne(){let{isDataRoute:n}=w.useContext(zn);return n?v2():s2()}function s2(){et(Oi(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ai),{basename:a,navigator:i}=w.useContext(Nn),{matches:l}=w.useContext(zn),{pathname:c}=Dn(),d=JSON.stringify(ih(l)),h=w.useRef(!1);return Ob(()=>{h.current=!0}),w.useCallback((x,g={})=>{if(Mn(h.current,Ab),!h.current)return;if(typeof x=="number"){i.go(x);return}let y=oh(x,JSON.parse(d),c,g.relative==="path");n==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:wr([a,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[a,i,d,c,n])}w.createContext(null);function Mb(){let{matches:n}=w.useContext(zn),a=n[n.length-1];return a?a.params:{}}function al(n,{relative:a}={}){let{matches:i}=w.useContext(zn),{pathname:l}=Dn(),c=JSON.stringify(ih(i));return w.useMemo(()=>oh(n,JSON.parse(c),l,a==="path"),[n,c,l,a])}function c2(n,a){return Nb(n,a)}function Nb(n,a,i,l){et(Oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=w.useContext(Nn),{matches:d}=w.useContext(zn),h=d[d.length-1],p=h?h.params:{},x=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let A=y&&y.path||"";zb(x,!y||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=Dn(),S;if(a){let A=typeof a=="string"?ki(a):a;et(g==="/"||A.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),S=A}else S=v;let C=S.pathname||"/",T=C;if(g!=="/"){let A=g.replace(/^\//,"").split("/");T="/"+C.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=Tb(n,{pathname:T});Mn(y||_!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mn(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=p2(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:wr([g,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:wr([g,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,i,l);return a&&R?w.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},R):R}function u2(){let n=y2(),a=r2(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:d},"ErrorBoundary")," or"," ",w.createElement("code",{style:d},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},a),i?w.createElement("pre",{style:c},i):null,h)}var f2=w.createElement(u2,null),d2=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){console.error("React Router caught the following error during render",n,a)}render(){return this.state.error!==void 0?w.createElement(zn.Provider,{value:this.props.routeContext},w.createElement(lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h2({routeContext:n,match:a,children:i}){let l=w.useContext(Ai);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),w.createElement(zn.Provider,{value:n},i)}function p2(n,a=[],i=null,l=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let c=n,d=i?.errors;if(d!=null){let x=c.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);et(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,p=-1;if(i)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=x),g.route.id){let{loaderData:y,errors:v}=i,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||S){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((x,g,y)=>{let v,S=!1,C=null,T=null;i&&(v=d&&g.route.id?d[g.route.id]:void 0,C=g.route.errorElement||f2,h&&(p<0&&y===0?(zb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===y&&(S=!0,T=g.route.hydrateFallbackElement||null)));let _=a.concat(c.slice(0,y+1)),R=()=>{let A;return v?A=C:S?A=T:g.route.Component?A=w.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=x,w.createElement(h2,{match:g,routeContext:{outlet:x,matches:_,isDataRoute:i!=null},children:A})};return i&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?w.createElement(d2,{location:i.location,revalidation:i.revalidation,component:C,error:v,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):R()},null)}function sh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g2(n){let a=w.useContext(Ai);return et(a,sh(n)),a}function x2(n){let a=w.useContext(ic);return et(a,sh(n)),a}function m2(n){let a=w.useContext(zn);return et(a,sh(n)),a}function ch(n){let a=m2(n),i=a.matches[a.matches.length-1];return et(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function b2(){return ch("useRouteId")}function y2(){let n=w.useContext(lh),a=x2("useRouteError"),i=ch("useRouteError");return n!==void 0?n:a.errors?.[i]}function v2(){let{router:n}=g2("useNavigate"),a=ch("useNavigate"),i=w.useRef(!1);return Ob(()=>{i.current=!0}),w.useCallback(async(c,d={})=>{Mn(i.current,Ab),i.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:a,...d}))},[n,a])}var wx={};function zb(n,a,i){!a&&!wx[n]&&(wx[n]=!0,Mn(!1,i))}w.memo(w2);function w2({routes:n,future:a,state:i}){return Nb(n,void 0,i,a)}function Lf({to:n,replace:a,state:i,relative:l}){et(Oi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=w.useContext(Nn);Mn(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=w.useContext(zn),{pathname:h}=Dn(),p=Ne(),x=oh(n,ih(d),h,l==="path"),g=JSON.stringify(x);return w.useEffect(()=>{p(JSON.parse(g),{replace:a,state:i,relative:l})},[p,g,l,a,i]),null}function ye(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S2({basename:n="/",children:a=null,location:i,navigationType:l="POP",navigator:c,static:d=!1}){et(!Oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=w.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof i=="string"&&(i=ki(i));let{pathname:x="/",search:g="",hash:y="",state:v=null,key:S="default"}=i,C=w.useMemo(()=>{let T=Sr(x,h);return T==null?null:{location:{pathname:T,search:g,hash:y,state:v,key:S},navigationType:l}},[h,x,g,y,v,S,l]);return Mn(C!=null,`<Router basename="${h}"> is not able to match the URL "${x}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:w.createElement(Nn.Provider,{value:p},w.createElement(rl.Provider,{children:a,value:C}))}function j2({children:n,location:a}){return c2(zd(n),a)}function zd(n,a=[]){let i=[];return w.Children.forEach(n,(l,c)=>{if(!w.isValidElement(l))return;let d=[...a,c];if(l.type===w.Fragment){i.push.apply(i,zd(l.props.children,d));return}et(l.type===ye,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=zd(l.props.children,d)),i.push(h)}),i}var Ls="get",Us="application/x-www-form-urlencoded";function oc(n){return n!=null&&typeof n.tagName=="string"}function E2(n){return oc(n)&&n.tagName.toLowerCase()==="button"}function T2(n){return oc(n)&&n.tagName.toLowerCase()==="form"}function _2(n){return oc(n)&&n.tagName.toLowerCase()==="input"}function C2(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function R2(n,a){return n.button===0&&(!a||a==="_self")&&!C2(n)}var vs=null;function k2(){if(vs===null)try{new FormData(document.createElement("form"),0),vs=!1}catch{vs=!0}return vs}var A2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uf(n){return n!=null&&!A2.has(n)?(Mn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Us}"`),null):n}function O2(n,a){let i,l,c,d,h;if(T2(n)){let p=n.getAttribute("action");l=p?Sr(p,a):null,i=n.getAttribute("method")||Ls,c=Uf(n.getAttribute("enctype"))||Us,d=new FormData(n)}else if(E2(n)||_2(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=n.getAttribute("formaction")||p.getAttribute("action");if(l=x?Sr(x,a):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||Ls,c=Uf(n.getAttribute("formenctype"))||Uf(p.getAttribute("enctype"))||Us,d=new FormData(p,n),!k2()){let{name:g,type:y,value:v}=n;if(y==="image"){let S=g?`${g}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else g&&d.append(g,v)}}else{if(oc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ls,l=null,c=Us,h=n}return d&&c==="text/plain"&&(h=d,d=void 0),{action:l,method:i.toLowerCase(),encType:c,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uh(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function M2(n,a,i){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname=`_root.${i}`:a&&Sr(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${i}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${i}`,l}async function N2(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function z2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function D2(n,a,i){let l=await Promise.all(n.map(async c=>{let d=a.routes[c.route.id];if(d){let h=await N2(d,i);return h.links?h.links():[]}return[]}));return $2(l.flat(1).filter(z2).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Sx(n,a,i,l,c,d){let h=(x,g)=>i[g]?x.route.id!==i[g].route.id:!0,p=(x,g)=>i[g].pathname!==x.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==x.params["*"];return d==="assets"?a.filter((x,g)=>h(x,g)||p(x,g)):d==="data"?a.filter((x,g)=>{let y=l.routes[x.route.id];if(!y||!y.hasLoader)return!1;if(h(x,g)||p(x,g))return!0;if(x.route.shouldRevalidate){let v=x.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function B2(n,a,{includeHydrateFallback:i}={}){return L2(n.map(l=>{let c=a.routes[l.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function L2(n){return[...new Set(n)]}function U2(n){let a={},i=Object.keys(n).sort();for(let l of i)a[l]=n[l];return a}function $2(n,a){let i=new Set;return new Set(a),n.reduce((l,c)=>{let d=JSON.stringify(U2(c));return i.has(d)||(i.add(d),l.push({key:d,link:c})),l},[])}function Db(){let n=w.useContext(Ai);return uh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function H2(){let n=w.useContext(ic);return uh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var fh=w.createContext(void 0);fh.displayName="FrameworkContext";function Bb(){let n=w.useContext(fh);return uh(n,"You must render this element inside a <HydratedRouter> element"),n}function q2(n,a){let i=w.useContext(fh),[l,c]=w.useState(!1),[d,h]=w.useState(!1),{onFocus:p,onBlur:x,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=a,S=w.useRef(null);w.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let _=A=>{A.forEach(N=>{h(N.isIntersecting)})},R=new IntersectionObserver(_,{threshold:.5});return S.current&&R.observe(S.current),()=>{R.disconnect()}}},[n]),w.useEffect(()=>{if(l){let _=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(_)}}},[l]);let C=()=>{c(!0)},T=()=>{c(!1),h(!1)};return i?n!=="intent"?[d,S,{}]:[d,S,{onFocus:Uo(p,C),onBlur:Uo(x,T),onMouseEnter:Uo(g,C),onMouseLeave:Uo(y,T),onTouchStart:Uo(v,C)}]:[!1,S,{}]}function Uo(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function Y2({page:n,...a}){let{router:i}=Db(),l=w.useMemo(()=>Tb(i.routes,n,i.basename),[i.routes,n,i.basename]);return l?w.createElement(V2,{page:n,matches:l,...a}):null}function G2(n){let{manifest:a,routeModules:i}=Bb(),[l,c]=w.useState([]);return w.useEffect(()=>{let d=!1;return D2(n,a,i).then(h=>{d||c(h)}),()=>{d=!0}},[n,a,i]),l}function V2({page:n,matches:a,...i}){let l=Dn(),{manifest:c,routeModules:d}=Bb(),{basename:h}=Db(),{loaderData:p,matches:x}=H2(),g=w.useMemo(()=>Sx(n,a,x,c,l,"data"),[n,a,x,c,l]),y=w.useMemo(()=>Sx(n,a,x,c,l,"assets"),[n,a,x,c,l]),v=w.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let T=new Set,_=!1;if(a.forEach(A=>{let N=c.routes[A.route.id];!N||!N.hasLoader||(!g.some(z=>z.route.id===A.route.id)&&A.route.id in p&&d[A.route.id]?.shouldRevalidate||N.hasClientLoader?_=!0:T.add(A.route.id))}),T.size===0)return[];let R=M2(n,h,"data");return _&&T.size>0&&R.searchParams.set("_routes",a.filter(A=>T.has(A.route.id)).map(A=>A.route.id).join(",")),[R.pathname+R.search]},[h,p,l,c,g,a,n,d]),S=w.useMemo(()=>B2(y,c),[y,c]),C=G2(y);return w.createElement(w.Fragment,null,v.map(T=>w.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),S.map(T=>w.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),C.map(({key:T,link:_})=>w.createElement("link",{key:T,nonce:i.nonce,..._})))}function X2(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lb&&(window.__reactRouterVersion="7.8.1")}catch{}function P2({basename:n,children:a,window:i}){let l=w.useRef();l.current==null&&(l.current=z5({window:i,v5Compat:!0}));let c=l.current,[d,h]=w.useState({action:c.action,location:c.location}),p=w.useCallback(x=>{w.startTransition(()=>h(x))},[h]);return w.useLayoutEffect(()=>c.listen(p),[c,p]),w.createElement(S2,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:c})}var Ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=w.forwardRef(function({onClick:a,discover:i="render",prefetch:l="none",relative:c,reloadDocument:d,replace:h,state:p,target:x,to:g,preventScrollReset:y,viewTransition:v,...S},C){let{basename:T}=w.useContext(Nn),_=typeof g=="string"&&Ub.test(g),R,A=!1;if(typeof g=="string"&&_&&(R=g,Lb))try{let I=new URL(window.location.href),le=g.startsWith("//")?new URL(I.protocol+g):new URL(g),ie=Sr(le.pathname,T);le.origin===I.origin&&ie!=null?g=ie+le.search+le.hash:A=!0}catch{Mn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=l2(g,{relative:c}),[z,P,$]=q2(l,S),F=Z2(g,{replace:h,state:p,target:x,preventScrollReset:y,relative:c,viewTransition:v});function Z(I){a&&a(I),I.defaultPrevented||F(I)}let ue=w.createElement("a",{...S,...$,href:R||N,onClick:A||d?a:Z,ref:X2(C,P),target:x,"data-discover":!_&&i==="render"?"true":void 0});return z&&!_?w.createElement(w.Fragment,null,ue,w.createElement(Y2,{page:N})):ue});Ft.displayName="Link";var Q2=w.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:l="",end:c=!1,style:d,to:h,viewTransition:p,children:x,...g},y){let v=al(h,{relative:g.relative}),S=Dn(),C=w.useContext(ic),{navigator:T,basename:_}=w.useContext(Nn),R=C!=null&&tw(v)&&p===!0,A=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,N=S.pathname,z=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(N=N.toLowerCase(),z=z?z.toLowerCase():null,A=A.toLowerCase()),z&&_&&(z=Sr(z,_)||z);const P=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let $=N===A||!c&&N.startsWith(A)&&N.charAt(P)==="/",F=z!=null&&(z===A||!c&&z.startsWith(A)&&z.charAt(A.length)==="/"),Z={isActive:$,isPending:F,isTransitioning:R},ue=$?a:void 0,I;typeof l=="function"?I=l(Z):I=[l,$?"active":null,F?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let le=typeof d=="function"?d(Z):d;return w.createElement(Ft,{...g,"aria-current":ue,className:I,ref:y,style:le,to:h,viewTransition:p},typeof x=="function"?x(Z):x)});Q2.displayName="NavLink";var F2=w.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:l,replace:c,state:d,method:h=Ls,action:p,onSubmit:x,relative:g,preventScrollReset:y,viewTransition:v,...S},C)=>{let T=W2(),_=ew(p,{relative:g}),R=h.toLowerCase()==="get"?"get":"post",A=typeof p=="string"&&Ub.test(p),N=z=>{if(x&&x(z),z.defaultPrevented)return;z.preventDefault();let P=z.nativeEvent.submitter,$=P?.getAttribute("formmethod")||h;T(P||z.currentTarget,{fetcherKey:a,method:$,navigate:i,replace:c,state:d,relative:g,preventScrollReset:y,viewTransition:v})};return w.createElement("form",{ref:C,method:R,action:_,onSubmit:l?x:N,...S,"data-discover":!A&&n==="render"?"true":void 0})});F2.displayName="Form";function K2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $b(n){let a=w.useContext(Ai);return et(a,K2(n)),a}function Z2(n,{target:a,replace:i,state:l,preventScrollReset:c,relative:d,viewTransition:h}={}){let p=Ne(),x=Dn(),g=al(n,{relative:d});return w.useCallback(y=>{if(R2(y,a)){y.preventDefault();let v=i!==void 0?i:Io(x)===Io(g);p(n,{replace:v,state:l,preventScrollReset:c,relative:d,viewTransition:h})}},[x,p,g,i,l,a,n,c,d,h])}var J2=0,I2=()=>`__${String(++J2)}__`;function W2(){let{router:n}=$b("useSubmit"),{basename:a}=w.useContext(Nn),i=b2();return w.useCallback(async(l,c={})=>{let{action:d,method:h,encType:p,formData:x,body:g}=O2(l,a);if(c.navigate===!1){let y=c.fetcherKey||I2();await n.fetch(y,i,c.action||d,{preventScrollReset:c.preventScrollReset,formData:x,body:g,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await n.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:x,body:g,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,a,i])}function ew(n,{relative:a}={}){let{basename:i}=w.useContext(Nn),l=w.useContext(zn);et(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),d={...al(n||".",{relative:a})},h=Dn();if(n==null){d.search=h.search;let p=new URLSearchParams(d.search),x=p.getAll("index");if(x.some(y=>y==="")){p.delete("index"),x.filter(v=>v).forEach(v=>p.append("index",v));let y=p.toString();d.search=y?`?${y}`:""}}return(!n||n===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:wr([i,d.pathname])),Io(d)}function tw(n,{relative:a}={}){let i=w.useContext(kb);et(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=$b("useViewTransitionState"),c=al(n,{relative:a});if(!i.isTransitioning)return!1;let d=Sr(i.currentLocation.pathname,l)||i.currentLocation.pathname,h=Sr(i.nextLocation.pathname,l)||i.nextLocation.pathname;return Is(c.pathname,h)!=null||Is(c.pathname,d)!=null}var Hb=Eb();const qb=ac(Hb);var Xt=function(){return Xt=Object.assign||function(a){for(var i,l=1,c=arguments.length;l<c;l++){i=arguments[l];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a},Xt.apply(this,arguments)};function Wo(n,a,i){if(i||arguments.length===2)for(var l=0,c=a.length,d;l<c;l++)(d||!(l in a))&&(d||(d=Array.prototype.slice.call(a,0,l)),d[l]=a[l]);return n.concat(d||Array.prototype.slice.call(a))}var Je="-ms-",Fo="-moz-",Ue="-webkit-",Yb="comm",lc="rule",dh="decl",nw="@import",Gb="@keyframes",rw="@layer",Vb=Math.abs,hh=String.fromCharCode,Dd=Object.assign;function aw(n,a){return jt(n,0)^45?(((a<<2^jt(n,0))<<2^jt(n,1))<<2^jt(n,2))<<2^jt(n,3):0}function Xb(n){return n.trim()}function yr(n,a){return(n=a.exec(n))?n[0]:n}function Ce(n,a,i){return n.replace(a,i)}function $s(n,a,i){return n.indexOf(a,i)}function jt(n,a){return n.charCodeAt(a)|0}function Si(n,a,i){return n.slice(a,i)}function Fn(n){return n.length}function Pb(n){return n.length}function Po(n,a){return a.push(n),n}function iw(n,a){return n.map(a).join("")}function jx(n,a){return n.filter(function(i){return!yr(i,a)})}var sc=1,ji=1,Qb=0,Sn=0,dt=0,Mi="";function cc(n,a,i,l,c,d,h,p){return{value:n,root:a,parent:i,type:l,props:c,children:d,line:sc,column:ji,length:h,return:"",siblings:p}}function na(n,a){return Dd(cc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function xi(n){for(;n.root;)n=na(n.root,{children:[n]});Po(n,n.siblings)}function ow(){return dt}function lw(){return dt=Sn>0?jt(Mi,--Sn):0,ji--,dt===10&&(ji=1,sc--),dt}function On(){return dt=Sn<Qb?jt(Mi,Sn++):0,ji++,dt===10&&(ji=1,sc++),dt}function Ca(){return jt(Mi,Sn)}function Hs(){return Sn}function uc(n,a){return Si(Mi,n,a)}function Bd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sw(n){return sc=ji=1,Qb=Fn(Mi=n),Sn=0,[]}function cw(n){return Mi="",n}function $f(n){return Xb(uc(Sn-1,Ld(n===91?n+2:n===40?n+1:n)))}function uw(n){for(;(dt=Ca())&&dt<33;)On();return Bd(n)>2||Bd(dt)>3?"":" "}function fw(n,a){for(;--a&&On()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return uc(n,Hs()+(a<6&&Ca()==32&&On()==32))}function Ld(n){for(;On();)switch(dt){case n:return Sn;case 34:case 39:n!==34&&n!==39&&Ld(dt);break;case 40:n===41&&Ld(n);break;case 92:On();break}return Sn}function dw(n,a){for(;On()&&n+dt!==57;)if(n+dt===84&&Ca()===47)break;return"/*"+uc(a,Sn-1)+"*"+hh(n===47?n:On())}function hw(n){for(;!Bd(Ca());)On();return uc(n,Sn)}function pw(n){return cw(qs("",null,null,null,[""],n=sw(n),0,[0],n))}function qs(n,a,i,l,c,d,h,p,x){for(var g=0,y=0,v=h,S=0,C=0,T=0,_=1,R=1,A=1,N=0,z="",P=c,$=d,F=l,Z=z;R;)switch(T=N,N=On()){case 40:if(T!=108&&jt(Z,v-1)==58){$s(Z+=Ce($f(N),"&","&\f"),"&\f",Vb(g?p[g-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:Z+=$f(N);break;case 9:case 10:case 13:case 32:Z+=uw(T);break;case 92:Z+=fw(Hs()-1,7);continue;case 47:switch(Ca()){case 42:case 47:Po(gw(dw(On(),Hs()),a,i,x),x);break;default:Z+="/"}break;case 123*_:p[g++]=Fn(Z)*A;case 125*_:case 59:case 0:switch(N){case 0:case 125:R=0;case 59+y:A==-1&&(Z=Ce(Z,/\f/g,"")),C>0&&Fn(Z)-v&&Po(C>32?Tx(Z+";",l,i,v-1,x):Tx(Ce(Z," ","")+";",l,i,v-2,x),x);break;case 59:Z+=";";default:if(Po(F=Ex(Z,a,i,g,y,c,p,z,P=[],$=[],v,d),d),N===123)if(y===0)qs(Z,a,F,F,P,d,v,p,$);else switch(S===99&&jt(Z,3)===110?100:S){case 100:case 108:case 109:case 115:qs(n,F,F,l&&Po(Ex(n,F,F,0,0,c,p,z,c,P=[],v,$),$),c,$,v,p,l?P:$);break;default:qs(Z,F,F,F,[""],$,0,p,$)}}g=y=C=0,_=A=1,z=Z="",v=h;break;case 58:v=1+Fn(Z),C=T;default:if(_<1){if(N==123)--_;else if(N==125&&_++==0&&lw()==125)continue}switch(Z+=hh(N),N*_){case 38:A=y>0?1:(Z+="\f",-1);break;case 44:p[g++]=(Fn(Z)-1)*A,A=1;break;case 64:Ca()===45&&(Z+=$f(On())),S=Ca(),y=v=Fn(z=Z+=hw(Hs())),N++;break;case 45:T===45&&Fn(Z)==2&&(_=0)}}return d}function Ex(n,a,i,l,c,d,h,p,x,g,y,v){for(var S=c-1,C=c===0?d:[""],T=Pb(C),_=0,R=0,A=0;_<l;++_)for(var N=0,z=Si(n,S+1,S=Vb(R=h[_])),P=n;N<T;++N)(P=Xb(R>0?C[N]+" "+z:Ce(z,/&\f/g,C[N])))&&(x[A++]=P);return cc(n,a,i,c===0?lc:p,x,g,y,v)}function gw(n,a,i,l){return cc(n,a,i,Yb,hh(ow()),Si(n,2,-2),0,l)}function Tx(n,a,i,l,c){return cc(n,a,i,dh,Si(n,0,l),Si(n,l+1,-1),l,c)}function Fb(n,a,i){switch(aw(n,a)){case 5103:return Ue+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ue+n+n;case 4789:return Fo+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+n+Fo+n+Je+n+n;case 5936:switch(jt(n,a+11)){case 114:return Ue+n+Je+Ce(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ue+n+Je+Ce(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ue+n+Je+Ce(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ue+n+Je+n+n;case 6165:return Ue+n+Je+"flex-"+n+n;case 5187:return Ue+n+Ce(n,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Je+"flex-$1$2")+n;case 5443:return Ue+n+Je+"flex-item-"+Ce(n,/flex-|-self/g,"")+(yr(n,/flex-|baseline/)?"":Je+"grid-row-"+Ce(n,/flex-|-self/g,""))+n;case 4675:return Ue+n+Je+"flex-line-pack"+Ce(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ue+n+Je+Ce(n,"shrink","negative")+n;case 5292:return Ue+n+Je+Ce(n,"basis","preferred-size")+n;case 6060:return Ue+"box-"+Ce(n,"-grow","")+Ue+n+Je+Ce(n,"grow","positive")+n;case 4554:return Ue+Ce(n,/([^-])(transform)/g,"$1"+Ue+"$2")+n;case 6187:return Ce(Ce(Ce(n,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),n,"")+n;case 5495:case 3959:return Ce(n,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Ce(Ce(n,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ue+n+n;case 4200:if(!yr(n,/flex-|baseline/))return Je+"grid-column-align"+Si(n,a)+n;break;case 2592:case 3360:return Je+Ce(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(l,c){return a=c,yr(l.props,/grid-\w+-end/)})?~$s(n+(i=i[a].value),"span",0)?n:Je+Ce(n,"-start","")+n+Je+"grid-row-span:"+(~$s(i,"span",0)?yr(i,/\d+/):+yr(i,/\d+/)-+yr(n,/\d+/))+";":Je+Ce(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(l){return yr(l.props,/grid-\w+-start/)})?n:Je+Ce(Ce(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ce(n,/(.+)-inline(.+)/,Ue+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fn(n)-1-a>6)switch(jt(n,a+1)){case 109:if(jt(n,a+4)!==45)break;case 102:return Ce(n,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+Fo+(jt(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~$s(n,"stretch",0)?Fb(Ce(n,"stretch","fill-available"),a,i)+n:n}break;case 5152:case 5920:return Ce(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,d,h,p,x,g){return Je+c+":"+d+g+(h?Je+c+"-span:"+(p?x:+x-+d)+g:"")+n});case 4949:if(jt(n,a+6)===121)return Ce(n,":",":"+Ue)+n;break;case 6444:switch(jt(n,jt(n,14)===45?18:11)){case 120:return Ce(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(jt(n,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Je+"$2box$3")+n;case 100:return Ce(n,":",":"+Je)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(n,"scroll-","scroll-snap-")+n}return n}function Ws(n,a){for(var i="",l=0;l<n.length;l++)i+=a(n[l],l,n,a)||"";return i}function xw(n,a,i,l){switch(n.type){case rw:if(n.children.length)break;case nw:case dh:return n.return=n.return||n.value;case Yb:return"";case Gb:return n.return=n.value+"{"+Ws(n.children,l)+"}";case lc:if(!Fn(n.value=n.props.join(",")))return""}return Fn(i=Ws(n.children,l))?n.return=n.value+"{"+i+"}":""}function mw(n){var a=Pb(n);return function(i,l,c,d){for(var h="",p=0;p<a;p++)h+=n[p](i,l,c,d)||"";return h}}function bw(n){return function(a){a.root||(a=a.return)&&n(a)}}function yw(n,a,i,l){if(n.length>-1&&!n.return)switch(n.type){case dh:n.return=Fb(n.value,n.length,i);return;case Gb:return Ws([na(n,{value:Ce(n.value,"@","@"+Ue)})],l);case lc:if(n.length)return iw(i=n.props,function(c){switch(yr(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xi(na(n,{props:[Ce(c,/:(read-\w+)/,":"+Fo+"$1")]})),xi(na(n,{props:[c]})),Dd(n,{props:jx(i,l)});break;case"::placeholder":xi(na(n,{props:[Ce(c,/:(plac\w+)/,":"+Ue+"input-$1")]})),xi(na(n,{props:[Ce(c,/:(plac\w+)/,":"+Fo+"$1")]})),xi(na(n,{props:[Ce(c,/:(plac\w+)/,Je+"input-$1")]})),xi(na(n,{props:[c]})),Dd(n,{props:jx(i,l)});break}return""})}}var vw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},Ei=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",Kb="active",Zb="data-styled-version",fc="6.1.19",ph=`/*!sc*/
`,ec=typeof window<"u"&&typeof document<"u",ww=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),dc=Object.freeze([]),Ti=Object.freeze({});function Sw(n,a,i){return i===void 0&&(i=Ti),n.theme!==i.theme&&n.theme||a||i.theme}var Jb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ew=/(^-|-$)/g;function _x(n){return n.replace(jw,"-").replace(Ew,"")}var Tw=/(a)(d)/gi,ws=52,Cx=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ud(n){var a,i="";for(a=Math.abs(n);a>ws;a=a/ws|0)i=Cx(a%ws)+i;return(Cx(a%ws)+i).replace(Tw,"$1-$2")}var Hf,Ib=5381,yi=function(n,a){for(var i=a.length;i;)n=33*n^a.charCodeAt(--i);return n},Wb=function(n){return yi(Ib,n)};function ey(n){return Ud(Wb(n)>>>0)}function _w(n){return n.displayName||n.name||"Component"}function qf(n){return typeof n=="string"&&!0}var ty=typeof Symbol=="function"&&Symbol.for,ny=ty?Symbol.for("react.memo"):60115,Cw=ty?Symbol.for("react.forward_ref"):60112,Rw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Aw=((Hf={})[Cw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hf[ny]=ry,Hf);function Rx(n){return("type"in(a=n)&&a.type.$$typeof)===ny?ry:"$$typeof"in n?Aw[n.$$typeof]:Rw;var a}var Ow=Object.defineProperty,Mw=Object.getOwnPropertyNames,kx=Object.getOwnPropertySymbols,Nw=Object.getOwnPropertyDescriptor,zw=Object.getPrototypeOf,Ax=Object.prototype;function ay(n,a,i){if(typeof a!="string"){if(Ax){var l=zw(a);l&&l!==Ax&&ay(n,l,i)}var c=Mw(a);kx&&(c=c.concat(kx(a)));for(var d=Rx(n),h=Rx(a),p=0;p<c.length;++p){var x=c[p];if(!(x in kw||i&&i[x]||h&&x in h||d&&x in d)){var g=Nw(a,x);try{Ow(n,x,g)}catch{}}}}return n}function _i(n){return typeof n=="function"}function gh(n){return typeof n=="object"&&"styledComponentId"in n}function Ta(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function $d(n,a){if(n.length===0)return"";for(var i=n[0],l=1;l<n.length;l++)i+=n[l];return i}function el(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Hd(n,a,i){if(i===void 0&&(i=!1),!i&&!el(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)n[l]=Hd(n[l],a[l]);else if(el(a))for(var l in a)n[l]=Hd(n[l],a[l]);return n}function xh(n,a){Object.defineProperty(n,"toString",{value:a})}function il(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Dw=(function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var i=0,l=0;l<a;l++)i+=this.groupSizes[l];return i},n.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var l=this.groupSizes,c=l.length,d=c;a>=d;)if((d<<=1)<0)throw il(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var h=c;h<d;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(a+1),x=(h=0,i.length);h<x;h++)this.tag.insertRule(p,i[h])&&(this.groupSizes[a]++,p++)},n.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],l=this.indexOfGroup(a),c=l+i;this.groupSizes[a]=0;for(var d=l;d<c;d++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var l=this.groupSizes[a],c=this.indexOfGroup(a),d=c+l,h=c;h<d;h++)i+="".concat(this.tag.getRule(h)).concat(ph);return i},n})(),Ys=new Map,tc=new Map,Gs=1,Ss=function(n){if(Ys.has(n))return Ys.get(n);for(;tc.has(Gs);)Gs++;var a=Gs++;return Ys.set(n,a),tc.set(a,n),a},Bw=function(n,a){Gs=a+1,Ys.set(n,a),tc.set(a,n)},Lw="style[".concat(Ei,"][").concat(Zb,'="').concat(fc,'"]'),Uw=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$w=function(n,a,i){for(var l,c=i.split(","),d=0,h=c.length;d<h;d++)(l=c[d])&&n.registerName(a,l)},Hw=function(n,a){for(var i,l=((i=a.textContent)!==null&&i!==void 0?i:"").split(ph),c=[],d=0,h=l.length;d<h;d++){var p=l[d].trim();if(p){var x=p.match(Uw);if(x){var g=0|parseInt(x[1],10),y=x[2];g!==0&&(Bw(y,g),$w(n,y,x[3]),n.getTag().insertRules(g,c)),c.length=0}else c.push(p)}}},Ox=function(n){for(var a=document.querySelectorAll(Lw),i=0,l=a.length;i<l;i++){var c=a[i];c&&c.getAttribute(Ei)!==Kb&&(Hw(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function qw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iy=function(n){var a=document.head,i=n||a,l=document.createElement("style"),c=(function(p){var x=Array.from(p.querySelectorAll("style[".concat(Ei,"]")));return x[x.length-1]})(i),d=c!==void 0?c.nextSibling:null;l.setAttribute(Ei,Kb),l.setAttribute(Zb,fc);var h=qw();return h&&l.setAttribute("nonce",h),i.insertBefore(l,d),l},Yw=(function(){function n(a){this.element=iy(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,c=0,d=l.length;c<d;c++){var h=l[c];if(h.ownerNode===i)return h}throw il(17)})(this.element),this.length=0}return n.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},n})(),Gw=(function(){function n(a){this.element=iy(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n})(),Vw=(function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n})(),Mx=ec,Xw={isServer:!ec,useCSSOMInjection:!ww},oy=(function(){function n(a,i,l){a===void 0&&(a=Ti),i===void 0&&(i={});var c=this;this.options=Xt(Xt({},Xw),a),this.gs=i,this.names=new Map(l),this.server=!!a.isServer,!this.server&&ec&&Mx&&(Mx=!1,Ox(this)),xh(this,function(){return(function(d){for(var h=d.getTag(),p=h.length,x="",g=function(v){var S=(function(A){return tc.get(A)})(v);if(S===void 0)return"continue";var C=d.names.get(S),T=h.getGroup(v);if(C===void 0||!C.size||T.length===0)return"continue";var _="".concat(Ei,".g").concat(v,'[id="').concat(S,'"]'),R="";C!==void 0&&C.forEach(function(A){A.length>0&&(R+="".concat(A,","))}),x+="".concat(T).concat(_,'{content:"').concat(R,'"}').concat(ph)},y=0;y<p;y++)g(y);return x})(c)})}return n.registerId=function(a){return Ss(a)},n.prototype.rehydrate=function(){!this.server&&ec&&Ox(this)},n.prototype.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new n(Xt(Xt({},this.options),a),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(i){var l=i.useCSSOMInjection,c=i.target;return i.isServer?new Vw(c):l?new Yw(c):new Gw(c)})(this.options),new Dw(a)));var a},n.prototype.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},n.prototype.registerName=function(a,i){if(Ss(a),this.names.has(a))this.names.get(a).add(i);else{var l=new Set;l.add(i),this.names.set(a,l)}},n.prototype.insertRules=function(a,i,l){this.registerName(a,i),this.getTag().insertRules(Ss(a),l)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(Ss(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Pw=/&/g,Qw=/^\s*\/\/.*$/gm;function ly(n,a){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=ly(i.children,a)),i})}function Fw(n){var a,i,l,c=Ti,d=c.options,h=d===void 0?Ti:d,p=c.plugins,x=p===void 0?dc:p,g=function(S,C,T){return T.startsWith(i)&&T.endsWith(i)&&T.replaceAll(i,"").length>0?".".concat(a):S},y=x.slice();y.push(function(S){S.type===lc&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Pw,i).replace(l,g))}),h.prefix&&y.push(yw),y.push(xw);var v=function(S,C,T,_){C===void 0&&(C=""),T===void 0&&(T=""),_===void 0&&(_="&"),a=_,i=C,l=new RegExp("\\".concat(i,"\\b"),"g");var R=S.replace(Qw,""),A=pw(T||C?"".concat(T," ").concat(C," { ").concat(R," }"):R);h.namespace&&(A=ly(A,h.namespace));var N=[];return Ws(A,mw(y.concat(bw(function(z){return N.push(z)})))),N};return v.hash=x.length?x.reduce(function(S,C){return C.name||il(15),yi(S,C.name)},Ib).toString():"",v}var Kw=new oy,qd=Fw(),sy=Jo.createContext({shouldForwardProp:void 0,styleSheet:Kw,stylis:qd});sy.Consumer;Jo.createContext(void 0);function Nx(){return w.useContext(sy)}var cy=(function(){function n(a,i){var l=this;this.inject=function(c,d){d===void 0&&(d=qd);var h=l.name+d.hash;c.hasNameForId(l.id,h)||c.insertRules(l.id,h,d(l.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,xh(this,function(){throw il(12,String(l.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=qd),this.name+a.hash},n})(),Zw=function(n){return n>="A"&&n<="Z"};function zx(n){for(var a="",i=0;i<n.length;i++){var l=n[i];if(i===1&&l==="-"&&n[0]==="-")return n;Zw(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var uy=function(n){return n==null||n===!1||n===""},fy=function(n){var a,i,l=[];for(var c in n){var d=n[c];n.hasOwnProperty(c)&&!uy(d)&&(Array.isArray(d)&&d.isCss||_i(d)?l.push("".concat(zx(c),":"),d,";"):el(d)?l.push.apply(l,Wo(Wo(["".concat(c," {")],fy(d),!1),["}"],!1)):l.push("".concat(zx(c),": ").concat((a=c,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||a in vw||a.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function Ra(n,a,i,l){if(uy(n))return[];if(gh(n))return[".".concat(n.styledComponentId)];if(_i(n)){if(!_i(d=n)||d.prototype&&d.prototype.isReactComponent||!a)return[n];var c=n(a);return Ra(c,a,i,l)}var d;return n instanceof cy?i?(n.inject(i,l),[n.getName(l)]):[n]:el(n)?fy(n):Array.isArray(n)?Array.prototype.concat.apply(dc,n.map(function(h){return Ra(h,a,i,l)})):[n.toString()]}function Jw(n){for(var a=0;a<n.length;a+=1){var i=n[a];if(_i(i)&&!gh(i))return!1}return!0}var Iw=Wb(fc),Ww=(function(){function n(a,i,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Jw(a),this.componentId=i,this.baseHash=yi(Iw,i),this.baseStyle=l,oy.registerId(i)}return n.prototype.generateAndInjectStyles=function(a,i,l){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=Ta(c,this.staticRulesId);else{var d=$d(Ra(this.rules,a,i,l)),h=Ud(yi(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,h)){var p=l(d,".".concat(h),void 0,this.componentId);i.insertRules(this.componentId,h,p)}c=Ta(c,h),this.staticRulesId=h}else{for(var x=yi(this.baseHash,l.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var S=$d(Ra(v,a,i,l));x=yi(x,S+y),g+=S}}if(g){var C=Ud(x>>>0);i.hasNameForId(this.componentId,C)||i.insertRules(this.componentId,C,l(g,".".concat(C),void 0,this.componentId)),c=Ta(c,C)}}return c},n})(),dy=Jo.createContext(void 0);dy.Consumer;var Yf={};function eS(n,a,i){var l=gh(n),c=n,d=!qf(n),h=a.attrs,p=h===void 0?dc:h,x=a.componentId,g=x===void 0?(function(P,$){var F=typeof P!="string"?"sc":_x(P);Yf[F]=(Yf[F]||0)+1;var Z="".concat(F,"-").concat(ey(fc+F+Yf[F]));return $?"".concat($,"-").concat(Z):Z})(a.displayName,a.parentComponentId):x,y=a.displayName,v=y===void 0?(function(P){return qf(P)?"styled.".concat(P):"Styled(".concat(_w(P),")")})(n):y,S=a.displayName&&a.componentId?"".concat(_x(a.displayName),"-").concat(a.componentId):a.componentId||g,C=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p,T=a.shouldForwardProp;if(l&&c.shouldForwardProp){var _=c.shouldForwardProp;if(a.shouldForwardProp){var R=a.shouldForwardProp;T=function(P,$){return _(P,$)&&R(P,$)}}else T=_}var A=new Ww(i,S,l?c.componentStyle:void 0);function N(P,$){return(function(F,Z,ue){var I=F.attrs,le=F.componentStyle,ie=F.defaultProps,ce=F.foldedComponentIds,je=F.styledComponentId,we=F.target,ge=Jo.useContext(dy),H=Nx(),ee=F.shouldForwardProp||H.shouldForwardProp,se=Sw(Z,ge,ie)||Ti,L=(function(oe,Y,ne){for(var ae,re=Xt(Xt({},Y),{className:void 0,theme:ne}),fe=0;fe<oe.length;fe+=1){var xe=_i(ae=oe[fe])?ae(re):ae;for(var Ee in xe)re[Ee]=Ee==="className"?Ta(re[Ee],xe[Ee]):Ee==="style"?Xt(Xt({},re[Ee]),xe[Ee]):xe[Ee]}return Y.className&&(re.className=Ta(re.className,Y.className)),re})(I,Z,se),E=L.as||we,O={};for(var Q in L)L[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&L.theme===se||(Q==="forwardedAs"?O.as=L.forwardedAs:ee&&!ee(Q,E)||(O[Q]=L[Q]));var V=(function(oe,Y){var ne=Nx(),ae=oe.generateAndInjectStyles(Y,ne.styleSheet,ne.stylis);return ae})(le,L),te=Ta(ce,je);return V&&(te+=" "+V),L.className&&(te+=" "+L.className),O[qf(E)&&!Jb.has(E)?"class":"className"]=te,ue&&(O.ref=ue),w.createElement(E,O)})(z,P,$)}N.displayName=v;var z=Jo.forwardRef(N);return z.attrs=C,z.componentStyle=A,z.displayName=v,z.shouldForwardProp=T,z.foldedComponentIds=l?Ta(c.foldedComponentIds,c.styledComponentId):"",z.styledComponentId=S,z.target=l?c.target:n,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=l?(function($){for(var F=[],Z=1;Z<arguments.length;Z++)F[Z-1]=arguments[Z];for(var ue=0,I=F;ue<I.length;ue++)Hd($,I[ue],!0);return $})({},c.defaultProps,P):P}}),xh(z,function(){return".".concat(z.styledComponentId)}),d&&ay(z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function Dx(n,a){for(var i=[n[0]],l=0,c=a.length;l<c;l+=1)i.push(a[l],n[l+1]);return i}var Bx=function(n){return Object.assign(n,{isCss:!0})};function hy(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(_i(n)||el(n))return Bx(Ra(Dx(dc,Wo([n],a,!0))));var l=n;return a.length===0&&l.length===1&&typeof l[0]=="string"?Ra(l):Bx(Ra(Dx(l,a)))}function Yd(n,a,i){if(i===void 0&&(i=Ti),!a)throw il(1,a);var l=function(c){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return n(a,i,hy.apply(void 0,Wo([c],d,!1)))};return l.attrs=function(c){return Yd(n,a,Xt(Xt({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},l.withConfig=function(c){return Yd(n,a,Xt(Xt({},i),c))},l}var py=function(n){return Yd(eS,n)},b=py;Jb.forEach(function(n){b[n]=py(n)});function gy(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var l=$d(hy.apply(void 0,Wo([n],a,!1))),c=ey(l);return new cy(c,l)}const tS="/mbtmi/assets/mainLogo-yyQl1bJT.jpg",kt="/mbtmi/assets/mbtmi-DazuRgPD.jpg",nS=()=>{const[n,a]=w.useState(!0),[i,l]=w.useState(!0),c=Ne();return w.useEffect(()=>{const d=setTimeout(()=>l(!1),2250),h=setTimeout(()=>a(!1),2250);return()=>{clearTimeout(d),clearTimeout(h)}},[]),u.jsxs(aS,{children:[n&&u.jsxs(iS,{style:{display:i?"block":"none"},children:[u.jsx(js,{}),u.jsx(js,{}),u.jsx(js,{}),u.jsx(js,{})]}),u.jsxs(oS,{$visible:!n,children:[u.jsx(lS,{src:tS,alt:"Main Logo"}),u.jsx(sS,{src:kt,alt:"MBTI Logo"}),u.jsx(my,{onClick:()=>c("/login"),children:"로그인1122"}),u.jsx(cS,{onClick:()=>c("/info"),children:"회원가입"})]})]})},xy=gy`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-50px); }
`,rS=gy`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`,aS=b.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,iS=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  animation: ${xy} 3s ease-in-out forwards;
`,js=b.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(173, 216, 230, 0.2);
  backdrop-filter: blur(3px);
  animation: ${xy} 3s ease-in-out forwards;

  &:nth-child(1) {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 5%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    width: 120px;
    height: 120px;
    bottom: 15%;
    left: 25%;
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    width: 90px;
    height: 90px;
    top: 40%;
    left: 50%;
    animation-delay: 0.4s;
  }
`,oS=b.div`
  opacity: ${n=>n.$visible?1:0};
  animation: ${n=>n.$visible?rS:"none"} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`,lS=b.img`
  width: 200px;
  margin-top: 60px;
  border-radius: 12px;
`,sS=b.img`
  width: 200px;
  margin-top: 10px;
`,my=b.div`
  width: 220px;
  height: 30px;
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,cS=b(my)``;function by(n,a){return function(){return n.apply(a,arguments)}}const{toString:uS}=Object.prototype,{getPrototypeOf:mh}=Object,{iterator:hc,toStringTag:yy}=Symbol,pc=(n=>a=>{const i=uS.call(a);return n[i]||(n[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Bn=n=>(n=n.toLowerCase(),a=>pc(a)===n),gc=n=>a=>typeof a===n,{isArray:Ni}=Array,tl=gc("undefined");function ol(n){return n!==null&&!tl(n)&&n.constructor!==null&&!tl(n.constructor)&&Pt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const vy=Bn("ArrayBuffer");function fS(n){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(n):a=n&&n.buffer&&vy(n.buffer),a}const dS=gc("string"),Pt=gc("function"),wy=gc("number"),ll=n=>n!==null&&typeof n=="object",hS=n=>n===!0||n===!1,Vs=n=>{if(pc(n)!=="object")return!1;const a=mh(n);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(yy in n)&&!(hc in n)},pS=n=>{if(!ll(n)||ol(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},gS=Bn("Date"),xS=Bn("File"),mS=Bn("Blob"),bS=Bn("FileList"),yS=n=>ll(n)&&Pt(n.pipe),vS=n=>{let a;return n&&(typeof FormData=="function"&&n instanceof FormData||Pt(n.append)&&((a=pc(n))==="formdata"||a==="object"&&Pt(n.toString)&&n.toString()==="[object FormData]"))},wS=Bn("URLSearchParams"),[SS,jS,ES,TS]=["ReadableStream","Request","Response","Headers"].map(Bn),_S=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sl(n,a,{allOwnKeys:i=!1}={}){if(n===null||typeof n>"u")return;let l,c;if(typeof n!="object"&&(n=[n]),Ni(n))for(l=0,c=n.length;l<c;l++)a.call(null,n[l],l,n);else{if(ol(n))return;const d=i?Object.getOwnPropertyNames(n):Object.keys(n),h=d.length;let p;for(l=0;l<h;l++)p=d[l],a.call(null,n[p],p,n)}}function Sy(n,a){if(ol(n))return null;a=a.toLowerCase();const i=Object.keys(n);let l=i.length,c;for(;l-- >0;)if(c=i[l],a===c.toLowerCase())return c;return null}const _a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,jy=n=>!tl(n)&&n!==_a;function Gd(){const{caseless:n}=jy(this)&&this||{},a={},i=(l,c)=>{const d=n&&Sy(a,c)||c;Vs(a[d])&&Vs(l)?a[d]=Gd(a[d],l):Vs(l)?a[d]=Gd({},l):Ni(l)?a[d]=l.slice():a[d]=l};for(let l=0,c=arguments.length;l<c;l++)arguments[l]&&sl(arguments[l],i);return a}const CS=(n,a,i,{allOwnKeys:l}={})=>(sl(a,(c,d)=>{i&&Pt(c)?n[d]=by(c,i):n[d]=c},{allOwnKeys:l}),n),RS=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),kS=(n,a,i,l)=>{n.prototype=Object.create(a.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:a.prototype}),i&&Object.assign(n.prototype,i)},AS=(n,a,i,l)=>{let c,d,h;const p={};if(a=a||{},n==null)return a;do{for(c=Object.getOwnPropertyNames(n),d=c.length;d-- >0;)h=c[d],(!l||l(h,n,a))&&!p[h]&&(a[h]=n[h],p[h]=!0);n=i!==!1&&mh(n)}while(n&&(!i||i(n,a))&&n!==Object.prototype);return a},OS=(n,a,i)=>{n=String(n),(i===void 0||i>n.length)&&(i=n.length),i-=a.length;const l=n.indexOf(a,i);return l!==-1&&l===i},MS=n=>{if(!n)return null;if(Ni(n))return n;let a=n.length;if(!wy(a))return null;const i=new Array(a);for(;a-- >0;)i[a]=n[a];return i},NS=(n=>a=>n&&a instanceof n)(typeof Uint8Array<"u"&&mh(Uint8Array)),zS=(n,a)=>{const l=(n&&n[hc]).call(n);let c;for(;(c=l.next())&&!c.done;){const d=c.value;a.call(n,d[0],d[1])}},DS=(n,a)=>{let i;const l=[];for(;(i=n.exec(a))!==null;)l.push(i);return l},BS=Bn("HTMLFormElement"),LS=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,c){return l.toUpperCase()+c}),Lx=(({hasOwnProperty:n})=>(a,i)=>n.call(a,i))(Object.prototype),US=Bn("RegExp"),Ey=(n,a)=>{const i=Object.getOwnPropertyDescriptors(n),l={};sl(i,(c,d)=>{let h;(h=a(c,d,n))!==!1&&(l[d]=h||c)}),Object.defineProperties(n,l)},$S=n=>{Ey(n,(a,i)=>{if(Pt(n)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=n[i];if(Pt(l)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},HS=(n,a)=>{const i={},l=c=>{c.forEach(d=>{i[d]=!0})};return Ni(n)?l(n):l(String(n).split(a)),i},qS=()=>{},YS=(n,a)=>n!=null&&Number.isFinite(n=+n)?n:a;function GS(n){return!!(n&&Pt(n.append)&&n[yy]==="FormData"&&n[hc])}const VS=n=>{const a=new Array(10),i=(l,c)=>{if(ll(l)){if(a.indexOf(l)>=0)return;if(ol(l))return l;if(!("toJSON"in l)){a[c]=l;const d=Ni(l)?[]:{};return sl(l,(h,p)=>{const x=i(h,c+1);!tl(x)&&(d[p]=x)}),a[c]=void 0,d}}return l};return i(n,0)},XS=Bn("AsyncFunction"),PS=n=>n&&(ll(n)||Pt(n))&&Pt(n.then)&&Pt(n.catch),Ty=((n,a)=>n?setImmediate:a?((i,l)=>(_a.addEventListener("message",({source:c,data:d})=>{c===_a&&d===i&&l.length&&l.shift()()},!1),c=>{l.push(c),_a.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Pt(_a.postMessage)),QS=typeof queueMicrotask<"u"?queueMicrotask.bind(_a):typeof process<"u"&&process.nextTick||Ty,FS=n=>n!=null&&Pt(n[hc]),X={isArray:Ni,isArrayBuffer:vy,isBuffer:ol,isFormData:vS,isArrayBufferView:fS,isString:dS,isNumber:wy,isBoolean:hS,isObject:ll,isPlainObject:Vs,isEmptyObject:pS,isReadableStream:SS,isRequest:jS,isResponse:ES,isHeaders:TS,isUndefined:tl,isDate:gS,isFile:xS,isBlob:mS,isRegExp:US,isFunction:Pt,isStream:yS,isURLSearchParams:wS,isTypedArray:NS,isFileList:bS,forEach:sl,merge:Gd,extend:CS,trim:_S,stripBOM:RS,inherits:kS,toFlatObject:AS,kindOf:pc,kindOfTest:Bn,endsWith:OS,toArray:MS,forEachEntry:zS,matchAll:DS,isHTMLForm:BS,hasOwnProperty:Lx,hasOwnProp:Lx,reduceDescriptors:Ey,freezeMethods:$S,toObjectSet:HS,toCamelCase:LS,noop:qS,toFiniteNumber:YS,findKey:Sy,global:_a,isContextDefined:jy,isSpecCompliantForm:GS,toJSONObject:VS,isAsyncFn:XS,isThenable:PS,setImmediate:Ty,asap:QS,isIterable:FS};function Te(n,a,i,l,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",a&&(this.code=a),i&&(this.config=i),l&&(this.request=l),c&&(this.response=c,this.status=c.status?c.status:null)}X.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}});const _y=Te.prototype,Cy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Cy[n]={value:n}});Object.defineProperties(Te,Cy);Object.defineProperty(_y,"isAxiosError",{value:!0});Te.from=(n,a,i,l,c,d)=>{const h=Object.create(_y);return X.toFlatObject(n,h,function(x){return x!==Error.prototype},p=>p!=="isAxiosError"),Te.call(h,n.message,a,i,l,c),h.cause=n,h.name=n.name,d&&Object.assign(h,d),h};const KS=null;function Vd(n){return X.isPlainObject(n)||X.isArray(n)}function Ry(n){return X.endsWith(n,"[]")?n.slice(0,-2):n}function Ux(n,a,i){return n?n.concat(a).map(function(c,d){return c=Ry(c),!i&&d?"["+c+"]":c}).join(i?".":""):a}function ZS(n){return X.isArray(n)&&!n.some(Vd)}const JS=X.toFlatObject(X,{},null,function(a){return/^is[A-Z]/.test(a)});function xc(n,a,i){if(!X.isObject(n))throw new TypeError("target must be an object");a=a||new FormData,i=X.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,R){return!X.isUndefined(R[_])});const l=i.metaTokens,c=i.visitor||y,d=i.dots,h=i.indexes,x=(i.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(a);if(!X.isFunction(c))throw new TypeError("visitor must be a function");function g(T){if(T===null)return"";if(X.isDate(T))return T.toISOString();if(X.isBoolean(T))return T.toString();if(!x&&X.isBlob(T))throw new Te("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(T)||X.isTypedArray(T)?x&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function y(T,_,R){let A=T;if(T&&!R&&typeof T=="object"){if(X.endsWith(_,"{}"))_=l?_:_.slice(0,-2),T=JSON.stringify(T);else if(X.isArray(T)&&ZS(T)||(X.isFileList(T)||X.endsWith(_,"[]"))&&(A=X.toArray(T)))return _=Ry(_),A.forEach(function(z,P){!(X.isUndefined(z)||z===null)&&a.append(h===!0?Ux([_],P,d):h===null?_:_+"[]",g(z))}),!1}return Vd(T)?!0:(a.append(Ux(R,_,d),g(T)),!1)}const v=[],S=Object.assign(JS,{defaultVisitor:y,convertValue:g,isVisitable:Vd});function C(T,_){if(!X.isUndefined(T)){if(v.indexOf(T)!==-1)throw Error("Circular reference detected in "+_.join("."));v.push(T),X.forEach(T,function(A,N){(!(X.isUndefined(A)||A===null)&&c.call(a,A,X.isString(N)?N.trim():N,_,S))===!0&&C(A,_?_.concat(N):[N])}),v.pop()}}if(!X.isObject(n))throw new TypeError("data must be an object");return C(n),a}function $x(n){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return a[l]})}function bh(n,a){this._pairs=[],n&&xc(n,this,a)}const ky=bh.prototype;ky.append=function(a,i){this._pairs.push([a,i])};ky.toString=function(a){const i=a?function(l){return a.call(this,l,$x)}:$x;return this._pairs.map(function(c){return i(c[0])+"="+i(c[1])},"").join("&")};function IS(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ay(n,a,i){if(!a)return n;const l=i&&i.encode||IS;X.isFunction(i)&&(i={serialize:i});const c=i&&i.serialize;let d;if(c?d=c(a,i):d=X.isURLSearchParams(a)?a.toString():new bh(a,i).toString(l),d){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class Hx{constructor(){this.handlers=[]}use(a,i,l){return this.handlers.push({fulfilled:a,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){X.forEach(this.handlers,function(l){l!==null&&a(l)})}}const Oy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},WS=typeof URLSearchParams<"u"?URLSearchParams:bh,ej=typeof FormData<"u"?FormData:null,tj=typeof Blob<"u"?Blob:null,nj={isBrowser:!0,classes:{URLSearchParams:WS,FormData:ej,Blob:tj},protocols:["http","https","file","blob","url","data"]},yh=typeof window<"u"&&typeof document<"u",Xd=typeof navigator=="object"&&navigator||void 0,rj=yh&&(!Xd||["ReactNative","NativeScript","NS"].indexOf(Xd.product)<0),aj=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ij=yh&&window.location.href||"http://localhost",oj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yh,hasStandardBrowserEnv:rj,hasStandardBrowserWebWorkerEnv:aj,navigator:Xd,origin:ij},Symbol.toStringTag,{value:"Module"})),Dt={...oj,...nj};function lj(n,a){return xc(n,new Dt.classes.URLSearchParams,{visitor:function(i,l,c,d){return Dt.isNode&&X.isBuffer(i)?(this.append(l,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...a})}function sj(n){return X.matchAll(/\w+|\[(\w*)]/g,n).map(a=>a[0]==="[]"?"":a[1]||a[0])}function cj(n){const a={},i=Object.keys(n);let l;const c=i.length;let d;for(l=0;l<c;l++)d=i[l],a[d]=n[d];return a}function My(n){function a(i,l,c,d){let h=i[d++];if(h==="__proto__")return!0;const p=Number.isFinite(+h),x=d>=i.length;return h=!h&&X.isArray(c)?c.length:h,x?(X.hasOwnProp(c,h)?c[h]=[c[h],l]:c[h]=l,!p):((!c[h]||!X.isObject(c[h]))&&(c[h]=[]),a(i,l,c[h],d)&&X.isArray(c[h])&&(c[h]=cj(c[h])),!p)}if(X.isFormData(n)&&X.isFunction(n.entries)){const i={};return X.forEachEntry(n,(l,c)=>{a(sj(l),c,i,0)}),i}return null}function uj(n,a,i){if(X.isString(n))try{return(a||JSON.parse)(n),X.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(n)}const cl={transitional:Oy,adapter:["xhr","http","fetch"],transformRequest:[function(a,i){const l=i.getContentType()||"",c=l.indexOf("application/json")>-1,d=X.isObject(a);if(d&&X.isHTMLForm(a)&&(a=new FormData(a)),X.isFormData(a))return c?JSON.stringify(My(a)):a;if(X.isArrayBuffer(a)||X.isBuffer(a)||X.isStream(a)||X.isFile(a)||X.isBlob(a)||X.isReadableStream(a))return a;if(X.isArrayBufferView(a))return a.buffer;if(X.isURLSearchParams(a))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let p;if(d){if(l.indexOf("application/x-www-form-urlencoded")>-1)return lj(a,this.formSerializer).toString();if((p=X.isFileList(a))||l.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return xc(p?{"files[]":a}:a,x&&new x,this.formSerializer)}}return d||c?(i.setContentType("application/json",!1),uj(a)):a}],transformResponse:[function(a){const i=this.transitional||cl.transitional,l=i&&i.forcedJSONParsing,c=this.responseType==="json";if(X.isResponse(a)||X.isReadableStream(a))return a;if(a&&X.isString(a)&&(l&&!this.responseType||c)){const h=!(i&&i.silentJSONParsing)&&c;try{return JSON.parse(a)}catch(p){if(h)throw p.name==="SyntaxError"?Te.from(p,Te.ERR_BAD_RESPONSE,this,null,this.response):p}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],n=>{cl.headers[n]={}});const fj=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dj=n=>{const a={};let i,l,c;return n&&n.split(`
`).forEach(function(h){c=h.indexOf(":"),i=h.substring(0,c).trim().toLowerCase(),l=h.substring(c+1).trim(),!(!i||a[i]&&fj[i])&&(i==="set-cookie"?a[i]?a[i].push(l):a[i]=[l]:a[i]=a[i]?a[i]+", "+l:l)}),a},qx=Symbol("internals");function $o(n){return n&&String(n).trim().toLowerCase()}function Xs(n){return n===!1||n==null?n:X.isArray(n)?n.map(Xs):String(n)}function hj(n){const a=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(n);)a[l[1]]=l[2];return a}const pj=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Gf(n,a,i,l,c){if(X.isFunction(l))return l.call(this,a,i);if(c&&(a=i),!!X.isString(a)){if(X.isString(l))return a.indexOf(l)!==-1;if(X.isRegExp(l))return l.test(a)}}function gj(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,i,l)=>i.toUpperCase()+l)}function xj(n,a){const i=X.toCamelCase(" "+a);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+i,{value:function(c,d,h){return this[l].call(this,a,c,d,h)},configurable:!0})})}let Qt=class{constructor(a){a&&this.set(a)}set(a,i,l){const c=this;function d(p,x,g){const y=$o(x);if(!y)throw new Error("header name must be a non-empty string");const v=X.findKey(c,y);(!v||c[v]===void 0||g===!0||g===void 0&&c[v]!==!1)&&(c[v||x]=Xs(p))}const h=(p,x)=>X.forEach(p,(g,y)=>d(g,y,x));if(X.isPlainObject(a)||a instanceof this.constructor)h(a,i);else if(X.isString(a)&&(a=a.trim())&&!pj(a))h(dj(a),i);else if(X.isObject(a)&&X.isIterable(a)){let p={},x,g;for(const y of a){if(!X.isArray(y))throw TypeError("Object iterator must return a key-value pair");p[g=y[0]]=(x=p[g])?X.isArray(x)?[...x,y[1]]:[x,y[1]]:y[1]}h(p,i)}else a!=null&&d(i,a,l);return this}get(a,i){if(a=$o(a),a){const l=X.findKey(this,a);if(l){const c=this[l];if(!i)return c;if(i===!0)return hj(c);if(X.isFunction(i))return i.call(this,c,l);if(X.isRegExp(i))return i.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,i){if(a=$o(a),a){const l=X.findKey(this,a);return!!(l&&this[l]!==void 0&&(!i||Gf(this,this[l],l,i)))}return!1}delete(a,i){const l=this;let c=!1;function d(h){if(h=$o(h),h){const p=X.findKey(l,h);p&&(!i||Gf(l,l[p],p,i))&&(delete l[p],c=!0)}}return X.isArray(a)?a.forEach(d):d(a),c}clear(a){const i=Object.keys(this);let l=i.length,c=!1;for(;l--;){const d=i[l];(!a||Gf(this,this[d],d,a,!0))&&(delete this[d],c=!0)}return c}normalize(a){const i=this,l={};return X.forEach(this,(c,d)=>{const h=X.findKey(l,d);if(h){i[h]=Xs(c),delete i[d];return}const p=a?gj(d):String(d).trim();p!==d&&delete i[d],i[p]=Xs(c),l[p]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const i=Object.create(null);return X.forEach(this,(l,c)=>{l!=null&&l!==!1&&(i[c]=a&&X.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,i])=>a+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...i){const l=new this(a);return i.forEach(c=>l.set(c)),l}static accessor(a){const l=(this[qx]=this[qx]={accessors:{}}).accessors,c=this.prototype;function d(h){const p=$o(h);l[p]||(xj(c,h),l[p]=!0)}return X.isArray(a)?a.forEach(d):d(a),this}};Qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(Qt.prototype,({value:n},a)=>{let i=a[0].toUpperCase()+a.slice(1);return{get:()=>n,set(l){this[i]=l}}});X.freezeMethods(Qt);function Vf(n,a){const i=this||cl,l=a||i,c=Qt.from(l.headers);let d=l.data;return X.forEach(n,function(p){d=p.call(i,d,c.normalize(),a?a.status:void 0)}),c.normalize(),d}function Ny(n){return!!(n&&n.__CANCEL__)}function zi(n,a,i){Te.call(this,n??"canceled",Te.ERR_CANCELED,a,i),this.name="CanceledError"}X.inherits(zi,Te,{__CANCEL__:!0});function zy(n,a,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?n(i):a(new Te("Request failed with status code "+i.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function mj(n){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return a&&a[1]||""}function bj(n,a){n=n||10;const i=new Array(n),l=new Array(n);let c=0,d=0,h;return a=a!==void 0?a:1e3,function(x){const g=Date.now(),y=l[d];h||(h=g),i[c]=x,l[c]=g;let v=d,S=0;for(;v!==c;)S+=i[v++],v=v%n;if(c=(c+1)%n,c===d&&(d=(d+1)%n),g-h<a)return;const C=y&&g-y;return C?Math.round(S*1e3/C):void 0}}function yj(n,a){let i=0,l=1e3/a,c,d;const h=(g,y=Date.now())=>{i=y,c=null,d&&(clearTimeout(d),d=null),n(...g)};return[(...g)=>{const y=Date.now(),v=y-i;v>=l?h(g,y):(c=g,d||(d=setTimeout(()=>{d=null,h(c)},l-v)))},()=>c&&h(c)]}const nc=(n,a,i=3)=>{let l=0;const c=bj(50,250);return yj(d=>{const h=d.loaded,p=d.lengthComputable?d.total:void 0,x=h-l,g=c(x),y=h<=p;l=h;const v={loaded:h,total:p,progress:p?h/p:void 0,bytes:x,rate:g||void 0,estimated:g&&p&&y?(p-h)/g:void 0,event:d,lengthComputable:p!=null,[a?"download":"upload"]:!0};n(v)},i)},Yx=(n,a)=>{const i=n!=null;return[l=>a[0]({lengthComputable:i,total:n,loaded:l}),a[1]]},Gx=n=>(...a)=>X.asap(()=>n(...a)),vj=Dt.hasStandardBrowserEnv?((n,a)=>i=>(i=new URL(i,Dt.origin),n.protocol===i.protocol&&n.host===i.host&&(a||n.port===i.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,wj=Dt.hasStandardBrowserEnv?{write(n,a,i,l,c,d){const h=[n+"="+encodeURIComponent(a)];X.isNumber(i)&&h.push("expires="+new Date(i).toGMTString()),X.isString(l)&&h.push("path="+l),X.isString(c)&&h.push("domain="+c),d===!0&&h.push("secure"),document.cookie=h.join("; ")},read(n){const a=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sj(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function jj(n,a){return a?n.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):n}function Dy(n,a,i){let l=!Sj(a);return n&&(l||i==!1)?jj(n,a):a}const Vx=n=>n instanceof Qt?{...n}:n;function Aa(n,a){a=a||{};const i={};function l(g,y,v,S){return X.isPlainObject(g)&&X.isPlainObject(y)?X.merge.call({caseless:S},g,y):X.isPlainObject(y)?X.merge({},y):X.isArray(y)?y.slice():y}function c(g,y,v,S){if(X.isUndefined(y)){if(!X.isUndefined(g))return l(void 0,g,v,S)}else return l(g,y,v,S)}function d(g,y){if(!X.isUndefined(y))return l(void 0,y)}function h(g,y){if(X.isUndefined(y)){if(!X.isUndefined(g))return l(void 0,g)}else return l(void 0,y)}function p(g,y,v){if(v in a)return l(g,y);if(v in n)return l(void 0,g)}const x={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:p,headers:(g,y,v)=>c(Vx(g),Vx(y),v,!0)};return X.forEach(Object.keys({...n,...a}),function(y){const v=x[y]||c,S=v(n[y],a[y],y);X.isUndefined(S)&&v!==p||(i[y]=S)}),i}const By=n=>{const a=Aa({},n);let{data:i,withXSRFToken:l,xsrfHeaderName:c,xsrfCookieName:d,headers:h,auth:p}=a;a.headers=h=Qt.from(h),a.url=Ay(Dy(a.baseURL,a.url,a.allowAbsoluteUrls),n.params,n.paramsSerializer),p&&h.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let x;if(X.isFormData(i)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((x=h.getContentType())!==!1){const[g,...y]=x?x.split(";").map(v=>v.trim()).filter(Boolean):[];h.setContentType([g||"multipart/form-data",...y].join("; "))}}if(Dt.hasStandardBrowserEnv&&(l&&X.isFunction(l)&&(l=l(a)),l||l!==!1&&vj(a.url))){const g=c&&d&&wj.read(d);g&&h.set(c,g)}return a},Ej=typeof XMLHttpRequest<"u",Tj=Ej&&function(n){return new Promise(function(i,l){const c=By(n);let d=c.data;const h=Qt.from(c.headers).normalize();let{responseType:p,onUploadProgress:x,onDownloadProgress:g}=c,y,v,S,C,T;function _(){C&&C(),T&&T(),c.cancelToken&&c.cancelToken.unsubscribe(y),c.signal&&c.signal.removeEventListener("abort",y)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function A(){if(!R)return;const z=Qt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),$={data:!p||p==="text"||p==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:z,config:n,request:R};zy(function(Z){i(Z),_()},function(Z){l(Z),_()},$),R=null}"onloadend"in R?R.onloadend=A:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(A)},R.onabort=function(){R&&(l(new Te("Request aborted",Te.ECONNABORTED,n,R)),R=null)},R.onerror=function(){l(new Te("Network Error",Te.ERR_NETWORK,n,R)),R=null},R.ontimeout=function(){let P=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const $=c.transitional||Oy;c.timeoutErrorMessage&&(P=c.timeoutErrorMessage),l(new Te(P,$.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,n,R)),R=null},d===void 0&&h.setContentType(null),"setRequestHeader"in R&&X.forEach(h.toJSON(),function(P,$){R.setRequestHeader($,P)}),X.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),p&&p!=="json"&&(R.responseType=c.responseType),g&&([S,T]=nc(g,!0),R.addEventListener("progress",S)),x&&R.upload&&([v,C]=nc(x),R.upload.addEventListener("progress",v),R.upload.addEventListener("loadend",C)),(c.cancelToken||c.signal)&&(y=z=>{R&&(l(!z||z.type?new zi(null,n,R):z),R.abort(),R=null)},c.cancelToken&&c.cancelToken.subscribe(y),c.signal&&(c.signal.aborted?y():c.signal.addEventListener("abort",y)));const N=mj(c.url);if(N&&Dt.protocols.indexOf(N)===-1){l(new Te("Unsupported protocol "+N+":",Te.ERR_BAD_REQUEST,n));return}R.send(d||null)})},_j=(n,a)=>{const{length:i}=n=n?n.filter(Boolean):[];if(a||i){let l=new AbortController,c;const d=function(g){if(!c){c=!0,p();const y=g instanceof Error?g:this.reason;l.abort(y instanceof Te?y:new zi(y instanceof Error?y.message:y))}};let h=a&&setTimeout(()=>{h=null,d(new Te(`timeout ${a} of ms exceeded`,Te.ETIMEDOUT))},a);const p=()=>{n&&(h&&clearTimeout(h),h=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),n=null)};n.forEach(g=>g.addEventListener("abort",d));const{signal:x}=l;return x.unsubscribe=()=>X.asap(p),x}},Cj=function*(n,a){let i=n.byteLength;if(i<a){yield n;return}let l=0,c;for(;l<i;)c=l+a,yield n.slice(l,c),l=c},Rj=async function*(n,a){for await(const i of kj(n))yield*Cj(i,a)},kj=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const a=n.getReader();try{for(;;){const{done:i,value:l}=await a.read();if(i)break;yield l}}finally{await a.cancel()}},Xx=(n,a,i,l)=>{const c=Rj(n,a);let d=0,h,p=x=>{h||(h=!0,l&&l(x))};return new ReadableStream({async pull(x){try{const{done:g,value:y}=await c.next();if(g){p(),x.close();return}let v=y.byteLength;if(i){let S=d+=v;i(S)}x.enqueue(new Uint8Array(y))}catch(g){throw p(g),g}},cancel(x){return p(x),c.return()}},{highWaterMark:2})},mc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ly=mc&&typeof ReadableStream=="function",Aj=mc&&(typeof TextEncoder=="function"?(n=>a=>n.encode(a))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Uy=(n,...a)=>{try{return!!n(...a)}catch{return!1}},Oj=Ly&&Uy(()=>{let n=!1;const a=new Request(Dt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!a}),Px=64*1024,Pd=Ly&&Uy(()=>X.isReadableStream(new Response("").body)),rc={stream:Pd&&(n=>n.body)};mc&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!rc[a]&&(rc[a]=X.isFunction(n[a])?i=>i[a]():(i,l)=>{throw new Te(`Response type '${a}' is not supported`,Te.ERR_NOT_SUPPORT,l)})})})(new Response);const Mj=async n=>{if(n==null)return 0;if(X.isBlob(n))return n.size;if(X.isSpecCompliantForm(n))return(await new Request(Dt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(X.isArrayBufferView(n)||X.isArrayBuffer(n))return n.byteLength;if(X.isURLSearchParams(n)&&(n=n+""),X.isString(n))return(await Aj(n)).byteLength},Nj=async(n,a)=>{const i=X.toFiniteNumber(n.getContentLength());return i??Mj(a)},zj=mc&&(async n=>{let{url:a,method:i,data:l,signal:c,cancelToken:d,timeout:h,onDownloadProgress:p,onUploadProgress:x,responseType:g,headers:y,withCredentials:v="same-origin",fetchOptions:S}=By(n);g=g?(g+"").toLowerCase():"text";let C=_j([c,d&&d.toAbortSignal()],h),T;const _=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let R;try{if(x&&Oj&&i!=="get"&&i!=="head"&&(R=await Nj(y,l))!==0){let $=new Request(a,{method:"POST",body:l,duplex:"half"}),F;if(X.isFormData(l)&&(F=$.headers.get("content-type"))&&y.setContentType(F),$.body){const[Z,ue]=Yx(R,nc(Gx(x)));l=Xx($.body,Px,Z,ue)}}X.isString(v)||(v=v?"include":"omit");const A="credentials"in Request.prototype;T=new Request(a,{...S,signal:C,method:i.toUpperCase(),headers:y.normalize().toJSON(),body:l,duplex:"half",credentials:A?v:void 0});let N=await fetch(T,S);const z=Pd&&(g==="stream"||g==="response");if(Pd&&(p||z&&_)){const $={};["status","statusText","headers"].forEach(I=>{$[I]=N[I]});const F=X.toFiniteNumber(N.headers.get("content-length")),[Z,ue]=p&&Yx(F,nc(Gx(p),!0))||[];N=new Response(Xx(N.body,Px,Z,()=>{ue&&ue(),_&&_()}),$)}g=g||"text";let P=await rc[X.findKey(rc,g)||"text"](N,n);return!z&&_&&_(),await new Promise(($,F)=>{zy($,F,{data:P,headers:Qt.from(N.headers),status:N.status,statusText:N.statusText,config:n,request:T})})}catch(A){throw _&&_(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new Te("Network Error",Te.ERR_NETWORK,n,T),{cause:A.cause||A}):Te.from(A,A&&A.code,n,T)}}),Qd={http:KS,xhr:Tj,fetch:zj};X.forEach(Qd,(n,a)=>{if(n){try{Object.defineProperty(n,"name",{value:a})}catch{}Object.defineProperty(n,"adapterName",{value:a})}});const Qx=n=>`- ${n}`,Dj=n=>X.isFunction(n)||n===null||n===!1,$y={getAdapter:n=>{n=X.isArray(n)?n:[n];const{length:a}=n;let i,l;const c={};for(let d=0;d<a;d++){i=n[d];let h;if(l=i,!Dj(i)&&(l=Qd[(h=String(i)).toLowerCase()],l===void 0))throw new Te(`Unknown adapter '${h}'`);if(l)break;c[h||"#"+d]=l}if(!l){const d=Object.entries(c).map(([p,x])=>`adapter ${p} `+(x===!1?"is not supported by the environment":"is not available in the build"));let h=a?d.length>1?`since :
`+d.map(Qx).join(`
`):" "+Qx(d[0]):"as no adapter specified";throw new Te("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:Qd};function Xf(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new zi(null,n)}function Fx(n){return Xf(n),n.headers=Qt.from(n.headers),n.data=Vf.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),$y.getAdapter(n.adapter||cl.adapter)(n).then(function(l){return Xf(n),l.data=Vf.call(n,n.transformResponse,l),l.headers=Qt.from(l.headers),l},function(l){return Ny(l)||(Xf(n),l&&l.response&&(l.response.data=Vf.call(n,n.transformResponse,l.response),l.response.headers=Qt.from(l.response.headers))),Promise.reject(l)})}const Hy="1.11.0",bc={};["object","boolean","number","function","string","symbol"].forEach((n,a)=>{bc[n]=function(l){return typeof l===n||"a"+(a<1?"n ":" ")+n}});const Kx={};bc.transitional=function(a,i,l){function c(d,h){return"[Axios v"+Hy+"] Transitional option '"+d+"'"+h+(l?". "+l:"")}return(d,h,p)=>{if(a===!1)throw new Te(c(h," has been removed"+(i?" in "+i:"")),Te.ERR_DEPRECATED);return i&&!Kx[h]&&(Kx[h]=!0,console.warn(c(h," has been deprecated since v"+i+" and will be removed in the near future"))),a?a(d,h,p):!0}};bc.spelling=function(a){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${a}`),!0)};function Bj(n,a,i){if(typeof n!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let c=l.length;for(;c-- >0;){const d=l[c],h=a[d];if(h){const p=n[d],x=p===void 0||h(p,d,n);if(x!==!0)throw new Te("option "+d+" must be "+x,Te.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Te("Unknown option "+d,Te.ERR_BAD_OPTION)}}const Ps={assertOptions:Bj,validators:bc},Qn=Ps.validators;let ka=class{constructor(a){this.defaults=a||{},this.interceptors={request:new Hx,response:new Hx}}async request(a,i){try{return await this._request(a,i)}catch(l){if(l instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{l.stack?d&&!String(l.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+d):l.stack=d}catch{}}throw l}}_request(a,i){typeof a=="string"?(i=i||{},i.url=a):i=a||{},i=Aa(this.defaults,i);const{transitional:l,paramsSerializer:c,headers:d}=i;l!==void 0&&Ps.assertOptions(l,{silentJSONParsing:Qn.transitional(Qn.boolean),forcedJSONParsing:Qn.transitional(Qn.boolean),clarifyTimeoutError:Qn.transitional(Qn.boolean)},!1),c!=null&&(X.isFunction(c)?i.paramsSerializer={serialize:c}:Ps.assertOptions(c,{encode:Qn.function,serialize:Qn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Ps.assertOptions(i,{baseUrl:Qn.spelling("baseURL"),withXsrfToken:Qn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let h=d&&X.merge(d.common,d[i.method]);d&&X.forEach(["delete","get","head","post","put","patch","common"],T=>{delete d[T]}),i.headers=Qt.concat(h,d);const p=[];let x=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(i)===!1||(x=x&&_.synchronous,p.unshift(_.fulfilled,_.rejected))});const g=[];this.interceptors.response.forEach(function(_){g.push(_.fulfilled,_.rejected)});let y,v=0,S;if(!x){const T=[Fx.bind(this),void 0];for(T.unshift(...p),T.push(...g),S=T.length,y=Promise.resolve(i);v<S;)y=y.then(T[v++],T[v++]);return y}S=p.length;let C=i;for(v=0;v<S;){const T=p[v++],_=p[v++];try{C=T(C)}catch(R){_.call(this,R);break}}try{y=Fx.call(this,C)}catch(T){return Promise.reject(T)}for(v=0,S=g.length;v<S;)y=y.then(g[v++],g[v++]);return y}getUri(a){a=Aa(this.defaults,a);const i=Dy(a.baseURL,a.url,a.allowAbsoluteUrls);return Ay(i,a.params,a.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(a){ka.prototype[a]=function(i,l){return this.request(Aa(l||{},{method:a,url:i,data:(l||{}).data}))}});X.forEach(["post","put","patch"],function(a){function i(l){return function(d,h,p){return this.request(Aa(p||{},{method:a,headers:l?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}ka.prototype[a]=i(),ka.prototype[a+"Form"]=i(!0)});let Lj=class qy{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const l=this;this.promise.then(c=>{if(!l._listeners)return;let d=l._listeners.length;for(;d-- >0;)l._listeners[d](c);l._listeners=null}),this.promise.then=c=>{let d;const h=new Promise(p=>{l.subscribe(p),d=p}).then(c);return h.cancel=function(){l.unsubscribe(d)},h},a(function(d,h,p){l.reason||(l.reason=new zi(d,h,p),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const i=this._listeners.indexOf(a);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const a=new AbortController,i=l=>{a.abort(l)};return this.subscribe(i),a.signal.unsubscribe=()=>this.unsubscribe(i),a.signal}static source(){let a;return{token:new qy(function(c){a=c}),cancel:a}}};function Uj(n){return function(i){return n.apply(null,i)}}function $j(n){return X.isObject(n)&&n.isAxiosError===!0}const Fd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fd).forEach(([n,a])=>{Fd[a]=n});function Yy(n){const a=new ka(n),i=by(ka.prototype.request,a);return X.extend(i,ka.prototype,a,{allOwnKeys:!0}),X.extend(i,a,null,{allOwnKeys:!0}),i.create=function(c){return Yy(Aa(n,c))},i}const he=Yy(cl);he.Axios=ka;he.CanceledError=zi;he.CancelToken=Lj;he.isCancel=Ny;he.VERSION=Hy;he.toFormData=xc;he.AxiosError=Te;he.Cancel=he.CanceledError;he.all=function(a){return Promise.all(a)};he.spread=Uj;he.isAxiosError=$j;he.mergeConfig=Aa;he.AxiosHeaders=Qt;he.formToJSON=n=>My(X.isHTMLForm(n)?new FormData(n):n);he.getAdapter=$y.getAdapter;he.HttpStatusCode=Fd;he.default=he;const{Axios:WA,AxiosError:e4,CanceledError:t4,isCancel:n4,CancelToken:r4,VERSION:a4,all:i4,Cancel:o4,isAxiosError:l4,spread:s4,toFormData:c4,AxiosHeaders:u4,HttpStatusCode:f4,formToJSON:d4,getAdapter:h4,mergeConfig:p4}=he,Hj=b.nav`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ecf0f3; /* 밝은 회색톤 */
    padding: 12px 0 calc(env(safe-area-inset-bottom, 0) + 12px);
    display: flex;
    justify-content: space-evenly;

    border-radius: 20px 20px 0 0; /* 위쪽만 둥글게 */
    box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 뉴모피즘 음각 효과 */
    z-index: 999;
`,mi=b.button`
    appearance: none;
    border: none;
    background: #ecf0f3;
    font-size: 24px;
    padding: 10px;
    border-radius: 16px;
    cursor: pointer;

    /* 뉴모피즘 버튼 */
    box-shadow: 4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff;
    transition: all 0.2s ease;

    &:active {
        box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff; /* 눌림 효과 */
        transform: scale(0.95);
    }
`,ia=({currentUser:n})=>{const a=Ne();return u.jsx(Hj,{children:u.jsxs("div",{children:[u.jsx(mi,{onClick:()=>a("/home"),children:"🏠"}),u.jsx(mi,{onClick:()=>a("/todaypost"),children:"🔍"}),u.jsx(mi,{onClick:()=>a("/activityNav",{state:{currentUser:n}}),children:"❤️"}),u.jsx(mi,{onClick:()=>a("/map"),children:"🗺️"}),u.jsx(mi,{onClick:()=>a("/mypage"),children:"🔔"}),u.jsx(mi,{onClick:()=>a("/chat"),children:"💌"})]})})},Zx=b.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${n=>n.$active?"#4a90e2":"#ccc"};
  color: white;
  font-size: 16px;
`,qj=b.div`
  display: flex;
  gap: 10px;
`,Yj=({value:n,onChange:a})=>u.jsx("div",{children:u.jsxs(qj,{children:[u.jsx(Zx,{$active:n==="M",onClick:()=>a("M"),children:"남자"}),u.jsx(Zx,{$active:n==="F",onClick:()=>a("F"),children:"여자"})]})}),Gj=({value:n,onChange:a})=>{const i=["서울특별시","부산광역시","대구광역시","인천광역시","대전광역시","광주광역시","울산광역시"],l=["경기도","충청북도","충청남도","경상북도","경상남도","전라북도","전라남도","강원도"],c=["제주도","울릉도"],d=h=>{a(h)};return u.jsxs(Vj,{children:[u.jsxs(Pf,{value:i.includes(n)?n:"",onChange:h=>d(h.target.value),children:[u.jsx("option",{value:"",children:"서울 및 광역시"}),i.map(h=>u.jsx("option",{value:h,children:h},h))]}),u.jsxs(Pf,{value:l.includes(n)?n:"",onChange:h=>d(h.target.value),children:[u.jsx("option",{value:"",children:"도"}),l.map(h=>u.jsx("option",{value:h,children:h},h))]}),u.jsxs(Pf,{value:c.includes(n)?n:"",onChange:h=>d(h.target.value),children:[u.jsx("option",{value:"",children:"제주 및 기타"}),c.map(h=>u.jsx("option",{value:h,children:h},h))]})]})},Vj=b.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Pf=b.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${n=>n.value?"#357ab8":"#ccc"};
  background-color: ${n=>n.value?"#4a90e2":"#fff"};
  color: ${n=>n.value?"#fff":"#333"};
  cursor: pointer;
  font-size: 15px;
  flex: 1;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  box-shadow: ${n=>n.value?"0 0 0 2px rgba(74, 144, 226, 0.4)":"none"};

  &:focus {
    outline: none;
    border-color: #357ab8;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.4);
  }

  option {
    padding: 5px;
    font-size: 13px;
    color: #333;
  }
`;function aa(n){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},aa(n)}function Xj(n,a){if(aa(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,a);if(aa(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function Pj(n){var a=Xj(n,"string");return aa(a)=="symbol"?a:a+""}function wn(n,a,i){return(a=Pj(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function Jx(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);a&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),i.push.apply(i,l)}return i}function Bt(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Jx(Object(i),!0).forEach(function(l){wn(n,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Jx(Object(i)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(i,l))})}return n}function Kd(n,a){(a==null||a>n.length)&&(a=n.length);for(var i=0,l=Array(a);i<a;i++)l[i]=n[i];return l}function Qj(n){if(Array.isArray(n))return Kd(n)}function Fj(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gy(n,a){if(n){if(typeof n=="string")return Kd(n,a);var i={}.toString.call(n).slice(8,-1);return i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set"?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Kd(n,a):void 0}}function Kj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(n){return Qj(n)||Fj(n)||Gy(n)||Kj()}function Zj(n){if(Array.isArray(n))return n}function Jj(n,a){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var l,c,d,h,p=[],x=!0,g=!1;try{if(d=(i=i.call(n)).next,a===0){if(Object(i)!==i)return;x=!1}else for(;!(x=(l=d.call(i)).done)&&(p.push(l.value),p.length!==a);x=!0);}catch(y){g=!0,c=y}finally{try{if(!x&&i.return!=null&&(h=i.return(),Object(h)!==h))return}finally{if(g)throw c}}return p}}function Ij(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(n,a){return Zj(n)||Jj(n,a)||Gy(n,a)||Ij()}var Qf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ix;function Wj(){return Ix||(Ix=1,(function(n){(function(){var a={}.hasOwnProperty;function i(){for(var d="",h=0;h<arguments.length;h++){var p=arguments[h];p&&(d=c(d,l(p)))}return d}function l(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return i.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var h="";for(var p in d)a.call(d,p)&&d[p]&&(h=c(h,p));return h}function c(d,h){return h?d?d+" "+h:d+h:d}n.exports?(i.default=i,n.exports=i):window.classNames=i})()})(Qf)),Qf.exports}var eE=Wj();const Oa=ac(eE);function vi(n){var a=w.useRef();a.current=n;var i=w.useCallback(function(){for(var l,c=arguments.length,d=new Array(c),h=0;h<c;h++)d[h]=arguments[h];return(l=a.current)===null||l===void 0?void 0:l.call.apply(l,[a].concat(d))},[]);return i}function tE(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Wx=tE()?w.useLayoutEffect:w.useEffect,Vy=function(a,i){var l=w.useRef(!0);Wx(function(){return a(l.current)},i),Wx(function(){return l.current=!1,function(){l.current=!0}},[])},em=function(a,i){Vy(function(l){if(!l)return a()},i)};function tm(n){var a=w.useRef(!1),i=w.useState(n),l=Rt(i,2),c=l[0],d=l[1];w.useEffect(function(){return a.current=!1,function(){a.current=!0}},[]);function h(p,x){x&&a.current||d(p)}return[c,h]}function Ff(n){return n!==void 0}function nE(n,a){var i=a||{},l=i.defaultValue,c=i.value,d=i.onChange,h=i.postState,p=tm(function(){return Ff(c)?c:Ff(l)?typeof l=="function"?l():l:typeof n=="function"?n():n}),x=Rt(p,2),g=x[0],y=x[1],v=c!==void 0?c:g,S=h?h(v):v,C=vi(d),T=tm([v]),_=Rt(T,2),R=_[0],A=_[1];em(function(){var z=R[0];g!==z&&C(g,z)},[R]),em(function(){Ff(c)||y(c)},[c]);var N=vi(function(z,P){y(z,P),A([v],P)});return[S,N]}var Zd={},rE=function(a){};function aE(n,a){}function iE(n,a){}function oE(){Zd={}}function Xy(n,a,i){!a&&!Zd[i]&&(n(!1,i),Zd[i]=!0)}function Ci(n,a){Xy(aE,n,a)}function lE(n,a){Xy(iE,n,a)}Ci.preMessage=rE;Ci.resetWarned=oE;Ci.noteOnce=lE;function sE(n,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l=new Set;function c(d,h){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,x=l.has(d);if(Ci(!x,"Warning: There may be circular references"),x)return!1;if(d===h)return!0;if(i&&p>1)return!1;l.add(d);var g=p+1;if(Array.isArray(d)){if(!Array.isArray(h)||d.length!==h.length)return!1;for(var y=0;y<d.length;y++)if(!c(d[y],h[y],g))return!1;return!0}if(d&&h&&aa(d)==="object"&&aa(h)==="object"){var v=Object.keys(d);return v.length!==Object.keys(h).length?!1:v.every(function(S){return c(d[S],h[S],g)})}return!1}return c(n,a)}function nl(){return nl=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var l in i)({}).hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},nl.apply(null,arguments)}function cE(n,a){if(n==null)return{};var i={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;i[l]=n[l]}return i}function Py(n,a){if(n==null)return{};var i,l,c=cE(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)i=d[l],a.indexOf(i)===-1&&{}.propertyIsEnumerable.call(n,i)&&(c[i]=n[i])}return c}function Jd(n,a,i){return(n-a)/(i-a)}function vh(n,a,i,l){var c=Jd(a,i,l),d={};switch(n){case"rtl":d.right="".concat(c*100,"%"),d.transform="translateX(50%)";break;case"btt":d.bottom="".concat(c*100,"%"),d.transform="translateY(50%)";break;case"ttb":d.top="".concat(c*100,"%"),d.transform="translateY(-50%)";break;default:d.left="".concat(c*100,"%"),d.transform="translateX(-50%)";break}return d}function Ea(n,a){return Array.isArray(n)?n[a]:n}var St={BACKSPACE:8,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},Ma=w.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),uE=w.createContext({}),fE=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],nm=w.forwardRef(function(n,a){var i=n.prefixCls,l=n.value,c=n.valueIndex,d=n.onStartMove,h=n.onDelete,p=n.style,x=n.render,g=n.dragging,y=n.draggingDelete,v=n.onOffsetChange,S=n.onChangeComplete,C=n.onFocus,T=n.onMouseEnter,_=Py(n,fE),R=w.useContext(Ma),A=R.min,N=R.max,z=R.direction,P=R.disabled,$=R.keyboard,F=R.range,Z=R.tabIndex,ue=R.ariaLabelForHandle,I=R.ariaLabelledByForHandle,le=R.ariaRequired,ie=R.ariaValueTextFormatterForHandle,ce=R.styles,je=R.classNames,we="".concat(i,"-handle"),ge=function(oe){P||d(oe,c)},H=function(oe){C?.(oe,c)},ee=function(oe){T(oe,c)},se=function(oe){if(!P&&$){var Y=null;switch(oe.which||oe.keyCode){case St.LEFT:Y=z==="ltr"||z==="btt"?-1:1;break;case St.RIGHT:Y=z==="ltr"||z==="btt"?1:-1;break;case St.UP:Y=z!=="ttb"?1:-1;break;case St.DOWN:Y=z!=="ttb"?-1:1;break;case St.HOME:Y="min";break;case St.END:Y="max";break;case St.PAGE_UP:Y=2;break;case St.PAGE_DOWN:Y=-2;break;case St.BACKSPACE:case St.DELETE:h?.(c);break}Y!==null&&(oe.preventDefault(),v(Y,c))}},L=function(oe){switch(oe.which||oe.keyCode){case St.LEFT:case St.RIGHT:case St.UP:case St.DOWN:case St.HOME:case St.END:case St.PAGE_UP:case St.PAGE_DOWN:S?.();break}},E=vh(z,l,A,N),O={};if(c!==null){var Q;O={tabIndex:P?null:Ea(Z,c),role:"slider","aria-valuemin":A,"aria-valuemax":N,"aria-valuenow":l,"aria-disabled":P,"aria-label":Ea(ue,c),"aria-labelledby":Ea(I,c),"aria-required":Ea(le,c),"aria-valuetext":(Q=Ea(ie,c))===null||Q===void 0?void 0:Q(l),"aria-orientation":z==="ltr"||z==="rtl"?"horizontal":"vertical",onMouseDown:ge,onTouchStart:ge,onFocus:H,onMouseEnter:ee,onKeyDown:se,onKeyUp:L}}var V=w.createElement("div",nl({ref:a,className:Oa(we,wn(wn(wn({},"".concat(we,"-").concat(c+1),c!==null&&F),"".concat(we,"-dragging"),g),"".concat(we,"-dragging-delete"),y),je.handle),style:Bt(Bt(Bt({},E),p),ce.handle)},O,_));return x&&(V=x(V,{index:c,prefixCls:i,value:l,dragging:g,draggingDelete:y})),V}),dE=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],hE=w.forwardRef(function(n,a){var i=n.prefixCls,l=n.style,c=n.onStartMove,d=n.onOffsetChange,h=n.values,p=n.handleRender,x=n.activeHandleRender,g=n.draggingIndex,y=n.draggingDelete,v=n.onFocus,S=Py(n,dE),C=w.useRef({}),T=w.useState(!1),_=Rt(T,2),R=_[0],A=_[1],N=w.useState(-1),z=Rt(N,2),P=z[0],$=z[1],F=function(ie){$(ie),A(!0)},Z=function(ie,ce){F(ce),v?.(ie)},ue=function(ie,ce){F(ce)};w.useImperativeHandle(a,function(){return{focus:function(ie){var ce;(ce=C.current[ie])===null||ce===void 0||ce.focus()},hideHelp:function(){Hb.flushSync(function(){A(!1)})}}});var I=Bt({prefixCls:i,onStartMove:c,onOffsetChange:d,render:p,onFocus:Z,onMouseEnter:ue},S);return w.createElement(w.Fragment,null,h.map(function(le,ie){var ce=g===ie;return w.createElement(nm,nl({ref:function(we){we?C.current[ie]=we:delete C.current[ie]},dragging:ce,draggingDelete:ce&&y,style:Ea(l,ie),key:ie,value:le,valueIndex:ie},I))}),x&&R&&w.createElement(nm,nl({key:"a11y"},I,{value:h[P],valueIndex:null,dragging:g!==-1,draggingDelete:y,render:x,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),pE=function(a){var i=a.prefixCls,l=a.style,c=a.children,d=a.value,h=a.onClick,p=w.useContext(Ma),x=p.min,g=p.max,y=p.direction,v=p.includedStart,S=p.includedEnd,C=p.included,T="".concat(i,"-text"),_=vh(y,d,x,g);return w.createElement("span",{className:Oa(T,wn({},"".concat(T,"-active"),C&&v<=d&&d<=S)),style:Bt(Bt({},_),l),onMouseDown:function(A){A.stopPropagation()},onClick:function(){h(d)}},c)},gE=function(a){var i=a.prefixCls,l=a.marks,c=a.onClick,d="".concat(i,"-mark");return l.length?w.createElement("div",{className:d},l.map(function(h){var p=h.value,x=h.style,g=h.label;return w.createElement(pE,{key:p,prefixCls:d,style:x,value:p,onClick:c},g)})):null},xE=function(a){var i=a.prefixCls,l=a.value,c=a.style,d=a.activeStyle,h=w.useContext(Ma),p=h.min,x=h.max,g=h.direction,y=h.included,v=h.includedStart,S=h.includedEnd,C="".concat(i,"-dot"),T=y&&v<=l&&l<=S,_=Bt(Bt({},vh(g,l,p,x)),typeof c=="function"?c(l):c);return T&&(_=Bt(Bt({},_),typeof d=="function"?d(l):d)),w.createElement("span",{className:Oa(C,wn({},"".concat(C,"-active"),T)),style:_})},mE=function(a){var i=a.prefixCls,l=a.marks,c=a.dots,d=a.style,h=a.activeStyle,p=w.useContext(Ma),x=p.min,g=p.max,y=p.step,v=w.useMemo(function(){var S=new Set;if(l.forEach(function(T){S.add(T.value)}),c&&y!==null)for(var C=x;C<=g;)S.add(C),C+=y;return Array.from(S)},[x,g,y,c,l]);return w.createElement("div",{className:"".concat(i,"-step")},v.map(function(S){return w.createElement(xE,{prefixCls:i,key:S,value:S,style:d,activeStyle:h})}))},rm=function(a){var i=a.prefixCls,l=a.style,c=a.start,d=a.end,h=a.index,p=a.onStartMove,x=a.replaceCls,g=w.useContext(Ma),y=g.direction,v=g.min,S=g.max,C=g.disabled,T=g.range,_=g.classNames,R="".concat(i,"-track"),A=Jd(c,v,S),N=Jd(d,v,S),z=function(Z){!C&&p&&p(Z,-1)},P={};switch(y){case"rtl":P.right="".concat(A*100,"%"),P.width="".concat(N*100-A*100,"%");break;case"btt":P.bottom="".concat(A*100,"%"),P.height="".concat(N*100-A*100,"%");break;case"ttb":P.top="".concat(A*100,"%"),P.height="".concat(N*100-A*100,"%");break;default:P.left="".concat(A*100,"%"),P.width="".concat(N*100-A*100,"%")}var $=x||Oa(R,wn(wn({},"".concat(R,"-").concat(h+1),h!==null&&T),"".concat(i,"-track-draggable"),p),_.track);return w.createElement("div",{className:$,style:Bt(Bt({},P),l),onMouseDown:z,onTouchStart:z})},bE=function(a){var i=a.prefixCls,l=a.style,c=a.values,d=a.startPoint,h=a.onStartMove,p=w.useContext(Ma),x=p.included,g=p.range,y=p.min,v=p.styles,S=p.classNames,C=w.useMemo(function(){if(!g){if(c.length===0)return[];var _=d??y,R=c[0];return[{start:Math.min(_,R),end:Math.max(_,R)}]}for(var A=[],N=0;N<c.length-1;N+=1)A.push({start:c[N],end:c[N+1]});return A},[c,g,d,y]);if(!x)return null;var T=C!=null&&C.length&&(S.tracks||v.tracks)?w.createElement(rm,{index:null,prefixCls:i,start:C[0].start,end:C[C.length-1].end,replaceCls:Oa(S.tracks,"".concat(i,"-tracks")),style:v.tracks}):null;return w.createElement(w.Fragment,null,T,C.map(function(_,R){var A=_.start,N=_.end;return w.createElement(rm,{index:R,prefixCls:i,style:Bt(Bt({},Ea(l,R)),v.track),start:A,end:N,key:R,onStartMove:h})}))},yE=130;function am(n){var a="targetTouches"in n?n.targetTouches[0]:n;return{pageX:a.pageX,pageY:a.pageY}}function vE(n,a,i,l,c,d,h,p,x,g,y){var v=w.useState(null),S=Rt(v,2),C=S[0],T=S[1],_=w.useState(-1),R=Rt(_,2),A=R[0],N=R[1],z=w.useState(!1),P=Rt(z,2),$=P[0],F=P[1],Z=w.useState(i),ue=Rt(Z,2),I=ue[0],le=ue[1],ie=w.useState(i),ce=Rt(ie,2),je=ce[0],we=ce[1],ge=w.useRef(null),H=w.useRef(null),ee=w.useRef(null),se=w.useContext(uE),L=se.onDragStart,E=se.onDragChange;Vy(function(){A===-1&&le(i)},[i,A]),w.useEffect(function(){return function(){document.removeEventListener("mousemove",ge.current),document.removeEventListener("mouseup",H.current),ee.current&&(ee.current.removeEventListener("touchmove",ge.current),ee.current.removeEventListener("touchend",H.current))}},[]);var O=function(Y,ne,ae){ne!==void 0&&T(ne),le(Y);var re=Y;ae&&(re=Y.filter(function(fe,xe){return xe!==A})),h(re),E&&E({rawValues:Y,deleteIndex:ae?A:-1,draggingIndex:A,draggingValue:ne})},Q=vi(function(oe,Y,ne){if(oe===-1){var ae=je[0],re=je[je.length-1],fe=l-ae,xe=c-re,Ee=Y*(c-l);Ee=Math.max(Ee,fe),Ee=Math.min(Ee,xe);var Ze=d(ae+Ee);Ee=Ze-ae;var Qe=je.map(function(jn){return jn+Ee});O(Qe)}else{var cn=(c-l)*Y,Lt=vr(I);Lt[oe]=je[oe];var ot=x(Lt,cn,oe,"dist");O(ot.values,ot.value,ne)}}),V=function(Y,ne,ae){Y.stopPropagation();var re=ae||i,fe=re[ne];N(ne),T(fe),we(re),le(re),F(!1);var xe=am(Y),Ee=xe.pageX,Ze=xe.pageY,Qe=!1;L&&L({rawValues:re,draggingIndex:ne,draggingValue:fe});var cn=function(jn){jn.preventDefault();var Ut=am(jn),Zn=Ut.pageX,En=Ut.pageY,jr=Zn-Ee,Kt=En-Ze,Zt=n.current.getBoundingClientRect(),Jn=Zt.width,un=Zt.height,rt,Et;switch(a){case"btt":rt=-Kt/un,Et=jr;break;case"ttb":rt=Kt/un,Et=jr;break;case"rtl":rt=-jr/Jn,Et=Kt;break;default:rt=jr/Jn,Et=Kt}Qe=g?Math.abs(Et)>yE&&y<I.length:!1,F(Qe),Q(ne,rt,Qe)},Lt=function ot(jn){jn.preventDefault(),document.removeEventListener("mouseup",ot),document.removeEventListener("mousemove",cn),ee.current&&(ee.current.removeEventListener("touchmove",ge.current),ee.current.removeEventListener("touchend",H.current)),ge.current=null,H.current=null,ee.current=null,p(Qe),N(-1),F(!1)};document.addEventListener("mouseup",Lt),document.addEventListener("mousemove",cn),Y.currentTarget.addEventListener("touchend",Lt),Y.currentTarget.addEventListener("touchmove",cn),ge.current=cn,H.current=Lt,ee.current=Y.currentTarget},te=w.useMemo(function(){var oe=vr(i).sort(function(fe,xe){return fe-xe}),Y=vr(I).sort(function(fe,xe){return fe-xe}),ne={};Y.forEach(function(fe){ne[fe]=(ne[fe]||0)+1}),oe.forEach(function(fe){ne[fe]=(ne[fe]||0)-1});var ae=g?1:0,re=Object.values(ne).reduce(function(fe,xe){return fe+Math.abs(xe)},0);return re<=ae?I:i},[i,I,g]);return[A,C,$,te,V]}function wE(n,a,i,l,c,d){var h=w.useCallback(function(C){return Math.max(n,Math.min(a,C))},[n,a]),p=w.useCallback(function(C){if(i!==null){var T=n+Math.round((h(C)-n)/i)*i,_=function(z){return(String(z).split(".")[1]||"").length},R=Math.max(_(i),_(a),_(n)),A=Number(T.toFixed(R));return n<=A&&A<=a?A:null}return null},[i,n,a,h]),x=w.useCallback(function(C){var T=h(C),_=l.map(function(N){return N.value});i!==null&&_.push(p(C)),_.push(n,a);var R=_[0],A=a-n;return _.forEach(function(N){var z=Math.abs(T-N);z<=A&&(R=N,A=z)}),R},[n,a,l,i,h,p]),g=function C(T,_,R){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof _=="number"){var N,z=T[R],P=z+_,$=[];l.forEach(function(le){$.push(le.value)}),$.push(n,a),$.push(p(z));var F=_>0?1:-1;A==="unit"?$.push(p(z+F*i)):$.push(p(P)),$=$.filter(function(le){return le!==null}).filter(function(le){return _<0?le<=z:le>=z}),A==="unit"&&($=$.filter(function(le){return le!==z}));var Z=A==="unit"?z:P;N=$[0];var ue=Math.abs(N-Z);if($.forEach(function(le){var ie=Math.abs(le-Z);ie<ue&&(N=le,ue=ie)}),N===void 0)return _<0?n:a;if(A==="dist")return N;if(Math.abs(_)>1){var I=vr(T);return I[R]=N,C(I,_-F,R,A)}return N}else{if(_==="min")return n;if(_==="max")return a}},y=function(T,_,R){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",N=T[R],z=g(T,_,R,A);return{value:z,changed:z!==N}},v=function(T){return d===null&&T===0||typeof d=="number"&&T<d},S=function(T,_,R){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",N=T.map(x),z=N[R],P=g(N,_,R,A);if(N[R]=P,c===!1){var $=d||0;R>0&&N[R-1]!==z&&(N[R]=Math.max(N[R],N[R-1]+$)),R<N.length-1&&N[R+1]!==z&&(N[R]=Math.min(N[R],N[R+1]-$))}else if(typeof d=="number"||d===null){for(var F=R+1;F<N.length;F+=1)for(var Z=!0;v(N[F]-N[F-1])&&Z;){var ue=y(N,1,F);N[F]=ue.value,Z=ue.changed}for(var I=R;I>0;I-=1)for(var le=!0;v(N[I]-N[I-1])&&le;){var ie=y(N,-1,I-1);N[I-1]=ie.value,le=ie.changed}for(var ce=N.length-1;ce>0;ce-=1)for(var je=!0;v(N[ce]-N[ce-1])&&je;){var we=y(N,-1,ce-1);N[ce-1]=we.value,je=we.changed}for(var ge=0;ge<N.length-1;ge+=1)for(var H=!0;v(N[ge+1]-N[ge])&&H;){var ee=y(N,1,ge+1);N[ge+1]=ee.value,H=ee.changed}}return{value:N[R],values:N}};return[x,S]}function SE(n){return w.useMemo(function(){if(n===!0||!n)return[!!n,!1,!1,0];var a=n.editable,i=n.draggableTrack,l=n.minCount,c=n.maxCount;return[!0,a,!a&&i,l||0,c]},[n])}var jE=w.forwardRef(function(n,a){var i=n.prefixCls,l=i===void 0?"rc-slider":i,c=n.className,d=n.style,h=n.classNames,p=n.styles,x=n.id,g=n.disabled,y=g===void 0?!1:g,v=n.keyboard,S=v===void 0?!0:v,C=n.autoFocus,T=n.onFocus,_=n.onBlur,R=n.min,A=R===void 0?0:R,N=n.max,z=N===void 0?100:N,P=n.step,$=P===void 0?1:P,F=n.value,Z=n.defaultValue,ue=n.range,I=n.count,le=n.onChange,ie=n.onBeforeChange,ce=n.onAfterChange,je=n.onChangeComplete,we=n.allowCross,ge=we===void 0?!0:we,H=n.pushable,ee=H===void 0?!1:H,se=n.reverse,L=n.vertical,E=n.included,O=E===void 0?!0:E,Q=n.startPoint,V=n.trackStyle,te=n.handleStyle,oe=n.railStyle,Y=n.dotStyle,ne=n.activeDotStyle,ae=n.marks,re=n.dots,fe=n.handleRender,xe=n.activeHandleRender,Ee=n.track,Ze=n.tabIndex,Qe=Ze===void 0?0:Ze,cn=n.ariaLabelForHandle,Lt=n.ariaLabelledByForHandle,ot=n.ariaRequired,jn=n.ariaValueTextFormatterForHandle,Ut=w.useRef(null),Zn=w.useRef(null),En=w.useMemo(function(){return L?se?"ttb":"btt":se?"rtl":"ltr"},[se,L]),jr=SE(ue),Kt=Rt(jr,5),Zt=Kt[0],Jn=Kt[1],un=Kt[2],rt=Kt[3],Et=Kt[4],Fe=w.useMemo(function(){return isFinite(A)?A:0},[A]),Er=w.useMemo(function(){return isFinite(z)?z:100},[z]),In=w.useMemo(function(){return $!==null&&$<=0?1:$},[$]),wc=w.useMemo(function(){return typeof ee=="boolean"?ee?In:!1:ee>=0?ee:!1},[ee,In]),Wn=w.useMemo(function(){return Object.keys(ae||{}).map(function(De){var me=ae[De],$e={value:Number(De)};return me&&aa(me)==="object"&&!w.isValidElement(me)&&("label"in me||"style"in me)?($e.style=me.style,$e.label=me.label):$e.label=me,$e}).filter(function(De){var me=De.label;return me||typeof me=="number"}).sort(function(De,me){return De.value-me.value})},[ae]),za=wE(Fe,Er,In,Wn,ge,wc),Ln=Rt(za,2),er=Ln[0],Tr=Ln[1],Sc=nE(Z,{value:F}),Bi=Rt(Sc,2),Tn=Bi[0],Li=Bi[1],lt=w.useMemo(function(){var De=Tn==null?[]:Array.isArray(Tn)?Tn:[Tn],me=Rt(De,1),$e=me[0],Ye=$e===void 0?Fe:$e,tt=Tn===null?[]:[Ye];if(Zt){if(tt=vr(De),I||Tn===void 0){var bt=I>=0?I+1:2;for(tt=tt.slice(0,bt);tt.length<bt;){var Jt;tt.push((Jt=tt[tt.length-1])!==null&&Jt!==void 0?Jt:Fe)}}tt.sort(function(fn,Mt){return fn-Mt})}return tt.forEach(function(fn,Mt){tt[Mt]=er(fn)}),tt},[Tn,Zt,Fe,I,er]),_r=function(me){return Zt?me:me[0]},oa=vi(function(De){var me=vr(De).sort(function($e,Ye){return $e-Ye});le&&!sE(me,lt,!0)&&le(_r(me)),Li(me)}),Ui=vi(function(De){De&&Ut.current.hideHelp();var me=_r(lt);ce?.(me),Ci(!ce,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),je?.(me)}),$i=function(me){if(!(y||!Jn||lt.length<=rt)){var $e=vr(lt);$e.splice(me,1),ie?.(_r($e)),oa($e);var Ye=Math.max(0,me-1);Ut.current.hideHelp(),Ut.current.focus(Ye)}},Hi=vE(Zn,En,lt,Fe,Er,er,oa,Ui,Tr,Jn,rt),Cr=Rt(Hi,5),ul=Cr[0],Un=Cr[1],xt=Cr[2],mt=Cr[3],tr=Cr[4],Da=function(me,$e){if(!y){var Ye=vr(lt),tt=0,bt=0,Jt=Er-Fe;lt.forEach(function(qn,la){var $t=Math.abs(me-qn);$t<=Jt&&(Jt=$t,tt=la),qn<me&&(bt=la)});var fn=tt;Jn&&Jt!==0&&(!Et||lt.length<Et)?(Ye.splice(bt+1,0,me),fn=bt+1):Ye[tt]=me,Zt&&!lt.length&&I===void 0&&Ye.push(me);var Mt=_r(Ye);if(ie?.(Mt),oa(Ye),$e){var _n,Hn;(_n=document.activeElement)===null||_n===void 0||(Hn=_n.blur)===null||Hn===void 0||Hn.call(_n),Ut.current.focus(fn),tr($e,fn,Ye)}else ce?.(Mt),Ci(!ce,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),je?.(Mt)}},jc=function(me){me.preventDefault();var $e=Zn.current.getBoundingClientRect(),Ye=$e.width,tt=$e.height,bt=$e.left,Jt=$e.top,fn=$e.bottom,Mt=$e.right,_n=me.clientX,Hn=me.clientY,qn;switch(En){case"btt":qn=(fn-Hn)/tt;break;case"ttb":qn=(Hn-Jt)/tt;break;case"rtl":qn=(Mt-_n)/Ye;break;default:qn=(_n-bt)/Ye}var la=Fe+qn*(Er-Fe);Da(er(la),me)},Ec=w.useState(null),qi=Rt(Ec,2),nr=qi[0],Ba=qi[1],Rr=function(me,$e){if(!y){var Ye=Tr(lt,me,$e);ie?.(_r(lt)),oa(Ye.values),Ba(Ye.value)}};w.useEffect(function(){if(nr!==null){var De=lt.indexOf(nr);De>=0&&Ut.current.focus(De)}Ba(null)},[nr]);var kr=w.useMemo(function(){return un&&In===null?!1:un},[un,In]),Ar=vi(function(De,me){tr(De,me),ie?.(_r(lt))}),rr=ul!==-1;w.useEffect(function(){if(!rr){var De=lt.lastIndexOf(Un);Ut.current.focus(De)}},[rr]);var Ie=w.useMemo(function(){return vr(mt).sort(function(De,me){return De-me})},[mt]),fl=w.useMemo(function(){return Zt?[Ie[0],Ie[Ie.length-1]]:[Fe,Ie[0]]},[Ie,Zt,Fe]),Yi=Rt(fl,2),$n=Yi[0],ar=Yi[1];w.useImperativeHandle(a,function(){return{focus:function(){Ut.current.focus(0)},blur:function(){var me,$e=document,Ye=$e.activeElement;(me=Zn.current)!==null&&me!==void 0&&me.contains(Ye)&&Ye?.blur()}}}),w.useEffect(function(){C&&Ut.current.focus(0)},[]);var Tc=w.useMemo(function(){return{min:Fe,max:Er,direction:En,disabled:y,keyboard:S,step:In,included:O,includedStart:$n,includedEnd:ar,range:Zt,tabIndex:Qe,ariaLabelForHandle:cn,ariaLabelledByForHandle:Lt,ariaRequired:ot,ariaValueTextFormatterForHandle:jn,styles:p||{},classNames:h||{}}},[Fe,Er,En,y,S,In,O,$n,ar,Zt,Qe,cn,Lt,ot,jn,p,h]);return w.createElement(Ma.Provider,{value:Tc},w.createElement("div",{ref:Zn,className:Oa(l,c,wn(wn(wn(wn({},"".concat(l,"-disabled"),y),"".concat(l,"-vertical"),L),"".concat(l,"-horizontal"),!L),"".concat(l,"-with-marks"),Wn.length)),style:d,onMouseDown:jc,id:x},w.createElement("div",{className:Oa("".concat(l,"-rail"),h?.rail),style:Bt(Bt({},oe),p?.rail)}),Ee!==!1&&w.createElement(bE,{prefixCls:l,style:V,values:lt,startPoint:Q,onStartMove:kr?Ar:void 0}),w.createElement(mE,{prefixCls:l,marks:Wn,dots:re,style:Y,activeStyle:ne}),w.createElement(hE,{ref:Ut,prefixCls:l,style:te,values:mt,draggingIndex:ul,draggingDelete:xt,onStartMove:Ar,onOffsetChange:Rr,onFocus:T,onBlur:_,handleRender:fe,activeHandleRender:xe,onChangeComplete:Ui,onDelete:Jn?$i:void 0}),w.createElement(gE,{prefixCls:l,marks:Wn,onClick:Da})))});const EE=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,TE=b.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  width: 360px;
  height: 550px;
  max-width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`,Kf=b.h2`
  margin-top: 25px;
  display: flex;
  margin-bottom: 16px;
  color: #333;
  font-size: 20px;
  justify-content: center;
`,im=b.button`
  display: block;
  margin-top: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #357ab8;
  }
`,_E=b.div`
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`,Qy=({isOpen:n,onClose:a,onSelectFilter:i,initialFilter:l})=>{const[c,d]=w.useState(""),[h,p]=w.useState([null,null]),[x,g]=w.useState("");if(w.useEffect(()=>{n&&l&&(d(l.gender||""),p([l.ageDown??null,l.ageUp??null]),g(l.location||""))},[n,l]),!n)return null;const y=()=>{i({gender:c,ageDown:h[0],ageUp:h[1],location:x}),a()},v=()=>{a()},S=()=>{d(""),p([null,null]),g("")};return u.jsx(EE,{onClick:a,children:u.jsxs(TE,{onClick:C=>C.stopPropagation(),children:[u.jsx("h2",{style:{color:"black",textAlign:"center",margin:"10px"},children:"상세검색"}),u.jsx(Kf,{children:"성별"}),u.jsx(_E,{children:u.jsx(Yj,{value:c,onChange:d})}),u.jsx(Kf,{children:"지역(택1)"}),u.jsx(Gj,{value:x,onChange:g}),u.jsx(Kf,{children:"나이"}),u.jsxs(RE,{children:[u.jsx(CE,{range:!0,min:20,max:80,step:1,value:[h[0]===null?20:h[0],h[1]===null?80:h[1]],allowCross:!1,onChange:([C,T])=>{p([C===20?null:C,T===80?null:T])}}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8},children:[u.jsx("span",{style:{marginRight:60},children:h[0]===null?"?살부터":`${h[0]}세 이상`}),u.jsx("span",{style:{marginLeft:60},children:h[1]===null?"?살까지":`${h[1]}세 이하`})]})]}),u.jsx(kE,{onClick:S,children:"설정초기화"}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"50px"},children:[u.jsx(im,{onClick:v,children:"취소"}),u.jsx(im,{onClick:y,children:"확인"})]})]})})},CE=b(jE)`
  .rc-slider-rail {
    background-color: #e0e0e0; /* 바탕 색 */
    height: 8px; /* 두께 */
    border-radius: 4px;
  }

  .rc-slider-track {
    background: linear-gradient(90deg, #4a90e2, #357ab8); /* 그라데이션 */
    height: 8px;
    border-radius: 4px;
  }

  .rc-slider-handle {
    width: 24px;
    height: 24px;
    margin-top: -8px; /* track 가운데 정렬 */
    background-color: #ffffff;
    border: 2px solid #4a90e2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    &:hover {
      border-color: #357ab8;
    }
  }
`,RE=b.div`
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,kE=b.button`
  margin: 10px auto 0; // 좌우 auto → 중앙 정렬
  display: block;
  margin-top: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #999;
  }
`,Fy=({onOpenModal:n})=>u.jsxs("div",{style:{textAlign:"center",marginBottom:"100px"},children:[u.jsx("h2",{children:"조건에 맞는 사용자가 없습니다."}),u.jsx("p",{children:"조건을 변경하거나 나중에 다시 시도해 주세요."}),u.jsx(AE,{onClick:n,children:"다시 검색하기"})]}),AE=b.button`
  margin-top: 20px;
  right: 10px;
  appearance: none;
  border: none;
  background: #dc0465ff;
  font-size: 24px; /* 점 크기 조금 키움 */
  padding: 6px 10px;
  border-radius: 16px;
  cursor: pointer;
`;he.defaults.baseURL="http://localhost:8080";he.defaults.withCredentials=!0;const Ky=w.createContext(null),At=()=>w.useContext(Ky),OE=({children:n})=>{const[a,i]=w.useState(!1),[l,c]=w.useState(null),[d,h]=w.useState(!0),p=async()=>{try{const T=await he.get("/api/check-session");T.data?.loggedIn?(i(!0),c(T.data.user)):(i(!1),c(null))}catch(T){console.error("checkSession error:",T),i(!1),c(null)}finally{h(!1)}};w.useEffect(()=>{p()},[]);const x=async T=>{try{const _=new Date(Number(T.year),Number(T.month-1),Number(T.day)),R={username:T.id,password:T.passWord,name:T.name,birth_date:_,created_at:new Date,mbti:`${T.mbti.EI}${T.mbti.SN}${T.mbti.TF}${T.mbti.JP}`,desired_mbti:T.de_mbti,self_intro:T.introduce,photo_url:T.profile.preview||null,email:T.email,location:T.location,gender:T.gender},A=$=>typeof $=="string"&&$.startsWith("#")?$.slice(1):$,N={hobby_name:(T.hobby??[]).map(A),tag_name:(T.introTags??[]).map(A),type:"SELF"},z={hobby_name:(T.de_hobby??[]).map(A),tag_name:(T.de_introTags??[]).map(A),type:"DESIRED"},P=await he.post("/api/signup",{createAcModel:R,createUserTagsModel:N,createUserDesiredTagsModel:z},{withCredentials:!0});return P.data.success?(c(P.data.user),{success:!0,userId:P.data.userId}):!1}catch(_){return console.error("sendFormData error:",_),!1}},g=async(T,_)=>{try{const R=await he.post("/api/login",{username:T,password:_},{withCredentials:!0});return R.data?(i(!0),c(R.data),!0):(i(!1),c(null),!1)}catch(R){return console.error("login error:",R),i(!1),c(null),!1}},y=async()=>{await he.get("/api/logout",{withCredentials:!0}),i(!1),c(null)},v=async T=>{try{const _=await he.put("/api/update-mymbti",T,{withCredentials:!0});return _.data?(c(_.data),!0):!1}catch(_){return console.error("updateMymbti error:",_),!1}},S=async T=>{try{return(await he.put("/api/update/desired",T,{withCredentials:!0})).status===200?(await p(),!0):!1}catch(_){return console.error("updateDesired error:",_),!1}},C=async T=>{try{const _=new FormData;return _.append("name",T.name),_.append("location",T.location),_.append("self_intro",T.self_intro),T.profileFile&&_.append("profileFile",T.profileFile),(await he.post("/api/update/profile",_,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}})).status===200?(await p(),!0):!1}catch(_){return console.error("updateMyInfo error:",_),!1}};return u.jsx(Ky.Provider,{value:{loggedIn:a,user:l,sendFormData:x,login:g,logout:y,loading:d,setUser:c,updateMymbti:v,updateDesired:S,updateMyInfo:C},children:n})},ME=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,NE=b.img`
  object-fit: cover;
  width: 100px;
  align-items: center;
`,zE=b.div`
  width: 100%;
  max-width: 350px;
  height: 550px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`,DE=b.div`
  width: 300px;
  height: 380px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,BE=b.img`
  width: 100%;
  height: 100%;
  object-position: center;
`,LE=b.h2`
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 1.5rem;
`,Es=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 5px;
`,Ts=b.span`
  background: #fbc2eb;
  color: #333;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
`,UE=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`,_s=b.span`
  padding: 6px 6px;
  border-radius: 12px;
  font-size: 30px;
  cursor: pointer;
`,$E=b.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`,HE=b.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${n=>-n.$index*100}%);
`,qE=b.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,YE=b.button`
  position: absolute;
  top: 10px;
  right: 10px;
  appearance: none;
  border: none;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  font-size: 24px;
  padding: 7px 10px;
  border-radius: 16px;
  cursor: pointer;
  width: 55px;
`,GE=b.button`
  position: absolute;
  top: 10px;
  right: 330px;
  appearance: none;
  border: none;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  font-size: 24px;
  padding: 7px 10px;
  border-radius: 16px;
  cursor: pointer;
  width: 55px;
`,om=b.div`
  margin-top: 12px;
  color: #fff;
  font-size: 14px;
  text-align: center;
`,VE=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,XE=b.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
`,PE=b.div`
  display: flex;
`,lm=b.div`
  margin: 8px;
`,QE=({homeState:n,setHomeState:a})=>{Ne();const{user:i,loading:l}=At(),[c,d]=w.useState(null),[h,p]=w.useState([]),[x,g]=w.useState(0),[y,v]=w.useState(!1),[S,C]=w.useState(!1),[T,_]=w.useState(!1),[R,A]=w.useState({gender:null,ageDown:null,ageUp:null,location:null}),[N,z]=w.useState(!1),P=n?.heartedUsers instanceof Set?n.heartedUsers:new Set(n?.heartedUsers||[]),$=n?.noHeartedUsers instanceof Set?n.noHeartedUsers:new Set(n?.noHeartedUsers||[]),[F,Z]=w.useState(P),[ue,I]=w.useState($),[le,ie]=w.useState(!1),[ce,je]=w.useState(!0),[we,ge]=w.useState(null),[H,ee]=w.useState(null),se=async()=>{if(c)try{const Y=await he.get(`/api/hearts/my/${c.user_id}`),ne=await he.get(`/api/hearts/myX/${c.user_id}`);Z(new Set(Y.data)),I(new Set(ne.data))}catch(Y){console.error("내 액션 불러오기 실패:",Y)}},L=async(Y={})=>{if(c)try{const ne=await he.get(`/api/users/random/${c.user_id}`,{params:Y});console.log("📌 백엔드 응답 데이터:",ne.data);const ae=ne.data;ae.length===0?z(!0):(z(!1),p(ae),g(0),await O(ae[0]))}catch(ne){console.error("랜덤 유저 불러오기 실패:",ne)}},E=async()=>{await L(R),await se()},O=async Y=>{if(!(!c||!Y))try{const ne=Math.abs(new Date(c.birth_date).getFullYear()-new Date(Y.birth_date).getFullYear()),ae=Y.tags?.filter(Ee=>Ee.type==="SELF").length||0,re=Y.hobbies?.filter(Ee=>Ee.type==="SELF").length||0,fe={FROM_USER:String(c.user_id),TO_USER:String(Y.user_id),FROM_MBTI:String(c.mbti),TO_MBTI:String(Y.mbti),AGE_DIFF:String(ne),TAG_OVERLAP:String(ae),HOBBY_OVERLAP:String(re)},xe=await he.post("http://localhost:5000/predict",fe,{withCredentials:!0});if(xe.data.prediction){const Ee=xe.data.prediction.find(Qe=>Qe.label==="1"),Ze=Ee?Ee.score:0;ge(Ze),ee(null)}else xe.data.error?(ge(null),ee(xe.data.error)):(ge(null),ee("Unknown prediction error"))}catch(ne){ge(null),ee(ne.message||"AutoML 요청 실패"),console.error("AutoML 요청 에러:",ne)}},Q=()=>{const Y=x-1<0?h.length-1:x-1;g(Y),O(h[Y])},V=async()=>{const Y=x+1;Y>=h.length?(await L(R),await se()):(g(Y),O(h[Y]))},te=async()=>{if(T||h.length===0)return;const Y=h[x].user_id;_(!0);try{const ne=await he.post("/api/hearts/toggle",null,{params:{fromUser:c.user_id,toUser:Y}});Z(ae=>{const re=new Set(ae);return re.has(Y)?re.delete(Y):re.add(Y),re}),I(ae=>{const re=new Set(ae);return re.delete(Y),re}),setTimeout(()=>{g(ae=>ae+1>=h.length?0:ae+1),_(!1)},2e3)}catch(ne){console.error("하트 요청 실패:",ne),_(!1)}},oe=async()=>{if(T||h.length===0)return;const Y=h[x].user_id;_(!0);try{const ne=await he.post("/api/hearts/toggleX",null,{params:{fromUser:c.user_id,toUser:Y}});I(ae=>{const re=new Set(ae);return re.has(Y)?re.delete(Y):re.add(Y),re}),Z(ae=>{const re=new Set(ae);return re.delete(Y),re}),setTimeout(()=>{g(ae=>ae+1>=h.length?0:ae+1),_(!1)},2e3)}catch(ne){console.error("관심없음 요청 실패:",ne),_(!1)}};return w.useEffect(()=>{le||(async()=>{try{const ne=await he.get("/api/check-session");if(!ne.data.loggedIn)return;const ae=ne.data.user;d(ae),n?(p(n.randomUsers||[]),Z(n.heartedUsers instanceof Set?n.heartedUsers:new Set(n.heartedUsers||[])),I(n.noHeartedUsers instanceof Set?n.noHeartedUsers:new Set(n.noHeartedUsers||[])),g(n.currentIndex||0),je(!1),(n.randomUsers||[]).length>0&&await O(n.randomUsers[n.currentIndex||0])):await E(),ie(!0)}catch(ne){console.error("Home 초기화 실패:",ne)}})()},[le,n]),w.useEffect(()=>{typeof a=="function"&&a({randomUsers:h,heartedUsers:F,noHeartedUsers:ue,currentIndex:x})},[h,F,ue,x,a]),w.useEffect(()=>{h&&h.length>0&&x>=0&&x<h.length&&O(h[x])},[x]),w.useEffect(()=>{c&&E()},[c]),l?u.jsx("p",{children:"로딩중..."}):i?u.jsxs(ME,{children:[u.jsx(NE,{src:kt,alt:"",style:{userSelect:"none",WebkitUserDrag:"none"}}),u.jsx($E,{children:h.length===0?u.jsx("p",{style:{color:"white",fontSize:"20px"},children:"LOADING..."}):N?u.jsx(Fy,{onOpenModal:()=>v(!0)}):u.jsx(HE,{$index:x,children:h.map(Y=>u.jsx(qE,{children:u.jsxs(zE,{children:[u.jsxs(PE,{children:[u.jsx(GE,{onClick:()=>C(!0),children:"🖼️"}),u.jsx(YE,{onClick:()=>v(!0),children:"☰"})]}),u.jsxs("div",{children:[u.jsx(LE,{children:Y.name}),u.jsxs(lm,{children:["MBTI: ",Y.mbti]}),u.jsx(lm,{children:Y.self_intro})]}),u.jsx(Es,{children:Y.tags&&Y.tags.filter(ne=>ne.type==="SELF").map(ne=>u.jsxs(Ts,{children:["#",ne.tag_name]},ne.tag_id))}),u.jsx(Es,{children:Y.hobbies?.filter(ne=>ne.type==="SELF").map(ne=>u.jsxs(Ts,{children:["#",ne.hobby_name]},ne.hobby_id))}),u.jsx("hr",{}),u.jsxs("div",{children:[Y.name,"이 원하는 상대방"]}),u.jsx(Es,{children:Y.desiredTags?.map(ne=>u.jsxs(Ts,{children:["#",ne.tag_name]},ne.tag_id))}),u.jsx(Es,{children:Y.desiredHobbies?.map(ne=>u.jsxs(Ts,{children:["#",ne.hobby_name]},ne.hobby_id))}),u.jsxs("p",{children:["MBTI: ",Y.desired_mbti]}),u.jsxs(UE,{children:[u.jsx(_s,{onClick:Q,children:"⬅️"}),u.jsx(_s,{onClick:te,children:F.has(Y.user_id)?"❤️":"🤍"}),u.jsx(_s,{onClick:oe,children:ue.has(Y.user_id)?"🚫":"❌"}),u.jsx(_s,{onClick:V,children:"➡️"})]}),H&&u.jsxs(om,{style:{color:"red"},children:["AutoML 에러: ",H]}),we!==null&&u.jsxs(om,{children:["이 유저와의 매칭 확률: ",Math.round(we*100),"%"]})]})},Y.user_id))})}),u.jsx(ia,{currentUser:c}),u.jsx(Qy,{isOpen:y,onClose:()=>v(!1),onSelectFilter:Y=>{A(Y),L(Y),se()}}),S&&u.jsx(VE,{onClick:()=>C(!1),children:u.jsx(XE,{onClick:Y=>Y.stopPropagation(),children:u.jsx(DE,{children:u.jsx(BE,{src:h[x]?.photo_url?h[x].photo_url.startsWith("http")?h[x].photo_url:`http://localhost:8080/uploads/${h[x].photo_url}`:kt,alt:`${h[x]?.name} 프로필`,draggable:!1})})})})]}):u.jsx("p",{children:"로그인 해주세요"})},FE=()=>{const[n,a]=w.useState(""),[i,l]=w.useState(!1),[c,d]=w.useState(""),[h,p]=w.useState(!1),{login:x}=At(),g=Ne(),y=T=>{const _=T.target.value;a(_),l(_.length>0)},v=T=>{const _=T.target.value;d(_),p(_.length>0)},S=i&&h,C=async()=>{try{await x(n,c)?g("/home"):alert("아이디 또는 비밀번호가 틀렸습니다.")}catch(T){console.error("로그인 실패:",T),alert("서버 오류가 발생했습니다.")}};return u.jsxs(KE,{children:[u.jsx(JE,{src:kt,alt:"MBTI Logo"}),u.jsx(ZE,{children:"로그인"}),u.jsx(sm,{type:"text",placeholder:"아이디를 입력하세요",onChange:y,value:n}),u.jsx(sm,{type:"password",placeholder:"비밀번호를 입력하세요",onChange:v,value:c}),u.jsx(IE,{disabled:!S,onClick:C,children:"로그인"})]})},KE=b.div`
    height: 100dvh;
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,ZE=b.h1`
    font-size: 32px;
    margin-bottom: 30px;
    color: #333;
`,sm=b.input`
    width: 300px;
    padding: 12px 15px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    transition: 0.3s;

    &:focus {
        border-color: #a6c1ee;
        box-shadow: 0 0 8px rgba(166, 193, 238, 0.5);
    }
`,JE=b.img`
    width: 200px;
    height: auto;
    margin-top: 10px;
`,IE=b.button`
    width: 320px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,WE=()=>{const[n,a]=w.useState(""),{user:i,logout:l}=At(),c=Ne(),d=async()=>{if(window.confirm("정말 로그아웃 하시겠습니까?"))try{await l(),c("/account01",{replace:!0})}catch(y){console.error(y.message)}else console.log("로그아웃 취소됨")},h=i?.photo_url?`http://localhost:8080/uploads/${i.photo_url}`:kt,p=async()=>{try{c("/AccountDelConfirm",{replace:!0})}catch(y){console.error(y.message)}},x={mbti:"나의 MBTI 수정하기",introduce:"나의 소개 수정하기",hobby:"나의 취미 수정하기",partner:"원하는 상대 정보 수정하기"},g={edit:"프로필 정보 수정",logout:"로그아웃",bye:"회원탈퇴"};return u.jsxs(eT,{children:[u.jsxs(tT,{children:[u.jsxs(nT,{children:[u.jsx(rT,{src:h,alt:"프로필 이미지",draggable:"false"}),u.jsxs(aT,{children:["이름: ",i.name]}),u.jsxs(iT,{children:["아이디: ",i.username]}),u.jsxs(oT,{children:[" MBTI: ",i.mbti]})]}),u.jsxs(lT,{children:[u.jsx(sT,{onClick:()=>c("/mypage/profile"),children:g.edit}),u.jsxs(cT,{children:[u.jsx(Cs,{onClick:()=>c("/mypage/mymbti"),children:x.mbti}),u.jsx(Cs,{onClick:()=>c("/mypage/myintro"),children:x.introduce}),u.jsx(Cs,{onClick:()=>c("/mypage/myhobby"),children:x.hobby}),u.jsx(Cs,{onClick:()=>c("/mypage/wantedinfor"),children:x.partner})]})]}),u.jsxs(uT,{children:[u.jsx(Zf,{onClick:d,children:g.logout}),i?.user_id===1?u.jsx(Zf,{onClick:()=>c("/report"),children:"신고 유저 조회"}):u.jsx(Zf,{onClick:p,children:g.bye})]})]}),u.jsx(ia,{})]})},eT=b.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 정가운데 */
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,tT=b.div`
  width: 100%;
  max-width: 300px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`,nT=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
`,rT=b.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(135deg, #fbc2eb, #a6c1ee);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-bottom: 10px;
`,aT=b.div`
  font-size: 16pt;
  color: #000000;
  font-weight: bold;
`,iT=b.div`
  font-size: 11pt;
  color: #000000;
`,oT=b.div`
  font-size: 15.5pt;
  color: #000000;
  font-weight: bold;
`,lT=b.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: 15px 0;
`,sT=b.button`
  padding: 8px 15px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 11pt;

  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`,cT=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Cs=b.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffffff55;
  background-color: #ffffff33;
  color: #fff;
  font-size: 11pt;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffffff66;
    transform: translateY(-2px);
  }
`,uT=b.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
`,Zf=b.button`
  flex: 1;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  background: #ff6b6bcc;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff6b6b;
    transform: scale(1.05);
  }
`,Zy=w.createContext(),Ot=()=>w.useContext(Zy),Jy=({children:n})=>{const[a,i]=w.useState({id:"",passWord:"",location:"",name:"",mbti:{EI:"",SN:"",TF:"",JP:""},birth_date:Date,age:"",introTags:[],hobby:[],introduce:"",year:"",month:"",day:"",profile:{file:null,preview:""},de_mbti:"",de_introTags:[],de_hobby:[]}),[l,c]=w.useState(!1);return u.jsx(Zy.Provider,{value:{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c},children:n})},Jf=({options:n,value:a,onChange:i})=>{const l=w.useRef(null);return w.useEffect(()=>{const c=l.current,d=h=>{h.preventDefault();const p=Array.from(c.children).filter(v=>v.tagName==="LI");let g=p.findIndex(v=>v.innerText===a)+(h.deltaY>0?1:-1);g=Math.max(1,Math.min(p.length-2,g));const y=p[g].innerText;y&&(i(y),p[g].scrollIntoView({behavior:"smooth",block:"center"}))};return c.addEventListener("wheel",d,{passive:!1}),()=>c.removeEventListener("wheel",d)},[a,i]),u.jsxs(fT,{children:[u.jsxs("ul",{ref:l,children:[u.jsx("li",{style:{height:"50px"}})," ",n.map(c=>u.jsx("li",{className:c===a?"active":"",children:c},c)),u.jsx("li",{style:{height:"50px"}})," "]}),u.jsx("div",{className:"highlight"})]})},fT=b.div`
  position: relative;
  height: 150px;
  width: 80px;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  li {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    color: #999;
    font-size: 18px;
  }

  li.active {
    color: black;
    font-weight: bold;
    font-size: 22px;
  }

  .highlight {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 50px;
    margin-top: -25px;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    pointer-events: none;
  }
`,dT=()=>{const[n,a]=w.useState(""),[i,l]=w.useState(""),[c,d]=w.useState(""),[h,p]=w.useState(""),[x,g]=w.useState(!1),y=Ne(),{formData:v,setFormData:S}=Ot(),C=new Date().getFullYear(),T=C-20,_=C-80,R=Array.from({length:T-_+1},(L,E)=>String(T-E)),A=Array.from({length:12},(L,E)=>String(E+1)),N=Array.from({length:31},(L,E)=>String(E+1)),[z,P]=w.useState(String(T)),[$,F]=w.useState("1"),[Z,ue]=w.useState("1"),[I,le]=w.useState("남"),ie=(L,E,O)=>{const Q=new Date,V=new Date(L,E-1,O);let te=Q.getFullYear()-V.getFullYear();const oe=Q.getMonth()-V.getMonth(),Y=Q.getDate()-V.getDate();return(oe<0||oe===0&&Y<0)&&te--,te},ce=async()=>{if(!n){alert("아이디를 입력해주세요!");return}try{(await he.get("http://localhost:8080/api/users/exists",{params:{username:n}})).data.exists?(alert("이미 사용 중인 아이디입니다."),g(!1)):(alert("사용 가능한 아이디입니다!"),g(!0))}catch(L){console.error("중복 체크 오류:",L),alert("서버와 통신 중 문제가 발생했습니다.")}},je=()=>i!==c?(alert("비밀번호가 다릅니다."),!1):!0,we=()=>!n||!i||!h?(alert("빈칸이 있어요!"),!1):!0,ge=L=>{const E=L.target.value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/g,"");a(E)},H=L=>{const E=L.target.value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/g,"");l(E)},ee=L=>{const E=L.target.value.replace(/[^A-Za-z0-9!@#$%^&*()\-=+\[\]{};:'",.<>/?\\|`~]/g,"");d(E)},se=()=>{if(we()&&je()){if(!x){alert("아이디 중복 체크를 먼저 해주세요");return}y("/region")}};return u.jsxs(hT,{children:[u.jsxs(bi,{children:[u.jsx(pT,{children:u.jsx(xT,{src:kt,alt:"MBTI Logo"})}),u.jsx(gT,{children:"회원가입"})]}),u.jsx(bi,{children:u.jsxs(Ho,{children:[u.jsx("h2",{children:"아이디 입력"}),u.jsx(Rs,{type:"text",value:n,onChange:ge,placeholder:"영문, 특수문자, 숫자만 입력 가능합니다"}),u.jsx(mT,{onClick:ce,children:"중복체크"})]})}),u.jsxs(bi,{children:[u.jsxs(Ho,{children:[u.jsx("h2",{children:"비밀번호 입력"}),u.jsx(Rs,{type:"text",value:i,onChange:H,placeholder:"영문, 특수문자, 숫자만 입력 가능합니다"})]}),u.jsxs(Ho,{children:[u.jsx("h2",{children:"비밀번호 재입력"}),u.jsx(Rs,{type:"password",value:c,onChange:ee,placeholder:"비밀번호를 다시한번 입력해주세요"})]})]}),u.jsx(bi,{children:u.jsxs(Ho,{children:[u.jsx("h2",{children:"이름 입력"}),u.jsx(Rs,{type:"text",value:h,onChange:L=>p(L.target.value),placeholder:"이름을 입력해주세요"})]})}),u.jsx(bi,{children:u.jsxs(Ho,{children:[u.jsx("h2",{children:"생년월일"}),u.jsxs(yT,{children:[u.jsx(Jf,{options:R,value:z,onChange:P}),u.jsx(Jf,{options:A,value:$,onChange:F}),u.jsx(Jf,{options:N,value:Z,onChange:ue})]}),u.jsxs("div",{children:[u.jsx("h2",{style:{marginTop:"30px"},children:"성별"}),u.jsxs(vT,{children:[u.jsxs(um,{children:[u.jsx("input",{type:"radio",name:"gender",value:"M",checked:I==="M",onChange:L=>le(L.target.value)}),u.jsx("span",{children:"남"})]}),u.jsxs(um,{children:[u.jsx("input",{type:"radio",name:"gender",value:"F",checked:I==="F",onChange:L=>le(L.target.value)}),u.jsx("span",{children:"여"})]})]})]})]})}),u.jsx(bi,{children:u.jsx(cm,{children:u.jsx(bT,{onClick:()=>{const L=ie(z,$,Z);S(E=>({...E,name:h,age:L,gender:I,year:z,month:$,day:Z,id:n,passWord:i})),se()},children:"다음으로"})})}),u.jsx(cm,{})]})},bi=b.div`
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`,hT=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  font-size: 10pt;
  justify-content: center; /* 세로 중앙 */
  align-items: center; /* 가로 중앙 */
`,pT=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`,gT=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 30px;
  color: #000000;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`,cm=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`,xT=b.img`
  width: 200px;
  height: auto;
`,Ho=b.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`,mT=b.button`
  margin: 15px auto 20px auto; /* 좌우 margin auto */
  display: block; /* block 요소여야 auto가 적용됨 */
  width: 220px;
  height: 50px; /* 높이 지정해서 버튼 크기 통일 */
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.3s ease;

  /* 텍스트 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,bT=b.button`
  width: 220px;
  height: 50px; /* 높이 지정해서 버튼 크기 통일 */
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.3s ease;

  /* 텍스트 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,Rs=b.input`
  width: 320px;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #a6c1ee;
    box-shadow: 0 0 8px rgba(166, 193, 238, 0.5);
  }
`,yT=b.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`,vT=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`,um=b.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid #a6c1ee;
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: black;
  transition: all 0.2s;

  input {
    display: none;
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
  }

  input:checked + span {
    background-color: #a6c1ee;
    color: white;
  }

  &:hover span {
    background-color: #d0b9f5;
  }
`;var If={exports:{}},fm;function wT(){return fm||(fm=1,(function(n){var a=(function(i){var l=Object.prototype,c=l.hasOwnProperty,d=Object.defineProperty||function(L,E,O){L[E]=O.value},h,p=typeof Symbol=="function"?Symbol:{},x=p.iterator||"@@iterator",g=p.asyncIterator||"@@asyncIterator",y=p.toStringTag||"@@toStringTag";function v(L,E,O){return Object.defineProperty(L,E,{value:O,enumerable:!0,configurable:!0,writable:!0}),L[E]}try{v({},"")}catch{v=function(E,O,Q){return E[O]=Q}}function S(L,E,O,Q){var V=E&&E.prototype instanceof z?E:z,te=Object.create(V.prototype),oe=new H(Q||[]);return d(te,"_invoke",{value:ce(L,O,oe)}),te}i.wrap=S;function C(L,E,O){try{return{type:"normal",arg:L.call(E,O)}}catch(Q){return{type:"throw",arg:Q}}}var T="suspendedStart",_="suspendedYield",R="executing",A="completed",N={};function z(){}function P(){}function $(){}var F={};v(F,x,function(){return this});var Z=Object.getPrototypeOf,ue=Z&&Z(Z(ee([])));ue&&ue!==l&&c.call(ue,x)&&(F=ue);var I=$.prototype=z.prototype=Object.create(F);P.prototype=$,d(I,"constructor",{value:$,configurable:!0}),d($,"constructor",{value:P,configurable:!0}),P.displayName=v($,y,"GeneratorFunction");function le(L){["next","throw","return"].forEach(function(E){v(L,E,function(O){return this._invoke(E,O)})})}i.isGeneratorFunction=function(L){var E=typeof L=="function"&&L.constructor;return E?E===P||(E.displayName||E.name)==="GeneratorFunction":!1},i.mark=function(L){return Object.setPrototypeOf?Object.setPrototypeOf(L,$):(L.__proto__=$,v(L,y,"GeneratorFunction")),L.prototype=Object.create(I),L},i.awrap=function(L){return{__await:L}};function ie(L,E){function O(te,oe,Y,ne){var ae=C(L[te],L,oe);if(ae.type==="throw")ne(ae.arg);else{var re=ae.arg,fe=re.value;return fe&&typeof fe=="object"&&c.call(fe,"__await")?E.resolve(fe.__await).then(function(xe){O("next",xe,Y,ne)},function(xe){O("throw",xe,Y,ne)}):E.resolve(fe).then(function(xe){re.value=xe,Y(re)},function(xe){return O("throw",xe,Y,ne)})}}var Q;function V(te,oe){function Y(){return new E(function(ne,ae){O(te,oe,ne,ae)})}return Q=Q?Q.then(Y,Y):Y()}d(this,"_invoke",{value:V})}le(ie.prototype),v(ie.prototype,g,function(){return this}),i.AsyncIterator=ie,i.async=function(L,E,O,Q,V){V===void 0&&(V=Promise);var te=new ie(S(L,E,O,Q),V);return i.isGeneratorFunction(E)?te:te.next().then(function(oe){return oe.done?oe.value:te.next()})};function ce(L,E,O){var Q=T;return function(te,oe){if(Q===R)throw new Error("Generator is already running");if(Q===A){if(te==="throw")throw oe;return se()}for(O.method=te,O.arg=oe;;){var Y=O.delegate;if(Y){var ne=je(Y,O);if(ne){if(ne===N)continue;return ne}}if(O.method==="next")O.sent=O._sent=O.arg;else if(O.method==="throw"){if(Q===T)throw Q=A,O.arg;O.dispatchException(O.arg)}else O.method==="return"&&O.abrupt("return",O.arg);Q=R;var ae=C(L,E,O);if(ae.type==="normal"){if(Q=O.done?A:_,ae.arg===N)continue;return{value:ae.arg,done:O.done}}else ae.type==="throw"&&(Q=A,O.method="throw",O.arg=ae.arg)}}}function je(L,E){var O=E.method,Q=L.iterator[O];if(Q===h)return E.delegate=null,O==="throw"&&L.iterator.return&&(E.method="return",E.arg=h,je(L,E),E.method==="throw")||O!=="return"&&(E.method="throw",E.arg=new TypeError("The iterator does not provide a '"+O+"' method")),N;var V=C(Q,L.iterator,E.arg);if(V.type==="throw")return E.method="throw",E.arg=V.arg,E.delegate=null,N;var te=V.arg;if(!te)return E.method="throw",E.arg=new TypeError("iterator result is not an object"),E.delegate=null,N;if(te.done)E[L.resultName]=te.value,E.next=L.nextLoc,E.method!=="return"&&(E.method="next",E.arg=h);else return te;return E.delegate=null,N}le(I),v(I,y,"Generator"),v(I,x,function(){return this}),v(I,"toString",function(){return"[object Generator]"});function we(L){var E={tryLoc:L[0]};1 in L&&(E.catchLoc=L[1]),2 in L&&(E.finallyLoc=L[2],E.afterLoc=L[3]),this.tryEntries.push(E)}function ge(L){var E=L.completion||{};E.type="normal",delete E.arg,L.completion=E}function H(L){this.tryEntries=[{tryLoc:"root"}],L.forEach(we,this),this.reset(!0)}i.keys=function(L){var E=Object(L),O=[];for(var Q in E)O.push(Q);return O.reverse(),function V(){for(;O.length;){var te=O.pop();if(te in E)return V.value=te,V.done=!1,V}return V.done=!0,V}};function ee(L){if(L){var E=L[x];if(E)return E.call(L);if(typeof L.next=="function")return L;if(!isNaN(L.length)){var O=-1,Q=function V(){for(;++O<L.length;)if(c.call(L,O))return V.value=L[O],V.done=!1,V;return V.value=h,V.done=!0,V};return Q.next=Q}}return{next:se}}i.values=ee;function se(){return{value:h,done:!0}}return H.prototype={constructor:H,reset:function(L){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(ge),!L)for(var E in this)E.charAt(0)==="t"&&c.call(this,E)&&!isNaN(+E.slice(1))&&(this[E]=h)},stop:function(){this.done=!0;var L=this.tryEntries[0],E=L.completion;if(E.type==="throw")throw E.arg;return this.rval},dispatchException:function(L){if(this.done)throw L;var E=this;function O(ne,ae){return te.type="throw",te.arg=L,E.next=ne,ae&&(E.method="next",E.arg=h),!!ae}for(var Q=this.tryEntries.length-1;Q>=0;--Q){var V=this.tryEntries[Q],te=V.completion;if(V.tryLoc==="root")return O("end");if(V.tryLoc<=this.prev){var oe=c.call(V,"catchLoc"),Y=c.call(V,"finallyLoc");if(oe&&Y){if(this.prev<V.catchLoc)return O(V.catchLoc,!0);if(this.prev<V.finallyLoc)return O(V.finallyLoc)}else if(oe){if(this.prev<V.catchLoc)return O(V.catchLoc,!0)}else if(Y){if(this.prev<V.finallyLoc)return O(V.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(L,E){for(var O=this.tryEntries.length-1;O>=0;--O){var Q=this.tryEntries[O];if(Q.tryLoc<=this.prev&&c.call(Q,"finallyLoc")&&this.prev<Q.finallyLoc){var V=Q;break}}V&&(L==="break"||L==="continue")&&V.tryLoc<=E&&E<=V.finallyLoc&&(V=null);var te=V?V.completion:{};return te.type=L,te.arg=E,V?(this.method="next",this.next=V.finallyLoc,N):this.complete(te)},complete:function(L,E){if(L.type==="throw")throw L.arg;return L.type==="break"||L.type==="continue"?this.next=L.arg:L.type==="return"?(this.rval=this.arg=L.arg,this.method="return",this.next="end"):L.type==="normal"&&E&&(this.next=E),N},finish:function(L){for(var E=this.tryEntries.length-1;E>=0;--E){var O=this.tryEntries[E];if(O.finallyLoc===L)return this.complete(O.completion,O.afterLoc),ge(O),N}},catch:function(L){for(var E=this.tryEntries.length-1;E>=0;--E){var O=this.tryEntries[E];if(O.tryLoc===L){var Q=O.completion;if(Q.type==="throw"){var V=Q.arg;ge(O)}return V}}throw new Error("illegal catch attempt")},delegateYield:function(L,E,O){return this.delegate={iterator:ee(L),resultName:E,nextLoc:O},this.method==="next"&&(this.arg=h),N}},i})(n.exports);try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}})(If)),If.exports}var Wf,dm;function wh(){return dm||(dm=1,Wf=(n,a)=>`${n}-${a}-${Math.random().toString(16).slice(3,8)}`),Wf}var ed,hm;function Iy(){if(hm)return ed;hm=1;const n=wh();let a=0;return ed=({id:i,action:l,payload:c={}})=>{let d=i;return typeof d>"u"&&(d=n("Job",a),a+=1),{id:d,action:l,payload:c}},ed}var qo={},pm;function Sh(){if(pm)return qo;pm=1;let n=!1;return qo.logging=n,qo.setLogging=a=>{n=a},qo.log=(...a)=>n?console.log.apply(this,a):null,qo}var td,gm;function ST(){if(gm)return td;gm=1;const n=Iy(),{log:a}=Sh(),i=wh();let l=0;return td=()=>{const c=i("Scheduler",l),d={},h={};let p=[];l+=1;const x=()=>p.length,g=()=>Object.keys(d).length,y=()=>{if(p.length!==0){const _=Object.keys(d);for(let R=0;R<_.length;R+=1)if(typeof h[_[R]]>"u"){p[0](d[_[R]]);break}}},v=(_,R)=>new Promise((A,N)=>{const z=n({action:_,payload:R});p.push(async P=>{p.shift(),h[P.id]=z;try{A(await P[_].apply(this,[...R,z.id]))}catch($){N($)}finally{delete h[P.id],y()}}),a(`[${c}]: Add ${z.id} to JobQueue`),a(`[${c}]: JobQueue length=${p.length}`),y()});return{addWorker:_=>(d[_.id]=_,a(`[${c}]: Add ${_.id}`),a(`[${c}]: Number of workers=${g()}`),y(),_.id),addJob:async(_,...R)=>{if(g()===0)throw Error(`[${c}]: You need to have at least one worker before adding jobs`);return v(_,R)},terminate:async()=>{Object.keys(d).forEach(async _=>{await d[_].terminate()}),p=[]},getQueueLen:x,getNumWorkers:g}},td}function jT(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var nd,xm;function ET(){return xm||(xm=1,nd=n=>{const a={};return typeof WorkerGlobalScope<"u"?a.type="webworker":typeof document=="object"?a.type="browser":typeof process=="object"&&typeof jT=="function"&&(a.type="node"),typeof n>"u"?a:a[n]}),nd}var rd,mm;function TT(){if(mm)return rd;mm=1;const a=ET()("type")==="browser"?i=>new URL(i,window.location.href).href:i=>i;return rd=i=>{const l={...i};return["corePath","workerPath","langPath"].forEach(c=>{i[c]&&(l[c]=a(l[c]))}),l},rd}var ad,bm;function Wy(){return bm||(bm=1,ad={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}),ad}const _T="6.0.1",CT={version:_T};var id,ym;function RT(){return ym||(ym=1,id={workerBlobURL:!0,logger:()=>{}}),id}var od,vm;function kT(){if(vm)return od;vm=1;const n=CT.version;return od={...RT(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`},od}var ld,wm;function AT(){return wm||(wm=1,ld=({workerPath:n,workerBlobURL:a})=>{let i;if(Blob&&URL&&a){const l=new Blob([`importScripts("${n}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(l))}else i=new Worker(n);return i}),ld}var sd,Sm;function OT(){return Sm||(Sm=1,sd=n=>{n.terminate()}),sd}var cd,jm;function MT(){return jm||(jm=1,cd=(n,a)=>{n.onmessage=({data:i})=>{a(i)}}),cd}var ud,Em;function NT(){return Em||(Em=1,ud=async(n,a)=>{n.postMessage(a)}),ud}var fd,Tm;function zT(){if(Tm)return fd;Tm=1;const n=i=>new Promise((l,c)=>{const d=new FileReader;d.onload=()=>{l(d.result)},d.onerror=({target:{error:{code:h}}})=>{c(Error(`File could not be read! Code=${h}`))},d.readAsArrayBuffer(i)}),a=async i=>{let l=i;if(typeof i>"u")return"undefined";if(typeof i=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(i)?l=atob(i.split(",")[1]).split("").map(c=>c.charCodeAt(0)):l=await(await fetch(i)).arrayBuffer();else if(typeof HTMLElement<"u"&&i instanceof HTMLElement)i.tagName==="IMG"&&(l=await a(i.src)),i.tagName==="VIDEO"&&(l=await a(i.poster)),i.tagName==="CANVAS"&&await new Promise(c=>{i.toBlob(async d=>{l=await n(d),c()})});else if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){const c=await i.convertToBlob();l=await n(c)}else(i instanceof File||i instanceof Blob)&&(l=await n(i));return new Uint8Array(l)};return fd=a,fd}var dd,_m;function DT(){if(_m)return dd;_m=1;const n=kT(),a=AT(),i=OT(),l=MT(),c=NT(),d=zT();return dd={defaultOptions:n,spawnWorker:a,terminateWorker:i,onMessage:l,send:c,loadImage:d},dd}var hd,Cm;function e1(){if(Cm)return hd;Cm=1;const n=TT(),a=Iy(),{log:i}=Sh(),l=wh(),c=Wy(),{defaultOptions:d,spawnWorker:h,terminateWorker:p,onMessage:x,loadImage:g,send:y}=DT();let v=0;return hd=async(S="eng",C=c.LSTM_ONLY,T={},_={})=>{const R=l("Worker",v),{logger:A,errorHandler:N,...z}=n({...d,...T}),P={},$=typeof S=="string"?S.split("+"):S;let F=C,Z=_;const ue=[c.DEFAULT,c.LSTM_ONLY].includes(C)&&!z.legacyCore;let I,le;const ie=new Promise((re,fe)=>{le=re,I=fe}),ce=re=>{I(re.message)};let je=h(z);je.onerror=ce,v+=1;const we=({id:re,action:fe,payload:xe})=>new Promise((Ee,Ze)=>{i(`[${R}]: Start ${re}, action=${fe}`);const Qe=`${fe}-${re}`;P[Qe]={resolve:Ee,reject:Ze},y(je,{workerId:R,jobId:re,action:fe,payload:xe})}),ge=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),H=re=>we(a({id:re,action:"load",payload:{options:{lstmOnly:ue,corePath:z.corePath,logging:z.logging}}})),ee=(re,fe,xe)=>we(a({id:xe,action:"FS",payload:{method:"writeFile",args:[re,fe]}})),se=(re,fe)=>we(a({id:fe,action:"FS",payload:{method:"readFile",args:[re,{encoding:"utf8"}]}})),L=(re,fe)=>we(a({id:fe,action:"FS",payload:{method:"unlink",args:[re]}})),E=(re,fe,xe)=>we(a({id:xe,action:"FS",payload:{method:re,args:fe}})),O=(re,fe)=>we(a({id:fe,action:"loadLanguage",payload:{langs:re,options:{langPath:z.langPath,dataPath:z.dataPath,cachePath:z.cachePath,cacheMethod:z.cacheMethod,gzip:z.gzip,lstmOnly:[c.DEFAULT,c.LSTM_ONLY].includes(F)&&!z.legacyLang}}})),Q=(re,fe,xe,Ee)=>we(a({id:Ee,action:"initialize",payload:{langs:re,oem:fe,config:xe}})),V=(re="eng",fe,xe,Ee)=>{if(ue&&[c.TESSERACT_ONLY,c.TESSERACT_LSTM_COMBINED].includes(fe))throw Error("Legacy model requested but code missing.");const Ze=fe||F;F=Ze;const Qe=xe||Z;Z=Qe;const Lt=(typeof re=="string"?re.split("+"):re).filter(ot=>!$.includes(ot));return $.push(...Lt),Lt.length>0?O(Lt,Ee).then(()=>Q(re,Ze,Qe,Ee)):Q(re,Ze,Qe,Ee)},te=(re={},fe)=>we(a({id:fe,action:"setParameters",payload:{params:re}})),oe=async(re,fe={},xe={text:!0},Ee)=>we(a({id:Ee,action:"recognize",payload:{image:await g(re),options:fe,output:xe}})),Y=async(re,fe)=>{if(ue)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return we(a({id:fe,action:"detect",payload:{image:await g(re)}}))},ne=async()=>(je!==null&&(p(je),je=null),Promise.resolve());x(je,({workerId:re,jobId:fe,status:xe,action:Ee,data:Ze})=>{const Qe=`${Ee}-${fe}`;if(xe==="resolve")i(`[${re}]: Complete ${fe}`),P[Qe].resolve({jobId:fe,data:Ze}),delete P[Qe];else if(xe==="reject")if(P[Qe].reject(Ze),delete P[Qe],Ee==="load"&&I(Ze),N)N(Ze);else throw Error(Ze);else xe==="progress"&&A({...Ze,userJobId:fe})});const ae={id:R,worker:je,load:ge,writeText:ee,readText:se,removeFile:L,FS:E,reinitialize:V,setParameters:te,recognize:oe,detect:Y,terminate:ne};return H().then(()=>O(S)).then(()=>Q(S,C,_)).then(()=>le(ae)).catch(()=>{}),ie},hd}var pd,Rm;function BT(){if(Rm)return pd;Rm=1;const n=e1();return pd={recognize:async(l,c,d)=>{const h=await n(c,1,d);return h.recognize(l).finally(async()=>{await h.terminate()})},detect:async(l,c)=>{const d=await n("osd",0,c);return d.detect(l).finally(async()=>{await d.terminate()})}},pd}var gd,km;function LT(){return km||(km=1,gd={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}),gd}var xd,Am;function UT(){return Am||(Am=1,xd={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}),xd}var md,Om;function $T(){if(Om)return md;Om=1,wT();const n=ST(),a=e1(),i=BT(),l=LT(),c=Wy(),d=UT(),{setLogging:h}=Sh();return md={languages:l,OEM:c,PSM:d,createScheduler:n,createWorker:a,setLogging:h,...i},md}var HT=$T();const qT=ac(HT),YT=({setMbti:n})=>{const[a,i]=w.useState(""),[l,c]=w.useState(!1),[d,h]=w.useState(null),p=y=>new Promise(v=>{const S=new Image;S.src=URL.createObjectURL(y),S.onload=()=>{const C=document.createElement("canvas"),T=C.getContext("2d");C.width=S.width*2,C.height=S.height*2,T.drawImage(S,0,0,C.width,C.height);const _=T.getImageData(0,0,C.width,C.height),R=_.data;for(let A=0;A<R.length;A+=4){const z=(R[A]+R[A+1]+R[A+2])/3>128?255:0;R[A]=R[A+1]=R[A+2]=z}T.putImageData(_,0,0),C.toBlob(A=>v(A),"image/png")}}),x=async y=>{const v=y.target.files[0];if(v){h(URL.createObjectURL(v)),c(!0);try{const S=await p(v),{data:{text:C}}=await qT.recognize(S,"eng",{tessedit_char_whitelist:"ABCDEFGHIJKLMNOPQRSTUVWXYZ-"}),_=C.replace(/-?[AT]\b/gi,"").toUpperCase().match(/\b[EI][NS][FT][JP]\b/gi),R=_?_[0]:null;i(R||"결과를 찾을 수 없음"),R&&n&&n(R)}catch(S){console.error(S),i("OCR 실패")}finally{c(!1)}}},g=()=>{h(null),i("")};return u.jsxs(GT,{children:[u.jsx(VT,{children:"사진으로 MBTI 추출하기"}),u.jsx(XT,{children:d?u.jsxs(QT,{children:[u.jsx("img",{src:d,alt:"preview"}),u.jsx(FT,{onClick:g,children:"X"})]}):u.jsxs(PT,{children:[u.jsx("input",{type:"file",accept:"image/*",onChange:x}),"클릭 또는 드래그하여 사진 업로드"]})}),l&&u.jsx(KT,{children:"분석 중..."}),a&&u.jsxs(ZT,{children:["MBTI 결과: ",a]})]})},GT=b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background: transparent;
`,VT=b.h2`
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
`,XT=b.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`,PT=b.label`
    width: 250px;
    height: 250px;
    border: 2px dashed #aaa;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    font-weight: bold;
    color: #555;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.1),
        -6px -6px 15px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;

    input {
        display: none;
    }

    &:hover {
        border-color: #888;
        background: rgba(255, 255, 255, 0.3);
    }
`,QT=b.div`
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.1),
        -6px -6px 15px rgba(255, 255, 255, 0.3);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,FT=b.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255, 0, 0, 0.7);
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: rgba(255, 0, 0, 0.9);
    }
`,KT=b.p`
    margin-top: 10px;
    font-size: 16px;
    color: #666;
`,ZT=b.p`
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #222;
`,JT=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),d=(y,v)=>{i(S=>({...S,mbti:{...S.mbti,[y]:S.mbti[y]===v?"":v}}))},h=()=>{l?(c(!1),n("/summary")):n("/intro")},p=()=>{window.open("https://www.16personalities.com/ko","_blank")},x=y=>{if(!y||y.length!==4)return;const[v,S,C,T]=y.toUpperCase().split("");i(_=>({..._,mbti:{EI:v,SN:S,TF:C,JP:T}}))},g=a.mbti.EI&&a.mbti.SN&&a.mbti.TF&&a.mbti.JP;return u.jsxs(t3,{children:[u.jsxs("div",{children:[u.jsx(e3,{children:"MBTI를 입력하세요"}),u.jsxs(ks,{children:[u.jsx(Wr,{selected:a.mbti.EI==="E",onClick:()=>d("EI","E"),children:"E"}),u.jsx(Wr,{selected:a.mbti.EI==="I",onClick:()=>d("EI","I"),children:"I"})]}),u.jsxs(ks,{children:[u.jsx(Wr,{selected:a.mbti.SN==="S",onClick:()=>d("SN","S"),children:"S"}),u.jsx(Wr,{selected:a.mbti.SN==="N",onClick:()=>d("SN","N"),children:"N"})]}),u.jsxs(ks,{children:[u.jsx(Wr,{selected:a.mbti.TF==="T",onClick:()=>d("TF","T"),children:"T"}),u.jsx(Wr,{selected:a.mbti.TF==="F",onClick:()=>d("TF","F"),children:"F"})]}),u.jsxs(ks,{children:[u.jsx(Wr,{selected:a.mbti.JP==="J",onClick:()=>d("JP","J"),children:"J"}),u.jsx(Wr,{selected:a.mbti.JP==="P",onClick:()=>d("JP","P"),children:"P"})]})]}),u.jsxs(As,{children:[u.jsx("hr",{}),u.jsx("div",{children:"당신의 MBTI"}),u.jsx("hr",{})]}),u.jsxs(WT,{children:[u.jsx(IT,{type:"text",value:`${a.mbti.EI}${a.mbti.SN}${a.mbti.TF}${a.mbti.JP}`,readOnly:!0}),u.jsx("button",{disabled:!g,onClick:h,children:"다음으로"})]}),u.jsxs(As,{children:[u.jsx("hr",{}),u.jsx("div",{children:"MBTI를 모르시나요?"}),u.jsx("hr",{})]}),u.jsx("div",{style:{marginBottom:"10px",padding:"0 20px",textAlign:"center"},children:"계속을 클릭하면 당사의 서비스 이용 약관 및 개인정보 처리방침에 동의하는 것으로 간주됩니다."}),u.jsxs(As,{children:[u.jsx(Mm,{onClick:()=>n("/easymbti1"),children:"간단한 MBTI 검사"}),u.jsx(Mm,{onClick:p,children:"실제 MBTI 검사"})]}),u.jsx(As,{}),u.jsx(n3,{children:u.jsx(YT,{setMbti:x})})]})},Mm=b.button`
    width: 160px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;
`,IT=b.input`
    text-align: center;
    width: 100px;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 20px;
    margin-right: 10px;
`,WT=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    input,
    button {
        height: 50px;
        font-size: 18px;
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0 15px;
        box-sizing: border-box;
    }

    button {
        margin-left: 10px;
        cursor: pointer;
        background-color: #a6c1ee;
        color: white;
        transition: background-color 0.3s;
        &:hover {
            background-color: #6b90d9;
        }
        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`,e3=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px;
    font-size: 25px;
    font-weight: bold;
`,ks=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Wr=b.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${n=>n.selected?"#a6c1ee":"#f0f0f0"};
    color: ${n=>n.selected?"white":"black"};

    &:hover {
        background-color: ${n=>n.selected?"#a6c1ee":"#e0e0e0"};
    }
`,As=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    hr {
        flex: 1;
        border: none;
        border-bottom: 1px solid #ccc;
    }

    span {
        margin: 0 10px;
        color: #555;
    }
`,t3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 10pt;
    padding-top: 20px;
`,n3=b.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;b.label`
    width: 220px;
    height: 220px;
    border: 2px dashed #aaa;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    background-color: #f9f9f9;
    font-weight: bold;
    color: #555;
    transition: all 0.3s ease;

    input {
        display: none;
    }

    &:hover {
        border-color: #888;
        background-color: #f0f0f0;
    }
`;const t1=60,r3=5,a3=t1*r3,Nm=["ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP","ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ"],i3=()=>{const n=Ne(),{formData:a,setFormData:i}=Ot(),[l,c]=w.useState(null),d=()=>{if(l===null){alert("MBTI를 선택해주세요");return}i(h=>({...h,de_mbti:Nm[l]})),n("/wantedintro")};return u.jsxs(o3,{children:[u.jsx(zm,{children:"원하는 상대방의"}),u.jsx(zm,{children:"MBTI를 선택해주세요!"}),u.jsx(l3,{}),u.jsx(s3,{children:Nm.map((h,p)=>u.jsx(c3,{active:p===l,onClick:()=>c(p),children:h},h))}),u.jsx(u3,{onClick:d,children:"다음으로"})]})},o3=b.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,zm=b.h1`
    margin-bottom: 0px;
    color: #333;
    font-size: 20px;
`,l3=b.h1`
    margin-bottom: 10px;
    color: #333;
    font-size: 20px;
`,s3=b.div`
    width: 160px;
    height: ${a3}px;
    overflow-y: auto;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,c3=b.div`
    height: ${t1}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${({active:n})=>n?`
    transform: scale(1.1);
    font-size: 1.25rem;
    color: #fff;
    background-color: #a6c1ee;
    box-shadow: 0 4px 12px rgba(166, 193, 238, 0.6);
  `:`
    color: #333;
    background-color: transparent;
    transform: scale(1);
    font-size: 1rem;

    &:hover {
      background-color: rgba(166,193,238,0.2);
    }
  `}
`;b.div`
    margin-top: 14px;
    font-size: 16px;
    color: #333;
`;const u3=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,f3=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),d=["#활발한","#차분한","#진지한","#유머러스한","#논리적인","#즉흥적인","#내향적인","#외향적인","#열정적인"],h=["#감정적인","#솔직한","#애교많은","#쿨한","#신중한","#허세없는","#다정한","#따뜻한","#센스있는"],p=["#엉뚱한","#창의적인","#독립적인","#낙천적인","#분석적인","#모험적인","#츤데레","#얀데레","#자유로운"],[x,g]=w.useState([]),[y]=w.useState("DESIRED"),v=C=>{if(x.includes(C)){const T=x.filter(_=>_!==C);g(T),i({...a,de_introTags:T})}else if(x.length<6){const T=[...x,C];g(T),i({...a,de_introTags:T})}else alert("최대 6개까지만 선택할 수 있어요!")},S=()=>{if(x.length===0){alert("하나 이상의 태그를 선택하셔야 합니다.");return}l?(c(!1),n("/summary")):n("/wantedhobby")};return u.jsxs(d3,{children:[u.jsx(h3,{children:"당신이 원하는 상대는?"}),u.jsx(p3,{children:"최대 6개 선택 가능합니다."}),u.jsx(bd,{children:"---------- 성격 · 태도 ----------"}),u.jsx(yd,{children:d.map(C=>u.jsx(vd,{onClick:()=>v(C),selected:x.includes(C),children:C},C))}),u.jsx(bd,{children:"---------- 감정 · 표현 ----------"}),u.jsx(yd,{children:h.map(C=>u.jsx(vd,{onClick:()=>v(C),selected:x.includes(C),children:C},C))}),u.jsx(bd,{children:"---------- 독특한 매력 ----------"}),u.jsx(yd,{children:p.map(C=>u.jsx(vd,{onClick:()=>v(C),selected:x.includes(C),children:C},C))}),u.jsx(g3,{onClick:S,children:"다음"})]})},d3=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,h3=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,p3=b.div`
    font-size: 15px;
    margin-bottom: 0px;
`,bd=b.div`
    font-size: 18px;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444;
`,yd=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
`,vd=b.button`
    padding: 10px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
`;const g3=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,x3=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),d=["#등산","#여행","#자전거","#러닝","#댄스","#수영","#헬스","#볼링","#스포츠관람","#캠핑","#서핑","#클라이밍","#농구","#축구","#방탈출"],h=["#영화보기","#드라마","#넷플릭스","#유튜브","#독서","#요리하기","#베이킹","#악기연주","#사진찍기","#보드게임","#명상","#그림그리기","#수다","#멍때리기","#산책하기"],[p,x]=w.useState([]),[g]=w.useState("DESIRED"),y=S=>{if(p.includes(S)){const C=p.filter(T=>T!==S);x(C),i({...a,de_hobby:C})}else if(p.length<6){const C=[...p,S];x(C),i({...a,de_hobby:C})}else alert("최대 6개까지만 선택할 수 있어요!")},v=()=>{if((p.length||[]).length===0){alert("하나 이상의 태그를 선택하셔야 합니다.");return}l?(c(!1),n("/summary")):n("/introduce")};return u.jsxs(m3,{children:[u.jsx(b3,{children:"상대의 이런 취미를 원해요!"}),u.jsx(y3,{children:"최대 6개 선택 가능합니다."}),u.jsxs(Dm,{children:[u.jsx(Bm,{children:"🌟 밖에서 즐기는"}),u.jsx(Lm,{children:d.map(S=>u.jsx(Um,{onClick:()=>y(S),selected:p.includes(S),children:S},S))})]}),u.jsxs(Dm,{children:[u.jsx(Bm,{children:"🏡 집에서 즐기는"}),u.jsx(Lm,{children:h.map(S=>u.jsx(Um,{onClick:()=>y(S),selected:p.includes(S),children:S},S))})]}),u.jsx(v3,{onClick:v,children:"다음"})]})},m3=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,b3=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,y3=b.div`
    font-size: 15px;
    margin-bottom: 20px;
    color: #444;
`,Dm=b.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
`,Bm=b.div`
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    color: #444;
    text-align: left;
`,Lm=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
`,Um=b.button`
    padding: 12px 0;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;const v3=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,w3=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),d=p=>{i({...a,introduce:p.target.value})},h=()=>{(a.introduce??"").trim().length===0&&i(x=>({...x,introduce:`안녕하세요 제 이름은 ${x.name}입니다. 잘 부탁드려요`})),l&&c(!1),n("/summary")};return u.jsx(T3,{children:u.jsxs(S3,{children:[u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"자기소개"})}),u.jsx(E3,{placeholder:"자기소개를 적어주세요 (최대 300자)",maxLength:300,value:a.introduce||"",onChange:d}),u.jsx(j3,{onClick:h,children:"작성완료"})]})})},S3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,j3=b.button`
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
    }

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,E3=b.textarea`
    width: 90%;
    height: 230px; // 초기 높이
    max-height: 300px; // 최대 높이 제한
    margin-top: 50px;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #000000;
    backdrop-filter: blur(6px);
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    resize: none; // 사용자가 크기 조절 불가
    overflow-y: auto; // 내용이 많으면 스크롤
`,T3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,_3=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),[d]=w.useState("SELF"),h=()=>{if(v.length===0){alert("하나 이상의 태그를 선택하셔야 합니다.");return}l?(c(!1),n("/summary")):n("/hobby")},p=["#활발한","#차분한","#진지한","#유머러스한","#논리적인","#즉흥적인","#내향적인","#외향적인","#열정적인"],x=["#감정적인","#솔직한","#애교많은","#쿨한","#신중한","#허세없는","#다정한","#따뜻한","#센스있는"],g=["#엉뚱한","#창의적인","#독립적인","#낙천적인","#분석적인","#모험적인","#츤데레","#얀데레","#자유로운"],y=S=>{const C=a.introTags||[];C.includes(S)?i({...a,introTags:C.filter(T=>T!==S)}):C.length<6?i({...a,introTags:[...C,S]}):alert("최대 6개까지만 선택할 수 있어요!")},v=a.introTags||[];return u.jsxs(C3,{children:[u.jsx(R3,{children:"당신을 소개해주세요!"}),u.jsx(k3,{children:"최대 6개 선택 가능합니다."}),u.jsx(wd,{children:"---------- 성격 · 태도 ----------"}),u.jsx(Sd,{children:p.map(S=>u.jsx(jd,{onClick:()=>y(S),selected:v.includes(S),children:S},S))}),u.jsx(wd,{children:"---------- 감정 · 표현 ----------"}),u.jsx(Sd,{children:x.map(S=>u.jsx(jd,{onClick:()=>y(S),selected:v.includes(S),children:S},S))}),u.jsx(wd,{children:"---------- 독특한 매력 ----------"}),u.jsx(Sd,{children:g.map(S=>u.jsx(jd,{onClick:()=>y(S),selected:v.includes(S),children:S},S))}),u.jsx(A3,{onClick:h,children:"다음"})]})},C3=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,R3=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,k3=b.div`
    font-size: 15px;
    margin-bottom: 0px;
`,wd=b.div`
    font-size: 18px;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444;
`,Sd=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
`,jd=b.button`
    padding: 10px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
`;const A3=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        /* 바깥쪽 그림자 */ -6px -6px 15px rgba(255, 255, 255, 0.1); /* 하이라이트 */
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,O3=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot(),[d]=w.useState("SELF"),h=()=>{if((a.hobby||[]).length===0){alert("하나 이상의 태그를 선택하셔야 합니다.");return}l?(c(!1),n("/summary")):n("/wantedmbti")},p=["#등산","#여행","#자전거","#러닝","#댄스","#수영","#헬스","#볼링","#스포츠관람","#캠핑","#서핑","#클라이밍","#농구","#축구","#방탈출"],x=["#영화보기","#드라마","#넷플릭스","#유튜브","#독서","#요리하기","#베이킹","#악기연주","#사진찍기","#보드게임","#명상","#그림그리기","#수다","#멍때리기","#산책하기"],[g,y]=w.useState([]),v=S=>{const C=a.hobby||[];C.includes(S)?i({...a,hobby:C.filter(T=>T!==S)}):C.length<6?i({...a,hobby:[...C,S]}):alert("최대 6개까지만 선택할 수 있어요!")};return u.jsxs(M3,{children:[u.jsx(N3,{children:"당신의 취미를 선택해주세요!"}),u.jsx(z3,{children:"최대 6개 선택 가능합니다."}),u.jsxs($m,{children:[u.jsx(Hm,{children:"🌟 밖에서 즐기는"}),u.jsx(qm,{children:p.map(S=>u.jsx(Ym,{onClick:()=>v(S),selected:a.hobby?.includes(S),children:S},S))})]}),u.jsxs($m,{children:[u.jsx(Hm,{children:"🏡 집에서 즐기는"}),u.jsx(qm,{children:x.map(S=>u.jsx(Ym,{onClick:()=>v(S),selected:a.hobby?.includes(S),children:S},S))})]}),u.jsx(D3,{onClick:h,children:"다음"})]})},M3=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,N3=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,z3=b.div`
    font-size: 15px;
    margin-bottom: 20px;
    color: #444;
`,$m=b.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
`,Hm=b.div`
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    color: #444;
    text-align: left;
`,qm=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
`,Ym=b.button`
    padding: 12px 0;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;const D3=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,n1=w.createContext(),on=({children:n})=>{const[a,i]=w.useState({I:0,E:0,S:0,N:0,T:0,F:0,J:0,P:0}),[l,c]=w.useState(Array(12).fill(null)),d=(p,x)=>{i(g=>{const y={...g},v=l[p];return v&&(y[v]=Math.max(0,(y[v]??0)-1)),y[x]=(y[x]??0)+1,y}),c(g=>{const y=[...g];return y[p]=x,y})},h=()=>{i({I:0,E:0,S:0,N:0,T:0,F:0,J:0,P:0}),c(Array(12).fill(null))};return u.jsx(n1.Provider,{value:{scores:a,answers:l,setAnswerAt:d,resetAll:h},children:n})},sn=()=>w.useContext(n1),B3=()=>{const{setAnswerAt:n}=sn(),a=1,i=l=>{n(a,l)};return u.jsx($3,{children:u.jsxs(L3,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"1/12"})}),u.jsx(U3,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"연애할 때 나는?"})}),u.jsxs("div",{children:[u.jsx(Gm,{to:"/EasyMbti2",onClick:()=>i("E"),children:"매일 연락하고, 데이트도 자주 하고 싶어!"}),u.jsx(Gm,{to:"/EasyMbti2",onClick:()=>i("I"),style:{marginTop:"15px"},children:"가끔은 혼자만의 시간도 필요해"})]})]})})},L3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,U3=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Gm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,$3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,H3=()=>{const{setAnswerAt:n}=sn(),a=1,i=l=>{n(a,l)};return u.jsx(G3,{children:u.jsxs(q3,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"2/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"2/12"})}),u.jsx(Y3,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"주말 데이트 코스 고르기!"})}),u.jsxs("div",{children:[u.jsx(Vm,{to:"/EasyMbti3",onClick:()=>i("E"),children:"시끌벅적 핫플 카페 → 전시회 → 노래방 콤보"}),u.jsx(Vm,{to:"/EasyMbti3",onClick:()=>i("I"),style:{marginTop:"15px"},children:"조용히 둘이서 영화 보고, 산책하면서 대화"})]})]})})},q3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Y3=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Vm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,G3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,V3=()=>{const{setAnswerAt:n}=sn(),a=2,i=l=>{n(a,l)};return u.jsx(Q3,{children:u.jsxs(X3,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"3/12"})}),u.jsx(P3,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"좋아하는 사람에게 먼저 다가가?"})}),u.jsxs("div",{children:[u.jsx(Xm,{to:"/EasyMbti4",onClick:()=>i("E"),children:"불도저"}),u.jsx(Xm,{to:"/EasyMbti4",onClick:()=>i("I"),style:{marginTop:"15px"},children:"쌉에겐"})]})]})})},X3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,P3=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Xm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,Q3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,F3=()=>{const{setAnswerAt:n}=sn(),a=3,i=l=>{n(a,l)};return u.jsx(J3,{children:u.jsxs(K3,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"4/12"})}),u.jsx(Z3,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"미래 얘기 나올 때 나는?"})}),u.jsxs("div",{children:[u.jsx(Pm,{to:"/EasyMbti5",onClick:()=>i("S"),children:"“우리 5년 뒤엔 어디서 살고 있을까?” 상상 폭발"}),u.jsx(Pm,{to:"/EasyMbti5",onClick:()=>i("N"),style:{marginTop:"15px"},children:"“지금 당장 뭐 먹을까?” 현실적인 대화 선호"})]})]})})},K3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Z3=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Pm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,J3=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,I3=()=>{const{setAnswerAt:n}=sn(),a=4,i=l=>{n(a,l)};return u.jsx(t_,{children:u.jsxs(W3,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"5/12"})}),u.jsx(e_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"연인이 편지를 써줬다!"})}),u.jsxs("div",{children:[u.jsx(Qm,{to:"/EasyMbti6",onClick:()=>i("S"),children:"문장에 담긴 의미와 숨은 메시지를 해석한다"}),u.jsx(Qm,{to:"/EasyMbti6",onClick:()=>i("N"),style:{marginTop:"15px"},children:"글씨체, 종이, 선물 같은 디테일이 더 눈에 들어온다"})]})]})})},W3=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,e_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Qm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,t_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,n_=()=>{const{setAnswerAt:n}=sn(),a=5,i=l=>{n(a,l)};return u.jsx(i_,{children:u.jsxs(r_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"6/12"})}),u.jsx(a_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"애인에게 “만약에~” 라는 질문을 많이 한다"})}),u.jsxs("div",{children:[u.jsx(Fm,{to:"/EasyMbti7",onClick:()=>i("S"),children:"네!"}),u.jsx(Fm,{to:"/EasyMbti7",onClick:()=>i("N"),style:{marginTop:"15px"},children:"아니요!"})]})]})})},r_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,a_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Fm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,i_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,o_=()=>{const{setAnswerAt:n}=sn(),a=6,i=l=>{n(a,l)};return u.jsx(c_,{children:u.jsxs(l_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"7/12"})}),u.jsx(s_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"애인이 힘들다고 할 때 나는?"})}),u.jsxs("div",{children:[u.jsx(Km,{to:"/EasyMbti8",onClick:()=>i("F"),children:"“많이 힘들었겠다… 괜찮아?” 공감부터 한다"}),u.jsx(Km,{to:"/EasyMbti8",onClick:()=>i("T"),style:{marginTop:"15px"},children:"“그럼 어떻게 해결할 수 있을까?” 해결책부터 찾는다"})]})]})})},l_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,s_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Km=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,c_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,u_=()=>{const{setAnswerAt:n}=sn(),a=7,i=l=>{n(a,l)};return u.jsx(h_,{children:u.jsxs(f_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"8/12"})}),u.jsx(d_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"싸움이 났을 때 어떻게 해결해?"})}),u.jsxs("div",{children:[u.jsx(Zm,{to:"/EasyMbti9",onClick:()=>i("F"),children:"빨리 화해하고 싶어서 먼저 다가간다"}),u.jsx(Zm,{to:"/EasyMbti9",onClick:()=>i("T"),style:{marginTop:"15px"},children:"감정 정리할 시간을 갖고 논리적으로 얘기한다"})]})]})})},f_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,d_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Zm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,h_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,p_=()=>{const{setAnswerAt:n}=sn(),a=8,i=l=>{n(a,l)};return u.jsx(m_,{children:u.jsxs(g_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"9/12"})}),u.jsx(x_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"애인과 여행할 때 나는?"})}),u.jsxs("div",{children:[u.jsx(Jm,{to:"/EasyMbti10",onClick:()=>i("T"),children:"일정표를 빽빽하게 짜야 마음이 놓인다"}),u.jsx(Jm,{to:"/EasyMbti10",onClick:()=>i("F"),style:{marginTop:"15px"},children:"그냥 가서 즉흥적으로 즐기는 게 더 좋다"})]})]})})},g_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,x_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Jm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,m_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,b_=()=>{const{setAnswerAt:n}=sn(),a=9,i=l=>{n(a,l)};return u.jsx(w_,{children:u.jsxs(y_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"10/12"})}),u.jsx(v_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"애인과 여행할 때 나는?"})}),u.jsxs("div",{children:[u.jsx(Im,{to:"/EasyMbti11",onClick:()=>i("J"),children:"일정표를 빽빽하게 짜야 마음이 놓인다"}),u.jsx(Im,{to:"/EasyMbti11",style:{marginTop:"15px"},onClick:()=>i("P"),children:"그냥 가서 즉흥적으로 즐기는 게 더 좋다"})]})]})})},y_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,v_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Im=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,w_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,S_=()=>{const{setAnswerAt:n}=sn(),a=10,i=l=>{n(a,l)};return u.jsx(T_,{children:u.jsxs(j_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"11/12"})}),u.jsx(E_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"데이트할 때 약속 시간은?"})}),u.jsxs("div",{children:[u.jsx(Wm,{to:"/EasyMbti12",onClick:()=>i("J"),children:"최소 하루 전엔 정리하고 준비해야 한다"}),u.jsx(Wm,{to:"/EasyMbti12",onClick:()=>i("P"),style:{marginTop:"15px"},children:"“오늘 볼래?” 급만남도 즐긴다"})]})]})})},j_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,E_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,Wm=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,T_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,__=()=>{const{setAnswerAt:n}=sn(),a=11,i=l=>{n(a,l)};return u.jsx(k_,{children:u.jsxs(C_,{children:[u.jsx("div",{children:u.jsx("h2",{style:{marginTop:"20px"},children:"1/12"})}),u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"30px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"30px",marginBottom:"5px"},children:u.jsx("h1",{children:"12/12"})}),u.jsx(R_,{children:u.jsx("h1",{style:{marginBottom:"60px"},children:"기념일은 어떻게 준비해?"})}),u.jsxs("div",{children:[u.jsx(eb,{to:"/ResultMbti",onClick:()=>i("J"),children:"미리 준비하고 체크리스트까지 만든다"}),u.jsx(eb,{to:"/ResultMbti",onClick:()=>i("P"),style:{marginTop:"15px"},children:"당일 생각나면 바로 이벤트를 준비한다"})]})]})})},C_=b.div`
    margin-top: 30px;
    width: 80%;
    max-width: 400px;
    padding: 24px;
    border-radius: 20px;
    height: 560px;

    /* 투명 유리 효과 */
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);

    /* 은은한 테두리 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 유리 위에 빛 반사 느낌 */
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 100%
    );

    /* 그림자 (유리의 입체감) */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,R_=b.div`
    margin-top: 5px;
    margin-bottom: 30px;
`,eb=b(Ft)`
    width: 220px;
    height: 30px; /* 높이 지정해서 버튼 크기 통일 */
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    /* 텍스트 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,k_=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // align-items: center;
    font-size: 6pt;
    padding-top: 20px;
`,A_=()=>{const{scores:n}=sn(),a=Ne(),{setFormData:i,setReturnToSummary:l}=Ot(),c=(p,x)=>{const g=n[p]??0,y=n[x]??0;return g>=y?p:x},d=c("I","E")+c("S","N")+c("T","F")+c("J","P"),h=()=>{const[p,x,g,y]=d.split("");i(v=>({...v,mbti:{EI:p,SN:x,TF:g,JP:y}})),a("/intro")};return u.jsx(D_,{children:u.jsxs(M_,{children:[u.jsx("div",{children:u.jsx("h1",{style:{marginTop:"50px"},children:"MBT(M)I를 알려주세요!"})}),u.jsx("div",{style:{marginTop:"10px"},children:u.jsx("h1",{children:"당신의 MBT(M)I는"})}),u.jsx(N_,{children:u.jsx(O_,{children:u.jsx("h1",{children:d})})}),u.jsx("div",{children:u.jsx(z_,{onClick:h,children:"다음으로"})})]})})},O_=b.div`
  font-size: clamp(28px, 6vw, 40px);
  margin: 10px 0 8px;
`,M_=b.div`
  margin-top: 30px;
  width: 80%;
  max-width: 400px;
  padding: 24px;
  border-radius: 20px;
  height: 560px;

  /* 투명 유리 효과 */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);

  /* 은은한 테두리 */
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* 유리 위에 빛 반사 느낌 */
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );

  /* 그림자 (유리의 입체감) */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,N_=b.div`
  margin-bottom: 10px;
`,z_=b.button`
  width: 220px;
  height: 30px; /* 높이 지정해서 버튼 크기 통일 */
  padding: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: all 0.3s ease;

  /* 텍스트 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,D_=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // align-items: center;
  font-size: 6pt;
  padding-top: 20px;
`,B_=()=>{const n=Ne(),{user:a,updateMymbti:i}=At(),[l,c]=w.useState({EI:"",SN:"",TF:"",JP:""});w.useEffect(()=>{if(a?.mbti){const[p,x,g,y]=a.mbti.split("");c({EI:p,SN:x,TF:g,JP:y})}},[a]);const d=(p,x)=>{c(g=>({...g,[p]:g[p]===x?"":x}))},h=async()=>{const p=`${l.EI}${l.SN}${l.TF}${l.JP}`;await i({mbti:p})?(alert("MBTI가 업데이트되었습니다!"),n("/mypage")):alert("업데이트 실패 ")};return u.jsxs(q_,{children:[u.jsxs("div",{children:[u.jsx($_,{children:"나의 MBIT 수정"}),u.jsxs(Os,{children:[u.jsx(ea,{selected:l.EI==="E",onClick:()=>d("EI","E"),children:"E"}),u.jsx(ea,{selected:l.EI==="I",onClick:()=>d("EI","I"),children:"I"})]}),u.jsxs(Os,{children:[u.jsx(ea,{selected:l.SN==="S",onClick:()=>d("SN","S"),children:"S"}),u.jsx(ea,{selected:l.SN==="N",onClick:()=>d("SN","N"),children:"N"})]}),u.jsxs(Os,{children:[u.jsx(ea,{selected:l.TF==="T",onClick:()=>d("TF","T"),children:"T"}),u.jsx(ea,{selected:l.TF==="F",onClick:()=>d("TF","F"),children:"F"})]}),u.jsxs(Os,{children:[u.jsx(ea,{selected:l.JP==="J",onClick:()=>d("JP","J"),children:"J"}),u.jsx(ea,{selected:l.JP==="P",onClick:()=>d("JP","P"),children:"P"})]})]}),u.jsxs(H_,{children:[u.jsx("hr",{}),u.jsx("div",{children:"당신의 MBTI"}),u.jsx("hr",{})]}),u.jsxs(U_,{children:[u.jsx(L_,{type:"text",value:`${l.EI}${l.SN}${l.TF}${l.JP}`,readOnly:!0}),u.jsx("button",{onClick:h,children:"수정하기"})]})]})},L_=b.input`
  text-align: center;
  width: 100px;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 20px;
  margin-right: 10px;
`,U_=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  input,
  button {
    height: 50px; /* 높이를 동일하게 */
    font-size: 18px; /* 글자 크기 맞춤 */
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0 15px; /* 내부 여백 */
    box-sizing: border-box;
  }

  button {
    margin-left: 10px;
    cursor: pointer;
    background-color: #a6c1ee;
    color: white;
    transition: background-color 0.3s;
    &:hover {
      background-color: #6b90d9;
    }
  }
`,$_=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px;
  font-size: 25px;
  font-weight: bold; /* 수정 */
`,Os=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ea=b.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${n=>n.selected?"#a6c1ee":"#f0f0f0"};
  color: ${n=>n.selected?"white":"black"};

  &:hover {
    background-color: ${n=>n.selected?"#a6c1ee":"#e0e0e0"};
  }
`,H_=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  hr {
    flex: 1;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  span {
    margin: 0 10px;
    color: #555;
  }
`,q_=b.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Y_=()=>{const{formData:n,setReturnToSummary:a}=Ot(),{sendFormData:i}=At(),l=Ne(),c=()=>{a(!0),l("/selmbti")},d=()=>{a(!0),l("/intro")},h=()=>{a(!0),l("/hobby")},p=()=>{a(!0),l("/introduce")},x=()=>{a(!0),l("/region")},g=async()=>{const v=await i(n);if(!v||!v.success){alert("회원가입 실패!");return}const S=v.userId;alert("회원가입이 완료 되었습니다!"),l("/profilephoto",{state:{userId:S},replace:!0})},y=Object.values(n.mbti??{}).join("");return u.jsx(G_,{children:u.jsxs(V_,{children:[u.jsx(X_,{children:"입력 확인"}),u.jsxs(P_,{children:[u.jsxs(Vo,{onClick:c,children:[u.jsx(Yo,{children:"MBTI"}),u.jsx(Go,{children:y})]}),u.jsxs(Vo,{onClick:d,children:[u.jsx(Yo,{children:"성격"}),u.jsx(Go,{style:{whiteSpace:"pre-wrap",wordBreak:"keep-all"},children:n.introTags.map((v,S)=>u.jsx("span",{style:{marginRight:"6px"},children:v},S))})]}),u.jsxs(Vo,{onClick:h,children:[u.jsx(Yo,{children:"취미"}),u.jsx(Go,{style:{whiteSpace:"pre-wrap",wordBreak:"keep-all"},children:n.hobby.join("  ")})]}),u.jsxs(Vo,{onClick:x,children:[u.jsx(Yo,{children:"거주 지역"}),u.jsx(Go,{style:{whiteSpace:"pre-wrap",wordBreak:"keep-all"},children:n.location})]}),u.jsxs(Vo,{onClick:p,children:[u.jsx(Yo,{children:"자기소개"}),u.jsx(Go,{style:{whiteSpace:"pre-wrap",wordBreak:"keep-all"},children:n.introduce.split(/\n/).map((v,S)=>u.jsx("p",{style:{margin:"8px 0"},children:v.trim()},S))})]})]}),u.jsx(Q_,{children:u.jsx(F_,{onClick:g,children:"다음으로"})})]})})},G_=b.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    color: #333;
    padding: 20px;
`,V_=b.div`
    width: 90%;
    max-width: 600px;
    padding: 30px 20px;
    border-radius: 20px;

    background-color: #ffffff1a;
    /* 카드 느낌의 그림자 */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 15px;
`,X_=b.h2`
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`,P_=b.div`
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 1.6;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.4);
`,Yo=b.div`
    flex: 1;
    text-align: left;
    font-weight: bold;
    font-size: 17px;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.4);
`,Go=b.div`
    flex: 2;
    color: #3d1756;
    font-size: 12px;
`,Vo=b.button`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    z-index: 100;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;

    backdrop-filter: blur(6px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: #aa80dd88;

        transition: background-color 0.3s;
        transform: translateY(1px);
    }
`,Q_=b.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`,F_=b.button`
    width: 110px;
    height: 50px;
    padding: 12px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;

    backdrop-filter: blur(6px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,tb={특별시:["서울특별시"],광역시:["부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시"],도:["경기도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","강원도"],특별자치도:["제주특별자치도"]},K_=({value:n,onChange:a})=>{const i=w.useMemo(()=>Object.keys(tb),[]),[l,c]=w.useState(new Set(i)),[d,h]=w.useState(n??"");w.useEffect(()=>{n!==void 0&&h(n??"")},[n]);const p=x=>{h(x),a?.(x)};return u.jsx(Z_,{role:"listbox","aria-label":"지역 선택",children:Object.entries(tb).map(([x,g])=>u.jsxs(J_,{children:[u.jsxs(I_,{onClick:()=>{c(y=>{const v=new Set(y);return v.has(x)?v.delete(x):v.add(x),v})},children:[u.jsx(eC,{$open:l.has(x)}),u.jsx(W_,{children:x})]}),l.has(x)&&u.jsx(tC,{children:g.map(y=>u.jsxs(nC,{$active:d===y,onClick:()=>p(y),children:[u.jsx(rC,{children:d===y?"●":"○"}),u.jsx("span",{children:y})]},y))})]},x))})},Z_=b.div`
  width: 360px;
  max-width: 92vw;
  border-radius: 16px;
  background: #fff;
  color: #000;
  box-shadow: 0 14px 38px rgba(0,0,0,0.18);
  overflow: hidden;
`,J_=b.div`
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: 0; }
`,I_=b.button`
  width: 100%;
  background: #fafafa;
  border: 0;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,W_=b.span`
  font-weight: 700;
`,eC=b.span`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #666;
  transform: rotate(${n=>n.$open?"90deg":"0deg"});
  transition: transform 0.15s ease;
`,tC=b.ul`
  list-style: none;
  margin: 6px 0 10px 24px;
  padding: 0 12px 6px 0;
`,nC=b.li`
  padding: 8px 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: ${n=>n.$active?"rgba(166,193,238,.22)":"transparent"};
  &:hover {
    background: rgba(166,193,238,.12);
  }
`,rC=b.span`
  width: 16px;
  text-align: center;
  color: #6b90d9;
`,aC=()=>{const{user:n,updateUser:a,updateMyInfo:i}=At(),l=Ne(),[c,d]=w.useState({name:"",location:"",self_intro:"",profileFile:null,preview:null}),[h,p]=w.useState(!1);w.useEffect(()=>{n&&d(v=>({...v,name:n.name||"",location:n.location||"",self_intro:n.self_intro||"",preview:n.photo_url?`http://localhost:8080/uploads/${n.photo_url}`:defaultProfile}))},[n]);const x=v=>{const{name:S,value:C}=v.target;d(T=>({...T,[S]:C}))},g=v=>{const S=v.target.files[0];if(S){const C=URL.createObjectURL(S);d(T=>({...T,profileFile:S,preview:C}))}},y=async()=>{const v={name:c.name,location:c.location,self_intro:c.self_intro,profileFile:c.profileFile};await i(v)?(alert("프로필이 업데이트되었습니다!"),l("/mypage")):alert("업데이트에 실패했습니다.")};return u.jsxs(iC,{children:[u.jsx(oC,{children:u.jsxs(lC,{children:[u.jsx(sC,{src:c.preview,alt:"프로필 이미지",draggable:"false"}),u.jsxs(cC,{children:["이미지 변경",u.jsx("input",{type:"file",accept:"image/*",onChange:g})]}),u.jsxs(Ed,{children:[u.jsx("span",{children:"이름:"}),u.jsx("input",{type:"text",name:"name",value:c.name,onChange:x})]}),u.jsxs(Ed,{children:[u.jsx("span",{children:"지역:"}),u.jsx("input",{type:"text",name:"location",value:c.location,readOnly:!0,onClick:()=>p(!0),style:{cursor:"pointer",background:"#f5f5f5"}})]}),u.jsxs(Ed,{children:[u.jsx("span",{children:"자기소개:"}),u.jsx("textarea",{name:"self_intro",value:c.self_intro,onChange:x})]}),u.jsx(uC,{children:u.jsx(fC,{onClick:y,children:"수정하기"})})]})}),h&&u.jsx(dC,{children:u.jsxs(hC,{children:[u.jsx(K_,{value:c.location,onChange:v=>d(S=>({...S,location:v}))}),u.jsx(pC,{onClick:()=>p(!1),children:"확인"})]})})]})},iC=b.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  width: 100vw;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,oC=b.div`
  width: 100%;
  max-width: 300px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,lC=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,sC=b.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`,cC=b.label`
  font-size: 12px;
  color: #333;
  font-weight: bold;
  background: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-bottom: 10px;

  input {
    display: none;
  }
`,Ed=b.div`
  display: flex;
  align-items: center;
  font-size: 14pt;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;

  span {
    display: inline-block;
    min-width: 60px;
    text-align: right;
    margin-right: 10px;
  }

  input,
  textarea {
    flex: 1;
    padding: 5px 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 12pt;
  }

  textarea {
    height: 120px;
    resize: none;
  }
`,uC=b.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`,fC=b.button`
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #a6c1ee, #fbc2eb);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`,dC=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`,hC=b.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 350px;
  max-width: 90vw;
  max-height: 75vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`,pC=b.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #6b90d9;
  color: white;
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: bold;
`,gC=()=>{const n=Ne(),{formData:a,setFormData:i}=Ot();w.useEffect(()=>{(async()=>{try{const v=await he.get("/api/user/tags?type=SELF",{withCredentials:!0});if(v.data){const S=v.data.map(C=>C.tag_name);i(C=>({...C,introTags:S}))}}catch(v){console.error("user tags 불러오기 실패:",v)}})()},[i]);const l=async()=>{try{const y=await he.put("/api/update-tags",a.introTags,{withCredentials:!0});alert("태그 업데이트 완료!"),n("/mypage")}catch(y){console.error("태그 업데이트 실패:",y)}},c=["#활발한","#차분한","#진지한","#유머러스한","#논리적인","#즉흥적인","#내향적인","#외향적인","#열정적인"],d=["#감정적인","#솔직한","#애교많은","#쿨한","#신중한","#허세없는","#다정한","#따뜻한","#센스있는"],h=["#엉뚱한","#창의적인","#독립적인","#낙천적인","#분석적인","#모험적인","#츤데레","#얀데레","#자유로운"],p=y=>{const v=a.introTags||[];v.includes(y)?i({...a,introTags:v.filter(S=>S!==y)}):v.length<6?i({...a,introTags:[...v,y]}):alert("최대 6개까지만 선택할 수 있어요!")},x=a.introTags||[],g=y=>y.map(v=>{const S=v.slice(1);return u.jsx(yC,{onClick:()=>p(S),selected:x.includes(S),children:v},v)});return u.jsxs(xC,{children:[u.jsx(mC,{children:"당신을 소개해주세요!"}),u.jsx(bC,{children:"최대 6개 선택 가능합니다."}),u.jsx(Td,{children:"---------- 성격 · 태도 ----------"}),u.jsx(_d,{children:g(c)}),u.jsx(Td,{children:"---------- 감정 · 표현 ----------"}),u.jsx(_d,{children:g(d)}),u.jsx(Td,{children:"---------- 독특한 매력 ----------"}),u.jsx(_d,{children:g(h)}),u.jsx(vC,{disabled:x.length===0,onClick:l,children:"수정하기"})]})},xC=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,mC=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,bC=b.div`
    font-size: 15px;
    margin-bottom: 0px;
`,Td=b.div`
    font-size: 18px;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444;
`,_d=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
`,yC=b.button`
    padding: 10px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
`;const vC=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,wC=()=>{const n=Ne(),{formData:a,setFormData:i,returnToSummary:l,setReturnToSummary:c}=Ot();w.useEffect(()=>{(async()=>{try{const S=await he.get("/api/user/hobby?type=SELF",{withCredentials:!0});if(S.data){const C=S.data.map(T=>T.hobby_name);i(T=>({...T,hobby:C}))}}catch(S){console.error("user tags 불러오기 실패:",S)}})()},[i]);const d=async()=>{try{const v=await he.put("/api/update-hobbies",a.hobby,{withCredentials:!0});alert("취미 업데이트 완료!"),n("/mypage")}catch(v){console.error("태그 업데이트 실패:",v)}},h=["#등산","#여행","#자전거","#러닝","#댄스","#수영","#헬스","#볼링","#스포츠관람","#캠핑","#서핑","#클라이밍","#농구","#축구","#방탈출"],p=["#영화보기","#드라마","#넷플릭스","#유튜브","#독서","#요리하기","#베이킹","#악기연주","#사진찍기","#보드게임","#명상","#그림그리기","#수다","#멍때리기","#산책하기"],x=v=>{const S=a.hobby||[];S.includes(v)?i({...a,hobby:S.filter(C=>C!==v)}):S.length<6?i({...a,hobby:[...S,v]}):alert("최대 6개까지만 선택할 수 있어요!")},g=a.hobby||[],y=v=>v.map(S=>{const C=S.slice(1);return u.jsx(TC,{onClick:()=>x(C),selected:g.includes(C),children:S},S)});return u.jsxs(SC,{children:[u.jsx(jC,{children:"당신의 취미를 선택해주세요!"}),u.jsx(EC,{children:"최대 6개 선택 가능합니다."}),u.jsxs(nb,{children:[u.jsx(rb,{children:"🌟 밖에서 즐기는"}),u.jsx(ab,{children:y(h)})]}),u.jsxs(nb,{children:[u.jsx(rb,{children:"🏡 집에서 즐기는"}),u.jsx(ab,{children:y(p)})]}),u.jsx(_C,{disabled:(a.hobby?.length??0)===0,onClick:d,children:"수정하기"})]})},SC=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,jC=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,EC=b.div`
    font-size: 15px;
    margin-bottom: 20px;
    color: #444;
`,nb=b.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
`,rb=b.div`
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    color: #444;
    text-align: left;
`,ab=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 */
    gap: 12px;
`,TC=b.button`
    padding: 12px 0;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;

    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;const _C=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`,jh=b.div`
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    box-sizing: border-box;
`,Eh=b.h1`
    font-size: 22px;
    margin-bottom: 10px;
    color: #333;
`,Ko=b.div`
    font-size: 18px;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444;
    text-align: center;
`,Zo=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-width: 600px;
    width: 100%;
`,r1=b.button`
    padding: 12px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    background-color: ${n=>n.selected?"#a6c1ee":"#fff"};
    color: ${n=>n.selected?"#fff":"#333"};
    box-shadow: ${n=>n.selected?"inset 3px 3px 6px rgba(0,0,0,0.2)":"2px 2px 8px rgba(0,0,0,0.15)"};
    transition: all 0.2s;
    &:hover {
        background-color: ${n=>n.selected?"#8aa9e6":"#f7f7f7"};
    }
`,Ri=b.button`
    width: 220px;
    padding: 12px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
        -6px -6px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
            inset -4px -4px 12px rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(1px);
    }
`;b.p`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;const Ms=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,ta=b.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${n=>n.selected?"#a6c1ee":"#f0f0f0"};
    color: ${n=>n.selected?"white":"black"};

    &:hover {
        background-color: ${n=>n.selected?"#a6c1ee":"#e0e0e0"};
    }
`,CC=b.input`
    text-align: center;
    width: 100px;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 20px;
    margin-right: 10px;
`,RC=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    input,
    button {
        height: 50px; /* 높이를 동일하게 */
        font-size: 18px; /* 글자 크기 맞춤 */
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0 15px; /* 내부 여백 */
        box-sizing: border-box;
    }

    button {
        margin-left: 10px;
        cursor: pointer;
        background-color: #a6c1ee;
        color: white;
        transition: background-color 0.3s;
        &:hover {
            background-color: #6b90d9;
        }
    }
`,kC=({onNext:n,onPrev:a,selectedMbti:i,setSelectedMbti:l})=>{const{user:c}=At(),[d,h]=w.useState({EI:"",SN:"",TF:"",JP:""});w.useEffect(()=>{c?.desired_mbti;const[g,y,v,S]=c.desired_mbti.split("");h({EI:g,SN:y,TF:v,JP:S}),l(c.desired_mbti)},[i,c]);const p=(g,y)=>{h(v=>({...v,[g]:v[g]===y?"":y}))},x=()=>{const g=`${d.EI}${d.SN}${d.TF}${d.JP}`;if(g.length!==4){alert("MBTI 4글자를 모두 선택해주세요!");return}l(g),n()};return u.jsxs(jh,{children:[u.jsx(Eh,{children:"원하는 상대방의 MBTI"}),u.jsxs(Ms,{children:[u.jsx(ta,{selected:d.EI==="E",onClick:()=>p("EI","E"),children:"E"}),u.jsx(ta,{selected:d.EI==="I",onClick:()=>p("EI","I"),children:"I"})]}),u.jsxs(Ms,{children:[u.jsx(ta,{selected:d.SN==="S",onClick:()=>p("SN","S"),children:"S"}),u.jsx(ta,{selected:d.SN==="N",onClick:()=>p("SN","N"),children:"N"})]}),u.jsxs(Ms,{children:[u.jsx(ta,{selected:d.TF==="T",onClick:()=>p("TF","T"),children:"T"}),u.jsx(ta,{selected:d.TF==="F",onClick:()=>p("TF","F"),children:"F"})]}),u.jsxs(Ms,{children:[u.jsx(ta,{selected:d.JP==="J",onClick:()=>p("JP","J"),children:"J"}),u.jsx(ta,{selected:d.JP==="P",onClick:()=>p("JP","P"),children:"P"})]}),u.jsx(RC,{children:u.jsx(CC,{type:"text",value:`${d.EI}${d.SN}${d.TF}${d.JP}`,readOnly:!0})}),u.jsx(Ri,{onClick:x,children:"다음"}),u.jsx(Ri,{onClick:a,children:"이전"})]})},AC=["#활발한","#차분한","#진지한","#유머러스한","#논리적인","#즉흥적인","#내향적인","#외향적인","#열정적인"],OC=["#감정적인","#솔직한","#애교많은","#쿨한","#신중한","#허세없는","#다정한","#따뜻한","#센스있는"],MC=["#엉뚱한","#창의적인","#독립적인","#낙천적인","#분석적인","#모험적인","#츤데레","#얀데레","#자유로운"],NC=({onNext:n,onPrev:a,selectedTags:i,setSelectedTags:l})=>{w.useEffect(()=>{(async()=>{try{const p=await he.get("/api/wanted/tags?type=DESIRED",{withCredentials:!0});if(Array.isArray(p.data)){const x=p.data.map(g=>String(g.tag_name||"").replace(/^#/,"")).filter(Boolean);l(x)}}catch(p){console.error("DESIRED tags 불러오기 실패:",p)}})()},[l]);const c=h=>{i.includes(h)?l(i.filter(p=>p!==h)):i.length<6?l([...i,h]):alert("최대 6개까지만 선택할 수 있어요!")},d=h=>h.map(p=>{const x=p.replace(/^#/,"");return u.jsx(r1,{onClick:()=>c(x),selected:i.includes(x),children:p},p)});return u.jsxs(jh,{children:[u.jsx(Eh,{children:"당신이 원하는 상대는?"}),u.jsx(Ko,{children:"---------- 성격 · 태도 ----------"}),u.jsx(Zo,{children:d(AC)}),u.jsx(Ko,{children:"감정 · 표현"}),u.jsx(Zo,{children:d(OC)}),u.jsx(Ko,{children:"독특한 매력"}),u.jsx(Zo,{children:d(MC)}),u.jsx(Ri,{onClick:n,children:"다음"}),u.jsx(Ri,{onClick:a,children:"이전"})]})},zC=["#등산","#여행","#자전거","#러닝","#댄스","#수영","#헬스","#볼링","#스포츠관람","#캠핑","#서핑","#클라이밍","#농구","#축구","#방탈출"],DC=["#영화보기","#드라마","#넷플릭스","#유튜브","#독서","#요리하기","#베이킹","#악기연주","#사진찍기","#보드게임","#명상","#그림그리기","#수다","#멍때리기","#산책하기"],BC=({onNext:n,onPrev:a,selectedHobbies:i,setSelectedHobbies:l})=>{w.useEffect(()=>{(async()=>{try{const p=await he.get("/api/wanted/hobby?type=DESIRED",{withCredentials:!0});if(Array.isArray(p.data)){const x=p.data.map(g=>String(g.hobby_name||"").replace(/^#/,"")).filter(Boolean);l(x)}}catch(p){console.error("DESIRED hobby 불러오기 실패:",p)}})()},[l]);const c=h=>{i.includes(h)?l(i.filter(p=>p!==h)):i.length<6?l([...i,h]):alert("최대 6개까지만 선택할 수 있어요!")},d=h=>h.map(p=>{const x=p.replace(/^#/,""),g=i.includes(x);return u.jsx(r1,{onClick:()=>c(x),selected:g,children:p},p)});return u.jsxs(jh,{children:[u.jsx(Eh,{children:"상대의 이런 취미를 원해요!"}),u.jsx(Ko,{children:"밖에서 즐기는"}),u.jsx(Zo,{children:d(zC)}),u.jsx(Ko,{children:"집에서 즐기는"}),u.jsx(Zo,{children:d(DC)}),u.jsx(Ri,{onClick:n,children:"완료"}),u.jsx(Ri,{onClick:a,children:"이전"})]})},LC=()=>{const n=Ne(),[a,i]=w.useState(1),{updateDesired:l}=At(),[c,d]=w.useState(null),[h,p]=w.useState([]),[x,g]=w.useState([]),y=async()=>{try{await l({wantedMbti:c,wantedTags:h,wantedHobbies:x})?(alert("원하는 상대방 정보 업데이트 완료!"),n("/mypage")):alert("업데이트 실패")}catch(C){console.error(C),alert("업데이트 중 오류가 발생했습니다.")}},v=()=>{a===3?y():i(a+1)},S=()=>{a===1?n(-1):i(a-1)};return u.jsxs(u.Fragment,{children:[a===1&&u.jsx(kC,{onNext:v,onPrev:S,selectedMbti:c,setSelectedMbti:d}),a===2&&u.jsx(NC,{onNext:v,onPrev:S,selectedTags:h,setSelectedTags:p}),a===3&&u.jsx(BC,{onNext:v,onPrev:S,selectedHobbies:x,setSelectedHobbies:g})]})},UC=()=>{const n=Ne(),{formData:a,setFormData:i}=Ot(),l=Object.values(a.mbti??{}).join("");return u.jsxs($C,{children:[u.jsx(HC,{src:kt,alt:"",style:{userSelect:"none",WebkitUserDrag:"none"}}),u.jsxs(qC,{children:[u.jsx(YC,{src:a.profile?.preview||kt,alt:"profile"}),u.jsxs(GC,{children:[a.name,"(",a.age,") / ",l," ",u.jsx("br",{})]}),u.jsxs(VC,{children:[u.jsx(ib,{children:a.hobby}),u.jsx(ib,{children:a.introTags})]})]}),u.jsx(XC,{onClick:()=>n("/home"),children:"완료"})]})},$C=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
  padding-top: 60px;
`,HC=b.img`
  position: absolute;
  top: 0px;
  left: 30px;
  object-fit: cover;
  width: 150px;
`,qC=b.div`
  width: 100%;
  max-width: 350px;
  padding: 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 80px;
`,YC=b.img`
  width: 80%;
  border-radius: 20px;
  object-fit: cover;
`,GC=b.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`,VC=b.div`
  display: flex;
  gap: 20px;
`,ib=b.div`
  background: #fbc2eb;
  color: #333;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
`,XC=b.button`
  width: 110px;
  height: 50px;
  padding: 12px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.36);
  color: #fff;

  backdrop-filter: blur(6px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,PC=()=>{const n=Ne(),[a,i]=w.useState(!1),l=async()=>{if(a)try{await he.delete("/api/deleteUser",{withCredentials:!0}),n("/account01"),alert("탈퇴가 완료되었습니다.")}catch(c){console.error(c.message),alert("탈퇴 중 오류 발생")}};return u.jsxs(KC,{children:[u.jsxs("div",{children:[u.jsx(Cd,{children:u.jsx("h1",{children:"회원탈퇴"})}),u.jsxs(Cd,{children:[u.jsx(QC,{children:"탈퇴 시 유의사항"}),u.jsxs(FC,{style:{textAlign:"left",paddingLeft:"20px"},children:[u.jsx("li",{children:"탈퇴 후 30일 이내 재가입이 불가합니다."}),u.jsx("li",{children:"탈퇴 시 모든 개인 정보가 삭제됩니다."}),u.jsx("li",{children:"탈퇴 후 동일한 이메일로 재가입이 불가합니다."}),u.jsx("li",{children:"탈퇴 후 작성한 게시물은 삭제되지 않을 수 있습니다."})]}),u.jsxs("label",{children:["상기 내용을 확인하였습니다.",u.jsx("input",{type:"checkbox",id:"confirmCheck",checked:a,onChange:c=>i(c.target.checked)})]})]})]}),u.jsx(Cd,{children:u.jsxs("div",{style:{marginTop:"5px",marginBottom:"5px"},children:[u.jsx(ob,{onClick:()=>n("/mypage"),children:"취소"}),u.jsx(ob,{onClick:l,disabled:!a,children:"탈퇴하기"})]})})]})},QC=b.h2`
  color: #ff4d4f; /* 경고색 */
  font-weight: bold;
`,FC=b.ul`
  text-align: left;
  padding-left: 20px;
  li {
    margin-bottom: 8px;
    color: #f8f9fa;
  }
  li::before {
    content: "⚠ ";
    color: #ffcc00;
  }
`,ob=b.button`
  margin-left: 10px;
  margin-right: 10px;
  width: 120px;
`,Cd=b.div`
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  /* 필요하면 다시 주석 해제 가능
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`,KC=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */
  background: rgba(255, 255, 255, 0.15);
  position: relative; /* 🔥 하단 네비 절대위치 기준 */
`,Na=b.div`
    min-height: 100dvh; /* 최신 브라우저에서 안전하게 화면 높이 */
    width: 100vw; /* 기기 가로 꽉 채우기 */
    overflow-x: hidden; /* 혹시 가로 스크롤 생기는 것 방지 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    /* 파스텔톤 배경 그라데이션 */
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    // background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
`,lb={특별시:["서울특별시"],광역시:["부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시"],도:["경기도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","강원도"],특별자치도:["제주특별자치도"]},sb=({value:n=void 0,onChange:a,onNext:i,nextLabel:l="다음으로"})=>{const c=w.useMemo(()=>Object.keys(lb),[]),[d,h]=w.useState(new Set(c)),[p,x]=w.useState(n??"");w.useEffect(()=>{n!==void 0&&x(n??"")},[n]);const{formData:g,setFormData:y,returnToSummary:v,setReturnToSummary:S}=Ot(),C=Ne(),T=()=>{p&&(y(_=>({..._,location:p})),v?(S(!1),C("/summary")):C("/selmbti"))};return u.jsxs(Na,{children:[u.jsx(ZC,{children:u.jsx("h3",{children:"거주 지역을 선택해주세요!"})}),u.jsx(JC,{children:u.jsxs(IC,{role:"listbox","aria-label":"지역 선택",children:[Object.entries(lb).map(([_,R])=>u.jsxs(WC,{children:[u.jsxs(eR,{type:"button",onClick:()=>h(A=>{const N=new Set(A);return N.has(_)?N.delete(_):N.add(_),N}),children:[u.jsx(nR,{$open:d.has(_)}),u.jsx(tR,{children:_})]}),d.has(_)&&u.jsx(rR,{children:R.map(A=>u.jsxs(aR,{$active:p===A,"aria-selected":p===A,role:"option",onClick:()=>{x(A),a?.(A)},children:[u.jsx(iR,{"aria-hidden":!0,children:p===A?"●":"○"}),u.jsx("span",{children:A})]},A))})]},_)),u.jsxs(oR,{children:[u.jsx(lR,{children:p||"지역을 선택하세요"}),u.jsx(sR,{disabled:!p,onClick:T,children:l})]})]})})]})},ZC=b.div`
  font-size: 20px;
  margin-bottom: 10px;
`,JC=b.div`
  width: 360px;
  max-width: 92vw;
`,IC=b.div`
  width: 100%;
  border-radius: 16px;
  background: #fff;
  color: #000;
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.18);
  overflow: hidden;
`,WC=b.div`
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: 0;
  }
`,eR=b.button`
  width: 100%;
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  border: 0;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
  }
`,tR=b.span`
  font-weight: 700;
  color: #333;
`,nR=b.span`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #666;
  transform: rotate(${n=>n.$open?"90deg":"0deg"});
  transition: transform 0.15s ease;
`,rR=b.ul`
  list-style: none;
  margin: 6px 0 10px 24px;
  padding: 0 12px 6px 0;
`,aR=b.li`
  padding: 8px 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: ${n=>n.$active?"rgba(166,193,238,.22)":"transparent"};
  &:hover {
    background: rgba(166, 193, 238, 0.12);
  }
`,iR=b.span`
  width: 16px;
  text-align: center;
  color: #6b90d9;
`,oR=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-top: 1px solid #eee;
`,lR=b.div`
  flex: 1;
  min-height: 24px;
  color: #555;
`,sR=b.button`
  min-width: 110px;
  height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 10px;
  font-weight: 700;
  color: #fff;
  background: ${n=>n.disabled?"rgba(166,193,238,.4)":"rgba(166,193,238,.95)"};
  cursor: ${n=>n.disabled?"not-allowed":"pointer"};
  transition: 0.15s;
  &:hover {
    background: ${n=>n.disabled?"rgba(166,193,238,.4)":"rgba(107,144,217,1)"};
  }
`,Kn=Object.create(null);Kn.open="0";Kn.close="1";Kn.ping="2";Kn.pong="3";Kn.message="4";Kn.upgrade="5";Kn.noop="6";const Qs=Object.create(null);Object.keys(Kn).forEach(n=>{Qs[Kn[n]]=n});const Id={type:"error",data:"parser error"},a1=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",i1=typeof ArrayBuffer=="function",o1=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Th=({type:n,data:a},i,l)=>a1&&a instanceof Blob?i?l(a):cb(a,l):i1&&(a instanceof ArrayBuffer||o1(a))?i?l(a):cb(new Blob([a]),l):l(Kn[n]+(a||"")),cb=(n,a)=>{const i=new FileReader;return i.onload=function(){const l=i.result.split(",")[1];a("b"+(l||""))},i.readAsDataURL(n)};function ub(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Rd;function cR(n,a){if(a1&&n.data instanceof Blob)return n.data.arrayBuffer().then(ub).then(a);if(i1&&(n.data instanceof ArrayBuffer||o1(n.data)))return a(ub(n.data));Th(n,!1,i=>{Rd||(Rd=new TextEncoder),a(Rd.encode(i))})}const fb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<fb.length;n++)Qo[fb.charCodeAt(n)]=n;const uR=n=>{let a=n.length*.75,i=n.length,l,c=0,d,h,p,x;n[n.length-1]==="="&&(a--,n[n.length-2]==="="&&a--);const g=new ArrayBuffer(a),y=new Uint8Array(g);for(l=0;l<i;l+=4)d=Qo[n.charCodeAt(l)],h=Qo[n.charCodeAt(l+1)],p=Qo[n.charCodeAt(l+2)],x=Qo[n.charCodeAt(l+3)],y[c++]=d<<2|h>>4,y[c++]=(h&15)<<4|p>>2,y[c++]=(p&3)<<6|x&63;return g},fR=typeof ArrayBuffer=="function",_h=(n,a)=>{if(typeof n!="string")return{type:"message",data:l1(n,a)};const i=n.charAt(0);return i==="b"?{type:"message",data:dR(n.substring(1),a)}:Qs[i]?n.length>1?{type:Qs[i],data:n.substring(1)}:{type:Qs[i]}:Id},dR=(n,a)=>{if(fR){const i=uR(n);return l1(i,a)}else return{base64:!0,data:n}},l1=(n,a)=>{switch(a){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},s1="",hR=(n,a)=>{const i=n.length,l=new Array(i);let c=0;n.forEach((d,h)=>{Th(d,!1,p=>{l[h]=p,++c===i&&a(l.join(s1))})})},pR=(n,a)=>{const i=n.split(s1),l=[];for(let c=0;c<i.length;c++){const d=_h(i[c],a);if(l.push(d),d.type==="error")break}return l};function gR(){return new TransformStream({transform(n,a){cR(n,i=>{const l=i.length;let c;if(l<126)c=new Uint8Array(1),new DataView(c.buffer).setUint8(0,l);else if(l<65536){c=new Uint8Array(3);const d=new DataView(c.buffer);d.setUint8(0,126),d.setUint16(1,l)}else{c=new Uint8Array(9);const d=new DataView(c.buffer);d.setUint8(0,127),d.setBigUint64(1,BigInt(l))}n.data&&typeof n.data!="string"&&(c[0]|=128),a.enqueue(c),a.enqueue(i)})}})}let kd;function Ns(n){return n.reduce((a,i)=>a+i.length,0)}function zs(n,a){if(n[0].length===a)return n.shift();const i=new Uint8Array(a);let l=0;for(let c=0;c<a;c++)i[c]=n[0][l++],l===n[0].length&&(n.shift(),l=0);return n.length&&l<n[0].length&&(n[0]=n[0].slice(l)),i}function xR(n,a){kd||(kd=new TextDecoder);const i=[];let l=0,c=-1,d=!1;return new TransformStream({transform(h,p){for(i.push(h);;){if(l===0){if(Ns(i)<1)break;const x=zs(i,1);d=(x[0]&128)===128,c=x[0]&127,c<126?l=3:c===126?l=1:l=2}else if(l===1){if(Ns(i)<2)break;const x=zs(i,2);c=new DataView(x.buffer,x.byteOffset,x.length).getUint16(0),l=3}else if(l===2){if(Ns(i)<8)break;const x=zs(i,8),g=new DataView(x.buffer,x.byteOffset,x.length),y=g.getUint32(0);if(y>Math.pow(2,21)-1){p.enqueue(Id);break}c=y*Math.pow(2,32)+g.getUint32(4),l=3}else{if(Ns(i)<c)break;const x=zs(i,c);p.enqueue(_h(d?x:kd.decode(x),a)),l=0}if(c===0||c>n){p.enqueue(Id);break}}}})}const c1=4;function ht(n){if(n)return mR(n)}function mR(n){for(var a in ht.prototype)n[a]=ht.prototype[a];return n}ht.prototype.on=ht.prototype.addEventListener=function(n,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(a),this};ht.prototype.once=function(n,a){function i(){this.off(n,i),a.apply(this,arguments)}return i.fn=a,this.on(n,i),this};ht.prototype.off=ht.prototype.removeListener=ht.prototype.removeAllListeners=ht.prototype.removeEventListener=function(n,a){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+n];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var l,c=0;c<i.length;c++)if(l=i[c],l===a||l.fn===a){i.splice(c,1);break}return i.length===0&&delete this._callbacks["$"+n],this};ht.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var a=new Array(arguments.length-1),i=this._callbacks["$"+n],l=1;l<arguments.length;l++)a[l-1]=arguments[l];if(i){i=i.slice(0);for(var l=0,c=i.length;l<c;++l)i[l].apply(this,a)}return this};ht.prototype.emitReserved=ht.prototype.emit;ht.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};ht.prototype.hasListeners=function(n){return!!this.listeners(n).length};const yc=typeof Promise=="function"&&typeof Promise.resolve=="function"?a=>Promise.resolve().then(a):(a,i)=>i(a,0),vn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),bR="arraybuffer";function u1(n,...a){return a.reduce((i,l)=>(n.hasOwnProperty(l)&&(i[l]=n[l]),i),{})}const yR=vn.setTimeout,vR=vn.clearTimeout;function vc(n,a){a.useNativeTimers?(n.setTimeoutFn=yR.bind(vn),n.clearTimeoutFn=vR.bind(vn)):(n.setTimeoutFn=vn.setTimeout.bind(vn),n.clearTimeoutFn=vn.clearTimeout.bind(vn))}const wR=1.33;function SR(n){return typeof n=="string"?jR(n):Math.ceil((n.byteLength||n.size)*wR)}function jR(n){let a=0,i=0;for(let l=0,c=n.length;l<c;l++)a=n.charCodeAt(l),a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(l++,i+=4);return i}function f1(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ER(n){let a="";for(let i in n)n.hasOwnProperty(i)&&(a.length&&(a+="&"),a+=encodeURIComponent(i)+"="+encodeURIComponent(n[i]));return a}function TR(n){let a={},i=n.split("&");for(let l=0,c=i.length;l<c;l++){let d=i[l].split("=");a[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return a}class _R extends Error{constructor(a,i,l){super(a),this.description=i,this.context=l,this.type="TransportError"}}class Ch extends ht{constructor(a){super(),this.writable=!1,vc(this,a),this.opts=a,this.query=a.query,this.socket=a.socket,this.supportsBinary=!a.forceBase64}onError(a,i,l){return super.emitReserved("error",new _R(a,i,l)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(a){this.readyState==="open"&&this.write(a)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(a){const i=_h(a,this.socket.binaryType);this.onPacket(i)}onPacket(a){super.emitReserved("packet",a)}onClose(a){this.readyState="closed",super.emitReserved("close",a)}pause(a){}createUri(a,i={}){return a+"://"+this._hostname()+this._port()+this.opts.path+this._query(i)}_hostname(){const a=this.opts.hostname;return a.indexOf(":")===-1?a:"["+a+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(a){const i=ER(a);return i.length?"?"+i:""}}class CR extends Ch{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(a){this.readyState="pausing";const i=()=>{this.readyState="paused",a()};if(this._polling||!this.writable){let l=0;this._polling&&(l++,this.once("pollComplete",function(){--l||i()})),this.writable||(l++,this.once("drain",function(){--l||i()}))}else i()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(a){const i=l=>{if(this.readyState==="opening"&&l.type==="open"&&this.onOpen(),l.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(l)};pR(a,this.socket.binaryType).forEach(i),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const a=()=>{this.write([{type:"close"}])};this.readyState==="open"?a():this.once("open",a)}write(a){this.writable=!1,hR(a,i=>{this.doWrite(i,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const a=this.opts.secure?"https":"http",i=this.query||{};return this.opts.timestampRequests!==!1&&(i[this.opts.timestampParam]=f1()),!this.supportsBinary&&!i.sid&&(i.b64=1),this.createUri(a,i)}}let d1=!1;try{d1=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const RR=d1;function kR(){}class AR extends CR{constructor(a){if(super(a),typeof location<"u"){const i=location.protocol==="https:";let l=location.port;l||(l=i?"443":"80"),this.xd=typeof location<"u"&&a.hostname!==location.hostname||l!==a.port}}doWrite(a,i){const l=this.request({method:"POST",data:a});l.on("success",i),l.on("error",(c,d)=>{this.onError("xhr post error",c,d)})}doPoll(){const a=this.request();a.on("data",this.onData.bind(this)),a.on("error",(i,l)=>{this.onError("xhr poll error",i,l)}),this.pollXhr=a}}let wi=class Fs extends ht{constructor(a,i,l){super(),this.createRequest=a,vc(this,l),this._opts=l,this._method=l.method||"GET",this._uri=i,this._data=l.data!==void 0?l.data:null,this._create()}_create(){var a;const i=u1(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");i.xdomain=!!this._opts.xd;const l=this._xhr=this.createRequest(i);try{l.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){l.setDisableHeaderCheck&&l.setDisableHeaderCheck(!0);for(let c in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(c)&&l.setRequestHeader(c,this._opts.extraHeaders[c])}}catch{}if(this._method==="POST")try{l.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{l.setRequestHeader("Accept","*/*")}catch{}(a=this._opts.cookieJar)===null||a===void 0||a.addCookies(l),"withCredentials"in l&&(l.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(l.timeout=this._opts.requestTimeout),l.onreadystatechange=()=>{var c;l.readyState===3&&((c=this._opts.cookieJar)===null||c===void 0||c.parseCookies(l.getResponseHeader("set-cookie"))),l.readyState===4&&(l.status===200||l.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof l.status=="number"?l.status:0)},0))},l.send(this._data)}catch(c){this.setTimeoutFn(()=>{this._onError(c)},0);return}typeof document<"u"&&(this._index=Fs.requestsCount++,Fs.requests[this._index]=this)}_onError(a){this.emitReserved("error",a,this._xhr),this._cleanup(!0)}_cleanup(a){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=kR,a)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Fs.requests[this._index],this._xhr=null}}_onLoad(){const a=this._xhr.responseText;a!==null&&(this.emitReserved("data",a),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};wi.requestsCount=0;wi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",db);else if(typeof addEventListener=="function"){const n="onpagehide"in vn?"pagehide":"unload";addEventListener(n,db,!1)}}function db(){for(let n in wi.requests)wi.requests.hasOwnProperty(n)&&wi.requests[n].abort()}const OR=(function(){const n=h1({xdomain:!1});return n&&n.responseType!==null})();class MR extends AR{constructor(a){super(a);const i=a&&a.forceBase64;this.supportsBinary=OR&&!i}request(a={}){return Object.assign(a,{xd:this.xd},this.opts),new wi(h1,this.uri(),a)}}function h1(n){const a=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!a||RR))return new XMLHttpRequest}catch{}if(!a)try{return new vn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const p1=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class NR extends Ch{get name(){return"websocket"}doOpen(){const a=this.uri(),i=this.opts.protocols,l=p1?{}:u1(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(l.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(a,i,l)}catch(c){return this.emitReserved("error",c)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=a=>this.onClose({description:"websocket connection closed",context:a}),this.ws.onmessage=a=>this.onData(a.data),this.ws.onerror=a=>this.onError("websocket error",a)}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const l=a[i],c=i===a.length-1;Th(l,this.supportsBinary,d=>{try{this.doWrite(l,d)}catch{}c&&yc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const a=this.opts.secure?"wss":"ws",i=this.query||{};return this.opts.timestampRequests&&(i[this.opts.timestampParam]=f1()),this.supportsBinary||(i.b64=1),this.createUri(a,i)}}const Ad=vn.WebSocket||vn.MozWebSocket;class zR extends NR{createSocket(a,i,l){return p1?new Ad(a,i,l):i?new Ad(a,i):new Ad(a)}doWrite(a,i){this.ws.send(i)}}class DR extends Ch{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(a){return this.emitReserved("error",a)}this._transport.closed.then(()=>{this.onClose()}).catch(a=>{this.onError("webtransport error",a)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(a=>{const i=xR(Number.MAX_SAFE_INTEGER,this.socket.binaryType),l=a.readable.pipeThrough(i).getReader(),c=gR();c.readable.pipeTo(a.writable),this._writer=c.writable.getWriter();const d=()=>{l.read().then(({done:p,value:x})=>{p||(this.onPacket(x),d())}).catch(p=>{})};d();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const l=a[i],c=i===a.length-1;this._writer.write(l).then(()=>{c&&yc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var a;(a=this._transport)===null||a===void 0||a.close()}}const BR={websocket:zR,webtransport:DR,polling:MR},LR=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,UR=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Wd(n){if(n.length>8e3)throw"URI too long";const a=n,i=n.indexOf("["),l=n.indexOf("]");i!=-1&&l!=-1&&(n=n.substring(0,i)+n.substring(i,l).replace(/:/g,";")+n.substring(l,n.length));let c=LR.exec(n||""),d={},h=14;for(;h--;)d[UR[h]]=c[h]||"";return i!=-1&&l!=-1&&(d.source=a,d.host=d.host.substring(1,d.host.length-1).replace(/;/g,":"),d.authority=d.authority.replace("[","").replace("]","").replace(/;/g,":"),d.ipv6uri=!0),d.pathNames=$R(d,d.path),d.queryKey=HR(d,d.query),d}function $R(n,a){const i=/\/{2,9}/g,l=a.replace(i,"/").split("/");return(a.slice(0,1)=="/"||a.length===0)&&l.splice(0,1),a.slice(-1)=="/"&&l.splice(l.length-1,1),l}function HR(n,a){const i={};return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(l,c,d){c&&(i[c]=d)}),i}const eh=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ks=[];eh&&addEventListener("offline",()=>{Ks.forEach(n=>n())},!1);class ra extends ht{constructor(a,i){if(super(),this.binaryType=bR,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,a&&typeof a=="object"&&(i=a,a=null),a){const l=Wd(a);i.hostname=l.host,i.secure=l.protocol==="https"||l.protocol==="wss",i.port=l.port,l.query&&(i.query=l.query)}else i.host&&(i.hostname=Wd(i.host).host);vc(this,i),this.secure=i.secure!=null?i.secure:typeof location<"u"&&location.protocol==="https:",i.hostname&&!i.port&&(i.port=this.secure?"443":"80"),this.hostname=i.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=i.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},i.transports.forEach(l=>{const c=l.prototype.name;this.transports.push(c),this._transportsByName[c]=l}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},i),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=TR(this.opts.query)),eh&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ks.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(a){const i=Object.assign({},this.opts.query);i.EIO=c1,i.transport=a,this.id&&(i.sid=this.id);const l=Object.assign({},this.opts,{query:i,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[a]);return new this._transportsByName[a](l)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const a=this.opts.rememberUpgrade&&ra.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const i=this.createTransport(a);i.open(),this.setTransport(i)}setTransport(a){this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",i=>this._onClose("transport close",i))}onOpen(){this.readyState="open",ra.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(a){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const i=new Error("server error");i.code=a.data,this._onError(i);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data);break}}onHandshake(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this._pingInterval=a.pingInterval,this._pingTimeout=a.pingTimeout,this._maxPayload=a.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const a=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+a,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},a),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const a=this._getWritablePackets();this.transport.send(a),this._prevBufferLen=a.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let i=1;for(let l=0;l<this.writeBuffer.length;l++){const c=this.writeBuffer[l].data;if(c&&(i+=SR(c)),l>0&&i>this._maxPayload)return this.writeBuffer.slice(0,l);i+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const a=Date.now()>this._pingTimeoutTime;return a&&(this._pingTimeoutTime=0,yc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),a}write(a,i,l){return this._sendPacket("message",a,i,l),this}send(a,i,l){return this._sendPacket("message",a,i,l),this}_sendPacket(a,i,l,c){if(typeof i=="function"&&(c=i,i=void 0),typeof l=="function"&&(c=l,l=null),this.readyState==="closing"||this.readyState==="closed")return;l=l||{},l.compress=l.compress!==!1;const d={type:a,data:i,options:l};this.emitReserved("packetCreate",d),this.writeBuffer.push(d),c&&this.once("flush",c),this.flush()}close(){const a=()=>{this._onClose("forced close"),this.transport.close()},i=()=>{this.off("upgrade",i),this.off("upgradeError",i),a()},l=()=>{this.once("upgrade",i),this.once("upgradeError",i)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?l():a()}):this.upgrading?l():a()),this}_onError(a){if(ra.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",a),this._onClose("transport error",a)}_onClose(a,i){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),eh&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const l=Ks.indexOf(this._offlineEventListener);l!==-1&&Ks.splice(l,1)}this.readyState="closed",this.id=null,this.emitReserved("close",a,i),this.writeBuffer=[],this._prevBufferLen=0}}}ra.protocol=c1;class qR extends ra{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let a=0;a<this._upgrades.length;a++)this._probe(this._upgrades[a])}_probe(a){let i=this.createTransport(a),l=!1;ra.priorWebsocketSuccess=!1;const c=()=>{l||(i.send([{type:"ping",data:"probe"}]),i.once("packet",v=>{if(!l)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",i),!i)return;ra.priorWebsocketSuccess=i.name==="websocket",this.transport.pause(()=>{l||this.readyState!=="closed"&&(y(),this.setTransport(i),i.send([{type:"upgrade"}]),this.emitReserved("upgrade",i),i=null,this.upgrading=!1,this.flush())})}else{const S=new Error("probe error");S.transport=i.name,this.emitReserved("upgradeError",S)}}))};function d(){l||(l=!0,y(),i.close(),i=null)}const h=v=>{const S=new Error("probe error: "+v);S.transport=i.name,d(),this.emitReserved("upgradeError",S)};function p(){h("transport closed")}function x(){h("socket closed")}function g(v){i&&v.name!==i.name&&d()}const y=()=>{i.removeListener("open",c),i.removeListener("error",h),i.removeListener("close",p),this.off("close",x),this.off("upgrading",g)};i.once("open",c),i.once("error",h),i.once("close",p),this.once("close",x),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&a!=="webtransport"?this.setTimeoutFn(()=>{l||i.open()},200):i.open()}onHandshake(a){this._upgrades=this._filterUpgrades(a.upgrades),super.onHandshake(a)}_filterUpgrades(a){const i=[];for(let l=0;l<a.length;l++)~this.transports.indexOf(a[l])&&i.push(a[l]);return i}}let YR=class extends qR{constructor(a,i={}){const l=typeof a=="object"?a:i;(!l.transports||l.transports&&typeof l.transports[0]=="string")&&(l.transports=(l.transports||["polling","websocket","webtransport"]).map(c=>BR[c]).filter(c=>!!c)),super(a,l)}};function GR(n,a="",i){let l=n;i=i||typeof location<"u"&&location,n==null&&(n=i.protocol+"//"+i.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=i.protocol+n:n=i.host+n),/^(https?|wss?):\/\//.test(n)||(typeof i<"u"?n=i.protocol+"//"+n:n="https://"+n),l=Wd(n)),l.port||(/^(http|ws)$/.test(l.protocol)?l.port="80":/^(http|ws)s$/.test(l.protocol)&&(l.port="443")),l.path=l.path||"/";const d=l.host.indexOf(":")!==-1?"["+l.host+"]":l.host;return l.id=l.protocol+"://"+d+":"+l.port+a,l.href=l.protocol+"://"+d+(i&&i.port===l.port?"":":"+l.port),l}const VR=typeof ArrayBuffer=="function",XR=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,g1=Object.prototype.toString,PR=typeof Blob=="function"||typeof Blob<"u"&&g1.call(Blob)==="[object BlobConstructor]",QR=typeof File=="function"||typeof File<"u"&&g1.call(File)==="[object FileConstructor]";function Rh(n){return VR&&(n instanceof ArrayBuffer||XR(n))||PR&&n instanceof Blob||QR&&n instanceof File}function Zs(n,a){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let i=0,l=n.length;i<l;i++)if(Zs(n[i]))return!0;return!1}if(Rh(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Zs(n.toJSON(),!0);for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)&&Zs(n[i]))return!0;return!1}function FR(n){const a=[],i=n.data,l=n;return l.data=th(i,a),l.attachments=a.length,{packet:l,buffers:a}}function th(n,a){if(!n)return n;if(Rh(n)){const i={_placeholder:!0,num:a.length};return a.push(n),i}else if(Array.isArray(n)){const i=new Array(n.length);for(let l=0;l<n.length;l++)i[l]=th(n[l],a);return i}else if(typeof n=="object"&&!(n instanceof Date)){const i={};for(const l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=th(n[l],a));return i}return n}function KR(n,a){return n.data=nh(n.data,a),delete n.attachments,n}function nh(n,a){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<a.length)return a[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let i=0;i<n.length;i++)n[i]=nh(n[i],a);else if(typeof n=="object")for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(n[i]=nh(n[i],a));return n}const ZR=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],JR=5;var Me;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Me||(Me={}));class IR{constructor(a){this.replacer=a}encode(a){return(a.type===Me.EVENT||a.type===Me.ACK)&&Zs(a)?this.encodeAsBinary({type:a.type===Me.EVENT?Me.BINARY_EVENT:Me.BINARY_ACK,nsp:a.nsp,data:a.data,id:a.id}):[this.encodeAsString(a)]}encodeAsString(a){let i=""+a.type;return(a.type===Me.BINARY_EVENT||a.type===Me.BINARY_ACK)&&(i+=a.attachments+"-"),a.nsp&&a.nsp!=="/"&&(i+=a.nsp+","),a.id!=null&&(i+=a.id),a.data!=null&&(i+=JSON.stringify(a.data,this.replacer)),i}encodeAsBinary(a){const i=FR(a),l=this.encodeAsString(i.packet),c=i.buffers;return c.unshift(l),c}}function hb(n){return Object.prototype.toString.call(n)==="[object Object]"}class kh extends ht{constructor(a){super(),this.reviver=a}add(a){let i;if(typeof a=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");i=this.decodeString(a);const l=i.type===Me.BINARY_EVENT;l||i.type===Me.BINARY_ACK?(i.type=l?Me.EVENT:Me.ACK,this.reconstructor=new WR(i),i.attachments===0&&super.emitReserved("decoded",i)):super.emitReserved("decoded",i)}else if(Rh(a)||a.base64)if(this.reconstructor)i=this.reconstructor.takeBinaryData(a),i&&(this.reconstructor=null,super.emitReserved("decoded",i));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+a)}decodeString(a){let i=0;const l={type:Number(a.charAt(0))};if(Me[l.type]===void 0)throw new Error("unknown packet type "+l.type);if(l.type===Me.BINARY_EVENT||l.type===Me.BINARY_ACK){const d=i+1;for(;a.charAt(++i)!=="-"&&i!=a.length;);const h=a.substring(d,i);if(h!=Number(h)||a.charAt(i)!=="-")throw new Error("Illegal attachments");l.attachments=Number(h)}if(a.charAt(i+1)==="/"){const d=i+1;for(;++i&&!(a.charAt(i)===","||i===a.length););l.nsp=a.substring(d,i)}else l.nsp="/";const c=a.charAt(i+1);if(c!==""&&Number(c)==c){const d=i+1;for(;++i;){const h=a.charAt(i);if(h==null||Number(h)!=h){--i;break}if(i===a.length)break}l.id=Number(a.substring(d,i+1))}if(a.charAt(++i)){const d=this.tryParse(a.substr(i));if(kh.isPayloadValid(l.type,d))l.data=d;else throw new Error("invalid payload")}return l}tryParse(a){try{return JSON.parse(a,this.reviver)}catch{return!1}}static isPayloadValid(a,i){switch(a){case Me.CONNECT:return hb(i);case Me.DISCONNECT:return i===void 0;case Me.CONNECT_ERROR:return typeof i=="string"||hb(i);case Me.EVENT:case Me.BINARY_EVENT:return Array.isArray(i)&&(typeof i[0]=="number"||typeof i[0]=="string"&&ZR.indexOf(i[0])===-1);case Me.ACK:case Me.BINARY_ACK:return Array.isArray(i)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class WR{constructor(a){this.packet=a,this.buffers=[],this.reconPack=a}takeBinaryData(a){if(this.buffers.push(a),this.buffers.length===this.reconPack.attachments){const i=KR(this.reconPack,this.buffers);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const e6=Object.freeze(Object.defineProperty({__proto__:null,Decoder:kh,Encoder:IR,get PacketType(){return Me},protocol:JR},Symbol.toStringTag,{value:"Module"}));function An(n,a,i){return n.on(a,i),function(){n.off(a,i)}}const t6=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class x1 extends ht{constructor(a,i,l){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=a,this.nsp=i,l&&l.auth&&(this.auth=l.auth),this._opts=Object.assign({},l),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const a=this.io;this.subs=[An(a,"open",this.onopen.bind(this)),An(a,"packet",this.onpacket.bind(this)),An(a,"error",this.onerror.bind(this)),An(a,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...a){return a.unshift("message"),this.emit.apply(this,a),this}emit(a,...i){var l,c,d;if(t6.hasOwnProperty(a))throw new Error('"'+a.toString()+'" is a reserved event name');if(i.unshift(a),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const h={type:Me.EVENT,data:i};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof i[i.length-1]=="function"){const y=this.ids++,v=i.pop();this._registerAckCallback(y,v),h.id=y}const p=(c=(l=this.io.engine)===null||l===void 0?void 0:l.transport)===null||c===void 0?void 0:c.writable,x=this.connected&&!(!((d=this.io.engine)===null||d===void 0)&&d._hasPingExpired());return this.flags.volatile&&!p||(x?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(a,i){var l;const c=(l=this.flags.timeout)!==null&&l!==void 0?l:this._opts.ackTimeout;if(c===void 0){this.acks[a]=i;return}const d=this.io.setTimeoutFn(()=>{delete this.acks[a];for(let p=0;p<this.sendBuffer.length;p++)this.sendBuffer[p].id===a&&this.sendBuffer.splice(p,1);i.call(this,new Error("operation has timed out"))},c),h=(...p)=>{this.io.clearTimeoutFn(d),i.apply(this,p)};h.withError=!0,this.acks[a]=h}emitWithAck(a,...i){return new Promise((l,c)=>{const d=(h,p)=>h?c(h):l(p);d.withError=!0,i.push(d),this.emit(a,...i)})}_addToQueue(a){let i;typeof a[a.length-1]=="function"&&(i=a.pop());const l={id:this._queueSeq++,tryCount:0,pending:!1,args:a,flags:Object.assign({fromQueue:!0},this.flags)};a.push((c,...d)=>l!==this._queue[0]?void 0:(c!==null?l.tryCount>this._opts.retries&&(this._queue.shift(),i&&i(c)):(this._queue.shift(),i&&i(null,...d)),l.pending=!1,this._drainQueue())),this._queue.push(l),this._drainQueue()}_drainQueue(a=!1){if(!this.connected||this._queue.length===0)return;const i=this._queue[0];i.pending&&!a||(i.pending=!0,i.tryCount++,this.flags=i.flags,this.emit.apply(this,i.args))}packet(a){a.nsp=this.nsp,this.io._packet(a)}onopen(){typeof this.auth=="function"?this.auth(a=>{this._sendConnectPacket(a)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(a){this.packet({type:Me.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},a):a})}onerror(a){this.connected||this.emitReserved("connect_error",a)}onclose(a,i){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,i),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(a=>{if(!this.sendBuffer.some(l=>String(l.id)===a)){const l=this.acks[a];delete this.acks[a],l.withError&&l.call(this,new Error("socket has been disconnected"))}})}onpacket(a){if(a.nsp===this.nsp)switch(a.type){case Me.CONNECT:a.data&&a.data.sid?this.onconnect(a.data.sid,a.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Me.EVENT:case Me.BINARY_EVENT:this.onevent(a);break;case Me.ACK:case Me.BINARY_ACK:this.onack(a);break;case Me.DISCONNECT:this.ondisconnect();break;case Me.CONNECT_ERROR:this.destroy();const l=new Error(a.data.message);l.data=a.data.data,this.emitReserved("connect_error",l);break}}onevent(a){const i=a.data||[];a.id!=null&&i.push(this.ack(a.id)),this.connected?this.emitEvent(i):this.receiveBuffer.push(Object.freeze(i))}emitEvent(a){if(this._anyListeners&&this._anyListeners.length){const i=this._anyListeners.slice();for(const l of i)l.apply(this,a)}super.emit.apply(this,a),this._pid&&a.length&&typeof a[a.length-1]=="string"&&(this._lastOffset=a[a.length-1])}ack(a){const i=this;let l=!1;return function(...c){l||(l=!0,i.packet({type:Me.ACK,id:a,data:c}))}}onack(a){const i=this.acks[a.id];typeof i=="function"&&(delete this.acks[a.id],i.withError&&a.data.unshift(null),i.apply(this,a.data))}onconnect(a,i){this.id=a,this.recovered=i&&this._pid===i,this._pid=i,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(a=>this.emitEvent(a)),this.receiveBuffer=[],this.sendBuffer.forEach(a=>{this.notifyOutgoingListeners(a),this.packet(a)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(a=>a()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Me.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(a){return this.flags.compress=a,this}get volatile(){return this.flags.volatile=!0,this}timeout(a){return this.flags.timeout=a,this}onAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}prependAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}offAny(a){if(!this._anyListeners)return this;if(a){const i=this._anyListeners;for(let l=0;l<i.length;l++)if(a===i[l])return i.splice(l,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}prependAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}offAnyOutgoing(a){if(!this._anyOutgoingListeners)return this;if(a){const i=this._anyOutgoingListeners;for(let l=0;l<i.length;l++)if(a===i[l])return i.splice(l,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const i=this._anyOutgoingListeners.slice();for(const l of i)l.apply(this,a.data)}}}function Di(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Di.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var a=Math.random(),i=Math.floor(a*this.jitter*n);n=(Math.floor(a*10)&1)==0?n-i:n+i}return Math.min(n,this.max)|0};Di.prototype.reset=function(){this.attempts=0};Di.prototype.setMin=function(n){this.ms=n};Di.prototype.setMax=function(n){this.max=n};Di.prototype.setJitter=function(n){this.jitter=n};class rh extends ht{constructor(a,i){var l;super(),this.nsps={},this.subs=[],a&&typeof a=="object"&&(i=a,a=void 0),i=i||{},i.path=i.path||"/socket.io",this.opts=i,vc(this,i),this.reconnection(i.reconnection!==!1),this.reconnectionAttempts(i.reconnectionAttempts||1/0),this.reconnectionDelay(i.reconnectionDelay||1e3),this.reconnectionDelayMax(i.reconnectionDelayMax||5e3),this.randomizationFactor((l=i.randomizationFactor)!==null&&l!==void 0?l:.5),this.backoff=new Di({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(i.timeout==null?2e4:i.timeout),this._readyState="closed",this.uri=a;const c=i.parser||e6;this.encoder=new c.Encoder,this.decoder=new c.Decoder,this._autoConnect=i.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(a){return arguments.length?(this._reconnection=!!a,a||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(a){return a===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}reconnectionDelay(a){var i;return a===void 0?this._reconnectionDelay:(this._reconnectionDelay=a,(i=this.backoff)===null||i===void 0||i.setMin(a),this)}randomizationFactor(a){var i;return a===void 0?this._randomizationFactor:(this._randomizationFactor=a,(i=this.backoff)===null||i===void 0||i.setJitter(a),this)}reconnectionDelayMax(a){var i;return a===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,(i=this.backoff)===null||i===void 0||i.setMax(a),this)}timeout(a){return arguments.length?(this._timeout=a,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(a){if(~this._readyState.indexOf("open"))return this;this.engine=new YR(this.uri,this.opts);const i=this.engine,l=this;this._readyState="opening",this.skipReconnect=!1;const c=An(i,"open",function(){l.onopen(),a&&a()}),d=p=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",p),a?a(p):this.maybeReconnectOnOpen()},h=An(i,"error",d);if(this._timeout!==!1){const p=this._timeout,x=this.setTimeoutFn(()=>{c(),d(new Error("timeout")),i.close()},p);this.opts.autoUnref&&x.unref(),this.subs.push(()=>{this.clearTimeoutFn(x)})}return this.subs.push(c),this.subs.push(h),this}connect(a){return this.open(a)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const a=this.engine;this.subs.push(An(a,"ping",this.onping.bind(this)),An(a,"data",this.ondata.bind(this)),An(a,"error",this.onerror.bind(this)),An(a,"close",this.onclose.bind(this)),An(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(a){try{this.decoder.add(a)}catch(i){this.onclose("parse error",i)}}ondecoded(a){yc(()=>{this.emitReserved("packet",a)},this.setTimeoutFn)}onerror(a){this.emitReserved("error",a)}socket(a,i){let l=this.nsps[a];return l?this._autoConnect&&!l.active&&l.connect():(l=new x1(this,a,i),this.nsps[a]=l),l}_destroy(a){const i=Object.keys(this.nsps);for(const l of i)if(this.nsps[l].active)return;this._close()}_packet(a){const i=this.encoder.encode(a);for(let l=0;l<i.length;l++)this.engine.write(i[l],a.options)}cleanup(){this.subs.forEach(a=>a()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(a,i){var l;this.cleanup(),(l=this.engine)===null||l===void 0||l.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,i),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const a=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const i=this.backoff.duration();this._reconnecting=!0;const l=this.setTimeoutFn(()=>{a.skipReconnect||(this.emitReserved("reconnect_attempt",a.backoff.attempts),!a.skipReconnect&&a.open(c=>{c?(a._reconnecting=!1,a.reconnect(),this.emitReserved("reconnect_error",c)):a.onreconnect()}))},i);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}}onreconnect(){const a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}const Xo={};function Js(n,a){typeof n=="object"&&(a=n,n=void 0),a=a||{};const i=GR(n,a.path||"/socket.io"),l=i.source,c=i.id,d=i.path,h=Xo[c]&&d in Xo[c].nsps,p=a.forceNew||a["force new connection"]||a.multiplex===!1||h;let x;return p?x=new rh(l,a):(Xo[c]||(Xo[c]=new rh(l,a)),x=Xo[c]),i.query&&!a.query&&(a.query=i.queryKey),x.socket(i.path,a)}Object.assign(Js,{Manager:rh,Socket:x1,io:Js,connect:Js});const Ah="/mbtmi/assets/kar-Dz3DQpvr.jpg",Ds=Js("http://localhost:5900",{transports:["websocket"]}),n6=()=>{const[n,a]=w.useState([]),[i,l]=w.useState(""),c=w.useRef(null),d=Mb(),{state:h}=Dn(),p=h?.room,{user:x}=At(),g=v=>v.type==="sent"?null:p?.opponent_pic?`http://localhost:8080/uploads/${p.opponent_pic}`:Ah;w.useEffect(()=>{(async()=>{try{const S=await he.get(`http://localhost:5900/chat/history/${d.id}`);a(S.data.messages.map(C=>({...C,type:C.sender===x.user_id?"sent":"received",id:C._id})))}catch(S){console.error("메시지 불러오기 실패:",S)}})()},[d.id,p]),w.useEffect(()=>{c.current?.scrollIntoView({behavior:"smooth"})},[n]),w.useEffect(()=>{Ds.emit("join_room",{roomId:d.id,userId:x.user_id})},[d.id]),w.useEffect(()=>{const v=S=>{const C={...S,id:S.id||Date.now()+Math.random(),type:S.sender===x.user_id?"sent":"received"};S.roomId===d.id&&a(T=>[...T,C])};return Ds.on("message",v),()=>Ds.off("message",v)},[d.id]);const y=()=>{if(!i.trim())return;const v={roomId:d.id,sender:x.user_id,receiver:p.user1_id===x.user_id?p.user2_id:p.user1_id,text:i,date:new Date().toISOString()};Ds.emit("message",v),l("")};return u.jsxs(r6,{children:[u.jsxs(a6,{children:[n.map(v=>u.jsxs(i6,{type:v.type,children:[v.type==="received"&&u.jsx(o6,{src:g(v),alt:v.name}),u.jsx(l6,{type:v.type,children:u.jsx(s6,{children:v.text})})]},v.id)),u.jsx("div",{ref:c})]}),u.jsxs(c6,{children:[u.jsx(u6,{placeholder:"메시지...",value:i,onChange:v=>l(v.target.value),onKeyDown:v=>v.key==="Enter"&&y()}),u.jsx(f6,{onClick:y,children:"전송"})]})]})},r6=b.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`,a6=b.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`,i6=b.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  justify-content: ${n=>n.type==="sent"?"flex-end":"flex-start"};
`,o6=b.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`,l6=b.div`
  max-width: 60%;
  background: ${n=>n.type==="sent"?"#a6c1ee":"#ffffffa6"};
  color: ${n=>n.type==="sent"?"#fff":"#333"};
  padding: 8px 12px;
  border-radius: 15px;
  border-top-left-radius: ${n=>n.type==="sent"?"15px":"0"};
  border-top-right-radius: ${n=>n.type==="sent"?"0":"15px"};
  word-wrap: break-word;
`,s6=b.span`
  font-size: 10pt;
`,c6=b.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #fff;
`,u6=b.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
`,f6=b.button`
  margin-left: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: #4f9cff;
  color: white;
  cursor: pointer;
`,d6=()=>u.jsxs(h6,{children:[u.jsx(n6,{})," "]}),h6=b.div`
  min-height: 100dvh;
  width: 100%;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  box-sizing: border-box;
  gap: 10px;
`,p6=()=>{const n=Ne(),{state:a}=Dn(),i=a?.room,l=i?.opponent_name||"이름 없음",c=i?.opponent_pic?`http://localhost:8080/uploads/${i.opponent_pic}`:Ah;return u.jsxs(g6,{children:[u.jsxs(x6,{children:[u.jsx(m6,{onClick:()=>n(-1),children:"<"}),u.jsx(b6,{src:c,alt:"프로필"}),u.jsx(y6,{children:u.jsx(v6,{children:l})})]}),u.jsxs(w6,{children:[u.jsx(pb,{children:"♡"}),u.jsx(pb,{children:"📞"})]})]})},g6=b.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,x6=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,m6=b.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`,b6=b.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,y6=b.div`
  display: flex;
  flex-direction: column;
`,v6=b.span`
  font-weight: bold;
  font-size: 14pt;
`;b.span`
  font-size: 10pt;
  color: #555;
`;const w6=b.div`
  display: flex;
  align-items: center;
`,pb=b.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`,S6=({room:n,user:a,onClick:i})=>{const l={roomId:n.room_id,user2Id:n.user2_id,name:n.opponent_name,pic:n.opponent_pic},c=l.pic?`http://localhost:8080/uploads/${l.pic}`:a?.photo_url?`http://localhost:8080/uploads/${a.photo_url}`:Ah;return console.log("room.opponent_pic:",n.opponent_pic),console.log("user.photo_url:",a?.photo_url),u.jsx(j6,{onClick:i,children:u.jsxs(E6,{children:[u.jsx(C6,{src:c,alt:l.name,draggable:!1,style:{userSelect:"none",WebkitUserDrag:"none"}}),u.jsx(T6,{children:u.jsx(_6,{children:l.name})})]})})},j6=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  overflow-y: hidden;
  width: 100vw;
  /* 파스텔톤 배경 그라데이션 */
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
`,E6=b.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`,T6=b.h2`
  font-size: 10pt;
`,_6=b.div`
  font-size: 10pt;
`;b.div`
  opacity: 80%;
`;b.div`
  font-size: 5pt;
`;const C6=b.img`
  padding: 0px 15px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`,R6=()=>{const n=Ne(),{user:a}=At(),[i,l]=w.useState([]);return w.useEffect(()=>{(async()=>{const d=await he.get("/api/chat",{params:{userId:a.user_id}});l(d.data)})()},[]),u.jsxs(k6,{children:[u.jsx("h2",{children:"chatting list"}),u.jsx(A6,{children:i.map(c=>u.jsx(S6,{onClick:()=>n(`/chat/${c.room_id}`,{state:{room:c}}),room:c},c.room_id))})]})};b.button`
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #ff6b6b;
    color: white;
    border: none;
    cursor: pointer;
`;const k6=b.div`
    margin: -50px 10px;
    align-items: center;
    gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`,A6=b.div`
    margin-bottom: 10px;
    font-size: 25pt;
`,O6=({onClose:n})=>{const{formData:a}=Ot(),i=`${a?.mbti?.EI??""}${a?.mbti?.SN??""}${a?.mbti?.TF??""}${a?.mbti?.JP??""}`;return w.useEffect(()=>{const l=d=>d.key==="Escape"&&n?.();document.addEventListener("keydown",l);const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",l),document.body.style.overflow=c}},[n]),qb.createPortal(u.jsx(M6,{onClick:n,children:u.jsxs(N6,{onClick:l=>l.stopPropagation(),children:[u.jsx(z6,{onClick:n,"aria-label":"close",children:"×"}),u.jsxs(D6,{children:[u.jsx(B6,{src:a.profile?.preview||kt,alt:"profile"}),u.jsxs(L6,{children:[a.name,"(",a.age,") / ",i]}),u.jsx(U6,{children:a.location}),u.jsxs($6,{children:["성격"," ",(a.introTags??[]).map((l,c)=>u.jsx(gb,{children:l},`t-${c}`))]}),u.jsxs(H6,{children:["취미"," ",(a.hobby??[]).map((l,c)=>u.jsx(gb,{children:l},`h-${c}`))]})]}),u.jsx(q6,{children:u.jsx(Y6,{onClick:n,children:"닫기"})})]})}),document.body)},M6=b.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`,N6=b.div`
    width: 48vh;
    height: 92vh;
    overflow: auto;
    border-radius: 20px;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative;
    padding: 18px 16px 16px;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`,z6=b.button`
    position: absolute;
    top: 8px;
    right: 10px;
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
`,D6=b.div`
    width: 85%;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`,B6=b.img`
    width: 85%;
    border-radius: 20px;
    object-fit: cover;
`,L6=b.div`
    font-size: 20px;
    font-weight: bold;
`,U6=b.div`
    font-size: 17px;
    font-weight: bold;
`,$6=b.div`
    /* 카드 안에서 줄바꿈되며 감싸지기 */
    align-self: stretch;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* ⭐ 줄바꿈 */
    gap: 10px 8px;
    justify-content: center;
    margin-top: 4px;
    font-size: 20px;
    font-weight: bold;
`,H6=b.div`
    /* 카드 안에서 줄바꿈되며 감싸지기 */
    align-self: stretch;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* ⭐ 줄바꿈 */
    gap: 10px 8px;
    justify-content: center;
    margin-top: 4px;
    font-size: 20px;
    font-weight: bold;
`,gb=b.span`
    display: inline-flex;
    align-items: center;
    background: #fbc2eb;
    color: #333;
    padding: 6px 10px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
`,q6=b.div`
    margin-top: 12px;
    display: flex;
    justify-content: center;
`,Y6=b.button`
    min-width: 110px;
    height: 44px;
    padding: 0 16px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background: rgba(255, 255, 255, 0.5);
    }
`,G6=()=>{const n=Ne(),{formData:a,setFormData:i}=Ot(),{sendFormData:l}=At(),[c,d]=w.useState(null),[h,p]=w.useState(null),[x,g]=w.useState(!1),v=Dn().state?.userId;w.useEffect(()=>{window.history.pushState(null,"",window.location.href);const T=_=>{_.preventDefault(),window.history.replaceState(null,"",window.location.href)};return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]);const S=T=>{const _=T.target.files?.[0];if(!_)return;const R=new FileReader;R.onloadend=()=>{const A=R.result;d(_),p(A),i(N=>({...N,profile:{file:_,preview:A}}))},R.readAsDataURL(_)},C=async()=>{if(!c){alert("프로필 사진을 선택해주세요!");return}try{const T=new FormData;T.append("userId",v),T.append("profileFile",c),(await he.post("/api/profilephoto",T,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}})).status===200?(alert("프로필 사진 업로드 완료!"),n("/account01")):alert("업로드 실패!")}catch(T){console.error("프로필 업로드 에러:",T),alert("업로드 중 오류가 발생했습니다.")}};return u.jsxs(Na,{children:[u.jsx(X6,{children:u.jsxs(P6,{children:[u.jsx("div",{children:"프로필 사진 업로드"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[u.jsx("input",{type:"file",accept:"image/*",onChange:S,style:{margin:"20px"}}),h&&u.jsx(V6,{src:h,alt:"미리보기"})]})]})}),u.jsxs(Q6,{children:[u.jsxs(m1,{onClick:()=>g(!0),children:["내 카드 ",u.jsx("br",{})," 미리보기"]}),u.jsx(F6,{onClick:C,children:"작성 완료"})]}),x&&u.jsx(O6,{onClose:()=>g(!1)})]})},V6=b.img`
  width: 200px;
  height: 200px;
  border-radius: 8%;
  object-fit: cover;
  border: 2px solid #a6c1ee;
  margin-top: 8px;
`,X6=b.div`
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    transparent 100%
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`,P6=b.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`,Q6=b.div`
  display: flex;
  gap: 20px;
`,m1=b.div`
  width: 100px;
  height: 30px;
  padding: 12px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.25),
    -6px -6px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.3),
      inset -4px -4px 12px rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(1px);
  }
`,F6=b(m1)``,K6="/mbtmi/assets/postsample-D32okWfz.jpeg",b1=({onClose:n,profileUser:a})=>{const{formData:i}=Ot();Ne();const[l,c]=w.useState(new Set),{user:d}=At();`${i?.mbti?.EI??""}${i?.mbti?.SN??""}${i?.mbti?.TF??""}${i?.mbti?.JP??""}`,w.useEffect(()=>{const p=g=>g.key==="Escape"&&n?.();document.addEventListener("keydown",p);const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",p),document.body.style.overflow=x}},[n]),w.useEffect(()=>{(async()=>{if(d)try{const x=await he.get(`/api/hearts/my/${d.user_id}`);c(new Set(x.data))}catch(x){console.error("내 하트 정보 불러오기 실패:",x)}})()},[d]);const h=async()=>{if(!(!d||!a))try{(await he.post(`/api/hearts/toggle?fromUser=${d.user_id}&toUser=${a.user_id}`)).data?c(x=>new Set([...x,a.user_id])):c(x=>{const g=new Set([...x]);return g.delete(a.user_id),g})}catch(p){console.error("하트 요청 실패:",p)}};return a?qb.createPortal(u.jsx(Z6,{onClick:n,children:u.jsxs(J6,{onClick:p=>p.stopPropagation(),children:[u.jsx(I6,{onClick:n,children:"×"}),u.jsx(W6,{src:a.photo_url?`http://localhost:8080/uploads/${a.photo_url}`:kt,alt:"profile"}),u.jsxs(ek,{children:[a.name," (",a.birth_date??"??",") /"," ",a.mbti??"??"]}),u.jsx(tk,{children:a.location??"지역 정보 없음"}),u.jsxs(nk,{children:[d?.user_id!==a.user_id&&u.jsx(rk,{$active:l.has(a.user_id),onClick:h,children:l.has(a.user_id)?"❤️":"🤍"}),d?.user_id===a.user_id&&u.jsx("p",{style:{margin:0,color:"#999"},children:"나의 프로필"})]})]})}),document.body):null},Z6=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`,J6=b.div`
  width: 40vh;
  height: 80vh;
  overflow: auto;
  border-radius: 20px;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
  padding: 18px 16px 16px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`,I6=b.button`
  position: absolute;
  top: 8px;
  right: 10px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
`,W6=b.img`
  width: 85%;
  border-radius: 20px;
  height: 280px;
  object-fit: cover;
`,ek=b.div`
  font-size: 20px;
  font-weight: bold;
`,tk=b.div`
  font-size: 17px;
  font-weight: bold;
`;b.div`
  /* 카드 안에서 줄바꿈되며 감싸지기 */
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* ⭐ 줄바꿈 */
  gap: 10px 8px;
  justify-content: center;
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
`;b.span`
  display: inline-flex;
  align-items: center;
  background: #fbc2eb;
  color: #333;
  padding: 6px 10px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;const nk=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,rk=b.button`
  padding: 10px;
  border-radius: 12px;
  font-size: 30px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;

  color: ${n=>n.$active?"#f23737":"#555"};

  &:hover {
    transform: scale(1.1);
  }
`,ak="/mbtmi/assets/plus-CMzofadN.png",ik=()=>{const n=Ne(),{user:a}=At(),i=a?.user_id,[l,c]=w.useState(!1),[d,h]=w.useState(null),[p,x]=w.useState([]),[g,y]=w.useState(null),v="http://localhost:8080",[S,C]=w.useState(null),[T,_]=w.useState(""),[R,A]=w.useState("");w.useEffect(()=>{(async()=>{try{const Z=await he.get("/posts/postsmain");x(Z.data)}catch(Z){console.error("게시글 불러오기 실패:",Z)}})()},[]);const N=async F=>{if(!a)return alert("로그인이 필요합니다!");try{const Z=await he.post(`${v}/posts/toggleLike`,null,{params:{postId:F,userId:a.user_id},withCredentials:!0}),{liked:ue,likeCount:I}=Z.data;x(le=>le.map(ie=>ie.post_id===F?{...ie,liked:ue,like_count:I}:ie))}catch(Z){console.error("좋아요 실패:",Z)}},z=async F=>{if(!T||!R){alert("신고 사유와 내용을 입력해주세요.");return}try{await he.post("/reports",{reported_id:F,reporter_id:i,reason:T,content:R}),alert("신고가 접수되었습니다."),C(null),_(""),A("")}catch(Z){console.error("신고 실패:",Z),alert("신고 접수에 실패했습니다.")}},P=F=>{h(Z=>Z===F?null:F)},$=async F=>{if(window.confirm("정말로 삭제하시겠습니까?"))try{await he.delete(`/posts/${F}`),x(Z=>Z.filter(ue=>ue.post_id!==F))}catch(Z){console.error("게시글 삭제 실패:",Z),alert("삭제에 실패했습니다.")}};return u.jsxs(ok,{children:[p.length===0?u.jsx("p",{children:"loading ..."}):p.map(F=>u.jsxs(lk,{children:[u.jsxs(uk,{children:[u.jsxs(fk,{children:[u.jsx(dk,{src:F.photo_url?`http://localhost:8080/uploads/${F.photo_url}`:K6,alt:"프로필",onClick:()=>{y(F),c(!0)},style:{cursor:"pointer"}}),u.jsxs(hk,{children:[u.jsxs("div",{className:"name",children:[u.jsx("strong",{children:F.name})," ",u.jsx("span",{className:"mbti",children:F.mbti})]}),u.jsx("span",{className:"time",children:new Date(F.created_at).toLocaleString()})]})]}),u.jsx(gk,{children:F.user_id===i&&u.jsxs(u.Fragment,{children:[u.jsx(pk,{onClick:()=>P(F.post_id),children:"⋯"}),d===F.post_id&&u.jsxs(xk,{children:[u.jsx(xb,{onClick:()=>n(`/updatepost/${F.post_id}`),children:"글 수정하기"}),u.jsx(xb,{onClick:()=>$(F.post_id),children:"글 삭제하기"})]})]})})]}),F.image_url&&u.jsx(mk,{src:`http://localhost:8080/uploads/${F.image_url}`,alt:"게시글 이미지"}),F.text&&u.jsx(bk,{children:F.text}),u.jsxs(yk,{children:[u.jsx(vk,{filled:F.liked,onClick:()=>N(F.post_id),children:"♥"}),u.jsx("span",{children:F.like_count})]}),S===F.post_id&&u.jsxs(Sk,{children:[u.jsx("input",{type:"text",placeholder:"신고 사유",value:T,onChange:Z=>_(Z.target.value)}),u.jsx("textarea",{placeholder:"신고 상세 내역",value:R,onChange:Z=>A(Z.target.value)}),u.jsx("button",{onClick:()=>z(F.user_id),children:"신고 제출"}),u.jsx("button",{onClick:()=>C(null),children:"취소"})]}),u.jsx(wk,{})]},F.post_id)),l&&u.jsx(b1,{onClose:()=>c(!1),profileUser:g}),u.jsx(sk,{onClick:()=>n("/addpost"),children:u.jsx(ck,{src:ak,alt:"pluspng"})})]})},ok=b.main`
    flex: 1;
    overflow-y: auto;
    padding: 12px calc(12px + env(safe-area-inset-left, 0))
        calc(88px + env(safe-area-inset-bottom, 0))
        calc(12px + env(safe-area-inset-right, 0));
`,lk=b.article`
    background: #ffffff77;
    border-radius: 16px;
    box-shadow: 2px 6px rgba(0, 0, 0, 0.05);
    padding: 16px 14px 12px;
    margin: 0 auto 18px;
`,sk=b.div`
    position: fixed;
    top: 77%;
    left: 82%;
    display: flex;
    width: 44px;
    height: 45px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
`,ck=b.img`
    width: 54px;
    height: 54px;
    border-radius: 100%;
`,uk=b.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`,fk=b.div`
    display: flex;
    gap: 12px;
    align-items: center;
`,dk=b.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`,hk=b.div`
    line-height: 1.2;
    .name {
        font-size: 20px;
        color: black;
    }
    .mbti {
        color: #4f5a60;
        font-weight: 600;
    }
    .time {
        display: block;
        margin-top: 4px;
        color: #646666;
        font-size: 15px;
    }
`,pk=b.button`
    appearance: none;
    border: 0;
    padding: 0;
    background: none;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    color: black;
`,gk=b.div`
    position: relative;
`,xk=b.div`
    position: absolute;
    top: 30px;
    right: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    z-index: 100;
`,xb=b.button`
    display: block;
    width: 140px;
    padding: 10px 14px;
    border: none;
    background: white;
    text-align: left;
    font-size: 15px;
    color: black;
    cursor: pointer;
    &:hover {
        background: #f3f3f3;
    }
`,mk=b.img`
    width: 100%;
    display: block;
    border-radius: 12px;
    margin: 8px 0 12px;
    object-fit: cover;
`,bk=b.p`
    margin: 6px 0 12px;
    font-size: 18px;
    line-height: 1.45;
    color: black;
`,yk=b.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    color: #050505;
`,vk=b.button`
    background: transparent;
    font-size: 28px;
    line-height: 1;
    color: ${n=>n.filled?"#f23737":"#ccc"};
    padding: 2%;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
`,wk=b.hr`
    border: 0;
    border-top: 1px solid #cfe8ee;
    margin: 18px 0 6px;
`,Sk=b.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 10px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #fafafa;

    input,
    textarea {
        width: inherit;
        padding: 8px;
        margin-bottom: 8px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }

    textarea {
        min-height: 80px;
        resize: none;
    }

    button {
        margin-right: 8px;
        padding: 6px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
`,jk=()=>u.jsxs(Ek,{children:[u.jsx(Tk,{children:u.jsx(_k,{children:"TMI"})}),u.jsx("hr",{})]}),Ek=b.nav`
  position: sticky; /* 화면 하단 고정 */
  left: 0;
  right: 0;
  top: 0;
  border-top: 1px solid #cfe8ee;
  padding: 10px 12px calc(env(safe-area-inset-bottom, 0) + 10px);
  z-index: 10;
  width: inherit;
`,Tk=b.div`
  display: flex;
  justify-content: center;
`,_k=b.button`
  padding: 0;
  background: none;
  color: #363535;
  font-size: 25px;
  font-weight: bold;
`,mb=({currentUser:n})=>u.jsxs(Na,{children:[u.jsx(jk,{}),u.jsx(ik,{}),u.jsx(ia,{currentUser:n})]}),Ck=({currentUser:n,activity:a,btn:i,profile:l,onClick:c,onDelete:d,profileUser:h,profileImage:p})=>{console.log("currentUser:",n);const x=async g=>{if(g.stopPropagation(),!n||!n.user_id){console.error("currentUser가 없습니다.");return}try{const y=await he.post("/api/hearts/toggle",null,{params:{fromUser:n.user_id,toUser:l.userId}});d&&d(l.userId)}catch{}};return u.jsx(kk,{onClick:c,children:u.jsxs(Ak,{children:[u.jsx(Mk,{src:p??logoimage,alt:`${h?.name} 프로필`,draggable:!1}),u.jsx(Ok,{children:a}),u.jsx(Rk,{onClick:x,children:i})]})})},Rk=b.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #252424ff;
  color: white;
  cursor: pointer;
`,kk=b.div`
  margin: 15px 0;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ak=b.div`
  display: flex;
  width: 350px;
  align-items: center;
  gap: 10px;
`,Ok=b.h2`
  margin-left: 10px;
  font-size: 10pt;
  min-width: 190px;
`,Mk=b.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`,y1=({name:n,activity:a,profileImage:i,mutual:l,currentUser:c,targetUser:d,onClose:h})=>{const p=Ne(),x=async()=>{if(l)try{const y={roomId:(await he.post(`/api/new_chat_create?fromUser=${c.user_id}&toUser=${d.userId}`)).data,user1_id:c.user_id,user2_id:d.userId};p(`/chat/${y.roomId}`,{state:{room:y}})}catch(g){console.error("채팅방 생성 실패:",g)}};return u.jsx(Nk,{onClick:h,children:u.jsxs(zk,{onClick:g=>g.stopPropagation(),children:[u.jsx(Dk,{src:i===kt?kt:i?i.startsWith("http")?i:`http://localhost:8080/${i}`:kt,alt:`${n} 프로필`}),u.jsx(Bk,{children:a}),u.jsx(Lk,{$isActive:l,onClick:x,children:"채팅 시작"})]})})},Nk=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`,zk=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  height: 450px;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  padding: 20px;
  border-radius: 12px;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 90px;
`,Dk=b.img`
  width: 100%;
  max-height: 350px; /* 최대 높이 제한 */
  border-radius: 20px;
  object-fit: cover; /* 비율 유지 + 넘치면 잘림 */
`,Bk=b.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
`,Lk=b.button`
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: ${({$isActive:n})=>n?"pointer":"default"};
  background-color: ${({$isActive:n})=>n?"#4a90e2":"#ccc"};
  color: ${({$isActive:n})=>n?"#fff":"#666"};
  border: none;
  pointer-events: ${({$isActive:n})=>n?"auto":"none"};
  transition: background-color 0.2s, color 0.2s;
`,Uk=()=>{const[n,a]=w.useState(!1),[i,l]=w.useState(null),[c,d]=w.useState(!1),h=Ne(),{user:p}=At(),[x,g]=w.useState([]),[y,v]=w.useState(!0),[S,C]=w.useState(1),T=6,_={name:"Like💜"},R={btn:[{label:"보낸 내역",path:"/activityNav"},{label:"받은 내역",path:"/ActivityNavReceived"}]};w.useEffect(()=>{if(!p?.user_id){v(!1);return}(async()=>{try{const $=await he.get(`/api/hearts/hearted/${p.user_id}`);console.log($.data),g($.data)}catch($){console.error("보낸 하트 불러오기 실패:",$)}finally{v(!1)}})()},[p]),w.useEffect(()=>{if(!i)return;(async()=>{try{const $=await he.post("/api/hearts/mutual_check",null,{params:{fromUser:p.user_id,toUser:i.userId}});d($.data)}catch{d(!1)}})()},[i,p]);const A=(S-1)*T,N=Math.ceil(x.length/T),z=x.slice(A,A+T);return u.jsxs(Hk,{children:[u.jsx($k,{children:u.jsxs(qk,{children:[u.jsxs(Yk,{children:[_.name," - 보낸 내역"]}),u.jsx(Gk,{children:R.btn.map((P,$)=>u.jsx(Vk,{onClick:()=>h(P.path,{state:{currentUser:p}}),children:P.label},$))})]})}),y&&u.jsx(bb,{children:"활동 내역을 불러오는 중..."}),!y&&x.length===0&&u.jsx(bb,{children:"누른 내역이 없습니다."}),!y&&x.length>0&&z.map((P,$)=>u.jsx(Ck,{profile:P,profileUser:P,currentUser:p,activity:`${P.name}님께 하트를 보냈습니다.`,btn:"하트 취소",profileImage:P.photoUrl?`http://localhost:8080/uploads/${P.photoUrl}`:kt,onClick:()=>{l(P),a(!0)},onDelete:F=>{g(Z=>Z.filter(ue=>ue.userId!==F))}},A+$)),x.length>0&&u.jsx(Xk,{children:Array.from({length:N},(P,$)=>u.jsx(Pk,{onClick:()=>C($+1),$active:S===$+1,children:$+1},$))}),n&&i&&u.jsx(y1,{name:i.name,activity:`${i.name}님께 하트를 보냈습니다.`,profileImage:i.photoUrl?`http://localhost:8080/uploads/${i.photoUrl}`:kt,mutual:c,currentUser:p,targetUser:i,onClose:()=>a(!1)}),u.jsx(ia,{currentUser:p})]})},$k=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Hk=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
`,qk=b.div`
  margin-top: 30px;
`,Yk=b.h2`
  margin-bottom: 10px;
  font-size: 25pt;
`,Gk=b.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Vk=b.button`
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
  cursor: pointer;
`,bb=b.div`
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
`,Xk=b.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
`,Pk=b.button`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background-color: ${({$active:n})=>n?"#4a90e2":"#eee"};
  color: ${({$active:n})=>n?"#fff":"#333"};
  cursor: pointer;
  font-size: 14px;
`,Qk=({profile:n,currentUser:a,onMutualUpdate:i,onOpenModal:l})=>{const c=async d=>{d.stopPropagation();try{const h=await he.post("/api/hearts/toggle",null,{params:{fromUser:a.user_id,toUser:n.userId}}),p={...n,mutualHeart:h.data};i(p),console.log(h.data?"하트 등록됨":"하트 해제됨")}catch(h){console.error("하트 토글 실패:",h)}};return u.jsx(Fk,{children:u.jsx(Kk,{children:u.jsxs("div",{onClick:()=>l(n),style:{display:"flex",alignItems:"center",cursor:"pointer",flex:1,gap:"10px"},children:[u.jsx(Jk,{src:n.photoUrl?`http://localhost:8080/uploads/${n.photoUrl}`:kt,alt:`${n.name} 프로필`,draggable:!1}),u.jsx(Zk,{children:`${n.name}님이 나에게 하트를 보냈습니다.`}),u.jsx(Ik,{onClick:c,children:n.mutualHeart?"💞":"🤍"})]})})})},Fk=b.div`
  margin: 10px 0;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Kk=b.div`
  display: flex;
  width: 350px;
  align-items: center;
  gap: 10px; /* 이미지-텍스트-버튼 간 간격 */
`,Zk=b.h2`
  margin-left: 10px;
  font-size: 10pt;
`,Jk=b.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`,Ik=b.button`
  margin-left: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  font-size: 12px;
  opacity: 80%;
  cursor: pointer;
`,Wk=()=>{const[n,a]=w.useState([]),[i,l]=w.useState(!1),[c,d]=w.useState(null),[h,p]=w.useState(!0),x=Ne(),{user:g}=At(),[y,v]=w.useState(1),S=6,C=Math.ceil(n.length/S),T={name:"Like💜"},_={btn:[{label:"보낸 내역",path:"/activityNav"},{label:"받은 내역",path:"/activityNavReceived"}]};w.useEffect(()=>{if(!g?.user_id){p(!1);return}(async()=>{try{const z=await he.get(`/api/hearts/who_hearted_me/${g.user_id}`);a(z.data)}catch(z){console.error("받은 하트 불러오기 실패:",z)}finally{p(!1)}})()},[g]),w.useEffect(()=>{if(!c)return;(async()=>{try{const z=await he.post("/api/hearts/mutual_check",null,{params:{fromUser:c.userId,toUser:g.user_id}}),P=n.map($=>$.userId===c.userId?{...$,mutualHeart:z.data}:$);a(P)}catch(z){console.error("상호 하트 확인 실패:",z)}})()},[c]);const R=(y-1)*S,A=n.slice(R,R+S);return u.jsxs(tA,{children:[u.jsx(eA,{children:u.jsxs(nA,{children:[u.jsxs(rA,{children:[T.name," - 받은 내역"]}),u.jsx(aA,{children:_.btn.map((N,z)=>u.jsx(iA,{onClick:()=>x(N.path,{state:{currentUser:g}}),children:N.label},z))})]})}),h&&u.jsx("div",{style:{textAlign:"center",marginTop:"50px"},children:"받은 하트를 불러오는 중..."}),!h&&n.length===0&&u.jsx("div",{style:{textAlign:"center",marginTop:"50px"},children:"아직 받은 하트가 없어요."}),!h&&n.length>0&&A.map((N,z)=>u.jsx(Qk,{profile:N,currentUser:g,onMutualUpdate:P=>a(n.map($=>$.userId===P.userId?P:$)),onOpenModal:P=>{d(P),l(!0)}},z)),n.length>0&&u.jsx(oA,{children:Array.from({length:C},(N,z)=>u.jsx(lA,{onClick:()=>v(z+1),$active:y===z+1,children:z+1},z))}),i&&c&&u.jsx(y1,{name:c.name,activity:`${c.name}님이 나에게 하트를 보냈습니다.`,btn:c.mutualHeart?"상호 하트💞":"하트 보내기",profileImage:c.photoUrl?`http://localhost:8080/uploads/${c.photoUrl}`:kt,mutual:c.mutualHeart,currentUser:g,targetUser:c,onClose:()=>l(!1)}),u.jsx(ia,{currentUser:g})]})},eA=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,tA=b.div`
  min-height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  position: relative;
`,nA=b.div`
  margin-top: 30px;
`,rA=b.h2`
  margin-bottom: 10px;
  font-size: 25pt;
`,aA=b.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,iA=b.button`
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  opacity: 80%;
  cursor: pointer;
`,oA=b.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
`,lA=b.button`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  background-color: ${({$active:n})=>n?"#4a90e2":"#eee"};
  color: ${({$active:n})=>n?"#fff":"#333"};
  cursor: pointer;
  font-size: 14px;
`,sA={},cA=sA?.VITE_API_BASE||"http://localhost:8080",uA=()=>{const[n,a]=w.useState(""),[i,l]=w.useState(""),[c,d]=w.useState(null),[h,p]=w.useState("");w.useEffect(()=>()=>{h&&URL.revokeObjectURL(h)},[h]);const x=v=>{const S=v.target.files?.[0];S&&(h&&URL.revokeObjectURL(h),d(S),p(URL.createObjectURL(S)))},g=async v=>{v.preventDefault();try{const S=new FormData;S.append("text",i),c&&S.append("file",c);const C=await fetch(`${cA}/posts`,{method:"POST",body:S,credentials:"include"}),_=(C.headers.get("content-type")||"").includes("application/json")?await C.json():await C.text();if(!C.ok){console.error("Upload failed:",C.status,_),alert("업로드 실패");return}alert(`게시물이 등록되었습니다! ${_?.id??""}`),y("/postmain"),a(""),l(""),d(null),h&&URL.revokeObjectURL(h),p("")}catch(S){console.error(S),alert(S.message||"에러가 발생했습니다.")}},y=Ne();return u.jsx(Na,{children:u.jsxs(fA,{onSubmit:g,encType:"multipart/form-data",children:[u.jsx(dA,{children:"게시글 작성"}),u.jsx("hr",{}),u.jsxs(hA,{children:[h?u.jsx(pA,{src:h,alt:"preview"}):u.jsx(gA,{children:"사진을 선택하세요"}),u.jsx(xA,{type:"file",accept:"image/*",onChange:x})]}),u.jsx(mA,{placeholder:"내용을 입력하세요...",value:i,onChange:v=>l(v.target.value)}),u.jsx(bA,{type:"submit",children:"등록하기"})]})})},fA=b.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
`,dA=b.div`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`,hA=b.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border: 2px dashed #aaa;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`,pA=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,gA=b.span`
    color: #888;
    font-size: 16px;
`,xA=b.input`
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
`,mA=b.textarea`
    min-height: 120px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: vertical;
`,bA=b.button`
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`,yA={},Od=yA?.VITE_API_BASE||"http://localhost:8080",vA=()=>{const[n,a]=w.useState(""),[i,l]=w.useState(null),[c,d]=w.useState(""),{postId:h}=Mb(),p=Ne();w.useEffect(()=>{(async()=>{try{const v=await fetch(`${Od}/posts/${h}`,{credentials:"include"});if(!v.ok)throw new Error("게시글 불러오기 실패");const S=await v.json();a(S.text),S.image_url&&d(`${Od}/uploads/${S.image_url}`)}catch(v){console.error(v),alert("게시글 불러오기에 실패했습니다.")}})()},[h]),w.useEffect(()=>()=>{c&&URL.revokeObjectURL(c)},[c]);const x=y=>{const v=y.target.files?.[0];v&&(c&&URL.revokeObjectURL(c),l(v),d(URL.createObjectURL(v)))},g=async y=>{y.preventDefault();try{const v=new FormData;v.append("text",n),i&&v.append("file",i);const S=await fetch(`${Od}/posts/${h}`,{method:"PUT",body:v,credentials:"include"});if(!S.ok){const C=await S.text();throw new Error(C||"업데이트 실패")}alert("게시물이 수정되었습니다!"),p("/postmain")}catch(v){console.error(v),alert(v.message||"수정 중 오류 발생")}};return u.jsx(Na,{children:u.jsxs(wA,{onSubmit:g,encType:"multipart/form-data",children:[u.jsx(SA,{children:"게시글 수정"}),u.jsx("hr",{}),u.jsxs(jA,{children:[c?u.jsx(EA,{src:c,alt:"preview"}):u.jsx(TA,{children:"사진을 선택하세요"}),u.jsx(_A,{type:"file",accept:"image/*",onChange:x})]}),u.jsx(CA,{placeholder:"내용을 입력하세요...",value:n,onChange:y=>a(y.target.value)}),u.jsx(RA,{type:"submit",children:"수정하기"})]})})},wA=b.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
`,SA=b.div`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`,jA=b.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border: 2px dashed #aaa;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`,EA=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,TA=b.span`
    color: #888;
    font-size: 16px;
`,_A=b.input`
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
`,CA=b.textarea`
    min-height: 120px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: vertical;
`,RA=b.button`
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`,kA=[{id:1,username:"user01",name:"정현욱",age:25},{id:2,username:"user02",name:"박서현",age:27},{id:3,username:"user03",name:"최민영",age:22},{id:4,username:"user04",name:"최민형",age:23},{id:5,username:"user05",name:"최민희",age:24},{id:6,username:"user06",name:"최민숙",age:25},{id:7,username:"user07",name:"최민주",age:26},{id:8,username:"user08",name:"최민정",age:28}],Bs={reason:"욕설 및 비매너 행동",content:"게임 내에서 지속적인 욕설을 사용하여 불쾌감을 주었습니다.",reporter:"user09"},AA=()=>{const[n,a]=w.useState(null);return u.jsx(Na,{children:u.jsxs(MA,{children:[u.jsx(OA,{children:"신고 목록"}),!n&&u.jsxs(NA,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"아이디"}),u.jsx("th",{children:"이름"}),u.jsx("th",{children:"신고자"})]})}),u.jsx("tbody",{children:kA.map(i=>u.jsxs("tr",{onClick:()=>a(i),children:[u.jsx("td",{children:i.username}),u.jsx("td",{children:i.name}),u.jsx("td",{children:Bs.reporter})]},i.id))})]}),n&&u.jsxs(zA,{children:[u.jsxs("h3",{children:["📋 ",n.name,"님의 신고 내용"]}),u.jsxs("p",{children:[u.jsx("b",{children:"신고 사유:"})," ",Bs.reason]}),u.jsxs("p",{children:[u.jsx("b",{children:"상세 내용:"})," ",Bs.content]}),u.jsxs("p",{children:[u.jsx("b",{children:"신고자:"})," ",Bs.reporter]}),u.jsxs(DA,{children:[u.jsx(Md,{children:"7일 정지"}),u.jsx(Md,{children:"1달 정지"}),u.jsx(Md,{children:"영구 정지"})]}),u.jsx(BA,{onClick:()=>a(null),children:"← 목록으로"})]}),u.jsx(ia,{})]})})},OA=b.div`
    width: inherit;
    position: fixed; /* ✅ 스크롤 내려도 고정 */
    text-align: center;
    top: 0;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 20; /* ✅ 테이블/내용보다 위로 올라오도록 */
    border-bottom: 1px solid #ddd;
`,MA=b.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
`,NA=b.table`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }

    tr:hover {
        background-color: #f9f9f9;
        cursor: pointer;
    }
`,zA=b.div`
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: #fafafa;
`,DA=b.div`
    width: inherit;
    display: flex;
    justify-content: space-evenly;
`,Md=b.button`
    margin-top: 20px;
    padding: 8px 12px;
    background: #eee;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`,BA=b.button`
    margin-top: 20px;
    padding: 8px 12px;
    background: #eee;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`,LA=b.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,UA=b.form`
    display: flex;
    gap: 8px;
    padding: 0 12px;
    padding-top: 10px;
    position: fixed;
    top: 28px;
    width: 93%;
`,$A=b.input`
    flex: 1;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 0 12px;
    font-size: 15px;
    outline: none;
    background: #fff;
    color: #111;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`,HA=b.button`
    height: 40px;
    padding: 0 14px;
    border-radius: 8px;
    border: none;
    background: #222;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`,qA=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    color: black;
`,YA=b.div`
    display: flex;
    gap: 10px;
    color: black;
`,yb=b.button`
    height: 40px;
    padding: 0 14px;
    border-radius: 12px;
    border: 1px solid #e6e6e6;
    background: #fff;
    font-weight: 600;
    color: #111;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`,GA=b.div`
    font-weight: 700;
    color: #111;
`,vb=b.div`
    position: absolute;
    margin-top: 6px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 5;
    color: black;
`,wb=b.button`
    display: block;
    padding: 12px 14px;
    width: 180px;
    text-align: left;
    background: #fff;
    border: 0;
    color: black;
    &:hover {
        background: #f7f7f7;
    }
`,VA=b.div`
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
`,XA=b.div`
    width: 100%;
    height: 100%;
`,Sb=[{label:"전체",code:""},{label:"카페",code:"CE7"},{label:"음식점",code:"FD6"},{label:"편의점",code:"CS2"},{label:"대형마트",code:"MT1"},{label:"지하철역",code:"SW8"}],jb=[{label:"정확도순",value:"accuracy"},{label:"거리순",value:"distance"},{label:"이름순",value:"name"}];function PA(){return new Promise((n,a)=>{const i=()=>{window.kakao.maps.load(n)};if(window.kakao?.maps?.services){i();return}const l="kakao-map-sdk",c=document.getElementById(l);if(c){c.addEventListener("load",i,{once:!0}),c.addEventListener("error",a,{once:!0});return}const d=document.createElement("script");d.id=l,d.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=undefined&autoload=false&libraries=services",d.onload=i,d.onerror=a,document.head.appendChild(d)})}function QA({lat:n=37.5665,lng:a=126.978,level:i=5}){const l=w.useRef(null),c=w.useRef(null),d=w.useRef([]),h=w.useRef(null),[p,x]=w.useState(""),[g,y]=w.useState(!1),[v,S]=w.useState(!1),[C,T]=w.useState(Sb[0]),[_,R]=w.useState(jb[0]),[A,N]=w.useState(0);w.useEffect(()=>{let I=!1;return PA().then(()=>{window.kakao.maps.load(()=>{if(I||!l.current)return;const le=new window.kakao.maps.LatLng(n,a),ie=new window.kakao.maps.Map(l.current,{center:le,level:i});c.current=ie,h.current=new window.kakao.maps.InfoWindow({zIndex:2})})}).catch(le=>console.error("Kakao SDK load failed:",le)),()=>{I=!0,l.current&&(l.current.innerHTML=""),d.current.forEach(le=>le.setMap(null)),d.current=[],h.current?.close()}},[n,a,i]);const z=()=>{d.current.forEach(I=>I.setMap(null)),d.current=[],h.current?.close()},P=I=>{const le=window.kakao,ie=new le.maps.LatLng(I.y,I.x),ce=new le.maps.Marker({position:ie});return ce.setMap(c.current),d.current.push(ce),le.maps.event.addListener(ce,"click",()=>{h.current.setContent(`
        <div style="padding:6px 10px">
          <strong>${I.place_name}</strong><br/>
          <small>${I.road_address_name||I.address_name||""}</small>
        </div>
      `),h.current.open(c.current,ce)}),ie},$=()=>{const I=window.kakao,le=new I.maps.services.Places(c.current),ie={size:15};_.value==="distance"?(ie.sort="distance",ie.location=c.current.getCenter()):ie.sort="accuracy",le.keywordSearch(p,(ce,je)=>{if(je!==I.maps.services.Status.OK){N(0),alert("검색 결과가 없습니다.");return}const we=C.code?ce.filter(H=>H.category_group_code===C.code):ce,ge=_.value==="name"?[...we].sort((H,ee)=>H.place_name.localeCompare(ee.place_name,"ko")):we;Z(ge)},ie)},F=()=>{const I=window.kakao,le=new I.maps.services.Places(c.current),ie={location:c.current.getCenter(),radius:2e3,size:15};_.value==="distance"&&(ie.sort="distance"),le.categorySearch(C.code,(ce,je)=>{if(je!==I.maps.services.Status.OK){N(0),alert("검색 결과가 없습니다.");return}const we=_.value==="name"?[...ce].sort((ge,H)=>ge.place_name.localeCompare(H.place_name,"ko")):ce;Z(we)},ie)},Z=I=>{z();const le=window.kakao,ie=new le.maps.LatLngBounds;I.forEach(ce=>ie.extend(P(ce))),ie.isEmpty()||c.current.setBounds(ie),N(I.length)},ue=I=>{I?.preventDefault(),c.current&&(p.trim()?$():C.code?F():alert("검색어를 입력하거나 카테고리를 선택하세요."),y(!1),S(!1))};return u.jsxs(LA,{children:[u.jsxs(UA,{onSubmit:ue,autoComplete:"off",children:[u.jsx($A,{value:p,onChange:I=>x(I.target.value),placeholder:"장소, 카페, 전시…"}),u.jsx(HA,{type:"submit",children:"검색"})]}),u.jsxs(qA,{children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsxs(YA,{children:[u.jsxs(yb,{type:"button",onClick:()=>{y(I=>!I),S(!1)},children:[C.label||"필터"," ▾"]}),u.jsxs(yb,{type:"button",onClick:()=>{S(I=>!I),y(!1)},children:[_.label," ▾"]})]}),g&&u.jsx(vb,{children:Sb.map(I=>u.jsx(wb,{onClick:()=>{T(I),y(!1)},children:I.label},I.code||"ALL"))}),v&&u.jsx(vb,{style:{left:110},children:jb.map(I=>u.jsx(wb,{onClick:()=>{R(I),S(!1)},children:I.label},I.value))})]}),u.jsxs(GA,{children:["결과 ",A,"개"]})]}),u.jsx(VA,{children:u.jsx(XA,{ref:l})})]})}const FA=()=>u.jsxs(Na,{children:[u.jsx(QA,{}),u.jsx(ia,{})]}),KA=()=>{const{loggedIn:n,loading:a}=At(),[i,l]=w.useState(null);if(a)return null;const c=({element:d})=>{const{loggedIn:h,loading:p}=At();return p?null:h?d:u.jsx(Lf,{to:"/account01",replace:!0})};return u.jsx(Jy,{children:u.jsxs(j2,{children:[u.jsx(ye,{path:"/",element:n?u.jsx(Lf,{to:"/home",replace:!0}):u.jsx(Lf,{to:"/account01",replace:!0})}),u.jsx(ye,{path:"/account01",element:u.jsx(nS,{})}),u.jsx(ye,{path:"/home",element:u.jsx(QE,{homeState:i,setHomeState:l})}),u.jsx(ye,{path:"/login",element:u.jsx(FE,{})}),u.jsx(ye,{path:"/mypage",element:u.jsx(c,{element:u.jsx(WE,{})})}),u.jsx(ye,{path:"/mypage/profile",element:u.jsx(c,{element:u.jsx(aC,{})})}),u.jsx(ye,{path:"/mypage/mymbti",element:u.jsx(c,{element:u.jsx(B_,{})})}),u.jsx(ye,{path:"/mypage/myintro",element:u.jsx(c,{element:u.jsx(gC,{})})}),u.jsx(ye,{path:"/mypage/myhobby",element:u.jsx(c,{element:u.jsx(wC,{})})}),u.jsx(ye,{path:"/mypage/wantedinfor",element:u.jsx(c,{element:u.jsx(LC,{})})}),u.jsx(ye,{path:"/info",element:u.jsx(dT,{})}),u.jsx(ye,{path:"/region",element:u.jsx(sb,{})}),u.jsx(ye,{path:"/intro",element:u.jsx(_3,{})}),u.jsx(ye,{path:"/hobby",element:u.jsx(O3,{})}),u.jsx(ye,{path:"/selmbti",element:u.jsx(JT,{})}),u.jsx(ye,{path:"/wantedmbti",element:u.jsx(i3,{})}),u.jsx(ye,{path:"/wantedintro",element:u.jsx(f3,{})}),u.jsx(ye,{path:"/wantedhobby",element:u.jsx(x3,{})}),u.jsx(ye,{path:"/introduce",element:u.jsx(w3,{})}),u.jsx(ye,{path:"/summary",element:u.jsx(Y_,{})}),u.jsx(ye,{path:"/precard",element:u.jsx(UC,{})}),u.jsx(ye,{path:"/region",element:u.jsx(sb,{})}),u.jsx(ye,{path:"/profilephoto",element:u.jsx(G6,{})}),u.jsx(ye,{path:"/todaypost",element:u.jsx(mb,{})}),u.jsx(ye,{path:"/addpost",element:u.jsx(uA,{})}),u.jsx(ye,{path:"/updatepost/:postId",element:u.jsx(vA,{})}),u.jsx(ye,{path:"/postmain",element:u.jsx(mb,{})}),u.jsx(ye,{path:"/report",element:u.jsx(AA,{})}),u.jsx(ye,{path:"/postprofile",element:u.jsx(b1,{})}),u.jsx(ye,{path:"/easymbti1",element:u.jsx(on,{children:u.jsx(B3,{})})}),u.jsx(ye,{path:"/easymbti2",element:u.jsx(on,{children:u.jsx(H3,{})})}),u.jsx(ye,{path:"/easymbti3",element:u.jsx(on,{children:u.jsx(V3,{})})}),u.jsx(ye,{path:"/easymbti4",element:u.jsx(on,{children:u.jsx(F3,{})})}),u.jsx(ye,{path:"/easymbti5",element:u.jsx(on,{children:u.jsx(I3,{})})}),u.jsx(ye,{path:"/easymbti6",element:u.jsx(on,{children:u.jsx(n_,{})})}),u.jsx(ye,{path:"/easymbti7",element:u.jsx(on,{children:u.jsx(o_,{})})}),u.jsx(ye,{path:"/easymbti8",element:u.jsx(on,{children:u.jsx(u_,{})})}),u.jsx(ye,{path:"/easymbti9",element:u.jsx(on,{children:u.jsx(p_,{})})}),u.jsx(ye,{path:"/easymbti10",element:u.jsx(on,{children:u.jsx(b_,{})})}),u.jsx(ye,{path:"/easymbti11",element:u.jsx(on,{children:u.jsx(S_,{})})}),u.jsx(ye,{path:"/easymbti12",element:u.jsx(on,{children:u.jsx(__,{})})}),u.jsx(ye,{path:"/resultmbti",element:u.jsx(on,{children:u.jsx(A_,{})})}),u.jsx(ye,{path:"/chat",element:u.jsxs(ZA,{children:[u.jsx(R6,{}),u.jsx(ia,{})]})}),u.jsx(ye,{path:"/chat/:id",element:u.jsxs(u.Fragment,{children:[u.jsx(p6,{}),u.jsx(d6,{})]})}),u.jsx(ye,{path:"/activityNav",element:u.jsx(Uk,{})}),u.jsx(ye,{path:"/activityNavReceived",element:u.jsx(Wk,{})}),u.jsx(ye,{path:"/AccountDelConfirm",element:u.jsx(PC,{})}),u.jsx(ye,{path:"HomeModal",element:u.jsx(Qy,{})}),u.jsx(ye,{path:"/NothingResultHome",element:u.jsx(Fy,{})}),u.jsx(ye,{path:"/map",element:u.jsx(FA,{})})]})})},ZA=b.div`
    min-height: 100dvh;
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    box-sizing: border-box;
    flex-direction: column; /* 🔥 하단 네비 배치를 위해 세로 정렬 */

    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    position: relative; /* 🔥 하단 네비 절대위치 기준 */
    padding-top: 60px;
`;he.defaults.baseURL="http://localhost:8080";he.defaults.withCredentials=!0;N5.createRoot(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(P2,{basename:"/mbtmi/",children:u.jsx(OE,{children:u.jsx(Jy,{children:u.jsx(KA,{})})})})}));
