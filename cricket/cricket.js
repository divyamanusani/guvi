var count = 0;
var timerLimit = 10;
var Game = /** @class */ (function () {
    function Game() {
        this.numBallsPerOver = 6;
        this.overs = 10;
        this.teamA = new Team('team1');
        this.teamB = new Team('team2');
        var timerBtn = document.getElementById('timerStart');
        timerBtn.onclick = this.startGameTimer();
        var resBtn = document.querySelector('.generateRes');
        resBtn.disabled = true;
        resBtn.onclick = this.generateResult();
    }
    Game.prototype.startGame = function () {
        this.teamA.playTeam();
        this.teamB.playTeam();
    };
    Game.prototype.generateResult = function () {
        var _this = this;
        return function () {
            var resBtn = document.querySelector('.generateRes');
            var div = document.querySelector('.genRes');
            var h3 = document.createElement('h3');
            var matchWinner = document.createElement('h3');
            if (_this.teamA.teamHighestScore > _this.teamB.teamHighestScore) {
                h3.innerHTML = '<br>WINNING TEAM : <b>Team 1</b><hr>';
                matchWinner.innerHTML = "Man of the match - <b>" + _this.teamA.manOftheTeam() + "</b>";
            }
            else if (_this.teamA.teamHighestScore < _this.teamB.teamHighestScore) {
                h3.innerHTML = '<br>WINNING TEAM : <b>Team 2</b><hr>';
                matchWinner.innerHTML = "Man of the match - <b>" + _this.teamB.manOftheTeam() + "</b>";
            }
            else {
                h3.innerHTML = '<br><b>DRAW MATCH</b><hr>';
            }
            div.append(h3, matchWinner);
            resBtn.disabled = true;
        };
    };
    Game.prototype.startGameTimer = function () {
        var _this = this;
        return function () {
            var timerbutton = document.getElementById('timerStart');
            timerbutton.disabled = true;
            var left = document.querySelector('.hitteam1');
            var right = document.querySelector('.hitteam2');
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
            var timer = document.getElementsByClassName('timer')[0];
            timer.innerHTML = "" + timerLimit;
            var duration = timerLimit;
            var id = setInterval(function () { return (countTime(_this)); }, 1000);
            console.log(id);
            function countTime(g) {
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
                        document.querySelector('.generateRes').disabled = false;
                    }
                }
                else {
                    timer.innerHTML = "" + duration;
                    duration--;
                }
            }
        };
    };
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(tName) {
        this.playerList = new Array();
        this.teamHighestScore = 0;
        this.teamName = tName;
        this.teamScore = 0;
        for (var i = 1; i <= 10; i++) {
            this.playerList.push(new Player("Player" + i, this.teamName));
        }
        this.currentPlayerIndex = 1;
        this.currentBall = 1;
        document.querySelector(".hit" + this.teamName).onclick = this.playTeam();
    }
    Team.prototype.playTeam = function () {
        var _this = this;
        return function () {
            if (_this.currentPlayerIndex <= 10 && _this.currentBall <= 6) {
                var currentBallScore = _this.playerList[_this.currentPlayerIndex - 1].playPlayer();
                console.log(_this.currentPlayerIndex);
                _this.currentBall += 1;
                if ((_this.currentBall - 1) % 6 == 0 || currentBallScore === 0) {
                    _this.playerList[_this.currentPlayerIndex - 1].playerprintTotal(_this.currentBall - 1);
                    _this.currentBall = 1;
                    _this.currentPlayerIndex += 1;
                    if (_this.currentPlayerIndex === 11) {
                        _this.endGame();
                    }
                }
            }
        };
    };
    Team.prototype.endGame = function () {
        if (this.currentPlayerIndex < 11)
            this.playerList[this.currentPlayerIndex - 1].playerprintTotal(this.currentBall - 1);
        document.querySelector("." + this.teamName).innerHTML = "" + this.getTeamScore();
    };
    Team.prototype.getTeamScore = function () {
        this.teamScore = 0;
        for (var i = 0; i < this.playerList.length; i++) {
            if (this.playerList[i].scores.length != 0)
                this.teamScore += this.playerList[i].totalScore();
        }
        this.teamHighestScore = this.teamScore;
        return this.teamScore;
    };
    Team.prototype.manOftheTeam = function () {
        var maxScore = 0;
        var playerMax = 0;
        for (var i = 0; i < this.playerList.length; i++) {
            if (maxScore < this.playerList[i].totalScore()) {
                maxScore = this.playerList[i].totalScore();
                playerMax = i + 1;
            }
        }
        return "Player " + playerMax + " with score " + maxScore;
    };
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(n, t) {
        this.scores = Array();
        this.name = n;
        this.teamname = t;
        this.scores = [];
    }
    Player.prototype.playPlayer = function () {
        /*
        Generates a random number for each ball and add to the scores to the table
        */
        var resA = getRndInteger();
        this.addtoHTMLrow(resA);
        this.addScore(resA);
        return resA;
    };
    Player.prototype.addtoHTMLrow = function (res, isEmpty) {
        if (isEmpty === void 0) { isEmpty = false; }
        var td;
        var row = document.querySelector("#" + this.teamname + "player" + this.name.split('r')[1]);
        td = document.createElement('td');
        if (!isEmpty)
            td.innerHTML = "" + res;
        row.appendChild(td);
    };
    Player.prototype.playerprintTotal = function (currentBallNum) {
        /*
        Fills the left over balls with empty slots and prints total
        */
        for (var i = 0; i < 6 - currentBallNum; i++) {
            this.addtoHTMLrow(-1, true);
        }
        this.addtoHTMLrow(this.totalScore());
    };
    Player.prototype.totalScore = function () {
        return this.scores.reduce(function (tot, score) { return (tot + score); }, 0);
    };
    Player.prototype.addScore = function (currentscore) {
        this.scores.push(currentscore);
    };
    return Player;
}());
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
window.onload = function () {
    document.querySelector('.hitteam1').disabled = true;
    document.querySelector('.hitteam2').disabled = true;
};
