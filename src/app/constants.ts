interface Net {
    NAME: string;
    API_URL: string;
    NODE_URL: string;
    BLOCK_EXPLORER_URL: string;
    CHAIN_ID: string;
}
export class Constants {
    // Select Zeronet, Alphanet or Mainnet
    // readonly NET: Net = this.alphanet();
    // readonly NET: Net = this.zeronet();
    // readonly NET: Net = this.mainnet();
    readonly NET: Net = this.babynet();

    zeronet(): Net {
        const ZERONET: Net = {
            NAME: 'Zeronet',
            API_URL: 'https://api.zeronet.tzscan.io/',
            NODE_URL: 'https://zeronet-node.tzscan.io/',
            BLOCK_EXPLORER_URL: 'https://zeronet.tzscan.io/',
            CHAIN_ID: 'ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK'
        };
        return ZERONET;
    }
    alphanet(): Net {
        const ALPHANET: Net = {
            NAME: 'Alphanet',
            API_URL: 'https://api.alphanet.tzscan.io/',
            // NODE_URL: 'https://alphanet-node.tzscan.io/',
            NODE_URL: 'https://rpcalpha.tzbeta.net',
            BLOCK_EXPLORER_URL: 'https://alphanet.tzscan.io/',
            CHAIN_ID: 'Pt24m4xiPbLDhVgVfABUjirbmda3yohdN82Sp9FeuAXJ4eV9otd'
        };
        return ALPHANET;
    }
    babynet(): Net {
        const BABYNET: Net = {
            NAME: 'Alphanet',
            API_URL: 'https://api.babylonnet.tzscan.io/',
            NODE_URL: 'https://babylonnet-node.tzscan.io/',
            BLOCK_EXPLORER_URL: 'https://babylonnet.tzscan.io/',
            CHAIN_ID: 'PsBabyM1eUXZseaJdmXFApDSBqj8YBfwELoxZHHW77EMcAbbwAS'
        };
        return BABYNET;
    }
    mainnet(): Net {
        let n = Math.floor(Math.random() * 5) + 1;
        if (n > 3) { n += 1; }
        const MAINNET: Net = {
            NAME: 'Mainnet',
            API_URL: 'https://api' + n + '.tzscan.io/',
            NODE_URL: 'https://mainnet.tezrpc.me/',
            BLOCK_EXPLORER_URL: 'https://tzscan.io/',
            CHAIN_ID: 'Pt24m4xiPbLDhVgVfABUjirbmda3yohdN82Sp9FeuAXJ4eV9otd'
        };
        return MAINNET;
    }
}
