(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){e.exports={App:"styles_App__TyUD5",AppLogo:"styles_AppLogo__11Cd7",AppHeader:"styles_AppHeader__9cOl4",AppLink:"styles_AppLink__XmAu_"}},225:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},243:function(e,t,a){e.exports=a(366)},248:function(e,t,a){},253:function(e,t){},255:function(e,t){},266:function(e,t){},268:function(e,t){},295:function(e,t){},297:function(e,t){},298:function(e,t){},303:function(e,t){},305:function(e,t){},31:function(e,t,a){e.exports={container:"styles_container__1ULzN",background:"styles_background__3xe4F",chat_container:"styles_chat_container__qXZl3",logOut:"styles_logOut__1o5Ck",contactListClickable:"styles_contactListClickable__wOj_H",chat_header:"styles_chat_header__1FztM",chat_app_container:"styles_chat_app_container__2UTck",chat_app_contactList_container:"styles_chat_app_contactList_container__2ZOOH",chat_app_contactList_contact:"styles_chat_app_contactList_contact__j_ohW",chat_app_body:"styles_chat_app_body__3aOKz",chat_app_msg_container:"styles_chat_app_msg_container__1_IFm",chat_app_contact:"styles_chat_app_contact__3kp1r",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__1E-so",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__vPeaQ",chat_app_footer:"styles_chat_app_footer__19GoJ",msg_scrollbar:"styles_msg_scrollbar__219Dq"}},324:function(e,t){},336:function(e,t){},339:function(e,t){},366:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(42),c=a.n(r),s=(a(248),a(98)),l=a(23),i=a(18),u=a(19),p=a(21),m=a(20),_=(o.a.PureComponent,a(14)),g=a(61),d=a.n(g),f=a(433),h=a(430),y=a(442),v=a(429),b=a(438),E=a(441),O=a(439),S=a(440),j=a(427),k=a(124),w=a.n(k);function N(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function x(e,t){var a=e+t+"407e0fce8fcb1cee870e19575260b6f2";return w.a.generateRSAKey(a,1024)}var C=a(57),T=a.n(C),A=function(e){var t=e.open,a=e.setOpen,r=Object(n.useState)(""),c=Object(_.a)(r,2),s=c[0],l=c[1],i=Object(n.useState)(""),u=Object(_.a)(i,2),p=u[0],m=u[1],g=function(e){"username"==e.target.id&&l(e.target.value),"password"==e.target.id&&m(e.target.value)},d=function(){a(!1)};return o.a.createElement("div",null,o.a.createElement(b.a,{open:t,onClose:d},o.a.createElement(j.a,null,"Register"),o.a.createElement(O.a,null,o.a.createElement(S.a,null,"To register to this website, please enter your username and also password here."),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:g}),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:p,onChange:g})),o.a.createElement(E.a,null,o.a.createElement(y.a,{onClick:d},"Cancel"),o.a.createElement(y.a,{onClick:function(){var e,t=x(s,p),a=(e=t,w.a.publicKeyString(e)),n={username:s,password:p,public_key:a};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(n),url:"/api/signup/",success:function(e,a){console.log(e),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s)}},"Register"))))},L=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1],c=Object(l.g)(),s=Object(n.useState)(""),i=Object(_.a)(s,2),u=i[0],p=i[1],m=Object(n.useState)(""),g=Object(_.a)(m,2),y=g[0],v=g[1],b=function(e){"username"==e.target.id&&p(e.target.value),"password"==e.target.id&&v(e.target.value)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.container},o.a.createElement(A,{open:a,setOpen:r}),o.a.createElement("div",{className:d.a.background}),o.a.createElement("div",{className:d.a.content},o.a.createElement("div",{className:d.a.register,role:"button",onClick:function(){r(!0)}},"Register"),o.a.createElement(f.a,{className:d.a.form},o.a.createElement("h1",{className:d.a.heading},"Login"),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"name"},"Login Name"),o.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:u,onChange:b})),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",id:"password",value:y,onChange:b})),o.a.createElement("div",{className:d.a.submitContainer},o.a.createElement(h.a,{variant:"contained",onClick:function(){var e=x(u,y),t={username:u,password:y};localStorage.setItem("SenderRSAkey",N(e)),localStorage.setItem("username",u),T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(t),url:"/api/login/",success:function(e,t){console.log(e),c.push("/chatpage")},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}})}},"Login"))))))},R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(o.a.Component),F=a(60),J=a.n(F),I=a(88),P=a(219),M=a(31),U=a.n(M),K=a(435),q=a(437),B=a(224),H=a.n(B),z=a(220),W=a(75),X=a.n(W),D=a(89),V=a.n(D),G=a(226);function Z(e){var t,a=X.a.utils.hex.toBytes(e.data.msg);t=e.data.to==localStorage.getItem("username")?e.data.msg_info:e.data.msg_info_for_sender;var n=JSON.parse(cryptico.decrypt(t.cipher,te).plaintext),o=n.aes,r=new X.a.ModeOfOperation.cbc(new Uint8Array(o.key_256.split(",")),new Uint8Array(o.iv.split(","))).decrypt(a);return X.a.utils.utf8.fromBytes(r).slice(0,n.msg_length)}function Q(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(I.a)(J.a.mark((function e(t){var a,n,o,r=arguments;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:0,n={target:t,start_message_index:a},o=[],T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(n),url:"/api/history/",success:function(e,t){var a=e.msgs;console.log(a);for(var n=0;n<a.length;n++)o.push({msg:Z(a[n]),date:a[n].datetime,to:a[n].data.to});return o},error:function(e,t,a){return console.log(e),console.log(t),console.log(a),"error: ajax failed"}}),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(I.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t},n="",e.next=5,T.a.ajax({method:"POST",dataType:"text",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/public_keys/",success:function(e,t){return n=e,e},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}});case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function(e){var t=JSON.parse(e),a=new k.RSAKey;return a.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),a}(localStorage.getItem("SenderRSAkey"));console.log(te);var ae=cryptico.publicKeyString(te),ne=Object(G.a)("https://"+document.domain+":"+location.port);function oe(e,t,a){var n=crypto.getRandomValues(new Uint8Array(32)),o=crypto.getRandomValues(new Uint8Array(16)),r=X.a.utils.utf8.toBytes(function(e){if(e.length%16!=0){var t=e.length%16;console.log(t);var a=new Uint8Array(16-t);a=crypto.getRandomValues(a),console.log(a);for(var n="",o=0;o<a.length;o++)n+=String.fromCharCode((a[o]+32)%127);return console.log(e+n),e+n}return e}(e)),c=new X.a.ModeOfOperation.cbc(n,o).encrypt(r),s=X.a.utils.hex.fromBytes(c);console.log(s),console.log("receiver_public_key: "+a);var l={key_256:n.toString(),iv:o.toString()},i={to:t,msg_length:e.length,aes:l},u=cryptico.encrypt(JSON.stringify(i),a,te),p=cryptico.encrypt(JSON.stringify(i),ae);console.log(u);var m={msg:s,msg_info:u,msg_info_for_sender:p,to:t};ne.emit("message",m)}ne.on("connect",(function(e){console.log(e),ne.emit("join",{})})),ne.on("all",(function(e){console.log(e)})),ne.on("message",(function(e){console.log(Z(e))}));var re=function(){var e=Object(n.useRef)(null),t=Object(l.g)(),a=Object(n.useState)([]),r=Object(_.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)([]),u=Object(_.a)(i,2),p=u[0],m=u[1],g=localStorage.getItem("username"),d=Object(n.useState)(""),f=Object(_.a)(d,2),h=f[0],y=f[1],v=Object(n.useState)(""),b=Object(_.a)(v,2),E=b[0],O=b[1],S=Object(n.useState)(""),j=Object(_.a)(S,2),k=j[0],w=j[1],N=function(){var e=Object(I.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(""),oe(h,E,k);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},url:"/api/usernames/",success:function(e,t){console.log(e.usernames),m(e.usernames.filter((function(e){return e!==g})))},error:function(e,t){console.log(e)}})}),[]);var x=function(){var a=Object(I.a)(J.a.mark((function a(n){return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return O(n),a.next=3,$(n).then((function(e){w(e),console.log("publicKey: ",e)}));case 3:return a.next=5,Q(n);case 5:Object(P.a)("history"),s(t),console.log("Msglist: ",c),e.current.scrollToBottom();case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:U.a.container},o.a.createElement("div",{className:U.a.background}),o.a.createElement("div",{className:U.a.chat_container},o.a.createElement("div",{className:U.a.logOut},o.a.createElement(q.a,{"aria-label":"LogOut",size:"small",onClick:function(){T.a.ajax({method:"GET",url:"/api/logout/",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},success:function(e,a){t.push("/"),console.log(e)},error:function(e,t){console.log(e)}})}},o.a.createElement(H.a,{fontSize:"inherit"}),"LogOut")),o.a.createElement("div",{className:U.a.chat_header},o.a.createElement("h1",null,"ChatPage"),o.a.createElement("h5",null,"Welcome! ",g)),o.a.createElement("div",{className:U.a.chat_app_container},o.a.createElement("div",{className:U.a.chat_app_contactList_container},p!==[]&&p.map((function(e,t){return o.a.createElement("li",{key:t,className:U.a.chat_app_contactList_contact,onClick:function(){return x(e)}},e)}))),o.a.createElement("div",{className:U.a.chat_app_body},o.a.createElement("div",{className:U.a.chat_app_contact},o.a.createElement("h2",null,null!==E)),o.a.createElement("div",{className:U.a.chat_app_msg_container},o.a.createElement(z.Scrollbars,{ref:e,className:U.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},c.map((function(e){return o.a.createElement("p",{className:e.to===g?U.a.chat_app_msg_inMsg:U.a.chat_app_msg_outMsg},o.a.createElement("p",null,e.msg),o.a.createElement("span",null,e.date))})))),o.a.createElement("div",{className:U.a.chat_app_footer},o.a.createElement("input",{placeholder:" Enter message...",type:"text",value:h,onChange:function(e){y(e.target.value)}}),o.a.createElement("button",{onClick:N,type:"button"},o.a.createElement(K.a,null))))))))},ce=a(225),se=a.n(ce),le=a(106),ie=a.n(le),ue=(o.a.PureComponent,"/login"),pe="/chatpage",me=function(){return o.a.createElement(s.a,null,o.a.createElement(R,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:L}),o.a.createElement(l.b,{exact:!0,path:ue,component:L}),o.a.createElement(l.b,{exact:!0,path:pe,component:re}),o.a.createElement(l.a,{from:"*",to:"/"})))};var _e=function(){return o.a.createElement(me,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,a){e.exports={container:"styles_container__1qw04",background:"styles_background__1hcBy",content:"styles_content__2QTT4",register:"styles_register__1t3Ar",form:"styles_form__hyzsE",heading:"styles_heading__3AtM5",input:"styles_input__VZBS5",submitContainer:"styles_submitContainer__3Y4x4"}}},[[243,1,2]]]);