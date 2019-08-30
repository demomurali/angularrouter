import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component'
import {RouterModule} from "@angular/router"
import { EmployeedetailsComponent } from './component/employeedetails/employeedetails.component'
import {routes} from './routes';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditemployeeComponent } from './component/editemployee/editemployee.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeRegistrationComponent,
   
    EmployeedetailsComponent,
   
    HeaderComponent,
   
    FooterComponent,
   
    EditemployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  //providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

