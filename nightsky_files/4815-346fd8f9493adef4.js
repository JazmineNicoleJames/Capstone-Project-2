(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4815],{55300:function(e,t,s){"use strict";s.d(t,{F:function(){return B}});var n=s(85893),r=s(67294),l=s(94991),a=s(36492),i=s(99461),o=s(41664),c=s.n(o),d=s(6799),m=s(12459),u=s(86010),f=s(65820),h=s(63387);let x=e=>{let t=new URL(e);return("prompthunt.com"===t.hostname||"localhost"===t.hostname)&&t.pathname.startsWith("/prompt")?t.pathname.replace("/prompt/",""):null},p=e=>{let t=new URL(e);return("prompthunt.com"===t.hostname||"localhost"===t.hostname)&&t.pathname.startsWith("/theme")?t.pathname.replace("/theme/",""):null};function j(e){let{content:t}=e,[s,l]=r.useState(null),[a,i]=r.useState(null);(0,r.useEffect)(()=>{let e=(0,m.Z)(t),s=Array.from(e).find(e=>p(e)||x(e));s&&x(s)?l({type:"prompt",id:x(s)}):s&&p(s)&&l({type:"theme",id:p(s)})},[t]),(0,r.useEffect)(()=>{s&&fetch("/api/".concat(s.type,"/").concat(s.id)).then(e=>e.json()).then(e=>{"prompt"===s.type?i({title:e.prompts[0].prompt,description:"by ".concat(e.prompts[0].user.username),images:e.prompts[0].assets.map(e=>e.cfUrl||e.src)}):"theme"===s.type&&i({title:e.name,images:e.thumbnails||void 0,description:""})}).catch(e=>{console.log(e)})},[s]);let o=r.useMemo(()=>(null==a?void 0:a.images)||[],[null==a?void 0:a.images]);return null===s?null:(0,n.jsx)(f.M,{children:a&&(0,n.jsx)(h.E.div,{initial:{opacity:0},animate:{opacity:1},children:(0,n.jsx)(c(),{href:"/".concat(s.type,"/").concat(s.id),children:(0,n.jsxs)("div",{className:"w-52 ml-14 rounded-2xl border border-border overflow-hidden mt-1 hover:border-neutral-500 transition-colors relative",children:[(0,n.jsxs)("div",{className:(0,u.Z)("w-52 aspect-square",o.length>1&&"grid grid-cols-2 gap-2"),children:[1===o.length&&(0,n.jsx)("img",{src:o[0],alt:"",className:"w-52 object-cover aspect-square"}),o.length>1&&o.map(e=>(0,n.jsx)("img",{src:e,alt:"",className:"w-52 object-cover aspect-square rounded-md overflow-hidden"},e))]}),(0,n.jsxs)("div",{className:"px-2 py-1",children:[(0,n.jsx)("h6",{className:" text-sm text-muted-foreground whitespace-nowrap text-ellipsis overflow-hidden",children:a.title}),(0,n.jsx)("span",{className:"text-xs text-muted-foreground",children:a.description})]})]})})})})}s(83180);var v=s(31825),g=s(64173),N=s(4819),w=s(39865),b=s(9404),y=s(9328);function C(e){let{isDeletable:t,onDelete:s}=e,[l,a]=r.useState(!1),i=(0,g.a)("(min-width: 768px)");return t?(0,n.jsx)("div",{children:i?(0,n.jsxs)(y.h_,{children:[(0,n.jsx)(y.$F,{asChild:!0,children:(0,n.jsx)(N.z,{variant:"ghost",size:"sm",children:(0,n.jsx)(b.Z,{size:16,className:"text-muted-foreground"})})}),(0,n.jsxs)(y.AW,{children:[(0,n.jsx)(y.Ju,{children:"Actions"}),(0,n.jsx)(y.VD,{}),(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsx)(y.Xi,{onSelect:s,children:"Delete Comment"})})]})]}):(0,n.jsxs)(w.dy,{open:l,onOpenChange:a,children:[(0,n.jsx)(w.Qz,{asChild:!0,children:(0,n.jsx)(N.z,{variant:"ghost",size:"sm",children:(0,n.jsx)(b.Z,{size:16,className:"text-muted-foreground"})})}),(0,n.jsxs)(w.sc,{children:[(0,n.jsx)(w.OX,{}),(0,n.jsxs)(w.ze,{children:[(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsx)(N.z,{onClick:s,variant:"outline",size:"lg",className:"w-full text-left",children:"Delete Comment"})}),(0,n.jsx)(w.uh,{asChild:!0,children:(0,n.jsx)(N.z,{variant:"ghost",children:"Cancel"})})]})]})]})}):null}let F=e=>{var t,s,r,l;let{comment:a,isDeletable:o=!1,onDelete:m,setCommentAreaContent:u}=e,f=(0,v.I)(new Date(a.createdAt));if(!a.user)return null;let h=()=>{a.user&&u("@".concat(a.user.username," "))};return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-2 w-full items-center justify-between",children:[(0,n.jsx)("div",{className:"w-9 pt-1",children:(0,n.jsx)(c(),{href:"/user/".concat(a.user.username),children:(0,n.jsx)(i.Z,{seed:(null!==(l=null===(t=a.user)||void 0===t?void 0:t.id)&&void 0!==l?l:"username").slice(-8),image:a.user.image,width:36,height:36})})}),(0,n.jsxs)("div",{className:"w-full flex",children:[(0,n.jsx)("div",{className:"flex flex-col items-start justify-center p-0 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col justify-between w-full max-w-sm",children:[(0,n.jsx)(c(),{href:"/user/".concat(null===(s=a.user)||void 0===s?void 0:s.username),children:(0,n.jsx)("label",{className:"hover:underline text-sm leading-5 font-semibold cursor-pointer",children:null===(r=a.user)||void 0===r?void 0:r.username})}),(0,n.jsx)(d.Z,{as:"label",className:"text-sm leading-5 wrap-words",options:{formatHref:{mention:e=>"/user".concat(e)},className:"text-accent",mentionClassName:"text-accent"},children:a.content}),(0,n.jsxs)("div",{className:"flex flex-row items-start p-0 gap-3 mt-2",children:[(0,n.jsx)("div",{onClick:h,className:"text-xs leading-4 font-semibold hover:underline hover:cursor-pointer",children:"Reply"}),(0,n.jsx)("div",{className:"text-xs leading-4 font-normal text-muted-foreground",children:f})]})]})}),(0,n.jsx)(C,{isDeletable:o,onDelete:m})]})]}),(0,n.jsx)(j,{content:a.content})]})};var R=s(42397),S=s(87536),k=s(56312),z=s(1604),A=s(77182),E=s(4222),D=s(73047),I=s(99489),P=s(12003);let Z=(0,P.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),M=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)(I.f,{ref:t,className:(0,D.cn)(Z(),s),...r})});M.displayName=I.f.displayName;let L=S.RV,T=r.createContext({}),O=e=>{let{...t}=e;return(0,n.jsx)(T.Provider,{value:{name:t.name},children:(0,n.jsx)(S.Qr,{...t})})},U=()=>{let e=r.useContext(T),t=r.useContext(V),{getFieldState:s,formState:n}=(0,S.Gc)(),l=s(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=t;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...l}},V=r.createContext({}),_=r.forwardRef((e,t)=>{let{className:s,...l}=e,a=r.useId();return(0,n.jsx)(V.Provider,{value:{id:a},children:(0,n.jsx)("div",{ref:t,className:(0,D.cn)("space-y-2",s),...l})})});_.displayName="FormItem";let W=r.forwardRef((e,t)=>{let{className:s,...r}=e,{error:l,formItemId:a}=U();return(0,n.jsx)(M,{ref:t,className:(0,D.cn)(l&&"text-destructive",s),htmlFor:a,...r})});W.displayName="FormLabel";let q=r.forwardRef((e,t)=>{let{...s}=e,{error:r,formItemId:l,formDescriptionId:a,formMessageId:i}=U();return(0,n.jsx)(E.g7,{ref:t,id:l,"aria-describedby":r?"".concat(a," ").concat(i):"".concat(a),"aria-invalid":!!r,...s})});q.displayName="FormControl";let J=r.forwardRef((e,t)=>{let{className:s,...r}=e,{formDescriptionId:l}=U();return(0,n.jsx)("p",{ref:t,id:l,className:(0,D.cn)("text-sm text-muted-foreground",s),...r})});J.displayName="FormDescription";let Y=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e,{error:a,formMessageId:i}=U(),o=a?String(null==a?void 0:a.message):r;return o?(0,n.jsx)("p",{ref:t,id:i,className:(0,D.cn)("text-sm font-medium text-destructive",s),...l,children:o}):null});Y.displayName="FormMessage";var H=s(36140),Q=s(93181);let X=z.z.object({content:z.z.string().min(1,{message:"Comment cannot be empty."})});function $(e){let{parentId:t,type:s,onCommentAdded:l}=e,a=(0,S.cI)({resolver:(0,k.F)(X),defaultValues:{content:""}}),[i,o]=(0,r.useState)(!1),c=(0,r.useRef)(null);return(0,n.jsx)(L,{...a,children:(0,n.jsxs)("form",{ref:c,onSubmit:a.handleSubmit(function(e){o(!0),fetch("/api/".concat(s,"/").concat(t,"/comment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{l(e),a.reset(),(0,A.Am)({title:"Comment added successfully",description:"Your comment has been added."}),o(!1)}).catch(e=>{(0,A.Am)({title:"Failed to add comment",description:e.message||"Please try again later."}),o(!1)})}),className:"space-y-4 group",children:[(0,n.jsx)(O,{control:a.control,name:"content",render:e=>{let{field:t}=e;return(0,n.jsxs)(_,{children:[(0,n.jsx)(q,{children:(0,n.jsx)(H.I,{placeholder:"Add a comment",...t,autoComplete:"off"})}),(0,n.jsx)(Y,{})]})}}),(0,n.jsx)("div",{className:(0,D.cn)("flex justify-end h-fit space-x-2 group-focus-within:flex",i?"flex":""),children:(0,n.jsx)(N.z,{type:"submit",disabled:i,variant:"accent",children:i?(0,n.jsx)(Q.frZ,{className:"animate-spin"}):"Comment"})})]})})}var G=s(84849);let B=e=>{let{parentId:t,type:s="prompt",parentUserId:i}=e,{user:o}=(0,l.kP)(),{data:d,isLoading:m}=(0,a.a)(["comments",t]),[u,f]=(0,r.useState)([]);(0,r.useEffect)(()=>{d&&f(d)},[d]);let h=e=>{f(t=>[...t,{...e,user:{id:(null==o?void 0:o.id)||"",username:(null==o?void 0:o.username)||"Anonymous",image:(null==o?void 0:o.image)||""}}])},[x,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{d&&f(d)},[d]);let j=()=>{p(!x)},v=async e=>{f(t=>t.filter(t=>t.id!==e));try{let n=await fetch("/api/".concat(s,"/").concat(t,"/comment/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});if(!n.ok)throw Error("Failed to delete the comment");(0,A.Am)({title:"Comment deleted successfully",description:"The comment has been successfully deleted."})}catch(l){console.error("Error deleting comment:",l),f(u);let r=l instanceof Error?l.message:"An unexpected error occurred";(0,A.Am)({title:"Failed to delete comment",description:r})}};return(0,n.jsx)("div",{className:"flex flex-col gap-y-4 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-y-4 w-full",children:[(0,n.jsxs)("label",{className:"text-foreground/50 text-[10px] font-small uppercase tracking-widest flex mb-1",children:["Comments (",u.length,")"]}),u.length>3&&(0,n.jsx)(N.z,{onClick:j,className:"w-fit px-0",variant:"link",children:x?"Show less comments":"Show more comments"}),(0,n.jsx)("div",{className:"flex flex-col gap-5 w-full mb-4",children:m?(0,n.jsx)(G.Z,{circle:!0,height:40,width:40}):(x?u:u.slice(0,3)).map(e=>{var t;return(0,n.jsx)(F,{comment:e,isDeletable:"new"!==e.id&&((null==o?void 0:o.isAdmin)||(null===(t=e.user)||void 0===t?void 0:t.id)===(null==o?void 0:o.id)||i===(null==o?void 0:o.id)),onDelete:()=>v(e.id),setCommentAreaContent:()=>{}},e.id)})}),(0,n.jsx)("div",{children:o?(0,n.jsx)($,{parentId:t,type:s,onCommentAdded:h}):(0,n.jsx)(R.Zb,{children:(0,n.jsxs)(R.aY,{className:"pt-6 w-full text-center text-sm",children:[(0,n.jsx)(c(),{href:"/login",className:"underline text-accent",children:"Join the community"})," ","to comment. Already a member?"," ",(0,n.jsx)(c(),{href:"/login",className:"underline text-accent",children:"Log in"}),"."]})})})]})})}},76445:function(e,t,s){"use strict";s.d(t,{$:function(){return i}});var n=s(85893),r=s(67294),l=s(96486),a=s(4886);let i=e=>{let{meta:t,provider:s}=e,i=r.useMemo(()=>s?s.name:"",[s]),o=r.useMemo(()=>{if("Stable Diffusion"===i){let e=(0,l.get)(t,"model",void 0);if("None"!==e)return"Megamodel v2"===e?"PhChroma":"PhChroma2"===e?"PhChroma 2":"PhChroma3"===e?"PhChroma 3":e}},[t,i]),c=r.useMemo(()=>{if("Stable Diffusion"===i){let e=(0,l.get)(t,"engine",void 0);if(e){switch(e){case"stable-diffusion-v1":return"1.0";case"stable-diffusion-v1-5":return"1.5";case"stable-diffusion-512-v2-0":return"2.0";case"stable-diffusion-768-v2-0":return"2.0 - 768";case"stable-diffusion-512-v2-1":return"2.1";case"stable-diffusion-768-v2-1":return"2.1 - 768"}return}}},[t,i]),d=r.useMemo(()=>{let e=(0,l.get)(t,"isUpscaled",!1);return e?"Upscaled \xb7 ":void 0},[t]),m=r.useMemo(()=>{let e=(0,l.get)(t,"isVariation",!1);return e?"Variations \xb7 ":void 0},[t]);return(0,n.jsxs)(n.Fragment,{children:[d,m,(null==o?void 0:o.includes("PhChroma"))?null:i,(null==o?void 0:o.includes("PhChroma"))?null:c?" "+c+" \xb7 ":"",o||"","Midjourney"===i&&(0,n.jsx)(a.Z,{name:"lockLocked",size:16,className:"inline"})]})}},42397:function(e,t,s){"use strict";s.d(t,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return a},aY:function(){return d},eW:function(){return m},ll:function(){return o}});var n=s(85893),r=s(67294),l=s(73047);let a=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});a.displayName="Card";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",s),...r})});i.displayName="CardHeader";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})});o.displayName="CardTitle";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",s),...r})});c.displayName="CardDescription";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",s),...r})});d.displayName="CardContent";let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",s),...r})});m.displayName="CardFooter"},48233:function(e,t,s){"use strict";s.d(t,{d:function(){return i}});var n=s(69572),r=s(16841),l=s(11163),a=s(67294);let i=()=>{let e=(0,l.useRouter)(),{setIsLogInModalOpen:t}=(0,r.l9)(),{isLoggedIn:s}=(0,n.k)();return a.useCallback(n=>{if(!s){t(!0);return}e.push("/create?themeId=".concat(n))},[s,e,t])}},31825:function(e,t,s){"use strict";s.d(t,{I:function(){return l}});var n=s(67294),r=s(69031);let l=e=>{let[t,s]=(0,n.useState)("");return(0,n.useEffect)(()=>{s((0,r.p)(e));let t=setInterval(()=>{s((0,r.p)(e))},6e4);return()=>clearInterval(t)},[e]),t}},41538:function(){}}]);
//# sourceMappingURL=4815-346fd8f9493adef4.js.map