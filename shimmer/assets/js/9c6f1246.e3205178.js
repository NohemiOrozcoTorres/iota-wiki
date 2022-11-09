"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64319],{7525:(t,n,e)=>{e.d(n,{ZP:()=>u});var o=e(87462),a=(e(67294),e(3905));const i={toc:[]};function u(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},i,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}u.isMDXComponent=!0},16549:(t,n,e)=>{e.d(n,{ZP:()=>u});var o=e(87462),a=(e(67294),e(3905));const i={toc:[]};function u(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},i,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}u.isMDXComponent=!0},4457:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>v,contentTitle:()=>w,default:()=>x,frontMatter:()=>b,metadata:()=>f,toc:()=>g});var o=e(87462),a=(e(67294),e(3905)),i=e(34259),u=e(18679),l=e(69319);const r={toc:[]};function s(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},r,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},'package output_builder;\n\nimport org.iota.Client;\nimport org.iota.types.*;\nimport org.iota.types.ids.AliasId;\nimport org.iota.types.output_builder.FoundryOutputBuilderParams;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class BuildFoundryOutput {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple foundry output.\n        AliasId aliasId = new AliasId("0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa");\n        int serialNumber = 1;\n        NativeToken[] nativeTokens = new NativeToken[]{new NativeToken("{ id: \'0x081e6439529b020328c08224b43172f282cb16649d50c891fa156365323667e47a0100000000\', amount: \'0x32\' }")};\n        TokenScheme tokenScheme = new TokenScheme("{ type: 0, meltedTokens: \'0x0\', mintedTokens: \'0x32\', maximumSupply: \'0x64\' }");\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{new UnlockCondition("{ type: 6, address: { type: 8, aliasId: " + aliasId + "  } }")};\n        FoundryOutputBuilderParams params = new FoundryOutputBuilderParams()\n                .withNativeTokens(nativeTokens)\n                .withSerialNumber(serialNumber)\n                .withTokenScheme(tokenScheme)\n                .withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildFoundryOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}s.isMDXComponent=!0;const d={toc:[]};function p(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 5,\n  "amount": "59800",\n  "nativeTokens": [\n    {\n      "id": "0x081e6439529b020328c08224b43172f282cb16649d50c891fa156365323667e47a0100000000",\n      "amount": "0x32"\n    }\n  ],\n  "serialNumber": 1,\n  "tokenScheme": {\n    "type": 0,\n    "mintedTokens": "0x32",\n    "meltedTokens": "0x0",\n    "maximumSupply": "0x64"\n  },\n  "unlockConditions": [\n    {\n      "type": 6,\n      "address": {\n        "type": 8,\n        "aliasId": "0xa5c28d5baa951de05e375fb19134ea51a918f03acc2d0cee011a42b298d3effa"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0;var c=e(16549);var _=e(7525);const m={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function k(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(_.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example foundry --release\n\nuse iota_client::{\n    block::{\n        address::AliasAddress,\n        output::{\n            feature::{IssuerFeature, MetadataFeature, SenderFeature},\n            unlock_condition::{\n                AddressUnlockCondition, GovernorAddressUnlockCondition, ImmutableAliasAddressUnlockCondition,\n                StateControllerAddressUnlockCondition, UnlockCondition,\n            },\n            AliasId, AliasOutputBuilder, BasicOutputBuilder, Feature, FoundryId, FoundryOutputBuilder, NativeToken,\n            Output, OutputId, SimpleTokenScheme, TokenId, TokenScheme,\n        },\n        payload::{transaction::TransactionEssence, Payload},\n    },\n    node_api::indexer::query_parameters::QueryParameter,\n    request_funds_from_faucet,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\nuse primitive_types::U256;\n\n/// In this example we will create an foundry output\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let token_supply = client.get_token_supply().await?;\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    println!(\n        "{}",\n        request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?\n    );\n    tokio::time::sleep(std::time::Duration::from_secs(20)).await;\n\n    //////////////////////////////////\n    // create new alias output\n    //////////////////////////////////\n\n    let alias_output_builder = AliasOutputBuilder::new_with_amount(2_000_000, AliasId::null())?\n        .add_feature(Feature::Sender(SenderFeature::new(address)))\n        .add_feature(Feature::Metadata(MetadataFeature::new(vec![1, 2, 3])?))\n        .add_immutable_feature(Feature::Issuer(IssuerFeature::new(address)))\n        .add_unlock_condition(UnlockCondition::StateControllerAddress(\n            StateControllerAddressUnlockCondition::new(address),\n        ))\n        .add_unlock_condition(UnlockCondition::GovernorAddress(GovernorAddressUnlockCondition::new(\n            address,\n        )));\n\n    let outputs = vec![alias_output_builder.clone().finish_output(token_supply)?];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction with new alias output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////////////////////\n    // create foundry output and mint 70 native tokens\n    //////////////////////////////////////////////////\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let alias_id = AliasId::from(&alias_output_id);\n    let token_scheme = TokenScheme::Simple(SimpleTokenScheme::new(\n        U256::from(70u8),\n        U256::from(0u8),\n        U256::from(100u8),\n    )?);\n    let foundry_id = FoundryId::build(\n        &AliasAddress::from(AliasId::from(&alias_output_id)),\n        1,\n        token_scheme.kind(),\n    );\n    let token_id = TokenId::from(foundry_id);\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(1_000_000)?\n            .with_alias_id(alias_id)\n            .with_state_index(1)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        FoundryOutputBuilder::new_with_amount(1_000_000, 1, token_scheme)?\n            .add_native_token(NativeToken::new(token_id, U256::from(70u8))?)\n            .add_unlock_condition(UnlockCondition::ImmutableAliasAddress(\n                ImmutableAliasAddressUnlockCondition::new(AliasAddress::from(alias_id)),\n            ))\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(alias_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with foundry output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // melt 20 native token\n    //////////////////////////////////\n\n    let foundry_output_builder = FoundryOutputBuilder::new_with_amount(\n        1_000_000,\n        1,\n        TokenScheme::Simple(SimpleTokenScheme::new(\n            U256::from(70u8),\n            U256::from(20u8),\n            U256::from(100u8),\n        )?),\n    )?\n    .add_unlock_condition(UnlockCondition::ImmutableAliasAddress(\n        ImmutableAliasAddressUnlockCondition::new(AliasAddress::from(alias_id)),\n    ));\n\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let foundry_output_id = get_foundry_output_id(block.payload().unwrap())?;\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(1_000_000)?\n            .with_alias_id(alias_id)\n            .with_state_index(2)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        foundry_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(alias_output_id.into())?\n        .with_input(foundry_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with native tokens burnt sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // send native token\n    //////////////////////////////////\n\n    let basic_output_builder = BasicOutputBuilder::new_with_amount(57_700)?\n        .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)));\n\n    let alias_output_id = get_alias_output_id(block.payload().unwrap())?;\n    let foundry_output_id = get_foundry_output_id(block.payload().unwrap())?;\n    let outputs = vec![\n        alias_output_builder\n            .clone()\n            .with_amount(57_700)?\n            .with_alias_id(alias_id)\n            .with_state_index(3)\n            .with_foundry_counter(1)\n            .finish_output(token_supply)?,\n        foundry_output_builder.finish_output(token_supply)?,\n        basic_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    // get additional input for the new basic output\n    let output_ids = client\n        .basic_output_ids(vec![QueryParameter::Address(\n            address.to_bech32(client.get_bech32_hrp().await?),\n        )])\n        .await?;\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(output_ids[0].into())?\n        .with_input(alias_output_id.into())?\n        .with_input(foundry_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Transaction with native tokens sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // send native token without foundry\n    //////////////////////////////////\n    let basic_output_id = get_basic_output_id_with_native_tokens(block.payload().unwrap())?;\n    let outputs = vec![\n        basic_output_builder\n            .clone()\n            .add_native_token(NativeToken::new(token_id, U256::from(50u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(basic_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Second transaction with native tokens sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // burn native token without foundry\n    //////////////////////////////////\n    let basic_output_id = get_basic_output_id_with_native_tokens(block.payload().unwrap())?;\n    let outputs = vec![\n        basic_output_builder\n            .add_native_token(NativeToken::new(token_id, U256::from(30u8))?)\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_burning_allowed(true)\n        .with_input(basic_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!(\n        "Third transaction with native tokens burned sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    Ok(())\n}\n\n// helper function to get the output id for the first alias output\nfn get_alias_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Alias(_alias_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No alias output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n\n// helper function to get the output id for the first foundry output\nfn get_foundry_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Foundry(_foundry_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No foundry output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n\n// helper function to get the output id for the first basic output with native tokens\nfn get_basic_output_id_with_native_tokens(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Basic(basic_output) = output {\n                    if !basic_output.native_tokens().is_empty() {\n                        return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                    }\n                }\n            }\n            panic!("No basic output with native tokens in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example foundry --release"))}k.isMDXComponent=!0;const h={toc:[]};function y(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},h,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction with new alias output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x6f10bd7234c7958992d9b0df269234f01afa96aecb6b5ed04f26786811640df7\nTransaction with foundry output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0xbcf2281c2557106426f7f622051ab8de233a430df48b38a826a863eeb9ee187e\nTransaction with native tokens burnt sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x924a2385cddfffe1f46c1460160121b28c40a19e0e8011e04c7c2fe8d1d80ccd\n")))}y.isMDXComponent=!0;const b={title:"Build a Foundry Output",description:"The following example will build a Foundry output.",keywords:["how to","block","output","Foundry","java","nodejs","python","rust"]},w=void 0,f={unversionedId:"how_tos/build_foundry_output",id:"how_tos/build_foundry_output",title:"Build a Foundry Output",description:"The following example will build a Foundry output.",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/12_build_foundry_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_foundry_output",permalink:"/shimmer/iota.rs/how_tos/build_foundry_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/12_build_foundry_output.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Build a Foundry Output",description:"The following example will build a Foundry output.",keywords:["how to","block","output","Foundry","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Build an NFT Output",permalink:"/shimmer/iota.rs/how_tos/build_nft_output"},next:{title:"Build an Alias Output",permalink:"/shimmer/iota.rs/how_tos/build_alias_output"}},v={},g=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:g};function x(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,o.Z)({},T,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,a.kt)("li",{parentName:"ol"},"Build a Foundry output.")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(k,{mdxType:"RustCode"})),(0,a.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(c.ZP,{mdxType:"NodejsCode"})),(0,a.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(c.ZP,{mdxType:"PythonCode"})),(0,a.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(y,{mdxType:"RustOutput"})),(0,a.kt)(u.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(c.ZP,{mdxType:"NodejsOutput"})),(0,a.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(c.ZP,{mdxType:"PythonOutput"})),(0,a.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"JavaOutput"}))))}x.isMDXComponent=!0},18679:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(67294),a=e(86010);const i="tabItem_Ymn6";function u(t){let{children:n,hidden:e,className:u}=t;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,u),hidden:e},n)}},34259:(t,n,e)=>{e.d(n,{Z:()=>_});var o=e(87462),a=e(67294),i=e(86010),u=e(51048),l=e(33609),r=e(1943),s=e(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(t){var n;const{lazy:e,block:u,defaultValue:c,values:_,groupId:m,className:k}=t,h=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=_??h.map((t=>{let{props:{value:n,label:e,attributes:o}}=t;return{value:n,label:e,attributes:o}})),b=(0,l.l)(y,((t,n)=>t.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===c?c:c??(null==(n=h.find((t=>t.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==w&&!y.some((t=>t.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,r.U)(),[g,T]=(0,a.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=m){const t=f[m];null!=t&&t!==g&&y.some((n=>n.value===t))&&T(t)}const C=t=>{const n=t.currentTarget,e=x.indexOf(n),o=y[e].value;o!==g&&(N(n),T(o),null!=m&&v(m,String(o)))},I=t=>{var n;let e=null;switch(t.key){case"ArrowRight":{const n=x.indexOf(t.currentTarget)+1;e=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;e=x[n]??x[x.length-1];break}}null==(n=e)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},y.map((t=>{let{value:n,label:e,attributes:u}=t;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:t=>x.push(t),onKeyDown:I,onFocus:C,onClick:C},u,{className:(0,i.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":g===n})}),e??n)}))),e?(0,a.cloneElement)(h.filter((t=>t.props.value===g))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((t,n)=>(0,a.cloneElement)(t,{key:n,hidden:t.props.value!==g})))))}function _(t){const n=(0,u.Z)();return a.createElement(c,(0,o.Z)({key:String(n)},t))}}}]);