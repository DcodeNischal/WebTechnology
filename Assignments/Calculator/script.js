function calculate(){
var a= document.getElementById("quantity1").value;
var b= document.getElementById("price1").value;
var c= document.getElementById("quantity2").value;
var d= document.getElementById("price2").value;
var tax=document.getElementById("tax").value;
var t1=0;
var t2=0;
var subtotal = 0;
var tax_total=0;
var total=0;
 
t1=a*b;
document.getElementById("total1").innerHTML = t1;
t2=c*d;
document.getElementById("total2").innerHTML = t2;
subtotal=t1+t2;
document.getElementById("subtotal").innerHTML = subtotal;
tax_total=(tax/100)*subtotal;
document.getElementById("tax-calculate").innerHTML = tax_total;
total=subtotal+tax_total;
document.getElementById("grandtotal").innerHTML =total;
}