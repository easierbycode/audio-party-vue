(function(e){function n(n){for(var r,a,c=n[0],d=n[1],s=n[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var d=t[a];0!==o[d]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i=[];function a(e){return c.p+"js/"+({game:"game"}[e]||e)+"."+{game:"5ea394c1"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(e);var s=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,t[1](s)}o[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var l=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("7a23");function o(e,n,t,o,i,a){const c=Object(r["g"])("Game");return Object(r["d"])(),Object(r["b"])(c)}const i=["id"],a={key:1,class:"placeholder"};function c(e,n,t,o,c,d){return c.downloaded?(Object(r["d"])(),Object(r["c"])("div",{key:0,id:c.containerId},null,8,i)):(Object(r["d"])(),Object(r["c"])("div",a," Downloading ... "))}var d={data(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},async mounted(){const e=await t.e("game").then(t.bind(null,"8fd0"));this.downloaded=!0,this.$nextTick(()=>{this.gameInstance=e.launch(this.containerId)})},destroyed(){this.gameInstance.destroy(!1)}};t("a409");d.render=c,d.__scopeId="data-v-c544d978";var s=d,u={components:{Game:s}};t("e78c");u.render=o;var l=u;t("6701");Object(r["a"])(l).mount("#app")},6701:function(e,n,t){t("219c");const r=document.getElementById("container"),o=document.getElementById("canvas1");o.width=window.innerWidth,o.height=window.innerHeight;const i=o.getContext("2d");let a,c;var d=()=>{const e=document.getElementById("audio1"),n=new AudioContext;e.play(),a=new MediaElementAudioSourceNode(n,{mediaElement:e}),c=n.createAnalyser(),a.connect(c),c.connect(n.destination),c.fftSize=32;const t=c.frequencyBinCount,s=new Uint8Array(t),u=o.width/t;let l,f;function w(){f=0,i.clearRect(0,0,o.width,o.height),c.getByteFrequencyData(s);for(let e=0;e<t;e++){l=s[e],i.fillStyle=`rgb(${l}, 50, 50)`,i.fillRect(f,o.height-l,u,l),f+=u;let n=+(l/255).toFixed(2),t=657930|16777215*n;3===e&&window.backgrounds&&window.backgrounds[1].layers.children.iterate(e=>{e.setTint(t)}),5===e&&window.backgrounds&&window.backgrounds[2].layers.children.iterate(e=>{e.setTint(t)}),14===e&&window.backgrounds&&window.backgrounds[0].layers.children.iterate(e=>{e.setTint(t)}),8===e&&window.dancer&&(window.dancer.anims.setProgress(n),window.dancer2.anims.setProgress(n),window.nymph.anims.setProgress(n)),9===e&&window.bg&&(window.bg.anims.setProgress(n),window.lights.anims.setProgress(n),window.lips.anims.setProgress(n))}requestAnimationFrame(w)}setTimeout(()=>{window.dancer&&dancer.anims.pause(),w()},13),r.removeEventListener("click",d)};r.addEventListener("click",d)},a409:function(e,n,t){"use strict";t("ade8")},ade8:function(e,n,t){},e78c:function(e,n,t){"use strict";t("f6ee")},f6ee:function(e,n,t){}});
//# sourceMappingURL=app.e273b46b.js.map