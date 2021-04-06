import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  favrtAuthorList: any;
  constructor() {}

  ngOnInit(): void {
    this.favrtAuthorList = this.getFavtAuthors();
  }

  getFavtAuthors() {
    let get = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      get.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return get;
  }
}
