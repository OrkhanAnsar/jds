import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {


  public infos: { name: string, surname: string, digits: number, cardType: string } [] = [
    {
      name: "John",
      surname: "Smith",
      digits: 9356, 
      cardType: "Master Card"
    },
    {
      name: "Adam",
      surname: "Brown",
      digits: 2834,
      cardType: 'Visa'
    },
  ];

  

constructor() { }

ngOnInit() { }

}
