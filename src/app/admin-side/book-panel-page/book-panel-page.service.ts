import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '../../models/book.model';
import {Observable} from 'rxjs/index';
import {PlainBookModel} from '../../models/plain-book.model';

@Injectable()
export class BookPanelPageService {
  constructor(public http: HttpClient) {

  }

  saveNewBook(book: BookModel): Observable<{plainBooks: PlainBookModel[]}> {
    return this.http.post<{plainBooks: PlainBookModel[]}>('http://localhost:3000/api/books/new', book);
  }

  getAllBooks(): Observable<{ plainBooks: PlainBookModel[] }> {
    return this.http.get<{ plainBooks: PlainBookModel[] }>('http://localhost:3000/api/books/all');
  }
  getBookByGuid(guid: string): Observable<BookModel> {
    return this.http.get<BookModel>(`http://localhost:3000/api/books/${guid}`)
  }

  updateBook(book: BookModel): Observable<{ plainBooks: PlainBookModel[] }> {
    return this.http.put<{ plainBooks: PlainBookModel[] }>(`http://localhost:3000/api/books/${book.guid}`, book);
  }

  deleteBook(guid: string): Observable<{ plainBooks: PlainBookModel[] }> {
    return this.http.delete<{ plainBooks: PlainBookModel[] }>(`http://localhost:3000/api/books/delete/${guid}`);
  }
}
