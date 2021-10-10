const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = "43k25;r43jr;jewkf;wf";
const currentBlockData = [
    {
        amount: 10,
        sender: 'f;djsakl;djf;sa',
        recipient: ';fdajkfl;we34'
    },
    {
        amount: 100,
        sender: 'f;djsakl;djf;sa',
        recipient: ';fdajkfl;we34'
    },
    {
        amount: 1000,
        sender: 'f;djsakl;djf;sa',
        recipient: ';fdajkfl;we34'
    }
]

let nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
console.log(bitcoin)
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
//bitcoin.createNewBlock(123, 'f;sjmi43qoru409ewufwe','sfdl;ri430ieworf');

