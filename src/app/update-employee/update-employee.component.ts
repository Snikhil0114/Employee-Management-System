import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from '../employee-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { error } from 'node:console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(
    private activateRouter: ActivatedRoute,
    private employeeService: EmployeeServiceService,
    private router: Router
  ) {}
  eid!: number;
  employee: EmployeeDetail = new EmployeeDetail();
  ngOnInit(): void {
    this.eid = this.activateRouter.snapshot.params['eid'];
    console.log(this.eid);
    this.employeeService.getEmployeeById(this.eid).subscribe((data) => {
      this.employee = data;
      console.log(this.employee);
    });
  }

  updateEmployeeData() {
    this.employeeService.updateEmployeeData(this.employee).subscribe(
      (data) => {
        alert('Updated Succesfully.');
        this.router.navigate(['/Employees']);
      },
      error=> alert('Sorry,Unable to Update')
    );
  }
}
