import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private db: AngularFireDatabase
  ){ }

  ngOnInit(): void {
    this.saveData("test");
  }

  saveData(inputValue: string) {
    const ref = this.db.list("items");

    ref.push(inputValue).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.error(error);
    })
  }
}
