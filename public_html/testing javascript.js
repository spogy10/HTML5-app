/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//comment
function getNum1()
{
    return parseInt(document.getElementById("num").value);
}

function getNum2()
{
    return parseInt(document.getElementById("num2").value);
}

function add()
{
    return getNum1() + getNum2();
}


function subtract()
{
    return getNum1() - getNum2();
}

function multiply()
{
    return getNum1() * getNum2();
}

function divide()
{
    return getNum1() / getNum2();
}