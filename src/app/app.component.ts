import { Component } from '@angular/core';
import { CategoryService } from './shared-services/category.service';
import { DifficultyService } from './shared-services/difficulty.service';
import { ClickService } from './shared-services/handle-clicks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CategoryService,
    DifficultyService,
    ClickService
  ]


})
export class AppComponent {
  title = 'quizze-game-angular';
}
