import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  emp: any = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    department: ''
  };

  fnErr = false;
  lnErr = false;
  genErr = false;
  dobErr = false;
  deptErr = false;

  constructor(private router: Router, private empService: EmployeeService) { }

  ngOnInit() {
  }

  backToList = () => {
    this.router.navigate(['/home']);
  }

  saveData = () => {
    if (!this.emp.firstName) {
      this.fnErr = true;
    } else {
      this.fnErr = false;
    }

    if (!this.emp.lastName) {
      this.lnErr = true;
    } else {
      this.lnErr = false;
    }

    if (!this.emp.gender) {
      this.genErr = true;
    } else {
      this.genErr = false;
    }

    if (!this.emp.dob) {
      this.dobErr = true;
    } else {
      this.dobErr = false;
    }

    if (!this.emp.department) {
      this.deptErr = true;
    } else {
      this.deptErr = false;
    }

    if (!this.fnErr && !this.lnErr && !this.genErr && !this.dobErr && !this.deptErr) {
      this.empService.create(this.emp).subscribe(
        (resp) => {
          Swal.fire({
            type: 'success',
            title: 'Success!',
            text: 'Employee data inserted'
          });
          this.backToList();
        },
        (error) => {
          Swal.fire({
            type: 'error',
            title: 'Error!',
            text: error.error.info
          });
        }
      );
    }
  }
}
