import { UserserviceService } from 'src/app/controllers/userservice.service';
import { user } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lft',
  templateUrl: './lft.component.html',
  styleUrls: ['./lft.component.css']
})
export class LftComponent implements OnInit {
  user: any;
  constructor(private usersService: UserserviceService) {}
  ngOnInit() {
    this.usersService.get().subscribe((data: any) => {
      this.user = data[0];
    });
  }
}
