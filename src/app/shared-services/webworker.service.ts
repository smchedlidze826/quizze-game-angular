import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class WebWorker {
  showAnswersStateChange = new Subject<boolean>();
  questionsArr = [];
  startTheSameTest: boolean;

  constructor(private http: HttpClient) { }

  getQuizData(api: string) {
    return this.http.get(api)
      .pipe(map(
        (responseData: any) => {
          return responseData.results
        }
      ))
  }
}
