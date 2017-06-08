import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogContentComponent } from "app/dialog-content/dialog-content.component";
import { UserService } from "app/service/user.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  selectedOption: string;

  constructor(public dialog: MdDialog, private userService: UserService) { }

  openDialog() {
    if(this.userService.user){
      this.logout();
    }
    else{
    let dialogRef = this.dialog.open(DialogContentComponent);}
  }
  ngOnInit() {
  }

  logout() {
    this.userService.user = null;
  }

}
