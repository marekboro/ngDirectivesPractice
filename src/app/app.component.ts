import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styles: [`
  .overFive {background-color: blue}
  .underFive {} `]
})
export class AppComponent {
  reveal = false;
  clicks = 0;
  clickLog = [];
  timeLog = []

  classSelected = "underFive";

  getTextColour(num) {
    return num <= 5 ? "black" : "white"
  }

  toggleHide() {
    this.reveal = !this.reveal;
    this.clicks += 1;
  }
  logTimeStamp(){
    this.timeLog.push(new Date())
  }

  logClickCoords($event) {
    this.clickLog.push(this.clicks)
    console.log($event);
  }

}
