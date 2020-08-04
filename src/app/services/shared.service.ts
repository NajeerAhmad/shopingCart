import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  login() {
    const url = 'https://xebiascart.herokuapp.com/users?username=amigo'
  }

  getProductList() {
    const url = 'https://xebiascart.herokuapp.com/products'
    return this.http.get(url);
  }

  searchByName(data) {
    const url = `https://xebiascart.herokuapp.com/products?title=${data}`
    return this.http.get(url);
  }


}
