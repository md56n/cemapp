import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent, CemModel } from '../app.component';

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
    deathYear: new FormControl(),
    gender: new FormControl(),
    race: new FormControl()
  });
  genders = ['Male', 'Female'];
  races = ['Black', 'Mexican', 'White'];
  searches: any[] = [];
  nums: any = [];
  searched = false;

  constructor(private router: Router, private home: AppComponent) { }

  ngOnInit(): void {
    // for(let i=0; i<temparr.length; i++) {
    //   temparr[i][0] = '"Last": '+temparr[i][0];
    //   temparr[i][1] = '"Title": '+temparr[i][1];
    //   temparr[i][2] = '"Suffix": '+temparr[i][2];
    //   temparr[i][3] = '"First": '+temparr[i][3];
    //   temparr[i][4] = '"Middle": '+temparr[i][4];
    //   temparr[i][5] = '"Sex": '+temparr[i][5];
    //   temparr[i][6] = '"Race": '+temparr[i][6];
    //   temparr[i][7] = '"Death": '+temparr[i][7];
    //   temparr[i][8] = '"AgeYears": '+temparr[i][8];
    //   temparr[i][9] = '"AgeMonths": '+temparr[i][9];
    //   temparr[i][10] = '"AgeDays": '+temparr[i][10];
    //   temparr[i][11] = '"Grave": '+temparr[i][11];
    //   temparr[i][12] = '"Lot": '+temparr[i][12];
    //   temparr[i][13] = '"Block": '+temparr[i][13];
    //   temparr[i][14] = '"Burial": '+temparr[i][14];
    //   temparr[i][17] = '"Comments": '+temparr[i][17];
    //   temparr[i][17] = '"Permit": '+temparr[i][17];
    //   temparr[i][17] = '"Int": '+temparr[i][17];
    //   temparr[i][18] = '"Baby": '+temparr[i][18];
    // }
    // console.log(temparr);
  }

  back() {
    this.router.navigateByUrl('/');
  }

  changeGender(e:any) {
    this.searchForm.controls['gender'].setValue(e.target.value, {onlySelf: true});
  }
  changeRace(e:any) {
    this.searchForm.controls['race'].setValue(e.target.value, {onlySelf: true});
  }

  search() {
    for(let i=0; i<this.home.tempArr.length-1; i++) {
      if(this.home.tempArr[i].FirstName.toUpperCase().includes(this.searchForm.value.firstName.toUpperCase())) {
        this.nums.push(this.home.tempArr[i].Int);
        this.searches.push(this.home.tempArr[i]);
        for(let j=0; j<this.home.tempArr2.length-1; j++) {
          if(this.home.tempArr2[j].Int == this.home.tempArr[i].Int || this.home.tempArr2[j].Permit == this.home.tempArr[i].Permit) {
            this.searches.push(this.home.tempArr2[j]);
          }
        }
      }
    }
    for(let i=0; i<this.home.tempArr2.length-1; i++) {
      if(this.home.tempArr2[i].First.toUpperCase().includes(this.searchForm.value.firstName.toUpperCase())) {
        if(!this.searches.includes(this.home.tempArr2[i])) {
          this.nums.push(this.home.tempArr2[i].Int);
          this.searches.push(this.home.tempArr2[i]);
          for(let j=0; j<this.home.tempArr.length-1; j++) {
            if(this.home.tempArr2[j].Int == this.home.tempArr[i].Int || this.home.tempArr2[j].Permit == this.home.tempArr[i].Permit) {
              this.searches.push(this.home.tempArr[j]);
            }
          }
        }
      }
    }
    this.searched = true;
  }

  backToSearch() {
    this.searched = false;
  }

  select(result: any) {
    console.log(result);
  }
}
