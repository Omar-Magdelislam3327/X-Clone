import { Component } from '@angular/core';
import { TweetserviceService } from '../controllers/tweetservice.service';
import { post } from 'models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tweets!: any;
  post = new post();
  constructor(public api : TweetserviceService){
    this.api.get().subscribe((data:any)=>{
      this.tweets = data;
    });

  }
  newTweet(){
    this.api.post(this.post).subscribe((data:any)=>{
      location.reload();
    })
  }
}


