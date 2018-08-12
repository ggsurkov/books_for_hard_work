import {BookModel} from './book.model';

export interface AuthorModel {
  guid: string;
  name: string;
  books: BookModel[];
}
