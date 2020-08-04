import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sharedService.getProductList().subscribe((res: any) => {
      console.log('reessss', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

}
