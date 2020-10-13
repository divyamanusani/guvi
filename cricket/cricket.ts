let count = 0;
let timerLimit=30;
class Game {
    numBallsPerOver: number
    overs: number;
    teamA: Team;
    teamB: Team;

    constructor() {
        this.numBallsPerOver = 6;
        this.overs = 10;
        this.teamA = new Team('team1');
        this.teamB = new Team('team2');
        let timerBtn = (<HTMLInputElement>document.getElementById('timerStart'));
        timerBtn.onclick = this.startGameTimer();
        var resBtn = (<HTMLInputElement>document.querySelector('.generateRes'));
        resBtn.disabled = true;
        resBtn.onclick = this.generateResult();
    }

    startGame() {

        this.teamA.playTeam();
        this.teamB.playTeam();

    }

    generateResult(): () => void {
        return () => {
            var div = (<HTMLDivElement>document.querySelector('.genRes'));
            var h5 = document.createElement('h5');
            var matchWinner=document.createElement('h5');
            if (this.teamA.teamHighestScore > this.teamB.teamHighestScore) {
                h5.innerHTML = '<br>WINNING TEAM : Team 1';
                matchWinner.innerHTML=`Man of the match - ${this.teamA.manOftheTeam()}`;
            }
            else {
                h5.innerHTML = 'WINNING TEAM : Team 2';
                matchWinner.innerHTML=`<br>Man of the match - ${this.teamB.manOftheTeam()}`;
            }
            div.append(h5,matchWinner);
        }
    }


    startGameTimer(): () => void {
        return () => {
            let timerbutton = (<HTMLInputElement>document.getElementById('timerStart'));
            timerbutton.disabled = true;
            var left = (<HTMLInputElement>document.querySelector('.hitteam1'));
            var right = (<HTMLInputElement>document.querySelector('.hitteam2'));
            if (count == 0) {
                left.disabled = false;
                count++;
            }
            else if (count === 1) {
                right.disabled = false;
                left.disabled = true;
                count++;
            }
            else {
                console.log("Not expected");
            }
            stopTimer(1);
            let timer = (<HTMLSpanElement>document.getElementsByClassName('timer')[0]);
            timer.innerHTML=`${timerLimit}`;
            var duration = timerLimit;
            var id = setInterval(() => (countTime(this)), 1000);

            console.log(id);
            function countTime(g: Game) {
                if (duration < 0) {
                    stopTimer(id);
                    timerbutton.disabled = false;
                    if (count === 1) {
                        left.disabled = true;
                        g.teamA.endGame();
                    }
                    else {
                        right.disabled = true;
                        g.teamB.endGame();
                        (<HTMLInputElement>document.querySelector('.generateRes')).disabled = false;
                        
                    }
                } else {
                    timer.innerHTML = `${duration}`;

                    duration--;
                }
            }
        }
    }
}

class Team {

    teamName: string;
    playerList: Array<Player> = new Array();
    teamScore: number;
    currentPlayerIndex: number;
    currentBall: number;
    teamHighestScore: number = 0;

    constructor(tName: string) {
        this.teamName = tName;

        this.teamScore = 0;
        for (var i = 1; i <= 10; i++) {
            this.playerList.push(new Player(`Player${i}`, this.teamName));
        }

        this.currentPlayerIndex = 1;
        this.currentBall = 1;
        (<HTMLInputElement>document.querySelector(`.hit${this.teamName}`)).onclick = this.playTeam();
    }

    playTeam(): () => void {
        return () => {
            if (this.currentPlayerIndex <= 10 && this.currentBall <= 6) {
                let currentBallScore = this.playerList[this.currentPlayerIndex - 1].playPlayer();
                console.log(this.currentPlayerIndex);
                this.currentBall += 1;
                if ((this.currentBall - 1) % 6 == 0 || currentBallScore === 0) {
                    this.playerList[this.currentPlayerIndex - 1].playerprintTotal(this.currentBall - 1);
                    this.currentBall = 1;
                    this.currentPlayerIndex += 1;

                    if (this.currentPlayerIndex === 11) {
                        this.endGame();
                    }
                }
            }

        }
    }

    endGame() {
        if (this.currentPlayerIndex < 11)
            this.playerList[this.currentPlayerIndex - 1].playerprintTotal(this.currentBall - 1);
        (<HTMLSpanElement>document.querySelector(`.${this.teamName}`)).innerHTML = `${this.getTeamScore()}`;
    }

    getTeamScore() {
        this.teamScore = 0;
        for (var i = 0; i < this.playerList.length; i++) {
            if (this.playerList[i].scores.length != 0)
                this.teamScore += this.playerList[i].totalScore();
        }
        this.teamHighestScore = this.teamScore;
        return this.teamScore;
    }

    manOftheTeam() {

        var maxScore = 0;
        var playerMax = 0;
        for (var i = 0; i < this.playerList.length; i++) {
            if (maxScore < this.playerList[i].totalScore()) {
                maxScore = this.playerList[i].totalScore();
                playerMax = i + 1;
            }
        }
        return `Player ${playerMax} - ${maxScore}`;
    }

}

class Player {
    name: string;
    teamname: string;
    scores = Array<number>();
    maxScorePlayer: number       // List of scores

    constructor(n: string, t: string) {
        this.name = n;
        this.teamname = t;
        this.scores = [];

    }

    playPlayer() {

        /*
        Generates a random number for each ball and add to the scores to the table
        */

        let resA = getRndInteger();
        this.addtoHTMLrow(resA);
        this.addScore(resA);
        return resA;

    }

    addtoHTMLrow(res: number, isEmpty: boolean = false) {
        let td: HTMLTableDataCellElement;
        var row = document.querySelector(`#${this.teamname}player${this.name.split('r')[1]}`);
        td = document.createElement('td');
        if (!isEmpty) td.innerHTML = `${res}`;
        row.appendChild(td);
    }

    playerprintTotal(currentBallNum: number) {

        /*
        Fills the left over balls with empty slots and prints total
        */

        for (var i = 0; i < 6 - currentBallNum; i++) {
            this.addtoHTMLrow(-1, true);
        }
        this.addtoHTMLrow(this.totalScore());

    }

    totalScore() {
        return this.scores.reduce((tot, score) => { return (tot + score) }, 0);
    }

    addScore(currentscore: number) {
        this.scores.push(currentscore);
    }
}

var cricket = new Game();
console.log(cricket);
cricket.startGame();



function stopTimer(id) {
    console.log(id);
    clearInterval(id);
}
function getRndInteger() {
    return Math.floor(Math.random() * 7);
}



window.onload = () => {
    (<HTMLInputElement>document.querySelector('.hitteam1')).disabled = true;
    (<HTMLInputElement>document.querySelector('.hitteam2')).disabled = true;
}







































// var counter = 0;

//   function startTimer(duration, display) {
//     var timer = duration,
//       minutes, seconds;
//     setInterval(function() {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;
//       if (--timer < 0) {
//         alert("You type " + counter + " WPM");
//         timer = duration;
//       }

//     }, 1000);
//   }

//   function myFunction() {
//     if (counter == 0) {
//       var oneMinute = 60,
//         display = document.querySelector('#timer');
//       startTimer(oneMinute, display);
//       counter++;
//     } else {
//       counter++;
//     }
//   };

//   myFunction();