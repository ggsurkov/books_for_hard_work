import {BookModel, createExampleBook} from './book.model';

export interface AuthorModel {
  guid: string;
  name: string;
  description: string;
  books: BookModel[];
}

export function createExampleAuthor() {
  return {
    guid: "author-guid",
    name: "Генри Форд",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores ea illo in magnam nemo reprehenderit unde. A amet aspernatur autem consectetur cum doloremque eaque, esse et hic nemo rem repudiandae soluta vitae? Aperiam corporis delectus deleniti dolores esse est exercitationem facere facilis id labore magnam necessitatibus nisi obcaecati officiis quas, recusandae vitae. A accusamus adipisci aperiam asperiores beatae blanditiis culpa deserunt doloremque ducimus eligendi explicabo facere fugiat illo in ipsa itaque iure laboriosam, minima minus molestiae nam necessitatibus, nesciunt nihil nisi non officia officiis omnis pariatur quam quas quidem repellendus sapiente sed sit, veritatis voluptas voluptate. Ad adipisci alias aut autem dignissimos ea eaque, eius eum exercitationem ipsam ipsum iure laborum minus neque officiis perspiciatis quasi quis recusandae reiciendis suscipit unde veniam, vitae. Aliquam cupiditate deleniti incidunt. Alias autem dolorem dolores earum eius, eligendi eum ex explicabo inventore magni maxime minus necessitatibus optio pariatur quo rerum ullam ut!",
    books: [createExampleBook(),createExampleBook(),createExampleBook()],
  }
}
