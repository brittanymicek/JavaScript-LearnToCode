"use strict";

window.onload = function() {
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked;

    const subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = onSubtractBtnClicked;

    const multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = onMultiplyBtnClicked;

    const divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = onDivideBtnClicked;

}

function onAddBtnClicked() {
    const num1Field = document.getElementById("num1");
    let num1 = Number(num1Field.value);

    const num2Field = document.getElementById("num2");
    let num2 = Number(num2Field.value);
 
    let sum = num1 + num2;
    
    const answerField = document.getElementById("answer");
    answerField.value = sum;
    
}

function onSubtractBtnClicked() {
    const num1Field = document.getElementById("num1");
    let num1 = Number(num1Field.value);

    const num2Field = document.getElementById("num2");
    let num2 = Number(num2Field.value);
 
    let difference = num1 - num2;
    
    const answerField = document.getElementById("answer");
    answerField.value = difference;
    
}

function onMultiplyBtnClicked() {
    const num1Field = document.getElementById("num1");
    let num1 = Number(num1Field.value);

    const num2Field = document.getElementById("num2");
    let num2 = Number(num2Field.value);
 
    let product = num1 * num2;
    
    const answerField = document.getElementById("answer");
    answerField.value = product;
    
}

function onDivideBtnClicked() {
    const num1Field = document.getElementById("num1");
    let num1 = Number(num1Field.value);

    const num2Field = document.getElementById("num2");
    let num2 = Number(num2Field.value);
 
    let quotient = num1 / num2;
    
    const answerField = document.getElementById("answer");
    answerField.value = quotient;
    
}
