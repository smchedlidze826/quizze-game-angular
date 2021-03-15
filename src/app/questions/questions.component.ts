import { Component, OnInit } from '@angular/core';
import { QuizzeQuestion } from '../shared-models/quizzeQuestion.model';
import { ClickService } from '../shared-services/handle-clicks.service';
import { WebWorkerService } from '../shared-services/webworker.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  randomPosition: number;
  index: number = 0;
  score: number = 0;
  quizze: QuizzeQuestion;
  questCollection: QuizzeQuestion[];
  answerSelected: any;
  nextBtnClickCounter: number;
  showResult: boolean = false
  nextBtnText: string = 'Submit Answer';


  constructor(
    private webworker: WebWorkerService,
    private clickService: ClickService) { }


  ngOnInit() {
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount;
    this.questCollection = this.webworker.questionsCollection;
    this.quizze = this.questCollection[this.index];
    this.randomPosition = Math.round(Math.random() * 5)// to randomize correct answer possition after clicking start quizze
  }



  nextBtn() {
    // 1 click ==  showResults
    // 2 clicks ==  next
    if (this.clickService.nextBtnClickCount == 0) {
      // check if answer is correct | 3 == correct
      if (this.answerSelected == 3) {
        this.score++
      }
      this.clickService.nextBtnClickCount = 1
      this.nextBtnText = 'Next Question'
    } else { // after submit answer button was clicked 
      if (this.questCollection.length - 1 > this.index) {
        this.index++
        this.quizze = this.questCollection[this.index]
      } else if (this.questCollection.length - 1 == this.index) {
        this.showResult = true
      }
      this.answerSelected = ''
      this.randomPosition = Math.round(Math.random() * 5)// to randomize correct answer possition after clicking next btn
      this.clickService.nextBtnClickCount = 0
      this.nextBtnText = 'Submit Answer'
    }
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount
  }

  restart() {// return to default settings
    this.showResult = false
    this.index = 0
    this.score = 0
    this.clickService.nextBtnClickCount = 0
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount
    this.nextBtnText = 'Submit Answer';
    this.quizze = this.questCollection[this.index]
  }

  selectedElement(index) {
    this.answerSelected = index
  }

}
