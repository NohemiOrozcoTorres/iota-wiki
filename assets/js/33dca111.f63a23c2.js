"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69451],{37674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(76018),s=n(54501),l=["components"],c={keywords:["init","initialization","owner","initial state","smart contract creator","one-time","contract deployment"],description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM.  This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",image:"/img/logo/WASP_logo_dark.png"},u="Smart Contract Initialization",h={unversionedId:"guide/schema/init",id:"guide/schema/init",title:"Smart Contract Initialization",description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM.  This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/init.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/init",permalink:"/smart-contracts/guide/schema/init",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/init.mdx",tags:[],version:"current",frontMatter:{keywords:["init","initialization","owner","initial state","smart contract creator","one-time","contract deployment"],description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM.  This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"View-Only Functions",permalink:"/smart-contracts/guide/schema/views"},next:{title:"Token Transfers",permalink:"/smart-contracts/guide/schema/transfers"}},m={},p=[],d={toc:p};function w(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-initialization"},"Smart Contract Initialization"),(0,r.kt)("p",null,"Smart contracts start out with a completely blank state. Sometimes you may want to be able\nto define initial state, for example if your contract is configurable. You may want to be\nable to pass this configuration to the contract upon deployment, so that its state\nreflects that configuration once the first request comes in. Such initialization can be\nprovided through an optional function named ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,r.kt)("p",null,"When provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function will automatically be called immediately after the\nfirst time the contract has been deployed to the VM. Note that this is a one-time\ninitialization call, meant to be performed by the contract deployment mechanism. IOTA Smart Contracts will\nprevent anyone else from calling this function ever again. So if you need to be able to\nreconfigure the contract later on, you will need to provide a separate configuration\nfunction, and guard it from being accessed by anyone else than properly authorized\nentities."),(0,r.kt)("p",null,"To show how creating a smart contract with WasmLib works, we will slowly start fleshing\nout the smart contract functions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example in this tutorial. Here is the\nfirst part of the Rust code that implements it, which contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),"init",(0,r.kt)("inlineCode",{parentName:"p"},"'")," function:"),(0,r.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member addresses according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'var' statements with their assignment type to improve understanding.\n\n//nolint:revive\npackage dividend\n\nimport \"github.com/iotaledger/wasp/packages/wasmvm/wasmlib\"\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\nfunc funcInit(ctx wasmlib.ScFuncContext, f *InitContext) {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional\n    // 'owner' parameter was omitted.\n    var owner wasmlib.ScAgentID = ctx.ContractCreator()\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if f.Params.Owner().Exists() {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.Params.Owner().Value()\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schemas to understand why this state variable is\n    // supported at compile-time by code generated by the schema tool.\n    f.State.Owner().SetValue(owner)\n}\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member addresses according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'let' statements with their assignment type to improve understanding.\n\nuse wasmlib::*;\n\nuse crate::*;\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\npub fn func_init(ctx: &ScFuncContext, f: &InitContext) {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional\n    // 'owner' parameter was omitted.\n    let mut owner: ScAgentID = ctx.contract_creator();\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if f.params.owner().exists() {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.params.owner().value();\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schemas to understand why this state variable is\n    // supported at compile-time by code generated by the schema tool.\n    f.state.owner().set_value(&owner);\n}\n"))),(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member addresses according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'let' statements with their assignment type to improve understanding.\n\nimport * as wasmlib from \"wasmlib\"\nimport * as sc from \"./index\";\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\nexport function funcInit(ctx: wasmlib.ScFuncContext, f: sc.InitContext): void {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional\n    // 'owner' parameter was omitted.\n    let owner: wasmlib.ScAgentID = ctx.contractCreator();\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if (f.params.owner().exists()) {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.params.owner().value();\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schema.json to understand why this state variable is\n    // supported at compile-time by code generated from schema.json by the schema tool.\n    f.state.owner().setValue(owner);\n}\n")))),(0,r.kt)("p",null,"We define an owner variable and allow it to be something other than the default value of\ncontract creator. It is always a good idea to be flexible enough to be able to transfer\nownership to another entity if necessary. Remember that once a smart contract has been\ndeployed it is no longer possible to change this. Therefore, it is good practice thinking\nthrough situations that could require change in advance, and allow the contract\nitself to handle such changes through its state by providing a proper function interface:"),(0,r.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\nfunc funcSetOwner(ctx wasmlib.ScFuncContext, f *SetOwnerContext) {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.State.Owner().SetValue(f.Params.Owner().Value())\n}\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\npub fn func_set_owner(_ctx: &ScFuncContext, f: &SetOwnerContext) {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.state.owner().set_value(&f.params.owner().value());\n}\n"))),(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\nexport function funcSetOwner(ctx: wasmlib.ScFuncContext, f: sc.SetOwnerContext): void {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.state.owner().setValue(f.params.owner().value());\n}\n")))),(0,r.kt)("p",null,"Note that we only define a single owner here. Proper fall-back could require multiple\nowners in case the owner entity could disappear, which would allow others to take over\ninstead of the contract becoming immutable with regard to owner functionality. Again, we\ncannot stress enough how important it is to ",(0,r.kt)("strong",{parentName:"p"},"think through every aspect of a smart\ncontract before deployment"),"."),(0,r.kt)("p",null,"In the next section we will look at how a smart contract can\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/transfers"},"transfer tokens"),"."))}w.isMDXComponent=!0},54501:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(86010),r="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),o=n(67294),r=n(5730),i=n(20636),s=n(76602),l=n(63735),c=n(86010),u="tabList_uSqn",h="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,p=e.block,d=e.defaultValue,w=e.values,f=e.groupId,b=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=w?w:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),x=T.tabGroupChoices,O=T.setTabGroupChoices,N=(0,o.useState)(k),S=N[0],I=N[1],C=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=x[f];null!=j&&j!==S&&v.some((function(e){return e.value===j}))&&I(j)}var z=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==S&&(E(t),I(a),null!=f&&O(f,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},b)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:z,onClick:z},r,{className:(0,c.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),m?(0,o.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);