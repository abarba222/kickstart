const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'woman rocket voyage neither guide tube rain merry breeze april much palm',
  'https://rinkeby.infura.io/v3/b79705dac8354809ad42e0b00ddee669'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0] );

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });


    console.log('Contract deployed to', result.options.address);
};
deploy();