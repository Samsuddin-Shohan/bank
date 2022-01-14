const inputValue = (inputId)=>{
    const depositBox = document.getElementById(inputId);
    const currentDepositValueText = depositBox.value;
    const currentDepositValueAmount = parseFloat(currentDepositValueText);
    return currentDepositValueAmount;
}

const updateTotal = (totalId,currentAmount)=>{
    const previoutDepositeValueText = document.getElementById(totalId).innerText;    
    const previoutDepositeValueAmount = parseFloat(previoutDepositeValueText);
    const totalDepositeAmount = previoutDepositeValueAmount+currentAmount;
    document.getElementById(totalId).innerText = totalDepositeAmount;
   
}
const updateBalance = (balanceId,currentAmount,isAdd)=>{
    const previousBalanceText = document.getElementById(balanceId).innerText;   
    const previousBalanceAmount = parseFloat(previousBalanceText);
    let totalBalanceAmount=0;
    
    if(isAdd){
         totalBalanceAmount = previousBalanceAmount+ currentAmount;
    }
    else{
         totalBalanceAmount = previousBalanceAmount- currentAmount;
    }
    document.getElementById(balanceId).innerText = totalBalanceAmount;
}
document.getElementById('deposit-button').addEventListener('click', ()=>{
   const currentDepositValueAmount = inputValue('deposit-box');
    updateTotal('deposit-value',currentDepositValueAmount);
    //updating thee balance
    updateBalance('balance-value',currentDepositValueAmount,true);
 

});
document.getElementById('withdraw-button').addEventListener('click',()=>{
    const currentWithdrawValueAmount = inputValue('withdraw-box')
    updateTotal('withdraw-value',currentWithdrawValueAmount);
      //updating thee balance
      updateBalance('balance-value',currentWithdrawValueAmount,false);
})