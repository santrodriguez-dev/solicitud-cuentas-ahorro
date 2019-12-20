import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { NzMessageService } from 'ng-zorro-antd/message';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-request',
  templateUrl: './account-request.component.html',
  styleUrls: ['./account-request.component.scss']
})
export class AccountRequestComponent implements OnInit {

  validateForm: FormGroup;
  isLoading = false

  constructor(private fb: FormBuilder,
    private nZMessage: NzMessageService,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      document: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      city: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) return
    console.log(this.validateForm);
    this.saveRequest(this.validateForm.value)
  }

  saveRequest(formData) {
    this.isLoading = true
    this.accountService.saveRequest(formData).subscribe(response => {
      this.isLoading = false
      console.log(response);
      this.nZMessage.success('La solicitud se ha guardado exitosamente')
      this.router.navigate(['account-list']);
    }, err => {
      this.isLoading = false
      this.nZMessage.error('No es posible establecer la comunicación con el servidor')
      console.error(err);
    })
  }

  resetForm() {
    this.validateForm.reset()
  }

}
