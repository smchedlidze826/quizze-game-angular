import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { WebWorkerService } from './shared-services/webworker.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { SelectAnswerDirective } from './shared-directives/select-answer.directive';
import { DecodeCharactersPipe } from './shared-pipes/decode-characters.pipe';

import { MatButtonModule } from '@angular/material/button';
import { Collections } from './shared-services/collections.service';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuestionsComponent,
    SelectAnswerDirective,
    DecodeCharactersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
