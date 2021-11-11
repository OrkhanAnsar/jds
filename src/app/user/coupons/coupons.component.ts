import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {

  public food_details: { restaurant: string, price: number}[] = [
    {
      restaurant: 'Dinero',
      price: 56
    },
    {
      restaurant: 'Metadore',
      price: 73
    },
    {
      restaurant: 'Zakura',
      price: 73
    },
    {
      restaurant: "BJ's Brewhouse",
      price: 47
    },
    {
      restaurant: 'Dinero',
      price: 56
    },
    {
      restaurant: 'Metadore',
      price: 73
    },
    {
      restaurant: 'Zakura',
      price: 73
    },
    {
      restaurant: "BJ's Brewhouse",
      price: 47
    },
  ]


  constructor() { }

  ngOnInit() {}

}
