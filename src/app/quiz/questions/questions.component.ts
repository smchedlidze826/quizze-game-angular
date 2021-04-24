import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebWorker } from 'src/app/shared-services/webworker.service';
import { QuizQuestion } from './questions.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  @Output() score: EventEmitter<number> = new EventEmitter();
  @Input() currentQuestion: QuizQuestion;
  @Input() randomPosition: number;

  questionsArr: QuizQuestion[];
  showAnswers: boolean;
  subs: Subscription;

  constructor(private webworker: WebWorker) { }

  ngOnInit(): void {
    this.questionsArr = this.webworker.questionsArr;
    this.subs = this.webworker.showAnswersStateChange
      .subscribe(
        (resp: boolean) => {
          this.showAnswers = resp
        }
      )
  }

  onClick(index: number) {
    this.showAnswers = true;
    this.webworker.showAnswersStateChange.next(true);
    if (index == 3) {
      this.score.emit(1)
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
