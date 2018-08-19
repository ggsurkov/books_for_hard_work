import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }
  closePanel() {
    this.panelOpenState = false;
  }
}
