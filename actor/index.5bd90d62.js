var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequirec1c4;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequirec1c4=o);var t=o("7gJFe");const i=new t.Engine({width:600,height:400,displayMode:t.DisplayMode.FitScreen}),l=new t.Actor({name:"player",width:50,height:50,color:t.Color.Red});l.vel.x=15,i.add(l),i.start().then((()=>{i.currentScene.camera.pos=t.vec(0,0)}));
//# sourceMappingURL=index.5bd90d62.js.map