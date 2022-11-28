"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(n),u=a,k=g["".concat(p,".").concat(u)]||g[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={description:"The peering API allows retrieving basic information about autopeering using the /autopeering/neighbors endpoint or the GetAutopeeringNeighbors() function in the client lib.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","peering api methods","neighbors","accepted neighbors","known peer"]},l="Peering API Methods",o={unversionedId:"apis/autopeering",id:"apis/autopeering",title:"Peering API Methods",description:"The peering API allows retrieving basic information about autopeering using the /autopeering/neighbors endpoint or the GetAutopeeringNeighbors() function in the client lib.",source:"@site/next/external/goshimmer/documentation/docs/apis/autopeering.md",sourceDirName:"apis",slug:"/apis/autopeering",permalink:"/next/goshimmer/apis/autopeering",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/apis/autopeering.md",tags:[],version:"current",frontMatter:{description:"The peering API allows retrieving basic information about autopeering using the /autopeering/neighbors endpoint or the GetAutopeeringNeighbors() function in the client lib.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","peering api methods","neighbors","accepted neighbors","known peer"]},sidebar:"docs",previous:{title:"Info API Methods",permalink:"/next/goshimmer/apis/info"},next:{title:"Manual Peering API methods",permalink:"/next/goshimmer/apis/manual_peering"}},p={},s=[{value:"<code>/autopeering/neighbors</code>",id:"autopeeringneighbors",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - <code>GetAutopeeringNeighbors</code>",id:"client-lib---getautopeeringneighbors",level:4},{value:"Response examples",id:"response-examples",level:4},{value:"Results",id:"results",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"peering-api-methods"},"Peering API Methods"),(0,a.kt)("p",null,"The peering API allows retrieving basic information about autopeering."),(0,a.kt)("p",null,"The API provides the following functions and endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#autopeeringneighbors"},"/autopeering/neighbors"))),(0,a.kt)("p",null,"Client lib APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#client-lib---getautopeeringneighbors"},"GetAutopeeringNeighbors()"))),(0,a.kt)("h2",{id:"autopeeringneighbors"},(0,a.kt)("inlineCode",{parentName:"h2"},"/autopeering/neighbors")),(0,a.kt)("p",null,"Returns the chosen and accepted neighbors of the node."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"known")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Required or Optional")),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"Return all known peers, set to ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," (default: ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},"int")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"curl"},"cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/autopeering/neighbors?known=1'\n")),(0,a.kt)("h4",{id:"client-lib---getautopeeringneighbors"},"Client lib - ",(0,a.kt)("inlineCode",{parentName:"h4"},"GetAutopeeringNeighbors")),(0,a.kt)("p",null,"Blocks can be retrieved via ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAutopeeringNeighbors(knownPeers bool) (*jsonmodels.GetNeighborsResponse, error)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"neighbors, err := goshimAPI.GetAutopeeringNeighbors(false)\nif err != nil {\n    // return error\n}\n\n// will print the response\nfmt.Println(string(neighbors))\n")),(0,a.kt)("h4",{id:"response-examples"},"Response examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chosen": [\n    {\n      "id": "PtBSYhniWR2",\n      "publicKey": "BogpestCotcmbB2EYKSsyVMywFYvUt1MwGh6nUot8g5X",\n      "services": [\n        {\n          "id": "peering",\n          "address": "178.254.42.235:14626"\n        },\n        {\n          "id": "gossip",\n          "address": "178.254.42.235:14666"\n        }\n      ]\n    }\n  ],\n  "accepted": [\n    {\n      "id": "CRPFWYijV1T",\n      "publicKey": "GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo",\n      "services": [\n        {\n          "id": "peering",\n          "address": "35.214.101.88:14626"\n        },\n        {\n          "id": "gossip",\n          "address": "35.214.101.88:14666"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h4",{id:"results"},"Results"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returned type")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"known")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]Neighbor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of known peers. Only returned when parameter is set.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"chosen")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]Neighbor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of chosen peers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"accepted")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]Neighbor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of accepted peers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"error")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"Neighbor"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Comparable node identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Public key used to verify signatures.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"services")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]PeerService")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of exposed services.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"PeerService"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Type of service.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Network address of the service.")))))}m.isMDXComponent=!0}}]);