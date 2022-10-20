import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
// import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  userForm : FormGroup;
  listData:any;
  IsChecked: boolean;


  constructor(private fb:FormBuilder) {

    this.listData = [];
    this.IsChecked = false;

    this.userForm = this.fb.group ({
      firstname :['', Validators.required],
      lastname :['', Validators.required],
      gender :['', Validators.required]
    })
  }

  public addItem() : void {
   this.listData.push(this.userForm.value)

  // checkboxes: any[] = [

  // ]

    // this.checkboxes.push({},)
   }
  //  CheckAllOptions() {
  //   if (this.checkboxes.every(val => val.checked == true))
  //     this.checkboxes.forEach(val => { val.checked = false });
  //   else
  //     this.checkboxes.forEach(val => { val.checked = true });
  // }

  changeEvent($event:any) {
    console.log($event.checked);
    //$event.source.toggle();
    $event.source.focus();
  }




   removeItem(element: any){
    this.listData.forEach((value: any,index: any)=>{
      if (value == element)
      this.listData.splice(index,1);
    });
   }


   

  ngOnInit(): void {
  }

}
