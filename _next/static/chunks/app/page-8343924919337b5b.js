(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{864:function(e,s,t){Promise.resolve().then(t.bind(t,6582))},6582:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return N}});var a=t(9268),n=t(2168),r=t(2268),i=t(6394),l=t.n(i),o=t(6006),c=t(1410),d=t(9),u=t(278),h=t(4625),x=t(9235),p=t(5911);c.vI.add(d.qmU),c.vI.add(d.bE7);let m="https://7mg5vpebc4.execute-api.us-west-2.amazonaws.com";function f(e){var s;let[t,n]=(0,o.useState)([]),[i,l]=(0,o.useState)([]),[c,d]=(0,o.useState)(!1),[f,g]=(0,o.useState)(""),[b,j]=(0,o.useState)(!1),w=async()=>{let s=new Headers;s.append("Authorization","Basic "+(0,r.encode)(e.uid+":"+e.password));let t=await fetch(m+"/user/",{method:"GET",headers:s});200===t.status&&n((await t.json()).users)},N=async()=>{let s=Math.round(Date.now()/1e3-600),t=new Headers;t.append("Authorization","Basic "+(0,r.encode)(e.uid+":"+e.password));let a=await fetch(m+"/ring/"+s,{method:"GET",headers:t});200===a.status&&l((await a.json()).rings)},y=async s=>{let t=new Headers;t.append("Authorization","Basic "+(0,r.encode)(e.uid+":"+e.password)),await fetch(m+"/user/"+s.id,{method:"POST",headers:t,body:JSON.stringify(s)}),w()},v=async s=>{s.preventDefault();let t=new Headers;t.append("Authorization","Basic "+(0,r.encode)(e.uid+":"+e.password)),await fetch(m+"/announce/party",{method:"POST",headers:t,body:JSON.stringify({text:f})})},S=async()=>{j(!0);let s=new Headers;s.append("Authorization","Basic "+(0,r.encode)(e.uid+":"+e.password));let t="Y";e.partyTime&&(t="N"),await fetch(m+"/announce/bell",{method:"POST",headers:s,body:JSON.stringify({text:t})}),j(!1)};if((0,o.useEffect)(()=>{e.userInfo.admin&&(w(),N(),setInterval(N,5e3))},[e.userInfo]),!(null===(s=e.userInfo)||void 0===s?void 0:s.admin))return;let P=(0,a.jsx)(u.ZP,{});t.length>0&&(P=(0,a.jsxs)(h.ZP,{compact:!0,bordered:!1,borderWeight:void 0,"aria-label":"User admin table",css:{height:"auto",minWidth:"100%",padding:"0px"},children:[(0,a.jsxs)(h.ZP.Header,{children:[(0,a.jsx)(h.ZP.Column,{css:{backgroundColor:"transparent",paddingLeft:"0px !important"},children:"User"}),(0,a.jsx)(h.ZP.Column,{css:{backgroundColor:"transparent",textAlign:"center"},children:"Banned"}),(0,a.jsx)(h.ZP.Column,{css:{backgroundColor:"transparent",textAlign:"center"},children:"Admin"})]}),(0,a.jsx)(h.ZP.Body,{children:t.map(e=>(0,a.jsxs)(h.ZP.Row,{children:[(0,a.jsxs)(h.ZP.Cell,{css:{paddingLeft:"0px !important"},children:[(0,a.jsx)("p",{className:"font-serif text-lg text-citron leading-1",children:e.username}),(0,a.jsx)("p",{className:"font-sans text-xs leading-1 text-white",children:e.id})]}),(0,a.jsx)(h.ZP.Cell,{css:{textAlign:"center"},children:(0,a.jsx)(x.ZP,{checked:e.banned,onChange:s=>{y({...e,banned:s})}})}),(0,a.jsx)(h.ZP.Cell,{css:{textAlign:"center"},children:(0,a.jsx)(x.ZP,{checked:e.admin,onChange:s=>{y({...e,admin:s})}})})]},e.id))})]}));let C=(0,a.jsx)(u.ZP,{});i.length>0&&(C=(0,a.jsxs)(h.ZP,{compact:!0,striped:!0,bordered:!1,shadow:!1,"aria-label":"Ring log",css:{height:"auto",minWidth:"100%",padding:"0px"},children:[(0,a.jsxs)(h.ZP.Header,{children:[(0,a.jsx)(h.ZP.Column,{css:{backgroundColor:"transparent",paddingLeft:"0px !important"},children:"User"}),(0,a.jsx)(h.ZP.Column,{css:{backgroundColor:"transparent",textAlign:"right"},children:"Timestamp"})]}),(0,a.jsx)(h.ZP.Body,{children:i.map(e=>(0,a.jsxs)(h.ZP.Row,{children:[(0,a.jsx)(h.ZP.Cell,{css:{paddingLeft:"0px !important"},children:(0,a.jsx)("p",{className:"text-white",children:e.uid})}),(0,a.jsx)(h.ZP.Cell,{css:{textAlign:"right"},children:(0,a.jsx)("p",{className:"text-white",children:new Date(1e3*parseInt(e.timestamp)).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})})})]},e.timestamp+e.uid))})]}));let k=null;return k=b?(0,a.jsx)(u.ZP,{color:"currentColor",size:"sm"}):e.partyTime?"Disable Doorbell":"Enable Doorbell",(0,a.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,a.jsx)("h1",{className:"font-serif text-peach text-4xl uppercase",children:"Admin Controls"}),(0,a.jsx)("section",{className:"flex flex-col gap-2",children:(0,a.jsx)(p.ZP,{size:"lg",className:"!bg-periwinkle rounded-full font-sans uppercase",onPress:S,children:k})}),(0,a.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-serif text-periwinkle",children:"Set Party Details"}),(0,a.jsx)("p",{className:"font-serif",children:"Edit the field below and press enter to display party information to lower-access Board members."}),(0,a.jsxs)("form",{children:[(0,a.jsx)("input",{placeholder:"Set party details (default 'TBA')",className:"bg-transparent border-0 border-b-2 border-b-peach focus:border-b-citron !outline-none font-sans pb-1 w-full",onChange:e=>g(e.target.value)}),(0,a.jsx)("input",{type:"submit",value:"",onClick:e=>v(e)})]})]}),(0,a.jsxs)("section",{className:"flex flex-col gap-2 mt-10",children:[(0,a.jsx)("h2",{className:"text-3xl font-serif text-periwinkle",children:"Users"}),P]}),(0,a.jsxs)("section",{className:"flex flex-col gap-2 mt-10",children:[(0,a.jsx)("h2",{className:"text-3xl font-serif text-periwinkle",children:"Ring Log"}),C]})]})}function g(e){let[s,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(!0),i=(0,o.useRef)(null),l=t=>{t.preventDefault(),n&&(r(!1),e.onSubmit(s),setTimeout(()=>r(!0),3e3))};return(0,o.useEffect)(()=>{if(i){var e;null==i||null===(e=i.current)||void 0===e||e.focus()}}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"font-serif text-peach text-4xl uppercase",children:"Suite Access"}),(0,a.jsxs)("div",{className:"text-periwinkle font-sans text-sm uppercase",children:[(0,a.jsx)("p",{children:"Site: LV-8-XXXI"}),(0,a.jsx)("p",{children:"Access level Beta required"}),(0,a.jsx)("p",{children:"Decontaminate before entry"})]}),(0,a.jsxs)("form",{className:"flex flex-col gap-4",children:[(0,a.jsx)("input",{type:"password",disabled:!n,ref:i,onChange:e=>t(e.target.value),placeholder:"Your password",className:"bg-transparent border-0 border-b-2 border-b-peach focus:border-b-citron !outline-none font-sans pb-1"}),(0,a.jsx)("input",{type:"submit",disabled:!n,value:"",onClick:e=>l(e)}),n?null:(0,a.jsx)(u.ZP,{})]})]})}function b(e){let[s,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[i,l]=(0,o.useState)(!1),c=t=>{t.preventDefault(),s&&n&&!i&&e.onSubmit(s,n)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"font-serif text-peach text-4xl",children:"Register"}),(0,a.jsxs)("div",{className:"text-periwinkle font-sans text-sm uppercase",children:[(0,a.jsx)("p",{children:"Access level confirmed"}),(0,a.jsx)("p",{children:"Decontamination successful"})]}),(0,a.jsx)("p",{className:"font-serif",children:"Welcome, esteemed Board member. You are known to us. Please select a username and password to access suite controls."}),(0,a.jsxs)("form",{className:"flex flex-col gap-4",children:[i?(0,a.jsx)("b",{children:"Invalid character in password (:)"}):"",(0,a.jsx)("input",{placeholder:"Username",onChange:e=>{t(e.target.value)},className:"bg-transparent border-0 border-b-2 border-b-peach focus:border-b-citron !outline-none font-sans pb-1"}),(0,a.jsx)("input",{type:"password",placeholder:"Password",onChange:e=>{let s=e.target.value;if(r(s),-1!==s.indexOf(":")){l(!0);return}l(!1)},className:"bg-transparent border-0 border-b-2 border-b-peach focus:border-b-citron !outline-none font-sans pb-1"}),(0,a.jsx)("input",{type:"submit",value:"",onClick:e=>c(e)})]})]})}function j(e){let s=null;return s=e.loading?(0,a.jsx)(u.ZP,{color:"currentColor",size:"sm"}):"Demand Access",(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"text-periwinkle font-sans text-sm uppercase",children:[(0,a.jsx)("h1",{className:"font-serif text-peach text-4xl uppercase",children:"Information"}),(0,a.jsxs)("p",{children:["Username: ",e.userInfo.username]}),(0,a.jsxs)("p",{children:["Status: ",e.userInfo.banned?"banned":"active"]}),!e.userInfo.banned&&(0,a.jsxs)("p",{className:"text-citron",children:["Party: ",(0,a.jsx)("br",{}),e.partyInfo]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("h1",{className:"font-serif text-peach text-4xl uppercase",children:"Doorbell"}),(0,a.jsx)("p",{className:"font-serif",children:"Press the button below when you have arrived. You and one guest will be admitted."}),(0,a.jsx)(p.ZP,{size:"lg",className:"!bg-periwinkle rounded-full font-sans uppercase",disabled:!!e.disabled||!!e.userInfo.banned,onPress:e.onSubmit,children:s})]})]})}c.vI.add(d.qmU),c.vI.add(d.bE7),c.vI.add(d.qmU),c.vI.add(d.bE7);let w="https://7mg5vpebc4.execute-api.us-west-2.amazonaws.com";function N(){let[e,s]=(0,o.useState)(""),[t,n]=(0,o.useState)(!1),[i,c]=(0,o.useState)(!1),[d,u]=(0,o.useState)(""),[h,x]=(0,o.useState)(null),[p,m]=(0,o.useState)(!1),[N,y]=(0,o.useState)(!1),[v,S]=(0,o.useState)(""),[P,C]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let s=async()=>{let s=new URL(document.location.href).searchParams.get("id");if(""===d&&s&&u(s),t||i)return;let a=new Headers;a.append("Authorization","Basic "+(0,r.encode)(d+":"+e));let l=await fetch(w+"/user/"+d,{method:"GET",headers:a});switch(l.status){case 204:c(!0);break;case 200:await x(await l.json()),await n(!0),setInterval(k,2e3),setInterval(Z,2e3)}};s()});let k=async()=>{let s=new Headers;s.append("Authorization","Basic "+(0,r.encode)(d+":"+e));let t=await fetch(w+"/announce/party",{method:"GET",headers:s});if(200!==t.status){console.log("Something went wrong fetching party details");return}let a=await t.json();await S(a.text)},Z=async()=>{let s=new Headers;s.append("Authorization","Basic "+(0,r.encode)(d+":"+e));let t=await fetch(w+"/announce/bell",{method:"GET",headers:s});if(200!==t.status){console.log("Something went wrong fetching bell enabled details");return}let a=await t.json();await C("Y"===a.text)},A=async(e,s)=>{let t=new Headers,a=await fetch(w+"/user/"+d,{method:"POST",headers:t,body:JSON.stringify({username:e,password:s})});if(200!==a.status){console.log("something went wrong"),console.log(await a.json());return}c(!1)},I=async()=>{m(!0);let s=new Headers;s.append("Authorization","Basic "+(0,r.encode)(d+":"+e)),await fetch(w+"/ring",{method:"POST",headers:s}),m(!1),y(!0),setTimeout(()=>{y(!1)},3e4)};return(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-gray-dark text-white",children:[(0,a.jsxs)("header",{className:"flex",children:[(0,a.jsx)("aside",{className:"hidden sm:flex bg-periwinkle h-[136.5px] flex-grow",children:"\xa0"}),(0,a.jsx)("div",{className:"max-w-prose",children:(0,a.jsx)(l(),{src:"/images/dic-header-periwinkle.svg",width:"700",height:"200",className:"w-full",alt:"DiC Logo"})}),(0,a.jsx)("aside",{className:"hidden sm:flex bg-periwinkle h-[76px] flex-grow",children:"\xa0"})]}),(0,a.jsxs)("main",{className:"flex flex-col flex-grow justify-center mx-auto p-12 gap-6 max-w-prose",children:[!t&&!i&&(0,a.jsx)(g,{onSubmit:e=>{s(e)}}),t&&(0,a.jsxs)("div",{className:"flex flex-col gap-20",children:[(0,a.jsx)(j,{loading:p,disabled:N||!P,userInfo:h,onSubmit:I,partyInfo:v}),(0,a.jsx)(f,{userInfo:h,uid:d,password:e,partyTime:P})]}),i&&(0,a.jsx)(b,{onSubmit:A})]}),(0,a.jsx)("footer",{className:"bg-periwinkle text-right text-white/60 text-xs font-sans uppercase py-2 px-7 mt-auto",children:(0,a.jsxs)("div",{className:"max-w-prose mx-auto",children:[(0,a.jsx)("p",{children:"DEFCON is cancelled"}),(0,a.jsx)("p",{children:"All's right with the world"})]})})]})}(0,n.jG)({type:"dark",theme:{colors:{primary:"#686EA0"},space:{},fonts:{sans:"highway-gothic, sans-serif"}}})}},function(e){e.O(0,[957,606,253,769,744],function(){return e(e.s=864)}),_N_E=e.O()}]);