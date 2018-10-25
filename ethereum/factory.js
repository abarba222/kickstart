import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb645bf3936765aa7EfAaB295CFD7655aeBd562d1'
);

export default instance;
