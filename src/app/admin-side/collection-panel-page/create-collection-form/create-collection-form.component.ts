import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CollectionModel, createEmptyCollection} from '../../../models/collection.model';
import {NgForm} from '@angular/forms';
import {ObjectService} from '../../../../core/helpers/object.service';

@Component({
  selector: 'app-create-collection-form',
  templateUrl: './create-collection-form.component.html',
  styleUrls: ['./create-collection-form.component.css']
})
export class CreateCollectionFormComponent implements OnDestroy {
  newCollection: CollectionModel = createEmptyCollection();
  imagePreview: string;
  @Output() saveNewCollection: EventEmitter<{CollectionModel, File}> = new EventEmitter<{CollectionModel, File}>();
  constructor(private objectService: ObjectService) { }

  ngOnDestroy() {
    this.saveNewCollection.unsubscribe();
  }
  saveCollection(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      const newCollection = this.objectService.mergeObjects(this.newCollection, form.value);
      this.saveNewCollection.emit(newCollection);
      form.resetForm();
    }
  }

  onImagePicked(event: Event, form: NgForm) {
    const file = (event.target as HTMLInputElement).files[0];
    // form.patchValue({image: file});
    // form.get('image').updateValueAndValidity();
    this.newCollection.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
