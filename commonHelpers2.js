import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as c,t as s}from"./assets/vendor-5b681ac7.js";const a=document.querySelector("iframe"),e=new c(a),o="videoplayer-current-time";let{seconds:i}=JSON.parse(localStorage.getItem(o))??{seconds:0};const l=({duration:t,percent:r,seconds:n})=>{localStorage.setItem(o,JSON.stringify({duration:t,percent:r,seconds:n}))},m=s(l,1e3);e.setCurrentTime(i).then().catch(function(t){console.log(t)});e.on("timeupdate",m);
//# sourceMappingURL=commonHelpers2.js.map