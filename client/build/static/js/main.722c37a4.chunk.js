(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){e.exports={App:"styles_App__TyUD5",AppLogo:"styles_AppLogo__11Cd7",AppHeader:"styles_AppHeader__9cOl4",AppLink:"styles_AppLink__XmAu_"}},224:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},242:function(e,t,a){e.exports=a(365)},247:function(e,t,a){},252:function(e,t){},254:function(e,t){},265:function(e,t){},267:function(e,t){},294:function(e,t){},296:function(e,t){},297:function(e,t){},302:function(e,t){},304:function(e,t){},31:function(e,t,a){e.exports={container:"styles_container__1ULzN",background:"styles_background__3xe4F",chat_container:"styles_chat_container__qXZl3",logOut:"styles_logOut__1o5Ck",contactListClickable:"styles_contactListClickable__wOj_H",chat_header:"styles_chat_header__1FztM",chat_app_container:"styles_chat_app_container__2UTck",chat_app_contactList_container:"styles_chat_app_contactList_container__2ZOOH",chat_app_contactList_contact:"styles_chat_app_contactList_contact__j_ohW",chat_app_body:"styles_chat_app_body__3aOKz",chat_app_msg_container:"styles_chat_app_msg_container__1_IFm",chat_app_contact:"styles_chat_app_contact__3kp1r",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__1E-so",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__vPeaQ",chat_app_footer:"styles_chat_app_footer__19GoJ",msg_scrollbar:"styles_msg_scrollbar__219Dq"}},323:function(e,t){},335:function(e,t){},338:function(e,t){},365:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(42),r=a.n(c),s=(a(247),a(97)),l=a(23),i=a(18),u=a(19),p=a(21),m=a(20),_=(o.a.PureComponent,a(14)),g=a(60),d=a.n(g),f=a(432),h=a(429),y=a(441),v=a(428),b=a(437),E=a(440),O=a(438),S=a(439),j=a(426),k=a(124),w=a.n(k);function N(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function C(e,t){var a=e+t+"407e0fce8fcb1cee870e19575260b6f2";return w.a.generateRSAKey(a,1024)}var x=a(57),T=a.n(x),A=function(e){var t=e.open,a=e.setOpen,c=Object(n.useState)(""),r=Object(_.a)(c,2),s=r[0],l=r[1],i=Object(n.useState)(""),u=Object(_.a)(i,2),p=u[0],m=u[1],g=function(e){"username"==e.target.id&&l(e.target.value),"password"==e.target.id&&m(e.target.value)},d=function(){a(!1)};return o.a.createElement("div",null,o.a.createElement(b.a,{open:t,onClose:d},o.a.createElement(j.a,null,"Register"),o.a.createElement(O.a,null,o.a.createElement(S.a,null,"To register to this website, please enter your username and also password here."),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:g}),o.a.createElement(v.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:p,onChange:g})),o.a.createElement(E.a,null,o.a.createElement(y.a,{onClick:d},"Cancel"),o.a.createElement(y.a,{onClick:function(){var e,t=C(s,p),a=(e=t,w.a.publicKeyString(e)),n={username:s,password:p,public_key:a};T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(n),url:"/api/signup/",success:function(e,a){console.log(e),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",N(t)),localStorage.setItem("username",s)}},"Register"))))},L=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(l.g)(),s=Object(n.useState)(""),i=Object(_.a)(s,2),u=i[0],p=i[1],m=Object(n.useState)(""),g=Object(_.a)(m,2),y=g[0],v=g[1],b=function(e){"username"==e.target.id&&p(e.target.value),"password"==e.target.id&&v(e.target.value)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:d.a.container},o.a.createElement(A,{open:a,setOpen:c}),o.a.createElement("div",{className:d.a.background}),o.a.createElement("div",{className:d.a.content},o.a.createElement("div",{className:d.a.register,role:"button",onClick:function(){c(!0)}},"Register"),o.a.createElement(f.a,{className:d.a.form},o.a.createElement("h1",{className:d.a.heading},"Login"),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"name"},"Login Name"),o.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:u,onChange:b})),o.a.createElement("div",{className:d.a.input},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",id:"password",value:y,onChange:b})),o.a.createElement("div",{className:d.a.submitContainer},o.a.createElement(h.a,{variant:"contained",onClick:function(){var e=C(u,y),t={username:u,password:y};localStorage.setItem("SenderRSAkey",N(e)),localStorage.setItem("username",u),T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(t),url:"/api/login/",success:function(e,t){console.log(e),r.push("/chatpage")},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}})}},"Login"))))))},R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(o.a.Component),F=a(68),J=a.n(F),I=a(104),P=a(31),U=a.n(P),K=a(434),M=a(436),q=a(223),B=a.n(q),H=a(219),z=a(75),W=a.n(z),X=a(88),D=a.n(X),V=a(225);function G(e){var t,a=W.a.utils.hex.toBytes(e.data.msg);t=e.data.to==localStorage.getItem("username")?e.data.msg_info:e.data.msg_info_for_sender;var n=JSON.parse(cryptico.decrypt(t.cipher,$).plaintext),o=n.aes,c=new W.a.ModeOfOperation.cbc(new Uint8Array(o.key_256.split(",")),new Uint8Array(o.iv.split(","))).decrypt(a);return W.a.utils.utf8.fromBytes(c).slice(0,n.msg_length)}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={target:e,start_message_index:t},n=[];return T.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":D.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/history/",success:function(e,t){var a=e.msgs;console.log(a);for(var o=0;o<a.length;o++)n.push({msg:G(a[o]),date:a[o].datetime,to:a[o].data.to});return n},error:function(e,t,a){return console.log(e),console.log(t),console.log(a),"error: ajax failed"}}),"error"}function Q(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(I.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t},n="",e.next=5,T.a.ajax({method:"POST",dataType:"text",contentType:"application/json",headers:{"X-CSRF-TOKEN":D.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/public_keys/",success:function(e,t){return n=e,e},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}});case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e){var t=JSON.parse(e),a=new k.RSAKey;return a.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),a}(localStorage.getItem("SenderRSAkey"));console.log($);var ee=cryptico.publicKeyString($),te=Object(V.a)("https://"+document.domain+":"+location.port);function ae(e,t,a){var n=crypto.getRandomValues(new Uint8Array(32)),o=crypto.getRandomValues(new Uint8Array(16)),c=W.a.utils.utf8.toBytes(function(e){if(e.length%16!=0){var t=e.length%16;console.log(t);var a=new Uint8Array(16-t);a=crypto.getRandomValues(a),console.log(a);for(var n="",o=0;o<a.length;o++)n+=String.fromCharCode((a[o]+32)%127);return console.log(e+n),e+n}return e}(e)),r=new W.a.ModeOfOperation.cbc(n,o).encrypt(c),s=W.a.utils.hex.fromBytes(r);console.log(s),console.log("receiver_public_key: "+a);var l={key_256:n.toString(),iv:o.toString()},i={to:t,msg_length:e.length,aes:l},u=cryptico.encrypt(JSON.stringify(i),a,$),p=cryptico.encrypt(JSON.stringify(i),ee);console.log(u);var m={msg:s,msg_info:u,msg_info_for_sender:p,to:t};te.emit("message",m)}te.on("connect",(function(e){console.log(e),te.emit("join",{})})),te.on("all",(function(e){console.log(e)})),te.on("message",(function(e){console.log(G(e))}));var ne=function(){var e=Object(n.useRef)(null),t=Object(l.g)(),a=Object(n.useState)([]),c=Object(_.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),u=Object(_.a)(i,2),p=u[0],m=u[1],g=localStorage.getItem("username"),d=Object(n.useState)(""),f=Object(_.a)(d,2),h=f[0],y=f[1],v=Object(n.useState)(""),b=Object(_.a)(v,2),E=b[0],O=b[1],S=Object(n.useState)(""),j=Object(_.a)(S,2),k=j[0],w=j[1],N=function(){var e=Object(I.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(""),ae(h,E,k);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":D.a.get("csrf_access_token")},url:"/api/usernames/",success:function(e,t){console.log(e.usernames),m(e.usernames.filter((function(e){return e!==g})))},error:function(e,t){console.log(e)}})}),[]);var C=function(){var e=Object(I.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(t),e.next=3,Q(t).then((function(e){w(e),console.log("publicKey: ",e)}));case 3:Z(t).then((function(e){console.log(e),s(e)})).catch((function(e){console.log(e.message)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:U.a.container},o.a.createElement("div",{className:U.a.background}),o.a.createElement("div",{className:U.a.chat_container},o.a.createElement("div",{className:U.a.logOut},o.a.createElement(M.a,{"aria-label":"LogOut",size:"small",onClick:function(){T.a.ajax({method:"GET",url:"/api/logout/",headers:{"X-CSRF-TOKEN":D.a.get("csrf_access_token")},success:function(e,a){t.push("/"),console.log(e)},error:function(e,t){console.log(e)}})}},o.a.createElement(B.a,{fontSize:"inherit"}),"LogOut")),o.a.createElement("div",{className:U.a.chat_header},o.a.createElement("h1",null,"ChatPage"),o.a.createElement("h5",null,"Welcome! ",g)),o.a.createElement("div",{className:U.a.chat_app_container},o.a.createElement("div",{className:U.a.chat_app_contactList_container},p!==[]&&p.map((function(e,t){return o.a.createElement("li",{key:t,className:U.a.chat_app_contactList_contact,onClick:function(){return C(e)}},e)}))),o.a.createElement("div",{className:U.a.chat_app_body},o.a.createElement("div",{className:U.a.chat_app_contact},o.a.createElement("h2",null,null!==E)),o.a.createElement("div",{className:U.a.chat_app_msg_container},o.a.createElement(H.Scrollbars,{ref:e,className:U.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r!==[]&&r.map((function(e){return o.a.createElement("p",{className:e.to===g?U.a.chat_app_msg_inMsg:U.a.chat_app_msg_outMsg},o.a.createElement("p",null,e.msg),o.a.createElement("span",null,e.date))})))),o.a.createElement("div",{className:U.a.chat_app_footer},o.a.createElement("input",{placeholder:" Enter message...",type:"text",value:h,onChange:function(e){y(e.target.value)}}),o.a.createElement("button",{onClick:N,type:"button"},o.a.createElement(K.a,null))))))))},oe=a(224),ce=a.n(oe),re=a(106),se=a.n(re),le=(o.a.PureComponent,"/login"),ie="/chatpage",ue=function(){return o.a.createElement(s.a,null,o.a.createElement(R,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:L}),o.a.createElement(l.b,{exact:!0,path:le,component:L}),o.a.createElement(l.b,{exact:!0,path:ie,component:ne}),o.a.createElement(l.a,{from:"*",to:"/"})))};var pe=function(){return o.a.createElement(ue,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports={container:"styles_container__1qw04",background:"styles_background__1hcBy",content:"styles_content__2QTT4",register:"styles_register__1t3Ar",form:"styles_form__hyzsE",heading:"styles_heading__3AtM5",input:"styles_input__VZBS5",submitContainer:"styles_submitContainer__3Y4x4"}}},[[242,1,2]]]);