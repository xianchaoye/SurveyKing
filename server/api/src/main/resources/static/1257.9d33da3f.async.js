(self.webpackChunksurvey_king=self.webpackChunksurvey_king||[]).push([[1257],{1870:function(Ue,xe,s){"use strict";s.d(xe,{Z:function(){return ve}});var V=s(28991),O=s(67294),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},B=y,Ze=s(27029),k=function(se,ge){return O.createElement(Ze.Z,(0,V.Z)((0,V.Z)({},se),{},{ref:ge,icon:B}))};k.displayName="QuestionCircleOutlined";var ve=O.forwardRef(k)},71257:function(Ue,xe,s){"use strict";s.d(xe,{Z:function(){return zt}});var V=s(65223),O=s(96156),y=s(22122),B=s(85061),Ze=s(36228),k=s.n(Ze),ve=s(63441),n=s(67294),se=s(53124),ge=s(33603),X=s(28481);function he(e){var t=n.useState(e),a=(0,X.Z)(t,2),r=a[0],l=a[1];return n.useEffect(function(){var i=setTimeout(function(){l(e)},e.length?0:10);return function(){clearTimeout(i)}},[e]),r}var Oe=[];function Ee(e,t,a){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(a,"-").concat(r),error:e,errorStatus:t}}function pe(e){var t=e.help,a=e.helpStatus,r=e.errors,l=r===void 0?Oe:r,i=e.warnings,u=i===void 0?Oe:i,o=e.className,f=e.fieldId,d=e.onVisibleChanged,x=n.useContext(V.Rk),c=x.prefixCls,Z=n.useContext(se.E_),p=Z.getPrefixCls,C="".concat(c,"-item-explain"),E=p(),P=he(l),h=he(u),R=n.useMemo(function(){return t!=null?[Ee(t,a,"help")]:[].concat((0,B.Z)(P.map(function(S,F){return Ee(S,"error","error",F)})),(0,B.Z)(h.map(function(S,F){return Ee(S,"warning","warning",F)})))},[t,a,P,h]),N={};return f&&(N.id="".concat(f,"_help")),n.createElement(ve.default,{motionDeadline:ge.ZP.motionDeadline,motionName:"".concat(E,"-show-help"),visible:!!R.length,onVisibleChanged:d},function(S){var F=S.className,w=S.style;return n.createElement("div",(0,y.Z)({},N,{className:k()(C,F,o),style:w,role:"alert"}),n.createElement(ve.CSSMotionList,(0,y.Z)({keys:R},ge.ZP,{motionName:"".concat(E,"-show-help-item"),component:!1}),function(m){var v=m.key,$=m.error,I=m.errorStatus,g=m.className,T=m.style;return n.createElement("div",{key:v,className:k()(g,(0,O.Z)({},"".concat(C,"-").concat(I),I)),style:T},$)}))})}var Ce=s(90484),ue=s(51273),we=s(98866),Me=s(97647);function Pe(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Le(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Fe(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var a=getComputedStyle(e,null);return Le(a.overflowY,t)||Le(a.overflowX,t)||function(r){var l=function(i){if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch(u){return null}}(r);return!!l&&(l.clientHeight<r.scrollHeight||l.clientWidth<r.scrollWidth)}(e)}return!1}function be(e,t,a,r,l,i,u,o){return i<e&&u>t||i>e&&u<t?0:i<=e&&o<=a||u>=t&&o>=a?i-e-r:u>t&&o<a||i<e&&o>a?u-t+l:0}function Ve(e,t){var a=window,r=t.scrollMode,l=t.block,i=t.inline,u=t.boundary,o=t.skipOverflowHiddenElements,f=typeof u=="function"?u:function(M){return M!==u};if(!Pe(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,x=[],c=e;Pe(c)&&f(c);){if((c=c.parentElement)===d){x.push(c);break}c!=null&&c===document.body&&Fe(c)&&!Fe(document.documentElement)||c!=null&&Fe(c,o)&&x.push(c)}for(var Z=a.visualViewport?a.visualViewport.width:innerWidth,p=a.visualViewport?a.visualViewport.height:innerHeight,C=window.scrollX||pageXOffset,E=window.scrollY||pageYOffset,P=e.getBoundingClientRect(),h=P.height,R=P.width,N=P.top,S=P.right,F=P.bottom,w=P.left,m=l==="start"||l==="nearest"?N:l==="end"?F:N+h/2,v=i==="center"?w+R/2:i==="end"?S:w,$=[],I=0;I<x.length;I++){var g=x[I],T=g.getBoundingClientRect(),W=T.height,b=T.width,A=T.top,Q=T.right,L=T.bottom,j=T.left;if(r==="if-needed"&&N>=0&&w>=0&&F<=p&&S<=Z&&N>=A&&F<=L&&w>=j&&S<=Q)return $;var le=getComputedStyle(g),ie=parseInt(le.borderLeftWidth,10),D=parseInt(le.borderTopWidth,10),re=parseInt(le.borderRightWidth,10),ne=parseInt(le.borderBottomWidth,10),z=0,K=0,J="offsetWidth"in g?g.offsetWidth-g.clientWidth-ie-re:0,G="offsetHeight"in g?g.offsetHeight-g.clientHeight-D-ne:0;if(d===g)z=l==="start"?m:l==="end"?m-p:l==="nearest"?be(E,E+p,p,D,ne,E+m,E+m+h,h):m-p/2,K=i==="start"?v:i==="center"?v-Z/2:i==="end"?v-Z:be(C,C+Z,Z,ie,re,C+v,C+v+R,R),z=Math.max(0,z+E),K=Math.max(0,K+C);else{z=l==="start"?m-A-D:l==="end"?m-L+ne+G:l==="nearest"?be(A,L,W,D,ne+G,m,m+h,h):m-(A+W/2)+G/2,K=i==="start"?v-j-ie:i==="center"?v-(j+b/2)+J/2:i==="end"?v-Q+re+J:be(j,Q,b,ie,re+J,v,v+R,R);var oe=g.scrollLeft,H=g.scrollTop;m+=H-(z=Math.max(0,Math.min(H+z,g.scrollHeight-W+G))),v+=oe-(K=Math.max(0,Math.min(oe+K,g.scrollWidth-b+J)))}$.push({el:g,top:z,left:K})}return $}function Te(e){return e===Object(e)&&Object.keys(e).length!==0}function Ye(e,t){t===void 0&&(t="auto");var a="scrollBehavior"in document.body.style;e.forEach(function(r){var l=r.el,i=r.top,u=r.left;l.scroll&&a?l.scroll({top:i,left:u,behavior:t}):(l.scrollTop=i,l.scrollLeft=u)})}function Xe(e){return e===!1?{block:"end",inline:"nearest"}:Te(e)?e:{block:"start",inline:"nearest"}}function Je(e,t){var a=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Te(t)&&typeof t.behavior=="function")return t.behavior(a?Ve(e,t):[]);if(!!a){var r=Xe(t);return Ye(Ve(e,r),r.behavior)}}var Ge=Je,_e=["parentNode"],et="form_item";function fe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function je(e,t){if(!!e.length){var a=e.join("_");if(t)return"".concat(t,"_").concat(a);var r=_e.indexOf(a)>=0;return r?"".concat(et,"_").concat(a):a}}function We(e){var t=fe(e);return t.join("_")}function $e(e){var t=(0,ue.useForm)(),a=(0,X.Z)(t,1),r=a[0],l=n.useRef({}),i=n.useMemo(function(){return e!=null?e:(0,y.Z)((0,y.Z)({},r),{__INTERNAL__:{itemRef:function(o){return function(f){var d=We(o);f?l.current[d]=f:delete l.current[d]}}},scrollToField:function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=fe(o),x=je(d,i.__INTERNAL__.name),c=x?document.getElementById(x):null;c&&Ge(c,(0,y.Z)({scrollMode:"if-needed",block:"nearest"},f))},getFieldInstance:function(o){var f=We(o);return l.current[f]}})},[e,r]);return[i]}var tt=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},rt=function(t,a){var r,l=n.useContext(Me.Z),i=n.useContext(we.Z),u=n.useContext(se.E_),o=u.getPrefixCls,f=u.direction,d=u.form,x=t.prefixCls,c=t.className,Z=c===void 0?"":c,p=t.size,C=p===void 0?l:p,E=t.disabled,P=E===void 0?i:E,h=t.form,R=t.colon,N=t.labelAlign,S=t.labelWrap,F=t.labelCol,w=t.wrapperCol,m=t.hideRequiredMark,v=t.layout,$=v===void 0?"horizontal":v,I=t.scrollToFirstError,g=t.requiredMark,T=t.onFinishFailed,W=t.name,b=tt(t,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),A=(0,n.useMemo)(function(){return g!==void 0?g:d&&d.requiredMark!==void 0?d.requiredMark:!m},[m,g,d]),Q=R!=null?R:d==null?void 0:d.colon,L=o("form",x),j=k()(L,(r={},(0,O.Z)(r,"".concat(L,"-").concat($),!0),(0,O.Z)(r,"".concat(L,"-hide-required-mark"),A===!1),(0,O.Z)(r,"".concat(L,"-rtl"),f==="rtl"),(0,O.Z)(r,"".concat(L,"-").concat(C),C),r),Z),le=$e(h),ie=(0,X.Z)(le,1),D=ie[0],re=D.__INTERNAL__;re.name=W;var ne=(0,n.useMemo)(function(){return{name:W,labelAlign:N,labelCol:F,labelWrap:S,wrapperCol:w,vertical:$==="vertical",colon:Q,requiredMark:A,itemRef:re.itemRef,form:D}},[W,N,F,w,$,Q,A,D]);n.useImperativeHandle(a,function(){return D});var z=function(J){T==null||T(J);var G={block:"nearest"};I&&J.errorFields.length&&((0,Ce.Z)(I)==="object"&&(G=I),D.scrollToField(J.errorFields[0].name,G))};return n.createElement(we.n,{disabled:P},n.createElement(Me.q,{size:C},n.createElement(V.q3.Provider,{value:ne},n.createElement(ue.default,(0,y.Z)({id:W},b,{name:W,onFinishFailed:z,form:D,className:j})))))},nt=n.forwardRef(rt),at=nt,lt=s(30470),Ae=s(42550),it=function(){var t=(0,n.useContext)(V.aM),a=t.status;return{status:a}},ot=it,ze=s(96159),ut=s(93355),Be=s(75164);function st(e){var t=n.useState(e),a=(0,X.Z)(t,2),r=a[0],l=a[1],i=(0,n.useRef)(null),u=(0,n.useRef)([]),o=(0,n.useRef)(!1);n.useEffect(function(){return o.current=!1,function(){o.current=!0,Be.Z.cancel(i.current),i.current=null}},[]);function f(d){o.current||(i.current===null&&(u.current=[],i.current=(0,Be.Z)(function(){i.current=null,l(function(x){var c=x;return u.current.forEach(function(Z){c=Z(c)}),c})})),u.current.push(d))}return[r,f]}function ct(){var e=n.useContext(V.q3),t=e.itemRef,a=n.useRef({});function r(l,i){var u=i&&(0,Ce.Z)(i)==="object"&&i.ref,o=l.join("_");return(a.current.name!==o||a.current.originRef!==u)&&(a.current.name=o,a.current.originRef=u,a.current.ref=(0,Ae.sQ)(t(l),u)),a.current.ref}return r}var dt=s(38819),ft=s(43061),mt=s(68855),vt=s(7085),gt=s(8410),ht=s(98423),Ct=s(92820),bt=s(1870),De=s(21584),yt=s(42051),xt=s(85636),Zt=s(94199),Et=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a};function Ft(e){return e?(0,Ce.Z)(e)==="object"&&!n.isValidElement(e)?e:{title:e}:null}var It=function(t){var a=t.prefixCls,r=t.label,l=t.htmlFor,i=t.labelCol,u=t.labelAlign,o=t.colon,f=t.required,d=t.requiredMark,x=t.tooltip,c=(0,yt.E)("Form"),Z=(0,X.Z)(c,1),p=Z[0];return r?n.createElement(V.q3.Consumer,{key:"label"},function(C){var E,P=C.vertical,h=C.labelAlign,R=C.labelCol,N=C.labelWrap,S=C.colon,F,w=i||R||{},m=u||h,v="".concat(a,"-item-label"),$=k()(v,m==="left"&&"".concat(v,"-left"),w.className,(0,O.Z)({},"".concat(v,"-wrap"),!!N)),I=r,g=o===!0||S!==!1&&o!==!1,T=g&&!P;T&&typeof r=="string"&&r.trim()!==""&&(I=r.replace(/[:|：]\s*$/,""));var W=Ft(x);if(W){var b=W.icon,A=b===void 0?n.createElement(bt.Z,null):b,Q=Et(W,["icon"]),L=n.createElement(Zt.Z,(0,y.Z)({},Q),n.cloneElement(A,{className:"".concat(a,"-item-tooltip"),title:""}));I=n.createElement(n.Fragment,null,I,L)}d==="optional"&&!f&&(I=n.createElement(n.Fragment,null,I,n.createElement("span",{className:"".concat(a,"-item-optional"),title:""},(p==null?void 0:p.optional)||((F=xt.Z.Form)===null||F===void 0?void 0:F.optional))));var j=k()((E={},(0,O.Z)(E,"".concat(a,"-item-required"),f),(0,O.Z)(E,"".concat(a,"-item-required-mark-optional"),d==="optional"),(0,O.Z)(E,"".concat(a,"-item-no-colon"),!g),E));return n.createElement(De.Z,(0,y.Z)({},w,{className:$}),n.createElement("label",{htmlFor:l,className:j,title:typeof r=="string"?r:""},I))}):null},St=It,Rt=function(t){var a=t.prefixCls,r=t.status,l=t.wrapperCol,i=t.children,u=t.errors,o=t.warnings,f=t._internalItemRender,d=t.extra,x=t.help,c=t.fieldId,Z=t.marginBottom,p=t.onErrorVisibleChanged,C="".concat(a,"-item"),E=n.useContext(V.q3),P=l||E.wrapperCol||{},h=k()("".concat(C,"-control"),P.className),R=n.useMemo(function(){return(0,y.Z)({},E)},[E]);delete R.labelCol,delete R.wrapperCol;var N=n.createElement("div",{className:"".concat(C,"-control-input")},n.createElement("div",{className:"".concat(C,"-control-input-content")},i)),S=n.useMemo(function(){return{prefixCls:a,status:r}},[a,r]),F=Z!==null||u.length||o.length?n.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},n.createElement(V.Rk.Provider,{value:S},n.createElement(pe,{fieldId:c,errors:u,warnings:o,help:x,helpStatus:r,className:"".concat(C,"-explain-connected"),onVisibleChanged:p})),!!Z&&n.createElement("div",{style:{width:0,height:Z}})):null,w={};c&&(w.id="".concat(c,"_extra"));var m=d?n.createElement("div",(0,y.Z)({},w,{className:"".concat(C,"-extra")}),d):null,v=f&&f.mark==="pro_table_render"&&f.render?f.render(t,{input:N,errorList:F,extra:m}):n.createElement(n.Fragment,null,N,F,m);return n.createElement(V.q3.Provider,{value:R},n.createElement(De.Z,(0,y.Z)({},P,{className:h}),v))},Nt=Rt,Ot=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},pt={success:dt.Z,warning:mt.Z,error:ft.Z,validating:vt.Z};function wt(e){var t,a=e.prefixCls,r=e.className,l=e.style,i=e.help,u=e.errors,o=e.warnings,f=e.validateStatus,d=e.meta,x=e.hasFeedback,c=e.hidden,Z=e.children,p=e.fieldId,C=e.isRequired,E=e.onSubItemMetaChange,P=Ot(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),h="".concat(a,"-item"),R=n.useContext(V.q3),N=R.requiredMark,S=n.useRef(null),F=he(u),w=he(o),m=i!=null,v=!!(m||u.length||o.length),$=n.useState(null),I=(0,X.Z)($,2),g=I[0],T=I[1];(0,gt.Z)(function(){if(v&&S.current){var L=getComputedStyle(S.current);T(parseInt(L.marginBottom,10))}},[v]);var W=function(j){j||T(null)},b="";f!==void 0?b=f:d.validating?b="validating":F.length?b="error":w.length?b="warning":d.touched&&(b="success");var A=n.useMemo(function(){var L;if(x){var j=b&&pt[b];L=j?n.createElement("span",{className:k()("".concat(h,"-feedback-icon"),"".concat(h,"-feedback-icon-").concat(b))},n.createElement(j,null)):null}return{status:b,hasFeedback:x,feedbackIcon:L,isFormItemInput:!0}},[b,x]),Q=(t={},(0,O.Z)(t,h,!0),(0,O.Z)(t,"".concat(h,"-with-help"),m||F.length||w.length),(0,O.Z)(t,"".concat(r),!!r),(0,O.Z)(t,"".concat(h,"-has-feedback"),b&&x),(0,O.Z)(t,"".concat(h,"-has-success"),b==="success"),(0,O.Z)(t,"".concat(h,"-has-warning"),b==="warning"),(0,O.Z)(t,"".concat(h,"-has-error"),b==="error"),(0,O.Z)(t,"".concat(h,"-is-validating"),b==="validating"),(0,O.Z)(t,"".concat(h,"-hidden"),c),t);return n.createElement("div",{className:k()(Q),style:l,ref:S},n.createElement(Ct.Z,(0,y.Z)({className:"".concat(h,"-row")},(0,ht.Z)(P,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),n.createElement(St,(0,y.Z)({htmlFor:p,required:C,requiredMark:N},e,{prefixCls:a})),n.createElement(Nt,(0,y.Z)({},e,d,{errors:F,warnings:w,prefixCls:a,status:b,help:i,marginBottom:g,onErrorVisibleChanged:W}),n.createElement(V.qI.Provider,{value:E},n.createElement(V.aM.Provider,{value:A},Z)))),!!g&&n.createElement("div",{className:"".concat(h,"-margin-offset"),style:{marginBottom:-g}}))}var Mt="__SPLIT__",Ht=(0,ut.b)("success","warning","error","validating",""),Pt=n.memo(function(e){var t=e.children;return t},function(e,t){return e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(function(a,r){return a===t.childProps[r]})});function Lt(e){return e!=null}function He(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}}function Vt(e){var t=e.name,a=e.noStyle,r=e.dependencies,l=e.prefixCls,i=e.shouldUpdate,u=e.rules,o=e.children,f=e.required,d=e.label,x=e.messageVariables,c=e.trigger,Z=c===void 0?"onChange":c,p=e.validateTrigger,C=e.hidden,E=(0,n.useContext)(se.E_),P=E.getPrefixCls,h=(0,n.useContext)(V.q3),R=h.name,N=typeof o=="function",S=(0,n.useContext)(V.qI),F=(0,n.useContext)(ue.FieldContext),w=F.validateTrigger,m=p!==void 0?p:w,v=Lt(t),$=P("form",l),I=n.useContext(ue.ListContext),g=n.useRef(),T=st({}),W=(0,X.Z)(T,2),b=W[0],A=W[1],Q=(0,lt.Z)(function(){return He()}),L=(0,X.Z)(Q,2),j=L[0],le=L[1],ie=function(M){var q=I==null?void 0:I.getKey(M.name);if(le(M.destroy?He():M,!0),a&&S){var _=M.name;if(M.destroy)_=g.current||_;else if(q!==void 0){var U=(0,X.Z)(q,2),ce=U[0],ae=U[1];_=[ce].concat((0,B.Z)(ae)),g.current=_}S(M,_)}},D=function(M,q){A(function(_){var U=(0,y.Z)({},_),ce=[].concat((0,B.Z)(M.name.slice(0,-1)),(0,B.Z)(q)),ae=ce.join(Mt);return M.destroy?delete U[ae]:U[ae]=M,U})},re=n.useMemo(function(){var H=(0,B.Z)(j.errors),M=(0,B.Z)(j.warnings);return Object.values(b).forEach(function(q){H.push.apply(H,(0,B.Z)(q.errors||[])),M.push.apply(M,(0,B.Z)(q.warnings||[]))}),[H,M]},[b,j.errors,j.warnings]),ne=(0,X.Z)(re,2),z=ne[0],K=ne[1],J=ct();function G(H,M,q){return a&&!C?H:n.createElement(wt,(0,y.Z)({key:"row"},e,{prefixCls:$,fieldId:M,isRequired:q,errors:z,warnings:K,meta:j,onSubItemMetaChange:D}),H)}if(!v&&!N&&!r)return G(o);var oe={};return typeof d=="string"?oe.label=d:t&&(oe.label=String(t)),x&&(oe=(0,y.Z)((0,y.Z)({},oe),x)),n.createElement(ue.Field,(0,y.Z)({},e,{messageVariables:oe,trigger:Z,validateTrigger:m,onMetaChange:ie}),function(H,M,q){var _=fe(t).length&&M?M.name:[],U=je(_,R),ce=f!==void 0?f:!!(u&&u.some(function(ee){if(ee&&(0,Ce.Z)(ee)==="object"&&ee.required&&!ee.warningOnly)return!0;if(typeof ee=="function"){var de=ee(q);return de&&de.required&&!de.warningOnly}return!1})),ae=(0,y.Z)({},H),me=null;if(Array.isArray(o)&&v)me=o;else if(!(N&&(!(i||r)||v))){if(!(r&&!N&&!v))if((0,ze.l$)(o)){var Y=(0,y.Z)((0,y.Z)({},o.props),ae);if(Y.id||(Y.id=U),e.help||z.length>0||K.length>0||e.extra){var Ie=[];(e.help||z.length>0)&&Ie.push("".concat(U,"_help")),e.extra&&Ie.push("".concat(U,"_extra")),Y["aria-describedby"]=Ie.join(" ")}z.length>0&&(Y["aria-invalid"]="true"),ce&&(Y["aria-required"]="true"),(0,Ae.Yr)(o)&&(Y.ref=J(_,o));var Bt=new Set([].concat((0,B.Z)(fe(Z)),(0,B.Z)(fe(m))));Bt.forEach(function(ee){Y[ee]=function(){for(var de,qe,Se,ke,Re,Ke=arguments.length,Ne=new Array(Ke),ye=0;ye<Ke;ye++)Ne[ye]=arguments[ye];(Se=ae[ee])===null||Se===void 0||(de=Se).call.apply(de,[ae].concat(Ne)),(Re=(ke=o.props)[ee])===null||Re===void 0||(qe=Re).call.apply(qe,[ke].concat(Ne))}});var Dt=[Y["aria-required"],Y["aria-invalid"],Y["aria-describedby"]];me=n.createElement(Pt,{value:ae[e.valuePropName||"value"],update:o,childProps:Dt},(0,ze.Tm)(o,Y))}else N&&(i||r)&&!v?me=o(q):me=o}return G(me,U,ce)})}var Qe=Vt;Qe.useStatus=ot;var Tt=Qe,jt=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},Wt=function(t){var a=t.prefixCls,r=t.children,l=jt(t,["prefixCls","children"]),i=n.useContext(se.E_),u=i.getPrefixCls,o=u("form",a),f=n.useMemo(function(){return{prefixCls:o,status:"error"}},[o]);return n.createElement(ue.List,(0,y.Z)({},l),function(d,x,c){return n.createElement(V.Rk.Provider,{value:f},r(d.map(function(Z){return(0,y.Z)((0,y.Z)({},Z),{fieldKey:Z.key})}),x,{errors:c.errors,warnings:c.warnings}))})},$t=Wt;function At(){var e=(0,n.useContext)(V.q3),t=e.form;return t}var te=at;te.Item=Tt,te.List=$t,te.ErrorList=pe,te.useForm=$e,te.useFormInstance=At,te.useWatch=ue.useWatch,te.Provider=V.RV,te.create=function(){};var zt=te}}]);
