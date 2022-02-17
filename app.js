//expenses calculate
function amount(inputId){
    const expensesInput = document.getElementById(inputId);
    const expensesText = expensesInput.value ;
    const expensesValue = parseFloat(expensesText);
    return expensesValue;
}


document.getElementById('calculate').addEventListener('click',function(){
        const foodExpenses = amount('food');
    const rent = amount('rent');
    const clothesExpanses = amount('clothes');
    const income = amount('income');
    if(income < 0 && foodExpenses <0 && rent <0 && clothesExpanses <0 ){
        const showMessage = document.getElementById('number');
        showMessage.style.display ='none'
    }
    
   else if(income > 0 && foodExpenses >0 && rent >0 && clothesExpanses >0 ){
    const total = foodExpenses + rent + clothesExpanses;
      
          const totalExpenses = document.getElementById('total-expenses').innerText = total;
    const extraAmount = income - totalExpenses;
    const balance = document.getElementById('balance').innerText = extraAmount;
    return balance;
      }
    
  
});
document.getElementById('save-button').addEventListener('click',function(){
    const saveAmount = amount('save-amount');
    const myBalance = document.getElementById('balance').innerText;
    const myBalanceValue = parseFloat(myBalance);
    const savings = (myBalanceValue * saveAmount)/100;
    console.log(savings)
    const savingAmount = document.getElementById('saving-amount').innerText = savings;
    const remainingBalance = myBalanceValue - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
    

    
})
