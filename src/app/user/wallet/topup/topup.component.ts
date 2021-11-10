import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss'],
})
export class TopupComponent implements OnInit {

  // processForm: FormGroup = this.fb .group({
  //   card: ['', [Validators.required]],
  //   amount: ['', [Validators.required]],
  //   process: ['', [Validators.required]],
  // })

  public cards: { name: string, bank_name: string, status: string}[] = [
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
    {
      name: "John",
      surname: "Smith",
      digits: 9356,
      cardType: "Master Card"
    },
  ]

  constructor( ) { }


  ngOnInit() {

  }

}
