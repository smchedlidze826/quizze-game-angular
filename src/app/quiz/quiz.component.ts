import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebWorker } from '../shared-services/webworker.service';
import { QuizQuestion } from './questions/questions.model';
import { Test } from './show-result/test.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit, OnDestroy {
  subs: Subscription;
  questionDataIsLoaded: boolean;
  questionsArr: QuizQuestion[];
  currentQuestion: QuizQuestion;
  index: number = 0;
  score: number = 0;
  showAnswers = false;
  showResult: boolean = false;
  randomPosition: number = Math.round(Math.random() * 5);
  startTheSameTest: boolean = false;

  constructor(
    private webworker: WebWorker,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.questionDataIsLoaded = false;
    this.score = 0;
    if (!this.startTheSameTest) {
      let api = `https://opentdb.com/api.php?${this.route.snapshot.params.api}`
      this.webworker.getQuizData(api)
        .subscribe(
          (resp: QuizQuestion[]) => {
            this.webworker.questionsArr = resp
            this.questionsArr = resp
            this.questionDataIsLoaded = true
            this.currentQuestion = this.questionsArr[0]
          }
        )
    }



    this.subs = this.webworker.showAnswersStateChange
      .subscribe(
        (resp: boolean) => {
          this.showAnswers = resp
        }
      )
  }

  onClick() {
    this.webworker.questionsArr.length - 1 > this.index ? this.index++ : this.showResult = true;
    this.currentQuestion = this.questionsArr[this.index];
    this.webworker.showAnswersStateChange.next(false);
    this.randomPosition = Math.round(Math.random() * 5);
  }

  emittedScore(score: number) {
    this.score += score
  }

  emittedData(data: Test) {
    this.startTheSameTest = data.theSameTest;
    this.showResult = data.showResult;
    this.score = data.score;
    this.index = data.index;
    this.currentQuestion = this.webworker.questionsArr[this.index]
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
