"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(t,r,n){n.r(r);var e=n(439),a=n(791),u=n(689),c=n(87),s=n(527),i=n(620),o=n(184);r.default=function(){var t=(0,a.useState)([]),r=(0,e.Z)(t,2),n=r[0],f=r[1],p=(0,u.TH)();(0,a.useEffect)((function(){(0,s.Df)().then((function(t){return f(t.results)}))}),[]);var d=function(t){return null===t?"./images/no_cover.png":"https://image.tmdb.org/t/p/w300".concat(t)};return(0,o.jsx)(i.ml,{children:n.length>0&&n.map((function(t){var r=t.id,n=t.poster_path,e=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(c.OL,{to:"/movies/".concat(r),state:p,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"".concat(d(n)),alt:e,width:"300",height:"450"}),(0,o.jsx)("p",{children:e})]})})},r)}))})}},527:function(t,r,n){n.d(r,{Df:function(){return s},QS:function(){return p},Xm:function(){return f},sk:function(){return o},vq:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"3cfddd5e97fd8d1a3fdf959358de6593"};var s=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"/reviews"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie",{params:{query:r}});case 2:return n=t.sent,console.log(n.data.results),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.138a1a2e.chunk.js.map