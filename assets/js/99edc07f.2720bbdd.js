"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84080],{91418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));var o=n(54411),r=n(43305),s=n(44393);const l={title:"Storage Interface",sidebar_label:"Storage Interface",description:"Explain the need for the storage interface and how it can be implemented",image:"/img/Identity_icon.png",keywords:["storage","storage interface","storage adapter","account","signing","encryption"]},d=void 0,c={unversionedId:"concepts/advanced/storage_interface",id:"concepts/advanced/storage_interface",title:"Storage Interface",description:"Explain the need for the storage interface and how it can be implemented",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/concepts/advanced/storage_interface.mdx",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/storage_interface",permalink:"/identity.rs/0.5/concepts/advanced/storage_interface",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/concepts/advanced/storage_interface.mdx",tags:[],version:"current",frontMatter:{title:"Storage Interface",sidebar_label:"Storage Interface",description:"Explain the need for the storage interface and how it can be implemented",image:"/img/Identity_icon.png",keywords:["storage","storage interface","storage adapter","account","signing","encryption"]},sidebar:"docs",previous:{title:"DID Messages",permalink:"/identity.rs/0.5/concepts/advanced/did_messages"},next:{title:"Overview",permalink:"/identity.rs/0.5/libraries/overview"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Layout",id:"storage-layout",level:2},{value:"Identifiers",id:"identifiers",level:3},{value:"Representations",id:"representations",level:3},{value:"Example layout",id:"example-layout",level:3},{value:"Indexing",id:"indexing",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Challenges",id:"challenges",level:3},{value:"Storage Test Suite",id:"storage-test-suite",level:3},{value:"Examples",id:"examples",level:3}],p={toc:h};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The high-level account API takes care of publishing updates to an identity and storing secrets securely. It does the latter by using an implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," interface. In this section, we will go into more depth of the interface, and how to implement that interface."),(0,i.kt)("p",null,"The key idea behind the interface is strongly inspired by the architecture of key management systems (KMS) or secure enclaves: once private keys are entered into the system, they can never be retrieved again. Instead, all operations using the key will have to go through that system. This approach is what allows ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," implementations to be architected more securely than simply storing and loading private keys from a regular database. Of course, the security is directly dependent on the concrete implementation, which is why we provide one such implementation using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/"},"Stronghold"),", and strongly recommend using it. However, there are cases where one cannot use ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," or may want to integrate key management of identities into their own KMS or similar, which is why the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," interface is an abstraction over such systems. Any implementation of that interface can then be used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),"."),(0,i.kt)("p",null,"The storage interface has three major categories of functions. A brief overview of those functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DID Operations: Management of identities.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did_create"),": Based on a private key, or a generated one, creates a new DID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did_list"),": List all DIDs in this ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did_exists"),": Returns whether the given DID exists in this ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did_purge"),": Wipes all data related to the given DID."))),(0,i.kt)("li",{parentName:"ul"},"Key Operations: Various functionality to managing cryptographic keys.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_generate"),": Generates a new key for the given DID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_insert"),": Inserts a pre-existing private key for the given DID ",(0,i.kt)("inlineCode",{parentName:"li"},"location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_public"),": Calculates and returns the public key for the given location to a private key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_delete"),": Removes the key at the given location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_sign"),": Signs the given data with the key at the given location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key_exists"),": Returns whether the key at the given location exists."))),(0,i.kt)("li",{parentName:"ul"},"Data Operations: Used for keeping state persistent. Storages only need to serialize and store the data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_state_get"),": Returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," data structure for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"DID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_state_set"),": Sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainState")," data structure for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"DID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document_get"),": Returns the DID document for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"DID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document_set"),": Sets the DID document for the given ",(0,i.kt)("inlineCode",{parentName:"li"},"DID"),".")))),(0,i.kt)("h2",{id:"storage-layout"},"Storage Layout"),(0,i.kt)("h3",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"There are two types of identifiers in the interface, DIDs and key locations. A DID identifies an identity, while a key location identifies a key. An implementation recommendation is to use the DID as a partition key. Everything related to a DID can be stored in a partition identified by that DID. Importantly, the location of a key is only guaranteed to be unique within the DID partition it belongs to. If no partitioning is used, then DID and key location should be combined (e.g. concatenated) to produce a single, globally unique (i.e. across all identities) identifier for a key in storage."),(0,i.kt)("h3",{id:"representations"},"Representations"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyLocation")," is a compound identifier based on the fragment of a verification method and the hash of a public key. The motivation for this design is that a ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyLocation")," can be derived given a DID document and one of its verification methods. Thus, no additional state is necessary."),(0,i.kt)("p",null,"Canonical string representations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"IotaDID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyLocation")," type can be obtained using the string representation of a DID and the ",(0,i.kt)("inlineCode",{parentName:"p"},"canonical")," method on ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyLocation")," respectively. These representations are intended to be kept stable as much as possible."),(0,i.kt)("h3",{id:"example-layout"},"Example layout"),(0,i.kt)("p",null,"This illustrates the recommended approach for partitioning the storage layout (where ",(0,i.kt)("inlineCode",{parentName:"p"},"location -> key")," is a mapping from ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:Ft3wA8Tv2nF25hij3aegR54Wvqju7t5zqW9xnCB5L3Wu"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign-0:16843234495045965331 -> 0xc6f0dbacd56156ff4c383d549ac61ada87f8aa69454f3bfae99f5fa9e093a5c3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kex-0:7560300328640998700 -> 0xe494e36164e0a760140f3a9ab7dfdad38edac698f93d5239655dbd7499194760")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:DSvXWs7FUch9MQcaUKmrRFZyHYcHwt3t3pbjvKsQBfep"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign-0:16843234495045965331 -> 0xc6f0dbacd56156ff4c383d549ac61ada87f8aa69454f3bfae99f5fa9e093a5c3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kex-0:16546298247591944074 -> 0x8e1d037cd343f84276ab737b638da9095bcb6052f7fd9628d21d20f434f9959a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key:8559754420653090937 -> 0x4ef484a54aa16503878aa1ecaa6d73cb8254aefa3f80a569ed33ca685289d01e"))))),(0,i.kt)("p",null,"Note how fragments (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"kex-0"),") can appear more than once, but the hash of the public key - calculated from the stored private key - makes the location unique in general."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Although unlikely in practice, even the same private key can be used across different DIDs, which produces the same key location (here ",(0,i.kt)("inlineCode",{parentName:"p"},"sign-0:16843234495045965331"),") and it's important that these are stored independently, so that deleting one does not accidentally delete the other. Hence why a key's full identifier in storage needs to be based on the DID ",(0,i.kt)("em",{parentName:"p"},"and")," the key location.")),(0,i.kt)("p",null,"That said, the following flattened structure also satisfies the requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:Ft3wA8Tv2nF25hij3aegR54Wvqju7t5zqW9xnCB5L3Wu:sign-0:16843234495045965331 -> 0xc6f0dbacd56156ff4c383d549ac61ada87f8aa69454f3bfae99f5fa9e093a5c3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:Ft3wA8Tv2nF25hij3aegR54Wvqju7t5zqW9xnCB5L3Wu:kex-0:7560300328640998700 -> 0xe494e36164e0a760140f3a9ab7dfdad38edac698f93d5239655dbd7499194760")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:DSvXWs7FUch9MQcaUKmrRFZyHYcHwt3t3pbjvKsQBfep:sign-0:16843234495045965331 -> 0xc6f0dbacd56156ff4c383d549ac61ada87f8aa69454f3bfae99f5fa9e093a5c3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:DSvXWs7FUch9MQcaUKmrRFZyHYcHwt3t3pbjvKsQBfep:kex-0:16546298247591944074 -> 0x8e1d037cd343f84276ab737b638da9095bcb6052f7fd9628d21d20f434f9959a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"did:iota:DSvXWs7FUch9MQcaUKmrRFZyHYcHwt3t3pbjvKsQBfep:key:8559754420653090937 -> 0x4ef484a54aa16503878aa1ecaa6d73cb8254aefa3f80a569ed33ca685289d01e"))),(0,i.kt)("p",null,"The primary advantage of the partitioning is that it simplifies the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"did_purge")," operation, which wipes all data belonging to a given DID. With partitioning, this operation can simply wipe the partition whereas a storage with a flattened layout will have to do more work."),(0,i.kt)("h2",{id:"indexing"},"Indexing"),(0,i.kt)("p",null,"The interface has two methods called ",(0,i.kt)("inlineCode",{parentName:"p"},"did_list")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"did_exists"),". These return the list of stored DIDs, and whether a DID exists in storage, respectively. Implementations are thus expected to maintain a list or index of stored DIDs. An identity created with ",(0,i.kt)("inlineCode",{parentName:"p"},"did_create")," is added to the index, while an identity deleted through ",(0,i.kt)("inlineCode",{parentName:"p"},"did_purge")," is removed from the index."),(0,i.kt)("p",null,"If the storage implementation can be accessed concurrently, then access to the index needs to be synchronized, since it is unique per storage instance."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The IOTA Identity framework ships two implementations of ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"MemStore")," is an insecure in-memory implementation intended as an example implementation and for testing. The secure and recommended ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Stronghold")," may be interesting for implementers to look at, as it needs to deal with some challenges the in-memory version does not have."),(0,i.kt)("p",null,"This section will detail some common challenges and embeds the ",(0,i.kt)("inlineCode",{parentName:"p"},"MemStore")," implementations in Rust and TypeScript."),(0,i.kt)("h3",{id:"challenges"},"Challenges"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"did_create")," method takes the fragment of the initial verification method, the name of a network in which the DID will eventually exist, and an optional private key. From these inputs, it either generates a key or uses the passed private key to calculate the public key and from that derive the DID. In case a key needs to be generated, the challenge is to obtain the location for the key to be stored at. Since the key location depends on the public key, but key generation likely needs a location for the key to be stored at, there is a circular dependency that needs to be resolved. This can be resolved in at least two ways."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate the key at a random location, then derive the actual location and move the key there"),(0,i.kt)("li",{parentName:"ol"},"If moving a key is not possible, then an additional mapping from key location to some storage-internal location identifier can be maintained. Then it's possible to generate the key at some storage-internal location, calculate the key location and store the mapping.")),(0,i.kt)("p",null,"Since this also needs to happen before the DID can be derived from the public key, similar approaches can be used to work around the not-yet available DID partition key. Storages may choose to have one statically identified partition where keys are generated initially, and then moved from there. Storages whose restrictions do not allow for this, may want to use the flattened storage layout described in ",(0,i.kt)("a",{parentName:"p",href:"#example-layout"},"example layout")," and use the mapping approach."),(0,i.kt)("h3",{id:"storage-test-suite"},"Storage Test Suite"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageTestSuite")," can be used to test the basic functionality of storage implementations. See its documentation for more details."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This test suite is available in newer versions of the framework, but not yet in version 0.5.")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"This section shows the Rust and TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"MemStore")," implementations, which are thoroughly commented."),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"nodejs",values:[{label:"Node.js",value:"nodejs"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"nodejs",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { ChainState, DID, Document, Ed25519, KeyLocation, KeyPair, KeyType, Signature, Storage } from './../../node/identity_wasm.js';\n\n/** An insecure, in-memory `Storage` implementation that serves as an example.\nThis can be passed to the `AccountBuilder` to create accounts with this as the storage. */\n// Refer to the `Storage` interface docs for high-level documentation of the individual methods.\nexport class MemStore implements Storage {\n    // We use strings as keys rather than DIDs or KeyLocations because Maps use\n    // referential equality for object keys, and thus a primitive type needs to be used instead.\n\n    // The map from DIDs to chain states.\n    private _chainStates: Map<string, ChainState>;\n    // The map from DIDs to DID documents.\n    private _documents: Map<string, Document>;\n    // The map from DIDs to vaults.\n    private _vaults: Map<string, Map<string, KeyPair>>;\n\n    /** Creates a new, empty `MemStore` instance. */\n    constructor() {\n        this._chainStates = new Map();\n        this._documents = new Map();\n        this._vaults = new Map();\n    }\n\n    public async didCreate(network: string, fragment: string, privateKey?: Uint8Array): Promise<[DID, KeyLocation]> {\n        // Extract a `KeyPair` from the passed private key or generate a new one.\n        // For `did_create` we can assume the `KeyType` to be `Ed25519` because\n        // that is the only currently available signature type.\n        let keyPair;\n        if (privateKey) {\n            keyPair = KeyPair.tryFromPrivateKeyBytes(KeyType.Ed25519, privateKey);\n        } else {\n            keyPair = new KeyPair(KeyType.Ed25519);\n        }\n\n        // We create the location at which the key pair will be stored.\n        // Most notably, this uses the public key as an input.\n        const keyLocation: KeyLocation = new KeyLocation(KeyType.Ed25519, fragment, keyPair.public());\n\n        // Next we use the public key to derive the initial DID.\n        const did: DID = new DID(keyPair.public(), network);\n\n        // We use the vaults as the index of DIDs stored in this storage instance.\n        // If the DID already exists, we need to return an error. We don't want to overwrite an existing DID.\n        if (this._vaults.has(did.toString())) {\n            throw new Error(\"identity already exists\");\n        }\n\n        const vault = this._vaults.get(did.toString());\n\n        // Get the existing vault and insert the key pair,\n        // or insert a new vault with the key pair.\n        if (vault) {\n            vault.set(keyLocation.canonical(), keyPair);\n        } else {\n            const newVault = new Map([[keyLocation.canonical(), keyPair]]);\n            this._vaults.set(did.toString(), newVault);\n        }\n\n        return [did, keyLocation];\n    }\n\n    public async didPurge(did: DID): Promise<boolean> {\n        // This method is supposed to be idempotent,\n        // so we only need to do work if the DID still exists.\n        // The return value signals whether the DID was actually removed during this operation.\n        if (this._vaults.has(did.toString())) {\n            this._chainStates.delete(did.toString());\n            this._documents.delete(did.toString());\n            this._vaults.delete(did.toString());\n            return true;\n        }\n\n        return false;\n    }\n\n    public async didExists(did: DID): Promise<boolean> {\n        return this._vaults.has(did.toString());\n    }\n\n    public async didList(): Promise<Array<DID>> {\n        // Get all keys from the vaults and parse them into DIDs.\n        return Array.from(this._vaults.keys()).map((did) => DID.parse(did));\n    }\n\n    public async keyGenerate(did: DID, keyType: KeyType, fragment: string): Promise<KeyLocation> {\n        // Generate a new key pair with the given key type.\n        const keyPair: KeyPair = new KeyPair(keyType);\n        // Derive the key location from the fragment and public key and set the `KeyType` of the location.\n        const keyLocation: KeyLocation = new KeyLocation(KeyType.Ed25519, fragment, keyPair.public());\n\n        const vault = this._vaults.get(did.toString());\n\n        // Get the existing vault and insert the key pair,\n        // or insert a new vault with the key pair.\n        if (vault) {\n            vault.set(keyLocation.canonical(), keyPair);\n        } else {\n            const newVault = new Map([[keyLocation.canonical(), keyPair]]);\n            this._vaults.set(did.toString(), newVault);\n        }\n\n        // Return the location at which the key was generated.\n        return keyLocation;\n    }\n\n    public async keyInsert(did: DID, keyLocation: KeyLocation, privateKey: Uint8Array): Promise<void> {\n        // Reconstruct the key pair from the given private key with the location's key type.\n        const keyPair: KeyPair = KeyPair.tryFromPrivateKeyBytes(keyLocation.keyType(), privateKey);\n\n        // Get the vault for the given DID.\n        const vault = this._vaults.get(did.toString());\n\n        // Get the existing vault and insert the key pair,\n        // or insert a new vault with the key pair.\n        if (vault) {\n            vault.set(keyLocation.canonical(), keyPair);\n        } else {\n            const newVault = new Map([[keyLocation.canonical(), keyPair]]);\n            this._vaults.set(did.toString(), newVault);\n        }\n    }\n\n    public async keyExists(did: DID, keyLocation: KeyLocation): Promise<boolean> {\n        // Get the vault for the given DID.\n        const vault = this._vaults.get(did.toString());\n\n        // Within the DID vault, check for existence of the given location.\n        if (vault) {\n            return vault.has(keyLocation.canonical());\n        } else {\n            return false\n        }\n    }\n\n    public async keyPublic(did: DID, keyLocation: KeyLocation): Promise<Uint8Array> {\n        // Get the vault for the given DID.\n        const vault = this._vaults.get(did.toString());\n\n        // Return the public key or an error if the vault or key does not exist.\n        if (vault) {\n            const keyPair: KeyPair | undefined = vault.get(keyLocation.canonical());\n            if (keyPair) {\n                return keyPair.public()\n            } else {\n                throw new Error('Key location not found')\n            }\n        } else {\n            throw new Error('DID not found')\n        }\n    }\n\n    public async keyDelete(did: DID, keyLocation: KeyLocation): Promise<boolean> {\n        // Get the vault for the given DID.\n        const vault = this._vaults.get(did.toString());\n\n        // This method is supposed to be idempotent, so we delete the key\n        // if it exists and return whether it was actually deleted during this operation.\n        if (vault) {\n            return vault.delete(keyLocation.canonical());\n        } else {\n            return false;\n        }\n    }\n\n    public async keySign(did: DID, keyLocation: KeyLocation, data: Uint8Array): Promise<Signature> {\n        if (keyLocation.keyType() !== KeyType.Ed25519) {\n            throw new Error('Unsupported Method')\n        }\n\n        // Get the vault for the given DID.\n        const vault = this._vaults.get(did.toString());\n\n        if (vault) {\n            const keyPair: KeyPair | undefined = vault.get(keyLocation.canonical());\n\n            if (keyPair) {\n                // Use the `Ed25519` API to sign the given data with the private key.\n                const signature: Uint8Array = Ed25519.sign(data, keyPair.private());\n                // Construct a new `Signature` wrapper with the returned signature bytes.\n                return new Signature(signature)\n            } else {\n                throw new Error('Key location not found')\n            }\n        } else {\n            throw new Error('DID not found')\n        }\n    }\n\n    public async chainStateGet(did: DID): Promise<ChainState | null | undefined> {\n        // Lookup the chain state of the given DID.\n        return this._chainStates.get(did.toString());\n    }\n\n    public async chainStateSet(did: DID, chainState: ChainState): Promise<void> {\n        // Set the chain state of the given DID.\n        this._chainStates.set(did.toString(), chainState);\n    }\n\n    public async documentGet(did: DID): Promise<Document | null | undefined> {\n        // Lookup the DID document of the given DID.\n        return this._documents.get(did.toString())\n    }\n\n    public async documentSet(did: DID, document: Document): Promise<void> {\n        // Set the DID document of the given DID.\n        this._documents.set(did.toString(), document);\n    }\n\n    public async flushChanges(): Promise<void> {\n        // The MemStore doesn't need to flush changes to disk or any other persistent store,\n        // which is why this function does nothing.\n    }\n}\n\n")),(0,i.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse core::fmt::Debug;\nuse core::fmt::Formatter;\n\nuse async_trait::async_trait;\nuse hashbrown::HashMap;\nuse identity_core::crypto::Ed25519;\nuse identity_core::crypto::KeyPair;\nuse identity_core::crypto::KeyType;\nuse identity_core::crypto::PrivateKey;\nuse identity_core::crypto::PublicKey;\nuse identity_core::crypto::Sign;\nuse identity_iota_core::did::IotaDID;\nuse identity_iota_core::document::IotaDocument;\nuse identity_iota_core::tangle::NetworkName;\nuse std::sync::RwLockReadGuard;\nuse std::sync::RwLockWriteGuard;\nuse zeroize::Zeroize;\n\nuse crate::error::Error;\nuse crate::error::Result;\nuse crate::identity::ChainState;\nuse crate::storage::Storage;\nuse crate::types::KeyLocation;\nuse crate::types::Signature;\nuse crate::utils::Shared;\n\n// The map from DIDs to chain states.\ntype ChainStates = HashMap<IotaDID, ChainState>;\n// The map from DIDs to DID documents.\ntype Documents = HashMap<IotaDID, IotaDocument>;\n// The map from DIDs to vaults.\ntype Vaults = HashMap<IotaDID, MemVault>;\n// The map from key locations to key pairs, that lives within a DID partition.\ntype MemVault = HashMap<KeyLocation, KeyPair>;\n\n/// An insecure, in-memory [`Storage`] implementation that serves as an example and is used in tests.\npub struct MemStore {\n  // Controls whether to print the storages content when debugging.\n  expand: bool,\n  // The `Shared<T>` type is simply a light wrapper around `Rwlock<T>`.\n  chain_states: Shared<ChainStates>,\n  documents: Shared<Documents>,\n  vaults: Shared<Vaults>,\n}\n\nimpl MemStore {\n  /// Creates a new, empty `MemStore` instance.\n  pub fn new() -> Self {\n    Self {\n      expand: false,\n      chain_states: Shared::new(HashMap::new()),\n      documents: Shared::new(HashMap::new()),\n      vaults: Shared::new(HashMap::new()),\n    }\n  }\n\n  /// Returns whether to expand the debug representation.\n  pub fn expand(&self) -> bool {\n    self.expand\n  }\n\n  /// Sets whether to expand the debug representation.\n  pub fn set_expand(&mut self, value: bool) {\n    self.expand = value;\n  }\n}\n\n// Refer to the `Storage` interface docs for high-level documentation of the individual methods.\n#[cfg_attr(not(feature = "send-sync-storage"), async_trait(?Send))]\n#[cfg_attr(feature = "send-sync-storage", async_trait)]\nimpl Storage for MemStore {\n  async fn did_create(\n    &self,\n    network: NetworkName,\n    fragment: &str,\n    private_key: Option<PrivateKey>,\n  ) -> Result<(IotaDID, KeyLocation)> {\n    // Extract a `KeyPair` from the passed private key or generate a new one.\n    // For `did_create` we can assume the `KeyType` to be `Ed25519` because\n    // that is the only currently available signature type.\n    let keypair: KeyPair = match private_key {\n      Some(private_key) => KeyPair::try_from_private_key_bytes(KeyType::Ed25519, private_key.as_ref())?,\n      None => KeyPair::new(KeyType::Ed25519)?,\n    };\n\n    // We create the location at which the key pair will be stored.\n    // Most notably, this uses the public key as an input.\n    let location: KeyLocation = KeyLocation::new(KeyType::Ed25519, fragment.to_owned(), keypair.public().as_ref());\n\n    // Next we use the public key to derive the initial DID.\n    let did: IotaDID = IotaDID::new_with_network(keypair.public().as_ref(), network)\n      .map_err(|err| crate::Error::DIDCreationError(err.to_string()))?;\n\n    // Obtain exclusive access to the vaults.\n    let mut vaults: RwLockWriteGuard<\'_, _> = self.vaults.write()?;\n\n    // We use the vaults as the index of DIDs stored in this storage instance.\n    // If the DID already exists, we need to return an error. We don\'t want to overwrite an existing DID.\n    if vaults.contains_key(&did) {\n      return Err(Error::IdentityAlreadyExists);\n    }\n\n    // Obtain the exiting mem vault or create a new one.\n    let vault: &mut MemVault = vaults.entry(did.clone()).or_default();\n\n    // Insert the key pair at the previously created location.\n    vault.insert(location.clone(), keypair);\n\n    // Return did and location.\n    Ok((did, location))\n  }\n\n  async fn did_purge(&self, did: &IotaDID) -> Result<bool> {\n    // This method is supposed to be idempotent,\n    // so we only need to do work if the DID still exists.\n    // The return value signals whether the DID was actually removed during this operation.\n    if self.vaults.write()?.remove(did).is_some() {\n      let _ = self.documents.write()?.remove(did);\n      let _ = self.chain_states.write()?.remove(did);\n\n      Ok(true)\n    } else {\n      Ok(false)\n    }\n  }\n\n  async fn did_exists(&self, did: &IotaDID) -> Result<bool> {\n    // Note that any failure to get access to the storage and do the actual existence check\n    // should result in an error rather than returning `false`.\n    Ok(self.vaults.read()?.contains_key(did))\n  }\n\n  async fn did_list(&self) -> Result<Vec<IotaDID>> {\n    Ok(self.vaults.read()?.keys().cloned().collect())\n  }\n\n  async fn key_generate(&self, did: &IotaDID, key_type: KeyType, fragment: &str) -> Result<KeyLocation> {\n    // Obtain exclusive access to the vaults.\n    let mut vaults: RwLockWriteGuard<\'_, _> = self.vaults.write()?;\n    // Get or insert the MemVault.\n    let vault: &mut MemVault = vaults.entry(did.clone()).or_default();\n\n    // Generate a new key pair for the given `key_type`.\n    let keypair: KeyPair = KeyPair::new(key_type)?;\n\n    // Derive the key location from the fragment and public key and set the `KeyType` of the location.\n    let location: KeyLocation = KeyLocation::new(key_type, fragment.to_owned(), keypair.public().as_ref());\n\n    vault.insert(location.clone(), keypair);\n\n    // Return the location at which the key was generated.\n    Ok(location)\n  }\n\n  async fn key_insert(&self, did: &IotaDID, location: &KeyLocation, mut private_key: PrivateKey) -> Result<()> {\n    // Obtain exclusive access to the vaults.\n    let mut vaults: RwLockWriteGuard<\'_, _> = self.vaults.write()?;\n    // Get or insert the MemVault.\n    let vault: &mut MemVault = vaults.entry(did.clone()).or_default();\n\n    // Reconstruct the key pair from the given private key by inspecting the location for its key type.\n    // Then insert the key at the given location.\n    match location.key_type {\n      KeyType::Ed25519 => {\n        let keypair: KeyPair = KeyPair::try_from_private_key_bytes(KeyType::Ed25519, private_key.as_ref())\n          .map_err(|err| Error::InvalidPrivateKey(err.to_string()))?;\n        private_key.zeroize();\n\n        vault.insert(location.to_owned(), keypair);\n\n        Ok(())\n      }\n      KeyType::X25519 => {\n        let keypair: KeyPair = KeyPair::try_from_private_key_bytes(KeyType::X25519, private_key.as_ref())\n          .map_err(|err| Error::InvalidPrivateKey(err.to_string()))?;\n        private_key.zeroize();\n\n        vault.insert(location.to_owned(), keypair);\n\n        Ok(())\n      }\n    }\n  }\n\n  async fn key_exists(&self, did: &IotaDID, location: &KeyLocation) -> Result<bool> {\n    // Obtain read access to the vaults.\n    let vaults: RwLockReadGuard<\'_, _> = self.vaults.read()?;\n\n    // Within the DID vault, check for existence of the given location.\n    if let Some(vault) = vaults.get(did) {\n      return Ok(vault.contains_key(location));\n    }\n\n    Ok(false)\n  }\n\n  async fn key_public(&self, did: &IotaDID, location: &KeyLocation) -> Result<PublicKey> {\n    // Obtain read access to the vaults.\n    let vaults: RwLockReadGuard<\'_, _> = self.vaults.read()?;\n    // Lookup the vault for the given DID.\n    let vault: &MemVault = vaults.get(did).ok_or(Error::KeyVaultNotFound)?;\n    // Lookup the key pair within the vault.\n    let keypair: &KeyPair = vault.get(location).ok_or(Error::KeyNotFound)?;\n\n    // Return the public key.\n    Ok(keypair.public().clone())\n  }\n\n  async fn key_delete(&self, did: &IotaDID, location: &KeyLocation) -> Result<bool> {\n    // Obtain read access to the vaults.\n    let mut vaults: RwLockWriteGuard<\'_, _> = self.vaults.write()?;\n    // Lookup the vault for the given DID.\n    let vault: &mut MemVault = vaults.get_mut(did).ok_or(Error::KeyVaultNotFound)?;\n\n    // This method is supposed to be idempotent, so we delete the key\n    // if it exists and return whether it was actually deleted during this operation.\n    Ok(vault.remove(location).is_some())\n  }\n\n  async fn key_sign(&self, did: &IotaDID, location: &KeyLocation, data: Vec<u8>) -> Result<Signature> {\n    // Obtain read access to the vaults.\n    let vaults: RwLockReadGuard<\'_, _> = self.vaults.read()?;\n    // Lookup the vault for the given DID.\n    let vault: &MemVault = vaults.get(did).ok_or(Error::KeyVaultNotFound)?;\n    // Lookup the key pair within the vault.\n    let keypair: &KeyPair = vault.get(location).ok_or(Error::KeyNotFound)?;\n\n    match location.key_type {\n      KeyType::Ed25519 => {\n        assert_eq!(keypair.type_(), KeyType::Ed25519);\n\n        // Use the `Ed25519` API to sign the given data with the private key.\n        let signature: [u8; 64] = Ed25519::sign(&data, keypair.private())?;\n        // Construct a new `Signature` wrapper with the returned signature bytes.\n        let signature: Signature = Signature::new(signature.to_vec());\n        Ok(signature)\n      }\n      KeyType::X25519 => {\n        // Calling key_sign on key types that cannot be signed with should return an error.\n        return Err(identity_did::Error::InvalidMethodType.into());\n      }\n    }\n  }\n\n  async fn chain_state_get(&self, did: &IotaDID) -> Result<Option<ChainState>> {\n    // Lookup the chain state of the given DID.\n    self.chain_states.read().map(|states| states.get(did).cloned())\n  }\n\n  async fn chain_state_set(&self, did: &IotaDID, chain_state: &ChainState) -> Result<()> {\n    // Set the chain state of the given DID.\n    self.chain_states.write()?.insert(did.clone(), chain_state.clone());\n\n    Ok(())\n  }\n\n  async fn document_get(&self, did: &IotaDID) -> Result<Option<IotaDocument>> {\n    // Lookup the DID document of the given DID.\n    self.documents.read().map(|documents| documents.get(did).cloned())\n  }\n\n  async fn document_set(&self, did: &IotaDID, document: &IotaDocument) -> Result<()> {\n    // Set the DID document of the given DID.\n    self.documents.write()?.insert(did.clone(), document.clone());\n\n    Ok(())\n  }\n\n  async fn flush_changes(&self) -> Result<()> {\n    // The MemStore doesn\'t need to flush changes to disk or any other persistent store,\n    // which is why this function does nothing.\n    Ok(())\n  }\n}\n\nimpl Debug for MemStore {\n  fn fmt(&self, f: &mut Formatter<\'_>) -> core::fmt::Result {\n    if self.expand {\n      f.debug_struct("MemStore")\n        .field("chain_states", &self.chain_states)\n        .field("states", &self.documents)\n        .field("vaults", &self.vaults)\n        .finish()\n    } else {\n      f.write_str("MemStore")\n    }\n  }\n}\n\nimpl Default for MemStore {\n  fn default() -> Self {\n    Self::new()\n  }\n}\n'))))}y.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem__kUE";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),i=n(67294),o=n(86010),r=n(51048),s=n(33609),l=n(1943),d=n(72957);const c="tabList_fbd4",u="tabItem_v5XY";function h(e){var t,n;const{lazy:r,block:h,defaultValue:p,values:y,groupId:m,className:k}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=y?y:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const D=null===p?p:null!=(t=null!=p?p:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==D&&!g.some((e=>e.value===D)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+D+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:b}=(0,l.U)(),[_,I]=(0,i.useState)(D),S=[],{blockElementScrollPositionUntilNextRender:N}=(0,d.o5)();if(null!=m){const e=w[m];null!=e&&e!==_&&g.some((t=>t.value===e))&&I(e)}const K=e=>{const t=e.currentTarget,n=S.indexOf(t),a=g[n].value;a!==_&&(N(t),I(a),null!=m&&b(m,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var i;const t=S.indexOf(e.currentTarget)-1;n=null!=(i=S[t])?i:S[S.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>S.push(e),onKeyDown:x,onFocus:K,onClick:K},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(f.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function p(e){const t=(0,r.Z)();return i.createElement(h,(0,a.Z)({key:String(t)},e))}}}]);