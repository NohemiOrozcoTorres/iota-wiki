"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(34259),s=n(18679);const c={description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},i="How to Deposit to a Chain",l={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",title:"How to Deposit to a Chain",description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",source:"@site/next/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/next/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",tags:[],version:"current",frontMatter:{description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/next/smart-contracts/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/next/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"Any assets attached to an on-ledger request are automatically deposited to the sender's L2 account before executing the\nrequest.\nSo, to deposit tokens, you only need to send ",(0,a.kt)("em",{parentName:"p"},"any")," on-ledger request with the tokens attached."),(0,a.kt)("p",null,"A commonly needed operation is to only deposit some funds and do nothing else.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entry point of the ",(0,a.kt)("a",{parentName:"p",href:"../core_contracts/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," is a no-op function that serves\nthis purpose."),(0,a.kt)("admonition",{title:"Gas Fees",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All requests are charged a gas fee, so the L2 account may receive fewer tokens than the amount sent.")),(0,a.kt)("admonition",{title:"Storage Deposits",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The IOTA L1 transaction needs a minimum amount of tokens attached for\nstorage deposit. It will fail if the amount transferred is less than this minimum amount.")),(0,a.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"err := chain.DepositBaseTokensToL2(N, wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(s.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N base tokens from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferBaseTokes(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_base_tokens(N).post_to_chain(chainID);\n"))),(0,a.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferBaseTokens(N).PostToChain(chainID)\n")))))}m.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294),a=n(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),a=n(67294),r=n(86010),s=n(51048),c=n(33609),i=n(1943),l=n(72957);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),y=(0,c.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[T,N]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=h){const e=k[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,n=x.indexOf(t),o=g[n].value;o!==T&&(O(t),N(o),null!=h&&w(h,String(o)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:_,onClick:_},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}}}]);