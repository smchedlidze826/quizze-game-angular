import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { QuizzeQuestion } from '../shared-models/quizzeQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {
  questionsCollectionChange = new Subject<QuizzeQuestion>()
  questionsCollection: QuizzeQuestion[];
  constructor(private httpClient: HttpClient) { }

  public getApiData(url: string) {
    return this.httpClient.get(url).pipe(map((response: any) => {
      return response;
    }));
  }

}