import { Component, OnInit,Input } from '@angular/core';
import { Feature } from "app/class/feature";
import { Vertion } from "app/class/vertion";

@Component({
  selector: 'app-vertion',
  templateUrl: './vertion.component.html',
  styleUrls: ['./vertion.component.css']
})
export class VertionComponent implements OnInit {
	@Input() vertion: Vertion;

  constructor() { }

  ngOnInit() {
  }

	add() {
		let feature: Feature = new Feature();
		if (this.vertion.featureList.length) {
			feature.featureID = Math.max(...this.vertion.featureList.map((a) => a.featureID)) + 1;
		}
		else {
			feature.featureID = 0;
		}
		this.vertion.featureList.push(feature);
	}

	remove(feature: Feature) {
		this.vertion.featureList.splice(this.vertion.featureList.indexOf(feature), 1)
	}

}
