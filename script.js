$(document).ready(function() {
	$("#keyword1").show();
	$("#keyword2").hide();
	$("#keyword3").hide();
	$("#keyword4").hide();
	$("#keyword5").hide();
	$("#keyword6").hide();
	$("#keyword7").hide();
	$("#keyword1").click(function() {
		$("#keyword1").hide();
		$("#keyword2").show();
		$("#keyword3").hide();
		$("#keyword4").hide();
		$("#keyword5").hide();
		$("#keyword6").hide();
		$("#keyword7").hide();
	});
	$("#keyword2").click(function() {
		$("#keyword1").hide();
		$("#keyword2").hide();
		$("#keyword3").show();
		$("#keyword4").hide();
		$("#keyword5").hide();
		$("#keyword6").hide();
		$("#keyword7").hide();
	});
	$("#keyword3").click(function() {
		$("#keyword1").hide();
		$("#keyword2").hide();
		$("#keyword3").hide();
		$("#keyword4").show();
		$("#keyword5").hide();
		$("#keyword6").hide();
		$("#keyword7").hide();
	});
	$("#keyword4").click(function() {
		$("#keyword1").hide();
		$("#keyword2").hide();
		$("#keyword3").hide();
		$("#keyword4").hide();
		$("#keyword5").show();
		$("#keyword6").hide();
		$("#keyword7").hide();
	});
	$("#keyword5").click(function() {
		$("#keyword1").hide();
		$("#keyword2").hide();
		$("#keyword3").hide();
		$("#keyword4").hide();
		$("#keyword5").hide();
		$("#keyword6").show();
		$("#keyword7").hide();
	});
	$("#keyword6").click(function() {
		$("#keyword1").hide();
		$("#keyword2").hide();
		$("#keyword3").hide();
		$("#keyword4").hide();
		$("#keyword5").hide();
		$("#keyword6").hide();
		$("#keyword7").show();
	});
	//right keyword
	$("#keyword8").show();
	$("#keyword9").hide();
	$("#keyword10").hide();
	$("#keyword11").hide();
	$("#keyword12").hide();
	$("#keyword13").hide();
	$("#keyword14").hide();
	$("#keyword8").click(function() {
		$("#keyword8").hide();
		$("#keyword9").show();
		$("#keyword10").hide();
		$("#keyword11").hide();
		$("#keyword12").hide();
		$("#keyword13").hide();
		$("#keyword14").hide();
	});
	$("#keyword9").click(function() {
		$("#keyword8").hide();
		$("#keyword9").hide();
		$("#keyword10").show();
		$("#keyword11").hide();
		$("#keyword12").hide();
		$("#keyword13").hide();
		$("#keyword14").hide();
	});
	$("#keyword10").click(function() {
		$("#keyword8").hide();
		$("#keyword9").hide();
		$("#keyword10").hide();
		$("#keyword11").show();
		$("#keyword12").hide();
		$("#keyword13").hide();
		$("#keyword14").hide();
	});
	$("#keyword11").click(function() {
		$("#keyword8").hide();
		$("#keyword9").hide();
		$("#keyword10").hide();
		$("#keyword11").hide();
		$("#keyword12").show();
		$("#keyword13").hide();
		$("#keyword14").hide();
	});
	$("#keyword12").click(function() {
		$("#keyword8").hide();
		$("#keyword9").hide();
		$("#keyword10").hide();
		$("#keyword11").hide();
		$("#keyword12").hide();
		$("#keyword13").show();
		$("#keyword14").hide();
	});
	$("#keyword13").click(function() {
		$("#keyword8").hide();
		$("#keyword9").hide();
		$("#keyword10").hide();
		$("#keyword11").hide();
		$("#keyword12").hide();
		$("#keyword13").hide();
		$("#keyword14").show();
	});
});



jQuery(function($){
 $("#topBtn").click(function(){
 	$("#top").slideto({highlight: false});
 });
});
