require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note stereo umbrella hover enter equal gas'; 
let testAccounts = [
"0xa445b0a53a210fc1acec285341e164a8ec669a24b59b429d85e61642fbc15722",
"0x97479d4076fb5b8f85226af9e862360f3849ca7b36b59b313ba0e3bafb899529",
"0xd1ce514082a1e131d5df8eec7e9e14f8e8bb2b9e2559cc99c93d23e959d6fef7",
"0x24e90d8c43dac8ab88083c5a20ab744da21b6c30b71d96837f9068b0a4b916da",
"0x671be658394cef0b39f48b4c14f3989b39d46ab1e8119fc8f0d77e44836281ca",
"0x55ca26a4fb44caf79c4e79da930b8786a235884e8c7934247f5ec77e43453d73",
"0xa0cb53e9b627630c996b915fd60113ad5f281314b63b9a73b8580bd8c19d9a82",
"0xa69d03fcabf26fd898e6706ab40254afb2a2ff5b1653a75e70b357075401ac07",
"0xadefd92418cf513a1bb8a03f023e993f8f7ac394f6b14e7dc3ff0be63dd25a83",
"0x97def6b54aa15b19730ca61a4efdb2af4d4f00f577e980966630953bafbafd0c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

