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

  constructor(private fb: FormBuilder,
    private nZMessage: NzMessageService,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      saldo: [null, []],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) return
    console.log(this.validateForm);
    this.saveRequest()
  }

  saveRequest() {
    const request = {
      "propietario": "santiagor",
      "saldo": 10000
    }
    this.accountService.saveRequest(request).subscribe(response => {
      console.log(response);
      this.nZMessage.success('La solicitud se ha guardado exitosamente')
      this.router.navigate(['account-list']);
    })
  }

}
