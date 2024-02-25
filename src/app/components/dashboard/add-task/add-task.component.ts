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

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('de-DE');
  }

  checkDate(event: any) {
    // function to invalid date ;
  }
}
