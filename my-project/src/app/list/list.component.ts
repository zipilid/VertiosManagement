import { Component, OnInit } from '@angular/core';
import { Vertion } from "app/class/vertion";
import { VertionService } from "app/service/vertion.service";
import { FilterService } from "app/service/filter.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public vertionsList: Vertion[] = new Array<Vertion>();

	constructor(private vertionService: VertionService, private filterService: FilterService,private router: Router) {
    }

    ngOnInit() {
        this.vertionService.getVertions().then(x => {
            this.vertionsList = x;
        });
    }

    applyPipe(){
        this.vertionsList = this.vertionsList.slice();
        this.vertionsList.forEach(vertion=>vertion.featureList = vertion.featureList.slice());
    }
    onSelect(id){
    this.router.navigate(['/user-details', id]);
    }
}
