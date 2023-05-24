function Nh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function _h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pi={},Oh={get exports(){return Pi},set exports(e){Pi=e}},Go={},b={},Ah={get exports(){return b},set exports(e){b=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),Rh=Symbol.for("react.portal"),Th=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),$h=Symbol.for("react.provider"),jh=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),Dh=Symbol.for("react.memo"),Uh=Symbol.for("react.lazy"),Rf=Symbol.iterator;function Bh(e){return e===null||typeof e!="object"?null:(e=Rf&&e[Rf]||e["@@iterator"],typeof e=="function"?e:null)}var J0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,Z0={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||J0}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function e1(){}e1.prototype=Fr.prototype;function tc(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||J0}var nc=tc.prototype=new e1;nc.constructor=tc;q0(nc,Fr.prototype);nc.isPureReactComponent=!0;var Tf=Array.isArray,t1=Object.prototype.hasOwnProperty,rc={current:null},n1={key:!0,ref:!0,__self:!0,__source:!0};function r1(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)t1.call(t,r)&&!n1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ea,type:e,key:a,ref:o,props:i,_owner:rc.current}}function Hh(e,t){return{$$typeof:ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===ea}function Vh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var If=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vh(""+e.key):t.toString(36)}function Wa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ea:case Rh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Hl(o,0):r,Tf(i)?(n="",e!=null&&(n=e.replace(If,"$&/")+"/"),Wa(i,t,n,"",function(u){return u})):i!=null&&(ic(i)&&(i=Hh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(If,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Tf(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Hl(a,l);o+=Wa(a,t,n,s,i)}else if(s=Bh(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Hl(a,l++),o+=Wa(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function da(e,t,n){if(e==null)return e;var r=[],i=0;return Wa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Wh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ya={transition:null},Yh={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:rc};Q.Children={map:da,forEach:function(e,t,n){da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return da(e,function(){t++}),t},toArray:function(e){return da(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Fr;Q.Fragment=Th;Q.Profiler=Lh;Q.PureComponent=tc;Q.StrictMode=Ih;Q.Suspense=Fh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=q0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)t1.call(t,s)&&!n1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ea,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:jh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$h,_context:e},e.Consumer=e};Q.createElement=r1;Q.createFactory=function(e){var t=r1.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Mh,render:e}};Q.isValidElement=ic;Q.lazy=function(e){return{$$typeof:Uh,_payload:{_status:-1,_result:e},_init:Wh}};Q.memo=function(e,t){return{$$typeof:Dh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ya.transition;Ya.transition={};try{e()}finally{Ya.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Q.useContext=function(e){return Ge.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Q.useId=function(){return Ge.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Q.useRef=function(e){return Ge.current.useRef(e)};Q.useState=function(e){return Ge.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ge.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(Ah);const rn=_h(b),As=Nh({__proto__:null,default:rn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=b,Gh=Symbol.for("react.element"),Kh=Symbol.for("react.fragment"),Xh=Object.prototype.hasOwnProperty,Jh=Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qh={key:!0,ref:!0,__self:!0,__source:!0};function i1(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Xh.call(t,r)&&!qh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gh,type:e,key:a,ref:o,props:i,_owner:Jh.current}}Go.Fragment=Kh;Go.jsx=i1;Go.jsxs=i1;(function(e){e.exports=Go})(Oh);const Ut=Pi.Fragment,f=Pi.jsx,z=Pi.jsxs;var Rs={},Ts={},Zh={get exports(){return Ts},set exports(e){Ts=e}},ut={},Is={},e2={get exports(){return Is},set exports(e){Is=e}},a1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,F){var U=A.length;A.push(F);e:for(;0<U;){var ie=U-1>>>1,T=A[ie];if(0<i(T,F))A[ie]=F,A[U]=T,U=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],U=A.pop();if(U!==F){A[0]=U;e:for(var ie=0,T=A.length,I=T>>>1;ie<I;){var $=2*(ie+1)-1,B=A[$],k=$+1,G=A[k];if(0>i(B,U))k<T&&0>i(G,B)?(A[ie]=G,A[k]=U,ie=k):(A[ie]=B,A[$]=U,ie=$);else if(k<T&&0>i(G,U))A[ie]=G,A[k]=U,ie=k;else break e}}return F}function i(A,F){var U=A.sortIndex-F.sortIndex;return U!==0?U:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,h=3,w=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(A){if(v=!1,y(A),!g)if(n(s)!==null)g=!0,Bt(C);else{var F=n(u);F!==null&&We(S,F.startTime-A)}}function C(A,F){g=!1,v&&(v=!1,m(_),_=-1),w=!0;var U=h;try{for(y(F),d=n(s);d!==null&&(!(d.expirationTime>F)||A&&!ze());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var T=ie(d.expirationTime<=F);F=e.unstable_now(),typeof T=="function"?d.callback=T:d===n(s)&&r(s),y(F)}else r(s);d=n(s)}if(d!==null)var I=!0;else{var $=n(u);$!==null&&We(S,$.startTime-F),I=!1}return I}finally{d=null,h=U,w=!1}}var O=!1,P=null,_=-1,V=5,D=-1;function ze(){return!(e.unstable_now()-D<V)}function Se(){if(P!==null){var A=e.unstable_now();D=A;var F=!0;try{F=P(!0,A)}finally{F?Oe():(O=!1,P=null)}}else O=!1}var Oe;if(typeof p=="function")Oe=function(){p(Se)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Me=it.port2;it.port1.onmessage=Se,Oe=function(){Me.postMessage(null)}}else Oe=function(){x(Se,0)};function Bt(A){P=A,O||(O=!0,Oe())}function We(A,F){_=x(function(){A(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Bt(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var U=h;h=F;try{return A()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var U=h;h=A;try{return F()}finally{h=U}},e.unstable_scheduleCallback=function(A,F,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,A){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=U+T,A={id:c++,callback:F,priorityLevel:A,startTime:U,expirationTime:T,sortIndex:-1},U>ie?(A.sortIndex=U,t(u,A),n(s)===null&&A===n(u)&&(v?(m(_),_=-1):v=!0,We(S,U-ie))):(A.sortIndex=T,t(s,A),g||w||(g=!0,Bt(C))),A},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(A){var F=h;return function(){var U=h;h=F;try{return A.apply(this,arguments)}finally{h=U}}}})(a1);(function(e){e.exports=a1})(e2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=b,st=Is;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l1=new Set,Ni={};function rr(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Ni[e]=t,e=0;e<t.length;e++)l1.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=Object.prototype.hasOwnProperty,t2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lf={},$f={};function n2(e){return Ls.call($f,e)?!0:Ls.call(Lf,e)?!1:t2.test(e)?$f[e]=!0:(Lf[e]=!0,!1)}function r2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i2(e,t,n,r){if(t===null||typeof t>"u"||r2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ac=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ac,oc);je[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ac,oc);je[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ac,oc);je[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function lc(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i2(t,n,i,r)&&(n=null),r||i===null?n2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),$s=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Ms=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),c1=Symbol.for("react.offscreen"),jf=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=jf&&e[jf]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Vl;function ci(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Wl=!1;function Yl(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ci(e):""}function a2(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=Yl(e.type,!1),e;case 11:return e=Yl(e.type.render,!1),e;case 1:return e=Yl(e.type,!0),e;default:return""}}function Fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case or:return"Portal";case $s:return"Profiler";case sc:return"StrictMode";case js:return"Suspense";case Ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u1:return(e.displayName||"Context")+".Consumer";case s1:return(e._context.displayName||"Context")+".Provider";case uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cc:return t=e.displayName||null,t!==null?t:Fs(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Fs(e(t))}catch{}}return null}function o2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fs(t);case 8:return t===sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function f1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l2(e){var t=f1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=l2(e))}function d1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=f1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p1(e,t){t=t.checked,t!=null&&lc(e,"checked",t,!1)}function Us(e,t){p1(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Df(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(fi(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function m1(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function h1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?h1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,g1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s2=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){s2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function v1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function y1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var u2=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ws(e,t){if(t){if(u2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,br=null,Er=null;function Bf(e){if(e=ra(e)){if(typeof Gs!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Zo(t),Gs(e.stateNode,e.type,t))}}function w1(e){br?Er?Er.push(e):Er=[e]:br=e}function x1(){if(br){var e=br,t=Er;if(Er=br=null,Bf(e),t)for(e=0;e<t.length;e++)Bf(t[e])}}function S1(e,t){return e(t)}function k1(){}var Ql=!1;function b1(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return S1(e,t,n)}finally{Ql=!1,(br!==null||Er!==null)&&(k1(),x1())}}function Oi(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ks=!1;if(Xt)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Ks=!1}function c2(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gi=!1,fo=null,po=!1,Xs=null,f2={onError:function(e){gi=!0,fo=e}};function d2(e,t,n,r,i,a,o,l,s){gi=!1,fo=null,c2.apply(f2,arguments)}function p2(e,t,n,r,i,a,o,l,s){if(d2.apply(this,arguments),gi){if(gi){var u=fo;gi=!1,fo=null}else throw Error(N(198));po||(po=!0,Xs=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hf(e){if(ir(e)!==e)throw Error(N(188))}function m2(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Hf(i),e;if(a===r)return Hf(i),t;a=a.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function C1(e){return e=m2(e),e!==null?z1(e):null}function z1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=z1(e);if(t!==null)return t;e=e.sibling}return null}var P1=st.unstable_scheduleCallback,Vf=st.unstable_cancelCallback,h2=st.unstable_shouldYield,g2=st.unstable_requestPaint,ye=st.unstable_now,v2=st.unstable_getCurrentPriorityLevel,dc=st.unstable_ImmediatePriority,N1=st.unstable_UserBlockingPriority,mo=st.unstable_NormalPriority,y2=st.unstable_LowPriority,_1=st.unstable_IdlePriority,Ko=null,Ft=null;function w2(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:k2,x2=Math.log,S2=Math.LN2;function k2(e){return e>>>=0,e===0?32:31-(x2(e)/S2|0)|0}var ga=64,va=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=di(l):(a&=o,a!==0&&(r=di(a)))}else o=n&~i,o!==0?r=di(o):a!==0&&(r=di(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function b2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=b2(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function O1(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function C2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function A1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var R1,mc,T1,I1,L1,qs=!1,ya=[],Sn=null,kn=null,bn=null,Ai=new Map,Ri=new Map,hn=[],z2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function ei(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&mc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P2(e,t,n,r,i){switch(t){case"focusin":return Sn=ei(Sn,e,t,n,r,i),!0;case"dragenter":return kn=ei(kn,e,t,n,r,i),!0;case"mouseover":return bn=ei(bn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ai.set(a,ei(Ai.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ri.set(a,ei(Ri.get(a)||null,e,t,n,r,i)),!0}return!1}function $1(e){var t=Bn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=E1(n),t!==null){e.blockedOn=t,L1(e.priority,function(){T1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=ra(n),t!==null&&mc(t),e.blockedOn=n,!1;t.shift()}return!0}function Yf(e,t,n){Qa(e)&&n.delete(t)}function N2(){qs=!1,Sn!==null&&Qa(Sn)&&(Sn=null),kn!==null&&Qa(kn)&&(kn=null),bn!==null&&Qa(bn)&&(bn=null),Ai.forEach(Yf),Ri.forEach(Yf)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,N2)))}function Ti(e){function t(i){return ti(i,e)}if(0<ya.length){ti(ya[0],e);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ti(Sn,e),kn!==null&&ti(kn,e),bn!==null&&ti(bn,e),Ai.forEach(t),Ri.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)$1(n),n.blockedOn===null&&hn.shift()}var Cr=an.ReactCurrentBatchConfig,go=!0;function _2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=1,hc(e,t,n,r)}finally{te=i,Cr.transition=a}}function O2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=4,hc(e,t,n,r)}finally{te=i,Cr.transition=a}}function hc(e,t,n,r){if(go){var i=Zs(e,t,n,r);if(i===null)is(e,t,r,vo,n),Wf(e,r);else if(P2(i,e,t,n,r))r.stopPropagation();else if(Wf(e,r),t&4&&-1<z2.indexOf(e)){for(;i!==null;){var a=ra(i);if(a!==null&&R1(a),a=Zs(e,t,n,r),a===null&&is(e,t,r,vo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else is(e,t,r,null,n)}}var vo=null;function Zs(e,t,n,r){if(vo=null,e=fc(r),e=Bn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=E1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function j1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v2()){case dc:return 1;case N1:return 4;case mo:case y2:return 16;case _1:return 536870912;default:return 16}default:return 16}}var vn=null,gc=null,Ga=null;function M1(){if(Ga)return Ga;var e,t=gc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ga=i.slice(e,1<r?1-r:void 0)}function Ka(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function Qf(){return!1}function ct(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?wa:Qf,this.isPropagationStopped=Qf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=ct(Dr),na=pe({},Dr,{view:0,detail:0}),A2=ct(na),Kl,Xl,ni,Xo=pe({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(Kl=e.screenX-ni.screenX,Xl=e.screenY-ni.screenY):Xl=Kl=0,ni=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Gf=ct(Xo),R2=pe({},Xo,{dataTransfer:0}),T2=ct(R2),I2=pe({},na,{relatedTarget:0}),Jl=ct(I2),L2=pe({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=ct(L2),j2=pe({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M2=ct(j2),F2=pe({},Dr,{data:0}),Kf=ct(F2),D2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B2[e])?!!t[e]:!1}function yc(){return H2}var V2=pe({},na,{key:function(e){if(e.key){var t=D2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ka(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(e){return e.type==="keypress"?Ka(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ka(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W2=ct(V2),Y2=pe({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xf=ct(Y2),Q2=pe({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),G2=ct(Q2),K2=pe({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),X2=ct(K2),J2=pe({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q2=ct(J2),Z2=[9,13,27,32],wc=Xt&&"CompositionEvent"in window,vi=null;Xt&&"documentMode"in document&&(vi=document.documentMode);var eg=Xt&&"TextEvent"in window&&!vi,F1=Xt&&(!wc||vi&&8<vi&&11>=vi),Jf=String.fromCharCode(32),qf=!1;function D1(e,t){switch(e){case"keyup":return Z2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function tg(e,t){switch(e){case"compositionend":return U1(t);case"keypress":return t.which!==32?null:(qf=!0,Jf);case"textInput":return e=t.data,e===Jf&&qf?null:e;default:return null}}function ng(e,t){if(sr)return e==="compositionend"||!wc&&D1(e,t)?(e=M1(),Ga=gc=vn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F1&&t.locale!=="ko"?null:t.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rg[e.type]:t==="textarea"}function B1(e,t,n,r){w1(r),t=yo(t,"onChange"),0<t.length&&(n=new vc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yi=null,Ii=null;function ig(e){Z1(e,0)}function Jo(e){var t=fr(e);if(d1(t))return e}function ag(e,t){if(e==="change")return t}var H1=!1;if(Xt){var ql;if(Xt){var Zl="oninput"in document;if(!Zl){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Zl=typeof ed.oninput=="function"}ql=Zl}else ql=!1;H1=ql&&(!document.documentMode||9<document.documentMode)}function td(){yi&&(yi.detachEvent("onpropertychange",V1),Ii=yi=null)}function V1(e){if(e.propertyName==="value"&&Jo(Ii)){var t=[];B1(t,Ii,e,fc(e)),b1(ig,t)}}function og(e,t,n){e==="focusin"?(td(),yi=t,Ii=n,yi.attachEvent("onpropertychange",V1)):e==="focusout"&&td()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Ii)}function sg(e,t){if(e==="click")return Jo(t)}function ug(e,t){if(e==="input"||e==="change")return Jo(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:cg;function Li(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ls.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function W1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?W1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Y1(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fg(e){var t=Y1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&W1(n.ownerDocument.documentElement,n)){if(r!==null&&xc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=rd(n,a);var o=rd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dg=Xt&&"documentMode"in document&&11>=document.documentMode,ur=null,eu=null,wi=null,tu=!1;function id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||ur==null||ur!==co(r)||(r=ur,"selectionStart"in r&&xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Li(wi,r)||(wi=r,r=yo(eu,"onSelect"),0<r.length&&(t=new vc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},es={},Q1={};Xt&&(Q1=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function qo(e){if(es[e])return es[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Q1)return es[e]=t[n];return e}var G1=qo("animationend"),K1=qo("animationiteration"),X1=qo("animationstart"),J1=qo("transitionend"),q1=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){q1.set(e,t),rr(t,[e])}for(var ts=0;ts<ad.length;ts++){var ns=ad[ts],pg=ns.toLowerCase(),mg=ns[0].toUpperCase()+ns.slice(1);jn(pg,"on"+mg)}jn(G1,"onAnimationEnd");jn(K1,"onAnimationIteration");jn(X1,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(J1,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function od(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p2(r,t,void 0,e),e.currentTarget=null}function Z1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;od(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;od(i,l,u),a=s}}}if(po)throw e=Xs,po=!1,Xs=null,e}function oe(e,t){var n=t[ou];n===void 0&&(n=t[ou]=new Set);var r=e+"__bubble";n.has(r)||(ep(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),ep(n,e,r,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[Sa]){e[Sa]=!0,l1.forEach(function(n){n!=="selectionchange"&&(hg.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,rs("selectionchange",!1,t))}}function ep(e,t,n,r){switch(j1(t)){case 1:var i=_2;break;case 4:i=O2;break;default:i=hc}n=i.bind(null,t,n,e),i=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function is(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}b1(function(){var u=a,c=fc(n),d=[];e:{var h=q1.get(e);if(h!==void 0){var w=vc,g=e;switch(e){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":w=W2;break;case"focusin":g="focus",w=Jl;break;case"focusout":g="blur",w=Jl;break;case"beforeblur":case"afterblur":w=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=T2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=G2;break;case G1:case K1:case X1:w=$2;break;case J1:w=X2;break;case"scroll":w=A2;break;case"wheel":w=q2;break;case"copy":case"cut":case"paste":w=M2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xf}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Oi(p,m),S!=null&&v.push(ji(p,S,y)))),x)break;p=p.return}0<v.length&&(h=new w(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Qs&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Jt]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Bn(g):null,g!==null&&(x=ir(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=Gf,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Xf,S="onPointerLeave",m="onPointerEnter",p="pointer"),x=w==null?h:fr(w),y=g==null?h:fr(g),h=new v(S,p+"leave",w,n,c),h.target=x,h.relatedTarget=y,S=null,Bn(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=x,S=v),x=S,w&&g)t:{for(v=w,m=g,p=0,y=v;y;y=ar(y))p++;for(y=0,S=m;S;S=ar(S))y++;for(;0<p-y;)v=ar(v),p--;for(;0<y-p;)m=ar(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ar(v),m=ar(m)}v=null}else v=null;w!==null&&ld(d,h,w,v,!1),g!==null&&x!==null&&ld(d,x,g,v,!0)}}e:{if(h=u?fr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=ag;else if(Zf(h))if(H1)C=ug;else{C=lg;var O=og}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=sg);if(C&&(C=C(e,u))){B1(d,C,n,c);break e}O&&O(e,h,u),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Bs(h,"number",h.value)}switch(O=u?fr(u):window,e){case"focusin":(Zf(O)||O.contentEditable==="true")&&(ur=O,eu=u,wi=null);break;case"focusout":wi=eu=ur=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,id(d,n,c);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":id(d,n,c)}var P;if(wc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else sr?D1(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(F1&&n.locale!=="ko"&&(sr||_!=="onCompositionStart"?_==="onCompositionEnd"&&sr&&(P=M1()):(vn=c,gc="value"in vn?vn.value:vn.textContent,sr=!0)),O=yo(u,_),0<O.length&&(_=new Kf(_,e,null,n,c),d.push({event:_,listeners:O}),P?_.data=P:(P=U1(n),P!==null&&(_.data=P)))),(P=eg?tg(e,n):ng(e,n))&&(u=yo(u,"onBeforeInput"),0<u.length&&(c=new Kf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Z1(d,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Oi(e,n),a!=null&&r.unshift(ji(e,a,i)),a=Oi(e,t),a!=null&&r.push(ji(e,a,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ld(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Oi(n,a),s!=null&&o.unshift(ji(n,s,l))):i||(s=Oi(n,a),s!=null&&o.push(ji(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(vg,"")}function ka(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(N(425))}function wo(){}var nu=null,ru=null;function iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(xg)}:au;function xg(e){setTimeout(function(){throw e})}function as(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),It="__reactFiber$"+Ur,Mi="__reactProps$"+Ur,Jt="__reactContainer$"+Ur,ou="__reactEvents$"+Ur,Sg="__reactListeners$"+Ur,kg="__reactHandles$"+Ur;function Bn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[It])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[It]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Zo(e){return e[Mi]||null}var lu=[],dr=-1;function Mn(e){return{current:e}}function se(e){0>dr||(e.current=lu[dr],lu[dr]=null,dr--)}function ae(e,t){dr++,lu[dr]=e.current,e.current=t}var Rn={},He=Mn(Rn),tt=Mn(!1),Kn=Rn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function xo(){se(tt),se(He)}function fd(e,t,n){if(He.current!==Rn)throw Error(N(168));ae(He,t),ae(tt,n)}function tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,o2(e)||"Unknown",i));return pe({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Kn=He.current,ae(He,e),ae(tt,tt.current),!0}function dd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=tp(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,se(tt),se(He),ae(He,e)):se(tt),ae(tt,n)}var Wt=null,el=!1,os=!1;function np(e){Wt===null?Wt=[e]:Wt.push(e)}function bg(e){el=!0,np(e)}function Fn(){if(!os&&Wt!==null){os=!0;var e=0,t=te;try{var n=Wt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,el=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),P1(dc,Fn),i}finally{te=t,os=!1}}return null}var pr=[],mr=0,ko=null,bo=0,pt=[],mt=0,Xn=null,Yt=1,Qt="";function Dn(e,t){pr[mr++]=bo,pr[mr++]=ko,ko=e,bo=t}function rp(e,t,n){pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=Xn,Xn=e;var r=Yt;e=Qt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Nt(t)+i|n<<i|r,Qt=a+e}else Yt=1<<a|n<<i|r,Qt=e}function Sc(e){e.return!==null&&(Dn(e,1),rp(e,1,0))}function kc(e){for(;e===ko;)ko=pr[--mr],pr[mr]=null,bo=pr[--mr],pr[mr]=null;for(;e===Xn;)Xn=pt[--mt],pt[mt]=null,Qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var lt=null,ot=null,ce=!1,zt=null;function ip(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,ot=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,ot=null,!0):!1;default:return!1}}function su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uu(e){if(ce){var t=ot;if(t){var n=t;if(!pd(e,t)){if(su(e))throw Error(N(418));t=En(n.nextSibling);var r=lt;t&&pd(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,ce=!1,lt=e)}}else{if(su(e))throw Error(N(418));e.flags=e.flags&-4097|2,ce=!1,lt=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function ba(e){if(e!==lt)return!1;if(!ce)return md(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!iu(e.type,e.memoizedProps)),t&&(t=ot)){if(su(e))throw ap(),Error(N(418));for(;t;)ip(e,t),t=En(t.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=lt?En(e.stateNode.nextSibling):null;return!0}function ap(){for(var e=ot;e;)e=En(e.nextSibling)}function Ar(){ot=lt=null,ce=!1}function bc(e){zt===null?zt=[e]:zt.push(e)}var Eg=an.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Eo=Mn(null),Co=null,hr=null,Ec=null;function Cc(){Ec=hr=Co=null}function zc(e){var t=Eo.current;se(Eo),e._currentValue=t}function cu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){Co=e,Ec=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(Co===null)throw Error(N(308));hr=e,Co.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Hn=null;function Pc(e){Hn===null?Hn=[e]:Hn.push(e)}function op(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}function hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;mn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,w=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(w,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,d,h):g,h==null)break e;d=pe({},d,h);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,s=d):c=c.next=w,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=d}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var sp=new o1.Component().refs;function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Pn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(_t(t,e,i,r),Xa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Pn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(_t(t,e,i,r),Xa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Pn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(_t(t,e,r,n),Xa(t,e,r))}};function vd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Li(n,r)||!Li(i,a):!0}function up(e,t,n){var r=!1,i=Rn,a=t.contextType;return typeof a=="object"&&a!==null?a=yt(a):(i=nt(t)?Kn:He.current,r=t.contextTypes,a=(r=r!=null)?Or(e,i):Rn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function du(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=sp,Nc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=yt(a):(a=nt(t)?Kn:He.current,i.context=Or(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===sp&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wd(e){var t=e._init;return t(e._payload)}function cp(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Nn(m,p),m.index=0,m.sibling=null,m}function a(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,S){return p===null||p.tag!==6?(p=ps(y,m.mode,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function s(m,p,y,S){var C=y.type;return C===lr?c(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&wd(C)===p.type)?(S=i(p,y.props),S.ref=ri(m,p,y),S.return=m,S):(S=no(y.type,y.key,y.props,null,m.mode,S),S.ref=ri(m,p,y),S.return=m,S)}function u(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ms(y,m.mode,S),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,S,C){return p===null||p.tag!==7?(p=Gn(y,m.mode,S,C),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ps(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return y=no(p.type,p.key,p.props,null,m.mode,y),y.ref=ri(m,null,p),y.return=m,y;case or:return p=ms(p,m.mode,y),p.return=m,p;case pn:var S=p._init;return d(m,S(p._payload),y)}if(fi(p)||qr(p))return p=Gn(p,m.mode,y,null),p.return=m,p;Ea(m,p)}return null}function h(m,p,y,S){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:return y.key===C?s(m,p,y,S):null;case or:return y.key===C?u(m,p,y,S):null;case pn:return C=y._init,h(m,p,C(y._payload),S)}if(fi(y)||qr(y))return C!==null?null:c(m,p,y,S,null);Ea(m,y)}return null}function w(m,p,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,l(p,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pa:return m=m.get(S.key===null?y:S.key)||null,s(p,m,S,C);case or:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,C);case pn:var O=S._init;return w(m,p,y,O(S._payload),C)}if(fi(S)||qr(S))return m=m.get(y)||null,c(p,m,S,C,null);Ea(p,S)}return null}function g(m,p,y,S){for(var C=null,O=null,P=p,_=p=0,V=null;P!==null&&_<y.length;_++){P.index>_?(V=P,P=null):V=P.sibling;var D=h(m,P,y[_],S);if(D===null){P===null&&(P=V);break}e&&P&&D.alternate===null&&t(m,P),p=a(D,p,_),O===null?C=D:O.sibling=D,O=D,P=V}if(_===y.length)return n(m,P),ce&&Dn(m,_),C;if(P===null){for(;_<y.length;_++)P=d(m,y[_],S),P!==null&&(p=a(P,p,_),O===null?C=P:O.sibling=P,O=P);return ce&&Dn(m,_),C}for(P=r(m,P);_<y.length;_++)V=w(P,m,_,y[_],S),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?_:V.key),p=a(V,p,_),O===null?C=V:O.sibling=V,O=V);return e&&P.forEach(function(ze){return t(m,ze)}),ce&&Dn(m,_),C}function v(m,p,y,S){var C=qr(y);if(typeof C!="function")throw Error(N(150));if(y=C.call(y),y==null)throw Error(N(151));for(var O=C=null,P=p,_=p=0,V=null,D=y.next();P!==null&&!D.done;_++,D=y.next()){P.index>_?(V=P,P=null):V=P.sibling;var ze=h(m,P,D.value,S);if(ze===null){P===null&&(P=V);break}e&&P&&ze.alternate===null&&t(m,P),p=a(ze,p,_),O===null?C=ze:O.sibling=ze,O=ze,P=V}if(D.done)return n(m,P),ce&&Dn(m,_),C;if(P===null){for(;!D.done;_++,D=y.next())D=d(m,D.value,S),D!==null&&(p=a(D,p,_),O===null?C=D:O.sibling=D,O=D);return ce&&Dn(m,_),C}for(P=r(m,P);!D.done;_++,D=y.next())D=w(P,m,_,D.value,S),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?_:D.key),p=a(D,p,_),O===null?C=D:O.sibling=D,O=D);return e&&P.forEach(function(Se){return t(m,Se)}),ce&&Dn(m,_),C}function x(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===lr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:e:{for(var C=y.key,O=p;O!==null;){if(O.key===C){if(C=y.type,C===lr){if(O.tag===7){n(m,O.sibling),p=i(O,y.props.children),p.return=m,m=p;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&wd(C)===O.type){n(m,O.sibling),p=i(O,y.props),p.ref=ri(m,O,y),p.return=m,m=p;break e}n(m,O);break}else t(m,O);O=O.sibling}y.type===lr?(p=Gn(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=no(y.type,y.key,y.props,null,m.mode,S),S.ref=ri(m,p,y),S.return=m,m=S)}return o(m);case or:e:{for(O=y.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ms(y,m.mode,S),p.return=m,m=p}return o(m);case pn:return O=y._init,x(m,p,O(y._payload),S)}if(fi(y))return g(m,p,y,S);if(qr(y))return v(m,p,y,S);Ea(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=ps(y,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return x}var Rr=cp(!0),fp=cp(!1),ia={},Dt=Mn(ia),Fi=Mn(ia),Di=Mn(ia);function Vn(e){if(e===ia)throw Error(N(174));return e}function _c(e,t){switch(ae(Di,t),ae(Fi,e),ae(Dt,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vs(t,e)}se(Dt),ae(Dt,t)}function Tr(){se(Dt),se(Fi),se(Di)}function dp(e){Vn(Di.current);var t=Vn(Dt.current),n=Vs(t,e.type);t!==n&&(ae(Fi,e),ae(Dt,n))}function Oc(e){Fi.current===e&&(se(Dt),se(Fi))}var fe=Mn(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function Ac(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var Ja=an.ReactCurrentDispatcher,ss=an.ReactCurrentBatchConfig,Jn=0,de=null,ke=null,Pe=null,No=!1,xi=!1,Ui=0,Cg=0;function De(){throw Error(N(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,a){if(Jn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?_g:Og,e=n(r,i),xi){a=0;do{if(xi=!1,Ui=0,25<=a)throw Error(N(301));a+=1,Pe=ke=null,t.updateQueue=null,Ja.current=Ag,e=n(r,i)}while(xi)}if(Ja.current=_o,t=ke!==null&&ke.next!==null,Jn=0,Pe=ke=de=null,No=!1,t)throw Error(N(300));return e}function Ic(){var e=Ui!==0;return Ui=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function wt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Pe===null?de.memoizedState:Pe.next;if(t!==null)Pe=t,ke=e;else{if(e===null)throw Error(N(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Bi(e,t){return typeof t=="function"?t(e):t}function us(e){var t=wt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((Jn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,de.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,Ot(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cs(e){var t=wt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ot(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function pp(){}function mp(e,t){var n=de,r=wt(),i=t(),a=!Ot(r.memoizedState,i);if(a&&(r.memoizedState=i,et=!0),r=r.queue,Lc(vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Hi(9,gp.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(N(349));Jn&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&wp(e)}function vp(e,t,n){return n(function(){yp(t)&&wp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function wp(e){var t=qt(e,1);t!==null&&_t(t,e,1,-1)}function xd(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ng.bind(null,de,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xp(){return wt().memoizedState}function qa(e,t,n,r){var i=Tt();de.flags|=e,i.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var i=wt();r=r===void 0?null:r;var a=void 0;if(ke!==null){var o=ke.memoizedState;if(a=o.destroy,r!==null&&Rc(r,o.deps)){i.memoizedState=Hi(t,n,a,r);return}}de.flags|=e,i.memoizedState=Hi(1|t,n,a,r)}function Sd(e,t){return qa(8390656,8,e,t)}function Lc(e,t){return nl(2048,8,e,t)}function Sp(e,t){return nl(4,2,e,t)}function kp(e,t){return nl(4,4,e,t)}function bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ep(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,bp.bind(null,t,e),n)}function $c(){}function Cp(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pp(e,t,n){return Jn&21?(Ot(n,t)||(n=O1(),de.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function zg(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{te=n,ss.transition=r}}function Np(){return wt().memoizedState}function Pg(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(e))Op(t,n);else if(n=op(e,t,n,r),n!==null){var i=Qe();_t(n,e,r,i),Ap(n,t,r)}}function Ng(e,t,n){var r=Pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(e))Op(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,o)){var s=t.interleaved;s===null?(i.next=i,Pc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=op(e,t,i,r),n!==null&&(i=Qe(),_t(n,e,r,i),Ap(n,t,r))}}function _p(e){var t=e.alternate;return e===de||t!==null&&t===de}function Op(e,t){xi=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}var _o={readContext:yt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},_g={readContext:yt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qa(4194308,4,bp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return qa(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pg.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:$c,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=zg.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Tt();if(ce){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ne===null)throw Error(N(349));Jn&30||hp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Sd(vp.bind(null,r,a,e),[e]),r.flags|=2048,Hi(9,gp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ne.identifierPrefix;if(ce){var n=Qt,r=Yt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:yt,useCallback:Cp,useContext:yt,useEffect:Lc,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:zp,useReducer:us,useRef:xp,useState:function(){return us(Bi)},useDebugValue:$c,useDeferredValue:function(e){var t=wt();return Pp(t,ke.memoizedState,e)},useTransition:function(){var e=us(Bi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1},Ag={readContext:yt,useCallback:Cp,useContext:yt,useEffect:Lc,useImperativeHandle:Ep,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:zp,useReducer:cs,useRef:xp,useState:function(){return cs(Bi)},useDebugValue:$c,useDeferredValue:function(e){var t=wt();return ke===null?t.memoizedState=e:Pp(t,ke.memoizedState,e)},useTransition:function(){var e=cs(Bi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1};function Ir(e,t){try{var n="",r=t;do n+=a2(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,bu=r),pu(e,t)},n}function Tp(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){pu(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yg.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Tg=an.ReactCurrentOwner,et=!1;function Ye(e,t,n,r){t.child=e===null?fp(t,null,n,r):Rr(t,e.child,n,r)}function Cd(e,t,n,r,i){n=n.render;var a=t.ref;return zr(t,i),r=Tc(e,t,n,r,a,i),n=Ic(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&n&&Sc(t),t.flags|=1,Ye(e,t,r,i),t.child)}function zd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Vc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ip(e,t,a,r,i)):(e=no(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(o,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Nn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ip(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Li(a,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return mu(e,t,n,r,i)}function Lp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(vr,at),at|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(vr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ae(vr,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ae(vr,at),at|=r;return Ye(e,t,i,n),t.child}function $p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,n,r,i){var a=nt(n)?Kn:He.current;return a=Or(t,a),zr(t,i),n=Tc(e,t,n,r,a,i),r=Ic(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&r&&Sc(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Pd(e,t,n,r,i){if(nt(n)){var a=!0;So(t)}else a=!1;if(zr(t,i),t.stateNode===null)Za(e,t),up(t,n,r),du(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=nt(n)?Kn:He.current,u=Or(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&yd(t,o,r,u),mn=!1;var h=t.memoizedState;o.state=h,zo(t,r,o,i),s=t.memoizedState,l!==r||h!==s||tt.current||mn?(typeof c=="function"&&(fu(t,n,c,r),s=t.memoizedState),(l=mn||vd(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,lp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Et(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=nt(n)?Kn:He.current,s=Or(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&yd(t,o,r,s),mn=!1,h=t.memoizedState,o.state=h,zo(t,r,o,i);var g=t.memoizedState;l!==d||h!==g||tt.current||mn?(typeof w=="function"&&(fu(t,n,w,r),g=t.memoizedState),(u=mn||vd(t,n,u,r,h,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return hu(e,t,n,r,a,i)}function hu(e,t,n,r,i,a){$p(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dd(t,n,!1),Zt(e,t,a);r=t.stateNode,Tg.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rr(t,e.child,null,a),t.child=Rr(t,null,l,a)):Ye(e,t,l,a),t.memoizedState=r.state,i&&dd(t,n,!0),t.child}function jp(e){var t=e.stateNode;t.pendingContext?fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fd(e,t.context,!1),_c(e,t.containerInfo)}function Nd(e,t,n,r,i){return Ar(),bc(i),t.flags|=256,Ye(e,t,n,r),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=al(o,r,0,null),e=Gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vu(n),t.memoizedState=gu,e):jc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ig(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Nn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Nn(l,a):(a=Gn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=gu,r}return a=e.child,e=a.sibling,r=Nn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jc(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&bc(r),Rr(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ig(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(N(422))),Ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=al({mode:"visible",children:r.children},i,0,null),a=Gn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rr(t,e.child,null,o),t.child.memoizedState=vu(o),t.memoizedState=gu,a);if(!(t.mode&1))return Ca(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(N(419)),r=fs(a,r,void 0),Ca(e,t,o,r)}if(l=(o&e.childLanes)!==0,et||l){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,qt(e,i),_t(r,e,i,-1))}return Hc(),r=fs(Error(N(421))),Ca(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Qg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ot=En(i.nextSibling),lt=t,ce=!0,zt=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=Xn,Yt=e.id,Qt=e.overflow,Xn=t),t=jc(t,r.children),t.flags|=4096,t)}function _d(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cu(e.return,t,n)}function ds(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ye(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,n,t);else if(e.tag===19)_d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ds(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ds(t,!0,n,null,a);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lg(e,t,n){switch(t.tag){case 3:jp(t),Ar();break;case 5:dp(t);break;case 1:nt(t.type)&&So(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(Eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(ae(fe,fe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Lp(e,t,n)}return Zt(e,t,n)}var Dp,yu,Up,Bp;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yu=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Dt.current);var a=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Hs(e,i),r=Hs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}Ws(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ii(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $g(e,t,n){var r=t.pendingProps;switch(kc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return nt(t.type)&&xo(),Ue(t),null;case 3:return r=t.stateNode,Tr(),se(tt),se(He),Ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ba(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zt!==null&&(zu(zt),zt=null))),yu(e,t),Ue(t),null;case 5:Oc(t);var i=Vn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ue(t),null}if(e=Vn(Dt.current),ba(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[Mi]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)oe(pi[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Mf(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":Df(r,a),oe("invalid",r)}Ws(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):Ni.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ma(r),Ff(r,a,!0);break;case"textarea":ma(r),Uf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=h1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[Mi]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ys(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)oe(pi[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Mf(e,r),i=Ds(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Df(e,r),i=Hs(e,r),oe("invalid",e);break;default:i=r}Ws(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?y1(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&g1(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_i(e,s):typeof s=="number"&&_i(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ni.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&lc(e,a,s,o))}switch(n){case"input":ma(e),Ff(e,r,!1);break;case"textarea":ma(e),Uf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Vn(Di.current),Vn(Dt.current),ba(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ue(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ot!==null&&t.mode&1&&!(t.flags&128))ap(),Ar(),t.flags|=98560,a=!1;else if(a=ba(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[It]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else zt!==null&&(zu(zt),zt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?be===0&&(be=3):Hc())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Tr(),yu(e,t),e===null&&$i(t.stateNode.containerInfo),Ue(t),null;case 10:return zc(t.type._context),Ue(t),null;case 17:return nt(t.type)&&xo(),Ue(t),null;case 19:if(se(fe),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ii(a,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Po(e),o!==null){for(t.flags|=128,ii(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Lr&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304)}else{if(!r)if(e=Po(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Ue(t),null}else 2*ye()-a.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ii(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function jg(e,t){switch(kc(t),t.tag){case 1:return nt(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),se(tt),se(He),Ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Tr(),null;case 10:return zc(t.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var za=!1,Be=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,j=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function wu(e,t,n){try{n()}catch(r){he(e,t,r)}}var Od=!1;function Fg(e,t){if(nu=go,e=Y1(),xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)h=d,d=w;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=o),h===a&&++c===r&&(s=o),(w=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:e,selectionRange:n},go=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Et(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Od,Od=!1,g}function Si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wu(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Mi],delete t[ou],delete t[Sg],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Su(e,t,n),e=e.sibling;e!==null;)Su(e,t,n),e=e.sibling}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}var Le=null,Ct=!1;function un(e,t,n){for(n=n.child;n!==null;)Wp(e,t,n),n=n.sibling}function Wp(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ko,n)}catch{}switch(n.tag){case 5:Be||gr(n,t);case 6:var r=Le,i=Ct;Le=null,un(e,t,n),Le=r,Ct=i,Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?as(e.parentNode,n):e.nodeType===1&&as(e,n),Ti(e)):as(Le,n.stateNode));break;case 4:r=Le,i=Ct,Le=n.stateNode.containerInfo,Ct=!0,un(e,t,n),Le=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&wu(n,t,o),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Be&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,un(e,t,n),Be=r):un(e,t,n);break;default:un(e,t,n)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mg),t.forEach(function(r){var i=Gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Ct=!1;break e;case 3:Le=l.stateNode.containerInfo,Ct=!0;break e;case 4:Le=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Le===null)throw Error(N(160));Wp(a,o,i),Le=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}function Yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),At(e),r&4){try{Si(3,e,e.return),rl(3,e)}catch(v){he(e,e.return,v)}try{Si(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:kt(t,e),At(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(kt(t,e),At(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{_i(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&p1(i,a),Ys(l,o);var u=Ys(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?y1(i,d):c==="dangerouslySetInnerHTML"?g1(i,d):c==="children"?_i(i,d):lc(i,c,d,u)}switch(l){case"input":Us(i,a);break;case"textarea":m1(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?kr(i,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?kr(i,!!a.multiple,a.defaultValue,!0):kr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Mi]=a}catch(v){he(e,e.return,v)}}break;case 6:if(kt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){he(e,e.return,v)}}break;case 3:if(kt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:kt(t,e),At(e);break;case 13:kt(t,e),At(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Dc=ye())),r&4&&Rd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,kt(t,e),Be=u):kt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:Si(4,h,h.return);break;case 1:gr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:gr(h,h.return);break;case 22:if(h.memoizedState!==null){Id(d);continue}}w!==null?(w.return=h,j=w):Id(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=v1("display",o))}catch(v){he(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){he(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),At(e),r&4&&Rd(e);break;case 21:break;default:kt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_i(i,""),r.flags&=-33);var a=Ad(e);ku(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ad(e);Su(e,l,o);break;default:throw Error(N(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dg(e,t,n){j=e,Qp(e)}function Qp(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Be;l=za;var u=Be;if(za=o,(Be=s)&&!u)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Ld(i):s!==null?(s.return=o,j=s):Ld(i);for(;a!==null;)j=a,Qp(a),a=a.sibling;j=i,za=l,Be=u}Td(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):Td(e)}}function Td(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&gd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ti(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Be||t.flags&512&&xu(t)}catch(h){he(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Id(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ld(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{xu(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{xu(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var Ug=Math.ceil,Oo=an.ReactCurrentDispatcher,Mc=an.ReactCurrentOwner,vt=an.ReactCurrentBatchConfig,X=0,Ne=null,we=null,$e=0,at=0,vr=Mn(0),be=0,Vi=null,qn=0,il=0,Fc=0,ki=null,Ze=null,Dc=0,Lr=1/0,Vt=null,Ao=!1,bu=null,zn=null,Pa=!1,yn=null,Ro=0,bi=0,Eu=null,eo=-1,to=0;function Qe(){return X&6?ye():eo!==-1?eo:eo=ye()}function Pn(e){return e.mode&1?X&2&&$e!==0?$e&-$e:Eg.transition!==null?(to===0&&(to=O1()),to):(e=te,e!==0||(e=window.event,e=e===void 0?16:j1(e.type)),e):1}function _t(e,t,n,r){if(50<bi)throw bi=0,Eu=null,Error(N(185));ta(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(il|=n),be===4&&gn(e,$e)),rt(e,r),n===1&&X===0&&!(t.mode&1)&&(Lr=ye()+500,el&&Fn()))}function rt(e,t){var n=e.callbackNode;E2(e,t);var r=ho(e,e===Ne?$e:0);if(r===0)n!==null&&Vf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vf(n),t===1)e.tag===0?bg($d.bind(null,e)):np($d.bind(null,e)),wg(function(){!(X&6)&&Fn()}),n=null;else{switch(A1(r)){case 1:n=dc;break;case 4:n=N1;break;case 16:n=mo;break;case 536870912:n=_1;break;default:n=mo}n=tm(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(eo=-1,to=0,X&6)throw Error(N(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=ho(e,e===Ne?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=To(e,r);else{t=r;var i=X;X|=2;var a=Xp();(Ne!==e||$e!==t)&&(Vt=null,Lr=ye()+500,Qn(e,t));do try{Vg();break}catch(l){Kp(e,l)}while(1);Cc(),Oo.current=a,X=i,we!==null?t=0:(Ne=null,$e=0,t=be)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=Cu(e,i))),t===1)throw n=Vi,Qn(e,0),gn(e,r),rt(e,ye()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bg(i)&&(t=To(e,r),t===2&&(a=Js(e),a!==0&&(r=a,t=Cu(e,a))),t===1))throw n=Vi,Qn(e,0),gn(e,r),rt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Un(e,Ze,Vt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Dc+500-ye(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=au(Un.bind(null,e,Ze,Vt),t);break}Un(e,Ze,Vt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ug(r/1960))-r,10<r){e.timeoutHandle=au(Un.bind(null,e,Ze,Vt),r);break}Un(e,Ze,Vt);break;case 5:Un(e,Ze,Vt);break;default:throw Error(N(329))}}}return rt(e,ye()),e.callbackNode===n?Gp.bind(null,e):null}function Cu(e,t){var n=ki;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=To(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&zu(t)),e}function zu(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Bg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ot(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Fc,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function $d(e){if(X&6)throw Error(N(327));Pr();var t=ho(e,0);if(!(t&1))return rt(e,ye()),null;var n=To(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=Cu(e,r))}if(n===1)throw n=Vi,Qn(e,0),gn(e,t),rt(e,ye()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,Ze,Vt),rt(e,ye()),null}function Uc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Lr=ye()+500,el&&Fn())}}function Zn(e){yn!==null&&yn.tag===0&&!(X&6)&&Pr();var t=X;X|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,e)return e()}finally{te=r,vt.transition=n,X=t,!(X&6)&&Fn()}}function Bc(){at=vr.current,se(vr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yg(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Tr(),se(tt),se(He),Ac();break;case 5:Oc(r);break;case 4:Tr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:zc(r.type._context);break;case 22:case 23:Bc()}n=n.return}if(Ne=e,we=e=Nn(e.current,null),$e=at=t,be=0,Vi=null,Fc=il=qn=0,Ze=ki=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Hn=null}return e}function Kp(e,t){do{var n=we;try{if(Cc(),Ja.current=_o,No){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(Jn=0,Pe=ke=de=null,xi=!1,Ui=0,Mc.current=null,n===null||n.return===null){be=1,Vi=t,we=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=$e,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=bd(o);if(w!==null){w.flags&=-257,Ed(w,o,l,a,t),w.mode&1&&kd(a,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){kd(a,u,t),Hc();break e}s=Error(N(426))}}else if(ce&&l.mode&1){var x=bd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ed(x,o,l,a,t),bc(Ir(s,l));break e}}a=s=Ir(s,l),be!==4&&(be=2),ki===null?ki=[a]:ki.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Rp(a,s,t);hd(a,m);break e;case 1:l=s;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zn===null||!zn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Tp(a,l,t);hd(a,S);break e}}a=a.return}while(a!==null)}qp(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Xp(){var e=Oo.current;return Oo.current=_o,e===null?_o:e}function Hc(){(be===0||be===3||be===2)&&(be=4),Ne===null||!(qn&268435455)&&!(il&268435455)||gn(Ne,$e)}function To(e,t){var n=X;X|=2;var r=Xp();(Ne!==e||$e!==t)&&(Vt=null,Qn(e,t));do try{Hg();break}catch(i){Kp(e,i)}while(1);if(Cc(),X=n,Oo.current=r,we!==null)throw Error(N(261));return Ne=null,$e=0,be}function Hg(){for(;we!==null;)Jp(we)}function Vg(){for(;we!==null&&!h2();)Jp(we)}function Jp(e){var t=em(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?qp(e):we=t,Mc.current=null}function qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jg(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,we=null;return}}else if(n=$g(n,t,at),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);be===0&&(be=5)}function Un(e,t,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,Wg(e,t,n,r)}finally{vt.transition=i,te=r}return null}function Wg(e,t,n,r){do Pr();while(yn!==null);if(X&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(C2(e,a),e===Ne&&(we=Ne=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,tm(mo,function(){return Pr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vt.transition,vt.transition=null;var o=te;te=1;var l=X;X|=4,Mc.current=null,Fg(e,n),Yp(n,e),fg(ru),go=!!nu,ru=nu=null,e.current=n,Dg(n),g2(),X=l,te=o,vt.transition=a}else e.current=n;if(Pa&&(Pa=!1,yn=e,Ro=i),a=e.pendingLanes,a===0&&(zn=null),w2(n.stateNode),rt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,e=bu,bu=null,e;return Ro&1&&e.tag!==0&&Pr(),a=e.pendingLanes,a&1?e===Eu?bi++:(bi=0,Eu=e):bi=0,Fn(),null}function Pr(){if(yn!==null){var e=A1(Ro),t=vt.transition,n=te;try{if(vt.transition=null,te=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Ro=0,X&6)throw Error(N(331));var i=X;for(X|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Si(8,c,a)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,w=c.return;if(Hp(c),c===u){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Si(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var p=e.current;for(j=p;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=p;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(C){he(l,l.return,C)}if(l===o){j=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,j=S;break e}j=l.return}}if(X=i,Fn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ko,e)}catch{}r=!0}return r}finally{te=n,vt.transition=t}}return!1}function jd(e,t,n){t=Ir(n,t),t=Rp(e,t,1),e=Cn(e,t,1),t=Qe(),e!==null&&(ta(e,1,t),rt(e,t))}function he(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Ir(n,e),e=Tp(t,e,1),t=Cn(t,e,1),e=Qe(),t!==null&&(ta(t,1,e),rt(t,e));break}}t=t.return}}function Yg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&($e&n)===n&&(be===4||be===3&&($e&130023424)===$e&&500>ye()-Dc?Qn(e,0):Fc|=n),rt(e,t)}function Zp(e,t){t===0&&(e.mode&1?(t=va,va<<=1,!(va&130023424)&&(va=4194304)):t=1);var n=Qe();e=qt(e,t),e!==null&&(ta(e,t,n),rt(e,n))}function Qg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function Gg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Zp(e,n)}var em;em=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Lg(e,t,n);et=!!(e.flags&131072)}else et=!1,ce&&t.flags&1048576&&rp(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Za(e,t),e=t.pendingProps;var i=Or(t,He.current);zr(t,n),i=Tc(null,t,r,e,i,n);var a=Ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(a=!0,So(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nc(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,du(t,r,e,n),t=hu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&Sc(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xg(r),e=Et(r,e),i){case 0:t=mu(null,t,r,e,n);break e;case 1:t=Pd(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=zd(null,t,r,Et(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),mu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Pd(e,t,r,i,n);case 3:e:{if(jp(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,i=a.element,lp(e,t),zo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ir(Error(N(423)),t),t=Nd(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(N(424)),t),t=Nd(e,t,r,n,i);break e}else for(ot=En(t.stateNode.containerInfo.firstChild),lt=t,ce=!0,zt=null,n=fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=Zt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return dp(t),e===null&&uu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,iu(r,i)?o=null:a!==null&&iu(r,a)&&(t.flags|=32),$p(e,t),Ye(e,t,o,n),t.child;case 6:return e===null&&uu(t),null;case 13:return Mp(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Cd(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ae(Eo,r._currentValue),r._currentValue=o,a!==null)if(Ot(a.value,o)){if(a.children===i.children&&!tt.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Gt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),cu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),zd(e,t,r,i,n);case 15:return Ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Za(e,t),t.tag=1,nt(r)?(e=!0,So(t)):e=!1,zr(t,n),up(t,r,i),du(t,r,i,n),hu(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Lp(e,t,n)}throw Error(N(156,t.tag))};function tm(e,t){return P1(e,t)}function Kg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new Kg(e,t,n,r)}function Vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return Vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uc)return 11;if(e===cc)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Vc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Gn(n.children,i,a,t);case sc:o=8,i|=8;break;case $s:return e=ht(12,n,t,i|2),e.elementType=$s,e.lanes=a,e;case js:return e=ht(13,n,t,i),e.elementType=js,e.lanes=a,e;case Ms:return e=ht(19,n,t,i),e.elementType=Ms,e.lanes=a,e;case c1:return al(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case s1:o=10;break e;case u1:o=9;break e;case uc:o=11;break e;case cc:o=14;break e;case pn:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ht(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Gn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=ht(22,e,r,t),e.elementType=c1,e.lanes=n,e.stateNode={isHidden:!1},e}function ps(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(e,t,n,r,i,a,o,l,s){return e=new Jg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ht(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(a),e}function qg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nm(e){if(!e)return Rn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(nt(n))return tp(e,n,t)}return t}function rm(e,t,n,r,i,a,o,l,s){return e=Wc(n,r,!0,e,i,a,o,l,s),e.context=nm(null),n=e.current,r=Qe(),i=Pn(n),a=Gt(r,i),a.callback=t??null,Cn(n,a,i),e.current.lanes=i,ta(e,i,r),rt(e,r),e}function ol(e,t,n,r){var i=t.current,a=Qe(),o=Pn(i);return n=nm(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(_t(e,i,o,a),Xa(e,i,o)),o}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Zg(){return null}var im=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}ll.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ol(e,t,null,null)};ll.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){ol(null,e,null,null)}),t[Jt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=I1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&$1(e)}};function Gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function ev(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Io(o);a.call(u)}}var o=rm(t,r,e,0,null,!1,!1,"",Fd);return e._reactRootContainer=o,e[Jt]=o.current,$i(e.nodeType===8?e.parentNode:e),Zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Io(s);l.call(u)}}var s=Wc(e,0,!1,null,null,!1,!1,"",Fd);return e._reactRootContainer=s,e[Jt]=s.current,$i(e.nodeType===8?e.parentNode:e),Zn(function(){ol(t,s,n,r)}),s}function ul(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Io(o);l.call(s)}}ol(t,o,e,i)}else o=ev(n,t,e,i,r);return Io(o)}R1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=di(t.pendingLanes);n!==0&&(pc(t,n|1),rt(t,ye()),!(X&6)&&(Lr=ye()+500,Fn()))}break;case 13:Zn(function(){var r=qt(e,1);if(r!==null){var i=Qe();_t(r,e,1,i)}}),Yc(e,1)}};mc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Qe();_t(t,e,134217728,n)}Yc(e,134217728)}};T1=function(e){if(e.tag===13){var t=Pn(e),n=qt(e,t);if(n!==null){var r=Qe();_t(n,e,t,r)}Yc(e,t)}};I1=function(){return te};L1=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Gs=function(e,t,n){switch(t){case"input":if(Us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(N(90));d1(r),Us(r,i)}}}break;case"textarea":m1(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};S1=Uc;k1=Zn;var tv={usingClientEntryPoint:!1,Events:[ra,fr,Zo,w1,x1,Uc]},ai={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nv={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=C1(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{Ko=Na.inject(nv),Ft=Na}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(t))throw Error(N(200));return qg(e,t,null,n)};ut.createRoot=function(e,t){if(!Gc(e))throw Error(N(299));var n=!1,r="",i=im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wc(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,$i(e.nodeType===8?e.parentNode:e),new Qc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=C1(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Zn(e)};ut.hydrate=function(e,t,n){if(!sl(t))throw Error(N(200));return ul(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rm(t,null,e,1,n??null,i,!1,a,o),e[Jt]=t.current,$i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ll(t)};ut.render=function(e,t,n){if(!sl(t))throw Error(N(200));return ul(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!sl(e))throw Error(N(40));return e._reactRootContainer?(Zn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ut.unstable_batchedUpdates=Uc;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ul(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(Zh);var Dd=Ts;Rs.createRoot=Dd.createRoot,Rs.hydrateRoot=Dd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Ud="popstate";function rv(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Pu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lo(i)}return av(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function iv(){return Math.random().toString(36).substr(2,8)}function Bd(e,t){return{usr:e.state,key:e.key,idx:t}}function Pu(e,t,n,r){return n===void 0&&(n=null),Wi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||iv()})}function Lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function av(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=wn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Wi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=wn.Pop;let x=c(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function h(x,m){l=wn.Push;let p=Pu(v.location,x,m);n&&n(p,x),u=c()+1;let y=Bd(p,u),S=v.createHref(p);try{o.pushState(y,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function w(x,m){l=wn.Replace;let p=Pu(v.location,x,m);n&&n(p,x),u=c();let y=Bd(p,u),S=v.createHref(p);o.replaceState(y,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Lo(x);return xe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ud,d),s=x,()=>{i.removeEventListener(Ud,d),s=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(x){return o.go(x)}};return v}var Hd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hd||(Hd={}));function ov(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Br(t):t,i=Xc(r.pathname||"/",n);if(i==null)return null;let a=am(e);lv(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=gv(a[l],wv(i));return o}function am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=_n([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),am(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:mv(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of om(a.path))i(a,o,s)}),t}function om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=om(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function lv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sv=/^:\w+$/,uv=3,cv=2,fv=1,dv=10,pv=-2,Vd=e=>e==="*";function mv(e,t){let n=e.split("/"),r=n.length;return n.some(Vd)&&(r+=pv),t&&(r+=cv),n.filter(i=>!Vd(i)).reduce((i,a)=>i+(sv.test(a)?uv:a===""?fv:dv),r)}function hv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gv(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=vv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;a.push({params:r,pathname:_n([i,c.pathname]),pathnameBase:bv(_n([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=_n([i,c.pathnameBase]))}return a}function vv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=xv(l[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function yv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Kc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wv(e){try{return decodeURI(e)}catch(t){return Kc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xv(e,t){try{return decodeURIComponent(e)}catch(n){return Kc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:kv(n,t):t,search:Ev(r),hash:Cv(i)}}function kv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Wi({},e),xe(!i.pathname||!i.pathname.includes("?"),hs("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),hs("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),hs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Sv(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),bv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ev=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nv=typeof Object.is=="function"?Object.is:Pv,{useState:_v,useEffect:Ov,useLayoutEffect:Av,useDebugValue:Rv}=As;function Tv(e,t,n){const r=t(),[{inst:i},a]=_v({inst:{value:r,getSnapshot:t}});return Av(()=>{i.value=r,i.getSnapshot=t,gs(i)&&a({inst:i})},[e,r,t]),Ov(()=>(gs(i)&&a({inst:i}),e(()=>{gs(i)&&a({inst:i})})),[e]),Rv(r),r}function gs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nv(n,r)}catch{return!0}}function Iv(e,t,n){return t()}const Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$v=!Lv,jv=$v?Iv:Tv;"useSyncExternalStore"in As&&(e=>e.useSyncExternalStore)(As);const um=b.createContext(null),cl=b.createContext(null),Hr=b.createContext(null),fl=b.createContext(null),Vr=b.createContext({outlet:null,matches:[]}),cm=b.createContext(null);function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nu.apply(this,arguments)}function Mv(e,t){let{relative:n}=t===void 0?{}:t;Wr()||xe(!1);let{basename:r,navigator:i}=b.useContext(Hr),{hash:a,pathname:o,search:l}=Jc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:_n([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Wr(){return b.useContext(fl)!=null}function Yr(){return Wr()||xe(!1),b.useContext(fl).location}function dl(){Wr()||xe(!1);let{basename:e,navigator:t}=b.useContext(Hr),{matches:n}=b.useContext(Vr),{pathname:r}=Yr(),i=JSON.stringify(lm(n).map(l=>l.pathnameBase)),a=b.useRef(!1);return b.useEffect(()=>{a.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=sm(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:_n([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function Jc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Vr),{pathname:i}=Yr(),a=JSON.stringify(lm(r).map(o=>o.pathnameBase));return b.useMemo(()=>sm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Fv(e,t){Wr()||xe(!1);let{navigator:n}=b.useContext(Hr),r=b.useContext(cl),{matches:i}=b.useContext(Vr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Yr(),u;if(t){var c;let v=typeof t=="string"?Br(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||xe(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",w=ov(e,{pathname:h}),g=Hv(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:_n([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:_n([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&g?b.createElement(fl.Provider,{value:{location:Nu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wn.Pop}},g):g}function Dv(){let e=Qv(),t=zv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}class Uv extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Vr.Provider,{value:this.props.routeContext},b.createElement(cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bv(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(um);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Vr.Provider,{value:t},r)}function Hv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||xe(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement(Dv,null));let c=t.concat(r.slice(0,l+1)),d=()=>{let h=a;return s?h=u:o.route.Component?h=b.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),b.createElement(Bv,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?b.createElement(Uv,{location:n.location,component:u,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Wd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Wd||(Wd={}));var $o;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($o||($o={}));function Vv(e){let t=b.useContext(cl);return t||xe(!1),t}function Wv(e){let t=b.useContext(Vr);return t||xe(!1),t}function Yv(e){let t=Wv(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function Qv(){var e;let t=b.useContext(cm),n=Vv($o.UseRouteError),r=Yv($o.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Gv(e){let{to:t,replace:n,state:r,relative:i}=e;Wr()||xe(!1);let a=b.useContext(cl),o=dl();return b.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Rt(e){xe(!1)}function Kv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:a,static:o=!1}=e;Wr()&&xe(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:w="default"}=r,g=b.useMemo(()=>{let v=Xc(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:w},navigationType:i}},[l,u,c,d,h,w,i]);return g==null?null:b.createElement(Hr.Provider,{value:s},b.createElement(fl.Provider,{children:n,value:g}))}function Xv(e){let{children:t,location:n}=e,r=b.useContext(um),i=r&&!t?r.router.routes:_u(t);return Fv(i,n)}var Yd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Yd||(Yd={}));new Promise(()=>{});function _u(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,_u(r.props.children,t));return}r.type!==Rt&&xe(!1),!r.props.index||!r.props.children||xe(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_u(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jo.apply(this,arguments)}function fm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qv(e,t){return e.button===0&&(!t||t==="_self")&&!Jv(e)}const Zv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ey=["aria-current","caseSensitive","className","end","style","to","children"];function ty(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=rv({window:r,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location});return b.useLayoutEffect(()=>a.listen(l),[a]),b.createElement(Kv,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qc=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,d=fm(t,Zv),{basename:h}=b.useContext(Hr),w,g=!1;if(typeof u=="string"&&ry.test(u)&&(w=u,ny)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Xc(y.pathname,h);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:g=!0}let v=Mv(u,{relative:i}),x=iy(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||x(p)}return b.createElement("a",jo({},d,{href:w||v,onClick:g||a?r:m,ref:n,target:s}))}),Je=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=fm(t,ey),d=Jc(s,{relative:c.relative}),h=Yr(),w=b.useContext(cl),{navigator:g}=b.useContext(Hr),v=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,x=h.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),S=p?r:void 0,C;typeof a=="function"?C=a({isActive:p,isPending:y}):C=[a,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let O=typeof l=="function"?l({isActive:p,isPending:y}):l;return b.createElement(qc,jo({},c,{"aria-current":S,className:C,ref:n,style:O,to:s}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var Qd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Qd||(Qd={}));var Gd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function iy(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=dl(),s=Yr(),u=Jc(e,{relative:o});return b.useCallback(c=>{if(qv(c,n)){c.preventDefault();let d=r!==void 0?r:Lo(s)===Lo(u);l(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var Mo={},ay={get exports(){return Mo},set exports(e){Mo=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=Symbol.for("react.element"),ef=Symbol.for("react.portal"),pl=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),gl=Symbol.for("react.provider"),vl=Symbol.for("react.context"),oy=Symbol.for("react.server_context"),yl=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),kl=Symbol.for("react.lazy"),ly=Symbol.for("react.offscreen"),dm;dm=Symbol.for("react.module.reference");function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zc:switch(e=e.type,e){case pl:case hl:case ml:case wl:case xl:return e;default:switch(e=e&&e.$$typeof,e){case oy:case vl:case yl:case kl:case Sl:case gl:return e;default:return t}}case ef:return t}}}ne.ContextConsumer=vl;ne.ContextProvider=gl;ne.Element=Zc;ne.ForwardRef=yl;ne.Fragment=pl;ne.Lazy=kl;ne.Memo=Sl;ne.Portal=ef;ne.Profiler=hl;ne.StrictMode=ml;ne.Suspense=wl;ne.SuspenseList=xl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return xt(e)===vl};ne.isContextProvider=function(e){return xt(e)===gl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zc};ne.isForwardRef=function(e){return xt(e)===yl};ne.isFragment=function(e){return xt(e)===pl};ne.isLazy=function(e){return xt(e)===kl};ne.isMemo=function(e){return xt(e)===Sl};ne.isPortal=function(e){return xt(e)===ef};ne.isProfiler=function(e){return xt(e)===hl};ne.isStrictMode=function(e){return xt(e)===ml};ne.isSuspense=function(e){return xt(e)===wl};ne.isSuspenseList=function(e){return xt(e)===xl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pl||e===hl||e===ml||e===wl||e===xl||e===ly||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===Sl||e.$$typeof===gl||e.$$typeof===vl||e.$$typeof===yl||e.$$typeof===dm||e.getModuleId!==void 0)};ne.typeOf=xt;(function(e){e.exports=ne})(ay);function sy(e){function t(T,I,$,B,k){for(var G=0,R=0,me=0,q=0,ee,W,Ae=0,Xe=0,J,Fe=J=ee=0,Z=0,Re=0,Xr=0,Te=0,fa=$.length,Jr=fa-1,St,H="",ve="",Ul="",Bl="",sn;Z<fa;){if(W=$.charCodeAt(Z),Z===Jr&&R+q+me+G!==0&&(R!==0&&(W=R===47?10:47),q=me=G=0,fa++,Jr++),R+q+me+G===0){if(Z===Jr&&(0<Re&&(H=H.replace(h,"")),0<H.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:H+=$.charAt(Z)}W=59}switch(W){case 123:for(H=H.trim(),ee=H.charCodeAt(0),J=1,Te=++Z;Z<fa;){switch(W=$.charCodeAt(Z)){case 123:J++;break;case 125:J--;break;case 47:switch(W=$.charCodeAt(Z+1)){case 42:case 47:e:{for(Fe=Z+1;Fe<Jr;++Fe)switch($.charCodeAt(Fe)){case 47:if(W===42&&$.charCodeAt(Fe-1)===42&&Z+2!==Fe){Z=Fe+1;break e}break;case 10:if(W===47){Z=Fe+1;break e}}Z=Fe}}break;case 91:W++;case 40:W++;case 34:case 39:for(;Z++<Jr&&$.charCodeAt(Z)!==W;);}if(J===0)break;Z++}switch(J=$.substring(Te,Z),ee===0&&(ee=(H=H.replace(d,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Re&&(H=H.replace(h,"")),W=H.charCodeAt(1),W){case 100:case 109:case 115:case 45:Re=I;break;default:Re=Bt}if(J=t(I,Re,J,W,k+1),Te=J.length,0<A&&(Re=n(Bt,H,Xr),sn=l(3,J,Re,I,Oe,Se,Te,W,k,B),H=Re.join(""),sn!==void 0&&(Te=(J=sn.trim()).length)===0&&(W=0,J="")),0<Te)switch(W){case 115:H=H.replace(O,o);case 100:case 109:case 45:J=H+"{"+J+"}";break;case 107:H=H.replace(p,"$1 $2"),J=H+"{"+J+"}",J=Me===1||Me===2&&a("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=H+J,B===112&&(J=(ve+=J,""))}else J="";break;default:J=t(I,n(I,H,Xr),J,B,k+1)}Ul+=J,J=Xr=Re=Fe=ee=0,H="",W=$.charCodeAt(++Z);break;case 125:case 59:if(H=(0<Re?H.replace(h,""):H).trim(),1<(Te=H.length))switch(Fe===0&&(ee=H.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Te=(H=H.replace(" ",":")).length),0<A&&(sn=l(1,H,I,T,Oe,Se,ve.length,B,k,B))!==void 0&&(Te=(H=sn.trim()).length)===0&&(H="\0\0"),ee=H.charCodeAt(0),W=H.charCodeAt(1),ee){case 0:break;case 64:if(W===105||W===99){Bl+=H+$.charAt(Z);break}default:H.charCodeAt(Te-1)!==58&&(ve+=i(H,ee,W,H.charCodeAt(2)))}Xr=Re=Fe=ee=0,H="",W=$.charCodeAt(++Z)}}switch(W){case 13:case 10:R===47?R=0:1+ee===0&&B!==107&&0<H.length&&(Re=1,H+="\0"),0<A*U&&l(0,H,I,T,Oe,Se,ve.length,B,k,B),Se=1,Oe++;break;case 59:case 125:if(R+q+me+G===0){Se++;break}default:switch(Se++,St=$.charAt(Z),W){case 9:case 32:if(q+G+R===0)switch(Ae){case 44:case 58:case 9:case 32:St="";break;default:W!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:q+R+G===0&&(Re=Xr=1,St="\f"+St);break;case 108:if(q+R+G+it===0&&0<Fe)switch(Z-Fe){case 2:Ae===112&&$.charCodeAt(Z-3)===58&&(it=Ae);case 8:Xe===111&&(it=Xe)}break;case 58:q+R+G===0&&(Fe=Z);break;case 44:R+me+q+G===0&&(Re=1,St+="\r");break;case 34:case 39:R===0&&(q=q===W?0:q===0?W:q);break;case 91:q+R+me===0&&G++;break;case 93:q+R+me===0&&G--;break;case 41:q+R+G===0&&me--;break;case 40:if(q+R+G===0){if(ee===0)switch(2*Ae+3*Xe){case 533:break;default:ee=1}me++}break;case 64:R+me+q+G+Fe+J===0&&(J=1);break;case 42:case 47:if(!(0<q+G+me))switch(R){case 0:switch(2*W+3*$.charCodeAt(Z+1)){case 235:R=47;break;case 220:Te=Z,R=42}break;case 42:W===47&&Ae===42&&Te+2!==Z&&($.charCodeAt(Te+2)===33&&(ve+=$.substring(Te,Z+1)),St="",R=0)}}R===0&&(H+=St)}Xe=Ae,Ae=W,Z++}if(Te=ve.length,0<Te){if(Re=I,0<A&&(sn=l(2,ve,Re,T,Oe,Se,Te,B,k,B),sn!==void 0&&(ve=sn).length===0))return Bl+ve+Ul;if(ve=Re.join(",")+"{"+ve+"}",Me*it!==0){switch(Me!==2||a(ve,2)||(it=0),it){case 111:ve=ve.replace(S,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}it=0}}return Bl+ve+Ul}function n(T,I,$){var B=I.trim().split(x);I=B;var k=B.length,G=T.length;switch(G){case 0:case 1:var R=0;for(T=G===0?"":T[0]+" ";R<k;++R)I[R]=r(T,I[R],$).trim();break;default:var me=R=0;for(I=[];R<k;++R)for(var q=0;q<G;++q)I[me++]=r(T[q]+" ",B[R],$).trim()}return I}function r(T,I,$){var B=I.charCodeAt(0);switch(33>B&&(B=(I=I.trim()).charCodeAt(0)),B){case 38:return I.replace(m,"$1"+T.trim());case 58:return T.trim()+I.replace(m,"$1"+T.trim());default:if(0<1*$&&0<I.indexOf("\f"))return I.replace(m,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+I}function i(T,I,$,B){var k=T+";",G=2*I+3*$+4*B;if(G===944){T=k.indexOf(":",9)+1;var R=k.substring(T,k.length-1).trim();return R=k.substring(0,T).trim()+R+";",Me===1||Me===2&&a(R,1)?"-webkit-"+R+R:R}if(Me===0||Me===2&&!a(k,1))return k;switch(G){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ze,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return R=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+k+"-ms-flex-pack"+R+k;case 1005:return g.test(k)?k.replace(w,":-webkit-")+k.replace(w,":-moz-")+k:k;case 1e3:switch(R=k.substring(13).trim(),I=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(I)){case 226:R=k.replace(C,"tb");break;case 232:R=k.replace(C,"tb-rl");break;case 220:R=k.replace(C,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+R+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(I=(k=T).length-10,R=(k.charCodeAt(I)===33?k.substring(0,I):k).substring(T.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:k=k.replace(R,"-webkit-"+R)+";"+k;break;case 207:case 102:k=k.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+k.replace(R,"-webkit-"+R)+";"+k.replace(R,"-ms-"+R+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return R=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+R+"-ms-flex-"+R+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(_,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(_,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(D.test(T)===!0)return(R=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),I,$,B).replace(":fill-available",":stretch"):k.replace(R,"-webkit-"+R)+k.replace(R,"-moz-"+R.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,$+B===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+k}return k}function a(T,I){var $=T.indexOf(I===1?":":"{"),B=T.substring(0,I!==3?$:10);return $=T.substring($+1,T.length-1),F(I!==2?B:B.replace(V,"$1"),$,I)}function o(T,I){var $=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return $!==I+";"?$.replace(P," or ($1)").substring(4):"("+I+")"}function l(T,I,$,B,k,G,R,me,q,ee){for(var W=0,Ae=I,Xe;W<A;++W)switch(Xe=We[W].call(c,T,Ae,$,B,k,G,R,me,q,ee)){case void 0:case!1:case!0:case null:break;default:Ae=Xe}if(Ae!==I)return Ae}function s(T){switch(T){case void 0:case null:A=We.length=0;break;default:if(typeof T=="function")We[A++]=T;else if(typeof T=="object")for(var I=0,$=T.length;I<$;++I)s(T[I]);else U=!!T|0}return s}function u(T){return T=T.prefix,T!==void 0&&(F=null,T?typeof T!="function"?Me=1:(Me=2,F=T):Me=0),u}function c(T,I){var $=T;if(33>$.charCodeAt(0)&&($=$.trim()),ie=$,$=[ie],0<A){var B=l(-1,I,$,$,Oe,Se,0,0,0,0);B!==void 0&&typeof B=="string"&&(I=B)}var k=t(Bt,$,I,0,0);return 0<A&&(B=l(-2,k,$,$,Oe,Se,k.length,0,0,0),B!==void 0&&(k=B)),ie="",it=0,Se=Oe=1,k}var d=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,_=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,ze=/([^-])(image-set\()/,Se=1,Oe=1,it=0,Me=1,Bt=[],We=[],A=0,F=null,U=0,ie="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var uy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var fy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kd=cy(function(e){return fy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ou={},dy={get exports(){return Ou},set exports(e){Ou=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,tf=_e?Symbol.for("react.element"):60103,nf=_e?Symbol.for("react.portal"):60106,bl=_e?Symbol.for("react.fragment"):60107,El=_e?Symbol.for("react.strict_mode"):60108,Cl=_e?Symbol.for("react.profiler"):60114,zl=_e?Symbol.for("react.provider"):60109,Pl=_e?Symbol.for("react.context"):60110,rf=_e?Symbol.for("react.async_mode"):60111,Nl=_e?Symbol.for("react.concurrent_mode"):60111,_l=_e?Symbol.for("react.forward_ref"):60112,Ol=_e?Symbol.for("react.suspense"):60113,py=_e?Symbol.for("react.suspense_list"):60120,Al=_e?Symbol.for("react.memo"):60115,Rl=_e?Symbol.for("react.lazy"):60116,my=_e?Symbol.for("react.block"):60121,hy=_e?Symbol.for("react.fundamental"):60117,gy=_e?Symbol.for("react.responder"):60118,vy=_e?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tf:switch(e=e.type,e){case rf:case Nl:case bl:case Cl:case El:case Ol:return e;default:switch(e=e&&e.$$typeof,e){case Pl:case _l:case Rl:case Al:case zl:return e;default:return t}}case nf:return t}}}function pm(e){return ft(e)===Nl}re.AsyncMode=rf;re.ConcurrentMode=Nl;re.ContextConsumer=Pl;re.ContextProvider=zl;re.Element=tf;re.ForwardRef=_l;re.Fragment=bl;re.Lazy=Rl;re.Memo=Al;re.Portal=nf;re.Profiler=Cl;re.StrictMode=El;re.Suspense=Ol;re.isAsyncMode=function(e){return pm(e)||ft(e)===rf};re.isConcurrentMode=pm;re.isContextConsumer=function(e){return ft(e)===Pl};re.isContextProvider=function(e){return ft(e)===zl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tf};re.isForwardRef=function(e){return ft(e)===_l};re.isFragment=function(e){return ft(e)===bl};re.isLazy=function(e){return ft(e)===Rl};re.isMemo=function(e){return ft(e)===Al};re.isPortal=function(e){return ft(e)===nf};re.isProfiler=function(e){return ft(e)===Cl};re.isStrictMode=function(e){return ft(e)===El};re.isSuspense=function(e){return ft(e)===Ol};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bl||e===Nl||e===Cl||e===El||e===Ol||e===py||typeof e=="object"&&e!==null&&(e.$$typeof===Rl||e.$$typeof===Al||e.$$typeof===zl||e.$$typeof===Pl||e.$$typeof===_l||e.$$typeof===hy||e.$$typeof===gy||e.$$typeof===vy||e.$$typeof===my)};re.typeOf=ft;(function(e){e.exports=re})(dy);var af=Ou,yy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},of={};of[af.ForwardRef]=xy;of[af.Memo]=mm;function Xd(e){return af.isMemo(e)?mm:of[e.$$typeof]||yy}var Sy=Object.defineProperty,ky=Object.getOwnPropertyNames,Jd=Object.getOwnPropertySymbols,by=Object.getOwnPropertyDescriptor,Ey=Object.getPrototypeOf,qd=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(qd){var r=Ey(t);r&&r!==qd&&hm(e,r,n)}var i=ky(t);Jd&&(i=i.concat(Jd(t)));for(var a=Xd(e),o=Xd(t),l=0;l<i.length;++l){var s=i[l];if(!wy[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=by(t,s);try{Sy(e,s,u)}catch{}}}}return e}var Cy=hm;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Au=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mo.typeOf(e)},Fo=Object.freeze([]),On=Object.freeze({});function Yi(e){return typeof e=="function"}function e0(e){return e.displayName||e.name||"Component"}function lf(e){return e&&typeof e.styledComponentId=="string"}var $r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",sf=typeof window<"u"&&"HTMLElement"in window,zy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Py={};function aa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ny=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&aa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ro=new Map,Do=new Map,Ei=1,_a=function(e){if(ro.has(e))return ro.get(e);for(;Do.has(Ei);)Ei++;var t=Ei++;return ro.set(e,t),Do.set(t,e),t},_y=function(e){return Do.get(e)},Oy=function(e,t){t>=Ei&&(Ei=t+1),ro.set(e,t),Do.set(t,e)},Ay="style["+$r+'][data-styled-version="5.3.9"]',Ry=new RegExp("^"+$r+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ty=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Iy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(Ry);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Oy(u,s),Ty(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},Ly=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},gm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute($r))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Ly();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},$y=function(){function e(n){var r=this.element=gm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}aa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),jy=function(){function e(n){var r=this.element=gm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),My=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),t0=sf,Fy={isServer:!sf,useCSSOMInjection:!zy},Uo=function(){function e(n,r,i){n===void 0&&(n=On),r===void 0&&(r={}),this.options=Lt({},Fy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&sf&&t0&&(t0=!1,function(a){for(var o=document.querySelectorAll(Ay),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute($r)!=="active"&&(Iy(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return _a(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new My(o):a?new $y(o):new jy(o),new Ny(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(_a(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(_a(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(_a(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=_y(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=$r+".g"+o+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),a+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},e}(),Dy=/(a)(d)/gi,n0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ru(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=n0(t%52)+n;return(n0(t%52)+n).replace(Dy,"$1-$2")}var yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vm=function(e){return yr(5381,e)};function ym(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yi(n)&&!lf(n))return!1}return!0}var Uy=vm("5.3.9"),By=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ym(t),this.componentId=n,this.baseHash=yr(Uy,n),this.baseStyle=r,Uo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=er(this.rules,t,n,r).join(""),l=Ru(yr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=yr(this.baseHash,r.hash),d="",h=0;h<u;h++){var w=this.rules[h];if(typeof w=="string")d+=w;else if(w){var g=er(w,t,n,r),v=Array.isArray(g)?g.join(""):g;c=yr(c,v+h),d+=v}}if(d){var x=Ru(c>>>0);if(!n.hasNameForId(i,x)){var m=r(d,"."+x,void 0,i);n.insertRules(i,x,m)}a.push(x)}}return a.join(" ")},e}(),Hy=/^\s*\/\/.*$/gm,Vy=[":","[",".","#"];function Wy(e){var t,n,r,i,a=e===void 0?On:e,o=a.options,l=o===void 0?On:o,s=a.plugins,u=s===void 0?Fo:s,c=new sy(l),d=[],h=function(v){function x(m){if(m)try{v(m+"}")}catch{}}return function(m,p,y,S,C,O,P,_,V,D){switch(m){case 1:if(V===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(_===0)return p+"/*|*/";break;case 3:switch(_){case 102:case 112:return v(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(v){d.push(v)}),w=function(v,x,m){return x===0&&Vy.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function g(v,x,m,p){p===void 0&&(p="&");var y=v.replace(Hy,""),S=x&&m?m+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!x?"":x,S)}return c.use([].concat(u,[function(v,x,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,w))},h,function(v){if(v===-2){var x=d;return d=[],x}}])),g.hash=u.length?u.reduce(function(v,x){return x.name||aa(15),yr(v,x.name)},5381).toString():"",g}var wm=rn.createContext();wm.Consumer;var xm=rn.createContext(),Yy=(xm.Consumer,new Uo),Tu=Wy();function Sm(){return b.useContext(wm)||Yy}function km(){return b.useContext(xm)||Tu}var Qy=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Tu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return aa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Tu),this.name+t.hash},e}(),Gy=/([A-Z])/,Ky=/([A-Z])/g,Xy=/^ms-/,Jy=function(e){return"-"+e.toLowerCase()};function r0(e){return Gy.test(e)?e.replace(Ky,Jy).replace(Xy,"-ms-"):e}var i0=function(e){return e==null||e===!1||e===""};function er(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=er(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(i0(e))return"";if(lf(e))return"."+e.styledComponentId;if(Yi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return er(s,t,n,r)}var u;return e instanceof Qy?n?(e.inject(n,r),e.getName(r)):e:Au(e)?function c(d,h){var w,g,v=[];for(var x in d)d.hasOwnProperty(x)&&!i0(d[x])&&(Array.isArray(d[x])&&d[x].isCss||Yi(d[x])?v.push(r0(x)+":",d[x],";"):Au(d[x])?v.push.apply(v,c(d[x],x)):v.push(r0(x)+": "+(w=x,(g=d[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||w in uy?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var a0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function bm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Yi(e)||Au(e)?a0(er(Zd(Fo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:a0(er(Zd(e,n)))}var Em=function(e,t,n){return n===void 0&&(n=On),e.theme!==n.theme&&e.theme||t||n.theme},qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zy=/(^-|-$)/g;function vs(e){return e.replace(qy,"-").replace(Zy,"")}var Cm=function(e){return Ru(vm(e)>>>0)};function Oa(e){return typeof e=="string"&&!0}var Iu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},e4=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function t4(e,t,n){var r=e[n];Iu(t)&&Iu(r)?zm(r,t):e[n]=t}function zm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Iu(o))for(var l in o)e4(l)&&t4(e,o[l],l)}return e}var uf=rn.createContext();uf.Consumer;var ys={};function Pm(e,t,n){var r=lf(e),i=!Oa(e),a=t.attrs,o=a===void 0?Fo:a,l=t.componentId,s=l===void 0?function(p,y){var S=typeof p!="string"?"sc":vs(p);ys[S]=(ys[S]||0)+1;var C=S+"-"+Cm("5.3.9"+S+ys[S]);return y?y+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return Oa(p)?"styled."+p:"Styled("+e0(p)+")"}(e):u,d=t.displayName&&t.componentId?vs(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,v=new By(n,d,r?e.componentStyle:void 0),x=v.isStatic&&o.length===0,m=function(p,y){return function(S,C,O,P){var _=S.attrs,V=S.componentStyle,D=S.defaultProps,ze=S.foldedComponentIds,Se=S.shouldForwardProp,Oe=S.styledComponentId,it=S.target,Me=function(B,k,G){B===void 0&&(B=On);var R=Lt({},k,{theme:B}),me={};return G.forEach(function(q){var ee,W,Ae,Xe=q;for(ee in Yi(Xe)&&(Xe=Xe(R)),Xe)R[ee]=me[ee]=ee==="className"?(W=me[ee],Ae=Xe[ee],W&&Ae?W+" "+Ae:W||Ae):Xe[ee]}),[R,me]}(Em(C,b.useContext(uf),D)||On,C,_),Bt=Me[0],We=Me[1],A=function(B,k,G,R){var me=Sm(),q=km(),ee=k?B.generateAndInjectStyles(On,me,q):B.generateAndInjectStyles(G,me,q);return ee}(V,P,Bt),F=O,U=We.$as||C.$as||We.as||C.as||it,ie=Oa(U),T=We!==C?Lt({},C,{},We):C,I={};for(var $ in T)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?I.as=T[$]:(Se?Se($,Kd,U):!ie||Kd($))&&(I[$]=T[$]));return C.style&&We.style!==C.style&&(I.style=Lt({},C.style,{},We.style)),I.className=Array.prototype.concat(ze,Oe,A!==Oe?A:null,C.className,We.className).filter(Boolean).join(" "),I.ref=F,b.createElement(U,I)}(g,p,y,x)};return m.displayName=c,(g=rn.forwardRef(m)).attrs=h,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=w,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Fo,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(O,P){if(O==null)return{};var _,V,D={},ze=Object.keys(O);for(V=0;V<ze.length;V++)_=ze[V],P.indexOf(_)>=0||(D[_]=O[_]);return D}(t,["componentId"]),C=y&&y+"-"+(Oa(p)?p:vs(e0(p)));return Pm(p,Lt({},S,{attrs:h,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?zm({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Cy(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Lu=function(e){return function t(n,r,i){if(i===void 0&&(i=On),!Mo.isValidElementType(r))return aa(1,String(r));var a=function(){return n(r,i,bm.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,Lt({},i,{},o))},a.attrs=function(o){return t(n,r,Lt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(Pm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Lu[e]=Lu(e)});var n4=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ym(n),Uo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(er(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&Uo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function r4(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=bm.apply(void 0,[e].concat(n)),a="sc-global-"+Cm(JSON.stringify(i)),o=new n4(i,a);function l(u){var c=Sm(),d=km(),h=b.useContext(uf),w=b.useRef(c.allocateGSInstance(a)).current;return c.server&&s(w,u,c,h,d),b.useLayoutEffect(function(){if(!c.server)return s(w,u,c,h,d),function(){return o.removeStyles(w,c)}},[w,u,c,h,d]),null}function s(u,c,d,h,w){if(o.isStatic)o.renderStyles(u,Py,d,w);else{var g=Lt({},c,{theme:Em(c,h,l.defaultProps)});o.renderStyles(u,g,d,w)}}return rn.memo(l)}const Ve=Lu,cn={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},qe={mobileS:`(min-width: ${cn.mobileS})`,mobileM:`(min-width: ${cn.mobileM})`,mobileL:`(min-width: ${cn.mobileL})`,tablet:`(min-width: ${cn.tablet})`,laptop:`(min-width: ${cn.laptop})`,laptopL:`(min-width: ${cn.laptopL})`,desktop:`(min-width: ${cn.desktop})`,desktopL:`(min-width: ${cn.desktopL})`};let Aa="#2C4001",ws="#F2F2F2";const i4=Ve.nav`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 0 2em;
    background: ${Aa};

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
        color: ${ws};
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
        background: ${Aa};
        position: absolute;
        right: 0;
        z-index: 2;
        top: 0;

        &.active {
            max-height: 500px;
        }
    }

    .mobile-nav {
        color: ${ws};
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
        background: ${ws};
        color: ${Aa};
    }
    .userIcon {
        color: ${Aa};
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

    @media ${qe.mobileS} {
        min-width: 200px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${qe.mobileM} {
        min-width: 320px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${qe.mobileL} {
        min-width: 375px;
        font-size: 1rem;
        .logo {
            height: 50px;
            width: 100px;
        }
    }

    @media ${qe.tablet} {
        min-width: 425px;
    }

    @media ${qe.laptop} {
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

    @media ${qe.desktop} {
        min-width: 1441px;
        font-size: 3rem;
        .logo {
            height: 140px;
            width: 160px;
        }
    }

    @media ${qe.desktopL} {
        min-width: 2560px;
        font-size: 4rem;
        .logo {
            height: 280px;
            width: 400px;
        }
    }
`,a4="/assets/PantryPalWhite-2ae508bc.png";/*! js-cookie v3.0.1 | MIT */function Ra(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var o4={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function $u(e,t){function n(i,a,o){if(!(typeof document>"u")){o=Ra({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",Ra({},a,{expires:-1}))},withAttributes:function(i){return $u(this.converter,Ra({},this.attributes,i))},withConverter:function(i){return $u(Ra({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Bo=$u(o4,{path:"/"});function o0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o0(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ho(e){return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ho(e)}function l4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s4(e,t,n){return t&&l0(e.prototype,t),n&&l0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cf(e,t){return c4(e)||d4(e,t)||Nm(e,t)||m4()}function oa(e){return u4(e)||f4(e)||Nm(e)||p4()}function u4(e){if(Array.isArray(e))return ju(e)}function c4(e){if(Array.isArray(e))return e}function f4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Nm(e,t){if(e){if(typeof e=="string")return ju(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ju(e,t)}}function ju(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s0=function(){},ff={},_m={},Om=null,Am={mark:s0,measure:s0};try{typeof window<"u"&&(ff=window),typeof document<"u"&&(_m=document),typeof MutationObserver<"u"&&(Om=MutationObserver),typeof performance<"u"&&(Am=performance)}catch{}var h4=ff.navigator||{},u0=h4.userAgent,c0=u0===void 0?"":u0,Tn=ff,ue=_m,f0=Om,Ta=Am;Tn.document;var on=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",Rm=~c0.indexOf("MSIE")||~c0.indexOf("Trident/"),Ia,La,$a,ja,Ma,en="___FONT_AWESOME___",Mu=16,Tm="fa",Im="svg-inline--fa",tr="data-fa-i2svg",Fu="data-fa-pseudo-element",g4="data-fa-pseudo-element-pending",df="data-prefix",pf="data-icon",d0="fontawesome-i2svg",v4="async",y4=["HTML","HEAD","STYLE","SCRIPT"],Lm=function(){try{return!0}catch{return!1}}(),le="classic",ge="sharp",mf=[le,ge];function la(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Qi=la((Ia={},Ee(Ia,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(Ia,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Ia)),Gi=la((La={},Ee(La,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(La,ge,{solid:"fass",regular:"fasr"}),La)),Ki=la(($a={},Ee($a,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee($a,ge,{fass:"fa-solid",fasr:"fa-regular"}),$a)),w4=la((ja={},Ee(ja,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(ja,ge,{"fa-solid":"fass","fa-regular":"fasr"}),ja)),x4=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,$m="fa-layers-text",S4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,k4=la((Ma={},Ee(Ma,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(Ma,ge,{900:"fass",400:"fasr"}),Ma)),jm=[1,2,3,4,5,6,7,8,9,10],b4=jm.concat([11,12,13,14,15,16,17,18,19,20]),E4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xi=new Set;Object.keys(Gi[le]).map(Xi.add.bind(Xi));Object.keys(Gi[ge]).map(Xi.add.bind(Xi));var C4=[].concat(mf,oa(Xi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wn.GROUP,Wn.SWAP_OPACITY,Wn.PRIMARY,Wn.SECONDARY]).concat(jm.map(function(e){return"".concat(e,"x")})).concat(b4.map(function(e){return"w-".concat(e)})),Ci=Tn.FontAwesomeConfig||{};function z4(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function P4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var N4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];N4.forEach(function(e){var t=cf(e,2),n=t[0],r=t[1],i=P4(z4(n));i!=null&&(Ci[r]=i)})}var Mm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Tm,replacementClass:Im,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ci.familyPrefix&&(Ci.cssPrefix=Ci.familyPrefix);var jr=L(L({},Mm),Ci);jr.autoReplaceSvg||(jr.observeMutations=!1);var M={};Object.keys(Mm).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){jr[e]=n,zi.forEach(function(r){return r(M)})},get:function(){return jr[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){jr.cssPrefix=t,zi.forEach(function(n){return n(M)})},get:function(){return jr.cssPrefix}});Tn.FontAwesomeConfig=M;var zi=[];function _4(e){return zi.push(e),function(){zi.splice(zi.indexOf(e),1)}}var fn=Mu,$t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O4(e){if(!(!e||!on)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var A4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ji(){for(var e=12,t="";e-- >0;)t+=A4[Math.random()*62|0];return t}function Qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function hf(e){return e.classList?Qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R4(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fm(e[n]),'" ')},"").trim()}function Tl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gf(e){return e.size!==$t.size||e.x!==$t.x||e.y!==$t.y||e.rotate!==$t.rotate||e.flipX||e.flipY}function T4(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function I4(e){var t=e.transform,n=e.width,r=n===void 0?Mu:n,i=e.height,a=i===void 0?Mu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Rm?s+="translate(".concat(t.x/fn-r/2,"em, ").concat(t.y/fn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/fn,"em), calc(-50% + ").concat(t.y/fn,"em)) "):s+="translate(".concat(t.x/fn,"em, ").concat(t.y/fn,"em) "),s+="scale(".concat(t.size/fn*(t.flipX?-1:1),", ").concat(t.size/fn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var L4=`:root, :host {
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
}`;function Dm(){var e=Tm,t=Im,n=M.cssPrefix,r=M.replacementClass,i=L4;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var p0=!1;function xs(){M.autoAddCss&&!p0&&(O4(Dm()),p0=!0)}var $4={mixout:function(){return{dom:{css:Dm,insertCss:xs}}},hooks:function(){return{beforeDOMElementCreation:function(){xs()},beforeI2svg:function(){xs()}}}},tn=Tn||{};tn[en]||(tn[en]={});tn[en].styles||(tn[en].styles={});tn[en].hooks||(tn[en].hooks={});tn[en].shims||(tn[en].shims=[]);var Pt=tn[en],Um=[],j4=function e(){ue.removeEventListener("DOMContentLoaded",e),Vo=1,Um.map(function(t){return t()})},Vo=!1;on&&(Vo=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Vo||ue.addEventListener("DOMContentLoaded",j4));function M4(e){on&&(Vo?setTimeout(e,0):Um.push(e))}function sa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Fm(e):"<".concat(t," ").concat(R4(r),">").concat(a.map(sa).join(""),"</").concat(t,">")}function m0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var F4=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Ss=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?F4(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function D4(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Du(e){var t=D4(e);return t.length===1?t[0].toString(16):null}function U4(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function h0(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Uu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=h0(t);typeof Pt.hooks.addPack=="function"&&!i?Pt.hooks.addPack(e,h0(t)):Pt.styles[e]=L(L({},Pt.styles[e]||{}),a),e==="fas"&&Uu("fa",t)}var Fa,Da,Ua,wr=Pt.styles,B4=Pt.shims,H4=(Fa={},Ee(Fa,le,Object.values(Ki[le])),Ee(Fa,ge,Object.values(Ki[ge])),Fa),vf=null,Bm={},Hm={},Vm={},Wm={},Ym={},V4=(Da={},Ee(Da,le,Object.keys(Qi[le])),Ee(Da,ge,Object.keys(Qi[ge])),Da);function W4(e){return~C4.indexOf(e)}function Y4(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!W4(i)?i:null}var Qm=function(){var t=function(a){return Ss(wr,function(o,l,s){return o[s]=Ss(l,a,{}),o},{})};Bm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Hm=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),Ym=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in wr||M.autoFetchSvg,r=Ss(B4,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Vm=r.names,Wm=r.unicodes,vf=Il(M.styleDefault,{family:M.familyDefault})};_4(function(e){vf=Il(e.styleDefault,{family:M.familyDefault})});Qm();function yf(e,t){return(Bm[e]||{})[t]}function Q4(e,t){return(Hm[e]||{})[t]}function Yn(e,t){return(Ym[e]||{})[t]}function Gm(e){return Vm[e]||{prefix:null,iconName:null}}function G4(e){var t=Wm[e],n=yf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function In(){return vf}var wf=function(){return{prefix:null,iconName:null,rest:[]}};function Il(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Qi[r][e],a=Gi[r][e]||Gi[r][i],o=e in Pt.styles?e:null;return a||o||null}var g0=(Ua={},Ee(Ua,le,Object.keys(Ki[le])),Ee(Ua,ge,Object.keys(Ki[ge])),Ua);function Ll(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ee(t,le,"".concat(M.cssPrefix,"-").concat(le)),Ee(t,ge,"".concat(M.cssPrefix,"-").concat(ge)),t),o=null,l=le;(e.includes(a[le])||e.some(function(u){return g0[le].includes(u)}))&&(l=le),(e.includes(a[ge])||e.some(function(u){return g0[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var d=Y4(M.cssPrefix,c);if(wr[c]?(c=H4[l].includes(c)?w4[l][c]:c,o=c,u.prefix=c):V4[l].indexOf(c)>-1?(o=c,u.prefix=Il(c,{family:l})):d?u.iconName=d:c!==M.replacementClass&&c!==a[le]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Gm(u.iconName):{},w=Yn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||w||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!wr.far&&wr.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},wf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(wr.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Yn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=In()||"fas"),s}var K4=function(){function e(){l4(this,e),this.definitions={}}return s4(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=L(L({},n.definitions[l]||{}),o[l]),Uu(l,o[l]);var s=Ki[le][l];s&&Uu(s,o[l]),Qm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),v0=[],xr={},Nr={},X4=Object.keys(Nr);function J4(e,t){var n=t.mixoutsTo;return v0=e,xr={},Object.keys(Nr).forEach(function(r){X4.indexOf(r)===-1&&delete Nr[r]}),v0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ho(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){xr[o]||(xr[o]=[]),xr[o].push(a[o])})}r.provides&&r.provides(Nr)}),n}function Bu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=xr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xr[e]||[];i.forEach(function(a){a.apply(null,n)})}function nn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nr[e]?Nr[e].apply(null,t):void 0}function Hu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||In();if(t)return t=Yn(n,t)||t,m0(Km.definitions,n,t)||m0(Pt.styles,n,t)}var Km=new K4,q4=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,nr("noAuto")},Z4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return on?(nr("beforeI2svg",t),nn("pseudoElements2svg",t),nn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,M4(function(){t3({autoReplaceSvgRoot:n}),nr("watch",t)})}},e3={icon:function(t){if(t===null)return null;if(Ho(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Il(t[0]);return{prefix:r,iconName:Yn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(x4))){var i=Ll(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||In(),iconName:Yn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=In();return{prefix:a,iconName:Yn(a,t)||t}}}},dt={noAuto:q4,config:M,dom:Z4,parse:e3,library:Km,findIconDefinition:Hu,toHtml:sa},t3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Pt.styles).length>0||M.autoFetchSvg)&&on&&M.autoReplaceSvg&&dt.dom.i2svg({node:r})};function $l(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(on){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function n3(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Tl(L(L({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function r3(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function xf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,w=h===void 0?!1:h,g=r.found?r:n,v=g.width,x=g.height,m=i==="fak",p=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),y={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};w&&(y.attributes[tr]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ji())},children:[s]}),delete y.attributes.title);var C=L(L({},y),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:L(L({},S),d.styles)}),O=r.found&&n.found?nn("generateAbstractMask",C)||{children:[],attributes:{}}:nn("generateAbstractIcon",C)||{children:[],attributes:{}},P=O.children,_=O.attributes;return C.children=P,C.attributes=_,l?r3(C):n3(C)}function y0(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[tr]="");var c=L({},o.styles);gf(i)&&(c.transform=I4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Tl(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function i3(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Tl(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ks=Pt.styles;function Vu(e){var t=e[0],n=e[1],r=e.slice(4),i=cf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Wn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var a3={found:!1,width:512,height:512};function o3(e,t){!Lm&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wu(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=In()),new Promise(function(r,i){if(nn("missingIconAbstract"),n==="fa"){var a=Gm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ks[t]&&ks[t][e]){var o=ks[t][e];return r(Vu(o))}o3(e,t),r(L(L({},a3),{},{icon:M.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}}))})}var w0=function(){},Yu=M.measurePerformance&&Ta&&Ta.mark&&Ta.measure?Ta:{mark:w0,measure:w0},mi='FA "6.3.0"',l3=function(t){return Yu.mark("".concat(mi," ").concat(t," begins")),function(){return Xm(t)}},Xm=function(t){Yu.mark("".concat(mi," ").concat(t," ends")),Yu.measure("".concat(mi," ").concat(t),"".concat(mi," ").concat(t," begins"),"".concat(mi," ").concat(t," ends"))},Sf={begin:l3,end:Xm},io=function(){};function x0(e){var t=e.getAttribute?e.getAttribute(tr):null;return typeof t=="string"}function s3(e){var t=e.getAttribute?e.getAttribute(df):null,n=e.getAttribute?e.getAttribute(pf):null;return t&&n}function u3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function c3(){if(M.autoReplaceSvg===!0)return ao.replace;var e=ao[M.autoReplaceSvg];return e||ao.replace}function f3(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function d3(e){return ue.createElement(e)}function Jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?f3:d3:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Jm(o,{ceFn:r}))}),i}function p3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ao={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Jm(i),n)}),n.getAttribute(tr)===null&&M.keepOriginalSource){var r=ue.createComment(p3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~hf(n).indexOf(M.replacementClass))return ao.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return sa(l)}).join(`
`);n.setAttribute(tr,""),n.innerHTML=o}};function S0(e){e()}function qm(e,t){var n=typeof t=="function"?t:io;if(e.length===0)n();else{var r=S0;M.mutateApproach===v4&&(r=Tn.requestAnimationFrame||S0),r(function(){var i=c3(),a=Sf.begin("mutate");e.map(i),a(),n()})}}var kf=!1;function Zm(){kf=!0}function Qu(){kf=!1}var Wo=null;function k0(e){if(f0&&M.observeMutations){var t=e.treeCallback,n=t===void 0?io:t,r=e.nodeCallback,i=r===void 0?io:r,a=e.pseudoElementsCallback,o=a===void 0?io:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Wo=new f0(function(u){if(!kf){var c=In();Qr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!x0(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&x0(d.target)&&~E4.indexOf(d.attributeName))if(d.attributeName==="class"&&s3(d.target)){var h=Ll(hf(d.target)),w=h.prefix,g=h.iconName;d.target.setAttribute(df,w||c),g&&d.target.setAttribute(pf,g)}else u3(d.target)&&i(d.target)})}}),on&&Wo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function m3(){Wo&&Wo.disconnect()}function h3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function g3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ll(hf(e));return i.prefix||(i.prefix=In()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Q4(i.prefix,e.innerText)||yf(i.prefix,Du(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function v3(e){var t=Qr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Ji()):(t["aria-hidden"]="true",t.focusable="false")),t}function y3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=g3(e),r=n.iconName,i=n.prefix,a=n.rest,o=v3(e),l=Bu("parseNodeAttributes",{},e),s=t.styleParser?h3(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:$t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var w3=Pt.styles;function eh(e){var t=M.autoReplaceSvg==="nest"?b0(e,{styleParser:!1}):b0(e);return~t.extra.classes.indexOf($m)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}var Ln=new Set;mf.map(function(e){Ln.add("fa-".concat(e))});Object.keys(Qi[le]).map(Ln.add.bind(Ln));Object.keys(Qi[ge]).map(Ln.add.bind(Ln));Ln=oa(Ln);function E0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!on)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(d0,"-").concat(d))},i=function(d){return n.remove("".concat(d0,"-").concat(d))},a=M.autoFetchSvg?Ln:mf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(w3));a.includes("fa")||a.push("fa");var o=[".".concat($m,":not([").concat(tr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(tr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Qr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Sf.begin("onTree"),u=l.reduce(function(c,d){try{var h=eh(d);h&&c.push(h)}catch(w){Lm||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){qm(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),d(h)})})}function x3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eh(e).then(function(n){n&&qm([n],t)})}function S3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hu(i||{})),e(r,L(L({},n),{},{mask:i}))}}var k3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?$t:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,w=n.titleId,g=w===void 0?null:w,v=n.classes,x=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,y=n.styles,S=y===void 0?{}:y;if(t){var C=t.prefix,O=t.iconName,P=t.icon;return $l(L({type:"icon"},t),function(){return nr("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?p["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(g||Ji()):(p["aria-hidden"]="true",p.focusable="false")),xf({icons:{main:Vu(P),mask:s?Vu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:O,transform:L(L({},$t),i),symbol:o,title:h,maskId:c,titleId:g,extra:{attributes:p,styles:S,classes:x}})})}},b3={mixout:function(){return{icon:S3(k3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=E0,n.nodeCallback=x3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return E0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(w,g){Promise.all([Wu(i,l),c.iconName?Wu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=cf(v,2),m=x[0],p=x[1];w([n,xf({icons:{main:m,mask:p},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Tl(l);s.length>0&&(i.style=s);var u;return gf(o)&&(u=nn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},E3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return $l({type:"layer"},function(){nr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(oa(a)).join(" ")},children:o}]})}}}},C3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return $l({type:"counter",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),i3({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(oa(l))}})})}}}},z3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?$t:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,h=r.styles,w=h===void 0?{}:h;return $l({type:"text",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),y0({content:n,transform:L(L({},$t),a),title:l,extra:{attributes:d,styles:w,classes:["".concat(M.cssPrefix,"-layers-text")].concat(oa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(Rm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,y0({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},P3=new RegExp('"',"ug"),C0=[1105920,1112319];function N3(e){var t=e.replace(P3,""),n=U4(t,0),r=n>=C0[0]&&n<=C0[1],i=t.length===2?t[0]===t[1]:!1;return{value:Du(i?t[0]:t),isSecondary:r||i}}function z0(e,t){var n="".concat(g4).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Qr(e.children),o=a.filter(function(P){return P.getAttribute(Fu)===t})[0],l=Tn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(S4),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ge:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Gi[h][s[2].toLowerCase()]:k4[h][u],g=N3(d),v=g.value,x=g.isSecondary,m=s[0].startsWith("FontAwesome"),p=yf(w,v),y=p;if(m){var S=G4(v);S.iconName&&S.prefix&&(p=S.iconName,w=S.prefix)}if(p&&!x&&(!o||o.getAttribute(df)!==w||o.getAttribute(pf)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var C=y3(),O=C.extra;O.attributes[Fu]=t,Wu(p,w).then(function(P){var _=xf(L(L({},C),{},{icons:{main:P,mask:wf()},prefix:w,iconName:y,extra:O,watchable:!0})),V=ue.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=_.map(function(D){return sa(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _3(e){return Promise.all([z0(e,"::before"),z0(e,"::after")])}function O3(e){return e.parentNode!==document.head&&!~y4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function P0(e){if(on)return new Promise(function(t,n){var r=Qr(e.querySelectorAll("*")).filter(O3).map(_3),i=Sf.begin("searchPseudoElements");Zm(),Promise.all(r).then(function(){i(),Qu(),t()}).catch(function(){i(),Qu(),n()})})}var A3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=P0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;M.searchPseudoElements&&P0(i)}}},N0=!1,R3={mixout:function(){return{dom:{unwatch:function(){Zm(),N0=!0}}}},hooks:function(){return{bootstrap:function(){k0(Bu("mutationObserverCallbacks",{}))},noAuto:function(){m3()},watch:function(n){var r=n.observeMutationsRoot;N0?Qu():k0(Bu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},T3={mixout:function(){return{parse:{transform:function(n){return _0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:d,path:h};return{tag:"g",attributes:L({},w.outer),children:[{tag:"g",attributes:L({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),w.path)}]}]}}}},bs={x:0,y:0,width:"100%",height:"100%"};function O0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function I3(e){return e.tag==="g"?e.children:[e]}var L3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ll(i.split(" ").map(function(o){return o.trim()})):wf();return a.prefix||(a.prefix=In()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,w=T4({transform:s,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:L(L({},bs),{},{fill:"white"})},v=c.children?{children:c.children.map(O0)}:{},x={tag:"g",attributes:L({},w.inner),children:[O0(L({tag:c.tag,attributes:L(L({},c.attributes),w.path)},v))]},m={tag:"g",attributes:L({},w.outer),children:[x]},p="mask-".concat(l||Ji()),y="clip-".concat(l||Ji()),S={tag:"mask",attributes:L(L({},bs),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:I3(h)},S]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},bs)}),{children:r,attributes:i}}}},$3={provides:function(t){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:L(L({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},j3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},M3=[$4,b3,E3,C3,z3,A3,R3,T3,L3,$3,j3];J4(M3,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;var Gu=dt.parse;dt.findIconDefinition;dt.toHtml;var F3=dt.icon;dt.layer;dt.text;dt.counter;var Y={},D3={get exports(){return Y},set exports(e){Y=e}},U3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B3=U3,H3=B3;function th(){}function nh(){}nh.resetWarningCache=th;var V3=function(){function e(r,i,a,o,l,s){if(s!==H3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nh,resetWarningCache:th};return n.PropTypes=n,n};D3.exports=V3();function A0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A0(Object(n),!0).forEach(function(r){Sr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yo(e){return Yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yo(e)}function Sr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y3(e,t){if(e==null)return{};var n=W3(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ku(e){return Q3(e)||G3(e)||K3(e)||X3()}function Q3(e){if(Array.isArray(e))return Xu(e)}function G3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function K3(e,t){if(e){if(typeof e=="string")return Xu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xu(e,t)}}function Xu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,w=e.inverse,g=e.border,v=e.listItem,x=e.flip,m=e.size,p=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":w,"fa-border":g,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Sr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Sr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Sr(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Sr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function q3(e){return e=e-0,e===e}function rh(e){return q3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Z3=["style"];function ew(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=rh(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[ew(i)]=a:t[i]=a,t},{})}function ih(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return ih(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=tw(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[rh(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=Y3(n,Z3);return i.attrs.style=xn(xn({},i.attrs.style),o),e.apply(void 0,[t.tag,xn(xn({},i.attrs),l)].concat(Ku(r)))}var ah=!1;try{ah=!0}catch{}function nw(){if(!ah&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function R0(e){if(e&&Yo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gu.icon)return Gu.icon(e);if(e===null)return null;if(e&&Yo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Es(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Sr({},e,t):{}}var jt=rn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=R0(n),c=Es("classes",[].concat(Ku(J3(e)),Ku(a.split(" ")))),d=Es("transform",typeof e.transform=="string"?Gu.transform(e.transform):e.transform),h=Es("mask",R0(r)),w=F3(u,xn(xn(xn(xn({},c),d),h),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!w)return nw("Could not find icon",u),null;var g=w.abstract,v={ref:t};return Object.keys(e).forEach(function(x){jt.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),rw(g[0],v)});jt.displayName="FontAwesomeIcon";jt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};jt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rw=ih.bind(null,rn.createElement),iw={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},T0={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},I0={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},aw={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Gr=b.createContext({});function ow({children:e}){const[t,n]=b.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=b.useState(!1),a={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return f(Gr.Provider,{value:a,children:e})}const lw=()=>{const[e,t]=b.useState(!1),{isLoggedIn:n,userProfile:r}=b.useContext(Gr);console.log("userProfile in navbar console.log",r);//! placeholder need to implement
const i=()=>{t(!e),console.log(`Nav Open: ${e}`),console.log(`Cross: ${e}`)},a=()=>{Bo.remove("loggedIn"),navigate("/login")};return f(i4,{className:"main-nav",children:n?f(Ut,{children:z("div",{className:"nav-bar",children:[f(Je,{className:"page",to:"/",activeclassname:"active",children:f("img",{className:"logo",src:a4,alt:"PantryPal Egg logo"})}),z("div",{className:"nav-item-container",children:[f(Je,{className:"page nav-item",to:"/search",children:"Search"}),f(Je,{className:"page nav-item",to:"/saved",children:"Saved"}),f(Je,{className:"page nav-item",to:"/mealPlanner",children:"Meal Planner"})]}),z("div",{className:"user-container",children:[f(Je,{className:"page nav-item ",to:"/login",onClick:a,children:"Logout"}),f(Je,{className:"page nav-item",to:"/profile",children:f(jt,{icon:T0,className:"userIcon"})})]}),z(Je,{className:e?"hamburger close":"hamburger",onClick:i,children:[f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"})]}),f("nav",{className:e?"mobile-nav-container mobile-height":"mobile-nav-container",children:e&&z("nav",{className:"nav-width",children:[f(Je,{className:"mobile-nav toggleNav && 'active'",to:"/search",onClick:i,children:"Search"}),f(Je,{className:"mobile-nav",to:"/saved",onClick:i,children:"Saved"}),f(Je,{className:"mobile-nav",to:"/mealPlanner",onClick:i,children:"Meal Planner"}),f(Je,{className:"mobile-nav",to:"/login",onClick:a,children:"Logout"}),f(Je,{className:"page mobile-nav",to:"/profile",onClick:a,children:f(jt,{icon:T0,className:"userIcon mobile-nav"})})]})})]})}):z(Ut,{children:[f(Je,{className:"page",to:"/signup",children:"SignUp"}),f(Je,{className:"page",to:"/login",children:"Login"})]})})},sw="/assets/JustEgg-ec8a2428.png",uw="/assets/PantryPalText-9cf7db56.png",cw=Ve.div`
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

    @media ${qe.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${qe.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${qe.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${qe.tablet} { 
        min-width: 425px;
        h1 {
            font-size: 2rem;    
        }
    }
      
    @media ${qe.laptop} { 
        min-width: 768px;
        h1 {
            font-size: 2.2rem;    
        }
  
    }
      
    @media ${qe.desktop} {
        min-width: 1441px;
        h1 {
            font-size: 3rem;    
        }

    }
      
    @media ${qe.desktopL} {
        min-width: 2560px;
        h1 {
            font-size: 4rem;    
        }

    }
`,fw=()=>z(cw,{children:[f("h1",{children:"Find recipes | Meal Plan"}),f("img",{className:"logo",src:sw,alt:"Egg"}),f("img",{className:"logoText",src:uw,alt:"PantryPal"})]}),dw=Ve.section`
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
`;function pw(){const e="http://localhost:4000",t=b.useRef(""),n=b.useRef(""),r=b.useRef(""),i=b.useRef("");let a=t.current.value,o=n.current.value,l=r.current.value,s=i.current.value;const[u,c]=b.useState(!1),[d,h]=b.useState([]),[w,g]=b.useState(!1),[v,x]=b.useState(!1),[m,p]=b.useState(!1),y=dl();function S(P){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(P)}function C(){let P=[];return!S(s)&&s&&(x(!0),P.push("email format invalid")),o!==l&&(p(!0),P.push("passwords do not match")),P.length>0?(c(!0),P):[]}async function O(){c(!1);const P=C();if(P.length>0){h(P);return}try{const _=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:a,password:o})});if(_.status==401)throw Error("Username and/or Email already exists");if(_.status!=201)throw Error(`server response error ${_.statusText}`)}catch(_){c(!0),h([_.message]);return}try{const _=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});if(_.status===200){const V=await _.json();Bo.set("loggedIn",{token:V.token,username:a})}else throw Error(_.statusText)}catch(_){c(!0),h([_.message]);return}y("/search")}return z(dw,{children:[z("section",{className:"form-sect",children:[z("form",{action:"#",onSubmit:P=>{P.preventDefault(),O()},children:[f("div",{className:"title",children:z("h2",{children:["Welcome to Pantry Pal ",f("br",{}),"Signup Here"]})}),z("div",{className:"input-container",children:[v&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"email",children:"Email"}),f("input",{className:v?"error-container":"",ref:i,onChange:P=>{s=P.target.value,x(!1)},id:"email",type:"text",required:!0}),v&&f("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[w&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"username",children:"Username"}),f("input",{className:w?"error-container":"",ref:t,onChange:P=>{a=P.target.value},id:"username",type:"text",required:!0}),w&&f("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"password",children:"Password"}),f("input",{className:m?"error-container":"",ref:n,onChange:P=>{o=P.target.value,p(!1)},id:"password",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),z("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{htmlFor:"confirmpassword",className:"input-tag",children:"Confirm Password"}),f("input",{className:m?"error-container":"",ref:r,onChange:P=>{l=P.target.value,p(!1)},id:"confirmpassword",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),f("div",{className:"submit-btn",children:f("button",{className:"btn",children:"Signup"})})]}),u&&f("section",{className:"error-container error-desc",children:z("div",{children:[f("h4",{children:"Please correct following errors"}),f("ul",{children:d.map((P,_)=>f("li",{children:P},_))})]})})]}),f("div",{className:"btn goto-btn",children:z(qc,{to:"/login",children:["Already signed",f("br",{}),"up login here"]})})]})}let oi="#2C4001",mw="#F2E7AE";const hw=Ve.section`
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
        background: ${mw};
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

    
`;function oh(e,t){return function(){return e.apply(t,arguments)}}const{toString:lh}=Object.prototype,{getPrototypeOf:bf}=Object,Ef=(e=>t=>{const n=lh.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>Ef(t)===e),jl=e=>t=>typeof t===e,{isArray:Kr}=Array,qi=jl("undefined");function gw(e){return e!==null&&!qi(e)&&e.constructor!==null&&!qi(e.constructor)&&$n(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const sh=ln("ArrayBuffer");function vw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&sh(e.buffer),t}const yw=jl("string"),$n=jl("function"),uh=jl("number"),Cf=e=>e!==null&&typeof e=="object",ww=e=>e===!0||e===!1,oo=e=>{if(Ef(e)!=="object")return!1;const t=bf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xw=ln("Date"),Sw=ln("File"),kw=ln("Blob"),bw=ln("FileList"),Ew=e=>Cf(e)&&$n(e.pipe),Cw=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||lh.call(e)===t||$n(e.toString)&&e.toString()===t)},zw=ln("URLSearchParams"),Pw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ua(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Kr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function ch(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const fh=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),dh=e=>!qi(e)&&e!==fh;function Ju(){const{caseless:e}=dh(this)&&this||{},t={},n=(r,i)=>{const a=e&&ch(t,i)||i;oo(t[a])&&oo(r)?t[a]=Ju(t[a],r):oo(r)?t[a]=Ju({},r):Kr(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ua(arguments[r],n);return t}const Nw=(e,t,n,{allOwnKeys:r}={})=>(ua(t,(i,a)=>{n&&$n(i)?e[a]=oh(i,n):e[a]=i},{allOwnKeys:r}),e),_w=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ow=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Aw=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&bf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Rw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tw=e=>{if(!e)return null;if(Kr(e))return e;let t=e.length;if(!uh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Iw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&bf(Uint8Array)),Lw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},$w=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jw=ln("HTMLFormElement"),Mw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),L0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Fw=ln("RegExp"),ph=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ua(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},Dw=e=>{ph(e,(t,n)=>{if($n(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($n(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Uw=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Kr(e)?r(e):r(String(e).split(t)),n},Bw=()=>{},Hw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Cs="abcdefghijklmnopqrstuvwxyz",$0="0123456789",mh={DIGIT:$0,ALPHA:Cs,ALPHA_DIGIT:Cs+Cs.toUpperCase()+$0},Vw=(e=16,t=mh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ww(e){return!!(e&&$n(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Yw=e=>{const t=new Array(10),n=(r,i)=>{if(Cf(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Kr(r)?[]:{};return ua(r,(o,l)=>{const s=n(o,i+1);!qi(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},E={isArray:Kr,isArrayBuffer:sh,isBuffer:gw,isFormData:Cw,isArrayBufferView:vw,isString:yw,isNumber:uh,isBoolean:ww,isObject:Cf,isPlainObject:oo,isUndefined:qi,isDate:xw,isFile:Sw,isBlob:kw,isRegExp:Fw,isFunction:$n,isStream:Ew,isURLSearchParams:zw,isTypedArray:Iw,isFileList:bw,forEach:ua,merge:Ju,extend:Nw,trim:Pw,stripBOM:_w,inherits:Ow,toFlatObject:Aw,kindOf:Ef,kindOfTest:ln,endsWith:Rw,toArray:Tw,forEachEntry:Lw,matchAll:$w,isHTMLForm:jw,hasOwnProperty:L0,hasOwnProp:L0,reduceDescriptors:ph,freezeMethods:Dw,toObjectSet:Uw,toCamelCase:Mw,noop:Bw,toFiniteNumber:Hw,findKey:ch,global:fh,isContextDefined:dh,ALPHABET:mh,generateString:Vw,isSpecCompliantForm:Ww,toJSONObject:Yw};function K(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hh=K.prototype,gh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{gh[e]={value:e}});Object.defineProperties(K,gh);Object.defineProperty(hh,"isAxiosError",{value:!0});K.from=(e,t,n,r,i,a)=>{const o=Object.create(hh);return E.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),K.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Qw=null;function qu(e){return E.isPlainObject(e)||E.isArray(e)}function vh(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function j0(e,t,n){return e?e.concat(t).map(function(i,a){return i=vh(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function Gw(e){return E.isArray(e)&&!e.some(qu)}const Kw=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!E.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(E.isDate(g))return g.toISOString();if(!s&&E.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(g)||E.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,x){let m=g;if(g&&!x&&typeof g=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(E.isArray(g)&&Gw(g)||(E.isFileList(g)||E.endsWith(v,"[]"))&&(m=E.toArray(g)))return v=vh(v),m.forEach(function(y,S){!(E.isUndefined(y)||y===null)&&t.append(o===!0?j0([v],S,a):o===null?v:v+"[]",u(y))}),!1}return qu(g)?!0:(t.append(j0(x,v,a),u(g)),!1)}const d=[],h=Object.assign(Kw,{defaultVisitor:c,convertValue:u,isVisitable:qu});function w(g,v){if(!E.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),E.forEach(g,function(m,p){(!(E.isUndefined(m)||m===null)&&i.call(t,m,E.isString(p)?p.trim():p,v,h))===!0&&w(m,v?v.concat(p):[p])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function M0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function zf(e,t){this._pairs=[],e&&Ml(e,this,t)}const yh=zf.prototype;yh.append=function(t,n){this._pairs.push([t,n])};yh.toString=function(t){const n=t?function(r){return t.call(this,r,M0)}:M0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Xw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wh(e,t,n){if(!t)return e;const r=n&&n.encode||Xw,i=n&&n.serialize;let a;if(i?a=i(t,n):a=E.isURLSearchParams(t)?t.toString():new zf(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Jw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const F0=Jw,xh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qw=typeof URLSearchParams<"u"?URLSearchParams:zf,Zw=typeof FormData<"u"?FormData:null,e6=typeof Blob<"u"?Blob:null,t6=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),n6=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Mt={isBrowser:!0,classes:{URLSearchParams:qw,FormData:Zw,Blob:e6},isStandardBrowserEnv:t6,isStandardBrowserWebWorkerEnv:n6,protocols:["http","https","file","blob","url","data"]};function r6(e,t){return Ml(e,new Mt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Mt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function i6(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function a6(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Sh(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&E.isArray(i)?i.length:o,s?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&E.isArray(i[o])&&(i[o]=a6(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(i6(r),i,n,0)}),n}return null}const o6={"Content-Type":void 0};function l6(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Fl={transitional:xh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=E.isObject(t);if(a&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i&&i?JSON.stringify(Sh(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return r6(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ml(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),l6(t)):t}],transformResponse:[function(t){const n=this.transitional||Fl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?K.from(l,K.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mt.classes.FormData,Blob:Mt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){Fl.headers[t]={}});E.forEach(["post","put","patch"],function(t){Fl.headers[t]=E.merge(o6)});const Pf=Fl,s6=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),u6=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&s6[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},D0=Symbol("internals");function li(e){return e&&String(e).trim().toLowerCase()}function lo(e){return e===!1||e==null?e:E.isArray(e)?e.map(lo):String(e)}function c6(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function f6(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function zs(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function d6(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function p6(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Dl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=li(s);if(!c)throw new Error("header name must be a non-empty string");const d=E.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||s]=lo(l))}const o=(l,s)=>E.forEach(l,(u,c)=>a(u,c,s));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!f6(t)?o(u6(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=li(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return c6(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=li(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=li(o),o){const l=E.findKey(r,o);l&&(!n||zs(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||zs(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,a)=>{const o=E.findKey(r,a);if(o){n[o]=lo(i),delete n[a];return}const l=t?d6(a):String(a).trim();l!==a&&delete n[a],n[l]=lo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[D0]=this[D0]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=li(o);r[l]||(p6(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(a):a(t),this}}Dl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(Dl.prototype);E.freezeMethods(Dl);const Kt=Dl;function Ps(e,t){const n=this||Pf,r=t||n,i=Kt.from(r.headers);let a=r.data;return E.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function kh(e){return!!(e&&e.__CANCEL__)}function ca(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(ca,K,{__CANCEL__:!0});function m6(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const h6=Mt.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),E.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function g6(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function v6(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function bh(e,t){return e&&!g6(t)?v6(e,t):t}const y6=Mt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=E.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function w6(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function x6(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let d=a,h=0;for(;d!==i;)h+=n[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function U0(e,t){let n=0;const r=x6(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const S6=typeof XMLHttpRequest<"u",k6=S6&&function(e){return new Promise(function(n,r){let i=e.data;const a=Kt.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}E.isFormData(i)&&(Mt.isStandardBrowserEnv||Mt.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(w+":"+g))}const c=bh(e.baseURL,e.url);u.open(e.method.toUpperCase(),wh(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const w=Kt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};m6(function(m){n(m),s()},function(m){r(m),s()},v),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||xh;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new K(g,v.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},Mt.isStandardBrowserEnv){const w=(e.withCredentials||y6(c))&&e.xsrfCookieName&&h6.read(e.xsrfCookieName);w&&a.set(e.xsrfHeaderName,w)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&E.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),E.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",U0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",U0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new ca(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=w6(c);if(h&&Mt.protocols.indexOf(h)===-1){r(new K("Unsupported protocol "+h+":",K.ERR_BAD_REQUEST,e));return}u.send(i||null)})},so={http:Qw,xhr:k6};E.forEach(so,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const b6={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=E.isString(n)?so[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(so,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:so};function Ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ca(null,e)}function B0(e){return Ns(e),e.headers=Kt.from(e.headers),e.data=Ps.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),b6.getAdapter(e.adapter||Pf.adapter)(e).then(function(r){return Ns(e),r.data=Ps.call(e,e.transformResponse,r),r.headers=Kt.from(r.headers),r},function(r){return kh(r)||(Ns(e),r&&r.response&&(r.response.data=Ps.call(e,e.transformResponse,r.response),r.response.headers=Kt.from(r.response.headers))),Promise.reject(r)})}const H0=e=>e instanceof Kt?e.toJSON():e;function Mr(e,t){t=t||{};const n={};function r(u,c,d){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:d},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function i(u,c,d){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function a(u,c){if(!E.isUndefined(c))return r(void 0,c)}function o(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(H0(u),H0(c),!0)};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=s[c]||i,h=d(e[c],t[c],c);E.isUndefined(h)&&d!==l||(n[c]=h)}),n}const Eh="1.3.4",Nf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Nf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const V0={};Nf.transitional=function(t,n,r){function i(a,o){return"[Axios v"+Eh+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new K(i(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!V0[o]&&(V0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function E6(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new K("option "+a+" must be "+s,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}}const Zu={assertOptions:E6,validators:Nf},dn=Zu.validators;class Qo{constructor(t){this.defaults=t,this.interceptors={request:new F0,response:new F0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Zu.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!==void 0&&Zu.assertOptions(i,{encode:dn.function,serialize:dn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&E.merge(a.common,a[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Kt.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!s){const g=[B0.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);d<h;)c=c.then(g[d++],g[d++]);return c}h=l.length;let w=n;for(d=0;d<h;){const g=l[d++],v=l[d++];try{w=g(w)}catch(x){v.call(this,x);break}}try{c=B0.call(this,w)}catch(g){return Promise.reject(g)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Mr(this.defaults,t);const n=bh(t.baseURL,t.url);return wh(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Qo.prototype[t]=function(n,r){return this.request(Mr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(Mr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Qo.prototype[t]=n(),Qo.prototype[t+"Form"]=n(!0)});const uo=Qo;class _f{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new ca(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new _f(function(i){t=i}),cancel:t}}}const C6=_f;function z6(e){return function(n){return e.apply(null,n)}}function P6(e){return E.isObject(e)&&e.isAxiosError===!0}const ec={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ec).forEach(([e,t])=>{ec[t]=e});const N6=ec;function Ch(e){const t=new uo(e),n=oh(uo.prototype.request,t);return E.extend(n,uo.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Ch(Mr(e,i))},n}const Ce=Ch(Pf);Ce.Axios=uo;Ce.CanceledError=ca;Ce.CancelToken=C6;Ce.isCancel=kh;Ce.VERSION=Eh;Ce.toFormData=Ml;Ce.AxiosError=K;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=z6;Ce.isAxiosError=P6;Ce.mergeConfig=Mr;Ce.AxiosHeaders=Kt;Ce.formToJSON=e=>Sh(E.isHTMLForm(e)?new FormData(e):e);Ce.HttpStatusCode=N6;Ce.default=Ce;const Zi=Ce;let Ht="#2C4001",W0="#F2E7AE",Y0="#59320F",_6="#F2F2F2";const O6=Ve.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${Ht};


.container {
  background-color: ${_6};
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
    background: ${W0};
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
    background-color: ${Y0};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Y0};
  }
  .save_btn: hover {
    background: ${W0};
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


`,A6=(e,t)=>{console.log("username",t);const n="http://localhost:4000";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},R6=(e,t)=>{const n="http://localhost:4000";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!");else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},zh=({recipe:e,showDelete:t})=>{const n=a=>a.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=b.useContext(Gr);return f(O6,{children:z("div",{className:"container",children:[f("img",{src:e.image,alt:e.title}),z("div",{className:"card_body",children:[f("h1",{children:e.title}),z("p",{children:[n(e.summary),"Credit: ",e.creditText]}),z("div",{className:"card_footer",children:[z("div",{className:"card_footer_container",children:[f("h2",{children:"Dish type:"}),z("p",{children:[" ",e.dishTypes[0]]})]}),z("div",{className:"card_footer_container",children:[f("h2",{children:"Servings:"}),z("p",{children:[" ",e.servings]})]}),z("div",{className:"card_footer_container",children:[f("h2",{children:"Total Time:"}),f("p",{children:e.readyInMinutes})]})]}),z("div",{className:"btn-container",children:[f(qc,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&f("button",{className:"save_btn",onClick:()=>A6(e,i.username),children:"Save it!"}),t&&f("button",{className:"delete_btn",onClick:()=>R6(e,i.username),children:"Delete Recipe"})]})]})]})})},T6=Ve.section`
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
`;function Ph(){return f(T6,{children:f("span",{className:"loader"})})}function I6(e,t){let n=[];return e.forEach(r=>{const i=r.id;for(let a=0;a<t.length;a++)i===t[a].id&&n.push({...r,...t[a]})}),n}let si="#2C4001",L6="#F2E7AE",$6="#F2F2F2";const j6=Ve.section`
   
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
        color: ${$6};
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
        background-color: ${L6};
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
`;function M6({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return f("div",{children:"no filters available"});let a=new Set,o=new Set,l=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(g=>{let v=g.diets;v.length>0&&v.forEach(x=>{n.includes(x)||a.add(x)}),l.forEach(x=>{g[x]&&!i.includes(x)&&o.add(x)})});let s=Array.from(a.values()),u=Array.from(o.values());function c(g){t(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function d(g){t(v=>v.filter(x=>x!==g))}function h(g){r(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function w(g){r(v=>v.filter(x=>x!==g))}return z(j6,{className:"main-filter-container",children:[n.length>0?z("section",{children:[f("h2",{children:"Selected filters: "}),f("ul",{children:n.map((g,v)=>f("li",{onClick:()=>{d(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),i.length>0?z("section",{children:[f("h2",{children:"Category filters"}),f("ul",{children:i.map((g,v)=>f("li",{onClick:()=>{w(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),z("section",{className:"filter-row",children:[f("h2",{children:"Dietary options:"}),f("ul",{className:"filter-options",children:s.length>0?s.map((g,v)=>f("li",{onClick:()=>{c(g)},className:"btn",children:f("span",{children:g})},v+g+1)):f(Ut,{})})]}),z("section",{className:"filter-row",children:[f("h2",{children:"Categories:"}),f("ul",{className:"filter-options",children:u.map((g,v)=>f("li",{onClick:()=>{h(g)},className:"btn",children:f("span",{children:g})},g+v+2))})]})]})}function F6(){const e="http://localhost:4000",[t,n]=b.useState(""),[r,i]=b.useState([]),[a,o]=b.useState([]),[l,s]=b.useState([]),[u,c]=b.useState([]),[d,h]=b.useState(!1),[w,g]=b.useState(!1);b.useEffect(()=>{if(l.length>0||u.length>0){let m=D6(r,l,u);o(m);return}o(r)},[l,u]);const v=b.useRef("");async function x(){try{g(!0);const m=await Zi.get(`${e}/api/searchbyingredient`,{params:{ingredients:t}});m!=null&&m.data&&h(!1);const p=m.data.map(C=>C.id),y=await Zi.get(`${e}/api/recipeinformation`,{params:{recipeIdList:p}});//! test remove
//! test remove
let S=I6(m.data,y.data);i(S),o(S),g(!1)}catch{h(!0)}}return z(hw,{children:[f("div",{className:"title",children:f("h1",{children:"Recipe Search"})}),f("div",{className:"searchContainer",children:z("form",{action:"#",onSubmit:m=>{m.preventDefault(),x()},children:[f("input",{ref:v,onChange:m=>n(m.target.value),id:"ingregients",value:t,type:"text",placeholder:"Enter your ingredients",className:"search"}),f("button",{className:"search-btn",children:"Search"})]})}),z("section",{className:"recipes-display",children:[f("div",{className:"filter-container",children:f(M6,{recipeListArr:a,setDietFilter:s,dietFilter:l,setCategoryFilter:c,categoryFilter:u})}),f("section",{className:"searchresults-container",children:f("div",{className:"searchResults",children:f("ul",{children:w?f(Ph,{}):a.length>0?a.map(m=>f("li",{children:f(zh,{recipe:m},m.id)},m.id)):d?z("h3",{children:[" ","An error has occured, please try searching again."," "]}):z("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function D6(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const U6=Ve.section`
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
`;function B6(){const[e,t]=b.useState([]),n="http://localhost:4000",{userProfile:r}=b.useContext(Gr);return b.useEffect(()=>{async function i(){try{const a=await Zi.post(`${n}/api/getSavedRecipes`,{username:r.username});t(a.data)}catch(a){console.error("Error fetching saved recipes:",a)}}i()},[]),z(U6,{children:[f("div",{className:"title",children:f("h1",{children:"Saved Recipes"})}),f("div",{className:"saved-recipes",children:f("ul",{children:e.map(i=>f("li",{children:f(zh,{recipe:i.recipeJson,showDelete:!0})},i._id))})})]})}const H6=Ve.section`
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
`;function V6(){const e=b.useRef(null),t=b.useRef(null),[n,r]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null),s=dl(),{userProfile:u,isLoggedIn:c,setIsLoggedIn:d,setUserProfile:h}=b.useContext(Gr);return b.useEffect(()=>{e.current.focus()},[]),f(H6,{children:f("section",{className:"form-sect",children:z("form",{onSubmit:async g=>{g.preventDefault();try{const x=(await Zi.post("http://localhost:4000/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;d(!0),h(m=>x.userProfile?{...m,...x.userProfile}:m),s("/search")}catch(v){d(!1),console.log(v)}},children:[z("div",{className:"title",children:[f("div",{children:c&&"logged in"}),f("h2",{children:"Welcome Back!"})]}),o&&f("div",{className:"error-container",children:z("div",{className:"error-desc",children:[f("span",{className:"error-marker",children:"⚠"})," ",o]})}),z("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"username",children:"Username"}),f("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:g=>r(g.target.value),required:!0})]}),z("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"password",children:"Password"}),f("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:g=>a(g.target.value),required:!0})]}),f("div",{className:"submit-btn",children:f("button",{type:"submit",className:"btn",children:"Sign In"})})]})})})}let bt="#2C4001",Ba="#F2E7AE",Q0="#59320F",_s="#F2F2F2";const W6=Ve.section`
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
  background: ${_s};
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
  color: ${_s};
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
  background: ${Ba}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Ba}
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
  background: ${Q0};
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
  background: ${Ba}

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
  background: ${Q0};
  color: ${Ba};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${_s};
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
`;let Ha;const Y6=new Uint8Array(16);function Q6(){if(!Ha&&(Ha=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ha))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ha(Y6)}const Ie=[];for(let e=0;e<256;++e)Ie.push((e+256).toString(16).slice(1));function G6(e,t=0){return(Ie[e[t+0]]+Ie[e[t+1]]+Ie[e[t+2]]+Ie[e[t+3]]+"-"+Ie[e[t+4]]+Ie[e[t+5]]+"-"+Ie[e[t+6]]+Ie[e[t+7]]+"-"+Ie[e[t+8]]+Ie[e[t+9]]+"-"+Ie[e[t+10]]+Ie[e[t+11]]+Ie[e[t+12]]+Ie[e[t+13]]+Ie[e[t+14]]+Ie[e[t+15]]).toLowerCase()}const K6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),G0={randomUUID:K6};function gt(e,t,n){if(G0.randomUUID&&!t&&!e)return G0.randomUUID();e=e||{};const r=e.random||(e.rng||Q6)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return G6(r)}function X6(){var u;const t=(u=Yr().state)==null?void 0:u.recipe,n=t.dishTypes.map(c=>f("li",{children:c},gt())),r=t.extendedIngredients.map(c=>z("li",{children:[c.amount," ",c.unit," ",f("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${c.image}`})," ",c.name]},gt()));console.log(t);const i=t.analyzedInstructions[0].steps.map(c=>f("li",{children:c.step},gt())),a=t.summary.replace(/<.*?>/g,""),o=t.extendedIngredients.length,l=t.aggregateLikes,s=t.diets.map(c=>f("li",{children:c},gt()));return f(W6,{children:z("div",{className:"recipeContainer",children:[z("div",{className:"recipeImgContainer",children:[z("div",{className:"imageContainer",children:[f("img",{className:"recipeImg",src:t.image,alt:t.title}),f("button",{className:"saveBtn",children:f(jt,{icon:I0,className:"saveIcon"})})]}),z("section",{className:"recipeDetails",children:[f("div",{className:"titleContainer",children:f("h1",{className:"recipeTitle",children:t.title})}),z("div",{className:"quickInfoContainer",children:[z("section",{className:"quickInfoItem",children:[f(jt,{icon:aw,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),z("section",{children:[f(jt,{icon:iw,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[o," Ingredients"]})]}),z("section",{children:[f(jt,{icon:I0,className:"quickIcon"}),z("h2",{className:"recipeTime",children:[l," Likes"]})]})]}),f("section",{className:"recipeSummary",children:f("p",{children:a})}),z("section",{className:"recipeTags",children:[f("div",{className:"recipeCategory",children:n}),f("div",{className:"recipeDiets",children:s})]})]})]}),f("div",{className:"recipeHead",children:f("div",{className:"recipeStart",children:z("div",{className:"ingredientCard",children:[z("h2",{children:["Servings: ",t.servings]}),f("input",{type:"number",placeholder:t.servings}),f("h2",{children:"What you'll need:"}),f("div",{className:"recipeIngredient",children:r})]})})}),z("div",{className:"instructionsCard",children:[f("h2",{children:t.title}),z("div",{className:"instructionContainer",children:[f("div",{children:f("img",{className:"instructionImg",src:t.image,alt:t.title})}),z("div",{className:"recipeInstructions",children:[f("h2",{children:"Instructions:"}),f("ol",{children:i})]})]})]})]})})}async function J6(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}const q6=Ve.section`
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
`;function Z6(){const[e,t]=b.useState(!1),[n,r]=b.useState(1),[i,a]=b.useState("None"),[o,l]=b.useState(""),[s,u]=b.useState(null);return z(q6,{children:[z("form",{onSubmit:async d=>{t(!0),d.preventDefault();const h=await J6(n,i,parseInt(o));u(h),t(!1)},children:[f("label",{htmlFor:"numberOfDays",children:"Number of days:"}),z("select",{id:"numberOfDays",value:n,onChange:d=>r(d.target.value),children:[f("option",{value:"1",children:"1"}),f("option",{value:"3",children:"3"}),f("option",{value:"5",children:"5"})]}),f("label",{htmlFor:"dietType",children:"Diet type:"}),z("select",{id:"dietType",value:i,onChange:d=>a(d.target.value),children:[f("option",{value:"None",children:"None"}),f("option",{value:"vegan",children:"Vegan"}),f("option",{value:"vegetarian",children:"Vegetarian"}),f("option",{value:"pescatarian",children:"Pescatarian"}),f("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),f("option",{value:"keto",children:"Keto"}),f("option",{value:"gluten-free",children:"Gluten-free"}),f("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),f("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),f("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:o,onChange:d=>l(d.target.value)}),f("button",{type:"submit",children:"Get Meal Plan"}),e?f(Ph,{}):null]}),s&&z("table",{children:[f("thead",{children:z("tr",{children:[f("th",{children:"Day"}),f("th",{children:"Meal"}),f("th",{children:"Food"}),f("th",{children:"Calories"})]})}),f("tbody",{children:s.map(d=>{const h=Object.entries(d).filter(([g])=>g!=="Day"&&g!=="TotalCalories"),w=h.reduce((g,[,v])=>g+v.Calories,0);return h.flatMap(([g,v],x)=>[z("tr",{children:[x===0&&f("td",{rowSpan:h.length+1,children:d.Day}),f("td",{children:g}),f("td",{children:v.Meal}),f("td",{children:v.Calories})]},`${g}-${v.Meal}`),x===h.length-1&&f("tr",{children:z("td",{colSpan:"3",align:"right",children:["Total Day Calories :"," ",w]})},`${g}-TotalCalories`)])})})]})]})}const e5=r4`
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

`,t5="#ffffff",n5="#40a140",r5=" #ffea00d0",i5=" #28bee4",a5="#ffffff",o5="#25271843",l5=Ve.section`
    background: ${t5};
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
        background: ${a5};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${o5};
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
        background-color: ${r5};
        color: #000000;
        text-align: middle;
        vertical-align: center;
        box-shadow: 3px 1px 5px black;
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${i5};
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
            background: ${n5};
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
`,s5="#2b3f0124",u5="#eae6e6",c5="#a8a6a6",f5="#000000",d5="#595959f",p5=Ve.section`
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
            background-color: ${s5};

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
            background-color: ${u5};
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
                                color: ${d5};
                            }
                            input {
                                color: ${f5};
                                border: 1px solid ${c5};
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
`,m5="#f4888a",h5=Ve.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${m5};

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
`,g5="/assets/error-58915e09.png";function Of({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:z("div",{className:"error_item",children:[f("div",{className:"img__container",children:f("img",{src:g5,alt:"error symbol"})}),f("p",{children:a})]})},gt()))}return t?f(h5,{children:f("div",{className:"error container",children:f("div",{className:"row",children:z("section",{className:"container col",children:[f("h3",{children:"Please correct errors"}),f("ul",{className:"error__list",children:e.length>0?n(e):f(Ut,{})})]})})})}):f(Ut,{})}function v5({children:e,setIsDisplayed:t,scrollToRef:n}){b.useRef("");function r(){t(!1)}return f(p5,{children:z("main",{children:[f("div",{onClick:()=>{r()},className:"back__blur "}),f("div",{ref:n,className:"container row ",children:f("section",{id:"modal",className:"",children:e})})]})})}const Os=Zi.create({baseURL:"http://localhost:4000",headers:{"Content-Type":"application/json"},withCredentials:!0});function K0(e,t){return e===t}function y5(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function w5(e,t){const n=await JSON.stringify({token:t,username:e});Bo.set("loggedIn",n),Bo.set("loggedIn",n)}const Va={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!K0(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await Os.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await w5(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!K0(t,n))throw Error("emails dont match");if(!y5(t))throw Error("emails improper format");return r=await Os.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await Os.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},x5="#08e171dc",S5=Ve.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${x5};

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
`,k5="/assets/checked-926d4d93.png";function Af({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:z("div",{className:"list_item",children:[f("img",{src:k5,alt:"check symbol"}),f("p",{children:a})]})},gt()))}return t?f(S5,{children:f("div",{className:"error container",children:f("div",{className:"row",children:f("section",{className:"container col",children:f("ul",{className:"display_list",children:e.length>0?n(e):f(Ut,{})})})})})}):f(Ut,{})}const b5=Ve.section``;function X0({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return z(b5,{children:[z("div",{children:[f(Af,{listArr:["Password Updated"],showCard:n}),f(Of,{errorsArr:o,showError:i})]}),z("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Password"})}),f("section",{className:"row form__inputs",children:z("ul",{children:[f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"oldPassword",children:"Old Password"}),f("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},gt()),f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"newPassword",children:"New Password"}),f("input",{id:"newPassword",type:"text",name:"newPassword"})]})},gt()),f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),f("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function E5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update form",d.message);return}r(!0)}return z("form",{ref:s,onSubmit:u,children:[z("div",{children:[f(Af,{listArr:["Email Updated"],showCard:n}),f(Of,{errorsArr:o,showError:i})]}),f("section",{className:"row title",children:f("h1",{children:"Update Email"})}),f("section",{className:"row form__inputs",children:z("ul",{children:[f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"newEmail",children:"New Email"}),f("input",{id:"newEmail",type:"text",name:"newEmail"})]})},gt()),f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),f("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})}function C5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log(" form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return z(Ut,{children:[z("div",{children:[f(Af,{listArr:["Calorie Preferences Updated"],showCard:n}),f(Of,{errorsArr:o,showError:i})]}),z("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Calorie preferences"})}),f("section",{className:"row form__inputs",children:f("ul",{children:f("li",{className:"update__field",children:z("div",{className:"input__container",children:[f("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),f("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},gt())})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):z("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function z5(){b.useRef(null);const[e,t]=b.useState(!1);b.useState([]),b.useState(!1),b.useState(!1);const[n,r]=b.useState(f(X0,{setShowModal:t,handleSubmit:Va.updatePassword}));return z(l5,{children:[f("section",{className:"modal__container",children:e?f(v5,{setIsDisplayed:t,children:n}):f(Ut,{})}),z("section",{className:"profile-page",children:[z("section",{className:"container profile",children:[z("picture",{children:[f("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),f("img",{src:"/src/assets/spoon.png",alt:"user avatar"})]}),f("h3",{children:"Hi! Bob"}),f("h3",{children:"Email@email.com"})]}),z("section",{className:"container app-config",children:[z("section",{children:[f("h4",{children:"Your Dietary Preferences"}),z("ul",{className:"app-pref",children:[f("li",{children:f("div",{children:f("span",{children:"Gluten Free"})})}),f("li",{children:"Ketogenic"}),f("li",{children:"Vegetarian"}),f("li",{children:"Lacto-Vegetarian"}),f("li",{children:"Ovo-Vegetarian"}),f("li",{children:"Vegan"}),f("li",{children:"Pescetarian"}),f("li",{children:"Paleo"}),f("li",{children:"Primal"})]}),f("div",{className:"controls",children:f("span",{className:"btn",children:"Update Dietary Preferences"})})]}),z("ul",{className:"options",children:[f("li",{className:"btn",onClick:()=>{t(!0),r(f(C5,{setShowModal:t,handleSubmit:Va.updateCaloric}))},children:f("span",{children:"Update Caloric settings"})}),f("li",{className:"btn",onClick:()=>{t(!0),r(f(E5,{setShowModal:t,handleSubmit:Va.updateEmail}))},children:f("span",{children:"Update Email"})}),f("li",{onClick:()=>{t(!0),r(f(X0,{setShowModal:t,handleSubmit:Va.updatePassword}))},className:"btn",children:f("div",{children:f("span",{children:"Update Password"})})})]})]})]})]})}function ui({children:e}){const{isLoggedIn:t}=b.useContext(Gr);return t?f(Ut,{children:e}):f(Gv,{to:"/login"})}function P5(){return f(ow,{children:z("div",{className:"App",children:[f("header",{children:f(lw,{})}),z("main",{children:[z(Xv,{children:[f(Rt,{path:"/",element:f(fw,{})}),f(Rt,{path:"/search",element:f(ui,{children:f(F6,{})})}),f(Rt,{path:"/details",element:f(ui,{children:f(X6,{})})}),f(Rt,{path:"/saved",element:f(ui,{children:f(B6,{})})}),f(Rt,{path:"/signup",element:f(pw,{})}),f(Rt,{path:"/login",element:f(V6,{})}),f(Rt,{path:"/mealPlanner",element:f(ui,{children:f(Z6,{})})}),f(Rt,{path:"/profile",element:f(ui,{children:f(z5,{})})}),f(Rt,{path:"/*",element:f("h1",{children:"404 no page"})})]}),f(e5,{})]})]})})}Rs.createRoot(document.getElementById("root")).render(f(rn.StrictMode,{children:f(ty,{children:f(P5,{})})}));
