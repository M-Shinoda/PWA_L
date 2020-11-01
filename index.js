console.log('hogehoge');

var digit1='', digit2='', digit3=''
var IP='http://192.168.3.'
$('.form-control').change(function() {
    // 選択されているvalueを取り出す
    digit1 = $('#FormControlSelect1').val();
    console.log(digit1);
    digit2 = $('#FormControlSelect2').val();
    console.log(digit2);
    digit3 = $('#FormControlSelect3').val();
    console.log(digit3);
    $('.IPAddr').text("192.168.3."+digit1+digit2+digit3);
    console.log(IP+digit1+digit2+digit3)
});

$(function() {
    $('.ON').on('click',function() {
        navigator.vibrate(1000);
        fetch(IP+digit1+digit2+digit3+'/H',{mode: 'no-cors'})
        .then(response => response.text())
        .then(text => {
            console.log(text);
        });
    });
    $('.OFF').on('click',function() {
        navigator.vibrate(1000);
        fetch(IP+digit1+digit2+digit3+'/L',{mode: 'no-cors'})
        .then(response => response.text())
        .then(text => {
            console.log(text);
        });
    });
  });