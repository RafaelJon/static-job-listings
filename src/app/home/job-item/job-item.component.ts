import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
  @Input() job: {img:string, company:string, new:boolean, feature:boolean, job:string, date:string, type:string, location:string, filter:Array<String>};

  constructor() { }

  ngOnInit(): void {
  }

  getNew(){
    return this.job.new
  }

  getFeature(){
    return this.job.feature 
  }

  getColor(){
    if(this.job.feature ){
      return 'hsl(180, 29%, 50%)';
    }
    return 'white';
  }
}
