import { Component } from '@angular/core';
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
