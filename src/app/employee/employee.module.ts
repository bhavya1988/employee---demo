import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmpoyeeRoutingModule } from './employee-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeInfoComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, EmpoyeeRoutingModule, FormsModule],
})
export class EmployeeModule {}
