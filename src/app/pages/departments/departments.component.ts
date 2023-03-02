import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBModel, DepartmentViewModel } from 'src/app/model/all.model';
import { DatabaseService } from 'src/app/service/database.service';
import { DirectiveModule } from 'src/app/directive/track-by-key.directive';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, DirectiveModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  limit = 10;
  departmentList: DepartmentViewModel[] = []

  constructor(private service: DatabaseService) {
    this.subscribeToData();
  }

  getMoreDepartment() {
    this.limit = this.limit + 10;
    this.subscribeToData();
  }

  subscribeToData() {
    this.service.getData(this.limit).subscribe((deptList: DBModel[]) => {
      this.departmentList = deptList.map((emp:DBModel) => ({departmentId: emp.id, name: emp.name}));
    });
  }

  clearData() {
    this.departmentList = [];
    this.limit = 10;
    this.subscribeToData();
  }
}
