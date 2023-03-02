import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from 'src/app/service/database.service';
import { DBModel, EmployeeViewModel } from 'src/app/model/all.model';
import { DirectiveModule } from 'src/app/directive/track-by-key.directive';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, DirectiveModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [DatabaseService]
})
export class EmployeesComponent {
  limit = 10;
  employeeList: EmployeeViewModel[] = []

  constructor(private service: DatabaseService) {
    this.subscribeToData();
  }

  getMoreEmployee() {
    this.limit = this.limit + 10;
    this.subscribeToData();
  }

  subscribeToData() {
    this.service.getData(this.limit).subscribe((empList: DBModel[]) => {
      this.employeeList = empList.map((emp:DBModel) => ({employeeId: emp.id, name: emp.name}));
    });
  }

  trackById(item: any) {
    return item.employeeId;
  }
}
