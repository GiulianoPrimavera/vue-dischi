(function(e){function t(t){for(var r,i,l=t[0],c=t[1],o=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{genres:e.genreList},on:{changedGenre:e.setGenre}}),n("Main",{attrs:{genre:e.selectedGenre},on:{genresReady:e.getGenres}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"cards_container"},e._l(e.cardListFiltered,(function(e,t){return n("SingleCard",{key:t,attrs:{image:e.poster,title:e.title.toUpperCase(),artist:e.author,year:e.year}})})),1)])},l=[],c=n("2909"),o=(n("4de4"),n("d3b7"),n("159b"),n("caad"),n("2532"),n("bc3a")),u=n.n(o),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single_card"},[n("div",{staticClass:"single_card_image"},[n("img",{attrs:{src:e.image,alt:e.title}})]),n("div",{staticClass:"single_card_title"},[n("h4",[e._v(e._s(e.title))])]),n("div",{staticClass:"single_card_description"},[n("p",[e._v(e._s(e.artist))]),n("p",{staticClass:"small"},[e._v(e._s(e.year))])])])},d=[],f={props:["image","title","artist","year"]},g=f,v=n("2877"),_=Object(v["a"])(g,p,d,!1,null,null,null),m=_.exports,b={components:{SingleCard:m},data:function(){return{cardsList:[],genreList:[]}},props:{genre:{type:String,default:"all"}},computed:{cardListFiltered:function(){var e=this;return this.cardsList.filter((function(t){if(t.genre===e.genre||"all"===e.genre)return!0}))}},mounted:function(){var e=this;u.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){var n;console.log(t.data.response),(n=e.cardsList).push.apply(n,Object(c["a"])(t.data.response)),e.cardsList.forEach((function(t){e.genreList.includes(t.genre)||e.genreList.push(t.genre)})),console.log("lista dei generi",e.genreList),e.$emit("genresReady",e.genreList)}))}},h=b,y=Object(v["a"])(h,i,l,!1,null,null,null),O=y.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[e._m(0),n("div",{staticClass:"navbar_filter_container"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectGenre,expression:"selectGenre"}],attrs:{name:"album_genre"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectGenre=t.target.multiple?n:n[0]},function(t){return e.$emit("changedGenre",e.selectGenre)}]}},[n("option",{attrs:{value:"all"}},[e._v("all")]),e._l(e.genres,(function(t,r){return n("option",{key:r,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])},G=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar_logo_container"},[r("img",{attrs:{src:n("9b38"),alt:""}})])}],L={name:"Navbar",data:function(){return{selectGenre:"all"}},props:{genres:Array}},x=L,C=Object(v["a"])(x,j,G,!1,null,null,null),w=C.exports,P={name:"App",components:{Navbar:w,Main:O},data:function(){return{genreList:[],selectedGenre:"all"}},methods:{getGenres:function(e){this.genreList=e},setGenre:function(e){this.selectedGenre=e}}},S=P,$=(n("5c0b"),Object(v["a"])(S,a,s,!1,null,null,null)),E=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9b38":function(e,t,n){e.exports=n.p+"img/spoty.4187bddc.png"},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.f9a8e2fd.js.map