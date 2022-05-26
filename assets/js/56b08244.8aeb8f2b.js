"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12845],{73308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",keywords:["how to","create identity","create credential","validate credential","add trusted authority","example"]},c="Trusted Authorities",l={unversionedId:"examples/node/trusted-authorities",id:"examples/node/trusted-authorities",title:"Trusted Authorities",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",source:"@site/content/build/integration-services/production/documentation/docs/examples/node/trusted-authorities.md",sourceDirName:"examples/node",slug:"/examples/node/trusted-authorities",permalink:"/integration-services/examples/node/trusted-authorities",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/node/trusted-authorities.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",keywords:["how to","create identity","create credential","validate credential","add trusted authority","example"]},sidebar:"docs",previous:{title:"Delete Users",permalink:"/integration-services/examples/node/delete-users"},next:{title:"Create Channel",permalink:"/integration-services/examples/node/create-channel"}},d={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trusted-authorities"},"Trusted Authorities"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/4-TrustedAuthorities.ts"},"example-4"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,a.kt)("a",{parentName:"p",href:"./how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creates an identity with username: ",(0,a.kt)("inlineCode",{parentName:"li"},"Driver"),"."),(0,a.kt)("li",{parentName:"ol"},"Creates a credential for the ",(0,a.kt)("inlineCode",{parentName:"li"},"Driver")," identity (the root identity is a trusted authority)."),(0,a.kt)("li",{parentName:"ol"},"Verifies a credential issued by this trusted authority."),(0,a.kt)("li",{parentName:"ol"},"Checks a credential (in the Tangle) that is issued by an unknown authority (it will be not valid). "),(0,a.kt)("li",{parentName:"ol"},"Adds the external issuer as trusted authority."),(0,a.kt)("li",{parentName:"ol"},"Checks same credential, now the issuer is trusted and the credential is valid.")),(0,a.kt)("p",null,"You can run the example with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-4\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);