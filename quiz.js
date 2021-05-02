class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    correctAnswer = (choice) => {  // выбор который ты сделал совпадает ли с ответом
        return choice === this.answer;
    }
}