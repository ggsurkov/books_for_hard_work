import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../../models/book.model";
import {Observable} from "rxjs/index";

@Injectable()
export class BookPanelPageService {
  constructor(public http: HttpClient ) {

  }

  saveNewBook(book: BookModel): Observable<BookModel> {
    const postData = new FormData();
    postData.append("image", book.image);
   return this.http.post<BookModel>("http://localhost:3000/api/books", book);
  }
  getAllBooks(): Observable<BookModel[]>  {
    return this.http.get<BookModel[]>("http://localhost:3000/api/books");
  }
}
