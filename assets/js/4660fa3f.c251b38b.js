"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35382],{8225:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(87462),s=t(63366),i=(t(67294),t(3905)),r=t(31531),o=["components"],l={title:"Examples",description:"Official IOTA Client Library Software Rust examples.",image:"/img/logo/iota_mark_light.png",keywords:["account","Rust","seed","generate","message"]},d=void 0,u={unversionedId:"libraries/rust/examples",id:"libraries/rust/examples",title:"Examples",description:"Official IOTA Client Library Software Rust examples.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/rust/examples.mdx",sourceDirName:"libraries/rust",slug:"/libraries/rust/examples",permalink:"/iota.rs/libraries/rust/examples",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/rust/examples.mdx",tags:[],version:"current",frontMatter:{title:"Examples",description:"Official IOTA Client Library Software Rust examples.",image:"/img/logo/iota_mark_light.png",keywords:["account","Rust","seed","generate","message"]},sidebar:"docs",previous:{title:"Getting Started With Rust",permalink:"/iota.rs/libraries/rust/getting_started"},next:{title:"API Reference",permalink:"/iota.rs/libraries/rust/api_reference"}},c={},p=[],m={toc:p};function h(e){var n=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It's possible to send transactions with iota.rs, but we strongly recommend to use official ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library together with ",(0,i.kt)("inlineCode",{parentName:"p"},"stronghold.rs")," enclave for value-based transfers. This combination incorporates the best security practices while dealing with seeds, related addresses and ",(0,i.kt)("inlineCode",{parentName:"p"},"UTXO"),". See more information on ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet docs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs\n")),(0,i.kt)("p",null,"Rename the ",(0,i.kt)("inlineCode",{parentName:"p"},".env.example")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,i.kt)("p",null,"Run the examples like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 01_get_info --release\n")),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 01_get_info --release\n\nuse iota_client::Client;\n\n/// In this example we will get information about the node\n\n#[tokio::main]\nasync fn main() {\n    // Create a client instance\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\n        // Node with optional authentication\n        // .with_node_auth(\n        //     "https://somechrysalisiotanode.com",\n        //     Some("Some JWT"),\n        //     Some(("name", "password")),\n        // )\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    let info = iota.get_info().await.unwrap();\n    println!("Node Info: {:?}", info);\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 02_generate_seed --release\n\nuse iota_client::crypto::signatures::ed25519::SecretKey;\n\n/// In this example we will generate a seed\n\n#[tokio::main]\nasync fn main() {\n    let secret_key = SecretKey::generate().unwrap();\n    println!("{}", hex::encode(&secret_key.to_bytes()));\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 03_generate_addresses --release\n\nuse iota_client::{api::GetAddressesBuilder, Client, Seed};\nextern crate dotenv;\nuse dotenv::dotenv;\nuse std::env;\n\n/// In this example we will create addresses from a seed defined in .env\n\n#[tokio::main]\nasync fn main() {\n    // Create a client instance\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    let seed = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap()).unwrap());\n\n    // Generate addresses with default account index and range\n    let addresses = iota.get_addresses(&seed).finish().await.unwrap();\n    println!("List of generated public addresses:\\n{:?}\\n", addresses);\n\n    // Generate addresses with custom account index and range\n    let addresses = iota\n        .get_addresses(&seed)\n        .with_account_index(0)\n        .with_range(0..4)\n        .finish()\n        .await\n        .unwrap();\n\n    println!("List of generated public addresses:\\n{:?}\\n", addresses);\n\n    // Generate public (false) & internal (true) addresses\n    let addresses = iota.get_addresses(&seed).with_range(0..4).get_all().await.unwrap();\n    println!("List of generated public and internal addresses:\\n{:?}\\n", addresses);\n\n    // Generate public addresses offline with the bech32_hrp defined\n    let addresses = GetAddressesBuilder::new(&seed)\n        .with_bech32_hrp("atoi".into())\n        .with_account_index(0)\n        .with_range(0..4)\n        .finish()\n        .await\n        .unwrap();\n\n    println!("List of offline generated public addresses:\\n{:?}\\n", addresses);\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 04_get_balance --release\n\nuse iota_client::{Client, Seed};\nextern crate dotenv;\nuse dotenv::dotenv;\nuse std::env;\n\n/// In this example we will get the account balance of a known seed and the balance and outputs of a known address\n\n#[tokio::main]\nasync fn main() {\n    // Create a client instance\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe") // Insert your node URL here\n        .unwrap()\n        .with_node_sync_disabled()\n        .finish()\n        .await\n        .unwrap();\n\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    let seed = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap()).unwrap());\n\n    let seed_balance = iota.get_balance(&seed).finish().await.unwrap();\n    println!("Account balance: {:?}i\\n", seed_balance);\n\n    let address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n    let response = iota.get_address().balance(address).await.unwrap();\n    println!("The balance of {:?} is {:?}i\\n", address, response.balance);\n\n    let outputs = iota.get_address().outputs(address, Default::default()).await.unwrap();\n\n    println!("The outputs of address {:?} are: {:?}", address, outputs);\n}\n'),(0,i.kt)(r.Z,{className:"languag-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 05_get_address_outputs --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will get the outputs of a known address\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n    let outputs = iota.get_address().outputs(address, Default::default()).await.unwrap();\n\n    println!("The outputs of address {:?} are: {:?}", address, outputs);\n    Ok(())\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 06_simple_message --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will send a message without a payload\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let message = iota.message().finish().await?;\n\n    println!(\n        "Empty message sent: https://explorer.iota.org/devnet/message/{}",\n        message.id().0\n    );\n    Ok(())\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 07_get_message_metadata --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will send a message and get the metadata for it\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let message = iota.message().finish().await?;\n\n    let metadata = iota.get_message().metadata(&message.id().0).await?;\n    println!("Message metadata: {:?}", metadata);\n    Ok(())\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 08_data_message --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will send a message without a payload\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        // .with_permanode("http://18.196.167.57:8000/api/permanode/", None, None)?\n        .finish()\n        .await?;\n\n    let message = iota\n        .message()\n        .with_index("Hello")\n        .with_data("Tangle".as_bytes().to_vec())\n        .finish()\n        .await?;\n\n    println!(\n        "Message sent https://explorer.iota.org/devnet/message/{}\\n",\n        message.id().0\n    );\n\n    let fetched_message_ids = iota.get_message().index("Hello").await.unwrap();\n    println!("Messages with Hello index: {:?}", fetched_message_ids);\n    Ok(())\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 09_transaction --release\n\nuse iota_client::{Client, Result, Seed};\nextern crate dotenv;\nuse dotenv::dotenv;\nuse std::env;\n\n/// In this example we will send a transaction\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    // This example uses dotenv, which is not safe for use in production\n    // Configure your own seed in ".env". Since the output amount cannot be zero, the seed must contain non-zero balance\n    dotenv().ok();\n    let seed_1 = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap())?);\n\n    let message = iota\n        .message()\n        .with_seed(&seed_1)\n        // Insert the output address and amount to spent. The amount cannot be zero.\n        .with_output(\n            // We generate an address from our seed so that we send the funds to ourselves\n            &iota.get_addresses(&seed_1).with_range(1..2).finish().await?[0],\n            1_000_000,\n        )?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction sent: https://explorer.iota.org/devnet/message/{}",\n        message.id().0\n    );\n    Ok(())\n}\n'),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 10_mqtt --features=mqtt --release\n\nuse iota_client::{bee_message::Message, Client, MqttEvent, Result, Topic};\nuse std::sync::{mpsc::channel, Arc, Mutex};\n\n// Connecting to a MQTT broker using raw ip doesn\'t work with TCP. This is a limitation of rustls.\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create a client instance\n    let mut iota = Client::builder()\n        .with_node("https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let (tx, rx) = channel();\n    let tx = Arc::new(Mutex::new(tx));\n\n    let mut event_rx = iota.mqtt_event_receiver();\n    tokio::spawn(async move {\n        while event_rx.changed().await.is_ok() {\n            let event = event_rx.borrow();\n            if *event == MqttEvent::Disconnected {\n                println!("mqtt disconnected");\n                std::process::exit(1);\n            }\n        }\n    });\n\n    iota.subscriber()\n        .with_topics(vec![Topic::new("milestones/latest")?, Topic::new("messages")?])\n        .subscribe(move |event| {\n            match event.topic.as_str() {\n                "messages" => {\n                    let message: Message = serde_json::from_str(&event.payload).unwrap();\n                    println!("{:?}", event);\n                    println!("{:?}", message);\n                }\n                _ => println!("{:?}", event),\n            }\n            tx.lock().unwrap().send(()).unwrap();\n        })\n        .await\n        .unwrap();\n\n    for i in 0..10 {\n        rx.recv().unwrap();\n        if i == 7 {\n            // unsubscribe from topic "messages", will continue to receive events for "milestones/latest"\n            iota.subscriber()\n                .with_topics(vec![Topic::new("messages")?])\n                .unsubscribe()\n                .await?;\n        }\n    }\n\n    iota.subscriber().disconnect().await?;\n    // alternatively\n    // iota.subscriber().unsubscribe().await?;\n    Ok(())\n}\n'),(0,i.kt)("p",null,"You can find more advanced examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/examples"},"examples")," folder."))}h.isMDXComponent=!0}}]);