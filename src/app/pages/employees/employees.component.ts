import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from 'src/app/service/database.service';
import { DBModel, EmployeeViewModel } from 'src/app/model/all.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [DatabaseService]
})
export class EmployeesComponent {
  limit = 10;
  employeeList: EmployeeViewModel[] = []
  
  constructor(private service: DatabaseService) {
    this.service.getData(this.limit).subscribe((empList: DBModel[]) => {
      this.castToEmployeeViewList(empList);
    });
  }

  getMoreEmployee() {
    this.limit = this.limit + 10;
    this.service.getData(this.limit).subscribe((empList: DBModel[]) => {
      this.castToEmployeeViewList(empList);
    });
  }

  castToEmployeeViewList(empList: DBModel[]) {
    this.employeeList = empList.map((emp:DBModel) => ({employeeId: emp.id, name: emp.name}));
  }

  trackById(item: any) {
    return item.employeeId;
  }
}
