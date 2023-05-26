
export async function sendTransfer(contract, sendTransaction, idea_id, amount, ShowAlert) {
	var utils = require('ethers').utils;

	ShowAlert("pending", `Depositing ${amount} tEVMOS`);
	let new_amount  = `${(Number(amount) * 1e18)}`;
	await contract.donate(idea_id,new_amount).send({
		from:window.ethereum.selectedAddress,
		value: new_amount,
		gasPrice: 100_000_000,
		gas: 6_000_000,
	  });
	  ShowAlert("success", `Deposited! Staking...`);
	 await sendTransaction(contract.stake(new_amount));
	  ShowAlert("success", `Staked!`);

}