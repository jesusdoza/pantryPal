function MD(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wa={},RD={get exports(){return wa},set exports(e){wa=e}},ml={},S={},BD={get exports(){return S},set exports(e){S=e}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),$D=Symbol.for("react.portal"),LD=Symbol.for("react.fragment"),jD=Symbol.for("react.strict_mode"),zD=Symbol.for("react.profiler"),VD=Symbol.for("react.provider"),UD=Symbol.for("react.context"),HD=Symbol.for("react.forward_ref"),WD=Symbol.for("react.suspense"),YD=Symbol.for("react.memo"),GD=Symbol.for("react.lazy"),th=Symbol.iterator;function qD(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,lv={};function Eo(e,t,n){this.props=e,this.context=t,this.refs=lv,this.updater=n||uv}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cv(){}cv.prototype=Eo.prototype;function pp(e,t,n){this.props=e,this.context=t,this.refs=lv,this.updater=n||uv}var hp=pp.prototype=new cv;hp.constructor=pp;sv(hp,Eo.prototype);hp.isPureReactComponent=!0;var nh=Array.isArray,fv=Object.prototype.hasOwnProperty,mp={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function pv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)fv.call(t,r)&&!dv.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Qa,type:e,key:o,ref:a,props:i,_owner:mp.current}}function KD(e,t){return{$$typeof:Qa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qa}function XD(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?XD(""+e.key):t.toString(36)}function Ku(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qa:case $D:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+yc(a,0):r,nh(i)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),Ku(i,t,n,"",function(f){return f})):i!=null&&(vp(i)&&(i=KD(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",nh(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+yc(o,u);a+=Ku(o,t,n,s,i)}else if(s=qD(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+yc(o,u++),a+=Ku(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function du(e,t,n){if(e==null)return e;var r=[],i=0;return Ku(e,r,"","",function(o){return t.call(n,o,i++)}),r}function QD(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $t={current:null},Xu={transition:null},ZD={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Xu,ReactCurrentOwner:mp};Ee.Children={map:du,forEach:function(e,t,n){du(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return du(e,function(){t++}),t},toArray:function(e){return du(e,function(t){return t})||[]},only:function(e){if(!vp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Component=Eo;Ee.Fragment=LD;Ee.Profiler=zD;Ee.PureComponent=pp;Ee.StrictMode=jD;Ee.Suspense=WD;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZD;Ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=mp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)fv.call(t,s)&&!dv.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Qa,type:e.type,key:i,ref:o,props:r,_owner:a}};Ee.createContext=function(e){return e={$$typeof:UD,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:VD,_context:e},e.Consumer=e};Ee.createElement=pv;Ee.createFactory=function(e){var t=pv.bind(null,e);return t.type=e,t};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:HD,render:e}};Ee.isValidElement=vp;Ee.lazy=function(e){return{$$typeof:GD,_payload:{_status:-1,_result:e},_init:QD}};Ee.memo=function(e,t){return{$$typeof:YD,type:e,compare:t===void 0?null:t}};Ee.startTransition=function(e){var t=Xu.transition;Xu.transition={};try{e()}finally{Xu.transition=t}};Ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ee.useCallback=function(e,t){return $t.current.useCallback(e,t)};Ee.useContext=function(e){return $t.current.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e){return $t.current.useDeferredValue(e)};Ee.useEffect=function(e,t){return $t.current.useEffect(e,t)};Ee.useId=function(){return $t.current.useId()};Ee.useImperativeHandle=function(e,t,n){return $t.current.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return $t.current.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return $t.current.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return $t.current.useMemo(e,t)};Ee.useReducer=function(e,t,n){return $t.current.useReducer(e,t,n)};Ee.useRef=function(e){return $t.current.useRef(e)};Ee.useState=function(e){return $t.current.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return $t.current.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return $t.current.useTransition()};Ee.version="18.2.0";(function(e){e.exports=Ee})(BD);const cr=dp(S),Da=MD({__proto__:null,default:cr},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JD=S,eE=Symbol.for("react.element"),tE=Symbol.for("react.fragment"),nE=Object.prototype.hasOwnProperty,rE=JD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iE={key:!0,ref:!0,__self:!0,__source:!0};function hv(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)nE.call(t,r)&&!iE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:eE,type:e,key:o,ref:a,props:i,_owner:rE.current}}ml.Fragment=tE;ml.jsx=hv;ml.jsxs=hv;(function(e){e.exports=ml})(RD);const Wn=wa.Fragment,D=wa.jsx,_=wa.jsxs;var bf={},ws={},oE={get exports(){return ws},set exports(e){ws=e}},rn={},Sf={},aE={get exports(){return Sf},set exports(e){Sf=e}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,J){var te=z.length;z.push(J);e:for(;0<te;){var ye=te-1>>>1,$=z[ye];if(0<i($,J))z[ye]=J,z[te]=$,te=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var J=z[0],te=z.pop();if(te!==J){z[0]=te;e:for(var ye=0,$=z.length,U=$>>>1;ye<U;){var Y=2*(ye+1)-1,ne=z[Y],O=Y+1,ce=z[O];if(0>i(ne,te))O<$&&0>i(ce,ne)?(z[ye]=ce,z[O]=te,ye=O):(z[ye]=ne,z[Y]=te,ye=Y);else if(O<$&&0>i(ce,te))z[ye]=ce,z[O]=te,ye=O;else break e}}return J}function i(z,J){var te=z.sortIndex-J.sortIndex;return te!==0?te:z.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var s=[],f=[],c=1,l=null,d=3,p=!1,h=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var J=n(f);J!==null;){if(J.callback===null)r(f);else if(J.startTime<=z)r(f),J.sortIndex=J.expirationTime,t(s,J);else break;J=n(f)}}function E(z){if(v=!1,w(z),!h)if(n(s)!==null)h=!0,ae(A);else{var J=n(f);J!==null&&Ie(E,J.startTime-z)}}function A(z,J){h=!1,v&&(v=!1,m(x),x=-1),p=!0;var te=d;try{for(w(J),l=n(s);l!==null&&(!(l.expirationTime>J)||z&&!ee());){var ye=l.callback;if(typeof ye=="function"){l.callback=null,d=l.priorityLevel;var $=ye(l.expirationTime<=J);J=e.unstable_now(),typeof $=="function"?l.callback=$:l===n(s)&&r(s),w(J)}else r(s);l=n(s)}if(l!==null)var U=!0;else{var Y=n(f);Y!==null&&Ie(E,Y.startTime-J),U=!1}return U}finally{l=null,d=te,p=!1}}var k=!1,F=null,x=-1,P=5,G=-1;function ee(){return!(e.unstable_now()-G<P)}function ie(){if(F!==null){var z=e.unstable_now();G=z;var J=!0;try{J=F(!0,z)}finally{J?he():(k=!1,F=null)}}else k=!1}var he;if(typeof g=="function")he=function(){g(ie)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Z=me.port2;me.port1.onmessage=ie,he=function(){Z.postMessage(null)}}else he=function(){y(ie,0)};function ae(z){F=z,k||(k=!0,he())}function Ie(z,J){x=y(function(){z(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,ae(A))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(d){case 1:case 2:case 3:var J=3;break;default:J=d}var te=d;d=J;try{return z()}finally{d=te}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=d;d=z;try{return J()}finally{d=te}},e.unstable_scheduleCallback=function(z,J,te){var ye=e.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,z={id:c++,callback:J,priorityLevel:z,startTime:te,expirationTime:$,sortIndex:-1},te>ye?(z.sortIndex=te,t(f,z),n(s)===null&&z===n(f)&&(v?(m(x),x=-1):v=!0,Ie(E,te-ye))):(z.sortIndex=$,t(s,z),h||p||(h=!0,ae(A))),z},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(z){var J=d;return function(){var te=d;d=J;try{return z.apply(this,arguments)}finally{d=te}}}})(mv);(function(e){e.exports=mv})(aE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=S,nn=Sf;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,Ea={};function bi(e,t){uo(e,t),uo(e+"Capture",t)}function uo(e,t){for(Ea[e]=t,e=0;e<t.length;e++)gv.add(t[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,uE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},oh={};function sE(e){return xf.call(oh,e)?!0:xf.call(ih,e)?!1:uE.test(e)?oh[e]=!0:(ih[e]=!0,!1)}function lE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cE(e,t,n,r){if(t===null||typeof t>"u"||lE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Lt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ct[e]=new Lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ct[t]=new Lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ct[e]=new Lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ct[e]=new Lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ct[e]=new Lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ct[e]=new Lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ct[e]=new Lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ct[e]=new Lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ct[e]=new Lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var gp=/[\-:]([a-z])/g;function yp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gp,yp);Ct[t]=new Lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gp,yp);Ct[t]=new Lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gp,yp);Ct[t]=new Lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ct[e]=new Lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ct[e]=new Lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function wp(e,t,n,r){var i=Ct.hasOwnProperty(t)?Ct[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cE(t,n,i,r)&&(n=null),r||i===null?sE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fr=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pu=Symbol.for("react.element"),_i=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),Dv=Symbol.for("react.offscreen"),ah=Symbol.iterator;function Bo(e){return e===null||typeof e!="object"?null:(e=ah&&e[ah]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,wc;function Zo(e){if(wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wc=t&&t[1]||""}return`
`+wc+e}var Dc=!1;function Ec(e,t){if(!e||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,u=o.length-1;1<=a&&0<=u&&i[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==o[u]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=u);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zo(e):""}function fE(e){switch(e.tag){case 5:return Zo(e.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return e=Ec(e.type,!1),e;case 11:return e=Ec(e.type.render,!1),e;case 1:return e=Ec(e.type,!0),e;default:return""}}function Nf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mi:return"Fragment";case _i:return"Portal";case Af:return"Profiler";case Dp:return"StrictMode";case Ff:return"Suspense";case kf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wv:return(e.displayName||"Context")+".Consumer";case yv:return(e._context.displayName||"Context")+".Provider";case Ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cp:return t=e.displayName||null,t!==null?t:Nf(e.type)||"Memo";case wr:t=e._payload,e=e._init;try{return Nf(e(t))}catch{}}return null}function dE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(t);case 8:return t===Dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ev(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pE(e){var t=Ev(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hu(e){e._valueTracker||(e._valueTracker=pE(e))}function Cv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ev(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Of(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bv(e,t){t=t.checked,t!=null&&wp(e,"checked",t,!1)}function Pf(e,t){bv(e,t);var n=jr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?If(e,t.type,n):t.hasOwnProperty("defaultValue")&&If(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function If(e,t,n){(t!=="number"||Ds(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jo=Array.isArray;function Zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Jo(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jr(n)}}function Sv(e,t){var n=jr(t.value),r=jr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mu,Av=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mu=mu||document.createElement("div"),mu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hE=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(e){hE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oa[t]=oa[e]})});function Fv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oa.hasOwnProperty(e)&&oa[e]?(""+t).trim():t+"px"}function kv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mE=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(mE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Rf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function bp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $f=null,Ji=null,eo=null;function fh(e){if(e=eu(e)){if(typeof $f!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Dl(t),$f(e.stateNode,e.type,t))}}function Nv(e){Ji?eo?eo.push(e):eo=[e]:Ji=e}function Ov(){if(Ji){var e=Ji,t=eo;if(eo=Ji=null,fh(e),t)for(e=0;e<t.length;e++)fh(t[e])}}function Pv(e,t){return e(t)}function Iv(){}var Cc=!1;function Tv(e,t,n){if(Cc)return e(t,n);Cc=!0;try{return Pv(e,t,n)}finally{Cc=!1,(Ji!==null||eo!==null)&&(Iv(),Ov())}}function ba(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Lf=!1;if(rr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Lf=!1}function vE(e,t,n,r,i,o,a,u,s){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(c){this.onError(c)}}var aa=!1,Es=null,Cs=!1,jf=null,gE={onError:function(e){aa=!0,Es=e}};function yE(e,t,n,r,i,o,a,u,s){aa=!1,Es=null,vE.apply(gE,arguments)}function wE(e,t,n,r,i,o,a,u,s){if(yE.apply(this,arguments),aa){if(aa){var f=Es;aa=!1,Es=null}else throw Error(j(198));Cs||(Cs=!0,jf=f)}}function Si(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dh(e){if(Si(e)!==e)throw Error(j(188))}function DE(e){var t=e.alternate;if(!t){if(t=Si(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dh(i),e;if(o===r)return dh(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=o;break}if(u===r){a=!0,r=i,n=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===n){a=!0,n=o,r=i;break}if(u===r){a=!0,r=o,n=i;break}u=u.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Mv(e){return e=DE(e),e!==null?Rv(e):null}function Rv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rv(e);if(t!==null)return t;e=e.sibling}return null}var Bv=nn.unstable_scheduleCallback,ph=nn.unstable_cancelCallback,EE=nn.unstable_shouldYield,CE=nn.unstable_requestPaint,Ge=nn.unstable_now,bE=nn.unstable_getCurrentPriorityLevel,Sp=nn.unstable_ImmediatePriority,$v=nn.unstable_UserBlockingPriority,bs=nn.unstable_NormalPriority,SE=nn.unstable_LowPriority,Lv=nn.unstable_IdlePriority,vl=null,zn=null;function xE(e){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:kE,AE=Math.log,FE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(AE(e)/FE|0)|0}var vu=64,gu=4194304;function ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=ea(u):(o&=a,o!==0&&(r=ea(o)))}else a=n&~i,a!==0?r=ea(a):o!==0&&(r=ea(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),i=1<<n,r|=e[n],t&=~i;return r}function NE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-An(o),u=1<<a,s=i[a];s===-1?(!(u&n)||u&r)&&(i[a]=NE(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function zf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jv(){var e=vu;return vu<<=1,!(vu&4194240)&&(vu=64),e}function bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Za(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function PE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-An(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ne=0;function zv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vv,Ap,Uv,Hv,Wv,Vf=!1,yu=[],Or=null,Pr=null,Ir=null,Sa=new Map,xa=new Map,Cr=[],IE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Sa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(t.pointerId)}}function Lo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=eu(t),t!==null&&Ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function TE(e,t,n,r,i){switch(t){case"focusin":return Or=Lo(Or,e,t,n,r,i),!0;case"dragenter":return Pr=Lo(Pr,e,t,n,r,i),!0;case"mouseover":return Ir=Lo(Ir,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Sa.set(o,Lo(Sa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xa.set(o,Lo(xa.get(o)||null,e,t,n,r,i)),!0}return!1}function Yv(e){var t=ai(e.target);if(t!==null){var n=Si(t);if(n!==null){if(t=n.tag,t===13){if(t=_v(n),t!==null){e.blockedOn=t,Wv(e.priority,function(){Uv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bf=r,n.target.dispatchEvent(r),Bf=null}else return t=eu(n),t!==null&&Ap(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){Qu(e)&&n.delete(t)}function _E(){Vf=!1,Or!==null&&Qu(Or)&&(Or=null),Pr!==null&&Qu(Pr)&&(Pr=null),Ir!==null&&Qu(Ir)&&(Ir=null),Sa.forEach(mh),xa.forEach(mh)}function jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vf||(Vf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,_E)))}function Aa(e){function t(i){return jo(i,e)}if(0<yu.length){jo(yu[0],e);for(var n=1;n<yu.length;n++){var r=yu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&jo(Or,e),Pr!==null&&jo(Pr,e),Ir!==null&&jo(Ir,e),Sa.forEach(t),xa.forEach(t),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)Yv(n),n.blockedOn===null&&Cr.shift()}var to=fr.ReactCurrentBatchConfig,xs=!0;function ME(e,t,n,r){var i=Ne,o=to.transition;to.transition=null;try{Ne=1,Fp(e,t,n,r)}finally{Ne=i,to.transition=o}}function RE(e,t,n,r){var i=Ne,o=to.transition;to.transition=null;try{Ne=4,Fp(e,t,n,r)}finally{Ne=i,to.transition=o}}function Fp(e,t,n,r){if(xs){var i=Uf(e,t,n,r);if(i===null)Tc(e,t,r,As,n),hh(e,r);else if(TE(i,e,t,n,r))r.stopPropagation();else if(hh(e,r),t&4&&-1<IE.indexOf(e)){for(;i!==null;){var o=eu(i);if(o!==null&&Vv(o),o=Uf(e,t,n,r),o===null&&Tc(e,t,r,As,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Tc(e,t,r,null,n)}}var As=null;function Uf(e,t,n,r){if(As=null,e=bp(r),e=ai(e),e!==null)if(t=Si(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return As=e,null}function Gv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bE()){case Sp:return 1;case $v:return 4;case bs:case SE:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var Sr=null,kp=null,Zu=null;function qv(){if(Zu)return Zu;var e,t=kp,n=t.length,r,i="value"in Sr?Sr.value:Sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Zu=i.slice(e,1<r?1-r:void 0)}function Ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wu(){return!0}function vh(){return!1}function on(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wu:vh,this.isPropagationStopped=vh,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),t}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=on(Co),Ja=Ve({},Co,{view:0,detail:0}),BE=on(Ja),Sc,xc,zo,gl=Ve({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zo&&(zo&&e.type==="mousemove"?(Sc=e.screenX-zo.screenX,xc=e.screenY-zo.screenY):xc=Sc=0,zo=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),gh=on(gl),$E=Ve({},gl,{dataTransfer:0}),LE=on($E),jE=Ve({},Ja,{relatedTarget:0}),Ac=on(jE),zE=Ve({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),VE=on(zE),UE=Ve({},Co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),HE=on(UE),WE=Ve({},Co,{data:0}),yh=on(WE),YE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qE[e])?!!t[e]:!1}function Op(){return KE}var XE=Ve({},Ja,{key:function(e){if(e.key){var t=YE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(e){return e.type==="keypress"?Ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),QE=on(XE),ZE=Ve({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=on(ZE),JE=Ve({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),eC=on(JE),tC=Ve({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),nC=on(tC),rC=Ve({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iC=on(rC),oC=[9,13,27,32],Pp=rr&&"CompositionEvent"in window,ua=null;rr&&"documentMode"in document&&(ua=document.documentMode);var aC=rr&&"TextEvent"in window&&!ua,Kv=rr&&(!Pp||ua&&8<ua&&11>=ua),Dh=String.fromCharCode(32),Eh=!1;function Xv(e,t){switch(e){case"keyup":return oC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function uC(e,t){switch(e){case"compositionend":return Qv(t);case"keypress":return t.which!==32?null:(Eh=!0,Dh);case"textInput":return e=t.data,e===Dh&&Eh?null:e;default:return null}}function sC(e,t){if(Ri)return e==="compositionend"||!Pp&&Xv(e,t)?(e=qv(),Zu=kp=Sr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kv&&t.locale!=="ko"?null:t.data;default:return null}}var lC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lC[e.type]:t==="textarea"}function Zv(e,t,n,r){Nv(r),t=Fs(t,"onChange"),0<t.length&&(n=new Np("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sa=null,Fa=null;function cC(e){lg(e,0)}function yl(e){var t=Li(e);if(Cv(t))return e}function fC(e,t){if(e==="change")return t}var Jv=!1;if(rr){var Fc;if(rr){var kc="oninput"in document;if(!kc){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),kc=typeof bh.oninput=="function"}Fc=kc}else Fc=!1;Jv=Fc&&(!document.documentMode||9<document.documentMode)}function Sh(){sa&&(sa.detachEvent("onpropertychange",eg),Fa=sa=null)}function eg(e){if(e.propertyName==="value"&&yl(Fa)){var t=[];Zv(t,Fa,e,bp(e)),Tv(cC,t)}}function dC(e,t,n){e==="focusin"?(Sh(),sa=t,Fa=n,sa.attachEvent("onpropertychange",eg)):e==="focusout"&&Sh()}function pC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Fa)}function hC(e,t){if(e==="click")return yl(t)}function mC(e,t){if(e==="input"||e==="change")return yl(t)}function vC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:vC;function ka(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xf.call(t,i)||!Nn(e[i],t[i]))return!1}return!0}function xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ah(e,t){var n=xh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function tg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ng(){for(var e=window,t=Ds();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ds(e.document)}return t}function Ip(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gC(e){var t=ng(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(r!==null&&Ip(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ah(n,o);var a=Ah(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yC=rr&&"documentMode"in document&&11>=document.documentMode,Bi=null,Hf=null,la=null,Wf=!1;function Fh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Bi==null||Bi!==Ds(r)||(r=Bi,"selectionStart"in r&&Ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&ka(la,r)||(la=r,r=Fs(Hf,"onSelect"),0<r.length&&(t=new Np("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bi)))}function Du(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:Du("Animation","AnimationEnd"),animationiteration:Du("Animation","AnimationIteration"),animationstart:Du("Animation","AnimationStart"),transitionend:Du("Transition","TransitionEnd")},Nc={},rg={};rr&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function wl(e){if(Nc[e])return Nc[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rg)return Nc[e]=t[n];return e}var ig=wl("animationend"),og=wl("animationiteration"),ag=wl("animationstart"),ug=wl("transitionend"),sg=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(e,t){sg.set(e,t),bi(t,[e])}for(var Oc=0;Oc<kh.length;Oc++){var Pc=kh[Oc],wC=Pc.toLowerCase(),DC=Pc[0].toUpperCase()+Pc.slice(1);Gr(wC,"on"+DC)}Gr(ig,"onAnimationEnd");Gr(og,"onAnimationIteration");Gr(ag,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(ug,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Nh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wE(r,t,void 0,e),e.currentTarget=null}function lg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],s=u.instance,f=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Nh(i,u,f),o=s}else for(a=0;a<r.length;a++){if(u=r[a],s=u.instance,f=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Nh(i,u,f),o=s}}}if(Cs)throw e=jf,Cs=!1,jf=null,e}function Me(e,t){var n=t[Xf];n===void 0&&(n=t[Xf]=new Set);var r=e+"__bubble";n.has(r)||(cg(t,e,2,!1),n.add(r))}function Ic(e,t,n){var r=0;t&&(r|=4),cg(n,e,r,t)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Na(e){if(!e[Eu]){e[Eu]=!0,gv.forEach(function(n){n!=="selectionchange"&&(EC.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eu]||(t[Eu]=!0,Ic("selectionchange",!1,t))}}function cg(e,t,n,r){switch(Gv(t)){case 1:var i=ME;break;case 4:i=RE;break;default:i=Fp}n=i.bind(null,t,n,e),i=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Tc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;u!==null;){if(a=ai(u),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}u=u.parentNode}}r=r.return}Tv(function(){var f=o,c=bp(n),l=[];e:{var d=sg.get(e);if(d!==void 0){var p=Np,h=e;switch(e){case"keypress":if(Ju(n)===0)break e;case"keydown":case"keyup":p=QE;break;case"focusin":h="focus",p=Ac;break;case"focusout":h="blur",p=Ac;break;case"beforeblur":case"afterblur":p=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eC;break;case ig:case og:case ag:p=VE;break;case ug:p=nC;break;case"scroll":p=BE;break;case"wheel":p=iC;break;case"copy":case"cut":case"paste":p=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wh}var v=(t&4)!==0,y=!v&&e==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var g=f,w;g!==null;){w=g;var E=w.stateNode;if(w.tag===5&&E!==null&&(w=E,m!==null&&(E=ba(g,m),E!=null&&v.push(Oa(g,E,w)))),y)break;g=g.return}0<v.length&&(d=new p(d,h,null,n,c),l.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Bf&&(h=n.relatedTarget||n.fromElement)&&(ai(h)||h[ir]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=f,h=h?ai(h):null,h!==null&&(y=Si(h),h!==y||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=f),p!==h)){if(v=gh,E="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=wh,E="onPointerLeave",m="onPointerEnter",g="pointer"),y=p==null?d:Li(p),w=h==null?d:Li(h),d=new v(E,g+"leave",p,n,c),d.target=y,d.relatedTarget=w,E=null,ai(c)===f&&(v=new v(m,g+"enter",h,n,c),v.target=w,v.relatedTarget=y,E=v),y=E,p&&h)t:{for(v=p,m=h,g=0,w=v;w;w=Ni(w))g++;for(w=0,E=m;E;E=Ni(E))w++;for(;0<g-w;)v=Ni(v),g--;for(;0<w-g;)m=Ni(m),w--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ni(v),m=Ni(m)}v=null}else v=null;p!==null&&Oh(l,d,p,v,!1),h!==null&&y!==null&&Oh(l,y,h,v,!0)}}e:{if(d=f?Li(f):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=fC;else if(Ch(d))if(Jv)A=mC;else{A=pC;var k=dC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=hC);if(A&&(A=A(e,f))){Zv(l,A,n,c);break e}k&&k(e,d,f),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&If(d,"number",d.value)}switch(k=f?Li(f):window,e){case"focusin":(Ch(k)||k.contentEditable==="true")&&(Bi=k,Hf=f,la=null);break;case"focusout":la=Hf=Bi=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Fh(l,n,c);break;case"selectionchange":if(yC)break;case"keydown":case"keyup":Fh(l,n,c)}var F;if(Pp)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ri?Xv(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Kv&&n.locale!=="ko"&&(Ri||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ri&&(F=qv()):(Sr=c,kp="value"in Sr?Sr.value:Sr.textContent,Ri=!0)),k=Fs(f,x),0<k.length&&(x=new yh(x,e,null,n,c),l.push({event:x,listeners:k}),F?x.data=F:(F=Qv(n),F!==null&&(x.data=F)))),(F=aC?uC(e,n):sC(e,n))&&(f=Fs(f,"onBeforeInput"),0<f.length&&(c=new yh("onBeforeInput","beforeinput",null,n,c),l.push({event:c,listeners:f}),c.data=F))}lg(l,t)})}function Oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ba(e,n),o!=null&&r.unshift(Oa(e,o,i)),o=ba(e,t),o!=null&&r.push(Oa(e,o,i))),e=e.return}return r}function Ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var u=n,s=u.alternate,f=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&f!==null&&(u=f,i?(s=ba(n,o),s!=null&&a.unshift(Oa(n,s,u))):i||(s=ba(n,o),s!=null&&a.push(Oa(n,s,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var CC=/\r\n?/g,bC=/\u0000|\uFFFD/g;function Ph(e){return(typeof e=="string"?e:""+e).replace(CC,`
`).replace(bC,"")}function Cu(e,t,n){if(t=Ph(t),Ph(e)!==t&&n)throw Error(j(425))}function ks(){}var Yf=null,Gf=null;function qf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,SC=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,xC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch(AC)}:Kf;function AC(e){setTimeout(function(){throw e})}function _c(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Aa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(t)}function Tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+bo,Pa="__reactProps$"+bo,ir="__reactContainer$"+bo,Xf="__reactEvents$"+bo,FC="__reactListeners$"+bo,kC="__reactHandles$"+bo;function ai(e){var t=e[Rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ir]||n[Rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Th(e);e!==null;){if(n=e[Rn])return n;e=Th(e)}return t}e=n,n=e.parentNode}return null}function eu(e){return e=e[Rn]||e[ir],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Dl(e){return e[Pa]||null}var Qf=[],ji=-1;function qr(e){return{current:e}}function Be(e){0>ji||(e.current=Qf[ji],Qf[ji]=null,ji--)}function _e(e,t){ji++,Qf[ji]=e.current,e.current=t}var zr={},Ot=qr(zr),Ht=qr(!1),hi=zr;function so(e,t){var n=e.type.contextTypes;if(!n)return zr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(e){return e=e.childContextTypes,e!=null}function Ns(){Be(Ht),Be(Ot)}function _h(e,t,n){if(Ot.current!==zr)throw Error(j(168));_e(Ot,t),_e(Ht,n)}function fg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,dE(e)||"Unknown",i));return Ve({},n,r)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zr,hi=Ot.current,_e(Ot,e),_e(Ht,Ht.current),!0}function Mh(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=fg(e,t,hi),r.__reactInternalMemoizedMergedChildContext=e,Be(Ht),Be(Ot),_e(Ot,e)):Be(Ht),_e(Ht,n)}var Xn=null,El=!1,Mc=!1;function dg(e){Xn===null?Xn=[e]:Xn.push(e)}function NC(e){El=!0,dg(e)}function Kr(){if(!Mc&&Xn!==null){Mc=!0;var e=0,t=Ne;try{var n=Xn;for(Ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xn=null,El=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(e+1)),Bv(Sp,Kr),i}finally{Ne=t,Mc=!1}}return null}var zi=[],Vi=0,Ps=null,Is=0,fn=[],dn=0,mi=null,Qn=1,Zn="";function ri(e,t){zi[Vi++]=Is,zi[Vi++]=Ps,Ps=e,Is=t}function pg(e,t,n){fn[dn++]=Qn,fn[dn++]=Zn,fn[dn++]=mi,mi=e;var r=Qn;e=Zn;var i=32-An(r)-1;r&=~(1<<i),n+=1;var o=32-An(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qn=1<<32-An(t)+i|n<<i|r,Zn=o+e}else Qn=1<<o|n<<i|r,Zn=e}function Tp(e){e.return!==null&&(ri(e,1),pg(e,1,0))}function _p(e){for(;e===Ps;)Ps=zi[--Vi],zi[Vi]=null,Is=zi[--Vi],zi[Vi]=null;for(;e===mi;)mi=fn[--dn],fn[dn]=null,Zn=fn[--dn],fn[dn]=null,Qn=fn[--dn],fn[dn]=null}var en=null,Zt=null,Le=!1,bn=null;function hg(e,t){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,en=e,Zt=Tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,en=e,Zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mi!==null?{id:Qn,overflow:Zn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,en=e,Zt=null,!0):!1;default:return!1}}function Zf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jf(e){if(Le){var t=Zt;if(t){var n=t;if(!Rh(e,t)){if(Zf(e))throw Error(j(418));t=Tr(n.nextSibling);var r=en;t&&Rh(e,t)?hg(r,n):(e.flags=e.flags&-4097|2,Le=!1,en=e)}}else{if(Zf(e))throw Error(j(418));e.flags=e.flags&-4097|2,Le=!1,en=e}}}function Bh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;en=e}function bu(e){if(e!==en)return!1;if(!Le)return Bh(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qf(e.type,e.memoizedProps)),t&&(t=Zt)){if(Zf(e))throw mg(),Error(j(418));for(;t;)hg(e,t),t=Tr(t.nextSibling)}if(Bh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Zt=Tr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Zt=null}}else Zt=en?Tr(e.stateNode.nextSibling):null;return!0}function mg(){for(var e=Zt;e;)e=Tr(e.nextSibling)}function lo(){Zt=en=null,Le=!1}function Mp(e){bn===null?bn=[e]:bn.push(e)}var OC=fr.ReactCurrentBatchConfig;function En(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ts=qr(null),_s=null,Ui=null,Rp=null;function Bp(){Rp=Ui=_s=null}function $p(e){var t=Ts.current;Be(Ts),e._currentValue=t}function ed(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function no(e,t){_s=e,Rp=Ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function mn(e){var t=e._currentValue;if(Rp!==e)if(e={context:e,memoizedValue:t,next:null},Ui===null){if(_s===null)throw Error(j(308));Ui=e,_s.dependencies={lanes:0,firstContext:e}}else Ui=Ui.next=e;return t}var ui=null;function Lp(e){ui===null?ui=[e]:ui.push(e)}function vg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lp(t)):(n.next=i.next,i.next=n),t.interleaved=n,or(e,r)}function or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dr=!1;function jp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function er(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,or(e,n)}return i=r.interleaved,i===null?(t.next=t,Lp(r)):(t.next=i.next,i.next=t),r.interleaved=t,or(e,n)}function es(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xp(e,n)}}function $h(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ms(e,t,n,r){var i=e.updateQueue;Dr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,f=s.next;s.next=null,a===null?o=f:a.next=f,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,u=c.lastBaseUpdate,u!==a&&(u===null?c.firstBaseUpdate=f:u.next=f,c.lastBaseUpdate=s))}if(o!==null){var l=i.baseState;a=0,c=f=s=null,u=o;do{var d=u.lane,p=u.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,v=u;switch(d=t,p=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){l=h.call(p,l,d);break e}l=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,d=typeof h=="function"?h.call(p,l,d):h,d==null)break e;l=Ve({},l,d);break e;case 2:Dr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},c===null?(f=c=p,s=l):c=c.next=p,a|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(s=l),i.baseState=s,i.firstBaseUpdate=f,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gi|=a,e.lanes=a,e.memoizedState=l}}function Lh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var yg=new vv.Component().refs;function td(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Si(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Bt(),i=Rr(e),o=er(r,i);o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(Fn(t,e,i,r),es(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Bt(),i=Rr(e),o=er(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_r(e,o,i),t!==null&&(Fn(t,e,i,r),es(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),r=Rr(e),i=er(n,r);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,r),t!==null&&(Fn(t,e,r,n),es(t,e,r))}};function jh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ka(n,r)||!ka(i,o):!0}function wg(e,t,n){var r=!1,i=zr,o=t.contextType;return typeof o=="object"&&o!==null?o=mn(o):(i=Wt(t)?hi:Ot.current,r=t.contextTypes,o=(r=r!=null)?so(e,i):zr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function nd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=yg,jp(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mn(o):(o=Wt(t)?hi:Ot.current,i.context=so(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(td(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cl.enqueueReplaceState(i,i.state,null),Ms(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var u=i.refs;u===yg&&(u=i.refs={}),a===null?delete u[o]:u[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Su(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vh(e){var t=e._init;return t(e._payload)}function Dg(e){function t(m,g){if(e){var w=m.deletions;w===null?(m.deletions=[g],m.flags|=16):w.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Br(m,g),m.index=0,m.sibling=null,m}function o(m,g,w){return m.index=w,e?(w=m.alternate,w!==null?(w=w.index,w<g?(m.flags|=2,g):w):(m.flags|=2,g)):(m.flags|=1048576,g)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,g,w,E){return g===null||g.tag!==6?(g=Vc(w,m.mode,E),g.return=m,g):(g=i(g,w),g.return=m,g)}function s(m,g,w,E){var A=w.type;return A===Mi?c(m,g,w.props.children,E,w.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===wr&&Vh(A)===g.type)?(E=i(g,w.props),E.ref=Vo(m,g,w),E.return=m,E):(E=as(w.type,w.key,w.props,null,m.mode,E),E.ref=Vo(m,g,w),E.return=m,E)}function f(m,g,w,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Uc(w,m.mode,E),g.return=m,g):(g=i(g,w.children||[]),g.return=m,g)}function c(m,g,w,E,A){return g===null||g.tag!==7?(g=pi(w,m.mode,E,A),g.return=m,g):(g=i(g,w),g.return=m,g)}function l(m,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,m.mode,w),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pu:return w=as(g.type,g.key,g.props,null,m.mode,w),w.ref=Vo(m,null,g),w.return=m,w;case _i:return g=Uc(g,m.mode,w),g.return=m,g;case wr:var E=g._init;return l(m,E(g._payload),w)}if(Jo(g)||Bo(g))return g=pi(g,m.mode,w,null),g.return=m,g;Su(m,g)}return null}function d(m,g,w,E){var A=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return A!==null?null:u(m,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pu:return w.key===A?s(m,g,w,E):null;case _i:return w.key===A?f(m,g,w,E):null;case wr:return A=w._init,d(m,g,A(w._payload),E)}if(Jo(w)||Bo(w))return A!==null?null:c(m,g,w,E,null);Su(m,w)}return null}function p(m,g,w,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(w)||null,u(g,m,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case pu:return m=m.get(E.key===null?w:E.key)||null,s(g,m,E,A);case _i:return m=m.get(E.key===null?w:E.key)||null,f(g,m,E,A);case wr:var k=E._init;return p(m,g,w,k(E._payload),A)}if(Jo(E)||Bo(E))return m=m.get(w)||null,c(g,m,E,A,null);Su(g,E)}return null}function h(m,g,w,E){for(var A=null,k=null,F=g,x=g=0,P=null;F!==null&&x<w.length;x++){F.index>x?(P=F,F=null):P=F.sibling;var G=d(m,F,w[x],E);if(G===null){F===null&&(F=P);break}e&&F&&G.alternate===null&&t(m,F),g=o(G,g,x),k===null?A=G:k.sibling=G,k=G,F=P}if(x===w.length)return n(m,F),Le&&ri(m,x),A;if(F===null){for(;x<w.length;x++)F=l(m,w[x],E),F!==null&&(g=o(F,g,x),k===null?A=F:k.sibling=F,k=F);return Le&&ri(m,x),A}for(F=r(m,F);x<w.length;x++)P=p(F,m,x,w[x],E),P!==null&&(e&&P.alternate!==null&&F.delete(P.key===null?x:P.key),g=o(P,g,x),k===null?A=P:k.sibling=P,k=P);return e&&F.forEach(function(ee){return t(m,ee)}),Le&&ri(m,x),A}function v(m,g,w,E){var A=Bo(w);if(typeof A!="function")throw Error(j(150));if(w=A.call(w),w==null)throw Error(j(151));for(var k=A=null,F=g,x=g=0,P=null,G=w.next();F!==null&&!G.done;x++,G=w.next()){F.index>x?(P=F,F=null):P=F.sibling;var ee=d(m,F,G.value,E);if(ee===null){F===null&&(F=P);break}e&&F&&ee.alternate===null&&t(m,F),g=o(ee,g,x),k===null?A=ee:k.sibling=ee,k=ee,F=P}if(G.done)return n(m,F),Le&&ri(m,x),A;if(F===null){for(;!G.done;x++,G=w.next())G=l(m,G.value,E),G!==null&&(g=o(G,g,x),k===null?A=G:k.sibling=G,k=G);return Le&&ri(m,x),A}for(F=r(m,F);!G.done;x++,G=w.next())G=p(F,m,x,G.value,E),G!==null&&(e&&G.alternate!==null&&F.delete(G.key===null?x:G.key),g=o(G,g,x),k===null?A=G:k.sibling=G,k=G);return e&&F.forEach(function(ie){return t(m,ie)}),Le&&ri(m,x),A}function y(m,g,w,E){if(typeof w=="object"&&w!==null&&w.type===Mi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case pu:e:{for(var A=w.key,k=g;k!==null;){if(k.key===A){if(A=w.type,A===Mi){if(k.tag===7){n(m,k.sibling),g=i(k,w.props.children),g.return=m,m=g;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===wr&&Vh(A)===k.type){n(m,k.sibling),g=i(k,w.props),g.ref=Vo(m,k,w),g.return=m,m=g;break e}n(m,k);break}else t(m,k);k=k.sibling}w.type===Mi?(g=pi(w.props.children,m.mode,E,w.key),g.return=m,m=g):(E=as(w.type,w.key,w.props,null,m.mode,E),E.ref=Vo(m,g,w),E.return=m,m=E)}return a(m);case _i:e:{for(k=w.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(m,g.sibling),g=i(g,w.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Uc(w,m.mode,E),g.return=m,m=g}return a(m);case wr:return k=w._init,y(m,g,k(w._payload),E)}if(Jo(w))return h(m,g,w,E);if(Bo(w))return v(m,g,w,E);Su(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,w),g.return=m,m=g):(n(m,g),g=Vc(w,m.mode,E),g.return=m,m=g),a(m)):n(m,g)}return y}var co=Dg(!0),Eg=Dg(!1),tu={},Vn=qr(tu),Ia=qr(tu),Ta=qr(tu);function si(e){if(e===tu)throw Error(j(174));return e}function zp(e,t){switch(_e(Ta,t),_e(Ia,e),_e(Vn,tu),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_f(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_f(t,e)}Be(Vn),_e(Vn,t)}function fo(){Be(Vn),Be(Ia),Be(Ta)}function Cg(e){si(Ta.current);var t=si(Vn.current),n=_f(t,e.type);t!==n&&(_e(Ia,e),_e(Vn,n))}function Vp(e){Ia.current===e&&(Be(Vn),Be(Ia))}var je=qr(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rc=[];function Up(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var ts=fr.ReactCurrentDispatcher,Bc=fr.ReactCurrentBatchConfig,vi=0,ze=null,nt=null,lt=null,Bs=!1,ca=!1,_a=0,PC=0;function xt(){throw Error(j(321))}function Hp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}function Wp(e,t,n,r,i,o){if(vi=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ts.current=e===null||e.memoizedState===null?MC:RC,e=n(r,i),ca){o=0;do{if(ca=!1,_a=0,25<=o)throw Error(j(301));o+=1,lt=nt=null,t.updateQueue=null,ts.current=BC,e=n(r,i)}while(ca)}if(ts.current=$s,t=nt!==null&&nt.next!==null,vi=0,lt=nt=ze=null,Bs=!1,t)throw Error(j(300));return e}function Yp(){var e=_a!==0;return _a=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?ze.memoizedState=lt=e:lt=lt.next=e,lt}function vn(){if(nt===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=lt===null?ze.memoizedState:lt.next;if(t!==null)lt=t,nt=e;else{if(e===null)throw Error(j(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},lt===null?ze.memoizedState=lt=e:lt=lt.next=e}return lt}function Ma(e,t){return typeof t=="function"?t(e):t}function $c(e){var t=vn(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=nt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=a=null,s=null,f=o;do{var c=f.lane;if((vi&c)===c)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var l={lane:c,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(u=s=l,a=r):s=s.next=l,ze.lanes|=c,gi|=c}f=f.next}while(f!==null&&f!==o);s===null?a=r:s.next=u,Nn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,gi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Lc(e){var t=vn(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Nn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bg(){}function Sg(e,t){var n=ze,r=vn(),i=t(),o=!Nn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,Gp(Fg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ra(9,Ag.bind(null,n,r,i,t),void 0,null),ft===null)throw Error(j(349));vi&30||xg(n,t,i)}return i}function xg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ag(e,t,n,r){t.value=n,t.getSnapshot=r,kg(t)&&Ng(e)}function Fg(e,t,n){return n(function(){kg(t)&&Ng(e)})}function kg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nn(e,n)}catch{return!0}}function Ng(e){var t=or(e,1);t!==null&&Fn(t,e,1,-1)}function Uh(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t.queue=e,e=e.dispatch=_C.bind(null,ze,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Og(){return vn().memoizedState}function ns(e,t,n,r){var i=Tn();ze.flags|=e,i.memoizedState=Ra(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var i=vn();r=r===void 0?null:r;var o=void 0;if(nt!==null){var a=nt.memoizedState;if(o=a.destroy,r!==null&&Hp(r,a.deps)){i.memoizedState=Ra(t,n,o,r);return}}ze.flags|=e,i.memoizedState=Ra(1|t,n,o,r)}function Hh(e,t){return ns(8390656,8,e,t)}function Gp(e,t){return bl(2048,8,e,t)}function Pg(e,t){return bl(4,2,e,t)}function Ig(e,t){return bl(4,4,e,t)}function Tg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _g(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,Tg.bind(null,t,e),n)}function qp(){}function Mg(e,t){var n=vn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rg(e,t){var n=vn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bg(e,t,n){return vi&21?(Nn(n,t)||(n=jv(),ze.lanes|=n,gi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function IC(e,t){var n=Ne;Ne=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{Ne=n,Bc.transition=r}}function $g(){return vn().memoizedState}function TC(e,t,n){var r=Rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(e))jg(t,n);else if(n=vg(e,t,n,r),n!==null){var i=Bt();Fn(n,e,r,i),zg(n,t,r)}}function _C(e,t,n){var r=Rr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(e))jg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,u=o(a,n);if(i.hasEagerState=!0,i.eagerState=u,Nn(u,a)){var s=t.interleaved;s===null?(i.next=i,Lp(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=vg(e,t,i,r),n!==null&&(i=Bt(),Fn(n,e,r,i),zg(n,t,r))}}function Lg(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function jg(e,t){ca=Bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xp(e,n)}}var $s={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},MC={readContext:mn,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:mn,useEffect:Hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ns(4194308,4,Tg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=TC.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:Uh,useDebugValue:qp,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=Uh(!1),t=e[0];return e=IC.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,i=Tn();if(Le){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ft===null)throw Error(j(349));vi&30||xg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hh(Fg.bind(null,r,o,e),[e]),r.flags|=2048,Ra(9,Ag.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tn(),t=ft.identifierPrefix;if(Le){var n=Zn,r=Qn;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=PC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},RC={readContext:mn,useCallback:Mg,useContext:mn,useEffect:Gp,useImperativeHandle:_g,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Rg,useReducer:$c,useRef:Og,useState:function(){return $c(Ma)},useDebugValue:qp,useDeferredValue:function(e){var t=vn();return Bg(t,nt.memoizedState,e)},useTransition:function(){var e=$c(Ma)[0],t=vn().memoizedState;return[e,t]},useMutableSource:bg,useSyncExternalStore:Sg,useId:$g,unstable_isNewReconciler:!1},BC={readContext:mn,useCallback:Mg,useContext:mn,useEffect:Gp,useImperativeHandle:_g,useInsertionEffect:Pg,useLayoutEffect:Ig,useMemo:Rg,useReducer:Lc,useRef:Og,useState:function(){return Lc(Ma)},useDebugValue:qp,useDeferredValue:function(e){var t=vn();return nt===null?t.memoizedState=e:Bg(t,nt.memoizedState,e)},useTransition:function(){var e=Lc(Ma)[0],t=vn().memoizedState;return[e,t]},useMutableSource:bg,useSyncExternalStore:Sg,useId:$g,unstable_isNewReconciler:!1};function po(e,t){try{var n="",r=t;do n+=fE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function jc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $C=typeof WeakMap=="function"?WeakMap:Map;function Vg(e,t,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){js||(js=!0,pd=r),rd(e,t)},n}function Ug(e,t,n){n=er(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rd(e,t),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $C;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ZC.bind(null,e,t,n),t.then(e,e))}function Yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=er(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var LC=fr.ReactCurrentOwner,Ut=!1;function Mt(e,t,n,r){t.child=e===null?Eg(t,null,n,r):co(t,e.child,n,r)}function qh(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Wp(e,t,n,r,o,i),n=Yp(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ar(e,t,i)):(Le&&n&&Tp(t),t.flags|=1,Mt(e,t,r,i),t.child)}function Kh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!n0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hg(e,t,o,r,i)):(e=as(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(a,r)&&e.ref===t.ref)return ar(e,t,i)}return t.flags|=1,e=Br(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ka(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,ar(e,t,i)}return id(e,t,n,r,i)}function Wg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Wi,Qt),Qt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Wi,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(Wi,Qt),Qt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(Wi,Qt),Qt|=r;return Mt(e,t,i,n),t.child}function Yg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function id(e,t,n,r,i){var o=Wt(n)?hi:Ot.current;return o=so(t,o),no(t,i),n=Wp(e,t,n,r,o,i),r=Yp(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ar(e,t,i)):(Le&&r&&Tp(t),t.flags|=1,Mt(e,t,n,i),t.child)}function Xh(e,t,n,r,i){if(Wt(n)){var o=!0;Os(t)}else o=!1;if(no(t,i),t.stateNode===null)rs(e,t),wg(t,n,r),nd(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var s=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=mn(f):(f=Wt(n)?hi:Ot.current,f=so(t,f));var c=n.getDerivedStateFromProps,l=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";l||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||s!==f)&&zh(t,a,r,f),Dr=!1;var d=t.memoizedState;a.state=d,Ms(t,r,a,i),s=t.memoizedState,u!==r||d!==s||Ht.current||Dr?(typeof c=="function"&&(td(t,n,c,r),s=t.memoizedState),(u=Dr||jh(t,n,u,r,d,s,f))?(l||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=f,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gg(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:En(t.type,u),a.props=f,l=t.pendingProps,d=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=mn(s):(s=Wt(n)?hi:Ot.current,s=so(t,s));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==l||d!==s)&&zh(t,a,r,s),Dr=!1,d=t.memoizedState,a.state=d,Ms(t,r,a,i);var h=t.memoizedState;u!==l||d!==h||Ht.current||Dr?(typeof p=="function"&&(td(t,n,p,r),h=t.memoizedState),(f=Dr||jh(t,n,f,r,d,h,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=f):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return od(e,t,n,r,o,i)}function od(e,t,n,r,i,o){Yg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Mh(t,n,!1),ar(e,t,o);r=t.stateNode,LC.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=co(t,e.child,null,o),t.child=co(t,null,u,o)):Mt(e,t,u,o),t.memoizedState=r.state,i&&Mh(t,n,!0),t.child}function Gg(e){var t=e.stateNode;t.pendingContext?_h(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_h(e,t.context,!1),zp(e,t.containerInfo)}function Qh(e,t,n,r,i){return lo(),Mp(i),t.flags|=256,Mt(e,t,n,r),t.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function qg(e,t,n){var r=t.pendingProps,i=je.current,o=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(je,i&1),e===null)return Jf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Al(a,r,0,null),e=pi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ud(n),t.memoizedState=ad,e):Kp(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return jC(e,t,a,r,u,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Br(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Br(u,o):(o=pi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ad,r}return o=e.child,e=o.sibling,r=Br(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kp(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xu(e,t,n,r){return r!==null&&Mp(r),co(t,e.child,null,n),e=Kp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jC(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=jc(Error(j(422))),xu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Al({mode:"visible",children:r.children},i,0,null),o=pi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&co(t,e.child,null,a),t.child.memoizedState=ud(a),t.memoizedState=ad,o);if(!(t.mode&1))return xu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(j(419)),r=jc(o,r,void 0),xu(e,t,a,r)}if(u=(a&e.childLanes)!==0,Ut||u){if(r=ft,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,or(e,i),Fn(r,e,i,-1))}return t0(),r=jc(Error(j(421))),xu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=JC.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Zt=Tr(i.nextSibling),en=t,Le=!0,bn=null,e!==null&&(fn[dn++]=Qn,fn[dn++]=Zn,fn[dn++]=mi,Qn=e.id,Zn=e.overflow,mi=t),t=Kp(t,r.children),t.flags|=4096,t)}function Zh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ed(e.return,t,n)}function zc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Mt(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,n,t);else if(e.tag===19)Zh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zc(t,!0,n,null,o);break;case"together":zc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ar(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zC(e,t,n){switch(t.tag){case 3:Gg(t),lo();break;case 5:Cg(t);break;case 1:Wt(t.type)&&Os(t);break;case 4:zp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?qg(e,t,n):(_e(je,je.current&1),e=ar(e,t,n),e!==null?e.sibling:null);_e(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,Wg(e,t,n)}return ar(e,t,n)}var Xg,sd,Qg,Zg;Xg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};Qg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,si(Vn.current);var o=null;switch(n){case"input":i=Of(e,i),r=Of(e,r),o=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),o=[];break;case"textarea":i=Tf(e,i),r=Tf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ks)}Mf(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ea.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&s!==u&&(s!=null||u!=null))if(f==="style")if(u){for(a in u)!u.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&u[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(f,n)),n=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&Me("scroll",e),o||u===s||(o=[])):(o=o||[]).push(f,s))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Zg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Uo(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function VC(e,t,n){var r=t.pendingProps;switch(_p(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return Wt(t.type)&&Ns(),At(t),null;case 3:return r=t.stateNode,fo(),Be(Ht),Be(Ot),Up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bn!==null&&(vd(bn),bn=null))),sd(e,t),At(t),null;case 5:Vp(t);var i=si(Ta.current);if(n=t.type,e!==null&&t.stateNode!=null)Qg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return At(t),null}if(e=si(Vn.current),bu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rn]=t,r[Pa]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ta.length;i++)Me(ta[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":uh(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":lh(r,o),Me("invalid",r)}Mf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Cu(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Cu(r.textContent,u,e),i=["children",""+u]):Ea.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":hu(r),sh(r,o,!0);break;case"textarea":hu(r),ch(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rn]=t,e[Pa]=r,Xg(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rf(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)Me(ta[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":uh(e,r),i=Of(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Me("invalid",e);break;case"textarea":lh(e,r),i=Tf(e,r),Me("invalid",e);break;default:i=r}Mf(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?kv(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Av(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ca(e,s):typeof s=="number"&&Ca(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ea.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Me("scroll",e):s!=null&&wp(e,o,s,a))}switch(n){case"input":hu(e),sh(e,r,!1);break;case"textarea":hu(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return At(t),null;case 6:if(e&&t.stateNode!=null)Zg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=si(Ta.current),si(Vn.current),bu(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rn]=t,(o=r.nodeValue!==n)&&(e=en,e!==null))switch(e.tag){case 3:Cu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=t,t.stateNode=r}return At(t),null;case 13:if(Be(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Zt!==null&&t.mode&1&&!(t.flags&128))mg(),lo(),t.flags|=98560,o=!1;else if(o=bu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Rn]=t}else lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;At(t),o=!1}else bn!==null&&(vd(bn),bn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?ot===0&&(ot=3):t0())),t.updateQueue!==null&&(t.flags|=4),At(t),null);case 4:return fo(),sd(e,t),e===null&&Na(t.stateNode.containerInfo),At(t),null;case 10:return $p(t.type._context),At(t),null;case 17:return Wt(t.type)&&Ns(),At(t),null;case 19:if(Be(je),o=t.memoizedState,o===null)return At(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Uo(o,!1);else{if(ot!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Rs(e),a!==null){for(t.flags|=128,Uo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(je,je.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ge()>ho&&(t.flags|=128,r=!0,Uo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Rs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Le)return At(t),null}else 2*Ge()-o.renderingStartTime>ho&&n!==1073741824&&(t.flags|=128,r=!0,Uo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=je.current,_e(je,r?n&1|2:n&1),t):(At(t),null);case 22:case 23:return e0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function UC(e,t){switch(_p(t),t.tag){case 1:return Wt(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),Be(Ht),Be(Ot),Up(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vp(t),null;case 13:if(Be(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(je),null;case 4:return fo(),null;case 10:return $p(t.type._context),null;case 22:case 23:return e0(),null;case 24:return null;default:return null}}var Au=!1,Nt=!1,HC=typeof WeakSet=="function"?WeakSet:Set,X=null;function Hi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function ld(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var Jh=!1;function WC(e,t){if(Yf=xs,e=ng(),Ip(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,u=-1,s=-1,f=0,c=0,l=e,d=null;t:for(;;){for(var p;l!==n||i!==0&&l.nodeType!==3||(u=a+i),l!==o||r!==0&&l.nodeType!==3||(s=a+r),l.nodeType===3&&(a+=l.nodeValue.length),(p=l.firstChild)!==null;)d=l,l=p;for(;;){if(l===e)break t;if(d===n&&++f===i&&(u=a),d===o&&++c===r&&(s=a),(p=l.nextSibling)!==null)break;l=d,d=l.parentNode}l=p}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:e,selectionRange:n},xs=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,y=h.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:En(t.type,v),y);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(E){Ue(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return h=Jh,Jh=!1,h}function fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ld(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jg(e){var t=e.alternate;t!==null&&(e.alternate=null,Jg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rn],delete t[Pa],delete t[Xf],delete t[FC],delete t[kC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ey(e){return e.tag===5||e.tag===3||e.tag===4}function em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ks));else if(r!==4&&(e=e.child,e!==null))for(fd(e,t,n),e=e.sibling;e!==null;)fd(e,t,n),e=e.sibling}function dd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dd(e,t,n),e=e.sibling;e!==null;)dd(e,t,n),e=e.sibling}var gt=null,Cn=!1;function mr(e,t,n){for(n=n.child;n!==null;)ty(e,t,n),n=n.sibling}function ty(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Nt||Hi(n,t);case 6:var r=gt,i=Cn;gt=null,mr(e,t,n),gt=r,Cn=i,gt!==null&&(Cn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Cn?(e=gt,n=n.stateNode,e.nodeType===8?_c(e.parentNode,n):e.nodeType===1&&_c(e,n),Aa(e)):_c(gt,n.stateNode));break;case 4:r=gt,i=Cn,gt=n.stateNode.containerInfo,Cn=!0,mr(e,t,n),gt=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ld(n,t,a),i=i.next}while(i!==r)}mr(e,t,n);break;case 1:if(!Nt&&(Hi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ue(n,t,u)}mr(e,t,n);break;case 21:mr(e,t,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,mr(e,t,n),Nt=r):mr(e,t,n);break;default:mr(e,t,n)}}function tm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new HC),t.forEach(function(r){var i=eb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:gt=u.stateNode,Cn=!1;break e;case 3:gt=u.stateNode.containerInfo,Cn=!0;break e;case 4:gt=u.stateNode.containerInfo,Cn=!0;break e}u=u.return}if(gt===null)throw Error(j(160));ty(o,a,i),gt=null,Cn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(f){Ue(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ny(t,e),t=t.sibling}function ny(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),On(e),r&4){try{fa(3,e,e.return),Sl(3,e)}catch(v){Ue(e,e.return,v)}try{fa(5,e,e.return)}catch(v){Ue(e,e.return,v)}}break;case 1:yn(t,e),On(e),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(yn(t,e),On(e),r&512&&n!==null&&Hi(n,n.return),e.flags&32){var i=e.stateNode;try{Ca(i,"")}catch(v){Ue(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&bv(i,o),Rf(u,a);var f=Rf(u,o);for(a=0;a<s.length;a+=2){var c=s[a],l=s[a+1];c==="style"?kv(i,l):c==="dangerouslySetInnerHTML"?Av(i,l):c==="children"?Ca(i,l):wp(i,c,l,f)}switch(u){case"input":Pf(i,o);break;case"textarea":Sv(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Zi(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Zi(i,!!o.multiple,o.defaultValue,!0):Zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pa]=o}catch(v){Ue(e,e.return,v)}}break;case 6:if(yn(t,e),On(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Ue(e,e.return,v)}}break;case 3:if(yn(t,e),On(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(v){Ue(e,e.return,v)}break;case 4:yn(t,e),On(e);break;case 13:yn(t,e),On(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zp=Ge())),r&4&&tm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Nt=(f=Nt)||c,yn(t,e),Nt=f):yn(t,e),On(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!c&&e.mode&1)for(X=e,c=e.child;c!==null;){for(l=X=c;X!==null;){switch(d=X,p=d.child,d.tag){case 0:case 11:case 14:case 15:fa(4,d,d.return);break;case 1:Hi(d,d.return);var h=d.stateNode;if(typeof h.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){Ue(r,n,v)}}break;case 5:Hi(d,d.return);break;case 22:if(d.memoizedState!==null){rm(l);continue}}p!==null?(p.return=d,X=p):rm(l)}c=c.sibling}e:for(c=null,l=e;;){if(l.tag===5){if(c===null){c=l;try{i=l.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=l.stateNode,s=l.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Fv("display",a))}catch(v){Ue(e,e.return,v)}}}else if(l.tag===6){if(c===null)try{l.stateNode.nodeValue=f?"":l.memoizedProps}catch(v){Ue(e,e.return,v)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;c===l&&(c=null),l=l.return}c===l&&(c=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:yn(t,e),On(e),r&4&&tm(e);break;case 21:break;default:yn(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ey(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var o=em(e);dd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=em(e);fd(e,u,a);break;default:throw Error(j(161))}}catch(s){Ue(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function YC(e,t,n){X=e,ry(e)}function ry(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Au;if(!a){var u=i.alternate,s=u!==null&&u.memoizedState!==null||Nt;u=Au;var f=Nt;if(Au=a,(Nt=s)&&!f)for(X=i;X!==null;)a=X,s=a.child,a.tag===22&&a.memoizedState!==null?im(i):s!==null?(s.return=a,X=s):im(i);for(;o!==null;)X=o,ry(o),o=o.sibling;X=i,Au=u,Nt=f}nm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):nm(e)}}function nm(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Nt||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:En(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lh(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var c=f.memoizedState;if(c!==null){var l=c.dehydrated;l!==null&&Aa(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Nt||t.flags&512&&cd(t)}catch(d){Ue(t,t.return,d)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function rm(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function im(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(s){Ue(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ue(t,i,s)}}var o=t.return;try{cd(t)}catch(s){Ue(t,o,s)}break;case 5:var a=t.return;try{cd(t)}catch(s){Ue(t,a,s)}}}catch(s){Ue(t,t.return,s)}if(t===e){X=null;break}var u=t.sibling;if(u!==null){u.return=t.return,X=u;break}X=t.return}}var GC=Math.ceil,Ls=fr.ReactCurrentDispatcher,Xp=fr.ReactCurrentOwner,hn=fr.ReactCurrentBatchConfig,Ae=0,ft=null,Qe=null,Et=0,Qt=0,Wi=qr(0),ot=0,Ba=null,gi=0,xl=0,Qp=0,da=null,Vt=null,Zp=0,ho=1/0,Kn=null,js=!1,pd=null,Mr=null,Fu=!1,xr=null,zs=0,pa=0,hd=null,is=-1,os=0;function Bt(){return Ae&6?Ge():is!==-1?is:is=Ge()}function Rr(e){return e.mode&1?Ae&2&&Et!==0?Et&-Et:OC.transition!==null?(os===0&&(os=jv()),os):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:Gv(e.type)),e):1}function Fn(e,t,n,r){if(50<pa)throw pa=0,hd=null,Error(j(185));Za(e,n,r),(!(Ae&2)||e!==ft)&&(e===ft&&(!(Ae&2)&&(xl|=n),ot===4&&br(e,Et)),Yt(e,r),n===1&&Ae===0&&!(t.mode&1)&&(ho=Ge()+500,El&&Kr()))}function Yt(e,t){var n=e.callbackNode;OE(e,t);var r=Ss(e,e===ft?Et:0);if(r===0)n!==null&&ph(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ph(n),t===1)e.tag===0?NC(om.bind(null,e)):dg(om.bind(null,e)),xC(function(){!(Ae&6)&&Kr()}),n=null;else{switch(zv(r)){case 1:n=Sp;break;case 4:n=$v;break;case 16:n=bs;break;case 536870912:n=Lv;break;default:n=bs}n=fy(n,iy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iy(e,t){if(is=-1,os=0,Ae&6)throw Error(j(327));var n=e.callbackNode;if(ro()&&e.callbackNode!==n)return null;var r=Ss(e,e===ft?Et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vs(e,r);else{t=r;var i=Ae;Ae|=2;var o=ay();(ft!==e||Et!==t)&&(Kn=null,ho=Ge()+500,di(e,t));do try{XC();break}catch(u){oy(e,u)}while(1);Bp(),Ls.current=o,Ae=i,Qe!==null?t=0:(ft=null,Et=0,t=ot)}if(t!==0){if(t===2&&(i=zf(e),i!==0&&(r=i,t=md(e,i))),t===1)throw n=Ba,di(e,0),br(e,r),Yt(e,Ge()),n;if(t===6)br(e,r);else{if(i=e.current.alternate,!(r&30)&&!qC(i)&&(t=Vs(e,r),t===2&&(o=zf(e),o!==0&&(r=o,t=md(e,o))),t===1))throw n=Ba,di(e,0),br(e,r),Yt(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:ii(e,Vt,Kn);break;case 3:if(br(e,r),(r&130023424)===r&&(t=Zp+500-Ge(),10<t)){if(Ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Bt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kf(ii.bind(null,e,Vt,Kn),t);break}ii(e,Vt,Kn);break;case 4:if(br(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-An(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GC(r/1960))-r,10<r){e.timeoutHandle=Kf(ii.bind(null,e,Vt,Kn),r);break}ii(e,Vt,Kn);break;case 5:ii(e,Vt,Kn);break;default:throw Error(j(329))}}}return Yt(e,Ge()),e.callbackNode===n?iy.bind(null,e):null}function md(e,t){var n=da;return e.current.memoizedState.isDehydrated&&(di(e,t).flags|=256),e=Vs(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&vd(t)),e}function vd(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function qC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Nn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Qp,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function om(e){if(Ae&6)throw Error(j(327));ro();var t=Ss(e,0);if(!(t&1))return Yt(e,Ge()),null;var n=Vs(e,t);if(e.tag!==0&&n===2){var r=zf(e);r!==0&&(t=r,n=md(e,r))}if(n===1)throw n=Ba,di(e,0),br(e,t),Yt(e,Ge()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ii(e,Vt,Kn),Yt(e,Ge()),null}function Jp(e,t){var n=Ae;Ae|=1;try{return e(t)}finally{Ae=n,Ae===0&&(ho=Ge()+500,El&&Kr())}}function yi(e){xr!==null&&xr.tag===0&&!(Ae&6)&&ro();var t=Ae;Ae|=1;var n=hn.transition,r=Ne;try{if(hn.transition=null,Ne=1,e)return e()}finally{Ne=r,hn.transition=n,Ae=t,!(Ae&6)&&Kr()}}function e0(){Qt=Wi.current,Be(Wi)}function di(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,SC(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(_p(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:fo(),Be(Ht),Be(Ot),Up();break;case 5:Vp(r);break;case 4:fo();break;case 13:Be(je);break;case 19:Be(je);break;case 10:$p(r.type._context);break;case 22:case 23:e0()}n=n.return}if(ft=e,Qe=e=Br(e.current,null),Et=Qt=t,ot=0,Ba=null,Qp=xl=gi=0,Vt=da=null,ui!==null){for(t=0;t<ui.length;t++)if(n=ui[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ui=null}return e}function oy(e,t){do{var n=Qe;try{if(Bp(),ts.current=$s,Bs){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bs=!1}if(vi=0,lt=nt=ze=null,ca=!1,_a=0,Xp.current=null,n===null||n.return===null){ot=1,Ba=t,Qe=null;break}e:{var o=e,a=n.return,u=n,s=t;if(t=Et,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,c=u,l=c.tag;if(!(c.mode&1)&&(l===0||l===11||l===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Yh(a);if(p!==null){p.flags&=-257,Gh(p,a,u,o,t),p.mode&1&&Wh(o,f,t),t=p,s=f;var h=t.updateQueue;if(h===null){var v=new Set;v.add(s),t.updateQueue=v}else h.add(s);break e}else{if(!(t&1)){Wh(o,f,t),t0();break e}s=Error(j(426))}}else if(Le&&u.mode&1){var y=Yh(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Gh(y,a,u,o,t),Mp(po(s,u));break e}}o=s=po(s,u),ot!==4&&(ot=2),da===null?da=[o]:da.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Vg(o,s,t);$h(o,m);break e;case 1:u=s;var g=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Mr===null||!Mr.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Ug(o,u,t);$h(o,E);break e}}o=o.return}while(o!==null)}sy(n)}catch(A){t=A,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(1)}function ay(){var e=Ls.current;return Ls.current=$s,e===null?$s:e}function t0(){(ot===0||ot===3||ot===2)&&(ot=4),ft===null||!(gi&268435455)&&!(xl&268435455)||br(ft,Et)}function Vs(e,t){var n=Ae;Ae|=2;var r=ay();(ft!==e||Et!==t)&&(Kn=null,di(e,t));do try{KC();break}catch(i){oy(e,i)}while(1);if(Bp(),Ae=n,Ls.current=r,Qe!==null)throw Error(j(261));return ft=null,Et=0,ot}function KC(){for(;Qe!==null;)uy(Qe)}function XC(){for(;Qe!==null&&!EE();)uy(Qe)}function uy(e){var t=cy(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?sy(e):Qe=t,Xp.current=null}function sy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=UC(n,t),n!==null){n.flags&=32767,Qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,Qe=null;return}}else if(n=VC(n,t,Qt),n!==null){Qe=n;return}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);ot===0&&(ot=5)}function ii(e,t,n){var r=Ne,i=hn.transition;try{hn.transition=null,Ne=1,QC(e,t,n,r)}finally{hn.transition=i,Ne=r}return null}function QC(e,t,n,r){do ro();while(xr!==null);if(Ae&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(PE(e,o),e===ft&&(Qe=ft=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fu||(Fu=!0,fy(bs,function(){return ro(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=hn.transition,hn.transition=null;var a=Ne;Ne=1;var u=Ae;Ae|=4,Xp.current=null,WC(e,n),ny(n,e),gC(Gf),xs=!!Yf,Gf=Yf=null,e.current=n,YC(n),CE(),Ae=u,Ne=a,hn.transition=o}else e.current=n;if(Fu&&(Fu=!1,xr=e,zs=i),o=e.pendingLanes,o===0&&(Mr=null),xE(n.stateNode),Yt(e,Ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,e=pd,pd=null,e;return zs&1&&e.tag!==0&&ro(),o=e.pendingLanes,o&1?e===hd?pa++:(pa=0,hd=e):pa=0,Kr(),null}function ro(){if(xr!==null){var e=zv(zs),t=hn.transition,n=Ne;try{if(hn.transition=null,Ne=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,zs=0,Ae&6)throw Error(j(331));var i=Ae;for(Ae|=4,X=e.current;X!==null;){var o=X,a=o.child;if(X.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var f=u[s];for(X=f;X!==null;){var c=X;switch(c.tag){case 0:case 11:case 15:fa(8,c,o)}var l=c.child;if(l!==null)l.return=c,X=l;else for(;X!==null;){c=X;var d=c.sibling,p=c.return;if(Jg(c),c===f){X=null;break}if(d!==null){d.return=p,X=d;break}X=p}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}X=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,X=a;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fa(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,X=m;break e}X=o.return}}var g=e.current;for(X=g;X!==null;){a=X;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,X=w;else e:for(a=g;X!==null;){if(u=X,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Sl(9,u)}}catch(A){Ue(u,u.return,A)}if(u===a){X=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,X=E;break e}X=u.return}}if(Ae=i,Kr(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{Ne=n,hn.transition=t}}return!1}function am(e,t,n){t=po(n,t),t=Vg(e,t,1),e=_r(e,t,1),t=Bt(),e!==null&&(Za(e,1,t),Yt(e,t))}function Ue(e,t,n){if(e.tag===3)am(e,e,n);else for(;t!==null;){if(t.tag===3){am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){e=po(n,e),e=Ug(t,e,1),t=_r(t,e,1),e=Bt(),t!==null&&(Za(t,1,e),Yt(t,e));break}}t=t.return}}function ZC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Bt(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(Et&n)===n&&(ot===4||ot===3&&(Et&130023424)===Et&&500>Ge()-Zp?di(e,0):Qp|=n),Yt(e,t)}function ly(e,t){t===0&&(e.mode&1?(t=gu,gu<<=1,!(gu&130023424)&&(gu=4194304)):t=1);var n=Bt();e=or(e,t),e!==null&&(Za(e,t,n),Yt(e,n))}function JC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ly(e,n)}function eb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),ly(e,n)}var cy;cy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,zC(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,Le&&t.flags&1048576&&pg(t,Is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rs(e,t),e=t.pendingProps;var i=so(t,Ot.current);no(t,n),i=Wp(null,t,r,e,i,n);var o=Yp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wt(r)?(o=!0,Os(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jp(t),i.updater=Cl,t.stateNode=i,i._reactInternals=t,nd(t,r,e,n),t=od(null,t,r,!0,o,n)):(t.tag=0,Le&&o&&Tp(t),Mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nb(r),e=En(r,e),i){case 0:t=id(null,t,r,e,n);break e;case 1:t=Xh(null,t,r,e,n);break e;case 11:t=qh(null,t,r,e,n);break e;case 14:t=Kh(null,t,r,En(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),id(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),Xh(e,t,r,i,n);case 3:e:{if(Gg(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,gg(e,t),Ms(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=po(Error(j(423)),t),t=Qh(e,t,r,n,i);break e}else if(r!==i){i=po(Error(j(424)),t),t=Qh(e,t,r,n,i);break e}else for(Zt=Tr(t.stateNode.containerInfo.firstChild),en=t,Le=!0,bn=null,n=Eg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){t=ar(e,t,n);break e}Mt(e,t,r,n)}t=t.child}return t;case 5:return Cg(t),e===null&&Jf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,qf(r,i)?a=null:o!==null&&qf(r,o)&&(t.flags|=32),Yg(e,t),Mt(e,t,a,n),t.child;case 6:return e===null&&Jf(t),null;case 13:return qg(e,t,n);case 4:return zp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):Mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),qh(e,t,r,i,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,_e(Ts,r._currentValue),r._currentValue=a,o!==null)if(Nn(o.value,a)){if(o.children===i.children&&!Ht.current){t=ar(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=er(-1,n&-n),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var c=f.pending;c===null?s.next=s:(s.next=c.next,c.next=s),f.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ed(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),ed(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,no(t,n),i=mn(i),r=r(i),t.flags|=1,Mt(e,t,r,n),t.child;case 14:return r=t.type,i=En(r,t.pendingProps),i=En(r.type,i),Kh(e,t,r,i,n);case 15:return Hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:En(r,i),rs(e,t),t.tag=1,Wt(r)?(e=!0,Os(t)):e=!1,no(t,n),wg(t,r,i),nd(t,r,i,n),od(null,t,r,!0,e,n);case 19:return Kg(e,t,n);case 22:return Wg(e,t,n)}throw Error(j(156,t.tag))};function fy(e,t){return Bv(e,t)}function tb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,t,n,r){return new tb(e,t,n,r)}function n0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nb(e){if(typeof e=="function")return n0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ep)return 11;if(e===Cp)return 14}return 2}function Br(e,t){var n=e.alternate;return n===null?(n=pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")n0(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mi:return pi(n.children,i,o,t);case Dp:a=8,i|=8;break;case Af:return e=pn(12,n,t,i|2),e.elementType=Af,e.lanes=o,e;case Ff:return e=pn(13,n,t,i),e.elementType=Ff,e.lanes=o,e;case kf:return e=pn(19,n,t,i),e.elementType=kf,e.lanes=o,e;case Dv:return Al(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yv:a=10;break e;case wv:a=9;break e;case Ep:a=11;break e;case Cp:a=14;break e;case wr:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=pn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=pn(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=pn(22,e,r,t),e.elementType=Dv,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return e=pn(6,e,null,t),e.lanes=n,e}function Uc(e,t,n){return t=pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function r0(e,t,n,r,i,o,a,u,s){return e=new rb(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(o),e}function ib(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dy(e){if(!e)return zr;e=e._reactInternals;e:{if(Si(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Wt(n))return fg(e,n,t)}return t}function py(e,t,n,r,i,o,a,u,s){return e=r0(n,r,!0,e,i,o,a,u,s),e.context=dy(null),n=e.current,r=Bt(),i=Rr(n),o=er(r,i),o.callback=t??null,_r(n,o,i),e.current.lanes=i,Za(e,i,r),Yt(e,r),e}function Fl(e,t,n,r){var i=t.current,o=Bt(),a=Rr(i);return n=dy(n),t.context===null?t.context=n:t.pendingContext=n,t=er(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(i,t,a),e!==null&&(Fn(e,i,a,o),es(e,i,a)),a}function Us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function i0(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function ob(){return null}var hy=typeof reportError=="function"?reportError:function(e){console.error(e)};function o0(e){this._internalRoot=e}kl.prototype.render=o0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Fl(e,t,null,null)};kl.prototype.unmount=o0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yi(function(){Fl(null,e,null,null)}),t[ir]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cr.length&&t!==0&&t<Cr[n].priority;n++);Cr.splice(n,0,e),n===0&&Yv(e)}};function a0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sm(){}function ab(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Us(a);o.call(f)}}var a=py(t,r,e,0,null,!1,!1,"",sm);return e._reactRootContainer=a,e[ir]=a.current,Na(e.nodeType===8?e.parentNode:e),yi(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=Us(s);u.call(f)}}var s=r0(e,0,!1,null,null,!1,!1,"",sm);return e._reactRootContainer=s,e[ir]=s.current,Na(e.nodeType===8?e.parentNode:e),yi(function(){Fl(t,s,n,r)}),s}function Ol(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var u=i;i=function(){var s=Us(a);u.call(s)}}Fl(t,a,e,i)}else a=ab(n,t,e,i,r);return Us(a)}Vv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ea(t.pendingLanes);n!==0&&(xp(t,n|1),Yt(t,Ge()),!(Ae&6)&&(ho=Ge()+500,Kr()))}break;case 13:yi(function(){var r=or(e,1);if(r!==null){var i=Bt();Fn(r,e,1,i)}}),i0(e,1)}};Ap=function(e){if(e.tag===13){var t=or(e,134217728);if(t!==null){var n=Bt();Fn(t,e,134217728,n)}i0(e,134217728)}};Uv=function(e){if(e.tag===13){var t=Rr(e),n=or(e,t);if(n!==null){var r=Bt();Fn(n,e,t,r)}i0(e,t)}};Hv=function(){return Ne};Wv=function(e,t){var n=Ne;try{return Ne=e,t()}finally{Ne=n}};$f=function(e,t,n){switch(t){case"input":if(Pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dl(r);if(!i)throw Error(j(90));Cv(r),Pf(r,i)}}}break;case"textarea":Sv(e,n);break;case"select":t=n.value,t!=null&&Zi(e,!!n.multiple,t,!1)}};Pv=Jp;Iv=yi;var ub={usingClientEntryPoint:!1,Events:[eu,Li,Dl,Nv,Ov,Jp]},Ho={findFiberByHostInstance:ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sb={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mv(e),e===null?null:e.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||ob,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{vl=ku.inject(sb),zn=ku}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ub;rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a0(t))throw Error(j(200));return ib(e,t,null,n)};rn.createRoot=function(e,t){if(!a0(e))throw Error(j(299));var n=!1,r="",i=hy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=r0(e,1,!1,null,null,n,!1,r,i),e[ir]=t.current,Na(e.nodeType===8?e.parentNode:e),new o0(t)};rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Mv(t),e=e===null?null:e.stateNode,e};rn.flushSync=function(e){return yi(e)};rn.hydrate=function(e,t,n){if(!Nl(t))throw Error(j(200));return Ol(null,e,t,!0,n)};rn.hydrateRoot=function(e,t,n){if(!a0(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=hy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=py(t,null,e,1,n??null,i,!1,o,a),e[ir]=t.current,Na(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kl(t)};rn.render=function(e,t,n){if(!Nl(t))throw Error(j(200));return Ol(null,e,t,!1,n)};rn.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(j(40));return e._reactRootContainer?(yi(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[ir]=null})}),!0):!1};rn.unstable_batchedUpdates=Jp;rn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Nl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ol(e,t,n,!1,r)};rn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=rn})(oE);var lm=ws;bf.createRoot=lm.createRoot,bf.hydrateRoot=lm.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$a.apply(this,arguments)}var Ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ar||(Ar={}));const cm="popstate";function lb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:u}=r.location;return gd("",{pathname:o,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hs(i)}return fb(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function u0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cb(){return Math.random().toString(36).substr(2,8)}function fm(e,t){return{usr:e.state,key:e.key,idx:t}}function gd(e,t,n,r){return n===void 0&&(n=null),$a({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?So(t):t,{state:n,key:t&&t.key||r||cb()})}function Hs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function So(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,u=Ar.Pop,s=null,f=c();f==null&&(f=0,a.replaceState($a({},a.state,{idx:f}),""));function c(){return(a.state||{idx:null}).idx}function l(){u=Ar.Pop;let y=c(),m=y==null?null:y-f;f=y,s&&s({action:u,location:v.location,delta:m})}function d(y,m){u=Ar.Push;let g=gd(v.location,y,m);n&&n(g,y),f=c()+1;let w=fm(g,f),E=v.createHref(g);try{a.pushState(w,"",E)}catch{i.location.assign(E)}o&&s&&s({action:u,location:v.location,delta:1})}function p(y,m){u=Ar.Replace;let g=gd(v.location,y,m);n&&n(g,y),f=c();let w=fm(g,f),E=v.createHref(g);a.replaceState(w,"",E),o&&s&&s({action:u,location:v.location,delta:0})}function h(y){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof y=="string"?y:Hs(y);return Ze(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let v={get action(){return u},get location(){return e(i,a)},listen(y){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(cm,l),s=y,()=>{i.removeEventListener(cm,l),s=null}},createHref(y){return t(i,y)},createURL:h,encodeLocation(y){let m=h(y);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(y){return a.go(y)}};return v}var dm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dm||(dm={}));function db(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?So(t):t,i=s0(r.pathname||"/",n);if(i==null)return null;let o=my(e);pb(o);let a=null;for(let u=0;a==null&&u<o.length;++u)a=Cb(o[u],xb(i));return a}function my(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,u)=>{let s={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Ze(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let f=$r([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),my(o.children,t,c,f)),!(o.path==null&&!o.index)&&t.push({path:f,score:Db(f,o.index),routesMeta:c})};return e.forEach((o,a)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,a);else for(let s of vy(o.path))i(o,a,s)}),t}function vy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=vy(r.join("/")),u=[];return u.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&u.push(...a),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function pb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Eb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hb=/^:\w+$/,mb=3,vb=2,gb=1,yb=10,wb=-2,pm=e=>e==="*";function Db(e,t){let n=e.split("/"),r=n.length;return n.some(pm)&&(r+=wb),t&&(r+=vb),n.filter(i=>!pm(i)).reduce((i,o)=>i+(hb.test(o)?mb:o===""?gb:yb),r)}function Eb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Cb(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let u=n[a],s=a===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",c=bb({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},f);if(!c)return null;Object.assign(r,c.params);let l=u.route;o.push({params:r,pathname:$r([i,c.pathname]),pathnameBase:Nb($r([i,c.pathnameBase])),route:l}),c.pathnameBase!=="/"&&(i=$r([i,c.pathnameBase]))}return o}function bb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,c,l)=>{if(c==="*"){let d=u[l]||"";a=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return f[c]=Ab(u[l]||"",c),f},{}),pathname:o,pathnameBase:a,pattern:e}}function Sb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),u0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xb(e){try{return decodeURI(e)}catch(t){return u0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ab(e,t){try{return decodeURIComponent(e)}catch(n){return u0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function s0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?So(e):e;return{pathname:n?n.startsWith("/")?n:kb(n,t):t,search:Ob(r),hash:Pb(i)}}function kb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=So(e):(i=$a({},e),Ze(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,u;if(r||a==null)u=n;else{let l=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),l-=1;i.pathname=d.join("/")}u=l>=0?t[l]:"/"}let s=Fb(i,u),f=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(f||c)&&(s.pathname+="/"),s}const $r=e=>e.join("/").replace(/\/\/+/g,"/"),Nb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ob=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ib(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _b=typeof Object.is=="function"?Object.is:Tb,{useState:Mb,useEffect:Rb,useLayoutEffect:Bb,useDebugValue:$b}=Da;function Lb(e,t,n){const r=t(),[{inst:i},o]=Mb({inst:{value:r,getSnapshot:t}});return Bb(()=>{i.value=r,i.getSnapshot=t,Wc(i)&&o({inst:i})},[e,r,t]),Rb(()=>(Wc(i)&&o({inst:i}),e(()=>{Wc(i)&&o({inst:i})})),[e]),$b(r),r}function Wc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_b(n,r)}catch{return!0}}function jb(e,t,n){return t()}const zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vb=!zb,Ub=Vb?jb:Lb;"useSyncExternalStore"in Da&&(e=>e.useSyncExternalStore)(Da);const wy=S.createContext(null),Pl=S.createContext(null),xo=S.createContext(null),Il=S.createContext(null),Ao=S.createContext({outlet:null,matches:[]}),Dy=S.createContext(null);function yd(){return yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yd.apply(this,arguments)}function Hb(e,t){let{relative:n}=t===void 0?{}:t;Fo()||Ze(!1);let{basename:r,navigator:i}=S.useContext(xo),{hash:o,pathname:a,search:u}=l0(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:$r([r,a])),i.createHref({pathname:s,search:u,hash:o})}function Fo(){return S.useContext(Il)!=null}function ko(){return Fo()||Ze(!1),S.useContext(Il).location}function Tl(){Fo()||Ze(!1);let{basename:e,navigator:t}=S.useContext(xo),{matches:n}=S.useContext(Ao),{pathname:r}=ko(),i=JSON.stringify(gy(n).map(u=>u.pathnameBase)),o=S.useRef(!1);return S.useEffect(()=>{o.current=!0}),S.useCallback(function(u,s){if(s===void 0&&(s={}),!o.current)return;if(typeof u=="number"){t.go(u);return}let f=yy(u,JSON.parse(i),r,s.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:$r([e,f.pathname])),(s.replace?t.replace:t.push)(f,s.state,s)},[e,t,i,r])}function l0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(Ao),{pathname:i}=ko(),o=JSON.stringify(gy(r).map(a=>a.pathnameBase));return S.useMemo(()=>yy(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Wb(e,t){Fo()||Ze(!1);let{navigator:n}=S.useContext(xo),r=S.useContext(Pl),{matches:i}=S.useContext(Ao),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let s=ko(),f;if(t){var c;let v=typeof t=="string"?So(t):t;u==="/"||(c=v.pathname)!=null&&c.startsWith(u)||Ze(!1),f=v}else f=s;let l=f.pathname||"/",d=u==="/"?l:l.slice(u.length)||"/",p=db(e,{pathname:d}),h=Kb(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:$r([u,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:$r([u,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&h?S.createElement(Il.Provider,{value:{location:yd({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ar.Pop}},h):h}function Yb(){let e=Jb(),t=Ib(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}class Gb extends S.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(Ao.Provider,{value:this.props.routeContext},S.createElement(Dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qb(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(wy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ao.Provider,{value:t},r)}function Kb(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Ze(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,u)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,f=null;n&&(a.route.ErrorBoundary?f=S.createElement(a.route.ErrorBoundary,null):a.route.errorElement?f=a.route.errorElement:f=S.createElement(Yb,null));let c=t.concat(r.slice(0,u+1)),l=()=>{let d=o;return s?d=f:a.route.Component?d=S.createElement(a.route.Component,null):a.route.element&&(d=a.route.element),S.createElement(qb,{match:a,routeContext:{outlet:o,matches:c},children:d})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?S.createElement(Gb,{location:n.location,component:f,error:s,children:l(),routeContext:{outlet:null,matches:c}}):l()},null)}var hm;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(hm||(hm={}));var Ws;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ws||(Ws={}));function Xb(e){let t=S.useContext(Pl);return t||Ze(!1),t}function Qb(e){let t=S.useContext(Ao);return t||Ze(!1),t}function Zb(e){let t=Qb(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Jb(){var e;let t=S.useContext(Dy),n=Xb(Ws.UseRouteError),r=Zb(Ws.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function eS(e){let{to:t,replace:n,state:r,relative:i}=e;Fo()||Ze(!1);let o=S.useContext(Pl),a=Tl();return S.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function In(e){Ze(!1)}function tS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ar.Pop,navigator:o,static:a=!1}=e;Fo()&&Ze(!1);let u=t.replace(/^\/*/,"/"),s=S.useMemo(()=>({basename:u,navigator:o,static:a}),[u,o,a]);typeof r=="string"&&(r=So(r));let{pathname:f="/",search:c="",hash:l="",state:d=null,key:p="default"}=r,h=S.useMemo(()=>{let v=s0(f,u);return v==null?null:{location:{pathname:v,search:c,hash:l,state:d,key:p},navigationType:i}},[u,f,c,l,d,p,i]);return h==null?null:S.createElement(xo.Provider,{value:s},S.createElement(Il.Provider,{children:n,value:h}))}function nS(e){let{children:t,location:n}=e,r=S.useContext(wy),i=r&&!t?r.router.routes:wd(t);return Wb(i,n)}var mm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(mm||(mm={}));new Promise(()=>{});function wd(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,wd(r.props.children,t));return}r.type!==In&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=wd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}function Ey(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function iS(e,t){return e.button===0&&(!t||t==="_self")&&!rS(e)}const oS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],aS=["aria-current","caseSensitive","className","end","style","to","children"];function uS(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=lb({window:r,v5Compat:!0}));let o=i.current,[a,u]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(u),[o]),S.createElement(tS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const sS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cy=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:u,target:s,to:f,preventScrollReset:c}=t,l=Ey(t,oS),{basename:d}=S.useContext(xo),p,h=!1;if(typeof f=="string"&&lS.test(f)&&(p=f,sS)){let g=new URL(window.location.href),w=f.startsWith("//")?new URL(g.protocol+f):new URL(f),E=s0(w.pathname,d);w.origin===g.origin&&E!=null?f=E+w.search+w.hash:h=!0}let v=Hb(f,{relative:i}),y=cS(f,{replace:a,state:u,target:s,preventScrollReset:c,relative:i});function m(g){r&&r(g),g.defaultPrevented||y(g)}return S.createElement("a",Ys({},l,{href:p||v,onClick:h||o?r:m,ref:n,target:s}))}),kt=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:u,to:s,children:f}=t,c=Ey(t,aS),l=l0(s,{relative:c.relative}),d=ko(),p=S.useContext(Pl),{navigator:h}=S.useContext(xo),v=h.encodeLocation?h.encodeLocation(l).pathname:l.pathname,y=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(y=y.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let g=y===v||!a&&y.startsWith(v)&&y.charAt(v.length)==="/",w=m!=null&&(m===v||!a&&m.startsWith(v)&&m.charAt(v.length)==="/"),E=g?r:void 0,A;typeof o=="function"?A=o({isActive:g,isPending:w}):A=[o,g?"active":null,w?"pending":null].filter(Boolean).join(" ");let k=typeof u=="function"?u({isActive:g,isPending:w}):u;return S.createElement(Cy,Ys({},c,{"aria-current":E,className:A,ref:n,style:k,to:s}),typeof f=="function"?f({isActive:g,isPending:w}):f)});var vm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vm||(vm={}));var gm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function cS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,u=Tl(),s=ko(),f=l0(e,{relative:a});return S.useCallback(c=>{if(iS(c,n)){c.preventDefault();let l=r!==void 0?r:Hs(s)===Hs(f);u(e,{replace:l,state:i,preventScrollReset:o,relative:a})}},[s,u,f,r,i,n,e,o,a])}var Gs={},fS={get exports(){return Gs},set exports(e){Gs=e}},Oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=Symbol.for("react.element"),f0=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Bl=Symbol.for("react.provider"),$l=Symbol.for("react.context"),dS=Symbol.for("react.server_context"),Ll=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Ul=Symbol.for("react.lazy"),pS=Symbol.for("react.offscreen"),by;by=Symbol.for("react.module.reference");function gn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case c0:switch(e=e.type,e){case _l:case Rl:case Ml:case jl:case zl:return e;default:switch(e=e&&e.$$typeof,e){case dS:case $l:case Ll:case Ul:case Vl:case Bl:return e;default:return t}}case f0:return t}}}Oe.ContextConsumer=$l;Oe.ContextProvider=Bl;Oe.Element=c0;Oe.ForwardRef=Ll;Oe.Fragment=_l;Oe.Lazy=Ul;Oe.Memo=Vl;Oe.Portal=f0;Oe.Profiler=Rl;Oe.StrictMode=Ml;Oe.Suspense=jl;Oe.SuspenseList=zl;Oe.isAsyncMode=function(){return!1};Oe.isConcurrentMode=function(){return!1};Oe.isContextConsumer=function(e){return gn(e)===$l};Oe.isContextProvider=function(e){return gn(e)===Bl};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===c0};Oe.isForwardRef=function(e){return gn(e)===Ll};Oe.isFragment=function(e){return gn(e)===_l};Oe.isLazy=function(e){return gn(e)===Ul};Oe.isMemo=function(e){return gn(e)===Vl};Oe.isPortal=function(e){return gn(e)===f0};Oe.isProfiler=function(e){return gn(e)===Rl};Oe.isStrictMode=function(e){return gn(e)===Ml};Oe.isSuspense=function(e){return gn(e)===jl};Oe.isSuspenseList=function(e){return gn(e)===zl};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_l||e===Rl||e===Ml||e===jl||e===zl||e===pS||typeof e=="object"&&e!==null&&(e.$$typeof===Ul||e.$$typeof===Vl||e.$$typeof===Bl||e.$$typeof===$l||e.$$typeof===Ll||e.$$typeof===by||e.getModuleId!==void 0)};Oe.typeOf=gn;(function(e){e.exports=Oe})(fS);function hS(e){function t($,U,Y,ne,O){for(var ce=0,H=0,Ce=0,De=0,be,de,Ye=0,qe=0,we,Je=we=be=0,Se=0,Ke=0,Qr=0,et=0,Fi=Y.length,hr=Fi-1,C,b="",N="",T="",L="",B;Se<Fi;){if(de=Y.charCodeAt(Se),Se===hr&&H+De+Ce+ce!==0&&(H!==0&&(de=H===47?10:47),De=Ce=ce=0,Fi++,hr++),H+De+Ce+ce===0){if(Se===hr&&(0<Ke&&(b=b.replace(d,"")),0<b.trim().length)){switch(de){case 32:case 9:case 59:case 13:case 10:break;default:b+=Y.charAt(Se)}de=59}switch(de){case 123:for(b=b.trim(),be=b.charCodeAt(0),we=1,et=++Se;Se<Fi;){switch(de=Y.charCodeAt(Se)){case 123:we++;break;case 125:we--;break;case 47:switch(de=Y.charCodeAt(Se+1)){case 42:case 47:e:{for(Je=Se+1;Je<hr;++Je)switch(Y.charCodeAt(Je)){case 47:if(de===42&&Y.charCodeAt(Je-1)===42&&Se+2!==Je){Se=Je+1;break e}break;case 10:if(de===47){Se=Je+1;break e}}Se=Je}}break;case 91:de++;case 40:de++;case 34:case 39:for(;Se++<hr&&Y.charCodeAt(Se)!==de;);}if(we===0)break;Se++}switch(we=Y.substring(et,Se),be===0&&(be=(b=b.replace(l,"").trim()).charCodeAt(0)),be){case 64:switch(0<Ke&&(b=b.replace(d,"")),de=b.charCodeAt(1),de){case 100:case 109:case 115:case 45:Ke=U;break;default:Ke=ae}if(we=t(U,Ke,we,de,O+1),et=we.length,0<z&&(Ke=n(ae,b,Qr),B=u(3,we,Ke,U,he,ie,et,de,O,ne),b=Ke.join(""),B!==void 0&&(et=(we=B.trim()).length)===0&&(de=0,we="")),0<et)switch(de){case 115:b=b.replace(k,a);case 100:case 109:case 45:we=b+"{"+we+"}";break;case 107:b=b.replace(g,"$1 $2"),we=b+"{"+we+"}",we=Z===1||Z===2&&o("@"+we,3)?"@-webkit-"+we+"@"+we:"@"+we;break;default:we=b+we,ne===112&&(we=(N+=we,""))}else we="";break;default:we=t(U,n(U,b,Qr),we,ne,O+1)}T+=we,we=Qr=Ke=Je=be=0,b="",de=Y.charCodeAt(++Se);break;case 125:case 59:if(b=(0<Ke?b.replace(d,""):b).trim(),1<(et=b.length))switch(Je===0&&(be=b.charCodeAt(0),be===45||96<be&&123>be)&&(et=(b=b.replace(" ",":")).length),0<z&&(B=u(1,b,U,$,he,ie,N.length,ne,O,ne))!==void 0&&(et=(b=B.trim()).length)===0&&(b="\0\0"),be=b.charCodeAt(0),de=b.charCodeAt(1),be){case 0:break;case 64:if(de===105||de===99){L+=b+Y.charAt(Se);break}default:b.charCodeAt(et-1)!==58&&(N+=i(b,be,de,b.charCodeAt(2)))}Qr=Ke=Je=be=0,b="",de=Y.charCodeAt(++Se)}}switch(de){case 13:case 10:H===47?H=0:1+be===0&&ne!==107&&0<b.length&&(Ke=1,b+="\0"),0<z*te&&u(0,b,U,$,he,ie,N.length,ne,O,ne),ie=1,he++;break;case 59:case 125:if(H+De+Ce+ce===0){ie++;break}default:switch(ie++,C=Y.charAt(Se),de){case 9:case 32:if(De+ce+H===0)switch(Ye){case 44:case 58:case 9:case 32:C="";break;default:de!==32&&(C=" ")}break;case 0:C="\\0";break;case 12:C="\\f";break;case 11:C="\\v";break;case 38:De+H+ce===0&&(Ke=Qr=1,C="\f"+C);break;case 108:if(De+H+ce+me===0&&0<Je)switch(Se-Je){case 2:Ye===112&&Y.charCodeAt(Se-3)===58&&(me=Ye);case 8:qe===111&&(me=qe)}break;case 58:De+H+ce===0&&(Je=Se);break;case 44:H+Ce+De+ce===0&&(Ke=1,C+="\r");break;case 34:case 39:H===0&&(De=De===de?0:De===0?de:De);break;case 91:De+H+Ce===0&&ce++;break;case 93:De+H+Ce===0&&ce--;break;case 41:De+H+ce===0&&Ce--;break;case 40:if(De+H+ce===0){if(be===0)switch(2*Ye+3*qe){case 533:break;default:be=1}Ce++}break;case 64:H+Ce+De+ce+Je+we===0&&(we=1);break;case 42:case 47:if(!(0<De+ce+Ce))switch(H){case 0:switch(2*de+3*Y.charCodeAt(Se+1)){case 235:H=47;break;case 220:et=Se,H=42}break;case 42:de===47&&Ye===42&&et+2!==Se&&(Y.charCodeAt(et+2)===33&&(N+=Y.substring(et,Se+1)),C="",H=0)}}H===0&&(b+=C)}qe=Ye,Ye=de,Se++}if(et=N.length,0<et){if(Ke=U,0<z&&(B=u(2,N,Ke,$,he,ie,et,ne,O,ne),B!==void 0&&(N=B).length===0))return L+N+T;if(N=Ke.join(",")+"{"+N+"}",Z*me!==0){switch(Z!==2||o(N,2)||(me=0),me){case 111:N=N.replace(E,":-moz-$1")+N;break;case 112:N=N.replace(w,"::-webkit-input-$1")+N.replace(w,"::-moz-$1")+N.replace(w,":-ms-input-$1")+N}me=0}}return L+N+T}function n($,U,Y){var ne=U.trim().split(y);U=ne;var O=ne.length,ce=$.length;switch(ce){case 0:case 1:var H=0;for($=ce===0?"":$[0]+" ";H<O;++H)U[H]=r($,U[H],Y).trim();break;default:var Ce=H=0;for(U=[];H<O;++H)for(var De=0;De<ce;++De)U[Ce++]=r($[De]+" ",ne[H],Y).trim()}return U}function r($,U,Y){var ne=U.charCodeAt(0);switch(33>ne&&(ne=(U=U.trim()).charCodeAt(0)),ne){case 38:return U.replace(m,"$1"+$.trim());case 58:return $.trim()+U.replace(m,"$1"+$.trim());default:if(0<1*Y&&0<U.indexOf("\f"))return U.replace(m,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+U}function i($,U,Y,ne){var O=$+";",ce=2*U+3*Y+4*ne;if(ce===944){$=O.indexOf(":",9)+1;var H=O.substring($,O.length-1).trim();return H=O.substring(0,$).trim()+H+";",Z===1||Z===2&&o(H,1)?"-webkit-"+H+H:H}if(Z===0||Z===2&&!o(O,1))return O;switch(ce){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(ee,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return H=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+H+"-webkit-"+O+"-ms-flex-pack"+H+O;case 1005:return h.test(O)?O.replace(p,":-webkit-")+O.replace(p,":-moz-")+O:O;case 1e3:switch(H=O.substring(13).trim(),U=H.indexOf("-")+1,H.charCodeAt(0)+H.charCodeAt(U)){case 226:H=O.replace(A,"tb");break;case 232:H=O.replace(A,"tb-rl");break;case 220:H=O.replace(A,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+H+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(U=(O=$).length-10,H=(O.charCodeAt(U)===33?O.substring(0,U):O).substring($.indexOf(":",7)+1).trim(),ce=H.charCodeAt(0)+(H.charCodeAt(7)|0)){case 203:if(111>H.charCodeAt(8))break;case 115:O=O.replace(H,"-webkit-"+H)+";"+O;break;case 207:case 102:O=O.replace(H,"-webkit-"+(102<ce?"inline-":"")+"box")+";"+O.replace(H,"-webkit-"+H)+";"+O.replace(H,"-ms-"+H+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return H=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+H+"-ms-flex-"+H+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(x,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(x,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(G.test($)===!0)return(H=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),U,Y,ne).replace(":fill-available",":stretch"):O.replace(H,"-webkit-"+H)+O.replace(H,"-moz-"+H.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,Y+ne===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+O}return O}function o($,U){var Y=$.indexOf(U===1?":":"{"),ne=$.substring(0,U!==3?Y:10);return Y=$.substring(Y+1,$.length-1),J(U!==2?ne:ne.replace(P,"$1"),Y,U)}function a($,U){var Y=i(U,U.charCodeAt(0),U.charCodeAt(1),U.charCodeAt(2));return Y!==U+";"?Y.replace(F," or ($1)").substring(4):"("+U+")"}function u($,U,Y,ne,O,ce,H,Ce,De,be){for(var de=0,Ye=U,qe;de<z;++de)switch(qe=Ie[de].call(c,$,Ye,Y,ne,O,ce,H,Ce,De,be)){case void 0:case!1:case!0:case null:break;default:Ye=qe}if(Ye!==U)return Ye}function s($){switch($){case void 0:case null:z=Ie.length=0;break;default:if(typeof $=="function")Ie[z++]=$;else if(typeof $=="object")for(var U=0,Y=$.length;U<Y;++U)s($[U]);else te=!!$|0}return s}function f($){return $=$.prefix,$!==void 0&&(J=null,$?typeof $!="function"?Z=1:(Z=2,J=$):Z=0),f}function c($,U){var Y=$;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ye=Y,Y=[ye],0<z){var ne=u(-1,U,Y,Y,he,ie,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(U=ne)}var O=t(ae,Y,U,0,0);return 0<z&&(ne=u(-2,O,Y,Y,he,ie,O.length,0,0,0),ne!==void 0&&(O=ne)),ye="",me=0,ie=he=1,O}var l=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,h=/zoo|gra/,v=/([,: ])(transform)/g,y=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,E=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,F=/([\s\S]*?);/g,x=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,ee=/([^-])(image-set\()/,ie=1,he=1,me=0,Z=1,ae=[],Ie=[],z=0,J=null,te=0,ye="";return c.use=s,c.set=f,e!==void 0&&f(e),c}var mS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Sy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ym=Sy(function(e){return vS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Dd={},gS={get exports(){return Dd},set exports(e){Dd=e}},Pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dt=typeof Symbol=="function"&&Symbol.for,d0=dt?Symbol.for("react.element"):60103,p0=dt?Symbol.for("react.portal"):60106,Hl=dt?Symbol.for("react.fragment"):60107,Wl=dt?Symbol.for("react.strict_mode"):60108,Yl=dt?Symbol.for("react.profiler"):60114,Gl=dt?Symbol.for("react.provider"):60109,ql=dt?Symbol.for("react.context"):60110,h0=dt?Symbol.for("react.async_mode"):60111,Kl=dt?Symbol.for("react.concurrent_mode"):60111,Xl=dt?Symbol.for("react.forward_ref"):60112,Ql=dt?Symbol.for("react.suspense"):60113,yS=dt?Symbol.for("react.suspense_list"):60120,Zl=dt?Symbol.for("react.memo"):60115,Jl=dt?Symbol.for("react.lazy"):60116,wS=dt?Symbol.for("react.block"):60121,DS=dt?Symbol.for("react.fundamental"):60117,ES=dt?Symbol.for("react.responder"):60118,CS=dt?Symbol.for("react.scope"):60119;function an(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case d0:switch(e=e.type,e){case h0:case Kl:case Hl:case Yl:case Wl:case Ql:return e;default:switch(e=e&&e.$$typeof,e){case ql:case Xl:case Jl:case Zl:case Gl:return e;default:return t}}case p0:return t}}}function xy(e){return an(e)===Kl}Pe.AsyncMode=h0;Pe.ConcurrentMode=Kl;Pe.ContextConsumer=ql;Pe.ContextProvider=Gl;Pe.Element=d0;Pe.ForwardRef=Xl;Pe.Fragment=Hl;Pe.Lazy=Jl;Pe.Memo=Zl;Pe.Portal=p0;Pe.Profiler=Yl;Pe.StrictMode=Wl;Pe.Suspense=Ql;Pe.isAsyncMode=function(e){return xy(e)||an(e)===h0};Pe.isConcurrentMode=xy;Pe.isContextConsumer=function(e){return an(e)===ql};Pe.isContextProvider=function(e){return an(e)===Gl};Pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===d0};Pe.isForwardRef=function(e){return an(e)===Xl};Pe.isFragment=function(e){return an(e)===Hl};Pe.isLazy=function(e){return an(e)===Jl};Pe.isMemo=function(e){return an(e)===Zl};Pe.isPortal=function(e){return an(e)===p0};Pe.isProfiler=function(e){return an(e)===Yl};Pe.isStrictMode=function(e){return an(e)===Wl};Pe.isSuspense=function(e){return an(e)===Ql};Pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hl||e===Kl||e===Yl||e===Wl||e===Ql||e===yS||typeof e=="object"&&e!==null&&(e.$$typeof===Jl||e.$$typeof===Zl||e.$$typeof===Gl||e.$$typeof===ql||e.$$typeof===Xl||e.$$typeof===DS||e.$$typeof===ES||e.$$typeof===CS||e.$$typeof===wS)};Pe.typeOf=an;(function(e){e.exports=Pe})(gS);var m0=Dd,bS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},SS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ay={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v0={};v0[m0.ForwardRef]=xS;v0[m0.Memo]=Ay;function wm(e){return m0.isMemo(e)?Ay:v0[e.$$typeof]||bS}var AS=Object.defineProperty,FS=Object.getOwnPropertyNames,Dm=Object.getOwnPropertySymbols,kS=Object.getOwnPropertyDescriptor,NS=Object.getPrototypeOf,Em=Object.prototype;function Fy(e,t,n){if(typeof t!="string"){if(Em){var r=NS(t);r&&r!==Em&&Fy(e,r,n)}var i=FS(t);Dm&&(i=i.concat(Dm(t)));for(var o=wm(e),a=wm(t),u=0;u<i.length;++u){var s=i[u];if(!SS[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var f=kS(t,s);try{AS(e,s,f)}catch{}}}}return e}var OS=Fy;function $n(){return($n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Cm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ed=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Gs.typeOf(e)},qs=Object.freeze([]),Lr=Object.freeze({});function La(e){return typeof e=="function"}function bm(e){return e.displayName||e.name||"Component"}function g0(e){return e&&typeof e.styledComponentId=="string"}var mo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",y0=typeof window<"u"&&"HTMLElement"in window,PS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),IS={};function nu(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var TS=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&nu(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var u=o;u<a;u++)this.groupSizes[u]=0}for(var s=this.indexOfGroup(n+1),f=0,c=r.length;f<c;f++)this.tag.insertRule(s,r[f])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,u=o;u<a;u++)r+=this.tag.getRule(u)+`/*!sc*/
`;return r},e}(),us=new Map,Ks=new Map,ha=1,Nu=function(e){if(us.has(e))return us.get(e);for(;Ks.has(ha);)ha++;var t=ha++;return us.set(e,t),Ks.set(t,e),t},_S=function(e){return Ks.get(e)},MS=function(e,t){t>=ha&&(ha=t+1),us.set(e,t),Ks.set(t,e)},RS="style["+mo+'][data-styled-version="5.3.9"]',BS=new RegExp("^"+mo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$S=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},LS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var u=a.match(BS);if(u){var s=0|parseInt(u[1],10),f=u[2];s!==0&&(MS(f,s),$S(e,f,u[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},jS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ky=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(u){for(var s=u.childNodes,f=s.length;f>=0;f--){var c=s[f];if(c&&c.nodeType===1&&c.hasAttribute(mo))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(mo,"active"),r.setAttribute("data-styled-version","5.3.9");var a=jS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},zS=function(){function e(n){var r=this.element=ky(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,u=o.length;a<u;a++){var s=o[a];if(s.ownerNode===i)return s}nu(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),VS=function(){function e(n){var r=this.element=ky(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),US=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Sm=y0,HS={isServer:!y0,useCSSOMInjection:!PS},Xs=function(){function e(n,r,i){n===void 0&&(n=Lr),r===void 0&&(r={}),this.options=$n({},HS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&y0&&Sm&&(Sm=!1,function(o){for(var a=document.querySelectorAll(RS),u=0,s=a.length;u<s;u++){var f=a[u];f&&f.getAttribute(mo)!=="active"&&(LS(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return Nu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e($n({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new US(a):o?new zS(a):new VS(a),new TS(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Nu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Nu(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Nu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var u=_S(a);if(u!==void 0){var s=n.names.get(u),f=r.getGroup(a);if(s&&f&&s.size){var c=mo+".g"+a+'[id="'+u+'"]',l="";s!==void 0&&s.forEach(function(d){d.length>0&&(l+=d+",")}),o+=""+f+c+'{content:"'+l+`"}/*!sc*/
`}}}return o}(this)},e}(),WS=/(a)(d)/gi,xm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xm(t%52)+n;return(xm(t%52)+n).replace(WS,"$1-$2")}var Yi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ny=function(e){return Yi(5381,e)};function Oy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(La(n)&&!g0(n))return!1}return!0}var YS=Ny("5.3.9"),GS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Oy(t),this.componentId=n,this.baseHash=Yi(YS,n),this.baseStyle=r,Xs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=wi(this.rules,t,n,r).join(""),u=Cd(Yi(this.baseHash,a)>>>0);if(!n.hasNameForId(i,u)){var s=r(a,"."+u,void 0,i);n.insertRules(i,u,s)}o.push(u),this.staticRulesId=u}else{for(var f=this.rules.length,c=Yi(this.baseHash,r.hash),l="",d=0;d<f;d++){var p=this.rules[d];if(typeof p=="string")l+=p;else if(p){var h=wi(p,t,n,r),v=Array.isArray(h)?h.join(""):h;c=Yi(c,v+d),l+=v}}if(l){var y=Cd(c>>>0);if(!n.hasNameForId(i,y)){var m=r(l,"."+y,void 0,i);n.insertRules(i,y,m)}o.push(y)}}return o.join(" ")},e}(),qS=/^\s*\/\/.*$/gm,KS=[":","[",".","#"];function XS(e){var t,n,r,i,o=e===void 0?Lr:e,a=o.options,u=a===void 0?Lr:a,s=o.plugins,f=s===void 0?qs:s,c=new hS(u),l=[],d=function(v){function y(m){if(m)try{v(m+"}")}catch{}}return function(m,g,w,E,A,k,F,x,P,G){switch(m){case 1:if(P===0&&g.charCodeAt(0)===64)return v(g+";"),"";break;case 2:if(x===0)return g+"/*|*/";break;case 3:switch(x){case 102:case 112:return v(w[0]+g),"";default:return g+(G===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(y)}}}(function(v){l.push(v)}),p=function(v,y,m){return y===0&&KS.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function h(v,y,m,g){g===void 0&&(g="&");var w=v.replace(qS,""),E=y&&m?m+" "+y+" { "+w+" }":w;return t=g,n=y,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!y?"":y,E)}return c.use([].concat(f,[function(v,y,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var y=l;return l=[],y}}])),h.hash=f.length?f.reduce(function(v,y){return y.name||nu(15),Yi(v,y.name)},5381).toString():"",h}var Py=cr.createContext();Py.Consumer;var Iy=cr.createContext(),QS=(Iy.Consumer,new Xs),bd=XS();function Ty(){return S.useContext(Py)||QS}function _y(){return S.useContext(Iy)||bd}var ZS=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=bd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return nu(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=bd),this.name+t.hash},e}(),JS=/([A-Z])/,ex=/([A-Z])/g,tx=/^ms-/,nx=function(e){return"-"+e.toLowerCase()};function Am(e){return JS.test(e)?e.replace(ex,nx).replace(tx,"-ms-"):e}var Fm=function(e){return e==null||e===!1||e===""};function wi(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,u=e.length;a<u;a+=1)(i=wi(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Fm(e))return"";if(g0(e))return"."+e.styledComponentId;if(La(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var s=e(t);return wi(s,t,n,r)}var f;return e instanceof ZS?n?(e.inject(n,r),e.getName(r)):e:Ed(e)?function c(l,d){var p,h,v=[];for(var y in l)l.hasOwnProperty(y)&&!Fm(l[y])&&(Array.isArray(l[y])&&l[y].isCss||La(l[y])?v.push(Am(y)+":",l[y],";"):Ed(l[y])?v.push.apply(v,c(l[y],y)):v.push(Am(y)+": "+(p=y,(h=l[y])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||p in mS?String(h).trim():h+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(e):e.toString()}var km=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function My(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return La(e)||Ed(e)?km(wi(Cm(qs,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:km(wi(Cm(e,n)))}var Ry=function(e,t,n){return n===void 0&&(n=Lr),e.theme!==n.theme&&e.theme||t||n.theme},rx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ix=/(^-|-$)/g;function Yc(e){return e.replace(rx,"-").replace(ix,"")}var By=function(e){return Cd(Ny(e)>>>0)};function Ou(e){return typeof e=="string"&&!0}var Sd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ox=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ax(e,t,n){var r=e[n];Sd(t)&&Sd(r)?$y(r,t):e[n]=t}function $y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Sd(a))for(var u in a)ox(u)&&ax(e,a[u],u)}return e}var w0=cr.createContext();w0.Consumer;var Gc={};function Ly(e,t,n){var r=g0(e),i=!Ou(e),o=t.attrs,a=o===void 0?qs:o,u=t.componentId,s=u===void 0?function(g,w){var E=typeof g!="string"?"sc":Yc(g);Gc[E]=(Gc[E]||0)+1;var A=E+"-"+By("5.3.9"+E+Gc[E]);return w?w+"-"+A:A}(t.displayName,t.parentComponentId):u,f=t.displayName,c=f===void 0?function(g){return Ou(g)?"styled."+g:"Styled("+bm(g)+")"}(e):f,l=t.displayName&&t.componentId?Yc(t.displayName)+"-"+t.componentId:t.componentId||s,d=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(g,w,E){return e.shouldForwardProp(g,w,E)&&t.shouldForwardProp(g,w,E)}:e.shouldForwardProp);var h,v=new GS(n,l,r?e.componentStyle:void 0),y=v.isStatic&&a.length===0,m=function(g,w){return function(E,A,k,F){var x=E.attrs,P=E.componentStyle,G=E.defaultProps,ee=E.foldedComponentIds,ie=E.shouldForwardProp,he=E.styledComponentId,me=E.target,Z=function(ne,O,ce){ne===void 0&&(ne=Lr);var H=$n({},O,{theme:ne}),Ce={};return ce.forEach(function(De){var be,de,Ye,qe=De;for(be in La(qe)&&(qe=qe(H)),qe)H[be]=Ce[be]=be==="className"?(de=Ce[be],Ye=qe[be],de&&Ye?de+" "+Ye:de||Ye):qe[be]}),[H,Ce]}(Ry(A,S.useContext(w0),G)||Lr,A,x),ae=Z[0],Ie=Z[1],z=function(ne,O,ce,H){var Ce=Ty(),De=_y(),be=O?ne.generateAndInjectStyles(Lr,Ce,De):ne.generateAndInjectStyles(ce,Ce,De);return be}(P,F,ae),J=k,te=Ie.$as||A.$as||Ie.as||A.as||me,ye=Ou(te),$=Ie!==A?$n({},A,{},Ie):A,U={};for(var Y in $)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?U.as=$[Y]:(ie?ie(Y,ym,te):!ye||ym(Y))&&(U[Y]=$[Y]));return A.style&&Ie.style!==A.style&&(U.style=$n({},A.style,{},Ie.style)),U.className=Array.prototype.concat(ee,he,z!==he?z:null,A.className,Ie.className).filter(Boolean).join(" "),U.ref=J,S.createElement(te,U)}(h,g,w,y)};return m.displayName=c,(h=cr.forwardRef(m)).attrs=d,h.componentStyle=v,h.displayName=c,h.shouldForwardProp=p,h.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):qs,h.styledComponentId=l,h.target=r?e.target:e,h.withComponent=function(g){var w=t.componentId,E=function(k,F){if(k==null)return{};var x,P,G={},ee=Object.keys(k);for(P=0;P<ee.length;P++)x=ee[P],F.indexOf(x)>=0||(G[x]=k[x]);return G}(t,["componentId"]),A=w&&w+"-"+(Ou(g)?g:Yc(bm(g)));return Ly(g,$n({},E,{attrs:d,componentId:A}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?$y({},e.defaultProps,g):g}}),Object.defineProperty(h,"toString",{value:function(){return"."+h.styledComponentId}}),i&&OS(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var xd=function(e){return function t(n,r,i){if(i===void 0&&(i=Lr),!Gs.isValidElementType(r))return nu(1,String(r));var o=function(){return n(r,i,My.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,$n({},i,{},a))},o.attrs=function(a){return t(n,r,$n({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Ly,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){xd[e]=xd(e)});var ux=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Oy(n),Xs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(wi(this.rules,r,i,o).join(""),""),u=this.componentId+n;i.insertRules(u,u,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Xs.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function sx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=My.apply(void 0,[e].concat(n)),o="sc-global-"+By(JSON.stringify(i)),a=new ux(i,o);function u(f){var c=Ty(),l=_y(),d=S.useContext(w0),p=S.useRef(c.allocateGSInstance(o)).current;return c.server&&s(p,f,c,d,l),S.useLayoutEffect(function(){if(!c.server)return s(p,f,c,d,l),function(){return a.removeStyles(p,c)}},[p,f,c,d,l]),null}function s(f,c,l,d,p){if(a.isStatic)a.renderStyles(f,IS,l,p);else{var h=$n({},c,{theme:Ry(c,d,u.defaultProps)});a.renderStyles(f,h,l,p)}}return cr.memo(u)}const bt=xd,vr={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px",desktopL:"4000px"},it={mobileS:`(min-width: ${vr.mobileS})`,mobileM:`(min-width: ${vr.mobileM})`,mobileL:`(min-width: ${vr.mobileL})`,tablet:`(min-width: ${vr.tablet})`,laptop:`(min-width: ${vr.laptop})`,laptopL:`(min-width: ${vr.laptopL})`,desktop:`(min-width: ${vr.desktop})`,desktopL:`(min-width: ${vr.desktopL})`};let Pu="#2C4001",qc="#F2F2F2";const lx=bt.nav`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 0 2em;
    background: ${Pu};

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
        color: ${qc};
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
        background: ${Pu};
        position: absolute;
        right: 0;
        z-index: 2;
        top: 0;

        &.active {
            max-height: 500px;
        }
    }

    .mobile-nav {
        color: ${qc};
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
        background: ${qc};
        color: ${Pu};
    }
    .userIcon {
        color: ${Pu};
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

    @media ${it.mobileS} {
        min-width: 200px;
        font-size: 0.9rem;
        .logo {
                width: 7em;
p        }
    }

    @media ${it.mobileM} {
        min-width: 320px;
        font-size: 0.9rem;
        .logo {
        }
    }

    @media ${it.mobileL} {
        min-width: 375px;
        font-size: 1rem;
        .logo {
            height: 50px;
            width: 100px;
        }
    }

    @media ${it.tablet} {
        min-width: 425px;
    }

    @media ${it.laptop} {
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

    @media ${it.desktop} {
        min-width: 1441px;
        font-size: 3rem;
        .logo {
            height: 140px;
            width: 160px;
        }
    }

    @media ${it.desktopL} {
        min-width: 2560px;
        font-size: 4rem;
        .logo {
            height: 280px;
            width: 400px;
        }
    }
`,cx="/assets/PantryPalWhite-2ae508bc.png";/*! js-cookie v3.0.1 | MIT */function Iu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var fx={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Ad(e,t){function n(i,o,a){if(!(typeof document>"u")){a=Iu({},t,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var u="";for(var s in a)a[s]&&(u+="; "+s,a[s]!==!0&&(u+="="+a[s].split(";")[0]));return document.cookie=i+"="+e.write(o,i)+u}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var o=document.cookie?document.cookie.split("; "):[],a={},u=0;u<o.length;u++){var s=o[u].split("="),f=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(a[c]=e.read(f,c),i===c)break}catch{}}return i?a[i]:a}}return Object.create({set:n,get:r,remove:function(i,o){n(i,"",Iu({},o,{expires:-1}))},withAttributes:function(i){return Ad(this.converter,Iu({},this.attributes,i))},withConverter:function(i){return Ad(Iu({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Qs=Ad(fx,{path:"/"});function Nm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nm(Object(n),!0).forEach(function(r){at(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zs(e){return Zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zs(e)}function dx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Om(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function px(e,t,n){return t&&Om(e.prototype,t),n&&Om(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function at(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D0(e,t){return mx(e)||gx(e,t)||jy(e,t)||wx()}function ru(e){return hx(e)||vx(e)||jy(e)||yx()}function hx(e){if(Array.isArray(e))return Fd(e)}function mx(e){if(Array.isArray(e))return e}function vx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gx(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,u;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,u=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw u}}return r}}function jy(e,t){if(e){if(typeof e=="string")return Fd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fd(e,t)}}function Fd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pm=function(){},E0={},zy={},Vy=null,Uy={mark:Pm,measure:Pm};try{typeof window<"u"&&(E0=window),typeof document<"u"&&(zy=document),typeof MutationObserver<"u"&&(Vy=MutationObserver),typeof performance<"u"&&(Uy=performance)}catch{}var Dx=E0.navigator||{},Im=Dx.userAgent,Tm=Im===void 0?"":Im,Vr=E0,$e=zy,_m=Vy,Tu=Uy;Vr.document;var dr=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",Hy=~Tm.indexOf("MSIE")||~Tm.indexOf("Trident/"),_u,Mu,Ru,Bu,$u,ur="___FONT_AWESOME___",kd=16,Wy="fa",Yy="svg-inline--fa",Di="data-fa-i2svg",Nd="data-fa-pseudo-element",Ex="data-fa-pseudo-element-pending",C0="data-prefix",b0="data-icon",Mm="fontawesome-i2svg",Cx="async",bx=["HTML","HEAD","STYLE","SCRIPT"],Gy=function(){try{return!0}catch{return!1}}(),Re="classic",He="sharp",S0=[Re,He];function iu(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Re]}})}var ja=iu((_u={},at(_u,Re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),at(_u,He,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),_u)),za=iu((Mu={},at(Mu,Re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),at(Mu,He,{solid:"fass",regular:"fasr"}),Mu)),Va=iu((Ru={},at(Ru,Re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),at(Ru,He,{fass:"fa-solid",fasr:"fa-regular"}),Ru)),Sx=iu((Bu={},at(Bu,Re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),at(Bu,He,{"fa-solid":"fass","fa-regular":"fasr"}),Bu)),xx=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,qy="fa-layers-text",Ax=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fx=iu(($u={},at($u,Re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),at($u,He,{900:"fass",400:"fasr"}),$u)),Ky=[1,2,3,4,5,6,7,8,9,10],kx=Ky.concat([11,12,13,14,15,16,17,18,19,20]),Nx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],li={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ua=new Set;Object.keys(za[Re]).map(Ua.add.bind(Ua));Object.keys(za[He]).map(Ua.add.bind(Ua));var Ox=[].concat(S0,ru(Ua),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",li.GROUP,li.SWAP_OPACITY,li.PRIMARY,li.SECONDARY]).concat(Ky.map(function(e){return"".concat(e,"x")})).concat(kx.map(function(e){return"w-".concat(e)})),ma=Vr.FontAwesomeConfig||{};function Px(e){var t=$e.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ix(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if($e&&typeof $e.querySelector=="function"){var Tx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tx.forEach(function(e){var t=D0(e,2),n=t[0],r=t[1],i=Ix(Px(n));i!=null&&(ma[r]=i)})}var Xy={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wy,replacementClass:Yy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ma.familyPrefix&&(ma.cssPrefix=ma.familyPrefix);var vo=K(K({},Xy),ma);vo.autoReplaceSvg||(vo.observeMutations=!1);var Q={};Object.keys(Xy).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(n){vo[e]=n,va.forEach(function(r){return r(Q)})},get:function(){return vo[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){vo.cssPrefix=t,va.forEach(function(n){return n(Q)})},get:function(){return vo.cssPrefix}});Vr.FontAwesomeConfig=Q;var va=[];function _x(e){return va.push(e),function(){va.splice(va.indexOf(e),1)}}var gr=kd,Ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mx(e){if(!(!e||!dr)){var t=$e.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=$e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return $e.head.insertBefore(t,r),e}}var Rx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ha(){for(var e=12,t="";e-- >0;)t+=Rx[Math.random()*62|0];return t}function No(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function x0(e){return e.classList?No(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qy(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qy(e[n]),'" ')},"").trim()}function ec(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function A0(e){return e.size!==Ln.size||e.x!==Ln.x||e.y!==Ln.y||e.rotate!==Ln.rotate||e.flipX||e.flipY}function $x(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),u="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(u)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:f}}function Lx(e){var t=e.transform,n=e.width,r=n===void 0?kd:n,i=e.height,o=i===void 0?kd:i,a=e.startCentered,u=a===void 0?!1:a,s="";return u&&Hy?s+="translate(".concat(t.x/gr-r/2,"em, ").concat(t.y/gr-o/2,"em) "):u?s+="translate(calc(-50% + ".concat(t.x/gr,"em), calc(-50% + ").concat(t.y/gr,"em)) "):s+="translate(".concat(t.x/gr,"em, ").concat(t.y/gr,"em) "),s+="scale(".concat(t.size/gr*(t.flipX?-1:1),", ").concat(t.size/gr*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var jx=`:root, :host {
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
}`;function Zy(){var e=Wy,t=Yy,n=Q.cssPrefix,r=Q.replacementClass,i=jx;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),u=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(u,".".concat(r))}return i}var Rm=!1;function Kc(){Q.autoAddCss&&!Rm&&(Mx(Zy()),Rm=!0)}var zx={mixout:function(){return{dom:{css:Zy,insertCss:Kc}}},hooks:function(){return{beforeDOMElementCreation:function(){Kc()},beforeI2svg:function(){Kc()}}}},sr=Vr||{};sr[ur]||(sr[ur]={});sr[ur].styles||(sr[ur].styles={});sr[ur].hooks||(sr[ur].hooks={});sr[ur].shims||(sr[ur].shims=[]);var Sn=sr[ur],Jy=[],Vx=function e(){$e.removeEventListener("DOMContentLoaded",e),Js=1,Jy.map(function(t){return t()})},Js=!1;dr&&(Js=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),Js||$e.addEventListener("DOMContentLoaded",Vx));function Ux(e){dr&&(Js?setTimeout(e,0):Jy.push(e))}function ou(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Qy(e):"<".concat(t," ").concat(Bx(r),">").concat(o.map(ou).join(""),"</").concat(t,">")}function Bm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hx=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Xc=function(t,n,r,i){var o=Object.keys(t),a=o.length,u=i!==void 0?Hx(n,i):n,s,f,c;for(r===void 0?(s=1,c=t[o[0]]):(s=0,c=r);s<a;s++)f=o[s],c=u(c,t[f],f,t);return c};function Wx(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Od(e){var t=Wx(e);return t.length===1?t[0].toString(16):null}function Yx(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function $m(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=$m(t);typeof Sn.hooks.addPack=="function"&&!i?Sn.hooks.addPack(e,$m(t)):Sn.styles[e]=K(K({},Sn.styles[e]||{}),o),e==="fas"&&Pd("fa",t)}var Lu,ju,zu,Gi=Sn.styles,Gx=Sn.shims,qx=(Lu={},at(Lu,Re,Object.values(Va[Re])),at(Lu,He,Object.values(Va[He])),Lu),F0=null,e2={},t2={},n2={},r2={},i2={},Kx=(ju={},at(ju,Re,Object.keys(ja[Re])),at(ju,He,Object.keys(ja[He])),ju);function Xx(e){return~Ox.indexOf(e)}function Qx(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Xx(i)?i:null}var o2=function(){var t=function(o){return Xc(Gi,function(a,u,s){return a[s]=Xc(u,o,{}),a},{})};e2=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var u=o[2].filter(function(s){return typeof s=="number"});u.forEach(function(s){i[s.toString(16)]=a})}return i}),t2=t(function(i,o,a){if(i[a]=a,o[2]){var u=o[2].filter(function(s){return typeof s=="string"});u.forEach(function(s){i[s]=a})}return i}),i2=t(function(i,o,a){var u=o[2];return i[a]=a,u.forEach(function(s){i[s]=a}),i});var n="far"in Gi||Q.autoFetchSvg,r=Xc(Gx,function(i,o){var a=o[0],u=o[1],s=o[2];return u==="far"&&!n&&(u="fas"),typeof a=="string"&&(i.names[a]={prefix:u,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:u,iconName:s}),i},{names:{},unicodes:{}});n2=r.names,r2=r.unicodes,F0=tc(Q.styleDefault,{family:Q.familyDefault})};_x(function(e){F0=tc(e.styleDefault,{family:Q.familyDefault})});o2();function k0(e,t){return(e2[e]||{})[t]}function Zx(e,t){return(t2[e]||{})[t]}function ci(e,t){return(i2[e]||{})[t]}function a2(e){return n2[e]||{prefix:null,iconName:null}}function Jx(e){var t=r2[e],n=k0("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ur(){return F0}var N0=function(){return{prefix:null,iconName:null,rest:[]}};function tc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Re:n,i=ja[r][e],o=za[r][e]||za[r][i],a=e in Sn.styles?e:null;return o||a||null}var Lm=(zu={},at(zu,Re,Object.keys(Va[Re])),at(zu,He,Object.keys(Va[He])),zu);function nc(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},at(t,Re,"".concat(Q.cssPrefix,"-").concat(Re)),at(t,He,"".concat(Q.cssPrefix,"-").concat(He)),t),a=null,u=Re;(e.includes(o[Re])||e.some(function(f){return Lm[Re].includes(f)}))&&(u=Re),(e.includes(o[He])||e.some(function(f){return Lm[He].includes(f)}))&&(u=He);var s=e.reduce(function(f,c){var l=Qx(Q.cssPrefix,c);if(Gi[c]?(c=qx[u].includes(c)?Sx[u][c]:c,a=c,f.prefix=c):Kx[u].indexOf(c)>-1?(a=c,f.prefix=tc(c,{family:u})):l?f.iconName=l:c!==Q.replacementClass&&c!==o[Re]&&c!==o[He]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var d=a==="fa"?a2(f.iconName):{},p=ci(f.prefix,f.iconName);d.prefix&&(a=null),f.iconName=d.iconName||p||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!Gi.far&&Gi.fas&&!Q.autoFetchSvg&&(f.prefix="fas")}return f},N0());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&u===He&&(Gi.fass||Q.autoFetchSvg)&&(s.prefix="fass",s.iconName=ci(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=Ur()||"fas"),s}var e3=function(){function e(){dx(this,e),this.definitions={}}return px(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(u){n.definitions[u]=K(K({},n.definitions[u]||{}),a[u]),Pd(u,a[u]);var s=Va[Re][u];s&&Pd(s,a[u]),o2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],u=a.prefix,s=a.iconName,f=a.icon,c=f[2];n[u]||(n[u]={}),c.length>0&&c.forEach(function(l){typeof l=="string"&&(n[u][l]=f)}),n[u][s]=f}),n}}]),e}(),jm=[],qi={},io={},t3=Object.keys(io);function n3(e,t){var n=t.mixoutsTo;return jm=e,qi={},Object.keys(io).forEach(function(r){t3.indexOf(r)===-1&&delete io[r]}),jm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Zs(i[a])==="object"&&Object.keys(i[a]).forEach(function(u){n[a]||(n[a]={}),n[a][u]=i[a][u]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){qi[a]||(qi[a]=[]),qi[a].push(o[a])})}r.provides&&r.provides(io)}),n}function Id(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=qi[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Ei(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=qi[e]||[];i.forEach(function(o){o.apply(null,n)})}function lr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return io[e]?io[e].apply(null,t):void 0}function Td(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ur();if(t)return t=ci(n,t)||t,Bm(u2.definitions,n,t)||Bm(Sn.styles,n,t)}var u2=new e3,r3=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,Ei("noAuto")},i3={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(Ei("beforeI2svg",t),lr("pseudoElements2svg",t),lr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,Ux(function(){a3({autoReplaceSvgRoot:n}),Ei("watch",t)})}},o3={icon:function(t){if(t===null)return null;if(Zs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ci(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tc(t[0]);return{prefix:r,iconName:ci(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(Q.cssPrefix,"-"))>-1||t.match(xx))){var i=nc(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ur(),iconName:ci(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Ur();return{prefix:o,iconName:ci(o,t)||t}}}},un={noAuto:r3,config:Q,dom:i3,parse:o3,library:u2,findIconDefinition:Td,toHtml:ou},a3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?$e:n;(Object.keys(Sn.styles).length>0||Q.autoFetchSvg)&&dr&&Q.autoReplaceSvg&&un.dom.i2svg({node:r})};function rc(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ou(r)})}}),Object.defineProperty(e,"node",{get:function(){if(dr){var r=$e.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function u3(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(A0(a)&&n.found&&!r.found){var u=n.width,s=n.height,f={x:u/s/2,y:.5};i.style=ec(K(K({},o),{},{"transform-origin":"".concat(f.x+a.x/16,"em ").concat(f.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function s3(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(Q.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},i),{},{id:a}),children:r}]}]}function O0(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,u=e.symbol,s=e.title,f=e.maskId,c=e.titleId,l=e.extra,d=e.watchable,p=d===void 0?!1:d,h=r.found?r:n,v=h.width,y=h.height,m=i==="fak",g=[Q.replacementClass,o?"".concat(Q.cssPrefix,"-").concat(o):""].filter(function(P){return l.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(l.classes).join(" "),w={children:[],attributes:K(K({},l.attributes),{},{"data-prefix":i,"data-icon":o,class:g,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(y)})},E=m&&!~l.classes.indexOf("fa-fw")?{width:"".concat(v/y*16*.0625,"em")}:{};p&&(w.attributes[Di]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||Ha())},children:[s]}),delete w.attributes.title);var A=K(K({},w),{},{prefix:i,iconName:o,main:n,mask:r,maskId:f,transform:a,symbol:u,styles:K(K({},E),l.styles)}),k=r.found&&n.found?lr("generateAbstractMask",A)||{children:[],attributes:{}}:lr("generateAbstractIcon",A)||{children:[],attributes:{}},F=k.children,x=k.attributes;return A.children=F,A.attributes=x,u?s3(A):u3(A)}function zm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,u=e.watchable,s=u===void 0?!1:u,f=K(K(K({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(f[Di]="");var c=K({},a.styles);A0(i)&&(c.transform=Lx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var l=ec(c);l.length>0&&(f.style=l);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function l3(e){var t=e.content,n=e.title,r=e.extra,i=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ec(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Qc=Sn.styles;function _d(e){var t=e[0],n=e[1],r=e.slice(4),i=D0(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(li.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(li.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(li.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var c3={found:!1,width:512,height:512};function f3(e,t){!Gy&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Md(e,t){var n=t;return t==="fa"&&Q.styleDefault!==null&&(t=Ur()),new Promise(function(r,i){if(lr("missingIconAbstract"),n==="fa"){var o=a2(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Qc[t]&&Qc[t][e]){var a=Qc[t][e];return r(_d(a))}f3(e,t),r(K(K({},c3),{},{icon:Q.showMissingIcons&&e?lr("missingIconAbstract")||{}:{}}))})}var Vm=function(){},Rd=Q.measurePerformance&&Tu&&Tu.mark&&Tu.measure?Tu:{mark:Vm,measure:Vm},na='FA "6.3.0"',d3=function(t){return Rd.mark("".concat(na," ").concat(t," begins")),function(){return s2(t)}},s2=function(t){Rd.mark("".concat(na," ").concat(t," ends")),Rd.measure("".concat(na," ").concat(t),"".concat(na," ").concat(t," begins"),"".concat(na," ").concat(t," ends"))},P0={begin:d3,end:s2},ss=function(){};function Um(e){var t=e.getAttribute?e.getAttribute(Di):null;return typeof t=="string"}function p3(e){var t=e.getAttribute?e.getAttribute(C0):null,n=e.getAttribute?e.getAttribute(b0):null;return t&&n}function h3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function m3(){if(Q.autoReplaceSvg===!0)return ls.replace;var e=ls[Q.autoReplaceSvg];return e||ls.replace}function v3(e){return $e.createElementNS("http://www.w3.org/2000/svg",e)}function g3(e){return $e.createElement(e)}function l2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?v3:g3:n;if(typeof e=="string")return $e.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(l2(a,{ceFn:r}))}),i}function y3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ls={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(l2(i),n)}),n.getAttribute(Di)===null&&Q.keepOriginalSource){var r=$e.createComment(y3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~x0(n).indexOf(Q.replacementClass))return ls.replace(t);var i=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(u,s){return s===Q.replacementClass||s.match(i)?u.toSvg.push(s):u.toNode.push(s),u},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(u){return ou(u)}).join(`
`);n.setAttribute(Di,""),n.innerHTML=a}};function Hm(e){e()}function c2(e,t){var n=typeof t=="function"?t:ss;if(e.length===0)n();else{var r=Hm;Q.mutateApproach===Cx&&(r=Vr.requestAnimationFrame||Hm),r(function(){var i=m3(),o=P0.begin("mutate");e.map(i),o(),n()})}}var I0=!1;function f2(){I0=!0}function Bd(){I0=!1}var el=null;function Wm(e){if(_m&&Q.observeMutations){var t=e.treeCallback,n=t===void 0?ss:t,r=e.nodeCallback,i=r===void 0?ss:r,o=e.pseudoElementsCallback,a=o===void 0?ss:o,u=e.observeMutationsRoot,s=u===void 0?$e:u;el=new _m(function(f){if(!I0){var c=Ur();No(f).forEach(function(l){if(l.type==="childList"&&l.addedNodes.length>0&&!Um(l.addedNodes[0])&&(Q.searchPseudoElements&&a(l.target),n(l.target)),l.type==="attributes"&&l.target.parentNode&&Q.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Um(l.target)&&~Nx.indexOf(l.attributeName))if(l.attributeName==="class"&&p3(l.target)){var d=nc(x0(l.target)),p=d.prefix,h=d.iconName;l.target.setAttribute(C0,p||c),h&&l.target.setAttribute(b0,h)}else h3(l.target)&&i(l.target)})}}),dr&&el.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function w3(){el&&el.disconnect()}function D3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],u=o.slice(1);return a&&u.length>0&&(r[a]=u.join(":").trim()),r},{})),n}function E3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=nc(x0(e));return i.prefix||(i.prefix=Ur()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Zx(i.prefix,e.innerText)||k0(i.prefix,Od(e.innerText))),!i.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function C3(e){var t=No(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?t["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||Ha()):(t["aria-hidden"]="true",t.focusable="false")),t}function b3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=E3(e),r=n.iconName,i=n.prefix,o=n.rest,a=C3(e),u=Id("parseNodeAttributes",{},e),s=t.styleParser?D3(e):[];return K({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},u)}var S3=Sn.styles;function d2(e){var t=Q.autoReplaceSvg==="nest"?Ym(e,{styleParser:!1}):Ym(e);return~t.extra.classes.indexOf(qy)?lr("generateLayersText",e,t):lr("generateSvgReplacementMutation",e,t)}var Hr=new Set;S0.map(function(e){Hr.add("fa-".concat(e))});Object.keys(ja[Re]).map(Hr.add.bind(Hr));Object.keys(ja[He]).map(Hr.add.bind(Hr));Hr=ru(Hr);function Gm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();var n=$e.documentElement.classList,r=function(l){return n.add("".concat(Mm,"-").concat(l))},i=function(l){return n.remove("".concat(Mm,"-").concat(l))},o=Q.autoFetchSvg?Hr:S0.map(function(c){return"fa-".concat(c)}).concat(Object.keys(S3));o.includes("fa")||o.push("fa");var a=[".".concat(qy,":not([").concat(Di,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Di,"])")})).join(", ");if(a.length===0)return Promise.resolve();var u=[];try{u=No(e.querySelectorAll(a))}catch{}if(u.length>0)r("pending"),i("complete");else return Promise.resolve();var s=P0.begin("onTree"),f=u.reduce(function(c,l){try{var d=d2(l);d&&c.push(d)}catch(p){Gy||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,l){Promise.all(f).then(function(d){c2(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(d){s(),l(d)})})}function x3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d2(e).then(function(n){n&&c2([n],t)})}function A3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Td(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Td(i||{})),e(r,K(K({},n),{},{mask:i}))}}var F3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ln:r,o=n.symbol,a=o===void 0?!1:o,u=n.mask,s=u===void 0?null:u,f=n.maskId,c=f===void 0?null:f,l=n.title,d=l===void 0?null:l,p=n.titleId,h=p===void 0?null:p,v=n.classes,y=v===void 0?[]:v,m=n.attributes,g=m===void 0?{}:m,w=n.styles,E=w===void 0?{}:w;if(t){var A=t.prefix,k=t.iconName,F=t.icon;return rc(K({type:"icon"},t),function(){return Ei("beforeDOMElementCreation",{iconDefinition:t,params:n}),Q.autoA11y&&(d?g["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(h||Ha()):(g["aria-hidden"]="true",g.focusable="false")),O0({icons:{main:_d(F),mask:s?_d(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:K(K({},Ln),i),symbol:a,title:d,maskId:c,titleId:h,extra:{attributes:g,styles:E,classes:y}})})}},k3={mixout:function(){return{icon:A3(F3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gm,n.nodeCallback=x3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?$e:r,o=n.callback,a=o===void 0?function(){}:o;return Gm(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,u=r.prefix,s=r.transform,f=r.symbol,c=r.mask,l=r.maskId,d=r.extra;return new Promise(function(p,h){Promise.all([Md(i,u),c.iconName?Md(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=D0(v,2),m=y[0],g=y[1];p([n,O0({icons:{main:m,mask:g},prefix:u,iconName:i,transform:s,symbol:f,maskId:l,title:o,titleId:a,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,u=n.styles,s=ec(u);s.length>0&&(i.style=s);var f;return A0(a)&&(f=lr("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:i}}}},N3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return rc({type:"layer"},function(){Ei("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(u){Array.isArray(u)?u.map(function(s){a=a.concat(s.abstract)}):a=a.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(ru(o)).join(" ")},children:a}]})}}}},O3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,u=a===void 0?[]:a,s=r.attributes,f=s===void 0?{}:s,c=r.styles,l=c===void 0?{}:c;return rc({type:"counter",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),l3({content:n.toString(),title:o,extra:{attributes:f,styles:l,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(ru(u))}})})}}}},P3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Ln:i,a=r.title,u=a===void 0?null:a,s=r.classes,f=s===void 0?[]:s,c=r.attributes,l=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return rc({type:"text",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),zm({content:n,transform:K(K({},Ln),o),title:u,extra:{attributes:l,styles:p,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(ru(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,u=null,s=null;if(Hy){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();u=c.width/f,s=c.height/f}return Q.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,zm({content:n.innerHTML,width:u,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},I3=new RegExp('"',"ug"),qm=[1105920,1112319];function T3(e){var t=e.replace(I3,""),n=Yx(t,0),r=n>=qm[0]&&n<=qm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Od(i?t[0]:t),isSecondary:r||i}}function Km(e,t){var n="".concat(Ex).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=No(e.children),a=o.filter(function(F){return F.getAttribute(Nd)===t})[0],u=Vr.getComputedStyle(e,t),s=u.getPropertyValue("font-family").match(Ax),f=u.getPropertyValue("font-weight"),c=u.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&c!=="none"&&c!==""){var l=u.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?He:Re,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?za[d][s[2].toLowerCase()]:Fx[d][f],h=T3(l),v=h.value,y=h.isSecondary,m=s[0].startsWith("FontAwesome"),g=k0(p,v),w=g;if(m){var E=Jx(v);E.iconName&&E.prefix&&(g=E.iconName,p=E.prefix)}if(g&&!y&&(!a||a.getAttribute(C0)!==p||a.getAttribute(b0)!==w)){e.setAttribute(n,w),a&&e.removeChild(a);var A=b3(),k=A.extra;k.attributes[Nd]=t,Md(g,p).then(function(F){var x=O0(K(K({},A),{},{icons:{main:F,mask:N0()},prefix:p,iconName:w,extra:k,watchable:!0})),P=$e.createElement("svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=x.map(function(G){return ou(G)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _3(e){return Promise.all([Km(e,"::before"),Km(e,"::after")])}function M3(e){return e.parentNode!==document.head&&!~bx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xm(e){if(dr)return new Promise(function(t,n){var r=No(e.querySelectorAll("*")).filter(M3).map(_3),i=P0.begin("searchPseudoElements");f2(),Promise.all(r).then(function(){i(),Bd(),t()}).catch(function(){i(),Bd(),n()})})}var R3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?$e:r;Q.searchPseudoElements&&Xm(i)}}},Qm=!1,B3={mixout:function(){return{dom:{unwatch:function(){f2(),Qm=!0}}}},hooks:function(){return{bootstrap:function(){Wm(Id("mutationObserverCallbacks",{}))},noAuto:function(){w3()},watch:function(n){var r=n.observeMutationsRoot;Qm?Bd():Wm(Id("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Zm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],u=o.slice(1).join("-");if(a&&u==="h")return r.flipX=!0,r;if(a&&u==="v")return r.flipY=!0,r;if(u=parseFloat(u),isNaN(u))return r;switch(a){case"grow":r.size=r.size+u;break;case"shrink":r.size=r.size-u;break;case"left":r.x=r.x-u;break;case"right":r.x=r.x+u;break;case"up":r.y=r.y-u;break;case"down":r.y=r.y+u;break;case"rotate":r.rotate=r.rotate+u;break}return r},n)},$3={mixout:function(){return{parse:{transform:function(n){return Zm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Zm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,u={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),l={transform:"".concat(s," ").concat(f," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},p={outer:u,inner:l,path:d};return{tag:"g",attributes:K({},p.outer),children:[{tag:"g",attributes:K({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),p.path)}]}]}}}},Zc={x:0,y:0,width:"100%",height:"100%"};function Jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function L3(e){return e.tag==="g"?e.children:[e]}var j3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?nc(i.split(" ").map(function(a){return a.trim()})):N0();return o.prefix||(o.prefix=Ur()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,u=n.maskId,s=n.transform,f=o.width,c=o.icon,l=a.width,d=a.icon,p=$x({transform:s,containerWidth:l,iconWidth:f}),h={tag:"rect",attributes:K(K({},Zc),{},{fill:"white"})},v=c.children?{children:c.children.map(Jm)}:{},y={tag:"g",attributes:K({},p.inner),children:[Jm(K({tag:c.tag,attributes:K(K({},c.attributes),p.path)},v))]},m={tag:"g",attributes:K({},p.outer),children:[y]},g="mask-".concat(u||Ha()),w="clip-".concat(u||Ha()),E={tag:"mask",attributes:K(K({},Zc),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,m]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:L3(d)},E]};return r.push(A,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(g,")")},Zc)}),{children:r,attributes:i}}}},z3={provides:function(t){var n=!1;Vr.matchMedia&&(n=Vr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=K(K({},o),{},{attributeName:"opacity"}),u={tag:"circle",attributes:K(K({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||u.children.push({tag:"animate",attributes:K(K({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(u),r.push({tag:"path",attributes:K(K({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},V3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},U3=[zx,k3,N3,O3,P3,R3,B3,$3,j3,z3,V3];n3(U3,{mixoutsTo:un});un.noAuto;un.config;un.library;un.dom;var $d=un.parse;un.findIconDefinition;un.toHtml;var H3=un.icon;un.layer;un.text;un.counter;var ve={},W3={get exports(){return ve},set exports(e){ve=e}},Y3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G3=Y3,q3=G3;function p2(){}function h2(){}h2.resetWarningCache=p2;var K3=function(){function e(r,i,o,a,u,s){if(s!==q3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h2,resetWarningCache:p2};return n.PropTypes=n,n};W3.exports=K3();function e1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?e1(Object(n),!0).forEach(function(r){Ki(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):e1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tl(e){return tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tl(e)}function Ki(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Q3(e,t){if(e==null)return{};var n=X3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ld(e){return Z3(e)||J3(e)||eA(e)||tA()}function Z3(e){if(Array.isArray(e))return jd(e)}function J3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eA(e,t){if(e){if(typeof e=="string")return jd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jd(e,t)}}function jd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nA(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,u=e.flash,s=e.spin,f=e.spinPulse,c=e.spinReverse,l=e.pulse,d=e.fixedWidth,p=e.inverse,h=e.border,v=e.listItem,y=e.flip,m=e.size,g=e.rotation,w=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":u,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":l,"fa-fw":d,"fa-inverse":p,"fa-border":h,"fa-li":v,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},Ki(t,"fa-".concat(m),typeof m<"u"&&m!==null),Ki(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),Ki(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Ki(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(A){return E[A]?A:null}).filter(function(A){return A})}function rA(e){return e=e-0,e===e}function m2(e){return rA(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var iA=["style"];function oA(e){return e.charAt(0).toUpperCase()+e.slice(1)}function aA(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=m2(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[oA(i)]=o:t[i]=o,t},{})}function v2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return v2(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,f){var c=t.attributes[f];switch(f){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=aA(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?s.attrs[f.toLowerCase()]=c:s.attrs[m2(f)]=c}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,u=Q3(n,iA);return i.attrs.style=Fr(Fr({},i.attrs.style),a),e.apply(void 0,[t.tag,Fr(Fr({},i.attrs),u)].concat(Ld(r)))}var g2=!1;try{g2=!0}catch{}function uA(){if(!g2&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function t1(e){if(e&&tl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($d.icon)return $d.icon(e);if(e===null)return null;if(e&&tl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Jc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ki({},e,t):{}}var wt=cr.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,u=e.titleId,s=e.maskId,f=t1(n),c=Jc("classes",[].concat(Ld(nA(e)),Ld(o.split(" ")))),l=Jc("transform",typeof e.transform=="string"?$d.transform(e.transform):e.transform),d=Jc("mask",t1(r)),p=H3(f,Fr(Fr(Fr(Fr({},c),l),d),{},{symbol:i,title:a,titleId:u,maskId:s}));if(!p)return uA("Could not find icon",f),null;var h=p.abstract,v={ref:t};return Object.keys(e).forEach(function(y){wt.defaultProps.hasOwnProperty(y)||(v[y]=e[y])}),sA(h[0],v)});wt.displayName="FontAwesomeIcon";wt.propTypes={beat:ve.bool,border:ve.bool,beatFade:ve.bool,bounce:ve.bool,className:ve.string,fade:ve.bool,flash:ve.bool,mask:ve.oneOfType([ve.object,ve.array,ve.string]),maskId:ve.string,fixedWidth:ve.bool,inverse:ve.bool,flip:ve.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ve.oneOfType([ve.object,ve.array,ve.string]),listItem:ve.bool,pull:ve.oneOf(["right","left"]),pulse:ve.bool,rotation:ve.oneOf([0,90,180,270]),shake:ve.bool,size:ve.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ve.bool,spinPulse:ve.bool,spinReverse:ve.bool,symbol:ve.oneOfType([ve.bool,ve.string]),title:ve.string,titleId:ve.string,transform:ve.oneOfType([ve.string,ve.object]),swapOpacity:ve.bool};wt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sA=v2.bind(null,cr.createElement),lA={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},zd={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},n1={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},cA={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const Oo=S.createContext({});function fA({children:e}){const[t,n]=S.useState({dietaryPref:[{dietPrefId:"abc",displayName:"diet name",tag:"tag in data"}],caloricPref:2e3,email:"email@email.com",username:"username HERE",avatar:"URL OF AVATAR",id:"00000"}),[r,i]=S.useState(!1),o={userProfile:t,setUserProfile:n,isLoggedIn:r,setIsLoggedIn:i};return D(Oo.Provider,{value:o,children:e})}const dA=()=>{const[e,t]=S.useState(!1),{isLoggedIn:n,userProfile:r}=S.useContext(Oo),i=()=>{t(!e),console.log(`Nav Open: ${e}`),console.log(`Cross: ${e}`)},o=()=>{Qs.remove("loggedIn"),navigate("/login")};return D(lx,{className:"main-nav",children:n?D(Wn,{children:_("div",{className:"nav-bar",children:[D(kt,{className:"page",to:"/",activeclassname:"active",children:D("img",{className:"logo",src:cx,alt:"PantryPal Egg logo"})}),_("div",{className:"nav-item-container",children:[D(kt,{className:"page nav-item",to:"/search",children:"Search"}),D(kt,{className:"page nav-item",to:"/saved",children:"Saved"}),D(kt,{className:"page nav-item",to:"/mealPlanner",children:"Meal Planner"})]}),_("div",{className:"user-container",children:[D(kt,{className:"page nav-item ",to:"/login",onClick:o,children:"Logout"}),D(kt,{className:"page nav-item",to:"/profile",children:D(wt,{icon:zd,className:"userIcon"})})]}),_(kt,{className:e?"hamburger close":"hamburger",onClick:i,children:[D("span",{className:"meat"}),D("span",{className:"meat"}),D("span",{className:"meat"}),D("span",{className:"meat"})]}),D("nav",{className:e?"mobile-nav-container mobile-height":"mobile-nav-container",children:e&&_("nav",{className:"nav-width",children:[D(kt,{className:"mobile-nav toggleNav && 'active'",to:"/search",onClick:i,children:"Search"}),D(kt,{className:"mobile-nav",to:"/saved",onClick:i,children:"Saved"}),D(kt,{className:"mobile-nav",to:"/mealPlanner",onClick:i,children:"Meal Planner"}),D(kt,{className:"mobile-nav",to:"/login",onClick:o,children:"Logout"}),D(kt,{className:"page mobile-nav",to:"/profile",onClick:i,children:D(wt,{icon:zd,className:"userIcon mobile-nav"})})]})})]})}):D(Wn,{})})},T0="/assets/PantryPalAvo-64f88421.png";let Oi="#2C4001",pA="#F2E7AE",ef="#F2F2F2";const hA=bt.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: ${Oi};

    .about-container{
        width: 85%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
        background: ${ef};
        border-radius: 15px;
        border: 1px solid ${Oi};
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
        background: ${Oi};
        color: ${ef};
        border: 1px solid ${ef};
        padding: .5em;
        border-radius: 5px;
    }
    .linkItem:hover {
        text-decoration: none;
        color: ${Oi};
        background: ${pA};
        border: 1px solid ${Oi};
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
        color: ${Oi};
    }

    a:hover {
        text-decoration: underline;
    }

    .repo {
       display: flex;
       justify-content: center;
       align-items: center;
    }

    @media ${it.mobileS} { 
        min-width: 200px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${it.mobileM} { 
        min-width: 320px;
        h1 {
            font-size: .8rem;
        }
    }
      
    @media ${it.mobileL} { 
        min-width: 375px;
        h1 {
            font-size: 1rem;    
        }
    }
      
    @media ${it.tablet} { 
        min-width: 425px;
        .about-container{
            max-width: 500px;
        }
        .logo{
            width: 40%;
        }
    }

`;var Wo={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},mA={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const vA=()=>D(hA,{children:_("section",{className:"about-container",children:[D("img",{className:"logo",src:T0,alt:"Pantry Pal Logo"}),_("section",{children:[D("p",{children:_("section",{className:"about",children:[D("p",{children:"This project was organized by Danny Thompson and Scott Thompson of Dallas Software Developers"}),D("span",{children:"It was developed by:"}),_("ul",{children:[D("li",{children:_("a",{href:"https://www.linkedin.com/in/jesusdoza/",target:"_blank",children:[D(wt,{icon:Wo,className:"fontIcon"}),"Jesus Mendoza"]})}),D("li",{children:_("a",{href:"https://www.linkedin.com/in/damianpad/",target:"_blank",children:[D(wt,{icon:Wo,className:"fontIcon"}),"Damian Padilla"]})}),D("li",{children:_("a",{href:"https://www.linkedin.com/in/amandapurcellperry/",target:"_blank",children:[D(wt,{icon:Wo,className:"fontIcon"}),"Amanda Perry"]})}),D("li",{children:_("a",{href:"https://www.linkedin.com/in/walter-williams/",target:"_blank",children:[D(wt,{icon:Wo,className:"fontIcon"}),"Walter Williams"]})})]}),_("span",{children:["Team Lead:"," ",_("a",{href:"https://www.linkedin.com/in/bethanyann/",target:"_blank",children:[D(wt,{icon:Wo,className:"fontIcon"}),"Bethany Ann"]})]}),D("p",{children:'With Pantry Pal, you can bid farewell to the question, "What can I make with the ingredients I have?" This app empowers you to create delicious and satisfying recipes using the ingredients already available in your pantry. Simply input the ingredients you have on hand, and the app swiftly sifts through its comprehensive database to generate a personalized list of recipes that you can whip up in no time.'})]})}),_("div",{className:"linkContainer",children:[D(kt,{className:"page linkItem",to:"/signup",children:"SignUp"}),D(kt,{className:"page linkItem",to:"/login",children:"Login"})]}),_("a",{href:"https://github.com/jesusdoza/pantryPal",target:"_blank",className:"repo",children:[D(wt,{icon:mA,className:"fontIcon"}),"Github Repo"]})]})]})});let ei="#2C4001",gA="#dae082",yA="#F2E7AE",tf="#F2F2F2";const wA=bt.section`

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
        color: ${ei};
        margin: 0 auto;
    }

    .title h1{
        font-size: 1.6em;
        color: ${ei};
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
        border: 1px solid ${ei};
        padding: .5em;
        background: ${tf};
        border-radius: 5px;
        color: #3c3b3b;
    }

    & form input:focus {
        background-color: ${yA};
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
        border: 1px solid ${ei};
        border-radius: 5px;
        padding: .5em;
        background: ${ei};
        color: ${tf};
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    .signup-btn:hover {
        background: ${gA};
        color: ${ei};
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
    @media ${it.tablet} {
        .logo{
            width: 30%;
        }
        form{
            margin: 0 auto;
            width: 80%;
        }
    }
    @media ${it.laptop} {
        margin-top: 3em;
        .signup-container{
            background: ${tf};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${ei};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }
        .logo{
            width: 50%;
        }
`;function DA(){const e="http://localhost:4000",t=S.useRef(""),n=S.useRef(""),r=S.useRef(""),i=S.useRef("");let o=t.current.value,a=n.current.value,u=r.current.value,s=i.current.value;const[f,c]=S.useState(!1),[l,d]=S.useState([]),[p,h]=S.useState(!1),[v,y]=S.useState(!1),[m,g]=S.useState(!1),w=Tl();function E(F){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(F)}function A(){let F=[];return!E(s)&&s&&(y(!0),F.push("email format invalid")),a!==u&&(g(!0),F.push("passwords do not match")),F.length>0?(c(!0),F):[]}async function k(){c(!1);const F=A();if(F.length>0){d(F);return}try{const x=await fetch(`${e}/api/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,username:o,password:a})});if(x.status==401)throw Error("Username and/or Email already exists");if(x.status!=201)throw Error(`server response error ${x.statusText}`)}catch(x){c(!0),d([x.message]);return}try{const x=await fetch(`${e}/api/login`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:a})});if(x.status===200){const P=await x.json();Qs.set("loggedIn",{token:P.token,username:o})}else throw Error(x.statusText)}catch(x){c(!0),d([x.message]);return}w("/search")}return D(wA,{children:_("section",{className:"signup-container",children:[D("div",{children:D("img",{src:T0,alt:"Pantry Pal Logo",className:"logo"})}),_("section",{className:"form-sect",children:[_("form",{action:"#",onSubmit:F=>{F.preventDefault(),k()},children:[_("div",{className:"title",children:[D("h1",{children:"Welcome to Pantry Pal!"}),D("h2",{children:"Sign Up Here"})]}),_("div",{className:"input-container",children:[v&&D("span",{className:"error-marker",children:"*"}),D("label",{className:"input-tag",htmlFor:"email"}),D("input",{placeholder:"Email",className:v?"error-container":"",ref:i,onChange:F=>{s=F.target.value,y(!1)},id:"email",type:"text",required:!0}),v&&D("span",{className:"error-marker",children:"*"})]}),_("div",{className:"input-container",children:[p&&D("span",{className:"error-marker",children:"*"}),D("label",{className:"input-tag",htmlFor:"username"}),D("input",{placeholder:"Username",className:p?"error-container":"",ref:t,onChange:F=>{o=F.target.value},id:"username",type:"text",required:!0}),p&&D("span",{className:"error-marker",children:"*"})]}),_("div",{className:"input-container",children:[m&&D("span",{className:"error-marker",children:"*"}),D("label",{className:"input-tag",htmlFor:"password"}),D("input",{placeholder:"Password",className:m?"error-container":"",ref:n,onChange:F=>{a=F.target.value,g(!1)},id:"password",type:"password",required:!0}),m&&D("span",{className:"error-marker",children:"*"})]}),_("div",{className:"input-container",children:[m&&D("span",{className:"error-marker",children:"*"}),D("label",{htmlFor:"confirmpassword",className:"input-tag"}),D("input",{placeholder:"Confirm Password",className:m?"error-container":"",ref:r,onChange:F=>{u=F.target.value,g(!1)},id:"confirmpassword",type:"password",required:!0}),m&&D("span",{className:"error-marker",children:"*"})]}),D("div",{className:"submit-btn-container",children:D("button",{className:"signup-btn",children:"Sign Up"})})]}),f&&D("section",{className:"error-container error-desc",children:_("div",{children:[D("h4",{children:"Please correct following errors"}),D("ul",{children:l.map((F,x)=>D("li",{children:F},x))})]})})]}),_("div",{className:"goto-btn",children:[D("span",{children:"Already have an account?"}),D(kt,{className:"page",to:"/login",children:"Sign in"})]})]})})}let Yo="#2C4001",EA="#F2E7AE";const CA=bt.section`
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
        color: ${Yo};
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
        background-color: ${Yo};
        color: #fff;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        border-radius: .5em;
        cursor: pointer;
        
        margin: .3em 0;
        border: 1px solid ${Yo};
    }
    & .search-btn: hover {
        background: ${EA};
        color: ${Yo};
        border: 1px solid ${Yo};
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

    
`;function y2(e,t){return function(){return e.apply(t,arguments)}}const{toString:w2}=Object.prototype,{getPrototypeOf:_0}=Object,M0=(e=>t=>{const n=w2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pr=e=>(e=e.toLowerCase(),t=>M0(t)===e),ic=e=>t=>typeof t===e,{isArray:Po}=Array,Wa=ic("undefined");function bA(e){return e!==null&&!Wa(e)&&e.constructor!==null&&!Wa(e.constructor)&&Wr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const D2=pr("ArrayBuffer");function SA(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&D2(e.buffer),t}const xA=ic("string"),Wr=ic("function"),E2=ic("number"),R0=e=>e!==null&&typeof e=="object",AA=e=>e===!0||e===!1,cs=e=>{if(M0(e)!=="object")return!1;const t=_0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},FA=pr("Date"),kA=pr("File"),NA=pr("Blob"),OA=pr("FileList"),PA=e=>R0(e)&&Wr(e.pipe),IA=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||w2.call(e)===t||Wr(e.toString)&&e.toString()===t)},TA=pr("URLSearchParams"),_A=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function au(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Po(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let u;for(r=0;r<a;r++)u=o[r],t.call(null,e[u],u,e)}}function C2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const b2=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),S2=e=>!Wa(e)&&e!==b2;function Vd(){const{caseless:e}=S2(this)&&this||{},t={},n=(r,i)=>{const o=e&&C2(t,i)||i;cs(t[o])&&cs(r)?t[o]=Vd(t[o],r):cs(r)?t[o]=Vd({},r):Po(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&au(arguments[r],n);return t}const MA=(e,t,n,{allOwnKeys:r}={})=>(au(t,(i,o)=>{n&&Wr(i)?e[o]=y2(i,n):e[o]=i},{allOwnKeys:r}),e),RA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),BA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$A=(e,t,n,r)=>{let i,o,a;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!u[a]&&(t[a]=e[a],u[a]=!0);e=n!==!1&&_0(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},LA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jA=e=>{if(!e)return null;if(Po(e))return e;let t=e.length;if(!E2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_0(Uint8Array)),VA=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},UA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},HA=pr("HTMLFormElement"),WA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),r1=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),YA=pr("RegExp"),x2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};au(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},GA=e=>{x2(e,(t,n)=>{if(Wr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Wr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qA=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Po(e)?r(e):r(String(e).split(t)),n},KA=()=>{},XA=(e,t)=>(e=+e,Number.isFinite(e)?e:t),nf="abcdefghijklmnopqrstuvwxyz",i1="0123456789",A2={DIGIT:i1,ALPHA:nf,ALPHA_DIGIT:nf+nf.toUpperCase()+i1},QA=(e=16,t=A2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ZA(e){return!!(e&&Wr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const JA=e=>{const t=new Array(10),n=(r,i)=>{if(R0(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Po(r)?[]:{};return au(r,(a,u)=>{const s=n(a,i+1);!Wa(s)&&(o[u]=s)}),t[i]=void 0,o}}return r};return n(e,0)},I={isArray:Po,isArrayBuffer:D2,isBuffer:bA,isFormData:IA,isArrayBufferView:SA,isString:xA,isNumber:E2,isBoolean:AA,isObject:R0,isPlainObject:cs,isUndefined:Wa,isDate:FA,isFile:kA,isBlob:NA,isRegExp:YA,isFunction:Wr,isStream:PA,isURLSearchParams:TA,isTypedArray:zA,isFileList:OA,forEach:au,merge:Vd,extend:MA,trim:_A,stripBOM:RA,inherits:BA,toFlatObject:$A,kindOf:M0,kindOfTest:pr,endsWith:LA,toArray:jA,forEachEntry:VA,matchAll:UA,isHTMLForm:HA,hasOwnProperty:r1,hasOwnProp:r1,reduceDescriptors:x2,freezeMethods:GA,toObjectSet:qA,toCamelCase:WA,noop:KA,toFiniteNumber:XA,findKey:C2,global:b2,isContextDefined:S2,ALPHABET:A2,generateString:QA,isSpecCompliantForm:ZA,toJSONObject:JA};function xe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}I.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F2=xe.prototype,k2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{k2[e]={value:e}});Object.defineProperties(xe,k2);Object.defineProperty(F2,"isAxiosError",{value:!0});xe.from=(e,t,n,r,i,o)=>{const a=Object.create(F2);return I.toFlatObject(e,a,function(s){return s!==Error.prototype},u=>u!=="isAxiosError"),xe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const e4=null;function Ud(e){return I.isPlainObject(e)||I.isArray(e)}function N2(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function o1(e,t,n){return e?e.concat(t).map(function(i,o){return i=N2(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function t4(e){return I.isArray(e)&&!e.some(Ud)}const n4=I.toFlatObject(I,{},null,function(t){return/^is[A-Z]/.test(t)});function oc(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!I.isUndefined(y[v])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(i))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(I.isDate(h))return h.toISOString();if(!s&&I.isBlob(h))throw new xe("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(h)||I.isTypedArray(h)?s&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,v,y){let m=h;if(h&&!y&&typeof h=="object"){if(I.endsWith(v,"{}"))v=r?v:v.slice(0,-2),h=JSON.stringify(h);else if(I.isArray(h)&&t4(h)||(I.isFileList(h)||I.endsWith(v,"[]"))&&(m=I.toArray(h)))return v=N2(v),m.forEach(function(w,E){!(I.isUndefined(w)||w===null)&&t.append(a===!0?o1([v],E,o):a===null?v:v+"[]",f(w))}),!1}return Ud(h)?!0:(t.append(o1(y,v,o),f(h)),!1)}const l=[],d=Object.assign(n4,{defaultVisitor:c,convertValue:f,isVisitable:Ud});function p(h,v){if(!I.isUndefined(h)){if(l.indexOf(h)!==-1)throw Error("Circular reference detected in "+v.join("."));l.push(h),I.forEach(h,function(m,g){(!(I.isUndefined(m)||m===null)&&i.call(t,m,I.isString(g)?g.trim():g,v,d))===!0&&p(m,v?v.concat(g):[g])}),l.pop()}}if(!I.isObject(e))throw new TypeError("data must be an object");return p(e),t}function a1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function B0(e,t){this._pairs=[],e&&oc(e,this,t)}const O2=B0.prototype;O2.append=function(t,n){this._pairs.push([t,n])};O2.toString=function(t){const n=t?function(r){return t.call(this,r,a1)}:a1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function r4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function P2(e,t,n){if(!t)return e;const r=n&&n.encode||r4,i=n&&n.serialize;let o;if(i?o=i(t,n):o=I.isURLSearchParams(t)?t.toString():new B0(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class i4{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){I.forEach(this.handlers,function(r){r!==null&&t(r)})}}const u1=i4,I2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},o4=typeof URLSearchParams<"u"?URLSearchParams:B0,a4=typeof FormData<"u"?FormData:null,u4=typeof Blob<"u"?Blob:null,s4=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),l4=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),jn={isBrowser:!0,classes:{URLSearchParams:o4,FormData:a4,Blob:u4},isStandardBrowserEnv:s4,isStandardBrowserWebWorkerEnv:l4,protocols:["http","https","file","blob","url","data"]};function c4(e,t){return oc(e,new jn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return jn.isNode&&I.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function f4(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function d4(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function T2(e){function t(n,r,i,o){let a=n[o++];const u=Number.isFinite(+a),s=o>=n.length;return a=!a&&I.isArray(i)?i.length:a,s?(I.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!u):((!i[a]||!I.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&I.isArray(i[a])&&(i[a]=d4(i[a])),!u)}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,(r,i)=>{t(f4(r),i,n,0)}),n}return null}const p4={"Content-Type":void 0};function h4(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ac={transitional:I2,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=I.isObject(t);if(o&&I.isHTMLForm(t)&&(t=new FormData(t)),I.isFormData(t))return i&&i?JSON.stringify(T2(t)):t;if(I.isArrayBuffer(t)||I.isBuffer(t)||I.isStream(t)||I.isFile(t)||I.isBlob(t))return t;if(I.isArrayBufferView(t))return t.buffer;if(I.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return c4(t,this.formSerializer).toString();if((u=I.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return oc(u?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),h4(t)):t}],transformResponse:[function(t){const n=this.transitional||ac.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&I.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(a)throw u.name==="SyntaxError"?xe.from(u,xe.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jn.classes.FormData,Blob:jn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};I.forEach(["delete","get","head"],function(t){ac.headers[t]={}});I.forEach(["post","put","patch"],function(t){ac.headers[t]=I.merge(p4)});const $0=ac,m4=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),v4=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&m4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},s1=Symbol("internals");function Go(e){return e&&String(e).trim().toLowerCase()}function fs(e){return e===!1||e==null?e:I.isArray(e)?e.map(fs):String(e)}function g4(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function y4(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function rf(e,t,n,r,i){if(I.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function w4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function D4(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class uc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(u,s,f){const c=Go(s);if(!c)throw new Error("header name must be a non-empty string");const l=I.findKey(i,c);(!l||i[l]===void 0||f===!0||f===void 0&&i[l]!==!1)&&(i[l||s]=fs(u))}const a=(u,s)=>I.forEach(u,(f,c)=>o(f,c,s));return I.isPlainObject(t)||t instanceof this.constructor?a(t,n):I.isString(t)&&(t=t.trim())&&!y4(t)?a(v4(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Go(t),t){const r=I.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return g4(i);if(I.isFunction(n))return n.call(this,i,r);if(I.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Go(t),t){const r=I.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||rf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Go(a),a){const u=I.findKey(r,a);u&&(!n||rf(r,r[u],u,n))&&(delete r[u],i=!0)}}return I.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||rf(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return I.forEach(this,(i,o)=>{const a=I.findKey(r,o);if(a){n[a]=fs(i),delete n[o];return}const u=t?w4(o):String(o).trim();u!==o&&delete n[o],n[u]=fs(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return I.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&I.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[s1]=this[s1]={accessors:{}}).accessors,i=this.prototype;function o(a){const u=Go(a);r[u]||(D4(i,a),r[u]=!0)}return I.isArray(t)?t.forEach(o):o(t),this}}uc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);I.freezeMethods(uc.prototype);I.freezeMethods(uc);const tr=uc;function of(e,t){const n=this||$0,r=t||n,i=tr.from(r.headers);let o=r.data;return I.forEach(e,function(u){o=u.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function _2(e){return!!(e&&e.__CANCEL__)}function uu(e,t,n){xe.call(this,e??"canceled",xe.ERR_CANCELED,t,n),this.name="CanceledError"}I.inherits(uu,xe,{__CANCEL__:!0});function E4(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new xe("Request failed with status code "+n.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const C4=jn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,u){const s=[];s.push(n+"="+encodeURIComponent(r)),I.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),I.isString(o)&&s.push("path="+o),I.isString(a)&&s.push("domain="+a),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function b4(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S4(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function M2(e,t){return e&&!b4(t)?S4(e,t):t}const x4=jn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const u=I.isString(a)?i(a):a;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function A4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function F4(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const f=Date.now(),c=r[o];a||(a=f),n[i]=s,r[i]=f;let l=o,d=0;for(;l!==i;)d+=n[l++],l=l%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),f-a<t)return;const p=c&&f-c;return p?Math.round(d*1e3/p):void 0}}function l1(e,t){let n=0;const r=F4(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,u=o-n,s=r(u),f=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:s||void 0,estimated:s&&a&&f?(a-o)/s:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const k4=typeof XMLHttpRequest<"u",N4=k4&&function(e){return new Promise(function(n,r){let i=e.data;const o=tr.from(e.headers).normalize(),a=e.responseType;let u;function s(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}I.isFormData(i)&&(jn.isStandardBrowserEnv||jn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(p+":"+h))}const c=M2(e.baseURL,e.url);f.open(e.method.toUpperCase(),P2(c,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function l(){if(!f)return;const p=tr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),v={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:p,config:e,request:f};E4(function(m){n(m),s()},function(m){r(m),s()},v),f=null}if("onloadend"in f?f.onloadend=l:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(l)},f.onabort=function(){f&&(r(new xe("Request aborted",xe.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new xe("Network Error",xe.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||I2;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new xe(h,v.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,e,f)),f=null},jn.isStandardBrowserEnv){const p=(e.withCredentials||x4(c))&&e.xsrfCookieName&&C4.read(e.xsrfCookieName);p&&o.set(e.xsrfHeaderName,p)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&I.forEach(o.toJSON(),function(h,v){f.setRequestHeader(v,h)}),I.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),a&&a!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",l1(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",l1(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=p=>{f&&(r(!p||p.type?new uu(null,e,f):p),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const d=A4(c);if(d&&jn.protocols.indexOf(d)===-1){r(new xe("Unsupported protocol "+d+":",xe.ERR_BAD_REQUEST,e));return}f.send(i||null)})},ds={http:e4,xhr:N4};I.forEach(ds,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const O4={getAdapter:e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=I.isString(n)?ds[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new xe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(I.hasOwnProp(ds,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!I.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ds};function af(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new uu(null,e)}function c1(e){return af(e),e.headers=tr.from(e.headers),e.data=of.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),O4.getAdapter(e.adapter||$0.adapter)(e).then(function(r){return af(e),r.data=of.call(e,e.transformResponse,r),r.headers=tr.from(r.headers),r},function(r){return _2(r)||(af(e),r&&r.response&&(r.response.data=of.call(e,e.transformResponse,r.response),r.response.headers=tr.from(r.response.headers))),Promise.reject(r)})}const f1=e=>e instanceof tr?e.toJSON():e;function go(e,t){t=t||{};const n={};function r(f,c,l){return I.isPlainObject(f)&&I.isPlainObject(c)?I.merge.call({caseless:l},f,c):I.isPlainObject(c)?I.merge({},c):I.isArray(c)?c.slice():c}function i(f,c,l){if(I.isUndefined(c)){if(!I.isUndefined(f))return r(void 0,f,l)}else return r(f,c,l)}function o(f,c){if(!I.isUndefined(c))return r(void 0,c)}function a(f,c){if(I.isUndefined(c)){if(!I.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function u(f,c,l){if(l in t)return r(f,c);if(l in e)return r(void 0,f)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u,headers:(f,c)=>i(f1(f),f1(c),!0)};return I.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const l=s[c]||i,d=l(e[c],t[c],c);I.isUndefined(d)&&l!==u||(n[c]=d)}),n}const R2="1.3.4",L0={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{L0[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const d1={};L0.transitional=function(t,n,r){function i(o,a){return"[Axios v"+R2+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,u)=>{if(t===!1)throw new xe(i(a," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!d1[a]&&(d1[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,u):!0}};function P4(e,t,n){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const u=e[o],s=u===void 0||a(u,o,e);if(s!==!0)throw new xe("option "+o+" must be "+s,xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xe("Unknown option "+o,xe.ERR_BAD_OPTION)}}const Hd={assertOptions:P4,validators:L0},yr=Hd.validators;class nl{constructor(t){this.defaults=t,this.interceptors={request:new u1,response:new u1}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=go(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Hd.assertOptions(r,{silentJSONParsing:yr.transitional(yr.boolean),forcedJSONParsing:yr.transitional(yr.boolean),clarifyTimeoutError:yr.transitional(yr.boolean)},!1),i!==void 0&&Hd.assertOptions(i,{encode:yr.function,serialize:yr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&I.merge(o.common,o[n.method]),a&&I.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=tr.concat(a,o);const u=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(s=s&&v.synchronous,u.unshift(v.fulfilled,v.rejected))});const f=[];this.interceptors.response.forEach(function(v){f.push(v.fulfilled,v.rejected)});let c,l=0,d;if(!s){const h=[c1.bind(this),void 0];for(h.unshift.apply(h,u),h.push.apply(h,f),d=h.length,c=Promise.resolve(n);l<d;)c=c.then(h[l++],h[l++]);return c}d=u.length;let p=n;for(l=0;l<d;){const h=u[l++],v=u[l++];try{p=h(p)}catch(y){v.call(this,y);break}}try{c=c1.call(this,p)}catch(h){return Promise.reject(h)}for(l=0,d=f.length;l<d;)c=c.then(f[l++],f[l++]);return c}getUri(t){t=go(this.defaults,t);const n=M2(t.baseURL,t.url);return P2(n,t.params,t.paramsSerializer)}}I.forEach(["delete","get","head","options"],function(t){nl.prototype[t]=function(n,r){return this.request(go(r||{},{method:t,url:n,data:(r||{}).data}))}});I.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,u){return this.request(go(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}nl.prototype[t]=n(),nl.prototype[t+"Form"]=n(!0)});const ps=nl;class j0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(u=>{r.subscribe(u),o=u}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,u){r.reason||(r.reason=new uu(o,a,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new j0(function(i){t=i}),cancel:t}}}const I4=j0;function T4(e){return function(n){return e.apply(null,n)}}function _4(e){return I.isObject(e)&&e.isAxiosError===!0}const Wd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wd).forEach(([e,t])=>{Wd[t]=e});const M4=Wd;function B2(e){const t=new ps(e),n=y2(ps.prototype.request,t);return I.extend(n,ps.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return B2(go(e,i))},n}const ut=B2($0);ut.Axios=ps;ut.CanceledError=uu;ut.CancelToken=I4;ut.isCancel=_2;ut.VERSION=R2;ut.toFormData=oc;ut.AxiosError=xe;ut.Cancel=ut.CanceledError;ut.all=function(t){return Promise.all(t)};ut.spread=T4;ut.isAxiosError=_4;ut.mergeConfig=go;ut.AxiosHeaders=tr;ut.formToJSON=e=>T2(I.isHTMLForm(e)?new FormData(e):e);ut.HttpStatusCode=M4;ut.default=ut;const sc=ut;let Gn="#2C4001",p1="#F2E7AE",h1="#59320F",R4="#F2F2F2";const B4=bt.section`

padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
text-decoration: none;
border-bottom: 10px solid ${Gn};


.container {
  background-color: ${R4};
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
    background-color: ${Gn};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${Gn};

  }
  .try_btn:hover {
    background: ${p1};
    color: ${Gn};
    border: 1px solid ${Gn};
   
  }
  .save_btn {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    display: flex;
    align-items: center;
    background-color: ${h1};
    color: #fff;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${h1};
  }
  .save_btn: hover {
    background: ${p1};
    color: ${Gn};
    border: 1px solid ${Gn};
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
      color: ${Gn};
    }
    p {
      color: color: ${Gn};
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


`,$4=(e,t)=>{console.log("username",t);const n="http://localhost:4000";if(!t){alert("Please log in to save the recipe.");return}fetch(`${n}/api/saveRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe saved successfully!");else throw new Error("Failed to save the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to save the recipe.")})},L4=(e,t)=>{const n="http://localhost:4000";if(!t){alert("Please log in to delete the recipe.");return}fetch(`${n}/api/deleteRecipe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,recipe:e})}).then(r=>{if(r.ok)alert("Recipe deleted successfully!");else throw new Error("Failed to delete the recipe.")}).catch(r=>{console.error("Error:",r),alert("Failed to delete the recipe.")})},$2=({recipe:e,showDelete:t})=>{const n=o=>o.replace(/<\/?[^>]+(>|$)/g,"").split("If you like this recipe")[0].replace("Credit:",""),{isLoggedIn:r,userProfile:i}=S.useContext(Oo);return D(B4,{children:_("div",{className:"container",children:[D("img",{src:e.image,alt:e.title}),_("div",{className:"card_body",children:[D("h1",{children:e.title}),_("p",{children:[n(e.summary),"Credit: ",e.creditText]}),_("div",{className:"card_footer",children:[_("div",{className:"card_footer_container",children:[D("h2",{children:"Dish type:"}),_("p",{children:[" ",e.dishTypes[0]]})]}),_("div",{className:"card_footer_container",children:[D("h2",{children:"Servings:"}),_("p",{children:[" ",e.servings]})]}),_("div",{className:"card_footer_container",children:[D("h2",{children:"Total Time:"}),D("p",{children:e.readyInMinutes})]})]}),_("div",{className:"btn-container",children:[D(Cy,{to:"/details",state:{recipe:e},className:"try_btn",children:"Try it!"}),!t&&D("button",{className:"save_btn",onClick:()=>$4(e,i.username),children:"Save it!"}),t&&D("button",{className:"delete_btn",onClick:()=>L4(e,i.username),children:"Delete Recipe"})]})]})]})})},j4=bt.section`
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
`;function L2(){return D(j4,{children:D("span",{className:"loader"})})}let qo="#2C4001",m1="#F2E7AE",z4="#F2F2F2";const V4=bt.section`
    color: ${qo};
    background-color: ${m1};
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
        background-color: ${qo};
        color: ${z4};
        border: 1px solid ${qo};
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
        background-color: ${m1};
        color: ${qo};
        border: 1px solid ${qo};
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
`;function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function Ci(e){return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function U4(e,t){if(Ci(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ci(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function j2(e){var t=U4(e,"string");return Ci(t)==="symbol"?t:String(t)}function ra(e,t,n){return t=j2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v1(Object(n),!0).forEach(function(r){ra(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j2(r.key),r)}}function W4(e,t,n){return t&&g1(e.prototype,t),n&&g1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yd(e,t){return Yd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yd(e,t)}function Y4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Yd(e,t)}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rl(e)}function G4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function q4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K4(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q4(e)}function X4(e){var t=G4();return function(){var r=rl(e),i;if(t){var o=rl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return K4(this,i)}}function Gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q4(e){if(Array.isArray(e))return Gd(e)}function Z4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function z2(e,t){if(e){if(typeof e=="string")return Gd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gd(e,t)}}function J4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ga(e){return Q4(e)||Z4(e)||z2(e)||J4()}function eF(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function tF(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var nF=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(tF(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=eF(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ft="-ms-",il="-moz-",Fe="-webkit-",V2="comm",z0="rule",V0="decl",rF="@import",U2="@keyframes",iF="@layer",oF=Math.abs,lc=String.fromCharCode,aF=Object.assign;function uF(e,t){return yt(e,0)^45?(((t<<2^yt(e,0))<<2^yt(e,1))<<2^yt(e,2))<<2^yt(e,3):0}function H2(e){return e.trim()}function sF(e,t){return(e=t.exec(e))?e[0]:e}function ke(e,t,n){return e.replace(t,n)}function qd(e,t){return e.indexOf(t)}function yt(e,t){return e.charCodeAt(t)|0}function Ya(e,t,n){return e.slice(t,n)}function _n(e){return e.length}function U0(e){return e.length}function Vu(e,t){return t.push(e),e}function lF(e,t){return e.map(t).join("")}var cc=1,yo=1,W2=0,Gt=0,Xe=0,Io="";function fc(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:cc,column:yo,length:a,return:""}}function Ko(e,t){return aF(fc("",null,null,"",null,null,0),e,{length:-e.length},t)}function cF(){return Xe}function fF(){return Xe=Gt>0?yt(Io,--Gt):0,yo--,Xe===10&&(yo=1,cc--),Xe}function tn(){return Xe=Gt<W2?yt(Io,Gt++):0,yo++,Xe===10&&(yo=1,cc++),Xe}function Un(){return yt(Io,Gt)}function hs(){return Gt}function su(e,t){return Ya(Io,e,t)}function Ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y2(e){return cc=yo=1,W2=_n(Io=e),Gt=0,[]}function G2(e){return Io="",e}function ms(e){return H2(su(Gt-1,Kd(e===91?e+2:e===40?e+1:e)))}function dF(e){for(;(Xe=Un())&&Xe<33;)tn();return Ga(e)>2||Ga(Xe)>3?"":" "}function pF(e,t){for(;--t&&tn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return su(e,hs()+(t<6&&Un()==32&&tn()==32))}function Kd(e){for(;tn();)switch(Xe){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Kd(Xe);break;case 40:e===41&&Kd(e);break;case 92:tn();break}return Gt}function hF(e,t){for(;tn()&&e+Xe!==47+10;)if(e+Xe===42+42&&Un()===47)break;return"/*"+su(t,Gt-1)+"*"+lc(e===47?e:tn())}function mF(e){for(;!Ga(Un());)tn();return su(e,Gt)}function vF(e){return G2(vs("",null,null,null,[""],e=Y2(e),0,[0],e))}function vs(e,t,n,r,i,o,a,u,s){for(var f=0,c=0,l=a,d=0,p=0,h=0,v=1,y=1,m=1,g=0,w="",E=i,A=o,k=r,F=w;y;)switch(h=g,g=tn()){case 40:if(h!=108&&yt(F,l-1)==58){qd(F+=ke(ms(g),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:F+=ms(g);break;case 9:case 10:case 13:case 32:F+=dF(h);break;case 92:F+=pF(hs()-1,7);continue;case 47:switch(Un()){case 42:case 47:Vu(gF(hF(tn(),hs()),t,n),s);break;default:F+="/"}break;case 123*v:u[f++]=_n(F)*m;case 125*v:case 59:case 0:switch(g){case 0:case 125:y=0;case 59+c:m==-1&&(F=ke(F,/\f/g,"")),p>0&&_n(F)-l&&Vu(p>32?w1(F+";",r,n,l-1):w1(ke(F," ","")+";",r,n,l-2),s);break;case 59:F+=";";default:if(Vu(k=y1(F,t,n,f,c,i,u,w,E=[],A=[],l),o),g===123)if(c===0)vs(F,t,k,k,E,o,l,u,A);else switch(d===99&&yt(F,3)===110?100:d){case 100:case 108:case 109:case 115:vs(e,k,k,r&&Vu(y1(e,k,k,0,0,i,u,w,i,E=[],l),A),i,A,l,u,r?E:A);break;default:vs(F,k,k,k,[""],A,0,u,A)}}f=c=p=0,v=m=1,w=F="",l=a;break;case 58:l=1+_n(F),p=h;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&fF()==125)continue}switch(F+=lc(g),g*v){case 38:m=c>0?1:(F+="\f",-1);break;case 44:u[f++]=(_n(F)-1)*m,m=1;break;case 64:Un()===45&&(F+=ms(tn())),d=Un(),c=l=_n(w=F+=mF(hs())),g++;break;case 45:h===45&&_n(F)==2&&(v=0)}}return o}function y1(e,t,n,r,i,o,a,u,s,f,c){for(var l=i-1,d=i===0?o:[""],p=U0(d),h=0,v=0,y=0;h<r;++h)for(var m=0,g=Ya(e,l+1,l=oF(v=a[h])),w=e;m<p;++m)(w=H2(v>0?d[m]+" "+g:ke(g,/&\f/g,d[m])))&&(s[y++]=w);return fc(e,t,n,i===0?z0:u,s,f,c)}function gF(e,t,n){return fc(e,t,n,V2,lc(cF()),Ya(e,2,-2),0)}function w1(e,t,n,r){return fc(e,t,n,V0,Ya(e,0,r),Ya(e,r+1,-1),r)}function oo(e,t){for(var n="",r=U0(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function yF(e,t,n,r){switch(e.type){case iF:if(e.children.length)break;case rF:case V0:return e.return=e.return||e.value;case V2:return"";case U2:return e.return=e.value+"{"+oo(e.children,r)+"}";case z0:e.value=e.props.join(",")}return _n(n=oo(e.children,r))?e.return=e.value+"{"+n+"}":""}function wF(e){var t=U0(e);return function(n,r,i,o){for(var a="",u=0;u<t;u++)a+=e[u](n,r,i,o)||"";return a}}function DF(e){return function(t){t.root||(t=t.return)&&e(t)}}var EF=function(t,n,r){for(var i=0,o=0;i=o,o=Un(),i===38&&o===12&&(n[r]=1),!Ga(o);)tn();return su(t,Gt)},CF=function(t,n){var r=-1,i=44;do switch(Ga(i)){case 0:i===38&&Un()===12&&(n[r]=1),t[r]+=EF(Gt-1,n,r);break;case 2:t[r]+=ms(i);break;case 4:if(i===44){t[++r]=Un()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=lc(i)}while(i=tn());return t},bF=function(t,n){return G2(CF(Y2(t),n))},D1=new WeakMap,SF=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!D1.get(r))&&!i){D1.set(t,!0);for(var o=[],a=bF(n,o),u=r.props,s=0,f=0;s<a.length;s++)for(var c=0;c<u.length;c++,f++)t.props[f]=o[s]?a[s].replace(/&\f/g,u[c]):u[c]+" "+a[s]}}},xF=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function q2(e,t){switch(uF(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+il+e+Ft+e+e;case 6828:case 4268:return Fe+e+Ft+e+e;case 6165:return Fe+e+Ft+"flex-"+e+e;case 5187:return Fe+e+ke(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Ft+"flex-$1$2")+e;case 5443:return Fe+e+Ft+"flex-item-"+ke(e,/flex-|-self/,"")+e;case 4675:return Fe+e+Ft+"flex-line-pack"+ke(e,/align-content|flex-|-self/,"")+e;case 5548:return Fe+e+Ft+ke(e,"shrink","negative")+e;case 5292:return Fe+e+Ft+ke(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+ke(e,"-grow","")+Fe+e+Ft+ke(e,"grow","positive")+e;case 4554:return Fe+ke(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return ke(ke(ke(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return ke(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return ke(ke(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Ft+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4095:case 3583:case 4068:case 2532:return ke(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(e)-1-t>6)switch(yt(e,t+1)){case 109:if(yt(e,t+4)!==45)break;case 102:return ke(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+il+(yt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qd(e,"stretch")?q2(ke(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(yt(e,t+1)!==115)break;case 6444:switch(yt(e,_n(e)-3-(~qd(e,"!important")&&10))){case 107:return ke(e,":",":"+Fe)+e;case 101:return ke(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Fe+(yt(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Ft+"$2box$3")+e}break;case 5936:switch(yt(e,t+11)){case 114:return Fe+e+Ft+ke(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Ft+ke(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Ft+ke(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Fe+e+Ft+e+e}return e}var AF=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case V0:t.return=q2(t.value,t.length);break;case U2:return oo([Ko(t,{value:ke(t.value,"@","@"+Fe)})],i);case z0:if(t.length)return lF(t.props,function(o){switch(sF(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return oo([Ko(t,{props:[ke(o,/:(read-\w+)/,":"+il+"$1")]})],i);case"::placeholder":return oo([Ko(t,{props:[ke(o,/:(plac\w+)/,":"+Fe+"input-$1")]}),Ko(t,{props:[ke(o,/:(plac\w+)/,":"+il+"$1")]}),Ko(t,{props:[ke(o,/:(plac\w+)/,Ft+"input-$1")]})],i)}return""})}},FF=[AF],kF=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var y=v.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||FF,o={},a,u=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var y=v.getAttribute("data-emotion").split(" "),m=1;m<y.length;m++)o[y[m]]=!0;u.push(v)});var s,f=[SF,xF];{var c,l=[yF,DF(function(v){c.insert(v)})],d=wF(f.concat(i,l)),p=function(y){return oo(vF(y),d)};s=function(y,m,g,w){c=g,p(y?y+"{"+m.styles+"}":m.styles),w&&(h.inserted[m.name]=!0)}}var h={key:n,sheet:new nF({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(u),h},NF=!0;function OF(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var K2=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||NF===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},PF=function(t,n,r){K2(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function IF(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var TF={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_F=/[A-Z]|^ms/g,MF=/_EMO_([^_]+?)_([^]*?)_EMO_/g,X2=function(t){return t.charCodeAt(1)===45},E1=function(t){return t!=null&&typeof t!="boolean"},uf=Sy(function(e){return X2(e)?e:e.replace(_F,"-$&").toLowerCase()}),C1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(MF,function(r,i,o){return Mn={name:i,styles:o,next:Mn},i})}return TF[t]!==1&&!X2(t)&&typeof n=="number"&&n!==0?n+"px":n};function qa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Mn={name:n.name,styles:n.styles,next:Mn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Mn={name:r.name,styles:r.styles,next:Mn},r=r.next;var i=n.styles+";";return i}return RF(e,t,n)}case"function":{if(e!==void 0){var o=Mn,a=n(e);return Mn=o,qa(e,t,a)}break}}if(t==null)return n;var u=t[n];return u!==void 0?u:n}function RF(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":E1(a)&&(r+=uf(o)+":"+C1(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var u=0;u<a.length;u++)E1(a[u])&&(r+=uf(o)+":"+C1(o,a[u])+";");else{var s=qa(e,t,a);switch(o){case"animation":case"animationName":{r+=uf(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var b1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Mn,Q2=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Mn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=qa(r,n,a)):o+=a[0];for(var u=1;u<t.length;u++)o+=qa(r,n,t[u]),i&&(o+=a[u]);b1.lastIndex=0;for(var s="",f;(f=b1.exec(o))!==null;)s+="-"+f[1];var c=IF(o)+s;return{name:c,styles:o,next:Mn}},BF=function(t){return t()},$F=Da["useInsertionEffect"]?Da["useInsertionEffect"]:!1,LF=$F||BF,H0={}.hasOwnProperty,Z2=S.createContext(typeof HTMLElement<"u"?kF({key:"css"}):null);Z2.Provider;var jF=function(t){return S.forwardRef(function(n,r){var i=S.useContext(Z2);return t(n,i,r)})},zF=S.createContext({}),Xd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",VF=function(t,n){var r={};for(var i in n)H0.call(n,i)&&(r[i]=n[i]);return r[Xd]=t,r},UF=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return K2(n,r,i),LF(function(){return PF(n,r,i)}),null},HF=jF(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Xd],o=[r],a="";typeof e.className=="string"?a=OF(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var u=Q2(o,void 0,S.useContext(zF));a+=t.key+"-"+u.name;var s={};for(var f in e)H0.call(e,f)&&f!=="css"&&f!==Xd&&(s[f]=e[f]);return s.ref=n,s.className=a,S.createElement(S.Fragment,null,S.createElement(UF,{cache:t,serialized:u,isStringTag:typeof i=="string"}),S.createElement(i,s))}),WF=HF,le=function(t,n){var r=arguments;if(n==null||!H0.call(n,"css"))return S.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=WF,o[1]=VF(t,n);for(var a=2;a<i;a++)o[a]=r[a];return S.createElement.apply(null,o)};function W0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Q2(t)}var YF=function(){var t=W0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function GF(e){if(Array.isArray(e))return e}function qF(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,u=[],s=!0,f=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(c){f=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(f)throw i}}return u}}function KF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,t){return GF(e)||qF(e,t)||z2(e,t)||KF()}function XF(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xi(e,t){if(e==null)return{};var n=XF(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function QF(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ZF(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}const JF=["top","right","bottom","left"];JF.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);function Hn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function J2(e){return Hn(e).getComputedStyle(e)}function ew(e){return e instanceof Hn(e).Node}function tw(e){return ew(e)?(e.nodeName||"").toLowerCase():""}function Y0(e){return e instanceof Hn(e).HTMLElement}function fi(e){return e instanceof Hn(e).Element}function S1(e){return typeof ShadowRoot>"u"?!1:e instanceof Hn(e).ShadowRoot||e instanceof ShadowRoot}function nw(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=J2(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function e5(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function t5(e){return["html","body","#document"].includes(tw(e))}const ol=Math.round;function n5(e){const t=J2(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Y0(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,u=ol(n)!==o||ol(r)!==a;return u&&(n=o,r=a),{width:n,height:r,fallback:u}}function rw(e){return fi(e)?e:e.contextElement}const iw={x:1,y:1};function sf(e){const t=rw(e);if(!Y0(t))return iw;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:o}=n5(t);let a=(o?ol(n.width):n.width)/r,u=(o?ol(n.height):n.height)/i;return a&&Number.isFinite(a)||(a=1),u&&Number.isFinite(u)||(u=1),{x:a,y:u}}const x1={x:0,y:0};function r5(e,t,n){var r,i;if(t===void 0&&(t=!0),!e5())return x1;const o=e?Hn(e):window;return!n||t&&n!==o?x1:{x:((r=o.visualViewport)==null?void 0:r.offsetLeft)||0,y:((i=o.visualViewport)==null?void 0:i.offsetTop)||0}}function A1(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=rw(e);let a=iw;t&&(r?fi(r)&&(a=sf(r)):a=sf(e));const u=r5(o,n,r);let s=(i.left+u.x)/a.x,f=(i.top+u.y)/a.y,c=i.width/a.x,l=i.height/a.y;if(o){const d=Hn(o),p=r&&fi(r)?Hn(r):r;let h=d.frameElement;for(;h&&r&&p!==d;){const v=sf(h),y=h.getBoundingClientRect(),m=getComputedStyle(h);y.x+=(h.clientLeft+parseFloat(m.paddingLeft))*v.x,y.y+=(h.clientTop+parseFloat(m.paddingTop))*v.y,s*=v.x,f*=v.y,c*=v.x,l*=v.y,s+=y.x,f+=y.y,h=Hn(h).frameElement}}return ZF({width:c,height:l,x:s,y:f})}function i5(e){return((ew(e)?e.ownerDocument:e.document)||window.document).documentElement}function o5(e){if(tw(e)==="html")return e;const t=e.assignedSlot||e.parentNode||S1(e)&&e.host||i5(e);return S1(t)?t.host:t}function ow(e){const t=o5(e);return t5(t)?t.ownerDocument.body:Y0(t)&&nw(t)?t:ow(t)}function gs(e,t){var n;t===void 0&&(t=[]);const r=ow(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=Hn(r);return i?t.concat(o,o.visualViewport||[],nw(r)?r:[]):t.concat(r,gs(r))}function a5(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=!0,animationFrame:u=!1}=r,s=i||o?[...fi(e)?gs(e):e.contextElement?gs(e.contextElement):[],...gs(t)]:[];s.forEach(d=>{const p=!fi(d)&&d.toString().includes("V");!i||u&&!p||d.addEventListener("scroll",n,{passive:!0}),o&&d.addEventListener("resize",n)});let f,c=null;a&&(c=new ResizeObserver(()=>{n()}),fi(e)&&!u&&c.observe(e),fi(e)||!e.contextElement||u||c.observe(e.contextElement),c.observe(t));let l=u?A1(e):null;return u&&function d(){const p=A1(e);!l||p.x===l.x&&p.y===l.y&&p.width===l.width&&p.height===l.height||n(),l=p,f=requestAnimationFrame(d)}(),n(),()=>{var d;s.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),(d=c)==null||d.disconnect(),c=null,u&&cancelAnimationFrame(f)}}var Qd=S.useLayoutEffect,u5=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],al=function(){};function s5(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function l5(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(s5(e,a)));return o.filter(function(u){return u}).map(function(u){return String(u).trim()}).join(" ")}var ul=function(t){return y5(t)?t.filter(Boolean):Ci(t)==="object"&&t!==null?[t]:[]},aw=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=xi(t,u5);return fe({},n)},We=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,u=t.className;return{css:o(n,t),className:i(r??{},a(n,t),u)}};function dc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function c5(e){return dc(e)?window.innerHeight:e.clientHeight}function uw(e){return dc(e)?window.pageYOffset:e.scrollTop}function sl(e,t){if(dc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function f5(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function d5(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Uu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:al,i=uw(e),o=t-i,a=10,u=0;function s(){u+=a;var f=d5(u,i,o,n);sl(e,f),u<n?window.requestAnimationFrame(s):r(e)}s()}function F1(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?sl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&sl(e,Math.max(t.offsetTop-i,0))}function p5(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function k1(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function h5(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var sw=!1,m5={get passive(){return sw=!0}},Hu=typeof window<"u"?window:{};Hu.addEventListener&&Hu.removeEventListener&&(Hu.addEventListener("p",al,m5),Hu.removeEventListener("p",al,!1));var v5=sw;function g5(e){return e!=null}function y5(e){return Array.isArray(e)}function ia(e,t,n){return e?t:n}var w5=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var u=nr(a,1),s=u[0];return!r.includes(s)});return o.reduce(function(a,u){var s=nr(u,2),f=s[0],c=s[1];return a[f]=c,a},{})};function D5(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,u=e.controlHeight,s=f5(n),f={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return f;var c=s.getBoundingClientRect(),l=c.height,d=n.getBoundingClientRect(),p=d.bottom,h=d.height,v=d.top,y=n.offsetParent.getBoundingClientRect(),m=y.top,g=a?window.innerHeight:c5(s),w=uw(s),E=parseInt(getComputedStyle(n).marginBottom,10),A=parseInt(getComputedStyle(n).marginTop,10),k=m-A,F=g-v,x=k+w,P=l-w-v,G=p-g+w+E,ee=w+v-A,ie=160;switch(i){case"auto":case"bottom":if(F>=h)return{placement:"bottom",maxHeight:t};if(P>=h&&!a)return o&&Uu(s,G,ie),{placement:"bottom",maxHeight:t};if(!a&&P>=r||a&&F>=r){o&&Uu(s,G,ie);var he=a?F-E:P-E;return{placement:"bottom",maxHeight:he}}if(i==="auto"||a){var me=t,Z=a?k:x;return Z>=r&&(me=Math.min(Z-E-u,t)),{placement:"top",maxHeight:me}}if(i==="bottom")return o&&sl(s,G),{placement:"bottom",maxHeight:t};break;case"top":if(k>=h)return{placement:"top",maxHeight:t};if(x>=h&&!a)return o&&Uu(s,ee,ie),{placement:"top",maxHeight:t};if(!a&&x>=r||a&&k>=r){var ae=t;return(!a&&x>=r||a&&k>=r)&&(ae=a?k-A:x-A),o&&Uu(s,ee,ie),{placement:"top",maxHeight:ae}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return f}function E5(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var lw=function(t){return t==="auto"?"bottom":t},C5=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,u=o.spacing,s=o.colors;return fe((r={label:"menu"},ra(r,E5(i),"100%"),ra(r,"position","absolute"),ra(r,"width","100%"),ra(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:u.menuGutter,marginTop:u.menuGutter})},cw=S.createContext(null),b5=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,u=t.menuShouldScrollIntoView,s=t.theme,f=S.useContext(cw)||{},c=f.setPortalPlacement,l=S.useRef(null),d=S.useState(i),p=nr(d,2),h=p[0],v=p[1],y=S.useState(null),m=nr(y,2),g=m[0],w=m[1],E=s.spacing.controlHeight;return Qd(function(){var A=l.current;if(A){var k=a==="fixed",F=u&&!k,x=D5({maxHeight:i,menuEl:A,minHeight:r,placement:o,shouldScroll:F,isFixedPosition:k,controlHeight:E});v(x.maxHeight),w(x.placement),c==null||c(x.placement)}},[i,o,a,u,r,c,E]),n({ref:l,placerProps:fe(fe({},t),{},{placement:g||lw(o),maxHeight:h})})},S5=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return le("div",ue({},We(t,"menu",{menu:!0}),{ref:r},i),n)},x5=S5,A5=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return fe({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},F5=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return le("div",ue({},We(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},fw=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return fe({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},k5=fw,N5=fw,dw=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),r),n)};dw.defaultProps={children:"No options"};var pw=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),r),n)};pw.defaultProps={children:"Loading..."};var O5=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},P5=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,u=t.menuPosition,s=S.useRef(null),f=S.useRef(null),c=S.useState(lw(a)),l=nr(c,2),d=l[0],p=l[1],h=S.useMemo(function(){return{setPortalPlacement:p}},[]),v=S.useState(null),y=nr(v,2),m=y[0],g=y[1],w=S.useCallback(function(){if(i){var F=p5(i),x=u==="fixed"?0:window.pageYOffset,P=F[d]+x;(P!==(m==null?void 0:m.offset)||F.left!==(m==null?void 0:m.rect.left)||F.width!==(m==null?void 0:m.rect.width))&&g({offset:P,rect:F})}},[i,u,d,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Qd(function(){w()},[w]);var E=S.useCallback(function(){typeof f.current=="function"&&(f.current(),f.current=null),i&&s.current&&(f.current=a5(i,s.current,w,{elementResize:"ResizeObserver"in window}))},[i,w]);Qd(function(){E()},[E]);var A=S.useCallback(function(F){s.current=F,E()},[E]);if(!n&&u!=="fixed"||!m)return null;var k=le("div",ue({ref:A},We(fe(fe({},t),{},{offset:m.offset,position:u,rect:m.rect}),"menuPortal",{"menu-portal":!0}),o),r);return le(cw.Provider,{value:h},n?ws.createPortal(k,n):k)},I5=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},T5=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return le("div",ue({},We(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},_5=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return fe({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},M5=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return le("div",ue({},We(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},R5=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},B5=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"indicatorsContainer",{indicators:!0}),r),n)},N1,$5=["size"],L5={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},hw=function(t){var n=t.size,r=xi(t,$5);return le("svg",ue({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:L5},r))},G0=function(t){return le(hw,ue({size:20},t),le("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},mw=function(t){return le(hw,ue({size:20},t),le("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},vw=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return fe({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},j5=vw,z5=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||le(mw,null))},V5=vw,U5=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||le(G0,null))},H5=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return fe({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},W5=function(t){var n=t.innerProps;return le("span",ue({},n,We(t,"indicatorSeparator",{"indicator-separator":!0})))},Y5=YF(N1||(N1=QF([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),G5=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,u=o.spacing.baseUnit;return fe({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:u*2})},lf=function(t){var n=t.delay,r=t.offset;return le("span",{css:W0({animation:"".concat(Y5," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gw=function(t){var n=t.innerProps,r=t.isRtl;return le("div",ue({},We(t,"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),le(lf,{delay:0,offset:r}),le(lf,{delay:160,offset:!0}),le(lf,{delay:320,offset:!r}))};gw.defaultProps={size:4};var q5=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,u=o.borderRadius,s=o.spacing;return fe({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:u,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},K5=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,u=t.menuIsOpen;return le("div",ue({ref:o},We(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":u}),a),n)},X5=K5,Q5=["data"],Z5=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},J5=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,u=t.headingProps,s=t.innerProps,f=t.label,c=t.theme,l=t.selectProps;return le("div",ue({},We(t,"group",{group:!0}),s),le(a,ue({},u,{selectProps:l,theme:c,getStyles:i,getClassNames:o,cx:r}),f),le("div",null,n))},e8=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return fe({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},t8=function(t){var n=aw(t);n.data;var r=xi(n,Q5);return le("div",ue({},We(t,"groupHeading",{"group-heading":!0}),r))},n8=J5,r8=["innerRef","isDisabled","isHidden","inputClassName"],i8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,u=o.colors;return fe(fe({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},o8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:u.neutral80})},yw={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},o8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":fe({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},yw)},a8=function(t){return fe({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},yw)},u8=function(t){var n=t.cx,r=t.value,i=aw(t),o=i.innerRef,a=i.isDisabled,u=i.isHidden,s=i.inputClassName,f=xi(i,r8);return le("div",ue({},We(t,"input",{"input-container":!0}),{"data-value":r||""}),le("input",ue({className:n({input:!0},s),ref:o,style:a8(u),disabled:a},f)))},s8=u8,l8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return fe({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},c8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return fe({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},f8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,u=t.isFocused;return fe({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:u?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},ww=function(t){var n=t.children,r=t.innerProps;return le("div",r,n)},d8=ww,p8=ww;function h8(e){var t=e.children,n=e.innerProps;return le("div",ue({role:"button"},n),t||le(G0,{size:14}))}var m8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,u=t.removeProps,s=t.selectProps,f=r.Container,c=r.Label,l=r.Remove;return le(f,{data:i,innerProps:fe(fe({},We(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},le(c,{data:i,innerProps:fe({},We(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),le(l,{data:i,innerProps:fe(fe({},We(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},u),selectProps:s}))},v8=m8,g8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,u=a.spacing,s=a.colors;return fe({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(u.baseUnit*2,"px ").concat(u.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},y8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,u=t.innerProps;return le("div",ue({},We(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},u),n)},w8=y8,D8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return fe({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},E8=function(t){var n=t.children,r=t.innerProps;return le("div",ue({},We(t,"placeholder",{placeholder:!0}),r),n)},C8=E8,b8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return fe({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},S8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return le("div",ue({},We(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},x8=S8,A8={ClearIndicator:U5,Control:X5,DropdownIndicator:z5,DownChevron:mw,CrossIcon:G0,Group:n8,GroupHeading:t8,IndicatorsContainer:B5,IndicatorSeparator:W5,Input:s8,LoadingIndicator:gw,Menu:x5,MenuList:F5,MenuPortal:P5,LoadingMessage:pw,NoOptionsMessage:dw,MultiValue:v8,MultiValueContainer:d8,MultiValueLabel:p8,MultiValueRemove:h8,Option:w8,Placeholder:C8,SelectContainer:T5,SingleValue:x8,ValueContainer:M5},F8=function(t){return fe(fe({},A8),t.components)},O1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function k8(e,t){return!!(e===t||O1(e)&&O1(t))}function N8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!k8(e[n],t[n]))return!1;return!0}function O8(e,t){t===void 0&&(t=N8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var P8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},I8=function(t){return le("span",ue({css:P8},t))},P1=I8,T8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.isDisabled,o=t.tabSelectsValue,a=t.context;switch(a){case"menu":return"Use Up and Down to choose options".concat(i?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(o?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,u=t.selectValue,s=t.isDisabled,f=t.isSelected,c=function(h,v){return h&&h.length?"".concat(h.indexOf(v)+1," of ").concat(h.length):""};if(n==="value"&&u)return"value ".concat(a," focused, ").concat(c(u,r),".");if(n==="menu"){var l=s?" disabled":"",d="".concat(f?"selected":"focused").concat(l);return"option ".concat(a," ").concat(d,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},_8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,u=t.selectValue,s=t.selectProps,f=t.id,c=s.ariaLiveMessages,l=s.getOptionLabel,d=s.inputValue,p=s.isMulti,h=s.isOptionDisabled,v=s.isSearchable,y=s.menuIsOpen,m=s.options,g=s.screenReaderStatus,w=s.tabSelectsValue,E=s["aria-label"],A=s["aria-live"],k=S.useMemo(function(){return fe(fe({},T8),c||{})},[c]),F=S.useMemo(function(){var me="";if(n&&k.onChange){var Z=n.option,ae=n.options,Ie=n.removedValue,z=n.removedValues,J=n.value,te=function(ce){return Array.isArray(ce)?null:ce},ye=Ie||Z||te(J),$=ye?l(ye):"",U=ae||z||void 0,Y=U?U.map(l):[],ne=fe({isDisabled:ye&&h(ye,u),label:$,labels:Y},n);me=k.onChange(ne)}return me},[n,k,h,u,l]),x=S.useMemo(function(){var me="",Z=r||i,ae=!!(r&&u&&u.includes(r));if(Z&&k.onFocus){var Ie={focused:Z,label:l(Z),isDisabled:h(Z,u),isSelected:ae,options:o,context:Z===r?"menu":"value",selectValue:u};me=k.onFocus(Ie)}return me},[r,i,l,h,k,o,u]),P=S.useMemo(function(){var me="";if(y&&m.length&&k.onFilter){var Z=g({count:o.length});me=k.onFilter({inputValue:d,resultsMessage:Z})}return me},[o,d,y,k,m,g]),G=S.useMemo(function(){var me="";if(k.guidance){var Z=i?"value":y?"menu":"input";me=k.guidance({"aria-label":E,context:Z,isDisabled:r&&h(r,u),isMulti:p,isSearchable:v,tabSelectsValue:w})}return me},[E,r,i,p,h,v,y,k,u,w]),ee="".concat(x," ").concat(P," ").concat(G),ie=le(S.Fragment,null,le("span",{id:"aria-selection"},F),le("span",{id:"aria-context"},ee)),he=(n==null?void 0:n.action)==="initial-input-focus";return le(S.Fragment,null,le(P1,{id:f},he&&ie),le(P1,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text"},a&&!he&&ie))},M8=_8,Zd=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],R8=new RegExp("["+Zd.map(function(e){return e.letters}).join("")+"]","g"),Dw={};for(var cf=0;cf<Zd.length;cf++)for(var ff=Zd[cf],df=0;df<ff.letters.length;df++)Dw[ff.letters[df]]=ff.base;var Ew=function(t){return t.replace(R8,function(n){return Dw[n]})},B8=O8(Ew),I1=function(t){return t.replace(/^\s+|\s+$/g,"")},$8=function(t){return"".concat(t.label," ").concat(t.value)},L8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=fe({ignoreCase:!0,ignoreAccents:!0,stringify:$8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,u=i.stringify,s=i.trim,f=i.matchFrom,c=s?I1(r):r,l=s?I1(u(n)):u(n);return o&&(c=c.toLowerCase(),l=l.toLowerCase()),a&&(c=B8(c),l=Ew(l)),f==="start"?l.substr(0,c.length)===c:l.indexOf(c)>-1}},j8=["innerRef"];function z8(e){var t=e.innerRef,n=xi(e,j8),r=w5(n,"onExited","in","enter","exit","appear");return le("input",ue({ref:t},r,{css:W0({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var V8=function(t){t.preventDefault(),t.stopPropagation()};function U8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=S.useRef(!1),u=S.useRef(!1),s=S.useRef(0),f=S.useRef(null),c=S.useCallback(function(y,m){if(f.current!==null){var g=f.current,w=g.scrollTop,E=g.scrollHeight,A=g.clientHeight,k=f.current,F=m>0,x=E-A-w,P=!1;x>m&&a.current&&(r&&r(y),a.current=!1),F&&u.current&&(o&&o(y),u.current=!1),F&&m>x?(n&&!a.current&&n(y),k.scrollTop=E,P=!0,a.current=!0):!F&&-m>w&&(i&&!u.current&&i(y),k.scrollTop=0,P=!0,u.current=!0),P&&V8(y)}},[n,r,i,o]),l=S.useCallback(function(y){c(y,y.deltaY)},[c]),d=S.useCallback(function(y){s.current=y.changedTouches[0].clientY},[]),p=S.useCallback(function(y){var m=s.current-y.changedTouches[0].clientY;c(y,m)},[c]),h=S.useCallback(function(y){if(y){var m=v5?{passive:!1}:!1;y.addEventListener("wheel",l,m),y.addEventListener("touchstart",d,m),y.addEventListener("touchmove",p,m)}},[p,d,l]),v=S.useCallback(function(y){y&&(y.removeEventListener("wheel",l,!1),y.removeEventListener("touchstart",d,!1),y.removeEventListener("touchmove",p,!1))},[p,d,l]);return S.useEffect(function(){if(t){var y=f.current;return h(y),function(){v(y)}}},[t,h,v]),function(y){f.current=y}}var T1=["boxSizing","height","overflow","paddingRight","position"],_1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function M1(e){e.preventDefault()}function R1(e){e.stopPropagation()}function B1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function $1(){return"ontouchstart"in window||navigator.maxTouchPoints}var L1=!!(typeof window<"u"&&window.document&&window.document.createElement),Xo=0,Pi={capture:!1,passive:!1};function H8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=S.useRef({}),o=S.useRef(null),a=S.useCallback(function(s){if(L1){var f=document.body,c=f&&f.style;if(r&&T1.forEach(function(h){var v=c&&c[h];i.current[h]=v}),r&&Xo<1){var l=parseInt(i.current.paddingRight,10)||0,d=document.body?document.body.clientWidth:0,p=window.innerWidth-d+l||0;Object.keys(_1).forEach(function(h){var v=_1[h];c&&(c[h]=v)}),c&&(c.paddingRight="".concat(p,"px"))}f&&$1()&&(f.addEventListener("touchmove",M1,Pi),s&&(s.addEventListener("touchstart",B1,Pi),s.addEventListener("touchmove",R1,Pi))),Xo+=1}},[r]),u=S.useCallback(function(s){if(L1){var f=document.body,c=f&&f.style;Xo=Math.max(Xo-1,0),r&&Xo<1&&T1.forEach(function(l){var d=i.current[l];c&&(c[l]=d)}),f&&$1()&&(f.removeEventListener("touchmove",M1,Pi),s&&(s.removeEventListener("touchstart",B1,Pi),s.removeEventListener("touchmove",R1,Pi)))}},[r]);return S.useEffect(function(){if(t){var s=o.current;return a(s),function(){u(s)}}},[t,a,u]),function(s){o.current=s}}var W8=function(){return document.activeElement&&document.activeElement.blur()},Y8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function G8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,u=e.onTopArrive,s=e.onTopLeave,f=U8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:u,onTopLeave:s}),c=H8({isEnabled:n}),l=function(p){f(p),c(p)};return le(S.Fragment,null,n&&le("div",{onClick:W8,css:Y8}),t(l))}var q8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},K8=function(t){var n=t.name,r=t.onFocus;return le("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:q8,value:"",onChange:function(){}})},X8=K8,Q8=function(t){return t.label},Cw=function(t){return t.label},bw=function(t){return t.value},Z8=function(t){return!!t.isDisabled},J8={clearIndicator:V5,container:I5,control:q5,dropdownIndicator:j5,group:Z5,groupHeading:e8,indicatorsContainer:R5,indicatorSeparator:H5,input:i8,loadingIndicator:G5,loadingMessage:N5,menu:C5,menuList:A5,menuPortal:O5,multiValue:l8,multiValueLabel:c8,multiValueRemove:f8,noOptionsMessage:k5,option:g8,placeholder:D8,singleValue:b8,valueContainer:_5},ek={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},tk=4,Sw=4,nk=38,rk=Sw*2,ik={baseUnit:Sw,controlHeight:nk,menuGutter:rk},pf={borderRadius:tk,colors:ek,spacing:ik},ok={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:k1(),captureMenuScroll:!k1(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:L8(),formatGroupLabel:Q8,getOptionLabel:Cw,getOptionValue:bw,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Z8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!h5(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function j1(e,t,n,r){var i=kw(e,t,n),o=Nw(e,t,n),a=Fw(e,t),u=ll(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:u,index:r}}function xw(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,u){return j1(e,a,t,u)}).filter(function(a){return z1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=j1(e,n,t,r);return z1(e,o)?o:void 0}).filter(g5)}function Aw(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,ga(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function ak(e,t){return Aw(xw(e,t))}function z1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,u=t.value;return(!Pw(e)||!o)&&Ow(e,{label:a,value:u,data:i},r)}function uk(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function sk(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Fw=function(t,n){return t.getOptionLabel(n)},ll=function(t,n){return t.getOptionValue(n)};function kw(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Nw(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=ll(e,t);return n.some(function(i){return ll(e,i)===r})}function Ow(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Pw=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},lk=1,q0=function(e){Y4(n,e);var t=X4(n);function n(r){var i;if(H4(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.instancePrefix="",i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(u){i.controlRef=u},i.focusedOptionRef=null,i.getFocusedOptionRef=function(u){i.focusedOptionRef=u},i.menuListRef=null,i.getMenuListRef=function(u){i.menuListRef=u},i.inputRef=null,i.getInputRef=function(u){i.inputRef=u},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(u,s){var f=i.props,c=f.onChange,l=f.name;s.name=l,i.ariaOnChange(u,s),c(u,s)},i.setValue=function(u,s,f){var c=i.props,l=c.closeMenuOnSelect,d=c.isMulti,p=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:p}),l&&(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(u,{action:s,option:f})},i.selectOption=function(u){var s=i.props,f=s.blurInputOnSelect,c=s.isMulti,l=s.name,d=i.state.selectValue,p=c&&i.isOptionSelected(u,d),h=i.isOptionDisabled(u,d);if(p){var v=i.getOptionValue(u);i.setValue(d.filter(function(y){return i.getOptionValue(y)!==v}),"deselect-option",u)}else if(!h)c?i.setValue([].concat(ga(d),[u]),"select-option",u):i.setValue(u,"select-option");else{i.ariaOnChange(u,{action:"select-option",option:u,name:l});return}f&&i.blurInput()},i.removeValue=function(u){var s=i.props.isMulti,f=i.state.selectValue,c=i.getOptionValue(u),l=f.filter(function(p){return i.getOptionValue(p)!==c}),d=ia(s,l,l[0]||null);i.onChange(d,{action:"remove-value",removedValue:u}),i.focusInput()},i.clearValue=function(){var u=i.state.selectValue;i.onChange(ia(i.props.isMulti,[],null),{action:"clear",removedValues:u})},i.popValue=function(){var u=i.props.isMulti,s=i.state.selectValue,f=s[s.length-1],c=s.slice(0,s.length-1),l=ia(u,c,c[0]||null);i.onChange(l,{action:"pop-value",removedValue:f})},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var u=arguments.length,s=new Array(u),f=0;f<u;f++)s[f]=arguments[f];return l5.apply(void 0,[i.props.classNamePrefix].concat(s))},i.getOptionLabel=function(u){return Fw(i.props,u)},i.getOptionValue=function(u){return ll(i.props,u)},i.getStyles=function(u,s){var f=i.props.unstyled,c=J8[u](s,f);c.boxSizing="border-box";var l=i.props.styles[u];return l?l(c,s):c},i.getClassNames=function(u,s){var f,c;return(f=(c=i.props.classNames)[u])===null||f===void 0?void 0:f.call(c,s)},i.getElementId=function(u){return"".concat(i.instancePrefix,"-").concat(u)},i.getComponents=function(){return F8(i.props)},i.buildCategorizedOptions=function(){return xw(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Aw(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(u,s){i.setState({ariaSelection:fe({value:u},s)})},i.onMenuMouseDown=function(u){u.button===0&&(u.stopPropagation(),u.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(u){i.blockOptionHover=!1},i.onControlMouseDown=function(u){if(!u.defaultPrevented){var s=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?u.target.tagName!=="INPUT"&&u.target.tagName!=="TEXTAREA"&&i.onMenuClose():s&&i.openMenu("first"):(s&&(i.openAfterFocus=!0),i.focusInput()),u.target.tagName!=="INPUT"&&u.target.tagName!=="TEXTAREA"&&u.preventDefault()}},i.onDropdownIndicatorMouseDown=function(u){if(!(u&&u.type==="mousedown"&&u.button!==0)&&!i.props.isDisabled){var s=i.props,f=s.isMulti,c=s.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),u.preventDefault()}},i.onClearIndicatorMouseDown=function(u){u&&u.type==="mousedown"&&u.button!==0||(i.clearValue(),u.preventDefault(),i.openAfterFocus=!1,u.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(u){typeof i.props.closeMenuOnScroll=="boolean"?u.target instanceof HTMLElement&&dc(u.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(u)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(u){var s=u.touches,f=s&&s.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(u){var s=u.touches,f=s&&s.item(0);if(f){var c=Math.abs(f.clientX-i.initialTouchX),l=Math.abs(f.clientY-i.initialTouchY),d=5;i.userIsDragging=c>d||l>d}},i.onTouchEnd=function(u){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(u.target)&&i.menuListRef&&!i.menuListRef.contains(u.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(u){i.userIsDragging||i.onControlMouseDown(u)},i.onClearIndicatorTouchEnd=function(u){i.userIsDragging||i.onClearIndicatorMouseDown(u)},i.onDropdownIndicatorTouchEnd=function(u){i.userIsDragging||i.onDropdownIndicatorMouseDown(u)},i.handleInputChange=function(u){var s=i.props.inputValue,f=u.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:s}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(u){i.props.onFocus&&i.props.onFocus(u),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(u){var s=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(u),i.onInputChange("",{action:"input-blur",prevInputValue:s}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(u){i.blockOptionHover||i.state.focusedOption===u||i.setState({focusedOption:u})},i.shouldHideSelectedOptions=function(){return Pw(i.props)},i.onValueInputFocus=function(u){u.preventDefault(),u.stopPropagation(),i.focus()},i.onKeyDown=function(u){var s=i.props,f=s.isMulti,c=s.backspaceRemovesValue,l=s.escapeClearsValue,d=s.inputValue,p=s.isClearable,h=s.isDisabled,v=s.menuIsOpen,y=s.onKeyDown,m=s.tabSelectsValue,g=s.openMenuOnFocus,w=i.state,E=w.focusedOption,A=w.focusedValue,k=w.selectValue;if(!h&&!(typeof y=="function"&&(y(u),u.defaultPrevented))){switch(i.blockOptionHover=!0,u.key){case"ArrowLeft":if(!f||d)return;i.focusValue("previous");break;case"ArrowRight":if(!f||d)return;i.focusValue("next");break;case"Delete":case"Backspace":if(d)return;if(A)i.removeValue(A);else{if(!c)return;f?i.popValue():p&&i.clearValue()}break;case"Tab":if(i.isComposing||u.shiftKey||!v||!m||!E||g&&i.isOptionSelected(E,k))return;i.selectOption(E);break;case"Enter":if(u.keyCode===229)break;if(v){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":v?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:d}),i.onMenuClose()):p&&l&&i.clearValue();break;case" ":if(d)return;if(!v){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":v?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":v?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!v)return;i.focusOption("pageup");break;case"PageDown":if(!v)return;i.focusOption("pagedown");break;case"Home":if(!v)return;i.focusOption("first");break;case"End":if(!v)return;i.focusOption("last");break;default:return}u.preventDefault()}},i.instancePrefix="react-select-"+(i.props.instanceId||++lk),i.state.selectValue=ul(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.buildFocusableOptions(),a=o.indexOf(i.state.selectValue[0]);i.state.focusedOption=o[a]}return i}return W4(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&F1(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,u=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&u&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(F1(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,u=a.selectValue,s=a.isFocused,f=this.buildFocusableOptions(),c=i==="first"?0:f.length-1;if(!this.props.isMulti){var l=f.indexOf(u[0]);l>-1&&(c=l)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:f[c]},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,u=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(u);u||(s=-1);var f=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=f:c=s-1;break;case"next":s>-1&&s<f&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,u=this.getFocusableOptions();if(u.length){var s=0,f=u.indexOf(a);a||(f=-1),i==="up"?s=f>0?f-1:u.length-1:i==="down"?s=(f+1)%u.length:i==="pageup"?(s=f-o,s<0&&(s=0)):i==="pagedown"?(s=f+o,s>u.length-1&&(s=u.length-1)):i==="last"&&(s=u.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:u[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(pf):fe(fe({},pf),this.props.theme):pf}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,u=this.getClassNames,s=this.getValue,f=this.selectOption,c=this.setValue,l=this.props,d=l.isMulti,p=l.isRtl,h=l.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:u,getValue:s,hasValue:v,isMulti:d,isRtl:p,options:h,selectOption:f,selectProps:l,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return kw(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Nw(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Ow(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,u=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:u})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,u=i.inputId,s=i.inputValue,f=i.tabIndex,c=i.form,l=i.menuIsOpen,d=i.required,p=this.getComponents(),h=p.Input,v=this.state,y=v.inputIsHidden,m=v.ariaSelection,g=this.commonProps,w=u||this.getElementId("input"),E=fe(fe(fe({"aria-autocomplete":"list","aria-expanded":l,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":d,role:"combobox"},l&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?S.createElement(h,ue({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:o,isHidden:y,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:f,form:c,type:"text",value:s},E)):S.createElement(z8,ue({id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:al,onFocus:this.onInputFocus,disabled:o,tabIndex:f,inputMode:"none",form:c,value:""},E))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,u=o.MultiValueContainer,s=o.MultiValueLabel,f=o.MultiValueRemove,c=o.SingleValue,l=o.Placeholder,d=this.commonProps,p=this.props,h=p.controlShouldRenderValue,v=p.isDisabled,y=p.isMulti,m=p.inputValue,g=p.placeholder,w=this.state,E=w.selectValue,A=w.focusedValue,k=w.isFocused;if(!this.hasValue()||!h)return m?null:S.createElement(l,ue({},d,{key:"placeholder",isDisabled:v,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),g);if(y)return E.map(function(x,P){var G=x===A,ee="".concat(i.getOptionLabel(x),"-").concat(i.getOptionValue(x));return S.createElement(a,ue({},d,{components:{Container:u,Label:s,Remove:f},isFocused:G,isDisabled:v,key:ee,index:P,removeProps:{onClick:function(){return i.removeValue(x)},onTouchEnd:function(){return i.removeValue(x)},onMouseDown:function(he){he.preventDefault()}},data:x}),i.formatOptionLabel(x,"value"))});if(m)return null;var F=E[0];return S.createElement(c,ue({},d,{data:F,isDisabled:v}),this.formatOptionLabel(F,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,u=this.props,s=u.isDisabled,f=u.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||f)return null;var l={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(o,ue({},a,{innerProps:l,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,u=this.props,s=u.isDisabled,f=u.isLoading,c=this.state.isFocused;if(!o||!f)return null;var l={"aria-hidden":"true"};return S.createElement(o,ue({},a,{innerProps:l,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var u=this.commonProps,s=this.props.isDisabled,f=this.state.isFocused;return S.createElement(a,ue({},u,{isDisabled:s,isFocused:f}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,u=this.props.isDisabled,s=this.state.isFocused,f={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(o,ue({},a,{innerProps:f,isDisabled:u,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,u=o.GroupHeading,s=o.Menu,f=o.MenuList,c=o.MenuPortal,l=o.LoadingMessage,d=o.NoOptionsMessage,p=o.Option,h=this.commonProps,v=this.state.focusedOption,y=this.props,m=y.captureMenuScroll,g=y.inputValue,w=y.isLoading,E=y.loadingMessage,A=y.minMenuHeight,k=y.maxMenuHeight,F=y.menuIsOpen,x=y.menuPlacement,P=y.menuPosition,G=y.menuPortalTarget,ee=y.menuShouldBlockScroll,ie=y.menuShouldScrollIntoView,he=y.noOptionsMessage,me=y.onMenuScrollToTop,Z=y.onMenuScrollToBottom;if(!F)return null;var ae=function(U,Y){var ne=U.type,O=U.data,ce=U.isDisabled,H=U.isSelected,Ce=U.label,De=U.value,be=v===O,de=ce?void 0:function(){return i.onOptionHover(O)},Ye=ce?void 0:function(){return i.selectOption(O)},qe="".concat(i.getElementId("option"),"-").concat(Y),we={id:qe,onClick:Ye,onMouseMove:de,onMouseOver:de,tabIndex:-1};return S.createElement(p,ue({},h,{innerProps:we,data:O,isDisabled:ce,isSelected:H,key:qe,label:Ce,type:ne,value:De,isFocused:be,innerRef:be?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},Ie;if(this.hasOptions())Ie=this.getCategorizedOptions().map(function($){if($.type==="group"){var U=$.data,Y=$.options,ne=$.index,O="".concat(i.getElementId("group"),"-").concat(ne),ce="".concat(O,"-heading");return S.createElement(a,ue({},h,{key:O,data:U,options:Y,Heading:u,headingProps:{id:ce,data:$.data},label:i.formatGroupLabel($.data)}),$.options.map(function(H){return ae(H,"".concat(ne,"-").concat(H.index))}))}else if($.type==="option")return ae($,"".concat($.index))});else if(w){var z=E({inputValue:g});if(z===null)return null;Ie=S.createElement(l,h,z)}else{var J=he({inputValue:g});if(J===null)return null;Ie=S.createElement(d,h,J)}var te={minMenuHeight:A,maxMenuHeight:k,menuPlacement:x,menuPosition:P,menuShouldScrollIntoView:ie},ye=S.createElement(b5,ue({},h,te),function($){var U=$.ref,Y=$.placerProps,ne=Y.placement,O=Y.maxHeight;return S.createElement(s,ue({},h,te,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove,id:i.getElementId("listbox")},isLoading:w,placement:ne}),S.createElement(G8,{captureEnabled:m,onTopArrive:me,onBottomArrive:Z,lockEnabled:ee},function(ce){return S.createElement(f,ue({},h,{innerRef:function(Ce){i.getMenuListRef(Ce),ce(Ce)},isLoading:w,maxHeight:O,focusedOption:v}),Ie)}))});return G||P==="fixed"?S.createElement(c,ue({},h,{appendTo:G,controlElement:this.controlRef,menuPlacement:x,menuPosition:P}),ye):ye}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,u=o.isDisabled,s=o.isMulti,f=o.name,c=o.required,l=this.state.selectValue;if(c&&!this.hasValue()&&!u)return S.createElement(X8,{name:f,onFocus:this.onValueInputFocus});if(!(!f||u))if(s)if(a){var d=l.map(function(v){return i.getOptionValue(v)}).join(a);return S.createElement("input",{name:f,type:"hidden",value:d})}else{var p=l.length>0?l.map(function(v,y){return S.createElement("input",{key:"i-".concat(y),name:f,type:"hidden",value:i.getOptionValue(v)})}):S.createElement("input",{name:f,type:"hidden",value:""});return S.createElement("div",null,p)}else{var h=l[0]?this.getOptionValue(l[0]):"";return S.createElement("input",{name:f,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,u=o.focusedOption,s=o.focusedValue,f=o.isFocused,c=o.selectValue,l=this.getFocusableOptions();return S.createElement(M8,ue({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:u,focusedValue:s,isFocused:f,selectValue:c,focusableOptions:l}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,u=i.SelectContainer,s=i.ValueContainer,f=this.props,c=f.className,l=f.id,d=f.isDisabled,p=f.menuIsOpen,h=this.state.isFocused,v=this.commonProps=this.getCommonProps();return S.createElement(u,ue({},v,{className:c,innerProps:{id:l,onKeyDown:this.onKeyDown},isDisabled:d,isFocused:h}),this.renderLiveRegion(),S.createElement(o,ue({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:d,isFocused:h,menuIsOpen:p}),S.createElement(s,ue({},v,{isDisabled:d}),this.renderPlaceholderOrValue(),this.renderInput()),S.createElement(a,ue({},v,{isDisabled:d}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,u=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,f=o.ariaSelection,c=o.isFocused,l=o.prevWasFocused,d=i.options,p=i.value,h=i.menuIsOpen,v=i.inputValue,y=i.isMulti,m=ul(p),g={};if(a&&(p!==a.value||d!==a.options||h!==a.menuIsOpen||v!==a.inputValue)){var w=h?ak(i,m):[],E=u?uk(o,m):null,A=sk(o,w);g={selectValue:m,focusedOption:A,focusedValue:E,clearFocusValueOnUpdate:!1}}var k=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},F=f,x=c&&l;return c&&!x&&(F={value:ia(y,m,m[0]||null),options:m,action:"initial-input-focus"},x=!l),(f==null?void 0:f.action)==="initial-input-focus"&&(F=null),fe(fe(fe({},g),k),{},{prevProps:i,ariaSelection:F,prevWasFocused:x})}}]),n}(S.Component);q0.defaultProps=ok;var ck=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Iw(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,u=e.inputValue,s=e.menuIsOpen,f=e.onChange,c=e.onInputChange,l=e.onMenuClose,d=e.onMenuOpen,p=e.value,h=xi(e,ck),v=S.useState(u!==void 0?u:n),y=nr(v,2),m=y[0],g=y[1],w=S.useState(s!==void 0?s:i),E=nr(w,2),A=E[0],k=E[1],F=S.useState(p!==void 0?p:a),x=nr(F,2),P=x[0],G=x[1],ee=S.useCallback(function(z,J){typeof f=="function"&&f(z,J),G(z)},[f]),ie=S.useCallback(function(z,J){var te;typeof c=="function"&&(te=c(z,J)),g(te!==void 0?te:z)},[c]),he=S.useCallback(function(){typeof d=="function"&&d(),k(!0)},[d]),me=S.useCallback(function(){typeof l=="function"&&l(),k(!1)},[l]),Z=u!==void 0?u:m,ae=s!==void 0?s:A,Ie=p!==void 0?p:P;return fe(fe({},h),{},{inputValue:Z,menuIsOpen:ae,onChange:ee,onInputChange:ie,onMenuClose:me,onMenuOpen:he,value:Ie})}var fk=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],V1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=String(t).toLowerCase(),o=String(r.getOptionValue(n)).toLowerCase(),a=String(r.getOptionLabel(n)).toLowerCase();return o===i||a===i},hf={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,r,i){return!(!t||n.some(function(o){return V1(t,o,i)})||r.some(function(o){return V1(t,o,i)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function dk(e){var t=e.allowCreateWhileLoading,n=t===void 0?!1:t,r=e.createOptionPosition,i=r===void 0?"last":r,o=e.formatCreateLabel,a=o===void 0?hf.formatCreateLabel:o,u=e.isValidNewOption,s=u===void 0?hf.isValidNewOption:u,f=e.getNewOptionData,c=f===void 0?hf.getNewOptionData:f,l=e.onCreateOption,d=e.options,p=d===void 0?[]:d,h=e.onChange,v=xi(e,fk),y=v.getOptionValue,m=y===void 0?bw:y,g=v.getOptionLabel,w=g===void 0?Cw:g,E=v.inputValue,A=v.isLoading,k=v.isMulti,F=v.value,x=v.name,P=S.useMemo(function(){return s(E,ul(F),p,{getOptionValue:m,getOptionLabel:w})?c(E,a(E)):void 0},[a,c,w,m,E,s,p,F]),G=S.useMemo(function(){return(n||!A)&&P?i==="first"?[P].concat(ga(p)):[].concat(ga(p),[P]):p},[n,i,A,P,p]),ee=S.useCallback(function(ie,he){if(he.action!=="select-option")return h(ie,he);var me=Array.isArray(ie)?ie:[ie];if(me[me.length-1]===P){if(l)l(E);else{var Z=c(E,E),ae={action:"create-option",name:x,option:Z};h(ia(k,[].concat(ga(ul(F)),[Z]),Z),ae)}return}h(ie,he)},[c,E,k,x,P,l,h,F]);return fe(fe({},v),{},{options:G,onChange:ee})}var pk=S.forwardRef(function(e,t){var n=Iw(e),r=dk(n);return S.createElement(q0,ue({ref:t},r))}),hk=pk;function mk({recipeListArr:e,setDietFilter:t,dietFilter:n,setCategoryFilter:r,categoryFilter:i}){if(!e)return D("div",{children:"no filters available"});let o=new Set,a=new Set,u=[{value:"options",label:"label",otherthing:"otherthing"}],s=["cheap","veryPopular","veryHealthy","sustainable","lowFodmap"];e.forEach(l=>{let d=l.diets;d.length>0&&d.forEach(p=>{n.includes(p)||o.add(p)}),s.forEach(p=>{l[p]&&!i.includes(p)&&a.add(p)})});let f=Array.from(o.values()),c=Array.from(a.values());return u=vk({dietOptions:f,otherOptions:c}),D(V4,{className:"main-filter-container",children:_("section",{className:"filter-container",children:[D("h2",{children:"Filter Results"}),D(hk,{closeMenuOnSelect:!1,isMulti:!0,options:u,onChange:l=>{gk(l,{diets:t,other:r})}})]})})}function vk(e){let t=[];for(let n of Object.keys(e)){const r=e[n].map(i=>({value:i,label:i,type:n}));t=t.concat(r)}return t}function gk(e,t){let n=[],r=[];e.forEach(i=>{i.type==="dietOptions"&&n.push(i.value),i.type==="otherOptions"&&r.push(i.value)}),t.diets(n),t.other(r)}function yk(){const e="http://localhost:4000",[t,n]=S.useState(""),[r,i]=S.useState(()=>{let m=JSON.parse(localStorage.getItem("lastSearch"));return console.log("lastSearch",m),m||[]}),[o,a]=S.useState([]),[u,s]=S.useState([]),[f,c]=S.useState([]),[l,d]=S.useState(!1),[p,h]=S.useState(!1);S.useEffect(()=>{if(u.length>0||f.length>0){let m=wk(r,u,f);a(m);return}a(r)},[u,f]);const v=S.useRef("");async function y(){try{h(!0);const m=await sc.get(`${e}/api/searchByIngredientCombined`,{params:{ingredients:t}});m!=null&&m.data&&d(!1);let g=m.data;i(()=>(localStorage.setItem("lastSearch",JSON.stringify(g)),g)),a(g),h(!1)}catch{d(!0)}}return _(CA,{children:[D("div",{className:"title",children:D("h1",{children:"Recipe Search"})}),D("div",{className:"searchContainer",children:_("form",{action:"#",onSubmit:m=>{m.preventDefault(),y()},children:[D("input",{ref:v,onChange:m=>n(m.target.value),id:"ingregients",value:t,type:"text",placeholder:"Enter your ingredients",className:"search"}),D("button",{className:"search-btn",children:"Search"})]})}),_("section",{className:"recipes-display",children:[D("div",{className:"filter-container",children:D(mk,{recipeListArr:o,setDietFilter:s,dietFilter:u,setCategoryFilter:c,categoryFilter:f})}),D("section",{className:"searchresults-container",children:D("div",{className:"searchResults",children:D("ul",{children:p?D(L2,{}):o.length>0?o.map(m=>D("li",{children:D($2,{recipe:m},m.id)},m.id)):l?_("h3",{children:[" ","An error has occured, please try searching again."," "]}):_("h3",{className:"searchPrompt",children:[" ","Search for Ingredients to show Recipe Results."," "]})})})})]})]})}function wk(e,t,n){let r=e;return!t&&!n||t.length<=0&&n.length<=0?e:(t.length>0&&(r=e.filter(i=>{let o=i.diets;for(let a=0;a<t.length;a++){let u=t[a];if(!o.includes(u))return!1}return!0})),n.length>0&&(r=r.filter(i=>{for(let o=0;o<n.length;o++)if(!i[n[o]])return!1;return!0})),r)}const Dk=bt.section`
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
`;function Ek(){const[e,t]=S.useState([]),n="http://localhost:4000",{userProfile:r}=S.useContext(Oo);return S.useEffect(()=>{async function i(){try{const o=await sc.post(`${n}/api/getSavedRecipes`,{username:r.username});t(o.data)}catch(o){console.error("Error fetching saved recipes:",o)}}i()},[]),_(Dk,{children:[D("div",{className:"title",children:D("h1",{children:"Saved Recipes"})}),D("div",{className:"saved-recipes",children:D("ul",{children:e.map(i=>D("li",{children:D($2,{recipe:i.recipeJson,showDelete:!0})},i._id))})})]})}let ti="#2C4001",U1="#dae082",Ck="#F2E7AE",Ii="#F2F2F2";const bk=bt.section`
    height: 100%;

    & a {
        text-decoration: none;
        color: inherit;
    }
    & h2 {
        color: ${ti};
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
        color: ${Ii};
        background: ${ti};
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
        border: 1px solid ${ti};
        border-radius: 5px;
    }
    & form input {
        text-align: center;
        font-size: 1.5rem;
        border: none;
        width: 100%;
        padding: .5em;
        background-color: ${Ii};
        border-radius: 5px;
        color: #3c3b3b;
    }
    & form input:focus {
        background-color: ${Ck};
        border: none;
    }
    & .input-tag {
        color: ${Ii};
        
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
        background: ${U1};
        color: #000000;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: ${U1};
        color: ${ti};
        border: 1px solid ${ti};
    }

    & .submit-btn button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
        background: ${ti};
        color: ${Ii};
        border: 1px solid ${Ii};
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

    @media ${it.tablet} {
        .logo{
            width: 50%;
        }
        form{
            margin: 0 auto;
            width: 60%;
        }
    }
    @media ${it.laptop} {
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
        .login-container {
            background: ${Ii};
            max-width: 500px;
            margin: 0 auto;
            border: 1px solid ${ti};
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

    @media ${it.laptopL} {
        .logo{
           
        }
        form{
            
        }
    }
    @media ${it.desktop} {

    }
`;function Sk(){const e=S.useRef(null),t=S.useRef(null),[n,r]=S.useState(""),[i,o]=S.useState(""),[a,u]=S.useState(null),s=Tl(),{userProfile:f,isLoggedIn:c,setIsLoggedIn:l,setUserProfile:d}=S.useContext(Oo);return S.useEffect(()=>{e.current.focus()},[]),D(bk,{children:_("section",{className:"login-container",children:[D("div",{children:D("img",{src:T0,alt:"Pantry Pal Logo",className:"logo"})}),D("section",{className:"form-sect",children:_("form",{onSubmit:async h=>{h.preventDefault();try{const y=(await sc.post("http://localhost:4000/api/login",{username:n,password:i},{crossDomain:!0,withCredentials:!0})).data;l(!0),d(m=>y.userProfile?{...m,...y.userProfile}:m),s("/search")}catch(v){l(!1),console.log(v)}},children:[_("div",{className:"title",children:[D("div",{children:c&&"logged in"}),D("h2",{children:"Welcome Back!"})]}),a&&D("div",{className:"error-container",children:_("div",{className:"error-desc",children:[D("span",{className:"error-marker",children:"⚠"})," ",a]})}),_("div",{className:"input-container",children:[D("label",{className:"input-tag",htmlFor:"username"}),D("input",{id:"username",type:"text",placeholder:"Username",ref:e,value:n,onChange:h=>r(h.target.value),required:!0})]}),_("div",{className:"input-container",children:[D("label",{className:"input-tag",htmlFor:"password"}),D("input",{id:"password",type:"password",placeholder:"Password",ref:t,value:i,onChange:h=>o(h.target.value),required:!0})]}),D("div",{className:"submit-btn",children:D("button",{type:"submit",className:"btn",children:"Sign In"})}),D("span",{children:"Don't have an account?"}),D(kt,{className:"page",to:"/signup",children:"Sign up"})]})})]})})}let wn="#2C4001",Wu="#F2E7AE",H1="#59320F",mf="#F2F2F2";const xk=bt.section`
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
  background: ${mf};
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
  color: ${wn};
}
& .quickIcon {
  font-size: 1.5em;
}

& .recipeTime {
  color: ${wn};
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
}



& .recipeDetailContainer {
  background: ${wn};
}
& .recipeTitle {
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: ${wn};
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
  color: ${mf};
  padding: 0 4em;
  margin: 0 .5em;

}
& .recipeSummary {
  padding: 1em;
  color: ${wn};
  border-top: 1px solid ${wn};

}
& .recipeTime{

}
& .recipeTag{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
& .recipeContainer{
  background: ${Wu}
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
}
& .recipeHead {
  background: ${Wu}
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
  background: ${H1};
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
  color: ${wn};
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
  background: ${Wu}

}

& .ingredientCard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${wn};
  background: white;
  color: ${wn};
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
  border-top: 1px solid ${wn};
  background: ${H1};
  color: ${Wu};
  padding: 2em;
}
& .instructionsCard h2 {
  color: ${mf};
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
    color: ${wn};
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
`;let Yu;const Ak=new Uint8Array(16);function Fk(){if(!Yu&&(Yu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Yu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Yu(Ak)}const vt=[];for(let e=0;e<256;++e)vt.push((e+256).toString(16).slice(1));function kk(e,t=0){return(vt[e[t+0]]+vt[e[t+1]]+vt[e[t+2]]+vt[e[t+3]]+"-"+vt[e[t+4]]+vt[e[t+5]]+"-"+vt[e[t+6]]+vt[e[t+7]]+"-"+vt[e[t+8]]+vt[e[t+9]]+"-"+vt[e[t+10]]+vt[e[t+11]]+vt[e[t+12]]+vt[e[t+13]]+vt[e[t+14]]+vt[e[t+15]]).toLowerCase()}const Nk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),W1={randomUUID:Nk};function Jt(e,t,n){if(W1.randomUUID&&!t&&!e)return W1.randomUUID();e=e||{};const r=e.random||(e.rng||Fk)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return kk(r)}let Y1="#2C4001";const Ok=bt.section`
width: 100%;


.counterSection {
    display: flex;
    align-items: center;
    justify-content: center;
}
.counterSection h2{
    margin-right: .5em;
}
input {
    height: 1em;
    width: 2em;
    border-radius: 5px;
    border: 1px solid ${Y1};
    color: ${Y1};
    font-size: 2em;
}

.ingredientSection {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.ingredientSection li{
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em;
}
.ingredientSection span{
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1em;
}

.ingredientSection span img {
    width:70px;
    height:70px;
}
`;var Tw={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function Rt(e){return typeof e=="number"}function kr(e){return!e||typeof e!="object"||typeof e.constructor!="function"?!1:e.isBigNumber===!0&&typeof e.constructor.prototype=="object"&&e.constructor.prototype.isBigNumber===!0||typeof e.constructor.isDecimal=="function"&&e.constructor.isDecimal(e)===!0}function _w(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isComplex===!0||!1}function Mw(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isFraction===!0||!1}function Rw(e){return e&&e.constructor.prototype.isUnit===!0||!1}function cl(e){return typeof e=="string"}var Xt=Array.isArray;function ya(e){return e&&e.constructor.prototype.isMatrix===!0||!1}function Jd(e){return Array.isArray(e)||ya(e)}function Pk(e){return e&&e.isDenseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function Ik(e){return e&&e.isSparseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function Tk(e){return e&&e.constructor.prototype.isRange===!0||!1}function Bw(e){return e&&e.constructor.prototype.isIndex===!0||!1}function _k(e){return typeof e=="boolean"}function Mk(e){return e&&e.constructor.prototype.isResultSet===!0||!1}function Rk(e){return e&&e.constructor.prototype.isHelp===!0||!1}function Bk(e){return typeof e=="function"}function $k(e){return e instanceof Date}function Lk(e){return e instanceof RegExp}function jk(e){return!!(e&&typeof e=="object"&&e.constructor===Object&&!_w(e)&&!Mw(e))}function zk(e){return e===null}function Vk(e){return e===void 0}function Uk(e){return e&&e.isAccessorNode===!0&&e.constructor.prototype.isNode===!0||!1}function Hk(e){return e&&e.isArrayNode===!0&&e.constructor.prototype.isNode===!0||!1}function Wk(e){return e&&e.isAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function Yk(e){return e&&e.isBlockNode===!0&&e.constructor.prototype.isNode===!0||!1}function Gk(e){return e&&e.isConditionalNode===!0&&e.constructor.prototype.isNode===!0||!1}function qk(e){return e&&e.isConstantNode===!0&&e.constructor.prototype.isNode===!0||!1}function Kk(e){return e&&e.isFunctionAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function Xk(e){return e&&e.isFunctionNode===!0&&e.constructor.prototype.isNode===!0||!1}function Qk(e){return e&&e.isIndexNode===!0&&e.constructor.prototype.isNode===!0||!1}function Zk(e){return e&&e.isNode===!0&&e.constructor.prototype.isNode===!0||!1}function Jk(e){return e&&e.isObjectNode===!0&&e.constructor.prototype.isNode===!0||!1}function e6(e){return e&&e.isOperatorNode===!0&&e.constructor.prototype.isNode===!0||!1}function t6(e){return e&&e.isParenthesisNode===!0&&e.constructor.prototype.isNode===!0||!1}function n6(e){return e&&e.isRangeNode===!0&&e.constructor.prototype.isNode===!0||!1}function r6(e){return e&&e.isRelationalNode===!0&&e.constructor.prototype.isNode===!0||!1}function i6(e){return e&&e.isSymbolNode===!0&&e.constructor.prototype.isNode===!0||!1}function o6(e){return e&&e.constructor.prototype.isChain===!0||!1}function vf(e){var t=typeof e;return t==="object"?e===null?"null":kr(e)?"BigNumber":e.constructor&&e.constructor.name?e.constructor.name:"Object":t}function oi(e){var t=typeof e;if(t==="number"||t==="string"||t==="boolean"||e===null||e===void 0)return e;if(typeof e.clone=="function")return e.clone();if(Array.isArray(e))return e.map(function(n){return oi(n)});if(e instanceof Date)return new Date(e.valueOf());if(kr(e))return e;if(e instanceof RegExp)throw new TypeError("Cannot clone "+e);return a6(e,oi)}function a6(e,t){var n={};for(var r in e)fl(e,r)&&(n[r]=t(e[r]));return n}function ep(e,t){var n,r,i;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(r=0,i=e.length;r<i;r++)if(!ep(e[r],t[r]))return!1;return!0}else{if(typeof e=="function")return e===t;if(e instanceof Object){if(Array.isArray(t)||!(t instanceof Object))return!1;for(n in e)if(!(n in t)||!ep(e[n],t[n]))return!1;for(n in t)if(!(n in e))return!1;return!0}else return e===t}}function fl(e,t){return e&&Object.hasOwnProperty.call(e,t)}function u6(e,t){for(var n={},r=0;r<t.length;r++){var i=t[r],o=e[i];o!==void 0&&(n[i]=o)}return n}var s6=["Matrix","Array"],l6=["number","BigNumber","Fraction"],$w=function(t){if(t)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Tw)};ue($w,Tw,{MATRIX_OPTIONS:s6,NUMBER_OPTIONS:l6});function Dn(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=c6(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(f){throw f},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,u;return{s:function(){n=n.call(e)},n:function(){var f=n.next();return o=f.done,f},e:function(f){a=!0,u=f},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(a)throw u}}}}function c6(e,t){if(e){if(typeof e=="string")return G1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G1(e,t)}}function G1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xi(e){return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xi(e)}function q1(){return!0}function ln(){return!1}function Ti(){}var K1="Argument is not a typed-function.";function Lw(){function e(C){return Xi(C)==="object"&&C!==null&&C.constructor===Object}var t=[{name:"number",test:function(b){return typeof b=="number"}},{name:"string",test:function(b){return typeof b=="string"}},{name:"boolean",test:function(b){return typeof b=="boolean"}},{name:"Function",test:function(b){return typeof b=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(b){return b instanceof Date}},{name:"RegExp",test:function(b){return b instanceof RegExp}},{name:"Object",test:e},{name:"null",test:function(b){return b===null}},{name:"undefined",test:function(b){return b===void 0}}],n={name:"any",test:q1,isAny:!0},r,i,o=0,a={createCount:0};function u(C){var b=r.get(C);if(b)return b;var N='Unknown type "'+C+'"',T=C.toLowerCase(),L,B=Dn(i),W;try{for(B.s();!(W=B.n()).done;)if(L=W.value,L.toLowerCase()===T){N+='. Did you mean "'+L+'" ?';break}}catch(R){B.e(R)}finally{B.f()}throw new TypeError(N)}function s(C){for(var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any",N=b?u(b).index:i.length,T=[],L=0;L<C.length;++L){if(!C[L]||typeof C[L].name!="string"||typeof C[L].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");var B=C[L].name;if(r.has(B))throw new TypeError('Duplicate type name "'+B+'"');T.push(B),r.set(B,{name:B,test:C[L].test,isAny:C[L].isAny,index:N+L,conversionsTo:[]})}var W=i.slice(N);i=i.slice(0,N).concat(T).concat(W);for(var R=N+T.length;R<i.length;++R)r.get(i[R]).index=R}function f(){r=new Map,i=[],o=0,s([n],!1)}f(),s(t);function c(){var C,b=Dn(i),N;try{for(b.s();!(N=b.n()).done;)C=N.value,r.get(C).conversionsTo=[]}catch(T){b.e(T)}finally{b.f()}o=0}function l(C){var b=i.filter(function(N){var T=r.get(N);return!T.isAny&&T.test(C)});return b.length?b:["any"]}function d(C){return C&&typeof C=="function"&&"_typedFunctionData"in C}function p(C,b,N){if(!d(C))throw new TypeError(K1);var T=N&&N.exact,L=Array.isArray(b)?b.join(","):b,B=E(L),W=y(B);if(!T||W in C.signatures){var R=C._typedFunctionData.signatureMap.get(W);if(R)return R}var V=B.length,oe;if(T){oe=[];var ge;for(ge in C.signatures)oe.push(C._typedFunctionData.signatureMap.get(ge))}else oe=C._typedFunctionData.signatures;for(var q=0;q<V;++q){var It=B[q],pt=[],St=void 0,tt=Dn(oe),jt;try{for(tt.s();!(jt=tt.n()).done;){St=jt.value;var st=x(St.params,q);if(!(!st||It.restParam&&!st.restParam)){if(!st.hasAny){var sn=function(){var zt=w(st);if(It.types.some(function(Jr){return!zt.has(Jr.name)}))return"continue"}();if(sn==="continue")continue}pt.push(St)}}}catch(zt){tt.e(zt)}finally{tt.f()}if(oe=pt,oe.length===0)break}var Tt,_t=Dn(oe),Zr;try{for(_t.s();!(Zr=_t.n()).done;)if(Tt=Zr.value,Tt.params.length<=V)return Tt}catch(zt){_t.e(zt)}finally{_t.f()}throw new TypeError("Signature not found (signature: "+(C.name||"unnamed")+"("+y(B,", ")+"))")}function h(C,b,N){return p(C,b,N).implementation}function v(C,b){var N=u(b);if(N.test(C))return C;var T=N.conversionsTo;if(T.length===0)throw new Error("There are no conversions to "+b+" defined.");for(var L=0;L<T.length;L++){var B=u(T[L].from);if(B.test(C))return T[L].convert(C)}throw new Error("Cannot convert "+C+" to "+b)}function y(C){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return C.map(function(N){return N.name}).join(b)}function m(C){var b=C.indexOf("...")===0,N=b?C.length>3?C.slice(3):"any":C,T=N.split("|").map(function(R){return u(R.trim())}),L=!1,B=b?"...":"",W=T.map(function(R){return L=R.isAny||L,B+=R.name+"|",{name:R.name,typeIndex:R.index,test:R.test,isAny:R.isAny,conversion:null,conversionIndex:-1}});return{types:W,name:B.slice(0,-1),hasAny:L,hasConversion:!1,restParam:b}}function g(C){var b=C.types.map(function(W){return W.name}),N=Ie(b),T=C.hasAny,L=C.name,B=N.map(function(W){var R=u(W.from);return T=R.isAny||T,L+="|"+W.from,{name:W.from,typeIndex:R.index,test:R.test,isAny:R.isAny,conversion:W,conversionIndex:W.index}});return{types:C.types.concat(B),name:L,hasAny:T,hasConversion:B.length>0,restParam:C.restParam}}function w(C){return C.typeSet||(C.typeSet=new Set,C.types.forEach(function(b){return C.typeSet.add(b.name)})),C.typeSet}function E(C){var b=[];if(typeof C!="string")throw new TypeError("Signatures must be strings");var N=C.trim();if(N==="")return b;for(var T=N.split(","),L=0;L<T.length;++L){var B=m(T[L].trim());if(B.restParam&&L!==T.length-1)throw new SyntaxError('Unexpected rest parameter "'+T[L]+'": only allowed for the last parameter');if(B.types.length===0)return null;b.push(B)}return b}function A(C){var b=Ce(C);return b?b.restParam:!1}function k(C){if(!C||C.types.length===0)return q1;if(C.types.length===1)return u(C.types[0].name).test;if(C.types.length===2){var b=u(C.types[0].name).test,N=u(C.types[1].name).test;return function(B){return b(B)||N(B)}}else{var T=C.types.map(function(L){return u(L.name).test});return function(B){for(var W=0;W<T.length;W++)if(T[W](B))return!0;return!1}}}function F(C){var b,N,T;if(A(C)){b=H(C).map(k);var L=b.length,B=k(Ce(C)),W=function(V){for(var oe=L;oe<V.length;oe++)if(!B(V[oe]))return!1;return!0};return function(V){for(var oe=0;oe<b.length;oe++)if(!b[oe](V[oe]))return!1;return W(V)&&V.length>=L+1}}else return C.length===0?function(V){return V.length===0}:C.length===1?(N=k(C[0]),function(V){return N(V[0])&&V.length===1}):C.length===2?(N=k(C[0]),T=k(C[1]),function(V){return N(V[0])&&T(V[1])&&V.length===2}):(b=C.map(k),function(V){for(var oe=0;oe<b.length;oe++)if(!b[oe](V[oe]))return!1;return V.length===b.length})}function x(C,b){return b<C.length?C[b]:A(C)?Ce(C):null}function P(C,b){var N=x(C,b);return N?w(N):new Set}function G(C){return C.conversion===null||C.conversion===void 0}function ee(C,b){var N=new Set;return C.forEach(function(T){var L=P(T.params,b),B,W=Dn(L),R;try{for(W.s();!(R=W.n()).done;)B=R.value,N.add(B)}catch(V){W.e(V)}finally{W.f()}}),N.has("any")?["any"]:Array.from(N)}function ie(C,b,N){var T,L,B=C||"unnamed",W=N,R,V=function(){var tt=[];if(W.forEach(function(st){var sn=x(st.params,R),Tt=k(sn);(R<st.params.length||A(st.params))&&Tt(b[R])&&tt.push(st)}),tt.length===0){if(L=ee(W,R),L.length>0){var jt=l(b[R]);return T=new TypeError("Unexpected type of argument in function "+B+" (expected: "+L.join(" or ")+", actual: "+jt.join(" | ")+", index: "+R+")"),T.data={category:"wrongType",fn:B,index:R,actual:jt,expected:L},{v:T}}}else W=tt};for(R=0;R<b.length;R++){var oe=V();if(Xi(oe)==="object")return oe.v}var ge=W.map(function(St){return A(St.params)?1/0:St.params.length});if(b.length<Math.min.apply(null,ge))return L=ee(W,R),T=new TypeError("Too few arguments in function "+B+" (expected: "+L.join(" or ")+", index: "+b.length+")"),T.data={category:"tooFewArgs",fn:B,index:b.length,expected:L},T;var q=Math.max.apply(null,ge);if(b.length>q)return T=new TypeError("Too many arguments in function "+B+" (expected: "+q+", actual: "+b.length+")"),T.data={category:"tooManyArgs",fn:B,index:b.length,expectedLength:q},T;for(var It=[],pt=0;pt<b.length;++pt)It.push(l(b[pt]).join("|"));return T=new TypeError('Arguments of type "'+It.join(", ")+'" do not match any of the defined signatures of function '+B+"."),T.data={category:"mismatch",actual:It},T}function he(C){for(var b=i.length+1,N=0;N<C.types.length;N++)G(C.types[N])&&(b=Math.min(b,C.types[N].typeIndex));return b}function me(C){for(var b=o+1,N=0;N<C.types.length;N++)G(C.types[N])||(b=Math.min(b,C.types[N].conversionIndex));return b}function Z(C,b){if(C.hasAny){if(!b.hasAny)return 1}else if(b.hasAny)return-1;if(C.restParam){if(!b.restParam)return 1}else if(b.restParam)return-1;if(C.hasConversion){if(!b.hasConversion)return 1}else if(b.hasConversion)return-1;var N=he(C)-he(b);if(N<0)return-1;if(N>0)return 1;var T=me(C)-me(b);return T<0?-1:T>0?1:0}function ae(C,b){var N=C.params,T=b.params,L=Ce(N),B=Ce(T),W=A(N),R=A(T);if(W&&L.hasAny){if(!R||!B.hasAny)return 1}else if(R&&B.hasAny)return-1;var V=0,oe=0,ge,q=Dn(N),It;try{for(q.s();!(It=q.n()).done;)ge=It.value,ge.hasAny&&++V,ge.hasConversion&&++oe}catch(_o){q.e(_o)}finally{q.f()}var pt=0,St=0,tt=Dn(T),jt;try{for(tt.s();!(jt=tt.n()).done;)ge=jt.value,ge.hasAny&&++pt,ge.hasConversion&&++St}catch(_o){tt.e(_o)}finally{tt.f()}if(V!==pt)return V-pt;if(W&&L.hasConversion){if(!R||!B.hasConversion)return 1}else if(R&&B.hasConversion)return-1;if(oe!==St)return oe-St;if(W){if(!R)return 1}else if(R)return-1;var st=(N.length-T.length)*(W?-1:1);if(st!==0)return st;for(var sn=[],Tt=0,_t=0;_t<N.length;++_t){var Zr=Z(N[_t],T[_t]);sn.push(Zr),Tt+=Zr}if(Tt!==0)return Tt;for(var zt,Jr=0,lu=sn;Jr<lu.length;Jr++)if(zt=lu[Jr],zt!==0)return zt;return 0}function Ie(C){if(C.length===0)return[];var b=C.map(u);C.length>1&&b.sort(function(V,oe){return V.index-oe.index});var N=b[0].conversionsTo;if(C.length===1)return N;N=N.concat([]);for(var T=new Set(C),L=1;L<b.length;++L){var B=void 0,W=Dn(b[L].conversionsTo),R;try{for(W.s();!(R=W.n()).done;)B=R.value,T.has(B.from)||(N.push(B),T.add(B.from))}catch(V){W.e(V)}finally{W.f()}}return N}function z(C,b){var N=b;if(C.some(function(R){return R.hasConversion})){var T=A(C),L=C.map(J);N=function(){for(var V=[],oe=T?arguments.length-1:arguments.length,ge=0;ge<oe;ge++)V[ge]=L[ge](arguments[ge]);return T&&(V[oe]=arguments[oe].map(L[oe])),b.apply(this,V)}}var B=N;if(A(C)){var W=C.length-1;B=function(){return N.apply(this,De(arguments,0,W).concat([De(arguments,W)]))}}return B}function J(C){var b,N,T,L,B=[],W=[];switch(C.types.forEach(function(R){R.conversion&&(B.push(u(R.conversion.from).test),W.push(R.conversion.convert))}),W.length){case 0:return function(V){return V};case 1:return b=B[0],T=W[0],function(V){return b(V)?T(V):V};case 2:return b=B[0],N=B[1],T=W[0],L=W[1],function(V){return b(V)?T(V):N(V)?L(V):V};default:return function(V){for(var oe=0;oe<W.length;oe++)if(B[oe](V))return W[oe](V);return V}}}function te(C){function b(N,T,L){if(T<N.length){var B=N[T],W=[];if(B.restParam){var R=B.types.filter(G);R.length<B.types.length&&W.push({types:R,name:"..."+R.map(function(V){return V.name}).join("|"),hasAny:R.some(function(V){return V.isAny}),hasConversion:!1,restParam:!0}),W.push(B)}else W=B.types.map(function(V){return{types:[V],name:V.name,hasAny:V.isAny,hasConversion:V.conversion,restParam:!1}});return de(W,function(V){return b(N,T+1,L.concat([V]))})}else return[L]}return b(C,0,[])}function ye(C,b){for(var N=Math.max(C.length,b.length),T=0;T<N;T++){var L=P(C,T),B=P(b,T),W=!1,R=void 0,V=Dn(B),oe;try{for(V.s();!(oe=V.n()).done;)if(R=oe.value,L.has(R)){W=!0;break}}catch(St){V.e(St)}finally{V.f()}if(!W)return!1}var ge=C.length,q=b.length,It=A(C),pt=A(b);return It?pt?ge===q:q>=ge:pt?ge>=q:ge===q}function $(C){return C.map(function(b){return Se(b)?we(b.referToSelf.callback):Je(b)?qe(b.referTo.references,b.referTo.callback):b})}function U(C,b,N){var T=[],L,B=Dn(C),W;try{for(B.s();!(W=B.n()).done;){L=W.value;var R=N[L];if(typeof R!="number")throw new TypeError('No definition for referenced signature "'+L+'"');if(R=b[R],typeof R!="function")return!1;T.push(R)}}catch(V){B.e(V)}finally{B.f()}return T}function Y(C,b,N){for(var T=$(C),L=new Array(T.length).fill(!1),B=!0;B;){B=!1;for(var W=!0,R=0;R<T.length;++R)if(!L[R]){var V=T[R];if(Se(V))T[R]=V.referToSelf.callback(N),T[R].referToSelf=V.referToSelf,L[R]=!0,W=!1;else if(Je(V)){var oe=U(V.referTo.references,T,b);oe?(T[R]=V.referTo.callback.apply(this,oe),T[R].referTo=V.referTo,L[R]=!0,W=!1):B=!0}}if(W&&B)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return T}function ne(C){var b=/\bthis(\(|\.signatures\b)/;Object.keys(C).forEach(function(N){var T=C[N];if(b.test(T.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function O(C,b){if(a.createCount++,Object.keys(b).length===0)throw new SyntaxError("No signatures provided");a.warnAgainstDeprecatedThis&&ne(b);var N=[],T=[],L={},B=[],W,R=function(){if(!Object.prototype.hasOwnProperty.call(b,W))return"continue";var ht=E(W);if(!ht)return"continue";N.forEach(function(ki){if(ye(ki,ht))throw new TypeError('Conflicting signatures "'+y(ki)+'" and "'+y(ht)+'".')}),N.push(ht);var Z0=T.length;T.push(b[W]);var _D=ht.map(g),cu=void 0,fu=Dn(te(_D)),J0;try{for(fu.s();!(J0=fu.n()).done;){cu=J0.value;var eh=y(cu);B.push({params:cu,name:eh,fn:Z0}),cu.every(function(ki){return!ki.hasConversion})&&(L[eh]=Z0)}}catch(ki){fu.e(ki)}finally{fu.f()}};for(W in b)var V=R();B.sort(ae);var oe=Y(T,L,Ro),ge;for(ge in L)Object.prototype.hasOwnProperty.call(L,ge)&&(L[ge]=oe[L[ge]]);for(var q=[],It=new Map,pt=0,St=B;pt<St.length;pt++)ge=St[pt],It.has(ge.name)||(ge.fn=oe[ge.fn],q.push(ge),It.set(ge.name,ge));for(var tt=q[0]&&q[0].params.length<=2&&!A(q[0].params),jt=q[1]&&q[1].params.length<=2&&!A(q[1].params),st=q[2]&&q[2].params.length<=2&&!A(q[2].params),sn=q[3]&&q[3].params.length<=2&&!A(q[3].params),Tt=q[4]&&q[4].params.length<=2&&!A(q[4].params),_t=q[5]&&q[5].params.length<=2&&!A(q[5].params),Zr=tt&&jt&&st&&sn&&Tt&&_t,zt=0;zt<q.length;++zt)q[zt].test=F(q[zt].params);for(var Jr=tt?k(q[0].params[0]):ln,lu=jt?k(q[1].params[0]):ln,_o=st?k(q[2].params[0]):ln,sD=sn?k(q[3].params[0]):ln,lD=Tt?k(q[4].params[0]):ln,cD=_t?k(q[5].params[0]):ln,fD=tt?k(q[0].params[1]):ln,dD=jt?k(q[1].params[1]):ln,pD=st?k(q[2].params[1]):ln,hD=sn?k(q[3].params[1]):ln,mD=Tt?k(q[4].params[1]):ln,vD=_t?k(q[5].params[1]):ln,Mo=0;Mo<q.length;++Mo)q[Mo].implementation=z(q[Mo].params,q[Mo].fn);var gD=tt?q[0].implementation:Ti,yD=jt?q[1].implementation:Ti,wD=st?q[2].implementation:Ti,DD=sn?q[3].implementation:Ti,ED=Tt?q[4].implementation:Ti,CD=_t?q[5].implementation:Ti,bD=tt?q[0].params.length:-1,SD=jt?q[1].params.length:-1,xD=st?q[2].params.length:-1,AD=sn?q[3].params.length:-1,FD=Tt?q[4].params.length:-1,kD=_t?q[5].params.length:-1,ND=Zr?6:0,OD=q.length,PD=q.map(function(Kt){return Kt.test}),ID=q.map(function(Kt){return Kt.implementation}),TD=function(){for(var ht=ND;ht<OD;ht++)if(PD[ht](arguments))return ID[ht].apply(this,arguments);return a.onMismatch(C,arguments,q)};function Ro(Kt,ht){return arguments.length===bD&&Jr(Kt)&&fD(ht)?gD.apply(this,arguments):arguments.length===SD&&lu(Kt)&&dD(ht)?yD.apply(this,arguments):arguments.length===xD&&_o(Kt)&&pD(ht)?wD.apply(this,arguments):arguments.length===AD&&sD(Kt)&&hD(ht)?DD.apply(this,arguments):arguments.length===FD&&lD(Kt)&&mD(ht)?ED.apply(this,arguments):arguments.length===kD&&cD(Kt)&&vD(ht)?CD.apply(this,arguments):TD.apply(this,arguments)}try{Object.defineProperty(Ro,"name",{value:C})}catch{}return Ro.signatures=L,Ro._typedFunctionData={signatures:q,signatureMap:It},Ro}function ce(C,b,N){throw ie(C,b,N)}function H(C){return De(C,0,C.length-1)}function Ce(C){return C[C.length-1]}function De(C,b,N){return Array.prototype.slice.call(C,b,N)}function be(C,b){for(var N=0;N<C.length;N++)if(b(C[N]))return C[N]}function de(C,b){return Array.prototype.concat.apply([],C.map(b))}function Ye(){var C=H(arguments).map(function(N){return y(E(N))}),b=Ce(arguments);if(typeof b!="function")throw new TypeError("Callback function expected as last argument");return qe(C,b)}function qe(C,b){return{referTo:{references:C,callback:b}}}function we(C){if(typeof C!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:C}}}function Je(C){return C&&Xi(C.referTo)==="object"&&Array.isArray(C.referTo.references)&&typeof C.referTo.callback=="function"}function Se(C){return C&&Xi(C.referToSelf)==="object"&&typeof C.referToSelf.callback=="function"}function Ke(C,b){if(!C)return b;if(b&&b!==C){var N=new Error("Function names do not match (expected: "+C+", actual: "+b+")");throw N.data={actual:b,expected:C},N}return C}function Qr(C){var b;for(var N in C)Object.prototype.hasOwnProperty.call(C,N)&&(d(C[N])||typeof C[N].signature=="string")&&(b=Ke(b,C[N].name));return b}function et(C,b){var N;for(N in b)if(Object.prototype.hasOwnProperty.call(b,N)){if(N in C&&b[N]!==C[N]){var T=new Error('Signature "'+N+'" is defined twice');throw T.data={signature:N,sourceFunction:b[N],destFunction:C[N]},T}C[N]=b[N]}}var Fi=a;a=function(b){for(var N=typeof b=="string",T=N?1:0,L=N?b:"",B={},W=T;W<arguments.length;++W){var R=arguments[W],V={},oe=void 0;if(typeof R=="function"?(oe=R.name,typeof R.signature=="string"?V[R.signature]=R:d(R)&&(V=R.signatures)):e(R)&&(V=R,N||(oe=Qr(R))),Object.keys(V).length===0){var ge=new TypeError("Argument to 'typed' at index "+W+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw ge.data={index:W,argument:R},ge}N||(L=Ke(L,oe)),et(B,V)}return O(L||"",B)},a.create=Lw,a.createCount=Fi.createCount,a.onMismatch=ce,a.throwMismatchError=ce,a.createError=ie,a.clear=f,a.clearConversions=c,a.addTypes=s,a._findType=u,a.referTo=Ye,a.referToSelf=we,a.convert=v,a.findSignature=p,a.find=h,a.isTypedFunction=d,a.warnAgainstDeprecatedThis=!0,a.addType=function(C,b){var N="any";b!==!1&&r.has("Object")&&(N="Object"),a.addTypes([C],N)};function hr(C){if(!C||typeof C.from!="string"||typeof C.to!="string"||typeof C.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(C.to===C.from)throw new SyntaxError('Illegal to define conversion from "'+C.from+'" to itself.')}return a.addConversion=function(C){hr(C);var b=u(C.to);if(b.conversionsTo.every(function(N){return N.from!==C.from}))b.conversionsTo.push({from:C.from,convert:C.convert,index:o++});else throw new Error('There is already a conversion from "'+C.from+'" to "'+b.name+'"')},a.addConversions=function(C){C.forEach(a.addConversion)},a.removeConversion=function(C){hr(C);var b=u(C.to),N=be(b.conversionsTo,function(L){return L.from===C.from});if(!N)throw new Error("Attempt to remove nonexistent conversion from "+C.from+" to "+C.to);if(N.convert!==C.convert)throw new Error("Conversion to remove does not match existing conversion");var T=b.conversionsTo.indexOf(N);b.conversionsTo.splice(T,1)},a.resolve=function(C,b){if(!d(C))throw new TypeError(K1);for(var N=C._typedFunctionData.signatures,T=0;T<N.length;++T)if(N[T].test(b))return N[T];return null},a}const X1=Lw();function Bn(e){return typeof e=="boolean"?!0:isFinite(e)?e===Math.round(e):!1}function gf(e,t,n){var r={2:"0b",8:"0o",16:"0x"},i=r[t],o="";if(n){if(n<1)throw new Error("size must be in greater than 0");if(!Bn(n))throw new Error("size must be an integer");if(e>2**(n-1)-1||e<-(2**(n-1)))throw new Error("Value must be in range [-2^".concat(n-1,", 2^").concat(n-1,"-1]"));if(!Bn(e))throw new Error("Value must be an integer");e<0&&(e=e+2**n),o="i".concat(n)}var a="";return e<0&&(e=-e,a="-"),"".concat(a).concat(i).concat(e.toString(t)).concat(o)}function tp(e,t){if(typeof t=="function")return t(e);if(e===1/0)return"Infinity";if(e===-1/0)return"-Infinity";if(isNaN(e))return"NaN";var n="auto",r,i;if(t&&(t.notation&&(n=t.notation),Rt(t)?r=t:Rt(t.precision)&&(r=t.precision),t.wordSize&&(i=t.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(n){case"fixed":return d6(e,r);case"exponential":return jw(e,r);case"engineering":return f6(e,r);case"bin":return gf(e,2,i);case"oct":return gf(e,8,i);case"hex":return gf(e,16,i);case"auto":return p6(e,r,t&&t).replace(/((\.\d*?)(0+))($|e)/,function(){var o=arguments[2],a=arguments[4];return o!=="."?o+a:a});default:throw new Error('Unknown notation "'+n+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function pc(e){var t=String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!t)throw new SyntaxError("Invalid number "+e);var n=t[1],r=t[2],i=parseFloat(t[4]||"0"),o=r.indexOf(".");i+=o!==-1?o-1:r.length-1;var a=r.replace(".","").replace(/^0*/,function(u){return i-=u.length,""}).replace(/0*$/,"").split("").map(function(u){return parseInt(u)});return a.length===0&&(a.push(0),i++),{sign:n,coefficients:a,exponent:i}}function f6(e,t){if(isNaN(e)||!isFinite(e))return String(e);var n=pc(e),r=hc(n,t),i=r.exponent,o=r.coefficients,a=i%3===0?i:i<0?i-3-i%3:i-i%3;if(Rt(t))for(;t>o.length||i-a+1>o.length;)o.push(0);else for(var u=Math.abs(i-a)-(o.length-1),s=0;s<u;s++)o.push(0);for(var f=Math.abs(i-a),c=1;f>0;)c++,f--;var l=o.slice(c).join(""),d=Rt(t)&&l.length||l.match(/[1-9]/)?"."+l:"",p=o.slice(0,c).join("")+d+"e"+(i>=0?"+":"")+a.toString();return r.sign+p}function d6(e,t){if(isNaN(e)||!isFinite(e))return String(e);var n=pc(e),r=typeof t=="number"?hc(n,n.exponent+1+t):n,i=r.coefficients,o=r.exponent+1,a=o+(t||0);return i.length<a&&(i=i.concat(ao(a-i.length))),o<0&&(i=ao(-o+1).concat(i),o=1),o<i.length&&i.splice(o,0,o===0?"0.":"."),r.sign+i.join("")}function jw(e,t){if(isNaN(e)||!isFinite(e))return String(e);var n=pc(e),r=t?hc(n,t):n,i=r.coefficients,o=r.exponent;i.length<t&&(i=i.concat(ao(t-i.length)));var a=i.shift();return r.sign+a+(i.length>0?"."+i.join(""):"")+"e"+(o>=0?"+":"")+o}function p6(e,t,n){if(isNaN(e)||!isFinite(e))return String(e);var r=n&&n.lowerExp!==void 0?n.lowerExp:-3,i=n&&n.upperExp!==void 0?n.upperExp:5,o=pc(e),a=t?hc(o,t):o;if(a.exponent<r||a.exponent>=i)return jw(e,t);var u=a.coefficients,s=a.exponent;u.length<t&&(u=u.concat(ao(t-u.length))),u=u.concat(ao(s-u.length+1+(u.length<t?t-u.length:0))),u=ao(-s).concat(u);var f=s>0?s:0;return f<u.length-1&&u.splice(f+1,0,"."),a.sign+u.join("")}function hc(e,t){for(var n={sign:e.sign,coefficients:e.coefficients,exponent:e.exponent},r=n.coefficients;t<=0;)r.unshift(0),n.exponent++,t++;if(r.length>t){var i=r.splice(t,r.length-t);if(i[0]>=5){var o=t-1;for(r[o]++;r[o]===10;)r.pop(),o===0&&(r.unshift(0),n.exponent++,o++),o--,r[o]++}}return n}function ao(e){for(var t=[],n=0;n<e;n++)t.push(0);return t}function h6(e){return e.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function yf(e,t,n){var r=e.constructor,i=new r(2),o="";if(n){if(n<1)throw new Error("size must be in greater than 0");if(!Bn(n))throw new Error("size must be an integer");if(e.greaterThan(i.pow(n-1).sub(1))||e.lessThan(i.pow(n-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(n-1,", 2^").concat(n-1,"-1]"));if(!e.isInteger())throw new Error("Value must be an integer");e.lessThan(0)&&(e=e.add(i.pow(n))),o="i".concat(n)}switch(t){case 2:return"".concat(e.toBinary()).concat(o);case 8:return"".concat(e.toOctal()).concat(o);case 16:return"".concat(e.toHexadecimal()).concat(o);default:throw new Error("Base ".concat(t," not supported "))}}function m6(e,t){if(typeof t=="function")return t(e);if(!e.isFinite())return e.isNaN()?"NaN":e.gt(0)?"Infinity":"-Infinity";var n="auto",r,i;if(t!==void 0&&(t.notation&&(n=t.notation),typeof t=="number"?r=t:t.precision!==void 0&&(r=t.precision),t.wordSize&&(i=t.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(n){case"fixed":return g6(e,r);case"exponential":return Q1(e,r);case"engineering":return v6(e,r);case"bin":return yf(e,2,i);case"oct":return yf(e,8,i);case"hex":return yf(e,16,i);case"auto":{var o=t&&t.lowerExp!==void 0?t.lowerExp:-3,a=t&&t.upperExp!==void 0?t.upperExp:5;if(e.isZero())return"0";var u,s=e.toSignificantDigits(r),f=s.e;return f>=o&&f<a?u=s.toFixed():u=Q1(e,r),u.replace(/((\.\d*?)(0+))($|e)/,function(){var c=arguments[2],l=arguments[4];return c!=="."?c+l:l})}default:throw new Error('Unknown notation "'+n+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function v6(e,t){var n=e.e,r=n%3===0?n:n<0?n-3-n%3:n-n%3,i=e.mul(Math.pow(10,-r)),o=i.toPrecision(t);if(o.indexOf("e")!==-1){var a=e.constructor;o=new a(o).toFixed()}return o+"e"+(n>=0?"+":"")+r.toString()}function Q1(e,t){return t!==void 0?e.toExponential(t-1):e.toExponential()}function g6(e,t){return e.toFixed(t)}function Ka(e,t){var n=y6(e,t);return t&&typeof t=="object"&&"truncate"in t&&n.length>t.truncate?n.substring(0,t.truncate-3)+"...":n}function y6(e,t){if(typeof e=="number")return tp(e,t);if(kr(e))return m6(e,t);if(w6(e))return!t||t.fraction!=="decimal"?e.s*e.n+"/"+e.d:e.toString();if(Array.isArray(e))return zw(e,t);if(cl(e))return'"'+e+'"';if(typeof e=="function")return e.syntax?String(e.syntax):"function";if(e&&typeof e=="object"){if(typeof e.format=="function")return e.format(t);if(e&&e.toString(t)!=={}.toString())return e.toString(t);var n=Object.keys(e).map(r=>'"'+r+'": '+Ka(e[r],t));return"{"+n.join(", ")+"}"}return String(e)}function zw(e,t){if(Array.isArray(e)){for(var n="[",r=e.length,i=0;i<r;i++)i!==0&&(n+=", "),n+=zw(e[i],t);return n+="]",n}else return Ka(e,t)}function w6(e){return e&&typeof e=="object"&&typeof e.s=="number"&&typeof e.n=="number"&&typeof e.d=="number"||!1}function ct(e,t,n){if(!(this instanceof ct))throw new SyntaxError("Constructor must be called with the new operator");this.actual=e,this.expected=t,this.relation=n,this.message="Dimension mismatch ("+(Array.isArray(e)?"["+e.join(", ")+"]":e)+" "+(this.relation||"!=")+" "+(Array.isArray(t)?"["+t.join(", ")+"]":t)+")",this.stack=new Error().stack}ct.prototype=new RangeError;ct.prototype.constructor=RangeError;ct.prototype.name="DimensionError";ct.prototype.isDimensionError=!0;function To(e,t,n){if(!(this instanceof To))throw new SyntaxError("Constructor must be called with the new operator");this.index=e,arguments.length<3?(this.min=0,this.max=t):(this.min=t,this.max=n),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}To.prototype=new RangeError;To.prototype.constructor=RangeError;To.prototype.name="IndexError";To.prototype.isIndexError=!0;function np(e){for(var t=[];Array.isArray(e);)t.push(e.length),e=e[0];return t}function Vw(e,t,n){var r,i=e.length;if(i!==t[n])throw new ct(i,t[n]);if(n<t.length-1){var o=n+1;for(r=0;r<i;r++){var a=e[r];if(!Array.isArray(a))throw new ct(t.length-1,t.length,"<");Vw(e[r],t,o)}}else for(r=0;r<i;r++)if(Array.isArray(e[r]))throw new ct(t.length+1,t.length,">")}function Z1(e,t){var n=t.length===0;if(n){if(Array.isArray(e))throw new ct(e.length,0)}else Vw(e,t,0)}function cn(e,t){if(!Rt(e)||!Bn(e))throw new TypeError("Index must be an integer (value: "+e+")");if(e<0||typeof t=="number"&&e>=t)throw new To(e,t)}function J1(e,t,n){if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new Error("Resizing to scalar is not supported");t.forEach(function(i){if(!Rt(i)||!Bn(i)||i<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ka(t)+")")});var r=n!==void 0?n:0;return rp(e,t,0,r),e}function rp(e,t,n,r){var i,o,a=e.length,u=t[n],s=Math.min(a,u);if(e.length=u,n<t.length-1){var f=n+1;for(i=0;i<s;i++)o=e[i],Array.isArray(o)||(o=[o],e[i]=o),rp(o,t,f,r);for(i=s;i<u;i++)o=[],e[i]=o,rp(o,t,f,r)}else{for(i=0;i<s;i++)for(;Array.isArray(e[i]);)e[i]=e[i][0];for(i=s;i<u;i++)e[i]=r}}function D6(e,t){var n=b6(e),r=n.length;if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Array expected");if(t.length===0)throw new ct(0,r,"!=");t=Uw(t,r);var i=Hw(t);if(r!==i)throw new ct(i,r,"!=");try{return E6(n,t)}catch(o){throw o instanceof ct?new ct(i,r,"!="):o}}function Uw(e,t){var n=Hw(e),r=e.slice(),i=-1,o=e.indexOf(i),a=e.indexOf(i,o+1)>=0;if(a)throw new Error("More than one wildcard in sizes");var u=o>=0,s=t%n===0;if(u)if(s)r[o]=-t/n;else throw new Error("Could not replace wildcard, since "+t+" is no multiple of "+-n);return r}function Hw(e){return e.reduce((t,n)=>t*n,1)}function E6(e,t){for(var n=e,r,i=t.length-1;i>0;i--){var o=t[i];r=[];for(var a=n.length/o,u=0;u<a;u++)r.push(n.slice(u*o,(u+1)*o));n=r}return n}function C6(e,t,n,r){var i=r||np(e);if(n)for(var o=0;o<n;o++)e=[e],i.unshift(1);for(e=Ww(e,t,0);i.length<t;)i.push(1);return e}function Ww(e,t,n){var r,i;if(Array.isArray(e)){var o=n+1;for(r=0,i=e.length;r<i;r++)e[r]=Ww(e[r],t,o)}else for(var a=n;a<t;a++)e=[e];return e}function b6(e){if(!Array.isArray(e))return e;var t=[];return e.forEach(function n(r){Array.isArray(r)?r.forEach(n):t.push(r)}),t}function ip(e,t){for(var n,r=0,i=0;i<e.length;i++){var o=e[i],a=Array.isArray(o);if(i===0&&a&&(r=o.length),a&&o.length!==r)return;var u=a?ip(o,t):t(o);if(n===void 0)n=u;else if(n!==u)return"mixed"}return n}function Ai(e,t,n,r){function i(o){var a=u6(o,t.map(A6));return S6(e,t,o),n(a)}return i.isFactory=!0,i.fn=e,i.dependencies=t.slice().sort(),r&&(i.meta=r),i}function S6(e,t,n){var r=t.filter(o=>!x6(o)).every(o=>n[o]!==void 0);if(!r){var i=t.filter(o=>n[o]===void 0);throw new Error('Cannot create function "'.concat(e,'", ')+"some dependencies are missing: ".concat(i.map(o=>'"'.concat(o,'"')).join(", "),"."))}}function x6(e){return e&&e[0]==="?"}function A6(e){return e&&e[0]==="?"?e.slice(1):e}function F6(e,t){if(Gw(e)&&Yw(e,t))return e[t];throw typeof e[t]=="function"&&O6(e,t)?new Error('Cannot access method "'+t+'" as a property'):new Error('No access to property "'+t+'"')}function k6(e,t,n){if(Gw(e)&&Yw(e,t))return e[t]=n,n;throw new Error('No access to property "'+t+'"')}function N6(e,t){return t in e}function Yw(e,t){return!e||typeof e!="object"?!1:fl(P6,t)?!0:!(t in Object.prototype||t in Function.prototype)}function O6(e,t){return e==null||typeof e[t]!="function"||fl(e,t)&&Object.getPrototypeOf&&t in Object.getPrototypeOf(e)?!1:fl(I6,t)?!0:!(t in Object.prototype||t in Function.prototype)}function Gw(e){return typeof e=="object"&&e&&e.constructor===Object}var P6={length:!0,name:!0},I6={toString:!0,valueOf:!0,toLocaleString:!0};class T6{constructor(t){this.wrappedObject=t}keys(){return Object.keys(this.wrappedObject)}get(t){return F6(this.wrappedObject,t)}set(t,n){return k6(this.wrappedObject,t,n),this}has(t){return N6(this.wrappedObject,t)}}function _6(e){return e?e instanceof Map||e instanceof T6||typeof e.set=="function"&&typeof e.get=="function"&&typeof e.keys=="function"&&typeof e.has=="function":!1}var qw=function(){return qw=X1.create,X1},M6=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],R6=Ai("typed",M6,function(t){var{BigNumber:n,Complex:r,DenseMatrix:i,Fraction:o}=t,a=qw();return a.clear(),a.addTypes([{name:"number",test:Rt},{name:"Complex",test:_w},{name:"BigNumber",test:kr},{name:"Fraction",test:Mw},{name:"Unit",test:Rw},{name:"identifier",test:u=>cl&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(u)},{name:"string",test:cl},{name:"Chain",test:o6},{name:"Array",test:Xt},{name:"Matrix",test:ya},{name:"DenseMatrix",test:Pk},{name:"SparseMatrix",test:Ik},{name:"Range",test:Tk},{name:"Index",test:Bw},{name:"boolean",test:_k},{name:"ResultSet",test:Mk},{name:"Help",test:Rk},{name:"function",test:Bk},{name:"Date",test:$k},{name:"RegExp",test:Lk},{name:"null",test:zk},{name:"undefined",test:Vk},{name:"AccessorNode",test:Uk},{name:"ArrayNode",test:Hk},{name:"AssignmentNode",test:Wk},{name:"BlockNode",test:Yk},{name:"ConditionalNode",test:Gk},{name:"ConstantNode",test:qk},{name:"FunctionNode",test:Xk},{name:"FunctionAssignmentNode",test:Kk},{name:"IndexNode",test:Qk},{name:"Node",test:Zk},{name:"ObjectNode",test:Jk},{name:"OperatorNode",test:e6},{name:"ParenthesisNode",test:t6},{name:"RangeNode",test:n6},{name:"RelationalNode",test:r6},{name:"SymbolNode",test:i6},{name:"Map",test:_6},{name:"Object",test:jk}]),a.addConversions([{from:"number",to:"BigNumber",convert:function(s){if(n||wf(s),h6(s)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+s+"). Use function bignumber(x) to convert to BigNumber.");return new n(s)}},{from:"number",to:"Complex",convert:function(s){return r||Gu(s),new r(s,0)}},{from:"BigNumber",to:"Complex",convert:function(s){return r||Gu(s),new r(s.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(s){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(s){return r||Gu(s),new r(s.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(s){o||Df(s);var f=new o(s);if(f.valueOf()!==s)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+s+"). Use function fraction(x) to convert to Fraction.");return f}},{from:"string",to:"number",convert:function(s){var f=Number(s);if(isNaN(f))throw new Error('Cannot convert "'+s+'" to a number');return f}},{from:"string",to:"BigNumber",convert:function(s){n||wf(s);try{return new n(s)}catch{throw new Error('Cannot convert "'+s+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(s){o||Df(s);try{return new o(s)}catch{throw new Error('Cannot convert "'+s+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(s){r||Gu(s);try{return new r(s)}catch{throw new Error('Cannot convert "'+s+'" to Complex')}}},{from:"boolean",to:"number",convert:function(s){return+s}},{from:"boolean",to:"BigNumber",convert:function(s){return n||wf(s),new n(+s)}},{from:"boolean",to:"Fraction",convert:function(s){return o||Df(s),new o(+s)}},{from:"boolean",to:"string",convert:function(s){return String(s)}},{from:"Array",to:"Matrix",convert:function(s){return i||B6(),new i(s)}},{from:"Matrix",to:"Array",convert:function(s){return s.valueOf()}}]),a.onMismatch=(u,s,f)=>{var c=a.createError(u,s,f);if(["wrongType","mismatch"].includes(c.data.category)&&s.length===1&&Jd(s[0])&&f.some(d=>!d.params.includes(","))){var l=new TypeError("Function '".concat(u,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(u,")'."));throw l.data=c.data,l}throw c},a.onMismatch=(u,s,f)=>{var c=a.createError(u,s,f);if(["wrongType","mismatch"].includes(c.data.category)&&s.length===1&&Jd(s[0])&&f.some(d=>!d.params.includes(","))){var l=new TypeError("Function '".concat(u,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(u,")'."));throw l.data=c.data,l}throw c},a});function wf(e){throw new Error("Cannot convert value ".concat(e," into a BigNumber: no class 'BigNumber' provided"))}function Gu(e){throw new Error("Cannot convert value ".concat(e," into a Complex number: no class 'Complex' provided"))}function B6(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Df(e){throw new Error("Cannot convert value ".concat(e," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Qi=9e15,Xr=1e9,op="0123456789abcdef",dl="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",pl="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",ap={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Qi,maxE:Qi,crypto:!1},Kw,Jn,pe=!0,mc="[DecimalError] ",Yr=mc+"Invalid argument: ",Xw=mc+"Precision limit exceeded",Qw=mc+"crypto unavailable",Zw="[object Decimal]",Pt=Math.floor,rt=Math.pow,$6=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,L6=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,j6=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Jw=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,kn=1e7,se=7,z6=9007199254740991,V6=dl.length-1,up=pl.length-1,M={toStringTag:Zw};M.absoluteValue=M.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),re(e)};M.ceil=function(){return re(new this.constructor(this),this.e+1,2)};M.clampedTo=M.clamp=function(e,t){var n,r=this,i=r.constructor;if(e=new i(e),t=new i(t),!e.s||!t.s)return new i(NaN);if(e.gt(t))throw Error(Yr+t);return n=r.cmp(e),n<0?e:r.cmp(t)>0?t:new i(r)};M.comparedTo=M.cmp=function(e){var t,n,r,i,o=this,a=o.d,u=(e=new o.constructor(e)).d,s=o.s,f=e.s;if(!a||!u)return!s||!f?NaN:s!==f?s:a===u?0:!a^s<0?1:-1;if(!a[0]||!u[0])return a[0]?s:u[0]?-f:0;if(s!==f)return s;if(o.e!==e.e)return o.e>e.e^s<0?1:-1;for(r=a.length,i=u.length,t=0,n=r<i?r:i;t<n;++t)if(a[t]!==u[t])return a[t]>u[t]^s<0?1:-1;return r===i?0:r>i^s<0?1:-1};M.cosine=M.cos=function(){var e,t,n=this,r=n.constructor;return n.d?n.d[0]?(e=r.precision,t=r.rounding,r.precision=e+Math.max(n.e,n.sd())+se,r.rounding=1,n=U6(r,iD(r,n)),r.precision=e,r.rounding=t,re(Jn==2||Jn==3?n.neg():n,e,t,!0)):new r(1):new r(NaN)};M.cubeRoot=M.cbrt=function(){var e,t,n,r,i,o,a,u,s,f,c=this,l=c.constructor;if(!c.isFinite()||c.isZero())return new l(c);for(pe=!1,o=c.s*rt(c.s*c,1/3),!o||Math.abs(o)==1/0?(n=Dt(c.d),e=c.e,(o=(e-n.length+1)%3)&&(n+=o==1||o==-2?"0":"00"),o=rt(n,1/3),e=Pt((e+1)/3)-(e%3==(e<0?-1:2)),o==1/0?n="5e"+e:(n=o.toExponential(),n=n.slice(0,n.indexOf("e")+1)+e),r=new l(n),r.s=c.s):r=new l(o.toString()),a=(e=l.precision)+3;;)if(u=r,s=u.times(u).times(u),f=s.plus(c),r=Te(f.plus(c).times(u),f.plus(s),a+2,1),Dt(u.d).slice(0,a)===(n=Dt(r.d)).slice(0,a))if(n=n.slice(a-3,a+1),n=="9999"||!i&&n=="4999"){if(!i&&(re(u,e+1,0),u.times(u).times(u).eq(c))){r=u;break}a+=4,i=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(re(r,e+1,1),t=!r.times(r).times(r).eq(c));break}return pe=!0,re(r,e,l.rounding,t)};M.decimalPlaces=M.dp=function(){var e,t=this.d,n=NaN;if(t){if(e=t.length-1,n=(e-Pt(this.e/se))*se,e=t[e],e)for(;e%10==0;e/=10)n--;n<0&&(n=0)}return n};M.dividedBy=M.div=function(e){return Te(this,new this.constructor(e))};M.dividedToIntegerBy=M.divToInt=function(e){var t=this,n=t.constructor;return re(Te(t,new n(e),0,1,1),n.precision,n.rounding)};M.equals=M.eq=function(e){return this.cmp(e)===0};M.floor=function(){return re(new this.constructor(this),this.e+1,3)};M.greaterThan=M.gt=function(e){return this.cmp(e)>0};M.greaterThanOrEqualTo=M.gte=function(e){var t=this.cmp(e);return t==1||t===0};M.hyperbolicCosine=M.cosh=function(){var e,t,n,r,i,o=this,a=o.constructor,u=new a(1);if(!o.isFinite())return new a(o.s?1/0:NaN);if(o.isZero())return u;n=a.precision,r=a.rounding,a.precision=n+Math.max(o.e,o.sd())+4,a.rounding=1,i=o.d.length,i<32?(e=Math.ceil(i/3),t=(1/gc(4,e)).toString()):(e=16,t="2.3283064365386962890625e-10"),o=wo(a,1,o.times(t),new a(1),!0);for(var s,f=e,c=new a(8);f--;)s=o.times(o),o=u.minus(s.times(c.minus(s.times(c))));return re(o,a.precision=n,a.rounding=r,!0)};M.hyperbolicSine=M.sinh=function(){var e,t,n,r,i=this,o=i.constructor;if(!i.isFinite()||i.isZero())return new o(i);if(t=o.precision,n=o.rounding,o.precision=t+Math.max(i.e,i.sd())+4,o.rounding=1,r=i.d.length,r<3)i=wo(o,2,i,i,!0);else{e=1.4*Math.sqrt(r),e=e>16?16:e|0,i=i.times(1/gc(5,e)),i=wo(o,2,i,i,!0);for(var a,u=new o(5),s=new o(16),f=new o(20);e--;)a=i.times(i),i=i.times(u.plus(a.times(s.times(a).plus(f))))}return o.precision=t,o.rounding=n,re(i,t,n,!0)};M.hyperbolicTangent=M.tanh=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+7,r.rounding=1,Te(n.sinh(),n.cosh(),r.precision=e,r.rounding=t)):new r(n.s)};M.inverseCosine=M.acos=function(){var e,t=this,n=t.constructor,r=t.abs().cmp(1),i=n.precision,o=n.rounding;return r!==-1?r===0?t.isNeg()?xn(n,i,o):new n(0):new n(NaN):t.isZero()?xn(n,i+4,o).times(.5):(n.precision=i+6,n.rounding=1,t=t.asin(),e=xn(n,i+4,o).times(.5),n.precision=i,n.rounding=o,e.minus(t))};M.inverseHyperbolicCosine=M.acosh=function(){var e,t,n=this,r=n.constructor;return n.lte(1)?new r(n.eq(1)?0:NaN):n.isFinite()?(e=r.precision,t=r.rounding,r.precision=e+Math.max(Math.abs(n.e),n.sd())+4,r.rounding=1,pe=!1,n=n.times(n).minus(1).sqrt().plus(n),pe=!0,r.precision=e,r.rounding=t,n.ln()):new r(n)};M.inverseHyperbolicSine=M.asinh=function(){var e,t,n=this,r=n.constructor;return!n.isFinite()||n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+2*Math.max(Math.abs(n.e),n.sd())+6,r.rounding=1,pe=!1,n=n.times(n).plus(1).sqrt().plus(n),pe=!0,r.precision=e,r.rounding=t,n.ln())};M.inverseHyperbolicTangent=M.atanh=function(){var e,t,n,r,i=this,o=i.constructor;return i.isFinite()?i.e>=0?new o(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=o.precision,t=o.rounding,r=i.sd(),Math.max(r,e)<2*-i.e-1?re(new o(i),e,t,!0):(o.precision=n=r-i.e,i=Te(i.plus(1),new o(1).minus(i),n+e,1),o.precision=e+4,o.rounding=1,i=i.ln(),o.precision=e,o.rounding=t,i.times(.5))):new o(NaN)};M.inverseSine=M.asin=function(){var e,t,n,r,i=this,o=i.constructor;return i.isZero()?new o(i):(t=i.abs().cmp(1),n=o.precision,r=o.rounding,t!==-1?t===0?(e=xn(o,n+4,r).times(.5),e.s=i.s,e):new o(NaN):(o.precision=n+6,o.rounding=1,i=i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(),o.precision=n,o.rounding=r,i.times(2)))};M.inverseTangent=M.atan=function(){var e,t,n,r,i,o,a,u,s,f=this,c=f.constructor,l=c.precision,d=c.rounding;if(f.isFinite()){if(f.isZero())return new c(f);if(f.abs().eq(1)&&l+4<=up)return a=xn(c,l+4,d).times(.25),a.s=f.s,a}else{if(!f.s)return new c(NaN);if(l+4<=up)return a=xn(c,l+4,d).times(.5),a.s=f.s,a}for(c.precision=u=l+10,c.rounding=1,n=Math.min(28,u/se+2|0),e=n;e;--e)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(pe=!1,t=Math.ceil(u/se),r=1,s=f.times(f),a=new c(f),i=f;e!==-1;)if(i=i.times(s),o=a.minus(i.div(r+=2)),i=i.times(s),a=o.plus(i.div(r+=2)),a.d[t]!==void 0)for(e=t;a.d[e]===o.d[e]&&e--;);return n&&(a=a.times(2<<n-1)),pe=!0,re(a,c.precision=l,c.rounding=d,!0)};M.isFinite=function(){return!!this.d};M.isInteger=M.isInt=function(){return!!this.d&&Pt(this.e/se)>this.d.length-2};M.isNaN=function(){return!this.s};M.isNegative=M.isNeg=function(){return this.s<0};M.isPositive=M.isPos=function(){return this.s>0};M.isZero=function(){return!!this.d&&this.d[0]===0};M.lessThan=M.lt=function(e){return this.cmp(e)<0};M.lessThanOrEqualTo=M.lte=function(e){return this.cmp(e)<1};M.logarithm=M.log=function(e){var t,n,r,i,o,a,u,s,f=this,c=f.constructor,l=c.precision,d=c.rounding,p=5;if(e==null)e=new c(10),t=!0;else{if(e=new c(e),n=e.d,e.s<0||!n||!n[0]||e.eq(1))return new c(NaN);t=e.eq(10)}if(n=f.d,f.s<0||!n||!n[0]||f.eq(1))return new c(n&&!n[0]?-1/0:f.s!=1?NaN:n?0:1/0);if(t)if(n.length>1)o=!0;else{for(i=n[0];i%10===0;)i/=10;o=i!==1}if(pe=!1,u=l+p,a=Nr(f,u),r=t?hl(c,u+10):Nr(e,u),s=Te(a,r,u,1),Xa(s.d,i=l,d))do if(u+=10,a=Nr(f,u),r=t?hl(c,u+10):Nr(e,u),s=Te(a,r,u,1),!o){+Dt(s.d).slice(i+1,i+15)+1==1e14&&(s=re(s,l+1,0));break}while(Xa(s.d,i+=10,d));return pe=!0,re(s,l,d)};M.minus=M.sub=function(e){var t,n,r,i,o,a,u,s,f,c,l,d,p=this,h=p.constructor;if(e=new h(e),!p.d||!e.d)return!p.s||!e.s?e=new h(NaN):p.d?e.s=-e.s:e=new h(e.d||p.s!==e.s?p:NaN),e;if(p.s!=e.s)return e.s=-e.s,p.plus(e);if(f=p.d,d=e.d,u=h.precision,s=h.rounding,!f[0]||!d[0]){if(d[0])e.s=-e.s;else if(f[0])e=new h(p);else return new h(s===3?-0:0);return pe?re(e,u,s):e}if(n=Pt(e.e/se),c=Pt(p.e/se),f=f.slice(),o=c-n,o){for(l=o<0,l?(t=f,o=-o,a=d.length):(t=d,n=c,a=f.length),r=Math.max(Math.ceil(u/se),a)+2,o>r&&(o=r,t.length=1),t.reverse(),r=o;r--;)t.push(0);t.reverse()}else{for(r=f.length,a=d.length,l=r<a,l&&(a=r),r=0;r<a;r++)if(f[r]!=d[r]){l=f[r]<d[r];break}o=0}for(l&&(t=f,f=d,d=t,e.s=-e.s),a=f.length,r=d.length-a;r>0;--r)f[a++]=0;for(r=d.length;r>o;){if(f[--r]<d[r]){for(i=r;i&&f[--i]===0;)f[i]=kn-1;--f[i],f[r]+=kn}f[r]-=d[r]}for(;f[--a]===0;)f.pop();for(;f[0]===0;f.shift())--n;return f[0]?(e.d=f,e.e=vc(f,n),pe?re(e,u,s):e):new h(s===3?-0:0)};M.modulo=M.mod=function(e){var t,n=this,r=n.constructor;return e=new r(e),!n.d||!e.s||e.d&&!e.d[0]?new r(NaN):!e.d||n.d&&!n.d[0]?re(new r(n),r.precision,r.rounding):(pe=!1,r.modulo==9?(t=Te(n,e.abs(),0,3,1),t.s*=e.s):t=Te(n,e,0,r.modulo,1),t=t.times(e),pe=!0,n.minus(t))};M.naturalExponential=M.exp=function(){return sp(this)};M.naturalLogarithm=M.ln=function(){return Nr(this)};M.negated=M.neg=function(){var e=new this.constructor(this);return e.s=-e.s,re(e)};M.plus=M.add=function(e){var t,n,r,i,o,a,u,s,f,c,l=this,d=l.constructor;if(e=new d(e),!l.d||!e.d)return!l.s||!e.s?e=new d(NaN):l.d||(e=new d(e.d||l.s===e.s?l:NaN)),e;if(l.s!=e.s)return e.s=-e.s,l.minus(e);if(f=l.d,c=e.d,u=d.precision,s=d.rounding,!f[0]||!c[0])return c[0]||(e=new d(l)),pe?re(e,u,s):e;if(o=Pt(l.e/se),r=Pt(e.e/se),f=f.slice(),i=o-r,i){for(i<0?(n=f,i=-i,a=c.length):(n=c,r=o,a=f.length),o=Math.ceil(u/se),a=o>a?o+1:a+1,i>a&&(i=a,n.length=1),n.reverse();i--;)n.push(0);n.reverse()}for(a=f.length,i=c.length,a-i<0&&(i=a,n=c,c=f,f=n),t=0;i;)t=(f[--i]=f[i]+c[i]+t)/kn|0,f[i]%=kn;for(t&&(f.unshift(t),++r),a=f.length;f[--a]==0;)f.pop();return e.d=f,e.e=vc(f,r),pe?re(e,u,s):e};M.precision=M.sd=function(e){var t,n=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Yr+e);return n.d?(t=eD(n.d),e&&n.e+1>t&&(t=n.e+1)):t=NaN,t};M.round=function(){var e=this,t=e.constructor;return re(new t(e),e.e+1,t.rounding)};M.sine=M.sin=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+Math.max(n.e,n.sd())+se,r.rounding=1,n=W6(r,iD(r,n)),r.precision=e,r.rounding=t,re(Jn>2?n.neg():n,e,t,!0)):new r(NaN)};M.squareRoot=M.sqrt=function(){var e,t,n,r,i,o,a=this,u=a.d,s=a.e,f=a.s,c=a.constructor;if(f!==1||!u||!u[0])return new c(!f||f<0&&(!u||u[0])?NaN:u?a:1/0);for(pe=!1,f=Math.sqrt(+a),f==0||f==1/0?(t=Dt(u),(t.length+s)%2==0&&(t+="0"),f=Math.sqrt(t),s=Pt((s+1)/2)-(s<0||s%2),f==1/0?t="5e"+s:(t=f.toExponential(),t=t.slice(0,t.indexOf("e")+1)+s),r=new c(t)):r=new c(f.toString()),n=(s=c.precision)+3;;)if(o=r,r=o.plus(Te(a,o,n+2,1)).times(.5),Dt(o.d).slice(0,n)===(t=Dt(r.d)).slice(0,n))if(t=t.slice(n-3,n+1),t=="9999"||!i&&t=="4999"){if(!i&&(re(o,s+1,0),o.times(o).eq(a))){r=o;break}n+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(re(r,s+1,1),e=!r.times(r).eq(a));break}return pe=!0,re(r,s,c.rounding,e)};M.tangent=M.tan=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+10,r.rounding=1,n=n.sin(),n.s=1,n=Te(n,new r(1).minus(n.times(n)).sqrt(),e+10,0),r.precision=e,r.rounding=t,re(Jn==2||Jn==4?n.neg():n,e,t,!0)):new r(NaN)};M.times=M.mul=function(e){var t,n,r,i,o,a,u,s,f,c=this,l=c.constructor,d=c.d,p=(e=new l(e)).d;if(e.s*=c.s,!d||!d[0]||!p||!p[0])return new l(!e.s||d&&!d[0]&&!p||p&&!p[0]&&!d?NaN:!d||!p?e.s/0:e.s*0);for(n=Pt(c.e/se)+Pt(e.e/se),s=d.length,f=p.length,s<f&&(o=d,d=p,p=o,a=s,s=f,f=a),o=[],a=s+f,r=a;r--;)o.push(0);for(r=f;--r>=0;){for(t=0,i=s+r;i>r;)u=o[i]+p[r]*d[i-r-1]+t,o[i--]=u%kn|0,t=u/kn|0;o[i]=(o[i]+t)%kn|0}for(;!o[--a];)o.pop();return t?++n:o.shift(),e.d=o,e.e=vc(o,n),pe?re(e,l.precision,l.rounding):e};M.toBinary=function(e,t){return K0(this,2,e,t)};M.toDecimalPlaces=M.toDP=function(e,t){var n=this,r=n.constructor;return n=new r(n),e===void 0?n:(qt(e,0,Xr),t===void 0?t=r.rounding:qt(t,0,8),re(n,e+n.e+1,t))};M.toExponential=function(e,t){var n,r=this,i=r.constructor;return e===void 0?n=Yn(r,!0):(qt(e,0,Xr),t===void 0?t=i.rounding:qt(t,0,8),r=re(new i(r),e+1,t),n=Yn(r,!0,e+1)),r.isNeg()&&!r.isZero()?"-"+n:n};M.toFixed=function(e,t){var n,r,i=this,o=i.constructor;return e===void 0?n=Yn(i):(qt(e,0,Xr),t===void 0?t=o.rounding:qt(t,0,8),r=re(new o(i),e+i.e+1,t),n=Yn(r,!1,e+r.e+1)),i.isNeg()&&!i.isZero()?"-"+n:n};M.toFraction=function(e){var t,n,r,i,o,a,u,s,f,c,l,d,p=this,h=p.d,v=p.constructor;if(!h)return new v(p);if(f=n=new v(1),r=s=new v(0),t=new v(r),o=t.e=eD(h)-p.e-1,a=o%se,t.d[0]=rt(10,a<0?se+a:a),e==null)e=o>0?t:f;else{if(u=new v(e),!u.isInt()||u.lt(f))throw Error(Yr+u);e=u.gt(t)?o>0?t:f:u}for(pe=!1,u=new v(Dt(h)),c=v.precision,v.precision=o=h.length*se*2;l=Te(u,t,0,1,1),i=n.plus(l.times(r)),i.cmp(e)!=1;)n=r,r=i,i=f,f=s.plus(l.times(i)),s=i,i=t,t=u.minus(l.times(i)),u=i;return i=Te(e.minus(n),r,0,1,1),s=s.plus(i.times(f)),n=n.plus(i.times(r)),s.s=f.s=p.s,d=Te(f,r,o,1).minus(p).abs().cmp(Te(s,n,o,1).minus(p).abs())<1?[f,r]:[s,n],v.precision=c,pe=!0,d};M.toHexadecimal=M.toHex=function(e,t){return K0(this,16,e,t)};M.toNearest=function(e,t){var n=this,r=n.constructor;if(n=new r(n),e==null){if(!n.d)return n;e=new r(1),t=r.rounding}else{if(e=new r(e),t===void 0?t=r.rounding:qt(t,0,8),!n.d)return e.s?n:e;if(!e.d)return e.s&&(e.s=n.s),e}return e.d[0]?(pe=!1,n=Te(n,e,0,t,1).times(e),pe=!0,re(n)):(e.s=n.s,n=e),n};M.toNumber=function(){return+this};M.toOctal=function(e,t){return K0(this,8,e,t)};M.toPower=M.pow=function(e){var t,n,r,i,o,a,u=this,s=u.constructor,f=+(e=new s(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new s(rt(+u,f));if(u=new s(u),u.eq(1))return u;if(r=s.precision,o=s.rounding,e.eq(1))return re(u,r,o);if(t=Pt(e.e/se),t>=e.d.length-1&&(n=f<0?-f:f)<=z6)return i=tD(s,u,n,r),e.s<0?new s(1).div(i):re(i,r,o);if(a=u.s,a<0){if(t<e.d.length-1)return new s(NaN);if(e.d[t]&1||(a=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=a,u}return n=rt(+u,f),t=n==0||!isFinite(n)?Pt(f*(Math.log("0."+Dt(u.d))/Math.LN10+u.e+1)):new s(n+"").e,t>s.maxE+1||t<s.minE-1?new s(t>0?a/0:0):(pe=!1,s.rounding=u.s=1,n=Math.min(12,(t+"").length),i=sp(e.times(Nr(u,r+n)),r),i.d&&(i=re(i,r+5,1),Xa(i.d,r,o)&&(t=r+10,i=re(sp(e.times(Nr(u,t+n)),t),t+5,1),+Dt(i.d).slice(r+1,r+15)+1==1e14&&(i=re(i,r+1,0)))),i.s=a,pe=!0,s.rounding=o,re(i,r,o))};M.toPrecision=function(e,t){var n,r=this,i=r.constructor;return e===void 0?n=Yn(r,r.e<=i.toExpNeg||r.e>=i.toExpPos):(qt(e,1,Xr),t===void 0?t=i.rounding:qt(t,0,8),r=re(new i(r),e,t),n=Yn(r,e<=r.e||r.e<=i.toExpNeg,e)),r.isNeg()&&!r.isZero()?"-"+n:n};M.toSignificantDigits=M.toSD=function(e,t){var n=this,r=n.constructor;return e===void 0?(e=r.precision,t=r.rounding):(qt(e,1,Xr),t===void 0?t=r.rounding:qt(t,0,8)),re(new r(n),e,t)};M.toString=function(){var e=this,t=e.constructor,n=Yn(e,e.e<=t.toExpNeg||e.e>=t.toExpPos);return e.isNeg()&&!e.isZero()?"-"+n:n};M.truncated=M.trunc=function(){return re(new this.constructor(this),this.e+1,1)};M.valueOf=M.toJSON=function(){var e=this,t=e.constructor,n=Yn(e,e.e<=t.toExpNeg||e.e>=t.toExpPos);return e.isNeg()?"-"+n:n};function Dt(e){var t,n,r,i=e.length-1,o="",a=e[0];if(i>0){for(o+=a,t=1;t<i;t++)r=e[t]+"",n=se-r.length,n&&(o+=Er(n)),o+=r;a=e[t],r=a+"",n=se-r.length,n&&(o+=Er(n))}else if(a===0)return"0";for(;a%10===0;)a/=10;return o+a}function qt(e,t,n){if(e!==~~e||e<t||e>n)throw Error(Yr+e)}function Xa(e,t,n,r){var i,o,a,u;for(o=e[0];o>=10;o/=10)--t;return--t<0?(t+=se,i=0):(i=Math.ceil((t+1)/se),t%=se),o=rt(10,se-t),u=e[i]%o|0,r==null?t<3?(t==0?u=u/100|0:t==1&&(u=u/10|0),a=n<4&&u==99999||n>3&&u==49999||u==5e4||u==0):a=(n<4&&u+1==o||n>3&&u+1==o/2)&&(e[i+1]/o/100|0)==rt(10,t-2)-1||(u==o/2||u==0)&&(e[i+1]/o/100|0)==0:t<4?(t==0?u=u/1e3|0:t==1?u=u/100|0:t==2&&(u=u/10|0),a=(r||n<4)&&u==9999||!r&&n>3&&u==4999):a=((r||n<4)&&u+1==o||!r&&n>3&&u+1==o/2)&&(e[i+1]/o/1e3|0)==rt(10,t-3)-1,a}function ys(e,t,n){for(var r,i=[0],o,a=0,u=e.length;a<u;){for(o=i.length;o--;)i[o]*=t;for(i[0]+=op.indexOf(e.charAt(a++)),r=0;r<i.length;r++)i[r]>n-1&&(i[r+1]===void 0&&(i[r+1]=0),i[r+1]+=i[r]/n|0,i[r]%=n)}return i.reverse()}function U6(e,t){var n,r,i;if(t.isZero())return t;r=t.d.length,r<32?(n=Math.ceil(r/3),i=(1/gc(4,n)).toString()):(n=16,i="2.3283064365386962890625e-10"),e.precision+=n,t=wo(e,1,t.times(i),new e(1));for(var o=n;o--;){var a=t.times(t);t=a.times(a).minus(a).times(8).plus(1)}return e.precision-=n,t}var Te=function(){function e(r,i,o){var a,u=0,s=r.length;for(r=r.slice();s--;)a=r[s]*i+u,r[s]=a%o|0,u=a/o|0;return u&&r.unshift(u),r}function t(r,i,o,a){var u,s;if(o!=a)s=o>a?1:-1;else for(u=s=0;u<o;u++)if(r[u]!=i[u]){s=r[u]>i[u]?1:-1;break}return s}function n(r,i,o,a){for(var u=0;o--;)r[o]-=u,u=r[o]<i[o]?1:0,r[o]=u*a+r[o]-i[o];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,o,a,u,s){var f,c,l,d,p,h,v,y,m,g,w,E,A,k,F,x,P,G,ee,ie,he=r.constructor,me=r.s==i.s?1:-1,Z=r.d,ae=i.d;if(!Z||!Z[0]||!ae||!ae[0])return new he(!r.s||!i.s||(Z?ae&&Z[0]==ae[0]:!ae)?NaN:Z&&Z[0]==0||!ae?me*0:me/0);for(s?(p=1,c=r.e-i.e):(s=kn,p=se,c=Pt(r.e/p)-Pt(i.e/p)),ee=ae.length,P=Z.length,m=new he(me),g=m.d=[],l=0;ae[l]==(Z[l]||0);l++);if(ae[l]>(Z[l]||0)&&c--,o==null?(k=o=he.precision,a=he.rounding):u?k=o+(r.e-i.e)+1:k=o,k<0)g.push(1),h=!0;else{if(k=k/p+2|0,l=0,ee==1){for(d=0,ae=ae[0],k++;(l<P||d)&&k--;l++)F=d*s+(Z[l]||0),g[l]=F/ae|0,d=F%ae|0;h=d||l<P}else{for(d=s/(ae[0]+1)|0,d>1&&(ae=e(ae,d,s),Z=e(Z,d,s),ee=ae.length,P=Z.length),x=ee,w=Z.slice(0,ee),E=w.length;E<ee;)w[E++]=0;ie=ae.slice(),ie.unshift(0),G=ae[0],ae[1]>=s/2&&++G;do d=0,f=t(ae,w,ee,E),f<0?(A=w[0],ee!=E&&(A=A*s+(w[1]||0)),d=A/G|0,d>1?(d>=s&&(d=s-1),v=e(ae,d,s),y=v.length,E=w.length,f=t(v,w,y,E),f==1&&(d--,n(v,ee<y?ie:ae,y,s))):(d==0&&(f=d=1),v=ae.slice()),y=v.length,y<E&&v.unshift(0),n(w,v,E,s),f==-1&&(E=w.length,f=t(ae,w,ee,E),f<1&&(d++,n(w,ee<E?ie:ae,E,s))),E=w.length):f===0&&(d++,w=[0]),g[l++]=d,f&&w[0]?w[E++]=Z[x]||0:(w=[Z[x]],E=1);while((x++<P||w[0]!==void 0)&&k--);h=w[0]!==void 0}g[0]||g.shift()}if(p==1)m.e=c,Kw=h;else{for(l=1,d=g[0];d>=10;d/=10)l++;m.e=l+c*p-1,re(m,u?o+m.e+1:o,a,h)}return m}}();function re(e,t,n,r){var i,o,a,u,s,f,c,l,d,p=e.constructor;e:if(t!=null){if(l=e.d,!l)return e;for(i=1,u=l[0];u>=10;u/=10)i++;if(o=t-i,o<0)o+=se,a=t,c=l[d=0],s=c/rt(10,i-a-1)%10|0;else if(d=Math.ceil((o+1)/se),u=l.length,d>=u)if(r){for(;u++<=d;)l.push(0);c=s=0,i=1,o%=se,a=o-se+1}else break e;else{for(c=u=l[d],i=1;u>=10;u/=10)i++;o%=se,a=o-se+i,s=a<0?0:c/rt(10,i-a-1)%10|0}if(r=r||t<0||l[d+1]!==void 0||(a<0?c:c%rt(10,i-a-1)),f=n<4?(s||r)&&(n==0||n==(e.s<0?3:2)):s>5||s==5&&(n==4||r||n==6&&(o>0?a>0?c/rt(10,i-a):0:l[d-1])%10&1||n==(e.s<0?8:7)),t<1||!l[0])return l.length=0,f?(t-=e.e+1,l[0]=rt(10,(se-t%se)%se),e.e=-t||0):l[0]=e.e=0,e;if(o==0?(l.length=d,u=1,d--):(l.length=d+1,u=rt(10,se-o),l[d]=a>0?(c/rt(10,i-a)%rt(10,a)|0)*u:0),f)for(;;)if(d==0){for(o=1,a=l[0];a>=10;a/=10)o++;for(a=l[0]+=u,u=1;a>=10;a/=10)u++;o!=u&&(e.e++,l[0]==kn&&(l[0]=1));break}else{if(l[d]+=u,l[d]!=kn)break;l[d--]=0,u=1}for(o=l.length;l[--o]===0;)l.pop()}return pe&&(e.e>p.maxE?(e.d=null,e.e=NaN):e.e<p.minE&&(e.e=0,e.d=[0])),e}function Yn(e,t,n){if(!e.isFinite())return rD(e);var r,i=e.e,o=Dt(e.d),a=o.length;return t?(n&&(r=n-a)>0?o=o.charAt(0)+"."+o.slice(1)+Er(r):a>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(e.e<0?"e":"e+")+e.e):i<0?(o="0."+Er(-i-1)+o,n&&(r=n-a)>0&&(o+=Er(r))):i>=a?(o+=Er(i+1-a),n&&(r=n-i-1)>0&&(o=o+"."+Er(r))):((r=i+1)<a&&(o=o.slice(0,r)+"."+o.slice(r)),n&&(r=n-a)>0&&(i+1===a&&(o+="."),o+=Er(r))),o}function vc(e,t){var n=e[0];for(t*=se;n>=10;n/=10)t++;return t}function hl(e,t,n){if(t>V6)throw pe=!0,n&&(e.precision=n),Error(Xw);return re(new e(dl),t,1,!0)}function xn(e,t,n){if(t>up)throw Error(Xw);return re(new e(pl),t,n,!0)}function eD(e){var t=e.length-1,n=t*se+1;if(t=e[t],t){for(;t%10==0;t/=10)n--;for(t=e[0];t>=10;t/=10)n++}return n}function Er(e){for(var t="";e--;)t+="0";return t}function tD(e,t,n,r){var i,o=new e(1),a=Math.ceil(r/se+4);for(pe=!1;;){if(n%2&&(o=o.times(t),tv(o.d,a)&&(i=!0)),n=Pt(n/2),n===0){n=o.d.length-1,i&&o.d[n]===0&&++o.d[n];break}t=t.times(t),tv(t.d,a)}return pe=!0,o}function ev(e){return e.d[e.d.length-1]&1}function nD(e,t,n){for(var r,i=new e(t[0]),o=0;++o<t.length;)if(r=new e(t[o]),r.s)i[n](r)&&(i=r);else{i=r;break}return i}function sp(e,t){var n,r,i,o,a,u,s,f=0,c=0,l=0,d=e.constructor,p=d.rounding,h=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(t==null?(pe=!1,s=h):s=t,u=new d(.03125);e.e>-2;)e=e.times(u),l+=5;for(r=Math.log(rt(2,l))/Math.LN10*2+5|0,s+=r,n=o=a=new d(1),d.precision=s;;){if(o=re(o.times(e),s,1),n=n.times(++c),u=a.plus(Te(o,n,s,1)),Dt(u.d).slice(0,s)===Dt(a.d).slice(0,s)){for(i=l;i--;)a=re(a.times(a),s,1);if(t==null)if(f<3&&Xa(a.d,s-r,p,f))d.precision=s+=10,n=o=u=new d(1),c=0,f++;else return re(a,d.precision=h,p,pe=!0);else return d.precision=h,a}a=u}}function Nr(e,t){var n,r,i,o,a,u,s,f,c,l,d,p=1,h=10,v=e,y=v.d,m=v.constructor,g=m.rounding,w=m.precision;if(v.s<0||!y||!y[0]||!v.e&&y[0]==1&&y.length==1)return new m(y&&!y[0]?-1/0:v.s!=1?NaN:y?0:v);if(t==null?(pe=!1,c=w):c=t,m.precision=c+=h,n=Dt(y),r=n.charAt(0),Math.abs(o=v.e)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)v=v.times(e),n=Dt(v.d),r=n.charAt(0),p++;o=v.e,r>1?(v=new m("0."+n),o++):v=new m(r+"."+n.slice(1))}else return f=hl(m,c+2,w).times(o+""),v=Nr(new m(r+"."+n.slice(1)),c-h).plus(f),m.precision=w,t==null?re(v,w,g,pe=!0):v;for(l=v,s=a=v=Te(v.minus(1),v.plus(1),c,1),d=re(v.times(v),c,1),i=3;;){if(a=re(a.times(d),c,1),f=s.plus(Te(a,new m(i),c,1)),Dt(f.d).slice(0,c)===Dt(s.d).slice(0,c))if(s=s.times(2),o!==0&&(s=s.plus(hl(m,c+2,w).times(o+""))),s=Te(s,new m(p),c,1),t==null)if(Xa(s.d,c-h,g,u))m.precision=c+=h,f=a=v=Te(l.minus(1),l.plus(1),c,1),d=re(v.times(v),c,1),i=u=1;else return re(s,m.precision=w,g,pe=!0);else return m.precision=w,s;s=f,i+=2}}function rD(e){return String(e.s*e.s/0)}function lp(e,t){var n,r,i;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;t.charCodeAt(r)===48;r++);for(i=t.length;t.charCodeAt(i-1)===48;--i);if(t=t.slice(r,i),t){if(i-=r,e.e=n=n-r-1,e.d=[],r=(n+1)%se,n<0&&(r+=se),r<i){for(r&&e.d.push(+t.slice(0,r)),i-=se;r<i;)e.d.push(+t.slice(r,r+=se));t=t.slice(r),r=se-t.length}else r-=i;for(;r--;)t+="0";e.d.push(+t),pe&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function H6(e,t){var n,r,i,o,a,u,s,f,c;if(t.indexOf("_")>-1){if(t=t.replace(/(\d)_(?=\d)/g,"$1"),Jw.test(t))return lp(e,t)}else if(t==="Infinity"||t==="NaN")return+t||(e.s=NaN),e.e=NaN,e.d=null,e;if(L6.test(t))n=16,t=t.toLowerCase();else if($6.test(t))n=2;else if(j6.test(t))n=8;else throw Error(Yr+t);for(o=t.search(/p/i),o>0?(s=+t.slice(o+1),t=t.substring(2,o)):t=t.slice(2),o=t.indexOf("."),a=o>=0,r=e.constructor,a&&(t=t.replace(".",""),u=t.length,o=u-o,i=tD(r,new r(n),o,o*2)),f=ys(t,n,kn),c=f.length-1,o=c;f[o]===0;--o)f.pop();return o<0?new r(e.s*0):(e.e=vc(f,c),e.d=f,pe=!1,a&&(e=Te(e,i,u*4)),s&&(e=e.times(Math.abs(s)<54?rt(2,s):Do.pow(2,s))),pe=!0,e)}function W6(e,t){var n,r=t.d.length;if(r<3)return t.isZero()?t:wo(e,2,t,t);n=1.4*Math.sqrt(r),n=n>16?16:n|0,t=t.times(1/gc(5,n)),t=wo(e,2,t,t);for(var i,o=new e(5),a=new e(16),u=new e(20);n--;)i=t.times(t),t=t.times(o.plus(i.times(a.times(i).minus(u))));return t}function wo(e,t,n,r,i){var o,a,u,s,f=e.precision,c=Math.ceil(f/se);for(pe=!1,s=n.times(n),u=new e(r);;){if(a=Te(u.times(s),new e(t++*t++),f,1),u=i?r.plus(a):r.minus(a),r=Te(a.times(s),new e(t++*t++),f,1),a=u.plus(r),a.d[c]!==void 0){for(o=c;a.d[o]===u.d[o]&&o--;);if(o==-1)break}o=u,u=r,r=a,a=o}return pe=!0,a.d.length=c+1,a}function gc(e,t){for(var n=e;--t;)n*=e;return n}function iD(e,t){var n,r=t.s<0,i=xn(e,e.precision,1),o=i.times(.5);if(t=t.abs(),t.lte(o))return Jn=r?4:1,t;if(n=t.divToInt(i),n.isZero())Jn=r?3:2;else{if(t=t.minus(n.times(i)),t.lte(o))return Jn=ev(n)?r?2:3:r?4:1,t;Jn=ev(n)?r?1:4:r?3:2}return t.minus(i).abs()}function K0(e,t,n,r){var i,o,a,u,s,f,c,l,d,p=e.constructor,h=n!==void 0;if(h?(qt(n,1,Xr),r===void 0?r=p.rounding:qt(r,0,8)):(n=p.precision,r=p.rounding),!e.isFinite())c=rD(e);else{for(c=Yn(e),a=c.indexOf("."),h?(i=2,t==16?n=n*4-3:t==8&&(n=n*3-2)):i=t,a>=0&&(c=c.replace(".",""),d=new p(1),d.e=c.length-a,d.d=ys(Yn(d),10,i),d.e=d.d.length),l=ys(c,10,i),o=s=l.length;l[--s]==0;)l.pop();if(!l[0])c=h?"0p+0":"0";else{if(a<0?o--:(e=new p(e),e.d=l,e.e=o,e=Te(e,d,n,r,0,i),l=e.d,o=e.e,f=Kw),a=l[n],u=i/2,f=f||l[n+1]!==void 0,f=r<4?(a!==void 0||f)&&(r===0||r===(e.s<0?3:2)):a>u||a===u&&(r===4||f||r===6&&l[n-1]&1||r===(e.s<0?8:7)),l.length=n,f)for(;++l[--n]>i-1;)l[n]=0,n||(++o,l.unshift(1));for(s=l.length;!l[s-1];--s);for(a=0,c="";a<s;a++)c+=op.charAt(l[a]);if(h){if(s>1)if(t==16||t==8){for(a=t==16?4:3,--s;s%a;s++)c+="0";for(l=ys(c,i,t),s=l.length;!l[s-1];--s);for(a=1,c="1.";a<s;a++)c+=op.charAt(l[a])}else c=c.charAt(0)+"."+c.slice(1);c=c+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)c="0"+c;c="0."+c}else if(++o>s)for(o-=s;o--;)c+="0";else o<s&&(c=c.slice(0,o)+"."+c.slice(o))}c=(t==16?"0x":t==2?"0b":t==8?"0o":"")+c}return e.s<0?"-"+c:c}function tv(e,t){if(e.length>t)return e.length=t,!0}function Y6(e){return new this(e).abs()}function G6(e){return new this(e).acos()}function q6(e){return new this(e).acosh()}function K6(e,t){return new this(e).plus(t)}function X6(e){return new this(e).asin()}function Q6(e){return new this(e).asinh()}function Z6(e){return new this(e).atan()}function J6(e){return new this(e).atanh()}function eN(e,t){e=new this(e),t=new this(t);var n,r=this.precision,i=this.rounding,o=r+4;return!e.s||!t.s?n=new this(NaN):!e.d&&!t.d?(n=xn(this,o,1).times(t.s>0?.25:.75),n.s=e.s):!t.d||e.isZero()?(n=t.s<0?xn(this,r,i):new this(0),n.s=e.s):!e.d||t.isZero()?(n=xn(this,o,1).times(.5),n.s=e.s):t.s<0?(this.precision=o,this.rounding=1,n=this.atan(Te(e,t,o,1)),t=xn(this,o,1),this.precision=r,this.rounding=i,n=e.s<0?n.minus(t):n.plus(t)):n=this.atan(Te(e,t,o,1)),n}function tN(e){return new this(e).cbrt()}function nN(e){return re(e=new this(e),e.e+1,2)}function rN(e,t,n){return new this(e).clamp(t,n)}function iN(e){if(!e||typeof e!="object")throw Error(mc+"Object expected");var t,n,r,i=e.defaults===!0,o=["precision",1,Xr,"rounding",0,8,"toExpNeg",-Qi,0,"toExpPos",0,Qi,"maxE",0,Qi,"minE",-Qi,0,"modulo",0,9];for(t=0;t<o.length;t+=3)if(n=o[t],i&&(this[n]=ap[n]),(r=e[n])!==void 0)if(Pt(r)===r&&r>=o[t+1]&&r<=o[t+2])this[n]=r;else throw Error(Yr+n+": "+r);if(n="crypto",i&&(this[n]=ap[n]),(r=e[n])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[n]=!0;else throw Error(Qw);else this[n]=!1;else throw Error(Yr+n+": "+r);return this}function oN(e){return new this(e).cos()}function aN(e){return new this(e).cosh()}function oD(e){var t,n,r;function i(o){var a,u,s,f=this;if(!(f instanceof i))return new i(o);if(f.constructor=i,nv(o)){f.s=o.s,pe?!o.d||o.e>i.maxE?(f.e=NaN,f.d=null):o.e<i.minE?(f.e=0,f.d=[0]):(f.e=o.e,f.d=o.d.slice()):(f.e=o.e,f.d=o.d?o.d.slice():o.d);return}if(s=typeof o,s==="number"){if(o===0){f.s=1/o<0?-1:1,f.e=0,f.d=[0];return}if(o<0?(o=-o,f.s=-1):f.s=1,o===~~o&&o<1e7){for(a=0,u=o;u>=10;u/=10)a++;pe?a>i.maxE?(f.e=NaN,f.d=null):a<i.minE?(f.e=0,f.d=[0]):(f.e=a,f.d=[o]):(f.e=a,f.d=[o]);return}else if(o*0!==0){o||(f.s=NaN),f.e=NaN,f.d=null;return}return lp(f,o.toString())}else if(s!=="string")throw Error(Yr+o);return(u=o.charCodeAt(0))===45?(o=o.slice(1),f.s=-1):(u===43&&(o=o.slice(1)),f.s=1),Jw.test(o)?lp(f,o):H6(f,o)}if(i.prototype=M,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=iN,i.clone=oD,i.isDecimal=nv,i.abs=Y6,i.acos=G6,i.acosh=q6,i.add=K6,i.asin=X6,i.asinh=Q6,i.atan=Z6,i.atanh=J6,i.atan2=eN,i.cbrt=tN,i.ceil=nN,i.clamp=rN,i.cos=oN,i.cosh=aN,i.div=uN,i.exp=sN,i.floor=lN,i.hypot=cN,i.ln=fN,i.log=dN,i.log10=hN,i.log2=pN,i.max=mN,i.min=vN,i.mod=gN,i.mul=yN,i.pow=wN,i.random=DN,i.round=EN,i.sign=CN,i.sin=bN,i.sinh=SN,i.sqrt=xN,i.sub=AN,i.sum=FN,i.tan=kN,i.tanh=NN,i.trunc=ON,e===void 0&&(e={}),e&&e.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n]);return i.config(e),i}function uN(e,t){return new this(e).div(t)}function sN(e){return new this(e).exp()}function lN(e){return re(e=new this(e),e.e+1,3)}function cN(){var e,t,n=new this(0);for(pe=!1,e=0;e<arguments.length;)if(t=new this(arguments[e++]),t.d)n.d&&(n=n.plus(t.times(t)));else{if(t.s)return pe=!0,new this(1/0);n=t}return pe=!0,n.sqrt()}function nv(e){return e instanceof Do||e&&e.toStringTag===Zw||!1}function fN(e){return new this(e).ln()}function dN(e,t){return new this(e).log(t)}function pN(e){return new this(e).log(2)}function hN(e){return new this(e).log(10)}function mN(){return nD(this,arguments,"lt")}function vN(){return nD(this,arguments,"gt")}function gN(e,t){return new this(e).mod(t)}function yN(e,t){return new this(e).mul(t)}function wN(e,t){return new this(e).pow(t)}function DN(e){var t,n,r,i,o=0,a=new this(1),u=[];if(e===void 0?e=this.precision:qt(e,1,Xr),r=Math.ceil(e/se),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(r));o<r;)i=t[o],i>=429e7?t[o]=crypto.getRandomValues(new Uint32Array(1))[0]:u[o++]=i%1e7;else if(crypto.randomBytes){for(t=crypto.randomBytes(r*=4);o<r;)i=t[o]+(t[o+1]<<8)+(t[o+2]<<16)+((t[o+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(t,o):(u.push(i%1e7),o+=4);o=r/4}else throw Error(Qw);else for(;o<r;)u[o++]=Math.random()*1e7|0;for(r=u[--o],e%=se,r&&e&&(i=rt(10,se-e),u[o]=(r/i|0)*i);u[o]===0;o--)u.pop();if(o<0)n=0,u=[0];else{for(n=-1;u[0]===0;n-=se)u.shift();for(r=1,i=u[0];i>=10;i/=10)r++;r<se&&(n-=se-r)}return a.e=n,a.d=u,a}function EN(e){return re(e=new this(e),e.e+1,this.rounding)}function CN(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function bN(e){return new this(e).sin()}function SN(e){return new this(e).sinh()}function xN(e){return new this(e).sqrt()}function AN(e,t){return new this(e).sub(t)}function FN(){var e=0,t=arguments,n=new this(t[e]);for(pe=!1;n.s&&++e<t.length;)n=n.plus(t[e]);return pe=!0,re(n,this.precision,this.rounding)}function kN(e){return new this(e).tan()}function NN(e){return new this(e).tanh()}function ON(e){return re(e=new this(e),e.e+1,1)}M[Symbol.for("nodejs.util.inspect.custom")]=M.toString;M[Symbol.toStringTag]="Decimal";var Do=M.constructor=oD(ap);dl=new Do(dl);pl=new Do(pl);var PN="BigNumber",IN=["?on","config"],TN=Ai(PN,IN,e=>{var{on:t,config:n}=e,r=Do.clone({precision:n.precision,modulo:Do.EUCLID});return r.prototype=Object.create(r.prototype),r.prototype.type="BigNumber",r.prototype.isBigNumber=!0,r.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},r.fromJSON=function(i){return new r(i.value)},t&&t("config",function(i,o){i.precision!==o.precision&&r.config({precision:i.precision})}),r},{isClass:!0}),cp={},_N={get exports(){return cp},set exports(e){cp=e}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(e,t){(function(n){var r=Math.cosh||function(l){return Math.abs(l)<1e-9?1-l:(Math.exp(l)+Math.exp(-l))*.5},i=Math.sinh||function(l){return Math.abs(l)<1e-9?l:(Math.exp(l)-Math.exp(-l))*.5},o=function(l){var d=Math.PI/4;if(-d>l||l>d)return Math.cos(l)-1;var p=l*l;return p*(p*(p*(p*(p*(p*(p*(p/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},a=function(l,d){var p=Math.abs(l),h=Math.abs(d);return p<3e3&&h<3e3?Math.sqrt(p*p+h*h):(p<h?(p=h,h=l/d):h=d/l,p*Math.sqrt(1+h*h))},u=function(){throw SyntaxError("Invalid Param")};function s(l,d){var p=Math.abs(l),h=Math.abs(d);return l===0?Math.log(h):d===0?Math.log(p):p<3e3&&h<3e3?Math.log(l*l+d*d)*.5:(l=l/2,d=d/2,.5*Math.log(l*l+d*d)+Math.LN2)}var f=function(l,d){var p={re:0,im:0};if(l==null)p.re=p.im=0;else if(d!==void 0)p.re=l,p.im=d;else switch(typeof l){case"object":if("im"in l&&"re"in l)p.re=l.re,p.im=l.im;else if("abs"in l&&"arg"in l){if(!Number.isFinite(l.abs)&&Number.isFinite(l.arg))return c.INFINITY;p.re=l.abs*Math.cos(l.arg),p.im=l.abs*Math.sin(l.arg)}else if("r"in l&&"phi"in l){if(!Number.isFinite(l.r)&&Number.isFinite(l.phi))return c.INFINITY;p.re=l.r*Math.cos(l.phi),p.im=l.r*Math.sin(l.phi)}else l.length===2?(p.re=l[0],p.im=l[1]):u();break;case"string":p.im=p.re=0;var h=l.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),v=1,y=0;h===null&&u();for(var m=0;m<h.length;m++){var g=h[m];g===" "||g==="	"||g===`
`||(g==="+"?v++:g==="-"?y++:g==="i"||g==="I"?(v+y===0&&u(),h[m+1]!==" "&&!isNaN(h[m+1])?(p.im+=parseFloat((y%2?"-":"")+h[m+1]),m++):p.im+=parseFloat((y%2?"-":"")+"1"),v=y=0):((v+y===0||isNaN(g))&&u(),h[m+1]==="i"||h[m+1]==="I"?(p.im+=parseFloat((y%2?"-":"")+g),m++):p.re+=parseFloat((y%2?"-":"")+g),v=y=0))}v+y>0&&u();break;case"number":p.im=0,p.re=l;break;default:u()}return isNaN(p.re)||isNaN(p.im),p};function c(l,d){if(!(this instanceof c))return new c(l,d);var p=f(l,d);this.re=p.re,this.im=p.im}c.prototype={re:0,im:0,sign:function(){var l=this.abs();return new c(this.re/l,this.im/l)},add:function(l,d){var p=new c(l,d);return this.isInfinite()&&p.isInfinite()?c.NAN:this.isInfinite()||p.isInfinite()?c.INFINITY:new c(this.re+p.re,this.im+p.im)},sub:function(l,d){var p=new c(l,d);return this.isInfinite()&&p.isInfinite()?c.NAN:this.isInfinite()||p.isInfinite()?c.INFINITY:new c(this.re-p.re,this.im-p.im)},mul:function(l,d){var p=new c(l,d);return this.isInfinite()&&p.isZero()||this.isZero()&&p.isInfinite()?c.NAN:this.isInfinite()||p.isInfinite()?c.INFINITY:p.im===0&&this.im===0?new c(this.re*p.re,0):new c(this.re*p.re-this.im*p.im,this.re*p.im+this.im*p.re)},div:function(l,d){var p=new c(l,d);if(this.isZero()&&p.isZero()||this.isInfinite()&&p.isInfinite())return c.NAN;if(this.isInfinite()||p.isZero())return c.INFINITY;if(this.isZero()||p.isInfinite())return c.ZERO;l=this.re,d=this.im;var h=p.re,v=p.im,y,m;return v===0?new c(l/h,d/h):Math.abs(h)<Math.abs(v)?(m=h/v,y=h*m+v,new c((l*m+d)/y,(d*m-l)/y)):(m=v/h,y=v*m+h,new c((l+d*m)/y,(d-l*m)/y))},pow:function(l,d){var p=new c(l,d);if(l=this.re,d=this.im,p.isZero())return c.ONE;if(p.im===0){if(d===0&&l>0)return new c(Math.pow(l,p.re),0);if(l===0)switch((p.re%4+4)%4){case 0:return new c(Math.pow(d,p.re),0);case 1:return new c(0,Math.pow(d,p.re));case 2:return new c(-Math.pow(d,p.re),0);case 3:return new c(0,-Math.pow(d,p.re))}}if(l===0&&d===0&&p.re>0&&p.im>=0)return c.ZERO;var h=Math.atan2(d,l),v=s(l,d);return l=Math.exp(p.re*v-p.im*h),d=p.im*v+p.re*h,new c(l*Math.cos(d),l*Math.sin(d))},sqrt:function(){var l=this.re,d=this.im,p=this.abs(),h,v;if(l>=0){if(d===0)return new c(Math.sqrt(l),0);h=.5*Math.sqrt(2*(p+l))}else h=Math.abs(d)/Math.sqrt(2*(p-l));return l<=0?v=.5*Math.sqrt(2*(p-l)):v=Math.abs(d)/Math.sqrt(2*(p+l)),new c(h,d<0?-v:v)},exp:function(){var l=Math.exp(this.re);return this.im,new c(l*Math.cos(this.im),l*Math.sin(this.im))},expm1:function(){var l=this.re,d=this.im;return new c(Math.expm1(l)*Math.cos(d)+o(d),Math.exp(l)*Math.sin(d))},log:function(){var l=this.re,d=this.im;return new c(s(l,d),Math.atan2(d,l))},abs:function(){return a(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var l=this.re,d=this.im;return new c(Math.sin(l)*r(d),Math.cos(l)*i(d))},cos:function(){var l=this.re,d=this.im;return new c(Math.cos(l)*r(d),-Math.sin(l)*i(d))},tan:function(){var l=2*this.re,d=2*this.im,p=Math.cos(l)+r(d);return new c(Math.sin(l)/p,i(d)/p)},cot:function(){var l=2*this.re,d=2*this.im,p=Math.cos(l)-r(d);return new c(-Math.sin(l)/p,i(d)/p)},sec:function(){var l=this.re,d=this.im,p=.5*r(2*d)+.5*Math.cos(2*l);return new c(Math.cos(l)*r(d)/p,Math.sin(l)*i(d)/p)},csc:function(){var l=this.re,d=this.im,p=.5*r(2*d)-.5*Math.cos(2*l);return new c(Math.sin(l)*r(d)/p,-Math.cos(l)*i(d)/p)},asin:function(){var l=this.re,d=this.im,p=new c(d*d-l*l+1,-2*l*d).sqrt(),h=new c(p.re-d,p.im+l).log();return new c(h.im,-h.re)},acos:function(){var l=this.re,d=this.im,p=new c(d*d-l*l+1,-2*l*d).sqrt(),h=new c(p.re-d,p.im+l).log();return new c(Math.PI/2-h.im,h.re)},atan:function(){var l=this.re,d=this.im;if(l===0){if(d===1)return new c(0,1/0);if(d===-1)return new c(0,-1/0)}var p=l*l+(1-d)*(1-d),h=new c((1-d*d-l*l)/p,-2*l/p).log();return new c(-.5*h.im,.5*h.re)},acot:function(){var l=this.re,d=this.im;if(d===0)return new c(Math.atan2(1,l),0);var p=l*l+d*d;return p!==0?new c(l/p,-d/p).atan():new c(l!==0?l/0:0,d!==0?-d/0:0).atan()},asec:function(){var l=this.re,d=this.im;if(l===0&&d===0)return new c(0,1/0);var p=l*l+d*d;return p!==0?new c(l/p,-d/p).acos():new c(l!==0?l/0:0,d!==0?-d/0:0).acos()},acsc:function(){var l=this.re,d=this.im;if(l===0&&d===0)return new c(Math.PI/2,1/0);var p=l*l+d*d;return p!==0?new c(l/p,-d/p).asin():new c(l!==0?l/0:0,d!==0?-d/0:0).asin()},sinh:function(){var l=this.re,d=this.im;return new c(i(l)*Math.cos(d),r(l)*Math.sin(d))},cosh:function(){var l=this.re,d=this.im;return new c(r(l)*Math.cos(d),i(l)*Math.sin(d))},tanh:function(){var l=2*this.re,d=2*this.im,p=r(l)+Math.cos(d);return new c(i(l)/p,Math.sin(d)/p)},coth:function(){var l=2*this.re,d=2*this.im,p=r(l)-Math.cos(d);return new c(i(l)/p,-Math.sin(d)/p)},csch:function(){var l=this.re,d=this.im,p=Math.cos(2*d)-r(2*l);return new c(-2*i(l)*Math.cos(d)/p,2*r(l)*Math.sin(d)/p)},sech:function(){var l=this.re,d=this.im,p=Math.cos(2*d)+r(2*l);return new c(2*r(l)*Math.cos(d)/p,-2*i(l)*Math.sin(d)/p)},asinh:function(){var l=this.im;this.im=-this.re,this.re=l;var d=this.asin();return this.re=-this.im,this.im=l,l=d.re,d.re=-d.im,d.im=l,d},acosh:function(){var l=this.acos();if(l.im<=0){var d=l.re;l.re=-l.im,l.im=d}else{var d=l.im;l.im=-l.re,l.re=d}return l},atanh:function(){var l=this.re,d=this.im,p=l>1&&d===0,h=1-l,v=1+l,y=h*h+d*d,m=y!==0?new c((v*h-d*d)/y,(d*h+v*d)/y):new c(l!==-1?l/0:0,d!==0?d/0:0),g=m.re;return m.re=s(m.re,m.im)/2,m.im=Math.atan2(m.im,g)/2,p&&(m.im=-m.im),m},acoth:function(){var l=this.re,d=this.im;if(l===0&&d===0)return new c(0,Math.PI/2);var p=l*l+d*d;return p!==0?new c(l/p,-d/p).atanh():new c(l!==0?l/0:0,d!==0?-d/0:0).atanh()},acsch:function(){var l=this.re,d=this.im;if(d===0)return new c(l!==0?Math.log(l+Math.sqrt(l*l+1)):1/0,0);var p=l*l+d*d;return p!==0?new c(l/p,-d/p).asinh():new c(l!==0?l/0:0,d!==0?-d/0:0).asinh()},asech:function(){var l=this.re,d=this.im;if(this.isZero())return c.INFINITY;var p=l*l+d*d;return p!==0?new c(l/p,-d/p).acosh():new c(l!==0?l/0:0,d!==0?-d/0:0).acosh()},inverse:function(){if(this.isZero())return c.INFINITY;if(this.isInfinite())return c.ZERO;var l=this.re,d=this.im,p=l*l+d*d;return new c(l/p,-d/p)},conjugate:function(){return new c(this.re,-this.im)},neg:function(){return new c(-this.re,-this.im)},ceil:function(l){return l=Math.pow(10,l||0),new c(Math.ceil(this.re*l)/l,Math.ceil(this.im*l)/l)},floor:function(l){return l=Math.pow(10,l||0),new c(Math.floor(this.re*l)/l,Math.floor(this.im*l)/l)},round:function(l){return l=Math.pow(10,l||0),new c(Math.round(this.re*l)/l,Math.round(this.im*l)/l)},equals:function(l,d){var p=new c(l,d);return Math.abs(p.re-this.re)<=c.EPSILON&&Math.abs(p.im-this.im)<=c.EPSILON},clone:function(){return new c(this.re,this.im)},toString:function(){var l=this.re,d=this.im,p="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(l)<c.EPSILON&&(l=0),Math.abs(d)<c.EPSILON&&(d=0),d===0?p+l:(l!==0?(p+=l,p+=" ",d<0?(d=-d,p+="-"):p+="+",p+=" "):d<0&&(d=-d,p+="-"),d!==1&&(p+=d),p+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},c.ZERO=new c(0,0),c.ONE=new c(1,0),c.I=new c(0,1),c.PI=new c(Math.PI,0),c.E=new c(Math.E,0),c.INFINITY=new c(1/0,1/0),c.NAN=new c(NaN,NaN),c.EPSILON=1e-15,Object.defineProperty(c,"__esModule",{value:!0}),c.default=c,c.Complex=c,e.exports=c})()})(_N);const mt=dp(cp);var MN="Complex",RN=[],BN=Ai(MN,RN,()=>(Object.defineProperty(mt,"name",{value:"Complex"}),mt.prototype.constructor=mt,mt.prototype.type="Complex",mt.prototype.isComplex=!0,mt.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},mt.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},mt.prototype.format=function(e){var t="",n=this.im,r=this.re,i=tp(this.re,e),o=tp(this.im,e),a=Rt(e)?e:e?e.precision:null;if(a!==null){var u=Math.pow(10,-a);Math.abs(r/n)<u&&(r=0),Math.abs(n/r)<u&&(n=0)}return n===0?t=i:r===0?n===1?t="i":n===-1?t="-i":t=o+"i":n<0?n===-1?t=i+" - i":t=i+" - "+o.substring(1)+"i":n===1?t=i+" + i":t=i+" + "+o+"i",t},mt.fromPolar=function(e){switch(arguments.length){case 1:{var t=arguments[0];if(typeof t=="object")return mt(t);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var n=arguments[0],r=arguments[1];if(Rt(n)){if(Rw(r)&&r.hasBase("ANGLE")&&(r=r.toNumber("rad")),Rt(r))return new mt({r:n,phi:r});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},mt.prototype.valueOf=mt.prototype.toString,mt.fromJSON=function(e){return new mt(e)},mt.compare=function(e,t){return e.re>t.re?1:e.re<t.re?-1:e.im>t.im?1:e.im<t.im?-1:0},mt),{isClass:!0}),fp={},$N={get exports(){return fp},set exports(e){fp=e}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(e,t){(function(n){var r=2e3,i={s:1,n:0,d:1};function o(h,v){if(isNaN(h=parseInt(h,10)))throw p.InvalidParameter;return h*v}function a(h,v){if(v===0)throw p.DivisionByZero;var y=Object.create(p.prototype);y.s=h<0?-1:1,h=h<0?-h:h;var m=d(h,v);return y.n=h/m,y.d=v/m,y}function u(h){for(var v={},y=h,m=2,g=4;g<=y;){for(;y%m===0;)y/=m,v[m]=(v[m]||0)+1;g+=1+2*m++}return y!==h?y>1&&(v[y]=(v[y]||0)+1):v[h]=(v[h]||0)+1,v}var s=function(h,v){var y=0,m=1,g=1,w=0,E=0,A=0,k=1,F=1,x=0,P=1,G=1,ee=1,ie=1e7,he;if(h!=null)if(v!==void 0){if(y=h,m=v,g=y*m,y%1!==0||m%1!==0)throw p.NonIntegerParameter}else switch(typeof h){case"object":{if("d"in h&&"n"in h)y=h.n,m=h.d,"s"in h&&(y*=h.s);else if(0 in h)y=h[0],1 in h&&(m=h[1]);else throw p.InvalidParameter;g=y*m;break}case"number":{if(h<0&&(g=h,h=-h),h%1===0)y=h;else if(h>0){for(h>=1&&(F=Math.pow(10,Math.floor(1+Math.log(h)/Math.LN10)),h/=F);P<=ie&&ee<=ie;)if(he=(x+G)/(P+ee),h===he){P+ee<=ie?(y=x+G,m=P+ee):ee>P?(y=G,m=ee):(y=x,m=P);break}else h>he?(x+=G,P+=ee):(G+=x,ee+=P),P>ie?(y=G,m=ee):(y=x,m=P);y*=F}else(isNaN(h)||isNaN(v))&&(m=y=NaN);break}case"string":{if(P=h.match(/\d+|./g),P===null)throw p.InvalidParameter;if(P[x]==="-"?(g=-1,x++):P[x]==="+"&&x++,P.length===x+1?E=o(P[x++],g):P[x+1]==="."||P[x]==="."?(P[x]!=="."&&(w=o(P[x++],g)),x++,(x+1===P.length||P[x+1]==="("&&P[x+3]===")"||P[x+1]==="'"&&P[x+3]==="'")&&(E=o(P[x],g),k=Math.pow(10,P[x].length),x++),(P[x]==="("&&P[x+2]===")"||P[x]==="'"&&P[x+2]==="'")&&(A=o(P[x+1],g),F=Math.pow(10,P[x+1].length)-1,x+=3)):P[x+1]==="/"||P[x+1]===":"?(E=o(P[x],g),k=o(P[x+2],1),x+=3):P[x+3]==="/"&&P[x+1]===" "&&(w=o(P[x],g),E=o(P[x+2],g),k=o(P[x+4],1),x+=5),P.length<=x){m=k*F,g=y=A+m*w+F*E;break}}default:throw p.InvalidParameter}if(m===0)throw p.DivisionByZero;i.s=g<0?-1:1,i.n=Math.abs(y),i.d=Math.abs(m)};function f(h,v,y){for(var m=1;v>0;h=h*h%y,v>>=1)v&1&&(m=m*h%y);return m}function c(h,v){for(;v%2===0;v/=2);for(;v%5===0;v/=5);if(v===1)return 0;for(var y=10%v,m=1;y!==1;m++)if(y=y*10%v,m>r)return 0;return m}function l(h,v,y){for(var m=1,g=f(10,y,v),w=0;w<300;w++){if(m===g)return w;m=m*10%v,g=g*10%v}return 0}function d(h,v){if(!h)return v;if(!v)return h;for(;;){if(h%=v,!h)return v;if(v%=h,!v)return h}}function p(h,v){if(s(h,v),this instanceof p)h=d(i.d,i.n),this.s=i.s,this.n=i.n/h,this.d=i.d/h;else return a(i.s*i.n,i.d)}p.DivisionByZero=new Error("Division by Zero"),p.InvalidParameter=new Error("Invalid argument"),p.NonIntegerParameter=new Error("Parameters must be integer"),p.prototype={s:1,n:0,d:1,abs:function(){return a(this.n,this.d)},neg:function(){return a(-this.s*this.n,this.d)},add:function(h,v){return s(h,v),a(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(h,v){return s(h,v),a(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(h,v){return s(h,v),a(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(h,v){return s(h,v),a(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return a(this.s*this.n,this.d)},mod:function(h,v){if(isNaN(this.n)||isNaN(this.d))return new p(NaN);if(h===void 0)return a(this.s*this.n%this.d,1);if(s(h,v),i.n===0&&this.d===0)throw p.DivisionByZero;return a(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d)},gcd:function(h,v){return s(h,v),a(d(i.n,this.n)*d(i.d,this.d),i.d*this.d)},lcm:function(h,v){return s(h,v),i.n===0&&this.n===0?a(0,1):a(i.n*this.n,d(i.n,this.n)*d(i.d,this.d))},ceil:function(h){return h=Math.pow(10,h||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):a(Math.ceil(h*this.s*this.n/this.d),h)},floor:function(h){return h=Math.pow(10,h||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):a(Math.floor(h*this.s*this.n/this.d),h)},round:function(h){return h=Math.pow(10,h||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):a(Math.round(h*this.s*this.n/this.d),h)},inverse:function(){return a(this.s*this.d,this.n)},pow:function(h,v){if(s(h,v),i.d===1)return i.s<0?a(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):a(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var y=u(this.n),m=u(this.d),g=1,w=1;for(var E in y)if(E!=="1"){if(E==="0"){g=0;break}if(y[E]*=i.n,y[E]%i.d===0)y[E]/=i.d;else return null;g*=Math.pow(E,y[E])}for(var E in m)if(E!=="1"){if(m[E]*=i.n,m[E]%i.d===0)m[E]/=i.d;else return null;w*=Math.pow(E,m[E])}return i.s<0?a(w,g):a(g,w)},equals:function(h,v){return s(h,v),this.s*this.n*i.d===i.s*i.n*this.d},compare:function(h,v){s(h,v);var y=this.s*this.n*i.d-i.s*i.n*this.d;return(0<y)-(y<0)},simplify:function(h){if(isNaN(this.n)||isNaN(this.d))return this;h=h||.001;for(var v=this.abs(),y=v.toContinued(),m=1;m<y.length;m++){for(var g=a(y[m-1],1),w=m-2;w>=0;w--)g=g.inverse().add(y[w]);if(g.sub(v).abs().valueOf()<h)return g.mul(this.s)}return this},divisible:function(h,v){return s(h,v),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(h){var v,y="",m=this.n,g=this.d;return this.s<0&&(y+="-"),g===1?y+=m:(h&&(v=Math.floor(m/g))>0&&(y+=v,y+=" ",m%=g),y+=m,y+="/",y+=g),y},toLatex:function(h){var v,y="",m=this.n,g=this.d;return this.s<0&&(y+="-"),g===1?y+=m:(h&&(v=Math.floor(m/g))>0&&(y+=v,m%=g),y+="\\frac{",y+=m,y+="}{",y+=g,y+="}"),y},toContinued:function(){var h,v=this.n,y=this.d,m=[];if(isNaN(v)||isNaN(y))return m;do m.push(Math.floor(v/y)),h=v%y,v=y,y=h;while(v!==1);return m},toString:function(h){var v=this.n,y=this.d;if(isNaN(v)||isNaN(y))return"NaN";h=h||15;var m=c(v,y),g=l(v,y,m),w=this.s<0?"-":"";if(w+=v/y|0,v%=y,v*=10,v&&(w+="."),m){for(var E=g;E--;)w+=v/y|0,v%=y,v*=10;w+="(";for(var E=m;E--;)w+=v/y|0,v%=y,v*=10;w+=")"}else for(var E=h;v&&E--;)w+=v/y|0,v%=y,v*=10;return w}},Object.defineProperty(p,"__esModule",{value:!0}),p.default=p,p.Fraction=p,e.exports=p})()})($N);const qn=dp(fp);var LN="Fraction",jN=[],zN=Ai(LN,jN,()=>(Object.defineProperty(qn,"name",{value:"Fraction"}),qn.prototype.constructor=qn,qn.prototype.type="Fraction",qn.prototype.isFraction=!0,qn.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},qn.fromJSON=function(e){return new qn(e)},qn),{isClass:!0}),VN="Matrix",UN=[],HN=Ai(VN,UN,()=>{function e(){if(!(this instanceof e))throw new SyntaxError("Constructor must be called with the new operator")}return e.prototype.type="Matrix",e.prototype.isMatrix=!0,e.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},e.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},e.prototype.create=function(t,n){throw new Error("Cannot invoke create on a Matrix interface")},e.prototype.subset=function(t,n,r){throw new Error("Cannot invoke subset on a Matrix interface")},e.prototype.get=function(t){throw new Error("Cannot invoke get on a Matrix interface")},e.prototype.set=function(t,n,r){throw new Error("Cannot invoke set on a Matrix interface")},e.prototype.resize=function(t,n){throw new Error("Cannot invoke resize on a Matrix interface")},e.prototype.reshape=function(t,n){throw new Error("Cannot invoke reshape on a Matrix interface")},e.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},e.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},e.prototype.map=function(t,n){throw new Error("Cannot invoke map on a Matrix interface")},e.prototype.forEach=function(t){throw new Error("Cannot invoke forEach on a Matrix interface")},e.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},e.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},e.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},e.prototype.format=function(t){throw new Error("Cannot invoke format on a Matrix interface")},e.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},e},{isClass:!0});function WN(e){return Object.keys(e.signatures||{}).reduce(function(t,n){var r=(n.match(/,/g)||[]).length+1;return Math.max(t,r)},-1)}var YN="DenseMatrix",GN=["Matrix"],qN=Ai(YN,GN,e=>{var{Matrix:t}=e;function n(c,l){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");if(l&&!cl(l))throw new Error("Invalid datatype: "+l);if(ya(c))c.type==="DenseMatrix"?(this._data=oi(c._data),this._size=oi(c._size),this._datatype=l||c._datatype):(this._data=c.toArray(),this._size=c.size(),this._datatype=l||c._datatype);else if(c&&Xt(c.data)&&Xt(c.size))this._data=c.data,this._size=c.size,Z1(this._data,this._size),this._datatype=l||c.datatype;else if(Xt(c))this._data=f(c),this._size=np(this._data),Z1(this._data,this._size),this._datatype=l;else{if(c)throw new TypeError("Unsupported type of data ("+vf(c)+")");this._data=[],this._size=[0],this._datatype=l}}n.prototype=new t,n.prototype.createDenseMatrix=function(c,l){return new n(c,l)},Object.defineProperty(n,"name",{value:"DenseMatrix"}),n.prototype.constructor=n,n.prototype.type="DenseMatrix",n.prototype.isDenseMatrix=!0,n.prototype.getDataType=function(){return ip(this._data,vf)},n.prototype.storage=function(){return"dense"},n.prototype.datatype=function(){return this._datatype},n.prototype.create=function(c,l){return new n(c,l)},n.prototype.subset=function(c,l,d){switch(arguments.length){case 1:return r(this,c);case 2:case 3:return o(this,c,l,d);default:throw new SyntaxError("Wrong number of arguments")}},n.prototype.get=function(c){if(!Xt(c))throw new TypeError("Array expected");if(c.length!==this._size.length)throw new ct(c.length,this._size.length);for(var l=0;l<c.length;l++)cn(c[l],this._size[l]);for(var d=this._data,p=0,h=c.length;p<h;p++){var v=c[p];cn(v,d.length),d=d[v]}return d},n.prototype.set=function(c,l,d){if(!Xt(c))throw new TypeError("Array expected");if(c.length<this._size.length)throw new ct(c.length,this._size.length,"<");var p,h,v,y=c.map(function(g){return g+1});s(this,y,d);var m=this._data;for(p=0,h=c.length-1;p<h;p++)v=c[p],cn(v,m.length),m=m[v];return v=c[c.length-1],cn(v,m.length),m[v]=l,this};function r(c,l){if(!Bw(l))throw new TypeError("Invalid index");var d=l.isScalar();if(d)return c.get(l.min());var p=l.size();if(p.length!==c._size.length)throw new ct(p.length,c._size.length);for(var h=l.min(),v=l.max(),y=0,m=c._size.length;y<m;y++)cn(h[y],c._size[y]),cn(v[y],c._size[y]);return new n(i(c._data,l,p.length,0),c._datatype)}function i(c,l,d,p){var h=p===d-1,v=l.dimension(p);return h?v.map(function(y){return cn(y,c.length),c[y]}).valueOf():v.map(function(y){cn(y,c.length);var m=c[y];return i(m,l,d,p+1)}).valueOf()}function o(c,l,d,p){if(!l||l.isIndex!==!0)throw new TypeError("Invalid index");var h=l.size(),v=l.isScalar(),y;if(ya(d)?(y=d.size(),d=d.valueOf()):y=np(d),v){if(y.length!==0)throw new TypeError("Scalar expected");c.set(l.min(),d,p)}else{if(h.length<c._size.length)throw new ct(h.length,c._size.length,"<");if(y.length<h.length){for(var m=0,g=0;h[m]===1&&y[m]===1;)m++;for(;h[m]===1;)g++,m++;d=C6(d,h.length,g,y)}if(!ep(h,y))throw new ct(h,y,">");var w=l.max().map(function(k){return k+1});s(c,w,p);var E=h.length,A=0;a(c._data,l,d,E,A)}return c}function a(c,l,d,p,h){var v=h===p-1,y=l.dimension(h);v?y.forEach(function(m,g){cn(m),c[m]=d[g[0]]}):y.forEach(function(m,g){cn(m),a(c[m],l,d[g[0]],p,h+1)})}n.prototype.resize=function(c,l,d){if(!Jd(c))throw new TypeError("Array or Matrix expected");var p=c.valueOf().map(v=>Array.isArray(v)&&v.length===1?v[0]:v),h=d?this.clone():this;return u(h,p,l)};function u(c,l,d){if(l.length===0){for(var p=c._data;Xt(p);)p=p[0];return p}return c._size=l.slice(0),c._data=J1(c._data,c._size,d),c}n.prototype.reshape=function(c,l){var d=l?this.clone():this;d._data=D6(d._data,c);var p=d._size.reduce((h,v)=>h*v);return d._size=Uw(c,p),d};function s(c,l,d){for(var p=c._size.slice(0),h=!1;p.length<l.length;)p.push(0),h=!0;for(var v=0,y=l.length;v<y;v++)l[v]>p[v]&&(p[v]=l[v],h=!0);h&&u(c,p,d)}n.prototype.clone=function(){var c=new n({data:oi(this._data),size:oi(this._size),datatype:this._datatype});return c},n.prototype.size=function(){return this._size.slice(0)},n.prototype.map=function(c){var l=this,d=WN(c),p=function y(m,g){return Xt(m)?m.map(function(w,E){return y(w,g.concat(E))}):d===1?c(m):d===2?c(m,g):c(m,g,l)},h=p(this._data,[]),v=this._datatype!==void 0?ip(h,vf):void 0;return new n(h,v)},n.prototype.forEach=function(c){var l=this,d=function p(h,v){Xt(h)?h.forEach(function(y,m){p(y,v.concat(m))}):c(h,v,l)};d(this._data,[])},n.prototype[Symbol.iterator]=function*(){var c=function*l(d,p){if(Xt(d))for(var h=0;h<d.length;h++)yield*l(d[h],p.concat(h));else yield{value:d,index:p}};yield*c(this._data,[])},n.prototype.rows=function(){var c=[],l=this.size();if(l.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var d=this._data;for(var p of d)c.push(new n([p],this._datatype));return c},n.prototype.columns=function(){var c=this,l=[],d=this.size();if(d.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var p=this._data,h=function(m){var g=p.map(w=>[w[m]]);l.push(new n(g,c._datatype))},v=0;v<d[1];v++)h(v);return l},n.prototype.toArray=function(){return oi(this._data)},n.prototype.valueOf=function(){return this._data},n.prototype.format=function(c){return Ka(this._data,c)},n.prototype.toString=function(){return Ka(this._data)},n.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},n.prototype.diagonal=function(c){if(c){if(kr(c)&&(c=c.toNumber()),!Rt(c)||!Bn(c))throw new TypeError("The parameter k must be an integer number")}else c=0;for(var l=c>0?c:0,d=c<0?-c:0,p=this._size[0],h=this._size[1],v=Math.min(p-d,h-l),y=[],m=0;m<v;m++)y[m]=this._data[m+d][m+l];return new n({data:y,size:[v],datatype:this._datatype})},n.diagonal=function(c,l,d,p){if(!Xt(c))throw new TypeError("Array expected, size parameter");if(c.length!==2)throw new Error("Only two dimensions matrix are supported");if(c=c.map(function(F){if(kr(F)&&(F=F.toNumber()),!Rt(F)||!Bn(F)||F<1)throw new Error("Size values must be positive integers");return F}),d){if(kr(d)&&(d=d.toNumber()),!Rt(d)||!Bn(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var h=d>0?d:0,v=d<0?-d:0,y=c[0],m=c[1],g=Math.min(y-v,m-h),w;if(Xt(l)){if(l.length!==g)throw new Error("Invalid value array length");w=function(x){return l[x]}}else if(ya(l)){var E=l.size();if(E.length!==1||E[0]!==g)throw new Error("Invalid matrix length");w=function(x){return l.get([x])}}else w=function(){return l};p||(p=kr(w(0))?w(0).mul(0):0);var A=[];if(c.length>0){A=J1(A,c,p);for(var k=0;k<g;k++)A[k+v][k+h]=w(k)}return new n({data:A,size:[y,m]})},n.fromJSON=function(c){return new n(c)},n.prototype.swapRows=function(c,l){if(!Rt(c)||!Bn(c)||!Rt(l)||!Bn(l))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return cn(c,this._size[0]),cn(l,this._size[0]),n._swapRows(c,l,this._data),this},n._swapRows=function(c,l,d){var p=d[c];d[c]=d[l],d[l]=p};function f(c){for(var l=0,d=c.length;l<d;l++){var p=c[l];Xt(p)?c[l]=f(p):p&&p.isMatrix===!0&&(c[l]=f(p.valueOf()))}return c}return n},{isClass:!0});function aD(e,t,n){return e&&typeof e.map=="function"?e.map(function(r){return aD(r,t)}):t(e)}var KN="fraction",XN=["typed","Fraction"],QN=Ai(KN,XN,e=>{var{typed:t,Fraction:n}=e;return t("fraction",{number:function(i){if(!isFinite(i)||isNaN(i))throw new Error(i+" cannot be represented as a fraction");return new n(i)},string:function(i){return new n(i)},"number, number":function(i,o){return new n(i,o)},null:function(i){return new n(0)},BigNumber:function(i){return new n(i.toString())},Fraction:function(i){return i},Unit:t.referToSelf(r=>i=>{var o=i.clone();return o.value=r(i.value),o}),Object:function(i){return new n(i)},"Array | Matrix":t.referToSelf(r=>i=>aD(i,r))})}),ZN=TN({config:$w}),JN=BN({}),uD=zN({}),e9=HN({}),t9=qN({Matrix:e9}),n9=R6({BigNumber:ZN,Complex:JN,DenseMatrix:t9,Fraction:uD}),r9=QN({Fraction:uD,typed:n9});function i9(e){const[t,n]=S.useState(e.servings),[r,i]=S.useState(e.ingredientAmount),o=a=>{const u=a.target.value;n(u);const f=e.ingredientAmount.map(d=>d.props.children[0]).map(d=>d/e.servings);function c(d){if(d%1!==0){let p=function(v,y){if(v>=y){var m=Math.floor(v/y),g=v%y;return m+" "+g+"/"+y}else return v+"/"+y};const h=r9(d);return p(h.n,h.d)}else return parseInt(d)}const l=f.map((d,p)=>_("li",{children:[c((d*Number(u)).toFixed(2))," ",e.ingredientAmount[p].props.children[2],D("img",{src:e.ingredientAmount[p].props.children[4].props.src}),e.ingredientAmount[p].props.children[6]]},Jt()));i(l)};return _(Ok,{children:[_("section",{className:"counterSection",children:[D("h2",{children:"Serving Counter "}),D("section",{children:D("input",{type:"number",min:"0",max:"15",inputMode:"numeric",placeholder:e.servings,value:t,onChange:o})})]}),D("section",{className:"ingredientSection",children:D("span",{children:r})})]})}function o9(){var f;const t=(f=ko().state)==null?void 0:f.recipe,n=t.dishTypes.map(c=>D("li",{children:c},Jt())),r=t.analyzedInstructions[0].steps.map(c=>D("li",{children:c.step},Jt())),i=t.summary.replace(/<.*?>/g,""),o=t.extendedIngredients.length;t.extendedIngredients.map(c=>D(Wn,{children:c.amount}));const a=t.aggregateLikes,u=t.diets.map(c=>D("li",{children:c},Jt())),s=t.extendedIngredients.map(c=>_("li",{children:[c.amount," ",c.unit," ",D("img",{src:`https://spoonacular.com/cdn/ingredients_100x100/${c.image}`})," ",c.name]},Jt()));return D(xk,{children:_("div",{className:"recipeContainer",children:[_("div",{className:"recipeImgContainer",children:[_("div",{className:"imageContainer",children:[D("img",{className:"recipeImg",src:t.image,alt:t.title}),D("button",{className:"saveBtn",children:D(wt,{icon:n1,className:"saveIcon"})})]}),_("section",{className:"recipeDetails",children:[D("div",{className:"titleContainer",children:D("h1",{className:"recipeTitle",children:t.title})}),_("div",{className:"quickInfoContainer",children:[_("section",{className:"quickInfoItem",children:[D(wt,{icon:cA,className:"quickIcon"}),_("h2",{className:"recipeTime",children:[t.readyInMinutes," minutes"]})]}),_("section",{children:[D(wt,{icon:lA,className:"quickIcon"}),_("h2",{className:"recipeTime",children:[o," Ingredients"]})]}),_("section",{children:[D(wt,{icon:n1,className:"quickIcon"}),_("h2",{className:"recipeTime",children:[a," Likes"]})]})]}),D("section",{className:"recipeSummary",children:D("p",{children:i})}),_("section",{className:"recipeTags",children:[D("div",{className:"recipeCategory",children:n}),D("div",{className:"recipeDiets",children:u})]})]})]}),D("div",{className:"recipeHead",children:D("div",{className:"recipeStart",children:D("div",{className:"ingredientCard",children:D(i9,{ingredientAmount:s,servings:t.servings,amount:s.amount})})})}),_("div",{className:"instructionsCard",children:[D("h2",{children:t.title}),_("div",{className:"instructionContainer",children:[D("div",{children:D("img",{className:"instructionImg",src:t.image,alt:t.title})}),_("div",{className:"recipeInstructions",children:[D("h2",{children:"Instructions:"}),D("ol",{children:r})]})]})]})]})})}async function a9(e,t,n){const r="http://localhost:4000/api/getMealPlanner";try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numberOfDays:e,dietType:t,dailyCalories:n})});if(!i.ok)throw new Error(`HTTP error ${i.status}`);return await i.json()}catch(i){return console.error("Error:",i),null}}let ni="#2C4001",rv="#F2E7AE",u9="#F2F2F2";const s9=bt.section`
  background: ${u9};
  padding: 1em;
  border-radius: 5px;
  margin: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${ni};
  border: 1px solid ${ni};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {

    color: ${ni};
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
    color: ${ni};
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
    background-color: ${ni};
    color: #fff;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    border-radius: .5em;
    cursor: pointer;
    border: 1px solid ${rv};
    margin: .5em;
  }

  & form button:hover {
    background: ${rv};
    color: ${ni};
    border: 1px solid ${ni};
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

  @media ${it.laptop}{
    margin: 2em auto;
    width: 100%;
    max-width: 900px;

  }
`;function l9(){const[e,t]=S.useState(!1),[n,r]=S.useState(1),[i,o]=S.useState("None"),[a,u]=S.useState(""),[s,f]=S.useState(null);return _(s9,{children:[_("section",{className:"instructionContainer",children:[D("h1",{children:"Welcome to the Pantry Pal Meal Planner"}),D("p",{children:"Using the SmartMeal Planner is a breeze. Start by entering the number of days you'd like to plan for, ranging from a single day to an entire week. Next, select your desired diet type from a variety of options such as vegetarian, vegan, or keto. To ensure your nutritional needs are met, specify your desired daily calorie intake."})]}),_("form",{onSubmit:async l=>{t(!0),l.preventDefault();const d=await a9(n,i,parseInt(a));f(d),t(!1)},children:[D("h1",{children:"Meal Planner"}),D("label",{htmlFor:"numberOfDays",children:"Number of days:"}),_("select",{id:"numberOfDays",value:n,onChange:l=>r(l.target.value),children:[D("option",{value:"1",children:"1"}),D("option",{value:"3",children:"3"}),D("option",{value:"5",children:"5"})]}),D("label",{htmlFor:"dietType",children:"Diet type:"}),_("select",{id:"dietType",value:i,onChange:l=>o(l.target.value),children:[D("option",{value:"None",children:"None"}),D("option",{value:"vegan",children:"Vegan"}),D("option",{value:"vegetarian",children:"Vegetarian"}),D("option",{value:"pescatarian",children:"Pescatarian"}),D("option",{value:"lacto-ovo-vegetarian",children:"Lacto-ovo-vegetarian"}),D("option",{value:"keto",children:"Keto"}),D("option",{value:"gluten-free",children:"Gluten-free"}),D("option",{value:"low-Fodmap",children:"Low Fodmap"})]}),D("label",{htmlFor:"dailyCalories",children:"Daily calories:"}),D("input",{id:"dailyCalories",type:"number",min:"0",step:"1",value:a,onChange:l=>u(l.target.value)}),D("button",{type:"submit",children:"Get Meal Plan"}),e?D(L2,{}):null]}),s&&_("table",{children:[D("thead",{children:_("tr",{children:[D("th",{children:"Day"}),D("th",{children:"Meal"}),D("th",{children:"Food"}),D("th",{children:"Calories"})]})}),D("tbody",{children:s.map(l=>{const d=Object.entries(l).filter(([h])=>h!=="Day"&&h!=="TotalCalories"),p=d.reduce((h,[,v])=>h+v.Calories,0);return d.flatMap(([h,v],y)=>[_("tr",{children:[y===0&&D("td",{rowSpan:d.length+1,children:l.Day}),D("td",{children:h}),D("td",{children:v.Meal}),D("td",{children:v.Calories})]},`${h}-${v.Meal}`),y===d.length-1&&D("tr",{children:_("td",{colSpan:"3",align:"right",children:["Total Day Calories :"," ",p]})},`${h}-TotalCalories`)])})})]})]})}const c9=sx`
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

`,f9="#ffffff",d9="#ffffff";let Pn="#2C4001",p9="#dae082",h9="#F2E7AE",iv="#F2F2F2";const m9=bt.section`
    background: ${f9};
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
        background: ${d9};
        border-radius: 10px 50px;
    }

    .profile-page {
        /* width: max(50%, px); */
        background: ${iv};
        border: 1px solid ${Pn};
        border-radius: 5px;
        
        padding: 2rem;
        display: flex;
        flex-direction: column;

    }

    .userIcon {
        color: ${Pn};
        font-size: 4em;
        border: 1px solid ${Pn};
        border-radius: 50%;
        padding: .5em;
        background: white;
    }

    h3 {
        color: ${Pn};
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .select {
        
    }
    .btn {

        padding: 1.3rem;
        border-radius: 5px;
        text-align: center;
        background-color: ${Pn};
        color: ${iv};
        text-align: middle;
        vertical-align: center;
        border: 1px solid ${Pn};
    }
    .btn:hover {
        cursor: pointer;
        background-color: ${h9};
        color: ${Pn};
        border: 1px solid ${Pn};
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
            background: ${p9};
            border-radius: 5px;
            border: 1px solid ${Pn};
            color: ${Pn};

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

    @media ${it.laptop}{
        .profile-page {
            margin: 0 auto;
            min-width: 600px;
           } 
    }
`,v9="#2b3f0124",g9="#eae6e6",y9="#a8a6a6",w9="#000000",D9="#595959f",E9=bt.section`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* scale: 0; */
    z-index: 999;

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
            background-color: ${v9};

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
            z-index: 2;
            background-color: ${g9};
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
                                color: ${D9};
                            }
                            input {
                                color: ${w9};
                                border: 1px solid ${y9};
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
`,C9="#f4888a",b9=bt.div`
    & * {
        margin: 0;
        padding: 0;
    }
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${C9};

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
`,S9="/assets/error-58915e09.png";function X0({errorsArr:e=["errorsArr Empty"],showError:t=!1}){function n(r){return r.map((o,a)=>D("li",{className:"error_container",children:_("div",{className:"error_item",children:[D("div",{className:"img__container",children:D("img",{src:S9,alt:"error symbol"})}),D("p",{children:o})]})},Jt()))}return t?D(b9,{children:D("div",{className:"error container",children:D("div",{className:"row",children:_("section",{className:"container col",children:[D("h3",{children:"Please correct errors"}),D("ul",{className:"error__list",children:e.length>0?n(e):D(Wn,{})})]})})})}):D(Wn,{})}function x9({children:e,setIsDisplayed:t,scrollToRef:n}){S.useRef("");function r(){t(!1)}return D(E9,{children:_("main",{children:[D("div",{onClick:()=>{r()},className:"back__blur "}),D("div",{ref:n,className:"container row ",children:D("section",{id:"modal",className:"",children:e})})]})})}const Ef=sc.create({baseURL:"http://localhost:4000",headers:{"Content-Type":"application/json"},withCredentials:!0});function ov(e,t){return e===t}function A9(e){return new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(e)}async function F9(e,t){const n=await JSON.stringify({token:t,username:e});Qs.set("loggedIn",n),Qs.set("loggedIn",n)}const qu={updatePassword:async e=>{const{newPassword:t,confirmNewPassword:n,oldPassword:r}=e;let i={};try{if(!ov(t,n))throw Error("passwords dont match")}catch(o){throw console.log("password confirm error"),Error(o.message)}try{if(i=await Ef.put("/api/profile/password",{newPassword:t,oldPassword:r}),i.data.profileUpdate){console.log("token update ");const o=i.data.username,a=i.data.token;await F9(o,a)}}catch(o){throw console.log("server request sent and error"),Error(o.response.data.message)}return console.log("password update success"),i},updateEmail:async e=>{const{newEmail:t,confirmNewEmail:n}=e;let r={};console.log("update email service front");try{if(!ov(t,n))throw Error("emails dont match");if(!A9(t))throw Error("emails improper format");return r=await Ef.put("/api/profile/email",{newEmail:t,confirmNewEmail:n}),r}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateCaloric:async e=>{console.log("update caloric data ",e);const{newCaloricPref:t}=e;let n={};console.log(t);let r=Number(t);try{if(isNaN(r))throw Error("not a number");return n=await Ef.put("/api/profile/caloricpref",{newCaloricPref:r}),n}catch(i){throw i.response?Error(i.response.data.message):Error(i.message)}},updateDietaryPref:async e=>{console.log("diet update")}},k9="#08e171dc",N9=bt.div`
    z-index: 3;
    /* border: solid 1px black; */
    background-color: ${k9};

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
`,O9="/assets/checked-926d4d93.png";function Q0({listArr:e=["list Empty"],showCard:t=!1}){function n(r){return r.map((o,a)=>D("li",{className:"error_container",children:_("div",{className:"list_item",children:[D("img",{src:O9,alt:"check symbol"}),D("p",{children:o})]})},Jt()))}return t?D(N9,{children:D("div",{className:"error container",children:D("div",{className:"row",children:D("section",{className:"container col",children:D("ul",{className:"display_list",children:e.length>0?n(e):D(Wn,{})})})})})}):D(Wn,{})}const P9=bt.section``;function av({handleSubmit:e,setShowModal:t}){const[n,r]=S.useState(!1),[i,o]=S.useState(!1),[a,u]=S.useState([]),s=S.useRef("");async function f(c){c.preventDefault();try{o(!1);const l=new FormData(s.current),d=Object.fromEntries(l.entries());console.log("modal form data",d);const p=await e(d)}catch(l){u([l.message]),o(!0),console.log("error in update modal",l.message);return}r(!0)}return _(P9,{children:[_("div",{children:[D(Q0,{listArr:["Password Updated"],showCard:n}),D(X0,{errorsArr:a,showError:i})]}),_("form",{ref:s,onSubmit:f,children:[D("section",{className:"row title",children:D("h1",{children:"Update Password"})}),D("section",{className:"row form__inputs",children:_("ul",{children:[D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"oldPassword",children:"Old Password"}),D("input",{id:"oldPassword",type:"text",name:"oldPassword"})]})},Jt()),D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"newPassword",children:"New Password"}),D("input",{id:"newPassword",type:"text",name:"newPassword"})]})},Jt()),D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"confirmNewPassword",children:"Confirm New Password"}),D("input",{id:"confirmNewPassword",type:"text",name:"confirmNewPassword"})]})},Jt())]})}),n?D("section",{className:"form__controls row",children:D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Done"})})}):_("section",{className:"form__controls row",children:[D("div",{className:"btn",onClick:f,children:D("span",{children:"Submit"})}),D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Cancel"})})]})]})]})}function I9({handleSubmit:e,setShowModal:t}){const[n,r]=S.useState(!1),[i,o]=S.useState(!1),[a,u]=S.useState([]),s=S.useRef("");async function f(c){c.preventDefault();try{o(!1);const l=new FormData(s.current),d=Object.fromEntries(l.entries());console.log("modal form data",d);const p=await e(d)}catch(l){u([l.message]),o(!0),console.log("error in update form",l.message);return}r(!0)}return _("form",{ref:s,onSubmit:f,children:[_("div",{children:[D(Q0,{listArr:["Email Updated"],showCard:n}),D(X0,{errorsArr:a,showError:i})]}),D("section",{className:"row title",children:D("h1",{children:"Update Email"})}),D("section",{className:"row form__inputs",children:_("ul",{children:[D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"newEmail",children:"New Email"}),D("input",{id:"newEmail",type:"text",name:"newEmail"})]})},Jt()),D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"confirmNewEmail",children:"Confirm New Email"}),D("input",{id:"confirmNewEmail",type:"text",name:"confirmNewEmail"})]})},Jt())]})}),n?D("section",{className:"form__controls row",children:D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Done"})})}):_("section",{className:"form__controls row",children:[D("div",{className:"btn",onClick:f,children:D("span",{children:"Submit"})}),D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Cancel"})})]})]})}function T9({handleSubmit:e,setShowModal:t}){const[n,r]=S.useState(!1),[i,o]=S.useState(!1),[a,u]=S.useState([]),s=S.useRef("");async function f(c){c.preventDefault();try{o(!1);const l=new FormData(s.current),d=Object.fromEntries(l.entries());console.log(" form data",d);const p=await e(d)}catch(l){u([l.message]),o(!0),console.log("error in update modal",l.message);return}r(!0)}return _(Wn,{children:[_("div",{children:[D(Q0,{listArr:["Calorie Preferences Updated"],showCard:n}),D(X0,{errorsArr:a,showError:i})]}),_("form",{ref:s,onSubmit:f,children:[D("section",{className:"row title",children:D("h1",{children:"Update Calorie preferences"})}),D("section",{className:"row form__inputs",children:D("ul",{children:D("li",{className:"update__field",children:_("div",{className:"input__container",children:[D("label",{htmlFor:"newCaloricPref",children:"New Calorie Value"}),D("input",{id:"newCaloricPref",type:"text",name:"newCaloricPref"})]})},Jt())})}),n?D("section",{className:"form__controls row",children:D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Done"})})}):_("section",{className:"form__controls row",children:[D("div",{className:"btn",onClick:f,children:D("span",{children:"Submit"})}),D("div",{className:"btn",onClick:()=>{t(!1),u([]),o(!1)},children:D("span",{children:"Cancel"})})]})]})]})}var _9=S.forwardRef(function(e,t){var n=Iw(e);return S.createElement(q0,ue({ref:t},n))}),M9=_9;const Cf=[{value:"Ketogenic",label:"Ketogenic"},{value:"Gluten Free",label:"Gluten Free"},{value:"Vegetarian",label:"Vegetarian"},{value:"Lacto-Vegetarian",label:"Lacto-Vegetarian"},{value:"Ovo-Vegetarian",label:"Ovo-Vegetarian"},{value:"Vegan",label:"Vegan"},{value:"Vegetarian",label:"Vegetarian"},{value:"Pescetarian",label:"Pescetarian"},{value:"Paleo",label:"Paleo"},{value:"Primal",label:"Primal"}],R9=()=>D(M9,{defaultValue:[Cf[0],Cf[1]],isMulti:!0,name:"colors",options:Cf,className:"basic-multi-select",classNamePrefix:"select"});function B9(){S.useRef(null);const[e,t]=S.useState(!1);S.useState([]),S.useState(!1),S.useState(!1);const[n,r]=S.useState(D(av,{setShowModal:t,handleSubmit:qu.updatePassword}));return _(m9,{children:[D("section",{className:"modal__container",children:e?D(x9,{setIsDisplayed:t,children:n}):D(Wn,{})}),_("section",{className:"profile-page",children:[_("section",{className:"container profile",children:[_("picture",{children:[D("source",{srcSet:"https://media.discordapp.net/attachments/1076184648599744674/1091475961280741426/EggMoonSnap.png?width=493&height=487"}),D(wt,{icon:zd,className:"userIcon"})]}),D("h3",{children:"Hi! Bob"}),D("h3",{children:"Email@email.com"})]}),_("section",{className:"container app-config",children:[_("section",{children:[D("h4",{children:"Your Dietary Preferences"}),D(R9,{className:"select"})]}),_("ul",{className:"options",children:[D("li",{className:"btn",onClick:()=>{t(!0),r(D(T9,{setShowModal:t,handleSubmit:qu.updateCaloric}))},children:D("span",{children:"Update Caloric settings"})}),D("li",{className:"btn",onClick:()=>{t(!0),r(D(I9,{setShowModal:t,handleSubmit:qu.updateEmail}))},children:D("span",{children:"Update Email"})}),D("li",{onClick:()=>{t(!0),r(D(av,{setShowModal:t,handleSubmit:qu.updatePassword}))},className:"btn",children:D("div",{children:D("span",{children:"Update Password"})})})]})]})]})]})}function Qo({children:e}){const{isLoggedIn:t}=S.useContext(Oo);return t?D(Wn,{children:e}):D(eS,{to:"/login"})}function $9(){return D(fA,{children:_("div",{className:"App",children:[D("header",{children:D(dA,{})}),_("main",{children:[_(nS,{children:[D(In,{path:"/",element:D(vA,{})}),D(In,{path:"/search",element:D(Qo,{children:D(yk,{})})}),D(In,{path:"/details",element:D(Qo,{children:D(o9,{})})}),D(In,{path:"/saved",element:D(Qo,{children:D(Ek,{})})}),D(In,{path:"/signup",element:D(DA,{})}),D(In,{path:"/login",element:D(Sk,{})}),D(In,{path:"/mealPlanner",element:D(Qo,{children:D(l9,{})})}),D(In,{path:"/profile",element:D(Qo,{children:D(B9,{})})}),D(In,{path:"/*",element:D("h1",{children:"404 no page"})})]}),D(c9,{})]})]})})}bf.createRoot(document.getElementById("root")).render(D(cr.StrictMode,{children:D(uS,{children:D($9,{})})}));
