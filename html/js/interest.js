let a = document.getElementById('Principle1');
let b = document.getElementById('Interest1');
let c = document.getElementById('Time1');
document.getElementById('go1').addEventListener('click',simpleInterest);
function simpleInterest(){
    document.getElementById('output11').value = (a.value*b.value*c.value)/100;
    document.getElementById('output12').value = parseInt(a.value,10)+(a.value*b.value*c.value)/100
}
let d = document.getElementById('Principle2');
let e = document.getElementById('Interest2').value/100;
let f = document.getElementById('Time2');
document.getElementById('go2').addEventListener('click',compoundInterest);
function compoundInterest(){
    const totalAmount = d.value * (Math.pow((1+(e/6)),(6*f.value)));
    document.getElementById('output22').value = totalAmount;
    document.getElementById('output21').value = totalAmount - d.value;
}
let x = parseInt(document.getElementById('Principle3').value,10);
let y = parseInt(document.getElementById('Interest3').value,10)/(100*12);
let z = parseInt(document.getElementById('Time3').value,10);
document.getElementById('go3').addEventListener('click', emi)
function emi(){
    let ans = x*y*Math.pow((1+y),z)/(Math.pow((1+y),z)-1);
    document.getElementById('output31').value = (ans*z) - x;
    document.getElementById('output32').value = ans;
}