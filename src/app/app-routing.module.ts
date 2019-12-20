import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountRequestComponent } from "./pages/account-request/account-request.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account-request' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'account-request', component: AccountRequestComponent },
  { path: 'account-list', loadChildren: () => import('./pages/account-list/account-list.module').then(a => a.AccountListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
