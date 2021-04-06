import { Component, Input, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common'
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  @Input() authorList: any;
  favrtAuthorList: any;
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this.favrtAuthorList = this.getFavtAuthors();
  }

  check(key) {
    const found = this.favrtAuthorList.some((el) => el._id == key);
    return found;
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

  addFavt(a) {
    localStorage.setItem(JSON.stringify(a._id), JSON.stringify(a));
    this.ngOnInit();
  }

  removeFavt(a) {
    localStorage.removeItem(JSON.stringify(a._id));
    this.ngOnInit();
    this.getFavtAuthors()
      this._document.defaultView.location.reload();
  }
}
