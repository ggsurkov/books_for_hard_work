import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CollectionModel, createEmptyCollections} from '../models/collection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collections: CollectionModel[] = createEmptyCollections();

  constructor(public http: HttpClient) {

  }
  ngOnInit() {
    // this.http.get(`http://localhost:3000/api/posts`).subscribe((next) => {
    //   console.log("GET запрос получен: ", next)
    // });
    // this.http.post(`http://localhost:3000/api/posts`, {post: {
    //     id: "ksajflaj132",
    //     title: "Second server-side post",
    //     content: "This is coming from the server!"
    //   }}).subscribe((next) => {
    //   console.log("POST запрос отправлен: ", next)
    // })
  }
}
