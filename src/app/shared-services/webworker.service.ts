import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {

  constructor(private httpClient: HttpClient) { }
  questionsCollection: any;
  public getApiData(url: string) {
    return this.httpClient.get(url)
  }

}
