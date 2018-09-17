import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {BookModel} from "../models/book.model";
import {CollectionModel} from "../models/collection.model";

@Injectable()
export class ClientSideService {
  constructor(private http: HttpClient) {

  }

  getAllBooks():Observable<{books: BookModel[]}> {
    return this.http.get<{ books: BookModel[] }>('http://localhost:3000/api/books/all-full');
  }

  getAllCollections():Observable<{collections: CollectionModel[]}> {
    return this.http.get<{ collections: CollectionModel[] }>('http://localhost:3000/api/collections/all-full');
  }
}
