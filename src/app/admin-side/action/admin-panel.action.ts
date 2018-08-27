import {PlainBookModel} from "../../models/plain-book.model";
import {BookModel} from "../../models/book.model";

export class SelectBook {
  static readonly type = '[PlainBook] select book';

  constructor(public payload: BookModel) {
  }
}
