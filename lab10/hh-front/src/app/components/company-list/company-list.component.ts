import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { CommonModule, NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
      },
      error: (error) => {
        console.error('Error fetching companies', error);
      },
    });
  }
  selectCompany(id: number): void {
    this.selectedCompanyId = id;
  }
}
