import { Component } from '@angular/core';

import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe(accounts => {
      console.log(accounts);

    })
  }

}
