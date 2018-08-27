import {Action, State, StateContext} from "@ngxs/store";
import {PlainBookModel} from "../../models/plain-book.model";
import {PlainCollectionModel} from "../../models/plain-collection.model";
import {BookModel} from "../../models/book.model";
import {CollectionModel} from "../../models/collection.model";
import {SelectBook} from "../action/admin-panel.action";

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


  @Action(SelectBook)
  selectBook({patchState}: StateContext<AdminPanelStateModel>, {payload}: SelectBook): void {
    patchState({selectedEditedBook: payload})
  }

}
