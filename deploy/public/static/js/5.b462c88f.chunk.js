(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[5],{114:function(e,a,t){"use strict";var r=t(0),l=t.n(r),s=t(111),i=t(108),n=t(1),c=t(2),o=t(3),m=t.n(o),d=t(5),u=l.a.forwardRef((function(e,a){var t,r=e.as,s=void 0===r?"div":r,i=e.className,o=e.fluid,u=e.bsPrefix,b=Object(c.a)(e,["as","className","fluid","bsPrefix"]),f=((t={})[u=Object(d.a)(u,"jumbotron")]=!0,t[u+"-fluid"]=o,t);return l.a.createElement(s,Object(n.a)({ref:a},b,{className:m()(i,f)}))}));u.defaultProps={fluid:!1},u.displayName="Jumbotron";var b=u;a.a=function(e){return l.a.createElement(s.a,{style:{marginTop:"30px",paddingTop:"50px"}},l.a.createElement(i.a,{style:{marginTop:""}},l.a.createElement(b,{style:{borderRadius:"50px",padding:"10px"}},l.a.createElement("h1",{style:{textAlign:"center"}},e.text))))}},115:function(e,a,t){"use strict";var r=t(1),l=t(2),s=t(3),i=t.n(s),n=t(0),c=t.n(n),o=t(5),m=t(30),d=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))},u=t(31),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(l.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return c.a.createElement(d,Object(r.a)({ref:a,className:i()(n?b+"-"+n:b,s)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=d("h5"),p=d("h6"),O=Object(m.a)("card-body"),j=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,m=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,p=e.as,j=void 0===p?"div":p,x=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(o.a)(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return c.a.createElement(u.a.Provider,{value:N},c.a.createElement(j,Object(r.a)({ref:a},x,{className:i()(s,y,m&&"bg-"+m,d&&"text-"+d,b&&"border-"+b)}),f?c.a.createElement(O,null,v):v))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=f,j.Title=Object(m.a)("card-title",{Component:v}),j.Subtitle=Object(m.a)("card-subtitle",{Component:p}),j.Body=O,j.Link=Object(m.a)("card-link",{Component:"a"}),j.Text=Object(m.a)("card-text",{Component:"p"}),j.Header=Object(m.a)("card-header"),j.Footer=Object(m.a)("card-footer"),j.ImgOverlay=Object(m.a)("card-img-overlay");a.a=j},116:function(e,a,t){"use strict";var r=t(1),l=t(2),s=t(3),i=t.n(s),n=t(0),c=t.n(n),o=t(5),m=t(32),d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,n=e.size,d=e.active,u=e.className,b=e.block,f=e.type,v=e.as,p=Object(l.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),O=Object(o.a)(t,"btn"),j=i()(u,O,d&&"active",O+"-"+s,b&&O+"-block",n&&O+"-"+n);if(p.href)return c.a.createElement(m.a,Object(r.a)({},p,{as:v,ref:a,className:i()(j,p.disabled&&"disabled")}));a&&(p.ref=a),v||(p.type=f);var x=v||"button";return c.a.createElement(x,Object(r.a)({},p,{className:j}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=d},117:function(e,a,t){"use strict";var r=t(1),l=t(2),s=t(3),i=t.n(s),n=t(0),c=t.n(n),o=(t(53),t(4)),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,o=e.type,m=Object(l.a)(e,["as","className","type"]);return c.a.createElement(s,Object(r.a)({},m,{ref:a,className:i()(n,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"};var b=u,f=c.a.createContext({controlId:void 0}),v=t(5),p=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.isStatic,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(n.useContext)(f),y=x.controlId,N=x.custom?[o,"custom-control-input"]:[s,"form-check-input"],E=N[0],P=N[1];return s=Object(v.a)(E,P),c.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,className:i()(m,s,d&&"is-valid",u&&"is-invalid",b&&"position-static")}))}));p.displayName="FormCheckInput",p.defaultProps={type:"checkbox"};var O=p,j=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(n.useContext)(f),b=u.controlId,p=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(v.a)(O,j),c.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||b,className:i()(o,t)}))}));j.displayName="FormCheckLabel";var x=j,y=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=e.disabled,u=e.isValid,p=e.isInvalid,j=e.feedback,y=e.className,N=e.style,E=e.title,P=e.type,h=e.label,I=e.children,C=e.custom,g=e.as,w=void 0===g?"input":g,F=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||C,R=k?[o,"custom-control"]:[s,"form-check"],V=R[0],L=R[1];s=Object(v.a)(V,L);var S=Object(n.useContext)(f).controlId,T=Object(n.useMemo)((function(){return{controlId:t||S,custom:k}}),[S,k,t]),B=null!=h&&!1!==h&&!I,G=c.a.createElement(O,Object(r.a)({},F,{type:"switch"===P?"checkbox":P,ref:a,isValid:u,isInvalid:p,isStatic:!B,disabled:d,as:w}));return c.a.createElement(f.Provider,{value:T},c.a.createElement("div",{style:N,className:i()(y,s,k&&"custom-"+P,m&&s+"-inline")},I||c.a.createElement(c.a.Fragment,null,G,B&&c.a.createElement(x,{title:E},h),(u||p)&&c.a.createElement(b,{type:u?"valid":"invalid"},j))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=O,y.Label=x;var N=y,E=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(n.useContext)(f),y=x.controlId,N=x.custom?[o,"custom-file-input"]:[s,"form-control-file"],E=N[0],P=N[1];return s=Object(v.a)(E,P),c.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,type:"file",lang:b,className:i()(m,s,d&&"is-valid",u&&"is-invalid")}))}));E.displayName="FormFileInput";var P=E,h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(n.useContext)(f),b=u.controlId,p=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(v.a)(O,j),c.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||b,className:i()(o,t),"data-browse":d["data-browse"]}))}));h.displayName="FormFileLabel";var I=h,C=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.disabled,d=e.isValid,u=e.isInvalid,p=e.feedback,O=e.className,j=e.style,x=e.label,y=e.children,N=e.custom,E=e.lang,h=e["data-browse"],C=e.as,g=void 0===C?"div":C,w=e.inputAs,F=void 0===w?"input":w,k=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=N?[o,"custom"]:[s,"form-file"],V=R[0],L=R[1];s=Object(v.a)(V,L);var S=Object(n.useContext)(f).controlId,T=Object(n.useMemo)((function(){return{controlId:t||S,custom:N}}),[S,N,t]),B=null!=x&&!1!==x&&!y,G=c.a.createElement(P,Object(r.a)({},k,{ref:a,isValid:d,isInvalid:u,disabled:m,as:F,lang:E}));return c.a.createElement(f.Provider,{value:T},c.a.createElement(g,{style:j,className:i()(O,s,N&&"custom-file")},y||c.a.createElement(c.a.Fragment,null,N?c.a.createElement(c.a.Fragment,null,G,B&&c.a.createElement(I,{"data-browse":h},x)):c.a.createElement(c.a.Fragment,null,B&&c.a.createElement(I,null,x),G),(d||u)&&c.a.createElement(b,{type:d?"valid":"invalid"},p))))}));C.displayName="FormFile",C.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},C.Input=P,C.Label=I;var g=C,w=(t(55),c.a.forwardRef((function(e,a){var t,s,o=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,b=e.id,p=e.className,O=e.isValid,j=e.isInvalid,x=e.plaintext,y=e.readOnly,N=e.custom,E=e.as,P=void 0===E?"input":E,h=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(n.useContext)(f).controlId,C=N?[m,"custom"]:[o,"form-control"],g=C[0],w=C[1];if(o=Object(v.a)(g,w),x)(s={})[o+"-plaintext"]=!0,t=s;else if("file"===d){var F;(F={})[o+"-file"]=!0,t=F}else if("range"===d){var k;(k={})[o+"-range"]=!0,t=k}else if("select"===P&&N){var R;(R={})[o+"-select"]=!0,R[o+"-select-"+u]=u,t=R}else{var V;(V={})[o]=!0,V[o+"-"+u]=u,t=V}return c.a.createElement(P,Object(r.a)({},h,{type:d,ref:a,readOnly:y,id:b||I,className:i()(p,t,O&&"is-valid",j&&"is-invalid")}))})));w.displayName="FormControl",w.Feedback=b;var F=w,k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(f.Provider,{value:p},c.a.createElement(u,Object(r.a)({},b,{ref:a,className:i()(s,t)}),o))}));k.displayName="FormGroup";var R=k,V=t(108),L=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,o=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(n.useContext)(f).controlId;o=Object(v.a)(o,"form-label");var j="col-form-label";"string"===typeof m&&(j=j+"-"+m);var x=i()(u,o,d&&"sr-only",m&&j);return b=b||O,m?c.a.createElement(V.a,Object(r.a)({as:"label",className:x,htmlFor:b},p)):c.a.createElement(s,Object(r.a)({ref:a,className:x,htmlFor:b},p))}));L.displayName="FormLabel",L.defaultProps={column:!1,srOnly:!1};var S=L,T=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,o=void 0===n?"small":n,m=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},d,{ref:a,className:i()(s,t,m&&"text-muted")}))}));T.displayName="FormText";var B=T,G=c.a.forwardRef((function(e,a){return c.a.createElement(N,Object(r.a)({},e,{ref:a,type:"switch"}))}));G.displayName="Switch",G.Input=N.Input,G.Label=N.Label;var z=G,J=t(30),M=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,n=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),c.a.createElement(d,Object(r.a)({},u,{ref:a,className:i()(n,o&&"was-validated",s&&t+"-inline")}))}));M.displayName="Form",M.defaultProps={inline:!1},M.Row=Object(J.a)("form-row"),M.Group=R,M.Control=F,M.Check=N,M.File=g,M.Switch=z,M.Label=S,M.Text=B;a.a=M},120:function(e,a,t){"use strict";t.r(a);var r=t(33),l=t(25),s=t(15),i=t(0),n=t.n(i),c=t(19),o=t.n(c),m=t(110),d=t(111),u=t(108),b=t(115),f=t(117),v=t(116),p=t(18),O=t(114),j=t(6);a.default=function(e){var a=Object(i.useContext)(p.a),t=Object(s.a)(a,2),c=t[0],x=t[1],y=Object(i.useState)({name:"",email:"",password:""}),N=Object(s.a)(y,2),E=N[0],P=N[1],h=function(e){console.log(e.target.name);var a=e.target.value;P(Object(l.a)(Object(l.a)({},E),{},Object(r.a)({},e.target.name,a)))};return c.token?n.a.createElement(j.a,{strict:!0,from:"/signup",to:"/"}):n.a.createElement(m.a,null,n.a.createElement(O.a,{text:"SignUp"}),n.a.createElement(d.a,null,n.a.createElement(u.a,null,n.a.createElement(b.a,{style:{}},n.a.createElement(b.a.Body,null,n.a.createElement(f.a,null,n.a.createElement(f.a.Group,{controlId:"formBasicName"},n.a.createElement(f.a.Label,null,"Name"),n.a.createElement(f.a.Control,{type:"text",value:E.name,name:"name",onChange:h,placeholder:"Enter your name..."})),n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement(f.a.Label,null,"Email address"),n.a.createElement(f.a.Control,{type:"email",value:E.email,name:"email",onChange:h,placeholder:"Enter email"})),n.a.createElement(f.a.Group,{controlId:"formBasicPassword"},n.a.createElement(f.a.Label,null,"Password"),n.a.createElement(f.a.Control,{type:"password",value:E.password,name:"password",onChange:h,placeholder:"Password"})),n.a.createElement(v.a,{variant:"primary",onClick:function(){var a=E;o.a.post("https://mern--todo--list.herokuapp.com/signup",a).then((function(a){var t=a.data.userId,r=a.data.token;null!==a.data&&(x({userId:t,isLogIn:!0,token:r}),localStorage.setItem("userData",JSON.stringify({userId:t,token:r})),e.render(t))}))},type:"button"},"Submit")))))))}}}]);
//# sourceMappingURL=5.b462c88f.chunk.js.map