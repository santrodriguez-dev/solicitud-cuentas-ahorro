import { Component, OnInit } from '@angular/core';
// Services
import { AccountService } from 'src/app/services/account.service';
import { NzMessageService } from 'ng-zorro-antd';

import { NzModalService } from 'ng-zorro-antd/modal';

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
    private nZMessage: NzMessageService,
    private modal: NzModalService) {
    this.getAllAccounts()
  }

  ngOnInit(): void { }

  /**
   * Obtener cuentas
   */
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

  /**
   * Eliminar cuenta
   * @param id codigo de cuenta
   */
  deleteAccount(id: number) {

    const confirmModal = this.modal.confirm({
      nzTitle: '¿Quieres eliminar esta cuenta?',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () => {
        new Promise((resolve, reject) => {
          this.isLoading = true
          this.accountService.deleteRequest(id).subscribe(deletedAccount => {
            this.getAllAccounts()
            return true
          }, err => {
            this.isLoading = false
            this.nZMessage.error('Ha ocurrido un error con el servidor', { nzDuration: 8000 })
            console.error(err);
            return false
          })

        }).catch(() => console.log('Oops errors!'))
      }
    });
  }

}
