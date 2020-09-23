import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-filter-item',
  templateUrl:'./filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
  @Input() filterName:string;

  constructor(private _jobService: JobsService) { }

  ngOnInit(): void {

  }

  addFilter(){
    this._jobService.addNewFilter(this.filterName);
  }
}
