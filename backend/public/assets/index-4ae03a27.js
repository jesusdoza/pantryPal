function Eh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ch(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zi={},zh={get exports(){return zi},set exports(e){zi=e}},Qo={},b={},Ph={get exports(){return b},set exports(e){b=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),Nh=Symbol.for("react.portal"),_h=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),Rh=Symbol.for("react.provider"),Th=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),$h=Symbol.for("react.memo"),jh=Symbol.for("react.lazy"),_f=Symbol.iterator;function Mh(e){return e===null||typeof e!="object"?null:(e=_f&&e[_f]||e["@@iterator"],typeof e=="function"?e:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,K0={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=K0,this.updater=n||Q0}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function X0(){}X0.prototype=Fr.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=K0,this.updater=n||Q0}var qu=Ju.prototype=new X0;qu.constructor=Ju;G0(qu,Fr.prototype);qu.isPureReactComponent=!0;var Of=Array.isArray,J0=Object.prototype.hasOwnProperty,Zu={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function Z0(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)J0.call(t,r)&&!q0.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:e,key:a,ref:o,props:i,_owner:Zu.current}}function Fh(e,t){return{$$typeof:Zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ec(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zi}function Dh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Af=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dh(""+e.key):t.toString(36)}function Va(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Zi:case Nh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Dl(o,0):r,Of(i)?(n="",e!=null&&(n=e.replace(Af,"$&/")+"/"),Va(i,t,n,"",function(u){return u})):i!=null&&(ec(i)&&(i=Fh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Af,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Of(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Dl(a,l);o+=Va(a,t,n,s,i)}else if(s=Mh(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Dl(a,l++),o+=Va(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function da(e,t,n){if(e==null)return e;var r=[],i=0;return Va(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Uh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Wa={transition:null},Bh={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Zu};Q.Children={map:da,forEach:function(e,t,n){da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return da(e,function(){t++}),t},toArray:function(e){return da(e,function(t){return t})||[]},only:function(e){if(!ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Fr;Q.Fragment=_h;Q.Profiler=Ah;Q.PureComponent=Ju;Q.StrictMode=Oh;Q.Suspense=Lh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bh;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=G0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Zu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)J0.call(t,s)&&!q0.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:Th,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rh,_context:e},e.Consumer=e};Q.createElement=Z0;Q.createFactory=function(e){var t=Z0.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Ih,render:e}};Q.isValidElement=ec;Q.lazy=function(e){return{$$typeof:jh,_payload:{_status:-1,_result:e},_init:Uh}};Q.memo=function(e,t){return{$$typeof:$h,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Q.useContext=function(e){return Ge.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Q.useId=function(){return Ge.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Q.useRef=function(e){return Ge.current.useRef(e)};Q.useState=function(e){return Ge.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ge.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(Ph);const nn=Ch(b),Ps=Eh({__proto__:null,default:nn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh=b,Vh=Symbol.for("react.element"),Wh=Symbol.for("react.fragment"),Yh=Object.prototype.hasOwnProperty,Qh=Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gh={key:!0,ref:!0,__self:!0,__source:!0};function e1(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Yh.call(t,r)&&!Gh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vh,type:e,key:a,ref:o,props:i,_owner:Qh.current}}Qo.Fragment=Wh;Qo.jsx=e1;Qo.jsxs=e1;(function(e){e.exports=Qo})(zh);const Gt=zi.Fragment,d=zi.jsx,z=zi.jsxs;var Ns={},_s={},Kh={get exports(){return _s},set exports(e){_s=e}},st={},Os={},Xh={get exports(){return Os},set exports(e){Os=e}},t1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,F){var U=A.length;A.push(F);e:for(;0<U;){var ie=U-1>>>1,T=A[ie];if(0<i(T,F))A[ie]=F,A[U]=T,U=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],U=A.pop();if(U!==F){A[0]=U;e:for(var ie=0,T=A.length,I=T>>>1;ie<I;){var $=2*(ie+1)-1,B=A[$],k=$+1,G=A[k];if(0>i(B,U))k<T&&0>i(G,B)?(A[ie]=G,A[k]=U,ie=k):(A[ie]=B,A[$]=U,ie=$);else if(k<T&&0>i(G,U))A[ie]=G,A[k]=U,ie=k;else break e}}return F}function i(A,F){var U=A.sortIndex-F.sortIndex;return U!==0?U:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,f=null,m=3,w=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(A){if(y=!1,g(A),!v)if(n(s)!==null)v=!0,Ft(C);else{var F=n(u);F!==null&&We(S,F.startTime-A)}}function C(A,F){v=!1,y&&(y=!1,h(_),_=-1),w=!0;var U=m;try{for(g(F),f=n(s);f!==null&&(!(f.expirationTime>F)||A&&!ze());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,m=f.priorityLevel;var T=ie(f.expirationTime<=F);F=e.unstable_now(),typeof T=="function"?f.callback=T:f===n(s)&&r(s),g(F)}else r(s);f=n(s)}if(f!==null)var I=!0;else{var $=n(u);$!==null&&We(S,$.startTime-F),I=!1}return I}finally{f=null,m=U,w=!1}}var O=!1,P=null,_=-1,V=5,D=-1;function ze(){return!(e.unstable_now()-D<V)}function xe(){if(P!==null){var A=e.unstable_now();D=A;var F=!0;try{F=P(!0,A)}finally{F?Oe():(O=!1,P=null)}}else O=!1}var Oe;if(typeof p=="function")Oe=function(){p(xe)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Me=rt.port2;rt.port1.onmessage=xe,Oe=function(){Me.postMessage(null)}}else Oe=function(){x(xe,0)};function Ft(A){P=A,O||(O=!0,Oe())}function We(A,F){_=x(function(){A(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Ft(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var U=m;m=F;try{return A()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var U=m;m=A;try{return F()}finally{m=U}},e.unstable_scheduleCallback=function(A,F,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,A){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=U+T,A={id:c++,callback:F,priorityLevel:A,startTime:U,expirationTime:T,sortIndex:-1},U>ie?(A.sortIndex=U,t(u,A),n(s)===null&&A===n(u)&&(y?(h(_),_=-1):y=!0,We(S,U-ie))):(A.sortIndex=T,t(s,A),v||w||(v=!0,Ft(C))),A},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(A){var F=m;return function(){var U=m;m=F;try{return A.apply(this,arguments)}finally{m=U}}}})(t1);(function(e){e.exports=t1})(Xh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=b,lt=Os;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r1=new Set,Pi={};function rr(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Pi[e]=t,e=0;e<t.length;e++)r1.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=Object.prototype.hasOwnProperty,Jh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rf={},Tf={};function qh(e){return As.call(Tf,e)?!0:As.call(Rf,e)?!1:Jh.test(e)?Tf[e]=!0:(Rf[e]=!0,!1)}function Zh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function e2(e,t,n,r){if(t===null||typeof t>"u"||Zh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var tc=/[\-:]([a-z])/g;function nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tc,nc);je[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tc,nc);je[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tc,nc);je[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function rc(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(e2(t,n,i,r)&&(n=null),r||i===null?qh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),Ts=Symbol.for("react.suspense"),Is=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),o1=Symbol.for("react.offscreen"),If=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=If&&e[If]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ul;function ui(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Bl=!1;function Hl(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function t2(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function Ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case or:return"Portal";case Rs:return"Profiler";case ic:return"StrictMode";case Ts:return"Suspense";case Is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a1:return(e.displayName||"Context")+".Consumer";case i1:return(e._context.displayName||"Context")+".Provider";case ac:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Ls(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Ls(e(t))}catch{}}return null}function n2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ls(t);case 8:return t===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function l1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r2(e){var t=l1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=r2(e))}function s1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=l1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function u1(e,t){t=t.checked,t!=null&&rc(e,"checked",t,!1)}function js(e,t){u1(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ms(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ms(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $f(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ms(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ci(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function c1(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function f1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?f1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,d1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i2=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(e){i2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mi[t]=mi[e]})});function p1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mi.hasOwnProperty(e)&&mi[e]?(""+t).trim():t+"px"}function m1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a2=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(a2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hs=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,br=null,Er=null;function Ff(e){if(e=na(e)){if(typeof Vs!="function")throw Error(N(280));var t=e.stateNode;t&&(t=qo(t),Vs(e.stateNode,e.type,t))}}function h1(e){br?Er?Er.push(e):Er=[e]:br=e}function g1(){if(br){var e=br,t=Er;if(Er=br=null,Ff(e),t)for(e=0;e<t.length;e++)Ff(t[e])}}function v1(e,t){return e(t)}function y1(){}var Vl=!1;function w1(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return v1(e,t,n)}finally{Vl=!1,(br!==null||Er!==null)&&(y1(),g1())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ws=!1;if(Kt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Ws=!1}function o2(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hi=!1,co=null,fo=!1,Ys=null,l2={onError:function(e){hi=!0,co=e}};function s2(e,t,n,r,i,a,o,l,s){hi=!1,co=null,o2.apply(l2,arguments)}function u2(e,t,n,r,i,a,o,l,s){if(s2.apply(this,arguments),hi){if(hi){var u=co;hi=!1,co=null}else throw Error(N(198));fo||(fo=!0,Ys=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Df(e){if(ir(e)!==e)throw Error(N(188))}function c2(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Df(i),e;if(a===r)return Df(i),t;a=a.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function S1(e){return e=c2(e),e!==null?k1(e):null}function k1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=k1(e);if(t!==null)return t;e=e.sibling}return null}var b1=lt.unstable_scheduleCallback,Uf=lt.unstable_cancelCallback,f2=lt.unstable_shouldYield,d2=lt.unstable_requestPaint,ye=lt.unstable_now,p2=lt.unstable_getCurrentPriorityLevel,sc=lt.unstable_ImmediatePriority,E1=lt.unstable_UserBlockingPriority,po=lt.unstable_NormalPriority,m2=lt.unstable_LowPriority,C1=lt.unstable_IdlePriority,Go=null,jt=null;function h2(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:y2,g2=Math.log,v2=Math.LN2;function y2(e){return e>>>=0,e===0?32:31-(g2(e)/v2|0)|0}var ga=64,va=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fi(l):(a&=o,a!==0&&(r=fi(a)))}else o=n&~i,o!==0?r=fi(o):a!==0&&(r=fi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function w2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=w2(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function z1(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function S2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function P1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var N1,cc,_1,O1,A1,Gs=!1,ya=[],Sn=null,kn=null,bn=null,Oi=new Map,Ai=new Map,hn=[],k2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ei(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=na(t),t!==null&&cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b2(e,t,n,r,i){switch(t){case"focusin":return Sn=ei(Sn,e,t,n,r,i),!0;case"dragenter":return kn=ei(kn,e,t,n,r,i),!0;case"mouseover":return bn=ei(bn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Oi.set(a,ei(Oi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ai.set(a,ei(Ai.get(a)||null,e,t,n,r,i)),!0}return!1}function R1(e){var t=Bn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=x1(n),t!==null){e.blockedOn=t,A1(e.priority,function(){_1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hs=r,n.target.dispatchEvent(r),Hs=null}else return t=na(n),t!==null&&cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Hf(e,t,n){Ya(e)&&n.delete(t)}function E2(){Gs=!1,Sn!==null&&Ya(Sn)&&(Sn=null),kn!==null&&Ya(kn)&&(kn=null),bn!==null&&Ya(bn)&&(bn=null),Oi.forEach(Hf),Ai.forEach(Hf)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,E2)))}function Ri(e){function t(i){return ti(i,e)}if(0<ya.length){ti(ya[0],e);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ti(Sn,e),kn!==null&&ti(kn,e),bn!==null&&ti(bn,e),Oi.forEach(t),Ai.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)R1(n),n.blockedOn===null&&hn.shift()}var Cr=rn.ReactCurrentBatchConfig,ho=!0;function C2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=1,fc(e,t,n,r)}finally{te=i,Cr.transition=a}}function z2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=4,fc(e,t,n,r)}finally{te=i,Cr.transition=a}}function fc(e,t,n,r){if(ho){var i=Ks(e,t,n,r);if(i===null)ts(e,t,r,go,n),Bf(e,r);else if(b2(i,e,t,n,r))r.stopPropagation();else if(Bf(e,r),t&4&&-1<k2.indexOf(e)){for(;i!==null;){var a=na(i);if(a!==null&&N1(a),a=Ks(e,t,n,r),a===null&&ts(e,t,r,go,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ts(e,t,r,null,n)}}var go=null;function Ks(e,t,n,r){if(go=null,e=lc(r),e=Bn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=x1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function T1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p2()){case sc:return 1;case E1:return 4;case po:case m2:return 16;case C1:return 536870912;default:return 16}default:return 16}}var vn=null,dc=null,Qa=null;function I1(){if(Qa)return Qa;var e,t=dc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Qa=i.slice(e,1<r?1-r:void 0)}function Ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function Vf(){return!1}function ut(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wa:Vf,this.isPropagationStopped=Vf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=ut(Dr),ta=pe({},Dr,{view:0,detail:0}),P2=ut(ta),Yl,Ql,ni,Ko=pe({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(Yl=e.screenX-ni.screenX,Ql=e.screenY-ni.screenY):Ql=Yl=0,ni=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Wf=ut(Ko),N2=pe({},Ko,{dataTransfer:0}),_2=ut(N2),O2=pe({},ta,{relatedTarget:0}),Gl=ut(O2),A2=pe({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),R2=ut(A2),T2=pe({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I2=ut(T2),L2=pe({},Dr,{data:0}),Yf=ut(L2),$2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M2[e])?!!t[e]:!1}function mc(){return F2}var D2=pe({},ta,{key:function(e){if(e.key){var t=$2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?Ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U2=ut(D2),B2=pe({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=ut(B2),H2=pe({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),V2=ut(H2),W2=pe({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y2=ut(W2),Q2=pe({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G2=ut(Q2),K2=[9,13,27,32],hc=Kt&&"CompositionEvent"in window,gi=null;Kt&&"documentMode"in document&&(gi=document.documentMode);var X2=Kt&&"TextEvent"in window&&!gi,L1=Kt&&(!hc||gi&&8<gi&&11>=gi),Gf=String.fromCharCode(32),Kf=!1;function $1(e,t){switch(e){case"keyup":return K2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function J2(e,t){switch(e){case"compositionend":return j1(t);case"keypress":return t.which!==32?null:(Kf=!0,Gf);case"textInput":return e=t.data,e===Gf&&Kf?null:e;default:return null}}function q2(e,t){if(sr)return e==="compositionend"||!hc&&$1(e,t)?(e=I1(),Qa=dc=vn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L1&&t.locale!=="ko"?null:t.data;default:return null}}var Z2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z2[e.type]:t==="textarea"}function M1(e,t,n,r){h1(r),t=vo(t,"onChange"),0<t.length&&(n=new pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Ti=null;function eg(e){K1(e,0)}function Xo(e){var t=fr(e);if(s1(t))return e}function tg(e,t){if(e==="change")return t}var F1=!1;if(Kt){var Kl;if(Kt){var Xl="oninput"in document;if(!Xl){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Xl=typeof Jf.oninput=="function"}Kl=Xl}else Kl=!1;F1=Kl&&(!document.documentMode||9<document.documentMode)}function qf(){vi&&(vi.detachEvent("onpropertychange",D1),Ti=vi=null)}function D1(e){if(e.propertyName==="value"&&Xo(Ti)){var t=[];M1(t,Ti,e,lc(e)),w1(eg,t)}}function ng(e,t,n){e==="focusin"?(qf(),vi=t,Ti=n,vi.attachEvent("onpropertychange",D1)):e==="focusout"&&qf()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Ti)}function ig(e,t){if(e==="click")return Xo(t)}function ag(e,t){if(e==="input"||e==="change")return Xo(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:og;function Ii(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!As.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zf(n)}}function U1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function B1(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lg(e){var t=B1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&U1(n.ownerDocument.documentElement,n)){if(r!==null&&gc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ed(n,a);var o=ed(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sg=Kt&&"documentMode"in document&&11>=document.documentMode,ur=null,Xs=null,yi=null,Js=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||ur==null||ur!==uo(r)||(r=ur,"selectionStart"in r&&gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&Ii(yi,r)||(yi=r,r=vo(Xs,"onSelect"),0<r.length&&(t=new pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Jl={},H1={};Kt&&(H1=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Jo(e){if(Jl[e])return Jl[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H1)return Jl[e]=t[n];return e}var V1=Jo("animationend"),W1=Jo("animationiteration"),Y1=Jo("animationstart"),Q1=Jo("transitionend"),G1=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){G1.set(e,t),rr(t,[e])}for(var ql=0;ql<nd.length;ql++){var Zl=nd[ql],ug=Zl.toLowerCase(),cg=Zl[0].toUpperCase()+Zl.slice(1);jn(ug,"on"+cg)}jn(V1,"onAnimationEnd");jn(W1,"onAnimationIteration");jn(Y1,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Q1,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,u2(r,t,void 0,e),e.currentTarget=null}function K1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;rd(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;rd(i,l,u),a=s}}}if(fo)throw e=Ys,fo=!1,Ys=null,e}function oe(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||(X1(t,e,2,!1),n.add(r))}function es(e,t,n){var r=0;t&&(r|=4),X1(n,e,r,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[Sa]){e[Sa]=!0,r1.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||es(n,!1,e),es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,es("selectionchange",!1,t))}}function X1(e,t,n,r){switch(T1(t)){case 1:var i=C2;break;case 4:i=z2;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ts(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}w1(function(){var u=a,c=lc(n),f=[];e:{var m=G1.get(e);if(m!==void 0){var w=pc,v=e;switch(e){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":w=U2;break;case"focusin":v="focus",w=Gl;break;case"focusout":v="blur",w=Gl;break;case"beforeblur":case"afterblur":w=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=V2;break;case V1:case W1:case Y1:w=R2;break;case Q1:w=Y2;break;case"scroll":w=P2;break;case"wheel":w=G2;break;case"copy":case"cut":case"paste":w=I2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Qf}var y=(t&4)!==0,x=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=_i(p,h),S!=null&&y.push($i(p,S,g)))),x)break;p=p.return}0<y.length&&(m=new w(m,v,null,n,c),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Hs&&(v=n.relatedTarget||n.fromElement)&&(Bn(v)||v[Xt]))break e;if((w||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Bn(v):null,v!==null&&(x=ir(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(y=Wf,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Qf,S="onPointerLeave",h="onPointerEnter",p="pointer"),x=w==null?m:fr(w),g=v==null?m:fr(v),m=new y(S,p+"leave",w,n,c),m.target=x,m.relatedTarget=g,S=null,Bn(c)===u&&(y=new y(h,p+"enter",v,n,c),y.target=g,y.relatedTarget=x,S=y),x=S,w&&v)t:{for(y=w,h=v,p=0,g=y;g;g=ar(g))p++;for(g=0,S=h;S;S=ar(S))g++;for(;0<p-g;)y=ar(y),p--;for(;0<g-p;)h=ar(h),g--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=ar(y),h=ar(h)}y=null}else y=null;w!==null&&id(f,m,w,y,!1),v!==null&&x!==null&&id(f,x,v,y,!0)}}e:{if(m=u?fr(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var C=tg;else if(Xf(m))if(F1)C=ag;else{C=rg;var O=ng}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=ig);if(C&&(C=C(e,u))){M1(f,C,n,c);break e}O&&O(e,m,u),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Ms(m,"number",m.value)}switch(O=u?fr(u):window,e){case"focusin":(Xf(O)||O.contentEditable==="true")&&(ur=O,Xs=u,yi=null);break;case"focusout":yi=Xs=ur=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,td(f,n,c);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":td(f,n,c)}var P;if(hc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else sr?$1(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(L1&&n.locale!=="ko"&&(sr||_!=="onCompositionStart"?_==="onCompositionEnd"&&sr&&(P=I1()):(vn=c,dc="value"in vn?vn.value:vn.textContent,sr=!0)),O=vo(u,_),0<O.length&&(_=new Yf(_,e,null,n,c),f.push({event:_,listeners:O}),P?_.data=P:(P=j1(n),P!==null&&(_.data=P)))),(P=X2?J2(e,n):q2(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(c=new Yf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}K1(f,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=_i(e,n),a!=null&&r.unshift($i(e,a,i)),a=_i(e,t),a!=null&&r.push($i(e,a,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=_i(n,a),s!=null&&o.unshift($i(n,s,l))):i||(s=_i(n,a),s!=null&&o.push($i(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var dg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(dg,`
`).replace(pg,"")}function ka(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(N(425))}function yo(){}var qs=null,Zs=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(gg)}:tu;function gg(e){setTimeout(function(){throw e})}function ns(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Ur,ji="__reactProps$"+Ur,Xt="__reactContainer$"+Ur,nu="__reactEvents$"+Ur,vg="__reactListeners$"+Ur,yg="__reactHandles$"+Ur;function Bn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[Tt])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Tt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function qo(e){return e[ji]||null}var ru=[],dr=-1;function Mn(e){return{current:e}}function se(e){0>dr||(e.current=ru[dr],ru[dr]=null,dr--)}function ae(e,t){dr++,ru[dr]=e.current,e.current=t}var Rn={},He=Mn(Rn),et=Mn(!1),Kn=Rn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function wo(){se(et),se(He)}function sd(e,t,n){if(He.current!==Rn)throw Error(N(168));ae(He,t),ae(et,n)}function J1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,n2(e)||"Unknown",i));return pe({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Kn=He.current,ae(He,e),ae(et,et.current),!0}function ud(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=J1(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,se(et),se(He),ae(He,e)):se(et),ae(et,n)}var Bt=null,Zo=!1,rs=!1;function q1(e){Bt===null?Bt=[e]:Bt.push(e)}function wg(e){Zo=!0,q1(e)}function Fn(){if(!rs&&Bt!==null){rs=!0;var e=0,t=te;try{var n=Bt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,Zo=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),b1(sc,Fn),i}finally{te=t,rs=!1}}return null}var pr=[],mr=0,So=null,ko=0,dt=[],pt=0,Xn=null,Ht=1,Vt="";function Dn(e,t){pr[mr++]=ko,pr[mr++]=So,So=e,ko=t}function Z1(e,t,n){dt[pt++]=Ht,dt[pt++]=Vt,dt[pt++]=Xn,Xn=e;var r=Ht;e=Vt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var a=32-Pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Pt(t)+i|n<<i|r,Vt=a+e}else Ht=1<<a|n<<i|r,Vt=e}function vc(e){e.return!==null&&(Dn(e,1),Z1(e,1,0))}function yc(e){for(;e===So;)So=pr[--mr],pr[mr]=null,ko=pr[--mr],pr[mr]=null;for(;e===Xn;)Xn=dt[--pt],dt[pt]=null,Vt=dt[--pt],dt[pt]=null,Ht=dt[--pt],dt[pt]=null}var ot=null,at=null,ce=!1,Ct=null;function ep(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,at=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,at=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function au(e){if(ce){var t=at;if(t){var n=t;if(!cd(e,t)){if(iu(e))throw Error(N(418));t=En(n.nextSibling);var r=ot;t&&cd(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,ce=!1,ot=e)}}else{if(iu(e))throw Error(N(418));e.flags=e.flags&-4097|2,ce=!1,ot=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function ba(e){if(e!==ot)return!1;if(!ce)return fd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=at)){if(iu(e))throw tp(),Error(N(418));for(;t;)ep(e,t),t=En(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ot?En(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=at;e;)e=En(e.nextSibling)}function Ar(){at=ot=null,ce=!1}function wc(e){Ct===null?Ct=[e]:Ct.push(e)}var xg=rn.ReactCurrentBatchConfig;function bt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=Mn(null),Eo=null,hr=null,xc=null;function Sc(){xc=hr=Eo=null}function kc(e){var t=bo.current;se(bo),e._currentValue=t}function ou(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){Eo=e,xc=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(xc!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(Eo===null)throw Error(N(308));hr=e,Eo.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Hn=null;function bc(e){Hn===null?Hn=[e]:Hn.push(e)}function np(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,bc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var i=e.updateQueue;mn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var f=i.baseState;o=0,c=u=s=null,l=a;do{var m=l.lane,w=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(m=t,w=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(w,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,m=typeof v=="function"?v.call(w,f,m):v,m==null)break e;f=pe({},f,m);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,s=f):c=c.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=f}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var ip=new n1.Component().refs;function lu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Pn(e),a=Yt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(Nt(t,e,i,r),Ka(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Pn(e),a=Yt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(Nt(t,e,i,r),Ka(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Pn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(Nt(t,e,r,n),Ka(t,e,r))}};function md(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,a):!0}function ap(e,t,n){var r=!1,i=Rn,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=tt(t)?Kn:He.current,r=t.contextTypes,a=(r=r!=null)?Or(e,i):Rn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ip,Ec(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=tt(t)?Kn:He.current,i.context=Or(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(lu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),Co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===ip&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function op(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Nn(h,p),h.index=0,h.sibling=null,h}function a(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,S){return p===null||p.tag!==6?(p=cs(g,h.mode,S),p.return=h,p):(p=i(p,g),p.return=h,p)}function s(h,p,g,S){var C=g.type;return C===lr?c(h,p,g.props.children,S,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&gd(C)===p.type)?(S=i(p,g.props),S.ref=ri(h,p,g),S.return=h,S):(S=to(g.type,g.key,g.props,null,h.mode,S),S.ref=ri(h,p,g),S.return=h,S)}function u(h,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=fs(g,h.mode,S),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function c(h,p,g,S,C){return p===null||p.tag!==7?(p=Gn(g,h.mode,S,C),p.return=h,p):(p=i(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=cs(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return g=to(p.type,p.key,p.props,null,h.mode,g),g.ref=ri(h,null,p),g.return=h,g;case or:return p=fs(p,h.mode,g),p.return=h,p;case pn:var S=p._init;return f(h,S(p._payload),g)}if(ci(p)||qr(p))return p=Gn(p,h.mode,g,null),p.return=h,p;Ea(h,p)}return null}function m(h,p,g,S){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(h,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:return g.key===C?s(h,p,g,S):null;case or:return g.key===C?u(h,p,g,S):null;case pn:return C=g._init,m(h,p,C(g._payload),S)}if(ci(g)||qr(g))return C!==null?null:c(h,p,g,S,null);Ea(h,g)}return null}function w(h,p,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,l(p,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pa:return h=h.get(S.key===null?g:S.key)||null,s(p,h,S,C);case or:return h=h.get(S.key===null?g:S.key)||null,u(p,h,S,C);case pn:var O=S._init;return w(h,p,g,O(S._payload),C)}if(ci(S)||qr(S))return h=h.get(g)||null,c(p,h,S,C,null);Ea(p,S)}return null}function v(h,p,g,S){for(var C=null,O=null,P=p,_=p=0,V=null;P!==null&&_<g.length;_++){P.index>_?(V=P,P=null):V=P.sibling;var D=m(h,P,g[_],S);if(D===null){P===null&&(P=V);break}e&&P&&D.alternate===null&&t(h,P),p=a(D,p,_),O===null?C=D:O.sibling=D,O=D,P=V}if(_===g.length)return n(h,P),ce&&Dn(h,_),C;if(P===null){for(;_<g.length;_++)P=f(h,g[_],S),P!==null&&(p=a(P,p,_),O===null?C=P:O.sibling=P,O=P);return ce&&Dn(h,_),C}for(P=r(h,P);_<g.length;_++)V=w(P,h,_,g[_],S),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?_:V.key),p=a(V,p,_),O===null?C=V:O.sibling=V,O=V);return e&&P.forEach(function(ze){return t(h,ze)}),ce&&Dn(h,_),C}function y(h,p,g,S){var C=qr(g);if(typeof C!="function")throw Error(N(150));if(g=C.call(g),g==null)throw Error(N(151));for(var O=C=null,P=p,_=p=0,V=null,D=g.next();P!==null&&!D.done;_++,D=g.next()){P.index>_?(V=P,P=null):V=P.sibling;var ze=m(h,P,D.value,S);if(ze===null){P===null&&(P=V);break}e&&P&&ze.alternate===null&&t(h,P),p=a(ze,p,_),O===null?C=ze:O.sibling=ze,O=ze,P=V}if(D.done)return n(h,P),ce&&Dn(h,_),C;if(P===null){for(;!D.done;_++,D=g.next())D=f(h,D.value,S),D!==null&&(p=a(D,p,_),O===null?C=D:O.sibling=D,O=D);return ce&&Dn(h,_),C}for(P=r(h,P);!D.done;_++,D=g.next())D=w(P,h,_,D.value,S),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?_:D.key),p=a(D,p,_),O===null?C=D:O.sibling=D,O=D);return e&&P.forEach(function(xe){return t(h,xe)}),ce&&Dn(h,_),C}function x(h,p,g,S){if(typeof g=="object"&&g!==null&&g.type===lr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:e:{for(var C=g.key,O=p;O!==null;){if(O.key===C){if(C=g.type,C===lr){if(O.tag===7){n(h,O.sibling),p=i(O,g.props.children),p.return=h,h=p;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&gd(C)===O.type){n(h,O.sibling),p=i(O,g.props),p.ref=ri(h,O,g),p.return=h,h=p;break e}n(h,O);break}else t(h,O);O=O.sibling}g.type===lr?(p=Gn(g.props.children,h.mode,S,g.key),p.return=h,h=p):(S=to(g.type,g.key,g.props,null,h.mode,S),S.ref=ri(h,p,g),S.return=h,h=S)}return o(h);case or:e:{for(O=g.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=fs(g,h.mode,S),p.return=h,h=p}return o(h);case pn:return O=g._init,x(h,p,O(g._payload),S)}if(ci(g))return v(h,p,g,S);if(qr(g))return y(h,p,g,S);Ea(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=cs(g,h.mode,S),p.return=h,h=p),o(h)):n(h,p)}return x}var Rr=op(!0),lp=op(!1),ra={},Mt=Mn(ra),Mi=Mn(ra),Fi=Mn(ra);function Vn(e){if(e===ra)throw Error(N(174));return e}function Cc(e,t){switch(ae(Fi,t),ae(Mi,e),ae(Mt,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ds(t,e)}se(Mt),ae(Mt,t)}function Tr(){se(Mt),se(Mi),se(Fi)}function sp(e){Vn(Fi.current);var t=Vn(Mt.current),n=Ds(t,e.type);t!==n&&(ae(Mi,e),ae(Mt,n))}function zc(e){Mi.current===e&&(se(Mt),se(Mi))}var fe=Mn(0);function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=[];function Pc(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var Xa=rn.ReactCurrentDispatcher,as=rn.ReactCurrentBatchConfig,Jn=0,de=null,Se=null,Pe=null,Po=!1,wi=!1,Di=0,Sg=0;function De(){throw Error(N(321))}function Nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,a){if(Jn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?Cg:zg,e=n(r,i),wi){a=0;do{if(wi=!1,Di=0,25<=a)throw Error(N(301));a+=1,Pe=Se=null,t.updateQueue=null,Xa.current=Pg,e=n(r,i)}while(wi)}if(Xa.current=No,t=Se!==null&&Se.next!==null,Jn=0,Pe=Se=de=null,Po=!1,t)throw Error(N(300));return e}function Oc(){var e=Di!==0;return Di=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function yt(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Pe===null?de.memoizedState:Pe.next;if(t!==null)Pe=t,Se=e;else{if(e===null)throw Error(N(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Ui(e,t){return typeof t=="function"?t(e):t}function os(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((Jn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,o=r):s=s.next=f,de.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,_t(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ls(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);_t(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function up(){}function cp(e,t){var n=de,r=yt(),i=t(),a=!_t(r.memoizedState,i);if(a&&(r.memoizedState=i,Ze=!0),r=r.queue,Ac(pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Bi(9,dp.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(N(349));Jn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&hp(e)}function pp(e,t,n){return n(function(){mp(t)&&hp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function hp(e){var t=Jt(e,1);t!==null&&Nt(t,e,1,-1)}function vd(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Eg.bind(null,de,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gp(){return yt().memoizedState}function Ja(e,t,n,r){var i=Rt();de.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function tl(e,t,n,r){var i=yt();r=r===void 0?null:r;var a=void 0;if(Se!==null){var o=Se.memoizedState;if(a=o.destroy,r!==null&&Nc(r,o.deps)){i.memoizedState=Bi(t,n,a,r);return}}de.flags|=e,i.memoizedState=Bi(1|t,n,a,r)}function yd(e,t){return Ja(8390656,8,e,t)}function Ac(e,t){return tl(2048,8,e,t)}function vp(e,t){return tl(4,2,e,t)}function yp(e,t){return tl(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xp(e,t,n){return n=n!=null?n.concat([e]):null,tl(4,4,wp.bind(null,t,e),n)}function Rc(){}function Sp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bp(e,t,n){return Jn&21?(_t(n,t)||(n=z1(),de.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function kg(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{te=n,as.transition=r}}function Ep(){return yt().memoizedState}function bg(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))zp(t,n);else if(n=np(e,t,n,r),n!==null){var i=Qe();Nt(n,e,r,i),Pp(n,t,r)}}function Eg(e,t,n){var r=Pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))zp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var s=t.interleaved;s===null?(i.next=i,bc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=np(e,t,i,r),n!==null&&(i=Qe(),Nt(n,e,r,i),Pp(n,t,r))}}function Cp(e){var t=e.alternate;return e===de||t!==null&&t===de}function zp(e,t){wi=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var No={readContext:vt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Cg={readContext:vt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ja(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bg.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Rc,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=kg.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Rt();if(ce){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ne===null)throw Error(N(349));Jn&30||fp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yd(pp.bind(null,r,a,e),[e]),r.flags|=2048,Bi(9,dp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Ne.identifierPrefix;if(ce){var n=Vt,r=Ht;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zg={readContext:vt,useCallback:Sp,useContext:vt,useEffect:Ac,useImperativeHandle:xp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:kp,useReducer:os,useRef:gp,useState:function(){return os(Ui)},useDebugValue:Rc,useDeferredValue:function(e){var t=yt();return bp(t,Se.memoizedState,e)},useTransition:function(){var e=os(Ui)[0],t=yt().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:cp,useId:Ep,unstable_isNewReconciler:!1},Pg={readContext:vt,useCallback:Sp,useContext:vt,useEffect:Ac,useImperativeHandle:xp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:kp,useReducer:ls,useRef:gp,useState:function(){return ls(Ui)},useDebugValue:Rc,useDeferredValue:function(e){var t=yt();return Se===null?t.memoizedState=e:bp(t,Se.memoizedState,e)},useTransition:function(){var e=ls(Ui)[0],t=yt().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:cp,useId:Ep,unstable_isNewReconciler:!1};function Ir(e,t){try{var n="",r=t;do n+=t2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ng=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,wu=r),uu(e,t)},n}function _p(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ng;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bg.bind(null,e,t,n),t.then(e,e))}function xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var _g=rn.ReactCurrentOwner,Ze=!1;function Ye(e,t,n,r){t.child=e===null?lp(t,null,n,r):Rr(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var a=t.ref;return zr(t,i),r=_c(e,t,n,r,a,i),n=Oc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(ce&&n&&vc(t),t.flags|=1,Ye(e,t,r,i),t.child)}function bd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Dc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Op(e,t,a,r,i)):(e=to(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(o,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=Nn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Op(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ii(a,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,qt(e,t,i)}return cu(e,t,n,r,i)}function Ap(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(vr,it),it|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(vr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ae(vr,it),it|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ae(vr,it),it|=r;return Ye(e,t,i,n),t.child}function Rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var a=tt(n)?Kn:He.current;return a=Or(t,a),zr(t,i),n=_c(e,t,n,r,a,i),r=Oc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(ce&&r&&vc(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(tt(n)){var a=!0;xo(t)}else a=!1;if(zr(t,i),t.stateNode===null)qa(e,t),ap(t,n,r),su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=tt(n)?Kn:He.current,u=Or(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&hd(t,o,r,u),mn=!1;var m=t.memoizedState;o.state=m,Co(t,r,o,i),s=t.memoizedState,l!==r||m!==s||et.current||mn?(typeof c=="function"&&(lu(t,n,c,r),s=t.memoizedState),(l=mn||md(t,n,l,r,m,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,rp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:bt(t.type,l),o.props=u,f=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=tt(n)?Kn:He.current,s=Or(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==s)&&hd(t,o,r,s),mn=!1,m=t.memoizedState,o.state=m,Co(t,r,o,i);var v=t.memoizedState;l!==f||m!==v||et.current||mn?(typeof w=="function"&&(lu(t,n,w,r),v=t.memoizedState),(u=mn||md(t,n,u,r,m,v,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fu(e,t,n,r,a,i)}function fu(e,t,n,r,i,a){Rp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ud(t,n,!1),qt(e,t,a);r=t.stateNode,_g.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rr(t,e.child,null,a),t.child=Rr(t,null,l,a)):Ye(e,t,l,a),t.memoizedState=r.state,i&&ud(t,n,!0),t.child}function Tp(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Cc(e,t.containerInfo)}function Cd(e,t,n,r,i){return Ar(),wc(i),t.flags|=256,Ye(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=il(o,r,0,null),e=Gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=pu(n),t.memoizedState=du,e):Tc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Og(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Nn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Nn(l,a):(a=Gn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?pu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=du,r}return a=e.child,e=a.sibling,r=Nn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&wc(r),Rr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Og(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(N(422))),Ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=il({mode:"visible",children:r.children},i,0,null),a=Gn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rr(t,e.child,null,o),t.child.memoizedState=pu(o),t.memoizedState=du,a);if(!(t.mode&1))return Ca(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(N(419)),r=ss(a,r,void 0),Ca(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ze||l){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Jt(e,i),Nt(r,e,i,-1))}return Fc(),r=ss(Error(N(421))),Ca(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,at=En(i.nextSibling),ot=t,ce=!0,Ct=null,e!==null&&(dt[pt++]=Ht,dt[pt++]=Vt,dt[pt++]=Xn,Ht=e.id,Vt=e.overflow,Xn=t),t=Tc(t,r.children),t.flags|=4096,t)}function zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,n)}function us(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Lp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ye(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,n,t);else if(e.tag===19)zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),us(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}us(t,!0,n,null,a);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ag(e,t,n){switch(t.tag){case 3:Tp(t),Ar();break;case 5:sp(t);break;case 1:tt(t.type)&&xo(t);break;case 4:Cc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Ip(e,t,n):(ae(fe,fe.current&1),e=qt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,n)}return qt(e,t,n)}var $p,mu,jp,Mp;$p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mu=function(){};jp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Mt.current);var a=null;switch(n){case"input":i=$s(e,i),r=$s(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Fs(e,i),r=Fs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}Us(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ii(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rg(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&wo(),Ue(t),null;case 3:return r=t.stateNode,Tr(),se(et),se(He),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ba(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(ku(Ct),Ct=null))),mu(e,t),Ue(t),null;case 5:zc(t);var i=Vn(Fi.current);if(n=t.type,e!==null&&t.stateNode!=null)jp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ue(t),null}if(e=Vn(Mt.current),ba(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[ji]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)oe(di[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Lf(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":jf(r,a),oe("invalid",r)}Us(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):Pi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ma(r),$f(r,a,!0);break;case"textarea":ma(r),Mf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=f1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Tt]=t,e[ji]=r,$p(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bs(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)oe(di[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Lf(e,r),i=$s(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":jf(e,r),i=Fs(e,r),oe("invalid",e);break;default:i=r}Us(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?m1(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&d1(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ni(e,s):typeof s=="number"&&Ni(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Pi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&rc(e,a,s,o))}switch(n){case"input":ma(e),$f(e,r,!1);break;case"textarea":ma(e),Mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Vn(Fi.current),Vn(Mt.current),ba(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Ue(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&at!==null&&t.mode&1&&!(t.flags&128))tp(),Ar(),t.flags|=98560,a=!1;else if(a=ba(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[Tt]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else Ct!==null&&(ku(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ke===0&&(ke=3):Fc())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Tr(),mu(e,t),e===null&&Li(t.stateNode.containerInfo),Ue(t),null;case 10:return kc(t.type._context),Ue(t),null;case 17:return tt(t.type)&&wo(),Ue(t),null;case 19:if(se(fe),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ii(a,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,ii(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Lr&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304)}else{if(!r)if(e=zo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Ue(t),null}else 2*ye()-a.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Tg(e,t){switch(yc(t),t.tag){case 1:return tt(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),se(et),se(He),Pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Tr(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var za=!1,Be=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,j=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){he(e,t,r)}}var Pd=!1;function Lg(e,t){if(qs=ho,e=B1(),gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==a||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===e)break t;if(m===n&&++u===i&&(l=o),m===a&&++c===r&&(s=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zs={focusedElem:e,selectionRange:n},ho=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:bt(t.type,y),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return v=Pd,Pd=!1,v}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&hu(t,n,a)}i=i.next}while(i!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fp(e){var t=e.alternate;t!==null&&(e.alternate=null,Fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[ji],delete t[nu],delete t[vg],delete t[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}var Le=null,Et=!1;function sn(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:Be||gr(n,t);case 6:var r=Le,i=Et;Le=null,sn(e,t,n),Le=r,Et=i,Le!==null&&(Et?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Et?(e=Le,n=n.stateNode,e.nodeType===8?ns(e.parentNode,n):e.nodeType===1&&ns(e,n),Ri(e)):ns(Le,n.stateNode));break;case 4:r=Le,i=Et,Le=n.stateNode.containerInfo,Et=!0,sn(e,t,n),Le=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&hu(n,t,o),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Be&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,sn(e,t,n),Be=r):sn(e,t,n);break;default:sn(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ig),t.forEach(function(r){var i=Vg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Et=!1;break e;case 3:Le=l.stateNode.containerInfo,Et=!0;break e;case 4:Le=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Le===null)throw Error(N(160));Up(a,o,i),Le=null,Et=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Ot(e),r&4){try{xi(3,e,e.return),nl(3,e)}catch(y){he(e,e.return,y)}try{xi(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:St(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(St(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(y){he(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&u1(i,a),Bs(l,o);var u=Bs(l,a);for(o=0;o<s.length;o+=2){var c=s[o],f=s[o+1];c==="style"?m1(i,f):c==="dangerouslySetInnerHTML"?d1(i,f):c==="children"?Ni(i,f):rc(i,c,f,u)}switch(l){case"input":js(i,a);break;case"textarea":c1(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?kr(i,!!a.multiple,w,!1):m!==!!a.multiple&&(a.defaultValue!=null?kr(i,!!a.multiple,a.defaultValue,!0):kr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ji]=a}catch(y){he(e,e.return,y)}}break;case 6:if(St(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){he(e,e.return,y)}}break;case 3:if(St(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:St(t,e),Ot(e);break;case 13:St(t,e),Ot(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||($c=ye())),r&4&&_d(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,St(t,e),Be=u):St(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(f=j=c;j!==null;){switch(m=j,w=m.child,m.tag){case 0:case 11:case 14:case 15:xi(4,m,m.return);break;case 1:gr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){Ad(f);continue}}w!==null?(w.return=m,j=w):Ad(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=p1("display",o))}catch(y){he(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){he(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:St(t,e),Ot(e),r&4&&_d(e);break;case 21:break;default:St(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var a=Nd(e);yu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nd(e);vu(e,l,o);break;default:throw Error(N(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $g(e,t,n){j=e,Hp(e)}function Hp(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Be;l=za;var u=Be;if(za=o,(Be=s)&&!u)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Rd(i):s!==null?(s.return=o,j=s):Rd(i);for(;a!==null;)j=a,Hp(a),a=a.sibling;j=i,za=l,Be=u}Od(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):Od(e)}}function Od(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ri(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Be||t.flags&512&&gu(t)}catch(m){he(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ad(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Rd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{gu(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{gu(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var jg=Math.ceil,_o=rn.ReactCurrentDispatcher,Ic=rn.ReactCurrentOwner,gt=rn.ReactCurrentBatchConfig,X=0,Ne=null,we=null,$e=0,it=0,vr=Mn(0),ke=0,Hi=null,qn=0,rl=0,Lc=0,Si=null,qe=null,$c=0,Lr=1/0,Ut=null,Oo=!1,wu=null,zn=null,Pa=!1,yn=null,Ao=0,ki=0,xu=null,Za=-1,eo=0;function Qe(){return X&6?ye():Za!==-1?Za:Za=ye()}function Pn(e){return e.mode&1?X&2&&$e!==0?$e&-$e:xg.transition!==null?(eo===0&&(eo=z1()),eo):(e=te,e!==0||(e=window.event,e=e===void 0?16:T1(e.type)),e):1}function Nt(e,t,n,r){if(50<ki)throw ki=0,xu=null,Error(N(185));ea(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(rl|=n),ke===4&&gn(e,$e)),nt(e,r),n===1&&X===0&&!(t.mode&1)&&(Lr=ye()+500,Zo&&Fn()))}function nt(e,t){var n=e.callbackNode;x2(e,t);var r=mo(e,e===Ne?$e:0);if(r===0)n!==null&&Uf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uf(n),t===1)e.tag===0?wg(Td.bind(null,e)):q1(Td.bind(null,e)),hg(function(){!(X&6)&&Fn()}),n=null;else{switch(P1(r)){case 1:n=sc;break;case 4:n=E1;break;case 16:n=po;break;case 536870912:n=C1;break;default:n=po}n=Jp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(Za=-1,eo=0,X&6)throw Error(N(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=mo(e,e===Ne?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var i=X;X|=2;var a=Yp();(Ne!==e||$e!==t)&&(Ut=null,Lr=ye()+500,Qn(e,t));do try{Dg();break}catch(l){Wp(e,l)}while(1);Sc(),_o.current=a,X=i,we!==null?t=0:(Ne=null,$e=0,t=ke)}if(t!==0){if(t===2&&(i=Qs(e),i!==0&&(r=i,t=Su(e,i))),t===1)throw n=Hi,Qn(e,0),gn(e,r),nt(e,ye()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mg(i)&&(t=Ro(e,r),t===2&&(a=Qs(e),a!==0&&(r=a,t=Su(e,a))),t===1))throw n=Hi,Qn(e,0),gn(e,r),nt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Un(e,qe,Ut);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=$c+500-ye(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(Un.bind(null,e,qe,Ut),t);break}Un(e,qe,Ut);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jg(r/1960))-r,10<r){e.timeoutHandle=tu(Un.bind(null,e,qe,Ut),r);break}Un(e,qe,Ut);break;case 5:Un(e,qe,Ut);break;default:throw Error(N(329))}}}return nt(e,ye()),e.callbackNode===n?Vp.bind(null,e):null}function Su(e,t){var n=Si;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=qe,qe=n,t!==null&&ku(t)),e}function ku(e){qe===null?qe=e:qe.push.apply(qe,e)}function Mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_t(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Lc,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Td(e){if(X&6)throw Error(N(327));Pr();var t=mo(e,0);if(!(t&1))return nt(e,ye()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=Su(e,r))}if(n===1)throw n=Hi,Qn(e,0),gn(e,t),nt(e,ye()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,qe,Ut),nt(e,ye()),null}function jc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Lr=ye()+500,Zo&&Fn())}}function Zn(e){yn!==null&&yn.tag===0&&!(X&6)&&Pr();var t=X;X|=1;var n=gt.transition,r=te;try{if(gt.transition=null,te=1,e)return e()}finally{te=r,gt.transition=n,X=t,!(X&6)&&Fn()}}function Mc(){it=vr.current,se(vr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mg(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Tr(),se(et),se(He),Pc();break;case 5:zc(r);break;case 4:Tr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:kc(r.type._context);break;case 22:case 23:Mc()}n=n.return}if(Ne=e,we=e=Nn(e.current,null),$e=it=t,ke=0,Hi=null,Lc=rl=qn=0,qe=Si=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Hn=null}return e}function Wp(e,t){do{var n=we;try{if(Sc(),Xa.current=No,Po){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Jn=0,Pe=Se=de=null,wi=!1,Di=0,Ic.current=null,n===null||n.return===null){ke=1,Hi=t,we=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=$e,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=xd(o);if(w!==null){w.flags&=-257,Sd(w,o,l,a,t),w.mode&1&&wd(a,u,t),t=w,s=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(s),t.updateQueue=y}else v.add(s);break e}else{if(!(t&1)){wd(a,u,t),Fc();break e}s=Error(N(426))}}else if(ce&&l.mode&1){var x=xd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sd(x,o,l,a,t),wc(Ir(s,l));break e}}a=s=Ir(s,l),ke!==4&&(ke=2),Si===null?Si=[a]:Si.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Np(a,s,t);dd(a,h);break e;case 1:l=s;var p=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zn===null||!zn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=_p(a,l,t);dd(a,S);break e}}a=a.return}while(a!==null)}Gp(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Yp(){var e=_o.current;return _o.current=No,e===null?No:e}function Fc(){(ke===0||ke===3||ke===2)&&(ke=4),Ne===null||!(qn&268435455)&&!(rl&268435455)||gn(Ne,$e)}function Ro(e,t){var n=X;X|=2;var r=Yp();(Ne!==e||$e!==t)&&(Ut=null,Qn(e,t));do try{Fg();break}catch(i){Wp(e,i)}while(1);if(Sc(),X=n,_o.current=r,we!==null)throw Error(N(261));return Ne=null,$e=0,ke}function Fg(){for(;we!==null;)Qp(we)}function Dg(){for(;we!==null&&!f2();)Qp(we)}function Qp(e){var t=Xp(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Gp(e):we=t,Ic.current=null}function Gp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tg(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=Rg(n,t,it),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function Un(e,t,n){var r=te,i=gt.transition;try{gt.transition=null,te=1,Ug(e,t,n,r)}finally{gt.transition=i,te=r}return null}function Ug(e,t,n,r){do Pr();while(yn!==null);if(X&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(S2(e,a),e===Ne&&(we=Ne=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Jp(po,function(){return Pr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=te;te=1;var l=X;X|=4,Ic.current=null,Lg(e,n),Bp(n,e),lg(Zs),ho=!!qs,Zs=qs=null,e.current=n,$g(n),d2(),X=l,te=o,gt.transition=a}else e.current=n;if(Pa&&(Pa=!1,yn=e,Ao=i),a=e.pendingLanes,a===0&&(zn=null),h2(n.stateNode),nt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oo)throw Oo=!1,e=wu,wu=null,e;return Ao&1&&e.tag!==0&&Pr(),a=e.pendingLanes,a&1?e===xu?ki++:(ki=0,xu=e):ki=0,Fn(),null}function Pr(){if(yn!==null){var e=P1(Ao),t=gt.transition,n=te;try{if(gt.transition=null,te=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Ao=0,X&6)throw Error(N(331));var i=X;for(X|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:xi(8,c,a)}var f=c.child;if(f!==null)f.return=c,j=f;else for(;j!==null;){c=j;var m=c.sibling,w=c.return;if(Fp(c),c===u){j=null;break}if(m!==null){m.return=w,j=m;break}j=w}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:xi(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,j=h;break e}j=a.return}}var p=e.current;for(j=p;j!==null;){o=j;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,j=g;else e:for(o=p;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(C){he(l,l.return,C)}if(l===o){j=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,j=S;break e}j=l.return}}if(X=i,Fn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{te=n,gt.transition=t}}return!1}function Id(e,t,n){t=Ir(n,t),t=Np(e,t,1),e=Cn(e,t,1),t=Qe(),e!==null&&(ea(e,1,t),nt(e,t))}function he(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Ir(n,e),e=_p(t,e,1),t=Cn(t,e,1),e=Qe(),t!==null&&(ea(t,1,e),nt(t,e));break}}t=t.return}}function Bg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&($e&n)===n&&(ke===4||ke===3&&($e&130023424)===$e&&500>ye()-$c?Qn(e,0):Lc|=n),nt(e,t)}function Kp(e,t){t===0&&(e.mode&1?(t=va,va<<=1,!(va&130023424)&&(va=4194304)):t=1);var n=Qe();e=Jt(e,t),e!==null&&(ea(e,t,n),nt(e,n))}function Hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function Vg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Kp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,Ag(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&Z1(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qa(e,t),e=t.pendingProps;var i=Or(t,He.current);zr(t,n),i=_c(null,t,r,e,i,n);var a=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(a=!0,xo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(t),i.updater=el,t.stateNode=i,i._reactInternals=t,su(t,r,e,n),t=fu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&vc(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yg(r),e=bt(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=bd(null,t,r,bt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Ed(e,t,r,i,n);case 3:e:{if(Tp(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,i=a.element,rp(e,t),Co(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ir(Error(N(423)),t),t=Cd(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(N(424)),t),t=Cd(e,t,r,n,i);break e}else for(at=En(t.stateNode.containerInfo.firstChild),ot=t,ce=!0,Ct=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=qt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&au(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,eu(r,i)?o=null:a!==null&&eu(r,a)&&(t.flags|=32),Rp(e,t),Ye(e,t,o,n),t.child;case 6:return e===null&&au(t),null;case 13:return Ip(e,t,n);case 4:return Cc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),kd(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ae(bo,r._currentValue),r._currentValue=o,a!==null)if(_t(a.value,o)){if(a.children===i.children&&!et.current){t=qt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Yt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ou(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ou(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=vt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),bd(e,t,r,i,n);case 15:return Op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),qa(e,t),t.tag=1,tt(r)?(e=!0,xo(t)):e=!1,zr(t,n),ap(t,r,i),su(t,r,i,n),fu(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Ap(e,t,n)}throw Error(N(156,t.tag))};function Jp(e,t){return b1(e,t)}function Wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Wg(e,t,n,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yg(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ac)return 11;if(e===oc)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function to(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Dc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Gn(n.children,i,a,t);case ic:o=8,i|=8;break;case Rs:return e=mt(12,n,t,i|2),e.elementType=Rs,e.lanes=a,e;case Ts:return e=mt(13,n,t,i),e.elementType=Ts,e.lanes=a,e;case Is:return e=mt(19,n,t,i),e.elementType=Is,e.lanes=a,e;case o1:return il(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i1:o=10;break e;case a1:o=9;break e;case ac:o=11;break e;case oc:o=14;break e;case pn:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Gn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=mt(22,e,r,t),e.elementType=o1,e.lanes=n,e.stateNode={isHidden:!1},e}function cs(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function fs(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,a,o,l,s){return e=new Qg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(a),e}function Gg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qp(e){if(!e)return Rn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(tt(n))return J1(e,n,t)}return t}function Zp(e,t,n,r,i,a,o,l,s){return e=Uc(n,r,!0,e,i,a,o,l,s),e.context=qp(null),n=e.current,r=Qe(),i=Pn(n),a=Yt(r,i),a.callback=t??null,Cn(n,a,i),e.current.lanes=i,ea(e,i,r),nt(e,r),e}function al(e,t,n,r){var i=t.current,a=Qe(),o=Pn(i);return n=qp(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(Nt(e,i,o,a),Ka(e,i,o)),o}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function Kg(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ol.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));al(e,t,null,null)};ol.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){al(null,e,null,null)}),t[Xt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=O1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&R1(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Xg(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=To(o);a.call(u)}}var o=Zp(t,r,e,0,null,!1,!1,"",$d);return e._reactRootContainer=o,e[Xt]=o.current,Li(e.nodeType===8?e.parentNode:e),Zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=To(s);l.call(u)}}var s=Uc(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=s,e[Xt]=s.current,Li(e.nodeType===8?e.parentNode:e),Zn(function(){al(t,s,n,r)}),s}function sl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=To(o);l.call(s)}}al(t,o,e,i)}else o=Xg(n,t,e,i,r);return To(o)}N1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(uc(t,n|1),nt(t,ye()),!(X&6)&&(Lr=ye()+500,Fn()))}break;case 13:Zn(function(){var r=Jt(e,1);if(r!==null){var i=Qe();Nt(r,e,1,i)}}),Bc(e,1)}};cc=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Qe();Nt(t,e,134217728,n)}Bc(e,134217728)}};_1=function(e){if(e.tag===13){var t=Pn(e),n=Jt(e,t);if(n!==null){var r=Qe();Nt(n,e,t,r)}Bc(e,t)}};O1=function(){return te};A1=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Vs=function(e,t,n){switch(t){case"input":if(js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qo(r);if(!i)throw Error(N(90));s1(r),js(r,i)}}}break;case"textarea":c1(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};v1=jc;y1=Zn;var Jg={usingClientEntryPoint:!1,Events:[na,fr,qo,h1,g1,jc]},ai={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qg={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=S1(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{Go=Na.inject(qg),jt=Na}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(N(200));return Gg(e,t,null,n)};st.createRoot=function(e,t){if(!Vc(e))throw Error(N(299));var n=!1,r="",i=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Li(e.nodeType===8?e.parentNode:e),new Hc(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=S1(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Zn(e)};st.hydrate=function(e,t,n){if(!ll(t))throw Error(N(200));return sl(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Zp(t,null,e,1,n??null,i,!1,a,o),e[Xt]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};st.render=function(e,t,n){if(!ll(t))throw Error(N(200));return sl(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!ll(e))throw Error(N(40));return e._reactRootContainer?(Zn(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};st.unstable_batchedUpdates=jc;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ll(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return sl(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=st})(Kh);var jd=_s;Ns.createRoot=jd.createRoot,Ns.hydrateRoot=jd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Md="popstate";function Zg(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return bu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Io(i)}return tv(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ev(){return Math.random().toString(36).substr(2,8)}function Fd(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||ev()})}function Io(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function tv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=wn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Vi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){l=wn.Pop;let x=c(),h=x==null?null:x-u;u=x,s&&s({action:l,location:y.location,delta:h})}function m(x,h){l=wn.Push;let p=bu(y.location,x,h);n&&n(p,x),u=c()+1;let g=Fd(p,u),S=y.createHref(p);try{o.pushState(g,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:y.location,delta:1})}function w(x,h){l=wn.Replace;let p=bu(y.location,x,h);n&&n(p,x),u=c();let g=Fd(p,u),S=y.createHref(p);o.replaceState(g,"",S),a&&s&&s({action:l,location:y.location,delta:0})}function v(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Io(x);return be(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Md,f),s=x,()=>{i.removeEventListener(Md,f),s=null}},createHref(x){return t(i,x)},createURL:v,encodeLocation(x){let h=v(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(x){return o.go(x)}};return y}var Dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dd||(Dd={}));function nv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Br(t):t,i=Yc(r.pathname||"/",n);if(i==null)return null;let a=tm(e);rv(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=dv(a[l],hv(i));return o}function tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(be(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=_n([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(be(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tm(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:cv(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of nm(a.path))i(a,o,s)}),t}function nm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=nm(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function rv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iv=/^:\w+$/,av=3,ov=2,lv=1,sv=10,uv=-2,Ud=e=>e==="*";function cv(e,t){let n=e.split("/"),r=n.length;return n.some(Ud)&&(r+=uv),t&&(r+=ov),n.filter(i=>!Ud(i)).reduce((i,a)=>i+(iv.test(a)?av:a===""?lv:sv),r)}function fv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dv(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=pv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;a.push({params:r,pathname:_n([i,c.pathname]),pathnameBase:wv(_n([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=_n([i,c.pathnameBase]))}return a}function pv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=mv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let m=l[f]||"";o=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=gv(l[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function mv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hv(e){try{return decodeURI(e)}catch(t){return Wc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gv(e,t){try{return decodeURIComponent(e)}catch(n){return Wc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Yc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function vv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:yv(n,t):t,search:xv(r),hash:Sv(i)}}function yv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ds(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function im(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Vi({},e),be(!i.pathname||!i.pathname.includes("?"),ds("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),ds("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),ds("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?t[f]:"/"}let s=vv(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),wv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ev=typeof Object.is=="function"?Object.is:bv,{useState:Cv,useEffect:zv,useLayoutEffect:Pv,useDebugValue:Nv}=Ps;function _v(e,t,n){const r=t(),[{inst:i},a]=Cv({inst:{value:r,getSnapshot:t}});return Pv(()=>{i.value=r,i.getSnapshot=t,ps(i)&&a({inst:i})},[e,r,t]),zv(()=>(ps(i)&&a({inst:i}),e(()=>{ps(i)&&a({inst:i})})),[e]),Nv(r),r}function ps(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ev(n,r)}catch{return!0}}function Ov(e,t,n){return t()}const Av=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rv=!Av,Tv=Rv?Ov:_v;"useSyncExternalStore"in Ps&&(e=>e.useSyncExternalStore)(Ps);const am=b.createContext(null),Qc=b.createContext(null),Hr=b.createContext(null),ul=b.createContext(null),Vr=b.createContext({outlet:null,matches:[]}),om=b.createContext(null);function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eu.apply(this,arguments)}function Iv(e,t){let{relative:n}=t===void 0?{}:t;ia()||be(!1);let{basename:r,navigator:i}=b.useContext(Hr),{hash:a,pathname:o,search:l}=Gc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:_n([r,o])),i.createHref({pathname:s,search:l,hash:a})}function ia(){return b.useContext(ul)!=null}function Wr(){return ia()||be(!1),b.useContext(ul).location}function Yr(){ia()||be(!1);let{basename:e,navigator:t}=b.useContext(Hr),{matches:n}=b.useContext(Vr),{pathname:r}=Wr(),i=JSON.stringify(rm(n).map(l=>l.pathnameBase)),a=b.useRef(!1);return b.useEffect(()=>{a.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=im(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:_n([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function Gc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Vr),{pathname:i}=Wr(),a=JSON.stringify(rm(r).map(o=>o.pathnameBase));return b.useMemo(()=>im(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Lv(e,t){ia()||be(!1);let{navigator:n}=b.useContext(Hr),r=b.useContext(Qc),{matches:i}=b.useContext(Vr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Wr(),u;if(t){var c;let y=typeof t=="string"?Br(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||be(!1),u=y}else u=s;let f=u.pathname||"/",m=l==="/"?f:f.slice(l.length)||"/",w=nv(e,{pathname:m}),v=Fv(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:_n([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:_n([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&v?b.createElement(ul.Provider,{value:{location:Eu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wn.Pop}},v):v}function $v(){let e=Hv(),t=kv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}class jv extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Vr.Provider,{value:this.props.routeContext},b.createElement(om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mv(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(am);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Vr.Provider,{value:t},r)}function Fv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||be(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement($v,null));let c=t.concat(r.slice(0,l+1)),f=()=>{let m=a;return s?m=u:o.route.Component?m=b.createElement(o.route.Component,null):o.route.element&&(m=o.route.element),b.createElement(Mv,{match:o,routeContext:{outlet:a,matches:c},children:m})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?b.createElement(jv,{location:n.location,component:u,error:s,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Bd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Bd||(Bd={}));var Lo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Lo||(Lo={}));function Dv(e){let t=b.useContext(Qc);return t||be(!1),t}function Uv(e){let t=b.useContext(Vr);return t||be(!1),t}function Bv(e){let t=Uv(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function Hv(){var e;let t=b.useContext(om),n=Dv(Lo.UseRouteError),r=Bv(Lo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function At(e){be(!1)}function Vv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:a,static:o=!1}=e;ia()&&be(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:w="default"}=r,v=b.useMemo(()=>{let y=Yc(u,l);return y==null?null:{location:{pathname:y,search:c,hash:f,state:m,key:w},navigationType:i}},[l,u,c,f,m,w,i]);return v==null?null:b.createElement(Hr.Provider,{value:s},b.createElement(ul.Provider,{children:n,value:v}))}function Wv(e){let{children:t,location:n}=e,r=b.useContext(am),i=r&&!t?r.router.routes:Cu(t);return Lv(i,n)}var Hd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Hd||(Hd={}));new Promise(()=>{});function Cu(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,Cu(r.props.children,t));return}r.type!==At&&be(!1),!r.props.index||!r.props.children||be(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}function lm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Yv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qv(e,t){return e.button===0&&(!t||t==="_self")&&!Yv(e)}const Gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Kv=["aria-current","caseSensitive","className","end","style","to","children"];function Xv(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=Zg({window:r,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location});return b.useLayoutEffect(()=>a.listen(l),[a]),b.createElement(Vv,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kc=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,f=lm(t,Gv),{basename:m}=b.useContext(Hr),w,v=!1;if(typeof u=="string"&&qv.test(u)&&(w=u,Jv)){let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Yc(g.pathname,m);g.origin===p.origin&&S!=null?u=S+g.search+g.hash:v=!0}let y=Iv(u,{relative:i}),x=Zv(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function h(p){r&&r(p),p.defaultPrevented||x(p)}return b.createElement("a",$o({},f,{href:w||y,onClick:v||a?r:h,ref:n,target:s}))}),un=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=lm(t,Kv),f=Gc(s,{relative:c.relative}),m=Wr(),w=b.useContext(Qc),{navigator:v}=b.useContext(Hr),y=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,x=m.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(x=x.toLowerCase(),h=h?h.toLowerCase():null,y=y.toLowerCase());let p=x===y||!o&&x.startsWith(y)&&x.charAt(y.length)==="/",g=h!=null&&(h===y||!o&&h.startsWith(y)&&h.charAt(y.length)==="/"),S=p?r:void 0,C;typeof a=="function"?C=a({isActive:p,isPending:g}):C=[a,p?"active":null,g?"pending":null].filter(Boolean).join(" ");let O=typeof l=="function"?l({isActive:p,isPending:g}):l;return b.createElement(Kc,$o({},c,{"aria-current":S,className:C,ref:n,style:O,to:s}),typeof u=="function"?u({isActive:p,isPending:g}):u)});var Vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Vd||(Vd={}));var Wd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wd||(Wd={}));function Zv(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=Yr(),s=Wr(),u=Gc(e,{relative:o});return b.useCallback(c=>{if(Qv(c,n)){c.preventDefault();let f=r!==void 0?r:Io(s)===Io(u);l(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var jo={},ey={get exports(){return jo},set exports(e){jo=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=Symbol.for("react.element"),Jc=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),pl=Symbol.for("react.provider"),ml=Symbol.for("react.context"),ty=Symbol.for("react.server_context"),hl=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),sm;sm=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xc:switch(e=e.type,e){case cl:case dl:case fl:case gl:case vl:return e;default:switch(e=e&&e.$$typeof,e){case ty:case ml:case hl:case wl:case yl:case pl:return e;default:return t}}case Jc:return t}}}ne.ContextConsumer=ml;ne.ContextProvider=pl;ne.Element=Xc;ne.ForwardRef=hl;ne.Fragment=cl;ne.Lazy=wl;ne.Memo=yl;ne.Portal=Jc;ne.Profiler=dl;ne.StrictMode=fl;ne.Suspense=gl;ne.SuspenseList=vl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return wt(e)===ml};ne.isContextProvider=function(e){return wt(e)===pl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xc};ne.isForwardRef=function(e){return wt(e)===hl};ne.isFragment=function(e){return wt(e)===cl};ne.isLazy=function(e){return wt(e)===wl};ne.isMemo=function(e){return wt(e)===yl};ne.isPortal=function(e){return wt(e)===Jc};ne.isProfiler=function(e){return wt(e)===dl};ne.isStrictMode=function(e){return wt(e)===fl};ne.isSuspense=function(e){return wt(e)===gl};ne.isSuspenseList=function(e){return wt(e)===vl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===dl||e===fl||e===gl||e===vl||e===ny||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===yl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===sm||e.getModuleId!==void 0)};ne.typeOf=wt;(function(e){e.exports=ne})(ey);function ry(e){function t(T,I,$,B,k){for(var G=0,R=0,me=0,q=0,ee,W,Ae=0,Xe=0,J,Fe=J=ee=0,Z=0,Re=0,Xr=0,Te=0,fa=$.length,Jr=fa-1,xt,H="",ve="",Ml="",Fl="",ln;Z<fa;){if(W=$.charCodeAt(Z),Z===Jr&&R+q+me+G!==0&&(R!==0&&(W=R===47?10:47),q=me=G=0,fa++,Jr++),R+q+me+G===0){if(Z===Jr&&(0<Re&&(H=H.replace(m,"")),0<H.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:H+=$.charAt(Z)}W=59}switch(W){case 123:for(H=H.trim(),ee=H.charCodeAt(0),J=1,Te=++Z;Z<fa;){switch(W=$.charCodeAt(Z)){case 123:J++;break;case 125:J--;break;case 47:switch(W=$.charCodeAt(Z+1)){case 42:case 47:e:{for(Fe=Z+1;Fe<Jr;++Fe)switch($.charCodeAt(Fe)){case 47:if(W===42&&$.charCodeAt(Fe-1)===42&&Z+2!==Fe){Z=Fe+1;break e}break;case 10:if(W===47){Z=Fe+1;break e}}Z=Fe}}break;case 91:W++;case 40:W++;case 34:case 39:for(;Z++<Jr&&$.charCodeAt(Z)!==W;);}if(J===0)break;Z++}switch(J=$.substring(Te,Z),ee===0&&(ee=(H=H.replace(f,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Re&&(H=H.replace(m,"")),W=H.charCodeAt(1),W){case 100:case 109:case 115:case 45:Re=I;break;default:Re=Ft}if(J=t(I,Re,J,W,k+1),Te=J.length,0<A&&(Re=n(Ft,H,Xr),ln=l(3,J,Re,I,Oe,xe,Te,W,k,B),H=Re.join(""),ln!==void 0&&(Te=(J=ln.trim()).length)===0&&(W=0,J="")),0<Te)switch(W){case 115:H=H.replace(O,o);case 100:case 109:case 45:J=H+"{"+J+"}";break;case 107:H=H.replace(p,"$1 $2"),J=H+"{"+J+"}",J=Me===1||Me===2&&a("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=H+J,B===112&&(J=(ve+=J,""))}else J="";break;default:J=t(I,n(I,H,Xr),J,B,k+1)}Ml+=J,J=Xr=Re=Fe=ee=0,H="",W=$.charCodeAt(++Z);break;case 125:case 59:if(H=(0<Re?H.replace(m,""):H).trim(),1<(Te=H.length))switch(Fe===0&&(ee=H.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Te=(H=H.replace(" ",":")).length),0<A&&(ln=l(1,H,I,T,Oe,xe,ve.length,B,k,B))!==void 0&&(Te=(H=ln.trim()).length)===0&&(H="\0\0"),ee=H.charCodeAt(0),W=H.charCodeAt(1),ee){case 0:break;case 64:if(W===105||W===99){Fl+=H+$.charAt(Z);break}default:H.charCodeAt(Te-1)!==58&&(ve+=i(H,ee,W,H.charCodeAt(2)))}Xr=Re=Fe=ee=0,H="",W=$.charCodeAt(++Z)}}switch(W){case 13:case 10:R===47?R=0:1+ee===0&&B!==107&&0<H.length&&(Re=1,H+="\0"),0<A*U&&l(0,H,I,T,Oe,xe,ve.length,B,k,B),xe=1,Oe++;break;case 59:case 125:if(R+q+me+G===0){xe++;break}default:switch(xe++,xt=$.charAt(Z),W){case 9:case 32:if(q+G+R===0)switch(Ae){case 44:case 58:case 9:case 32:xt="";break;default:W!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:q+R+G===0&&(Re=Xr=1,xt="\f"+xt);break;case 108:if(q+R+G+rt===0&&0<Fe)switch(Z-Fe){case 2:Ae===112&&$.charCodeAt(Z-3)===58&&(rt=Ae);case 8:Xe===111&&(rt=Xe)}break;case 58:q+R+G===0&&(Fe=Z);break;case 44:R+me+q+G===0&&(Re=1,xt+="\r");break;case 34:case 39:R===0&&(q=q===W?0:q===0?W:q);break;case 91:q+R+me===0&&G++;break;case 93:q+R+me===0&&G--;break;case 41:q+R+G===0&&me--;break;case 40:if(q+R+G===0){if(ee===0)switch(2*Ae+3*Xe){case 533:break;default:ee=1}me++}break;case 64:R+me+q+G+Fe+J===0&&(J=1);break;case 42:case 47:if(!(0<q+G+me))switch(R){case 0:switch(2*W+3*$.charCodeAt(Z+1)){case 235:R=47;break;case 220:Te=Z,R=42}break;case 42:W===47&&Ae===42&&Te+2!==Z&&($.charCodeAt(Te+2)===33&&(ve+=$.substring(Te,Z+1)),xt="",R=0)}}R===0&&(H+=xt)}Xe=Ae,Ae=W,Z++}if(Te=ve.length,0<Te){if(Re=I,0<A&&(ln=l(2,ve,Re,T,Oe,xe,Te,B,k,B),ln!==void 0&&(ve=ln).length===0))return Fl+ve+Ml;if(ve=Re.join(",")+"{"+ve+"}",Me*rt!==0){switch(Me!==2||a(ve,2)||(rt=0),rt){case 111:ve=ve.replace(S,":-moz-$1")+ve;break;case 112:ve=ve.replace(g,"::-webkit-input-$1")+ve.replace(g,"::-moz-$1")+ve.replace(g,":-ms-input-$1")+ve}rt=0}}return Fl+ve+Ml}function n(T,I,$){var B=I.trim().split(x);I=B;var k=B.length,G=T.length;switch(G){case 0:case 1:var R=0;for(T=G===0?"":T[0]+" ";R<k;++R)I[R]=r(T,I[R],$).trim();break;default:var me=R=0;for(I=[];R<k;++R)for(var q=0;q<G;++q)I[me++]=r(T[q]+" ",B[R],$).trim()}return I}function r(T,I,$){var B=I.charCodeAt(0);switch(33>B&&(B=(I=I.trim()).charCodeAt(0)),B){case 38:return I.replace(h,"$1"+T.trim());case 58:return T.trim()+I.replace(h,"$1"+T.trim());default:if(0<1*$&&0<I.indexOf("\f"))return I.replace(h,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+I}function i(T,I,$,B){var k=T+";",G=2*I+3*$+4*B;if(G===944){T=k.indexOf(":",9)+1;var R=k.substring(T,k.length-1).trim();return R=k.substring(0,T).trim()+R+";",Me===1||Me===2&&a(R,1)?"-webkit-"+R+R:R}if(Me===0||Me===2&&!a(k,1))return k;switch(G){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ze,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return R=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+k+"-ms-flex-pack"+R+k;case 1005:return v.test(k)?k.replace(w,":-webkit-")+k.replace(w,":-moz-")+k:k;case 1e3:switch(R=k.substring(13).trim(),I=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(I)){case 226:R=k.replace(C,"tb");break;case 232:R=k.replace(C,"tb-rl");break;case 220:R=k.replace(C,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+R+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(I=(k=T).length-10,R=(k.charCodeAt(I)===33?k.substring(0,I):k).substring(T.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:k=k.replace(R,"-webkit-"+R)+";"+k;break;case 207:case 102:k=k.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+k.replace(R,"-webkit-"+R)+";"+k.replace(R,"-ms-"+R+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return R=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+R+"-ms-flex-"+R+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(_,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(_,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(D.test(T)===!0)return(R=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),I,$,B).replace(":fill-available",":stretch"):k.replace(R,"-webkit-"+R)+k.replace(R,"-moz-"+R.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,$+B===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+k}return k}function a(T,I){var $=T.indexOf(I===1?":":"{"),B=T.substring(0,I!==3?$:10);return $=T.substring($+1,T.length-1),F(I!==2?B:B.replace(V,"$1"),$,I)}function o(T,I){var $=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return $!==I+";"?$.replace(P," or ($1)").substring(4):"("+I+")"}function l(T,I,$,B,k,G,R,me,q,ee){for(var W=0,Ae=I,Xe;W<A;++W)switch(Xe=We[W].call(c,T,Ae,$,B,k,G,R,me,q,ee)){case void 0:case!1:case!0:case null:break;default:Ae=Xe}if(Ae!==I)return Ae}function s(T){switch(T){case void 0:case null:A=We.length=0;break;default:if(typeof T=="function")We[A++]=T;else if(typeof T=="object")for(var I=0,$=T.length;I<$;++I)s(T[I]);else U=!!T|0}return s}function u(T){return T=T.prefix,T!==void 0&&(F=null,T?typeof T!="function"?Me=1:(Me=2,F=T):Me=0),u}function c(T,I){var $=T;if(33>$.charCodeAt(0)&&($=$.trim()),ie=$,$=[ie],0<A){var B=l(-1,I,$,$,Oe,xe,0,0,0,0);B!==void 0&&typeof B=="string"&&(I=B)}var k=t(Ft,$,I,0,0);return 0<A&&(B=l(-2,k,$,$,Oe,xe,k.length,0,0,0),B!==void 0&&(k=B)),ie="",rt=0,xe=Oe=1,k}var f=/^\0+/g,m=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,x=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,_=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,ze=/([^-])(image-set\()/,xe=1,Oe=1,rt=0,Me=1,Ft=[],We=[],A=0,F=null,U=0,ie="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var iy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ay(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var oy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yd=ay(function(e){return oy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zu={},ly={get exports(){return zu},set exports(e){zu=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,qc=_e?Symbol.for("react.element"):60103,Zc=_e?Symbol.for("react.portal"):60106,xl=_e?Symbol.for("react.fragment"):60107,Sl=_e?Symbol.for("react.strict_mode"):60108,kl=_e?Symbol.for("react.profiler"):60114,bl=_e?Symbol.for("react.provider"):60109,El=_e?Symbol.for("react.context"):60110,ef=_e?Symbol.for("react.async_mode"):60111,Cl=_e?Symbol.for("react.concurrent_mode"):60111,zl=_e?Symbol.for("react.forward_ref"):60112,Pl=_e?Symbol.for("react.suspense"):60113,sy=_e?Symbol.for("react.suspense_list"):60120,Nl=_e?Symbol.for("react.memo"):60115,_l=_e?Symbol.for("react.lazy"):60116,uy=_e?Symbol.for("react.block"):60121,cy=_e?Symbol.for("react.fundamental"):60117,fy=_e?Symbol.for("react.responder"):60118,dy=_e?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qc:switch(e=e.type,e){case ef:case Cl:case xl:case kl:case Sl:case Pl:return e;default:switch(e=e&&e.$$typeof,e){case El:case zl:case _l:case Nl:case bl:return e;default:return t}}case Zc:return t}}}function um(e){return ct(e)===Cl}re.AsyncMode=ef;re.ConcurrentMode=Cl;re.ContextConsumer=El;re.ContextProvider=bl;re.Element=qc;re.ForwardRef=zl;re.Fragment=xl;re.Lazy=_l;re.Memo=Nl;re.Portal=Zc;re.Profiler=kl;re.StrictMode=Sl;re.Suspense=Pl;re.isAsyncMode=function(e){return um(e)||ct(e)===ef};re.isConcurrentMode=um;re.isContextConsumer=function(e){return ct(e)===El};re.isContextProvider=function(e){return ct(e)===bl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc};re.isForwardRef=function(e){return ct(e)===zl};re.isFragment=function(e){return ct(e)===xl};re.isLazy=function(e){return ct(e)===_l};re.isMemo=function(e){return ct(e)===Nl};re.isPortal=function(e){return ct(e)===Zc};re.isProfiler=function(e){return ct(e)===kl};re.isStrictMode=function(e){return ct(e)===Sl};re.isSuspense=function(e){return ct(e)===Pl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xl||e===Cl||e===kl||e===Sl||e===Pl||e===sy||typeof e=="object"&&e!==null&&(e.$$typeof===_l||e.$$typeof===Nl||e.$$typeof===bl||e.$$typeof===El||e.$$typeof===zl||e.$$typeof===cy||e.$$typeof===fy||e.$$typeof===dy||e.$$typeof===uy)};re.typeOf=ct;(function(e){e.exports=re})(ly);var tf=zu,py={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},my={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nf={};nf[tf.ForwardRef]=hy;nf[tf.Memo]=cm;function Qd(e){return tf.isMemo(e)?cm:nf[e.$$typeof]||py}var gy=Object.defineProperty,vy=Object.getOwnPropertyNames,Gd=Object.getOwnPropertySymbols,yy=Object.getOwnPropertyDescriptor,wy=Object.getPrototypeOf,Kd=Object.prototype;function fm(e,t,n){if(typeof t!="string"){if(Kd){var r=wy(t);r&&r!==Kd&&fm(e,r,n)}var i=vy(t);Gd&&(i=i.concat(Gd(t)));for(var a=Qd(e),o=Qd(t),l=0;l<i.length;++l){var s=i[l];if(!my[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=yy(t,s);try{gy(e,s,u)}catch{}}}}return e}var xy=fm;function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Xd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Pu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!jo.typeOf(e)},Mo=Object.freeze([]),On=Object.freeze({});function Wi(e){return typeof e=="function"}function Jd(e){return e.displayName||e.name||"Component"}function rf(e){return e&&typeof e.styledComponentId=="string"}var $r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",af=typeof window<"u"&&"HTMLElement"in window,Sy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),ky={};function aa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var by=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&aa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),no=new Map,Fo=new Map,bi=1,_a=function(e){if(no.has(e))return no.get(e);for(;Fo.has(bi);)bi++;var t=bi++;return no.set(e,t),Fo.set(t,e),t},Ey=function(e){return Fo.get(e)},Cy=function(e,t){t>=bi&&(bi=t+1),no.set(e,t),Fo.set(t,e)},zy="style["+$r+'][data-styled-version="5.3.9"]',Py=new RegExp("^"+$r+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ny=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},_y=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(Py);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Cy(u,s),Ny(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},Oy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},dm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute($r))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Oy();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Ay=function(){function e(n){var r=this.element=dm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}aa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ry=function(){function e(n){var r=this.element=dm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ty=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),qd=af,Iy={isServer:!af,useCSSOMInjection:!Sy},Do=function(){function e(n,r,i){n===void 0&&(n=On),r===void 0&&(r={}),this.options=It({},Iy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&af&&qd&&(qd=!1,function(a){for(var o=document.querySelectorAll(zy),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute($r)!=="active"&&(_y(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return _a(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(It({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new Ty(o):a?new Ay(o):new Ry(o),new by(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(_a(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(_a(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(_a(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=Ey(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=$r+".g"+o+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(m){m.length>0&&(f+=m+",")}),a+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return a}(this)},e}(),Ly=/(a)(d)/gi,Zd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zd(t%52)+n;return(Zd(t%52)+n).replace(Ly,"$1-$2")}var yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pm=function(e){return yr(5381,e)};function mm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wi(n)&&!rf(n))return!1}return!0}var $y=pm("5.3.9"),jy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mm(t),this.componentId=n,this.baseHash=yr($y,n),this.baseStyle=r,Do.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=er(this.rules,t,n,r).join(""),l=Nu(yr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=yr(this.baseHash,r.hash),f="",m=0;m<u;m++){var w=this.rules[m];if(typeof w=="string")f+=w;else if(w){var v=er(w,t,n,r),y=Array.isArray(v)?v.join(""):v;c=yr(c,y+m),f+=y}}if(f){var x=Nu(c>>>0);if(!n.hasNameForId(i,x)){var h=r(f,"."+x,void 0,i);n.insertRules(i,x,h)}a.push(x)}}return a.join(" ")},e}(),My=/^\s*\/\/.*$/gm,Fy=[":","[",".","#"];function Dy(e){var t,n,r,i,a=e===void 0?On:e,o=a.options,l=o===void 0?On:o,s=a.plugins,u=s===void 0?Mo:s,c=new ry(l),f=[],m=function(y){function x(h){if(h)try{y(h+"}")}catch{}}return function(h,p,g,S,C,O,P,_,V,D){switch(h){case 1:if(V===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(_===0)return p+"/*|*/";break;case 3:switch(_){case 102:case 112:return y(g[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(y){f.push(y)}),w=function(y,x,h){return x===0&&Fy.indexOf(h[n.length])!==-1||h.match(i)?y:"."+t};function v(y,x,h,p){p===void 0&&(p="&");var g=y.replace(My,""),S=x&&h?h+" "+x+" { "+g+" }":g;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(h||!x?"":x,S)}return c.use([].concat(u,[function(y,x,h){y===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,w))},m,function(y){if(y===-2){var x=f;return f=[],x}}])),v.hash=u.length?u.reduce(function(y,x){return x.name||aa(15),yr(y,x.name)},5381).toString():"",v}var hm=nn.createContext();hm.Consumer;var gm=nn.createContext(),Uy=(gm.Consumer,new Do),_u=Dy();function vm(){return b.useContext(hm)||Uy}function ym(){return b.useContext(gm)||_u}var By=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=_u);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return aa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_u),this.name+t.hash},e}(),Hy=/([A-Z])/,Vy=/([A-Z])/g,Wy=/^ms-/,Yy=function(e){return"-"+e.toLowerCase()};function e0(e){return Hy.test(e)?e.replace(Vy,Yy).replace(Wy,"-ms-"):e}var t0=function(e){return e==null||e===!1||e===""};function er(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=er(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(t0(e))return"";if(rf(e))return"."+e.styledComponentId;if(Wi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return er(s,t,n,r)}var u;return e instanceof By?n?(e.inject(n,r),e.getName(r)):e:Pu(e)?function c(f,m){var w,v,y=[];for(var x in f)f.hasOwnProperty(x)&&!t0(f[x])&&(Array.isArray(f[x])&&f[x].isCss||Wi(f[x])?y.push(e0(x)+":",f[x],";"):Pu(f[x])?y.push.apply(y,c(f[x],x)):y.push(e0(x)+": "+(w=x,(v=f[x])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in iy?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(y,["}"]):y}(e):e.toString()}var n0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function wm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Wi(e)||Pu(e)?n0(er(Xd(Mo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:n0(er(Xd(e,n)))}var xm=function(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme},Qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gy=/(^-|-$)/g;function ms(e){return e.replace(Qy,"-").replace(Gy,"")}var Sm=function(e){return Nu(pm(e)>>>0)};function Oa(e){return typeof e=="string"&&!0}var Ou=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ky=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Xy(e,t,n){var r=e[n];Ou(t)&&Ou(r)?km(r,t):e[n]=t}function km(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Ou(o))for(var l in o)Ky(l)&&Xy(e,o[l],l)}return e}var of=nn.createContext();of.Consumer;var hs={};function bm(e,t,n){var r=rf(e),i=!Oa(e),a=t.attrs,o=a===void 0?Mo:a,l=t.componentId,s=l===void 0?function(p,g){var S=typeof p!="string"?"sc":ms(p);hs[S]=(hs[S]||0)+1;var C=S+"-"+Sm("5.3.9"+S+hs[S]);return g?g+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return Oa(p)?"styled."+p:"Styled("+Jd(p)+")"}(e):u,f=t.displayName&&t.componentId?ms(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,g,S){return e.shouldForwardProp(p,g,S)&&t.shouldForwardProp(p,g,S)}:e.shouldForwardProp);var v,y=new jy(n,f,r?e.componentStyle:void 0),x=y.isStatic&&o.length===0,h=function(p,g){return function(S,C,O,P){var _=S.attrs,V=S.componentStyle,D=S.defaultProps,ze=S.foldedComponentIds,xe=S.shouldForwardProp,Oe=S.styledComponentId,rt=S.target,Me=function(B,k,G){B===void 0&&(B=On);var R=It({},k,{theme:B}),me={};return G.forEach(function(q){var ee,W,Ae,Xe=q;for(ee in Wi(Xe)&&(Xe=Xe(R)),Xe)R[ee]=me[ee]=ee==="className"?(W=me[ee],Ae=Xe[ee],W&&Ae?W+" "+Ae:W||Ae):Xe[ee]}),[R,me]}(xm(C,b.useContext(of),D)||On,C,_),Ft=Me[0],We=Me[1],A=function(B,k,G,R){var me=vm(),q=ym(),ee=k?B.generateAndInjectStyles(On,me,q):B.generateAndInjectStyles(G,me,q);return ee}(V,P,Ft),F=O,U=We.$as||C.$as||We.as||C.as||rt,ie=Oa(U),T=We!==C?It({},C,{},We):C,I={};for(var $ in T)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?I.as=T[$]:(xe?xe($,Yd,U):!ie||Yd($))&&(I[$]=T[$]));return C.style&&We.style!==C.style&&(I.style=It({},C.style,{},We.style)),I.className=Array.prototype.concat(ze,Oe,A!==Oe?A:null,C.className,We.className).filter(Boolean).join(" "),I.ref=F,b.createElement(U,I)}(v,p,g,x)};return h.displayName=c,(v=nn.forwardRef(h)).attrs=m,v.componentStyle=y,v.displayName=c,v.shouldForwardProp=w,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Mo,v.styledComponentId=f,v.target=r?e.target:e,v.withComponent=function(p){var g=t.componentId,S=function(O,P){if(O==null)return{};var _,V,D={},ze=Object.keys(O);for(V=0;V<ze.length;V++)_=ze[V],P.indexOf(_)>=0||(D[_]=O[_]);return D}(t,["componentId"]),C=g&&g+"-"+(Oa(p)?p:ms(Jd(p)));return bm(p,It({},S,{attrs:m,componentId:C}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?km({},e.defaultProps,p):p}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&xy(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Au=function(e){return function t(n,r,i){if(i===void 0&&(i=On),!jo.isValidElementType(r))return aa(1,String(r));var a=function(){return n(r,i,wm.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,It({},i,{},o))},a.attrs=function(o){return t(n,r,It({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(bm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Au[e]=Au(e)});var Jy=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=mm(n),Do.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(er(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&Do.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function qy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=wm.apply(void 0,[e].concat(n)),a="sc-global-"+Sm(JSON.stringify(i)),o=new Jy(i,a);function l(u){var c=vm(),f=ym(),m=b.useContext(of),w=b.useRef(c.allocateGSInstance(a)).current;return c.server&&s(w,u,c,m,f),b.useLayoutEffect(function(){if(!c.server)return s(w,u,c,m,f),function(){return o.removeStyles(w,c)}},[w,u,c,m,f]),null}function s(u,c,f,m,w){if(o.isStatic)o.renderStyles(u,ky,f,w);else{var v=It({},c,{theme:xm(c,m,l.defaultProps)});o.renderStyles(u,v,f,w)}}return nn.memo(l)}const Ve=Au,cn={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},Je={mobileS:`(min-width: ${cn.mobileS})`,mobileM:`(min-width: ${cn.mobileM})`,mobileL:`(min-width: ${cn.mobileL})`,tablet:`(min-width: ${cn.tablet})`,laptop:`(min-width: ${cn.laptop})`,laptopL:`(min-width: ${cn.laptopL})`,desktop:`(min-width: ${cn.desktop})`,desktopL:`(min-width: ${cn.desktopL})`},Zy=Ve.nav`

font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 1.5rem;
display: flex;
justify-content: space-around;
align-items: top;
margin-top: 10px;

img {
  height: auto;
  width: auto;
}

.logo {
  padding: .3em
  height: 80px;
  width: 80px;
}

a {
  color: #90ac14;
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
  padding: .5em;
  border-radius: 50%;
}

@media ${Je.mobileS} { 
  min-width: 200px;
  font-size: .9rem;
  .logo {
    height: 50px;
    width: 54px;
  }
}

@media ${Je.mobileM} { 
  min-width: 320px;
  font-size: .9rem;
  .logo {
    height: 50px;
    width: 54px;
  }
}

@media ${Je.mobileL} { 
  min-width: 375px;
  font-size: 1rem;
  .logo {
    height: 50px;
    width: 100px;
  }
}

@media ${Je.tablet} { 
  min-width: 425px;
  
}

@media ${Je.laptop} { 
  min-width: 768px;
  font-size: 1.8rem;
  .logo {
    height: 100px;
    width: 150px;
  }
}

@media ${Je.desktop} {
  min-width: 1441px;
  font-size: 3rem;
  .logo {
    height: 140px;
    width: 160px;
  }
}

@media ${Je.desktopL} {
  min-width: 2560px;
  font-size: 4rem;
  .logo {
    height: 280px;
    width: 400px;
  }
}

`,e4="/assets/PantryPalAvo-64f88421.png";/*! js-cookie v3.0.1 | MIT */function Aa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t4={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Ru(e,t){function n(i,a,o){if(!(typeof document>"u")){o=Aa({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",Aa({},a,{expires:-1}))},withAttributes:function(i){return Ru(this.converter,Aa({},this.attributes,i))},withConverter:function(i){return Ru(Aa({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Uo=Ru(t4,{path:"/"});function r0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?r0(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bo(e){return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}function n4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r4(e,t,n){return t&&i0(e.prototype,t),n&&i0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lf(e,t){return a4(e)||l4(e,t)||Em(e,t)||u4()}function oa(e){return i4(e)||o4(e)||Em(e)||s4()}function i4(e){if(Array.isArray(e))return Tu(e)}function a4(e){if(Array.isArray(e))return e}function o4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function l4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Em(e,t){if(e){if(typeof e=="string")return Tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tu(e,t)}}function Tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a0=function(){},sf={},Cm={},zm=null,Pm={mark:a0,measure:a0};try{typeof window<"u"&&(sf=window),typeof document<"u"&&(Cm=document),typeof MutationObserver<"u"&&(zm=MutationObserver),typeof performance<"u"&&(Pm=performance)}catch{}var c4=sf.navigator||{},o0=c4.userAgent,l0=o0===void 0?"":o0,Tn=sf,ue=Cm,s0=zm,Ra=Pm;Tn.document;var an=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",Nm=~l0.indexOf("MSIE")||~l0.indexOf("Trident/"),Ta,Ia,La,$a,ja,Zt="___FONT_AWESOME___",Iu=16,_m="fa",Om="svg-inline--fa",tr="data-fa-i2svg",Lu="data-fa-pseudo-element",f4="data-fa-pseudo-element-pending",uf="data-prefix",cf="data-icon",u0="fontawesome-i2svg",d4="async",p4=["HTML","HEAD","STYLE","SCRIPT"],Am=function(){try{return!0}catch{return!1}}(),le="classic",ge="sharp",ff=[le,ge];function la(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Yi=la((Ta={},Ee(Ta,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(Ta,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Ta)),Qi=la((Ia={},Ee(Ia,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(Ia,ge,{solid:"fass",regular:"fasr"}),Ia)),Gi=la((La={},Ee(La,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(La,ge,{fass:"fa-solid",fasr:"fa-regular"}),La)),m4=la(($a={},Ee($a,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee($a,ge,{"fa-solid":"fass","fa-regular":"fasr"}),$a)),h4=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Rm="fa-layers-text",g4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,v4=la((ja={},Ee(ja,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(ja,ge,{900:"fass",400:"fasr"}),ja)),Tm=[1,2,3,4,5,6,7,8,9,10],y4=Tm.concat([11,12,13,14,15,16,17,18,19,20]),w4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ki=new Set;Object.keys(Qi[le]).map(Ki.add.bind(Ki));Object.keys(Qi[ge]).map(Ki.add.bind(Ki));var x4=[].concat(ff,oa(Ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wn.GROUP,Wn.SWAP_OPACITY,Wn.PRIMARY,Wn.SECONDARY]).concat(Tm.map(function(e){return"".concat(e,"x")})).concat(y4.map(function(e){return"w-".concat(e)})),Ei=Tn.FontAwesomeConfig||{};function S4(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function k4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var b4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];b4.forEach(function(e){var t=lf(e,2),n=t[0],r=t[1],i=k4(S4(n));i!=null&&(Ei[r]=i)})}var Im={styleDefault:"solid",familyDefault:"classic",cssPrefix:_m,replacementClass:Om,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ei.familyPrefix&&(Ei.cssPrefix=Ei.familyPrefix);var jr=L(L({},Im),Ei);jr.autoReplaceSvg||(jr.observeMutations=!1);var M={};Object.keys(Im).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){jr[e]=n,Ci.forEach(function(r){return r(M)})},get:function(){return jr[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){jr.cssPrefix=t,Ci.forEach(function(n){return n(M)})},get:function(){return jr.cssPrefix}});Tn.FontAwesomeConfig=M;var Ci=[];function E4(e){return Ci.push(e),function(){Ci.splice(Ci.indexOf(e),1)}}var fn=Iu,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function C4(e){if(!(!e||!an)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var z4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xi(){for(var e=12,t="";e-- >0;)t+=z4[Math.random()*62|0];return t}function Qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function df(e){return e.classList?Qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Lm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P4(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Lm(e[n]),'" ')},"").trim()}function Ol(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pf(e){return e.size!==Lt.size||e.x!==Lt.x||e.y!==Lt.y||e.rotate!==Lt.rotate||e.flipX||e.flipY}function N4(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function _4(e){var t=e.transform,n=e.width,r=n===void 0?Iu:n,i=e.height,a=i===void 0?Iu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Nm?s+="translate(".concat(t.x/fn-r/2,"em, ").concat(t.y/fn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/fn,"em), calc(-50% + ").concat(t.y/fn,"em)) "):s+="translate(".concat(t.x/fn,"em, ").concat(t.y/fn,"em) "),s+="scale(".concat(t.size/fn*(t.flipX?-1:1),", ").concat(t.size/fn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var O4=`:root, :host {
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
}`;function $m(){var e=_m,t=Om,n=M.cssPrefix,r=M.replacementClass,i=O4;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var c0=!1;function gs(){M.autoAddCss&&!c0&&(C4($m()),c0=!0)}var A4={mixout:function(){return{dom:{css:$m,insertCss:gs}}},hooks:function(){return{beforeDOMElementCreation:function(){gs()},beforeI2svg:function(){gs()}}}},en=Tn||{};en[Zt]||(en[Zt]={});en[Zt].styles||(en[Zt].styles={});en[Zt].hooks||(en[Zt].hooks={});en[Zt].shims||(en[Zt].shims=[]);var zt=en[Zt],jm=[],R4=function e(){ue.removeEventListener("DOMContentLoaded",e),Ho=1,jm.map(function(t){return t()})},Ho=!1;an&&(Ho=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Ho||ue.addEventListener("DOMContentLoaded",R4));function T4(e){an&&(Ho?setTimeout(e,0):jm.push(e))}function sa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Lm(e):"<".concat(t," ").concat(P4(r),">").concat(a.map(sa).join(""),"</").concat(t,">")}function f0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var I4=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},vs=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?I4(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function L4(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function $u(e){var t=L4(e);return t.length===1?t[0].toString(16):null}function $4(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function d0(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ju(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=d0(t);typeof zt.hooks.addPack=="function"&&!i?zt.hooks.addPack(e,d0(t)):zt.styles[e]=L(L({},zt.styles[e]||{}),a),e==="fas"&&ju("fa",t)}var Ma,Fa,Da,wr=zt.styles,j4=zt.shims,M4=(Ma={},Ee(Ma,le,Object.values(Gi[le])),Ee(Ma,ge,Object.values(Gi[ge])),Ma),mf=null,Mm={},Fm={},Dm={},Um={},Bm={},F4=(Fa={},Ee(Fa,le,Object.keys(Yi[le])),Ee(Fa,ge,Object.keys(Yi[ge])),Fa);function D4(e){return~x4.indexOf(e)}function U4(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!D4(i)?i:null}var Hm=function(){var t=function(a){return vs(wr,function(o,l,s){return o[s]=vs(l,a,{}),o},{})};Mm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Fm=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),Bm=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in wr||M.autoFetchSvg,r=vs(j4,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Dm=r.names,Um=r.unicodes,mf=Al(M.styleDefault,{family:M.familyDefault})};E4(function(e){mf=Al(e.styleDefault,{family:M.familyDefault})});Hm();function hf(e,t){return(Mm[e]||{})[t]}function B4(e,t){return(Fm[e]||{})[t]}function Yn(e,t){return(Bm[e]||{})[t]}function Vm(e){return Dm[e]||{prefix:null,iconName:null}}function H4(e){var t=Um[e],n=hf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function In(){return mf}var gf=function(){return{prefix:null,iconName:null,rest:[]}};function Al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Yi[r][e],a=Qi[r][e]||Qi[r][i],o=e in zt.styles?e:null;return a||o||null}var p0=(Da={},Ee(Da,le,Object.keys(Gi[le])),Ee(Da,ge,Object.keys(Gi[ge])),Da);function Rl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ee(t,le,"".concat(M.cssPrefix,"-").concat(le)),Ee(t,ge,"".concat(M.cssPrefix,"-").concat(ge)),t),o=null,l=le;(e.includes(a[le])||e.some(function(u){return p0[le].includes(u)}))&&(l=le),(e.includes(a[ge])||e.some(function(u){return p0[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var f=U4(M.cssPrefix,c);if(wr[c]?(c=M4[l].includes(c)?m4[l][c]:c,o=c,u.prefix=c):F4[l].indexOf(c)>-1?(o=c,u.prefix=Al(c,{family:l})):f?u.iconName=f:c!==M.replacementClass&&c!==a[le]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var m=o==="fa"?Vm(u.iconName):{},w=Yn(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||w||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!wr.far&&wr.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},gf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(wr.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Yn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=In()||"fas"),s}var V4=function(){function e(){n4(this,e),this.definitions={}}return r4(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=L(L({},n.definitions[l]||{}),o[l]),ju(l,o[l]);var s=Gi[le][l];s&&ju(s,o[l]),Hm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),e}(),m0=[],xr={},Nr={},W4=Object.keys(Nr);function Y4(e,t){var n=t.mixoutsTo;return m0=e,xr={},Object.keys(Nr).forEach(function(r){W4.indexOf(r)===-1&&delete Nr[r]}),m0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Bo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){xr[o]||(xr[o]=[]),xr[o].push(a[o])})}r.provides&&r.provides(Nr)}),n}function Mu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=xr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xr[e]||[];i.forEach(function(a){a.apply(null,n)})}function tn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nr[e]?Nr[e].apply(null,t):void 0}function Fu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||In();if(t)return t=Yn(n,t)||t,f0(Wm.definitions,n,t)||f0(zt.styles,n,t)}var Wm=new V4,Q4=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,nr("noAuto")},G4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return an?(nr("beforeI2svg",t),tn("pseudoElements2svg",t),tn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,T4(function(){X4({autoReplaceSvgRoot:n}),nr("watch",t)})}},K4={icon:function(t){if(t===null)return null;if(Bo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Al(t[0]);return{prefix:r,iconName:Yn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(h4))){var i=Rl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||In(),iconName:Yn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=In();return{prefix:a,iconName:Yn(a,t)||t}}}},ft={noAuto:Q4,config:M,dom:G4,parse:K4,library:Wm,findIconDefinition:Fu,toHtml:sa},X4=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(zt.styles).length>0||M.autoFetchSvg)&&an&&M.autoReplaceSvg&&ft.dom.i2svg({node:r})};function Tl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(an){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function J4(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(pf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Ol(L(L({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function q4(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function vf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,f=e.extra,m=e.watchable,w=m===void 0?!1:m,v=r.found?r:n,y=v.width,x=v.height,h=i==="fak",p=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(V){return f.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(f.classes).join(" "),g={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(x)})},S=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/x*16*.0625,"em")}:{};w&&(g.attributes[tr]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Xi())},children:[s]}),delete g.attributes.title);var C=L(L({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:L(L({},S),f.styles)}),O=r.found&&n.found?tn("generateAbstractMask",C)||{children:[],attributes:{}}:tn("generateAbstractIcon",C)||{children:[],attributes:{}},P=O.children,_=O.attributes;return C.children=P,C.attributes=_,l?q4(C):J4(C)}function h0(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[tr]="");var c=L({},o.styles);pf(i)&&(c.transform=_4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ol(c);f.length>0&&(u.style=f);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function Z4(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ol(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ys=zt.styles;function Du(e){var t=e[0],n=e[1],r=e.slice(4),i=lf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var e3={found:!1,width:512,height:512};function t3(e,t){!Am&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Uu(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=In()),new Promise(function(r,i){if(tn("missingIconAbstract"),n==="fa"){var a=Vm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ys[t]&&ys[t][e]){var o=ys[t][e];return r(Du(o))}t3(e,t),r(L(L({},e3),{},{icon:M.showMissingIcons&&e?tn("missingIconAbstract")||{}:{}}))})}var g0=function(){},Bu=M.measurePerformance&&Ra&&Ra.mark&&Ra.measure?Ra:{mark:g0,measure:g0},pi='FA "6.3.0"',n3=function(t){return Bu.mark("".concat(pi," ").concat(t," begins")),function(){return Ym(t)}},Ym=function(t){Bu.mark("".concat(pi," ").concat(t," ends")),Bu.measure("".concat(pi," ").concat(t),"".concat(pi," ").concat(t," begins"),"".concat(pi," ").concat(t," ends"))},yf={begin:n3,end:Ym},ro=function(){};function v0(e){var t=e.getAttribute?e.getAttribute(tr):null;return typeof t=="string"}function r3(e){var t=e.getAttribute?e.getAttribute(uf):null,n=e.getAttribute?e.getAttribute(cf):null;return t&&n}function i3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function a3(){if(M.autoReplaceSvg===!0)return io.replace;var e=io[M.autoReplaceSvg];return e||io.replace}function o3(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function l3(e){return ue.createElement(e)}function Qm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?o3:l3:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Qm(o,{ceFn:r}))}),i}function s3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var io={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Qm(i),n)}),n.getAttribute(tr)===null&&M.keepOriginalSource){var r=ue.createComment(s3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~df(n).indexOf(M.replacementClass))return io.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return sa(l)}).join(`
`);n.setAttribute(tr,""),n.innerHTML=o}};function y0(e){e()}function Gm(e,t){var n=typeof t=="function"?t:ro;if(e.length===0)n();else{var r=y0;M.mutateApproach===d4&&(r=Tn.requestAnimationFrame||y0),r(function(){var i=a3(),a=yf.begin("mutate");e.map(i),a(),n()})}}var wf=!1;function Km(){wf=!0}function Hu(){wf=!1}var Vo=null;function w0(e){if(s0&&M.observeMutations){var t=e.treeCallback,n=t===void 0?ro:t,r=e.nodeCallback,i=r===void 0?ro:r,a=e.pseudoElementsCallback,o=a===void 0?ro:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Vo=new s0(function(u){if(!wf){var c=In();Qr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!v0(f.addedNodes[0])&&(M.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&M.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&v0(f.target)&&~w4.indexOf(f.attributeName))if(f.attributeName==="class"&&r3(f.target)){var m=Rl(df(f.target)),w=m.prefix,v=m.iconName;f.target.setAttribute(uf,w||c),v&&f.target.setAttribute(cf,v)}else i3(f.target)&&i(f.target)})}}),an&&Vo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function u3(){Vo&&Vo.disconnect()}function c3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function f3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Rl(df(e));return i.prefix||(i.prefix=In()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=B4(i.prefix,e.innerText)||hf(i.prefix,$u(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function d3(e){var t=Qr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Xi()):(t["aria-hidden"]="true",t.focusable="false")),t}function p3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=f3(e),r=n.iconName,i=n.prefix,a=n.rest,o=d3(e),l=Mu("parseNodeAttributes",{},e),s=t.styleParser?c3(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var m3=zt.styles;function Xm(e){var t=M.autoReplaceSvg==="nest"?x0(e,{styleParser:!1}):x0(e);return~t.extra.classes.indexOf(Rm)?tn("generateLayersText",e,t):tn("generateSvgReplacementMutation",e,t)}var Ln=new Set;ff.map(function(e){Ln.add("fa-".concat(e))});Object.keys(Yi[le]).map(Ln.add.bind(Ln));Object.keys(Yi[ge]).map(Ln.add.bind(Ln));Ln=oa(Ln);function S0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!an)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(u0,"-").concat(f))},i=function(f){return n.remove("".concat(u0,"-").concat(f))},a=M.autoFetchSvg?Ln:ff.map(function(c){return"fa-".concat(c)}).concat(Object.keys(m3));a.includes("fa")||a.push("fa");var o=[".".concat(Rm,":not([").concat(tr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(tr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Qr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=yf.begin("onTree"),u=l.reduce(function(c,f){try{var m=Xm(f);m&&c.push(m)}catch(w){Am||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(m){Gm(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(m){s(),f(m)})})}function h3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xm(e).then(function(n){n&&Gm([n],t)})}function g3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fu(i||{})),e(r,L(L({},n),{},{mask:i}))}}var v3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,m=f===void 0?null:f,w=n.titleId,v=w===void 0?null:w,y=n.classes,x=y===void 0?[]:y,h=n.attributes,p=h===void 0?{}:h,g=n.styles,S=g===void 0?{}:g;if(t){var C=t.prefix,O=t.iconName,P=t.icon;return Tl(L({type:"icon"},t),function(){return nr("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(m?p["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(v||Xi()):(p["aria-hidden"]="true",p.focusable="false")),vf({icons:{main:Du(P),mask:s?Du(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:O,transform:L(L({},Lt),i),symbol:o,title:m,maskId:c,titleId:v,extra:{attributes:p,styles:S,classes:x}})})}},y3={mixout:function(){return{icon:g3(v3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=S0,n.nodeCallback=h3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return S0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,f=r.maskId,m=r.extra;return new Promise(function(w,v){Promise.all([Uu(i,l),c.iconName?Uu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var x=lf(y,2),h=x[0],p=x[1];w([n,vf({icons:{main:h,mask:p},prefix:l,iconName:i,transform:s,symbol:u,maskId:f,title:a,titleId:o,extra:m,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Ol(l);s.length>0&&(i.style=s);var u;return pf(o)&&(u=tn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},w3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Tl({type:"layer"},function(){nr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(oa(a)).join(" ")},children:o}]})}}}},x3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,f=c===void 0?{}:c;return Tl({type:"counter",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),Z4({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(oa(l))}})})}}}},S3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Lt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,f=c===void 0?{}:c,m=r.styles,w=m===void 0?{}:m;return Tl({type:"text",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),h0({content:n,transform:L(L({},Lt),a),title:l,extra:{attributes:f,styles:w,classes:["".concat(M.cssPrefix,"-layers-text")].concat(oa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(Nm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,h0({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},k3=new RegExp('"',"ug"),k0=[1105920,1112319];function b3(e){var t=e.replace(k3,""),n=$4(t,0),r=n>=k0[0]&&n<=k0[1],i=t.length===2?t[0]===t[1]:!1;return{value:$u(i?t[0]:t),isSecondary:r||i}}function b0(e,t){var n="".concat(f4).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Qr(e.children),o=a.filter(function(P){return P.getAttribute(Lu)===t})[0],l=Tn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(g4),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?ge:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Qi[m][s[2].toLowerCase()]:v4[m][u],v=b3(f),y=v.value,x=v.isSecondary,h=s[0].startsWith("FontAwesome"),p=hf(w,y),g=p;if(h){var S=H4(y);S.iconName&&S.prefix&&(p=S.iconName,w=S.prefix)}if(p&&!x&&(!o||o.getAttribute(uf)!==w||o.getAttribute(cf)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var C=p3(),O=C.extra;O.attributes[Lu]=t,Uu(p,w).then(function(P){var _=vf(L(L({},C),{},{icons:{main:P,mask:gf()},prefix:w,iconName:g,extra:O,watchable:!0})),V=ue.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=_.map(function(D){return sa(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function E3(e){return Promise.all([b0(e,"::before"),b0(e,"::after")])}function C3(e){return e.parentNode!==document.head&&!~p4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function E0(e){if(an)return new Promise(function(t,n){var r=Qr(e.querySelectorAll("*")).filter(C3).map(E3),i=yf.begin("searchPseudoElements");Km(),Promise.all(r).then(function(){i(),Hu(),t()}).catch(function(){i(),Hu(),n()})})}var z3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=E0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;M.searchPseudoElements&&E0(i)}}},C0=!1,P3={mixout:function(){return{dom:{unwatch:function(){Km(),C0=!0}}}},hooks:function(){return{bootstrap:function(){w0(Mu("mutationObserverCallbacks",{}))},noAuto:function(){u3()},watch:function(n){var r=n.observeMutationsRoot;C0?Hu():w0(Mu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},z0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},N3={mixout:function(){return{parse:{transform:function(n){return z0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=z0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:f,path:m};return{tag:"g",attributes:L({},w.outer),children:[{tag:"g",attributes:L({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),w.path)}]}]}}}},ws={x:0,y:0,width:"100%",height:"100%"};function P0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _3(e){return e.tag==="g"?e.children:[e]}var O3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Rl(i.split(" ").map(function(o){return o.trim()})):gf();return a.prefix||(a.prefix=In()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,f=o.width,m=o.icon,w=N4({transform:s,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:L(L({},ws),{},{fill:"white"})},y=c.children?{children:c.children.map(P0)}:{},x={tag:"g",attributes:L({},w.inner),children:[P0(L({tag:c.tag,attributes:L(L({},c.attributes),w.path)},y))]},h={tag:"g",attributes:L({},w.outer),children:[x]},p="mask-".concat(l||Xi()),g="clip-".concat(l||Xi()),S={tag:"mask",attributes:L(L({},ws),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,h]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:_3(m)},S]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},ws)}),{children:r,attributes:i}}}},A3={provides:function(t){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:L(L({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},R3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},T3=[A4,y3,w3,x3,S3,z3,P3,N3,O3,A3,R3];Y4(T3,{mixoutsTo:ft});ft.noAuto;ft.config;ft.library;ft.dom;var Vu=ft.parse;ft.findIconDefinition;ft.toHtml;var I3=ft.icon;ft.layer;ft.text;ft.counter;var Y={},L3={get exports(){return Y},set exports(e){Y=e}},$3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",j3=$3,M3=j3;function Jm(){}function qm(){}qm.resetWarningCache=Jm;var F3=function(){function e(r,i,a,o,l,s){if(s!==M3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qm,resetWarningCache:Jm};return n.PropTypes=n,n};L3.exports=F3();function N0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N0(Object(n),!0).forEach(function(r){Sr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wo(e){return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wo(e)}function Sr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function U3(e,t){if(e==null)return{};var n=D3(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wu(e){return B3(e)||H3(e)||V3(e)||W3()}function B3(e){if(Array.isArray(e))return Yu(e)}function H3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V3(e,t){if(e){if(typeof e=="string")return Yu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yu(e,t)}}function Yu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,m=e.fixedWidth,w=e.inverse,v=e.border,y=e.listItem,x=e.flip,h=e.size,p=e.rotation,g=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":m,"fa-inverse":w,"fa-border":v,"fa-li":y,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Sr(t,"fa-".concat(h),typeof h<"u"&&h!==null),Sr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Sr(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Sr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function Q3(e){return e=e-0,e===e}function Zm(e){return Q3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var G3=["style"];function K3(e){return e.charAt(0).toUpperCase()+e.slice(1)}function X3(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Zm(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[K3(i)]=a:t[i]=a,t},{})}function eh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return eh(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=X3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[Zm(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=U3(n,G3);return i.attrs.style=xn(xn({},i.attrs.style),o),e.apply(void 0,[t.tag,xn(xn({},i.attrs),l)].concat(Wu(r)))}var th=!1;try{th=!0}catch{}function J3(){if(!th&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _0(e){if(e&&Wo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vu.icon)return Vu.icon(e);if(e===null)return null;if(e&&Wo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Sr({},e,t):{}}var Wt=nn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=_0(n),c=xs("classes",[].concat(Wu(Y3(e)),Wu(a.split(" ")))),f=xs("transform",typeof e.transform=="string"?Vu.transform(e.transform):e.transform),m=xs("mask",_0(r)),w=I3(u,xn(xn(xn(xn({},c),f),m),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!w)return J3("Could not find icon",u),null;var v=w.abstract,y={ref:t};return Object.keys(e).forEach(function(x){Wt.defaultProps.hasOwnProperty(x)||(y[x]=e[x])}),q3(v[0],y)});Wt.displayName="FontAwesomeIcon";Wt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};Wt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var q3=eh.bind(null,nn.createElement),Z3={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},ew={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},O0={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},tw={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Gr=b.createContext({});function nw({children:e}){const[t,n]=b.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=b.useState(!1),a={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return d(Gr.Provider,{value:a,children:e})}const rw=()=>{const{isLoggedIn:e,userProfile:t}=b.useContext(Gr);console.log("userProfile in navbar console.log",t);//! placeholder need to implement
return d(Zy,{children:e?z(Gt,{children:[d(un,{className:"page",to:"/",activeclassname:"active",children:d("img",{className:"logo",src:e4,alt:"PantryPal Egg logo"})}),d(un,{className:"page",to:"/search",children:"Search"}),d(un,{className:"page",to:"/saved",children:"Saved"}),d(un,{className:"page",to:"/mealPlanner",children:"Meal Planner"}),d(un,{className:"page",to:"/login",onClick:()=>{Uo.remove("loggedIn"),navigate("/login")},children:"Logout"}),d(un,{className:"page",to:"/profile",children:d(Wt,{icon:ew,className:"userIcon"})})]}):z(Gt,{children:[d(un,{className:"page",to:"/signup",children:"SignUp"}),d(un,{className:"page",to:"/login",children:"Login"})]})})},iw="/assets/JustEgg-ec8a2428.png",aw="/assets/PantryPalText-9cf7db56.png",ow=Ve.div`
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

    .logoText {
        width: auto;
        max-width: 80%;
        height: 100%;
        max-height: 25vh;   
    }
    
    h1 {
        font-size: 40px;
        color: #90ac14;
        text-decoration: none;
    }

    @media ${Je.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${Je.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${Je.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${Je.tablet} { 
        min-width: 425px;
        h1 {
            font-size: 2rem;    
        }
    }
      
    @media ${Je.laptop} { 
        min-width: 768px;
        h1 {
            font-size: 2.2rem;    
        }
  
    }
      
    @media ${Je.desktop} {
        min-width: 1441px;
        h1 {
            font-size: 3rem;    
        }

    }
      
    @media ${Je.desktopL} {
        min-width: 2560px;
        h1 {
            font-size: 4rem;    
        }

    }
`,lw=()=>z(ow,{children:[d("h1",{children:"Find recipes | Meal Plan"}),d("img",{className:"logo",src:iw,alt:"Egg"}),d("img",{className:"logoText",src:aw,alt:"PantryPal"})]}),sw=Ve.section`
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
`;function uw(){const e="",t=b.useRef(""),n=b.useRef(""),r=b.useRef(""),i=b.useRef("");let a=t.current.value,o=n.current.value,l=r.current.value,s=i.current.value;const[u,c]=b.useState(!1),[f,m]=b.useState([]),[w,v]=b.useState(!1),[y,x]=b.useState(!1),[h,p]=b.useState(!1),g=Yr();function S(P){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(P)}function C(){let P=[];return!S(s)&&s&&(x(!0),P.push("email format invalid")),o!==l&&(p(!0),P.push("passwords do not match")),P.length>0?(c(!0),P):[]}async function O(){c(!1);const P=C();if(P.length>0){m(P);return}try{const _=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:a,password:o})});if(_.status==401)throw Error("Username and/or Email already exists");if(_.status!=201)throw Error(`server response error ${_.statusText}`)}catch(_){c(!0),m([_.message]);return}try{const _=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});if(_.status===200){const V=await _.json();Uo.set("loggedIn",{token:V.token,username:a})}else throw Error(_.statusText)}catch(_){c(!0),m([_.message]);return}g("/search")}return z(sw,{children:[z("section",{className:"form-sect",children:[z("form",{action:"#",onSubmit:P=>{P.preventDefault(),O()},children:[d("div",{className:"title",children:z("h2",{children:["Welcome to Pantry Pal ",d("br",{}),"Signup Here"]})}),z("div",{className:"input-container",children:[y&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"email",children:"Email"}),d("input",{className:y?"error-container":"",ref:i,onChange:P=>{s=P.target.value,x(!1)},id:"email",type:"text",required:!0}),y&&d("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[w&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"username",children:"Username"}),d("input",{className:w?"error-container":"",ref:t,onChange:P=>{a=P.target.value},id:"username",type:"text",required:!0}),w&&d("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[h&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"password",children:"Password"}),d("input",{className:h?"error-container":"",ref:n,onChange:P=>{o=P.target.value,p(!1)},id:"password",type:"password",required:!0}),h&&d("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[h&&d("span",{className:"error-marker",children:"*"}),d("label",{htmlFor:"confirmpassword",className:"input-tag",children:"Confirm Password"}),d("input",{className:h?"error-container":"",ref:r,onChange:P=>{l=P.target.value,p(!1)},id:"confirmpassword",type:"password",required:!0}),h&&d("span",{className:"error-marker",children:"*"})]}),d("div",{className:"submit-btn",children:d("button",{className:"btn",children:"Signup"})})]}),u&&d("section",{className:"error-container error-desc",children:z("div",{children:[d("h4",{children:"Please correct following errors"}),d("ul",{children:f.map((P,_)=>d("li",{children:P},_))})]})})]}),d("div",{className:"btn goto-btn",children:z(Kc,{to:"/login",children:["Already signed",d("br",{}),"up login here"]})})]})}let oi="#2C4001",cw="#F2E7AE";const fw=Ve.section`
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
        color: ${oi};
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
        background-color: ${oi};
        color: #fff;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        border-radius: .5em;
        cursor: pointer;
        
        margin: .3em 0;
        border: 1px solid ${oi};
    }
    & .search-btn: hover {
        background: ${cw};
        color: ${oi};
        border: 1px solid ${oi};
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

    
`;function nh(e,t){return function(){return e.apply(t,arguments)}}const{toString:rh}=Object.prototype,{getPrototypeOf:xf}=Object,Sf=(e=>t=>{const n=rh.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),on=e=>(e=e.toLowerCase(),t=>Sf(t)===e),Il=e=>t=>typeof t===e,{isArray:Kr}=Array,Ji=Il("undefined");function dw(e){return e!==null&&!Ji(e)&&e.constructor!==null&&!Ji(e.constructor)&&$n(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ih=on("ArrayBuffer");function pw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ih(e.buffer),t}const mw=Il("string"),$n=Il("function"),ah=Il("number"),kf=e=>e!==null&&typeof e=="object",hw=e=>e===!0||e===!1,ao=e=>{if(Sf(e)!=="object")return!1;const t=xf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gw=on("Date"),vw=on("File"),yw=on("Blob"),ww=on("FileList"),xw=e=>kf(e)&&$n(e.pipe),Sw=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||rh.call(e)===t||$n(e.toString)&&e.toString()===t)},kw=on("URLSearchParams"),bw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ua(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Kr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function oh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const lh=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),sh=e=>!Ji(e)&&e!==lh;function Qu(){const{caseless:e}=sh(this)&&this||{},t={},n=(r,i)=>{const a=e&&oh(t,i)||i;ao(t[a])&&ao(r)?t[a]=Qu(t[a],r):ao(r)?t[a]=Qu({},r):Kr(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ua(arguments[r],n);return t}const Ew=(e,t,n,{allOwnKeys:r}={})=>(ua(t,(i,a)=>{n&&$n(i)?e[a]=nh(i,n):e[a]=i},{allOwnKeys:r}),e),Cw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Pw=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&xf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Nw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_w=e=>{if(!e)return null;if(Kr(e))return e;let t=e.length;if(!ah(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ow=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&xf(Uint8Array)),Aw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},Rw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Tw=on("HTMLFormElement"),Iw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),A0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lw=on("RegExp"),uh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ua(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},$w=e=>{uh(e,(t,n)=>{if($n(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($n(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jw=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Kr(e)?r(e):r(String(e).split(t)),n},Mw=()=>{},Fw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ss="abcdefghijklmnopqrstuvwxyz",R0="0123456789",ch={DIGIT:R0,ALPHA:Ss,ALPHA_DIGIT:Ss+Ss.toUpperCase()+R0},Dw=(e=16,t=ch.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Uw(e){return!!(e&&$n(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bw=e=>{const t=new Array(10),n=(r,i)=>{if(kf(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Kr(r)?[]:{};return ua(r,(o,l)=>{const s=n(o,i+1);!Ji(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},E={isArray:Kr,isArrayBuffer:ih,isBuffer:dw,isFormData:Sw,isArrayBufferView:pw,isString:mw,isNumber:ah,isBoolean:hw,isObject:kf,isPlainObject:ao,isUndefined:Ji,isDate:gw,isFile:vw,isBlob:yw,isRegExp:Lw,isFunction:$n,isStream:xw,isURLSearchParams:kw,isTypedArray:Ow,isFileList:ww,forEach:ua,merge:Qu,extend:Ew,trim:bw,stripBOM:Cw,inherits:zw,toFlatObject:Pw,kindOf:Sf,kindOfTest:on,endsWith:Nw,toArray:_w,forEachEntry:Aw,matchAll:Rw,isHTMLForm:Tw,hasOwnProperty:A0,hasOwnProp:A0,reduceDescriptors:uh,freezeMethods:$w,toObjectSet:jw,toCamelCase:Iw,noop:Mw,toFiniteNumber:Fw,findKey:oh,global:lh,isContextDefined:sh,ALPHABET:ch,generateString:Dw,isSpecCompliantForm:Uw,toJSONObject:Bw};function K(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fh=K.prototype,dh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{dh[e]={value:e}});Object.defineProperties(K,dh);Object.defineProperty(fh,"isAxiosError",{value:!0});K.from=(e,t,n,r,i,a)=>{const o=Object.create(fh);return E.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),K.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Hw=null;function Gu(e){return E.isPlainObject(e)||E.isArray(e)}function ph(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function T0(e,t,n){return e?e.concat(t).map(function(i,a){return i=ph(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function Vw(e){return E.isArray(e)&&!e.some(Gu)}const Ww=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Ll(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!E.isUndefined(x[y])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(E.isDate(v))return v.toISOString();if(!s&&E.isBlob(v))throw new K("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(v)||E.isTypedArray(v)?s&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,y,x){let h=v;if(v&&!x&&typeof v=="object"){if(E.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(E.isArray(v)&&Vw(v)||(E.isFileList(v)||E.endsWith(y,"[]"))&&(h=E.toArray(v)))return y=ph(y),h.forEach(function(g,S){!(E.isUndefined(g)||g===null)&&t.append(o===!0?T0([y],S,a):o===null?y:y+"[]",u(g))}),!1}return Gu(v)?!0:(t.append(T0(x,y,a),u(v)),!1)}const f=[],m=Object.assign(Ww,{defaultVisitor:c,convertValue:u,isVisitable:Gu});function w(v,y){if(!E.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),E.forEach(v,function(h,p){(!(E.isUndefined(h)||h===null)&&i.call(t,h,E.isString(p)?p.trim():p,y,m))===!0&&w(h,y?y.concat(p):[p])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function I0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function bf(e,t){this._pairs=[],e&&Ll(e,this,t)}const mh=bf.prototype;mh.append=function(t,n){this._pairs.push([t,n])};mh.toString=function(t){const n=t?function(r){return t.call(this,r,I0)}:I0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Yw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hh(e,t,n){if(!t)return e;const r=n&&n.encode||Yw,i=n&&n.serialize;let a;if(i?a=i(t,n):a=E.isURLSearchParams(t)?t.toString():new bf(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Qw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const L0=Qw,gh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gw=typeof URLSearchParams<"u"?URLSearchParams:bf,Kw=typeof FormData<"u"?FormData:null,Xw=typeof Blob<"u"?Blob:null,Jw=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qw=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),$t={isBrowser:!0,classes:{URLSearchParams:Gw,FormData:Kw,Blob:Xw},isStandardBrowserEnv:Jw,isStandardBrowserWebWorkerEnv:qw,protocols:["http","https","file","blob","url","data"]};function Zw(e,t){return Ll(e,new $t.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return $t.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function e6(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function t6(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function vh(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&E.isArray(i)?i.length:o,s?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&E.isArray(i[o])&&(i[o]=t6(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(e6(r),i,n,0)}),n}return null}const n6={"Content-Type":void 0};function r6(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $l={transitional:gh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=E.isObject(t);if(a&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i&&i?JSON.stringify(vh(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zw(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ll(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),r6(t)):t}],transformResponse:[function(t){const n=this.transitional||$l.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?K.from(l,K.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){$l.headers[t]={}});E.forEach(["post","put","patch"],function(t){$l.headers[t]=E.merge(n6)});const Ef=$l,i6=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),a6=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&i6[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},$0=Symbol("internals");function li(e){return e&&String(e).trim().toLowerCase()}function oo(e){return e===!1||e==null?e:E.isArray(e)?e.map(oo):String(e)}function o6(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function l6(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ks(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function s6(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function u6(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class jl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=li(s);if(!c)throw new Error("header name must be a non-empty string");const f=E.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||s]=oo(l))}const o=(l,s)=>E.forEach(l,(u,c)=>a(u,c,s));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!l6(t)?o(a6(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=li(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return o6(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=li(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ks(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=li(o),o){const l=E.findKey(r,o);l&&(!n||ks(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||ks(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,a)=>{const o=E.findKey(r,a);if(o){n[o]=oo(i),delete n[a];return}const l=t?s6(a):String(a).trim();l!==a&&delete n[a],n[l]=oo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[$0]=this[$0]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=li(o);r[l]||(u6(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(a):a(t),this}}jl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(jl.prototype);E.freezeMethods(jl);const Qt=jl;function bs(e,t){const n=this||Ef,r=t||n,i=Qt.from(r.headers);let a=r.data;return E.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function yh(e){return!!(e&&e.__CANCEL__)}function ca(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(ca,K,{__CANCEL__:!0});function c6(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const f6=$t.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),E.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function d6(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function p6(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function wh(e,t){return e&&!d6(t)?p6(e,t):t}const m6=$t.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=E.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function h6(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function g6(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let f=a,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(m*1e3/w):void 0}}function j0(e,t){let n=0;const r=g6(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const v6=typeof XMLHttpRequest<"u",y6=v6&&function(e){return new Promise(function(n,r){let i=e.data;const a=Qt.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}E.isFormData(i)&&($t.isStandardBrowserEnv||$t.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(w+":"+v))}const c=wh(e.baseURL,e.url);u.open(e.method.toUpperCase(),hh(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const w=Qt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};c6(function(h){n(h),s()},function(h){r(h),s()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||gh;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new K(v,y.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},$t.isStandardBrowserEnv){const w=(e.withCredentials||m6(c))&&e.xsrfCookieName&&f6.read(e.xsrfCookieName);w&&a.set(e.xsrfHeaderName,w)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&E.forEach(a.toJSON(),function(v,y){u.setRequestHeader(y,v)}),E.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",j0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",j0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new ca(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=h6(c);if(m&&$t.protocols.indexOf(m)===-1){r(new K("Unsupported protocol "+m+":",K.ERR_BAD_REQUEST,e));return}u.send(i||null)})},lo={http:Hw,xhr:y6};E.forEach(lo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const w6={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=E.isString(n)?lo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(lo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:lo};function Es(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ca(null,e)}function M0(e){return Es(e),e.headers=Qt.from(e.headers),e.data=bs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),w6.getAdapter(e.adapter||Ef.adapter)(e).then(function(r){return Es(e),r.data=bs.call(e,e.transformResponse,r),r.headers=Qt.from(r.headers),r},function(r){return yh(r)||(Es(e),r&&r.response&&(r.response.data=bs.call(e,e.transformResponse,r.response),r.response.headers=Qt.from(r.response.headers))),Promise.reject(r)})}const F0=e=>e instanceof Qt?e.toJSON():e;function Mr(e,t){t=t||{};const n={};function r(u,c,f){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:f},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function i(u,c,f){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function a(u,c){if(!E.isUndefined(c))return r(void 0,c)}function o(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(F0(u),F0(c),!0)};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=s[c]||i,m=f(e[c],t[c],c);E.isUndefined(m)&&f!==l||(n[c]=m)}),n}const xh="1.3.4",Cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const D0={};Cf.transitional=function(t,n,r){function i(a,o){return"[Axios v"+xh+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new K(i(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!D0[o]&&(D0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function x6(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new K("option "+a+" must be "+s,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}}const Ku={assertOptions:x6,validators:Cf},dn=Ku.validators;class Yo{constructor(t){this.defaults=t,this.interceptors={request:new L0,response:new L0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Ku.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!==void 0&&Ku.assertOptions(i,{encode:dn.function,serialize:dn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&E.merge(a.common,a[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],v=>{delete a[v]}),n.headers=Qt.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(s=s&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,m;if(!s){const v=[M0.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),m=v.length,c=Promise.resolve(n);f<m;)c=c.then(v[f++],v[f++]);return c}m=l.length;let w=n;for(f=0;f<m;){const v=l[f++],y=l[f++];try{w=v(w)}catch(x){y.call(this,x);break}}try{c=M0.call(this,w)}catch(v){return Promise.reject(v)}for(f=0,m=u.length;f<m;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Mr(this.defaults,t);const n=wh(t.baseURL,t.url);return hh(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Yo.prototype[t]=function(n,r){return this.request(Mr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(Mr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Yo.prototype[t]=n(),Yo.prototype[t+"Form"]=n(!0)});const so=Yo;class zf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new ca(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new zf(function(i){t=i}),cancel:t}}}const S6=zf;function k6(e){return function(n){return e.apply(null,n)}}function b6(e){return E.isObject(e)&&e.isAxiosError===!0}const Xu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xu).forEach(([e,t])=>{Xu[t]=e});const E6=Xu;function Sh(e){const t=new so(e),n=nh(so.prototype.request,t);return E.extend(n,so.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Sh(Mr(e,i))},n}const Ce=Sh(Ef);Ce.Axios=so;Ce.CanceledError=ca;Ce.CancelToken=S6;Ce.isCancel=yh;Ce.VERSION=xh;Ce.toFormData=Ll;Ce.AxiosError=K;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=k6;Ce.isAxiosError=b6;Ce.mergeConfig=Mr;Ce.AxiosHeaders=Qt;Ce.formToJSON=e=>vh(E.isHTMLForm(e)?new FormData(e):e);Ce.HttpStatusCode=E6;Ce.default=Ce;const qi=Ce;let Dt="#2C4001",U0="#F2E7AE",B0="#59320F",C6="#F2F2F2";const z6=Ve.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${Dt};


.container {
  background-color: ${C6};
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
    background-color: ${Dt};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Dt};

  }
  .try_btn:hover {
    background: ${U0};
    color: ${Dt};
    border: 1px solid ${Dt};
   
  }
  .save_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${B0};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${B0};
  }
  .save_btn: hover {
    background: ${U0};
    color: ${Dt};
    border: 1px solid ${Dt};
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
      color: ${Dt};
    }
    p {
      color: color: ${Dt};
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


`,P6=(e,t)=>{console.log("username",t);const n="";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},N6=(e,t)=>{t=loggedInData?loggedInData.username:null;const n="";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!"),window.location.reload();else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},kh=({recipe:e,showDelete:t})=>{const n=a=>a.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=b.useContext(Gr);return d(z6,{children:z("div",{className:"container",children:[d("img",{src:e.image,alt:e.title}),z("div",{className:"card_body",children:[d("h1",{children:e.title}),z("p",{children:[n(e.summary),"Credit: ",e.creditText]}),z("div",{className:"card_footer",children:[z("div",{className:"card_footer_container",children:[d("h2",{children:"Dish type:"}),z("p",{children:[" ",e.dishTypes[0]]})]}),z("div",{className:"card_footer_container",children:[d("h2",{children:"Servings:"}),z("p",{children:[" ",e.servings]})]}),z("div",{className:"card_footer_container",children:[d("h2",{children:"Total Time:"}),d("p",{children:e.readyInMinutes})]})]}),z("div",{className:"btn-container",children:[d(Kc,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&d("button",{className:"save_btn",onClick:()=>P6(e,i.username),children:"Save it!"}),t&&d("button",{className:"delete_btn",onClick:()=>N6(e,i.username),children:"Delete Recipe"})]})]})]})})},_6=Ve.section`
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
`;function bh(){return d(_6,{children:d("span",{className:"loader"})})}function O6(e,t){let n=[];return e.forEach(r=>{const i=r.id;for(let a=0;a<t.length;a++)i===t[a].id&&n.push({...r,...t[a]})}),n}let si="#2C4001",A6="#F2E7AE",R6="#F2F2F2";const T6=Ve.section`
   
    color: ${si};


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
        background-color: ${si};
        color: ${R6};
        border: 1px solid ${si};
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
        background-color: ${A6};
        color: ${si};
        border: 1px solid ${si};
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
`;function I6({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return d("div",{children:"no filters available"});let a=new Set,o=new Set,l=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(v=>{let y=v.diets;y.length>0&&y.forEach(x=>{n.includes(x)||a.add(x)}),l.forEach(x=>{v[x]&&!i.includes(x)&&o.add(x)})});let s=Array.from(a.values()),u=Array.from(o.values());function c(v){t(y=>y.includes(v)?y.filter(x=>x!==v):[...y,v])}function f(v){t(y=>y.filter(x=>x!==v))}function m(v){r(y=>y.includes(v)?y.filter(x=>x!==v):[...y,v])}function w(v){r(y=>y.filter(x=>x!==v))}return z(T6,{className:"main-filter-container",children:[n.length>0?z("section",{children:[d("h2",{children:"Selected filters: "}),d("ul",{children:n.map((v,y)=>d("li",{onClick:()=>{f(v)},className:"btn-filter",children:v},y+v))})]}):d("section",{}),i.length>0?z("section",{children:[d("h2",{children:"Category filters"}),d("ul",{children:i.map((v,y)=>d("li",{onClick:()=>{w(v)},className:"btn-filter",children:v},y+v))})]}):d("section",{}),z("section",{className:"filter-row",children:[d("h2",{children:"Dietary options:"}),d("ul",{className:"filter-options",children:s.length>0?s.map((v,y)=>d("li",{onClick:()=>{c(v)},className:"btn",children:d("span",{children:v})},y+v+1)):d(Gt,{})})]}),z("section",{className:"filter-row",children:[d("h2",{children:"Categories:"}),d("ul",{className:"filter-options",children:u.map((v,y)=>d("li",{onClick:()=>{m(v)},className:"btn",children:d("span",{children:v})},v+y+2))})]})]})}function L6(){const e="",t=Yr(),{isLoggedIn:n}=b.useContext(Gr);b.useEffect(()=>{n||t("/login")},[t,n]);const[r,i]=b.useState(""),[a,o]=b.useState([]),[l,s]=b.useState([]),[u,c]=b.useState([]),[f,m]=b.useState([]),[w,v]=b.useState(!1),[y,x]=b.useState(!1);b.useEffect(()=>{if(u.length>0||f.length>0){let g=$6(a,u,f);s(g);return}s(a)},[u,f,n]);const h=b.useRef("");async function p(){try{x(!0);const g=await qi.get(`${e}/api/searchbyingredient`,{params:{ingredients:r}});g!=null&&g.data&&v(!1);const S=g.data.map(P=>P.id),C=await qi.get(`${e}/api/recipeinformation`,{params:{recipeIdList:S}});//! test remove
//! test remove
let O=O6(g.data,C.data);o(O),s(O),x(!1)}catch{v(!0)}}return z(fw,{children:[d("div",{className:"title",children:d("h1",{children:"Recipe Search"})}),d("div",{className:"searchContainer",children:z("form",{action:"#",onSubmit:g=>{g.preventDefault(),p()},children:[d("input",{ref:h,onChange:g=>i(g.target.value),id:"ingregients",value:r,type:"text",placeholder:"Enter your ingredients",className:"search"}),d("button",{className:"search-btn",children:"Search"})]})}),z("section",{className:"recipes-display",children:[d("div",{className:"filter-container",children:d(I6,{recipeListArr:l,setDietFilter:c,dietFilter:u,setCategoryFilter:m,categoryFilter:f})}),d("section",{className:"searchresults-container",children:d("div",{className:"searchResults",children:d("ul",{children:y?d(bh,{}):l.length>0?l.map(g=>d("li",{children:d(kh,{recipe:g},g.id)},g.id)):w?z("h3",{children:[" ","An error has occured, please try searching again."," "]}):z("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function $6(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const j6=Ve.section`
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
`;function M6(){const[e,t]=b.useState([]),n="",{isLoggedIn:r,userProfile:i}=b.useContext(Gr);return b.useEffect(()=>{async function a(){try{if(!r){alert("Please log in to get saved recipes.");return}const o=await qi.post(`${n}/api/getSavedRecipes`,{username:i.username});t(o.data)}catch(o){console.error("Error fetching saved recipes:",o)}}a()},[]),z(j6,{children:[d("div",{className:"title",children:d("h1",{children:"Saved Recipes"})}),d("div",{className:"saved-recipes",children:d("ul",{children:e.map(a=>d("li",{children:d(kh,{recipe:a.recipeJson,showDelete:!0})},a._id))})})]})}const F6=Ve.section`
    width: 100%;
    max-width: 500px;

    border-radius: 20px;
    margin: 0 auto;
    margin-top: 4rem;
    box-shadow: 5px 5px 10px gray;

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
        /* border-radius: 10px; */
        border: none;
        border-bottom: 1px solid gray;

        width: 80%;
        padding: 10px;
        /* background-color: #92ee89a0; */
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
        top: -2rem;
        /* background-color: #8ea93e; */
        background-color: #90ac14;
        border-radius: 20px;
        padding: 1%;
    }

    & .btn {
        padding: 10px;
        color: #000000;
        width: 25%;
        border-radius: 20px;
        font-size: 10px;
        background: #fc9400;
        color: #000000;
        border: 1px solid black;
        box-shadow: 5px 5px 10px gray;
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
`;function D6(){const e=b.useRef(null),t=b.useRef(null),[n,r]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null),s=Yr(),{userProfile:u,isLoggedIn:c,setIsLoggedIn:f,setUserProfile:m}=b.useContext(Gr);return b.useEffect(()=>{e.current.focus()},[]),d(F6,{children:d("section",{className:"form-sect",children:z("form",{onSubmit:async v=>{v.preventDefault();try{const x=(await qi.post("/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;f(!0),m(h=>x.userProfile?{...h,...x.userProfile}:h),s("/search")}catch(y){f(!1),console.log(y)}},children:[z("div",{className:"title",children:[d("div",{children:c&&"logged in"}),d("h2",{children:"Welcome Back!"})]}),o&&d("div",{className:"error-container",children:z("div",{className:"error-desc",children:[d("span",{className:"error-marker",children:"⚠"})," ",o]})}),z("div",{className:"input-container",children:[d("label",{className:"input-tag",htmlFor:"username",children:"Username"}),d("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:v=>r(v.target.value),required:!0})]}),z("div",{className:"input-container",children:[d("label",{className:"input-tag",htmlFor:"password",children:"Password"}),d("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:v=>a(v.target.value),required:!0})]}),d("div",{className:"submit-btn",children:d("button",{type:"submit",className:"btn",children:"Sign In"})})]})})})}let kt="#2C4001",Ua="#F2E7AE",H0="#59320F",Cs="#F2F2F2";const U6=Ve.section`
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
  background: ${Cs};
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
  color: ${kt};
}
& .quickIcon {
  font-size: 1.5em;
}

& .recipeTime {
  color: ${kt};
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
}



& .recipeDetailContainer {
  background: ${kt};
}
& .recipeTitle {
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: ${kt};
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
  color: ${Cs};
  padding: 0 4em;
  margin: 0 .5em;

}
& .recipeSummary {
  padding: 1em;
  color: ${kt};
  border-top: 1px solid ${kt};

}
& .recipeTime{

}
& .recipeTag{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
& .recipeContainer{
  background: ${Ua}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Ua}
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
  background: ${H0};
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
  color: ${kt};
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
  background: ${Ua}

}

& .ingredientCard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${kt};
  background: white;
  color: ${kt};
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
  border-top: 1px solid ${kt};
  background: ${H0};
  color: ${Ua};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${Cs};
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
    color: ${kt};
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
`;let Ba;const B6=new Uint8Array(16);function H6(){if(!Ba&&(Ba=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ba))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ba(B6)}const Ie=[];for(let e=0;e<256;++e)Ie.push((e+256).toString(16).slice(1));function V6(e,t=0){return(Ie[e[t+0]]+Ie[e[t+1]]+Ie[e[t+2]]+Ie[e[t+3]]+"-"+Ie[e[t+4]]+Ie[e[t+5]]+"-"+Ie[e[t+6]]+Ie[e[t+7]]+"-"+Ie[e[t+8]]+Ie[e[t+9]]+"-"+Ie[e[t+10]]+Ie[e[t+11]]+Ie[e[t+12]]+Ie[e[t+13]]+Ie[e[t+14]]+Ie[e[t+15]]).toLowerCase()}const W6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),V0={randomUUID:W6};function ht(e,t,n){if(V0.randomUUID&&!t&&!e)return V0.randomUUID();e=e||{};const r=e.random||(e.rng||H6)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return V6(r)}function Y6(){var c;const t=(c=Wr().state)==null?void 0:c.recipe,n=Yr();b.useEffect(()=>{document.cookie.split(";").some(m=>m.trim().startsWith("loggedIn="))||n("/login")},[n]);const r=t.dishTypes.map(f=>d("li",{children:f},ht())),i=t.extendedIngredients.map(f=>z("li",{children:[f.amount," ",f.unit,"  ",d("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${f.image}`})," ",f.name]},ht()));console.log(t);const a=t.analyzedInstructions[0].steps.map(f=>d("li",{children:f.step},ht())),o=t.summary.replace(/<.*?>/g,""),l=t.extendedIngredients.length,s=t.aggregateLikes,u=t.diets.map(f=>d("li",{children:f},ht()));return d(U6,{children:z("div",{className:"recipeContainer",children:[z("div",{className:"recipeImgContainer",children:[z("div",{className:"imageContainer",children:[d("img",{className:"recipeImg",src:t.image,alt:t.title}),d("button",{className:"saveBtn",children:d(Wt,{icon:O0,className:"saveIcon"})})]}),z("section",{className:"recipeDetails",children:[d("div",{className:"titleContainer",children:d("h1",{className:"recipeTitle",children:t.title})}),z("div",{className:"quickInfoContainer",children:[z("section",{className:"quickInfoItem",children:[d(Wt,{icon:tw,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),z("section",{children:[d(Wt,{icon:Z3,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[l," Ingredients"]})]}),z("section",{children:[d(Wt,{icon:O0,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[s," Likes"]})]})]}),d("section",{className:"recipeSummary",children:d("p",{children:o})}),z("section",{className:"recipeTags",children:[d("div",{className:"recipeCategory",children:r}),d("div",{className:"recipeDiets",children:u})]})]})]}),d("div",{className:"recipeHead",children:d("div",{className:"recipeStart",children:z("div",{className:"ingredientCard",children:[z("h2",{children:["Servings: ",t.servings]}),d("input",{type:"number",placeholder:t.servings}),d("h2",{children:"What you'll need:"}),d("div",{className:"recipeIngredient",children:i})]})})}),z("div",{className:"instructionsCard",children:[d("h2",{children:t.title}),z("div",{className:"instructionContainer",children:[d("div",{children:d("img",{className:"instructionImg",src:t.image,alt:t.title})}),z("div",{className:"recipeInstructions",children:[d("h2",{children:"Instructions:"}),d("ol",{children:a})]})]})]})]})})}async function Q6(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}const G6=Ve.section`
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
`;function K6(){const e=Yr(),[t,n]=b.useState(!1),[r,i]=b.useState(1),[a,o]=b.useState("None"),[l,s]=b.useState(""),[u,c]=b.useState(null);return b.useEffect(()=>{document.cookie.split(";").some(w=>w.trim().startsWith("loggedIn="))||e("/login")},[e]),z(G6,{children:[z("form",{onSubmit:async m=>{n(!0),m.preventDefault();const w=await Q6(r,a,parseInt(l));c(w),n(!1)},children:[d("label",{htmlFor:"numberOfDays",children:"Number of days:"}),z("select",{id:"numberOfDays",value:r,onChange:m=>i(m.target.value),children:[d("option",{value:"1",children:"1"}),d("option",{value:"3",children:"3"}),d("option",{value:"5",children:"5"})]}),d("label",{htmlFor:"dietType",children:"Diet type:"}),z("select",{id:"dietType",value:a,onChange:m=>o(m.target.value),children:[d("option",{value:"None",children:"None"}),d("option",{value:"vegan",children:"Vegan"}),d("option",{value:"vegetarian",children:"Vegetarian"}),d("option",{value:"pescatarian",children:"Pescatarian"}),d("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),d("option",{value:"keto",children:"Keto"}),d("option",{value:"gluten-free",children:"Gluten-free"}),d("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),d("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),d("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:l,onChange:m=>s(m.target.value)}),d("button",{type:"submit",children:"Get Meal Plan"}),t?d(bh,{}):null]}),u&&z("table",{children:[d("thead",{children:z("tr",{children:[d("th",{children:"Day"}),d("th",{children:"Meal"}),d("th",{children:"Food"}),d("th",{children:"Calories"})]})}),d("tbody",{children:u.map(m=>{const w=Object.entries(m).filter(([y])=>y!=="Day"&&y!=="TotalCalories"),v=w.reduce((y,[,x])=>y+x.Calories,0);return w.flatMap(([y,x],h)=>[z("tr",{children:[h===0&&d("td",{rowSpan:w.length+1,children:m.Day}),d("td",{children:y}),d("td",{children:x.Meal}),d("td",{children:x.Calories})]},`${y}-${x.Meal}`),h===w.length-1&&d("tr",{children:z("td",{colSpan:"3",align:"right",children:["Total Day Calories : ",v]})},`${y}-TotalCalories`)])})})]})]})}const X6=qy`
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

`,J6="#ffffff",q6="#40a140",Z6=" #ffea00d0",e5=" #28bee4",t5="#ffffff",n5="#25271843",r5=Ve.section`
    background: ${J6};
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
        background: ${t5};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${n5};
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
        background-color: ${Z6};
        color: #000000;
        text-align: middle;
        vertical-align: center;
        box-shadow: 3px 1px 5px black;
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${e5};
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
            background: ${q6};
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
`,i5="#2b3f0124",a5="#eae6e6",o5="#a8a6a6",l5="#000000",s5="#595959f",u5=Ve.section`
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
            background-color: ${i5};

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
            background-color: ${a5};
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
                                color: ${s5};
                            }
                            input {
                                color: ${l5};
                                border: 1px solid ${o5};
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
`,c5="#f4888a",f5=Ve.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${c5};

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
`;function Pf({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>d("li",{className:"error_container",children:z("div",{className:"error_item",children:[d("div",{className:"img__container",children:d("img",{src:"/src/assets/error.png",alt:"error symbol"})}),d("p",{children:a})]})},ht()))}return t?d(f5,{children:d("div",{className:"error container",children:d("div",{className:"row",children:z("section",{className:"container col",children:[d("h3",{children:"Please correct errors"}),d("ul",{className:"error__list",children:e.length>0?n(e):d(Gt,{})})]})})})}):d(Gt,{})}function d5({children:e,setIsDisplayed:t,scrollToRef:n}){b.useRef("");function r(){t(!1)}return d(u5,{children:z("main",{children:[d("div",{onClick:()=>{r()},className:"back__blur "}),d("div",{ref:n,className:"container row ",children:d("section",{id:"modal",className:"",children:e})})]})})}const zs=qi.create({baseURL:"",headers:{"Content-Type":"application/json"},withCredentials:!0});function W0(e,t){return e===t}function p5(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function m5(e,t){const n=await JSON.stringify({token:t,username:e});Uo.set("loggedIn",n),Uo.set("loggedIn",n)}const Ha={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!W0(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await zs.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await m5(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!W0(t,n))throw Error("emails dont match");if(!p5(t))throw Error("emails improper format");return r=await zs.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await zs.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},h5="#08e171dc",g5=Ve.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${h5};

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
`;function Nf({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>d("li",{className:"error_container",children:z("div",{className:"list_item",children:[d("img",{src:"/src/assets/checked.png",alt:"check symbol"}),d("p",{children:a})]})},ht()))}return t?d(g5,{children:d("div",{className:"error container",children:d("div",{className:"row",children:d("section",{className:"container col",children:d("ul",{className:"display_list",children:e.length>0?n(e):d(Gt,{})})})})})}):d(Gt,{})}const v5=Ve.section``;function Y0({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),m=Object.fromEntries(f.entries());console.log("modal form data",m);const w=await e(m)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return z(v5,{children:[z("div",{children:[d(Nf,{listArr:["Password Updated"],showCard:n}),d(Pf,{errorsArr:o,showError:i})]}),z("form",{ref:s,onSubmit:u,children:[d("section",{className:"row title",children:d("h1",{children:"Update Password"})}),d("section",{className:"row form__inputs",children:z("ul",{children:[d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"oldPassword",children:"Old Password"}),d("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},ht()),d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"newPassword",children:"New Password"}),d("input",{id:"newPassword",type:"text",name:"newPassword"})]})},ht()),d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),d("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},ht())]})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})]})}function y5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),m=Object.fromEntries(f.entries());console.log("modal form data",m);const w=await e(m)}catch(f){l([f.message]),a(!0),console.log("error in update form",f.message);return}r(!0)}return z("form",{ref:s,onSubmit:u,children:[z("div",{children:[d(Nf,{listArr:["Email Updated"],showCard:n}),d(Pf,{errorsArr:o,showError:i})]}),d("section",{className:"row title",children:d("h1",{children:"Update Email"})}),d("section",{className:"row form__inputs",children:z("ul",{children:[d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"newEmail",children:"New Email"}),d("input",{id:"newEmail",type:"text",name:"newEmail"})]})},ht()),d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),d("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},ht())]})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})}function w5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),m=Object.fromEntries(f.entries());console.log(" form data",m);const w=await e(m)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return z(Gt,{children:[z("div",{children:[d(Nf,{listArr:["Calorie Preferences Updated"],showCard:n}),d(Pf,{errorsArr:o,showError:i})]}),z("form",{ref:s,onSubmit:u,children:[d("section",{className:"row title",children:d("h1",{children:"Update Calorie preferences"})}),d("section",{className:"row form__inputs",children:d("ul",{children:d("li",{className:"update__field",children:z("div",{className:"input__container",children:[d("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),d("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},ht())})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})]})}function x5(){b.useRef(null);const[e,t]=b.useState(!1);b.useState([]),b.useState(!1),b.useState(!1);const[n,r]=b.useState(d(Y0,{setShowModal:t,handleSubmit:Ha.updatePassword}));return z(r5,{children:[d("section",{className:"modal__container",children:e?d(d5,{setIsDisplayed:t,children:n}):d(Gt,{})}),z("section",{className:"profile-page",children:[z("section",{className:"container profile",children:[z("picture",{children:[d("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),d("img",{src:"/src/assets/spoon.png",alt:"user avatar"})]}),d("h3",{children:"Hi! Bob"}),d("h3",{children:"Email@email.com"})]}),z("section",{className:"container app-config",children:[z("section",{children:[d("h4",{children:"Your Dietary Preferences"}),z("ul",{className:"app-pref",children:[d("li",{children:d("div",{children:d("span",{children:"Gluten Free"})})}),d("li",{children:"Ketogenic"}),d("li",{children:"Vegetarian"}),d("li",{children:"Lacto-Vegetarian"}),d("li",{children:"Ovo-Vegetarian"}),d("li",{children:"Vegan"}),d("li",{children:"Pescetarian"}),d("li",{children:"Paleo"}),d("li",{children:"Primal"})]}),d("div",{className:"controls",children:d("span",{className:"btn",children:"Update Dietary Preferences"})})]}),z("ul",{className:"options",children:[d("li",{className:"btn",onClick:()=>{t(!0),r(d(w5,{setShowModal:t,handleSubmit:Ha.updateCaloric}))},children:d("span",{children:"Update Caloric settings"})}),d("li",{className:"btn",onClick:()=>{t(!0),r(d(y5,{setShowModal:t,handleSubmit:Ha.updateEmail}))},children:d("span",{children:"Update Email"})}),d("li",{onClick:()=>{t(!0),r(d(Y0,{setShowModal:t,handleSubmit:Ha.updatePassword}))},className:"btn",children:d("div",{children:d("span",{children:"Update Password"})})})]})]})]})]})}function S5(){return d(nw,{children:z("div",{className:"App",children:[d("header",{children:d(rw,{})}),z("main",{children:[z(Wv,{children:[d(At,{path:"/",element:d(lw,{})}),d(At,{path:"/search",element:d(L6,{})}),d(At,{path:"/details",element:d(Y6,{})}),d(At,{path:"/saved",element:d(M6,{})}),d(At,{path:"/signup",element:d(uw,{})}),d(At,{path:"/login",element:d(D6,{})}),d(At,{path:"/mealPlanner",element:d(K6,{})}),d(At,{path:"/profile",element:d(x5,{})}),d(At,{path:"/*",element:d("h1",{children:"404 no page"})})]}),d(X6,{})]})]})})}Ns.createRoot(document.getElementById("root")).render(d(nn.StrictMode,{children:d(Xv,{children:d(S5,{})})}));
