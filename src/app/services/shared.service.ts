import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  login(data) {
    const url = `https://xebiascart.herokuapp.com/users?username=${data.userName}`
    return this.http.get(url)
  }

  getProductList() {
    const url = 'https://xebiascart.herokuapp.com/products'
    return this.http.get(url);
  }

  searchByName(data) {
    const url = `https://xebiascart.herokuapp.com/products?title=${data}`
    return this.http.get(url);
  }

  searchByProperties(filterData) {
    const url = `https://xebiascart.herokuapp.com/filters`
    return this.http.get(url + filterData);
  }


}
