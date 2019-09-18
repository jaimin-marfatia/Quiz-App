import { Component, OnInit } from "@angular/core";
import { Question } from "../../models/question";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: Question[];
  queProgress: number = 0;

  constructor(public router: Router) {}

  ngOnInit() {
    this.questions = [
      {
        id: 1,
        que: "Which is the largest country in world by population?",
        options: ["India", "USA", "China", "Russia"],
        answer: "China"
      },
      {
        id: 2,
        que: "When did the second world war end?",
        options: ["1945", "1939", "1944", "1942"],
        answer: "1945"
      },
      {
        id: 3,
        que: "Which was the first country to issue paper currency?",
        options: ["USA", "France", "Italy", "China"],
        answer: "China"
      }
    ];
  }

  Answer(quesId, choice) {
    console.log(quesId, choice);
    this.queProgress++;

    if (this.queProgress === 3) {
      this.router.navigate(["result"]);
    }
  }
}
