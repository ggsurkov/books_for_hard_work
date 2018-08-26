import {State} from "@ngxs/store";
import {PlainBookModel} from "../../models/plain-book.model";
import {PlainCollectionModel} from "../../models/plain-collection.model";
import {BookModel} from "../../models/book.model";
import {CollectionModel} from "../../models/collection.model";

export interface AdminPanelStateModel {
  plainBooks: PlainBookModel[];
  plainCollections: PlainCollectionModel[];
  selectedEditedBook: BookModel;
  selectedEditedCollection: CollectionModel;
}

@State<AdminPanelStateModel>({
  name: 'adminPanelPage',
  defaults: {
    plainBooks: [],
    plainCollections: [],
    selectedEditedBook: null,
    selectedEditedCollection: null,
  },
})
export class AdminPanelState {

  constructor() {
  }


}
