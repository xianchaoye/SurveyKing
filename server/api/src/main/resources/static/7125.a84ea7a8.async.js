(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7125],{80341:function(){},79166:function(u,g,e){"use strict";e.d(g,{Z:function(){return Y}});var o=e(96156),f=e(90484),l=e(22122),r=e(67294),d=e(63441),m=e(94184),p=e.n(m),O=e(53124),S=e(96159),M=e(28481);function A(s){var t=s.prefixCls,c=s.value,n=s.current,a=s.offset,x=a===void 0?0:a,i;return x&&(i={position:"absolute",top:"".concat(x,"00%"),left:0}),r.createElement("span",{style:i,className:p()("".concat(t,"-only-unit"),{current:n})},c)}function j(s,t,c){for(var n=s,a=0;(n+10)%10!==t;)n+=c,a+=c;return a}function E(s){var t=s.prefixCls,c=s.count,n=s.value,a=Number(n),x=Math.abs(c),i=r.useState(a),C=(0,M.Z)(i,2),R=C[0],v=C[1],G=r.useState(x),P=(0,M.Z)(G,2),U=P[0],V=P[1],N=function(){v(a),V(x)};r.useEffect(function(){var D=setTimeout(function(){N()},1e3);return function(){clearTimeout(D)}},[a]);var Z,T;if(R===a||Number.isNaN(a)||Number.isNaN(R))Z=[r.createElement(A,(0,l.Z)({},s,{key:a,current:!0}))],T={transition:"none"};else{Z=[];for(var $=a+10,h=[],b=a;b<=$;b+=1)h.push(b);var z=h.findIndex(function(D){return D%10===R});Z=h.map(function(D,q){var ee=D%10;return r.createElement(A,(0,l.Z)({},s,{key:D,value:ee,offset:q-z,current:q===z}))});var se=U<x?1:-1;T={transform:"translateY(".concat(-j(R,a,se),"00%)")}}return r.createElement("span",{className:"".concat(t,"-only"),style:T,onTransitionEnd:N},Z)}var L=function(s,t){var c={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.indexOf(n)<0&&(c[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(s);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(s,n[a])&&(c[n[a]]=s[n[a]]);return c},B=function(t){var c=t.prefixCls,n=t.count,a=t.className,x=t.motionClassName,i=t.style,C=t.title,R=t.show,v=t.component,G=v===void 0?"sup":v,P=t.children,U=L(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),V=r.useContext(O.E_),N=V.getPrefixCls,Z=N("scroll-number",c),T=(0,l.Z)((0,l.Z)({},U),{"data-show":R,style:i,className:p()(Z,a,x),title:C}),$=n;if(n&&Number(n)%1==0){var h=String(n).split("");$=h.map(function(b,z){return r.createElement(E,{prefixCls:Z,count:Number(n),value:b,key:h.length-z})})}return i&&i.borderColor&&(T.style=(0,l.Z)((0,l.Z)({},i),{boxShadow:"0 0 0 1px ".concat(i.borderColor," inset")})),P?(0,S.Tm)(P,function(b){return{className:p()("".concat(Z,"-custom-component"),b==null?void 0:b.className,x)}}):r.createElement(G,T,$)},K=B,H=e(98787);function F(s){return H.Y.indexOf(s)!==-1}var W=function(t){var c,n=t.className,a=t.prefixCls,x=t.style,i=t.color,C=t.children,R=t.text,v=t.placement,G=v===void 0?"end":v,P=r.useContext(O.E_),U=P.getPrefixCls,V=P.direction,N=U("ribbon",a),Z=F(i),T=p()(N,"".concat(N,"-placement-").concat(G),(c={},(0,o.Z)(c,"".concat(N,"-rtl"),V==="rtl"),(0,o.Z)(c,"".concat(N,"-color-").concat(i),Z),c),n),$={},h={};return i&&!Z&&($.background=i,h.color=i),r.createElement("div",{className:"".concat(N,"-wrapper")},C,r.createElement("div",{className:T,style:(0,l.Z)((0,l.Z)({},$),x)},r.createElement("span",{className:"".concat(N,"-text")},R),r.createElement("div",{className:"".concat(N,"-corner"),style:h})))},re=W,oe=function(s,t){var c={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.indexOf(n)<0&&(c[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(s);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(s,n[a])&&(c[n[a]]=s[n[a]]);return c},J=function(t){var c,n,a=t.prefixCls,x=t.scrollNumberPrefixCls,i=t.children,C=t.status,R=t.text,v=t.color,G=t.count,P=G===void 0?null:G,U=t.overflowCount,V=U===void 0?99:U,N=t.dot,Z=N===void 0?!1:N,T=t.size,$=T===void 0?"default":T,h=t.title,b=t.offset,z=t.style,se=t.className,D=t.showZero,q=D===void 0?!1:D,ee=oe(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),ve=r.useContext(O.E_),de=ve.getPrefixCls,ae=ve.direction,y=de("badge",a),le=P>V?"".concat(V,"+"):P,ce=C!=null||v!=null,ie=le==="0"||le===0,_=Z&&!ie,Q=_?"":le,X=(0,r.useMemo)(function(){var I=Q==null||Q==="";return(I||ie&&!q)&&!_},[Q,ie,q,_]),me=(0,r.useRef)(P);X||(me.current=P);var k=me.current,pe=(0,r.useRef)(Q);X||(pe.current=Q);var ue=pe.current,xe=(0,r.useRef)(_);X||(xe.current=_);var te=(0,r.useMemo)(function(){if(!b)return(0,l.Z)({},z);var I={marginTop:b[1]};return ae==="rtl"?I.left=parseInt(b[0],10):I.right=-parseInt(b[0],10),(0,l.Z)((0,l.Z)({},I),z)},[ae,b,z]),ge=h!=null?h:typeof k=="string"||typeof k=="number"?k:void 0,Ne=X||!R?null:r.createElement("span",{className:"".concat(y,"-status-text")},R),be=!k||(0,f.Z)(k)!=="object"?void 0:(0,S.Tm)(k,function(I){return{style:(0,l.Z)((0,l.Z)({},te),I.style)}}),Oe=p()((c={},(0,o.Z)(c,"".concat(y,"-status-dot"),ce),(0,o.Z)(c,"".concat(y,"-status-").concat(C),!!C),(0,o.Z)(c,"".concat(y,"-status-").concat(v),F(v)),c)),Ce={};v&&!F(v)&&(Ce.background=v);var ye=p()(y,(n={},(0,o.Z)(n,"".concat(y,"-status"),ce),(0,o.Z)(n,"".concat(y,"-not-a-wrapper"),!i),(0,o.Z)(n,"".concat(y,"-rtl"),ae==="rtl"),n),se);if(!i&&ce){var Ee=te.color;return r.createElement("span",(0,l.Z)({},ee,{className:ye,style:te}),r.createElement("span",{className:Oe,style:Ce}),r.createElement("span",{style:{color:Ee},className:"".concat(y,"-status-text")},R))}return r.createElement("span",(0,l.Z)({},ee,{className:ye}),i,r.createElement(d.default,{visible:!X,motionName:"".concat(y,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(I){var w,Pe=I.className,Ze=de("scroll-number",x),fe=xe.current,he=p()((w={},(0,o.Z)(w,"".concat(y,"-dot"),fe),(0,o.Z)(w,"".concat(y,"-count"),!fe),(0,o.Z)(w,"".concat(y,"-count-sm"),$==="small"),(0,o.Z)(w,"".concat(y,"-multiple-words"),!fe&&ue&&ue.toString().length>1),(0,o.Z)(w,"".concat(y,"-status-").concat(C),!!C),(0,o.Z)(w,"".concat(y,"-status-").concat(v),F(v)),w)),ne=(0,l.Z)({},te);return v&&!F(v)&&(ne=ne||{},ne.background=v),r.createElement(K,{prefixCls:Ze,show:!X,motionClassName:Pe,className:he,count:ue,title:ge,style:ne,key:"scrollNumber"},be)}),Ne)};J.Ribbon=re;var Y=J},54029:function(u,g,e){"use strict";var o=e(38663),f=e.n(o),l=e(80341),r=e.n(l)},86556:function(u,g,e){var o=e(89465),f=e(77813);function l(r,d,m){(m!==void 0&&!f(r[d],m)||m===void 0&&!(d in r))&&o(r,d,m)}u.exports=l},28483:function(u,g,e){var o=e(25063),f=o();u.exports=f},42980:function(u,g,e){var o=e(46384),f=e(86556),l=e(28483),r=e(59783),d=e(13218),m=e(81704),p=e(36390);function O(S,M,A,j,E){S!==M&&l(M,function(L,B){if(E||(E=new o),d(L))r(S,M,B,A,O,j,E);else{var K=j?j(p(S,B),L,B+"",S,M,E):void 0;K===void 0&&(K=L),f(S,B,K)}},m)}u.exports=O},59783:function(u,g,e){var o=e(86556),f=e(64626),l=e(77133),r=e(278),d=e(38517),m=e(35694),p=e(1469),O=e(29246),S=e(78264),M=e(23560),A=e(13218),j=e(68630),E=e(36719),L=e(36390),B=e(59881);function K(H,F,W,re,oe,J,Y){var s=L(H,W),t=L(F,W),c=Y.get(t);if(c){o(H,W,c);return}var n=J?J(s,t,W+"",H,F,Y):void 0,a=n===void 0;if(a){var x=p(t),i=!x&&S(t),C=!x&&!i&&E(t);n=t,x||i||C?p(s)?n=s:O(s)?n=r(s):i?(a=!1,n=f(t,!0)):C?(a=!1,n=l(t,!0)):n=[]:j(t)||m(t)?(n=s,m(s)?n=B(s):(!A(s)||M(s))&&(n=d(t))):a=!1}a&&(Y.set(t,n),oe(n,t,re,J,Y),Y.delete(t)),o(H,W,n)}u.exports=K},25063:function(u){function g(e){return function(o,f,l){for(var r=-1,d=Object(o),m=l(o),p=m.length;p--;){var O=m[e?p:++r];if(f(d[O],O,d)===!1)break}return o}}u.exports=g},36390:function(u){function g(e,o){if(!(o==="constructor"&&typeof e[o]=="function")&&o!="__proto__")return e[o]}u.exports=g},50361:function(u,g,e){var o=e(85990),f=1,l=4;function r(d){return o(d,f|l)}u.exports=r},29246:function(u,g,e){var o=e(98612),f=e(37005);function l(r){return f(r)&&o(r)}u.exports=l},68630:function(u,g,e){var o=e(44239),f=e(85924),l=e(37005),r="[object Object]",d=Function.prototype,m=Object.prototype,p=d.toString,O=m.hasOwnProperty,S=p.call(Object);function M(A){if(!l(A)||o(A)!=r)return!1;var j=f(A);if(j===null)return!0;var E=O.call(j,"constructor")&&j.constructor;return typeof E=="function"&&E instanceof E&&p.call(E)==S}u.exports=M},82492:function(u,g,e){var o=e(42980),f=e(21463),l=f(function(r,d,m){o(r,d,m)});u.exports=l},59881:function(u,g,e){var o=e(98363),f=e(81704);function l(r){return o(r,f(r))}u.exports=l}}]);
