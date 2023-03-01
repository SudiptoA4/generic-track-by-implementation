import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeM } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent {
  limit = 10;
  employeeList: EmployeeM[] = []
  // employees$ = this.service.getEmployees(this.limit);
  constructor(private service: EmployeeService) {
    this.service.getEmployees(this.limit).subscribe((empList) => {
      this.employeeList = empList
    });
  }

  getMoreEmployee() {
    this.limit = this.limit + 10;
    this.service.getEmployees(this.limit).subscribe((empList) => {
      this.employeeList = empList
    });
  }

  trackById(item: any) {
    return item.id;
  }
}
