import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VertionService } from "app/service/vertion.service";
import { Vertion } from "app/class/vertion";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private vertion: Vertion;

  constructor(private vertionService: VertionService,
  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.vertionService.getVertion(id)
      .then((vertion: Vertion) => this.vertion = vertion);
  }
	save() {
		this.vertionService.edit(this.vertion).then(x=>{
      this.router.navigate(['/list']);
    });
	}

}
