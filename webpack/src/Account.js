import { sortBy, first } from 'underscore'

class Account {
  constructor() {
    this.transacation = [];
  }

  getTopTransactions() {
    var getSortKey = transaction => {
      -Math.abs(transaction.amount)
    }
    var sortedTransactions = sortBy(
      this.transacation, getSortKey
    )
    return first(sortedTransactions, 3);
  }

  deposit(amount, date) {
    this.transactions.push({
      amount: amount,
      date: date
    });
  }
  withdraw(amount, date) {
    this.transactions.push({
      amount: -amount,
      date: date
    });
  }
}