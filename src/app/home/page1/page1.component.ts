import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { IAuthor } from '../../interface/IAuthor';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  authorList: IAuthor[];
  paginationCount: number;
  paginationtotalCount: number;
  paginationtotallastItemIndex: number;
  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAuthors(20).subscribe((data) => {
      this.authorList = data.results;
      this.paginationCount = data.count;
      this.paginationtotalCount = data.totalCount;
      this.paginationtotallastItemIndex = data.lastItemIndex;
    });
  }

  pageEvent(page: any) {
    let skip;
    if(this.paginationCount == 10){
      skip = (page.pageIndex +1) * page.pageSize
    }
    if(this.paginationCount < 10){
      skip  = 20
    }
    this.authorService.getAuthors(skip).subscribe((data) => {
      this.authorList = data.results;
      this.paginationCount = data.count;
      this.paginationtotalCount = data.totalCount;
      this.paginationtotallastItemIndex = data.lastItemIndex;
    });
  }
}
