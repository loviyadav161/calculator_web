let a = document.getElementById('input1');
document.getElementById('go1').addEventListener('click',bin2dec);
function bin2dec(){
    let ans1 =  parseInt(a.value, 2);
    if(isNaN(ans1))
    {
        alert("Please enter 0's and 1's")
    }
    else{
        ans1.toString(10);
        document.getElementById('output1').value = ans1;
    }
}
let b = document.getElementById('input2');
document.getElementById('go2').addEventListener('click',dec2bin);
function dec2bin(){
    let ans2 =  (b.value >>> 0).toString(2);
    document.getElementById('output2').value = ans2;
}
let c = document.getElementById('input3');
document.getElementById('go3').addEventListener('click',bin2hex);
function bin2hex(){
    let ans3 =  parseInt(c.value, 2);
    if(isNaN(ans3))
    {
        alert("Please enter 0's and 1's")
    }
    else{
        ans3=parseInt(c.value, 2).toString(16);
        document.getElementById('output3').value = ans3;
    }
}