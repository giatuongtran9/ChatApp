(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(88)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},84:function(e,t){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(44),r=a.n(o),s=(a(52),a(53),a(17)),u=a(1),l=a(7),m=(a(54),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),u=Object(l.a)(r,2),m=u[0],i=u[1];return c.a.createElement("div",{className:"home-container"},c.a.createElement("input",{type:"text",placeholder:"Room",value:a,onChange:function(e){o(e.target.value)},className:"text-input"}),c.a.createElement("input",{type:"text",placeholder:"Name",value:m,onChange:function(e){i(e.target.value)},className:"text-input"}),c.a.createElement(s.b,{to:"/".concat(a,"/").concat(m)},c.a.createElement("button",{className:"join-button"},"Join Room")))}),i=a(18),d=a(28),h=a(46),p=a.n(h),f=(a(87),function(e){var t=e.match.params.roomId,a=e.match.params.name,o=Object(n.useState)([]),r=Object(l.a)(o,2),s=r[0],u=r[1],m=Object(n.useState)([]),h=Object(l.a)(m,2),f=h[0],b=h[1],E=Object(n.useRef)(),v=Object(n.useState)(""),g=Object(l.a)(v,2),j=g[0],O=g[1];Object(n.useEffect)((function(){E.current=p()("http://localhost:5000",{query:{roomId:t}}),console.log(E.current),E.current.on("newChatMessage",(function(e){var t=Object(d.a)(Object(d.a)({},e),{},{ownedByCurrentUser:e.senderId===E.current.id});u((function(e){return[].concat(Object(i.a)(e),[t])}))})),E.current.emit("new-user","Welcome ".concat(a)),E.current.on("new-user",(function(e){var t=Object(i.a)(e);b((function(e){return[].concat(Object(i.a)(e),[t])}))}))}),[t]);return c.a.createElement("div",{className:"chat-room-container"},c.a.createElement("h1",{className:"room-name"},"Room: ",t),c.a.createElement("div",{className:"messages-container"},c.a.createElement("ol",{className:"message-list"},f.map((function(e,t){return c.a.createElement("h4",{key:t},e)})),s.map((function(e,t){return c.a.createElement("li",{key:t,className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message")},e.body,c.a.createElement("h5",null,e.user))})))),c.a.createElement("textarea",{value:j,onChange:function(e){O(e.target.value)},placeholder:"Write message...",className:"send-field"}),c.a.createElement("button",{className:"send-button",onClick:function(){var e;e=j,E.current.emit("newChatMessage",{body:e,senderId:E.current.id,user:a}),O("")}},"Send"))});var b=function(){return c.a.createElement(s.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:m}),c.a.createElement(u.a,{exact:!0,path:"/:roomId/:name",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b97a4a5d.chunk.js.map