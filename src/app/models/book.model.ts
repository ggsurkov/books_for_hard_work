import {CollectionModel, createCollectionWithBooks} from './collection.model';
import {createDefaultsRefInfoButton, RefInfoButtonModel} from "./ref-info-button.model";

export interface BookModel {
  guid: string;
  title: string;
  author: string;
  img: {
    lastModified: number,
    lastModifiedDate: Date,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string,
  };
  shortDescription: string;
  description: string;
  vote: number;
  bookCollection: CollectionModel[];
  refShopButtons: RefInfoButtonModel[];
  youtubeReviewVideoCodes: string;
}

export function createExampleBook() {
  return {
    guid: "123123123",
    title: "Генри Форд. Моя жизнь. Мои достижения",
    author: "Генри Форд",
    img: null,
    shortDescription: "Книга \"Моя жизнь. Мои достижения\" известного американского промышленника Генри Форда является интереснейшим философским и историческим трактатом, объясняющим временного мироустройства.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolor et fuga, id illo, maxime nobis obcaecati, officiis quibusdam sapiente voluptatum. Adipisci aperiam aut consequuntur cum dolore ducimus eius eligendi et ex id ipsum itaque magni mollitia natus nesciunt nostrum odit, officiis placeat quae quo repudiandae sequi soluta sunt tempora temporibus velit veritatis voluptatibus. Accusantium aperiam cum dolor eaque harum illo maiores, quia quisquam. Ad aspernatur dicta, dolor eos, error mollitia, nihil numquam optio quaerat quidem sed vero. Accusamus, autem commodi consectetur consequuntur cumque debitis distinctio doloremque maiores maxime nam nemo nobis nulla optio quisquam ut? Architecto at beatae delectus fuga fugit laboriosam sapiente? Amet est incidunt itaque, odio praesentium qui saepe sint. Ad amet autem blanditiis commodi corporis culpa cupiditate distinctio eaque est, eum explicabo facere facilis fuga fugiat fugit id, in itaque laboriosam mollitia nihil odio pariatur, possimus quidem quis recusandae rem repellendus repudiandae soluta tempora ullam velit vero voluptatem voluptatibus.\n" +
    "Accusamus, assumenda aut esse ex fuga hic illum iure laboriosam molestiae mollitia nostrum, officia reprehenderit tenetur velit voluptatum. Blanditiis doloribus ducimus esse est et exercitationem illo, inventore ipsa minima, nesciunt odit qui temporibus? Dolorem hic officia recusandae voluptates voluptatibus! Accusamus assumenda ea exercitationem hic impedit iure iusto natus nihil nostrum quo! Est facilis labore optio perspiciatis repellat totam ullam unde voluptatibus! A consequatur earum eius esse expedita fuga id ipsam laboriosam magni molestiae nisi nulla obcaecati quidem ratione repellat sapiente sunt ut veritatis, voluptas voluptatem? Alias amet beatae laudantium magnam pariatur placeat tenetur vero? Necessitatibus, rem!",
    vote: 5,
    bookCollection: [],
    refShopButtons: [],
    youtubeReviewVideoCodes: "SxdxzHjJ-j0",
  }
}

export function createEmptyBook() {
  return {
    guid: "empty-guid",
    title: null,
    author: null,
    img: null,
    shortDescription: null,
    description: null,
    vote: null,
    bookCollection: [],
    refShopButtons: [
      {
        id: 1,
        name: "Ссылка на Литрес",
        label: "litres",
        price: "",
        refUrl: "",
        enabled: false,
      },
      {
        id: 2,
        name: "Ссылка на Альпину",
        label: "alpina",
        price: "",
        refUrl: "",
        enabled: false,
      },
      {
        id: 3,
        name: "Ссылка на Лабиринт",
        label: "labirint",
        price: "",
        refUrl: "",
        enabled: false,
      },
      {
        id: 4,
        name: "Ссылка на Республику",
        label: "republic",
        price: "",
        refUrl: "",
        enabled: false,
      },
      {
        id: 5,
        name: "Ссылка на Буквоед",
        label: "bukvoed",
        price: "",
        refUrl: "",
        enabled: false,
      },
    ],
    youtubeReviewVideoCodes: ""
  }

}
