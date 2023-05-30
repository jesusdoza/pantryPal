function z1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ai={},I1={get exports(){return Ai},set exports(e){Ai=e}},Xo={},b={},L1={get exports(){return b},set exports(e){b=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),j1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),D1=Symbol.for("react.strict_mode"),M1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),Y1=Symbol.for("react.lazy"),If=Symbol.iterator;function Q1(e){return e===null||typeof e!="object"?null:(e=If&&e[If]||e["@@iterator"],typeof e=="function"?e:null)}var tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nm=Object.assign,rm={};function Br(e,t,n){this.props=e,this.context=t,this.refs=rm,this.updater=n||tm}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function im(){}im.prototype=Br.prototype;function ac(e,t,n){this.props=e,this.context=t,this.refs=rm,this.updater=n||tm}var oc=ac.prototype=new im;oc.constructor=ac;nm(oc,Br.prototype);oc.isPureReactComponent=!0;var Lf=Array.isArray,am=Object.prototype.hasOwnProperty,lc={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)am.call(t,r)&&!om.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:e,key:a,ref:o,props:i,_owner:lc.current}}function G1(e,t){return{$$typeof:na,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===na}function K1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jf=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K1(""+e.key):t.toString(36)}function Qa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case na:case j1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Yl(o,0):r,Lf(i)?(n="",e!=null&&(n=e.replace(jf,"$&/")+"/"),Qa(i,t,n,"",function(u){return u})):i!=null&&(sc(i)&&(i=G1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Lf(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Yl(a,l);o+=Qa(a,t,n,s,i)}else if(s=Q1(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Yl(a,l++),o+=Qa(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(e,t,n){if(e==null)return e;var r=[],i=0;return Qa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function X1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Ga={transition:null},J1={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:lc};Q.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Br;Q.Fragment=F1;Q.Profiler=M1;Q.PureComponent=ac;Q.StrictMode=D1;Q.Suspense=W1;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nm({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)am.call(t,s)&&!om.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:na,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:B1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U1,_context:e},e.Consumer=e};Q.createElement=lm;Q.createFactory=function(e){var t=lm.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:H1,render:e}};Q.isValidElement=sc;Q.lazy=function(e){return{$$typeof:Y1,_payload:{_status:-1,_result:e},_init:X1}};Q.memo=function(e,t){return{$$typeof:V1,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ga.transition;Ga.transition={};try{e()}finally{Ga.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Q.useContext=function(e){return Xe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Q.useId=function(){return Xe.current.useId()};Q.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Q.useRef=function(e){return Xe.current.useRef(e)};Q.useState=function(e){return Xe.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Xe.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(L1);const rn=$1(b),Is=z1({__proto__:null,default:rn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1=b,Z1=Symbol.for("react.element"),eg=Symbol.for("react.fragment"),tg=Object.prototype.hasOwnProperty,ng=q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rg={key:!0,ref:!0,__self:!0,__source:!0};function sm(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)tg.call(t,r)&&!rg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Z1,type:e,key:a,ref:o,props:i,_owner:ng.current}}Xo.Fragment=eg;Xo.jsx=sm;Xo.jsxs=sm;(function(e){e.exports=Xo})(I1);const Ut=Ai.Fragment,f=Ai.jsx,P=Ai.jsxs;var Ls={},js={},ig={get exports(){return js},set exports(e){js=e}},ut={},Fs={},ag={get exports(){return Fs},set exports(e){Fs=e}},um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,D){var U=R.length;R.push(D);e:for(;0<U;){var ie=U-1>>>1,z=R[ie];if(0<i(z,D))R[ie]=D,R[U]=z,U=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],U=R.pop();if(U!==D){R[0]=U;e:for(var ie=0,z=R.length,$=z>>>1;ie<$;){var L=2*(ie+1)-1,B=R[L],k=L+1,G=R[k];if(0>i(B,U))k<z&&0>i(G,B)?(R[ie]=G,R[k]=U,ie=k):(R[ie]=B,R[L]=U,ie=L);else if(k<z&&0>i(G,U))R[ie]=G,R[k]=U,ie=k;else break e}}return D}function i(R,D){var U=R.sortIndex-D.sortIndex;return U!==0?U:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,h=3,w=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function S(R){if(v=!1,y(R),!g)if(n(s)!==null)g=!0,Bt(C);else{var D=n(u);D!==null&&Qe(S,D.startTime-R)}}function C(R,D){g=!1,v&&(v=!1,m(O),O=-1),w=!0;var U=h;try{for(y(D),d=n(s);d!==null&&(!(d.expirationTime>D)||R&&!Ne());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var z=ie(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),y(D)}else r(s);d=n(s)}if(d!==null)var $=!0;else{var L=n(u);L!==null&&Qe(S,L.startTime-D),$=!1}return $}finally{d=null,h=U,w=!1}}var A=!1,N=null,O=-1,W=5,M=-1;function Ne(){return!(e.unstable_now()-M<W)}function ke(){if(N!==null){var R=e.unstable_now();M=R;var D=!0;try{D=N(!0,R)}finally{D?Re():(A=!1,N=null)}}else A=!1}var Re;if(typeof p=="function")Re=function(){p(ke)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,De=it.port2;it.port1.onmessage=ke,Re=function(){De.postMessage(null)}}else Re=function(){x(ke,0)};function Bt(R){N=R,A||(A=!0,Re())}function Qe(R,D){O=x(function(){R(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Bt(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var U=h;h=D;try{return R()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=h;h=R;try{return D()}finally{h=U}},e.unstable_scheduleCallback=function(R,D,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,R={id:c++,callback:D,priorityLevel:R,startTime:U,expirationTime:z,sortIndex:-1},U>ie?(R.sortIndex=U,t(u,R),n(s)===null&&R===n(u)&&(v?(m(O),O=-1):v=!0,Qe(S,U-ie))):(R.sortIndex=z,t(s,R),g||w||(g=!0,Bt(C))),R},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(R){var D=h;return function(){var U=h;h=D;try{return R.apply(this,arguments)}finally{h=U}}}})(um);(function(e){e.exports=um})(ag);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=b,st=Fs;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,Ri={};function ar(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Ri[e]=t,e=0;e<t.length;e++)fm.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Df={};function lg(e){return Ds.call(Df,e)?!0:Ds.call(Ff,e)?!1:og.test(e)?Df[e]=!0:(Ff[e]=!0,!1)}function sg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ug(e,t,n,r){if(t===null||typeof t>"u"||sg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uc,cc);Fe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uc,cc);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uc,cc);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function fc(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ug(t,n,i,r)&&(n=null),r||i===null?lg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),Us=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=Mf&&e[Mf]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ql;function pi(e){if(Ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ql=t&&t[1]||""}return`
`+Ql+e}var Gl=!1;function Kl(e,t){if(!e||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pi(e):""}function cg(e){switch(e.tag){case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Hs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case Ms:return"Profiler";case dc:return"StrictMode";case Us:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pm:return(e.displayName||"Context")+".Consumer";case dm:return(e._context.displayName||"Context")+".Provider";case pc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Hs(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Hs(e(t))}catch{}}return null}function fg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hs(t);case 8:return t===dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dg(e){var t=hm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ga(e){e._valueTracker||(e._valueTracker=dg(e))}function gm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ws(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vm(e,t){t=t.checked,t!=null&&fc(e,"checked",t,!1)}function Vs(e,t){vm(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ys(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ys(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ys(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(mi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function ym(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,xm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function Sm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function km(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mg=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(mg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Pr=null,Nr=null;function Vf(e){if(e=aa(e)){if(typeof qs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=tl(t),qs(e.stateNode,e.type,t))}}function bm(e){Pr?Nr?Nr.push(e):Nr=[e]:Pr=e}function Em(){if(Pr){var e=Pr,t=Nr;if(Nr=Pr=null,Vf(e),t)for(e=0;e<t.length;e++)Vf(t[e])}}function Cm(e,t){return e(t)}function Pm(){}var Xl=!1;function Nm(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Cm(e,t,n)}finally{Xl=!1,(Pr!==null||Nr!==null)&&(Pm(),Em())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Zs=!1;if(Xt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Zs=!1}function hg(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wi=!1,mo=null,ho=!1,eu=null,gg={onError:function(e){wi=!0,mo=e}};function vg(e,t,n,r,i,a,o,l,s){wi=!1,mo=null,hg.apply(gg,arguments)}function yg(e,t,n,r,i,a,o,l,s){if(vg.apply(this,arguments),wi){if(wi){var u=mo;wi=!1,mo=null}else throw Error(_(198));ho||(ho=!0,eu=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(or(e)!==e)throw Error(_(188))}function wg(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Yf(i),e;if(a===r)return Yf(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Om(e){return e=wg(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var Rm=st.unstable_scheduleCallback,Qf=st.unstable_cancelCallback,xg=st.unstable_shouldYield,Sg=st.unstable_requestPaint,ye=st.unstable_now,kg=st.unstable_getCurrentPriorityLevel,gc=st.unstable_ImmediatePriority,Tm=st.unstable_UserBlockingPriority,go=st.unstable_NormalPriority,bg=st.unstable_LowPriority,zm=st.unstable_IdlePriority,Jo=null,Dt=null;function Eg(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Ng,Cg=Math.log,Pg=Math.LN2;function Ng(e){return e>>>=0,e===0?32:31-(Cg(e)/Pg|0)|0}var ya=64,wa=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=hi(l):(a&=o,a!==0&&(r=hi(a)))}else o=n&~i,o!==0?r=hi(o):a!==0&&(r=hi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function _g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Og(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-_t(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=_g(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $m(){var e=ya;return ya<<=1,!(ya&4194240)&&(ya=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function Ag(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Im(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lm,yc,jm,Fm,Dm,nu=!1,xa=[],Sn=null,kn=null,bn=null,$i=new Map,Ii=new Map,hn=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":$i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function ri(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=aa(t),t!==null&&yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tg(e,t,n,r,i){switch(t){case"focusin":return Sn=ri(Sn,e,t,n,r,i),!0;case"dragenter":return kn=ri(kn,e,t,n,r,i),!0;case"mouseover":return bn=ri(bn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return $i.set(a,ri($i.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ii.set(a,ri(Ii.get(a)||null,e,t,n,r,i)),!0}return!1}function Mm(e){var t=Wn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=_m(n),t!==null){e.blockedOn=t,Dm(e.priority,function(){jm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Js=r,n.target.dispatchEvent(r),Js=null}else return t=aa(n),t!==null&&yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Kf(e,t,n){Ka(e)&&n.delete(t)}function zg(){nu=!1,Sn!==null&&Ka(Sn)&&(Sn=null),kn!==null&&Ka(kn)&&(kn=null),bn!==null&&Ka(bn)&&(bn=null),$i.forEach(Kf),Ii.forEach(Kf)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,zg)))}function Li(e){function t(i){return ii(i,e)}if(0<xa.length){ii(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ii(Sn,e),kn!==null&&ii(kn,e),bn!==null&&ii(bn,e),$i.forEach(t),Ii.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&hn.shift()}var _r=an.ReactCurrentBatchConfig,yo=!0;function $g(e,t,n,r){var i=te,a=_r.transition;_r.transition=null;try{te=1,wc(e,t,n,r)}finally{te=i,_r.transition=a}}function Ig(e,t,n,r){var i=te,a=_r.transition;_r.transition=null;try{te=4,wc(e,t,n,r)}finally{te=i,_r.transition=a}}function wc(e,t,n,r){if(yo){var i=ru(e,t,n,r);if(i===null)ls(e,t,r,wo,n),Gf(e,r);else if(Tg(i,e,t,n,r))r.stopPropagation();else if(Gf(e,r),t&4&&-1<Rg.indexOf(e)){for(;i!==null;){var a=aa(i);if(a!==null&&Lm(a),a=ru(e,t,n,r),a===null&&ls(e,t,r,wo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var wo=null;function ru(e,t,n,r){if(wo=null,e=hc(r),e=Wn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Um(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kg()){case gc:return 1;case Tm:return 4;case go:case bg:return 16;case zm:return 536870912;default:return 16}default:return 16}}var vn=null,xc=null,Xa=null;function Bm(){if(Xa)return Xa;var e,t=xc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Xa=i.slice(e,1<r?1-r:void 0)}function Ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function Xf(){return!1}function ct(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sa:Xf,this.isPropagationStopped=Xf,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=ct(Hr),ia=pe({},Hr,{view:0,detail:0}),Lg=ct(ia),ql,Zl,ai,qo=pe({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(ql=e.screenX-ai.screenX,Zl=e.screenY-ai.screenY):Zl=ql=0,ai=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Jf=ct(qo),jg=pe({},qo,{dataTransfer:0}),Fg=ct(jg),Dg=pe({},ia,{relatedTarget:0}),es=ct(Dg),Mg=pe({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=ct(Mg),Bg=pe({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hg=ct(Bg),Wg=pe({},Hr,{data:0}),qf=ct(Wg),Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qg[e])?!!t[e]:!1}function kc(){return Gg}var Kg=pe({},ia,{key:function(e){if(e.key){var t=Vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?Ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xg=ct(Kg),Jg=pe({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=ct(Jg),qg=pe({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Zg=ct(qg),ev=pe({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=ct(ev),nv=pe({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=ct(nv),iv=[9,13,27,32],bc=Xt&&"CompositionEvent"in window,xi=null;Xt&&"documentMode"in document&&(xi=document.documentMode);var av=Xt&&"TextEvent"in window&&!xi,Hm=Xt&&(!bc||xi&&8<xi&&11>=xi),ed=String.fromCharCode(32),td=!1;function Wm(e,t){switch(e){case"keyup":return iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function ov(e,t){switch(e){case"compositionend":return Vm(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function lv(e,t){if(fr)return e==="compositionend"||!bc&&Wm(e,t)?(e=Bm(),Xa=xc=vn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hm&&t.locale!=="ko"?null:t.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sv[e.type]:t==="textarea"}function Ym(e,t,n,r){bm(r),t=xo(t,"onChange"),0<t.length&&(n=new Sc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,ji=null;function uv(e){rh(e,0)}function Zo(e){var t=mr(e);if(gm(t))return e}function cv(e,t){if(e==="change")return t}var Qm=!1;if(Xt){var ts;if(Xt){var ns="oninput"in document;if(!ns){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),ns=typeof rd.oninput=="function"}ts=ns}else ts=!1;Qm=ts&&(!document.documentMode||9<document.documentMode)}function id(){Si&&(Si.detachEvent("onpropertychange",Gm),ji=Si=null)}function Gm(e){if(e.propertyName==="value"&&Zo(ji)){var t=[];Ym(t,ji,e,hc(e)),Nm(uv,t)}}function fv(e,t,n){e==="focusin"?(id(),Si=t,ji=n,Si.attachEvent("onpropertychange",Gm)):e==="focusout"&&id()}function dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(ji)}function pv(e,t){if(e==="click")return Zo(t)}function mv(e,t){if(e==="input"||e==="change")return Zo(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:hv;function Fi(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ds.call(t,i)||!At(e[i],t[i]))return!1}return!0}function ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var n=ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function Km(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Km(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xm(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gv(e){var t=Xm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Km(n.ownerDocument.documentElement,n)){if(r!==null&&Ec(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=od(n,a);var o=od(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vv=Xt&&"documentMode"in document&&11>=document.documentMode,dr=null,iu=null,ki=null,au=!1;function ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||dr==null||dr!==po(r)||(r=dr,"selectionStart"in r&&Ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Fi(ki,r)||(ki=r,r=xo(iu,"onSelect"),0<r.length&&(t=new Sc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},rs={},Jm={};Xt&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function el(e){if(rs[e])return rs[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jm)return rs[e]=t[n];return e}var qm=el("animationend"),Zm=el("animationiteration"),eh=el("animationstart"),th=el("transitionend"),nh=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){nh.set(e,t),ar(t,[e])}for(var is=0;is<sd.length;is++){var as=sd[is],yv=as.toLowerCase(),wv=as[0].toUpperCase()+as.slice(1);jn(yv,"on"+wv)}jn(qm,"onAnimationEnd");jn(Zm,"onAnimationIteration");jn(eh,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(th,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yg(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;ud(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;ud(i,l,u),a=s}}}if(ho)throw e=eu,ho=!1,eu=null,e}function oe(e,t){var n=t[cu];n===void 0&&(n=t[cu]=new Set);var r=e+"__bubble";n.has(r)||(ih(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),ih(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[ba]){e[ba]=!0,fm.forEach(function(n){n!=="selectionchange"&&(xv.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,os("selectionchange",!1,t))}}function ih(e,t,n,r){switch(Um(t)){case 1:var i=$g;break;case 4:i=Ig;break;default:i=wc}n=i.bind(null,t,n,e),i=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Nm(function(){var u=a,c=hc(n),d=[];e:{var h=nh.get(e);if(h!==void 0){var w=Sc,g=e;switch(e){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":w=Xg;break;case"focusin":g="focus",w=es;break;case"focusout":g="blur",w=es;break;case"beforeblur":case"afterblur":w=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Zg;break;case qm:case Zm:case eh:w=Ug;break;case th:w=tv;break;case"scroll":w=Lg;break;case"wheel":w=rv;break;case"copy":case"cut":case"paste":w=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zf}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=zi(p,m),S!=null&&v.push(Mi(p,S,y)))),x)break;p=p.return}0<v.length&&(h=new w(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Js&&(g=n.relatedTarget||n.fromElement)&&(Wn(g)||g[Jt]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Wn(g):null,g!==null&&(x=or(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=Jf,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Zf,S="onPointerLeave",m="onPointerEnter",p="pointer"),x=w==null?h:mr(w),y=g==null?h:mr(g),h=new v(S,p+"leave",w,n,c),h.target=x,h.relatedTarget=y,S=null,Wn(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=x,S=v),x=S,w&&g)t:{for(v=w,m=g,p=0,y=v;y;y=lr(y))p++;for(y=0,S=m;S;S=lr(S))y++;for(;0<p-y;)v=lr(v),p--;for(;0<y-p;)m=lr(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=lr(v),m=lr(m)}v=null}else v=null;w!==null&&cd(d,h,w,v,!1),g!==null&&x!==null&&cd(d,x,g,v,!0)}}e:{if(h=u?mr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=cv;else if(nd(h))if(Qm)C=mv;else{C=dv;var A=fv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=pv);if(C&&(C=C(e,u))){Ym(d,C,n,c);break e}A&&A(e,h,u),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ys(h,"number",h.value)}switch(A=u?mr(u):window,e){case"focusin":(nd(A)||A.contentEditable==="true")&&(dr=A,iu=u,ki=null);break;case"focusout":ki=iu=dr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,ld(d,n,c);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":ld(d,n,c)}var N;if(bc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fr?Wm(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Hm&&n.locale!=="ko"&&(fr||O!=="onCompositionStart"?O==="onCompositionEnd"&&fr&&(N=Bm()):(vn=c,xc="value"in vn?vn.value:vn.textContent,fr=!0)),A=xo(u,O),0<A.length&&(O=new qf(O,e,null,n,c),d.push({event:O,listeners:A}),N?O.data=N:(N=Vm(n),N!==null&&(O.data=N)))),(N=av?ov(e,n):lv(e,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(c=new qf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}rh(d,t)})}function Mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=zi(e,n),a!=null&&r.unshift(Mi(e,a,i)),a=zi(e,t),a!=null&&r.push(Mi(e,a,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=zi(n,a),s!=null&&o.unshift(Mi(n,s,l))):i||(s=zi(n,a),s!=null&&o.push(Mi(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Sv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(Sv,`
`).replace(kv,"")}function Ea(e,t,n){if(t=fd(t),fd(e)!==t&&n)throw Error(_(425))}function So(){}var ou=null,lu=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch(Cv)}:uu;function Cv(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Wr,Ui="__reactProps$"+Wr,Jt="__reactContainer$"+Wr,cu="__reactEvents$"+Wr,Pv="__reactListeners$"+Wr,Nv="__reactHandles$"+Wr;function Wn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pd(e);e!==null;){if(n=e[$t])return n;e=pd(e)}return t}e=n,n=e.parentNode}return null}function aa(e){return e=e[$t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function tl(e){return e[Ui]||null}var fu=[],hr=-1;function Fn(e){return{current:e}}function se(e){0>hr||(e.current=fu[hr],fu[hr]=null,hr--)}function ae(e,t){hr++,fu[hr]=e.current,e.current=t}var Tn={},Ve=Fn(Tn),tt=Fn(!1),Jn=Tn;function zr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nt(e){return e=e.childContextTypes,e!=null}function ko(){se(tt),se(Ve)}function md(e,t,n){if(Ve.current!==Tn)throw Error(_(168));ae(Ve,t),ae(tt,n)}function ah(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,fg(e)||"Unknown",i));return pe({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Jn=Ve.current,ae(Ve,e),ae(tt,tt.current),!0}function hd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ah(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,se(tt),se(Ve),ae(Ve,e)):se(tt),ae(tt,n)}var Vt=null,nl=!1,us=!1;function oh(e){Vt===null?Vt=[e]:Vt.push(e)}function _v(e){nl=!0,oh(e)}function Dn(){if(!us&&Vt!==null){us=!0;var e=0,t=te;try{var n=Vt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,nl=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),Rm(gc,Dn),i}finally{te=t,us=!1}}return null}var gr=[],vr=0,Eo=null,Co=0,pt=[],mt=0,qn=null,Yt=1,Qt="";function Bn(e,t){gr[vr++]=Co,gr[vr++]=Eo,Eo=e,Co=t}function lh(e,t,n){pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=qn,qn=e;var r=Yt;e=Qt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var a=32-_t(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-_t(t)+i|n<<i|r,Qt=a+e}else Yt=1<<a|n<<i|r,Qt=e}function Cc(e){e.return!==null&&(Bn(e,1),lh(e,1,0))}function Pc(e){for(;e===Eo;)Eo=gr[--vr],gr[vr]=null,Co=gr[--vr],gr[vr]=null;for(;e===qn;)qn=pt[--mt],pt[mt]=null,Qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var lt=null,ot=null,ce=!1,Pt=null;function sh(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,ot=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,ot=null,!0):!1;default:return!1}}function du(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pu(e){if(ce){var t=ot;if(t){var n=t;if(!gd(e,t)){if(du(e))throw Error(_(418));t=En(n.nextSibling);var r=lt;t&&gd(e,t)?sh(r,n):(e.flags=e.flags&-4097|2,ce=!1,lt=e)}}else{if(du(e))throw Error(_(418));e.flags=e.flags&-4097|2,ce=!1,lt=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Ca(e){if(e!==lt)return!1;if(!ce)return vd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=ot)){if(du(e))throw uh(),Error(_(418));for(;t;)sh(e,t),t=En(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=lt?En(e.stateNode.nextSibling):null;return!0}function uh(){for(var e=ot;e;)e=En(e.nextSibling)}function $r(){ot=lt=null,ce=!1}function Nc(e){Pt===null?Pt=[e]:Pt.push(e)}var Ov=an.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Po=Fn(null),No=null,yr=null,_c=null;function Oc(){_c=yr=No=null}function Ac(e){var t=Po.current;se(Po),e._currentValue=t}function mu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){No=e,_c=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(_c!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(No===null)throw Error(_(308));yr=e,No.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Vn=null;function Rc(e){Vn===null?Vn=[e]:Vn.push(e)}function ch(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function Tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}function yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;mn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,w=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(w,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,d,h):g,h==null)break e;d=pe({},d,h);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,s=d):c=c.next=w,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);er|=o,e.lanes=o,e.memoizedState=d}}function wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var dh=new cm.Component().refs;function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),a=Gt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(Ot(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Nn(e),a=Gt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,i),t!==null&&(Ot(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Nn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(Ot(t,e,r,n),qa(t,e,r))}};function xd(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,a):!0}function ph(e,t,n){var r=!1,i=Tn,a=t.contextType;return typeof a=="object"&&a!==null?a=yt(a):(i=nt(t)?Jn:Ve.current,r=t.contextTypes,a=(r=r!=null)?zr(e,i):Tn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function gu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=dh,Tc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=yt(a):(a=nt(t)?Jn:Ve.current,i.context=zr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hu(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rl.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===dh&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kd(e){var t=e._init;return t(e._payload)}function mh(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_n(m,p),m.index=0,m.sibling=null,m}function a(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,S){return p===null||p.tag!==6?(p=gs(y,m.mode,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function s(m,p,y,S){var C=y.type;return C===cr?c(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&kd(C)===p.type)?(S=i(p,y.props),S.ref=oi(m,p,y),S.return=m,S):(S=io(y.type,y.key,y.props,null,m.mode,S),S.ref=oi(m,p,y),S.return=m,S)}function u(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=vs(y,m.mode,S),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,S,C){return p===null||p.tag!==7?(p=Xn(y,m.mode,S,C),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=gs(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ha:return y=io(p.type,p.key,p.props,null,m.mode,y),y.ref=oi(m,null,p),y.return=m,y;case ur:return p=vs(p,m.mode,y),p.return=m,p;case pn:var S=p._init;return d(m,S(p._payload),y)}if(mi(p)||ti(p))return p=Xn(p,m.mode,y,null),p.return=m,p;Pa(m,p)}return null}function h(m,p,y,S){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return y.key===C?s(m,p,y,S):null;case ur:return y.key===C?u(m,p,y,S):null;case pn:return C=y._init,h(m,p,C(y._payload),S)}if(mi(y)||ti(y))return C!==null?null:c(m,p,y,S,null);Pa(m,y)}return null}function w(m,p,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,l(p,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ha:return m=m.get(S.key===null?y:S.key)||null,s(p,m,S,C);case ur:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,C);case pn:var A=S._init;return w(m,p,y,A(S._payload),C)}if(mi(S)||ti(S))return m=m.get(y)||null,c(p,m,S,C,null);Pa(p,S)}return null}function g(m,p,y,S){for(var C=null,A=null,N=p,O=p=0,W=null;N!==null&&O<y.length;O++){N.index>O?(W=N,N=null):W=N.sibling;var M=h(m,N,y[O],S);if(M===null){N===null&&(N=W);break}e&&N&&M.alternate===null&&t(m,N),p=a(M,p,O),A===null?C=M:A.sibling=M,A=M,N=W}if(O===y.length)return n(m,N),ce&&Bn(m,O),C;if(N===null){for(;O<y.length;O++)N=d(m,y[O],S),N!==null&&(p=a(N,p,O),A===null?C=N:A.sibling=N,A=N);return ce&&Bn(m,O),C}for(N=r(m,N);O<y.length;O++)W=w(N,m,O,y[O],S),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?O:W.key),p=a(W,p,O),A===null?C=W:A.sibling=W,A=W);return e&&N.forEach(function(Ne){return t(m,Ne)}),ce&&Bn(m,O),C}function v(m,p,y,S){var C=ti(y);if(typeof C!="function")throw Error(_(150));if(y=C.call(y),y==null)throw Error(_(151));for(var A=C=null,N=p,O=p=0,W=null,M=y.next();N!==null&&!M.done;O++,M=y.next()){N.index>O?(W=N,N=null):W=N.sibling;var Ne=h(m,N,M.value,S);if(Ne===null){N===null&&(N=W);break}e&&N&&Ne.alternate===null&&t(m,N),p=a(Ne,p,O),A===null?C=Ne:A.sibling=Ne,A=Ne,N=W}if(M.done)return n(m,N),ce&&Bn(m,O),C;if(N===null){for(;!M.done;O++,M=y.next())M=d(m,M.value,S),M!==null&&(p=a(M,p,O),A===null?C=M:A.sibling=M,A=M);return ce&&Bn(m,O),C}for(N=r(m,N);!M.done;O++,M=y.next())M=w(N,m,O,M.value,S),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?O:M.key),p=a(M,p,O),A===null?C=M:A.sibling=M,A=M);return e&&N.forEach(function(ke){return t(m,ke)}),ce&&Bn(m,O),C}function x(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===cr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:e:{for(var C=y.key,A=p;A!==null;){if(A.key===C){if(C=y.type,C===cr){if(A.tag===7){n(m,A.sibling),p=i(A,y.props.children),p.return=m,m=p;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&kd(C)===A.type){n(m,A.sibling),p=i(A,y.props),p.ref=oi(m,A,y),p.return=m,m=p;break e}n(m,A);break}else t(m,A);A=A.sibling}y.type===cr?(p=Xn(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=io(y.type,y.key,y.props,null,m.mode,S),S.ref=oi(m,p,y),S.return=m,m=S)}return o(m);case ur:e:{for(A=y.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=vs(y,m.mode,S),p.return=m,m=p}return o(m);case pn:return A=y._init,x(m,p,A(y._payload),S)}if(mi(y))return g(m,p,y,S);if(ti(y))return v(m,p,y,S);Pa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=gs(y,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return x}var Ir=mh(!0),hh=mh(!1),oa={},Mt=Fn(oa),Bi=Fn(oa),Hi=Fn(oa);function Yn(e){if(e===oa)throw Error(_(174));return e}function zc(e,t){switch(ae(Hi,t),ae(Bi,e),ae(Mt,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}se(Mt),ae(Mt,t)}function Lr(){se(Mt),se(Bi),se(Hi)}function gh(e){Yn(Hi.current);var t=Yn(Mt.current),n=Gs(t,e.type);t!==n&&(ae(Bi,e),ae(Mt,n))}function $c(e){Bi.current===e&&(se(Mt),se(Bi))}var fe=Fn(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function Ic(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Za=an.ReactCurrentDispatcher,fs=an.ReactCurrentBatchConfig,Zn=0,de=null,be=null,_e=null,Ao=!1,bi=!1,Wi=0,Av=0;function Ue(){throw Error(_(321))}function Lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function jc(e,t,n,r,i,a){if(Zn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Za.current=e===null||e.memoizedState===null?$v:Iv,e=n(r,i),bi){a=0;do{if(bi=!1,Wi=0,25<=a)throw Error(_(301));a+=1,_e=be=null,t.updateQueue=null,Za.current=Lv,e=n(r,i)}while(bi)}if(Za.current=Ro,t=be!==null&&be.next!==null,Zn=0,_e=be=de=null,Ao=!1,t)throw Error(_(300));return e}function Fc(){var e=Wi!==0;return Wi=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?de.memoizedState=_e=e:_e=_e.next=e,_e}function wt(){if(be===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=_e===null?de.memoizedState:_e.next;if(t!==null)_e=t,be=e;else{if(e===null)throw Error(_(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},_e===null?de.memoizedState=_e=e:_e=_e.next=e}return _e}function Vi(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=wt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((Zn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,de.lanes|=c,er|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,At(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,er|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=wt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);At(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vh(){}function yh(e,t){var n=de,r=wt(),i=t(),a=!At(r.memoizedState,i);if(a&&(r.memoizedState=i,et=!0),r=r.queue,Dc(Sh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Yi(9,xh.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(_(349));Zn&30||wh(n,t,i)}return i}function wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,r){t.value=n,t.getSnapshot=r,kh(t)&&bh(e)}function Sh(e,t,n){return n(function(){kh(t)&&bh(e)})}function kh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function bh(e){var t=qt(e,1);t!==null&&Ot(t,e,1,-1)}function bd(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t.queue=e,e=e.dispatch=zv.bind(null,de,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eh(){return wt().memoizedState}function eo(e,t,n,r){var i=zt();de.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function il(e,t,n,r){var i=wt();r=r===void 0?null:r;var a=void 0;if(be!==null){var o=be.memoizedState;if(a=o.destroy,r!==null&&Lc(r,o.deps)){i.memoizedState=Yi(t,n,a,r);return}}de.flags|=e,i.memoizedState=Yi(1|t,n,a,r)}function Ed(e,t){return eo(8390656,8,e,t)}function Dc(e,t){return il(2048,8,e,t)}function Ch(e,t){return il(4,2,e,t)}function Ph(e,t){return il(4,4,e,t)}function Nh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _h(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,Nh.bind(null,t,e),n)}function Mc(){}function Oh(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ah(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rh(e,t,n){return Zn&21?(At(n,t)||(n=$m(),de.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Rv(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=fs.transition;fs.transition={};try{e(!1),t()}finally{te=n,fs.transition=r}}function Th(){return wt().memoizedState}function Tv(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e))$h(t,n);else if(n=ch(e,t,n,r),n!==null){var i=Ke();Ot(n,e,r,i),Ih(n,t,r)}}function zv(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))$h(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,o)){var s=t.interleaved;s===null?(i.next=i,Rc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ch(e,t,i,r),n!==null&&(i=Ke(),Ot(n,e,r,i),Ih(n,t,r))}}function zh(e){var t=e.alternate;return e===de||t!==null&&t===de}function $h(e,t){bi=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ih(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}var Ro={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},$v={readContext:yt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,Nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tv.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:bd,useDebugValue:Mc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=bd(!1),t=e[0];return e=Rv.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=zt();if(ce){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Oe===null)throw Error(_(349));Zn&30||wh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ed(Sh.bind(null,r,a,e),[e]),r.flags|=2048,Yi(9,xh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=zt(),t=Oe.identifierPrefix;if(ce){var n=Qt,r=Yt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Av++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iv={readContext:yt,useCallback:Oh,useContext:yt,useEffect:Dc,useImperativeHandle:_h,useInsertionEffect:Ch,useLayoutEffect:Ph,useMemo:Ah,useReducer:ds,useRef:Eh,useState:function(){return ds(Vi)},useDebugValue:Mc,useDeferredValue:function(e){var t=wt();return Rh(t,be.memoizedState,e)},useTransition:function(){var e=ds(Vi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:vh,useSyncExternalStore:yh,useId:Th,unstable_isNewReconciler:!1},Lv={readContext:yt,useCallback:Oh,useContext:yt,useEffect:Dc,useImperativeHandle:_h,useInsertionEffect:Ch,useLayoutEffect:Ph,useMemo:Ah,useReducer:ps,useRef:Eh,useState:function(){return ps(Vi)},useDebugValue:Mc,useDeferredValue:function(e){var t=wt();return be===null?t.memoizedState=e:Rh(t,be.memoizedState,e)},useTransition:function(){var e=ps(Vi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:vh,useSyncExternalStore:yh,useId:Th,unstable_isNewReconciler:!1};function jr(e,t){try{var n="",r=t;do n+=cg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function Lh(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,Nu=r),vu(e,t)},n}function jh(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vu(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jv.bind(null,e,t,n),t.then(e,e))}function Pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Fv=an.ReactCurrentOwner,et=!1;function Ge(e,t,n,r){t.child=e===null?hh(t,null,n,r):Ir(t,e.child,n,r)}function _d(e,t,n,r,i){n=n.render;var a=t.ref;return Or(t,i),r=jc(e,t,n,r,a,i),n=Fc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&n&&Cc(t),t.flags|=1,Ge(e,t,r,i),t.child)}function Od(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Gc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fh(e,t,a,r,i)):(e=io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(o,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=_n(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Fi(a,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return yu(e,t,n,r,i)}function Dh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(xr,at),at|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(xr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ae(xr,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ae(xr,at),at|=r;return Ge(e,t,i,n),t.child}function Mh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,i){var a=nt(n)?Jn:Ve.current;return a=zr(t,a),Or(t,i),n=jc(e,t,n,r,a,i),r=Fc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ce&&r&&Cc(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Ad(e,t,n,r,i){if(nt(n)){var a=!0;bo(t)}else a=!1;if(Or(t,i),t.stateNode===null)to(e,t),ph(t,n,r),gu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=nt(n)?Jn:Ve.current,u=zr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Sd(t,o,r,u),mn=!1;var h=t.memoizedState;o.state=h,_o(t,r,o,i),s=t.memoizedState,l!==r||h!==s||tt.current||mn?(typeof c=="function"&&(hu(t,n,c,r),s=t.memoizedState),(l=mn||xd(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Et(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=nt(n)?Jn:Ve.current,s=zr(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Sd(t,o,r,s),mn=!1,h=t.memoizedState,o.state=h,_o(t,r,o,i);var g=t.memoizedState;l!==d||h!==g||tt.current||mn?(typeof w=="function"&&(hu(t,n,w,r),g=t.memoizedState),(u=mn||xd(t,n,u,r,h,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return wu(e,t,n,r,a,i)}function wu(e,t,n,r,i,a){Mh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&hd(t,n,!1),Zt(e,t,a);r=t.stateNode,Fv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ir(t,e.child,null,a),t.child=Ir(t,null,l,a)):Ge(e,t,l,a),t.memoizedState=r.state,i&&hd(t,n,!0),t.child}function Uh(e){var t=e.stateNode;t.pendingContext?md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&md(e,t.context,!1),zc(e,t.containerInfo)}function Rd(e,t,n,r,i){return $r(),Nc(i),t.flags|=256,Ge(e,t,n,r),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bh(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return pu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ll(o,r,0,null),e=Xn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Su(n),t.memoizedState=xu,e):Uc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Dv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=_n(l,a):(a=Xn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Su(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=xu,r}return a=e.child,e=a.sibling,r=_n(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uc(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Na(e,t,n,r){return r!==null&&Nc(r),Ir(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ms(Error(_(422))),Na(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ll({mode:"visible",children:r.children},i,0,null),a=Xn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ir(t,e.child,null,o),t.child.memoizedState=Su(o),t.memoizedState=xu,a);if(!(t.mode&1))return Na(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(_(419)),r=ms(a,r,void 0),Na(e,t,o,r)}if(l=(o&e.childLanes)!==0,et||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,qt(e,i),Ot(r,e,i,-1))}return Qc(),r=ms(Error(_(421))),Na(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ot=En(i.nextSibling),lt=t,ce=!0,Pt=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=Qt,pt[mt++]=qn,Yt=e.id,Qt=e.overflow,qn=t),t=Uc(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mu(e.return,t,n)}function hs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Hh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ge(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hs(t,!0,n,null,a);break;case"together":hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mv(e,t,n){switch(t.tag){case 3:Uh(t),$r();break;case 5:gh(t);break;case 1:nt(t.type)&&bo(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Bh(e,t,n):(ae(fe,fe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Dh(e,t,n)}return Zt(e,t,n)}var Wh,ku,Vh,Yh;Wh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};Vh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Mt.current);var a=null;switch(n){case"input":i=Ws(e,i),r=Ws(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Qs(e,i),r=Qs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}Ks(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Yh=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uv(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return nt(t.type)&&ko(),Be(t),null;case 3:return r=t.stateNode,Lr(),se(tt),se(Ve),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Au(Pt),Pt=null))),ku(e,t),Be(t),null;case 5:$c(t);var i=Yn(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Vh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Be(t),null}if(e=Yn(Mt.current),Ca(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[$t]=t,r[Ui]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<gi.length;i++)oe(gi[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Uf(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":Hf(r,a),oe("invalid",r)}Ks(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),i=["children",""+l]):Ri.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ga(r),Bf(r,a,!0);break;case"textarea":ga(r),Wf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=So)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$t]=t,e[Ui]=r,Wh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Xs(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<gi.length;i++)oe(gi[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Uf(e,r),i=Ws(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Hf(e,r),i=Qs(e,r),oe("invalid",e);break;default:i=r}Ks(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?km(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xm(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ti(e,s):typeof s=="number"&&Ti(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ri.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&fc(e,a,s,o))}switch(n){case"input":ga(e),Bf(e,r,!1);break;case"textarea":ga(e),Wf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Cr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Yh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Yn(Hi.current),Yn(Mt.current),Ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(a=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Be(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ot!==null&&t.mode&1&&!(t.flags&128))uh(),$r(),t.flags|=98560,a=!1;else if(a=Ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[$t]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),a=!1}else Pt!==null&&(Au(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ee===0&&(Ee=3):Qc())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Lr(),ku(e,t),e===null&&Di(t.stateNode.containerInfo),Be(t),null;case 10:return Ac(t.type._context),Be(t),null;case 17:return nt(t.type)&&ko(),Be(t),null;case 19:if(se(fe),a=t.memoizedState,a===null)return Be(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)li(a,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Oo(e),o!==null){for(t.flags|=128,li(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Fr&&(t.flags|=128,r=!0,li(a,!1),t.lanes=4194304)}else{if(!r)if(e=Oo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Be(t),null}else 2*ye()-a.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,li(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Yc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Bv(e,t){switch(Pc(t),t.tag){case 1:return nt(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),se(tt),se(Ve),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Lr(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var _a=!1,We=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,j=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function bu(e,t,n){try{n()}catch(r){he(e,t,r)}}var zd=!1;function Wv(e,t){if(ou=yo,e=Xm(),Ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)h=d,d=w;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=o),h===a&&++c===r&&(s=o),(w=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:e,selectionRange:n},yo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Et(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=zd,zd=!1,g}function Ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bu(t,n,a)}i=i.next}while(i!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qh(e){var t=e.alternate;t!==null&&(e.alternate=null,Qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Ui],delete t[cu],delete t[Pv],delete t[Nv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gh(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}var Le=null,Ct=!1;function un(e,t,n){for(n=n.child;n!==null;)Kh(e,t,n),n=n.sibling}function Kh(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:We||wr(n,t);case 6:var r=Le,i=Ct;Le=null,un(e,t,n),Le=r,Ct=i,Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ct?(e=Le,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Li(e)):ss(Le,n.stateNode));break;case 4:r=Le,i=Ct,Le=n.stateNode.containerInfo,Ct=!0,un(e,t,n),Le=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bu(n,t,o),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!We&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,un(e,t,n),We=r):un(e,t,n);break;default:un(e,t,n)}}function Id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hv),t.forEach(function(r){var i=Zv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Ct=!1;break e;case 3:Le=l.stateNode.containerInfo,Ct=!0;break e;case 4:Le=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Le===null)throw Error(_(160));Kh(a,o,i),Le=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xh(t,e),t=t.sibling}function Xh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Rt(e),r&4){try{Ei(3,e,e.return),al(3,e)}catch(v){he(e,e.return,v)}try{Ei(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:kt(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(kt(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&vm(i,a),Xs(l,o);var u=Xs(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?km(i,d):c==="dangerouslySetInnerHTML"?xm(i,d):c==="children"?Ti(i,d):fc(i,c,d,u)}switch(l){case"input":Vs(i,a);break;case"textarea":ym(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?Cr(i,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?Cr(i,!!a.multiple,a.defaultValue,!0):Cr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ui]=a}catch(v){he(e,e.return,v)}}break;case 6:if(kt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){he(e,e.return,v)}}break;case 3:if(kt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=ye())),r&4&&Id(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||c,kt(t,e),We=u):kt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:Ei(4,h,h.return);break;case 1:wr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){jd(d);continue}}w!==null?(w.return=h,j=w):jd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sm("display",o))}catch(v){he(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){he(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),Rt(e),r&4&&Id(e);break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var a=$d(e);Pu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$d(e);Cu(e,l,o);break;default:throw Error(_(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vv(e,t,n){j=e,Jh(e)}function Jh(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||We;l=_a;var u=We;if(_a=o,(We=s)&&!u)for(j=i;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?Fd(i):s!==null?(s.return=o,j=s):Fd(i);for(;a!==null;)j=a,Jh(a),a=a.sibling;j=i,_a=l,We=u}Ld(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):Ld(e)}}function Ld(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&wd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Li(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}We||t.flags&512&&Eu(t)}catch(h){he(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function jd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Fd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{Eu(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{Eu(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var Yv=Math.ceil,To=an.ReactCurrentDispatcher,Bc=an.ReactCurrentOwner,vt=an.ReactCurrentBatchConfig,X=0,Oe=null,xe=null,je=0,at=0,xr=Fn(0),Ee=0,Qi=null,er=0,ol=0,Hc=0,Ci=null,Ze=null,Wc=0,Fr=1/0,Wt=null,zo=!1,Nu=null,Pn=null,Oa=!1,yn=null,$o=0,Pi=0,_u=null,no=-1,ro=0;function Ke(){return X&6?ye():no!==-1?no:no=ye()}function Nn(e){return e.mode&1?X&2&&je!==0?je&-je:Ov.transition!==null?(ro===0&&(ro=$m()),ro):(e=te,e!==0||(e=window.event,e=e===void 0?16:Um(e.type)),e):1}function Ot(e,t,n,r){if(50<Pi)throw Pi=0,_u=null,Error(_(185));ra(e,n,r),(!(X&2)||e!==Oe)&&(e===Oe&&(!(X&2)&&(ol|=n),Ee===4&&gn(e,je)),rt(e,r),n===1&&X===0&&!(t.mode&1)&&(Fr=ye()+500,nl&&Dn()))}function rt(e,t){var n=e.callbackNode;Og(e,t);var r=vo(e,e===Oe?je:0);if(r===0)n!==null&&Qf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qf(n),t===1)e.tag===0?_v(Dd.bind(null,e)):oh(Dd.bind(null,e)),Ev(function(){!(X&6)&&Dn()}),n=null;else{switch(Im(r)){case 1:n=gc;break;case 4:n=Tm;break;case 16:n=go;break;case 536870912:n=zm;break;default:n=go}n=a0(n,qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qh(e,t){if(no=-1,ro=0,X&6)throw Error(_(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=vo(e,e===Oe?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=X;X|=2;var a=e0();(Oe!==e||je!==t)&&(Wt=null,Fr=ye()+500,Kn(e,t));do try{Kv();break}catch(l){Zh(e,l)}while(1);Oc(),To.current=a,X=i,xe!==null?t=0:(Oe=null,je=0,t=Ee)}if(t!==0){if(t===2&&(i=tu(e),i!==0&&(r=i,t=Ou(e,i))),t===1)throw n=Qi,Kn(e,0),gn(e,r),rt(e,ye()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qv(i)&&(t=Io(e,r),t===2&&(a=tu(e),a!==0&&(r=a,t=Ou(e,a))),t===1))throw n=Qi,Kn(e,0),gn(e,r),rt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Hn(e,Ze,Wt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Wc+500-ye(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uu(Hn.bind(null,e,Ze,Wt),t);break}Hn(e,Ze,Wt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-_t(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yv(r/1960))-r,10<r){e.timeoutHandle=uu(Hn.bind(null,e,Ze,Wt),r);break}Hn(e,Ze,Wt);break;case 5:Hn(e,Ze,Wt);break;default:throw Error(_(329))}}}return rt(e,ye()),e.callbackNode===n?qh.bind(null,e):null}function Ou(e,t){var n=Ci;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Au(t)),e}function Au(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Qv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!At(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Hc,t&=~ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Dd(e){if(X&6)throw Error(_(327));Ar();var t=vo(e,0);if(!(t&1))return rt(e,ye()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=tu(e);r!==0&&(t=r,n=Ou(e,r))}if(n===1)throw n=Qi,Kn(e,0),gn(e,t),rt(e,ye()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,Ze,Wt),rt(e,ye()),null}function Vc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Fr=ye()+500,nl&&Dn())}}function tr(e){yn!==null&&yn.tag===0&&!(X&6)&&Ar();var t=X;X|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,e)return e()}finally{te=r,vt.transition=n,X=t,!(X&6)&&Dn()}}function Yc(){at=xr.current,se(xr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bv(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Lr(),se(tt),se(Ve),Ic();break;case 5:$c(r);break;case 4:Lr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:Ac(r.type._context);break;case 22:case 23:Yc()}n=n.return}if(Oe=e,xe=e=_n(e.current,null),je=at=t,Ee=0,Qi=null,Hc=ol=er=0,Ze=Ci=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Vn=null}return e}function Zh(e,t){do{var n=xe;try{if(Oc(),Za.current=Ro,Ao){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ao=!1}if(Zn=0,_e=be=de=null,bi=!1,Wi=0,Bc.current=null,n===null||n.return===null){Ee=1,Qi=t,xe=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=je,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=Pd(o);if(w!==null){w.flags&=-257,Nd(w,o,l,a,t),w.mode&1&&Cd(a,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Cd(a,u,t),Qc();break e}s=Error(_(426))}}else if(ce&&l.mode&1){var x=Pd(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Nd(x,o,l,a,t),Nc(jr(s,l));break e}}a=s=jr(s,l),Ee!==4&&(Ee=2),Ci===null?Ci=[a]:Ci.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Lh(a,s,t);yd(a,m);break e;case 1:l=s;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pn===null||!Pn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=jh(a,l,t);yd(a,S);break e}}a=a.return}while(a!==null)}n0(n)}catch(C){t=C,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function e0(){var e=To.current;return To.current=Ro,e===null?Ro:e}function Qc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Oe===null||!(er&268435455)&&!(ol&268435455)||gn(Oe,je)}function Io(e,t){var n=X;X|=2;var r=e0();(Oe!==e||je!==t)&&(Wt=null,Kn(e,t));do try{Gv();break}catch(i){Zh(e,i)}while(1);if(Oc(),X=n,To.current=r,xe!==null)throw Error(_(261));return Oe=null,je=0,Ee}function Gv(){for(;xe!==null;)t0(xe)}function Kv(){for(;xe!==null&&!xg();)t0(xe)}function t0(e){var t=i0(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?n0(e):xe=t,Bc.current=null}function n0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bv(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,xe=null;return}}else if(n=Uv(n,t,at),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ee===0&&(Ee=5)}function Hn(e,t,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,Xv(e,t,n,r)}finally{vt.transition=i,te=r}return null}function Xv(e,t,n,r){do Ar();while(yn!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Ag(e,a),e===Oe&&(xe=Oe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,a0(go,function(){return Ar(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vt.transition,vt.transition=null;var o=te;te=1;var l=X;X|=4,Bc.current=null,Wv(e,n),Xh(n,e),gv(lu),yo=!!ou,lu=ou=null,e.current=n,Vv(n),Sg(),X=l,te=o,vt.transition=a}else e.current=n;if(Oa&&(Oa=!1,yn=e,$o=i),a=e.pendingLanes,a===0&&(Pn=null),Eg(n.stateNode),rt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=Nu,Nu=null,e;return $o&1&&e.tag!==0&&Ar(),a=e.pendingLanes,a&1?e===_u?Pi++:(Pi=0,_u=e):Pi=0,Dn(),null}function Ar(){if(yn!==null){var e=Im($o),t=vt.transition,n=te;try{if(vt.transition=null,te=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,$o=0,X&6)throw Error(_(331));var i=X;for(X|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Ei(8,c,a)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,w=c.return;if(Qh(c),c===u){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ei(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var p=e.current;for(j=p;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=p;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:al(9,l)}}catch(C){he(l,l.return,C)}if(l===o){j=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,j=S;break e}j=l.return}}if(X=i,Dn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{te=n,vt.transition=t}}return!1}function Md(e,t,n){t=jr(n,t),t=Lh(e,t,1),e=Cn(e,t,1),t=Ke(),e!==null&&(ra(e,1,t),rt(e,t))}function he(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=jr(n,e),e=jh(t,e,1),t=Cn(t,e,1),e=Ke(),t!==null&&(ra(t,1,e),rt(t,e));break}}t=t.return}}function Jv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(je&n)===n&&(Ee===4||Ee===3&&(je&130023424)===je&&500>ye()-Wc?Kn(e,0):Hc|=n),rt(e,t)}function r0(e,t){t===0&&(e.mode&1?(t=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):t=1);var n=Ke();e=qt(e,t),e!==null&&(ra(e,t,n),rt(e,n))}function qv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),r0(e,n)}function Zv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),r0(e,n)}var i0;i0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Mv(e,t,n);et=!!(e.flags&131072)}else et=!1,ce&&t.flags&1048576&&lh(t,Co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var i=zr(t,Ve.current);Or(t,n),i=jc(null,t,r,e,i,n);var a=Fc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(a=!0,bo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tc(t),i.updater=rl,t.stateNode=i,i._reactInternals=t,gu(t,r,e,n),t=wu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&Cc(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ty(r),e=Et(r,e),i){case 0:t=yu(null,t,r,e,n);break e;case 1:t=Ad(null,t,r,e,n);break e;case 11:t=_d(null,t,r,e,n);break e;case 14:t=Od(null,t,r,Et(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Ad(e,t,r,i,n);case 3:e:{if(Uh(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,fh(e,t),_o(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=jr(Error(_(423)),t),t=Rd(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(_(424)),t),t=Rd(e,t,r,n,i);break e}else for(ot=En(t.stateNode.containerInfo.firstChild),lt=t,ce=!0,Pt=null,n=hh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=Zt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return gh(t),e===null&&pu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,su(r,i)?o=null:a!==null&&su(r,a)&&(t.flags|=32),Mh(e,t),Ge(e,t,o,n),t.child;case 6:return e===null&&pu(t),null;case 13:return Bh(e,t,n);case 4:return zc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),_d(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ae(Po,r._currentValue),r._currentValue=o,a!==null)if(At(a.value,o)){if(a.children===i.children&&!tt.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Gt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),mu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Or(t,n),i=yt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),Od(e,t,r,i,n);case 15:return Fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),to(e,t),t.tag=1,nt(r)?(e=!0,bo(t)):e=!1,Or(t,n),ph(t,r,i),gu(t,r,i,n),wu(null,t,r,!0,e,n);case 19:return Hh(e,t,n);case 22:return Dh(e,t,n)}throw Error(_(156,t.tag))};function a0(e,t){return Rm(e,t)}function ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new ey(e,t,n,r)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ty(e){if(typeof e=="function")return Gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pc)return 11;if(e===mc)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Gc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case cr:return Xn(n.children,i,a,t);case dc:o=8,i|=8;break;case Ms:return e=ht(12,n,t,i|2),e.elementType=Ms,e.lanes=a,e;case Us:return e=ht(13,n,t,i),e.elementType=Us,e.lanes=a,e;case Bs:return e=ht(19,n,t,i),e.elementType=Bs,e.lanes=a,e;case mm:return ll(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dm:o=10;break e;case pm:o=9;break e;case pc:o=11;break e;case mc:o=14;break e;case pn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ht(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Xn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=ht(22,e,r,t),e.elementType=mm,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function vs(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ny(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kc(e,t,n,r,i,a,o,l,s){return e=new ny(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ht(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(a),e}function ry(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function o0(e){if(!e)return Tn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(nt(n))return ah(e,n,t)}return t}function l0(e,t,n,r,i,a,o,l,s){return e=Kc(n,r,!0,e,i,a,o,l,s),e.context=o0(null),n=e.current,r=Ke(),i=Nn(n),a=Gt(r,i),a.callback=t??null,Cn(n,a,i),e.current.lanes=i,ra(e,i,r),rt(e,r),e}function sl(e,t,n,r){var i=t.current,a=Ke(),o=Nn(i);return n=o0(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,o),e!==null&&(Ot(e,i,o,a),qa(e,i,o)),o}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xc(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function iy(){return null}var s0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}ul.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));sl(e,t,null,null)};ul.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){sl(null,e,null,null)}),t[Jt]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&Mm(e)}};function qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function ay(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Lo(o);a.call(u)}}var o=l0(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=o,e[Jt]=o.current,Di(e.nodeType===8?e.parentNode:e),tr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Lo(s);l.call(u)}}var s=Kc(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=s,e[Jt]=s.current,Di(e.nodeType===8?e.parentNode:e),tr(function(){sl(t,s,n,r)}),s}function fl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Lo(o);l.call(s)}}sl(t,o,e,i)}else o=ay(n,t,e,i,r);return Lo(o)}Lm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(vc(t,n|1),rt(t,ye()),!(X&6)&&(Fr=ye()+500,Dn()))}break;case 13:tr(function(){var r=qt(e,1);if(r!==null){var i=Ke();Ot(r,e,1,i)}}),Xc(e,1)}};yc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Ke();Ot(t,e,134217728,n)}Xc(e,134217728)}};jm=function(e){if(e.tag===13){var t=Nn(e),n=qt(e,t);if(n!==null){var r=Ke();Ot(n,e,t,r)}Xc(e,t)}};Fm=function(){return te};Dm=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};qs=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(_(90));gm(r),Vs(r,i)}}}break;case"textarea":ym(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Cm=Vc;Pm=tr;var oy={usingClientEntryPoint:!1,Events:[aa,mr,tl,bm,Em,Vc]},si={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ly={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Om(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{Jo=Aa.inject(ly),Dt=Aa}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(t))throw Error(_(200));return ry(e,t,null,n)};ut.createRoot=function(e,t){if(!qc(e))throw Error(_(299));var n=!1,r="",i=s0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kc(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,Di(e.nodeType===8?e.parentNode:e),new Jc(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Om(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return tr(e)};ut.hydrate=function(e,t,n){if(!cl(t))throw Error(_(200));return fl(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=s0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=l0(t,null,e,1,n??null,i,!1,a,o),e[Jt]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ul(t)};ut.render=function(e,t,n){if(!cl(t))throw Error(_(200));return fl(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!cl(e))throw Error(_(40));return e._reactRootContainer?(tr(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ut.unstable_batchedUpdates=Vc;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return fl(e,t,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ut})(ig);var Hd=js;Ls.createRoot=Hd.createRoot,Ls.hydrateRoot=Hd.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Wd="popstate";function sy(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Ru("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jo(i)}return cy(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function uy(){return Math.random().toString(36).substr(2,8)}function Vd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ru(e,t,n,r){return n===void 0&&(n=null),Gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:n,key:t&&t.key||r||uy()})}function jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=wn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Gi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=wn.Pop;let x=c(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function h(x,m){l=wn.Push;let p=Ru(v.location,x,m);n&&n(p,x),u=c()+1;let y=Vd(p,u),S=v.createHref(p);try{o.pushState(y,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function w(x,m){l=wn.Replace;let p=Ru(v.location,x,m);n&&n(p,x),u=c();let y=Vd(p,u),S=v.createHref(p);o.replaceState(y,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:jo(x);return Se(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Wd,d),s=x,()=>{i.removeEventListener(Wd,d),s=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(x){return o.go(x)}};return v}var Yd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yd||(Yd={}));function fy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vr(t):t,i=ef(r.pathname||"/",n);if(i==null)return null;let a=u0(e);dy(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=Sy(a[l],Ey(i));return o}function u0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(Se(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=On([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(Se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u0(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:wy(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of c0(a.path))i(a,o,s)}),t}function c0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=c0(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function dy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const py=/^:\w+$/,my=3,hy=2,gy=1,vy=10,yy=-2,Qd=e=>e==="*";function wy(e,t){let n=e.split("/"),r=n.length;return n.some(Qd)&&(r+=yy),t&&(r+=hy),n.filter(i=>!Qd(i)).reduce((i,a)=>i+(py.test(a)?my:a===""?gy:vy),r)}function xy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sy(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=ky({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;a.push({params:r,pathname:On([i,c.pathname]),pathnameBase:_y(On([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=On([i,c.pathnameBase]))}return a}function ky(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=by(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Cy(l[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function by(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ey(e){try{return decodeURI(e)}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cy(e,t){try{return decodeURIComponent(e)}catch(n){return Zc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ef(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Py(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vr(e):e;return{pathname:n?n.startsWith("/")?n:Ny(n,t):t,search:Oy(r),hash:Ay(i)}}function Ny(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ys(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function d0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vr(e):(i=Gi({},e),Se(!i.pathname||!i.pathname.includes("?"),ys("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),ys("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),ys("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Py(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const On=e=>e.join("/").replace(/\/\/+/g,"/"),_y=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Oy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ay=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zy=typeof Object.is=="function"?Object.is:Ty,{useState:$y,useEffect:Iy,useLayoutEffect:Ly,useDebugValue:jy}=Is;function Fy(e,t,n){const r=t(),[{inst:i},a]=$y({inst:{value:r,getSnapshot:t}});return Ly(()=>{i.value=r,i.getSnapshot=t,ws(i)&&a({inst:i})},[e,r,t]),Iy(()=>(ws(i)&&a({inst:i}),e(()=>{ws(i)&&a({inst:i})})),[e]),jy(r),r}function ws(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zy(n,r)}catch{return!0}}function Dy(e,t,n){return t()}const My=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uy=!My,By=Uy?Dy:Fy;"useSyncExternalStore"in Is&&(e=>e.useSyncExternalStore)(Is);const p0=b.createContext(null),dl=b.createContext(null),Yr=b.createContext(null),pl=b.createContext(null),Qr=b.createContext({outlet:null,matches:[]}),m0=b.createContext(null);function Tu(){return Tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tu.apply(this,arguments)}function Hy(e,t){let{relative:n}=t===void 0?{}:t;Gr()||Se(!1);let{basename:r,navigator:i}=b.useContext(Yr),{hash:a,pathname:o,search:l}=tf(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:On([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Gr(){return b.useContext(pl)!=null}function Kr(){return Gr()||Se(!1),b.useContext(pl).location}function ml(){Gr()||Se(!1);let{basename:e,navigator:t}=b.useContext(Yr),{matches:n}=b.useContext(Qr),{pathname:r}=Kr(),i=JSON.stringify(f0(n).map(l=>l.pathnameBase)),a=b.useRef(!1);return b.useEffect(()=>{a.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=d0(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:On([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function tf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Qr),{pathname:i}=Kr(),a=JSON.stringify(f0(r).map(o=>o.pathnameBase));return b.useMemo(()=>d0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Wy(e,t){Gr()||Se(!1);let{navigator:n}=b.useContext(Yr),r=b.useContext(dl),{matches:i}=b.useContext(Qr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Kr(),u;if(t){var c;let v=typeof t=="string"?Vr(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||Se(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",w=fy(e,{pathname:h}),g=Gy(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:On([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:On([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&g?b.createElement(pl.Provider,{value:{location:Tu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wn.Pop}},g):g}function Vy(){let e=qy(),t=Ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}class Yy extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Qr.Provider,{value:this.props.routeContext},b.createElement(m0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qy(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(p0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qr.Provider,{value:t},r)}function Gy(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||Se(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement(Vy,null));let c=t.concat(r.slice(0,l+1)),d=()=>{let h=a;return s?h=u:o.route.Component?h=b.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),b.createElement(Qy,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?b.createElement(Yy,{location:n.location,component:u,error:s,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Gd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Gd||(Gd={}));var Fo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fo||(Fo={}));function Ky(e){let t=b.useContext(dl);return t||Se(!1),t}function Xy(e){let t=b.useContext(Qr);return t||Se(!1),t}function Jy(e){let t=Xy(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function qy(){var e;let t=b.useContext(m0),n=Ky(Fo.UseRouteError),r=Jy(Fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Zy(e){let{to:t,replace:n,state:r,relative:i}=e;Gr()||Se(!1);let a=b.useContext(dl),o=ml();return b.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Tt(e){Se(!1)}function e2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:a,static:o=!1}=e;Gr()&&Se(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Vr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:w="default"}=r,g=b.useMemo(()=>{let v=ef(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:w},navigationType:i}},[l,u,c,d,h,w,i]);return g==null?null:b.createElement(Yr.Provider,{value:s},b.createElement(pl.Provider,{children:n,value:g}))}function t2(e){let{children:t,location:n}=e,r=b.useContext(p0),i=r&&!t?r.router.routes:zu(t);return Wy(i,n)}var Kd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Kd||(Kd={}));new Promise(()=>{});function zu(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,zu(r.props.children,t));return}r.type!==Tt&&Se(!1),!r.props.index||!r.props.children||Se(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Do.apply(this,arguments)}function h0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function n2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function r2(e,t){return e.button===0&&(!t||t==="_self")&&!n2(e)}const i2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],a2=["aria-current","caseSensitive","className","end","style","to","children"];function o2(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=sy({window:r,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location});return b.useLayoutEffect(()=>a.listen(l),[a]),b.createElement(e2,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const l2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g0=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,d=h0(t,i2),{basename:h}=b.useContext(Yr),w,g=!1;if(typeof u=="string"&&s2.test(u)&&(w=u,l2)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=ef(y.pathname,h);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:g=!0}let v=Hy(u,{relative:i}),x=u2(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||x(p)}return b.createElement("a",Do({},d,{href:w||v,onClick:g||a?r:m,ref:n,target:s}))}),He=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=h0(t,a2),d=tf(s,{relative:c.relative}),h=Kr(),w=b.useContext(dl),{navigator:g}=b.useContext(Yr),v=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,x=h.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),S=p?r:void 0,C;typeof a=="function"?C=a({isActive:p,isPending:y}):C=[a,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let A=typeof l=="function"?l({isActive:p,isPending:y}):l;return b.createElement(g0,Do({},c,{"aria-current":S,className:C,ref:n,style:A,to:s}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var Xd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Xd||(Xd={}));var Jd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jd||(Jd={}));function u2(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=ml(),s=Kr(),u=tf(e,{relative:o});return b.useCallback(c=>{if(r2(c,n)){c.preventDefault();let d=r!==void 0?r:jo(s)===jo(u);l(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var Mo={},c2={get exports(){return Mo},set exports(e){Mo=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf=Symbol.for("react.element"),rf=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),yl=Symbol.for("react.provider"),wl=Symbol.for("react.context"),f2=Symbol.for("react.server_context"),xl=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),El=Symbol.for("react.lazy"),d2=Symbol.for("react.offscreen"),v0;v0=Symbol.for("react.module.reference");function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nf:switch(e=e.type,e){case hl:case vl:case gl:case Sl:case kl:return e;default:switch(e=e&&e.$$typeof,e){case f2:case wl:case xl:case El:case bl:case yl:return e;default:return t}}case rf:return t}}}ne.ContextConsumer=wl;ne.ContextProvider=yl;ne.Element=nf;ne.ForwardRef=xl;ne.Fragment=hl;ne.Lazy=El;ne.Memo=bl;ne.Portal=rf;ne.Profiler=vl;ne.StrictMode=gl;ne.Suspense=Sl;ne.SuspenseList=kl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return xt(e)===wl};ne.isContextProvider=function(e){return xt(e)===yl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nf};ne.isForwardRef=function(e){return xt(e)===xl};ne.isFragment=function(e){return xt(e)===hl};ne.isLazy=function(e){return xt(e)===El};ne.isMemo=function(e){return xt(e)===bl};ne.isPortal=function(e){return xt(e)===rf};ne.isProfiler=function(e){return xt(e)===vl};ne.isStrictMode=function(e){return xt(e)===gl};ne.isSuspense=function(e){return xt(e)===Sl};ne.isSuspenseList=function(e){return xt(e)===kl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hl||e===vl||e===gl||e===Sl||e===kl||e===d2||typeof e=="object"&&e!==null&&(e.$$typeof===El||e.$$typeof===bl||e.$$typeof===yl||e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===v0||e.getModuleId!==void 0)};ne.typeOf=xt;(function(e){e.exports=ne})(c2);function p2(e){function t(z,$,L,B,k){for(var G=0,T=0,me=0,q=0,ee,V,Te=0,qe=0,J,Me=J=ee=0,Z=0,ze=0,Zr=0,$e=0,pa=L.length,ei=pa-1,St,H="",ve="",Wl="",Vl="",sn;Z<pa;){if(V=L.charCodeAt(Z),Z===ei&&T+q+me+G!==0&&(T!==0&&(V=T===47?10:47),q=me=G=0,pa++,ei++),T+q+me+G===0){if(Z===ei&&(0<ze&&(H=H.replace(h,"")),0<H.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:H+=L.charAt(Z)}V=59}switch(V){case 123:for(H=H.trim(),ee=H.charCodeAt(0),J=1,$e=++Z;Z<pa;){switch(V=L.charCodeAt(Z)){case 123:J++;break;case 125:J--;break;case 47:switch(V=L.charCodeAt(Z+1)){case 42:case 47:e:{for(Me=Z+1;Me<ei;++Me)switch(L.charCodeAt(Me)){case 47:if(V===42&&L.charCodeAt(Me-1)===42&&Z+2!==Me){Z=Me+1;break e}break;case 10:if(V===47){Z=Me+1;break e}}Z=Me}}break;case 91:V++;case 40:V++;case 34:case 39:for(;Z++<ei&&L.charCodeAt(Z)!==V;);}if(J===0)break;Z++}switch(J=L.substring($e,Z),ee===0&&(ee=(H=H.replace(d,"").trim()).charCodeAt(0)),ee){case 64:switch(0<ze&&(H=H.replace(h,"")),V=H.charCodeAt(1),V){case 100:case 109:case 115:case 45:ze=$;break;default:ze=Bt}if(J=t($,ze,J,V,k+1),$e=J.length,0<R&&(ze=n(Bt,H,Zr),sn=l(3,J,ze,$,Re,ke,$e,V,k,B),H=ze.join(""),sn!==void 0&&($e=(J=sn.trim()).length)===0&&(V=0,J="")),0<$e)switch(V){case 115:H=H.replace(A,o);case 100:case 109:case 45:J=H+"{"+J+"}";break;case 107:H=H.replace(p,"$1 $2"),J=H+"{"+J+"}",J=De===1||De===2&&a("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=H+J,B===112&&(J=(ve+=J,""))}else J="";break;default:J=t($,n($,H,Zr),J,B,k+1)}Wl+=J,J=Zr=ze=Me=ee=0,H="",V=L.charCodeAt(++Z);break;case 125:case 59:if(H=(0<ze?H.replace(h,""):H).trim(),1<($e=H.length))switch(Me===0&&(ee=H.charCodeAt(0),ee===45||96<ee&&123>ee)&&($e=(H=H.replace(" ",":")).length),0<R&&(sn=l(1,H,$,z,Re,ke,ve.length,B,k,B))!==void 0&&($e=(H=sn.trim()).length)===0&&(H="\0\0"),ee=H.charCodeAt(0),V=H.charCodeAt(1),ee){case 0:break;case 64:if(V===105||V===99){Vl+=H+L.charAt(Z);break}default:H.charCodeAt($e-1)!==58&&(ve+=i(H,ee,V,H.charCodeAt(2)))}Zr=ze=Me=ee=0,H="",V=L.charCodeAt(++Z)}}switch(V){case 13:case 10:T===47?T=0:1+ee===0&&B!==107&&0<H.length&&(ze=1,H+="\0"),0<R*U&&l(0,H,$,z,Re,ke,ve.length,B,k,B),ke=1,Re++;break;case 59:case 125:if(T+q+me+G===0){ke++;break}default:switch(ke++,St=L.charAt(Z),V){case 9:case 32:if(q+G+T===0)switch(Te){case 44:case 58:case 9:case 32:St="";break;default:V!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:q+T+G===0&&(ze=Zr=1,St="\f"+St);break;case 108:if(q+T+G+it===0&&0<Me)switch(Z-Me){case 2:Te===112&&L.charCodeAt(Z-3)===58&&(it=Te);case 8:qe===111&&(it=qe)}break;case 58:q+T+G===0&&(Me=Z);break;case 44:T+me+q+G===0&&(ze=1,St+="\r");break;case 34:case 39:T===0&&(q=q===V?0:q===0?V:q);break;case 91:q+T+me===0&&G++;break;case 93:q+T+me===0&&G--;break;case 41:q+T+G===0&&me--;break;case 40:if(q+T+G===0){if(ee===0)switch(2*Te+3*qe){case 533:break;default:ee=1}me++}break;case 64:T+me+q+G+Me+J===0&&(J=1);break;case 42:case 47:if(!(0<q+G+me))switch(T){case 0:switch(2*V+3*L.charCodeAt(Z+1)){case 235:T=47;break;case 220:$e=Z,T=42}break;case 42:V===47&&Te===42&&$e+2!==Z&&(L.charCodeAt($e+2)===33&&(ve+=L.substring($e,Z+1)),St="",T=0)}}T===0&&(H+=St)}qe=Te,Te=V,Z++}if($e=ve.length,0<$e){if(ze=$,0<R&&(sn=l(2,ve,ze,z,Re,ke,$e,B,k,B),sn!==void 0&&(ve=sn).length===0))return Vl+ve+Wl;if(ve=ze.join(",")+"{"+ve+"}",De*it!==0){switch(De!==2||a(ve,2)||(it=0),it){case 111:ve=ve.replace(S,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}it=0}}return Vl+ve+Wl}function n(z,$,L){var B=$.trim().split(x);$=B;var k=B.length,G=z.length;switch(G){case 0:case 1:var T=0;for(z=G===0?"":z[0]+" ";T<k;++T)$[T]=r(z,$[T],L).trim();break;default:var me=T=0;for($=[];T<k;++T)for(var q=0;q<G;++q)$[me++]=r(z[q]+" ",B[T],L).trim()}return $}function r(z,$,L){var B=$.charCodeAt(0);switch(33>B&&(B=($=$.trim()).charCodeAt(0)),B){case 38:return $.replace(m,"$1"+z.trim());case 58:return z.trim()+$.replace(m,"$1"+z.trim());default:if(0<1*L&&0<$.indexOf("\f"))return $.replace(m,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+$}function i(z,$,L,B){var k=z+";",G=2*$+3*L+4*B;if(G===944){z=k.indexOf(":",9)+1;var T=k.substring(z,k.length-1).trim();return T=k.substring(0,z).trim()+T+";",De===1||De===2&&a(T,1)?"-webkit-"+T+T:T}if(De===0||De===2&&!a(k,1))return k;switch(G){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(Ne,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return T=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+k+"-ms-flex-pack"+T+k;case 1005:return g.test(k)?k.replace(w,":-webkit-")+k.replace(w,":-moz-")+k:k;case 1e3:switch(T=k.substring(13).trim(),$=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt($)){case 226:T=k.replace(C,"tb");break;case 232:T=k.replace(C,"tb-rl");break;case 220:T=k.replace(C,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+T+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch($=(k=z).length-10,T=(k.charCodeAt($)===33?k.substring(0,$):k).substring(z.indexOf(":",7)+1).trim(),G=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:k=k.replace(T,"-webkit-"+T)+";"+k;break;case 207:case 102:k=k.replace(T,"-webkit-"+(102<G?"inline-":"")+"box")+";"+k.replace(T,"-webkit-"+T)+";"+k.replace(T,"-ms-"+T+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return T=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+T+"-ms-flex-"+T+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(O,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(O,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(M.test(z)===!0)return(T=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?i(z.replace("stretch","fill-available"),$,L,B).replace(":fill-available",":stretch"):k.replace(T,"-webkit-"+T)+k.replace(T,"-moz-"+T.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,L+B===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+k}return k}function a(z,$){var L=z.indexOf($===1?":":"{"),B=z.substring(0,$!==3?L:10);return L=z.substring(L+1,z.length-1),D($!==2?B:B.replace(W,"$1"),L,$)}function o(z,$){var L=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return L!==$+";"?L.replace(N," or ($1)").substring(4):"("+$+")"}function l(z,$,L,B,k,G,T,me,q,ee){for(var V=0,Te=$,qe;V<R;++V)switch(qe=Qe[V].call(c,z,Te,L,B,k,G,T,me,q,ee)){case void 0:case!1:case!0:case null:break;default:Te=qe}if(Te!==$)return Te}function s(z){switch(z){case void 0:case null:R=Qe.length=0;break;default:if(typeof z=="function")Qe[R++]=z;else if(typeof z=="object")for(var $=0,L=z.length;$<L;++$)s(z[$]);else U=!!z|0}return s}function u(z){return z=z.prefix,z!==void 0&&(D=null,z?typeof z!="function"?De=1:(De=2,D=z):De=0),u}function c(z,$){var L=z;if(33>L.charCodeAt(0)&&(L=L.trim()),ie=L,L=[ie],0<R){var B=l(-1,$,L,L,Re,ke,0,0,0,0);B!==void 0&&typeof B=="string"&&($=B)}var k=t(Bt,L,$,0,0);return 0<R&&(B=l(-2,k,L,L,Re,ke,k.length,0,0,0),B!==void 0&&(k=B)),ie="",it=0,ke=Re=1,k}var d=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,O=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,Ne=/([^-])(image-set\()/,ke=1,Re=1,it=0,De=1,Bt=[],Qe=[],R=0,D=null,U=0,ie="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var m2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function h2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var g2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qd=h2(function(e){return g2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$u={},v2={get exports(){return $u},set exports(e){$u=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,af=Ae?Symbol.for("react.element"):60103,of=Ae?Symbol.for("react.portal"):60106,Cl=Ae?Symbol.for("react.fragment"):60107,Pl=Ae?Symbol.for("react.strict_mode"):60108,Nl=Ae?Symbol.for("react.profiler"):60114,_l=Ae?Symbol.for("react.provider"):60109,Ol=Ae?Symbol.for("react.context"):60110,lf=Ae?Symbol.for("react.async_mode"):60111,Al=Ae?Symbol.for("react.concurrent_mode"):60111,Rl=Ae?Symbol.for("react.forward_ref"):60112,Tl=Ae?Symbol.for("react.suspense"):60113,y2=Ae?Symbol.for("react.suspense_list"):60120,zl=Ae?Symbol.for("react.memo"):60115,$l=Ae?Symbol.for("react.lazy"):60116,w2=Ae?Symbol.for("react.block"):60121,x2=Ae?Symbol.for("react.fundamental"):60117,S2=Ae?Symbol.for("react.responder"):60118,k2=Ae?Symbol.for("react.scope"):60119;function ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case af:switch(e=e.type,e){case lf:case Al:case Cl:case Nl:case Pl:case Tl:return e;default:switch(e=e&&e.$$typeof,e){case Ol:case Rl:case $l:case zl:case _l:return e;default:return t}}case of:return t}}}function y0(e){return ft(e)===Al}re.AsyncMode=lf;re.ConcurrentMode=Al;re.ContextConsumer=Ol;re.ContextProvider=_l;re.Element=af;re.ForwardRef=Rl;re.Fragment=Cl;re.Lazy=$l;re.Memo=zl;re.Portal=of;re.Profiler=Nl;re.StrictMode=Pl;re.Suspense=Tl;re.isAsyncMode=function(e){return y0(e)||ft(e)===lf};re.isConcurrentMode=y0;re.isContextConsumer=function(e){return ft(e)===Ol};re.isContextProvider=function(e){return ft(e)===_l};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===af};re.isForwardRef=function(e){return ft(e)===Rl};re.isFragment=function(e){return ft(e)===Cl};re.isLazy=function(e){return ft(e)===$l};re.isMemo=function(e){return ft(e)===zl};re.isPortal=function(e){return ft(e)===of};re.isProfiler=function(e){return ft(e)===Nl};re.isStrictMode=function(e){return ft(e)===Pl};re.isSuspense=function(e){return ft(e)===Tl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cl||e===Al||e===Nl||e===Pl||e===Tl||e===y2||typeof e=="object"&&e!==null&&(e.$$typeof===$l||e.$$typeof===zl||e.$$typeof===_l||e.$$typeof===Ol||e.$$typeof===Rl||e.$$typeof===x2||e.$$typeof===S2||e.$$typeof===k2||e.$$typeof===w2)};re.typeOf=ft;(function(e){e.exports=re})(v2);var sf=$u,b2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uf={};uf[sf.ForwardRef]=C2;uf[sf.Memo]=w0;function Zd(e){return sf.isMemo(e)?w0:uf[e.$$typeof]||b2}var P2=Object.defineProperty,N2=Object.getOwnPropertyNames,ep=Object.getOwnPropertySymbols,_2=Object.getOwnPropertyDescriptor,O2=Object.getPrototypeOf,tp=Object.prototype;function x0(e,t,n){if(typeof t!="string"){if(tp){var r=O2(t);r&&r!==tp&&x0(e,r,n)}var i=N2(t);ep&&(i=i.concat(ep(t)));for(var a=Zd(e),o=Zd(t),l=0;l<i.length;++l){var s=i[l];if(!E2[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=_2(t,s);try{P2(e,s,u)}catch{}}}}return e}var A2=x0;function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var np=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Iu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mo.typeOf(e)},Uo=Object.freeze([]),An=Object.freeze({});function Ki(e){return typeof e=="function"}function rp(e){return e.displayName||e.name||"Component"}function cf(e){return e&&typeof e.styledComponentId=="string"}var Dr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ff=typeof window<"u"&&"HTMLElement"in window,R2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),T2={};function la(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var z2=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&la(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ao=new Map,Bo=new Map,Ni=1,Ra=function(e){if(ao.has(e))return ao.get(e);for(;Bo.has(Ni);)Ni++;var t=Ni++;return ao.set(e,t),Bo.set(t,e),t},$2=function(e){return Bo.get(e)},I2=function(e,t){t>=Ni&&(Ni=t+1),ao.set(e,t),Bo.set(t,e)},L2="style["+Dr+'][data-styled-version="5.3.9"]',j2=new RegExp("^"+Dr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F2=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},D2=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(j2);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(I2(u,s),F2(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},M2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},S0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(Dr))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Dr,"active"),r.setAttribute("data-styled-version","5.3.9");var o=M2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},U2=function(){function e(n){var r=this.element=S0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}la(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),B2=function(){function e(n){var r=this.element=S0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),H2=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ip=ff,W2={isServer:!ff,useCSSOMInjection:!R2},Ho=function(){function e(n,r,i){n===void 0&&(n=An),r===void 0&&(r={}),this.options=It({},W2,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ff&&ip&&(ip=!1,function(a){for(var o=document.querySelectorAll(L2),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(Dr)!=="active"&&(D2(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ra(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(It({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new H2(o):a?new U2(o):new B2(o),new z2(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ra(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ra(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ra(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=$2(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=Dr+".g"+o+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),a+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},e}(),V2=/(a)(d)/gi,ap=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ap(t%52)+n;return(ap(t%52)+n).replace(V2,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},k0=function(e){return Sr(5381,e)};function b0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ki(n)&&!cf(n))return!1}return!0}var Y2=k0("5.3.9"),Q2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&b0(t),this.componentId=n,this.baseHash=Sr(Y2,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=nr(this.rules,t,n,r).join(""),l=Lu(Sr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=Sr(this.baseHash,r.hash),d="",h=0;h<u;h++){var w=this.rules[h];if(typeof w=="string")d+=w;else if(w){var g=nr(w,t,n,r),v=Array.isArray(g)?g.join(""):g;c=Sr(c,v+h),d+=v}}if(d){var x=Lu(c>>>0);if(!n.hasNameForId(i,x)){var m=r(d,"."+x,void 0,i);n.insertRules(i,x,m)}a.push(x)}}return a.join(" ")},e}(),G2=/^\s*\/\/.*$/gm,K2=[":","[",".","#"];function X2(e){var t,n,r,i,a=e===void 0?An:e,o=a.options,l=o===void 0?An:o,s=a.plugins,u=s===void 0?Uo:s,c=new p2(l),d=[],h=function(v){function x(m){if(m)try{v(m+"}")}catch{}}return function(m,p,y,S,C,A,N,O,W,M){switch(m){case 1:if(W===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(O===0)return p+"/*|*/";break;case 3:switch(O){case 102:case 112:return v(y[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(v){d.push(v)}),w=function(v,x,m){return x===0&&K2.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function g(v,x,m,p){p===void 0&&(p="&");var y=v.replace(G2,""),S=x&&m?m+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!x?"":x,S)}return c.use([].concat(u,[function(v,x,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,w))},h,function(v){if(v===-2){var x=d;return d=[],x}}])),g.hash=u.length?u.reduce(function(v,x){return x.name||la(15),Sr(v,x.name)},5381).toString():"",g}var E0=rn.createContext();E0.Consumer;var C0=rn.createContext(),J2=(C0.Consumer,new Ho),ju=X2();function P0(){return b.useContext(E0)||J2}function N0(){return b.useContext(C0)||ju}var q2=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=ju);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return la(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ju),this.name+t.hash},e}(),Z2=/([A-Z])/,ew=/([A-Z])/g,tw=/^ms-/,nw=function(e){return"-"+e.toLowerCase()};function op(e){return Z2.test(e)?e.replace(ew,nw).replace(tw,"-ms-"):e}var lp=function(e){return e==null||e===!1||e===""};function nr(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=nr(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(lp(e))return"";if(cf(e))return"."+e.styledComponentId;if(Ki(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return nr(s,t,n,r)}var u;return e instanceof q2?n?(e.inject(n,r),e.getName(r)):e:Iu(e)?function c(d,h){var w,g,v=[];for(var x in d)d.hasOwnProperty(x)&&!lp(d[x])&&(Array.isArray(d[x])&&d[x].isCss||Ki(d[x])?v.push(op(x)+":",d[x],";"):Iu(d[x])?v.push.apply(v,c(d[x],x)):v.push(op(x)+": "+(w=x,(g=d[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||w in m2?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var sp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ki(e)||Iu(e)?sp(nr(np(Uo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:sp(nr(np(e,n)))}var O0=function(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme},rw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iw=/(^-|-$)/g;function xs(e){return e.replace(rw,"-").replace(iw,"")}var A0=function(e){return Lu(k0(e)>>>0)};function Ta(e){return typeof e=="string"&&!0}var Fu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},aw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ow(e,t,n){var r=e[n];Fu(t)&&Fu(r)?R0(r,t):e[n]=t}function R0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Fu(o))for(var l in o)aw(l)&&ow(e,o[l],l)}return e}var df=rn.createContext();df.Consumer;var Ss={};function T0(e,t,n){var r=cf(e),i=!Ta(e),a=t.attrs,o=a===void 0?Uo:a,l=t.componentId,s=l===void 0?function(p,y){var S=typeof p!="string"?"sc":xs(p);Ss[S]=(Ss[S]||0)+1;var C=S+"-"+A0("5.3.9"+S+Ss[S]);return y?y+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return Ta(p)?"styled."+p:"Styled("+rp(p)+")"}(e):u,d=t.displayName&&t.componentId?xs(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,v=new Q2(n,d,r?e.componentStyle:void 0),x=v.isStatic&&o.length===0,m=function(p,y){return function(S,C,A,N){var O=S.attrs,W=S.componentStyle,M=S.defaultProps,Ne=S.foldedComponentIds,ke=S.shouldForwardProp,Re=S.styledComponentId,it=S.target,De=function(B,k,G){B===void 0&&(B=An);var T=It({},k,{theme:B}),me={};return G.forEach(function(q){var ee,V,Te,qe=q;for(ee in Ki(qe)&&(qe=qe(T)),qe)T[ee]=me[ee]=ee==="className"?(V=me[ee],Te=qe[ee],V&&Te?V+" "+Te:V||Te):qe[ee]}),[T,me]}(O0(C,b.useContext(df),M)||An,C,O),Bt=De[0],Qe=De[1],R=function(B,k,G,T){var me=P0(),q=N0(),ee=k?B.generateAndInjectStyles(An,me,q):B.generateAndInjectStyles(G,me,q);return ee}(W,N,Bt),D=A,U=Qe.$as||C.$as||Qe.as||C.as||it,ie=Ta(U),z=Qe!==C?It({},C,{},Qe):C,$={};for(var L in z)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?$.as=z[L]:(ke?ke(L,qd,U):!ie||qd(L))&&($[L]=z[L]));return C.style&&Qe.style!==C.style&&($.style=It({},C.style,{},Qe.style)),$.className=Array.prototype.concat(Ne,Re,R!==Re?R:null,C.className,Qe.className).filter(Boolean).join(" "),$.ref=D,b.createElement(U,$)}(g,p,y,x)};return m.displayName=c,(g=rn.forwardRef(m)).attrs=h,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=w,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Uo,g.styledComponentId=d,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(A,N){if(A==null)return{};var O,W,M={},Ne=Object.keys(A);for(W=0;W<Ne.length;W++)O=Ne[W],N.indexOf(O)>=0||(M[O]=A[O]);return M}(t,["componentId"]),C=y&&y+"-"+(Ta(p)?p:xs(rp(p)));return T0(p,It({},S,{attrs:h,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?R0({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&A2(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Du=function(e){return function t(n,r,i){if(i===void 0&&(i=An),!Mo.isValidElementType(r))return la(1,String(r));var a=function(){return n(r,i,_0.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,It({},i,{},o))},a.attrs=function(o){return t(n,r,It({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(T0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Du[e]=Du(e)});var lw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=b0(n),Ho.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(nr(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&Ho.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function sw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_0.apply(void 0,[e].concat(n)),a="sc-global-"+A0(JSON.stringify(i)),o=new lw(i,a);function l(u){var c=P0(),d=N0(),h=b.useContext(df),w=b.useRef(c.allocateGSInstance(a)).current;return c.server&&s(w,u,c,h,d),b.useLayoutEffect(function(){if(!c.server)return s(w,u,c,h,d),function(){return o.removeStyles(w,c)}},[w,u,c,h,d]),null}function s(u,c,d,h,w){if(o.isStatic)o.renderStyles(u,T2,d,w);else{var g=It({},c,{theme:O0(c,h,l.defaultProps)});o.renderStyles(u,g,d,w)}}return rn.memo(l)}const Ye=Du,cn={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},we={mobileS:`(min-width: ${cn.mobileS})`,mobileM:`(min-width: ${cn.mobileM})`,mobileL:`(min-width: ${cn.mobileL})`,tablet:`(min-width: ${cn.tablet})`,laptop:`(min-width: ${cn.laptop})`,laptopL:`(min-width: ${cn.laptopL})`,desktop:`(min-width: ${cn.desktop})`,desktopL:`(min-width: ${cn.desktopL})`};let za="#2C4001",ks="#F2F2F2";const uw=Ye.nav`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 0 2em;
    background: ${za};

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
        color: ${ks};
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
        background: ${za};
        position: absolute;
        right: 0;
        z-index: 2;
        top: 0;

        &.active {
            max-height: 500px;
        }
    }

    .mobile-nav {
        color: ${ks};
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
        background: ${ks};
        color: ${za};
    }
    .userIcon {
        color: ${za};
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

    @media ${we.mobileS} {
        min-width: 200px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${we.mobileM} {
        min-width: 320px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${we.mobileL} {
        min-width: 375px;
        font-size: 1rem;
        .logo {
            height: 50px;
            width: 100px;
        }
    }

    @media ${we.tablet} {
        min-width: 425px;
    }

    @media ${we.laptop} {
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

    @media ${we.desktop} {
        min-width: 1441px;
        font-size: 3rem;
        .logo {
            height: 140px;
            width: 160px;
        }
    }

    @media ${we.desktopL} {
        min-width: 2560px;
        font-size: 4rem;
        .logo {
            height: 280px;
            width: 400px;
        }
    }
`,cw="/assets/PantryPalWhite-2ae508bc.png";/*! js-cookie v3.0.1 | MIT */function $a(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var fw={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Mu(e,t){function n(i,a,o){if(!(typeof document>"u")){o=$a({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",$a({},a,{expires:-1}))},withAttributes:function(i){return Mu(this.converter,$a({},this.attributes,i))},withConverter:function(i){return Mu($a({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Wo=Mu(fw,{path:"/"});function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vo(e){return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vo(e)}function dw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pw(e,t,n){return t&&cp(e.prototype,t),n&&cp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pf(e,t){return hw(e)||vw(e,t)||z0(e,t)||ww()}function sa(e){return mw(e)||gw(e)||z0(e)||yw()}function mw(e){if(Array.isArray(e))return Uu(e)}function hw(e){if(Array.isArray(e))return e}function gw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function z0(e,t){if(e){if(typeof e=="string")return Uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(e,t)}}function Uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ww(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fp=function(){},mf={},$0={},I0=null,L0={mark:fp,measure:fp};try{typeof window<"u"&&(mf=window),typeof document<"u"&&($0=document),typeof MutationObserver<"u"&&(I0=MutationObserver),typeof performance<"u"&&(L0=performance)}catch{}var xw=mf.navigator||{},dp=xw.userAgent,pp=dp===void 0?"":dp,zn=mf,ue=$0,mp=I0,Ia=L0;zn.document;var on=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",j0=~pp.indexOf("MSIE")||~pp.indexOf("Trident/"),La,ja,Fa,Da,Ma,en="___FONT_AWESOME___",Bu=16,F0="fa",D0="svg-inline--fa",rr="data-fa-i2svg",Hu="data-fa-pseudo-element",Sw="data-fa-pseudo-element-pending",hf="data-prefix",gf="data-icon",hp="fontawesome-i2svg",kw="async",bw=["HTML","HEAD","STYLE","SCRIPT"],M0=function(){try{return!0}catch{return!1}}(),le="classic",ge="sharp",vf=[le,ge];function ua(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Xi=ua((La={},Ce(La,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ce(La,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),La)),Ji=ua((ja={},Ce(ja,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(ja,ge,{solid:"fass",regular:"fasr"}),ja)),qi=ua((Fa={},Ce(Fa,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(Fa,ge,{fass:"fa-solid",fasr:"fa-regular"}),Fa)),Ew=ua((Da={},Ce(Da,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce(Da,ge,{"fa-solid":"fass","fa-regular":"fasr"}),Da)),Cw=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,U0="fa-layers-text",Pw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nw=ua((Ma={},Ce(Ma,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce(Ma,ge,{900:"fass",400:"fasr"}),Ma)),B0=[1,2,3,4,5,6,7,8,9,10],_w=B0.concat([11,12,13,14,15,16,17,18,19,20]),Ow=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zi=new Set;Object.keys(Ji[le]).map(Zi.add.bind(Zi));Object.keys(Ji[ge]).map(Zi.add.bind(Zi));var Aw=[].concat(vf,sa(Zi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qn.GROUP,Qn.SWAP_OPACITY,Qn.PRIMARY,Qn.SECONDARY]).concat(B0.map(function(e){return"".concat(e,"x")})).concat(_w.map(function(e){return"w-".concat(e)})),_i=zn.FontAwesomeConfig||{};function Rw(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Tw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var zw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zw.forEach(function(e){var t=pf(e,2),n=t[0],r=t[1],i=Tw(Rw(n));i!=null&&(_i[r]=i)})}var H0={styleDefault:"solid",familyDefault:"classic",cssPrefix:F0,replacementClass:D0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_i.familyPrefix&&(_i.cssPrefix=_i.familyPrefix);var Mr=I(I({},H0),_i);Mr.autoReplaceSvg||(Mr.observeMutations=!1);var F={};Object.keys(H0).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Mr[e]=n,Oi.forEach(function(r){return r(F)})},get:function(){return Mr[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){Mr.cssPrefix=t,Oi.forEach(function(n){return n(F)})},get:function(){return Mr.cssPrefix}});zn.FontAwesomeConfig=F;var Oi=[];function $w(e){return Oi.push(e),function(){Oi.splice(Oi.indexOf(e),1)}}var fn=Bu,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iw(e){if(!(!e||!on)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var Lw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ea(){for(var e=12,t="";e-- >0;)t+=Lw[Math.random()*62|0];return t}function Xr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yf(e){return e.classList?Xr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function W0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jw(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(W0(e[n]),'" ')},"").trim()}function Il(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wf(e){return e.size!==Lt.size||e.x!==Lt.x||e.y!==Lt.y||e.rotate!==Lt.rotate||e.flipX||e.flipY}function Fw(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function Dw(e){var t=e.transform,n=e.width,r=n===void 0?Bu:n,i=e.height,a=i===void 0?Bu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&j0?s+="translate(".concat(t.x/fn-r/2,"em, ").concat(t.y/fn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/fn,"em), calc(-50% + ").concat(t.y/fn,"em)) "):s+="translate(".concat(t.x/fn,"em, ").concat(t.y/fn,"em) "),s+="scale(".concat(t.size/fn*(t.flipX?-1:1),", ").concat(t.size/fn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Mw=`:root, :host {
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
}`;function V0(){var e=F0,t=D0,n=F.cssPrefix,r=F.replacementClass,i=Mw;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var gp=!1;function bs(){F.autoAddCss&&!gp&&(Iw(V0()),gp=!0)}var Uw={mixout:function(){return{dom:{css:V0,insertCss:bs}}},hooks:function(){return{beforeDOMElementCreation:function(){bs()},beforeI2svg:function(){bs()}}}},tn=zn||{};tn[en]||(tn[en]={});tn[en].styles||(tn[en].styles={});tn[en].hooks||(tn[en].hooks={});tn[en].shims||(tn[en].shims=[]);var Nt=tn[en],Y0=[],Bw=function e(){ue.removeEventListener("DOMContentLoaded",e),Yo=1,Y0.map(function(t){return t()})},Yo=!1;on&&(Yo=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Yo||ue.addEventListener("DOMContentLoaded",Bw));function Hw(e){on&&(Yo?setTimeout(e,0):Y0.push(e))}function ca(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?W0(e):"<".concat(t," ").concat(jw(r),">").concat(a.map(ca).join(""),"</").concat(t,">")}function vp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ww=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Es=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?Ww(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function Vw(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Wu(e){var t=Vw(e);return t.length===1?t[0].toString(16):null}function Yw(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Vu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=yp(t);typeof Nt.hooks.addPack=="function"&&!i?Nt.hooks.addPack(e,yp(t)):Nt.styles[e]=I(I({},Nt.styles[e]||{}),a),e==="fas"&&Vu("fa",t)}var Ua,Ba,Ha,kr=Nt.styles,Qw=Nt.shims,Gw=(Ua={},Ce(Ua,le,Object.values(qi[le])),Ce(Ua,ge,Object.values(qi[ge])),Ua),xf=null,Q0={},G0={},K0={},X0={},J0={},Kw=(Ba={},Ce(Ba,le,Object.keys(Xi[le])),Ce(Ba,ge,Object.keys(Xi[ge])),Ba);function Xw(e){return~Aw.indexOf(e)}function Jw(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Xw(i)?i:null}var q0=function(){var t=function(a){return Es(kr,function(o,l,s){return o[s]=Es(l,a,{}),o},{})};Q0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),G0=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),J0=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in kr||F.autoFetchSvg,r=Es(Qw,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});K0=r.names,X0=r.unicodes,xf=Ll(F.styleDefault,{family:F.familyDefault})};$w(function(e){xf=Ll(e.styleDefault,{family:F.familyDefault})});q0();function Sf(e,t){return(Q0[e]||{})[t]}function qw(e,t){return(G0[e]||{})[t]}function Gn(e,t){return(J0[e]||{})[t]}function Z0(e){return K0[e]||{prefix:null,iconName:null}}function Zw(e){var t=X0[e],n=Sf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $n(){return xf}var kf=function(){return{prefix:null,iconName:null,rest:[]}};function Ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Xi[r][e],a=Ji[r][e]||Ji[r][i],o=e in Nt.styles?e:null;return a||o||null}var wp=(Ha={},Ce(Ha,le,Object.keys(qi[le])),Ce(Ha,ge,Object.keys(qi[ge])),Ha);function jl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ce(t,le,"".concat(F.cssPrefix,"-").concat(le)),Ce(t,ge,"".concat(F.cssPrefix,"-").concat(ge)),t),o=null,l=le;(e.includes(a[le])||e.some(function(u){return wp[le].includes(u)}))&&(l=le),(e.includes(a[ge])||e.some(function(u){return wp[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var d=Jw(F.cssPrefix,c);if(kr[c]?(c=Gw[l].includes(c)?Ew[l][c]:c,o=c,u.prefix=c):Kw[l].indexOf(c)>-1?(o=c,u.prefix=Ll(c,{family:l})):d?u.iconName=d:c!==F.replacementClass&&c!==a[le]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Z0(u.iconName):{},w=Gn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||w||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!kr.far&&kr.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},kf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(kr.fass||F.autoFetchSvg)&&(s.prefix="fass",s.iconName=Gn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=$n()||"fas"),s}var ex=function(){function e(){dw(this,e),this.definitions={}}return pw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),o[l]),Vu(l,o[l]);var s=qi[le][l];s&&Vu(s,o[l]),q0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),xp=[],br={},Rr={},tx=Object.keys(Rr);function nx(e,t){var n=t.mixoutsTo;return xp=e,br={},Object.keys(Rr).forEach(function(r){tx.indexOf(r)===-1&&delete Rr[r]}),xp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Vo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){br[o]||(br[o]=[]),br[o].push(a[o])})}r.provides&&r.provides(Rr)}),n}function Yu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=br[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ir(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=br[e]||[];i.forEach(function(a){a.apply(null,n)})}function nn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rr[e]?Rr[e].apply(null,t):void 0}function Qu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||$n();if(t)return t=Gn(n,t)||t,vp(e1.definitions,n,t)||vp(Nt.styles,n,t)}var e1=new ex,rx=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,ir("noAuto")},ix={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return on?(ir("beforeI2svg",t),nn("pseudoElements2svg",t),nn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Hw(function(){ox({autoReplaceSvgRoot:n}),ir("watch",t)})}},ax={icon:function(t){if(t===null)return null;if(Vo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ll(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Cw))){var i=jl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||$n(),iconName:Gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=$n();return{prefix:a,iconName:Gn(a,t)||t}}}},dt={noAuto:rx,config:F,dom:ix,parse:ax,library:e1,findIconDefinition:Qu,toHtml:ca},ox=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Nt.styles).length>0||F.autoFetchSvg)&&on&&F.autoReplaceSvg&&dt.dom.i2svg({node:r})};function Fl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ca(r)})}}),Object.defineProperty(e,"node",{get:function(){if(on){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function lx(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(wf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Il(I(I({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function sx(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function bf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,w=h===void 0?!1:h,g=r.found?r:n,v=g.width,x=g.height,m=i==="fak",p=[F.replacementClass,a?"".concat(F.cssPrefix,"-").concat(a):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),y={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};w&&(y.attributes[rr]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||ea())},children:[s]}),delete y.attributes.title);var C=I(I({},y),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:I(I({},S),d.styles)}),A=r.found&&n.found?nn("generateAbstractMask",C)||{children:[],attributes:{}}:nn("generateAbstractIcon",C)||{children:[],attributes:{}},N=A.children,O=A.attributes;return C.children=N,C.attributes=O,l?sx(C):lx(C)}function Sp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[rr]="");var c=I({},o.styles);wf(i)&&(c.transform=Dw({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Il(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function ux(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Il(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Cs=Nt.styles;function Gu(e){var t=e[0],n=e[1],r=e.slice(4),i=pf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Qn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Qn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Qn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var cx={found:!1,width:512,height:512};function fx(e,t){!M0&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ku(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=$n()),new Promise(function(r,i){if(nn("missingIconAbstract"),n==="fa"){var a=Z0(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Cs[t]&&Cs[t][e]){var o=Cs[t][e];return r(Gu(o))}fx(e,t),r(I(I({},cx),{},{icon:F.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}}))})}var kp=function(){},Xu=F.measurePerformance&&Ia&&Ia.mark&&Ia.measure?Ia:{mark:kp,measure:kp},vi='FA "6.3.0"',dx=function(t){return Xu.mark("".concat(vi," ").concat(t," begins")),function(){return t1(t)}},t1=function(t){Xu.mark("".concat(vi," ").concat(t," ends")),Xu.measure("".concat(vi," ").concat(t),"".concat(vi," ").concat(t," begins"),"".concat(vi," ").concat(t," ends"))},Ef={begin:dx,end:t1},oo=function(){};function bp(e){var t=e.getAttribute?e.getAttribute(rr):null;return typeof t=="string"}function px(e){var t=e.getAttribute?e.getAttribute(hf):null,n=e.getAttribute?e.getAttribute(gf):null;return t&&n}function mx(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function hx(){if(F.autoReplaceSvg===!0)return lo.replace;var e=lo[F.autoReplaceSvg];return e||lo.replace}function gx(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function vx(e){return ue.createElement(e)}function n1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gx:vx:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(n1(o,{ceFn:r}))}),i}function yx(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var lo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(n1(i),n)}),n.getAttribute(rr)===null&&F.keepOriginalSource){var r=ue.createComment(yx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~yf(n).indexOf(F.replacementClass))return lo.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===F.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return ca(l)}).join(`
`);n.setAttribute(rr,""),n.innerHTML=o}};function Ep(e){e()}function r1(e,t){var n=typeof t=="function"?t:oo;if(e.length===0)n();else{var r=Ep;F.mutateApproach===kw&&(r=zn.requestAnimationFrame||Ep),r(function(){var i=hx(),a=Ef.begin("mutate");e.map(i),a(),n()})}}var Cf=!1;function i1(){Cf=!0}function Ju(){Cf=!1}var Qo=null;function Cp(e){if(mp&&F.observeMutations){var t=e.treeCallback,n=t===void 0?oo:t,r=e.nodeCallback,i=r===void 0?oo:r,a=e.pseudoElementsCallback,o=a===void 0?oo:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Qo=new mp(function(u){if(!Cf){var c=$n();Xr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!bp(d.addedNodes[0])&&(F.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&bp(d.target)&&~Ow.indexOf(d.attributeName))if(d.attributeName==="class"&&px(d.target)){var h=jl(yf(d.target)),w=h.prefix,g=h.iconName;d.target.setAttribute(hf,w||c),g&&d.target.setAttribute(gf,g)}else mx(d.target)&&i(d.target)})}}),on&&Qo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wx(){Qo&&Qo.disconnect()}function xx(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Sx(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=jl(yf(e));return i.prefix||(i.prefix=$n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qw(i.prefix,e.innerText)||Sf(i.prefix,Wu(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function kx(e){var t=Xr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||ea()):(t["aria-hidden"]="true",t.focusable="false")),t}function bx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sx(e),r=n.iconName,i=n.prefix,a=n.rest,o=kx(e),l=Yu("parseNodeAttributes",{},e),s=t.styleParser?xx(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Ex=Nt.styles;function a1(e){var t=F.autoReplaceSvg==="nest"?Pp(e,{styleParser:!1}):Pp(e);return~t.extra.classes.indexOf(U0)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}var In=new Set;vf.map(function(e){In.add("fa-".concat(e))});Object.keys(Xi[le]).map(In.add.bind(In));Object.keys(Xi[ge]).map(In.add.bind(In));In=sa(In);function Np(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!on)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(hp,"-").concat(d))},i=function(d){return n.remove("".concat(hp,"-").concat(d))},a=F.autoFetchSvg?In:vf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ex));a.includes("fa")||a.push("fa");var o=[".".concat(U0,":not([").concat(rr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(rr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Xr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Ef.begin("onTree"),u=l.reduce(function(c,d){try{var h=a1(d);h&&c.push(h)}catch(w){M0||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){r1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),d(h)})})}function Cx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a1(e).then(function(n){n&&r1([n],t)})}function Px(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Qu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Qu(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Nx=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,w=n.titleId,g=w===void 0?null:w,v=n.classes,x=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,y=n.styles,S=y===void 0?{}:y;if(t){var C=t.prefix,A=t.iconName,N=t.icon;return Fl(I({type:"icon"},t),function(){return ir("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(h?p["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||ea()):(p["aria-hidden"]="true",p.focusable="false")),bf({icons:{main:Gu(N),mask:s?Gu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:A,transform:I(I({},Lt),i),symbol:o,title:h,maskId:c,titleId:g,extra:{attributes:p,styles:S,classes:x}})})}},_x={mixout:function(){return{icon:Px(Nx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Np,n.nodeCallback=Cx,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return Np(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(w,g){Promise.all([Ku(i,l),c.iconName?Ku(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=pf(v,2),m=x[0],p=x[1];w([n,bf({icons:{main:m,mask:p},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Il(l);s.length>0&&(i.style=s);var u;return wf(o)&&(u=nn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Ox={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Fl({type:"layer"},function(){ir("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(sa(a)).join(" ")},children:o}]})}}}},Ax={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return Fl({type:"counter",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),ux({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(sa(l))}})})}}}},Rx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Lt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,h=r.styles,w=h===void 0?{}:h;return Fl({type:"text",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),Sp({content:n,transform:I(I({},Lt),a),title:l,extra:{attributes:d,styles:w,classes:["".concat(F.cssPrefix,"-layers-text")].concat(sa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(j0){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Sp({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},Tx=new RegExp('"',"ug"),_p=[1105920,1112319];function zx(e){var t=e.replace(Tx,""),n=Yw(t,0),r=n>=_p[0]&&n<=_p[1],i=t.length===2?t[0]===t[1]:!1;return{value:Wu(i?t[0]:t),isSecondary:r||i}}function Op(e,t){var n="".concat(Sw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Xr(e.children),o=a.filter(function(N){return N.getAttribute(Hu)===t})[0],l=zn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Pw),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ge:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ji[h][s[2].toLowerCase()]:Nw[h][u],g=zx(d),v=g.value,x=g.isSecondary,m=s[0].startsWith("FontAwesome"),p=Sf(w,v),y=p;if(m){var S=Zw(v);S.iconName&&S.prefix&&(p=S.iconName,w=S.prefix)}if(p&&!x&&(!o||o.getAttribute(hf)!==w||o.getAttribute(gf)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var C=bx(),A=C.extra;A.attributes[Hu]=t,Ku(p,w).then(function(N){var O=bf(I(I({},C),{},{icons:{main:N,mask:kf()},prefix:w,iconName:y,extra:A,watchable:!0})),W=ue.createElement("svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=O.map(function(M){return ca(M)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $x(e){return Promise.all([Op(e,"::before"),Op(e,"::after")])}function Ix(e){return e.parentNode!==document.head&&!~bw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ap(e){if(on)return new Promise(function(t,n){var r=Xr(e.querySelectorAll("*")).filter(Ix).map($x),i=Ef.begin("searchPseudoElements");i1(),Promise.all(r).then(function(){i(),Ju(),t()}).catch(function(){i(),Ju(),n()})})}var Lx={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ap,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;F.searchPseudoElements&&Ap(i)}}},Rp=!1,jx={mixout:function(){return{dom:{unwatch:function(){i1(),Rp=!0}}}},hooks:function(){return{bootstrap:function(){Cp(Yu("mutationObserverCallbacks",{}))},noAuto:function(){wx()},watch:function(n){var r=n.observeMutationsRoot;Rp?Ju():Cp(Yu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Tp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Fx={mixout:function(){return{parse:{transform:function(n){return Tp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Tp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:d,path:h};return{tag:"g",attributes:I({},w.outer),children:[{tag:"g",attributes:I({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),w.path)}]}]}}}},Ps={x:0,y:0,width:"100%",height:"100%"};function zp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Dx(e){return e.tag==="g"?e.children:[e]}var Mx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?jl(i.split(" ").map(function(o){return o.trim()})):kf();return a.prefix||(a.prefix=$n()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,w=Fw({transform:s,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:I(I({},Ps),{},{fill:"white"})},v=c.children?{children:c.children.map(zp)}:{},x={tag:"g",attributes:I({},w.inner),children:[zp(I({tag:c.tag,attributes:I(I({},c.attributes),w.path)},v))]},m={tag:"g",attributes:I({},w.outer),children:[x]},p="mask-".concat(l||ea()),y="clip-".concat(l||ea()),S={tag:"mask",attributes:I(I({},Ps),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Dx(h)},S]};return r.push(C,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},Ps)}),{children:r,attributes:i}}}},Ux={provides:function(t){var n=!1;zn.matchMedia&&(n=zn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Hx=[Uw,_x,Ox,Ax,Rx,Lx,jx,Fx,Mx,Ux,Bx];nx(Hx,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;var qu=dt.parse;dt.findIconDefinition;dt.toHtml;var Wx=dt.icon;dt.layer;dt.text;dt.counter;var Y={},Vx={get exports(){return Y},set exports(e){Y=e}},Yx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qx=Yx,Gx=Qx;function o1(){}function l1(){}l1.resetWarningCache=o1;var Kx=function(){function e(r,i,a,o,l,s){if(s!==Gx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l1,resetWarningCache:o1};return n.PropTypes=n,n};Vx.exports=Kx();function $p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$p(Object(n),!0).forEach(function(r){Er(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Go(e){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Go(e)}function Er(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jx(e,t){if(e==null)return{};var n=Xx(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zu(e){return qx(e)||Zx(e)||e4(e)||t4()}function qx(e){if(Array.isArray(e))return ec(e)}function Zx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function e4(e,t){if(e){if(typeof e=="string")return ec(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ec(e,t)}}function ec(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n4(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,w=e.inverse,g=e.border,v=e.listItem,x=e.flip,m=e.size,p=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":w,"fa-border":g,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Er(t,"fa-".concat(m),typeof m<"u"&&m!==null),Er(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Er(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Er(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function r4(e){return e=e-0,e===e}function s1(e){return r4(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var i4=["style"];function a4(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o4(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=s1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[a4(i)]=a:t[i]=a,t},{})}function u1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return u1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=o4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[s1(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=Jx(n,i4);return i.attrs.style=xn(xn({},i.attrs.style),o),e.apply(void 0,[t.tag,xn(xn({},i.attrs),l)].concat(Zu(r)))}var c1=!1;try{c1=!0}catch{}function l4(){if(!c1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ip(e){if(e&&Go(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qu.icon)return qu.icon(e);if(e===null)return null;if(e&&Go(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ns(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Er({},e,t):{}}var jt=rn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Ip(n),c=Ns("classes",[].concat(Zu(n4(e)),Zu(a.split(" ")))),d=Ns("transform",typeof e.transform=="string"?qu.transform(e.transform):e.transform),h=Ns("mask",Ip(r)),w=Wx(u,xn(xn(xn(xn({},c),d),h),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!w)return l4("Could not find icon",u),null;var g=w.abstract,v={ref:t};return Object.keys(e).forEach(function(x){jt.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),s4(g[0],v)});jt.displayName="FontAwesomeIcon";jt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};jt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var s4=u1.bind(null,rn.createElement),u4={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},Lp={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},jp={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},c4={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Jr=b.createContext({});function f4({children:e}){const[t,n]=b.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=b.useState(!1),a={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return f(Jr.Provider,{value:a,children:e})}const d4=()=>{const[e,t]=b.useState(!1),{isLoggedIn:n,userProfile:r}=b.useContext(Jr);console.log("userProfile in navbar console.log",r);//! placeholder need to implement
const i=()=>{t(!e),console.log(`Nav Open: ${e}`),console.log(`Cross: ${e}`)},a=()=>{Wo.remove("loggedIn"),navigate("/login")};return f(uw,{className:"main-nav",children:n?f(Ut,{children:P("div",{className:"nav-bar",children:[f(He,{className:"page",to:"/",activeclassname:"active",children:f("img",{className:"logo",src:cw,alt:"PantryPal Egg logo"})}),P("div",{className:"nav-item-container",children:[f(He,{className:"page nav-item",to:"/search",children:"Search"}),f(He,{className:"page nav-item",to:"/saved",children:"Saved"}),f(He,{className:"page nav-item",to:"/mealPlanner",children:"Meal Planner"})]}),P("div",{className:"user-container",children:[f(He,{className:"page nav-item ",to:"/login",onClick:a,children:"Logout"}),f(He,{className:"page nav-item",to:"/profile",children:f(jt,{icon:Lp,className:"userIcon"})})]}),P(He,{className:e?"hamburger close":"hamburger",onClick:i,children:[f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"}),f("span",{className:"meat"})]}),f("nav",{className:e?"mobile-nav-container mobile-height":"mobile-nav-container",children:e&&P("nav",{className:"nav-width",children:[f(He,{className:"mobile-nav toggleNav && 'active'",to:"/search",onClick:i,children:"Search"}),f(He,{className:"mobile-nav",to:"/saved",onClick:i,children:"Saved"}),f(He,{className:"mobile-nav",to:"/mealPlanner",onClick:i,children:"Meal Planner"}),f(He,{className:"mobile-nav",to:"/login",onClick:a,children:"Logout"}),f(He,{className:"page mobile-nav",to:"/profile",onClick:i,children:f(jt,{icon:Lp,className:"userIcon mobile-nav"})})]})})]})}):f(Ut,{})})},p4="/assets/PantryPalAvo-64f88421.png",m4=Ye.div`
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

    @media ${we.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${we.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${we.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${we.tablet} { 
        min-width: 425px;
        h1 {
            font-size: 2rem;    
        }
    }
      
    @media ${we.laptop} { 
        min-width: 768px;
        h1 {
            font-size: 2.2rem;    
        }
  
    }
      
    @media ${we.desktop} {
        min-width: 1441px;
        h1 {
            font-size: 3rem;    
        }

    }
      
    @media ${we.desktopL} {
        min-width: 2560px;
        h1 {
            font-size: 4rem;    
        }

    }
`,h4=()=>P(m4,{children:[f("h1",{children:"Find recipes | Meal Plan"}),f("img",{className:"logo",src:p4,alt:"Pantry Pal Logo"}),P("div",{className:"linkContainer",children:[f(He,{className:"page linkItem",to:"/signup",children:"SignUp"}),f(He,{className:"page linkItem",to:"/login",children:"Login"})]}),f("section",{children:f("p",{children:P("section",{className:"about",children:[f("p",{children:"This project was organized by Danny Thompson and Scott Thompson of Dallas Software Developers"}),f("span",{children:"It was developed by"}),P("ul",{children:[f("li",{children:f("a",{href:"https://www.linkedin.com/in/jesusdoza/",target:"_blank",children:"Jesus Mendoza"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/damianpad/",target:"_blank",children:"Damian Padilla"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/amandapurcellperry/",target:"_blank",children:"Amanda Perry"})}),f("li",{children:f("a",{href:"https://www.linkedin.com/in/walter-williams/",target:"_blank",children:"Walter Williams"})})]}),P("span",{children:["Team Lead:"," ",f("a",{href:"https://www.linkedin.com/in/bethanyann/",target:"_blank",children:"Bethany Ann"})]}),f("p",{children:'With Pantry Pal, you can bid farewell to the question, "What can I make with the ingredients I have?" This app empowers you to create delicious and satisfying recipes using the ingredients already available in your pantry. Simply input the ingredients you have on hand, and the app swiftly sifts through its comprehensive database to generate a personalized list of recipes that you can whip up in no time'})]})})})]});let Mn="#2C4001",g4="#dae082",v4="#F2E7AE",_s="#F2F2F2";const y4=Ye.section`

    .logo {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
      
    }

    h1 {
        margin: 0;
    }

    h2 {
        color: ${Mn};
        margin: 0 auto;
    }

    .title h1{
        font-size: 1.6em;
        color: ${Mn};
    }

    form {

    }

    .input-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 3%;
    }
    
    form input {
        width: 90%;
        text-align: center;
        font-size: 1.5rem;
        border: 1px solid ${Mn};
        padding: .5em;
        background: ${_s};
        border-radius: 5px;
        color: #3c3b3b;
    }

    & form input:focus {
        background-color: ${v4};
    }

    .title {
        text-align: center;
        padding: 1em;
    }

    .submit-btn-container {
        width: 85%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
    }
    .signup-btn{
        border: 1px solid ${Mn};
        border-radius: 5px;
        padding: .5em;
        background: ${Mn};
        color: ${_s};
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    .signup-btn:hover {
        background: ${g4};
        color: ${Mn};
    }

    .goto-btn {
        padding: .6em;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .error-container {
        background: #ce4d4d;
        border: solid 2px red;
    }

    .error-desc {
        display: flex;
        justify-content: center;
        width: 50%;
        margin: .5em auto;
        border-radius: 5px;
        padding: 1px;
    }

    .error-marker {
        font-size: 2rem;
        color: red;
    }
    @media ${we.tablet} {
        .logo{
            width: 30%;
        }
        form{
            margin: 0 auto;
            width: 80%;
        }
    }
    @media ${we.laptop} {
        margin-top: 3em;
        .signup-container{
            background: ${_s};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${Mn};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
        .logo{
            width: 50%;
        }
`;function w4(){const e="",t=b.useRef(""),n=b.useRef(""),r=b.useRef(""),i=b.useRef("");let a=t.current.value,o=n.current.value,l=r.current.value,s=i.current.value;const[u,c]=b.useState(!1),[d,h]=b.useState([]),[w,g]=b.useState(!1),[v,x]=b.useState(!1),[m,p]=b.useState(!1),y=ml();function S(N){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(N)}function C(){let N=[];return!S(s)&&s&&(x(!0),N.push("email format invalid")),o!==l&&(p(!0),N.push("passwords do not match")),N.length>0?(c(!0),N):[]}async function A(){c(!1);const N=C();if(N.length>0){h(N);return}try{const O=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:a,password:o})});if(O.status==401)throw Error("Username and/or Email already exists");if(O.status!=201)throw Error(`server response error ${O.statusText}`)}catch(O){c(!0),h([O.message]);return}try{const O=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});if(O.status===200){const W=await O.json();Wo.set("loggedIn",{token:W.token,username:a})}else throw Error(O.statusText)}catch(O){c(!0),h([O.message]);return}y("/search")}return f(y4,{children:P("section",{className:"signup-container",children:[f("div",{children:f("img",{src:"\\src\\assets\\PantryPalAvo.png",alt:"Pantry Pal Logo",className:"logo"})}),P("section",{className:"form-sect",children:[P("form",{action:"#",onSubmit:N=>{N.preventDefault(),A()},children:[P("div",{className:"title",children:[f("h1",{children:"Welcome to Pantry Pal!"}),f("h2",{children:"Sign Up Here"})]}),P("div",{className:"input-container",children:[v&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"email"}),f("input",{placeholder:"Email",className:v?"error-container":"",ref:i,onChange:N=>{s=N.target.value,x(!1)},id:"email",type:"text",required:!0}),v&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[w&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"username"}),f("input",{placeholder:"Username",className:w?"error-container":"",ref:t,onChange:N=>{a=N.target.value},id:"username",type:"text",required:!0}),w&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{className:"input-tag",htmlFor:"password"}),f("input",{placeholder:"Password",className:m?"error-container":"",ref:n,onChange:N=>{o=N.target.value,p(!1)},id:"password",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[m&&f("span",{className:"error-marker",children:"*"}),f("label",{htmlFor:"confirmpassword",className:"input-tag"}),f("input",{placeholder:"Confirm Password",className:m?"error-container":"",ref:r,onChange:N=>{l=N.target.value,p(!1)},id:"confirmpassword",type:"password",required:!0}),m&&f("span",{className:"error-marker",children:"*"})]}),f("div",{className:"submit-btn-container",children:f("button",{className:"signup-btn",children:"Sign Up"})})]}),u&&f("section",{className:"error-container error-desc",children:P("div",{children:[f("h4",{children:"Please correct following errors"}),f("ul",{children:d.map((N,O)=>f("li",{children:N},O))})]})})]}),P("div",{className:"goto-btn",children:[f("span",{children:"Already have an account?"}),f(He,{className:"page",to:"/login",children:"Sign in"})]})]})})}let ui="#2C4001",x4="#F2E7AE";const S4=Ye.section`
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
        color: ${ui};
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
        background-color: ${ui};
        color: #fff;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        border-radius: .5em;
        cursor: pointer;
        
        margin: .3em 0;
        border: 1px solid ${ui};
    }
    & .search-btn: hover {
        background: ${x4};
        color: ${ui};
        border: 1px solid ${ui};
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

    
`;function f1(e,t){return function(){return e.apply(t,arguments)}}const{toString:d1}=Object.prototype,{getPrototypeOf:Pf}=Object,Nf=(e=>t=>{const n=d1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>Nf(t)===e),Dl=e=>t=>typeof t===e,{isArray:qr}=Array,ta=Dl("undefined");function k4(e){return e!==null&&!ta(e)&&e.constructor!==null&&!ta(e.constructor)&&Ln(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const p1=ln("ArrayBuffer");function b4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&p1(e.buffer),t}const E4=Dl("string"),Ln=Dl("function"),m1=Dl("number"),_f=e=>e!==null&&typeof e=="object",C4=e=>e===!0||e===!1,so=e=>{if(Nf(e)!=="object")return!1;const t=Pf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},P4=ln("Date"),N4=ln("File"),_4=ln("Blob"),O4=ln("FileList"),A4=e=>_f(e)&&Ln(e.pipe),R4=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||d1.call(e)===t||Ln(e.toString)&&e.toString()===t)},T4=ln("URLSearchParams"),z4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),qr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function h1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const g1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),v1=e=>!ta(e)&&e!==g1;function tc(){const{caseless:e}=v1(this)&&this||{},t={},n=(r,i)=>{const a=e&&h1(t,i)||i;so(t[a])&&so(r)?t[a]=tc(t[a],r):so(r)?t[a]=tc({},r):qr(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&fa(arguments[r],n);return t}const $4=(e,t,n,{allOwnKeys:r}={})=>(fa(t,(i,a)=>{n&&Ln(i)?e[a]=f1(i,n):e[a]=i},{allOwnKeys:r}),e),I4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),L4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},j4=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&Pf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},F4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},D4=e=>{if(!e)return null;if(qr(e))return e;let t=e.length;if(!m1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},M4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pf(Uint8Array)),U4=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},B4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},H4=ln("HTMLFormElement"),W4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Fp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V4=ln("RegExp"),y1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fa(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},Y4=e=>{y1(e,(t,n)=>{if(Ln(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ln(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q4=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return qr(e)?r(e):r(String(e).split(t)),n},G4=()=>{},K4=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Os="abcdefghijklmnopqrstuvwxyz",Dp="0123456789",w1={DIGIT:Dp,ALPHA:Os,ALPHA_DIGIT:Os+Os.toUpperCase()+Dp},X4=(e=16,t=w1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function J4(e){return!!(e&&Ln(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const q4=e=>{const t=new Array(10),n=(r,i)=>{if(_f(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=qr(r)?[]:{};return fa(r,(o,l)=>{const s=n(o,i+1);!ta(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},E={isArray:qr,isArrayBuffer:p1,isBuffer:k4,isFormData:R4,isArrayBufferView:b4,isString:E4,isNumber:m1,isBoolean:C4,isObject:_f,isPlainObject:so,isUndefined:ta,isDate:P4,isFile:N4,isBlob:_4,isRegExp:V4,isFunction:Ln,isStream:A4,isURLSearchParams:T4,isTypedArray:M4,isFileList:O4,forEach:fa,merge:tc,extend:$4,trim:z4,stripBOM:I4,inherits:L4,toFlatObject:j4,kindOf:Nf,kindOfTest:ln,endsWith:F4,toArray:D4,forEachEntry:U4,matchAll:B4,isHTMLForm:H4,hasOwnProperty:Fp,hasOwnProp:Fp,reduceDescriptors:y1,freezeMethods:Y4,toObjectSet:Q4,toCamelCase:W4,noop:G4,toFiniteNumber:K4,findKey:h1,global:g1,isContextDefined:v1,ALPHABET:w1,generateString:X4,isSpecCompliantForm:J4,toJSONObject:q4};function K(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const x1=K.prototype,S1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{S1[e]={value:e}});Object.defineProperties(K,S1);Object.defineProperty(x1,"isAxiosError",{value:!0});K.from=(e,t,n,r,i,a)=>{const o=Object.create(x1);return E.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),K.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Z4=null;function nc(e){return E.isPlainObject(e)||E.isArray(e)}function k1(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Mp(e,t,n){return e?e.concat(t).map(function(i,a){return i=k1(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function eS(e){return E.isArray(e)&&!e.some(nc)}const tS=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!E.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(E.isDate(g))return g.toISOString();if(!s&&E.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(g)||E.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,x){let m=g;if(g&&!x&&typeof g=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(E.isArray(g)&&eS(g)||(E.isFileList(g)||E.endsWith(v,"[]"))&&(m=E.toArray(g)))return v=k1(v),m.forEach(function(y,S){!(E.isUndefined(y)||y===null)&&t.append(o===!0?Mp([v],S,a):o===null?v:v+"[]",u(y))}),!1}return nc(g)?!0:(t.append(Mp(x,v,a),u(g)),!1)}const d=[],h=Object.assign(tS,{defaultVisitor:c,convertValue:u,isVisitable:nc});function w(g,v){if(!E.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),E.forEach(g,function(m,p){(!(E.isUndefined(m)||m===null)&&i.call(t,m,E.isString(p)?p.trim():p,v,h))===!0&&w(m,v?v.concat(p):[p])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Up(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Of(e,t){this._pairs=[],e&&Ml(e,this,t)}const b1=Of.prototype;b1.append=function(t,n){this._pairs.push([t,n])};b1.toString=function(t){const n=t?function(r){return t.call(this,r,Up)}:Up;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function nS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function E1(e,t,n){if(!t)return e;const r=n&&n.encode||nS,i=n&&n.serialize;let a;if(i?a=i(t,n):a=E.isURLSearchParams(t)?t.toString():new Of(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class rS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Bp=rS,C1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iS=typeof URLSearchParams<"u"?URLSearchParams:Of,aS=typeof FormData<"u"?FormData:null,oS=typeof Blob<"u"?Blob:null,lS=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),sS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ft={isBrowser:!0,classes:{URLSearchParams:iS,FormData:aS,Blob:oS},isStandardBrowserEnv:lS,isStandardBrowserWebWorkerEnv:sS,protocols:["http","https","file","blob","url","data"]};function uS(e,t){return Ml(e,new Ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Ft.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function cS(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fS(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function P1(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&E.isArray(i)?i.length:o,s?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&E.isArray(i[o])&&(i[o]=fS(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(cS(r),i,n,0)}),n}return null}const dS={"Content-Type":void 0};function pS(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ul={transitional:C1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=E.isObject(t);if(a&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i&&i?JSON.stringify(P1(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return uS(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ml(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),pS(t)):t}],transformResponse:[function(t){const n=this.transitional||Ul.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?K.from(l,K.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ft.classes.FormData,Blob:Ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){Ul.headers[t]={}});E.forEach(["post","put","patch"],function(t){Ul.headers[t]=E.merge(dS)});const Af=Ul,mS=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hS=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&mS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Hp=Symbol("internals");function ci(e){return e&&String(e).trim().toLowerCase()}function uo(e){return e===!1||e==null?e:E.isArray(e)?e.map(uo):String(e)}function gS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function vS(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function As(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function yS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wS(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Bl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=ci(s);if(!c)throw new Error("header name must be a non-empty string");const d=E.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||s]=uo(l))}const o=(l,s)=>E.forEach(l,(u,c)=>a(u,c,s));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!vS(t)?o(hS(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ci(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return gS(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ci(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||As(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=ci(o),o){const l=E.findKey(r,o);l&&(!n||As(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||As(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,a)=>{const o=E.findKey(r,a);if(o){n[o]=uo(i),delete n[a];return}const l=t?yS(a):String(a).trim();l!==a&&delete n[a],n[l]=uo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Hp]=this[Hp]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=ci(o);r[l]||(wS(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(a):a(t),this}}Bl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(Bl.prototype);E.freezeMethods(Bl);const Kt=Bl;function Rs(e,t){const n=this||Af,r=t||n,i=Kt.from(r.headers);let a=r.data;return E.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function N1(e){return!!(e&&e.__CANCEL__)}function da(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(da,K,{__CANCEL__:!0});function xS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const SS=Ft.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),E.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bS(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function _1(e,t){return e&&!kS(t)?bS(e,t):t}const ES=Ft.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=E.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function CS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function PS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let d=a,h=0;for(;d!==i;)h+=n[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function Wp(e,t){let n=0;const r=PS(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const NS=typeof XMLHttpRequest<"u",_S=NS&&function(e){return new Promise(function(n,r){let i=e.data;const a=Kt.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}E.isFormData(i)&&(Ft.isStandardBrowserEnv||Ft.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(w+":"+g))}const c=_1(e.baseURL,e.url);u.open(e.method.toUpperCase(),E1(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const w=Kt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};xS(function(m){n(m),s()},function(m){r(m),s()},v),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||C1;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new K(g,v.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},Ft.isStandardBrowserEnv){const w=(e.withCredentials||ES(c))&&e.xsrfCookieName&&SS.read(e.xsrfCookieName);w&&a.set(e.xsrfHeaderName,w)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&E.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),E.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Wp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Wp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new da(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=CS(c);if(h&&Ft.protocols.indexOf(h)===-1){r(new K("Unsupported protocol "+h+":",K.ERR_BAD_REQUEST,e));return}u.send(i||null)})},co={http:Z4,xhr:_S};E.forEach(co,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const OS={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=E.isString(n)?co[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(co,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:co};function Ts(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new da(null,e)}function Vp(e){return Ts(e),e.headers=Kt.from(e.headers),e.data=Rs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),OS.getAdapter(e.adapter||Af.adapter)(e).then(function(r){return Ts(e),r.data=Rs.call(e,e.transformResponse,r),r.headers=Kt.from(r.headers),r},function(r){return N1(r)||(Ts(e),r&&r.response&&(r.response.data=Rs.call(e,e.transformResponse,r.response),r.response.headers=Kt.from(r.response.headers))),Promise.reject(r)})}const Yp=e=>e instanceof Kt?e.toJSON():e;function Ur(e,t){t=t||{};const n={};function r(u,c,d){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:d},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function i(u,c,d){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function a(u,c){if(!E.isUndefined(c))return r(void 0,c)}function o(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(Yp(u),Yp(c),!0)};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=s[c]||i,h=d(e[c],t[c],c);E.isUndefined(h)&&d!==l||(n[c]=h)}),n}const O1="1.3.4",Rf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Rf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qp={};Rf.transitional=function(t,n,r){function i(a,o){return"[Axios v"+O1+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new K(i(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!Qp[o]&&(Qp[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function AS(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new K("option "+a+" must be "+s,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}}const rc={assertOptions:AS,validators:Rf},dn=rc.validators;class Ko{constructor(t){this.defaults=t,this.interceptors={request:new Bp,response:new Bp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ur(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&rc.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!==void 0&&rc.assertOptions(i,{encode:dn.function,serialize:dn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&E.merge(a.common,a[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Kt.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!s){const g=[Vp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);d<h;)c=c.then(g[d++],g[d++]);return c}h=l.length;let w=n;for(d=0;d<h;){const g=l[d++],v=l[d++];try{w=g(w)}catch(x){v.call(this,x);break}}try{c=Vp.call(this,w)}catch(g){return Promise.reject(g)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Ur(this.defaults,t);const n=_1(t.baseURL,t.url);return E1(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Ko.prototype[t]=function(n,r){return this.request(Ur(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(Ur(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Ko.prototype[t]=n(),Ko.prototype[t+"Form"]=n(!0)});const fo=Ko;class Tf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new da(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Tf(function(i){t=i}),cancel:t}}}const RS=Tf;function TS(e){return function(n){return e.apply(null,n)}}function zS(e){return E.isObject(e)&&e.isAxiosError===!0}const ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ic).forEach(([e,t])=>{ic[t]=e});const $S=ic;function A1(e){const t=new fo(e),n=f1(fo.prototype.request,t);return E.extend(n,fo.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return A1(Ur(e,i))},n}const Pe=A1(Af);Pe.Axios=fo;Pe.CanceledError=da;Pe.CancelToken=RS;Pe.isCancel=N1;Pe.VERSION=O1;Pe.toFormData=Ml;Pe.AxiosError=K;Pe.Cancel=Pe.CanceledError;Pe.all=function(t){return Promise.all(t)};Pe.spread=TS;Pe.isAxiosError=zS;Pe.mergeConfig=Ur;Pe.AxiosHeaders=Kt;Pe.formToJSON=e=>P1(E.isHTMLForm(e)?new FormData(e):e);Pe.HttpStatusCode=$S;Pe.default=Pe;const Hl=Pe;let Ht="#2C4001",Gp="#F2E7AE",Kp="#59320F",IS="#F2F2F2";const LS=Ye.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${Ht};


.container {
  background-color: ${IS};
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
    background: ${Gp};
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
    background-color: ${Kp};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Kp};
  }
  .save_btn: hover {
    background: ${Gp};
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


`,jS=(e,t)=>{console.log("username",t);const n="";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},FS=(e,t)=>{const n="";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!");else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},R1=({recipe:e,showDelete:t})=>{const n=a=>a.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=b.useContext(Jr);return f(LS,{children:P("div",{className:"container",children:[f("img",{src:e.image,alt:e.title}),P("div",{className:"card_body",children:[f("h1",{children:e.title}),P("p",{children:[n(e.summary),"Credit: ",e.creditText]}),P("div",{className:"card_footer",children:[P("div",{className:"card_footer_container",children:[f("h2",{children:"Dish type:"}),P("p",{children:[" ",e.dishTypes[0]]})]}),P("div",{className:"card_footer_container",children:[f("h2",{children:"Servings:"}),P("p",{children:[" ",e.servings]})]}),P("div",{className:"card_footer_container",children:[f("h2",{children:"Total Time:"}),f("p",{children:e.readyInMinutes})]})]}),P("div",{className:"btn-container",children:[f(g0,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&f("button",{className:"save_btn",onClick:()=>jS(e,i.username),children:"Save it!"}),t&&f("button",{className:"delete_btn",onClick:()=>FS(e,i.username),children:"Delete Recipe"})]})]})]})})},DS=Ye.section`
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
`;function T1(){return f(DS,{children:f("span",{className:"loader"})})}let fi="#2C4001",MS="#F2E7AE",US="#F2F2F2";const BS=Ye.section`
   
    color: ${fi};


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
        background-color: ${fi};
        color: ${US};
        border: 1px solid ${fi};
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
        background-color: ${MS};
        color: ${fi};
        border: 1px solid ${fi};
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
`;function HS({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return f("div",{children:"no filters available"});let a=new Set,o=new Set,l=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(g=>{let v=g.diets;v.length>0&&v.forEach(x=>{n.includes(x)||a.add(x)}),l.forEach(x=>{g[x]&&!i.includes(x)&&o.add(x)})});let s=Array.from(a.values()),u=Array.from(o.values());function c(g){t(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function d(g){t(v=>v.filter(x=>x!==g))}function h(g){r(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function w(g){r(v=>v.filter(x=>x!==g))}return P(BS,{className:"main-filter-container",children:[n.length>0?P("section",{children:[f("h2",{children:"Selected filters: "}),f("ul",{children:n.map((g,v)=>f("li",{onClick:()=>{d(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),i.length>0?P("section",{children:[f("h2",{children:"Category filters"}),f("ul",{children:i.map((g,v)=>f("li",{onClick:()=>{w(g)},className:"btn-filter",children:g},v+g))})]}):f("section",{}),P("section",{className:"filter-row",children:[f("h2",{children:"Dietary options:"}),f("ul",{className:"filter-options",children:s.length>0?s.map((g,v)=>f("li",{onClick:()=>{c(g)},className:"btn",children:f("span",{children:g})},v+g+1)):f(Ut,{})})]}),P("section",{className:"filter-row",children:[f("h2",{children:"Categories:"}),f("ul",{className:"filter-options",children:u.map((g,v)=>f("li",{onClick:()=>{h(g)},className:"btn",children:f("span",{children:g})},g+v+2))})]})]})}function WS(){const e="",[t,n]=b.useState(""),[r,i]=b.useState([]),[a,o]=b.useState([]),[l,s]=b.useState([]),[u,c]=b.useState([]),[d,h]=b.useState(!1),[w,g]=b.useState(!1);b.useEffect(()=>{if(l.length>0||u.length>0){let m=VS(r,l,u);o(m);return}o(r)},[l,u]);const v=b.useRef("");async function x(){try{g(!0);const m=await Hl.get(`${e}/api/searchByIngredientCombined`,{params:{ingredients:t}});m!=null&&m.data&&h(!1);let p=m.data;i(p),o(p),g(!1)}catch{h(!0)}}return P(S4,{children:[f("div",{className:"title",children:f("h1",{children:"Recipe Search"})}),f("div",{className:"searchContainer",children:P("form",{action:"#",onSubmit:m=>{m.preventDefault(),x()},children:[f("input",{ref:v,onChange:m=>n(m.target.value),id:"ingregients",value:t,type:"text",placeholder:"Enter your ingredients",className:"search"}),f("button",{className:"search-btn",children:"Search"})]})}),P("section",{className:"recipes-display",children:[f("div",{className:"filter-container",children:f(HS,{recipeListArr:a,setDietFilter:s,dietFilter:l,setCategoryFilter:c,categoryFilter:u})}),f("section",{className:"searchresults-container",children:f("div",{className:"searchResults",children:f("ul",{children:w?f(T1,{}):a.length>0?a.map(m=>f("li",{children:f(R1,{recipe:m},m.id)},m.id)):d?P("h3",{children:[" ","An error has occured, please try searching again."," "]}):P("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function VS(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const YS=Ye.section`
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
`;function QS(){const[e,t]=b.useState([]),n="",{userProfile:r}=b.useContext(Jr);return b.useEffect(()=>{async function i(){try{const a=await Hl.post(`${n}/api/getSavedRecipes`,{username:r.username});t(a.data)}catch(a){console.error("Error fetching saved recipes:",a)}}i()},[]),P(YS,{children:[f("div",{className:"title",children:f("h1",{children:"Saved Recipes"})}),f("div",{className:"saved-recipes",children:f("ul",{children:e.map(i=>f("li",{children:f(R1,{recipe:i.recipeJson,showDelete:!0})},i._id))})})]})}let Un="#2C4001",Xp="#dae082",GS="#F2E7AE",sr="#F2F2F2";const KS=Ye.section`
    height: 100%;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: ${Un};
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
        color: ${sr};
        background: ${Un};
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
        border: 1px solid ${Un};
        border-radius: 5px;
    }
    & form input {
        text-align: center;
        font-size: 1.5rem;
        border: none;
        width: 100%;
        padding: .5em;
        background-color: ${sr};
        border-radius: 5px;
        color: #3c3b3b;
    }
    & form input:focus {
        background-color: ${GS};
        border: none;
    }
    & .input-tag {
        color: ${sr};
        
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
        background: ${Xp};
        color: #000000;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${Xp};
        color: ${Un};
        border: 1px solid ${Un};
    }

    & .submit-btn button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
        background: ${Un};
        color: ${sr};
        border: 1px solid ${sr};
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

    @media ${we.tablet} {
        .logo{
            width: 50%;
        }
        form{
            margin: 0 auto;
            width: 60%;
        }
    }
    @media ${we.laptop} {
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
        .login-container {
            background: ${sr};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${Un};
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

    @media ${we.laptopL} {
        .logo{
           
        }
        form{
            
        }
    }
    @media ${we.desktop} {

    }
`;function XS(){const e=b.useRef(null),t=b.useRef(null),[n,r]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null),s=ml(),{userProfile:u,isLoggedIn:c,setIsLoggedIn:d,setUserProfile:h}=b.useContext(Jr);return b.useEffect(()=>{e.current.focus()},[]),f(KS,{children:P("section",{className:"login-container",children:[f("div",{children:f("img",{src:"\\src\\assets\\PantryPalAvo.png",alt:"Pantry Pal Logo",className:"logo"})}),f("section",{className:"form-sect",children:P("form",{onSubmit:async g=>{g.preventDefault();try{const x=(await Hl.post("/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;d(!0),h(m=>x.userProfile?{...m,...x.userProfile}:m),s("/search")}catch(v){d(!1),console.log(v)}},children:[P("div",{className:"title",children:[f("div",{children:c&&"logged in"}),f("h2",{children:"Welcome Back!"})]}),o&&f("div",{className:"error-container",children:P("div",{className:"error-desc",children:[f("span",{className:"error-marker",children:"⚠"})," ",o]})}),P("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"username"}),f("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:g=>r(g.target.value),required:!0})]}),P("div",{className:"input-container",children:[f("label",{className:"input-tag",htmlFor:"password"}),f("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:g=>a(g.target.value),required:!0})]}),f("div",{className:"submit-btn",children:f("button",{type:"submit",className:"btn",children:"Sign In"})}),f("span",{children:"Don't have an account?"}),f(He,{className:"page",to:"/signup",children:"Sign up"})]})})]})})}let bt="#2C4001",Wa="#F2E7AE",Jp="#59320F",zs="#F2F2F2";const JS=Ye.section`
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
  background: ${zs};
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
  color: ${zs};
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
  background: ${Jp};
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
  background: ${Jp};
  color: ${Wa};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${zs};
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
`;let Va;const qS=new Uint8Array(16);function ZS(){if(!Va&&(Va=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Va))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Va(qS)}const Ie=[];for(let e=0;e<256;++e)Ie.push((e+256).toString(16).slice(1));function ek(e,t=0){return(Ie[e[t+0]]+Ie[e[t+1]]+Ie[e[t+2]]+Ie[e[t+3]]+"-"+Ie[e[t+4]]+Ie[e[t+5]]+"-"+Ie[e[t+6]]+Ie[e[t+7]]+"-"+Ie[e[t+8]]+Ie[e[t+9]]+"-"+Ie[e[t+10]]+Ie[e[t+11]]+Ie[e[t+12]]+Ie[e[t+13]]+Ie[e[t+14]]+Ie[e[t+15]]).toLowerCase()}const tk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),qp={randomUUID:tk};function gt(e,t,n){if(qp.randomUUID&&!t&&!e)return qp.randomUUID();e=e||{};const r=e.random||(e.rng||ZS)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return ek(r)}function nk(){var u;const t=(u=Kr().state)==null?void 0:u.recipe,n=t.dishTypes.map(c=>f("li",{children:c},gt())),r=t.extendedIngredients.map(c=>P("li",{children:[c.amount," ",c.unit," ",f("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${c.image}`})," ",c.name]},gt()));console.log(t);const i=t.analyzedInstructions[0].steps.map(c=>f("li",{children:c.step},gt())),a=t.summary.replace(/<.*?>/g,""),o=t.extendedIngredients.length,l=t.aggregateLikes,s=t.diets.map(c=>f("li",{children:c},gt()));return f(JS,{children:P("div",{className:"recipeContainer",children:[P("div",{className:"recipeImgContainer",children:[P("div",{className:"imageContainer",children:[f("img",{className:"recipeImg",src:t.image,alt:t.title}),f("button",{className:"saveBtn",children:f(jt,{icon:jp,className:"saveIcon"})})]}),P("section",{className:"recipeDetails",children:[f("div",{className:"titleContainer",children:f("h1",{className:"recipeTitle",children:t.title})}),P("div",{className:"quickInfoContainer",children:[P("section",{className:"quickInfoItem",children:[f(jt,{icon:c4,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),P("section",{children:[f(jt,{icon:u4,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[o," Ingredients"]})]}),P("section",{children:[f(jt,{icon:jp,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[l," Likes"]})]})]}),f("section",{className:"recipeSummary",children:f("p",{children:a})}),P("section",{className:"recipeTags",children:[f("div",{className:"recipeCategory",children:n}),f("div",{className:"recipeDiets",children:s})]})]})]}),f("div",{className:"recipeHead",children:f("div",{className:"recipeStart",children:P("div",{className:"ingredientCard",children:[P("h2",{children:["Servings: ",t.servings]}),f("input",{type:"number",placeholder:t.servings}),f("h2",{children:"What you'll need:"}),f("div",{className:"recipeIngredient",children:r})]})})}),P("div",{className:"instructionsCard",children:[f("h2",{children:t.title}),P("div",{className:"instructionContainer",children:[f("div",{children:f("img",{className:"instructionImg",src:t.image,alt:t.title})}),P("div",{className:"recipeInstructions",children:[f("h2",{children:"Instructions:"}),f("ol",{children:i})]})]})]})]})})}async function rk(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}const ik=Ye.section`
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
`;function ak(){const[e,t]=b.useState(!1),[n,r]=b.useState(1),[i,a]=b.useState("None"),[o,l]=b.useState(""),[s,u]=b.useState(null);return P(ik,{children:[P("form",{onSubmit:async d=>{t(!0),d.preventDefault();const h=await rk(n,i,parseInt(o));u(h),t(!1)},children:[f("label",{htmlFor:"numberOfDays",children:"Number of days:"}),P("select",{id:"numberOfDays",value:n,onChange:d=>r(d.target.value),children:[f("option",{value:"1",children:"1"}),f("option",{value:"3",children:"3"}),f("option",{value:"5",children:"5"})]}),f("label",{htmlFor:"dietType",children:"Diet type:"}),P("select",{id:"dietType",value:i,onChange:d=>a(d.target.value),children:[f("option",{value:"None",children:"None"}),f("option",{value:"vegan",children:"Vegan"}),f("option",{value:"vegetarian",children:"Vegetarian"}),f("option",{value:"pescatarian",children:"Pescatarian"}),f("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),f("option",{value:"keto",children:"Keto"}),f("option",{value:"gluten-free",children:"Gluten-free"}),f("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),f("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),f("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:o,onChange:d=>l(d.target.value)}),f("button",{type:"submit",children:"Get Meal Plan"}),e?f(T1,{}):null]}),s&&P("table",{children:[f("thead",{children:P("tr",{children:[f("th",{children:"Day"}),f("th",{children:"Meal"}),f("th",{children:"Food"}),f("th",{children:"Calories"})]})}),f("tbody",{children:s.map(d=>{const h=Object.entries(d).filter(([g])=>g!=="Day"&&g!=="TotalCalories"),w=h.reduce((g,[,v])=>g+v.Calories,0);return h.flatMap(([g,v],x)=>[P("tr",{children:[x===0&&f("td",{rowSpan:h.length+1,children:d.Day}),f("td",{children:g}),f("td",{children:v.Meal}),f("td",{children:v.Calories})]},`${g}-${v.Meal}`),x===h.length-1&&f("tr",{children:P("td",{colSpan:"3",align:"right",children:["Total Day Calories :"," ",w]})},`${g}-TotalCalories`)])})})]})]})}const ok=sw`
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

`,lk="#ffffff",sk="#40a140",uk=" #ffea00d0",ck=" #28bee4",fk="#ffffff",dk="#25271843",pk=Ye.section`
    background: ${lk};
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
        background: ${fk};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${dk};
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
        background-color: ${uk};
        color: #000000;
        text-align: middle;
        vertical-align: center;
        box-shadow: 3px 1px 5px black;
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${ck};
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
            background: ${sk};
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
`,mk="#2b3f0124",hk="#eae6e6",gk="#a8a6a6",vk="#000000",yk="#595959f",wk=Ye.section`
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
            background-color: ${mk};

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
            background-color: ${hk};
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
                                color: ${yk};
                            }
                            input {
                                color: ${vk};
                                border: 1px solid ${gk};
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
`,xk="#f4888a",Sk=Ye.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${xk};

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
`,kk="/assets/error-58915e09.png";function zf({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:P("div",{className:"error_item",children:[f("div",{className:"img__container",children:f("img",{src:kk,alt:"error symbol"})}),f("p",{children:a})]})},gt()))}return t?f(Sk,{children:f("div",{className:"error container",children:f("div",{className:"row",children:P("section",{className:"container col",children:[f("h3",{children:"Please correct errors"}),f("ul",{className:"error__list",children:e.length>0?n(e):f(Ut,{})})]})})})}):f(Ut,{})}function bk({children:e,setIsDisplayed:t,scrollToRef:n}){b.useRef("");function r(){t(!1)}return f(wk,{children:P("main",{children:[f("div",{onClick:()=>{r()},className:"back__blur "}),f("div",{ref:n,className:"container row ",children:f("section",{id:"modal",className:"",children:e})})]})})}const $s=Hl.create({baseURL:"",headers:{"Content-Type":"application/json"},withCredentials:!0});function Zp(e,t){return e===t}function Ek(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function Ck(e,t){const n=await JSON.stringify({token:t,username:e});Wo.set("loggedIn",n),Wo.set("loggedIn",n)}const Ya={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!Zp(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await $s.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await Ck(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!Zp(t,n))throw Error("emails dont match");if(!Ek(t))throw Error("emails improper format");return r=await $s.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await $s.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},Pk="#08e171dc",Nk=Ye.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${Pk};

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
`,_k="/assets/checked-926d4d93.png";function $f({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>f("li",{className:"error_container",children:P("div",{className:"list_item",children:[f("img",{src:_k,alt:"check symbol"}),f("p",{children:a})]})},gt()))}return t?f(Nk,{children:f("div",{className:"error container",children:f("div",{className:"row",children:f("section",{className:"container col",children:f("ul",{className:"display_list",children:e.length>0?n(e):f(Ut,{})})})})})}):f(Ut,{})}const Ok=Ye.section``;function em({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return P(Ok,{children:[P("div",{children:[f($f,{listArr:["Password Updated"],showCard:n}),f(zf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Password"})}),f("section",{className:"row form__inputs",children:P("ul",{children:[f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"oldPassword",children:"Old Password"}),f("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newPassword",children:"New Password"}),f("input",{id:"newPassword",type:"text",name:"newPassword"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),f("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function Ak({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log("modal form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update form",d.message);return}r(!0)}return P("form",{ref:s,onSubmit:u,children:[P("div",{children:[f($f,{listArr:["Email Updated"],showCard:n}),f(zf,{errorsArr:o,showError:i})]}),f("section",{className:"row title",children:f("h1",{children:"Update Email"})}),f("section",{className:"row form__inputs",children:P("ul",{children:[f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newEmail",children:"New Email"}),f("input",{id:"newEmail",type:"text",name:"newEmail"})]})},gt()),f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),f("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},gt())]})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})}function Rk({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const d=new FormData(s.current),h=Object.fromEntries(d.entries());console.log(" form data",h);const w=await e(h)}catch(d){l([d.message]),a(!0),console.log("error in update modal",d.message);return}r(!0)}return P(Ut,{children:[P("div",{children:[f($f,{listArr:["Calorie Preferences Updated"],showCard:n}),f(zf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[f("section",{className:"row title",children:f("h1",{children:"Update Calorie preferences"})}),f("section",{className:"row form__inputs",children:f("ul",{children:f("li",{className:"update__field",children:P("div",{className:"input__container",children:[f("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),f("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},gt())})}),n?f("section",{className:"form__controls row",children:f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[f("div",{className:"btn",onClick:u,children:f("span",{children:"Submit"})}),f("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:f("span",{children:"Cancel"})})]})]})]})}function Tk(){b.useRef(null);const[e,t]=b.useState(!1);b.useState([]),b.useState(!1),b.useState(!1);const[n,r]=b.useState(f(em,{setShowModal:t,handleSubmit:Ya.updatePassword}));return P(pk,{children:[f("section",{className:"modal__container",children:e?f(bk,{setIsDisplayed:t,children:n}):f(Ut,{})}),P("section",{className:"profile-page",children:[P("section",{className:"container profile",children:[P("picture",{children:[f("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),f("img",{src:"/src/assets/spoon.png",alt:"user avatar"})]}),f("h3",{children:"Hi! Bob"}),f("h3",{children:"Email@email.com"})]}),P("section",{className:"container app-config",children:[P("section",{children:[f("h4",{children:"Your Dietary Preferences"}),P("ul",{className:"app-pref",children:[f("li",{children:f("div",{children:f("span",{children:"Gluten Free"})})}),f("li",{children:"Ketogenic"}),f("li",{children:"Vegetarian"}),f("li",{children:"Lacto-Vegetarian"}),f("li",{children:"Ovo-Vegetarian"}),f("li",{children:"Vegan"}),f("li",{children:"Pescetarian"}),f("li",{children:"Paleo"}),f("li",{children:"Primal"})]}),f("div",{className:"controls",children:f("span",{className:"btn",children:"Update Dietary Preferences"})})]}),P("ul",{className:"options",children:[f("li",{className:"btn",onClick:()=>{t(!0),r(f(Rk,{setShowModal:t,handleSubmit:Ya.updateCaloric}))},children:f("span",{children:"Update Caloric settings"})}),f("li",{className:"btn",onClick:()=>{t(!0),r(f(Ak,{setShowModal:t,handleSubmit:Ya.updateEmail}))},children:f("span",{children:"Update Email"})}),f("li",{onClick:()=>{t(!0),r(f(em,{setShowModal:t,handleSubmit:Ya.updatePassword}))},className:"btn",children:f("div",{children:f("span",{children:"Update Password"})})})]})]})]})]})}function di({children:e}){const{isLoggedIn:t}=b.useContext(Jr);return t?f(Ut,{children:e}):f(Zy,{to:"/login"})}function zk(){return f(f4,{children:P("div",{className:"App",children:[f("header",{children:f(d4,{})}),P("main",{children:[P(t2,{children:[f(Tt,{path:"/",element:f(h4,{})}),f(Tt,{path:"/search",element:f(di,{children:f(WS,{})})}),f(Tt,{path:"/details",element:f(di,{children:f(nk,{})})}),f(Tt,{path:"/saved",element:f(di,{children:f(QS,{})})}),f(Tt,{path:"/signup",element:f(w4,{})}),f(Tt,{path:"/login",element:f(XS,{})}),f(Tt,{path:"/mealPlanner",element:f(di,{children:f(ak,{})})}),f(Tt,{path:"/profile",element:f(di,{children:f(Tk,{})})}),f(Tt,{path:"/*",element:f("h1",{children:"404 no page"})})]}),f(ok,{})]})]})})}Ls.createRoot(document.getElementById("root")).render(f(rn.StrictMode,{children:f(o2,{children:f(zk,{})})}));
