import { Injectable } from '@angular/core';
import { User } from "app/class/user";
import { Http } from "@angular/http";
import { environment } from "environments/environment";

@Injectable()
export class UserService {

	private heroes: User[] = [];
	public user: User = null;

	constructor(private http: Http) {
	}

	private usersPromise: Promise<User[]>;
	private addUserPromise: Promise<User[]>;
	public getUsers(): Promise<User[]> {
		if (!this.usersPromise) {
			var url = environment.baseUrl + '/api/user/GetUsers';
			this.usersPromise = this.http.get(url).toPromise().then(x => {
				this.heroes = x.json();

				return this.heroes;
			});
		}

		return this.usersPromise;
	}

	public getUser(id: number) {
		return this.getUsers().then(x => {
			return this.heroes.find(t => t.id == id);
		});
	}

	public findInUsers(user: User) {
		return this.getUsers().then(x => {
			return x.find(t => t.name == user.name);
		});
	}

	public remove(hero: User) {
		var url = environment.baseUrl + `/api/user/remove?id=${hero.id}`;
		this.http.post(url, null).subscribe(x => {
			if (x.json()) {
				this.heroes.splice(this.heroes.indexOf(hero), 1);
			}
		});
	}

	public edit(user: User) {
		var url = environment.baseUrl + '/api/user/edit';
		this.http.post(url, user).subscribe(x => {
			if (x.json()) {
				var dbHero = this.heroes.find(y => y.name == user.name);
				dbHero.name = user.name;
			}
		});
	}

	public add(user: User) {
		var url = environment.baseUrl + '/api/user/add';
		return this.getUsers().then(x => {
			user.id = Math.max(...x.map((a) => a.id)) + 1;
			return this.http.post(url, user).toPromise().then(x => {
				if (x.json()) {
					this.user = user;
					this.heroes.push(user);
				}
			});
		});
	}
}
