import { Component, OnInit } from '@angular/core';
import { Feature } from "app/class/feature";
import { Vertion } from "app/class/vertion";
import { VertionService } from "app/service/vertion.service";

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent {
	public vertion: Vertion;

	constructor(private vertionService: VertionService) {
		this.addNewVertion();
	}
	save() {
		this.vertionService.add(this.vertion);
		this.addNewVertion();
	}
	addNewVertion(){
		this.vertion = new Vertion();
		this.vertion.featureList = new Array<Feature>();
		this.vertion.creationTime = new Date();
	}
}
