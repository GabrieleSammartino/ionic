import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuessNumber } from './modelGuess';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {


  public numberUser : number;
  public partita : GuessNumber;
  public result : String




  constructor(public navCtrl: NavController) {
    this.partita = new GuessNumber();

  }

  public buttonReset(){
    this.partita.reset()
    console.log(this.partita.getNumber())
  }

  public buttonStart(){
    if (this.partita.moves != 0){
      console.log(this.numberUser);
      this.partita.getNumberUser(this.numberUser);
      this.result = this.partita.GuessGame();
      console.log(this.result);
    }else{
      console.log(this.partita.getNumber())
      var numberWin = this.partita.getNumber()
      this.result = "Non hai piu' vite il numero era: " + numberWin

    }
  }
}
