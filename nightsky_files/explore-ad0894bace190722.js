(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6544],{66117:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return a(22441)}])},27243:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(85893),r=a(72510),l=a(4819),s=a(73047),i=a(11163);function d(e){let{items:t,onItemSelected:a,selectedCategory:d}=e,o=(0,i.useRouter)(),u=e=>{e.href?o.push(e.href):a(e.query)};return(0,n.jsxs)("div",{className:"relative w-full flex items-center gap-2",children:[(0,n.jsx)("div",{className:"right-0 top-0 bottom-0 h-full w-10 bg-gradient-to-l from-background to-background/0 z-20 absolute md:hidden"}),(0,n.jsx)("div",{className:"flex w-full overflow-x-auto whitespace-nowrap justify-start md:justify-center py-4 gap-3",children:(0,n.jsx)(r.v,{children:t.map(e=>(0,n.jsx)(r.v.Item,{children:t=>{let{active:a}=t;return(0,n.jsx)(l.z,{variant:"ghost",size:"sm",className:(0,s.cn)(e.query===d||a?"ring-inset ring-[1px] ring-blue-500 !bg-blue-500/30":"","text-xs rounded-full font-semibold px-4"),onClick:()=>u(e),children:e.name})}},e.name))})})]})}},14965:function(e,t,a){"use strict";a.d(t,{w:function(){return i}});var n=a(85893),r=a(55559),l=a(37811),s=a(11163);let i=e=>{let{source:t}=e,a=(0,s.useRouter)(),i=a.query.promptInModalId;return(0,n.jsx)(r.Z,{showCloseButton:!0,isOpen:!!i,handleClose:()=>a.push(t,void 0,{scroll:!1}),dialogPanelClassName:"max-w-[1440px] lg:mt-[5vh]",children:i&&(0,n.jsx)(l.default,{isModal:!0,promptId:i})})}},54564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,a(92648).Z)(a(67294));var n=a(92983)},37645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=s.default,r={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=n({},r,e)),r=n({},r,t);let l=r.loader,i=()=>l().then(d);if(r.loadableGenerated&&delete(r=n({},r,r.loadableGenerated,{loader:i})).loadableGenerated,"boolean"==typeof r.ssr){if(!r.ssr)return delete r.ssr,o(i,r);delete r.ssr}return a(r)},t.noSSR=o;var n=a(6495).Z,r=a(92648).Z,l=(0,a(91598).Z)(a(67294)),s=r(a(14588)),i=r(a(54564));function d(e){return{default:e.default||e}}function o(e,t){delete t.webpack,delete t.modules;let a=l.lazy(e),n=t.loading,r=l.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>l.default.createElement(l.Suspense,{fallback:r},l.default.createElement(i.default,null,l.default.createElement(a,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,a(92648).Z)(a(67294));let r=n.default.createContext(null);t.LoadableContext=r},14588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(6495).Z,r=(0,a(92648).Z)(a(67294)),l=a(33644);let s=[],i=[],d=!1;function o(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);a.lazy=r.default.lazy(a.loader);let n=null;function s(){if(!n){let t=new u(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!d){let o=a.webpack?a.webpack():a.modules;o&&i.push(e=>{for(let t of o)if(-1!==e.indexOf(t))return s()})}function c(e){!function(){s();let e=r.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let t=r.default.createElement(a.loading,{isLoading:!0,pastDelay:!0,error:null});return r.default.createElement(r.default.Suspense,{fallback:t},r.default.createElement(a.lazy,e))}return c.preload=()=>s(),c.displayName="LoadableComponent",c}(o,e)}function p(e,t){let a=[];for(;e.length;){let n=e.pop();a.push(n(t))}return Promise.all(a).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(s).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(d=!0,t());p(i,e).then(a,a)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},22441:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return P},default:function(){return z}});var n=a(85893),r=a(67294),l=a(27243),s=a(14965),i=a(2962),d=a(95062),o=a(77378),u=a(41664),c=a.n(u),p=a(11163),h=a(94991),m=a(9328),f=a(89833),x=a(4819),g=a(5152),b=a.n(g),_=a(64487),y=a(19985),j=a(12343);a(8679);var v={componentStack:null,error:null,eventId:null};class w extends r.Component{constructor(...e){super(...e),w.prototype.__init.call(this),w.prototype.__init2.call(this)}__init(){this.state=v}componentDidCatch(e,{componentStack:t}){let{beforeCapture:a,onError:n,showDialog:l,dialogOptions:s}=this.props;(0,_.$e)(i=>{if(null!==(d=r.version.match(/^([^.]+)/))&&parseInt(d[0])>=17){var d,o=Error(e.message);o.name=`React ErrorBoundary ${o.name}`,o.stack=t,e.cause=o}a&&a(i,e,t);var u=(0,_.Tb)(e,{contexts:{react:{componentStack:t}}});n&&n(e,t,u),l&&(0,y.jp)({...s,eventId:u}),this.setState({error:e,componentStack:t,eventId:u})})}componentDidMount(){let{onMount:e}=this.props;e&&e()}componentWillUnmount(){let{error:e,componentStack:t,eventId:a}=this.state,{onUnmount:n}=this.props;n&&n(e,t,a)}__init2(){this.resetErrorBoundary=()=>{let{onReset:e}=this.props,{error:t,componentStack:a,eventId:n}=this.state;e&&e(t,a,n),this.setState(v)}}render(){let{fallback:e,children:t}=this.props,{error:a,componentStack:n,eventId:l}=this.state;if(a){let s;return(s="function"==typeof e?e({error:a,componentStack:n,resetError:this.resetErrorBoundary,eventId:l}):e,r.isValidElement(s))?s:(e&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&j.kg.warn("fallback did not produce a valid ReactElement"),null)}return"function"==typeof t?t():t}}var N=a(39865),k=a(73047),E=a(13742);let C=b()(()=>Promise.all([a.e(2977),a.e(5326)]).then(a.bind(a,95326)),{loadableGenerated:{webpack:()=>[95326]},ssr:!1}),S=[{name:"Explore All",query:""},{name:"Photography",query:"photography"},{name:"Illustration",query:"vector illustration"},{name:"3D",query:"pixar"},{name:"Logos",query:"logo design"},{name:"Anime",query:"anime, anime style"},{name:"Cinematic",query:"cinematic"},{name:"Pixel Art",query:"pixel art"}],O=[{backgroundImage:"\n      radial-gradient(at 90% 85%, hsla(248,88%,68%,1) 0px, transparent 50%),\n      radial-gradient(at 46% 37%, hsla(324,68%,66%,1) 0px, transparent 50%),\n      radial-gradient(at 60% 92%, hsla(291,75%,61%,1) 0px, transparent 50%),\n      radial-gradient(at 1% 68%, hsla(207,82%,66%,1) 0px, transparent 50%),\n      radial-gradient(at 7% 77%, hsla(218,77%,66%,1) 0px, transparent 50%),\n      radial-gradient(at 75% 60%, hsla(179,99%,71%,1) 0px, transparent 50%),\n      radial-gradient(at 90% 89%, hsla(204,65%,70%,1) 0px, transparent 50%)\n    "},{backgroundImage:"\n      radial-gradient(at 68% 52%, hsla(188,93%,63%,1) 0px, transparent 50%),\n      radial-gradient(at 72% 73%, hsla(199,68%,79%,1) 0px, transparent 50%),\n      radial-gradient(at 26% 12%, hsla(62,89%,74%,1) 0px, transparent 50%),\n      radial-gradient(at 38% 27%, hsla(175,86%,78%,1) 0px, transparent 50%),\n      radial-gradient(at 86% 73%, hsla(303,84%,63%,1) 0px, transparent 50%),\n      radial-gradient(at 86% 80%, hsla(335,97%,78%,1) 0px, transparent 50%),\n      radial-gradient(at 22% 62%, hsla(0,67%,74%,1) 0px, transparent 50%)\n    "},{backgroundImage:"\n      radial-gradient(at 45% 29%, hsla(143,75%,79%,1) 0px, transparent 50%),\n      radial-gradient(at 37% 56%, hsla(318,93%,67%,1) 0px, transparent 50%),\n      radial-gradient(at 82% 79%, hsla(3,88%,78%,1) 0px, transparent 50%),\n      radial-gradient(at 54% 91%, hsla(139,78%,60%,1) 0px, transparent 50%),\n      radial-gradient(at 49% 8%, hsla(37,97%,63%,1) 0px, transparent 50%),\n      radial-gradient(at 25% 10%, hsla(36,82%,72%,1) 0px, transparent 50%),\n      radial-gradient(at 78% 50%, hsla(41,99%,78%,1) 0px, transparent 50%)\n    "},{backgroundImage:"\n      radial-gradient(at 20% 93%, hsla(4,67%,65%,1) 0px, transparent 50%),\n      radial-gradient(at 30% 13%, hsla(48,78%,76%,1) 0px, transparent 50%),\n      radial-gradient(at 12% 22%, hsla(155,68%,67%,1) 0px, transparent 50%),\n      radial-gradient(at 70% 15%, hsla(10,86%,60%,1) 0px, transparent 50%),\n      radial-gradient(at 79% 43%, hsla(25,87%,72%,1) 0px, transparent 50%),\n      radial-gradient(at 37% 21%, hsla(323,94%,70%,1) 0px, transparent 50%),\n      radial-gradient(at 23% 83%, hsla(247,76%,76%,1) 0px, transparent 50%)\n    "}];var P=!0;function z(){var e,t;let{user:a}=(0,h.kP)(),u=(0,p.useRouter)(),[g,b]=(0,r.useState)(""),[,_]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1),v=(0,h.ac)("(min-width: 768px)"),P=O[Math.floor(Math.random()*O.length)];(0,r.useEffect)(()=>{_(!0)},[]);let z=e=>{b(e),u.push("/explore".concat(e?"?query=".concat(e):""),void 0,{shallow:!0})},I=r.useMemo(()=>{let e=[{id:"popular",name:"Popular"},{id:"recent",name:"Recent"}];return(null==a?void 0:a.isAdmin)&&e.push({id:"admin",name:"Admin"}),e},[null==a?void 0:a.isAdmin]),D=r.useMemo(()=>{let e=u.query.order;return I.map(e=>e.id).includes(e)?e:"popular"},[u.query.order,I]),A=e=>{u.push("/explore?order=".concat(e),void 0,{shallow:!0})};return(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(i.PB,{title:"Home | Prompt Hunt - Your home for exploring, creating, and sharing AI art",description:"Create, explore, and share AI art using Stable Diffusion, DALL\xb7E, and Midjourney"}),(0,n.jsx)("div",{className:"absolute inset-0 top-0 left-0 right-0 -z-10 opacity-100 bg-gradient-to-t from-background via-background to-transparent"}),(0,n.jsx)("div",{className:"absolute inset-0 top-0 left-0 right-0 -z-20 opacity-70",style:{backgroundImage:P.backgroundImage}}),(0,n.jsxs)("div",{className:"md:px-16",children:[(0,n.jsxs)("div",{className:"mb-6 md:py-6 flex flex-col items-center justify-center text-center",children:[(0,n.jsx)("p",{className:"hidden md:block font-bold leading-normal text-4xl md:text-6xl w-full text-center md:leading-tight",children:"Discover AI prompts"}),(0,n.jsx)("p",{className:"text-center md:hidden font-bold text-4xl md:text-6xl w-full leading-tight mb-2",children:"Discover AI prompts"}),(0,n.jsx)("p",{className:"text-center font-medium text-base md:text-xl leading-relaxed w-full mb-4",children:"Millions of creations by our community"}),(0,n.jsx)(c(),{href:"/themes",passHref:!0,children:(0,n.jsx)(x.z,{children:"Browse templates"})})]}),(0,n.jsx)(w,{fallback:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,n.jsx)("p",{className:"text-center font-medium text-base md:text-xl leading-relaxed w-full mb-4",children:"Something went wrong while loading the featured users"}),(0,n.jsx)("p",{className:"text-center font-medium text-base md:text-xl leading-relaxed w-full mb-4",children:"Please try again later"})]}),children:(0,n.jsx)(C,{})})]}),(0,n.jsxs)("div",{className:"relative mb-2 justify-between flex flex-col gap-4 md:flex-row items-center",children:[(0,n.jsx)("div",{className:"flex w-full md:w-40 md:flex-none",children:v?(0,n.jsxs)(m.h_,{open:y,onOpenChange:j,children:[(0,n.jsx)(m.$F,{className:"w-full md:w-fit",asChild:!0,children:(0,n.jsxs)(x.z,{variant:"outline",size:"sm",className:"relative left-0 top-0 bottom-0 w-full lg:w-32 !justify-between",children:[D&&(null===(e=I.find(e=>e.id===D))||void 0===e?void 0:e.name),(0,n.jsx)(f.qhg,{className:"ml-2"})]})}),(0,n.jsxs)(m.AW,{align:"start",children:[(0,n.jsx)(m.Ju,{children:"Sort prompts by"}),I.map(e=>(0,n.jsx)(m.Xi,{onClick:()=>A(e.id),className:D===e.id?"bg-foreground/10":"",children:e.name},e.id))]})]}):(0,n.jsxs)(N.dy,{open:y,onOpenChange:j,children:[(0,n.jsx)(N.Qz,{asChild:!0,children:(0,n.jsxs)(x.z,{variant:"outline",size:"sm",className:"relative left-0 top-0 bottom-0 w-full lg:w-32 !justify-between",children:[null!=D&&(null===(t=I.find(e=>e.id===D))||void 0===t?void 0:t.name),(0,n.jsx)(f.qhg,{className:"ml-2"})]})}),(0,n.jsxs)(N.sc,{children:[(0,n.jsx)(N.OX,{className:"text-left",children:(0,n.jsx)(N.iI,{children:"Sort prompts by"})}),(0,n.jsx)("div",{className:"px-4 py-2 space-y-2",children:I.map(e=>(0,n.jsx)(N.uh,{asChild:!0,children:(0,n.jsxs)(x.z,{size:"lg",variant:"secondary",className:(0,k.cn)("w-full gap-3 flex justify-start px-4"),onClick:()=>A(e.id),children:[(0,n.jsx)(E.Z,{size:16,className:(0,k.cn)("mr-2 opacity-0",{"opacity-100":D===e.id})}),e.name]})},e.id))}),(0,n.jsx)(N.ze,{className:"pt-2",children:(0,n.jsx)(N.uh,{asChild:!0,children:(0,n.jsx)(x.z,{variant:"ghost",children:"Cancel"})})})]})]})}),(0,n.jsx)("div",{className:"w-full flex justify-start overflow-x-auto",children:(0,n.jsx)(l.Z,{items:S,onItemSelected:z,selectedCategory:g})}),(0,n.jsx)("div",{className:"flex-none w-40",children:(0,n.jsx)("span",{})})]}),(0,n.jsx)("div",{className:"relative w-full bg-red-500 ",children:"popular"===D&&""===g?(0,n.jsxs)("div",{className:"bg-red-500 shadow-md flex flex-col h-fit justify-center items-center gap-0 absolute z-[20] -left-2 top-2 px-3 pt-2 pb-3 ring-4 ring-background border border-border rounded-md",children:[(0,n.jsx)("div",{className:"font-bold text-lg flex items-center text-white",children:"#1"}),(0,n.jsx)("div",{className:"font-normal text-[8px] tracking-widest uppercase flex items-center text-white",children:"Today"})]}):null}),(0,n.jsx)(o.Z,{query:g,order:D}),(0,n.jsx)(s.w,{source:"/explore"})]})}},5152:function(e,t,a){e.exports=a(37645)}},function(e){e.O(0,[4321,8391,9317,7909,2962,3387,1525,2777,6931,3713,4815,7811,9774,2888,179],function(){return e(e.s=66117)}),_N_E=e.O()}]);
//# sourceMappingURL=explore-ad0894bace190722.js.map