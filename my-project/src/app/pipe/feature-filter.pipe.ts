import { Pipe, PipeTransform } from '@angular/core';
import { Feature } from "app/class/feature";
import { FilterService } from "app/service/filter.service";

@Pipe({
  name: 'featureFilter'
})
export class FeatureFilterPipe implements PipeTransform {

  constructor(private filterService: FilterService) { }

  transform(features: Feature[]): Feature[] {
    return features.filter(feature => feature.description.includes(this.filterService.featureName));
  }
}
