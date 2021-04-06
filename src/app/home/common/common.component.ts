import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input() authorList: any;
  constructor() { }

  ngOnInit(): void {
  }

  check(key){
  const found = this.authorList.some(el => el._id == key);
  return found;
  }

  addFavt(a){
    localStorage.setItem(JSON.stringify(a._id),JSON.stringify(a))
  }

  removeFavt(a){
    localStorage.removeItem(JSON.stringify(a._id));

  }

}
