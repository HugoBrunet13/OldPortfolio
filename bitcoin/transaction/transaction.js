$(document).ready(function() {
	function TransactionResearch(idTransaction,urlWS){
 		$("#hashTx").val('');
 	 	var retourAjax = AppelWS(idTransaction,urlWS);
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoTransaction(data);
 	}

 	function ClearResultatTransaction(){
		$("#TX_hash").text('');
		$("#TX_size").text('');
		$("#TX_confirmed").text('');
		$("#TX_received").text('');
		$("#TX_blockheight").text('');
		$("#TX_confirmations").text('');
		$("#listAdr").text('');
	}

	function MiseEnFormeInfoTransaction(data){
		if (!data.error && data){
			document.getElementById('tableTransac').style.visibility = 'visible';
			ClearResultatTransaction();
			$("#TX_hash").append(data.hash);
			$("#TX_confirmed").append(data.confirmed);
			$("#TX_received").append(data.received);
			$("#TX_size").append(data.size);
			$("#TX_blockheight").append('<a href="../block/block.html?idBlock='+data.block_height+'">'+data.block_height+'</a>'); //todo lien vers block
			$("#TX_confirmations").append(data.confirmations);
			for (var i = 0; i < data.addresses.length; i++) {
		 		$("#listAdr").append('<a href="../address/address.html?address='+data.addresses[i]+'">'+data.addresses[i]+'</a><br>');
			 }
		} else{
			document.getElementById('errorTransac').style.visibility = 'visible';
			$("#errorTransac").append(data.error);
		}
	}

	if (GetURLParameter('hashTx')){
		TransactionResearch(GetURLParameter('hashTx'),"https://api.blockcypher.com/v1/btc/main/txs/");
	}

});	