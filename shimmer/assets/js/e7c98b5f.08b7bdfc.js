"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[441],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||c;return t?n.createElement(m,i(i({ref:r},f),{},{components:t})):n.createElement(m,i({ref:r},f))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19170:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const c={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Interface: INodeInfoMetrics",a={unversionedId:"references/client/interfaces/INodeInfoMetrics",id:"references/client/interfaces/INodeInfoMetrics",title:"Interface: INodeInfoMetrics",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/INodeInfoMetrics.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/INodeInfoMetrics",permalink:"/shimmer/iotajs/references/client/interfaces/INodeInfoMetrics",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/INodeInfoMetrics.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: INodeInfoBaseToken",permalink:"/shimmer/iotajs/references/client/interfaces/INodeInfoBaseToken"},next:{title:"Interface: INodeInfoMilestone",permalink:"/shimmer/iotajs/references/client/interfaces/INodeInfoMilestone"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blocksPerSecond",id:"blockspersecond",level:3},{value:"referencedBlocksPerSecond",id:"referencedblockspersecond",level:3},{value:"referencedRate",id:"referencedrate",level:3}],f={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-inodeinfometrics"},"Interface: INodeInfoMetrics"),(0,o.kt)("p",null,"Response from the /info endpoint."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoMetrics#blockspersecond"},"blocksPerSecond")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoMetrics#referencedblockspersecond"},"referencedBlocksPerSecond")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoMetrics#referencedrate"},"referencedRate"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"blockspersecond"},"blocksPerSecond"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"blocksPerSecond"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Blocks per second."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"referencedblockspersecond"},"referencedBlocksPerSecond"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"referencedBlocksPerSecond"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Referenced blocks per second."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"referencedrate"},"referencedRate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"referencedRate"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The rate at which rates are being referenced."))}p.isMDXComponent=!0}}]);