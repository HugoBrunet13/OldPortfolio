$(document).ready(function() {

	function AddressResearch(adresse,urlWS){
 		$("#address").val('');
 	 	var retourAjax = AppelWS(adresse,urlWS);
		var data = retourAjax.responseJSON;
		InfoAddressFormatting(data);
	}

	function ClearResultatAdresse(){
		$("#ADR_address").text('');
		$("#ADR_n_tx").text('');
		$("#ADR_total_received").text('');
		$("#ADR_total_sent").text('');
		$("#ADR_final_balance").text('');
		$("#listTx").text('');
	}

	function InfoAddressFormatting(data){
		if(!data.error && data){
			document.getElementById('tableAddress').style.visibility = 'visible';
			ClearResultatAdresse();
			$("#ADR_address").append(data.address);
			$("#ADR_hash").append(data.hash160);
			$("#ADR_n_tx").append(data.n_tx);
			$("#ADR_total_received").append(data.total_received);
			$("#ADR_total_sent").append(data.total_sent);
			$("#ADR_final_balance").append(data.final_balance);
			for (var i = 0; i < data.txrefs.length; i++) {
		 		$("#listTx").append('<a href="../transaction/transaction.html?hashTx='+data.txrefs[i]["tx_hash"]+'">'+data.txrefs[i]["tx_hash"]+'</a><br>');
			}
		} else{
			document.getElementById('errorAddress').style.visibility = 'visible';
			$("#errorAddress").append(data.error);
		}

	}

	if (GetURLParameter('address')){
		AddressResearch(GetURLParameter('address'),"https://api.blockcypher.com/v1/btc/main/addrs/");
	}
});	