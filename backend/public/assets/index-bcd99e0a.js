function Ny(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ry(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sa={},Iy={get exports(){return sa},set exports(e){sa=e}},Kl={},x={},Fy={get exports(){return x},set exports(e){x=e}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),_y=Symbol.for("react.portal"),$y=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),Ly=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),My=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),Vy=Symbol.for("react.memo"),Uy=Symbol.for("react.lazy"),sp=Symbol.iterator;function By(e){return e===null||typeof e!="object"?null:(e=sp&&e[sp]||e["@@iterator"],typeof e=="function"?e:null)}var rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,ag={};function pi(e,t,n){this.props=e,this.context=t,this.refs=ag,this.updater=n||rg}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function og(){}og.prototype=pi.prototype;function Cf(e,t,n){this.props=e,this.context=t,this.refs=ag,this.updater=n||rg}var kf=Cf.prototype=new og;kf.constructor=Cf;ig(kf,pi.prototype);kf.isPureReactComponent=!0;var up=Array.isArray,lg=Object.prototype.hasOwnProperty,Pf={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function ug(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)lg.call(t,r)&&!sg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ma,type:e,key:a,ref:o,props:i,_owner:Pf.current}}function Hy(e,t){return{$$typeof:Ma,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Of(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ma}function Wy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cp=/\/+/g;function Ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wy(""+e.key):t.toString(36)}function $o(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ma:case _y:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ks(o,0):r,up(i)?(n="",e!=null&&(n=e.replace(cp,"$&/")+"/"),$o(i,t,n,"",function(u){return u})):i!=null&&(Of(i)&&(i=Hy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",up(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ks(a,l);o+=$o(a,t,n,s,i)}else if(s=By(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ks(a,l++),o+=$o(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(e,t,n){if(e==null)return e;var r=[],i=0;return $o(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},To={transition:null},Gy={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:To,ReactCurrentOwner:Pf};Z.Children={map:qa,forEach:function(e,t,n){qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qa(e,function(){t++}),t},toArray:function(e){return qa(e,function(t){return t})||[]},only:function(e){if(!Of(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=pi;Z.Fragment=$y;Z.Profiler=Ly;Z.PureComponent=Cf;Z.StrictMode=Ty;Z.Suspense=jy;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ig({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Pf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)lg.call(t,s)&&!sg.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ma,type:e.type,key:i,ref:a,props:r,_owner:o}};Z.createContext=function(e){return e={$$typeof:My,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dy,_context:e},e.Consumer=e};Z.createElement=ug;Z.createFactory=function(e){var t=ug.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:zy,render:e}};Z.isValidElement=Of;Z.lazy=function(e){return{$$typeof:Uy,_payload:{_status:-1,_result:e},_init:Yy}};Z.memo=function(e,t){return{$$typeof:Vy,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return ut.current.useCallback(e,t)};Z.useContext=function(e){return ut.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};Z.useEffect=function(e,t){return ut.current.useEffect(e,t)};Z.useId=function(){return ut.current.useId()};Z.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return ut.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};Z.useRef=function(e){return ut.current.useRef(e)};Z.useState=function(e){return ut.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return ut.current.useTransition()};Z.version="18.2.0";(function(e){e.exports=Z})(Fy);const xn=Ry(x),ua=Ny({__proto__:null,default:xn},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=x,Qy=Symbol.for("react.element"),Xy=Symbol.for("react.fragment"),qy=Object.prototype.hasOwnProperty,Jy=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function cg(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qy.call(t,r)&&!Zy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qy,type:e,key:a,ref:o,props:i,_owner:Jy.current}}Kl.Fragment=Xy;Kl.jsx=cg;Kl.jsxs=cg;(function(e){e.exports=Kl})(Iy);const pn=sa.Fragment,h=sa.jsx,N=sa.jsxs;var Gu={},rl={},ew={get exports(){return rl},set exports(e){rl=e}},St={},Ku={},tw={get exports(){return Ku},set exports(e){Ku=e}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var U=F.length;F.push(V);e:for(;0<U;){var te=U-1>>>1,I=F[te];if(0<i(I,V))F[te]=V,F[U]=I,U=te;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],U=F.pop();if(U!==V){F[0]=U;e:for(var te=0,I=F.length,_=I>>>1;te<_;){var T=2*(te+1)-1,B=F[T],C=T+1,G=F[C];if(0>i(B,U))C<I&&0>i(G,B)?(F[te]=G,F[C]=U,te=C):(F[te]=B,F[T]=U,te=T);else if(C<I&&0>i(G,U))F[te]=G,F[C]=U,te=C;else break e}}return V}function i(F,V){var U=F.sortIndex-V.sortIndex;return U!==0?U:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,f=null,p=3,y=!1,g=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=F)r(u),V.sortIndex=V.expirationTime,t(s,V);else break;V=n(u)}}function S(F){if(v=!1,w(F),!g)if(n(s)!==null)g=!0,Ee(k);else{var V=n(u);V!==null&&ge(S,V.startTime-F)}}function k(F,V){g=!1,v&&(v=!1,d(O),O=-1),y=!0;var U=p;try{for(w(V),f=n(s);f!==null&&(!(f.expirationTime>V)||F&&!se());){var te=f.callback;if(typeof te=="function"){f.callback=null,p=f.priorityLevel;var I=te(f.expirationTime<=V);V=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(s)&&r(s),w(V)}else r(s);f=n(s)}if(f!==null)var _=!0;else{var T=n(u);T!==null&&ge(S,T.startTime-V),_=!1}return _}finally{f=null,p=U,y=!1}}var P=!1,E=null,O=-1,L=5,z=-1;function se(){return!(e.unstable_now()-z<L)}function X(){if(E!==null){var F=e.unstable_now();z=F;var V=!0;try{V=E(!0,F)}finally{V?ae():(P=!1,E=null)}}else P=!1}var ae;if(typeof m=="function")ae=function(){m(X)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,q=ee.port2;ee.port1.onmessage=X,ae=function(){q.postMessage(null)}}else ae=function(){b(X,0)};function Ee(F){E=F,P||(P=!0,ae())}function ge(F,V){O=b(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Ee(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var U=p;p=V;try{return F()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=p;p=F;try{return V()}finally{p=U}},e.unstable_scheduleCallback=function(F,V,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,F){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=U+I,F={id:c++,callback:V,priorityLevel:F,startTime:U,expirationTime:I,sortIndex:-1},U>te?(F.sortIndex=U,t(u,F),n(s)===null&&F===n(u)&&(v?(d(O),O=-1):v=!0,ge(S,U-te))):(F.sortIndex=I,t(s,F),g||y||(g=!0,Ee(k))),F},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(F){var V=p;return function(){var U=p;p=V;try{return F.apply(this,arguments)}finally{p=U}}}})(fg);(function(e){e.exports=fg})(tw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=x,xt=Ku;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,ca={};function kr(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(ca[e]=t,e=0;e<t.length;e++)pg.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,nw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},dp={};function rw(e){return Qu.call(dp,e)?!0:Qu.call(fp,e)?!1:nw.test(e)?dp[e]=!0:(fp[e]=!0,!1)}function iw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aw(e,t,n,r){if(t===null||typeof t>"u"||iw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Nf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Af,Nf);Je[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Af,Nf);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Af,Nf);Je[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aw(t,n,i,r)&&(n=null),r||i===null?rw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=pp&&e[pp]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Qs;function Ui(e){if(Qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qs=t&&t[1]||""}return`
`+Qs+e}var Xs=!1;function qs(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ui(e):""}function ow(e){switch(e.tag){case 5:return Ui(e.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function Zu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Fr:return"Portal";case Xu:return"Profiler";case If:return"StrictMode";case qu:return"Suspense";case Ju:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hg:return(e.displayName||"Context")+".Consumer";case mg:return(e._context.displayName||"Context")+".Provider";case Ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _f:return t=e.displayName||null,t!==null?t:Zu(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Zu(e(t))}catch{}}return null}function lw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(t);case 8:return t===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sw(e){var t=vg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=sw(e))}function yg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ec(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wg(e,t){t=t.checked,t!=null&&Rf(e,"checked",t,!1)}function tc(e,t){wg(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nc(e,t.type,n):t.hasOwnProperty("defaultValue")&&nc(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nc(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bi=Array.isArray;function Kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Bi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function bg(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Sg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uw=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(e){uw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qi[t]=Qi[e]})});function Eg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qi.hasOwnProperty(e)&&Qi[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Eg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cw=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(e,t){if(t){if(cw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lc=null;function $f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sc=null,Qr=null,Xr=null;function yp(e){if(e=Va(e)){if(typeof sc!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Zl(t),sc(e.stateNode,e.type,t))}}function kg(e){Qr?Xr?Xr.push(e):Xr=[e]:Qr=e}function Pg(){if(Qr){var e=Qr,t=Xr;if(Xr=Qr=null,yp(e),t)for(e=0;e<t.length;e++)yp(t[e])}}function Og(e,t){return e(t)}function Ag(){}var Js=!1;function Ng(e,t,n){if(Js)return e(t,n);Js=!0;try{return Og(e,t,n)}finally{Js=!1,(Qr!==null||Xr!==null)&&(Ag(),Pg())}}function da(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var uc=!1;if(mn)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{uc=!1}function fw(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Xi=!1,al=null,ol=!1,cc=null,dw={onError:function(e){Xi=!0,al=e}};function pw(e,t,n,r,i,a,o,l,s){Xi=!1,al=null,fw.apply(dw,arguments)}function mw(e,t,n,r,i,a,o,l,s){if(pw.apply(this,arguments),Xi){if(Xi){var u=al;Xi=!1,al=null}else throw Error(R(198));ol||(ol=!0,cc=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wp(e){if(Pr(e)!==e)throw Error(R(188))}function hw(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return wp(i),e;if(a===r)return wp(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Ig(e){return e=hw(e),e!==null?Fg(e):null}function Fg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fg(e);if(t!==null)return t;e=e.sibling}return null}var _g=xt.unstable_scheduleCallback,bp=xt.unstable_cancelCallback,gw=xt.unstable_shouldYield,vw=xt.unstable_requestPaint,Ie=xt.unstable_now,yw=xt.unstable_getCurrentPriorityLevel,Tf=xt.unstable_ImmediatePriority,$g=xt.unstable_UserBlockingPriority,ll=xt.unstable_NormalPriority,ww=xt.unstable_LowPriority,Tg=xt.unstable_IdlePriority,Ql=null,en=null;function bw(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ql,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Ew,xw=Math.log,Sw=Math.LN2;function Ew(e){return e>>>=0,e===0?32:31-(xw(e)/Sw|0)|0}var to=64,no=4194304;function Hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(a&=o,a!==0&&(r=Hi(a)))}else o=n&~i,o!==0?r=Hi(o):a!==0&&(r=Hi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),i=1<<n,r|=e[n],t&=~i;return r}function Cw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Vt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Cw(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function fc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lg(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function za(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function Pw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Dg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mg,Df,zg,jg,Vg,dc=!1,ro=[],Mn=null,zn=null,jn=null,pa=new Map,ma=new Map,Fn=[],Ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(t.pointerId)}}function Ni(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Df(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Aw(e,t,n,r,i){switch(t){case"focusin":return Mn=Ni(Mn,e,t,n,r,i),!0;case"dragenter":return zn=Ni(zn,e,t,n,r,i),!0;case"mouseover":return jn=Ni(jn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return pa.set(a,Ni(pa.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ma.set(a,Ni(ma.get(a)||null,e,t,n,r,i)),!0}return!1}function Ug(e){var t=sr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rg(n),t!==null){e.blockedOn=t,Vg(e.priority,function(){zg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lc=r,n.target.dispatchEvent(r),lc=null}else return t=Va(n),t!==null&&Df(t),e.blockedOn=n,!1;t.shift()}return!0}function Sp(e,t,n){Lo(e)&&n.delete(t)}function Nw(){dc=!1,Mn!==null&&Lo(Mn)&&(Mn=null),zn!==null&&Lo(zn)&&(zn=null),jn!==null&&Lo(jn)&&(jn=null),pa.forEach(Sp),ma.forEach(Sp)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Nw)))}function ha(e){function t(i){return Ri(i,e)}if(0<ro.length){Ri(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&Ri(Mn,e),zn!==null&&Ri(zn,e),jn!==null&&Ri(jn,e),pa.forEach(t),ma.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&Fn.shift()}var qr=Sn.ReactCurrentBatchConfig,ul=!0;function Rw(e,t,n,r){var i=de,a=qr.transition;qr.transition=null;try{de=1,Mf(e,t,n,r)}finally{de=i,qr.transition=a}}function Iw(e,t,n,r){var i=de,a=qr.transition;qr.transition=null;try{de=4,Mf(e,t,n,r)}finally{de=i,qr.transition=a}}function Mf(e,t,n,r){if(ul){var i=pc(e,t,n,r);if(i===null)uu(e,t,r,cl,n),xp(e,r);else if(Aw(i,e,t,n,r))r.stopPropagation();else if(xp(e,r),t&4&&-1<Ow.indexOf(e)){for(;i!==null;){var a=Va(i);if(a!==null&&Mg(a),a=pc(e,t,n,r),a===null&&uu(e,t,r,cl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else uu(e,t,r,null,n)}}var cl=null;function pc(e,t,n,r){if(cl=null,e=$f(r),e=sr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function Bg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yw()){case Tf:return 1;case $g:return 4;case ll:case ww:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var $n=null,zf=null,Do=null;function Hg(){if(Do)return Do;var e,t=zf,n=t.length,r,i="value"in $n?$n.value:$n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Ep(){return!1}function Et(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?io:Ep,this.isPropagationStopped=Ep,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=Et(mi),ja=Pe({},mi,{view:0,detail:0}),Fw=Et(ja),eu,tu,Ii,Xl=Pe({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(eu=e.screenX-Ii.screenX,tu=e.screenY-Ii.screenY):tu=eu=0,Ii=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Cp=Et(Xl),_w=Pe({},Xl,{dataTransfer:0}),$w=Et(_w),Tw=Pe({},ja,{relatedTarget:0}),nu=Et(Tw),Lw=Pe({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Dw=Et(Lw),Mw=Pe({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zw=Et(Mw),jw=Pe({},mi,{data:0}),kp=Et(jw),Vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bw[e])?!!t[e]:!1}function Vf(){return Hw}var Ww=Pe({},ja,{key:function(e){if(e.key){var t=Vw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yw=Et(Ww),Gw=Pe({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Et(Gw),Kw=Pe({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),Qw=Et(Kw),Xw=Pe({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=Et(Xw),Jw=Pe({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zw=Et(Jw),e2=[9,13,27,32],Uf=mn&&"CompositionEvent"in window,qi=null;mn&&"documentMode"in document&&(qi=document.documentMode);var t2=mn&&"TextEvent"in window&&!qi,Wg=mn&&(!Uf||qi&&8<qi&&11>=qi),Op=String.fromCharCode(32),Ap=!1;function Yg(e,t){switch(e){case"keyup":return e2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function n2(e,t){switch(e){case"compositionend":return Gg(t);case"keypress":return t.which!==32?null:(Ap=!0,Op);case"textInput":return e=t.data,e===Op&&Ap?null:e;default:return null}}function r2(e,t){if($r)return e==="compositionend"||!Uf&&Yg(e,t)?(e=Hg(),Do=zf=$n=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wg&&t.locale!=="ko"?null:t.data;default:return null}}var i2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i2[e.type]:t==="textarea"}function Kg(e,t,n,r){kg(r),t=fl(t,"onChange"),0<t.length&&(n=new jf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ji=null,ga=null;function a2(e){av(e,0)}function ql(e){var t=Dr(e);if(yg(t))return e}function o2(e,t){if(e==="change")return t}var Qg=!1;if(mn){var ru;if(mn){var iu="oninput"in document;if(!iu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),iu=typeof Rp.oninput=="function"}ru=iu}else ru=!1;Qg=ru&&(!document.documentMode||9<document.documentMode)}function Ip(){Ji&&(Ji.detachEvent("onpropertychange",Xg),ga=Ji=null)}function Xg(e){if(e.propertyName==="value"&&ql(ga)){var t=[];Kg(t,ga,e,$f(e)),Ng(a2,t)}}function l2(e,t,n){e==="focusin"?(Ip(),Ji=t,ga=n,Ji.attachEvent("onpropertychange",Xg)):e==="focusout"&&Ip()}function s2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(ga)}function u2(e,t){if(e==="click")return ql(t)}function c2(e,t){if(e==="input"||e==="change")return ql(t)}function f2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:f2;function va(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qu.call(t,i)||!Bt(e[i],t[i]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,t){var n=Fp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function qg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jg(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d2(e){var t=Jg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qg(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=_p(n,a);var o=_p(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p2=mn&&"documentMode"in document&&11>=document.documentMode,Tr=null,mc=null,Zi=null,hc=!1;function $p(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||Tr==null||Tr!==il(r)||(r=Tr,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&va(Zi,r)||(Zi=r,r=fl(mc,"onSelect"),0<r.length&&(t=new jf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},au={},Zg={};mn&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Jl(e){if(au[e])return au[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zg)return au[e]=t[n];return e}var ev=Jl("animationend"),tv=Jl("animationiteration"),nv=Jl("animationstart"),rv=Jl("transitionend"),iv=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){iv.set(e,t),kr(t,[e])}for(var ou=0;ou<Tp.length;ou++){var lu=Tp[ou],m2=lu.toLowerCase(),h2=lu[0].toUpperCase()+lu.slice(1);er(m2,"on"+h2)}er(ev,"onAnimationEnd");er(tv,"onAnimationIteration");er(nv,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(rv,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Lp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mw(r,t,void 0,e),e.currentTarget=null}function av(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Lp(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Lp(i,l,u),a=s}}}if(ol)throw e=cc,ol=!1,cc=null,e}function ye(e,t){var n=t[bc];n===void 0&&(n=t[bc]=new Set);var r=e+"__bubble";n.has(r)||(ov(t,e,2,!1),n.add(r))}function su(e,t,n){var r=0;t&&(r|=4),ov(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function ya(e){if(!e[oo]){e[oo]=!0,pg.forEach(function(n){n!=="selectionchange"&&(g2.has(n)||su(n,!1,e),su(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,su("selectionchange",!1,t))}}function ov(e,t,n,r){switch(Bg(t)){case 1:var i=Rw;break;case 4:i=Iw;break;default:i=Mf}n=i.bind(null,t,n,e),i=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uu(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=sr(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Ng(function(){var u=a,c=$f(n),f=[];e:{var p=iv.get(e);if(p!==void 0){var y=jf,g=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":y=Yw;break;case"focusin":g="focus",y=nu;break;case"focusout":g="blur",y=nu;break;case"beforeblur":case"afterblur":y=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qw;break;case ev:case tv:case nv:y=Dw;break;case rv:y=qw;break;case"scroll":y=Fw;break;case"wheel":y=Zw;break;case"copy":case"cut":case"paste":y=zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pp}var v=(t&4)!==0,b=!v&&e==="scroll",d=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,w;m!==null;){w=m;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,d!==null&&(S=da(m,d),S!=null&&v.push(wa(m,S,w)))),b)break;m=m.return}0<v.length&&(p=new y(p,g,null,n,c),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==lc&&(g=n.relatedTarget||n.fromElement)&&(sr(g)||g[hn]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?sr(g):null,g!==null&&(b=Pr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=Cp,S="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Pp,S="onPointerLeave",d="onPointerEnter",m="pointer"),b=y==null?p:Dr(y),w=g==null?p:Dr(g),p=new v(S,m+"leave",y,n,c),p.target=b,p.relatedTarget=w,S=null,sr(c)===u&&(v=new v(d,m+"enter",g,n,c),v.target=w,v.relatedTarget=b,S=v),b=S,y&&g)t:{for(v=y,d=g,m=0,w=v;w;w=Ar(w))m++;for(w=0,S=d;S;S=Ar(S))w++;for(;0<m-w;)v=Ar(v),m--;for(;0<w-m;)d=Ar(d),w--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break t;v=Ar(v),d=Ar(d)}v=null}else v=null;y!==null&&Dp(f,p,y,v,!1),g!==null&&b!==null&&Dp(f,b,g,v,!0)}}e:{if(p=u?Dr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var k=o2;else if(Np(p))if(Qg)k=c2;else{k=s2;var P=l2}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=u2);if(k&&(k=k(e,u))){Kg(f,k,n,c);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&nc(p,"number",p.value)}switch(P=u?Dr(u):window,e){case"focusin":(Np(P)||P.contentEditable==="true")&&(Tr=P,mc=u,Zi=null);break;case"focusout":Zi=mc=Tr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,$p(f,n,c);break;case"selectionchange":if(p2)break;case"keydown":case"keyup":$p(f,n,c)}var E;if(Uf)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else $r?Yg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Wg&&n.locale!=="ko"&&($r||O!=="onCompositionStart"?O==="onCompositionEnd"&&$r&&(E=Hg()):($n=c,zf="value"in $n?$n.value:$n.textContent,$r=!0)),P=fl(u,O),0<P.length&&(O=new kp(O,e,null,n,c),f.push({event:O,listeners:P}),E?O.data=E:(E=Gg(n),E!==null&&(O.data=E)))),(E=t2?n2(e,n):r2(e,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(c=new kp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}av(f,t)})}function wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=da(e,n),a!=null&&r.unshift(wa(e,a,i)),a=da(e,t),a!=null&&r.push(wa(e,a,i))),e=e.return}return r}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dp(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=da(n,a),s!=null&&o.unshift(wa(n,s,l))):i||(s=da(n,a),s!=null&&o.push(wa(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var v2=/\r\n?/g,y2=/\u0000|\uFFFD/g;function Mp(e){return(typeof e=="string"?e:""+e).replace(v2,`
`).replace(y2,"")}function lo(e,t,n){if(t=Mp(t),Mp(e)!==t&&n)throw Error(R(425))}function dl(){}var gc=null,vc=null;function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,w2=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,b2=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(e){return zp.resolve(null).then(e).catch(x2)}:wc;function x2(e){setTimeout(function(){throw e})}function cu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ha(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ha(t)}function Vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Xt="__reactFiber$"+hi,ba="__reactProps$"+hi,hn="__reactContainer$"+hi,bc="__reactEvents$"+hi,S2="__reactListeners$"+hi,E2="__reactHandles$"+hi;function sr(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jp(e);e!==null;){if(n=e[Xt])return n;e=jp(e)}return t}e=n,n=e.parentNode}return null}function Va(e){return e=e[Xt]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Zl(e){return e[ba]||null}var xc=[],Mr=-1;function tr(e){return{current:e}}function be(e){0>Mr||(e.current=xc[Mr],xc[Mr]=null,Mr--)}function ve(e,t){Mr++,xc[Mr]=e.current,e.current=t}var Qn={},at=tr(Qn),pt=tr(!1),gr=Qn;function ri(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function pl(){be(pt),be(at)}function Vp(e,t,n){if(at.current!==Qn)throw Error(R(168));ve(at,t),ve(pt,n)}function lv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,lw(e)||"Unknown",i));return Pe({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,gr=at.current,ve(at,e),ve(pt,pt.current),!0}function Up(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=lv(e,t,gr),r.__reactInternalMemoizedMergedChildContext=e,be(pt),be(at),ve(at,e)):be(pt),ve(pt,n)}var ln=null,es=!1,fu=!1;function sv(e){ln===null?ln=[e]:ln.push(e)}function C2(e){es=!0,sv(e)}function nr(){if(!fu&&ln!==null){fu=!0;var e=0,t=de;try{var n=ln;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,es=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),_g(Tf,nr),i}finally{de=t,fu=!1}}return null}var zr=[],jr=0,hl=null,gl=0,Pt=[],Ot=0,vr=null,sn=1,un="";function or(e,t){zr[jr++]=gl,zr[jr++]=hl,hl=e,gl=t}function uv(e,t,n){Pt[Ot++]=sn,Pt[Ot++]=un,Pt[Ot++]=vr,vr=e;var r=sn;e=un;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var a=32-Vt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Vt(t)+i|n<<i|r,un=a+e}else sn=1<<a|n<<i|r,un=e}function Hf(e){e.return!==null&&(or(e,1),uv(e,1,0))}function Wf(e){for(;e===hl;)hl=zr[--jr],zr[jr]=null,gl=zr[--jr],zr[jr]=null;for(;e===vr;)vr=Pt[--Ot],Pt[Ot]=null,un=Pt[--Ot],Pt[Ot]=null,sn=Pt[--Ot],Pt[Ot]=null}var wt=null,yt=null,Se=!1,zt=null;function cv(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,yt=Vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vr!==null?{id:sn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,yt=null,!0):!1;default:return!1}}function Sc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ec(e){if(Se){var t=yt;if(t){var n=t;if(!Bp(e,t)){if(Sc(e))throw Error(R(418));t=Vn(n.nextSibling);var r=wt;t&&Bp(e,t)?cv(r,n):(e.flags=e.flags&-4097|2,Se=!1,wt=e)}}else{if(Sc(e))throw Error(R(418));e.flags=e.flags&-4097|2,Se=!1,wt=e}}}function Hp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function so(e){if(e!==wt)return!1;if(!Se)return Hp(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yc(e.type,e.memoizedProps)),t&&(t=yt)){if(Sc(e))throw fv(),Error(R(418));for(;t;)cv(e,t),t=Vn(t.nextSibling)}if(Hp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=wt?Vn(e.stateNode.nextSibling):null;return!0}function fv(){for(var e=yt;e;)e=Vn(e.nextSibling)}function ii(){yt=wt=null,Se=!1}function Yf(e){zt===null?zt=[e]:zt.push(e)}var k2=Sn.ReactCurrentBatchConfig;function Dt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vl=tr(null),yl=null,Vr=null,Gf=null;function Kf(){Gf=Vr=yl=null}function Qf(e){var t=vl.current;be(vl),e._currentValue=t}function Cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jr(e,t){yl=e,Gf=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Gf!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(yl===null)throw Error(R(308));Vr=e,yl.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var ur=null;function Xf(e){ur===null?ur=[e]:ur.push(e)}function dv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xf(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var In=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Xf(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lf(e,n)}}function Wp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var i=e.updateQueue;In=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var f=i.baseState;o=0,c=u=s=null,l=a;do{var p=l.lane,y=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(p=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(y,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(y,f,p):g,p==null)break e;f=Pe({},f,p);break e;case 2:In=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,s=f):c=c.next=y,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);wr|=o,e.lanes=o,e.memoizedState=f}}function Yp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var mv=new dg.Component().refs;function kc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),a=cn(r,i);a.payload=t,n!=null&&(a.callback=n),t=Un(e,a,i),t!==null&&(Ut(t,e,i,r),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=Hn(e),a=cn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Un(e,a,i),t!==null&&(Ut(t,e,i,r),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=Hn(e),i=cn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Ut(t,e,r,n),zo(t,e,r))}};function Gp(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!va(n,r)||!va(i,a):!0}function hv(e,t,n){var r=!1,i=Qn,a=t.contextType;return typeof a=="object"&&a!==null?a=It(a):(i=mt(t)?gr:at.current,r=t.contextTypes,a=(r=r!=null)?ri(e,i):Qn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Kp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function Pc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=mv,qf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=It(a):(a=mt(t)?gr:at.current,i.context=ri(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(kc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ts.enqueueReplaceState(i,i.state,null),wl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===mv&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qp(e){var t=e._init;return t(e._payload)}function gv(e){function t(d,m){if(e){var w=d.deletions;w===null?(d.deletions=[m],d.flags|=16):w.push(m)}}function n(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function i(d,m){return d=Wn(d,m),d.index=0,d.sibling=null,d}function a(d,m,w){return d.index=w,e?(w=d.alternate,w!==null?(w=w.index,w<m?(d.flags|=2,m):w):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,m,w,S){return m===null||m.tag!==6?(m=yu(w,d.mode,S),m.return=d,m):(m=i(m,w),m.return=d,m)}function s(d,m,w,S){var k=w.type;return k===_r?c(d,m,w.props.children,S,w.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Qp(k)===m.type)?(S=i(m,w.props),S.ref=Fi(d,m,w),S.return=d,S):(S=Wo(w.type,w.key,w.props,null,d.mode,S),S.ref=Fi(d,m,w),S.return=d,S)}function u(d,m,w,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=wu(w,d.mode,S),m.return=d,m):(m=i(m,w.children||[]),m.return=d,m)}function c(d,m,w,S,k){return m===null||m.tag!==7?(m=hr(w,d.mode,S,k),m.return=d,m):(m=i(m,w),m.return=d,m)}function f(d,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=yu(""+m,d.mode,w),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return w=Wo(m.type,m.key,m.props,null,d.mode,w),w.ref=Fi(d,null,m),w.return=d,w;case Fr:return m=wu(m,d.mode,w),m.return=d,m;case Rn:var S=m._init;return f(d,S(m._payload),w)}if(Bi(m)||Oi(m))return m=hr(m,d.mode,w,null),m.return=d,m;uo(d,m)}return null}function p(d,m,w,S){var k=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:l(d,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ja:return w.key===k?s(d,m,w,S):null;case Fr:return w.key===k?u(d,m,w,S):null;case Rn:return k=w._init,p(d,m,k(w._payload),S)}if(Bi(w)||Oi(w))return k!==null?null:c(d,m,w,S,null);uo(d,w)}return null}function y(d,m,w,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(w)||null,l(m,d,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ja:return d=d.get(S.key===null?w:S.key)||null,s(m,d,S,k);case Fr:return d=d.get(S.key===null?w:S.key)||null,u(m,d,S,k);case Rn:var P=S._init;return y(d,m,w,P(S._payload),k)}if(Bi(S)||Oi(S))return d=d.get(w)||null,c(m,d,S,k,null);uo(m,S)}return null}function g(d,m,w,S){for(var k=null,P=null,E=m,O=m=0,L=null;E!==null&&O<w.length;O++){E.index>O?(L=E,E=null):L=E.sibling;var z=p(d,E,w[O],S);if(z===null){E===null&&(E=L);break}e&&E&&z.alternate===null&&t(d,E),m=a(z,m,O),P===null?k=z:P.sibling=z,P=z,E=L}if(O===w.length)return n(d,E),Se&&or(d,O),k;if(E===null){for(;O<w.length;O++)E=f(d,w[O],S),E!==null&&(m=a(E,m,O),P===null?k=E:P.sibling=E,P=E);return Se&&or(d,O),k}for(E=r(d,E);O<w.length;O++)L=y(E,d,O,w[O],S),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?O:L.key),m=a(L,m,O),P===null?k=L:P.sibling=L,P=L);return e&&E.forEach(function(se){return t(d,se)}),Se&&or(d,O),k}function v(d,m,w,S){var k=Oi(w);if(typeof k!="function")throw Error(R(150));if(w=k.call(w),w==null)throw Error(R(151));for(var P=k=null,E=m,O=m=0,L=null,z=w.next();E!==null&&!z.done;O++,z=w.next()){E.index>O?(L=E,E=null):L=E.sibling;var se=p(d,E,z.value,S);if(se===null){E===null&&(E=L);break}e&&E&&se.alternate===null&&t(d,E),m=a(se,m,O),P===null?k=se:P.sibling=se,P=se,E=L}if(z.done)return n(d,E),Se&&or(d,O),k;if(E===null){for(;!z.done;O++,z=w.next())z=f(d,z.value,S),z!==null&&(m=a(z,m,O),P===null?k=z:P.sibling=z,P=z);return Se&&or(d,O),k}for(E=r(d,E);!z.done;O++,z=w.next())z=y(E,d,O,z.value,S),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?O:z.key),m=a(z,m,O),P===null?k=z:P.sibling=z,P=z);return e&&E.forEach(function(X){return t(d,X)}),Se&&or(d,O),k}function b(d,m,w,S){if(typeof w=="object"&&w!==null&&w.type===_r&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ja:e:{for(var k=w.key,P=m;P!==null;){if(P.key===k){if(k=w.type,k===_r){if(P.tag===7){n(d,P.sibling),m=i(P,w.props.children),m.return=d,d=m;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&Qp(k)===P.type){n(d,P.sibling),m=i(P,w.props),m.ref=Fi(d,P,w),m.return=d,d=m;break e}n(d,P);break}else t(d,P);P=P.sibling}w.type===_r?(m=hr(w.props.children,d.mode,S,w.key),m.return=d,d=m):(S=Wo(w.type,w.key,w.props,null,d.mode,S),S.ref=Fi(d,m,w),S.return=d,d=S)}return o(d);case Fr:e:{for(P=w.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(d,m.sibling),m=i(m,w.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else t(d,m);m=m.sibling}m=wu(w,d.mode,S),m.return=d,d=m}return o(d);case Rn:return P=w._init,b(d,m,P(w._payload),S)}if(Bi(w))return g(d,m,w,S);if(Oi(w))return v(d,m,w,S);uo(d,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(d,m.sibling),m=i(m,w),m.return=d,d=m):(n(d,m),m=yu(w,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return b}var ai=gv(!0),vv=gv(!1),Ua={},tn=tr(Ua),xa=tr(Ua),Sa=tr(Ua);function cr(e){if(e===Ua)throw Error(R(174));return e}function Jf(e,t){switch(ve(Sa,t),ve(xa,e),ve(tn,Ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ic(t,e)}be(tn),ve(tn,t)}function oi(){be(tn),be(xa),be(Sa)}function yv(e){cr(Sa.current);var t=cr(tn.current),n=ic(t,e.type);t!==n&&(ve(xa,e),ve(tn,n))}function Zf(e){xa.current===e&&(be(tn),be(xa))}var Ce=tr(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var du=[];function ed(){for(var e=0;e<du.length;e++)du[e]._workInProgressVersionPrimary=null;du.length=0}var jo=Sn.ReactCurrentDispatcher,pu=Sn.ReactCurrentBatchConfig,yr=0,ke=null,Le=null,Ve=null,xl=!1,ea=!1,Ea=0,P2=0;function et(){throw Error(R(321))}function td(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function nd(e,t,n,r,i,a){if(yr=a,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?R2:I2,e=n(r,i),ea){a=0;do{if(ea=!1,Ea=0,25<=a)throw Error(R(301));a+=1,Ve=Le=null,t.updateQueue=null,jo.current=F2,e=n(r,i)}while(ea)}if(jo.current=Sl,t=Le!==null&&Le.next!==null,yr=0,Ve=Le=ke=null,xl=!1,t)throw Error(R(300));return e}function rd(){var e=Ea!==0;return Ea=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ke.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ft(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?ke.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(R(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?ke.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Ca(e,t){return typeof t=="function"?t(e):t}function mu(e){var t=Ft(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((yr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,o=r):s=s.next=f,ke.lanes|=c,wr|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,Bt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ke.lanes|=a,wr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hu(e){var t=Ft(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Bt(a,t.memoizedState)||(dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function wv(){}function bv(e,t){var n=ke,r=Ft(),i=t(),a=!Bt(r.memoizedState,i);if(a&&(r.memoizedState=i,dt=!0),r=r.queue,id(Ev.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ka(9,Sv.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(R(349));yr&30||xv(n,t,i)}return i}function xv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sv(e,t,n,r){t.value=n,t.getSnapshot=r,Cv(t)&&kv(e)}function Ev(e,t,n){return n(function(){Cv(t)&&kv(e)})}function Cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function kv(e){var t=gn(e,1);t!==null&&Ut(t,e,1,-1)}function Xp(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},t.queue=e,e=e.dispatch=N2.bind(null,ke,e),[t.memoizedState,e]}function ka(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pv(){return Ft().memoizedState}function Vo(e,t,n,r){var i=Gt();ke.flags|=e,i.memoizedState=ka(1|t,n,void 0,r===void 0?null:r)}function ns(e,t,n,r){var i=Ft();r=r===void 0?null:r;var a=void 0;if(Le!==null){var o=Le.memoizedState;if(a=o.destroy,r!==null&&td(r,o.deps)){i.memoizedState=ka(t,n,a,r);return}}ke.flags|=e,i.memoizedState=ka(1|t,n,a,r)}function qp(e,t){return Vo(8390656,8,e,t)}function id(e,t){return ns(2048,8,e,t)}function Ov(e,t){return ns(4,2,e,t)}function Av(e,t){return ns(4,4,e,t)}function Nv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rv(e,t,n){return n=n!=null?n.concat([e]):null,ns(4,4,Nv.bind(null,t,e),n)}function ad(){}function Iv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fv(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _v(e,t,n){return yr&21?(Bt(n,t)||(n=Lg(),ke.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function O2(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=pu.transition;pu.transition={};try{e(!1),t()}finally{de=n,pu.transition=r}}function $v(){return Ft().memoizedState}function A2(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(e))Lv(t,n);else if(n=dv(e,t,n,r),n!==null){var i=st();Ut(n,e,r,i),Dv(n,t,r)}}function N2(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(e))Lv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var s=t.interleaved;s===null?(i.next=i,Xf(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=dv(e,t,i,r),n!==null&&(i=st(),Ut(n,e,r,i),Dv(n,t,r))}}function Tv(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Lv(e,t){ea=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lf(e,n)}}var Sl={readContext:It,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},R2={readContext:It,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:qp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,Nv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=A2.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:Xp,useDebugValue:ad,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Xp(!1),t=e[0];return e=O2.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Gt();if(Se){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ue===null)throw Error(R(349));yr&30||xv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,qp(Ev.bind(null,r,a,e),[e]),r.flags|=2048,ka(9,Sv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Ue.identifierPrefix;if(Se){var n=un,r=sn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},I2={readContext:It,useCallback:Iv,useContext:It,useEffect:id,useImperativeHandle:Rv,useInsertionEffect:Ov,useLayoutEffect:Av,useMemo:Fv,useReducer:mu,useRef:Pv,useState:function(){return mu(Ca)},useDebugValue:ad,useDeferredValue:function(e){var t=Ft();return _v(t,Le.memoizedState,e)},useTransition:function(){var e=mu(Ca)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:wv,useSyncExternalStore:bv,useId:$v,unstable_isNewReconciler:!1},F2={readContext:It,useCallback:Iv,useContext:It,useEffect:id,useImperativeHandle:Rv,useInsertionEffect:Ov,useLayoutEffect:Av,useMemo:Fv,useReducer:hu,useRef:Pv,useState:function(){return hu(Ca)},useDebugValue:ad,useDeferredValue:function(e){var t=Ft();return Le===null?t.memoizedState=e:_v(t,Le.memoizedState,e)},useTransition:function(){var e=hu(Ca)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:wv,useSyncExternalStore:bv,useId:$v,unstable_isNewReconciler:!1};function li(e,t){try{var n="",r=t;do n+=ow(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function gu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _2=typeof WeakMap=="function"?WeakMap:Map;function Mv(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,Dc=r),Oc(e,t)},n}function zv(e,t,n){n=cn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Oc(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=G2.bind(null,e,t,n),t.then(e,e))}function Zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var $2=Sn.ReactCurrentOwner,dt=!1;function lt(e,t,n,r){t.child=e===null?vv(t,null,n,r):ai(t,e.child,n,r)}function tm(e,t,n,r,i){n=n.render;var a=t.ref;return Jr(t,i),r=nd(e,t,n,r,a,i),n=rd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Se&&n&&Hf(t),t.flags|=1,lt(e,t,r,i),t.child)}function nm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!pd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,jv(e,t,a,r,i)):(e=Wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Wn(a,r),e.ref=t.ref,e.return=t,t.child=e}function jv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(va(a,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,vn(e,t,i)}return Ac(e,t,n,r,i)}function Vv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Br,vt),vt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Br,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ve(Br,vt),vt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ve(Br,vt),vt|=r;return lt(e,t,i,n),t.child}function Uv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ac(e,t,n,r,i){var a=mt(n)?gr:at.current;return a=ri(t,a),Jr(t,i),n=nd(e,t,n,r,a,i),r=rd(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Se&&r&&Hf(t),t.flags|=1,lt(e,t,n,i),t.child)}function rm(e,t,n,r,i){if(mt(n)){var a=!0;ml(t)}else a=!1;if(Jr(t,i),t.stateNode===null)Uo(e,t),hv(t,n,r),Pc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=mt(n)?gr:at.current,u=ri(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Kp(t,o,r,u),In=!1;var p=t.memoizedState;o.state=p,wl(t,r,o,i),s=t.memoizedState,l!==r||p!==s||pt.current||In?(typeof c=="function"&&(kc(t,n,c,r),s=t.memoizedState),(l=In||Gp(t,n,l,r,p,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pv(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Dt(t.type,l),o.props=u,f=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=It(s):(s=mt(n)?gr:at.current,s=ri(t,s));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||p!==s)&&Kp(t,o,r,s),In=!1,p=t.memoizedState,o.state=p,wl(t,r,o,i);var g=t.memoizedState;l!==f||p!==g||pt.current||In?(typeof y=="function"&&(kc(t,n,y,r),g=t.memoizedState),(u=In||Gp(t,n,u,r,p,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Nc(e,t,n,r,a,i)}function Nc(e,t,n,r,i,a){Uv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Up(t,n,!1),vn(e,t,a);r=t.stateNode,$2.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ai(t,e.child,null,a),t.child=ai(t,null,l,a)):lt(e,t,l,a),t.memoizedState=r.state,i&&Up(t,n,!0),t.child}function Bv(e){var t=e.stateNode;t.pendingContext?Vp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vp(e,t.context,!1),Jf(e,t.containerInfo)}function im(e,t,n,r,i){return ii(),Yf(i),t.flags|=256,lt(e,t,n,r),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function Ic(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hv(e,t,n){var r=t.pendingProps,i=Ce.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return Ec(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=as(o,r,0,null),e=hr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ic(n),t.memoizedState=Rc,e):od(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return T2(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Wn(l,a):(a=hr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ic(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Rc,r}return a=e.child,e=a.sibling,r=Wn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function od(e,t){return t=as({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Yf(r),ai(t,e.child,null,n),e=od(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T2(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=gu(Error(R(422))),co(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=as({mode:"visible",children:r.children},i,0,null),a=hr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ai(t,e.child,null,o),t.child.memoizedState=Ic(o),t.memoizedState=Rc,a);if(!(t.mode&1))return co(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(R(419)),r=gu(a,r,void 0),co(e,t,o,r)}if(l=(o&e.childLanes)!==0,dt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,gn(e,i),Ut(r,e,i,-1))}return dd(),r=gu(Error(R(421))),co(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=K2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,yt=Vn(i.nextSibling),wt=t,Se=!0,zt=null,e!==null&&(Pt[Ot++]=sn,Pt[Ot++]=un,Pt[Ot++]=vr,sn=e.id,un=e.overflow,vr=t),t=od(t,r.children),t.flags|=4096,t)}function am(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cc(e.return,t,n)}function vu(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Wv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(lt(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,n,t);else if(e.tag===19)am(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vu(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vu(t,!0,n,null,a);break;case"together":vu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function L2(e,t,n){switch(t.tag){case 3:Bv(t),ii();break;case 5:yv(t);break;case 1:mt(t.type)&&ml(t);break;case 4:Jf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Hv(e,t,n):(ve(Ce,Ce.current&1),e=vn(e,t,n),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Vv(e,t,n)}return vn(e,t,n)}var Yv,Fc,Gv,Kv;Yv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};Gv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(tn.current);var a=null;switch(n){case"input":i=ec(e,i),r=ec(e,r),a=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),a=[];break;case"textarea":i=rc(e,i),r=rc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ye("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function _i(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function D2(e,t,n){var r=t.pendingProps;switch(Wf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return mt(t.type)&&pl(),tt(t),null;case 3:return r=t.stateNode,oi(),be(pt),be(at),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zt!==null&&(jc(zt),zt=null))),Fc(e,t),tt(t),null;case 5:Zf(t);var i=cr(Sa.current);if(n=t.type,e!==null&&t.stateNode!=null)Gv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return tt(t),null}if(e=cr(tn.current),so(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Xt]=t,r[ba]=a,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)ye(Wi[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":mp(r,a),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ye("invalid",r);break;case"textarea":gp(r,a),ye("invalid",r)}ac(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",""+l]):ca.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Za(r),hp(r,a,!0);break;case"textarea":Za(r),vp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=dl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Xt]=t,e[ba]=r,Yv(e,t,!1,!1),t.stateNode=e;e:{switch(o=oc(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)ye(Wi[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":mp(e,r),i=ec(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":gp(e,r),i=rc(e,r),ye("invalid",e);break;default:i=r}ac(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Cg(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sg(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&fa(e,s):typeof s=="number"&&fa(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ca.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ye("scroll",e):s!=null&&Rf(e,a,s,o))}switch(n){case"input":Za(e),hp(e,r,!1);break;case"textarea":Za(e),vp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=cr(Sa.current),cr(tn.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(a=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return tt(t),null;case 13:if(be(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&yt!==null&&t.mode&1&&!(t.flags&128))fv(),ii(),t.flags|=98560,a=!1;else if(a=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[Xt]=t}else ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),a=!1}else zt!==null&&(jc(zt),zt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Me===0&&(Me=3):dd())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return oi(),Fc(e,t),e===null&&ya(t.stateNode.containerInfo),tt(t),null;case 10:return Qf(t.type._context),tt(t),null;case 17:return mt(t.type)&&pl(),tt(t),null;case 19:if(be(Ce),a=t.memoizedState,a===null)return tt(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)_i(a,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bl(e),o!==null){for(t.flags|=128,_i(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>si&&(t.flags|=128,r=!0,_i(a,!1),t.lanes=4194304)}else{if(!r)if(e=bl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Se)return tt(t),null}else 2*Ie()-a.renderingStartTime>si&&n!==1073741824&&(t.flags|=128,r=!0,_i(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return fd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?vt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function M2(e,t){switch(Wf(t),t.tag){case 1:return mt(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),be(pt),be(at),ed(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zf(t),null;case 13:if(be(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ce),null;case 4:return oi(),null;case 10:return Qf(t.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var fo=!1,it=!1,z2=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function _c(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var om=!1;function j2(e,t){if(gc=ul,e=Jg(),Bf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==a||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=o),p===a&&++c===r&&(s=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},ul=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,b=g.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Dt(t.type,v),b);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return g=om,om=!1,g}function ta(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_c(t,n,a)}i=i.next}while(i!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $c(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qv(e){var t=e.alternate;t!==null&&(e.alternate=null,Qv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[ba],delete t[bc],delete t[S2],delete t[E2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xv(e){return e.tag===5||e.tag===3||e.tag===4}function lm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}var Ke=null,Mt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)qv(e,t,n),n=n.sibling}function qv(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:it||Ur(n,t);case 6:var r=Ke,i=Mt;Ke=null,Pn(e,t,n),Ke=r,Mt=i,Ke!==null&&(Mt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Mt?(e=Ke,n=n.stateNode,e.nodeType===8?cu(e.parentNode,n):e.nodeType===1&&cu(e,n),ha(e)):cu(Ke,n.stateNode));break;case 4:r=Ke,i=Mt,Ke=n.stateNode.containerInfo,Mt=!0,Pn(e,t,n),Ke=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_c(n,t,o),i=i.next}while(i!==r)}Pn(e,t,n);break;case 1:if(!it&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Pn(e,t,n),it=r):Pn(e,t,n);break;default:Pn(e,t,n)}}function sm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new z2),t.forEach(function(r){var i=Q2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Mt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Mt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Ke===null)throw Error(R(160));qv(a,o,i),Ke=null,Mt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jv(t,e),t=t.sibling}function Jv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Ht(e),r&4){try{ta(3,e,e.return),rs(3,e)}catch(v){Oe(e,e.return,v)}try{ta(5,e,e.return)}catch(v){Oe(e,e.return,v)}}break;case 1:Tt(t,e),Ht(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(Tt(t,e),Ht(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var i=e.stateNode;try{fa(i,"")}catch(v){Oe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&wg(i,a),oc(l,o);var u=oc(l,a);for(o=0;o<s.length;o+=2){var c=s[o],f=s[o+1];c==="style"?Cg(i,f):c==="dangerouslySetInnerHTML"?Sg(i,f):c==="children"?fa(i,f):Rf(i,c,f,u)}switch(l){case"input":tc(i,a);break;case"textarea":bg(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Kr(i,!!a.multiple,y,!1):p!==!!a.multiple&&(a.defaultValue!=null?Kr(i,!!a.multiple,a.defaultValue,!0):Kr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ba]=a}catch(v){Oe(e,e.return,v)}}break;case 6:if(Tt(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){Oe(e,e.return,v)}}break;case 3:if(Tt(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(t.containerInfo)}catch(v){Oe(e,e.return,v)}break;case 4:Tt(t,e),Ht(e);break;case 13:Tt(t,e),Ht(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ud=Ie())),r&4&&sm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,Tt(t,e),it=u):Tt(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(p=M,y=p.child,p.tag){case 0:case 11:case 14:case 15:ta(4,p,p.return);break;case 1:Ur(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Oe(r,n,v)}}break;case 5:Ur(p,p.return);break;case 22:if(p.memoizedState!==null){cm(f);continue}}y!==null?(y.return=p,M=y):cm(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Eg("display",o))}catch(v){Oe(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Oe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),Ht(e),r&4&&sm(e);break;case 21:break;default:Tt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fa(i,""),r.flags&=-33);var a=lm(e);Lc(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lm(e);Tc(e,l,o);break;default:throw Error(R(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V2(e,t,n){M=e,Zv(e)}function Zv(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fo;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=fo;var u=it;if(fo=o,(it=s)&&!u)for(M=i;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?fm(i):s!==null?(s.return=o,M=s):fm(i);for(;a!==null;)M=a,Zv(a),a=a.sibling;M=i,fo=l,it=u}um(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):um(e)}}function um(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Yp(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yp(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}it||t.flags&512&&$c(t)}catch(p){Oe(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function cm(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function fm(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var a=t.return;try{$c(t)}catch(s){Oe(t,a,s)}break;case 5:var o=t.return;try{$c(t)}catch(s){Oe(t,o,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var U2=Math.ceil,El=Sn.ReactCurrentDispatcher,ld=Sn.ReactCurrentOwner,Rt=Sn.ReactCurrentBatchConfig,ie=0,Ue=null,_e=null,qe=0,vt=0,Br=tr(0),Me=0,Pa=null,wr=0,is=0,sd=0,na=null,ft=null,ud=0,si=1/0,on=null,Cl=!1,Dc=null,Bn=null,po=!1,Tn=null,kl=0,ra=0,Mc=null,Bo=-1,Ho=0;function st(){return ie&6?Ie():Bo!==-1?Bo:Bo=Ie()}function Hn(e){return e.mode&1?ie&2&&qe!==0?qe&-qe:k2.transition!==null?(Ho===0&&(Ho=Lg()),Ho):(e=de,e!==0||(e=window.event,e=e===void 0?16:Bg(e.type)),e):1}function Ut(e,t,n,r){if(50<ra)throw ra=0,Mc=null,Error(R(185));za(e,n,r),(!(ie&2)||e!==Ue)&&(e===Ue&&(!(ie&2)&&(is|=n),Me===4&&_n(e,qe)),ht(e,r),n===1&&ie===0&&!(t.mode&1)&&(si=Ie()+500,es&&nr()))}function ht(e,t){var n=e.callbackNode;kw(e,t);var r=sl(e,e===Ue?qe:0);if(r===0)n!==null&&bp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bp(n),t===1)e.tag===0?C2(dm.bind(null,e)):sv(dm.bind(null,e)),b2(function(){!(ie&6)&&nr()}),n=null;else{switch(Dg(r)){case 1:n=Tf;break;case 4:n=$g;break;case 16:n=ll;break;case 536870912:n=Tg;break;default:n=ll}n=l0(n,e0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function e0(e,t){if(Bo=-1,Ho=0,ie&6)throw Error(R(327));var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var r=sl(e,e===Ue?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pl(e,r);else{t=r;var i=ie;ie|=2;var a=n0();(Ue!==e||qe!==t)&&(on=null,si=Ie()+500,mr(e,t));do try{W2();break}catch(l){t0(e,l)}while(1);Kf(),El.current=a,ie=i,_e!==null?t=0:(Ue=null,qe=0,t=Me)}if(t!==0){if(t===2&&(i=fc(e),i!==0&&(r=i,t=zc(e,i))),t===1)throw n=Pa,mr(e,0),_n(e,r),ht(e,Ie()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!B2(i)&&(t=Pl(e,r),t===2&&(a=fc(e),a!==0&&(r=a,t=zc(e,a))),t===1))throw n=Pa,mr(e,0),_n(e,r),ht(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:lr(e,ft,on);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=ud+500-Ie(),10<t)){if(sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wc(lr.bind(null,e,ft,on),t);break}lr(e,ft,on);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Vt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U2(r/1960))-r,10<r){e.timeoutHandle=wc(lr.bind(null,e,ft,on),r);break}lr(e,ft,on);break;case 5:lr(e,ft,on);break;default:throw Error(R(329))}}}return ht(e,Ie()),e.callbackNode===n?e0.bind(null,e):null}function zc(e,t){var n=na;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=ft,ft=n,t!==null&&jc(t)),e}function jc(e){ft===null?ft=e:ft.push.apply(ft,e)}function B2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Bt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~sd,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function dm(e){if(ie&6)throw Error(R(327));Zr();var t=sl(e,0);if(!(t&1))return ht(e,Ie()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var r=fc(e);r!==0&&(t=r,n=zc(e,r))}if(n===1)throw n=Pa,mr(e,0),_n(e,t),ht(e,Ie()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,ft,on),ht(e,Ie()),null}function cd(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(si=Ie()+500,es&&nr())}}function br(e){Tn!==null&&Tn.tag===0&&!(ie&6)&&Zr();var t=ie;ie|=1;var n=Rt.transition,r=de;try{if(Rt.transition=null,de=1,e)return e()}finally{de=r,Rt.transition=n,ie=t,!(ie&6)&&nr()}}function fd(){vt=Br.current,be(Br)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w2(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:oi(),be(pt),be(at),ed();break;case 5:Zf(r);break;case 4:oi();break;case 13:be(Ce);break;case 19:be(Ce);break;case 10:Qf(r.type._context);break;case 22:case 23:fd()}n=n.return}if(Ue=e,_e=e=Wn(e.current,null),qe=vt=t,Me=0,Pa=null,sd=is=wr=0,ft=na=null,ur!==null){for(t=0;t<ur.length;t++)if(n=ur[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ur=null}return e}function t0(e,t){do{var n=_e;try{if(Kf(),jo.current=Sl,xl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(yr=0,Ve=Le=ke=null,ea=!1,Ea=0,ld.current=null,n===null||n.return===null){Me=1,Pa=t,_e=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Zp(o);if(y!==null){y.flags&=-257,em(y,o,l,a,t),y.mode&1&&Jp(a,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Jp(a,u,t),dd();break e}s=Error(R(426))}}else if(Se&&l.mode&1){var b=Zp(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),em(b,o,l,a,t),Yf(li(s,l));break e}}a=s=li(s,l),Me!==4&&(Me=2),na===null?na=[a]:na.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=Mv(a,s,t);Wp(a,d);break e;case 1:l=s;var m=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Bn===null||!Bn.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=zv(a,l,t);Wp(a,S);break e}}a=a.return}while(a!==null)}i0(n)}catch(k){t=k,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function n0(){var e=El.current;return El.current=Sl,e===null?Sl:e}function dd(){(Me===0||Me===3||Me===2)&&(Me=4),Ue===null||!(wr&268435455)&&!(is&268435455)||_n(Ue,qe)}function Pl(e,t){var n=ie;ie|=2;var r=n0();(Ue!==e||qe!==t)&&(on=null,mr(e,t));do try{H2();break}catch(i){t0(e,i)}while(1);if(Kf(),ie=n,El.current=r,_e!==null)throw Error(R(261));return Ue=null,qe=0,Me}function H2(){for(;_e!==null;)r0(_e)}function W2(){for(;_e!==null&&!gw();)r0(_e)}function r0(e){var t=o0(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?i0(e):_e=t,ld.current=null}function i0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=M2(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,_e=null;return}}else if(n=D2(n,t,vt),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Me===0&&(Me=5)}function lr(e,t,n){var r=de,i=Rt.transition;try{Rt.transition=null,de=1,Y2(e,t,n,r)}finally{Rt.transition=i,de=r}return null}function Y2(e,t,n,r){do Zr();while(Tn!==null);if(ie&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Pw(e,a),e===Ue&&(_e=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,l0(ll,function(){return Zr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Rt.transition,Rt.transition=null;var o=de;de=1;var l=ie;ie|=4,ld.current=null,j2(e,n),Jv(n,e),d2(vc),ul=!!gc,vc=gc=null,e.current=n,V2(n),vw(),ie=l,de=o,Rt.transition=a}else e.current=n;if(po&&(po=!1,Tn=e,kl=i),a=e.pendingLanes,a===0&&(Bn=null),bw(n.stateNode),ht(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=Dc,Dc=null,e;return kl&1&&e.tag!==0&&Zr(),a=e.pendingLanes,a&1?e===Mc?ra++:(ra=0,Mc=e):ra=0,nr(),null}function Zr(){if(Tn!==null){var e=Dg(kl),t=Rt.transition,n=de;try{if(Rt.transition=null,de=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,kl=0,ie&6)throw Error(R(331));var i=ie;for(ie|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:ta(8,c,a)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var p=c.sibling,y=c.return;if(Qv(c),c===u){M=null;break}if(p!==null){p.return=y,M=p;break}M=y}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ta(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,M=d;break e}M=a.return}}var m=e.current;for(M=m;M!==null;){o=M;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,M=w;else e:for(o=m;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rs(9,l)}}catch(k){Oe(l,l.return,k)}if(l===o){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if(ie=i,nr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ql,e)}catch{}r=!0}return r}finally{de=n,Rt.transition=t}}return!1}function pm(e,t,n){t=li(n,t),t=Mv(e,t,1),e=Un(e,t,1),t=st(),e!==null&&(za(e,1,t),ht(e,t))}function Oe(e,t,n){if(e.tag===3)pm(e,e,n);else for(;t!==null;){if(t.tag===3){pm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=li(n,e),e=zv(t,e,1),t=Un(t,e,1),e=st(),t!==null&&(za(t,1,e),ht(t,e));break}}t=t.return}}function G2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(qe&n)===n&&(Me===4||Me===3&&(qe&130023424)===qe&&500>Ie()-ud?mr(e,0):sd|=n),ht(e,t)}function a0(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=st();e=gn(e,t),e!==null&&(za(e,t,n),ht(e,n))}function K2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),a0(e,n)}function Q2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),a0(e,n)}var o0;o0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,L2(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Se&&t.flags&1048576&&uv(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var i=ri(t,at.current);Jr(t,n),i=nd(null,t,r,e,i,n);var a=rd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(a=!0,ml(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qf(t),i.updater=ts,t.stateNode=i,i._reactInternals=t,Pc(t,r,e,n),t=Nc(null,t,r,!0,a,n)):(t.tag=0,Se&&a&&Hf(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=q2(r),e=Dt(r,e),i){case 0:t=Ac(null,t,r,e,n);break e;case 1:t=rm(null,t,r,e,n);break e;case 11:t=tm(null,t,r,e,n);break e;case 14:t=nm(null,t,r,Dt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Ac(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),rm(e,t,r,i,n);case 3:e:{if(Bv(t),e===null)throw Error(R(387));r=t.pendingProps,a=t.memoizedState,i=a.element,pv(e,t),wl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=li(Error(R(423)),t),t=im(e,t,r,n,i);break e}else if(r!==i){i=li(Error(R(424)),t),t=im(e,t,r,n,i);break e}else for(yt=Vn(t.stateNode.containerInfo.firstChild),wt=t,Se=!0,zt=null,n=vv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){t=vn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return yv(t),e===null&&Ec(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,yc(r,i)?o=null:a!==null&&yc(r,a)&&(t.flags|=32),Uv(e,t),lt(e,t,o,n),t.child;case 6:return e===null&&Ec(t),null;case 13:return Hv(e,t,n);case 4:return Jf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ai(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),tm(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ve(vl,r._currentValue),r._currentValue=o,a!==null)if(Bt(a.value,o)){if(a.children===i.children&&!pt.current){t=vn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=cn(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Cc(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cc(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jr(t,n),i=It(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),nm(e,t,r,i,n);case 15:return jv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Uo(e,t),t.tag=1,mt(r)?(e=!0,ml(t)):e=!1,Jr(t,n),hv(t,r,i),Pc(t,r,i,n),Nc(null,t,r,!0,e,n);case 19:return Wv(e,t,n);case 22:return Vv(e,t,n)}throw Error(R(156,t.tag))};function l0(e,t){return _g(e,t)}function X2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new X2(e,t,n,r)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q2(e){if(typeof e=="function")return pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ff)return 11;if(e===_f)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")pd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _r:return hr(n.children,i,a,t);case If:o=8,i|=8;break;case Xu:return e=At(12,n,t,i|2),e.elementType=Xu,e.lanes=a,e;case qu:return e=At(13,n,t,i),e.elementType=qu,e.lanes=a,e;case Ju:return e=At(19,n,t,i),e.elementType=Ju,e.lanes=a,e;case gg:return as(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mg:o=10;break e;case hg:o=9;break e;case Ff:o=11;break e;case _f:o=14;break e;case Rn:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=At(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function hr(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function as(e,t,n,r){return e=At(22,e,r,t),e.elementType=gg,e.lanes=n,e.stateNode={isHidden:!1},e}function yu(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function wu(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function md(e,t,n,r,i,a,o,l,s){return e=new J2(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=At(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(a),e}function Z2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s0(e){if(!e)return Qn;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(mt(n))return lv(e,n,t)}return t}function u0(e,t,n,r,i,a,o,l,s){return e=md(n,r,!0,e,i,a,o,l,s),e.context=s0(null),n=e.current,r=st(),i=Hn(n),a=cn(r,i),a.callback=t??null,Un(n,a,i),e.current.lanes=i,za(e,i,r),ht(e,r),e}function os(e,t,n,r){var i=t.current,a=st(),o=Hn(i);return n=s0(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,o),e!==null&&(Ut(e,i,o,a),zo(e,i,o)),o}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hd(e,t){mm(e,t),(e=e.alternate)&&mm(e,t)}function eb(){return null}var c0=typeof reportError=="function"?reportError:function(e){console.error(e)};function gd(e){this._internalRoot=e}ls.prototype.render=gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));os(e,t,null,null)};ls.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){os(null,e,null,null)}),t[hn]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=jg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Ug(e)}};function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hm(){}function tb(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ol(o);a.call(u)}}var o=u0(t,r,e,0,null,!1,!1,"",hm);return e._reactRootContainer=o,e[hn]=o.current,ya(e.nodeType===8?e.parentNode:e),br(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ol(s);l.call(u)}}var s=md(e,0,!1,null,null,!1,!1,"",hm);return e._reactRootContainer=s,e[hn]=s.current,ya(e.nodeType===8?e.parentNode:e),br(function(){os(t,s,n,r)}),s}function us(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Ol(o);l.call(s)}}os(t,o,e,i)}else o=tb(n,t,e,i,r);return Ol(o)}Mg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hi(t.pendingLanes);n!==0&&(Lf(t,n|1),ht(t,Ie()),!(ie&6)&&(si=Ie()+500,nr()))}break;case 13:br(function(){var r=gn(e,1);if(r!==null){var i=st();Ut(r,e,1,i)}}),hd(e,1)}};Df=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=st();Ut(t,e,134217728,n)}hd(e,134217728)}};zg=function(e){if(e.tag===13){var t=Hn(e),n=gn(e,t);if(n!==null){var r=st();Ut(n,e,t,r)}hd(e,t)}};jg=function(){return de};Vg=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};sc=function(e,t,n){switch(t){case"input":if(tc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zl(r);if(!i)throw Error(R(90));yg(r),tc(r,i)}}}break;case"textarea":bg(e,n);break;case"select":t=n.value,t!=null&&Kr(e,!!n.multiple,t,!1)}};Og=cd;Ag=br;var nb={usingClientEntryPoint:!1,Events:[Va,Dr,Zl,kg,Pg,cd]},$i={findFiberByHostInstance:sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rb={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ig(e),e===null?null:e.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||eb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ql=mo.inject(rb),en=mo}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nb;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(t))throw Error(R(200));return Z2(e,t,null,n)};St.createRoot=function(e,t){if(!vd(e))throw Error(R(299));var n=!1,r="",i=c0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=md(e,1,!1,null,null,n,!1,r,i),e[hn]=t.current,ya(e.nodeType===8?e.parentNode:e),new gd(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Ig(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return br(e)};St.hydrate=function(e,t,n){if(!ss(t))throw Error(R(200));return us(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!vd(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=c0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=u0(t,null,e,1,n??null,i,!1,a,o),e[hn]=t.current,ya(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ls(t)};St.render=function(e,t,n){if(!ss(t))throw Error(R(200));return us(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!ss(e))throw Error(R(40));return e._reactRootContainer?(br(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};St.unstable_batchedUpdates=cd;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ss(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return us(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=St})(ew);var gm=rl;Gu.createRoot=gm.createRoot,Gu.hydrateRoot=gm.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}var Ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ln||(Ln={}));const vm="popstate";function ib(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Vc("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Al(i)}return ob(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ab(){return Math.random().toString(36).substr(2,8)}function ym(e,t){return{usr:e.state,key:e.key,idx:t}}function Vc(e,t,n,r){return n===void 0&&(n=null),Oa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gi(t):t,{state:n,key:t&&t.key||r||ab()})}function Al(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ob(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=Ln.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Oa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){l=Ln.Pop;let b=c(),d=b==null?null:b-u;u=b,s&&s({action:l,location:v.location,delta:d})}function p(b,d){l=Ln.Push;let m=Vc(v.location,b,d);n&&n(m,b),u=c()+1;let w=ym(m,u),S=v.createHref(m);try{o.pushState(w,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function y(b,d){l=Ln.Replace;let m=Vc(v.location,b,d);n&&n(m,b),u=c();let w=ym(m,u),S=v.createHref(m);o.replaceState(w,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function g(b){let d=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof b=="string"?b:Al(b);return $e(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}let v={get action(){return l},get location(){return e(i,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(vm,f),s=b,()=>{i.removeEventListener(vm,f),s=null}},createHref(b){return t(i,b)},createURL:g,encodeLocation(b){let d=g(b);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:y,go(b){return o.go(b)}};return v}var wm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wm||(wm={}));function lb(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gi(t):t,i=wd(r.pathname||"/",n);if(i==null)return null;let a=f0(e);sb(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=vb(a[l],bb(i));return o}function f0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Yn([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&($e(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),f0(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:hb(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of d0(a.path))i(a,o,s)}),t}function d0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=d0(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function sb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ub=/^:\w+$/,cb=3,fb=2,db=1,pb=10,mb=-2,bm=e=>e==="*";function hb(e,t){let n=e.split("/"),r=n.length;return n.some(bm)&&(r+=mb),t&&(r+=fb),n.filter(i=>!bm(i)).reduce((i,a)=>i+(ub.test(a)?cb:a===""?db:pb),r)}function gb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vb(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=yb({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;a.push({params:r,pathname:Yn([i,c.pathname]),pathnameBase:Cb(Yn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Yn([i,c.pathnameBase]))}return a}function yb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=l[f]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=xb(l[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function wb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bb(e){try{return decodeURI(e)}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xb(e,t){try{return decodeURIComponent(e)}catch(n){return yd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function wd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gi(e):e;return{pathname:n?n.startsWith("/")?n:Eb(n,t):t,search:kb(r),hash:Pb(i)}}function Eb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function p0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function m0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gi(e):(i=Oa({},e),$e(!i.pathname||!i.pathname.includes("?"),bu("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),bu("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),bu("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let s=Sb(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Yn=e=>e.join("/").replace(/\/\/+/g,"/"),Cb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ob(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nb=typeof Object.is=="function"?Object.is:Ab,{useState:Rb,useEffect:Ib,useLayoutEffect:Fb,useDebugValue:_b}=ua;function $b(e,t,n){const r=t(),[{inst:i},a]=Rb({inst:{value:r,getSnapshot:t}});return Fb(()=>{i.value=r,i.getSnapshot=t,xu(i)&&a({inst:i})},[e,r,t]),Ib(()=>(xu(i)&&a({inst:i}),e(()=>{xu(i)&&a({inst:i})})),[e]),_b(r),r}function xu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nb(n,r)}catch{return!0}}function Tb(e,t,n){return t()}const Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Db=!Lb,Mb=Db?Tb:$b;"useSyncExternalStore"in ua&&(e=>e.useSyncExternalStore)(ua);const h0=x.createContext(null),cs=x.createContext(null),vi=x.createContext(null),fs=x.createContext(null),yi=x.createContext({outlet:null,matches:[]}),g0=x.createContext(null);function Uc(){return Uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uc.apply(this,arguments)}function zb(e,t){let{relative:n}=t===void 0?{}:t;wi()||$e(!1);let{basename:r,navigator:i}=x.useContext(vi),{hash:a,pathname:o,search:l}=bd(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Yn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function wi(){return x.useContext(fs)!=null}function bi(){return wi()||$e(!1),x.useContext(fs).location}function ds(){wi()||$e(!1);let{basename:e,navigator:t}=x.useContext(vi),{matches:n}=x.useContext(yi),{pathname:r}=bi(),i=JSON.stringify(p0(n).map(l=>l.pathnameBase)),a=x.useRef(!1);return x.useEffect(()=>{a.current=!0}),x.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=m0(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Yn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function bd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(yi),{pathname:i}=bi(),a=JSON.stringify(p0(r).map(o=>o.pathnameBase));return x.useMemo(()=>m0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function jb(e,t){wi()||$e(!1);let{navigator:n}=x.useContext(vi),r=x.useContext(cs),{matches:i}=x.useContext(yi),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=bi(),u;if(t){var c;let v=typeof t=="string"?gi(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||$e(!1),u=v}else u=s;let f=u.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",y=lb(e,{pathname:p}),g=Hb(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Yn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Yn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&g?x.createElement(fs.Provider,{value:{location:Uc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ln.Pop}},g):g}function Vb(){let e=Kb(),t=Ob(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,a)}class Ub extends x.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(yi.Provider,{value:this.props.routeContext},x.createElement(g0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bb(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(h0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(yi.Provider,{value:t},r)}function Hb(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||$e(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=x.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=x.createElement(Vb,null));let c=t.concat(r.slice(0,l+1)),f=()=>{let p=a;return s?p=u:o.route.Component?p=x.createElement(o.route.Component,null):o.route.element&&(p=o.route.element),x.createElement(Bb,{match:o,routeContext:{outlet:a,matches:c},children:p})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?x.createElement(Ub,{location:n.location,component:u,error:s,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var xm;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(xm||(xm={}));var Nl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Nl||(Nl={}));function Wb(e){let t=x.useContext(cs);return t||$e(!1),t}function Yb(e){let t=x.useContext(yi);return t||$e(!1),t}function Gb(e){let t=Yb(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function Kb(){var e;let t=x.useContext(g0),n=Wb(Nl.UseRouteError),r=Gb(Nl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Qb(e){let{to:t,replace:n,state:r,relative:i}=e;wi()||$e(!1);let a=x.useContext(cs),o=ds();return x.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Yt(e){$e(!1)}function Xb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ln.Pop,navigator:a,static:o=!1}=e;wi()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=x.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=gi(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:y="default"}=r,g=x.useMemo(()=>{let v=wd(u,l);return v==null?null:{location:{pathname:v,search:c,hash:f,state:p,key:y},navigationType:i}},[l,u,c,f,p,y,i]);return g==null?null:x.createElement(vi.Provider,{value:s},x.createElement(fs.Provider,{children:n,value:g}))}function qb(e){let{children:t,location:n}=e,r=x.useContext(h0),i=r&&!t?r.router.routes:Bc(t);return jb(i,n)}var Sm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Sm||(Sm={}));new Promise(()=>{});function Bc(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;if(r.type===x.Fragment){n.push.apply(n,Bc(r.props.children,t));return}r.type!==Yt&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bc(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}function v0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zb(e,t){return e.button===0&&(!t||t==="_self")&&!Jb(e)}const ex=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],tx=["aria-current","caseSensitive","className","end","style","to","children"];function nx(e){let{basename:t,children:n,window:r}=e,i=x.useRef();i.current==null&&(i.current=ib({window:r,v5Compat:!0}));let a=i.current,[o,l]=x.useState({action:a.action,location:a.location});return x.useLayoutEffect(()=>a.listen(l),[a]),x.createElement(Xb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const rx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,y0=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,f=v0(t,ex),{basename:p}=x.useContext(vi),y,g=!1;if(typeof u=="string"&&ix.test(u)&&(y=u,rx)){let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=wd(w.pathname,p);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:g=!0}let v=zb(u,{relative:i}),b=ax(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function d(m){r&&r(m),m.defaultPrevented||b(m)}return x.createElement("a",Rl({},f,{href:y||v,onClick:g||a?r:d,ref:n,target:s}))}),rt=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=v0(t,tx),f=bd(s,{relative:c.relative}),p=bi(),y=x.useContext(cs),{navigator:g}=x.useContext(vi),v=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,b=p.pathname,d=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(b=b.toLowerCase(),d=d?d.toLowerCase():null,v=v.toLowerCase());let m=b===v||!o&&b.startsWith(v)&&b.charAt(v.length)==="/",w=d!=null&&(d===v||!o&&d.startsWith(v)&&d.charAt(v.length)==="/"),S=m?r:void 0,k;typeof a=="function"?k=a({isActive:m,isPending:w}):k=[a,m?"active":null,w?"pending":null].filter(Boolean).join(" ");let P=typeof l=="function"?l({isActive:m,isPending:w}):l;return x.createElement(y0,Rl({},c,{"aria-current":S,className:k,ref:n,style:P,to:s}),typeof u=="function"?u({isActive:m,isPending:w}):u)});var Em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Em||(Em={}));var Cm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cm||(Cm={}));function ax(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=ds(),s=bi(),u=bd(e,{relative:o});return x.useCallback(c=>{if(Zb(c,n)){c.preventDefault();let f=r!==void 0?r:Al(s)===Al(u);l(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var Il={},ox={get exports(){return Il},set exports(e){Il=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),vs=Symbol.for("react.context"),lx=Symbol.for("react.server_context"),ys=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),bs=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),Ss=Symbol.for("react.lazy"),sx=Symbol.for("react.offscreen"),w0;w0=Symbol.for("react.module.reference");function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xd:switch(e=e.type,e){case ps:case hs:case ms:case ws:case bs:return e;default:switch(e=e&&e.$$typeof,e){case lx:case vs:case ys:case Ss:case xs:case gs:return e;default:return t}}case Sd:return t}}}pe.ContextConsumer=vs;pe.ContextProvider=gs;pe.Element=xd;pe.ForwardRef=ys;pe.Fragment=ps;pe.Lazy=Ss;pe.Memo=xs;pe.Portal=Sd;pe.Profiler=hs;pe.StrictMode=ms;pe.Suspense=ws;pe.SuspenseList=bs;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(e){return _t(e)===vs};pe.isContextProvider=function(e){return _t(e)===gs};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xd};pe.isForwardRef=function(e){return _t(e)===ys};pe.isFragment=function(e){return _t(e)===ps};pe.isLazy=function(e){return _t(e)===Ss};pe.isMemo=function(e){return _t(e)===xs};pe.isPortal=function(e){return _t(e)===Sd};pe.isProfiler=function(e){return _t(e)===hs};pe.isStrictMode=function(e){return _t(e)===ms};pe.isSuspense=function(e){return _t(e)===ws};pe.isSuspenseList=function(e){return _t(e)===bs};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ps||e===hs||e===ms||e===ws||e===bs||e===sx||typeof e=="object"&&e!==null&&(e.$$typeof===Ss||e.$$typeof===xs||e.$$typeof===gs||e.$$typeof===vs||e.$$typeof===ys||e.$$typeof===w0||e.getModuleId!==void 0)};pe.typeOf=_t;(function(e){e.exports=pe})(ox);function ux(e){function t(I,_,T,B,C){for(var G=0,$=0,he=0,oe=0,le,K,Te=0,He=0,ne,Ze=ne=le=0,fe=0,We=0,ki=0,Ye=0,Xa=T.length,Pi=Xa-1,$t,Q="",Re="",Ys="",Gs="",kn;fe<Xa;){if(K=T.charCodeAt(fe),fe===Pi&&$+oe+he+G!==0&&($!==0&&(K=$===47?10:47),oe=he=G=0,Xa++,Pi++),$+oe+he+G===0){if(fe===Pi&&(0<We&&(Q=Q.replace(p,"")),0<Q.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:Q+=T.charAt(fe)}K=59}switch(K){case 123:for(Q=Q.trim(),le=Q.charCodeAt(0),ne=1,Ye=++fe;fe<Xa;){switch(K=T.charCodeAt(fe)){case 123:ne++;break;case 125:ne--;break;case 47:switch(K=T.charCodeAt(fe+1)){case 42:case 47:e:{for(Ze=fe+1;Ze<Pi;++Ze)switch(T.charCodeAt(Ze)){case 47:if(K===42&&T.charCodeAt(Ze-1)===42&&fe+2!==Ze){fe=Ze+1;break e}break;case 10:if(K===47){fe=Ze+1;break e}}fe=Ze}}break;case 91:K++;case 40:K++;case 34:case 39:for(;fe++<Pi&&T.charCodeAt(fe)!==K;);}if(ne===0)break;fe++}switch(ne=T.substring(Ye,fe),le===0&&(le=(Q=Q.replace(f,"").trim()).charCodeAt(0)),le){case 64:switch(0<We&&(Q=Q.replace(p,"")),K=Q.charCodeAt(1),K){case 100:case 109:case 115:case 45:We=_;break;default:We=Ee}if(ne=t(_,We,ne,K,C+1),Ye=ne.length,0<F&&(We=n(Ee,Q,ki),kn=l(3,ne,We,_,ae,X,Ye,K,C,B),Q=We.join(""),kn!==void 0&&(Ye=(ne=kn.trim()).length)===0&&(K=0,ne="")),0<Ye)switch(K){case 115:Q=Q.replace(P,o);case 100:case 109:case 45:ne=Q+"{"+ne+"}";break;case 107:Q=Q.replace(m,"$1 $2"),ne=Q+"{"+ne+"}",ne=q===1||q===2&&a("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=Q+ne,B===112&&(ne=(Re+=ne,""))}else ne="";break;default:ne=t(_,n(_,Q,ki),ne,B,C+1)}Ys+=ne,ne=ki=We=Ze=le=0,Q="",K=T.charCodeAt(++fe);break;case 125:case 59:if(Q=(0<We?Q.replace(p,""):Q).trim(),1<(Ye=Q.length))switch(Ze===0&&(le=Q.charCodeAt(0),le===45||96<le&&123>le)&&(Ye=(Q=Q.replace(" ",":")).length),0<F&&(kn=l(1,Q,_,I,ae,X,Re.length,B,C,B))!==void 0&&(Ye=(Q=kn.trim()).length)===0&&(Q="\0\0"),le=Q.charCodeAt(0),K=Q.charCodeAt(1),le){case 0:break;case 64:if(K===105||K===99){Gs+=Q+T.charAt(fe);break}default:Q.charCodeAt(Ye-1)!==58&&(Re+=i(Q,le,K,Q.charCodeAt(2)))}ki=We=Ze=le=0,Q="",K=T.charCodeAt(++fe)}}switch(K){case 13:case 10:$===47?$=0:1+le===0&&B!==107&&0<Q.length&&(We=1,Q+="\0"),0<F*U&&l(0,Q,_,I,ae,X,Re.length,B,C,B),X=1,ae++;break;case 59:case 125:if($+oe+he+G===0){X++;break}default:switch(X++,$t=T.charAt(fe),K){case 9:case 32:if(oe+G+$===0)switch(Te){case 44:case 58:case 9:case 32:$t="";break;default:K!==32&&($t=" ")}break;case 0:$t="\\0";break;case 12:$t="\\f";break;case 11:$t="\\v";break;case 38:oe+$+G===0&&(We=ki=1,$t="\f"+$t);break;case 108:if(oe+$+G+ee===0&&0<Ze)switch(fe-Ze){case 2:Te===112&&T.charCodeAt(fe-3)===58&&(ee=Te);case 8:He===111&&(ee=He)}break;case 58:oe+$+G===0&&(Ze=fe);break;case 44:$+he+oe+G===0&&(We=1,$t+="\r");break;case 34:case 39:$===0&&(oe=oe===K?0:oe===0?K:oe);break;case 91:oe+$+he===0&&G++;break;case 93:oe+$+he===0&&G--;break;case 41:oe+$+G===0&&he--;break;case 40:if(oe+$+G===0){if(le===0)switch(2*Te+3*He){case 533:break;default:le=1}he++}break;case 64:$+he+oe+G+Ze+ne===0&&(ne=1);break;case 42:case 47:if(!(0<oe+G+he))switch($){case 0:switch(2*K+3*T.charCodeAt(fe+1)){case 235:$=47;break;case 220:Ye=fe,$=42}break;case 42:K===47&&Te===42&&Ye+2!==fe&&(T.charCodeAt(Ye+2)===33&&(Re+=T.substring(Ye,fe+1)),$t="",$=0)}}$===0&&(Q+=$t)}He=Te,Te=K,fe++}if(Ye=Re.length,0<Ye){if(We=_,0<F&&(kn=l(2,Re,We,I,ae,X,Ye,B,C,B),kn!==void 0&&(Re=kn).length===0))return Gs+Re+Ys;if(Re=We.join(",")+"{"+Re+"}",q*ee!==0){switch(q!==2||a(Re,2)||(ee=0),ee){case 111:Re=Re.replace(S,":-moz-$1")+Re;break;case 112:Re=Re.replace(w,"::-webkit-input-$1")+Re.replace(w,"::-moz-$1")+Re.replace(w,":-ms-input-$1")+Re}ee=0}}return Gs+Re+Ys}function n(I,_,T){var B=_.trim().split(b);_=B;var C=B.length,G=I.length;switch(G){case 0:case 1:var $=0;for(I=G===0?"":I[0]+" ";$<C;++$)_[$]=r(I,_[$],T).trim();break;default:var he=$=0;for(_=[];$<C;++$)for(var oe=0;oe<G;++oe)_[he++]=r(I[oe]+" ",B[$],T).trim()}return _}function r(I,_,T){var B=_.charCodeAt(0);switch(33>B&&(B=(_=_.trim()).charCodeAt(0)),B){case 38:return _.replace(d,"$1"+I.trim());case 58:return I.trim()+_.replace(d,"$1"+I.trim());default:if(0<1*T&&0<_.indexOf("\f"))return _.replace(d,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+_}function i(I,_,T,B){var C=I+";",G=2*_+3*T+4*B;if(G===944){I=C.indexOf(":",9)+1;var $=C.substring(I,C.length-1).trim();return $=C.substring(0,I).trim()+$+";",q===1||q===2&&a($,1)?"-webkit-"+$+$:$}if(q===0||q===2&&!a(C,1))return C;switch(G){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(se,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return $=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+C+"-ms-flex-pack"+$+C;case 1005:return g.test(C)?C.replace(y,":-webkit-")+C.replace(y,":-moz-")+C:C;case 1e3:switch($=C.substring(13).trim(),_=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(_)){case 226:$=C.replace(k,"tb");break;case 232:$=C.replace(k,"tb-rl");break;case 220:$=C.replace(k,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+$+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(_=(C=I).length-10,$=(C.charCodeAt(_)===33?C.substring(0,_):C).substring(I.indexOf(":",7)+1).trim(),G=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:C=C.replace($,"-webkit-"+$)+";"+C;break;case 207:case 102:C=C.replace($,"-webkit-"+(102<G?"inline-":"")+"box")+";"+C.replace($,"-webkit-"+$)+";"+C.replace($,"-ms-"+$+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return $=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+$+"-ms-flex-"+$+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(O,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(O,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(z.test(I)===!0)return($=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?i(I.replace("stretch","fill-available"),_,T,B).replace(":fill-available",":stretch"):C.replace($,"-webkit-"+$)+C.replace($,"-moz-"+$.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,T+B===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+C}return C}function a(I,_){var T=I.indexOf(_===1?":":"{"),B=I.substring(0,_!==3?T:10);return T=I.substring(T+1,I.length-1),V(_!==2?B:B.replace(L,"$1"),T,_)}function o(I,_){var T=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return T!==_+";"?T.replace(E," or ($1)").substring(4):"("+_+")"}function l(I,_,T,B,C,G,$,he,oe,le){for(var K=0,Te=_,He;K<F;++K)switch(He=ge[K].call(c,I,Te,T,B,C,G,$,he,oe,le)){case void 0:case!1:case!0:case null:break;default:Te=He}if(Te!==_)return Te}function s(I){switch(I){case void 0:case null:F=ge.length=0;break;default:if(typeof I=="function")ge[F++]=I;else if(typeof I=="object")for(var _=0,T=I.length;_<T;++_)s(I[_]);else U=!!I|0}return s}function u(I){return I=I.prefix,I!==void 0&&(V=null,I?typeof I!="function"?q=1:(q=2,V=I):q=0),u}function c(I,_){var T=I;if(33>T.charCodeAt(0)&&(T=T.trim()),te=T,T=[te],0<F){var B=l(-1,_,T,T,ae,X,0,0,0,0);B!==void 0&&typeof B=="string"&&(_=B)}var C=t(Ee,T,_,0,0);return 0<F&&(B=l(-2,C,T,T,ae,X,C.length,0,0,0),B!==void 0&&(C=B)),te="",ee=0,X=ae=1,C}var f=/^\0+/g,p=/[\0\r\f]/g,y=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,b=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,O=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,X=1,ae=1,ee=0,q=1,Ee=[],ge=[],F=0,V=null,U=0,te="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var cx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function b0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var fx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,km=b0(function(e){return fx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Hc={},dx={get exports(){return Hc},set exports(e){Hc=e}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Ed=Be?Symbol.for("react.element"):60103,Cd=Be?Symbol.for("react.portal"):60106,Es=Be?Symbol.for("react.fragment"):60107,Cs=Be?Symbol.for("react.strict_mode"):60108,ks=Be?Symbol.for("react.profiler"):60114,Ps=Be?Symbol.for("react.provider"):60109,Os=Be?Symbol.for("react.context"):60110,kd=Be?Symbol.for("react.async_mode"):60111,As=Be?Symbol.for("react.concurrent_mode"):60111,Ns=Be?Symbol.for("react.forward_ref"):60112,Rs=Be?Symbol.for("react.suspense"):60113,px=Be?Symbol.for("react.suspense_list"):60120,Is=Be?Symbol.for("react.memo"):60115,Fs=Be?Symbol.for("react.lazy"):60116,mx=Be?Symbol.for("react.block"):60121,hx=Be?Symbol.for("react.fundamental"):60117,gx=Be?Symbol.for("react.responder"):60118,vx=Be?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ed:switch(e=e.type,e){case kd:case As:case Es:case ks:case Cs:case Rs:return e;default:switch(e=e&&e.$$typeof,e){case Os:case Ns:case Fs:case Is:case Ps:return e;default:return t}}case Cd:return t}}}function x0(e){return Ct(e)===As}me.AsyncMode=kd;me.ConcurrentMode=As;me.ContextConsumer=Os;me.ContextProvider=Ps;me.Element=Ed;me.ForwardRef=Ns;me.Fragment=Es;me.Lazy=Fs;me.Memo=Is;me.Portal=Cd;me.Profiler=ks;me.StrictMode=Cs;me.Suspense=Rs;me.isAsyncMode=function(e){return x0(e)||Ct(e)===kd};me.isConcurrentMode=x0;me.isContextConsumer=function(e){return Ct(e)===Os};me.isContextProvider=function(e){return Ct(e)===Ps};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ed};me.isForwardRef=function(e){return Ct(e)===Ns};me.isFragment=function(e){return Ct(e)===Es};me.isLazy=function(e){return Ct(e)===Fs};me.isMemo=function(e){return Ct(e)===Is};me.isPortal=function(e){return Ct(e)===Cd};me.isProfiler=function(e){return Ct(e)===ks};me.isStrictMode=function(e){return Ct(e)===Cs};me.isSuspense=function(e){return Ct(e)===Rs};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Es||e===As||e===ks||e===Cs||e===Rs||e===px||typeof e=="object"&&e!==null&&(e.$$typeof===Fs||e.$$typeof===Is||e.$$typeof===Ps||e.$$typeof===Os||e.$$typeof===Ns||e.$$typeof===hx||e.$$typeof===gx||e.$$typeof===vx||e.$$typeof===mx)};me.typeOf=Ct;(function(e){e.exports=me})(dx);var Pd=Hc,yx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},S0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Od={};Od[Pd.ForwardRef]=bx;Od[Pd.Memo]=S0;function Pm(e){return Pd.isMemo(e)?S0:Od[e.$$typeof]||yx}var xx=Object.defineProperty,Sx=Object.getOwnPropertyNames,Om=Object.getOwnPropertySymbols,Ex=Object.getOwnPropertyDescriptor,Cx=Object.getPrototypeOf,Am=Object.prototype;function E0(e,t,n){if(typeof t!="string"){if(Am){var r=Cx(t);r&&r!==Am&&E0(e,r,n)}var i=Sx(t);Om&&(i=i.concat(Om(t)));for(var a=Pm(e),o=Pm(t),l=0;l<i.length;++l){var s=i[l];if(!wx[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=Ex(t,s);try{xx(e,s,u)}catch{}}}}return e}var kx=E0;function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Nm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Wc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Il.typeOf(e)},Fl=Object.freeze([]),Gn=Object.freeze({});function Aa(e){return typeof e=="function"}function Rm(e){return e.displayName||e.name||"Component"}function Ad(e){return e&&typeof e.styledComponentId=="string"}var ui=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Nd=typeof window<"u"&&"HTMLElement"in window,Px=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Ox={};function Ba(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ax=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&Ba(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Yo=new Map,_l=new Map,ia=1,ho=function(e){if(Yo.has(e))return Yo.get(e);for(;_l.has(ia);)ia++;var t=ia++;return Yo.set(e,t),_l.set(t,e),t},Nx=function(e){return _l.get(e)},Rx=function(e,t){t>=ia&&(ia=t+1),Yo.set(e,t),_l.set(t,e)},Ix="style["+ui+'][data-styled-version="5.3.9"]',Fx=new RegExp("^"+ui+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_x=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},$x=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(Fx);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Rx(u,s),_x(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},Tx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},C0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(ui))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(ui,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Tx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Lx=function(){function e(n){var r=this.element=C0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}Ba(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Dx=function(){function e(n){var r=this.element=C0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Mx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Im=Nd,zx={isServer:!Nd,useCSSOMInjection:!Px},$l=function(){function e(n,r,i){n===void 0&&(n=Gn),r===void 0&&(r={}),this.options=qt({},zx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Nd&&Im&&(Im=!1,function(a){for(var o=document.querySelectorAll(Ix),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(ui)!=="active"&&($x(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ho(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new Mx(o):a?new Lx(o):new Dx(o),new Ax(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ho(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ho(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ho(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=Nx(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=ui+".g"+o+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(p){p.length>0&&(f+=p+",")}),a+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return a}(this)},e}(),jx=/(a)(d)/gi,Fm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fm(t%52)+n;return(Fm(t%52)+n).replace(jx,"$1-$2")}var Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},k0=function(e){return Hr(5381,e)};function P0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Aa(n)&&!Ad(n))return!1}return!0}var Vx=k0("5.3.9"),Ux=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&P0(t),this.componentId=n,this.baseHash=Hr(Vx,n),this.baseStyle=r,$l.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=xr(this.rules,t,n,r).join(""),l=Yc(Hr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=Hr(this.baseHash,r.hash),f="",p=0;p<u;p++){var y=this.rules[p];if(typeof y=="string")f+=y;else if(y){var g=xr(y,t,n,r),v=Array.isArray(g)?g.join(""):g;c=Hr(c,v+p),f+=v}}if(f){var b=Yc(c>>>0);if(!n.hasNameForId(i,b)){var d=r(f,"."+b,void 0,i);n.insertRules(i,b,d)}a.push(b)}}return a.join(" ")},e}(),Bx=/^\s*\/\/.*$/gm,Hx=[":","[",".","#"];function Wx(e){var t,n,r,i,a=e===void 0?Gn:e,o=a.options,l=o===void 0?Gn:o,s=a.plugins,u=s===void 0?Fl:s,c=new ux(l),f=[],p=function(v){function b(d){if(d)try{v(d+"}")}catch{}}return function(d,m,w,S,k,P,E,O,L,z){switch(d){case 1:if(L===0&&m.charCodeAt(0)===64)return v(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return v(w[0]+m),"";default:return m+(z===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(b)}}}(function(v){f.push(v)}),y=function(v,b,d){return b===0&&Hx.indexOf(d[n.length])!==-1||d.match(i)?v:"."+t};function g(v,b,d,m){m===void 0&&(m="&");var w=v.replace(Bx,""),S=b&&d?d+" "+b+" { "+w+" }":w;return t=m,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(d||!b?"":b,S)}return c.use([].concat(u,[function(v,b,d){v===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,y))},p,function(v){if(v===-2){var b=f;return f=[],b}}])),g.hash=u.length?u.reduce(function(v,b){return b.name||Ba(15),Hr(v,b.name)},5381).toString():"",g}var O0=xn.createContext();O0.Consumer;var A0=xn.createContext(),Yx=(A0.Consumer,new $l),Gc=Wx();function N0(){return x.useContext(O0)||Yx}function R0(){return x.useContext(A0)||Gc}var Gx=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Gc);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return Ba(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Gc),this.name+t.hash},e}(),Kx=/([A-Z])/,Qx=/([A-Z])/g,Xx=/^ms-/,qx=function(e){return"-"+e.toLowerCase()};function _m(e){return Kx.test(e)?e.replace(Qx,qx).replace(Xx,"-ms-"):e}var $m=function(e){return e==null||e===!1||e===""};function xr(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=xr(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if($m(e))return"";if(Ad(e))return"."+e.styledComponentId;if(Aa(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return xr(s,t,n,r)}var u;return e instanceof Gx?n?(e.inject(n,r),e.getName(r)):e:Wc(e)?function c(f,p){var y,g,v=[];for(var b in f)f.hasOwnProperty(b)&&!$m(f[b])&&(Array.isArray(f[b])&&f[b].isCss||Aa(f[b])?v.push(_m(b)+":",f[b],";"):Wc(f[b])?v.push.apply(v,c(f[b],b)):v.push(_m(b)+": "+(y=b,(g=f[b])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||y in cx?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(v,["}"]):v}(e):e.toString()}var Tm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function I0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Aa(e)||Wc(e)?Tm(xr(Nm(Fl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Tm(xr(Nm(e,n)))}var F0=function(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme},Jx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zx=/(^-|-$)/g;function Su(e){return e.replace(Jx,"-").replace(Zx,"")}var _0=function(e){return Yc(k0(e)>>>0)};function go(e){return typeof e=="string"&&!0}var Kc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},eS=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function tS(e,t,n){var r=e[n];Kc(t)&&Kc(r)?$0(r,t):e[n]=t}function $0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Kc(o))for(var l in o)eS(l)&&tS(e,o[l],l)}return e}var Rd=xn.createContext();Rd.Consumer;var Eu={};function T0(e,t,n){var r=Ad(e),i=!go(e),a=t.attrs,o=a===void 0?Fl:a,l=t.componentId,s=l===void 0?function(m,w){var S=typeof m!="string"?"sc":Su(m);Eu[S]=(Eu[S]||0)+1;var k=S+"-"+_0("5.3.9"+S+Eu[S]);return w?w+"-"+k:k}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(m){return go(m)?"styled."+m:"Styled("+Rm(m)+")"}(e):u,f=t.displayName&&t.componentId?Su(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(m,w,S){return e.shouldForwardProp(m,w,S)&&t.shouldForwardProp(m,w,S)}:e.shouldForwardProp);var g,v=new Ux(n,f,r?e.componentStyle:void 0),b=v.isStatic&&o.length===0,d=function(m,w){return function(S,k,P,E){var O=S.attrs,L=S.componentStyle,z=S.defaultProps,se=S.foldedComponentIds,X=S.shouldForwardProp,ae=S.styledComponentId,ee=S.target,q=function(B,C,G){B===void 0&&(B=Gn);var $=qt({},C,{theme:B}),he={};return G.forEach(function(oe){var le,K,Te,He=oe;for(le in Aa(He)&&(He=He($)),He)$[le]=he[le]=le==="className"?(K=he[le],Te=He[le],K&&Te?K+" "+Te:K||Te):He[le]}),[$,he]}(F0(k,x.useContext(Rd),z)||Gn,k,O),Ee=q[0],ge=q[1],F=function(B,C,G,$){var he=N0(),oe=R0(),le=C?B.generateAndInjectStyles(Gn,he,oe):B.generateAndInjectStyles(G,he,oe);return le}(L,E,Ee),V=P,U=ge.$as||k.$as||ge.as||k.as||ee,te=go(U),I=ge!==k?qt({},k,{},ge):k,_={};for(var T in I)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?_.as=I[T]:(X?X(T,km,U):!te||km(T))&&(_[T]=I[T]));return k.style&&ge.style!==k.style&&(_.style=qt({},k.style,{},ge.style)),_.className=Array.prototype.concat(se,ae,F!==ae?F:null,k.className,ge.className).filter(Boolean).join(" "),_.ref=V,x.createElement(U,_)}(g,m,w,b)};return d.displayName=c,(g=xn.forwardRef(d)).attrs=p,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Fl,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(m){var w=t.componentId,S=function(P,E){if(P==null)return{};var O,L,z={},se=Object.keys(P);for(L=0;L<se.length;L++)O=se[L],E.indexOf(O)>=0||(z[O]=P[O]);return z}(t,["componentId"]),k=w&&w+"-"+(go(m)?m:Su(Rm(m)));return T0(m,qt({},S,{attrs:p,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?$0({},e.defaultProps,m):m}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&kx(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Qc=function(e){return function t(n,r,i){if(i===void 0&&(i=Gn),!Il.isValidElementType(r))return Ba(1,String(r));var a=function(){return n(r,i,I0.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,qt({},i,{},o))},a.attrs=function(o){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(T0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Qc[e]=Qc(e)});var nS=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=P0(n),$l.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(xr(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&$l.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function rS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=I0.apply(void 0,[e].concat(n)),a="sc-global-"+_0(JSON.stringify(i)),o=new nS(i,a);function l(u){var c=N0(),f=R0(),p=x.useContext(Rd),y=x.useRef(c.allocateGSInstance(a)).current;return c.server&&s(y,u,c,p,f),x.useLayoutEffect(function(){if(!c.server)return s(y,u,c,p,f),function(){return o.removeStyles(y,c)}},[y,u,c,p,f]),null}function s(u,c,f,p,y){if(o.isStatic)o.renderStyles(u,Ox,f,y);else{var g=qt({},c,{theme:F0(c,p,l.defaultProps)});o.renderStyles(u,g,f,y)}}return xn.memo(l)}const ot=Qc,On={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},De={mobileS:`(min-width: ${On.mobileS})`,mobileM:`(min-width: ${On.mobileM})`,mobileL:`(min-width: ${On.mobileL})`,tablet:`(min-width: ${On.tablet})`,laptop:`(min-width: ${On.laptop})`,laptopL:`(min-width: ${On.laptopL})`,desktop:`(min-width: ${On.desktop})`,desktopL:`(min-width: ${On.desktopL})`};let vo="#2C4001",Cu="#F2F2F2";const iS=ot.nav`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 0 2em;
    background: ${vo};

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
        width: 7em;
    }

    a {
        color: ${Cu};
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
        background: ${vo};
        position: absolute;
        right: 0;
        z-index: 2;
        top: 0;

        &.active {
            max-height: 500px;
        }
    }

    .mobile-nav {
        color: ${Cu};
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
        background: ${Cu};
        color: ${vo};
    }
    .userIcon {
        color: ${vo};
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

    @media screen and (max-width: 319px) {
            padding: 0;

        .logo {
            width: 3em;
        }
    }

    @media ${De.mobileS} {
        min-width: 200px;
        font-size: 0.9rem;
        .logo {
                width: 7em;
p        }
    }

    @media ${De.mobileM} {
        min-width: 320px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${De.mobileL} {
        min-width: 375px;
        font-size: 1rem;
        .logo {
            height: 50px;
            width: 100px;
        }
    }

    @media ${De.tablet} {
        min-width: 425px;
    }

    @media ${De.laptop} {
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

    @media ${De.desktop} {
        min-width: 1441px;
        font-size: 3rem;
        .logo {
            height: 140px;
            width: 160px;
        }
    }

    @media ${De.desktopL} {
        min-width: 2560px;
        font-size: 4rem;
        .logo {
            height: 280px;
            width: 400px;
        }
    }
`,aS="/assets/PantryPalWhite-2ae508bc.png";/*! js-cookie v3.0.1 | MIT */function yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var oS={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Xc(e,t){function n(i,a,o){if(!(typeof document>"u")){o=yo({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",yo({},a,{expires:-1}))},withAttributes:function(i){return Xc(this.converter,yo({},this.attributes,i))},withConverter:function(i){return Xc(yo({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Tl=Xc(oS,{path:"/"});function Lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lm(Object(n),!0).forEach(function(r){ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ll(e){return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ll(e)}function lS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sS(e,t,n){return t&&Dm(e.prototype,t),n&&Dm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Id(e,t){return cS(e)||dS(e,t)||L0(e,t)||mS()}function Ha(e){return uS(e)||fS(e)||L0(e)||pS()}function uS(e){if(Array.isArray(e))return qc(e)}function cS(e){if(Array.isArray(e))return e}function fS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function L0(e,t){if(e){if(typeof e=="string")return qc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qc(e,t)}}function qc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mm=function(){},Fd={},D0={},M0=null,z0={mark:Mm,measure:Mm};try{typeof window<"u"&&(Fd=window),typeof document<"u"&&(D0=document),typeof MutationObserver<"u"&&(M0=MutationObserver),typeof performance<"u"&&(z0=performance)}catch{}var hS=Fd.navigator||{},zm=hS.userAgent,jm=zm===void 0?"":zm,Xn=Fd,xe=D0,Vm=M0,wo=z0;Xn.document;var En=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",j0=~jm.indexOf("MSIE")||~jm.indexOf("Trident/"),bo,xo,So,Eo,Co,yn="___FONT_AWESOME___",Jc=16,V0="fa",U0="svg-inline--fa",Sr="data-fa-i2svg",Zc="data-fa-pseudo-element",gS="data-fa-pseudo-element-pending",_d="data-prefix",$d="data-icon",Um="fontawesome-i2svg",vS="async",yS=["HTML","HEAD","STYLE","SCRIPT"],B0=function(){try{return!0}catch{return!1}}(),we="classic",Ae="sharp",Td=[we,Ae];function Wa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[we]}})}var Na=Wa((bo={},ze(bo,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ze(bo,Ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),bo)),Ra=Wa((xo={},ze(xo,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ze(xo,Ae,{solid:"fass",regular:"fasr"}),xo)),Ia=Wa((So={},ze(So,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ze(So,Ae,{fass:"fa-solid",fasr:"fa-regular"}),So)),wS=Wa((Eo={},ze(Eo,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ze(Eo,Ae,{"fa-solid":"fass","fa-regular":"fasr"}),Eo)),bS=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,H0="fa-layers-text",xS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SS=Wa((Co={},ze(Co,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ze(Co,Ae,{900:"fass",400:"fasr"}),Co)),W0=[1,2,3,4,5,6,7,8,9,10],ES=W0.concat([11,12,13,14,15,16,17,18,19,20]),CS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fa=new Set;Object.keys(Ra[we]).map(Fa.add.bind(Fa));Object.keys(Ra[Ae]).map(Fa.add.bind(Fa));var kS=[].concat(Td,Ha(Fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fr.GROUP,fr.SWAP_OPACITY,fr.PRIMARY,fr.SECONDARY]).concat(W0.map(function(e){return"".concat(e,"x")})).concat(ES.map(function(e){return"w-".concat(e)})),aa=Xn.FontAwesomeConfig||{};function PS(e){var t=xe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function OS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(xe&&typeof xe.querySelector=="function"){var AS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AS.forEach(function(e){var t=Id(e,2),n=t[0],r=t[1],i=OS(PS(n));i!=null&&(aa[r]=i)})}var Y0={styleDefault:"solid",familyDefault:"classic",cssPrefix:V0,replacementClass:U0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};aa.familyPrefix&&(aa.cssPrefix=aa.familyPrefix);var ci=D(D({},Y0),aa);ci.autoReplaceSvg||(ci.observeMutations=!1);var j={};Object.keys(Y0).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){ci[e]=n,oa.forEach(function(r){return r(j)})},get:function(){return ci[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(t){ci.cssPrefix=t,oa.forEach(function(n){return n(j)})},get:function(){return ci.cssPrefix}});Xn.FontAwesomeConfig=j;var oa=[];function NS(e){return oa.push(e),function(){oa.splice(oa.indexOf(e),1)}}var An=Jc,Jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RS(e){if(!(!e||!En)){var t=xe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return xe.head.insertBefore(t,r),e}}var IS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _a(){for(var e=12,t="";e-- >0;)t+=IS[Math.random()*62|0];return t}function xi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ld(e){return e.classList?xi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function G0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function FS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(G0(e[n]),'" ')},"").trim()}function _s(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Dd(e){return e.size!==Jt.size||e.x!==Jt.x||e.y!==Jt.y||e.rotate!==Jt.rotate||e.flipX||e.flipY}function _S(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function $S(e){var t=e.transform,n=e.width,r=n===void 0?Jc:n,i=e.height,a=i===void 0?Jc:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&j0?s+="translate(".concat(t.x/An-r/2,"em, ").concat(t.y/An-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/An,"em), calc(-50% + ").concat(t.y/An,"em)) "):s+="translate(".concat(t.x/An,"em, ").concat(t.y/An,"em) "),s+="scale(".concat(t.size/An*(t.flipX?-1:1),", ").concat(t.size/An*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var TS=`:root, :host {
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
}`;function K0(){var e=V0,t=U0,n=j.cssPrefix,r=j.replacementClass,i=TS;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Bm=!1;function ku(){j.autoAddCss&&!Bm&&(RS(K0()),Bm=!0)}var LS={mixout:function(){return{dom:{css:K0,insertCss:ku}}},hooks:function(){return{beforeDOMElementCreation:function(){ku()},beforeI2svg:function(){ku()}}}},wn=Xn||{};wn[yn]||(wn[yn]={});wn[yn].styles||(wn[yn].styles={});wn[yn].hooks||(wn[yn].hooks={});wn[yn].shims||(wn[yn].shims=[]);var jt=wn[yn],Q0=[],DS=function e(){xe.removeEventListener("DOMContentLoaded",e),Dl=1,Q0.map(function(t){return t()})},Dl=!1;En&&(Dl=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Dl||xe.addEventListener("DOMContentLoaded",DS));function MS(e){En&&(Dl?setTimeout(e,0):Q0.push(e))}function Ya(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?G0(e):"<".concat(t," ").concat(FS(r),">").concat(a.map(Ya).join(""),"</").concat(t,">")}function Hm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zS=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Pu=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?zS(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function jS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ef(e){var t=jS(e);return t.length===1?t[0].toString(16):null}function VS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Wm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function tf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Wm(t);typeof jt.hooks.addPack=="function"&&!i?jt.hooks.addPack(e,Wm(t)):jt.styles[e]=D(D({},jt.styles[e]||{}),a),e==="fas"&&tf("fa",t)}var ko,Po,Oo,Wr=jt.styles,US=jt.shims,BS=(ko={},ze(ko,we,Object.values(Ia[we])),ze(ko,Ae,Object.values(Ia[Ae])),ko),Md=null,X0={},q0={},J0={},Z0={},e1={},HS=(Po={},ze(Po,we,Object.keys(Na[we])),ze(Po,Ae,Object.keys(Na[Ae])),Po);function WS(e){return~kS.indexOf(e)}function YS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!WS(i)?i:null}var t1=function(){var t=function(a){return Pu(Wr,function(o,l,s){return o[s]=Pu(l,a,{}),o},{})};X0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),q0=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),e1=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in Wr||j.autoFetchSvg,r=Pu(US,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});J0=r.names,Z0=r.unicodes,Md=$s(j.styleDefault,{family:j.familyDefault})};NS(function(e){Md=$s(e.styleDefault,{family:j.familyDefault})});t1();function zd(e,t){return(X0[e]||{})[t]}function GS(e,t){return(q0[e]||{})[t]}function dr(e,t){return(e1[e]||{})[t]}function n1(e){return J0[e]||{prefix:null,iconName:null}}function KS(e){var t=Z0[e],n=zd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qn(){return Md}var jd=function(){return{prefix:null,iconName:null,rest:[]}};function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?we:n,i=Na[r][e],a=Ra[r][e]||Ra[r][i],o=e in jt.styles?e:null;return a||o||null}var Ym=(Oo={},ze(Oo,we,Object.keys(Ia[we])),ze(Oo,Ae,Object.keys(Ia[Ae])),Oo);function Ts(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ze(t,we,"".concat(j.cssPrefix,"-").concat(we)),ze(t,Ae,"".concat(j.cssPrefix,"-").concat(Ae)),t),o=null,l=we;(e.includes(a[we])||e.some(function(u){return Ym[we].includes(u)}))&&(l=we),(e.includes(a[Ae])||e.some(function(u){return Ym[Ae].includes(u)}))&&(l=Ae);var s=e.reduce(function(u,c){var f=YS(j.cssPrefix,c);if(Wr[c]?(c=BS[l].includes(c)?wS[l][c]:c,o=c,u.prefix=c):HS[l].indexOf(c)>-1?(o=c,u.prefix=$s(c,{family:l})):f?u.iconName=f:c!==j.replacementClass&&c!==a[we]&&c!==a[Ae]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?n1(u.iconName):{},y=dr(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||y||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Wr.far&&Wr.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},jd());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===Ae&&(Wr.fass||j.autoFetchSvg)&&(s.prefix="fass",s.iconName=dr(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=qn()||"fas"),s}var QS=function(){function e(){lS(this,e),this.definitions={}}return sS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=D(D({},n.definitions[l]||{}),o[l]),tf(l,o[l]);var s=Ia[we][l];s&&tf(s,o[l]),t1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),e}(),Gm=[],Yr={},ei={},XS=Object.keys(ei);function qS(e,t){var n=t.mixoutsTo;return Gm=e,Yr={},Object.keys(ei).forEach(function(r){XS.indexOf(r)===-1&&delete ei[r]}),Gm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ll(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Yr[o]||(Yr[o]=[]),Yr[o].push(a[o])})}r.provides&&r.provides(ei)}),n}function nf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Yr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Yr[e]||[];i.forEach(function(a){a.apply(null,n)})}function bn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ei[e]?ei[e].apply(null,t):void 0}function rf(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||qn();if(t)return t=dr(n,t)||t,Hm(r1.definitions,n,t)||Hm(jt.styles,n,t)}var r1=new QS,JS=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Er("noAuto")},ZS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return En?(Er("beforeI2svg",t),bn("pseudoElements2svg",t),bn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,MS(function(){tE({autoReplaceSvgRoot:n}),Er("watch",t)})}},eE={icon:function(t){if(t===null)return null;if(Ll(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=$s(t[0]);return{prefix:r,iconName:dr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.cssPrefix,"-"))>-1||t.match(bS))){var i=Ts(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||qn(),iconName:dr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=qn();return{prefix:a,iconName:dr(a,t)||t}}}},kt={noAuto:JS,config:j,dom:ZS,parse:eE,library:r1,findIconDefinition:rf,toHtml:Ya},tE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(jt.styles).length>0||j.autoFetchSvg)&&En&&j.autoReplaceSvg&&kt.dom.i2svg({node:r})};function Ls(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ya(r)})}}),Object.defineProperty(e,"node",{get:function(){if(En){var r=xe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nE(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Dd(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=_s(D(D({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rE(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(j.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Vd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,y=p===void 0?!1:p,g=r.found?r:n,v=g.width,b=g.height,d=i==="fak",m=[j.replacementClass,a?"".concat(j.cssPrefix,"-").concat(a):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),w={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(b)})},S=d&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/b*16*.0625,"em")}:{};y&&(w.attributes[Sr]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||_a())},children:[s]}),delete w.attributes.title);var k=D(D({},w),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:D(D({},S),f.styles)}),P=r.found&&n.found?bn("generateAbstractMask",k)||{children:[],attributes:{}}:bn("generateAbstractIcon",k)||{children:[],attributes:{}},E=P.children,O=P.attributes;return k.children=E,k.attributes=O,l?rE(k):nE(k)}function Km(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=D(D(D({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Sr]="");var c=D({},o.styles);Dd(i)&&(c.transform=$S({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=_s(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function iE(e){var t=e.content,n=e.title,r=e.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=_s(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ou=jt.styles;function af(e){var t=e[0],n=e[1],r=e.slice(4),i=Id(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(fr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(fr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var aE={found:!1,width:512,height:512};function oE(e,t){!B0&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function of(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=qn()),new Promise(function(r,i){if(bn("missingIconAbstract"),n==="fa"){var a=n1(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ou[t]&&Ou[t][e]){var o=Ou[t][e];return r(af(o))}oE(e,t),r(D(D({},aE),{},{icon:j.showMissingIcons&&e?bn("missingIconAbstract")||{}:{}}))})}var Qm=function(){},lf=j.measurePerformance&&wo&&wo.mark&&wo.measure?wo:{mark:Qm,measure:Qm},Yi='FA "6.3.0"',lE=function(t){return lf.mark("".concat(Yi," ").concat(t," begins")),function(){return i1(t)}},i1=function(t){lf.mark("".concat(Yi," ").concat(t," ends")),lf.measure("".concat(Yi," ").concat(t),"".concat(Yi," ").concat(t," begins"),"".concat(Yi," ").concat(t," ends"))},Ud={begin:lE,end:i1},Go=function(){};function Xm(e){var t=e.getAttribute?e.getAttribute(Sr):null;return typeof t=="string"}function sE(e){var t=e.getAttribute?e.getAttribute(_d):null,n=e.getAttribute?e.getAttribute($d):null;return t&&n}function uE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function cE(){if(j.autoReplaceSvg===!0)return Ko.replace;var e=Ko[j.autoReplaceSvg];return e||Ko.replace}function fE(e){return xe.createElementNS("http://www.w3.org/2000/svg",e)}function dE(e){return xe.createElement(e)}function a1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fE:dE:n;if(typeof e=="string")return xe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(a1(o,{ceFn:r}))}),i}function pE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ko={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(a1(i),n)}),n.getAttribute(Sr)===null&&j.keepOriginalSource){var r=xe.createComment(pE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ld(n).indexOf(j.replacementClass))return Ko.replace(t);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===j.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return Ya(l)}).join(`
`);n.setAttribute(Sr,""),n.innerHTML=o}};function qm(e){e()}function o1(e,t){var n=typeof t=="function"?t:Go;if(e.length===0)n();else{var r=qm;j.mutateApproach===vS&&(r=Xn.requestAnimationFrame||qm),r(function(){var i=cE(),a=Ud.begin("mutate");e.map(i),a(),n()})}}var Bd=!1;function l1(){Bd=!0}function sf(){Bd=!1}var Ml=null;function Jm(e){if(Vm&&j.observeMutations){var t=e.treeCallback,n=t===void 0?Go:t,r=e.nodeCallback,i=r===void 0?Go:r,a=e.pseudoElementsCallback,o=a===void 0?Go:a,l=e.observeMutationsRoot,s=l===void 0?xe:l;Ml=new Vm(function(u){if(!Bd){var c=qn();xi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Xm(f.addedNodes[0])&&(j.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Xm(f.target)&&~CS.indexOf(f.attributeName))if(f.attributeName==="class"&&sE(f.target)){var p=Ts(Ld(f.target)),y=p.prefix,g=p.iconName;f.target.setAttribute(_d,y||c),g&&f.target.setAttribute($d,g)}else uE(f.target)&&i(f.target)})}}),En&&Ml.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mE(){Ml&&Ml.disconnect()}function hE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function gE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ts(Ld(e));return i.prefix||(i.prefix=qn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GS(i.prefix,e.innerText)||zd(i.prefix,ef(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vE(e){var t=xi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||_a()):(t["aria-hidden"]="true",t.focusable="false")),t}function yE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gE(e),r=n.iconName,i=n.prefix,a=n.rest,o=vE(e),l=nf("parseNodeAttributes",{},e),s=t.styleParser?hE(e):[];return D({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var wE=jt.styles;function s1(e){var t=j.autoReplaceSvg==="nest"?Zm(e,{styleParser:!1}):Zm(e);return~t.extra.classes.indexOf(H0)?bn("generateLayersText",e,t):bn("generateSvgReplacementMutation",e,t)}var Jn=new Set;Td.map(function(e){Jn.add("fa-".concat(e))});Object.keys(Na[we]).map(Jn.add.bind(Jn));Object.keys(Na[Ae]).map(Jn.add.bind(Jn));Jn=Ha(Jn);function eh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!En)return Promise.resolve();var n=xe.documentElement.classList,r=function(f){return n.add("".concat(Um,"-").concat(f))},i=function(f){return n.remove("".concat(Um,"-").concat(f))},a=j.autoFetchSvg?Jn:Td.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wE));a.includes("fa")||a.push("fa");var o=[".".concat(H0,":not([").concat(Sr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Sr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=xi(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=Ud.begin("onTree"),u=l.reduce(function(c,f){try{var p=s1(f);p&&c.push(p)}catch(y){B0||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){o1(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(p){s(),f(p)})})}function bE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;s1(e).then(function(n){n&&o1([n],t)})}function xE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:rf(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:rf(i||{})),e(r,D(D({},n),{},{mask:i}))}}var SE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Jt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,y=n.titleId,g=y===void 0?null:y,v=n.classes,b=v===void 0?[]:v,d=n.attributes,m=d===void 0?{}:d,w=n.styles,S=w===void 0?{}:w;if(t){var k=t.prefix,P=t.iconName,E=t.icon;return Ls(D({type:"icon"},t),function(){return Er("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(p?m["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(g||_a()):(m["aria-hidden"]="true",m.focusable="false")),Vd({icons:{main:af(E),mask:s?af(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:P,transform:D(D({},Jt),i),symbol:o,title:p,maskId:c,titleId:g,extra:{attributes:m,styles:S,classes:b}})})}},EE={mixout:function(){return{icon:xE(SE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eh,n.nodeCallback=bE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,a=n.callback,o=a===void 0?function(){}:a;return eh(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(y,g){Promise.all([of(i,l),c.iconName?of(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var b=Id(v,2),d=b[0],m=b[1];y([n,Vd({icons:{main:d,mask:m},prefix:l,iconName:i,transform:s,symbol:u,maskId:f,title:a,titleId:o,extra:p,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=_s(l);s.length>0&&(i.style=s);var u;return Dd(o)&&(u=bn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},CE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ls({type:"layer"},function(){Er("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(Ha(a)).join(" ")},children:o}]})}}}},kE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,f=c===void 0?{}:c;return Ls({type:"counter",content:n},function(){return Er("beforeDOMElementCreation",{content:n,params:r}),iE({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(Ha(l))}})})}}}},PE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Jt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,f=c===void 0?{}:c,p=r.styles,y=p===void 0?{}:p;return Ls({type:"text",content:n},function(){return Er("beforeDOMElementCreation",{content:n,params:r}),Km({content:n,transform:D(D({},Jt),a),title:l,extra:{attributes:f,styles:y,classes:["".concat(j.cssPrefix,"-layers-text")].concat(Ha(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(j0){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Km({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},OE=new RegExp('"',"ug"),th=[1105920,1112319];function AE(e){var t=e.replace(OE,""),n=VS(t,0),r=n>=th[0]&&n<=th[1],i=t.length===2?t[0]===t[1]:!1;return{value:ef(i?t[0]:t),isSecondary:r||i}}function nh(e,t){var n="".concat(gS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=xi(e.children),o=a.filter(function(E){return E.getAttribute(Zc)===t})[0],l=Xn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(xS),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?Ae:we,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ra[p][s[2].toLowerCase()]:SS[p][u],g=AE(f),v=g.value,b=g.isSecondary,d=s[0].startsWith("FontAwesome"),m=zd(y,v),w=m;if(d){var S=KS(v);S.iconName&&S.prefix&&(m=S.iconName,y=S.prefix)}if(m&&!b&&(!o||o.getAttribute(_d)!==y||o.getAttribute($d)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var k=yE(),P=k.extra;P.attributes[Zc]=t,of(m,y).then(function(E){var O=Vd(D(D({},k),{},{icons:{main:E,mask:jd()},prefix:y,iconName:w,extra:P,watchable:!0})),L=xe.createElement("svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=O.map(function(z){return Ya(z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function NE(e){return Promise.all([nh(e,"::before"),nh(e,"::after")])}function RE(e){return e.parentNode!==document.head&&!~yS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Zc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function rh(e){if(En)return new Promise(function(t,n){var r=xi(e.querySelectorAll("*")).filter(RE).map(NE),i=Ud.begin("searchPseudoElements");l1(),Promise.all(r).then(function(){i(),sf(),t()}).catch(function(){i(),sf(),n()})})}var IE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;j.searchPseudoElements&&rh(i)}}},ih=!1,FE={mixout:function(){return{dom:{unwatch:function(){l1(),ih=!0}}}},hooks:function(){return{bootstrap:function(){Jm(nf("mutationObserverCallbacks",{}))},noAuto:function(){mE()},watch:function(n){var r=n.observeMutationsRoot;ih?sf():Jm(nf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ah=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},_E={mixout:function(){return{parse:{transform:function(n){return ah(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ah(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:f,path:p};return{tag:"g",attributes:D({},y.outer),children:[{tag:"g",attributes:D({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),y.path)}]}]}}}},Au={x:0,y:0,width:"100%",height:"100%"};function oh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $E(e){return e.tag==="g"?e.children:[e]}var TE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ts(i.split(" ").map(function(o){return o.trim()})):jd();return a.prefix||(a.prefix=qn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,f=o.width,p=o.icon,y=_S({transform:s,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:D(D({},Au),{},{fill:"white"})},v=c.children?{children:c.children.map(oh)}:{},b={tag:"g",attributes:D({},y.inner),children:[oh(D({tag:c.tag,attributes:D(D({},c.attributes),y.path)},v))]},d={tag:"g",attributes:D({},y.outer),children:[b]},m="mask-".concat(l||_a()),w="clip-".concat(l||_a()),S={tag:"mask",attributes:D(D({},Au),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,d]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:$E(p)},S]};return r.push(k,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(m,")")},Au)}),{children:r,attributes:i}}}},LE={provides:function(t){var n=!1;Xn.matchMedia&&(n=Xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:D(D({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},DE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},ME=[LS,EE,CE,kE,PE,IE,FE,_E,TE,LE,DE];qS(ME,{mixoutsTo:kt});kt.noAuto;kt.config;kt.library;kt.dom;var uf=kt.parse;kt.findIconDefinition;kt.toHtml;var zE=kt.icon;kt.layer;kt.text;kt.counter;var J={},jE={get exports(){return J},set exports(e){J=e}},VE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",UE=VE,BE=UE;function u1(){}function c1(){}c1.resetWarningCache=u1;var HE=function(){function e(r,i,a,o,l,s){if(s!==BE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c1,resetWarningCache:u1};return n.PropTypes=n,n};jE.exports=HE();function lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lh(Object(n),!0).forEach(function(r){Gr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zl(e){return zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zl(e)}function Gr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function YE(e,t){if(e==null)return{};var n=WE(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cf(e){return GE(e)||KE(e)||QE(e)||XE()}function GE(e){if(Array.isArray(e))return ff(e)}function KE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function QE(e,t){if(e){if(typeof e=="string")return ff(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ff(e,t)}}function ff(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function XE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qE(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,y=e.inverse,g=e.border,v=e.listItem,b=e.flip,d=e.size,m=e.rotation,w=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":y,"fa-border":g,"fa-li":v,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Gr(t,"fa-".concat(d),typeof d<"u"&&d!==null),Gr(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),Gr(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Gr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(k){return S[k]?k:null}).filter(function(k){return k})}function JE(e){return e=e-0,e===e}function f1(e){return JE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ZE=["style"];function eC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=f1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[eC(i)]=a:t[i]=a,t},{})}function d1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return d1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=tC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[f1(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=YE(n,ZE);return i.attrs.style=Dn(Dn({},i.attrs.style),o),e.apply(void 0,[t.tag,Dn(Dn({},i.attrs),l)].concat(cf(r)))}var p1=!1;try{p1=!0}catch{}function nC(){if(!p1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sh(e){if(e&&zl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(uf.icon)return uf.icon(e);if(e===null)return null;if(e&&zl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Nu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Gr({},e,t):{}}var Xe=xn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=sh(n),c=Nu("classes",[].concat(cf(qE(e)),cf(a.split(" ")))),f=Nu("transform",typeof e.transform=="string"?uf.transform(e.transform):e.transform),p=Nu("mask",sh(r)),y=zE(u,Dn(Dn(Dn(Dn({},c),f),p),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!y)return nC("Could not find icon",u),null;var g=y.abstract,v={ref:t};return Object.keys(e).forEach(function(b){Xe.defaultProps.hasOwnProperty(b)||(v[b]=e[b])}),rC(g[0],v)});Xe.displayName="FontAwesomeIcon";Xe.propTypes={beat:J.bool,border:J.bool,beatFade:J.bool,bounce:J.bool,className:J.string,fade:J.bool,flash:J.bool,mask:J.oneOfType([J.object,J.array,J.string]),maskId:J.string,fixedWidth:J.bool,inverse:J.bool,flip:J.oneOf([!0,!1,"horizontal","vertical","both"]),icon:J.oneOfType([J.object,J.array,J.string]),listItem:J.bool,pull:J.oneOf(["right","left"]),pulse:J.bool,rotation:J.oneOf([0,90,180,270]),shake:J.bool,size:J.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:J.bool,spinPulse:J.bool,spinReverse:J.bool,symbol:J.oneOfType([J.bool,J.string]),title:J.string,titleId:J.string,transform:J.oneOfType([J.string,J.object]),swapOpacity:J.bool};Xe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rC=d1.bind(null,xn.createElement),iC={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},df={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},uh={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},aC={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Si=x.createContext({});function oC({children:e}){const[t,n]=x.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=x.useState(!1),a={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return h(Si.Provider,{value:a,children:e})}const lC=()=>{const[e,t]=x.useState(!1),{isLoggedIn:n,userProfile:r}=x.useContext(Si),i=()=>{t(!e),console.log(`Nav Open: ${e}`),console.log(`Cross: ${e}`)},a=()=>{Tl.remove("loggedIn"),navigate("/login")};return h(iS,{className:"main-nav",children:n?h(pn,{children:N("div",{className:"nav-bar",children:[h(rt,{className:"page",to:"/",activeclassname:"active",children:h("img",{className:"logo",src:aS,alt:"PantryPal Egg logo"})}),N("div",{className:"nav-item-container",children:[h(rt,{className:"page nav-item",to:"/search",children:"Search"}),h(rt,{className:"page nav-item",to:"/saved",children:"Saved"}),h(rt,{className:"page nav-item",to:"/mealPlanner",children:"Meal Planner"})]}),N("div",{className:"user-container",children:[h(rt,{className:"page nav-item ",to:"/login",onClick:a,children:"Logout"}),h(rt,{className:"page nav-item",to:"/profile",children:h(Xe,{icon:df,className:"userIcon"})})]}),N(rt,{className:e?"hamburger close":"hamburger",onClick:i,children:[h("span",{className:"meat"}),h("span",{className:"meat"}),h("span",{className:"meat"}),h("span",{className:"meat"})]}),h("nav",{className:e?"mobile-nav-container mobile-height":"mobile-nav-container",children:e&&N("nav",{className:"nav-width",children:[h(rt,{className:"mobile-nav toggleNav && 'active'",to:"/search",onClick:i,children:"Search"}),h(rt,{className:"mobile-nav",to:"/saved",onClick:i,children:"Saved"}),h(rt,{className:"mobile-nav",to:"/mealPlanner",onClick:i,children:"Meal Planner"}),h(rt,{className:"mobile-nav",to:"/login",onClick:a,children:"Logout"}),h(rt,{className:"page mobile-nav",to:"/profile",onClick:i,children:h(Xe,{icon:df,className:"userIcon mobile-nav"})})]})})]})}):h(pn,{})})},Hd="/assets/PantryPalAvo-64f88421.png";let Nr="#2C4001",sC="#F2E7AE",Ru="#F2F2F2";const uC=ot.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: ${Nr};

    .about-container{
        width: 85%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
        background: ${Ru};
        border-radius: 15px;
        border: 1px solid ${Nr};
        margin: 2em;
    }
    img {
        width: auto;
        height: 100%;
        max-height: 50vh;
    }
    .logo {
        margin: 1em auto;
        width: 50%;
    }
    p {
        margin: 0;
    }
    span {
        padding: 1em;
    }
    .linkContainer{
        display: flex;
        justify-content: center;
    }
    .linkItem{
        margin: 0 1em 1em;
        display: flex;
        justify-content: center;
        background: ${Nr};
        color: ${Ru};
        border: 1px solid ${Ru};
        padding: .5em;
        border-radius: 5px;
    }
    .linkItem:hover {
        text-decoration: none;
        color: ${Nr};
        background: ${sC};
        border: 1px solid ${Nr};
    }
    h1 {
        font-size: 40px;
        color: #90ac14;
        text-decoration: none;
        margin: 0 auto;
    }
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1em;
    }

    ul {
        padding: .5em;
        margin: 0;
    }
    li {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: .3em;
    }
    .fontIcon {
        padding: 0 .3em
    }
    a {
        text-decoration: none;
        color: ${Nr};
    }

    a:hover {
        text-decoration: underline;
    }

    .repo {
       display: flex;
       justify-content: center;
       align-items: center;
    }

    @media ${De.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${De.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${De.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${De.tablet} { 
        min-width: 425px;
        .about-container{
            max-width: 500px;
        }
        .logo{
            width: 40%;
        }
    }

`;var Ti={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},cC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const fC=()=>h(uC,{children:N("section",{className:"about-container",children:[h("img",{className:"logo",src:Hd,alt:"Pantry Pal Logo"}),N("section",{children:[h("p",{children:N("section",{className:"about",children:[h("p",{children:"This project was organized by Danny Thompson and Scott Thompson of Dallas Software Developers"}),h("span",{children:"It was developed by:"}),N("ul",{children:[h("li",{children:N("a",{href:"https://www.linkedin.com/in/jesusdoza/",target:"_blank",children:[h(Xe,{icon:Ti,className:"fontIcon"}),"Jesus Mendoza"]})}),h("li",{children:N("a",{href:"https://www.linkedin.com/in/damianpad/",target:"_blank",children:[h(Xe,{icon:Ti,className:"fontIcon"}),"Damian Padilla"]})}),h("li",{children:N("a",{href:"https://www.linkedin.com/in/amandapurcellperry/",target:"_blank",children:[h(Xe,{icon:Ti,className:"fontIcon"}),"Amanda Perry"]})}),h("li",{children:N("a",{href:"https://www.linkedin.com/in/walter-williams/",target:"_blank",children:[h(Xe,{icon:Ti,className:"fontIcon"}),"Walter Williams"]})})]}),N("span",{children:["Team Lead:"," ",N("a",{href:"https://www.linkedin.com/in/bethanyann/",target:"_blank",children:[h(Xe,{icon:Ti,className:"fontIcon"}),"Bethany Ann"]})]}),h("p",{children:'With Pantry Pal, you can bid farewell to the question, "What can I make with the ingredients I have?" This app empowers you to create delicious and satisfying recipes using the ingredients already available in your pantry. Simply input the ingredients you have on hand, and the app swiftly sifts through its comprehensive database to generate a personalized list of recipes that you can whip up in no time.'})]})}),N("div",{className:"linkContainer",children:[h(rt,{className:"page linkItem",to:"/signup",children:"SignUp"}),h(rt,{className:"page linkItem",to:"/login",children:"Login"})]}),N("a",{href:"https://github.com/jesusdoza/pantryPal",target:"_blank",className:"repo",children:[h(Xe,{icon:cC,className:"fontIcon"}),"Github Repo"]})]})]})});let rr="#2C4001",dC="#dae082",pC="#F2E7AE",Iu="#F2F2F2";const mC=ot.section`

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
        color: ${rr};
        margin: 0 auto;
    }

    .title h1{
        font-size: 1.6em;
        color: ${rr};
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
        border: 1px solid ${rr};
        padding: .5em;
        background: ${Iu};
        border-radius: 5px;
        color: #3c3b3b;
    }

    & form input:focus {
        background-color: ${pC};
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
        border: 1px solid ${rr};
        border-radius: 5px;
        padding: .5em;
        background: ${rr};
        color: ${Iu};
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    .signup-btn:hover {
        background: ${dC};
        color: ${rr};
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
    @media ${De.tablet} {
        .logo{
            width: 30%;
        }
        form{
            margin: 0 auto;
            width: 80%;
        }
    }
    @media ${De.laptop} {
        margin-top: 3em;
        .signup-container{
            background: ${Iu};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${rr};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
        .logo{
            width: 50%;
        }
`;function hC(){const e="http://localhost:4000",t=x.useRef(""),n=x.useRef(""),r=x.useRef(""),i=x.useRef("");let a=t.current.value,o=n.current.value,l=r.current.value,s=i.current.value;const[u,c]=x.useState(!1),[f,p]=x.useState([]),[y,g]=x.useState(!1),[v,b]=x.useState(!1),[d,m]=x.useState(!1),w=ds();function S(E){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(E)}function k(){let E=[];return!S(s)&&s&&(b(!0),E.push("email format invalid")),o!==l&&(m(!0),E.push("passwords do not match")),E.length>0?(c(!0),E):[]}async function P(){c(!1);const E=k();if(E.length>0){p(E);return}try{const O=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:a,password:o})});if(O.status==401)throw Error("Username and/or Email already exists");if(O.status!=201)throw Error(`server response error ${O.statusText}`)}catch(O){c(!0),p([O.message]);return}try{const O=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});if(O.status===200){const L=await O.json();Tl.set("loggedIn",{token:L.token,username:a})}else throw Error(O.statusText)}catch(O){c(!0),p([O.message]);return}w("/search")}return h(mC,{children:N("section",{className:"signup-container",children:[h("div",{children:h("img",{src:Hd,alt:"Pantry Pal Logo",className:"logo"})}),N("section",{className:"form-sect",children:[N("form",{action:"#",onSubmit:E=>{E.preventDefault(),P()},children:[N("div",{className:"title",children:[h("h1",{children:"Welcome to Pantry Pal!"}),h("h2",{children:"Sign Up Here"})]}),N("div",{className:"input-container",children:[v&&h("span",{className:"error-marker",children:"*"}),h("label",{className:"input-tag",htmlFor:"email"}),h("input",{placeholder:"Email",className:v?"error-container":"",ref:i,onChange:E=>{s=E.target.value,b(!1)},id:"email",type:"text",required:!0}),v&&h("span",{className:"error-marker",children:"*"})]}),N("div",{className:"input-container",children:[y&&h("span",{className:"error-marker",children:"*"}),h("label",{className:"input-tag",htmlFor:"username"}),h("input",{placeholder:"Username",className:y?"error-container":"",ref:t,onChange:E=>{a=E.target.value},id:"username",type:"text",required:!0}),y&&h("span",{className:"error-marker",children:"*"})]}),N("div",{className:"input-container",children:[d&&h("span",{className:"error-marker",children:"*"}),h("label",{className:"input-tag",htmlFor:"password"}),h("input",{placeholder:"Password",className:d?"error-container":"",ref:n,onChange:E=>{o=E.target.value,m(!1)},id:"password",type:"password",required:!0}),d&&h("span",{className:"error-marker",children:"*"})]}),N("div",{className:"input-container",children:[d&&h("span",{className:"error-marker",children:"*"}),h("label",{htmlFor:"confirmpassword",className:"input-tag"}),h("input",{placeholder:"Confirm Password",className:d?"error-container":"",ref:r,onChange:E=>{l=E.target.value,m(!1)},id:"confirmpassword",type:"password",required:!0}),d&&h("span",{className:"error-marker",children:"*"})]}),h("div",{className:"submit-btn-container",children:h("button",{className:"signup-btn",children:"Sign Up"})})]}),u&&h("section",{className:"error-container error-desc",children:N("div",{children:[h("h4",{children:"Please correct following errors"}),h("ul",{children:f.map((E,O)=>h("li",{children:E},O))})]})})]}),N("div",{className:"goto-btn",children:[h("span",{children:"Already have an account?"}),h(rt,{className:"page",to:"/login",children:"Sign in"})]})]})})}let Li="#2C4001",gC="#F2E7AE";const vC=ot.section`
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
        color: ${Li};
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
        background-color: ${Li};
        color: #fff;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        border-radius: .5em;
        cursor: pointer;
        
        margin: .3em 0;
        border: 1px solid ${Li};
    }
    & .search-btn: hover {
        background: ${gC};
        color: ${Li};
        border: 1px solid ${Li};
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

    
`;function m1(e,t){return function(){return e.apply(t,arguments)}}const{toString:h1}=Object.prototype,{getPrototypeOf:Wd}=Object,Yd=(e=>t=>{const n=h1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=e=>(e=e.toLowerCase(),t=>Yd(t)===e),Ds=e=>t=>typeof t===e,{isArray:Ei}=Array,$a=Ds("undefined");function yC(e){return e!==null&&!$a(e)&&e.constructor!==null&&!$a(e.constructor)&&Zn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const g1=Cn("ArrayBuffer");function wC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&g1(e.buffer),t}const bC=Ds("string"),Zn=Ds("function"),v1=Ds("number"),Gd=e=>e!==null&&typeof e=="object",xC=e=>e===!0||e===!1,Qo=e=>{if(Yd(e)!=="object")return!1;const t=Wd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},SC=Cn("Date"),EC=Cn("File"),CC=Cn("Blob"),kC=Cn("FileList"),PC=e=>Gd(e)&&Zn(e.pipe),OC=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||h1.call(e)===t||Zn(e.toString)&&e.toString()===t)},AC=Cn("URLSearchParams"),NC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ga(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ei(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function y1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const w1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),b1=e=>!$a(e)&&e!==w1;function pf(){const{caseless:e}=b1(this)&&this||{},t={},n=(r,i)=>{const a=e&&y1(t,i)||i;Qo(t[a])&&Qo(r)?t[a]=pf(t[a],r):Qo(r)?t[a]=pf({},r):Ei(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ga(arguments[r],n);return t}const RC=(e,t,n,{allOwnKeys:r}={})=>(Ga(t,(i,a)=>{n&&Zn(i)?e[a]=m1(i,n):e[a]=i},{allOwnKeys:r}),e),IC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FC=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_C=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&Wd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$C=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},TC=e=>{if(!e)return null;if(Ei(e))return e;let t=e.length;if(!v1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},LC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Wd(Uint8Array)),DC=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},MC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zC=Cn("HTMLFormElement"),jC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ch=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),VC=Cn("RegExp"),x1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ga(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},UC=e=>{x1(e,(t,n)=>{if(Zn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Zn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},BC=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Ei(e)?r(e):r(String(e).split(t)),n},HC=()=>{},WC=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Fu="abcdefghijklmnopqrstuvwxyz",fh="0123456789",S1={DIGIT:fh,ALPHA:Fu,ALPHA_DIGIT:Fu+Fu.toUpperCase()+fh},YC=(e=16,t=S1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function GC(e){return!!(e&&Zn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const KC=e=>{const t=new Array(10),n=(r,i)=>{if(Gd(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Ei(r)?[]:{};return Ga(r,(o,l)=>{const s=n(o,i+1);!$a(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},A={isArray:Ei,isArrayBuffer:g1,isBuffer:yC,isFormData:OC,isArrayBufferView:wC,isString:bC,isNumber:v1,isBoolean:xC,isObject:Gd,isPlainObject:Qo,isUndefined:$a,isDate:SC,isFile:EC,isBlob:CC,isRegExp:VC,isFunction:Zn,isStream:PC,isURLSearchParams:AC,isTypedArray:LC,isFileList:kC,forEach:Ga,merge:pf,extend:RC,trim:NC,stripBOM:IC,inherits:FC,toFlatObject:_C,kindOf:Yd,kindOfTest:Cn,endsWith:$C,toArray:TC,forEachEntry:DC,matchAll:MC,isHTMLForm:zC,hasOwnProperty:ch,hasOwnProp:ch,reduceDescriptors:x1,freezeMethods:UC,toObjectSet:BC,toCamelCase:jC,noop:HC,toFiniteNumber:WC,findKey:y1,global:w1,isContextDefined:b1,ALPHABET:S1,generateString:YC,isSpecCompliantForm:GC,toJSONObject:KC};function re(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}A.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const E1=re.prototype,C1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{C1[e]={value:e}});Object.defineProperties(re,C1);Object.defineProperty(E1,"isAxiosError",{value:!0});re.from=(e,t,n,r,i,a)=>{const o=Object.create(E1);return A.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),re.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const QC=null;function mf(e){return A.isPlainObject(e)||A.isArray(e)}function k1(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function dh(e,t,n){return e?e.concat(t).map(function(i,a){return i=k1(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function XC(e){return A.isArray(e)&&!e.some(mf)}const qC=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function Ms(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!A.isUndefined(b[v])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(A.isDate(g))return g.toISOString();if(!s&&A.isBlob(g))throw new re("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(g)||A.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,b){let d=g;if(g&&!b&&typeof g=="object"){if(A.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(A.isArray(g)&&XC(g)||(A.isFileList(g)||A.endsWith(v,"[]"))&&(d=A.toArray(g)))return v=k1(v),d.forEach(function(w,S){!(A.isUndefined(w)||w===null)&&t.append(o===!0?dh([v],S,a):o===null?v:v+"[]",u(w))}),!1}return mf(g)?!0:(t.append(dh(b,v,a),u(g)),!1)}const f=[],p=Object.assign(qC,{defaultVisitor:c,convertValue:u,isVisitable:mf});function y(g,v){if(!A.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),A.forEach(g,function(d,m){(!(A.isUndefined(d)||d===null)&&i.call(t,d,A.isString(m)?m.trim():m,v,p))===!0&&y(d,v?v.concat(m):[m])}),f.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ph(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Kd(e,t){this._pairs=[],e&&Ms(e,this,t)}const P1=Kd.prototype;P1.append=function(t,n){this._pairs.push([t,n])};P1.toString=function(t){const n=t?function(r){return t.call(this,r,ph)}:ph;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function JC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function O1(e,t,n){if(!t)return e;const r=n&&n.encode||JC,i=n&&n.serialize;let a;if(i?a=i(t,n):a=A.isURLSearchParams(t)?t.toString():new Kd(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class ZC{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const mh=ZC,A1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ek=typeof URLSearchParams<"u"?URLSearchParams:Kd,tk=typeof FormData<"u"?FormData:null,nk=typeof Blob<"u"?Blob:null,rk=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ik=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zt={isBrowser:!0,classes:{URLSearchParams:ek,FormData:tk,Blob:nk},isStandardBrowserEnv:rk,isStandardBrowserWebWorkerEnv:ik,protocols:["http","https","file","blob","url","data"]};function ak(e,t){return Ms(e,new Zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Zt.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function ok(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lk(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function N1(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&A.isArray(i)?i.length:o,s?(A.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!A.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&A.isArray(i[o])&&(i[o]=lk(i[o])),!l)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,i)=>{t(ok(r),i,n,0)}),n}return null}const sk={"Content-Type":void 0};function uk(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const zs={transitional:A1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=A.isObject(t);if(a&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return i&&i?JSON.stringify(N1(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ak(t,this.formSerializer).toString();if((l=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ms(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),uk(t)):t}],transformResponse:[function(t){const n=this.transitional||zs.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&A.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?re.from(l,re.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};A.forEach(["delete","get","head"],function(t){zs.headers[t]={}});A.forEach(["post","put","patch"],function(t){zs.headers[t]=A.merge(sk)});const Qd=zs,ck=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fk=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&ck[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},hh=Symbol("internals");function Di(e){return e&&String(e).trim().toLowerCase()}function Xo(e){return e===!1||e==null?e:A.isArray(e)?e.map(Xo):String(e)}function dk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function pk(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function _u(e,t,n,r,i){if(A.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function mk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function hk(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class js{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=Di(s);if(!c)throw new Error("header name must be a non-empty string");const f=A.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||s]=Xo(l))}const o=(l,s)=>A.forEach(l,(u,c)=>a(u,c,s));return A.isPlainObject(t)||t instanceof this.constructor?o(t,n):A.isString(t)&&(t=t.trim())&&!pk(t)?o(fk(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Di(t),t){const r=A.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return dk(i);if(A.isFunction(n))return n.call(this,i,r);if(A.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Di(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_u(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=Di(o),o){const l=A.findKey(r,o);l&&(!n||_u(r,r[l],l,n))&&(delete r[l],i=!0)}}return A.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||_u(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return A.forEach(this,(i,a)=>{const o=A.findKey(r,a);if(o){n[o]=Xo(i),delete n[a];return}const l=t?mk(a):String(a).trim();l!==a&&delete n[a],n[l]=Xo(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[hh]=this[hh]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=Di(o);r[l]||(hk(i,o),r[l]=!0)}return A.isArray(t)?t.forEach(a):a(t),this}}js.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.freezeMethods(js.prototype);A.freezeMethods(js);const fn=js;function $u(e,t){const n=this||Qd,r=t||n,i=fn.from(r.headers);let a=r.data;return A.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function R1(e){return!!(e&&e.__CANCEL__)}function Ka(e,t,n){re.call(this,e??"canceled",re.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(Ka,re,{__CANCEL__:!0});function gk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new re("Request failed with status code "+n.status,[re.ERR_BAD_REQUEST,re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vk=Zt.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),A.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),A.isString(a)&&s.push("path="+a),A.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function yk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function I1(e,t){return e&&!yk(t)?wk(e,t):t}const bk=Zt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=A.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function xk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Sk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let f=a,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const y=c&&u-c;return y?Math.round(p*1e3/y):void 0}}function gh(e,t){let n=0;const r=Sk(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const Ek=typeof XMLHttpRequest<"u",Ck=Ek&&function(e){return new Promise(function(n,r){let i=e.data;const a=fn.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}A.isFormData(i)&&(Zt.isStandardBrowserEnv||Zt.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(y+":"+g))}const c=I1(e.baseURL,e.url);u.open(e.method.toUpperCase(),O1(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const y=fn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};gk(function(d){n(d),s()},function(d){r(d),s()},v),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new re("Request aborted",re.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new re("Network Error",re.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||A1;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new re(g,v.clarifyTimeoutError?re.ETIMEDOUT:re.ECONNABORTED,e,u)),u=null},Zt.isStandardBrowserEnv){const y=(e.withCredentials||bk(c))&&e.xsrfCookieName&&vk.read(e.xsrfCookieName);y&&a.set(e.xsrfHeaderName,y)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&A.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),A.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",gh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",gh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{u&&(r(!y||y.type?new Ka(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const p=xk(c);if(p&&Zt.protocols.indexOf(p)===-1){r(new re("Unsupported protocol "+p+":",re.ERR_BAD_REQUEST,e));return}u.send(i||null)})},qo={http:QC,xhr:Ck};A.forEach(qo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const kk={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=A.isString(n)?qo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new re(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(A.hasOwnProp(qo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!A.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:qo};function Tu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ka(null,e)}function vh(e){return Tu(e),e.headers=fn.from(e.headers),e.data=$u.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),kk.getAdapter(e.adapter||Qd.adapter)(e).then(function(r){return Tu(e),r.data=$u.call(e,e.transformResponse,r),r.headers=fn.from(r.headers),r},function(r){return R1(r)||(Tu(e),r&&r.response&&(r.response.data=$u.call(e,e.transformResponse,r.response),r.response.headers=fn.from(r.response.headers))),Promise.reject(r)})}const yh=e=>e instanceof fn?e.toJSON():e;function fi(e,t){t=t||{};const n={};function r(u,c,f){return A.isPlainObject(u)&&A.isPlainObject(c)?A.merge.call({caseless:f},u,c):A.isPlainObject(c)?A.merge({},c):A.isArray(c)?c.slice():c}function i(u,c,f){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function a(u,c){if(!A.isUndefined(c))return r(void 0,c)}function o(u,c){if(A.isUndefined(c)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(yh(u),yh(c),!0)};return A.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=s[c]||i,p=f(e[c],t[c],c);A.isUndefined(p)&&f!==l||(n[c]=p)}),n}const F1="1.3.4",Xd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const wh={};Xd.transitional=function(t,n,r){function i(a,o){return"[Axios v"+F1+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new re(i(o," has been removed"+(n?" in "+n:"")),re.ERR_DEPRECATED);return n&&!wh[o]&&(wh[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function Pk(e,t,n){if(typeof e!="object")throw new re("options must be an object",re.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new re("option "+a+" must be "+s,re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new re("Unknown option "+a,re.ERR_BAD_OPTION)}}const hf={assertOptions:Pk,validators:Xd},Nn=hf.validators;class jl{constructor(t){this.defaults=t,this.interceptors={request:new mh,response:new mh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=fi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&hf.assertOptions(r,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),i!==void 0&&hf.assertOptions(i,{encode:Nn.function,serialize:Nn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&A.merge(a.common,a[n.method]),o&&A.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=fn.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,f=0,p;if(!s){const g=[vh.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),p=g.length,c=Promise.resolve(n);f<p;)c=c.then(g[f++],g[f++]);return c}p=l.length;let y=n;for(f=0;f<p;){const g=l[f++],v=l[f++];try{y=g(y)}catch(b){v.call(this,b);break}}try{c=vh.call(this,y)}catch(g){return Promise.reject(g)}for(f=0,p=u.length;f<p;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=fi(this.defaults,t);const n=I1(t.baseURL,t.url);return O1(n,t.params,t.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(t){jl.prototype[t]=function(n,r){return this.request(fi(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(fi(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}jl.prototype[t]=n(),jl.prototype[t+"Form"]=n(!0)});const Jo=jl;class qd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new Ka(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new qd(function(i){t=i}),cancel:t}}}const Ok=qd;function Ak(e){return function(n){return e.apply(null,n)}}function Nk(e){return A.isObject(e)&&e.isAxiosError===!0}const gf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gf).forEach(([e,t])=>{gf[t]=e});const Rk=gf;function _1(e){const t=new Jo(e),n=m1(Jo.prototype.request,t);return A.extend(n,Jo.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return _1(fi(e,i))},n}const je=_1(Qd);je.Axios=Jo;je.CanceledError=Ka;je.CancelToken=Ok;je.isCancel=R1;je.VERSION=F1;je.toFormData=Ms;je.AxiosError=re;je.Cancel=je.CanceledError;je.all=function(t){return Promise.all(t)};je.spread=Ak;je.isAxiosError=Nk;je.mergeConfig=fi;je.AxiosHeaders=fn;je.formToJSON=e=>N1(A.isHTMLForm(e)?new FormData(e):e);je.HttpStatusCode=Rk;je.default=je;const Vs=je;let an="#2C4001",bh="#F2E7AE",xh="#59320F",Ik="#F2F2F2";const Fk=ot.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${an};


.container {
  background-color: ${Ik};
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
    background-color: ${an};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${an};

  }
  .try_btn:hover {
    background: ${bh};
    color: ${an};
    border: 1px solid ${an};
   
  }
  .save_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${xh};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${xh};
  }
  .save_btn: hover {
    background: ${bh};
    color: ${an};
    border: 1px solid ${an};
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
      color: ${an};
    }
    p {
      color: color: ${an};
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


`,_k=(e,t)=>{console.log("username",t);const n="http://localhost:4000";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},$k=(e,t)=>{const n="http://localhost:4000";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!");else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},$1=({recipe:e,showDelete:t})=>{const n=a=>a.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=x.useContext(Si);return h(Fk,{children:N("div",{className:"container",children:[h("img",{src:e.image,alt:e.title}),N("div",{className:"card_body",children:[h("h1",{children:e.title}),N("p",{children:[n(e.summary),"Credit: ",e.creditText]}),N("div",{className:"card_footer",children:[N("div",{className:"card_footer_container",children:[h("h2",{children:"Dish type:"}),N("p",{children:[" ",e.dishTypes[0]]})]}),N("div",{className:"card_footer_container",children:[h("h2",{children:"Servings:"}),N("p",{children:[" ",e.servings]})]}),N("div",{className:"card_footer_container",children:[h("h2",{children:"Total Time:"}),h("p",{children:e.readyInMinutes})]})]}),N("div",{className:"btn-container",children:[h(y0,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&h("button",{className:"save_btn",onClick:()=>_k(e,i.username),children:"Save it!"}),t&&h("button",{className:"delete_btn",onClick:()=>$k(e,i.username),children:"Delete Recipe"})]})]})]})})},Tk=ot.section`
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
`;function T1(){return h(Tk,{children:h("span",{className:"loader"})})}let Mi="#2C4001",Sh="#F2E7AE",Lk="#F2F2F2";const Dk=ot.section`
    color: ${Mi};
    background-color: ${Sh};
    width: 100%;
    display: flex;
    flex-direction: column;

    //FILTER SECTION
    h2 {
        margin: 0;
        font-size: 1.2rem;
    }
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
        padding: 0.2em 0.4em;
        border-radius: 0.5em;
        text-align: center;
        background-color: ${Mi};
        color: ${Lk};
        border: 1px solid ${Mi};
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
        background-color: ${Sh};
        color: ${Mi};
        border: 1px solid ${Mi};
    }
    .filter-container {
        padding: 3%;
        font-size: 1.2rem;
    }
    .filter-row h2 {
        margin: 0.3em;
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
        margin: 0.3em;
    }

    @media (min-width: 768px) {
    }
    @media (min-width: 900px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1600px) {
    }
`;function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function Cr(e){return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cr(e)}function Mk(e,t){if(Cr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Cr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L1(e){var t=Mk(e,"string");return Cr(t)==="symbol"?t:String(t)}function Gi(e,t,n){return t=L1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eh(Object(n),!0).forEach(function(r){Gi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ch(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L1(r.key),r)}}function jk(e,t,n){return t&&Ch(e.prototype,t),n&&Ch(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function vf(e,t){return vf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},vf(e,t)}function Vk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vf(e,t)}function Vl(e){return Vl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Vl(e)}function Uk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Hk(e,t){if(t&&(Cr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bk(e)}function Wk(e){var t=Uk();return function(){var r=Vl(e),i;if(t){var a=Vl(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Hk(this,i)}}function yf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yk(e){if(Array.isArray(e))return yf(e)}function Gk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D1(e,t){if(e){if(typeof e=="string")return yf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(e,t)}}function Kk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function la(e){return Yk(e)||Gk(e)||D1(e)||Kk()}function Qk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Xk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var qk=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xk(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Qk(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Ul="-moz-",ue="-webkit-",M1="comm",Jd="rule",Zd="decl",Jk="@import",z1="@keyframes",Zk="@layer",e4=Math.abs,Us=String.fromCharCode,t4=Object.assign;function n4(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function j1(e){return e.trim()}function r4(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function wf(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function Ta(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function ep(e){return e.length}function Ao(e,t){return t.push(e),e}function i4(e,t){return e.map(t).join("")}var Bs=1,di=1,V1=0,gt=0,Fe=0,Ci="";function Hs(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Bs,column:di,length:o,return:""}}function zi(e,t){return t4(Hs("",null,null,"",null,null,0),e,{length:-e.length},t)}function a4(){return Fe}function o4(){return Fe=gt>0?Qe(Ci,--gt):0,di--,Fe===10&&(di=1,Bs--),Fe}function bt(){return Fe=gt<V1?Qe(Ci,gt++):0,di++,Fe===10&&(di=1,Bs++),Fe}function nn(){return Qe(Ci,gt)}function Zo(){return gt}function Qa(e,t){return Ta(Ci,e,t)}function La(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U1(e){return Bs=di=1,V1=Kt(Ci=e),gt=0,[]}function B1(e){return Ci="",e}function el(e){return j1(Qa(gt-1,bf(e===91?e+2:e===40?e+1:e)))}function l4(e){for(;(Fe=nn())&&Fe<33;)bt();return La(e)>2||La(Fe)>3?"":" "}function s4(e,t){for(;--t&&bt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Qa(e,Zo()+(t<6&&nn()==32&&bt()==32))}function bf(e){for(;bt();)switch(Fe){case e:return gt;case 34:case 39:e!==34&&e!==39&&bf(Fe);break;case 40:e===41&&bf(e);break;case 92:bt();break}return gt}function u4(e,t){for(;bt()&&e+Fe!==47+10;)if(e+Fe===42+42&&nn()===47)break;return"/*"+Qa(t,gt-1)+"*"+Us(e===47?e:bt())}function c4(e){for(;!La(nn());)bt();return Qa(e,gt)}function f4(e){return B1(tl("",null,null,null,[""],e=U1(e),0,[0],e))}function tl(e,t,n,r,i,a,o,l,s){for(var u=0,c=0,f=o,p=0,y=0,g=0,v=1,b=1,d=1,m=0,w="",S=i,k=a,P=r,E=w;b;)switch(g=m,m=bt()){case 40:if(g!=108&&Qe(E,f-1)==58){wf(E+=ce(el(m),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:E+=el(m);break;case 9:case 10:case 13:case 32:E+=l4(g);break;case 92:E+=s4(Zo()-1,7);continue;case 47:switch(nn()){case 42:case 47:Ao(d4(u4(bt(),Zo()),t,n),s);break;default:E+="/"}break;case 123*v:l[u++]=Kt(E)*d;case 125*v:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+c:d==-1&&(E=ce(E,/\f/g,"")),y>0&&Kt(E)-f&&Ao(y>32?Ph(E+";",r,n,f-1):Ph(ce(E," ","")+";",r,n,f-2),s);break;case 59:E+=";";default:if(Ao(P=kh(E,t,n,u,c,i,l,w,S=[],k=[],f),a),m===123)if(c===0)tl(E,t,P,P,S,a,f,l,k);else switch(p===99&&Qe(E,3)===110?100:p){case 100:case 108:case 109:case 115:tl(e,P,P,r&&Ao(kh(e,P,P,0,0,i,l,w,i,S=[],f),k),i,k,f,l,r?S:k);break;default:tl(E,P,P,P,[""],k,0,l,k)}}u=c=y=0,v=d=1,w=E="",f=o;break;case 58:f=1+Kt(E),y=g;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&o4()==125)continue}switch(E+=Us(m),m*v){case 38:d=c>0?1:(E+="\f",-1);break;case 44:l[u++]=(Kt(E)-1)*d,d=1;break;case 64:nn()===45&&(E+=el(bt())),p=nn(),c=f=Kt(w=E+=c4(Zo())),m++;break;case 45:g===45&&Kt(E)==2&&(v=0)}}return a}function kh(e,t,n,r,i,a,o,l,s,u,c){for(var f=i-1,p=i===0?a:[""],y=ep(p),g=0,v=0,b=0;g<r;++g)for(var d=0,m=Ta(e,f+1,f=e4(v=o[g])),w=e;d<y;++d)(w=j1(v>0?p[d]+" "+m:ce(m,/&\f/g,p[d])))&&(s[b++]=w);return Hs(e,t,n,i===0?Jd:l,s,u,c)}function d4(e,t,n){return Hs(e,t,n,M1,Us(a4()),Ta(e,2,-2),0)}function Ph(e,t,n,r){return Hs(e,t,n,Zd,Ta(e,0,r),Ta(e,r+1,-1),r)}function ti(e,t){for(var n="",r=ep(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function p4(e,t,n,r){switch(e.type){case Zk:if(e.children.length)break;case Jk:case Zd:return e.return=e.return||e.value;case M1:return"";case z1:return e.return=e.value+"{"+ti(e.children,r)+"}";case Jd:e.value=e.props.join(",")}return Kt(n=ti(e.children,r))?e.return=e.value+"{"+n+"}":""}function m4(e){var t=ep(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function h4(e){return function(t){t.root||(t=t.return)&&e(t)}}var g4=function(t,n,r){for(var i=0,a=0;i=a,a=nn(),i===38&&a===12&&(n[r]=1),!La(a);)bt();return Qa(t,gt)},v4=function(t,n){var r=-1,i=44;do switch(La(i)){case 0:i===38&&nn()===12&&(n[r]=1),t[r]+=g4(gt-1,n,r);break;case 2:t[r]+=el(i);break;case 4:if(i===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Us(i)}while(i=bt());return t},y4=function(t,n){return B1(v4(U1(t),n))},Oh=new WeakMap,w4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Oh.get(r))&&!i){Oh.set(t,!0);for(var a=[],o=y4(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[c]):l[c]+" "+o[s]}}},b4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function H1(e,t){switch(n4(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ul+e+nt+e+e;case 6828:case 4268:return ue+e+nt+e+e;case 6165:return ue+e+nt+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ue+e+nt+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+nt+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+nt+ce(e,"shrink","negative")+e;case 5292:return ue+e+nt+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+nt+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ul+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wf(e,"stretch")?H1(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,Kt(e)-3-(~wf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Qe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return ue+e+nt+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+nt+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+nt+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+nt+e+e}return e}var x4=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Zd:t.return=H1(t.value,t.length);break;case z1:return ti([zi(t,{value:ce(t.value,"@","@"+ue)})],i);case Jd:if(t.length)return i4(t.props,function(a){switch(r4(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ti([zi(t,{props:[ce(a,/:(read-\w+)/,":"+Ul+"$1")]})],i);case"::placeholder":return ti([zi(t,{props:[ce(a,/:(plac\w+)/,":"+ue+"input-$1")]}),zi(t,{props:[ce(a,/:(plac\w+)/,":"+Ul+"$1")]}),zi(t,{props:[ce(a,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},S4=[x4],E4=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var b=v.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||S4,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var b=v.getAttribute("data-emotion").split(" "),d=1;d<b.length;d++)a[b[d]]=!0;l.push(v)});var s,u=[w4,b4];{var c,f=[p4,h4(function(v){c.insert(v)})],p=m4(u.concat(i,f)),y=function(b){return ti(f4(b),p)};s=function(b,d,m,w){c=m,y(b?b+"{"+d.styles+"}":d.styles),w&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new qk({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return g.sheet.hydrate(l),g},C4=!0;function k4(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var W1=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||C4===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},P4=function(t,n,r){W1(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function O4(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var A4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},N4=/[A-Z]|^ms/g,R4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Y1=function(t){return t.charCodeAt(1)===45},Ah=function(t){return t!=null&&typeof t!="boolean"},Lu=b0(function(e){return Y1(e)?e:e.replace(N4,"-$&").toLowerCase()}),Nh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R4,function(r,i,a){return Qt={name:i,styles:a,next:Qt},i})}return A4[t]!==1&&!Y1(t)&&typeof n=="number"&&n!==0?n+"px":n};function Da(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Qt={name:n.name,styles:n.styles,next:Qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Qt={name:r.name,styles:r.styles,next:Qt},r=r.next;var i=n.styles+";";return i}return I4(e,t,n)}case"function":{if(e!==void 0){var a=Qt,o=n(e);return Qt=a,Da(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function I4(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Da(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":Ah(o)&&(r+=Lu(a)+":"+Nh(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Ah(o[l])&&(r+=Lu(a)+":"+Nh(a,o[l])+";");else{var s=Da(e,t,o);switch(a){case"animation":case"animationName":{r+=Lu(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var Rh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Qt,G1=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";Qt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=Da(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=Da(r,n,t[l]),i&&(a+=o[l]);Rh.lastIndex=0;for(var s="",u;(u=Rh.exec(a))!==null;)s+="-"+u[1];var c=O4(a)+s;return{name:c,styles:a,next:Qt}},F4=function(t){return t()},_4=ua["useInsertionEffect"]?ua["useInsertionEffect"]:!1,$4=_4||F4,tp={}.hasOwnProperty,K1=x.createContext(typeof HTMLElement<"u"?E4({key:"css"}):null);K1.Provider;var T4=function(t){return x.forwardRef(function(n,r){var i=x.useContext(K1);return t(n,i,r)})},L4=x.createContext({}),xf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D4=function(t,n){var r={};for(var i in n)tp.call(n,i)&&(r[i]=n[i]);return r[xf]=t,r},M4=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return W1(n,r,i),$4(function(){return P4(n,r,i)}),null},z4=T4(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[xf],a=[r],o="";typeof e.className=="string"?o=k4(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var l=G1(a,void 0,x.useContext(L4));o+=t.key+"-"+l.name;var s={};for(var u in e)tp.call(e,u)&&u!=="css"&&u!==xf&&(s[u]=e[u]);return s.ref=n,s.className=o,x.createElement(x.Fragment,null,x.createElement(M4,{cache:t,serialized:l,isStringTag:typeof i=="string"}),x.createElement(i,s))}),j4=z4,W=function(t,n){var r=arguments;if(n==null||!tp.call(n,"css"))return x.createElement.apply(void 0,r);var i=r.length,a=new Array(i);a[0]=j4,a[1]=D4(t,n);for(var o=2;o<i;o++)a[o]=r[o];return x.createElement.apply(null,a)};function np(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return G1(t)}var V4=function(){var t=np.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function U4(e){if(Array.isArray(e))return e}function B4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}function H4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dn(e,t){return U4(e)||B4(e,t)||D1(e,t)||H4()}function W4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Or(e,t){if(e==null)return{};var n=W4(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Y4(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function G4(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}const K4=["top","right","bottom","left"];K4.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function rn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Q1(e){return rn(e).getComputedStyle(e)}function X1(e){return e instanceof rn(e).Node}function q1(e){return X1(e)?(e.nodeName||"").toLowerCase():""}function rp(e){return e instanceof rn(e).HTMLElement}function pr(e){return e instanceof rn(e).Element}function Ih(e){return typeof ShadowRoot>"u"?!1:e instanceof rn(e).ShadowRoot||e instanceof ShadowRoot}function J1(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Q1(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Q4(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function X4(e){return["html","body","#document"].includes(q1(e))}const Bl=Math.round;function q4(e){const t=Q1(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=rp(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,l=Bl(n)!==a||Bl(r)!==o;return l&&(n=a,r=o),{width:n,height:r,fallback:l}}function Z1(e){return pr(e)?e:e.contextElement}const ey={x:1,y:1};function Du(e){const t=Z1(e);if(!rp(t))return ey;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=q4(t);let o=(a?Bl(n.width):n.width)/r,l=(a?Bl(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),l&&Number.isFinite(l)||(l=1),{x:o,y:l}}const Fh={x:0,y:0};function J4(e,t,n){var r,i;if(t===void 0&&(t=!0),!Q4())return Fh;const a=e?rn(e):window;return!n||t&&n!==a?Fh:{x:((r=a.visualViewport)==null?void 0:r.offsetLeft)||0,y:((i=a.visualViewport)==null?void 0:i.offsetTop)||0}}function _h(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=Z1(e);let o=ey;t&&(r?pr(r)&&(o=Du(r)):o=Du(e));const l=J4(a,n,r);let s=(i.left+l.x)/o.x,u=(i.top+l.y)/o.y,c=i.width/o.x,f=i.height/o.y;if(a){const p=rn(a),y=r&&pr(r)?rn(r):r;let g=p.frameElement;for(;g&&r&&y!==p;){const v=Du(g),b=g.getBoundingClientRect(),d=getComputedStyle(g);b.x+=(g.clientLeft+parseFloat(d.paddingLeft))*v.x,b.y+=(g.clientTop+parseFloat(d.paddingTop))*v.y,s*=v.x,u*=v.y,c*=v.x,f*=v.y,s+=b.x,u+=b.y,g=rn(g).frameElement}}return G4({width:c,height:f,x:s,y:u})}function Z4(e){return((X1(e)?e.ownerDocument:e.document)||window.document).documentElement}function e3(e){if(q1(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ih(e)&&e.host||Z4(e);return Ih(t)?t.host:t}function ty(e){const t=e3(e);return X4(t)?t.ownerDocument.body:rp(t)&&J1(t)?t:ty(t)}function nl(e,t){var n;t===void 0&&(t=[]);const r=ty(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=rn(r);return i?t.concat(a,a.visualViewport||[],J1(r)?r:[]):t.concat(r,nl(r))}function t3(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=!0,animationFrame:l=!1}=r,s=i||a?[...pr(e)?nl(e):e.contextElement?nl(e.contextElement):[],...nl(t)]:[];s.forEach(p=>{const y=!pr(p)&&p.toString().includes("V");!i||l&&!y||p.addEventListener("scroll",n,{passive:!0}),a&&p.addEventListener("resize",n)});let u,c=null;o&&(c=new ResizeObserver(()=>{n()}),pr(e)&&!l&&c.observe(e),pr(e)||!e.contextElement||l||c.observe(e.contextElement),c.observe(t));let f=l?_h(e):null;return l&&function p(){const y=_h(e);!f||y.x===f.x&&y.y===f.y&&y.width===f.width&&y.height===f.height||n(),f=y,u=requestAnimationFrame(p)}(),n(),()=>{var p;s.forEach(y=>{i&&y.removeEventListener("scroll",n),a&&y.removeEventListener("resize",n)}),(p=c)==null||p.disconnect(),c=null,l&&cancelAnimationFrame(u)}}var Sf=x.useLayoutEffect,n3=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Hl=function(){};function r3(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function i3(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[].concat(r);if(t&&e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&a.push("".concat(r3(e,o)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Wl=function(t){return p3(t)?t.filter(Boolean):Cr(t)==="object"&&t!==null?[t]:[]},ny=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Or(t,n3);return Y({},n)},Ne=function(t,n,r){var i=t.cx,a=t.getStyles,o=t.getClassNames,l=t.className;return{css:a(n,t),className:i(r??{},o(n,t),l)}};function Ws(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function a3(e){return Ws(e)?window.innerHeight:e.clientHeight}function ry(e){return Ws(e)?window.pageYOffset:e.scrollTop}function Yl(e,t){if(Ws(e)){window.scrollTo(0,t);return}e.scrollTop=t}function o3(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function l3(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function No(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Hl,i=ry(e),a=t-i,o=10,l=0;function s(){l+=o;var u=l3(l,i,a,n);Yl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function $h(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Yl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Yl(e,Math.max(t.offsetTop-i,0))}function s3(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Th(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function u3(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var iy=!1,c3={get passive(){return iy=!0}},Ro=typeof window<"u"?window:{};Ro.addEventListener&&Ro.removeEventListener&&(Ro.addEventListener("p",Hl,c3),Ro.removeEventListener("p",Hl,!1));var f3=iy;function d3(e){return e!=null}function p3(e){return Array.isArray(e)}function Ki(e,t,n){return e?t:n}var m3=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Object.entries(t).filter(function(o){var l=dn(o,1),s=l[0];return!r.includes(s)});return a.reduce(function(o,l){var s=dn(l,2),u=s[0],c=s[1];return o[u]=c,o},{})};function h3(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,a=e.shouldScroll,o=e.isFixedPosition,l=e.controlHeight,s=o3(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),f=c.height,p=n.getBoundingClientRect(),y=p.bottom,g=p.height,v=p.top,b=n.offsetParent.getBoundingClientRect(),d=b.top,m=o?window.innerHeight:a3(s),w=ry(s),S=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),P=d-k,E=m-v,O=P+w,L=f-w-v,z=y-m+w+S,se=w+v-k,X=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if(L>=g&&!o)return a&&No(s,z,X),{placement:"bottom",maxHeight:t};if(!o&&L>=r||o&&E>=r){a&&No(s,z,X);var ae=o?E-S:L-S;return{placement:"bottom",maxHeight:ae}}if(i==="auto"||o){var ee=t,q=o?P:O;return q>=r&&(ee=Math.min(q-S-l,t)),{placement:"top",maxHeight:ee}}if(i==="bottom")return a&&Yl(s,z),{placement:"bottom",maxHeight:t};break;case"top":if(P>=g)return{placement:"top",maxHeight:t};if(O>=g&&!o)return a&&No(s,se,X),{placement:"top",maxHeight:t};if(!o&&O>=r||o&&P>=r){var Ee=t;return(!o&&O>=r||o&&P>=r)&&(Ee=o?P-k:O-k),a&&No(s,se,X),{placement:"top",maxHeight:Ee}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function g3(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var ay=function(t){return t==="auto"?"bottom":t},v3=function(t,n){var r,i=t.placement,a=t.theme,o=a.borderRadius,l=a.spacing,s=a.colors;return Y((r={label:"menu"},Gi(r,g3(i),"100%"),Gi(r,"position","absolute"),Gi(r,"width","100%"),Gi(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},oy=x.createContext(null),y3=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,a=t.menuPlacement,o=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=x.useContext(oy)||{},c=u.setPortalPlacement,f=x.useRef(null),p=x.useState(i),y=dn(p,2),g=y[0],v=y[1],b=x.useState(null),d=dn(b,2),m=d[0],w=d[1],S=s.spacing.controlHeight;return Sf(function(){var k=f.current;if(k){var P=o==="fixed",E=l&&!P,O=h3({maxHeight:i,menuEl:k,minHeight:r,placement:a,shouldScroll:E,isFixedPosition:P,controlHeight:S});v(O.maxHeight),w(O.placement),c==null||c(O.placement)}},[i,a,o,l,r,c,S]),n({ref:f,placerProps:Y(Y({},t),{},{placement:m||ay(a),maxHeight:g})})},w3=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return W("div",H({},Ne(t,"menu",{menu:!0}),{ref:r},i),n)},b3=w3,x3=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Y({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},S3=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,a=t.isMulti;return W("div",H({},Ne(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:i},r),n)},ly=function(t,n){var r=t.theme,i=r.spacing.baseUnit,a=r.colors;return Y({textAlign:"center"},n?{}:{color:a.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},E3=ly,C3=ly,sy=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),r),n)};sy.defaultProps={children:"No options"};var uy=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),r),n)};uy.defaultProps={children:"Loading..."};var k3=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},P3=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,a=t.innerProps,o=t.menuPlacement,l=t.menuPosition,s=x.useRef(null),u=x.useRef(null),c=x.useState(ay(o)),f=dn(c,2),p=f[0],y=f[1],g=x.useMemo(function(){return{setPortalPlacement:y}},[]),v=x.useState(null),b=dn(v,2),d=b[0],m=b[1],w=x.useCallback(function(){if(i){var E=s3(i),O=l==="fixed"?0:window.pageYOffset,L=E[p]+O;(L!==(d==null?void 0:d.offset)||E.left!==(d==null?void 0:d.rect.left)||E.width!==(d==null?void 0:d.rect.width))&&m({offset:L,rect:E})}},[i,l,p,d==null?void 0:d.offset,d==null?void 0:d.rect.left,d==null?void 0:d.rect.width]);Sf(function(){w()},[w]);var S=x.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=t3(i,s.current,w,{elementResize:"ResizeObserver"in window}))},[i,w]);Sf(function(){S()},[S]);var k=x.useCallback(function(E){s.current=E,S()},[S]);if(!n&&l!=="fixed"||!d)return null;var P=W("div",H({ref:k},Ne(Y(Y({},t),{},{offset:d.offset,position:l,rect:d.rect}),"menuPortal",{"menu-portal":!0}),a),r);return W(oy.Provider,{value:g},n?rl.createPortal(P,n):P)},O3=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},A3=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,a=t.isRtl;return W("div",H({},Ne(t,"container",{"--is-disabled":i,"--is-rtl":a}),r),n)},N3=function(t,n){var r=t.theme.spacing,i=t.isMulti,a=t.hasValue,o=t.selectProps.controlShouldRenderValue;return Y({alignItems:"center",display:i&&a&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},R3=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,a=t.hasValue;return W("div",H({},Ne(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":a}),r),n)},I3=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},F3=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"indicatorsContainer",{indicators:!0}),r),n)},Lh,_3=["size"],$3={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},cy=function(t){var n=t.size,r=Or(t,_3);return W("svg",H({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:$3},r))},ip=function(t){return W(cy,H({size:20},t),W("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},fy=function(t){return W(cy,H({size:20},t),W("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},dy=function(t,n){var r=t.isFocused,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return Y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?o.neutral60:o.neutral20,padding:a*2,":hover":{color:r?o.neutral80:o.neutral40}})},T3=dy,L3=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||W(fy,null))},D3=dy,M3=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||W(ip,null))},z3=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing.baseUnit,o=i.colors;return Y({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?o.neutral10:o.neutral20,marginBottom:a*2,marginTop:a*2})},j3=function(t){var n=t.innerProps;return W("span",H({},n,Ne(t,"indicatorSeparator",{"indicator-separator":!0})))},V3=V4(Lh||(Lh=Y4([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),U3=function(t,n){var r=t.isFocused,i=t.size,a=t.theme,o=a.colors,l=a.spacing.baseUnit;return Y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?o.neutral60:o.neutral20,padding:l*2})},Mu=function(t){var n=t.delay,r=t.offset;return W("span",{css:np({animation:"".concat(V3," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},py=function(t){var n=t.innerProps,r=t.isRtl;return W("div",H({},Ne(t,"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),W(Mu,{delay:0,offset:r}),W(Mu,{delay:160,offset:!0}),W(Mu,{delay:320,offset:!r}))};py.defaultProps={size:4};var B3=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.theme,o=a.colors,l=a.borderRadius,s=a.spacing;return Y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?o.neutral5:o.neutral0,borderColor:r?o.neutral10:i?o.primary:o.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:i?o.primary:o.neutral30}})},H3=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.innerRef,o=t.innerProps,l=t.menuIsOpen;return W("div",H({ref:a},Ne(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),o),n)},W3=H3,Y3=["data"],G3=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},K3=function(t){var n=t.children,r=t.cx,i=t.getStyles,a=t.getClassNames,o=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,f=t.selectProps;return W("div",H({},Ne(t,"group",{group:!0}),s),W(o,H({},l,{selectProps:f,theme:c,getStyles:i,getClassNames:a,cx:r}),u),W("div",null,n))},Q3=function(t,n){var r=t.theme,i=r.colors,a=r.spacing;return Y({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},X3=function(t){var n=ny(t);n.data;var r=Or(n,Y3);return W("div",H({},Ne(t,"groupHeading",{"group-heading":!0}),r))},q3=K3,J3=["innerRef","isDisabled","isHidden","inputClassName"],Z3=function(t,n){var r=t.isDisabled,i=t.value,a=t.theme,o=a.spacing,l=a.colors;return Y(Y({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},eP),n?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:l.neutral80})},my={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},eP={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},my)},tP=function(t){return Y({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},my)},nP=function(t){var n=t.cx,r=t.value,i=ny(t),a=i.innerRef,o=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Or(i,J3);return W("div",H({},Ne(t,"input",{"input-container":!0}),{"data-value":r||""}),W("input",H({className:n({input:!0},s),ref:a,style:tP(l),disabled:o},u)))},rP=nP,iP=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,o=r.colors;return Y({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:o.neutral10,borderRadius:a/2,margin:i.baseUnit/2})},aP=function(t,n){var r=t.theme,i=r.borderRadius,a=r.colors,o=t.cropWithEllipsis;return Y({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},oP=function(t,n){var r=t.theme,i=r.spacing,a=r.borderRadius,o=r.colors,l=t.isFocused;return Y({alignItems:"center",display:"flex"},n?{}:{borderRadius:a/2,backgroundColor:l?o.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},hy=function(t){var n=t.children,r=t.innerProps;return W("div",r,n)},lP=hy,sP=hy;function uP(e){var t=e.children,n=e.innerProps;return W("div",H({role:"button"},n),t||W(ip,{size:14}))}var cP=function(t){var n=t.children,r=t.components,i=t.data,a=t.innerProps,o=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,f=r.Remove;return W(u,{data:i,innerProps:Y(Y({},Ne(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),a),selectProps:s},W(c,{data:i,innerProps:Y({},Ne(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),W(f,{data:i,innerProps:Y(Y({},Ne(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},fP=cP,dP=function(t,n){var r=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.theme,l=o.spacing,s=o.colors;return Y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:a?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:a?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?s.primary:s.primary50}})},pP=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,a=t.isSelected,o=t.innerRef,l=t.innerProps;return W("div",H({},Ne(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":a}),{ref:o,"aria-disabled":r},l),n)},mP=pP,hP=function(t,n){var r=t.theme,i=r.spacing,a=r.colors;return Y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:a.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},gP=function(t){var n=t.children,r=t.innerProps;return W("div",H({},Ne(t,"placeholder",{placeholder:!0}),r),n)},vP=gP,yP=function(t,n){var r=t.isDisabled,i=t.theme,a=i.spacing,o=i.colors;return Y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?o.neutral40:o.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},wP=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return W("div",H({},Ne(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},bP=wP,xP={ClearIndicator:M3,Control:W3,DropdownIndicator:L3,DownChevron:fy,CrossIcon:ip,Group:q3,GroupHeading:X3,IndicatorsContainer:F3,IndicatorSeparator:j3,Input:rP,LoadingIndicator:py,Menu:b3,MenuList:S3,MenuPortal:P3,LoadingMessage:uy,NoOptionsMessage:sy,MultiValue:fP,MultiValueContainer:lP,MultiValueLabel:sP,MultiValueRemove:uP,Option:mP,Placeholder:vP,SelectContainer:A3,SingleValue:bP,ValueContainer:R3},SP=function(t){return Y(Y({},xP),t.components)},Dh=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function EP(e,t){return!!(e===t||Dh(e)&&Dh(t))}function CP(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!EP(e[n],t[n]))return!1;return!0}function kP(e,t){t===void 0&&(t=CP);var n=null;function r(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var o=e.apply(this,i);return n={lastResult:o,lastArgs:i,lastThis:this},o}return r.clear=function(){n=null},r}var PP={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},OP=function(t){return W("span",H({css:PP},t))},Mh=OP,AP={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.isDisabled,a=t.tabSelectsValue,o=t.context;switch(o){case"menu":return"Use Up and Down to choose options".concat(i?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,a=t.labels,o=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return o?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,a=t.label,o=a===void 0?"":a,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=function(g,v){return g&&g.length?"".concat(g.indexOf(v)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(o," focused, ").concat(c(l,r),".");if(n==="menu"){var f=s?" disabled":"",p="".concat(u?"selected":"focused").concat(f);return"option ".concat(o," ").concat(p,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},NP=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,a=t.focusableOptions,o=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=s.ariaLiveMessages,f=s.getOptionLabel,p=s.inputValue,y=s.isMulti,g=s.isOptionDisabled,v=s.isSearchable,b=s.menuIsOpen,d=s.options,m=s.screenReaderStatus,w=s.tabSelectsValue,S=s["aria-label"],k=s["aria-live"],P=x.useMemo(function(){return Y(Y({},AP),c||{})},[c]),E=x.useMemo(function(){var ee="";if(n&&P.onChange){var q=n.option,Ee=n.options,ge=n.removedValue,F=n.removedValues,V=n.value,U=function(G){return Array.isArray(G)?null:G},te=ge||q||U(V),I=te?f(te):"",_=Ee||F||void 0,T=_?_.map(f):[],B=Y({isDisabled:te&&g(te,l),label:I,labels:T},n);ee=P.onChange(B)}return ee},[n,P,g,l,f]),O=x.useMemo(function(){var ee="",q=r||i,Ee=!!(r&&l&&l.includes(r));if(q&&P.onFocus){var ge={focused:q,label:f(q),isDisabled:g(q,l),isSelected:Ee,options:a,context:q===r?"menu":"value",selectValue:l};ee=P.onFocus(ge)}return ee},[r,i,f,g,P,a,l]),L=x.useMemo(function(){var ee="";if(b&&d.length&&P.onFilter){var q=m({count:a.length});ee=P.onFilter({inputValue:p,resultsMessage:q})}return ee},[a,p,b,P,d,m]),z=x.useMemo(function(){var ee="";if(P.guidance){var q=i?"value":b?"menu":"input";ee=P.guidance({"aria-label":S,context:q,isDisabled:r&&g(r,l),isMulti:y,isSearchable:v,tabSelectsValue:w})}return ee},[S,r,i,y,g,v,b,P,l,w]),se="".concat(O," ").concat(L," ").concat(z),X=W(x.Fragment,null,W("span",{id:"aria-selection"},E),W("span",{id:"aria-context"},se)),ae=(n==null?void 0:n.action)==="initial-input-focus";return W(x.Fragment,null,W(Mh,{id:u},ae&&X),W(Mh,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text"},o&&!ae&&X))},RP=NP,Ef=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],IP=new RegExp("["+Ef.map(function(e){return e.letters}).join("")+"]","g"),gy={};for(var zu=0;zu<Ef.length;zu++)for(var ju=Ef[zu],Vu=0;Vu<ju.letters.length;Vu++)gy[ju.letters[Vu]]=ju.base;var vy=function(t){return t.replace(IP,function(n){return gy[n]})},FP=kP(vy),zh=function(t){return t.replace(/^\s+|\s+$/g,"")},_P=function(t){return"".concat(t.label," ").concat(t.value)},$P=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Y({ignoreCase:!0,ignoreAccents:!0,stringify:_P,trim:!0,matchFrom:"any"},t),a=i.ignoreCase,o=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?zh(r):r,f=s?zh(l(n)):l(n);return a&&(c=c.toLowerCase(),f=f.toLowerCase()),o&&(c=FP(c),f=vy(f)),u==="start"?f.substr(0,c.length)===c:f.indexOf(c)>-1}},TP=["innerRef"];function LP(e){var t=e.innerRef,n=Or(e,TP),r=m3(n,"onExited","in","enter","exit","appear");return W("input",H({ref:t},r,{css:np({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var DP=function(t){t.preventDefault(),t.stopPropagation()};function MP(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,a=e.onTopLeave,o=x.useRef(!1),l=x.useRef(!1),s=x.useRef(0),u=x.useRef(null),c=x.useCallback(function(b,d){if(u.current!==null){var m=u.current,w=m.scrollTop,S=m.scrollHeight,k=m.clientHeight,P=u.current,E=d>0,O=S-k-w,L=!1;O>d&&o.current&&(r&&r(b),o.current=!1),E&&l.current&&(a&&a(b),l.current=!1),E&&d>O?(n&&!o.current&&n(b),P.scrollTop=S,L=!0,o.current=!0):!E&&-d>w&&(i&&!l.current&&i(b),P.scrollTop=0,L=!0,l.current=!0),L&&DP(b)}},[n,r,i,a]),f=x.useCallback(function(b){c(b,b.deltaY)},[c]),p=x.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),y=x.useCallback(function(b){var d=s.current-b.changedTouches[0].clientY;c(b,d)},[c]),g=x.useCallback(function(b){if(b){var d=f3?{passive:!1}:!1;b.addEventListener("wheel",f,d),b.addEventListener("touchstart",p,d),b.addEventListener("touchmove",y,d)}},[y,p,f]),v=x.useCallback(function(b){b&&(b.removeEventListener("wheel",f,!1),b.removeEventListener("touchstart",p,!1),b.removeEventListener("touchmove",y,!1))},[y,p,f]);return x.useEffect(function(){if(t){var b=u.current;return g(b),function(){v(b)}}},[t,g,v]),function(b){u.current=b}}var jh=["boxSizing","height","overflow","paddingRight","position"],Vh={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Uh(e){e.preventDefault()}function Bh(e){e.stopPropagation()}function Hh(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Wh(){return"ontouchstart"in window||navigator.maxTouchPoints}var Yh=!!(typeof window<"u"&&window.document&&window.document.createElement),ji=0,Rr={capture:!1,passive:!1};function zP(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=x.useRef({}),a=x.useRef(null),o=x.useCallback(function(s){if(Yh){var u=document.body,c=u&&u.style;if(r&&jh.forEach(function(g){var v=c&&c[g];i.current[g]=v}),r&&ji<1){var f=parseInt(i.current.paddingRight,10)||0,p=document.body?document.body.clientWidth:0,y=window.innerWidth-p+f||0;Object.keys(Vh).forEach(function(g){var v=Vh[g];c&&(c[g]=v)}),c&&(c.paddingRight="".concat(y,"px"))}u&&Wh()&&(u.addEventListener("touchmove",Uh,Rr),s&&(s.addEventListener("touchstart",Hh,Rr),s.addEventListener("touchmove",Bh,Rr))),ji+=1}},[r]),l=x.useCallback(function(s){if(Yh){var u=document.body,c=u&&u.style;ji=Math.max(ji-1,0),r&&ji<1&&jh.forEach(function(f){var p=i.current[f];c&&(c[f]=p)}),u&&Wh()&&(u.removeEventListener("touchmove",Uh,Rr),s&&(s.removeEventListener("touchstart",Hh,Rr),s.removeEventListener("touchmove",Bh,Rr)))}},[r]);return x.useEffect(function(){if(t){var s=a.current;return o(s),function(){l(s)}}},[t,o,l]),function(s){a.current=s}}var jP=function(){return document.activeElement&&document.activeElement.blur()},VP={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function UP(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,a=e.onBottomArrive,o=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=MP({isEnabled:i,onBottomArrive:a,onBottomLeave:o,onTopArrive:l,onTopLeave:s}),c=zP({isEnabled:n}),f=function(y){u(y),c(y)};return W(x.Fragment,null,n&&W("div",{onClick:jP,css:VP}),t(f))}var BP={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},HP=function(t){var n=t.name,r=t.onFocus;return W("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:BP,value:"",onChange:function(){}})},WP=HP,YP=function(t){return t.label},yy=function(t){return t.label},wy=function(t){return t.value},GP=function(t){return!!t.isDisabled},KP={clearIndicator:D3,container:O3,control:B3,dropdownIndicator:T3,group:G3,groupHeading:Q3,indicatorsContainer:I3,indicatorSeparator:z3,input:Z3,loadingIndicator:U3,loadingMessage:C3,menu:v3,menuList:x3,menuPortal:k3,multiValue:iP,multiValueLabel:aP,multiValueRemove:oP,noOptionsMessage:E3,option:dP,placeholder:hP,singleValue:yP,valueContainer:N3},QP={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},XP=4,by=4,qP=38,JP=by*2,ZP={baseUnit:by,controlHeight:qP,menuGutter:JP},Uu={borderRadius:XP,colors:QP,spacing:ZP},e5={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Th(),captureMenuScroll:!Th(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:$P(),formatGroupLabel:YP,getOptionLabel:yy,getOptionValue:wy,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:GP,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!u3(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Gh(e,t,n,r){var i=Cy(e,t,n),a=ky(e,t,n),o=Ey(e,t),l=Gl(e,t);return{type:"option",data:t,isDisabled:i,isSelected:a,label:o,value:l,index:r}}function xy(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(o,l){return Gh(e,o,t,l)}).filter(function(o){return Kh(e,o)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var a=Gh(e,n,t,r);return Kh(e,a)?a:void 0}).filter(d3)}function Sy(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,la(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function t5(e,t){return Sy(xy(e,t))}function Kh(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,a=t.isSelected,o=t.label,l=t.value;return(!Oy(e)||!a)&&Py(e,{label:o,value:l,data:i},r)}function n5(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var a=t.indexOf(n);if(a>-1)return n;if(i<t.length)return t[i]}return null}function r5(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ey=function(t,n){return t.getOptionLabel(n)},Gl=function(t,n){return t.getOptionValue(n)};function Cy(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function ky(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Gl(e,t);return n.some(function(i){return Gl(e,i)===r})}function Py(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Oy=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},i5=1,ap=function(e){Vk(n,e);var t=Wk(n);function n(r){var i;if(zk(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.instancePrefix="",i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(l){i.controlRef=l},i.focusedOptionRef=null,i.getFocusedOptionRef=function(l){i.focusedOptionRef=l},i.menuListRef=null,i.getMenuListRef=function(l){i.menuListRef=l},i.inputRef=null,i.getInputRef=function(l){i.inputRef=l},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(l,s){var u=i.props,c=u.onChange,f=u.name;s.name=f,i.ariaOnChange(l,s),c(l,s)},i.setValue=function(l,s,u){var c=i.props,f=c.closeMenuOnSelect,p=c.isMulti,y=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:y}),f&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(l,{action:s,option:u})},i.selectOption=function(l){var s=i.props,u=s.blurInputOnSelect,c=s.isMulti,f=s.name,p=i.state.selectValue,y=c&&i.isOptionSelected(l,p),g=i.isOptionDisabled(l,p);if(y){var v=i.getOptionValue(l);i.setValue(p.filter(function(b){return i.getOptionValue(b)!==v}),"deselect-option",l)}else if(!g)c?i.setValue([].concat(la(p),[l]),"select-option",l):i.setValue(l,"select-option");else{i.ariaOnChange(l,{action:"select-option",option:l,name:f});return}u&&i.blurInput()},i.removeValue=function(l){var s=i.props.isMulti,u=i.state.selectValue,c=i.getOptionValue(l),f=u.filter(function(y){return i.getOptionValue(y)!==c}),p=Ki(s,f,f[0]||null);i.onChange(p,{action:"remove-value",removedValue:l}),i.focusInput()},i.clearValue=function(){var l=i.state.selectValue;i.onChange(Ki(i.props.isMulti,[],null),{action:"clear",removedValues:l})},i.popValue=function(){var l=i.props.isMulti,s=i.state.selectValue,u=s[s.length-1],c=s.slice(0,s.length-1),f=Ki(l,c,c[0]||null);i.onChange(f,{action:"pop-value",removedValue:u})},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return i3.apply(void 0,[i.props.classNamePrefix].concat(s))},i.getOptionLabel=function(l){return Ey(i.props,l)},i.getOptionValue=function(l){return Gl(i.props,l)},i.getStyles=function(l,s){var u=i.props.unstyled,c=KP[l](s,u);c.boxSizing="border-box";var f=i.props.styles[l];return f?f(c,s):c},i.getClassNames=function(l,s){var u,c;return(u=(c=i.props.classNames)[l])===null||u===void 0?void 0:u.call(c,s)},i.getElementId=function(l){return"".concat(i.instancePrefix,"-").concat(l)},i.getComponents=function(){return SP(i.props)},i.buildCategorizedOptions=function(){return xy(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Sy(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(l,s){i.setState({ariaSelection:Y({value:l},s)})},i.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(l){i.blockOptionHover=!1},i.onControlMouseDown=function(l){if(!l.defaultPrevented){var s=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&i.onMenuClose():s&&i.openMenu("first"):(s&&(i.openAfterFocus=!0),i.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},i.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!i.props.isDisabled){var s=i.props,u=s.isMulti,c=s.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!u}),i.onMenuClose()):i.openMenu("first"),l.preventDefault()}},i.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(i.clearValue(),l.preventDefault(),i.openAfterFocus=!1,l.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(l){typeof i.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&Ws(l.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(l)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(l){var s=l.touches,u=s&&s.item(0);u&&(i.initialTouchX=u.clientX,i.initialTouchY=u.clientY,i.userIsDragging=!1)},i.onTouchMove=function(l){var s=l.touches,u=s&&s.item(0);if(u){var c=Math.abs(u.clientX-i.initialTouchX),f=Math.abs(u.clientY-i.initialTouchY),p=5;i.userIsDragging=c>p||f>p}},i.onTouchEnd=function(l){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(l.target)&&i.menuListRef&&!i.menuListRef.contains(l.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(l){i.userIsDragging||i.onControlMouseDown(l)},i.onClearIndicatorTouchEnd=function(l){i.userIsDragging||i.onClearIndicatorMouseDown(l)},i.onDropdownIndicatorTouchEnd=function(l){i.userIsDragging||i.onDropdownIndicatorMouseDown(l)},i.handleInputChange=function(l){var s=i.props.inputValue,u=l.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(u,{action:"input-change",prevInputValue:s}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(l){i.props.onFocus&&i.props.onFocus(l),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(l){var s=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(l),i.onInputChange("",{action:"input-blur",prevInputValue:s}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(l){i.blockOptionHover||i.state.focusedOption===l||i.setState({focusedOption:l})},i.shouldHideSelectedOptions=function(){return Oy(i.props)},i.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),i.focus()},i.onKeyDown=function(l){var s=i.props,u=s.isMulti,c=s.backspaceRemovesValue,f=s.escapeClearsValue,p=s.inputValue,y=s.isClearable,g=s.isDisabled,v=s.menuIsOpen,b=s.onKeyDown,d=s.tabSelectsValue,m=s.openMenuOnFocus,w=i.state,S=w.focusedOption,k=w.focusedValue,P=w.selectValue;if(!g&&!(typeof b=="function"&&(b(l),l.defaultPrevented))){switch(i.blockOptionHover=!0,l.key){case"ArrowLeft":if(!u||p)return;i.focusValue("previous");break;case"ArrowRight":if(!u||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(k)i.removeValue(k);else{if(!c)return;u?i.popValue():y&&i.clearValue()}break;case"Tab":if(i.isComposing||l.shiftKey||!v||!d||!S||m&&i.isOptionSelected(S,P))return;i.selectOption(S);break;case"Enter":if(l.keyCode===229)break;if(v){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":v?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):y&&f&&i.clearValue();break;case" ":if(p)return;if(!v){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":v?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":v?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!v)return;i.focusOption("pageup");break;case"PageDown":if(!v)return;i.focusOption("pagedown");break;case"Home":if(!v)return;i.focusOption("first");break;case"End":if(!v)return;i.focusOption("last");break;default:return}l.preventDefault()}},i.instancePrefix="react-select-"+(i.props.instanceId||++i5),i.state.selectValue=Wl(r.value),r.menuIsOpen&&i.state.selectValue.length){var a=i.buildFocusableOptions(),o=a.indexOf(i.state.selectValue[0]);i.state.focusedOption=a[o]}return i}return jk(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&$h(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var a=this.props,o=a.isDisabled,l=a.menuIsOpen,s=this.state.isFocused;(s&&!o&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&o&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!o&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&($h(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,a){this.props.onInputChange(i,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var a=this,o=this.state,l=o.selectValue,s=o.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var f=u.indexOf(l[0]);f>-1&&(c=f)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(i){var a=this.state,o=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=o.indexOf(l);l||(s=-1);var u=o.length-1,c=-1;if(o.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:o[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,o=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(o);o||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-a,s<0&&(s=0)):i==="pagedown"?(s=u+a,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Uu):Y(Y({},Uu),this.props.theme):Uu}},{key:"getCommonProps",value:function(){var i=this.clearValue,a=this.cx,o=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,f=this.props,p=f.isMulti,y=f.isRtl,g=f.options,v=this.hasValue();return{clearValue:i,cx:a,getStyles:o,getClassNames:l,getValue:s,hasValue:v,isMulti:p,isRtl:y,options:g,selectOption:u,selectProps:f,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,a=i.isClearable,o=i.isMulti;return a===void 0?o:a}},{key:"isOptionDisabled",value:function(i,a){return Cy(this.props,i,a)}},{key:"isOptionSelected",value:function(i,a){return ky(this.props,i,a)}},{key:"filterOption",value:function(i,a){return Py(this.props,i,a)}},{key:"formatOptionLabel",value:function(i,a){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:a,inputValue:o,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,a=i.isDisabled,o=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,f=i.menuIsOpen,p=i.required,y=this.getComponents(),g=y.Input,v=this.state,b=v.inputIsHidden,d=v.ariaSelection,m=this.commonProps,w=l||this.getElementId("input"),S=Y(Y(Y({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":p,role:"combobox"},f&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(d==null?void 0:d.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?x.createElement(g,H({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:a,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):x.createElement(LP,H({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Hl,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,a=this.getComponents(),o=a.MultiValue,l=a.MultiValueContainer,s=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,f=a.Placeholder,p=this.commonProps,y=this.props,g=y.controlShouldRenderValue,v=y.isDisabled,b=y.isMulti,d=y.inputValue,m=y.placeholder,w=this.state,S=w.selectValue,k=w.focusedValue,P=w.isFocused;if(!this.hasValue()||!g)return d?null:x.createElement(f,H({},p,{key:"placeholder",isDisabled:v,isFocused:P,innerProps:{id:this.getElementId("placeholder")}}),m);if(b)return S.map(function(O,L){var z=O===k,se="".concat(i.getOptionLabel(O),"-").concat(i.getOptionValue(O));return x.createElement(o,H({},p,{components:{Container:l,Label:s,Remove:u},isFocused:z,isDisabled:v,key:se,index:L,removeProps:{onClick:function(){return i.removeValue(O)},onTouchEnd:function(){return i.removeValue(O)},onMouseDown:function(ae){ae.preventDefault()}},data:O}),i.formatOptionLabel(O,"value"))});if(d)return null;var E=S[0];return x.createElement(c,H({},p,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),a=i.ClearIndicator,o=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||s||!this.hasValue()||u)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(a,H({},o,{innerProps:f,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),a=i.LoadingIndicator,o=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var f={"aria-hidden":"true"};return x.createElement(a,H({},o,{innerProps:f,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator,o=i.IndicatorSeparator;if(!a||!o)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return x.createElement(o,H({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),a=i.DropdownIndicator;if(!a)return null;var o=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return x.createElement(a,H({},o,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,a=this.getComponents(),o=a.Group,l=a.GroupHeading,s=a.Menu,u=a.MenuList,c=a.MenuPortal,f=a.LoadingMessage,p=a.NoOptionsMessage,y=a.Option,g=this.commonProps,v=this.state.focusedOption,b=this.props,d=b.captureMenuScroll,m=b.inputValue,w=b.isLoading,S=b.loadingMessage,k=b.minMenuHeight,P=b.maxMenuHeight,E=b.menuIsOpen,O=b.menuPlacement,L=b.menuPosition,z=b.menuPortalTarget,se=b.menuShouldBlockScroll,X=b.menuShouldScrollIntoView,ae=b.noOptionsMessage,ee=b.onMenuScrollToTop,q=b.onMenuScrollToBottom;if(!E)return null;var Ee=function(_,T){var B=_.type,C=_.data,G=_.isDisabled,$=_.isSelected,he=_.label,oe=_.value,le=v===C,K=G?void 0:function(){return i.onOptionHover(C)},Te=G?void 0:function(){return i.selectOption(C)},He="".concat(i.getElementId("option"),"-").concat(T),ne={id:He,onClick:Te,onMouseMove:K,onMouseOver:K,tabIndex:-1};return x.createElement(y,H({},g,{innerProps:ne,data:C,isDisabled:G,isSelected:$,key:He,label:he,type:B,value:oe,isFocused:le,innerRef:le?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(_.data,"menu"))},ge;if(this.hasOptions())ge=this.getCategorizedOptions().map(function(I){if(I.type==="group"){var _=I.data,T=I.options,B=I.index,C="".concat(i.getElementId("group"),"-").concat(B),G="".concat(C,"-heading");return x.createElement(o,H({},g,{key:C,data:_,options:T,Heading:l,headingProps:{id:G,data:I.data},label:i.formatGroupLabel(I.data)}),I.options.map(function($){return Ee($,"".concat(B,"-").concat($.index))}))}else if(I.type==="option")return Ee(I,"".concat(I.index))});else if(w){var F=S({inputValue:m});if(F===null)return null;ge=x.createElement(f,g,F)}else{var V=ae({inputValue:m});if(V===null)return null;ge=x.createElement(p,g,V)}var U={minMenuHeight:k,maxMenuHeight:P,menuPlacement:O,menuPosition:L,menuShouldScrollIntoView:X},te=x.createElement(y3,H({},g,U),function(I){var _=I.ref,T=I.placerProps,B=T.placement,C=T.maxHeight;return x.createElement(s,H({},g,U,{innerRef:_,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove,id:i.getElementId("listbox")},isLoading:w,placement:B}),x.createElement(UP,{captureEnabled:d,onTopArrive:ee,onBottomArrive:q,lockEnabled:se},function(G){return x.createElement(u,H({},g,{innerRef:function(he){i.getMenuListRef(he),G(he)},isLoading:w,maxHeight:C,focusedOption:v}),ge)}))});return z||L==="fixed"?x.createElement(c,H({},g,{appendTo:z,controlElement:this.controlRef,menuPlacement:O,menuPosition:L}),te):te}},{key:"renderFormField",value:function(){var i=this,a=this.props,o=a.delimiter,l=a.isDisabled,s=a.isMulti,u=a.name,c=a.required,f=this.state.selectValue;if(c&&!this.hasValue()&&!l)return x.createElement(WP,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(o){var p=f.map(function(v){return i.getOptionValue(v)}).join(o);return x.createElement("input",{name:u,type:"hidden",value:p})}else{var y=f.length>0?f.map(function(v,b){return x.createElement("input",{key:"i-".concat(b),name:u,type:"hidden",value:i.getOptionValue(v)})}):x.createElement("input",{name:u,type:"hidden",value:""});return x.createElement("div",null,y)}else{var g=f[0]?this.getOptionValue(f[0]):"";return x.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,a=this.state,o=a.ariaSelection,l=a.focusedOption,s=a.focusedValue,u=a.isFocused,c=a.selectValue,f=this.getFocusableOptions();return x.createElement(RP,H({},i,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:f}))}},{key:"render",value:function(){var i=this.getComponents(),a=i.Control,o=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,f=u.id,p=u.isDisabled,y=u.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return x.createElement(l,H({},v,{className:c,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:p,isFocused:g}),this.renderLiveRegion(),x.createElement(a,H({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:p,isFocused:g,menuIsOpen:y}),x.createElement(s,H({},v,{isDisabled:p}),this.renderPlaceholderOrValue(),this.renderInput()),x.createElement(o,H({},v,{isDisabled:p}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,a){var o=a.prevProps,l=a.clearFocusValueOnUpdate,s=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,f=a.prevWasFocused,p=i.options,y=i.value,g=i.menuIsOpen,v=i.inputValue,b=i.isMulti,d=Wl(y),m={};if(o&&(y!==o.value||p!==o.options||g!==o.menuIsOpen||v!==o.inputValue)){var w=g?t5(i,d):[],S=l?n5(a,d):null,k=r5(a,w);m={selectValue:d,focusedOption:k,focusedValue:S,clearFocusValueOnUpdate:!1}}var P=s!=null&&i!==o?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},E=u,O=c&&f;return c&&!O&&(E={value:Ki(b,d,d[0]||null),options:d,action:"initial-input-focus"},O=!f),(u==null?void 0:u.action)==="initial-input-focus"&&(E=null),Y(Y(Y({},m),P),{},{prevProps:i,ariaSelection:E,prevWasFocused:O})}}]),n}(x.Component);ap.defaultProps=e5;var a5=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Ay(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,a=e.defaultValue,o=a===void 0?null:a,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,f=e.onMenuClose,p=e.onMenuOpen,y=e.value,g=Or(e,a5),v=x.useState(l!==void 0?l:n),b=dn(v,2),d=b[0],m=b[1],w=x.useState(s!==void 0?s:i),S=dn(w,2),k=S[0],P=S[1],E=x.useState(y!==void 0?y:o),O=dn(E,2),L=O[0],z=O[1],se=x.useCallback(function(F,V){typeof u=="function"&&u(F,V),z(F)},[u]),X=x.useCallback(function(F,V){var U;typeof c=="function"&&(U=c(F,V)),m(U!==void 0?U:F)},[c]),ae=x.useCallback(function(){typeof p=="function"&&p(),P(!0)},[p]),ee=x.useCallback(function(){typeof f=="function"&&f(),P(!1)},[f]),q=l!==void 0?l:d,Ee=s!==void 0?s:k,ge=y!==void 0?y:L;return Y(Y({},g),{},{inputValue:q,menuIsOpen:Ee,onChange:se,onInputChange:X,onMenuClose:ee,onMenuOpen:ae,value:ge})}var o5=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],Qh=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),a=String(r.getOptionValue(n)).toLowerCase(),o=String(r.getOptionLabel(n)).toLowerCase();return a===i||o===i},Bu={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(a){return Qh(t,a,i)})||r.some(function(a){return Qh(t,a,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function l5(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,a=e.formatCreateLabel,o=a===void 0?Bu.formatCreateLabel:a,l=e.isValidNewOption,s=l===void 0?Bu.isValidNewOption:l,u=e.getNewOptionData,c=u===void 0?Bu.getNewOptionData:u,f=e.onCreateOption,p=e.options,y=p===void 0?[]:p,g=e.onChange,v=Or(e,o5),b=v.getOptionValue,d=b===void 0?wy:b,m=v.getOptionLabel,w=m===void 0?yy:m,S=v.inputValue,k=v.isLoading,P=v.isMulti,E=v.value,O=v.name,L=x.useMemo(function(){return s(S,Wl(E),y,{getOptionValue:d,getOptionLabel:w})?c(S,o(S)):void 0},[o,c,w,d,S,s,y,E]),z=x.useMemo(function(){return(n||!k)&&L?i==="first"?[L].concat(la(y)):[].concat(la(y),[L]):y},[n,i,k,L,y]),se=x.useCallback(function(X,ae){if(ae.action!=="select-option")return g(X,ae);var ee=Array.isArray(X)?X:[X];if(ee[ee.length-1]===L){if(f)f(S);else{var q=c(S,S),Ee={action:"create-option",name:O,option:q};g(Ki(P,[].concat(la(Wl(E)),[q]),q),Ee)}return}g(X,ae)},[c,S,P,O,L,f,g,E]);return Y(Y({},v),{},{options:z,onChange:se})}var s5=x.forwardRef(function(e,t){var n=Ay(e),r=l5(n);return x.createElement(ap,H({ref:t},r))}),u5=s5;function c5({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return h("div",{children:"no filters available"});let a=new Set,o=new Set,l=[{value:"options",label:"label",otherthing:"otherthing"}],s=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(f=>{let p=f.diets;p.length>0&&p.forEach(y=>{n.includes(y)||a.add(y)}),s.forEach(y=>{f[y]&&!i.includes(y)&&o.add(y)})});let u=Array.from(a.values()),c=Array.from(o.values());return l=f5({dietOptions:u,otherOptions:c}),h(Dk,{className:"main-filter-container",children:N("section",{className:"filter-container",children:[h("h2",{children:"Filter Results"}),h(u5,{closeMenuOnSelect:!1,isMulti:!0,options:l,onChange:f=>{d5(f,{diets:t,other:r})}})]})})}function f5(e){let t=[];for(let n of Object.keys(e)){const r=e[n].map(i=>({value:i,label:i,type:n}));t=t.concat(r)}return t}function d5(e,t){let n=[],r=[];e.forEach(i=>{i.type==="dietOptions"&&n.push(i.value),i.type==="otherOptions"&&r.push(i.value)}),t.diets(n),t.other(r)}function p5(){const e="http://localhost:4000",[t,n]=x.useState(""),[r,i]=x.useState(()=>{let d=JSON.parse(localStorage.getItem("lastSearch"));return console.log("lastSearch",d),d||[]}),[a,o]=x.useState([]),[l,s]=x.useState([]),[u,c]=x.useState([]),[f,p]=x.useState(!1),[y,g]=x.useState(!1);x.useEffect(()=>{if(l.length>0||u.length>0){let d=m5(r,l,u);o(d);return}o(r)},[l,u]);const v=x.useRef("");async function b(){try{g(!0);const d=await Vs.get(`${e}/api/searchByIngredientCombined`,{params:{ingredients:t}});d!=null&&d.data&&p(!1);let m=d.data;i(()=>(localStorage.setItem("lastSearch",JSON.stringify(m)),m)),o(m),g(!1)}catch{p(!0)}}return N(vC,{children:[h("div",{className:"title",children:h("h1",{children:"Recipe Search"})}),h("div",{className:"searchContainer",children:N("form",{action:"#",onSubmit:d=>{d.preventDefault(),b()},children:[h("input",{ref:v,onChange:d=>n(d.target.value),id:"ingregients",value:t,type:"text",placeholder:"Enter your ingredients",className:"search"}),h("button",{className:"search-btn",children:"Search"})]})}),N("section",{className:"recipes-display",children:[h("div",{className:"filter-container",children:h(c5,{recipeListArr:a,setDietFilter:s,dietFilter:l,setCategoryFilter:c,categoryFilter:u})}),h("section",{className:"searchresults-container",children:h("div",{className:"searchResults",children:h("ul",{children:y?h(T1,{}):a.length>0?a.map(d=>h("li",{children:h($1,{recipe:d},d.id)},d.id)):f?N("h3",{children:[" ","An error has occured, please try searching again."," "]}):N("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function m5(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const h5=ot.section`
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
`;function g5(){const[e,t]=x.useState([]),n="http://localhost:4000",{userProfile:r}=x.useContext(Si);return x.useEffect(()=>{async function i(){try{const a=await Vs.post(`${n}/api/getSavedRecipes`,{username:r.username});t(a.data)}catch(a){console.error("Error fetching saved recipes:",a)}}i()},[]),N(h5,{children:[h("div",{className:"title",children:h("h1",{children:"Saved Recipes"})}),h("div",{className:"saved-recipes",children:h("ul",{children:e.map(i=>h("li",{children:h($1,{recipe:i.recipeJson,showDelete:!0})},i._id))})})]})}let ir="#2C4001",Xh="#dae082",v5="#F2E7AE",Ir="#F2F2F2";const y5=ot.section`
    height: 100%;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: ${ir};
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
        color: ${Ir};
        background: ${ir};
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
        border: 1px solid ${ir};
        border-radius: 5px;
    }
    & form input {
        text-align: center;
        font-size: 1.5rem;
        border: none;
        width: 100%;
        padding: .5em;
        background-color: ${Ir};
        border-radius: 5px;
        color: #3c3b3b;
    }
    & form input:focus {
        background-color: ${v5};
        border: none;
    }
    & .input-tag {
        color: ${Ir};
        
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
        background: ${Xh};
        color: #000000;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${Xh};
        color: ${ir};
        border: 1px solid ${ir};
    }

    & .submit-btn button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
        background: ${ir};
        color: ${Ir};
        border: 1px solid ${Ir};
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

    @media ${De.tablet} {
        .logo{
            width: 50%;
        }
        form{
            margin: 0 auto;
            width: 60%;
        }
    }
    @media ${De.laptop} {
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
        .login-container {
            background: ${Ir};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${ir};
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

    @media ${De.laptopL} {
        .logo{
           
        }
        form{
            
        }
    }
    @media ${De.desktop} {

    }
`;function w5(){const e=x.useRef(null),t=x.useRef(null),[n,r]=x.useState(""),[i,a]=x.useState(""),[o,l]=x.useState(null),s=ds(),{userProfile:u,isLoggedIn:c,setIsLoggedIn:f,setUserProfile:p}=x.useContext(Si);return x.useEffect(()=>{e.current.focus()},[]),h(y5,{children:N("section",{className:"login-container",children:[h("div",{children:h("img",{src:Hd,alt:"Pantry Pal Logo",className:"logo"})}),h("section",{className:"form-sect",children:N("form",{onSubmit:async g=>{g.preventDefault();try{const b=(await Vs.post("http://localhost:4000/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;f(!0),p(d=>b.userProfile?{...d,...b.userProfile}:d),s("/search")}catch(v){f(!1),console.log(v)}},children:[N("div",{className:"title",children:[h("div",{children:c&&"logged in"}),h("h2",{children:"Welcome Back!"})]}),o&&h("div",{className:"error-container",children:N("div",{className:"error-desc",children:[h("span",{className:"error-marker",children:"⚠"})," ",o]})}),N("div",{className:"input-container",children:[h("label",{className:"input-tag",htmlFor:"username"}),h("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:g=>r(g.target.value),required:!0})]}),N("div",{className:"input-container",children:[h("label",{className:"input-tag",htmlFor:"password"}),h("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:g=>a(g.target.value),required:!0})]}),h("div",{className:"submit-btn",children:h("button",{type:"submit",className:"btn",children:"Sign In"})}),h("span",{children:"Don't have an account?"}),h(rt,{className:"page",to:"/signup",children:"Sign up"})]})})]})})}let Lt="#2C4001",Io="#F2E7AE",qh="#59320F",Hu="#F2F2F2";const b5=ot.section`
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
  background: ${Hu};
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
  color: ${Lt};
}
& .quickIcon {
  font-size: 1.5em;
}

& .recipeTime {
  color: ${Lt};
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
}



& .recipeDetailContainer {
  background: ${Lt};
}
& .recipeTitle {
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: ${Lt};
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
  color: ${Hu};
  padding: 0 4em;
  margin: 0 .5em;

}
& .recipeSummary {
  padding: 1em;
  color: ${Lt};
  border-top: 1px solid ${Lt};

}
& .recipeTime{

}
& .recipeTag{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
& .recipeContainer{
  background: ${Io}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Io}
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
  background: ${qh};
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
  color: ${Lt};
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
  background: ${Io}

}

& .ingredientCard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Lt};
  background: white;
  color: ${Lt};
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
  border-top: 1px solid ${Lt};
  background: ${qh};
  color: ${Io};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${Hu};
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
    color: ${Lt};
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
`;let Fo;const x5=new Uint8Array(16);function S5(){if(!Fo&&(Fo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Fo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fo(x5)}const Ge=[];for(let e=0;e<256;++e)Ge.push((e+256).toString(16).slice(1));function E5(e,t=0){return(Ge[e[t+0]]+Ge[e[t+1]]+Ge[e[t+2]]+Ge[e[t+3]]+"-"+Ge[e[t+4]]+Ge[e[t+5]]+"-"+Ge[e[t+6]]+Ge[e[t+7]]+"-"+Ge[e[t+8]]+Ge[e[t+9]]+"-"+Ge[e[t+10]]+Ge[e[t+11]]+Ge[e[t+12]]+Ge[e[t+13]]+Ge[e[t+14]]+Ge[e[t+15]]).toLowerCase()}const C5=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Jh={randomUUID:C5};function Nt(e,t,n){if(Jh.randomUUID&&!t&&!e)return Jh.randomUUID();e=e||{};const r=e.random||(e.rng||S5)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return E5(r)}function k5(){var u;const t=(u=bi().state)==null?void 0:u.recipe,n=t.dishTypes.map(c=>h("li",{children:c},Nt())),r=t.extendedIngredients.map(c=>N("li",{children:[c.amount," ",c.unit," ",h("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${c.image}`})," ",c.name]},Nt()));console.log(t);const i=t.analyzedInstructions[0].steps.map(c=>h("li",{children:c.step},Nt())),a=t.summary.replace(/<.*?>/g,""),o=t.extendedIngredients.length,l=t.aggregateLikes,s=t.diets.map(c=>h("li",{children:c},Nt()));return h(b5,{children:N("div",{className:"recipeContainer",children:[N("div",{className:"recipeImgContainer",children:[N("div",{className:"imageContainer",children:[h("img",{className:"recipeImg",src:t.image,alt:t.title}),h("button",{className:"saveBtn",children:h(Xe,{icon:uh,className:"saveIcon"})})]}),N("section",{className:"recipeDetails",children:[h("div",{className:"titleContainer",children:h("h1",{className:"recipeTitle",children:t.title})}),N("div",{className:"quickInfoContainer",children:[N("section",{className:"quickInfoItem",children:[h(Xe,{icon:aC,className:"quickIcon"}),N("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),N("section",{children:[h(Xe,{icon:iC,className:"quickIcon"}),N("h2",{className:"recipeTime",children:[o," Ingredients"]})]}),N("section",{children:[h(Xe,{icon:uh,className:"quickIcon"}),N("h2",{className:"recipeTime",children:[l," Likes"]})]})]}),h("section",{className:"recipeSummary",children:h("p",{children:a})}),N("section",{className:"recipeTags",children:[h("div",{className:"recipeCategory",children:n}),h("div",{className:"recipeDiets",children:s})]})]})]}),h("div",{className:"recipeHead",children:h("div",{className:"recipeStart",children:N("div",{className:"ingredientCard",children:[N("h2",{children:["Servings: ",t.servings]}),h("input",{type:"number",placeholder:t.servings}),h("h2",{children:"What you'll need:"}),h("div",{className:"recipeIngredient",children:r})]})})}),N("div",{className:"instructionsCard",children:[h("h2",{children:t.title}),N("div",{className:"instructionContainer",children:[h("div",{children:h("img",{className:"instructionImg",src:t.image,alt:t.title})}),N("div",{className:"recipeInstructions",children:[h("h2",{children:"Instructions:"}),h("ol",{children:i})]})]})]})]})})}async function P5(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}let ar="#2C4001",Zh="#F2E7AE",O5="#F2F2F2";const A5=ot.section`
  background: ${O5};
  padding: 1em;
  border-radius: 5px;
  margin: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${ar};
  border: 1px solid ${ar};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {

    color: ${ar};
  }
  & h2 {
    color: black;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .instructionContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .instructionContainer h1 {
    font-size: 2em;
    text-align: center;
  }

  form label{
    color: ${ar};
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
    width: 100%;
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
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${ar};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Zh};
    margin: .5em;
  }

  & form button:hover {
    background: ${Zh};
    color: ${ar};
    border: 1px solid ${ar};
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

  @media ${De.laptop}{
    margin: 2em auto;
    width: 100%;
    max-width: 900px;

  }
`;function N5(){const[e,t]=x.useState(!1),[n,r]=x.useState(1),[i,a]=x.useState("None"),[o,l]=x.useState(""),[s,u]=x.useState(null);return N(A5,{children:[N("section",{className:"instructionContainer",children:[h("h1",{children:"Welcome to the Pantry Pal Meal Planner"}),h("p",{children:"Using the SmartMeal Planner is a breeze. Start by entering the number of days you'd like to plan for, ranging from a single day to an entire week. Next, select your desired diet type from a variety of options such as vegetarian, vegan, or keto. To ensure your nutritional needs are met, specify your desired daily calorie intake."})]}),N("form",{onSubmit:async f=>{t(!0),f.preventDefault();const p=await P5(n,i,parseInt(o));u(p),t(!1)},children:[h("h1",{children:"Meal Planner"}),h("label",{htmlFor:"numberOfDays",children:"Number of days:"}),N("select",{id:"numberOfDays",value:n,onChange:f=>r(f.target.value),children:[h("option",{value:"1",children:"1"}),h("option",{value:"3",children:"3"}),h("option",{value:"5",children:"5"})]}),h("label",{htmlFor:"dietType",children:"Diet type:"}),N("select",{id:"dietType",value:i,onChange:f=>a(f.target.value),children:[h("option",{value:"None",children:"None"}),h("option",{value:"vegan",children:"Vegan"}),h("option",{value:"vegetarian",children:"Vegetarian"}),h("option",{value:"pescatarian",children:"Pescatarian"}),h("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),h("option",{value:"keto",children:"Keto"}),h("option",{value:"gluten-free",children:"Gluten-free"}),h("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),h("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),h("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:o,onChange:f=>l(f.target.value)}),h("button",{type:"submit",children:"Get Meal Plan"}),e?h(T1,{}):null]}),s&&N("table",{children:[h("thead",{children:N("tr",{children:[h("th",{children:"Day"}),h("th",{children:"Meal"}),h("th",{children:"Food"}),h("th",{children:"Calories"})]})}),h("tbody",{children:s.map(f=>{const p=Object.entries(f).filter(([g])=>g!=="Day"&&g!=="TotalCalories"),y=p.reduce((g,[,v])=>g+v.Calories,0);return p.flatMap(([g,v],b)=>[N("tr",{children:[b===0&&h("td",{rowSpan:p.length+1,children:f.Day}),h("td",{children:g}),h("td",{children:v.Meal}),h("td",{children:v.Calories})]},`${g}-${v.Meal}`),b===p.length-1&&h("tr",{children:N("td",{colSpan:"3",align:"right",children:["Total Day Calories :"," ",y]})},`${g}-TotalCalories`)])})})]})]})}const R5=rS`
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

`,I5="#ffffff",F5="#ffffff";let Wt="#2C4001",_5="#dae082",$5="#F2E7AE",eg="#F2F2F2";const T5=ot.section`
    background: ${I5};
    display: flex;
    padding: 1rem;
    flex-direction: column;
    width: 100%;

    .hidden {
        scale: 0;
    }
    
    .modal__container {
        width: 100%;
        /* display: flex; */
        justify-content: center;
        position: absolute;
        left: 0;
    }

    picture img {
        background: ${F5};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${eg};
        border: 1px solid ${Wt};
        border-radius: 5px;
        
        padding: 2rem;
        display: flex;
        flex-direction: column;

    }

    .userIcon {
        color: ${Wt};
        font-size: 4em;
        border: 1px solid ${Wt};
        border-radius: 50%;
        padding: .5em;
        background: white;
    }

    h3 {
        color: ${Wt};
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .btn {

        padding: 1.3rem;
        border-radius: 5px;
        text-align: center;
        background-color: ${Wt};
        color: ${eg};
        text-align: middle;
        vertical-align: center;
        border: 1px solid ${Wt};
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${$5};
        color: ${Wt};
        border: 1px solid ${Wt};
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
            background: ${_5};
            border-radius: 5px;
            border: 1px solid ${Wt};
            color: ${Wt};

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
        margin: .5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media ${De.laptop}{
        .profile-page {
            margin: 0 auto;
            min-width: 600px;
           } 
    }
`,L5="#2b3f0124",D5="#eae6e6",M5="#a8a6a6",z5="#000000",j5="#595959f",V5=ot.section`
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
            background-color: ${L5};

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
            background-color: ${D5};
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
                                color: ${j5};
                            }
                            input {
                                color: ${z5};
                                border: 1px solid ${M5};
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
`,U5="#f4888a",B5=ot.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${U5};

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
`,H5="/assets/error-58915e09.png";function op({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>h("li",{className:"error_container",children:N("div",{className:"error_item",children:[h("div",{className:"img__container",children:h("img",{src:H5,alt:"error symbol"})}),h("p",{children:a})]})},Nt()))}return t?h(B5,{children:h("div",{className:"error container",children:h("div",{className:"row",children:N("section",{className:"container col",children:[h("h3",{children:"Please correct errors"}),h("ul",{className:"error__list",children:e.length>0?n(e):h(pn,{})})]})})})}):h(pn,{})}function W5({children:e,setIsDisplayed:t,scrollToRef:n}){x.useRef("");function r(){t(!1)}return h(V5,{children:N("main",{children:[h("div",{onClick:()=>{r()},className:"back__blur "}),h("div",{ref:n,className:"container row ",children:h("section",{id:"modal",className:"",children:e})})]})})}const Wu=Vs.create({baseURL:"http://localhost:4000",headers:{"Content-Type":"application/json"},withCredentials:!0});function tg(e,t){return e===t}function Y5(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function G5(e,t){const n=await JSON.stringify({token:t,username:e});Tl.set("loggedIn",n),Tl.set("loggedIn",n)}const _o={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!tg(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await Wu.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await G5(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!tg(t,n))throw Error("emails dont match");if(!Y5(t))throw Error("emails improper format");return r=await Wu.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await Wu.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},K5="#08e171dc",Q5=ot.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${K5};

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
`,X5="/assets/checked-926d4d93.png";function lp({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>h("li",{className:"error_container",children:N("div",{className:"list_item",children:[h("img",{src:X5,alt:"check symbol"}),h("p",{children:a})]})},Nt()))}return t?h(Q5,{children:h("div",{className:"error container",children:h("div",{className:"row",children:h("section",{className:"container col",children:h("ul",{className:"display_list",children:e.length>0?n(e):h(pn,{})})})})})}):h(pn,{})}const q5=ot.section``;function ng({handleSubmit:e,setShowModal:t}){const[n,r]=x.useState(!1),[i,a]=x.useState(!1),[o,l]=x.useState([]),s=x.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),p=Object.fromEntries(f.entries());console.log("modal form data",p);const y=await e(p)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return N(q5,{children:[N("div",{children:[h(lp,{listArr:["Password Updated"],showCard:n}),h(op,{errorsArr:o,showError:i})]}),N("form",{ref:s,onSubmit:u,children:[h("section",{className:"row title",children:h("h1",{children:"Update Password"})}),h("section",{className:"row form__inputs",children:N("ul",{children:[h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"oldPassword",children:"Old Password"}),h("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},Nt()),h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"newPassword",children:"New Password"}),h("input",{id:"newPassword",type:"text",name:"newPassword"})]})},Nt()),h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),h("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},Nt())]})}),n?h("section",{className:"form__controls row",children:h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Done"})})}):N("section",{className:"form__controls row",children:[h("div",{className:"btn",onClick:u,children:h("span",{children:"Submit"})}),h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Cancel"})})]})]})]})}function J5({handleSubmit:e,setShowModal:t}){const[n,r]=x.useState(!1),[i,a]=x.useState(!1),[o,l]=x.useState([]),s=x.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),p=Object.fromEntries(f.entries());console.log("modal form data",p);const y=await e(p)}catch(f){l([f.message]),a(!0),console.log("error in update form",f.message);return}r(!0)}return N("form",{ref:s,onSubmit:u,children:[N("div",{children:[h(lp,{listArr:["Email Updated"],showCard:n}),h(op,{errorsArr:o,showError:i})]}),h("section",{className:"row title",children:h("h1",{children:"Update Email"})}),h("section",{className:"row form__inputs",children:N("ul",{children:[h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"newEmail",children:"New Email"}),h("input",{id:"newEmail",type:"text",name:"newEmail"})]})},Nt()),h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),h("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},Nt())]})}),n?h("section",{className:"form__controls row",children:h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Done"})})}):N("section",{className:"form__controls row",children:[h("div",{className:"btn",onClick:u,children:h("span",{children:"Submit"})}),h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Cancel"})})]})]})}function Z5({handleSubmit:e,setShowModal:t}){const[n,r]=x.useState(!1),[i,a]=x.useState(!1),[o,l]=x.useState([]),s=x.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),p=Object.fromEntries(f.entries());console.log(" form data",p);const y=await e(p)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return N(pn,{children:[N("div",{children:[h(lp,{listArr:["Calorie Preferences Updated"],showCard:n}),h(op,{errorsArr:o,showError:i})]}),N("form",{ref:s,onSubmit:u,children:[h("section",{className:"row title",children:h("h1",{children:"Update Calorie preferences"})}),h("section",{className:"row form__inputs",children:h("ul",{children:h("li",{className:"update__field",children:N("div",{className:"input__container",children:[h("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),h("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},Nt())})}),n?h("section",{className:"form__controls row",children:h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Done"})})}):N("section",{className:"form__controls row",children:[h("div",{className:"btn",onClick:u,children:h("span",{children:"Submit"})}),h("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:h("span",{children:"Cancel"})})]})]})]})}var eO=x.forwardRef(function(e,t){var n=Ay(e);return x.createElement(ap,H({ref:t},n))}),tO=eO;const Yu=[{value:"Ketogenic",label:"Ketogenic"},{value:"Gluten Free",label:"Gluten Free"},{value:"Vegetarian",label:"Vegetarian"},{value:"Lacto-Vegetarian",label:"Lacto-Vegetarian"},{value:"Ovo-Vegetarian",label:"Ovo-Vegetarian"},{value:"Vegan",label:"Vegan"},{value:"Vegetarian",label:"Vegetarian"},{value:"Pescetarian",label:"Pescetarian"},{value:"Paleo",label:"Paleo"},{value:"Primal",label:"Primal"}],nO=()=>h(tO,{defaultValue:[Yu[0],Yu[1]],isMulti:!0,name:"colors",options:Yu,className:"basic-multi-select",classNamePrefix:"select"});function rO(){x.useRef(null);const[e,t]=x.useState(!1);x.useState([]),x.useState(!1),x.useState(!1);const[n,r]=x.useState(h(ng,{setShowModal:t,handleSubmit:_o.updatePassword}));return N(T5,{children:[h("section",{className:"modal__container",children:e?h(W5,{setIsDisplayed:t,children:n}):h(pn,{})}),N("section",{className:"profile-page",children:[N("section",{className:"container profile",children:[N("picture",{children:[h("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),h(Xe,{icon:df,className:"userIcon"})]}),h("h3",{children:"Hi! Bob"}),h("h3",{children:"Email@email.com"})]}),N("section",{className:"container app-config",children:[N("section",{children:[h("h4",{children:"Your Dietary Preferences"}),h(nO,{})]}),N("ul",{className:"options",children:[h("li",{className:"btn",onClick:()=>{t(!0),r(h(Z5,{setShowModal:t,handleSubmit:_o.updateCaloric}))},children:h("span",{children:"Update Caloric settings"})}),h("li",{className:"btn",onClick:()=>{t(!0),r(h(J5,{setShowModal:t,handleSubmit:_o.updateEmail}))},children:h("span",{children:"Update Email"})}),h("li",{onClick:()=>{t(!0),r(h(ng,{setShowModal:t,handleSubmit:_o.updatePassword}))},className:"btn",children:h("div",{children:h("span",{children:"Update Password"})})})]})]})]})]})}function Vi({children:e}){const{isLoggedIn:t}=x.useContext(Si);return t?h(pn,{children:e}):h(Qb,{to:"/login"})}function iO(){return h(oC,{children:N("div",{className:"App",children:[h("header",{children:h(lC,{})}),N("main",{children:[N(qb,{children:[h(Yt,{path:"/",element:h(fC,{})}),h(Yt,{path:"/search",element:h(Vi,{children:h(p5,{})})}),h(Yt,{path:"/details",element:h(Vi,{children:h(k5,{})})}),h(Yt,{path:"/saved",element:h(Vi,{children:h(g5,{})})}),h(Yt,{path:"/signup",element:h(hC,{})}),h(Yt,{path:"/login",element:h(w5,{})}),h(Yt,{path:"/mealPlanner",element:h(Vi,{children:h(N5,{})})}),h(Yt,{path:"/profile",element:h(Vi,{children:h(rO,{})})}),h(Yt,{path:"/*",element:h("h1",{children:"404 no page"})})]}),h(R5,{})]})]})})}Gu.createRoot(document.getElementById("root")).render(h(xn.StrictMode,{children:h(nx,{children:h(iO,{})})}));
