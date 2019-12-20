import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  isLoading: boolean
  accountList = []

  constructor(private accountService: AccountService,
    private nZMessage: NzMessageService) { }

  ngOnInit(): void {
    this.getAllAccounts()
  }

  getAllAccounts() {
    this.isLoading = true
    this.accountService.getAll().subscribe(accounts => {
      this.isLoading = false
      this.accountList = accounts
      console.log(accounts);
    }, err => {
      this.isLoading = false
      this.nZMessage.error('No es posible establecer la comunicación con el servidor')
      console.error(err);
    })
  }

}
