function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = 
function(){
    console.log(this.question);
    
    for(var i=0;i < this.answers.length; i++)
    {
        console.log(i+ ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer =
function(ans){
    if(ans===this.correct){
        console.log('Correct Answer!')
    }
    else{
        console.log('Wrong Answer,try again! :)');
    }
}

var q1 = new Question('Who founded Facebook', ['Mark Zuckerberg','Steve Jobs','Bill Gates'], 0);

var q2 = new Question('Who was the first man to step on the moon', ['Michael Collins','Neil Armstrong','Edwin Aldrid'], 1);

var q3 = new Question('Which one is a reptile', ['Lion','Eagle','Snake'], 2);

var questions = [q1,q2,q3];
var n = Math.floor(Math.random()*questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer'));

questions[n].checkAnswer(answer);