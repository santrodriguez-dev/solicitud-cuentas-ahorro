import { Component, OnInit } from '@angular/core';
// Services
import { AccountService } from 'src/app/services/account.service';
import { NzMessageService } from 'ng-zorro-antd';

// Models
import { AccountRequest } from 'src/app/models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  isLoading: boolean
  accountList: AccountRequest[] = []

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
    }, err => {
      this.isLoading = false
      this.nZMessage.error('Ha ocurrido un error con el servidor', { nzDuration: 8000 })
      console.error(err);
    })
  }

}
