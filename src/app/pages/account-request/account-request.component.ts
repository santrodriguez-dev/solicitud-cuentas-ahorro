import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';

// Services
import { AccountService } from 'src/app/services/account.service';

// Models
import { AccountRequest } from 'src/app/models/account';

@Component({
  selector: 'app-account-request',
  templateUrl: './account-request.component.html',
  styleUrls: ['./account-request.component.scss']
})
export class AccountRequestComponent implements OnInit {

  validateForm: FormGroup;
  isLoading = false
  editableMode: boolean;
  accountReqId: string;

  constructor(private fb: FormBuilder,
    private nZMessage: NzMessageService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      document: [null, [Validators.required]],
      city: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
      initialbalance: [null, [Validators.required]],
      requestDate: null,
      id: null,
    });

    this.route.params.subscribe(params => {
      this.accountReqId = params['id'];
      if (!!this.accountReqId) {
        this.editableMode = true;
        this.getAccountRequest(this.accountReqId)
      }
    });
  }

  getAccountRequest(code: string) {
    this.isLoading = true
    this.accountService.getbyCode(code).subscribe(response => {
      this.isLoading = false
      this.validateForm.patchValue(response);
    }, err => {
      this.isLoading = false
      this.nZMessage.error('Ha ocurrido un error con el servidor', { nzDuration: 8000 })
      console.error(err);
    })
  }

  /**
   * Validación de formulario
   */
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) return
    this.saveRequest(this.validateForm.value)
  }

  /**
   * Envia solicitud de cuenta
   * @param formData Informacion proveniente de formulario
   */
  saveRequest(formData: AccountRequest) {
    this.isLoading = true
    this.accountService.saveRequest(formData).subscribe(response => {
      this.isLoading = false
      // console.log(response);
      this.nZMessage.success('La solicitud se ha guardado exitosamente', { nzDuration: 8000 })
      this.router.navigate(['account-list']);
    }, err => {
      this.isLoading = false
      this.nZMessage.error('Ha ocurrido un error con el servidor', { nzDuration: 8000 })
      console.error(err);
    })
  }

  resetForm() {
    this.validateForm.reset()
  }

}
