/**
 * Created by O.Chupilka
 * 2019-04-12
 */

//
var numbers = document.querySelectorAll('.btn'),
    operations = document.querySelectorAll('.operator'),
    decimal = document.getElementById('decimal'),
    result = document.getElementById('result');
    c = document.getElementById('c');
    ce = document.getElementById('ce');
    console.log(result);

function pressDigitBtn(pressedDigitValue) {

    //if (...) { // new operation
        // document.getElementById("operand1Id").innerText = "";
        // document.getElementById("operand2Id").innerText = "";
        // document.getElementById("operationId").innerText = "";
        // document.getElementById("inputId").value = "";
    //}
    document.getElementById("inputId").value += pressedDigitValue;
}


