import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.BASE_URL);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}${id}/`);
  }

  getVacanciesByCompany(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}${id}/vacancies/`);
  }
}
