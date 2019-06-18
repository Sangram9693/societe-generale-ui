import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empList: any[] = [];
  p = 1;

  constructor(private router: Router, private empService: EmployeeService) { }

  ngOnInit() {
    this.loadEmp();
  }

  createEmp = () => {
    this.router.navigate(['/add']);
  }

  loadEmp = () => {
    this.empService.getAll().subscribe(
      (resp) => {
        this.empList = resp;
        if (this.empList.length === 0) {
          this.router.navigate(['/add']);
        }
      }
    );
  }
}
