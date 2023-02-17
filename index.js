let inputBill = document.getElementById("billAmount");
let inputpercentageTip = document.getElementById("percentageTip");
let inputtipAmount = document.getElementById("tipAmount");
let inputtotalAmount = document.getElementById("totalAmount");
let errorMessagetext = document.getElementById("errorMessage");

function calculateButton() {
    let inputBillvalue = parseInt(inputBill.value);
    let inputpercentageTipvalue = parseInt(inputpercentageTip.value);

    if (inputBillvalue === "") {
        errorMessagetext.textContent = "Please Enter a Valid input";

    } else if (inputpercentageTipvalue === "") {
        errorMessagetext.textContent = "Please Enter a Valid input";

    } else {
        let calculatedTip = (inputpercentageTipvalue / 100) * inputBillvalue;
        let totalAmount = (inputBillvalue + calculatedTip);


        inputtipAmount.value = calculatedTip;
        inputtotalAmount.value = totalAmount;


    }

}
