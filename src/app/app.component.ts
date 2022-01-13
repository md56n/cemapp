import { Component } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface CemModel {
  Last: string;
  Title: string;
  Suffix: string;
  FirstName: string;
  Middle: string;
  Sex: string;
  Race: string;
  DateOfDeath: string;
  Age: string;
  Months: string;
  Days: string;
  Grave: string;
  Lot: string;
  Block: string;
  BurialDate: string;
  Comments: string;
  Permit: string;
  Int: string;
  Baby: boolean;
  RecordType: string;
}

export interface IntModel {
  Int: string;
  Year: string;
  First: string;
  Last: string;
  Sex: string;
  Color: string;
  Residence: string;
  PlaceOfDeath: string;
  DateOfDeath: string;
  Years: string;
  Months: string;
  Days: string;
  AttendingPhysician: string;
  CauseOfDeath: string;
  Undertaker: string;
  Permit: string;
  Catacomb: string;
  DateReceived: string;
  Removed: string;
  Grave: string;
  Lot: string;
  Block: string;
  Date: string;
  RelativeOrFriend: string;
  Remarks: string;
  RecordType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempArr: CemModel[] = [];
  tempArr2: IntModel[] = [];
  done = false;

  constructor(
    // private db: AngularFireDatabase
  ){ }

  ngOnInit(): void {
    fetch( './assets/cemetery.csv' ).then(response => response.text()).then( responseText => {
      let temp = responseText.split('\n');
      let newtemp = [];
      for(let i=0; i<temp.length; i++) {
        newtemp[i] = temp[i].split(',');
        for(let j=0; j<newtemp[i].length; j++) {
          if(newtemp[i][j]=='.') {
            newtemp[i][j] = '';
          }
        }
        let tempbool = false;
        newtemp[i][18] = newtemp[i][18].slice(0, -3);
        if(newtemp[i][18]=='*') {
          tempbool = true;
        }
        this.tempArr.push({
          Last: newtemp[i][0],
          Title: newtemp[i][1],
          Suffix: newtemp[i][2],
          FirstName: newtemp[i][3],
          Middle: newtemp[i][4],
          Sex: newtemp[i][5],
          Race: newtemp[i][6],
          DateOfDeath: newtemp[i][7],
          Age: newtemp[i][8],
          Months: newtemp[i][9],
          Days: newtemp[i][10],
          Grave: newtemp[i][11],
          Lot: newtemp[i][12],
          Block: newtemp[i][13],
          BurialDate: newtemp[i][14],
          Comments: newtemp[i][15],
          Permit: newtemp[i][16],
          Int: newtemp[i][17],
          Baby: tempbool,
          RecordType: 'Cemetery'
        });
      }
      // console.log(this.tempArr);
      fetch( './assets/Internment.csv' ).then(response => response.text()).then( responseText => {
        let temp = responseText.split('\n');
        let newtemp = [];
        for(let i=0; i<temp.length; i++) {
          newtemp[i] = temp[i].split(',');
          for(let j=0; j<newtemp[i].length; j++) {
            if(newtemp[i][j]=='.') {
              newtemp[i][j] = '';
            }
          }
          this.tempArr2.push({
            Int: newtemp[i][0],
            Year: newtemp[i][1],
            First: newtemp[i][2],
            Last: newtemp[i][3],
            Sex: newtemp[i][4],
            Color: newtemp[i][5],
            Residence: newtemp[i][6],
            PlaceOfDeath: newtemp[i][7],
            DateOfDeath: newtemp[i][8],
            Years: newtemp[i][9],
            Months: newtemp[i][10],
            Days: newtemp[i][11],
            AttendingPhysician: newtemp[i][12],
            CauseOfDeath: newtemp[i][13],
            Undertaker: newtemp[i][14],
            Permit: newtemp[i][15],
            Catacomb: newtemp[i][16],
            DateReceived: newtemp[i][17],
            Removed: newtemp[i][18],
            Grave: newtemp[i][19],
            Lot: newtemp[i][20],
            Block: newtemp[i][21],
            Date: newtemp[i][22],
            RelativeOrFriend: newtemp[i][23],
            Remarks: newtemp[i][24],
            RecordType: 'Internment'
          });
        }
        this.done = true;
        // console.log(this.tempArr2);
      });
    });
    // this.saveData("test");
  }

  // saveData(inputValue: string) {
  //   const ref = this.db.list("items");

  //   ref.push(inputValue).then((res) => {
  //     console.log(res);
  //   }).catch((error) => {
  //     console.error(error);
  //   })
  // }
}

// searches include unknown man/baby etc
// button should open page with record details
// more search filters