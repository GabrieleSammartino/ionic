export class GuessNumber {
     private  number :number = parseInt((Math.random() * 100).toFixed(0));
     private  numberUser : number
     public  moves = 5;


     public Guess(){

     }

 public reset(){
    this.number = parseInt((Math.random() * 100).toFixed(0));
    this.moves = 5;
 }

  public getNumberUser(n) {
        return this.numberUser = n;
    }
    public getNumber() {
        return this.number;
    }

    public GuessGame(): string {

       var strReturn = "";
        console.log(this.number);



        if (this.number == this.numberUser) {
            return strReturn = "Indovinato in " + (5 - this.moves + 1) + " mosse";

        } else if (this.number < this.numberUser) {
            this.moves--;
            return strReturn = "Minore";

        } else {
            this.moves--;
            return strReturn = "Maggiore";
        }


    }

  public gameStart(): void {

      var bool = false;
        do {

            var result = this.GuessGame();

            if (result === ("Indovinato")) {

                bool = true;
              console.log(this.moves);
                console.log("Indovinato");

            } else if (result === ("Maggiore")) {
                console.log("Maggiore");


            } else if (result === ("Minore")) {
              console.log("Minore");


            }

        } while (bool == false && (this.moves > 0));


    }
}
