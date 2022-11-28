"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Interface: INodeInfo",s={unversionedId:"references/client/interfaces/INodeInfo",id:"references/client/interfaces/INodeInfo",title:"Interface: INodeInfo",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/INodeInfo.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/INodeInfo",permalink:"/shimmer/iotajs/references/client/interfaces/INodeInfo",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/INodeInfo.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: INftUnlock",permalink:"/shimmer/iotajs/references/client/interfaces/INftUnlock"},next:{title:"Interface: INodeInfoBaseToken",permalink:"/shimmer/iotajs/references/client/interfaces/INodeInfoBaseToken"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3},{value:"status",id:"status",level:3},{value:"metrics",id:"metrics",level:3},{value:"supportedProtocolVersions",id:"supportedprotocolversions",level:3},{value:"protocol",id:"protocol",level:3},{value:"pendingProtocolParameters",id:"pendingprotocolparameters",level:3},{value:"baseToken",id:"basetoken",level:3},{value:"features",id:"features",level:3}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-inodeinfo"},"Interface: INodeInfo"),(0,o.kt)("p",null,"Response from the /info endpoint."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#name"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#version"},"version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#status"},"status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#metrics"},"metrics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#supportedprotocolversions"},"supportedProtocolVersions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#protocol"},"protocol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#pendingprotocolparameters"},"pendingProtocolParameters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#basetoken"},"baseToken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/INodeInfo#features"},"features"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The name of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"version"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The version of node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"status"),": ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoStatus"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoStatus"))),(0,o.kt)("p",null,"The status of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"metrics"),": ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoMetrics"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoMetrics"))),(0,o.kt)("p",null,"The metrics for the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"supportedprotocolversions"},"supportedProtocolVersions"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"supportedProtocolVersions"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,o.kt)("p",null,"The supported protocol versions."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"protocol"},"protocol"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"protocol"),": ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoProtocol"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoProtocol"))),(0,o.kt)("p",null,"The protocol info of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pendingprotocolparameters"},"pendingProtocolParameters"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"pendingProtocolParameters"),": ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoProtocolParamsMilestoneOpt"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoProtocolParamsMilestoneOpt")),"[]"),(0,o.kt)("p",null,"Pending protocol parameters."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"basetoken"},"baseToken"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"baseToken"),": ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/INodeInfoBaseToken"},(0,o.kt)("inlineCode",{parentName:"a"},"INodeInfoBaseToken"))),(0,o.kt)("p",null,"The base token info of the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"features"},"features"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"features"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"Features supported by the node."))}f.isMDXComponent=!0}}]);