import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'iKhokha Mover Pro',
      url: 'product1.png',
      price: '199.00'
    },
    {
      name: 'iKhokha Shaker Solo',
      url: 'product2.png',
      price: '999.00'
    },
    {
      name: 'iKhokha Register - Mover',
      url: 'product3.png',
      price: '1670.00'
    },
    {
      name: 'iKhokha Register - Mover',
      url: 'product3.png',
      price: '1670.00'
    },
    {
      name: 'iKhokha Mover Pro',
      url: 'product1.png',
      price: '195.00'
    },
    {
      name: 'iKhokha Shaker Solo',
      url: 'product2.png',
      price: '999.00'
    },
    {
      name: 'iKhokha Register - Mover',
      url: 'product3.png',
      price: '1670.00'
    },
    {
      name: 'iKhokha Register - Mover',
      url: 'product3.png',
      price: '1670.00'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
