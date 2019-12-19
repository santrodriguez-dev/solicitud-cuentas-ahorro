import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// rxjs
import { take } from 'rxjs/operators';

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
    return this.http.get<any[]>(`${this.url}accounts`).pipe(take(1))
  }

  /**
  * Obtiene lista de todas las cuentas creadas
  */
  getbyCode(code: number) {
    return this.http.get<any[]>(`${this.url}accounts/${code}`).pipe(take(1))
  }
}
