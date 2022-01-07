import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    const temparr = [['Adams,', '.,', '.,', 'Pleasant,', '.,', 'M,', 'B,', '.,', '68,', '.,', '.,', '11,', '1,', '4,', '25 Jul 1909,', 'South', 'half,', '11790,', '25,', '.'],
    ['Adams,', '.,', '.,', 'Terah,', '.,', 'F,', 'M,', '26 Jun 1909,', '37,', '.,', '.,', '3,', '25,', '1,', '29 Jun 1909,', '.,', '10455,', '4,', '.'],
    ['Alexander,', '.,', '.,', 'Cavaine,', '.,', 'F,', 'B,', '16 Jul 1909,', '1,', '1,', '.,', '6,', '33,', '1,', '19 Jul 1909,', '.,', '11749,', '20,', '.'],
    ['Allen,', '.,', '.,', 'Alice,', '.,', 'F,', 'B,', '21 Sep 1909,', '40,', '.,', '.,', '1,', '25,', '4,', '26 Sep 1909,', '.,', '12283,', '47,', '.'],
    ['Allen,', '.,', '.,', 'Ellis,', '.,', 'M,', 'B,', '20 Dec 1909,', '60,', '.,', '.,', '7,', '62,', '12,', '.,', '.,', '11033,', '80,', '.'],
    ['Anderson,', '.,', '.,', 'Infant,', '.,', 'F,', 'B,', '27 Oct 1909,', '.,', '.,', '.,', '5,', '62,', '12,', '13 Nov 1909,', '.,', '10548,', '67,', '.'],
    ['Amette,', '.,', '.,', 'William,', '.,', 'M,', 'B,', '17 Dec 1909,', '32,', '.,', '.,', '12,', '31,', '1,', '20 Dec 1909,', '.,', '11178,', '78,', '.'],
    ['Ashold,', '.,', '.,', 'Infant,', '.,', 'F,', 'B,', '12 Oct 1909,', '.,', '.,', '.,', '5,', '62,', '12,', '13 Nov 1909,', '.,', '10519,', '68,', '.'],
    ['Barber,', '.,', '.,', 'M,', '.,', 'M,', 'B,', '17 Jul 1909,', '25,', '11,', '17,', '10,', '25,', '1,', '19 Jul 1909,', '.,', '11750,', '19,', '.'],
    ['Boone,', '.,', '.,', 'James,', '.,', 'M,', 'B,', '14 Sep 1909,', '28,', '.,', '.,', '12,', '30,', '1,', '16 Sep 1909,', '.,', '12233,', '45,', '.'],
    ['Boyd,', '.,', '.,', 'Lizzie,', '.,', 'F,', 'B,', '8 Oct 1909,', '37,', '.,', '.,', '1,', '62,', '12,', '10 Oct 1909,', '.,', '12395,', '54,', '.'],
    ['Bradshaw,', '.,', '.,', 'Louis,', 'N,', 'M,', 'B,', '15 Dec 1909,', '43,', '.,', '.,', '7,', '31,', '1,', '19 Dec 1909,', '.,', '11170,', '77,', '.'],
    ['Bright,', '.,', '.,', 'James,', '.,', 'M,', 'B,', '3 Sep 1909,', '68,', '.,', '.,', '11,', '30,', '1,', '8 Sep 1909,', '.,', '12190,', '43,', '.'],
    ['Brown,', '.,', '.,', 'L', '(Lula', 'Emory),', '.,', 'F,', 'B,', '4 Nov 1909,', '40,', '.,', '.,', '1,', '172,', '6,', '22 Nov 1909,', '.,', '10780,', '73,', '.'],
    ['Buckhart,', '.,', '.,', 'Gus,', '.,', 'M,', 'B,', '16 Aug 1909,', '62,', '.,', '.,', '1,', '27,', '24,', '22 Aug 1909,', '.,', '.,', '36,', '.'],
    ['Carpenter,', '.,', '.,', 'Nettie,', '.,', 'F,', 'B,', '19 Jul 1909,', '29,', '.,', '.,', '1,', '30,', '1,', '21 Jul 1909,', '.,', '11761,', '21,', '.'],
    ['Countee,', '.,', '.,', 'R,', 'N,', 'M,', 'B,', '21 Apr 1909,', '.,', '.,', '.,', '3,', '164,', '6,', '19 Aug 1909,', 'from', 'Union,', '11629,', '35,', '.'],
    ['Crumpton,', '.,', '.,', 'Charles,', '.,', 'M,', 'B,', '.,', '.,', '.,', '.,', '1,', '11,', '4,', '23 Aug 1909,', '.,', '12050,', '38,', '.']];
    for(let i=0; i<temparr.length; i++) {
      temparr[i][0] = '"Last": '+temparr[i][0];
      temparr[i][1] = '"Title": '+temparr[i][1];
      temparr[i][2] = '"Suffix": '+temparr[i][2];
      temparr[i][3] = '"First": '+temparr[i][3];
      temparr[i][4] = '"Middle": '+temparr[i][4];
      temparr[i][5] = '"Sex": '+temparr[i][5];
      temparr[i][6] = '"Race": '+temparr[i][6];
      temparr[i][7] = '"Death": '+temparr[i][7];
      temparr[i][8] = '"AgeYears": '+temparr[i][8];
      temparr[i][9] = '"AgeMonths": '+temparr[i][9];
      temparr[i][10] = '"AgeDays": '+temparr[i][10];
      temparr[i][11] = '"Grave": '+temparr[i][11];
      temparr[i][12] = '"Lot": '+temparr[i][12];
      temparr[i][13] = '"Block": '+temparr[i][13];
      temparr[i][14] = '"Burial": '+temparr[i][14];
      temparr[i][15] = '"Comments": '+temparr[i][15];
      temparr[i][16] = '"Permit": '+temparr[i][16];
      temparr[i][17] = '"Int": '+temparr[i][17];
      temparr[i][18] = '"Baby": '+temparr[i][18];
    }
    console.log(temparr);
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
    console.log(this.searchForm.value);
  }
}
