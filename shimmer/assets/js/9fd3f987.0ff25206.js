"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","validator committee","validators","validator nodes","explanation"]},s="Consensus",i={unversionedId:"guide/core_concepts/consensus",id:"guide/core_concepts/consensus",title:"Consensus",description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",source:"@site/shimmer/external/wasp/documentation/docs/guide/core_concepts/consensus.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/consensus",permalink:"/shimmer/smart-contracts/guide/core_concepts/consensus",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/core_concepts/consensus.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","validator committee","validators","validator nodes","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/shimmer/smart-contracts/guide/core_concepts/validators"},next:{title:"State, Transitions, and State Anchoring",permalink:"/shimmer/smart-contracts/guide/core_concepts/states"}},c={},l=[{value:"Batch Proposals",id:"batch-proposals",level:2},{value:"The Batch",id:"the-batch",level:2},{value:"State Anchor",id:"state-anchor",level:2}],h={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"To update the chain, its committee must reach a consensus, meaning that more than two thirds of its validators have to\nagree to change the state in the exact same way.\nThis prevents a single malicious node from wreaking havoc over the chain, but there are also more mundane reasons for\nindividual nodes to act up."),(0,o.kt)("p",null,"Smart contracts are deterministic. All honest nodes will produce the same output \u2014 but only if they have received the\nsame input. Each validator node has its point of access to the Tangle, so it may look different to different nodes, as\nnew transactions take time to propagate through the network. Validator nodes will receive smart contract requests with\nrandom delays in a random order, and, finally, all computers run on their own always slightly skewed clocks."),(0,o.kt)("h2",{id:"batch-proposals"},"Batch Proposals"),(0,o.kt)("p",null,"As the first step, each node provides its vision, a ",(0,o.kt)("em",{parentName:"p"},"batch proposal"),". The proposal contains a local timestamp, a list of\nunprocessed requests, and the node's partial signature of the commitment to the current state."),(0,o.kt)("p",null,"Then the nodes must agree on which batch proposals they want to work on. In short, nodes A, B, and C have to confirm\nthat they plan to work on proposals from A, B, and C, and from no one else. As long as there are more than two thirds of\nhonest nodes, they will be able to find an ",(0,o.kt)("em",{parentName:"p"},"asynchronous common subset")," of the batch proposals. From that point, nodes\nhave the same input and will produce the same result independently."),(0,o.kt)("h2",{id:"the-batch"},"The Batch"),(0,o.kt)("p",null,"The next step is to convert the raw list of batch proposals into an actual batch. All requests from all proposals are\ncounted and filtered to produce the same list of requests in the same order.\nThe partial signatures of all nodes are combined into a full signature that is then fed to a pseudo-random function that\nsorts the smart contract requests.\nValidator nodes can neither affect nor predict the final order of requests in the batch. This protects ISC\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/mev/"},"MEV attacks"),")."),(0,o.kt)("h2",{id:"state-anchor"},"State Anchor"),(0,o.kt)("p",null,"After agreeing on the input, each node executes every smart contract request in order, independently producing the same\nnew block. Each node then crafts a state anchor, a Layer 1 transaction that proves the commitment to this new chain\nstate. The timestamp for this transaction is derived from the timestamps of all batch proposals."),(0,o.kt)("p",null,"All nodes then sign the state anchor with their partial keys and exchange these signatures. This way, every node obtains\nthe same valid combined signature and the same valid anchor transaction, which means that any node can publish this\ntransaction to Layer 1. In theory, nodes could publish these state anchors every time they update the state; in\npractice, they do it only every approximately ten seconds to reduce the load on the Tangle."))}d.isMDXComponent=!0}}]);