import { Pipe, PipeTransform } from '@angular/core';
import { Vertion } from "app/class/vertion";
import { FilterService } from "app/service/filter.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private filterService: FilterService) { }

  transform(vertions: Vertion[]): Vertion[] {
    return vertions.filter(vertion =>
      new Date(vertion.creationTime).toDateString() == this.filterService.date.toDateString()&&
      (vertion.name.includes(this.filterService.vertionName)||
      vertion.featureList.filter(feature => feature.description.includes(this.filterService.featureName)&&this.filterService.featureName).length));
  }

}
