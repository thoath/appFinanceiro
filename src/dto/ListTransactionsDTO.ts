import Transaction from '../models/Transaction';
import Balance from '../interfaces/BalanceInterface';

export default class ListTransactionsDTO {
  transactions: Array<Transaction>;

  balance: Balance;

  constructor({ transactions, balance }: ListTransactionsDTO) {
    this.transactions = transactions;
    this.balance = balance;
  }
}
