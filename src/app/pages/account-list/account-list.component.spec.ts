import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AccountListComponent } from './account-list.component';

import { NgZorroModule } from "../../shared/ng-zorro/ng-zorro.module";
import { HttpClientModule } from '@angular/common/http';
import { AccountRequest } from 'src/app/models/account';
import { RouterModule } from '@angular/router';


describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgZorroModule, HttpClientModule, RouterModule],
      declarations: [AccountListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
