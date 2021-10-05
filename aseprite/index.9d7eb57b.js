function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=r.parcelRequirec1c4;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},r.parcelRequirec1c4=o),o.register("7PhYn",(function(t,r){var i,n;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("7PhYn").register(JSON.parse('{"5Ihew":"index.9d7eb57b.js","8YTcb":"beetle.956ebb15.json","1YvhR":"beetle.fc54f341.png","cglW7":"index.45450c7a.js"}'));var s,a,c=o("7gJFe"),u={};s=self,a=function(e){return t={228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AsepriteRaw=void 0,t.AsepriteRaw=class{}},103:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AsepriteResource=void 0;const n=r(205),o=r(758);t.AsepriteResource=class{constructor(e,t=!1){this.bustCache=t,this._resource=new n.Resource(e,"json",t),this.convertPath=(e,t)=>{if(0===t.indexOf("/"))return t;const r=e.split("/"),i=t.split("/");return r[r.length-1].includes(".")&&r.pop(),r.concat(i).join("/")}}load(){return i(this,void 0,void 0,(function*(){const e=yield this._resource.load(),t=this.convertPath(this._resource.path,e.meta.image),r=new n.ImageSource(t,this.bustCache);return yield r.load(),this.rawAseprite=e,this.image=r,this.data=new o.AsepriteSpriteSheet(e,r)}))}getSpriteSheet(){if(this.isLoaded())return this.data.getSpriteSheet();n.Logger.getInstance().warn("AspriteResource must be loaded before .getSpriteSheet() is called")}getAnimation(e){if(this.isLoaded())return this.data.getAnimation(e);n.Logger.getInstance().warn("AspriteResource must be loaded before .getAnimation() is called")}isLoaded(){return!!this.data}}},758:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AsepriteSpriteSheet=void 0;const i=r(205);t.AsepriteSpriteSheet=class{constructor(e,t){this.asepriteRaw=e,this.image=t,this._animations=new Map;for(let r of e.meta.frameTags){let n=r.from,o=r.to,s=i.range(n,o),a=Object.values(e.frames).filter(((e,t)=>s.includes(t))).map((e=>({duration:e.duration,graphic:new i.Sprite({image:t,sourceView:{x:e.frame.x,y:e.frame.y,width:e.frame.w,height:e.frame.h},destSize:{width:e.frame.w,height:e.frame.h}})}))),c=i.AnimationStrategy.Loop;switch(r.direction){case"pingpong":c=i.AnimationStrategy.PingPong;break;case"reverse":a.reverse()}this._animations.set(r.name,new i.Animation({frames:a,strategy:c}))}const r=[];for(let n of Object.values(e.frames))r.push(new i.Sprite({image:t,sourceView:{x:n.frame.x,y:n.frame.y,width:n.frame.w,height:n.frame.h}}));this._spriteSheet=new i.SpriteSheet({sprites:r,rows:e.meta.size.h/r[0].height,columns:e.meta.size.w/r[0].width})}getSpriteSheet(){return this._spriteSheet}getAnimation(e){if(!this._animations.has(e))throw new Error(`No animation exists with name ${e}, check your exported Aseprite file`);return this._animations.get(e)}}},607:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(228),t),n(r(103),t),n(r(758),t)},205:t=>{t.exports=e}},r={},function e(i){var n=r[i];if(void 0!==n)return n.exports;var o=r[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}(607);var t,r},"object"==typeof u?u=a(o("7gJFe")):"function"==typeof define&&define.amd?define(["excalibur"],a):"object"==typeof u?u.ex=a(o("7gJFe")):(s.ex=s.ex||{},s.ex.Plugin=s.ex.Plugin||{},s.ex.Plugin.Aseprite=a(s.ex));var f;o.register("kVZsc",(function(t,r){var i;e(t.exports,"getBundleURL",(()=>i),(e=>i=e));var n={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),n[e]=t),t}})),f=o("kVZsc").getBundleURL("5Ihew")+"../"+o("7PhYn").resolve("8YTcb");var h;h=o("kVZsc").getBundleURL("5Ihew")+"../"+o("7PhYn").resolve("1YvhR");const d=new c.Engine({width:600,height:400,displayMode:c.DisplayMode.FitScreen}),l=new u.AsepriteResource(t(f));l.convertPath=(e,r)=>t(h);const p=new c.Loader([l]);d.start(p).then((()=>{const e=new c.Actor({pos:d.screen.center});e.graphics.use(l.getAnimation("Loop")),d.currentScene.add(e)}));
//# sourceMappingURL=index.9d7eb57b.js.map
