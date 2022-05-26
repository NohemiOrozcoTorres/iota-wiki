"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35861],{50413:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={},l=void 0,p={unversionedId:"libraries/java/api/UtxoInput",id:"libraries/java/api/UtxoInput",title:"UtxoInput",description:"Represents an input referencing an output.",source:"@site/content/build/wallet.rs/production/documentation/docs/libraries/java/api/UtxoInput.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/UtxoInput",permalink:"/wallet.rs/libraries/java/api/UtxoInput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/libraries/java/api/UtxoInput.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"from(id, index): UtxoInput",id:"fromid-index-utxoinput",level:3},{value:"transactionId(): TransactionId",id:"transactionid-transactionid",level:3},{value:"index(): int",id:"index-int",level:3}],s={toc:d};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents an input referencing an output."),(0,i.kt)("h3",{id:"fromid-index-utxoinput"},"from(id, index): ",(0,i.kt)("a",{parentName:"h3",href:"#utxoinput"},"UtxoInput")),(0,i.kt)("p",null,"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"UtxoInput")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#transactionid"},"TransactionId")),(0,i.kt)("td",{parentName:"tr",align:null},"The ouput Id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"The output Index")))),(0,i.kt)("h3",{id:"transactionid-transactionid"},"transactionId(): ",(0,i.kt)("a",{parentName:"h3",href:"#transactionid"},"TransactionId")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransactionId")," of the Output."),(0,i.kt)("h3",{id:"index-int"},"index(): int"),(0,i.kt)("p",null,"Returns the index of the Output."))}f.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);