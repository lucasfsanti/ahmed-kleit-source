(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4],{196:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("6ad53006",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";r(196)},198:function(t,e,r){var n=r(34)(!1);n.push([t.i,".chip[data-v-338f5850]{background:hsla(0,0%,100%,.25);border-radius:20px;margin:.625rem;padding:.063rem .625rem .25rem}",""]),t.exports=n},199:function(t,e,r){"use strict";r.r(e);var n=r(18),o=r(1),c=r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=o.a.extend({computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["fontColor"]))}),f=(r(197),r(17)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"chip",style:{color:t.fontColor}},[t._t("default")],2)}),[],!1,null,"338f5850",null);e.default=component.exports},200:function(t,e,r){var content=r(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("36794f83",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r(200)},202:function(t,e,r){var n=r(34)(!1);n.push([t.i,"ul.tabs-header[data-v-c182fe8c]{display:flex;flex-direction:row;list-style:none;margin:0 30px 10px;border-bottom:1px solid #707070}ul.tabs-header>li[data-v-c182fe8c]{cursor:pointer;font-size:18px;margin-right:20px}ul.tabs-header>li>div[data-v-c182fe8c]{height:3px;width:100%;border-radius:5px 5px 0 0;margin-top:4px}",""]),t.exports=n},208:function(t,e,r){var content=r(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("f305d956",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";r.r(e);var n=r(1).a.extend({props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}},mounted:function(){var t=this;this.$nuxt.$on("tab-clicked",(function(e){t.setActive(e)}))},methods:{setActive:function(t){this.isActive=this.title===t}}}),o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}]},[t._t("default")],2)}),[],!1,null,"4b63cdfe",null);e.default=component.exports},212:function(t,e,r){"use strict";r.r(e);var n=r(18),o=r(1),c=r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=o.a.extend({data:function(){return{selectedIndex:0,tabs:new Array}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["fontColor"])),created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(this.tabs[0].title,0)},methods:{selectTab:function(title,t){this.selectedIndex=t,this.$nuxt.$emit("tab-clicked",title)}}}),f=(r(201),r(17)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"tabs-header"},t._l(t.tabs,(function(e,n){return r("li",{key:e.title,on:{click:function(r){return t.selectTab(e.title,n)}}},[t._v("\n      "+t._s(e.title)+"\n      "),r("div",{style:{backgroundColor:t.fontColor,opacity:n==t.selectedIndex?1:.42}})])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"c182fe8c",null);e.default=component.exports},230:function(t,e,r){t.exports=r.p+"img/01MEDIA PLAY.0d23b82.png"},231:function(t,e,r){t.exports=r.p+"img/02MEDIA LISTE.9d66e9a.png"},232:function(t,e,r){t.exports=r.p+"img/03AUX.6dbb55d.png"},233:function(t,e,r){t.exports=r.p+"img/04CLIM.620840d.png"},234:function(t,e,r){t.exports=r.p+"videos/PROPS_AHMED_3.0d053e0.mp4"},235:function(t,e,r){"use strict";r(208)},236:function(t,e,r){var n=r(34)(!1);n.push([t.i,'@media (max-width:720px){.psa-container{padding:0 10px}.psa-wrapper{display:grid;grid-template-areas:"title" "article" "media";grid-gap:1rem;gap:1rem}}@media (min-width:720px){.psa-wrapper{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr auto;grid-template-areas:"title title" "article media";grid-gap:1rem;gap:1rem}}.psa-container{display:flex;flex-direction:column}.psa-wrapper>a{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:5rem;font-weight:700;grid-area:title}.psa-container>article{grid-area:article}.psa-container>article>h2{font-size:2.188rem;font-weight:700;margin-bottom:1.25rem}.psa-container>article>h2:first-child{margin-top:1.25rem}.psa-container>article>h2:nth-child(2){font-weight:400;margin-top:1.875rem}.psa-container>article>h3{font-size:1.563rem;font-weight:700;margin-top:2.5rem}.psa-container p{font-size:1.563rem;font-weight:400;margin:15px 0}.psa-container p:nth-child(4){margin-top:40px}.psa-container>article>section{display:flex;flex-direction:column;border:2px solid #b24181;border-radius:5px;min-height:auto;text-align:center;padding:1.375rem 0;width:100%}.psa-container>article>section>p{font-weight:700}.psa-container>article>section>a{font-size:1.125rem;text-decoration:underline}.heart-icon{vertical-align:bottom}.carousel{align-self:center;justify-self:center;place-self:center;max-width:100%}.wrapper-carousel{grid-area:media;overflow:hidden;text-align:-webkit-center;text-align:-moz-center;max-width:100%}.chips-container{display:flex;flex-direction:row;margin-top:3.125rem;flex-flow:wrap;grid-area:chips}',""]),t.exports=n},251:function(t,e,r){"use strict";r.r(e);var n=r(18),o=r(1),c=r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=o.a.extend({data:function(){return{carouselIndex:null,splideOptions:{type:"loop",padding:{right:"5rem",left:"5rem"},drag:"free",snap:"true",gap:"1rem",height:"auto",width:"90%",focus:"center",classes:{arrow:"splide__arrow carousel-arrows",prev:"splide__arrow--prev carousel-previous-arrow",next:"splide__arrow--next carousel-next-arrow"}}}},computed:d({},Object(c.c)(["color","fontColor"])),created:function(){this.changeColor("#1E2337","#FD4239","#FFFFFF")},methods:d(d({},Object(c.b)(["setColor","setFontColor","setButtonColor"])),{},{changeColor:function(t,e,r){this.setColor(t),this.setFontColor(e),this.setButtonColor(r)},showSubtitle:function(t){this.carouselIndex=t.index}})}),h=(r(235),r(17)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"psa-wrapper",style:{color:t.fontColor}},[n("a",{attrs:{href:"https://www.stellantis.com/en",target:"_blank"}},[t._v("Groupe PSA\n    "),n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}})])]),t._v(" "),n("div",{staticClass:"psa-container"},[t._m(0),t._v(" "),n("div",{staticClass:"chips-container"},[n("Chip",[t._v("Automotive")]),t._v(" "),n("Chip",[t._v("UX Design")]),t._v(" "),n("Chip",[t._v("UI Design")]),t._v(" "),n("Chip",[t._v("Human Machine Interaction")])],1)]),t._v(" "),n("div",{staticClass:"wrapper-carousel"},[n("Tabs",[n("Tab",{attrs:{title:"Citroën"}},[n("splide",{staticClass:"carousel",attrs:{options:t.splideOptions},on:{"splide:active":t.showSubtitle}},[n("splide-slide",[n("img",{attrs:{src:r(230)}})]),t._v(" "),n("splide-slide",[n("img",{attrs:{src:r(231)}})]),t._v(" "),n("splide-slide",[n("img",{attrs:{src:r(232)}})]),t._v(" "),n("splide-slide",[n("img",{attrs:{src:r(233)}})]),t._v(" "),n("splide-slide",[n("video",{attrs:{width:"100%",height:"100%",controls:""}},[n("source",{attrs:{src:r(234),type:"video/mp4"}}),t._v("\n              Your browser does not support the video tag.\n            ")])])],1)],1),t._v(" "),n("Tab",{attrs:{title:"DS"}},[n("div")])],1)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h2",[t._v("\n        Groupe PSA, was a French multinational automotive manufacturing\n        company.\n      ")]),t._v(" "),r("h2",[t._v("UX / UI Designer")]),t._v(" "),r("p",[t._v("April 2014 | Dez 2014")]),t._v(" "),r("p",[t._v("\n        Working at PSA Vélizy-Villacoublay as a UX/UI designer for the all car\n        generation: Peugeot, Citroën and DS.\n      ")]),t._v(" "),r("p",[t._v("\n        Designing interfaces for the onboarding computers (HMI). Touch screen\n        interface creation focused on the user experience improvement. Study\n        and analysis of market trends and competitors.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Chip:r(199).default,Tab:r(211).default,Tabs:r(212).default})}}]);