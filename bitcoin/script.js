function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam)
		{
			return sParameterName[1];
		}
	}
}

function AppelWS(param,urlWS,divErreur){
	var appelAjax = $.ajax({
		url : urlWS+param,
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:"5000",
		async : false,
		success : function(data) {
			
		},
		error : function(xhr, status, err) {
			$(divErreur).text('');
		}
	});
	return appelAjax;
}

$(document).ready(function() {

	$("#BoutonRechercheBLock").click(function(){
		if($("#idBlock").val()!=""){
			window.location.href="/bitcoin/block/block.html"+"?idBlock="+ $("#idBlock").val();
		}
	});
	$("#BoutonRechercheTx").click(function(){
		if($("#hashTx").val()!=""){
			window.location.href="/bitcoin/transaction/transaction.html"+"?hashTx="+ $("#hashTx").val();
		}
	});
	$("#BoutonRechercheAddress").click(function(){
		if($("#address").val()!=""){
			window.location.href="/bitcoin/address/address.html"+"?address="+ $("#address").val();
		}
	});
});	