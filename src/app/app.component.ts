import { Component } from '@angular/core';
import { ClickService } from './shared-services/handle-clicks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ClickService
  ]


})
export class AppComponent {
  title = 'quizze-game-angular';
}
