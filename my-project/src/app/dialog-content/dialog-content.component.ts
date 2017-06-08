import { Component, OnInit } from '@angular/core';
import{MdDialogRef}from'@angular/material';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  private user;
  constructor(public dialogRef: MdDialogRef<DialogContentComponent>) {}

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
