import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { DecodePipe } from './quiz/questions/decode.pipe';
import { ShowResultComponent } from './quiz/show-result/show-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizComponent,
    QuestionsComponent,
    DecodePipe,
    ShowResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
