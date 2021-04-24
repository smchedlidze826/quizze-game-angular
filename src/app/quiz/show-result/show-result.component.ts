import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Test } from './test.model';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent {
  @Output() startTheSameTest: EventEmitter<Test> = new EventEmitter();
  @Input() score: number;

  constructor() { }

  onClick() {
    this.startTheSameTest.emit({ theSameTest: true, showResult: false, score: 0, index: 0 })
  }
}
