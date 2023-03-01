import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentsComponent
  }, {
    path: 'employees',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
