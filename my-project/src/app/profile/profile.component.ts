import { Component, OnInit } from '@angular/core';
import { User } from "app/class/user";
import { UserService } from "app/service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
private user:User;
  constructor(private userService:UserService) { 
    this.user=this.userService.user;
  }

  ngOnInit() {
  }

  save(){
    this.userService.edit(this.user);
  }

}
