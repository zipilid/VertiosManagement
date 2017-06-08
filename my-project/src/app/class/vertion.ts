import { Feature } from "app/class/feature";

export class Vertion {
	public name: string;
	public vertionID: number;
	public creationTime: Date;
	public featureList: Array<Feature>;

	constructor() {
	}

	toString() {
		return `${this.name} since ${this.creationTime} has ${this.featureList} features`;
    }
}
