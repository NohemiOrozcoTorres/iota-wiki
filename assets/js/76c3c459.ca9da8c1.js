"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9533],{4231:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),c=t(87308),s=t(24970),i=["components"],l={title:"How To Create An Account"},u=void 0,d={unversionedId:"libraries/nodejs/how_to/create_account",id:"libraries/nodejs/how_to/create_account",title:"How To Create An Account",description:"All the examples expect you to set your custom password  in the .env file and the first one also requires a mnemonic:",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/0_create_account.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/create_account",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/create_account",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/0_create_account.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How To Create An Account"},sidebar:"docs",previous:{title:"Getting Started with Node.js",permalink:"/wallet.rs/develop/libraries/nodejs/getting_started"},next:{title:"How To Generate An Address",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/generate_address"}},p={},m=[],w={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All the examples expect you to set your custom password  in the ",(0,r.kt)("em",{parentName:"p"},".env")," file and the first one also requires a mnemonic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\nMNEMONIC="here your 24 word mnemonic, it is the only way to recover your account if you ever forget your password and/or lose the stronghold file"\n')),(0,r.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example creates a new database and account\n */\n\nrequire('dotenv').config({ path: '../.env' });\nconst { AccountManager, CoinType } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = await createAccountManager();\n\n        const account = await manager.createAccount({\n            alias: 'Alice',\n        });\n        console.log('Account created:', account);\n\n        const secondAccount = await manager.createAccount({\n            alias: 'Bob',\n        });\n        console.log('Account created:', secondAccount);\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nasync function createAccountManager() {\n    const accountManagerOptions = {\n        storagePath: './alice-database',\n        clientOptions: {\n            nodes: ['https://api.testnet.shimmer.network'],\n            localPow: true,\n        },\n        coinType: CoinType.Shimmer,\n        secretManager: {\n            Stronghold: {\n                snapshotPath: `./wallet.stronghold`,\n                password: `${process.env.SH_PASSWORD}`,\n            },\n        },\n    };\n\n    const manager = new AccountManager(accountManagerOptions);\n    await manager.storeMnemonic(process.env.MNEMONIC);\n    return manager;\n}\n\nrun();\n"),(0,r.kt)(s.ZP,{mdxType:"MoreExamples"}))}h.isMDXComponent=!0},24970:function(e,n,t){t.d(n,{ZP:function(){return i}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),c=["components"],s={toc:[]};function i(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}i.isMDXComponent=!0}}]);