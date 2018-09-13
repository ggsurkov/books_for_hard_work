import {Component, Input, OnInit} from "@angular/core";
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, ActivationEnd} from "@angular/router";
import {filter} from "rxjs/internal/operators";

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: "breadcrumb",
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() currentUrlLabel: string;

  constructor(
              private router: Router) {
  }
  goHome() {
    this.router.navigate(['/'])
  }
}

