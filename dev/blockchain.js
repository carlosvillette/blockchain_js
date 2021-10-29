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


    chainIsValid(blockchain) {
        let validChain = true;
        for( let i =1; i < blockchain.length; i++) {

            const currentBlock = blockchain[i];
            const prevBlock = blockchain[i - 1];
            const currentBlockData = {transactions: currentBlock['transactions'], index: currentBlock['index']};
            const blockHash = this.hashBlock(prevBlock['hash'],currentBlockData,currentBlock['nonce'])
            const hashWrong = blockHash.substring(0,4) !== '0000';
            if ( (currentBlock['previousBlockHash'] !== prevBlock['hash'])  || hashWrong) {
                validChain = false;
                console.log("chain index", i);
                console.log('previous block hash: ', prevBlock['hash']);
                console.log('current block hash: ', currentBlock['hash']);
            }
        }

        const genesisBlock = blockchain[0];
        const rightNonce = genesisBlock['nonce'] === 0;
        const rightPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
        const rightHash = genesisBlock['hash'] === '0';
        const rightTransactions = genesisBlock['transactions'].length === 0;

        if (!rightNonce || !rightPreviousBlockHash || !rightHash || !rightTransactions) {
            validChain = false;
            console.log("genesis block wrong");
        }

        return validChain;
    }

    getBlock(blockHash) {
        let correctBlock = null;
        this.chain.forEach(block => {
            if (block.hash === blockHash) {
                correctBlock = block;
            }
        });
        return correctBlock;
    }

    getTransaction(transactionId) {
        let correctTransaction = null;
        let correctBlock = null;
        this.chain.forEach(block => {
            block.transactions.forEach(transaction => {
                if (transaction.transactionId === transactionId) {
                    correctTransaction = transaction;
                    correctBlock = block;
                }
            });
        });
        return {
            transaction: correctTransaction,
            block: correctBlock
        };
    }

    getAddressDate(address) {
        const addressTransactions = [];
        this.chain.forEach(block => {
            block.transactions.forEach(transaction => {
                if (transaction.sender === address || transaction.recipient === address) {
                    addressTransactions.push(transaction);
                }
            });
        });

        let balance = 0;
        addressTransactions.forEach(transaction => {
            if (transaction.recipient === address){
                balance += transaction.amount;
            } else  {
                balance -= transaction.amount;
            }
        });

        return {
            addressTransactions: addressTransactions,
            addressBalance: balance
        };
    }

}

module.exports = Blockchain;