function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequirec1c4;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var r=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){i[e]=r},t.parcelRequirec1c4=o),o.register("7PhYn",(function(r,t){var n,i;e(r.exports,"register",(()=>i),(e=>i=e)),e(r.exports,"resolve",(()=>n),(e=>n=e));var o={};i=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)o[r[t]]=e[r[t]]},n=function(e){var r=o[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o("7PhYn").register(JSON.parse('{"lkZp4":"index.becb48c9.js","fMyzA":"player-run.505c747e.png","1YW0f":"index.e901dd1c.js"}'));var a,f=o("7gJFe");o.register("kVZsc",(function(r,t){var n;e(r.exports,"getBundleURL",(()=>n),(e=>n=e));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var r=i[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=r),r}})),a=o("kVZsc").getBundleURL("lkZp4")+"../"+o("7PhYn").resolve("fMyzA");const l=new f.Engine({width:600,height:400}),u=new f.ImageSource(r(a)),s=f.SpriteSheet.fromImageSource({image:u,grid:{rows:1,columns:21,spriteWidth:96,spriteHeight:96}}),c=f.Animation.fromSpriteSheet(s,f.Util.range(1,10),200),d=new f.Actor({pos:f.vec(l.halfDrawWidth,l.halfDrawHeight)});d.graphics.use(c);const p=new f.Loader([u]);l.start(p).then((()=>{l.currentScene.add(d)}));
//# sourceMappingURL=index.becb48c9.js.map
