import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as r,t as a}from"./assets/vendor-5b681ac7.js";const m=document.querySelector("iframe"),e=new r(m),t="videoplayer-current-time";let n=localStorage.getItem(t)??0;const c=a(({seconds:o})=>{localStorage.setItem(t,o)},1e3);e.setCurrentTime(n);e.on("timeupdate",c);
//# sourceMappingURL=commonHelpers2.js.map
