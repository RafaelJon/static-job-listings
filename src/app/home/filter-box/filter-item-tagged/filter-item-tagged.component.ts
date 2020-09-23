import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-filter-item-tagged',
  templateUrl: './filter-item-tagged.component.html',
  styleUrls: ['./filter-item-tagged.component.scss']
})
export class FilterItemTaggedComponent implements OnInit {
  @Input() filterName:string;

  constructor(private _jobService: JobsService) { }

  ngOnInit(): void {
  }

  deleteFilter(){
    this._jobService.removeFilter(this.filterName);
  }
}
