let a = document.getElementById('input11');
let b = document.getElementById('input12');
document.getElementById('go1').addEventListener('click',addition)
function addition(){
    let x =parseInt(a.value,2) ;
    let y =parseInt(b.value,2)
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
        document.getElementById('output1').value = x + y;
    }
}
a = document.getElementById('input21');
b = document.getElementById('input22');
document.getElementById('go2').addEventListener('click',substraction)
function substraction(){
    let x =parseInt(a.value,2) ;
    let y =parseInt(b.value,2)
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
a = document.getElementById('input31');
b = document.getElementById('input32');
document.getElementById('go3').addEventListener('click',multiply)
function multiply(){
    let x =parseInt(a.value,2) ;
    let y =parseInt(b.value,2)
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
a = document.getElementById('input41');
b = document.getElementById('input42');
document.getElementById('go4').addEventListener('click',divide)
function divide(){
    let x =parseInt(a.value,2) ;
    let y =parseInt(b.value,2)
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
        document.getElementById('output4').value = x / y;
    }
}