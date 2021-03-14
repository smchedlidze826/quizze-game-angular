import { Component, OnInit } from '@angular/core';
import { ClickService } from '../shared-services/handle-clicks.service';
import { WebWorkerService } from '../shared-services/webworker.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  randomPosition: number;
  questCollection: any;
  quizze: any;
  index: number = 0
  score: number = 0;
  answerSelected: any;
  nextBtnText: string = 'Submit Answer';
  nextBtnClickCounter: number;
  showResult: boolean = false

  constructor(
    private webworker: WebWorkerService,
    private clickService: ClickService) { }

  ngOnInit() {
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount
    this.questCollection = this.webworker.questionsCollection
    this.quizze = this.questCollection[this.index]
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
      if (this.questCollection.length - 1 > this.index) {
        this.nextBtnText = 'Next Question'
      } else {
        this.nextBtnText = 'Show Results'
        this.showResult = true
      }
    } else { // after nextBtn was clicked 
      if (this.questCollection.length - 1 >= this.index) {
        this.index++
        this.quizze = this.questCollection[this.index]
      }
      this.answerSelected = ''
      this.randomPosition = Math.round(Math.random() * 5)// to randomize correct answer possition after clicking next btn
      this.clickService.nextBtnClickCount = 0
      this.nextBtnText = 'Submit Answer'
    }
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount
  }

  restart() {
    this.showResult = false
    console.log(this.showResult)
    this.index = 0
    this.score = 0
    this.clickService.nextBtnClickCount = 0
    this.nextBtnClickCounter = this.clickService.nextBtnClickCount
    this.nextBtnText = 'Submit Answer';
  }

  selectedElement(index) {
    this.answerSelected = index
  }

}
