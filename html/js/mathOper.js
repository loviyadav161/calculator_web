console.log('hello')
let a = document.getElementById('input11');
let b = document.getElementById('input12');
document.getElementById('go1').addEventListener('click',addition)
function addition(){
    let x =parseInt(a.value, 2);
    let y =parseInt(b.value, 2);
    if(isNaN(x))
    {
        alert("Please enter 0's and 1's");
    }
    else if(isNaN(y))
    {
        alert("Please enter 0's and 1's");
    }
    else
    {
        document.getElementById('output1').value = x + y;
    }
}
let c = document.getElementById('input21');
let d = document.getElementById('input22');
document.getElementById('go2').addEventListener('click',substraction)
function substraction(){
    let x =parseInt(c.value,2) ;
    let y =parseInt(d.value,2)
    if(isNaN(x))
    {
        alert("Please enter 0's and 1's");
    }
    else if(isNaN(y))
    {
        alert("Please enter 0's and 1's");
    }
    else
    {
        console.log("hello");
        document.getElementById('output2').value = x - y;
    }
}
let e = document.getElementById('input31');
let f = document.getElementById('input32');
document.getElementById('go3').addEventListener('click',multiply)
function multiply(){
    let x =parseInt(e.value,2) ;
    let y =parseInt(f.value,2)
    if(isNaN(x))
    {
        alert("Please enter 0's and 1's");
    }
    else if(isNaN(y))
    {
        alert("Please enter 0's and 1's");
    }
    else
    {
        console.log("hello");
        document.getElementById('output3').value = x * y;
    }
}
let g = document.getElementById('input41');
let h = document.getElementById('input42');
document.getElementById('go4').addEventListener('click',divide)
function divide(){
    let x =parseInt(g.value,2) ;
    let y =parseInt(h.value,2)
    if(isNaN(x))
    {
        alert("Please enter 0's and 1's");
    }
    else if(isNaN(y))
    {
        alert("Please enter 0's and 1's");
    }
    else
    {
        document.getElementById('output4').value = x / y;
    }
}