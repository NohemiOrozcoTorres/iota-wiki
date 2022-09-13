"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Interface: IInputSigningData",s={unversionedId:"libraries/nodejs/references/interfaces/IInputSigningData",id:"libraries/nodejs/references/interfaces/IInputSigningData",title:"Interface: IInputSigningData",description:"Data for transaction inputs for signing and ordering of unlock blocks",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IInputSigningData.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/IInputSigningData",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/IInputSigningData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: IGenerateAddressesOptions",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressesOptions"},next:{title:"Interface: IMqttBrokerOptions",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/IMqttBrokerOptions"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"output",id:"output",level:3},{value:"outputMetaData",id:"outputmetadata",level:3},{value:"chain",id:"chain",level:3},{value:"bech32Address",id:"bech32address",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-iinputsigningdata"},"Interface: IInputSigningData"),(0,a.kt)("p",null,"Data for transaction inputs for signing and ordering of unlock blocks"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData#output"},"output")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData#outputmetadata"},"outputMetaData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData#chain"},"chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData#bech32address"},"bech32Address"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"output"},"output"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"output"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"OutputTypes")),(0,a.kt)("p",null,"The output"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputmetadata"},"outputMetaData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputMetaData"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IOutputMetadataResponse")),(0,a.kt)("p",null,"The output metadata"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chain"},"chain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"chain"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ISegment"),"[]"),(0,a.kt)("p",null,"The chain derived from seed, only for ed25519 addresses"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bech32address"},"bech32Address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bech32Address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The bech32 encoded address, required because of alias outputs where we have multiple possible unlock\nconditions, because we otherwise don't know which one we need"))}c.isMDXComponent=!0}}]);