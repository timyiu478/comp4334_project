(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){e.exports={App:"styles_App__TyUD5",AppLogo:"styles_AppLogo__11Cd7",AppHeader:"styles_AppHeader__9cOl4",AppLink:"styles_AppLink__XmAu_"}},223:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},241:function(e,t,n){e.exports=n(375)},246:function(e,t,n){},253:function(e,t){},255:function(e,t){},265:function(e,t){},267:function(e,t){},29:function(e,t,n){e.exports={container:"styles_container__1ULzN",background:"styles_background__3xe4F",chat_container:"styles_chat_container__qXZl3",logOut:"styles_logOut__1o5Ck",contactListClickable:"styles_contactListClickable__wOj_H",chat_header:"styles_chat_header__1FztM",chat_app_container:"styles_chat_app_container__2UTck",chat_app_contactList_container:"styles_chat_app_contactList_container__2ZOOH",chat_app_contactList_contact:"styles_chat_app_contactList_contact__j_ohW",chat_app_body:"styles_chat_app_body__3aOKz",chat_app_msg_container:"styles_chat_app_msg_container__1_IFm",chat_app_contact:"styles_chat_app_contact__3kp1r",chat_app_msg_inMsg:"styles_chat_app_msg_inMsg__1E-so",chat_app_msg_outMsg:"styles_chat_app_msg_outMsg__vPeaQ",chat_app_footer:"styles_chat_app_footer__19GoJ",msg_scrollbar:"styles_msg_scrollbar__219Dq",refresh_token_button:"styles_refresh_token_button__2Z39q"}},294:function(e,t){},296:function(e,t){},297:function(e,t){},302:function(e,t){},304:function(e,t){},310:function(e,t){},312:function(e,t){},331:function(e,t){},343:function(e,t){},346:function(e,t){},375:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),c=n.n(o),s=(n(246),n(95)),i=n(22),l=n(17),u=n(18),p=n(20),m=n(19),_=(r.a.PureComponent,n(25)),g=n.n(_),f=n(41),d=n(14),h=n(57),y=n.n(h),b=n(441),v=n(438),E=n(444),O=n(437),S=n(447),k=n(450),j=n(448),w=n(449),x=n(435),N=n(87),T=n.n(N);function C(e){return JSON.stringify({coeff:e.coeff.toString(16),d:e.d.toString(16),dmp1:e.dmp1.toString(16),dmq1:e.dmq1.toString(16),e:e.e.toString(16),n:e.n.toString(16),p:e.p.toString(16),q:e.q.toString(16)})}function A(e,t){var n=e+t+"407e0fce8fcb1cee870e19575260b6f2";return T.a.generateRSAKey(n,1024)}var R=n(45),L=n.n(R);function J(e){var t=new TextEncoder("utf-8").encode(e);return crypto.subtle.digest("SHA-256",t).then((function(e){return function(e){for(var t="",n=new DataView(e),a=0;a<n.byteLength;a+=4){var r=n.getUint32(a).toString(16),o=("00000000"+r).slice(-"00000000".length);t+=o}return t}(e)}))}var I=function(e){var t=e.open,n=e.setOpen,o=Object(a.useState)(""),c=Object(d.a)(o,2),s=c[0],i=c[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),p=u[0],m=u[1],_=function(e){"username"==e.target.id&&i(e.target.value),"password"==e.target.id&&m(e.target.value)},h=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(s,p),o=t,n=T.a.publicKeyString(o),e.next=4,J(p);case 4:a=e.sent,r={username:s,password:a,public_key:n},L.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(r),url:"/api/signup/",success:function(e,n){console.log(e),localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",s),alert(e.msg)},error:function(e,t){console.log(e),alert(e.responseJSON.msg)}}),localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",s);case 9:case"end":return e.stop()}var o}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(S.a,{open:t,onClose:y},r.a.createElement(x.a,null,"Register"),r.a.createElement(j.a,null,r.a.createElement(w.a,null,"To register to this website, please enter your username and also password here."),r.a.createElement(O.a,{autoFocus:!0,margin:"normal",id:"username",label:"Username",type:"text",fullWidth:!0,variant:"standard",value:s,onChange:_}),r.a.createElement(O.a,{autoFocus:!0,margin:"normal",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:p,onChange:_})),r.a.createElement(k.a,null,r.a.createElement(E.a,{onClick:y},"Cancel"),r.a.createElement(E.a,{onClick:h},"Register"))))},F=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(i.g)(),s=Object(a.useState)(""),l=Object(d.a)(s,2),u=l[0],p=l[1],m=Object(a.useState)(""),_=Object(d.a)(m,2),h=_[0],E=_[1],O=function(e){"username"==e.target.id&&p(e.target.value),"password"==e.target.id&&E(e.target.value)},S=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A(u,h),e.next=3,J(h);case 3:n=e.sent,a={username:u,password:n},L.a.ajax({method:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(a),url:"/api/login/",success:function(e,n){localStorage.setItem("SenderRSAkey",C(t)),localStorage.setItem("username",u),console.log(e),c.push("/chatpage")},error:function(e,t){console.log(e),alert("Invalid Username or Password.")}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.container},r.a.createElement(I,{open:n,setOpen:o}),r.a.createElement("div",{className:y.a.background}),r.a.createElement("div",{className:y.a.content},r.a.createElement("div",{className:y.a.register,role:"button",onClick:function(){o(!0)}},"Register"),r.a.createElement(b.a,{className:y.a.form},r.a.createElement("h1",{className:y.a.heading},"Login"),r.a.createElement("div",{className:y.a.input},r.a.createElement("label",{htmlFor:"name"},"Login Name"),r.a.createElement("input",{type:"text",name:"username",id:"username",autoComplete:"none",value:u,onChange:O})),r.a.createElement("div",{className:y.a.input},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:h,onChange:O})),r.a.createElement("div",{className:y.a.submitContainer},r.a.createElement(v.a,{variant:"contained",onClick:S},"Login"))))))},P=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),n}(r.a.Component),U=n(23),B=n(29),K=n.n(B),q=n(443),H=n(446),M=n(222),X=n.n(M),z=n(218),D=n(74),W=n.n(D),G=n(73),V=n.n(G);function Z(e,t,n){return Q.apply(this,arguments)}function Q(){return(Q=Object(f.a)(g.a.mark((function e(t,n,a){var r,o,c,s,i,l,u,p,m,_,f,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("data:",t),r=W.a.utils.hex.toBytes(t.data.encryptedHex),console.log("encryptedBytes:",r),o=t.from==n?t.data.encrypted_msg_info_for_sender:t.data.encrypted_msg_info,console.log("encrypted_msg_info:",o),c=cryptico.decrypt(o.cipher,a),console.log("msg_info:",c),"failure"!=c.status){e.next=9;break}return e.abrupt("return",!1);case 9:if(console.log(c.plaintext),c=c.plaintext,console.log("msg_info:",c),c=JSON.parse(c),console.log("msg_info:",c),s=c.aes,console.log(s),i=new W.a.ModeOfOperation.cbc(new Uint8Array(s.key_256.split(",")),new Uint8Array(s.iv.split(","))),l=i.decrypt(r),console.log("decryptedBytes:",l),u=W.a.utils.utf8.fromBytes(l),console.log("decryptedText:",u),p=JSON.parse(u.slice(0,c.data_length)),console.log("plaintext:",p),m=p.msg,console.log("msg:",m),t.from==n){e.next=42;break}if(_=p.signature.cipher,console.log("signature:",_),f=cryptico.decrypt(_,a),console.log("hash:",f),"failure"!=f.status){e.next=33;break}return console.log("Invalid signature"),e.abrupt("return",!1);case 33:return d={aes_key:aes_key,msg:m},e.next=36,J(JSON.stringify(d));case 36:if(e.sent!=f){e.next=40;break}e.next=42;break;case 40:return console.log("Invalid signature"),e.abrupt("return",!1);case 42:return e.abrupt("return",m);case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){L.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},url:"/api/token/refresh",success:function(e,t){alert("Refresh Token Successfully!")},error:function(e,t,n){console.log(e),console.log(t),console.log(n),alert("Refresh Token Failed!")}})}function $(e,t,n){return ee.apply(this,arguments)}function ee(){return(ee=Object(f.a)(g.a.mark((function e(t,n,a){var r,o,c,s=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>3&&void 0!==s[3]?s[3]:0,o={target:t,start_message_index:r},c=[],e.next=5,L.a.ajax({method:"POST",dataType:"json",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(o),url:"/api/history/",success:function(e,t){for(var r=e.msgs,o=function(e){Z(r[e],n,a).then((function(t){0!=t&&c.push({msg:t,date:r[e].datetime,to:r[e].data.to})}))},s=0;s<r.length;s++)o(s);return c},error:function(e,t,n){return console.log(e),console.log(t),console.log(n),"error: ajax failed"}});case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(f.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t},a="",e.next=5,L.a.ajax({method:"POST",dataType:"text",contentType:"application/json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},data:JSON.stringify(n),url:"/api/public_keys/",success:function(e,t){return a=e,e},error:function(e,t,n){console.log(e),console.log(t),console.log(n)}});case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){if(e.length%16!=0){var t=e.length%16,n=new Uint8Array(16-t);n=crypto.getRandomValues(n);for(var a="",r=0;r<n.length;r++)a+=String.fromCharCode((n[r]+32)%127);return e+a}return e}function re(e,t,n,a,r){return oe.apply(this,arguments)}function oe(){return(oe=Object(f.a)(g.a.mark((function e(t,n,a,r,o){var c,s,i,l,u,p,m,_,f,d,h,y,b,v,E,O;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=crypto.getRandomValues(new Uint8Array(32)),s=crypto.getRandomValues(new Uint8Array(16)),i={key_256:c.toString(),iv:s.toString()},l={aes_key:i,msg:t},e.next=6,J(JSON.stringify(l));case 6:return u=e.sent,p=cryptico.encrypt(u,a,r),m=JSON.stringify({msg:t,signature:p}),_=m.length,f=W.a.utils.utf8.toBytes(ae(m)),d=new W.a.ModeOfOperation.cbc(c,s),h=d.encrypt(f),y=W.a.utils.hex.fromBytes(h),b={data_length:_,aes:i},v=cryptico.encrypt(JSON.stringify(b),a),E=cryptico.encrypt(JSON.stringify(b),o),O={encryptedHex:y,encrypted_msg_info:v,encrypted_msg_info_for_sender:E,to:n},console.log(O),e.abrupt("return",O);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=n(224).a.connect("wss://"+location.host,{transports:["websocket"],rememberUpgrade:!0,cors:{origin:"*"},credentials:!0,methods:["GET","POST"]}),se=function(){!1===ce.connected&&!1===ce.connecting?(console.log("tryReconnect..."),ce.connect(),ce.emit("join",{})):console.log("connected")},ie=function(){var e=Object(a.useRef)(null),t=Object(i.g)(),n=Object(a.useState)([]),o=Object(d.a)(n,2),c=o[0],s=o[1],l=Object(a.useState)([]),u=Object(d.a)(l,2),p=u[0],m=u[1],_=localStorage.getItem("username"),h=Object(a.useState)(""),y=Object(d.a)(h,2),b=y[0],v=y[1],E=Object(a.useState)(""),O=Object(d.a)(E,2),S=O[0],k=O[1],j=Object(a.useState)(""),w=Object(d.a)(j,2),x=w[0],C=w[1],A=function(e){var t=JSON.parse(e),n=new N.RSAKey;return n.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dmp1,t.dmq1,t.coeff),n}(localStorage.getItem("SenderRSAkey")),R=T.a.publicKeyString(A),J=localStorage.getItem("username"),I={};ce.emit("join",{}),Object(a.useEffect)((function(){P()}),[]),Object(a.useEffect)((function(){setInterval(se,6e4),setInterval(P,6e4)}),[]),ce.on("message",(function(t){Z(t,J,A).then((function(n){var a=t.from;a!=S&&a!=_||(s([].concat(Object(U.a)(c),[{msg:n,date:t.datetime,to:t.data.to}])),e.current.scrollToBottom())}))}));var F=function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(""),re(b,S,x,A,R).then((function(e){ce.emit("message",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){L.a.ajax({method:"GET",dataType:"json",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},url:"/api/usernames/",success:function(e,t){m(e.usernames.filter((function(e){return e!==_})))},error:function(e,t){}})},B=function(){var t=Object(f.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=p[n.target.id],k(a),!I.hasOwnProperty(a)){t.next=6;break}C(I[a]),t.next=8;break;case 6:return t.next=8,te(a).then((function(e){C(e),I[a]=e}));case 8:return t.next=10,$(a,J,A).then((function(e){s(e)}));case 10:e.current.scrollToBottom();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.container,onKeyDown:function(e){"Enter"===e.key&&F()}},r.a.createElement("div",{className:K.a.background}),r.a.createElement("div",{className:K.a.chat_container},r.a.createElement("div",{className:K.a.logOut},r.a.createElement(H.a,{"aria-label":"LogOut",size:"small",onClick:function(){L.a.ajax({method:"GET",url:"/api/logout/",headers:{"X-CSRF-TOKEN":V.a.get("csrf_access_token")},success:function(e,n){t.push("/")},error:function(e,t){}})}},r.a.createElement(X.a,{fontSize:"inherit"}),"LogOut")),r.a.createElement("div",{className:K.a.chat_header},r.a.createElement("h1",null,"ChatPage"),r.a.createElement("h5",null,"Welcome! ",_)),r.a.createElement("div",{className:K.a.chat_app_container},r.a.createElement("div",{className:K.a.chat_app_contactList_container},p!==[]&&p.map((function(e,t){return r.a.createElement("li",{key:t,id:t,className:K.a.chat_app_contactList_contact,onClick:B},e)})),r.a.createElement("button",{onClick:Y,className:K.a.refresh_token_button},"Refresh Token")),r.a.createElement("div",{className:K.a.chat_app_body},r.a.createElement("div",{className:K.a.chat_app_contact},r.a.createElement("h3",null,"Current Contact: ",""!==S&&S)),r.a.createElement("div",{className:K.a.chat_app_msg_container},r.a.createElement(z.Scrollbars,{ref:e,className:K.a.msg_scrollbar,universal:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},c!==[]&&c.map((function(e){return r.a.createElement("p",{className:e.to===_?K.a.chat_app_msg_inMsg:K.a.chat_app_msg_outMsg},r.a.createElement("p",null,e.msg),r.a.createElement("span",null,e.date))})))),r.a.createElement("div",{className:K.a.chat_app_footer},r.a.createElement("input",{placeholder:" Enter message...",type:"text",value:b,onChange:function(e){v(e.target.value)}}),r.a.createElement("button",{onClick:F,type:"button"},r.a.createElement(q.a,null))))))))},le=n(223),ue=n.n(le),pe=n(103),me=n.n(pe),_e=(r.a.PureComponent,"/login"),ge="/chatpage",fe=function(){return r.a.createElement(s.a,null,r.a.createElement(P,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:F}),r.a.createElement(i.b,{exact:!0,path:_e,component:F}),r.a.createElement(i.b,{exact:!0,path:ge,component:ie}),r.a.createElement(i.a,{from:"*",to:"/"})))};var de=function(){return r.a.createElement(fe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,n){e.exports={container:"styles_container__1qw04",background:"styles_background__1hcBy",content:"styles_content__2QTT4",register:"styles_register__1t3Ar",form:"styles_form__hyzsE",heading:"styles_heading__3AtM5",input:"styles_input__VZBS5",submitContainer:"styles_submitContainer__3Y4x4"}}},[[241,1,2]]]);