import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';

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
  
  result: any;

  constructor(public home: AppComponent) { }

  ngOnInit(): void {
  }

  changeGender(e:any) {
    this.searchForm.controls['gender'].setValue(e.target.value, {onlySelf: true});
  }
  changeRace(e:any) {
    this.searchForm.controls['race'].setValue(e.target.value, {onlySelf: true});
  }

  search() {
    this.searches = [];
    // skip first name search
    if(this.searchForm.value.firstName == null) {
      let nums = [];
      for(let i=0; i<this.home.tempArr.length-1; i++) {
        nums.push(this.home.tempArr[i].Int);
        this.searches.push(this.home.tempArr[i]);
      }
      for(let i=0; i<this.home.tempArr2.length-1; i++) {
        if(!nums.includes(this.home.tempArr2[i].Int)) {
          nums.push(this.home.tempArr2[i].Int);
        }
        this.searches.push(this.home.tempArr2[i]);
      }
    } else {
      let nums = [];
      // search cem records for first name and linked int records
      for(let i=0; i<this.home.tempArr.length-1; i++) {
        if(this.home.tempArr[i].FirstName.toUpperCase().includes(this.searchForm.value.firstName.toUpperCase()) || this.home.tempArr[i].FirstName=='' || this.home.tempArr[i].FirstName=='Unknown' || this.home.tempArr[i].FirstName=='Infant') {
          nums.push(this.home.tempArr[i].Int);
          this.searches.push(this.home.tempArr[i]);
          for(let j=0; j<this.home.tempArr2.length-1; j++) {
            if(this.home.tempArr2[j].Int == this.home.tempArr[i].Int || this.home.tempArr2[j].Permit == this.home.tempArr[i].Permit) {
              this.searches.push(this.home.tempArr2[j]);
              nums.push(this.home.tempArr2[j].Int)
            }
          }
        }
      }
      // search int records for first name and linked cem records
      for(let i=0; i<this.home.tempArr2.length-1; i++) {
        if((this.home.tempArr2[i].First.toUpperCase().includes(this.searchForm.value.firstName.toUpperCase()) || this.home.tempArr2[i].First=='' || this.home.tempArr2[i].First=='Unknown' || this.home.tempArr2[i].First=='Infant') && !nums.includes(this.home.tempArr[i].Int)) {
          nums.push(this.home.tempArr2[i].Int);
          this.searches.push(this.home.tempArr2[i]);
          for(let j=0; j<this.home.tempArr.length-1; j++) {
            if(this.home.tempArr2[i].Int == this.home.tempArr[j].Int || this.home.tempArr2[i].Permit == this.home.tempArr[j].Permit) {
              this.searches.push(this.home.tempArr[j]);
              nums.push(this.home.tempArr[j].Int)
            }
          }
        }
      }
    }
    // if middle name searched
    if(this.searchForm.value.middleName != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searches[i].RecordType == 'Cemetery') {
          if(this.searches[i].Middle.toUpperCase().includes(this.searchForm.value.middleName.toUpperCase()) || this.searches[i].Middle=='') {
            tempsearched.push(this.searches[i]);
          }
        } else {
          tempsearched.push(this.searches[i]);
        }
      }
      this.searches = tempsearched;
    }
    // if last name searched
    if(this.searchForm.value.lastName != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searches[i].Last.toUpperCase().includes(this.searchForm.value.lastName.toUpperCase()) || this.searches[i].Last=='' || this.searches[i].Last=='Man' || this.searches[i].Last=='Woman') {
          tempsearched.push(this.searches[i]);
        }
      }
      this.searches = tempsearched;
    }
    // if last name searched
    if(this.searchForm.value.lastName != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searches[i].Last.toUpperCase().includes(this.searchForm.value.lastName.toUpperCase()) || this.searches[i].Last=='') {
          tempsearched.push(this.searches[i]);
        }
      }
      this.searches = tempsearched;
    }
    // if death year searched
    if(this.searchForm.value.deathYear != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searches[i].DateOfDeath.includes(this.searchForm.value.deathYear.toString()) || this.searches[i].DateOfDeath=='') {
          tempsearched.push(this.searches[i]);
        }
      }
      this.searches = tempsearched;
    }
    // if gender searched
    if(this.searchForm.value.gender != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searchForm.value.gender[0] == this.searches[i].Sex || this.searches[i].Sex=='') {
          tempsearched.push(this.searches[i]);
        }
      }
      this.searches = tempsearched;
    }
    // if race searched
    if(this.searchForm.value.race != null) {
      let tempsearched = [];
      for(let i=0; i<this.searches.length; i++) {
        if(this.searches[i].RecordType == 'Cemetery') {
          if(this.searches[i].Race.toUpperCase().includes(this.searchForm.value.race[0]) || this.searches[i].Race=='') {
            tempsearched.push(this.searches[i]);
          }
        } else {
          if(this.searches[i].Color.toUpperCase().includes(this.searchForm.value.race[0]) || this.searches[i].Race=='') {
            tempsearched.push(this.searches[i]);
          }
        }
      }
      this.searches = tempsearched;
    }
    this.home.searched = true;
  }

  backToSearch() {
    this.home.searched = false;
    this.searches = [];
    this.searchForm = new FormGroup({
      firstName: new FormControl(),
      middleName: new FormControl(),
      lastName: new FormControl(),
      deathYear: new FormControl(),
      gender: new FormControl(),
      race: new FormControl()
    });
  }

  select(result: any) {
    this.result = result;
    this.home.showResult = true;
    this.home.recordType = this.result.RecordType;
  }

  isValid(input: any):boolean {
    if(input == null) {
      return false
    }
    if(input>=1900) {
      return false
    }
    return true
  }

  backtosearch() {
    this.home.showResult = false;
  }
}
