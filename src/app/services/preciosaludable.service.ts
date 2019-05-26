import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable()
export abstract class PrecioSaludableService {

  constructor(protected http: HttpClient) { }

  private myEndpoint = 'http://localhost:5000';
  //private myEndpoint = 'https://preciosaludable.azurewebsites.net';
  private myHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  protected get endpoint() {
    return this.myEndpoint;
  }

  protected get httpOptions() {
    return this.myHttpOptions;
  }

  protected handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
