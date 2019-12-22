import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestComponent } from './account-request.component';

import { NgZorroModule } from "../../shared/ng-zorro/ng-zorro.module";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AccountRequestComponent', () => {
  let component: AccountRequestComponent;
  let fixture: ComponentFixture<AccountRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgZorroModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule],
      declarations: [AccountRequestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El formulario debería ser invalido', async(() => {
    component.validateForm.controls['email'].setValue('correo1@correo.com')
    expect(component.validateForm.valid).toBeFalsy()
  }));

  it('El formulario debería ser valido', async(() => {
    component.validateForm.controls['name'].setValue('santiago')
    component.validateForm.controls['gender'].setValue('m')
    component.validateForm.controls['document'].setValue('102629779')
    component.validateForm.controls['city'].setValue('Cartagena')
    component.validateForm.controls['email'].setValue('correo1@correo.com')
    component.validateForm.controls['address'].setValue('Calle 75 N 89')
    component.validateForm.controls['phone'].setValue('56465645654')
    component.validateForm.controls['birthDate'].setValue('2019-12-11T16:32:27.312Z')
    component.validateForm.controls['accountType'].setValue('CAE')
    component.validateForm.controls['initialbalance'].setValue(580000)
    expect(component.validateForm.valid).toBeTruthy()
  }));


});
