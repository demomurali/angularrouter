import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../../service/employee.service'
import {Employee} from './../../service/Employee'
import {Router} from '@angular/router'

@Component({
  selector: 'ems-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {

  employees:Employee[]=[]

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
    this.loadTable();
  
  }

  loadTable(){
    this.employeeService.getEmployees().subscribe(
      (responseData:Employee[])=>{
          this.employees=responseData
      },
      (error)=>{
        console.log('error');
        console.log(error);
      }
  );
  }

  deleteEmployee(employee:Employee){
    this.employeeService.deleteEmployeeById(employee.id)
        .subscribe(
              ()=>{
                alert('succefully deleted');
                this.loadTable();
              }
        )
  }

  editEmployee(employee:Employee){
    this.router.navigate(['editEmployee',employee.id])
  }

}
