import { Component, OnInit } from '@angular/core';
import { Category } from '../shared-models/category.model';
import { Difficulty } from '../shared-models/dificulty.model';
import { CategoryService } from '../shared-services/category.service';
import { DifficultyService } from '../shared-services/difficulty.service';
import { WebWorkerService } from '../shared-services/webworker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  category: Category[];
  difficulty: Difficulty[];
  categorySelected: number = 110
  difficultySelected: string = 'any'
  questions: string = '10'
  error: boolean = false;
  ifNotError: string = ''

  constructor(
    private categoryService: CategoryService,
    private difficultyService: DifficultyService,
    private webWorker: WebWorkerService) { }

  ngOnInit(): void {
    this.category = this.categoryService.category;
    this.difficulty = this.difficultyService.difficulty;
  }


  submit() {
    if (this.categorySelected && this.difficultySelected && this.questions != '') {
      this.ifNotError = 'quizze-page'
      this.error = false
      // if selected is any
      let api = `https://opentdb.com/api.php?amount=${this.questions}`
      // if option 'any category' was not selected
      if (this.categorySelected != 110) {
        api += `&category=${this.categorySelected}`
      }
      // if option 'any difficulty' was not selected 
      if (this.difficultySelected != 'any') {
        api += `&difficulty=${this.difficultySelected}`
      }
      this.webWorker.getApiData(api).subscribe((response: any) => {
        this.webWorker.questionsCollection = response.results
      })
      console.log(api)

      this.categorySelected = 110
      this.difficultySelected = 'any'
      this.questions = '10'
    } else {
      this.ifNotError = ''
      this.error = true
    }
  }
}

