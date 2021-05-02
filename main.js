class Quiz {
    constructor(questions) { // массив с вопросами
        this.score = 0; // счетчик
        this.questions = questions; // список вопросов которые будут в массиве obj
        this.questionIndex = 0 // x - 2 стр  текущий вопрос , y - 20 стр 
    }
    getQuestionIndex = () => { // возвращает индекс текущего вопроса
        return this.questions[this.questionIndex]
    }

    // [ 1, 2, 3, 4, 5]
    // 5 == 5 игра завершается, если 3 == 5 то продолжается
    isEnded = () => { // проверяет на завершение теста
        return this.questions.length === this.questionIndex
    }

    guess = (answer) => {
        if (this.getQuestionIndex().correctAnswer(answer)) {  // объект и массив
            this.score++
        }
        this.questionIndex++
    }
}