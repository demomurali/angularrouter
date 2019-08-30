import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"
import {EmployeeService} from './../../service/employee.service'
import {Employee} from './../../service/Employee'
import { Validators } from '@angular/forms';

@Component({
  selector: 'employee-registration',
  templateUrl: './employee-registration.component.html',
})
export class EmployeeRegistrationComponent implements OnInit {

  employeeForm:FormGroup;
  
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private employeeService:EmployeeService) { 

        this.employeeForm=new FormGroup({
          id:new FormControl('',Validators.required),
          name:new FormControl('',[Validators.required,Validators.pattern('[a-z]{4,6}')]),
          age:new FormControl('',[Validators.required,Validators.max(60),Validators.min(20)]),
          address:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(20)]),
          language:new FormControl('')
        })

  }

  ngOnInit() {
  }

  formHandler(){
    console.log(this.employeeForm);
    this.insertEmployee(this.employeeForm.value);
  }

  insertEmployee(employee:Employee){
    this.employeeService.insertEmployee(employee).subscribe(
      ()=>{console.log('success')},
      ()=>{console.log('failure')}
    )
  }

}
