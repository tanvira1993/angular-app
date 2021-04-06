import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthorService{
    constructor(private httpClient: HttpClient){}
    getAuthors(skip) : Observable<any> {
        return this.httpClient.get(`https://api.quotable.io/authors?limit=10&skip=${skip}`)
    }
}