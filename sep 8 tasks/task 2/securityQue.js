var securityQuestions = [
    {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
];

function chksecurityQuestions(securityQue, que, ans) {

    for(j=0;j<3;j++){
        if (securityQue[j].question === que) {
            if (securityQue[j].expectedAnswer == ans) {
                return true;
            }
        }
        return false;

    };
}


var ques = 'What was your first pet’s name?';
var ans = 'FlufferNutter';
console.log(chksecurityQuestions(securityQuestions,ques,ans));


ques = 'What was your first pet’s name?';
ans = 'DufferNutter';
console.log(chksecurityQuestions(securityQuestions,ques,ans));