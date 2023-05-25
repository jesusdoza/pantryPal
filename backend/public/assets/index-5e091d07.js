function Ah(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Rh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zi={},Th={get exports(){return zi},set exports(e){zi=e}},Xo={},b={},Ih={get exports(){return b},set exports(e){b=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),$h=Symbol.for("react.portal"),Lh=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),Mh=Symbol.for("react.provider"),Dh=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Bh=Symbol.for("react.suspense"),Hh=Symbol.for("react.memo"),Wh=Symbol.for("react.lazy"),If=Symbol.iterator;function Vh(e){return e===null||typeof e!="object"?null:(e=If&&e[If]||e["@@iterator"],typeof e=="function"?e:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,np={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=np,this.updater=n||ep}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rp(){}rp.prototype=Ur.prototype;function rc(e,t,n){this.props=e,this.context=t,this.refs=np,this.updater=n||ep}var ic=rc.prototype=new rp;ic.constructor=rc;tp(ic,Ur.prototype);ic.isPureReactComponent=!0;var $f=Array.isArray,ip=Object.prototype.hasOwnProperty,ac={current:null},ap={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ip.call(t,r)&&!ap.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:e,key:a,ref:o,props:i,_owner:ac.current}}function Yh(e,t){return{$$typeof:na,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===na}function Qh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lf=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qh(""+e.key):t.toString(36)}function Qa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case na:case $h:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Vl(o,0):r,$f(i)?(n="",e!=null&&(n=e.replace(Lf,"$&/")+"/"),Qa(i,t,n,"",function(u){return u})):i!=null&&(oc(i)&&(i=Yh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$f(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Vl(a,l);o+=Qa(a,t,n,s,i)}else if(s=Vh(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Vl(a,l++),o+=Qa(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(e,t,n){if(e==null)return e;var r=[],i=0;return Qa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Gh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Ga={transition:null},Kh={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:ac};Q.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ur;Q.Fragment=Lh;Q.Profiler=Fh;Q.PureComponent=rc;Q.StrictMode=jh;Q.Suspense=Bh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kh;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ac.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ip.call(t,s)&&!ap.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:na,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:Dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mh,_context:e},e.Consumer=e};Q.createElement=op;Q.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Uh,render:e}};Q.isValidElement=oc;Q.lazy=function(e){return{$$typeof:Wh,_payload:{_status:-1,_result:e},_init:Gh}};Q.memo=function(e,t){return{$$typeof:Hh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ga.transition;Ga.transition={};try{e()}finally{Ga.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Q.useContext=function(e){return Xe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Q.useId=function(){return Xe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Q.useRef=function(e){return Xe.current.useRef(e)};Q.useState=function(e){return Xe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Xe.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(Ih);const rn=Rh(b),Ts=Ah({__proto__:null,default:rn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=b,Jh=Symbol.for("react.element"),qh=Symbol.for("react.fragment"),Zh=Object.prototype.hasOwnProperty,eg=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tg={key:!0,ref:!0,__self:!0,__source:!0};function lp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Zh.call(t,r)&&!tg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jh,type:e,key:a,ref:o,props:i,_owner:eg.current}}Xo.Fragment=qh;Xo.jsx=lp;Xo.jsxs=lp;(function(e){e.exports=Xo})(Th);const Ut=zi.Fragment,f=zi.jsx,P=zi.jsxs;var Is={},$s={},ng={get exports(){return $s},set exports(e){$s=e}},ut={},Ls={},rg={get exports(){return Ls},set exports(e){Ls=e}},sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var U=A.length;A.push(M);e:for(;0<U;){var ie=U-1>>>1,T=A[ie];if(0<i(T,M))A[ie]=M,A[U]=T,U=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],U=A.pop();if(U!==M){A[0]=U;e:for(var ie=0,T=A.length,I=T>>>1;ie<I;){var L=2*(ie+1)-1,B=A[L],k=L+1,G=A[k];if(0>i(B,U))k<T&&0>i(G,B)?(A[ie]=G,A[k]=U,ie=k):(A[ie]=B,A[L]=U,ie=L);else if(k<T&&0>i(G,U))A[ie]=G,A[k]=U,ie=k;else break e}}return M}function i(A,M){var U=A.sortIndex-M.sortIndex;return U!==0?U:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,h=3,w=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function S(A){if(v=!1,y(A),!g)if(n(s)!==null)g=!0,Bt(C);else{var M=n(u);M!==null&&Ye(S,M.startTime-A)}}function C(A,M){g=!1,v&&(v=!1,m(z),z=-1),w=!0;var U=h;try{for(y(M),d=n(s);d!==null&&(!(d.expirationTime>M)||A&&!Pe());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var T=ie(d.expirationTime<=M);M=e.unstable_now(),typeof T=="function"?d.callback=T:d===n(s)&&r(s),y(M)}else r(s);d=n(s)}if(d!==null)var I=!0;else{var L=n(u);L!==null&&Ye(S,L.startTime-M),I=!1}return I}finally{d=null,h=U,w=!1}}var O=!1,N=null,z=-1,W=5,D=-1;function Pe(){return!(e.unstable_now()-D<W)}function Se(){if(N!==null){var A=e.unstable_now();D=A;var M=!0;try{M=N(!0,A)}finally{M?Ae():(O=!1,N=null)}}else O=!1}var Ae;if(typeof p=="function")Ae=function(){p(Se)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Me=it.port2;it.port1.onmessage=Se,Ae=function(){Me.postMessage(null)}}else Ae=function(){x(Se,0)};function Bt(A){N=A,O||(O=!0,Ae())}function Ye(A,M){z=x(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Bt(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var U=h;h=M;try{return A()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var U=h;h=A;try{return M()}finally{h=U}},e.unstable_scheduleCallback=function(A,M,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,A){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=U+T,A={id:c++,callback:M,priorityLevel:A,startTime:U,expirationTime:T,sortIndex:-1},U>ie?(A.sortIndex=U,t(u,A),n(s)===null&&A===n(u)&&(v?(m(z),z=-1):v=!0,Ye(S,U-ie))):(A.sortIndex=T,t(s,A),g||w||(g=!0,Bt(C))),A},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(A){var M=h;return function(){var U=h;h=M;try{return A.apply(this,arguments)}finally{h=U}}}})(sp);(function(e){e.exports=sp})(rg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=b,st=Ls;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cp=new Set,Oi={};function ir(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Oi[e]=t,e=0;e<t.length;e++)cp.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},Ff={};function ag(e){return js.call(Ff,e)?!0:js.call(jf,e)?!1:ig.test(e)?Ff[e]=!0:(jf[e]=!0,!1)}function og(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lg(e,t,n,r){if(t===null||typeof t>"u"||og(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lc,sc);Fe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lc,sc);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lc,sc);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function uc(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lg(t,n,i,r)&&(n=null),r||i===null?ag(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),dp=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Ms=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),dc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),pp=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=Mf&&e[Mf]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Yl;function di(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Ql=!1;function Gl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function sg(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case sr:return"Portal";case Fs:return"Profiler";case cc:return"StrictMode";case Ms:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dp:return(e.displayName||"Context")+".Consumer";case fp:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dc:return t=e.displayName||null,t!==null?t:Us(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Us(e(t))}catch{}}return null}function ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(t);case 8:return t===cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e){var t=mp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ga(e){e._valueTracker||(e._valueTracker=cg(e))}function hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gp(e,t){t=t.checked,t!=null&&uc(e,"checked",t,!1)}function Hs(e,t){gp(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pi=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(pi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function vp(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fg=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function Sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dg=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(dg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,Cr=null,Pr=null;function Wf(e){if(e=aa(e)){if(typeof Xs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=tl(t),Xs(e.stateNode,e.type,t))}}function kp(e){Cr?Pr?Pr.push(e):Pr=[e]:Cr=e}function bp(){if(Cr){var e=Cr,t=Pr;if(Pr=Cr=null,Wf(e),t)for(e=0;e<t.length;e++)Wf(t[e])}}function Ep(e,t){return e(t)}function Cp(){}var Kl=!1;function Pp(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return Ep(e,t,n)}finally{Kl=!1,(Cr!==null||Pr!==null)&&(Cp(),bp())}}function Ri(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Js=!1;if(Xt)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Js=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Js=!1}function pg(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var yi=!1,mo=null,ho=!1,qs=null,mg={onError:function(e){yi=!0,mo=e}};function hg(e,t,n,r,i,a,o,l,s){yi=!1,mo=null,pg.apply(mg,arguments)}function gg(e,t,n,r,i,a,o,l,s){if(hg.apply(this,arguments),yi){if(yi){var u=mo;yi=!1,mo=null}else throw Error(_(198));ho||(ho=!0,qs=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vf(e){if(ar(e)!==e)throw Error(_(188))}function vg(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Vf(i),e;if(a===r)return Vf(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function _p(e){return e=vg(e),e!==null?zp(e):null}function zp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zp(e);if(t!==null)return t;e=e.sibling}return null}var Op=st.unstable_scheduleCallback,Yf=st.unstable_cancelCallback,yg=st.unstable_shouldYield,wg=st.unstable_requestPaint,ye=st.unstable_now,xg=st.unstable_getCurrentPriorityLevel,mc=st.unstable_ImmediatePriority,Ap=st.unstable_UserBlockingPriority,go=st.unstable_NormalPriority,Sg=st.unstable_LowPriority,Rp=st.unstable_IdlePriority,Jo=null,Mt=null;function kg(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Cg,bg=Math.log,Eg=Math.LN2;function Cg(e){return e>>>=0,e===0?32:31-(bg(e)/Eg|0)|0}var ya=64,wa=4194304;function mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mi(l):(a&=o,a!==0&&(r=mi(a)))}else o=n&~i,o!==0?r=mi(o):a!==0&&(r=mi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function Pg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-_t(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Pg(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tp(){var e=ya;return ya<<=1,!(ya&4194240)&&(ya=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function _g(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $p,gc,Lp,jp,Fp,eu=!1,xa=[],Sn=null,kn=null,bn=null,Ti=new Map,Ii=new Map,hn=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function ni(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=aa(t),t!==null&&gc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Og(e,t,n,r,i){switch(t){case"focusin":return Sn=ni(Sn,e,t,n,r,i),!0;case"dragenter":return kn=ni(kn,e,t,n,r,i),!0;case"mouseover":return bn=ni(bn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ti.set(a,ni(Ti.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ii.set(a,ni(Ii.get(a)||null,e,t,n,r,i)),!0}return!1}function Mp(e){var t=Hn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Np(n),t!==null){e.blockedOn=t,Fp(e.priority,function(){Lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ks=r,n.target.dispatchEvent(r),Ks=null}else return t=aa(n),t!==null&&gc(t),e.blockedOn=n,!1;t.shift()}return!0}function Gf(e,t,n){Ka(e)&&n.delete(t)}function Ag(){eu=!1,Sn!==null&&Ka(Sn)&&(Sn=null),kn!==null&&Ka(kn)&&(kn=null),bn!==null&&Ka(bn)&&(bn=null),Ti.forEach(Gf),Ii.forEach(Gf)}function ri(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Ag)))}function $i(e){function t(i){return ri(i,e)}if(0<xa.length){ri(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ri(Sn,e),kn!==null&&ri(kn,e),bn!==null&&ri(bn,e),Ti.forEach(t),Ii.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Mp(n),n.blockedOn===null&&hn.shift()}var Nr=an.ReactCurrentBatchConfig,yo=!0;function Rg(e,t,n,r){var i=te,a=Nr.transition;Nr.transition=null;try{te=1,vc(e,t,n,r)}finally{te=i,Nr.transition=a}}function Tg(e,t,n,r){var i=te,a=Nr.transition;Nr.transition=null;try{te=4,vc(e,t,n,r)}finally{te=i,Nr.transition=a}}function vc(e,t,n,r){if(yo){var i=tu(e,t,n,r);if(i===null)os(e,t,r,wo,n),Qf(e,r);else if(Og(i,e,t,n,r))r.stopPropagation();else if(Qf(e,r),t&4&&-1<zg.indexOf(e)){for(;i!==null;){var a=aa(i);if(a!==null&&$p(a),a=tu(e,t,n,r),a===null&&os(e,t,r,wo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var wo=null;function tu(e,t,n,r){if(wo=null,e=pc(r),e=Hn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Dp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xg()){case mc:return 1;case Ap:return 4;case go:case Sg:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var vn=null,yc=null,Xa=null;function Up(){if(Xa)return Xa;var e,t=yc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Xa=i.slice(e,1<r?1-r:void 0)}function Ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function Kf(){return!1}function ct(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sa:Kf,this.isPropagationStopped=Kf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ct(Br),ia=pe({},Br,{view:0,detail:0}),Ig=ct(ia),Jl,ql,ii,qo=pe({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(Jl=e.screenX-ii.screenX,ql=e.screenY-ii.screenY):ql=Jl=0,ii=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Xf=ct(qo),$g=pe({},qo,{dataTransfer:0}),Lg=ct($g),jg=pe({},ia,{relatedTarget:0}),Zl=ct(jg),Fg=pe({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=ct(Fg),Dg=pe({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ug=ct(Dg),Bg=pe({},Br,{data:0}),Jf=ct(Bg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vg[e])?!!t[e]:!1}function xc(){return Yg}var Qg=pe({},ia,{key:function(e){if(e.key){var t=Hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?Ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gg=ct(Qg),Kg=pe({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=ct(Kg),Xg=pe({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Jg=ct(Xg),qg=pe({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=ct(qg),ev=pe({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=ct(ev),nv=[9,13,27,32],Sc=Xt&&"CompositionEvent"in window,wi=null;Xt&&"documentMode"in document&&(wi=document.documentMode);var rv=Xt&&"TextEvent"in window&&!wi,Bp=Xt&&(!Sc||wi&&8<wi&&11>=wi),Zf=String.fromCharCode(32),ed=!1;function Hp(e,t){switch(e){case"keyup":return nv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function iv(e,t){switch(e){case"compositionend":return Wp(t);case"keypress":return t.which!==32?null:(ed=!0,Zf);case"textInput":return e=t.data,e===Zf&&ed?null:e;default:return null}}function av(e,t){if(cr)return e==="compositionend"||!Sc&&Hp(e,t)?(e=Up(),Xa=yc=vn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bp&&t.locale!=="ko"?null:t.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ov[e.type]:t==="textarea"}function Vp(e,t,n,r){kp(r),t=xo(t,"onChange"),0<t.length&&(n=new wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Li=null;function lv(e){n1(e,0)}function Zo(e){var t=pr(e);if(hp(t))return e}function sv(e,t){if(e==="change")return t}var Yp=!1;if(Xt){var es;if(Xt){var ts="oninput"in document;if(!ts){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),ts=typeof nd.oninput=="function"}es=ts}else es=!1;Yp=es&&(!document.documentMode||9<document.documentMode)}function rd(){xi&&(xi.detachEvent("onpropertychange",Qp),Li=xi=null)}function Qp(e){if(e.propertyName==="value"&&Zo(Li)){var t=[];Vp(t,Li,e,pc(e)),Pp(lv,t)}}function uv(e,t,n){e==="focusin"?(rd(),xi=t,Li=n,xi.attachEvent("onpropertychange",Qp)):e==="focusout"&&rd()}function cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Li)}function fv(e,t){if(e==="click")return Zo(t)}function dv(e,t){if(e==="input"||e==="change")return Zo(t)}function pv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:pv;function ji(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!js.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kp(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mv(e){var t=Kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(r!==null&&kc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ad(n,a);var o=ad(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hv=Xt&&"documentMode"in document&&11>=document.documentMode,fr=null,nu=null,Si=null,ru=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||fr==null||fr!==po(r)||(r=fr,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&ji(Si,r)||(Si=r,r=xo(nu,"onSelect"),0<r.length&&(t=new wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},ns={},Xp={};Xt&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function el(e){if(ns[e])return ns[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xp)return ns[e]=t[n];return e}var Jp=el("animationend"),qp=el("animationiteration"),Zp=el("animationstart"),e1=el("transitionend"),t1=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){t1.set(e,t),ir(t,[e])}for(var rs=0;rs<ld.length;rs++){var is=ld[rs],gv=is.toLowerCase(),vv=is[0].toUpperCase()+is.slice(1);jn(gv,"on"+vv)}jn(Jp,"onAnimationEnd");jn(qp,"onAnimationIteration");jn(Zp,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(e1,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gg(r,t,void 0,e),e.currentTarget=null}function n1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;sd(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;sd(i,l,u),a=s}}}if(ho)throw e=qs,ho=!1,qs=null,e}function oe(e,t){var n=t[su];n===void 0&&(n=t[su]=new Set);var r=e+"__bubble";n.has(r)||(r1(t,e,2,!1),n.add(r))}function as(e,t,n){var r=0;t&&(r|=4),r1(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Fi(e){if(!e[ba]){e[ba]=!0,cp.forEach(function(n){n!=="selectionchange"&&(yv.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,as("selectionchange",!1,t))}}function r1(e,t,n,r){switch(Dp(t)){case 1:var i=Rg;break;case 4:i=Tg;break;default:i=vc}n=i.bind(null,t,n,e),i=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Pp(function(){var u=a,c=pc(n),d=[];e:{var h=t1.get(e);if(h!==void 0){var w=wc,g=e;switch(e){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":w=Gg;break;case"focusin":g="focus",w=Zl;break;case"focusout":g="blur",w=Zl;break;case"beforeblur":case"afterblur":w=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Jg;break;case Jp:case qp:case Zp:w=Mg;break;case e1:w=Zg;break;case"scroll":w=Ig;break;case"wheel":w=tv;break;case"copy":case"cut":case"paste":w=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qf}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Ri(p,m),S!=null&&v.push(Mi(p,S,y)))),x)break;p=p.return}0<v.length&&(h=new w(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ks&&(g=n.relatedTarget||n.fromElement)&&(Hn(g)||g[Jt]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Hn(g):null,g!==null&&(x=ar(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=Xf,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=qf,S="onPointerLeave",m="onPointerEnter",p="pointer"),x=w==null?h:pr(w),y=g==null?h:pr(g),h=new v(S,p+"leave",w,n,c),h.target=x,h.relatedTarget=y,S=null,Hn(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=x,S=v),x=S,w&&g)t:{for(v=w,m=g,p=0,y=v;y;y=or(y))p++;for(y=0,S=m;S;S=or(S))y++;for(;0<p-y;)v=or(v),p--;for(;0<y-p;)m=or(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=or(v),m=or(m)}v=null}else v=null;w!==null&&ud(d,h,w,v,!1),g!==null&&x!==null&&ud(d,x,g,v,!0)}}e:{if(h=u?pr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=sv;else if(td(h))if(Yp)C=dv;else{C=cv;var O=uv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=fv);if(C&&(C=C(e,u))){Vp(d,C,n,c);break e}O&&O(e,h,u),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Ws(h,"number",h.value)}switch(O=u?pr(u):window,e){case"focusin":(td(O)||O.contentEditable==="true")&&(fr=O,nu=u,Si=null);break;case"focusout":Si=nu=fr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,od(d,n,c);break;case"selectionchange":if(hv)break;case"keydown":case"keyup":od(d,n,c)}var N;if(Sc)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else cr?Hp(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Bp&&n.locale!=="ko"&&(cr||z!=="onCompositionStart"?z==="onCompositionEnd"&&cr&&(N=Up()):(vn=c,yc="value"in vn?vn.value:vn.textContent,cr=!0)),O=xo(u,z),0<O.length&&(z=new Jf(z,e,null,n,c),d.push({event:z,listeners:O}),N?z.data=N:(N=Wp(n),N!==null&&(z.data=N)))),(N=rv?iv(e,n):av(e,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(c=new Jf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}n1(d,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ri(e,n),a!=null&&r.unshift(Mi(e,a,i)),a=Ri(e,t),a!=null&&r.push(Mi(e,a,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ri(n,a),s!=null&&o.unshift(Mi(n,s,l))):i||(s=Ri(n,a),s!=null&&o.push(Mi(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wv=/\r\n?/g,xv=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(wv,`
`).replace(xv,"")}function Ea(e,t,n){if(t=cd(t),cd(e)!==t&&n)throw Error(_(425))}function So(){}var iu=null,au=null;function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(bv)}:lu;function bv(e){setTimeout(function(){throw e})}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),It="__reactFiber$"+Hr,Di="__reactProps$"+Hr,Jt="__reactContainer$"+Hr,su="__reactEvents$"+Hr,Ev="__reactListeners$"+Hr,Cv="__reactHandles$"+Hr;function Hn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dd(e);e!==null;){if(n=e[It])return n;e=dd(e)}return t}e=n,n=e.parentNode}return null}function aa(e){return e=e[It]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function tl(e){return e[Di]||null}var uu=[],mr=-1;function Fn(e){return{current:e}}function se(e){0>mr||(e.current=uu[mr],uu[mr]=null,mr--)}function ae(e,t){mr++,uu[mr]=e.current,e.current=t}var Rn={},We=Fn(Rn),tt=Fn(!1),Xn=Rn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function ko(){se(tt),se(We)}function pd(e,t,n){if(We.current!==Rn)throw Error(_(168));ae(We,t),ae(tt,n)}function i1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,ug(e)||"Unknown",i));return pe({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Xn=We.current,ae(We,e),ae(tt,tt.current),!0}function md(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=i1(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,se(tt),se(We),ae(We,e)):se(tt),ae(tt,n)}var Vt=null,nl=!1,ss=!1;function a1(e){Vt===null?Vt=[e]:Vt.push(e)}function Pv(e){nl=!0,a1(e)}function Mn(){if(!ss&&Vt!==null){ss=!0;var e=0,t=te;try{var n=Vt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,nl=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),Op(mc,Mn),i}finally{te=t,ss=!1}}return null}var hr=[],gr=0,Eo=null,Co=0,pt=[],mt=0,Jn=null,Yt=1,Qt="";function Un(e,t){hr[gr++]=Co,hr[gr++]=Eo,Eo=e,Co=t}function o1(e,t,n){pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=Jn,Jn=e;var r=Yt;e=Qt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var a=32-_t(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-_t(t)+i|n<<i|r,Qt=a+e}else Yt=1<<a|n<<i|r,Qt=e}function bc(e){e.return!==null&&(Un(e,1),o1(e,1,0))}function Ec(e){for(;e===Eo;)Eo=hr[--gr],hr[gr]=null,Co=hr[--gr],hr[gr]=null;for(;e===Jn;)Jn=pt[--mt],pt[mt]=null,Qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var lt=null,ot=null,ce=!1,Pt=null;function l1(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,ot=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,ot=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(ce){var t=ot;if(t){var n=t;if(!hd(e,t)){if(cu(e))throw Error(_(418));t=En(n.nextSibling);var r=lt;t&&hd(e,t)?l1(r,n):(e.flags=e.flags&-4097|2,ce=!1,lt=e)}}else{if(cu(e))throw Error(_(418));e.flags=e.flags&-4097|2,ce=!1,lt=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Ca(e){if(e!==lt)return!1;if(!ce)return gd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=ot)){if(cu(e))throw s1(),Error(_(418));for(;t;)l1(e,t),t=En(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=lt?En(e.stateNode.nextSibling):null;return!0}function s1(){for(var e=ot;e;)e=En(e.nextSibling)}function Tr(){ot=lt=null,ce=!1}function Cc(e){Pt===null?Pt=[e]:Pt.push(e)}var Nv=an.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Po=Fn(null),No=null,vr=null,Pc=null;function Nc(){Pc=vr=No=null}function _c(e){var t=Po.current;se(Po),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){No=e,Pc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(No===null)throw Error(_(308));vr=e,No.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Wn=null;function zc(e){Wn===null?Wn=[e]:Wn.push(e)}function u1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zc(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,zc(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}function vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;mn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,w=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(w,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,d,h):g,h==null)break e;d=pe({},d,h);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,s=d):c=c.next=w,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zn|=o,e.lanes=o,e.memoizedState=d}}function yd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var f1=new up.Component().refs;function pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(zt(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(zt(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Nn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(zt(t,e,r,n),qa(t,e,r))}};function wd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(i,a):!0}function d1(e,t,n){var r=!1,i=Rn,a=t.contextType;return typeof a=="object"&&a!==null?a=yt(a):(i=nt(t)?Xn:We.current,r=t.contextTypes,a=(r=r!=null)?Rr(e,i):Rn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function xd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=f1,Oc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=yt(a):(a=nt(t)?Xn:We.current,i.context=Rr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(pu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rl.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===f1&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sd(e){var t=e._init;return t(e._payload)}function p1(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_n(m,p),m.index=0,m.sibling=null,m}function a(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,S){return p===null||p.tag!==6?(p=hs(y,m.mode,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function s(m,p,y,S){var C=y.type;return C===ur?c(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&Sd(C)===p.type)?(S=i(p,y.props),S.ref=ai(m,p,y),S.return=m,S):(S=io(y.type,y.key,y.props,null,m.mode,S),S.ref=ai(m,p,y),S.return=m,S)}function u(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=gs(y,m.mode,S),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,S,C){return p===null||p.tag!==7?(p=Kn(y,m.mode,S,C),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hs(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ha:return y=io(p.type,p.key,p.props,null,m.mode,y),y.ref=ai(m,null,p),y.return=m,y;case sr:return p=gs(p,m.mode,y),p.return=m,p;case pn:var S=p._init;return d(m,S(p._payload),y)}if(pi(p)||ei(p))return p=Kn(p,m.mode,y,null),p.return=m,p;Pa(m,p)}return null}function h(m,p,y,S){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return y.key===C?s(m,p,y,S):null;case sr:return y.key===C?u(m,p,y,S):null;case pn:return C=y._init,h(m,p,C(y._payload),S)}if(pi(y)||ei(y))return C!==null?null:c(m,p,y,S,null);Pa(m,y)}return null}function w(m,p,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,l(p,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ha:return m=m.get(S.key===null?y:S.key)||null,s(p,m,S,C);case sr:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,C);case pn:var O=S._init;return w(m,p,y,O(S._payload),C)}if(pi(S)||ei(S))return m=m.get(y)||null,c(p,m,S,C,null);Pa(p,S)}return null}function g(m,p,y,S){for(var C=null,O=null,N=p,z=p=0,W=null;N!==null&&z<y.length;z++){N.index>z?(W=N,N=null):W=N.sibling;var D=h(m,N,y[z],S);if(D===null){N===null&&(N=W);break}e&&N&&D.alternate===null&&t(m,N),p=a(D,p,z),O===null?C=D:O.sibling=D,O=D,N=W}if(z===y.length)return n(m,N),ce&&Un(m,z),C;if(N===null){for(;z<y.length;z++)N=d(m,y[z],S),N!==null&&(p=a(N,p,z),O===null?C=N:O.sibling=N,O=N);return ce&&Un(m,z),C}for(N=r(m,N);z<y.length;z++)W=w(N,m,z,y[z],S),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?z:W.key),p=a(W,p,z),O===null?C=W:O.sibling=W,O=W);return e&&N.forEach(function(Pe){return t(m,Pe)}),ce&&Un(m,z),C}function v(m,p,y,S){var C=ei(y);if(typeof C!="function")throw Error(_(150));if(y=C.call(y),y==null)throw Error(_(151));for(var O=C=null,N=p,z=p=0,W=null,D=y.next();N!==null&&!D.done;z++,D=y.next()){N.index>z?(W=N,N=null):W=N.sibling;var Pe=h(m,N,D.value,S);if(Pe===null){N===null&&(N=W);break}e&&N&&Pe.alternate===null&&t(m,N),p=a(Pe,p,z),O===null?C=Pe:O.sibling=Pe,O=Pe,N=W}if(D.done)return n(m,N),ce&&Un(m,z),C;if(N===null){for(;!D.done;z++,D=y.next())D=d(m,D.value,S),D!==null&&(p=a(D,p,z),O===null?C=D:O.sibling=D,O=D);return ce&&Un(m,z),C}for(N=r(m,N);!D.done;z++,D=y.next())D=w(N,m,z,D.value,S),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?z:D.key),p=a(D,p,z),O===null?C=D:O.sibling=D,O=D);return e&&N.forEach(function(Se){return t(m,Se)}),ce&&Un(m,z),C}function x(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===ur&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:e:{for(var C=y.key,O=p;O!==null;){if(O.key===C){if(C=y.type,C===ur){if(O.tag===7){n(m,O.sibling),p=i(O,y.props.children),p.return=m,m=p;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&Sd(C)===O.type){n(m,O.sibling),p=i(O,y.props),p.ref=ai(m,O,y),p.return=m,m=p;break e}n(m,O);break}else t(m,O);O=O.sibling}y.type===ur?(p=Kn(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=io(y.type,y.key,y.props,null,m.mode,S),S.ref=ai(m,p,y),S.return=m,m=S)}return o(m);case sr:e:{for(O=y.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=gs(y,m.mode,S),p.return=m,m=p}return o(m);case pn:return O=y._init,x(m,p,O(y._payload),S)}if(pi(y))return g(m,p,y,S);if(ei(y))return v(m,p,y,S);Pa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=hs(y,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return x}var Ir=p1(!0),m1=p1(!1),oa={},Dt=Fn(oa),Ui=Fn(oa),Bi=Fn(oa);function Vn(e){if(e===oa)throw Error(_(174));return e}function Ac(e,t){switch(ae(Bi,t),ae(Ui,e),ae(Dt,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ys(t,e)}se(Dt),ae(Dt,t)}function $r(){se(Dt),se(Ui),se(Bi)}function h1(e){Vn(Bi.current);var t=Vn(Dt.current),n=Ys(t,e.type);t!==n&&(ae(Ui,e),ae(Dt,n))}function Rc(e){Ui.current===e&&(se(Dt),se(Ui))}var fe=Fn(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=[];function Tc(){for(var e=0;e<us.length;e++)us[e]._workInProgressVersionPrimary=null;us.length=0}var Za=an.ReactCurrentDispatcher,cs=an.ReactCurrentBatchConfig,qn=0,de=null,ke=null,Ne=null,Oo=!1,ki=!1,Hi=0,_v=0;function Ue(){throw Error(_(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function $c(e,t,n,r,i,a){if(qn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?Rv:Tv,e=n(r,i),ki){a=0;do{if(ki=!1,Hi=0,25<=a)throw Error(_(301));a+=1,Ne=ke=null,t.updateQueue=null,Za.current=Iv,e=n(r,i)}while(ki)}if(Za.current=Ao,t=ke!==null&&ke.next!==null,qn=0,Ne=ke=de=null,Oo=!1,t)throw Error(_(300));return e}function Lc(){var e=Hi!==0;return Hi=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function wt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ne===null?de.memoizedState:Ne.next;if(t!==null)Ne=t,ke=e;else{if(e===null)throw Error(_(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ne===null?de.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Wi(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=wt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((qn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,de.lanes|=c,Zn|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,Ot(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,Zn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ds(e){var t=wt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ot(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function g1(){}function v1(e,t){var n=de,r=wt(),i=t(),a=!Ot(r.memoizedState,i);if(a&&(r.memoizedState=i,et=!0),r=r.queue,jc(x1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Vi(9,w1.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(_(349));qn&30||y1(n,t,i)}return i}function y1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w1(e,t,n,r){t.value=n,t.getSnapshot=r,S1(t)&&k1(e)}function x1(e,t,n){return n(function(){S1(t)&&k1(e)})}function S1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function k1(e){var t=qt(e,1);t!==null&&zt(t,e,1,-1)}function kd(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Av.bind(null,de,e),[t.memoizedState,e]}function Vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function b1(){return wt().memoizedState}function eo(e,t,n,r){var i=Tt();de.flags|=e,i.memoizedState=Vi(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var i=wt();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&Ic(r,o.deps)){i.memoizedState=Vi(t,n,a,r);return}}de.flags|=e,i.memoizedState=Vi(1|t,n,a,r)}function bd(e,t){return eo(8390656,8,e,t)}function jc(e,t){return il(2048,8,e,t)}function E1(e,t){return il(4,2,e,t)}function C1(e,t){return il(4,4,e,t)}function P1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function N1(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,P1.bind(null,t,e),n)}function Fc(){}function _1(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function z1(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function O1(e,t,n){return qn&21?(Ot(n,t)||(n=Tp(),de.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function zv(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),t()}finally{te=n,cs.transition=r}}function A1(){return wt().memoizedState}function Ov(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},R1(e))T1(t,n);else if(n=u1(e,t,n,r),n!==null){var i=Ke();zt(n,e,r,i),I1(n,t,r)}}function Av(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(R1(e))T1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,o)){var s=t.interleaved;s===null?(i.next=i,zc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=u1(e,t,i,r),n!==null&&(i=Ke(),zt(n,e,r,i),I1(n,t,r))}}function R1(e){var t=e.alternate;return e===de||t!==null&&t===de}function T1(e,t){ki=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function I1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}var Ao={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Rv={readContext:yt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:bd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,P1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ov.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:kd,useDebugValue:Fc,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=kd(!1),t=e[0];return e=zv.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Tt();if(ce){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ze===null)throw Error(_(349));qn&30||y1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,bd(x1.bind(null,r,a,e),[e]),r.flags|=2048,Vi(9,w1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=ze.identifierPrefix;if(ce){var n=Qt,r=Yt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_v++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tv={readContext:yt,useCallback:_1,useContext:yt,useEffect:jc,useImperativeHandle:N1,useInsertionEffect:E1,useLayoutEffect:C1,useMemo:z1,useReducer:fs,useRef:b1,useState:function(){return fs(Wi)},useDebugValue:Fc,useDeferredValue:function(e){var t=wt();return O1(t,ke.memoizedState,e)},useTransition:function(){var e=fs(Wi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:v1,useId:A1,unstable_isNewReconciler:!1},Iv={readContext:yt,useCallback:_1,useContext:yt,useEffect:jc,useImperativeHandle:N1,useInsertionEffect:E1,useLayoutEffect:C1,useMemo:z1,useReducer:ds,useRef:b1,useState:function(){return ds(Wi)},useDebugValue:Fc,useDeferredValue:function(e){var t=wt();return ke===null?t.memoizedState=e:O1(t,ke.memoizedState,e)},useTransition:function(){var e=ds(Wi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:v1,useId:A1,unstable_isNewReconciler:!1};function Lr(e,t){try{var n="",r=t;do n+=sg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ps(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function $1(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,Cu=r),hu(e,t)},n}function L1(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){hu(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $v;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kv.bind(null,e,t,n),t.then(e,e))}function Cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Lv=an.ReactCurrentOwner,et=!1;function Ge(e,t,n,r){t.child=e===null?m1(t,null,n,r):Ir(t,e.child,n,r)}function Nd(e,t,n,r,i){n=n.render;var a=t.ref;return _r(t,i),r=$c(e,t,n,r,a,i),n=Lc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&n&&bc(t),t.flags|=1,Ge(e,t,r,i),t.child)}function _d(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Yc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,j1(e,t,a,r,i)):(e=io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(o,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=_n(a,r),e.ref=t.ref,e.return=t,t.child=e}function j1(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ji(a,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return gu(e,t,n,r,i)}function F1(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(wr,at),at|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(wr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ae(wr,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ae(wr,at),at|=r;return Ge(e,t,i,n),t.child}function M1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var a=nt(n)?Xn:We.current;return a=Rr(t,a),_r(t,i),n=$c(e,t,n,r,a,i),r=Lc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&r&&bc(t),t.flags|=1,Ge(e,t,n,i),t.child)}function zd(e,t,n,r,i){if(nt(n)){var a=!0;bo(t)}else a=!1;if(_r(t,i),t.stateNode===null)to(e,t),d1(t,n,r),mu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=nt(n)?Xn:We.current,u=Rr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&xd(t,o,r,u),mn=!1;var h=t.memoizedState;o.state=h,_o(t,r,o,i),s=t.memoizedState,l!==r||h!==s||tt.current||mn?(typeof c=="function"&&(pu(t,n,c,r),s=t.memoizedState),(l=mn||wd(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,c1(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Et(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=nt(n)?Xn:We.current,s=Rr(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&xd(t,o,r,s),mn=!1,h=t.memoizedState,o.state=h,_o(t,r,o,i);var g=t.memoizedState;l!==d||h!==g||tt.current||mn?(typeof w=="function"&&(pu(t,n,w,r),g=t.memoizedState),(u=mn||wd(t,n,u,r,h,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,a,i)}function vu(e,t,n,r,i,a){M1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&md(t,n,!1),Zt(e,t,a);r=t.stateNode,Lv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ir(t,e.child,null,a),t.child=Ir(t,null,l,a)):Ge(e,t,l,a),t.memoizedState=r.state,i&&md(t,n,!0),t.child}function D1(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),Ac(e,t.containerInfo)}function Od(e,t,n,r,i){return Tr(),Cc(i),t.flags|=256,Ge(e,t,n,r),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function U1(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ll(o,r,0,null),e=Kn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=wu(n),t.memoizedState=yu,e):Mc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=_n(l,a):(a=Kn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=yu,r}return a=e.child,e=a.sibling,r=_n(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mc(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Na(e,t,n,r){return r!==null&&Cc(r),Ir(t,e.child,null,n),e=Mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ps(Error(_(422))),Na(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ll({mode:"visible",children:r.children},i,0,null),a=Kn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ir(t,e.child,null,o),t.child.memoizedState=wu(o),t.memoizedState=yu,a);if(!(t.mode&1))return Na(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(_(419)),r=ps(a,r,void 0),Na(e,t,o,r)}if(l=(o&e.childLanes)!==0,et||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,qt(e,i),zt(r,e,i,-1))}return Vc(),r=ps(Error(_(421))),Na(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ot=En(i.nextSibling),lt=t,ce=!0,Pt=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=Jn,Yt=e.id,Qt=e.overflow,Jn=t),t=Mc(t,r.children),t.flags|=4096,t)}function Ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function ms(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function B1(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ge(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,n,t);else if(e.tag===19)Ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ms(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ms(t,!0,n,null,a);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fv(e,t,n){switch(t.tag){case 3:D1(t),Tr();break;case 5:h1(t);break;case 1:nt(t.type)&&bo(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?U1(e,t,n):(ae(fe,fe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return B1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,F1(e,t,n)}return Zt(e,t,n)}var H1,xu,W1,V1;H1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};W1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Dt.current);var a=null;switch(n){case"input":i=Bs(e,i),r=Bs(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Vs(e,i),r=Vs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}Qs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};V1=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mv(e,t,n){var r=t.pendingProps;switch(Ec(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return nt(t.type)&&ko(),Be(t),null;case 3:return r=t.stateNode,$r(),se(tt),se(We),Tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(_u(Pt),Pt=null))),xu(e,t),Be(t),null;case 5:Rc(t);var i=Vn(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)W1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Be(t),null}if(e=Vn(Dt.current),Ca(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[Di]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)oe(hi[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Df(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":Bf(r,a),oe("invalid",r)}Qs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),i=["children",""+l]):Oi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ga(r),Uf(r,a,!0);break;case"textarea":ga(r),Hf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=So)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[Di]=r,H1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gs(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)oe(hi[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Df(e,r),i=Bs(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Bf(e,r),i=Vs(e,r),oe("invalid",e);break;default:i=r}Qs(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Sp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&wp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ai(e,s):typeof s=="number"&&Ai(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Oi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&uc(e,a,s,o))}switch(n){case"input":ga(e),Uf(e,r,!1);break;case"textarea":ga(e),Hf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Er(e,!!r.multiple,a,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)V1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Vn(Bi.current),Vn(Dt.current),Ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Be(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ot!==null&&t.mode&1&&!(t.flags&128))s1(),Tr(),t.flags|=98560,a=!1;else if(a=Ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[It]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),a=!1}else Pt!==null&&(_u(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?be===0&&(be=3):Vc())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return $r(),xu(e,t),e===null&&Fi(t.stateNode.containerInfo),Be(t),null;case 10:return _c(t.type._context),Be(t),null;case 17:return nt(t.type)&&ko(),Be(t),null;case 19:if(se(fe),a=t.memoizedState,a===null)return Be(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)oi(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,oi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>jr&&(t.flags|=128,r=!0,oi(a,!1),t.lanes=4194304)}else{if(!r)if(e=zo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Be(t),null}else 2*ye()-a.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,oi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Wc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Dv(e,t){switch(Ec(t),t.tag){case 1:return nt(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),se(tt),se(We),Tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return $r(),null;case 10:return _c(t.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var _a=!1,He=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,j=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){he(e,t,r)}}var Rd=!1;function Bv(e,t){if(iu=yo,e=Kp(),kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)h=d,d=w;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=o),h===a&&++c===r&&(s=o),(w=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},yo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Et(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Rd,Rd=!1,g}function bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Su(t,n,a)}i=i.next}while(i!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Y1(e){var t=e.alternate;t!==null&&(e.alternate=null,Y1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Di],delete t[su],delete t[Ev],delete t[Cv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Q1(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,n),e=e.sibling;e!==null;)bu(e,t,n),e=e.sibling}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}var Le=null,Ct=!1;function un(e,t,n){for(n=n.child;n!==null;)G1(e,t,n),n=n.sibling}function G1(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:He||yr(n,t);case 6:var r=Le,i=Ct;Le=null,un(e,t,n),Le=r,Ct=i,Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?ls(e.parentNode,n):e.nodeType===1&&ls(e,n),$i(e)):ls(Le,n.stateNode));break;case 4:r=Le,i=Ct,Le=n.stateNode.containerInfo,Ct=!0,un(e,t,n),Le=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Su(n,t,o),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!He&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,un(e,t,n),He=r):un(e,t,n);break;default:un(e,t,n)}}function Id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uv),t.forEach(function(r){var i=Jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Ct=!1;break e;case 3:Le=l.stateNode.containerInfo,Ct=!0;break e;case 4:Le=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Le===null)throw Error(_(160));G1(a,o,i),Le=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)K1(t,e),t=t.sibling}function K1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),At(e),r&4){try{bi(3,e,e.return),al(3,e)}catch(v){he(e,e.return,v)}try{bi(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:kt(t,e),At(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(kt(t,e),At(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Ai(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&gp(i,a),Gs(l,o);var u=Gs(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?Sp(i,d):c==="dangerouslySetInnerHTML"?wp(i,d):c==="children"?Ai(i,d):uc(i,c,d,u)}switch(l){case"input":Hs(i,a);break;case"textarea":vp(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?Er(i,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?Er(i,!!a.multiple,a.defaultValue,!0):Er(i,!!a.multiple,a.multiple?[]:"",!1))}i[Di]=a}catch(v){he(e,e.return,v)}}break;case 6:if(kt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){he(e,e.return,v)}}break;case 3:if(kt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:kt(t,e),At(e);break;case 13:kt(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Bc=ye())),r&4&&Id(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,kt(t,e),He=u):kt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:bi(4,h,h.return);break;case 1:yr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){Ld(d);continue}}w!==null?(w.return=h,j=w):Ld(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=xp("display",o))}catch(v){he(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){he(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),At(e),r&4&&Id(e);break;case 21:break;default:kt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Q1(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var a=Td(e);Eu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Td(e);bu(e,l,o);break;default:throw Error(_(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hv(e,t,n){j=e,X1(e)}function X1(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||He;l=_a;var u=He;if(_a=o,(He=s)&&!u)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?jd(i):s!==null?(s.return=o,j=s):jd(i);for(;a!==null;)j=a,X1(a),a=a.sibling;j=i,_a=l,He=u}$d(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):$d(e)}}function $d(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&yd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}He||t.flags&512&&ku(t)}catch(h){he(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ld(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function jd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{ku(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{ku(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var Wv=Math.ceil,Ro=an.ReactCurrentDispatcher,Dc=an.ReactCurrentOwner,vt=an.ReactCurrentBatchConfig,X=0,ze=null,we=null,je=0,at=0,wr=Fn(0),be=0,Yi=null,Zn=0,ol=0,Uc=0,Ei=null,Ze=null,Bc=0,jr=1/0,Wt=null,To=!1,Cu=null,Pn=null,za=!1,yn=null,Io=0,Ci=0,Pu=null,no=-1,ro=0;function Ke(){return X&6?ye():no!==-1?no:no=ye()}function Nn(e){return e.mode&1?X&2&&je!==0?je&-je:Nv.transition!==null?(ro===0&&(ro=Tp()),ro):(e=te,e!==0||(e=window.event,e=e===void 0?16:Dp(e.type)),e):1}function zt(e,t,n,r){if(50<Ci)throw Ci=0,Pu=null,Error(_(185));ra(e,n,r),(!(X&2)||e!==ze)&&(e===ze&&(!(X&2)&&(ol|=n),be===4&&gn(e,je)),rt(e,r),n===1&&X===0&&!(t.mode&1)&&(jr=ye()+500,nl&&Mn()))}function rt(e,t){var n=e.callbackNode;Ng(e,t);var r=vo(e,e===ze?je:0);if(r===0)n!==null&&Yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yf(n),t===1)e.tag===0?Pv(Fd.bind(null,e)):a1(Fd.bind(null,e)),kv(function(){!(X&6)&&Mn()}),n=null;else{switch(Ip(r)){case 1:n=mc;break;case 4:n=Ap;break;case 16:n=go;break;case 536870912:n=Rp;break;default:n=go}n=im(n,J1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J1(e,t){if(no=-1,ro=0,X&6)throw Error(_(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=vo(e,e===ze?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=X;X|=2;var a=Z1();(ze!==e||je!==t)&&(Wt=null,jr=ye()+500,Gn(e,t));do try{Qv();break}catch(l){q1(e,l)}while(1);Nc(),Ro.current=a,X=i,we!==null?t=0:(ze=null,je=0,t=be)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(r=i,t=Nu(e,i))),t===1)throw n=Yi,Gn(e,0),gn(e,r),rt(e,ye()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Vv(i)&&(t=$o(e,r),t===2&&(a=Zs(e),a!==0&&(r=a,t=Nu(e,a))),t===1))throw n=Yi,Gn(e,0),gn(e,r),rt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Bn(e,Ze,Wt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Bc+500-ye(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lu(Bn.bind(null,e,Ze,Wt),t);break}Bn(e,Ze,Wt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-_t(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wv(r/1960))-r,10<r){e.timeoutHandle=lu(Bn.bind(null,e,Ze,Wt),r);break}Bn(e,Ze,Wt);break;case 5:Bn(e,Ze,Wt);break;default:throw Error(_(329))}}}return rt(e,ye()),e.callbackNode===n?J1.bind(null,e):null}function Nu(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&_u(t)),e}function _u(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ot(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Uc,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Fd(e){if(X&6)throw Error(_(327));zr();var t=vo(e,0);if(!(t&1))return rt(e,ye()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=Yi,Gn(e,0),gn(e,t),rt(e,ye()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,Ze,Wt),rt(e,ye()),null}function Hc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(jr=ye()+500,nl&&Mn())}}function er(e){yn!==null&&yn.tag===0&&!(X&6)&&zr();var t=X;X|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,e)return e()}finally{te=r,vt.transition=n,X=t,!(X&6)&&Mn()}}function Wc(){at=wr.current,se(wr)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sv(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:$r(),se(tt),se(We),Tc();break;case 5:Rc(r);break;case 4:$r();break;case 13:se(fe);break;case 19:se(fe);break;case 10:_c(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(ze=e,we=e=_n(e.current,null),je=at=t,be=0,Yi=null,Uc=ol=Zn=0,Ze=Ei=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wn=null}return e}function q1(e,t){do{var n=we;try{if(Nc(),Za.current=Ao,Oo){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oo=!1}if(qn=0,Ne=ke=de=null,ki=!1,Hi=0,Dc.current=null,n===null||n.return===null){be=1,Yi=t,we=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=je,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Cd(o);if(w!==null){w.flags&=-257,Pd(w,o,l,a,t),w.mode&1&&Ed(a,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Ed(a,u,t),Vc();break e}s=Error(_(426))}}else if(ce&&l.mode&1){var x=Cd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Pd(x,o,l,a,t),Cc(Lr(s,l));break e}}a=s=Lr(s,l),be!==4&&(be=2),Ei===null?Ei=[a]:Ei.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=$1(a,s,t);vd(a,m);break e;case 1:l=s;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pn===null||!Pn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=L1(a,l,t);vd(a,S);break e}}a=a.return}while(a!==null)}tm(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Z1(){var e=Ro.current;return Ro.current=Ao,e===null?Ao:e}function Vc(){(be===0||be===3||be===2)&&(be=4),ze===null||!(Zn&268435455)&&!(ol&268435455)||gn(ze,je)}function $o(e,t){var n=X;X|=2;var r=Z1();(ze!==e||je!==t)&&(Wt=null,Gn(e,t));do try{Yv();break}catch(i){q1(e,i)}while(1);if(Nc(),X=n,Ro.current=r,we!==null)throw Error(_(261));return ze=null,je=0,be}function Yv(){for(;we!==null;)em(we)}function Qv(){for(;we!==null&&!yg();)em(we)}function em(e){var t=rm(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?tm(e):we=t,Dc.current=null}function tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dv(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,we=null;return}}else if(n=Mv(n,t,at),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);be===0&&(be=5)}function Bn(e,t,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,Gv(e,t,n,r)}finally{vt.transition=i,te=r}return null}function Gv(e,t,n,r){do zr();while(yn!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(_g(e,a),e===ze&&(we=ze=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,im(go,function(){return zr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vt.transition,vt.transition=null;var o=te;te=1;var l=X;X|=4,Dc.current=null,Bv(e,n),K1(n,e),mv(au),yo=!!iu,au=iu=null,e.current=n,Hv(n),wg(),X=l,te=o,vt.transition=a}else e.current=n;if(za&&(za=!1,yn=e,Io=i),a=e.pendingLanes,a===0&&(Pn=null),kg(n.stateNode),rt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,e=Cu,Cu=null,e;return Io&1&&e.tag!==0&&zr(),a=e.pendingLanes,a&1?e===Pu?Ci++:(Ci=0,Pu=e):Ci=0,Mn(),null}function zr(){if(yn!==null){var e=Ip(Io),t=vt.transition,n=te;try{if(vt.transition=null,te=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Io=0,X&6)throw Error(_(331));var i=X;for(X|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:bi(8,c,a)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,w=c.return;if(Y1(c),c===u){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:bi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var p=e.current;for(j=p;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=p;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:al(9,l)}}catch(C){he(l,l.return,C)}if(l===o){j=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,j=S;break e}j=l.return}}if(X=i,Mn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{te=n,vt.transition=t}}return!1}function Md(e,t,n){t=Lr(n,t),t=$1(e,t,1),e=Cn(e,t,1),t=Ke(),e!==null&&(ra(e,1,t),rt(e,t))}function he(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Lr(n,e),e=L1(t,e,1),t=Cn(t,e,1),e=Ke(),t!==null&&(ra(t,1,e),rt(t,e));break}}t=t.return}}function Kv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(je&n)===n&&(be===4||be===3&&(je&130023424)===je&&500>ye()-Bc?Gn(e,0):Uc|=n),rt(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):t=1);var n=Ke();e=qt(e,t),e!==null&&(ra(e,t,n),rt(e,n))}function Xv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nm(e,n)}function Jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),nm(e,n)}var rm;rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Fv(e,t,n);et=!!(e.flags&131072)}else et=!1,ce&&t.flags&1048576&&o1(t,Co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var i=Rr(t,We.current);_r(t,n),i=$c(null,t,r,e,i,n);var a=Lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(a=!0,bo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oc(t),i.updater=rl,t.stateNode=i,i._reactInternals=t,mu(t,r,e,n),t=vu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&bc(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zv(r),e=Et(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=zd(null,t,r,e,n);break e;case 11:t=Nd(null,t,r,e,n);break e;case 14:t=_d(null,t,r,Et(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),zd(e,t,r,i,n);case 3:e:{if(D1(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,c1(e,t),_o(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Lr(Error(_(423)),t),t=Od(e,t,r,n,i);break e}else if(r!==i){i=Lr(Error(_(424)),t),t=Od(e,t,r,n,i);break e}else for(ot=En(t.stateNode.containerInfo.firstChild),lt=t,ce=!0,Pt=null,n=m1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){t=Zt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return h1(t),e===null&&fu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,ou(r,i)?o=null:a!==null&&ou(r,a)&&(t.flags|=32),M1(e,t),Ge(e,t,o,n),t.child;case 6:return e===null&&fu(t),null;case 13:return U1(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Nd(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ae(Po,r._currentValue),r._currentValue=o,a!==null)if(Ot(a.value,o)){if(a.children===i.children&&!tt.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Gt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),du(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),du(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=yt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),_d(e,t,r,i,n);case 15:return j1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),to(e,t),t.tag=1,nt(r)?(e=!0,bo(t)):e=!1,_r(t,n),d1(t,r,i),mu(t,r,i,n),vu(null,t,r,!0,e,n);case 19:return B1(e,t,n);case 22:return F1(e,t,n)}throw Error(_(156,t.tag))};function im(e,t){return Op(e,t)}function qv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new qv(e,t,n,r)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zv(e){if(typeof e=="function")return Yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===dc)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Yc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ur:return Kn(n.children,i,a,t);case cc:o=8,i|=8;break;case Fs:return e=ht(12,n,t,i|2),e.elementType=Fs,e.lanes=a,e;case Ms:return e=ht(13,n,t,i),e.elementType=Ms,e.lanes=a,e;case Ds:return e=ht(19,n,t,i),e.elementType=Ds,e.lanes=a,e;case pp:return ll(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fp:o=10;break e;case dp:o=9;break e;case fc:o=11;break e;case dc:o=14;break e;case pn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ht(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Kn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=ht(22,e,r,t),e.elementType=pp,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,a,o,l,s){return e=new e2(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ht(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(a),e}function t2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function am(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(nt(n))return i1(e,n,t)}return t}function om(e,t,n,r,i,a,o,l,s){return e=Qc(n,r,!0,e,i,a,o,l,s),e.context=am(null),n=e.current,r=Ke(),i=Nn(n),a=Gt(r,i),a.callback=t??null,Cn(n,a,i),e.current.lanes=i,ra(e,i,r),rt(e,r),e}function sl(e,t,n,r){var i=t.current,a=Ke(),o=Nn(i);return n=am(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(zt(e,i,o,a),qa(e,i,o)),o}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){Dd(e,t),(e=e.alternate)&&Dd(e,t)}function n2(){return null}var lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}ul.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));sl(e,t,null,null)};ul.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){sl(null,e,null,null)}),t[Jt]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&Mp(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function r2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Lo(o);a.call(u)}}var o=om(t,r,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=o,e[Jt]=o.current,Fi(e.nodeType===8?e.parentNode:e),er(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Lo(s);l.call(u)}}var s=Qc(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=s,e[Jt]=s.current,Fi(e.nodeType===8?e.parentNode:e),er(function(){sl(t,s,n,r)}),s}function fl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Lo(o);l.call(s)}}sl(t,o,e,i)}else o=r2(n,t,e,i,r);return Lo(o)}$p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mi(t.pendingLanes);n!==0&&(hc(t,n|1),rt(t,ye()),!(X&6)&&(jr=ye()+500,Mn()))}break;case 13:er(function(){var r=qt(e,1);if(r!==null){var i=Ke();zt(r,e,1,i)}}),Gc(e,1)}};gc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Ke();zt(t,e,134217728,n)}Gc(e,134217728)}};Lp=function(e){if(e.tag===13){var t=Nn(e),n=qt(e,t);if(n!==null){var r=Ke();zt(n,e,t,r)}Gc(e,t)}};jp=function(){return te};Fp=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Xs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(_(90));hp(r),Hs(r,i)}}}break;case"textarea":vp(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Ep=Hc;Cp=er;var i2={usingClientEntryPoint:!1,Events:[aa,pr,tl,kp,bp,Hc]},li={findFiberByHostInstance:Hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a2={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||n2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Jo=Oa.inject(a2),Mt=Oa}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i2;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(_(200));return t2(e,t,null,n)};ut.createRoot=function(e,t){if(!Xc(e))throw Error(_(299));var n=!1,r="",i=lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,Fi(e.nodeType===8?e.parentNode:e),new Kc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return er(e)};ut.hydrate=function(e,t,n){if(!cl(t))throw Error(_(200));return fl(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=lm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=om(t,null,e,1,n??null,i,!1,a,o),e[Jt]=t.current,Fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ul(t)};ut.render=function(e,t,n){if(!cl(t))throw Error(_(200));return fl(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!cl(e))throw Error(_(40));return e._reactRootContainer?(er(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ut.unstable_batchedUpdates=Hc;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return fl(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(ng);var Bd=$s;Is.createRoot=Bd.createRoot,Is.hydrateRoot=Bd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Hd="popstate";function o2(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return zu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jo(i)}return s2(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l2(){return Math.random().toString(36).substr(2,8)}function Wd(e,t){return{usr:e.state,key:e.key,idx:t}}function zu(e,t,n,r){return n===void 0&&(n=null),Qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||l2()})}function jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=wn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Qi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=wn.Pop;let x=c(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function h(x,m){l=wn.Push;let p=zu(v.location,x,m);n&&n(p,x),u=c()+1;let y=Wd(p,u),S=v.createHref(p);try{o.pushState(y,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function w(x,m){l=wn.Replace;let p=zu(v.location,x,m);n&&n(p,x),u=c();let y=Wd(p,u),S=v.createHref(p);o.replaceState(y,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:jo(x);return xe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Hd,d),s=x,()=>{i.removeEventListener(Hd,d),s=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(x){return o.go(x)}};return v}var Vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vd||(Vd={}));function u2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,i=qc(r.pathname||"/",n);if(i==null)return null;let a=sm(e);c2(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=w2(a[l],k2(i));return o}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=zn([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sm(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:v2(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of um(a.path))i(a,o,s)}),t}function um(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=um(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function c2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f2=/^:\w+$/,d2=3,p2=2,m2=1,h2=10,g2=-2,Yd=e=>e==="*";function v2(e,t){let n=e.split("/"),r=n.length;return n.some(Yd)&&(r+=g2),t&&(r+=p2),n.filter(i=>!Yd(i)).reduce((i,a)=>i+(f2.test(a)?d2:a===""?m2:h2),r)}function y2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w2(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=x2({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;a.push({params:r,pathname:zn([i,c.pathname]),pathnameBase:P2(zn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=zn([i,c.pathnameBase]))}return a}function x2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=b2(l[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function S2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function k2(e){try{return decodeURI(e)}catch(t){return Jc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function b2(e,t){try{return decodeURIComponent(e)}catch(n){return Jc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function qc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function E2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:C2(n,t):t,search:N2(r),hash:_2(i)}}function C2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Qi({},e),xe(!i.pathname||!i.pathname.includes("?"),vs("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),vs("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),vs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=E2(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),P2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const A2=typeof Object.is=="function"?Object.is:O2,{useState:R2,useEffect:T2,useLayoutEffect:I2,useDebugValue:$2}=Ts;function L2(e,t,n){const r=t(),[{inst:i},a]=R2({inst:{value:r,getSnapshot:t}});return I2(()=>{i.value=r,i.getSnapshot=t,ys(i)&&a({inst:i})},[e,r,t]),T2(()=>(ys(i)&&a({inst:i}),e(()=>{ys(i)&&a({inst:i})})),[e]),$2(r),r}function ys(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!A2(n,r)}catch{return!0}}function j2(e,t,n){return t()}const F2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M2=!F2,D2=M2?j2:L2;"useSyncExternalStore"in Ts&&(e=>e.useSyncExternalStore)(Ts);const dm=b.createContext(null),dl=b.createContext(null),Vr=b.createContext(null),pl=b.createContext(null),Yr=b.createContext({outlet:null,matches:[]}),pm=b.createContext(null);function Ou(){return Ou=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ou.apply(this,arguments)}function U2(e,t){let{relative:n}=t===void 0?{}:t;Qr()||xe(!1);let{basename:r,navigator:i}=b.useContext(Vr),{hash:a,pathname:o,search:l}=Zc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:zn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Qr(){return b.useContext(pl)!=null}function Gr(){return Qr()||xe(!1),b.useContext(pl).location}function ml(){Qr()||xe(!1);let{basename:e,navigator:t}=b.useContext(Vr),{matches:n}=b.useContext(Yr),{pathname:r}=Gr(),i=JSON.stringify(cm(n).map(l=>l.pathnameBase)),a=b.useRef(!1);return b.useEffect(()=>{a.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=fm(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:zn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function Zc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Yr),{pathname:i}=Gr(),a=JSON.stringify(cm(r).map(o=>o.pathnameBase));return b.useMemo(()=>fm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function B2(e,t){Qr()||xe(!1);let{navigator:n}=b.useContext(Vr),r=b.useContext(dl),{matches:i}=b.useContext(Yr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Gr(),u;if(t){var c;let v=typeof t=="string"?Wr(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||xe(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",w=u2(e,{pathname:h}),g=Y2(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:zn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:zn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&g?b.createElement(pl.Provider,{value:{location:Ou({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wn.Pop}},g):g}function H2(){let e=X2(),t=z2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}class W2 extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Yr.Provider,{value:this.props.routeContext},b.createElement(pm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V2(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(dm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Yr.Provider,{value:t},r)}function Y2(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||xe(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement(H2,null));let c=t.concat(r.slice(0,l+1)),d=()=>{let h=a;return s?h=u:o.route.Component?h=b.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),b.createElement(V2,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?b.createElement(W2,{location:n.location,component:u,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Qd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Qd||(Qd={}));var Fo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fo||(Fo={}));function Q2(e){let t=b.useContext(dl);return t||xe(!1),t}function G2(e){let t=b.useContext(Yr);return t||xe(!1),t}function K2(e){let t=G2(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function X2(){var e;let t=b.useContext(pm),n=Q2(Fo.UseRouteError),r=K2(Fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function J2(e){let{to:t,replace:n,state:r,relative:i}=e;Qr()||xe(!1);let a=b.useContext(dl),o=ml();return b.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Rt(e){xe(!1)}function q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:a,static:o=!1}=e;Qr()&&xe(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:w="default"}=r,g=b.useMemo(()=>{let v=qc(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:w},navigationType:i}},[l,u,c,d,h,w,i]);return g==null?null:b.createElement(Vr.Provider,{value:s},b.createElement(pl.Provider,{children:n,value:g}))}function Z2(e){let{children:t,location:n}=e,r=b.useContext(dm),i=r&&!t?r.router.routes:Au(t);return B2(i,n)}var Gd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Gd||(Gd={}));new Promise(()=>{});function Au(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,Au(r.props.children,t));return}r.type!==Rt&&xe(!1),!r.props.index||!r.props.children||xe(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Au(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ey(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ty(e,t){return e.button===0&&(!t||t==="_self")&&!ey(e)}const ny=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ry=["aria-current","caseSensitive","className","end","style","to","children"];function iy(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=o2({window:r,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location});return b.useLayoutEffect(()=>a.listen(l),[a]),b.createElement(q2,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const ay=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ef=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,d=mm(t,ny),{basename:h}=b.useContext(Vr),w,g=!1;if(typeof u=="string"&&oy.test(u)&&(w=u,ay)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=qc(y.pathname,h);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:g=!0}let v=U2(u,{relative:i}),x=ly(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||x(p)}return b.createElement("a",Mo({},d,{href:w||v,onClick:g||a?r:m,ref:n,target:s}))}),Qe=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=mm(t,ry),d=Zc(s,{relative:c.relative}),h=Gr(),w=b.useContext(dl),{navigator:g}=b.useContext(Vr),v=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,x=h.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),S=p?r:void 0,C;typeof a=="function"?C=a({isActive:p,isPending:y}):C=[a,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let O=typeof l=="function"?l({isActive:p,isPending:y}):l;return b.createElement(ef,Mo({},c,{"aria-current":S,className:C,ref:n,style:O,to:s}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var Kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Kd||(Kd={}));var Xd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xd||(Xd={}));function ly(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=ml(),s=Gr(),u=Zc(e,{relative:o});return b.useCallback(c=>{if(ty(c,n)){c.preventDefault();let d=r!==void 0?r:jo(s)===jo(u);l(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var Do={},sy={get exports(){return Do},set exports(e){Do=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=Symbol.for("react.element"),nf=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),yl=Symbol.for("react.provider"),wl=Symbol.for("react.context"),uy=Symbol.for("react.server_context"),xl=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),El=Symbol.for("react.lazy"),cy=Symbol.for("react.offscreen"),hm;hm=Symbol.for("react.module.reference");function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tf:switch(e=e.type,e){case hl:case vl:case gl:case Sl:case kl:return e;default:switch(e=e&&e.$$typeof,e){case uy:case wl:case xl:case El:case bl:case yl:return e;default:return t}}case nf:return t}}}ne.ContextConsumer=wl;ne.ContextProvider=yl;ne.Element=tf;ne.ForwardRef=xl;ne.Fragment=hl;ne.Lazy=El;ne.Memo=bl;ne.Portal=nf;ne.Profiler=vl;ne.StrictMode=gl;ne.Suspense=Sl;ne.SuspenseList=kl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return xt(e)===wl};ne.isContextProvider=function(e){return xt(e)===yl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tf};ne.isForwardRef=function(e){return xt(e)===xl};ne.isFragment=function(e){return xt(e)===hl};ne.isLazy=function(e){return xt(e)===El};ne.isMemo=function(e){return xt(e)===bl};ne.isPortal=function(e){return xt(e)===nf};ne.isProfiler=function(e){return xt(e)===vl};ne.isStrictMode=function(e){return xt(e)===gl};ne.isSuspense=function(e){return xt(e)===Sl};ne.isSuspenseList=function(e){return xt(e)===kl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hl||e===vl||e===gl||e===Sl||e===kl||e===cy||typeof e=="object"&&e!==null&&(e.$$typeof===El||e.$$typeof===bl||e.$$typeof===yl||e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===hm||e.getModuleId!==void 0)};ne.typeOf=xt;(function(e){e.exports=ne})(sy);function fy(e){function t(T,I,L,B,k){for(var G=0,R=0,me=0,q=0,ee,V,Re=0,qe=0,J,De=J=ee=0,Z=0,Te=0,qr=0,Ie=0,pa=L.length,Zr=pa-1,St,H="",ve="",Hl="",Wl="",sn;Z<pa;){if(V=L.charCodeAt(Z),Z===Zr&&R+q+me+G!==0&&(R!==0&&(V=R===47?10:47),q=me=G=0,pa++,Zr++),R+q+me+G===0){if(Z===Zr&&(0<Te&&(H=H.replace(h,"")),0<H.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:H+=L.charAt(Z)}V=59}switch(V){case 123:for(H=H.trim(),ee=H.charCodeAt(0),J=1,Ie=++Z;Z<pa;){switch(V=L.charCodeAt(Z)){case 123:J++;break;case 125:J--;break;case 47:switch(V=L.charCodeAt(Z+1)){case 42:case 47:e:{for(De=Z+1;De<Zr;++De)switch(L.charCodeAt(De)){case 47:if(V===42&&L.charCodeAt(De-1)===42&&Z+2!==De){Z=De+1;break e}break;case 10:if(V===47){Z=De+1;break e}}Z=De}}break;case 91:V++;case 40:V++;case 34:case 39:for(;Z++<Zr&&L.charCodeAt(Z)!==V;);}if(J===0)break;Z++}switch(J=L.substring(Ie,Z),ee===0&&(ee=(H=H.replace(d,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Te&&(H=H.replace(h,"")),V=H.charCodeAt(1),V){case 100:case 109:case 115:case 45:Te=I;break;default:Te=Bt}if(J=t(I,Te,J,V,k+1),Ie=J.length,0<A&&(Te=n(Bt,H,qr),sn=l(3,J,Te,I,Ae,Se,Ie,V,k,B),H=Te.join(""),sn!==void 0&&(Ie=(J=sn.trim()).length)===0&&(V=0,J="")),0<Ie)switch(V){case 115:H=H.replace(O,o);case 100:case 109:case 45:J=H+"{"+J+"}";break;case 107:H=H.replace(p,"$1 $2"),J=H+"{"+J+"}",J=Me===1||Me===2&&a("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=H+J,B===112&&(J=(ve+=J,""))}else J="";break;default:J=t(I,n(I,H,qr),J,B,k+1)}Hl+=J,J=qr=Te=De=ee=0,H="",V=L.charCodeAt(++Z);break;case 125:case 59:if(H=(0<Te?H.replace(h,""):H).trim(),1<(Ie=H.length))switch(De===0&&(ee=H.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Ie=(H=H.replace(" ",":")).length),0<A&&(sn=l(1,H,I,T,Ae,Se,ve.length,B,k,B))!==void 0&&(Ie=(H=sn.trim()).length)===0&&(H="\0\0"),ee=H.charCodeAt(0),V=H.charCodeAt(1),ee){case 0:break;case 64:if(V===105||V===99){Wl+=H+L.charAt(Z);break}default:H.charCodeAt(Ie-1)!==58&&(ve+=i(H,ee,V,H.charCodeAt(2)))}qr=Te=De=ee=0,H="",V=L.charCodeAt(++Z)}}switch(V){case 13:case 10:R===47?R=0:1+ee===0&&B!==107&&0<H.length&&(Te=1,H+="\0"),0<A*U&&l(0,H,I,T,Ae,Se,ve.length,B,k,B),Se=1,Ae++;break;case 59:case 125:if(R+q+me+G===0){Se++;break}default:switch(Se++,St=L.charAt(Z),V){case 9:case 32:if(q+G+R===0)switch(Re){case 44:case 58:case 9:case 32:St="";break;default:V!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:q+R+G===0&&(Te=qr=1,St="\f"+St);break;case 108:if(q+R+G+it===0&&0<De)switch(Z-De){case 2:Re===112&&L.charCodeAt(Z-3)===58&&(it=Re);case 8:qe===111&&(it=qe)}break;case 58:q+R+G===0&&(De=Z);break;case 44:R+me+q+G===0&&(Te=1,St+="\r");break;case 34:case 39:R===0&&(q=q===V?0:q===0?V:q);break;case 91:q+R+me===0&&G++;break;case 93:q+R+me===0&&G--;break;case 41:q+R+G===0&&me--;break;case 40:if(q+R+G===0){if(ee===0)switch(2*Re+3*qe){case 533:break;default:ee=1}me++}break;case 64:R+me+q+G+De+J===0&&(J=1);break;case 42:case 47:if(!(0<q+G+me))switch(R){case 0:switch(2*V+3*L.charCodeAt(Z+1)){case 235:R=47;break;case 220:Ie=Z,R=42}break;case 42:V===47&&Re===42&&Ie+2!==Z&&(L.charCodeAt(Ie+2)===33&&(ve+=L.substring(Ie,Z+1)),St="",R=0)}}R===0&&(H+=St)}qe=Re,Re=V,Z++}if(Ie=ve.length,0<Ie){if(Te=I,0<A&&(sn=l(2,ve,Te,T,Ae,Se,Ie,B,k,B),sn!==void 0&&(ve=sn).length===0))return Wl+ve+Hl;if(ve=Te.join(",")+"{"+ve+"}",Me*it!==0){switch(Me!==2||a(ve,2)||(it=0),it){case 111:ve=ve.replace(S,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}it=0}}return Wl+ve+Hl}function n(T,I,L){var B=I.trim().split(x);I=B;var k=B.length,G=T.length;switch(G){case 0:case 1:var R=0;for(T=G===0?"":T[0]+" ";R<k;++R)I[R]=r(T,I[R],L).trim();break;default:var me=R=0;for(I=[];R<k;++R)for(var q=0;q<G;++q)I[me++]=r(T[q]+" ",B[R],L).trim()}return I}function r(T,I,L){var B=I.charCodeAt(0);switch(33>B&&(B=(I=I.trim()).charCodeAt(0)),B){case 38:return I.replace(m,"$1"+T.trim());case 58:return T.trim()+I.replace(m,"$1"+T.trim());default:if(0<1*L&&0<I.indexOf("\f"))return I.replace(m,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+I}function i(T,I,L,B){var k=T+";",G=2*I+3*L+4*B;if(G===944){T=k.indexOf(":",9)+1;var R=k.substring(T,k.length-1).trim();return R=k.substring(0,T).trim()+R+";",Me===1||Me===2&&a(R,1)?"-webkit-"+R+R:R}if(Me===0||Me===2&&!a(k,1))return k;switch(G){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(Pe,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return R=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+k+"-ms-flex-pack"+R+k;case 1005:return g.test(k)?k.replace(w,":-webkit-")+k.replace(w,":-moz-")+k:k;case 1e3:switch(R=k.substring(13).trim(),I=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(I)){case 226:R=k.replace(C,"tb");break;case 232:R=k.replace(C,"tb-rl");break;case 220:R=k.replace(C,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+R+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(I=(k=T).length-10,R=(k.charCodeAt(I)===33?k.substring(0,I):k).substring(T.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:k=k.replace(R,"-webkit-"+R)+";"+k;break;case 207:case 102:k=k.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+k.replace(R,"-webkit-"+R)+";"+k.replace(R,"-ms-"+R+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return R=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+R+"-ms-flex-"+R+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(z,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(z,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(D.test(T)===!0)return(R=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),I,L,B).replace(":fill-available",":stretch"):k.replace(R,"-webkit-"+R)+k.replace(R,"-moz-"+R.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,L+B===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+k}return k}function a(T,I){var L=T.indexOf(I===1?":":"{"),B=T.substring(0,I!==3?L:10);return L=T.substring(L+1,T.length-1),M(I!==2?B:B.replace(W,"$1"),L,I)}function o(T,I){var L=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return L!==I+";"?L.replace(N," or ($1)").substring(4):"("+I+")"}function l(T,I,L,B,k,G,R,me,q,ee){for(var V=0,Re=I,qe;V<A;++V)switch(qe=Ye[V].call(c,T,Re,L,B,k,G,R,me,q,ee)){case void 0:case!1:case!0:case null:break;default:Re=qe}if(Re!==I)return Re}function s(T){switch(T){case void 0:case null:A=Ye.length=0;break;default:if(typeof T=="function")Ye[A++]=T;else if(typeof T=="object")for(var I=0,L=T.length;I<L;++I)s(T[I]);else U=!!T|0}return s}function u(T){return T=T.prefix,T!==void 0&&(M=null,T?typeof T!="function"?Me=1:(Me=2,M=T):Me=0),u}function c(T,I){var L=T;if(33>L.charCodeAt(0)&&(L=L.trim()),ie=L,L=[ie],0<A){var B=l(-1,I,L,L,Ae,Se,0,0,0,0);B!==void 0&&typeof B=="string"&&(I=B)}var k=t(Bt,L,I,0,0);return 0<A&&(B=l(-2,k,L,L,Ae,Se,k.length,0,0,0),B!==void 0&&(k=B)),ie="",it=0,Se=Ae=1,k}var d=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,z=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,Se=1,Ae=1,it=0,Me=1,Bt=[],Ye=[],A=0,M=null,U=0,ie="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var dy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function py(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var my=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jd=py(function(e){return my.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ru={},hy={get exports(){return Ru},set exports(e){Ru=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,rf=Oe?Symbol.for("react.element"):60103,af=Oe?Symbol.for("react.portal"):60106,Cl=Oe?Symbol.for("react.fragment"):60107,Pl=Oe?Symbol.for("react.strict_mode"):60108,Nl=Oe?Symbol.for("react.profiler"):60114,_l=Oe?Symbol.for("react.provider"):60109,zl=Oe?Symbol.for("react.context"):60110,of=Oe?Symbol.for("react.async_mode"):60111,Ol=Oe?Symbol.for("react.concurrent_mode"):60111,Al=Oe?Symbol.for("react.forward_ref"):60112,Rl=Oe?Symbol.for("react.suspense"):60113,gy=Oe?Symbol.for("react.suspense_list"):60120,Tl=Oe?Symbol.for("react.memo"):60115,Il=Oe?Symbol.for("react.lazy"):60116,vy=Oe?Symbol.for("react.block"):60121,yy=Oe?Symbol.for("react.fundamental"):60117,wy=Oe?Symbol.for("react.responder"):60118,xy=Oe?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rf:switch(e=e.type,e){case of:case Ol:case Cl:case Nl:case Pl:case Rl:return e;default:switch(e=e&&e.$$typeof,e){case zl:case Al:case Il:case Tl:case _l:return e;default:return t}}case af:return t}}}function gm(e){return ft(e)===Ol}re.AsyncMode=of;re.ConcurrentMode=Ol;re.ContextConsumer=zl;re.ContextProvider=_l;re.Element=rf;re.ForwardRef=Al;re.Fragment=Cl;re.Lazy=Il;re.Memo=Tl;re.Portal=af;re.Profiler=Nl;re.StrictMode=Pl;re.Suspense=Rl;re.isAsyncMode=function(e){return gm(e)||ft(e)===of};re.isConcurrentMode=gm;re.isContextConsumer=function(e){return ft(e)===zl};re.isContextProvider=function(e){return ft(e)===_l};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rf};re.isForwardRef=function(e){return ft(e)===Al};re.isFragment=function(e){return ft(e)===Cl};re.isLazy=function(e){return ft(e)===Il};re.isMemo=function(e){return ft(e)===Tl};re.isPortal=function(e){return ft(e)===af};re.isProfiler=function(e){return ft(e)===Nl};re.isStrictMode=function(e){return ft(e)===Pl};re.isSuspense=function(e){return ft(e)===Rl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cl||e===Ol||e===Nl||e===Pl||e===Rl||e===gy||typeof e=="object"&&e!==null&&(e.$$typeof===Il||e.$$typeof===Tl||e.$$typeof===_l||e.$$typeof===zl||e.$$typeof===Al||e.$$typeof===yy||e.$$typeof===wy||e.$$typeof===xy||e.$$typeof===vy)};re.typeOf=ft;(function(e){e.exports=re})(hy);var lf=Ru,Sy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ky={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},by={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sf={};sf[lf.ForwardRef]=by;sf[lf.Memo]=vm;function qd(e){return lf.isMemo(e)?vm:sf[e.$$typeof]||Sy}var Ey=Object.defineProperty,Cy=Object.getOwnPropertyNames,Zd=Object.getOwnPropertySymbols,Py=Object.getOwnPropertyDescriptor,Ny=Object.getPrototypeOf,e0=Object.prototype;function ym(e,t,n){if(typeof t!="string"){if(e0){var r=Ny(t);r&&r!==e0&&ym(e,r,n)}var i=Cy(t);Zd&&(i=i.concat(Zd(t)));for(var a=qd(e),o=qd(t),l=0;l<i.length;++l){var s=i[l];if(!ky[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=Py(t,s);try{Ey(e,s,u)}catch{}}}}return e}var _y=ym;function $t(){return($t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var t0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Tu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Do.typeOf(e)},Uo=Object.freeze([]),On=Object.freeze({});function Gi(e){return typeof e=="function"}function n0(e){return e.displayName||e.name||"Component"}function uf(e){return e&&typeof e.styledComponentId=="string"}var Fr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cf=typeof window<"u"&&"HTMLElement"in window,zy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Oy={};function la(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ay=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&la(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ao=new Map,Bo=new Map,Pi=1,Aa=function(e){if(ao.has(e))return ao.get(e);for(;Bo.has(Pi);)Pi++;var t=Pi++;return ao.set(e,t),Bo.set(t,e),t},Ry=function(e){return Bo.get(e)},Ty=function(e,t){t>=Pi&&(Pi=t+1),ao.set(e,t),Bo.set(t,e)},Iy="style["+Fr+'][data-styled-version="5.3.9"]',$y=new RegExp("^"+Fr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ly=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},jy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match($y);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Ty(u,s),Ly(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},Fy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},wm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Fr))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Fr,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Fy();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},My=function(){function e(n){var r=this.element=wm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}la(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Dy=function(){function e(n){var r=this.element=wm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Uy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),r0=cf,By={isServer:!cf,useCSSOMInjection:!zy},Ho=function(){function e(n,r,i){n===void 0&&(n=On),r===void 0&&(r={}),this.options=$t({},By,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&cf&&r0&&(r0=!1,function(a){for(var o=document.querySelectorAll(Iy),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(Fr)!=="active"&&(jy(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Aa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e($t({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new Uy(o):a?new My(o):new Dy(o),new Ay(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Aa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Aa(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Aa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=Ry(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=Fr+".g"+o+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),a+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},e}(),Hy=/(a)(d)/gi,i0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Iu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=i0(t%52)+n;return(i0(t%52)+n).replace(Hy,"$1-$2")}var xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xm=function(e){return xr(5381,e)};function Sm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gi(n)&&!uf(n))return!1}return!0}var Wy=xm("5.3.9"),Vy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sm(t),this.componentId=n,this.baseHash=xr(Wy,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=tr(this.rules,t,n,r).join(""),l=Iu(xr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=xr(this.baseHash,r.hash),d="",h=0;h<u;h++){var w=this.rules[h];if(typeof w=="string")d+=w;else if(w){var g=tr(w,t,n,r),v=Array.isArray(g)?g.join(""):g;c=xr(c,v+h),d+=v}}if(d){var x=Iu(c>>>0);if(!n.hasNameForId(i,x)){var m=r(d,"."+x,void 0,i);n.insertRules(i,x,m)}a.push(x)}}return a.join(" ")},e}(),Yy=/^\s*\/\/.*$/gm,Qy=[":","[",".","#"];function Gy(e){var t,n,r,i,a=e===void 0?On:e,o=a.options,l=o===void 0?On:o,s=a.plugins,u=s===void 0?Uo:s,c=new fy(l),d=[],h=function(v){function x(m){if(m)try{v(m+"}")}catch{}}return function(m,p,y,S,C,O,N,z,W,D){switch(m){case 1:if(W===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(z===0)return p+"/*|*/";break;case 3:switch(z){case 102:case 112:return v(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(v){d.push(v)}),w=function(v,x,m){return x===0&&Qy.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function g(v,x,m,p){p===void 0&&(p="&");var y=v.replace(Yy,""),S=x&&m?m+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!x?"":x,S)}return c.use([].concat(u,[function(v,x,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,w))},h,function(v){if(v===-2){var x=d;return d=[],x}}])),g.hash=u.length?u.reduce(function(v,x){return x.name||la(15),xr(v,x.name)},5381).toString():"",g}var km=rn.createContext();km.Consumer;var bm=rn.createContext(),Ky=(bm.Consumer,new Ho),$u=Gy();function Em(){return b.useContext(km)||Ky}function Cm(){return b.useContext(bm)||$u}var Xy=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=$u);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return la(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=$u),this.name+t.hash},e}(),Jy=/([A-Z])/,qy=/([A-Z])/g,Zy=/^ms-/,e4=function(e){return"-"+e.toLowerCase()};function a0(e){return Jy.test(e)?e.replace(qy,e4).replace(Zy,"-ms-"):e}var o0=function(e){return e==null||e===!1||e===""};function tr(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=tr(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(o0(e))return"";if(uf(e))return"."+e.styledComponentId;if(Gi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return tr(s,t,n,r)}var u;return e instanceof Xy?n?(e.inject(n,r),e.getName(r)):e:Tu(e)?function c(d,h){var w,g,v=[];for(var x in d)d.hasOwnProperty(x)&&!o0(d[x])&&(Array.isArray(d[x])&&d[x].isCss||Gi(d[x])?v.push(a0(x)+":",d[x],";"):Tu(d[x])?v.push.apply(v,c(d[x],x)):v.push(a0(x)+": "+(w=x,(g=d[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||w in dy?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var l0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Pm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Gi(e)||Tu(e)?l0(tr(t0(Uo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:l0(tr(t0(e,n)))}var Nm=function(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme},t4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n4=/(^-|-$)/g;function ws(e){return e.replace(t4,"-").replace(n4,"")}var _m=function(e){return Iu(xm(e)>>>0)};function Ra(e){return typeof e=="string"&&!0}var Lu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},r4=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function i4(e,t,n){var r=e[n];Lu(t)&&Lu(r)?zm(r,t):e[n]=t}function zm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Lu(o))for(var l in o)r4(l)&&i4(e,o[l],l)}return e}var ff=rn.createContext();ff.Consumer;var xs={};function Om(e,t,n){var r=uf(e),i=!Ra(e),a=t.attrs,o=a===void 0?Uo:a,l=t.componentId,s=l===void 0?function(p,y){var S=typeof p!="string"?"sc":ws(p);xs[S]=(xs[S]||0)+1;var C=S+"-"+_m("5.3.9"+S+xs[S]);return y?y+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return Ra(p)?"styled."+p:"Styled("+n0(p)+")"}(e):u,d=t.displayName&&t.componentId?ws(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,v=new Vy(n,d,r?e.componentStyle:void 0),x=v.isStatic&&o.length===0,m=function(p,y){return function(S,C,O,N){var z=S.attrs,W=S.componentStyle,D=S.defaultProps,Pe=S.foldedComponentIds,Se=S.shouldForwardProp,Ae=S.styledComponentId,it=S.target,Me=function(B,k,G){B===void 0&&(B=On);var R=$t({},k,{theme:B}),me={};return G.forEach(function(q){var ee,V,Re,qe=q;for(ee in Gi(qe)&&(qe=qe(R)),qe)R[ee]=me[ee]=ee==="className"?(V=me[ee],Re=qe[ee],V&&Re?V+" "+Re:V||Re):qe[ee]}),[R,me]}(Nm(C,b.useContext(ff),D)||On,C,z),Bt=Me[0],Ye=Me[1],A=function(B,k,G,R){var me=Em(),q=Cm(),ee=k?B.generateAndInjectStyles(On,me,q):B.generateAndInjectStyles(G,me,q);return ee}(W,N,Bt),M=O,U=Ye.$as||C.$as||Ye.as||C.as||it,ie=Ra(U),T=Ye!==C?$t({},C,{},Ye):C,I={};for(var L in T)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?I.as=T[L]:(Se?Se(L,Jd,U):!ie||Jd(L))&&(I[L]=T[L]));return C.style&&Ye.style!==C.style&&(I.style=$t({},C.style,{},Ye.style)),I.className=Array.prototype.concat(Pe,Ae,A!==Ae?A:null,C.className,Ye.className).filter(Boolean).join(" "),I.ref=M,b.createElement(U,I)}(g,p,y,x)};return m.displayName=c,(g=rn.forwardRef(m)).attrs=h,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=w,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Uo,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(O,N){if(O==null)return{};var z,W,D={},Pe=Object.keys(O);for(W=0;W<Pe.length;W++)z=Pe[W],N.indexOf(z)>=0||(D[z]=O[z]);return D}(t,["componentId"]),C=y&&y+"-"+(Ra(p)?p:ws(n0(p)));return Om(p,$t({},S,{attrs:h,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?zm({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&_y(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ju=function(e){return function t(n,r,i){if(i===void 0&&(i=On),!Do.isValidElementType(r))return la(1,String(r));var a=function(){return n(r,i,Pm.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,$t({},i,{},o))},a.attrs=function(o){return t(n,r,$t({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(Om,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ju[e]=ju(e)});var a4=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Sm(n),Ho.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(tr(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&Ho.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function o4(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pm.apply(void 0,[e].concat(n)),a="sc-global-"+_m(JSON.stringify(i)),o=new a4(i,a);function l(u){var c=Em(),d=Cm(),h=b.useContext(ff),w=b.useRef(c.allocateGSInstance(a)).current;return c.server&&s(w,u,c,h,d),b.useLayoutEffect(function(){if(!c.server)return s(w,u,c,h,d),function(){return o.removeStyles(w,c)}},[w,u,c,h,d]),null}function s(u,c,d,h,w){if(o.isStatic)o.renderStyles(u,Oy,d,w);else{var g=$t({},c,{theme:Nm(c,h,l.defaultProps)});o.renderStyles(u,g,d,w)}}return rn.memo(l)}const Ve=ju,cn={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},_e={mobileS:`(min-width: ${cn.mobileS})`,mobileM:`(min-width: ${cn.mobileM})`,mobileL:`(min-width: ${cn.mobileL})`,tablet:`(min-width: ${cn.tablet})`,laptop:`(min-width: ${cn.laptop})`,laptopL:`(min-width: ${cn.laptopL})`,desktop:`(min-width: ${cn.desktop})`,desktopL:`(min-width: ${cn.desktopL})`};let Ta="#2C4001",Ss="#F2F2F2";const l4=Ve.nav`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 0 2em;
    background: ${Ta};

    .nav-item {
        display: none;
    }
    .bars {
        font-size: 2em;
        z-index: 3;
    }
    img {
        height: auto;
        width: auto;
    }

    .logo {
    }

    a {
        color: ${Ss};
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    ul {
        display: inline-box;
        list-style-type: none;
    }

    .userIcon {
        font-size: 1.5em;
        border: 2px solid #90ac14;
        padding: 0.5em;
        border-radius: 50%;
    }

    .nav-bar {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
    }
    .main-nav {
    }

    .mobile-nav-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: ${Ta};
        position: absolute;
        right: 0;
        z-index: 2;
        top: 0;

        &.active {
            max-height: 500px;
        }
    }

    .mobile-nav {
        color: ${Ss};
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
    }
    .mobile-height {
        height: 100%;
    }
    .nav-width {
        width: 100%;
    }

    .mobile-nav:hover {
        background: ${Ss};
        color: ${Ta};
    }
    .userIcon {
        color: ${Ta};
        font-size: 1em;
        background: white;
    }

    .hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 35px;
        height: 25px;
        cursor: pointer;
        user-select: none;
        z-index: 3;

        .meat {
            border-radius: 2px;
            width: 100%;
            position: absolute;
            height: 3px;
            background: #fff;
            display: block;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

            &:first-child {
                top: 0;
            }

            &:nth-child(2),
            &:nth-child(3) {
                top: 50%;
                transform: translateY(-50%);
            }

            &:last-child {
                bottom: 0;
            }
        }
    }
    .close {
        .meat:first-child,
        .meat:last-child {
            opacity: 0;
        }

        .meat:first-child {
            transform: translateY(20px) scale(0);
        }

        .meat:last-child {
            transform: translateY(-20px) scale(0);
        }

        .meat:nth-child(2) {
            transform: rotate(45deg);
        }

        .meat:nth-child(3) {
            transform: rotate(-45deg);
        }
    }

    @media ${_e.mobileS} {
        min-width: 200px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${_e.mobileM} {
        min-width: 320px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${_e.mobileL} {
        min-width: 375px;
        font-size: 1rem;
        .logo {
            height: 50px;
            width: 100px;
        }
    }

    @media ${_e.tablet} {
        min-width: 425px;
    }

    @media ${_e.laptop} {
        min-width: 768px;
        font-size: 1.8rem;
        .hamburger {
            display: none;
        }
        .page {
            display: flex;
        }
        .logo {
        }
        .nav-item-container {
            display: flex;
        }
        .nav-item {
            font-size: 0.8em;
            padding: 0 1em;
        }
        .user-container {
            display: flex;
            justify-content: center;
        }
    }

    @media ${_e.desktop} {
        min-width: 1441px;
        font-size: 3rem;
        .logo {
            height: 140px;
            width: 160px;
        }
    }

    @media ${_e.desktopL} {
        min-width: 2560px;
        font-size: 4rem;
        .logo {
            height: 280px;
            width: 400px;
        }
    }
`,s4="/assets/PantryPalWhite-2ae508bc.png";/*! js-cookie v3.0.1 | MIT */function Ia(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var u4={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Fu(e,t){function n(i,a,o){if(!(typeof document>"u")){o=Ia({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",Ia({},a,{expires:-1}))},withAttributes:function(i){return Fu(this.converter,Ia({},this.attributes,i))},withConverter:function(i){return Fu(Ia({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Wo=Fu(u4,{path:"/"});function s0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s0(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vo(e){return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vo(e)}function c4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f4(e,t,n){return t&&u0(e.prototype,t),n&&u0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function df(e,t){return p4(e)||h4(e,t)||Am(e,t)||v4()}function sa(e){return d4(e)||m4(e)||Am(e)||g4()}function d4(e){if(Array.isArray(e))return Mu(e)}function p4(e){if(Array.isArray(e))return e}function m4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Am(e,t){if(e){if(typeof e=="string")return Mu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mu(e,t)}}function Mu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c0=function(){},pf={},Rm={},Tm=null,Im={mark:c0,measure:c0};try{typeof window<"u"&&(pf=window),typeof document<"u"&&(Rm=document),typeof MutationObserver<"u"&&(Tm=MutationObserver),typeof performance<"u"&&(Im=performance)}catch{}var y4=pf.navigator||{},f0=y4.userAgent,d0=f0===void 0?"":f0,Tn=pf,ue=Rm,p0=Tm,$a=Im;Tn.document;var on=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",$m=~d0.indexOf("MSIE")||~d0.indexOf("Trident/"),La,ja,Fa,Ma,Da,en="___FONT_AWESOME___",Du=16,Lm="fa",jm="svg-inline--fa",nr="data-fa-i2svg",Uu="data-fa-pseudo-element",w4="data-fa-pseudo-element-pending",mf="data-prefix",hf="data-icon",m0="fontawesome-i2svg",x4="async",S4=["HTML","HEAD","STYLE","SCRIPT"],Fm=function(){try{return!0}catch{return!1}}(),le="classic",ge="sharp",gf=[le,ge];function ua(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Ki=ua((La={},Ee(La,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(La,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),La)),Xi=ua((ja={},Ee(ja,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(ja,ge,{solid:"fass",regular:"fasr"}),ja)),Ji=ua((Fa={},Ee(Fa,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(Fa,ge,{fass:"fa-solid",fasr:"fa-regular"}),Fa)),k4=ua((Ma={},Ee(Ma,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(Ma,ge,{"fa-solid":"fass","fa-regular":"fasr"}),Ma)),b4=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Mm="fa-layers-text",E4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,C4=ua((Da={},Ee(Da,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(Da,ge,{900:"fass",400:"fasr"}),Da)),Dm=[1,2,3,4,5,6,7,8,9,10],P4=Dm.concat([11,12,13,14,15,16,17,18,19,20]),N4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qi=new Set;Object.keys(Xi[le]).map(qi.add.bind(qi));Object.keys(Xi[ge]).map(qi.add.bind(qi));var _4=[].concat(gf,sa(qi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(Dm.map(function(e){return"".concat(e,"x")})).concat(P4.map(function(e){return"w-".concat(e)})),Ni=Tn.FontAwesomeConfig||{};function z4(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function O4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var A4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];A4.forEach(function(e){var t=df(e,2),n=t[0],r=t[1],i=O4(z4(n));i!=null&&(Ni[r]=i)})}var Um={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lm,replacementClass:jm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ni.familyPrefix&&(Ni.cssPrefix=Ni.familyPrefix);var Mr=$($({},Um),Ni);Mr.autoReplaceSvg||(Mr.observeMutations=!1);var F={};Object.keys(Um).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Mr[e]=n,_i.forEach(function(r){return r(F)})},get:function(){return Mr[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){Mr.cssPrefix=t,_i.forEach(function(n){return n(F)})},get:function(){return Mr.cssPrefix}});Tn.FontAwesomeConfig=F;var _i=[];function R4(e){return _i.push(e),function(){_i.splice(_i.indexOf(e),1)}}var fn=Du,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T4(e){if(!(!e||!on)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var I4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zi(){for(var e=12,t="";e-- >0;)t+=I4[Math.random()*62|0];return t}function Kr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vf(e){return e.classList?Kr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Bm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $4(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Bm(e[n]),'" ')},"").trim()}function $l(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yf(e){return e.size!==Lt.size||e.x!==Lt.x||e.y!==Lt.y||e.rotate!==Lt.rotate||e.flipX||e.flipY}function L4(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function j4(e){var t=e.transform,n=e.width,r=n===void 0?Du:n,i=e.height,a=i===void 0?Du:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&$m?s+="translate(".concat(t.x/fn-r/2,"em, ").concat(t.y/fn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/fn,"em), calc(-50% + ").concat(t.y/fn,"em)) "):s+="translate(".concat(t.x/fn,"em, ").concat(t.y/fn,"em) "),s+="scale(".concat(t.size/fn*(t.flipX?-1:1),", ").concat(t.size/fn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var F4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Hm(){var e=Lm,t=jm,n=F.cssPrefix,r=F.replacementClass,i=F4;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var h0=!1;function ks(){F.autoAddCss&&!h0&&(T4(Hm()),h0=!0)}var M4={mixout:function(){return{dom:{css:Hm,insertCss:ks}}},hooks:function(){return{beforeDOMElementCreation:function(){ks()},beforeI2svg:function(){ks()}}}},tn=Tn||{};tn[en]||(tn[en]={});tn[en].styles||(tn[en].styles={});tn[en].hooks||(tn[en].hooks={});tn[en].shims||(tn[en].shims=[]);var Nt=tn[en],Wm=[],D4=function e(){ue.removeEventListener("DOMContentLoaded",e),Yo=1,Wm.map(function(t){return t()})},Yo=!1;on&&(Yo=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Yo||ue.addEventListener("DOMContentLoaded",D4));function U4(e){on&&(Yo?setTimeout(e,0):Wm.push(e))}function ca(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Bm(e):"<".concat(t," ").concat($4(r),">").concat(a.map(ca).join(""),"</").concat(t,">")}function g0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var B4=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},bs=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?B4(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function H4(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Bu(e){var t=H4(e);return t.length===1?t[0].toString(16):null}function W4(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function v0(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=v0(t);typeof Nt.hooks.addPack=="function"&&!i?Nt.hooks.addPack(e,v0(t)):Nt.styles[e]=$($({},Nt.styles[e]||{}),a),e==="fas"&&Hu("fa",t)}var Ua,Ba,Ha,Sr=Nt.styles,V4=Nt.shims,Y4=(Ua={},Ee(Ua,le,Object.values(Ji[le])),Ee(Ua,ge,Object.values(Ji[ge])),Ua),wf=null,Vm={},Ym={},Qm={},Gm={},Km={},Q4=(Ba={},Ee(Ba,le,Object.keys(Ki[le])),Ee(Ba,ge,Object.keys(Ki[ge])),Ba);function G4(e){return~_4.indexOf(e)}function K4(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!G4(i)?i:null}var Xm=function(){var t=function(a){return bs(Sr,function(o,l,s){return o[s]=bs(l,a,{}),o},{})};Vm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Ym=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),Km=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in Sr||F.autoFetchSvg,r=bs(V4,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Qm=r.names,Gm=r.unicodes,wf=Ll(F.styleDefault,{family:F.familyDefault})};R4(function(e){wf=Ll(e.styleDefault,{family:F.familyDefault})});Xm();function xf(e,t){return(Vm[e]||{})[t]}function X4(e,t){return(Ym[e]||{})[t]}function Qn(e,t){return(Km[e]||{})[t]}function Jm(e){return Qm[e]||{prefix:null,iconName:null}}function J4(e){var t=Gm[e],n=xf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function In(){return wf}var Sf=function(){return{prefix:null,iconName:null,rest:[]}};function Ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Ki[r][e],a=Xi[r][e]||Xi[r][i],o=e in Nt.styles?e:null;return a||o||null}var y0=(Ha={},Ee(Ha,le,Object.keys(Ji[le])),Ee(Ha,ge,Object.keys(Ji[ge])),Ha);function jl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ee(t,le,"".concat(F.cssPrefix,"-").concat(le)),Ee(t,ge,"".concat(F.cssPrefix,"-").concat(ge)),t),o=null,l=le;(e.includes(a[le])||e.some(function(u){return y0[le].includes(u)}))&&(l=le),(e.includes(a[ge])||e.some(function(u){return y0[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var d=K4(F.cssPrefix,c);if(Sr[c]?(c=Y4[l].includes(c)?k4[l][c]:c,o=c,u.prefix=c):Q4[l].indexOf(c)>-1?(o=c,u.prefix=Ll(c,{family:l})):d?u.iconName=d:c!==F.replacementClass&&c!==a[le]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Jm(u.iconName):{},w=Qn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||w||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Sr.far&&Sr.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},Sf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(Sr.fass||F.autoFetchSvg)&&(s.prefix="fass",s.iconName=Qn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=In()||"fas"),s}var q4=function(){function e(){c4(this,e),this.definitions={}}return f4(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=$($({},n.definitions[l]||{}),o[l]),Hu(l,o[l]);var s=Ji[le][l];s&&Hu(s,o[l]),Xm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),w0=[],kr={},Or={},Z4=Object.keys(Or);function ew(e,t){var n=t.mixoutsTo;return w0=e,kr={},Object.keys(Or).forEach(function(r){Z4.indexOf(r)===-1&&delete Or[r]}),w0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Vo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){kr[o]||(kr[o]=[]),kr[o].push(a[o])})}r.provides&&r.provides(Or)}),n}function Wu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=kr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function rr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=kr[e]||[];i.forEach(function(a){a.apply(null,n)})}function nn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Or[e]?Or[e].apply(null,t):void 0}function Vu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||In();if(t)return t=Qn(n,t)||t,g0(qm.definitions,n,t)||g0(Nt.styles,n,t)}var qm=new q4,tw=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,rr("noAuto")},nw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return on?(rr("beforeI2svg",t),nn("pseudoElements2svg",t),nn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,U4(function(){iw({autoReplaceSvgRoot:n}),rr("watch",t)})}},rw={icon:function(t){if(t===null)return null;if(Vo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Qn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ll(t[0]);return{prefix:r,iconName:Qn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(b4))){var i=jl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||In(),iconName:Qn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=In();return{prefix:a,iconName:Qn(a,t)||t}}}},dt={noAuto:tw,config:F,dom:nw,parse:rw,library:qm,findIconDefinition:Vu,toHtml:ca},iw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Nt.styles).length>0||F.autoFetchSvg)&&on&&F.autoReplaceSvg&&dt.dom.i2svg({node:r})};function Fl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ca(r)})}}),Object.defineProperty(e,"node",{get:function(){if(on){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function aw(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(yf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=$l($($({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function ow(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function kf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,w=h===void 0?!1:h,g=r.found?r:n,v=g.width,x=g.height,m=i==="fak",p=[F.replacementClass,a?"".concat(F.cssPrefix,"-").concat(a):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),y={children:[],attributes:$($({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};w&&(y.attributes[nr]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Zi())},children:[s]}),delete y.attributes.title);var C=$($({},y),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:$($({},S),d.styles)}),O=r.found&&n.found?nn("generateAbstractMask",C)||{children:[],attributes:{}}:nn("generateAbstractIcon",C)||{children:[],attributes:{}},N=O.children,z=O.attributes;return C.children=N,C.attributes=z,l?ow(C):aw(C)}function x0(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=$($($({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[nr]="");var c=$({},o.styles);yf(i)&&(c.transform=j4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=$l(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function lw(e){var t=e.content,n=e.title,r=e.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=$l(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Es=Nt.styles;function Yu(e){var t=e[0],n=e[1],r=e.slice(4),i=df(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var sw={found:!1,width:512,height:512};function uw(e,t){!Fm&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qu(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=In()),new Promise(function(r,i){if(nn("missingIconAbstract"),n==="fa"){var a=Jm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Es[t]&&Es[t][e]){var o=Es[t][e];return r(Yu(o))}uw(e,t),r($($({},sw),{},{icon:F.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}}))})}var S0=function(){},Gu=F.measurePerformance&&$a&&$a.mark&&$a.measure?$a:{mark:S0,measure:S0},gi='FA "6.3.0"',cw=function(t){return Gu.mark("".concat(gi," ").concat(t," begins")),function(){return Zm(t)}},Zm=function(t){Gu.mark("".concat(gi," ").concat(t," ends")),Gu.measure("".concat(gi," ").concat(t),"".concat(gi," ").concat(t," begins"),"".concat(gi," ").concat(t," ends"))},bf={begin:cw,end:Zm},oo=function(){};function k0(e){var t=e.getAttribute?e.getAttribute(nr):null;return typeof t=="string"}function fw(e){var t=e.getAttribute?e.getAttribute(mf):null,n=e.getAttribute?e.getAttribute(hf):null;return t&&n}function dw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function pw(){if(F.autoReplaceSvg===!0)return lo.replace;var e=lo[F.autoReplaceSvg];return e||lo.replace}function mw(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function hw(e){return ue.createElement(e)}function eh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mw:hw:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(eh(o,{ceFn:r}))}),i}function gw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var lo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(eh(i),n)}),n.getAttribute(nr)===null&&F.keepOriginalSource){var r=ue.createComment(gw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~vf(n).indexOf(F.replacementClass))return lo.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===F.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return ca(l)}).join(`
`);n.setAttribute(nr,""),n.innerHTML=o}};function b0(e){e()}function th(e,t){var n=typeof t=="function"?t:oo;if(e.length===0)n();else{var r=b0;F.mutateApproach===x4&&(r=Tn.requestAnimationFrame||b0),r(function(){var i=pw(),a=bf.begin("mutate");e.map(i),a(),n()})}}var Ef=!1;function nh(){Ef=!0}function Ku(){Ef=!1}var Qo=null;function E0(e){if(p0&&F.observeMutations){var t=e.treeCallback,n=t===void 0?oo:t,r=e.nodeCallback,i=r===void 0?oo:r,a=e.pseudoElementsCallback,o=a===void 0?oo:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Qo=new p0(function(u){if(!Ef){var c=In();Kr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!k0(d.addedNodes[0])&&(F.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&k0(d.target)&&~N4.indexOf(d.attributeName))if(d.attributeName==="class"&&fw(d.target)){var h=jl(vf(d.target)),w=h.prefix,g=h.iconName;d.target.setAttribute(mf,w||c),g&&d.target.setAttribute(hf,g)}else dw(d.target)&&i(d.target)})}}),on&&Qo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vw(){Qo&&Qo.disconnect()}function yw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ww(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=jl(vf(e));return i.prefix||(i.prefix=In()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=X4(i.prefix,e.innerText)||xf(i.prefix,Bu(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function xw(e){var t=Kr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Zi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ww(e),r=n.iconName,i=n.prefix,a=n.rest,o=xw(e),l=Wu("parseNodeAttributes",{},e),s=t.styleParser?yw(e):[];return $({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var kw=Nt.styles;function rh(e){var t=F.autoReplaceSvg==="nest"?C0(e,{styleParser:!1}):C0(e);return~t.extra.classes.indexOf(Mm)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}var $n=new Set;gf.map(function(e){$n.add("fa-".concat(e))});Object.keys(Ki[le]).map($n.add.bind($n));Object.keys(Ki[ge]).map($n.add.bind($n));$n=sa($n);function P0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!on)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(m0,"-").concat(d))},i=function(d){return n.remove("".concat(m0,"-").concat(d))},a=F.autoFetchSvg?$n:gf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(kw));a.includes("fa")||a.push("fa");var o=[".".concat(Mm,":not([").concat(nr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(nr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Kr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=bf.begin("onTree"),u=l.reduce(function(c,d){try{var h=rh(d);h&&c.push(h)}catch(w){Fm||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){th(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),d(h)})})}function bw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rh(e).then(function(n){n&&th([n],t)})}function Ew(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Vu(i||{})),e(r,$($({},n),{},{mask:i}))}}var Cw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,w=n.titleId,g=w===void 0?null:w,v=n.classes,x=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,y=n.styles,S=y===void 0?{}:y;if(t){var C=t.prefix,O=t.iconName,N=t.icon;return Fl($({type:"icon"},t),function(){return rr("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(h?p["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||Zi()):(p["aria-hidden"]="true",p.focusable="false")),kf({icons:{main:Yu(N),mask:s?Yu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:O,transform:$($({},Lt),i),symbol:o,title:h,maskId:c,titleId:g,extra:{attributes:p,styles:S,classes:x}})})}},Pw={mixout:function(){return{icon:Ew(Cw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=P0,n.nodeCallback=bw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return P0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(w,g){Promise.all([Qu(i,l),c.iconName?Qu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=df(v,2),m=x[0],p=x[1];w([n,kf({icons:{main:m,mask:p},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=$l(l);s.length>0&&(i.style=s);var u;return yf(o)&&(u=nn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Nw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Fl({type:"layer"},function(){rr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(sa(a)).join(" ")},children:o}]})}}}},_w={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return Fl({type:"counter",content:n},function(){return rr("beforeDOMElementCreation",{content:n,params:r}),lw({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(sa(l))}})})}}}},zw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Lt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,h=r.styles,w=h===void 0?{}:h;return Fl({type:"text",content:n},function(){return rr("beforeDOMElementCreation",{content:n,params:r}),x0({content:n,transform:$($({},Lt),a),title:l,extra:{attributes:d,styles:w,classes:["".concat(F.cssPrefix,"-layers-text")].concat(sa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if($m){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,x0({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},Ow=new RegExp('"',"ug"),N0=[1105920,1112319];function Aw(e){var t=e.replace(Ow,""),n=W4(t,0),r=n>=N0[0]&&n<=N0[1],i=t.length===2?t[0]===t[1]:!1;return{value:Bu(i?t[0]:t),isSecondary:r||i}}function _0(e,t){var n="".concat(w4).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Kr(e.children),o=a.filter(function(N){return N.getAttribute(Uu)===t})[0],l=Tn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(E4),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ge:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Xi[h][s[2].toLowerCase()]:C4[h][u],g=Aw(d),v=g.value,x=g.isSecondary,m=s[0].startsWith("FontAwesome"),p=xf(w,v),y=p;if(m){var S=J4(v);S.iconName&&S.prefix&&(p=S.iconName,w=S.prefix)}if(p&&!x&&(!o||o.getAttribute(mf)!==w||o.getAttribute(hf)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var C=Sw(),O=C.extra;O.attributes[Uu]=t,Qu(p,w).then(function(N){var z=kf($($({},C),{},{icons:{main:N,mask:Sf()},prefix:w,iconName:y,extra:O,watchable:!0})),W=ue.createElement("svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=z.map(function(D){return ca(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Rw(e){return Promise.all([_0(e,"::before"),_0(e,"::after")])}function Tw(e){return e.parentNode!==document.head&&!~S4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Uu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function z0(e){if(on)return new Promise(function(t,n){var r=Kr(e.querySelectorAll("*")).filter(Tw).map(Rw),i=bf.begin("searchPseudoElements");nh(),Promise.all(r).then(function(){i(),Ku(),t()}).catch(function(){i(),Ku(),n()})})}var Iw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=z0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;F.searchPseudoElements&&z0(i)}}},O0=!1,$w={mixout:function(){return{dom:{unwatch:function(){nh(),O0=!0}}}},hooks:function(){return{bootstrap:function(){E0(Wu("mutationObserverCallbacks",{}))},noAuto:function(){vw()},watch:function(n){var r=n.observeMutationsRoot;O0?Ku():E0(Wu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},A0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Lw={mixout:function(){return{parse:{transform:function(n){return A0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=A0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:d,path:h};return{tag:"g",attributes:$({},w.outer),children:[{tag:"g",attributes:$({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),w.path)}]}]}}}},Cs={x:0,y:0,width:"100%",height:"100%"};function R0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function jw(e){return e.tag==="g"?e.children:[e]}var Fw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?jl(i.split(" ").map(function(o){return o.trim()})):Sf();return a.prefix||(a.prefix=In()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,w=L4({transform:s,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:$($({},Cs),{},{fill:"white"})},v=c.children?{children:c.children.map(R0)}:{},x={tag:"g",attributes:$({},w.inner),children:[R0($({tag:c.tag,attributes:$($({},c.attributes),w.path)},v))]},m={tag:"g",attributes:$({},w.outer),children:[x]},p="mask-".concat(l||Zi()),y="clip-".concat(l||Zi()),S={tag:"mask",attributes:$($({},Cs),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:jw(h)},S]};return r.push(C,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},Cs)}),{children:r,attributes:i}}}},Mw={provides:function(t){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:$($({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Uw=[M4,Pw,Nw,_w,zw,Iw,$w,Lw,Fw,Mw,Dw];ew(Uw,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;var Xu=dt.parse;dt.findIconDefinition;dt.toHtml;var Bw=dt.icon;dt.layer;dt.text;dt.counter;var Y={},Hw={get exports(){return Y},set exports(e){Y=e}},Ww="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Vw=Ww,Yw=Vw;function ih(){}function ah(){}ah.resetWarningCache=ih;var Qw=function(){function e(r,i,a,o,l,s){if(s!==Yw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ah,resetWarningCache:ih};return n.PropTypes=n,n};Hw.exports=Qw();function T0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T0(Object(n),!0).forEach(function(r){br(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Go(e){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Go(e)}function br(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kw(e,t){if(e==null)return{};var n=Gw(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ju(e){return Xw(e)||Jw(e)||qw(e)||Zw()}function Xw(e){if(Array.isArray(e))return qu(e)}function Jw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qw(e,t){if(e){if(typeof e=="string")return qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qu(e,t)}}function qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,w=e.inverse,g=e.border,v=e.listItem,x=e.flip,m=e.size,p=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":w,"fa-border":g,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},br(t,"fa-".concat(m),typeof m<"u"&&m!==null),br(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),br(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),br(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function t3(e){return e=e-0,e===e}function oh(e){return t3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var n3=["style"];function r3(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i3(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=oh(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[r3(i)]=a:t[i]=a,t},{})}function lh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return lh(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=i3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[oh(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=Kw(n,n3);return i.attrs.style=xn(xn({},i.attrs.style),o),e.apply(void 0,[t.tag,xn(xn({},i.attrs),l)].concat(Ju(r)))}var sh=!1;try{sh=!0}catch{}function a3(){if(!sh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function I0(e){if(e&&Go(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xu.icon)return Xu.icon(e);if(e===null)return null;if(e&&Go(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ps(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?br({},e,t):{}}var jt=rn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=I0(n),c=Ps("classes",[].concat(Ju(e3(e)),Ju(a.split(" ")))),d=Ps("transform",typeof e.transform=="string"?Xu.transform(e.transform):e.transform),h=Ps("mask",I0(r)),w=Bw(u,xn(xn(xn(xn({},c),d),h),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!w)return a3("Could not find icon",u),null;var g=w.abstract,v={ref:t};return Object.keys(e).forEach(function(x){jt.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),o3(g[0],v)});jt.displayName="FontAwesomeIcon";jt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};jt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var o3=lh.bind(null,rn.createElement),l3={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},$0={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},L0={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},s3={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Xr=b.createContext({});function u3({children:e}){const[t,n]=b.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=b.useState(!1),a={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return f(Xr.Provider,{value:a,children:e})}const c3=()=>{const[e,t]=b.useState(!1),{isLoggedIn:n,userProfile:r}=b.useContext(Xr);console.log("userProfile in navbar console.log",r);//! placeholder need to implement
const i=()=>{t(!e),console.log(`Nav Open: ${e}`),console.log(`Cross: ${e}`)},a=()=>{Wo.remove("loggedIn"),navigate("/login")};return f(l4,{className:"main-nav",children:n?f(Ut,{children:P("div",{className:"nav-bar",children:[f(Qe,{className:"page",to:"/",activeclassname:"active",children:f("img",{className:"logo",src:s4,alt:"PantryPal Egg logo"})}),P("div",{className:"nav-item-container",children:[f(Qe,{className:"page nav-item",to:"/search",children:"Search"}),f(Qe,{className:"page nav-item",to:"/saved",children:"Saved"}),f(Qe,{className:"page nav-item",to:"/mealPlanner",children:"Meal Planner"})]}),P("div",{className:"user-container",children:[f(Qe,{className:"page nav-item ",to:"/login",onClick:a,children:"Logout"}),f(Qe,{className:"page nav-item",to:"/profile",children:f(jt,{icon:$0,className:"userIcon"})})]}),P(Qe,{className:e?"hamburger close":"hamburger",onClick:i,children:[f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"})]}),f("nav",{className:e?"mobile-nav-container mobile-height":"mobile-nav-container",children:e&&P("nav",{className:"nav-width",children:[f(Qe,{className:"mobile-nav toggleNav && 'active'",to:"/search",onClick:i,children:"Search"}),f(Qe,{className:"mobile-nav",to:"/saved",onClick:i,children:"Saved"}),f(Qe,{className:"mobile-nav",to:"/mealPlanner",onClick:i,children:"Meal Planner"}),f(Qe,{className:"mobile-nav",to:"/login",onClick:a,children:"Logout"}),f(Qe,{className:"page mobile-nav",to:"/profile",onClick:i,children:f(jt,{icon:$0,className:"userIcon mobile-nav"})})]})})]})}):f(Ut,{})})},f3="/assets/PantryPalAvo-64f88421.png",d3=Ve.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    img {
        width: auto;
        height: 100%;
        max-height: 50vh;
    }
    .logo {
        width: 50%;
    }
    .linkContainer{
        display: flex;
        justify-content: center;
    }
    .linkItem{
        padding: 0 2em;
    }
    h1 {
        font-size: 40px;
        color: #90ac14;
        text-decoration: none;
    }

    @media ${_e.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${_e.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${_e.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${_e.tablet} { 
        min-width: 425px;
        h1 {
            font-size: 2rem;    
        }
    }
      
    @media ${_e.laptop} { 
        min-width: 768px;
        h1 {
            font-size: 2.2rem;    
        }
  
    }
      
    @media ${_e.desktop} {
        min-width: 1441px;
        h1 {
            font-size: 3rem;    
        }

    }
      
    @media ${_e.desktopL} {
        min-width: 2560px;
        h1 {
            font-size: 4rem;    
        }

    }
`,p3=()=>P(d3,{children:[f("h1",{children:"Find recipes | Meal Plan"}),f("img",{className:"logo",src:f3,alt:"Pantry Pal Logo"}),P("div",{className:"linkContainer",children:[f(Qe,{className:"page linkItem",to:"/signup",children:"SignUp"}),f(Qe,{className:"page linkItem",to:"/login",children:"Login"})]}),f("section",{children:f("p",{children:P("section",{className:"about",children:[f("p",{children:"This project was organized by Danny Thompson and Scott Thompson of Dallas Software Developers"}),f("span",{children:"It was developed by"}),P("ul",{children:[f("li",{children:f("a",{href:"https://www.linkedin.com/in/jesusdoza/",target:"_blank",children:"Jesus Mendoza"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/damianpad/",target:"_blank",children:"Damian Padilla"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/amandapurcellperry/",target:"_blank",children:"Amanda Perry"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/walter-williams/",target:"_blank",children:"Walter Williams"})})]}),P("span",{children:["Team Lead: ",f("a",{href:"https://www.linkedin.com/in/bethanyann/",target:"_blank",children:"Bethany Ann"})]}),f("p",{children:'With Pantry Pal, you can bid farewell to the question, "What can I make with the ingredients I have?" This app empowers you to create delicious and satisfying recipes using the ingredients already available in your pantry.  Simply input the ingredients you have on hand, and the app swiftly sifts through its comprehensive database to generate a personalized list of recipes that you can whip up in no time'})]})})})]}),m3=Ve.section`
    width: 100%;
    max-width: 500px;
    padding: 0%;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 4rem;
    box-shadow: 5px 5px 10px gray;
    position: relative;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: #e8e9e7;
        width: 90%;
        margin: 0 auto;
    }
    & .form-sect {
        width: 100%;
    }
    & form {
        position: relative;
        display: flex;
        background: #f3d3bd;
        flex-direction: column;
        align-items: center;
        padding: 10%;
        border-radius: 20px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239F4A54' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    & form div {
        width: 90%;
        margin: 0 auto;
    }

    & .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3%;
    }
    & form input {
        text-align: center;
        margin: 3% auto;
        font-size: 1.5rem;
        border: none;
        border-bottom: 1px solid gray;

        width: 80%;
        padding: 10px;
        background-color: #a8c524d2;
        border-radius: 20px;
        color: #3c3b3b;
    }

    & form input:focus {
        background-color: #dbff39;
    }
    & .input-tag {
        color: #5e5e5e;
        position: absolute;
        top: -16px;
        left: 0;
    }

    & form div.title {
        text-align: center;
        position: absolute;
        top: -3.5rem;
        background-color: #90ac14;
        border-radius: 20px;
        padding: 1%;
    }

    & .btn {
        padding: 10px;
        width: 25%;
        border-radius: 20px;
        font-size: 10px;
        border: 1px solid black;
        box-shadow: 2px 1px 10px gray;
        background: #229e0a;
        color: #f6f6f6;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #4ff32e;
        color: black;
    }

    & .submit-btn button {
        position: absolute;
        bottom: -6%;
        right: 15%;
        font-size: 1.2rem;
        padding: 2%;
        border-radius: 10px;
    }
    & .submit-btn button {
        background: #229e0a;
        color: #f6f6f6;
        border: 0;
    }

    & .input-container {
        position: relative;
    }

    & .goto-btn {
        border: 0;
        padding: 1%;
        width: 40%;
        margin-top: 5%;
        font-size: 1rem;
        text-align: center;
        position: absolute;
        bottom: -25%;
    }

    & .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    & .error-desc {
        border-radius: 10px;
        padding: 10px;
    }

    & .error-marker {
        font-size: 2rem;
        color: black;
    }
`;function h3(){const e="",t=b.useRef(""),n=b.useRef(""),r=b.useRef(""),i=b.useRef("");let a=t.current.value,o=n.current.value,l=r.current.value,s=i.current.value;const[u,c]=b.useState(!1),[d,h]=b.useState([]),[w,g]=b.useState(!1),[v,x]=b.useState(!1),[m,p]=b.useState(!1),y=ml();function S(N){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(N)}function C(){let N=[];return!S(s)&&s&&(x(!0),N.push("email format invalid")),o!==l&&(p(!0),N.push("passwords do not match")),N.length>0?(c(!0),N):[]}async function O(){c(!1);const N=C();if(N.length>0){h(N);return}try{const z=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:a,password:o})});if(z.status==401)throw Error("Username and/or Email already exists");if(z.status!=201)throw Error(`server response error ${z.statusText}`)}catch(z){c(!0),h([z.message]);return}try{const z=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});if(z.status===200){const W=await z.json();Wo.set("loggedIn",{token:W.token,username:a})}else throw Error(z.statusText)}catch(z){c(!0),h([z.message]);return}y("/search")}return P(m3,{children:[P("section",{className:"form-sect",children:[P("form",{action:"#",onSubmit:N=>{N.preventDefault(),O()},children:[f("div",{className:"title",children:P("h2",{children:["Welcome to Pantry Pal ",f("br",{}),"Signup Here"]})}),P("div",{className:"input-container",children:[v&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"email",children:"Email"}),f("input",{className:v?"error-container":"",ref:i,onChange:N=>{s=N.target.value,x(!1)},id:"email",type:"text",required:!0}),v&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[w&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"username",children:"Username"}),f("input",{className:w?"error-container":"",ref:t,onChange:N=>{a=N.target.value},id:"username",type:"text",required:!0}),w&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"password",children:"Password"}),f("input",{className:m?"error-container":"",ref:n,onChange:N=>{o=N.target.value,p(!1)},id:"password",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{htmlFor:"confirmpassword",className:"input-tag",children:"Confirm Password"}),f("input",{className:m?"error-container":"",ref:r,onChange:N=>{l=N.target.value,p(!1)},id:"confirmpassword",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),f("div",{className:"submit-btn",children:f("button",{className:"btn",children:"Signup"})})]}),u&&f("section",{className:"error-container error-desc",children:P("div",{children:[f("h4",{children:"Please correct following errors"}),f("ul",{children:d.map((N,z)=>f("li",{children:N},z))})]})})]}),f("div",{className:"btn goto-btn",children:P(ef,{to:"/login",children:["Already signed",f("br",{}),"up login here"]})})]})}let si="#2C4001",g3="#F2E7AE";const v3=Ve.section`
    background-color: white;
    color: #242424;
    height: 100vh;
    ul {
        padding: 0;
    }
    li {
        list-style: none;
    }

    & .title h1{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${si};
        font-size: 2em;
        margin: 0;
    }
    & .searchContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    & .search-btn{
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${si};
        color: #fff;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        border-radius: .5em;
        cursor: pointer;
        
        margin: .3em 0;
        border: 1px solid ${si};
    }
    & .search-btn: hover {
        background: ${g3};
        color: ${si};
        border: 1px solid ${si};
    }
    & .search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
    }
    & form input {
        background-color: white;
        color: #242424;
        border-radius: 2em;
        border: 1px solid #242424;
        padding: 1em;
        width: 100%;
        @media (max-width: 768px) {
            width: 50%;
        }
    }
    
    .recipes-display{
        display: flex;
        flex-direction: column;
        

        .filter-container{
           
        }
        .searchresults-container h3{
            font-size: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .searchPrompt {
            display: flex;
            justify-content: center;
            align-items: center;
        }

 
    }
    @media (min-width: 768px) {
        .search {
            width: 60%;
        }
        .search-btn { 
            width: 30%;
        }
    }
    @media (min-width: 900px) {
 
        .recipes-display {

        }
        .filter-container{
            

        }
        .searchresults-container{
            width: 100%;
        }

    }

    @media (min-width: 1000px) {
        .title h1{
            margin: 0;
        }
        .filter-container{
            padding: 0;
        }
        form {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .search{
            width: 40%;
        }
        .search-btn {
            width: 10%;
        }
    }

    
`;function uh(e,t){return function(){return e.apply(t,arguments)}}const{toString:ch}=Object.prototype,{getPrototypeOf:Cf}=Object,Pf=(e=>t=>{const n=ch.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>Pf(t)===e),Ml=e=>t=>typeof t===e,{isArray:Jr}=Array,ea=Ml("undefined");function y3(e){return e!==null&&!ea(e)&&e.constructor!==null&&!ea(e.constructor)&&Ln(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fh=ln("ArrayBuffer");function w3(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fh(e.buffer),t}const x3=Ml("string"),Ln=Ml("function"),dh=Ml("number"),Nf=e=>e!==null&&typeof e=="object",S3=e=>e===!0||e===!1,so=e=>{if(Pf(e)!=="object")return!1;const t=Cf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},k3=ln("Date"),b3=ln("File"),E3=ln("Blob"),C3=ln("FileList"),P3=e=>Nf(e)&&Ln(e.pipe),N3=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ch.call(e)===t||Ln(e.toString)&&e.toString()===t)},_3=ln("URLSearchParams"),z3=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Jr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function ph(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const mh=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),hh=e=>!ea(e)&&e!==mh;function Zu(){const{caseless:e}=hh(this)&&this||{},t={},n=(r,i)=>{const a=e&&ph(t,i)||i;so(t[a])&&so(r)?t[a]=Zu(t[a],r):so(r)?t[a]=Zu({},r):Jr(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&fa(arguments[r],n);return t}const O3=(e,t,n,{allOwnKeys:r}={})=>(fa(t,(i,a)=>{n&&Ln(i)?e[a]=uh(i,n):e[a]=i},{allOwnKeys:r}),e),A3=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),R3=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},T3=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&Cf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},I3=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$3=e=>{if(!e)return null;if(Jr(e))return e;let t=e.length;if(!dh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},L3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cf(Uint8Array)),j3=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},F3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},M3=ln("HTMLFormElement"),D3=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),j0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U3=ln("RegExp"),gh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fa(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},B3=e=>{gh(e,(t,n)=>{if(Ln(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ln(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},H3=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Jr(e)?r(e):r(String(e).split(t)),n},W3=()=>{},V3=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ns="abcdefghijklmnopqrstuvwxyz",F0="0123456789",vh={DIGIT:F0,ALPHA:Ns,ALPHA_DIGIT:Ns+Ns.toUpperCase()+F0},Y3=(e=16,t=vh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Q3(e){return!!(e&&Ln(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const G3=e=>{const t=new Array(10),n=(r,i)=>{if(Nf(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Jr(r)?[]:{};return fa(r,(o,l)=>{const s=n(o,i+1);!ea(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},E={isArray:Jr,isArrayBuffer:fh,isBuffer:y3,isFormData:N3,isArrayBufferView:w3,isString:x3,isNumber:dh,isBoolean:S3,isObject:Nf,isPlainObject:so,isUndefined:ea,isDate:k3,isFile:b3,isBlob:E3,isRegExp:U3,isFunction:Ln,isStream:P3,isURLSearchParams:_3,isTypedArray:L3,isFileList:C3,forEach:fa,merge:Zu,extend:O3,trim:z3,stripBOM:A3,inherits:R3,toFlatObject:T3,kindOf:Pf,kindOfTest:ln,endsWith:I3,toArray:$3,forEachEntry:j3,matchAll:F3,isHTMLForm:M3,hasOwnProperty:j0,hasOwnProp:j0,reduceDescriptors:gh,freezeMethods:B3,toObjectSet:H3,toCamelCase:D3,noop:W3,toFiniteNumber:V3,findKey:ph,global:mh,isContextDefined:hh,ALPHABET:vh,generateString:Y3,isSpecCompliantForm:Q3,toJSONObject:G3};function K(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const yh=K.prototype,wh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wh[e]={value:e}});Object.defineProperties(K,wh);Object.defineProperty(yh,"isAxiosError",{value:!0});K.from=(e,t,n,r,i,a)=>{const o=Object.create(yh);return E.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),K.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const K3=null;function ec(e){return E.isPlainObject(e)||E.isArray(e)}function xh(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function M0(e,t,n){return e?e.concat(t).map(function(i,a){return i=xh(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function X3(e){return E.isArray(e)&&!e.some(ec)}const J3=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Dl(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!E.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(E.isDate(g))return g.toISOString();if(!s&&E.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(g)||E.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,x){let m=g;if(g&&!x&&typeof g=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(E.isArray(g)&&X3(g)||(E.isFileList(g)||E.endsWith(v,"[]"))&&(m=E.toArray(g)))return v=xh(v),m.forEach(function(y,S){!(E.isUndefined(y)||y===null)&&t.append(o===!0?M0([v],S,a):o===null?v:v+"[]",u(y))}),!1}return ec(g)?!0:(t.append(M0(x,v,a),u(g)),!1)}const d=[],h=Object.assign(J3,{defaultVisitor:c,convertValue:u,isVisitable:ec});function w(g,v){if(!E.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),E.forEach(g,function(m,p){(!(E.isUndefined(m)||m===null)&&i.call(t,m,E.isString(p)?p.trim():p,v,h))===!0&&w(m,v?v.concat(p):[p])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function D0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function _f(e,t){this._pairs=[],e&&Dl(e,this,t)}const Sh=_f.prototype;Sh.append=function(t,n){this._pairs.push([t,n])};Sh.toString=function(t){const n=t?function(r){return t.call(this,r,D0)}:D0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function q3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kh(e,t,n){if(!t)return e;const r=n&&n.encode||q3,i=n&&n.serialize;let a;if(i?a=i(t,n):a=E.isURLSearchParams(t)?t.toString():new _f(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Z3{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const U0=Z3,bh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ex=typeof URLSearchParams<"u"?URLSearchParams:_f,tx=typeof FormData<"u"?FormData:null,nx=typeof Blob<"u"?Blob:null,rx=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ix=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ft={isBrowser:!0,classes:{URLSearchParams:ex,FormData:tx,Blob:nx},isStandardBrowserEnv:rx,isStandardBrowserWebWorkerEnv:ix,protocols:["http","https","file","blob","url","data"]};function ax(e,t){return Dl(e,new Ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Ft.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function ox(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lx(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Eh(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&E.isArray(i)?i.length:o,s?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&E.isArray(i[o])&&(i[o]=lx(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(ox(r),i,n,0)}),n}return null}const sx={"Content-Type":void 0};function ux(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ul={transitional:bh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=E.isObject(t);if(a&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i&&i?JSON.stringify(Eh(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ax(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Dl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),ux(t)):t}],transformResponse:[function(t){const n=this.transitional||Ul.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?K.from(l,K.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ft.classes.FormData,Blob:Ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){Ul.headers[t]={}});E.forEach(["post","put","patch"],function(t){Ul.headers[t]=E.merge(sx)});const zf=Ul,cx=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fx=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&cx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},B0=Symbol("internals");function ui(e){return e&&String(e).trim().toLowerCase()}function uo(e){return e===!1||e==null?e:E.isArray(e)?e.map(uo):String(e)}function dx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function px(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function _s(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function mx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hx(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Bl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=ui(s);if(!c)throw new Error("header name must be a non-empty string");const d=E.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||s]=uo(l))}const o=(l,s)=>E.forEach(l,(u,c)=>a(u,c,s));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!px(t)?o(fx(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ui(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return dx(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ui(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_s(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=ui(o),o){const l=E.findKey(r,o);l&&(!n||_s(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||_s(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,a)=>{const o=E.findKey(r,a);if(o){n[o]=uo(i),delete n[a];return}const l=t?mx(a):String(a).trim();l!==a&&delete n[a],n[l]=uo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[B0]=this[B0]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=ui(o);r[l]||(hx(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(a):a(t),this}}Bl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(Bl.prototype);E.freezeMethods(Bl);const Kt=Bl;function zs(e,t){const n=this||zf,r=t||n,i=Kt.from(r.headers);let a=r.data;return E.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Ch(e){return!!(e&&e.__CANCEL__)}function da(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(da,K,{__CANCEL__:!0});function gx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vx=Ft.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),E.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wx(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ph(e,t){return e&&!yx(t)?wx(e,t):t}const xx=Ft.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=E.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Sx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function kx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let d=a,h=0;for(;d!==i;)h+=n[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function H0(e,t){let n=0;const r=kx(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const bx=typeof XMLHttpRequest<"u",Ex=bx&&function(e){return new Promise(function(n,r){let i=e.data;const a=Kt.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}E.isFormData(i)&&(Ft.isStandardBrowserEnv||Ft.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(w+":"+g))}const c=Ph(e.baseURL,e.url);u.open(e.method.toUpperCase(),kh(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const w=Kt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};gx(function(m){n(m),s()},function(m){r(m),s()},v),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||bh;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new K(g,v.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},Ft.isStandardBrowserEnv){const w=(e.withCredentials||xx(c))&&e.xsrfCookieName&&vx.read(e.xsrfCookieName);w&&a.set(e.xsrfHeaderName,w)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&E.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),E.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",H0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",H0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new da(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=Sx(c);if(h&&Ft.protocols.indexOf(h)===-1){r(new K("Unsupported protocol "+h+":",K.ERR_BAD_REQUEST,e));return}u.send(i||null)})},co={http:K3,xhr:Ex};E.forEach(co,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Cx={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=E.isString(n)?co[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(co,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:co};function Os(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new da(null,e)}function W0(e){return Os(e),e.headers=Kt.from(e.headers),e.data=zs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Cx.getAdapter(e.adapter||zf.adapter)(e).then(function(r){return Os(e),r.data=zs.call(e,e.transformResponse,r),r.headers=Kt.from(r.headers),r},function(r){return Ch(r)||(Os(e),r&&r.response&&(r.response.data=zs.call(e,e.transformResponse,r.response),r.response.headers=Kt.from(r.response.headers))),Promise.reject(r)})}const V0=e=>e instanceof Kt?e.toJSON():e;function Dr(e,t){t=t||{};const n={};function r(u,c,d){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:d},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function i(u,c,d){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function a(u,c){if(!E.isUndefined(c))return r(void 0,c)}function o(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(V0(u),V0(c),!0)};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=s[c]||i,h=d(e[c],t[c],c);E.isUndefined(h)&&d!==l||(n[c]=h)}),n}const Nh="1.3.4",Of={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Of[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Y0={};Of.transitional=function(t,n,r){function i(a,o){return"[Axios v"+Nh+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new K(i(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!Y0[o]&&(Y0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function Px(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new K("option "+a+" must be "+s,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}}const tc={assertOptions:Px,validators:Of},dn=tc.validators;class Ko{constructor(t){this.defaults=t,this.interceptors={request:new U0,response:new U0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Dr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&tc.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!==void 0&&tc.assertOptions(i,{encode:dn.function,serialize:dn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&E.merge(a.common,a[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Kt.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!s){const g=[W0.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);d<h;)c=c.then(g[d++],g[d++]);return c}h=l.length;let w=n;for(d=0;d<h;){const g=l[d++],v=l[d++];try{w=g(w)}catch(x){v.call(this,x);break}}try{c=W0.call(this,w)}catch(g){return Promise.reject(g)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Dr(this.defaults,t);const n=Ph(t.baseURL,t.url);return kh(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Ko.prototype[t]=function(n,r){return this.request(Dr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(Dr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Ko.prototype[t]=n(),Ko.prototype[t+"Form"]=n(!0)});const fo=Ko;class Af{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new da(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Af(function(i){t=i}),cancel:t}}}const Nx=Af;function _x(e){return function(n){return e.apply(null,n)}}function zx(e){return E.isObject(e)&&e.isAxiosError===!0}const nc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nc).forEach(([e,t])=>{nc[t]=e});const Ox=nc;function _h(e){const t=new fo(e),n=uh(fo.prototype.request,t);return E.extend(n,fo.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return _h(Dr(e,i))},n}const Ce=_h(zf);Ce.Axios=fo;Ce.CanceledError=da;Ce.CancelToken=Nx;Ce.isCancel=Ch;Ce.VERSION=Nh;Ce.toFormData=Dl;Ce.AxiosError=K;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=_x;Ce.isAxiosError=zx;Ce.mergeConfig=Dr;Ce.AxiosHeaders=Kt;Ce.formToJSON=e=>Eh(E.isHTMLForm(e)?new FormData(e):e);Ce.HttpStatusCode=Ox;Ce.default=Ce;const ta=Ce;let Ht="#2C4001",Q0="#F2E7AE",G0="#59320F",Ax="#F2F2F2";const Rx=Ve.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${Ht};


.container {
  background-color: ${Ax};
  position: relative;
  width: 100%
  display: flex;
}

  img {
    width: 300px;
    height: 300px;
    display: flex;
    margin: 0 auto;
    padding: .6em;
    border-radius: .4em;
  }
  .btn-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .try_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${Ht};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Ht};

  }
  .try_btn:hover {
    background: ${Q0};
    color: ${Ht};
    border: 1px solid ${Ht};
   
  }
  .save_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${G0};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${G0};
  }
  .save_btn: hover {
    background: ${Q0};
    color: ${Ht};
    border: 1px solid ${Ht};
  }


 .delete_btn {
  bottom: -20px;
  right: 140px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #880808;
  color: #fff;;
  padding: 22px 45px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  i {
   margin-left: 20px;
   font-size: 1.5rem;
  }
 }
}
.card_body {
  padding: 10px 20px;
  h1 {
    font-size: 2rem;
    color: #252718;
    font-weight: 400;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 1rem;
  }
  .card_footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1% 0 2% 0;
    .card_footer_container {
    }
    h2 {
      margin-bottom: 2px;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${Ht};
    }
    p {
      color: color: ${Ht};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}
@media (min-width: 768px) {

}

@media (min-width: 900px) {
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .try_btn {
    width: 30%;
    margin: 0 2em;
  }
  .save_btn{
    width: 30%;
    margin: 0 2em;
  }
  .card_body p {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
  }
  .card_footer_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2em;
  }
  .card_body .card_footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
 
  }
}

@media (min-width: 1200px) {

  .btn-container {
    
  }
  .try_btn {
    width: 20%;
  }
  .save_btn{
    width: 20%;
    margin: 0 2em;
  }
}


`,Tx=(e,t)=>{console.log("username",t);const n="";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},Ix=(e,t)=>{const n="";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!");else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},zh=({recipe:e,showDelete:t})=>{const n=a=>a.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=b.useContext(Xr);return f(Rx,{children:P("div",{className:"container",children:[f("img",{src:e.image,alt:e.title}),P("div",{className:"card_body",children:[f("h1",{children:e.title}),P("p",{children:[n(e.summary),"Credit: ",e.creditText]}),P("div",{className:"card_footer",children:[P("div",{className:"card_footer_container",children:[f("h2",{children:"Dish type:"}),P("p",{children:[" ",e.dishTypes[0]]})]}),P("div",{className:"card_footer_container",children:[f("h2",{children:"Servings:"}),P("p",{children:[" ",e.servings]})]}),P("div",{className:"card_footer_container",children:[f("h2",{children:"Total Time:"}),f("p",{children:e.readyInMinutes})]})]}),P("div",{className:"btn-container",children:[f(ef,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&f("button",{className:"save_btn",onClick:()=>Tx(e,i.username),children:"Save it!"}),t&&f("button",{className:"delete_btn",onClick:()=>Ix(e,i.username),children:"Delete Recipe"})]})]})]})})},$x=Ve.section`
.loader {
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  position: relative;
  background: #222;
  border-radius: 50%;
  box-sizing: border-box;
  transform-origin: 170px 50px;
  border: 4px solid #333;
  box-shadow: 3px 4px #0003 inset, 0 0 6px #0002 inset;
  animation: panmov 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) skew(-15deg, 15deg) rotate(-15deg);
    width: 55px;
    height: 53px;
    background: #fff;
    background-image: 
    radial-gradient(circle 3px , #fff6 90%, transparent 10%),
    radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
    radial-gradient(circle 12px , #ffae00 100%, transparent 0);
    background-repeat: no-repeat;
    background-position: -4px -6px , -2px -2px , -1px -1px;
    box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
    border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
    animation: ylmov 0.6s ease-in-out infinite alternate;
}
.loader::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 48px;
  height: 15px;
  width: 70px;
  background: #222222;
  border-radius: 0 8px 8px 0;
  box-shadow: 3px 0 3px #eee2 inset;
  transform: rotate(5deg) translateX(3px);
}

@keyframes panmov {
  0% , 10% { transform: rotate(5deg) }
  90% , 100% { transform: rotate(-5deg) }
}
@keyframes ylmov {
  to { 
      border-radius: 50% 36% 50% 50% / 49% 50% 45% 45%;
      background-position: -2px -4px , 2px 2px , 1px 1px;
   }
}
`;function Oh(){return f($x,{children:f("span",{className:"loader"})})}function Lx(e,t){let n=[];return e.forEach(r=>{const i=r.id;for(let a=0;a<t.length;a++)i===t[a].id&&n.push({...r,...t[a]})}),n}let ci="#2C4001",jx="#F2E7AE",Fx="#F2F2F2";const Mx=Ve.section`
   
    color: ${ci};


    width: 100%;

    //FILTER SECTION

    li {
       
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    & .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: .2em .4em;
        border-radius: .5em;
        text-align: center;
        background-color: ${ci};
        color: ${Fx};
        border: 1px solid ${ci};
    }
    & .btn-filter {

        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #16b462;
        color: #e7e7e7;
        box-shadow: 3px 1px 5px black;
    }
    & .btn-filter:hover {
        cursor: pointer;
   
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${jx};
        color: ${ci};
        border: 1px solid ${ci};
    }
    .filter-container {
        padding: 0;
    }
    .filter-row h2 {
        margin: .3em;
        
    }
    .filter-row {
        display: flex;
        align-items: center;
        border-top: 1px solid black;
    }
    .filter-options {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .filter-options li {
        margin: .3em;
    }

    @media (min-width: 768px) {

    }
    @media (min-width: 900px) {

    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 1600px) {

    }
`;function Dx({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return f("div",{children:"no filters available"});let a=new Set,o=new Set,l=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(g=>{let v=g.diets;v.length>0&&v.forEach(x=>{n.includes(x)||a.add(x)}),l.forEach(x=>{g[x]&&!i.includes(x)&&o.add(x)})});let s=Array.from(a.values()),u=Array.from(o.values());function c(g){t(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function d(g){t(v=>v.filter(x=>x!==g))}function h(g){r(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function w(g){r(v=>v.filter(x=>x!==g))}return P(Mx,{className:"main-filter-container",children:[n.length>0?P("section",{children:[f("h2",{children:"Selected filters: "}),f("ul",{children:n.map((g,v)=>f("li",{onClick:()=>{d(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),i.length>0?P("section",{children:[f("h2",{children:"Category filters"}),f("ul",{children:i.map((g,v)=>f("li",{onClick:()=>{w(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),P("section",{className:"filter-row",children:[f("h2",{children:"Dietary options:"}),f("ul",{className:"filter-options",children:s.length>0?s.map((g,v)=>f("li",{onClick:()=>{c(g)},className:"btn",children:f("span",{children:g})},v+g+1)):f(Ut,{})})]}),P("section",{className:"filter-row",children:[f("h2",{children:"Categories:"}),f("ul",{className:"filter-options",children:u.map((g,v)=>f("li",{onClick:()=>{h(g)},className:"btn",children:f("span",{children:g})},g+v+2))})]})]})}function Ux(){const e="",[t,n]=b.useState(""),[r,i]=b.useState([]),[a,o]=b.useState([]),[l,s]=b.useState([]),[u,c]=b.useState([]),[d,h]=b.useState(!1),[w,g]=b.useState(!1);b.useEffect(()=>{if(l.length>0||u.length>0){let m=Bx(r,l,u);o(m);return}o(r)},[l,u]);const v=b.useRef("");async function x(){try{g(!0);const m=await ta.get(`${e}/api/searchbyingredient`,{params:{ingredients:t}});m!=null&&m.data&&h(!1);const p=m.data.map(C=>C.id),y=await ta.get(`${e}/api/recipeinformation`,{params:{recipeIdList:p}});//! test remove
//! test remove
let S=Lx(m.data,y.data);i(S),o(S),g(!1)}catch{h(!0)}}return P(v3,{children:[f("div",{className:"title",children:f("h1",{children:"Recipe Search"})}),f("div",{className:"searchContainer",children:P("form",{action:"#",onSubmit:m=>{m.preventDefault(),x()},children:[f("input",{ref:v,onChange:m=>n(m.target.value),id:"ingregients",value:t,type:"text",placeholder:"Enter your ingredients",className:"search"}),f("button",{className:"search-btn",children:"Search"})]})}),P("section",{className:"recipes-display",children:[f("div",{className:"filter-container",children:f(Dx,{recipeListArr:a,setDietFilter:s,dietFilter:l,setCategoryFilter:c,categoryFilter:u})}),f("section",{className:"searchresults-container",children:f("div",{className:"searchResults",children:f("ul",{children:w?f(Oh,{}):a.length>0?a.map(m=>f("li",{children:f(zh,{recipe:m},m.id)},m.id)):d?P("h3",{children:[" ","An error has occured, please try searching again."," "]}):P("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function Bx(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const Hx=Ve.section`
  background-color: white;
  color: #242424;
  height: 100vh;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .saved-recipes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;function Wx(){const[e,t]=b.useState([]),n="",{userProfile:r}=b.useContext(Xr);return b.useEffect(()=>{async function i(){try{const a=await ta.post(`${n}/api/getSavedRecipes`,{username:r.username});t(a.data)}catch(a){console.error("Error fetching saved recipes:",a)}}i()},[]),P(Hx,{children:[f("div",{className:"title",children:f("h1",{children:"Saved Recipes"})}),f("div",{className:"saved-recipes",children:f("ul",{children:e.map(i=>f("li",{children:f(zh,{recipe:i.recipeJson,showDelete:!0})},i._id))})})]})}let Dn="#2C4001",K0="#dae082",Vx="#F2E7AE",lr="#F2F2F2";const Yx=Ve.section`
    height: 100%;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: ${Dn};
        width: 90%;
        margin: 0 auto;
    }
    & .logo {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
        margin: 0 auto;
    }
    & .about {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${lr};
        background: ${Dn};
        border-radius: 0  0 20px 20px;
        

    }
    & .about li {
        list-style: none;

    }

    & .about ul {
        padding: 0;

    }
    & .about p {
        padding: 1.5em;
    }
    & .form-sect {
  


    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1em;
        
    }

    & form div {
        width: 90%;
        margin: 0 auto;
    }

    & .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3%;
        border: 1px solid ${Dn};
        border-radius: 5px;
    }
    & form input {
        text-align: center;
        font-size: 1.5rem;
        border: none;
        width: 100%;
        padding: .5em;
        background-color: ${lr};
        border-radius: 5px;
        color: #3c3b3b;
    }
    & form input:focus {
        background-color: ${Vx};
        border: none;
    }
    & .input-tag {
        color: ${lr};
        
    }

    & form div.title {
        text-align: center;
        
        padding: 1%;
    }

    & .btn {
        color: #000000;
        width: 100%;
        border-radius: 5px;
        padding: .5em;
        background: ${K0};
        color: #000000;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${K0};
        color: ${Dn};
        border: 1px solid ${Dn};
    }

    & .submit-btn button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
        background: ${Dn};
        color: ${lr};
        border: 1px solid ${lr};
    }

    & .input-container {
        position: relative;
    }

    & .goto-btn {
        padding: 1%;
        width: 40%;
        margin-top: 5%;
        font-size: 1rem;
        text-align: center;
    }

    & .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    & .error-desc {
        border-radius: 10px;
        padding: 10px;
    }

    & .error-marker {
        font-size: 2rem;
        color: black;
    }

    @media ${_e.tablet} {
        .logo{
            width: 50%;
        }
        form{
            margin: 0 auto;
            width: 60%;
        }
    }
    @media ${_e.laptop} {
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
        .login-container {
            background: ${lr};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${Dn};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
        
        .logo{
            width: 60%;
        }
        form {
            width: 100%;
            
        }
        & form input {
            background: white;
        }
        
    }

    @media ${_e.laptopL} {
        .logo{
           
        }
        form{
            
        }
    }
    @media ${_e.desktop} {

    }
`;function Qx(){const e=b.useRef(null),t=b.useRef(null),[n,r]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null),s=ml(),{userProfile:u,isLoggedIn:c,setIsLoggedIn:d,setUserProfile:h}=b.useContext(Xr);return b.useEffect(()=>{e.current.focus()},[]),f(Yx,{children:P("section",{className:"login-container",children:[f("div",{children:f("img",{src:"\\src\\assets\\PantryPalAvo.png",alt:"Pantry Pal Logo",className:"logo"})}),f("section",{className:"form-sect",children:P("form",{onSubmit:async g=>{g.preventDefault();try{const x=(await ta.post("/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;d(!0),h(m=>x.userProfile?{...m,...x.userProfile}:m),s("/search")}catch(v){d(!1),console.log(v)}},children:[P("div",{className:"title",children:[f("div",{children:c&&"logged in"}),f("h2",{children:"Welcome Back!"})]}),o&&f("div",{className:"error-container",children:P("div",{className:"error-desc",children:[f("span",{className:"error-marker",children:"⚠"})," ",o]})}),P("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"username"}),f("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:g=>r(g.target.value),required:!0})]}),P("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"password"}),f("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:g=>a(g.target.value),required:!0})]}),f("div",{className:"submit-btn",children:f("button",{type:"submit",className:"btn",children:"Sign In"})}),f("span",{children:"Don't have an account?"}),f(Qe,{className:"page",to:"/signup",children:"SignUp"})]})})]})})}let bt="#2C4001",Wa="#F2E7AE",X0="#59320F",As="#F2F2F2";const Gx=Ve.section`
.recipeImgContainer {
  height: 50%;
  text-align: center;
  color: white;
  
}
& .imageContainer {
  position: relative;
}
& .recipeImg{
  width: 100%;
  height: 100%;
  object-fit: contain;
  // filter: blur(9px);
  // filter: brightness(75%)
}

& .recipeDetails{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: ${As};
  width: 100%; 
  border-radius: 1.5em 1.5em 0 0;
  margin: 0em;
}
& .titleContainer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
}
& .quickInfoContainer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: ${bt};
}
& .quickIcon {
  font-size: 1.5em;
}

& .recipeTime {
  color: ${bt};
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
}



& .recipeDetailContainer {
  background: ${bt};
}
& .recipeTitle {
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: ${bt};
}

& .saveBtn {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #f38181;
  color: #fff;;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  transition: all .1s ease-in-out;
}
& .saveBtn:hover .saveIcon {
  transform: scale(1.4);
}
& .saveIcon {
  transition: all .2s ease-in-out;
}

& .title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${As};
  padding: 0 4em;
  margin: 0 .5em;

}
& .recipeSummary {
  padding: 1em;
  color: ${bt};
  border-top: 1px solid ${bt};

}
& .recipeTime{

}
& .recipeTag{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
& .recipeContainer{
  background: ${Wa}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Wa}
  flex-direction: row;
  border-radius: 15px;
}
& .recipeTags {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
& .recipeCategory li{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  list-style-type: none;
  border-radius: .8em;
  padding: .5em;
  background: ${X0};
  color: white;
  max-width: 8em;
  
}
& .recipeCategory {
  display: flex;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
}
& .recipeDiets {
  display: flex;
  justify-content: left;
  align-items: center;
  color: ${bt};
  flex-wrap: wrap;
}
& .recipeDiets li{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  list-style-type: none;
  border-radius: .8em;
  padding: .5em;
  background: #067a46;
  color: white;
  max-width: 8em;
}

& .recipeStart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${Wa}

}

& .ingredientCard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${bt};
  background: white;
  color: ${bt};
  border-radius: 15px 15px 0 0;
  padding: 2em;
  flex-direction: column;
  width: 100%;
}

& .recipeIngredient li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  color: black;
  padding: 1em;
}

& .recipeIngredient img{
width:70px;
height:70px;
}
& .recipeIngredient{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
& .instructionsCard{
  width: 100%;
  border-top: 1px solid ${bt};
  background: ${X0};
  color: ${Wa};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${As};
  display: flex;
  justify-content: center;
  align-items: center;
}
& .instructionImg {
  width: 100%;
}

& .recipeInstructions li {
  padding: 1em;
}

@media (min-width: 768px) {
  .recipeImg{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .recipeTitle {
    font-size: 3em;
  }
  & .saveBtn {
    bottom: 20px;
    right: 20px;
  }
  & .instructionsCard h2{
    font-size: 2em;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 900px) {
  .recipeImg{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 400px;
    object-fit: cover;
  }
  & .instructionImg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 300px;
    object-fit: cover;
  }
  .quickInfoContainer {
    justify-content: center;
    padding: 2em;
  }
  & .quickIcon {
    padding: 0 4em;
  }
  & .recipeSummary {
    padding: 0 9em;
  }
  & .instructionsCard h2{
    font-size: 2em;
    display: flex;
    justify-content: center;
  }

}

@media (min-width: 1024px) {
  .recipeImg{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    object-fit: cover;
  }
  .instructionImg {
    margin: 0 auto;
    width: 40em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quickInfoContainer {
    justify-content: center;
    padding: 2em;
  }
  & .quickIcon {
    padding: 0 4em;
  }
  & .recipeSummary {
    padding: 0 9em;
  }
  & .instructionsCard h2{
    font-size: 3em;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1200px) {
  .recipeImg{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  & .recipeDetailContainer {
    margin: 0 4em;
    padding: 2em;
  }

  & .title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  & .summaryContainer {
    display: flex;
    justify-content: space-around;
    padding: 0 3em;

  }
  & .quickInfoContainer {
    justify-content: center;
    padding: 2em;
  }
  & .quickIcon {
    padding: 0 4em;
  }
  & .recipeSummary {
    margin: 0 2em;
    width: 100%;
    padding: 0 9em;
  }
  & .recipeTime {
    color: ${bt};
  }
  & .recipeCategory {
    padding: 1em;
  }
  & .recipeStart {
    display: flex;
    justify-content: center;
    padding: 2em 4em 0 4em;
  }
  & .instructionsCard{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 2em;
  }
  & .instructionsCard h2{
    font-size: 3em;
    display: flex;
    justify-content: center;
  }
  & .instructionContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & .recipeInstructions {
    
  }
  @media (min-width: 1400px) {
    .quickInfoContainer {
      justify-content: center;
      padding: 2em;
    }
    & .quickIcon {
      padding: 0 4em;
    }
    & .recipeSummary {
      padding: 0 9em;
    }
  }
}
`;let Va;const Kx=new Uint8Array(16);function Xx(){if(!Va&&(Va=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Va))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Va(Kx)}const $e=[];for(let e=0;e<256;++e)$e.push((e+256).toString(16).slice(1));function Jx(e,t=0){return($e[e[t+0]]+$e[e[t+1]]+$e[e[t+2]]+$e[e[t+3]]+"-"+$e[e[t+4]]+$e[e[t+5]]+"-"+$e[e[t+6]]+$e[e[t+7]]+"-"+$e[e[t+8]]+$e[e[t+9]]+"-"+$e[e[t+10]]+$e[e[t+11]]+$e[e[t+12]]+$e[e[t+13]]+$e[e[t+14]]+$e[e[t+15]]).toLowerCase()}const qx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),J0={randomUUID:qx};function gt(e,t,n){if(J0.randomUUID&&!t&&!e)return J0.randomUUID();e=e||{};const r=e.random||(e.rng||Xx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return Jx(r)}function Zx(){var u;const t=(u=Gr().state)==null?void 0:u.recipe,n=t.dishTypes.map(c=>f("li",{children:c},gt())),r=t.extendedIngredients.map(c=>P("li",{children:[c.amount," ",c.unit," ",f("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${c.image}`})," ",c.name]},gt()));console.log(t);const i=t.analyzedInstructions[0].steps.map(c=>f("li",{children:c.step},gt())),a=t.summary.replace(/<.*?>/g,""),o=t.extendedIngredients.length,l=t.aggregateLikes,s=t.diets.map(c=>f("li",{children:c},gt()));return f(Gx,{children:P("div",{className:"recipeContainer",children:[P("div",{className:"recipeImgContainer",children:[P("div",{className:"imageContainer",children:[f("img",{className:"recipeImg",src:t.image,alt:t.title}),f("button",{className:"saveBtn",children:f(jt,{icon:L0,className:"saveIcon"})})]}),P("section",{className:"recipeDetails",children:[f("div",{className:"titleContainer",children:f("h1",{className:"recipeTitle",children:t.title})}),P("div",{className:"quickInfoContainer",children:[P("section",{className:"quickInfoItem",children:[f(jt,{icon:s3,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),P("section",{children:[f(jt,{icon:l3,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[o," Ingredients"]})]}),P("section",{children:[f(jt,{icon:L0,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[l," Likes"]})]})]}),f("section",{className:"recipeSummary",children:f("p",{children:a})}),P("section",{className:"recipeTags",children:[f("div",{className:"recipeCategory",children:n}),f("div",{className:"recipeDiets",children:s})]})]})]}),f("div",{className:"recipeHead",children:f("div",{className:"recipeStart",children:P("div",{className:"ingredientCard",children:[P("h2",{children:["Servings: ",t.servings]}),f("input",{type:"number",placeholder:t.servings}),f("h2",{children:"What you'll need:"}),f("div",{className:"recipeIngredient",children:r})]})})}),P("div",{className:"instructionsCard",children:[f("h2",{children:t.title}),P("div",{className:"instructionContainer",children:[f("div",{children:f("img",{className:"instructionImg",src:t.image,alt:t.title})}),P("div",{className:"recipeInstructions",children:[f("h2",{children:"Instructions:"}),f("ol",{children:i})]})]})]})]})})}async function e5(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}const t5=Ve.section`
  width: max(50%, 800px);
  padding: 2%;
  border-radius: 20px;
  margin: 2% auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  & h2 {
    color: black;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
  }

  & form input {
    text-align: center;
    margin: 0.5% auto;
    font-size: 1rem;
    border-radius: 5px;
    width: 80%;
    padding: 0.5%;
  }

  & form select {
    text-align: center;
    margin: 0.5% auto;
    font-size: 1rem;
    border-radius: 5px;
    width: 80%;
    padding: 0.5%;
  }

  & form button {
    background-color: #646cff;
    color: white;
    margin: 1% auto;
    font-size: 1rem;
    text-align: center;
    padding: 0.5%;
    cursor: pointer;
  }

  & form button:hover {
    background-color: #4c52f7;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  & th,
  & td {
    border: 1px solid #ccc;
    padding: 0.5% 1%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }

  & th {
    background-color: #f2f2f2;
  }

  & tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;function n5(){const[e,t]=b.useState(!1),[n,r]=b.useState(1),[i,a]=b.useState("None"),[o,l]=b.useState(""),[s,u]=b.useState(null);return P(t5,{children:[P("form",{onSubmit:async d=>{t(!0),d.preventDefault();const h=await e5(n,i,parseInt(o));u(h),t(!1)},children:[f("label",{htmlFor:"numberOfDays",children:"Number of days:"}),P("select",{id:"numberOfDays",value:n,onChange:d=>r(d.target.value),children:[f("option",{value:"1",children:"1"}),f("option",{value:"3",children:"3"}),f("option",{value:"5",children:"5"})]}),f("label",{htmlFor:"dietType",children:"Diet type:"}),P("select",{id:"dietType",value:i,onChange:d=>a(d.target.value),children:[f("option",{value:"None",children:"None"}),f("option",{value:"vegan",children:"Vegan"}),f("option",{value:"vegetarian",children:"Vegetarian"}),f("option",{value:"pescatarian",children:"Pescatarian"}),f("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),f("option",{value:"keto",children:"Keto"}),f("option",{value:"gluten-free",children:"Gluten-free"}),f("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),f("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),f("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:o,onChange:d=>l(d.target.value)}),f("button",{type:"submit",children:"Get Meal Plan"}),e?f(Oh,{}):null]}),s&&P("table",{children:[f("thead",{children:P("tr",{children:[f("th",{children:"Day"}),f("th",{children:"Meal"}),f("th",{children:"Food"}),f("th",{children:"Calories"})]})}),f("tbody",{children:s.map(d=>{const h=Object.entries(d).filter(([g])=>g!=="Day"&&g!=="TotalCalories"),w=h.reduce((g,[,v])=>g+v.Calories,0);return h.flatMap(([g,v],x)=>[P("tr",{children:[x===0&&f("td",{rowSpan:h.length+1,children:d.Day}),f("td",{children:g}),f("td",{children:v.Meal}),f("td",{children:v.Calories})]},`${g}-${v.Meal}`),x===h.length-1&&f("tr",{children:P("td",{colSpan:"3",align:"right",children:["Total Day Calories :"," ",w]})},`${g}-TotalCalories`)])})})]})]})}const r5=o4`
    //resetting some stuff - targets whole application styles
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        width:100%;
    }

`,i5="#ffffff",a5="#40a140",o5=" #ffea00d0",l5=" #28bee4",s5="#ffffff",u5="#25271843",c5=Ve.section`
    background: ${i5};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239F4A54' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    display: flex;
    padding: 1rem;
    flex-direction: column;
    width: 100%;

    .hidden {
        scale: 0;
    }
    & .modal__container {
        width: 100%;
        /* display: flex; */
        justify-content: center;
        position: absolute;
        left: 0;
    }

    picture img {
        background: ${s5};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${u5};
        padding: 2rem;
        border-radius: 30px 100px;
        display: flex;
        flex-direction: column;
        @media (min-width: 1000px) {
            flex-direction: row;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .btn {
        padding: 1.3rem;
        border-radius: 20px;
        text-align: center;
        background-color: ${o5};
        color: #000000;
        text-align: middle;
        vertical-align: center;
        box-shadow: 3px 1px 5px black;
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${l5};
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* background: gray; */
        width: 100%;
        padding: 2rem;
        justify-content: middle;
        align-items: center;

        li {
            width: 100%;
            max-width: 400px;
        }
    }

    .profile {
        flex-direction: column;
        width: 100%;
        text-align: center;
        picture {
            width: 100%;
            img {
                width: 100%;
                max-width: 300px;
            }
        }
    }
    .app-pref {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
        justify-content: center;
        li {
            display: flex;
            justify-content: space-around;
            text-align: center;
            width: 30%;
            background: ${a5};
            border-radius: 24px;
            box-shadow: 3px 1px 5px black;

            div {
                display: inline-block;
            }
        }
    }

    .app-config {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .controls {
        float: right;
        margin: 2rem 0;
    }
`,f5="#2b3f0124",d5="#eae6e6",p5="#a8a6a6",m5="#000000",h5="#595959f",g5=Ve.section`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* scale: 0; */

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col {
        flex-direction: column;
    }

    .hidden {
        /* visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden; */
    }
    main {
        display: flex;
        justify-content: center;
        position: absolute;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        gap: 1rem;

        /* border: green solid 40px; */

        & h1 {
            margin: 0;
        }

        li {
            list-style: none;
        }

        .back__blur {
            background-color: ${f5};

            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: fixed;
            position: absolute;
            /* z-index: 10; */
            backdrop-filter: blur(10px);
        }

        #modal {
            z-index: 3;
            background-color: ${d5};
            padding: 1rem;
            border-radius: 2rem;
            width: 80%;
            max-width: 300px;
            min-height: 300px;

            .btn {
                padding: 0 0.4rem;
            }

            form {
                height: 300px;
                .title {
                    height: 10%;
                }

                .form__inputs {
                    height: 70%;

                    .update__field {
                        margin-top: 2rem;
                        display: flex;
                        gap: 2rem;
                        justify-content: center;

                        .input__container {
                            position: relative;
                            label {
                                top: -20px;
                                position: absolute;
                                font-size: 0.7rem;
                                color: ${h5};
                            }
                            input {
                                color: ${m5};
                                border: 1px solid ${p5};
                                border-radius: 0.2rem;
                            }
                        }
                    }
                }
                .form__controls {
                    height: 20%;
                    justify-content: flex-end;
                    gap: 1.5rem;
                }
            }
        }
    }
`,v5="#f4888a",y5=Ve.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${v5};

    & .error__list {
        display: flex;
        flex-direction: column;
    }

    .error_item {
        display: flex;

        justify-content: space-between;
        align-items: center;
        /* border: solid 1px black; */

        .img__container {
            width: 20%;
            img {
                width: 100%;
            }
        }
        p {
            width: 100%;

            /* border: solid 1px black; */
        }
    }
`,w5="/assets/error-58915e09.png";function Rf({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:P("div",{className:"error_item",children:[f("div",{className:"img__container",children:f("img",{src:w5,alt:"error symbol"})}),f("p",{children:a})]})},gt()))}return t?f(y5,{children:f("div",{className:"error container",children:f("div",{className:"row",children:P("section",{className:"container col",children:[f("h3",{children:"Please correct errors"}),f("ul",{className:"error__list",children:e.length>0?n(e):f(Ut,{})})]})})})}):f(Ut,{})}function x5({children:e,setIsDisplayed:t,scrollToRef:n}){b.useRef("");function r(){t(!1)}return f(g5,{children:P("main",{children:[f("div",{onClick:()=>{r()},className:"back__blur "}),f("div",{ref:n,className:"container row ",children:f("section",{id:"modal",className:"",children:e})})]})})}const Rs=ta.create({baseURL:"",headers:{"Content-Type":"application/json"},withCredentials:!0});function q0(e,t){return e===t}function S5(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function k5(e,t){const n=await JSON.stringify({token:t,username:e});Wo.set("loggedIn",n),Wo.set("loggedIn",n)}const Ya={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!q0(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await Rs.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await k5(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!q0(t,n))throw Error("emails dont match");if(!S5(t))throw Error("emails improper format");return r=await Rs.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await Rs.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},b5="#08e171dc",E5=Ve.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${b5};

    .list_item {
        display: flex;

        justify-content: space-between;
        align-items: center;
        /* border: solid 1px black; */

        img {
            width: 20%;
        }
        p {
            width: 100%;

            /* border: solid 1px black; */
        }
    }
`,C5="/assets/checked-926d4d93.png";function Tf({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:P("div",{className:"list_item",children:[f("img",{src:C5,alt:"check symbol"}),f("p",{children:a})]})},gt()))}return t?f(E5,{children:f("div",{className:"error container",children:f("div",{className:"row",children:f("section",{className:"container col",children:f("ul",{className:"display_list",children:e.length>0?n(e):f(Ut,{})})})})})}):f(Ut,{})}const P5=Ve.section``;function Z0({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return P(P5,{children:[P("div",{children:[f(Tf,{listArr:["Password Updated"],showCard:n}),f(Rf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Password"})}),f("section",{className:"row form__inputs",children:P("ul",{children:[f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"oldPassword",children:"Old Password"}),f("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newPassword",children:"New Password"}),f("input",{id:"newPassword",type:"text",name:"newPassword"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),f("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function N5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update form",d.message);return}r(!0)}return P("form",{ref:s,onSubmit:u,children:[P("div",{children:[f(Tf,{listArr:["Email Updated"],showCard:n}),f(Rf,{errorsArr:o,showError:i})]}),f("section",{className:"row title",children:f("h1",{children:"Update Email"})}),f("section",{className:"row form__inputs",children:P("ul",{children:[f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newEmail",children:"New Email"}),f("input",{id:"newEmail",type:"text",name:"newEmail"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),f("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})}function _5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log(" form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return P(Ut,{children:[P("div",{children:[f(Tf,{listArr:["Calorie Preferences Updated"],showCard:n}),f(Rf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Calorie preferences"})}),f("section",{className:"row form__inputs",children:f("ul",{children:f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),f("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},gt())})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function z5(){b.useRef(null);const[e,t]=b.useState(!1);b.useState([]),b.useState(!1),b.useState(!1);const[n,r]=b.useState(f(Z0,{setShowModal:t,handleSubmit:Ya.updatePassword}));return P(c5,{children:[f("section",{className:"modal__container",children:e?f(x5,{setIsDisplayed:t,children:n}):f(Ut,{})}),P("section",{className:"profile-page",children:[P("section",{className:"container profile",children:[P("picture",{children:[f("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),f("img",{src:"/src/assets/spoon.png",alt:"user avatar"})]}),f("h3",{children:"Hi! Bob"}),f("h3",{children:"Email@email.com"})]}),P("section",{className:"container app-config",children:[P("section",{children:[f("h4",{children:"Your Dietary Preferences"}),P("ul",{className:"app-pref",children:[f("li",{children:f("div",{children:f("span",{children:"Gluten Free"})})}),f("li",{children:"Ketogenic"}),f("li",{children:"Vegetarian"}),f("li",{children:"Lacto-Vegetarian"}),f("li",{children:"Ovo-Vegetarian"}),f("li",{children:"Vegan"}),f("li",{children:"Pescetarian"}),f("li",{children:"Paleo"}),f("li",{children:"Primal"})]}),f("div",{className:"controls",children:f("span",{className:"btn",children:"Update Dietary Preferences"})})]}),P("ul",{className:"options",children:[f("li",{className:"btn",onClick:()=>{t(!0),r(f(_5,{setShowModal:t,handleSubmit:Ya.updateCaloric}))},children:f("span",{children:"Update Caloric settings"})}),f("li",{className:"btn",onClick:()=>{t(!0),r(f(N5,{setShowModal:t,handleSubmit:Ya.updateEmail}))},children:f("span",{children:"Update Email"})}),f("li",{onClick:()=>{t(!0),r(f(Z0,{setShowModal:t,handleSubmit:Ya.updatePassword}))},className:"btn",children:f("div",{children:f("span",{children:"Update Password"})})})]})]})]})]})}function fi({children:e}){const{isLoggedIn:t}=b.useContext(Xr);return t?f(Ut,{children:e}):f(J2,{to:"/login"})}function O5(){return f(u3,{children:P("div",{className:"App",children:[f("header",{children:f(c3,{})}),P("main",{children:[P(Z2,{children:[f(Rt,{path:"/",element:f(p3,{})}),f(Rt,{path:"/search",element:f(fi,{children:f(Ux,{})})}),f(Rt,{path:"/details",element:f(fi,{children:f(Zx,{})})}),f(Rt,{path:"/saved",element:f(fi,{children:f(Wx,{})})}),f(Rt,{path:"/signup",element:f(h3,{})}),f(Rt,{path:"/login",element:f(Qx,{})}),f(Rt,{path:"/mealPlanner",element:f(fi,{children:f(n5,{})})}),f(Rt,{path:"/profile",element:f(fi,{children:f(z5,{})})}),f(Rt,{path:"/*",element:f("h1",{children:"404 no page"})})]}),f(r5,{})]})]})})}Is.createRoot(document.getElementById("root")).render(f(rn.StrictMode,{children:f(iy,{children:f(O5,{})})}));
