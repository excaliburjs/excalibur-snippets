function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequirec1c4;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},n.parcelRequirec1c4=i),i.register("bXuNP",(function(r,n){var t,o;e(r.exports,"register",(()=>t),(e=>t=e)),e(r.exports,"resolve",(()=>o),(e=>o=e));var i={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)i[r[n]]=e[r[n]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i("bXuNP").register(JSON.parse('{"i4J6G":"index.767eed8b.js","4icaQ":"player.5597c4a2.png","cO1h0":"index.66fc245f.js"}'));var u,c=i("jLJwM");i.register("kPq84",(function(r,n){var t;e(r.exports,"getBundleURL",(()=>t),(e=>t=e));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=r),r}})),u=i("kPq84").getBundleURL("i4J6G")+"../../"+i("bXuNP").resolve("4icaQ");const a=new c.Engine({width:600,height:400,displayMode:c.DisplayMode.Fixed}),l=new c.ImageSource(r(u)),s=new c.Loader([l]);a.start(s).then((()=>{const e=new c.Actor({pos:a.screen.center});e.graphics.use(l.toSprite()),a.currentScene.add(e)}));
//# sourceMappingURL=index.767eed8b.js.map
