import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Company } from './models/company';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  candidate = 'Candidato 1';


  company = {} as Company;
  companies: Company[];
  filtro: string = '';

  constructor(private companyService: CompanyService) {}
  
  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();
      

      this.companies = this.companies.filter(a =>
            a.name.toUpperCase().indexOf(palavraChave) >= 0 || a.segment.toUpperCase().indexOf(palavraChave) >= 0 
        );
    }
  }

  getCompany() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }
}
