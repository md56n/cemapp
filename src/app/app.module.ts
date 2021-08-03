import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchRecordsComponent } from './search-records/search-records.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchRecordsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchRecordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
