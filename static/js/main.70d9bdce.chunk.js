(this.webpackJsonphowtocook=this.webpackJsonphowtocook||[]).push([[0],{11:function(e,t,a){e.exports={recipe:"recipe_recipe__3vjiF",image:"recipe_image__1sTX-",imagerecipe:"recipe_imagerecipe__2zEAx"}},28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},35:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),i=(a(33),a(14)),o=a.n(i),s=a(22),u=a(5),m=(a(35),a(9)),p=a(11),f=a.n(p),E=a(15),b=a.n(E),d=a(77),h=a(78),g=a(79),y=a(80),j=a(81),v=a(82);b.a.setAppElement("#root");var k=function(e){var t,a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement("div",{className:f.a.recipe},r.a.createElement(b.a,{isOpen:l,onRequestClose:function(){return i(!1)},style:{overlay:{backgroundColor:"rgba(0,0,0,.5)"},content:(t={backgroundColor:"white",zIndex:"10",padding:"10px"},Object(m.a)(t,"padding","5px"),Object(m.a)(t,"left","10px"),Object(m.a)(t,"right","10px"),Object(m.a)(t,"top","20px"),Object(m.a)(t,"bottom","20px"),t)}},r.a.createElement("center",null,r.a.createElement("h1",null,e.title),r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("h3",null,"Calories - ",e.calories),r.a.createElement("h3",null,"Why to Eat ?"),r.a.createElement("ol",null,e.rest.healthLabels.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e))}))),r.a.createElement("h3",null,"Recipe"),e.ingredients.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.text),null!==e.img?r.a.createElement("img",{className:f.a.imagerecipe,src:e.image,alt:e.text}):null)})),r.a.createElement("h3",null,"Hurrayy!!! Your ",e.title," is ready.")),r.a.createElement("button",{className:"search-button",onClick:function(){return i(!1)}},r.a.createElement("i",{className:"fa fa-long-arrow-left","aria-hidden":"true"}))),r.a.createElement("h1",null,e.title),r.a.createElement("p",null,"Calories - ",e.calories),r.a.createElement("img",{className:f.a.image,src:e.image,alt:e.title}),r.a.createElement("button",{className:"search-button",onClick:function(){return i(!0)}},"View"),r.a.createElement("div",{className:"share",style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(d.a,{title:"Here's a recipe for you",url:window.location.href},r.a.createElement(h.a,{size:32,round:!0})),r.a.createElement(g.a,{quote:"Here's a recipe for you",url:window.location.href},r.a.createElement(y.a,{size:32,round:!0})),r.a.createElement(j.a,{title:"Here's a recipe for you",url:window.location.href},r.a.createElement(v.a,{size:32,round:!0}))))},x=a(83);var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),m=i[0],p=i[1],f=Object(n.useState)("chocolate cake"),E=Object(u.a)(f,2),b=E[0],d=E[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),y=g[0],j=g[1];Object(n.useEffect)((function(){v()}),[b]);var v=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("a507caa9","&app_key=").concat("41a281bfab0e8037bcc4e2e32fd71c31\t"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,j(!1),console.log(a.hits),c(a.hits);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{className:"search-form"},r.a.createElement(x.a,{className:"search-bar",variant:"outlined",label:"Search Recipe...",color:"primary",margin:"dense",type:"search",onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{className:"search-button",type:"submit",onClick:function(e){e.preventDefault(),d(m),p("")}},"Search")),r.a.createElement("div",{className:"recipes"},y?r.a.createElement("i",{className:"fa fa-spinner fa-spin fa-3x fa-fw"}):a.map((function(e,t){return r.a.createElement(k,{key:t,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,rest:e.recipe})}))),r.a.createElement("center",null,r.a.createElement("p",null,"designed by Ronak Joshi"),r.a.createElement("p",null,"Powered by @Edamum & inspired by ",r.a.createElement("a",{href:"https://rinkumonani.github.io/sear-a-pe/dist/index.html",target:"_blank",style:{textDecoration:"none",color:"black"}},"sear-a-pe"))))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.70d9bdce.chunk.js.map