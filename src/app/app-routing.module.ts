import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultComponent } from "./components/result/result.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
  { path: "result", component: ResultComponent },
  { path: "quiz", component: QuizComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
