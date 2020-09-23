import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobItemComponent } from './home/job-item/job-item.component';
import { FilterItemComponent } from './home/job-item/filter-item/filter-item.component';
import { FilterBoxComponent } from './home/filter-box/filter-box.component';
import { FilterItemTaggedComponent } from './home/filter-box/filter-item-tagged/filter-item-tagged.component';
import { JobsService } from './jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobItemComponent,
    FilterItemComponent,
    FilterBoxComponent,
    FilterItemTaggedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
