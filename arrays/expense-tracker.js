const account = {
    name: 'Derek',
    expenses: []
}

// expenses -> description, ammount
// addExpense -> description, ammount
// getAccountSummary -> total up all expenses -> name has $1250 in expenses

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(getAccountSummary())
