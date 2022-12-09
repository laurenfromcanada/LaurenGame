let budget = 10000
let happiness = 100



function text() 
{
    document.getElementById("script").innerHTML = budget;
    document.getElementById("hap").innerHTML = happiness;
}



function tran1(){
    budget = budget - 1500
    happiness = happiness + 10
    document.getElementById("hap").innerHTML = happiness
    document.getElementById("script").innerHTML = budget
    document.getElementById("eco").innerHTML = "";
    document.getElementById("first").innerHTML = "";
}

function tran2(){
    budget = budget - 2000
    happiness = happiness + 50
    document.getElementById("hap").innerHTML = happiness
    document.getElementById("script").innerHTML = budget
    document.getElementById("eco").innerHTML = "";
    document.getElementById("first").innerHTML = "";
}

function live1(){
    budget = budget - 700
    happiness = happiness + 10
    document.getElementById("hap").innerHTML = happiness
    document.getElementById("script").innerHTML = budget
    document.getElementById("motel").innerHTML = "";
    document.getElementById("air").innerHTML = "";
    document.getElementById("suite").innerHTML = "";
}

function live2(){
    budget = budget - 950
    happiness = happiness + 50
    document.getElementById("hap").innerHTML = happiness
    document.getElementById("script").innerHTML = budget
    document.getElementById("motel").innerHTML = "";
    document.getElementById("air").innerHTML = "";
    document.getElementById("suite").innerHTML = "";
}

function live3(){
    budget = budget - 1200
    happiness = happiness + 100
    document.getElementById("script").innerHTML = budget
    document.getElementById("hap").innerHTML = happiness
    document.getElementById("motel").innerHTML = "";
    document.getElementById("air").innerHTML = "";
    document.getElementById("suite").innerHTML = "";
}

function food1(){
    let food = document.getElementById("food")
    budget = budget - food
    document.getElementById("script").value = budget
}
