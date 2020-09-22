import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobItemComponent } from './home/job-item/job-item.component';
import { FilterItemComponent } from './home/job-item/filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobItemComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
