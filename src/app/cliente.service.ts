import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientesUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.clientesUrl}/list`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
