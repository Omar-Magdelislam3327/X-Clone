import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'models/user';
import { ApiFunctionService } from './api-function-service.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService extends ApiFunctionService<user> {
    constructor(public override http : HttpClient) {
      super('http://localhost:3000/user', http);
    }
    update(user: user): Observable<any> {
      return this.http.put(`${this.url}/${user.id}`, user);
    }
    
  }

