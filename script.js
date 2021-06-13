//pabicon
var gifcon = new Array();
    gifcon[gifcon.length]='./img/Frame0.png';
    gifcon[gifcon.length]='./img/Frame1.png';

var gifico = setInterval(function(){
    tw = $('link[rel="icon"]');
    n=gifcon.indexOf(tw.attr('href'));
    if(0<=n && n*1+1<gifcon.length){
        tw.attr('href',gifcon[n*1+1]);
    }else{
        tw.attr('href',gifcon[0]);
    }
} , 1000);

//img
$( document ).ready( function() {
    $( 'img' ).not( 'a.background img' ).wrap( $( '<span></span>' ));// 이미지 뒤에 검은색 배경추가 코드. 전체 img를 선택해서 span 태그로 감싼다.
    $( '.content a, .tag a' ).addClass('photo');
    $('.content a, .tag a').attr('onclick','""');
    //a에 클래스 추가
});


//keyword
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
