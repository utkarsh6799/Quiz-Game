fuction Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Question('Who founded Facebook', ['Mark Zuckerberg','Steve Jobs','Bill Gates'], 0);

var q2 = new Question('Who was the first man to step on the moon', ['Michael Collins','Neil Armstrong','Edwin Aldrid'], 1);

var q3 = new Question('Which one is a reptile', ['Lion','Eagle','Snake'], 2);

var questions = [q1,q2,q3];
var n = Math.floor(Math.random()*questions.length);

questions[n];