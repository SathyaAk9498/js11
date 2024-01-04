function add(){
    var value1=document.getElementById("val1").value;
    var value2=document.getElementById("val2").value;
    var tot=parseInt(value1) + parseInt(value2);
    document.getElementById("answer").innerHTML="Addition: "+tot;
}
function sub(){
    var value1=document.getElementById("val1").value;
    var value2=document.getElementById("val2").value;
    var tot=parseInt(value1) - parseInt(value2);
    document.getElementById("answer").innerHTML="Substraction: "+tot;
}
function mul(){
    var value1=document.getElementById("val1").value;
    var value2=document.getElementById("val2").value;
    var tot=parseInt(value1) * parseInt(value2);
    document.getElementById("answer").innerHTML="Multiplication:"+tot;
}
function div(){
    var value1=document.getElementById("val1").value;
    var value2=document.getElementById("val2").value;
    var tot=parseInt(value1) / parseInt(value2);
    document.getElementById("answer").innerHTML="Division:"+tot;
}
function incr(){
    var asign1=Number(document.getElementById("asign1").value);
    var asign2=Number(document.getElementById("asign2").value);
    asign1+=(asign2);
    document.getElementById("asign").innerHTML="add:"+asign1;

}

// let age=prompt("enter your age:");
// if(age!=null && age>=18){
    // console.log("you are eligible for vote..");
// }
// else
// {
    // console.log("your are not eligible for vote")
// }
function age(){
    var age=document.getElementById("vote").value
    if (age>=18){
        document.getElementById("result").innerHTML="your are eligible for vote"
    }
        else{
            document.getElementById("result").innerHTML="you are not eligible for vote"
    }
}
function ele(){
    var age= document.getElementById("election").value
    if (age>=18)
    {
        document.getElementById("res").innerHTML="you are eligible for vote"

    }
    else{
        document.getElementById("res").innerHTML="you are not for vote"

    }
}
 function strmm(){
     let text = String (document.getElementById("length").value);
    document.getElementById("result1").innerHTML="string length is"+text.length;
}
