import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../shared-models/category.model';
import { Difficulty } from '../shared-models/dificulty.model';

import { Collections } from '../shared-services/collections.service';
import { ClickService } from '../shared-services/handle-clicks.service';
import { WebWorkerService } from '../shared-services/webworker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit, DoCheck {
  @ViewChild('f', { static: false }) form: NgForm;

  category: Category[];
  difficulty: Difficulty[];
  categorySelected: number;
  difficultySelected: string;
  questions: string;
  questionsAreGenerated: boolean;


  constructor(
    private collections: Collections,
    private webWorker: WebWorkerService,
    private clickService: ClickService,
    private router: Router) { }

  ngOnInit(): void {
    this.category = this.collections.category;
    this.difficulty = this.collections.difficulty;
    this.questionsAreGenerated = false;
    this.questions = '10';
    this.categorySelected = 110;
    this.difficultySelected = 'any';
  }


  onSubmit() {
    this.clickService.nextBtnClickCount = 0
    if (this.form.valid) {
      // if selected is any
      let api = `https://opentdb.com/api.php?amount=${this.questions}`
      // if option 'any category' was not selected
      if (this.form.value.category != 110) {
        api += `&category=${this.categorySelected}`
      }
      // if option 'any difficulty' was not selected 
      if (this.form.value.difficulty != 'any') {
        api += `&difficulty=${this.difficultySelected}`
      }
      console.log(api)
      this.webWorker.getApiData(api)
        .subscribe((response: any) => {
          this.webWorker.questionsCollection = response.results
        })
    }
    this.questionsAreGenerated = true
  }

  ngDoCheck() {
    //check if questionsCollection is ready to run
    let questionsArr = this.webWorker.questionsCollection
    if (questionsArr && this.questionsAreGenerated && this.form.valid) {
      this.router.navigate(['/quizze-page'])
    }
  }

}

