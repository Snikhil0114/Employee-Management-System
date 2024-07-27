import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from '../employee-detail';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  employee: EmployeeDetail = new EmployeeDetail();
  constructor(
    private employeeService: EmployeeServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addEmployeeData() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data) => {
        alert('Employee Data Inserted Succesfully.');
        this.gotohomepage();
      },
      (error) => alert('Error Occured to insert the Data.')
    );
  }
  gotohomepage() {
    this.router.navigate(['']);
  }
}
