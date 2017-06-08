import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "app/service/user.service";
import { User } from "app/class/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  public massage: string = "";
  public user: User = new User(null, null, null);
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.add(this.user).then(x => {
      if (this.userService.user) {
        this.close.emit(null);
      }
      else {
        this.massage="User name already exist."
      }
    });
  }

}
