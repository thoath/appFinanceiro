import { TransactionType } from '../models/Transaction';

class TransactionDTO {
  title: string;

  value: number;

  type: TransactionType;

  constructor({ title, value, type }: TransactionDTO) {
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default TransactionDTO;
