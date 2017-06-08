import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "app/service/user.service";
import { User } from "app/class/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  public user: User = new User(null, null, null);
  public massage: string = "";
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.findInUsers(this.user).then(x => {
      if (x) {
        this.userService.user = x;
        this.close.emit(null);
      }
      else {
        this.massage = "User doesn't exist. please try again."
      }
    });
  }

}
