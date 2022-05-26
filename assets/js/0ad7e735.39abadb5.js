"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39526],{35117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),c=["components"],i={description:"Smart contracts can call each other if they are deployed on the same chain. If you need to invoke a smart contract from outside of the chain, you need to make a smart contract request.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","requests","on-ledger","off-ledger","calls","invocation","explanation"]},s="Smart Contracts Invocation",l={unversionedId:"guide/core_concepts/invocation",id:"guide/core_concepts/invocation",title:"Smart Contracts Invocation",description:"Smart contracts can call each other if they are deployed on the same chain. If you need to invoke a smart contract from outside of the chain, you need to make a smart contract request.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/invocation.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/invocation",permalink:"/smart-contracts/guide/core_concepts/invocation",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/invocation.md",tags:[],version:"current",frontMatter:{description:"Smart contracts can call each other if they are deployed on the same chain. If you need to invoke a smart contract from outside of the chain, you need to make a smart contract request.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","requests","on-ledger","off-ledger","calls","invocation","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a Smart Contract",permalink:"/smart-contracts/guide/core_concepts/smart-contract-anatomy"},next:{title:"Sandbox Interface",permalink:"/smart-contracts/guide/core_concepts/sandbox"}},u={},d=[{value:"Requests",id:"requests",level:2},{value:"On-Ledger",id:"on-ledger",level:3},{value:"Off-Ledger",id:"off-ledger",level:3}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contracts-invocation"},"Smart Contracts Invocation"),(0,r.kt)("p",null,"Just like any other computer program, a smart contract will lie dormant until someone or something would instruct it to activate. In the case of smart contracts, the basic way to activate them is to call one of their ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/smart-contract-anatomy#entry-points"},"entry points"),". It is the same as calling a program's function, and it will take a set of instructions of the smart contract and execute it over the current chain's state. View entry points can only read the state, and full entry points can both read and write to it."),(0,r.kt)("p",null,"Calls just execute the code, on their own they have no security checks. There is no harm in calling view entry points, but full entry points cannot be directly exposed to the outside world. Instead you need to wrap a call into a request, cryptographically sign it, and submit it to the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/consensus"},"consensus")," procedure to let the chain's committee evaluate it and engrave the outcome of its execution into a new state update."),(0,r.kt)("p",null,"When you make a request, the committee will either take it into work and execute the wrapped call fully, or it will reject the request with all its potential changes, never modifying the state only half-way through. This means that every single request is an ",(0,r.kt)("em",{parentName:"p"},"atomic operation"),"."),(0,r.kt)("p",null,"Smart contract calls are deterministic and synchronous, meaning that they always produce the same result and that all instructions are executed one immediately after another. By extension, if a smart contract calls another smart contract, the resulting set of instructions is also deterministic and synchronous, meaning that for a request it makes no difference if a smart contract's entry point contains the whole set of instructions or if it is composed of multiple smart contracts of the chain. Being able to combine smart contracts in this way is called ",(0,r.kt)("em",{parentName:"p"},"synchronous composability"),"."),(0,r.kt)("h2",{id:"requests"},"Requests"),(0,r.kt)("p",null,"A request contains a call to a smart contract and a signature of the sender (who is also the owner of the assets and funds that are going to be processed within the request). Unlike calls, requests are not executed immediately. Instead, they have to wait until the chain's validator nodes include them into a request batch. This means that requests unlike the calls have a delay and are executed in an unpredictable order, but they are subject to the protection mechanisms that allow ISC to function."),(0,r.kt)("p",null,"Requests are not only for humans \u2014 smart contracts can create requests too. You could request an execution of a smart contract that creates a request to, for example, a third-party decentralized exchange which would convert the user's funds from one currency to another and send them back through another request. This is called ",(0,r.kt)("em",{parentName:"p"},"asynchronous composability"),"."),(0,r.kt)("h3",{id:"on-ledger"},"On-Ledger"),(0,r.kt)("p",null,"An on-ledger request is a Layer 1 transaction that validator nodes retrieve from the Tangle. The Tangle acts as an arbiter between users and chains and guarantees that the transaction is valid, making it the only way to transfer assets to a chain or between the chains, albeit it is the slowest way to invoke a smart contract."),(0,r.kt)("h3",{id:"off-ledger"},"Off-Ledger"),(0,r.kt)("p",null,"If you have all necessary assets on a chain already, you can send a request directly to that chain's validator nodes. This way you do not have to wait for the Tangle to process the message, which makes the overall confirmation time much, much shorter. Due to the shorter delay, you should prefer sending off-ledger requests over on-ledger requests, unless you have to move assets between chains or Layer 1 accounts."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(p,c(c({ref:t},u),{},{components:n})):a.createElement(p,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);