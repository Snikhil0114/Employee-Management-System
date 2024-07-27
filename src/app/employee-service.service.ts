// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { EmployeeDetail } from './employee-detail';

// @Injectable({
//   providedIn: 'root',
// })
// export class EmployeeServiceService {
//   baseURL = 'http://localhost:8081/employee';
//   constructor(private http: HttpClient) {}
//   addEmployee(employee: EmployeeDetail) {
//     console.log(employee);
//     return this.http.post(this.baseURL, employee);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetail } from './employee-detail';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:8081/employee';

  constructor(private http: HttpClient) {}

  addEmployee(employee: EmployeeDetail): Observable<Object> {
    console.log(employee);
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  getAllEmployee(): Observable<EmployeeDetail[]> {
    return this.http.get<EmployeeDetail[]>(`${this.baseUrl}/get`);
  }
  getEmployeeById(eid: number): Observable<EmployeeDetail> {
    return this.http.get<EmployeeDetail>(`${this.baseUrl}/${eid}`);
  }
  updateEmployee(id: number, employee: EmployeeDetail): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  DeleteEmployeeById(eid: Number): Observable<void> {
    console.log(eid);
    return this.http.delete<void>(`${this.baseUrl}/${eid}`);
  }
  updateEmployeeData(employee: EmployeeDetail): Observable<EmployeeDetail> {
    return this.http.post<EmployeeDetail>(`${this.baseUrl}/add`, employee);
  }
}
