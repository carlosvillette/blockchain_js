/*
the reason this is a constructor function and not a class
is because js doesn't really have classes. We could make it a
class but it's just a sugar coating ontop of the constructor function
* */

const sha256 = require('sha256');
const uuid = require('uuid/v1');
const currentNodeUrl = process.argv[3];
class Blockchain {
    constructor()
    {
        this.chain = [];
        this.pendingTransactions = [];

        this.currentNodeUrl = currentNodeUrl;
        this.networkNodes = [];
        this.createNewBlock(0,'0','0');
    }

    createNewBlock (nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };
        this.pendingTransactions = [];
        this.chain.push(newBlock);

        return newBlock;
    }

    getLastBlock () {
        return this.chain[this.chain.length - 1];
    }

    createNewTransaction (amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient,
            transactionId: uuid().split('-').join('')
        };

        return newTransaction
    }

    addToPendingTransaction (transaction){
        this.pendingTransactions.push(transaction);
        return this.getLastBlock()['index'] + 1;
    }

    hashBlock (previousBlockHash, currentBlockData, nonce) {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = sha256(dataAsString);
        return hash;
    }

    proofOfWork (previousBlockHash, currentBlockData) {
        // we want our hash to start with four zeroes
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

        while(hash.substring(0,4) !== '0000') {
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }

        return nonce;
    }


}

module.exports = Blockchain;