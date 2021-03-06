import { Component, OnInit } from '@angular/core';
import { Question, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
message:string
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addQuestion:Question):any{
    console.log(addQuestion);
     this.myservice.addQuestion(addQuestion).subscribe(data => {
      this.message=data});
  }
}
