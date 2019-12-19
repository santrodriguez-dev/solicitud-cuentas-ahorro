import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListRoutingModule } from './account-list-routing.module';
import { AccountListComponent } from './account-list.component';
import { NgZorroModule } from 'src/app/shared/ng-zorro/ng-zorro.module';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    NgZorroModule,
    AccountListRoutingModule
  ]
})
export class AccountListModule { }
