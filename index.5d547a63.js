function g(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function Q(){return Object.create(null)}function E(t){t.forEach(tt)}function H(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Xt(t,e){return t===e?!0:(C||(C=document.createElement("a")),C.href=e,t===C.href)}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null){for(const i of e)i(void 0);return g}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Zt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let r=0;r<c;r+=1)l[r]=e.dirty[r]|s[r];return l}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,l){if(s){const c=et(e,n,i,l);t.p(c,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function re(t){const e={};for(const n in t)e[n]=!0;return e}function oe(t,e,n){return t.set(n),e}function ce(t){return t&&H(t.destroy)?t.destroy:g}function le(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let mt=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):g;const w=new Set;function it(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&G(it)}function pt(t){let e;return w.size===0&&G(it),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function yt(){P=!0}function gt(){P=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:$t(1,s,h=>e[n[h]].claim_order,u))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,s=Math.max(a,s)}const l=[],c=[];let r=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);r>=o;r--)c.push(e[r]);r--}for(;r>=0;r--)c.push(e[r]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(c[o],_)}}function bt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=V("style");return e.textContent="/* empty */",vt(st(t),e),e.sheet}function vt(t,e){return bt(t.head||t,e),e.sheet}function Et(t,e){if(P){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function Tt(t,e,n){P&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function ae(){return W(" ")}function fe(){return W("")}function _e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function J(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const At=["width","height"];function kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&At.indexOf(i)===-1?t[i]=e[i]:J(t,i,e[i])}function he(t,e){for(const n in e)J(t,n,e[n])}function St(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:J(t,e,n)}function me(t){return/-/.test(t)?St:kt}function pe(t){return t.dataset.svelteH}function Mt(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){ot(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const r=t[c];if(e(r)){const o=n(r);return o===void 0?t.splice(c,1):t[c]=o,s||(t.claim_info.last_index=c),r}}for(let c=t.claim_info.last_index-1;c>=0;c--){const r=t[c];if(e(r)){const o=n(r);return o===void 0?t.splice(c,1):t[c]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,r}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const r=s.attributes[c];n[r.name]||l.push(r.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function ye(t,e,n){return lt(t,e,n,V)}function ge(t,e,n){return lt(t,e,n,rt)}function jt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function $e(t){return jt(t," ")}function U(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function xe(t,e){const n=U(t,"HTML_TAG_START",0),i=U(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new X(e);ot(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new X(e,l)}function be(t,e){e=""+e,t.data!==e&&(t.data=e)}function we(t,e){t.value=e??""}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Lt{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class X extends Lt{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}}const j=new Map;let O=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:wt(e),rules:{}};return j.set(t,n),n}function Y(t,e,n,i,s,l,c,r=0){const o=16.666/i;let u=`{
`;for(let d=0;d<=1;d+=o){const $=e+(n-e)*l(d);u+=d*100+`%{${c($,1-$)}}
`}const _=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ht(_)}_${r}`,h=st(t),{stylesheet:y,rules:f}=j.get(h)||Pt(h,t);f[a]||(f[a]=!0,y.insertRule(`@keyframes ${a} ${_}`,y.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,O+=1,a}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),O-=s,O||Rt())}function Rt(){G(()=>{O||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),j.clear())})}let k;function T(t){k=t}function K(){if(!k)throw new Error("Function called outside component initialization");return k}function ve(t){K().$$.on_mount.push(t)}function Ee(t,e){return K().$$.context.set(t,e),e}function Ne(t){return K().$$.context.get(t)}function Te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],Z=[];let v=[];const F=[],Bt=Promise.resolve();let I=!1;function qt(){I||(I=!0,Bt.then(ut))}function L(t){v.push(t)}function Ae(t){F.push(t)}const q=new Set;let x=0;function ut(){if(x!==0)return;const t=k;do{try{for(;x<b.length;){const e=b[x];x++,T(e),zt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(T(null),b.length=0,x=0;Z.length;)Z.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];q.has(n)||(q.add(n),n())}v.length=0}while(b.length);for(;F.length;)F.pop()();I=!1,q.clear(),T(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function Ft(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let N;function It(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function z(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function ke(){p={r:0,c:[],p}}function Se(){p.r||E(p.c),p=p.p}function Gt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ce(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Vt={duration:0};function Me(t,e,n,i){let l=e(t,n,{direction:"both"}),c=i?0:1,r=null,o=null,u=null,_;function a(){u&&Dt(t,u)}function h(f,m){const d=f.b-c;return m*=Math.abs(d),{a:c,b:f.b,d,duration:m,start:f.start,end:f.start+m,group:f.group}}function y(f){const{delay:m=0,duration:d=300,easing:$=ft,tick:D=g,css:R}=l||Vt,B={start:mt()+m,b:f};f||(B.group=p,p.r+=1),"inert"in t&&(f?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||o?o=B:(R&&(a(),u=Y(t,c,f,d,m,$,R)),f&&D(0,1),r=h(B,d),L(()=>z(t,f,"start")),pt(S=>{if(o&&S>o.start&&(r=h(o,d),o=null,z(t,r.b,"start"),R&&(a(),u=Y(t,c,r.b,r.duration,0,$,l.css))),r){if(S>=r.end)D(c=r.b,1-c),z(t,r.b,"end"),o||(r.b?a():--r.group.r||E(r.group.c)),r=null;else if(S>=r.start){const at=S-r.start;c=r.a+r.d*$(at/r.duration),D(c,1-c)}}return!!(r||o)}))}return{run(f){H(l)?It().then(()=>{l=l({direction:f?"in":"out"}),y(f)}):y(f)},end(){a(),r=o=null}}}function je(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const c=t[l],r=e[l];if(r){for(const o in c)o in r||(i[o]=1);for(const o in r)s[o]||(n[o]=r[o],s[o]=1);t[l]=r}else for(const o in c)s[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Oe(t){return typeof t=="object"&&t!==null?t:{}}function Le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function He(t){t&&t.c()}function Pe(t,e){t&&t.l(e)}function Wt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),L(()=>{const l=t.$$.on_mount.map(tt).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...l):E(l),t.$$.on_mount=[]}),s.forEach(L)}function Jt(t,e){const n=t.$$;n.fragment!==null&&(Ft(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(b.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,s,l,c,r=[-1]){const o=k;T(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Q(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};c&&c(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...y)=>{const f=y.length?y[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=f)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](f),_&&Kt(t,a)),h}):[],u.update(),_=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){yt();const a=Mt(e.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Gt(t.$$.fragment),Wt(t,e.target,e.anchor),gt(),ut()}T(o)}class Re{$$=void 0;$$set=void 0;$destroy(){Jt(this,1),this.$destroy=g}$on(e,n){if(!H(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Qt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qt);export{oe as $,re as A,Ne as B,ae as C,$e as D,Te as E,J as F,we as G,_e as H,E as I,pe as J,Et as K,ue as L,de as M,W as N,jt as O,be as P,g as Q,Oe as R,Re as S,Ee as T,rt as U,X as V,ge as W,xe as X,he as Y,Yt as Z,ve as _,Tt as a,L as a0,Me as a1,me as a2,K as a3,H as a4,Le as a5,Ae as a6,Xt as a7,ce as a8,le as a9,ft as aa,Gt as b,Se as c,A as d,fe as e,se as f,ke as g,_t as h,De as i,ie as j,Z as k,Zt as l,ne as m,te as n,V as o,ye as p,Mt as q,kt as r,Ut as s,Ce as t,ee as u,je as v,He as w,Pe as x,Wt as y,Jt as z};
