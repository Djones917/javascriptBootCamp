// Changing an objects values. changing one changes the other.
let myAccount = {
    name: 'Derek Jones',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {   
    account.expenses = account.expenses + amount;    
}

addExpense(myAccount, 2.50); 
console.log(myAccount);     // changing one changes the other. But they are both referencing the same object. This will print
 
