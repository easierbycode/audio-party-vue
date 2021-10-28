(function(e){function n(n){for(var r,i,c=n[0],d=n[1],u=n[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var d=t[i];0!==o[d]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({game:"game"}[e]||e)+"-legacy."+{game:"ea461836"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;a=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var l=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,a,i){var c=Object(r["g"])("Game");return Object(r["d"])(),Object(r["b"])(c)}var a=["id"],i={key:1,class:"placeholder"};function c(e,n,t,o,c,d){return c.downloaded?(Object(r["d"])(),Object(r["c"])("div",{key:0,id:c.containerId},null,8,a)):(Object(r["d"])(),Object(r["c"])("div",i," Downloading ... "))}var d=t("1da1"),u=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),{data:function(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e("game").then(t.bind(null,"8fd0"));case 2:r=n.sent,e.downloaded=!0,e.$nextTick((function(){e.gameInstance=r.launch(e.containerId)}));case 5:case"end":return n.stop()}}),n)})))()},destroyed:function(){this.gameInstance.destroy(!1)}});t("a409");u.render=c,u.__scopeId="data-v-c544d978";var s=u,l={components:{Game:s}};t("e78c");l.render=o;var f=l;t("6701");Object(r["a"])(f).mount("#app")},6701:function(e,n,t){t("d3b7"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("b680");var r=document.getElementById("container"),o=document.getElementById("canvas1");o.width=window.innerWidth,o.height=window.innerHeight;var a,i,c=o.getContext("2d"),d=function e(){var n=document.getElementById("audio1"),t=new AudioContext;n.play(),a=new MediaElementAudioSourceNode(t,{mediaElement:n}),i=t.createAnalyser(),a.connect(i),i.connect(t.destination),i.fftSize=32;var d,u,s=i.frequencyBinCount,l=new Uint8Array(s),f=o.width/s;function w(){u=0,c.clearRect(0,0,o.width,o.height),i.getByteFrequencyData(l);for(var e=function(e){d=l[e],c.fillStyle="rgb(".concat(d,", 50, 50)"),c.fillRect(u,o.height-d,f,d),u+=f;var n=+(d/255).toFixed(2),t=657930|16777215*n;3===e&&window.backgrounds&&window.backgrounds[1].layers.children.iterate((function(e){e.setTint(t)})),5===e&&window.backgrounds&&window.backgrounds[2].layers.children.iterate((function(e){e.setTint(t)})),14===e&&window.backgrounds&&window.backgrounds[0].layers.children.iterate((function(e){e.setTint(t)})),8===e&&window.dancer&&(window.dancer.anims.setProgress(n),window.dancer2.anims.setProgress(n),window.nymph.anims.setProgress(n)),9===e&&window.bg&&(window.bg.anims.setProgress(n),window.lights.anims.setProgress(n),window.lips.anims.setProgress(n))},n=0;n<s;n++)e(n);requestAnimationFrame(w)}setTimeout((function(){window.dancer&&dancer.anims.pause(),w()}),13),r.removeEventListener("click",e)};r.addEventListener("click",d)},a409:function(e,n,t){"use strict";t("ade8")},ade8:function(e,n,t){},e78c:function(e,n,t){"use strict";t("f6ee")},f6ee:function(e,n,t){}});
//# sourceMappingURL=app-legacy.9ed5ceaf.js.map