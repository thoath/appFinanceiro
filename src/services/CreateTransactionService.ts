import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction, { TransactionType } from '../models/Transaction';
import CreateTransactionDTO from '../dto/CreateTransactionDTO';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: CreateTransactionDTO): Transaction {
    if (!Object.values(TransactionType).includes(type)) {
      throw Error('Invalid transaction type');
    }

    const { total } = this.transactionsRepository.getBalance();

    if (type === TransactionType.outcome && total < value) {
      throw Error('outcome must be lower than total.');
    }

    return this.transactionsRepository.create({
      title,
      value,
      type,
    });
  }
}

export default CreateTransactionService;
