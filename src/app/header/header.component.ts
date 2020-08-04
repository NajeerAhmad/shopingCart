import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() dataSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  searchProduct(event) {
    console.log('eventnnn', event.target.value);
    const data = event.target.value;
    this.dataSearch.emit(data);
  }

}
