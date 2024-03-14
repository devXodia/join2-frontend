import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Task } from '../../../interfaces/task.interface';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [MatProgressBarModule, CdkDrag],
  standalone: true,
})
export class BoardComponent {
  todo: Task[] = [];
  progress: Task[] = [];
  feedback: Task[] = [];
  done: Task[] = [];

  ngOnInit() {
    const newTask: Task = {
      title: 'Test task',
      description: 'Hello description',
      duedate: new Date(),
      prio: 'high',
      assignedTo: ['Harry Potter'],
      category: 'Media',
      subtasks: [],
    };

    this.progress.push(newTask);
  }
}
