import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './wallet.model';

@Pipe({
  name: 'transactionIcon'
})
export class TransactionIconPipe implements PipeTransform {

  transform(transaction: Transaction): string {
    if (transaction.type == 0 || transaction.type == 1) {
      if (transaction.status === 'pending') return '/assets/usd-pending.svg';
      if (transaction.status === 'processed') return '/assets/usd.svg';
    }
    if (transaction.type == 2) {
      if (transaction.status === 'pending') return '/assets/basket-pending.svg';
      if (transaction.status === 'processed') return '/assets/basket.svg';
    }
  }

}
