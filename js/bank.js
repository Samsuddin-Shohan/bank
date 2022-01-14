document.getElementById('deposit-button').addEventListener('click', ()=>{
   const depositBox = document.getElementById('deposit-box');
   const currentDepositValueText = depositBox.value;
   const currentDepositValueAmount = parseFloat(currentDepositValueText);
    const previoutDepositeValueText = document.getElementById('deposit-value').innerText;    
    const previoutDepositeValueAmount = parseFloat(previoutDepositeValueText);
    const totalDepositeAmount = previoutDepositeValueAmount+currentDepositValueAmount;
    document.getElementById('deposit-value').innerText = totalDepositeAmount;
    //updating thee balance
    const previousBalanceText = document.getElementById('balance-value').innerText;   
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const totalBalanceAmount = previousBalanceAmount+ currentDepositValueAmount;
    document.getElementById('balance-value').innerText = totalBalanceAmount;

});
document.getElementById('withdraw-button').addEventListener('click',()=>{
    const withdrawBox = document.getElementById('withdraw-box');
    const currentWithdrawValueText = withdrawBox.value;
    const currentWithdrawValueAmount = parseFloat(currentWithdrawValueText);
     const previoutWithdrawValueText = document.getElementById('withdraw-value').innerText;    
     const previoutWithdrawValueAmount = parseFloat(previoutWithdrawValueText);
     const totalWithdrawAmount = previoutWithdrawValueAmount+currentWithdrawValueAmount;
     document.getElementById('withdraw-value').innerText = totalWithdrawAmount;
      //updating thee balance
    const previousBalanceText = document.getElementById('balance-value').innerText;   
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const totalBalanceAmount = previousBalanceAmount-currentWithdrawValueAmount;
    document.getElementById('balance-value').innerText = totalBalanceAmount;
})