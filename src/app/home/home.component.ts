import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _jobsService: JobsService) { }

  ngOnInit(): void {
    this._jobsService.getFilteredJobs()
  }

}
