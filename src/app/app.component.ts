import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'iektd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inetum-ekt-desk';
  selectedLang = 'en';
  
  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }
  
  selectLanguage(language: string = this.selectedLang) {
    this.translocoService.setActiveLang( language );
  }
}
