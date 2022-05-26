"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42215],{54786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"The `governance` contract defines the set of identities that constitute the state controller, who is the chain owner and  the fees for request execution.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","governance","state controller","identities","chain owner","rotate","remove","claim","add","chain info","fee info","reference"]},c="The `governance` Contract",s={unversionedId:"guide/core_concepts/core_contracts/governance",id:"guide/core_concepts/core_contracts/governance",title:"The `governance` Contract",description:"The `governance` contract defines the set of identities that constitute the state controller, who is the chain owner and  the fees for request execution.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/governance.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/governance",permalink:"/smart-contracts/guide/core_concepts/core_contracts/governance",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/governance.md",tags:[],version:"current",frontMatter:{description:"The `governance` contract defines the set of identities that constitute the state controller, who is the chain owner and  the fees for request execution.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","governance","state controller","identities","chain owner","rotate","remove","claim","add","chain info","fee info","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `blocklog` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/blocklog"},next:{title:"How Accounts Work",permalink:"/smart-contracts/guide/core_concepts/accounts/how-accounts-work"}},d={},h=[{value:"Entry Points",id:"entry-points",level:2},{value:"rotateStateController",id:"rotatestatecontroller",level:3},{value:"addAllowedStateControllerAddress",id:"addallowedstatecontrolleraddress",level:3},{value:"removeAllowedStateControllerAddress",id:"removeallowedstatecontrolleraddress",level:3},{value:"delegateChainOwnership",id:"delegatechainownership",level:3},{value:"claimChainOwnership",id:"claimchainownership",level:3},{value:"setContractFee",id:"setcontractfee",level:3},{value:"setChainInfo",id:"setchaininfo",level:3},{value:"Views",id:"views",level:2},{value:"getAllowedStateControllerAddresses",id:"getallowedstatecontrolleraddresses",level:3},{value:"getChainOwner",id:"getchainowner",level:3},{value:"getFeeInfo",id:"getfeeinfo",level:3},{value:"getChainInfo",id:"getchaininfo",level:3}],p={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-governance-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"governance")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"governance")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"governance")," contract provides the following functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It defines the set of identities that constitute the state controller (entity that owns the state output via the chain Alias Address). It is possible to add/remove addresses from the stateController (thus rotating the committee of validators)."),(0,a.kt)("li",{parentName:"ul"},"It defines who is the chain owner (the L1 entity that owns the chain - initially whoever deployed it). The chain owner can collect special fees, and customize some chain-specific parameters."),(0,a.kt)("li",{parentName:"ul"},"It defines the fees for request execution, and other chain-specific parameters.")),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("p",null,"The following are the functions/entry points of the ",(0,a.kt)("inlineCode",{parentName:"p"},"governance")," contract. They can only be invoked by the chain owner."),(0,a.kt)("h3",{id:"rotatestatecontroller"},"rotateStateController"),(0,a.kt)("p",null,"Called when committee is about to be rotated to the new address. If it fails, nothing happens. If it succeeds, the next state transition will become a governance transition, thus updating the state controller in the chain's AliasOutput."),(0,a.kt)("h3",{id:"addallowedstatecontrolleraddress"},"addAllowedStateControllerAddress"),(0,a.kt)("p",null,"Adds an address to the list of identities that constitute the state controller, this change will only become effective once ",(0,a.kt)("inlineCode",{parentName:"p"},"rotateStateController")," is called  "),(0,a.kt)("h3",{id:"removeallowedstatecontrolleraddress"},"removeAllowedStateControllerAddress"),(0,a.kt)("p",null,"Removes an address from the list of identities that constitute the state controller, this change will only become effective once ",(0,a.kt)("inlineCode",{parentName:"p"},"rotateStateController")," is called"),(0,a.kt)("h3",{id:"delegatechainownership"},"delegateChainOwnership"),(0,a.kt)("p",null,"Sets a new owner for the chain. This change will only be effective once ",(0,a.kt)("inlineCode",{parentName:"p"},"claimChainOwnership")," is called"),(0,a.kt)("h3",{id:"claimchainownership"},"claimChainOwnership"),(0,a.kt)("p",null,"Claims the ownership of the chain if the caller matches the identity set in ",(0,a.kt)("inlineCode",{parentName:"p"},"delegateChainOwnership")),(0,a.kt)("h3",{id:"setcontractfee"},"setContractFee"),(0,a.kt)("p",null,"Sets the fee for a particular contract"),(0,a.kt)("h3",{id:"setchaininfo"},"setChainInfo"),(0,a.kt)("p",null,"Allows the following chain parameters to be set: ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxBlobSize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventSize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventsPerRequest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnerFee"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatorFee")),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"Can be called directly. Calling a view does not modify the state of the smart contract."),(0,a.kt)("h3",{id:"getallowedstatecontrolleraddresses"},"getAllowedStateControllerAddresses"),(0,a.kt)("p",null,"Returns the list of allowed state controllers."),(0,a.kt)("h3",{id:"getchainowner"},"getChainOwner"),(0,a.kt)("p",null,"Returns the AgentID of the chain owner."),(0,a.kt)("h3",{id:"getfeeinfo"},"getFeeInfo"),(0,a.kt)("p",null,"Returns the fees for a given contract."),(0,a.kt)("h3",{id:"getchaininfo"},"getChainInfo"),(0,a.kt)("p",null,"Returns the following chain parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxBlobSize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventSize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventsPerRequest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnerFee"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatorFee"),"."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);