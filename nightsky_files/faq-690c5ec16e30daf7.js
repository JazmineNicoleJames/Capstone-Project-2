(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{74129:function(e,t,n){"use strict";var r,i,o=n(67294),l=o&&"object"==typeof o&&"default"in o?o.default:o,s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var d=c(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"});a(d),d.BLOCKS;var E=c(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"});a(E),E.INLINES;var f=c(function(e,t){var n,r;Object.defineProperty(t,"__esModule",{value:!0}),(r=n||(n={})).BOLD="bold",r.ITALIC="italic",r.UNDERLINE="underline",r.CODE="code",r.SUPERSCRIPT="superscript",r.SUBSCRIPT="subscript",t.default=n});a(f);var _=c(function(e,t){var n,r=u&&u.__spreadArray||function(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},i=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var o=i(f);t.TOP_LEVEL_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,d.BLOCKS.EMBEDDED_RESOURCE,d.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,d.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[d.BLOCKS.TABLE,d.BLOCKS.TABLE_ROW,d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[d.BLOCKS.HR,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,d.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[d.BLOCKS.OL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.UL_LIST]=[d.BLOCKS.LIST_ITEM],n[d.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[d.BLOCKS.QUOTE]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE]=[d.BLOCKS.TABLE_ROW],n[d.BLOCKS.TABLE_ROW]=[d.BLOCKS.TABLE_CELL,d.BLOCKS.TABLE_HEADER_CELL],n[d.BLOCKS.TABLE_CELL]=[d.BLOCKS.PARAGRAPH],n[d.BLOCKS.TABLE_HEADER_CELL]=[d.BLOCKS.PARAGRAPH],n),t.HEADINGS=[d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([d.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[d.BLOCKS.DOCUMENT,d.BLOCKS.PARAGRAPH,d.BLOCKS.HEADING_1,d.BLOCKS.HEADING_2,d.BLOCKS.HEADING_3,d.BLOCKS.HEADING_4,d.BLOCKS.HEADING_5,d.BLOCKS.HEADING_6,d.BLOCKS.OL_LIST,d.BLOCKS.UL_LIST,d.BLOCKS.LIST_ITEM,d.BLOCKS.HR,d.BLOCKS.QUOTE,d.BLOCKS.EMBEDDED_ENTRY,d.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[o.default.BOLD,o.default.CODE,o.default.ITALIC,o.default.UNDERLINE]});a(_),_.V1_MARKS,_.V1_NODE_TYPES,_.TEXT_CONTAINERS,_.HEADINGS,_.CONTAINERS,_.VOID_BLOCKS,_.TABLE_BLOCKS,_.LIST_ITEM_BLOCKS,_.TOP_LEVEL_BLOCKS;var S=c(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});a(S);var p=c(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});a(p);var h=c(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:d.BLOCKS.DOCUMENT,data:{},content:[{nodeType:d.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n});a(h);var L=c(function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++)if(t===e[r[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(E.INLINES,e.nodeType)},t.isBlock=function(e){return n(d.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}});a(L),L.isText,L.isBlock,L.isInline;var m=c(function(e,t){var n=u&&u.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=u&&u.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t},l=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return d.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return E.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(f).default}}),i(_,t),i(S,t),i(p,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(h).default}});var s=o(L);t.helpers=s});a(m);var O=m.helpers;m.EMPTY_DOCUMENT;var C=m.MARKS,T=m.INLINES,v=m.BLOCKS,I=((r={})[v.DOCUMENT]=function(e,t){return t},r[v.PARAGRAPH]=function(e,t){return l.createElement("p",null,t)},r[v.HEADING_1]=function(e,t){return l.createElement("h1",null,t)},r[v.HEADING_2]=function(e,t){return l.createElement("h2",null,t)},r[v.HEADING_3]=function(e,t){return l.createElement("h3",null,t)},r[v.HEADING_4]=function(e,t){return l.createElement("h4",null,t)},r[v.HEADING_5]=function(e,t){return l.createElement("h5",null,t)},r[v.HEADING_6]=function(e,t){return l.createElement("h6",null,t)},r[v.EMBEDDED_ENTRY]=function(e,t){return l.createElement("div",null,t)},r[v.EMBEDDED_RESOURCE]=function(e,t){return l.createElement("div",null,t)},r[v.UL_LIST]=function(e,t){return l.createElement("ul",null,t)},r[v.OL_LIST]=function(e,t){return l.createElement("ol",null,t)},r[v.LIST_ITEM]=function(e,t){return l.createElement("li",null,t)},r[v.QUOTE]=function(e,t){return l.createElement("blockquote",null,t)},r[v.HR]=function(){return l.createElement("hr",null)},r[v.TABLE]=function(e,t){return l.createElement("table",null,l.createElement("tbody",null,t))},r[v.TABLE_ROW]=function(e,t){return l.createElement("tr",null,t)},r[v.TABLE_HEADER_CELL]=function(e,t){return l.createElement("th",null,t)},r[v.TABLE_CELL]=function(e,t){return l.createElement("td",null,t)},r[T.ASSET_HYPERLINK]=function(e){return B(T.ASSET_HYPERLINK,e)},r[T.ENTRY_HYPERLINK]=function(e){return B(T.ENTRY_HYPERLINK,e)},r[T.EMBEDDED_ENTRY]=function(e){return B(T.EMBEDDED_ENTRY,e)},r[T.HYPERLINK]=function(e,t){return l.createElement("a",{href:e.data.uri},t)},r),y=((i={})[C.BOLD]=function(e){return l.createElement("b",null,e)},i[C.ITALIC]=function(e){return l.createElement("i",null,e)},i[C.UNDERLINE]=function(e){return l.createElement("u",null,e)},i[C.CODE]=function(e){return l.createElement("code",null,e)},i[C.SUPERSCRIPT]=function(e){return l.createElement("sup",null,e)},i[C.SUBSCRIPT]=function(e){return l.createElement("sub",null,e)},i);function B(e,t){return l.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return(void 0===t&&(t={}),e)?function e(t,n){var r=n.renderNode,i=n.renderMark,s=n.renderText;if(O.isText(t))return t.marks.reduce(function(e,t){return i[t.type]?i[t.type](e):e},s?s(t.value):t.value);var u=t.content.map(function(t,r){var i;return i=e(t,n),o.isValidElement(i)&&null===i.key?o.cloneElement(i,{key:r}):i});return t.nodeType&&r[t.nodeType]?r[t.nodeType](t,u):l.createElement(l.Fragment,null,u)}(e,{renderNode:s(s({},I),t.renderNode),renderMark:s(s({},y),t.renderMark),renderText:t.renderText}):null}},2350:function(){},71025:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(94159)}])},82470:function(e,t,n){var r=n(34155);n(2350);var i=n(67294),o=i&&"object"==typeof i&&"default"in i?i:{default:i};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=void 0!==r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?s:i;c(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(r){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},l(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&l(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},E={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return E[r]||(E[r]="jsx-"+d(e+"-"+n)),E[r]}function _(e,t){var n=e+t;return E[n]||(E[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),E[n]}var S=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=f(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return _(i,e)}):[_(i,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=i.createContext(null);p.displayName="StyleSheetContext";var h=o.default.useInsertionEffect||o.default.useLayoutEffect,L=new S;function m(e){var t=L||i.useContext(p);return t&&h(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}m.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=m},51857:function(e,t,n){"use strict";e.exports=n(82470).style},94159:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return H},default:function(){return k}});var r,i,o=n(85893),l=n(51857),s=n.n(l),u=n(74129),a=n(67294),c=n(32984),d=n(12351),E=n(23784),f=n(19946),_=n(61363),S=n(64103),p=n(16567),h=n(14157),L=n(15466),m=n(73781),O=((r=O||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),C=((i=C||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let T={0:e=>({...e,disclosureState:(0,c.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},v=(0,a.createContext)(null);function I(e){let t=(0,a.useContext)(v);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}v.displayName="DisclosureContext";let y=(0,a.createContext)(null);y.displayName="DisclosureAPIContext";let B=(0,a.createContext)(null);function N(e,t){return(0,c.E)(t.type,T,e,t)}B.displayName="DisclosurePanelContext";let D=a.Fragment,A=(0,d.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,i=`headlessui-disclosure-button-${(0,f.M)()}`,o=`headlessui-disclosure-panel-${(0,f.M)()}`,l=(0,a.useRef)(null),s=(0,E.T)(t,(0,E.h)(e=>{l.current=e},void 0===e.as||e.as===a.Fragment)),u=(0,a.useRef)(null),_=(0,a.useRef)(null),S=(0,a.useReducer)(N,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:_,panelRef:u,buttonId:i,panelId:o}),[{disclosureState:h},O]=S;(0,a.useEffect)(()=>O({type:2,buttonId:i}),[i,O]),(0,a.useEffect)(()=>O({type:3,panelId:o}),[o,O]);let C=(0,m.z)(e=>{O({type:1});let t=(0,L.r)(l);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(i):t.getElementById(i);null==n||n.focus()}),T=(0,a.useMemo)(()=>({close:C}),[C]),I=(0,a.useMemo)(()=>({open:0===h,close:C}),[h,C]);return a.createElement(v.Provider,{value:S},a.createElement(y.Provider,{value:T},a.createElement(p.up,{value:(0,c.E)(h,{0:p.ZM.Open,1:p.ZM.Closed})},(0,d.sY)({ourProps:{ref:s},theirProps:r,slot:I,defaultTag:D,name:"Disclosure"}))))}),R=(0,d.yV)(function(e,t){let[n,r]=I("Disclosure.Button"),i=(0,a.useContext)(B),o=null!==i&&i===n.panelId,l=(0,a.useRef)(null),s=(0,E.T)(l,t,o?null:n.buttonRef),u=(0,m.z)(e=>{var t;if(o){if(1===n.disclosureState)return;switch(e.key){case _.R.Space:case _.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case _.R.Space:case _.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),c=(0,m.z)(e=>{e.key===_.R.Space&&e.preventDefault()}),f=(0,m.z)(t=>{var i;(0,S.P)(t.currentTarget)||e.disabled||(o?(r({type:0}),null==(i=n.buttonRef.current)||i.focus()):r({type:0}))}),p=(0,a.useMemo)(()=>({open:0===n.disclosureState}),[n]),L=(0,h.f)(e,l),O=o?{ref:s,type:L,onKeyDown:u,onClick:f}:{ref:s,id:n.buttonId,type:L,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:u,onKeyUp:c,onClick:f};return(0,d.sY)({ourProps:O,theirProps:e,slot:p,defaultTag:"button",name:"Disclosure.Button"})}),g=d.AN.RenderStrategy|d.AN.Static,K=Object.assign(A,{Button:R,Panel:(0,d.yV)(function(e,t){let[n,r]=I("Disclosure.Panel"),{close:i}=function e(t){let n=(0,a.useContext)(y);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),o=(0,E.T)(t,n.panelRef,e=>{r({type:e?4:5})}),l=(0,p.oJ)(),s=null!==l?l===p.ZM.Open:0===n.disclosureState,u=(0,a.useMemo)(()=>({open:0===n.disclosureState,close:i}),[n,i]),c={ref:o,id:n.panelId};return a.createElement(B.Provider,{value:n.panelId},(0,d.sY)({ourProps:c,theirProps:e,slot:u,defaultTag:"div",features:g,visible:s,name:"Disclosure.Panel"}))})}),b=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"}))}),P=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"}))});var x=n(5993),j=n(95062),M=n(2962),H=!0;function k(e){let{faqs:t}=e;return(0,o.jsxs)(j.Z,{children:[(0,o.jsx)(M.PB,{title:"FAQ | Prompt Hunt - Your home for exploring, creating, and sharing AI art",description:"Create, explore, and share AI art using Stable Diffusion, DALL\xb7E, and Midjourney"}),(0,o.jsx)(x.Z,{maxWidth:!0,children:(0,o.jsx)("div",{className:"pb-10 lg:pb-24",children:(0,o.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 lg:gap-20",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/3 space-y-4",children:[(0,o.jsx)("div",{className:"text-accent",children:"Frequently asked questions"}),(0,o.jsx)("h2",{className:"text-2xl lg:text-4xl font-bold",children:"Everything you need to know."})]}),(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)("dl",{className:"space-y-6 divide-y divide-foreground/10",children:t.map((e,t)=>(0,o.jsx)(K,{as:"div",className:"pt-6",children:t=>{let{open:n}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("dt",{children:(0,o.jsxs)(K.Button,{className:"flex w-full items-start justify-between text-left text-foreground",children:[(0,o.jsx)("span",{className:"text-base font-semibold leading-7",children:e.question}),(0,o.jsx)("span",{className:"ml-6 flex h-7 items-center",children:n?(0,o.jsx)(b,{className:"h-6 w-6","aria-hidden":"true"}):(0,o.jsx)(P,{className:"h-6 w-6","aria-hidden":"true"})})]})}),(0,o.jsx)(K.Panel,{as:"dd",className:"mt-2 pr-12",children:(0,o.jsx)("div",{className:"text-base leading-7 text-muted-foreground",children:e.answerRichText?(0,o.jsxs)(o.Fragment,{children:[(0,u.h)(e.answerRichText,{renderText:e=>(0,o.jsx)("p",{className:"jsx-9744d10974ed8eec faq-paragraph",children:e})}),(0,o.jsx)(s(),{id:"9744d10974ed8eec",children:".faq-paragraph.jsx-9744d10974ed8eec{margin-bottom:1rem}"})]}):""})})]})}},t))})})]})})})]})}}},function(e){e.O(0,[2962,9774,2888,179],function(){return e(e.s=71025)}),_N_E=e.O()}]);
//# sourceMappingURL=faq-690c5ec16e30daf7.js.map