(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9939],{83542:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return a(90398)}])},90398:function(e,t,a){"use strict";a.r(t),a.d(t,{GoProPromo:function(){return U},SubscriptionComponent:function(){return C},default:function(){return E},tiers:function(){return T}});var r=a(85893),i=a(67294),n=a(95062),s=a(81492),l=a(4886),o=a(94991),c=a(2962),d=a(11163),m=a(69998),u=a(16841),f=a(20084),x=a(16605),p=a(41664),h=a.n(p),g=a(73047),v=a(13742),b=a(4819),y=a(25675),j=a.n(y),w=a(5993),N=a(64487),P=a(9669),_=a.n(P);let k=()=>{let e=(0,d.useRouter)(),t=e.asPath;return(0,i.useEffect)(()=>{(0,f.L9)(x._.pricingPageViewed,{referrerURL:t})}),(0,r.jsxs)(n.Z,{noSearchBar:!0,children:[(0,r.jsx)(c.PB,{title:"Pricing | Prompt Hunt - Your home for exploring, creating, and sharing AI art",description:"Create, explore, and share AI art using Stable Diffusion, DALL\xb7E, and Midjourney"}),(0,r.jsxs)(w.Z,{maxWidth:!0,children:[(0,r.jsx)("div",{className:"flex w-full justify-center overflow-clip -mt-6",children:(0,r.jsx)("div",{className:"w-full md:w-[100%] min-w-[250%] md:min-w-full h-auto overflow-clip relative mb-6 -mt-24 md:-mt-0",children:(0,r.jsx)(j(),{src:"https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/1eb32a19-0cdd-4c15-4df4-c34493fc5a00/full",alt:"Grid of creations",className:"w-full",width:"2048",height:"669"})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start p-0 gap-0 grow max-w-[1280px]",children:[(0,r.jsx)(U,{tier:T[0]}),(0,r.jsx)("div",{className:"w-full mb-6",children:(0,r.jsx)("h2",{id:"plans-section",className:"text-2xl font-bold tracking-tight",children:"Pricing plans"})}),(0,r.jsx)("div",{className:"isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:T.map(e=>(0,r.jsx)(C,{tier:e},e.id))})]}),(0,r.jsxs)("div",{className:"text-center items-center justify-center flex flex-col my-10",children:[(0,r.jsx)("div",{className:"bg-border w-20 h-[1px] my-10"}),(0,r.jsx)("h2",{className:"scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2",children:"Discover the full power of Prompt Hunt"}),(0,r.jsx)("div",{children:(0,r.jsx)(h(),{href:"/marketing",children:(0,r.jsx)(b.z,{variant:"default",size:"sm",children:"Learn more"})})})]})]})]})};var E=k;let C=e=>{let{tier:t}=e,a=(0,d.useRouter)(),{subscriptionPlan:n,isLoggedIn:c}=(0,o.kP)(),[m,p]=i.useState(!1),{setIsLogInModalOpen:h}=(0,u.l9)(),y=(null==n?void 0:n.id)||"free",j="free"!==y,w=i.useMemo(()=>y===t.id,[t.id,y]),P=i.useMemo(()=>{let e=T.findIndex(e=>e.id===t.id),a=T.findIndex(e=>e.id===y);return e<a},[t.id,y]),k=async()=>{let e=a.asPath;if((0,f.L9)(x._.buttonToStripeClicked,{referrerURL:e}),p(!0),c||(h(!0),p(!1)),w)return a.push("/create");try{let{url:r}=await (0,s.G)(t.id);a.push(r)}catch(i){(0,N.Tb)(i),(0,N.uT)("Error subscribing to tier ".concat(t.id,": ").concat(function(e,t){if(_().isAxiosError(e)){var a,r,i,n,s,l;return(null===(a=e.response)||void 0===a?void 0:a.data)&&"object"==typeof e.response.data&&(null==e?void 0:null===(i=e.response)||void 0===i?void 0:i.data)&&"message"in(null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.data)&&"string"==typeof(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(l=s.data)||void 0===l?void 0:l.message)?e.response.data.message:(null===(r=e.response)||void 0===r?void 0:r.statusText)||t}return e instanceof Error?null==e?void 0:e.message:t}(i,"Unknown error")))}finally{p(!1)}},E=t.trial&&!j;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,g.cn)(t.mostPopular?"dark:bg-blue-500/10 bg-blue-50/50 ring-2 ring-accent":"ring-1 ring-border","rounded-3xl p-8 xl:p-10"),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between gap-x-4",children:[(0,r.jsx)("h3",{id:t.id,className:"text-lg font-semibold leading-8 text-foreground",children:t.name}),t.mostPopular?(0,r.jsx)("p",{className:"rounded-full bg-accent px-2.5 py-1 text-xs font-semibold leading-5 text-accent-foreground",children:"Most popular"}):null]}),(0,r.jsxs)("p",{className:"mt-0 flex items-baseline gap-x-1 mb-6",children:[(0,r.jsx)("span",{className:"text-4xl font-bold tracking-tight text-foreground",children:t.priceMonthly}),(0,r.jsx)("span",{className:"text-sm font-semibold leading-6 text-muted-foreground",children:"/ mo"})]}),(0,r.jsxs)(b.z,{disabled:w,className:"w-full mt-auto",size:"lg",variant:w||P?"outline":t.mostPopular&&!j?"accent":!j||w||P?"secondary":"accent",onClick:k,children:[w?"Your current plan":P?"Downgrade":j?"Upgrade":t.trial?"Try for free":"Purchase",m&&(0,r.jsx)(l.Z,{name:"loadingSpinner",className:"animate-spin",size:24})]}),E?(0,r.jsxs)("div",{className:"mt-1 text-xl leading-7 font-normal text-muted-foreground",children:["$",t.priceMonthly," / month"]}):null,(0,r.jsx)("ul",{role:"list",className:"mt-8 space-y-3 text-sm leading-6 xl:mt-10",children:t.features.map(e=>(0,r.jsxs)("li",{className:"flex gap-x-3",children:[(0,r.jsx)(v.Z,{className:"h-6 w-5 flex-none text-foreground","aria-hidden":"true"}),e]},e))})]},t.id)})},D=m.X.essential_499.stableDiffusion.creditsPerDay,L=m.X.pro_2.stableDiffusion.creditsPerDay,M=m.X.pro_2.dallE.creditsPerMonth,X=m.X.pro_plus.stableDiffusion.creditsPerDay,S=m.X.pro_plus.dallE.creditsPerMonth,A=m.X.pro_2.stableDiffusionXL.creditsPerMonth,z=m.X.pro_plus.stableDiffusionXL.creditsPerMonth,T=[{id:"essential_499",name:"Essential",href:"#",priceMonthly:"4.99",trial:!1,mostPopular:!1,features:["".concat(D," images / day"),"Privacy mode will help you perfect your creation before sharing","Upscale and create variations of your art and much more","Create four images at once","Cancel anytime"]},{id:"pro_2",name:"Pro",href:"#",priceMonthly:"9.99",mostPopular:!0,features:["".concat(L," images / day"),"".concat(M," DALL\xb7E images / mo"),"".concat(A," SDXL images / mo"),"Privacy mode will help you perfect your creation before sharing","Upscale and create variations of your art and much more","Create four images at once","Cancel anytime"]},{id:"pro_plus",name:"Pro+",href:"#",priceMonthly:"14.99",trial:!1,mostPopular:!1,features:["".concat(X," images / day"),"".concat(S," DALL\xb7E images / mo"),"".concat(z," SDXL images / mo"),"Privacy mode will help you perfect your creation before sharing","Upscale and create variations of your art and much more","Create four images at once","Cancel anytime"]}],U=e=>{let{tier:t}=e,a=(0,d.useRouter)(),{subscriptionPlan:n,isLoggedIn:c}=(0,o.kP)(),[m,p]=i.useState(!1),{setIsLogInModalOpen:g}=(0,u.l9)(),v=(null==n?void 0:n.id)||"free",y=()=>{(0,f.L9)(x._.viewAllPlansClicked)},w=i.useMemo(()=>v===t.id,[t.id,v]),N=async()=>{let e=a.asPath;if((0,f.L9)(x._.buttonToStripeClicked,{tier:t.name,referrerURL:e}),p(!0),!c)return g(!0);if(w)return a.push("/create");let{url:r}=await (0,s.G)(t.id);a.push(r),p(!1)};return(0,r.jsx)(r.Fragment,{children:w?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-col md:items-center mx-auto w-full mb-16",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold tracking-tight md:text-7xl pb-2 mb-4 md:text-center bg-gradient-to-tr from-indigo-600 via-purple-400 to-pink-400 dark:from-[#F8F1EA] dark:via-[#D39EE5] dark:to-[#D1F7FE] text-transparent bg-clip-text leading-none",children:"Unlock your creative power."}),(0,r.jsxs)("div",{className:"md:text-2xl font-medium leading-6 space-y-4 md:text-center",children:[(0,r.jsx)("p",{className:"",children:"Take part in the AI art movement and bring your creations to new heights."}),(0,r.jsxs)("p",{className:"",children:["Starting at only $",t.priceMonthly,". Cancel anytime."]})]}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full",children:[(0,r.jsx)(b.z,{disabled:w,className:"w-full md:w-40",size:"lg",variant:"accent",onClick:N,children:m?(0,r.jsx)(l.Z,{name:"loadingSpinner",className:"animate-spin",size:24}):"Upgrade now"}),(0,r.jsx)(h(),{href:"#plans-section",passHref:!0,className:"w-full md:w-fit",children:(0,r.jsx)(b.z,{variant:"outline",size:"lg",className:"w-full md:w-fit",onClick:y,children:"View all plans"})})]})]}),(0,r.jsx)(j(),{src:"https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/c3d5a2ce-ff46-4f2d-25fc-b8c1640d3700/full",alt:"",width:2048,height:1821,className:"mb-16"})]})})}}},function(e){e.O(0,[2962,9669,9774,2888,179],function(){return e(e.s=83542)}),_N_E=e.O()}]);
//# sourceMappingURL=pricing-4bd19bb2d6a90304.js.map