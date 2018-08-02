import {CollectionModel} from './collection.model';

export interface BookModel {
  guid: string;
  title: string;
  author: string;
  description: string;
  vote: number;
  bookCollection: CollectionModel[];
}
