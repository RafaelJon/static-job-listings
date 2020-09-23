import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  filtered = [];
  filteredJobs = [];

  constructor() { }

  addNewFilter(tag: string){
    let added: Boolean = false;
    this.filtered.forEach(f => {
      if(f === tag){
        added = true
      }
    });
    if(added == false){
      this.filtered.push(tag)
      this.getFilteredJobs();
    }
  }
  
  removeFilter(filter: string){
    let idx = -1;
    let pos = 0;
    this.filtered.forEach(fil => {
      if(fil == filter){
        idx = pos
      }
      pos++
    });

    if(idx >= 0){
      this.filtered.splice(idx,1);
      this.getFilteredJobs();
    }
  }
  
  clearFilter(){
    this.filtered = [];
    this.getFilteredJobs();
  }

  getFilteredJobs(){
    this.filteredJobs = []
    let jobs = [{
        "img": "photosnap.svg",
        "company": "Photosnap",
        "new": true,
        "feature": true,
        "job": "Senior Frontend Developer",
        "date": "1d ago",
        "type": "Full Time",
        "location": "USA only",
        "filter": [
          "Frontend",
          "Senior",
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "img": "manage.svg",
        "company": "Manage",
        "new": true,
        "feature": true,
        "job": "Fullstack Developer",
        "date": "1d ago",
        "type": "Part Time",
        "location": "Remote",
        "filter": [
          "Fullstack",
          "Midweight",
          "Python",
          "React"
        ]
      },
      {
        "img": "account.svg",
        "company": "Account",
        "new": true,
        "feature": false,
        "job": "Junior Frontend Developer",
        "date": "2d ago",
        "type": "Part Time",
        "location": "USA only",
        "filter": [
          "Frontend",
          "Junior",
          "JavaScript",
          "React",
          "Sass"
        ]
      },
      {
        "img": "myhome.svg",
        "company": "MyHome",
        "new": false,
        "feature": false,
        "job": "Junior Frontend Developer",
        "date": "5d ago",
        "type": "Contract",
        "location": "USA only",
        "filter": [
          "Frontend",
          "Junior",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "img": "loop-studios.svg",
        "company": "Loop Studios",
        "new": false,
        "feature": false,
        "job": "Software Engineer",
        "date": "1w ago",
        "type": "Full Time",
        "location": "Worldwide",
        "filter": [
          "Fullstack",
          "Midweight",
          "JavaScript",
          "Ruby",
          "Sass"
        ]
      },
      {
        "img": "faceit.svg",
        "company": "FaceIt",
        "new": false,
        "feature": false,
        "job": "Junior Backend Developer",
        "date": "2w ago",
        "type": "Full Time",
        "location": "UK only",
        "filter": [
          "Backend",
          "Junior",
          "JavaScript",
          "Ruby",
          "RoR"
        ]
      },
      {
        "img": "shortly.svg",
        "company": "Shortly",
        "new": false,
        "feature": false,
        "job": "Junior Developer",
        "date": "2w ago",
        "type": "Full Time",
        "location": "Worldwide",
        "filter": [
          "Frontend",
          "Junior",
          "HTML",
          "JavaScript",
          "Sass"
        ]
      },
      {
        "img": "insure.svg",
        "company": "Insure",
        "new": false,
        "feature": false,
        "job": "Junior Frontend Developer",
        "date": "2w ago",
        "type": "Full Time",
        "location": "USA only",
        "filter": [
          "Frontend",
          "Junior",
          "JavaScript",
          "Vue",
          "Sass"
        ]
      },
      {
        "img": "eyecam-co.svg",
        "company": "Eyecam Co.",
        "new": false,
        "feature": false,
        "job": "Full Stack Engineer",
        "date": "3w ago",
        "type": "Full Time",
        "location": "Worldwide",
        "filter": [
          "Fullstack",
          "Midweight",
          "JavaScript",
          "Python",
          "Django"
        ]
      },
      {
        "img": "the-air-filter-company.svg",
        "company": "The Air Filter Company",
        "new": false,
        "feature": false,
        "job": "Front-end Dev",
        "date": "1mo ago",
        "type": "Part Time",
        "location": "Worldwide",
        "filter": [
          "Fullstack",
          "Junior",
          "JavaScript",
          "React",
          "Sass"
        ]
      }
    ];
    
    let filteredJobs = [];
    
    jobs.forEach(j => {
      let count = 0;

      this.filtered.forEach(f => {
        j.filter.forEach(jf => {
          if(f == jf){
            count++;
          }
        });
      });

      if(count == this.filtered.length){
        this.filteredJobs.push(j)
      }
    });
  }

  getCountFilter(){
    if(this.filtered.length <= 0){
      return false
    }
    return true 
  }
}
