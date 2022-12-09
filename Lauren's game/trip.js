let budget = 10000
let happiness = 100



function text() 
{
    document.getElementById("script").innerHTML = budget;
    document.getElementById("hap").innerHTML = happiness;
}



function tran1(){
    budget = budget - 1500
    document.getElementById("script").innerHTML = budget
    document.getElementById("eco").innerHTML = "";
    document.getElementById("first").innerHTML = "";
}

function tran2(){
    budget = budget - 1500
    document.getElementById("script").innerHTML = budget
    document.getElementById("eco").innerHTML = "";
    document.getElementById("first").innerHTML = "";
}

function live1(){
    budget = budget - 700
    document.getElementById("script").innerHTML = budget
    document.getElementById("motel").innerHTML = "";
    document.getElementById("air").innerHTML = "";
    document.getElementById("suite").innerHTML = "";
}
