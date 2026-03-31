import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceService } from '../../services/source';
import { SourceModel } from '../../models/source.model';
import {  SourceFormComponent } from "../source-form/source-form";

@Component({
  selector: 'app-source-list',
  standalone: true,
  imports: [CommonModule, SourceFormComponent],
  templateUrl: './source-list.html',
  styleUrls: ['./source-list.css'], 
})
export class SourceList implements OnInit {

  sources: SourceModel[] = [];

  showForm = false;

  constructor(
    private sourceService: SourceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getSources();
  }

  getSources(): void {
    console.log('getSources() called');

    this.sourceService.getSources().subscribe({
      next: (data) => {
        console.log('API Response:', data);

        this.sources = data.results || [];

        console.log('sources:', this.sources);
        console.log('Is Array?', Array.isArray(this.sources));
        console.log('Length:', this.sources.length);
        console.log('First Item:', this.sources[0]);
        
        this.cdr.markForCheck(); 
      },
      error: (err) => {
        console.error('Error fetching sources:', err);
      }
    });
  }


  onSourceAdded() {
    this.getSources();     // refresh list
    this.showForm = false; // close modal
  }
}
