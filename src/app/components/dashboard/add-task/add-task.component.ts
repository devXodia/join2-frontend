import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  todayDate: Date = new Date();
  picker: Date = new Date();
  error: boolean = false;
  urgent: boolean = false;
  medium: boolean = false;
  low: boolean = false;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('de-DE');
  }

  checkDate(event: any) {
    // function to handle errors on invalid date
  }

  changeUrgentPrio() {
    this.urgent = !this.urgent;

    if (this.urgent) {
      this.medium = false;
      this.low = false;
    }
  }

  changeMediumPrio() {
    this.medium = !this.medium;

    if (this.medium) {
      this.urgent = false;
      this.low = false;
    }
  }

  changeLowPrio() {
    this.low = !this.low;

    if (this.low) {
      this.urgent = false;
      this.medium = false;
    }
  }
}
