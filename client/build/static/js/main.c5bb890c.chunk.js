(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=a(7),i=a(1),m=a(10),s=a(24),u=a(15);var E=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};function v(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function d(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function b(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(32);function f(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function h(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function p(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function g(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var N=function(e){return l.a.createElement("button",Object.assign({type:"button",role:"button",className:"btn btn-success"},e,{tabIndex:"0"}),"Save")};var k=function(e){return l.a.createElement("button",Object.assign({type:"button",role:"button",className:"btn btn-primary"},e,{tabIndex:"0"}),"View")},w=a(25),j=a.n(w),x={search:function(e){return j.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}};var y=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),w=i[0],j=i[1];return Object(n.useEffect)(function(){x.search().then(function(e){return j(e.data.items)}).catch(function(e){return console.log(e)})},[]),l.a.createElement(v,{fluid:!0},l.a.createElement(d,null,l.a.createElement(b,{size:"md-12 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"(React) Google Books Search"),l.a.createElement("p",null,"Search for and save books of interest")),l.a.createElement("form",null,l.a.createElement(p,{onChange:function(e){var t=e.target,n=t.name,l=t.value;r(Object(s.a)({},a,Object(m.a)({},n,l)))},name:"title",placeholder:"Title (required)"}),l.a.createElement(g,{disabled:!a.title,onClick:function(e){var t=this;e.preventDefault(),a.title&&x.search({title:a.title}).then(function(e){return t.setGoogleBooks({result:e.data.items})}).catch(function(e){return console.log(e)})}},"Search for Book"))),l.a.createElement(b,{size:"md-12 sm-12"},l.a.createElement("div",null,w.length?l.a.createElement(f,null,w.map(function(e){return l.a.createElement(h,{key:e.id},l.a.createElement(o.b,{to:"/books/"+e.id},l.a.createElement("strong",null,e.volumeInfo.title," by ",e.volumeInfo.authors)),l.a.createElement(k,null),l.a.createElement(N,null))})):l.a.createElement("h3",null,"No Results to Display")))))};var O=function(){return l.a.createElement(v,{fluid:!0},l.a.createElement(d,null,l.a.createElement(b,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var S=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item text-white"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/search"},l.a.createElement("div",{className:"nav-item text-white"},"Search")))),l.a.createElement("li",{className:"nav-item text-white"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/saved"},l.a.createElement("div",{className:"nav-item text-white"},"Saved")))))))};var B=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/books"]},l.a.createElement(y,null)),l.a.createElement(i.a,{exact:!0,path:"/books/:id"}),l.a.createElement(i.a,null,l.a.createElement(O,null)))))};a(56);c.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c5bb890c.chunk.js.map