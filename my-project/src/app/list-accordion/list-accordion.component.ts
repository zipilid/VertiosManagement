import { Component, OnInit, Input } from '@angular/core';
import { Vertion } from "app/class/vertion";

@Component({
  selector: 'app-list-accordion',
  templateUrl: './list-accordion.component.html',
  styleUrls: ['./list-accordion.component.css']
})
export class ListAccordionComponent implements OnInit {

	@Input() vertion: Vertion

	ngOnInit() {
		let i = 23;
	}
}
