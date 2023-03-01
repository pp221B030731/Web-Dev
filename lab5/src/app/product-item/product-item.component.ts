import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})


export class ProductItemComponent implements OnInit {

  product: Product | undefined;


  constructor(private route: ActivatedRoute) { }
 
  share(product: Product){
    window.location.href = "https://t.me/share/url?url=" + product.source;

  }

  buy(product: Product) { 
    window.location.href = product.source;
  }
  
  like(product: Product) { 
    product.likes++;
  }

  remove(product: Product) {
    product.removed = true;
  }


  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
}
}

