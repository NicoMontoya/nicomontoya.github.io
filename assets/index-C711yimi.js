(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function D1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yh={exports:{}},Za={},xh={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function hE(){if(Kv)return wt;Kv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function y(F,B,ce){this.props=F,this.context=B,this.refs=x,this.updater=ce||_}y.prototype.isReactComponent={},y.prototype.setState=function(F,B){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,B,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(F,B,ce){this.props=F,this.context=B,this.refs=x,this.updater=ce||_}var L=T.prototype=new S;L.constructor=T,M(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,b=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function C(F,B,ce){var xe,we={},V=null,ye=null;if(B!=null)for(xe in B.ref!==void 0&&(ye=B.ref),B.key!==void 0&&(V=""+B.key),B)b.call(B,xe)&&!O.hasOwnProperty(xe)&&(we[xe]=B[xe]);var me=arguments.length-2;if(me===1)we.children=ce;else if(1<me){for(var ge=Array(me),be=0;be<me;be++)ge[be]=arguments[be+2];we.children=ge}if(F&&F.defaultProps)for(xe in me=F.defaultProps,me)we[xe]===void 0&&(we[xe]=me[xe]);return{$$typeof:n,type:F,key:V,ref:ye,props:we,_owner:I.current}}function z(F,B){return{$$typeof:n,type:F.type,key:B,ref:F.ref,props:F.props,_owner:F._owner}}function te(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function ne(F){var B={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ce){return B[ce]})}var Te=/\/+/g;function _e(F,B){return typeof F=="object"&&F!==null&&F.key!=null?ne(""+F.key):B.toString(36)}function J(F,B,ce,xe,we){var V=typeof F;(V==="undefined"||V==="boolean")&&(F=null);var ye=!1;if(F===null)ye=!0;else switch(V){case"string":case"number":ye=!0;break;case"object":switch(F.$$typeof){case n:case e:ye=!0}}if(ye)return ye=F,we=we(ye),F=xe===""?"."+_e(ye,0):xe,R(we)?(ce="",F!=null&&(ce=F.replace(Te,"$&/")+"/"),J(we,B,ce,"",function(be){return be})):we!=null&&(te(we)&&(we=z(we,ce+(!we.key||ye&&ye.key===we.key?"":(""+we.key).replace(Te,"$&/")+"/")+F)),B.push(we)),1;if(ye=0,xe=xe===""?".":xe+":",R(F))for(var me=0;me<F.length;me++){V=F[me];var ge=xe+_e(V,me);ye+=J(V,B,ce,ge,we)}else if(ge=g(F),typeof ge=="function")for(F=ge.call(F),me=0;!(V=F.next()).done;)V=V.value,ge=xe+_e(V,me++),ye+=J(V,B,ce,ge,we);else if(V==="object")throw B=String(F),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(F,B,ce){if(F==null)return F;var xe=[],we=0;return J(F,xe,"","",function(V){return B.call(ce,V,we++)}),xe}function oe(F){if(F._status===-1){var B=F._result;B=B(),B.then(function(ce){(F._status===0||F._status===-1)&&(F._status=1,F._result=ce)},function(ce){(F._status===0||F._status===-1)&&(F._status=2,F._result=ce)}),F._status===-1&&(F._status=0,F._result=B)}if(F._status===1)return F._result.default;throw F._result}var re={current:null},X={transition:null},q={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:I};function Y(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:he,forEach:function(F,B,ce){he(F,function(){B.apply(this,arguments)},ce)},count:function(F){var B=0;return he(F,function(){B++}),B},toArray:function(F){return he(F,function(B){return B})||[]},only:function(F){if(!te(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},wt.Component=y,wt.Fragment=t,wt.Profiler=o,wt.PureComponent=T,wt.StrictMode=i,wt.Suspense=d,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,wt.act=Y,wt.cloneElement=function(F,B,ce){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var xe=M({},F.props),we=F.key,V=F.ref,ye=F._owner;if(B!=null){if(B.ref!==void 0&&(V=B.ref,ye=I.current),B.key!==void 0&&(we=""+B.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(ge in B)b.call(B,ge)&&!O.hasOwnProperty(ge)&&(xe[ge]=B[ge]===void 0&&me!==void 0?me[ge]:B[ge])}var ge=arguments.length-2;if(ge===1)xe.children=ce;else if(1<ge){me=Array(ge);for(var be=0;be<ge;be++)me[be]=arguments[be+2];xe.children=me}return{$$typeof:n,type:F.type,key:we,ref:V,props:xe,_owner:ye}},wt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},wt.createElement=C,wt.createFactory=function(F){var B=C.bind(null,F);return B.type=F,B},wt.createRef=function(){return{current:null}},wt.forwardRef=function(F){return{$$typeof:c,render:F}},wt.isValidElement=te,wt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:oe}},wt.memo=function(F,B){return{$$typeof:f,type:F,compare:B===void 0?null:B}},wt.startTransition=function(F){var B=X.transition;X.transition={};try{F()}finally{X.transition=B}},wt.unstable_act=Y,wt.useCallback=function(F,B){return re.current.useCallback(F,B)},wt.useContext=function(F){return re.current.useContext(F)},wt.useDebugValue=function(){},wt.useDeferredValue=function(F){return re.current.useDeferredValue(F)},wt.useEffect=function(F,B){return re.current.useEffect(F,B)},wt.useId=function(){return re.current.useId()},wt.useImperativeHandle=function(F,B,ce){return re.current.useImperativeHandle(F,B,ce)},wt.useInsertionEffect=function(F,B){return re.current.useInsertionEffect(F,B)},wt.useLayoutEffect=function(F,B){return re.current.useLayoutEffect(F,B)},wt.useMemo=function(F,B){return re.current.useMemo(F,B)},wt.useReducer=function(F,B,ce){return re.current.useReducer(F,B,ce)},wt.useRef=function(F){return re.current.useRef(F)},wt.useState=function(F){return re.current.useState(F)},wt.useSyncExternalStore=function(F,B,ce){return re.current.useSyncExternalStore(F,B,ce)},wt.useTransition=function(){return re.current.useTransition()},wt.version="18.3.1",wt}var Zv;function gm(){return Zv||(Zv=1,xh.exports=hE()),xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function pE(){if(Qv)return Za;Qv=1;var n=gm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,f){var p,m={},g=null,_=null;f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:_,props:m,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var Jv;function mE(){return Jv||(Jv=1,yh.exports=pE()),yh.exports}var P=mE(),U=gm();const fn=D1(U);var Zu={},_h={exports:{}},Wn={},wh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function gE(){return ey||(ey=1,function(n){function e(X,q){var Y=X.length;X.push(q);e:for(;0<Y;){var F=Y-1>>>1,B=X[F];if(0<o(B,q))X[F]=q,X[Y]=B,Y=F;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var q=X[0],Y=X.pop();if(Y!==q){X[0]=Y;e:for(var F=0,B=X.length,ce=B>>>1;F<ce;){var xe=2*(F+1)-1,we=X[xe],V=xe+1,ye=X[V];if(0>o(we,Y))V<B&&0>o(ye,we)?(X[F]=ye,X[V]=Y,F=V):(X[F]=we,X[xe]=Y,F=xe);else if(V<B&&0>o(ye,Y))X[F]=ye,X[V]=Y,F=V;else break e}}return q}function o(X,q){var Y=X.sortIndex-q.sortIndex;return Y!==0?Y:X.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],f=[],p=1,m=null,g=3,_=!1,M=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var q=t(f);q!==null;){if(q.callback===null)i(f);else if(q.startTime<=X)i(f),q.sortIndex=q.expirationTime,e(d,q);else break;q=t(f)}}function R(X){if(x=!1,L(X),!M)if(t(d)!==null)M=!0,oe(b);else{var q=t(f);q!==null&&re(R,q.startTime-X)}}function b(X,q){M=!1,x&&(x=!1,S(C),C=-1),_=!0;var Y=g;try{for(L(q),m=t(d);m!==null&&(!(m.expirationTime>q)||X&&!ne());){var F=m.callback;if(typeof F=="function"){m.callback=null,g=m.priorityLevel;var B=F(m.expirationTime<=q);q=n.unstable_now(),typeof B=="function"?m.callback=B:m===t(d)&&i(d),L(q)}else i(d);m=t(d)}if(m!==null)var ce=!0;else{var xe=t(f);xe!==null&&re(R,xe.startTime-q),ce=!1}return ce}finally{m=null,g=Y,_=!1}}var I=!1,O=null,C=-1,z=5,te=-1;function ne(){return!(n.unstable_now()-te<z)}function Te(){if(O!==null){var X=n.unstable_now();te=X;var q=!0;try{q=O(!0,X)}finally{q?_e():(I=!1,O=null)}}else I=!1}var _e;if(typeof T=="function")_e=function(){T(Te)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,he=J.port2;J.port1.onmessage=Te,_e=function(){he.postMessage(null)}}else _e=function(){y(Te,0)};function oe(X){O=X,I||(I=!0,_e())}function re(X,q){C=y(function(){X(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,oe(b))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var Y=g;g=q;try{return X()}finally{g=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=g;g=X;try{return q()}finally{g=Y}},n.unstable_scheduleCallback=function(X,q,Y){var F=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,X){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=Y+B,X={id:p++,callback:q,priorityLevel:X,startTime:Y,expirationTime:B,sortIndex:-1},Y>F?(X.sortIndex=Y,e(f,X),t(d)===null&&X===t(f)&&(x?(S(C),C=-1):x=!0,re(R,Y-F))):(X.sortIndex=B,e(d,X),M||_||(M=!0,oe(b))),X},n.unstable_shouldYield=ne,n.unstable_wrapCallback=function(X){var q=g;return function(){var Y=g;g=q;try{return X.apply(this,arguments)}finally{g=Y}}}}(Sh)),Sh}var ty;function vE(){return ty||(ty=1,wh.exports=gE()),wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function yE(){if(ny)return Wn;ny=1;var n=gm(),e=vE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return d.call(m,r)?!0:d.call(p,r)?!1:f.test(r)?m[r]=!0:(p[r]=!0,!1)}function _(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,h){if(s===null||typeof s>"u"||_(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function x(r,s,l,h,v,w,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=w,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new x(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];y[s]=new x(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new x(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new x(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new x(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new x(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new x(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new x(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new x(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(S,T);y[s]=new x(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(S,T);y[s]=new x(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(S,T);y[s]=new x(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new x(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new x(r,1,!1,r.toLowerCase(),null,!0,!0)});function L(r,s,l,h){var v=y.hasOwnProperty(s)?y[s]:null;(v!==null?v.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,v,h)&&(l=null),h||v===null?g(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):v.mustUseProperty?r[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,h=v.attributeNamespace,l===null?r.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),ne=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var Y=Object.assign,F;function B(r){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+r}var ce=!1;function xe(r,s){if(!r||ce)return"";ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var h=ue}Reflect.construct(r,[],s)}else{try{s.call()}catch(ue){h=ue}r.call(s.prototype)}else{try{throw Error()}catch(ue){h=ue}r()}}catch(ue){if(ue&&h&&typeof ue.stack=="string"){for(var v=ue.stack.split(`
`),w=h.stack.split(`
`),E=v.length-1,N=w.length-1;1<=E&&0<=N&&v[E]!==w[N];)N--;for(;1<=E&&0<=N;E--,N--)if(v[E]!==w[N]){if(E!==1||N!==1)do if(E--,N--,0>N||v[E]!==w[N]){var W=`
`+v[E].replace(" at new "," at ");return r.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",r.displayName)),W}while(1<=E&&0<=N);break}}}finally{ce=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?B(r):""}function we(r){switch(r.tag){case 5:return B(r.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return r=xe(r.type,!1),r;case 11:return r=xe(r.type.render,!1),r;case 1:return r=xe(r.type,!0),r;default:return""}}function V(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case I:return"Portal";case z:return"Profiler";case C:return"StrictMode";case _e:return"Suspense";case J:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ne:return(r.displayName||"Context")+".Consumer";case te:return(r._context.displayName||"Context")+".Provider";case Te:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case he:return s=r.displayName||null,s!==null?s:V(r.type)||"Memo";case oe:s=r._payload,r=r._init;try{return V(r(s))}catch{}}return null}function ye(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ge(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function be(r){var s=ge(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,w=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return v.call(this)},set:function(E){h=""+E,w.call(this,E)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function et(r){r._valueTracker||(r._valueTracker=be(r))}function tt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=ge(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function We(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function At(r,s){var l=s.checked;return Y({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Dt(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function It(r,s){s=s.checked,s!=null&&L(r,"checked",s,!1)}function Jt(r,s){It(r,s);var l=me(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?nt(r,s.type,l):s.hasOwnProperty("defaultValue")&&nt(r,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Oe(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function nt(r,s,l){(s!=="number"||We(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var gt=Array.isArray;function rt(r,s,l,h){if(r=r.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<r.length;l++)v=s.hasOwnProperty("$"+r[l].value),r[l].selected!==v&&(r[l].selected=v),v&&h&&(r[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,v=0;v<r.length;v++){if(r[v].value===l){r[v].selected=!0,h&&(r[v].defaultSelected=!0);return}s!==null||r[v].disabled||(s=r[v])}s!==null&&(s.selected=!0)}}function k(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function D(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(gt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:me(l)}}function le(r,s){var l=me(s.value),h=me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function ve(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function Se(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Le(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?Se(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var qe,de=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,v){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,v)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qe.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ke(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(r){ze.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Fe[s]=Fe[r]})});function H(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Fe.hasOwnProperty(r)&&Fe[r]?(""+s).trim():s+"px"}function Ie(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,v=H(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,v):r[l]=v}}var Pe=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(r,s){if(s){if(Pe[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Be(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function De(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ut=null,_t=null,yt=null;function Ht(r){if(r=za(r)){if(typeof ut!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fu(s),ut(r.stateNode,r.type,s))}}function hn(r){_t?yt?yt.push(r):yt=[r]:_t=r}function cs(){if(_t){var r=_t,s=yt;if(yt=_t=null,Ht(r),s)for(r=0;r<s.length;r++)Ht(s[r])}}function Js(r,s){return r(s)}function G(){}var ee=!1;function fe(r,s,l){if(ee)return r(s,l);ee=!0;try{return Js(r,s,l)}finally{ee=!1,(_t!==null||yt!==null)&&(G(),cs())}}function Me(r,s){var l=r.stateNode;if(l===null)return null;var h=fu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ge=!1;if(c)try{var Ye={};Object.defineProperty(Ye,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Ye,Ye),window.removeEventListener("test",Ye,Ye)}catch{Ge=!1}function ft(r,s,l,h,v,w,E,N,W){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(Ce){this.onError(Ce)}}var A=!1,j=null,$=!1,Z=null,ae={onError:function(r){A=!0,j=r}};function Ue(r,s,l,h,v,w,E,N,W){A=!1,j=null,ft.apply(ae,arguments)}function Qe(r,s,l,h,v,w,E,N,W){if(Ue.apply(this,arguments),A){if(A){var ue=j;A=!1,j=null}else throw Error(t(198));$||($=!0,Z=ue)}}function Ve(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function He(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function ot(r){if(Ve(r)!==r)throw Error(t(188))}function pt(r){var s=r.alternate;if(!s){if(s=Ve(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var v=l.return;if(v===null)break;var w=v.alternate;if(w===null){if(h=v.return,h!==null){l=h;continue}break}if(v.child===w.child){for(w=v.child;w;){if(w===l)return ot(v),r;if(w===h)return ot(v),s;w=w.sibling}throw Error(t(188))}if(l.return!==h.return)l=v,h=w;else{for(var E=!1,N=v.child;N;){if(N===l){E=!0,l=v,h=w;break}if(N===h){E=!0,h=v,l=w;break}N=N.sibling}if(!E){for(N=w.child;N;){if(N===l){E=!0,l=w,h=v;break}if(N===h){E=!0,h=w,l=v;break}N=N.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function mt(r){return r=pt(r),r!==null?Mt(r):null}function Mt(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Mt(r);if(s!==null)return s;r=r.sibling}return null}var en=e.unstable_scheduleCallback,qn=e.unstable_cancelCallback,Bn=e.unstable_shouldYield,rn=e.unstable_requestPaint,it=e.unstable_now,Yn=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,Pt=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,Kn=e.unstable_LowPriority,kt=e.unstable_IdlePriority,Ft=null,ln=null;function ds(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ft,r,void 0,(r.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:DM,LM=Math.log,RM=Math.LN2;function DM(r){return r>>>=0,r===0?32:31-(LM(r)/RM|0)|0}var ql=64,Yl=4194304;function ya(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Kl(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,v=r.suspendedLanes,w=r.pingedLanes,E=l&268435455;if(E!==0){var N=E&~v;N!==0?h=ya(N):(w&=E,w!==0&&(h=ya(w)))}else E=l&~v,E!==0?h=ya(E):w!==0&&(h=ya(w));if(h===0)return 0;if(s!==0&&s!==h&&!(s&v)&&(v=h&-h,w=s&-s,v>=w||v===16&&(w&4194240)!==0))return s;if(h&4&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-Yt(s),v=1<<l,h|=r[l],s&=~v;return h}function IM(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kM(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,v=r.expirationTimes,w=r.pendingLanes;0<w;){var E=31-Yt(w),N=1<<E,W=v[E];W===-1?(!(N&l)||N&h)&&(v[E]=IM(N,s)):W<=s&&(r.expiredLanes|=N),w&=~N}}function Od(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Cg(){var r=ql;return ql<<=1,!(ql&4194240)&&(ql=64),r}function Bd(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function xa(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Yt(s),r[s]=l}function FM(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var v=31-Yt(l),w=1<<v;s[v]=0,h[v]=-1,r[v]=-1,l&=~w}}function Ud(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-Yt(l),v=1<<h;v&s|r[h]&s&&(r[h]|=s),l&=~v}}var Rt=0;function Ag(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Pg,Vd,Lg,Rg,Dg,jd=!1,Zl=[],Sr=null,Mr=null,br=null,_a=new Map,wa=new Map,Er=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ig(r,s){switch(r){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":_a.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(s.pointerId)}}function Sa(r,s,l,h,v,w){return r===null||r.nativeEvent!==w?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:w,targetContainers:[v]},s!==null&&(s=za(s),s!==null&&Vd(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),r)}function NM(r,s,l,h,v){switch(s){case"focusin":return Sr=Sa(Sr,r,s,l,h,v),!0;case"dragenter":return Mr=Sa(Mr,r,s,l,h,v),!0;case"mouseover":return br=Sa(br,r,s,l,h,v),!0;case"pointerover":var w=v.pointerId;return _a.set(w,Sa(_a.get(w)||null,r,s,l,h,v)),!0;case"gotpointercapture":return w=v.pointerId,wa.set(w,Sa(wa.get(w)||null,r,s,l,h,v)),!0}return!1}function kg(r){var s=fs(r.target);if(s!==null){var l=Ve(s);if(l!==null){if(s=l.tag,s===13){if(s=He(l),s!==null){r.blockedOn=s,Dg(r.priority,function(){Lg(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ql(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Hd(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);st=h,l.target.dispatchEvent(h),st=null}else return s=za(l),s!==null&&Vd(s),r.blockedOn=l,!1;s.shift()}return!0}function Fg(r,s,l){Ql(r)&&l.delete(s)}function OM(){jd=!1,Sr!==null&&Ql(Sr)&&(Sr=null),Mr!==null&&Ql(Mr)&&(Mr=null),br!==null&&Ql(br)&&(br=null),_a.forEach(Fg),wa.forEach(Fg)}function Ma(r,s){r.blockedOn===s&&(r.blockedOn=null,jd||(jd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,OM)))}function ba(r){function s(v){return Ma(v,r)}if(0<Zl.length){Ma(Zl[0],r);for(var l=1;l<Zl.length;l++){var h=Zl[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Sr!==null&&Ma(Sr,r),Mr!==null&&Ma(Mr,r),br!==null&&Ma(br,r),_a.forEach(s),wa.forEach(s),l=0;l<Er.length;l++)h=Er[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<Er.length&&(l=Er[0],l.blockedOn===null);)kg(l),l.blockedOn===null&&Er.shift()}var eo=R.ReactCurrentBatchConfig,Jl=!0;function BM(r,s,l,h){var v=Rt,w=eo.transition;eo.transition=null;try{Rt=1,Gd(r,s,l,h)}finally{Rt=v,eo.transition=w}}function UM(r,s,l,h){var v=Rt,w=eo.transition;eo.transition=null;try{Rt=4,Gd(r,s,l,h)}finally{Rt=v,eo.transition=w}}function Gd(r,s,l,h){if(Jl){var v=Hd(r,s,l,h);if(v===null)lf(r,s,h,eu,l),Ig(r,h);else if(NM(v,r,s,l,h))h.stopPropagation();else if(Ig(r,h),s&4&&-1<zM.indexOf(r)){for(;v!==null;){var w=za(v);if(w!==null&&Pg(w),w=Hd(r,s,l,h),w===null&&lf(r,s,h,eu,l),w===v)break;v=w}v!==null&&h.stopPropagation()}else lf(r,s,h,null,l)}}var eu=null;function Hd(r,s,l,h){if(eu=null,r=De(h),r=fs(r),r!==null)if(s=Ve(r),s===null)r=null;else if(l=s.tag,l===13){if(r=He(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return eu=r,null}function zg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yn()){case ct:return 1;case Pt:return 4;case pn:case Kn:return 16;case kt:return 536870912;default:return 16}default:return 16}}var Tr=null,Wd=null,tu=null;function Ng(){if(tu)return tu;var r,s=Wd,l=s.length,h,v="value"in Tr?Tr.value:Tr.textContent,w=v.length;for(r=0;r<l&&s[r]===v[r];r++);var E=l-r;for(h=1;h<=E&&s[l-h]===v[w-h];h++);return tu=v.slice(r,1<h?1-h:void 0)}function nu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function iu(){return!0}function Og(){return!1}function Zn(r){function s(l,h,v,w,E){this._reactName=l,this._targetInst=v,this.type=h,this.nativeEvent=w,this.target=E,this.currentTarget=null;for(var N in r)r.hasOwnProperty(N)&&(l=r[N],this[N]=l?l(w):w[N]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?iu:Og,this.isPropagationStopped=Og,this}return Y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),s}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=Zn(to),Ea=Y({},to,{view:0,detail:0}),VM=Zn(Ea),Xd,qd,Ta,ru=Y({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ta&&(Ta&&r.type==="mousemove"?(Xd=r.screenX-Ta.screenX,qd=r.screenY-Ta.screenY):qd=Xd=0,Ta=r),Xd)},movementY:function(r){return"movementY"in r?r.movementY:qd}}),Bg=Zn(ru),jM=Y({},ru,{dataTransfer:0}),GM=Zn(jM),HM=Y({},Ea,{relatedTarget:0}),Yd=Zn(HM),WM=Y({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=Zn(WM),XM=Y({},to,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),qM=Zn(XM),YM=Y({},to,{data:0}),Ug=Zn(YM),KM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=QM[r])?!!s[r]:!1}function Kd(){return JM}var eb=Y({},Ea,{key:function(r){if(r.key){var s=KM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=nu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ZM[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(r){return r.type==="keypress"?nu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?nu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),tb=Zn(eb),nb=Y({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=Zn(nb),ib=Y({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),rb=Zn(ib),sb=Y({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),ob=Zn(sb),ab=Y({},ru,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),lb=Zn(ab),ub=[9,13,27,32],Zd=c&&"CompositionEvent"in window,Ca=null;c&&"documentMode"in document&&(Ca=document.documentMode);var cb=c&&"TextEvent"in window&&!Ca,jg=c&&(!Zd||Ca&&8<Ca&&11>=Ca),Gg=" ",Hg=!1;function Wg(r,s){switch(r){case"keyup":return ub.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var no=!1;function db(r,s){switch(r){case"compositionend":return $g(s);case"keypress":return s.which!==32?null:(Hg=!0,Gg);case"textInput":return r=s.data,r===Gg&&Hg?null:r;default:return null}}function fb(r,s){if(no)return r==="compositionend"||!Zd&&Wg(r,s)?(r=Ng(),tu=Wd=Tr=null,no=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return jg&&s.locale!=="ko"?null:s.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!hb[r.type]:s==="textarea"}function qg(r,s,l,h){hn(h),s=uu(s,"onChange"),0<s.length&&(l=new $d("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Aa=null,Pa=null;function pb(r){f0(r,0)}function su(r){var s=ao(r);if(tt(s))return r}function mb(r,s){if(r==="change")return s}var Yg=!1;if(c){var Qd;if(c){var Jd="oninput"in document;if(!Jd){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),Jd=typeof Kg.oninput=="function"}Qd=Jd}else Qd=!1;Yg=Qd&&(!document.documentMode||9<document.documentMode)}function Zg(){Aa&&(Aa.detachEvent("onpropertychange",Qg),Pa=Aa=null)}function Qg(r){if(r.propertyName==="value"&&su(Pa)){var s=[];qg(s,Pa,r,De(r)),fe(pb,s)}}function gb(r,s,l){r==="focusin"?(Zg(),Aa=s,Pa=l,Aa.attachEvent("onpropertychange",Qg)):r==="focusout"&&Zg()}function vb(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return su(Pa)}function yb(r,s){if(r==="click")return su(s)}function xb(r,s){if(r==="input"||r==="change")return su(s)}function _b(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mi=typeof Object.is=="function"?Object.is:_b;function La(r,s){if(Mi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var v=l[h];if(!d.call(s,v)||!Mi(r[v],s[v]))return!1}return!0}function Jg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function e0(r,s){var l=Jg(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Jg(l)}}function t0(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?t0(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function n0(){for(var r=window,s=We();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=We(r.document)}return s}function ef(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function wb(r){var s=n0(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&t0(l.ownerDocument.documentElement,l)){if(h!==null&&ef(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var v=l.textContent.length,w=Math.min(h.start,v);h=h.end===void 0?w:Math.min(h.end,v),!r.extend&&w>h&&(v=h,h=w,w=v),v=e0(l,w);var E=e0(l,h);v&&E&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),r.removeAllRanges(),w>h?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Sb=c&&"documentMode"in document&&11>=document.documentMode,io=null,tf=null,Ra=null,nf=!1;function i0(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;nf||io==null||io!==We(h)||(h=io,"selectionStart"in h&&ef(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ra&&La(Ra,h)||(Ra=h,h=uu(tf,"onSelect"),0<h.length&&(s=new $d("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=io)))}function ou(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var ro={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},rf={},r0={};c&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function au(r){if(rf[r])return rf[r];if(!ro[r])return r;var s=ro[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in r0)return rf[r]=s[l];return r}var s0=au("animationend"),o0=au("animationiteration"),a0=au("animationstart"),l0=au("transitionend"),u0=new Map,c0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(r,s){u0.set(r,s),a(s,[r])}for(var sf=0;sf<c0.length;sf++){var of=c0[sf],Mb=of.toLowerCase(),bb=of[0].toUpperCase()+of.slice(1);Cr(Mb,"on"+bb)}Cr(s0,"onAnimationEnd"),Cr(o0,"onAnimationIteration"),Cr(a0,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(l0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function d0(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Qe(h,s,void 0,r),r.currentTarget=null}function f0(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],v=h.event;h=h.listeners;e:{var w=void 0;if(s)for(var E=h.length-1;0<=E;E--){var N=h[E],W=N.instance,ue=N.currentTarget;if(N=N.listener,W!==w&&v.isPropagationStopped())break e;d0(v,N,ue),w=W}else for(E=0;E<h.length;E++){if(N=h[E],W=N.instance,ue=N.currentTarget,N=N.listener,W!==w&&v.isPropagationStopped())break e;d0(v,N,ue),w=W}}}if($)throw r=Z,$=!1,Z=null,r}function Nt(r,s){var l=s[pf];l===void 0&&(l=s[pf]=new Set);var h=r+"__bubble";l.has(h)||(h0(s,r,2,!1),l.add(h))}function af(r,s,l){var h=0;s&&(h|=4),h0(l,r,h,s)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Ia(r){if(!r[lu]){r[lu]=!0,i.forEach(function(l){l!=="selectionchange"&&(Eb.has(l)||af(l,!1,r),af(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[lu]||(s[lu]=!0,af("selectionchange",!1,s))}}function h0(r,s,l,h){switch(zg(s)){case 1:var v=BM;break;case 4:v=UM;break;default:v=Gd}l=v.bind(null,s,l,r),v=void 0,!Ge||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),h?v!==void 0?r.addEventListener(s,l,{capture:!0,passive:v}):r.addEventListener(s,l,!0):v!==void 0?r.addEventListener(s,l,{passive:v}):r.addEventListener(s,l,!1)}function lf(r,s,l,h,v){var w=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var N=h.stateNode.containerInfo;if(N===v||N.nodeType===8&&N.parentNode===v)break;if(E===4)for(E=h.return;E!==null;){var W=E.tag;if((W===3||W===4)&&(W=E.stateNode.containerInfo,W===v||W.nodeType===8&&W.parentNode===v))return;E=E.return}for(;N!==null;){if(E=fs(N),E===null)return;if(W=E.tag,W===5||W===6){h=w=E;continue e}N=N.parentNode}}h=h.return}fe(function(){var ue=w,Ce=De(l),Ae=[];e:{var Ee=u0.get(r);if(Ee!==void 0){var je=$d,Xe=r;switch(r){case"keypress":if(nu(l)===0)break e;case"keydown":case"keyup":je=tb;break;case"focusin":Xe="focus",je=Yd;break;case"focusout":Xe="blur",je=Yd;break;case"beforeblur":case"afterblur":je=Yd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=GM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=rb;break;case s0:case o0:case a0:je=$M;break;case l0:je=ob;break;case"scroll":je=VM;break;case"wheel":je=lb;break;case"copy":case"cut":case"paste":je=qM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=Vg}var Ke=(s&4)!==0,tn=!Ke&&r==="scroll",ie=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var K=ue,se;K!==null;){se=K;var Re=se.stateNode;if(se.tag===5&&Re!==null&&(se=Re,ie!==null&&(Re=Me(K,ie),Re!=null&&Ke.push(ka(K,Re,se)))),tn)break;K=K.return}0<Ke.length&&(Ee=new je(Ee,Xe,null,l,Ce),Ae.push({event:Ee,listeners:Ke}))}}if(!(s&7)){e:{if(Ee=r==="mouseover"||r==="pointerover",je=r==="mouseout"||r==="pointerout",Ee&&l!==st&&(Xe=l.relatedTarget||l.fromElement)&&(fs(Xe)||Xe[nr]))break e;if((je||Ee)&&(Ee=Ce.window===Ce?Ce:(Ee=Ce.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,je?(Xe=l.relatedTarget||l.toElement,je=ue,Xe=Xe?fs(Xe):null,Xe!==null&&(tn=Ve(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(je=null,Xe=ue),je!==Xe)){if(Ke=Bg,Re="onMouseLeave",ie="onMouseEnter",K="mouse",(r==="pointerout"||r==="pointerover")&&(Ke=Vg,Re="onPointerLeave",ie="onPointerEnter",K="pointer"),tn=je==null?Ee:ao(je),se=Xe==null?Ee:ao(Xe),Ee=new Ke(Re,K+"leave",je,l,Ce),Ee.target=tn,Ee.relatedTarget=se,Re=null,fs(Ce)===ue&&(Ke=new Ke(ie,K+"enter",Xe,l,Ce),Ke.target=se,Ke.relatedTarget=tn,Re=Ke),tn=Re,je&&Xe)t:{for(Ke=je,ie=Xe,K=0,se=Ke;se;se=so(se))K++;for(se=0,Re=ie;Re;Re=so(Re))se++;for(;0<K-se;)Ke=so(Ke),K--;for(;0<se-K;)ie=so(ie),se--;for(;K--;){if(Ke===ie||ie!==null&&Ke===ie.alternate)break t;Ke=so(Ke),ie=so(ie)}Ke=null}else Ke=null;je!==null&&p0(Ae,Ee,je,Ke,!1),Xe!==null&&tn!==null&&p0(Ae,tn,Xe,Ke,!0)}}e:{if(Ee=ue?ao(ue):window,je=Ee.nodeName&&Ee.nodeName.toLowerCase(),je==="select"||je==="input"&&Ee.type==="file")var Je=mb;else if(Xg(Ee))if(Yg)Je=xb;else{Je=vb;var at=gb}else(je=Ee.nodeName)&&je.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=yb);if(Je&&(Je=Je(r,ue))){qg(Ae,Je,l,Ce);break e}at&&at(r,Ee,ue),r==="focusout"&&(at=Ee._wrapperState)&&at.controlled&&Ee.type==="number"&&nt(Ee,"number",Ee.value)}switch(at=ue?ao(ue):window,r){case"focusin":(Xg(at)||at.contentEditable==="true")&&(io=at,tf=ue,Ra=null);break;case"focusout":Ra=tf=io=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,i0(Ae,l,Ce);break;case"selectionchange":if(Sb)break;case"keydown":case"keyup":i0(Ae,l,Ce)}var lt;if(Zd)e:{switch(r){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else no?Wg(r,l)&&(ht="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(jg&&l.locale!=="ko"&&(no||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&no&&(lt=Ng()):(Tr=Ce,Wd="value"in Tr?Tr.value:Tr.textContent,no=!0)),at=uu(ue,ht),0<at.length&&(ht=new Ug(ht,r,null,l,Ce),Ae.push({event:ht,listeners:at}),lt?ht.data=lt:(lt=$g(l),lt!==null&&(ht.data=lt)))),(lt=cb?db(r,l):fb(r,l))&&(ue=uu(ue,"onBeforeInput"),0<ue.length&&(Ce=new Ug("onBeforeInput","beforeinput",null,l,Ce),Ae.push({event:Ce,listeners:ue}),Ce.data=lt))}f0(Ae,s)})}function ka(r,s,l){return{instance:r,listener:s,currentTarget:l}}function uu(r,s){for(var l=s+"Capture",h=[];r!==null;){var v=r,w=v.stateNode;v.tag===5&&w!==null&&(v=w,w=Me(r,l),w!=null&&h.unshift(ka(r,w,v)),w=Me(r,s),w!=null&&h.push(ka(r,w,v))),r=r.return}return h}function so(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function p0(r,s,l,h,v){for(var w=s._reactName,E=[];l!==null&&l!==h;){var N=l,W=N.alternate,ue=N.stateNode;if(W!==null&&W===h)break;N.tag===5&&ue!==null&&(N=ue,v?(W=Me(l,w),W!=null&&E.unshift(ka(l,W,N))):v||(W=Me(l,w),W!=null&&E.push(ka(l,W,N)))),l=l.return}E.length!==0&&r.push({event:s,listeners:E})}var Tb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function m0(r){return(typeof r=="string"?r:""+r).replace(Tb,`
`).replace(Cb,"")}function cu(r,s,l){if(s=m0(s),m0(r)!==s&&l)throw Error(t(425))}function du(){}var uf=null,cf=null;function df(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,Ab=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,Pb=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(r){return g0.resolve(null).then(r).catch(Lb)}:ff;function Lb(r){setTimeout(function(){throw r})}function hf(r,s){var l=s,h=0;do{var v=l.nextSibling;if(r.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(h===0){r.removeChild(v),ba(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=v}while(l);ba(s)}function Ar(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function v0(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Ui="__reactFiber$"+oo,Fa="__reactProps$"+oo,nr="__reactContainer$"+oo,pf="__reactEvents$"+oo,Rb="__reactListeners$"+oo,Db="__reactHandles$"+oo;function fs(r){var s=r[Ui];if(s)return s;for(var l=r.parentNode;l;){if(s=l[nr]||l[Ui]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=v0(r);r!==null;){if(l=r[Ui])return l;r=v0(r)}return s}r=l,l=r.parentNode}return null}function za(r){return r=r[Ui]||r[nr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ao(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fu(r){return r[Fa]||null}var mf=[],lo=-1;function Pr(r){return{current:r}}function Ot(r){0>lo||(r.current=mf[lo],mf[lo]=null,lo--)}function zt(r,s){lo++,mf[lo]=r.current,r.current=s}var Lr={},bn=Pr(Lr),Un=Pr(!1),hs=Lr;function uo(r,s){var l=r.type.contextTypes;if(!l)return Lr;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var v={},w;for(w in l)v[w]=s[w];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=v),v}function Vn(r){return r=r.childContextTypes,r!=null}function hu(){Ot(Un),Ot(bn)}function y0(r,s,l){if(bn.current!==Lr)throw Error(t(168));zt(bn,s),zt(Un,l)}function x0(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var v in h)if(!(v in s))throw Error(t(108,ye(r)||"Unknown",v));return Y({},l,h)}function pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Lr,hs=bn.current,zt(bn,r),zt(Un,Un.current),!0}function _0(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=x0(r,s,hs),h.__reactInternalMemoizedMergedChildContext=r,Ot(Un),Ot(bn),zt(bn,r)):Ot(Un),zt(Un,l)}var ir=null,mu=!1,gf=!1;function w0(r){ir===null?ir=[r]:ir.push(r)}function Ib(r){mu=!0,w0(r)}function Rr(){if(!gf&&ir!==null){gf=!0;var r=0,s=Rt;try{var l=ir;for(Rt=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}ir=null,mu=!1}catch(v){throw ir!==null&&(ir=ir.slice(r+1)),en(ct,Rr),v}finally{Rt=s,gf=!1}}return null}var co=[],fo=0,gu=null,vu=0,ci=[],di=0,ps=null,rr=1,sr="";function ms(r,s){co[fo++]=vu,co[fo++]=gu,gu=r,vu=s}function S0(r,s,l){ci[di++]=rr,ci[di++]=sr,ci[di++]=ps,ps=r;var h=rr;r=sr;var v=32-Yt(h)-1;h&=~(1<<v),l+=1;var w=32-Yt(s)+v;if(30<w){var E=v-v%5;w=(h&(1<<E)-1).toString(32),h>>=E,v-=E,rr=1<<32-Yt(s)+v|l<<v|h,sr=w+r}else rr=1<<w|l<<v|h,sr=r}function vf(r){r.return!==null&&(ms(r,1),S0(r,1,0))}function yf(r){for(;r===gu;)gu=co[--fo],co[fo]=null,vu=co[--fo],co[fo]=null;for(;r===ps;)ps=ci[--di],ci[di]=null,sr=ci[--di],ci[di]=null,rr=ci[--di],ci[di]=null}var Qn=null,Jn=null,jt=!1,bi=null;function M0(r,s){var l=mi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function b0(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Qn=r,Jn=Ar(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Qn=r,Jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ps!==null?{id:rr,overflow:sr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=mi(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,Qn=r,Jn=null,!0):!1;default:return!1}}function xf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function _f(r){if(jt){var s=Jn;if(s){var l=s;if(!b0(r,s)){if(xf(r))throw Error(t(418));s=Ar(l.nextSibling);var h=Qn;s&&b0(r,s)?M0(h,l):(r.flags=r.flags&-4097|2,jt=!1,Qn=r)}}else{if(xf(r))throw Error(t(418));r.flags=r.flags&-4097|2,jt=!1,Qn=r}}}function E0(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Qn=r}function yu(r){if(r!==Qn)return!1;if(!jt)return E0(r),jt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!df(r.type,r.memoizedProps)),s&&(s=Jn)){if(xf(r))throw T0(),Error(t(418));for(;s;)M0(r,s),s=Ar(s.nextSibling)}if(E0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){Jn=Ar(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}Jn=null}}else Jn=Qn?Ar(r.stateNode.nextSibling):null;return!0}function T0(){for(var r=Jn;r;)r=Ar(r.nextSibling)}function ho(){Jn=Qn=null,jt=!1}function wf(r){bi===null?bi=[r]:bi.push(r)}var kb=R.ReactCurrentBatchConfig;function Na(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var v=h,w=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===w?s.ref:(s=function(E){var N=v.refs;E===null?delete N[w]:N[w]=E},s._stringRef=w,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function xu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function C0(r){var s=r._init;return s(r._payload)}function A0(r){function s(ie,K){if(r){var se=ie.deletions;se===null?(ie.deletions=[K],ie.flags|=16):se.push(K)}}function l(ie,K){if(!r)return null;for(;K!==null;)s(ie,K),K=K.sibling;return null}function h(ie,K){for(ie=new Map;K!==null;)K.key!==null?ie.set(K.key,K):ie.set(K.index,K),K=K.sibling;return ie}function v(ie,K){return ie=Br(ie,K),ie.index=0,ie.sibling=null,ie}function w(ie,K,se){return ie.index=se,r?(se=ie.alternate,se!==null?(se=se.index,se<K?(ie.flags|=2,K):se):(ie.flags|=2,K)):(ie.flags|=1048576,K)}function E(ie){return r&&ie.alternate===null&&(ie.flags|=2),ie}function N(ie,K,se,Re){return K===null||K.tag!==6?(K=fh(se,ie.mode,Re),K.return=ie,K):(K=v(K,se),K.return=ie,K)}function W(ie,K,se,Re){var Je=se.type;return Je===O?Ce(ie,K,se.props.children,Re,se.key):K!==null&&(K.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&C0(Je)===K.type)?(Re=v(K,se.props),Re.ref=Na(ie,K,se),Re.return=ie,Re):(Re=Gu(se.type,se.key,se.props,null,ie.mode,Re),Re.ref=Na(ie,K,se),Re.return=ie,Re)}function ue(ie,K,se,Re){return K===null||K.tag!==4||K.stateNode.containerInfo!==se.containerInfo||K.stateNode.implementation!==se.implementation?(K=hh(se,ie.mode,Re),K.return=ie,K):(K=v(K,se.children||[]),K.return=ie,K)}function Ce(ie,K,se,Re,Je){return K===null||K.tag!==7?(K=Ms(se,ie.mode,Re,Je),K.return=ie,K):(K=v(K,se),K.return=ie,K)}function Ae(ie,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return K=fh(""+K,ie.mode,se),K.return=ie,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return se=Gu(K.type,K.key,K.props,null,ie.mode,se),se.ref=Na(ie,null,K),se.return=ie,se;case I:return K=hh(K,ie.mode,se),K.return=ie,K;case oe:var Re=K._init;return Ae(ie,Re(K._payload),se)}if(gt(K)||q(K))return K=Ms(K,ie.mode,se,null),K.return=ie,K;xu(ie,K)}return null}function Ee(ie,K,se,Re){var Je=K!==null?K.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:N(ie,K,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case b:return se.key===Je?W(ie,K,se,Re):null;case I:return se.key===Je?ue(ie,K,se,Re):null;case oe:return Je=se._init,Ee(ie,K,Je(se._payload),Re)}if(gt(se)||q(se))return Je!==null?null:Ce(ie,K,se,Re,null);xu(ie,se)}return null}function je(ie,K,se,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(se)||null,N(K,ie,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case b:return ie=ie.get(Re.key===null?se:Re.key)||null,W(K,ie,Re,Je);case I:return ie=ie.get(Re.key===null?se:Re.key)||null,ue(K,ie,Re,Je);case oe:var at=Re._init;return je(ie,K,se,at(Re._payload),Je)}if(gt(Re)||q(Re))return ie=ie.get(se)||null,Ce(K,ie,Re,Je,null);xu(K,Re)}return null}function Xe(ie,K,se,Re){for(var Je=null,at=null,lt=K,ht=K=0,vn=null;lt!==null&&ht<se.length;ht++){lt.index>ht?(vn=lt,lt=null):vn=lt.sibling;var Ct=Ee(ie,lt,se[ht],Re);if(Ct===null){lt===null&&(lt=vn);break}r&&lt&&Ct.alternate===null&&s(ie,lt),K=w(Ct,K,ht),at===null?Je=Ct:at.sibling=Ct,at=Ct,lt=vn}if(ht===se.length)return l(ie,lt),jt&&ms(ie,ht),Je;if(lt===null){for(;ht<se.length;ht++)lt=Ae(ie,se[ht],Re),lt!==null&&(K=w(lt,K,ht),at===null?Je=lt:at.sibling=lt,at=lt);return jt&&ms(ie,ht),Je}for(lt=h(ie,lt);ht<se.length;ht++)vn=je(lt,ie,ht,se[ht],Re),vn!==null&&(r&&vn.alternate!==null&&lt.delete(vn.key===null?ht:vn.key),K=w(vn,K,ht),at===null?Je=vn:at.sibling=vn,at=vn);return r&&lt.forEach(function(Ur){return s(ie,Ur)}),jt&&ms(ie,ht),Je}function Ke(ie,K,se,Re){var Je=q(se);if(typeof Je!="function")throw Error(t(150));if(se=Je.call(se),se==null)throw Error(t(151));for(var at=Je=null,lt=K,ht=K=0,vn=null,Ct=se.next();lt!==null&&!Ct.done;ht++,Ct=se.next()){lt.index>ht?(vn=lt,lt=null):vn=lt.sibling;var Ur=Ee(ie,lt,Ct.value,Re);if(Ur===null){lt===null&&(lt=vn);break}r&&lt&&Ur.alternate===null&&s(ie,lt),K=w(Ur,K,ht),at===null?Je=Ur:at.sibling=Ur,at=Ur,lt=vn}if(Ct.done)return l(ie,lt),jt&&ms(ie,ht),Je;if(lt===null){for(;!Ct.done;ht++,Ct=se.next())Ct=Ae(ie,Ct.value,Re),Ct!==null&&(K=w(Ct,K,ht),at===null?Je=Ct:at.sibling=Ct,at=Ct);return jt&&ms(ie,ht),Je}for(lt=h(ie,lt);!Ct.done;ht++,Ct=se.next())Ct=je(lt,ie,ht,Ct.value,Re),Ct!==null&&(r&&Ct.alternate!==null&&lt.delete(Ct.key===null?ht:Ct.key),K=w(Ct,K,ht),at===null?Je=Ct:at.sibling=Ct,at=Ct);return r&&lt.forEach(function(fE){return s(ie,fE)}),jt&&ms(ie,ht),Je}function tn(ie,K,se,Re){if(typeof se=="object"&&se!==null&&se.type===O&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case b:e:{for(var Je=se.key,at=K;at!==null;){if(at.key===Je){if(Je=se.type,Je===O){if(at.tag===7){l(ie,at.sibling),K=v(at,se.props.children),K.return=ie,ie=K;break e}}else if(at.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&C0(Je)===at.type){l(ie,at.sibling),K=v(at,se.props),K.ref=Na(ie,at,se),K.return=ie,ie=K;break e}l(ie,at);break}else s(ie,at);at=at.sibling}se.type===O?(K=Ms(se.props.children,ie.mode,Re,se.key),K.return=ie,ie=K):(Re=Gu(se.type,se.key,se.props,null,ie.mode,Re),Re.ref=Na(ie,K,se),Re.return=ie,ie=Re)}return E(ie);case I:e:{for(at=se.key;K!==null;){if(K.key===at)if(K.tag===4&&K.stateNode.containerInfo===se.containerInfo&&K.stateNode.implementation===se.implementation){l(ie,K.sibling),K=v(K,se.children||[]),K.return=ie,ie=K;break e}else{l(ie,K);break}else s(ie,K);K=K.sibling}K=hh(se,ie.mode,Re),K.return=ie,ie=K}return E(ie);case oe:return at=se._init,tn(ie,K,at(se._payload),Re)}if(gt(se))return Xe(ie,K,se,Re);if(q(se))return Ke(ie,K,se,Re);xu(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,K!==null&&K.tag===6?(l(ie,K.sibling),K=v(K,se),K.return=ie,ie=K):(l(ie,K),K=fh(se,ie.mode,Re),K.return=ie,ie=K),E(ie)):l(ie,K)}return tn}var po=A0(!0),P0=A0(!1),_u=Pr(null),wu=null,mo=null,Sf=null;function Mf(){Sf=mo=wu=null}function bf(r){var s=_u.current;Ot(_u),r._currentValue=s}function Ef(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function go(r,s){wu=r,Sf=mo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(jn=!0),r.firstContext=null)}function fi(r){var s=r._currentValue;if(Sf!==r)if(r={context:r,memoizedValue:s,next:null},mo===null){if(wu===null)throw Error(t(308));mo=r,wu.dependencies={lanes:0,firstContext:r}}else mo=mo.next=r;return s}var gs=null;function Tf(r){gs===null?gs=[r]:gs.push(r)}function L0(r,s,l,h){var v=s.interleaved;return v===null?(l.next=l,Tf(s)):(l.next=v.next,v.next=l),s.interleaved=l,or(r,h)}function or(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Dr=!1;function Cf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ar(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Tt&2){var v=h.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),h.pending=s,or(r,l)}return v=h.interleaved,v===null?(s.next=s,Tf(h)):(s.next=v.next,v.next=s),h.interleaved=s,or(r,l)}function Su(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Ud(r,l)}}function D0(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var v=null,w=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};w===null?v=w=E:w=w.next=E,l=l.next}while(l!==null);w===null?v=w=s:w=w.next=s}else v=w=s;l={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:w,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Mu(r,s,l,h){var v=r.updateQueue;Dr=!1;var w=v.firstBaseUpdate,E=v.lastBaseUpdate,N=v.shared.pending;if(N!==null){v.shared.pending=null;var W=N,ue=W.next;W.next=null,E===null?w=ue:E.next=ue,E=W;var Ce=r.alternate;Ce!==null&&(Ce=Ce.updateQueue,N=Ce.lastBaseUpdate,N!==E&&(N===null?Ce.firstBaseUpdate=ue:N.next=ue,Ce.lastBaseUpdate=W))}if(w!==null){var Ae=v.baseState;E=0,Ce=ue=W=null,N=w;do{var Ee=N.lane,je=N.eventTime;if((h&Ee)===Ee){Ce!==null&&(Ce=Ce.next={eventTime:je,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Xe=r,Ke=N;switch(Ee=s,je=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){Ae=Xe.call(je,Ae,Ee);break e}Ae=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,Ee=typeof Xe=="function"?Xe.call(je,Ae,Ee):Xe,Ee==null)break e;Ae=Y({},Ae,Ee);break e;case 2:Dr=!0}}N.callback!==null&&N.lane!==0&&(r.flags|=64,Ee=v.effects,Ee===null?v.effects=[N]:Ee.push(N))}else je={eventTime:je,lane:Ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ce===null?(ue=Ce=je,W=Ae):Ce=Ce.next=je,E|=Ee;if(N=N.next,N===null){if(N=v.shared.pending,N===null)break;Ee=N,N=Ee.next,Ee.next=null,v.lastBaseUpdate=Ee,v.shared.pending=null}}while(!0);if(Ce===null&&(W=Ae),v.baseState=W,v.firstBaseUpdate=ue,v.lastBaseUpdate=Ce,s=v.shared.interleaved,s!==null){v=s;do E|=v.lane,v=v.next;while(v!==s)}else w===null&&(v.shared.lanes=0);xs|=E,r.lanes=E,r.memoizedState=Ae}}function I0(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],v=h.callback;if(v!==null){if(h.callback=null,h=l,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var Oa={},Vi=Pr(Oa),Ba=Pr(Oa),Ua=Pr(Oa);function vs(r){if(r===Oa)throw Error(t(174));return r}function Af(r,s){switch(zt(Ua,s),zt(Ba,r),zt(Vi,Oa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Le(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Le(s,r)}Ot(Vi),zt(Vi,s)}function vo(){Ot(Vi),Ot(Ba),Ot(Ua)}function k0(r){vs(Ua.current);var s=vs(Vi.current),l=Le(s,r.type);s!==l&&(zt(Ba,r),zt(Vi,l))}function Pf(r){Ba.current===r&&(Ot(Vi),Ot(Ba))}var Wt=Pr(0);function bu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lf=[];function Rf(){for(var r=0;r<Lf.length;r++)Lf[r]._workInProgressVersionPrimary=null;Lf.length=0}var Eu=R.ReactCurrentDispatcher,Df=R.ReactCurrentBatchConfig,ys=0,$t=null,un=null,mn=null,Tu=!1,Va=!1,ja=0,Fb=0;function En(){throw Error(t(321))}function If(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Mi(r[l],s[l]))return!1;return!0}function kf(r,s,l,h,v,w){if(ys=w,$t=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Eu.current=r===null||r.memoizedState===null?Bb:Ub,r=l(h,v),Va){w=0;do{if(Va=!1,ja=0,25<=w)throw Error(t(301));w+=1,mn=un=null,s.updateQueue=null,Eu.current=Vb,r=l(h,v)}while(Va)}if(Eu.current=Pu,s=un!==null&&un.next!==null,ys=0,mn=un=$t=null,Tu=!1,s)throw Error(t(300));return r}function Ff(){var r=ja!==0;return ja=0,r}function ji(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?$t.memoizedState=mn=r:mn=mn.next=r,mn}function hi(){if(un===null){var r=$t.alternate;r=r!==null?r.memoizedState:null}else r=un.next;var s=mn===null?$t.memoizedState:mn.next;if(s!==null)mn=s,un=r;else{if(r===null)throw Error(t(310));un=r,r={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},mn===null?$t.memoizedState=mn=r:mn=mn.next=r}return mn}function Ga(r,s){return typeof s=="function"?s(r):s}function zf(r){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=un,v=h.baseQueue,w=l.pending;if(w!==null){if(v!==null){var E=v.next;v.next=w.next,w.next=E}h.baseQueue=v=w,l.pending=null}if(v!==null){w=v.next,h=h.baseState;var N=E=null,W=null,ue=w;do{var Ce=ue.lane;if((ys&Ce)===Ce)W!==null&&(W=W.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),h=ue.hasEagerState?ue.eagerState:r(h,ue.action);else{var Ae={lane:Ce,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};W===null?(N=W=Ae,E=h):W=W.next=Ae,$t.lanes|=Ce,xs|=Ce}ue=ue.next}while(ue!==null&&ue!==w);W===null?E=h:W.next=N,Mi(h,s.memoizedState)||(jn=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=W,l.lastRenderedState=h}if(r=l.interleaved,r!==null){v=r;do w=v.lane,$t.lanes|=w,xs|=w,v=v.next;while(v!==r)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Nf(r){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,v=l.pending,w=s.memoizedState;if(v!==null){l.pending=null;var E=v=v.next;do w=r(w,E.action),E=E.next;while(E!==v);Mi(w,s.memoizedState)||(jn=!0),s.memoizedState=w,s.baseQueue===null&&(s.baseState=w),l.lastRenderedState=w}return[w,h]}function F0(){}function z0(r,s){var l=$t,h=hi(),v=s(),w=!Mi(h.memoizedState,v);if(w&&(h.memoizedState=v,jn=!0),h=h.queue,Of(B0.bind(null,l,h,r),[r]),h.getSnapshot!==s||w||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Ha(9,O0.bind(null,l,h,v,s),void 0,null),gn===null)throw Error(t(349));ys&30||N0(l,s,v)}return v}function N0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function O0(r,s,l,h){s.value=l,s.getSnapshot=h,U0(s)&&V0(r)}function B0(r,s,l){return l(function(){U0(s)&&V0(r)})}function U0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Mi(r,l)}catch{return!0}}function V0(r){var s=or(r,1);s!==null&&Ai(s,r,1,-1)}function j0(r){var s=ji();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:r},s.queue=r,r=r.dispatch=Ob.bind(null,$t,r),[s.memoizedState,r]}function Ha(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=$t.updateQueue,s===null?(s={lastEffect:null,stores:null},$t.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function G0(){return hi().memoizedState}function Cu(r,s,l,h){var v=ji();$t.flags|=r,v.memoizedState=Ha(1|s,l,void 0,h===void 0?null:h)}function Au(r,s,l,h){var v=hi();h=h===void 0?null:h;var w=void 0;if(un!==null){var E=un.memoizedState;if(w=E.destroy,h!==null&&If(h,E.deps)){v.memoizedState=Ha(s,l,w,h);return}}$t.flags|=r,v.memoizedState=Ha(1|s,l,w,h)}function H0(r,s){return Cu(8390656,8,r,s)}function Of(r,s){return Au(2048,8,r,s)}function W0(r,s){return Au(4,2,r,s)}function $0(r,s){return Au(4,4,r,s)}function X0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function q0(r,s,l){return l=l!=null?l.concat([r]):null,Au(4,4,X0.bind(null,s,r),l)}function Bf(){}function Y0(r,s){var l=hi();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&If(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function K0(r,s){var l=hi();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&If(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Z0(r,s,l){return ys&21?(Mi(l,s)||(l=Cg(),$t.lanes|=l,xs|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,jn=!0),r.memoizedState=l)}function zb(r,s){var l=Rt;Rt=l!==0&&4>l?l:4,r(!0);var h=Df.transition;Df.transition={};try{r(!1),s()}finally{Rt=l,Df.transition=h}}function Q0(){return hi().memoizedState}function Nb(r,s,l){var h=Nr(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},J0(r))ev(s,l);else if(l=L0(r,s,l,h),l!==null){var v=Fn();Ai(l,r,h,v),tv(l,s,h)}}function Ob(r,s,l){var h=Nr(r),v={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(J0(r))ev(s,v);else{var w=r.alternate;if(r.lanes===0&&(w===null||w.lanes===0)&&(w=s.lastRenderedReducer,w!==null))try{var E=s.lastRenderedState,N=w(E,l);if(v.hasEagerState=!0,v.eagerState=N,Mi(N,E)){var W=s.interleaved;W===null?(v.next=v,Tf(s)):(v.next=W.next,W.next=v),s.interleaved=v;return}}catch{}finally{}l=L0(r,s,v,h),l!==null&&(v=Fn(),Ai(l,r,h,v),tv(l,s,h))}}function J0(r){var s=r.alternate;return r===$t||s!==null&&s===$t}function ev(r,s){Va=Tu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function tv(r,s,l){if(l&4194240){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Ud(r,l)}}var Pu={readContext:fi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Bb={readContext:fi,useCallback:function(r,s){return ji().memoizedState=[r,s===void 0?null:s],r},useContext:fi,useEffect:H0,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Cu(4194308,4,X0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Cu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Cu(4,2,r,s)},useMemo:function(r,s){var l=ji();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=ji();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=Nb.bind(null,$t,r),[h.memoizedState,r]},useRef:function(r){var s=ji();return r={current:r},s.memoizedState=r},useState:j0,useDebugValue:Bf,useDeferredValue:function(r){return ji().memoizedState=r},useTransition:function(){var r=j0(!1),s=r[0];return r=zb.bind(null,r[1]),ji().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=$t,v=ji();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),gn===null)throw Error(t(349));ys&30||N0(h,s,l)}v.memoizedState=l;var w={value:l,getSnapshot:s};return v.queue=w,H0(B0.bind(null,h,w,r),[r]),h.flags|=2048,Ha(9,O0.bind(null,h,w,l,s),void 0,null),l},useId:function(){var r=ji(),s=gn.identifierPrefix;if(jt){var l=sr,h=rr;l=(h&~(1<<32-Yt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=ja++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Fb++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Ub={readContext:fi,useCallback:Y0,useContext:fi,useEffect:Of,useImperativeHandle:q0,useInsertionEffect:W0,useLayoutEffect:$0,useMemo:K0,useReducer:zf,useRef:G0,useState:function(){return zf(Ga)},useDebugValue:Bf,useDeferredValue:function(r){var s=hi();return Z0(s,un.memoizedState,r)},useTransition:function(){var r=zf(Ga)[0],s=hi().memoizedState;return[r,s]},useMutableSource:F0,useSyncExternalStore:z0,useId:Q0,unstable_isNewReconciler:!1},Vb={readContext:fi,useCallback:Y0,useContext:fi,useEffect:Of,useImperativeHandle:q0,useInsertionEffect:W0,useLayoutEffect:$0,useMemo:K0,useReducer:Nf,useRef:G0,useState:function(){return Nf(Ga)},useDebugValue:Bf,useDeferredValue:function(r){var s=hi();return un===null?s.memoizedState=r:Z0(s,un.memoizedState,r)},useTransition:function(){var r=Nf(Ga)[0],s=hi().memoizedState;return[r,s]},useMutableSource:F0,useSyncExternalStore:z0,useId:Q0,unstable_isNewReconciler:!1};function Ei(r,s){if(r&&r.defaultProps){s=Y({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Uf(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:Y({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Lu={isMounted:function(r){return(r=r._reactInternals)?Ve(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Fn(),v=Nr(r),w=ar(h,v);w.payload=s,l!=null&&(w.callback=l),s=Ir(r,w,v),s!==null&&(Ai(s,r,v,h),Su(s,r,v))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Fn(),v=Nr(r),w=ar(h,v);w.tag=1,w.payload=s,l!=null&&(w.callback=l),s=Ir(r,w,v),s!==null&&(Ai(s,r,v,h),Su(s,r,v))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Fn(),h=Nr(r),v=ar(l,h);v.tag=2,s!=null&&(v.callback=s),s=Ir(r,v,h),s!==null&&(Ai(s,r,h,l),Su(s,r,h))}};function nv(r,s,l,h,v,w,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,w,E):s.prototype&&s.prototype.isPureReactComponent?!La(l,h)||!La(v,w):!0}function iv(r,s,l){var h=!1,v=Lr,w=s.contextType;return typeof w=="object"&&w!==null?w=fi(w):(v=Vn(s)?hs:bn.current,h=s.contextTypes,w=(h=h!=null)?uo(r,v):Lr),s=new s(l,w),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Lu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=w),s}function rv(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Lu.enqueueReplaceState(s,s.state,null)}function Vf(r,s,l,h){var v=r.stateNode;v.props=l,v.state=r.memoizedState,v.refs={},Cf(r);var w=s.contextType;typeof w=="object"&&w!==null?v.context=fi(w):(w=Vn(s)?hs:bn.current,v.context=uo(r,w)),v.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(Uf(r,s,w,l),v.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&Lu.enqueueReplaceState(v,v.state,null),Mu(r,l,v,h),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,s){try{var l="",h=s;do l+=we(h),h=h.return;while(h);var v=l}catch(w){v=`
Error generating stack: `+w.message+`
`+w.stack}return{value:r,source:s,stack:v,digest:null}}function jf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Gf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var jb=typeof WeakMap=="function"?WeakMap:Map;function sv(r,s,l){l=ar(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Nu||(Nu=!0,rh=h),Gf(r,s)},l}function ov(r,s,l){l=ar(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var v=s.value;l.payload=function(){return h(v)},l.callback=function(){Gf(r,s)}}var w=r.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(l.callback=function(){Gf(r,s),typeof h!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function av(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new jb;var v=new Set;h.set(s,v)}else v=h.get(s),v===void 0&&(v=new Set,h.set(s,v));v.has(l)||(v.add(l),r=nE.bind(null,r,s,l),s.then(r,r))}function lv(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function uv(r,s,l,h,v){return r.mode&1?(r.flags|=65536,r.lanes=v,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ar(-1,1),s.tag=2,Ir(l,s,1))),l.lanes|=1),r)}var Gb=R.ReactCurrentOwner,jn=!1;function kn(r,s,l,h){s.child=r===null?P0(s,null,l,h):po(s,r.child,l,h)}function cv(r,s,l,h,v){l=l.render;var w=s.ref;return go(s,v),h=kf(r,s,l,h,w,v),l=Ff(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,lr(r,s,v)):(jt&&l&&vf(s),s.flags|=1,kn(r,s,h,v),s.child)}function dv(r,s,l,h,v){if(r===null){var w=l.type;return typeof w=="function"&&!dh(w)&&w.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=w,fv(r,s,w,h,v)):(r=Gu(l.type,null,h,s,s.mode,v),r.ref=s.ref,r.return=s,s.child=r)}if(w=r.child,!(r.lanes&v)){var E=w.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(E,h)&&r.ref===s.ref)return lr(r,s,v)}return s.flags|=1,r=Br(w,h),r.ref=s.ref,r.return=s,s.child=r}function fv(r,s,l,h,v){if(r!==null){var w=r.memoizedProps;if(La(w,h)&&r.ref===s.ref)if(jn=!1,s.pendingProps=h=w,(r.lanes&v)!==0)r.flags&131072&&(jn=!0);else return s.lanes=r.lanes,lr(r,s,v)}return Hf(r,s,l,h,v)}function hv(r,s,l){var h=s.pendingProps,v=h.children,w=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(_o,ei),ei|=l;else{if(!(l&1073741824))return r=w!==null?w.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,zt(_o,ei),ei|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=w!==null?w.baseLanes:l,zt(_o,ei),ei|=h}else w!==null?(h=w.baseLanes|l,s.memoizedState=null):h=l,zt(_o,ei),ei|=h;return kn(r,s,v,l),s.child}function pv(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Hf(r,s,l,h,v){var w=Vn(l)?hs:bn.current;return w=uo(s,w),go(s,v),l=kf(r,s,l,h,w,v),h=Ff(),r!==null&&!jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,lr(r,s,v)):(jt&&h&&vf(s),s.flags|=1,kn(r,s,l,v),s.child)}function mv(r,s,l,h,v){if(Vn(l)){var w=!0;pu(s)}else w=!1;if(go(s,v),s.stateNode===null)Du(r,s),iv(s,l,h),Vf(s,l,h,v),h=!0;else if(r===null){var E=s.stateNode,N=s.memoizedProps;E.props=N;var W=E.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=fi(ue):(ue=Vn(l)?hs:bn.current,ue=uo(s,ue));var Ce=l.getDerivedStateFromProps,Ae=typeof Ce=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ae||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==h||W!==ue)&&rv(s,E,h,ue),Dr=!1;var Ee=s.memoizedState;E.state=Ee,Mu(s,h,E,v),W=s.memoizedState,N!==h||Ee!==W||Un.current||Dr?(typeof Ce=="function"&&(Uf(s,l,Ce,h),W=s.memoizedState),(N=Dr||nv(s,l,N,h,Ee,W,ue))?(Ae||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=W),E.props=h,E.state=W,E.context=ue,h=N):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,R0(r,s),N=s.memoizedProps,ue=s.type===s.elementType?N:Ei(s.type,N),E.props=ue,Ae=s.pendingProps,Ee=E.context,W=l.contextType,typeof W=="object"&&W!==null?W=fi(W):(W=Vn(l)?hs:bn.current,W=uo(s,W));var je=l.getDerivedStateFromProps;(Ce=typeof je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Ae||Ee!==W)&&rv(s,E,h,W),Dr=!1,Ee=s.memoizedState,E.state=Ee,Mu(s,h,E,v);var Xe=s.memoizedState;N!==Ae||Ee!==Xe||Un.current||Dr?(typeof je=="function"&&(Uf(s,l,je,h),Xe=s.memoizedState),(ue=Dr||nv(s,l,ue,h,Ee,Xe,W)||!1)?(Ce||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,Xe,W),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,Xe,W)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===r.memoizedProps&&Ee===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===r.memoizedProps&&Ee===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Xe),E.props=h,E.state=Xe,E.context=W,h=ue):(typeof E.componentDidUpdate!="function"||N===r.memoizedProps&&Ee===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===r.memoizedProps&&Ee===r.memoizedState||(s.flags|=1024),h=!1)}return Wf(r,s,l,h,w,v)}function Wf(r,s,l,h,v,w){pv(r,s);var E=(s.flags&128)!==0;if(!h&&!E)return v&&_0(s,l,!1),lr(r,s,w);h=s.stateNode,Gb.current=s;var N=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&E?(s.child=po(s,r.child,null,w),s.child=po(s,null,N,w)):kn(r,s,N,w),s.memoizedState=h.state,v&&_0(s,l,!0),s.child}function gv(r){var s=r.stateNode;s.pendingContext?y0(r,s.pendingContext,s.pendingContext!==s.context):s.context&&y0(r,s.context,!1),Af(r,s.containerInfo)}function vv(r,s,l,h,v){return ho(),wf(v),s.flags|=256,kn(r,s,l,h),s.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Xf(r){return{baseLanes:r,cachePool:null,transitions:null}}function yv(r,s,l){var h=s.pendingProps,v=Wt.current,w=!1,E=(s.flags&128)!==0,N;if((N=E)||(N=r!==null&&r.memoizedState===null?!1:(v&2)!==0),N?(w=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),zt(Wt,v&1),r===null)return _f(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(E=h.children,r=h.fallback,w?(h=s.mode,w=s.child,E={mode:"hidden",children:E},!(h&1)&&w!==null?(w.childLanes=0,w.pendingProps=E):w=Hu(E,h,0,null),r=Ms(r,h,l,null),w.return=s,r.return=s,w.sibling=r,s.child=w,s.child.memoizedState=Xf(l),s.memoizedState=$f,r):qf(s,E));if(v=r.memoizedState,v!==null&&(N=v.dehydrated,N!==null))return Hb(r,s,E,h,N,v,l);if(w){w=h.fallback,E=s.mode,v=r.child,N=v.sibling;var W={mode:"hidden",children:h.children};return!(E&1)&&s.child!==v?(h=s.child,h.childLanes=0,h.pendingProps=W,s.deletions=null):(h=Br(v,W),h.subtreeFlags=v.subtreeFlags&14680064),N!==null?w=Br(N,w):(w=Ms(w,E,l,null),w.flags|=2),w.return=s,h.return=s,h.sibling=w,s.child=h,h=w,w=s.child,E=r.child.memoizedState,E=E===null?Xf(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},w.memoizedState=E,w.childLanes=r.childLanes&~l,s.memoizedState=$f,h}return w=r.child,r=w.sibling,h=Br(w,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function qf(r,s){return s=Hu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ru(r,s,l,h){return h!==null&&wf(h),po(s,r.child,null,l),r=qf(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Hb(r,s,l,h,v,w,E){if(l)return s.flags&256?(s.flags&=-257,h=jf(Error(t(422))),Ru(r,s,E,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(w=h.fallback,v=s.mode,h=Hu({mode:"visible",children:h.children},v,0,null),w=Ms(w,v,E,null),w.flags|=2,h.return=s,w.return=s,h.sibling=w,s.child=h,s.mode&1&&po(s,r.child,null,E),s.child.memoizedState=Xf(E),s.memoizedState=$f,w);if(!(s.mode&1))return Ru(r,s,E,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var N=h.dgst;return h=N,w=Error(t(419)),h=jf(w,h,void 0),Ru(r,s,E,h)}if(N=(E&r.childLanes)!==0,jn||N){if(h=gn,h!==null){switch(E&-E){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=v&(h.suspendedLanes|E)?0:v,v!==0&&v!==w.retryLane&&(w.retryLane=v,or(r,v),Ai(h,r,v,-1))}return ch(),h=jf(Error(t(421))),Ru(r,s,E,h)}return v.data==="$?"?(s.flags|=128,s.child=r.child,s=iE.bind(null,r),v._reactRetry=s,null):(r=w.treeContext,Jn=Ar(v.nextSibling),Qn=s,jt=!0,bi=null,r!==null&&(ci[di++]=rr,ci[di++]=sr,ci[di++]=ps,rr=r.id,sr=r.overflow,ps=s),s=qf(s,h.children),s.flags|=4096,s)}function xv(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Ef(r.return,s,l)}function Yf(r,s,l,h,v){var w=r.memoizedState;w===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:v}:(w.isBackwards=s,w.rendering=null,w.renderingStartTime=0,w.last=h,w.tail=l,w.tailMode=v)}function _v(r,s,l){var h=s.pendingProps,v=h.revealOrder,w=h.tail;if(kn(r,s,h.children,l),h=Wt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&xv(r,l,s);else if(r.tag===19)xv(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(zt(Wt,h),!(s.mode&1))s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)r=l.alternate,r!==null&&bu(r)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),Yf(s,!1,v,l,w);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(r=v.alternate,r!==null&&bu(r)===null){s.child=v;break}r=v.sibling,v.sibling=l,l=v,v=r}Yf(s,!0,l,null,w);break;case"together":Yf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function lr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),xs|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Br(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Br(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function Wb(r,s,l){switch(s.tag){case 3:gv(s),ho();break;case 5:k0(s);break;case 1:Vn(s.type)&&pu(s);break;case 4:Af(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,v=s.memoizedProps.value;zt(_u,h._currentValue),h._currentValue=v;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(zt(Wt,Wt.current&1),s.flags|=128,null):l&s.child.childLanes?yv(r,s,l):(zt(Wt,Wt.current&1),r=lr(r,s,l),r!==null?r.sibling:null);zt(Wt,Wt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,r.flags&128){if(h)return _v(r,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(Wt,Wt.current),h)break;return null;case 22:case 23:return s.lanes=0,hv(r,s,l)}return lr(r,s,l)}var wv,Kf,Sv,Mv;wv=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Kf=function(){},Sv=function(r,s,l,h){var v=r.memoizedProps;if(v!==h){r=s.stateNode,vs(Vi.current);var w=null;switch(l){case"input":v=At(r,v),h=At(r,h),w=[];break;case"select":v=Y({},v,{value:void 0}),h=Y({},h,{value:void 0}),w=[];break;case"textarea":v=k(r,v),h=k(r,h),w=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=du)}Ze(l,h);var E;l=null;for(ue in v)if(!h.hasOwnProperty(ue)&&v.hasOwnProperty(ue)&&v[ue]!=null)if(ue==="style"){var N=v[ue];for(E in N)N.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?w||(w=[]):(w=w||[]).push(ue,null));for(ue in h){var W=h[ue];if(N=v!=null?v[ue]:void 0,h.hasOwnProperty(ue)&&W!==N&&(W!=null||N!=null))if(ue==="style")if(N){for(E in N)!N.hasOwnProperty(E)||W&&W.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in W)W.hasOwnProperty(E)&&N[E]!==W[E]&&(l||(l={}),l[E]=W[E])}else l||(w||(w=[]),w.push(ue,l)),l=W;else ue==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,N=N?N.__html:void 0,W!=null&&N!==W&&(w=w||[]).push(ue,W)):ue==="children"?typeof W!="string"&&typeof W!="number"||(w=w||[]).push(ue,""+W):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(W!=null&&ue==="onScroll"&&Nt("scroll",r),w||N===W||(w=[])):(w=w||[]).push(ue,W))}l&&(w=w||[]).push("style",l);var ue=w;(s.updateQueue=ue)&&(s.flags|=4)}},Mv=function(r,s,l,h){l!==h&&(s.flags|=4)};function Wa(r,s){if(!jt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Tn(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var v=r.child;v!==null;)l|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)l|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function $b(r,s,l){var h=s.pendingProps;switch(yf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return Vn(s.type)&&hu(),Tn(s),null;case 3:return h=s.stateNode,vo(),Ot(Un),Ot(bn),Rf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(yu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,bi!==null&&(ah(bi),bi=null))),Kf(r,s),Tn(s),null;case 5:Pf(s);var v=vs(Ua.current);if(l=s.type,r!==null&&s.stateNode!=null)Sv(r,s,l,h,v),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(r=vs(Vi.current),yu(s)){h=s.stateNode,l=s.type;var w=s.memoizedProps;switch(h[Ui]=s,h[Fa]=w,r=(s.mode&1)!==0,l){case"dialog":Nt("cancel",h),Nt("close",h);break;case"iframe":case"object":case"embed":Nt("load",h);break;case"video":case"audio":for(v=0;v<Da.length;v++)Nt(Da[v],h);break;case"source":Nt("error",h);break;case"img":case"image":case"link":Nt("error",h),Nt("load",h);break;case"details":Nt("toggle",h);break;case"input":Dt(h,w),Nt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!w.multiple},Nt("invalid",h);break;case"textarea":D(h,w),Nt("invalid",h)}Ze(l,w),v=null;for(var E in w)if(w.hasOwnProperty(E)){var N=w[E];E==="children"?typeof N=="string"?h.textContent!==N&&(w.suppressHydrationWarning!==!0&&cu(h.textContent,N,r),v=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(w.suppressHydrationWarning!==!0&&cu(h.textContent,N,r),v=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Nt("scroll",h)}switch(l){case"input":et(h),Oe(h,w,!0);break;case"textarea":et(h),ve(h);break;case"select":case"option":break;default:typeof w.onClick=="function"&&(h.onclick=du)}h=v,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Se(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=E.createElement(l,{is:h.is}):(r=E.createElement(l),l==="select"&&(E=r,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):r=E.createElementNS(r,l),r[Ui]=s,r[Fa]=h,wv(r,s,!1,!1),s.stateNode=r;e:{switch(E=Be(l,h),l){case"dialog":Nt("cancel",r),Nt("close",r),v=h;break;case"iframe":case"object":case"embed":Nt("load",r),v=h;break;case"video":case"audio":for(v=0;v<Da.length;v++)Nt(Da[v],r);v=h;break;case"source":Nt("error",r),v=h;break;case"img":case"image":case"link":Nt("error",r),Nt("load",r),v=h;break;case"details":Nt("toggle",r),v=h;break;case"input":Dt(r,h),v=At(r,h),Nt("invalid",r);break;case"option":v=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},v=Y({},h,{value:void 0}),Nt("invalid",r);break;case"textarea":D(r,h),v=k(r,h),Nt("invalid",r);break;default:v=h}Ze(l,v),N=v;for(w in N)if(N.hasOwnProperty(w)){var W=N[w];w==="style"?Ie(r,W):w==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&de(r,W)):w==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&ke(r,W):typeof W=="number"&&ke(r,""+W):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(o.hasOwnProperty(w)?W!=null&&w==="onScroll"&&Nt("scroll",r):W!=null&&L(r,w,W,E))}switch(l){case"input":et(r),Oe(r,h,!1);break;case"textarea":et(r),ve(r);break;case"option":h.value!=null&&r.setAttribute("value",""+me(h.value));break;case"select":r.multiple=!!h.multiple,w=h.value,w!=null?rt(r,!!h.multiple,w,!1):h.defaultValue!=null&&rt(r,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=du)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(r&&s.stateNode!=null)Mv(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(Ua.current),vs(Vi.current),yu(s)){if(h=s.stateNode,l=s.memoizedProps,h[Ui]=s,(w=h.nodeValue!==l)&&(r=Qn,r!==null))switch(r.tag){case 3:cu(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&cu(h.nodeValue,l,(r.mode&1)!==0)}w&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ui]=s,s.stateNode=h}return Tn(s),null;case 13:if(Ot(Wt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(jt&&Jn!==null&&s.mode&1&&!(s.flags&128))T0(),ho(),s.flags|=98560,w=!1;else if(w=yu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!w)throw Error(t(318));if(w=s.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error(t(317));w[Ui]=s}else ho(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Tn(s),w=!1}else bi!==null&&(ah(bi),bi=null),w=!0;if(!w)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Wt.current&1?cn===0&&(cn=3):ch())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return vo(),Kf(r,s),r===null&&Ia(s.stateNode.containerInfo),Tn(s),null;case 10:return bf(s.type._context),Tn(s),null;case 17:return Vn(s.type)&&hu(),Tn(s),null;case 19:if(Ot(Wt),w=s.memoizedState,w===null)return Tn(s),null;if(h=(s.flags&128)!==0,E=w.rendering,E===null)if(h)Wa(w,!1);else{if(cn!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(E=bu(r),E!==null){for(s.flags|=128,Wa(w,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)w=l,r=h,w.flags&=14680066,E=w.alternate,E===null?(w.childLanes=0,w.lanes=r,w.child=null,w.subtreeFlags=0,w.memoizedProps=null,w.memoizedState=null,w.updateQueue=null,w.dependencies=null,w.stateNode=null):(w.childLanes=E.childLanes,w.lanes=E.lanes,w.child=E.child,w.subtreeFlags=0,w.deletions=null,w.memoizedProps=E.memoizedProps,w.memoizedState=E.memoizedState,w.updateQueue=E.updateQueue,w.type=E.type,r=E.dependencies,w.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return zt(Wt,Wt.current&1|2),s.child}r=r.sibling}w.tail!==null&&it()>wo&&(s.flags|=128,h=!0,Wa(w,!1),s.lanes=4194304)}else{if(!h)if(r=bu(E),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Wa(w,!0),w.tail===null&&w.tailMode==="hidden"&&!E.alternate&&!jt)return Tn(s),null}else 2*it()-w.renderingStartTime>wo&&l!==1073741824&&(s.flags|=128,h=!0,Wa(w,!1),s.lanes=4194304);w.isBackwards?(E.sibling=s.child,s.child=E):(l=w.last,l!==null?l.sibling=E:s.child=E,w.last=E)}return w.tail!==null?(s=w.tail,w.rendering=s,w.tail=s.sibling,w.renderingStartTime=it(),s.sibling=null,l=Wt.current,zt(Wt,h?l&1|2:l&1),s):(Tn(s),null);case 22:case 23:return uh(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?ei&1073741824&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Xb(r,s){switch(yf(s),s.tag){case 1:return Vn(s.type)&&hu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return vo(),Ot(Un),Ot(bn),Rf(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Pf(s),null;case 13:if(Ot(Wt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ho()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ot(Wt),null;case 4:return vo(),null;case 10:return bf(s.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var Iu=!1,Cn=!1,qb=typeof WeakSet=="function"?WeakSet:Set,$e=null;function xo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Kt(r,s,h)}else l.current=null}function Zf(r,s,l){try{l()}catch(h){Kt(r,s,h)}}var bv=!1;function Yb(r,s){if(uf=Jl,r=n0(),ef(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var v=h.anchorOffset,w=h.focusNode;h=h.focusOffset;try{l.nodeType,w.nodeType}catch{l=null;break e}var E=0,N=-1,W=-1,ue=0,Ce=0,Ae=r,Ee=null;t:for(;;){for(var je;Ae!==l||v!==0&&Ae.nodeType!==3||(N=E+v),Ae!==w||h!==0&&Ae.nodeType!==3||(W=E+h),Ae.nodeType===3&&(E+=Ae.nodeValue.length),(je=Ae.firstChild)!==null;)Ee=Ae,Ae=je;for(;;){if(Ae===r)break t;if(Ee===l&&++ue===v&&(N=E),Ee===w&&++Ce===h&&(W=E),(je=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=je}l=N===-1||W===-1?null:{start:N,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(cf={focusedElem:r,selectionRange:l},Jl=!1,$e=s;$e!==null;)if(s=$e,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,$e=r;else for(;$e!==null;){s=$e;try{var Xe=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,tn=Xe.memoizedState,ie=s.stateNode,K=ie.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Ei(s.type,Ke),tn);ie.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Kt(s,s.return,Re)}if(r=s.sibling,r!==null){r.return=s.return,$e=r;break}$e=s.return}return Xe=bv,bv=!1,Xe}function $a(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&r)===r){var w=v.destroy;v.destroy=void 0,w!==void 0&&Zf(s,l,w)}v=v.next}while(v!==h)}}function ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Qf(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Ev(r){var s=r.alternate;s!==null&&(r.alternate=null,Ev(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Ui],delete s[Fa],delete s[pf],delete s[Rb],delete s[Db])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Tv(r){return r.tag===5||r.tag===3||r.tag===4}function Cv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Tv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Jf(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=du));else if(h!==4&&(r=r.child,r!==null))for(Jf(r,s,l),r=r.sibling;r!==null;)Jf(r,s,l),r=r.sibling}function eh(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(eh(r,s,l),r=r.sibling;r!==null;)eh(r,s,l),r=r.sibling}var _n=null,Ti=!1;function kr(r,s,l){for(l=l.child;l!==null;)Av(r,s,l),l=l.sibling}function Av(r,s,l){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ft,l)}catch{}switch(l.tag){case 5:Cn||xo(l,s);case 6:var h=_n,v=Ti;_n=null,kr(r,s,l),_n=h,Ti=v,_n!==null&&(Ti?(r=_n,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):_n.removeChild(l.stateNode));break;case 18:_n!==null&&(Ti?(r=_n,l=l.stateNode,r.nodeType===8?hf(r.parentNode,l):r.nodeType===1&&hf(r,l),ba(r)):hf(_n,l.stateNode));break;case 4:h=_n,v=Ti,_n=l.stateNode.containerInfo,Ti=!0,kr(r,s,l),_n=h,Ti=v;break;case 0:case 11:case 14:case 15:if(!Cn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var w=v,E=w.destroy;w=w.tag,E!==void 0&&(w&2||w&4)&&Zf(l,s,E),v=v.next}while(v!==h)}kr(r,s,l);break;case 1:if(!Cn&&(xo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(N){Kt(l,s,N)}kr(r,s,l);break;case 21:kr(r,s,l);break;case 22:l.mode&1?(Cn=(h=Cn)||l.memoizedState!==null,kr(r,s,l),Cn=h):kr(r,s,l);break;default:kr(r,s,l)}}function Pv(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new qb),s.forEach(function(h){var v=rE.bind(null,r,h);l.has(h)||(l.add(h),h.then(v,v))})}}function Ci(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var v=l[h];try{var w=r,E=s,N=E;e:for(;N!==null;){switch(N.tag){case 5:_n=N.stateNode,Ti=!1;break e;case 3:_n=N.stateNode.containerInfo,Ti=!0;break e;case 4:_n=N.stateNode.containerInfo,Ti=!0;break e}N=N.return}if(_n===null)throw Error(t(160));Av(w,E,v),_n=null,Ti=!1;var W=v.alternate;W!==null&&(W.return=null),v.return=null}catch(ue){Kt(v,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Lv(s,r),s=s.sibling}function Lv(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ci(s,r),Gi(r),h&4){try{$a(3,r,r.return),ku(3,r)}catch(Ke){Kt(r,r.return,Ke)}try{$a(5,r,r.return)}catch(Ke){Kt(r,r.return,Ke)}}break;case 1:Ci(s,r),Gi(r),h&512&&l!==null&&xo(l,l.return);break;case 5:if(Ci(s,r),Gi(r),h&512&&l!==null&&xo(l,l.return),r.flags&32){var v=r.stateNode;try{ke(v,"")}catch(Ke){Kt(r,r.return,Ke)}}if(h&4&&(v=r.stateNode,v!=null)){var w=r.memoizedProps,E=l!==null?l.memoizedProps:w,N=r.type,W=r.updateQueue;if(r.updateQueue=null,W!==null)try{N==="input"&&w.type==="radio"&&w.name!=null&&It(v,w),Be(N,E);var ue=Be(N,w);for(E=0;E<W.length;E+=2){var Ce=W[E],Ae=W[E+1];Ce==="style"?Ie(v,Ae):Ce==="dangerouslySetInnerHTML"?de(v,Ae):Ce==="children"?ke(v,Ae):L(v,Ce,Ae,ue)}switch(N){case"input":Jt(v,w);break;case"textarea":le(v,w);break;case"select":var Ee=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!w.multiple;var je=w.value;je!=null?rt(v,!!w.multiple,je,!1):Ee!==!!w.multiple&&(w.defaultValue!=null?rt(v,!!w.multiple,w.defaultValue,!0):rt(v,!!w.multiple,w.multiple?[]:"",!1))}v[Fa]=w}catch(Ke){Kt(r,r.return,Ke)}}break;case 6:if(Ci(s,r),Gi(r),h&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,w=r.memoizedProps;try{v.nodeValue=w}catch(Ke){Kt(r,r.return,Ke)}}break;case 3:if(Ci(s,r),Gi(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{ba(s.containerInfo)}catch(Ke){Kt(r,r.return,Ke)}break;case 4:Ci(s,r),Gi(r);break;case 13:Ci(s,r),Gi(r),v=r.child,v.flags&8192&&(w=v.memoizedState!==null,v.stateNode.isHidden=w,!w||v.alternate!==null&&v.alternate.memoizedState!==null||(ih=it())),h&4&&Pv(r);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,r.mode&1?(Cn=(ue=Cn)||Ce,Ci(s,r),Cn=ue):Ci(s,r),Gi(r),h&8192){if(ue=r.memoizedState!==null,(r.stateNode.isHidden=ue)&&!Ce&&r.mode&1)for($e=r,Ce=r.child;Ce!==null;){for(Ae=$e=Ce;$e!==null;){switch(Ee=$e,je=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:$a(4,Ee,Ee.return);break;case 1:xo(Ee,Ee.return);var Xe=Ee.stateNode;if(typeof Xe.componentWillUnmount=="function"){h=Ee,l=Ee.return;try{s=h,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ke){Kt(h,l,Ke)}}break;case 5:xo(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Iv(Ae);continue}}je!==null?(je.return=Ee,$e=je):Iv(Ae)}Ce=Ce.sibling}e:for(Ce=null,Ae=r;;){if(Ae.tag===5){if(Ce===null){Ce=Ae;try{v=Ae.stateNode,ue?(w=v.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"):(N=Ae.stateNode,W=Ae.memoizedProps.style,E=W!=null&&W.hasOwnProperty("display")?W.display:null,N.style.display=H("display",E))}catch(Ke){Kt(r,r.return,Ke)}}}else if(Ae.tag===6){if(Ce===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(Ke){Kt(r,r.return,Ke)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===r)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===r)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===r)break e;Ce===Ae&&(Ce=null),Ae=Ae.return}Ce===Ae&&(Ce=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ci(s,r),Gi(r),h&4&&Pv(r);break;case 21:break;default:Ci(s,r),Gi(r)}}function Gi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Tv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(ke(v,""),h.flags&=-33);var w=Cv(r);eh(r,w,v);break;case 3:case 4:var E=h.stateNode.containerInfo,N=Cv(r);Jf(r,N,E);break;default:throw Error(t(161))}}catch(W){Kt(r,r.return,W)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Kb(r,s,l){$e=r,Rv(r)}function Rv(r,s,l){for(var h=(r.mode&1)!==0;$e!==null;){var v=$e,w=v.child;if(v.tag===22&&h){var E=v.memoizedState!==null||Iu;if(!E){var N=v.alternate,W=N!==null&&N.memoizedState!==null||Cn;N=Iu;var ue=Cn;if(Iu=E,(Cn=W)&&!ue)for($e=v;$e!==null;)E=$e,W=E.child,E.tag===22&&E.memoizedState!==null?kv(v):W!==null?(W.return=E,$e=W):kv(v);for(;w!==null;)$e=w,Rv(w),w=w.sibling;$e=v,Iu=N,Cn=ue}Dv(r)}else v.subtreeFlags&8772&&w!==null?(w.return=v,$e=w):Dv(r)}}function Dv(r){for(;$e!==null;){var s=$e;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Cn||ku(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Cn)if(l===null)h.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:Ei(s.type,l.memoizedProps);h.componentDidUpdate(v,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var w=s.updateQueue;w!==null&&I0(s,w,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}I0(s,E,l)}break;case 5:var N=s.stateNode;if(l===null&&s.flags&4){l=N;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Ce=ue.memoizedState;if(Ce!==null){var Ae=Ce.dehydrated;Ae!==null&&ba(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&Qf(s)}catch(Ee){Kt(s,s.return,Ee)}}if(s===r){$e=null;break}if(l=s.sibling,l!==null){l.return=s.return,$e=l;break}$e=s.return}}function Iv(r){for(;$e!==null;){var s=$e;if(s===r){$e=null;break}var l=s.sibling;if(l!==null){l.return=s.return,$e=l;break}$e=s.return}}function kv(r){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{ku(4,s)}catch(W){Kt(s,l,W)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var v=s.return;try{h.componentDidMount()}catch(W){Kt(s,v,W)}}var w=s.return;try{Qf(s)}catch(W){Kt(s,w,W)}break;case 5:var E=s.return;try{Qf(s)}catch(W){Kt(s,E,W)}}}catch(W){Kt(s,s.return,W)}if(s===r){$e=null;break}var N=s.sibling;if(N!==null){N.return=s.return,$e=N;break}$e=s.return}}var Zb=Math.ceil,Fu=R.ReactCurrentDispatcher,th=R.ReactCurrentOwner,pi=R.ReactCurrentBatchConfig,Tt=0,gn=null,sn=null,wn=0,ei=0,_o=Pr(0),cn=0,Xa=null,xs=0,zu=0,nh=0,qa=null,Gn=null,ih=0,wo=1/0,ur=null,Nu=!1,rh=null,Fr=null,Ou=!1,zr=null,Bu=0,Ya=0,sh=null,Uu=-1,Vu=0;function Fn(){return Tt&6?it():Uu!==-1?Uu:Uu=it()}function Nr(r){return r.mode&1?Tt&2&&wn!==0?wn&-wn:kb.transition!==null?(Vu===0&&(Vu=Cg()),Vu):(r=Rt,r!==0||(r=window.event,r=r===void 0?16:zg(r.type)),r):1}function Ai(r,s,l,h){if(50<Ya)throw Ya=0,sh=null,Error(t(185));xa(r,l,h),(!(Tt&2)||r!==gn)&&(r===gn&&(!(Tt&2)&&(zu|=l),cn===4&&Or(r,wn)),Hn(r,h),l===1&&Tt===0&&!(s.mode&1)&&(wo=it()+500,mu&&Rr()))}function Hn(r,s){var l=r.callbackNode;kM(r,s);var h=Kl(r,r===gn?wn:0);if(h===0)l!==null&&qn(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&qn(l),s===1)r.tag===0?Ib(zv.bind(null,r)):w0(zv.bind(null,r)),Pb(function(){!(Tt&6)&&Rr()}),l=null;else{switch(Ag(h)){case 1:l=ct;break;case 4:l=Pt;break;case 16:l=pn;break;case 536870912:l=kt;break;default:l=pn}l=Hv(l,Fv.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Fv(r,s){if(Uu=-1,Vu=0,Tt&6)throw Error(t(327));var l=r.callbackNode;if(So()&&r.callbackNode!==l)return null;var h=Kl(r,r===gn?wn:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=ju(r,h);else{s=h;var v=Tt;Tt|=2;var w=Ov();(gn!==r||wn!==s)&&(ur=null,wo=it()+500,ws(r,s));do try{eE();break}catch(N){Nv(r,N)}while(!0);Mf(),Fu.current=w,Tt=v,sn!==null?s=0:(gn=null,wn=0,s=cn)}if(s!==0){if(s===2&&(v=Od(r),v!==0&&(h=v,s=oh(r,v))),s===1)throw l=Xa,ws(r,0),Or(r,h),Hn(r,it()),l;if(s===6)Or(r,h);else{if(v=r.current.alternate,!(h&30)&&!Qb(v)&&(s=ju(r,h),s===2&&(w=Od(r),w!==0&&(h=w,s=oh(r,w))),s===1))throw l=Xa,ws(r,0),Or(r,h),Hn(r,it()),l;switch(r.finishedWork=v,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ss(r,Gn,ur);break;case 3:if(Or(r,h),(h&130023424)===h&&(s=ih+500-it(),10<s)){if(Kl(r,0)!==0)break;if(v=r.suspendedLanes,(v&h)!==h){Fn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=ff(Ss.bind(null,r,Gn,ur),s);break}Ss(r,Gn,ur);break;case 4:if(Or(r,h),(h&4194240)===h)break;for(s=r.eventTimes,v=-1;0<h;){var E=31-Yt(h);w=1<<E,E=s[E],E>v&&(v=E),h&=~w}if(h=v,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Zb(h/1960))-h,10<h){r.timeoutHandle=ff(Ss.bind(null,r,Gn,ur),h);break}Ss(r,Gn,ur);break;case 5:Ss(r,Gn,ur);break;default:throw Error(t(329))}}}return Hn(r,it()),r.callbackNode===l?Fv.bind(null,r):null}function oh(r,s){var l=qa;return r.current.memoizedState.isDehydrated&&(ws(r,s).flags|=256),r=ju(r,s),r!==2&&(s=Gn,Gn=l,s!==null&&ah(s)),r}function ah(r){Gn===null?Gn=r:Gn.push.apply(Gn,r)}function Qb(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var v=l[h],w=v.getSnapshot;v=v.value;try{if(!Mi(w(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Or(r,s){for(s&=~nh,s&=~zu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Yt(s),h=1<<l;r[l]=-1,s&=~h}}function zv(r){if(Tt&6)throw Error(t(327));So();var s=Kl(r,0);if(!(s&1))return Hn(r,it()),null;var l=ju(r,s);if(r.tag!==0&&l===2){var h=Od(r);h!==0&&(s=h,l=oh(r,h))}if(l===1)throw l=Xa,ws(r,0),Or(r,s),Hn(r,it()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ss(r,Gn,ur),Hn(r,it()),null}function lh(r,s){var l=Tt;Tt|=1;try{return r(s)}finally{Tt=l,Tt===0&&(wo=it()+500,mu&&Rr())}}function _s(r){zr!==null&&zr.tag===0&&!(Tt&6)&&So();var s=Tt;Tt|=1;var l=pi.transition,h=Rt;try{if(pi.transition=null,Rt=1,r)return r()}finally{Rt=h,pi.transition=l,Tt=s,!(Tt&6)&&Rr()}}function uh(){ei=_o.current,Ot(_o)}function ws(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,Ab(l)),sn!==null)for(l=sn.return;l!==null;){var h=l;switch(yf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&hu();break;case 3:vo(),Ot(Un),Ot(bn),Rf();break;case 5:Pf(h);break;case 4:vo();break;case 13:Ot(Wt);break;case 19:Ot(Wt);break;case 10:bf(h.type._context);break;case 22:case 23:uh()}l=l.return}if(gn=r,sn=r=Br(r.current,null),wn=ei=s,cn=0,Xa=null,nh=zu=xs=0,Gn=qa=null,gs!==null){for(s=0;s<gs.length;s++)if(l=gs[s],h=l.interleaved,h!==null){l.interleaved=null;var v=h.next,w=l.pending;if(w!==null){var E=w.next;w.next=v,h.next=E}l.pending=h}gs=null}return r}function Nv(r,s){do{var l=sn;try{if(Mf(),Eu.current=Pu,Tu){for(var h=$t.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}Tu=!1}if(ys=0,mn=un=$t=null,Va=!1,ja=0,th.current=null,l===null||l.return===null){cn=1,Xa=s,sn=null;break}e:{var w=r,E=l.return,N=l,W=s;if(s=wn,N.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ue=W,Ce=N,Ae=Ce.tag;if(!(Ce.mode&1)&&(Ae===0||Ae===11||Ae===15)){var Ee=Ce.alternate;Ee?(Ce.updateQueue=Ee.updateQueue,Ce.memoizedState=Ee.memoizedState,Ce.lanes=Ee.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var je=lv(E);if(je!==null){je.flags&=-257,uv(je,E,N,w,s),je.mode&1&&av(w,ue,s),s=je,W=ue;var Xe=s.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(W),s.updateQueue=Ke}else Xe.add(W);break e}else{if(!(s&1)){av(w,ue,s),ch();break e}W=Error(t(426))}}else if(jt&&N.mode&1){var tn=lv(E);if(tn!==null){!(tn.flags&65536)&&(tn.flags|=256),uv(tn,E,N,w,s),wf(yo(W,N));break e}}w=W=yo(W,N),cn!==4&&(cn=2),qa===null?qa=[w]:qa.push(w),w=E;do{switch(w.tag){case 3:w.flags|=65536,s&=-s,w.lanes|=s;var ie=sv(w,W,s);D0(w,ie);break e;case 1:N=W;var K=w.type,se=w.stateNode;if(!(w.flags&128)&&(typeof K.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Fr===null||!Fr.has(se)))){w.flags|=65536,s&=-s,w.lanes|=s;var Re=ov(w,N,s);D0(w,Re);break e}}w=w.return}while(w!==null)}Uv(l)}catch(Je){s=Je,sn===l&&l!==null&&(sn=l=l.return);continue}break}while(!0)}function Ov(){var r=Fu.current;return Fu.current=Pu,r===null?Pu:r}function ch(){(cn===0||cn===3||cn===2)&&(cn=4),gn===null||!(xs&268435455)&&!(zu&268435455)||Or(gn,wn)}function ju(r,s){var l=Tt;Tt|=2;var h=Ov();(gn!==r||wn!==s)&&(ur=null,ws(r,s));do try{Jb();break}catch(v){Nv(r,v)}while(!0);if(Mf(),Tt=l,Fu.current=h,sn!==null)throw Error(t(261));return gn=null,wn=0,cn}function Jb(){for(;sn!==null;)Bv(sn)}function eE(){for(;sn!==null&&!Bn();)Bv(sn)}function Bv(r){var s=Gv(r.alternate,r,ei);r.memoizedProps=r.pendingProps,s===null?Uv(r):sn=s,th.current=null}function Uv(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=Xb(l,s),l!==null){l.flags&=32767,sn=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{cn=6,sn=null;return}}else if(l=$b(l,s,ei),l!==null){sn=l;return}if(s=s.sibling,s!==null){sn=s;return}sn=s=r}while(s!==null);cn===0&&(cn=5)}function Ss(r,s,l){var h=Rt,v=pi.transition;try{pi.transition=null,Rt=1,tE(r,s,l,h)}finally{pi.transition=v,Rt=h}return null}function tE(r,s,l,h){do So();while(zr!==null);if(Tt&6)throw Error(t(327));l=r.finishedWork;var v=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var w=l.lanes|l.childLanes;if(FM(r,w),r===gn&&(sn=gn=null,wn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Ou||(Ou=!0,Hv(pn,function(){return So(),null})),w=(l.flags&15990)!==0,l.subtreeFlags&15990||w){w=pi.transition,pi.transition=null;var E=Rt;Rt=1;var N=Tt;Tt|=4,th.current=null,Yb(r,l),Lv(l,r),wb(cf),Jl=!!uf,cf=uf=null,r.current=l,Kb(l),rn(),Tt=N,Rt=E,pi.transition=w}else r.current=l;if(Ou&&(Ou=!1,zr=r,Bu=v),w=r.pendingLanes,w===0&&(Fr=null),ds(l.stateNode),Hn(r,it()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)v=s[l],h(v.value,{componentStack:v.stack,digest:v.digest});if(Nu)throw Nu=!1,r=rh,rh=null,r;return Bu&1&&r.tag!==0&&So(),w=r.pendingLanes,w&1?r===sh?Ya++:(Ya=0,sh=r):Ya=0,Rr(),null}function So(){if(zr!==null){var r=Ag(Bu),s=pi.transition,l=Rt;try{if(pi.transition=null,Rt=16>r?16:r,zr===null)var h=!1;else{if(r=zr,zr=null,Bu=0,Tt&6)throw Error(t(331));var v=Tt;for(Tt|=4,$e=r.current;$e!==null;){var w=$e,E=w.child;if($e.flags&16){var N=w.deletions;if(N!==null){for(var W=0;W<N.length;W++){var ue=N[W];for($e=ue;$e!==null;){var Ce=$e;switch(Ce.tag){case 0:case 11:case 15:$a(8,Ce,w)}var Ae=Ce.child;if(Ae!==null)Ae.return=Ce,$e=Ae;else for(;$e!==null;){Ce=$e;var Ee=Ce.sibling,je=Ce.return;if(Ev(Ce),Ce===ue){$e=null;break}if(Ee!==null){Ee.return=je,$e=Ee;break}$e=je}}}var Xe=w.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var tn=Ke.sibling;Ke.sibling=null,Ke=tn}while(Ke!==null)}}$e=w}}if(w.subtreeFlags&2064&&E!==null)E.return=w,$e=E;else e:for(;$e!==null;){if(w=$e,w.flags&2048)switch(w.tag){case 0:case 11:case 15:$a(9,w,w.return)}var ie=w.sibling;if(ie!==null){ie.return=w.return,$e=ie;break e}$e=w.return}}var K=r.current;for($e=K;$e!==null;){E=$e;var se=E.child;if(E.subtreeFlags&2064&&se!==null)se.return=E,$e=se;else e:for(E=K;$e!==null;){if(N=$e,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:ku(9,N)}}catch(Je){Kt(N,N.return,Je)}if(N===E){$e=null;break e}var Re=N.sibling;if(Re!==null){Re.return=N.return,$e=Re;break e}$e=N.return}}if(Tt=v,Rr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ft,r)}catch{}h=!0}return h}finally{Rt=l,pi.transition=s}}return!1}function Vv(r,s,l){s=yo(l,s),s=sv(r,s,1),r=Ir(r,s,1),s=Fn(),r!==null&&(xa(r,1,s),Hn(r,s))}function Kt(r,s,l){if(r.tag===3)Vv(r,r,l);else for(;s!==null;){if(s.tag===3){Vv(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Fr===null||!Fr.has(h))){r=yo(l,r),r=ov(s,r,1),s=Ir(s,r,1),r=Fn(),s!==null&&(xa(s,1,r),Hn(s,r));break}}s=s.return}}function nE(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Fn(),r.pingedLanes|=r.suspendedLanes&l,gn===r&&(wn&l)===l&&(cn===4||cn===3&&(wn&130023424)===wn&&500>it()-ih?ws(r,0):nh|=l),Hn(r,s)}function jv(r,s){s===0&&(r.mode&1?(s=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):s=1);var l=Fn();r=or(r,s),r!==null&&(xa(r,s,l),Hn(r,l))}function iE(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),jv(r,l)}function rE(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,v=r.memoizedState;v!==null&&(l=v.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),jv(r,l)}var Gv;Gv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Un.current)jn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return jn=!1,Wb(r,s,l);jn=!!(r.flags&131072)}else jn=!1,jt&&s.flags&1048576&&S0(s,vu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Du(r,s),r=s.pendingProps;var v=uo(s,bn.current);go(s,l),v=kf(null,s,h,r,v,l);var w=Ff();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Vn(h)?(w=!0,pu(s)):w=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Cf(s),v.updater=Lu,s.stateNode=v,v._reactInternals=s,Vf(s,h,r,l),s=Wf(null,s,h,!0,w,l)):(s.tag=0,jt&&w&&vf(s),kn(null,s,v,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,v=h._init,h=v(h._payload),s.type=h,v=s.tag=oE(h),r=Ei(h,r),v){case 0:s=Hf(null,s,h,r,l);break e;case 1:s=mv(null,s,h,r,l);break e;case 11:s=cv(null,s,h,r,l);break e;case 14:s=dv(null,s,h,Ei(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,v=s.pendingProps,v=s.elementType===h?v:Ei(h,v),Hf(r,s,h,v,l);case 1:return h=s.type,v=s.pendingProps,v=s.elementType===h?v:Ei(h,v),mv(r,s,h,v,l);case 3:e:{if(gv(s),r===null)throw Error(t(387));h=s.pendingProps,w=s.memoizedState,v=w.element,R0(r,s),Mu(s,h,null,l);var E=s.memoizedState;if(h=E.element,w.isDehydrated)if(w={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=w,s.memoizedState=w,s.flags&256){v=yo(Error(t(423)),s),s=vv(r,s,h,l,v);break e}else if(h!==v){v=yo(Error(t(424)),s),s=vv(r,s,h,l,v);break e}else for(Jn=Ar(s.stateNode.containerInfo.firstChild),Qn=s,jt=!0,bi=null,l=P0(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ho(),h===v){s=lr(r,s,l);break e}kn(r,s,h,l)}s=s.child}return s;case 5:return k0(s),r===null&&_f(s),h=s.type,v=s.pendingProps,w=r!==null?r.memoizedProps:null,E=v.children,df(h,v)?E=null:w!==null&&df(h,w)&&(s.flags|=32),pv(r,s),kn(r,s,E,l),s.child;case 6:return r===null&&_f(s),null;case 13:return yv(r,s,l);case 4:return Af(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=po(s,null,h,l):kn(r,s,h,l),s.child;case 11:return h=s.type,v=s.pendingProps,v=s.elementType===h?v:Ei(h,v),cv(r,s,h,v,l);case 7:return kn(r,s,s.pendingProps,l),s.child;case 8:return kn(r,s,s.pendingProps.children,l),s.child;case 12:return kn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,v=s.pendingProps,w=s.memoizedProps,E=v.value,zt(_u,h._currentValue),h._currentValue=E,w!==null)if(Mi(w.value,E)){if(w.children===v.children&&!Un.current){s=lr(r,s,l);break e}}else for(w=s.child,w!==null&&(w.return=s);w!==null;){var N=w.dependencies;if(N!==null){E=w.child;for(var W=N.firstContext;W!==null;){if(W.context===h){if(w.tag===1){W=ar(-1,l&-l),W.tag=2;var ue=w.updateQueue;if(ue!==null){ue=ue.shared;var Ce=ue.pending;Ce===null?W.next=W:(W.next=Ce.next,Ce.next=W),ue.pending=W}}w.lanes|=l,W=w.alternate,W!==null&&(W.lanes|=l),Ef(w.return,l,s),N.lanes|=l;break}W=W.next}}else if(w.tag===10)E=w.type===s.type?null:w.child;else if(w.tag===18){if(E=w.return,E===null)throw Error(t(341));E.lanes|=l,N=E.alternate,N!==null&&(N.lanes|=l),Ef(E,l,s),E=w.sibling}else E=w.child;if(E!==null)E.return=w;else for(E=w;E!==null;){if(E===s){E=null;break}if(w=E.sibling,w!==null){w.return=E.return,E=w;break}E=E.return}w=E}kn(r,s,v.children,l),s=s.child}return s;case 9:return v=s.type,h=s.pendingProps.children,go(s,l),v=fi(v),h=h(v),s.flags|=1,kn(r,s,h,l),s.child;case 14:return h=s.type,v=Ei(h,s.pendingProps),v=Ei(h.type,v),dv(r,s,h,v,l);case 15:return fv(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,v=s.pendingProps,v=s.elementType===h?v:Ei(h,v),Du(r,s),s.tag=1,Vn(h)?(r=!0,pu(s)):r=!1,go(s,l),iv(s,h,v),Vf(s,h,v,l),Wf(null,s,h,!0,r,l);case 19:return _v(r,s,l);case 22:return hv(r,s,l)}throw Error(t(156,s.tag))};function Hv(r,s){return en(r,s)}function sE(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(r,s,l,h){return new sE(r,s,l,h)}function dh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function oE(r){if(typeof r=="function")return dh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Te)return 11;if(r===he)return 14}return 2}function Br(r,s){var l=r.alternate;return l===null?(l=mi(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Gu(r,s,l,h,v,w){var E=2;if(h=r,typeof r=="function")dh(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case O:return Ms(l.children,v,w,s);case C:E=8,v|=8;break;case z:return r=mi(12,l,s,v|2),r.elementType=z,r.lanes=w,r;case _e:return r=mi(13,l,s,v),r.elementType=_e,r.lanes=w,r;case J:return r=mi(19,l,s,v),r.elementType=J,r.lanes=w,r;case re:return Hu(l,v,w,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case te:E=10;break e;case ne:E=9;break e;case Te:E=11;break e;case he:E=14;break e;case oe:E=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=mi(E,l,s,v),s.elementType=r,s.type=h,s.lanes=w,s}function Ms(r,s,l,h){return r=mi(7,r,h,s),r.lanes=l,r}function Hu(r,s,l,h){return r=mi(22,r,h,s),r.elementType=re,r.lanes=l,r.stateNode={isHidden:!1},r}function fh(r,s,l){return r=mi(6,r,null,s),r.lanes=l,r}function hh(r,s,l){return s=mi(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function aE(r,s,l,h,v){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bd(0),this.expirationTimes=Bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function ph(r,s,l,h,v,w,E,N,W){return r=new aE(r,s,l,N,W),s===1?(s=1,w===!0&&(s|=8)):s=0,w=mi(3,null,null,s),r.current=w,w.stateNode=r,w.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(w),r}function lE(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function Wv(r){if(!r)return Lr;r=r._reactInternals;e:{if(Ve(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Vn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Vn(l))return x0(r,l,s)}return s}function $v(r,s,l,h,v,w,E,N,W){return r=ph(l,h,!0,r,v,w,E,N,W),r.context=Wv(null),l=r.current,h=Fn(),v=Nr(l),w=ar(h,v),w.callback=s??null,Ir(l,w,v),r.current.lanes=v,xa(r,v,h),Hn(r,h),r}function Wu(r,s,l,h){var v=s.current,w=Fn(),E=Nr(v);return l=Wv(l),s.context===null?s.context=l:s.pendingContext=l,s=ar(w,E),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ir(v,s,E),r!==null&&(Ai(r,v,E,w),Su(r,v,E)),E}function $u(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Xv(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function mh(r,s){Xv(r,s),(r=r.alternate)&&Xv(r,s)}var qv=typeof reportError=="function"?reportError:function(r){console.error(r)};function gh(r){this._internalRoot=r}Xu.prototype.render=gh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Wu(r,s,null,null)},Xu.prototype.unmount=gh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;_s(function(){Wu(null,r,null,null)}),s[nr]=null}};function Xu(r){this._internalRoot=r}Xu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Rg();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Er.length&&s!==0&&s<Er[l].priority;l++);Er.splice(l,0,r),l===0&&kg(r)}};function vh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function qu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function uE(r,s,l,h,v){if(v){if(typeof h=="function"){var w=h;h=function(){var ue=$u(E);w.call(ue)}}var E=$v(s,h,r,0,null,!1,!1,"",Yv);return r._reactRootContainer=E,r[nr]=E.current,Ia(r.nodeType===8?r.parentNode:r),_s(),E}for(;v=r.lastChild;)r.removeChild(v);if(typeof h=="function"){var N=h;h=function(){var ue=$u(W);N.call(ue)}}var W=ph(r,0,!1,null,null,!1,!1,"",Yv);return r._reactRootContainer=W,r[nr]=W.current,Ia(r.nodeType===8?r.parentNode:r),_s(function(){Wu(s,W,l,h)}),W}function Yu(r,s,l,h,v){var w=l._reactRootContainer;if(w){var E=w;if(typeof v=="function"){var N=v;v=function(){var W=$u(E);N.call(W)}}Wu(s,E,r,v)}else E=uE(l,s,r,v,h);return $u(E)}Pg=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ya(s.pendingLanes);l!==0&&(Ud(s,l|1),Hn(s,it()),!(Tt&6)&&(wo=it()+500,Rr()))}break;case 13:_s(function(){var h=or(r,1);if(h!==null){var v=Fn();Ai(h,r,1,v)}}),mh(r,1)}},Vd=function(r){if(r.tag===13){var s=or(r,134217728);if(s!==null){var l=Fn();Ai(s,r,134217728,l)}mh(r,134217728)}},Lg=function(r){if(r.tag===13){var s=Nr(r),l=or(r,s);if(l!==null){var h=Fn();Ai(l,r,s,h)}mh(r,s)}},Rg=function(){return Rt},Dg=function(r,s){var l=Rt;try{return Rt=r,s()}finally{Rt=l}},ut=function(r,s,l){switch(s){case"input":if(Jt(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var v=fu(h);if(!v)throw Error(t(90));tt(h),Jt(h,v)}}}break;case"textarea":le(r,l);break;case"select":s=l.value,s!=null&&rt(r,!!l.multiple,s,!1)}},Js=lh,G=_s;var cE={usingClientEntryPoint:!1,Events:[za,ao,fu,hn,cs,lh]},Ka={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dE={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=mt(r),r===null?null:r.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Ft=Ku.inject(dE),ln=Ku}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE,Wn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(s))throw Error(t(200));return lE(r,s,null,l)},Wn.createRoot=function(r,s){if(!vh(r))throw Error(t(299));var l=!1,h="",v=qv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=ph(r,1,!1,null,null,l,!1,h,v),r[nr]=s.current,Ia(r.nodeType===8?r.parentNode:r),new gh(s)},Wn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=mt(s),r=r===null?null:r.stateNode,r},Wn.flushSync=function(r){return _s(r)},Wn.hydrate=function(r,s,l){if(!qu(s))throw Error(t(200));return Yu(null,r,s,!0,l)},Wn.hydrateRoot=function(r,s,l){if(!vh(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,v=!1,w="",E=qv;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(w=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=$v(s,null,r,1,l??null,v,!1,w,E),r[nr]=s.current,Ia(r),h)for(r=0;r<h.length;r++)l=h[r],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Xu(s)},Wn.render=function(r,s,l){if(!qu(s))throw Error(t(200));return Yu(null,r,s,!1,l)},Wn.unmountComponentAtNode=function(r){if(!qu(r))throw Error(t(40));return r._reactRootContainer?(_s(function(){Yu(null,null,r,!1,function(){r._reactRootContainer=null,r[nr]=null})}),!0):!1},Wn.unstable_batchedUpdates=lh,Wn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!qu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yu(r,s,l,!1,h)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var iy;function I1(){if(iy)return _h.exports;iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),_h.exports=yE(),_h.exports}var ry;function xE(){if(ry)return Zu;ry=1;var n=I1();return Zu.createRoot=n.createRoot,Zu.hydrateRoot=n.hydrateRoot,Zu}var _E=xE();const wE=D1(_E);var Qa={},sy;function SE(){if(sy)return Qa;sy=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.parse=u,Qa.serialize=f;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function u(g,_){const M=new a,x=g.length;if(x<2)return M;const y=(_==null?void 0:_.decode)||p;let S=0;do{const T=g.indexOf("=",S);if(T===-1)break;const L=g.indexOf(";",S),R=L===-1?x:L;if(T>R){S=g.lastIndexOf(";",T-1)+1;continue}const b=c(g,S,T),I=d(g,T,b),O=g.slice(b,I);if(M[O]===void 0){let C=c(g,T+1,R),z=d(g,R,C);const te=y(g.slice(C,z));M[O]=te}S=R+1}while(S<x);return M}function c(g,_,M){do{const x=g.charCodeAt(_);if(x!==32&&x!==9)return _}while(++_<M);return M}function d(g,_,M){for(;_>M;){const x=g.charCodeAt(--_);if(x!==32&&x!==9)return _+1}return M}function f(g,_,M){const x=(M==null?void 0:M.encode)||encodeURIComponent;if(!n.test(g))throw new TypeError(`argument name is invalid: ${g}`);const y=x(_);if(!e.test(y))throw new TypeError(`argument val is invalid: ${_}`);let S=g+"="+y;if(!M)return S;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);S+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);S+="; Domain="+M.domain}if(M.path){if(!i.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);S+="; Path="+M.path}if(M.expires){if(!m(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);S+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(S+="; HttpOnly"),M.secure&&(S+="; Secure"),M.partitioned&&(S+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":S+="; Priority=Low";break;case"medium":S+="; Priority=Medium";break;case"high":S+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":S+="; SameSite=Strict";break;case"lax":S+="; SameSite=Lax";break;case"none":S+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return S}function p(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function m(g){return o.call(g)==="[object Date]"}return Qa}SE();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var oy="popstate";function ME(n={}){function e(i,o){let{pathname:a,search:u,hash:c}=i.location;return El("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:is(o)}return EE(e,t,null,n)}function bt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Mn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bE(){return Math.random().toString(36).substring(2,10)}function ay(n,e){return{usr:n.state,key:n.key,idx:e}}function El(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?os(e):e,state:t,key:e&&e.key||i||bE()}}function is({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function os(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function EE(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,u=o.history,c="POP",d=null,f=p();f==null&&(f=0,u.replaceState({...u.state,idx:f},""));function p(){return(u.state||{idx:null}).idx}function m(){c="POP";let y=p(),S=y==null?null:y-f;f=y,d&&d({action:c,location:x.location,delta:S})}function g(y,S){c="PUSH";let T=El(x.location,y,S);f=p()+1;let L=ay(T,f),R=x.createHref(T);try{u.pushState(L,"",R)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(R)}a&&d&&d({action:c,location:x.location,delta:1})}function _(y,S){c="REPLACE";let T=El(x.location,y,S);f=p();let L=ay(T,f),R=x.createHref(T);u.replaceState(L,"",R),a&&d&&d({action:c,location:x.location,delta:0})}function M(y){let S=o.location.origin!=="null"?o.location.origin:o.location.href,T=typeof y=="string"?y:is(y);return T=T.replace(/ $/,"%20"),bt(S,`No window.location.(origin|href) available to create URL for href: ${T}`),new URL(T,S)}let x={get action(){return c},get location(){return n(o,u)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(oy,m),d=y,()=>{o.removeEventListener(oy,m),d=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:_,go(y){return u.go(y)}};return x}var TE=new Set(["lazy","caseSensitive","path","id","index","children"]);function CE(n){return n.index===!0}function Qc(n,e,t=[],i={}){return n.map((o,a)=>{let u=[...t,String(a)],c=typeof o.id=="string"?o.id:u.join("-");if(bt(o.index!==!0||!o.children,"Cannot specify children on an index route"),bt(!i[c],`Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`),CE(o)){let d={...o,...e(o),id:c};return i[c]=d,d}else{let d={...o,...e(o),id:c,children:void 0};return i[c]=d,o.children&&(d.children=Qc(o.children,e,u,i)),d}})}function Jr(n,e,t="/"){return Bc(n,e,t,!1)}function Bc(n,e,t,i){let o=typeof e=="string"?os(e):e,a=Oi(o.pathname||"/",t);if(a==null)return null;let u=k1(n);PE(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let f=UE(a);c=OE(u[d],f,i)}return c}function AE(n,e){let{route:t,pathname:i,params:o}=n;return{id:t.id,pathname:i,params:o,data:e[t.id],handle:t.handle}}function k1(n,e=[],t=[],i=""){let o=(a,u,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};d.relativePath.startsWith("/")&&(bt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let f=Ki([i,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(bt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),k1(a.children,e,p,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:zE(f,a.index),routesMeta:p})};return n.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,u);else for(let d of F1(a.path))o(a,u,d)}),e}function F1(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let u=F1(i.join("/")),c=[];return c.push(...u.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...u),c.map(d=>n.startsWith("/")&&d===""?"/":d)}function PE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:NE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var LE=/^:[\w-]+$/,RE=3,DE=2,IE=1,kE=10,FE=-2,ly=n=>n==="*";function zE(n,e){let t=n.split("/"),i=t.length;return t.some(ly)&&(i+=FE),e&&(i+=DE),t.filter(o=>!ly(o)).reduce((o,a)=>o+(LE.test(a)?RE:a===""?IE:kE),i)}function NE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function OE(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",u=[];for(let c=0;c<i.length;++c){let d=i[c],f=c===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",m=Jc({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),g=d.route;if(!m&&f&&t&&!i[i.length-1].route.index&&(m=Jc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!m)return null;Object.assign(o,m.params),u.push({params:o,pathname:Ki([a,m.pathname]),pathnameBase:GE(Ki([a,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(a=Ki([a,m.pathnameBase]))}return u}function Jc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=BE(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((f,{paramName:p,isOptional:m},g)=>{if(p==="*"){let M=c[g]||"";u=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const _=c[g];return m&&!_?f[p]=void 0:f[p]=(_||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:u,pattern:n}}function BE(n,e=!1,t=!0){Mn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function UE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Oi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function VE(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?os(n):n;return{pathname:t?t.startsWith("/")?t:jE(t,e):e,search:HE(i),hash:WE(o)}}function jE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Mh(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vm(n){let e=z1(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function ym(n,e,t,i=!1){let o;typeof n=="string"?o=os(n):(o={...n},bt(!o.pathname||!o.pathname.includes("?"),Mh("?","pathname","search",o)),bt(!o.pathname||!o.pathname.includes("#"),Mh("#","pathname","hash",o)),bt(!o.search||!o.search.includes("#"),Mh("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let m=e.length-1;if(!i&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}c=m>=0?e[m]:"/"}let d=VE(o,c),f=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var Ki=n=>n.join("/").replace(/\/\/+/g,"/"),GE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),HE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,WE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,ed=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function yd(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var N1=["POST","PUT","PATCH","DELETE"],$E=new Set(N1),XE=["GET",...N1],qE=new Set(XE),YE=new Set([301,302,303,307,308]),KE=new Set([307,308]),bh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ja={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QE=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),O1="remix-router-transitions",B1=Symbol("ResetLoaderData");function JE(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";bt(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=n.mapRouteProperties||QE,o={},a=Qc(n.routes,i,void 0,o),u,c=n.basename||"/",d=n.dataStrategy||rT,f=n.patchRoutesOnNavigation,p={...n.future},m=null,g=new Set,_=null,M=null,x=null,y=n.hydrationData!=null,S=Jr(a,n.history.location,c),T=null;if(S==null&&!f){let G=xi(404,{pathname:n.history.location.pathname}),{matches:ee,route:fe}=xy(a);S=ee,T={[fe.id]:G}}S&&!n.hydrationData&&Ht(S,a,n.history.location.pathname).active&&(S=null);let L;if(S)if(S.some(G=>G.route.lazy))L=!1;else if(!S.some(G=>G.route.loader))L=!0;else{let G=n.hydrationData?n.hydrationData.loaderData:null,ee=n.hydrationData?n.hydrationData.errors:null;if(ee){let fe=S.findIndex(Me=>ee[Me.route.id]!==void 0);L=S.slice(0,fe+1).every(Me=>!Ip(Me.route,G,ee))}else L=S.every(fe=>!Ip(fe.route,G,ee))}else{L=!1,S=[];let G=Ht(null,a,n.history.location.pathname);G.active&&G.matches&&(S=G.matches)}let R,b={historyAction:n.history.action,location:n.history.location,matches:S,initialized:L,navigation:bh,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||T,fetchers:new Map,blockers:new Map},I="POP",O=!1,C,z=!1,te=new Map,ne=null,Te=!1,_e=!1,J=new Set,he=new Map,oe=0,re=-1,X=new Map,q=new Set,Y=new Map,F=new Map,B=new Set,ce=new Map,xe,we=null;function V(){if(m=n.history.listen(({action:G,location:ee,delta:fe})=>{if(xe){xe(),xe=void 0;return}Mn(ce.size===0||fe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Me=Be({currentLocation:b.location,nextLocation:ee,historyAction:G});if(Me&&fe!=null){let Ge=new Promise(Ye=>{xe=Ye});n.history.go(fe*-1),Ze(Me,{state:"blocked",location:ee,proceed(){Ze(Me,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),Ge.then(()=>n.history.go(fe))},reset(){let Ye=new Map(b.blockers);Ye.set(Me,Ja),ge({blockers:Ye})}});return}return We(G,ee)}),t){mT(e,te);let G=()=>gT(e,te);e.addEventListener("pagehide",G),ne=()=>e.removeEventListener("pagehide",G)}return b.initialized||We("POP",b.location,{initialHydration:!0}),R}function ye(){m&&m(),ne&&ne(),g.clear(),C&&C.abort(),b.fetchers.forEach((G,ee)=>qe(ee)),b.blockers.forEach((G,ee)=>Pe(ee))}function me(G){return g.add(G),()=>g.delete(G)}function ge(G,ee={}){b={...b,...G};let fe=[],Me=[];b.fetchers.forEach((Ge,Ye)=>{Ge.state==="idle"&&(B.has(Ye)?fe.push(Ye):Me.push(Ye))}),[...g].forEach(Ge=>Ge(b,{deletedFetchers:fe,viewTransitionOpts:ee.viewTransitionOpts,flushSync:ee.flushSync===!0})),fe.forEach(Ge=>qe(Ge)),Me.forEach(Ge=>b.fetchers.delete(Ge))}function be(G,ee,{flushSync:fe}={}){var $,Z;let Me=b.actionData!=null&&b.navigation.formMethod!=null&&ki(b.navigation.formMethod)&&b.navigation.state==="loading"&&(($=G.state)==null?void 0:$._isRedirect)!==!0,Ge;ee.actionData?Object.keys(ee.actionData).length>0?Ge=ee.actionData:Ge=null:Me?Ge=b.actionData:Ge=null;let Ye=ee.loaderData?vy(b.loaderData,ee.loaderData,ee.matches||[],ee.errors):b.loaderData,ft=b.blockers;ft.size>0&&(ft=new Map(ft),ft.forEach((ae,Ue)=>ft.set(Ue,Ja)));let A=O===!0||b.navigation.formMethod!=null&&ki(b.navigation.formMethod)&&((Z=G.state)==null?void 0:Z._isRedirect)!==!0;u&&(a=u,u=void 0),Te||I==="POP"||(I==="PUSH"?n.history.push(G,G.state):I==="REPLACE"&&n.history.replace(G,G.state));let j;if(I==="POP"){let ae=te.get(b.location.pathname);ae&&ae.has(G.pathname)?j={currentLocation:b.location,nextLocation:G}:te.has(G.pathname)&&(j={currentLocation:G,nextLocation:b.location})}else if(z){let ae=te.get(b.location.pathname);ae?ae.add(G.pathname):(ae=new Set([G.pathname]),te.set(b.location.pathname,ae)),j={currentLocation:b.location,nextLocation:G}}ge({...ee,actionData:Ge,loaderData:Ye,historyAction:I,location:G,initialized:!0,navigation:bh,revalidation:"idle",restoreScrollPosition:yt(G,ee.matches||b.matches),preventScrollReset:A,blockers:ft},{viewTransitionOpts:j,flushSync:fe===!0}),I="POP",O=!1,z=!1,Te=!1,_e=!1,we==null||we.resolve(),we=null}async function et(G,ee){if(typeof G=="number"){n.history.go(G);return}let fe=Dp(b.location,b.matches,c,G,ee==null?void 0:ee.fromRouteId,ee==null?void 0:ee.relative),{path:Me,submission:Ge,error:Ye}=uy(!1,fe,ee),ft=b.location,A=El(b.location,Me,ee&&ee.state);A={...A,...n.history.encodeLocation(A)};let j=ee&&ee.replace!=null?ee.replace:void 0,$="PUSH";j===!0?$="REPLACE":j===!1||Ge!=null&&ki(Ge.formMethod)&&Ge.formAction===b.location.pathname+b.location.search&&($="REPLACE");let Z=ee&&"preventScrollReset"in ee?ee.preventScrollReset===!0:void 0,ae=(ee&&ee.flushSync)===!0,Ue=Be({currentLocation:ft,nextLocation:A,historyAction:$});if(Ue){Ze(Ue,{state:"blocked",location:A,proceed(){Ze(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),et(G,ee)},reset(){let Qe=new Map(b.blockers);Qe.set(Ue,Ja),ge({blockers:Qe})}});return}await We($,A,{submission:Ge,pendingError:Ye,preventScrollReset:Z,replace:ee&&ee.replace,enableViewTransition:ee&&ee.viewTransition,flushSync:ae})}function tt(){we||(we=vT()),le(),ge({revalidation:"loading"});let G=we.promise;return b.navigation.state==="submitting"?G:b.navigation.state==="idle"?(We(b.historyAction,b.location,{startUninterruptedRevalidation:!0}),G):(We(I||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:z===!0}),G)}async function We(G,ee,fe){C&&C.abort(),C=null,I=G,Te=(fe&&fe.startUninterruptedRevalidation)===!0,_t(b.location,b.matches),O=(fe&&fe.preventScrollReset)===!0,z=(fe&&fe.enableViewTransition)===!0;let Me=u||a,Ge=fe&&fe.overrideNavigation,Ye=Jr(Me,ee,c),ft=(fe&&fe.flushSync)===!0,A=Ht(Ye,Me,ee.pathname);if(A.active&&A.matches&&(Ye=A.matches),!Ye){let{error:Ve,notFoundMatches:He,route:ot}=st(ee.pathname);be(ee,{matches:He,loaderData:{},errors:{[ot.id]:Ve}},{flushSync:ft});return}if(b.initialized&&!_e&&cT(b.location,ee)&&!(fe&&fe.submission&&ki(fe.submission.formMethod))){be(ee,{matches:Ye},{flushSync:ft});return}C=new AbortController;let j=Mo(n.history,ee,C.signal,fe&&fe.submission),$;if(fe&&fe.pendingError)$=[Is(Ye).route.id,{type:"error",error:fe.pendingError}];else if(fe&&fe.submission&&ki(fe.submission.formMethod)){let Ve=await At(j,ee,fe.submission,Ye,A.active,{replace:fe.replace,flushSync:ft});if(Ve.shortCircuited)return;if(Ve.pendingActionResult){let[He,ot]=Ve.pendingActionResult;if(ri(ot)&&yd(ot.error)&&ot.error.status===404){C=null,be(ee,{matches:Ve.matches,loaderData:{},errors:{[He]:ot.error}});return}}Ye=Ve.matches||Ye,$=Ve.pendingActionResult,Ge=Eh(ee,fe.submission),ft=!1,A.active=!1,j=Mo(n.history,j.url,j.signal)}let{shortCircuited:Z,matches:ae,loaderData:Ue,errors:Qe}=await Dt(j,ee,Ye,A.active,Ge,fe&&fe.submission,fe&&fe.fetcherSubmission,fe&&fe.replace,fe&&fe.initialHydration===!0,ft,$);Z||(C=null,be(ee,{matches:ae||Ye,...yy($),loaderData:Ue,errors:Qe}))}async function At(G,ee,fe,Me,Ge,Ye={}){le();let ft=hT(ee,fe);if(ge({navigation:ft},{flushSync:Ye.flushSync===!0}),Ge){let $=await hn(Me,ee.pathname,G.signal);if($.type==="aborted")return{shortCircuited:!0};if($.type==="error"){let Z=Is($.partialMatches).route.id;return{matches:$.partialMatches,pendingActionResult:[Z,{type:"error",error:$.error}]}}else if($.matches)Me=$.matches;else{let{notFoundMatches:Z,error:ae,route:Ue}=st(ee.pathname);return{matches:Z,pendingActionResult:[Ue.id,{type:"error",error:ae}]}}}let A,j=dl(Me,ee);if(!j.route.action&&!j.route.lazy)A={type:"error",error:xi(405,{method:G.method,pathname:ee.pathname,routeId:j.route.id})};else if(A=(await k("action",b,G,[j],Me,null))[j.route.id],G.signal.aborted)return{shortCircuited:!0};if(Fs(A)){let $;return Ye&&Ye.replace!=null?$=Ye.replace:$=py(A.response.headers.get("Location"),new URL(G.url),c)===b.location.pathname+b.location.search,await rt(G,A,!0,{submission:fe,replace:$}),{shortCircuited:!0}}if(ri(A)){let $=Is(Me,j.route.id);return(Ye&&Ye.replace)!==!0&&(I="PUSH"),{matches:Me,pendingActionResult:[$.route.id,A]}}return{matches:Me,pendingActionResult:[j.route.id,A]}}async function Dt(G,ee,fe,Me,Ge,Ye,ft,A,j,$,Z){let ae=Ge||Eh(ee,Ye),Ue=Ye||ft||wy(ae),Qe=!Te&&!j;if(Me){if(Qe){let Pt=It(Z);ge({navigation:ae,...Pt!==void 0?{actionData:Pt}:{}},{flushSync:$})}let ct=await hn(fe,ee.pathname,G.signal);if(ct.type==="aborted")return{shortCircuited:!0};if(ct.type==="error"){let Pt=Is(ct.partialMatches).route.id;return{matches:ct.partialMatches,loaderData:{},errors:{[Pt]:ct.error}}}else if(ct.matches)fe=ct.matches;else{let{error:Pt,notFoundMatches:pn,route:Kn}=st(ee.pathname);return{matches:pn,loaderData:{},errors:{[Kn.id]:Pt}}}}let Ve=u||a,[He,ot]=dy(n.history,b,fe,Ue,ee,j===!0,_e,J,B,Y,q,Ve,c,Z);if(re=++oe,He.length===0&&ot.length===0){let ct=ze();return be(ee,{matches:fe,loaderData:{},errors:Z&&ri(Z[1])?{[Z[0]]:Z[1].error}:null,...yy(Z),...ct?{fetchers:new Map(b.fetchers)}:{}},{flushSync:$}),{shortCircuited:!0}}if(Qe){let ct={};if(!Me){ct.navigation=ae;let Pt=It(Z);Pt!==void 0&&(ct.actionData=Pt)}ot.length>0&&(ct.fetchers=Jt(ot)),ge(ct,{flushSync:$})}ot.forEach(ct=>{ke(ct.key),ct.controller&&he.set(ct.key,ct.controller)});let pt=()=>ot.forEach(ct=>ke(ct.key));C&&C.signal.addEventListener("abort",pt);let{loaderResults:mt,fetcherResults:Mt}=await D(b,fe,He,ot,G);if(G.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",pt),ot.forEach(ct=>he.delete(ct.key));let en=Qu(mt);if(en)return await rt(G,en.result,!0,{replace:A}),{shortCircuited:!0};if(en=Qu(Mt),en)return q.add(en.key),await rt(G,en.result,!0,{replace:A}),{shortCircuited:!0};let{loaderData:qn,errors:Bn}=gy(b,fe,mt,Z,ot,Mt);j&&b.errors&&(Bn={...b.errors,...Bn});let rn=ze(),it=H(re),Yn=rn||it||ot.length>0;return{matches:fe,loaderData:qn,errors:Bn,...Yn?{fetchers:new Map(b.fetchers)}:{}}}function It(G){if(G&&!ri(G[1]))return{[G[0]]:G[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Jt(G){return G.forEach(ee=>{let fe=b.fetchers.get(ee.key),Me=el(void 0,fe?fe.data:void 0);b.fetchers.set(ee.key,Me)}),new Map(b.fetchers)}async function Oe(G,ee,fe,Me){ke(G);let Ge=(Me&&Me.flushSync)===!0,Ye=u||a,ft=Dp(b.location,b.matches,c,fe,ee,Me==null?void 0:Me.relative),A=Jr(Ye,ft,c),j=Ht(A,Ye,ft);if(j.active&&j.matches&&(A=j.matches),!A){Se(G,ee,xi(404,{pathname:ft}),{flushSync:Ge});return}let{path:$,submission:Z,error:ae}=uy(!0,ft,Me);if(ae){Se(G,ee,ae,{flushSync:Ge});return}let Ue=dl(A,$),Qe=(Me&&Me.preventScrollReset)===!0;if(Z&&ki(Z.formMethod)){await nt(G,ee,$,Ue,A,j.active,Ge,Qe,Z);return}Y.set(G,{routeId:ee,path:$}),await gt(G,ee,$,Ue,A,j.active,Ge,Qe,Z)}async function nt(G,ee,fe,Me,Ge,Ye,ft,A,j){le(),Y.delete(G);function $(kt){if(!kt.route.action&&!kt.route.lazy){let Ft=xi(405,{method:j.formMethod,pathname:fe,routeId:ee});return Se(G,ee,Ft,{flushSync:ft}),!0}return!1}if(!Ye&&$(Me))return;let Z=b.fetchers.get(G);ve(G,pT(j,Z),{flushSync:ft});let ae=new AbortController,Ue=Mo(n.history,fe,ae.signal,j);if(Ye){let kt=await hn(Ge,fe,Ue.signal);if(kt.type==="aborted")return;if(kt.type==="error"){Se(G,ee,kt.error,{flushSync:ft});return}else if(kt.matches){if(Ge=kt.matches,Me=dl(Ge,fe),$(Me))return}else{Se(G,ee,xi(404,{pathname:fe}),{flushSync:ft});return}}he.set(G,ae);let Qe=oe,He=(await k("action",b,Ue,[Me],Ge,G))[Me.route.id];if(Ue.signal.aborted){he.get(G)===ae&&he.delete(G);return}if(B.has(G)){if(Fs(He)||ri(He)){ve(G,Kr(void 0));return}}else{if(Fs(He))if(he.delete(G),re>Qe){ve(G,Kr(void 0));return}else return q.add(G),ve(G,el(j)),rt(Ue,He,!1,{fetcherSubmission:j,preventScrollReset:A});if(ri(He)){Se(G,ee,He.error);return}}let ot=b.navigation.location||b.location,pt=Mo(n.history,ot,ae.signal),mt=u||a,Mt=b.navigation.state!=="idle"?Jr(mt,b.navigation.location,c):b.matches;bt(Mt,"Didn't find any matches after fetcher action");let en=++oe;X.set(G,en);let qn=el(j,He.data);b.fetchers.set(G,qn);let[Bn,rn]=dy(n.history,b,Mt,j,ot,!1,_e,J,B,Y,q,mt,c,[Me.route.id,He]);rn.filter(kt=>kt.key!==G).forEach(kt=>{let Ft=kt.key,ln=b.fetchers.get(Ft),ds=el(void 0,ln?ln.data:void 0);b.fetchers.set(Ft,ds),ke(Ft),kt.controller&&he.set(Ft,kt.controller)}),ge({fetchers:new Map(b.fetchers)});let it=()=>rn.forEach(kt=>ke(kt.key));ae.signal.addEventListener("abort",it);let{loaderResults:Yn,fetcherResults:ct}=await D(b,Mt,Bn,rn,pt);if(ae.signal.aborted)return;ae.signal.removeEventListener("abort",it),X.delete(G),he.delete(G),rn.forEach(kt=>he.delete(kt.key));let Pt=Qu(Yn);if(Pt)return rt(pt,Pt.result,!1,{preventScrollReset:A});if(Pt=Qu(ct),Pt)return q.add(Pt.key),rt(pt,Pt.result,!1,{preventScrollReset:A});let{loaderData:pn,errors:Kn}=gy(b,Mt,Yn,void 0,rn,ct);if(b.fetchers.has(G)){let kt=Kr(He.data);b.fetchers.set(G,kt)}H(en),b.navigation.state==="loading"&&en>re?(bt(I,"Expected pending action"),C&&C.abort(),be(b.navigation.location,{matches:Mt,loaderData:pn,errors:Kn,fetchers:new Map(b.fetchers)})):(ge({errors:Kn,loaderData:vy(b.loaderData,pn,Mt,Kn),fetchers:new Map(b.fetchers)}),_e=!1)}async function gt(G,ee,fe,Me,Ge,Ye,ft,A,j){let $=b.fetchers.get(G);ve(G,el(j,$?$.data:void 0),{flushSync:ft});let Z=new AbortController,ae=Mo(n.history,fe,Z.signal);if(Ye){let He=await hn(Ge,fe,ae.signal);if(He.type==="aborted")return;if(He.type==="error"){Se(G,ee,He.error,{flushSync:ft});return}else if(He.matches)Ge=He.matches,Me=dl(Ge,fe);else{Se(G,ee,xi(404,{pathname:fe}),{flushSync:ft});return}}he.set(G,Z);let Ue=oe,Ve=(await k("loader",b,ae,[Me],Ge,G))[Me.route.id];if(he.get(G)===Z&&he.delete(G),!ae.signal.aborted){if(B.has(G)){ve(G,Kr(void 0));return}if(Fs(Ve))if(re>Ue){ve(G,Kr(void 0));return}else{q.add(G),await rt(ae,Ve,!1,{preventScrollReset:A});return}if(ri(Ve)){Se(G,ee,Ve.error);return}ve(G,Kr(Ve.data))}}async function rt(G,ee,fe,{submission:Me,fetcherSubmission:Ge,preventScrollReset:Ye,replace:ft}={}){ee.response.headers.has("X-Remix-Revalidate")&&(_e=!0);let A=ee.response.headers.get("Location");bt(A,"Expected a Location header on the redirect Response"),A=py(A,new URL(G.url),c);let j=El(b.location,A,{_isRedirect:!0});if(t){let Ve=!1;if(ee.response.headers.has("X-Remix-Reload-Document"))Ve=!0;else if(xm.test(A)){const He=n.history.createURL(A);Ve=He.origin!==e.location.origin||Oi(He.pathname,c)==null}if(Ve){ft?e.location.replace(A):e.location.assign(A);return}}C=null;let $=ft===!0||ee.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Z,formAction:ae,formEncType:Ue}=b.navigation;!Me&&!Ge&&Z&&ae&&Ue&&(Me=wy(b.navigation));let Qe=Me||Ge;if(KE.has(ee.response.status)&&Qe&&ki(Qe.formMethod))await We($,j,{submission:{...Qe,formAction:A},preventScrollReset:Ye||O,enableViewTransition:fe?z:void 0});else{let Ve=Eh(j,Me);await We($,j,{overrideNavigation:Ve,fetcherSubmission:Ge,preventScrollReset:Ye||O,enableViewTransition:fe?z:void 0})}}async function k(G,ee,fe,Me,Ge,Ye){let ft,A={};try{ft=await sT(d,G,ee,fe,Me,Ge,Ye,o,i)}catch(j){return Me.forEach($=>{A[$.route.id]={type:"error",error:j}}),A}for(let[j,$]of Object.entries(ft))if(dT($)){let Z=$.result;A[j]={type:"redirect",response:lT(Z,fe,j,Ge,c)}}else A[j]=await aT($);return A}async function D(G,ee,fe,Me,Ge){let Ye=k("loader",G,Ge,fe,ee,null),ft=Promise.all(Me.map(async $=>{if($.matches&&$.match&&$.controller){let ae=(await k("loader",G,Mo(n.history,$.path,$.controller.signal),[$.match],$.matches,$.key))[$.match.route.id];return{[$.key]:ae}}else return Promise.resolve({[$.key]:{type:"error",error:xi(404,{pathname:$.path})}})})),A=await Ye,j=(await ft).reduce(($,Z)=>Object.assign($,Z),{});return{loaderResults:A,fetcherResults:j}}function le(){_e=!0,Y.forEach((G,ee)=>{he.has(ee)&&J.add(ee),ke(ee)})}function ve(G,ee,fe={}){b.fetchers.set(G,ee),ge({fetchers:new Map(b.fetchers)},{flushSync:(fe&&fe.flushSync)===!0})}function Se(G,ee,fe,Me={}){let Ge=Is(b.matches,ee);qe(G),ge({errors:{[Ge.route.id]:fe},fetchers:new Map(b.fetchers)},{flushSync:(Me&&Me.flushSync)===!0})}function Le(G){return F.set(G,(F.get(G)||0)+1),B.has(G)&&B.delete(G),b.fetchers.get(G)||ZE}function qe(G){let ee=b.fetchers.get(G);he.has(G)&&!(ee&&ee.state==="loading"&&X.has(G))&&ke(G),Y.delete(G),X.delete(G),q.delete(G),B.delete(G),J.delete(G),b.fetchers.delete(G)}function de(G){let ee=(F.get(G)||0)-1;ee<=0?(F.delete(G),B.add(G)):F.set(G,ee),ge({fetchers:new Map(b.fetchers)})}function ke(G){let ee=he.get(G);ee&&(ee.abort(),he.delete(G))}function Fe(G){for(let ee of G){let fe=Le(ee),Me=Kr(fe.data);b.fetchers.set(ee,Me)}}function ze(){let G=[],ee=!1;for(let fe of q){let Me=b.fetchers.get(fe);bt(Me,`Expected fetcher: ${fe}`),Me.state==="loading"&&(q.delete(fe),G.push(fe),ee=!0)}return Fe(G),ee}function H(G){let ee=[];for(let[fe,Me]of X)if(Me<G){let Ge=b.fetchers.get(fe);bt(Ge,`Expected fetcher: ${fe}`),Ge.state==="loading"&&(ke(fe),X.delete(fe),ee.push(fe))}return Fe(ee),ee.length>0}function Ie(G,ee){let fe=b.blockers.get(G)||Ja;return ce.get(G)!==ee&&ce.set(G,ee),fe}function Pe(G){b.blockers.delete(G),ce.delete(G)}function Ze(G,ee){let fe=b.blockers.get(G)||Ja;bt(fe.state==="unblocked"&&ee.state==="blocked"||fe.state==="blocked"&&ee.state==="blocked"||fe.state==="blocked"&&ee.state==="proceeding"||fe.state==="blocked"&&ee.state==="unblocked"||fe.state==="proceeding"&&ee.state==="unblocked",`Invalid blocker state transition: ${fe.state} -> ${ee.state}`);let Me=new Map(b.blockers);Me.set(G,ee),ge({blockers:Me})}function Be({currentLocation:G,nextLocation:ee,historyAction:fe}){if(ce.size===0)return;ce.size>1&&Mn(!1,"A router only supports one blocker at a time");let Me=Array.from(ce.entries()),[Ge,Ye]=Me[Me.length-1],ft=b.blockers.get(Ge);if(!(ft&&ft.state==="proceeding")&&Ye({currentLocation:G,nextLocation:ee,historyAction:fe}))return Ge}function st(G){let ee=xi(404,{pathname:G}),fe=u||a,{matches:Me,route:Ge}=xy(fe);return{notFoundMatches:Me,route:Ge,error:ee}}function De(G,ee,fe){if(_=G,x=ee,M=fe||null,!y&&b.navigation===bh){y=!0;let Me=yt(b.location,b.matches);Me!=null&&ge({restoreScrollPosition:Me})}return()=>{_=null,x=null,M=null}}function ut(G,ee){return M&&M(G,ee.map(Me=>AE(Me,b.loaderData)))||G.key}function _t(G,ee){if(_&&x){let fe=ut(G,ee);_[fe]=x()}}function yt(G,ee){if(_){let fe=ut(G,ee),Me=_[fe];if(typeof Me=="number")return Me}return null}function Ht(G,ee,fe){if(f)if(G){if(Object.keys(G[0].params).length>0)return{active:!0,matches:Bc(ee,fe,c,!0)}}else return{active:!0,matches:Bc(ee,fe,c,!0)||[]};return{active:!1,matches:null}}async function hn(G,ee,fe){if(!f)return{type:"success",matches:G};let Me=G;for(;;){let Ge=u==null,Ye=u||a,ft=o;try{await f({path:ee,matches:Me,patch:($,Z)=>{fe.aborted||hy($,Z,Ye,ft,i)}})}catch($){return{type:"error",error:$,partialMatches:Me}}finally{Ge&&!fe.aborted&&(a=[...a])}if(fe.aborted)return{type:"aborted"};let A=Jr(Ye,ee,c);if(A)return{type:"success",matches:A};let j=Bc(Ye,ee,c,!0);if(!j||Me.length===j.length&&Me.every(($,Z)=>$.route.id===j[Z].route.id))return{type:"success",matches:null};Me=j}}function cs(G){o={},u=Qc(G,i,void 0,o)}function Js(G,ee){let fe=u==null;hy(G,ee,u||a,o,i),fe&&(a=[...a],ge({}))}return R={get basename(){return c},get future(){return p},get state(){return b},get routes(){return a},get window(){return e},initialize:V,subscribe:me,enableScrollRestoration:De,navigate:et,fetch:Oe,revalidate:tt,createHref:G=>n.history.createHref(G),encodeLocation:G=>n.history.encodeLocation(G),getFetcher:Le,deleteFetcher:de,dispose:ye,getBlocker:Ie,deleteBlocker:Pe,patchRoutes:Js,_internalFetchControllers:he,_internalSetRoutes:cs},R}function eT(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function Dp(n,e,t,i,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=ym(i||".",vm(u),Oi(n.pathname,t)||n.pathname,a==="path");if(i==null&&(d.search=n.search,d.hash=n.hash),(i==null||i===""||i===".")&&c){let f=_m(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let p=new URLSearchParams(d.search),m=p.getAll("index");p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let g=p.toString();d.search=g?`?${g}`:""}}return t!=="/"&&(d.pathname=d.pathname==="/"?t:Ki([t,d.pathname])),is(d)}function uy(n,e,t){if(!t||!eT(t))return{path:e};if(t.formMethod&&!fT(t.formMethod))return{path:e,error:xi(405,{method:t.formMethod})};let i=()=>({path:e,error:xi(400,{type:"invalid-body"})}),a=(t.formMethod||"get").toUpperCase(),u=V1(e);if(t.body!==void 0){if(t.formEncType==="text/plain"){if(!ki(a))return i();let m=typeof t.body=="string"?t.body:t.body instanceof FormData||t.body instanceof URLSearchParams?Array.from(t.body.entries()).reduce((g,[_,M])=>`${g}${_}=${M}
`,""):String(t.body);return{path:e,submission:{formMethod:a,formAction:u,formEncType:t.formEncType,formData:void 0,json:void 0,text:m}}}else if(t.formEncType==="application/json"){if(!ki(a))return i();try{let m=typeof t.body=="string"?JSON.parse(t.body):t.body;return{path:e,submission:{formMethod:a,formAction:u,formEncType:t.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}bt(typeof FormData=="function","FormData is not available in this environment");let c,d;if(t.formData)c=kp(t.formData),d=t.formData;else if(t.body instanceof FormData)c=kp(t.body),d=t.body;else if(t.body instanceof URLSearchParams)c=t.body,d=my(c);else if(t.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(t.body),d=my(c)}catch{return i()}let f={formMethod:a,formAction:u,formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(ki(f.formMethod))return{path:e,submission:f};let p=os(e);return n&&p.search&&_m(p.search)&&c.append("index",""),p.search=`?${c}`,{path:is(p),submission:f}}function cy(n,e,t=!1){let i=n.findIndex(o=>o.route.id===e);return i>=0?n.slice(0,t?i+1:i):n}function dy(n,e,t,i,o,a,u,c,d,f,p,m,g,_){let M=_?ri(_[1])?_[1].error:_[1].data:void 0,x=n.createURL(e.location),y=n.createURL(o),S=t;a&&e.errors?S=cy(t,Object.keys(e.errors)[0],!0):_&&ri(_[1])&&(S=cy(t,_[0]));let T=_?_[1].statusCode:void 0,L=T&&T>=400,R=S.filter((I,O)=>{let{route:C}=I;if(C.lazy)return!0;if(C.loader==null)return!1;if(a)return Ip(C,e.loaderData,e.errors);if(tT(e.loaderData,e.matches[O],I))return!0;let z=e.matches[O],te=I;return fy(I,{currentUrl:x,currentParams:z.params,nextUrl:y,nextParams:te.params,...i,actionResult:M,actionStatus:T,defaultShouldRevalidate:L?!1:u||x.pathname+x.search===y.pathname+y.search||x.search!==y.search||nT(z,te)})}),b=[];return f.forEach((I,O)=>{if(a||!t.some(Te=>Te.route.id===I.routeId)||d.has(O))return;let C=Jr(m,I.path,g);if(!C){b.push({key:O,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let z=e.fetchers.get(O),te=dl(C,I.path),ne=!1;p.has(O)?ne=!1:c.has(O)?(c.delete(O),ne=!0):z&&z.state!=="idle"&&z.data===void 0?ne=u:ne=fy(te,{currentUrl:x,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:t[t.length-1].params,...i,actionResult:M,actionStatus:T,defaultShouldRevalidate:L?!1:u}),ne&&b.push({key:O,routeId:I.routeId,path:I.path,matches:C,match:te,controller:new AbortController})}),[R,b]}function Ip(n,e,t){if(n.lazy)return!0;if(!n.loader)return!1;let i=e!=null&&e[n.id]!==void 0,o=t!=null&&t[n.id]!==void 0;return!i&&o?!1:typeof n.loader=="function"&&n.loader.hydrate===!0?!0:!i&&!o}function tT(n,e,t){let i=!e||t.route.id!==e.route.id,o=!n.hasOwnProperty(t.route.id);return i||o}function nT(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function fy(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}function hy(n,e,t,i,o){let a;if(n){let d=i[n];bt(d,`No route found to patch children into: routeId = ${n}`),d.children||(d.children=[]),a=d.children}else a=t;let u=e.filter(d=>!a.some(f=>U1(d,f))),c=Qc(u,o,[n||"_","patch",String((a==null?void 0:a.length)||"0")],i);a.push(...c)}function U1(n,e){return"id"in n&&"id"in e&&n.id===e.id?!0:n.index===e.index&&n.path===e.path&&n.caseSensitive===e.caseSensitive?(!n.children||n.children.length===0)&&(!e.children||e.children.length===0)?!0:n.children.every((t,i)=>{var o;return(o=e.children)==null?void 0:o.some(a=>U1(t,a))}):!1}async function iT(n,e,t){if(!n.lazy)return;let i=await n.lazy();if(!n.lazy)return;let o=t[n.id];bt(o,"No route found in manifest");let a={};for(let u in i){let d=o[u]!==void 0&&u!=="hasErrorBoundary";Mn(!d,`Route "${o.id}" has a static property "${u}" defined but its lazy function is also returning a value for this property. The lazy route property "${u}" will be ignored.`),!d&&!TE.has(u)&&(a[u]=i[u])}Object.assign(o,a),Object.assign(o,{...e(o),lazy:void 0})}async function rT({matches:n}){let e=n.filter(i=>i.shouldLoad);return(await Promise.all(e.map(i=>i.resolve()))).reduce((i,o,a)=>Object.assign(i,{[e[a].route.id]:o}),{})}async function sT(n,e,t,i,o,a,u,c,d,f){let p=a.map(_=>_.route.lazy?iT(_.route,d,c):void 0),m=a.map((_,M)=>{let x=p[M],y=o.some(T=>T.route.id===_.route.id);return{..._,shouldLoad:y,resolve:async T=>(T&&i.method==="GET"&&(_.route.lazy||_.route.loader)&&(y=!0),y?oT(e,i,_,x,T,f):Promise.resolve({type:"data",result:void 0}))}}),g=await n({matches:m,request:i,params:a[0].params,fetcherKey:u,context:f});try{await Promise.all(p)}catch{}return g}async function oT(n,e,t,i,o,a){let u,c,d=f=>{let p,m=new Promise((M,x)=>p=x);c=()=>p(),e.signal.addEventListener("abort",c);let g=M=>typeof f!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${n}" [routeId: ${t.route.id}]`)):f({request:e,params:t.params,context:a},...M!==void 0?[M]:[]),_=(async()=>{try{return{type:"data",result:await(o?o(x=>g(x)):g())}}catch(M){return{type:"error",result:M}}})();return Promise.race([_,m])};try{let f=t.route[n];if(i)if(f){let p,[m]=await Promise.all([d(f).catch(g=>{p=g}),i]);if(p!==void 0)throw p;u=m}else if(await i,f=t.route[n],f)u=await d(f);else if(n==="action"){let p=new URL(e.url),m=p.pathname+p.search;throw xi(405,{method:e.method,pathname:m,routeId:t.route.id})}else return{type:"data",result:void 0};else if(f)u=await d(f);else{let p=new URL(e.url),m=p.pathname+p.search;throw xi(404,{pathname:m})}}catch(f){return{type:"error",result:f}}finally{c&&e.signal.removeEventListener("abort",c)}return u}async function aT(n){var i,o,a,u;let{result:e,type:t}=n;if(j1(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:"error",error:d}}return t==="error"?{type:"error",error:new ed(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:"data",data:c,statusCode:e.status,headers:e.headers}}if(t==="error"){if(_y(e)){if(e.data instanceof Error)return{type:"error",error:e.data,statusCode:(i=e.init)==null?void 0:i.status};e=new ed(((o=e.init)==null?void 0:o.status)||500,void 0,e.data)}return{type:"error",error:e,statusCode:yd(e)?e.status:void 0}}return _y(e)?{type:"data",data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function lT(n,e,t,i,o){let a=n.headers.get("Location");if(bt(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!xm.test(a)){let u=i.slice(0,i.findIndex(c=>c.route.id===t)+1);a=Dp(new URL(e.url),u,o,a),n.headers.set("Location",a)}return n}function py(n,e,t){if(xm.test(n)){let i=n,o=i.startsWith("//")?new URL(e.protocol+i):new URL(i),a=Oi(o.pathname,t)!=null;if(o.origin===e.origin&&a)return o.pathname+o.search+o.hash}return n}function Mo(n,e,t,i){let o=n.createURL(V1(e)).toString(),a={signal:t};if(i&&ki(i.formMethod)){let{formMethod:u,formEncType:c}=i;a.method=u.toUpperCase(),c==="application/json"?(a.headers=new Headers({"Content-Type":c}),a.body=JSON.stringify(i.json)):c==="text/plain"?a.body=i.text:c==="application/x-www-form-urlencoded"&&i.formData?a.body=kp(i.formData):a.body=i.formData}return new Request(o,a)}function kp(n){let e=new URLSearchParams;for(let[t,i]of n.entries())e.append(t,typeof i=="string"?i:i.name);return e}function my(n){let e=new FormData;for(let[t,i]of n.entries())e.append(t,i);return e}function uT(n,e,t,i=!1,o=!1){let a={},u=null,c,d=!1,f={},p=t&&ri(t[1])?t[1].error:void 0;return n.forEach(m=>{if(!(m.route.id in e))return;let g=m.route.id,_=e[g];if(bt(!Fs(_),"Cannot handle redirect results in processLoaderData"),ri(_)){let M=_.error;if(p!==void 0&&(M=p,p=void 0),u=u||{},o)u[g]=M;else{let x=Is(n,g);u[x.route.id]==null&&(u[x.route.id]=M)}i||(a[g]=B1),d||(d=!0,c=yd(_.error)?_.error.status:500),_.headers&&(f[g]=_.headers)}else a[g]=_.data,_.statusCode&&_.statusCode!==200&&!d&&(c=_.statusCode),_.headers&&(f[g]=_.headers)}),p!==void 0&&t&&(u={[t[0]]:p},a[t[0]]=void 0),{loaderData:a,errors:u,statusCode:c||200,loaderHeaders:f}}function gy(n,e,t,i,o,a){let{loaderData:u,errors:c}=uT(e,t,i);return o.forEach(d=>{let{key:f,match:p,controller:m}=d,g=a[f];if(bt(g,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(ri(g)){let _=Is(n.matches,p==null?void 0:p.route.id);c&&c[_.route.id]||(c={...c,[_.route.id]:g.error}),n.fetchers.delete(f)}else if(Fs(g))bt(!1,"Unhandled fetcher revalidation redirect");else{let _=Kr(g.data);n.fetchers.set(f,_)}}),{loaderData:u,errors:c}}function vy(n,e,t,i){let o=Object.entries(e).filter(([,a])=>a!==B1).reduce((a,[u,c])=>(a[u]=c,a),{});for(let a of t){let u=a.route.id;if(!e.hasOwnProperty(u)&&n.hasOwnProperty(u)&&a.route.loader&&(o[u]=n[u]),i&&i.hasOwnProperty(u))break}return o}function yy(n){return n?ri(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function Is(n,e){return(e?n.slice(0,n.findIndex(i=>i.route.id===e)+1):[...n]).reverse().find(i=>i.route.hasErrorBoundary===!0)||n[0]}function xy(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function xi(n,{pathname:e,routeId:t,method:i,type:o,message:a}={}){let u="Unknown Server Error",c="Unknown @remix-run/router error";return n===400?(u="Bad Request",i&&e&&t?c=`You made a ${i} request to "${e}" but did not provide a \`loader\` for route "${t}", so there is no way to handle the request.`:o==="invalid-body"&&(c="Unable to encode submission body")):n===403?(u="Forbidden",c=`Route "${t}" does not match URL "${e}"`):n===404?(u="Not Found",c=`No route matches URL "${e}"`):n===405&&(u="Method Not Allowed",i&&e&&t?c=`You made a ${i.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${t}", so there is no way to handle the request.`:i&&(c=`Invalid request method "${i.toUpperCase()}"`)),new ed(n||500,u,new Error(c),!0)}function Qu(n){let e=Object.entries(n);for(let t=e.length-1;t>=0;t--){let[i,o]=e[t];if(Fs(o))return{key:i,result:o}}}function V1(n){let e=typeof n=="string"?os(n):n;return is({...e,hash:""})}function cT(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function dT(n){return j1(n.result)&&YE.has(n.result.status)}function ri(n){return n.type==="error"}function Fs(n){return(n&&n.type)==="redirect"}function _y(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function j1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function fT(n){return qE.has(n.toUpperCase())}function ki(n){return $E.has(n.toUpperCase())}function _m(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function dl(n,e){let t=typeof e=="string"?os(e).search:e.search;if(n[n.length-1].route.index&&_m(t||""))return n[n.length-1];let i=z1(n);return i[i.length-1]}function wy(n){let{formMethod:e,formAction:t,formEncType:i,text:o,formData:a,json:u}=n;if(!(!e||!t||!i)){if(o!=null)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:void 0,text:o};if(a!=null)return{formMethod:e,formAction:t,formEncType:i,formData:a,json:void 0,text:void 0};if(u!==void 0)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:u,text:void 0}}}function Eh(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hT(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function el(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pT(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function Kr(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function mT(n,e){try{let t=n.sessionStorage.getItem(O1);if(t){let i=JSON.parse(t);for(let[o,a]of Object.entries(i||{}))a&&Array.isArray(a)&&e.set(o,new Set(a||[]))}}catch{}}function gT(n,e){if(e.size>0){let t={};for(let[i,o]of e)t[i]=[...o];try{n.sessionStorage.setItem(O1,JSON.stringify(t))}catch(i){Mn(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function vT(){let n,e,t=new Promise((i,o)=>{n=async a=>{i(a);try{await t}catch{}},e=async a=>{o(a);try{await t}catch{}}});return{promise:t,resolve:n,reject:e}}var Ks=U.createContext(null);Ks.displayName="DataRouter";var Fl=U.createContext(null);Fl.displayName="DataRouterState";var wm=U.createContext({isTransitioning:!1});wm.displayName="ViewTransition";var G1=U.createContext(new Map);G1.displayName="Fetchers";var yT=U.createContext(null);yT.displayName="Await";var er=U.createContext(null);er.displayName="Navigation";var xd=U.createContext(null);xd.displayName="Location";var tr=U.createContext({outlet:null,matches:[],isDataRoute:!1});tr.displayName="Route";var Sm=U.createContext(null);Sm.displayName="RouteError";function xT(n,{relative:e}={}){bt(zl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=U.useContext(er),{hash:o,pathname:a,search:u}=Nl(n,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:Ki([t,a])),i.createHref({pathname:c,search:u,hash:o})}function zl(){return U.useContext(xd)!=null}function wr(){return bt(zl(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(xd).location}var H1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function W1(n){U.useContext(er).static||U.useLayoutEffect(n)}function Mm(){let{isDataRoute:n}=U.useContext(tr);return n?kT():_T()}function _T(){bt(zl(),"useNavigate() may be used only in the context of a <Router> component.");let n=U.useContext(Ks),{basename:e,navigator:t}=U.useContext(er),{matches:i}=U.useContext(tr),{pathname:o}=wr(),a=JSON.stringify(vm(i)),u=U.useRef(!1);return W1(()=>{u.current=!0}),U.useCallback((d,f={})=>{if(Mn(u.current,H1),!u.current)return;if(typeof d=="number"){t.go(d);return}let p=ym(d,JSON.parse(a),o,f.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ki([e,p.pathname])),(f.replace?t.replace:t.push)(p,f.state,f)},[e,t,a,o,n])}var wT=U.createContext(null);function ST(n){let e=U.useContext(tr).outlet;return e&&U.createElement(wT.Provider,{value:n},e)}function Nl(n,{relative:e}={}){let{matches:t}=U.useContext(tr),{pathname:i}=wr(),o=JSON.stringify(vm(t));return U.useMemo(()=>ym(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function MT(n,e,t,i){bt(zl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=U.useContext(er),{matches:a}=U.useContext(tr),u=a[a.length-1],c=u?u.params:{},d=u?u.pathname:"/",f=u?u.pathnameBase:"/",p=u&&u.route;{let S=p&&p.path||"";$1(d,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let m=wr(),g;g=m;let _=g.pathname||"/",M=_;if(f!=="/"){let S=f.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Jr(n,{pathname:M});return Mn(p||x!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Mn(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),AT(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:Ki([f,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Ki([f,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,t,i)}function bT(){let n=IT(),e=yd(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:a},"ErrorBoundary")," or"," ",U.createElement("code",{style:a},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),t?U.createElement("pre",{style:o},t):null,u)}var ET=U.createElement(bT,null),TT=class extends U.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?U.createElement(tr.Provider,{value:this.props.routeContext},U.createElement(Sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CT({routeContext:n,match:e,children:t}){let i=U.useContext(Ks);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(tr.Provider,{value:n},t)}function AT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);bt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(t)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:m}=t,g=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let m,g=!1,_=null,M=null;t&&(m=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||ET,u&&(c<0&&p===0?($1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,M=null):c===p&&(g=!0,M=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),y=()=>{let S;return m?S=_:g?S=M:f.route.Component?S=U.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,U.createElement(CT,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:t!=null},children:S})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?U.createElement(TT,{location:t.location,revalidation:t.revalidation,component:_,error:m,children:y(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):y()},null)}function bm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PT(n){let e=U.useContext(Ks);return bt(e,bm(n)),e}function LT(n){let e=U.useContext(Fl);return bt(e,bm(n)),e}function RT(n){let e=U.useContext(tr);return bt(e,bm(n)),e}function Em(n){let e=RT(n),t=e.matches[e.matches.length-1];return bt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function DT(){return Em("useRouteId")}function IT(){var i;let n=U.useContext(Sm),e=LT("useRouteError"),t=Em("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function kT(){let{router:n}=PT("useNavigate"),e=Em("useNavigate"),t=U.useRef(!1);return W1(()=>{t.current=!0}),U.useCallback(async(o,a={})=>{Mn(t.current,H1),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Sy={};function $1(n,e,t){!e&&!Sy[n]&&(Sy[n]=!0,Mn(!1,t))}var My={};function by(n,e){!n&&!My[e]&&(My[e]=!0,console.warn(e))}function FT(n){let e={hasErrorBoundary:n.hasErrorBoundary||n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&(n.element&&Mn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:U.createElement(n.Component),Component:void 0})),n.HydrateFallback&&(n.hydrateFallbackElement&&Mn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:U.createElement(n.HydrateFallback),HydrateFallback:void 0})),n.ErrorBoundary&&(n.errorElement&&Mn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:U.createElement(n.ErrorBoundary),ErrorBoundary:void 0})),e}var zT=class{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=t=>{this.status==="pending"&&(this.status="resolved",n(t))},this.reject=t=>{this.status==="pending"&&(this.status="rejected",e(t))}})}};function NT({router:n,flushSync:e}){let[t,i]=U.useState(n.state),[o,a]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[p,m]=U.useState(),[g,_]=U.useState(),M=U.useRef(new Map),x=U.useCallback((L,{deletedFetchers:R,flushSync:b,viewTransitionOpts:I})=>{R.forEach(C=>M.current.delete(C)),L.fetchers.forEach((C,z)=>{C.data!==void 0&&M.current.set(z,C.data)}),by(b===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let O=n.window!=null&&n.window.document!=null&&typeof n.window.document.startViewTransition=="function";if(by(I==null||O,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!I||!O){e&&b?e(()=>i(L)):U.startTransition(()=>i(L));return}if(e&&b){e(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let C=n.window.document.startViewTransition(()=>{e(()=>i(L))});C.finished.finally(()=>{e(()=>{f(void 0),m(void 0),a(void 0),c({isTransitioning:!1})})}),e(()=>m(C));return}p?(d&&d.resolve(),p.skipTransition(),_({state:L,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(a(L),c({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[n.window,e,p,d]);U.useLayoutEffect(()=>n.subscribe(x),[n,x]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new zT)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let L=o,R=d.promise,b=n.window.document.startViewTransition(async()=>{U.startTransition(()=>i(L)),await R});b.finished.finally(()=>{f(void 0),m(void 0),a(void 0),c({isTransitioning:!1})}),m(b)}},[o,d,n.window]),U.useEffect(()=>{d&&o&&t.location.key===o.location.key&&d.resolve()},[d,p,t.location,o]),U.useEffect(()=>{!u.isTransitioning&&g&&(a(g.state),c({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),_(void 0))},[u.isTransitioning,g]);let y=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:L=>n.navigate(L),push:(L,R,b)=>n.navigate(L,{state:R,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(L,R,b)=>n.navigate(L,{replace:!0,state:R,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),S=n.basename||"/",T=U.useMemo(()=>({router:n,navigator:y,static:!1,basename:S}),[n,y,S]);return U.createElement(U.Fragment,null,U.createElement(Ks.Provider,{value:T},U.createElement(Fl.Provider,{value:t},U.createElement(G1.Provider,{value:M.current},U.createElement(wm.Provider,{value:u},U.createElement(UT,{basename:S,location:t.location,navigationType:t.historyAction,navigator:y},U.createElement(OT,{routes:n.routes,future:n.future,state:t})))))),null)}var OT=U.memo(BT);function BT({routes:n,future:e,state:t}){return MT(n,void 0,t,e)}function X1(n){return ST(n.context)}function UT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){bt(!zl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:o,static:a,future:{}}),[u,o,a]);typeof t=="string"&&(t=os(t));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:g="default"}=t,_=U.useMemo(()=>{let M=Oi(d,u);return M==null?null:{location:{pathname:M,search:f,hash:p,state:m,key:g},navigationType:i}},[u,d,f,p,m,g,i]);return Mn(_!=null,`<Router basename="${u}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:U.createElement(er.Provider,{value:c},U.createElement(xd.Provider,{children:e,value:_}))}var Uc="get",Vc="application/x-www-form-urlencoded";function _d(n){return n!=null&&typeof n.tagName=="string"}function VT(n){return _d(n)&&n.tagName.toLowerCase()==="button"}function jT(n){return _d(n)&&n.tagName.toLowerCase()==="form"}function GT(n){return _d(n)&&n.tagName.toLowerCase()==="input"}function HT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function WT(n,e){return n.button===0&&(!e||e==="_self")&&!HT(n)}var Ju=null;function $T(){if(Ju===null)try{new FormData(document.createElement("form"),0),Ju=!1}catch{Ju=!0}return Ju}var XT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Th(n){return n!=null&&!XT.has(n)?(Mn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):n}function qT(n,e){let t,i,o,a,u;if(jT(n)){let c=n.getAttribute("action");i=c?Oi(c,e):null,t=n.getAttribute("method")||Uc,o=Th(n.getAttribute("enctype"))||Vc,a=new FormData(n)}else if(VT(n)||GT(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=n.getAttribute("formaction")||c.getAttribute("action");if(i=d?Oi(d,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||Uc,o=Th(n.getAttribute("formenctype"))||Th(c.getAttribute("enctype"))||Vc,a=new FormData(c,n),!$T()){let{name:f,type:p,value:m}=n;if(p==="image"){let g=f?`${f}.`:"";a.append(`${g}x`,"0"),a.append(`${g}y`,"0")}else f&&a.append(f,m)}}else{if(_d(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Uc,i=null,o=Vc,u=n}return a&&o==="text/plain"&&(u=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:u}}function Tm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function YT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ZT(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let u=await YT(a,t);return u.links?u.links():[]}return[]}));return t3(i.flat(1).filter(KT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ey(n,e,t,i,o,a){let u=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,c=(d,f)=>{var p;return t[f].pathname!==d.pathname||((p=t[f].route.path)==null?void 0:p.endsWith("*"))&&t[f].params["*"]!==d.params["*"]};return a==="assets"?e.filter((d,f)=>u(d,f)||c(d,f)):a==="data"?e.filter((d,f)=>{var m;let p=i.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(u(d,f)||c(d,f))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(n,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function QT(n,e){return JT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function JT(n){return[...new Set(n)]}function e3(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function t3(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(e3(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function n3(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function i3(){let n=U.useContext(Ks);return Tm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function r3(){let n=U.useContext(Fl);return Tm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Cm=U.createContext(void 0);Cm.displayName="FrameworkContext";function q1(){let n=U.useContext(Cm);return Tm(n,"You must render this element inside a <HydratedRouter> element"),n}function s3(n,e){let t=U.useContext(Cm),[i,o]=U.useState(!1),[a,u]=U.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:m}=e,g=U.useRef(null);U.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let x=S=>{S.forEach(T=>{u(T.isIntersecting)})},y=new IntersectionObserver(x,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[n]),U.useEffect(()=>{if(i){let x=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(x)}}},[i]);let _=()=>{o(!0)},M=()=>{o(!1),u(!1)};return t?n!=="intent"?[a,g,{}]:[a,g,{onFocus:tl(c,_),onBlur:tl(d,M),onMouseEnter:tl(f,_),onMouseLeave:tl(p,M),onTouchStart:tl(m,_)}]:[!1,g,{}]}function tl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function o3({page:n,...e}){let{router:t}=i3(),i=U.useMemo(()=>Jr(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?U.createElement(l3,{page:n,matches:i,...e}):null}function a3(n){let{manifest:e,routeModules:t}=q1(),[i,o]=U.useState([]);return U.useEffect(()=>{let a=!1;return ZT(n,e,t).then(u=>{a||o(u)}),()=>{a=!0}},[n,e,t]),i}function l3({page:n,matches:e,...t}){let i=wr(),{manifest:o,routeModules:a}=q1(),{loaderData:u,matches:c}=r3(),d=U.useMemo(()=>Ey(n,e,c,o,i,"data"),[n,e,c,o,i]),f=U.useMemo(()=>Ey(n,e,c,o,i,"assets"),[n,e,c,o,i]),p=U.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let _=new Set,M=!1;if(e.forEach(y=>{var T;let S=o.routes[y.route.id];!S||!S.hasLoader||(!d.some(L=>L.route.id===y.route.id)&&y.route.id in u&&((T=a[y.route.id])!=null&&T.shouldRevalidate)||S.hasClientLoader?M=!0:_.add(y.route.id))}),_.size===0)return[];let x=n3(n);return M&&_.size>0&&x.searchParams.set("_routes",e.filter(y=>_.has(y.route.id)).map(y=>y.route.id).join(",")),[x.pathname+x.search]},[u,i,o,d,e,n,a]),m=U.useMemo(()=>QT(f,o),[f,o]),g=a3(f);return U.createElement(U.Fragment,null,p.map(_=>U.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...t})),m.map(_=>U.createElement("link",{key:_,rel:"modulepreload",href:_,...t})),g.map(({key:_,link:M})=>U.createElement("link",{key:_,...M})))}function u3(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Y1&&(window.__reactRouterVersion="7.1.1")}catch{}function c3(n,e){return JE({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:ME({window:e==null?void 0:e.window}),hydrationData:d3(),routes:n,mapRouteProperties:FT,dataStrategy:e==null?void 0:e.dataStrategy,patchRoutesOnNavigation:e==null?void 0:e.patchRoutesOnNavigation,window:e==null?void 0:e.window}).initialize()}function d3(){let n=window==null?void 0:window.__staticRouterHydrationData;return n&&n.errors&&(n={...n,errors:f3(n.errors)}),n}function f3(n){if(!n)return null;let e=Object.entries(n),t={};for(let[i,o]of e)if(o&&o.__type==="RouteErrorResponse")t[i]=new ed(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let a=window[o.__subType];if(typeof a=="function")try{let u=new a(o.message);u.stack="",t[i]=u}catch{}}if(t[i]==null){let a=new Error(o.message);a.stack="",t[i]=a}}else t[i]=o;return t}var K1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ol=U.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:u,state:c,target:d,to:f,preventScrollReset:p,viewTransition:m,...g},_){let{basename:M}=U.useContext(er),x=typeof f=="string"&&K1.test(f),y,S=!1;if(typeof f=="string"&&x&&(y=f,Y1))try{let z=new URL(window.location.href),te=f.startsWith("//")?new URL(z.protocol+f):new URL(f),ne=Oi(te.pathname,M);te.origin===z.origin&&ne!=null?f=ne+te.search+te.hash:S=!0}catch{Mn(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=xT(f,{relative:o}),[L,R,b]=s3(i,g),I=g3(f,{replace:u,state:c,target:d,preventScrollReset:p,relative:o,viewTransition:m});function O(z){e&&e(z),z.defaultPrevented||I(z)}let C=U.createElement("a",{...g,...b,href:y||T,onClick:S||a?e:O,ref:u3(_,R),target:d,"data-discover":!x&&t==="render"?"true":void 0});return L&&!x?U.createElement(U.Fragment,null,C,U.createElement(o3,{page:T})):C});Ol.displayName="Link";var h3=U.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:d,...f},p){let m=Nl(u,{relative:f.relative}),g=wr(),_=U.useContext(Fl),{navigator:M,basename:x}=U.useContext(er),y=_!=null&&w3(m)&&c===!0,S=M.encodeLocation?M.encodeLocation(m).pathname:m.pathname,T=g.pathname,L=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(T=T.toLowerCase(),L=L?L.toLowerCase():null,S=S.toLowerCase()),L&&x&&(L=Oi(L,x)||L);const R=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let b=T===S||!o&&T.startsWith(S)&&T.charAt(R)==="/",I=L!=null&&(L===S||!o&&L.startsWith(S)&&L.charAt(S.length)==="/"),O={isActive:b,isPending:I,isTransitioning:y},C=b?e:void 0,z;typeof i=="function"?z=i(O):z=[i,b?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let te=typeof a=="function"?a(O):a;return U.createElement(Ol,{...f,"aria-current":C,className:z,ref:p,style:te,to:u,viewTransition:c},typeof d=="function"?d(O):d)});h3.displayName="NavLink";var p3=U.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:u=Uc,action:c,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:m,...g},_)=>{let M=x3(),x=_3(c,{relative:f}),y=u.toLowerCase()==="get"?"get":"post",S=typeof c=="string"&&K1.test(c),T=L=>{if(d&&d(L),L.defaultPrevented)return;L.preventDefault();let R=L.nativeEvent.submitter,b=(R==null?void 0:R.getAttribute("formmethod"))||u;M(R||L.currentTarget,{fetcherKey:e,method:b,navigate:t,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:m})};return U.createElement("form",{ref:_,method:y,action:x,onSubmit:i?d:T,...g,"data-discover":!S&&n==="render"?"true":void 0})});p3.displayName="Form";function m3(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z1(n){let e=U.useContext(Ks);return bt(e,m3(n)),e}function g3(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:u}={}){let c=Mm(),d=wr(),f=Nl(n,{relative:a});return U.useCallback(p=>{if(WT(p,e)){p.preventDefault();let m=t!==void 0?t:is(d)===is(f);c(n,{replace:m,state:i,preventScrollReset:o,relative:a,viewTransition:u})}},[d,c,f,t,i,e,n,o,a,u])}var v3=0,y3=()=>`__${String(++v3)}__`;function x3(){let{router:n}=Z1("useSubmit"),{basename:e}=U.useContext(er),t=DT();return U.useCallback(async(i,o={})=>{let{action:a,method:u,encType:c,formData:d,body:f}=qT(i,e);if(o.navigate===!1){let p=o.fetcherKey||y3();await n.fetch(p,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function _3(n,{relative:e}={}){let{basename:t}=U.useContext(er),i=U.useContext(tr);bt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Nl(n||".",{relative:e})},u=wr();if(n==null){a.search=u.search;let c=new URLSearchParams(a.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();a.search=p?`?${p}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Ki([t,a.pathname])),is(a)}function w3(n,e={}){let t=U.useContext(wm);bt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Z1("useViewTransitionState"),o=Nl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Oi(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Oi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Jc(o.pathname,u)!=null||Jc(o.pathname,a)!=null}new TextEncoder;var S3=I1();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M3(n){return U.createElement(NT,{flushSync:S3.flushSync,...n})}var Rn=function(){return Rn=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Rn.apply(this,arguments)};function ea(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var Bt="-ms-",xl="-moz-",Lt="-webkit-",Q1="comm",wd="rule",Am="decl",b3="@import",J1="@keyframes",E3="@layer",ew=Math.abs,Pm=String.fromCharCode,Fp=Object.assign;function T3(n,e){return xn(n,0)^45?(((e<<2^xn(n,0))<<2^xn(n,1))<<2^xn(n,2))<<2^xn(n,3):0}function tw(n){return n.trim()}function mr(n,e){return(n=e.exec(n))?n[0]:n}function vt(n,e,t){return n.replace(e,t)}function jc(n,e,t){return n.indexOf(e,t)}function xn(n,e){return n.charCodeAt(e)|0}function ta(n,e,t){return n.slice(e,t)}function Wi(n){return n.length}function nw(n){return n.length}function fl(n,e){return e.push(n),n}function C3(n,e){return n.map(e).join("")}function Ty(n,e){return n.filter(function(t){return!mr(t,e)})}var Sd=1,na=1,iw=0,Si=0,an=0,pa="";function Md(n,e,t,i,o,a,u,c){return{value:n,root:e,parent:t,type:i,props:o,children:a,line:Sd,column:na,length:u,return:"",siblings:c}}function Zr(n,e){return Fp(Md("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function bo(n){for(;n.root;)n=Zr(n.root,{children:[n]});fl(n,n.siblings)}function A3(){return an}function P3(){return an=Si>0?xn(pa,--Si):0,na--,an===10&&(na=1,Sd--),an}function zi(){return an=Si<iw?xn(pa,Si++):0,na++,an===10&&(na=1,Sd++),an}function Vs(){return xn(pa,Si)}function Gc(){return Si}function bd(n,e){return ta(pa,n,e)}function zp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L3(n){return Sd=na=1,iw=Wi(pa=n),Si=0,[]}function R3(n){return pa="",n}function Ch(n){return tw(bd(Si-1,Np(n===91?n+2:n===40?n+1:n)))}function D3(n){for(;(an=Vs())&&an<33;)zi();return zp(n)>2||zp(an)>3?"":" "}function I3(n,e){for(;--e&&zi()&&!(an<48||an>102||an>57&&an<65||an>70&&an<97););return bd(n,Gc()+(e<6&&Vs()==32&&zi()==32))}function Np(n){for(;zi();)switch(an){case n:return Si;case 34:case 39:n!==34&&n!==39&&Np(an);break;case 40:n===41&&Np(n);break;case 92:zi();break}return Si}function k3(n,e){for(;zi()&&n+an!==57;)if(n+an===84&&Vs()===47)break;return"/*"+bd(e,Si-1)+"*"+Pm(n===47?n:zi())}function F3(n){for(;!zp(Vs());)zi();return bd(n,Si)}function z3(n){return R3(Hc("",null,null,null,[""],n=L3(n),0,[0],n))}function Hc(n,e,t,i,o,a,u,c,d){for(var f=0,p=0,m=u,g=0,_=0,M=0,x=1,y=1,S=1,T=0,L="",R=o,b=a,I=i,O=L;y;)switch(M=T,T=zi()){case 40:if(M!=108&&xn(O,m-1)==58){jc(O+=vt(Ch(T),"&","&\f"),"&\f",ew(f?c[f-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:O+=Ch(T);break;case 9:case 10:case 13:case 32:O+=D3(M);break;case 92:O+=I3(Gc()-1,7);continue;case 47:switch(Vs()){case 42:case 47:fl(N3(k3(zi(),Gc()),e,t,d),d);break;default:O+="/"}break;case 123*x:c[f++]=Wi(O)*S;case 125*x:case 59:case 0:switch(T){case 0:case 125:y=0;case 59+p:S==-1&&(O=vt(O,/\f/g,"")),_>0&&Wi(O)-m&&fl(_>32?Ay(O+";",i,t,m-1,d):Ay(vt(O," ","")+";",i,t,m-2,d),d);break;case 59:O+=";";default:if(fl(I=Cy(O,e,t,f,p,o,c,L,R=[],b=[],m,a),a),T===123)if(p===0)Hc(O,e,I,I,R,a,m,c,b);else switch(g===99&&xn(O,3)===110?100:g){case 100:case 108:case 109:case 115:Hc(n,I,I,i&&fl(Cy(n,I,I,0,0,o,c,L,o,R=[],m,b),b),o,b,m,c,i?R:b);break;default:Hc(O,I,I,I,[""],b,0,c,b)}}f=p=_=0,x=S=1,L=O="",m=u;break;case 58:m=1+Wi(O),_=M;default:if(x<1){if(T==123)--x;else if(T==125&&x++==0&&P3()==125)continue}switch(O+=Pm(T),T*x){case 38:S=p>0?1:(O+="\f",-1);break;case 44:c[f++]=(Wi(O)-1)*S,S=1;break;case 64:Vs()===45&&(O+=Ch(zi())),g=Vs(),p=m=Wi(L=O+=F3(Gc())),T++;break;case 45:M===45&&Wi(O)==2&&(x=0)}}return a}function Cy(n,e,t,i,o,a,u,c,d,f,p,m){for(var g=o-1,_=o===0?a:[""],M=nw(_),x=0,y=0,S=0;x<i;++x)for(var T=0,L=ta(n,g+1,g=ew(y=u[x])),R=n;T<M;++T)(R=tw(y>0?_[T]+" "+L:vt(L,/&\f/g,_[T])))&&(d[S++]=R);return Md(n,e,t,o===0?wd:c,d,f,p,m)}function N3(n,e,t,i){return Md(n,e,t,Q1,Pm(A3()),ta(n,2,-2),0,i)}function Ay(n,e,t,i,o){return Md(n,e,t,Am,ta(n,0,i),ta(n,i+1,-1),i,o)}function rw(n,e,t){switch(T3(n,e)){case 5103:return Lt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Lt+n+n;case 4789:return xl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Lt+n+xl+n+Bt+n+n;case 5936:switch(xn(n,e+11)){case 114:return Lt+n+Bt+vt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Lt+n+Bt+vt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Lt+n+Bt+vt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Lt+n+Bt+n+n;case 6165:return Lt+n+Bt+"flex-"+n+n;case 5187:return Lt+n+vt(n,/(\w+).+(:[^]+)/,Lt+"box-$1$2"+Bt+"flex-$1$2")+n;case 5443:return Lt+n+Bt+"flex-item-"+vt(n,/flex-|-self/g,"")+(mr(n,/flex-|baseline/)?"":Bt+"grid-row-"+vt(n,/flex-|-self/g,""))+n;case 4675:return Lt+n+Bt+"flex-line-pack"+vt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Lt+n+Bt+vt(n,"shrink","negative")+n;case 5292:return Lt+n+Bt+vt(n,"basis","preferred-size")+n;case 6060:return Lt+"box-"+vt(n,"-grow","")+Lt+n+Bt+vt(n,"grow","positive")+n;case 4554:return Lt+vt(n,/([^-])(transform)/g,"$1"+Lt+"$2")+n;case 6187:return vt(vt(vt(n,/(zoom-|grab)/,Lt+"$1"),/(image-set)/,Lt+"$1"),n,"")+n;case 5495:case 3959:return vt(n,/(image-set\([^]*)/,Lt+"$1$`$1");case 4968:return vt(vt(n,/(.+:)(flex-)?(.*)/,Lt+"box-pack:$3"+Bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Lt+n+n;case 4200:if(!mr(n,/flex-|baseline/))return Bt+"grid-column-align"+ta(n,e)+n;break;case 2592:case 3360:return Bt+vt(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,mr(i.props,/grid-\w+-end/)})?~jc(n+(t=t[e].value),"span",0)?n:Bt+vt(n,"-start","")+n+Bt+"grid-row-span:"+(~jc(t,"span",0)?mr(t,/\d+/):+mr(t,/\d+/)-+mr(n,/\d+/))+";":Bt+vt(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return mr(i.props,/grid-\w+-start/)})?n:Bt+vt(vt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return vt(n,/(.+)-inline(.+)/,Lt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wi(n)-1-e>6)switch(xn(n,e+1)){case 109:if(xn(n,e+4)!==45)break;case 102:return vt(n,/(.+:)(.+)-([^]+)/,"$1"+Lt+"$2-$3$1"+xl+(xn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~jc(n,"stretch",0)?rw(vt(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return vt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,a,u,c,d,f){return Bt+o+":"+a+f+(u?Bt+o+"-span:"+(c?d:+d-+a)+f:"")+n});case 4949:if(xn(n,e+6)===121)return vt(n,":",":"+Lt)+n;break;case 6444:switch(xn(n,xn(n,14)===45?18:11)){case 120:return vt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Lt+(xn(n,14)===45?"inline-":"")+"box$3$1"+Lt+"$2$3$1"+Bt+"$2box$3")+n;case 100:return vt(n,":",":"+Bt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return vt(n,"scroll-","scroll-snap-")+n}return n}function td(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function O3(n,e,t,i){switch(n.type){case E3:if(n.children.length)break;case b3:case Am:return n.return=n.return||n.value;case Q1:return"";case J1:return n.return=n.value+"{"+td(n.children,i)+"}";case wd:if(!Wi(n.value=n.props.join(",")))return""}return Wi(t=td(n.children,i))?n.return=n.value+"{"+t+"}":""}function B3(n){var e=nw(n);return function(t,i,o,a){for(var u="",c=0;c<e;c++)u+=n[c](t,i,o,a)||"";return u}}function U3(n){return function(e){e.root||(e=e.return)&&n(e)}}function V3(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case Am:n.return=rw(n.value,n.length,t);return;case J1:return td([Zr(n,{value:vt(n.value,"@","@"+Lt)})],i);case wd:if(n.length)return C3(t=n.props,function(o){switch(mr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(Zr(n,{props:[vt(o,/:(read-\w+)/,":"+xl+"$1")]})),bo(Zr(n,{props:[o]})),Fp(n,{props:Ty(t,i)});break;case"::placeholder":bo(Zr(n,{props:[vt(o,/:(plac\w+)/,":"+Lt+"input-$1")]})),bo(Zr(n,{props:[vt(o,/:(plac\w+)/,":"+xl+"$1")]})),bo(Zr(n,{props:[vt(o,/:(plac\w+)/,Bt+"input-$1")]})),bo(Zr(n,{props:[o]})),Fp(n,{props:Ty(t,i)});break}return""})}}var j3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ii={},ia=typeof process<"u"&&ii!==void 0&&(ii.REACT_APP_SC_ATTR||ii.SC_ATTR)||"data-styled",sw="active",ow="data-styled-version",Ed="6.1.13",Lm=`/*!sc*/
`,nd=typeof window<"u"&&"HTMLElement"in window,G3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ii!==void 0&&ii.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ii.REACT_APP_SC_DISABLE_SPEEDY!==""?ii.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ii.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ii!==void 0&&ii.SC_DISABLE_SPEEDY!==void 0&&ii.SC_DISABLE_SPEEDY!==""&&ii.SC_DISABLE_SPEEDY!=="false"&&ii.SC_DISABLE_SPEEDY),H3={},Td=Object.freeze([]),ra=Object.freeze({});function aw(n,e,t){return t===void 0&&(t=ra),n.theme!==t.theme&&n.theme||e||t.theme}var lw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),W3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$3=/(^-|-$)/g;function Py(n){return n.replace(W3,"-").replace($3,"")}var X3=/(a)(d)/gi,ec=52,Ly=function(n){return String.fromCharCode(n+(n>25?39:97))};function Op(n){var e,t="";for(e=Math.abs(n);e>ec;e=e/ec|0)t=Ly(e%ec)+t;return(Ly(e%ec)+t).replace(X3,"$1-$2")}var Ah,uw=5381,Wo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},cw=function(n){return Wo(uw,n)};function Rm(n){return Op(cw(n)>>>0)}function q3(n){return n.displayName||n.name||"Component"}function Ph(n){return typeof n=="string"&&!0}var dw=typeof Symbol=="function"&&Symbol.for,fw=dw?Symbol.for("react.memo"):60115,Y3=dw?Symbol.for("react.forward_ref"):60112,K3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q3=((Ah={})[Y3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ah[fw]=hw,Ah);function Ry(n){return("type"in(e=n)&&e.type.$$typeof)===fw?hw:"$$typeof"in n?Q3[n.$$typeof]:K3;var e}var J3=Object.defineProperty,eC=Object.getOwnPropertyNames,Dy=Object.getOwnPropertySymbols,tC=Object.getOwnPropertyDescriptor,nC=Object.getPrototypeOf,Iy=Object.prototype;function pw(n,e,t){if(typeof e!="string"){if(Iy){var i=nC(e);i&&i!==Iy&&pw(n,i,t)}var o=eC(e);Dy&&(o=o.concat(Dy(e)));for(var a=Ry(n),u=Ry(e),c=0;c<o.length;++c){var d=o[c];if(!(d in Z3||t&&t[d]||u&&d in u||a&&d in a)){var f=tC(e,d);try{J3(n,d,f)}catch{}}}}return n}function sa(n){return typeof n=="function"}function Dm(n){return typeof n=="object"&&"styledComponentId"in n}function zs(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function id(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Tl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Bp(n,e,t){if(t===void 0&&(t=!1),!t&&!Tl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Bp(n[i],e[i]);else if(Tl(e))for(var i in e)n[i]=Bp(n[i],e[i]);return n}function Im(n,e){Object.defineProperty(n,"toString",{value:e})}function Bl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iC=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;e>=a;)if((a<<=1)<0)throw Bl(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var u=o;u<a;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(e+1),d=(u=0,t.length);u<d;u++)this.tag.insertRule(c,t[u])&&(this.groupSizes[e]++,c++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),a=o+i,u=o;u<a;u++)t+="".concat(this.tag.getRule(u)).concat(Lm);return t},n}(),Wc=new Map,rd=new Map,$c=1,tc=function(n){if(Wc.has(n))return Wc.get(n);for(;rd.has($c);)$c++;var e=$c++;return Wc.set(n,e),rd.set(e,n),e},rC=function(n,e){$c=e+1,Wc.set(n,e),rd.set(e,n)},sC="style[".concat(ia,"][").concat(ow,'="').concat(Ed,'"]'),oC=new RegExp("^".concat(ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aC=function(n,e,t){for(var i,o=t.split(","),a=0,u=o.length;a<u;a++)(i=o[a])&&n.registerName(e,i)},lC=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Lm),o=[],a=0,u=i.length;a<u;a++){var c=i[a].trim();if(c){var d=c.match(oC);if(d){var f=0|parseInt(d[1],10),p=d[2];f!==0&&(rC(p,f),aC(n,p,d[3]),n.getTag().insertRules(f,o)),o.length=0}else o.push(c)}}},ky=function(n){for(var e=document.querySelectorAll(sC),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(ia)!==sw&&(lC(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function uC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mw=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(c){var d=Array.from(c.querySelectorAll("style[".concat(ia,"]")));return d[d.length-1]}(t),a=o!==void 0?o.nextSibling:null;i.setAttribute(ia,sw),i.setAttribute(ow,Ed);var u=uC();return u&&i.setAttribute("nonce",u),t.insertBefore(i,a),i},cC=function(){function n(e){this.element=mw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,a=i.length;o<a;o++){var u=i[o];if(u.ownerNode===t)return u}throw Bl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),dC=function(){function n(e){this.element=mw(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),fC=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Fy=nd,hC={isServer:!nd,useCSSOMInjection:!G3},sd=function(){function n(e,t,i){e===void 0&&(e=ra),t===void 0&&(t={});var o=this;this.options=Rn(Rn({},hC),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&nd&&Fy&&(Fy=!1,ky(this)),Im(this,function(){return function(a){for(var u=a.getTag(),c=u.length,d="",f=function(m){var g=function(S){return rd.get(S)}(m);if(g===void 0)return"continue";var _=a.names.get(g),M=u.getGroup(m);if(_===void 0||!_.size||M.length===0)return"continue";var x="".concat(ia,".g").concat(m,'[id="').concat(g,'"]'),y="";_!==void 0&&_.forEach(function(S){S.length>0&&(y+="".concat(S,","))}),d+="".concat(M).concat(x,'{content:"').concat(y,'"}').concat(Lm)},p=0;p<c;p++)f(p);return d}(o)})}return n.registerId=function(e){return tc(e)},n.prototype.rehydrate=function(){!this.server&&nd&&ky(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Rn(Rn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new fC(o):i?new cC(o):new dC(o)}(this.options),new iC(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(tc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(tc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(tc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),pC=/&/g,mC=/^\s*\/\/.*$/gm;function gw(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=gw(t.children,e)),t})}function gC(n){var e,t,i,o=ra,a=o.options,u=a===void 0?ra:a,c=o.plugins,d=c===void 0?Td:c,f=function(g,_,M){return M.startsWith(t)&&M.endsWith(t)&&M.replaceAll(t,"").length>0?".".concat(e):g},p=d.slice();p.push(function(g){g.type===wd&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(pC,t).replace(i,f))}),u.prefix&&p.push(V3),p.push(O3);var m=function(g,_,M,x){_===void 0&&(_=""),M===void 0&&(M=""),x===void 0&&(x="&"),e=x,t=_,i=new RegExp("\\".concat(t,"\\b"),"g");var y=g.replace(mC,""),S=z3(M||_?"".concat(M," ").concat(_," { ").concat(y," }"):y);u.namespace&&(S=gw(S,u.namespace));var T=[];return td(S,B3(p.concat(U3(function(L){return T.push(L)})))),T};return m.hash=d.length?d.reduce(function(g,_){return _.name||Bl(15),Wo(g,_.name)},uw).toString():"",m}var vC=new sd,Up=gC(),vw=fn.createContext({shouldForwardProp:void 0,styleSheet:vC,stylis:Up});vw.Consumer;fn.createContext(void 0);function Vp(){return U.useContext(vw)}var yw=function(){function n(e,t){var i=this;this.inject=function(o,a){a===void 0&&(a=Up);var u=i.name+a.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,a(i.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Im(this,function(){throw Bl(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Up),this.name+e.hash},n}(),yC=function(n){return n>="A"&&n<="Z"};function zy(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;yC(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var xw=function(n){return n==null||n===!1||n===""},_w=function(n){var e,t,i=[];for(var o in n){var a=n[o];n.hasOwnProperty(o)&&!xw(a)&&(Array.isArray(a)&&a.isCss||sa(a)?i.push("".concat(zy(o),":"),a,";"):Tl(a)?i.push.apply(i,ea(ea(["".concat(o," {")],_w(a),!1),["}"],!1)):i.push("".concat(zy(o),": ").concat((e=o,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in j3||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function es(n,e,t,i){if(xw(n))return[];if(Dm(n))return[".".concat(n.styledComponentId)];if(sa(n)){if(!sa(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var o=n(e);return es(o,e,t,i)}var a;return n instanceof yw?t?(n.inject(t,i),[n.getName(i)]):[n]:Tl(n)?_w(n):Array.isArray(n)?Array.prototype.concat.apply(Td,n.map(function(u){return es(u,e,t,i)})):[n.toString()]}function ww(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(sa(t)&&!Dm(t))return!1}return!0}var xC=cw(Ed),_C=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ww(e),this.componentId=t,this.baseHash=Wo(xC,t),this.baseStyle=i,sd.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=zs(o,this.staticRulesId);else{var a=id(es(this.rules,e,t,i)),u=Op(Wo(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,u)){var c=i(a,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,c)}o=zs(o,u),this.staticRulesId=u}else{for(var d=Wo(this.baseHash,i.hash),f="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")f+=m;else if(m){var g=id(es(m,e,t,i));d=Wo(d,g+p),f+=g}}if(f){var _=Op(d>>>0);t.hasNameForId(this.componentId,_)||t.insertRules(this.componentId,_,i(f,".".concat(_),void 0,this.componentId)),o=zs(o,_)}}return o},n}(),km=fn.createContext(void 0);km.Consumer;var Lh={};function wC(n,e,t){var i=Dm(n),o=n,a=!Ph(n),u=e.attrs,c=u===void 0?Td:u,d=e.componentId,f=d===void 0?function(R,b){var I=typeof R!="string"?"sc":Py(R);Lh[I]=(Lh[I]||0)+1;var O="".concat(I,"-").concat(Rm(Ed+I+Lh[I]));return b?"".concat(b,"-").concat(O):O}(e.displayName,e.parentComponentId):d,p=e.displayName,m=p===void 0?function(R){return Ph(R)?"styled.".concat(R):"Styled(".concat(q3(R),")")}(n):p,g=e.displayName&&e.componentId?"".concat(Py(e.displayName),"-").concat(e.componentId):e.componentId||f,_=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,M=e.shouldForwardProp;if(i&&o.shouldForwardProp){var x=o.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;M=function(R,b){return x(R,b)&&y(R,b)}}else M=x}var S=new _C(t,g,i?o.componentStyle:void 0);function T(R,b){return function(I,O,C){var z=I.attrs,te=I.componentStyle,ne=I.defaultProps,Te=I.foldedComponentIds,_e=I.styledComponentId,J=I.target,he=fn.useContext(km),oe=Vp(),re=I.shouldForwardProp||oe.shouldForwardProp,X=aw(O,he,ne)||ra,q=function(we,V,ye){for(var me,ge=Rn(Rn({},V),{className:void 0,theme:ye}),be=0;be<we.length;be+=1){var et=sa(me=we[be])?me(ge):me;for(var tt in et)ge[tt]=tt==="className"?zs(ge[tt],et[tt]):tt==="style"?Rn(Rn({},ge[tt]),et[tt]):et[tt]}return V.className&&(ge.className=zs(ge.className,V.className)),ge}(z,O,X),Y=q.as||J,F={};for(var B in q)q[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&q.theme===X||(B==="forwardedAs"?F.as=q.forwardedAs:re&&!re(B,Y)||(F[B]=q[B]));var ce=function(we,V){var ye=Vp(),me=we.generateAndInjectStyles(V,ye.styleSheet,ye.stylis);return me}(te,q),xe=zs(Te,_e);return ce&&(xe+=" "+ce),q.className&&(xe+=" "+q.className),F[Ph(Y)&&!lw.has(Y)?"class":"className"]=xe,F.ref=C,U.createElement(Y,F)}(L,R,b)}T.displayName=m;var L=fn.forwardRef(T);return L.attrs=_,L.componentStyle=S,L.displayName=m,L.shouldForwardProp=M,L.foldedComponentIds=i?zs(o.foldedComponentIds,o.styledComponentId):"",L.styledComponentId=g,L.target=i?o.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=i?function(b){for(var I=[],O=1;O<arguments.length;O++)I[O-1]=arguments[O];for(var C=0,z=I;C<z.length;C++)Bp(b,z[C],!0);return b}({},o.defaultProps,R):R}}),Im(L,function(){return".".concat(L.styledComponentId)}),a&&pw(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Ny(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var Oy=function(n){return Object.assign(n,{isCss:!0})};function Fm(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(sa(n)||Tl(n))return Oy(es(Ny(Td,ea([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?es(i):Oy(es(Ny(i,e)))}function jp(n,e,t){if(t===void 0&&(t=ra),!e)throw Bl(1,e);var i=function(o){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return n(e,t,Fm.apply(void 0,ea([o],a,!1)))};return i.attrs=function(o){return jp(n,e,Rn(Rn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return jp(n,e,Rn(Rn({},t),o))},i}var Sw=function(n){return jp(wC,n)},pe=Sw;lw.forEach(function(n){pe[n]=Sw(n)});var SC=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=ww(e),sd.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,i,o){var a=o(id(es(this.rules,t,i,o)),""),u=this.componentId+e;i.insertRules(u,u,a)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,i,o){e>2&&sd.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,t,i,o)},n}();function MC(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=Fm.apply(void 0,ea([n],e,!1)),o="sc-global-".concat(Rm(JSON.stringify(i))),a=new SC(i,o),u=function(d){var f=Vp(),p=fn.useContext(km),m=fn.useRef(f.styleSheet.allocateGSInstance(o)).current;return f.styleSheet.server&&c(m,d,f.styleSheet,p,f.stylis),fn.useLayoutEffect(function(){if(!f.styleSheet.server)return c(m,d,f.styleSheet,p,f.stylis),function(){return a.removeStyles(m,f.styleSheet)}},[m,d,f.styleSheet,p,f.stylis]),null};function c(d,f,p,m,g){if(a.isStatic)a.renderStyles(d,H3,p,g);else{var _=Rn(Rn({},f),{theme:aw(f,m,u.defaultProps)});a.renderStyles(d,_,p,g)}}return fn.memo(u)}function as(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=id(Fm.apply(void 0,ea([n],e,!1))),o=Rm(i);return new yw(o,i)}const Mw=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,bC=pe.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 4rem;
  border-bottom: 1px solid #e1e1e1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 2rem;
  }
`,EC=pe(Ol)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  transition: color 0.3s ease;
  z-index: 2;

  &:hover {
    animation: ${Mw} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,TC=pe.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Eo=pe(Ol)`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${n=>n.$isActive?"#1a1a1a":"#666"};
  transition: color 0.3s ease;

  &:hover {
    animation: ${Mw} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;function CC(){const n=wr();return P.jsxs(bC,{children:[P.jsx(EC,{to:"/",children:"NM"}),P.jsxs(TC,{children:[P.jsx(Eo,{to:"/",$isActive:n.pathname==="/",children:"Casa"}),P.jsx(Eo,{to:"/about",$isActive:n.pathname==="/about",children:"Vibe"}),P.jsx(Eo,{to:"/projects",$isActive:n.pathname==="/projects",children:"Curiosities"}),P.jsx(Eo,{to:"/writings",$isActive:n.pathname.includes("/writings"),children:"Wonderlings"}),P.jsx(Eo,{to:"/contact",$isActive:n.pathname==="/contact",children:"Poke"}),P.jsx(Eo,{to:"/coffee",$isActive:n.pathname==="/coffee",children:"Brew"})]})]})}const AC=pe.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;function PC(){return P.jsxs(AC,{children:[P.jsx(CC,{}),P.jsx(X1,{})]})}function LC(){return P.jsx(X1,{})}function RC(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}function Cd(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Gp=n=>Array.isArray(n);function bw(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function Cl(n){return typeof n=="string"||Array.isArray(n)}function By(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function zm(n,e,t,i){if(typeof e=="function"){const[o,a]=By(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=By(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function Ad(n,e,t){const i=n.getProps();return zm(i,e,t!==void 0?t:i.custom,n)}const Nm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Om=["initial",...Nm],Ul=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zs=new Set(Ul),vr=n=>n*1e3,yr=n=>n/1e3,DC={type:"spring",stiffness:500,damping:25,restSpeed:10},IC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),kC={type:"keyframes",duration:.8},FC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zC=(n,{keyframes:e})=>e.length>2?kC:Zs.has(n)?n.startsWith("scale")?IC(e[1]):DC:FC;function Bm(n,e){return n?n[e]||n.default||n:void 0}const NC={skipAnimations:!1,useManualTiming:!1},OC=n=>n!==null;function Pd(n,{repeat:e,repeatType:t="loop"},i){const o=n.filter(OC),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const oi=n=>n;let Hp=oi;function BC(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(f){a.has(f)&&(d.schedule(f),n()),f(u)}const d={schedule:(f,p=!1,m=!1)=>{const _=m&&i?e:t;return p&&a.add(f),_.has(f)||_.add(f),f},cancel:f=>{t.delete(f),a.delete(f)},process:f=>{if(u=f,i){o=!0;return}i=!0,[e,t]=[t,e],e.forEach(c),e.clear(),i=!1,o&&(o=!1,d.process(f))}};return d}const nc=["read","resolveKeyframes","update","preRender","render","postRender"],UC=40;function Ew(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=nc.reduce((S,T)=>(S[T]=BC(a),S),{}),{read:c,resolveKeyframes:d,update:f,preRender:p,render:m,postRender:g}=u,_=()=>{const S=performance.now();t=!1,o.delta=i?1e3/60:Math.max(Math.min(S-o.timestamp,UC),1),o.timestamp=S,o.isProcessing=!0,c.process(o),d.process(o),f.process(o),p.process(o),m.process(o),g.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(_))},M=()=>{t=!0,i=!0,o.isProcessing||n(_)};return{schedule:nc.reduce((S,T)=>{const L=u[T];return S[T]=(R,b=!1,I=!1)=>(t||M(),L.schedule(R,b,I)),S},{}),cancel:S=>{for(let T=0;T<nc.length;T++)u[nc[T]].cancel(S)},state:o,steps:u}}const{schedule:Vt,cancel:rs,state:Sn,steps:Rh}=Ew(typeof requestAnimationFrame<"u"?requestAnimationFrame:oi,!0),Tw=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,VC=1e-7,jC=12;function GC(n,e,t,i,o){let a,u,c=0;do u=e+(t-e)/2,a=Tw(u,i,o)-n,a>0?t=u:e=u;while(Math.abs(a)>VC&&++c<jC);return u}function Vl(n,e,t,i){if(n===e&&t===i)return oi;const o=a=>GC(a,0,1,n,t);return a=>a===0||a===1?a:Tw(o(a),e,i)}const Cw=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Aw=n=>e=>1-n(1-e),Pw=Vl(.33,1.53,.69,.99),Um=Aw(Pw),Lw=Cw(Um),Rw=n=>(n*=2)<1?.5*Um(n):.5*(2-Math.pow(2,-10*(n-1))),Vm=n=>1-Math.sin(Math.acos(n)),Dw=Aw(Vm),Iw=Cw(Vm),kw=n=>/^0[^.\s]+$/u.test(n);function HC(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||kw(n):!0}const Fw=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),zw=n=>e=>typeof e=="string"&&e.startsWith(n),Nw=zw("--"),WC=zw("var(--"),jm=n=>WC(n)?$C.test(n.split("/*")[0].trim()):!1,$C=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,XC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qC(n){const e=XC.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function Ow(n,e,t=1){const[i,o]=qC(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const u=a.trim();return Fw(u)?parseFloat(u):u}return jm(o)?Ow(o,e,t+1):o}const _r=(n,e,t)=>t>e?e:t<n?n:t,ma={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Al={...ma,transform:n=>_r(0,1,n)},ic={...ma,default:1},jl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Qr=jl("deg"),Zi=jl("%"),dt=jl("px"),YC=jl("vh"),KC=jl("vw"),Uy={...Zi,parse:n=>Zi.parse(n)/100,transform:n=>Zi.transform(n*100)},ZC=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Vy=n=>n===ma||n===dt,jy=(n,e)=>parseFloat(n.split(", ")[e]),Gy=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return jy(o[1],e);{const a=i.match(/^matrix\((.+)\)$/u);return a?jy(a[1],n):0}},QC=new Set(["x","y","z"]),JC=Ul.filter(n=>!QC.has(n));function e2(n){const e=[];return JC.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const oa={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Gy(4,13),y:Gy(5,14)};oa.translateX=oa.x;oa.translateY=oa.y;const Bw=n=>e=>e.test(n),t2={test:n=>n==="auto",parse:n=>n},Uw=[ma,dt,Zi,Qr,KC,YC,t2],Hy=n=>Uw.find(Bw(n)),js=new Set;let Wp=!1,$p=!1;function Vw(){if($p){const n=Array.from(js).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=e2(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,u])=>{var c;(c=i.getValue(a))===null||c===void 0||c.set(u)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}$p=!1,Wp=!1,js.forEach(n=>n.complete()),js.clear()}function jw(){js.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&($p=!0)})}function n2(){jw(),Vw()}class Gm{constructor(e,t,i,o,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(js.add(this),Wp||(Wp=!0,Vt.read(jw),Vt.resolveKeyframes(Vw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(i&&t){const d=i.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),js.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,js.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _l=n=>Math.round(n*1e5)/1e5,Hm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function i2(n){return n==null}const r2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wm=(n,e)=>t=>!!(typeof t=="string"&&r2.test(t)&&t.startsWith(n)||e&&!i2(t)&&Object.prototype.hasOwnProperty.call(t,e)),Gw=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,u,c]=i.match(Hm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},s2=n=>_r(0,255,n),Dh={...ma,transform:n=>Math.round(s2(n))},Ns={test:Wm("rgb","red"),parse:Gw("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Dh.transform(n)+", "+Dh.transform(e)+", "+Dh.transform(t)+", "+_l(Al.transform(i))+")"};function o2(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Xp={test:Wm("#"),parse:o2,transform:Ns.transform},$o={test:Wm("hsl","hue"),parse:Gw("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Zi.transform(_l(e))+", "+Zi.transform(_l(t))+", "+_l(Al.transform(i))+")"},Ln={test:n=>Ns.test(n)||Xp.test(n)||$o.test(n),parse:n=>Ns.test(n)?Ns.parse(n):$o.test(n)?$o.parse(n):Xp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ns.transform(n):$o.transform(n)},a2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function l2(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Hm))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(a2))===null||t===void 0?void 0:t.length)||0)>0}const Hw="number",Ww="color",u2="var",c2="var(",Wy="${}",d2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pl(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const c=e.replace(d2,d=>(Ln.test(d)?(i.color.push(a),o.push(Ww),t.push(Ln.parse(d))):d.startsWith(c2)?(i.var.push(a),o.push(u2),t.push(d)):(i.number.push(a),o.push(Hw),t.push(parseFloat(d))),++a,Wy)).split(Wy);return{values:t,split:c,indexes:i,types:o}}function $w(n){return Pl(n).values}function Xw(n){const{split:e,types:t}=Pl(n),i=e.length;return o=>{let a="";for(let u=0;u<i;u++)if(a+=e[u],o[u]!==void 0){const c=t[u];c===Hw?a+=_l(o[u]):c===Ww?a+=Ln.transform(o[u]):a+=o[u]}return a}}const f2=n=>typeof n=="number"?0:n;function h2(n){const e=$w(n);return Xw(n)(e.map(f2))}const ss={test:l2,parse:$w,createTransformer:Xw,getAnimatableNone:h2},p2=new Set(["brightness","contrast","saturate","opacity"]);function m2(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Hm)||[];if(!i)return n;const o=t.replace(i,"");let a=p2.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const g2=/\b([a-z-]*)\(.*?\)/gu,qp={...ss,getAnimatableNone:n=>{const e=n.match(g2);return e?e.map(m2).join(" "):n}},v2={borderWidth:dt,borderTopWidth:dt,borderRightWidth:dt,borderBottomWidth:dt,borderLeftWidth:dt,borderRadius:dt,radius:dt,borderTopLeftRadius:dt,borderTopRightRadius:dt,borderBottomRightRadius:dt,borderBottomLeftRadius:dt,width:dt,maxWidth:dt,height:dt,maxHeight:dt,top:dt,right:dt,bottom:dt,left:dt,padding:dt,paddingTop:dt,paddingRight:dt,paddingBottom:dt,paddingLeft:dt,margin:dt,marginTop:dt,marginRight:dt,marginBottom:dt,marginLeft:dt,backgroundPositionX:dt,backgroundPositionY:dt},y2={rotate:Qr,rotateX:Qr,rotateY:Qr,rotateZ:Qr,scale:ic,scaleX:ic,scaleY:ic,scaleZ:ic,skew:Qr,skewX:Qr,skewY:Qr,distance:dt,translateX:dt,translateY:dt,translateZ:dt,x:dt,y:dt,z:dt,perspective:dt,transformPerspective:dt,opacity:Al,originX:Uy,originY:Uy,originZ:dt},$y={...ma,transform:Math.round},$m={...v2,...y2,zIndex:$y,size:dt,fillOpacity:Al,strokeOpacity:Al,numOctaves:$y},x2={...$m,color:Ln,backgroundColor:Ln,outlineColor:Ln,fill:Ln,stroke:Ln,borderColor:Ln,borderTopColor:Ln,borderRightColor:Ln,borderBottomColor:Ln,borderLeftColor:Ln,filter:qp,WebkitFilter:qp},Xm=n=>x2[n];function qw(n,e){let t=Xm(n);return t!==qp&&(t=ss),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const _2=new Set(["auto","none","0"]);function w2(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!_2.has(a)&&Pl(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=qw(t,o)}class Yw extends Gm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let f=e[d];if(typeof f=="string"&&(f=f.trim(),jm(f))){const p=Ow(f,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!ZC.has(i)||e.length!==2)return;const[o,a]=e,u=Hy(o),c=Hy(a);if(u!==c)if(Vy(u)&&Vy(c))for(let d=0;d<e.length;d++){const f=e[d];typeof f=="string"&&(e[d]=parseFloat(f))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)HC(e[o])&&i.push(o);i.length&&w2(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=oa[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(i);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=oa[i](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,f])=>{t.getValue(d).set(f)}),this.resolveNoneKeyframes()}}function qm(n){return typeof n=="function"}let Xc;function S2(){Xc=void 0}const Qi={now:()=>(Xc===void 0&&Qi.set(Sn.isProcessing||NC.useManualTiming?Sn.timestamp:performance.now()),Xc),set:n=>{Xc=n,queueMicrotask(S2)}},Xy=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ss.test(n)||n==="0")&&!n.startsWith("url("));function M2(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function b2(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=Xy(o,e),c=Xy(a,e);return!u||!c?!1:M2(n)||(t==="spring"||qm(t))&&i}const E2=40;class Kw{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Qi.now(),this.options={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>E2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&n2(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Qi.now(),this.hasAttemptedResolve=!0;const{name:i,type:o,velocity:a,delay:u,onComplete:c,onUpdate:d,isGenerator:f}=this.options;if(!f&&!b2(e,i,o,a))if(u)this.options.duration=0;else{d==null||d(Pd(e,this.options,t)),c==null||c(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const aa=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},Zw=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=n(aa(0,o-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function Qw(n,e){return e?n*(1e3/e):0}const T2=5;function Jw(n,e,t){const i=Math.max(e-T2,0);return Qw(t-n(i),e-i)}const Zt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ih=.001;function C2({duration:n=Zt.duration,bounce:e=Zt.bounce,velocity:t=Zt.velocity,mass:i=Zt.mass}){let o,a,u=1-e;u=_r(Zt.minDamping,Zt.maxDamping,u),n=_r(Zt.minDuration,Zt.maxDuration,yr(n)),u<1?(o=f=>{const p=f*u,m=p*n,g=p-t,_=Yp(f,u),M=Math.exp(-m);return Ih-g/_*M},a=f=>{const m=f*u*n,g=m*t+t,_=Math.pow(u,2)*Math.pow(f,2)*n,M=Math.exp(-m),x=Yp(Math.pow(f,2),u);return(-o(f)+Ih>0?-1:1)*((g-_)*M)/x}):(o=f=>{const p=Math.exp(-f*n),m=(f-t)*n+1;return-Ih+p*m},a=f=>{const p=Math.exp(-f*n),m=(t-f)*(n*n);return p*m});const c=5/n,d=P2(o,a,c);if(n=vr(n),isNaN(d))return{stiffness:Zt.stiffness,damping:Zt.damping,duration:n};{const f=Math.pow(d,2)*i;return{stiffness:f,damping:u*2*Math.sqrt(i*f),duration:n}}}const A2=12;function P2(n,e,t){let i=t;for(let o=1;o<A2;o++)i=i-n(i)/e(i);return i}function Yp(n,e){return n*Math.sqrt(1-e*e)}const Kp=2e4;function eS(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Kp;)e+=t,i=n.next(e);return e>=Kp?1/0:e}const L2=["duration","bounce"],R2=["stiffness","damping","mass"];function qy(n,e){return e.some(t=>n[t]!==void 0)}function D2(n){let e={velocity:Zt.velocity,stiffness:Zt.stiffness,damping:Zt.damping,mass:Zt.mass,isResolvedFromDuration:!1,...n};if(!qy(n,R2)&&qy(n,L2))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*_r(.05,1,1-n.bounce)*Math.sqrt(o);e={...e,mass:Zt.mass,stiffness:o,damping:a}}else{const t=C2(n);e={...e,...t,mass:Zt.mass},e.isResolvedFromDuration=!0}return e}function tS(n=Zt.visualDuration,e=Zt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:a},{stiffness:d,damping:f,mass:p,duration:m,velocity:g,isResolvedFromDuration:_}=D2({...t,velocity:-yr(t.velocity||0)}),M=g||0,x=f/(2*Math.sqrt(d*p)),y=u-a,S=yr(Math.sqrt(d/p)),T=Math.abs(y)<5;i||(i=T?Zt.restSpeed.granular:Zt.restSpeed.default),o||(o=T?Zt.restDelta.granular:Zt.restDelta.default);let L;if(x<1){const b=Yp(S,x);L=I=>{const O=Math.exp(-x*S*I);return u-O*((M+x*S*y)/b*Math.sin(b*I)+y*Math.cos(b*I))}}else if(x===1)L=b=>u-Math.exp(-S*b)*(y+(M+S*y)*b);else{const b=S*Math.sqrt(x*x-1);L=I=>{const O=Math.exp(-x*S*I),C=Math.min(b*I,300);return u-O*((M+x*S*y)*Math.sinh(C)+b*y*Math.cosh(C))/b}}const R={calculatedDuration:_&&m||null,next:b=>{const I=L(b);if(_)c.done=b>=m;else{let O=0;x<1&&(O=b===0?vr(M):Jw(L,b,I));const C=Math.abs(O)<=i,z=Math.abs(u-I)<=o;c.done=C&&z}return c.value=c.done?u:I,c},toString:()=>{const b=Math.min(eS(R),Kp),I=Zw(O=>R.next(b*O).value,b,30);return b+"ms "+I}};return R}function Yy({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:c,max:d,restDelta:f=.5,restSpeed:p}){const m=n[0],g={done:!1,value:m},_=C=>c!==void 0&&C<c||d!==void 0&&C>d,M=C=>c===void 0?d:d===void 0||Math.abs(c-C)<Math.abs(d-C)?c:d;let x=t*e;const y=m+x,S=u===void 0?y:u(y);S!==y&&(x=S-m);const T=C=>-x*Math.exp(-C/i),L=C=>S+T(C),R=C=>{const z=T(C),te=L(C);g.done=Math.abs(z)<=f,g.value=g.done?S:te};let b,I;const O=C=>{_(g.value)&&(b=C,I=tS({keyframes:[g.value,M(g.value)],velocity:Jw(L,C,g.value),damping:o,stiffness:a,restDelta:f,restSpeed:p}))};return O(0),{calculatedDuration:null,next:C=>{let z=!1;return!I&&b===void 0&&(z=!0,R(C),O(C)),b!==void 0&&C>=b?I.next(C-b):(!z&&R(C),g)}}}const I2=Vl(.42,0,1,1),k2=Vl(0,0,.58,1),nS=Vl(.42,0,.58,1),F2=n=>Array.isArray(n)&&typeof n[0]!="number",Ym=n=>Array.isArray(n)&&typeof n[0]=="number",Ky={linear:oi,easeIn:I2,easeInOut:nS,easeOut:k2,circIn:Vm,circInOut:Iw,circOut:Dw,backIn:Um,backInOut:Lw,backOut:Pw,anticipate:Rw},Zy=n=>{if(Ym(n)){Hp(n.length===4);const[e,t,i,o]=n;return Vl(e,t,i,o)}else if(typeof n=="string")return Hp(Ky[n]!==void 0),Ky[n];return n},z2=(n,e)=>t=>e(n(t)),Gl=(...n)=>n.reduce(z2),qt=(n,e,t)=>n+(e-n)*t;function kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function N2({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,u=0;if(!e)o=a=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=kh(d,c,n+1/3),a=kh(d,c,n),u=kh(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:i}}function od(n,e){return t=>t>0?e:n}const Fh=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},O2=[Xp,Ns,$o],B2=n=>O2.find(e=>e.test(n));function Qy(n){const e=B2(n);if(!e)return!1;let t=e.parse(n);return e===$o&&(t=N2(t)),t}const Jy=(n,e)=>{const t=Qy(n),i=Qy(e);if(!t||!i)return od(n,e);const o={...t};return a=>(o.red=Fh(t.red,i.red,a),o.green=Fh(t.green,i.green,a),o.blue=Fh(t.blue,i.blue,a),o.alpha=qt(t.alpha,i.alpha,a),Ns.transform(o))},Zp=new Set(["none","hidden"]);function U2(n,e){return Zp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function V2(n,e){return t=>qt(n,e,t)}function Km(n){return typeof n=="number"?V2:typeof n=="string"?jm(n)?od:Ln.test(n)?Jy:H2:Array.isArray(n)?iS:typeof n=="object"?Ln.test(n)?Jy:j2:od}function iS(n,e){const t=[...n],i=t.length,o=n.map((a,u)=>Km(a)(a,e[u]));return a=>{for(let u=0;u<i;u++)t[u]=o[u](a);return t}}function j2(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=Km(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function G2(n,e){var t;const i=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const u=e.types[a],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;i[a]=d,o[u]++}return i}const H2=(n,e)=>{const t=ss.createTransformer(e),i=Pl(n),o=Pl(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Zp.has(n)&&!o.values.length||Zp.has(e)&&!i.values.length?U2(n,e):Gl(iS(G2(i,o),o.values),t):od(n,e)};function rS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?qt(n,e,t):Km(n)(n,e)}function W2(n,e,t){const i=[],o=t||rS,a=n.length-1;for(let u=0;u<a;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||oi:e;c=Gl(d,c)}i.push(c)}return i}function $2(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Hp(a===e.length),a===1)return()=>e[0];if(a===2&&n[0]===n[1])return()=>e[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=W2(e,i,o),c=u.length,d=f=>{let p=0;if(c>1)for(;p<n.length-2&&!(f<n[p+1]);p++);const m=aa(n[p],n[p+1],f);return u[p](m)};return t?f=>d(_r(n[0],n[a-1],f)):d}function X2(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=aa(0,e,i);n.push(qt(t,1,o))}}function q2(n){const e=[0];return X2(e,n.length-1),e}function Y2(n,e){return n.map(t=>t*e)}function K2(n,e){return n.map(()=>e||nS).splice(0,n.length-1)}function ad({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=F2(i)?i.map(Zy):Zy(i),a={done:!1,value:e[0]},u=Y2(t&&t.length===e.length?t:q2(e),n),c=$2(u,e,{ease:Array.isArray(o)?o:K2(e,o)});return{calculatedDuration:n,next:d=>(a.value=c(d),a.done=d>=n,a)}}const Z2=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Vt.update(e,!0),stop:()=>rs(e),now:()=>Sn.isProcessing?Sn.timestamp:Qi.now()}},Q2={decay:Yy,inertia:Yy,tween:ad,keyframes:ad,spring:tS},J2=n=>n/100;class Zm extends Kw{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:i,element:o,keyframes:a}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Gm,c=(d,f)=>this.onKeyframesResolved(d,f);this.resolver=new u(a,c,t,i,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=this.options,c=qm(t)?t:Q2[t]||ad;let d,f;c!==ad&&typeof e[0]!="number"&&(d=Gl(J2,rS(e[0],e[1])),e=[0,100]);const p=c({...this.options,keyframes:e});a==="mirror"&&(f=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=eS(p));const{calculatedDuration:m}=p,g=m+o,_=g*(i+1)-o;return{generator:p,mirroredGenerator:f,mapPercentToKeyframes:d,calculatedDuration:m,resolvedDuration:g,totalDuration:_}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:f,totalDuration:p,resolvedDuration:m}=i;if(this.startTime===null)return a.next(0);const{delay:g,repeat:_,repeatType:M,repeatDelay:x,onUpdate:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const S=this.currentTime-g*(this.speed>=0?1:-1),T=this.speed>=0?S<0:S>p;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let L=this.currentTime,R=a;if(_){const C=Math.min(this.currentTime,p)/m;let z=Math.floor(C),te=C%1;!te&&C>=1&&(te=1),te===1&&z--,z=Math.min(z,_+1),!!(z%2)&&(M==="reverse"?(te=1-te,x&&(te-=x/m)):M==="mirror"&&(R=u)),L=_r(0,1,te)*m}const b=T?{done:!1,value:d[0]}:R.next(L);c&&(b.value=c(b.value));let{done:I}=b;!T&&f!==null&&(I=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return O&&o!==void 0&&(b.value=Pd(d,this.options,o)),y&&y(b.value),O&&this.finish(),b}get duration(){const{resolved:e}=this;return e?yr(e.calculatedDuration):0}get time(){return yr(this.currentTime)}set time(e){e=vr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=yr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Z2,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const eA=new Set(["opacity","clipPath","filter","transform"]);function Qm(n){let e;return()=>(e===void 0&&(e=n()),e)}const tA={linearEasing:void 0};function nA(n,e){const t=Qm(n);return()=>{var i;return(i=tA[e])!==null&&i!==void 0?i:t()}}const ld=nA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function sS(n){return!!(typeof n=="function"&&ld()||!n||typeof n=="string"&&(n in Qp||ld())||Ym(n)||Array.isArray(n)&&n.every(sS))}const hl=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Qp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hl([0,.65,.55,1]),circOut:hl([.55,0,1,.45]),backIn:hl([.31,.01,.66,-.59]),backOut:hl([.33,1.53,.69,.99])};function oS(n,e){if(n)return typeof n=="function"&&ld()?Zw(n,e):Ym(n)?hl(n):Array.isArray(n)?n.map(t=>oS(t,e)||Qp.easeOut):Qp[n]}function iA(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const f={[e]:t};d&&(f.offset=d);const p=oS(c,o);return Array.isArray(p)&&(f.easing=p),n.animate(f,{delay:i,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}function ex(n,e){n.timeline=e,n.onfinish=null}const rA=Qm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ud=10,sA=2e4;function oA(n){return qm(n.type)||n.type==="spring"||!sS(n.ease)}function aA(n,e){const t=new Zm({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const o=[];let a=0;for(;!i.done&&a<sA;)i=t.sample(a),o.push(i.value),a+=ud;return{times:void 0,keyframes:o,duration:a-ud,ease:"linear"}}const aS={anticipate:Rw,backInOut:Lw,circInOut:Iw};function lA(n){return n in aS}class tx extends Kw{constructor(e){super(e);const{name:t,motionValue:i,element:o,keyframes:a}=this.options;this.resolver=new Yw(a,(u,c)=>this.onKeyframesResolved(u,c),t,i,o),this.resolver.scheduleResolve()}initPlayback(e,t){var i;let{duration:o=300,times:a,ease:u,type:c,motionValue:d,name:f,startTime:p}=this.options;if(!(!((i=d.owner)===null||i===void 0)&&i.current))return!1;if(typeof u=="string"&&ld()&&lA(u)&&(u=aS[u]),oA(this.options)){const{onComplete:g,onUpdate:_,motionValue:M,element:x,...y}=this.options,S=aA(e,y);e=S.keyframes,e.length===1&&(e[1]=e[0]),o=S.duration,a=S.times,u=S.ease,c="keyframes"}const m=iA(d.owner.current,f,e,{...this.options,duration:o,times:a,ease:u});return m.startTime=p??this.calcStartTime(),this.pendingTimeline?(ex(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;d.set(Pd(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:o,times:a,type:c,ease:u,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return yr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return yr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=vr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return oi;const{animation:i}=t;ex(i,e)}return oi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:o,type:a,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:f,onUpdate:p,onComplete:m,element:g,..._}=this.options,M=new Zm({..._,keyframes:i,duration:o,type:a,ease:u,times:c,isGenerator:!0}),x=vr(this.time);f.setWithVelocity(M.sample(x-ud).value,M.sample(x).value,ud)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:o,repeatType:a,damping:u,type:c}=e;return rA()&&i&&eA.has(i)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!o&&a!=="mirror"&&u!==0&&c!=="inertia"}}const uA=Qm(()=>window.ScrollTimeline!==void 0);class cA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(o=>uA()&&o.attachTimeline?o.attachTimeline(e):t(o));return()=>{i.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function dA({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:c,from:d,elapsed:f,...p}){return!!Object.keys(p).length}const Jm=(n,e,t,i={},o,a)=>u=>{const c=Bm(i,n)||{},d=c.delay||i.delay||0;let{elapsed:f=0}=i;f=f-vr(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-f,onUpdate:g=>{e.set(g),c.onUpdate&&c.onUpdate(g)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:a?void 0:o};dA(c)||(p={...p,...zC(n,p)}),p.duration&&(p.duration=vr(p.duration)),p.repeatDelay&&(p.repeatDelay=vr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(m=!0)),m&&!a&&e.get()!==void 0){const g=Pd(p.keyframes,c);if(g!==void 0)return Vt.update(()=>{p.onUpdate(g),p.onComplete()}),new cA([])}return!a&&tx.supports(p)?new tx(p):new Zm(p)},fA=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),hA=n=>Gp(n)?n[n.length-1]||0:n;function eg(n,e){n.indexOf(e)===-1&&n.push(e)}function tg(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class ng{constructor(){this.subscriptions=[]}add(e){return eg(this.subscriptions,e),()=>tg(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const nx=30,pA=n=>!isNaN(parseFloat(n));class mA{constructor(e,t={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,o=!0)=>{const a=Qi.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Qi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=pA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ng);const i=this.events[e].add(t);return e==="change"?()=>{i(),Vt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Qi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>nx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,nx);return Qw(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ll(n,e){return new mA(n,e)}function gA(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ll(t))}function vA(n,e){const t=Ad(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const u in a){const c=hA(a[u]);gA(n,u,c)}}const ig=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yA="framerAppearId",lS="data-"+ig(yA);function uS(n){return n.props[lS]}const Dn=n=>!!(n&&n.getVelocity);function xA(n){return!!(Dn(n)&&n.add)}function Jp(n,e){const t=n.getValue("willChange");if(xA(t))return t.add(e)}function _A({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function cS(n,e,{delay:t=0,transitionOverride:i,type:o}={}){var a;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;i&&(u=i);const f=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const m in d){const g=n.getValue(m,(a=n.latestValues[m])!==null&&a!==void 0?a:null),_=d[m];if(_===void 0||p&&_A(p,m))continue;const M={delay:t,...Bm(u||{},m)};let x=!1;if(window.MotionHandoffAnimation){const S=uS(n);if(S){const T=window.MotionHandoffAnimation(S,m,Vt);T!==null&&(M.startTime=T,x=!0)}}Jp(n,m),g.start(Jm(m,g,_,n.shouldReduceMotion&&Zs.has(m)?{type:!1}:M,n,x));const y=g.animation;y&&f.push(y)}return c&&Promise.all(f).then(()=>{Vt.update(()=>{c&&vA(n,c)})}),f}function em(n,e,t={}){var i;const o=Ad(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const u=o?()=>Promise.all(cS(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:g}=a;return wA(n,e,p+f,m,g,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[f,p]=d==="beforeChildren"?[u,c]:[c,u];return f().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function wA(n,e,t=0,i=0,o=1,a){const u=[],c=(n.variantChildren.size-1)*i,d=o===1?(f=0)=>f*i:(f=0)=>c-f*i;return Array.from(n.variantChildren).sort(SA).forEach((f,p)=>{f.notify("AnimationStart",e),u.push(em(f,e,{...a,delay:t+d(p)}).then(()=>f.notify("AnimationComplete",e)))}),Promise.all(u)}function SA(n,e){return n.sortNodePosition(e)}function MA(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>em(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=em(n,e,t);else{const o=typeof e=="function"?Ad(n,e,t.custom):e;i=Promise.all(cS(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const bA=Om.length;function dS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?dS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<bA;t++){const i=Om[t],o=n.props[i];(Cl(o)||o===!1)&&(e[i]=o)}return e}const EA=[...Nm].reverse(),TA=Nm.length;function CA(n){return e=>Promise.all(e.map(({animation:t,options:i})=>MA(n,t,i)))}function AA(n){let e=CA(n),t=ix(),i=!0;const o=d=>(f,p)=>{var m;const g=Ad(n,p,d==="exit"?(m=n.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(g){const{transition:_,transitionEnd:M,...x}=g;f={...f,...x,...M}}return f};function a(d){e=d(n)}function u(d){const{props:f}=n,p=dS(n.parent)||{},m=[],g=new Set;let _={},M=1/0;for(let y=0;y<TA;y++){const S=EA[y],T=t[S],L=f[S]!==void 0?f[S]:p[S],R=Cl(L),b=S===d?T.isActive:null;b===!1&&(M=y);let I=L===p[S]&&L!==f[S]&&R;if(I&&i&&n.manuallyAnimateOnMount&&(I=!1),T.protectedKeys={..._},!T.isActive&&b===null||!L&&!T.prevProp||Cd(L)||typeof L=="boolean")continue;const O=PA(T.prevProp,L);let C=O||S===d&&T.isActive&&!I&&R||y>M&&R,z=!1;const te=Array.isArray(L)?L:[L];let ne=te.reduce(o(S),{});b===!1&&(ne={});const{prevResolvedValues:Te={}}=T,_e={...Te,...ne},J=re=>{C=!0,g.has(re)&&(z=!0,g.delete(re)),T.needsAnimating[re]=!0;const X=n.getValue(re);X&&(X.liveStyle=!1)};for(const re in _e){const X=ne[re],q=Te[re];if(_.hasOwnProperty(re))continue;let Y=!1;Gp(X)&&Gp(q)?Y=!bw(X,q):Y=X!==q,Y?X!=null?J(re):g.add(re):X!==void 0&&g.has(re)?J(re):T.protectedKeys[re]=!0}T.prevProp=L,T.prevResolvedValues=ne,T.isActive&&(_={..._,...ne}),i&&n.blockInitialAnimation&&(C=!1),C&&(!(I&&O)||z)&&m.push(...te.map(re=>({animation:re,options:{type:S}})))}if(g.size){const y={};g.forEach(S=>{const T=n.getBaseTarget(S),L=n.getValue(S);L&&(L.liveStyle=!0),y[S]=T??null}),m.push({animation:y})}let x=!!m.length;return i&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(m):Promise.resolve()}function c(d,f){var p;if(t[d].isActive===f)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(g=>{var _;return(_=g.animationState)===null||_===void 0?void 0:_.setActive(d,f)}),t[d].isActive=f;const m=u(d);for(const g in t)t[g].protectedKeys={};return m}return{animateChanges:u,setActive:c,setAnimateFunction:a,getState:()=>t,reset:()=>{t=ix(),i=!0}}}function PA(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!bw(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ix(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}class LA extends ls{constructor(e){super(e),e.animationState||(e.animationState=AA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Cd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let RA=0;class DA extends ls{constructor(){super(...arguments),this.id=RA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const IA={animation:{Feature:LA},exit:{Feature:DA}},Ii={x:!1,y:!1};function fS(){return Ii.x||Ii.y}function kA(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(i=void 0)!==null&&i!==void 0?i:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function hS(n,e){const t=kA(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function rx(n){return e=>{e.pointerType==="touch"||fS()||n(e)}}function FA(n,e,t={}){const[i,o,a]=hS(n,t),u=rx(c=>{const{target:d}=c,f=e(c);if(!f||!d)return;const p=rx(m=>{f(m),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return i.forEach(c=>{c.addEventListener("pointerenter",u,o)}),a}const rg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,pl=new WeakSet;function sx(n){return e=>{e.key==="Enter"&&n(e)}}function zh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const zA=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=sx(()=>{if(pl.has(t))return;zh(t,"down");const o=sx(()=>{zh(t,"up")}),a=()=>zh(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)},NA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function OA(n){return NA.has(n.tagName)||n.tabIndex!==-1}const pS=(n,e)=>e?n===e?!0:pS(n,e.parentElement):!1;function ox(n){return rg(n)&&!fS()}function BA(n,e,t={}){const[i,o,a]=hS(n,t),u=c=>{const d=c.currentTarget;if(!ox(c)||pl.has(d))return;pl.add(d);const f=e(c),p=(_,M)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),!(!ox(_)||!pl.has(d))&&(pl.delete(d),f&&f(_,{success:M}))},m=_=>{p(_,t.useGlobalTarget||pS(d,_.target))},g=_=>{p(_,!1)};window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",g,o)};return i.forEach(c=>{OA(c)||(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",f=>zA(f,o),o)}),a}function UA(n){return n==="x"||n==="y"?Ii[n]?null:(Ii[n]=!0,()=>{Ii[n]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function Hl(n){return{point:{x:n.pageX,y:n.pageY}}}const VA=n=>e=>rg(e)&&n(e,Hl(e));function Rl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function wl(n,e,t,i){return Rl(n,e,VA(t),i)}const ax=(n,e)=>Math.abs(n-e);function jA(n,e){const t=ax(n.x,e.x),i=ax(n.y,e.y);return Math.sqrt(t**2+i**2)}class mS{constructor(e,t,{transformPagePoint:i,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Oh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,_=jA(m.offset,{x:0,y:0})>=3;if(!g&&!_)return;const{point:M}=m,{timestamp:x}=Sn;this.history.push({...M,timestamp:x});const{onStart:y,onMove:S}=this.handlers;g||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Nh(g,this.transformPagePoint),Vt.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:_,onSessionEnd:M,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Oh(m.type==="pointercancel"?this.lastMoveEventInfo:Nh(g,this.transformPagePoint),this.history);this.startEvent&&_&&_(m,y),M&&M(m,y)},!rg(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=o||window;const u=Hl(e),c=Nh(u,this.transformPagePoint),{point:d}=c,{timestamp:f}=Sn;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=t;p&&p(e,Oh(c,this.history)),this.removeListeners=Gl(wl(this.contextWindow,"pointermove",this.handlePointerMove),wl(this.contextWindow,"pointerup",this.handlePointerUp),wl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),rs(this.updatePoint)}}function Nh(n,e){return e?{point:e(n.point)}:n}function lx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Oh({point:n},e){return{point:n,delta:lx(n,gS(e)),offset:lx(n,GA(e)),velocity:HA(e,.1)}}function GA(n){return n[0]}function gS(n){return n[n.length-1]}function HA(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=gS(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>vr(e)));)t--;if(!i)return{x:0,y:0};const a=yr(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Xo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const vS=1e-4,WA=1-vS,$A=1+vS,yS=.01,XA=0-yS,qA=0+yS;function li(n){return n.max-n.min}function YA(n,e,t){return Math.abs(n-e)<=t}function ux(n,e,t,i=.5){n.origin=i,n.originPoint=qt(e.min,e.max,n.origin),n.scale=li(t)/li(e),n.translate=qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=WA&&n.scale<=$A||isNaN(n.scale))&&(n.scale=1),(n.translate>=XA&&n.translate<=qA||isNaN(n.translate))&&(n.translate=0)}function Sl(n,e,t,i){ux(n.x,e.x,t.x,i?i.originX:void 0),ux(n.y,e.y,t.y,i?i.originY:void 0)}function cx(n,e,t){n.min=t.min+e.min,n.max=n.min+li(e)}function KA(n,e,t){cx(n.x,e.x,t.x),cx(n.y,e.y,t.y)}function dx(n,e,t){n.min=e.min-t.min,n.max=n.min+li(e)}function Ml(n,e,t){dx(n.x,e.x,t.x),dx(n.y,e.y,t.y)}function ZA(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?qt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?qt(t,n,i.max):Math.min(n,t)),n}function fx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function QA(n,{top:e,left:t,bottom:i,right:o}){return{x:fx(n.x,t,o),y:fx(n.y,e,i)}}function hx(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function JA(n,e){return{x:hx(n.x,e.x),y:hx(n.y,e.y)}}function eP(n,e){let t=.5;const i=li(n),o=li(e);return o>i?t=aa(e.min,e.max-i,n.min):i>o&&(t=aa(n.min,n.max-o,e.min)),_r(0,1,t)}function tP(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const tm=.35;function nP(n=tm){return n===!1?n=0:n===!0&&(n=tm),{x:px(n,"left","right"),y:px(n,"top","bottom")}}function px(n,e,t){return{min:mx(n,e),max:mx(n,t)}}function mx(n,e){return typeof n=="number"?n:n[e]||0}const gx=()=>({translate:0,scale:1,origin:0,originPoint:0}),qo=()=>({x:gx(),y:gx()}),vx=()=>({min:0,max:0}),nn=()=>({x:vx(),y:vx()});function yi(n){return[n("x"),n("y")]}function xS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function iP({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function rP(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Bh(n){return n===void 0||n===1}function nm({scale:n,scaleX:e,scaleY:t}){return!Bh(n)||!Bh(e)||!Bh(t)}function Ps(n){return nm(n)||_S(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function _S(n){return yx(n.x)||yx(n.y)}function yx(n){return n&&n!=="0%"}function cd(n,e,t){const i=n-t,o=e*i;return t+o}function xx(n,e,t,i,o){return o!==void 0&&(n=cd(n,o,i)),cd(n,t,i)+e}function im(n,e=0,t=1,i,o){n.min=xx(n.min,e,t,i,o),n.max=xx(n.max,e,t,i,o)}function wS(n,{x:e,y:t}){im(n.x,e.translate,e.scale,e.originPoint),im(n.y,t.translate,t.scale,t.originPoint)}const _x=.999999999999,wx=1.0000000000001;function sP(n,e,t,i=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,u;for(let c=0;c<o;c++){a=t[c],u=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ko(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,wS(n,u)),i&&Ps(a.latestValues)&&Ko(n,a.latestValues))}e.x<wx&&e.x>_x&&(e.x=1),e.y<wx&&e.y>_x&&(e.y=1)}function Yo(n,e){n.min=n.min+e,n.max=n.max+e}function Sx(n,e,t,i,o=.5){const a=qt(n.min,n.max,o);im(n,e,t,a,i)}function Ko(n,e){Sx(n.x,e.x,e.scaleX,e.scale,e.originX),Sx(n.y,e.y,e.scaleY,e.scale,e.originY)}function SS(n,e){return xS(rP(n.getBoundingClientRect(),e))}function oP(n,e,t){const i=SS(n,t),{scroll:o}=e;return o&&(Yo(i.x,o.offset.x),Yo(i.y,o.offset.y)),i}const MS=({current:n})=>n?n.ownerDocument.defaultView:null,aP=new WeakMap;class lP{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nn(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Hl(p).point)},a=(p,m)=>{const{drag:g,dragPropagation:_,onDragStart:M}=this.getProps();if(g&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UA(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(y=>{let S=this.getAxisMotionValue(y).get()||0;if(Zi.test(S)){const{projection:T}=this.visualElement;if(T&&T.layout){const L=T.layout.layoutBox[y];L&&(S=li(L)*(parseFloat(S)/100))}}this.originPoint[y]=S}),M&&Vt.postRender(()=>M(p,m)),Jp(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},u=(p,m)=>{const{dragPropagation:g,dragDirectionLock:_,onDirectionLock:M,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:y}=m;if(_&&this.currentDirection===null){this.currentDirection=uP(y),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",m.point,y),this.updateAxis("y",m.point,y),this.visualElement.render(),x&&x(p,m)},c=(p,m)=>this.stop(p,m),d=()=>yi(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new mS(e,{onSessionStart:o,onStart:a,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:MS(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Vt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!rc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(u=ZA(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Xo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=QA(o.layoutBox,t):this.constraints=!1,this.elastic=nP(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&yi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=tP(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Xo(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=oP(i,o.root,this.visualElement.getTransformPagePoint());let u=JA(o.layout.layoutBox,a);if(t){const c=t(iP(u));this.hasMutatedConstraints=!!c,c&&(u=xS(c))}return u}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},f=yi(p=>{if(!rc(p,t,this.currentDirection))return;let m=d[p]||{};u&&(m={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,M)});return Promise.all(f).then(c)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Jp(this.visualElement,e),i.start(Jm(e,i,0,t,this.visualElement,!1))}stopAnimation(){yi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){yi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){yi(t=>{const{drag:i}=this.getProps();if(!rc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];a.set(e[t]-qt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Xo(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};yi(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=eP({min:d,max:d},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),yi(u=>{if(!rc(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:f}=this.constraints[u];c.set(qt(d,f,o[u]))})}addListeners(){if(!this.visualElement.current)return;aP.set(this.visualElement,this);const e=this.visualElement.current,t=wl(e,"pointerdown",d=>{const{drag:f,dragListener:p=!0}=this.getProps();f&&p&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();Xo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Vt.read(i);const u=Rl(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f})=>{this.isDragging&&f&&(yi(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=d[p].translate,m.set(m.get()+d[p].translate))}),this.visualElement.render())});return()=>{u(),t(),a(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=tm,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:c}}}function rc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function uP(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class cP extends ls{constructor(e){super(e),this.removeGroupControls=oi,this.removeListeners=oi,this.controls=new lP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Mx=n=>(e,t)=>{n&&Vt.postRender(()=>n(e,t))};class dP extends ls{constructor(){super(...arguments),this.removePointerDownListener=oi}onPointerDown(e){this.session=new mS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:MS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Mx(e),onStart:Mx(t),onMove:i,onEnd:(a,u)=>{delete this.session,o&&Vt.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=wl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ld=U.createContext(null);function fP(){const n=U.useContext(Ld);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:i}=n,o=U.useId();U.useEffect(()=>i(o),[]);const a=U.useCallback(()=>t&&t(o),[o,t]);return!e&&t?[!1,a]:[!0]}const sg=U.createContext({}),bS=U.createContext({}),qc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function bx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const nl={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(dt.test(n))n=parseFloat(n);else return n;const t=bx(n,e.target.x),i=bx(n,e.target.y);return`${t}% ${i}%`}},hP={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=ss.parse(n);if(o.length>5)return i;const a=ss.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const f=qt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=f),typeof o[3+u]=="number"&&(o[3+u]/=f),a(o)}},dd={};function pP(n){Object.assign(dd,n)}const{schedule:og,cancel:zN}=Ew(queueMicrotask,!1);class mP extends U.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;pP(gP),a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),qc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,u=i.projection;return u&&(u.isPresent=a,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||Vt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),og.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ES(n){const[e,t]=fP(),i=U.useContext(sg);return P.jsx(mP,{...n,layoutGroup:i,switchLayoutGroup:U.useContext(bS),isPresent:e,safeToRemove:t})}const gP={borderRadius:{...nl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:nl,borderTopRightRadius:nl,borderBottomLeftRadius:nl,borderBottomRightRadius:nl,boxShadow:hP},TS=["TopLeft","TopRight","BottomLeft","BottomRight"],vP=TS.length,Ex=n=>typeof n=="string"?parseFloat(n):n,Tx=n=>typeof n=="number"||dt.test(n);function yP(n,e,t,i,o,a){o?(n.opacity=qt(0,t.opacity!==void 0?t.opacity:1,xP(i)),n.opacityExit=qt(e.opacity!==void 0?e.opacity:1,0,_P(i))):a&&(n.opacity=qt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let u=0;u<vP;u++){const c=`border${TS[u]}Radius`;let d=Cx(e,c),f=Cx(t,c);if(d===void 0&&f===void 0)continue;d||(d=0),f||(f=0),d===0||f===0||Tx(d)===Tx(f)?(n[c]=Math.max(qt(Ex(d),Ex(f),i),0),(Zi.test(f)||Zi.test(d))&&(n[c]+="%")):n[c]=f}(e.rotate||t.rotate)&&(n.rotate=qt(e.rotate||0,t.rotate||0,i))}function Cx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const xP=CS(0,.5,Dw),_P=CS(.5,.95,oi);function CS(n,e,t){return i=>i<n?0:i>e?1:t(aa(n,e,i))}function Ax(n,e){n.min=e.min,n.max=e.max}function gi(n,e){Ax(n.x,e.x),Ax(n.y,e.y)}function Px(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Lx(n,e,t,i,o){return n-=e,n=cd(n,1/t,i),o!==void 0&&(n=cd(n,1/o,i)),n}function wP(n,e=0,t=1,i=.5,o,a=n,u=n){if(Zi.test(e)&&(e=parseFloat(e),e=qt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=qt(a.min,a.max,i);n===a&&(c-=e),n.min=Lx(n.min,e,t,c,o),n.max=Lx(n.max,e,t,c,o)}function Rx(n,e,[t,i,o],a,u){wP(n,e[t],e[i],e[o],e.scale,a,u)}const SP=["x","scaleX","originX"],MP=["y","scaleY","originY"];function Dx(n,e,t,i){Rx(n.x,e,SP,t?t.x:void 0,i?i.x:void 0),Rx(n.y,e,MP,t?t.y:void 0,i?i.y:void 0)}function Ix(n){return n.translate===0&&n.scale===1}function AS(n){return Ix(n.x)&&Ix(n.y)}function kx(n,e){return n.min===e.min&&n.max===e.max}function bP(n,e){return kx(n.x,e.x)&&kx(n.y,e.y)}function Fx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function PS(n,e){return Fx(n.x,e.x)&&Fx(n.y,e.y)}function zx(n){return li(n.x)/li(n.y)}function Nx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class EP{constructor(){this.members=[]}add(e){eg(this.members,e),e.scheduleRender()}remove(e){if(tg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function TP(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||a||u)&&(i=`translate3d(${o}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:f,rotate:p,rotateX:m,rotateY:g,skewX:_,skewY:M}=t;f&&(i=`perspective(${f}px) ${i}`),p&&(i+=`rotate(${p}deg) `),m&&(i+=`rotateX(${m}deg) `),g&&(i+=`rotateY(${g}deg) `),_&&(i+=`skewX(${_}deg) `),M&&(i+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(i+=`scale(${c}, ${d})`),i||"none"}const CP=(n,e)=>n.depth-e.depth;class AP{constructor(){this.children=[],this.isDirty=!1}add(e){eg(this.children,e),this.isDirty=!0}remove(e){tg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(CP),this.isDirty=!1,this.children.forEach(e)}}function Yc(n){const e=Dn(n)?n.get():n;return fA(e)?e.toValue():e}function PP(n,e){const t=Qi.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(rs(i),n(a-e))};return Vt.read(i,!0),()=>rs(i)}function LP(n){return n instanceof SVGElement&&n.tagName!=="svg"}function RP(n,e,t){const i=Dn(n)?n:Ll(n);return i.start(Jm("",i,e,t)),i.animation}const Ls={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ml=typeof window<"u"&&window.MotionDebug!==void 0,Uh=["","X","Y","Z"],DP={visibility:"hidden"},Ox=1e3;let IP=0;function Vh(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function LS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=uS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Vt,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&LS(i)}function RS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=IP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ml&&(Ls.totalNodes=Ls.resolvedTargetDeltas=Ls.recalculatedProjection=0),this.nodes.forEach(zP),this.nodes.forEach(VP),this.nodes.forEach(jP),this.nodes.forEach(NP),ml&&window.MotionDebug.record(Ls)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new AP)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new ng),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=LP(u),this.instance=u;const{layoutId:d,layout:f,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(f||d)&&(this.isLayoutDirty=!0),n){let m;const g=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=PP(g,250),qc.hasAnimatedSinceResize&&(qc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ux))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g,hasRelativeTargetChanged:_,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||XP,{onLayoutAnimationStart:y,onLayoutAnimationComplete:S}=p.getProps(),T=!this.targetLayout||!PS(this.targetLayout,M)||_,L=!g&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||L||g&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,L);const R={...Bm(x,"layout"),onPlay:y,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else g||Ux(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,rs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GP),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&LS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Bx);return}this.isUpdating||this.nodes.forEach(BP),this.isUpdating=!1,this.nodes.forEach(UP),this.nodes.forEach(kP),this.nodes.forEach(FP),this.clearAllSnapshots();const c=Qi.now();Sn.delta=_r(0,1e3/60,c-Sn.timestamp),Sn.timestamp=c,Sn.isProcessing=!0,Rh.update.process(Sn),Rh.preRender.process(Sn),Rh.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,og.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(OP),this.sharedNodes.forEach(HP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!AS(this.projectionDelta),d=this.getTransformTemplate(),f=d?d(this.latestValues,""):void 0,p=f!==this.prevTransformTemplateValue;u&&(c||Ps(this.latestValues)||p)&&(o(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),qP(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return nn();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(YP))){const{scroll:p}=this.root;p&&(Yo(d.x,p.offset.x),Yo(d.y,p.offset.y))}return d}removeElementScroll(u){var c;const d=nn();if(gi(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let f=0;f<this.path.length;f++){const p=this.path[f],{scroll:m,options:g}=p;p!==this.root&&m&&g.layoutScroll&&(m.wasRoot&&gi(d,u),Yo(d.x,m.offset.x),Yo(d.y,m.offset.y))}return d}applyTransform(u,c=!1){const d=nn();gi(d,u);for(let f=0;f<this.path.length;f++){const p=this.path[f];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ko(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Ps(p.latestValues)&&Ko(d,p.latestValues)}return Ps(this.latestValues)&&Ko(d,this.latestValues),d}removeTransform(u){const c=nn();gi(c,u);for(let d=0;d<this.path.length;d++){const f=this.path[d];if(!f.instance||!Ps(f.latestValues))continue;nm(f.latestValues)&&f.updateSnapshot();const p=nn(),m=f.measurePageBox();gi(p,m),Dx(c,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,p)}return Ps(this.latestValues)&&Dx(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:g}=this.options;if(!(!this.layout||!(m||g))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),Ml(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=nn(),this.targetWithTransforms=nn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),KA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gi(this.target,this.layout.layoutBox),wS(this.target,this.targetDelta)):gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),Ml(this.relativeTargetOrigin,this.target,_.target),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ml&&Ls.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||nm(this.parent.latestValues)||_S(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let f=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(f=!1),f)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;gi(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,_=this.treeScale.y;sP(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=nn());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Px(this.prevProjectionDelta.x,this.projectionDelta.x),Px(this.prevProjectionDelta.y,this.projectionDelta.y)),Sl(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==_||!Nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),ml&&Ls.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qo(),this.projectionDelta=qo(),this.projectionDeltaWithTransform=qo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,f=d?d.latestValues:{},p={...this.latestValues},m=qo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const g=nn(),_=d?d.source:void 0,M=this.layout?this.layout.source:void 0,x=_!==M,y=this.getStack(),S=!y||y.members.length<=1,T=!!(x&&!S&&this.options.crossfade===!0&&!this.path.some($P));this.animationProgress=0;let L;this.mixTargetDelta=R=>{const b=R/1e3;Vx(m.x,u.x,b),Vx(m.y,u.y,b),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),WP(this.relativeTarget,this.relativeTargetOrigin,g,b),L&&bP(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=nn()),gi(L,this.relativeTarget)),x&&(this.animationValues=p,yP(p,f,this.latestValues,b,T,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(rs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Vt.update(()=>{qc.hasAnimatedSinceResize=!0,this.currentAnimation=RP(0,Ox,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ox),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:f,latestValues:p}=u;if(!(!c||!d||!f)){if(this!==u&&this.layout&&f&&DS(this.options.animationType,this.layout.layoutBox,f.layoutBox)){d=this.target||nn();const m=li(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+m;const g=li(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}gi(c,d),Ko(c,p),Sl(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new EP),this.sharedNodes.get(u).add(c);const f=c.options.initialPromotionConfig;c.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const f=this.getStack();f&&f.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const f={};d.z&&Vh("z",u,f,this.animationValues);for(let p=0;p<Uh.length;p++)Vh(`rotate${Uh[p]}`,u,f,this.animationValues),Vh(`skew${Uh[p]}`,u,f,this.animationValues);u.render();for(const p in f)u.setStaticValue(p,f[p]),this.animationValues&&(this.animationValues[p]=f[p]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return DP;const f={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Yc(u==null?void 0:u.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none",f;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Yc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ps(this.latestValues)&&(x.transform=p?p({},""):"none",this.hasProjected=!1),x}const g=m.animationValues||m.latestValues;this.applyTransformsToTarget(),f.transform=TP(this.projectionDeltaWithTransform,this.treeScale,g),p&&(f.transform=p(g,f.transform));const{x:_,y:M}=this.projectionDelta;f.transformOrigin=`${_.origin*100}% ${M.origin*100}% 0`,m.animationValues?f.opacity=m===this?(d=(c=g.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:f.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const x in dd){if(g[x]===void 0)continue;const{correct:y,applyTo:S}=dd[x],T=f.transform==="none"?g[x]:y(g[x],m);if(S){const L=S.length;for(let R=0;R<L;R++)f[S[R]]=T}else f[x]=T}return this.options.layoutId&&(f.pointerEvents=m===this?Yc(u==null?void 0:u.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Bx),this.root.sharedNodes.clear()}}}function kP(n){n.updateLayout()}function FP(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,u=t.source!==n.layout.source;a==="size"?yi(m=>{const g=u?t.measuredBox[m]:t.layoutBox[m],_=li(g);g.min=i[m].min,g.max=g.min+_}):DS(a,t.layoutBox,i)&&yi(m=>{const g=u?t.measuredBox[m]:t.layoutBox[m],_=li(i[m]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+_)});const c=qo();Sl(c,i,t.layoutBox);const d=qo();u?Sl(d,n.applyTransform(o,!0),t.measuredBox):Sl(d,i,t.layoutBox);const f=!AS(c);let p=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:g,layout:_}=m;if(g&&_){const M=nn();Ml(M,t.layoutBox,g.layoutBox);const x=nn();Ml(x,i,_.layoutBox),PS(M,x)||(p=!0),m.options.layoutRoot&&(n.relativeTarget=x,n.relativeTargetOrigin=M,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:f,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function zP(n){ml&&Ls.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function NP(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function OP(n){n.clearSnapshot()}function Bx(n){n.clearMeasurements()}function BP(n){n.isLayoutDirty=!1}function UP(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ux(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function VP(n){n.resolveTargetDelta()}function jP(n){n.calcProjection()}function GP(n){n.resetSkewAndRotation()}function HP(n){n.removeLeadSnapshot()}function Vx(n,e,t){n.translate=qt(e.translate,0,t),n.scale=qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function jx(n,e,t,i){n.min=qt(e.min,t.min,i),n.max=qt(e.max,t.max,i)}function WP(n,e,t,i){jx(n.x,e.x,t.x,i),jx(n.y,e.y,t.y,i)}function $P(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const XP={duration:.45,ease:[.4,0,.1,1]},Gx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Hx=Gx("applewebkit/")&&!Gx("chrome/")?Math.round:oi;function Wx(n){n.min=Hx(n.min),n.max=Hx(n.max)}function qP(n){Wx(n.x),Wx(n.y)}function DS(n,e,t){return n==="position"||n==="preserve-aspect"&&!YA(zx(e),zx(t),.2)}function YP(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const KP=RS({attachResizeListener:(n,e)=>Rl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jh={current:void 0},IS=RS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!jh.current){const n=new KP({});n.mount(window),n.setOptions({layoutScroll:!0}),jh.current=n}return jh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ZP={pan:{Feature:dP},drag:{Feature:cP,ProjectionNode:IS,MeasureLayout:ES}};function $x(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Vt.postRender(()=>a(e,Hl(e)))}class QP extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=FA(e,t=>($x(this.node,t,"Start"),i=>$x(this.node,i,"End"))))}unmount(){}}class JP extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gl(Rl(this.node.current,"focus",()=>this.onFocus()),Rl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Xx(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Vt.postRender(()=>a(e,Hl(e)))}class eL extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=BA(e,t=>(Xx(this.node,t,"Start"),(i,{success:o})=>Xx(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const rm=new WeakMap,Gh=new WeakMap,tL=n=>{const e=rm.get(n.target);e&&e(n)},nL=n=>{n.forEach(tL)};function iL({root:n,...e}){const t=n||document;Gh.has(t)||Gh.set(t,{});const i=Gh.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(nL,{root:n,...e})),i[o]}function rL(n,e,t){const i=iL(e);return rm.set(n,t),i.observe(n),()=>{rm.delete(n),i.unobserve(n)}}const sL={some:0,all:1};class oL extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:sL[o]},c=d=>{const{isIntersecting:f}=d;if(this.isInView===f||(this.isInView=f,a&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),g=f?p:m;g&&g(d)};return rL(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(aL(e,t))&&this.startObserver()}unmount(){}}function aL({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const lL={inView:{Feature:oL},tap:{Feature:eL},focus:{Feature:JP},hover:{Feature:QP}},uL={layout:{ProjectionNode:IS,MeasureLayout:ES}},ag=U.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Rd=U.createContext({}),lg=typeof window<"u",kS=lg?U.useLayoutEffect:U.useEffect,FS=U.createContext({strict:!1});function cL(n,e,t,i,o){var a,u;const{visualElement:c}=U.useContext(Rd),d=U.useContext(FS),f=U.useContext(Ld),p=U.useContext(ag).reducedMotion,m=U.useRef(null);i=i||d.renderer,!m.current&&i&&(m.current=i(n,{visualState:e,parent:c,props:t,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,_=U.useContext(bS);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&dL(m.current,t,o,_);const M=U.useRef(!1);U.useInsertionEffect(()=>{g&&M.current&&g.update(t,f)});const x=t[lS],y=U.useRef(!!x&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,x))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,x)));return kS(()=>{g&&(M.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),og.render(g.render),y.current&&g.animationState&&g.animationState.animateChanges())}),U.useEffect(()=>{g&&(!y.current&&g.animationState&&g.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,x)}),y.current=!1))}),g}function dL(n,e,t,i){const{layoutId:o,layout:a,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:f}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:zS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||c&&Xo(c),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:d,layoutRoot:f})}function zS(n){if(n)return n.options.allowProjection!==!1?n.projection:zS(n.parent)}function fL(n,e,t){return U.useCallback(i=>{i&&n.mount&&n.mount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):Xo(t)&&(t.current=i))},[e])}function Dd(n){return Cd(n.animate)||Om.some(e=>Cl(n[e]))}function NS(n){return!!(Dd(n)||n.variants)}function hL(n,e){if(Dd(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Cl(t)?t:void 0,animate:Cl(i)?i:void 0}}return n.inherit!==!1?e:{}}function pL(n){const{initial:e,animate:t}=hL(n,U.useContext(Rd));return U.useMemo(()=>({initial:e,animate:t}),[qx(e),qx(t)])}function qx(n){return Array.isArray(n)?n.join(" "):n}const Yx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},la={};for(const n in Yx)la[n]={isEnabled:e=>Yx[n].some(t=>!!e[t])};function mL(n){for(const e in n)la[e]={...la[e],...n[e]}}const gL=Symbol.for("motionComponentSymbol");function vL({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:o}){n&&mL(n);function a(c,d){let f;const p={...U.useContext(ag),...c,layoutId:yL(c)},{isStatic:m}=p,g=pL(c),_=i(c,m);if(!m&&lg){xL();const M=_L(p);f=M.MeasureLayout,g.visualElement=cL(o,_,p,e,M.ProjectionNode)}return P.jsxs(Rd.Provider,{value:g,children:[f&&g.visualElement?P.jsx(f,{visualElement:g.visualElement,...p}):null,t(o,c,fL(_,g.visualElement,d),_,m,g.visualElement)]})}const u=U.forwardRef(a);return u[gL]=o,u}function yL({layoutId:n}){const e=U.useContext(sg).id;return e&&n!==void 0?e+"-"+n:n}function xL(n,e){U.useContext(FS).strict}function _L(n){const{drag:e,layout:t}=la;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const wL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ug(n){return typeof n!="string"||n.includes("-")?!1:!!(wL.indexOf(n)>-1||/[A-Z]/u.test(n))}function OS(n,{style:e,vars:t},i,o){Object.assign(n.style,e,o&&o.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}const BS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function US(n,e,t,i){OS(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(BS.has(o)?o:ig(o),e.attrs[o])}function VS(n,{layout:e,layoutId:t}){return Zs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!dd[n]||n==="opacity")}function cg(n,e,t){var i;const{style:o}=n,a={};for(const u in o)(Dn(o[u])||e.style&&Dn(e.style[u])||VS(u,n)||((i=t==null?void 0:t.getValue(u))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[u]=o[u]);return a}function jS(n,e,t){const i=cg(n,e,t);for(const o in n)if(Dn(n[o])||Dn(e[o])){const a=Ul.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}function dg(n){const e=U.useRef(null);return e.current===null&&(e.current=n()),e.current}function SL({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},i,o,a){const u={latestValues:ML(i,o,a,n),renderState:e()};return t&&(u.mount=c=>t(i,c,u)),u}const GS=n=>(e,t)=>{const i=U.useContext(Rd),o=U.useContext(Ld),a=()=>SL(n,e,i,o);return t?a():dg(a)};function ML(n,e,t,i){const o={},a=i(n,{});for(const g in a)o[g]=Yc(a[g]);let{initial:u,animate:c}=n;const d=Dd(n),f=NS(n);e&&f&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const m=p?c:u;if(m&&typeof m!="boolean"&&!Cd(m)){const g=Array.isArray(m)?m:[m];for(let _=0;_<g.length;_++){const M=zm(n,g[_]);if(M){const{transitionEnd:x,transition:y,...S}=M;for(const T in S){let L=S[T];if(Array.isArray(L)){const R=p?L.length-1:0;L=L[R]}L!==null&&(o[T]=L)}for(const T in x)o[T]=x[T]}}}return o}const fg=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),HS=()=>({...fg(),attrs:{}}),WS=(n,e)=>e&&typeof n=="number"?e.transform(n):n,bL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},EL=Ul.length;function TL(n,e,t){let i="",o=!0;for(let a=0;a<EL;a++){const u=Ul[a],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const f=WS(c,$m[u]);if(!d){o=!1;const p=bL[u]||u;i+=`${p}(${f}) `}t&&(e[u]=f)}}return i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function hg(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let u=!1,c=!1;for(const d in e){const f=e[d];if(Zs.has(d)){u=!0;continue}else if(Nw(d)){o[d]=f;continue}else{const p=WS(f,$m[d]);d.startsWith("origin")?(c=!0,a[d]=p):i[d]=p}}if(e.transform||(u||t?i.transform=TL(e,n.transform,t):i.transform&&(i.transform="none")),c){const{originX:d="50%",originY:f="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${f} ${p}`}}function Kx(n,e,t){return typeof n=="string"?n:dt.transform(e+t*n)}function CL(n,e,t){const i=Kx(e,n.x,n.width),o=Kx(t,n.y,n.height);return`${i} ${o}`}const AL={offset:"stroke-dashoffset",array:"stroke-dasharray"},PL={offset:"strokeDashoffset",array:"strokeDasharray"};function LL(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?AL:PL;n[a.offset]=dt.transform(-i);const u=dt.transform(e),c=dt.transform(t);n[a.array]=`${u} ${c}`}function pg(n,{attrX:e,attrY:t,attrScale:i,originX:o,originY:a,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...f},p,m){if(hg(n,f,m),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:_,dimensions:M}=n;g.transform&&(M&&(_.transform=g.transform),delete g.transform),M&&(o!==void 0||a!==void 0||_.transform)&&(_.transformOrigin=CL(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),i!==void 0&&(g.scale=i),u!==void 0&&LL(g,u,c,d,!1)}const mg=n=>typeof n=="string"&&n.toLowerCase()==="svg",RL={useVisualState:GS({scrapeMotionValuesFromProps:jS,createRenderState:HS,onMount:(n,e,{renderState:t,latestValues:i})=>{Vt.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),Vt.render(()=>{pg(t,i,mg(e.tagName),n.transformTemplate),US(e,t)})}})},DL={useVisualState:GS({scrapeMotionValuesFromProps:cg,createRenderState:fg})};function $S(n,e,t){for(const i in e)!Dn(e[i])&&!VS(i,t)&&(n[i]=e[i])}function IL({transformTemplate:n},e){return U.useMemo(()=>{const t=fg();return hg(t,e,n),Object.assign({},t.vars,t.style)},[e])}function kL(n,e){const t=n.style||{},i={};return $S(i,t,n),Object.assign(i,IL(n,e)),i}function FL(n,e){const t={},i=kL(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const zL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fd(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||zL.has(n)}let XS=n=>!fd(n);function NL(n){n&&(XS=e=>e.startsWith("on")?!fd(e):n(e))}try{NL(require("@emotion/is-prop-valid").default)}catch{}function OL(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||(XS(o)||t===!0&&fd(o)||!e&&!fd(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}function BL(n,e,t,i){const o=U.useMemo(()=>{const a=HS();return pg(a,e,mg(i),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};$S(a,n.style,n),o.style={...a,...o.style}}return o}function UL(n=!1){return(t,i,o,{latestValues:a},u)=>{const d=(ug(t)?BL:FL)(i,a,u,t),f=OL(i,typeof t=="string",n),p=t!==U.Fragment?{...f,...d,ref:o}:{},{children:m}=i,g=U.useMemo(()=>Dn(m)?m.get():m,[m]);return U.createElement(t,{...p,children:g})}}function VL(n,e){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...ug(i)?RL:DL,preloadedFeatures:n,useRender:UL(o),createVisualElement:e,Component:i};return vL(u)}}const sm={current:null},qS={current:!1};function jL(){if(qS.current=!0,!!lg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>sm.current=n.matches;n.addListener(e),e()}else sm.current=!1}function GL(n,e,t){for(const i in e){const o=e[i],a=t[i];if(Dn(o))n.addValue(i,o);else if(Dn(a))n.addValue(i,Ll(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const u=n.getValue(i);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(i);n.addValue(i,Ll(u!==void 0?u:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Zx=new WeakMap,HL=[...Uw,Ln,ss],WL=n=>HL.find(Bw(n)),Qx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $L{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Qi.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,Vt.render(this.render,!1,!0))};const{latestValues:d,renderState:f}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=f,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=Dd(t),this.isVariantNode=NS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const g in m){const _=m[g];d[g]!==void 0&&Dn(_)&&_.set(d[g],!1)}}mount(e){this.current=e,Zx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),qS.current||jL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:sm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Zx.delete(this.current),this.projection&&this.projection.unmount(),rs(this.notifyUpdate),rs(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Zs.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Vt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in la){const t=la[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Qx.length;i++){const o=Qx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=e[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=GL(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Ll(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Fw(o)||kw(o))?o=parseFloat(o):!WL(o)&&ss.test(t)&&(o=qw(e,t)),this.setBaseTarget(e,Dn(o)?o.get():o)),Dn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const u=zm(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Dn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ng),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class YS extends $L{constructor(){super(...arguments),this.KeyframeResolver=Yw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Dn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function XL(n){return window.getComputedStyle(n)}class qL extends YS{constructor(){super(...arguments),this.type="html",this.renderInstance=OS}readValueFromInstance(e,t){if(Zs.has(t)){const i=Xm(t);return i&&i.default||0}else{const i=XL(e),o=(Nw(t)?i.getPropertyValue(t):i[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return SS(e,t)}build(e,t,i){hg(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return cg(e,t,i)}}class YL extends YS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Zs.has(t)){const i=Xm(t);return i&&i.default||0}return t=BS.has(t)?t:ig(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return jS(e,t,i)}build(e,t,i){pg(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,o){US(e,t,i,o)}mount(e){this.isSVGTag=mg(e.tagName),super.mount(e)}}const KL=(n,e)=>ug(n)?new YL(e):new qL(e,{allowProjection:n!==U.Fragment}),ZL=VL({...IA,...lL,...ZP,...uL},KL),Gt=RC(ZL);class QL extends U.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function JL({children:n,isPresent:e}){const t=U.useId(),i=U.useRef(null),o=U.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=U.useContext(ag);return U.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:f}=o.current;if(e||!i.current||!u||!c)return;i.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),P.jsx(QL,{isPresent:e,childRef:i,sizeRef:o,children:U.cloneElement(n,{ref:i})})}const eR=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:u})=>{const c=dg(tR),d=U.useId(),f=U.useCallback(m=>{c.set(m,!0);for(const g of c.values())if(!g)return;i&&i()},[c,i]),p=U.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:f,register:m=>(c.set(m,!1),()=>c.delete(m))}),a?[Math.random(),f]:[t,f]);return U.useMemo(()=>{c.forEach((m,g)=>c.set(g,!1))},[t]),U.useEffect(()=>{!t&&!c.size&&i&&i()},[t]),u==="popLayout"&&(n=P.jsx(JL,{isPresent:t,children:n})),P.jsx(Ld.Provider,{value:p,children:n})};function tR(){return new Map}const sc=n=>n.key||"";function Jx(n){const e=[];return U.Children.forEach(n,t=>{U.isValidElement(t)&&e.push(t)}),e}const hd=({children:n,exitBeforeEnter:e,custom:t,initial:i=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:u="sync"})=>{const c=U.useMemo(()=>Jx(n),[n]),d=c.map(sc),f=U.useRef(!0),p=U.useRef(c),m=dg(()=>new Map),[g,_]=U.useState(c),[M,x]=U.useState(c);kS(()=>{f.current=!1,p.current=c;for(let T=0;T<M.length;T++){const L=sc(M[T]);d.includes(L)?m.delete(L):m.get(L)!==!0&&m.set(L,!1)}},[M,d.length,d.join("-")]);const y=[];if(c!==g){let T=[...c];for(let L=0;L<M.length;L++){const R=M[L],b=sc(R);d.includes(b)||(T.splice(L,0,R),y.push(R))}u==="wait"&&y.length&&(T=y),x(Jx(T)),_(c);return}const{forceRender:S}=U.useContext(sg);return P.jsx(P.Fragment,{children:M.map(T=>{const L=sc(T),R=c===M||d.includes(L),b=()=>{if(m.has(L))m.set(L,!0);else return;let I=!0;m.forEach(O=>{O||(I=!1)}),I&&(S==null||S(),x(p.current),o&&o())};return P.jsx(eR,{isPresent:R,initial:!f.current||i?void 0:!1,custom:R?void 0:t,presenceAffectsLayout:a,mode:u,onExitComplete:R?void 0:b,children:T},L)})})};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gg="142",nR=0,e_=1,iR=2,KS=1,rR=2,gl=3,Dl=0,Ni=1,ua=2,sR=1,ts=0,Qo=1,bl=2,t_=3,n_=4,oR=5,Ho=100,aR=101,lR=102,i_=103,r_=104,uR=200,cR=201,dR=202,fR=203,ZS=204,QS=205,hR=206,pR=207,mR=208,gR=209,vR=210,yR=0,xR=1,_R=2,om=3,wR=4,SR=5,MR=6,bR=7,vg=0,ER=1,TR=2,xr=0,CR=1,AR=2,PR=3,LR=4,RR=5,JS=300,ca=301,da=302,am=303,lm=304,Id=306,um=1e3,Fi=1001,cm=1002,$n=1003,s_=1004,o_=1005,_i=1006,DR=1007,kd=1008,Ws=1009,IR=1010,kR=1011,eM=1012,FR=1013,Os=1014,Bs=1015,Il=1016,zR=1017,NR=1018,Jo=1020,OR=1021,BR=1022,qi=1023,UR=1024,VR=1025,Gs=1026,fa=1027,jR=1028,GR=1029,HR=1030,WR=1031,$R=1033,Hh=33776,Wh=33777,$h=33778,Xh=33779,a_=35840,l_=35841,u_=35842,c_=35843,XR=36196,d_=37492,f_=37496,h_=37808,p_=37809,m_=37810,g_=37811,v_=37812,y_=37813,x_=37814,__=37815,w_=37816,S_=37817,M_=37818,b_=37819,E_=37820,T_=37821,C_=36492,$s=3e3,Xt=3001,qR=3200,YR=3201,yg=0,KR=1,gr="srgb",Us="srgb-linear",qh=7680,ZR=519,dm=35044,A_="300 es",fm=1035;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=Math.PI/180,P_=180/Math.PI;function ns(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function si(n,e,t){return Math.max(e,Math.min(t,n))}function QR(n,e){return(n%e+e)%e}function Kh(n,e,t){return(1-t)*n+t*e}function L_(n){return(n&n-1)===0&&n!==0}function hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(){wi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,o,a,u,c,d,f){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=u,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],f=i[1],p=i[4],m=i[7],g=i[2],_=i[5],M=i[8],x=o[0],y=o[3],S=o[6],T=o[1],L=o[4],R=o[7],b=o[2],I=o[5],O=o[8];return a[0]=u*x+c*T+d*b,a[3]=u*y+c*L+d*I,a[6]=u*S+c*R+d*O,a[1]=f*x+p*T+m*b,a[4]=f*y+p*L+m*I,a[7]=f*S+p*R+m*O,a[2]=g*x+_*T+M*b,a[5]=g*y+_*L+M*I,a[8]=g*S+_*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8];return t*u*p-t*c*f-i*a*p+i*c*d+o*a*f-o*u*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8],m=p*u-c*f,g=c*d-p*a,_=f*a-u*d,M=t*m+i*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return e[0]=m*x,e[1]=(o*f-p*i)*x,e[2]=(c*i-o*u)*x,e[3]=g*x,e[4]=(p*t-o*d)*x,e[5]=(o*a-c*t)*x,e[6]=_*x,e[7]=(i*d-f*t)*x,e[8]=(u*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*u+f*c)+u+e,-o*f,o*d,-o*(-f*u+d*c)+c+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),o=this.elements,a=o[0],u=o[3],c=o[6],d=o[1],f=o[4],p=o[7];return o[0]=t*a+i*d,o[3]=t*u+i*f,o[6]=t*c+i*p,o[1]=-i*a+t*d,o[4]=-i*u+t*f,o[7]=-i*c+t*p,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function tM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function kl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zh={[gr]:{[Us]:Hs},[Us]:{[gr]:Kc}},Pi={legacyMode:!0,get workingColorSpace(){return Us},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Zh[e]&&Zh[e][t]!==void 0){const i=Zh[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},nM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={r:0,g:0,b:0},Li={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ac(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Us){return this.r=e,this.g=t,this.b=i,Pi.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Us){if(e=QR(e,1),t=si(t,0,1),i=si(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Qh(u,a,e+1/3),this.g=Qh(u,a,e),this.b=Qh(u,a,e-1/3)}return Pi.toWorkingColorSpace(this,o),this}setStyle(e,t=gr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Pi.toWorkingColorSpace(this,t),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Pi.toWorkingColorSpace(this,t),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const d=parseFloat(a[1])/360,f=parseInt(a[2],10)/100,p=parseInt(a[3],10)/100;return i(a[4]),this.setHSL(d,f,p,t)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Pi.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Pi.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=gr){const i=nM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gr){return Pi.fromWorkingColorSpace(ac(this,dn),e),si(dn.r*255,0,255)<<16^si(dn.g*255,0,255)<<8^si(dn.b*255,0,255)<<0}getHexString(e=gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Us){Pi.fromWorkingColorSpace(ac(this,dn),t);const i=dn.r,o=dn.g,a=dn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let d,f;const p=(c+u)/2;if(c===u)d=0,f=0;else{const m=u-c;switch(f=p<=.5?m/(u+c):m/(2-u-c),u){case i:d=(o-a)/m+(o<a?6:0);break;case o:d=(a-i)/m+2;break;case a:d=(i-o)/m+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=Us){return Pi.fromWorkingColorSpace(ac(this,dn),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=gr){return Pi.fromWorkingColorSpace(ac(this,dn),e),e!==gr?`color(${e} ${dn.r} ${dn.g} ${dn.b})`:`rgb(${dn.r*255|0},${dn.g*255|0},${dn.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Li),Li.h+=e,Li.s+=t,Li.l+=i,this.setHSL(Li.h,Li.s,Li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(oc);const i=Kh(Li.h,oc.h,t),o=Kh(Li.s,oc.s,t),a=Kh(Li.l,oc.l,t);return this.setHSL(i,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Et.NAMES=nM;let To;class iM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{To===void 0&&(To=kl("canvas")),To.width=e.width,To.height=e.height;const i=To.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=To}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Hs(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rM{constructor(e=null){this.isSource=!0,this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Jh(o[u].image)):a.push(Jh(o[u]))}else a=Jh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JR=0;class ui extends ga{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,i=Fi,o=Fi,a=_i,u=kd,c=qi,d=Ws,f=1,p=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=ns(),this.name="",this.source=new rM(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==JS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case um:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case cm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case um:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case cm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=JS;class Ut{constructor(e=0,t=0,i=0,o=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,f=d[0],p=d[4],m=d[8],g=d[1],_=d[5],M=d[9],x=d[2],y=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-x)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+x)<.1&&Math.abs(M+y)<.1&&Math.abs(f+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,R=(_+1)/2,b=(S+1)/2,I=(p+g)/4,O=(m+x)/4,C=(M+y)/4;return L>R&&L>b?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=I/i,a=O/i):R>b?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=I/o,a=C/o):b<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(b),i=O/a,o=C/a),this.set(i,o,a,t),this}let T=Math.sqrt((y-M)*(y-M)+(m-x)*(m-x)+(g-p)*(g-p));return Math.abs(T)<.001&&(T=1),this.x=(y-M)/T,this.y=(m-x)/T,this.z=(g-p)/T,this.w=Math.acos((f+_+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xs extends ga{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new ui(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_i,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sM extends ui{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eD extends ui{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerp(e,t,i,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,o)}static slerpFlat(e,t,i,o,a,u,c){let d=i[o+0],f=i[o+1],p=i[o+2],m=i[o+3];const g=a[u+0],_=a[u+1],M=a[u+2],x=a[u+3];if(c===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=g,e[t+1]=_,e[t+2]=M,e[t+3]=x;return}if(m!==x||d!==g||f!==_||p!==M){let y=1-c;const S=d*g+f*_+p*M+m*x,T=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const b=Math.sqrt(L),I=Math.atan2(b,S*T);y=Math.sin(y*I)/b,c=Math.sin(c*I)/b}const R=c*T;if(d=d*y+g*R,f=f*y+_*R,p=p*y+M*R,m=m*y+x*R,y===1-c){const b=1/Math.sqrt(d*d+f*f+p*p+m*m);d*=b,f*=b,p*=b,m*=b}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],d=i[o+1],f=i[o+2],p=i[o+3],m=a[u],g=a[u+1],_=a[u+2],M=a[u+3];return e[t]=c*M+p*m+d*_-f*g,e[t+1]=d*M+p*g+f*m-c*_,e[t+2]=f*M+p*_+c*g-d*m,e[t+3]=p*M-c*m-d*g-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,f=c(i/2),p=c(o/2),m=c(a/2),g=d(i/2),_=d(o/2),M=d(a/2);switch(u){case"XYZ":this._x=g*p*m+f*_*M,this._y=f*_*m-g*p*M,this._z=f*p*M+g*_*m,this._w=f*p*m-g*_*M;break;case"YXZ":this._x=g*p*m+f*_*M,this._y=f*_*m-g*p*M,this._z=f*p*M-g*_*m,this._w=f*p*m+g*_*M;break;case"ZXY":this._x=g*p*m-f*_*M,this._y=f*_*m+g*p*M,this._z=f*p*M+g*_*m,this._w=f*p*m-g*_*M;break;case"ZYX":this._x=g*p*m-f*_*M,this._y=f*_*m+g*p*M,this._z=f*p*M-g*_*m,this._w=f*p*m+g*_*M;break;case"YZX":this._x=g*p*m+f*_*M,this._y=f*_*m+g*p*M,this._z=f*p*M-g*_*m,this._w=f*p*m-g*_*M;break;case"XZY":this._x=g*p*m-f*_*M,this._y=f*_*m-g*p*M,this._z=f*p*M+g*_*m,this._w=f*p*m+g*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],d=t[9],f=t[2],p=t[6],m=t[10],g=i+c+m;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-f)*_,this._z=(u-o)*_}else if(i>c&&i>m){const _=2*Math.sqrt(1+i-c-m);this._w=(p-d)/_,this._x=.25*_,this._y=(o+u)/_,this._z=(a+f)/_}else if(c>m){const _=2*Math.sqrt(1+c-i-m);this._w=(a-f)/_,this._x=(o+u)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+m-i-c);this._w=(u-o)/_,this._x=(a+f)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(si(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,d=t._y,f=t._z,p=t._w;return this._x=i*p+u*c+o*f-a*d,this._y=o*p+u*d+a*c-i*f,this._z=a*p+u*f+i*d-o*c,this._w=u*p-i*c-o*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const _=1-t;return this._w=_*u+t*this._w,this._x=_*i+t*this._x,this._y=_*o+t*this._y,this._z=_*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(d),p=Math.atan2(f,c),m=Math.sin((1-t)*p)/f,g=Math.sin(t*p)/f;return this._w=u*m+this._w*g,this._x=i*m+this._x*g,this._y=o*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),i*Math.sin(a),i*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,d=e.w,f=d*t+u*o-c*i,p=d*i+c*t-a*o,m=d*o+a*i-u*t,g=-a*t-u*i-c*o;return this.x=f*d+g*-a+p*-c-m*-u,this.y=p*d+g*-u+m*-a-f*-c,this.z=m*d+g*-c+f*-u-p*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-a*c,this.y=a*u-i*d,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ep.copy(this).projectOnVector(e),this.sub(ep)}reflect(e){return this.sub(ep.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(si(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ep=new Q,R_=new Wl;class $l{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,o=1/0,a=-1/0,u=-1/0,c=-1/0;for(let d=0,f=e.length;d<f;d+=3){const p=e[d],m=e[d+1],g=e[d+2];p<t&&(t=p),m<i&&(i=m),g<o&&(o=g),p>a&&(a=p),m>u&&(u=m),g>c&&(c=g)}return this.min.set(t,i,o),this.max.set(a,u,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,o=1/0,a=-1/0,u=-1/0,c=-1/0;for(let d=0,f=e.count;d<f;d++){const p=e.getX(d),m=e.getY(d),g=e.getZ(d);p<t&&(t=p),m<i&&(i=m),g<o&&(o=g),p>a&&(a=p),m>u&&(u=m),g>c&&(c=g)}return this.min.set(t,i,o),this.max.set(a,u,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Es.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let u=0,c=a.count;u<c;u++)Es.fromBufferAttribute(a,u).applyMatrix4(e.matrixWorld),this.expandByPoint(Es)}else i.boundingBox===null&&i.computeBoundingBox(),tp.copy(i.boundingBox),tp.applyMatrix4(e.matrixWorld),this.union(tp);const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Es),Es.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),lc.subVectors(this.max,il),Co.subVectors(e.a,il),Ao.subVectors(e.b,il),Po.subVectors(e.c,il),Vr.subVectors(Ao,Co),jr.subVectors(Po,Ao),Ts.subVectors(Co,Po);let t=[0,-Vr.z,Vr.y,0,-jr.z,jr.y,0,-Ts.z,Ts.y,Vr.z,0,-Vr.x,jr.z,0,-jr.x,Ts.z,0,-Ts.x,-Vr.y,Vr.x,0,-jr.y,jr.x,0,-Ts.y,Ts.x,0];return!np(t,Co,Ao,Po,lc)||(t=[1,0,0,0,1,0,0,0,1],!np(t,Co,Ao,Po,lc))?!1:(uc.crossVectors(Vr,jr),t=[uc.x,uc.y,uc.z],np(t,Co,Ao,Po,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Es.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Es).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Es=new Q,tp=new $l,Co=new Q,Ao=new Q,Po=new Q,Vr=new Q,jr=new Q,Ts=new Q,il=new Q,lc=new Q,uc=new Q,Cs=new Q;function np(n,e,t,i,o){for(let a=0,u=n.length-3;a<=u;a+=3){Cs.fromArray(n,a);const c=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),d=e.dot(Cs),f=t.dot(Cs),p=i.dot(Cs);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>c)return!1}return!0}const tD=new $l,D_=new Q,cc=new Q,ip=new Q;class Fd{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tD.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ip.subVectors(e,this.center);const t=ip.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.add(ip.multiplyScalar(o/i)),this.radius+=o}return this}union(e){return this.center.equals(e.center)===!0?cc.set(0,0,1).multiplyScalar(e.radius):cc.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(D_.copy(e.center).add(cc)),this.expandByPoint(D_.copy(e.center).sub(cc)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dr=new Q,rp=new Q,dc=new Q,Gr=new Q,sp=new Q,fc=new Q,op=new Q;class oM{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.direction).multiplyScalar(t).add(this.origin),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){rp.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(rp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(dc),c=Gr.dot(this.direction),d=-Gr.dot(dc),f=Gr.lengthSq(),p=Math.abs(1-u*u);let m,g,_,M;if(p>0)if(m=u*d-c,g=u*c-d,M=a*p,m>=0)if(g>=-M)if(g<=M){const x=1/p;m*=x,g*=x,_=m*(m+u*g+2*c)+g*(u*m+g+2*d)+f}else g=a,m=Math.max(0,-(u*g+c)),_=-m*m+g*(g+2*d)+f;else g=-a,m=Math.max(0,-(u*g+c)),_=-m*m+g*(g+2*d)+f;else g<=-M?(m=Math.max(0,-(-u*a+c)),g=m>0?-a:Math.min(Math.max(-a,-d),a),_=-m*m+g*(g+2*d)+f):g<=M?(m=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+f):(m=Math.max(0,-(u*a+c)),g=m>0?a:Math.min(Math.max(-a,-d),a),_=-m*m+g*(g+2*d)+f);else g=u>0?-a:a,m=Math.max(0,-(u*g+c)),_=-m*m+g*(g+2*d)+f;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),o&&o.copy(dc).multiplyScalar(g).add(rp),_}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const i=dr.dot(this.direction),o=dr.dot(dr)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,d=i+u;return c<0&&d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,d;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,o=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,o=(e.min.x-g.x)*f),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),i>u||a>o||((a>i||i!==i)&&(i=a),(u<o||o!==o)&&(o=u),m>=0?(c=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),i>d||c>o)||((c>i||i!==i)&&(i=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,o,a){sp.subVectors(t,e),fc.subVectors(i,e),op.crossVectors(sp,fc);let u=this.direction.dot(op),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Gr.subVectors(this.origin,e);const d=c*this.direction.dot(fc.crossVectors(Gr,fc));if(d<0)return null;const f=c*this.direction.dot(sp.cross(Gr));if(f<0||d+f>u)return null;const p=-c*Gr.dot(op);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,o,a,u,c,d,f,p,m,g,_,M,x,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=a,S[5]=u,S[9]=c,S[13]=d,S[2]=f,S[6]=p,S[10]=m,S[14]=g,S[3]=_,S[7]=M,S[11]=x,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Lo.setFromMatrixColumn(e,0).length(),a=1/Lo.setFromMatrixColumn(e,1).length(),u=1/Lo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(o),f=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=u*p,_=u*m,M=c*p,x=c*m;t[0]=d*p,t[4]=-d*m,t[8]=f,t[1]=_+M*f,t[5]=g-x*f,t[9]=-c*d,t[2]=x-g*f,t[6]=M+_*f,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,_=d*m,M=f*p,x=f*m;t[0]=g+x*c,t[4]=M*c-_,t[8]=u*f,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=_*c-M,t[6]=x+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,_=d*m,M=f*p,x=f*m;t[0]=g-x*c,t[4]=-u*m,t[8]=M+_*c,t[1]=_+M*c,t[5]=u*p,t[9]=x-g*c,t[2]=-u*f,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,_=u*m,M=c*p,x=c*m;t[0]=d*p,t[4]=M*f-_,t[8]=g*f+x,t[1]=d*m,t[5]=x*f+g,t[9]=_*f-M,t[2]=-f,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,_=u*f,M=c*d,x=c*f;t[0]=d*p,t[4]=x-g*m,t[8]=M*m+_,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-f*p,t[6]=_*m+M,t[10]=g-x*m}else if(e.order==="XZY"){const g=u*d,_=u*f,M=c*d,x=c*f;t[0]=d*p,t[4]=-m,t[8]=f*p,t[1]=g*m+x,t[5]=u*p,t[9]=_*m-M,t[2]=M*m-_,t[6]=c*p,t[10]=x*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nD,e,iD)}lookAt(e,t,i){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Hr.crossVectors(i,ti),Hr.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Hr.crossVectors(i,ti)),Hr.normalize(),hc.crossVectors(ti,Hr),o[0]=Hr.x,o[4]=hc.x,o[8]=ti.x,o[1]=Hr.y,o[5]=hc.y,o[9]=ti.y,o[2]=Hr.z,o[6]=hc.z,o[10]=ti.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],f=i[12],p=i[1],m=i[5],g=i[9],_=i[13],M=i[2],x=i[6],y=i[10],S=i[14],T=i[3],L=i[7],R=i[11],b=i[15],I=o[0],O=o[4],C=o[8],z=o[12],te=o[1],ne=o[5],Te=o[9],_e=o[13],J=o[2],he=o[6],oe=o[10],re=o[14],X=o[3],q=o[7],Y=o[11],F=o[15];return a[0]=u*I+c*te+d*J+f*X,a[4]=u*O+c*ne+d*he+f*q,a[8]=u*C+c*Te+d*oe+f*Y,a[12]=u*z+c*_e+d*re+f*F,a[1]=p*I+m*te+g*J+_*X,a[5]=p*O+m*ne+g*he+_*q,a[9]=p*C+m*Te+g*oe+_*Y,a[13]=p*z+m*_e+g*re+_*F,a[2]=M*I+x*te+y*J+S*X,a[6]=M*O+x*ne+y*he+S*q,a[10]=M*C+x*Te+y*oe+S*Y,a[14]=M*z+x*_e+y*re+S*F,a[3]=T*I+L*te+R*J+b*X,a[7]=T*O+L*ne+R*he+b*q,a[11]=T*C+L*Te+R*oe+b*Y,a[15]=T*z+L*_e+R*re+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],d=e[9],f=e[13],p=e[2],m=e[6],g=e[10],_=e[14],M=e[3],x=e[7],y=e[11],S=e[15];return M*(+a*d*m-o*f*m-a*c*g+i*f*g+o*c*_-i*d*_)+x*(+t*d*_-t*f*g+a*u*g-o*u*_+o*f*p-a*d*p)+y*(+t*f*m-t*c*_-a*u*m+i*u*_+a*c*p-i*f*p)+S*(-o*c*p-t*d*m+t*c*g+o*u*m-i*u*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],f=e[7],p=e[8],m=e[9],g=e[10],_=e[11],M=e[12],x=e[13],y=e[14],S=e[15],T=m*y*f-x*g*f+x*d*_-c*y*_-m*d*S+c*g*S,L=M*g*f-p*y*f-M*d*_+u*y*_+p*d*S-u*g*S,R=p*x*f-M*m*f+M*c*_-u*x*_-p*c*S+u*m*S,b=M*m*d-p*x*d-M*c*g+u*x*g+p*c*y-u*m*y,I=t*T+i*L+o*R+a*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=T*O,e[1]=(x*g*a-m*y*a-x*o*_+i*y*_+m*o*S-i*g*S)*O,e[2]=(c*y*a-x*d*a+x*o*f-i*y*f-c*o*S+i*d*S)*O,e[3]=(m*d*a-c*g*a-m*o*f+i*g*f+c*o*_-i*d*_)*O,e[4]=L*O,e[5]=(p*y*a-M*g*a+M*o*_-t*y*_-p*o*S+t*g*S)*O,e[6]=(M*d*a-u*y*a-M*o*f+t*y*f+u*o*S-t*d*S)*O,e[7]=(u*g*a-p*d*a+p*o*f-t*g*f-u*o*_+t*d*_)*O,e[8]=R*O,e[9]=(M*m*a-p*x*a-M*i*_+t*x*_+p*i*S-t*m*S)*O,e[10]=(u*x*a-M*c*a+M*i*f-t*x*f-u*i*S+t*c*S)*O,e[11]=(p*c*a-u*m*a-p*i*f+t*m*f+u*i*_-t*c*_)*O,e[12]=b*O,e[13]=(p*x*o-M*m*o+M*i*g-t*x*g-p*i*y+t*m*y)*O,e[14]=(M*c*o-u*x*o-M*i*d+t*x*d+u*i*y-t*c*y)*O,e[15]=(u*m*o-p*c*o+p*i*d-t*m*d-u*i*g+t*c*g)*O,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,f=a*u,p=a*c;return this.set(f*u+i,f*c-o*d,f*d+o*c,0,f*c+o*d,p*c+i,p*d-o*u,0,f*d-o*c,p*d+o*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,f=a+a,p=u+u,m=c+c,g=a*f,_=a*p,M=a*m,x=u*p,y=u*m,S=c*m,T=d*f,L=d*p,R=d*m,b=i.x,I=i.y,O=i.z;return o[0]=(1-(x+S))*b,o[1]=(_+R)*b,o[2]=(M-L)*b,o[3]=0,o[4]=(_-R)*I,o[5]=(1-(g+S))*I,o[6]=(y+T)*I,o[7]=0,o[8]=(M+L)*O,o[9]=(y-T)*O,o[10]=(1-(g+x))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Lo.set(o[0],o[1],o[2]).length();const u=Lo.set(o[4],o[5],o[6]).length(),c=Lo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ri.copy(this);const f=1/a,p=1/u,m=1/c;return Ri.elements[0]*=f,Ri.elements[1]*=f,Ri.elements[2]*=f,Ri.elements[4]*=p,Ri.elements[5]*=p,Ri.elements[6]*=p,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,t.setFromRotationMatrix(Ri),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u){u===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const c=this.elements,d=2*a/(t-e),f=2*a/(i-o),p=(t+e)/(t-e),m=(i+o)/(i-o),g=-(u+a)/(u-a),_=-2*u*a/(u-a);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,o,a,u){const c=this.elements,d=1/(t-e),f=1/(i-o),p=1/(u-a),m=(t+e)*d,g=(i+o)*f,_=(u+a)*p;return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lo=new Q,Ri=new Qt,nD=new Q(0,0,0),iD=new Q(1,1,1),Hr=new Q,hc=new Q,ti=new Q,I_=new Qt,k_=new Wl;class qs{constructor(e=0,t=0,i=0,o=qs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],d=o[1],f=o[5],p=o[9],m=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(si(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-si(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(si(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-si(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(si(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-si(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return I_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return k_.setFromEuler(this),this.setFromQuaternion(k_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}qs.DefaultOrder="XYZ";qs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class aM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rD=0;const F_=new Q,Ro=new Wl,fr=new Qt,pc=new Q,rl=new Q,sD=new Q,oD=new Wl,z_=new Q(1,0,0),N_=new Q(0,1,0),O_=new Q(0,0,1),aD={type:"added"},B_={type:"removed"};class In extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rD++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DefaultUp.clone();const e=new Q,t=new qs,i=new Wl,o=new Q(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new wi}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=In.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new aM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(N_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,t){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(N_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pc.copy(e):pc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(rl,pc,this.up):fr.lookAt(pc,rl,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),Ro.setFromRotationMatrix(fr),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(B_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,sD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,oD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const m=d[f];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(a(e.materials,this.material[d]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),f=u(e.textures),p=u(e.images),m=u(e.shapes),g=u(e.skeletons),_=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=o,i;function u(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}In.DefaultUp=new Q(0,1,0);In.DefaultMatrixAutoUpdate=!0;const Di=new Q,hr=new Q,ap=new Q,pr=new Q,Do=new Q,Io=new Q,U_=new Q,lp=new Q,up=new Q,cp=new Q;class Xi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Di.subVectors(e,t),o.cross(Di);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Di.subVectors(o,t),hr.subVectors(i,t),ap.subVectors(e,t);const u=Di.dot(Di),c=Di.dot(hr),d=Di.dot(ap),f=hr.dot(hr),p=hr.dot(ap),m=u*f-c*c;if(m===0)return a.set(-2,-1,-1);const g=1/m,_=(f*d-c*p)*g,M=(u*p-c*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,pr),pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getUV(e,t,i,o,a,u,c,d){return this.getBarycoord(e,t,i,o,pr),d.set(0,0),d.addScaledVector(a,pr.x),d.addScaledVector(u,pr.y),d.addScaledVector(c,pr.z),d}static isFrontFacing(e,t,i,o){return Di.subVectors(i,t),hr.subVectors(e,t),Di.cross(hr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Di.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,o,a){return Xi.getUV(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;Do.subVectors(o,i),Io.subVectors(a,i),lp.subVectors(e,i);const d=Do.dot(lp),f=Io.dot(lp);if(d<=0&&f<=0)return t.copy(i);up.subVectors(e,o);const p=Do.dot(up),m=Io.dot(up);if(p>=0&&m<=p)return t.copy(o);const g=d*m-p*f;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(Do,u);cp.subVectors(e,a);const _=Do.dot(cp),M=Io.dot(cp);if(M>=0&&_<=M)return t.copy(a);const x=_*f-d*M;if(x<=0&&f>=0&&M<=0)return c=f/(f-M),t.copy(i).addScaledVector(Io,c);const y=p*M-_*m;if(y<=0&&m-p>=0&&_-M>=0)return U_.subVectors(a,o),c=(m-p)/(m-p+(_-M)),t.copy(o).addScaledVector(U_,c);const S=1/(y+x+g);return u=x*S,c=g*S,t.copy(i).addScaledVector(Do,u).addScaledVector(Io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lD=0;class us extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lD++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Qo,this.side=Dl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ZS,this.blendDst=QS,this.blendEquation=Ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=om,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ZR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qh,this.stencilZFail=qh,this.stencilZPass=qh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sR;continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==Dl&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lM extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new Q,mc=new xt;class ai{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=dm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let o=0,a=e.length;o<a;o++){let u=e[o];u===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),u=new Et),t[i++]=u.r,t[i++]=u.g,t[i++]=u.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let o=0,a=e.length;o<a;o++){let u=e[o];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),u=new xt),t[i++]=u.x,t[i++]=u.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let o=0,a=e.length;o<a;o++){let u=e[o];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),u=new Q),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let o=0,a=e.length;o<a;o++){let u=e[o];u===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),u=new Ut),t[i++]=u.x,t[i++]=u.y,t[i++]=u.z,t[i++]=u.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class uM extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cM extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ji extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uD=0;const vi=new Qt,dp=new In,ko=new Q,ni=new $l,sl=new $l,yn=new Q;class Bi extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uD++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tM(e)?cM:uM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new wi().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,i){return vi.makeTranslation(e,t,i),this.applyMatrix4(vi),this}scale(e,t,i){return vi.makeScale(e,t,i),this.applyMatrix4(vi),this}lookAt(e){return dp.lookAt(e),dp.updateMatrix(),this.applyMatrix4(dp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ji(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];sl.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(ni.min,sl.min),ni.expandByPoint(yn),yn.addVectors(ni.max,sl.max),ni.expandByPoint(yn)):(ni.expandByPoint(sl.min),ni.expandByPoint(sl.max))}ni.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)yn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(yn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)yn.fromBufferAttribute(c,f),d&&(ko.fromBufferAttribute(e,f),yn.add(ko)),o=Math.max(o,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,o=t.position.array,a=t.normal.array,u=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,f=[],p=[];for(let te=0;te<c;te++)f[te]=new Q,p[te]=new Q;const m=new Q,g=new Q,_=new Q,M=new xt,x=new xt,y=new xt,S=new Q,T=new Q;function L(te,ne,Te){m.fromArray(o,te*3),g.fromArray(o,ne*3),_.fromArray(o,Te*3),M.fromArray(u,te*2),x.fromArray(u,ne*2),y.fromArray(u,Te*2),g.sub(m),_.sub(m),x.sub(M),y.sub(M);const _e=1/(x.x*y.y-y.x*x.y);isFinite(_e)&&(S.copy(g).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(_e),T.copy(_).multiplyScalar(x.x).addScaledVector(g,-y.x).multiplyScalar(_e),f[te].add(S),f[ne].add(S),f[Te].add(S),p[te].add(T),p[ne].add(T),p[Te].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let te=0,ne=R.length;te<ne;++te){const Te=R[te],_e=Te.start,J=Te.count;for(let he=_e,oe=_e+J;he<oe;he+=3)L(i[he+0],i[he+1],i[he+2])}const b=new Q,I=new Q,O=new Q,C=new Q;function z(te){O.fromArray(a,te*3),C.copy(O);const ne=f[te];b.copy(ne),b.sub(O.multiplyScalar(O.dot(ne))).normalize(),I.crossVectors(C,ne);const _e=I.dot(p[te])<0?-1:1;d[te*4]=b.x,d[te*4+1]=b.y,d[te*4+2]=b.z,d[te*4+3]=_e}for(let te=0,ne=R.length;te<ne;++te){const Te=R[te],_e=Te.start,J=Te.count;for(let he=_e,oe=_e+J;he<oe;he+=3)z(i[he+0]),z(i[he+1]),z(i[he+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,_=i.count;g<_;g++)i.setXYZ(g,0,0,0);const o=new Q,a=new Q,u=new Q,c=new Q,d=new Q,f=new Q,p=new Q,m=new Q;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),x=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),u.fromBufferAttribute(t,y),p.subVectors(u,a),m.subVectors(o,a),p.cross(m),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),c.add(p),d.add(p),f.add(p),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(x,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),m.subVectors(o,a),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const o in i){if(e.attributes[o]===void 0)continue;const u=i[o].array,c=e.attributes[o],d=c.array,f=c.itemSize*t,p=Math.min(d.length,u.length-f);for(let m=0,g=f;m<p;m++,g++)u[g]=d[m]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const f=c.array,p=c.itemSize,m=c.normalized,g=new f.constructor(d.length*p);let _=0,M=0;for(let x=0,y=d.length;x<y;x++){c.isInterleavedBufferAttribute?_=d[x]*c.data.stride+c.offset:_=d[x]*p;for(let S=0;S<p;S++)g[M++]=f[_++]}return new ai(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,i=this.index.array,o=this.attributes;for(const c in o){const d=o[c],f=e(d,i);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const d=[],f=a[c];for(let p=0,m=f.length;p<m;p++){const g=f[p],_=e(g,i);d.push(_)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const f=u[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let m=0,g=f.length;m<g;m++){const _=f[m];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],m=a[f];for(let g=0,_=m.length;g<_;g++)p.push(m[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Qt,Fo=new oM,fp=new Fd,Wr=new Q,$r=new Q,Xr=new Q,hp=new Q,pp=new Q,mp=new Q,gc=new Q,vc=new Q,yc=new Q,xc=new xt,_c=new xt,wc=new xt,gp=new Q,Sc=new Q;class Yi extends In{constructor(e=new Bi,t=new lM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),fp.copy(i.boundingSphere),fp.applyMatrix4(a),e.ray.intersectsSphere(fp)===!1)||(V_.copy(a).invert(),Fo.copy(e.ray).applyMatrix4(V_),i.boundingBox!==null&&Fo.intersectsBox(i.boundingBox)===!1))return;let u;const c=i.index,d=i.attributes.position,f=i.morphAttributes.position,p=i.morphTargetsRelative,m=i.attributes.uv,g=i.attributes.uv2,_=i.groups,M=i.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,y=_.length;x<y;x++){const S=_[x],T=o[S.materialIndex],L=Math.max(S.start,M.start),R=Math.min(c.count,Math.min(S.start+S.count,M.start+M.count));for(let b=L,I=R;b<I;b+=3){const O=c.getX(b),C=c.getX(b+1),z=c.getX(b+2);u=Mc(this,T,e,Fo,d,f,p,m,g,O,C,z),u&&(u.faceIndex=Math.floor(b/3),u.face.materialIndex=S.materialIndex,t.push(u))}}else{const x=Math.max(0,M.start),y=Math.min(c.count,M.start+M.count);for(let S=x,T=y;S<T;S+=3){const L=c.getX(S),R=c.getX(S+1),b=c.getX(S+2);u=Mc(this,o,e,Fo,d,f,p,m,g,L,R,b),u&&(u.faceIndex=Math.floor(S/3),t.push(u))}}else if(d!==void 0)if(Array.isArray(o))for(let x=0,y=_.length;x<y;x++){const S=_[x],T=o[S.materialIndex],L=Math.max(S.start,M.start),R=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let b=L,I=R;b<I;b+=3){const O=b,C=b+1,z=b+2;u=Mc(this,T,e,Fo,d,f,p,m,g,O,C,z),u&&(u.faceIndex=Math.floor(b/3),u.face.materialIndex=S.materialIndex,t.push(u))}}else{const x=Math.max(0,M.start),y=Math.min(d.count,M.start+M.count);for(let S=x,T=y;S<T;S+=3){const L=S,R=S+1,b=S+2;u=Mc(this,o,e,Fo,d,f,p,m,g,L,R,b),u&&(u.faceIndex=Math.floor(S/3),t.push(u))}}}}function cD(n,e,t,i,o,a,u,c){let d;if(e.side===Ni?d=i.intersectTriangle(u,a,o,!0,c):d=i.intersectTriangle(o,a,u,e.side!==ua,c),d===null)return null;Sc.copy(c),Sc.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Sc);return f<t.near||f>t.far?null:{distance:f,point:Sc.clone(),object:n}}function Mc(n,e,t,i,o,a,u,c,d,f,p,m){Wr.fromBufferAttribute(o,f),$r.fromBufferAttribute(o,p),Xr.fromBufferAttribute(o,m);const g=n.morphTargetInfluences;if(a&&g){gc.set(0,0,0),vc.set(0,0,0),yc.set(0,0,0);for(let M=0,x=a.length;M<x;M++){const y=g[M],S=a[M];y!==0&&(hp.fromBufferAttribute(S,f),pp.fromBufferAttribute(S,p),mp.fromBufferAttribute(S,m),u?(gc.addScaledVector(hp,y),vc.addScaledVector(pp,y),yc.addScaledVector(mp,y)):(gc.addScaledVector(hp.sub(Wr),y),vc.addScaledVector(pp.sub($r),y),yc.addScaledVector(mp.sub(Xr),y)))}Wr.add(gc),$r.add(vc),Xr.add(yc)}n.isSkinnedMesh&&(n.boneTransform(f,Wr),n.boneTransform(p,$r),n.boneTransform(m,Xr));const _=cD(n,e,t,i,Wr,$r,Xr,gp);if(_){c&&(xc.fromBufferAttribute(c,f),_c.fromBufferAttribute(c,p),wc.fromBufferAttribute(c,m),_.uv=Xi.getUV(gp,Wr,$r,Xr,xc,_c,wc,new xt)),d&&(xc.fromBufferAttribute(d,f),_c.fromBufferAttribute(d,p),wc.fromBufferAttribute(d,m),_.uv2=Xi.getUV(gp,Wr,$r,Xr,xc,_c,wc,new xt));const M={a:f,b:p,c:m,normal:new Q,materialIndex:0};Xi.getNormal(Wr,$r,Xr,M.normal),_.face=M}return _}class Xl extends Bi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],f=[],p=[],m=[];let g=0,_=0;M("z","y","x",-1,-1,i,t,e,u,a,0),M("z","y","x",1,-1,i,t,-e,u,a,1),M("x","z","y",1,1,e,i,t,o,u,2),M("x","z","y",1,-1,e,i,-t,o,u,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new Ji(f,3)),this.setAttribute("normal",new Ji(p,3)),this.setAttribute("uv",new Ji(m,2));function M(x,y,S,T,L,R,b,I,O,C,z){const te=R/O,ne=b/C,Te=R/2,_e=b/2,J=I/2,he=O+1,oe=C+1;let re=0,X=0;const q=new Q;for(let Y=0;Y<oe;Y++){const F=Y*ne-_e;for(let B=0;B<he;B++){const ce=B*te-Te;q[x]=ce*T,q[y]=F*L,q[S]=J,f.push(q.x,q.y,q.z),q[x]=0,q[y]=0,q[S]=I>0?1:-1,p.push(q.x,q.y,q.z),m.push(B/O),m.push(1-Y/C),re+=1}}for(let Y=0;Y<C;Y++)for(let F=0;F<O;F++){const B=g+F+he*Y,ce=g+F+he*(Y+1),xe=g+(F+1)+he*(Y+1),we=g+(F+1)+he*Y;d.push(B,ce,we),d.push(ce,xe,we),X+=6}c.addGroup(_,X,z),_+=X,g+=re}}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const i=ha(n[t]);for(const o in i)e[o]=i[o]}return e}const dD={clone:ha,merge:Pn};var fD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ys extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=fD,this.fragmentShader=hD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dM extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xn extends dM{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=P_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return P_*2*Math.atan(Math.tan(Yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,f=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*i/f,o*=u.width/d,i*=u.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zo=90,No=1;class pD extends In{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const o=new Xn(zo,No,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new Q(1,0,0)),this.add(o);const a=new Xn(zo,No,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Q(-1,0,0)),this.add(a);const u=new Xn(zo,No,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(new Q(0,1,0)),this.add(u);const c=new Xn(zo,No,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new Q(0,-1,0)),this.add(c);const d=new Xn(zo,No,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new Q(0,0,1)),this.add(d);const f=new Xn(zo,No,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new Q(0,0,-1)),this.add(f)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[o,a,u,c,d,f]=this.children,p=e.getRenderTarget(),m=e.toneMapping,g=e.xr.enabled;e.toneMapping=xr,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,o),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,u),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,f),e.setRenderTarget(p),e.toneMapping=m,e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fM extends ui{constructor(e,t,i,o,a,u,c,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:ca,super(e,t,i,o,a,u,c,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mD extends Xs{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new fM(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Xl(5,5,5),a=new Ys({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ni,blending:ts});a.uniforms.tEquirect.value=t;const u=new Yi(o,a),c=t.minFilter;return t.minFilter===kd&&(t.minFilter=_i),new pD(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const vp=new Q,gD=new Q,vD=new wi;class Rs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=vp.subVectors(i,t).cross(gD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(vp),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(i).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vD.getNormalMatrix(e),o=this.coplanarPoint(vp).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oo=new Fd,bc=new Q;class xg{constructor(e=new Rs,t=new Rs,i=new Rs,o=new Rs,a=new Rs,u=new Rs){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,o=i[0],a=i[1],u=i[2],c=i[3],d=i[4],f=i[5],p=i[6],m=i[7],g=i[8],_=i[9],M=i[10],x=i[11],y=i[12],S=i[13],T=i[14],L=i[15];return t[0].setComponents(c-o,m-d,x-g,L-y).normalize(),t[1].setComponents(c+o,m+d,x+g,L+y).normalize(),t[2].setComponents(c+a,m+f,x+_,L+S).normalize(),t[3].setComponents(c-a,m-f,x-_,L-S).normalize(),t[4].setComponents(c-u,m-p,x-M,L-T).normalize(),t[5].setComponents(c+u,m+p,x+M,L+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSprite(e){return Oo.center.set(0,0,0),Oo.radius=.7071067811865476,Oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(bc.x=o.normal.x>0?e.max.x:e.min.x,bc.y=o.normal.y>0?e.max.y:e.min.y,bc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hM(){let n=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function yD(n,e){const t=e.isWebGL2,i=new WeakMap;function o(f,p){const m=f.array,g=f.usage,_=n.createBuffer();n.bindBuffer(p,_),n.bufferData(p,m,g),f.onUploadCallback();let M;if(m instanceof Float32Array)M=5126;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(m instanceof Int16Array)M=5122;else if(m instanceof Uint32Array)M=5125;else if(m instanceof Int32Array)M=5124;else if(m instanceof Int8Array)M=5120;else if(m instanceof Uint8Array)M=5121;else if(m instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version}}function a(f,p,m){const g=p.array,_=p.updateRange;n.bindBuffer(m,f),_.count===-1?n.bufferSubData(m,0,g):(t?n.bufferSubData(m,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count):n.bufferSubData(m,_.offset*g.BYTES_PER_ELEMENT,g.subarray(_.offset,_.offset+_.count)),_.count=-1)}function u(f){return f.isInterleavedBufferAttribute&&(f=f.data),i.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=i.get(f);p&&(n.deleteBuffer(p.buffer),i.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const g=i.get(f);(!g||g.version<f.version)&&i.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=i.get(f);m===void 0?i.set(f,o(f,p)):m.version<f.version&&(a(m.buffer,f,p),m.version=f.version)}return{get:u,remove:c,update:d}}class _g extends Bi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(o),f=c+1,p=d+1,m=e/c,g=t/d,_=[],M=[],x=[],y=[];for(let S=0;S<p;S++){const T=S*g-u;for(let L=0;L<f;L++){const R=L*m-a;M.push(R,-T,0),x.push(0,0,1),y.push(L/c),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let T=0;T<c;T++){const L=T+f*S,R=T+f*(S+1),b=T+1+f*(S+1),I=T+1+f*S;_.push(L,R,I),_.push(R,b,I)}this.setIndex(_),this.setAttribute("position",new Ji(M,3)),this.setAttribute("normal",new Ji(x,3)),this.setAttribute("uv",new Ji(y,2))}static fromJSON(e){return new _g(e.width,e.height,e.widthSegments,e.heightSegments)}}var xD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_D=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wD=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,SD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ED="vec3 transformed = vec3( position );",TD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CD=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,AD=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,PD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,RD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ND=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,BD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UD=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,GD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WD="gl_FragColor = linearToOutputTexel( gl_FragColor );",$D=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,iI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sI=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,oI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aI=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,cI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,fI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pI=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_I=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PI=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,RI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,DI=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,II=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,NI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,OI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,BI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,UI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,GI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$I=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZI=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,QI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ek=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nk=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ik=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ok=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ak=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,lk=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uk=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ck=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,dk=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fk=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hk=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pk=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mk=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gk=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vk=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xk=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_k=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wk=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sk=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mk=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ek=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tk=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ck=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ak=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pk=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lk=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rk=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dk=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ik=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fk=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zk=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nk=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ok=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bk=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uk=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vk=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jk=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hk=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wk=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$k=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,St={alphamap_fragment:xD,alphamap_pars_fragment:_D,alphatest_fragment:wD,alphatest_pars_fragment:SD,aomap_fragment:MD,aomap_pars_fragment:bD,begin_vertex:ED,beginnormal_vertex:TD,bsdfs:CD,iridescence_fragment:AD,bumpmap_pars_fragment:PD,clipping_planes_fragment:LD,clipping_planes_pars_fragment:RD,clipping_planes_pars_vertex:DD,clipping_planes_vertex:ID,color_fragment:kD,color_pars_fragment:FD,color_pars_vertex:zD,color_vertex:ND,common:OD,cube_uv_reflection_fragment:BD,defaultnormal_vertex:UD,displacementmap_pars_vertex:VD,displacementmap_vertex:jD,emissivemap_fragment:GD,emissivemap_pars_fragment:HD,encodings_fragment:WD,encodings_pars_fragment:$D,envmap_fragment:XD,envmap_common_pars_fragment:qD,envmap_pars_fragment:YD,envmap_pars_vertex:KD,envmap_physical_pars_fragment:aI,envmap_vertex:ZD,fog_vertex:QD,fog_pars_vertex:JD,fog_fragment:eI,fog_pars_fragment:tI,gradientmap_pars_fragment:nI,lightmap_fragment:iI,lightmap_pars_fragment:rI,lights_lambert_vertex:sI,lights_pars_begin:oI,lights_toon_fragment:lI,lights_toon_pars_fragment:uI,lights_phong_fragment:cI,lights_phong_pars_fragment:dI,lights_physical_fragment:fI,lights_physical_pars_fragment:hI,lights_fragment_begin:pI,lights_fragment_maps:mI,lights_fragment_end:gI,logdepthbuf_fragment:vI,logdepthbuf_pars_fragment:yI,logdepthbuf_pars_vertex:xI,logdepthbuf_vertex:_I,map_fragment:wI,map_pars_fragment:SI,map_particle_fragment:MI,map_particle_pars_fragment:bI,metalnessmap_fragment:EI,metalnessmap_pars_fragment:TI,morphcolor_vertex:CI,morphnormal_vertex:AI,morphtarget_pars_vertex:PI,morphtarget_vertex:LI,normal_fragment_begin:RI,normal_fragment_maps:DI,normal_pars_fragment:II,normal_pars_vertex:kI,normal_vertex:FI,normalmap_pars_fragment:zI,clearcoat_normal_fragment_begin:NI,clearcoat_normal_fragment_maps:OI,clearcoat_pars_fragment:BI,iridescence_pars_fragment:UI,output_fragment:VI,packing:jI,premultiplied_alpha_fragment:GI,project_vertex:HI,dithering_fragment:WI,dithering_pars_fragment:$I,roughnessmap_fragment:XI,roughnessmap_pars_fragment:qI,shadowmap_pars_fragment:YI,shadowmap_pars_vertex:KI,shadowmap_vertex:ZI,shadowmask_pars_fragment:QI,skinbase_vertex:JI,skinning_pars_vertex:ek,skinning_vertex:tk,skinnormal_vertex:nk,specularmap_fragment:ik,specularmap_pars_fragment:rk,tonemapping_fragment:sk,tonemapping_pars_fragment:ok,transmission_fragment:ak,transmission_pars_fragment:lk,uv_pars_fragment:uk,uv_pars_vertex:ck,uv_vertex:dk,uv2_pars_fragment:fk,uv2_pars_vertex:hk,uv2_vertex:pk,worldpos_vertex:mk,background_vert:gk,background_frag:vk,cube_vert:yk,cube_frag:xk,depth_vert:_k,depth_frag:wk,distanceRGBA_vert:Sk,distanceRGBA_frag:Mk,equirect_vert:bk,equirect_frag:Ek,linedashed_vert:Tk,linedashed_frag:Ck,meshbasic_vert:Ak,meshbasic_frag:Pk,meshlambert_vert:Lk,meshlambert_frag:Rk,meshmatcap_vert:Dk,meshmatcap_frag:Ik,meshnormal_vert:kk,meshnormal_frag:Fk,meshphong_vert:zk,meshphong_frag:Nk,meshphysical_vert:Ok,meshphysical_frag:Bk,meshtoon_vert:Uk,meshtoon_frag:Vk,points_vert:jk,points_frag:Gk,shadow_vert:Hk,shadow_frag:Wk,sprite_vert:$k,sprite_frag:Xk},Ne={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wi},uv2Transform:{value:new wi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wi}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wi}}},$i={basic:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.fog,Ne.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Pn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Pn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Pn([Ne.points,Ne.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Pn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Pn([Ne.common,Ne.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Pn([Ne.sprite,Ne.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new wi},t2D:{value:null}},vertexShader:St.background_vert,fragmentShader:St.background_frag},cube:{uniforms:Pn([Ne.envmap,{opacity:{value:1}}]),vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Pn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Pn([Ne.lights,Ne.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};$i.physical={uniforms:Pn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};function qk(n,e,t,i,o,a){const u=new Et(0);let c=o===!0?0:1,d,f,p=null,m=0,g=null;function _(x,y){let S=!1,T=y.isScene===!0?y.background:null;T&&T.isTexture&&(T=e.get(T));const L=n.xr,R=L.getSession&&L.getSession();R&&R.environmentBlendMode==="additive"&&(T=null),T===null?M(u,c):T&&T.isColor&&(M(T,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Id)?(f===void 0&&(f=new Yi(new Xl(1,1,1),new Ys({name:"BackgroundCubeMaterial",uniforms:ha($i.cube.uniforms),vertexShader:$i.cube.vertexShader,fragmentShader:$i.cube.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,(p!==T||m!==T.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,g=n.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Yi(new _g(2,2),new Ys({name:"BackgroundMaterial",uniforms:ha($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Dl,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=T,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=T,m=T.version,g=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function M(x,y){t.buffers.color.setClear(x.r,x.g,x.b,y,a)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),c=y,M(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,M(u,c)},render:_}}function Yk(n,e,t,i){const o=n.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},d=y(null);let f=d,p=!1;function m(J,he,oe,re,X){let q=!1;if(u){const Y=x(re,oe,he);f!==Y&&(f=Y,_(f.object)),q=S(J,re,oe,X),q&&T(J,re,oe,X)}else{const Y=he.wireframe===!0;(f.geometry!==re.id||f.program!==oe.id||f.wireframe!==Y)&&(f.geometry=re.id,f.program=oe.id,f.wireframe=Y,q=!0)}X!==null&&t.update(X,34963),(q||p)&&(p=!1,C(J,he,oe,re),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function g(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function _(J){return i.isWebGL2?n.bindVertexArray(J):a.bindVertexArrayOES(J)}function M(J){return i.isWebGL2?n.deleteVertexArray(J):a.deleteVertexArrayOES(J)}function x(J,he,oe){const re=oe.wireframe===!0;let X=c[J.id];X===void 0&&(X={},c[J.id]=X);let q=X[he.id];q===void 0&&(q={},X[he.id]=q);let Y=q[re];return Y===void 0&&(Y=y(g()),q[re]=Y),Y}function y(J){const he=[],oe=[],re=[];for(let X=0;X<o;X++)he[X]=0,oe[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:oe,attributeDivisors:re,object:J,attributes:{},index:null}}function S(J,he,oe,re){const X=f.attributes,q=he.attributes;let Y=0;const F=oe.getAttributes();for(const B in F)if(F[B].location>=0){const xe=X[B];let we=q[B];if(we===void 0&&(B==="instanceMatrix"&&J.instanceMatrix&&(we=J.instanceMatrix),B==="instanceColor"&&J.instanceColor&&(we=J.instanceColor)),xe===void 0||xe.attribute!==we||we&&xe.data!==we.data)return!0;Y++}return f.attributesNum!==Y||f.index!==re}function T(J,he,oe,re){const X={},q=he.attributes;let Y=0;const F=oe.getAttributes();for(const B in F)if(F[B].location>=0){let xe=q[B];xe===void 0&&(B==="instanceMatrix"&&J.instanceMatrix&&(xe=J.instanceMatrix),B==="instanceColor"&&J.instanceColor&&(xe=J.instanceColor));const we={};we.attribute=xe,xe&&xe.data&&(we.data=xe.data),X[B]=we,Y++}f.attributes=X,f.attributesNum=Y,f.index=re}function L(){const J=f.newAttributes;for(let he=0,oe=J.length;he<oe;he++)J[he]=0}function R(J){b(J,0)}function b(J,he){const oe=f.newAttributes,re=f.enabledAttributes,X=f.attributeDivisors;oe[J]=1,re[J]===0&&(n.enableVertexAttribArray(J),re[J]=1),X[J]!==he&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,he),X[J]=he)}function I(){const J=f.newAttributes,he=f.enabledAttributes;for(let oe=0,re=he.length;oe<re;oe++)he[oe]!==J[oe]&&(n.disableVertexAttribArray(oe),he[oe]=0)}function O(J,he,oe,re,X,q){i.isWebGL2===!0&&(oe===5124||oe===5125)?n.vertexAttribIPointer(J,he,oe,X,q):n.vertexAttribPointer(J,he,oe,re,X,q)}function C(J,he,oe,re){if(i.isWebGL2===!1&&(J.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const X=re.attributes,q=oe.getAttributes(),Y=he.defaultAttributeValues;for(const F in q){const B=q[F];if(B.location>=0){let ce=X[F];if(ce===void 0&&(F==="instanceMatrix"&&J.instanceMatrix&&(ce=J.instanceMatrix),F==="instanceColor"&&J.instanceColor&&(ce=J.instanceColor)),ce!==void 0){const xe=ce.normalized,we=ce.itemSize,V=t.get(ce);if(V===void 0)continue;const ye=V.buffer,me=V.type,ge=V.bytesPerElement;if(ce.isInterleavedBufferAttribute){const be=ce.data,et=be.stride,tt=ce.offset;if(be.isInstancedInterleavedBuffer){for(let We=0;We<B.locationSize;We++)b(B.location+We,be.meshPerAttribute);J.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let We=0;We<B.locationSize;We++)R(B.location+We);n.bindBuffer(34962,ye);for(let We=0;We<B.locationSize;We++)O(B.location+We,we/B.locationSize,me,xe,et*ge,(tt+we/B.locationSize*We)*ge)}else{if(ce.isInstancedBufferAttribute){for(let be=0;be<B.locationSize;be++)b(B.location+be,ce.meshPerAttribute);J.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<B.locationSize;be++)R(B.location+be);n.bindBuffer(34962,ye);for(let be=0;be<B.locationSize;be++)O(B.location+be,we/B.locationSize,me,xe,we*ge,we/B.locationSize*be*ge)}}else if(Y!==void 0){const xe=Y[F];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(B.location,xe);break;case 3:n.vertexAttrib3fv(B.location,xe);break;case 4:n.vertexAttrib4fv(B.location,xe);break;default:n.vertexAttrib1fv(B.location,xe)}}}}I()}function z(){Te();for(const J in c){const he=c[J];for(const oe in he){const re=he[oe];for(const X in re)M(re[X].object),delete re[X];delete he[oe]}delete c[J]}}function te(J){if(c[J.id]===void 0)return;const he=c[J.id];for(const oe in he){const re=he[oe];for(const X in re)M(re[X].object),delete re[X];delete he[oe]}delete c[J.id]}function ne(J){for(const he in c){const oe=c[he];if(oe[J.id]===void 0)continue;const re=oe[J.id];for(const X in re)M(re[X].object),delete re[X];delete oe[J.id]}}function Te(){_e(),p=!0,f!==d&&(f=d,_(f.object))}function _e(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:Te,resetDefaultState:_e,dispose:z,releaseStatesOfGeometry:te,releaseStatesOfProgram:ne,initAttributes:L,enableAttribute:R,disableUnusedAttributes:I}}function Kk(n,e,t,i){const o=i.isWebGL2;let a;function u(f){a=f}function c(f,p){n.drawArrays(a,f,p),t.update(p,a,1)}function d(f,p,m){if(m===0)return;let g,_;if(o)g=n,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](a,f,p,m),t.update(p,a,m)}this.setMode=u,this.render=c,this.renderInstances=d}function Zk(n,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let c=t.precision!==void 0?t.precision:"highp";const d=a(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=n.getParameter(34930),g=n.getParameter(35660),_=n.getParameter(3379),M=n.getParameter(34076),x=n.getParameter(34921),y=n.getParameter(36347),S=n.getParameter(36348),T=n.getParameter(36349),L=g>0,R=u||e.has("OES_texture_float"),b=L&&R,I=u?n.getParameter(36183):0;return{isWebGL2:u,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:L,floatFragmentTextures:R,floatVertexTextures:b,maxSamples:I}}function Qk(n){const e=this;let t=null,i=0,o=!1,a=!1;const u=new Rs,c=new wi,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g,_){const M=m.length!==0||g||i!==0||o;return o=g,t=p(m,_,0),i=m.length,M},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1,f()},this.setState=function(m,g,_){const M=m.clippingPlanes,x=m.clipIntersection,y=m.clipShadows,S=n.get(m);if(!o||M===null||M.length===0||a&&!y)a?p(null):f();else{const T=a?0:i,L=T*4;let R=S.clippingState||null;d.value=R,R=p(M,g,L,_);for(let b=0;b!==L;++b)R[b]=t[b];S.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,g,_,M){const x=m!==null?m.length:0;let y=null;if(x!==0){if(y=d.value,M!==!0||y===null){const S=_+x*4,T=g.matrixWorldInverse;c.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,R=_;L!==x;++L,R+=4)u.copy(m[L]).applyMatrix4(T,c),u.normal.toArray(y,R),y[R+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function Jk(n){let e=new WeakMap;function t(u,c){return c===am?u.mapping=ca:c===lm&&(u.mapping=da),u}function i(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===am||c===lm)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const f=new mD(d.height/2);return f.fromEquirectangularTexture(n,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class pM extends dM{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zo=4,j_=[.125,.215,.35,.446,.526,.582],ks=20,yp=new pM,G_=new Et;let xp=null;const Ds=(1+Math.sqrt(5))/2,Bo=1/Ds,H_=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Ds,Bo),new Q(0,Ds,-Bo),new Q(Bo,0,Ds),new Q(-Bo,0,Ds),new Q(Ds,Bo,0),new Q(-Ds,Bo,0)];class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){xp=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xp),e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xp=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Il,format:qi,encoding:$s,depthBuffer:!1},o=$_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e5(a)),this._blurMaterial=t5(a,e,t)}return o}_compileMaterial(e){const t=new Yi(this._lodPlanes[0],e);this._renderer.compile(t,yp)}_sceneToCubeUV(e,t,i,o){const c=new Xn(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(G_),p.toneMapping=xr,p.autoClear=!1;const _=new lM({name:"PMREM.Background",side:Ni,depthWrite:!1,depthTest:!1}),M=new Yi(new Xl,_);let x=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,x=!0):(_.color.copy(G_),x=!0);for(let S=0;S<6;S++){const T=S%3;T===0?(c.up.set(0,d[S],0),c.lookAt(f[S],0,0)):T===1?(c.up.set(0,0,d[S]),c.lookAt(0,f[S],0)):(c.up.set(0,d[S],0),c.lookAt(0,0,f[S]));const L=this._cubeSize;Ec(o,T*L,S>2?L:0,L,L),p.setRenderTarget(o),x&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===ca||e.mapping===da;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new Yi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;Ec(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,yp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=H_[(o-1)%H_.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const d=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Yi(this._lodPlanes[o],f),g=f.uniforms,_=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*ks-1),x=a/M,y=isFinite(a)?1+Math.floor(p*x):ks;y>ks&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const S=[];let T=0;for(let O=0;O<ks;++O){const C=O/x,z=Math.exp(-C*C/2);S.push(z),O===0?T+=z:O<y&&(T+=2*z)}for(let O=0;O<S.length;O++)S[O]=S[O]/T;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-i;const R=this._sizeLods[o],b=3*R*(o>L-Zo?o-L+Zo:0),I=4*(this._cubeSize-R);Ec(t,b,I,3*R,2*R),d.setRenderTarget(t),d.render(m,yp)}}function e5(n){const e=[],t=[],i=[];let o=n;const a=n-Zo+1+j_.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-Zo?d=j_[u-n+Zo-1]:u===0&&(d=0),i.push(d);const f=1/(c-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,M=6,x=3,y=2,S=1,T=new Float32Array(x*M*_),L=new Float32Array(y*M*_),R=new Float32Array(S*M*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,C=I>2?0:-1,z=[O,C,0,O+2/3,C,0,O+2/3,C+1,0,O,C,0,O+2/3,C+1,0,O,C+1,0];T.set(z,x*M*I),L.set(g,y*M*I);const te=[I,I,I,I,I,I];R.set(te,S*M*I)}const b=new Bi;b.setAttribute("position",new ai(T,x)),b.setAttribute("uv",new ai(L,y)),b.setAttribute("faceIndex",new ai(R,S)),e.push(b),o>Zo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $_(n,e,t){const i=new Xs(n,e,t);return i.texture.mapping=Id,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ec(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function t5(n,e,t){const i=new Float32Array(ks),o=new Q(0,1,0);return new Ys({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function X_(){return new Ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function q_(){return new Ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function wg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n5(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===am||d===lm,p=d===ca||d===da;if(f||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=e.get(c);return t===null&&(t=new W_(n)),m=f?t.fromEquirectangular(c,m):t.fromCubemap(c,m),e.set(c,m),m.texture}else{if(e.has(c))return e.get(c).texture;{const m=c.image;if(f&&m&&m.height>0||p&&m&&o(m)){t===null&&(t=new W_(n));const g=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,g),c.addEventListener("dispose",a),g.texture}else return null}}}return c}function o(c){let d=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&d++;return d===f}function a(c){const d=c.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function i5(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function r5(n,e,t,i){const o={},a=new WeakMap;function u(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const M in g)e.update(g[M],34962);const _=m.morphAttributes;for(const M in _){const x=_[M];for(let y=0,S=x.length;y<S;y++)e.update(x[y],34962)}}function f(m){const g=[],_=m.index,M=m.attributes.position;let x=0;if(_!==null){const T=_.array;x=_.version;for(let L=0,R=T.length;L<R;L+=3){const b=T[L+0],I=T[L+1],O=T[L+2];g.push(b,I,I,O,O,b)}}else{const T=M.array;x=M.version;for(let L=0,R=T.length/3-1;L<R;L+=3){const b=L+0,I=L+1,O=L+2;g.push(b,I,I,O,O,b)}}const y=new(tM(g)?cM:uM)(g,1);y.version=x;const S=a.get(m);S&&e.remove(S),a.set(m,y)}function p(m){const g=a.get(m);if(g){const _=m.index;_!==null&&g.version<_.version&&f(m)}else f(m);return a.get(m)}return{get:c,update:d,getWireframeAttribute:p}}function s5(n,e,t,i){const o=i.isWebGL2;let a;function u(g){a=g}let c,d;function f(g){c=g.type,d=g.bytesPerElement}function p(g,_){n.drawElements(a,_,c,g*d),t.update(_,a,1)}function m(g,_,M){if(M===0)return;let x,y;if(o)x=n,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,_,c,g*d,M),t.update(_,a,M)}this.setMode=u,this.setIndex=f,this.render=p,this.renderInstances=m}function o5(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case 4:t.triangles+=c*(a/3);break;case 1:t.lines+=c*(a/2);break;case 3:t.lines+=c*(a-1);break;case 2:t.lines+=c*a;break;case 0:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function a5(n,e){return n[0]-e[0]}function l5(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _p(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function u5(n,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new Ut,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,p,m,g){const _=f.morphTargetInfluences;if(e.isWebGL2===!0){const x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=x!==void 0?x.length:0;let S=a.get(p);if(S===void 0||S.count!==y){let oe=function(){J.dispose(),a.delete(p),p.removeEventListener("dispose",oe)};var M=oe;S!==void 0&&S.texture.dispose();const R=p.morphAttributes.position!==void 0,b=p.morphAttributes.normal!==void 0,I=p.morphAttributes.color!==void 0,O=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let te=0;R===!0&&(te=1),b===!0&&(te=2),I===!0&&(te=3);let ne=p.attributes.position.count*te,Te=1;ne>e.maxTextureSize&&(Te=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const _e=new Float32Array(ne*Te*4*y),J=new sM(_e,ne,Te,y);J.type=Bs,J.needsUpdate=!0;const he=te*4;for(let re=0;re<y;re++){const X=O[re],q=C[re],Y=z[re],F=ne*Te*4*re;for(let B=0;B<X.count;B++){const ce=B*he;R===!0&&(u.fromBufferAttribute(X,B),X.normalized===!0&&_p(u,X),_e[F+ce+0]=u.x,_e[F+ce+1]=u.y,_e[F+ce+2]=u.z,_e[F+ce+3]=0),b===!0&&(u.fromBufferAttribute(q,B),q.normalized===!0&&_p(u,q),_e[F+ce+4]=u.x,_e[F+ce+5]=u.y,_e[F+ce+6]=u.z,_e[F+ce+7]=0),I===!0&&(u.fromBufferAttribute(Y,B),Y.normalized===!0&&_p(u,Y),_e[F+ce+8]=u.x,_e[F+ce+9]=u.y,_e[F+ce+10]=u.z,_e[F+ce+11]=Y.itemSize===4?u.w:1)}}S={count:y,texture:J,size:new xt(ne,Te)},a.set(p,S),p.addEventListener("dispose",oe)}let T=0;for(let R=0;R<_.length;R++)T+=_[R];const L=p.morphTargetsRelative?1:1-T;g.getUniforms().setValue(n,"morphTargetBaseInfluence",L),g.getUniforms().setValue(n,"morphTargetInfluences",_),g.getUniforms().setValue(n,"morphTargetsTexture",S.texture,t),g.getUniforms().setValue(n,"morphTargetsTextureSize",S.size)}else{const x=_===void 0?0:_.length;let y=i[p.id];if(y===void 0||y.length!==x){y=[];for(let b=0;b<x;b++)y[b]=[b,0];i[p.id]=y}for(let b=0;b<x;b++){const I=y[b];I[0]=b,I[1]=_[b]}y.sort(l5);for(let b=0;b<8;b++)b<x&&y[b][1]?(c[b][0]=y[b][0],c[b][1]=y[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(a5);const S=p.morphAttributes.position,T=p.morphAttributes.normal;let L=0;for(let b=0;b<8;b++){const I=c[b],O=I[0],C=I[1];O!==Number.MAX_SAFE_INTEGER&&C?(S&&p.getAttribute("morphTarget"+b)!==S[O]&&p.setAttribute("morphTarget"+b,S[O]),T&&p.getAttribute("morphNormal"+b)!==T[O]&&p.setAttribute("morphNormal"+b,T[O]),o[b]=C,L+=C):(S&&p.hasAttribute("morphTarget"+b)===!0&&p.deleteAttribute("morphTarget"+b),T&&p.hasAttribute("morphNormal"+b)===!0&&p.deleteAttribute("morphNormal"+b),o[b]=0)}const R=p.morphTargetsRelative?1:1-L;g.getUniforms().setValue(n,"morphTargetBaseInfluence",R),g.getUniforms().setValue(n,"morphTargetInfluences",o)}}return{update:d}}function c5(n,e,t,i){let o=new WeakMap;function a(d){const f=i.render.frame,p=d.geometry,m=e.get(d,p);return o.get(m)!==f&&(e.update(m),o.set(m,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),m}function u(){o=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}const mM=new ui,gM=new sM,vM=new eD,yM=new fM,Y_=[],K_=[],Z_=new Float32Array(16),Q_=new Float32Array(9),J_=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=Y_[o];if(a===void 0&&(a=new Float32Array(o),Y_[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(a,c)}return a}function Nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function On(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zd(n,e){let t=K_[e];t===void 0&&(t=new Int32Array(e),K_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;n.uniform2fv(this.addr,e),On(t,e)}}function h5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;n.uniform3fv(this.addr,e),On(t,e)}}function p5(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;n.uniform4fv(this.addr,e),On(t,e)}}function m5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Nn(t,i))return;J_.set(i),n.uniformMatrix2fv(this.addr,!1,J_),On(t,i)}}function g5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Nn(t,i))return;Q_.set(i),n.uniformMatrix3fv(this.addr,!1,Q_),On(t,i)}}function v5(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Nn(t,i))return;Z_.set(i),n.uniformMatrix4fv(this.addr,!1,Z_),On(t,i)}}function y5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x5(n,e){const t=this.cache;Nn(t,e)||(n.uniform2iv(this.addr,e),On(t,e))}function _5(n,e){const t=this.cache;Nn(t,e)||(n.uniform3iv(this.addr,e),On(t,e))}function w5(n,e){const t=this.cache;Nn(t,e)||(n.uniform4iv(this.addr,e),On(t,e))}function S5(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M5(n,e){const t=this.cache;Nn(t,e)||(n.uniform2uiv(this.addr,e),On(t,e))}function b5(n,e){const t=this.cache;Nn(t,e)||(n.uniform3uiv(this.addr,e),On(t,e))}function E5(n,e){const t=this.cache;Nn(t,e)||(n.uniform4uiv(this.addr,e),On(t,e))}function T5(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2D(e||mM,o)}function C5(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||vM,o)}function A5(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||yM,o)}function P5(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||gM,o)}function L5(n){switch(n){case 5126:return d5;case 35664:return f5;case 35665:return h5;case 35666:return p5;case 35674:return m5;case 35675:return g5;case 35676:return v5;case 5124:case 35670:return y5;case 35667:case 35671:return x5;case 35668:case 35672:return _5;case 35669:case 35673:return w5;case 5125:return S5;case 36294:return M5;case 36295:return b5;case 36296:return E5;case 35678:case 36198:case 36298:case 36306:case 35682:return T5;case 35679:case 36299:case 36307:return C5;case 35680:case 36300:case 36308:case 36293:return A5;case 36289:case 36303:case 36311:case 36292:return P5}}function R5(n,e){n.uniform1fv(this.addr,e)}function D5(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function I5(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function k5(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function F5(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z5(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N5(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O5(n,e){n.uniform1iv(this.addr,e)}function B5(n,e){n.uniform2iv(this.addr,e)}function U5(n,e){n.uniform3iv(this.addr,e)}function V5(n,e){n.uniform4iv(this.addr,e)}function j5(n,e){n.uniform1uiv(this.addr,e)}function G5(n,e){n.uniform2uiv(this.addr,e)}function H5(n,e){n.uniform3uiv(this.addr,e)}function W5(n,e){n.uniform4uiv(this.addr,e)}function $5(n,e,t){const i=e.length,o=zd(t,i);n.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)t.setTexture2D(e[a]||mM,o[a])}function X5(n,e,t){const i=e.length,o=zd(t,i);n.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vM,o[a])}function q5(n,e,t){const i=e.length,o=zd(t,i);n.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yM,o[a])}function Y5(n,e,t){const i=e.length,o=zd(t,i);n.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||gM,o[a])}function K5(n){switch(n){case 5126:return R5;case 35664:return D5;case 35665:return I5;case 35666:return k5;case 35674:return F5;case 35675:return z5;case 35676:return N5;case 5124:case 35670:return O5;case 35667:case 35671:return B5;case 35668:case 35672:return U5;case 35669:case 35673:return V5;case 5125:return j5;case 36294:return G5;case 36295:return H5;case 36296:return W5;case 35678:case 36198:case 36298:case 36306:case 35682:return $5;case 35679:case 36299:case 36307:return X5;case 35680:case 36300:case 36308:case 36293:return q5;case 36289:case 36303:case 36311:case 36292:return Y5}}class Z5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=L5(t.type)}}class Q5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=K5(t.type)}}class J5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const wp=/(\w+)(\])?(\[|\.)?/g;function e1(n,e){n.seq.push(e),n.map[e.id]=e}function eF(n,e,t){const i=n.name,o=i.length;for(wp.lastIndex=0;;){const a=wp.exec(i),u=wp.lastIndex;let c=a[1];const d=a[2]==="]",f=a[3];if(d&&(c=c|0),f===void 0||f==="["&&u+2===o){e1(t,f===void 0?new Z5(c,n,e):new Q5(c,n,e));break}else{let m=t.map[c];m===void 0&&(m=new J5(c),e1(t,m)),t=m}}}class Zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);eF(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function t1(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let tF=0;function nF(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function iF(n){switch(n){case $s:return["Linear","( value )"];case Xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function n1(n,e,t){const i=n.getShaderParameter(e,35713),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+nF(n.getShaderSource(e),u)}else return o}function rF(n,e){const t=iF(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sF(n,e){let t;switch(e){case CR:t="Linear";break;case AR:t="Reinhard";break;case PR:t="OptimizedCineon";break;case LR:t="ACESFilmic";break;case RR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oF(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vl).join(`
`)}function aF(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lF(n,e){const t={},i=n.getProgramParameter(e,35721);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),u=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),t[u]={type:a.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function vl(n){return n!==""}function i1(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r1(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uF=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(n){return n.replace(uF,cF)}function cF(n,e){const t=St[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pm(t)}const dF=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,fF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s1(n){return n.replace(fF,xM).replace(dF,hF)}function hF(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),xM(n,e,t,i)}function xM(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function o1(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pF(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gl&&(e="SHADOWMAP_TYPE_VSM"),e}function mF(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ca:case da:e="ENVMAP_TYPE_CUBE";break;case Id:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gF(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function vF(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case ER:e="ENVMAP_BLENDING_MIX";break;case TR:e="ENVMAP_BLENDING_ADD";break}return e}function yF(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xF(n,e,t,i){const o=n.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=pF(t),f=mF(t),p=gF(t),m=vF(t),g=yF(t),_=t.isWebGL2?"":oF(t),M=aF(a),x=o.createProgram();let y,S,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[M].filter(vl).join(`
`),y.length>0&&(y+=`
`),S=[_,M].filter(vl).join(`
`),S.length>0&&(S+=`
`)):(y=[o1(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),S=[_,o1(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?St.tonemapping_pars_fragment:"",t.toneMapping!==xr?sF("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.encodings_pars_fragment,rF("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),u=pm(u),u=i1(u,t),u=r1(u,t),c=pm(c),c=i1(c,t),c=r1(c,t),u=s1(u),c=s1(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=T+y+u,R=T+S+c,b=t1(o,35633,L),I=t1(o,35632,R);if(o.attachShader(x,b),o.attachShader(x,I),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x),n.debug.checkShaderErrors){const z=o.getProgramInfoLog(x).trim(),te=o.getShaderInfoLog(b).trim(),ne=o.getShaderInfoLog(I).trim();let Te=!0,_e=!0;if(o.getProgramParameter(x,35714)===!1){Te=!1;const J=n1(o,b,"vertex"),he=n1(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,35715)+`

Program Info Log: `+z+`
`+J+`
`+he)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(te===""||ne==="")&&(_e=!1);_e&&(this.diagnostics={runnable:Te,programLog:z,vertexShader:{log:te,prefix:y},fragmentShader:{log:ne,prefix:S}})}o.deleteShader(b),o.deleteShader(I);let O;this.getUniforms=function(){return O===void 0&&(O=new Zc(o,x)),O};let C;return this.getAttributes=function(){return C===void 0&&(C=lF(o,x)),C},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=tF++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=I,this}let _F=0;class wF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new SF(e);t.set(e,i)}return t.get(e)}}class SF{constructor(e){this.id=_F++,this.code=e,this.usedTimes=0}}function MF(n,e,t,i,o,a,u){const c=new aM,d=new wF,f=[],p=o.isWebGL2,m=o.logarithmicDepthBuffer,g=o.vertexTextures;let _=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C,z,te,ne,Te){const _e=ne.fog,J=Te.geometry,he=C.isMeshStandardMaterial?ne.environment:null,oe=(C.isMeshStandardMaterial?t:e).get(C.envMap||he),re=oe&&oe.mapping===Id?oe.image.height:null,X=M[C.type];C.precision!==null&&(_=o.getMaxPrecision(C.precision),_!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));const q=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Y=q!==void 0?q.length:0;let F=0;J.morphAttributes.position!==void 0&&(F=1),J.morphAttributes.normal!==void 0&&(F=2),J.morphAttributes.color!==void 0&&(F=3);let B,ce,xe,we;if(X){const et=$i[X];B=et.vertexShader,ce=et.fragmentShader}else B=C.vertexShader,ce=C.fragmentShader,d.update(C),xe=d.getVertexShaderID(C),we=d.getFragmentShaderID(C);const V=n.getRenderTarget(),ye=C.alphaTest>0,me=C.clearcoat>0,ge=C.iridescence>0;return{isWebGL2:p,shaderID:X,shaderName:C.type,vertexShader:B,fragmentShader:ce,defines:C.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,instancing:Te.isInstancedMesh===!0,instancingColor:Te.isInstancedMesh===!0&&Te.instanceColor!==null,supportsVertexTextures:g,outputEncoding:V===null?n.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:$s,map:!!C.map,matcap:!!C.matcap,envMap:!!oe,envMapMode:oe&&oe.mapping,envMapCubeUVHeight:re,lightMap:!!C.lightMap,aoMap:!!C.aoMap,emissiveMap:!!C.emissiveMap,bumpMap:!!C.bumpMap,normalMap:!!C.normalMap,objectSpaceNormalMap:C.normalMapType===KR,tangentSpaceNormalMap:C.normalMapType===yg,decodeVideoTexture:!!C.map&&C.map.isVideoTexture===!0&&C.map.encoding===Xt,clearcoat:me,clearcoatMap:me&&!!C.clearcoatMap,clearcoatRoughnessMap:me&&!!C.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!C.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!C.iridescenceMap,iridescenceThicknessMap:ge&&!!C.iridescenceThicknessMap,displacementMap:!!C.displacementMap,roughnessMap:!!C.roughnessMap,metalnessMap:!!C.metalnessMap,specularMap:!!C.specularMap,specularIntensityMap:!!C.specularIntensityMap,specularColorMap:!!C.specularColorMap,opaque:C.transparent===!1&&C.blending===Qo,alphaMap:!!C.alphaMap,alphaTest:ye,gradientMap:!!C.gradientMap,sheen:C.sheen>0,sheenColorMap:!!C.sheenColorMap,sheenRoughnessMap:!!C.sheenRoughnessMap,transmission:C.transmission>0,transmissionMap:!!C.transmissionMap,thicknessMap:!!C.thicknessMap,combine:C.combine,vertexTangents:!!C.normalMap&&!!J.attributes.tangent,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!C.map||!!C.bumpMap||!!C.normalMap||!!C.specularMap||!!C.alphaMap||!!C.emissiveMap||!!C.roughnessMap||!!C.metalnessMap||!!C.clearcoatMap||!!C.clearcoatRoughnessMap||!!C.clearcoatNormalMap||!!C.iridescenceMap||!!C.iridescenceThicknessMap||!!C.displacementMap||!!C.transmissionMap||!!C.thicknessMap||!!C.specularIntensityMap||!!C.specularColorMap||!!C.sheenColorMap||!!C.sheenRoughnessMap,uvsVertexOnly:!(C.map||C.bumpMap||C.normalMap||C.specularMap||C.alphaMap||C.emissiveMap||C.roughnessMap||C.metalnessMap||C.clearcoatNormalMap||C.iridescenceMap||C.iridescenceThicknessMap||C.transmission>0||C.transmissionMap||C.thicknessMap||C.specularIntensityMap||C.specularColorMap||C.sheen>0||C.sheenColorMap||C.sheenRoughnessMap)&&!!C.displacementMap,fog:!!_e,useFog:C.fog===!0,fogExp2:_e&&_e.isFogExp2,flatShading:!!C.flatShading,sizeAttenuation:C.sizeAttenuation,logarithmicDepthBuffer:m,skinning:Te.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:F,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:C.toneMapped?n.toneMapping:xr,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ua,flipSided:C.side===Ni,useDepthPacking:!!C.depthPacking,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:C.extensions&&C.extensions.derivatives,extensionFragDepth:C.extensions&&C.extensions.fragDepth,extensionDrawBuffers:C.extensions&&C.extensions.drawBuffers,extensionShaderTextureLOD:C.extensions&&C.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function y(C){const z=[];if(C.shaderID?z.push(C.shaderID):(z.push(C.customVertexShaderID),z.push(C.customFragmentShaderID)),C.defines!==void 0)for(const te in C.defines)z.push(te),z.push(C.defines[te]);return C.isRawShaderMaterial===!1&&(S(z,C),T(z,C),z.push(n.outputEncoding)),z.push(C.customProgramCacheKey),z.join()}function S(C,z){C.push(z.precision),C.push(z.outputEncoding),C.push(z.envMapMode),C.push(z.envMapCubeUVHeight),C.push(z.combine),C.push(z.vertexUvs),C.push(z.fogExp2),C.push(z.sizeAttenuation),C.push(z.morphTargetsCount),C.push(z.morphAttributeCount),C.push(z.numDirLights),C.push(z.numPointLights),C.push(z.numSpotLights),C.push(z.numHemiLights),C.push(z.numRectAreaLights),C.push(z.numDirLightShadows),C.push(z.numPointLightShadows),C.push(z.numSpotLightShadows),C.push(z.shadowMapType),C.push(z.toneMapping),C.push(z.numClippingPlanes),C.push(z.numClipIntersection),C.push(z.depthPacking)}function T(C,z){c.disableAll(),z.isWebGL2&&c.enable(0),z.supportsVertexTextures&&c.enable(1),z.instancing&&c.enable(2),z.instancingColor&&c.enable(3),z.map&&c.enable(4),z.matcap&&c.enable(5),z.envMap&&c.enable(6),z.lightMap&&c.enable(7),z.aoMap&&c.enable(8),z.emissiveMap&&c.enable(9),z.bumpMap&&c.enable(10),z.normalMap&&c.enable(11),z.objectSpaceNormalMap&&c.enable(12),z.tangentSpaceNormalMap&&c.enable(13),z.clearcoat&&c.enable(14),z.clearcoatMap&&c.enable(15),z.clearcoatRoughnessMap&&c.enable(16),z.clearcoatNormalMap&&c.enable(17),z.iridescence&&c.enable(18),z.iridescenceMap&&c.enable(19),z.iridescenceThicknessMap&&c.enable(20),z.displacementMap&&c.enable(21),z.specularMap&&c.enable(22),z.roughnessMap&&c.enable(23),z.metalnessMap&&c.enable(24),z.gradientMap&&c.enable(25),z.alphaMap&&c.enable(26),z.alphaTest&&c.enable(27),z.vertexColors&&c.enable(28),z.vertexAlphas&&c.enable(29),z.vertexUvs&&c.enable(30),z.vertexTangents&&c.enable(31),z.uvsVertexOnly&&c.enable(32),z.fog&&c.enable(33),C.push(c.mask),c.disableAll(),z.useFog&&c.enable(0),z.flatShading&&c.enable(1),z.logarithmicDepthBuffer&&c.enable(2),z.skinning&&c.enable(3),z.morphTargets&&c.enable(4),z.morphNormals&&c.enable(5),z.morphColors&&c.enable(6),z.premultipliedAlpha&&c.enable(7),z.shadowMapEnabled&&c.enable(8),z.physicallyCorrectLights&&c.enable(9),z.doubleSided&&c.enable(10),z.flipSided&&c.enable(11),z.useDepthPacking&&c.enable(12),z.dithering&&c.enable(13),z.specularIntensityMap&&c.enable(14),z.specularColorMap&&c.enable(15),z.transmission&&c.enable(16),z.transmissionMap&&c.enable(17),z.thicknessMap&&c.enable(18),z.sheen&&c.enable(19),z.sheenColorMap&&c.enable(20),z.sheenRoughnessMap&&c.enable(21),z.decodeVideoTexture&&c.enable(22),z.opaque&&c.enable(23),C.push(c.mask)}function L(C){const z=M[C.type];let te;if(z){const ne=$i[z];te=dD.clone(ne.uniforms)}else te=C.uniforms;return te}function R(C,z){let te;for(let ne=0,Te=f.length;ne<Te;ne++){const _e=f[ne];if(_e.cacheKey===z){te=_e,++te.usedTimes;break}}return te===void 0&&(te=new xF(n,z,C,a),f.push(te)),te}function b(C){if(--C.usedTimes===0){const z=f.indexOf(C);f[z]=f[f.length-1],f.pop(),C.destroy()}}function I(C){d.remove(C)}function O(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:L,acquireProgram:R,releaseProgram:b,releaseShaderCache:I,programs:f,dispose:O}}function bF(){let n=new WeakMap;function e(a){let u=n.get(a);return u===void 0&&(u={},n.set(a,u)),u}function t(a){n.delete(a)}function i(a,u,c){n.get(a)[u]=c}function o(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function EF(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function a1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function l1(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(m,g,_,M,x,y){let S=n[e];return S===void 0?(S={id:m.id,object:m,geometry:g,material:_,groupOrder:M,renderOrder:m.renderOrder,z:x,group:y},n[e]=S):(S.id=m.id,S.object=m,S.geometry=g,S.material=_,S.groupOrder=M,S.renderOrder=m.renderOrder,S.z=x,S.group=y),e++,S}function c(m,g,_,M,x,y){const S=u(m,g,_,M,x,y);_.transmission>0?i.push(S):_.transparent===!0?o.push(S):t.push(S)}function d(m,g,_,M,x,y){const S=u(m,g,_,M,x,y);_.transmission>0?i.unshift(S):_.transparent===!0?o.unshift(S):t.unshift(S)}function f(m,g){t.length>1&&t.sort(m||EF),i.length>1&&i.sort(g||a1),o.length>1&&o.sort(g||a1)}function p(){for(let m=e,g=n.length;m<g;m++){const _=n[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:d,finish:p,sort:f}}function TF(){let n=new WeakMap;function e(i,o){let a;return n.has(i)===!1?(a=new l1,n.set(i,[a])):o>=n.get(i).length?(a=new l1,n.get(i).push(a)):a=n.get(i)[o],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function CF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Et};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function AF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PF=0;function LF(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function RF(n,e){const t=new CF,i=AF(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)o.probe.push(new Q);const a=new Q,u=new Qt,c=new Qt;function d(p,m){let g=0,_=0,M=0;for(let z=0;z<9;z++)o.probe[z].set(0,0,0);let x=0,y=0,S=0,T=0,L=0,R=0,b=0,I=0;p.sort(LF);const O=m!==!0?Math.PI:1;for(let z=0,te=p.length;z<te;z++){const ne=p[z],Te=ne.color,_e=ne.intensity,J=ne.distance,he=ne.shadow&&ne.shadow.map?ne.shadow.map.texture:null;if(ne.isAmbientLight)g+=Te.r*_e*O,_+=Te.g*_e*O,M+=Te.b*_e*O;else if(ne.isLightProbe)for(let oe=0;oe<9;oe++)o.probe[oe].addScaledVector(ne.sh.coefficients[oe],_e);else if(ne.isDirectionalLight){const oe=t.get(ne);if(oe.color.copy(ne.color).multiplyScalar(ne.intensity*O),ne.castShadow){const re=ne.shadow,X=i.get(ne);X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,o.directionalShadow[x]=X,o.directionalShadowMap[x]=he,o.directionalShadowMatrix[x]=ne.shadow.matrix,R++}o.directional[x]=oe,x++}else if(ne.isSpotLight){const oe=t.get(ne);if(oe.position.setFromMatrixPosition(ne.matrixWorld),oe.color.copy(Te).multiplyScalar(_e*O),oe.distance=J,oe.coneCos=Math.cos(ne.angle),oe.penumbraCos=Math.cos(ne.angle*(1-ne.penumbra)),oe.decay=ne.decay,ne.castShadow){const re=ne.shadow,X=i.get(ne);X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,o.spotShadow[S]=X,o.spotShadowMap[S]=he,o.spotShadowMatrix[S]=ne.shadow.matrix,I++}o.spot[S]=oe,S++}else if(ne.isRectAreaLight){const oe=t.get(ne);oe.color.copy(Te).multiplyScalar(_e),oe.halfWidth.set(ne.width*.5,0,0),oe.halfHeight.set(0,ne.height*.5,0),o.rectArea[T]=oe,T++}else if(ne.isPointLight){const oe=t.get(ne);if(oe.color.copy(ne.color).multiplyScalar(ne.intensity*O),oe.distance=ne.distance,oe.decay=ne.decay,ne.castShadow){const re=ne.shadow,X=i.get(ne);X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,o.pointShadow[y]=X,o.pointShadowMap[y]=he,o.pointShadowMatrix[y]=ne.shadow.matrix,b++}o.point[y]=oe,y++}else if(ne.isHemisphereLight){const oe=t.get(ne);oe.skyColor.copy(ne.color).multiplyScalar(_e*O),oe.groundColor.copy(ne.groundColor).multiplyScalar(_e*O),o.hemi[L]=oe,L++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ne.LTC_FLOAT_1,o.rectAreaLTC2=Ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ne.LTC_HALF_1,o.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=g,o.ambient[1]=_,o.ambient[2]=M;const C=o.hash;(C.directionalLength!==x||C.pointLength!==y||C.spotLength!==S||C.rectAreaLength!==T||C.hemiLength!==L||C.numDirectionalShadows!==R||C.numPointShadows!==b||C.numSpotShadows!==I)&&(o.directional.length=x,o.spot.length=S,o.rectArea.length=T,o.point.length=y,o.hemi.length=L,o.directionalShadow.length=R,o.directionalShadowMap.length=R,o.pointShadow.length=b,o.pointShadowMap.length=b,o.spotShadow.length=I,o.spotShadowMap.length=I,o.directionalShadowMatrix.length=R,o.pointShadowMatrix.length=b,o.spotShadowMatrix.length=I,C.directionalLength=x,C.pointLength=y,C.spotLength=S,C.rectAreaLength=T,C.hemiLength=L,C.numDirectionalShadows=R,C.numPointShadows=b,C.numSpotShadows=I,o.version=PF++)}function f(p,m){let g=0,_=0,M=0,x=0,y=0;const S=m.matrixWorldInverse;for(let T=0,L=p.length;T<L;T++){const R=p[T];if(R.isDirectionalLight){const b=o.directional[g];b.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),g++}else if(R.isSpotLight){const b=o.spot[M];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),M++}else if(R.isRectAreaLight){const b=o.rectArea[x];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(S),c.identity(),u.copy(R.matrixWorld),u.premultiply(S),c.extractRotation(u),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),x++}else if(R.isPointLight){const b=o.point[_];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const b=o.hemi[y];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(S),y++}}}return{setup:d,setupView:f,state:o}}function u1(n,e){const t=new RF(n,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(m){i.push(m)}function c(m){o.push(m)}function d(m){t.setup(i,m)}function f(m){t.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:d,setupLightsView:f,pushLight:u,pushShadow:c}}function DF(n,e){let t=new WeakMap;function i(a,u=0){let c;return t.has(a)===!1?(c=new u1(n,e),t.set(a,[c])):u>=t.get(a).length?(c=new u1(n,e),t.get(a).push(c)):c=t.get(a)[u],c}function o(){t=new WeakMap}return{get:i,dispose:o}}class IF extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kF extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NF(n,e,t){let i=new xg;const o=new xt,a=new xt,u=new Ut,c=new IF({depthPacking:YR}),d=new kF,f={},p=t.maxTextureSize,m={0:Ni,1:Dl,2:ua},g=new Ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:FF,fragmentShader:zF}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new Bi;M.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yi(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=KS,this.render=function(R,b,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;const O=n.getRenderTarget(),C=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),te=n.state;te.setBlending(ts),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);for(let ne=0,Te=R.length;ne<Te;ne++){const _e=R[ne],J=_e.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const he=J.getFrameExtents();if(o.multiply(he),a.copy(J.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/he.x),o.x=a.x*he.x,J.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/he.y),o.y=a.y*he.y,J.mapSize.y=a.y)),J.map===null){const re=this.type!==gl?{minFilter:$n,magFilter:$n}:{};J.map=new Xs(o.x,o.y,re),J.map.texture.name=_e.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const oe=J.getViewportCount();for(let re=0;re<oe;re++){const X=J.getViewport(re);u.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),te.viewport(u),J.updateMatrices(_e,re),i=J.getFrustum(),L(b,I,J.camera,_e,this.type)}J.isPointLightShadow!==!0&&this.type===gl&&S(J,I),J.needsUpdate=!1}y.needsUpdate=!1,n.setRenderTarget(O,C,z)};function S(R,b){const I=e.update(x);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xs(o.x,o.y)),g.uniforms.shadow_pass.value=R.map.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(b,null,I,g,x,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(b,null,I,_,x,null)}function T(R,b,I,O,C,z){let te=null;const ne=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(ne!==void 0?te=ne:te=I.isPointLight===!0?d:c,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const Te=te.uuid,_e=b.uuid;let J=f[Te];J===void 0&&(J={},f[Te]=J);let he=J[_e];he===void 0&&(he=te.clone(),J[_e]=he),te=he}return te.visible=b.visible,te.wireframe=b.wireframe,z===gl?te.side=b.shadowSide!==null?b.shadowSide:b.side:te.side=b.shadowSide!==null?b.shadowSide:m[b.side],te.alphaMap=b.alphaMap,te.alphaTest=b.alphaTest,te.clipShadows=b.clipShadows,te.clippingPlanes=b.clippingPlanes,te.clipIntersection=b.clipIntersection,te.displacementMap=b.displacementMap,te.displacementScale=b.displacementScale,te.displacementBias=b.displacementBias,te.wireframeLinewidth=b.wireframeLinewidth,te.linewidth=b.linewidth,I.isPointLight===!0&&te.isMeshDistanceMaterial===!0&&(te.referencePosition.setFromMatrixPosition(I.matrixWorld),te.nearDistance=O,te.farDistance=C),te}function L(R,b,I,O,C){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===gl)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),Te=R.material;if(Array.isArray(Te)){const _e=ne.groups;for(let J=0,he=_e.length;J<he;J++){const oe=_e[J],re=Te[oe.materialIndex];if(re&&re.visible){const X=T(R,re,O,I.near,I.far,C);n.renderBufferDirect(I,null,ne,X,R,oe)}}}else if(Te.visible){const _e=T(R,Te,O,I.near,I.far,C);n.renderBufferDirect(I,null,ne,_e,R,null)}}const te=R.children;for(let ne=0,Te=te.length;ne<Te;ne++)L(te[ne],b,I,O,C)}}function OF(n,e,t){const i=t.isWebGL2;function o(){let H=!1;const Ie=new Ut;let Pe=null;const Ze=new Ut(0,0,0,0);return{setMask:function(Be){Pe!==Be&&!H&&(n.colorMask(Be,Be,Be,Be),Pe=Be)},setLocked:function(Be){H=Be},setClear:function(Be,st,De,ut,_t){_t===!0&&(Be*=ut,st*=ut,De*=ut),Ie.set(Be,st,De,ut),Ze.equals(Ie)===!1&&(n.clearColor(Be,st,De,ut),Ze.copy(Ie))},reset:function(){H=!1,Pe=null,Ze.set(-1,0,0,0)}}}function a(){let H=!1,Ie=null,Pe=null,Ze=null;return{setTest:function(Be){Be?we(2929):V(2929)},setMask:function(Be){Ie!==Be&&!H&&(n.depthMask(Be),Ie=Be)},setFunc:function(Be){if(Pe!==Be){if(Be)switch(Be){case yR:n.depthFunc(512);break;case xR:n.depthFunc(519);break;case _R:n.depthFunc(513);break;case om:n.depthFunc(515);break;case wR:n.depthFunc(514);break;case SR:n.depthFunc(518);break;case MR:n.depthFunc(516);break;case bR:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);Pe=Be}},setLocked:function(Be){H=Be},setClear:function(Be){Ze!==Be&&(n.clearDepth(Be),Ze=Be)},reset:function(){H=!1,Ie=null,Pe=null,Ze=null}}}function u(){let H=!1,Ie=null,Pe=null,Ze=null,Be=null,st=null,De=null,ut=null,_t=null;return{setTest:function(yt){H||(yt?we(2960):V(2960))},setMask:function(yt){Ie!==yt&&!H&&(n.stencilMask(yt),Ie=yt)},setFunc:function(yt,Ht,hn){(Pe!==yt||Ze!==Ht||Be!==hn)&&(n.stencilFunc(yt,Ht,hn),Pe=yt,Ze=Ht,Be=hn)},setOp:function(yt,Ht,hn){(st!==yt||De!==Ht||ut!==hn)&&(n.stencilOp(yt,Ht,hn),st=yt,De=Ht,ut=hn)},setLocked:function(yt){H=yt},setClear:function(yt){_t!==yt&&(n.clearStencil(yt),_t=yt)},reset:function(){H=!1,Ie=null,Pe=null,Ze=null,Be=null,st=null,De=null,ut=null,_t=null}}}const c=new o,d=new a,f=new u;let p={},m={},g=new WeakMap,_=[],M=null,x=!1,y=null,S=null,T=null,L=null,R=null,b=null,I=null,O=!1,C=null,z=null,te=null,ne=null,Te=null;const _e=n.getParameter(35661);let J=!1,he=0;const oe=n.getParameter(7938);oe.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(oe)[1]),J=he>=1):oe.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),J=he>=2);let re=null,X={};const q=n.getParameter(3088),Y=n.getParameter(2978),F=new Ut().fromArray(q),B=new Ut().fromArray(Y);function ce(H,Ie,Pe){const Ze=new Uint8Array(4),Be=n.createTexture();n.bindTexture(H,Be),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let st=0;st<Pe;st++)n.texImage2D(Ie+st,0,6408,1,1,0,6408,5121,Ze);return Be}const xe={};xe[3553]=ce(3553,3553,1),xe[34067]=ce(34067,34069,6),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),we(2929),d.setFunc(om),At(!1),Dt(e_),we(2884),tt(ts);function we(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function V(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function ye(H,Ie){return m[H]!==Ie?(n.bindFramebuffer(H,Ie),m[H]=Ie,i&&(H===36009&&(m[36160]=Ie),H===36160&&(m[36009]=Ie)),!0):!1}function me(H,Ie){let Pe=_,Ze=!1;if(H)if(Pe=g.get(Ie),Pe===void 0&&(Pe=[],g.set(Ie,Pe)),H.isWebGLMultipleRenderTargets){const Be=H.texture;if(Pe.length!==Be.length||Pe[0]!==36064){for(let st=0,De=Be.length;st<De;st++)Pe[st]=36064+st;Pe.length=Be.length,Ze=!0}}else Pe[0]!==36064&&(Pe[0]=36064,Ze=!0);else Pe[0]!==1029&&(Pe[0]=1029,Ze=!0);Ze&&(t.isWebGL2?n.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function ge(H){return M!==H?(n.useProgram(H),M=H,!0):!1}const be={[Ho]:32774,[aR]:32778,[lR]:32779};if(i)be[i_]=32775,be[r_]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(be[i_]=H.MIN_EXT,be[r_]=H.MAX_EXT)}const et={[uR]:0,[cR]:1,[dR]:768,[ZS]:770,[vR]:776,[mR]:774,[hR]:772,[fR]:769,[QS]:771,[gR]:775,[pR]:773};function tt(H,Ie,Pe,Ze,Be,st,De,ut){if(H===ts){x===!0&&(V(3042),x=!1);return}if(x===!1&&(we(3042),x=!0),H!==oR){if(H!==y||ut!==O){if((S!==Ho||R!==Ho)&&(n.blendEquation(32774),S=Ho,R=Ho),ut)switch(H){case Qo:n.blendFuncSeparate(1,771,1,771);break;case bl:n.blendFunc(1,1);break;case t_:n.blendFuncSeparate(0,769,0,1);break;case n_:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Qo:n.blendFuncSeparate(770,771,1,771);break;case bl:n.blendFunc(770,1);break;case t_:n.blendFuncSeparate(0,769,0,1);break;case n_:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,L=null,b=null,I=null,y=H,O=ut}return}Be=Be||Ie,st=st||Pe,De=De||Ze,(Ie!==S||Be!==R)&&(n.blendEquationSeparate(be[Ie],be[Be]),S=Ie,R=Be),(Pe!==T||Ze!==L||st!==b||De!==I)&&(n.blendFuncSeparate(et[Pe],et[Ze],et[st],et[De]),T=Pe,L=Ze,b=st,I=De),y=H,O=null}function We(H,Ie){H.side===ua?V(2884):we(2884);let Pe=H.side===Ni;Ie&&(Pe=!Pe),At(Pe),H.blending===Qo&&H.transparent===!1?tt(ts):tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ze=H.stencilWrite;f.setTest(Ze),Ze&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Jt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?we(32926):V(32926)}function At(H){C!==H&&(H?n.frontFace(2304):n.frontFace(2305),C=H)}function Dt(H){H!==nR?(we(2884),H!==z&&(H===e_?n.cullFace(1029):H===iR?n.cullFace(1028):n.cullFace(1032))):V(2884),z=H}function It(H){H!==te&&(J&&n.lineWidth(H),te=H)}function Jt(H,Ie,Pe){H?(we(32823),(ne!==Ie||Te!==Pe)&&(n.polygonOffset(Ie,Pe),ne=Ie,Te=Pe)):V(32823)}function Oe(H){H?we(3089):V(3089)}function nt(H){H===void 0&&(H=33984+_e-1),re!==H&&(n.activeTexture(H),re=H)}function gt(H,Ie){re===null&&nt();let Pe=X[re];Pe===void 0&&(Pe={type:void 0,texture:void 0},X[re]=Pe),(Pe.type!==H||Pe.texture!==Ie)&&(n.bindTexture(H,Ie||xe[H]),Pe.type=H,Pe.texture=Ie)}function rt(){const H=X[re];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(H){F.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),F.copy(H))}function Fe(H){B.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),B.copy(H))}function ze(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},re=null,X={},m={},g=new WeakMap,_=[],M=null,x=!1,y=null,S=null,T=null,L=null,R=null,b=null,I=null,O=!1,C=null,z=null,te=null,ne=null,Te=null,F.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:we,disable:V,bindFramebuffer:ye,drawBuffers:me,useProgram:ge,setBlending:tt,setMaterial:We,setFlipSided:At,setCullFace:Dt,setLineWidth:It,setPolygonOffset:Jt,setScissorTest:Oe,activeTexture:nt,bindTexture:gt,unbindTexture:rt,compressedTexImage2D:k,texImage2D:qe,texImage3D:de,texStorage2D:Se,texStorage3D:Le,texSubImage2D:D,texSubImage3D:le,compressedTexSubImage2D:ve,scissor:ke,viewport:Fe,reset:ze}}function BF(n,e,t,i,o,a,u){const c=o.isWebGL2,d=o.maxTextures,f=o.maxCubemapSize,p=o.maxTextureSize,m=o.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(k,D){return S?new OffscreenCanvas(k,D):kl("canvas")}function L(k,D,le,ve){let Se=1;if((k.width>ve||k.height>ve)&&(Se=ve/Math.max(k.width,k.height)),Se<1||D===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const Le=D?hm:Math.floor,qe=Le(Se*k.width),de=Le(Se*k.height);x===void 0&&(x=T(qe,de));const ke=le?T(qe,de):x;return ke.width=qe,ke.height=de,ke.getContext("2d").drawImage(k,0,0,qe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+qe+"x"+de+")."),ke}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function R(k){return L_(k.width)&&L_(k.height)}function b(k){return c?!1:k.wrapS!==Fi||k.wrapT!==Fi||k.minFilter!==$n&&k.minFilter!==_i}function I(k,D){return k.generateMipmaps&&D&&k.minFilter!==$n&&k.minFilter!==_i}function O(k){n.generateMipmap(k)}function C(k,D,le,ve,Se=!1){if(c===!1)return D;if(k!==null){if(n[k]!==void 0)return n[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Le=D;return D===6403&&(le===5126&&(Le=33326),le===5131&&(Le=33325),le===5121&&(Le=33321)),D===33319&&(le===5126&&(Le=33328),le===5131&&(Le=33327),le===5121&&(Le=33323)),D===6408&&(le===5126&&(Le=34836),le===5131&&(Le=34842),le===5121&&(Le=ve===Xt&&Se===!1?35907:32856),le===32819&&(Le=32854),le===32820&&(Le=32855)),(Le===33325||Le===33326||Le===33327||Le===33328||Le===34842||Le===34836)&&e.get("EXT_color_buffer_float"),Le}function z(k,D,le){return I(k,le)===!0||k.isFramebufferTexture&&k.minFilter!==$n&&k.minFilter!==_i?Math.log2(Math.max(D.width,D.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?D.mipmaps.length:1}function te(k){return k===$n||k===s_||k===o_?9728:9729}function ne(k){const D=k.target;D.removeEventListener("dispose",ne),_e(D),D.isVideoTexture&&M.delete(D)}function Te(k){const D=k.target;D.removeEventListener("dispose",Te),he(D)}function _e(k){const D=i.get(k);if(D.__webglInit===void 0)return;const le=k.source,ve=y.get(le);if(ve){const Se=ve[D.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&J(k),Object.keys(ve).length===0&&y.delete(le)}i.remove(k)}function J(k){const D=i.get(k);n.deleteTexture(D.__webglTexture);const le=k.source,ve=y.get(le);delete ve[D.__cacheKey],u.memory.textures--}function he(k){const D=k.texture,le=i.get(k),ve=i.get(D);if(ve.__webglTexture!==void 0&&(n.deleteTexture(ve.__webglTexture),u.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)n.deleteFramebuffer(le.__webglFramebuffer[Se]),le.__webglDepthbuffer&&n.deleteRenderbuffer(le.__webglDepthbuffer[Se]);else{if(n.deleteFramebuffer(le.__webglFramebuffer),le.__webglDepthbuffer&&n.deleteRenderbuffer(le.__webglDepthbuffer),le.__webglMultisampledFramebuffer&&n.deleteFramebuffer(le.__webglMultisampledFramebuffer),le.__webglColorRenderbuffer)for(let Se=0;Se<le.__webglColorRenderbuffer.length;Se++)le.__webglColorRenderbuffer[Se]&&n.deleteRenderbuffer(le.__webglColorRenderbuffer[Se]);le.__webglDepthRenderbuffer&&n.deleteRenderbuffer(le.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let Se=0,Le=D.length;Se<Le;Se++){const qe=i.get(D[Se]);qe.__webglTexture&&(n.deleteTexture(qe.__webglTexture),u.memory.textures--),i.remove(D[Se])}i.remove(D),i.remove(k)}let oe=0;function re(){oe=0}function X(){const k=oe;return k>=d&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+d),oe+=1,k}function q(k){const D=[];return D.push(k.wrapS),D.push(k.wrapT),D.push(k.magFilter),D.push(k.minFilter),D.push(k.anisotropy),D.push(k.internalFormat),D.push(k.format),D.push(k.type),D.push(k.generateMipmaps),D.push(k.premultiplyAlpha),D.push(k.flipY),D.push(k.unpackAlignment),D.push(k.encoding),D.join()}function Y(k,D){const le=i.get(k);if(k.isVideoTexture&&gt(k),k.isRenderTargetTexture===!1&&k.version>0&&le.__version!==k.version){const ve=k.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(le,k,D);return}}t.activeTexture(33984+D),t.bindTexture(3553,le.__webglTexture)}function F(k,D){const le=i.get(k);if(k.version>0&&le.__version!==k.version){me(le,k,D);return}t.activeTexture(33984+D),t.bindTexture(35866,le.__webglTexture)}function B(k,D){const le=i.get(k);if(k.version>0&&le.__version!==k.version){me(le,k,D);return}t.activeTexture(33984+D),t.bindTexture(32879,le.__webglTexture)}function ce(k,D){const le=i.get(k);if(k.version>0&&le.__version!==k.version){ge(le,k,D);return}t.activeTexture(33984+D),t.bindTexture(34067,le.__webglTexture)}const xe={[um]:10497,[Fi]:33071,[cm]:33648},we={[$n]:9728,[s_]:9984,[o_]:9986,[_i]:9729,[DR]:9985,[kd]:9987};function V(k,D,le){if(le?(n.texParameteri(k,10242,xe[D.wrapS]),n.texParameteri(k,10243,xe[D.wrapT]),(k===32879||k===35866)&&n.texParameteri(k,32882,xe[D.wrapR]),n.texParameteri(k,10240,we[D.magFilter]),n.texParameteri(k,10241,we[D.minFilter])):(n.texParameteri(k,10242,33071),n.texParameteri(k,10243,33071),(k===32879||k===35866)&&n.texParameteri(k,32882,33071),(D.wrapS!==Fi||D.wrapT!==Fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(k,10240,te(D.magFilter)),n.texParameteri(k,10241,te(D.minFilter)),D.minFilter!==$n&&D.minFilter!==_i&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(D.type===Bs&&e.has("OES_texture_float_linear")===!1||c===!1&&D.type===Il&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(n.texParameterf(k,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,o.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function ye(k,D){let le=!1;k.__webglInit===void 0&&(k.__webglInit=!0,D.addEventListener("dispose",ne));const ve=D.source;let Se=y.get(ve);Se===void 0&&(Se={},y.set(ve,Se));const Le=q(D);if(Le!==k.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,le=!0),Se[Le].usedTimes++;const qe=Se[k.__cacheKey];qe!==void 0&&(Se[k.__cacheKey].usedTimes--,qe.usedTimes===0&&J(D)),k.__cacheKey=Le,k.__webglTexture=Se[Le].texture}return le}function me(k,D,le){let ve=3553;D.isDataArrayTexture&&(ve=35866),D.isData3DTexture&&(ve=32879);const Se=ye(k,D),Le=D.source;if(t.activeTexture(33984+le),t.bindTexture(ve,k.__webglTexture),Le.version!==Le.__currentVersion||Se===!0){n.pixelStorei(37440,D.flipY),n.pixelStorei(37441,D.premultiplyAlpha),n.pixelStorei(3317,D.unpackAlignment),n.pixelStorei(37443,0);const qe=b(D)&&R(D.image)===!1;let de=L(D.image,qe,!1,p);de=rt(D,de);const ke=R(de)||c,Fe=a.convert(D.format,D.encoding);let ze=a.convert(D.type),H=C(D.internalFormat,Fe,ze,D.encoding,D.isVideoTexture);V(ve,D,ke);let Ie;const Pe=D.mipmaps,Ze=c&&D.isVideoTexture!==!0,Be=Le.__currentVersion===void 0||Se===!0,st=z(D,de,ke);if(D.isDepthTexture)H=6402,c?D.type===Bs?H=36012:D.type===Os?H=33190:D.type===Jo?H=35056:H=33189:D.type===Bs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Gs&&H===6402&&D.type!==eM&&D.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Os,ze=a.convert(D.type)),D.format===fa&&H===6402&&(H=34041,D.type!==Jo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Jo,ze=a.convert(D.type))),Be&&(Ze?t.texStorage2D(3553,1,H,de.width,de.height):t.texImage2D(3553,0,H,de.width,de.height,0,Fe,ze,null));else if(D.isDataTexture)if(Pe.length>0&&ke){Ze&&Be&&t.texStorage2D(3553,st,H,Pe[0].width,Pe[0].height);for(let De=0,ut=Pe.length;De<ut;De++)Ie=Pe[De],Ze?t.texSubImage2D(3553,De,0,0,Ie.width,Ie.height,Fe,ze,Ie.data):t.texImage2D(3553,De,H,Ie.width,Ie.height,0,Fe,ze,Ie.data);D.generateMipmaps=!1}else Ze?(Be&&t.texStorage2D(3553,st,H,de.width,de.height),t.texSubImage2D(3553,0,0,0,de.width,de.height,Fe,ze,de.data)):t.texImage2D(3553,0,H,de.width,de.height,0,Fe,ze,de.data);else if(D.isCompressedTexture){Ze&&Be&&t.texStorage2D(3553,st,H,Pe[0].width,Pe[0].height);for(let De=0,ut=Pe.length;De<ut;De++)Ie=Pe[De],D.format!==qi?Fe!==null?Ze?t.compressedTexSubImage2D(3553,De,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(3553,De,H,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,De,0,0,Ie.width,Ie.height,Fe,ze,Ie.data):t.texImage2D(3553,De,H,Ie.width,Ie.height,0,Fe,ze,Ie.data)}else if(D.isDataArrayTexture)Ze?(Be&&t.texStorage3D(35866,st,H,de.width,de.height,de.depth),t.texSubImage3D(35866,0,0,0,0,de.width,de.height,de.depth,Fe,ze,de.data)):t.texImage3D(35866,0,H,de.width,de.height,de.depth,0,Fe,ze,de.data);else if(D.isData3DTexture)Ze?(Be&&t.texStorage3D(32879,st,H,de.width,de.height,de.depth),t.texSubImage3D(32879,0,0,0,0,de.width,de.height,de.depth,Fe,ze,de.data)):t.texImage3D(32879,0,H,de.width,de.height,de.depth,0,Fe,ze,de.data);else if(D.isFramebufferTexture){if(Be)if(Ze)t.texStorage2D(3553,st,H,de.width,de.height);else{let De=de.width,ut=de.height;for(let _t=0;_t<st;_t++)t.texImage2D(3553,_t,H,De,ut,0,Fe,ze,null),De>>=1,ut>>=1}}else if(Pe.length>0&&ke){Ze&&Be&&t.texStorage2D(3553,st,H,Pe[0].width,Pe[0].height);for(let De=0,ut=Pe.length;De<ut;De++)Ie=Pe[De],Ze?t.texSubImage2D(3553,De,0,0,Fe,ze,Ie):t.texImage2D(3553,De,H,Fe,ze,Ie);D.generateMipmaps=!1}else Ze?(Be&&t.texStorage2D(3553,st,H,de.width,de.height),t.texSubImage2D(3553,0,0,0,Fe,ze,de)):t.texImage2D(3553,0,H,Fe,ze,de);I(D,ke)&&O(ve),Le.__currentVersion=Le.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function ge(k,D,le){if(D.image.length!==6)return;const ve=ye(k,D),Se=D.source;if(t.activeTexture(33984+le),t.bindTexture(34067,k.__webglTexture),Se.version!==Se.__currentVersion||ve===!0){n.pixelStorei(37440,D.flipY),n.pixelStorei(37441,D.premultiplyAlpha),n.pixelStorei(3317,D.unpackAlignment),n.pixelStorei(37443,0);const Le=D.isCompressedTexture||D.image[0].isCompressedTexture,qe=D.image[0]&&D.image[0].isDataTexture,de=[];for(let De=0;De<6;De++)!Le&&!qe?de[De]=L(D.image[De],!1,!0,f):de[De]=qe?D.image[De].image:D.image[De],de[De]=rt(D,de[De]);const ke=de[0],Fe=R(ke)||c,ze=a.convert(D.format,D.encoding),H=a.convert(D.type),Ie=C(D.internalFormat,ze,H,D.encoding),Pe=c&&D.isVideoTexture!==!0,Ze=Se.__currentVersion===void 0||ve===!0;let Be=z(D,ke,Fe);V(34067,D,Fe);let st;if(Le){Pe&&Ze&&t.texStorage2D(34067,Be,Ie,ke.width,ke.height);for(let De=0;De<6;De++){st=de[De].mipmaps;for(let ut=0;ut<st.length;ut++){const _t=st[ut];D.format!==qi?ze!==null?Pe?t.compressedTexSubImage2D(34069+De,ut,0,0,_t.width,_t.height,ze,_t.data):t.compressedTexImage2D(34069+De,ut,Ie,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+De,ut,0,0,_t.width,_t.height,ze,H,_t.data):t.texImage2D(34069+De,ut,Ie,_t.width,_t.height,0,ze,H,_t.data)}}}else{st=D.mipmaps,Pe&&Ze&&(st.length>0&&Be++,t.texStorage2D(34067,Be,Ie,de[0].width,de[0].height));for(let De=0;De<6;De++)if(qe){Pe?t.texSubImage2D(34069+De,0,0,0,de[De].width,de[De].height,ze,H,de[De].data):t.texImage2D(34069+De,0,Ie,de[De].width,de[De].height,0,ze,H,de[De].data);for(let ut=0;ut<st.length;ut++){const yt=st[ut].image[De].image;Pe?t.texSubImage2D(34069+De,ut+1,0,0,yt.width,yt.height,ze,H,yt.data):t.texImage2D(34069+De,ut+1,Ie,yt.width,yt.height,0,ze,H,yt.data)}}else{Pe?t.texSubImage2D(34069+De,0,0,0,ze,H,de[De]):t.texImage2D(34069+De,0,Ie,ze,H,de[De]);for(let ut=0;ut<st.length;ut++){const _t=st[ut];Pe?t.texSubImage2D(34069+De,ut+1,0,0,ze,H,_t.image[De]):t.texImage2D(34069+De,ut+1,Ie,ze,H,_t.image[De])}}}I(D,Fe)&&O(34067),Se.__currentVersion=Se.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function be(k,D,le,ve,Se){const Le=a.convert(le.format,le.encoding),qe=a.convert(le.type),de=C(le.internalFormat,Le,qe,le.encoding);i.get(D).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,de,D.width,D.height,D.depth,0,Le,qe,null):t.texImage2D(Se,0,de,D.width,D.height,0,Le,qe,null)),t.bindFramebuffer(36160,k),nt(D)?g.framebufferTexture2DMultisampleEXT(36160,ve,Se,i.get(le).__webglTexture,0,Oe(D)):n.framebufferTexture2D(36160,ve,Se,i.get(le).__webglTexture,0),t.bindFramebuffer(36160,null)}function et(k,D,le){if(n.bindRenderbuffer(36161,k),D.depthBuffer&&!D.stencilBuffer){let ve=33189;if(le||nt(D)){const Se=D.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Bs?ve=36012:Se.type===Os&&(ve=33190));const Le=Oe(D);nt(D)?g.renderbufferStorageMultisampleEXT(36161,Le,ve,D.width,D.height):n.renderbufferStorageMultisample(36161,Le,ve,D.width,D.height)}else n.renderbufferStorage(36161,ve,D.width,D.height);n.framebufferRenderbuffer(36160,36096,36161,k)}else if(D.depthBuffer&&D.stencilBuffer){const ve=Oe(D);le&&nt(D)===!1?n.renderbufferStorageMultisample(36161,ve,35056,D.width,D.height):nt(D)?g.renderbufferStorageMultisampleEXT(36161,ve,35056,D.width,D.height):n.renderbufferStorage(36161,34041,D.width,D.height),n.framebufferRenderbuffer(36160,33306,36161,k)}else{const ve=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Se=0;Se<ve.length;Se++){const Le=ve[Se],qe=a.convert(Le.format,Le.encoding),de=a.convert(Le.type),ke=C(Le.internalFormat,qe,de,Le.encoding),Fe=Oe(D);le&&nt(D)===!1?n.renderbufferStorageMultisample(36161,Fe,ke,D.width,D.height):nt(D)?g.renderbufferStorageMultisampleEXT(36161,Fe,ke,D.width,D.height):n.renderbufferStorage(36161,ke,D.width,D.height)}}n.bindRenderbuffer(36161,null)}function tt(k,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,k),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),Y(D.depthTexture,0);const ve=i.get(D.depthTexture).__webglTexture,Se=Oe(D);if(D.depthTexture.format===Gs)nt(D)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,Se):n.framebufferTexture2D(36160,36096,3553,ve,0);else if(D.depthTexture.format===fa)nt(D)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,Se):n.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function We(k){const D=i.get(k),le=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!D.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");tt(D.__webglFramebuffer,k)}else if(le){D.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,D.__webglFramebuffer[ve]),D.__webglDepthbuffer[ve]=n.createRenderbuffer(),et(D.__webglDepthbuffer[ve],k,!1)}else t.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=n.createRenderbuffer(),et(D.__webglDepthbuffer,k,!1);t.bindFramebuffer(36160,null)}function At(k,D,le){const ve=i.get(k);D!==void 0&&be(ve.__webglFramebuffer,k,k.texture,36064,3553),le!==void 0&&We(k)}function Dt(k){const D=k.texture,le=i.get(k),ve=i.get(D);k.addEventListener("dispose",Te),k.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=D.version,u.memory.textures++);const Se=k.isWebGLCubeRenderTarget===!0,Le=k.isWebGLMultipleRenderTargets===!0,qe=R(k)||c;if(Se){le.__webglFramebuffer=[];for(let de=0;de<6;de++)le.__webglFramebuffer[de]=n.createFramebuffer()}else{if(le.__webglFramebuffer=n.createFramebuffer(),Le)if(o.drawBuffers){const de=k.texture;for(let ke=0,Fe=de.length;ke<Fe;ke++){const ze=i.get(de[ke]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&k.samples>0&&nt(k)===!1){const de=Le?D:[D];le.__webglMultisampledFramebuffer=n.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer);for(let ke=0;ke<de.length;ke++){const Fe=de[ke];le.__webglColorRenderbuffer[ke]=n.createRenderbuffer(),n.bindRenderbuffer(36161,le.__webglColorRenderbuffer[ke]);const ze=a.convert(Fe.format,Fe.encoding),H=a.convert(Fe.type),Ie=C(Fe.internalFormat,ze,H,Fe.encoding),Pe=Oe(k);n.renderbufferStorageMultisample(36161,Pe,Ie,k.width,k.height),n.framebufferRenderbuffer(36160,36064+ke,36161,le.__webglColorRenderbuffer[ke])}n.bindRenderbuffer(36161,null),k.depthBuffer&&(le.__webglDepthRenderbuffer=n.createRenderbuffer(),et(le.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,ve.__webglTexture),V(34067,D,qe);for(let de=0;de<6;de++)be(le.__webglFramebuffer[de],k,D,36064,34069+de);I(D,qe)&&O(34067),t.unbindTexture()}else if(Le){const de=k.texture;for(let ke=0,Fe=de.length;ke<Fe;ke++){const ze=de[ke],H=i.get(ze);t.bindTexture(3553,H.__webglTexture),V(3553,ze,qe),be(le.__webglFramebuffer,k,ze,36064+ke,3553),I(ze,qe)&&O(3553)}t.unbindTexture()}else{let de=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(c?de=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ve.__webglTexture),V(de,D,qe),be(le.__webglFramebuffer,k,D,36064,de),I(D,qe)&&O(de),t.unbindTexture()}k.depthBuffer&&We(k)}function It(k){const D=R(k)||c,le=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let ve=0,Se=le.length;ve<Se;ve++){const Le=le[ve];if(I(Le,D)){const qe=k.isWebGLCubeRenderTarget?34067:3553,de=i.get(Le).__webglTexture;t.bindTexture(qe,de),O(qe),t.unbindTexture()}}}function Jt(k){if(c&&k.samples>0&&nt(k)===!1){const D=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],le=k.width,ve=k.height;let Se=16384;const Le=[],qe=k.stencilBuffer?33306:36096,de=i.get(k),ke=k.isWebGLMultipleRenderTargets===!0;if(ke)for(let Fe=0;Fe<D.length;Fe++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Fe,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Fe,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Fe=0;Fe<D.length;Fe++){Le.push(36064+Fe),k.depthBuffer&&Le.push(qe);const ze=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ze===!1&&(k.depthBuffer&&(Se|=256),k.stencilBuffer&&(Se|=1024)),ke&&n.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Fe]),ze===!0&&(n.invalidateFramebuffer(36008,[qe]),n.invalidateFramebuffer(36009,[qe])),ke){const H=i.get(D[Fe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,H,0)}n.blitFramebuffer(0,0,le,ve,0,0,le,ve,Se,9728),_&&n.invalidateFramebuffer(36008,Le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ke)for(let Fe=0;Fe<D.length;Fe++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Fe,36161,de.__webglColorRenderbuffer[Fe]);const ze=i.get(D[Fe]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Fe,3553,ze,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function Oe(k){return Math.min(m,k.samples)}function nt(k){const D=i.get(k);return c&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function gt(k){const D=u.render.frame;M.get(k)!==D&&(M.set(k,D),k.update())}function rt(k,D){const le=k.encoding,ve=k.format,Se=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===fm||le!==$s&&(le===Xt?c===!1?e.has("EXT_sRGB")===!0&&ve===qi?(k.format=fm,k.minFilter=_i,k.generateMipmaps=!1):D=iM.sRGBToLinear(D):(ve!==qi||Se!==Ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",le)),D}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=Y,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=ce,this.rebindTextures=At,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=be,this.useMultisampledRTT=nt}function UF(n,e,t){const i=t.isWebGL2;function o(a,u=null){let c;if(a===Ws)return 5121;if(a===zR)return 32819;if(a===NR)return 32820;if(a===IR)return 5120;if(a===kR)return 5122;if(a===eM)return 5123;if(a===FR)return 5124;if(a===Os)return 5125;if(a===Bs)return 5126;if(a===Il)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===OR)return 6406;if(a===qi)return 6408;if(a===UR)return 6409;if(a===VR)return 6410;if(a===Gs)return 6402;if(a===fa)return 34041;if(a===jR)return 6403;if(a===BR)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===fm)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===GR)return 36244;if(a===HR)return 33319;if(a===WR)return 33320;if(a===$R)return 36249;if(a===Hh||a===Wh||a===$h||a===Xh)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Hh)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Wh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$h)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Hh)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Wh)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$h)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xh)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===a_||a===l_||a===u_||a===c_)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===a_)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===l_)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===u_)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===c_)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===XR)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===d_||a===f_)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===d_)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===f_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===h_||a===p_||a===m_||a===g_||a===v_||a===y_||a===x_||a===__||a===w_||a===S_||a===M_||a===b_||a===E_||a===T_)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===h_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===p_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===m_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===g_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===v_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===y_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===x_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===__)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===w_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===S_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===M_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===b_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===E_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===T_)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===C_)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===C_)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Jo?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:o}}class VF extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jF={type:"move"};class Sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const x of e.hand.values()){const y=t.getJointPose(x,i);if(f.joints[x.jointName]===void 0){const T=new Tc;T.matrixAutoUpdate=!1,T.visible=!1,f.joints[x.jointName]=T,f.add(T)}const S=f.joints[x.jointName];y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=y.radius),S.visible=y!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),_=.02,M=.005;f.inputState.pinching&&g>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(jF)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=u!==null),this}}class GF extends ui{constructor(e,t,i,o,a,u,c,d,f,p){if(p=p!==void 0?p:Gs,p!==Gs&&p!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Gs&&(i=Os),i===void 0&&p===fa&&(i=Jo),super(null,o,a,u,c,d,p,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:$n,this.minFilter=d!==void 0?d:$n,this.flipY=!1,this.generateMipmaps=!1}}class HF extends ga{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",d=null,f=null,p=null,m=null,g=null,_=null;const M=t.getContextAttributes();let x=null,y=null;const S=[],T=[],L=new Xn;L.layers.enable(1),L.viewport=new Ut;const R=new Xn;R.layers.enable(2),R.viewport=new Ut;const b=[L,R],I=new VF;I.layers.enable(1),I.layers.enable(2);let O=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=S[q];return Y===void 0&&(Y=new Sp,S[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=S[q];return Y===void 0&&(Y=new Sp,S[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=S[q];return Y===void 0&&(Y=new Sp,S[q]=Y),Y.getHandSpace()};function z(q){const Y=T.indexOf(q.inputSource);if(Y===-1)return;const F=S[Y];F!==void 0&&F.dispatchEvent({type:q.type,data:q.inputSource})}function te(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",ne);for(let q=0;q<S.length;q++){const Y=T[q];Y!==null&&(T[q]=null,S[q].disconnect(Y))}O=null,C=null,e.setRenderTarget(x),g=null,m=null,p=null,o=null,y=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",te),o.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(o,t,Y),o.updateRenderState({baseLayer:g}),y=new Xs(g.framebufferWidth,g.framebufferHeight,{format:qi,type:Ws,encoding:e.outputEncoding})}else{let Y=null,F=null,B=null;M.depth&&(B=M.stencil?35056:33190,Y=M.stencil?fa:Gs,F=M.stencil?Jo:Os);const ce={colorFormat:32856,depthFormat:B,scaleFactor:a};p=new XRWebGLBinding(o,t),m=p.createProjectionLayer(ce),o.updateRenderState({layers:[m]}),y=new Xs(m.textureWidth,m.textureHeight,{format:qi,type:Ws,depthTexture:new GF(m.textureWidth,m.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const xe=e.properties.get(y);xe.__ignoreDepthValues=m.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(1),d=null,u=await o.requestReferenceSpace(c),X.setContext(o),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ne(q){for(let Y=0;Y<q.removed.length;Y++){const F=q.removed[Y],B=T.indexOf(F);B>=0&&(T[B]=null,S[B].dispatchEvent({type:"disconnected",data:F}))}for(let Y=0;Y<q.added.length;Y++){const F=q.added[Y];let B=T.indexOf(F);if(B===-1){for(let xe=0;xe<S.length;xe++)if(xe>=T.length){T.push(F),B=xe;break}else if(T[xe]===null){T[xe]=F,B=xe;break}if(B===-1)break}const ce=S[B];ce&&ce.dispatchEvent({type:"connected",data:F})}}const Te=new Q,_e=new Q;function J(q,Y,F){Te.setFromMatrixPosition(Y.matrixWorld),_e.setFromMatrixPosition(F.matrixWorld);const B=Te.distanceTo(_e),ce=Y.projectionMatrix.elements,xe=F.projectionMatrix.elements,we=ce[14]/(ce[10]-1),V=ce[14]/(ce[10]+1),ye=(ce[9]+1)/ce[5],me=(ce[9]-1)/ce[5],ge=(ce[8]-1)/ce[0],be=(xe[8]+1)/xe[0],et=we*ge,tt=we*be,We=B/(-ge+be),At=We*-ge;Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(At),q.translateZ(We),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Dt=we+We,It=V+We,Jt=et-At,Oe=tt+(B-At),nt=ye*V/It*Dt,gt=me*V/It*Dt;q.projectionMatrix.makePerspective(Jt,Oe,nt,gt,Dt,It)}function he(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;I.near=R.near=L.near=q.near,I.far=R.far=L.far=q.far,(O!==I.near||C!==I.far)&&(o.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,C=I.far);const Y=q.parent,F=I.cameras;he(I,Y);for(let ce=0;ce<F.length;ce++)he(F[ce],Y);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),q.position.copy(I.position),q.quaternion.copy(I.quaternion),q.scale.copy(I.scale),q.matrix.copy(I.matrix),q.matrixWorld.copy(I.matrixWorld);const B=q.children;for(let ce=0,xe=B.length;ce<xe;ce++)B[ce].updateMatrixWorld(!0);F.length===2?J(I,L,R):I.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(q){m!==null&&(m.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let oe=null;function re(q,Y){if(f=Y.getViewerPose(d||u),_=Y,f!==null){const F=f.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let B=!1;F.length!==I.cameras.length&&(I.cameras.length=0,B=!0);for(let ce=0;ce<F.length;ce++){const xe=F[ce];let we=null;if(g!==null)we=g.getViewport(xe);else{const ye=p.getViewSubImage(m,xe);we=ye.viewport,ce===0&&(e.setRenderTargetTextures(y,ye.colorTexture,m.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(y))}let V=b[ce];V===void 0&&(V=new Xn,V.layers.enable(ce),V.viewport=new Ut,b[ce]=V),V.matrix.fromArray(xe.transform.matrix),V.projectionMatrix.fromArray(xe.projectionMatrix),V.viewport.set(we.x,we.y,we.width,we.height),ce===0&&I.matrix.copy(V.matrix),B===!0&&I.cameras.push(V)}}for(let F=0;F<S.length;F++){const B=T[F],ce=S[F];B!==null&&ce!==void 0&&ce.update(B,Y,d||u)}oe&&oe(q,Y),_=null}const X=new hM;X.setAnimationLoop(re),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}function WF(n,e){function t(x,y){x.fogColor.value.copy(y.color),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,S,T,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?o(x,y):y.isMeshToonMaterial?(o(x,y),p(x,y)):y.isMeshPhongMaterial?(o(x,y),f(x,y)):y.isMeshStandardMaterial?(o(x,y),m(x,y),y.isMeshPhysicalMaterial&&g(x,y,L)):y.isMeshMatcapMaterial?(o(x,y),_(x,y)):y.isMeshDepthMaterial?o(x,y):y.isMeshDistanceMaterial?(o(x,y),M(x,y)):y.isMeshNormalMaterial?o(x,y):y.isLineBasicMaterial?(a(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?c(x,y,S,T):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map),y.alphaMap&&(x.alphaMap.value=y.alphaMap),y.bumpMap&&(x.bumpMap.value=y.bumpMap,x.bumpScale.value=y.bumpScale,y.side===Ni&&(x.bumpScale.value*=-1)),y.displacementMap&&(x.displacementMap.value=y.displacementMap,x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap),y.normalMap&&(x.normalMap.value=y.normalMap,x.normalScale.value.copy(y.normalScale),y.side===Ni&&x.normalScale.value.negate()),y.specularMap&&(x.specularMap.value=y.specularMap),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const S=e.get(y).envMap;if(S&&(x.envMap.value=S,x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const R=n.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*R}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity);let T;y.map?T=y.map:y.specularMap?T=y.specularMap:y.displacementMap?T=y.displacementMap:y.normalMap?T=y.normalMap:y.bumpMap?T=y.bumpMap:y.roughnessMap?T=y.roughnessMap:y.metalnessMap?T=y.metalnessMap:y.alphaMap?T=y.alphaMap:y.emissiveMap?T=y.emissiveMap:y.clearcoatMap?T=y.clearcoatMap:y.clearcoatNormalMap?T=y.clearcoatNormalMap:y.clearcoatRoughnessMap?T=y.clearcoatRoughnessMap:y.iridescenceMap?T=y.iridescenceMap:y.iridescenceThicknessMap?T=y.iridescenceThicknessMap:y.specularIntensityMap?T=y.specularIntensityMap:y.specularColorMap?T=y.specularColorMap:y.transmissionMap?T=y.transmissionMap:y.thicknessMap?T=y.thicknessMap:y.sheenColorMap?T=y.sheenColorMap:y.sheenRoughnessMap&&(T=y.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),x.uvTransform.value.copy(T.matrix));let L;y.aoMap?L=y.aoMap:y.lightMap&&(L=y.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uv2Transform.value.copy(L.matrix))}function a(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function c(x,y,S,T){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*S,x.scale.value=T*.5,y.map&&(x.map.value=y.map),y.alphaMap&&(x.alphaMap.value=y.alphaMap),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);let L;y.map?L=y.map:y.alphaMap&&(L=y.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uvTransform.value.copy(L.matrix))}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map),y.alphaMap&&(x.alphaMap.value=y.alphaMap),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);let S;y.map?S=y.map:y.alphaMap&&(S=y.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),x.uvTransform.value.copy(S.matrix))}function f(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.roughness.value=y.roughness,x.metalness.value=y.metalness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap),y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,S){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap)),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap),y.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),x.clearcoatNormalMap.value=y.clearcoatNormalMap,y.side===Ni&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap)),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap)}function _(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){x.referencePosition.value.copy(y.referencePosition),x.nearDistance.value=y.nearDistance,x.farDistance.value=y.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function $F(){const n=kl("canvas");return n.style.display="block",n}function Sg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:$F(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,o=n.stencil!==void 0?n.stencil:!0,a=n.antialias!==void 0?n.antialias:!1,u=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,d=n.powerPreference!==void 0?n.powerPreference:"default",f=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=n.alpha!==void 0?n.alpha:!1;let m=null,g=null;const _=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$s,this.physicallyCorrectLights=!1,this.toneMapping=xr,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let y=!1,S=0,T=0,L=null,R=-1,b=null;const I=new Ut,O=new Ut;let C=null,z=e.width,te=e.height,ne=1,Te=null,_e=null;const J=new Ut(0,0,z,te),he=new Ut(0,0,z,te);let oe=!1;const re=new xg;let X=!1,q=!1,Y=null;const F=new Qt,B=new xt,ce=new Q,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return L===null?ne:1}let V=t;function ye(A,j){for(let $=0;$<A.length;$++){const Z=A[$],ae=e.getContext(Z,j);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gg}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),V=ye(j,A),V===null)throw ye(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,ge,be,et,tt,We,At,Dt,It,Jt,Oe,nt,gt,rt,k,D,le,ve,Se,Le,qe,de,ke;function Fe(){me=new i5(V),ge=new Zk(V,me,n),me.init(ge),de=new UF(V,me,ge),be=new OF(V,me,ge),et=new o5,tt=new bF,We=new BF(V,me,be,tt,ge,de,et),At=new Jk(x),Dt=new n5(x),It=new yD(V,ge),ke=new Yk(V,me,It,ge),Jt=new r5(V,It,et,ke),Oe=new c5(V,Jt,It,et),Se=new u5(V,ge,We),D=new Qk(tt),nt=new MF(x,At,Dt,me,ge,ke,D),gt=new WF(x,tt),rt=new TF,k=new DF(me,ge),ve=new qk(x,At,be,Oe,p,u),le=new NF(x,Oe,ge),Le=new Kk(V,me,et,ge),qe=new s5(V,me,et,ge),et.programs=nt.programs,x.capabilities=ge,x.extensions=me,x.properties=tt,x.renderLists=rt,x.shadowMap=le,x.state=be,x.info=et}Fe();const ze=new HF(x,V);this.xr=ze,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(z,te,!1))},this.getSize=function(A){return A.set(z,te)},this.setSize=function(A,j,$){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,te=j,e.width=Math.floor(A*ne),e.height=Math.floor(j*ne),$!==!1&&(e.style.width=A+"px",e.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(z*ne,te*ne).floor()},this.setDrawingBufferSize=function(A,j,$){z=A,te=j,ne=$,e.width=Math.floor(A*$),e.height=Math.floor(j*$),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,j,$,Z){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,j,$,Z),be.viewport(I.copy(J).multiplyScalar(ne).floor())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,j,$,Z){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,j,$,Z),be.scissor(O.copy(he).multiplyScalar(ne).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(A){be.setScissorTest(oe=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,j=!0,$=!0){let Z=0;A&&(Z|=16384),j&&(Z|=256),$&&(Z|=1024),V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),rt.dispose(),k.dispose(),tt.dispose(),At.dispose(),Dt.dispose(),Oe.dispose(),ke.dispose(),nt.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",_t),ze.removeEventListener("sessionend",yt),Y&&(Y.dispose(),Y=null),Ht.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=et.autoReset,j=le.enabled,$=le.autoUpdate,Z=le.needsUpdate,ae=le.type;Fe(),et.autoReset=A,le.enabled=j,le.autoUpdate=$,le.needsUpdate=Z,le.type=ae}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const j=A.target;j.removeEventListener("dispose",Ze),Be(j)}function Be(A){st(A),tt.remove(A)}function st(A){const j=tt.get(A).programs;j!==void 0&&(j.forEach(function($){nt.releaseProgram($)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,$,Z,ae,Ue){j===null&&(j=xe);const Qe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ve=Ge(A,j,$,Z,ae);be.setMaterial(Z,Qe);let He=$.index;const ot=$.attributes.position;if(He===null){if(ot===void 0||ot.count===0)return}else if(He.count===0)return;let pt=1;Z.wireframe===!0&&(He=Jt.getWireframeAttribute($),pt=2),ke.setup(ae,Z,Ve,$,He);let mt,Mt=Le;He!==null&&(mt=It.get(He),Mt=qe,Mt.setIndex(mt));const en=He!==null?He.count:ot.count,qn=$.drawRange.start*pt,Bn=$.drawRange.count*pt,rn=Ue!==null?Ue.start*pt:0,it=Ue!==null?Ue.count*pt:1/0,Yn=Math.max(qn,rn),ct=Math.min(en,qn+Bn,rn+it)-1,Pt=Math.max(0,ct-Yn+1);if(Pt!==0){if(ae.isMesh)Z.wireframe===!0?(be.setLineWidth(Z.wireframeLinewidth*we()),Mt.setMode(1)):Mt.setMode(4);else if(ae.isLine){let pn=Z.linewidth;pn===void 0&&(pn=1),be.setLineWidth(pn*we()),ae.isLineSegments?Mt.setMode(1):ae.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else ae.isPoints?Mt.setMode(0):ae.isSprite&&Mt.setMode(4);if(ae.isInstancedMesh)Mt.renderInstances(Yn,Pt,ae.count);else if($.isInstancedBufferGeometry){const pn=Math.min($.instanceCount,$._maxInstanceCount);Mt.renderInstances(Yn,Pt,pn)}else Mt.render(Yn,Pt)}},this.compile=function(A,j){g=k.get(A),g.init(),M.push(g),A.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(x.physicallyCorrectLights),A.traverse(function($){const Z=$.material;if(Z)if(Array.isArray(Z))for(let ae=0;ae<Z.length;ae++){const Ue=Z[ae];fe(Ue,A,$)}else fe(Z,A,$)}),M.pop(),g=null};let De=null;function ut(A){De&&De(A)}function _t(){Ht.stop()}function yt(){Ht.start()}const Ht=new hM;Ht.setAnimationLoop(ut),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(A){De=A,ze.setAnimationLoop(A),A===null?Ht.stop():Ht.start()},ze.addEventListener("sessionstart",_t),ze.addEventListener("sessionend",yt),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(j),j=ze.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,j,L),g=k.get(A,M.length),g.init(),M.push(g),F.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),re.setFromProjectionMatrix(F),q=this.localClippingEnabled,X=D.init(this.clippingPlanes,q,j),m=rt.get(A,_.length),m.init(),_.push(m),hn(A,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Te,_e),X===!0&&D.beginShadows();const $=g.state.shadowsArray;if(le.render($,A,j),X===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(m,A),g.setupLights(x.physicallyCorrectLights),j.isArrayCamera){const Z=j.cameras;for(let ae=0,Ue=Z.length;ae<Ue;ae++){const Qe=Z[ae];cs(m,A,Qe,Qe.viewport)}}else cs(m,A,j);L!==null&&(We.updateMultisampleRenderTarget(L),We.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,j),ke.resetDefaultState(),R=-1,b=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function hn(A,j,$,Z){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){Z&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Qe=Oe.update(A),Ve=A.material;Ve.visible&&m.push(A,Qe,Ve,$,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==et.render.frame&&(A.skeleton.update(),A.skeleton.frame=et.render.frame),!A.frustumCulled||re.intersectsObject(A))){Z&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Qe=Oe.update(A),Ve=A.material;if(Array.isArray(Ve)){const He=Qe.groups;for(let ot=0,pt=He.length;ot<pt;ot++){const mt=He[ot],Mt=Ve[mt.materialIndex];Mt&&Mt.visible&&m.push(A,Qe,Mt,$,ce.z,mt)}}else Ve.visible&&m.push(A,Qe,Ve,$,ce.z,null)}}const Ue=A.children;for(let Qe=0,Ve=Ue.length;Qe<Ve;Qe++)hn(Ue[Qe],j,$,Z)}function cs(A,j,$,Z){const ae=A.opaque,Ue=A.transmissive,Qe=A.transparent;g.setupLightsView($),Ue.length>0&&Js(ae,j,$),Z&&be.viewport(I.copy(Z)),ae.length>0&&G(ae,j,$),Ue.length>0&&G(Ue,j,$),Qe.length>0&&G(Qe,j,$),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Js(A,j,$){const Z=ge.isWebGL2;Y===null&&(Y=new Xs(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Il:Ws,minFilter:kd,samples:Z&&a===!0?4:0})),x.getDrawingBufferSize(B),Z?Y.setSize(B.x,B.y):Y.setSize(hm(B.x),hm(B.y));const ae=x.getRenderTarget();x.setRenderTarget(Y),x.clear();const Ue=x.toneMapping;x.toneMapping=xr,G(A,j,$),x.toneMapping=Ue,We.updateMultisampleRenderTarget(Y),We.updateRenderTargetMipmap(Y),x.setRenderTarget(ae)}function G(A,j,$){const Z=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Ue=A.length;ae<Ue;ae++){const Qe=A[ae],Ve=Qe.object,He=Qe.geometry,ot=Z===null?Qe.material:Z,pt=Qe.group;Ve.layers.test($.layers)&&ee(Ve,j,$,He,ot,pt)}}function ee(A,j,$,Z,ae,Ue){A.onBeforeRender(x,j,$,Z,ae,Ue),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(x,j,$,Z,A,Ue),ae.transparent===!0&&ae.side===ua?(ae.side=Ni,ae.needsUpdate=!0,x.renderBufferDirect($,j,Z,ae,A,Ue),ae.side=Dl,ae.needsUpdate=!0,x.renderBufferDirect($,j,Z,ae,A,Ue),ae.side=ua):x.renderBufferDirect($,j,Z,ae,A,Ue),A.onAfterRender(x,j,$,Z,ae,Ue)}function fe(A,j,$){j.isScene!==!0&&(j=xe);const Z=tt.get(A),ae=g.state.lights,Ue=g.state.shadowsArray,Qe=ae.state.version,Ve=nt.getParameters(A,ae.state,Ue,j,$),He=nt.getProgramCacheKey(Ve);let ot=Z.programs;Z.environment=A.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(A.isMeshStandardMaterial?Dt:At).get(A.envMap||Z.environment),ot===void 0&&(A.addEventListener("dispose",Ze),ot=new Map,Z.programs=ot);let pt=ot.get(He);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===Qe)return Me(A,Ve),pt}else Ve.uniforms=nt.getUniforms(A),A.onBuild($,Ve,x),A.onBeforeCompile(Ve,x),pt=nt.acquireProgram(Ve,He),ot.set(He,pt),Z.uniforms=Ve.uniforms;const mt=Z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(mt.clippingPlanes=D.uniform),Me(A,Ve),Z.needsLights=ft(A),Z.lightsStateVersion=Qe,Z.needsLights&&(mt.ambientLightColor.value=ae.state.ambient,mt.lightProbe.value=ae.state.probe,mt.directionalLights.value=ae.state.directional,mt.directionalLightShadows.value=ae.state.directionalShadow,mt.spotLights.value=ae.state.spot,mt.spotLightShadows.value=ae.state.spotShadow,mt.rectAreaLights.value=ae.state.rectArea,mt.ltc_1.value=ae.state.rectAreaLTC1,mt.ltc_2.value=ae.state.rectAreaLTC2,mt.pointLights.value=ae.state.point,mt.pointLightShadows.value=ae.state.pointShadow,mt.hemisphereLights.value=ae.state.hemi,mt.directionalShadowMap.value=ae.state.directionalShadowMap,mt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,mt.spotShadowMap.value=ae.state.spotShadowMap,mt.spotShadowMatrix.value=ae.state.spotShadowMatrix,mt.pointShadowMap.value=ae.state.pointShadowMap,mt.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Mt=pt.getUniforms(),en=Zc.seqWithValue(Mt.seq,mt);return Z.currentProgram=pt,Z.uniformsList=en,pt}function Me(A,j){const $=tt.get(A);$.outputEncoding=j.outputEncoding,$.instancing=j.instancing,$.skinning=j.skinning,$.morphTargets=j.morphTargets,$.morphNormals=j.morphNormals,$.morphColors=j.morphColors,$.morphTargetsCount=j.morphTargetsCount,$.numClippingPlanes=j.numClippingPlanes,$.numIntersection=j.numClipIntersection,$.vertexAlphas=j.vertexAlphas,$.vertexTangents=j.vertexTangents,$.toneMapping=j.toneMapping}function Ge(A,j,$,Z,ae){j.isScene!==!0&&(j=xe),We.resetTextureUnits();const Ue=j.fog,Qe=Z.isMeshStandardMaterial?j.environment:null,Ve=L===null?x.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:$s,He=(Z.isMeshStandardMaterial?Dt:At).get(Z.envMap||Qe),ot=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pt=!!Z.normalMap&&!!$.attributes.tangent,mt=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,en=!!$.morphAttributes.color,qn=Z.toneMapped?x.toneMapping:xr,Bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rn=Bn!==void 0?Bn.length:0,it=tt.get(Z),Yn=g.state.lights;if(X===!0&&(q===!0||A!==b)){const Yt=A===b&&Z.id===R;D.setState(Z,A,Yt)}let ct=!1;Z.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Yn.state.version||it.outputEncoding!==Ve||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||it.envMap!==He||Z.fog===!0&&it.fog!==Ue||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==D.numPlanes||it.numIntersection!==D.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==pt||it.morphTargets!==mt||it.morphNormals!==Mt||it.morphColors!==en||it.toneMapping!==qn||ge.isWebGL2===!0&&it.morphTargetsCount!==rn)&&(ct=!0):(ct=!0,it.__version=Z.version);let Pt=it.currentProgram;ct===!0&&(Pt=fe(Z,j,ae));let pn=!1,Kn=!1,kt=!1;const Ft=Pt.getUniforms(),ln=it.uniforms;if(be.useProgram(Pt.program)&&(pn=!0,Kn=!0,kt=!0),Z.id!==R&&(R=Z.id,Kn=!0),pn||b!==A){if(Ft.setValue(V,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Kn=!0,kt=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Yt=Ft.map.cameraPosition;Yt!==void 0&&Yt.setValue(V,ce.setFromMatrixPosition(A.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||ae.isSkinnedMesh)&&Ft.setValue(V,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){Ft.setOptional(V,ae,"bindMatrix"),Ft.setOptional(V,ae,"bindMatrixInverse");const Yt=ae.skeleton;Yt&&(ge.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ft.setValue(V,"boneTexture",Yt.boneTexture,We),Ft.setValue(V,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ds=$.morphAttributes;return(ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0&&ge.isWebGL2===!0)&&Se.update(ae,$,Z,Pt),(Kn||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,Ft.setValue(V,"receiveShadow",ae.receiveShadow)),Kn&&(Ft.setValue(V,"toneMappingExposure",x.toneMappingExposure),it.needsLights&&Ye(ln,kt),Ue&&Z.fog===!0&&gt.refreshFogUniforms(ln,Ue),gt.refreshMaterialUniforms(ln,Z,ne,te,Y),Zc.upload(V,it.uniformsList,ln,We)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Zc.upload(V,it.uniformsList,ln,We),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ft.setValue(V,"center",ae.center),Ft.setValue(V,"modelViewMatrix",ae.modelViewMatrix),Ft.setValue(V,"normalMatrix",ae.normalMatrix),Ft.setValue(V,"modelMatrix",ae.matrixWorld),Pt}function Ye(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ft(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,j,$){tt.get(A.texture).__webglTexture=j,tt.get(A.depthTexture).__webglTexture=$;const Z=tt.get(A);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const $=tt.get(A);$.__webglFramebuffer=j,$.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,$=0){L=A,S=j,T=$;let Z=!0;if(A){const He=tt.get(A);He.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),Z=!1):He.__webglFramebuffer===void 0?We.setupRenderTarget(A):He.__hasExternalTextures&&We.rebindTextures(A,tt.get(A.texture).__webglTexture,tt.get(A.depthTexture).__webglTexture)}let ae=null,Ue=!1,Qe=!1;if(A){const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture)&&(Qe=!0);const ot=tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=ot[j],Ue=!0):ge.isWebGL2&&A.samples>0&&We.useMultisampledRTT(A)===!1?ae=tt.get(A).__webglMultisampledFramebuffer:ae=ot,I.copy(A.viewport),O.copy(A.scissor),C=A.scissorTest}else I.copy(J).multiplyScalar(ne).floor(),O.copy(he).multiplyScalar(ne).floor(),C=oe;if(be.bindFramebuffer(36160,ae)&&ge.drawBuffers&&Z&&be.drawBuffers(A,ae),be.viewport(I),be.scissor(O),be.setScissorTest(C),Ue){const He=tt.get(A.texture);V.framebufferTexture2D(36160,36064,34069+j,He.__webglTexture,$)}else if(Qe){const He=tt.get(A.texture),ot=j||0;V.framebufferTextureLayer(36160,36064,He.__webglTexture,$||0,ot)}R=-1},this.readRenderTargetPixels=function(A,j,$,Z,ae,Ue,Qe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ve=Ve[Qe]),Ve){be.bindFramebuffer(36160,Ve);try{const He=A.texture,ot=He.format,pt=He.type;if(ot!==qi&&de.convert(ot)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mt=pt===Il&&(me.has("EXT_color_buffer_half_float")||ge.isWebGL2&&me.has("EXT_color_buffer_float"));if(pt!==Ws&&de.convert(pt)!==V.getParameter(35738)&&!(pt===Bs&&(ge.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Z&&$>=0&&$<=A.height-ae&&V.readPixels(j,$,Z,ae,de.convert(ot),de.convert(pt),Ue)}finally{const He=L!==null?tt.get(L).__webglFramebuffer:null;be.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(A,j,$=0){const Z=Math.pow(2,-$),ae=Math.floor(j.image.width*Z),Ue=Math.floor(j.image.height*Z);We.setTexture2D(j,0),V.copyTexSubImage2D(3553,$,0,0,A.x,A.y,ae,Ue),be.unbindTexture()},this.copyTextureToTexture=function(A,j,$,Z=0){const ae=j.image.width,Ue=j.image.height,Qe=de.convert($.format),Ve=de.convert($.type);We.setTexture2D($,0),V.pixelStorei(37440,$.flipY),V.pixelStorei(37441,$.premultiplyAlpha),V.pixelStorei(3317,$.unpackAlignment),j.isDataTexture?V.texSubImage2D(3553,Z,A.x,A.y,ae,Ue,Qe,Ve,j.image.data):j.isCompressedTexture?V.compressedTexSubImage2D(3553,Z,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,Qe,j.mipmaps[0].data):V.texSubImage2D(3553,Z,A.x,A.y,Qe,Ve,j.image),Z===0&&$.generateMipmaps&&V.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(A,j,$,Z,ae=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=A.max.x-A.min.x+1,Qe=A.max.y-A.min.y+1,Ve=A.max.z-A.min.z+1,He=de.convert(Z.format),ot=de.convert(Z.type);let pt;if(Z.isData3DTexture)We.setTexture3D(Z,0),pt=32879;else if(Z.isDataArrayTexture)We.setTexture2DArray(Z,0),pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,Z.flipY),V.pixelStorei(37441,Z.premultiplyAlpha),V.pixelStorei(3317,Z.unpackAlignment);const mt=V.getParameter(3314),Mt=V.getParameter(32878),en=V.getParameter(3316),qn=V.getParameter(3315),Bn=V.getParameter(32877),rn=$.isCompressedTexture?$.mipmaps[0]:$.image;V.pixelStorei(3314,rn.width),V.pixelStorei(32878,rn.height),V.pixelStorei(3316,A.min.x),V.pixelStorei(3315,A.min.y),V.pixelStorei(32877,A.min.z),$.isDataTexture||$.isData3DTexture?V.texSubImage3D(pt,ae,j.x,j.y,j.z,Ue,Qe,Ve,He,ot,rn.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(pt,ae,j.x,j.y,j.z,Ue,Qe,Ve,He,rn.data)):V.texSubImage3D(pt,ae,j.x,j.y,j.z,Ue,Qe,Ve,He,ot,rn),V.pixelStorei(3314,mt),V.pixelStorei(32878,Mt),V.pixelStorei(3316,en),V.pixelStorei(3315,qn),V.pixelStorei(32877,Bn),ae===0&&Z.generateMipmaps&&V.generateMipmap(pt),be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?We.setTextureCube(A,0):A.isData3DTexture?We.setTexture3D(A,0):A.isDataArrayTexture?We.setTexture2DArray(A,0):We.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){S=0,T=0,L=null,be.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class XF extends Sg{}XF.prototype.isWebGL1Renderer=!0;class _M extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class qF{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dm,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new Q;class pd{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yl extends us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Uo;const ol=new Q,Vo=new Q,jo=new Q,Go=new xt,al=new xt,wM=new Qt,Cc=new Q,ll=new Q,Ac=new Q,c1=new xt,Mp=new xt,d1=new xt;class Pc extends In{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Uo===void 0){Uo=new Bi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qF(t,5);Uo.setIndex([0,1,2,0,2,3]),Uo.setAttribute("position",new pd(i,3,0,!1)),Uo.setAttribute("uv",new pd(i,2,3,!1))}this.geometry=Uo,this.material=e!==void 0?e:new yl,this.center=new xt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vo.setFromMatrixScale(this.matrixWorld),wM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vo.multiplyScalar(-jo.z);const i=this.material.rotation;let o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));const u=this.center;Lc(Cc.set(-.5,-.5,0),jo,u,Vo,o,a),Lc(ll.set(.5,-.5,0),jo,u,Vo,o,a),Lc(Ac.set(.5,.5,0),jo,u,Vo,o,a),c1.set(0,0),Mp.set(1,0),d1.set(1,1);let c=e.ray.intersectTriangle(Cc,ll,Ac,!1,ol);if(c===null&&(Lc(ll.set(-.5,.5,0),jo,u,Vo,o,a),Mp.set(0,1),c=e.ray.intersectTriangle(Cc,Ac,ll,!1,ol),c===null))return;const d=e.ray.origin.distanceTo(ol);d<e.near||d>e.far||t.push({distance:d,point:ol.clone(),uv:Xi.getUV(ol,Cc,ll,Ac,c1,Mp,d1,new xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lc(n,e,t,i,o,a){Go.subVectors(n,t).addScalar(.5).multiply(i),o!==void 0?(al.x=a*Go.x-o*Go.y,al.y=o*Go.x+a*Go.y):al.copy(Go),n.copy(e),n.x+=al.x,n.y+=al.y,n.applyMatrix4(wM)}class SM extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f1=new Qt,mm=new oM,Rc=new Fd,Dc=new Q;class YF extends In{constructor(e=new Bi,t=new SM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(o),Rc.radius+=a,e.ray.intersectsSphere(Rc)===!1)return;f1.copy(o).invert(),mm.copy(e.ray).applyMatrix4(f1);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=i.index,m=i.attributes.position;if(f!==null){const g=Math.max(0,u.start),_=Math.min(f.count,u.start+u.count);for(let M=g,x=_;M<x;M++){const y=f.getX(M);Dc.fromBufferAttribute(m,y),h1(Dc,y,d,o,e,t,this)}}else{const g=Math.max(0,u.start),_=Math.min(m.count,u.start+u.count);for(let M=g,x=_;M<x;M++)Dc.fromBufferAttribute(m,M),h1(Dc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function h1(n,e,t,i,o,a,u){const c=mm.distanceSqToPoint(n);if(c<t){const d=new Q;mm.closestPointToPoint(n,d),d.applyMatrix4(i);const f=o.ray.origin.distanceTo(d);if(f<o.near||f>o.far)return;a.push({distance:f,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:u})}}class p1 extends ui{constructor(e,t,i,o,a,u,c,d,f){super(e,t,i,o,a,u,c,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class md extends Bi{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(u+c,Math.PI);let f=0;const p=[],m=new Q,g=new Q,_=[],M=[],x=[],y=[];for(let S=0;S<=i;S++){const T=[],L=S/i;let R=0;S==0&&u==0?R=.5/t:S==i&&d==Math.PI&&(R=-.5/t);for(let b=0;b<=t;b++){const I=b/t;m.x=-e*Math.cos(o+I*a)*Math.sin(u+L*c),m.y=e*Math.cos(u+L*c),m.z=e*Math.sin(o+I*a)*Math.sin(u+L*c),M.push(m.x,m.y,m.z),g.copy(m).normalize(),x.push(g.x,g.y,g.z),y.push(I+R,1-L),T.push(f++)}p.push(T)}for(let S=0;S<i;S++)for(let T=0;T<t;T++){const L=p[S][T+1],R=p[S][T],b=p[S+1][T],I=p[S+1][T+1];(S!==0||u>0)&&_.push(L,R,I),(S!==i-1||d<Math.PI)&&_.push(R,b,I)}this.setIndex(_),this.setAttribute("position",new Ji(M,3)),this.setAttribute("normal",new Ji(x,3)),this.setAttribute("uv",new Ji(y,2))}static fromJSON(e){return new md(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class KF extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yg,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZF extends us{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yg,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const m1={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class QF{constructor(e,t,i){const o=this;let a=!1,u=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,a===!1&&o.onStart!==void 0&&o.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const _=f[m],M=f[m+1];if(_.global&&(_.lastIndex=0),_.test(p))return M}return null}}}const JF=new QF;class MM{constructor(e){this.manager=e!==void 0?e:JF,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class e4 extends MM{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=m1.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=kl("img");function d(){p(),m1.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(m){p(),o&&o(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class g1 extends MM{constructor(e){super(e)}load(e,t,i,o){const a=new ui,u=new e4(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class Mg extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const v1=new Qt,y1=new Q,x1=new Q;class bM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xg,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;y1.setFromMatrixPosition(e.matrixWorld),t.position.copy(y1),x1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(x1),t.updateMatrixWorld(),v1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(v1),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _1=new Qt,ul=new Q,bp=new Q;class t4 extends bM{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ul.setFromMatrixPosition(e.matrixWorld),i.position.copy(ul),bp.copy(i.position),bp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bp),i.updateMatrixWorld(),o.makeTranslation(-ul.x,-ul.y,-ul.z),_1.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_1)}}class Ic extends Mg{constructor(e,t,i=0,o=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new t4}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class n4 extends bM{constructor(){super(new pM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i4 extends Mg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DefaultUp),this.updateMatrix(),this.target=new In,this.shadow=new n4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r4 extends Mg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gg);const s4=pe.div`
  position: ${n=>n.$fullscreen?"fixed":"absolute"};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${n=>n.$fullscreen?"1":"0"};
  background: transparent;
  pointer-events: auto;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`,o4=pe.div`
  position: relative;
  width: 100%;
  height: 100%;
  class-name: globe-container;
  data-globe: true;
`,a4=(n,e,t)=>{const i=(90-n)*(Math.PI/180),o=(e+180)*(Math.PI/180),a=-t*Math.sin(i)*Math.cos(o),u=t*Math.cos(i),c=t*Math.sin(i)*Math.sin(o);return new Q(a,u,c)},EM=({fullscreen:n=!1,year:e=new Date().getFullYear()})=>{const t=U.useRef(),i=U.useMemo(()=>[{name:"Colombia",lat:4.5709,lng:-74.2973,startYear:1993,endYear:2e3,color:16738740},{name:"Phoenix, AZ",lat:33.4484,lng:-112.074,startYear:2001,endYear:2012,color:8900331},{name:"South Bend, IN",lat:41.6764,lng:-86.252,startYear:2013,endYear:2016,color:9662683},{name:"Austin, TX",lat:30.2672,lng:-97.7431,startYear:2017,endYear:2019,color:3329330},{name:"Phoenix, AZ",lat:33.4484,lng:-112.074,startYear:2020,endYear:2020,color:8900331},{name:"Salt Lake City, UT",lat:40.7608,lng:-111.891,startYear:2021,endYear:2021,color:16753920},{name:"Phoenix, AZ",lat:33.4484,lng:-112.074,startYear:2022,endYear:2026,color:8900331}],[]);return U.useEffect(()=>{console.log(`Globe rendering for year: ${e}`);const o=new _M,a=new Xn(45,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5;const u=new Sg({antialias:!0,alpha:!0}),c=()=>{if(n)u.setSize(window.innerWidth,window.innerHeight),a.aspect=window.innerWidth/window.innerHeight;else{const Oe=t.current.getBoundingClientRect();u.setSize(Oe.width,Oe.height),a.aspect=Oe.width/Oe.height}a.updateProjectionMatrix()};u.setClearColor(0,0),t.current.appendChild(u.domElement),c();const f=new g1().load("/modernearth.jpg",Oe=>{Oe.encoding=Xt,m.needsUpdate=!0}),p=new md(.8,64,64),m=new KF({map:f,roughness:.5,metalness:.1,emissive:new Et(27028),emissiveIntensity:.2}),g=[],_=.82;(e==="all"?i.reduce((Oe,nt)=>(Oe.find(rt=>rt.name===nt.name&&rt.lat===nt.lat&&rt.lng===nt.lng)||Oe.push(nt),Oe),[]):i).forEach(Oe=>{if(e==="all"||e>=Oe.startYear&&e<=Oe.endYear){const gt=new md(.02,16,16),rt=new ZF({color:Oe.color,emissive:Oe.color,emissiveIntensity:.5,specular:16777215,shininess:100}),k=new Yi(gt,rt),D=a4(Oe.lat,Oe.lng,_);k.position.copy(D),k.userData={baseScale:1,originalPosition:D.clone()};const le=new Ic(Oe.color,.8,.3);le.position.copy(D);const ve=document.createElement("canvas"),Se=ve.getContext("2d");ve.width=256,ve.height=64,Se.fillStyle="rgba(0, 0, 0, 0)",Se.fillRect(0,0,ve.width,ve.height),Se.font="Bold 24px Arial",Se.textAlign="center",Se.textBaseline="middle",Se.shadowColor="rgba(255, 255, 255, 0.8)",Se.shadowBlur=7,Se.fillStyle="white",Se.fillText(Oe.name,ve.width/2,ve.height/2);const Le=new p1(ve),qe=new yl({map:Le,transparent:!0}),de=new Pc(qe);de.position.copy(D.clone().multiplyScalar(1.1)),de.scale.set(.3,.075,1),g.push({marker:k,light:le,label:de,labelTexture:Le,labelMaterial:qe,markerMaterial:rt,markerGeometry:gt}),o.add(k),o.add(le),o.add(de)}});const x=document.createElement("canvas"),y=x.getContext("2d");x.width=512,x.height=256;const S=y.createRadialGradient(x.width/2,x.height/2,10,x.width/2,x.height/2,x.width/2);S.addColorStop(0,"rgba(0, 0, 0, 0.7)"),S.addColorStop(.7,"rgba(0, 0, 0, 0.4)"),S.addColorStop(1,"rgba(0, 0, 0, 0)"),y.fillStyle=S,y.fillRect(0,0,x.width,x.height),y.shadowColor="rgba(255, 255, 255, 0.8)",y.shadowBlur=25,y.shadowOffsetX=0,y.shadowOffsetY=0,y.font="Bold 100px Arial",y.textAlign="center",y.textBaseline="middle";const T=y.createLinearGradient(x.width*.3,x.height*.5,x.width*.7,x.height*.5);T.addColorStop(0,"rgba(255, 105, 180, 1.0)"),T.addColorStop(.5,"rgba(135, 206, 235, 1.0)"),T.addColorStop(1,"rgba(255, 105, 180, 1.0)"),y.fillStyle=T,y.fillText(e.toString(),x.width/2,x.height/2),y.strokeStyle="rgba(0, 0, 0, 0.5)",y.lineWidth=3,y.strokeText(e.toString(),x.width/2,x.height/2),y.shadowColor="rgba(135, 206, 235, 0.7)",y.shadowBlur=15,y.fillStyle="rgba(255, 255, 255, 0.1)",y.fillText(e.toString(),x.width/2,x.height/2),y.shadowColor="rgba(255, 105, 180, 0.7)",y.shadowBlur=10,y.fillText(e.toString(),x.width/2,x.height/2);const L=new p1(x),R=new yl({map:L,transparent:!0,opacity:0,depthTest:!1,blending:bl}),b=new Pc(R);b.position.set(0,-1.4,0),b.scale.set(1.5,.75,1),o.add(b);const I=1500,O=Date.now(),C=()=>{const Oe=Date.now()-O,nt=Math.min(Oe/I,1),gt=1-Math.pow(1-nt,3);R.opacity=gt*1,nt<1&&requestAnimationFrame(C)};C();const z=new Yi(p,m);z.rotation.y=Math.PI,o.add(z);const te=new r4(16777215,.5);o.add(te);const ne=new i4(16777215,1);ne.position.set(5,3,5),o.add(ne);const Te=new Ic(30654,1,10);Te.position.set(-2,1,2),o.add(Te);const _e=new Ic(65535,1,10);_e.position.set(2,-1,2),o.add(_e);function J(Oe,nt,gt){return new Q(Oe*Math.sin(nt)*Math.cos(gt),Oe*Math.sin(nt)*Math.sin(gt),Oe*Math.cos(nt))}function he(Oe,nt,gt,rt){const k=new Q().lerpVectors(Oe,nt,gt),D=k.clone().normalize(),le=Math.sin(gt*Math.PI)*(1-Math.abs(gt-.5));return k.add(D.multiplyScalar(rt*le*2))}const oe=[],re=40,X=.82,q=.8,Y=35,F=new g1().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAMFJREFUGBl1QdFRQjEUPCc5PmhBWgA7ECsQK4AOhA6EDqQEqECtQK1ArUCswOH2zRwZhhs+7uXt7d6FTlgRYVXUIK7cDgHdUFXRu0RAeejrb1ZQYyKibqrqXVFBRNx1EUGNb/Rm8rW2PjZ9Q/WnrKpkDIGIUt9FxFPVd5A5KaW6uwewPQG6qWqEQQI2wdOY0VNVn6eUvmb3BWyTWQJ2BFBzNxGZqOqtuwfmXFU9xhgfZgGM44hsL2Y27v4MICKyA/bW2i/HE8N9CKfmuwAAAABJRU5ErkJggg=="),B=new yl({map:F,transparent:!0,blending:bl,depthWrite:!1}),ce=new yl({map:F,transparent:!0,blending:bl,depthWrite:!1});function xe(){const Oe=Math.random()*Math.PI*2,nt=Math.random()*Math.PI,gt=Math.random()*Math.PI*2,rt=Math.random()*Math.PI,k=J(X,nt,Oe),D=J(X,rt,gt),le=new Pc(B.clone());le.scale.set(.06,.06,1);const ve=.15+Math.random()*.05,Se=.3,Le=.9;le.material.color.setHSL(ve,Se,Le);const qe=new Ic(16777164,.6,.4),de=k.distanceTo(D),ke=q*(de/(2*X)),Fe=[];for(let ze=0;ze<Y;ze++){const H=new Pc(ce.clone());H.material.color.setHSL(ve,Se,Le),H.scale.set(.03,.03,1),o.add(H),Fe.push(H)}le.userData={startPos:k.clone(),endPos:D.clone(),progress:0,speed:.001+Math.random()*.002,baseScale:.06,pointLight:qe,arcHeight:ke,trail:Fe,trailPositions:[]},le.position.copy(k),qe.position.copy(k),o.add(le),o.add(qe),oe.push(le)}for(let Oe=0;Oe<re/2;Oe++)xe();let we=0,V=0,ye=0,me=0,ge=!1,be=0,et=0,tt=!0;const We=Oe=>{ge=!0,be=Oe.clientX,et=Oe.clientY,tt=!1,ye=0,me=0},At=Oe=>{if(!ge)return;const nt=Oe.clientX-be,gt=Oe.clientY-et;V+=nt*.005,we-=gt*.005,we=Math.max(-Math.PI/3,Math.min(Math.PI/3,we)),ye=nt*.002,me=-gt*.002,be=Oe.clientX,et=Oe.clientY},Dt=()=>{ge=!1,Math.abs(ye)>.001||Math.abs(me)>.001?tt=!1:setTimeout(()=>{tt=!0},1e3)},It=()=>{ge&&(ge=!1,Math.abs(ye)>.001||Math.abs(me)>.001?tt=!1:setTimeout(()=>{tt=!0},1e3))},Jt=()=>{requestAnimationFrame(Jt);const Oe=Date.now()*.001;ge||(V+=ye,we+=me,ye*=.95,me*=.95,Math.abs(ye)<1e-4&&(ye=0),Math.abs(me)<1e-4&&(me=0),ye===0&&me===0&&tt&&(V+=.003)),we=Math.max(-Math.PI/3,Math.min(Math.PI/3,we)),z.rotation.y+=(V-z.rotation.y)*.05,z.rotation.x+=(we-z.rotation.x)*.05,Te.intensity=1+Math.sin(Oe*1.2)*.2,_e.intensity=1+Math.cos(Oe*1.5)*.2;for(let rt=oe.length-1;rt>=0;rt--){const k=oe[rt],{startPos:D,endPos:le,speed:ve,baseScale:Se,pointLight:Le,arcHeight:qe,trail:de,trailPositions:ke}=k.userData;if(k.userData.progress+=ve,k.userData.progress>=1){o.remove(k),o.remove(Le),de.forEach(Pe=>o.remove(Pe)),oe.splice(rt,1),oe.length<re&&xe();continue}const Fe=k.userData.progress,ze=he(D,le,Fe,qe);k.position.copy(ze),ke.unshift(ze.clone()),ke.length>Y&&ke.pop(),de.forEach((Pe,Ze)=>{if(Ze<ke.length){Pe.position.copy(ke[Ze]);const Be=Math.pow(1-Ze/Y,1.5);Pe.material.opacity=Be*.7,Pe.scale.setScalar(.03*Be)}});const H=Se*(1+Math.sin(Oe*8+rt)*.3);if(k.scale.set(H,H,1),Le.position.copy(ze),Le.intensity=.6+Math.sin(Oe*8+rt)*.3,Fe>.9){const Pe=(1-Fe)*10;k.material.opacity=Pe,Le.intensity*=Pe,de.forEach(Ze=>{Ze.material.opacity*=Pe})}const Ie=new qs(z.rotation.x,z.rotation.y,0);k.position.applyEuler(Ie),Le.position.copy(k.position),de.forEach(Pe=>{Pe.position.applyEuler(Ie)})}g.forEach(({marker:rt,light:k,label:D})=>{const le=new qs(z.rotation.x,z.rotation.y,0);rt.position.copy(rt.userData.originalPosition),k.position.copy(rt.userData.originalPosition),D.position.copy(rt.userData.originalPosition.clone().multiplyScalar(1.1)),rt.position.applyEuler(le),k.position.copy(rt.position),D.position.copy(rt.position.clone().multiplyScalar(1.1));const ve=1+Math.sin(Oe*3)*.2;rt.scale.set(ve,ve,ve),k.intensity=.6+Math.sin(Oe*3)*.4}),oe.length<re&&Math.random()<.03&&xe();const nt=.001,gt=Math.max(0,1-(Math.abs(V)+Math.abs(we)));z.rotation.y+=nt*gt,z.rotation.x+=Math.sin(Oe*.5)*5e-4,u.render(o,a)};return Jt(),n?(t.current.addEventListener("mousedown",We),window.addEventListener("mousemove",At),window.addEventListener("mouseup",Dt),window.addEventListener("mouseleave",It),window.addEventListener("resize",c)):(t.current.addEventListener("mousedown",We),t.current.addEventListener("mousemove",At),t.current.addEventListener("mouseup",Dt),t.current.addEventListener("mouseleave",It)),()=>{var Oe,nt,gt,rt,k,D;n?((Oe=t.current)==null||Oe.removeEventListener("mousedown",We),window.removeEventListener("mousemove",At),window.removeEventListener("mouseup",Dt),window.removeEventListener("mouseleave",It),window.removeEventListener("resize",c)):((nt=t.current)==null||nt.removeEventListener("mousedown",We),(gt=t.current)==null||gt.removeEventListener("mousemove",At),(rt=t.current)==null||rt.removeEventListener("mouseup",Dt),(k=t.current)==null||k.removeEventListener("mouseleave",It)),(D=t.current)==null||D.removeChild(u.domElement),p.dispose(),m.dispose(),B.dispose(),ce.dispose(),F.dispose(),L.dispose(),R.dispose(),g.forEach(({marker:le,light:ve,label:Se,labelTexture:Le,labelMaterial:qe,markerMaterial:de,markerGeometry:ke})=>{o.remove(le),o.remove(ve),o.remove(Se),Le.dispose(),qe.dispose(),de.dispose(),ke.dispose()}),oe.forEach(le=>{le.material.dispose(),o.remove(le),o.remove(le.userData.pointLight),le.userData.trail.forEach(ve=>{ve.material.dispose(),o.remove(ve)})})}},[n,e]),P.jsx(o4,{className:"globe-container","data-globe":"true",children:P.jsx(s4,{ref:t,$fullscreen:n})})},l4=pe.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
`,Qs=()=>{const n=U.useRef();return U.useEffect(()=>{const e=new _M,t=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;const i=new Sg({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),n.current.appendChild(i.domElement);const o=new Bi,a=new SM({size:.015,vertexColors:!0,transparent:!0,opacity:.8}),u=2e3,c=new Float32Array(u*3),d=new Float32Array(u*3),f=new Et;for(let _=0;_<u;_++){const M=3+Math.random()*7,x=Math.random()*Math.PI*2,y=Math.acos(Math.random()*2-1);c[_*3]=M*Math.sin(y)*Math.cos(x),c[_*3+1]=M*Math.sin(y)*Math.sin(x),c[_*3+2]=M*Math.cos(y);const S=0,T=0,L=.1+Math.random()*.1;f.setHSL(S,T,L),d[_*3]=f.r,d[_*3+1]=f.g,d[_*3+2]=f.b}o.setAttribute("position",new ai(c,3)),o.setAttribute("color",new ai(d,3));const p=new YF(o,a);e.add(p);const m=()=>{requestAnimationFrame(m),p.rotation.y+=2e-4,p.rotation.x+=1e-4;const _=Date.now()*.001,M=o.attributes.color,x=o.attributes.position;for(let y=0;y<u;y++){const S=y*3,T=x.array[S],L=x.array[S+1],R=x.array[S+2],b=Math.sin(_+T*5+L*5+R*5)*.05+.95;M.array[S]*=b,M.array[S+1]*=b,M.array[S+2]*=b}M.needsUpdate=!0,i.render(e,t)};m();const g=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",g),()=>{var _;window.removeEventListener("resize",g),(_=n.current)==null||_.removeChild(i.domElement),o.dispose(),a.dispose()}},[]),P.jsx(l4,{ref:n})},u4=pe.div`
  background: transparent;
  min-height: 200vh;
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,c4=pe.div`
  text-align: center;
  padding-top: 8rem;
  margin-bottom: 16rem;
`,d4=pe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20rem 0;
`,f4=pe.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`,h4=pe(Gt.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,p4=pe(Gt.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #333333;
  text-shadow: none;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`,m4=pe(Gt.p)`
  font-size: 1.25rem;
  color: #444444;
  text-shadow: none;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,g4=pe(Gt.p)`
  font-size: 1.2rem;
  color: #444444;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  text-align: center;
`,v4=()=>{const[n,e]=U.useState(0),t=["Hello","Hola","Bonjour","Ciao","Hallo","Olá","Привет","你好","こんにちは","안녕하세요","नमस्ते","مرحبا","Γεια σας","Merhaba","Xin chào","Sawubona","Jambo","Hej","Hei","Salam","Szia","Salut","Ahoj","Cześć","Hej","Hallo","Tere","Dia dhuit","Kamusta","Sawasdee"];return U.useEffect(()=>{const i=setInterval(()=>{e(o=>(o+1)%t.length)},3e3);return()=>clearInterval(i)},[]),P.jsx(Gt.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:t[n]},n)};function y4(){const n=Mm(),e=()=>{n("/globe")};return P.jsxs(u4,{children:[P.jsx(Qs,{}),P.jsxs(c4,{children:[P.jsx(p4,{children:P.jsx(hd,{mode:"wait",children:P.jsx(v4,{},Date.now())})}),P.jsx(m4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Curious Wanderer"}),P.jsx(g4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:"Welcome..."})]}),P.jsx(d4,{children:P.jsxs(f4,{children:[P.jsx(EM,{}),P.jsx(h4,{onClick:e,whileHover:{scale:1.02},whileTap:{scale:.98},"aria-label":"View fullscreen globe"})]})})]})}const x4=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,_4=pe(Gt.div)`
  margin-bottom: 2rem;
`,w4=pe.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,Ep=pe.p`
  color: #444444;
  text-shadow: none;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;function S4(){return P.jsxs(P.Fragment,{children:[P.jsx(Qs,{}),P.jsx(x4,{children:P.jsxs(_4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[P.jsx(w4,{children:"Vibe"}),P.jsx(Ep,{children:"The more I learn, the more I realize how much there is to explore. Certainty is rare, but that's what makes progress exciting. To me, data is the best tool for making sense of the world—it helps us see where we've been and where we're going, like a map that gets clearer over time."}),P.jsx(Ep,{children:"I'm always chasing interesting questions, and my projects reflect that curiosity. Take a look around --"}),P.jsx(Ep,{children:"Thanks for being here :)"})]})})]})}const bg=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,M4=pe.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`,Eg=as`
  0% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
  50% { box-shadow: 0 0 15px rgba(255, 105, 180, 0.5), 0 0 30px rgba(135, 206, 235, 0.3); }
  100% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
`;pe(Gt.button)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${Eg} 2s infinite;
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
  }
  
  &:before {
    content: '←';
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;const b4=pe.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    gap: 0.5rem;
  }
`,TM=pe.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${Eg} 2s infinite;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`,E4=pe.button`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${Eg} 2s infinite;
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
  }
  
  ${n=>n.$isActive&&`
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.3), rgba(135, 206, 235, 0.3));
    border-color: rgba(255, 255, 255, 0.3);
  `}
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;pe.select`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 2rem 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  
  &:hover {
    animation: ${bg} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &:focus {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  option {
    background-color: rgba(26, 26, 26, 0.95);
    color: white;
    font-size: 1rem;
    padding: 10px;
  }
`;const T4=pe.span`
  color: white;
  margin-right: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &:hover {
    animation: ${bg} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,C4=pe.div`
  position: absolute;
  right: 1.2rem;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(255, 255, 255, 0.8);
  pointer-events: none;
  transition: transform 0.3s ease, border-top-color 0.3s ease;
  
  ${TM}:hover & {
    transform: translateY(3px);
    border-top-color: white;
  }
`,A4=pe.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 20;
  display: ${n=>n.$isOpen?"block":"none"};
  width: 120px;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`,P4=pe.div`
  padding: 0.7rem 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
    color: white;
  }
  
  ${n=>n.$isSelected&&`
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.3), rgba(135, 206, 235, 0.3));
    font-weight: bold;
  `}
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,L4=pe.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${bg} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,R4={initial:{opacity:0,filter:"blur(20px)"},animate:{opacity:1,filter:"blur(0px)",transition:{duration:.6,ease:"easeOut"}}},D4={initial:{y:-50,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:15,delay:.5}}};function I4(){Mm();const n=new Date().getFullYear(),[e,t]=U.useState(n),[i,o]=U.useState(!1);U.useState(!1);const[a,u]=U.useState(!1),c=[];for(let g=n;g>=1993;g--)c.push(g);const d=g=>{t(g),o(!1),u(!1)},f=()=>{u(!a),o(!1)},p=()=>{o(!i)},m=g=>{i&&!g.target.closest(".year-selector")&&o(!1)};return fn.useEffect(()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[i]),P.jsxs(M4,{children:[P.jsx(Qs,{}),P.jsx(Gt.div,{variants:D4,initial:"initial",animate:"animate",children:P.jsxs(b4,{children:[P.jsx(E4,{onClick:f,$isActive:a,children:"All"}),P.jsxs(TM,{className:"year-selector",children:[P.jsx(T4,{children:"Year"}),P.jsxs("div",{style:{position:"relative"},children:[P.jsx(L4,{onClick:p,children:e}),P.jsx(C4,{}),P.jsx(A4,{$isOpen:i,children:c.map(g=>P.jsx(P4,{$isSelected:g===e,onClick:()=>d(g),children:g},g))})]})]})]})}),P.jsx(Gt.div,{variants:R4,initial:"initial",animate:"animate",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:P.jsx(EM,{fullscreen:!0,year:a?"all":e})})]})}const k4=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,F4=pe.div`
  padding: 2rem 0;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,z4=pe.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,N4=pe.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`,Tg=pe(Gt.div)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 3rem;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    animation: ${k4} 0.5s ease;
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`,O4=pe.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333333;
  text-shadow: none;
  transition: all 0.3s ease;

  ${Tg}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,B4=pe.p`
  color: #444444;
  text-shadow: none;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,U4=pe.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,V4=pe.span`
  color: #666666;
  text-shadow: none;
  font-size: 0.9rem;
  font-weight: 300;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin-left: 0.5rem;
    }
  }

  ${Tg}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,j4=[{title:"TennisWorld",description:"Tennis paradise for tennis nerds.  Work in progress site where you can answer any question you can think of regarding the world of tennis. Keep up with the latest rankings and results. Make your own predictions and more...",tech:["Javascript","MongoDB","Vite"]},{title:"Data Science Questions",description:"Notebooks that contain Data Science questions and (some) answers from DataInterviewQs.com",tech:["Jupiter","Python","Pandas"]},{title:"99 Problems",description:"The purpose of this project is to help Lambda School generate ideas for their students to work on. As Lambda School continues to grow, it has become difficult to keep up with idea generation for projects. That is where we come in. Our team has made use of leading edge technology in text generation to help create company descriptions. Using a data set of 150,000 company descriptions and training on top of OpenAI’s GPT-2 neural network, we were able to generate company descriptions that have the potential to be used by people in the real world.",tech:["React","Python","MongoDB","LLM"]},{title:"Helping Well",description:"Using NLP to match users with relevant non-profits in their area",tech:["React","Node.js","Python"]},{title:"Should We Fix the Wells?",description:"a competition using a dataset describing water wells in Tanzania. The goal was to build the best predictive model for classifying the water wells in Tanzania. There were three classes of wells, functioning, non-functioning, and functioning but needs repairs. Using some machine learning techniques, and data analysis, this post will go through my process of fine tuning a model and thought process to help improve a real world problem.",tech:["Python","Pandas","Regression","ML"]},{title:"The Lefty Myth",description:"Small study looking at the top pros in tennis to try and decipher if being left handed really is an outsized advantage.",tech:["Python","Pandas"]},{title:"Digging Into Blue Gold",description:"Research done for the University of Notre Dame Endowment to see if water is a good investment opportunity.",tech:["Research","Presentation"]}];function G4(){return P.jsxs(P.Fragment,{children:[P.jsx(Qs,{}),P.jsxs(F4,{children:[P.jsx(z4,{children:"Curiosities"}),P.jsx(N4,{children:j4.map((n,e)=>P.jsxs(Tg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},children:[P.jsx(O4,{children:n.title}),P.jsx(B4,{children:n.description}),P.jsx(U4,{children:n.tech.map((t,i)=>P.jsx(V4,{children:t},i))})]},e))})]})]})}var CM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w1=fn.createContext&&fn.createContext(CM),H4=["attr","size","title"];function W4(n,e){if(n==null)return{};var t=$4(n,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function $4(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function gd(){return gd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},gd.apply(this,arguments)}function S1(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function vd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?S1(Object(t),!0).forEach(function(i){X4(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S1(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function X4(n,e,t){return e=q4(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function q4(n){var e=Y4(n,"string");return typeof e=="symbol"?e:e+""}function Y4(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function AM(n){return n&&n.map((e,t)=>fn.createElement(e.tag,vd({key:t},e.attr),AM(e.child)))}function Nd(n){return e=>fn.createElement(K4,gd({attr:vd({},n.attr)},e),AM(n.child))}function K4(n){var e=t=>{var{attr:i,size:o,title:a}=n,u=W4(n,H4),c=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),fn.createElement("svg",gd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:d,style:vd(vd({color:n.color||t.color},t.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&fn.createElement("title",null,a),n.children)};return w1!==void 0?fn.createElement(w1.Consumer,null,t=>e(t)):e(CM)}function Z4(n){return Nd({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function Q4(n){return Nd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function J4(n){return Nd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(n)}function ez(n){return Nd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"},child:[]}]})(n)}const tz=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,nz=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,iz=pe(Gt.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,rz=pe(Gt.p)`
  color: #444444;
  text-shadow: none;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,sz=pe.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`,kc=pe(Gt.a)`
  font-size: 1.5rem;
  color: #666666;
  text-shadow: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    animation: ${tz} 0.5s ease;
    color: transparent;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;function oz(){return P.jsxs(P.Fragment,{children:[P.jsx(Qs,{}),P.jsxs(nz,{children:[P.jsx(iz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Poke"}),P.jsx(rz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Feel free to reach out for collaborations or opportunities"}),P.jsxs(sz,{children:[P.jsx(kc,{href:"https://github.com/NicoMontoya",target:"_blank",rel:"noopener noreferrer",children:P.jsx(Z4,{})}),P.jsx(kc,{href:"https://www.linkedin.com/in/nico-montoya/",target:"_blank",rel:"noopener noreferrer",children:P.jsx(Q4,{})}),P.jsx(kc,{href:"mailto:nicomontoya@hey.com",children:P.jsx(ez,{})}),P.jsx(kc,{href:"https://x.com/n_montoy03",target:"_blank",rel:"noopener noreferrer",children:P.jsx(J4,{})})]})]})]})}const az=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,lz=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,uz=pe.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,cz=pe.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Tp=pe(Ol)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(135, 206, 235, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
    animation: ${az} 0.5s ease;
    h3 {
      background: linear-gradient(45deg, #ff69b4, #87CEEB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`,Cp=pe.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333333;
  text-shadow: none;
`,Ap=pe.p`
  color: #444444;
  text-shadow: none;
  font-size: 1rem;
  line-height: 1.6;
`;function dz(){return P.jsxs(P.Fragment,{children:[P.jsx(Qs,{}),P.jsxs(lz,{children:[P.jsx(uz,{children:"Wonderlings"}),P.jsxs(cz,{children:[P.jsxs(Tp,{to:"/writings/antifilters",children:[P.jsx(Cp,{children:"Anti Filters"}),P.jsx(Ap,{children:"Rejection is a signal, not a setback."})]}),P.jsxs(Tp,{to:"/writings/tennis",children:[P.jsx(Cp,{children:"Lessons From Tennis"}),P.jsx(Ap,{children:"Exploring the parallels between tennis and life, from mental toughness to strategic thinking."})]}),P.jsxs(Tp,{to:"/writings/leadership",children:[P.jsx(Cp,{children:"On Leadership"}),P.jsx(Ap,{children:"Reflections on authentic leadership and building meaningful connections in the modern world."})]})]})]})]})}const fz=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,hz=pe.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,pz=pe.div`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;function mz(){return P.jsxs(fz,{children:[P.jsx(hz,{children:"Lessons From Tennis"}),P.jsxs(pz,{children:[P.jsx("p",{children:"Tennis, beyond its physical demands, is a profound teacher of life's most valuable lessons. The court becomes a microcosm of life's challenges, victories, and setbacks, each match a story of personal growth and resilience."}),P.jsx("h2",{children:"The Mental Game"}),P.jsx("p",{children:"Perhaps the most striking parallel between Tennis and life lies in the mental aspect of the game. Every point is a fresh start, requiring one to leave behind previous mistakes and focus entirely on the present moment. This ability to reset and maintain composure under pressure is invaluable both on and off the court."}),P.jsx("h2",{children:"Adaptability"}),P.jsx("p",{children:"Success in Tennis requires constant adaptation. Wind conditions change, opponents adjust their tactics, and our own game fluctuates. The ability to read situations quickly and adjust accordingly is crucial. This adaptability translates directly to navigating life's ever-changing landscapes."}),P.jsx("h2",{children:"Accountability"}),P.jsx("p",{children:"In singles, you are all alone. There's no team to rely on, no substitutions possible. This solitude teaches us about self-reliance and taking full responsibility for our actions and decisions. Every point won or lost is a direct result of our choices and execution."}),P.jsx("h2",{children:"The Journey of Improvement"}),P.jsx("p",{children:"Progress in Tennis, like in life, is rarely linear. It's never perfect. It's never final. It's continuous refinement. The process teaches us patience, persistence, and the value of deliberate practice. Tennis teaches to love the journey."}),P.jsx("p",{children:"These lessons from Tennis have extended far beyond the tennis court. I love the sport.  I will forever be grateful to Tennis."})]})]})}const gz=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,vz=pe.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,yz=pe.div`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;function xz(){return P.jsxs(gz,{children:[P.jsx(vz,{children:"On Leadership"}),P.jsxs(yz,{children:[P.jsx("p",{children:"Leadership, to me, transcends traditional hierarchies and management techniques. It's about creating an environment where others can flourish, innovate, and achieve their fullest potential."}),P.jsx("h2",{children:"Authentic Connection"}),P.jsx("p",{children:"True Leadership begins with authentic connection. In an increasingly digital world, the ability to forge genuine relationships becomes not just valuable, but essential. Leaders must create spaces where vulnerability is welcomed and trust can flourish."}),P.jsx("h2",{children:"Leading By Example"}),P.jsx("p",{children:"The most impactful leadership doesn't come from directives or mandates, but from consistent demonstration of the values and behaviors we wish to see in others. When leaders embody their principles, they create a natural gravitational pull that inspires others to follow."}),P.jsx("h2",{children:"Comfort With the Uncomfortable"}),P.jsx("p",{children:"Leadership requires comfort with ambiguity. In a world of rapid change and increasing complexity, the ability to navigate uncertainty while maintaining clear vision becomes crucial. Leaders must balance confidence with humility, knowing when to stand firm and when to adapt."}),P.jsx("h2",{children:"Growth Mindset"}),P.jsx("p",{children:"Leaders create cultures of continuous learning. They understand that growth isn't just about acquiring new skills or accomplishing tasks, but about fostering an environment where experimentation is encouraged and failure is seen as a stepping stone to success."}),P.jsx("h2",{children:"Catapult"}),P.jsx("p",{children:"Most importantly for me, Leaders don't seek the spotlight—they create it for others. The best leadership isn't about being the loudest voice in the room but about empowering those around you to thrive. When a leader becomes invisible, their impact is felt through the success, confidence, and growth of their team."}),P.jsx("p",{children:"Leadership isn't a title or accolade but a continuous journey of growth, learning, and service to others. It's about creating influence that extend far beyond our immediate sphere of influence, contributing to positive change in ways we might never fully see."})]})]})}const _z=pe.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,wz=pe.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Sz=pe.div`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;function Mz(){return P.jsxs(_z,{children:[P.jsx(wz,{children:"Anti Filters"}),P.jsxs(Sz,{children:[P.jsx("p",{children:"There's a quiet, underrated moment in life that happens when someone, something, or some place says: “You're not what we're looking for.” It stings at first. Rejection always does. But what if we started to see these moments not as losses—but as signals? What if rejection is exactly the thing we need to listen to most?"}),P.jsx("p",{children:"I call this idea anti filters."}),P.jsx("p",{children:"We all know what filters are: tools we use to sift through people, opportunities, or options based on our preferences. But anti filters are the reverse. They're when others filter you out—and, surprisingly, that can be a good thing. "}),P.jsx("h2",{children:"Rejection as Signal"}),P.jsx("p",{children:"Here's the heart of it: when someone or something rejects you, not because of a lack of skill or preparation, but because of a misalignment of values, they're doing you a favor. They're saving you time, energy, and the mental gymnastics of pretending to be someone you're not."}),P.jsx("p",{children:"This only works if you've done the internal work first. You need to know your values. Not in some vague, bumper-sticker sense. I mean a clear, confident sense of who you are, what you want, and what kind of environments let you thrive. That's your compass."}),P.jsx("p",{children:"Once you have that compass, you can approach every opportunity, every conversation, job interview, relationship, community, with honesty. And here's the magic: when you're honest about your values, you give others the chance to show you whether or not they're truly aligned. And if they're not? That's your anti filter in action."}),P.jsx("h2",{children:"Interviewing"}),P.jsx("p",{children:"Take job interviews, for example. We're trained to polish, posture, and perform. Prep for common questions. Show just enough vulnerability to seem humble, but not too much. Present the resume highlight reel. Basically, sell."}),P.jsx("p",{children:"But what if we didn't?"}),P.jsx("p",{children:"What if we showed up to interviews not trying to impress, but trying to align? What if we used that time not just to show we're qualified, but to deeply assess: Is this a place I can be myself? Are these the kind of people I want to spend my days with? Do they value what I value?"}),P.jsx("p",{children:"You'd ask questions that matter. You'd speak with clarity about your own principles. You'd stop puffing and start listening. And if that company says no? Wonderful. They've just saved you from investing months or years into a job that would have chipped away at who you truly are."}),P.jsx("h2",{children:"Let Others Work for You"}),P.jsx("p",{children:"The beauty of anti filters is they're self-cleaning. You don't have to spend endless effort dodging bad fits or trying to make everything work. Just be honest about who you are, what you stand for, and what you're looking for and let others opt out. When they do, thank them."}),P.jsx("p",{children:"When people or organizations filter you out based on your authentic self, they're doing you the massive favor of revealing that they're not your people. That's valuable information."}),P.jsx("h2",{children:"Long Term"}),P.jsx("p",{children:"This mindset might mean it takes longer to land the job, find the right friends, or build the right business partnerships. But long-term? It's a stress reducer. It removes the exhausting pressure to mold yourself to every room you enter. And it speeds up the process of finding real alignment."}),P.jsx("p",{children:"With time, anti filters help you build a life surrounded by people and places that actually fit. And that's not just more efficient, it's more fulfilling."}),P.jsx("p",{children:"So next time you're rejected, take a breath. Smile, even. And think: Thank you for being my anti filter. One less mismatch to worry about. One step closer to the right fit."}),P.jsx("h2",{children:"-----------------------------------------------------"}),P.jsx("p",{children:"Don't mold yourself to what the world wants. Mold the world around what you know to be true. Be honest. Be thoughtful. Be curious. Let the anti filters do their work."})]})]})}const bz=as`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,Ez=as`
  to { transform: rotate(360deg); }
`,Tz=pe.div`
  padding: 2rem 0 6rem;
  position: relative;
  z-index: 1;
`,Cz=pe.div`
  margin-bottom: 3rem;
`,Az=pe(Gt.h2)`
  font-size: 2.5rem;
  color: #333333;
  @media (max-width: 768px) { font-size: 2rem; }
`,Pz=pe(Gt.p)`
  color: #666666;
  font-size: 1.05rem;
  font-weight: 300;
  margin-top: 0.6rem;
  line-height: 1.6;
`,Lz=pe.a`
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover { opacity: 0.8; }
`,Rz=pe.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,PM=pe(Gt.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover { box-shadow: 0 8px 36px rgba(0,0,0,0.1); transform: translateY(-3px); }
`,Dz=pe.div`
  height: 3px;
  background: ${n=>n.$color?`linear-gradient(90deg, ${n.$color}99, ${n.$color})`:"linear-gradient(90deg, #ff69b4, #87CEEB)"};
`,Iz=pe.div`
  height: 140px;
  background: ${n=>n.$color?`${n.$color}18`:"linear-gradient(135deg, #fff5f9, #f0f8ff)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  user-select: none;
`,kz=pe.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,Fz=pe.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.4rem;
  font-weight: 500;
  ${PM}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,zz=pe.p`
  color: #666;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 1.1rem;
  flex: 1;
`,Nz=pe.span`
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.15rem 0.6rem;
  border-radius: 10px;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  color: white;
  margin-bottom: 0.75rem;
  width: fit-content;
`,Oz=pe.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Bz=pe.button`
  padding: 0.2rem 0.75rem;
  border-radius: 20px;
  border: 1.5px solid ${n=>n.$active?"transparent":"#e1e1e1"};
  background: ${n=>n.$active?"linear-gradient(45deg, #ff69b4, #87CEEB)":"white"};
  color: ${n=>n.$active?"white":"#666"};
  font-size: 0.76rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  &:hover { border-color: #ff69b4; }
`,Uz=pe.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,Vz=pe.span`
  font-size: 1.15rem;
  font-weight: 500;
  color: #333;
`,jz=pe(Gt.button)`
  padding: 0.42rem 1rem;
  border-radius: 20px;
  border: 1.5px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  font-family: 'Playfair Display', serif;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  &:hover {
    animation: ${bz} 0.4s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    border-color: transparent;
    color: white;
  }
`,Gz=pe.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`,M1=pe.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #e1e1e1;
  background: white;
  color: #333;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`,Hz=pe.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  min-width: 18px;
  text-align: center;
`,Wz=pe(Gt.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.4rem;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(255,105,180,0.45);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 100;
  &:hover { box-shadow: 0 6px 32px rgba(255,105,180,0.6); }
`,$z=pe.span`
  background: white;
  color: #ff69b4;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 0.78rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xz=pe(Gt.div)`
  position: fixed;
  inset: 0;
  background: rgba(26,26,26,0.35);
  z-index: 200;
  backdrop-filter: blur(3px);
`,qz=pe(Gt.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 420px;
  max-width: 96vw;
  background: #fafafa;
  z-index: 201;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 48px rgba(0,0,0,0.1);
`,Yz=pe.div`
  padding: 1.6rem 2rem 1.4rem;
  border-bottom: 1px solid #ebebeb;
  background: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`,Kz=pe.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  &:hover { color: #333; }
`,Zz=pe.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #333;
  font-weight: 500;
  flex: 1;
`,Qz=pe.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  &:hover { color: #333; }
`,Fc=pe.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
`,zc=pe.div`
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid #ebebeb;
  background: white;
  flex-shrink: 0;
`,Jz=pe.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1.75rem;
`,eN=pe.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: ${n=>n.$active?"#333":n.$done?"#aaa":"#ccc"};
  font-weight: ${n=>n.$active?"500":"300"};
`,tN=pe.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${n=>n.$done?"linear-gradient(45deg, #ff69b4, #87CEEB)":n.$active?"#333":"#e5e5e5"};
  color: white;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,nN=pe.div`
  flex: 1;
  height: 1px;
  background: #e5e5e5;
  max-width: 24px;
`,iN=pe.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rN=pe.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
`,sN=pe.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: ${n=>n.$color?`${n.$color}18`:"linear-gradient(135deg,#fff5f9,#f0f8ff)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`,oN=pe.div`
  flex: 1;
  min-width: 0;
`,aN=pe.div`
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,lN=pe.div`
  font-size: 0.76rem;
  color: #999;
  font-weight: 300;
  margin-top: 0.1rem;
`,uN=pe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
`,cN=pe.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`,dN=pe.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,b1=pe.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid #e1e1e1;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`,fN=pe.span`
  font-size: 0.85rem;
  color: #333;
  min-width: 14px;
  text-align: center;
`,hN=pe.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 0;
  color: #bbb;
  font-size: 0.9rem;
  font-weight: 300;
`,pN=pe.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,E1=pe.div`
  display: grid;
  grid-template-columns: ${n=>n.$cols||"1fr"};
  gap: 0.75rem;
`,qr=pe.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Yr=pe.label`
  font-size: 0.76rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 400;
`,As=pe.input`
  padding: 0.65rem 0.9rem;
  border: 1.5px solid ${n=>n.$error?"#ff6b6b":"#e5e5e5"};
  border-radius: 8px;
  font-size: 0.92rem;
  color: #333;
  background: white;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  &:focus { border-color: #ff69b4; }
  &::placeholder { color: #bbb; }
`,mN=pe.select`
  padding: 0.65rem 0.9rem;
  border: 1.5px solid #e5e5e5;
  border-radius: 8px;
  font-size: 0.92rem;
  color: #333;
  background: white;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
  &:focus { border-color: #ff69b4; }
`,Nc=pe.span`
  font-size: 0.74rem;
  color: #ff6b6b;
`,gN=pe.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`,vN=pe.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff5f9, #f0f8ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
`,yN=pe.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`,xN=pe.div`
  font-size: 0.88rem;
  color: #777;
  font-weight: 300;
  line-height: 1.6;
  max-width: 280px;
`,_N=pe.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${n=>n.$done?"#27c93f":"#999"};
  font-weight: 300;
`,wN=pe.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${n=>n.$done?"#27c93f":"#ddd"};
  flex-shrink: 0;
`,SN=pe(Gt.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  text-align: center;
`,MN=pe.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`,bN=pe.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #333;
  font-weight: 500;
`,EN=pe.p`
  color: #777;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 280px;
`,TN=pe.div`
  font-size: 0.78rem;
  color: #bbb;
  letter-spacing: 0.5px;
`,Pp=pe.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.1rem;
`,Lp=pe.span`
  font-size: 0.9rem;
  color: #888;
  font-weight: 300;
`,Rp=pe.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`,cl=pe(Gt.button)`
  width: 100%;
  padding: 0.88rem;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.3px;
  margin-bottom: 0.6rem;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,CN=pe(Gt.button)`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1.5px solid #e1e1e1;
  border-radius: 8px;
  color: #888;
  font-family: 'Playfair Display', serif;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`,Oc=pe.p`
  text-align: center;
  font-size: 0.76rem;
  color: #ccc;
  font-weight: 300;
  a { color: #ccc; text-decoration: underline; text-underline-offset: 2px; &:hover { color: #ff69b4; } }
`,T1=pe.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: ${Ez} 0.6s linear infinite;
`,C1=pe.div`
  font-size: 0.82rem;
  color: #ff6b6b;
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.5;
`,AN=[["US","United States"],["CA","Canada"],["GB","United Kingdom"],["AU","Australia"],["DE","Germany"],["FR","France"],["ES","Spain"],["IT","Italy"],["NL","Netherlands"],["JP","Japan"],["MX","Mexico"],["CO","Colombia"],["BR","Brazil"],["AR","Argentina"]],A1={cron:"⏰",segfault:"💥","dark mode":"🌑",404:"🔍",default:"☕"},P1=n=>A1[n==null?void 0:n.toLowerCase()]||A1.default,L1={name:"",street1:"",street2:"",city:"",province:"",zip:"",country:"US",phone:""},R1=[{id:"fb_cron",name:"cron",description:"Subscribe to Cron, the official Terminal membership. Monthly delivery with a special flavor-of-the-month blend.",order:1,subscription:"required",variants:[{id:"fb_v1",name:"12oz",price:3e3}],tags:{color:"#00FFF0"}},{id:"fb_seg",name:"segfault",description:"A savory yet sweet blend created from a natural fault in the coffee cherry — one bean instead of two.",order:2,subscription:"allowed",variants:[{id:"fb_v2",name:"Medium Roast | 12oz | Whole Beans",price:2200}],tags:{color:"#169FC1"}},{id:"fb_dark",name:"dark mode",description:"A dark roast from Cerrado, Brazil. Dark chocolate with hints of almond. Low acid, full body.",order:3,subscription:"allowed",variants:[{id:"fb_v3",name:"Dark Roast | 12oz | Whole Beans",price:2200}],tags:{color:"#118B39"}},{id:"fb_404",name:"404",description:"A flavorful decaf processed in the mountain waters of Brazil. Dark chocolatey blend.",order:4,subscription:"allowed",variants:[{id:"fb_v4",name:"Decaf | 12oz | Whole Beans",price:2200}],tags:{color:"#D53C81"}}],PN=["Cart","Address","Payment","Done"];function LN(){const[n,e]=U.useState([]),[t,i]=U.useState({}),[o,a]=U.useState([]),[u,c]=U.useState(!1),[d,f]=U.useState(0),[p,m]=U.useState(L1),[g,_]=U.useState({}),[M,x]=U.useState(""),[y,S]=U.useState(!1),[T,L]=U.useState(!1),[R,b]=U.useState(""),[I,O]=U.useState(null);U.useEffect(()=>{fetch("https://api.terminal.shop/product").then(ye=>ye.json()).then(ye=>{const me=(ye==null?void 0:ye.result)??(ye==null?void 0:ye.data)??[];e(me.length>0?me:R1)}).catch(()=>e(R1))},[]),U.useEffect(()=>{n.length&&i(V=>{const ye={...V};return n.forEach(me=>{ye[me.id]==null&&(ye[me.id]=0)}),ye})},[n]);const C=(V,ye)=>`${V}__${ye}`,z=(V,ye)=>{var me;return((me=o.find(ge=>ge.key===C(V,ye)))==null?void 0:me.qty)??0},te=o.reduce((V,ye)=>V+ye.qty,0),ne=o.reduce((V,ye)=>{var ge,be;const me=n.find(et=>et.id===ye.productId);return V+(((be=(ge=me==null?void 0:me.variants)==null?void 0:ge[ye.variantIdx])==null?void 0:be.price)??0)*ye.qty},0),Te=V=>`$${(V/100).toFixed(2)}`,_e=(V,ye)=>{const me=C(V.id,ye);a(ge=>ge.find(et=>et.key===me)?ge.map(et=>et.key===me?{...et,qty:et.qty+1}:et):[...ge,{key:me,productId:V.id,variantIdx:ye,qty:1}])},J=(V,ye)=>{a(me=>me.map(ge=>ge.key===V?{...ge,qty:ge.qty+ye}:ge).filter(ge=>ge.qty>0))},he=()=>{f(0),c(!0)},oe=()=>{c(!1),setTimeout(()=>f(0),400)},re=()=>{f(0),m(L1),x(""),S(!1),b(""),O(null)},X=()=>{const V=["name","street1","city","zip","country"],ye={};return V.forEach(me=>{var ge;(ge=p[me])!=null&&ge.trim()||(ye[me]="Required")}),_(ye),Object.keys(ye).length===0},q=async()=>{if(X()){b("Worker URL not configured. Add VITE_WORKER_URL to your .env file.");return}},Y=()=>{window.open(M,"_blank","width=520,height=680")},F=async()=>{},B=V=>ye=>{m(me=>({...me,[V]:ye.target.value})),g[V]&&_(me=>({...me,[V]:""}))},ce=()=>P.jsx(Jz,{children:PN.map((V,ye)=>P.jsxs(fn.Fragment,{children:[ye>0&&P.jsx(nN,{}),P.jsxs(eN,{$active:ye===d,$done:ye<d,children:[P.jsx(tN,{$active:ye===d,$done:ye<d,children:ye<d?"✓":ye+1}),V]})]},V))}),xe=()=>d===0?P.jsxs(P.Fragment,{children:[P.jsxs(Fc,{children:[P.jsx(ce,{}),o.length===0?P.jsxs(hN,{children:[P.jsx("span",{style:{fontSize:"2.5rem"},children:"☕"}),P.jsx("span",{children:"Your cart is empty"})]}):P.jsx(iN,{children:o.map(V=>{var ge,be;const ye=n.find(et=>et.id===V.productId);if(!ye)return null;const me=(ge=ye.variants)==null?void 0:ge[V.variantIdx];return P.jsxs(rN,{children:[P.jsx(sN,{$color:(be=ye.tags)==null?void 0:be.color,children:P1(ye.name)}),P.jsxs(oN,{children:[P.jsx(aN,{children:ye.name}),(me==null?void 0:me.name)&&P.jsx(lN,{children:me.name})]}),P.jsxs(uN,{children:[P.jsx(cN,{children:me!=null&&me.price?Te(me.price*V.qty):"—"}),P.jsxs(dN,{children:[P.jsx(b1,{onClick:()=>J(V.key,-1),children:"−"}),P.jsx(fN,{children:V.qty}),P.jsx(b1,{onClick:()=>J(V.key,1),children:"+"})]})]})]},V.key)})})]}),P.jsxs(zc,{children:[o.length>0&&P.jsxs(Pp,{children:[P.jsx(Lp,{children:"Total"}),P.jsx(Rp,{children:Te(ne)})]}),P.jsx(cl,{whileTap:{scale:.98},onClick:()=>f(1),disabled:o.length===0,children:"Continue to Shipping →"}),P.jsxs(Oc,{children:["Powered by ",P.jsx("a",{href:"https://terminal.shop",target:"_blank",rel:"noopener noreferrer",children:"terminal.shop"})]})]})]}):d===1?P.jsxs(P.Fragment,{children:[P.jsxs(Fc,{children:[P.jsx(ce,{}),P.jsxs(pN,{children:[P.jsxs(qr,{children:[P.jsx(Yr,{children:"Full name *"}),P.jsx(As,{value:p.name,onChange:B("name"),placeholder:"Jane Smith",$error:!!g.name}),g.name&&P.jsx(Nc,{children:g.name})]}),P.jsxs(qr,{children:[P.jsx(Yr,{children:"Street address *"}),P.jsx(As,{value:p.street1,onChange:B("street1"),placeholder:"123 Main St",$error:!!g.street1}),g.street1&&P.jsx(Nc,{children:g.street1})]}),P.jsxs(qr,{children:[P.jsx(Yr,{children:"Apt, suite, etc."}),P.jsx(As,{value:p.street2,onChange:B("street2"),placeholder:"Apt 4B"})]}),P.jsxs(E1,{$cols:"1fr 1fr",children:[P.jsxs(qr,{children:[P.jsx(Yr,{children:"City *"}),P.jsx(As,{value:p.city,onChange:B("city"),placeholder:"Austin",$error:!!g.city}),g.city&&P.jsx(Nc,{children:g.city})]}),P.jsxs(qr,{children:[P.jsx(Yr,{children:"State / Province"}),P.jsx(As,{value:p.province,onChange:B("province"),placeholder:"TX"})]})]}),P.jsxs(E1,{$cols:"1fr 1fr",children:[P.jsxs(qr,{children:[P.jsx(Yr,{children:"ZIP / Postal *"}),P.jsx(As,{value:p.zip,onChange:B("zip"),placeholder:"78701",$error:!!g.zip}),g.zip&&P.jsx(Nc,{children:g.zip})]}),P.jsxs(qr,{children:[P.jsx(Yr,{children:"Country *"}),P.jsx(mN,{value:p.country,onChange:B("country"),children:AN.map(([V,ye])=>P.jsx("option",{value:V,children:ye},V))})]})]}),P.jsxs(qr,{children:[P.jsx(Yr,{children:"Phone (optional)"}),P.jsx(As,{value:p.phone,onChange:B("phone"),placeholder:"+1 555 000 0000",type:"tel"})]})]}),R&&P.jsx(C1,{style:{marginTop:"1rem"},children:R})]}),P.jsxs(zc,{children:[P.jsxs(Pp,{children:[P.jsx(Lp,{children:"Total"}),P.jsx(Rp,{children:Te(ne)})]}),P.jsx(cl,{whileTap:{scale:.98},onClick:q,disabled:T,children:T?P.jsxs(P.Fragment,{children:[P.jsx(T1,{})," Processing…"]}):"Continue to Payment →"}),P.jsxs(Oc,{children:["Powered by ",P.jsx("a",{href:"https://terminal.shop",target:"_blank",rel:"noopener noreferrer",children:"terminal.shop"})]})]})]}):d===2?P.jsxs(P.Fragment,{children:[P.jsxs(Fc,{children:[P.jsx(ce,{}),P.jsxs(gN,{children:[P.jsx(vN,{children:"💳"}),P.jsx(yN,{children:"Add your payment card"}),P.jsx(xN,{children:"A secure card entry form will open in a new window — hosted by terminal.shop. Once you've saved your card there, come back and confirm your order."}),P.jsx(cl,{whileTap:{scale:.97},onClick:()=>{Y(),S(!0)},style:{width:"auto",padding:"0.65rem 1.5rem",marginBottom:0},children:"Open Secure Card Form →"}),P.jsxs(_N,{$done:y,children:[P.jsx(wN,{$done:y}),y?"Card form opened — complete it then confirm below":"Card not yet added"]})]}),R&&P.jsx(C1,{style:{marginTop:"1rem"},children:R})]}),P.jsxs(zc,{children:[P.jsxs(Pp,{children:[P.jsx(Lp,{children:"Total"}),P.jsx(Rp,{children:Te(ne)})]}),P.jsx(cl,{whileTap:{scale:.98},onClick:F,disabled:!y||T,children:T?P.jsxs(P.Fragment,{children:[P.jsx(T1,{})," Placing order…"]}):"Place My Order ☕"}),P.jsx(CN,{whileTap:{scale:.98},onClick:Y,children:"Re-open card form"}),P.jsxs(Oc,{children:["Powered by ",P.jsx("a",{href:"https://terminal.shop",target:"_blank",rel:"noopener noreferrer",children:"terminal.shop"})]})]})]}):P.jsxs(P.Fragment,{children:[P.jsx(Fc,{children:P.jsxs(SN,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.4},children:[P.jsx(MN,{children:"☕"}),P.jsx(bN,{children:"Order placed!"}),P.jsx(EN,{children:"Your coffee is on its way. Thanks for supporting the curiosity — enjoy every sip."}),(I==null?void 0:I.id)&&P.jsxs(TN,{children:["Order #",I.id]})]})}),P.jsxs(zc,{children:[P.jsx(cl,{whileTap:{scale:.98},onClick:()=>{oe(),re()},children:"Back to the shop"}),P.jsxs(Oc,{children:["Powered by ",P.jsx("a",{href:"https://terminal.shop",target:"_blank",rel:"noopener noreferrer",children:"terminal.shop"})]})]})]}),we=["Your Cart","Shipping Address","Payment","Order Confirmed"];return P.jsxs(P.Fragment,{children:[P.jsx(Qs,{}),P.jsxs(Tz,{children:[P.jsxs(Cz,{children:[P.jsx(Az,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Brew"}),P.jsxs(Pz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:["Coffee that fuels the curiosity — powered by"," ",P.jsx(Lz,{href:"https://terminal.shop",target:"_blank",rel:"noopener noreferrer",children:"terminal.shop"})]})]}),P.jsx(Rz,{children:n.map((V,ye)=>{var tt,We,At;const me=t[V.id]??0,ge=(tt=V.variants)==null?void 0:tt[me],be=z(V.id,me),et=(We=V.tags)==null?void 0:We.color;return P.jsxs(PM,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:ye*.08},children:[P.jsx(Dz,{$color:et}),P.jsx(Iz,{$color:et,children:P1(V.name)}),P.jsxs(kz,{children:[V.subscription==="required"&&P.jsx(Nz,{children:"Monthly subscription"}),P.jsx(Fz,{children:V.name}),P.jsx(zz,{children:V.description||"Premium coffee, carefully sourced."}),((At=V.variants)==null?void 0:At.length)>1&&P.jsx(Oz,{children:V.variants.map((Dt,It)=>P.jsx(Bz,{$active:me===It,onClick:()=>i(Jt=>({...Jt,[V.id]:It})),children:Dt.name},Dt.id))}),P.jsxs(Uz,{children:[P.jsx(Vz,{children:(ge==null?void 0:ge.price)!=null?Te(ge.price):"—"}),be===0?P.jsx(jz,{whileTap:{scale:.95},onClick:()=>_e(V,me),children:"Add to cart"}):P.jsxs(Gz,{children:[P.jsx(M1,{onClick:()=>J(C(V.id,me),-1),children:"−"}),P.jsx(Hz,{children:be}),P.jsx(M1,{onClick:()=>J(C(V.id,me),1),children:"+"})]})]})]})]},V.id)})})]}),P.jsx(hd,{children:te>0&&P.jsxs(Wz,{initial:{opacity:0,y:16,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:16,scale:.9},whileTap:{scale:.96},onClick:he,children:["☕ Cart ",P.jsx($z,{children:te})]})}),P.jsx(hd,{children:u&&P.jsxs(P.Fragment,{children:[P.jsx(Xz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:oe}),P.jsxs(qz,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:28,stiffness:220},children:[P.jsxs(Yz,{children:[d>0&&d<3&&P.jsx(Kz,{onClick:()=>{b(""),f(V=>V-1)},children:"←"}),P.jsx(Zz,{children:we[d]}),P.jsx(Qz,{onClick:oe,children:"✕"})]}),xe()]})]})})]})}const RN={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}},exit:{opacity:0,y:-20,transition:{duration:.3,ease:"easeIn"}}},DN={initial:{opacity:0,filter:"blur(20px)",backgroundColor:"rgba(0, 0, 0, 1)"},animate:{opacity:1,filter:"blur(0px)",backgroundColor:"rgba(0, 0, 0, 0)",transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,filter:"blur(20px)",backgroundColor:"rgba(0, 0, 0, 1)",transition:{duration:.3,ease:"easeIn"}}},Hi=({children:n})=>{const e=wr(),t=e.pathname==="/globe";let i=RN;return t&&(i=DN),P.jsx(hd,{mode:"wait",children:P.jsx(Gt.div,{initial:"initial",animate:"animate",exit:"exit",variants:i,style:{width:"100%",height:"100%",position:t?"fixed":"relative",top:0,left:0,perspective:"1000px",transformStyle:"preserve-3d"},children:n},e.pathname)})},IN=MC`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    background: #f8f8f8;
    color: #1a1a1a;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`,kN=[{path:"/",element:P.jsx(PC,{}),children:[{path:"/",element:P.jsx(Hi,{children:P.jsx(y4,{})})},{path:"/about",element:P.jsx(Hi,{children:P.jsx(S4,{})})},{path:"/projects",element:P.jsx(Hi,{children:P.jsx(G4,{})})},{path:"/writings",element:P.jsx(Hi,{children:P.jsx(dz,{})})},{path:"/writings/tennis",element:P.jsx(Hi,{children:P.jsx(mz,{})})},{path:"/writings/leadership",element:P.jsx(Hi,{children:P.jsx(xz,{})})},{path:"/writings/antifilters",element:P.jsx(Hi,{children:P.jsx(Mz,{})})},{path:"/contact",element:P.jsx(Hi,{children:P.jsx(oz,{})})},{path:"/coffee",element:P.jsx(Hi,{children:P.jsx(LN,{})})}]},{path:"/globe",element:P.jsx(LC,{}),children:[{path:"",element:P.jsx(Hi,{children:P.jsx(I4,{})})}]}],FN=c3(kN);wE.createRoot(document.getElementById("root")).render(P.jsxs(fn.StrictMode,{children:[P.jsx(IN,{}),P.jsx(M3,{router:FN})]}));
