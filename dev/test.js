const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1633983639743,
            "transactions": [],
            "nonce": 0,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1633983717486,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1633983760570,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b3a964f02ad011ec8abc3b0e53d462ad",
                    "transactionId": "e2111fe02ad011ec8abc3b0e53d462ad"
                },
                {
                    "amount": 60,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "f2eac8c02ad011ec8abc3b0e53d462ad"
                },
                {
                    "amount": 600,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "f5714c902ad011ec8abc3b0e53d462ad"
                },
                {
                    "amount": 100,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "f876eb702ad011ec8abc3b0e53d462ad"
                }
            ],
            "nonce": 91324,
            "hash": "00000aef5a7d667be989f9ca723f41aa3401a59e57f6b407dd7153f5fa1ac7ef",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1633983796427,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b3a964f02ad011ec8abc3b0e53d462ad",
                    "transactionId": "fbae96d02ad011ec8abc3b0e53d462ad"
                },
                {
                    "amount": 10,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "0649bcf02ad111ec8abc3b0e53d462ad"
                },
                {
                    "amount": 150,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "0a60a4c02ad111ec8abc3b0e53d462ad"
                },
                {
                    "amount": 120,
                    "sender": "alkgmjraewlkgjraojio",
                    "recipient": "jlkfasmjlkasfjkasdl;fj",
                    "transactionId": "0e38fcf02ad111ec8abc3b0e53d462ad"
                }
            ],
            "nonce": 23164,
            "hash": "00006742af214c994e167aae20181ee29047226bba47cb75ed256f7458defd12",
            "previousBlockHash": "00000aef5a7d667be989f9ca723f41aa3401a59e57f6b407dd7153f5fa1ac7ef"
        },
        {
            "index": 5,
            "timestamp": 1633983801378,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b3a964f02ad011ec8abc3b0e53d462ad",
                    "transactionId": "110dc7d02ad111ec8abc3b0e53d462ad"
                }
            ],
            "nonce": 192723,
            "hash": "0000a7669af697d366e2199104e105bab6390de2b06a3b8021165bef33006c95",
            "previousBlockHash": "00006742af214c994e167aae20181ee29047226bba47cb75ed256f7458defd12"
        },
        {
            "index": 6,
            "timestamp": 1633983802589,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "b3a964f02ad011ec8abc3b0e53d462ad",
                    "transactionId": "140276c02ad111ec8abc3b0e53d462ad"
                }
            ],
            "nonce": 53084,
            "hash": "0000aa3ece73baf7e380c4a8767fa16041f346939a591059ef00581a59764187",
            "previousBlockHash": "0000a7669af697d366e2199104e105bab6390de2b06a3b8021165bef33006c95"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "b3a964f02ad011ec8abc3b0e53d462ad",
            "transactionId": "14ba06f02ad111ec8abc3b0e53d462ad"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}


var result = bitcoin.chainIsValid(bc1.chain);

console.log(`Valid: ${result}` );