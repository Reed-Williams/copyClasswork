import{o as l,c as d,a as s,d as v,t as f,r as b,w as U,b as x,v as C,e as V,f as j,g as N,u as r,h as u,i as h,R as m,p as O,j as I,k as _,l as A,F as E,m as R,n as y,q as B,s as M,x as W,y as q}from"./vendor.45f07647.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=a(t);fetch(t.href,c)}};H();const D="modulepreload",P={},F="/",z=function(e,a){return!a||a.length===0?e():Promise.all(a.map(o=>{if(o=`${F}${o}`,o in P)return;P[o]=!0;const t=o.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":D,t||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),t)return new Promise((p,T)=>{i.addEventListener("load",p),i.addEventListener("error",T)})})).then(()=>e())};var k=(n,e)=>{const a=n.__vccOpts||n;for(const[o,t]of e)a[o]=t;return a};const J={},Y=s("div",{class:"section"},[s("h1",{class:"title"},"Home Page")],-1),K=[Y];function G(n,e){return l(),d("div",null,K)}var Q=k(J,[["render",G]]);const X={class:"section"},Z={class:"title"},g=v({props:{title:{type:String,default:"Hello World"}},setup(n){const e=n;return(a,o)=>(l(),d("div",X,[s("h1",Z,f(e.title),1)]))}}),ss={class:"section"},ts={class:"columns"},es={class:"column is-half is-offset-one-quarter"},os={class:"card"},as=["onSubmit"],ns=s("h1",{class:"title"},"Login Page",-1),is={class:"field"},cs={class:"control has-icons-left has-icons-right"},rs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),ls=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),ds={class:"field"},us={class:"control has-icons-left"},_s=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),ps=s("div",{class:"field"},[s("p",{class:"control"},[s("button",{class:"button is-success"}," Login ")])],-1),hs=v({setup(n){const e=L(),a=b(""),o=b("");function t(){e.Login(a.value,o.value)}return(c,i)=>(l(),d("div",ss,[s("div",ts,[s("div",es,[s("div",os,[s("form",{class:"card-content",onSubmit:U(t,["prevent"])},[ns,s("div",is,[s("p",cs,[x(s("input",{class:"input",type:"email",placeholder:"Email","onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p)},null,512),[[C,a.value]]),rs,ls])]),s("div",ds,[s("p",us,[x(s("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":i[1]||(i[1]=p=>o.value=p)},null,512),[[C,o.value]]),_s])]),ps],40,as)])])])]))}}),ms=[{path:"/",component:Q},{path:"/about",component:g,props:{title:"About Page!"}},{path:"/contact",component:g,props:{title:"Contact Page!"}},{path:"/login",component:hs},{path:"/signup",component:g,props:{title:"Signup Page!"}},{path:"/wall",component:()=>z(()=>import("./Wall.194396a8.js"),["assets/Wall.194396a8.js","assets/Wall.a0b51b7e.css","assets/vendor.45f07647.js"])},{path:"/hidden",component:g,props:{title:"You reached the hidden Page!"}}],$=V({history:j(),routes:ms,linkActiveClass:"is-active"});$.beforeEach((n,e)=>{const a=L();a.destinationUrl==null&&n.path!="/login"&&(a.destinationUrl=n.path),console.log({to:n});const o=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:o}),o.includes(n.path)&&(console.log("requires login"),!a.user))return"/login"});const w=N("messages",{state:()=>({notifications:[{type:"primary",message:"This is a primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yay you did it!"},{type:"warning",message:"Uh Oh! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(n){this.notifications.splice(n,1)}}}),fs="http://localhost:3001/api/";function vs(n,e,a,o){let t={};return e&&(t={method:a!=null?a:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),fetch(fs+n,t).then(c=>c.json())}const L=N("session",{state:()=>({user:null,destinationUrl:null}),actions:{async Login(n,e){var o;const a=w();try{const t=await this.api("users/login",{email:n,password:e});t&&(a.notifications.push({type:"success",message:`Welcome back ${t.firstName}!`}),this.user=t,$.push((o=this.destinationUrl)!=null?o:"/wall"))}catch(t){a.notifications.push({type:"danger",message:t.message}),console.table(a.notifications)}},Logout(){this.user=null,$.push("/login")},async api(n,e,a,o){var c;const t=w();try{const i=await vs(n,e,a,o);if((c=i.errors)==null?void 0:c.length)throw{message:i.errors.join(", ")};return await i.data}catch(i){t.notifications.push({type:"danger",message:i.message})}}}});const S=n=>(O("data-v-65b3917b"),n=n(),I(),n),gs={key:0,class:"buttons"},bs=S(()=>s("strong",null,"Sign up",-1)),ys=_(" Log in "),$s={key:1,class:"buttons"},ws={class:"avatar"},ks=["src"],Ls=S(()=>s("br",null,null,-1)),Ss=S(()=>s("strong",null,"Log out",-1)),xs=[Ss],Cs=v({setup(n){const e=L();return(a,o)=>r(e).user?(l(),d("div",$s,[s("div",ws,[s("img",{src:r(e).user.pic},null,8,ks),s("div",null,[s("strong",null,f(r(e).user.firstName)+" "+f(r(e).user.lastName),1),Ls,s("i",null,f(r(e).user.email),1)])]),s("a",{class:"button us-primary",onClick:o[0]||(o[0]=t=>r(e).Logout())},xs)])):(l(),d("div",gs,[u(r(m),{class:"button is-primary",to:"/signup"},{default:h(()=>[bs]),_:1}),u(r(m),{class:"button is-light",to:"/login"},{default:h(()=>[ys]),_:1})]))}});var Ps=k(Cs,[["__scopeId","data-v-65b3917b"]]);const Ns=n=>(O("data-v-7683f48a"),n=n(),I(),n),Os=Ns(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Is={key:0,class:"tag is-danger"},Es={class:"navbar-dropdown"},Ts=["onClick"],Us=v({setup(n){const e=w(),a=b(!1);return(o,t)=>(l(),d("div",{class:y(["navbar-item has-dropdown",{"is-active":a.value}])},[s("a",{class:"navbar-link",onClick:t[0]||(t[0]=c=>a.value=!a.value)},[Os,r(e).notifications.length?(l(),d("span",Is,f(r(e).notifications.length),1)):A("",!0)]),s("div",Es,[(l(!0),d(E,null,R(r(e).notifications,(c,i)=>(l(),d("div",{class:y(`notification is-light is-${c.type}`)},[s("button",{class:"delete",onClick:p=>r(e).close(i)},null,8,Ts),_(" "+f(c.message),1)],2))),256))])],2))}});var Vs=k(Us,[["__scopeId","data-v-7683f48a"]]);const js={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},As={class:"container"},Rs={class:"navbar-brand"},Bs=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Ms=s("span",{"aria-hidden":"true"},null,-1),Ws=s("span",{"aria-hidden":"true"},null,-1),qs=s("span",{"aria-hidden":"true"},null,-1),Hs=[Ms,Ws,qs],Ds={class:"navbar-start"},Fs=_(" Home "),zs=_(" Wall "),Js={class:"navbar-item has-dropdown is-hoverable"},Ys=s("a",{class:"navbar-link"}," More ",-1),Ks={class:"navbar-dropdown"},Gs=_(" About "),Qs=_("> "),Xs=s("a",{class:"navbar-item"}," Jobs ",-1),Zs=_(" Contact "),st=s("hr",{class:"navbar-divider"},null,-1),tt=s("a",{class:"navbar-item"}," Report an issue ",-1),et={class:"navbar-end"},ot={class:"navbar-item"},at=B('<div class="navbar-item"><div class="field is-grouped"><p class="control"><a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"><span class="icon"><i class="fab fa-twitter"></i></span><span> Tweet </span></a></p><p class="control"><a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip"><span class="icon"><i class="fas fa-download"></i></span><span>Download</span></a></p></div></div>',1),nt=v({setup(n){const e=b(!1);return(a,o)=>(l(),d("nav",js,[s("div",As,[s("div",Rs,[Bs,s("a",{role:"button",class:y(["navbar-burger",{"is-active":e.value}]),"aria-label":"menu","aria-expanded":"false",onClick:o[0]||(o[0]=t=>e.value=!e.value)},Hs,2)]),s("div",{class:y(["navbar-menu",{"is-active":e.value}])},[s("div",Ds,[u(r(m),{class:"navbar-item",to:"/"},{default:h(()=>[Fs]),_:1}),u(r(m),{class:"navbar-item",to:"/wall"},{default:h(()=>[zs]),_:1}),s("div",Js,[Ys,s("div",Ks,[u(r(m),{class:"navbar-item",to:"/about"},{default:h(()=>[Gs]),_:1}),Qs,Xs,u(r(m),{class:"navbar-item",to:"/contact"},{default:h(()=>[Zs]),_:1}),st,tt])])]),s("div",et,[s("div",ot,[u(Ps)]),u(Vs),at])],2)])]))}}),it={class:"container"},ct=v({setup(n){return(e,a)=>{const o=M("router-view");return l(),d(E,null,[u(nt),s("div",it,[u(o)])],64)}}});W(ct).use($).use(q()).mount("#app");export{vs as a};