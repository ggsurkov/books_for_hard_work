import {BookModel, createExampleBook} from './book.model';

export interface CollectionModel {
  guid: string;
  title: string;
  description: string;
  image: {
    lastModified: number,
    lastModifiedDate: Date,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string,
  };
  imagePath: string;
  vote: number;
  books: BookModel[];
}

export function createExampleCollections() {
  return [
    {
      guid: "guid-1",
      title: 'Гуру Тайм Менеджмента',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
      imagePath: 'http://4.bp.blogspot.com/-w8zSyeew9Ig/UW7QCa-H4zI/AAAAAAAAMuM/aOdXctFkrCY/s1600/motivational+bookis.jpg',
      image: null,
      vote: 56,
      books: []
    },
    {
      guid: "guid-2",
      title: 'Выход из зоны комфорта',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
      image: null,
      imagePath: 'https://i.pinimg.com/originals/12/a8/e8/12a8e8d8c7812fdfc33bd4fa3dfda806.jpg',
      vote: 36,
      books: []
    },
    {
      guid: "guid-3",
      title: 'Выход из зоны комфорта',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
      image: null,
      imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      vote: 36,
      books: []
    },
    {
      guid: "guid-4",
      title: 'Выход из зоны комфорта',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
      image: null,
      imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      vote: 36,
      books: []
    },
    {
      guid: "guid-5",
      title: 'Выход из зоны комфорта',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
      image: null,
      imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      vote: 36,
      books: []
    },
  ]
}

export function createCollectionWithBooks() {
  return {
    guid: "guid-6",
    title: 'Выход из зоны комфорта',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto, assumenda, blanditiis consequatur eum ex facilis hic illo laborum nihil odit officiis possimus quidem rem repellendus saepe soluta, ut!',
    image: null,
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    vote: 36,
    books: []
  }
}

export function createEmptyCollection() {
  return {
    guid: null,
    title: '',
    description: '',
    image: null,
    imagePath: '',
    vote: null,
    books: [],
  };
}
