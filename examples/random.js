import{R as u,b as c,M as i,m as f,j as l,r as p,l as g,n as w,L as y,P as R,V as h}from"./makeScene2D.7a625eb5.js";import{l as j,s as k,a as v}from"./sequence.63f32de5.js";function D(e,o=!0){return typeof e=="number"?new u(o?e:e+c().meta.getData().seed):c().random}let a;a!=null||(a=new i("random",!1,{version:0}));a.loadData({version:0});const b=a;let n;n!=null||(n=new i("random",!1,{version:1,seed:1456280284}));n.loadData({version:1,seed:1456280284});const x=n,m=f(function*(e){const o=D(),r=[];e.add(l(y,{layout:!0,gap:10,alignItems:"center",children:p(40).map(s=>l(g,{ref:w(r,s),radius:20,width:10,height:10,fill:"#e13238"}))})),yield*j(3,()=>k(.04,...r.map(s=>v(s.size.y(o.nextInt(100,200),.5).to(10,.5),s.fill("#e6a700",.5).to("#e13238",.5)))))});let t;t!=null||(t=new m.klass("random",x,m.config));const z=t,d=new R({scenes:[z],background:"#141414",size:new h(960,540)});d.meta=b;d.name="random";export{d as default};