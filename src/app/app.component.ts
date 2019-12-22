import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void { }

  getImage() {
    return `assets/images/${this.isCollapsed ? 'av_villas_1.jpg' : 'logo_avvillas.jpg'}`
  }
}
