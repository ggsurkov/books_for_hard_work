import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Injectable()
export class IconSvgRegistryService {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  registerIcons(): void {
    this.iconRegistry.addSvgIcon('close', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/baseline-close-24px.svg'));
    this.iconRegistry.addSvgIcon('done', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/baseline-done-24px.svg'));
    this.iconRegistry.addSvgIcon('menu', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/baseline-menu-24px.svg'));
  }
}
