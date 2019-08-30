import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Employee} from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getEmployees():Observable<any>{
   let observables=this.httpClient.get('http://localhost:3000/employees')
    return observables
  }

  getEmployeeById(id):Observable<any>{
    let observables=this.httpClient.get('http://localhost:3000/employees/'+id)
     return observables
   }

   deleteEmployeeById(id):Observable<any>{
    let observables=this.httpClient.delete('http://localhost:3000/employees/'+id)
     return observables
   }

  insertEmployee(employee:Employee):Observable<any>{
   return this.httpClient.post('http://localhost:3000/employees ',employee)
 }

 updateEmployee(employee:Employee):Observable<any>{
  return this.httpClient.put('http://localhost:3000/employees/'+employee.id,employee)
}





 
}
