import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;
  colorArray = [
    { "colorName": "grey" },
    { "colorName": "red" },
    { "colorName": "orange" },
    { "colorName": "yelow" },
  ];

  brandArray = [
    { "colorName": "B1" },
    { "colorName": "B2" },
    { "colorName": "B3" },
    { "colorName": "B4" },
  ];
  priceArray = [100, 200, 300];
  discountArray = [10, 20, 30];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sharedService.getProductList().subscribe((res: any) => {
      console.log('reessss', res);
      if (res && res.length > 0) {
        this.productList = res;
        // this.colorArray.push(res.colour)
      }
    });
  }

}
