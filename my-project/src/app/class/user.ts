export class User {
    public num: number;

    constructor(public id: number,
        public name: string,
		public password: string,
        public birthDate? : Date) {
    }

    toString() {
        return `${this.id} - ${this.name}`;
    }
}
