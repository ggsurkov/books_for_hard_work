import {BookModel} from "../../models/book.model";

export class SelectBook {
  static readonly type = '[PlainBook] select book';

  constructor(public payload: BookModel) {
  }
}

export class UpdateBook {
  static readonly type = '[BookModel] update book';

  constructor(public payload: BookModel) {
  }
}

export class SaveNewBook {
  static readonly type = '[BookModel] SaveNewBook book';

  constructor(public payload: BookModel) {
  }
}

export class DeleteBook {
  static readonly type = '[BookModel] delete book';

  constructor(public payload: string) {
  }
}


export class GetAllPlainBooks {
  static readonly type = '[PlainBook] download all plain books for table';
}


export class ClearBookPageState {
  static readonly type = '[BookModel] clear state in book page component, when he destroyed';
}


