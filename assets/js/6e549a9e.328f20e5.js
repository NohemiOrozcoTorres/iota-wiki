"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={description:"How to run your own private Chrysalis Tangle",image:"/img/Banner/banner_hornet_private_tangle.png",keywords:["IOTA Node","Hornet Node","Private Tangle","Chrysalis","Coordinator","Wallet","how to"]},i="Private Tangle",l={unversionedId:"how_tos/private_tangle",id:"how_tos/private_tangle",title:"Private Tangle",description:"How to run your own private Chrysalis Tangle",source:"@site/iota/external/hornet/production/documentation/docs/how_tos/private_tangle.md",sourceDirName:"how_tos",slug:"/how_tos/private_tangle",permalink:"/hornet/how_tos/private_tangle",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/production/documentation/iota/external/hornet/production/documentation/docs/how_tos/private_tangle.md",tags:[],version:"current",frontMatter:{description:"How to run your own private Chrysalis Tangle",image:"/img/Banner/banner_hornet_private_tangle.png",keywords:["IOTA Node","Hornet Node","Private Tangle","Chrysalis","Coordinator","Wallet","how to"]},sidebar:"mySidebar",previous:{title:"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",permalink:"/hornet/how_tos/bootstrap_from_a_genesis_snapshot"},next:{title:"Post-installation",permalink:"/hornet/how_tos/post_installation"}},s={},p=[{value:"Preparations",id:"preparations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Start the Coordinator",id:"start-the-coordinator",level:2},{value:"Start Additional Nodes",id:"start-additional-nodes",level:2},{value:"Use a Wallet to Manage the Tokens",id:"use-a-wallet-to-manage-the-tokens",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-tangle"},"Private Tangle"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hornet Node Private Tangle",src:n(61203).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"This is a small tutorial on how to run your own private ",(0,o.kt)("a",{parentName:"p",href:"https://chrysalis.iota.org/"},"Chrysalis")," tangle."),(0,o.kt)("p",null,"You will need to set up ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/learn/about-iota/an-introduction-to-iota#the-coordinator"},"a Coordinator")," and at least one additional ",(0,o.kt)("a",{parentName:"p",href:"/hornet/getting_started/"},"node")," and distribute some tokens to an address that you can manage using a wallet. You will do this by running some scripts from the ",(0,o.kt)("em",{parentName:"p"},"private_tangle")," folder that you can find in the HORNET repository."),(0,o.kt)("h2",{id:"preparations"},"Preparations"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/hornet/how_tos/hornet_apt_repository"},"Build HORNET"),"."),(0,o.kt)("li",{parentName:"ol"},"Install a wallet built for Chrysalis, for example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"the cli-wallet"),".")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The scripts in the ",(0,o.kt)("em",{parentName:"p"},"private_tangle")," folder of the HORNET repository, which you will use to run the Coordinator and the nodes, are preconfigured. By default, they will distribute the tokens to the following address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"atoi1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluehe53e\n")),(0,o.kt)("p",null,"If you want to use an existing address, search for your address in ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet"},"the explorer")," and look for the corresponding ED25519 address. You can find the ",(0,o.kt)("em",{parentName:"p"},"create_snapshot_private_tangle")," script in the ",(0,o.kt)("em",{parentName:"p"},"private_tangle")," directory. You will need to update the following line to use your own ED25519 address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\ngo run "..\\main.go" tool snap-gen --networkID private_tangle1 --mintAddress [ADDRESS] --outputPath "snapshots\\private_tangle1\\full_snapshot.bin"\n...\n')),(0,o.kt)("h2",{id:"start-the-coordinator"},"Start the Coordinator"),(0,o.kt)("p",null,"In the HORNET repository, change to the ",(0,o.kt)("em",{parentName:"p"},"private_tangle")," directory and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_coo_bootstrap")," script. This will create all the necessary files to run the network, distribute the tokens to the address you configured, and start the Coordinator."),(0,o.kt)("p",null,"In subsequent starts, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_coo")," script, to skip the bootstrap step."),(0,o.kt)("h2",{id:"start-additional-nodes"},"Start Additional Nodes"),(0,o.kt)("p",null,"To start additional nodes, you can use the ",(0,o.kt)("em",{parentName:"p"},"run")," scripts provided in the +private",(0,o.kt)("em",{parentName:"p"},"tangle")," folder. You can run them on the same device, as they are preconfigured to listen on different ports."),(0,o.kt)("p",null,"Congratulations, you are now running a private network! You can find the dashboard at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8081"},"http://localhost:8081"),", and use it to monitor your Coordinator. You can log in to the Dashboard using ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," as username and password."),(0,o.kt)("h2",{id:"use-a-wallet-to-manage-the-tokens"},"Use a Wallet to Manage the Tokens"),(0,o.kt)("p",null,"To access the tokens on the network, you need to take one more step. If you used the default configuration, you can use the following mnemonic to set up a wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"giant dynamic museum toddler six deny defense ostrich bomb access mercy blood explain muscle shoot shallow glad autumn author calm heavy hawk abuse rally\n")),(0,o.kt)("p",null,"You can now connect your wallet to one of the nodes that are running. You should be able to find the tokens distributed to your wallet."),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/cli-wallet"},"cli-wallet"),", you should run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> wallet mnemonic "giant dynamic museum toddler six deny defense ostrich bomb access mercy blood explain muscle shoot shallow glad autumn author calm heavy hawk abuse rally"\n> wallet new --node "http://localhost:14266" --alias EXAMPLE\n')),(0,o.kt)("p",null,"You are now ready start using your own private tangle!"))}d.isMDXComponent=!0},61203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner_hornet_private_tangle-44269a4533cbb6b132f26a80bf4776eb.png"}}]);