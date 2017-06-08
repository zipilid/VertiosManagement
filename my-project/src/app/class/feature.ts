export class Feature {	
    public description: string;
	public vertionID: number;
	public featureID: number;

	constructor() {
	}

    toString() {
		return `${this.description}`;
    }
}
