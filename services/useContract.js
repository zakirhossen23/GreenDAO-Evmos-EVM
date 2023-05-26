import { useState, useEffect } from "react";
import { ethers } from 'ethers';

import ERC721Singleton from './ERC721Singleton';


export default function useContract() {
	const [contractInstance, setContractInstance] = useState({
		contract: null,
		signerAddress: null,
		sendTransaction: sendTransaction
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (window.localStorage.getItem("login-type") === "metamask"){
					const provider = new ethers.providers.Web3Provider(window.ethereum);
					const signer = provider.getSigner();
					const contract = { contract: null, signerAddress: null, sendTransaction: sendTransaction };
	
					contract.contract = ERC721Singleton(signer);
	
					contract.signerAddress = await signer.getAddress();
	
					setContractInstance(contract);
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	async function sendTransaction(methodWithSignature) {
		let output = await methodWithSignature.send({
			from:window.ethereum.selectedAddress,
			gasPrice: 100_000_000,
			gas: 6_000_000,
		  });
		return output;
	}


	return contractInstance
}
