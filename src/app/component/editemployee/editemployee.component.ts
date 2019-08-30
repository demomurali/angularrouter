import { Component, OnInit } from '@angular/core';
import {Employee} from './../../service/Employee'
import {ActivatedRoute, Router} from '@angular/router'
import { ParamMap } from '@angular/router';
import {tap,filter,map,switchMap, flatMap} from 'rxjs/operators'
import {EmployeeService} from './../../service/employee.service'
import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  
  employeeForm:FormGroup;
  employee:Employee;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  
  constructor(private router:Router, private route:ActivatedRoute, private employeeService:EmployeeService) 
  { 
    this.employeeForm=new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',[Validators.required,Validators.pattern('[a-z]{4,6}')]),
      age:new FormControl('',[Validators.required,Validators.max(60),Validators.min(20)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(20)]),
      language:new FormControl('')
        })
      }
 
  
   // instruction   
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((paramMap:ParamMap)=>this.employeeService.getEmployeeById(paramMap.get('id')))
    ).subscribe(
        
            (employee:Employee)=>{
              console.log('edit employee');
              this.employee=employee;
            } 
         )
      }

      saveEmployee(){
        this.employeeService.updateEmployee(this.employee).subscribe(
         ()=>{
          alert('successfully edited');
          this.router.navigate(['employees'])
         }
          

        )
      }


  }


