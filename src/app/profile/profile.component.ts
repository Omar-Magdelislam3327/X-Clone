import { Component, inject, TemplateRef } from '@angular/core';
import { UserserviceService } from '../controllers/userservice.service';
import { TweetserviceService } from '../controllers/tweetservice.service';
import { ActivatedRoute } from '@angular/router';
import { user } from 'models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!: any;
  tweets!: any;
  id!: any;
  editUser: user = new user();

  constructor(
    private users: UserserviceService,
    private api: TweetserviceService,
    private activ: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.id = this.activ.snapshot.params["id"];

    this.api.get().subscribe((data: any) => {
      this.tweets = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.users.get().subscribe((data: any) => {
      this.user = data[0];
      console.log(data);
      this.editUser = { ...this.user };
    });
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  updateProfile() {
    this.user.name = this.editUser.name;
    this.user.hashtag = this.editUser.hashtag;
    this.user.image = this.editUser.image;
    this.user.location = this.editUser.location;
    this.user.bio = this.editUser.bio;
    this.user.background = this.editUser.background;
    this.users.update(this.user).subscribe(response => {
      this.modalService.dismissAll();
      location.reload();
    });
  }
}
