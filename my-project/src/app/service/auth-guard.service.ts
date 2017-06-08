import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from "app/service/user.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService) { }

  canActivate() {
    if (this.userService.user) {
      return true;
    }
    return false;
  }
}
