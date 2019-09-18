import { Component, OnInit } from "@angular/core";
import { Question } from "../../models/question";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: Question[];

  constructor() {}

  ngOnInit() {
    this.questions = [
      {
        id: 1,
        que: "question 1",
        option1: "this is option 1",
        option2: "this is option 1",
        option3: "this is option 1",
        option4: "this is option 1",
        answer: "correct answer"
      },
      {
        id: 2,
        que: "question 2",
        option1: "this is option 1",
        option2: "this is option 1",
        option3: "this is option 1",
        option4: "this is option 1",
        answer: "correct answer"
      }
    ];
  }
}
