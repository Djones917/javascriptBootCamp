const account = {
    name: 'Derek Jones',
    income: [],
    expenses: [],
    addExpense: function (description, amount) {
       this.expenses.push({
           description: description,
           amount: amount
       })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function(expense){
             totalExpenses = totalExpenses + expense.amount
        })
        
        let totalIncome = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        return `${this.name} has $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}


// 1. add income array to account
// 2. add income method -> description, amount
// 3. tweak getAccountSummary - Derek has a balance of $10. $100 in income. $90 in expenses 



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
