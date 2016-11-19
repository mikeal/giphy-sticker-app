(function g(A,_,w){function E(P,C){if(!_[P]){if(!A[P]){var R="function"==typeof require&&require;if(!C&&R)return R(P,!0);if(T)return T(P,!0);var S=new Error("Cannot find module '"+P+"'");throw S.code="MODULE_NOT_FOUND",S}var O=_[P]={exports:{}};A[P][0].call(O.exports,function(U){var v=A[P][1][U];return E(v?v:U)},O,O.exports,g,A,_,w)}return _[P].exports}var T="function"==typeof require&&require;for(var B=0;B<w.length;B++)E(w[B]);return E})({1:[function(g,A){const _=g("funky"),w=window.fetch||g("whatwg-fetch").fetch;g("magnet-uri");const E=(O,U)=>w(O).then(v=>v.json()).then(v=>{U(null,v)}).catch(U),T=O=>`///api.giphy.com/v1${O}`,B=()=>{if(window.parent){let O={height:document.body.offsetHeight};window.parent.postMessage(O,"*")}},P=_`
${function(U,v){v.webtorrent,U.onclick=()=>{// TODO: overlay loader
let I=U.querySelector("img.giphy-sticker").getAttribute("src");window.parent&&window.parent.postMessage({app:"dropub",api:"https://none/v1",image:I},"*"),window.location=I},U.querySelector("img").onload=B}}
<giphy-sticker>
<img class="giphy-sticker"
     src="${O=>O.sticker.images.fixed_height.url}"
/>
</giphy-sticker>
`,C=_`
<giphy-stickers>
${O=>O.trending.map(U=>{return{sticker:U,webtorrent:O.webtorrent}}).map(P)}
</giphy-stickers>
`,R=g("./loading"),S=_`
${function(U,v){E(T(`/stickers/trending?api_key=${"dc6zaTOxFJmzC"}`),(I,N)=>{return I?console.error(I):void(v.trending=N.data,U.update(v))})}}
<giphy-stickers-main>
  <link href='//fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
  <style>
  giphy-stickers-main {
    font-family: 'Lato', sans-serif;
  }
  giphy-stickers {
    display:flex;
    width: 100%;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: baseline;
  }
  giphy-sticker img {
    max-height: 100px;
    max-width: 100px;
    cursor: pointer;
  }
  </style>
  <h3>Trending</h3>
  ${O=>O.trending?C(O):R}
</giphy-stickers-main>
`;A.exports=S},{"./loading":2,funky:9,"magnet-uri":16,"whatwg-fetch":22}],2:[function(g,A){const _=g("bel");A.exports=_`
<div class="sk-fading-circle">
  <style>
  .sk-fading-circle {
    margin: 100px auto;
    width: 140px;
    height: 140px;
    position: relative;
  }

  .sk-fading-circle .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .sk-fading-circle .sk-circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #00BFFF;
    border-radius: 100%;
    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
  .sk-fading-circle .sk-circle2 {
    -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
            transform: rotate(30deg);
  }
  .sk-fading-circle .sk-circle3 {
    -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
            transform: rotate(60deg);
  }
  .sk-fading-circle .sk-circle4 {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  .sk-fading-circle .sk-circle5 {
    -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
            transform: rotate(120deg);
  }
  .sk-fading-circle .sk-circle6 {
    -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
            transform: rotate(150deg);
  }
  .sk-fading-circle .sk-circle7 {
    -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  .sk-fading-circle .sk-circle8 {
    -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
            transform: rotate(210deg);
  }
  .sk-fading-circle .sk-circle9 {
    -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
            transform: rotate(240deg);
  }
  .sk-fading-circle .sk-circle10 {
    -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  .sk-fading-circle .sk-circle11 {
    -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
            transform: rotate(300deg);
  }
  .sk-fading-circle .sk-circle12 {
    -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
            transform: rotate(330deg);
  }
  .sk-fading-circle .sk-circle2:before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
  }
  .sk-fading-circle .sk-circle3:before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s;
  }
  .sk-fading-circle .sk-circle4:before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
  }
  .sk-fading-circle .sk-circle5:before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
  }
  .sk-fading-circle .sk-circle6:before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
  }
  .sk-fading-circle .sk-circle7:before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
  }
  .sk-fading-circle .sk-circle8:before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
  }
  .sk-fading-circle .sk-circle9:before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
  }
  .sk-fading-circle .sk-circle10:before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
  }
  .sk-fading-circle .sk-circle11:before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
  }
  .sk-fading-circle .sk-circle12:before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
  }

  @-webkit-keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }

  @keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }
  </style>
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div>
`},{bel:6}],3:[function(g,A){const _=g("funky"),w=_`
${function(T,B){let P=B.webtorrent,C=B.magnet;console.log(C),P.add(C,R=>{console.log(R),R.appendTo(T)})}}
<webtorrent-img>
</webtorrent-img>
`;A.exports=w},{funky:9}],4:[function(g){const A=g("./components/giphy-stickers-main"),_=g("./components/webtorrent-image"),w=void 0;// const webtorrent = require('webtorrent')()
let E=new URL(window.location.toString()),T=E.searchParams,B;B=function(){let C=["xt","dn","tr"];for(var R=0;R<C.length;R++)if(T.has(C[R]))return!0;return!1}()?_({webtorrent:w,magnet:"magnet:"+window.location.search}):A({webtorrent:w}),B&&document.getElementById("center-container").appendChild(B)},{"./components/giphy-stickers-main":1,"./components/webtorrent-image":3}],5:[function(g,A,_){"use strict";function w(U){var v=U.length;if(0<v%4)throw new Error("Invalid string. Length must be a multiple of 4");// the number of equal signs (place holders)
// if there are two placeholders, than the two characters before it
// represent one byte
// if there is only one, then the three characters before it represent 2 bytes
// this is just a cheap hack to not do indexOf twice
return"="===U[v-2]?2:"="===U[v-1]?1:0}function E(U){return B[63&U>>18]+B[63&U>>12]+B[63&U>>6]+B[63&U]}function T(U,v,I){var N,D=[];for(var Y=v;Y<I;Y+=3)N=(U[Y]<<16)+(U[Y+1]<<8)+U[Y+2],D.push(E(N));return D.join("")}_.byteLength=function(v){// base64 is 4/3 + up to two characters of the original data
return 3*v.length/4-w(v)},_.toByteArray=function(v){var I,N,D,Y,F,M,V=v.length;F=w(v),M=new C(3*V/4-F),D=0<F?V-4:V;var H=0;for(I=0,N=0;I<D;I+=4,N+=3)Y=P[v.charCodeAt(I)]<<18|P[v.charCodeAt(I+1)]<<12|P[v.charCodeAt(I+2)]<<6|P[v.charCodeAt(I+3)],M[H++]=255&Y>>16,M[H++]=255&Y>>8,M[H++]=255&Y;return 2===F?(Y=P[v.charCodeAt(I)]<<2|P[v.charCodeAt(I+1)]>>4,M[H++]=255&Y):1==F&&(Y=P[v.charCodeAt(I)]<<10|P[v.charCodeAt(I+1)]<<4|P[v.charCodeAt(I+2)]>>2,M[H++]=255&Y>>8,M[H++]=255&Y),M},_.fromByteArray=function(v){var I,N=v.length,D=N%3,Y="",F=[],M=16383;// if we have 1 byte left, pad 2 bytes
// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var V=0,H=N-D;V<H;V+=M)F.push(T(v,V,V+M>H?H:V+M));// pad the end with zeros, but make sure to not forget the extra bytes
return 1==D?(I=v[N-1],Y+=B[I>>2],Y+=B[63&I<<4],Y+="=="):2==D&&(I=(v[N-2]<<8)+v[N-1],Y+=B[I>>10],Y+=B[63&I>>4],Y+=B[63&I<<2],Y+="="),F.push(Y),F.join("")};var B=[],P=[],C="undefined"==typeof Uint8Array?Array:Uint8Array,R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var S=0,O=R.length;S<O;++S)B[S]=R[S],P[R.charCodeAt(S)]=S;P["-".charCodeAt(0)]=62,P["_".charCodeAt(0)]=63},{}],6:[function(g,A){function _(C,R,S){function O(M){if(Array.isArray(M))for(var V=0;V<M.length;V++){var H=M[V];if(Array.isArray(H)){O(H);continue}if(("number"==typeof H||"boolean"==typeof H||H instanceof Date||H instanceof RegExp)&&(H=H.toString()),"string"==typeof H){if(U.lastChild&&"#text"===U.lastChild.nodeName){U.lastChild.nodeValue+=H;continue}H=w.createTextNode(H)}H&&H.nodeType&&U.appendChild(H)}}var U;// If an svg tag, it needs a namespace
-1!==P.indexOf(C)&&(R.namespace="http://www.w3.org/2000/svg");// If we are using a namespace
var v=!1;// If adding onload events
if(R.namespace&&(v=R.namespace,delete R.namespace),U=v?w.createElementNS(v,C):w.createElement(C),R.onload||R.onunload){var I=R.onload||function(){},N=R.onunload||function(){};T(U,function(){I(U)},function(){N(U)},// We have to use non-standard `caller` to find who invokes `belCreateElement`
_.caller.caller.caller),delete R.onload,delete R.onunload}// Create the properties
for(var D in R)if(R.hasOwnProperty(D)){var Y=D.toLowerCase(),F=R[D];// Normalize className
// If a property is boolean, set itself to the key
if("classname"===Y&&(Y="class",D="class"),"htmlFor"===D&&(D="for"),B[Y])if("true"===F)F=Y;else if("false"===F)continue;// If a property prefers being set directly vs setAttribute
"on"===Y.slice(0,2)?U[D]=F:v?"xlink:href"===D?U.setAttributeNS("http://www.w3.org/1999/xlink",D,F):U.setAttributeNS(null,D,F):U.setAttribute(D,F)}return O(S),U}var w=g("global/document"),E=g("hyperx"),T=g("on-load"),B={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},P=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];A.exports=E(_),A.exports.createElement=_},{"global/document":10,hyperx:13,"on-load":18}],7:[function(){},{}],8:[function(g,A,_){(function(w){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */"use strict";function E(){return B.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function T(Ee,Te){if(E()<Te)throw new RangeError("Invalid typed array length");return B.TYPED_ARRAY_SUPPORT?(Ee=new Uint8Array(Te),Ee.__proto__=B.prototype):(null===Ee&&(Ee=new B(Te)),Ee.length=Te),Ee}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function B(Ee,Te,Be){if(!B.TYPED_ARRAY_SUPPORT&&!(this instanceof B))return new B(Ee,Te,Be);// Common case.
if("number"==typeof Ee){if("string"==typeof Te)throw new Error("If encoding is specified then the first argument must be a string");return S(this,Ee)}return P(this,Ee,Te,Be)}function P(Ee,Te,Be,Pe){if("number"==typeof Te)throw new TypeError("\"value\" argument must not be a number");return"undefined"!=typeof ArrayBuffer&&Te instanceof ArrayBuffer?v(Ee,Te,Be,Pe):"string"==typeof Te?O(Ee,Te,Be):I(Ee,Te)}/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/function C(Ee){if("number"!=typeof Ee)throw new TypeError("\"size\" argument must be a number");else if(0>Ee)throw new RangeError("\"size\" argument must not be negative")}function R(Ee,Te,Be,Pe){return C(Te),0>=Te?T(Ee,Te):void 0===Be?T(Ee,Te):"string"==typeof Pe?T(Ee,Te).fill(Be,Pe):T(Ee,Te).fill(Be)}/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/function S(Ee,Te){if(C(Te),Ee=T(Ee,0>Te?0:0|N(Te)),!B.TYPED_ARRAY_SUPPORT)for(var Be=0;Be<Te;++Be)Ee[Be]=0;return Ee}/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */function O(Ee,Te,Be){if(("string"!=typeof Be||""===Be)&&(Be="utf8"),!B.isEncoding(Be))throw new TypeError("\"encoding\" must be a valid string encoding");var Pe=0|D(Te,Be);Ee=T(Ee,Pe);var Ce=Ee.write(Te,Be);return Ce!==Pe&&(Ee=Ee.slice(0,Ce)),Ee}function U(Ee,Te){var Be=0>Te.length?0:0|N(Te.length);Ee=T(Ee,Be);for(var Pe=0;Pe<Be;Pe+=1)Ee[Pe]=255&Te[Pe];return Ee}function v(Ee,Te,Be,Pe){// this throws if `array` is not a valid ArrayBuffer
if(Te.byteLength,0>Be||Te.byteLength<Be)throw new RangeError("'offset' is out of bounds");if(Te.byteLength<Be+(Pe||0))throw new RangeError("'length' is out of bounds");return Te=void 0===Be&&void 0===Pe?new Uint8Array(Te):void 0===Pe?new Uint8Array(Te,Be):new Uint8Array(Te,Be,Pe),B.TYPED_ARRAY_SUPPORT?(Ee=Te,Ee.__proto__=B.prototype):Ee=U(Ee,Te),Ee}function I(Ee,Te){if(B.isBuffer(Te)){var Be=0|N(Te.length);return(Ee=T(Ee,Be),0===Ee.length)?Ee:(Te.copy(Ee,0,0,Be),Ee)}if(Te){if("undefined"!=typeof ArrayBuffer&&Te.buffer instanceof ArrayBuffer||"length"in Te)return"number"!=typeof Te.length||me(Te.length)?T(Ee,0):U(Ee,Te);if("Buffer"===Te.type&&xe(Te.data))return U(Ee,Te.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function N(Ee){// Note: cannot use `length < kMaxLength()` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(Ee>=E())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+E().toString(16)+" bytes");return 0|Ee}function D(Ee,Te){if(B.isBuffer(Ee))return Ee.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(Ee)||Ee instanceof ArrayBuffer))return Ee.byteLength;"string"!=typeof Ee&&(Ee=""+Ee);var Be=Ee.length;if(0===Be)return 0;// Use a for loop to avoid recursion
for(var Pe=!1;;)switch(Te){case"ascii":case"latin1":case"binary":return Be;case"utf8":case"utf-8":case void 0:return pe(Ee).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*Be;case"hex":return Be>>>1;case"base64":return ce(Ee).length;default:if(Pe)return pe(Ee).length;// assume utf8
Te=(""+Te).toLowerCase(),Pe=!0;}}function Y(Ee,Te,Be){var Pe=!1;// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===Te||0>Te)&&(Te=0),Te>this.length)return"";if((void 0===Be||Be>this.length)&&(Be=this.length),0>=Be)return"";// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
if(Be>>>=0,Te>>>=0,Be<=Te)return"";for(Ee||(Ee="utf8");!0;)switch(Ee){case"hex":return ee(this,Te,Be);case"utf8":case"utf-8":return Z(this,Te,Be);case"ascii":return W(this,Te,Be);case"latin1":case"binary":return $(this,Te,Be);case"base64":return J(this,Te,Be);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return te(this,Te,Be);default:if(Pe)throw new TypeError("Unknown encoding: "+Ee);Ee=(Ee+"").toLowerCase(),Pe=!0;}}// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
function F(Ee,Te,Be){var Pe=Ee[Te];Ee[Te]=Ee[Be],Ee[Be]=Pe}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function M(Ee,Te,Be,Pe,Ce){// Empty buffer means no match
if(0===Ee.length)return-1;// Normalize byteOffset
if("string"==typeof Be?(Pe=Be,Be=0):2147483647<Be?Be=2147483647:-2147483648>Be&&(Be=-2147483648),Be=+Be,isNaN(Be)&&(Be=Ce?0:Ee.length-1),0>Be&&(Be=Ee.length+Be),Be>=Ee.length){if(Ce)return-1;Be=Ee.length-1}else if(0>Be)if(Ce)Be=0;else return-1;// Normalize val
// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof Te&&(Te=B.from(Te,Pe)),B.isBuffer(Te))// Special case: looking for empty string/buffer always fails
return 0===Te.length?-1:V(Ee,Te,Be,Pe,Ce);if("number"==typeof Te)// Search for a byte value [0-255]
return(Te=255&Te,B.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf)?Ce?Uint8Array.prototype.indexOf.call(Ee,Te,Be):Uint8Array.prototype.lastIndexOf.call(Ee,Te,Be):V(Ee,[Te],Be,Pe,Ce);throw new TypeError("val must be string, number or Buffer")}function V(Ee,Te,Be,Pe,Ce){function Re(Ne,De){return 1===Se?Ne[De]:Ne.readUInt16BE(De*Se)}var Se=1,Oe=Ee.length,Ue=Te.length;if(void 0!==Pe&&(Pe=(Pe+"").toLowerCase(),"ucs2"===Pe||"ucs-2"===Pe||"utf16le"===Pe||"utf-16le"===Pe)){if(2>Ee.length||2>Te.length)return-1;Se=2,Oe/=2,Ue/=2,Be/=2}var ke;if(Ce){var ve=-1;for(ke=Be;ke<Oe;ke++)if(Re(Ee,ke)!==Re(Te,-1==ve?0:ke-ve))-1!=ve&&(ke-=ke-ve),ve=-1;else if(-1==ve&&(ve=ke),ke-ve+1===Ue)return ve*Se}else for(Be+Ue>Oe&&(Be=Oe-Ue),ke=Be;0<=ke;ke--){var Le=!0;for(var Ie=0;Ie<Ue;Ie++)if(Re(Ee,ke+Ie)!==Re(Te,Ie)){Le=!1;break}if(Le)return ke}return-1}function H(Ee,Te,Be,Pe){Be=+Be||0;var Ce=Ee.length-Be;Pe?(Pe=+Pe,Pe>Ce&&(Pe=Ce)):Pe=Ce;// must be an even number of digits
var Re=Te.length;if(0!=Re%2)throw new TypeError("Invalid hex string");Pe>Re/2&&(Pe=Re/2);for(var Se=0;Se<Pe;++Se){var Oe=parseInt(Te.substr(2*Se,2),16);if(isNaN(Oe))return Se;Ee[Be+Se]=Oe}return Se}function z(Ee,Te,Be,Pe){return ye(pe(Te,Ee.length-Be),Ee,Be,Pe)}function G(Ee,Te,Be,Pe){return ye(he(Te),Ee,Be,Pe)}function q(Ee,Te,Be,Pe){return G(Ee,Te,Be,Pe)}function K(Ee,Te,Be,Pe){return ye(ce(Te),Ee,Be,Pe)}function X(Ee,Te,Be,Pe){return ye(ge(Te,Ee.length-Be),Ee,Be,Pe)}function J(Ee,Te,Be){return 0===Te&&Be===Ee.length?be.fromByteArray(Ee):be.fromByteArray(Ee.slice(Te,Be))}function Z(Ee,Te,Be){Be=Math.min(Ee.length,Be);for(var Pe=[],Ce=Te;Ce<Be;){var Re=Ee[Ce],Se=null,Oe=239<Re?4:223<Re?3:191<Re?2:1;if(Ce+Oe<=Be){var Ue,ke,ve,Le;1==Oe?128>Re&&(Se=Re):2==Oe?(Ue=Ee[Ce+1],128==(192&Ue)&&(Le=(31&Re)<<6|63&Ue,127<Le&&(Se=Le))):3==Oe?(Ue=Ee[Ce+1],ke=Ee[Ce+2],128==(192&Ue)&&128==(192&ke)&&(Le=(15&Re)<<12|(63&Ue)<<6|63&ke,2047<Le&&(55296>Le||57343<Le)&&(Se=Le))):4==Oe?(Ue=Ee[Ce+1],ke=Ee[Ce+2],ve=Ee[Ce+3],128==(192&Ue)&&128==(192&ke)&&128==(192&ve)&&(Le=(15&Re)<<18|(63&Ue)<<12|(63&ke)<<6|63&ve,65535<Le&&1114112>Le&&(Se=Le))):void 0}null===Se?(Se=65533,Oe=1):65535<Se&&(Se-=65536,Pe.push(55296|1023&Se>>>10),Se=56320|1023&Se),Pe.push(Se),Ce+=Oe}return Q(Pe)}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
function Q(Ee){var Te=Ee.length;if(Te<=_e)return String.fromCharCode.apply(String,Ee);// avoid extra slice()
// Decode in chunks to avoid "call stack size exceeded".
for(var Be="",Pe=0;Pe<Te;)Be+=String.fromCharCode.apply(String,Ee.slice(Pe,Pe+=_e));return Be}function W(Ee,Te,Be){var Pe="";Be=Math.min(Ee.length,Be);for(var Ce=Te;Ce<Be;++Ce)Pe+=String.fromCharCode(127&Ee[Ce]);return Pe}function $(Ee,Te,Be){var Pe="";Be=Math.min(Ee.length,Be);for(var Ce=Te;Ce<Be;++Ce)Pe+=String.fromCharCode(Ee[Ce]);return Pe}function ee(Ee,Te,Be){var Pe=Ee.length;(!Te||0>Te)&&(Te=0),(!Be||0>Be||Be>Pe)&&(Be=Pe);var Ce="";for(var Re=Te;Re<Be;++Re)Ce+=fe(Ee[Re]);return Ce}function te(Ee,Te,Be){var Pe=Ee.slice(Te,Be),Ce="";for(var Re=0;Re<Pe.length;Re+=2)Ce+=String.fromCharCode(Pe[Re]+256*Pe[Re+1]);return Ce}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function ne(Ee,Te,Be){if(0!=Ee%1||0>Ee)throw new RangeError("offset is not uint");if(Ee+Te>Be)throw new RangeError("Trying to access beyond buffer length")}function oe(Ee,Te,Be,Pe,Ce,Re){if(!B.isBuffer(Ee))throw new TypeError("\"buffer\" argument must be a Buffer instance");if(Te>Ce||Te<Re)throw new RangeError("\"value\" argument is out of bounds");if(Be+Pe>Ee.length)throw new RangeError("Index out of range")}function re(Ee,Te,Be,Pe){0>Te&&(Te=65535+Te+1);for(var Ce=0,Re=Math.min(Ee.length-Be,2);Ce<Re;++Ce)Ee[Be+Ce]=(Te&255<<8*(Pe?Ce:1-Ce))>>>8*(Pe?Ce:1-Ce)}function ae(Ee,Te,Be,Pe){0>Te&&(Te=4294967295+Te+1);for(var Ce=0,Re=Math.min(Ee.length-Be,4);Ce<Re;++Ce)Ee[Be+Ce]=255&Te>>>8*(Pe?Ce:3-Ce)}function ie(Ee,Te,Be,Pe){if(Be+Pe>Ee.length)throw new RangeError("Index out of range");if(0>Be)throw new RangeError("Index out of range")}function se(Ee,Te,Be,Pe,Ce){return Ce||ie(Ee,Te,Be,4,3.4028234663852886e38,-3.4028234663852886e38),Ae.write(Ee,Te,Be,Pe,23,4),Be+4}function le(Ee,Te,Be,Pe,Ce){return Ce||ie(Ee,Te,Be,8,1.7976931348623157e308,-1.7976931348623157e308),Ae.write(Ee,Te,Be,Pe,52,8),Be+8}function de(Ee){// Node converts strings with length < 2 to ''
if(Ee=ue(Ee).replace(we,""),2>Ee.length)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;0!=Ee.length%4;)Ee=Ee+"=";return Ee}function ue(Ee){return Ee.trim?Ee.trim():Ee.replace(/^\s+|\s+$/g,"")}function fe(Ee){return 16>Ee?"0"+Ee.toString(16):Ee.toString(16)}function pe(Ee,Te){Te=Te||1/0;var Be,Pe=Ee.length,Ce=null,Re=[];for(var Se=0;Se<Pe;++Se){// is surrogate component
if(Be=Ee.charCodeAt(Se),55295<Be&&57344>Be){// last char was a lead
if(!Ce){// no lead yet
if(56319<Be){-1<(Te-=3)&&Re.push(239,191,189);continue}else if(Se+1===Pe){-1<(Te-=3)&&Re.push(239,191,189);continue}// valid lead
Ce=Be;continue}// 2 leads in a row
if(56320>Be){-1<(Te-=3)&&Re.push(239,191,189),Ce=Be;continue}// valid surrogate pair
Be=(Ce-55296<<10|Be-56320)+65536}else Ce&&-1<(Te-=3)&&Re.push(239,191,189);// encode utf8
if(Ce=null,128>Be){if(0>(Te-=1))break;Re.push(Be)}else if(2048>Be){if(0>(Te-=2))break;Re.push(192|Be>>6,128|63&Be)}else if(65536>Be){if(0>(Te-=3))break;Re.push(224|Be>>12,128|63&Be>>6,128|63&Be)}else if(1114112>Be){if(0>(Te-=4))break;Re.push(240|Be>>18,128|63&Be>>12,128|63&Be>>6,128|63&Be)}else throw new Error("Invalid code point")}return Re}function he(Ee){var Te=[];for(var Be=0;Be<Ee.length;++Be)// Node's code seems to be doing this and not & 0x7F..
Te.push(255&Ee.charCodeAt(Be));return Te}function ge(Ee,Te){var Be,Pe,Ce,Re=[];for(var Se=0;Se<Ee.length&&!(0>(Te-=2));++Se)Be=Ee.charCodeAt(Se),Pe=Be>>8,Ce=Be%256,Re.push(Ce),Re.push(Pe);return Re}function ce(Ee){return be.toByteArray(de(Ee))}function ye(Ee,Te,Be,Pe){for(var Ce=0;Ce<Pe&&!(Ce+Be>=Te.length||Ce>=Ee.length);++Ce)Te[Ce+Be]=Ee[Ce];return Ce}function me(Ee){return Ee!==Ee;// eslint-disable-line no-self-compare
}var be=g("base64-js"),Ae=g("ieee754"),xe=g("isarray");_.Buffer=B,_.SlowBuffer=function(Te){return+Te!=Te&&(Te=0),B.alloc(+Te)},_.INSPECT_MAX_BYTES=50,B.TYPED_ARRAY_SUPPORT=w.TYPED_ARRAY_SUPPORT===void 0?function(){try{var Te=new Uint8Array(1);return Te.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===Te.foo()&&// typed array instances can be augmented
"function"==typeof Te.subarray&&// chrome 9-10 lack `subarray`
0===Te.subarray(1,1).byteLength;// ie10 has broken `subarray`
}catch(Be){return!1}}():w.TYPED_ARRAY_SUPPORT,_.kMaxLength=E(),B.poolSize=8192,B._augment=function(Ee){return Ee.__proto__=B.prototype,Ee},B.from=function(Ee,Te,Be){return P(null,Ee,Te,Be)},B.TYPED_ARRAY_SUPPORT&&(B.prototype.__proto__=Uint8Array.prototype,B.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&B[Symbol.species]===B&&Object.defineProperty(B,Symbol.species,{value:null,configurable:!0})),B.alloc=function(Ee,Te,Be){return R(null,Ee,Te,Be)},B.allocUnsafe=function(Ee){return S(null,Ee)},B.allocUnsafeSlow=function(Ee){return S(null,Ee)},B.isBuffer=function(Te){return!!(null!=Te&&Te._isBuffer)},B.compare=function(Te,Be){if(!B.isBuffer(Te)||!B.isBuffer(Be))throw new TypeError("Arguments must be Buffers");if(Te===Be)return 0;var Pe=Te.length,Ce=Be.length;for(var Re=0,Se=Math.min(Pe,Ce);Re<Se;++Re)if(Te[Re]!==Be[Re]){Pe=Te[Re],Ce=Be[Re];break}return Pe<Ce?-1:Ce<Pe?1:0},B.isEncoding=function(Te){switch((Te+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1;}},B.concat=function(Te,Be){if(!xe(Te))throw new TypeError("\"list\" argument must be an Array of Buffers");if(0===Te.length)return B.alloc(0);var Pe;if(Be===void 0)for(Be=0,Pe=0;Pe<Te.length;++Pe)Be+=Te[Pe].length;var Ce=B.allocUnsafe(Be),Re=0;for(Pe=0;Pe<Te.length;++Pe){var Se=Te[Pe];if(!B.isBuffer(Se))throw new TypeError("\"list\" argument must be an Array of Buffers");Se.copy(Ce,Re),Re+=Se.length}return Ce},B.byteLength=D,B.prototype._isBuffer=!0,B.prototype.swap16=function(){var Te=this.length;if(0!=Te%2)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var Be=0;Be<Te;Be+=2)F(this,Be,Be+1);return this},B.prototype.swap32=function(){var Te=this.length;if(0!=Te%4)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var Be=0;Be<Te;Be+=4)F(this,Be,Be+3),F(this,Be+1,Be+2);return this},B.prototype.swap64=function(){var Te=this.length;if(0!=Te%8)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var Be=0;Be<Te;Be+=8)F(this,Be,Be+7),F(this,Be+1,Be+6),F(this,Be+2,Be+5),F(this,Be+3,Be+4);return this},B.prototype.toString=function(){var Te=0|this.length;return 0==Te?"":0===arguments.length?Z(this,0,Te):Y.apply(this,arguments)},B.prototype.equals=function(Te){if(!B.isBuffer(Te))throw new TypeError("Argument must be a Buffer");return this===Te||0===B.compare(this,Te)},B.prototype.inspect=function(){var Te="",Be=_.INSPECT_MAX_BYTES;return 0<this.length&&(Te=this.toString("hex",0,Be).match(/.{2}/g).join(" "),this.length>Be&&(Te+=" ... ")),"<Buffer "+Te+">"},B.prototype.compare=function(Te,Be,Pe,Ce,Re){if(!B.isBuffer(Te))throw new TypeError("Argument must be a Buffer");if(void 0===Be&&(Be=0),void 0===Pe&&(Pe=Te?Te.length:0),void 0===Ce&&(Ce=0),void 0===Re&&(Re=this.length),0>Be||Pe>Te.length||0>Ce||Re>this.length)throw new RangeError("out of range index");if(Ce>=Re&&Be>=Pe)return 0;if(Ce>=Re)return-1;if(Be>=Pe)return 1;if(Be>>>=0,Pe>>>=0,Ce>>>=0,Re>>>=0,this===Te)return 0;var Se=Re-Ce,Oe=Pe-Be,Ue=Math.min(Se,Oe),ke=this.slice(Ce,Re),ve=Te.slice(Be,Pe);for(var Le=0;Le<Ue;++Le)if(ke[Le]!==ve[Le]){Se=ke[Le],Oe=ve[Le];break}return Se<Oe?-1:Oe<Se?1:0},B.prototype.includes=function(Te,Be,Pe){return-1!==this.indexOf(Te,Be,Pe)},B.prototype.indexOf=function(Te,Be,Pe){return M(this,Te,Be,Pe,!0)},B.prototype.lastIndexOf=function(Te,Be,Pe){return M(this,Te,Be,Pe,!1)},B.prototype.write=function(Te,Be,Pe,Ce){// Buffer#write(string)
if(void 0===Be)Ce="utf8",Pe=this.length,Be=0;else if(void 0===Pe&&"string"==typeof Be)Ce=Be,Pe=this.length,Be=0;else if(isFinite(Be))Be=0|Be,isFinite(Pe)?(Pe=0|Pe,void 0===Ce&&(Ce="utf8")):(Ce=Pe,Pe=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var Re=this.length-Be;if((void 0===Pe||Pe>Re)&&(Pe=Re),0<Te.length&&(0>Pe||0>Be)||Be>this.length)throw new RangeError("Attempt to write outside buffer bounds");Ce||(Ce="utf8");for(var Se=!1;;)switch(Ce){case"hex":return H(this,Te,Be,Pe);case"utf8":case"utf-8":return z(this,Te,Be,Pe);case"ascii":return G(this,Te,Be,Pe);case"latin1":case"binary":return q(this,Te,Be,Pe);case"base64":// Warning: maxLength not taken into account in base64Write
return K(this,Te,Be,Pe);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return X(this,Te,Be,Pe);default:if(Se)throw new TypeError("Unknown encoding: "+Ce);Ce=(""+Ce).toLowerCase(),Se=!0;}},B.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var _e=4096;B.prototype.slice=function(Te,Be){var Pe=this.length;Te=~~Te,Be=Be===void 0?Pe:~~Be,0>Te?(Te+=Pe,0>Te&&(Te=0)):Te>Pe&&(Te=Pe),0>Be?(Be+=Pe,0>Be&&(Be=0)):Be>Pe&&(Be=Pe),Be<Te&&(Be=Te);var Ce;if(B.TYPED_ARRAY_SUPPORT)Ce=this.subarray(Te,Be),Ce.__proto__=B.prototype;else{var Re=Be-Te;Ce=new B(Re,void 0);for(var Se=0;Se<Re;++Se)Ce[Se]=this[Se+Te]}return Ce},B.prototype.readUIntLE=function(Te,Be,Pe){Te=0|Te,Be=0|Be,Pe||ne(Te,Be,this.length);for(var Ce=this[Te],Re=1,Se=0;++Se<Be&&(Re*=256);)Ce+=this[Te+Se]*Re;return Ce},B.prototype.readUIntBE=function(Te,Be,Pe){Te=0|Te,Be=0|Be,Pe||ne(Te,Be,this.length);for(var Ce=this[Te+--Be],Re=1;0<Be&&(Re*=256);)Ce+=this[Te+--Be]*Re;return Ce},B.prototype.readUInt8=function(Te,Be){return Be||ne(Te,1,this.length),this[Te]},B.prototype.readUInt16LE=function(Te,Be){return Be||ne(Te,2,this.length),this[Te]|this[Te+1]<<8},B.prototype.readUInt16BE=function(Te,Be){return Be||ne(Te,2,this.length),this[Te]<<8|this[Te+1]},B.prototype.readUInt32LE=function(Te,Be){return Be||ne(Te,4,this.length),(this[Te]|this[Te+1]<<8|this[Te+2]<<16)+16777216*this[Te+3]},B.prototype.readUInt32BE=function(Te,Be){return Be||ne(Te,4,this.length),16777216*this[Te]+(this[Te+1]<<16|this[Te+2]<<8|this[Te+3])},B.prototype.readIntLE=function(Te,Be,Pe){Te=0|Te,Be=0|Be,Pe||ne(Te,Be,this.length);for(var Ce=this[Te],Re=1,Se=0;++Se<Be&&(Re*=256);)Ce+=this[Te+Se]*Re;return Re*=128,Ce>=Re&&(Ce-=Math.pow(2,8*Be)),Ce},B.prototype.readIntBE=function(Te,Be,Pe){Te=0|Te,Be=0|Be,Pe||ne(Te,Be,this.length);for(var Ce=Be,Re=1,Se=this[Te+--Ce];0<Ce&&(Re*=256);)Se+=this[Te+--Ce]*Re;return Re*=128,Se>=Re&&(Se-=Math.pow(2,8*Be)),Se},B.prototype.readInt8=function(Te,Be){return Be||ne(Te,1,this.length),128&this[Te]?-1*(255-this[Te]+1):this[Te]},B.prototype.readInt16LE=function(Te,Be){Be||ne(Te,2,this.length);var Pe=this[Te]|this[Te+1]<<8;return 32768&Pe?4294901760|Pe:Pe},B.prototype.readInt16BE=function(Te,Be){Be||ne(Te,2,this.length);var Pe=this[Te+1]|this[Te]<<8;return 32768&Pe?4294901760|Pe:Pe},B.prototype.readInt32LE=function(Te,Be){return Be||ne(Te,4,this.length),this[Te]|this[Te+1]<<8|this[Te+2]<<16|this[Te+3]<<24},B.prototype.readInt32BE=function(Te,Be){return Be||ne(Te,4,this.length),this[Te]<<24|this[Te+1]<<16|this[Te+2]<<8|this[Te+3]},B.prototype.readFloatLE=function(Te,Be){return Be||ne(Te,4,this.length),Ae.read(this,Te,!0,23,4)},B.prototype.readFloatBE=function(Te,Be){return Be||ne(Te,4,this.length),Ae.read(this,Te,!1,23,4)},B.prototype.readDoubleLE=function(Te,Be){return Be||ne(Te,8,this.length),Ae.read(this,Te,!0,52,8)},B.prototype.readDoubleBE=function(Te,Be){return Be||ne(Te,8,this.length),Ae.read(this,Te,!1,52,8)},B.prototype.writeUIntLE=function(Te,Be,Pe,Ce){if(Te=+Te,Be=0|Be,Pe=0|Pe,!Ce){var Re=Math.pow(2,8*Pe)-1;oe(this,Te,Be,Pe,Re,0)}var Se=1,Oe=0;for(this[Be]=255&Te;++Oe<Pe&&(Se*=256);)this[Be+Oe]=255&Te/Se;return Be+Pe},B.prototype.writeUIntBE=function(Te,Be,Pe,Ce){if(Te=+Te,Be=0|Be,Pe=0|Pe,!Ce){var Re=Math.pow(2,8*Pe)-1;oe(this,Te,Be,Pe,Re,0)}var Se=Pe-1,Oe=1;for(this[Be+Se]=255&Te;0<=--Se&&(Oe*=256);)this[Be+Se]=255&Te/Oe;return Be+Pe},B.prototype.writeUInt8=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,1,255,0),B.TYPED_ARRAY_SUPPORT||(Te=Math.floor(Te)),this[Be]=255&Te,Be+1},B.prototype.writeUInt16LE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,2,65535,0),B.TYPED_ARRAY_SUPPORT?(this[Be]=255&Te,this[Be+1]=Te>>>8):re(this,Te,Be,!0),Be+2},B.prototype.writeUInt16BE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,2,65535,0),B.TYPED_ARRAY_SUPPORT?(this[Be]=Te>>>8,this[Be+1]=255&Te):re(this,Te,Be,!1),Be+2},B.prototype.writeUInt32LE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,4,4294967295,0),B.TYPED_ARRAY_SUPPORT?(this[Be+3]=Te>>>24,this[Be+2]=Te>>>16,this[Be+1]=Te>>>8,this[Be]=255&Te):ae(this,Te,Be,!0),Be+4},B.prototype.writeUInt32BE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,4,4294967295,0),B.TYPED_ARRAY_SUPPORT?(this[Be]=Te>>>24,this[Be+1]=Te>>>16,this[Be+2]=Te>>>8,this[Be+3]=255&Te):ae(this,Te,Be,!1),Be+4},B.prototype.writeIntLE=function(Te,Be,Pe,Ce){if(Te=+Te,Be=0|Be,!Ce){var Re=Math.pow(2,8*Pe-1);oe(this,Te,Be,Pe,Re-1,-Re)}var Se=0,Oe=1,Ue=0;for(this[Be]=255&Te;++Se<Pe&&(Oe*=256);)0>Te&&0==Ue&&0!==this[Be+Se-1]&&(Ue=1),this[Be+Se]=255&(Te/Oe>>0)-Ue;return Be+Pe},B.prototype.writeIntBE=function(Te,Be,Pe,Ce){if(Te=+Te,Be=0|Be,!Ce){var Re=Math.pow(2,8*Pe-1);oe(this,Te,Be,Pe,Re-1,-Re)}var Se=Pe-1,Oe=1,Ue=0;for(this[Be+Se]=255&Te;0<=--Se&&(Oe*=256);)0>Te&&0==Ue&&0!==this[Be+Se+1]&&(Ue=1),this[Be+Se]=255&(Te/Oe>>0)-Ue;return Be+Pe},B.prototype.writeInt8=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,1,127,-128),B.TYPED_ARRAY_SUPPORT||(Te=Math.floor(Te)),0>Te&&(Te=255+Te+1),this[Be]=255&Te,Be+1},B.prototype.writeInt16LE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,2,32767,-32768),B.TYPED_ARRAY_SUPPORT?(this[Be]=255&Te,this[Be+1]=Te>>>8):re(this,Te,Be,!0),Be+2},B.prototype.writeInt16BE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,2,32767,-32768),B.TYPED_ARRAY_SUPPORT?(this[Be]=Te>>>8,this[Be+1]=255&Te):re(this,Te,Be,!1),Be+2},B.prototype.writeInt32LE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,4,2147483647,-2147483648),B.TYPED_ARRAY_SUPPORT?(this[Be]=255&Te,this[Be+1]=Te>>>8,this[Be+2]=Te>>>16,this[Be+3]=Te>>>24):ae(this,Te,Be,!0),Be+4},B.prototype.writeInt32BE=function(Te,Be,Pe){return Te=+Te,Be=0|Be,Pe||oe(this,Te,Be,4,2147483647,-2147483648),0>Te&&(Te=4294967295+Te+1),B.TYPED_ARRAY_SUPPORT?(this[Be]=Te>>>24,this[Be+1]=Te>>>16,this[Be+2]=Te>>>8,this[Be+3]=255&Te):ae(this,Te,Be,!1),Be+4},B.prototype.writeFloatLE=function(Te,Be,Pe){return se(this,Te,Be,!0,Pe)},B.prototype.writeFloatBE=function(Te,Be,Pe){return se(this,Te,Be,!1,Pe)},B.prototype.writeDoubleLE=function(Te,Be,Pe){return le(this,Te,Be,!0,Pe)},B.prototype.writeDoubleBE=function(Te,Be,Pe){return le(this,Te,Be,!1,Pe)},B.prototype.copy=function(Te,Be,Pe,Ce){// Copy 0 bytes; we're done
if(Pe||(Pe=0),Ce||0===Ce||(Ce=this.length),Be>=Te.length&&(Be=Te.length),Be||(Be=0),0<Ce&&Ce<Pe&&(Ce=Pe),Ce===Pe)return 0;if(0===Te.length||0===this.length)return 0;// Fatal error conditions
if(0>Be)throw new RangeError("targetStart out of bounds");if(0>Pe||Pe>=this.length)throw new RangeError("sourceStart out of bounds");if(0>Ce)throw new RangeError("sourceEnd out of bounds");// Are we oob?
Ce>this.length&&(Ce=this.length),Te.length-Be<Ce-Pe&&(Ce=Te.length-Be+Pe);var Se,Re=Ce-Pe;if(this===Te&&Pe<Be&&Be<Ce)// descending copy from end
for(Se=Re-1;0<=Se;--Se)Te[Se+Be]=this[Se+Pe];else if(1e3>Re||!B.TYPED_ARRAY_SUPPORT)// ascending copy from start
for(Se=0;Se<Re;++Se)Te[Se+Be]=this[Se+Pe];else Uint8Array.prototype.set.call(Te,this.subarray(Pe,Pe+Re),Be);return Re},B.prototype.fill=function(Te,Be,Pe,Ce){// Handle string cases:
if("string"==typeof Te){if("string"==typeof Be?(Ce=Be,Be=0,Pe=this.length):"string"==typeof Pe&&(Ce=Pe,Pe=this.length),1===Te.length){var Re=Te.charCodeAt(0);256>Re&&(Te=Re)}if(void 0!==Ce&&"string"!=typeof Ce)throw new TypeError("encoding must be a string");if("string"==typeof Ce&&!B.isEncoding(Ce))throw new TypeError("Unknown encoding: "+Ce)}else"number"==typeof Te&&(Te=255&Te);// Invalid ranges are not set to a default, so can range check early.
if(0>Be||this.length<Be||this.length<Pe)throw new RangeError("Out of range index");if(Pe<=Be)return this;Be=Be>>>0,Pe=Pe===void 0?this.length:Pe>>>0,Te||(Te=0);var Se;if("number"==typeof Te)for(Se=Be;Se<Pe;++Se)this[Se]=Te;else{var Oe=B.isBuffer(Te)?Te:pe(new B(Te,Ce).toString()),Ue=Oe.length;for(Se=0;Se<Pe-Be;++Se)this[Se+Be]=Oe[Se%Ue]}return this};// HELPER FUNCTIONS
// ================
var we=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{"base64-js":5,ieee754:14,isarray:15}],9:[function(g,A){function _(E,T){E=E.slice(),T=T.slice();let B=[],P=[],C=[],R=[],S=[],O=E.join("").replace(/ /g,""),U=O.slice(O.indexOf("<")+1,O.indexOf(">")),v="",I={},N=0;for(;N<E.length;)v+=E[N],I[v.length+"-"+N]=T[N],N++;let D=`<${U}>`,Y=v.indexOf(D),F=`</${U}>`,M=v.lastIndexOf(F);if(-1===Y)throw new Error("Cannot find open position.");if(-1===M)throw new Error("Cannot find close position.");for(let H in I){let z=+H.slice(0,H.indexOf("-")),G=I[H];if(z<Y)S.push(G);else if(z>Y&&z<M)R.push(G);else if(z>M)P.push(G);else throw new Error("Parser error, cannot assign value.")}N=0;for(let V=0;N<E.length;){let H=E[N],z=()=>{if(!(V>=v.length)){if(V>=Y){if(V>M)B.push(H);else{if(-1!==H.indexOf(F)){let G=H.indexOf(F)+F.length+1;return C.push(H.slice(0,G)),H=H.slice(G),V+=G,z()}C.push(H)}}else if(-1!==H.indexOf(D)){let G=H.indexOf(D);return H=H.slice(G),V=V+G,z()}V=V+H.length}};z(),N++}// TODO: type checking on constructors and destructors
return{name:U,constructors:S,shadowStrings:B,shadowValues:P,elementStrings:C,elementValues:R}}var w=g("yo-yo");A.exports=function(T,...B){function P(R){var S=C.elementValues.map(O=>{return O.node?O.node:"function"==typeof O?O.apply(this,R):O});return S}let C=_(T,B);return function(){var S=Array.prototype.slice.call(arguments),O=w(C.elementStrings,...P(S));return C.constructors.forEach(U=>U(...[O].concat(S))),O.yoyoOpts={},O.update=function(){O.onupdate&&O.onupdate.apply(O,arguments);let U=O.processUpdate.apply(O,arguments);w.update(O,U,O.yoyoOpts)},O.processUpdate=function(){var U=Array.prototype.slice.call(arguments),v=[...P(U)],I=w(C.elementStrings,...v);return I},O._funkView=!0,O}},A.exports.attr=E=>T=>T[E]},{"yo-yo":24}],10:[function(g,A){(function(_){var w="undefined"==typeof _?"undefined"==typeof window?{}:window:_,E=g("min-document");if("undefined"!=typeof document)A.exports=document;else{var T=w["__GLOBAL_DOCUMENT_CACHE@4"];T||(T=w["__GLOBAL_DOCUMENT_CACHE@4"]=E),A.exports=T}}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{"min-document":7}],11:[function(g,A){(function(_){A.exports="undefined"==typeof window?"undefined"==typeof _?"undefined"==typeof self?{}:self:_:window}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{}],12:[function(g,A){A.exports=function(E){return function(T,B,P){for(var C in B)C in _&&(B[_[C]]=B[C],delete B[C]);return E(T,B,P)}};var _={"class":"className","for":"htmlFor","http-equiv":"httpEquiv"}},{}],13:[function(g,A){function _(V){return V===I||V===N}function w(V){return M.test(V)}var E=g("hyperscript-attribute-to-property"),T=0,B=1,P=2,C=3,R=4,S=5,O=6,U=7,v=8,I=9,N=10,D=11,Y=12;A.exports=function(V,H){function z(q){if("function"==typeof q)return q;return"string"==typeof q?q:q&&"object"==typeof q?q:G("",q)}V=E(V),H||(H={});var G=H.concat||function(q,K){return q+""+(K+"")};return function(q){function K(fe){var pe=[];X==U&&(X=R);for(var he=0;he<fe.length;he++){var ge=fe.charAt(he);X==B&&"<"===ge?(J.length&&pe.push([B,J]),J="",X=P):">"!==ge||_(X)?X==B?J+=ge:X==P&&/\s/.test(ge)?(pe.push([P,J]),J="",X=R):X==P?J+=ge:X==R&&/[\w-]/.test(ge)?(X=S,J=ge):X==R&&/\s/.test(ge)?(J.length&&pe.push([S,J]),pe.push([Y])):X==S&&/\s/.test(ge)?(pe.push([S,J]),J="",X=O):X==S&&"="===ge?(pe.push([S,J],[D]),J="",X=U):X==S?J+=ge:(X==O||X==R)&&"="===ge?(pe.push([D]),X=U):X!=O&&X!=R||/\s/.test(ge)?X==U&&"\""===ge?X=N:X==U&&"'"===ge?X=I:X==N&&"\""===ge?(pe.push([v,J],[Y]),J="",X=R):X==I&&"'"===ge?(pe.push([v,J],[Y]),J="",X=R):X!=U||/\s/.test(ge)?X==v&&/\s/.test(ge)?(pe.push([v,J],[Y]),J="",X=R):(X==v||X==I||X==N)&&(J+=ge):(X=v,he--):(pe.push([Y]),/[\w-]/.test(ge)?(J+=ge,X=S):X=R):(X==P?pe.push([P,J]):X==S?pe.push([S,J]):X==v&&J.length&&pe.push([v,J]),pe.push([C]),J="",X=B)}return X==B&&J.length?(pe.push([B,J]),J=""):X==v&&J.length?(pe.push([v,J]),J=""):X==N&&J.length?(pe.push([v,J]),J=""):X==I&&J.length?(pe.push([v,J]),J=""):X==S&&(pe.push([S,J]),J=""),pe}var X=B,J="",Z=arguments.length,Q=[];for(var W=0;W<q.length;W++)if(W<Z-1){var $=arguments[W+1],ee=K(q[W]),te=X;te==N&&(te=v),te==I&&(te=v),te==U&&(te=v),te==R&&(te=S),ee.push([T,te,$]),Q.push.apply(Q,ee)}else Q.push.apply(Q,K(q[W]));var ne=[null,{},[]],oe=[[ne,-1]];for(var W=0;W<Q.length;W++){var re=oe[oe.length-1][0],ee=Q[W],ae=ee[0];if(ae===P&&/^\//.test(ee[1])){var ie=oe[oe.length-1][1];1<oe.length&&(oe.pop(),oe[oe.length-1][0][2][ie]=V(re[0],re[1],re[2].length?re[2]:void 0))}else if(ae===P){var se=[ee[1],{},[]];re[2].push(se),oe.push([se,re[2].length-1])}else if(ae===S||ae===T&&ee[1]===S){for(var le="";W<Q.length;W++)if(Q[W][0]===S)le=G(le,Q[W][1]);else if(Q[W][0]!==T||Q[W][1]!==S)break;else if("object"==typeof Q[W][2]&&!le)for(var de in Q[W][2])Q[W][2].hasOwnProperty(de)&&!re[1][de]&&(re[1][de]=Q[W][2][de]);else le=G(le,Q[W][2]);Q[W][0]===D&&W++;for(var ue=W;W<Q.length;W++)if(Q[W][0]===v||Q[W][0]===S)re[1][le]=re[1][le]?G(re[1][le],Q[W][1]):z(Q[W][1]);else if(Q[W][0]===T&&(Q[W][1]===v||Q[W][1]===S))re[1][le]=re[1][le]?G(re[1][le],Q[W][2]):z(Q[W][2]);else{le.length&&!re[1][le]&&W===ue&&(Q[W][0]===C||Q[W][0]===Y)&&(re[1][le]=le.toLowerCase());break}}else if(ae===S)re[1][ee[1]]=!0;else if(ae===T&&ee[1]===S)re[1][ee[2]]=!0;else if(ae===C){if(w(re[0])&&oe.length){var ie=oe[oe.length-1][1];oe.pop(),oe[oe.length-1][0][2][ie]=V(re[0],re[1],re[2].length?re[2]:void 0)}}else if(ae===T&&ee[1]===B)void 0===ee[2]||null===ee[2]?ee[2]="":!ee[2]&&(ee[2]=G("",ee[2])),Array.isArray(ee[2][0])?re[2].push.apply(re[2],ee[2]):re[2].push(ee[2]);else if(ae===B)re[2].push(ee[1]);else if(ae!==D&&ae!==Y)throw new Error("unhandled: "+ae)}if(1<ne[2].length&&/^\s*$/.test(ne[2][0])&&ne[2].shift(),2<ne[2].length||2===ne[2].length&&/\S/.test(ne[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(ne[2][0])&&"string"==typeof ne[2][0][0]&&Array.isArray(ne[2][0][2])&&(ne[2][0]=V(ne[2][0][0],ne[2][0][1],ne[2][0][2])),ne[2][0]}};var F=Object.prototype.hasOwnProperty,M=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7F-\uFFFF_:-]+)*$")},{"hyperscript-attribute-to-property":12}],14:[function(g,A,_){_.read=function(w,E,T,B,P){var C,R,S=8*P-B-1,O=(1<<S)-1,U=O>>1,v=-7,I=T?P-1:0,N=T?-1:1,D=w[E+I];for(I+=N,C=D&(1<<-v)-1,D>>=-v,v+=S;0<v;C=256*C+w[E+I],I+=N,v-=8);for(R=C&(1<<-v)-1,C>>=-v,v+=B;0<v;R=256*R+w[E+I],I+=N,v-=8);if(0===C)C=1-U;else{if(C===O)return R?NaN:(D?-1:1)*(1/0);R=R+Math.pow(2,B),C=C-U}return(D?-1:1)*R*Math.pow(2,C-B)},_.write=function(w,E,T,B,P,C){var R,S,O,U=8*C-P-1,v=(1<<U)-1,I=v>>1,N=23===P?Math.pow(2,-24)-Math.pow(2,-77):0,D=B?0:C-1,Y=B?1:-1,F=0>E||0===E&&0>1/E?1:0;for(E=Math.abs(E),isNaN(E)||E===1/0?(S=isNaN(E)?1:0,R=v):(R=Math.floor(Math.log(E)/Math.LN2),1>E*(O=Math.pow(2,-R))&&(R--,O*=2),E+=1<=R+I?N/O:N*Math.pow(2,1-I),2<=E*O&&(R++,O/=2),R+I>=v?(S=0,R=v):1<=R+I?(S=(E*O-1)*Math.pow(2,P),R=R+I):(S=E*Math.pow(2,I-1)*Math.pow(2,P),R=0));8<=P;w[T+D]=255&S,D+=Y,S/=256,P-=8);for(R=R<<P|S,U+=P;0<U;w[T+D]=255&R,D+=Y,R/=256,U-=8);w[T+D-Y]|=128*F}},{}],15:[function(g,A){var _={}.toString;A.exports=Array.isArray||function(w){return"[object Array]"==_.call(w)}},{}],16:[function(g,A){(function(_){/**
 * Parse a magnet URI and return an object of keys/values
 *
 * @param  {string} uri
 * @return {Object} parsed uri
 */function w(P){var C={},R=P.split("magnet:?")[1],S=R&&0<=R.length?R.split("&"):[];// Support 'magnet:' and 'stream-magnet:' uris
S.forEach(function(v){var I=v.split("=");// This keyval is invalid, skip it
if(2===I.length){var N=I[0],D=I[1];// Clean up torrent name
// If there are repeated parameters, return an array of values
if("dn"===N&&(D=decodeURIComponent(D).replace(/\+/g," ")),("tr"===N||"xs"===N||"as"===N||"ws"===N)&&(D=decodeURIComponent(D)),"kt"===N&&(D=decodeURIComponent(D).split("+")),"ix"===N&&(D=+D),!C[N])C[N]=D;else if(Array.isArray(C[N]))C[N].push(D);else{var Y=C[N];C[N]=[Y,D]}}// Address tracker (tr), exact source (xs), and acceptable source (as) are encoded
// URIs, so decode them
// Return keywords as an array
// Cast file index (ix) to a number
});// Convenience properties for parity with `parse-torrent-file` module
var O;if(C.xt){var U=Array.isArray(C.xt)?C.xt:[C.xt];U.forEach(function(v){if(O=v.match(/^urn:btih:(.{40})/))C.infoHash=O[1].toLowerCase();else if(O=v.match(/^urn:btih:(.{32})/)){var I=E.decode(O[1]);C.infoHash=new _(I,"binary").toString("hex")}})}return C.infoHash&&(C.infoHashBuffer=new _(C.infoHash,"hex")),C.dn&&(C.name=C.dn),C.kt&&(C.keywords=C.kt),C.announce="string"==typeof C.tr?[C.tr]:Array.isArray(C.tr)?C.tr:[],C.urlList=[],("string"==typeof C.as||Array.isArray(C.as))&&(C.urlList=C.urlList.concat(C.as)),("string"==typeof C.ws||Array.isArray(C.ws))&&(C.urlList=C.urlList.concat(C.ws)),B(C.announce),B(C.urlList),C}A.exports=w,A.exports.decode=w,A.exports.encode=function(C){C=T(C),C.infoHashBuffer&&(C.xt="urn:btih:"+C.infoHashBuffer.toString("hex")),C.infoHash&&(C.xt="urn:btih:"+C.infoHash),C.name&&(C.dn=C.name),C.keywords&&(C.kt=C.keywords),C.announce&&(C.tr=C.announce),C.urlList&&(C.ws=C.urlList,delete C.as);var R="magnet:?";return Object.keys(C).filter(function(S){return 2===S.length}).forEach(function(S,O){var U=Array.isArray(C[S])?C[S]:[C[S]];U.forEach(function(v,I){(0<O||0<I)&&("kt"!==S||0===I)&&(R+="&"),"dn"===S&&(v=encodeURIComponent(v).replace(/%20/g,"+")),("tr"===S||"xs"===S||"as"===S||"ws"===S)&&(v=encodeURIComponent(v)),"kt"===S&&(v=encodeURIComponent(v)),R+="kt"===S&&0<I?"+"+v:S+"="+v})}),R};var E=g("thirty-two"),T=g("xtend"),B=g("uniq")}).call(this,g("buffer").Buffer)},{buffer:8,"thirty-two":19,uniq:21,xtend:23}],17:[function(g,A){"use strict";// Create a range object for efficently rendering strings to elements.
function _(F){!S&&O.createRange&&(S=O.createRange(),S.selectNode(O.body));var M;return S&&S.createContextualFragment?M=S.createContextualFragment(F):(M=O.createElement("body"),M.innerHTML=F),M.childNodes[0]}function w(F,M,V){F[V]!==M[V]&&(F[V]=M[V],F[V]?F.setAttribute(V,""):F.removeAttribute(V,""))}function E(){}/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */function T(F,M){var V=F.nodeName,H=M.nodeName;return!(V!==H)||M.actualize&&91>V.charCodeAt(0)&&/* from tag name is upper case */90<H.charCodeAt(0)/* target tag name is lower case */&&V===H.toUpperCase()}/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */function B(F,M){return M&&"http://www.w3.org/1999/xhtml"!==M?O.createElementNS(M,F):O.createElement(F)}/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */function P(F,M){if(M.assignAttributes)M.assignAttributes(F);else{var V=M.attributes,H,z,G,q,K,X;for(H=V.length-1;0<=H;--H)z=V[H],G=z.name,q=z.namespaceURI,K=z.value,q?(G=z.localName||G,X=F.getAttributeNS(q,G),X!=K&&F.setAttributeNS(q,G,K)):(X=F.getAttribute(G),X!=K&&F.setAttribute(G,K));// Remove any extra attributes found on the original DOM element that
// weren't found on the target element.
for(V=F.attributes,H=V.length-1;0<=H;--H)z=V[H],!1!==z.specified&&(G=z.name,q=z.namespaceURI,q?(G=z.localName||G,!D(M,q,G)&&F.removeAttributeNS(q,G)):!D(M,null,G)&&F.removeAttribute(G))}}/**
 * Copies the children of one DOM element to another DOM element
 */function C(F,M){for(var V=F.firstChild;V;){var H=V.nextSibling;M.appendChild(V),V=H}return M}function R(F){return F.id}var S,O="undefined"!=typeof document&&document,U=O?O.body||O.createElement("div"):{},v=1,I=3,N=8,D;// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
D=U.hasAttributeNS?function(F,M,V){return F.hasAttributeNS(M,V)}:U.hasAttribute?function(F,M,V){return F.hasAttribute(V)}:function(F,M,V){return!!F.getAttributeNode(V)};var Y={/**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */OPTION:function(F,M){w(F,M,"selected")},/**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */INPUT:function(F,M){w(F,M,"checked"),w(F,M,"disabled"),F.value!==M.value&&(F.value=M.value),D(M,null,"value")||F.removeAttribute("value")},TEXTAREA:function(F,M){var V=M.value;F.value!==V&&(F.value=V),F.firstChild&&(F.firstChild.nodeValue=V)}};A.exports=function(M,V,H){function z(ge){se?se.push(ge):se=[ge]}function G(ge,ce){if(ge.nodeType===v)for(var ye=ge.firstChild;ye;){var me=void 0;ce&&(me=Q(ye))?z(me):(oe(ye),ye.firstChild&&G(ye,ce)),ye=ye.nextSibling}}/**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */function q(ge,ce,ye){!1===ne(ge)||(ce&&ce.removeChild(ge),oe(ge),G(ge,ye))}// // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
// function indexTree(root) {
//     var treeWalker = document.createTreeWalker(
//         root,
//         NodeFilter.SHOW_ELEMENT);
//
//     var el;
//     while((el = treeWalker.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
// // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
//
// function indexTree(node) {
//     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
//     var el;
//     while((el = nodeIterator.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
function K(ge){if(ge.nodeType===v)for(var ce=ge.firstChild;ce;){var ye=Q(ce);ye&&(ie[ye]=ce),K(ce),ce=ce.nextSibling}}function X(ge){$(ge);for(var ce=ge.firstChild;ce;){var ye=ce.nextSibling,me=Q(ce);if(me){var be=ie[me];be&&T(ce,be)&&(ce.parentNode.replaceChild(be,ce),J(be,ce))}X(ce),ce=ye}}function J(ge,ce,ye){var be,me=Q(ce);if(me&&delete ie[me],!(V.isSameNode&&V.isSameNode(M))){if(!ye){if(!1===ee(ge,ce))return;if(P(ge,ce),te(ge),!1===re(ge,ce))return}if("TEXTAREA"!==ge.nodeName){var _e,we,Ee,Te,Ae=ce.firstChild,xe=ge.firstChild;outer:for(;Ae;){for(Ee=Ae.nextSibling,_e=Q(Ae);xe;){if(we=xe.nextSibling,Ae.isSameNode&&Ae.isSameNode(xe)){Ae=Ee,xe=we;continue outer}be=Q(xe);var Be=xe.nodeType,Pe=void 0;if(Be===Ae.nodeType&&(Be===v?(_e?_e!=be&&((Te=ie[_e])?xe.nextSibling===Te?Pe=!1:(ge.insertBefore(Te,xe),be?z(be):q(xe,ge,!0/* skip keyed nodes */),we=xe.nextSibling,xe=Te):Pe=!1):be&&(Pe=!1),Pe=!1!==Pe&&T(xe,Ae),Pe&&J(xe,Ae)):(Be===I||Be==N)&&(Pe=!0,xe.nodeValue=Ae.nodeValue)),Pe){Ae=Ee,xe=we;continue outer}// No compatible match so remove the old node from the DOM and continue trying to find a
// match in the original DOM. However, we only do this if the from node is not keyed
// since it is possible that a keyed node might match up with a node somewhere else in the
// target tree and we don't want to discard it just yet since it still might find a
// home in the final DOM tree. After everything is done we will remove any keyed nodes
// that didn't find a home
be?z(be):q(xe,ge,!0/* skip keyed nodes */),xe=we}// If we got this far then we did not find a candidate match for
// our "to node" and we exhausted all of the children "from"
// nodes. Therefore, we will just append the current "to" node
// to the end
if(_e&&(Te=ie[_e])&&T(Te,Ae))ge.appendChild(Te),J(Te,Ae);else{var Ce=W(Ae);!1!==Ce&&(Ce&&(Ae=Ce),Ae.actualize&&(Ae=Ae.actualize(ge.ownerDocument||O)),ge.appendChild(Ae),X(Ae))}Ae=Ee,xe=we}// We have processed all of the "to nodes". If curFromNodeChild is
// non-null then we still have some from nodes left over that need
// to be removed
for(;xe;)we=xe.nextSibling,(be=Q(xe))?z(be):q(xe,ge,!0/* skip keyed nodes */),xe=we}var Re=Y[ge.nodeName];Re&&Re(ge,ce)}}// END: morphEl(...)
if(H||(H={}),"string"==typeof V)if("#document"===M.nodeName||"HTML"===M.nodeName){var Z=V;V=O.createElement("html"),V.innerHTML=Z}else V=_(V);var se,Q=H.getNodeKey||R,W=H.onBeforeNodeAdded||E,$=H.onNodeAdded||E,ee=H.onBeforeElUpdated||E,te=H.onElUpdated||E,ne=H.onBeforeNodeDiscarded||E,oe=H.onNodeDiscarded||E,re=H.onBeforeElChildrenUpdated||E,ae=!0===H.childrenOnly,ie={};// This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
K(M);var le=M,de=le.nodeType,ue=V.nodeType;if(!ae)// Handle the case where we are given two DOM nodes that are not
// compatible (e.g. <div> --> <span> or <div> --> TEXT)
if(de===v)ue===v?!T(M,V)&&(oe(M),le=C(M,B(V.nodeName,V.namespaceURI))):le=V;else if(de===I||de===N){// Text or comment node
if(ue===de)return le.nodeValue=V.nodeValue,le;le=V}if(le===V)oe(M);else// We now need to loop over any keyed nodes that might need to be
// removed. We only do the removal if we know that the keyed node
// never found a match. When a keyed node is matched up we remove
// it out of fromNodesLookup and we use fromNodesLookup to determine
// if a keyed node has been matched up or not
if(J(le,V,ae),se)for(var fe=0,pe=se.length;fe<pe;fe++){var he=ie[se[fe]];he&&q(he,he.parentNode,!1)}return!ae&&le!==M&&M.parentNode&&(le.actualize&&(le=le.actualize(M.ownerDocument||O)),M.parentNode.replaceChild(le,M)),le}},{}],18:[function(g,A){function _(I,N){R[I][0]&&0===R[I][2]&&(R[I][0](N),R[I][2]=1)}function w(I,N){R[I][1]&&1===R[I][2]&&(R[I][1](N),R[I][2]=0)}function E(I,N,D){var Y=I.target.getAttribute(O);return T(I.oldValue,Y)?void(R[Y]=R[I.oldValue]):void(R[I.oldValue]&&D(I.oldValue,I.target),R[Y]&&N(Y,I.target))}function T(I,N){return I&&N&&R[I][3]===R[N][3]}function B(I,N){var D=Object.keys(R);for(var Y=0;Y<I.length;Y++){if(I[Y]&&I[Y].getAttribute&&I[Y].getAttribute(O)){var F=I[Y].getAttribute(O);D.forEach(function(M){F===M&&N(M,I[Y])})}0<I[Y].childNodes.length&&B(I[Y].childNodes,N)}}/* global MutationObserver */var P=g("global/document"),C=g("global/window"),R=Object.create(null),S="onloadid"+(new Date%9e6).toString(36),O="data-"+S,U=0;if(C&&C.MutationObserver){var v=new MutationObserver(function(I){if(!(1>Object.keys(R).length))for(var N=0;N<I.length;N++){if(I[N].attributeName===O){E(I[N],_,w);continue}B(I[N].removedNodes,w),B(I[N].addedNodes,_)}});v.observe(P.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[O]})}A.exports=function I(N,D,Y,F){return D=D||function(){},Y=Y||function(){},N.setAttribute(O,"o"+U),R["o"+U]=[D,Y,0,F||I.caller],U+=1,N}},{"global/document":10,"global/window":11}],19:[function(g,A,_){/*                                                                              
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in      
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
*/var w=g("./thirty-two");_.encode=w.encode,_.decode=w.decode},{"./thirty-two":20}],20:[function(g,A,_){(function(w){/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/"use strict";function E(B){var P=Math.floor(B.length/5);return 0==B.length%5?P:P+1}var T=[255,255,26,27,28,29,30,31,255,255,255,255,255,255,255,255,255,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,255,255,255,255,255,255,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,255,255,255,255,255];_.encode=function(B){w.isBuffer(B)||(B=new w(B));/* byte by byte isn't as pretty as quintet by quintet but tests a bit
        faster. will have to revisit. */for(var P=0,C=0,R=0,S=0,O=new w(8*E(B));P<B.length;){var U=B[P];3<R?(S=U&255>>R,R=(R+5)%8,S=S<<R|(P+1<B.length?B[P+1]:0)>>8-R,P++):(S=31&U>>8-(R+5),R=(R+5)%8,0==R&&P++),O[C]="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(S),C++}for(P=C;P<O.length;P++)O[P]=61;//'='.charCodeAt(0)
return O},_.decode=function(B){var P=0,C=0,R,S=0;w.isBuffer(B)||(B=new w(B));var O=new w(Math.ceil(5*B.length/8));/* byte by byte isn't as pretty as octet by octet but tests a bit
        faster. will have to revisit. */for(var U=0;U<B.length&&!(61===B[U]);U++){var v=B[U]-48;if(v<T.length)C=T[v],3>=P?(P=(P+5)%8,0==P?(R|=C,O[S]=R,S++,R=0):R|=255&C<<8-P):(P=(P+5)%8,R|=255&C>>>P,O[S]=R,S++,R=255&C<<8-P);else throw new Error("Invalid input - it is not base32 encoded string")}return O.slice(0,S)}}).call(this,g("buffer").Buffer)},{buffer:8}],21:[function(g,A){"use strict";function _(E,T){var B=1,P=E.length,C=E[0],R=E[0];for(var S=1;S<P;++S)if(R=C,C=E[S],T(C,R)){if(S===B){B++;continue}E[B++]=C}return E.length=B,E}function w(E){var T=1,B=E.length,P=E[0],C=E[0];for(var R=1;R<B;++R,C=P)if(C=P,P=E[R],P!==C){if(R===T){T++;continue}E[T++]=P}return E.length=T,E}A.exports=function(T,B,P){return 0===T.length?T:B?(P||T.sort(B),_(T,B)):(P||T.sort(),w(T))}},{}],22:[function(){(function(g){"use strict";function A(G){if("string"!=typeof G&&(G=G+""),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(G))throw new TypeError("Invalid character in header field name");return G.toLowerCase()}function _(G){return"string"!=typeof G&&(G=G+""),G}// Build a destructive iterator for the value list
function w(G){var q={next:function(){var K=G.shift();return{done:void 0===K,value:K}}};return Y.iterable&&(q[Symbol.iterator]=function(){return q}),q}function E(G){this.map={},G instanceof E?G.forEach(function(q,K){this.append(K,q)},this):G&&Object.getOwnPropertyNames(G).forEach(function(q){this.append(q,G[q])},this)}function T(G){return G.bodyUsed?Promise.reject(new TypeError("Already read")):void(G.bodyUsed=!0)}function B(G){return new Promise(function(q,K){G.onload=function(){q(G.result)},G.onerror=function(){K(G.error)}})}function P(G){var q=new FileReader,K=B(q);return q.readAsArrayBuffer(G),K}function C(G){var q=new FileReader,K=B(q);return q.readAsText(G),K}function R(G){var q=new Uint8Array(G),K=Array(q.length);for(var X=0;X<q.length;X++)K[X]=String.fromCharCode(q[X]);return K.join("")}function S(G){if(G.slice)return G.slice(0);var q=new Uint8Array(G.byteLength);return q.set(new Uint8Array(G)),q.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(G){if(this._bodyInit=G,!G)this._bodyText="";else if("string"==typeof G)this._bodyText=G;else if(Y.blob&&Blob.prototype.isPrototypeOf(G))this._bodyBlob=G;else if(Y.formData&&FormData.prototype.isPrototypeOf(G))this._bodyFormData=G;else if(Y.searchParams&&URLSearchParams.prototype.isPrototypeOf(G))this._bodyText=G.toString();else if(Y.arrayBuffer&&Y.blob&&M(G))this._bodyArrayBuffer=S(G.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else if(Y.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(G)||V(G)))this._bodyArrayBuffer=S(G);else throw new Error("unsupported BodyInit type");this.headers.get("content-type")||("string"==typeof G?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):Y.searchParams&&URLSearchParams.prototype.isPrototypeOf(G)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},Y.blob&&(this.blob=function(){var G=T(this);if(G)return G;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");else return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?T(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(P)}),this.text=function(){var G=T(this);if(G)return G;if(this._bodyBlob)return C(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(R(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");else return Promise.resolve(this._bodyText)},Y.formData&&(this.formData=function(){return this.text().then(I)}),this.json=function(){return this.text().then(JSON.parse)},this}// HTTP methods whose capitalization should be normalized
function U(G){var q=G.toUpperCase();return-1<H.indexOf(q)?q:G}function v(G,q){q=q||{};var K=q.body;if("string"==typeof G)this.url=G;else{if(G.bodyUsed)throw new TypeError("Already read");this.url=G.url,this.credentials=G.credentials,q.headers||(this.headers=new E(G.headers)),this.method=G.method,this.mode=G.mode,K||null==G._bodyInit||(K=G._bodyInit,G.bodyUsed=!0)}if(this.credentials=q.credentials||this.credentials||"omit",(q.headers||!this.headers)&&(this.headers=new E(q.headers)),this.method=U(q.method||this.method||"GET"),this.mode=q.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&K)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(K)}function I(G){var q=new FormData;return G.trim().split("&").forEach(function(K){if(K){var X=K.split("="),J=X.shift().replace(/\+/g," "),Z=X.join("=").replace(/\+/g," ");q.append(decodeURIComponent(J),decodeURIComponent(Z))}}),q}function N(G){var q=new E;return G.split("\r\n").forEach(function(K){var X=K.split(":"),J=X.shift().trim();if(J){var Z=X.join(":").trim();q.append(J,Z)}}),q}function D(G,q){q||(q={}),this.type="default",this.status="status"in q?q.status:200,this.ok=200<=this.status&&300>this.status,this.statusText="statusText"in q?q.statusText:"OK",this.headers=new E(q.headers),this.url=q.url||"",this._initBody(G)}if(!g.fetch){var Y={searchParams:"URLSearchParams"in g,iterable:"Symbol"in g&&"iterator"in Symbol,blob:"FileReader"in g&&"Blob"in g&&function(){try{return new Blob,!0}catch(G){return!1}}(),formData:"FormData"in g,arrayBuffer:"ArrayBuffer"in g};if(Y.arrayBuffer)var F=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],M=function(G){return G&&DataView.prototype.isPrototypeOf(G)},V=ArrayBuffer.isView||function(G){return G&&-1<F.indexOf(Object.prototype.toString.call(G))};E.prototype.append=function(G,q){G=A(G),q=_(q);var K=this.map[G];this.map[G]=K?K+","+q:q},E.prototype["delete"]=function(G){delete this.map[A(G)]},E.prototype.get=function(G){return G=A(G),this.has(G)?this.map[G]:null},E.prototype.has=function(G){return this.map.hasOwnProperty(A(G))},E.prototype.set=function(G,q){this.map[A(G)]=_(q)},E.prototype.forEach=function(G,q){for(var K in this.map)this.map.hasOwnProperty(K)&&G.call(q,this.map[K],K,this)},E.prototype.keys=function(){var G=[];return this.forEach(function(q,K){G.push(K)}),w(G)},E.prototype.values=function(){var G=[];return this.forEach(function(q){G.push(q)}),w(G)},E.prototype.entries=function(){var G=[];return this.forEach(function(q,K){G.push([K,q])}),w(G)},Y.iterable&&(E.prototype[Symbol.iterator]=E.prototype.entries);var H=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},O.call(v.prototype),O.call(D.prototype),D.prototype.clone=function(){return new D(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new E(this.headers),url:this.url})},D.error=function(){var G=new D(null,{status:0,statusText:""});return G.type="error",G};var z=[301,302,303,307,308];D.redirect=function(G,q){if(-1===z.indexOf(q))throw new RangeError("Invalid status code");return new D(null,{status:q,headers:{location:G}})},g.Headers=E,g.Request=v,g.Response=D,g.fetch=function(G,q){return new Promise(function(K,X){var J=new v(G,q),Z=new XMLHttpRequest;Z.onload=function(){var Q={status:Z.status,statusText:Z.statusText,headers:N(Z.getAllResponseHeaders()||"")};Q.url="responseURL"in Z?Z.responseURL:Q.headers.get("X-Request-URL");var W="response"in Z?Z.response:Z.responseText;K(new D(W,Q))},Z.onerror=function(){X(new TypeError("Network request failed"))},Z.ontimeout=function(){X(new TypeError("Network request failed"))},Z.open(J.method,J.url,!0),"include"===J.credentials&&(Z.withCredentials=!0),"responseType"in Z&&Y.blob&&(Z.responseType="blob"),J.headers.forEach(function(Q,W){Z.setRequestHeader(W,Q)}),Z.send("undefined"==typeof J._bodyInit?null:J._bodyInit)})},g.fetch.polyfill=!0}})("undefined"==typeof self?this:self)},{}],23:[function(g,A){A.exports=function(){var E={};for(var T=0;T<arguments.length;T++){var B=arguments[T];for(var P in B)_.call(B,P)&&(E[P]=B[P])}return E};var _=Object.prototype.hasOwnProperty},{}],24:[function(g,A){var _=g("bel"),w=g("morphdom"),E=g("./update-events.js");// turns template tag into DOM elements
// efficiently diffs + morphs two DOM elements
// default events to be copied when dom elements update
A.exports=_,A.exports.update=function(T,B,P){// morphdom only copies attributes. we decided we also wanted to copy events
// that can be set via attributes
function C(R,S){// copy events:
var O=P.events||E;for(var U=0;U<O.length;U++){var v=O[U];S[v]?R[v]=S[v]:R[v]&&(R[v]=void 0)}// copy values for form elements
"INPUT"===R.nodeName&&"file"!==R.type||"SELECT"===R.nodeName?null===S.getAttribute("value")&&(S.value=R.value):"TEXTAREA"===R.nodeName&&null===S.getAttribute("value")&&(R.value=S.value)}return P||(P={}),!1===P.events||P.onBeforeElUpdated||(P.onBeforeElUpdated=C),w(T,B,P)}},{"./update-events.js":25,bel:6,morphdom:17}],25:[function(g,A){A.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},{}]},{},[4]);
