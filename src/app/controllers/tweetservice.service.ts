import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function-service.service';
import { post } from 'models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetserviceService extends ApiFunctionService<post> {

  constructor(public override http : HttpClient) {
    super('http://localhost:3000/post', http);
  }
}
