import { Injectable } from '@angular/core';
import { Feature } from "app/class/feature";
import { Http } from "@angular/http";
import { VertionService } from "app/service/vertion.service";
import { environment } from "environments/environment";

@Injectable()
export class FeatureService {

	constructor(private http: Http, private vertionService: VertionService) {
				
	}

	private featuresPromise: Promise<Feature[]>;
	public getFeatures(vertionId: number): Promise<Feature[]> {
		return this.vertionService.getVertion(vertionId).then(x => {
			return x.featureList;
		});
	}

	public getFeature(vertionId: number, featureId: number): Promise<Feature> {
		return this.getFeatures(vertionId).then(x => {
			return x.find(t => t.featureID == featureId);
		});
	}

	public edit(feature: Feature) {
		var url = environment.baseUrl  + '/api/features/edit';
		
			this.http.post(url, feature).subscribe(y => {
				if (y.json()) {
						this.vertionService.vertions.find(t => t.vertionID == feature.vertionID).featureList.find(t=>t.featureID== feature.featureID).description = feature.description;
				}
			});
	}


	public add(feature: Feature) {
		var url = environment.baseUrl + '/api/features/add';
		let vertion = this.vertionService.vertions.find(t => t.vertionID == feature.vertionID);
		feature.featureID = Math.max(...vertion.featureList.map((a) => a.featureID)) + 1;
			return this.http.post(url, feature).toPromise().then(x => {
				if (x.json()) {
					vertion.featureList.push(feature);
				}
			});
	}
}
