(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{213:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},230:function(e,t,a){e.exports=a(351)},235:function(e,t,a){},240:function(e,t){},242:function(e,t){},253:function(e,t){},255:function(e,t){},282:function(e,t){},284:function(e,t){},285:function(e,t){},290:function(e,t){},292:function(e,t){},311:function(e,t){},32:function(e,t,a){e.exports={container:"styles_container__10YZe",background:"styles_background__2r9vj",chat_container:"styles_chat_container__2dSxz",contactListClickable:"styles_contactListClickable__2x0YA",chat_header:"styles_chat_header__2lwtE",chat_app_container:"styles_chat_app_container__hpWMz",chat_app_contactList_container:"styles_chat_app_contactList_container__1ZAt-",chat_app_contactList_contact:"styles_chat_app_contactList_contact__1Ek8z",chat_app_body:"styles_chat_app_body__3y5Fr",chat_app_msg_container:"styles_chat_app_msg_container__2XaNU",chat_app_contact:"styles_chat_app_contact__2mJq5",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__2V7Ef",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__4vvHT",chat_app_footer:"styles_chat_app_footer__2UMp1",msg_scrollbar:"styles_msg_scrollbar__2ODTw"}},323:function(e,t){},326:function(e,t){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(42),r=a.n(c),s=(a(235),a(103)),l=a(22),i=a(18),m=a(19),u=a(21),p=a(20),_=(o.a.PureComponent,a(14)),g=a(57),d=a.n(g),f=a(414),h=a(412),y=a(411),v=a(410),b=a(417),E=a(421),S=a(419),O=a(420),j=a(408),w=a(111),k=a.n(w);function N(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function x(e,t){var a=e+t+"407e0fce8fcb1cee870e19575260b6f2";return k.a.generateRSAKey(a,1024)}var C=a(61),T=a.n(C),A=function(e){var t=e.open,a=e.setOpen,c=Object(n.useState)(""),r=Object(_.a)(c,2),s=r[0],l=r[1],i=Object(n.useState)(""),m=Object(_.a)(i,2),u=m[0],p=m[1],g=function(e){"username"==e.target.id&&l(e.target.value),"password"==e.target.id&&p(e.target.value)},d=function(){a(!1)};return o.a.createElement("div",null,o.a.createElement(b.a,{open:t,onClose:d},o.a.createElement(j.a,null,"Register"),o.a.createElement(S.a,null,o.a.createElement(O.a,null,"To register to this website, please enter your username and also password here."),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:g}),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:u,onChange:g})),o.a.createElement(E.a,null,o.a.createElement(y.a,{onClick:d},"Cancel"),o.a.createElement(y.a,{onClick:function(){var e,t=x(s,u),a=(e=t,k.a.publicKeyString(e)),n={username:s,password:u,public_key:a};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(n),url:"/api/signup/",success:function(e,a){console.log(e),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s)}},"Register"))))},L=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(l.g)(),s=Object(n.useState)(""),i=Object(_.a)(s,2),m=i[0],u=i[1],p=Object(n.useState)(""),g=Object(_.a)(p,2),y=g[0],v=g[1],b=function(e){"username"==e.target.id&&u(e.target.value),"password"==e.target.id&&v(e.target.value)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.container},o.a.createElement(A,{open:a,setOpen:c}),o.a.createElement("div",{className:d.a.background}),o.a.createElement("div",{className:d.a.content},o.a.createElement("div",{className:d.a.register,role:"button",onClick:function(){c(!0)}},"Register"),o.a.createElement(f.a,{className:d.a.form},o.a.createElement("h1",{className:d.a.heading},"Login"),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"name"},"Login Name:"),o.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:m,onChange:b})),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"password"},"Password:"),o.a.createElement("input",{type:"password",name:"password",id:"password",value:y,onChange:b})),o.a.createElement("div",{className:d.a.submitContainer},o.a.createElement(h.a,{variant:"contained",onClick:function(){r.push("/chatpage");var e=x(m,y),t={username:m,password:y};localStorage.setItem("SenderRSAkey",N(e)),localStorage.setItem("username",m),T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(t),url:"/api/login/",success:function(e,t){console.log(e)},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}})}},"Login"))))))},F=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(o.a.Component),R=a(141),I=a.n(R),J=a(24),P=a(207),M=a(32),q=a.n(M),K=a(416),U=a(208),H=a(209),B=a(72),W=a.n(B),D=a(142),z=a.n(D);function Z(e){console.log(e);var t,a=W.a.utils.hex.toBytes(e.data.msg);t=e.data.to==localStorage.getItem("username")?e.data.msg_info:e.data.msg_info_for_sender;var n=JSON.parse(cryptico.decrypt(t.cipher,X).plaintext);console.log(t),console.log(n);var o=n.aes;console.log(o);var c=new W.a.ModeOfOperation.cbc(new Uint8Array(o.key_256.split(",")),new Uint8Array(o.iv.split(","))).decrypt(a),r=W.a.utils.utf8.fromBytes(c).slice(0,n.msg_length);return console.log(r),r}var Q=a(214).a.connect("https://"+document.domain+":"+location.port),X=function(e){var t=JSON.parse(e),a=new w.RSAKey;return a.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),a}(localStorage.getItem("SenderRSAkey"));console.log(X);cryptico.publicKeyString(X);Q.on("connect",(function(e){console.log(e),Q.emit("join",{})})),Q.on("all",(function(e){console.log(e)})),Q.on("message",(function(e){Z(e)}));var Y=function(){var e=Object(n.useRef)(null),t=Object(n.useState)([{isFromSelf:!1,msg:"hello",time:"01:00"},{isFromSelf:!0,msg:"hi",time:"01:01"},{isFromSelf:!1,msg:"how are you doing",time:"01:02"},{isFromSelf:!0,msg:"well",time:"01:03"},{isFromSelf:!0,msg:"And you?",time:"01:04"},{isFromSelf:!1,msg:"wonderful!",time:"01:05"}]),a=Object(_.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),l=Object(_.a)(s,2),i=l[0],m=l[1],u=localStorage.getItem("username"),p=Object(n.useState)(""),g=Object(_.a)(p,2),d=g[0],f=g[1],h=Object(n.useState)(0),y=Object(_.a)(h,2),v=y[0],b=y[1],E=function(){var t=Object(P.a)(I.a.mark((function t(){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==d){t.next=6;break}return a={isFromSelf:!0,msg:d,time:"02:00"},t.next=4,r((function(e){return[].concat(Object(J.a)(e),[a])}));case 4:f(""),e.current.scrollToBottom();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){T.a.ajax({method:"GET",dataType:"json",contentType:"application/json",url:"/api/usernames/",success:function(e,t){console.log(e.usernames),m(e.usernames.filter((function(e){return e!=u})))},error:function(e,t){console.log(e)}})}),[]),Object(n.useEffect)((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={target:e,start_message_index:t};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":z.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/history/",success:function(e,t){console.log(e),msgs=e.msgs;for(var n=0;n<msgs.length;n++)msgs[n],Object(H.a)("data"),Z(a)},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}})}(i[v])}),[v]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:q.a.container,onKeyDown:function(e){"Enter"===e.key&&E()}},o.a.createElement("div",{className:q.a.background}),o.a.createElement("div",{className:q.a.chat_container},o.a.createElement("div",{className:q.a.chat_header},o.a.createElement("h1",null,"ChatPage")),o.a.createElement("div",{className:q.a.chat_app_container},o.a.createElement("div",{className:q.a.chat_app_contactList_container},i.map((function(e,t){return o.a.createElement("li",{key:t,className:q.a.chat_app_contactList_contact,onClick:function(){return b(t)}},e)}))),o.a.createElement("div",{className:q.a.chat_app_body},o.a.createElement("div",{className:q.a.chat_app_contact},o.a.createElement("h2",null,i[v])),o.a.createElement("div",{className:q.a.chat_app_msg_container},o.a.createElement(U.Scrollbars,{ref:e,className:q.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},c.map((function(e){return o.a.createElement("p",{className:e.isFromSelf?q.a.chat_app_msg_outMsg:q.a.chat_app_msg_inMsg},o.a.createElement("p",null,e.msg),o.a.createElement("span",null,e.time))})))),o.a.createElement("div",{className:q.a.chat_app_footer},o.a.createElement("input",{placeholder:" Enter message...",type:"text",value:d,onChange:function(e){f(e.target.value)}}),o.a.createElement("button",{onClick:E,type:"button"},o.a.createElement(K.a,null))))))))},G=a(213),V=a.n(G),$=a(97),ee=a.n($),te=(o.a.PureComponent,"/login"),ae="/chatpage",ne=function(){return o.a.createElement(s.a,null,o.a.createElement(F,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:L}),o.a.createElement(l.b,{exact:!0,path:te,component:L}),o.a.createElement(l.b,{exact:!0,path:ae,component:Y}),o.a.createElement(l.a,{from:"*",to:"/"})))};var oe=function(){return o.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports={container:"styles_container__24Sv2",background:"styles_background__pxoan",content:"styles_content__2csTg",register:"styles_register__18u2K",form:"styles_form__2sLLb",heading:"styles_heading__2gQat",input:"styles_input__auRix",submitContainer:"styles_submitContainer__3SNv6"}},97:function(e,t,a){e.exports={App:"styles_App__36nvZ",AppLogo:"styles_AppLogo__10428",AppHeader:"styles_AppHeader__2rjvQ",AppLink:"styles_AppLink__2Kcaq"}}},[[230,1,2]]]);