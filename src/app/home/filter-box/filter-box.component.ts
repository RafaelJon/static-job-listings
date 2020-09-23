import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  constructor(public _jobsService: JobsService) { }

  ngOnInit(): void {
  }

  clearFilter(){
    this._jobsService.clearFilter();
  }

}
