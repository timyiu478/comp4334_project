(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{213:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},230:function(e,t,a){e.exports=a(351)},235:function(e,t,a){},240:function(e,t){},242:function(e,t){},253:function(e,t){},255:function(e,t){},282:function(e,t){},284:function(e,t){},285:function(e,t){},290:function(e,t){},292:function(e,t){},311:function(e,t){},32:function(e,t,a){e.exports={container:"styles_container__10YZe",background:"styles_background__2r9vj",chat_container:"styles_chat_container__2dSxz",contactListClickable:"styles_contactListClickable__2x0YA",chat_header:"styles_chat_header__2lwtE",chat_app_container:"styles_chat_app_container__hpWMz",chat_app_contactList_container:"styles_chat_app_contactList_container__1ZAt-",chat_app_contactList_contact:"styles_chat_app_contactList_contact__1Ek8z",chat_app_body:"styles_chat_app_body__3y5Fr",chat_app_msg_container:"styles_chat_app_msg_container__2XaNU",chat_app_contact:"styles_chat_app_contact__2mJq5",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__2V7Ef",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__4vvHT",chat_app_footer:"styles_chat_app_footer__2UMp1",msg_scrollbar:"styles_msg_scrollbar__2ODTw"}},323:function(e,t){},326:function(e,t){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(42),r=a.n(c),s=(a(235),a(104)),l=a(22),i=a(18),u=a(19),p=a(21),m=a(20),_=(o.a.PureComponent,a(14)),g=a(57),d=a.n(g),f=a(414),h=a(412),y=a(411),v=a(410),b=a(417),E=a(421),S=a(419),O=a(420),j=a(408),w=a(113),k=a.n(w);function N(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function x(e,t){var a=e+t+"407e0fce8fcb1cee870e19575260b6f2";return k.a.generateRSAKey(a,1024)}var C=a(61),T=a.n(C),A=function(e){var t=e.open,a=e.setOpen,c=Object(n.useState)(""),r=Object(_.a)(c,2),s=r[0],l=r[1],i=Object(n.useState)(""),u=Object(_.a)(i,2),p=u[0],m=u[1],g=function(e){"username"==e.target.id&&l(e.target.value),"password"==e.target.id&&m(e.target.value)},d=function(){a(!1)};return o.a.createElement("div",null,o.a.createElement(b.a,{open:t,onClose:d},o.a.createElement(j.a,null,"Register"),o.a.createElement(S.a,null,o.a.createElement(O.a,null,"To register to this website, please enter your username and also password here."),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:g}),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:p,onChange:g})),o.a.createElement(E.a,null,o.a.createElement(y.a,{onClick:d},"Cancel"),o.a.createElement(y.a,{onClick:function(){var e,t=x(s,p),a=(e=t,k.a.publicKeyString(e)),n={username:s,password:p,public_key:a};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(n),url:"/api/signup/",success:function(e,a){console.log(e),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s)}},"Register"))))},L=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(l.g)(),s=Object(n.useState)(""),i=Object(_.a)(s,2),u=i[0],p=i[1],m=Object(n.useState)(""),g=Object(_.a)(m,2),y=g[0],v=g[1],b=function(e){"username"==e.target.id&&p(e.target.value),"password"==e.target.id&&v(e.target.value)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.container},o.a.createElement(A,{open:a,setOpen:c}),o.a.createElement("div",{className:d.a.background}),o.a.createElement("div",{className:d.a.content},o.a.createElement("div",{className:d.a.register,role:"button",onClick:function(){c(!0)}},"Register"),o.a.createElement(f.a,{className:d.a.form},o.a.createElement("h1",{className:d.a.heading},"Login"),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"name"},"Login Name:"),o.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:u,onChange:b})),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"password"},"Password:"),o.a.createElement("input",{type:"password",name:"password",id:"password",value:y,onChange:b})),o.a.createElement("div",{className:d.a.submitContainer},o.a.createElement(h.a,{variant:"contained",onClick:function(){r.push("/chatpage");var e=x(u,y),t={username:u,password:y};localStorage.setItem("SenderRSAkey",N(e)),localStorage.setItem("username",u),T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(t),url:"/api/login/",success:function(e,t){console.log(e)},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}})}},"Login"))))))},R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(o.a.Component),J=a(83),I=a.n(J),P=a(110),F=a(32),M=a.n(F),U=a(416),q=a(208),K=a(209),B=a(72),H=a.n(B),W=a(143),V=a.n(W);function z(e){console.log(e);var t,a=H.a.utils.hex.toBytes(e.data.msg);t=e.data.to==localStorage.getItem("username")?e.data.msg_info:e.data.msg_info_for_sender;var n=JSON.parse(cryptico.decrypt(t.cipher,Q).plaintext);console.log(t),console.log(n);var o=n.aes;console.log(o);var c=new H.a.ModeOfOperation.cbc(new Uint8Array(o.key_256.split(",")),new Uint8Array(o.iv.split(","))).decrypt(a),r=H.a.utils.utf8.fromBytes(c).slice(0,n.msg_length);return console.log(r),r}function D(e){return X.apply(this,arguments)}function X(){return(X=Object(P.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t},n="",e.next=5,T.a.ajax({method:"POST",dataType:"text",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/public_keys/",success:function(e,t){return n=e,e},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}});case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=a(214).a.connect("https://"+document.domain+":"+location.port),Q=function(e){var t=JSON.parse(e),a=new w.RSAKey;return a.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),a}(localStorage.getItem("SenderRSAkey"));console.log(Q);var Y=cryptico.publicKeyString(Q);function G(e,t,a){var n=crypto.getRandomValues(new Uint8Array(32)),o=crypto.getRandomValues(new Uint8Array(16)),c=H.a.utils.utf8.toBytes(function(e){if(e.length%16!=0){var t=e.length%16;console.log(t);var a=new Uint8Array(16-t);a=crypto.getRandomValues(a),console.log(a);for(var n="",o=0;o<a.length;o++)n+=String.fromCharCode((a[o]+32)%127);return console.log(e+n),e+n}return e}(e)),r=new H.a.ModeOfOperation.cbc(n,o).encrypt(c),s=H.a.utils.hex.fromBytes(r);console.log(s),console.log("receiver_public_key: "+a);var l={key_256:n.toString(),iv:o.toString()},i={to:t,msg_length:e.length,aes:l},u=cryptico.encrypt(JSON.stringify(i),a,Q),p=cryptico.encrypt(JSON.stringify(i),Y);console.log(u);var m={msg:s,msg_info:u,msg_info_for_sender:p,to:t};Z.emit("message",m)}Z.on("connect",(function(e){console.log(e),Z.emit("join",{})})),Z.on("all",(function(e){console.log(e)})),Z.on("message",(function(e){z(e)}));var $=function(){var e=Object(n.useRef)(null),t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],r=(a[1],Object(n.useState)([])),s=Object(_.a)(r,2),l=s[0],i=s[1],u=localStorage.getItem("username"),p=Object(n.useState)(""),m=Object(_.a)(p,2),g=m[0],d=m[1],f=Object(n.useState)(null),h=Object(_.a)(f,2),y=h[0],v=h[1],b=function(){var e=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("msg: "+g+"to: "+l[y]),e.next=3,D(l[y]);case 3:t=e.sent,console.log("publiccc keyyy: "+t),G(g,l[y],t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T.a.ajax({method:"GET",dataType:"json",contentType:"application/json",url:"/api/usernames/",success:function(e,t){console.log(e.usernames),i(e.usernames.filter((function(e){return e!=u})))},error:function(e,t){console.log(e)}})}),[]),Object(n.useEffect)((function(){l!==[]&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={target:e,start_message_index:t};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/history/",success:function(e,t){console.log(e);for(var n=e.msgs,o=0;o<n.length;o++)n[o],Object(K.a)("data"),z(a)},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}})}(l[y])}),[y]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:M.a.container},o.a.createElement("div",{className:M.a.background}),o.a.createElement("div",{className:M.a.chat_container},o.a.createElement("div",{className:M.a.chat_header},o.a.createElement("h1",null,"ChatPage")),o.a.createElement("div",{className:M.a.chat_app_container},o.a.createElement("div",{className:M.a.chat_app_contactList_container},l!==[]&&l.map((function(e,t){return o.a.createElement("li",{key:t,className:M.a.chat_app_contactList_contact,onClick:function(){return v(t)}},e)}))),o.a.createElement("div",{className:M.a.chat_app_body},o.a.createElement("div",{className:M.a.chat_app_contact},o.a.createElement("h2",null,null!==y&&l[y])),o.a.createElement("div",{className:M.a.chat_app_msg_container},o.a.createElement(q.Scrollbars,{ref:e,className:M.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},c!==[]&&c.map((function(e){return o.a.createElement("p",{className:e.isFromSelf?M.a.chat_app_msg_outMsg:M.a.chat_app_msg_inMsg},o.a.createElement("p",null,e.msg),o.a.createElement("span",null,e.time))})))),o.a.createElement("div",{className:M.a.chat_app_footer},o.a.createElement("input",{placeholder:" Enter message...",type:"text",value:g,onChange:function(e){d(e.target.value)}}),o.a.createElement("button",{onClick:b,type:"button"},o.a.createElement(U.a,null))))))))},ee=a(213),te=a.n(ee),ae=a(98),ne=a.n(ae),oe=(o.a.PureComponent,"/login"),ce="/chatpage",re=function(){return o.a.createElement(s.a,null,o.a.createElement(R,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:L}),o.a.createElement(l.b,{exact:!0,path:oe,component:L}),o.a.createElement(l.b,{exact:!0,path:ce,component:$}),o.a.createElement(l.a,{from:"*",to:"/"})))};var se=function(){return o.a.createElement(re,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports={container:"styles_container__24Sv2",background:"styles_background__pxoan",content:"styles_content__2csTg",register:"styles_register__18u2K",form:"styles_form__2sLLb",heading:"styles_heading__2gQat",input:"styles_input__auRix",submitContainer:"styles_submitContainer__3SNv6"}},98:function(e,t,a){e.exports={App:"styles_App__36nvZ",AppLogo:"styles_AppLogo__10428",AppHeader:"styles_AppHeader__2rjvQ",AppLink:"styles_AppLink__2Kcaq"}}},[[230,1,2]]]);