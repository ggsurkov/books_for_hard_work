import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-panel-page',
  templateUrl: './collection-panel-page.component.html',
  styleUrls: ['./collection-panel-page.component.css']
})
export class CollectionPanelPageComponent implements OnInit {
  dataSource: any = [
    {}
  ]
  constructor() { }

  ngOnInit() {
  }

}
