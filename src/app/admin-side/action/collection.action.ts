import {CollectionModel} from "../../models/collection.model";

export class SelectCollection {
  static readonly type = '[PlainCollection] select Collection';

  constructor(public payload: CollectionModel) {
  }
}

export class UpdateCollection {
  static readonly type = '[CollectionModel] update Collection';

  constructor(public payload: CollectionModel) {
  }
}

export class GetAllPlainCollections {
  static readonly type = '[PlainCollection] download all plain Collections for table';
}


export class ClearCollectionPageState {
  static readonly type = '[CollectionModel] clear state in Collection page component, when he destroyed';
}
