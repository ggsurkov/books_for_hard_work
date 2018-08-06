import {CollectionModel, createCollectionWithBooks} from './collection.model';
import {createDefaultsRefInfoButton, RefInfoButtonModel} from "./ref-info-button.model";

export interface BookModel {
  guid: string;
  title: string;
  author: string;
  description: string;
  vote: number;
  bookCollection: CollectionModel[];
  refShopButtons: RefInfoButtonModel[];
}

export function createEmptyBook() {
  return {
    guid: "",
    title: "Генри Форд. Моя жизнь. Мои достижения",
    author: "Генри Форд",
    description: "Книга \"Моя жизнь. Мои достижения\" известного американского промышленника Генри Форда является интереснейшим философским и историческим трактатом, объясняющим временного мироустройства.",
    vote: 5,
    bookCollection: [createCollectionWithBooks],
    refShopButtons: [createDefaultsRefInfoButton, createDefaultsRefInfoButton],
  }
}
