import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeDetail } from '../employee-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent implements OnInit {
  constructor(
    private employeeService: EmployeeServiceService,
    private router: Router
  ) {}

  Employee: EmployeeDetail[] = [];
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.Employee = data;
    });
  }
  updateEmployee(eid: number) {
    console.log(eid);
    this.router.navigate(['update-employee', eid]);
  }
  
  deleteEmployee(eid: number): void {
    console.log(`Deleting employee with ID: ${eid}`);
    this.employeeService.DeleteEmployeeById(eid).subscribe(() => {
      this.getEmployees(); // Refresh the list after deletion
    });
  }

  private getEmployees(): void {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.Employee = data;
    });
  }
}

  // deleteEmployee(eid: number) {
  //   console.log(eid);
  //   this.router.navigate(['delete-employee', eid]);
  // }
// }
