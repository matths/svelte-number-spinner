var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function m(t){g=t}const h=[],$=[],y=[],b=[],w=Promise.resolve();let x=!1;function S(t){y.push(t)}function k(t){b.push(t)}let _=!1;const E=new Set;function C(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),A(e.$$)}for(m(null),h.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(h.length);for(;b.length;)b.pop()();x=!1,_=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const M=new Set;function F(t,e){t&&t.i&&(M.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function N(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function z(t){t&&t.c()}function T(t,n,c,l){const{fragment:i,on_mount:r,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,c),l||S((()=>{const n=r.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,w.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,s,c,l,i,a,u=[-1]){const d=g;m(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=c?c(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&j(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(r)}else f.fragment&&f.fragment.c();s.intro&&F(e.$$.fragment),T(e,s.target,s.anchor,s.customElement),C()}m(d)}var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Y,q=(function(t,e){t.exports=function(){function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}function r(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function a(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function g(){return v(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function w(t,e){t.value=null==e?"":e}function x(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let k;function _(t){k=t}function E(){if(!k)throw new Error("Function called outside component initialization");return k}function C(){const t=E();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=S(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}const A=[],M=[],F=[],L=[],N=Promise.resolve();let z=!1;function T(){z||(z=!0,N.then(q))}function O(){return T(),N}function j(t){F.push(t)}let X=!1;const Y=new Set;function q(){if(!X){X=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];_(e),B(e.$$)}for(_(null),A.length=0;M.length;)M.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];Y.has(e)||(Y.add(e),e())}F.length=0}while(A.length);for(;L.length;)L.pop()();z=!1,X=!1,Y.clear()}}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const D=new Set;function I(t,e){t&&t.i&&(D.delete(t),t.i(e))}const U="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:P;function G(t,e,o,l){const{fragment:i,on_mount:r,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),l||j((()=>{const e=r.map(n).filter(c);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(j)}function R(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(A.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,n,c,l,i,r,a=[-1]){const u=k;_(e);const d=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=c?c(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&V(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=b(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&I(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),q()}_(u)}class J{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const{document:K}=U;function Q(){var t=p("style");t.id="svelte-14p4d2s-style",t.textContent=".default.svelte-14p4d2s{display:inline-block;box-sizing:border-box;font-variant-numeric:tabular-nums;background-color:white;color:black;width:4em;height:1.6em;margin:0px;padding:0.25em;border:0.075em solid #0004;border-radius:0.15em;text-align:right;vertical-align:baseline;cursor:ew-resize}.default.svelte-14p4d2s:focus{border:0.075em solid #06f;outline:none}.default.fast.svelte-14p4d2s{border-top-width:0.15em;padding-top:0.175em}.default.slow.svelte-14p4d2s{border-bottom-width:0.15em;padding-bottom:0.175em}.default.dragging.svelte-14p4d2s{border-color:#04c}.default.editing.svelte-14p4d2s{cursor:initial}.drag.svelte-14p4d2s{user-select:none}.drag.svelte-14p4d2s::selection{background:#0000}.inactive.svelte-14p4d2s{display:none !important}",u(K.head,t)}function W(e){let n,o,l,i,r,u,v,b;return{c(){n=p("input"),l=g(),i=p("input"),y(n,"type","text"),y(n,"style",e[9]),y(n,"class",o=a(e[23].class)+" svelte-14p4d2s"),n.readOnly=!0,y(n,"contenteditable",!1),y(n,"tabindex","0"),x(n,"default",!e[23].class),x(n,"drag",!0),x(n,"dragging",e[3]),x(n,"fast",e[4]>1?"fast":""),x(n,"slow",e[4]<1?"slow":""),x(n,"focus",e[1]),x(n,"inactive",e[5]),y(i,"style",e[9]),y(i,"class",r=a(e[23].class)+" svelte-14p4d2s"),y(i,"type","text"),y(i,"inputmode",u=e[0]==Math.round(e[0])?"numeric":"text"),x(i,"default",!e[23].class),x(i,"edit",!0),x(i,"editing",e[5]),x(i,"focus",e[2]),x(i,"inactive",!e[5])},m(t,o){d(t,n,o),e[44](n),w(n,e[6]),d(t,l,o),d(t,i,o),e[46](i),w(i,e[6]),v||(b=[m(window,"mousemove",(function(){c(e[3]?e[13]:"")&&(e[3]?e[13]:"").apply(this,arguments)})),m(window,"touchmove",(function(){c(e[3]?e[12]:"")&&(e[3]?e[12]:"").apply(this,arguments)})),m(window,"mouseup",$((function(){c(e[3]?e[15]:e[19])&&(e[3]?e[15]:e[19]).apply(this,arguments)}))),m(window,"touchend",$((function(){c(e[3]?e[14]:e[19])&&(e[3]?e[14]:e[19]).apply(this,arguments)}))),m(window,"keydown",e[20]),m(window,"keyup",e[21]),m(n,"mousedown",$(e[11])),m(n,"touchstart",$(h(e[10]))),m(n,"dblclick",$(Z)),m(n,"focus",e[16]),m(n,"blur",e[17]),m(n,"input",e[45]),m(i,"mouseup",$(tt)),m(i,"touchend",$(et)),m(i,"focus",e[18]),m(i,"blur",e[19]),m(i,"input",e[22]),m(i,"input",e[47])],v=!0)},p(t,s){e=t,512&s[0]&&y(n,"style",e[9]),8388608&s[0]&&o!==(o=a(e[23].class)+" svelte-14p4d2s")&&y(n,"class",o),64&s[0]&&n.value!==e[6]&&w(n,e[6]),8388608&s[0]&&x(n,"default",!e[23].class),8388608&s[0]&&x(n,"drag",!0),8388616&s[0]&&x(n,"dragging",e[3]),8388624&s[0]&&x(n,"fast",e[4]>1?"fast":""),8388624&s[0]&&x(n,"slow",e[4]<1?"slow":""),8388610&s[0]&&x(n,"focus",e[1]),8388640&s[0]&&x(n,"inactive",e[5]),512&s[0]&&y(i,"style",e[9]),8388608&s[0]&&r!==(r=a(e[23].class)+" svelte-14p4d2s")&&y(i,"class",r),1&s[0]&&u!==(u=e[0]==Math.round(e[0])?"numeric":"text")&&y(i,"inputmode",u),64&s[0]&&i.value!==e[6]&&w(i,e[6]),8388608&s[0]&&x(i,"default",!e[23].class),8388608&s[0]&&x(i,"edit",!0),8388640&s[0]&&x(i,"editing",e[5]),8388612&s[0]&&x(i,"focus",e[2]),8388640&s[0]&&x(i,"inactive",!e[5])},i:t,o:t,d(t){t&&f(n),e[44](null),t&&f(l),t&&f(i),e[46](null),v=!1,s(b)}}}function Z(t){}const tt=t=>{},et=t=>{};function nt(t,n,o){const s=C();let c,l,i,a,u,d,f,p,v,{options:g={}}=n,{value:m=g.value??0}=n,{min:h=g.min??-Number.MAX_VALUE}=n,{max:$=g.max??Number.MAX_VALUE}=n,{step:y=g.step??1}=n,{precision:b=g.precision??y}=n,{decimals:w=g.decimals??0}=n,{speed:x=g.speed??1}=n,{horizontal:S=g.horizontal??!0}=n,{vertical:k=g.vertical??!1}=n,{circular:_=g.circular??!1}=n,{mainStyle:E=g.mainStyle??void 0}=n,{fastStyle:A=g.fastStyle??void 0}=n,{slowStyle:F=g.slowStyle??void 0}=n,{focusStyle:L=g.focusStyle??void 0}=n,{draggingStyle:N=g.draggingStyle??void 0}=n,{editingStyle:z=g.editingStyle??void 0}=n,{cursor:T=g.cursor??void 0}=n,j=!1,X=!1,P=!1,Y=!1,q=1,B=!1,D=!1,I=!1,U=document.querySelector("html"),G=U.style.cursor;function R(t){s("consoleLog",t.type),j=!0,V(t)}function V(t){s("consoleLog",t.type),o(3,Y=!0),i.focus(),u=0,d=j?t.touches[0].clientX:t.clientX,f=j?t.touches[0].clientY:t.clientY,o(3,Y=!0),at(m)}function H(t){j=!0,J(t)}function J(t){let e=j?t.touches[0].clientX:t.clientX,n=j?t.touches[0].clientY:t.clientY,o=S?e-d:0,s=k?-(n-f):0;it(Math.abs(o)>Math.abs(s)?o:s),d=e,f=n,u++}function K(t){s("consoleLog",t.type),Q(t)}function Q(t){s("consoleLog",t.type),o(3,Y=!1),u<2&&ct()}function W(t){s("consoleLog",t.type),o(1,X=!0)}function Z(t){s("consoleLog",t.type),o(1,X=!1)}function tt(t){s("consoleLog",t.type),o(2,P=!0)}async function et(t){s("consoleLog",t.type),lt()}function nt(t){"Shift"==t.key&&o(42,D=!0),"Alt"==t.key&&o(41,B=!0)}function ot(t){if("Shift"==t.key&&o(42,D=!1),"Alt"==t.key&&o(41,B=!1),X&&!I){let e=Math.max(y,y*Math.round(10*x));"ArrowUp"!=t.key&&"ArrowRight"!=t.key||rt(e),"ArrowDown"!=t.key&&"ArrowLeft"!=t.key||rt(-e),"Enter"==t.key&&ct()}else P&&I&&("Enter"!=t.key&&"Escape"!=t.key||lt())}function st(t){let e=parseFloat(a.value);isNaN(e)||(c=e,c=ut(c),s("input",parseFloat(dt(c))))}async function ct(){o(5,I=!0),c=parseFloat(l),await O(),a.focus(),a.select()}function lt(){o(2,P=!1),o(5,I=!1);let t=parseFloat(a.value);isNaN(t)||(c=parseFloat(l),at(c))}function it(t){c=c??parseFloat(l),c+=t*y*q*x,at(c)}function rt(t){c=c??parseFloat(l),c+=t*q,at(c)}function at(t){c=parseFloat(t),c=ut(c),o(6,l=Math.round(c/y)*y),o(6,l=l.toFixed(w)),o(24,m=dt(c)),s("input",parseFloat(m)),s("change",parseFloat(m))}function ut(t){if(o(25,h=parseFloat(h)),o(26,$=parseFloat($)),_){let e=$-h;if(0===e)return h;let n=t<h?Math.ceil((h-t)/e):0;t=(t-h+e*n)%e+h}else t=Math.min(Math.max(t,h),$);return t}function dt(t){t=Math.round(parseFloat(t)/b)*b;let e=b<1?Math.ceil(-Math.log10(b)):0;return parseFloat(t.toFixed(e))}function ft(t){M[t?"unshift":"push"]((()=>{i=t,o(7,i)}))}function pt(){l=this.value,o(6,l)}function vt(t){M[t?"unshift":"push"]((()=>{a=t,o(8,a)}))}function gt(){l=this.value,o(6,l)}return at(m),t.$$set=t=>{o(23,n=e(e({},n),r(t))),"options"in t&&o(27,g=t.options),"value"in t&&o(24,m=t.value),"min"in t&&o(25,h=t.min),"max"in t&&o(26,$=t.max),"step"in t&&o(0,y=t.step),"precision"in t&&o(28,b=t.precision),"decimals"in t&&o(29,w=t.decimals),"speed"in t&&o(30,x=t.speed),"horizontal"in t&&o(31,S=t.horizontal),"vertical"in t&&o(32,k=t.vertical),"circular"in t&&o(33,_=t.circular),"mainStyle"in t&&o(34,E=t.mainStyle),"fastStyle"in t&&o(35,A=t.fastStyle),"slowStyle"in t&&o(36,F=t.slowStyle),"focusStyle"in t&&o(37,L=t.focusStyle),"draggingStyle"in t&&o(38,N=t.draggingStyle),"editingStyle"in t&&o(39,z=t.editingStyle),"cursor"in t&&o(40,T=t.cursor)},t.$$.update=()=>{16777256&t.$$.dirty[0]&&(I||Y||at(m)),34&t.$$.dirty[0]|3072&t.$$.dirty[1]&&(o(4,q=1),X&&!I&&(B&&D?o(4,q=10):B&&o(4,q=.1))),8&t.$$.dirty[0]|4611&t.$$.dirty[1]&&(o(43,v=S?k?"move":"ew-resize":"ns-resize"),U.style.cursor=Y?T??v:G),574&t.$$.dirty[0]|5112&t.$$.dirty[1]&&(o(9,p=E??""),o(9,p+=(X||P)&&L?";"+L:""),o(9,p+=!I&&q>1&&A?";"+A:""),o(9,p+=!I&&q<1&&F?";"+F:""),o(9,p+=Y&&N?";"+N:""),o(9,p+=I&&z?";"+z:""),o(9,p+=I?"":";cursor:"+(T??v)))},n=r(n),[y,X,P,Y,q,I,l,i,a,p,R,V,H,J,K,Q,W,Z,tt,et,nt,ot,st,n,m,h,$,g,b,w,x,S,k,_,E,A,F,L,N,z,T,B,D,v,ft,pt,vt,gt]}class ot extends J{constructor(t){super(),K.getElementById("svelte-14p4d2s-style")||Q(),H(this,t,nt,W,l,{options:27,value:24,min:25,max:26,step:0,precision:28,decimals:29,speed:30,horizontal:31,vertical:32,circular:33,mainStyle:34,fastStyle:35,slowStyle:36,focusStyle:37,draggingStyle:38,editingStyle:39,cursor:40},[-1,-1,-1])}}return ot}()}(Y={exports:{}},Y.exports),Y.exports);function B(t){let e,n,s,c,g,m,h,y,b,w,x,S,_,E,C,A,M,j,X,P,Y,B,I,U,G,R,V,H,J,K,Q,W,Z,tt,et,nt,ot,st,ct,lt,it,rt,at,ut,dt,ft,pt,vt,gt,mt,ht,$t,yt,bt,wt,xt,St,kt,_t,Et,Ct,At,Mt,Ft,Lt,Nt,zt,Tt,Ot,jt,Xt,Pt,Yt,qt,Bt,Dt,It,Ut,Gt,Rt,Vt,Ht,Jt,Kt,Qt,Wt,Zt,te,ee,ne,oe,se,ce,le,ie,re,ae,ue,de,fe,pe,ve,ge,me,he,$e,ye,be,we,xe,Se,ke,_e,Ee,Ce,Ae,Me,Fe,Le,Ne,ze;function Te(e){t[10](e)}let Oe={};function je(e){t[11](e)}void 0!==t[0]&&(Oe.value=t[0]),C=new q({props:Oe}),$.push((()=>N(C,"value",Te)));let Xe={min:"0",max:"360",vertical:!0,circular:!0};function Pe(e){t[12](e)}void 0!==t[1]&&(Xe.value=t[1]),H=new q({props:Xe}),$.push((()=>N(H,"value",je)));let Ye={min:"-5",max:"5",step:"0.01",decimals:"2",precision:"0.001",editOnClick:!0};function qe(e){t[13](e)}void 0!==t[2]&&(Ye.value=t[2]),it=new q({props:Ye}),$.push((()=>N(it,"value",Pe)));let Be={step:"10",mainStyle:"color:#aaa; width:80px; border-radius:20px",focusStyle:"color:#06f",draggingStyle:"border-color:#f00",editingStyle:"color:#00f; background-color:#06f4",fastStyle:"color:#f00",slowStyle:"color:#0c0",cursor:"url(customcursor.png) 16 16, auto"};function De(e){t[14](e)}void 0!==t[3]&&(Be.value=t[3]),bt=new q({props:Be}),$.push((()=>N(bt,"value",qe)));let Ie={min:"0",max:"1",step:"0.001",decimals:"3",class:"number-spinner-custom"};function Ue(e){t[18](e)}void 0!==t[4]&&(Ie.value=t[4]),zt=new q({props:Ie}),$.push((()=>N(zt,"value",De))),Jt=new q({props:{value:D,min:"0",max:"100"}}),Jt.$on("change",t[15]),Jt.$on("input",t[16]);let Ge={min:"0",max:"12",circular:!0};function Re(e){t[20](e)}void 0!==t[7]&&(Ge.value=t[7]),de=new q({props:Ge}),$.push((()=>N(de,"value",Ue)));let Ve={options:t[9]};return void 0!==t[8]&&(Ve.value=t[8]),Ce=new q({props:Ve}),$.push((()=>N(Ce,"value",Re))),{c(){e=a("h2"),e.textContent="Svelte Number Spinner Example",n=d(),s=a("p"),s.innerHTML='Change the values of the number spinners through mousedrag and arrow keys. Press <i class="svelte-5t2c9c">Alt</i> for smaller steps, <i class="svelte-5t2c9c">Alt+Shift</i> for larger steps. Click without dragging to edit.',c=d(),g=a("hr"),m=d(),h=a("div"),y=a("div"),b=u("Default: no range limits, step = 1"),w=a("br"),x=u("Current value is "),S=u(t[0]),_=d(),E=a("div"),z(C.$$.fragment),M=d(),j=a("hr"),X=d(),P=a("div"),Y=a("div"),B=u("Range: 0 - 360, vertical = true (dragging and arrow keys up/down will also change the value), circular = true "),I=a("br"),U=u("Current value is "),G=u(t[1]),R=d(),V=a("div"),z(H.$$.fragment),K=d(),Q=a("hr"),W=d(),Z=a("div"),tt=a("div"),et=u("step = 0.01, decimals = 2, precision = 0.001"),nt=a("br"),ot=u("Current value is "),st=u(t[2]),ct=d(),lt=a("div"),z(it.$$.fragment),at=d(),ut=a("hr"),dt=d(),ft=a("div"),pt=a("div"),vt=u("Individual styling using props."),gt=a("br"),mt=u("Current value is "),ht=u(t[3]),$t=d(),yt=a("div"),z(bt.$$.fragment),xt=d(),St=a("hr"),kt=d(),_t=a("div"),Et=a("div"),Ct=u("Individual styling using custom class."),At=a("br"),Mt=u("Current value is "),Ft=u(t[4]),Lt=d(),Nt=a("div"),z(zt.$$.fragment),Ot=d(),jt=a("hr"),Xt=d(),Pt=a("div"),Yt=a("div"),qt=u("Get value through input and change events."),Bt=a("br"),Dt=u("\n    Current input value is "),It=u(t[5]),Ut=a("br"),Gt=u(" \n    Current change value is "),Rt=u(t[6]),Vt=d(),Ht=a("div"),z(Jt.$$.fragment),Kt=d(),Qt=a("hr"),Wt=d(),Zt=a("div"),te=a("div"),ee=u("Test correct updating of the value if changed from outside."),ne=a("br"),oe=u("\n    Current value is "),se=u(t[7]),ce=a("br"),le=d(),ie=a("div"),re=a("button"),re.textContent="–",ae=d(),ue=a("div"),z(de.$$.fragment),pe=d(),ve=a("div"),ge=a("button"),ge.textContent="+",me=d(),he=a("hr"),$e=d(),ye=a("div"),be=a("div"),we=u("Giving some of the props by options object"),xe=a("br"),Se=u("Current value is "),ke=u(t[8]),_e=d(),Ee=a("div"),z(Ce.$$.fragment),Me=d(),Fe=a("hr"),p(e,"class","svelte-5t2c9c"),p(s,"class","svelte-5t2c9c"),p(g,"class","svelte-5t2c9c"),p(w,"class","svelte-5t2c9c"),p(y,"class","explanation svelte-5t2c9c"),p(E,"class","right svelte-5t2c9c"),p(h,"class","row svelte-5t2c9c"),p(j,"class","svelte-5t2c9c"),p(I,"class","svelte-5t2c9c"),p(Y,"class","explanation svelte-5t2c9c"),p(V,"class","right svelte-5t2c9c"),p(P,"class","row svelte-5t2c9c"),p(Q,"class","svelte-5t2c9c"),p(nt,"class","svelte-5t2c9c"),p(tt,"class","explanation svelte-5t2c9c"),p(lt,"class","right svelte-5t2c9c"),p(Z,"class","row svelte-5t2c9c"),p(ut,"class","svelte-5t2c9c"),p(gt,"class","svelte-5t2c9c"),p(pt,"class","explanation svelte-5t2c9c"),p(yt,"class","right svelte-5t2c9c"),p(ft,"class","row svelte-5t2c9c"),p(St,"class","svelte-5t2c9c"),p(At,"class","svelte-5t2c9c"),p(Et,"class","explanation svelte-5t2c9c"),p(Nt,"class","right svelte-5t2c9c"),p(_t,"class","row svelte-5t2c9c"),p(jt,"class","svelte-5t2c9c"),p(Bt,"class","svelte-5t2c9c"),p(Ut,"class","svelte-5t2c9c"),p(Yt,"class","explanation svelte-5t2c9c"),p(Ht,"class","right svelte-5t2c9c"),p(Pt,"class","row svelte-5t2c9c"),p(Qt,"class","svelte-5t2c9c"),p(ne,"class","svelte-5t2c9c"),p(ce,"class","svelte-5t2c9c"),p(te,"class","explanation svelte-5t2c9c"),p(re,"class","svelte-5t2c9c"),p(ie,"class","svelte-5t2c9c"),p(ue,"class","right small-margin svelte-5t2c9c"),p(ge,"class","svelte-5t2c9c"),p(ve,"class","svelte-5t2c9c"),p(Zt,"class","row svelte-5t2c9c"),p(he,"class","svelte-5t2c9c"),p(xe,"class","svelte-5t2c9c"),p(be,"class","explanation svelte-5t2c9c"),p(Ee,"class","right svelte-5t2c9c"),p(ye,"class","row svelte-5t2c9c"),p(Fe,"class","svelte-5t2c9c")},m(o,r){i(o,e,r),i(o,n,r),i(o,s,r),i(o,c,r),i(o,g,r),i(o,m,r),i(o,h,r),l(h,y),l(y,b),l(y,w),l(y,x),l(y,S),l(h,_),l(h,E),T(C,E,null),i(o,M,r),i(o,j,r),i(o,X,r),i(o,P,r),l(P,Y),l(Y,B),l(Y,I),l(Y,U),l(Y,G),l(P,R),l(P,V),T(H,V,null),i(o,K,r),i(o,Q,r),i(o,W,r),i(o,Z,r),l(Z,tt),l(tt,et),l(tt,nt),l(tt,ot),l(tt,st),l(Z,ct),l(Z,lt),T(it,lt,null),i(o,at,r),i(o,ut,r),i(o,dt,r),i(o,ft,r),l(ft,pt),l(pt,vt),l(pt,gt),l(pt,mt),l(pt,ht),l(ft,$t),l(ft,yt),T(bt,yt,null),i(o,xt,r),i(o,St,r),i(o,kt,r),i(o,_t,r),l(_t,Et),l(Et,Ct),l(Et,At),l(Et,Mt),l(Et,Ft),l(_t,Lt),l(_t,Nt),T(zt,Nt,null),i(o,Ot,r),i(o,jt,r),i(o,Xt,r),i(o,Pt,r),l(Pt,Yt),l(Yt,qt),l(Yt,Bt),l(Yt,Dt),l(Yt,It),l(Yt,Ut),l(Yt,Gt),l(Yt,Rt),l(Pt,Vt),l(Pt,Ht),T(Jt,Ht,null),i(o,Kt,r),i(o,Qt,r),i(o,Wt,r),i(o,Zt,r),l(Zt,te),l(te,ee),l(te,ne),l(te,oe),l(te,se),l(te,ce),l(Zt,le),l(Zt,ie),l(ie,re),l(Zt,ae),l(Zt,ue),T(de,ue,null),l(Zt,pe),l(Zt,ve),l(ve,ge),i(o,me,r),i(o,he,r),i(o,$e,r),i(o,ye,r),l(ye,be),l(be,we),l(be,xe),l(be,Se),l(be,ke),l(ye,_e),l(ye,Ee),T(Ce,Ee,null),i(o,Me,r),i(o,Fe,r),Le=!0,Ne||(ze=[f(re,"click",t[17]),f(ge,"click",t[19])],Ne=!0)},p(t,[e]){(!Le||1&e)&&v(S,t[0]);const n={};!A&&1&e&&(A=!0,n.value=t[0],k((()=>A=!1))),C.$set(n),(!Le||2&e)&&v(G,t[1]);const o={};!J&&2&e&&(J=!0,o.value=t[1],k((()=>J=!1))),H.$set(o),(!Le||4&e)&&v(st,t[2]);const s={};!rt&&4&e&&(rt=!0,s.value=t[2],k((()=>rt=!1))),it.$set(s),(!Le||8&e)&&v(ht,t[3]);const c={};!wt&&8&e&&(wt=!0,c.value=t[3],k((()=>wt=!1))),bt.$set(c),(!Le||16&e)&&v(Ft,t[4]);const l={};!Tt&&16&e&&(Tt=!0,l.value=t[4],k((()=>Tt=!1))),zt.$set(l),(!Le||32&e)&&v(It,t[5]),(!Le||64&e)&&v(Rt,t[6]),(!Le||128&e)&&v(se,t[7]);const i={};!fe&&128&e&&(fe=!0,i.value=t[7],k((()=>fe=!1))),de.$set(i),(!Le||256&e)&&v(ke,t[8]);const r={};!Ae&&256&e&&(Ae=!0,r.value=t[8],k((()=>Ae=!1))),Ce.$set(r)},i(t){Le||(F(C.$$.fragment,t),F(H.$$.fragment,t),F(it.$$.fragment,t),F(bt.$$.fragment,t),F(zt.$$.fragment,t),F(Jt.$$.fragment,t),F(de.$$.fragment,t),F(Ce.$$.fragment,t),Le=!0)},o(t){L(C.$$.fragment,t),L(H.$$.fragment,t),L(it.$$.fragment,t),L(bt.$$.fragment,t),L(zt.$$.fragment,t),L(Jt.$$.fragment,t),L(de.$$.fragment,t),L(Ce.$$.fragment,t),Le=!1},d(t){t&&r(e),t&&r(n),t&&r(s),t&&r(c),t&&r(g),t&&r(m),t&&r(h),O(C),t&&r(M),t&&r(j),t&&r(X),t&&r(P),O(H),t&&r(K),t&&r(Q),t&&r(W),t&&r(Z),O(it),t&&r(at),t&&r(ut),t&&r(dt),t&&r(ft),O(bt),t&&r(xt),t&&r(St),t&&r(kt),t&&r(_t),O(zt),t&&r(Ot),t&&r(jt),t&&r(Xt),t&&r(Pt),O(Jt),t&&r(Kt),t&&r(Qt),t&&r(Wt),t&&r(Zt),O(de),t&&r(me),t&&r(he),t&&r($e),t&&r(ye),O(Ce),t&&r(Me),t&&r(Fe),Ne=!1,o(ze)}}}let D=50;function I(t,e,n){let o=100,s=500,c=3.28,l=.5,i=.5,r=D,a=D,u=0,d=-2;return[o,s,c,l,i,r,a,u,d,{min:-5,max:5,step:.5,decimals:1,speed:.04},function(t){o=t,n(0,o)},function(t){s=t,n(1,s)},function(t){c=t,n(2,c)},function(t){l=t,n(3,l)},function(t){i=t,n(4,i)},t=>{n(6,a=t.detail)},t=>{n(5,r=t.detail)},()=>{n(7,u--,u)},function(t){u=t,n(7,u)},()=>{n(7,u++,u)},function(t){d=t,n(8,d)}]}return new class extends class{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),X(this,t,I,B,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
