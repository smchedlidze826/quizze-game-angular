import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'quizze-page', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
