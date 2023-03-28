import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  list: Array<any> = [];
  searchText: string = '';
  selectedId: any;
  ngOnInit() {
    this.list = this.userService.getEmployeeList().list;
    console.log(this.list);
  }

  filterEmployee() {
    return this.list.filter(
      (e) => e.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
    );
  }

  selectEmployee(id: string) {
    if (this.selectedId == id) {
      this.selectedId = null;
    } else {
      this.selectedId = id;
    }
  }

  onEmployeeClick(employee: any) {
    this.router.navigate(['employee/info/' + employee.id]);
  }

  onSubmit(id: string) {
    this.router.navigate(['employee/info/' + id]);
  }
}
