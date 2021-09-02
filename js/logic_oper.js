let a = document.getElementById('input11');
let b = document.getElementById('input12');
document.getElementById('go1').addEventListener('click',andOperation);
function andOperation(){
    let ans1  = a.value & b.value;
    document.getElementById('output1').value = ans1;
}
let c = document.getElementById('input21');
let d = document.getElementById('input22');
document.getElementById('go2').addEventListener('click',orOperation);
function orOperation(){
    let ans2  = c.value | d.value;
    document.getElementById('output2').value = ans2;
}
let x = document.getElementById('input31');
let y = document.getElementById('input32');
document.getElementById('go3').addEventListener('click',xorOperation);
function xorOperation(){
    let ans3  = x.value ^ y.value;
    document.getElementById('output3').value = ans3;
}