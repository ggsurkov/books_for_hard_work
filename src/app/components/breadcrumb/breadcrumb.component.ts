import {Component, Input} from "@angular/core";
import {Router, Params} from "@angular/router";

@Component({
  selector: "breadcrumb",
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() currentUrlLabel: string;
  @Input() adminPanelMainPage: string;

  constructor(private router: Router) {

  }

  goHome() {
    if (!this.adminPanelMainPage) {
      this.router.navigate(['/'])
    } else {
      this.router.navigate([this.adminPanelMainPage])
    }
  }
}

