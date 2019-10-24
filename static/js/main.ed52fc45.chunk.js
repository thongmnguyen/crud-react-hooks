(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=(n(11),n(5)),o=n(1),m=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.username),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.editUser(t)},className:"button muted-button"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No users"))))},i=n(2);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var p=function(e){var t={id:null,name:"",username:""},n=Object(a.useState)(t),c=Object(o.a)(n,2),l=c[0],u=c[1],m=function(e){var t=e.target,n=t.name,a=t.value;u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l,Object(i.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),l.name&&l.username&&(e.addUser(l),u(t))}},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:m}),r.a.createElement("label",{htmlFor:"username"},"UserName"),r.a.createElement("input",{type:"text",name:"username",value:l.username,onChange:m}),r.a.createElement("button",null,"Add new user"))};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var d=function(e){var t=Object(a.useState)(e.currentUser),n=Object(o.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){l(e.currentUser)}),[e]);var u=function(e){var t=e.target,n=t.name,a=t.value;l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,Object(i.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(c.id,c)}},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:u}),r.a.createElement("label",{htmlFor:"username"},"UserName"),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:u}),r.a.createElement("button",null,"Update user"),r.a.createElement("button",{className:"button muted-button",onClick:function(){return e.setEditing(!1)}},"Cancel"))},f=function(){var e=Object(a.useState)([{id:1,name:"Happy",username:"happy"},{id:2,name:"Happy 2",username:"happy2"},{id:3,name:"Happy 3",username:"happy3"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),s=i[0],b=i[1],f=Object(a.useState)({id:null,name:"",username:""}),E=Object(o.a)(f,2),O=E[0],h=E[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CRUD with React Hooks"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},s?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit User"),r.a.createElement(d,{editing:s,setEditing:b,currentUser:O,updateUser:function(e,t){b(!1),c(n.map((function(n){return n.id===e?t:n})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Add user"),r.a.createElement(p,{addUser:function(e){e.id=n.length+1,c([].concat(Object(u.a)(n),[e]))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View users"),r.a.createElement(m,{users:n,editUser:function(e){b(!0),h({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){c(n.filter((function(t){return t.id!==e})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.ed52fc45.chunk.js.map