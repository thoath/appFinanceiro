import Transaction from '../models/Transaction';
import Balance from './BalanceDTO';

export default class ListTransactionsDTO {
  transactions: Array<Transaction>;

  balance: Balance;

  constructor({ transactions, balance }: ListTransactionsDTO) {
    this.transactions = transactions;
    this.balance = balance;
  }
}
