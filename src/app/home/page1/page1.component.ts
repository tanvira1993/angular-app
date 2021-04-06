import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { IAuthor } from '../../interface/IAuthor';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  authorList : IAuthor [];
  pagination : IAuthor [];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.authorList = data.results;
      this.pagination = data
      console.log("all data",this.pagination)
    })
  }

  pageEvent(page: any) {
    console.log(page);
  }

}
