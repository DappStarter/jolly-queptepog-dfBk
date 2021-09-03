require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival noise attend grace lock supply genre'; 
let testAccounts = [
"0xc282817e49a39bc1b7f24b1eb801890d7136a3ef68a5efd4b79132e2302a3513",
"0x9384557f5115872ed990160b93d98bca40fed873e6638d10383c0c5087522a62",
"0x8790257cbf4cf423b723a557c7309320cf2512e14b0289732aa51da67a4151dd",
"0xf6cfee96c647cfda0656c476b3c1b887eb9ba44ed77b4b28f19c17b9b91fbbdf",
"0x91e478f1529eb2dc68d65a75577013ecf4bdcd70f41ca3117436c74f683b5dae",
"0xf5a7b9f27d559c5c1775459182d9fbec93b1255312e750897f6fba01b62f3e2b",
"0x78573062bcfc02d8a2f0503025de94cd6c9f378103f31caa62e5d9ed408cde8f",
"0xc476fd10ac4af02735130d7942b8d603901a56156d4f2202b7c5f199ddf5414b",
"0x80e539eaf9bd865e0d4529ecb22c72f77fa89e42921c2914048c28db846ee09b",
"0x7b26380a5da18862ef0abb66eb78c51703dc3f4ced790b8621922ccd49220c90"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


