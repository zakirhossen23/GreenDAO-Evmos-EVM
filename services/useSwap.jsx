export async function sendTransfer( amount, Recipient, ShowAlert) {
	
	ShowAlert("pending", `Sending ${amount} TRX to ${Recipient}...`);
	var tronweb = window.tronWeb
	var tx = await tronweb.transactionBuilder.sendTrx(Recipient, (Number(amount) * 1e18).toFixed(5),window.ethereum.selectedAddress.toString())
	var signedTx = await tronweb.trx.sign(tx)
	var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
	console.log(broastTx)
	ShowAlert("success", `Successfully sent ${amount} TRX to ${Recipient}! `);

	return {
		transaction: `https://testnet.escan.live/tx/${broastTx.txid}`
	};
}