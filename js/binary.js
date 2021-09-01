let a = document.getElementById('input');
document.getElementById('go').addEventListener('click',bin2dec);
function bin2dec(){
    let ans =  parseInt(a.value, 2).toString(10);
    document.getElementById('output').value = ans;
}
