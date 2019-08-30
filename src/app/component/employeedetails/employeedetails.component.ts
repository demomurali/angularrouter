import { Component, OnInit } from '@angular/core';
import {Employee} from './../../service/Employee'
import {ActivatedRoute} from '@angular/router'
import { ParamMap } from '@angular/router';
import {tap,filter,map,switchMap, flatMap} from 'rxjs/operators'
import {EmployeeService} from './../../service/employee.service'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private employeeService:EmployeeService) { }

  employee:Employee;
  
  

  ngOnInit() {
   
    this.route.paramMap.pipe(
      switchMap((paramMap:ParamMap)=>this.employeeService.getEmployeeById(paramMap.get('idss')))
    ).subscribe(
            (employee:Employee)=>{
              this.employee=employee;
            } 
         )
      }
   
}
