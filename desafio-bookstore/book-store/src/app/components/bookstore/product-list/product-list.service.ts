import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private urlSheetBestAPI = 'https://sheet.best/api/sheets/27bfec4a-5799-4702-a5fa-23ab13ece276';


  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application-json' })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlSheetBestAPI);

  }
}
