// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Material & flex imports
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';


// Our components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { StatsComponent } from './components/stats/stats.component';
import { GenresComponent } from './components/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListsComponent,
    PageDetailComponent,
    SearchComponent,
    ListComponent,
    StatsComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageListsComponent, PageDetailComponent, SearchComponent, ListComponent, StatsComponent, GenresComponent]
})
export class AppModule { }
