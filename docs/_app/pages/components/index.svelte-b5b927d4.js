import{S as Pe,i as Re,s as xe,e as w,t as L,k as H,c as k,a as y,g as T,d as m,n as P,b as _,f as I,E as h,aP as ke,x as V,aQ as ze,aR as Ge,u as R,w as te,N as le,aL as Ne,aS as Me,z as Ue,r as se,G as qe,F as pe,j as ye,l as Ee,m as Fe,o as Ce,v as Se}from"../../chunks/vendor-7d844a47.js";import{c as Oe}from"../../chunks/_components-b2c9d1b5.js";import"../../chunks/Brush.html-d0f58b78.js";import"../../chunks/dots-fe363694.js";import"../../chunks/ClevelandDotPlot.percent-range.html-146fad58.js";function $e(n,e,s){const o=n.slice();return o[9]=e[s],o}function Le(n,e,s){const o=n.slice();return o[12]=e[s][0],o[13]=e[s][1],o}function Te(n,e,s){const o=n.slice();return o[16]=e[s],o}function Ae(n,e,s){const o=n.slice();return o[9]=e[s],o}function De(n){let e,s,o=n[9].name+"",f,v,r,p;return{c(){e=w("li"),s=w("a"),f=L(o),p=H(),this.h()},l(a){e=k(a,"LI",{});var b=y(e);s=k(b,"A",{class:!0,href:!0});var l=y(s);f=T(l,o),l.forEach(m),p=P(b),b.forEach(m),this.h()},h(){_(s,"class",v="section "+(n[1]===ne(n[9].name)?"active":"")+" svelte-otuws7"),_(s,"href",r="/components#"+ne(n[9].name))},m(a,b){I(a,e,b),h(e,s),h(s,f),h(e,p)},p(a,b){b&2&&v!==(v="section "+(a[1]===ne(a[9].name)?"active":"")+" svelte-otuws7")&&_(s,"class",v)},d(a){a&&m(e)}}}function Qe(n){let e=n[16].slug+"",s;return{c(){s=L(e)},l(o){s=T(o,e)},m(o,f){I(o,s,f)},p:pe,i:pe,o:pe,d(o){o&&m(s)}}}function We(n){let e,s,o;var f=n[16].component;function v(r){return{}}return f&&(e=new f(v())),{c(){e&&ye(e.$$.fragment),s=Ee()},l(r){e&&Fe(e.$$.fragment,r),s=Ee()},m(r,p){e&&Ce(e,r,p),I(r,s,p),o=!0},p(r,p){if(f!==(f=r[16].component)){if(e){se();const a=e;R(a.$$.fragment,1,0,()=>{Se(a,1)}),te()}f?(e=new f(v()),ye(e.$$.fragment),V(e.$$.fragment,1),Ce(e,s.parentNode,s)):e=null}},i(r){o||(e&&V(e.$$.fragment,r),o=!0)},o(r){e&&R(e.$$.fragment,r),o=!1},d(r){r&&m(s),e&&Se(e,r)}}}function Be(n){let e,s,o,f,v=(n[16].name||Ke(n[16].slug))+"",r,p,a,b,l=n[16].classes.map(Ze).join("")+"",g,t,i,c,C;const x=[We,Qe],D=[];function X(B,$){return B[16].component?0:1}return i=X(n),c=D[i]=x[i](n),{c(){e=w("div"),s=w("div"),o=w("span"),f=w("a"),r=L(v),a=H(),b=new ze,g=H(),t=w("div"),c.c(),this.h()},l(B){e=k(B,"DIV",{class:!0});var $=y(e);s=k($,"DIV",{class:!0});var z=y(s);o=k(z,"SPAN",{});var O=y(o);f=k(O,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var Q=y(f);r=T(Q,v),Q.forEach(m),O.forEach(m),a=P(z),b=Ge(z),z.forEach(m),g=P($),t=k($,"DIV",{class:!0});var j=y(t);c.l(j),j.forEach(m),$.forEach(m),this.h()},h(){_(f,"href",p="/components/"+n[16].slug),_(f,"sveltekit:prefetch",""),_(f,"class","svelte-otuws7"),b.a=null,_(s,"class","component-name svelte-otuws7"),_(t,"class","block-container svelte-otuws7"),_(e,"class","component-block svelte-otuws7")},m(B,$){I(B,e,$),h(e,s),h(s,o),h(o,f),h(f,r),h(s,a),b.m(l,s),h(e,g),h(e,t),D[i].m(t,null),C=!0},p(B,$){c.p(B,$)},i(B){C||(V(c),C=!0)},o(B){R(c),C=!1},d(B){B&&m(e),D[i].d()}}}function Ie(n){let e,s=Xe(n[12])+"",o,f,v,r,p=n[13],a=[];for(let l=0;l<p.length;l+=1)a[l]=Be(Te(n,p,l));const b=l=>R(a[l],1,1,()=>{a[l]=null});return{c(){e=w("h4"),o=L(s),f=H(),v=w("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=k(l,"H4",{class:!0});var g=y(e);o=T(g,s),g.forEach(m),f=P(l),v=k(l,"DIV",{class:!0});var t=y(v);for(let i=0;i<a.length;i+=1)a[i].l(t);t.forEach(m),this.h()},h(){_(e,"class","svelte-otuws7"),_(v,"class","subgroup-blocks")},m(l,g){I(l,e,g),h(e,o),I(l,f,g),I(l,v,g);for(let t=0;t<a.length;t+=1)a[t].m(v,null);r=!0},p(l,g){if(g&4){p=l[13];let t;for(t=0;t<p.length;t+=1){const i=Te(l,p,t);a[t]?(a[t].p(i,g),V(a[t],1)):(a[t]=Be(i),a[t].c(),V(a[t],1),a[t].m(v,null))}for(se(),t=p.length;t<a.length;t+=1)b(t);te()}},i(l){if(!r){for(let g=0;g<p.length;g+=1)V(a[g]);r=!0}},o(l){a=a.filter(Boolean);for(let g=0;g<a.length;g+=1)R(a[g]);r=!1},d(l){l&&m(e),l&&m(f),l&&m(v),le(a,l)}}}function je(n){let e,s=n[9].name+"",o,f,v,r,p,a,b=Object.entries(ke(n[9].components,Ve)),l=[];for(let t=0;t<b.length;t+=1)l[t]=Ie(Le(n,b,t));const g=t=>R(l[t],1,1,()=>{l[t]=null});return{c(){e=w("h3"),o=L(s),v=H(),r=w("div");for(let t=0;t<l.length;t+=1)l[t].c();p=H(),this.h()},l(t){e=k(t,"H3",{id:!0,class:!0});var i=y(e);o=T(i,s),i.forEach(m),v=P(t),r=k(t,"DIV",{class:!0});var c=y(r);for(let C=0;C<l.length;C+=1)l[C].l(c);p=P(c),c.forEach(m),this.h()},h(){_(e,"id",f=ne(n[9].name)),_(e,"class","svelte-otuws7"),_(r,"class","component-blocks svelte-otuws7")},m(t,i){I(t,e,i),h(e,o),I(t,v,i),I(t,r,i);for(let c=0;c<l.length;c+=1)l[c].m(r,null);h(r,p),a=!0},p(t,i){if(i&4){b=Object.entries(ke(t[9].components,Ve));let c;for(c=0;c<b.length;c+=1){const C=Le(t,b,c);l[c]?(l[c].p(C,i),V(l[c],1)):(l[c]=Ie(C),l[c].c(),V(l[c],1),l[c].m(r,p))}for(se(),c=b.length;c<l.length;c+=1)g(c);te()}},i(t){if(!a){for(let i=0;i<b.length;i+=1)V(l[i]);a=!0}},o(t){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)R(l[i]);a=!1},d(t){t&&m(e),t&&m(v),t&&m(r),le(l,t)}}}function Ye(n){let e,s,o,f,v,r,p,a,b,l,g,t,i,c,C,x,D,X,B,$,z,O,Q,j,ae,W,oe,re,M,U,ce,me=!0+"",ie,ue,fe,Z,Y=n[2],A=[];for(let u=0;u<Y.length;u+=1)A[u]=De(Ae(n,Y,u));let q=n[2],E=[];for(let u=0;u<q.length;u+=1)E[u]=je($e(n,q,u));const He=u=>R(E[u],1,1,()=>{E[u]=null});return{c(){e=w("meta"),s=w("meta"),o=H(),f=w("sidebar"),v=w("ul");for(let u=0;u<A.length;u+=1)A[u].c();r=H(),p=w("div"),a=w("h2"),b=L("Components"),l=H(),g=w("div"),t=w("p"),i=L("Because Layer Cake doesn't come with any pre-built components, here are a few options to get you started. These are meant to serve as starting points for many common chart types. They have a few built-in options to be flexible for handling different scenarios so they can be reused as much as possible. For example, the "),c=w("a"),C=L("Scatter"),x=L(" components support both linear and ordinal scales so you can use them in configurations like a regular "),D=w("a"),X=L("Scatter plot"),B=L(" but also charts like the "),$=w("a"),z=L("Time of Day"),O=L(" plot where the y-scale is made up of groups."),Q=H(),j=w("p"),ae=L("Some componens have HTML, SVG and Canvas versions and those marked as "),W=w("span"),oe=L("%-range"),re=L(" are optimized to be used server-side with the "),M=w("a"),U=w("code"),ce=L("percentRange="),ie=L(me),ue=L(" prop."),fe=H();for(let u=0;u<E.length;u+=1)E[u].c();this.h()},l(u){const S=Ne('[data-svelte="svelte-18cdw4k"]',document.head);e=k(S,"META",{name:!0,content:!0}),s=k(S,"META",{name:!0,content:!0}),S.forEach(m),o=P(u),f=k(u,"SIDEBAR",{class:!0});var d=y(f);v=k(d,"UL",{class:!0});var G=y(v);for(let F=0;F<A.length;F+=1)A[F].l(G);G.forEach(m),d.forEach(m),r=P(u),p=k(u,"DIV",{id:!0,class:!0});var J=y(p);a=k(J,"H2",{class:!0});var _e=y(a);b=T(_e,"Components"),_e.forEach(m),l=P(J),g=k(J,"DIV",{id:!0,class:!0});var ee=y(g);t=k(ee,"P",{});var N=y(t);i=T(N,"Because Layer Cake doesn't come with any pre-built components, here are a few options to get you started. These are meant to serve as starting points for many common chart types. They have a few built-in options to be flexible for handling different scenarios so they can be reused as much as possible. For example, the "),c=k(N,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var de=y(c);C=T(de,"Scatter"),de.forEach(m),x=T(N," components support both linear and ordinal scales so you can use them in configurations like a regular "),D=k(N,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var ve=y(D);X=T(ve,"Scatter plot"),ve.forEach(m),B=T(N," but also charts like the "),$=k(N,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var ge=y($);z=T(ge,"Time of Day"),ge.forEach(m),O=T(N," plot where the y-scale is made up of groups."),N.forEach(m),Q=P(ee),j=k(ee,"P",{});var K=y(j);ae=T(K,"Some componens have HTML, SVG and Canvas versions and those marked as "),W=k(K,"SPAN",{class:!0});var be=y(W);oe=T(be,"%-range"),be.forEach(m),re=T(K," are optimized to be used server-side with the "),M=k(K,"A",{href:!0,class:!0});var we=y(M);U=k(we,"CODE",{class:!0});var he=y(U);ce=T(he,"percentRange="),ie=T(he,me),he.forEach(m),we.forEach(m),ue=T(K," prop."),K.forEach(m),ee.forEach(m),fe=P(J);for(let F=0;F<E.length;F+=1)E[F].l(J);J.forEach(m),this.h()},h(){document.title="LayerCake - Component gallery",_(e,"name","og:title"),_(e,"content","Layer Cake \u2014 Component gallery"),_(s,"name","twitter:title"),_(s,"content","Layer Cake \u2014 Component gallery"),_(v,"class","svelte-otuws7"),_(f,"class","svelte-otuws7"),_(a,"class","svelte-otuws7"),_(c,"href","/components/Scatter.svg.svelte"),_(c,"sveltekit:prefetch",""),_(c,"target","_blank"),_(c,"class","svelte-otuws7"),_(D,"href","/example/Scatter"),_(D,"sveltekit:prefetch",""),_(D,"target","_blank"),_(D,"class","svelte-otuws7"),_($,"href","/example/Timeplot"),_($,"sveltekit:prefetch",""),_($,"target","_blank"),_($,"class","svelte-otuws7"),_(W,"class","label percent-range svelte-otuws7"),_(U,"class","svelte-otuws7"),_(M,"href","/guide#percentrange"),_(M,"class","svelte-otuws7"),_(g,"id","dek"),_(g,"class","svelte-otuws7"),_(p,"id","container"),_(p,"class","svelte-otuws7")},m(u,S){h(document.head,e),h(document.head,s),I(u,o,S),I(u,f,S),h(f,v);for(let d=0;d<A.length;d+=1)A[d].m(v,null);I(u,r,S),I(u,p,S),h(p,a),h(a,b),h(p,l),h(p,g),h(g,t),h(t,i),h(t,c),h(c,C),h(t,x),h(t,D),h(D,X),h(t,B),h(t,$),h($,z),h(t,O),h(g,Q),h(g,j),h(j,ae),h(j,W),h(W,oe),h(j,re),h(j,M),h(M,U),h(U,ce),h(U,ie),h(j,ue),h(p,fe);for(let d=0;d<E.length;d+=1)E[d].m(p,null);n[3](p),Z=!0},p(u,[S]){if(S&6){Y=u[2];let d;for(d=0;d<Y.length;d+=1){const G=Ae(u,Y,d);A[d]?A[d].p(G,S):(A[d]=De(G),A[d].c(),A[d].m(v,null))}for(;d<A.length;d+=1)A[d].d(1);A.length=Y.length}if(S&4){q=u[2];let d;for(d=0;d<q.length;d+=1){const G=$e(u,q,d);E[d]?(E[d].p(G,S),V(E[d],1)):(E[d]=je(G),E[d].c(),V(E[d],1),E[d].m(p,null))}for(se(),d=q.length;d<E.length;d+=1)He(d);te()}},i(u){if(!Z){for(let S=0;S<q.length;S+=1)V(E[S]);Z=!0}},o(u){E=E.filter(Boolean);for(let S=0;S<E.length;S+=1)R(E[S]);Z=!1},d(u){m(e),m(s),u&&m(o),u&&m(f),le(A,u),u&&m(r),u&&m(p),le(E,u),n[3](null)}}}function Je(n){const e=n.split(".").filter(s=>s!=="svelte");return e.shift(),e.length===0?["svg"]:e}function Ke(n){return n.split(".")[0]}function Xe(n){return n=="webgl"?"WebGL":n=="canvas"?"Canvas":n.toUpperCase()}function ne(n){return n.toLowerCase().split(" ")[0]}const Ve=n=>n.group,Ze=n=>`<span class="label ${n}">${n.replace("percent-","%-")}</span>`;function et(n,e,s){const o=Oe.map(t=>({name:`${t.name.replace(/^\w/,i=>i.toUpperCase())} components`,components:Me(t.components,"slug").map(({name:i,slug:c,component:C})=>{const x=Je(c);return{name:i,slug:c,component:C,classes:x,group:x.filter(D=>D!=="percent-range")[0]}})}));let f,v=[],r="axis",p="axis",a=[];Ue(()=>{typeof window!="undefined"&&(a=f.querySelectorAll("[id]"),r=window.location.hash.slice(1),s(1,p=r||"axis"),b(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",b,!0),setTimeout(b,1e3),setTimeout(b,5e3))});function b(){if(f){const{top:t}=f.getBoundingClientRect();v=[].map.call(a,i=>i.getBoundingClientRect().top-t)}}function l(){const t=-window.scrollY;let i=a.length;for(;i--;)if(v[i]+t<100){const c=a[i],{id:C}=c;C!==r&&(s(1,p=C),r=C);return}}function g(t){qe[t?"unshift":"push"](()=>{f=t,s(0,f)})}return[f,p,o,g]}class ot extends Pe{constructor(e){super();Re(this,e,et,Ye,xe,{})}}export{ot as default};
