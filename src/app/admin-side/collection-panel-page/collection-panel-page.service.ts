import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {CollectionModel} from '../../models/collection.model';
import {PlainCollectionModel} from '../../models/plain-collection.model';

@Injectable()
export class CollectionPanelPageService {
  constructor(public http: HttpClient) {

  }

  saveNewCollection(collection: CollectionModel): Observable<{ plainCollections: PlainCollectionModel[] }> {
    return this.http.post<{ plainCollections: PlainCollectionModel[] }>('http://localhost:3000/api/collections/new', collection);
  }

  getAllCollections(): Observable<{ plainCollections: PlainCollectionModel[] }> {
    return this.http.get<{ plainCollections: PlainCollectionModel[] }>('http://localhost:3000/api/collections/all');
  }

  getCollectionByGuid(guid: string): Observable<CollectionModel> {
    return this.http.get<CollectionModel>(`http://localhost:3000/api/collections/${guid}`);
  }

  updateCollection(collection: CollectionModel): Observable<{ plainCollections: PlainCollectionModel[] }> {
    return this.http.put<{ plainCollections: PlainCollectionModel[] }>(`http://localhost:3000/api/collections/${collection.guid}`, collection);
  }

  deleteCollection(guid: string): Observable<{ plainCollections: PlainCollectionModel[] }> {
    return this.http.delete<{ plainCollections: PlainCollectionModel[] }>(`http://localhost:3000/api/collections/delete/${guid}`);
  }
}
