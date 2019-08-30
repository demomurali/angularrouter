import { EmployeeComponent } from "src/app/component/employee/employee.component";
import { EmployeeRegistrationComponent } from "src/app/component/employee-registration/employee-registration.component";
import { Routes } from "@angular/router";
import { EmployeedetailsComponent } from "src/app/component/employeedetails/employeedetails.component";
import {EditemployeeComponent} from "src/app/component/editemployee/editemployee.component"

export const routes:Routes=[
 { path:'employees',component:EmployeeComponent,
    children:[
        {path:':idss',
        component:EmployeedetailsComponent}
    ]
},
 { path:'registration',component:EmployeeRegistrationComponent},
 { path:'editEmployee/:id',component:EditemployeeComponent},   
 { path:'',component:EmployeeComponent},

 { path:'employeess', redirectTo:'employees', pathMatch:'full'},
 { path:'**',component:EmployeeComponent}
]
