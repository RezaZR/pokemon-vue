(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},s={app:0},a={app:0},r=[];function i(t){return c.p+"js/"+({details:"details",my_pokemon:"my_pokemon"}[t]||t)+"."+{details:"f565b8e2",my_pokemon:"e6d2c03b"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={details:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var o="css/"+({details:"details",my_pokemon:"my_pokemon"}[t]||t)+"."+{details:"b9f71b7c",my_pokemon:"31d6cfe0"}[t]+".css",a=c.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete s[t],p.parentNode.removeChild(p),n(r)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){s[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",m.name="ChunkLoadError",m.type=o,m.request=s,n[1](m)}a[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var o=n("2dad"),s=n.n(o);s.a},"2dad":function(t,e,n){},"2e90":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"home"===t.contentFor?n("div",[t.pokemons&&null===t.pokemons?n("div",{staticClass:"list"},[n("div",{staticClass:"spinner"})]):t.pokemons&&null!==t.pokemons?n("div",{staticClass:"list"},[t._m(0),t._l(t.pokemons.results,(function(e,o){return n("ListContent",{key:e.name,attrs:{pokemon:e,contentFor:t.contentFor}})})),n("div",{staticClass:"list__footer"},[n("Pagination",{attrs:{url:t.pokemons.previous,title:"Previous"}}),n("Pagination",{attrs:{url:t.pokemons.next,title:"Next"}})],1)],2):t._e()]):"my_pokemon"===t.contentFor?n("div",[n("div",{staticClass:"list"},[t._m(1),t._l(t.data,(function(e,o){return n("ListContent",{key:e.name,attrs:{pokemon:e,contentFor:t.contentFor}})}))],2)]):t._e()},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list__header"},[n("div",{staticClass:"list__header__wrapper"},[t._v("Pokemon Name")]),n("div",{staticClass:"list__header__wrapper"},[t._v("You Own")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list__header"},[n("div",{staticClass:"list__header__wrapper"},[t._v("Pokemon Name")]),n("div",{staticClass:"list__header__wrapper"},[t._v("Nickname")])])}],a=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return"home"===t.contentFor?n("div",[n("div",{staticClass:"list__content",on:{click:function(e){return t.goToPokemonDetails(t.pokemon.url)}}},[n("div",{staticClass:"list__content__wrapper",attrs:{title:"Go to "+(t.pokemon.name.charAt(0).toUpperCase()+t.pokemon.name.slice(1))+" details"}},[t._v(t._s(t.pokemon.name))]),n("div",{staticClass:"list__content__wrapper",attrs:{title:"You own "+t.pokemon.owned+" "+(t.pokemon.name.charAt(0).toUpperCase()+t.pokemon.name.slice(1))}},[t._v(t._s(t.pokemon.owned))])])]):"my_pokemon"===t.contentFor?n("div",[n("div",{staticClass:"list__content",on:{click:function(e){return t.goToPokemonDetails(t.pokemon.url)}}},[n("div",{staticClass:"list__content__wrapper",attrs:{title:"Go to "+(t.pokemon.name.charAt(0).toUpperCase()+t.pokemon.name.slice(1))+" details"}},[t._v(t._s(t.pokemon.name))]),n("div",{staticClass:"list__content__wrapper",attrs:{title:"The nickname of this pokemon is "+(t.pokemon.nickname.charAt(0).toUpperCase()+t.pokemon.nickname.slice(1))}},[t._v(t._s(t.pokemon.nickname))])])]):t._e()}),r=[],i=(n("b0c0"),{name:"list_content",props:{pokemon:{type:Object,required:!0},contentFor:{type:String,required:!0}},methods:{goToPokemonDetails:function(t){this.$router.push({name:"details",params:{name:this.pokemon.name}})}}}),c=i,l=n("2877"),u=Object(l["a"])(c,a,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null===t.url?n("div",{staticClass:"pagination"},[n("button",{staticClass:"button button--grey button--radius-6",attrs:{disabled:"disabled"}},[t._v(t._s(t.title))])]):n("div",{staticClass:"pagination"},[n("button",{staticClass:"button button--grey button--radius-6",on:{click:t.handlePagination}},[t._v(t._s(t.title))])])},d=[],f={name:"pagination",props:{url:{type:String},title:{type:String,required:!0}},methods:{handlePagination:function(t){this.getData()},getData:function(){this.$store.dispatch("getPokemons",{url:this.url,isInitialData:!1})}}},_=f,h=Object(l["a"])(_,p,d,!1,null,"589d5c1a",null),k=h.exports,v={name:"list",props:{perPage:{type:Number,required:!1,default:20},contentFor:{type:String,required:!0},data:{type:Array,required:!1,default:null}},components:{ListContent:m,Pagination:k},mounted:function(){this.getData()},computed:{myPokemonList:function(){return this.$store.state.pokemon.myPokemonList},pokemons:function(){return this.$store.state.pokemon.pokemons}},methods:{getData:function(){this.$store.dispatch("getPokemons",{limit:this.perPage,isInitialData:!0})}}},g=v,b=(n("59bd"),Object(l["a"])(g,o,s,!1,null,null,null));e["a"]=b.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=n("bc3a"),a=n.n(s),r=n("a7fe"),i=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderModule"),t.isOpen?n("Modal",{attrs:{pokemon:t.data,contentFor:t.contentFor}}):t._e(),n("router-view")],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__content"},[n("router-link",{attrs:{to:"/"}},[n("p",[t._v("Home")])]),n("router-link",{attrs:{to:"/my_pokemon"}},[n("p",[t._v("My Pokemon List")])])],1)])},m=[],p={name:"header_module"},d=p,f=(n("78f7"),n("2877")),_=Object(f["a"])(d,u,m,!1,null,"b53f7fdc",null),h=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},["catch_pokemon"===t.contentFor?n("div",{staticClass:"modal__content"},[n("div",{staticClass:"modal__content__header"},[t._v(t._s(t.pokemon.name))]),n("div",{staticClass:"modal__content__body"},[n("img",{attrs:{src:t.pokemon.picture}})]),n("div",{staticClass:"modal__content__footer"},[n("button",{staticClass:"button button--grey button--radius-6",on:{click:t.closeModal}},[t._v("Cancel")]),n("button",{staticClass:"button button--primary-color button--radius-6",on:{click:t.catchPokemon}},[n("Pokemon"),n("p",[t._v("Catch!")])],1)])]):t._e(),"success"===t.contentFor?n("div",{staticClass:"modal__content"},[n("div",{staticClass:"modal__content__body"},[n("p",[t._v("Congratulations! You captured "+t._s(t.pokemon.name.charAt(0).toUpperCase()+t.pokemon.name.slice(1))+". Give it a nickname:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",required:"required"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),n("div",{staticClass:"modal__content__footer"},[n("button",{staticClass:"button button--grey button--radius-6",on:{click:t.giveNickname}},[t._v("Apply")])])]):t._e(),"failure"===t.contentFor?n("div",{staticClass:"modal__content"},[n("div",{staticClass:"modal__content__body"},[n("p",[t._v("You failed to capture "+t._s(t.pokemon.name.charAt(0).toUpperCase()+t.pokemon.name.slice(1))+", please try again.")])]),n("div",{staticClass:"modal__content__footer"},[n("button",{staticClass:"button button--grey button--radius-6",on:{click:t.closeModal}},[t._v("Close")]),n("button",{staticClass:"button button--primary-color button--radius-6",on:{click:t.catchPokemon}},[n("Pokemon"),n("p",[t._v("Catch!")])],1)])]):t._e()])},v=[],g=(n("b0c0"),n("4795"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("path",{staticStyle:{fill:"#303C42"},attrs:{d:"M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z"}}),n("path",{staticStyle:{fill:"#E53935"},attrs:{d:"M256,21.333c121.508,0,221.715,92.837,233.483,211.299c-17.362,3.845-61.466,11.878-127.904,12.608 c-5.484-53.704-50.452-95.908-105.579-95.908s-100.095,42.203-105.579,95.908c-66.438-0.73-110.542-8.763-127.904-12.608 C34.285,114.171,134.492,21.333,256,21.333z"}}),n("circle",{staticStyle:{fill:"#455A64"},attrs:{cx:"256",cy:"256",r:"85.333"}}),n("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M256,490.667C126.604,490.667,21.333,385.396,21.333,256c0-0.596,0.086-1.171,0.09-1.766 c20.31,4.324,64.224,11.547,128.97,12.251c5.357,53.837,50.385,96.181,105.607,96.181s100.25-42.344,105.607-96.181 c64.746-0.704,108.66-7.927,128.97-12.251c0.004,0.595,0.09,1.169,0.09,1.766C490.667,385.396,385.396,490.667,256,490.667z"}}),n("circle",{staticStyle:{fill:"#303C42"},attrs:{cx:"256",cy:"256",r:"64"}}),n("circle",{staticStyle:{fill:"#F2F2F2"},attrs:{cx:"256",cy:"256",r:"42.667"}}),n("path",{staticStyle:{opacity:"0.2",fill:"#FFFFFF","enable-background":"new"},attrs:{d:"M221.777,268.888c0-23.531,19.135-42.667,42.667-42.667 c12.215,0,23.169,5.224,30.954,13.475c-6.418-15.456-21.643-26.363-39.398-26.363c-23.531,0-42.667,19.135-42.667,42.667 c0,11.316,4.501,21.548,11.712,29.191C222.957,280.163,221.777,274.664,221.777,268.888z"}}),n("linearGradient",{attrs:{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"-45.5784",y1:"639.555",x2:"-23.8278",y2:"629.4138",gradientTransform:"matrix(21.3333 0 0 -21.3333 996.3334 13791.667)"}},[n("stop",{staticStyle:{"stop-color":"#FFFFFF","stop-opacity":"0.2"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#FFFFFF","stop-opacity":"0"},attrs:{offset:"1"}})],1),n("path",{staticStyle:{fill:"url(#SVGID_1_)"},attrs:{d:"M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z"}}),n("path",{staticStyle:{opacity:"0.1","enable-background":"new"},attrs:{d:"M444.74,239.997c21.049-2.556,36.18-5.467,44.743-7.365 c-5.801-58.395-33.158-110.496-73.897-148.387C436.051,119.059,448,159.449,448,202.667C448,215.4,446.702,227.809,444.74,239.997z"}}),n("path",{staticStyle:{opacity:"0.1","enable-background":"new"},attrs:{d:"M490.577,254.234c-10.544,2.245-27.586,5.257-50.467,7.747 C413.73,362.698,322.204,437.333,213.333,437.333c-61.789,0-117.908-24.186-159.859-63.361 C94.217,443.637,169.635,490.667,256,490.667c129.396,0,234.667-105.271,234.667-234.667 C490.667,255.404,490.581,254.829,490.577,254.234z"}})],1)}),b=[],y={},C=Object(f["a"])(y,g,b,!1,null,null,null),w=C.exports,P={name:"modal",props:{pokemon:{type:Object,required:!0},contentFor:{type:String,required:!0}},data:function(){return{nickname:""}},components:{Pokemon:w},computed:{myPokemonList:function(){return this.$store.state.pokemon.myPokemonList}},methods:{closeModal:function(){this.$store.commit("setIsOpen"),this.$store.commit("setContentFor",null),this.$store.commit("setData",null)},catchPokemon:function(){var t=this,e=Math.random();this.closeModal(),setTimeout((function(){t.$store.commit("setIsOpen"),e>=.5?t.$store.commit("setContentFor","success"):t.$store.commit("setContentFor","failure"),t.$store.commit("setData",t.pokemon)}),750)},giveNickname:function(){this.$store.commit("setMyPokemonList",{name:this.pokemon.name,nickname:this.nickname}),this.closeModal()}}},F=P,x=(n("7287"),Object(f["a"])(F,k,v,!1,null,"ea5f2dc0",null)),S=x.exports,O={name:"app",components:{HeaderModule:h,Modal:S},computed:{isOpen:function(){return this.$store.state.modal.isOpen},contentFor:function(){return this.$store.state.modal.contentFor},data:function(){return this.$store.state.modal.data}}},$=O,A=(n("5c0b"),Object(f["a"])($,c,l,!1,null,null,null)),L=A.exports,M=n("9483");Object(M["a"])("".concat("/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var j=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("List",{attrs:{perPage:20,contentFor:"home"}})],1)])])])},N=[],D=n("2e90"),I={name:"home",components:{List:D["a"]}},q=I,T=(n("21bb"),Object(f["a"])(q,E,N,!1,null,null,null)),R=T.exports;o["a"].use(j["a"]);var U=[{path:"/",name:"home",component:R},{path:"/details/:name",name:"details",component:function(){return n.e("details").then(n.bind(null,"10c2"))},props:!0},{path:"/my_pokemon",name:"my_pokemon",component:function(){return n.e("my_pokemon").then(n.bind(null,"f1c0"))}}],z=new j["a"]({mode:"history",base:"/dist/",routes:U}),G=z,B=n("2f62"),J=(n("4160"),n("d81d"),n("159b"),n("96cf"),"pokemon/"),H={getPokemon:function(t){var e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(a.a.get(J+t.name).then(this.handleResponse));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),null,this)},getPokemons:function(t){var e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(e=null,!t.isInitialData){n.next=7;break}return n.next=4,regeneratorRuntime.awrap(a.a.get(J+"?limit="+t.limit).then(this.handleResponse));case 4:e=n.sent,n.next=10;break;case 7:return n.next=9,regeneratorRuntime.awrap(a.a.get(t.url).then(this.handleResponse));case 9:e=n.sent;case 10:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),null,this)},handleResponse:function(t){var e=t.request;if(e.status>=300){var n=e.onerror&&JSON.parse(e.onerror);return Promise.reject(n)}return Promise.resolve(t.data)}},Y={state:{pokemon:null,pokemons:null,isPokemonsFilled:!1,myPokemonList:JSON.parse(localStorage.getItem("myPokemonList")||"[]"),isLoading:!1},getters:{},actions:{getPokemon:function(t,e){var n=t.commit,o=t.dispatch;H.getPokemon(e).then((function(t){var o={abilities:[],height:10*t.height,moves:[],name:e.name,picture:t.sprites.front_default,stats:{},types:[],weight:Math.round(t.weight/10)};return t.abilities.map((function(t){o.abilities.push(t.ability.name)})),t.moves.map((function(t){o.moves.push(t.move.name)})),t.stats.map((function(t){switch(t.stat.name){case"speed":o.stats.speed=t.base_stat;break;case"special-defense":o.stats.specialDefense=t.base_stat;break;case"special-attack":o.stats.specialAttack=t.base_stat;break;case"defense":o.stats.defense=t.base_stat;break;case"attack":o.stats.attack=t.base_stat;break;case"hp":o.stats.hp=t.base_stat;break;default:break}})),t.types.map((function(t){o.types.push(t.type.name)})),n("setPokemon",o),o}),(function(t){return o("alert/error",t,{root:!0}),t}))},getPokemons:function(t,e){var n,o,s;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,o=t.dispatch,s=t.state,a.next=3,regeneratorRuntime.awrap(H.getPokemons(e).then((function(t){return t.results.map((function(t){t.owned=0,s.myPokemonList!==[]&&s.myPokemonList.forEach((function(e){t.name===e.name&&t.owned++}))})),n("setPokemons",t),n("setIsPokemonsFilled"),t}),(function(t){return o("alert/error",t,{root:!0}),t})));case 3:case"end":return a.stop()}}))}},mutations:{setPokemon:function(t,e){t.pokemon=e},setPokemons:function(t,e){t.isPokemonsFilled&&(t.pokemons=[],t.isPokemonsFilled=!1),t.pokemons=e},setIsPokemonsFilled:function(t){t.isPokemonsFilled=!t.isPokemonsFilled},setMyPokemonList:function(t,e){console.log(e),t.myPokemonList.push(e),localStorage.setItem("myPokemonList",JSON.stringify(t.myPokemonList))}}},V={namespaced:!0,state:{type:"",message:"",isActive:!1},getters:{},actions:{success:function(t,e){var n=t.commit;n("setSuccess",e)},error:function(t,e){var n=t.commit;n("setError",e)},isActive:function(t){var e=t.commit;e("setIsActive")}},mutations:{setSuccess:function(t,e){t.type="success",t.message=e,t.isActive=!0},setError:function(t,e){t.type="error",t.message=e,t.isActive=!0},setIsActive:function(t){t.isActive=!1}}},K={state:{isOpen:!1,contentFor:null,data:null},getters:{},actions:{},mutations:{setIsOpen:function(t){t.isOpen=!t.isOpen},setContentFor:function(t,e){t.contentFor=e},setData:function(t,e){t.data=e}}};o["a"].use(B["a"]);var Q=!1,W=new B["a"].Store({modules:{pokemon:Y,alert:V,modal:K},strict:Q});o["a"].use(i.a,a.a),o["a"].axios.defaults.baseURL="https://pokeapi.co/api/v2/",o["a"].config.productionTip=!1,new o["a"]({router:G,store:W,render:function(t){return t(L)}}).$mount("#app")},"59bd":function(t,e,n){"use strict";var o=n("6925"),s=n.n(o);s.a},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),s=n.n(o);s.a},6925:function(t,e,n){},7287:function(t,e,n){"use strict";var o=n("80a8"),s=n.n(o);s.a},"78f7":function(t,e,n){"use strict";var o=n("9852"),s=n.n(o);s.a},"80a8":function(t,e,n){},9852:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.5a825d86.js.map