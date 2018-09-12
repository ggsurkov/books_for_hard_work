import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {CollectionModel} from '../../../models/collection.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-collection-form',
  templateUrl: './update-collection-form.component.html',
  styleUrls: ['./update-collection-form.component.css']
})
export class UpdateCollectionFormComponent implements OnDestroy {
  @Input() selectedEditedCollection: CollectionModel;
  @Output() updateCollection: EventEmitter<CollectionModel> = new EventEmitter<CollectionModel>();
  @Output() deleteCollection: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('updateForm') updateForm: NgForm;
  constructor() { }

  ngOnDestroy() {
    this.deleteCollection.unsubscribe();
    this.updateCollection.unsubscribe();
  }
  updateSelectedCollection() {
    this.updateCollection.emit(this.selectedEditedCollection);
    this.updateForm.resetForm();
  }

  deleteSelectedBook() {
    this.deleteCollection.emit(this.selectedEditedCollection.guid);
    this.updateForm.resetForm();
  }
}
