import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  isLoading: boolean
  accountList = []

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.accountService.getAll().subscribe(accounts => {
      this.isLoading = false
      this.accountList = accounts
      console.log(accounts);
    })
  }

}
