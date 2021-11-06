import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
import {ethers} from 'ethers';

const provider = new ethers.getDefaultProvider("rinkeby", {
  alchemy : "https://eth-rinkeby.alchemyapi.io/v2/7eJSSFxEImk4KkiEgIqx92i5r29HLEUK"
});

export default async function deploy(arbiter, beneficiary, value) {
  await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
  return factory.deploy(arbiter, beneficiary, { value });
}
