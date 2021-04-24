import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collection } from './collections.model';
import { Collections } from '../shared-services/collections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;

  numberOfQuestions: number = 10;
  categoryArr: Collection[];
  difficultyArr: Collection[];
  categorySelected = 'any';
  difficultySelected = 'any';
  errorMsg: boolean;

  constructor(
    private collection: Collections,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryArr = this.collection.category;
    this.difficultyArr = this.collection.difficulty;
  }

  onSubmit() {
    this.errorMsg = false;
    if (this.f.valid) {
      // if selected is any
      let api = `amount=${this.f.value.numberOfQuestions}`
      // if option 'any category' was not selected
      if (this.f.value.category != 'any') {
        api += `&category=${this.categorySelected}`
      }
      // if option 'any difficulty' was not selected
      if (this.f.value.difficulty != 'any') {
        api += `&difficulty=${this.difficultySelected}`
      }
      this.router.navigate(['/quiz', { api: api }])
    } else { this.errorMsg = true; }
  }
}
