import Transaction, { TransactionType } from '../models/Transaction';
import CreateTransactionDTO from '../dto/CreateTransactionDTO';
import Balance from '../dto/BalanceDTO';
import ListTransactionsDTO from '../dto/ListTransactionsDTO';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): ListTransactionsDTO {
    return new ListTransactionsDTO({
      transactions: this.transactions,
      balance: this.getBalance(),
    });
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((total, transaction) => {
      return transaction.type === TransactionType.income
        ? total + transaction.value
        : total + 0;
    }, 0);

    const outcome = this.transactions.reduce((total, transaction) => {
      return transaction.type === TransactionType.outcome
        ? total + transaction.value
        : total + 0;
    }, 0);

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
