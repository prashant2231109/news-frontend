import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SourceService } from '../../services/source';
import { Company } from '../../../services/company';

@Component({
  selector: 'app-source-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './source-form.html',
  styleUrls: ['./source-form.css']
})
export class SourceFormComponent {

  @Output() saved = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  formData = {
    name: '',
    url: '',
    tagged_companies: []
  };

  // dummy companies (replace with API later)
  // companies = [
  //   { id: 1, name: 'Amazon' },
  //   { id: 2, name: 'Google' }
  // ];

  companies: any[] = [];

  constructor(private sourceService: SourceService , private companyService: Company,) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (res: any) => {
        console.log('Companies API:', res);

        // adjust depending on API response
        this.companies = res.data ? res.data : res;
        console.log('Loaded companies:', this.companies);
      },
      error: (err :any) => {
        console.error(err);
      }
    });
  }

  submitForm() {
    this.sourceService.addSource(this.formData).subscribe({
      next: () => {
        this.saved.emit(); // notify parent
      }
    });
  }

  closeForm() {
    this.close.emit();
  }
}