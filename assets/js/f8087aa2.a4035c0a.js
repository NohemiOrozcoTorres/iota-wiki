"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73787],{22414:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=a(87462),l=a(63366),s=(a(67294),a(3905)),i=["components"],o={description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.2MessageLayout",keywords:["message","node","parent","strong","parent type"]},r="2.2 Message Layout",u={unversionedId:"2.2 Message Layout",id:"2.2 Message Layout",title:"2.2 Message Layout",description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",source:"@site/content/build/iota-2.0-research-specifications/2.2 Message Layout.md",sourceDirName:".",slug:"/2.2MessageLayout",permalink:"/IOTA-2.0-Research-Specifications/2.2MessageLayout",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/content/build/iota-2.0-research-specifications/2.2 Message Layout.md",tags:[],version:"current",frontMatter:{description:"This section describes the message layout, its syntactical validation and additional metadata that may be stored by a node for a message.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.2MessageLayout",keywords:["message","node","parent","strong","parent type"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/IOTA-2.0-Research-Specifications/1.1Introduction"},next:{title:"2.3 Standard Payloads Layout",permalink:"/IOTA-2.0-Research-Specifications/2.3StandardPayloadsLayout"}},d={},c=[{value:"2.2.1 Parameters",id:"221-parameters",level:2},{value:"2.2.1.1 Parameter Default Values",id:"2211-parameter-default-values",level:3},{value:"2.2.2 Message Structure",id:"222-message-structure",level:2},{value:"2.2.3 Message ID",id:"223-message-id",level:2},{value:"2.2.4 Syntactical Validation",id:"224-syntactical-validation",level:2},{value:"2.2.5 Semantic Validation",id:"225-semantic-validation",level:2},{value:"2.2.6 Metadata",id:"226-metadata",level:2}],k={toc:c};function p(e){var t=e.components,a=(0,l.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"22-message-layout"},"2.2 Message Layout"),(0,s.kt)("p",null,"This section describes the ",(0,s.kt)("em",{parentName:"p"},"Message Layout"),", its syntactical validation and additional metadata that may be stored by a node for a message."),(0,s.kt)("h2",{id:"221-parameters"},"2.2.1 Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," The maximum allowed message size."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS")," The minimum amount of strong parents a message must reference.")),(0,s.kt)("h3",{id:"2211-parameter-default-values"},"2.2.1.1 Parameter Default Values"),(0,s.kt)("p",null,"The following values shall be set as the default for the above parameters on initiation of the node application: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," = 64KB"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS"),"  = 1")),(0,s.kt)("h2",{id:"222-message-structure"},"2.2.2 Message Structure"),(0,s.kt)("p",null,"The structure of a Tangle message is defined in Table 2.2-1 below. "),(0,s.kt)("table",null,(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Version"),(0,s.kt)("td",null,"uint8"),(0,s.kt)("td",null,"The message version. The schema specified in this specification is for version ",(0,s.kt)("strong",null,"1")," only. ")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Parents count"),(0,s.kt)("td",null,"uint8"),(0,s.kt)("td",null,"The amount of parents preceding the current message.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Parents type"),(0,s.kt)("td",null,"uint8"),(0,s.kt)("td",null,"Bitwise encoding of parent type matching the order of preceding parents starting at ",(0,s.kt)("code",null,"least significant bit"),". ",(0,s.kt)("code",null,"1")," indicates a strong parent, while ",(0,s.kt)("code",null,"0")," signals a weak parent. At least ",(0,s.kt)("code",null,"MIN_STRONG_PARENTS")," parent type must be strong.")),(0,s.kt)("tr",null,(0,s.kt)("td",{colSpan:"1"},"Parents ",(0,s.kt)("code",null,"between(1,8)")),(0,s.kt)("td",{colSpan:"2"},(0,s.kt)("details",{open:"true"},(0,s.kt)("summary",null,"Parents, ordered by hash ASC"),(0,s.kt)("table",null,(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Parent"),(0,s.kt)("td",null,"ByteArray[32]"),(0,s.kt)("td",null,"The Message ID of the ",(0,s.kt)("i",null,"parent Message"),"."))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Issuer public key (Ed25519)"),(0,s.kt)("td",null,"ByteArray[32]"),(0,s.kt)("td",null,"The public key of the node issuing the message.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Issuing timestamp"),(0,s.kt)("td",null,"time"),(0,s.kt)("td",null,"A value that shall represent the issuance time of the message.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Payload length"),(0,s.kt)("td",null,"uint32"),(0,s.kt)("td",null,"The length of the Payload in bytes. Since its type may be unknown to the node, it must be declared in advance. 0 length means no payload will be attached.")),(0,s.kt)("tr",null,(0,s.kt)("td",{colSpan:"1"},"Payload"),(0,s.kt)("td",{colSpan:"2"},(0,s.kt)("details",{open:"true"},(0,s.kt)("summary",null,"Generic Payload"),(0,s.kt)("blockquote",null,"An outline of a general payload"),(0,s.kt)("table",null,(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Payload Type"),(0,s.kt)("td",null,"uint32"),(0,s.kt)("td",null,'The type of the payload. It will instruct the node how to parse the fields that follow. Types in the range of 0-127 are "core types", that all nodes are expected to know.')),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Data Fields"),(0,s.kt)("td",null,"ANY"),(0,s.kt)("td",null,"A sequence of fields, where the structure depends on ",(0,s.kt)("code",null,"Payload Type"),"."))))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Nonce"),(0,s.kt)("td",null,"uint64"),(0,s.kt)("td",null,"The nonce which lets this message fulfill the Rate Control requirement.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Signature (Ed25519)"),(0,s.kt)("td",null,"ByteArray[64]"),(0,s.kt)("td",null,"Signature of the issuing node's private key signing the BLAKE2b-256 hash of the entire message bytes.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Table 2.2.1:")," Message Structure."),(0,s.kt)("h2",{id:"223-message-id"},"2.2.3 Message ID"),(0,s.kt)("p",null,"BLAKE2b-256 hash of the byte contents of the message. It shall be used by the nodes to index the messages and by external APIs."),(0,s.kt)("h2",{id:"224-syntactical-validation"},"2.2.4 Syntactical Validation"),(0,s.kt)("p",null,"Messages that do not pass the Syntactical Validation ",(0,s.kt)("em",{parentName:"p"},"shall be")," discarded. Only syntactically valid messages continue in the data flow, i.e., shall be allowed to pass to the Semantic Validation step."),(0,s.kt)("p",null,"A message is syntactically valid if:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The message length does not exceed ",(0,s.kt)("inlineCode",{parentName:"li"},"MAX_MESSAGE_SIZE")," bytes."),(0,s.kt)("li",{parentName:"ol"},"When the message parsing is complete, there are not any trailing bytes left that were not parsed."),(0,s.kt)("li",{parentName:"ol"},"At least 1 and at most 8 distinct parents are given, ordered ASC and at least ",(0,s.kt)("inlineCode",{parentName:"li"},"MIN_STRONG_PARENTS")," are strong parents. ")),(0,s.kt)("h2",{id:"225-semantic-validation"},"2.2.5 Semantic Validation"),(0,s.kt)("p",null,"Messages that do not pass the Semantic Validation ",(0,s.kt)("em",{parentName:"p"},"shall be")," discarded. Only semantically valid messages shall be allowed to continue in the data flow."),(0,s.kt)("p",null,"A message is semantically valid if:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Message PoW Hash contains at least the number of leading 0 defined as required by the Rate Control module (see ",(0,s.kt)("a",{parentName:"li",href:"./4.5RateControl"},"Section 4.5 - Rate Control"),"."),(0,s.kt)("li",{parentName:"ol"},"The signature of the issuing node is valid."),(0,s.kt)("li",{parentName:"ol"},"It passes the parents age checks (see ",(0,s.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),").")),(0,s.kt)("h2",{id:"226-metadata"},"2.2.6 Metadata"),(0,s.kt)("p",null,"In addition to a message itself, a node may store additional data that describes its local perception of a message which is not part of the Tangle ('Message metadata'). Where such metadata is defined, the metadata element names and types defined in Table 2.2-2 below shall be used. "),(0,s.kt)("table",null,(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"receivedTime"),(0,s.kt)("td",null,"time"),(0,s.kt)("td",null,"The local time the message was received by the node.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"solid"),(0,s.kt)("td",null,"bool"),(0,s.kt)("td",null,"Denotes whether a message is solid, i.e., its past cone is known.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"solidificationTime"),(0,s.kt)("td",null,"time"),(0,s.kt)("td",null,"The local time the message got solid.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"branchID"),(0,s.kt)("td",null,"ByteArray[32]"),(0,s.kt)("td",null,"The branch ID of the message, i.e., the part of the Tangle where the message is located.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"scheduled"),(0,s.kt)("td",null,"bool"),(0,s.kt)("td",null,"Denotes whether a message was scheduled by the scheduler.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"booked"),(0,s.kt)("td",null,"bool"),(0,s.kt)("td",null,"Denotes whether a message was booked and therefore is part of the local Tangle.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"eligible"),(0,s.kt)("td",null,"bool"),(0,s.kt)("td",null,"Denotes whether a message is eligible, i.e., it's timestamp is good.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"invalid"),(0,s.kt)("td",null,"bool"),(0,s.kt)("td",null,"Denotes whether a message has been deemed invalid, i.e., it or its parents do not pass all checks from filters to message booker.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"opinion"),(0,s.kt)("td",null,"Opinion"),(0,s.kt)("td",null,"Contains the node's opinion on the issuing timestamp of a message. ")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Table 2.2.2:")," Message Metadata."))}p.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=u(a),p=l,m=k["".concat(r,".").concat(p)]||k[p]||c[p]||s;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);