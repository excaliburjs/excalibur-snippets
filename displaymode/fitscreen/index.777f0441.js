function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequirec1c4;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},n.parcelRequirec1c4=i),i.register("27Lyk",(function(r,n){var t,o;e(r.exports,"register",(()=>t),(e=>t=e)),e(r.exports,"resolve",(()=>o),(e=>o=e));var i={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)i[r[n]]=e[r[n]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i("27Lyk").register(JSON.parse('{"h8VCr":"index.777f0441.js","1aTba":"player.5597c4a2.png","iUVDR":"index.b486eafc.js"}'));var a,c=i("3MXpL");a=new URL("../../"+i("27Lyk").resolve("1aTba"),import.meta.url).toString();const d=new c.Engine({width:600,height:400,displayMode:c.DisplayMode.FitScreen}),l=new c.ImageSource(r(a)),s=new c.Loader([l]);d.start(s).then((()=>{const e=new c.Actor({pos:d.screen.center});e.graphics.use(l.toSprite()),d.currentScene.add(e)}));
//# sourceMappingURL=index.777f0441.js.map
