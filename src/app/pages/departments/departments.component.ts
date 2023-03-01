import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBModel, DepartmentViewModel } from 'src/app/model/all.model';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  limit = 10;
  departmentList: DepartmentViewModel[] = []

  constructor(private service: DatabaseService) {
    this.service.getData(this.limit).subscribe((depList: DBModel[]) => {
      this.castToDepartmentViewList(depList);
    });
  }

  getMoreDepartment() {
    this.limit = this.limit + 10;
    this.service.getData(this.limit).subscribe((deptList: DBModel[]) => {
      this.castToDepartmentViewList(deptList);
    });
  }

  castToDepartmentViewList(deptList: DBModel[]) {
    this.departmentList = deptList.map((emp:DBModel) => ({departmentId: emp.id, name: emp.name}));
  }

  trackById(item: any) {
    return item.employeeId;
  }
}
