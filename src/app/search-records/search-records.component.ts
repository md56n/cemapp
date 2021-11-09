import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {
  searchForm = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(),
    lastName: new FormControl(),
    birthYear: new FormControl(),
    deathYear: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    
  }

  search() {

  }

}
