"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9937],{95389:function(e,t,r){r.d(t,{_:function(){return d},b:function(){return c}});var n=r(67294),i=r(19946),o=r(12351),l=r(16723),a=r(23784),u=r(73781);let s=(0,n.createContext)(null);function c(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)(()=>function(e){let r=(0,u.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),i=(0,n.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return n.createElement(s.Provider,{value:i},e.children)},[t])]}let d=(0,o.yV)(function(e,t){let{passive:r=!1,...u}=e,c=function e(){let t=(0,n.useContext)(s);if(null===t){let r=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return t}(),d=`headlessui-label-${(0,i.M)()}`,p=(0,a.T)(t);(0,l.e)(()=>c.register(d),[d,c.register]);let f={ref:p,...c.props,id:d};return r&&("onClick"in f&&delete f.onClick,"onClick"in u&&delete u.onClick),(0,o.sY)({ourProps:f,theirProps:u,slot:c.slot||{},defaultTag:"label",name:c.name||"Label"})})},65451:function(e,t,r){r.d(t,{E:function(){return P}});var n,i,o=r(67294),l=r(12351),a=r(19946),u=r(32984),s=r(16723),c=r(61363),d=r(84575),p=r(95389),f=r(39516),v=r(31591),g=r(23784),b=r(46045),m=r(18689),h=r(15466),R=r(73781),E=r(31147),y=r(64103),k=((n=k||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let C={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},O=(0,o.createContext)(null);function w(e,t){return(0,u.E)(t.type,C,e,t)}O.displayName="RadioGroupContext";let T=(0,l.yV)(function(e,t){let{value:r,defaultValue:n,name:i,onChange:u,by:s=(e,t)=>e===t,disabled:y=!1,...k}=e,C=(0,R.z)("string"==typeof s?(e,t)=>(null==e?void 0:e[s])===(null==t?void 0:t[s]):s),[T,A]=(0,o.useReducer)(w,{options:[]}),P=T.options,[S,F]=(0,p.b)(),[M,D]=(0,f.f)(),I=`headlessui-radiogroup-${(0,a.M)()}`,V=(0,o.useRef)(null),_=(0,g.T)(V,t),[x,z]=(0,E.q)(r,u,n),G=(0,o.useMemo)(()=>P.find(e=>!e.propsRef.current.disabled),[P]),L=(0,o.useMemo)(()=>P.some(e=>C(e.propsRef.current.value,x)),[P,x]),N=(0,R.z)(e=>{var t;if(y||C(e,x))return!1;let r=null==(t=P.find(t=>C(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==z||z(e),!0)});(0,v.B)({container:V.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let $=(0,R.z)(e=>{let t=V.current;if(!t)return;let r=(0,h.r)(t),n=P.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case c.R.Enter:(0,m.g)(e.currentTarget);break;case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let i=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));i&&N(i.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(n,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let o=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));o&&N(o.propsRef.current.value)}break;case c.R.Space:{e.preventDefault(),e.stopPropagation();let l=P.find(e=>e.element.current===(null==r?void 0:r.activeElement));l&&N(l.propsRef.current.value)}}}),j=(0,R.z)(e=>(A({type:0,...e}),()=>A({type:1,id:e.id}))),B=(0,o.useMemo)(()=>({registerOption:j,firstOption:G,containsCheckedOption:L,change:N,disabled:y,value:x,compare:C}),[j,G,L,N,y,x,C]),Y=(0,o.useMemo)(()=>({value:x}),[x]);return o.createElement(D,{name:"RadioGroup.Description"},o.createElement(F,{name:"RadioGroup.Label"},o.createElement(O.Provider,{value:B},null!=i&&null!=x&&(0,m.t)({[i]:x}).map(([e,t])=>o.createElement(b._,{features:b.A.Hidden,...(0,l.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,l.sY)({ourProps:{ref:_,id:I,role:"radiogroup","aria-labelledby":S,"aria-describedby":M,onKeyDown:$},theirProps:k,slot:Y,defaultTag:"div",name:"RadioGroup"}))))});var A=((i=A||{})[i.Empty=1]="Empty",i[i.Active=2]="Active",i);let P=Object.assign(T,{Option:(0,l.yV)(function(e,t){let r=(0,o.useRef)(null),n=(0,g.T)(r,t),i=`headlessui-radiogroup-option-${(0,a.M)()}`,[u,c]=(0,p.b)(),[d,v]=(0,f.f)(),{addFlag:b,removeFlag:m,hasFlag:h}=function(e=0){let[t,r]=(0,o.useState)(e);return{addFlag:(0,o.useCallback)(e=>r(t=>t|e),[t]),hasFlag:(0,o.useCallback)(e=>Boolean(t&e),[t]),removeFlag:(0,o.useCallback)(e=>r(t=>t&~e),[r]),toggleFlag:(0,o.useCallback)(e=>r(t=>t^e),[r])}}(1),{value:E,disabled:k=!1,...C}=e,w=(0,o.useRef)({value:E,disabled:k});(0,s.e)(()=>{w.current.value=E},[E,w]),(0,s.e)(()=>{w.current.disabled=k},[k,w]);let{registerOption:T,disabled:A,change:P,firstOption:S,containsCheckedOption:F,value:M,compare:D}=function e(t){let r=(0,o.useContext)(O);if(null===r){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return r}("RadioGroup.Option");(0,s.e)(()=>T({id:i,element:r,propsRef:w}),[i,T,r,e]);let I=(0,R.z)(e=>{var t;if((0,y.P)(e.currentTarget))return e.preventDefault();P(E)&&(b(2),null==(t=r.current)||t.focus())}),V=(0,R.z)(e=>{if((0,y.P)(e.currentTarget))return e.preventDefault();b(2)}),_=(0,R.z)(()=>m(2)),x=(null==S?void 0:S.id)===i,z=A||k,G=D(M,E),L=(0,o.useMemo)(()=>({checked:G,disabled:z,active:h(2)}),[G,z,h]);return o.createElement(v,{name:"RadioGroup.Description"},o.createElement(c,{name:"RadioGroup.Label"},(0,l.sY)({ourProps:{ref:n,id:i,role:"radio","aria-checked":G?"true":"false","aria-labelledby":u,"aria-describedby":d,"aria-disabled":!!z||void 0,tabIndex:z?-1:G||!F&&x?0:-1,onClick:z?void 0:I,onFocus:z?void 0:V,onBlur:z?void 0:_},theirProps:C,slot:L,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:p._,Description:f.d})},97650:function(e,t,r){let n;r.d(t,{YD:function(){return u}});var i=r(67294);let o=new Map,l=new WeakMap,a=0;function u({threshold:e,delay:t,trackVisibility:r,rootMargin:u,root:s,triggerOnce:c,skip:d,initialInView:p,fallbackInView:f,onChange:v}={}){var g;let[b,m]=i.useState(null),h=i.useRef(),[R,E]=i.useState({inView:!!p,entry:void 0});h.current=v,i.useEffect(()=>{let i;if(!d&&b)return i=function(e,t,r={},i=n){if(void 0===window.IntersectionObserver&&void 0!==i){let u=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}let{id:s,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(l.has(r)||(a+=1,l.set(r,a.toString())),l.get(r)):"0":e[t]}`}).toString(),r=o.get(t);if(!r){let n;let i=new Map,u=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(e=>{e(o,t)})})},e);n=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:u,elements:i},o.set(t,r)}return r}(r),p=d.get(e)||[];return d.has(e)||d.set(e,p),p.push(t),c.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),o.delete(s))}}(b,(e,t)=>{E({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&c&&i&&(i(),i=void 0)},{root:s,rootMargin:u,threshold:e,trackVisibility:r,delay:t},f),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,b,s,u,c,d,r,f,t]);let y=null==(g=R.entry)?void 0:g.target;i.useEffect(()=>{b||!y||c||d||E({inView:!!p,entry:void 0})},[b,y,c,d,p]);let k=[m,R.inView,R.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}}}]);
//# sourceMappingURL=9937-ecb7b4f043f69ce7.js.map