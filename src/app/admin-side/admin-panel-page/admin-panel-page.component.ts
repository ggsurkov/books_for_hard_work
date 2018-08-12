import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openBookPanelPage() {
    this.router.navigate([`admin-panel/book-panel`])
  }
  openCollectionPanelPage() {
    this.router.navigate([`admin-panel/collection-panel`])
  }
}
