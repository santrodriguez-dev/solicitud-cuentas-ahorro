import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, es_ES, NzFormModule, NzMessageModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { AccountRequestComponent } from './pages/account-request/account-request.component';

import { NgZorroModule } from './shared/ng-zorro/ng-zorro.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    AccountRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
