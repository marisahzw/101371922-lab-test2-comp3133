import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  availableYears: number[] = [];

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.availableYears.push(year);
    }
  }

  ngOnInit(): void {
  }

  onFilterChange(event: MatSelectionListChange): void {
    const year = event.options[0].value;
    this.filter.emit(year.toString());
  }
}
