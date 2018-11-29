$(document).ready(function() {
	function BlockIdResearch(indexBLock,urlWS){
		$("#idBlock").val('');
		var retourAjax = AppelWS(indexBLock,urlWS);
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

	function BlockHashResearch(hashBlock,urlWS){
		var retourAjax = AppelWS(hashBlock,urlWS);
		var data = retourAjax.responseJSON;
		BlockIdResearch(data.height,"https://api.blockcypher.com/v1/btc/main/blocks/");
	}

	function ClearResultatBlock(){
		$("#BLOCK_hash").text('');
		$("#BLOCK_time").text('');
		$("#BLOCK_receivedTime").text('');
		$("#BLOCK_chain").text('');
		$("#BLOCK_size").text('');
		$("#BLOCK_total").text('');
		$("#BLOCK_height").text('');
		// $("#BLOCK_previousBlockHash").text('');
		$("#listOfTx").text('');
	}

	function MiseEnFormeInfoBlock(data){
		if(!data.error && data){
			document.getElementById('tableBlock').style.visibility = 'visible';
			ClearResultatBlock();
			$("#BLOCK_hash").append(data.hash);
			$("#BLOCK_time").append(data.time);
			$("#BLOCK_receivedTime").append(data.received_time);
			$("#BLOCK_chain").append(data.chain);
			$("#BLOCK_size").append(data.size);
			$("#BLOCK_total").append(data.total);
			$("#BLOCK_height").append(data.height);
			// $("#BLOCK_previousBlockHash").append('<a href="block.html?hashBlock='+data.prev_block+'">'+data.prev_block+'</a>');
			for (var i = 0; i < data.txids.length; i++) {
				$("#listOfTx").append('<a href="../transaction/transaction.html?hashTx='+data.txids[i]+'">'+data.txids[i]+'</a><br>');
			}
		} else{
			document.getElementById('errorBlock').style.visibility = 'visible';
			$("#errorBlock").append("Error: block not found");
		}
	}

	//-------------------------------------------------------------------------------------------------------
 
	if (GetURLParameter('idBlock')){
		BlockIdResearch(GetURLParameter('idBlock'),"https://api.blockcypher.com/v1/btc/main/blocks/");
	}
	else if(GetURLParameter('hashBlock')){
		BlockHashResearch(GetURLParameter('hashBlock'),"https://api.blockcypher.com/v1/btc/main/blocks/");
	}

});	