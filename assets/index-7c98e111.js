function Fv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var As={},zv={get exports(){return As},set exports(t){As=t}},cl={},b={},Bv={get exports(){return b},set exports(t){b=t}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Af=Symbol.iterator;function Xv(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,T0={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||I0}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=Mi.prototype;function Sd(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||I0}var Id=Sd.prototype=new x0;Id.constructor=Sd;k0(Id,Mi.prototype);Id.isPureReactComponent=!0;var Mf=Array.isArray,R0=Object.prototype.hasOwnProperty,kd={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R0.call(e,r)&&!N0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ho,type:t,key:s,ref:o,props:i,_owner:kd.current}}function Jv(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Td(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function Zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Df=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zv(""+t.key):e.toString(36)}function ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ho:case jv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tc(o,0):r,Mf(i)?(n="",t!=null&&(n=t.replace(Df,"$&/")+"/"),ea(i,e,n,"",function(c){return c})):i!=null&&(Td(i)&&(i=Jv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Df,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+tc(s,a);o+=ea(s,e,n,l,i)}else if(l=Xv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+tc(s,a++),o+=ea(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mo(t,e,n){if(t==null)return t;var r=[],i=0;return ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ew(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},ta={transition:null},tw={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ta,ReactCurrentOwner:kd};Y.Children={map:Mo,forEach:function(t,e,n){Mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Mo(t,function(){e++}),e},toArray:function(t){return Mo(t,function(e){return e})||[]},only:function(t){if(!Td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Mi;Y.Fragment=Wv;Y.Profiler=Vv;Y.PureComponent=Sd;Y.StrictMode=$v;Y.Suspense=qv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tw;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R0.call(e,l)&&!N0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ho,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:Gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hv,_context:t},t.Consumer=t};Y.createElement=b0;Y.createFactory=function(t){var e=b0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:Kv,render:t}};Y.isValidElement=Td;Y.lazy=function(t){return{$$typeof:Yv,_payload:{_status:-1,_result:t},_init:ew}};Y.memo=function(t,e){return{$$typeof:Qv,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=ta.transition;ta.transition={};try{t()}finally{ta.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return Xe.current.useCallback(t,e)};Y.useContext=function(t){return Xe.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};Y.useEffect=function(t,e){return Xe.current.useEffect(t,e)};Y.useId=function(){return Xe.current.useId()};Y.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Xe.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};Y.useRef=function(t){return Xe.current.useRef(t)};Y.useState=function(t){return Xe.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return Xe.current.useTransition()};Y.version="18.2.0";(function(t){t.exports=Y})(Bv);const P0=Uv(b),Xc=Fv({__proto__:null,default:P0},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nw=b,rw=Symbol.for("react.element"),iw=Symbol.for("react.fragment"),sw=Object.prototype.hasOwnProperty,ow=nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aw={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sw.call(e,r)&&!aw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rw,type:t,key:s,ref:o,props:i,_owner:ow.current}}cl.Fragment=iw;cl.jsx=A0;cl.jsxs=A0;(function(t){t.exports=cl})(zv);const Ms=As.Fragment,g=As.jsx,W=As.jsxs;var Jc={},Zc={},lw={get exports(){return Zc},set exports(t){Zc=t}},ht={},eu={},cw={get exports(){return eu},set exports(t){eu=t}},M0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var L=A.length;A.push(V);e:for(;0<L;){var ie=L-1>>>1,ve=A[ie];if(0<i(ve,V))A[ie]=V,A[L]=ve,L=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],L=A.pop();if(L!==V){A[0]=L;e:for(var ie=0,ve=A.length,Br=ve>>>1;ie<Br;){var Be=2*(ie+1)-1,Vi=A[Be],en=Be+1,tr=A[en];if(0>i(Vi,L))en<ve&&0>i(tr,Vi)?(A[ie]=tr,A[en]=L,ie=en):(A[ie]=Vi,A[Be]=L,ie=Be);else if(en<ve&&0>i(tr,L))A[ie]=tr,A[en]=L,ie=en;else break e}}return V}function i(A,V){var L=A.sortIndex-V.sortIndex;return L!==0?L:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,_=!1,v=!1,w=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=A)r(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function C(A){if(w=!1,y(A),!v)if(n(l)!==null)v=!0,er(I);else{var V=n(c);V!==null&&$i(C,V.startTime-A)}}function I(A,V){v=!1,w&&(w=!1,p(N),N=-1),_=!0;var L=h;try{for(y(V),d=n(l);d!==null&&(!(d.expirationTime>V)||A&&!Me());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var ve=ie(d.expirationTime<=V);V=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),y(V)}else r(l);d=n(l)}if(d!==null)var Br=!0;else{var Be=n(c);Be!==null&&$i(C,Be.startTime-V),Br=!1}return Br}finally{d=null,h=L,_=!1}}var R=!1,P=null,N=-1,Z=5,$=-1;function Me(){return!(t.unstable_now()-$<Z)}function zt(){if(P!==null){var A=t.unstable_now();$=A;var V=!0;try{V=P(!0,A)}finally{V?pt():(R=!1,P=null)}}else R=!1}var pt;if(typeof f=="function")pt=function(){f(zt)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,jt=Bt.port2;Bt.port1.onmessage=zt,pt=function(){jt.postMessage(null)}}else pt=function(){m(zt,0)};function er(A){P=A,R||(R=!0,pt())}function $i(A,V){N=m(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,er(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var L=h;h=V;try{return A()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=h;h=A;try{return V()}finally{h=L}},t.unstable_scheduleCallback=function(A,V,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,A){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=L+ve,A={id:u++,callback:V,priorityLevel:A,startTime:L,expirationTime:ve,sortIndex:-1},L>ie?(A.sortIndex=L,e(c,A),n(l)===null&&A===n(c)&&(w?(p(N),N=-1):w=!0,$i(C,L-ie))):(A.sortIndex=ve,e(l,A),v||_||(v=!0,er(I))),A},t.unstable_shouldYield=Me,t.unstable_wrapCallback=function(A){var V=h;return function(){var L=h;h=V;try{return A.apply(this,arguments)}finally{h=L}}}})(M0);(function(t){t.exports=M0})(cw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=b,dt=eu;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O0=new Set,Ds={};function Dr(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Ds[t]=e,t=0;t<e.length;t++)O0.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,uw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of={},Lf={};function dw(t){return tu.call(Lf,t)?!0:tu.call(Of,t)?!1:uw.test(t)?Lf[t]=!0:(Of[t]=!0,!1)}function hw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fw(t,e,n,r){if(e===null||typeof e>"u"||hw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Rd);Ue[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Rd);Ue[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Rd);Ue[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fw(e,n,i,r)&&(n=null),r||i===null?dw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),ru=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),U0=Symbol.for("react.offscreen"),Ff=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=Ff&&t[Ff]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,nc;function us(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var rc=!1;function ic(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?us(t):""}function pw(t){switch(t.tag){case 5:return us(t.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case Vr:return"Portal";case nu:return"Profiler";case bd:return"StrictMode";case ru:return"Suspense";case iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:su(t.type)||"Memo";case In:e=t._payload,t=t._init;try{return su(t(e))}catch{}}return null}function mw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gw(t){var e=z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=gw(t))}function B0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ou(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function au(t,e){j0(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ds=Array.isArray;function si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ds(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function W0(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,V0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yw=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){yw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function G0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _w=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function du(t,e){if(e){if(_w[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pu=null,oi=null,ai=null;function Wf(t){if(t=mo(t)){if(typeof pu!="function")throw Error(T(280));var e=t.stateNode;e&&(e=pl(e),pu(t.stateNode,t.type,e))}}function K0(t){oi?ai?ai.push(t):ai=[t]:oi=t}function q0(){if(oi){var t=oi,e=ai;if(ai=oi=null,Wf(t),e)for(t=0;t<e.length;t++)Wf(e[t])}}function Q0(t,e){return t(e)}function Y0(){}var sc=!1;function X0(t,e,n){if(sc)return t(e,n);sc=!0;try{return Q0(t,e,n)}finally{sc=!1,(oi!==null||ai!==null)&&(Y0(),q0())}}function Ls(t,e){var n=t.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var mu=!1;if(fn)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{mu=!1}function vw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ys=!1,ya=null,_a=!1,gu=null,ww={onError:function(t){ys=!0,ya=t}};function Ew(t,e,n,r,i,s,o,a,l){ys=!1,ya=null,vw.apply(ww,arguments)}function Cw(t,e,n,r,i,s,o,a,l){if(Ew.apply(this,arguments),ys){if(ys){var c=ya;ys=!1,ya=null}else throw Error(T(198));_a||(_a=!0,gu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $f(t){if(Or(t)!==t)throw Error(T(188))}function Sw(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $f(i),t;if(s===r)return $f(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Z0(t){return t=Sw(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=dt.unstable_scheduleCallback,Vf=dt.unstable_cancelCallback,Iw=dt.unstable_shouldYield,kw=dt.unstable_requestPaint,we=dt.unstable_now,Tw=dt.unstable_getCurrentPriorityLevel,Dd=dt.unstable_ImmediatePriority,ng=dt.unstable_UserBlockingPriority,va=dt.unstable_NormalPriority,xw=dt.unstable_LowPriority,rg=dt.unstable_IdlePriority,ul=null,Kt=null;function Rw(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Pw,Nw=Math.log,bw=Math.LN2;function Pw(t){return t>>>=0,t===0?32:31-(Nw(t)/bw|0)|0}var Fo=64,Uo=4194304;function hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hs(a):(s&=o,s!==0&&(r=hs(s)))}else o=n&~i,o!==0?r=hs(o):s!==0&&(r=hs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function Aw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Aw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function Dw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,Ld,ag,lg,cg,_u=!1,zo=[],Dn=null,On=null,Ln=null,Fs=new Map,Us=new Map,Tn=[],Ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function Ji(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=mo(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lw(t,e,n,r,i){switch(e){case"focusin":return Dn=Ji(Dn,t,e,n,r,i),!0;case"dragenter":return On=Ji(On,t,e,n,r,i),!0;case"mouseover":return Ln=Ji(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fs.set(s,Ji(Fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,Ji(Us.get(s)||null,t,e,n,r,i)),!0}return!1}function ug(t){var e=ar(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=J0(n),e!==null){t.blockedOn=e,cg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fu=r,n.target.dispatchEvent(r),fu=null}else return e=mo(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Gf(t,e,n){na(t)&&n.delete(e)}function Fw(){_u=!1,Dn!==null&&na(Dn)&&(Dn=null),On!==null&&na(On)&&(On=null),Ln!==null&&na(Ln)&&(Ln=null),Fs.forEach(Gf),Us.forEach(Gf)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Fw)))}function zs(t){function e(i){return Zi(i,t)}if(0<zo.length){Zi(zo[0],t);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&Zi(Dn,t),On!==null&&Zi(On,t),Ln!==null&&Zi(Ln,t),Fs.forEach(e),Us.forEach(e),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Tn.shift()}var li=vn.ReactCurrentBatchConfig,Ea=!0;function Uw(t,e,n,r){var i=ne,s=li.transition;li.transition=null;try{ne=1,Fd(t,e,n,r)}finally{ne=i,li.transition=s}}function zw(t,e,n,r){var i=ne,s=li.transition;li.transition=null;try{ne=4,Fd(t,e,n,r)}finally{ne=i,li.transition=s}}function Fd(t,e,n,r){if(Ea){var i=vu(t,e,n,r);if(i===null)gc(t,e,r,Ca,n),Hf(t,r);else if(Lw(i,t,e,n,r))r.stopPropagation();else if(Hf(t,r),e&4&&-1<Ow.indexOf(t)){for(;i!==null;){var s=mo(i);if(s!==null&&og(s),s=vu(t,e,n,r),s===null&&gc(t,e,r,Ca,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var Ca=null;function vu(t,e,n,r){if(Ca=null,t=Md(r),t=ar(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ca=t,null}function dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tw()){case Dd:return 1;case ng:return 4;case va:case xw:return 16;case rg:return 536870912;default:return 16}default:return 16}}var Pn=null,Ud=null,ra=null;function hg(){if(ra)return ra;var t,e=Ud,n=e.length,r,i="value"in Pn?Pn.value:Pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ra=i.slice(t,1<r?1-r:void 0)}function ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function Kf(){return!1}function ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:Kf,this.isPropagationStopped=Kf,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=ft(Di),po=me({},Di,{view:0,detail:0}),Bw=ft(po),ac,lc,es,dl=me({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==es&&(es&&t.type==="mousemove"?(ac=t.screenX-es.screenX,lc=t.screenY-es.screenY):lc=ac=0,es=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),qf=ft(dl),jw=me({},dl,{dataTransfer:0}),Ww=ft(jw),$w=me({},po,{relatedTarget:0}),cc=ft($w),Vw=me({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),Hw=ft(Vw),Gw=me({},Di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kw=ft(Gw),qw=me({},Di,{data:0}),Qf=ft(qw),Qw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xw[t])?!!e[t]:!1}function Bd(){return Jw}var Zw=me({},po,{key:function(t){if(t.key){var e=Qw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eE=ft(Zw),tE=me({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=ft(tE),nE=me({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),rE=ft(nE),iE=me({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),sE=ft(iE),oE=me({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aE=ft(oE),lE=[9,13,27,32],jd=fn&&"CompositionEvent"in window,_s=null;fn&&"documentMode"in document&&(_s=document.documentMode);var cE=fn&&"TextEvent"in window&&!_s,fg=fn&&(!jd||_s&&8<_s&&11>=_s),Xf=String.fromCharCode(32),Jf=!1;function pg(t,e){switch(t){case"keyup":return lE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function uE(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(Jf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Jf?null:t;default:return null}}function dE(t,e){if(Gr)return t==="compositionend"||!jd&&pg(t,e)?(t=hg(),ra=Ud=Pn=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var hE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hE[t.type]:e==="textarea"}function gg(t,e,n,r){K0(r),e=Sa(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vs=null,Bs=null;function fE(t){xg(t,0)}function hl(t){var e=Qr(t);if(B0(e))return t}function pE(t,e){if(t==="change")return e}var yg=!1;if(fn){var uc;if(fn){var dc="oninput"in document;if(!dc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),dc=typeof ep.oninput=="function"}uc=dc}else uc=!1;yg=uc&&(!document.documentMode||9<document.documentMode)}function tp(){vs&&(vs.detachEvent("onpropertychange",_g),Bs=vs=null)}function _g(t){if(t.propertyName==="value"&&hl(Bs)){var e=[];gg(e,Bs,t,Md(t)),X0(fE,e)}}function mE(t,e,n){t==="focusin"?(tp(),vs=e,Bs=n,vs.attachEvent("onpropertychange",_g)):t==="focusout"&&tp()}function gE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Bs)}function yE(t,e){if(t==="click")return hl(e)}function _E(t,e){if(t==="input"||t==="change")return hl(e)}function vE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:vE;function js(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tu.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=np(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wg(){for(var t=window,e=ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ga(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wE(t){var e=wg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(r!==null&&Wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rp(n,s);var o=rp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EE=fn&&"documentMode"in document&&11>=document.documentMode,Kr=null,wu=null,ws=null,Eu=!1;function ip(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||Kr==null||Kr!==ga(r)||(r=Kr,"selectionStart"in r&&Wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&js(ws,r)||(ws=r,r=Sa(wu,"onSelect"),0<r.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Kr)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},hc={},Eg={};fn&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function fl(t){if(hc[t])return hc[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eg)return hc[t]=e[n];return t}var Cg=fl("animationend"),Sg=fl("animationiteration"),Ig=fl("animationstart"),kg=fl("transitionend"),Tg=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Tg.set(t,e),Dr(e,[t])}for(var fc=0;fc<sp.length;fc++){var pc=sp[fc],CE=pc.toLowerCase(),SE=pc[0].toUpperCase()+pc.slice(1);Xn(CE,"on"+SE)}Xn(Cg,"onAnimationEnd");Xn(Sg,"onAnimationIteration");Xn(Ig,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(kg,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function op(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cw(r,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;op(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;op(i,a,c),s=l}}}if(_a)throw t=gu,_a=!1,gu=null,t}function ue(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var r=t+"__bubble";n.has(r)||(Rg(e,t,2,!1),n.add(r))}function mc(t,e,n){var r=0;e&&(r|=4),Rg(n,t,r,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Wo]){t[Wo]=!0,O0.forEach(function(n){n!=="selectionchange"&&(IE.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,mc("selectionchange",!1,e))}}function Rg(t,e,n,r){switch(dg(e)){case 1:var i=Uw;break;case 4:i=zw;break;default:i=Fd}n=i.bind(null,e,n,t),i=void 0,!mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}X0(function(){var c=s,u=Md(n),d=[];e:{var h=Tg.get(t);if(h!==void 0){var _=zd,v=t;switch(t){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":_=eE;break;case"focusin":v="focus",_=cc;break;case"focusout":v="blur",_=cc;break;case"beforeblur":case"afterblur":_=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=rE;break;case Cg:case Sg:case Ig:_=Hw;break;case kg:_=sE;break;case"scroll":_=Bw;break;case"wheel":_=aE;break;case"copy":case"cut":case"paste":_=Kw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Yf}var w=(e&4)!==0,m=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,y;f!==null;){y=f;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,p!==null&&(C=Ls(f,p),C!=null&&w.push($s(f,C,y)))),m)break;f=f.return}0<w.length&&(h=new _(h,v,null,n,u),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==fu&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[pn]))break e;if((_||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?ar(v):null,v!==null&&(m=Or(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(w=qf,C="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Yf,C="onPointerLeave",p="onPointerEnter",f="pointer"),m=_==null?h:Qr(_),y=v==null?h:Qr(v),h=new w(C,f+"leave",_,n,u),h.target=m,h.relatedTarget=y,C=null,ar(u)===c&&(w=new w(p,f+"enter",v,n,u),w.target=y,w.relatedTarget=m,C=w),m=C,_&&v)t:{for(w=_,p=v,f=0,y=w;y;y=Wr(y))f++;for(y=0,C=p;C;C=Wr(C))y++;for(;0<f-y;)w=Wr(w),f--;for(;0<y-f;)p=Wr(p),y--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Wr(w),p=Wr(p)}w=null}else w=null;_!==null&&ap(d,h,_,w,!1),v!==null&&m!==null&&ap(d,m,v,w,!0)}}e:{if(h=c?Qr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var I=pE;else if(Zf(h))if(yg)I=_E;else{I=gE;var R=mE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=yE);if(I&&(I=I(t,c))){gg(d,I,n,u);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&lu(h,"number",h.value)}switch(R=c?Qr(c):window,t){case"focusin":(Zf(R)||R.contentEditable==="true")&&(Kr=R,wu=c,ws=null);break;case"focusout":ws=wu=Kr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,ip(d,n,u);break;case"selectionchange":if(EE)break;case"keydown":case"keyup":ip(d,n,u)}var P;if(jd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Gr?pg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(fg&&n.locale!=="ko"&&(Gr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Gr&&(P=hg()):(Pn=u,Ud="value"in Pn?Pn.value:Pn.textContent,Gr=!0)),R=Sa(c,N),0<R.length&&(N=new Qf(N,t,null,n,u),d.push({event:N,listeners:R}),P?N.data=P:(P=mg(n),P!==null&&(N.data=P)))),(P=cE?uE(t,n):dE(t,n))&&(c=Sa(c,"onBeforeInput"),0<c.length&&(u=new Qf("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}xg(d,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ls(t,n),s!=null&&r.unshift($s(t,s,i)),s=Ls(t,e),s!=null&&r.push($s(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ap(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ls(n,s),l!=null&&o.unshift($s(n,l,a))):i||(l=Ls(n,s),l!=null&&o.push($s(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace(kE,`
`).replace(TE,"")}function $o(t,e,n){if(e=lp(e),lp(t)!==e&&n)throw Error(T(425))}function Ia(){}var Cu=null,Su=null;function Iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,xE=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(NE)}:ku;function NE(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Oi,Vs="__reactProps$"+Oi,pn="__reactContainer$"+Oi,Tu="__reactEvents$"+Oi,bE="__reactListeners$"+Oi,PE="__reactHandles$"+Oi;function ar(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[Ht])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function mo(t){return t=t[Ht]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function pl(t){return t[Vs]||null}var xu=[],Yr=-1;function Jn(t){return{current:t}}function de(t){0>Yr||(t.current=xu[Yr],xu[Yr]=null,Yr--)}function ce(t,e){Yr++,xu[Yr]=t.current,t.current=e}var qn={},He=Jn(qn),rt=Jn(!1),_r=qn;function wi(t,e){var n=t.type.contextTypes;if(!n)return qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function ka(){de(rt),de(He)}function dp(t,e,n){if(He.current!==qn)throw Error(T(168));ce(He,e),ce(rt,n)}function Ng(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,mw(t)||"Unknown",i));return me({},n,r)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qn,_r=He.current,ce(He,t),ce(rt,rt.current),!0}function hp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Ng(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,de(rt),de(He),ce(He,t)):de(rt),ce(rt,n)}var sn=null,ml=!1,_c=!1;function bg(t){sn===null?sn=[t]:sn.push(t)}function AE(t){ml=!0,bg(t)}function Zn(){if(!_c&&sn!==null){_c=!0;var t=0,e=ne;try{var n=sn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,ml=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),tg(Dd,Zn),i}finally{ne=e,_c=!1}}return null}var Xr=[],Jr=0,xa=null,Ra=0,mt=[],gt=0,vr=null,on=1,an="";function rr(t,e){Xr[Jr++]=Ra,Xr[Jr++]=xa,xa=t,Ra=e}function Pg(t,e,n){mt[gt++]=on,mt[gt++]=an,mt[gt++]=vr,vr=t;var r=on;t=an;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Mt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function $d(t){t.return!==null&&(rr(t,1),Pg(t,1,0))}function Vd(t){for(;t===xa;)xa=Xr[--Jr],Xr[Jr]=null,Ra=Xr[--Jr],Xr[Jr]=null;for(;t===vr;)vr=mt[--gt],mt[gt]=null,an=mt[--gt],mt[gt]=null,on=mt[--gt],mt[gt]=null}var ct=null,lt=null,he=!1,bt=null;function Ag(t,e){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ct=t,lt=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ct=t,lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ct=t,lt=null,!0):!1;default:return!1}}function Ru(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(he){var e=lt;if(e){var n=e;if(!fp(t,e)){if(Ru(t))throw Error(T(418));e=Fn(n.nextSibling);var r=ct;e&&fp(t,e)?Ag(r,n):(t.flags=t.flags&-4097|2,he=!1,ct=t)}}else{if(Ru(t))throw Error(T(418));t.flags=t.flags&-4097|2,he=!1,ct=t}}}function pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ct=t}function Vo(t){if(t!==ct)return!1;if(!he)return pp(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Iu(t.type,t.memoizedProps)),e&&(e=lt)){if(Ru(t))throw Mg(),Error(T(418));for(;e;)Ag(t,e),e=Fn(e.nextSibling)}if(pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){lt=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}lt=null}}else lt=ct?Fn(t.stateNode.nextSibling):null;return!0}function Mg(){for(var t=lt;t;)t=Fn(t.nextSibling)}function Ei(){lt=ct=null,he=!1}function Hd(t){bt===null?bt=[t]:bt.push(t)}var ME=vn.ReactCurrentBatchConfig;function Rt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Na=Jn(null),ba=null,Zr=null,Gd=null;function Kd(){Gd=Zr=ba=null}function qd(t){var e=Na.current;de(Na),t._currentValue=e}function bu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ci(t,e){ba=t,Gd=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(Gd!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(ba===null)throw Error(T(308));Zr=t,ba.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var lr=null;function Qd(t){lr===null?lr=[t]:lr.push(t)}function Dg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function mp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pa(t,e,n,r){var i=t.updateQueue;kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=me({},d,h);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=_,l=d):u=u.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=d}}function gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Lg=new D0.Component().refs;function Pu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Bn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(Dt(e,t,i,r),sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Bn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(Dt(e,t,i,r),sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Bn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Un(t,i,r),e!==null&&(Dt(e,t,r,n),sa(e,t,r))}};function yp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!js(n,r)||!js(i,s):!0}function Fg(t,e,n){var r=!1,i=qn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=it(e)?_r:He.current,r=e.contextTypes,s=(r=r!=null)?wi(t,i):qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _p(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function Au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Lg,Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=it(e)?_r:He.current,i.context=wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gl.enqueueReplaceState(i,i.state,null),Pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Lg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Ho(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function Ug(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=jn(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,C){return f===null||f.tag!==6?(f=kc(y,p.mode,C),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,C){var I=y.type;return I===Hr?u(p,f,y.props.children,C,y.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===In&&vp(I)===f.type)?(C=i(f,y.props),C.ref=ts(p,f,y),C.return=p,C):(C=da(y.type,y.key,y.props,null,p.mode,C),C.ref=ts(p,f,y),C.return=p,C)}function c(p,f,y,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Tc(y,p.mode,C),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function u(p,f,y,C,I){return f===null||f.tag!==7?(f=mr(y,p.mode,C,I),f.return=p,f):(f=i(f,y),f.return=p,f)}function d(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=kc(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Do:return y=da(f.type,f.key,f.props,null,p.mode,y),y.ref=ts(p,null,f),y.return=p,y;case Vr:return f=Tc(f,p.mode,y),f.return=p,f;case In:var C=f._init;return d(p,C(f._payload),y)}if(ds(f)||Yi(f))return f=mr(f,p.mode,y,null),f.return=p,f;Ho(p,f)}return null}function h(p,f,y,C){var I=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(p,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Do:return y.key===I?l(p,f,y,C):null;case Vr:return y.key===I?c(p,f,y,C):null;case In:return I=y._init,h(p,f,I(y._payload),C)}if(ds(y)||Yi(y))return I!==null?null:u(p,f,y,C,null);Ho(p,y)}return null}function _(p,f,y,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(y)||null,a(f,p,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Do:return p=p.get(C.key===null?y:C.key)||null,l(f,p,C,I);case Vr:return p=p.get(C.key===null?y:C.key)||null,c(f,p,C,I);case In:var R=C._init;return _(p,f,y,R(C._payload),I)}if(ds(C)||Yi(C))return p=p.get(y)||null,u(f,p,C,I,null);Ho(f,C)}return null}function v(p,f,y,C){for(var I=null,R=null,P=f,N=f=0,Z=null;P!==null&&N<y.length;N++){P.index>N?(Z=P,P=null):Z=P.sibling;var $=h(p,P,y[N],C);if($===null){P===null&&(P=Z);break}t&&P&&$.alternate===null&&e(p,P),f=s($,f,N),R===null?I=$:R.sibling=$,R=$,P=Z}if(N===y.length)return n(p,P),he&&rr(p,N),I;if(P===null){for(;N<y.length;N++)P=d(p,y[N],C),P!==null&&(f=s(P,f,N),R===null?I=P:R.sibling=P,R=P);return he&&rr(p,N),I}for(P=r(p,P);N<y.length;N++)Z=_(P,p,N,y[N],C),Z!==null&&(t&&Z.alternate!==null&&P.delete(Z.key===null?N:Z.key),f=s(Z,f,N),R===null?I=Z:R.sibling=Z,R=Z);return t&&P.forEach(function(Me){return e(p,Me)}),he&&rr(p,N),I}function w(p,f,y,C){var I=Yi(y);if(typeof I!="function")throw Error(T(150));if(y=I.call(y),y==null)throw Error(T(151));for(var R=I=null,P=f,N=f=0,Z=null,$=y.next();P!==null&&!$.done;N++,$=y.next()){P.index>N?(Z=P,P=null):Z=P.sibling;var Me=h(p,P,$.value,C);if(Me===null){P===null&&(P=Z);break}t&&P&&Me.alternate===null&&e(p,P),f=s(Me,f,N),R===null?I=Me:R.sibling=Me,R=Me,P=Z}if($.done)return n(p,P),he&&rr(p,N),I;if(P===null){for(;!$.done;N++,$=y.next())$=d(p,$.value,C),$!==null&&(f=s($,f,N),R===null?I=$:R.sibling=$,R=$);return he&&rr(p,N),I}for(P=r(p,P);!$.done;N++,$=y.next())$=_(P,p,N,$.value,C),$!==null&&(t&&$.alternate!==null&&P.delete($.key===null?N:$.key),f=s($,f,N),R===null?I=$:R.sibling=$,R=$);return t&&P.forEach(function(zt){return e(p,zt)}),he&&rr(p,N),I}function m(p,f,y,C){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Do:e:{for(var I=y.key,R=f;R!==null;){if(R.key===I){if(I=y.type,I===Hr){if(R.tag===7){n(p,R.sibling),f=i(R,y.props.children),f.return=p,p=f;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===In&&vp(I)===R.type){n(p,R.sibling),f=i(R,y.props),f.ref=ts(p,R,y),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}y.type===Hr?(f=mr(y.props.children,p.mode,C,y.key),f.return=p,p=f):(C=da(y.type,y.key,y.props,null,p.mode,C),C.ref=ts(p,f,y),C.return=p,p=C)}return o(p);case Vr:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Tc(y,p.mode,C),f.return=p,p=f}return o(p);case In:return R=y._init,m(p,f,R(y._payload),C)}if(ds(y))return v(p,f,y,C);if(Yi(y))return w(p,f,y,C);Ho(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=kc(y,p.mode,C),f.return=p,p=f),o(p)):n(p,f)}return m}var Ci=Ug(!0),zg=Ug(!1),go={},qt=Jn(go),Hs=Jn(go),Gs=Jn(go);function cr(t){if(t===go)throw Error(T(174));return t}function Xd(t,e){switch(ce(Gs,e),ce(Hs,t),ce(qt,go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}de(qt),ce(qt,e)}function Si(){de(qt),de(Hs),de(Gs)}function Bg(t){cr(Gs.current);var e=cr(qt.current),n=uu(e,t.type);e!==n&&(ce(Hs,t),ce(qt,n))}function Jd(t){Hs.current===t&&(de(qt),de(Hs))}var fe=Jn(0);function Aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Zd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var oa=vn.ReactCurrentDispatcher,wc=vn.ReactCurrentBatchConfig,wr=0,pe=null,Ie=null,Re=null,Ma=!1,Es=!1,Ks=0,DE=0;function We(){throw Error(T(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function th(t,e,n,r,i,s){if(wr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oa.current=t===null||t.memoizedState===null?UE:zE,t=n(r,i),Es){s=0;do{if(Es=!1,Ks=0,25<=s)throw Error(T(301));s+=1,Re=Ie=null,e.updateQueue=null,oa.current=BE,t=n(r,i)}while(Es)}if(oa.current=Da,e=Ie!==null&&Ie.next!==null,wr=0,Re=Ie=pe=null,Ma=!1,e)throw Error(T(300));return t}function nh(){var t=Ks!==0;return Ks=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?pe.memoizedState=Re=t:Re=Re.next=t,Re}function Ct(){if(Ie===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Re===null?pe.memoizedState:Re.next;if(e!==null)Re=e,Ie=t;else{if(t===null)throw Error(T(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?pe.memoizedState=Re=t:Re=Re.next=t}return Re}function qs(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=Ct(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,pe.lanes|=u,Er|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Lt(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Er|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jg(){}function Wg(t,e){var n=pe,r=Ct(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,rh(Hg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Qs(9,Vg.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(T(349));wr&30||$g(n,e,i)}return i}function $g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,r){e.value=n,e.getSnapshot=r,Gg(e)&&Kg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Kg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Kg(t){var e=mn(t,1);e!==null&&Dt(e,t,1,-1)}function wp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qs,lastRenderedState:t},e.queue=t,t=t.dispatch=FE.bind(null,pe,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qg(){return Ct().memoizedState}function aa(t,e,n,r){var i=$t();pe.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function yl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&eh(r,o.deps)){i.memoizedState=Qs(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Qs(1|e,n,s,r)}function Ep(t,e){return aa(8390656,8,t,e)}function rh(t,e){return yl(2048,8,t,e)}function Qg(t,e){return yl(4,2,t,e)}function Yg(t,e){return yl(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jg(t,e,n){return n=n!=null?n.concat([t]):null,yl(4,4,Xg.bind(null,e,t),n)}function ih(){}function Zg(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ey(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ty(t,e,n){return wr&21?(Lt(n,e)||(n=ig(),pe.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function OE(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=wc.transition;wc.transition={};try{t(!1),e()}finally{ne=n,wc.transition=r}}function ny(){return Ct().memoizedState}function LE(t,e,n){var r=Bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ry(t))iy(e,n);else if(n=Dg(t,e,n,r),n!==null){var i=Qe();Dt(n,t,r,i),sy(n,e,r)}}function FE(t,e,n){var r=Bn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ry(t))iy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,o)){var l=e.interleaved;l===null?(i.next=i,Qd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Dg(t,e,i,r),n!==null&&(i=Qe(),Dt(n,t,r,i),sy(n,e,r))}}function ry(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function iy(t,e){Es=Ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Da={readContext:Et,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},UE={readContext:Et,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,aa(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return aa(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LE.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:ih,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=OE.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=$t();if(he){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ae===null)throw Error(T(349));wr&30||$g(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ep(Hg.bind(null,r,s,t),[t]),r.flags|=2048,Qs(9,Vg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Ae.identifierPrefix;if(he){var n=an,r=on;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zE={readContext:Et,useCallback:Zg,useContext:Et,useEffect:rh,useImperativeHandle:Jg,useInsertionEffect:Qg,useLayoutEffect:Yg,useMemo:ey,useReducer:Ec,useRef:qg,useState:function(){return Ec(qs)},useDebugValue:ih,useDeferredValue:function(t){var e=Ct();return ty(e,Ie.memoizedState,t)},useTransition:function(){var t=Ec(qs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Wg,useId:ny,unstable_isNewReconciler:!1},BE={readContext:Et,useCallback:Zg,useContext:Et,useEffect:rh,useImperativeHandle:Jg,useInsertionEffect:Qg,useLayoutEffect:Yg,useMemo:ey,useReducer:Cc,useRef:qg,useState:function(){return Cc(qs)},useDebugValue:ih,useDeferredValue:function(t){var e=Ct();return Ie===null?e.memoizedState=t:ty(e,Ie.memoizedState,t)},useTransition:function(){var t=Cc(qs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Wg,useId:ny,unstable_isNewReconciler:!1};function Ii(t,e){try{var n="",r=e;do n+=pw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jE=typeof WeakMap=="function"?WeakMap:Map;function oy(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){La||(La=!0,$u=r),Mu(t,e)},n}function ay(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mu(t,e),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=t2.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var WE=vn.ReactCurrentOwner,et=!1;function qe(t,e,n,r){e.child=t===null?zg(e,null,n,r):Ci(e,t.child,n,r)}function kp(t,e,n,r,i){n=n.render;var s=e.ref;return ci(e,i),r=th(t,e,n,r,s,i),n=nh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(he&&n&&$d(e),e.flags|=1,qe(t,e,r,i),e.child)}function Tp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ly(t,e,s,r,i)):(t=da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:js,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ly(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(js(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Du(t,e,n,r,i)}function cy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ti,at),at|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ti,at),at|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ti,at),at|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ti,at),at|=r;return qe(t,e,i,n),e.child}function uy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Du(t,e,n,r,i){var s=it(n)?_r:He.current;return s=wi(e,s),ci(e,i),n=th(t,e,n,r,s,i),r=nh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(he&&r&&$d(e),e.flags|=1,qe(t,e,n,i),e.child)}function xp(t,e,n,r,i){if(it(n)){var s=!0;Ta(e)}else s=!1;if(ci(e,i),e.stateNode===null)la(t,e),Fg(e,n,r),Au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Et(c):(c=it(n)?_r:He.current,c=wi(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&_p(e,o,r,c),kn=!1;var h=e.memoizedState;o.state=h,Pa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||rt.current||kn?(typeof u=="function"&&(Pu(e,n,u,r),l=e.memoizedState),(a=kn||yp(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Og(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Rt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=it(n)?_r:He.current,l=wi(e,l));var _=n.getDerivedStateFromProps;(u=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&_p(e,o,r,l),kn=!1,h=e.memoizedState,o.state=h,Pa(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||rt.current||kn?(typeof _=="function"&&(Pu(e,n,_,r),v=e.memoizedState),(c=kn||yp(e,n,c,r,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ou(t,e,n,r,s,i)}function Ou(t,e,n,r,i,s){uy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hp(e,n,!1),gn(t,e,s);r=e.stateNode,WE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,s),e.child=Ci(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&hp(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Xd(t,e.containerInfo)}function Rp(t,e,n,r,i){return Ei(),Hd(i),e.flags|=256,qe(t,e,n,r),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function hy(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(fe,i&1),t===null)return Nu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wl(o,r,0,null),t=mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fu(n),e.memoizedState=Lu,t):sh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $E(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jn(a,s):(s=mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,r}return s=t.child,t=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sh(t,e){return e=wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,r){return r!==null&&Hd(r),Ci(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $E(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sc(Error(T(422))),Go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wl({mode:"visible",children:r.children},i,0,null),s=mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=Fu(o),e.memoizedState=Lu,s);if(!(e.mode&1))return Go(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Sc(s,r,void 0),Go(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Dt(r,t,i,-1))}return dh(),r=Sc(Error(T(421))),Go(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=n2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,lt=Fn(i.nextSibling),ct=e,he=!0,bt=null,t!==null&&(mt[gt++]=on,mt[gt++]=an,mt[gt++]=vr,on=t.id,an=t.overflow,vr=e),e=sh(e,r.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bu(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VE(t,e,n){switch(e.tag){case 3:dy(e),Ei();break;case 5:Bg(e);break;case 1:it(e.type)&&Ta(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?hy(t,e,n):(ce(fe,fe.current&1),t=gn(t,e,n),t!==null?t.sibling:null);ce(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,cy(t,e,n)}return gn(t,e,n)}var py,Uu,my,gy;py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};my=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cr(qt.current);var s=null;switch(n){case"input":i=ou(t,i),r=ou(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=cu(t,i),r=cu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ia)}du(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ds.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ns(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HE(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return it(e.type)&&ka(),$e(e),null;case 3:return r=e.stateNode,Si(),de(rt),de(He),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Gu(bt),bt=null))),Uu(t,e),$e(e),null;case 5:Jd(e);var i=cr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)my(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return $e(e),null}if(t=cr(qt.current),Vo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[Vs]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<fs.length;i++)ue(fs[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Uf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Bf(r,s),ue("invalid",r)}du(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,a,t),i=["children",""+a]):Ds.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Oo(r),zf(r,s,!0);break;case"textarea":Oo(r),jf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ia)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[Vs]=r,py(t,e,!1,!1),e.stateNode=t;e:{switch(o=hu(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<fs.length;i++)ue(fs[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Uf(t,r),i=ou(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Bf(t,r),i=cu(t,r),ue("invalid",t);break;default:i=r}du(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&V0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ds.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Nd(t,s,l,o))}switch(n){case"input":Oo(t),zf(t,r,!1);break;case"textarea":Oo(t),jf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?si(t,!!r.multiple,s,!1):r.defaultValue!=null&&si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)gy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=cr(Gs.current),cr(qt.current),Vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=ct,t!==null))switch(t.tag){case 3:$o(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return $e(e),null;case 13:if(de(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&lt!==null&&e.mode&1&&!(e.flags&128))Mg(),Ei(),e.flags|=98560,s=!1;else if(s=Vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Ht]=e}else Ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else bt!==null&&(Gu(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?ke===0&&(ke=3):dh())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Si(),Uu(t,e),t===null&&Ws(e.stateNode.containerInfo),$e(e),null;case 10:return qd(e.type._context),$e(e),null;case 17:return it(e.type)&&ka(),$e(e),null;case 19:if(de(fe),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ns(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Aa(t),o!==null){for(e.flags|=128,ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>ki&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=Aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return $e(e),null}else 2*we()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,ce(fe,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return uh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?at&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function GE(t,e){switch(Vd(e),e.tag){case 1:return it(e.type)&&ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Si(),de(rt),de(He),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(de(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(fe),null;case 4:return Si(),null;case 10:return qd(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var Ko=!1,Ve=!1,KE=typeof WeakSet=="function"?WeakSet:Set,M=null;function ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function zu(t,e,n){try{n()}catch(r){ge(t,e,r)}}var bp=!1;function qE(t,e){if(Cu=Ea,t=wg(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Su={focusedElem:t,selectionRange:n},Ea=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,m=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Rt(e.type,w),m);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(C){ge(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=bp,bp=!1,v}function Cs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zu(e,n,s)}i=i.next}while(i!==r)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yy(t){var e=t.alternate;e!==null&&(t.alternate=null,yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[Vs],delete e[Tu],delete e[bE],delete e[PE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _y(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ia));else if(r!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Oe=null,Nt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)vy(t,e,n),n=n.sibling}function vy(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ve||ei(n,e);case 6:var r=Oe,i=Nt;Oe=null,Cn(t,e,n),Oe=r,Nt=i,Oe!==null&&(Nt?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Nt?(t=Oe,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),zs(t)):yc(Oe,n.stateNode));break;case 4:r=Oe,i=Nt,Oe=n.stateNode.containerInfo,Nt=!0,Cn(t,e,n),Oe=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zu(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Ve&&(ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Cn(t,e,n),Ve=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KE),e.forEach(function(r){var i=r2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,Nt=!1;break e;case 3:Oe=a.stateNode.containerInfo,Nt=!0;break e;case 4:Oe=a.stateNode.containerInfo,Nt=!0;break e}a=a.return}if(Oe===null)throw Error(T(160));vy(s,o,i),Oe=null,Nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ge(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wy(e,t),e=e.sibling}function wy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Wt(t),r&4){try{Cs(3,t,t.return),_l(3,t)}catch(w){ge(t,t.return,w)}try{Cs(5,t,t.return)}catch(w){ge(t,t.return,w)}}break;case 1:xt(e,t),Wt(t),r&512&&n!==null&&ei(n,n.return);break;case 5:if(xt(e,t),Wt(t),r&512&&n!==null&&ei(n,n.return),t.flags&32){var i=t.stateNode;try{Os(i,"")}catch(w){ge(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&j0(i,s),hu(a,o);var c=hu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?G0(i,d):u==="dangerouslySetInnerHTML"?V0(i,d):u==="children"?Os(i,d):Nd(i,u,d,c)}switch(a){case"input":au(i,s);break;case"textarea":W0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?si(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?si(i,!!s.multiple,s.defaultValue,!0):si(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vs]=s}catch(w){ge(t,t.return,w)}}break;case 6:if(xt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ge(t,t.return,w)}}break;case 3:if(xt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(w){ge(t,t.return,w)}break;case 4:xt(e,t),Wt(t);break;case 13:xt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lh=we())),r&4&&Ap(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(c=Ve)||u,xt(e,t),Ve=c):xt(e,t),Wt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(M=t,u=t.child;u!==null;){for(d=M=u;M!==null;){switch(h=M,_=h.child,h.tag){case 0:case 11:case 14:case 15:Cs(4,h,h.return);break;case 1:ei(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:ei(h,h.return);break;case 22:if(h.memoizedState!==null){Dp(d);continue}}_!==null?(_.return=h,M=_):Dp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H0("display",o))}catch(w){ge(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){ge(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xt(e,t),Wt(t),r&4&&Ap(t);break;case 21:break;default:xt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_y(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Os(i,""),r.flags&=-33);var s=Pp(t);Wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pp(t);ju(t,a,o);break;default:throw Error(T(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){M=t,Ey(t)}function Ey(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ko;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=Ko;var c=Ve;if(Ko=o,(Ve=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Op(i):l!==null?(l.return=o,M=l):Op(i);for(;s!==null;)M=s,Ey(s),s=s.sibling;M=i,Ko=a,Ve=c}Mp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Mp(t)}}function Mp(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||_l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ve||e.flags&512&&Bu(e)}catch(h){ge(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Dp(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Op(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{Bu(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{Bu(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var YE=Math.ceil,Oa=vn.ReactCurrentDispatcher,oh=vn.ReactCurrentOwner,vt=vn.ReactCurrentBatchConfig,J=0,Ae=null,Ce=null,Fe=0,at=0,ti=Jn(0),ke=0,Ys=null,Er=0,vl=0,ah=0,Ss=null,Ze=null,lh=0,ki=1/0,nn=null,La=!1,$u=null,zn=null,qo=!1,An=null,Fa=0,Is=0,Vu=null,ca=-1,ua=0;function Qe(){return J&6?we():ca!==-1?ca:ca=we()}function Bn(t){return t.mode&1?J&2&&Fe!==0?Fe&-Fe:ME.transition!==null?(ua===0&&(ua=ig()),ua):(t=ne,t!==0||(t=window.event,t=t===void 0?16:dg(t.type)),t):1}function Dt(t,e,n,r){if(50<Is)throw Is=0,Vu=null,Error(T(185));fo(t,n,r),(!(J&2)||t!==Ae)&&(t===Ae&&(!(J&2)&&(vl|=n),ke===4&&xn(t,Fe)),st(t,r),n===1&&J===0&&!(e.mode&1)&&(ki=we()+500,ml&&Zn()))}function st(t,e){var n=t.callbackNode;Mw(t,e);var r=wa(t,t===Ae?Fe:0);if(r===0)n!==null&&Vf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vf(n),e===1)t.tag===0?AE(Lp.bind(null,t)):bg(Lp.bind(null,t)),RE(function(){!(J&6)&&Zn()}),n=null;else{switch(sg(r)){case 1:n=Dd;break;case 4:n=ng;break;case 16:n=va;break;case 536870912:n=rg;break;default:n=va}n=Ny(n,Cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cy(t,e){if(ca=-1,ua=0,J&6)throw Error(T(327));var n=t.callbackNode;if(ui()&&t.callbackNode!==n)return null;var r=wa(t,t===Ae?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ua(t,r);else{e=r;var i=J;J|=2;var s=Iy();(Ae!==t||Fe!==e)&&(nn=null,ki=we()+500,pr(t,e));do try{ZE();break}catch(a){Sy(t,a)}while(1);Kd(),Oa.current=s,J=i,Ce!==null?e=0:(Ae=null,Fe=0,e=ke)}if(e!==0){if(e===2&&(i=yu(t),i!==0&&(r=i,e=Hu(t,i))),e===1)throw n=Ys,pr(t,0),xn(t,r),st(t,we()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!XE(i)&&(e=Ua(t,r),e===2&&(s=yu(t),s!==0&&(r=s,e=Hu(t,s))),e===1))throw n=Ys,pr(t,0),xn(t,r),st(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:ir(t,Ze,nn);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=lh+500-we(),10<e)){if(wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ku(ir.bind(null,t,Ze,nn),e);break}ir(t,Ze,nn);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YE(r/1960))-r,10<r){t.timeoutHandle=ku(ir.bind(null,t,Ze,nn),r);break}ir(t,Ze,nn);break;case 5:ir(t,Ze,nn);break;default:throw Error(T(329))}}}return st(t,we()),t.callbackNode===n?Cy.bind(null,t):null}function Hu(t,e){var n=Ss;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=Ua(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&Gu(e)),t}function Gu(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function XE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~ah,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Lp(t){if(J&6)throw Error(T(327));ui();var e=wa(t,0);if(!(e&1))return st(t,we()),null;var n=Ua(t,e);if(t.tag!==0&&n===2){var r=yu(t);r!==0&&(e=r,n=Hu(t,r))}if(n===1)throw n=Ys,pr(t,0),xn(t,e),st(t,we()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Ze,nn),st(t,we()),null}function ch(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ki=we()+500,ml&&Zn())}}function Cr(t){An!==null&&An.tag===0&&!(J&6)&&ui();var e=J;J|=1;var n=vt.transition,r=ne;try{if(vt.transition=null,ne=1,t)return t()}finally{ne=r,vt.transition=n,J=e,!(J&6)&&Zn()}}function uh(){at=ti.current,de(ti)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xE(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:Si(),de(rt),de(He),Zd();break;case 5:Jd(r);break;case 4:Si();break;case 13:de(fe);break;case 19:de(fe);break;case 10:qd(r.type._context);break;case 22:case 23:uh()}n=n.return}if(Ae=t,Ce=t=jn(t.current,null),Fe=at=e,ke=0,Ys=null,ah=vl=Er=0,Ze=Ss=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}lr=null}return t}function Sy(t,e){do{var n=Ce;try{if(Kd(),oa.current=Da,Ma){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ma=!1}if(wr=0,Re=Ie=pe=null,Es=!1,Ks=0,oh.current=null,n===null||n.return===null){ke=1,Ys=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var _=Sp(o);if(_!==null){_.flags&=-257,Ip(_,o,a,s,e),_.mode&1&&Cp(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Cp(s,c,e),dh();break e}l=Error(T(426))}}else if(he&&a.mode&1){var m=Sp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ip(m,o,a,s,e),Hd(Ii(l,a));break e}}s=l=Ii(l,a),ke!==4&&(ke=2),Ss===null?Ss=[s]:Ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=oy(s,l,e);mp(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zn===null||!zn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=ay(s,a,e);mp(s,C);break e}}s=s.return}while(s!==null)}Ty(n)}catch(I){e=I,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function Iy(){var t=Oa.current;return Oa.current=Da,t===null?Da:t}function dh(){(ke===0||ke===3||ke===2)&&(ke=4),Ae===null||!(Er&268435455)&&!(vl&268435455)||xn(Ae,Fe)}function Ua(t,e){var n=J;J|=2;var r=Iy();(Ae!==t||Fe!==e)&&(nn=null,pr(t,e));do try{JE();break}catch(i){Sy(t,i)}while(1);if(Kd(),J=n,Oa.current=r,Ce!==null)throw Error(T(261));return Ae=null,Fe=0,ke}function JE(){for(;Ce!==null;)ky(Ce)}function ZE(){for(;Ce!==null&&!Iw();)ky(Ce)}function ky(t){var e=Ry(t.alternate,t,at);t.memoizedProps=t.pendingProps,e===null?Ty(t):Ce=e,oh.current=null}function Ty(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GE(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ce=null;return}}else if(n=HE(n,e,at),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);ke===0&&(ke=5)}function ir(t,e,n){var r=ne,i=vt.transition;try{vt.transition=null,ne=1,e2(t,e,n,r)}finally{vt.transition=i,ne=r}return null}function e2(t,e,n,r){do ui();while(An!==null);if(J&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dw(t,s),t===Ae&&(Ce=Ae=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Ny(va,function(){return ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var o=ne;ne=1;var a=J;J|=4,oh.current=null,qE(t,n),wy(n,t),wE(Su),Ea=!!Cu,Su=Cu=null,t.current=n,QE(n),kw(),J=a,ne=o,vt.transition=s}else t.current=n;if(qo&&(qo=!1,An=t,Fa=i),s=t.pendingLanes,s===0&&(zn=null),Rw(n.stateNode),st(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,t=$u,$u=null,t;return Fa&1&&t.tag!==0&&ui(),s=t.pendingLanes,s&1?t===Vu?Is++:(Is=0,Vu=t):Is=0,Zn(),null}function ui(){if(An!==null){var t=sg(Fa),e=vt.transition,n=ne;try{if(vt.transition=null,ne=16>t?16:t,An===null)var r=!1;else{if(t=An,An=null,Fa=0,J&6)throw Error(T(331));var i=J;for(J|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:Cs(8,u,s)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var h=u.sibling,_=u.return;if(yy(u),u===c){M=null;break}if(h!==null){h.return=_,M=h;break}M=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var m=w.sibling;w.sibling=null,w=m}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(I){ge(a,a.return,I)}if(a===o){M=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,M=C;break e}M=a.return}}if(J=i,Zn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ul,t)}catch{}r=!0}return r}finally{ne=n,vt.transition=e}}return!1}function Fp(t,e,n){e=Ii(n,e),e=oy(t,e,1),t=Un(t,e,1),e=Qe(),t!==null&&(fo(t,1,e),st(t,e))}function ge(t,e,n){if(t.tag===3)Fp(t,t,n);else for(;e!==null;){if(e.tag===3){Fp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){t=Ii(n,t),t=ay(e,t,1),e=Un(e,t,1),t=Qe(),e!==null&&(fo(e,1,t),st(e,t));break}}e=e.return}}function t2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Fe&n)===n&&(ke===4||ke===3&&(Fe&130023424)===Fe&&500>we()-lh?pr(t,0):ah|=n),st(t,e)}function xy(t,e){e===0&&(t.mode&1?(e=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):e=1);var n=Qe();t=mn(t,e),t!==null&&(fo(t,e,n),st(t,n))}function n2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xy(t,n)}function r2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),xy(t,n)}var Ry;Ry=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,VE(t,e,n);et=!!(t.flags&131072)}else et=!1,he&&e.flags&1048576&&Pg(e,Ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;la(t,e),t=e.pendingProps;var i=wi(e,He.current);ci(e,n),i=th(null,e,r,t,i,n);var s=nh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,Ta(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=gl,e.stateNode=i,i._reactInternals=e,Au(e,r,t,n),e=Ou(null,e,r,!0,s,n)):(e.tag=0,he&&s&&$d(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(la(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=s2(r),t=Rt(r,t),i){case 0:e=Du(null,e,r,t,n);break e;case 1:e=xp(null,e,r,t,n);break e;case 11:e=kp(null,e,r,t,n);break e;case 14:e=Tp(null,e,r,Rt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Du(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),xp(t,e,r,i,n);case 3:e:{if(dy(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Og(t,e),Pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ii(Error(T(423)),e),e=Rp(t,e,r,n,i);break e}else if(r!==i){i=Ii(Error(T(424)),e),e=Rp(t,e,r,n,i);break e}else for(lt=Fn(e.stateNode.containerInfo.firstChild),ct=e,he=!0,bt=null,n=zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ei(),r===i){e=gn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Bg(e),t===null&&Nu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Iu(r,i)?o=null:s!==null&&Iu(r,s)&&(e.flags|=32),uy(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Nu(e),null;case 13:return hy(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),kp(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Na,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!rt.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ci(e,n),i=Et(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Tp(t,e,r,i,n);case 15:return ly(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),la(t,e),e.tag=1,it(r)?(t=!0,Ta(e)):t=!1,ci(e,n),Fg(e,r,i),Au(e,r,i,n),Ou(null,e,r,!0,t,n);case 19:return fy(t,e,n);case 22:return cy(t,e,n)}throw Error(T(156,e.tag))};function Ny(t,e){return tg(t,e)}function i2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(t,e,n,r){return new i2(t,e,n,r)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s2(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Ad)return 14}return 2}function jn(t,e){var n=t.alternate;return n===null?(n=yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return mr(n.children,i,s,e);case bd:o=8,i|=8;break;case nu:return t=yt(12,n,e,i|2),t.elementType=nu,t.lanes=s,t;case ru:return t=yt(13,n,e,i),t.elementType=ru,t.lanes=s,t;case iu:return t=yt(19,n,e,i),t.elementType=iu,t.lanes=s,t;case U0:return wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:o=10;break e;case F0:o=9;break e;case Pd:o=11;break e;case Ad:o=14;break e;case In:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mr(t,e,n,r){return t=yt(7,t,r,e),t.lanes=n,t}function wl(t,e,n,r){return t=yt(22,t,r,e),t.elementType=U0,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=yt(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function o2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,r,i,s,o,a,l){return t=new o2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function a2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return qn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(it(n))return Ng(t,n,e)}return e}function Py(t,e,n,r,i,s,o,a,l){return t=fh(n,r,!0,t,i,s,o,a,l),t.context=by(null),n=t.current,r=Qe(),i=Bn(n),s=dn(r,i),s.callback=e??null,Un(n,s,i),t.current.lanes=i,fo(t,i,r),st(t,r),t}function El(t,e,n,r){var i=e.current,s=Qe(),o=Bn(i);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(i,e,o),t!==null&&(Dt(t,i,o,s),sa(t,i,o)),o}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Up(t,e),(t=t.alternate)&&Up(t,e)}function l2(){return null}var Ay=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}Cl.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));El(t,e,null,null)};Cl.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){El(null,t,null,null)}),e[pn]=null}};function Cl(t){this._internalRoot=t}Cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tn.length&&e!==0&&e<Tn[n].priority;n++);Tn.splice(n,0,t),n===0&&ug(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function c2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=za(o);s.call(c)}}var o=Py(e,r,t,0,null,!1,!1,"",zp);return t._reactRootContainer=o,t[pn]=o.current,Ws(t.nodeType===8?t.parentNode:t),Cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=za(l);a.call(c)}}var l=fh(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[pn]=l.current,Ws(t.nodeType===8?t.parentNode:t),Cr(function(){El(e,l,n,r)}),l}function Il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=za(o);a.call(l)}}El(e,o,t,i)}else o=c2(n,e,t,i,r);return za(o)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hs(e.pendingLanes);n!==0&&(Od(e,n|1),st(e,we()),!(J&6)&&(ki=we()+500,Zn()))}break;case 13:Cr(function(){var r=mn(t,1);if(r!==null){var i=Qe();Dt(r,t,1,i)}}),ph(t,1)}};Ld=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=Qe();Dt(e,t,134217728,n)}ph(t,134217728)}};ag=function(t){if(t.tag===13){var e=Bn(t),n=mn(t,e);if(n!==null){var r=Qe();Dt(n,t,e,r)}ph(t,e)}};lg=function(){return ne};cg=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};pu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pl(r);if(!i)throw Error(T(90));B0(r),au(r,i)}}}break;case"textarea":W0(t,n);break;case"select":e=n.value,e!=null&&si(t,!!n.multiple,e,!1)}};Q0=ch;Y0=Cr;var u2={usingClientEntryPoint:!1,Events:[mo,Qr,pl,K0,q0,ch]},rs={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},d2={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z0(t),t===null?null:t.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||l2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{ul=Qo.inject(d2),Kt=Qo}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(T(200));return a2(t,e,null,n)};ht.createRoot=function(t,e){if(!gh(t))throw Error(T(299));var n=!1,r="",i=Ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Ws(t.nodeType===8?t.parentNode:t),new mh(e)};ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Z0(e),t=t===null?null:t.stateNode,t};ht.flushSync=function(t){return Cr(t)};ht.hydrate=function(t,e,n){if(!Sl(e))throw Error(T(200));return Il(null,t,e,!0,n)};ht.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Py(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cl(e)};ht.render=function(t,e,n){if(!Sl(e))throw Error(T(200));return Il(null,t,e,!1,n)};ht.unmountComponentAtNode=function(t){if(!Sl(t))throw Error(T(40));return t._reactRootContainer?(Cr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};ht.unstable_batchedUpdates=ch;ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Il(t,e,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ht})(lw);var Bp=Zc;Jc.createRoot=Bp.createRoot,Jc.hydrateRoot=Bp.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X.apply(this,arguments)}var Ee;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ee||(Ee={}));const jp="popstate";function h2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Xs("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sr(i)}return p2(e,n,null,t)}function G(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ti(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function f2(){return Math.random().toString(36).substr(2,8)}function Wp(t,e){return{usr:t.state,key:t.key,idx:e}}function Xs(t,e,n,r){return n===void 0&&(n=null),X({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wn(e):e,{state:n,key:e&&e.key||r||f2()})}function Sr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function p2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ee.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(X({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Ee.Pop;let m=u(),p=m==null?null:m-c;c=m,l&&l({action:a,location:w.location,delta:p})}function h(m,p){a=Ee.Push;let f=Xs(w.location,m,p);n&&n(f,m),c=u()+1;let y=Wp(f,c),C=w.createHref(f);try{o.pushState(y,"",C)}catch{i.location.assign(C)}s&&l&&l({action:a,location:w.location,delta:1})}function _(m,p){a=Ee.Replace;let f=Xs(w.location,m,p);n&&n(f,m),c=u();let y=Wp(f,c),C=w.createHref(f);o.replaceState(y,"",C),s&&l&&l({action:a,location:w.location,delta:0})}function v(m){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof m=="string"?m:Sr(m);return G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jp,d),l=m,()=>{i.removeEventListener(jp,d),l=null}},createHref(m){return e(i,m)},createURL:v,encodeLocation(m){let p=v(m);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(m){return o.go(m)}};return w}var Se;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Se||(Se={}));const m2=new Set(["lazy","caseSensitive","path","id","index","children"]);function g2(t){return t.index===!0}function My(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),g2(i)){let l=X({},i,{hasErrorBoundary:e(i),id:a});return r[a]=l,l}else{let l=X({},i,{id:a,hasErrorBoundary:e(i),children:void 0});return r[a]=l,i.children&&(l.children=My(i.children,e,o,r)),l}})}function ni(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?wn(e):e,i=kl(r.pathname||"/",n);if(i==null)return null;let s=Dy(t);y2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=T2(s[a],N2(i));return o}function Dy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Wn([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dy(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:I2(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Oy(s.path))i(s,o,l)}),e}function Oy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Oy(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function y2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:k2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _2=/^:\w+$/,v2=3,w2=2,E2=1,C2=10,S2=-2,$p=t=>t==="*";function I2(t,e){let n=t.split("/"),r=n.length;return n.some($p)&&(r+=S2),e&&(r+=w2),n.filter(i=>!$p(i)).reduce((i,s)=>i+(_2.test(s)?v2:s===""?E2:C2),r)}function k2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function T2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=x2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:Wn([i,u.pathname]),pathnameBase:M2(Wn([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Wn([i,u.pathnameBase]))}return s}function x2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=R2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=b2(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function R2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ti(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function N2(t){try{return decodeURI(t)}catch(e){return Ti(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function b2(t,e){try{return decodeURIComponent(t)}catch(n){return Ti(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function kl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function P2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wn(t):t;return{pathname:n?n.startsWith("/")?n:A2(n,e):e,search:D2(r),hash:O2(i)}}function A2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ly(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wn(t):(i=X({},t),G(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=P2(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),M2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),D2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,O2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class _h{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Fy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uy=["post","put","patch","delete"],L2=new Set(Uy),F2=["get",...Uy],U2=new Set(F2),z2=new Set([301,302,303,307,308]),B2=new Set([307,308]),Rc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},j2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Vp={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},zy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W2=!By,$2=t=>!!t.hasErrorBoundary;function V2(t){G(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||$2,n={},r=My(t.routes,e,void 0,n),i,s=X({v7_normalizeFormMethod:!1},t.future),o=null,a=new Set,l=null,c=null,u=null,d=t.hydrationData!=null,h=ni(r,t.history.location,t.basename),_=null;if(h==null){let E=Vt(404,{pathname:t.history.location.pathname}),{matches:S,route:k}=Xp(r);h=S,_={[k.id]:E}}let v=!h.some(E=>E.route.lazy)&&(!h.some(E=>E.route.loader)||t.hydrationData!=null),w,m={historyAction:t.history.action,location:t.history.location,matches:h,initialized:v,navigation:Rc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},p=Ee.Pop,f=!1,y,C=!1,I=!1,R=[],P=[],N=new Map,Z=0,$=-1,Me=new Map,zt=new Set,pt=new Map,Bt=new Map,jt=new Map,er=!1;function $i(){return o=t.history.listen(E=>{let{action:S,location:k,delta:D}=E;if(er){er=!1;return}Ti(jt.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=Nf({currentLocation:m.location,nextLocation:k,historyAction:S});if(O&&D!=null){er=!0,t.history.go(D*-1),Ao(O,{state:"blocked",location:k,proceed(){Ao(O,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(D)},reset(){Gi(O),L({blockers:new Map(w.state.blockers)})}});return}return Be(S,k)}),m.initialized||Be(Ee.Pop,m.location),w}function A(){o&&o(),a.clear(),y&&y.abort(),m.fetchers.forEach((E,S)=>Ql(S)),m.blockers.forEach((E,S)=>Gi(S))}function V(E){return a.add(E),()=>a.delete(E)}function L(E){m=X({},m,E),a.forEach(S=>S(m))}function ie(E,S){var k,D;let O=m.actionData!=null&&m.navigation.formMethod!=null&&rn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((k=E.state)==null?void 0:k._isRedirect)!==!0,B;S.actionData?Object.keys(S.actionData).length>0?B=S.actionData:B=null:O?B=m.actionData:B=null;let j=S.loaderData?Yp(m.loaderData,S.loaderData,S.matches||[],S.errors):m.loaderData;for(let[F]of jt)Gi(F);let H=f===!0||m.navigation.formMethod!=null&&rn(m.navigation.formMethod)&&((D=E.state)==null?void 0:D._isRedirect)!==!0;i&&(r=i,i=void 0),L(X({},S,{actionData:B,loaderData:j,historyAction:p,location:E,initialized:!0,navigation:Rc,revalidation:"idle",restoreScrollPosition:bf(E,S.matches||m.matches),preventScrollReset:H,blockers:new Map(m.blockers)})),C||p===Ee.Pop||(p===Ee.Push?t.history.push(E,E.state):p===Ee.Replace&&t.history.replace(E,E.state)),p=Ee.Pop,f=!1,C=!1,I=!1,R=[],P=[]}async function ve(E,S){if(typeof E=="number"){t.history.go(E);return}let{path:k,submission:D,error:O}=Hp(E,s,S),B=m.location,j=Xs(m.location,k,S&&S.state);j=X({},j,t.history.encodeLocation(j));let H=S&&S.replace!=null?S.replace:void 0,F=Ee.Push;H===!0?F=Ee.Replace:H===!1||D!=null&&rn(D.formMethod)&&D.formAction===m.location.pathname+m.location.search&&(F=Ee.Replace);let oe=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ee=Nf({currentLocation:B,nextLocation:j,historyAction:F});if(ee){Ao(ee,{state:"blocked",location:j,proceed(){Ao(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),ve(E,S)},reset(){Gi(ee),L({blockers:new Map(m.blockers)})}});return}return await Be(F,j,{submission:D,pendingError:O,preventScrollReset:oe,replace:S&&S.replace})}function Br(){if(Kl(),L({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Be(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Be(p||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Be(E,S,k){y&&y.abort(),y=null,p=E,C=(k&&k.startUninterruptedRevalidation)===!0,Av(m.location,m.matches),f=(k&&k.preventScrollReset)===!0;let D=i||r,O=k&&k.overrideNavigation,B=ni(D,S,t.basename);if(!B){let Te=Vt(404,{pathname:S.pathname}),{matches:De,route:kt}=Xp(D);Yl(),ie(S,{matches:De,loaderData:{},errors:{[kt.id]:Te}});return}if(Q2(m.location,S)&&!(k&&k.submission&&rn(k.submission.formMethod))){ie(S,{matches:B});return}y=new AbortController;let j=ss(t.history,S,y.signal,k&&k.submission),H,F;if(k&&k.pendingError)F={[ri(B).route.id]:k.pendingError};else if(k&&k.submission&&rn(k.submission.formMethod)){let Te=await Vi(j,S,k.submission,B,{replace:k.replace});if(Te.shortCircuited)return;H=Te.pendingActionData,F=Te.pendingActionError,O=X({state:"loading",location:S},k.submission),j=new Request(j.url,{signal:j.signal})}let{shortCircuited:oe,loaderData:ee,errors:It}=await en(j,S,B,O,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,H,F);oe||(y=null,ie(S,X({matches:B},H?{actionData:H}:{},{loaderData:ee,errors:It})))}async function Vi(E,S,k,D,O){Kl();let B=X({state:"submitting",location:S},k);L({navigation:B});let j,H=Ku(D,S);if(!H.route.action&&!H.route.lazy)j={type:Se.error,error:Vt(405,{method:E.method,pathname:S.pathname,routeId:H.route.id})};else if(j=await is("action",E,H,D,n,e,w.basename),E.signal.aborted)return{shortCircuited:!0};if(di(j)){let F;return O&&O.replace!=null?F=O.replace:F=j.location===m.location.pathname+m.location.search,await Hi(m,j,{submission:k,replace:F}),{shortCircuited:!0}}if(ks(j)){let F=ri(D,H.route.id);return(O&&O.replace)!==!0&&(p=Ee.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:j.error}}}if(ur(j))throw Vt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:j.data}}}async function en(E,S,k,D,O,B,j,H,F){let oe=D;oe||(oe=X({state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},O));let ee=O||B?O||B:oe.formMethod&&oe.formAction&&oe.formData&&oe.formEncType?{formMethod:oe.formMethod,formAction:oe.formAction,formData:oe.formData,formEncType:oe.formEncType}:void 0,It=i||r,[Te,De]=Gp(t.history,m,k,ee,S,I,R,P,pt,It,t.basename,H,F);if(Yl(je=>!(k&&k.some(Tt=>Tt.route.id===je))||Te&&Te.some(Tt=>Tt.route.id===je)),Te.length===0&&De.length===0)return ie(S,X({matches:k,loaderData:{},errors:F||null},H?{actionData:H}:{})),{shortCircuited:!0};if(!C){De.forEach(Tt=>{let nr=m.fetchers.get(Tt.key),Qi={state:"loading",data:nr&&nr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(Tt.key,Qi)});let je=H||m.actionData;L(X({navigation:oe},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},De.length>0?{fetchers:new Map(m.fetchers)}:{}))}$=++Z,De.forEach(je=>N.set(je.key,y));let{results:kt,loaderResults:Ki,fetcherResults:Xl}=await Tf(m.matches,k,Te,De,E);if(E.signal.aborted)return{shortCircuited:!0};De.forEach(je=>N.delete(je.key));let qi=Jp(kt);if(qi)return await Hi(m,qi,{replace:j}),{shortCircuited:!0};let{loaderData:jr,errors:Jl}=Qp(m,k,Te,Ki,F,De,Xl,Bt);Bt.forEach((je,Tt)=>{je.subscribe(nr=>{(nr||je.done)&&Bt.delete(Tt)})}),Nv();let Zl=Rf($);return X({loaderData:jr,errors:Jl},Zl||De.length>0?{fetchers:new Map(m.fetchers)}:{})}function tr(E){return m.fetchers.get(E)||j2}function Tv(E,S,k,D){if(W2)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");N.has(E)&&Po(E);let B=ni(i||r,k,t.basename);if(!B){ql(E,S,Vt(404,{pathname:k}));return}let{path:j,submission:H}=Hp(k,s,D,!0),F=Ku(B,j);if(f=(D&&D.preventScrollReset)===!0,H&&rn(H.formMethod)){xv(E,S,j,F,B,H);return}pt.set(E,{routeId:S,path:j}),Rv(E,S,j,F,B,H)}async function xv(E,S,k,D,O,B){if(Kl(),pt.delete(E),!D.route.action&&!D.route.lazy){let tn=Vt(405,{method:B.formMethod,pathname:k,routeId:S});ql(E,S,tn);return}let j=m.fetchers.get(E),H=X({state:"submitting"},B,{data:j&&j.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(E,H),L({fetchers:new Map(m.fetchers)});let F=new AbortController,oe=ss(t.history,k,F.signal,B);N.set(E,F);let ee=await is("action",oe,D,O,n,e,w.basename);if(oe.signal.aborted){N.get(E)===F&&N.delete(E);return}if(di(ee)){N.delete(E),zt.add(E);let tn=X({state:"loading"},B,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(E,tn),L({fetchers:new Map(m.fetchers)}),Hi(m,ee,{submission:B,isFetchActionRedirect:!0})}if(ks(ee)){ql(E,S,ee.error);return}if(ur(ee))throw Vt(400,{type:"defer-action"});let It=m.navigation.location||m.location,Te=ss(t.history,It,F.signal),De=i||r,kt=m.navigation.state!=="idle"?ni(De,m.navigation.location,t.basename):m.matches;G(kt,"Didn't find any matches after fetcher action");let Ki=++Z;Me.set(E,Ki);let Xl=X({state:"loading",data:ee.data},B,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(E,Xl);let[qi,jr]=Gp(t.history,m,kt,B,It,I,R,P,pt,De,t.basename,{[D.route.id]:ee.data},void 0);jr.filter(tn=>tn.key!==E).forEach(tn=>{let ec=tn.key,Pf=m.fetchers.get(ec),Lv={state:"loading",data:Pf&&Pf.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(ec,Lv),N.set(ec,F)}),L({fetchers:new Map(m.fetchers)});let{results:Jl,loaderResults:Zl,fetcherResults:je}=await Tf(m.matches,kt,qi,jr,Te);if(F.signal.aborted)return;Me.delete(E),N.delete(E),jr.forEach(tn=>N.delete(tn.key));let Tt=Jp(Jl);if(Tt)return Hi(m,Tt);let{loaderData:nr,errors:Qi}=Qp(m,m.matches,qi,Zl,void 0,jr,je,Bt),Dv={state:"idle",data:ee.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(E,Dv);let Ov=Rf(Ki);m.navigation.state==="loading"&&Ki>$?(G(p,"Expected pending action"),y&&y.abort(),ie(m.navigation.location,{matches:kt,loaderData:nr,errors:Qi,fetchers:new Map(m.fetchers)})):(L(X({errors:Qi,loaderData:Yp(m.loaderData,nr,kt,Qi)},Ov?{fetchers:new Map(m.fetchers)}:{})),I=!1)}async function Rv(E,S,k,D,O,B){let j=m.fetchers.get(E),H=X({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B,{data:j&&j.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(E,H),L({fetchers:new Map(m.fetchers)});let F=new AbortController,oe=ss(t.history,k,F.signal);N.set(E,F);let ee=await is("loader",oe,D,O,n,e,w.basename);if(ur(ee)&&(ee=await Vy(ee,oe.signal,!0)||ee),N.get(E)===F&&N.delete(E),oe.signal.aborted)return;if(di(ee)){await Hi(m,ee);return}if(ks(ee)){let Te=ri(m.matches,S);m.fetchers.delete(E),L({fetchers:new Map(m.fetchers),errors:{[Te.route.id]:ee.error}});return}G(!ur(ee),"Unhandled fetcher deferred data");let It={state:"idle",data:ee.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(E,It),L({fetchers:new Map(m.fetchers)})}async function Hi(E,S,k){var D;let{submission:O,replace:B,isFetchActionRedirect:j}=k===void 0?{}:k;S.revalidate&&(I=!0);let H=Xs(E.location,S.location,X({_isRedirect:!0},j?{_isFetchActionRedirect:!0}:{}));if(G(H,"Expected a location on the redirect navigation"),zy.test(S.location)&&By&&typeof((D=window)==null?void 0:D.location)<"u"){let De=t.history.createURL(S.location),kt=kl(De.pathname,t.basename||"/")==null;if(window.location.origin!==De.origin||kt){B?window.location.replace(S.location):window.location.assign(S.location);return}}y=null;let F=B===!0?Ee.Replace:Ee.Push,{formMethod:oe,formAction:ee,formEncType:It,formData:Te}=E.navigation;!O&&oe&&ee&&Te&&It&&(O={formMethod:oe,formAction:ee,formEncType:It,formData:Te}),B2.has(S.status)&&O&&rn(O.formMethod)?await Be(F,H,{submission:X({},O,{formAction:S.location}),preventScrollReset:f}):j?await Be(F,H,{overrideNavigation:{state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:O,preventScrollReset:f}):await Be(F,H,{overrideNavigation:{state:"loading",location:H,formMethod:O?O.formMethod:void 0,formAction:O?O.formAction:void 0,formEncType:O?O.formEncType:void 0,formData:O?O.formData:void 0},preventScrollReset:f})}async function Tf(E,S,k,D,O){let B=await Promise.all([...k.map(F=>is("loader",O,F,S,n,e,w.basename)),...D.map(F=>F.matches&&F.match?is("loader",ss(t.history,F.path,O.signal),F.match,F.matches,n,e,w.basename):{type:Se.error,error:Vt(404,{pathname:F.path})})]),j=B.slice(0,k.length),H=B.slice(k.length);return await Promise.all([Zp(E,k,j,O.signal,!1,m.loaderData),Zp(E,D.map(F=>F.match),H,O.signal,!0)]),{results:B,loaderResults:j,fetcherResults:H}}function Kl(){I=!0,R.push(...Yl()),pt.forEach((E,S)=>{N.has(S)&&(P.push(S),Po(S))})}function ql(E,S,k){let D=ri(m.matches,S);Ql(E),L({errors:{[D.route.id]:k},fetchers:new Map(m.fetchers)})}function Ql(E){N.has(E)&&Po(E),pt.delete(E),Me.delete(E),zt.delete(E),m.fetchers.delete(E)}function Po(E){let S=N.get(E);G(S,"Expected fetch controller: "+E),S.abort(),N.delete(E)}function xf(E){for(let S of E){let D={state:"idle",data:tr(S).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(S,D)}}function Nv(){let E=[];for(let S of zt){let k=m.fetchers.get(S);G(k,"Expected fetcher: "+S),k.state==="loading"&&(zt.delete(S),E.push(S))}xf(E)}function Rf(E){let S=[];for(let[k,D]of Me)if(D<E){let O=m.fetchers.get(k);G(O,"Expected fetcher: "+k),O.state==="loading"&&(Po(k),Me.delete(k),S.push(k))}return xf(S),S.length>0}function bv(E,S){let k=m.blockers.get(E)||Vp;return jt.get(E)!==S&&jt.set(E,S),k}function Gi(E){m.blockers.delete(E),jt.delete(E)}function Ao(E,S){let k=m.blockers.get(E)||Vp;G(k.state==="unblocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="blocked"||k.state==="blocked"&&S.state==="proceeding"||k.state==="blocked"&&S.state==="unblocked"||k.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+S.state),m.blockers.set(E,S),L({blockers:new Map(m.blockers)})}function Nf(E){let{currentLocation:S,nextLocation:k,historyAction:D}=E;if(jt.size===0)return;jt.size>1&&Ti(!1,"A router only supports one blocker at a time");let O=Array.from(jt.entries()),[B,j]=O[O.length-1],H=m.blockers.get(B);if(!(H&&H.state==="proceeding")&&j({currentLocation:S,nextLocation:k,historyAction:D}))return B}function Yl(E){let S=[];return Bt.forEach((k,D)=>{(!E||E(D))&&(k.cancel(),S.push(D),Bt.delete(D))}),S}function Pv(E,S,k){if(l=E,u=S,c=k||(D=>D.key),!d&&m.navigation===Rc){d=!0;let D=bf(m.location,m.matches);D!=null&&L({restoreScrollPosition:D})}return()=>{l=null,u=null,c=null}}function Av(E,S){if(l&&c&&u){let k=S.map(O=>em(O,m.loaderData)),D=c(E,k)||E.key;l[D]=u()}}function bf(E,S){if(l&&c&&u){let k=S.map(B=>em(B,m.loaderData)),D=c(E,k)||E.key,O=l[D];if(typeof O=="number")return O}return null}function Mv(E){i=E}return w={get basename(){return t.basename},get state(){return m},get routes(){return r},initialize:$i,subscribe:V,enableScrollRestoration:Pv,navigate:ve,fetch:Tv,revalidate:Br,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:tr,deleteFetcher:Ql,dispose:A,getBlocker:bv,deleteBlocker:Gi,_internalFetchControllers:N,_internalActiveDeferreds:Bt,_internalSetRoutes:Mv},w}function H2(t){return t!=null&&"formData"in t}function Hp(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:Sr(t);if(!n||!H2(n))return{path:i};if(n.formMethod&&!J2(n.formMethod))return{path:i,error:Vt(405,{method:n.formMethod})};let s;if(n.formData){let l=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:$y(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},rn(s.formMethod))return{path:i,submission:s}}let o=wn(i),a=Wy(n.formData);return r&&o.search&&Hy(o.search)&&a.append("index",""),o.search="?"+a,{path:Sr(o),submission:s}}function G2(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Gp(t,e,n,r,i,s,o,a,l,c,u,d,h){let _=h?Object.values(h)[0]:d?Object.values(d)[0]:void 0,v=t.createURL(e.location),w=t.createURL(i),m=s||v.toString()===w.toString()||v.search!==w.search,p=h?Object.keys(h)[0]:void 0,y=G2(n,p).filter((I,R)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(K2(e.loaderData,e.matches[R],I)||o.some(Z=>Z===I.route.id))return!0;let P=e.matches[R],N=I;return Kp(I,X({currentUrl:v,currentParams:P.params,nextUrl:w,nextParams:N.params},r,{actionResult:_,defaultShouldRevalidate:m||jy(P,N)}))}),C=[];return l.forEach((I,R)=>{if(!n.some($=>$.route.id===I.routeId))return;let P=ni(c,I.path,u);if(!P){C.push(X({key:R},I,{matches:null,match:null}));return}let N=Ku(P,I.path);if(a.includes(R)){C.push(X({key:R,matches:P,match:N},I));return}Kp(N,X({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:m}))&&C.push(X({key:R,matches:P,match:N},I))}),[y,C]}function K2(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function jy(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Kp(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function qp(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];G(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Ti(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!m2.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(X({},i)),lazy:void 0})}async function is(t,e,n,r,i,s,o,a,l,c){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let u,d,h,_=m=>{let p,f=new Promise((y,C)=>p=C);return h=()=>p(),e.signal.addEventListener("abort",h),Promise.race([m({request:e,params:n.params,context:c}),f])};try{let m=n.route[t];if(n.route.lazy)if(m)d=(await Promise.all([_(m),qp(n.route,s,i)]))[0];else if(await qp(n.route,s,i),m=n.route[t],m)d=await _(m);else{if(t==="action")throw Vt(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:Se.data,data:void 0}}else G(m,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),d=await _(m);G(d!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(m){u=Se.error,d=m}finally{h&&e.signal.removeEventListener("abort",h)}if(X2(d)){let m=d.status;if(z2.has(m)){let y=d.headers.get("Location");if(G(y,"Redirects returned/thrown from loaders/actions must have a Location header"),zy.test(y)){if(!a){let C=new URL(e.url),I=y.startsWith("//")?new URL(C.protocol+y):new URL(y),R=kl(I.pathname,o)!=null;I.origin===C.origin&&R&&(y=I.pathname+I.search+I.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),I=yh(C).map(P=>P.pathnameBase),R=Ly(y,I,new URL(e.url).pathname);if(G(Sr(R),"Unable to resolve redirect location: "+y),o){let P=R.pathname;R.pathname=P==="/"?o:Wn([o,P])}y=Sr(R)}if(a)throw d.headers.set("Location",y),d;return{type:Se.redirect,status:m,location:y,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:u||Se.data,response:d};let p,f=d.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await d.json():p=await d.text(),u===Se.error?{type:u,error:new _h(m,d.statusText,p),headers:d.headers}:{type:Se.data,data:p,statusCode:d.status,headers:d.headers}}if(u===Se.error)return{type:u,error:d};if(Y2(d)){var v,w;return{type:Se.deferred,deferredData:d,statusCode:(v=d.init)==null?void 0:v.status,headers:((w=d.init)==null?void 0:w.headers)&&new Headers(d.init.headers)}}return{type:Se.data,data:d}}function ss(t,e,n,r){let i=t.createURL($y(e)).toString(),s={signal:n};if(r&&rn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?Wy(l):l}return new Request(i,s)}function Wy(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function q2(t,e,n,r,i){let s={},o=null,a,l=!1,c={};return n.forEach((u,d)=>{let h=e[d].route.id;if(G(!di(u),"Cannot handle redirect results in processLoaderData"),ks(u)){let _=ri(t,h),v=u.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[h]=void 0,l||(l=!0,a=Fy(u.error)?u.error.status:500),u.headers&&(c[h]=u.headers)}else ur(u)?(i.set(h,u.deferredData),s[h]=u.deferredData.data):s[h]=u.data,u.statusCode!=null&&u.statusCode!==200&&!l&&(a=u.statusCode),u.headers&&(c[h]=u.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:c}}function Qp(t,e,n,r,i,s,o,a){let{loaderData:l,errors:c}=q2(e,n,r,i,a);for(let u=0;u<s.length;u++){let{key:d,match:h}=s[u];G(o!==void 0&&o[u]!==void 0,"Did not find corresponding fetcher result");let _=o[u];if(ks(_)){let v=ri(t.matches,h==null?void 0:h.route.id);c&&c[v.route.id]||(c=X({},c,{[v.route.id]:_.error})),t.fetchers.delete(d)}else if(di(_))G(!1,"Unhandled fetcher revalidation redirect");else if(ur(_))G(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,v)}}return{loaderData:l,errors:c}}function Yp(t,e,n,r){let i=X({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ri(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Xp(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Vt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new _h(t||500,o,new Error(a),!0)}function Jp(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(di(n))return n}}function $y(t){let e=typeof t=="string"?wn(t):t;return Sr(X({},e,{hash:""}))}function Q2(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function ur(t){return t.type===Se.deferred}function ks(t){return t.type===Se.error}function di(t){return(t&&t.type)===Se.redirect}function Y2(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function X2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function J2(t){return U2.has(t.toLowerCase())}function rn(t){return L2.has(t.toLowerCase())}async function Zp(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let c=t.find(d=>d.route.id===l.route.id),u=c!=null&&!jy(c,l)&&(s&&s[l.route.id])!==void 0;ur(a)&&(i||u)&&await Vy(a,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function Vy(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Se.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Se.error,error:i}}return{type:Se.data,data:t.deferredData.data}}}function Hy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function em(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Ku(t,e){let n=typeof e=="string"?wn(e).search:e.search;if(t[t.length-1].route.index&&Hy(n||""))return t[t.length-1];let r=yh(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const eC=typeof Object.is=="function"?Object.is:Z2,{useState:tC,useEffect:nC,useLayoutEffect:rC,useDebugValue:iC}=Xc;function sC(t,e,n){const r=e(),[{inst:i},s]=tC({inst:{value:r,getSnapshot:e}});return rC(()=>{i.value=r,i.getSnapshot=e,Nc(i)&&s({inst:i})},[t,r,e]),nC(()=>(Nc(i)&&s({inst:i}),t(()=>{Nc(i)&&s({inst:i})})),[t]),iC(r),r}function Nc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!eC(n,r)}catch{return!0}}function oC(t,e,n){return e()}const aC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lC=!aC,cC=lC?oC:sC,uC="useSyncExternalStore"in Xc?(t=>t.useSyncExternalStore)(Xc):cC,vh=b.createContext(null),wh=b.createContext(null),Eh=b.createContext(null),Tl=b.createContext(null),yo=b.createContext({outlet:null,matches:[]}),Gy=b.createContext(null);function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qu.apply(this,arguments)}function xl(){return b.useContext(Tl)!=null}function Ky(){return xl()||G(!1),b.useContext(Tl).location}function _o(){xl()||G(!1);let{basename:t,navigator:e}=b.useContext(Eh),{matches:n}=b.useContext(yo),{pathname:r}=Ky(),i=JSON.stringify(yh(n).map(a=>a.pathnameBase)),s=b.useRef(!1);return b.useEffect(()=>{s.current=!0}),b.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=Ly(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:Wn([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function dC(t,e){xl()||G(!1);let{navigator:n}=b.useContext(Eh),r=b.useContext(wh),{matches:i}=b.useContext(yo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ky(),c;if(e){var u;let w=typeof e=="string"?wn(e):e;a==="/"||(u=w.pathname)!=null&&u.startsWith(a)||G(!1),c=w}else c=l;let d=c.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",_=ni(t,{pathname:h}),v=mC(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Wn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Wn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?b.createElement(Tl.Provider,{value:{location:qu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ee.Pop}},v):v}function hC(){let t=vC(),e=Fy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}class fC extends b.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(yo.Provider,{value:this.props.routeContext},b.createElement(Gy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pC(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(vh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(yo.Provider,{value:e},r)}function mC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||G(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=b.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=b.createElement(hC,null));let u=e.concat(r.slice(0,a+1)),d=()=>{let h=s;return l?h=c:o.route.Component?h=b.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),b.createElement(pC,{match:o,routeContext:{outlet:s,matches:u},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?b.createElement(fC,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var tm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(tm||(tm={}));var Ba;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ba||(Ba={}));function gC(t){let e=b.useContext(wh);return e||G(!1),e}function yC(t){let e=b.useContext(yo);return e||G(!1),e}function _C(t){let e=yC(),n=e.matches[e.matches.length-1];return n.route.id||G(!1),n.route.id}function vC(){var t;let e=b.useContext(Gy),n=gC(Ba.UseRouteError),r=_C(Ba.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function wC(t){let{fallbackElement:e,router:n}=t,r=b.useCallback(()=>n.state,[n]),i=uC(n.subscribe,r,r),s=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,c,u)=>n.navigate(l,{state:c,preventScrollReset:u==null?void 0:u.preventScrollReset}),replace:(l,c,u)=>n.navigate(l,{replace:!0,state:c,preventScrollReset:u==null?void 0:u.preventScrollReset})}),[n]),o=n.basename||"/",a=b.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return b.createElement(b.Fragment,null,b.createElement(vh.Provider,{value:a},b.createElement(wh.Provider,{value:i},b.createElement(CC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?b.createElement(SC,null):e))),null)}function EC(t){G(!1)}function CC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ee.Pop,navigator:s,static:o=!1}=t;xl()&&G(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=wn(r));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:_="default"}=r,v=b.useMemo(()=>{let w=kl(c,a);return w==null?null:{location:{pathname:w,search:u,hash:d,state:h,key:_},navigationType:i}},[a,c,u,d,h,_,i]);return v==null?null:b.createElement(Eh.Provider,{value:l},b.createElement(Tl.Provider,{children:n,value:v}))}function SC(t){let{children:e,location:n}=t,r=b.useContext(vh),i=r&&!e?r.router.routes:Qu(e);return dC(i,n)}var nm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(nm||(nm={}));new Promise(()=>{});function Qu(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Qu(r.props.children,s));return}r.type!==EC&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qu(r.props.children,s)),n.push(o)}),n}function IC(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yu(){return Yu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yu.apply(this,arguments)}function kC(t,e){return V2({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:h2({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||TC(),routes:t,detectErrorBoundary:IC}).initialize()}function TC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Yu({},e,{errors:xC(e.errors)})),e}function xC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new _h(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var rm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(rm||(rm={}));var im;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(im||(im={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+qy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(n[u],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new NC;const h=s<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yy=function(t){const e=Qy(t);return Ch.encodeByteArray(e,!0)},ja=function(t){return Yy(t).replace(/\./g,"")},Wa=function(t){try{return Ch.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){return Xy(void 0,t)}function Xy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!PC(n)||(t[n]=Xy(t[n],e[n]));return t}function PC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=()=>AC().__FIREBASE_DEFAULTS__,DC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wa(t[1]);return e&&JSON.parse(e)},Sh=()=>{try{return MC()||DC()||OC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jy=t=>{var e,n;return(n=(e=Sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LC=t=>{const e=Jy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FC=()=>{var t;return(t=Sh())===null||t===void 0?void 0:t.config},Zy=t=>{var e;return(e=Sh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ih(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function e_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zC(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n_(){return qy.NODE_ADMIN===!0}function r_(){try{return typeof indexedDB=="object"}catch{return!1}}function i_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function BC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jC,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function WC(t,e){return t.replace($C,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $C=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Js(Wa(s[0])||""),n=Js(Wa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},VC=function(t){const e=s_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},HC=function(t){const e=s_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $a(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sm(s)&&sm(o)){if(!Zs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function KC(t,e){const n=new qC(t,e);return n.subscribe.bind(n)}class qC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}function Rl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=1e3,JC=2,ZC=4*60*60*1e3,eS=.5;function om(t,e=XC,n=JC){const r=e*Math.pow(n,t),i=Math.round(eS*r*(Math.random()-.5)*2);return Math.min(ZC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rS(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nS(t){return t===sr?void 0:t}function rS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const sS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},oS=se.INFO,aS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},lS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=oS,this._logHandler=lS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const cS=(t,e)=>e.some(n=>t instanceof n);let am,lm;function uS(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dS(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o_=new WeakMap,Ju=new WeakMap,a_=new WeakMap,Pc=new WeakMap,kh=new WeakMap;function hS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o_.set(n,t)}).catch(()=>{}),kh.set(e,t),e}function fS(t){if(Ju.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ju.set(t,e)}let Zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ju.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pS(t){Zu=t(Zu)}function mS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ac(this),e,...n);return a_.set(r,e.sort?e.sort():[e]),$n(r)}:dS().includes(t)?function(...e){return t.apply(Ac(this),e),$n(o_.get(this))}:function(...e){return $n(t.apply(Ac(this),e))}}function gS(t){return typeof t=="function"?mS(t):(t instanceof IDBTransaction&&fS(t),cS(t,uS())?new Proxy(t,Zu):t)}function $n(t){if(t instanceof IDBRequest)return hS(t);if(Pc.has(t))return Pc.get(t);const e=gS(t);return e!==t&&(Pc.set(t,e),kh.set(e,t)),e}const Ac=t=>kh.get(t);function yS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _S=["get","getKey","getAll","getAllKeys","count"],vS=["put","add","delete","clear"],Mc=new Map;function cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_S.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Mc.set(e,s),s}pS(t=>({...t,get:(e,n,r)=>cm(e,n)||t.get(e,n,r),has:(e,n)=>!!cm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ES(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ES(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",um="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new bl("@firebase/app"),CS="@firebase/app-compat",SS="@firebase/analytics-compat",IS="@firebase/analytics",kS="@firebase/app-check-compat",TS="@firebase/app-check",xS="@firebase/auth",RS="@firebase/auth-compat",NS="@firebase/database",bS="@firebase/database-compat",PS="@firebase/functions",AS="@firebase/functions-compat",MS="@firebase/installations",DS="@firebase/installations-compat",OS="@firebase/messaging",LS="@firebase/messaging-compat",FS="@firebase/performance",US="@firebase/performance-compat",zS="@firebase/remote-config",BS="@firebase/remote-config-compat",jS="@firebase/storage",WS="@firebase/storage-compat",$S="@firebase/firestore",VS="@firebase/firestore-compat",HS="firebase",GS="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="[DEFAULT]",KS={[ed]:"fire-core",[CS]:"fire-core-compat",[IS]:"fire-analytics",[SS]:"fire-analytics-compat",[TS]:"fire-app-check",[kS]:"fire-app-check-compat",[xS]:"fire-auth",[RS]:"fire-auth-compat",[NS]:"fire-rtdb",[bS]:"fire-rtdb-compat",[PS]:"fire-fn",[AS]:"fire-fn-compat",[MS]:"fire-iid",[DS]:"fire-iid-compat",[OS]:"fire-fcm",[LS]:"fire-fcm-compat",[FS]:"fire-perf",[US]:"fire-perf-compat",[zS]:"fire-rc",[BS]:"fire-rc-compat",[jS]:"fire-gcs",[WS]:"fire-gcs-compat",[$S]:"fire-fst",[VS]:"fire-fst-compat","fire-js":"fire-js",[HS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map,nd=new Map;function qS(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(nd.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;nd.set(e,t);for(const n of Va.values())qS(n,t);return!0}function Fr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new Lr("app","Firebase",QS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=GS;function l_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:td,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=FC()),!n)throw Vn.create("no-options");const s=Va.get(i);if(s){if(Zs(n,s.options)&&Zs(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new iS(i);for(const l of nd.values())o.addComponent(l);const a=new YS(n,r,o);return Va.set(i,a),a}function Th(t=td){const e=Va.get(t);if(!e&&t===td)return l_();if(!e)throw Vn.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=(r=KS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}Xt(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="firebase-heartbeat-database",JS=1,eo="firebase-heartbeat-store";let Dc=null;function c_(){return Dc||(Dc=yS(XS,JS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function ZS(t){try{return(await c_()).transaction(eo).objectStore(eo).get(u_(t))}catch(e){if(e instanceof Jt)Ir.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function dm(t,e){try{const r=(await c_()).transaction(eo,"readwrite");return await r.objectStore(eo).put(e,u_(t)),r.done}catch(n){if(n instanceof Jt)Ir.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function u_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1024,tI=30*24*60*60*1e3;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hm(),{heartbeatsToSend:n,unsentEntries:r}=rI(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hm(){return new Date().toISOString().substring(0,10)}function rI(t,e=eI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r_()?i_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fm(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){Xt(new Ft("platform-logger",e=>new wS(e),"PRIVATE")),Xt(new Ft("heartbeat",e=>new nI(e),"PRIVATE")),wt(ed,um,t),wt(ed,um,"esm2017"),wt("fire-js","")}sI("");const pm="@firebase/database",mm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d_="";function oI(t){d_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aI(e)}}catch{}return new lI},dr=h_("localStorage"),rd=h_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new bl("@firebase/database"),cI=function(){let t=1;return function(){return t++}}(),f_=function(t){const e=YC(t),n=new GC;n.update(e);const r=n.digest();return Ch.encodeByteArray(r)},Eo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Eo.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let gr=null,gm=!0;const uI=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hi.logLevel=se.VERBOSE,gr=hi.log.bind(hi),e&&rd.set("logging_enabled",!0)):typeof t=="function"?gr=t:(gr=null,rd.remove("logging_enabled"))},Le=function(...t){if(gm===!0&&(gm=!1,gr===null&&rd.get("logging_enabled")===!0&&uI(!0)),gr){const e=Eo.apply(null,t);gr(e)}},Co=function(t){return function(...e){Le(t,...e)}},id=function(...t){const e="FIREBASE INTERNAL ERROR: "+Eo(...t);hi.error(e)},yn=function(...t){const e=`FIREBASE FATAL ERROR: ${Eo(...t)}`;throw hi.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+Eo(...t);hi.warn(e)},dI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ri="[MIN_NAME]",kr="[MAX_NAME]",Ur=function(t,e){if(t===e)return 0;if(t===Ri||e===kr)return-1;if(e===Ri||t===kr)return 1;{const n=ym(t),r=ym(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},fI=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},Rh=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=Rh(t[e[r]]);return n+="}",n},p_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const m_=function(t){x(!xh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},pI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yI=new RegExp("^-?(0*)\\d{1,10}$"),_I=-2147483648,vI=2147483647,ym=function(t){if(yI.test(t)){const e=Number(t);if(e>=_I&&e<=vI)return e}return null},Ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},wI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class fi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="5",g_="v",y_="s",__="r",v_="f",w_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,E_="ls",C_="p",sd="ac",S_="websocket",I_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function SI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function T_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===S_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===I_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SI(t)&&(n.ns=t.namespace);const i=[];return ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={},Lc={};function bh(t){const e=t.toString();return Oc[e]||(Oc[e]=new II),Oc[e]}function kI(t,e){const n=t.toString();return Lc[n]||(Lc[n]=e()),Lc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ui(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="start",xI="close",RI="pLPCommand",NI="pRTLPCB",x_="id",R_="pw",N_="ser",bI="cb",PI="seg",AI="ts",MI="d",DI="dframe",b_=1870,P_=30,OI=b_-P_,LI=25e3,FI=3e4;class ii{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Co(e),this.stats_=bh(n),this.urlFn=l=>(this.appCheckToken&&(l[sd]=this.appCheckToken),T_(n,I_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FI)),hI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ph((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_m)this.id=a,this.password=l;else if(o===xI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[_m]="t",r[N_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[g_]=Nh,this.transportSessionId&&(r[y_]=this.transportSessionId),this.lastSessionId&&(r[E_]=this.lastSessionId),this.applicationId&&(r[C_]=this.applicationId),this.appCheckToken&&(r[sd]=this.appCheckToken),typeof location<"u"&&location.hostname&&w_.test(location.hostname)&&(r[__]=v_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pI()&&!mI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yy(n),i=p_(r,OI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[DI]="t",r[x_]=e,r[R_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ph{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cI(),window[RI+this.uniqueCallbackIdentifier]=e,window[NI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ph.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[x_]=this.myID,e[R_]=this.myPW,e[N_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+P_+r.length<=b_;){const o=this.pendingSegs.shift();r=r+"&"+PI+i+"="+o.seg+"&"+AI+i+"="+o.ts+"&"+MI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=16384,zI=45e3;let Ha=null;typeof MozWebSocket<"u"?Ha=MozWebSocket:typeof WebSocket<"u"&&(Ha=WebSocket);class Pt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Co(this.connId),this.stats_=bh(n),this.connURL=Pt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[g_]=Nh,typeof location<"u"&&location.hostname&&w_.test(location.hostname)&&(o[__]=v_),n&&(o[y_]=n),r&&(o[E_]=r),i&&(o[sd]=i),s&&(o[C_]=s),T_(e,S_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let r;n_(),this.mySock=new Ha(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ha!==null&&!Pt.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Js(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=p_(n,UI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pt.responsesRequiredToBeHealthy=2;Pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ii,Pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pt&&Pt.isAvailable();let r=n&&!Pt.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pt];else{const i=this.transports_=[];for(const s of to.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);to.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}to.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=6e4,jI=5e3,WI=10*1024,$I=100*1024,Fc="t",vm="d",VI="s",wm="r",HI="e",Em="o",Cm="a",Sm="n",Im="p",GI="h";class KI{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Co("c:"+this.id+":"),this.transportManager_=new to(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$I?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fc in e){const n=e[Fc];n===Cm?this.upgradeIfSecondaryHealthy_():n===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Em&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),r=os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),r=os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(Fc,e);if(vm in e){const r=e[vm];if(n===GI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Sm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VI?this.onConnectionShutdown_(r):n===wm?this.onReset_(r):n===HI?id("Server Error: "+r):n===Em?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):id("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nh!==r&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends M_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ih()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ga}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=32,Tm=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new re("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Ah(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function no(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function D_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return tt(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QI(t,e){const n=no(t,0),r=no(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ur(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Mh(t,e){if(Qn(t)!==Qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function _t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qn(t)>Qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class YI{constructor(e,n){this.errorPrefix_=n,this.parts_=no(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nl(this.parts_[r]);O_(this)}}function XI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nl(e),O_(t)}function JI(t){const e=t.parts_.pop();t.byteLength_-=Nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function O_(t){if(t.byteLength_>Tm)throw new Error(t.errorPrefix_+"has a key path longer than "+Tm+" bytes ("+t.byteLength_+").");if(t.parts_.length>km)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+km+") or object contains a cycle "+or(t))}function or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends M_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dh}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=1e3,ZI=60*5*1e3,xm=30*1e3,e3=1.3,t3=3e4,n3="server_kill",Rm=3;class hn extends A_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hn.nextPersistentConnectionId_++,this.log_=Co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=as,this.maxReconnectDelay_=ZI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!n_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;hn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const r=xi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||HC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):id("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>t3&&(this.reconnectDelay_=as),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*e3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new KI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ye(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(n3)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xu(this.interruptReasons_)&&(this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rm&&(this.reconnectDelay_=xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+d_.replace(/\./g,"-")]=1,Ih()?e["framework.cordova"]=1:t_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ga.getInstance().currentlyOnline();return Xu(this.interruptReasons_)&&e}}hn.nextPersistentConnectionId_=0;hn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(Ri,e),i=new q(Ri,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class L_ extends Pl{static get __EMPTY_NODE(){return Yo}static set __EMPTY_NODE(e){Yo=e}compare(e,n){return Ur(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(kr,Yo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Yo)}toString(){return".key"}}const pi=new L_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??nt.EMPTY_NODE,this.right=s??nt.EMPTY_NODE}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class r3{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xo(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new r3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(t,e){return Ur(t.name,e.name)}function Oh(t,e){return Ur(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;function s3(t){od=t}const F_=function(t){return typeof t=="number"?"number:"+m_(t):"string:"+t},U_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else x(t===od||t.isEmpty(),"priority of unexpected type.");x(t===od||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),U_(this.priorityNode_)}static set __childrenNodeConstructor(e){Nm=e}static get __childrenNodeConstructor(){return Nm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+F_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=m_(this.value_):e+=this.value_,this.lazyHash_=f_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z_,B_;function o3(t){z_=t}function a3(t){B_=t}class l3 extends Pl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(kr,new xe("[PRIORITY-POST]",B_))}makePost(e,n){const r=z_(e);return new q(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new l3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3=Math.log(2);class u3{constructor(e){const n=s=>parseInt(Math.log(s)/c3,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ka=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,null,null);{const _=parseInt(u/2,10)+l,v=i(l,_),w=i(_+1,c);return d=t[_],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,v,w)}},s=function(l){let c=null,u=null,d=t.length;const h=function(v,w){const m=d-v,p=d;d-=v;const f=i(m+1,p),y=t[m],C=n?n(y):y;_(new Ne(C,y.node,w,null,f))},_=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),m=Math.pow(2,l.count-(v+1));w?h(m,Ne.BLACK):(h(m,Ne.BLACK),h(m,Ne.RED))}return u},o=new u3(t.length),a=s(o);return new nt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;const $r={};class ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x($r&&_e,"ChildrenNode.ts has not been loaded"),Uc=Uc||new ln({".priority":$r},{".priority":_e}),Uc}get(e){const n=xi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ka(r,e.getCompare()):a=$r;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ln(u,c)}addToIndexes(e,n){const r=$a(this.indexes_,(i,s)=>{const o=xi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===$r)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ka(a,o.getCompare())}else return $r;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=$a(this.indexes_,i=>{if(i===$r)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&U_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ls||(ls=new U(new nt(Oh),null,ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ls}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ls:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ls:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{x(K(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+F_(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":f_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===So?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class d3 extends U{constructor(){super(new nt(Oh),U.EMPTY_NODE,ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const So=new d3;Object.defineProperties(q,{MIN:{value:new q(Ri,U.EMPTY_NODE)},MAX:{value:new q(kr,So)}});L_.__EMPTY_NODE=U.EMPTY_NODE;xe.__childrenNodeConstructor=U;s3(So);a3(So);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3=!0;function be(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,be(e))}if(!(t instanceof Array)&&h3){const n=[];let r=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return U.EMPTY_NODE;const s=Ka(n,i3,o=>o.name,Oh);if(r){const o=Ka(n,_e.getCompare());return new U(s,be(e),new ln({".priority":o},{".priority":_e}))}else return new U(s,be(e),ln.Default)}else{let n=U.EMPTY_NODE;return ze(t,(r,i)=>{if(Zt(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}o3(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3 extends Pl{constructor(e){super(),this.indexPath_=e,x(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ur(e.name,n.name):s}makePost(e,n){const r=be(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,So);return new q(kr,e)}toString(){return no(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3 extends Pl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ur(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=be(e);return new q(n,r)}toString(){return".value"}}const m3=new p3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){return{type:"value",snapshotNode:t}}function Ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ro(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function io(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function g3(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ro(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ni(n,r)):o.trackChildChange(io(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(ro(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(io(i,s,o))}else r.trackChildChange(Ni(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.indexedFilter_=new Lh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=so.getStartPost_(e),this.endPost_=so.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new so(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(io(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ro(n,d));const w=a.updateImmediateChild(n,U.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ni(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ro(c.name,c.node)),s.trackChildChange(Ni(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ri}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Fh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _3(t){return t.loadsAllData()?new Lh(t.getIndex()):t.hasLimit()?new y3(t):new so(t)}function bm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===m3?n="$value":t.index_===pi?n="$key":(x(t.index_ instanceof f3,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends A_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qa.getListenId_(e,r),a={};this.listens_[o]=a;const l=bm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),xi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=qa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=bm(e._queryParams),r=e._path.toString(),i=new vo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Js(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){return{value:null,children:new Map}}function W_(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Qa());const i=t.children.get(r);e=le(e),W_(i,e,n)}}function ad(t,e,n){t.value!==null?n(e,t.value):w3(t,(r,i)=>{const s=new re(e.toString()+"/"+r);ad(i,s,n)})}function w3(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=10*1e3,C3=30*1e3,S3=5*60*1e3;class I3{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new E3(e);const r=Am+(C3-Am)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ze(e,(i,s)=>{s>0&&Zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*S3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function Uh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=Uh()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new Ya(te(),n,this.revert)}}else return x(K(this.path)===e,"operationForChild called for unrelated child."),new Ya(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new oo(this.source,te()):new oo(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return Q(this.path)?new Tr(this.source,te(),this.snap.getImmediateChild(e)):new Tr(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new Tr(this.source,te(),n.value):new bi(this.source,te(),n)}else return x(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bi(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function T3(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(g3(o.childName,o.snapshotNode))}),cs(t,i,"child_removed",e,r,n),cs(t,i,"child_added",e,r,n),cs(t,i,"child_moved",s,r,n),cs(t,i,"child_changed",e,r,n),cs(t,i,"value",e,r,n),i}function cs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>R3(t,a,l)),o.forEach(a=>{const l=x3(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function x3(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function R3(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e){return{eventCache:t,serverCache:e}}function xs(t,e,n,r){return Al(new xr(e,n,r),t.serverCache)}function $_(t,e,n,r){return Al(t.eventCache,new xr(e,n,r))}function ld(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;const N3=()=>(zc||(zc=new nt(fI)),zc);class ae{constructor(e,n=N3()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return ze(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:ye(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new ae(null)}}set(e,n){if(Q(e))return new ae(n,this.children);{const r=K(e),s=(this.children.get(r)||new ae(null)).set(le(e),n),o=this.children.insert(r,s);return new ae(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=K(e),s=(this.children.get(r)||new ae(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ae(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(le(e),ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),ye(n,i),r):new ae(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new ae(null))}}function Rs(t,e,n){if(Q(e))return new Ot(new ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new Ot(t.writeTree_.set(i,s))}else{const i=new ae(n),s=t.writeTree_.setTree(e,i);return new Ot(s)}}}function cd(t,e,n){let r=t;return ze(n,(i,s)=>{r=Rs(r,ye(e,i),s)}),r}function Mm(t,e){if(Q(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new Ot(n)}}function ud(t,e){return zr(t,e)!=null}function zr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function Dm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function Hn(t,e){if(Q(e))return t;{const n=zr(t,e);return n!=null?new Ot(new ae(n)):new Ot(t.writeTree_.subtree(e))}}function dd(t){return t.writeTree_.isEmpty()}function Pi(t,e){return V_(te(),t.writeTree_,e)}function V_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=V_(ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ye(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e){return q_(e,t)}function b3(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Rs(t.visibleWrites,e,n)),t.lastWriteId=r}function P3(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=cd(t.visibleWrites,e,n),t.lastWriteId=r}function A3(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function M3(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&D3(a,r.path)?i=!1:_t(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return O3(t),!0;if(r.snap)t.visibleWrites=Mm(t.visibleWrites,r.path);else{const a=r.children;ze(a,l=>{t.visibleWrites=Mm(t.visibleWrites,ye(r.path,l))})}return!0}else return!1}function D3(t,e){if(t.snap)return _t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_t(ye(t.path,n),e))return!0;return!1}function O3(t){t.visibleWrites=H_(t.allWrites,L3,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function L3(t){return t.visible}function H_(t,e,n){let r=Ot.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)_t(n,o)?(a=tt(n,o),r=Rs(r,a,s.snap)):_t(o,n)&&(a=tt(o,n),r=Rs(r,te(),s.snap.getChild(a)));else if(s.children){if(_t(n,o))a=tt(n,o),r=cd(r,a,s.children);else if(_t(o,n))if(a=tt(o,n),Q(a))r=cd(r,te(),s.children);else{const l=xi(s.children,K(a));if(l){const c=l.getChild(le(a));r=Rs(r,te(),c)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function G_(t,e,n,r,i){if(!r&&!i){const s=zr(t.visibleWrites,e);if(s!=null)return s;{const o=Hn(t.visibleWrites,e);if(dd(o))return n;if(n==null&&!ud(o,te()))return null;{const a=n||U.EMPTY_NODE;return Pi(o,a)}}}else{const s=Hn(t.visibleWrites,e);if(!i&&dd(s))return n;if(!i&&n==null&&!ud(s,te()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(_t(c.path,e)||_t(e,c.path))},a=H_(t.allWrites,o,e),l=n||U.EMPTY_NODE;return Pi(a,l)}}}function F3(t,e,n){let r=U.EMPTY_NODE;const i=zr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Hn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Pi(Hn(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),Dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hn(t.visibleWrites,e);return Dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function U3(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(ud(t.visibleWrites,s))return null;{const o=Hn(t.visibleWrites,s);return dd(o)?i.getChild(n):Pi(o,i.getChild(n))}}function z3(t,e,n,r){const i=ye(e,n),s=zr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Hn(t.visibleWrites,i);return Pi(o,r.getNode().getImmediateChild(n))}else return null}function B3(t,e){return zr(t.visibleWrites,e)}function j3(t,e,n,r,i,s,o){let a;const l=Hn(t.visibleWrites,e),c=zr(l,te());if(c!=null)a=c;else if(n!=null)a=Pi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&u.length<i;)d(_,r)!==0&&u.push(_),_=h.getNext();return u}else return[]}function W3(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Xa(t,e,n,r){return G_(t.writeTree,t.treePath,e,n,r)}function Wh(t,e){return F3(t.writeTree,t.treePath,e)}function Om(t,e,n,r){return U3(t.writeTree,t.treePath,e,n,r)}function Ja(t,e){return B3(t.writeTree,ye(t.treePath,e))}function $3(t,e,n,r,i,s){return j3(t.writeTree,t.treePath,e,n,r,i,s)}function $h(t,e,n){return z3(t.writeTree,t.treePath,e,n)}function K_(t,e){return q_(ye(t.treePath,e),t.writeTree)}function q_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,io(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ro(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ni(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,io(r,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Q_=new H3;class Vh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $h(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),s=$3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t){return{filter:t}}function K3(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function q3(t,e,n,r,i){const s=new V3;let o,a;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=hd(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Za(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=Y3(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=fd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=Z3(t,e,c.path,r,i,s):o=X3(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===At.LISTEN_COMPLETE)o=J3(t,e,n.path,r,s);else throw Li("Unknown operation type: "+n.type);const l=s.getChanges();return Q3(e,o,l),{viewCache:o,changes:l}}function Q3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ld(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(j_(ld(e)))}}function Y_(t,e,n,r,i,s){const o=e.eventCache;if(Ja(r,n)!=null)return e;{let a,l;if(Q(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rr(e),u=c instanceof U?c:U.EMPTY_NODE,d=Wh(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Xa(r,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=K(n);if(c===".priority"){x(Qn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Om(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=le(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Om(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=$h(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return xs(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Za(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),_,null)}else{const _=K(n);if(!l.isCompleteForPath(n)&&Qn(n)>1)return e;const v=le(n),m=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),_,m,v,Q_,null)}const d=$_(e,c,l.isFullyInitialized()||Q(n),u.filtersNodes()),h=new Vh(i,d,s);return Y_(t,d,n,i,h,a)}function hd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Vh(i,e,s);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=xs(e,c,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=xs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=le(n),_=a.getNode().getImmediateChild(d);let v;if(Q(h))v=r;else{const w=u.getCompleteChild(d);w!=null?Ah(h)===".priority"&&w.getChild(D_(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=U.EMPTY_NODE}if(_.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),d,v,h,u,o);l=xs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lm(t,e){return t.eventCache.isCompleteForChild(e)}function Y3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ye(n,l);Lm(e,K(u))&&(a=hd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ye(n,l);Lm(e,K(u))||(a=hd(t,a,u,c,i,s,o))}),a}function Fm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=r:c=new ae(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=Fm(t,_,h);l=Za(t,l,new re(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),w=Fm(t,v,h);l=Za(t,l,new re(d),w,i,s,o,a)}}),l}function X3(t,e,n,r,i,s,o){if(Ja(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Za(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let c=new ae(null);return l.getNode().forEachChild(pi,(u,d)=>{c=c.set(new re(u),d)}),fd(t,e,n,c,i,s,a,o)}else return e}else{let c=new ae(null);return r.foreach((u,d)=>{const h=ye(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),fd(t,e,n,c,i,s,a,o)}}function J3(t,e,n,r,i){const s=e.serverCache,o=$_(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return Y_(t,o,n,r,Q_,i)}function Z3(t,e,n,r,i,s){let o;if(Ja(r,n)!=null)return e;{const a=new Vh(r,e,i),l=e.eventCache.getNode();let c;if(Q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xa(r,Rr(e));else{const d=e.serverCache.getNode();x(d instanceof U,"serverChildren would be complete if leaf node"),u=Wh(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=K(n);let d=$h(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,le(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,le(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xa(r,Rr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ja(r,te())!=null,xs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lh(r.getIndex()),s=_3(r);this.processor_=G3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new xr(l,o.isFullyInitialized(),i.filtersNodes()),d=new xr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Al(d,u),this.eventGenerator_=new k3(this.query_)}get query(){return this.query_}}function tk(t){return t.viewCache_.serverCache.getNode()}function nk(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Um(t){return t.eventRegistrations_.length===0}function rk(t,e){t.eventRegistrations_.push(e)}function zm(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Bm(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(x(Rr(t.viewCache_),"We should always have a full cache before handling merges"),x(ld(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=q3(t.processor_,i,e,n,r);return K3(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,X_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ik(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(Ni(s,o))}),n.isFullyInitialized()&&r.push(j_(n.getNode())),X_(t,r,n.getNode(),e)}function X_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return T3(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class sk{constructor(){this.views=new Map}}function ok(t){x(!el,"__referenceConstructor has already been defined"),el=t}function ak(){return x(el,"Reference.ts has not been loaded"),el}function lk(t){return t.views.size===0}function Hh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Bm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Bm(o,e,n,r));return s}}function ck(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Xa(n,i?r:null),l=!1;a?l=!0:r instanceof U?(a=Wh(n,r),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Al(new xr(a,l,!1),new xr(r,i,!1));return new ek(e,c)}return o}function uk(t,e,n,r,i,s){const o=ck(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rk(o,n),ik(o,n)}function dk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Yn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(zm(c,n,r)),Um(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(zm(l,n,r)),Um(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Yn(t)&&s.push(new(ak())(e._repo,e._path)),{removed:s,events:o}}function J_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mi(t,e){let n=null;for(const r of t.views.values())n=n||nk(r,e);return n}function Z_(t,e){if(e._queryParams.loadsAllData())return Ml(t);{const r=e._queryIdentifier;return t.views.get(r)}}function e1(t,e){return Z_(t,e)!=null}function Yn(t){return Ml(t)!=null}function Ml(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;function hk(t){x(!tl,"__referenceConstructor has already been defined"),tl=t}function fk(){return x(tl,"Reference.ts has not been loaded"),tl}let pk=1;class jm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=W3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t1(t,e,n,r,i){return b3(t.pendingWriteTree_,e,n,r,i),i?zi(t,new Tr(Uh(),e,n)):[]}function mk(t,e,n,r){P3(t.pendingWriteTree_,e,n,r);const i=ae.fromObject(n);return zi(t,new bi(Uh(),e,i))}function Mn(t,e,n=!1){const r=A3(t.pendingWriteTree_,e);if(M3(t.pendingWriteTree_,e)){let s=new ae(null);return r.snap!=null?s=s.set(te(),!0):ze(r.children,o=>{s=s.set(new re(o),!0)}),zi(t,new Ya(r.path,s,n))}else return[]}function Dl(t,e,n){return zi(t,new Tr(zh(),e,n))}function gk(t,e,n){const r=ae.fromObject(n);return zi(t,new bi(zh(),e,r))}function yk(t,e){return zi(t,new oo(zh(),e))}function _k(t,e,n){const r=Kh(t,n);if(r){const i=qh(r),s=i.path,o=i.queryId,a=tt(s,e),l=new oo(Bh(o),a);return Qh(t,s,l)}else return[]}function pd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||e1(o,e))){const l=dk(o,e,n,r);lk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Yn(_));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=Ek(h);for(let v=0;v<_.length;++v){const w=_[v],m=w.query,p=i1(t,w);t.listenProvider_.startListening(Ns(m),nl(t,m),p.hashFn,p.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Ns(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(Ol(h));t.listenProvider_.stopListening(Ns(h),_)}))}Ck(t,c)}return a}function vk(t,e,n,r){const i=Kh(t,r);if(i!=null){const s=qh(i),o=s.path,a=s.queryId,l=tt(o,e),c=new Tr(Bh(a),l,n);return Qh(t,o,c)}else return[]}function wk(t,e,n,r){const i=Kh(t,r);if(i){const s=qh(i),o=s.path,a=s.queryId,l=tt(o,e),c=ae.fromObject(n),u=new bi(Bh(a),l,c);return Qh(t,o,u)}else return[]}function Wm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=tt(h,i);s=s||mi(_,v),o=o||Yn(_)});let a=t.syncPointTree_.get(i);a?(o=o||Yn(a),s=s||mi(a,te())):(a=new sk,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=mi(v,te());w&&(s=s.updateImmediateChild(_,w))}));const c=e1(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ol(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Sk();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const u=jh(t.pendingWriteTree_,i);let d=uk(a,e,n,u,s,l);if(!c&&!o&&!r){const h=Z_(a,e);d=d.concat(Ik(t,e,h))}return d}function Gh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),c=mi(a,l);if(c)return c});return G_(i,e,s,n,!0)}function zi(t,e){return n1(e,t.syncPointTree_,null,jh(t.pendingWriteTree_,te()))}function n1(t,e,n,r){if(Q(t.path))return r1(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=mi(i,te()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=K_(r,o);s=s.concat(n1(a,l,c,u))}return i&&(s=s.concat(Hh(i,t,r,n))),s}}function r1(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=mi(i,te()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=K_(r,o),u=t.operationForChild(o);u&&(s=s.concat(r1(u,a,l,c)))}),i&&(s=s.concat(Hh(i,t,r,n))),s}function i1(t,e){const n=e.query,r=nl(t,n);return{hashFn:()=>(tk(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_k(t,n._path,r):yk(t,n._path);{const s=gI(i,n);return pd(t,n,null,s)}}}}function nl(t,e){const n=Ol(e);return t.queryToTagMap.get(n)}function Ol(t){return t._path.toString()+"$"+t._queryIdentifier}function Kh(t,e){return t.tagToQueryMap.get(e)}function qh(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Qh(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=jh(t.pendingWriteTree_,e);return Hh(r,n,i,null)}function Ek(t){return t.fold((e,n,r)=>{if(n&&Yn(n))return[Ml(n)];{let i=[];return n&&(i=J_(n)),ze(r,(s,o)=>{i=i.concat(o)}),i}})}function Ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fk())(t._repo,t._path):t}function Ck(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ol(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Sk(){return pk++}function Ik(t,e,n){const r=e._path,i=nl(t,e),s=i1(t,n),o=t.listenProvider_.startListening(Ns(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!Yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Q(c)&&u&&Yn(u))return[Ml(u).query];{let h=[];return u&&(h=h.concat(J_(u).map(_=>_.query))),ze(d,(_,v)=>{h=h.concat(v)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ns(u),nl(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yh(n)}node(){return this.node_}}class Xh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Xh(this.syncTree_,n)}node(){return Gh(this.syncTree_,this.path_)}}const kk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$m=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Tk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Tk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},xk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},s1=function(t,e,n,r){return Jh(e,new Xh(n,t),r)},o1=function(t,e,n){return Jh(t,new Yh(e),n)};function Jh(t,e,n){const r=t.getPriority().val(),i=$m(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=$m(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(_e,(a,l)=>{const c=Jh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ef(t,e){let n=e instanceof re?e:new re(e),r=t,i=K(n);for(;i!==null;){const s=xi(r.node.children,i)||{children:{},childCount:0};r=new Zh(i,r,s),n=le(n),i=K(n)}return r}function Bi(t){return t.node.value}function a1(t,e){t.node.value=e,md(t)}function l1(t){return t.node.childCount>0}function Rk(t){return Bi(t)===void 0&&!l1(t)}function Ll(t,e){ze(t.node.children,(n,r)=>{e(new Zh(n,t,r))})}function c1(t,e,n,r){n&&!r&&e(t),Ll(t,i=>{c1(i,e,!0,r)}),n&&r&&e(t)}function Nk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Io(t){return new re(t.parent===null?t.name:Io(t.parent)+"/"+t.name)}function md(t){t.parent!==null&&bk(t.parent,t.name,t)}function bk(t,e,n){const r=Rk(n),i=Zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,md(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,md(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ak=/[\[\].#$\u0000-\u001F\u007F]/,Bc=10*1024*1024,tf=function(t){return typeof t=="string"&&t.length!==0&&!Pk.test(t)},u1=function(t){return typeof t=="string"&&t.length!==0&&!Ak.test(t)},Mk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),u1(t)},Dk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!xh(t)||t&&typeof t=="object"&&Zt(t,".sv")},d1=function(t,e,n,r){r&&e===void 0||Fl(Rl(t,"value"),e,n)},Fl=function(t,e,n){const r=n instanceof re?new YI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+or(r));if(typeof e=="function")throw new Error(t+"contains a function "+or(r)+" with contents = "+e.toString());if(xh(e))throw new Error(t+"contains "+e.toString()+" "+or(r));if(typeof e=="string"&&e.length>Bc/3&&Nl(e)>Bc)throw new Error(t+"contains a string greater than "+Bc+" utf8 bytes "+or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tf(o)))throw new Error(t+" contains an invalid key ("+o+") "+or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XI(r,o),Fl(t,a,r),JI(r)}),i&&s)throw new Error(t+' contains ".value" child '+or(r)+" in addition to actual children.")}},Ok=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=no(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!tf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&_t(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Lk=function(t,e,n,r){if(r&&e===void 0)return;const i=Rl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ze(e,(o,a)=>{const l=new re(o);if(Fl(i,a,ye(n,l)),Ah(l)===".priority"&&!Dk(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Ok(i,s)},h1=function(t,e,n,r){if(!(r&&n===void 0)&&!u1(n))throw new Error(Rl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),h1(t,e,n,r)},f1=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Uk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Mk(n))throw new Error(Rl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ul(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Mh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function p1(t,e,n){Ul(t,n),m1(t,r=>Mh(r,e))}function Ut(t,e,n){Ul(t,n),m1(t,r=>_t(r,e)||_t(e,r))}function m1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Bk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Bk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();gr&&Le("event: "+n.toString()),Ui(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="repo_interrupt",Wk=25;class $k{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qa(),this.transactionQueueTree_=new Zh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vk(t,e,n){if(t.stats_=bh(t.repoInfo_),t.forceRestClient_||wI())t.server_=new qa(t.repoInfo_,(r,i,s,o)=>{Vm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new hn(t.repoInfo_,e,(r,i,s,o)=>{Vm(t,r,i,s,o)},r=>{Hm(t,r)},r=>{Hk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kI(t.repoInfo_,()=>new I3(t.stats_,t.server_)),t.infoData_=new v3,t.infoSyncTree_=new jm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Dl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nf(t,"connected",!1),t.serverSyncTree_=new jm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function g1(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zl(t){return kk({timestamp:g1(t)})}function Vm(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=$a(n,c=>be(c));o=wk(t.serverSyncTree_,s,l,i)}else{const l=be(n);o=vk(t.serverSyncTree_,s,l,i)}else if(r){const l=$a(n,c=>be(c));o=gk(t.serverSyncTree_,s,l)}else{const l=be(n);o=Dl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ai(t,s)),Ut(t.eventQueue_,a,o)}function Hm(t,e){nf(t,"connected",e),e===!1&&qk(t)}function Hk(t,e){ze(e,(n,r)=>{nf(t,n,r)})}function nf(t,e,n){const r=new re("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=Dl(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function rf(t){return t.nextWriteId_++}function Gk(t,e,n,r,i){Bl(t,"set",{path:e.toString(),value:n,priority:r});const s=zl(t),o=be(n,r),a=Gh(t.serverSyncTree_,e),l=o1(o,a,s),c=rf(t),u=t1(t.serverSyncTree_,e,l,c,!0);Ul(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||Ye("set at "+e+" failed: "+h);const w=Mn(t.serverSyncTree_,c,!v);Ut(t.eventQueue_,e,w),gd(t,i,h,_)});const d=of(t,e);Ai(t,d),Ut(t.eventQueue_,d,[])}function Kk(t,e,n,r){Bl(t,"update",{path:e.toString(),value:n});let i=!0;const s=zl(t),o={};if(ze(n,(a,l)=>{i=!1,o[a]=s1(ye(e,a),be(l),t.serverSyncTree_,s)}),i)Le("update() called with empty data.  Don't do anything."),gd(t,r,"ok",void 0);else{const a=rf(t),l=mk(t.serverSyncTree_,e,o,a);Ul(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ye("update at "+e+" failed: "+c);const h=Mn(t.serverSyncTree_,a,!d),_=h.length>0?Ai(t,e):e;Ut(t.eventQueue_,_,h),gd(t,r,c,u)}),ze(n,c=>{const u=of(t,ye(e,c));Ai(t,u)}),Ut(t.eventQueue_,e,[])}}function qk(t){Bl(t,"onDisconnectEvents");const e=zl(t),n=Qa();ad(t.onDisconnect_,te(),(i,s)=>{const o=s1(i,s,t.serverSyncTree_,e);W_(n,i,o)});let r=[];ad(n,te(),(i,s)=>{r=r.concat(Dl(t.serverSyncTree_,i,s));const o=of(t,i);Ai(t,o)}),t.onDisconnect_=Qa(),Ut(t.eventQueue_,te(),r)}function Qk(t,e,n){let r;K(e._path)===".info"?r=Wm(t.infoSyncTree_,e,n):r=Wm(t.serverSyncTree_,e,n),p1(t.eventQueue_,e._path,r)}function Gm(t,e,n){let r;K(e._path)===".info"?r=pd(t.infoSyncTree_,e,n):r=pd(t.serverSyncTree_,e,n),p1(t.eventQueue_,e._path,r)}function Yk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jk)}function Bl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function gd(t,e,n,r){e&&Ui(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function y1(t,e,n){return Gh(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function sf(t,e=t.transactionQueueTree_){if(e||jl(t,e),Bi(e)){const n=v1(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Xk(t,Io(e),n)}else l1(e)&&Ll(e,n=>{sf(t,n)})}function Xk(t,e,n){const r=n.map(c=>c.currentWriteId),i=y1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=tt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Bl(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Mn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();jl(t,ef(t.transactionQueueTree_,e)),sf(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ui(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ai(t,e)}},o)}function Ai(t,e){const n=_1(t,e),r=Io(n),i=v1(t,n);return Jk(t,i,r),r}function Jk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tt(n,l.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Mn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Wk)u=!0,d="maxretry",i=i.concat(Mn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=y1(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){Fl("transaction failed: Data returned ",_,l.path);let v=be(_);typeof _=="object"&&_!=null&&Zt(_,".priority")||(v=v.updatePriority(h.getPriority()));const m=l.currentWriteId,p=zl(t),f=o1(v,h,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=rf(t),o.splice(o.indexOf(m),1),i=i.concat(t1(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Mn(t.serverSyncTree_,m,!0))}else u=!0,d="nodata",i=i.concat(Mn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}jl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ui(r[a]);sf(t,t.transactionQueueTree_)}function _1(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&Bi(r)===void 0;)r=ef(r,n),e=le(e),n=K(e);return r}function v1(t,e){const n=[];return w1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function w1(t,e,n){const r=Bi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ll(e,i=>{w1(t,i,n)})}function jl(t,e){const n=Bi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,a1(e,n.length>0?n:void 0)}Ll(e,r=>{jl(t,r)})}function of(t,e){const n=Io(_1(t,e)),r=ef(t.transactionQueueTree_,e);return Nk(r,i=>{jc(t,i)}),jc(t,r),c1(r,i=>{jc(t,i)}),n}function jc(t,e){const n=Bi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?a1(e,void 0):n.length=s+1,Ut(t.eventQueue_,Io(e),i);for(let o=0;o<r.length;o++)Ui(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Km=function(t,e){const n=tT(t),r=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new k_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},tT=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Zk(t.substring(u,d)));const h=eT(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",nT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=qm.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=qm.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class C1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:Ah(this._path)}get ref(){return new En(this._repo,this._path)}get _queryIdentifier(){const e=Pm(this._queryParams),n=Rh(e);return n==="{}"?"default":n}get _queryObject(){return Pm(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof af))return!1;const n=this._repo===e._repo,r=Mh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qI(this._path)}}class En extends af{constructor(e,n){super(e,n,new Fh,!1)}get parent(){const e=D_(this._path);return e===null?null:new En(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Nr(this.ref,e);return new ao(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ao(i,Nr(this.ref,r),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jo(t,e){return t=Ke(t),t._checkNotDeleted("ref"),e!==void 0?Nr(t._root,e):t._root}function Nr(t,e){return t=Ke(t),K(t._path)===null?Fk("child","path",e,!1):h1("child","path",e,!1),new En(t._repo,ye(t._path,e))}function iT(t,e){t=Ke(t),f1("push",t._path),d1("push",e,t._path,!0);const n=g1(t._repo),r=nT(n),i=Nr(t,r),s=Nr(t,r);let o;return e!=null?o=sT(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sT(t,e){t=Ke(t),f1("set",t._path),d1("set",e,t._path,!1);const n=new vo;return Gk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function oT(t,e){Lk("update",e,t._path,!1);const n=new vo;return Kk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class lf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new E1("value",this,new ao(e.snapshotNode,new En(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new C1(this,e,n):null}matches(e){return e instanceof lf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new C1(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=Nr(new En(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new E1(e.type,this,new ao(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function aT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Gm(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new rT(n,s||void 0),a=e==="value"?new lf(o):new cf(e,o);return Qk(t._repo,t,a),()=>Gm(t._repo,t,a)}function Qm(t,e,n,r){return aT(t,"value",e,n,r)}ok(En);hk(En);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="FIREBASE_DATABASE_EMULATOR_HOST",yd={};let cT=!1;function uT(t,e,n,r){t.repoInfo_=new k_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Km(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[lT]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Km(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new fi(fi.OWNER):new CI(t.name,t.options,e);Uk("Invalid Firebase Database URL",o),Q(o.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=fT(a,t,u,new EI(t.name,n));return new pT(d,t)}function hT(t,e){const n=yd[e];(!n||n[t.key]!==t)&&yn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yk(t),delete n[t.key]}function fT(t,e,n,r){let i=yd[e.name];i||(i={},yd[e.name]=i);let s=i[t.toURLString()];return s&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $k(t,cT,n,r),i[t.toURLString()]=s,s}class pT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new En(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function Wc(t=Th(),e){const n=Fr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=LC("database");r&&mT(n,...r)}return n}function mT(t,e,n,r={}){t=Ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fi(fi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:UC(r.mockUserToken,t.app.options.projectId);s=new fi(o)}uT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){oI(wo),Xt(new Ft("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wt(pm,mm,t),wt(pm,mm,"esm2017")}hn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gT();function yT(){const[t,e]=b.useState([]),[n,r]=b.useState([]),[i,s]=b.useState(""),[o,a]=b.useState(""),[l,c]=b.useState(null);console.log(n,o);const u=()=>{s(""),a(""),c(null)};return b.useEffect(()=>{const h=Wc(),_=Jo(h,"entries");Qm(_,v=>{const w=v.val(),m=Object.keys(w).map(p=>({id:p,...w[p]}));e(m)})},[]),b.useEffect(()=>{const h=Wc(),_=Jo(h,"categories");Qm(_,v=>{const w=v.val(),m=Object.keys(w).map(p=>({id:p,value:w[p]}));r(m)})},[]),g("div",{className:"bg-white",children:W("div",{className:"relative isolate px-6 lg:px-8",children:[g("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:g("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),W("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-25",children:[g("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",children:"Income + Expenses"}),W("form",{className:"w-full max-w-lg",onSubmit:()=>{const h=Wc(),_={category:o,isIncome:l,amount:i,timestamp:new Date().getTime()},v=iT(Nr(Jo(h),"posts")).key;console.log(v);const w={};w["/entries/"+v]=_,oT(Jo(h),w),u()},children:[W("div",{className:"mt-6",children:[g("label",{htmlFor:"amount",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Amount"}),g("input",{value:i,onChange:h=>s(h.target.value),type:"text",id:"amount",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),g("label",{className:"block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Category"}),g("ul",{className:"w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:n.map(({id:h,value:_})=>g("li",{className:"w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600",children:W("div",{className:"flex items-center ps-3",children:[g("input",{onChange:()=>a(h),checked:h===o,id:`category-${h}`,type:"radio",value:h,name:"category",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),g("label",{htmlFor:`category-${h}`,className:"w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:_})]})},h))}),W("ul",{className:"grid w-full my-6 gap-6 md:grid-cols-2",children:[W("li",{children:[g("input",{checked:l===!0,onChange:()=>c(!0),type:"radio",id:"income",value:"income",className:"hidden peer",required:!0}),g("label",{htmlFor:"income",className:"inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",children:W("div",{className:"block",children:[g("div",{className:"w-full text-m font-semibold",children:"Income"}),g("div",{className:"w-full",children:"Money you earned"})]})})]}),W("li",{children:[g("input",{checked:l===!1,onChange:()=>c(!1),type:"radio",id:"expense",value:"expense",className:"hidden peer"}),g("label",{htmlFor:"expense",className:"inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",children:W("div",{className:"block",children:[g("div",{className:"w-full text-m font-semibold",children:"Expense"}),g("div",{className:"w-full",children:"Money you spent"})]})})]})]}),W("div",{className:"flex flex-row justify-end gap-0",children:[g("button",{type:"button",onClick:()=>u(),className:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800",children:"Cancel"}),g("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Submit"})]})]}),g(_T,{entries:t})]})]})})}const _T=({entries:t})=>g("div",{className:"relative overflow-x-auto mt-12",children:W("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[g("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:W("tr",{children:[g("th",{scope:"col",className:"px-6 py-3",children:"Amount"}),g("th",{scope:"col",className:"px-6 py-3",children:"Category"}),g("th",{scope:"col",className:"px-6 py-3",children:"Type"}),g("th",{scope:"col",className:"px-6 py-3",children:"Date"})]})}),g("tbody",{children:t.map(e=>W("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[g("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.amount}),g("td",{className:"px-6 py-4",children:e.category}),W("td",{className:"px-6 py-4",children:[e.isIncome&&W(Ms,{children:[g(vT,{}),g("p",{className:"text-green-500",children:"Income"})]}),!e.isIncome&&W(Ms,{children:[g(wT,{}),g("p",{className:"text-red-600",children:"Expense"})]})]}),g("td",{className:"px-6 py-4",children:new Date(e.timestamp).toLocaleDateString()})]},e.id))})]})}),vT=()=>g("svg",{className:"w-4 h-4 text-green-500 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 16",children:g("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"})}),wT=()=>g("svg",{className:"w-4 h-4 text-red-600 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",children:g("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"})}),ET=()=>(_o(),localStorage.getItem("token"),g(yT,{}));function uf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function S1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=S1,I1=new Lr("auth","Firebase",S1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new bl("@firebase/auth");function ha(t,...e){Ym.logLevel<=se.ERROR&&Ym.error(`Auth (${wo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw df(t,...e)}function Qt(t,...e){return df(t,...e)}function k1(t,e,n){const r=Object.assign(Object.assign({},CT()),{[e]:n});return new Lr("auth","Firebase",r).create(e,{appName:t.name})}function ST(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),k1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return I1.create(t,...e)}function z(t,e,...n){if(!t)throw df(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function _n(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function un(t){_n(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e){const n=Fr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zs(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function kT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TT(){return Jm()==="http:"||Jm()==="https:"}function Jm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TT()||e_()||"connection"in navigator)?navigator.onLine:!0}function RT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=Ih()||t_()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new ko(3e4,6e4);function To(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xo(t,e,n,r,i={}){return x1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),T1.fetch()(R1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function x1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NT),e);try{const i=new PT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw k1(t,u,c);St(t,u)}}catch(i){if(i instanceof Jt)throw i;St(t,"network-request-failed",{message:String(i)})}}async function Ro(t,e,n,r,i={}){const s=await xo(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function R1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`}class PT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),bT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(t,e){return xo(t,"POST","/v1/accounts:delete",e)}async function MT(t,e){return xo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DT(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=ff(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs($c(i.auth_time)),issuedAtTime:bs($c(i.iat)),expirationTime:bs($c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wa(n);return i?JSON.parse(i):(ha("Failed to decode base64 JWT payload"),null)}catch(i){return ha("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function OT(t){const e=ff(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&LT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lo(t,MT(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BT(s.providerUserInfo):[],a=zT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new N1(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function UT(t){const e=Ke(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BT(t){return t.map(e=>{var{providerId:n}=e,r=uf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){const n=await x1(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=R1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new N1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lo(this,AT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=n.createdAt)!==null&&c!==void 0?c:void 0,f=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:C,isAnonymous:I,providerData:R,stsTokenManager:P}=n;z(y&&P,e,"internal-error");const N=co.fromJSON(this.name,P);z(typeof y=="string",e,"internal-error"),Sn(d,e.name),Sn(h,e.name),z(typeof C=="boolean",e,"internal-error"),z(typeof I=="boolean",e,"internal-error"),Sn(_,e.name),Sn(v,e.name),Sn(w,e.name),Sn(m,e.name),Sn(p,e.name),Sn(f,e.name);const Z=new yr({uid:y,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:N,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(Z.providerData=R.map($=>Object.assign({},$))),m&&(Z._redirectEventId=m),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b1.type="NONE";const Zm=b1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(un(Zm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||un(Zm);const o=fa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=yr._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(P1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O1(e))return"Blackberry";if(L1(e))return"Webos";if(pf(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(D1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function P1(t=Ge()){return/firefox\//i.test(t)}function pf(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=Ge()){return/crios\//i.test(t)}function M1(t=Ge()){return/iemobile/i.test(t)}function D1(t=Ge()){return/android/i.test(t)}function O1(t=Ge()){return/blackberry/i.test(t)}function L1(t=Ge()){return/webos/i.test(t)}function Wl(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WT(t=Ge()){var e;return Wl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $T(){return zC()&&document.documentMode===10}function F1(t=Ge()){return Wl(t)||D1(t)||L1(t)||O1(t)||/windows phone/i.test(t)||M1(t)}function VT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e=[]){let n;switch(t){case"Browser":n=e0(Ge());break;case"Worker":n=`${e0(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t0(this),this.idTokenSubscription=new t0(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=U1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ji(t){return Ke(t)}class t0{constructor(e){this.auth=e,this.observer=null,this.addObserver=KC(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KT(t,e,n){const r=ji(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=z1(e),{host:o,port:a}=qT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QT()}function z1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qT(t){const e=z1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:n0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:n0(o)}}}function n0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function YT(t,e){return xo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){return Ro(t,"POST","/v1/accounts:signInWithPassword",To(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}async function ZT(t,e){return Ro(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends mf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return XT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JT(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return YT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZT(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e){return Ro(t,"POST","/v1/accounts:signInWithIdp",To(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5="http://localhost";class br extends mf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=uf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:e5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n5(t){const e=ps(ms(t)).link,n=e?ps(ms(e)).deep_link_id:null,r=ps(ms(t)).deep_link_id;return(r?ps(ms(r)).link:null)||r||n||e||t}class gf{constructor(e){var n,r,i,s,o,a;const l=ps(ms(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=t5((i=l.mode)!==null&&i!==void 0?i:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=n5(e);try{return new gf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gf.parseLink(n);return z(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends No{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends No{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends No{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r5(t,e){return Ro(t,"POST","/v1/accounts:signUp",To(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yr._fromIdTokenResponse(e,r,i),o=r0(r);return new Pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=r0(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function r0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function B1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function i5(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s5(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await lo(t,B1(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ff(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e,n=!1){const r="signIn",i=await B1(t,r,e),s=await Pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function o5(t,e){return j1(ji(t),e)}async function a5(t,e,n){const r=ji(t),i=await r5(r,{returnSecureToken:!0,email:e,password:n}),s=await Pr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function l5(t,e,n){return o5(Ke(t),Wi.credential(e,n))}function c5(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function u5(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function W1(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}const sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d5(){const t=Ge();return pf(t)||Wl(t)}const h5=1e3,f5=10;class V1 extends $1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d5()&&VT(),this.fallbackToPolling=F1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$T()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,f5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V1.type="LOCAL";const p5=V1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends $1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H1.type="SESSION";const G1=H1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await m5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_f("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function y5(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function _5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w5(){return K1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="firebaseLocalStorageDb",E5=1,ol="firebaseLocalStorage",Q1="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function C5(){const t=indexedDB.deleteDatabase(q1);return new bo(t).toPromise()}function vd(){const t=indexedDB.open(q1,E5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:Q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await C5(),e(await vd()))})})}async function i0(t,e,n){const r=Vl(t,!0).put({[Q1]:e,value:n});return new bo(r).toPromise()}async function S5(t,e){const n=Vl(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function s0(t,e){const n=Vl(t,!0).delete(e);return new bo(n).toPromise()}const I5=800,k5=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(w5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _5(),!this.activeServiceWorker)return;this.sender=new g5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await i0(e,sl,"1"),await s0(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>i0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>s0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vl(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const T5=Y1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function R5(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x5().appendChild(r)})}function N5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t,e){return e?un(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends mf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b5(t){return j1(t.auth,new vf(t),t.bypassAuthState)}function P5(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),s5(n,new vf(t),t.bypassAuthState)}async function A5(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),i5(n,new vf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b5;case"linkViaPopup":case"linkViaRedirect":return A5;case"reauthViaPopup":case"reauthViaRedirect":return P5;default:St(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M5=new ko(2e3,1e4);async function Z1(t,e,n){const r=ji(t);ST(t,e,yf);const i=X1(r,n);return new hr(r,"signInViaPopup",e,i).executeNotNull()}class hr extends J1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,M5.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5="pendingRedirect",pa=new Map;class O5 extends J1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await L5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L5(t,e){const n=z5(e),r=U5(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function F5(t,e){pa.set(t._key(),e)}function U5(t){return un(t._redirectPersistence)}function z5(t){return fa(D5,t.config.apiKey,t.name)}async function B5(t,e,n=!1){const r=ji(t),i=X1(r,e),o=await new O5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j5=10*60*1e3;class W5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j5&&this.cachedEventUids.clear(),this.cachedEventUids.has(o0(e))}saveEventToCache(e){this.cachedEventUids.add(o0(e)),this.lastProcessedEventTime=Date.now()}}function o0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V5(t,e={}){return xo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G5=/^https?/;async function K5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await V5(t);for(const n of e)try{if(q5(n))return}catch{}St(t,"unauthorized-domain")}function q5(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G5.test(n))return!1;if(H5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5=new ko(3e4,6e4);function a0(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y5(t){return new Promise((e,n)=>{var r,i,s;function o(){a0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{a0(),n(Qt(t,"network-request-failed"))},timeout:Q5.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=N5("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},R5(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ma=null,e})}let ma=null;function X5(t){return ma=ma||Y5(t),ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5=new ko(5e3,15e3),Z5="__/auth/iframe",e6="emulator/auth/iframe",t6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r6(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,e6):`https://${t.config.authDomain}/${Z5}`,r={apiKey:e.apiKey,appName:t.name,v:wo},i=n6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function i6(t){const e=await X5(t),n=Yt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:r6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},J5.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o6=500,a6=600,l6="_blank",c6="http://localhost";class l0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u6(t,e,n,r=o6,i=a6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},s6),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ge().toLowerCase();n&&(a=A1(c)?l6:n),P1(c)&&(e=e||c6,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(WT(c)&&a!=="_self")return d6(e||"",a),new l0(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new l0(d)}function d6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6="__/auth/handler",f6="emulator/auth/handler";function c0(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wo,eventId:i};if(e instanceof yf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof No){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${p6(t)}?${Fi(a).slice(1)}`}function p6({config:t}){return t.emulator?hf(t,f6):`https://${t.authDomain}/${h6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class m6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G1,this._completeRedirectFn=B5,this._overrideRedirectResult=F5}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=c0(e,n,r,_d(),i);return u6(e,o,_f())}async _openRedirect(e,n,r,i){return await this._originValidation(e),y5(c0(e,n,r,_d(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i6(e),r=new W5(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vc];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return F1()||pf()||Wl()}}const g6=m6;var u0="@firebase/auth",d0="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function v6(t){Xt(new Ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{z(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:U1(t)},u=new GT(a,l,c);return kT(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xt(new Ft("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(r=>new y6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(u0,d0,_6(t)),wt(u0,d0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=5*60,E6=Zy("authIdTokenMaxAge")||w6;let h0=null;const C6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E6)return;const i=n==null?void 0:n.token;h0!==i&&(h0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S6(t=Th()){const e=Fr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IT(t,{popupRedirectResolver:g6,persistence:[T5,p5,G1]}),r=Zy("authTokenSyncURL");if(r){const s=C6(r);u5(n,s,()=>s(n.currentUser)),c5(n,o=>s(o))}const i=Jy("auth");return i&&KT(n,`http://${i}`),n}v6("Browser");var I6="firebase",k6="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(I6,k6,"app");const T6=(t,e)=>e.some(n=>t instanceof n);let f0,p0;function x6(){return f0||(f0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R6(){return p0||(p0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,wd=new WeakMap,nv=new WeakMap,Hc=new WeakMap,wf=new WeakMap;function N6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function b6(t){if(wd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wd.set(t,e)}let Ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P6(t){Ed=t(Ed)}function A6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return nv.set(r,e.sort?e.sort():[e]),Gn(r)}:R6().includes(t)?function(...e){return t.apply(Gc(this),e),Gn(tv.get(this))}:function(...e){return Gn(t.apply(Gc(this),e))}}function M6(t){return typeof t=="function"?A6(t):(t instanceof IDBTransaction&&b6(t),T6(t,x6())?new Proxy(t,Ed):t)}function Gn(t){if(t instanceof IDBRequest)return N6(t);if(Hc.has(t))return Hc.get(t);const e=M6(t);return e!==t&&(Hc.set(t,e),wf.set(e,t)),e}const Gc=t=>wf.get(t);function D6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const O6=["get","getKey","getAll","getAllKeys","count"],L6=["put","add","delete","clear"],Kc=new Map;function m0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O6.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Kc.set(e,s),s}P6(t=>({...t,get:(e,n,r)=>m0(e,n)||t.get(e,n,r),has:(e,n)=>!!m0(e,n)||t.has(e,n)}));const rv="@firebase/installations",Ef="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=1e4,sv=`w:${Ef}`,ov="FIS_v2",F6="https://firebaseinstallations.googleapis.com/v1",U6=60*60*1e3,z6="installations",B6="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j6={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ar=new Lr(z6,B6,j6);function av(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv({projectId:t}){return`${F6}/projects/${t}/installations`}function cv(t){return{token:t.token,requestStatus:2,expiresIn:$6(t.expiresIn),creationTime:Date.now()}}async function uv(t,e){const r=(await e.json()).error;return Ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function W6(t,{refreshToken:e}){const n=dv(t);return n.append("Authorization",V6(e)),n}async function hv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $6(t){return Number(t.replace("s","000"))}function V6(t){return`${ov} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H6({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lv(t),i=dv(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ov,appId:t.appId,sdkVersion:sv},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hv(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:cv(c.authToken)}}else throw await uv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G6(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K6=/^[cdef][\w-]{21}$/,Cd="";function q6(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Q6(t);return K6.test(n)?n:Cd}catch{return Cd}}function Q6(t){return G6(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new Map;function mv(t,e){const n=Hl(t);gv(n,e),Y6(n,e)}function gv(t,e){const n=pv.get(t);if(n)for(const r of n)r(e)}function Y6(t,e){const n=X6();n&&n.postMessage({key:t,fid:e}),J6()}let fr=null;function X6(){return!fr&&"BroadcastChannel"in self&&(fr=new BroadcastChannel("[Firebase] FID Change"),fr.onmessage=t=>{gv(t.data.key,t.data.fid)}),fr}function J6(){pv.size===0&&fr&&(fr.close(),fr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z6="firebase-installations-database",e4=1,Mr="firebase-installations-store";let qc=null;function Cf(){return qc||(qc=D6(Z6,e4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mr)}}})),qc}async function al(t,e){const n=Hl(t),i=(await Cf()).transaction(Mr,"readwrite"),s=i.objectStore(Mr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mv(t,e.fid),e}async function yv(t){const e=Hl(t),r=(await Cf()).transaction(Mr,"readwrite");await r.objectStore(Mr).delete(e),await r.done}async function Gl(t,e){const n=Hl(t),i=(await Cf()).transaction(Mr,"readwrite"),s=i.objectStore(Mr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf(t){let e;const n=await Gl(t.appConfig,r=>{const i=t4(r),s=n4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function t4(t){const e=t||{fid:q6(),registrationStatus:0};return _v(e)}function n4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=r4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:i4(t)}:{installationEntry:e}}async function r4(t,e){try{const n=await H6(t,e);return al(t.appConfig,n)}catch(n){throw av(n)&&n.customData.serverCode===409?await yv(t.appConfig):await al(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function i4(t){let e=await g0(t.appConfig);for(;e.registrationStatus===1;)await fv(100),e=await g0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sf(t);return r||n}return e}function g0(t){return Gl(t,e=>{if(!e)throw Ar.create("installation-not-found");return _v(e)})}function _v(t){return s4(t)?{fid:t.fid,registrationStatus:0}:t}function s4(t){return t.registrationStatus===1&&t.registrationTime+iv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o4({appConfig:t,heartbeatServiceProvider:e},n){const r=a4(t,n),i=W6(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:sv,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hv(()=>fetch(r,a));if(l.ok){const c=await l.json();return cv(c)}else throw await uv("Generate Auth Token",l)}function a4(t,{fid:e}){return`${lv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t,e=!1){let n;const r=await Gl(t.appConfig,s=>{if(!vv(s))throw Ar.create("not-registered");const o=s.authToken;if(!e&&u4(o))return s;if(o.requestStatus===1)return n=l4(t,e),s;{if(!navigator.onLine)throw Ar.create("app-offline");const a=h4(s);return n=c4(t,a),a}});return n?await n:r.authToken}async function l4(t,e){let n=await y0(t.appConfig);for(;n.authToken.requestStatus===1;)await fv(100),n=await y0(t.appConfig);const r=n.authToken;return r.requestStatus===0?If(t,e):r}function y0(t){return Gl(t,e=>{if(!vv(e))throw Ar.create("not-registered");const n=e.authToken;return f4(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function c4(t,e){try{const n=await o4(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await al(t.appConfig,r),n}catch(n){if(av(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await al(t.appConfig,r)}throw n}}function vv(t){return t!==void 0&&t.registrationStatus===2}function u4(t){return t.requestStatus===2&&!d4(t)}function d4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U6}function h4(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function f4(t){return t.requestStatus===1&&t.requestTime+iv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sf(e);return r?r.catch(console.error):If(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m4(t,e=!1){const n=t;return await g4(n),(await If(n,e)).token}async function g4(t){const{registrationPromise:e}=await Sf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t){if(!t||!t.options)throw Qc("App Configuration");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qc(t){return Ar.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="installations",_4="installations-internal",v4=t=>{const e=t.getProvider("app").getImmediate(),n=y4(e),r=Fr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},w4=t=>{const e=t.getProvider("app").getImmediate(),n=Fr(e,wv).getImmediate();return{getId:()=>p4(n),getToken:i=>m4(n,i)}};function E4(){Xt(new Ft(wv,v4,"PUBLIC")),Xt(new Ft(_4,w4,"PRIVATE"))}E4();wt(rv,Ef);wt(rv,Ef,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="analytics",C4="firebase_id",S4="origin",I4=60*1e3,k4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new bl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ut=new Lr("analytics","Analytics",T4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t){if(!t.startsWith(kf)){const e=ut.create("invalid-gtag-resource",{gtagURL:t});return ot.warn(e.message),""}return t}function Ev(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function R4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function N4(t,e){const n=R4("firebase-js-sdk-policy",{createScriptURL:x4}),r=document.createElement("script"),i=`${kf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function b4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function P4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Ev(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){ot.error(a)}t("config",i,s)}async function A4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ev(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ot.error(s)}}function M4(t,e,n,r){async function i(s,o,a){try{s==="event"?await A4(t,e,n,o,a):s==="config"?await P4(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){ot.error(l)}}return i}function D4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=M4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function O4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=30,F4=1e3;class U4{constructor(e={},n=F4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Cv=new U4;function z4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function B4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:z4(r)},s=k4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function j4(t,e=Cv,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new V4;return setTimeout(async()=>{a.abort()},n!==void 0?n:I4),Sv({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Sv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Cv){var s;const{appId:o,measurementId:a}=t;try{await W4(r,e)}catch(l){if(a)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await B4(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!$4(c)){if(i.deleteThrottleMetadata(o),a)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?om(n,i.intervalMillis,L4):om(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),ot.debug(`Calling attemptFetch again in ${u} millis`),Sv(t,d,r,i)}}function W4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $4(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class V4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function H4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(){if(r_())try{await i_()}catch(t){return ot.warn(ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ot.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function K4(t,e,n,r,i,s,o){var a;const l=j4(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ot.error(_)),e.push(l);const c=G4().then(_=>{if(_)return r.getId()}),[u,d]=await Promise.all([l,c]);O4(s)||N4(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[S4]="firebase",h.update=!0,d!=null&&(h[C4]=d),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.app=e}_delete(){return delete Ps[this.app.options.appId],Promise.resolve()}}let Ps={},_0=[];const v0={};let Yc="dataLayer",Q4="gtag",w0,Iv,E0=!1;function Y4(){const t=[];if(e_()&&t.push("This is a browser extension environment."),BC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ut.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function X4(t,e,n){Y4();const r=t.options.appId;if(!r)throw ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(Ps[r]!=null)throw ut.create("already-exists",{id:r});if(!E0){b4(Yc);const{wrappedGtag:s,gtagCore:o}=D4(Ps,_0,v0,Yc,Q4);Iv=s,w0=o,E0=!0}return Ps[r]=K4(t,_0,v0,e,w0,Yc,n),new q4(t)}function J4(t=Th()){t=Ke(t);const e=Fr(t,ll);return e.isInitialized()?e.getImmediate():Z4(t)}function Z4(t,e={}){const n=Fr(t,ll);if(n.isInitialized()){const i=n.getImmediate();if(Zs(e,n.getOptions()))return i;throw ut.create("already-initialized")}return n.initialize({options:e})}function ex(t,e,n,r){t=Ke(t),H4(Iv,Ps[t.app.options.appId],e,n,r).catch(i=>ot.error(i))}const C0="@firebase/analytics",S0="0.9.5";function tx(){Xt(new Ft(ll,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return X4(r,i,n)},"PUBLIC")),Xt(new Ft("analytics-internal",t,"PRIVATE")),wt(C0,S0),wt(C0,S0,"esm2017");function t(e){try{const n=e.getProvider(ll).getImmediate();return{logEvent:(r,i,s)=>ex(n,r,i,s)}}catch(n){throw ut.create("interop-component-reg-failed",{reason:n})}}}tx();const nx={apiKey:"AIzaSyDHkg8nZm7i21RchfLkHga_OyeSzlyjDF8",authDomain:"test-with-will.firebaseapp.com",projectId:"test-with-will",storageBucket:"test-with-will.appspot.com",messagingSenderId:"80056434313",appId:"1:80056434313:web:504062ee588d19fc055058",measurementId:"G-LKJ2GN7JS9"},kv=l_(nx);J4(kv);const _i=S6(kv);function rx(){const t=_o(),[e,n]=b.useState(""),[r,i]=b.useState(""),[s,o]=b.useState(!1),[a,l]=b.useState(""),[c,u]=b.useState("");b.useEffect(()=>W1(_i,p=>{u(p&&p.email||"")}),[]);const d=async m=>{if(o(!0),m.preventDefault(),!v(e)){i("Invalid email"),o(!1);return}if(!w(a)){i("Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character"),o(!1);return}try{const{user:p}=await l5(_i,e,a),f=await p.getIdToken();localStorage.setItem("token",f),t("/dashboard"),o(!1)}catch{_(r)}},h=async()=>{o(!0);const m=new Gt;try{const f=await(await Z1(_i,m)).user.getIdToken();localStorage.setItem("token",f),t("/dashboard"),o(!1)}catch(p){_(p)}},_=m=>{i(m.message),o(!1)},v=m=>/\S+@\S+\.\S+/.test(m),w=m=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(m);return g(Ms,{children:g("section",{className:"bg-gray-50 dark:bg-gray-900",children:W("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"50px",height:"50px",children:[g("circle",{cx:"78",cy:"14",r:"1",fill:"#f1bc19"}),g("circle",{cx:"50",cy:"50",r:"38",fill:"#f9dbd2"}),g("circle",{cx:"84",cy:"16",r:"4",fill:"#f1bc19"}),g("circle",{cx:"14",cy:"26",r:"2",fill:"#ee3e54"}),g("circle",{cx:"78",cy:"77",r:"2",fill:"#fbcd59"}),g("circle",{cx:"17",cy:"78",r:"4",fill:"#fbcd59"}),g("circle",{cx:"24",cy:"83",r:"2",fill:"#ee3e54"}),g("circle",{cx:"66.5",cy:"78.5",r:"2.5",fill:"#fff"}),g("circle",{cx:"16",cy:"48",r:"1",fill:"#fff"}),g("circle",{cx:"86",cy:"31",r:"1",fill:"#f1bc19"}),g("circle",{cx:"80",cy:"66",r:"2",fill:"#fff"}),g("path",{fill:"#77cbd2",d:"M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"}),g("path",{fill:"#472b29",d:"M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"}),g("path",{fill:"#77cbd2",d:"M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"}),g("path",{fill:"#472b29",d:"M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"}),g("path",{fill:"#77cbd2",d:"M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"}),g("path",{fill:"#472b29",d:"M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"}),W("g",{children:[g("circle",{cx:"50",cy:"50",r:"5.5",fill:"#77cbd2"}),g("path",{fill:"#472b29",d:"M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"})]}),g("g",{children:g("path",{fill:"#472b29",d:"M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"})})]}),g("a",{className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",children:"React Mania"}),g("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:W("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[r&&g("span",{className:"mt-10 text-red-600",children:r}),g("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to your account"}),W("form",{className:"space-y-4 md:space-y-6",action:"#",children:[W("div",{children:[g("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),g("input",{type:"email",name:"email",id:"email",value:e,required:!0,onChange:m=>n(m.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com"})]}),W("div",{children:[g("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),g("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",value:a,onChange:m=>l(m.target.value),required:!0,className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),g("div",{className:"flex items-center justify-between",children:g("a",{onClick:()=>t("/forgotpassword"),className:"text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer",children:"Forgot password?"})}),s?W("button",{disabled:!0,type:"button",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:[W("svg",{"aria-hidden":"true",role:"status",className:"inline w-4 h-4 mr-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),g("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]}),"Sign in..."]}):g("button",{type:"submit",onClick:m=>d(m),className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Sign in"}),W("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Don’t have an account yet?"," ",g("a",{onClick:()=>t("/signup"),className:"font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer",children:"Sign up"})]})]}),W("button",{"aria-label":"Continue with google",role:"button",onClick:h,className:"focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10",children:[W("svg",{width:19,height:20,viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("path",{d:"M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z",fill:"#4285F4"}),g("path",{d:"M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z",fill:"#34A853"}),g("path",{d:"M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z",fill:"#FBBC05"}),g("path",{d:"M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z",fill:"#EB4335"})]}),c?g("p",{className:"text-primary-500 ml-4",children:c}):g("p",{className:"text-base font-medium ml-4 text-gray-700",children:"Continue with Google"})]})]})})]})})})}function ix(){const t=_o(),[e,n]=b.useState(""),[r,i]=b.useState(""),[s,o]=b.useState(!1),[a,l]=b.useState(""),[c,u]=b.useState("");b.useEffect(()=>W1(_i,m=>{u(m&&m.email||"")}),[]);const d=async w=>{if(w.preventDefault(),!h(r)){n("Invalid email"),o(!1);return}if(!_(a)){n("Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character"),o(!1);return}try{await a5(_i,r,a),t("/login"),o(!1)}catch(m){n(m.message),o(!1)}},h=w=>/\S+@\S+\.\S+/.test(w),_=w=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(w);return g(Ms,{children:g("section",{className:"bg-gray-50 dark:bg-gray-900",children:W("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"50px",height:"50px",children:[g("circle",{cx:"78",cy:"14",r:"1",fill:"#f1bc19"}),g("circle",{cx:"50",cy:"50",r:"38",fill:"#f9dbd2"}),g("circle",{cx:"84",cy:"16",r:"4",fill:"#f1bc19"}),g("circle",{cx:"14",cy:"26",r:"2",fill:"#ee3e54"}),g("circle",{cx:"78",cy:"77",r:"2",fill:"#fbcd59"}),g("circle",{cx:"17",cy:"78",r:"4",fill:"#fbcd59"}),g("circle",{cx:"24",cy:"83",r:"2",fill:"#ee3e54"}),g("circle",{cx:"66.5",cy:"78.5",r:"2.5",fill:"#fff"}),g("circle",{cx:"16",cy:"48",r:"1",fill:"#fff"}),g("circle",{cx:"86",cy:"31",r:"1",fill:"#f1bc19"}),g("circle",{cx:"80",cy:"66",r:"2",fill:"#fff"}),g("path",{fill:"#77cbd2",d:"M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"}),g("path",{fill:"#472b29",d:"M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"}),g("path",{fill:"#77cbd2",d:"M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"}),g("path",{fill:"#472b29",d:"M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"}),g("path",{fill:"#77cbd2",d:"M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"}),g("path",{fill:"#472b29",d:"M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"}),W("g",{children:[g("circle",{cx:"50",cy:"50",r:"5.5",fill:"#77cbd2"}),g("path",{fill:"#472b29",d:"M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"})]}),g("g",{children:g("path",{fill:"#472b29",d:"M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"})})]}),g("a",{className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",children:"React Mania"}),g("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:W("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e&&g("span",{className:"mt-10 text-red-600",children:e}),g("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign up to your account"}),W("form",{className:"space-y-4 md:space-y-6",action:"#",children:[W("div",{children:[g("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),g("input",{type:"email",name:"email",id:"email",value:r,required:!0,onChange:w=>i(w.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com"})]}),W("div",{children:[g("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),g("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",value:a,onChange:w=>l(w.target.value),required:!0,className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})]}),s?W("button",{disabled:!0,type:"button",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:[W("svg",{"aria-hidden":"true",role:"status",className:"inline w-4 h-4 mr-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),g("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]}),"Sign up..."]}):g("button",{type:"submit",onClick:w=>d(w),className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Sign up"}),W("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Do you have an account already?",g("a",{onClick:()=>t("/login"),className:"font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer",children:"Log in"})]})]}),W("button",{"aria-label":"Continue with google",role:"button",onClick:async()=>{o(!0);const w=new Gt;try{const m=await Z1(_i,w),p=m.user,f=await m.user.getIdToken();localStorage.setItem("token",f),t("/dashboard"),o(!1)}catch(m){n(m.message),o(!1)}},className:"focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10",children:[W("svg",{width:19,height:20,viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("path",{d:"M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z",fill:"#4285F4"}),g("path",{d:"M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z",fill:"#34A853"}),g("path",{d:"M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z",fill:"#FBBC05"}),g("path",{d:"M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z",fill:"#EB4335"})]}),c?g("p",{className:"text-primary-500 ml-4",children:c}):g("p",{className:"text-base font-medium ml-4 text-gray-700",children:"Continue with Google"})]})]})})]})})})}function sx(){const t=_o();return b.useState(""),b.useState(""),b.useState(!1),W(Ms,{children:[g("section",{className:"bg-gray-50 dark:bg-gray-900",children:W("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"50px",height:"50px",children:[g("circle",{cx:"78",cy:"14",r:"1",fill:"#f1bc19"}),g("circle",{cx:"50",cy:"50",r:"38",fill:"#f9dbd2"}),g("circle",{cx:"84",cy:"16",r:"4",fill:"#f1bc19"}),g("circle",{cx:"14",cy:"26",r:"2",fill:"#ee3e54"}),g("circle",{cx:"78",cy:"77",r:"2",fill:"#fbcd59"}),g("circle",{cx:"17",cy:"78",r:"4",fill:"#fbcd59"}),g("circle",{cx:"24",cy:"83",r:"2",fill:"#ee3e54"}),g("circle",{cx:"66.5",cy:"78.5",r:"2.5",fill:"#fff"}),g("circle",{cx:"16",cy:"48",r:"1",fill:"#fff"}),g("circle",{cx:"86",cy:"31",r:"1",fill:"#f1bc19"}),g("circle",{cx:"80",cy:"66",r:"2",fill:"#fff"}),g("path",{fill:"#77cbd2",d:"M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"}),g("path",{fill:"#472b29",d:"M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"}),g("path",{fill:"#77cbd2",d:"M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"}),g("path",{fill:"#472b29",d:"M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"}),g("path",{fill:"#77cbd2",d:"M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"}),g("path",{fill:"#472b29",d:"M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"}),W("g",{children:[g("circle",{cx:"50",cy:"50",r:"5.5",fill:"#77cbd2"}),g("path",{fill:"#472b29",d:"M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"})]}),g("g",{children:g("path",{fill:"#472b29",d:"M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"})}),g("g",{children:g("path",{fill:"#472b29",d:"M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"})})]}),g("a",{className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",children:"React Mania"}),"Comming Soon",g("button",{onClick:()=>t(-1),className:"mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"back"})]})})," "]})}function ox(){return g("div",{children:"MobileNumberLogin"})}const ax=()=>{const t=_o();return g("div",{className:"bg-gradient-to-r from-purple-300 to-blue-200",children:g("div",{className:"w-9/12 m-auto py-16 min-h-screen flex items-center justify-center",children:g("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg pb-8",children:W("div",{className:"border-t border-gray-200 text-center pt-8",children:[g("h1",{className:"text-9xl font-bold text-purple-400",children:"404"}),g("h1",{className:"text-6xl font-medium py-8",children:"oops! Page not found"}),g("p",{className:"text-2xl pb-8 px-12 font-medium",children:"Oops! The page you are looking for does not exist. It might have been moved or deleted."}),g("button",{onClick:()=>t("/dashboard"),className:"bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6",children:"HOME"})]})})})})},lx=kC([{path:"/",element:g(ET,{})},{path:"/",children:[{path:"login",element:g(rx,{})},{path:"signup",element:g(ix,{})},{path:"forgotpassword",element:g(sx,{})},{path:"phone-login",element:g(ox,{})}]},{path:"*",element:g(ax,{})}]);function cx(){return g(wC,{router:lx})}Jc.createRoot(document.getElementById("root")).render(g(P0.StrictMode,{children:g(cx,{})}));
