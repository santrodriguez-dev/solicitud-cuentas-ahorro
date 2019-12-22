import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// rxjs
import { take } from 'rxjs/operators';

// Models
import { AccountRequest } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  /**
  * Obtiene lista de todas las cuentas creadas
  */
  getAll() {
    return this.http.get<AccountRequest[]>(`${this.url}accounts`).pipe(take(1))
  }

  /**
  * Obtiene cuenta por codigo
  */
  getbyCode(code: string) {
    return this.http.get<AccountRequest>(`${this.url}accounts/${code}`).pipe(take(1))
  }

  /**
   * guarda o actualiza un registro de tipo AccountRequest
   * @param request Modelo solicitud de cuenta
   */
  saveRequest(request: AccountRequest) {
    if (!request.id) {
      request = { ...request, requestDate: new Date() } //Adicionar fecha de solicitud
      return this.http.post<AccountRequest[]>(`${this.url}accounts`, request).pipe(take(1))
    }
    return this.http.put<AccountRequest[]>(`${this.url}accounts/${request.id}`, request).pipe(take(1))
  }

}
