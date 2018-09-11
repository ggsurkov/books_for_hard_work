import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../../models/book.model";
import {Observable} from "rxjs/index";
import {PlainBookModel} from '../../models/plain-book.model';

@Injectable()
export class BookPanelPageService {
  constructor(public http: HttpClient ) {

  }

  saveNewBook(book: BookModel): Observable<BookModel> {
   return this.http.post<BookModel>("http://localhost:3000/api/books/new", book);
  }
  getAllBooks(): Observable<{plainBooks: PlainBookModel[]}>  {
    return this.http.get<{plainBooks: PlainBookModel[]}>("http://localhost:3000/api/books/all");
  }

  // getAllBooks()  {
  //   return this.http.get("http://localhost:3000/api/books/all");
  // }

  updateBook(book: BookModel): Observable<BookModel> {
    return this.http.put<BookModel>(`http://localhost:3000/api/books/${book.guid}`, book);
  }
  deleteBook(guid: string): Observable<{plainBooks: PlainBookModel[]}> {
    return this.http.delete<{plainBooks: PlainBookModel[]}>(`http://localhost:3000/api/books/delete/${guid}`);
  }
}
