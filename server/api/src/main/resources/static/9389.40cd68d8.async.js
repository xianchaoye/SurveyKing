(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[9389],{17707:function(W,Z,t){"use strict";t.r(Z),t.d(Z,{default:function(){return ge}});var g=t(40807),E=t(78210),j=t(67294),m=t(54707),y=t(48187),e=t(85893);function D(i){var n=i.schema,o=i.index,s=i.seqNo,a=(0,m.AK)("-body-questionSet"),c=(0,j.useContext)(g.ZX),v=c.questionNumber;return(0,e.jsxs)("div",{className:a,children:[(0,e.jsxs)("div",{className:a+"-title",children:[v?s||"".concat(o+1,"."):"",(0,e.jsx)(E.Z,{html:n.title})]}),i.children,(0,e.jsx)("div",{className:a+"-splitLine"})]})}(0,y.eC)("QuestionSet",D,"antdForm");var R=t(9715),N=t(71257),F=t(94657),S=t(9761),C=t(67635),X=function(){var n=(0,m.AK)(),o=(0,j.useContext)(g.ZX),s=o.schema;return(0,e.jsxs)("div",{className:n+"-header",children:[(0,e.jsx)("div",{className:n+"-header-title",children:(0,e.jsx)(C.hl,{html:s.title})}),(0,e.jsx)("div",{className:n+"-header-description",children:(0,e.jsx)(C.hl,{html:s.description})})]})},$=function(n){var o=(0,m.AK)();return(0,e.jsx)("div",{className:o+"-body",children:n.children})},pe=t(57663),I=t(71577),k=(0,S.Pi)(function(){var i,n,o=(0,m.AK)("-footer"),s=(0,j.useContext)(g.ZX),a=s.schema,c=s.loading,v=(0,m.Rk)(),d=v.pagination,r=d.pageSize>1,l=d.current===1,u=d.current===d.pageSize;return(0,e.jsxs)("div",{className:o,children:[u&&(0,e.jsx)("div",{className:o+"-desc",style:{userSelect:"none"},children:(0,e.jsx)(C.hl,{html:a==null||(i=a.attribute)===null||i===void 0?void 0:i.suffix})}),(0,e.jsxs)("div",{className:o+"-pagination",children:[r&&!l&&(0,e.jsx)("div",{children:(0,e.jsx)(I.Z,{type:"primary",block:!0,onClick:function(){return v.handlePrev()},children:"\u4E0A\u4E00\u9875"})}),r&&!u&&(0,e.jsx)("div",{children:(0,e.jsx)(I.Z,{type:"primary",block:!0,onClick:function(){return v.handleNext()},children:"\u4E0B\u4E00\u9875"})}),u&&(0,e.jsx)("div",{children:(0,e.jsx)(I.Z,{type:"primary",block:!0,onClick:function(){return v.submit()},loading:c,children:(0,e.jsx)(C.hl,{html:((n=a.attribute)===null||n===void 0?void 0:n.submitButton)||"\u63D0\u4EA4"})})}),r&&(0,e.jsxs)("div",{className:o+"-pagination-info",children:["\u7B2C",d.current,"\u9875/\u5171",d.pageSize,"\u9875"]})]})]})}),Fe=t(47673),A=t(4107),Se=t(39002),G=t(68351),Ae=t(14965),K=t(68318),Be=t(77883),J=t(85986),w=t(29985),q=t(46842),_=t(64302),ee=t(27484),B=t.n(ee),Ze=t(33852);B().locale("zh-cn");var ne="YYYY-MM-DD",te="YYYY-MM-DD HH:mm:ss",re="HH:mm:ss";function M(i,n){if(!!i){if(n==="date")return B()(i,ne);if(n==="dateTime")return B()(i,te);if(n==="time")return B()(i,re)}}var ae=function(n){var o=n.onChange,s=n.type,a=n.value,c=n.suffix,v=n.style,d=v===void 0?{width:"100%"}:v;return s==="number"?(0,e.jsx)(J.Z,{onChange:o,value:a,style:d,addonAfter:c}):s==="date"?(0,e.jsx)(K.Z,{onChange:function(l,u){o(u)},value:M(a,s),style:d}):s==="dateTime"?(0,e.jsx)(K.Z,{showTime:!0,onChange:function(l,u){return o(u)},value:M(a,s),style:d}):s==="time"?(0,e.jsx)(G.Z,{value:M(a,s),onChange:function(l,u){return o(u)},style:d}):s==="mobile"?(0,e.jsx)(A.Z,{prefix:(0,e.jsx)(w.Z,{}),onChange:function(l){return o(l.target.value)},value:a}):s==="idCard"?(0,e.jsx)(A.Z,{prefix:(0,e.jsx)(q.Z,{}),onChange:function(l){return o(l.target.value)},value:a,style:d}):s==="email"?(0,e.jsx)(A.Z,{prefix:(0,e.jsx)(_.Z,{}),onChange:function(l){return o(l.target.value)},value:a,style:d}):s==="password"?(0,e.jsx)(A.Z.Password,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:function(l){return o(l.target.value)},value:a,suffix:c,style:d}):(0,e.jsx)(A.Z,{onChange:function(l){return o(l.target.value)},value:a,suffix:c,style:d})},Ee=t(49111),De=function(n){var o=n.onChange,s=useRef(null),a=useRef(),c=useRef(),v=useState(0),d=_slicedToArray(v,2),r=d[0],l=d[1];return useEffect(function(){var u=s.current;if(u){var h,x=new SignaturePad(s.current);x.addEventListener("beginStroke",function(){l(1)}),a.current=x;var f=Math.max(window.devicePixelRatio||1,1);u.width=u.offsetWidth*f,u.height=u.offsetHeight*f,(h=u.getContext("2d"))===null||h===void 0||h.scale(f,f)}},[]),_jsxs("div",{className:"signature-pad",children:[_jsx("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#aaa",visibility:c.current?"hidden":"visible"},children:"\u70B9\u51FB\u7B7E\u540D"}),_jsxs("div",{className:"signature",children:[_jsx("canvas",{ref:s,style:{width:"100%",height:"100%",touchAction:"none",userSelect:"none",display:r!==2?"block":"none"}}),r===2&&_jsx("img",{src:c.current||void 0})]}),_jsxs("div",{className:"save-signature",children:[_jsx("span",{children:"\u7B7E\u540D\u5B8C\u6210\u540E\uFF0C\u8BF7\u70B9\u51FB\u3010\u5B8C\u6210\u3011\u6309\u94AE"}),_jsx("div",{children:_jsxs(_Space,{children:[r===1&&_jsx(_Button,{type:"link",onClick:function(){var h;(h=a.current)===null||h===void 0||h.clear(),l(0)},children:"\u6E05\u7A7A"}),(r===0||r===1)&&_jsx(_Button,{type:"primary",disabled:r!==1,ghost:!0,size:"small",onClick:function(){var h;o(a.current.toDataURL()),c.current=(h=a.current)===null||h===void 0?void 0:h.toDataURL(),l(2)},children:"\u5B8C\u6210"}),r===2&&_jsx(_Button,{type:"primary",ghost:!0,size:"small",onClick:function(){var h;l(0),(h=a.current)===null||h===void 0||h.clear()},children:"\u91CD\u7B7E"})]})})]})]})},se=t(3024),ie=(0,S.Pi)(function(){var i=(0,j.useContext)(g.ZX),n=i.progressBar,o=(0,m.AK)(),s=(0,m.Rk)(),a=s.progress;return n?(0,e.jsx)(se.Z,{enabled:!0,top:0,innerActiveClass:"fixed",children:(0,e.jsx)("div",{className:o+"-progress",children:(0,e.jsx)("div",{className:"progress-bar s-prog-wait",children:(0,e.jsx)("div",{className:"progress-done  s-prog-done",style:{width:"".concat(a*100,"%")}})})})}):(0,e.jsx)(e.Fragment,{})}),Pe=function(n){var o,s=n.optionId,a=n.questionId,c=n.checked,v=n.checkedCount,d=useSurvey(),r=d.statistics,l=r==null?void 0:r.questionStatistics[a],u=((l==null?void 0:l.optionStatistics.reduce(function(f,p){return f+p.count},0))||0)+v,h=(l==null||(o=l.optionStatistics.find(function(f){return f.optionId===s}))===null||o===void 0?void 0:o.count)||0;h=c?h+1:h;var x="".concat(Math.floor(h/u*1e3)/10,"%");return v===0?_jsx(_Fragment,{}):_jsxs("span",{className:"vote-info",children:[_jsxs("span",{className:"vote-info-cnt ",children:[h,"\u7968"]}),_jsx("span",{className:"vote-info-percent ",children:x}),_jsx("div",{className:"vote-info-bar",children:_jsx("div",{className:"vote-info-bar-fill",style:{width:x}})})]})},le=function(n){var o=n.schema,s=n.type,a=o.attribute,c=a===void 0?{}:a,v=c.examCorrectAnswer,d=(0,m.Al)(),r=d.correctAnswerVisible,l=d.mode;return v&&r&&l==="exam"?s==="FillBlank"||s==="HorzBlank"||s==="MultipleBlank"?(0,e.jsx)("span",{className:"correct-answer",children:v}):(0,e.jsx)("span",{className:"correct-answer",children:"\uFF08\u6B63\u786E\u7B54\u6848\uFF09"}):(0,e.jsx)(e.Fragment,{})},oe=function(n){var o=n.schema,s=o.attribute,a=s===void 0?{}:s,c=a.examScore,v=(0,m.Al)(),d=v.mode,r=v.examScoreVisible;return c&&d==="exam"&&r?(0,e.jsxs)("span",{className:"question-score",children:["\uFF08",c,"\u5206\uFF09"]}):(0,e.jsx)(e.Fragment,{})};function ue(i){var n=i.schema,o=i.index,s=i.qsIndex,a=i.required,c=i.error,v=i.replaceTitle,d=i.seqNo,r=(0,j.useContext)(g.ZX),l=r.questionNumber,u=(0,m.AK)("-body-question"),h=(0,j.useState)(),x=(0,F.Z)(h,2),f=x[0],p=x[1],Y=(0,m.Rk)();(0,j.useEffect)(function(){if(f){var P,b;(P=document.querySelector("[data-id='".concat(n.id,"']")))===null||P===void 0||P.classList.remove("ant-form-item-has-error"),(b=document.querySelector("[data-id='".concat(n.id,"']")))===null||b===void 0||b.querySelectorAll("[data-id]").forEach(function(Ne){Ne.classList.remove("ant-form-item-has-error")})}if(c.length>0){var H,Ce=c[0].split("^"),O=(0,F.Z)(Ce,2),U=O[0],Q=O[1],z;Q?(z=document.querySelector("[data-id='".concat(U,"']")),p(Q)):(z=document.querySelector("[data-id='".concat(n.id,"']")),p(U)),(H=z)===null||H===void 0||H.classList.add("ant-form-item-has-error")}else f&&p(void 0)},[c]);var T="";s!==void 0&&(T+=s+1+"-"),o!==void 0&&(T+=o+1+".");var ye=function(){return f?(0,e.jsx)("span",{className:"question-tag error animated",children:(0,e.jsx)("span",{children:f})}):(0,e.jsx)(e.Fragment,{})};return(0,e.jsx)("div",{className:u,children:(0,e.jsx)(N.Z.Item,{label:(0,e.jsxs)("span",{className:u+"-header",children:[l?d||T:"",(0,e.jsx)(C.hl,{html:v||n.title}),(0,e.jsx)(oe,{schema:n}),ye()]}),labelCol:{span:24},wrapperCol:{span:24},required:a,children:i.children})})}(0,y.eC)("Question",(0,S.Pi)(ue),"antdForm");var Re=t(84305),de=t(88182),ce=t(82925),ve=t(94184),he=t.n(ve);B().locale("zh-cn");function me(i){var n=i.headerVisible,o=i.footerVisible,s=i.schema,a=(0,m.AK)(),c=(0,m.Al)(),v=function(){var r,l=(r=s.attribute)===null||r===void 0?void 0:r.headerImage;if(l)return(0,e.jsx)("img",{src:"/api/public/preview/".concat(l),style:{maxWidth:"100%"}})};return(0,e.jsxs)("div",{className:he()(a,{preview:c.isPreview}),children:[(0,e.jsx)(ie,{}),(0,e.jsx)("div",{className:a+"-banner",children:v()}),n&&(0,e.jsx)(X,{}),(0,e.jsx)(de.ZP,{locale:ce.Z,children:(0,e.jsx)($,{children:i.children})}),o&&(0,e.jsx)(k,{})]})}(0,y.eC)("Survey",me,"antdForm");var Ie=t(13062),fe=t(71230),Me=t(89032),L=t(15746),xe=t(11849);function V(i){var n=i.schema,o=i.onChange,s=i.value,a=s===void 0?{}:s,c=n.children,v=(0,m.AK)("-body-question");function d(r,l){a[r]=l,l===""&&delete a[r],o((0,xe.Z)({},a))}return(0,e.jsx)("div",{children:c==null?void 0:c.map(function(r){var l=r.id,u=r.attribute,h=r.title,x=u==null?void 0:u.suffix,f=u==null?void 0:u.dataType;return(0,e.jsxs)(fe.Z,{style:{marginBottom:10},"data-id":l,children:[h&&(0,e.jsx)(L.Z,{className:v+"-option",span:4,children:r.title&&(0,e.jsx)("span",{className:v+"-option-title",children:(0,e.jsx)(C.hl,{html:r.title})})},r.id),(0,e.jsxs)(L.Z,{span:24,children:[(0,e.jsx)(ae,{type:f,value:a[l],onChange:function(Y){return d(l,Y)},suffix:x&&(0,e.jsx)("span",{className:v+"-option-suffix",children:(0,e.jsx)(C.hl,{html:x})})}),(0,e.jsx)(le,{schema:r,type:n.type})]})]},l)})})}(0,y.RM)("FillBlank",V,"antdForm"),(0,y.RM)("MultipleBlank",V,"antdForm");var je=function(n){return(0,e.jsx)(e.Fragment,{children:n.children})},ge=je},78210:function(W,Z,t){"use strict";var g=t(27856),E=t.n(g),j=t(15020),m=t(85893),y=function(D){var R=D.html,N=R===void 0?"":R,F=D.replaceP,S=F===void 0?!0:F;return S?(0,m.jsx)("div",{className:"pe-view",children:typeof N=="string"&&(0,j.ZP)(E().sanitize(N,{ADD_TAGS:["iframe"],ADD_ATTR:["allow","allowfullscreen","frameborder","scrolling"]}).replace(/<p>/,"<span>").replace(/<\/p>/,"</span>"))}):(0,m.jsx)(m.Fragment,{children:typeof N=="string"&&(0,j.ZP)(E().sanitize(N))})};Z.Z=y}}]);
