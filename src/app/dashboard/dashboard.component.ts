import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userform = FormGroup

  constructor(private fb:FormBuilder) {
      // this.userform = this.fb.group ({
      //   firstname :['', Validators.required],
      //   lastname :['', Validators.required],
      //   gender :['', Validators.required]
      // })
   }

  ngOnInit(): void {
  }

}
