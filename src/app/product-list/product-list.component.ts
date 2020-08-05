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
    { "colour": "grey" },
    { "colour": "red" },
    { "colour": "orange" },
    { "colour": "yelow" },
  ];

  brandArray = [
    { "brand": "B1" },
    { "brand": "B2" },
    { "brand": "B3" },
    { "brand": "B4" },
  ];
  priceArray = [100, 200, 300];
  discountArray = [10, 20, 30];
  colorName: any;
  brand: any;
  count = 0;
  price: any;
  discount: any;

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

  searchProduct(event) {
    console.log('eventnnn', event);
    const data = event;
    this.sharedService.searchByName(data).subscribe((res: any) => {
      // console.log('flter data', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

  onChange(data: string, isChecked: boolean) {
    // console.log('>>>>>>data', data);
    this.colorName = data;
    // console.log('isChecked', isChecked)
    this.searchBasedProperty();
  }

  onChangeBrand(data: string, isChecked: boolean) {
    // console.log('>>>>>>brand', data);
    this.brand = data;
    this.searchBasedProperty();
    // console.log('isChecked22', isChecked)
    // this.searchBasedProperty()
  }

  selectPriceChange() {
    this.searchBasedProperty();
    // console.log('price', this.price);
  }

  selectDiscountChange() {
    this.searchBasedProperty();
    // console.log('price', this.discount);
  }

  searchBasedProperty() {
    const filterData = {
      color: this.colorName ? this.colorName : '',
      brand: this.brand ? this.brand : '',
      price: this.price ? this.price : '',
      discount: this.discount ? this.discount : ''
    }
    this.sharedService.searchByProperties(filterData).subscribe((res: any) => {
      // console.log('flter data', res);
      if (res && res.length > 0) {
        this.productList = res;
      }
    });
  }

  countItem() {
    this.count += 1;
  }
}
