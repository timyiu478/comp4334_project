(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){e.exports={App:"styles_App__TyUD5",AppLogo:"styles_AppLogo__11Cd7",AppHeader:"styles_AppHeader__9cOl4",AppLink:"styles_AppLink__XmAu_"}},223:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},241:function(e,t,a){e.exports=a(375)},246:function(e,t,a){},253:function(e,t){},255:function(e,t){},265:function(e,t){},267:function(e,t){},29:function(e,t,a){e.exports={container:"styles_container__1ULzN",background:"styles_background__3xe4F",chat_container:"styles_chat_container__qXZl3",logOut:"styles_logOut__1o5Ck",contactListClickable:"styles_contactListClickable__wOj_H",chat_header:"styles_chat_header__1FztM",chat_app_container:"styles_chat_app_container__2UTck",chat_app_contactList_container:"styles_chat_app_contactList_container__2ZOOH",chat_app_contactList_contact:"styles_chat_app_contactList_contact__j_ohW",chat_app_body:"styles_chat_app_body__3aOKz",chat_app_msg_container:"styles_chat_app_msg_container__1_IFm",chat_app_contact:"styles_chat_app_contact__3kp1r",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__1E-so",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__vPeaQ",chat_app_footer:"styles_chat_app_footer__19GoJ",msg_scrollbar:"styles_msg_scrollbar__219Dq",refresh_token_button:"styles_refresh_token_button__2Z39q"}},294:function(e,t){},296:function(e,t){},297:function(e,t){},302:function(e,t){},304:function(e,t){},310:function(e,t){},312:function(e,t){},331:function(e,t){},343:function(e,t){},346:function(e,t){},375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),o=a.n(c),s=(a(246),a(95)),i=a(22),l=a(17),u=a(18),p=a(20),m=a(19),_=(r.a.PureComponent,a(25)),f=a.n(_),g=a(41),d=a(14),h=a(57),y=a.n(h),b=a(441),v=a(438),E=a(444),O=a(437),S=a(447),k=a(450),j=a(448),w=a(449),x=a(435),N=a(87),T=a.n(N);function C(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function A(e,t){var a=e+t+"407e0fce8fcb1cee870e19575260b6f2";return T.a.generateRSAKey(a,1024)}var R=a(45),I=a.n(R);function L(e){var t=new TextEncoder("utf-8").encode(e);return crypto.subtle.digest("SHA-256",t).then((function(e){return function(e){for(var t="",a=new DataView(e),n=0;n<a.byteLength;n+=4){var r=a.getUint32(n).toString(16),c=("00000000"+r).slice(-"00000000".length);t+=c}return t}(e)}))}var J=function(e){var t=e.open,a=e.setOpen,c=Object(n.useState)(""),o=Object(d.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),p=u[0],m=u[1],_=function(e){"username"==e.target.id&&i(e.target.value),"password"==e.target.id&&m(e.target.value)},h=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(s,p),c=t,a=T.a.publicKeyString(c),e.next=4,L(p);case 4:n=e.sent,r={username:s,password:n,public_key:a},I.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(r),url:"/api/signup/",success:function(e,a){console.log(e),localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",s);case 9:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){a(!1)};return r.a.createElement("div",null,r.a.createElement(S.a,{open:t,onClose:y},r.a.createElement(x.a,null,"Register"),r.a.createElement(j.a,null,r.a.createElement(w.a,null,"To register to this website, please enter your username and also password here."),r.a.createElement(O.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:_}),r.a.createElement(O.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:p,onChange:_})),r.a.createElement(k.a,null,r.a.createElement(E.a,{onClick:y},"Cancel"),r.a.createElement(E.a,{onClick:h},"Register"))))},F=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(i.g)(),s=Object(n.useState)(""),l=Object(d.a)(s,2),u=l[0],p=l[1],m=Object(n.useState)(""),_=Object(d.a)(m,2),h=_[0],E=_[1],O=function(e){"username"==e.target.id&&p(e.target.value),"password"==e.target.id&&E(e.target.value)},S=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(u,h),e.next=3,L(h);case 3:a=e.sent,n={username:u,password:a},I.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(n),url:"/api/login/",success:function(e,a){localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",u),console.log(e),o.push("/chatpage")},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.container},r.a.createElement(J,{open:a,setOpen:c}),r.a.createElement("div",{className:y.a.background}),r.a.createElement("div",{className:y.a.content},r.a.createElement("div",{className:y.a.register,role:"button",onClick:function(){c(!0)}},"Register"),r.a.createElement(b.a,{className:y.a.form},r.a.createElement("h1",{className:y.a.heading},"Login"),r.a.createElement("div",{className:y.a.input},r.a.createElement("label",{htmlFor:"name"},"Login Name"),r.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:u,onChange:O})),r.a.createElement("div",{className:y.a.input},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:h,onChange:O})),r.a.createElement("div",{className:y.a.submitContainer},r.a.createElement(v.a,{variant:"contained",onClick:S},"Login"))))))},P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(r.a.Component),K=a(23),U=a(29),q=a.n(U),B=a(443),H=a(446),M=a(222),D=a.n(M),X=a(218),z=a(74),W=a.n(z),G=a(73),V=a.n(G);function Z(e,t,a,n){return Q.apply(this,arguments)}function Q(){return(Q=Object(g.a)(f.a.mark((function e(t,a,n,r){var c,o,s,i,l,u,p,m,_,g,d,h;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=W.a.utils.hex.toBytes(t.data.encryptedHex),o=t.from==a?t.data.encrypted_msg_info_for_sender:t.data.encrypted_msg_info,"failure"!=(s=cryptico.decrypt(o.cipher,n)).status){e.next=6;break}return console.log(s),e.abrupt("return",!1);case 6:if(s=s.plaintext,s=JSON.parse(s),i=s.aes,l=new W.a.ModeOfOperation.cbc(new Uint8Array(i.key_256.split(",")),new Uint8Array(i.iv.split(","))),u=l.decrypt(c),p=W.a.utils.utf8.fromBytes(u),m=JSON.parse(p.slice(0,s.data_length)),_=m.msg,t.from==a){e.next=35;break}if(g=m.signature.cipher,d=cryptico.decrypt(g,n),console.log("hash:",d),"failure"!=d.status){e.next=21;break}return console.log("Invalid signature"),e.abrupt("return",!1);case 21:if(r.slice(0,32)==cryptico.publicKeyID(d.publickey)){e.next=26;break}return console.log(r),console.log(cryptico.publicKeyID(d.publickey)),console.log("Invalid signature"),e.abrupt("return",!1);case 26:return h={aes_key:i,msg:_},e.next=29,L(JSON.stringify(h));case 29:if(e.sent!=d.plaintext){e.next=33;break}e.next=35;break;case 33:return console.log("Invalid signature"),e.abrupt("return",!1);case 35:return e.abrupt("return",_);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){I.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},url:"/api/token/refresh",success:function(e,t){alert("Refresh Token Successfully!")},error:function(e,t,a){console.log(e),console.log(t),console.log(a),alert("Refresh Token Failed!")}})}function $(e,t,a,n){return ee.apply(this,arguments)}function ee(){return(ee=Object(g.a)(f.a.mark((function e(t,a,n,r){var c,o,s,i=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.length>4&&void 0!==i[4]?i[4]:0,o={target:t,start_message_index:c},s=[],e.next=5,I.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(o),url:"/api/history/",success:function(e,t){for(var c=e.msgs,o=function(e){Z(c[e],a,r,n).then((function(t){0!=t&&s.push({msg:t,date:c[e].datetime,to:c[e].data.to})}))},i=0;i<c.length;i++)o(i);return s},error:function(e,t,a){return console.log(e),console.log(t),console.log(a),"error: ajax failed"}});case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t},n="",e.next=5,I.a.ajax({method:"POST",dataType:"text",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(a),url:"/api/public_keys/",success:function(e,t){return n=e,e},error:function(e,t,a){console.log(e),console.log(t),console.log(a)}});case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){if(e.length%16!=0){var t=e.length%16,a=new Uint8Array(16-t);a=crypto.getRandomValues(a);for(var n="",r=0;r<a.length;r++)n+=String.fromCharCode((a[r]+32)%127);return e+n}return e}function re(e,t,a,n,r){return ce.apply(this,arguments)}function ce(){return(ce=Object(g.a)(f.a.mark((function e(t,a,n,r,c){var o,s,i,l,u,p,m,_,g,d,h,y,b,v,E,O;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=crypto.getRandomValues(new Uint8Array(32)),s=crypto.getRandomValues(new Uint8Array(16)),i={key_256:o.toString(),iv:s.toString()},l={aes_key:i,msg:t},e.next=6,L(JSON.stringify(l));case 6:return u=e.sent,p=cryptico.encrypt(u,n,r),m=JSON.stringify({msg:t,signature:p}),_=m.length,g=W.a.utils.utf8.toBytes(ne(m)),d=new W.a.ModeOfOperation.cbc(o,s),h=d.encrypt(g),y=W.a.utils.hex.fromBytes(h),b={data_length:_,aes:i},v=cryptico.encrypt(JSON.stringify(b),n),E=cryptico.encrypt(JSON.stringify(b),c),O={encryptedHex:y,encrypted_msg_info:v,encrypted_msg_info_for_sender:E,to:a},console.log(O),e.abrupt("return",O);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=a(224).a.connect("wss://"+location.host,{transports:["websocket"],rememberUpgrade:!0,cors:{origin:"*"},credentials:!0,methods:["GET","POST"]}),se=function(){!1===oe.connected&&!1===oe.connecting?(console.log("tryReconnect..."),oe.connect(),oe.emit("join",{})):console.log("connected")},ie=function(){var e=Object(n.useRef)(null),t=Object(i.g)(),a=Object(n.useState)([]),c=Object(d.a)(a,2),o=c[0],s=c[1],l=Object(n.useState)([]),u=Object(d.a)(l,2),p=u[0],m=u[1],_=localStorage.getItem("username"),h=Object(n.useState)(""),y=Object(d.a)(h,2),b=y[0],v=y[1],E=Object(n.useState)(""),O=Object(d.a)(E,2),S=O[0],k=O[1],j=Object(n.useState)(""),w=Object(d.a)(j,2),x=w[0],C=w[1],A=function(e){var t=JSON.parse(e),a=new N.RSAKey;return a.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),a}(localStorage.getItem("SenderRSAkey")),R=T.a.publicKeyString(A),L=localStorage.getItem("username"),J={};oe.emit("join",{}),Object(n.useEffect)((function(){P()}),[]),Object(n.useEffect)((function(){setInterval(se,6e4),setInterval(P,6e4)}),[]),oe.on("message",(function(t){Z(t,L,A,x).then((function(a){var n=t.from;n!=S&&n!=_||(s([].concat(Object(K.a)(o),[{msg:a,date:t.datetime,to:t.data.to}])),e.current.scrollToBottom())}))}));var F=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(""),re(b,S,x,A,R).then((function(e){oe.emit("message",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){I.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},url:"/api/usernames/",success:function(e,t){m(e.usernames.filter((function(e){return e!==_})))},error:function(e,t){}})},U=function(){var t=Object(g.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p[a.target.id],k(n),!J.hasOwnProperty(n)){t.next=6;break}C(J[n]),t.next=8;break;case 6:return t.next=8,te(n).then((function(e){C(e),J[n]=e}));case 8:return t.next=10,$(n,L,x,A).then((function(e){s(e)}));case 10:e.current.scrollToBottom();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:q.a.container,onKeyDown:function(e){"Enter"===e.key&&F()}},r.a.createElement("div",{className:q.a.background}),r.a.createElement("div",{className:q.a.chat_container},r.a.createElement("div",{className:q.a.logOut},r.a.createElement(H.a,{"aria-label":"LogOut",size:"small",onClick:function(){I.a.ajax({method:"GET",url:"/api/logout/",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},success:function(e,a){t.push("/")},error:function(e,t){}})}},r.a.createElement(D.a,{fontSize:"inherit"}),"LogOut")),r.a.createElement("div",{className:q.a.chat_header},r.a.createElement("h1",null,"ChatPage"),r.a.createElement("h5",null,"Welcome! ",_)),r.a.createElement("div",{className:q.a.chat_app_container},r.a.createElement("div",{className:q.a.chat_app_contactList_container},p!==[]&&p.map((function(e,t){return r.a.createElement("li",{key:t,id:t,className:q.a.chat_app_contactList_contact,onClick:U},e)})),r.a.createElement("button",{onClick:Y,className:q.a.refresh_token_button},"Refresh Token")),r.a.createElement("div",{className:q.a.chat_app_body},r.a.createElement("div",{className:q.a.chat_app_contact},r.a.createElement("h3",null,"Current Contact: ",""!==S&&S)),r.a.createElement("div",{className:q.a.chat_app_msg_container},r.a.createElement(X.Scrollbars,{ref:e,className:q.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},o!==[]&&o.map((function(e){return r.a.createElement("p",{className:e.to===_?q.a.chat_app_msg_inMsg:q.a.chat_app_msg_outMsg},r.a.createElement("p",null,e.msg),r.a.createElement("span",null,e.date))})))),r.a.createElement("div",{className:q.a.chat_app_footer},r.a.createElement("input",{placeholder:" Enter message...",type:"text",value:b,onChange:function(e){v(e.target.value)}}),r.a.createElement("button",{onClick:F,type:"button"},r.a.createElement(B.a,null))))))))},le=a(223),ue=a.n(le),pe=a(103),me=a.n(pe),_e=(r.a.PureComponent,"/login"),fe="/chatpage",ge=function(){return r.a.createElement(s.a,null,r.a.createElement(P,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:F}),r.a.createElement(i.b,{exact:!0,path:_e,component:F}),r.a.createElement(i.b,{exact:!0,path:fe,component:ie}),r.a.createElement(i.a,{from:"*",to:"/"})))};var de=function(){return r.a.createElement(ge,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports={container:"styles_container__1qw04",background:"styles_background__1hcBy",content:"styles_content__2QTT4",register:"styles_register__1t3Ar",form:"styles_form__hyzsE",heading:"styles_heading__3AtM5",input:"styles_input__VZBS5",submitContainer:"styles_submitContainer__3Y4x4"}}},[[241,1,2]]]);