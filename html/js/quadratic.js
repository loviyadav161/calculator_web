var a = document.getElementById('coff_x2').value;
var b = document.getElementById('coff_x').value;
var c = document.getElementById('value_c').value;
document.getElementById('go').addEventListener('click',solution);
function solution(){
    var d = Math.pow(b,2) - (4*a*c);
    if(d == 0)
    {
        var root1 = (-b + Math.sqrt(d))/(2*a);
        document.getElementById('output1').value = root1;
        var root2 = (-b - Math.sqrt(d))/(2*a);
        document.getElementById('output2').value = root2;
    }
    else if(d > 0)
    {
        var root1 = (-b + Math.sqrt(d))/(2*a);
        document.getElementById('output1').value = root1;
        var root2 = (-b - Math.sqrt(d))/(2*a);
        document.getElementById('output2').value = root2;
    }
    else if(d < 0)
    {
        var root1 = (-b/(2*a)).toFixed(5);
        document.getElementById('output1').value = root1;
        var root2 = (Math.sqrt(-d))/(2*a).toFixed(5);
        document.getElementById('output2').value = root2;
    }
}
