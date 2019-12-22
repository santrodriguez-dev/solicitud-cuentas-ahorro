import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountRequestComponent } from "./pages/account-request/account-request.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account-request' },
  { path: 'account-request', component: AccountRequestComponent },
  { path: 'account-request/:id', component: AccountRequestComponent },
  { path: 'account-list', loadChildren: () => import('./pages/account-list/account-list.module').then(a => a.AccountListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
