console.log('hogehoge');
function clickBt(){
    console.log('hogehoge');
    fetch('http://192.168.3.149/L',{mode: 'no-cors'})
    .then(response => response.text())
    .then(text => {
        console.log(text);
    });
}