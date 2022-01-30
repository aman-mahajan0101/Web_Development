let a =5;
 function check(){
     var a = 10;
     document.write(a);
 }
 function addition(){
     var a= (document.getElementById("val1").value);
     var b= (document.getElementById("val2").value);
     var d,e,c;
    //  c = parseInt(a);
    //  d = parseInt(b);
     c = +(a); // Its a another way to parse text to integer
     d = +(b);
     e=c+d;
     document.getElementById("val3").value= e;
 }
 function addition(){
    var a= (document.getElementById("val1").value);
    var b= (document.getElementById("val2").value);
    var d,e,c;
    c = +(a); // Its a another way to parse text to integer
     d = +(b);
    e=c+d;
    document.getElementById("val3").value= e;
}
function subtraction(){
    var a= (document.getElementById("val1").value);
    var b= (document.getElementById("val2").value);
    var d,e,c;
    c = +(a); // Its a another way to parse text to integer
    d = +(b);
    e=c-d;
    document.getElementById("val3").value= e;
}
function multiplication(){
    var a= (document.getElementById("val1").value);
    var b= (document.getElementById("val2").value);
    var d,e,c;
    c = +(a);
     d = +(b);
    e=c*d;
    document.getElementById("val3").value= e;
}
function division(){
    var a= (document.getElementById("val1").value);
    var b= (document.getElementById("val2").value);
    var d,e,c;
  
   c = +(a); 
   d = +(b);
    e=c/d;
    document.getElementById("val3").value= e;
}