function yh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function wh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ki={},xh={get exports(){return ki},set exports(e){ki=e}},Ho={},b={},Sh={get exports(){return b},set exports(e){b=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),kh=Symbol.for("react.portal"),bh=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),zh=Symbol.for("react.provider"),Ph=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),Oh=Symbol.for("react.memo"),Ah=Symbol.for("react.lazy"),Cf=Symbol.iterator;function Rh(e){return e===null||typeof e!="object"?null:(e=Cf&&e[Cf]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bd=Object.assign,Hd={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Ud}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vd(){}Vd.prototype=Dr.prototype;function Qu(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Ud}var Gu=Qu.prototype=new Vd;Gu.constructor=Qu;Bd(Gu,Dr.prototype);Gu.isPureReactComponent=!0;var zf=Array.isArray,Wd=Object.prototype.hasOwnProperty,Ku={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Wd.call(t,r)&&!Yd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:Ku.current}}function Th(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function Ih(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pf=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ih(""+e.key):t.toString(36)}function Fa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case kh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$l(o,0):r,zf(i)?(n="",e!=null&&(n=e.replace(Pf,"$&/")+"/"),Fa(i,t,n,"",function(u){return u})):i!=null&&(Xu(i)&&(i=Th(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",zf(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+$l(a,l);o+=Fa(a,t,n,s,i)}else if(s=Rh(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+$l(a,l++),o+=Fa(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(e,t,n){if(e==null)return e;var r=[],i=0;return Fa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ua={transition:null},$h={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Ku};Q.Children={map:sa,forEach:function(e,t,n){sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sa(e,function(){t++}),t},toArray:function(e){return sa(e,function(t){return t})||[]},only:function(e){if(!Xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Dr;Q.Fragment=bh;Q.Profiler=Ch;Q.PureComponent=Qu;Q.StrictMode=Eh;Q.Suspense=_h;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$h;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ku.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Wd.call(t,s)&&!Yd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:Ph,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zh,_context:e},e.Consumer=e};Q.createElement=Qd;Q.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Nh,render:e}};Q.isValidElement=Xu;Q.lazy=function(e){return{$$typeof:Ah,_payload:{_status:-1,_result:e},_init:Lh}};Q.memo=function(e,t){return{$$typeof:Oh,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Q.useContext=function(e){return Ge.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Q.useId=function(){return Ge.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Q.useRef=function(e){return Ge.current.useRef(e)};Q.useState=function(e){return Ge.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ge.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(Sh);const tn=wh(b),bs=yh({__proto__:null,default:tn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=b,jh=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),Fh=Object.prototype.hasOwnProperty,Uh=Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bh={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fh.call(t,r)&&!Bh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jh,type:e,key:a,ref:o,props:i,_owner:Uh.current}}Ho.Fragment=Dh;Ho.jsx=Gd;Ho.jsxs=Gd;(function(e){e.exports=Ho})(xh);const Qt=ki.Fragment,d=ki.jsx,P=ki.jsxs;var Es={},Cs={},Hh={get exports(){return Cs},set exports(e){Cs=e}},st={},zs={},Vh={get exports(){return zs},set exports(e){zs=e}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var U=O.length;O.push(D);e:for(;0<U;){var ie=U-1>>>1,R=O[ie];if(0<i(R,D))O[ie]=D,O[U]=R,U=ie;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],U=O.pop();if(U!==D){O[0]=U;e:for(var ie=0,R=O.length,I=R>>>1;ie<I;){var $=2*(ie+1)-1,B=O[$],k=$+1,G=O[k];if(0>i(B,U))k<R&&0>i(G,B)?(O[ie]=G,O[k]=U,ie=k):(O[ie]=B,O[$]=U,ie=$);else if(k<R&&0>i(G,U))O[ie]=G,O[k]=U,ie=k;else break e}}return D}function i(O,D){var U=O.sortIndex-D.sortIndex;return U!==0?U:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,f=null,h=3,w=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function S(O){if(v=!1,y(O),!g)if(n(s)!==null)g=!0,Dt(C);else{var D=n(u);D!==null&&We(S,D.startTime-O)}}function C(O,D){g=!1,v&&(v=!1,m(T),T=-1),w=!0;var U=h;try{for(y(D),f=n(s);f!==null&&(!(f.expirationTime>D)||O&&!ze());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var R=ie(f.expirationTime<=D);D=e.unstable_now(),typeof R=="function"?f.callback=R:f===n(s)&&r(s),y(D)}else r(s);f=n(s)}if(f!==null)var I=!0;else{var $=n(u);$!==null&&We(S,$.startTime-D),I=!1}return I}finally{f=null,h=U,w=!1}}var z=!1,_=null,T=-1,V=5,F=-1;function ze(){return!(e.unstable_now()-F<V)}function xe(){if(_!==null){var O=e.unstable_now();F=O;var D=!0;try{D=_(!0,O)}finally{D?Oe():(z=!1,_=null)}}else z=!1}var Oe;if(typeof p=="function")Oe=function(){p(xe)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,je=rt.port2;rt.port1.onmessage=xe,Oe=function(){je.postMessage(null)}}else Oe=function(){x(xe,0)};function Dt(O){_=O,z||(z=!0,Oe())}function We(O,D){T=x(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,Dt(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var U=h;h=D;try{return O()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=h;h=O;try{return D()}finally{h=U}},e.unstable_scheduleCallback=function(O,D,U){var ie=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,O={id:c++,callback:D,priorityLevel:O,startTime:U,expirationTime:R,sortIndex:-1},U>ie?(O.sortIndex=U,t(u,O),n(s)===null&&O===n(u)&&(v?(m(T),T=-1):v=!0,We(S,U-ie))):(O.sortIndex=R,t(s,O),g||w||(g=!0,Dt(C))),O},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(O){var D=h;return function(){var U=h;h=D;try{return O.apply(this,arguments)}finally{h=U}}}})(Kd);(function(e){e.exports=Kd})(Vh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=b,lt=zs;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jd=new Set,bi={};function rr(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(bi[e]=t,e=0;e<t.length;e++)Jd.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ps=Object.prototype.hasOwnProperty,Wh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nf={},_f={};function Yh(e){return Ps.call(_f,e)?!0:Ps.call(Nf,e)?!1:Wh.test(e)?_f[e]=!0:(Nf[e]=!0,!1)}function Qh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gh(e,t,n,r){if(t===null||typeof t>"u"||Qh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ju=/[\-:]([a-z])/g;function qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ju,qu);Me[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ju,qu);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ju,qu);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zu(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gh(t,n,i,r)&&(n=null),r||i===null?Yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),ec=Symbol.for("react.strict_mode"),Ns=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),tc=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),nc=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),e1=Symbol.for("react.offscreen"),Of=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=Of&&e[Of]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ml;function ai(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var jl=!1;function Dl(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function Kh(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case or:return"Portal";case Ns:return"Profiler";case ec:return"StrictMode";case _s:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case qd:return(e._context.displayName||"Context")+".Provider";case tc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nc:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function Xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===ec?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jh(e){var t=t1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ca(e){e._valueTracker||(e._valueTracker=Jh(e))}function n1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=t1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Af(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function r1(e,t){t=t.checked,t!=null&&Zu(e,"checked",t,!1)}function Ts(e,t){r1(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(oi(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function i1(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function If(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function a1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?a1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,o1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qh=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function l1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function s1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=l1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zh=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,t){if(t){if(Zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function js(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,br=null,Er=null;function Lf(e){if(e=Ji(e)){if(typeof Fs!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Go(t),Fs(e.stateNode,e.type,t))}}function u1(e){br?Er?Er.push(e):Er=[e]:br=e}function c1(){if(br){var e=br,t=Er;if(Er=br=null,Lf(e),t)for(e=0;e<t.length;e++)Lf(t[e])}}function f1(e,t){return e(t)}function d1(){}var Fl=!1;function p1(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return f1(e,t,n)}finally{Fl=!1,(br!==null||Er!==null)&&(d1(),c1())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Us=!1;if(Gt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Us=!1}function e2(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var fi=!1,oo=null,lo=!1,Bs=null,t2={onError:function(e){fi=!0,oo=e}};function n2(e,t,n,r,i,a,o,l,s){fi=!1,oo=null,e2.apply(t2,arguments)}function r2(e,t,n,r,i,a,o,l,s){if(n2.apply(this,arguments),fi){if(fi){var u=oo;fi=!1,oo=null}else throw Error(N(198));lo||(lo=!0,Bs=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $f(e){if(ir(e)!==e)throw Error(N(188))}function i2(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return $f(i),e;if(a===r)return $f(i),t;a=a.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function h1(e){return e=i2(e),e!==null?g1(e):null}function g1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=g1(e);if(t!==null)return t;e=e.sibling}return null}var v1=lt.unstable_scheduleCallback,Mf=lt.unstable_cancelCallback,a2=lt.unstable_shouldYield,o2=lt.unstable_requestPaint,ye=lt.unstable_now,l2=lt.unstable_getCurrentPriorityLevel,ic=lt.unstable_ImmediatePriority,y1=lt.unstable_UserBlockingPriority,so=lt.unstable_NormalPriority,s2=lt.unstable_LowPriority,w1=lt.unstable_IdlePriority,Vo=null,Mt=null;function u2(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:d2,c2=Math.log,f2=Math.LN2;function d2(e){return e>>>=0,e===0?32:31-(c2(e)/f2|0)|0}var da=64,pa=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=li(l):(a&=o,a!==0&&(r=li(a)))}else o=n&~i,o!==0?r=li(o):a!==0&&(r=li(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function p2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=p2(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function x1(){var e=da;return da<<=1,!(da&4194240)&&(da=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function h2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function S1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var k1,oc,b1,E1,C1,Vs=!1,ma=[],xn=null,Sn=null,kn=null,zi=new Map,Pi=new Map,mn=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function qr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&oc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function v2(e,t,n,r,i){switch(t){case"focusin":return xn=qr(xn,e,t,n,r,i),!0;case"dragenter":return Sn=qr(Sn,e,t,n,r,i),!0;case"mouseover":return kn=qr(kn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return zi.set(a,qr(zi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Pi.set(a,qr(Pi.get(a)||null,e,t,n,r,i)),!0}return!1}function z1(e){var t=Bn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=m1(n),t!==null){e.blockedOn=t,C1(e.priority,function(){b1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ds=r,n.target.dispatchEvent(r),Ds=null}else return t=Ji(n),t!==null&&oc(t),e.blockedOn=n,!1;t.shift()}return!0}function Df(e,t,n){Ba(e)&&n.delete(t)}function y2(){Vs=!1,xn!==null&&Ba(xn)&&(xn=null),Sn!==null&&Ba(Sn)&&(Sn=null),kn!==null&&Ba(kn)&&(kn=null),zi.forEach(Df),Pi.forEach(Df)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,y2)))}function Ni(e){function t(i){return Zr(i,e)}if(0<ma.length){Zr(ma[0],e);for(var n=1;n<ma.length;n++){var r=ma[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Zr(xn,e),Sn!==null&&Zr(Sn,e),kn!==null&&Zr(kn,e),zi.forEach(t),Pi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)z1(n),n.blockedOn===null&&mn.shift()}var Cr=nn.ReactCurrentBatchConfig,co=!0;function w2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=1,lc(e,t,n,r)}finally{te=i,Cr.transition=a}}function x2(e,t,n,r){var i=te,a=Cr.transition;Cr.transition=null;try{te=4,lc(e,t,n,r)}finally{te=i,Cr.transition=a}}function lc(e,t,n,r){if(co){var i=Ws(e,t,n,r);if(i===null)Jl(e,t,r,fo,n),jf(e,r);else if(v2(i,e,t,n,r))r.stopPropagation();else if(jf(e,r),t&4&&-1<g2.indexOf(e)){for(;i!==null;){var a=Ji(i);if(a!==null&&k1(a),a=Ws(e,t,n,r),a===null&&Jl(e,t,r,fo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var fo=null;function Ws(e,t,n,r){if(fo=null,e=rc(r),e=Bn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=m1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function P1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l2()){case ic:return 1;case y1:return 4;case so:case s2:return 16;case w1:return 536870912;default:return 16}default:return 16}}var gn=null,sc=null,Ha=null;function N1(){if(Ha)return Ha;var e,t=sc,n=t.length,r,i="value"in gn?gn.value:gn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ha=i.slice(e,1<r?1-r:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function Ff(){return!1}function ut(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ha:Ff,this.isPropagationStopped=Ff,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=ut(Fr),Xi=pe({},Fr,{view:0,detail:0}),S2=ut(Xi),Bl,Hl,ei,Wo=pe({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Bl=e.screenX-ei.screenX,Hl=e.screenY-ei.screenY):Hl=Bl=0,ei=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Uf=ut(Wo),k2=pe({},Wo,{dataTransfer:0}),b2=ut(k2),E2=pe({},Xi,{relatedTarget:0}),Vl=ut(E2),C2=pe({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),z2=ut(C2),P2=pe({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N2=ut(P2),_2=pe({},Fr,{data:0}),Bf=ut(_2),O2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R2[e])?!!t[e]:!1}function cc(){return T2}var I2=pe({},Xi,{key:function(e){if(e.key){var t=O2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L2=ut(I2),$2=pe({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=ut($2),M2=pe({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),j2=ut(M2),D2=pe({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F2=ut(D2),U2=pe({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B2=ut(U2),H2=[9,13,27,32],fc=Gt&&"CompositionEvent"in window,di=null;Gt&&"documentMode"in document&&(di=document.documentMode);var V2=Gt&&"TextEvent"in window&&!di,_1=Gt&&(!fc||di&&8<di&&11>=di),Vf=String.fromCharCode(32),Wf=!1;function O1(e,t){switch(e){case"keyup":return H2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function W2(e,t){switch(e){case"compositionend":return A1(t);case"keypress":return t.which!==32?null:(Wf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Wf?null:e;default:return null}}function Y2(e,t){if(sr)return e==="compositionend"||!fc&&O1(e,t)?(e=N1(),Ha=sc=gn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _1&&t.locale!=="ko"?null:t.data;default:return null}}var Q2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q2[e.type]:t==="textarea"}function R1(e,t,n,r){u1(r),t=po(t,"onChange"),0<t.length&&(n=new uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,_i=null;function G2(e){H1(e,0)}function Yo(e){var t=fr(e);if(n1(t))return e}function K2(e,t){if(e==="change")return t}var T1=!1;if(Gt){var Wl;if(Gt){var Yl="oninput"in document;if(!Yl){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Yl=typeof Qf.oninput=="function"}Wl=Yl}else Wl=!1;T1=Wl&&(!document.documentMode||9<document.documentMode)}function Gf(){pi&&(pi.detachEvent("onpropertychange",I1),_i=pi=null)}function I1(e){if(e.propertyName==="value"&&Yo(_i)){var t=[];R1(t,_i,e,rc(e)),p1(G2,t)}}function X2(e,t,n){e==="focusin"?(Gf(),pi=t,_i=n,pi.attachEvent("onpropertychange",I1)):e==="focusout"&&Gf()}function J2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(_i)}function q2(e,t){if(e==="click")return Yo(t)}function Z2(e,t){if(e==="input"||e==="change")return Yo(t)}function eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:eg;function Oi(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ps.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Kf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xf(e,t){var n=Kf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function L1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?L1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $1(){for(var e=window,t=ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ao(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tg(e){var t=$1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&L1(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Xf(n,a);var o=Xf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ng=Gt&&"documentMode"in document&&11>=document.documentMode,ur=null,Ys=null,mi=null,Qs=!1;function Jf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qs||ur==null||ur!==ao(r)||(r=ur,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Oi(mi,r)||(mi=r,r=po(Ys,"onSelect"),0<r.length&&(t=new uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Ql={},M1={};Gt&&(M1=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Qo(e){if(Ql[e])return Ql[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M1)return Ql[e]=t[n];return e}var j1=Qo("animationend"),D1=Qo("animationiteration"),F1=Qo("animationstart"),U1=Qo("transitionend"),B1=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){B1.set(e,t),rr(t,[e])}for(var Gl=0;Gl<qf.length;Gl++){var Kl=qf[Gl],rg=Kl.toLowerCase(),ig=Kl[0].toUpperCase()+Kl.slice(1);Mn(rg,"on"+ig)}Mn(j1,"onAnimationEnd");Mn(D1,"onAnimationIteration");Mn(F1,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(U1,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Zf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r2(r,t,void 0,e),e.currentTarget=null}function H1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Zf(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Zf(i,l,u),a=s}}}if(lo)throw e=Bs,lo=!1,Bs=null,e}function oe(e,t){var n=t[qs];n===void 0&&(n=t[qs]=new Set);var r=e+"__bubble";n.has(r)||(V1(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),V1(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[va]){e[va]=!0,Jd.forEach(function(n){n!=="selectionchange"&&(ag.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,Xl("selectionchange",!1,t))}}function V1(e,t,n,r){switch(P1(t)){case 1:var i=w2;break;case 4:i=x2;break;default:i=lc}n=i.bind(null,t,n,e),i=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}p1(function(){var u=a,c=rc(n),f=[];e:{var h=B1.get(e);if(h!==void 0){var w=uc,g=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":w=L2;break;case"focusin":g="focus",w=Vl;break;case"focusout":g="blur",w=Vl;break;case"beforeblur":case"afterblur":w=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=b2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=j2;break;case j1:case D1:case F1:w=z2;break;case U1:w=F2;break;case"scroll":w=S2;break;case"wheel":w=B2;break;case"copy":case"cut":case"paste":w=N2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Hf}var v=(t&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Ci(p,m),S!=null&&v.push(Ri(p,S,y)))),x)break;p=p.return}0<v.length&&(h=new w(h,g,null,n,c),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ds&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Kt]))break e;if((w||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Bn(g):null,g!==null&&(x=ir(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(v=Uf,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hf,S="onPointerLeave",m="onPointerEnter",p="pointer"),x=w==null?h:fr(w),y=g==null?h:fr(g),h=new v(S,p+"leave",w,n,c),h.target=x,h.relatedTarget=y,S=null,Bn(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=x,S=v),x=S,w&&g)t:{for(v=w,m=g,p=0,y=v;y;y=ar(y))p++;for(y=0,S=m;S;S=ar(S))y++;for(;0<p-y;)v=ar(v),p--;for(;0<y-p;)m=ar(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ar(v),m=ar(m)}v=null}else v=null;w!==null&&e0(f,h,w,v,!1),g!==null&&x!==null&&e0(f,x,g,v,!0)}}e:{if(h=u?fr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=K2;else if(Yf(h))if(T1)C=Z2;else{C=J2;var z=X2}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=q2);if(C&&(C=C(e,u))){R1(f,C,n,c);break e}z&&z(e,h,u),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&Is(h,"number",h.value)}switch(z=u?fr(u):window,e){case"focusin":(Yf(z)||z.contentEditable==="true")&&(ur=z,Ys=u,mi=null);break;case"focusout":mi=Ys=ur=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Jf(f,n,c);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":Jf(f,n,c)}var _;if(fc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else sr?O1(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(_1&&n.locale!=="ko"&&(sr||T!=="onCompositionStart"?T==="onCompositionEnd"&&sr&&(_=N1()):(gn=c,sc="value"in gn?gn.value:gn.textContent,sr=!0)),z=po(u,T),0<z.length&&(T=new Bf(T,e,null,n,c),f.push({event:T,listeners:z}),_?T.data=_:(_=A1(n),_!==null&&(T.data=_)))),(_=V2?W2(e,n):Y2(e,n))&&(u=po(u,"onBeforeInput"),0<u.length&&(c=new Bf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=_))}H1(f,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ci(e,n),a!=null&&r.unshift(Ri(e,a,i)),a=Ci(e,t),a!=null&&r.push(Ri(e,a,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e0(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ci(n,a),s!=null&&o.unshift(Ri(n,s,l))):i||(s=Ci(n,a),s!=null&&o.push(Ri(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var og=/\r\n?/g,lg=/\u0000|\uFFFD/g;function t0(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(lg,"")}function ya(e,t,n){if(t=t0(t),t0(e)!==t&&n)throw Error(N(425))}function mo(){}var Gs=null,Ks=null;function Xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(e){return n0.resolve(null).then(e).catch(cg)}:Js;function cg(e){setTimeout(function(){throw e})}function ql(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function r0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Ur,Ti="__reactProps$"+Ur,Kt="__reactContainer$"+Ur,qs="__reactEvents$"+Ur,fg="__reactListeners$"+Ur,dg="__reactHandles$"+Ur;function Bn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=r0(e);e!==null;){if(n=e[Tt])return n;e=r0(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[Tt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Go(e){return e[Ti]||null}var Zs=[],dr=-1;function jn(e){return{current:e}}function se(e){0>dr||(e.current=Zs[dr],Zs[dr]=null,dr--)}function ae(e,t){dr++,Zs[dr]=e.current,e.current=t}var An={},He=jn(An),et=jn(!1),Kn=An;function Or(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function ho(){se(et),se(He)}function i0(e,t,n){if(He.current!==An)throw Error(N(168));ae(He,t),ae(et,n)}function W1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Xh(e)||"Unknown",i));return pe({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Kn=He.current,ae(He,e),ae(et,et.current),!0}function a0(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=W1(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,se(et),se(He),ae(He,e)):se(et),ae(et,n)}var Ut=null,Ko=!1,Zl=!1;function Y1(e){Ut===null?Ut=[e]:Ut.push(e)}function pg(e){Ko=!0,Y1(e)}function Dn(){if(!Zl&&Ut!==null){Zl=!0;var e=0,t=te;try{var n=Ut;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,Ko=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),v1(ic,Dn),i}finally{te=t,Zl=!1}}return null}var pr=[],mr=0,vo=null,yo=0,dt=[],pt=0,Xn=null,Bt=1,Ht="";function Fn(e,t){pr[mr++]=yo,pr[mr++]=vo,vo=e,yo=t}function Q1(e,t,n){dt[pt++]=Bt,dt[pt++]=Ht,dt[pt++]=Xn,Xn=e;var r=Bt;e=Ht;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var a=32-Pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-Pt(t)+i|n<<i|r,Ht=a+e}else Bt=1<<a|n<<i|r,Ht=e}function pc(e){e.return!==null&&(Fn(e,1),Q1(e,1,0))}function mc(e){for(;e===vo;)vo=pr[--mr],pr[mr]=null,yo=pr[--mr],pr[mr]=null;for(;e===Xn;)Xn=dt[--pt],dt[pt]=null,Ht=dt[--pt],dt[pt]=null,Bt=dt[--pt],dt[pt]=null}var ot=null,at=null,ce=!1,Ct=null;function G1(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function o0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,at=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,at=null,!0):!1;default:return!1}}function eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tu(e){if(ce){var t=at;if(t){var n=t;if(!o0(e,t)){if(eu(e))throw Error(N(418));t=bn(n.nextSibling);var r=ot;t&&o0(e,t)?G1(r,n):(e.flags=e.flags&-4097|2,ce=!1,ot=e)}}else{if(eu(e))throw Error(N(418));e.flags=e.flags&-4097|2,ce=!1,ot=e}}}function l0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function wa(e){if(e!==ot)return!1;if(!ce)return l0(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xs(e.type,e.memoizedProps)),t&&(t=at)){if(eu(e))throw K1(),Error(N(418));for(;t;)G1(e,t),t=bn(t.nextSibling)}if(l0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ot?bn(e.stateNode.nextSibling):null;return!0}function K1(){for(var e=at;e;)e=bn(e.nextSibling)}function Ar(){at=ot=null,ce=!1}function hc(e){Ct===null?Ct=[e]:Ct.push(e)}var mg=nn.ReactCurrentBatchConfig;function bt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wo=jn(null),xo=null,hr=null,gc=null;function vc(){gc=hr=xo=null}function yc(e){var t=wo.current;se(wo),e._currentValue=t}function nu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){xo=e,gc=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(gc!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(xo===null)throw Error(N(308));hr=e,xo.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Hn=null;function wc(e){Hn===null?Hn=[e]:Hn.push(e)}function X1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,wc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}function s0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;pn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var f=i.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,w=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(w,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(w,f,h):g,h==null)break e;f=pe({},f,h);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,s=f):c=c.next=w,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=f}}function u0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var q1=new Xd.Component().refs;function ru(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=zn(e),a=Wt(r,i);a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(Nt(t,e,i,r),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=zn(e),a=Wt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(Nt(t,e,i,r),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=zn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(Nt(t,e,r,n),Wa(t,e,r))}};function c0(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,a):!0}function Z1(e,t,n){var r=!1,i=An,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=tt(t)?Kn:He.current,r=t.contextTypes,a=(r=r!=null)?Or(e,i):An),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function f0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function iu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=q1,xc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=tt(t)?Kn:He.current,i.context=Or(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ru(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===q1&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function d0(e){var t=e._init;return t(e._payload)}function ep(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Pn(m,p),m.index=0,m.sibling=null,m}function a(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,S){return p===null||p.tag!==6?(p=os(y,m.mode,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function s(m,p,y,S){var C=y.type;return C===lr?c(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&d0(C)===p.type)?(S=i(p,y.props),S.ref=ti(m,p,y),S.return=m,S):(S=Ja(y.type,y.key,y.props,null,m.mode,S),S.ref=ti(m,p,y),S.return=m,S)}function u(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ls(y,m.mode,S),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,S,C){return p===null||p.tag!==7?(p=Gn(y,m.mode,S,C),p.return=m,p):(p=i(p,y),p.return=m,p)}function f(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=os(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return y=Ja(p.type,p.key,p.props,null,m.mode,y),y.ref=ti(m,null,p),y.return=m,y;case or:return p=ls(p,m.mode,y),p.return=m,p;case dn:var S=p._init;return f(m,S(p._payload),y)}if(oi(p)||Xr(p))return p=Gn(p,m.mode,y,null),p.return=m,p;xa(m,p)}return null}function h(m,p,y,S){var C=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:return y.key===C?s(m,p,y,S):null;case or:return y.key===C?u(m,p,y,S):null;case dn:return C=y._init,h(m,p,C(y._payload),S)}if(oi(y)||Xr(y))return C!==null?null:c(m,p,y,S,null);xa(m,y)}return null}function w(m,p,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,l(p,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:return m=m.get(S.key===null?y:S.key)||null,s(p,m,S,C);case or:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,C);case dn:var z=S._init;return w(m,p,y,z(S._payload),C)}if(oi(S)||Xr(S))return m=m.get(y)||null,c(p,m,S,C,null);xa(p,S)}return null}function g(m,p,y,S){for(var C=null,z=null,_=p,T=p=0,V=null;_!==null&&T<y.length;T++){_.index>T?(V=_,_=null):V=_.sibling;var F=h(m,_,y[T],S);if(F===null){_===null&&(_=V);break}e&&_&&F.alternate===null&&t(m,_),p=a(F,p,T),z===null?C=F:z.sibling=F,z=F,_=V}if(T===y.length)return n(m,_),ce&&Fn(m,T),C;if(_===null){for(;T<y.length;T++)_=f(m,y[T],S),_!==null&&(p=a(_,p,T),z===null?C=_:z.sibling=_,z=_);return ce&&Fn(m,T),C}for(_=r(m,_);T<y.length;T++)V=w(_,m,T,y[T],S),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?T:V.key),p=a(V,p,T),z===null?C=V:z.sibling=V,z=V);return e&&_.forEach(function(ze){return t(m,ze)}),ce&&Fn(m,T),C}function v(m,p,y,S){var C=Xr(y);if(typeof C!="function")throw Error(N(150));if(y=C.call(y),y==null)throw Error(N(151));for(var z=C=null,_=p,T=p=0,V=null,F=y.next();_!==null&&!F.done;T++,F=y.next()){_.index>T?(V=_,_=null):V=_.sibling;var ze=h(m,_,F.value,S);if(ze===null){_===null&&(_=V);break}e&&_&&ze.alternate===null&&t(m,_),p=a(ze,p,T),z===null?C=ze:z.sibling=ze,z=ze,_=V}if(F.done)return n(m,_),ce&&Fn(m,T),C;if(_===null){for(;!F.done;T++,F=y.next())F=f(m,F.value,S),F!==null&&(p=a(F,p,T),z===null?C=F:z.sibling=F,z=F);return ce&&Fn(m,T),C}for(_=r(m,_);!F.done;T++,F=y.next())F=w(_,m,T,F.value,S),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?T:F.key),p=a(F,p,T),z===null?C=F:z.sibling=F,z=F);return e&&_.forEach(function(xe){return t(m,xe)}),ce&&Fn(m,T),C}function x(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===lr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:e:{for(var C=y.key,z=p;z!==null;){if(z.key===C){if(C=y.type,C===lr){if(z.tag===7){n(m,z.sibling),p=i(z,y.props.children),p.return=m,m=p;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&d0(C)===z.type){n(m,z.sibling),p=i(z,y.props),p.ref=ti(m,z,y),p.return=m,m=p;break e}n(m,z);break}else t(m,z);z=z.sibling}y.type===lr?(p=Gn(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=Ja(y.type,y.key,y.props,null,m.mode,S),S.ref=ti(m,p,y),S.return=m,m=S)}return o(m);case or:e:{for(z=y.key;p!==null;){if(p.key===z)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ls(y,m.mode,S),p.return=m,m=p}return o(m);case dn:return z=y._init,x(m,p,z(y._payload),S)}if(oi(y))return g(m,p,y,S);if(Xr(y))return v(m,p,y,S);xa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=os(y,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return x}var Rr=ep(!0),tp=ep(!1),qi={},jt=jn(qi),Ii=jn(qi),Li=jn(qi);function Vn(e){if(e===qi)throw Error(N(174));return e}function Sc(e,t){switch(ae(Li,t),ae(Ii,e),ae(jt,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$s(t,e)}se(jt),ae(jt,t)}function Tr(){se(jt),se(Ii),se(Li)}function np(e){Vn(Li.current);var t=Vn(jt.current),n=$s(t,e.type);t!==n&&(ae(Ii,e),ae(jt,n))}function kc(e){Ii.current===e&&(se(jt),se(Ii))}var fe=jn(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function bc(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Ya=nn.ReactCurrentDispatcher,ts=nn.ReactCurrentBatchConfig,Jn=0,de=null,Se=null,Pe=null,bo=!1,hi=!1,$i=0,hg=0;function Fe(){throw Error(N(321))}function Ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Cc(e,t,n,r,i,a){if(Jn=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ya.current=e===null||e.memoizedState===null?wg:xg,e=n(r,i),hi){a=0;do{if(hi=!1,$i=0,25<=a)throw Error(N(301));a+=1,Pe=Se=null,t.updateQueue=null,Ya.current=Sg,e=n(r,i)}while(hi)}if(Ya.current=Eo,t=Se!==null&&Se.next!==null,Jn=0,Pe=Se=de=null,bo=!1,t)throw Error(N(300));return e}function zc(){var e=$i!==0;return $i=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function yt(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Pe===null?de.memoizedState:Pe.next;if(t!==null)Pe=t,Se=e;else{if(e===null)throw Error(N(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Pe===null?de.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Mi(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((Jn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,o=r):s=s.next=f,de.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,_t(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,qn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=yt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);_t(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function rp(){}function ip(e,t){var n=de,r=yt(),i=t(),a=!_t(r.memoizedState,i);if(a&&(r.memoizedState=i,Ze=!0),r=r.queue,Pc(lp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,ji(9,op.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(N(349));Jn&30||ap(n,t,i)}return i}function ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function op(e,t,n,r){t.value=n,t.getSnapshot=r,sp(t)&&up(e)}function lp(e,t,n){return n(function(){sp(t)&&up(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function up(e){var t=Xt(e,1);t!==null&&Nt(t,e,1,-1)}function p0(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},t.queue=e,e=e.dispatch=yg.bind(null,de,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cp(){return yt().memoizedState}function Qa(e,t,n,r){var i=Rt();de.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=yt();r=r===void 0?null:r;var a=void 0;if(Se!==null){var o=Se.memoizedState;if(a=o.destroy,r!==null&&Ec(r,o.deps)){i.memoizedState=ji(t,n,a,r);return}}de.flags|=e,i.memoizedState=ji(1|t,n,a,r)}function m0(e,t){return Qa(8390656,8,e,t)}function Pc(e,t){return Jo(2048,8,e,t)}function fp(e,t){return Jo(4,2,e,t)}function dp(e,t){return Jo(4,4,e,t)}function pp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mp(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,pp.bind(null,t,e),n)}function Nc(){}function hp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ec(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ec(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vp(e,t,n){return Jn&21?(_t(n,t)||(n=x1(),de.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function gg(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{te=n,ts.transition=r}}function yp(){return yt().memoizedState}function vg(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wp(e))xp(t,n);else if(n=X1(e,t,n,r),n!==null){var i=Qe();Nt(n,e,r,i),Sp(n,t,r)}}function yg(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wp(e))xp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var s=t.interleaved;s===null?(i.next=i,wc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=X1(e,t,i,r),n!==null&&(i=Qe(),Nt(n,e,r,i),Sp(n,t,r))}}function wp(e){var t=e.alternate;return e===de||t!==null&&t===de}function xp(e,t){hi=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ac(e,n)}}var Eo={readContext:vt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},wg={readContext:vt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:m0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vg.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:p0,useDebugValue:Nc,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=p0(!1),t=e[0];return e=gg.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Rt();if(ce){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Ne===null)throw Error(N(349));Jn&30||ap(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,m0(lp.bind(null,r,a,e),[e]),r.flags|=2048,ji(9,op.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Ne.identifierPrefix;if(ce){var n=Ht,r=Bt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xg={readContext:vt,useCallback:hp,useContext:vt,useEffect:Pc,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:ns,useRef:cp,useState:function(){return ns(Mi)},useDebugValue:Nc,useDeferredValue:function(e){var t=yt();return vp(t,Se.memoizedState,e)},useTransition:function(){var e=ns(Mi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:yp,unstable_isNewReconciler:!1},Sg={readContext:vt,useCallback:hp,useContext:vt,useEffect:Pc,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:rs,useRef:cp,useState:function(){return rs(Mi)},useDebugValue:Nc,useDeferredValue:function(e){var t=yt();return Se===null?t.memoizedState=e:vp(t,Se.memoizedState,e)},useTransition:function(){var e=rs(Mi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:yp,unstable_isNewReconciler:!1};function Ir(e,t){try{var n="",r=t;do n+=Kh(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kg=typeof WeakMap=="function"?WeakMap:Map;function kp(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,hu=r),au(e,t)},n}function bp(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){au(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){au(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function h0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$g.bind(null,e,t,n),t.then(e,e))}function g0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function v0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var bg=nn.ReactCurrentOwner,Ze=!1;function Ye(e,t,n,r){t.child=e===null?tp(t,null,n,r):Rr(t,e.child,n,r)}function y0(e,t,n,r,i){n=n.render;var a=t.ref;return zr(t,i),r=Cc(e,t,n,r,a,i),n=zc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ce&&n&&pc(t),t.flags|=1,Ye(e,t,r,i),t.child)}function w0(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!$c(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ep(e,t,a,r,i)):(e=Ja(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(o,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=Pn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ep(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Oi(a,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return ou(e,t,n,r,i)}function Cp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(vr,it),it|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(vr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ae(vr,it),it|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ae(vr,it),it|=r;return Ye(e,t,i,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ou(e,t,n,r,i){var a=tt(n)?Kn:He.current;return a=Or(t,a),zr(t,i),n=Cc(e,t,n,r,a,i),r=zc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ce&&r&&pc(t),t.flags|=1,Ye(e,t,n,i),t.child)}function x0(e,t,n,r,i){if(tt(n)){var a=!0;go(t)}else a=!1;if(zr(t,i),t.stateNode===null)Ga(e,t),Z1(t,n,r),iu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=tt(n)?Kn:He.current,u=Or(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&f0(t,o,r,u),pn=!1;var h=t.memoizedState;o.state=h,So(t,r,o,i),s=t.memoizedState,l!==r||h!==s||et.current||pn?(typeof c=="function"&&(ru(t,n,c,r),s=t.memoizedState),(l=pn||c0(t,n,l,r,h,s,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,J1(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:bt(t.type,l),o.props=u,f=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=tt(n)?Kn:He.current,s=Or(t,s));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==s)&&f0(t,o,r,s),pn=!1,h=t.memoizedState,o.state=h,So(t,r,o,i);var g=t.memoizedState;l!==f||h!==g||et.current||pn?(typeof w=="function"&&(ru(t,n,w,r),g=t.memoizedState),(u=pn||c0(t,n,u,r,h,g,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return lu(e,t,n,r,a,i)}function lu(e,t,n,r,i,a){zp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&a0(t,n,!1),Jt(e,t,a);r=t.stateNode,bg.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rr(t,e.child,null,a),t.child=Rr(t,null,l,a)):Ye(e,t,l,a),t.memoizedState=r.state,i&&a0(t,n,!0),t.child}function Pp(e){var t=e.stateNode;t.pendingContext?i0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i0(e,t.context,!1),Sc(e,t.containerInfo)}function S0(e,t,n,r,i){return Ar(),hc(i),t.flags|=256,Ye(e,t,n,r),t.child}var su={dehydrated:null,treeContext:null,retryLane:0};function uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Np(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(fe,i&1),e===null)return tu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=el(o,r,0,null),e=Gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=uu(n),t.memoizedState=su,e):_c(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Eg(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Pn(l,a):(a=Gn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?uu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=su,r}return a=e.child,e=a.sibling,r=Pn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _c(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sa(e,t,n,r){return r!==null&&hc(r),Rr(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(N(422))),Sa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=el({mode:"visible",children:r.children},i,0,null),a=Gn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rr(t,e.child,null,o),t.child.memoizedState=uu(o),t.memoizedState=su,a);if(!(t.mode&1))return Sa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(N(419)),r=is(a,r,void 0),Sa(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ze||l){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Xt(e,i),Nt(r,e,i,-1))}return Lc(),r=is(Error(N(421))),Sa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,at=bn(i.nextSibling),ot=t,ce=!0,Ct=null,e!==null&&(dt[pt++]=Bt,dt[pt++]=Ht,dt[pt++]=Xn,Bt=e.id,Ht=e.overflow,Xn=t),t=_c(t,r.children),t.flags|=4096,t)}function k0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nu(e.return,t,n)}function as(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function _p(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ye(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&k0(e,n,t);else if(e.tag===19)k0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),as(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}as(t,!0,n,null,a);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ga(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t,n){switch(t.tag){case 3:Pp(t),Ar();break;case 5:np(t);break;case 1:tt(t.type)&&go(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Np(e,t,n):(ae(fe,fe.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _p(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Cp(e,t,n)}return Jt(e,t,n)}var Op,cu,Ap,Rp;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cu=function(){};Ap=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(jt.current);var a=null;switch(n){case"input":i=Rs(e,i),r=Rs(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Ls(e,i),r=Ls(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}Ms(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zg(e,t,n){var r=t.pendingProps;switch(mc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&ho(),Ue(t),null;case 3:return r=t.stateNode,Tr(),se(et),se(He),bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(yu(Ct),Ct=null))),cu(e,t),Ue(t),null;case 5:kc(t);var i=Vn(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ue(t),null}if(e=Vn(jt.current),wa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[Ti]=a,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)oe(si[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Af(r,a),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},oe("invalid",r);break;case"textarea":Tf(r,a),oe("invalid",r)}Ms(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ca(r),Rf(r,a,!0);break;case"textarea":ca(r),If(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=a1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Tt]=t,e[Ti]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(o=js(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)oe(si[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Af(e,r),i=Rs(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Tf(e,r),i=Ls(e,r),oe("invalid",e);break;default:i=r}Ms(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?s1(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&o1(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ei(e,s):typeof s=="number"&&Ei(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(bi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&oe("scroll",e):s!=null&&Zu(e,a,s,o))}switch(n){case"input":ca(e),Rf(e,r,!1);break;case"textarea":ca(e),If(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kr(e,!!r.multiple,a,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Vn(Li.current),Vn(jt.current),wa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Ue(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&at!==null&&t.mode&1&&!(t.flags&128))K1(),Ar(),t.flags|=98560,a=!1;else if(a=wa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[Tt]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else Ct!==null&&(yu(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ke===0&&(ke=3):Lc())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Tr(),cu(e,t),e===null&&Ai(t.stateNode.containerInfo),Ue(t),null;case 10:return yc(t.type._context),Ue(t),null;case 17:return tt(t.type)&&ho(),Ue(t),null;case 19:if(se(fe),a=t.memoizedState,a===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ni(a,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ko(e),o!==null){for(t.flags|=128,ni(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ye()>Lr&&(t.flags|=128,r=!0,ni(a,!1),t.lanes=4194304)}else{if(!r)if(e=ko(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Ue(t),null}else 2*ye()-a.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ni(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Pg(e,t){switch(mc(t),t.tag){case 1:return tt(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),se(et),se(He),bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kc(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Tr(),null;case 10:return yc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var ka=!1,Be=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,M=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function fu(e,t,n){try{n()}catch(r){he(e,t,r)}}var b0=!1;function _g(e,t){if(Gs=co,e=$1(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==a||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=o),h===a&&++c===r&&(s=o),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ks={focusedElem:e,selectionRange:n},co=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:bt(t.type,v),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return g=b0,b0=!1,g}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fu(t,n,a)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Ti],delete t[qs],delete t[fg],delete t[dg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function E0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}var Le=null,Et=!1;function ln(e,t,n){for(n=n.child;n!==null;)Lp(e,t,n),n=n.sibling}function Lp(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Be||gr(n,t);case 6:var r=Le,i=Et;Le=null,ln(e,t,n),Le=r,Et=i,Le!==null&&(Et?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Et?(e=Le,n=n.stateNode,e.nodeType===8?ql(e.parentNode,n):e.nodeType===1&&ql(e,n),Ni(e)):ql(Le,n.stateNode));break;case 4:r=Le,i=Et,Le=n.stateNode.containerInfo,Et=!0,ln(e,t,n),Le=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fu(n,t,o),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Be&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,ln(e,t,n),Be=r):ln(e,t,n);break;default:ln(e,t,n)}}function C0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ng),t.forEach(function(r){var i=jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Et=!1;break e;case 3:Le=l.stateNode.containerInfo,Et=!0;break e;case 4:Le=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Le===null)throw Error(N(160));Lp(a,o,i),Le=null,Et=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Ot(e),r&4){try{gi(3,e,e.return),qo(3,e)}catch(v){he(e,e.return,v)}try{gi(5,e,e.return)}catch(v){he(e,e.return,v)}}break;case 1:St(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(St(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Ei(i,"")}catch(v){he(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&r1(i,a),js(l,o);var u=js(l,a);for(o=0;o<s.length;o+=2){var c=s[o],f=s[o+1];c==="style"?s1(i,f):c==="dangerouslySetInnerHTML"?o1(i,f):c==="children"?Ei(i,f):Zu(i,c,f,u)}switch(l){case"input":Ts(i,a);break;case"textarea":i1(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?kr(i,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?kr(i,!!a.multiple,a.defaultValue,!0):kr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ti]=a}catch(v){he(e,e.return,v)}}break;case 6:if(St(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){he(e,e.return,v)}}break;case 3:if(St(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(v){he(e,e.return,v)}break;case 4:St(t,e),Ot(e);break;case 13:St(t,e),Ot(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Rc=ye())),r&4&&C0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||c,St(t,e),Be=u):St(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(h=M,w=h.child,h.tag){case 0:case 11:case 14:case 15:gi(4,h,h.return);break;case 1:gr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:gr(h,h.return);break;case 22:if(h.memoizedState!==null){P0(f);continue}}w!==null?(w.return=h,M=w):P0(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=l1("display",o))}catch(v){he(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){he(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:St(t,e),Ot(e),r&4&&C0(e);break;case 21:break;default:St(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var a=E0(e);mu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=E0(e);pu(e,l,o);break;default:throw Error(N(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Og(e,t,n){M=e,Mp(e)}function Mp(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ka;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Be;l=ka;var u=Be;if(ka=o,(Be=s)&&!u)for(M=i;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?N0(i):s!==null?(s.return=o,M=s):N0(i);for(;a!==null;)M=a,Mp(a),a=a.sibling;M=i,ka=l,Be=u}z0(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):z0(e)}}function z0(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&u0(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}u0(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ni(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Be||t.flags&512&&du(t)}catch(h){he(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function P0(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function N0(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){he(t,i,s)}}var a=t.return;try{du(t)}catch(s){he(t,a,s)}break;case 5:var o=t.return;try{du(t)}catch(s){he(t,o,s)}}}catch(s){he(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var Ag=Math.ceil,Co=nn.ReactCurrentDispatcher,Oc=nn.ReactCurrentOwner,gt=nn.ReactCurrentBatchConfig,X=0,Ne=null,we=null,$e=0,it=0,vr=jn(0),ke=0,Di=null,qn=0,Zo=0,Ac=0,vi=null,qe=null,Rc=0,Lr=1/0,Ft=null,zo=!1,hu=null,Cn=null,ba=!1,vn=null,Po=0,yi=0,gu=null,Ka=-1,Xa=0;function Qe(){return X&6?ye():Ka!==-1?Ka:Ka=ye()}function zn(e){return e.mode&1?X&2&&$e!==0?$e&-$e:mg.transition!==null?(Xa===0&&(Xa=x1()),Xa):(e=te,e!==0||(e=window.event,e=e===void 0?16:P1(e.type)),e):1}function Nt(e,t,n,r){if(50<yi)throw yi=0,gu=null,Error(N(185));Ki(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(Zo|=n),ke===4&&hn(e,$e)),nt(e,r),n===1&&X===0&&!(t.mode&1)&&(Lr=ye()+500,Ko&&Dn()))}function nt(e,t){var n=e.callbackNode;m2(e,t);var r=uo(e,e===Ne?$e:0);if(r===0)n!==null&&Mf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mf(n),t===1)e.tag===0?pg(_0.bind(null,e)):Y1(_0.bind(null,e)),ug(function(){!(X&6)&&Dn()}),n=null;else{switch(S1(r)){case 1:n=ic;break;case 4:n=y1;break;case 16:n=so;break;case 536870912:n=w1;break;default:n=so}n=Wp(n,jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jp(e,t){if(Ka=-1,Xa=0,X&6)throw Error(N(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=uo(e,e===Ne?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=X;X|=2;var a=Fp();(Ne!==e||$e!==t)&&(Ft=null,Lr=ye()+500,Qn(e,t));do try{Ig();break}catch(l){Dp(e,l)}while(1);vc(),Co.current=a,X=i,we!==null?t=0:(Ne=null,$e=0,t=ke)}if(t!==0){if(t===2&&(i=Hs(e),i!==0&&(r=i,t=vu(e,i))),t===1)throw n=Di,Qn(e,0),hn(e,r),nt(e,ye()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rg(i)&&(t=No(e,r),t===2&&(a=Hs(e),a!==0&&(r=a,t=vu(e,a))),t===1))throw n=Di,Qn(e,0),hn(e,r),nt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Un(e,qe,Ft);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=Rc+500-ye(),10<t)){if(uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Js(Un.bind(null,e,qe,Ft),t);break}Un(e,qe,Ft);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ag(r/1960))-r,10<r){e.timeoutHandle=Js(Un.bind(null,e,qe,Ft),r);break}Un(e,qe,Ft);break;case 5:Un(e,qe,Ft);break;default:throw Error(N(329))}}}return nt(e,ye()),e.callbackNode===n?jp.bind(null,e):null}function vu(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=No(e,t),e!==2&&(t=qe,qe=n,t!==null&&yu(t)),e}function yu(e){qe===null?qe=e:qe.push.apply(qe,e)}function Rg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_t(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Ac,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function _0(e){if(X&6)throw Error(N(327));Pr();var t=uo(e,0);if(!(t&1))return nt(e,ye()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Hs(e);r!==0&&(t=r,n=vu(e,r))}if(n===1)throw n=Di,Qn(e,0),hn(e,t),nt(e,ye()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,qe,Ft),nt(e,ye()),null}function Tc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Lr=ye()+500,Ko&&Dn())}}function Zn(e){vn!==null&&vn.tag===0&&!(X&6)&&Pr();var t=X;X|=1;var n=gt.transition,r=te;try{if(gt.transition=null,te=1,e)return e()}finally{te=r,gt.transition=n,X=t,!(X&6)&&Dn()}}function Ic(){it=vr.current,se(vr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sg(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:Tr(),se(et),se(He),bc();break;case 5:kc(r);break;case 4:Tr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:yc(r.type._context);break;case 22:case 23:Ic()}n=n.return}if(Ne=e,we=e=Pn(e.current,null),$e=it=t,ke=0,Di=null,Ac=Zo=qn=0,qe=vi=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Hn=null}return e}function Dp(e,t){do{var n=we;try{if(vc(),Ya.current=Eo,bo){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if(Jn=0,Pe=Se=de=null,hi=!1,$i=0,Oc.current=null,n===null||n.return===null){ke=1,Di=t,we=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=$e,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=g0(o);if(w!==null){w.flags&=-257,v0(w,o,l,a,t),w.mode&1&&h0(a,u,t),t=w,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){h0(a,u,t),Lc();break e}s=Error(N(426))}}else if(ce&&l.mode&1){var x=g0(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),v0(x,o,l,a,t),hc(Ir(s,l));break e}}a=s=Ir(s,l),ke!==4&&(ke=2),vi===null?vi=[a]:vi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=kp(a,s,t);s0(a,m);break e;case 1:l=s;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cn===null||!Cn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=bp(a,l,t);s0(a,S);break e}}a=a.return}while(a!==null)}Bp(n)}catch(C){t=C,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Fp(){var e=Co.current;return Co.current=Eo,e===null?Eo:e}function Lc(){(ke===0||ke===3||ke===2)&&(ke=4),Ne===null||!(qn&268435455)&&!(Zo&268435455)||hn(Ne,$e)}function No(e,t){var n=X;X|=2;var r=Fp();(Ne!==e||$e!==t)&&(Ft=null,Qn(e,t));do try{Tg();break}catch(i){Dp(e,i)}while(1);if(vc(),X=n,Co.current=r,we!==null)throw Error(N(261));return Ne=null,$e=0,ke}function Tg(){for(;we!==null;)Up(we)}function Ig(){for(;we!==null&&!a2();)Up(we)}function Up(e){var t=Vp(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Bp(e):we=t,Oc.current=null}function Bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pg(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=zg(n,t,it),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function Un(e,t,n){var r=te,i=gt.transition;try{gt.transition=null,te=1,Lg(e,t,n,r)}finally{gt.transition=i,te=r}return null}function Lg(e,t,n,r){do Pr();while(vn!==null);if(X&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(h2(e,a),e===Ne&&(we=Ne=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,Wp(so,function(){return Pr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=gt.transition,gt.transition=null;var o=te;te=1;var l=X;X|=4,Oc.current=null,_g(e,n),$p(n,e),tg(Ks),co=!!Gs,Ks=Gs=null,e.current=n,Og(n),o2(),X=l,te=o,gt.transition=a}else e.current=n;if(ba&&(ba=!1,vn=e,Po=i),a=e.pendingLanes,a===0&&(Cn=null),u2(n.stateNode),nt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=hu,hu=null,e;return Po&1&&e.tag!==0&&Pr(),a=e.pendingLanes,a&1?e===gu?yi++:(yi=0,gu=e):yi=0,Dn(),null}function Pr(){if(vn!==null){var e=S1(Po),t=gt.transition,n=te;try{if(gt.transition=null,te=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,Po=0,X&6)throw Error(N(331));var i=X;for(X|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:gi(8,c,a)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var h=c.sibling,w=c.return;if(Tp(c),c===u){M=null;break}if(h!==null){h.return=w,M=h;break}M=w}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:gi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}var p=e.current;for(M=p;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=p;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qo(9,l)}}catch(C){he(l,l.return,C)}if(l===o){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if(X=i,Dn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Vo,e)}catch{}r=!0}return r}finally{te=n,gt.transition=t}}return!1}function O0(e,t,n){t=Ir(n,t),t=kp(e,t,1),e=En(e,t,1),t=Qe(),e!==null&&(Ki(e,1,t),nt(e,t))}function he(e,t,n){if(e.tag===3)O0(e,e,n);else for(;t!==null;){if(t.tag===3){O0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Ir(n,e),e=bp(t,e,1),t=En(t,e,1),e=Qe(),t!==null&&(Ki(t,1,e),nt(t,e));break}}t=t.return}}function $g(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&($e&n)===n&&(ke===4||ke===3&&($e&130023424)===$e&&500>ye()-Rc?Qn(e,0):Ac|=n),nt(e,t)}function Hp(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=Qe();e=Xt(e,t),e!==null&&(Ki(e,t,n),nt(e,n))}function Mg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hp(e,n)}function jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Hp(e,n)}var Vp;Vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,Cg(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&Q1(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ga(e,t),e=t.pendingProps;var i=Or(t,He.current);zr(t,n),i=Cc(null,t,r,e,i,n);var a=zc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(a=!0,go(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xc(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,iu(t,r,e,n),t=lu(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&pc(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ga(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fg(r),e=bt(r,e),i){case 0:t=ou(null,t,r,e,n);break e;case 1:t=x0(null,t,r,e,n);break e;case 11:t=y0(null,t,r,e,n);break e;case 14:t=w0(null,t,r,bt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),ou(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),x0(e,t,r,i,n);case 3:e:{if(Pp(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,i=a.element,J1(e,t),So(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ir(Error(N(423)),t),t=S0(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(N(424)),t),t=S0(e,t,r,n,i);break e}else for(at=bn(t.stateNode.containerInfo.firstChild),ot=t,ce=!0,Ct=null,n=tp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=Jt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return np(t),e===null&&tu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Xs(r,i)?o=null:a!==null&&Xs(r,a)&&(t.flags|=32),zp(e,t),Ye(e,t,o,n),t.child;case 6:return e===null&&tu(t),null;case 13:return Np(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),y0(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ae(wo,r._currentValue),r._currentValue=o,a!==null)if(_t(a.value,o)){if(a.children===i.children&&!et.current){t=Jt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),nu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=vt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),w0(e,t,r,i,n);case 15:return Ep(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Ga(e,t),t.tag=1,tt(r)?(e=!0,go(t)):e=!1,zr(t,n),Z1(t,r,i),iu(t,r,i,n),lu(null,t,r,!0,e,n);case 19:return _p(e,t,n);case 22:return Cp(e,t,n)}throw Error(N(156,t.tag))};function Wp(e,t){return v1(e,t)}function Dg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Dg(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fg(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tc)return 11;if(e===nc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ja(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")$c(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Gn(n.children,i,a,t);case ec:o=8,i|=8;break;case Ns:return e=mt(12,n,t,i|2),e.elementType=Ns,e.lanes=a,e;case _s:return e=mt(13,n,t,i),e.elementType=_s,e.lanes=a,e;case Os:return e=mt(19,n,t,i),e.elementType=Os,e.lanes=a,e;case e1:return el(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qd:o=10;break e;case Zd:o=9;break e;case tc:o=11;break e;case nc:o=14;break e;case dn:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Gn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=mt(22,e,r,t),e.elementType=e1,e.lanes=n,e.stateNode={isHidden:!1},e}function os(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function ls(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ug(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,a,o,l,s){return e=new Ug(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(a),e}function Bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yp(e){if(!e)return An;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(tt(n))return W1(e,n,t)}return t}function Qp(e,t,n,r,i,a,o,l,s){return e=Mc(n,r,!0,e,i,a,o,l,s),e.context=Yp(null),n=e.current,r=Qe(),i=zn(n),a=Wt(r,i),a.callback=t??null,En(n,a,i),e.current.lanes=i,Ki(e,i,r),nt(e,r),e}function tl(e,t,n,r){var i=t.current,a=Qe(),o=zn(i);return n=Yp(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,o),e!==null&&(Nt(e,i,o,a),Wa(e,i,o)),o}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function A0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){A0(e,t),(e=e.alternate)&&A0(e,t)}function Hg(){return null}var Gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}nl.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));tl(e,t,null,null)};nl.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){tl(null,e,null,null)}),t[Kt]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=E1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&z1(e)}};function Fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function R0(){}function Vg(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=_o(o);a.call(u)}}var o=Qp(t,r,e,0,null,!1,!1,"",R0);return e._reactRootContainer=o,e[Kt]=o.current,Ai(e.nodeType===8?e.parentNode:e),Zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_o(s);l.call(u)}}var s=Mc(e,0,!1,null,null,!1,!1,"",R0);return e._reactRootContainer=s,e[Kt]=s.current,Ai(e.nodeType===8?e.parentNode:e),Zn(function(){tl(t,s,n,r)}),s}function il(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=_o(o);l.call(s)}}tl(t,o,e,i)}else o=Vg(n,t,e,i,r);return _o(o)}k1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(ac(t,n|1),nt(t,ye()),!(X&6)&&(Lr=ye()+500,Dn()))}break;case 13:Zn(function(){var r=Xt(e,1);if(r!==null){var i=Qe();Nt(r,e,1,i)}}),jc(e,1)}};oc=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Qe();Nt(t,e,134217728,n)}jc(e,134217728)}};b1=function(e){if(e.tag===13){var t=zn(e),n=Xt(e,t);if(n!==null){var r=Qe();Nt(n,e,t,r)}jc(e,t)}};E1=function(){return te};C1=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Fs=function(e,t,n){switch(t){case"input":if(Ts(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(N(90));n1(r),Ts(r,i)}}}break;case"textarea":i1(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};f1=Tc;d1=Zn;var Wg={usingClientEntryPoint:!1,Events:[Ji,fr,Go,u1,c1,Tc]},ri={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yg={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=h1(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Vo=Ea.inject(Yg),Mt=Ea}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(t))throw Error(N(200));return Bg(e,t,null,n)};st.createRoot=function(e,t){if(!Fc(e))throw Error(N(299));var n=!1,r="",i=Gp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Ai(e.nodeType===8?e.parentNode:e),new Dc(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=h1(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Zn(e)};st.hydrate=function(e,t,n){if(!rl(t))throw Error(N(200));return il(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Fc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Gp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Qp(t,null,e,1,n??null,i,!1,a,o),e[Kt]=t.current,Ai(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new nl(t)};st.render=function(e,t,n){if(!rl(t))throw Error(N(200));return il(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!rl(e))throw Error(N(40));return e._reactRootContainer?(Zn(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};st.unstable_batchedUpdates=Tc;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return il(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=st})(Hh);var T0=Cs;Es.createRoot=T0.createRoot,Es.hydrateRoot=T0.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const I0="popstate";function Qg(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return wu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Oo(i)}return Kg(t,n,null,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gg(){return Math.random().toString(36).substr(2,8)}function L0(e,t){return{usr:e.state,key:e.key,idx:t}}function wu(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||Gg()})}function Oo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=yn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(Fi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){l=yn.Pop;let x=c(),m=x==null?null:x-u;u=x,s&&s({action:l,location:v.location,delta:m})}function h(x,m){l=yn.Push;let p=wu(v.location,x,m);n&&n(p,x),u=c()+1;let y=L0(p,u),S=v.createHref(p);try{o.pushState(y,"",S)}catch{i.location.assign(S)}a&&s&&s({action:l,location:v.location,delta:1})}function w(x,m){l=yn.Replace;let p=wu(v.location,x,m);n&&n(p,x),u=c();let y=L0(p,u),S=v.createHref(p);o.replaceState(y,"",S),a&&s&&s({action:l,location:v.location,delta:0})}function g(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Oo(x);return be(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return l},get location(){return e(i,o)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(I0,f),s=x,()=>{i.removeEventListener(I0,f),s=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let m=g(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:w,go(x){return o.go(x)}};return v}var $0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($0||($0={}));function Xg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Br(t):t,i=Bc(r.pathname||"/",n);if(i==null)return null;let a=Kp(e);Jg(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=ov(a[l],uv(i));return o}function Kp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(be(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Nn([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(be(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kp(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:iv(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of Xp(a.path))i(a,o,s)}),t}function Xp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Xp(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Jg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:av(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qg=/^:\w+$/,Zg=3,ev=2,tv=1,nv=10,rv=-2,M0=e=>e==="*";function iv(e,t){let n=e.split("/"),r=n.length;return n.some(M0)&&(r+=rv),t&&(r+=ev),n.filter(i=>!M0(i)).reduce((i,a)=>i+(qg.test(a)?Zg:a===""?tv:nv),r)}function av(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ov(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=lv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;a.push({params:r,pathname:Nn([i,c.pathname]),pathnameBase:pv(Nn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Nn([i,c.pathnameBase]))}return a}function lv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=l[f]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=cv(l[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function sv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function uv(e){try{return decodeURI(e)}catch(t){return Uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cv(e,t){try{return decodeURIComponent(e)}catch(n){return Uc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:dv(n,t):t,search:mv(r),hash:hv(i)}}function dv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ss(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Fi({},e),be(!i.pathname||!i.pathname.includes("?"),ss("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),ss("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),ss("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let s=fv(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),pv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const yv=typeof Object.is=="function"?Object.is:vv,{useState:wv,useEffect:xv,useLayoutEffect:Sv,useDebugValue:kv}=bs;function bv(e,t,n){const r=t(),[{inst:i},a]=wv({inst:{value:r,getSnapshot:t}});return Sv(()=>{i.value=r,i.getSnapshot=t,us(i)&&a({inst:i})},[e,r,t]),xv(()=>(us(i)&&a({inst:i}),e(()=>{us(i)&&a({inst:i})})),[e]),kv(r),r}function us(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!yv(n,r)}catch{return!0}}function Ev(e,t,n){return t()}const Cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zv=!Cv,Pv=zv?Ev:bv;"useSyncExternalStore"in bs&&(e=>e.useSyncExternalStore)(bs);const Zp=b.createContext(null),Hc=b.createContext(null),Hr=b.createContext(null),al=b.createContext(null),Vr=b.createContext({outlet:null,matches:[]}),em=b.createContext(null);function xu(){return xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xu.apply(this,arguments)}function Nv(e,t){let{relative:n}=t===void 0?{}:t;Zi()||be(!1);let{basename:r,navigator:i}=b.useContext(Hr),{hash:a,pathname:o,search:l}=Vc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Nn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Zi(){return b.useContext(al)!=null}function Wr(){return Zi()||be(!1),b.useContext(al).location}function ea(){Zi()||be(!1);let{basename:e,navigator:t}=b.useContext(Hr),{matches:n}=b.useContext(Vr),{pathname:r}=Wr(),i=JSON.stringify(Jp(n).map(l=>l.pathnameBase)),a=b.useRef(!1);return b.useEffect(()=>{a.current=!0}),b.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=qp(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Nn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function Vc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Vr),{pathname:i}=Wr(),a=JSON.stringify(Jp(r).map(o=>o.pathnameBase));return b.useMemo(()=>qp(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function _v(e,t){Zi()||be(!1);let{navigator:n}=b.useContext(Hr),r=b.useContext(Hc),{matches:i}=b.useContext(Vr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Wr(),u;if(t){var c;let v=typeof t=="string"?Br(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||be(!1),u=v}else u=s;let f=u.pathname||"/",h=l==="/"?f:f.slice(l.length)||"/",w=Xg(e,{pathname:h}),g=Tv(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Nn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Nn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&g?b.createElement(al.Provider,{value:{location:xu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yn.Pop}},g):g}function Ov(){let e=Mv(),t=gv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,a)}class Av extends b.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Vr.Provider,{value:this.props.routeContext},b.createElement(em.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rv(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Zp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Vr.Provider,{value:t},r)}function Tv(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||be(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=b.createElement(Ov,null));let c=t.concat(r.slice(0,l+1)),f=()=>{let h=a;return s?h=u:o.route.Component?h=b.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),b.createElement(Rv,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?b.createElement(Av,{location:n.location,component:u,error:s,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var j0;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(j0||(j0={}));var Ao;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ao||(Ao={}));function Iv(e){let t=b.useContext(Hc);return t||be(!1),t}function Lv(e){let t=b.useContext(Vr);return t||be(!1),t}function $v(e){let t=Lv(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function Mv(){var e;let t=b.useContext(em),n=Iv(Ao.UseRouteError),r=$v(Ao.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function At(e){be(!1)}function jv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:a,static:o=!1}=e;Zi()&&be(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:w="default"}=r,g=b.useMemo(()=>{let v=Bc(u,l);return v==null?null:{location:{pathname:v,search:c,hash:f,state:h,key:w},navigationType:i}},[l,u,c,f,h,w,i]);return g==null?null:b.createElement(Hr.Provider,{value:s},b.createElement(al.Provider,{children:n,value:g}))}function Dv(e){let{children:t,location:n}=e,r=b.useContext(Zp),i=r&&!t?r.router.routes:Su(t);return _v(i,n)}var D0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(D0||(D0={}));new Promise(()=>{});function Su(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,Su(r.props.children,t));return}r.type!==At&&be(!1),!r.props.index||!r.props.children||be(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Su(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Fv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,t){return e.button===0&&(!t||t==="_self")&&!Fv(e)}const Bv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Hv=["aria-current","caseSensitive","className","end","style","to","children"];function Vv(e){let{basename:t,children:n,window:r}=e,i=b.useRef();i.current==null&&(i.current=Qg({window:r,v5Compat:!0}));let a=i.current,[o,l]=b.useState({action:a.action,location:a.location});return b.useLayoutEffect(()=>a.listen(l),[a]),b.createElement(jv,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const Wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wc=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c}=t,f=tm(t,Bv),{basename:h}=b.useContext(Hr),w,g=!1;if(typeof u=="string"&&Yv.test(u)&&(w=u,Wv)){let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Bc(y.pathname,h);y.origin===p.origin&&S!=null?u=S+y.search+y.hash:g=!0}let v=Nv(u,{relative:i}),x=Qv(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||x(p)}return b.createElement("a",Ro({},f,{href:w||v,onClick:g||a?r:m,ref:n,target:s}))}),sn=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,c=tm(t,Hv),f=Vc(s,{relative:c.relative}),h=Wr(),w=b.useContext(Hc),{navigator:g}=b.useContext(Hr),v=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=h.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(x=x.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),S=p?r:void 0,C;typeof a=="function"?C=a({isActive:p,isPending:y}):C=[a,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let z=typeof l=="function"?l({isActive:p,isPending:y}):l;return b.createElement(Wc,Ro({},c,{"aria-current":S,className:C,ref:n,style:z,to:s}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var F0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(F0||(F0={}));var U0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(U0||(U0={}));function Qv(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=ea(),s=Wr(),u=Vc(e,{relative:o});return b.useCallback(c=>{if(Uv(c,n)){c.preventDefault();let f=r!==void 0?r:Oo(s)===Oo(u);l(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var To={},Gv={get exports(){return To},set exports(e){To=e}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),ol=Symbol.for("react.fragment"),ll=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),ul=Symbol.for("react.provider"),cl=Symbol.for("react.context"),Kv=Symbol.for("react.server_context"),fl=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),ml=Symbol.for("react.memo"),hl=Symbol.for("react.lazy"),Xv=Symbol.for("react.offscreen"),nm;nm=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yc:switch(e=e.type,e){case ol:case sl:case ll:case dl:case pl:return e;default:switch(e=e&&e.$$typeof,e){case Kv:case cl:case fl:case hl:case ml:case ul:return e;default:return t}}case Qc:return t}}}ne.ContextConsumer=cl;ne.ContextProvider=ul;ne.Element=Yc;ne.ForwardRef=fl;ne.Fragment=ol;ne.Lazy=hl;ne.Memo=ml;ne.Portal=Qc;ne.Profiler=sl;ne.StrictMode=ll;ne.Suspense=dl;ne.SuspenseList=pl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return wt(e)===cl};ne.isContextProvider=function(e){return wt(e)===ul};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yc};ne.isForwardRef=function(e){return wt(e)===fl};ne.isFragment=function(e){return wt(e)===ol};ne.isLazy=function(e){return wt(e)===hl};ne.isMemo=function(e){return wt(e)===ml};ne.isPortal=function(e){return wt(e)===Qc};ne.isProfiler=function(e){return wt(e)===sl};ne.isStrictMode=function(e){return wt(e)===ll};ne.isSuspense=function(e){return wt(e)===dl};ne.isSuspenseList=function(e){return wt(e)===pl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ol||e===sl||e===ll||e===dl||e===pl||e===Xv||typeof e=="object"&&e!==null&&(e.$$typeof===hl||e.$$typeof===ml||e.$$typeof===ul||e.$$typeof===cl||e.$$typeof===fl||e.$$typeof===nm||e.getModuleId!==void 0)};ne.typeOf=wt;(function(e){e.exports=ne})(Gv);function Jv(e){function t(R,I,$,B,k){for(var G=0,A=0,me=0,q=0,ee,W,Ae=0,Xe=0,J,De=J=ee=0,Z=0,Re=0,Gr=0,Te=0,la=$.length,Kr=la-1,xt,H="",ve="",Il="",Ll="",on;Z<la;){if(W=$.charCodeAt(Z),Z===Kr&&A+q+me+G!==0&&(A!==0&&(W=A===47?10:47),q=me=G=0,la++,Kr++),A+q+me+G===0){if(Z===Kr&&(0<Re&&(H=H.replace(h,"")),0<H.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:H+=$.charAt(Z)}W=59}switch(W){case 123:for(H=H.trim(),ee=H.charCodeAt(0),J=1,Te=++Z;Z<la;){switch(W=$.charCodeAt(Z)){case 123:J++;break;case 125:J--;break;case 47:switch(W=$.charCodeAt(Z+1)){case 42:case 47:e:{for(De=Z+1;De<Kr;++De)switch($.charCodeAt(De)){case 47:if(W===42&&$.charCodeAt(De-1)===42&&Z+2!==De){Z=De+1;break e}break;case 10:if(W===47){Z=De+1;break e}}Z=De}}break;case 91:W++;case 40:W++;case 34:case 39:for(;Z++<Kr&&$.charCodeAt(Z)!==W;);}if(J===0)break;Z++}switch(J=$.substring(Te,Z),ee===0&&(ee=(H=H.replace(f,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Re&&(H=H.replace(h,"")),W=H.charCodeAt(1),W){case 100:case 109:case 115:case 45:Re=I;break;default:Re=Dt}if(J=t(I,Re,J,W,k+1),Te=J.length,0<O&&(Re=n(Dt,H,Gr),on=l(3,J,Re,I,Oe,xe,Te,W,k,B),H=Re.join(""),on!==void 0&&(Te=(J=on.trim()).length)===0&&(W=0,J="")),0<Te)switch(W){case 115:H=H.replace(z,o);case 100:case 109:case 45:J=H+"{"+J+"}";break;case 107:H=H.replace(p,"$1 $2"),J=H+"{"+J+"}",J=je===1||je===2&&a("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=H+J,B===112&&(J=(ve+=J,""))}else J="";break;default:J=t(I,n(I,H,Gr),J,B,k+1)}Il+=J,J=Gr=Re=De=ee=0,H="",W=$.charCodeAt(++Z);break;case 125:case 59:if(H=(0<Re?H.replace(h,""):H).trim(),1<(Te=H.length))switch(De===0&&(ee=H.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Te=(H=H.replace(" ",":")).length),0<O&&(on=l(1,H,I,R,Oe,xe,ve.length,B,k,B))!==void 0&&(Te=(H=on.trim()).length)===0&&(H="\0\0"),ee=H.charCodeAt(0),W=H.charCodeAt(1),ee){case 0:break;case 64:if(W===105||W===99){Ll+=H+$.charAt(Z);break}default:H.charCodeAt(Te-1)!==58&&(ve+=i(H,ee,W,H.charCodeAt(2)))}Gr=Re=De=ee=0,H="",W=$.charCodeAt(++Z)}}switch(W){case 13:case 10:A===47?A=0:1+ee===0&&B!==107&&0<H.length&&(Re=1,H+="\0"),0<O*U&&l(0,H,I,R,Oe,xe,ve.length,B,k,B),xe=1,Oe++;break;case 59:case 125:if(A+q+me+G===0){xe++;break}default:switch(xe++,xt=$.charAt(Z),W){case 9:case 32:if(q+G+A===0)switch(Ae){case 44:case 58:case 9:case 32:xt="";break;default:W!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:q+A+G===0&&(Re=Gr=1,xt="\f"+xt);break;case 108:if(q+A+G+rt===0&&0<De)switch(Z-De){case 2:Ae===112&&$.charCodeAt(Z-3)===58&&(rt=Ae);case 8:Xe===111&&(rt=Xe)}break;case 58:q+A+G===0&&(De=Z);break;case 44:A+me+q+G===0&&(Re=1,xt+="\r");break;case 34:case 39:A===0&&(q=q===W?0:q===0?W:q);break;case 91:q+A+me===0&&G++;break;case 93:q+A+me===0&&G--;break;case 41:q+A+G===0&&me--;break;case 40:if(q+A+G===0){if(ee===0)switch(2*Ae+3*Xe){case 533:break;default:ee=1}me++}break;case 64:A+me+q+G+De+J===0&&(J=1);break;case 42:case 47:if(!(0<q+G+me))switch(A){case 0:switch(2*W+3*$.charCodeAt(Z+1)){case 235:A=47;break;case 220:Te=Z,A=42}break;case 42:W===47&&Ae===42&&Te+2!==Z&&($.charCodeAt(Te+2)===33&&(ve+=$.substring(Te,Z+1)),xt="",A=0)}}A===0&&(H+=xt)}Xe=Ae,Ae=W,Z++}if(Te=ve.length,0<Te){if(Re=I,0<O&&(on=l(2,ve,Re,R,Oe,xe,Te,B,k,B),on!==void 0&&(ve=on).length===0))return Ll+ve+Il;if(ve=Re.join(",")+"{"+ve+"}",je*rt!==0){switch(je!==2||a(ve,2)||(rt=0),rt){case 111:ve=ve.replace(S,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}rt=0}}return Ll+ve+Il}function n(R,I,$){var B=I.trim().split(x);I=B;var k=B.length,G=R.length;switch(G){case 0:case 1:var A=0;for(R=G===0?"":R[0]+" ";A<k;++A)I[A]=r(R,I[A],$).trim();break;default:var me=A=0;for(I=[];A<k;++A)for(var q=0;q<G;++q)I[me++]=r(R[q]+" ",B[A],$).trim()}return I}function r(R,I,$){var B=I.charCodeAt(0);switch(33>B&&(B=(I=I.trim()).charCodeAt(0)),B){case 38:return I.replace(m,"$1"+R.trim());case 58:return R.trim()+I.replace(m,"$1"+R.trim());default:if(0<1*$&&0<I.indexOf("\f"))return I.replace(m,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+I}function i(R,I,$,B){var k=R+";",G=2*I+3*$+4*B;if(G===944){R=k.indexOf(":",9)+1;var A=k.substring(R,k.length-1).trim();return A=k.substring(0,R).trim()+A+";",je===1||je===2&&a(A,1)?"-webkit-"+A+A:A}if(je===0||je===2&&!a(k,1))return k;switch(G){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ze,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return A=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+k+"-ms-flex-pack"+A+k;case 1005:return g.test(k)?k.replace(w,":-webkit-")+k.replace(w,":-moz-")+k:k;case 1e3:switch(A=k.substring(13).trim(),I=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(I)){case 226:A=k.replace(C,"tb");break;case 232:A=k.replace(C,"tb-rl");break;case 220:A=k.replace(C,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+A+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(I=(k=R).length-10,A=(k.charCodeAt(I)===33?k.substring(0,I):k).substring(R.indexOf(":",7)+1).trim(),G=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:k=k.replace(A,"-webkit-"+A)+";"+k;break;case 207:case 102:k=k.replace(A,"-webkit-"+(102<G?"inline-":"")+"box")+";"+k.replace(A,"-webkit-"+A)+";"+k.replace(A,"-ms-"+A+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return A=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+A+"-ms-flex-"+A+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(T,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(T,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(F.test(R)===!0)return(A=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),I,$,B).replace(":fill-available",":stretch"):k.replace(A,"-webkit-"+A)+k.replace(A,"-moz-"+A.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,$+B===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+k}return k}function a(R,I){var $=R.indexOf(I===1?":":"{"),B=R.substring(0,I!==3?$:10);return $=R.substring($+1,R.length-1),D(I!==2?B:B.replace(V,"$1"),$,I)}function o(R,I){var $=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return $!==I+";"?$.replace(_," or ($1)").substring(4):"("+I+")"}function l(R,I,$,B,k,G,A,me,q,ee){for(var W=0,Ae=I,Xe;W<O;++W)switch(Xe=We[W].call(c,R,Ae,$,B,k,G,A,me,q,ee)){case void 0:case!1:case!0:case null:break;default:Ae=Xe}if(Ae!==I)return Ae}function s(R){switch(R){case void 0:case null:O=We.length=0;break;default:if(typeof R=="function")We[O++]=R;else if(typeof R=="object")for(var I=0,$=R.length;I<$;++I)s(R[I]);else U=!!R|0}return s}function u(R){return R=R.prefix,R!==void 0&&(D=null,R?typeof R!="function"?je=1:(je=2,D=R):je=0),u}function c(R,I){var $=R;if(33>$.charCodeAt(0)&&($=$.trim()),ie=$,$=[ie],0<O){var B=l(-1,I,$,$,Oe,xe,0,0,0,0);B!==void 0&&typeof B=="string"&&(I=B)}var k=t(Dt,$,I,0,0);return 0<O&&(B=l(-2,k,$,$,Oe,xe,k.length,0,0,0),B!==void 0&&(k=B)),ie="",rt=0,xe=Oe=1,k}var f=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,x=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,z=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,T=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,ze=/([^-])(image-set\()/,xe=1,Oe=1,rt=0,je=1,Dt=[],We=[],O=0,D=null,U=0,ie="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var qv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ey=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B0=Zv(function(e){return ey.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ku={},ty={get exports(){return ku},set exports(e){ku=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,Gc=_e?Symbol.for("react.element"):60103,Kc=_e?Symbol.for("react.portal"):60106,gl=_e?Symbol.for("react.fragment"):60107,vl=_e?Symbol.for("react.strict_mode"):60108,yl=_e?Symbol.for("react.profiler"):60114,wl=_e?Symbol.for("react.provider"):60109,xl=_e?Symbol.for("react.context"):60110,Xc=_e?Symbol.for("react.async_mode"):60111,Sl=_e?Symbol.for("react.concurrent_mode"):60111,kl=_e?Symbol.for("react.forward_ref"):60112,bl=_e?Symbol.for("react.suspense"):60113,ny=_e?Symbol.for("react.suspense_list"):60120,El=_e?Symbol.for("react.memo"):60115,Cl=_e?Symbol.for("react.lazy"):60116,ry=_e?Symbol.for("react.block"):60121,iy=_e?Symbol.for("react.fundamental"):60117,ay=_e?Symbol.for("react.responder"):60118,oy=_e?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case Xc:case Sl:case gl:case yl:case vl:case bl:return e;default:switch(e=e&&e.$$typeof,e){case xl:case kl:case Cl:case El:case wl:return e;default:return t}}case Kc:return t}}}function rm(e){return ct(e)===Sl}re.AsyncMode=Xc;re.ConcurrentMode=Sl;re.ContextConsumer=xl;re.ContextProvider=wl;re.Element=Gc;re.ForwardRef=kl;re.Fragment=gl;re.Lazy=Cl;re.Memo=El;re.Portal=Kc;re.Profiler=yl;re.StrictMode=vl;re.Suspense=bl;re.isAsyncMode=function(e){return rm(e)||ct(e)===Xc};re.isConcurrentMode=rm;re.isContextConsumer=function(e){return ct(e)===xl};re.isContextProvider=function(e){return ct(e)===wl};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};re.isForwardRef=function(e){return ct(e)===kl};re.isFragment=function(e){return ct(e)===gl};re.isLazy=function(e){return ct(e)===Cl};re.isMemo=function(e){return ct(e)===El};re.isPortal=function(e){return ct(e)===Kc};re.isProfiler=function(e){return ct(e)===yl};re.isStrictMode=function(e){return ct(e)===vl};re.isSuspense=function(e){return ct(e)===bl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===Sl||e===yl||e===vl||e===bl||e===ny||typeof e=="object"&&e!==null&&(e.$$typeof===Cl||e.$$typeof===El||e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===kl||e.$$typeof===iy||e.$$typeof===ay||e.$$typeof===oy||e.$$typeof===ry)};re.typeOf=ct;(function(e){e.exports=re})(ty);var Jc=ku,ly={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},im={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qc={};qc[Jc.ForwardRef]=uy;qc[Jc.Memo]=im;function H0(e){return Jc.isMemo(e)?im:qc[e.$$typeof]||ly}var cy=Object.defineProperty,fy=Object.getOwnPropertyNames,V0=Object.getOwnPropertySymbols,dy=Object.getOwnPropertyDescriptor,py=Object.getPrototypeOf,W0=Object.prototype;function am(e,t,n){if(typeof t!="string"){if(W0){var r=py(t);r&&r!==W0&&am(e,r,n)}var i=fy(t);V0&&(i=i.concat(V0(t)));for(var a=H0(e),o=H0(t),l=0;l<i.length;++l){var s=i[l];if(!sy[s]&&!(n&&n[s])&&!(o&&o[s])&&!(a&&a[s])){var u=dy(t,s);try{cy(e,s,u)}catch{}}}}return e}var my=am;function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},bu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!To.typeOf(e)},Io=Object.freeze([]),_n=Object.freeze({});function Ui(e){return typeof e=="function"}function Q0(e){return e.displayName||e.name||"Component"}function Zc(e){return e&&typeof e.styledComponentId=="string"}var $r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ef=typeof window<"u"&&"HTMLElement"in window,hy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),gy={};function ta(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var vy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&ta(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,l=a;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),qa=new Map,Lo=new Map,wi=1,Ca=function(e){if(qa.has(e))return qa.get(e);for(;Lo.has(wi);)wi++;var t=wi++;return qa.set(e,t),Lo.set(t,e),t},yy=function(e){return Lo.get(e)},wy=function(e,t){t>=wi&&(wi=t+1),qa.set(e,t),Lo.set(t,e)},xy="style["+$r+'][data-styled-version="5.3.9"]',Sy=new RegExp("^"+$r+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ky=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},by=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var l=o.match(Sy);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(wy(u,s),ky(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},Ey=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},om=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute($r))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","5.3.9");var o=Ey();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Cy=function(){function e(n){var r=this.element=om(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var s=a[o];if(s.ownerNode===i)return s}ta(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),zy=function(){function e(n){var r=this.element=om(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Py=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),G0=ef,Ny={isServer:!ef,useCSSOMInjection:!hy},$o=function(){function e(n,r,i){n===void 0&&(n=_n),r===void 0&&(r={}),this.options=It({},Ny,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ef&&G0&&(G0=!1,function(a){for(var o=document.querySelectorAll(xy),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute($r)!=="active"&&(by(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ca(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(It({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new Py(o):a?new Cy(o):new zy(o),new vy(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ca(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ca(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ca(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var l=yy(o);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(o);if(s&&u&&s.size){var c=$r+".g"+o+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(h){h.length>0&&(f+=h+",")}),a+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return a}(this)},e}(),_y=/(a)(d)/gi,K0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Eu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K0(t%52)+n;return(K0(t%52)+n).replace(_y,"$1-$2")}var yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lm=function(e){return yr(5381,e)};function sm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Zc(n))return!1}return!0}var Oy=lm("5.3.9"),Ay=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sm(t),this.componentId=n,this.baseHash=yr(Oy,n),this.baseStyle=r,$o.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=er(this.rules,t,n,r).join(""),l=Eu(yr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var s=r(o,"."+l,void 0,i);n.insertRules(i,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=yr(this.baseHash,r.hash),f="",h=0;h<u;h++){var w=this.rules[h];if(typeof w=="string")f+=w;else if(w){var g=er(w,t,n,r),v=Array.isArray(g)?g.join(""):g;c=yr(c,v+h),f+=v}}if(f){var x=Eu(c>>>0);if(!n.hasNameForId(i,x)){var m=r(f,"."+x,void 0,i);n.insertRules(i,x,m)}a.push(x)}}return a.join(" ")},e}(),Ry=/^\s*\/\/.*$/gm,Ty=[":","[",".","#"];function Iy(e){var t,n,r,i,a=e===void 0?_n:e,o=a.options,l=o===void 0?_n:o,s=a.plugins,u=s===void 0?Io:s,c=new Jv(l),f=[],h=function(v){function x(m){if(m)try{v(m+"}")}catch{}}return function(m,p,y,S,C,z,_,T,V,F){switch(m){case 1:if(V===0&&p.charCodeAt(0)===64)return v(p+";"),"";break;case 2:if(T===0)return p+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(y[0]+p),"";default:return p+(F===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(v){f.push(v)}),w=function(v,x,m){return x===0&&Ty.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function g(v,x,m,p){p===void 0&&(p="&");var y=v.replace(Ry,""),S=x&&m?m+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!x?"":x,S)}return c.use([].concat(u,[function(v,x,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,w))},h,function(v){if(v===-2){var x=f;return f=[],x}}])),g.hash=u.length?u.reduce(function(v,x){return x.name||ta(15),yr(v,x.name)},5381).toString():"",g}var um=tn.createContext();um.Consumer;var cm=tn.createContext(),Ly=(cm.Consumer,new $o),Cu=Iy();function fm(){return b.useContext(um)||Ly}function dm(){return b.useContext(cm)||Cu}var $y=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Cu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return ta(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Cu),this.name+t.hash},e}(),My=/([A-Z])/,jy=/([A-Z])/g,Dy=/^ms-/,Fy=function(e){return"-"+e.toLowerCase()};function X0(e){return My.test(e)?e.replace(jy,Fy).replace(Dy,"-ms-"):e}var J0=function(e){return e==null||e===!1||e===""};function er(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)(i=er(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(J0(e))return"";if(Zc(e))return"."+e.styledComponentId;if(Ui(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return er(s,t,n,r)}var u;return e instanceof $y?n?(e.inject(n,r),e.getName(r)):e:bu(e)?function c(f,h){var w,g,v=[];for(var x in f)f.hasOwnProperty(x)&&!J0(f[x])&&(Array.isArray(f[x])&&f[x].isCss||Ui(f[x])?v.push(X0(x)+":",f[x],";"):bu(f[x])?v.push.apply(v,c(f[x],x)):v.push(X0(x)+": "+(w=x,(g=f[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||w in qv?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var q0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function pm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ui(e)||bu(e)?q0(er(Y0(Io,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:q0(er(Y0(e,n)))}var mm=function(e,t,n){return n===void 0&&(n=_n),e.theme!==n.theme&&e.theme||t||n.theme},Uy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,By=/(^-|-$)/g;function cs(e){return e.replace(Uy,"-").replace(By,"")}var hm=function(e){return Eu(lm(e)>>>0)};function za(e){return typeof e=="string"&&!0}var zu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Hy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Vy(e,t,n){var r=e[n];zu(t)&&zu(r)?gm(r,t):e[n]=t}function gm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(zu(o))for(var l in o)Hy(l)&&Vy(e,o[l],l)}return e}var tf=tn.createContext();tf.Consumer;var fs={};function vm(e,t,n){var r=Zc(e),i=!za(e),a=t.attrs,o=a===void 0?Io:a,l=t.componentId,s=l===void 0?function(p,y){var S=typeof p!="string"?"sc":cs(p);fs[S]=(fs[S]||0)+1;var C=S+"-"+hm("5.3.9"+S+fs[S]);return y?y+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return za(p)?"styled."+p:"Styled("+Q0(p)+")"}(e):u,f=t.displayName&&t.componentId?cs(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,v=new Ay(n,f,r?e.componentStyle:void 0),x=v.isStatic&&o.length===0,m=function(p,y){return function(S,C,z,_){var T=S.attrs,V=S.componentStyle,F=S.defaultProps,ze=S.foldedComponentIds,xe=S.shouldForwardProp,Oe=S.styledComponentId,rt=S.target,je=function(B,k,G){B===void 0&&(B=_n);var A=It({},k,{theme:B}),me={};return G.forEach(function(q){var ee,W,Ae,Xe=q;for(ee in Ui(Xe)&&(Xe=Xe(A)),Xe)A[ee]=me[ee]=ee==="className"?(W=me[ee],Ae=Xe[ee],W&&Ae?W+" "+Ae:W||Ae):Xe[ee]}),[A,me]}(mm(C,b.useContext(tf),F)||_n,C,T),Dt=je[0],We=je[1],O=function(B,k,G,A){var me=fm(),q=dm(),ee=k?B.generateAndInjectStyles(_n,me,q):B.generateAndInjectStyles(G,me,q);return ee}(V,_,Dt),D=z,U=We.$as||C.$as||We.as||C.as||rt,ie=za(U),R=We!==C?It({},C,{},We):C,I={};for(var $ in R)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?I.as=R[$]:(xe?xe($,B0,U):!ie||B0($))&&(I[$]=R[$]));return C.style&&We.style!==C.style&&(I.style=It({},C.style,{},We.style)),I.className=Array.prototype.concat(ze,Oe,O!==Oe?O:null,C.className,We.className).filter(Boolean).join(" "),I.ref=D,b.createElement(U,I)}(g,p,y,x)};return m.displayName=c,(g=tn.forwardRef(m)).attrs=h,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=w,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Io,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(z,_){if(z==null)return{};var T,V,F={},ze=Object.keys(z);for(V=0;V<ze.length;V++)T=ze[V],_.indexOf(T)>=0||(F[T]=z[T]);return F}(t,["componentId"]),C=y&&y+"-"+(za(p)?p:cs(Q0(p)));return vm(p,It({},S,{attrs:h,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?gm({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&my(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Pu=function(e){return function t(n,r,i){if(i===void 0&&(i=_n),!To.isValidElementType(r))return ta(1,String(r));var a=function(){return n(r,i,pm.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,It({},i,{},o))},a.attrs=function(o){return t(n,r,It({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(vm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Pu[e]=Pu(e)});var Wy=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=sm(n),$o.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(er(this.rules,r,i,a).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&$o.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function Yy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pm.apply(void 0,[e].concat(n)),a="sc-global-"+hm(JSON.stringify(i)),o=new Wy(i,a);function l(u){var c=fm(),f=dm(),h=b.useContext(tf),w=b.useRef(c.allocateGSInstance(a)).current;return c.server&&s(w,u,c,h,f),b.useLayoutEffect(function(){if(!c.server)return s(w,u,c,h,f),function(){return o.removeStyles(w,c)}},[w,u,c,h,f]),null}function s(u,c,f,h,w){if(o.isStatic)o.renderStyles(u,gy,f,w);else{var g=It({},c,{theme:mm(c,h,l.defaultProps)});o.renderStyles(u,g,f,w)}}return tn.memo(l)}const Ve=Pu,un={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},Je={mobileS:`(min-width: ${un.mobileS})`,mobileM:`(min-width: ${un.mobileM})`,mobileL:`(min-width: ${un.mobileL})`,tablet:`(min-width: ${un.tablet})`,laptop:`(min-width: ${un.laptop})`,laptopL:`(min-width: ${un.laptopL})`,desktop:`(min-width: ${un.desktop})`,desktopL:`(min-width: ${un.desktopL})`},Qy=Ve.nav`

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

`,Gy="/assets/PantryPalAvo-64f88421.png";/*! js-cookie v3.0.1 | MIT */function Pa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var Ky={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Nu(e,t){function n(i,a,o){if(!(typeof document>"u")){o=Pa({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=i+"="+e.write(a,i)+l}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},l=0;l<a.length;l++){var s=a[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),i===c)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",Pa({},a,{expires:-1}))},withAttributes:function(i){return Nu(this.converter,Pa({},this.attributes,i))},withConverter:function(i){return Nu(Pa({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Rn=Nu(Ky,{path:"/"});function Z0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z0(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mo(e){return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function Xy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ed(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jy(e,t,n){return t&&ed(e.prototype,t),n&&ed(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nf(e,t){return Zy(e)||t4(e,t)||ym(e,t)||r4()}function na(e){return qy(e)||e4(e)||ym(e)||n4()}function qy(e){if(Array.isArray(e))return _u(e)}function Zy(e){if(Array.isArray(e))return e}function e4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function t4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function ym(e,t){if(e){if(typeof e=="string")return _u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _u(e,t)}}function _u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var td=function(){},rf={},wm={},xm=null,Sm={mark:td,measure:td};try{typeof window<"u"&&(rf=window),typeof document<"u"&&(wm=document),typeof MutationObserver<"u"&&(xm=MutationObserver),typeof performance<"u"&&(Sm=performance)}catch{}var i4=rf.navigator||{},nd=i4.userAgent,rd=nd===void 0?"":nd,Tn=rf,ue=wm,id=xm,Na=Sm;Tn.document;var rn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",km=~rd.indexOf("MSIE")||~rd.indexOf("Trident/"),_a,Oa,Aa,Ra,Ta,qt="___FONT_AWESOME___",Ou=16,bm="fa",Em="svg-inline--fa",tr="data-fa-i2svg",Au="data-fa-pseudo-element",a4="data-fa-pseudo-element-pending",af="data-prefix",of="data-icon",ad="fontawesome-i2svg",o4="async",l4=["HTML","HEAD","STYLE","SCRIPT"],Cm=function(){try{return!0}catch{return!1}}(),le="classic",ge="sharp",lf=[le,ge];function ra(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Bi=ra((_a={},Ee(_a,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(_a,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),_a)),Hi=ra((Oa={},Ee(Oa,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(Oa,ge,{solid:"fass",regular:"fasr"}),Oa)),Vi=ra((Aa={},Ee(Aa,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(Aa,ge,{fass:"fa-solid",fasr:"fa-regular"}),Aa)),s4=ra((Ra={},Ee(Ra,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(Ra,ge,{"fa-solid":"fass","fa-regular":"fasr"}),Ra)),u4=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,zm="fa-layers-text",c4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,f4=ra((Ta={},Ee(Ta,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(Ta,ge,{900:"fass",400:"fasr"}),Ta)),Pm=[1,2,3,4,5,6,7,8,9,10],d4=Pm.concat([11,12,13,14,15,16,17,18,19,20]),p4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wi=new Set;Object.keys(Hi[le]).map(Wi.add.bind(Wi));Object.keys(Hi[ge]).map(Wi.add.bind(Wi));var m4=[].concat(lf,na(Wi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wn.GROUP,Wn.SWAP_OPACITY,Wn.PRIMARY,Wn.SECONDARY]).concat(Pm.map(function(e){return"".concat(e,"x")})).concat(d4.map(function(e){return"w-".concat(e)})),xi=Tn.FontAwesomeConfig||{};function h4(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function g4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var v4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];v4.forEach(function(e){var t=nf(e,2),n=t[0],r=t[1],i=g4(h4(n));i!=null&&(xi[r]=i)})}var Nm={styleDefault:"solid",familyDefault:"classic",cssPrefix:bm,replacementClass:Em,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xi.familyPrefix&&(xi.cssPrefix=xi.familyPrefix);var Mr=L(L({},Nm),xi);Mr.autoReplaceSvg||(Mr.observeMutations=!1);var j={};Object.keys(Nm).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){Mr[e]=n,Si.forEach(function(r){return r(j)})},get:function(){return Mr[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(t){Mr.cssPrefix=t,Si.forEach(function(n){return n(j)})},get:function(){return Mr.cssPrefix}});Tn.FontAwesomeConfig=j;var Si=[];function y4(e){return Si.push(e),function(){Si.splice(Si.indexOf(e),1)}}var cn=Ou,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function w4(e){if(!(!e||!rn)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ue.head.insertBefore(t,r),e}}var x4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yi(){for(var e=12,t="";e-- >0;)t+=x4[Math.random()*62|0];return t}function Yr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sf(e){return e.classList?Yr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _m(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function S4(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_m(e[n]),'" ')},"").trim()}function zl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function uf(e){return e.size!==Lt.size||e.x!==Lt.x||e.y!==Lt.y||e.rotate!==Lt.rotate||e.flipX||e.flipY}function k4(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function b4(e){var t=e.transform,n=e.width,r=n===void 0?Ou:n,i=e.height,a=i===void 0?Ou:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&km?s+="translate(".concat(t.x/cn-r/2,"em, ").concat(t.y/cn-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/cn,"em), calc(-50% + ").concat(t.y/cn,"em)) "):s+="translate(".concat(t.x/cn,"em, ").concat(t.y/cn,"em) "),s+="scale(".concat(t.size/cn*(t.flipX?-1:1),", ").concat(t.size/cn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var E4=`:root, :host {
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
}`;function Om(){var e=bm,t=Em,n=j.cssPrefix,r=j.replacementClass,i=E4;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var od=!1;function ds(){j.autoAddCss&&!od&&(w4(Om()),od=!0)}var C4={mixout:function(){return{dom:{css:Om,insertCss:ds}}},hooks:function(){return{beforeDOMElementCreation:function(){ds()},beforeI2svg:function(){ds()}}}},Zt=Tn||{};Zt[qt]||(Zt[qt]={});Zt[qt].styles||(Zt[qt].styles={});Zt[qt].hooks||(Zt[qt].hooks={});Zt[qt].shims||(Zt[qt].shims=[]);var zt=Zt[qt],Am=[],z4=function e(){ue.removeEventListener("DOMContentLoaded",e),jo=1,Am.map(function(t){return t()})},jo=!1;rn&&(jo=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),jo||ue.addEventListener("DOMContentLoaded",z4));function P4(e){rn&&(jo?setTimeout(e,0):Am.push(e))}function ia(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?_m(e):"<".concat(t," ").concat(S4(r),">").concat(a.map(ia).join(""),"</").concat(t,">")}function ld(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var N4=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},ps=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?N4(n,i):n,s,u,c;for(r===void 0?(s=1,c=t[a[0]]):(s=0,c=r);s<o;s++)u=a[s],c=l(c,t[u],u,t);return c};function _4(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ru(e){var t=_4(e);return t.length===1?t[0].toString(16):null}function O4(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function sd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=sd(t);typeof zt.hooks.addPack=="function"&&!i?zt.hooks.addPack(e,sd(t)):zt.styles[e]=L(L({},zt.styles[e]||{}),a),e==="fas"&&Tu("fa",t)}var Ia,La,$a,wr=zt.styles,A4=zt.shims,R4=(Ia={},Ee(Ia,le,Object.values(Vi[le])),Ee(Ia,ge,Object.values(Vi[ge])),Ia),cf=null,Rm={},Tm={},Im={},Lm={},$m={},T4=(La={},Ee(La,le,Object.keys(Bi[le])),Ee(La,ge,Object.keys(Bi[ge])),La);function I4(e){return~m4.indexOf(e)}function L4(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!I4(i)?i:null}var Mm=function(){var t=function(a){return ps(wr,function(o,l,s){return o[s]=ps(l,a,{}),o},{})};Rm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Tm=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),$m=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in wr||j.autoFetchSvg,r=ps(A4,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Im=r.names,Lm=r.unicodes,cf=Pl(j.styleDefault,{family:j.familyDefault})};y4(function(e){cf=Pl(e.styleDefault,{family:j.familyDefault})});Mm();function ff(e,t){return(Rm[e]||{})[t]}function $4(e,t){return(Tm[e]||{})[t]}function Yn(e,t){return($m[e]||{})[t]}function jm(e){return Im[e]||{prefix:null,iconName:null}}function M4(e){var t=Lm[e],n=ff("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function In(){return cf}var df=function(){return{prefix:null,iconName:null,rest:[]}};function Pl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Bi[r][e],a=Hi[r][e]||Hi[r][i],o=e in zt.styles?e:null;return a||o||null}var ud=($a={},Ee($a,le,Object.keys(Vi[le])),Ee($a,ge,Object.keys(Vi[ge])),$a);function Nl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ee(t,le,"".concat(j.cssPrefix,"-").concat(le)),Ee(t,ge,"".concat(j.cssPrefix,"-").concat(ge)),t),o=null,l=le;(e.includes(a[le])||e.some(function(u){return ud[le].includes(u)}))&&(l=le),(e.includes(a[ge])||e.some(function(u){return ud[ge].includes(u)}))&&(l=ge);var s=e.reduce(function(u,c){var f=L4(j.cssPrefix,c);if(wr[c]?(c=R4[l].includes(c)?s4[l][c]:c,o=c,u.prefix=c):T4[l].indexOf(c)>-1?(o=c,u.prefix=Pl(c,{family:l})):f?u.iconName=f:c!==j.replacementClass&&c!==a[le]&&c!==a[ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?jm(u.iconName):{},w=Yn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||w||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!wr.far&&wr.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},df());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ge&&(wr.fass||j.autoFetchSvg)&&(s.prefix="fass",s.iconName=Yn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=In()||"fas"),s}var j4=function(){function e(){Xy(this,e),this.definitions={}}return Jy(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=L(L({},n.definitions[l]||{}),o[l]),Tu(l,o[l]);var s=Vi[le][l];s&&Tu(s,o[l]),Mm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),e}(),cd=[],xr={},Nr={},D4=Object.keys(Nr);function F4(e,t){var n=t.mixoutsTo;return cd=e,xr={},Object.keys(Nr).forEach(function(r){D4.indexOf(r)===-1&&delete Nr[r]}),cd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Mo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){xr[o]||(xr[o]=[]),xr[o].push(a[o])})}r.provides&&r.provides(Nr)}),n}function Iu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=xr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xr[e]||[];i.forEach(function(a){a.apply(null,n)})}function en(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nr[e]?Nr[e].apply(null,t):void 0}function Lu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||In();if(t)return t=Yn(n,t)||t,ld(Dm.definitions,n,t)||ld(zt.styles,n,t)}var Dm=new j4,U4=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,nr("noAuto")},B4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rn?(nr("beforeI2svg",t),en("pseudoElements2svg",t),en("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,P4(function(){V4({autoReplaceSvgRoot:n}),nr("watch",t)})}},H4={icon:function(t){if(t===null)return null;if(Mo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pl(t[0]);return{prefix:r,iconName:Yn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.cssPrefix,"-"))>-1||t.match(u4))){var i=Nl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||In(),iconName:Yn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=In();return{prefix:a,iconName:Yn(a,t)||t}}}},ft={noAuto:U4,config:j,dom:B4,parse:H4,library:Dm,findIconDefinition:Lu,toHtml:ia},V4=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(zt.styles).length>0||j.autoFetchSvg)&&rn&&j.autoReplaceSvg&&ft.dom.i2svg({node:r})};function _l(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ia(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rn){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function W4(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(uf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=zl(L(L({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Y4(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(j.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function pf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,w=h===void 0?!1:h,g=r.found?r:n,v=g.width,x=g.height,m=i==="fak",p=[j.replacementClass,a?"".concat(j.cssPrefix,"-").concat(a):""].filter(function(V){return f.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(f.classes).join(" "),y={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},S=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};w&&(y.attributes[tr]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Yi())},children:[s]}),delete y.attributes.title);var C=L(L({},y),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:L(L({},S),f.styles)}),z=r.found&&n.found?en("generateAbstractMask",C)||{children:[],attributes:{}}:en("generateAbstractIcon",C)||{children:[],attributes:{}},_=z.children,T=z.attributes;return C.children=_,C.attributes=T,l?Y4(C):W4(C)}function fd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=L(L(L({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[tr]="");var c=L({},o.styles);uf(i)&&(c.transform=b4({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=zl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Q4(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=zl(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ms=zt.styles;function $u(e){var t=e[0],n=e[1],r=e.slice(4),i=nf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Wn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Wn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var G4={found:!1,width:512,height:512};function K4(e,t){!Cm&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mu(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=In()),new Promise(function(r,i){if(en("missingIconAbstract"),n==="fa"){var a=jm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ms[t]&&ms[t][e]){var o=ms[t][e];return r($u(o))}K4(e,t),r(L(L({},G4),{},{icon:j.showMissingIcons&&e?en("missingIconAbstract")||{}:{}}))})}var dd=function(){},ju=j.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:dd,measure:dd},ui='FA "6.3.0"',X4=function(t){return ju.mark("".concat(ui," ").concat(t," begins")),function(){return Fm(t)}},Fm=function(t){ju.mark("".concat(ui," ").concat(t," ends")),ju.measure("".concat(ui," ").concat(t),"".concat(ui," ").concat(t," begins"),"".concat(ui," ").concat(t," ends"))},mf={begin:X4,end:Fm},Za=function(){};function pd(e){var t=e.getAttribute?e.getAttribute(tr):null;return typeof t=="string"}function J4(e){var t=e.getAttribute?e.getAttribute(af):null,n=e.getAttribute?e.getAttribute(of):null;return t&&n}function q4(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function Z4(){if(j.autoReplaceSvg===!0)return eo.replace;var e=eo[j.autoReplaceSvg];return e||eo.replace}function e3(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function t3(e){return ue.createElement(e)}function Um(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?e3:t3:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Um(o,{ceFn:r}))}),i}function n3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var eo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Um(i),n)}),n.getAttribute(tr)===null&&j.keepOriginalSource){var r=ue.createComment(n3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~sf(n).indexOf(j.replacementClass))return eo.replace(t);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===j.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return ia(l)}).join(`
`);n.setAttribute(tr,""),n.innerHTML=o}};function md(e){e()}function Bm(e,t){var n=typeof t=="function"?t:Za;if(e.length===0)n();else{var r=md;j.mutateApproach===o4&&(r=Tn.requestAnimationFrame||md),r(function(){var i=Z4(),a=mf.begin("mutate");e.map(i),a(),n()})}}var hf=!1;function Hm(){hf=!0}function Du(){hf=!1}var Do=null;function hd(e){if(id&&j.observeMutations){var t=e.treeCallback,n=t===void 0?Za:t,r=e.nodeCallback,i=r===void 0?Za:r,a=e.pseudoElementsCallback,o=a===void 0?Za:a,l=e.observeMutationsRoot,s=l===void 0?ue:l;Do=new id(function(u){if(!hf){var c=In();Yr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!pd(f.addedNodes[0])&&(j.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&pd(f.target)&&~p4.indexOf(f.attributeName))if(f.attributeName==="class"&&J4(f.target)){var h=Nl(sf(f.target)),w=h.prefix,g=h.iconName;f.target.setAttribute(af,w||c),g&&f.target.setAttribute(of,g)}else q4(f.target)&&i(f.target)})}}),rn&&Do.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function r3(){Do&&Do.disconnect()}function i3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function a3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Nl(sf(e));return i.prefix||(i.prefix=In()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=$4(i.prefix,e.innerText)||ff(i.prefix,Ru(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function o3(e){var t=Yr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||Yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function l3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=a3(e),r=n.iconName,i=n.prefix,a=n.rest,o=o3(e),l=Iu("parseNodeAttributes",{},e),s=t.styleParser?i3(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var s3=zt.styles;function Vm(e){var t=j.autoReplaceSvg==="nest"?gd(e,{styleParser:!1}):gd(e);return~t.extra.classes.indexOf(zm)?en("generateLayersText",e,t):en("generateSvgReplacementMutation",e,t)}var Ln=new Set;lf.map(function(e){Ln.add("fa-".concat(e))});Object.keys(Bi[le]).map(Ln.add.bind(Ln));Object.keys(Bi[ge]).map(Ln.add.bind(Ln));Ln=na(Ln);function vd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rn)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(ad,"-").concat(f))},i=function(f){return n.remove("".concat(ad,"-").concat(f))},a=j.autoFetchSvg?Ln:lf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(s3));a.includes("fa")||a.push("fa");var o=[".".concat(zm,":not([").concat(tr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(tr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Yr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=mf.begin("onTree"),u=l.reduce(function(c,f){try{var h=Vm(f);h&&c.push(h)}catch(w){Cm||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Bm(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(h){s(),f(h)})})}function u3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vm(e).then(function(n){n&&Bm([n],t)})}function c3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lu(i||{})),e(r,L(L({},n),{},{mask:i}))}}var f3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,w=n.titleId,g=w===void 0?null:w,v=n.classes,x=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,y=n.styles,S=y===void 0?{}:y;if(t){var C=t.prefix,z=t.iconName,_=t.icon;return _l(L({type:"icon"},t),function(){return nr("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(h?p["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(g||Yi()):(p["aria-hidden"]="true",p.focusable="false")),pf({icons:{main:$u(_),mask:s?$u(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:z,transform:L(L({},Lt),i),symbol:o,title:h,maskId:c,titleId:g,extra:{attributes:p,styles:S,classes:x}})})}},d3={mixout:function(){return{icon:c3(f3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vd,n.nodeCallback=u3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,a=n.callback,o=a===void 0?function(){}:a;return vd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(w,g){Promise.all([Mu(i,l),c.iconName?Mu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=nf(v,2),m=x[0],p=x[1];w([n,pf({icons:{main:m,mask:p},prefix:l,iconName:i,transform:s,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=zl(l);s.length>0&&(i.style=s);var u;return uf(o)&&(u=en("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},p3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return _l({type:"layer"},function(){nr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(na(a)).join(" ")},children:o}]})}}}},m3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,f=c===void 0?{}:c;return _l({type:"counter",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),Q4({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(na(l))}})})}}}},h3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Lt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,f=c===void 0?{}:c,h=r.styles,w=h===void 0?{}:h;return _l({type:"text",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),fd({content:n,transform:L(L({},Lt),a),title:l,extra:{attributes:f,styles:w,classes:["".concat(j.cssPrefix,"-layers-text")].concat(na(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(km){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fd({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},g3=new RegExp('"',"ug"),yd=[1105920,1112319];function v3(e){var t=e.replace(g3,""),n=O4(t,0),r=n>=yd[0]&&n<=yd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ru(i?t[0]:t),isSecondary:r||i}}function wd(e,t){var n="".concat(a4).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Yr(e.children),o=a.filter(function(_){return _.getAttribute(Au)===t})[0],l=Tn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(c4),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ge:le,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Hi[h][s[2].toLowerCase()]:f4[h][u],g=v3(f),v=g.value,x=g.isSecondary,m=s[0].startsWith("FontAwesome"),p=ff(w,v),y=p;if(m){var S=M4(v);S.iconName&&S.prefix&&(p=S.iconName,w=S.prefix)}if(p&&!x&&(!o||o.getAttribute(af)!==w||o.getAttribute(of)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var C=l3(),z=C.extra;z.attributes[Au]=t,Mu(p,w).then(function(_){var T=pf(L(L({},C),{},{icons:{main:_,mask:df()},prefix:w,iconName:y,extra:z,watchable:!0})),V=ue.createElement("svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=T.map(function(F){return ia(F)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function y3(e){return Promise.all([wd(e,"::before"),wd(e,"::after")])}function w3(e){return e.parentNode!==document.head&&!~l4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Au)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xd(e){if(rn)return new Promise(function(t,n){var r=Yr(e.querySelectorAll("*")).filter(w3).map(y3),i=mf.begin("searchPseudoElements");Hm(),Promise.all(r).then(function(){i(),Du(),t()}).catch(function(){i(),Du(),n()})})}var x3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;j.searchPseudoElements&&xd(i)}}},Sd=!1,S3={mixout:function(){return{dom:{unwatch:function(){Hm(),Sd=!0}}}},hooks:function(){return{bootstrap:function(){hd(Iu("mutationObserverCallbacks",{}))},noAuto:function(){r3()},watch:function(n){var r=n.observeMutationsRoot;Sd?Du():hd(Iu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},kd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},k3={mixout:function(){return{parse:{transform:function(n){return kd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=kd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:f,path:h};return{tag:"g",attributes:L({},w.outer),children:[{tag:"g",attributes:L({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),w.path)}]}]}}}},hs={x:0,y:0,width:"100%",height:"100%"};function bd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function b3(e){return e.tag==="g"?e.children:[e]}var E3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Nl(i.split(" ").map(function(o){return o.trim()})):df();return a.prefix||(a.prefix=In()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,w=k4({transform:s,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:L(L({},hs),{},{fill:"white"})},v=c.children?{children:c.children.map(bd)}:{},x={tag:"g",attributes:L({},w.inner),children:[bd(L({tag:c.tag,attributes:L(L({},c.attributes),w.path)},v))]},m={tag:"g",attributes:L({},w.outer),children:[x]},p="mask-".concat(l||Yi()),y="clip-".concat(l||Yi()),S={tag:"mask",attributes:L(L({},hs),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:b3(h)},S]};return r.push(C,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},hs)}),{children:r,attributes:i}}}},C3={provides:function(t){var n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:L(L({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},z3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},P3=[C4,d3,p3,m3,h3,x3,S3,k3,E3,C3,z3];F4(P3,{mixoutsTo:ft});ft.noAuto;ft.config;ft.library;ft.dom;var Fu=ft.parse;ft.findIconDefinition;ft.toHtml;var N3=ft.icon;ft.layer;ft.text;ft.counter;var Y={},_3={get exports(){return Y},set exports(e){Y=e}},O3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A3=O3,R3=A3;function Wm(){}function Ym(){}Ym.resetWarningCache=Wm;var T3=function(){function e(r,i,a,o,l,s){if(s!==R3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ym,resetWarningCache:Wm};return n.PropTypes=n,n};_3.exports=T3();function Ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ed(Object(n),!0).forEach(function(r){Sr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ed(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fo(e){return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fo(e)}function Sr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function L3(e,t){if(e==null)return{};var n=I3(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Uu(e){return $3(e)||M3(e)||j3(e)||D3()}function $3(e){if(Array.isArray(e))return Bu(e)}function M3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j3(e,t){if(e){if(typeof e=="string")return Bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bu(e,t)}}function Bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F3(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,w=e.inverse,g=e.border,v=e.listItem,x=e.flip,m=e.size,p=e.rotation,y=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":w,"fa-border":g,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Sr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Sr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Sr(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Sr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(C){return S[C]?C:null}).filter(function(C){return C})}function U3(e){return e=e-0,e===e}function Qm(e){return U3(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var B3=["style"];function H3(e){return e.charAt(0).toUpperCase()+e.slice(1)}function V3(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Qm(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[H3(i)]=a:t[i]=a,t},{})}function Gm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Gm(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=V3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[Qm(u)]=c}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=L3(n,B3);return i.attrs.style=wn(wn({},i.attrs.style),o),e.apply(void 0,[t.tag,wn(wn({},i.attrs),l)].concat(Uu(r)))}var Km=!1;try{Km=!0}catch{}function W3(){if(!Km&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cd(e){if(e&&Fo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fu.icon)return Fu.icon(e);if(e===null)return null;if(e&&Fo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function gs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Sr({},e,t):{}}var Vt=tn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Cd(n),c=gs("classes",[].concat(Uu(F3(e)),Uu(a.split(" ")))),f=gs("transform",typeof e.transform=="string"?Fu.transform(e.transform):e.transform),h=gs("mask",Cd(r)),w=N3(u,wn(wn(wn(wn({},c),f),h),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!w)return W3("Could not find icon",u),null;var g=w.abstract,v={ref:t};return Object.keys(e).forEach(function(x){Vt.defaultProps.hasOwnProperty(x)||(v[x]=e[x])}),Y3(g[0],v)});Vt.displayName="FontAwesomeIcon";Vt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};Vt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Y3=Gm.bind(null,tn.createElement),Q3={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},G3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},zd={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},K3={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const X3=()=>{const e=Rn.get("loggedIn");return d(Qy,{children:e?P(Qt,{children:[d(sn,{className:"page",to:"/",activeclassname:"active",children:d("img",{className:"logo",src:Gy,alt:"PantryPal Egg logo"})}),d(sn,{className:"page",to:"/search",children:"Search"}),d(sn,{className:"page",to:"/saved",children:"Saved"}),d(sn,{className:"page",to:"/mealPlanner",children:"Meal Planner"}),d(sn,{className:"page",to:"/login",onClick:()=>{Rn.remove("loggedIn"),navigate("/login")},children:"Logout"}),d(sn,{className:"page",to:"/profile",children:d(Vt,{icon:G3,className:"userIcon"})})]}):P(Qt,{children:[d(sn,{className:"page",to:"/signup",children:"SignUp"}),d(sn,{className:"page",to:"/login",children:"Login"})]})})},J3="/assets/JustEgg-ec8a2428.png",q3="/assets/PantryPalText-9cf7db56.png",Z3=Ve.div`
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
`,ew=()=>P(Z3,{children:[d("h1",{children:"Find recipes | Meal Plan"}),d("img",{className:"logo",src:J3,alt:"Egg"}),d("img",{className:"logoText",src:q3,alt:"PantryPal"})]}),tw=Ve.section`
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
`;function nw(){const e=b.useRef(""),t=b.useRef(""),n=b.useRef(""),r=b.useRef("");let i=e.current.value,a=t.current.value,o=n.current.value,l=r.current.value;const[s,u]=b.useState(!1),[c,f]=b.useState([]),[h,w]=b.useState(!1),[g,v]=b.useState(!1),[x,m]=b.useState(!1),p=ea();function y(z){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(z)}function S(){let z=[];return!y(l)&&l&&(v(!0),z.push("email format invalid")),a!==o&&(m(!0),z.push("passwords do not match")),z.length>0?(u(!0),z):[]}async function C(){u(!1);const z=S();if(z.length>0){f(z);return}try{const _=await fetch("http://localhost:4000/api/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,username:i,password:a})});if(_.status==401)throw Error("Username and/or Email already exists");if(_.status!=201)throw Error(`server response error ${_.statusText}`)}catch(_){u(!0),f([_.message]);return}try{const _=await fetch("http://localhost:4000/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:a})});if(_.status===200){const T=await _.json();Rn.set("loggedIn",{token:T.token,username:i})}else throw Error(_.statusText)}catch(_){u(!0),f([_.message]);return}p("/search")}return P(tw,{children:[P("section",{className:"form-sect",children:[P("form",{action:"#",onSubmit:z=>{z.preventDefault(),C()},children:[d("div",{className:"title",children:P("h2",{children:["Welcome to Pantry Pal ",d("br",{}),"Signup Here"]})}),P("div",{className:"input-container",children:[g&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"email",children:"Email"}),d("input",{className:g?"error-container":"",ref:r,onChange:z=>{l=z.target.value,v(!1)},id:"email",type:"text",required:!0}),g&&d("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[h&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"username",children:"Username"}),d("input",{className:h?"error-container":"",ref:e,onChange:z=>{i=z.target.value},id:"username",type:"text",required:!0}),h&&d("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[x&&d("span",{className:"error-marker",children:"*"}),d("label",{className:"input-tag",htmlFor:"password",children:"Password"}),d("input",{className:x?"error-container":"",ref:t,onChange:z=>{a=z.target.value,m(!1)},id:"password",type:"password",required:!0}),x&&d("span",{className:"error-marker",children:"*"})]}),P("div",{className:"input-container",children:[x&&d("span",{className:"error-marker",children:"*"}),d("label",{htmlFor:"confirmpassword",className:"input-tag",children:"Confirm Password"}),d("input",{className:x?"error-container":"",ref:n,onChange:z=>{o=z.target.value,m(!1)},id:"confirmpassword",type:"password",required:!0}),x&&d("span",{className:"error-marker",children:"*"})]}),d("div",{className:"submit-btn",children:d("button",{className:"btn",children:"Signup"})})]}),s&&d("section",{className:"error-container error-desc",children:P("div",{children:[d("h4",{children:"Please correct following errors"}),d("ul",{children:c.map((z,_)=>d("li",{children:z},_))})]})})]}),d("div",{className:"btn goto-btn",children:P(Wc,{to:"/login",children:["Already signed",d("br",{}),"up login here"]})})]})}const rw=Ve.section`
    background-color: white;
    color: #242424;
    height: 100vh;
    ul {
        padding: 0;
    }
    li {
        list-style: none;
    }

    & .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .search {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    & form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
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
        display:grid;
        grid-template-columns: 1fr 7fr;

        .filter-container{
            margin-top:20px;
        }
        .searchResults-container{
            .searchResults {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .searchResults-container ul {
              margin:0;
            }

        }
    }
    
`;function Xm(e,t){return function(){return e.apply(t,arguments)}}const{toString:Jm}=Object.prototype,{getPrototypeOf:gf}=Object,vf=(e=>t=>{const n=Jm.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=e=>(e=e.toLowerCase(),t=>vf(t)===e),Ol=e=>t=>typeof t===e,{isArray:Qr}=Array,Qi=Ol("undefined");function iw(e){return e!==null&&!Qi(e)&&e.constructor!==null&&!Qi(e.constructor)&&$n(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const qm=an("ArrayBuffer");function aw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&qm(e.buffer),t}const ow=Ol("string"),$n=Ol("function"),Zm=Ol("number"),yf=e=>e!==null&&typeof e=="object",lw=e=>e===!0||e===!1,to=e=>{if(vf(e)!=="object")return!1;const t=gf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},sw=an("Date"),uw=an("File"),cw=an("Blob"),fw=an("FileList"),dw=e=>yf(e)&&$n(e.pipe),pw=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Jm.call(e)===t||$n(e.toString)&&e.toString()===t)},mw=an("URLSearchParams"),hw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function aa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function eh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const th=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),nh=e=>!Qi(e)&&e!==th;function Hu(){const{caseless:e}=nh(this)&&this||{},t={},n=(r,i)=>{const a=e&&eh(t,i)||i;to(t[a])&&to(r)?t[a]=Hu(t[a],r):to(r)?t[a]=Hu({},r):Qr(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&aa(arguments[r],n);return t}const gw=(e,t,n,{allOwnKeys:r}={})=>(aa(t,(i,a)=>{n&&$n(i)?e[a]=Xm(i,n):e[a]=i},{allOwnKeys:r}),e),vw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ww=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&gf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Sw=e=>{if(!e)return null;if(Qr(e))return e;let t=e.length;if(!Zm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&gf(Uint8Array)),bw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},Ew=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Cw=an("HTMLFormElement"),zw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Pd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pw=an("RegExp"),rh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};aa(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},Nw=e=>{rh(e,(t,n)=>{if($n(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if($n(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_w=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Qr(e)?r(e):r(String(e).split(t)),n},Ow=()=>{},Aw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),vs="abcdefghijklmnopqrstuvwxyz",Nd="0123456789",ih={DIGIT:Nd,ALPHA:vs,ALPHA_DIGIT:vs+vs.toUpperCase()+Nd},Rw=(e=16,t=ih.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tw(e){return!!(e&&$n(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Iw=e=>{const t=new Array(10),n=(r,i)=>{if(yf(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Qr(r)?[]:{};return aa(r,(o,l)=>{const s=n(o,i+1);!Qi(s)&&(a[l]=s)}),t[i]=void 0,a}}return r};return n(e,0)},E={isArray:Qr,isArrayBuffer:qm,isBuffer:iw,isFormData:pw,isArrayBufferView:aw,isString:ow,isNumber:Zm,isBoolean:lw,isObject:yf,isPlainObject:to,isUndefined:Qi,isDate:sw,isFile:uw,isBlob:cw,isRegExp:Pw,isFunction:$n,isStream:dw,isURLSearchParams:mw,isTypedArray:kw,isFileList:fw,forEach:aa,merge:Hu,extend:gw,trim:hw,stripBOM:vw,inherits:yw,toFlatObject:ww,kindOf:vf,kindOfTest:an,endsWith:xw,toArray:Sw,forEachEntry:bw,matchAll:Ew,isHTMLForm:Cw,hasOwnProperty:Pd,hasOwnProp:Pd,reduceDescriptors:rh,freezeMethods:Nw,toObjectSet:_w,toCamelCase:zw,noop:Ow,toFiniteNumber:Aw,findKey:eh,global:th,isContextDefined:nh,ALPHABET:ih,generateString:Rw,isSpecCompliantForm:Tw,toJSONObject:Iw};function K(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ah=K.prototype,oh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{oh[e]={value:e}});Object.defineProperties(K,oh);Object.defineProperty(ah,"isAxiosError",{value:!0});K.from=(e,t,n,r,i,a)=>{const o=Object.create(ah);return E.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),K.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Lw=null;function Vu(e){return E.isPlainObject(e)||E.isArray(e)}function lh(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function _d(e,t,n){return e?e.concat(t).map(function(i,a){return i=lh(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function $w(e){return E.isArray(e)&&!e.some(Vu)}const Mw=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Al(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!E.isUndefined(x[v])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(E.isDate(g))return g.toISOString();if(!s&&E.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(g)||E.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,x){let m=g;if(g&&!x&&typeof g=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(E.isArray(g)&&$w(g)||(E.isFileList(g)||E.endsWith(v,"[]"))&&(m=E.toArray(g)))return v=lh(v),m.forEach(function(y,S){!(E.isUndefined(y)||y===null)&&t.append(o===!0?_d([v],S,a):o===null?v:v+"[]",u(y))}),!1}return Vu(g)?!0:(t.append(_d(x,v,a),u(g)),!1)}const f=[],h=Object.assign(Mw,{defaultVisitor:c,convertValue:u,isVisitable:Vu});function w(g,v){if(!E.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),E.forEach(g,function(m,p){(!(E.isUndefined(m)||m===null)&&i.call(t,m,E.isString(p)?p.trim():p,v,h))===!0&&w(m,v?v.concat(p):[p])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Od(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function wf(e,t){this._pairs=[],e&&Al(e,this,t)}const sh=wf.prototype;sh.append=function(t,n){this._pairs.push([t,n])};sh.toString=function(t){const n=t?function(r){return t.call(this,r,Od)}:Od;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uh(e,t,n){if(!t)return e;const r=n&&n.encode||jw,i=n&&n.serialize;let a;if(i?a=i(t,n):a=E.isURLSearchParams(t)?t.toString():new wf(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Dw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ad=Dw,ch={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Fw=typeof URLSearchParams<"u"?URLSearchParams:wf,Uw=typeof FormData<"u"?FormData:null,Bw=typeof Blob<"u"?Blob:null,Hw=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Vw=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),$t={isBrowser:!0,classes:{URLSearchParams:Fw,FormData:Uw,Blob:Bw},isStandardBrowserEnv:Hw,isStandardBrowserWebWorkerEnv:Vw,protocols:["http","https","file","blob","url","data"]};function Ww(e,t){return Al(e,new $t.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return $t.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function Yw(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qw(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function fh(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),s=a>=n.length;return o=!o&&E.isArray(i)?i.length:o,s?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&E.isArray(i[o])&&(i[o]=Qw(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(Yw(r),i,n,0)}),n}return null}const Gw={"Content-Type":void 0};function Kw(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Rl={transitional:ch,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=E.isObject(t);if(a&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i&&i?JSON.stringify(fh(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ww(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Al(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),Kw(t)):t}],transformResponse:[function(t){const n=this.transitional||Rl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?K.from(l,K.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){Rl.headers[t]={}});E.forEach(["post","put","patch"],function(t){Rl.headers[t]=E.merge(Gw)});const xf=Rl,Xw=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Xw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Rd=Symbol("internals");function ii(e){return e&&String(e).trim().toLowerCase()}function no(e){return e===!1||e==null?e:E.isArray(e)?e.map(no):String(e)}function qw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Zw(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ys(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function e6(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function t6(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Tl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,s,u){const c=ii(s);if(!c)throw new Error("header name must be a non-empty string");const f=E.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||s]=no(l))}const o=(l,s)=>E.forEach(l,(u,c)=>a(u,c,s));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!Zw(t)?o(Jw(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ii(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return qw(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ii(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ys(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=ii(o),o){const l=E.findKey(r,o);l&&(!n||ys(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||ys(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,a)=>{const o=E.findKey(r,a);if(o){n[o]=no(i),delete n[a];return}const l=t?e6(a):String(a).trim();l!==a&&delete n[a],n[l]=no(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Rd]=this[Rd]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=ii(o);r[l]||(t6(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(a):a(t),this}}Tl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(Tl.prototype);E.freezeMethods(Tl);const Yt=Tl;function ws(e,t){const n=this||xf,r=t||n,i=Yt.from(r.headers);let a=r.data;return E.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function dh(e){return!!(e&&e.__CANCEL__)}function oa(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(oa,K,{__CANCEL__:!0});function n6(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const r6=$t.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,l){const s=[];s.push(n+"="+encodeURIComponent(r)),E.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),E.isString(a)&&s.push("path="+a),E.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function i6(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function a6(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ph(e,t){return e&&!i6(t)?a6(e,t):t}const o6=$t.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=E.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function l6(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function s6(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];o||(o=u),n[i]=s,r[i]=u;let f=a,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const w=c&&u-c;return w?Math.round(h*1e3/w):void 0}}function Td(e,t){let n=0;const r=s6(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,s=r(l),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&u?(o-a)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const u6=typeof XMLHttpRequest<"u",c6=u6&&function(e){return new Promise(function(n,r){let i=e.data;const a=Yt.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}E.isFormData(i)&&($t.isStandardBrowserEnv||$t.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(w+":"+g))}const c=ph(e.baseURL,e.url);u.open(e.method.toUpperCase(),uh(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const w=Yt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};n6(function(m){n(m),s()},function(m){r(m),s()},v),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new K("Request aborted",K.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||ch;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new K(g,v.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,u)),u=null},$t.isStandardBrowserEnv){const w=(e.withCredentials||o6(c))&&e.xsrfCookieName&&r6.read(e.xsrfCookieName);w&&a.set(e.xsrfHeaderName,w)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&E.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),E.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Td(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Td(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new oa(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=l6(c);if(h&&$t.protocols.indexOf(h)===-1){r(new K("Unsupported protocol "+h+":",K.ERR_BAD_REQUEST,e));return}u.send(i||null)})},ro={http:Lw,xhr:c6};E.forEach(ro,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const f6={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=E.isString(n)?ro[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(ro,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ro};function xs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oa(null,e)}function Id(e){return xs(e),e.headers=Yt.from(e.headers),e.data=ws.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),f6.getAdapter(e.adapter||xf.adapter)(e).then(function(r){return xs(e),r.data=ws.call(e,e.transformResponse,r),r.headers=Yt.from(r.headers),r},function(r){return dh(r)||(xs(e),r&&r.response&&(r.response.data=ws.call(e,e.transformResponse,r.response),r.response.headers=Yt.from(r.response.headers))),Promise.reject(r)})}const Ld=e=>e instanceof Yt?e.toJSON():e;function jr(e,t){t=t||{};const n={};function r(u,c,f){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:f},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function i(u,c,f){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function a(u,c){if(!E.isUndefined(c))return r(void 0,c)}function o(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(Ld(u),Ld(c),!0)};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const f=s[c]||i,h=f(e[c],t[c],c);E.isUndefined(h)&&f!==l||(n[c]=h)}),n}const mh="1.3.4",Sf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Sf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $d={};Sf.transitional=function(t,n,r){function i(a,o){return"[Axios v"+mh+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new K(i(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!$d[o]&&($d[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};function d6(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new K("option "+a+" must be "+s,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+a,K.ERR_BAD_OPTION)}}const Wu={assertOptions:d6,validators:Sf},fn=Wu.validators;class Uo{constructor(t){this.defaults=t,this.interceptors={request:new Ad,response:new Ad}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=jr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Wu.assertOptions(r,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1),i!==void 0&&Wu.assertOptions(i,{encode:fn.function,serialize:fn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&E.merge(a.common,a[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Yt.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,f=0,h;if(!s){const g=[Id.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);f<h;)c=c.then(g[f++],g[f++]);return c}h=l.length;let w=n;for(f=0;f<h;){const g=l[f++],v=l[f++];try{w=g(w)}catch(x){v.call(this,x);break}}try{c=Id.call(this,w)}catch(g){return Promise.reject(g)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=jr(this.defaults,t);const n=ph(t.baseURL,t.url);return uh(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Uo.prototype[t]=function(n,r){return this.request(jr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(jr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Uo.prototype[t]=n(),Uo.prototype[t+"Form"]=n(!0)});const io=Uo;class kf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new oa(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new kf(function(i){t=i}),cancel:t}}}const p6=kf;function m6(e){return function(n){return e.apply(null,n)}}function h6(e){return E.isObject(e)&&e.isAxiosError===!0}const Yu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yu).forEach(([e,t])=>{Yu[t]=e});const g6=Yu;function hh(e){const t=new io(e),n=Xm(io.prototype.request,t);return E.extend(n,io.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return hh(jr(e,i))},n}const Ce=hh(xf);Ce.Axios=io;Ce.CanceledError=oa;Ce.CancelToken=p6;Ce.isCancel=dh;Ce.VERSION=mh;Ce.toFormData=Al;Ce.AxiosError=K;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=m6;Ce.isAxiosError=h6;Ce.mergeConfig=jr;Ce.AxiosHeaders=Yt;Ce.formToJSON=e=>fh(E.isHTMLForm(e)?new FormData(e):e);Ce.HttpStatusCode=g6;Ce.default=Ce;const Bo=Ce,v6=Ve.section`

margin: 50px;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;

.container {
  background-color: #fff;
  position: relative;
  width: 85%;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  img {
    width: 300px;
    height: 300px;
    border-radius: 5px 0 0 5px;
  }
  .try_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    position: absolute;
    bottom: -20px;
    right: -20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #CB5B19;
    color: #fff;;
    padding: 0.8rem 1.2rem;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  }
  .save_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    position: absolute;
    bottom: -20px;
    right: 140px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #BF170E;
    color: #fff;;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  }
}

 .delete_btn {
  position: absolute;
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
    margin: 10px;
  }
  p {
    font-size: 1rem;
  }
  .card_footer {
    display: flex;
    padding: 1% 0 2% 0;
    .card_footer_container {
      margin-right: 10px;
    }
    h2 {
      margin-bottom: 2px;
      font-size: 1.4rem;
      font-weight: 400;
      color: #ADC48C;
    }
    p {
      color: #72A639;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}

`,y6=e=>{const t=Rn.get("loggedIn"),n=t?JSON.parse(t):null,r=n?n.username:null;if(!r){alert("Please log in to save the recipe.");return}fetch("http://localhost:4000/api/saveRecipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,recipe:e})}).then(i=>{if(i.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(i=>{console.error("Error:",i),alert("Failed to save the recipe.")})},w6=e=>{const t=Rn.get("loggedIn"),n=t?JSON.parse(t):null,r=n?n.username:null;if(!r){alert("Please log in to delete the recipe.");return}fetch("http://localhost:4000/api/deleteRecipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,recipe:e})}).then(i=>{if(i.ok)alert("Recipe deleted successfully!"),window.location.reload();else throw new Error("Failed to delete the recipe.")}).catch(i=>{console.error("Error:",i),alert("Failed to delete the recipe.")})},gh=({recipe:e,showDelete:t})=>{const n=r=>r.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:","");return d(v6,{children:P("div",{className:"container",children:[d("img",{src:e.image,alt:e.title}),P("div",{className:"card_body",children:[d("h1",{children:e.title}),P("p",{children:[n(e.summary),"Credit: ",e.creditText]}),P("div",{className:"card_footer",children:[P("div",{className:"card_footer_container",children:[d("h2",{children:"Dish type:"}),P("p",{children:[" ",e.dishTypes]})]}),P("div",{className:"card_footer_container",children:[d("h2",{children:"Servings:"}),P("p",{children:[" ",e.servings]})]}),P("div",{className:"card_footer_container",children:[d("h2",{children:"Total Time:"}),d("p",{children:e.readyInMinutes})]}),P("div",{className:"card_footer_container",children:[d("h2",{children:"Source:"}),d("p",{children:e.sourceName})]})]}),d(Wc,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&d("button",{className:"save_btn",onClick:()=>y6(e),children:"Save it!"}),t&&d("button",{className:"delete_btn",onClick:()=>w6(e),children:"Delete Recipe"})]})]})})},x6=Ve.section`
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
`;function vh(){return d(x6,{children:d("span",{className:"loader"})})}function S6(e,t){let n=[];return e.forEach(r=>{const i=r.id;for(let a=0;a<t.length;a++)i===t[a].id&&n.push({...r,...t[a]})}),n}const k6=Ve.section`
    display: inline-block;
    background: #8ea93e;
    padding: 3%;
    border-radius: 20px;
    width: 100%;
    box-shadow: 1px 5px 5px black;
    //FILTER SECTION

    li {
        margin: 3%;
        width: 100%;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    & .btn {
        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #40abc6;
        color: #e7e7e7;
        margin: 2% 0;
        box-shadow: 3px 1px 5px black;
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
        background-color: #1fc36e;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #28bee4;
    }
`;function b6({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return d("div",{children:"no filters available"});let a=new Set,o=new Set,l=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(g=>{let v=g.diets;v.length>0&&v.forEach(x=>{n.includes(x)||a.add(x)}),l.forEach(x=>{g[x]&&!i.includes(x)&&o.add(x)})});let s=Array.from(a.values()),u=Array.from(o.values());function c(g){t(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function f(g){t(v=>v.filter(x=>x!==g))}function h(g){r(v=>v.includes(g)?v.filter(x=>x!==g):[...v,g])}function w(g){r(v=>v.filter(x=>x!==g))}return P(k6,{children:[n.length>0?P("section",{children:[d("h2",{children:"selected filters: "}),d("ul",{children:n.map((g,v)=>d("li",{onClick:()=>{f(g)},className:"btn-filter",children:g},v+g))})]}):d("section",{}),i.length>0?P("section",{children:[d("h2",{children:"Category filters"}),d("ul",{children:i.map((g,v)=>d("li",{onClick:()=>{w(g)},className:"btn-filter",children:g},v+g))})]}):d("section",{}),P("section",{children:[d("h2",{children:"Dietary options"}),d("ul",{className:"filter-options",children:s.length>0?s.map((g,v)=>d("li",{onClick:()=>{c(g)},className:"btn",children:d("span",{children:g})},v+g+1)):d(Qt,{})})]}),P("section",{children:[d("h2",{children:"Categories"}),d("ul",{className:"filter-options",children:u.map((g,v)=>d("li",{onClick:()=>{h(g)},className:"btn",children:d("span",{children:g})},g+v+2))})]})]})}function E6(){const e=ea();b.useEffect(()=>{document.cookie.split(";").some(p=>p.trim().startsWith("loggedIn="))||e("/login")},[e]);const[t,n]=b.useState(""),[r,i]=b.useState([]),[a,o]=b.useState([]),[l,s]=b.useState([]),[u,c]=b.useState([]),[f,h]=b.useState(!1),[w,g]=b.useState(!1);b.useEffect(()=>{if(l.length>0||u.length>0){let m=C6(r,l,u);o(m);return}o(r)},[l,u]);const v=b.useRef("");async function x(){try{g(!0);const m=await Bo.get("http://localhost:4000/api/searchbyingredient",{params:{ingredients:t}});//!test remove
//!test remove
m!=null&&m.data&&h(!1);const p=m.data.map(C=>C.id),y=await Bo.get("http://localhost:4000/api/recipeinformation",{params:{recipeIdList:p}});//! test remove
//! test remove
let S=S6(m.data,y.data);i(S),o(S),g(!1)}catch{h(!0)}}return P(rw,{children:[d("div",{className:"title",children:d("h1",{children:"Recipe Search"})}),d("div",{className:"search",children:P("form",{action:"#",onSubmit:m=>{m.preventDefault(),x()},children:[d("input",{ref:v,onChange:m=>n(m.target.value),id:"ingregients",value:t,type:"text",placeholder:"What are you in the mood for?"}),d("button",{children:"Search"})]})}),P("section",{className:"recipes-display",children:[d("div",{className:"filter-container",children:d(b6,{recipeListArr:a,setDietFilter:s,dietFilter:l,setCategoryFilter:c,categoryFilter:u})}),d("section",{className:"searchresults-container",children:d("div",{className:"searchResults",children:d("ul",{children:w?d(vh,{}):a.length>0?a.map(m=>d("li",{children:d(gh,{recipe:m},m.id)},m.id)):f?P("h3",{children:[" ","An error has occured, please try searching again."," "]}):P("h3",{children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function C6(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let a=i.diets;for(let o=0;o<t.length;o++){let l=t[o];if(!a.includes(l))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let a=0;a<n.length;a++)if(!i[n[a]])return!1;return!0})),r)}const z6=Ve.section`
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
`;function P6(){const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=Rn.get("loggedIn"),i=r?JSON.parse(r):null,a=i?i.username:null;if(!a){alert("Please log in to get saved recipes.");return}const o=await Bo.post("http://localhost:4000/api/getSavedRecipes",{username:a});t(o.data)}catch(r){console.error("Error fetching saved recipes:",r)}}n()},[]),P(z6,{children:[d("div",{className:"title",children:d("h1",{children:"Saved Recipes"})}),d("div",{className:"saved-recipes",children:d("ul",{children:e.map(n=>d("li",{children:d(gh,{recipe:n.recipeJson,showDelete:!0})},n._id))})})]})}const N6=Ve.section`
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
`;function _6(){const e=b.useRef(null),t=b.useRef(null),[n,r]=b.useState(""),[i,a]=b.useState(""),[o,l]=b.useState(null);return b.useEffect(()=>{e.current.focus()},[]),d(N6,{children:d("section",{className:"form-sect",children:P("form",{onSubmit:u=>{u.preventDefault(),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:i})}).then(c=>{if(console.log("response is ",c),c.ok)return c.json();throw new Error("Invalid username or password")}).then(c=>{window.location.href="/search"}).catch(c=>{console.error("Login failed:",c),l(c.message)})},children:[d("div",{className:"title",children:d("h2",{children:"Welcome Back!"})}),o&&d("div",{className:"error-container",children:P("div",{className:"error-desc",children:[d("span",{className:"error-marker",children:"⚠"})," ",o]})}),P("div",{className:"input-container",children:[d("label",{className:"input-tag",htmlFor:"username",children:"Username"}),d("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:u=>r(u.target.value),required:!0})]}),P("div",{className:"input-container",children:[d("label",{className:"input-tag",htmlFor:"password",children:"Password"}),d("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:u=>a(u.target.value),required:!0})]}),d("div",{className:"submit-btn",children:d("button",{type:"submit",className:"btn",children:"Sign In"})})]})})})}let kt="#2C4001",Ma="#F2E7AE",Md="#59320F",Ss="#F2F2F2";const O6=Ve.section`
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
  background: ${Ss};
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
  color: ${Ss};
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
  background: ${Ma}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Ma}
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
  background: ${Md};
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
  background: ${Ma}

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
  background: ${Md};
  color: ${Ma};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${Ss};
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
`;let ja;const A6=new Uint8Array(16);function R6(){if(!ja&&(ja=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ja))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ja(A6)}const Ie=[];for(let e=0;e<256;++e)Ie.push((e+256).toString(16).slice(1));function T6(e,t=0){return(Ie[e[t+0]]+Ie[e[t+1]]+Ie[e[t+2]]+Ie[e[t+3]]+"-"+Ie[e[t+4]]+Ie[e[t+5]]+"-"+Ie[e[t+6]]+Ie[e[t+7]]+"-"+Ie[e[t+8]]+Ie[e[t+9]]+"-"+Ie[e[t+10]]+Ie[e[t+11]]+Ie[e[t+12]]+Ie[e[t+13]]+Ie[e[t+14]]+Ie[e[t+15]]).toLowerCase()}const I6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),jd={randomUUID:I6};function ht(e,t,n){if(jd.randomUUID&&!t&&!e)return jd.randomUUID();e=e||{};const r=e.random||(e.rng||R6)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return T6(r)}function L6(){var c;const t=(c=Wr().state)==null?void 0:c.recipe,n=ea();b.useEffect(()=>{document.cookie.split(";").some(h=>h.trim().startsWith("loggedIn="))||n("/login")},[n]);const r=t.dishTypes.map(f=>d("li",{children:f},ht())),i=t.extendedIngredients.map(f=>P("li",{children:[f.amount," ",f.unit,"  ",d("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${f.image}`})," ",f.name]},ht()));console.log(t);const a=t.analyzedInstructions[0].steps.map(f=>d("li",{children:f.step},ht())),o=t.summary.replace(/<.*?>/g,""),l=t.extendedIngredients.length,s=t.aggregateLikes,u=t.diets.map(f=>d("li",{children:f},ht()));return d(O6,{children:P("div",{className:"recipeContainer",children:[P("div",{className:"recipeImgContainer",children:[P("div",{className:"imageContainer",children:[d("img",{className:"recipeImg",src:t.image,alt:t.title}),d("button",{className:"saveBtn",children:d(Vt,{icon:zd,className:"saveIcon"})})]}),P("section",{className:"recipeDetails",children:[d("div",{className:"titleContainer",children:d("h1",{className:"recipeTitle",children:t.title})}),P("div",{className:"quickInfoContainer",children:[P("section",{className:"quickInfoItem",children:[d(Vt,{icon:K3,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),P("section",{children:[d(Vt,{icon:Q3,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[l," Ingredients"]})]}),P("section",{children:[d(Vt,{icon:zd,className:"quickIcon"}),P("h2",{className:"recipeTime",children:[s," Likes"]})]})]}),d("section",{className:"recipeSummary",children:d("p",{children:o})}),P("section",{className:"recipeTags",children:[d("div",{className:"recipeCategory",children:r}),d("div",{className:"recipeDiets",children:u})]})]})]}),d("div",{className:"recipeHead",children:d("div",{className:"recipeStart",children:P("div",{className:"ingredientCard",children:[P("h2",{children:["Servings: ",t.servings]}),d("input",{type:"number",placeholder:t.servings}),d("h2",{children:"What you'll need:"}),d("div",{className:"recipeIngredient",children:i})]})})}),P("div",{className:"instructionsCard",children:[d("h2",{children:t.title}),P("div",{className:"instructionContainer",children:[d("div",{children:d("img",{className:"instructionImg",src:t.image,alt:t.title})}),P("div",{className:"recipeInstructions",children:[d("h2",{children:"Instructions:"}),d("ol",{children:a})]})]})]})]})})}async function $6(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}const M6=Ve.section`
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
`;function j6(){const e=ea(),[t,n]=b.useState(!1),[r,i]=b.useState(1),[a,o]=b.useState("None"),[l,s]=b.useState(""),[u,c]=b.useState(null);return b.useEffect(()=>{document.cookie.split(";").some(w=>w.trim().startsWith("loggedIn="))||e("/login")},[e]),P(M6,{children:[P("form",{onSubmit:async h=>{n(!0),h.preventDefault();const w=await $6(r,a,parseInt(l));c(w),n(!1)},children:[d("label",{htmlFor:"numberOfDays",children:"Number of days:"}),P("select",{id:"numberOfDays",value:r,onChange:h=>i(h.target.value),children:[d("option",{value:"1",children:"1"}),d("option",{value:"3",children:"3"}),d("option",{value:"5",children:"5"})]}),d("label",{htmlFor:"dietType",children:"Diet type:"}),P("select",{id:"dietType",value:a,onChange:h=>o(h.target.value),children:[d("option",{value:"None",children:"None"}),d("option",{value:"vegan",children:"Vegan"}),d("option",{value:"vegetarian",children:"Vegetarian"}),d("option",{value:"pescatarian",children:"Pescatarian"}),d("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),d("option",{value:"keto",children:"Keto"}),d("option",{value:"gluten-free",children:"Gluten-free"}),d("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),d("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),d("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:l,onChange:h=>s(h.target.value)}),d("button",{type:"submit",children:"Get Meal Plan"}),t?d(vh,{}):null]}),u&&P("table",{children:[d("thead",{children:P("tr",{children:[d("th",{children:"Day"}),d("th",{children:"Meal"}),d("th",{children:"Food"}),d("th",{children:"Calories"})]})}),d("tbody",{children:u.map(h=>{const w=Object.entries(h).filter(([v])=>v!=="Day"&&v!=="TotalCalories"),g=w.reduce((v,[,x])=>v+x.Calories,0);return w.flatMap(([v,x],m)=>[P("tr",{children:[m===0&&d("td",{rowSpan:w.length+1,children:h.Day}),d("td",{children:v}),d("td",{children:x.Meal}),d("td",{children:x.Calories})]},`${v}-${x.Meal}`),m===w.length-1&&d("tr",{children:P("td",{colSpan:"3",align:"right",children:["Total Day Calories : ",g]})},`${v}-TotalCalories`)])})})]})]})}const D6=Yy`
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

`,F6="#ffffff",U6="#40a140",B6=" #ffea00d0",H6=" #28bee4",V6="#ffffff",W6="#25271843",Y6=Ve.section`
    background: ${F6};
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
        background: ${V6};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${W6};
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
        background-color: ${B6};
        color: #000000;
        text-align: middle;
        vertical-align: center;
        box-shadow: 3px 1px 5px black;
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${H6};
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
            background: ${U6};
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
`,Q6="#2b3f0124",G6="#eae6e6",K6="#a8a6a6",X6="#000000",J6="#595959f",q6=Ve.section`
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
            background-color: ${Q6};

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
            background-color: ${G6};
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
                                color: ${J6};
                            }
                            input {
                                color: ${X6};
                                border: 1px solid ${K6};
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
`,Z6="#f4888a",e5=Ve.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${Z6};

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
`;function bf({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((a,o)=>d("li",{className:"error_container",children:P("div",{className:"error_item",children:[d("div",{className:"img__container",children:d("img",{src:"/src/assets/error.png",alt:"error symbol"})}),d("p",{children:a})]})},ht()))}return t?d(e5,{children:d("div",{className:"error container",children:d("div",{className:"row",children:P("section",{className:"container col",children:[d("h3",{children:"Please correct errors"}),d("ul",{className:"error__list",children:e.length>0?n(e):d(Qt,{})})]})})})}):d(Qt,{})}function t5({children:e,setIsDisplayed:t,scrollToRef:n}){b.useRef("");function r(){t(!1)}return d(q6,{children:P("main",{children:[d("div",{onClick:()=>{r()},className:"back__blur "}),d("div",{ref:n,className:"container row ",children:d("section",{id:"modal",className:"",children:e})})]})})}const ks=Bo.create({baseURL:"",headers:{"Content-Type":"application/json"},withCredentials:!0});function Dd(e,t){return e===t}function n5(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function r5(e,t){const n=await JSON.stringify({token:t,username:e});Rn.set("loggedIn",n),Rn.set("loggedIn",n)}const Da={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!Dd(t,n))throw Error("passwords dont match")}catch(a){throw console.log("password confirm error"),Error(a.message)}try{if(i=await ks.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const a=i.data.username,o=i.data.token;await r5(a,o)}}catch(a){throw console.log("server request sent and error"),Error(a.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!Dd(t,n))throw Error("emails dont match");if(!n5(t))throw Error("emails improper format");return r=await ks.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await ks.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},i5="#08e171dc",a5=Ve.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${i5};

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
`;function Ef({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((a,o)=>d("li",{className:"error_container",children:P("div",{className:"list_item",children:[d("img",{src:"/src/assets/checked.png",alt:"check symbol"}),d("p",{children:a})]})},ht()))}return t?d(a5,{children:d("div",{className:"error container",children:d("div",{className:"row",children:d("section",{className:"container col",children:d("ul",{className:"display_list",children:e.length>0?n(e):d(Qt,{})})})})})}):d(Qt,{})}const o5=Ve.section``;function Fd({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),h=Object.fromEntries(f.entries());console.log("modal form data",h);const w=await e(h)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return P(o5,{children:[P("div",{children:[d(Ef,{listArr:["Password Updated"],showCard:n}),d(bf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[d("section",{className:"row title",children:d("h1",{children:"Update Password"})}),d("section",{className:"row form__inputs",children:P("ul",{children:[d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"oldPassword",children:"Old Password"}),d("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},ht()),d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"newPassword",children:"New Password"}),d("input",{id:"newPassword",type:"text",name:"newPassword"})]})},ht()),d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),d("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},ht())]})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})]})}function l5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),h=Object.fromEntries(f.entries());console.log("modal form data",h);const w=await e(h)}catch(f){l([f.message]),a(!0),console.log("error in update form",f.message);return}r(!0)}return P("form",{ref:s,onSubmit:u,children:[P("div",{children:[d(Ef,{listArr:["Email Updated"],showCard:n}),d(bf,{errorsArr:o,showError:i})]}),d("section",{className:"row title",children:d("h1",{children:"Update Email"})}),d("section",{className:"row form__inputs",children:P("ul",{children:[d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"newEmail",children:"New Email"}),d("input",{id:"newEmail",type:"text",name:"newEmail"})]})},ht()),d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),d("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},ht())]})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})}function s5({handleSubmit:e,setShowModal:t}){const[n,r]=b.useState(!1),[i,a]=b.useState(!1),[o,l]=b.useState([]),s=b.useRef("");async function u(c){c.preventDefault();try{a(!1);const f=new FormData(s.current),h=Object.fromEntries(f.entries());console.log(" form data",h);const w=await e(h)}catch(f){l([f.message]),a(!0),console.log("error in update modal",f.message);return}r(!0)}return P(Qt,{children:[P("div",{children:[d(Ef,{listArr:["Calorie Preferences Updated"],showCard:n}),d(bf,{errorsArr:o,showError:i})]}),P("form",{ref:s,onSubmit:u,children:[d("section",{className:"row title",children:d("h1",{children:"Update Calorie preferences"})}),d("section",{className:"row form__inputs",children:d("ul",{children:d("li",{className:"update__field",children:P("div",{className:"input__container",children:[d("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),d("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},ht())})}),n?d("section",{className:"form__controls row",children:d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Done"})})}):P("section",{className:"form__controls row",children:[d("div",{className:"btn",onClick:u,children:d("span",{children:"Submit"})}),d("div",{className:"btn",onClick:()=>{t(!1),l([]),a(!1)},children:d("span",{children:"Cancel"})})]})]})]})}function u5(){b.useRef(null);const[e,t]=b.useState(!1);b.useState([]),b.useState(!1),b.useState(!1);const[n,r]=b.useState(d(Fd,{setShowModal:t,handleSubmit:Da.updatePassword}));return P(Y6,{children:[d("section",{className:"modal__container",children:e?d(t5,{setIsDisplayed:t,children:n}):d(Qt,{})}),P("section",{className:"profile-page",children:[P("section",{className:"container profile",children:[P("picture",{children:[d("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),d("img",{src:"/src/assets/spoon.png",alt:"user avatar"})]}),d("h3",{children:"Hi! Bob"}),d("h3",{children:"Email@email.com"})]}),P("section",{className:"container app-config",children:[P("section",{children:[d("h4",{children:"Your Dietary Preferences"}),P("ul",{className:"app-pref",children:[d("li",{children:d("div",{children:d("span",{children:"Gluten Free"})})}),d("li",{children:"Ketogenic"}),d("li",{children:"Vegetarian"}),d("li",{children:"Lacto-Vegetarian"}),d("li",{children:"Ovo-Vegetarian"}),d("li",{children:"Vegan"}),d("li",{children:"Pescetarian"}),d("li",{children:"Paleo"}),d("li",{children:"Primal"})]}),d("div",{className:"controls",children:d("span",{className:"btn",children:"Update Dietary Preferences"})})]}),P("ul",{className:"options",children:[d("li",{className:"btn",onClick:()=>{t(!0),r(d(s5,{setShowModal:t,handleSubmit:Da.updateCaloric}))},children:d("span",{children:"Update Caloric settings"})}),d("li",{className:"btn",onClick:()=>{t(!0),r(d(l5,{setShowModal:t,handleSubmit:Da.updateEmail}))},children:d("span",{children:"Update Email"})}),d("li",{onClick:()=>{t(!0),r(d(Fd,{setShowModal:t,handleSubmit:Da.updatePassword}))},className:"btn",children:d("div",{children:d("span",{children:"Update Password"})})})]})]})]})]})}function c5(){return P("div",{className:"App",children:[d("header",{children:d(X3,{})}),P("main",{children:[P(Dv,{children:[d(At,{path:"/",element:d(ew,{})}),d(At,{path:"/search",element:d(E6,{})}),d(At,{path:"/details",element:d(L6,{})}),d(At,{path:"/saved",element:d(P6,{})}),d(At,{path:"/signup",element:d(nw,{})}),d(At,{path:"/login",element:d(_6,{})}),d(At,{path:"/mealPlanner",element:d(j6,{})}),d(At,{path:"/profile",element:d(u5,{})}),d(At,{path:"/*",element:d("h1",{children:"404 no page"})})]}),d(D6,{})]})]})}Es.createRoot(document.getElementById("root")).render(d(tn.StrictMode,{children:d(Vv,{children:d(c5,{})})}));
