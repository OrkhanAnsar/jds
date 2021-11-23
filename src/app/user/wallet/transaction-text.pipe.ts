import { Pipe, PipeTransform } from '@angular/core';
import { Transaction, WalletInfo } from './wallet.model';

@Pipe({
  name: 'transactionText'
})
export class TransactionTextPipe implements PipeTransform {

  transform(transaction: Transaction, wallets: WalletInfo[]): string {
    // return transaction.type === 2 
    //   ? transaction.purchased_coupon.coupon.name 
    //   : (transaction.type === 0 
    //   ? 'From wallet ' + wallets.find(w => w.id == transaction.from_bank_id).name 
    //   : 'To wallet ' + wallets.find(w => w.id == transaction.to_bank_id).name);

    let res = '';

    if (transaction.type === 2) {
      res = transaction.purchased_coupon.coupon.name
    } else if (transaction.type === 0) {
      res = 'From bank ' + wallets.find(w => w.id == transaction.from_bank_id)?.name;
    } else if (transaction.type === 1) {
      res = 'To bank ' + wallets.find(w => w.id == transaction.to_bank_id)?.name;
    }

    return res;
  }
}
