(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{39:function(e,a,t){e.exports=t(96)},44:function(e,a,t){},46:function(e,a,t){},76:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(16),l=t.n(c),o=(t(44),t(45),t(46),t(17)),i=t(38),s=t.n(i),u=(t(76),t(99)),m=t(100),p=t(101),d=t(102),E=t(103),f=t(77);var g=function(e){var a=function(e){var a=new Date(e),t=""+(a.getMonth()+1),n=""+a.getDate(),r=a.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[r,t,n].join("-")}(e.day()),t=Object(n.useState)({title:"",url:"",description:""}),c=Object(o.a)(t,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){f.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+a).then((function(e){console.log(e.data),i({title:e.data.title,url:e.data.url,description:e.data.explanation})})).catch((function(e){console.log("ERROR: ",e)}))}),[a]),r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"container img-container"},r.a.createElement(m.a,{className:"img-title"},l.title),r.a.createElement(p.a,{className:"img",top:!0,width:"100%",src:l.url,alt:""}),r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"img-description"},l.description))))}),null)};var h=function(){var e=Object(n.useState)(new Date),a=Object(o.a)(e,2),t=a[0],c=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement(s.a,{className:"date-selector",onChange:c,value:t}),r.a.createElement(g,{day:function(){return t}}))};t(95);var v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"}),r.a.createElement("h1",{className:"ml-auto mr-auto"},"NASA Photo of the Day!"))};var N=function(){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"footer-copyright text-center py-4"},"\xa9 2020 Copyright: ",r.a.createElement("a",{href:"https://nasa.com"},"Nasa")," and various photographers. Thanks!"))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement("div",{className:"sub"}),r.a.createElement(N,null))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.37e7f7e3.chunk.js.map