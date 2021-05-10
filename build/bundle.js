var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a=!1;const i=new Set;function u(t,e){a&&i.delete(e),e.parentNode!==t&&t.appendChild(e)}function l(t,e,n){a&&i.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function s(t){a?i.add(t):t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){t.value=null==e?"":e}let m;function $(t){m=t}const b=[],g=[],w=[],x=[],v=Promise.resolve();let _=!1;function A(t){w.push(t)}let C=!1;const E=new Set;function S(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),j(e.$$)}for($(null),b.length=0;g.length;)g.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];E.has(e)||(E.add(e),e())}w.length=0}while(b.length);for(;x.length;)x.pop()();_=!1,C=!1,E.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;function U(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,v.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,u,l,d,f,p,h=[-1]){const y=m;$(c);const b=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(y?y.$$.context:u.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let g=!1;if(b.ctx=l?l(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&f(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),g&&U(c,t)),e})):[],b.update(),g=!0,o(b.before_update),b.fragment=!!d&&d(b.ctx),u.target){if(u.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(u.target);b.fragment&&b.fragment.l(t),t.forEach(s)}else b.fragment&&b.fragment.c();u.intro&&((w=c.$$.fragment)&&w.i&&(k.delete(w),w.i(x))),function(t,n,c,a){const{fragment:i,on_mount:u,on_destroy:l,after_update:s}=t.$$;i&&i.m(n,c),a||A((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(A)}(c,u.target,u.anchor,u.customElement),function(){a=!1;for(const t of i)t.parentNode.removeChild(t);i.clear()}(),S()}var w,x;$(y)}function O(t){let e,n,r,c,a,i,u,m,$,b,g,w,x,v,_,A,C,E;return{c(){e=d("h3"),e.textContent="Frase de cifrado:",n=f(),r=d("input"),c=f(),a=d("h3"),a.textContent="Texto a cifrar:",i=f(),u=d("textarea"),$=f(),b=d("h3"),b.textContent="Información cifrada:",g=f(),w=d("textarea"),x=f(),v=d("button"),v.textContent="Descargar fichero cifrado",_=f(),A=d("textarea"),h(r,"type","text"),u.disabled=m=!t[2],h(u,"maxlength","446"),w.disabled=!0,A.disabled=!0},m(o,s){l(o,e,s),l(o,n,s),l(o,r,s),y(r,t[1]),l(o,c,s),l(o,a,s),l(o,i,s),l(o,u,s),y(u,t[4]),l(o,$,s),l(o,b,s),l(o,g,s),l(o,w,s),y(w,t[0]),l(o,x,s),l(o,v,s),l(o,_,s),l(o,A,s),y(A,t[3]),C||(E=[p(r,"input",t[12]),p(r,"input",t[5]),p(u,"input",t[13]),p(u,"input",t[6]),p(w,"input",t[14]),p(v,"click",t[7]),p(A,"input",t[15])],C=!0)},p(t,e){2&e&&r.value!==t[1]&&y(r,t[1]),4&e&&m!==(m=!t[2])&&(u.disabled=m),16&e&&y(u,t[4]),1&e&&y(w,t[0]),8&e&&y(A,t[3])},d(t){t&&s(e),t&&s(n),t&&s(r),t&&s(c),t&&s(a),t&&s(i),t&&s(u),t&&s($),t&&s(b),t&&s(g),t&&s(w),t&&s(x),t&&s(v),t&&s(_),t&&s(A),C=!1,o(E)}}}function R(e){let n,o,r,c,a;let i=O&&O(e);return{c(){n=d("main"),o=d("h1"),o.textContent="Web AES",r=f(),c=d("h2"),c.textContent="Cifrar",a=f(),i&&i.c(),h(o,"class","svelte-qaqniu"),h(n,"class","svelte-qaqniu")},m(t,e){l(t,n,e),u(n,o),u(n,r),u(n,c),u(n,a),i&&i.m(n,null)},p(t,[e]){i&&i.p(t,e)},i:t,o:t,d(t){t&&s(n),i&&i.d()}}}function T(t,e,n){let o,r,c,a,i,u,l,s,d="";async function f(){const t=d+"=".repeat(446-d.length),e=(new TextEncoder).encode(JSON.stringify(t));n(8,c=crypto.getRandomValues(new Uint8Array(16)));try{n(9,a=await window.crypto.subtle.encrypt({name:"AES-CTR",counter:c,length:64},r,e))}catch(t){console.error(t)}}return t.$$.update=()=>{if(1792&t.$$.dirty&&c&&(n(10,i={counter:new Uint8Array(c),encrypted:new Uint8Array(a)}),n(0,s=JSON.stringify(i))),2049&t.$$.dirty&&s){!async function(){const t=JSON.parse(s),e=Object.values(t.counter),o=new Uint8Array(e).buffer,c=Object.values(t.encrypted),a=new Uint8Array(c).buffer;try{let t=await window.crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},r,a);n(11,u=new Uint8Array(t))}catch(t){console.error(t)}}();let t=(new TextDecoder).decode(u);n(3,l=t.replace(/=.*$/,""))}},[s,o,r,l,d,async function(){n(2,r=await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:crypto.getRandomValues(new Uint8Array(16)),iterations:1e5,hash:"SHA-512"},await function(){let t=(new TextEncoder).encode(o);return window.crypto.subtle.importKey("raw",t,"PBKDF2",!1,["deriveBits","deriveKey"])}(),{name:"AES-CTR",length:256},!0,["encrypt","decrypt"])),f()},f,function(){const t=new Blob([i],{type:"application/json"}),e=document.createElement("a");e.download="encrypted.json",e.href=URL.createObjectURL(t),e.dataset.downloadurl=["application/json",e.download,e.href].join(":"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),setTimeout((function(){URL.revokeObjectURL(e.href)}),1500)},c,a,i,u,function(){o=this.value,n(1,o)},function(){d=this.value,n(4,d)},function(){s=this.value,n(0,s),n(8,c),n(9,a),n(10,i)},function(){l=this.value,n(3,l),n(0,s),n(11,u),n(8,c),n(9,a),n(10,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,T,R,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
