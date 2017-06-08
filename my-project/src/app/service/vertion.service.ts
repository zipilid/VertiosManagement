import { Injectable } from '@angular/core';
import { Vertion } from "app/class/vertion";
import { Http } from "@angular/http";
import { environment } from "environments/environment";

@Injectable()
export class VertionService {

    public vertions: Vertion[] = [];

    constructor(private http: Http) {
    }

    private vertionsPromise: Promise<Vertion[]>;
    public getVertions(): Promise<Vertion[]> {
        if (!this.vertionsPromise) {
            var url = environment.baseUrl + '/api/vertions/GetVertions';
            this.vertionsPromise = this.http.get(url).toPromise().then(x => {
                this.vertions = x.json();

                return this.vertions;
            });
        }

        return this.vertionsPromise;
    }

    public getVertion(id: number): Promise<Vertion> {
        return this.getVertions().then(x => {
            return this.vertions.find(t => t.vertionID == id);
        });
    }

    public add(vertion: Vertion) {
        var url = environment.baseUrl + '/api/vertions/add';
        if (this.vertions.length) {
            vertion.vertionID = Math.max(...this.vertions.map((a) => a.vertionID)) + 1;
        }
        else {
            vertion.vertionID = 0;
        }
        return this.http.post(url, vertion).toPromise().then(x => {
            if (x.json()) {
                this.vertions.push(vertion);
            }
        });
    }

    public edit(vertion: Vertion) {
        var url = environment.baseUrl + '/api/vertions/edit';
        return this.http.post(url, vertion).toPromise().then(x => {
            if (x.json()) {
                /*let dbVertion = <Vertion>this.vertions.find(y => y.name == vertion.name);
                dbVertion=vertion;*/
                this.vertions.slice(this.vertions.findIndex(y => y.name == vertion.name),1);
                this.vertions.push(vertion);
            }
        });
    }

    public remove(vertion: Vertion) {
        var url = environment.baseUrl + `/api/vertions/remove?id=${vertion.vertionID}`;
        this.http.post(url, null).subscribe(x => {
            if (x.json()) {
                this.vertions.splice(this.vertions.indexOf(vertion), 1);
            }
        });
    }
}
