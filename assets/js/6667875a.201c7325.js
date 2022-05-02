"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[63412],{39829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(59210),c=["components"],l={title:"IOTA 1.5",description:"My document description from SEO"},d=void 0,s={unversionedId:"networks/iota-1.5",id:"networks/iota-1.5",title:"IOTA 1.5",description:"My document description from SEO",source:"@site/internal/build/networks/iota-1.5.mdx",sourceDirName:"networks",slug:"/networks/iota-1.5",permalink:"/build/networks/iota-1.5",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/build/networks/iota-1.5.mdx",tags:[],version:"current",lastUpdatedAt:1643667374,formattedLastUpdatedAt:"1/31/2022",frontMatter:{title:"IOTA 1.5",description:"My document description from SEO"},sidebar:"build",previous:{title:"Welcome",permalink:"/build/welcome"},next:{title:"IOTA 2.0",permalink:"/build/networks/iota-2.0"}},u={},m=[{value:"General documentation",id:"general-documentation",level:2},{value:"Node softwares",id:"node-softwares",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Integrations",id:"integrations",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-documentation"},"General documentation"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Chrysalis",link:"/chrysalis-docs/welcome",description:"Mainnet documentation",icon:"\ue901",mdxType:"Card"})),(0,o.kt)("h2",{id:"node-softwares"},"Node softwares"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Hornet",link:"/hornet/welcome",description:"IOTA node written in Go",icon:"\ue904",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Bee",link:"/bee/getting_started",description:"IOTA node written in Rust",icon:"\ue900",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Chronicle",link:"/chronicle.rs/welcome",description:"IOTA permanode",icon:"\ue90c",mdxType:"Card"})),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Client",link:"/iota.rs/welcome",description:"Interact with the network",icon:"\ue907",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Wallet",link:"/wallet.rs/welcome",description:"Build IOTA wallets",icon:"\ue90a",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Stronghold",link:"/stronghold.rs/welcome",description:"Handle secrets securely",icon:"\ue909",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Identity",link:"/identity.rs/introduction",description:"Identity framework",icon:"\ue905",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Streams",link:"/streams/welcome",description:"Share data securely",icon:"\ue908",mdxType:"Card"})),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Streams & Identity ",link:"/integration-services/welcome",description:"Integrate IOTA",icon:"\ue90d",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Blueprints",link:"/blueprints/introduction",description:"Real-world scenarios",icon:"\ue907",mdxType:"Card"})))}f.isMDXComponent=!0},59210:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),i="icon_VP0I",o=n(86010),a=n(76775);function c(e){var t=e.title,n=e.link,c=e.description,l=e.icon,d=(0,a.k6)();return r.createElement("div",{className:"card card-background card--pointer margin-horiz--md margin-vert--md shadow--md",onClick:function(e){e.preventDefault(),d.push(n)}},r.createElement("div",{className:"card__header"},r.createElement("h3",null,t)),r.createElement("div",{className:(0,o.Z)(i,"card__body")},l),r.createElement("div",{className:"card__footer"},r.createElement("p",null,c)))}},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);