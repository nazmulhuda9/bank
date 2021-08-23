document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)

    const depositTotal = document.getElementById('deposit-total')
    const depositTotalAmountText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountText);
    const depositTotalResult = depositTotalAmount + depositAmount;

    depositTotal.innerText = depositTotalResult;
    // balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount;


    depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText)

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);
    const withdrawTotalResult = withdrawTotalAmount + withdrawAmount;

    withdrawTotal.innerText = withdrawTotalResult;
    // balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;


    withdrawInput.value = '';
})