import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-panel-page',
  templateUrl: './collection-panel-page.component.html',
  styleUrls: ['./collection-panel-page.component.css']
})
export class CollectionPanelPageComponent implements OnInit {
  dataSource: any = [
    {guid: "g-1", title: "Тайм Менеджмент", booksCount: 12},
    {guid: "g-2", title: "Лидерство в бизнесе", booksCount: 8},
  ];
  constructor() { }

  ngOnInit() {
  }
  selectCollectionForEdit(guid: string): void {

  }
}
