import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Task } from '../../../interfaces/task.interface';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [MatProgressBarModule, CdkDrag, CdkDropList, DragDropModule],
  standalone: true,
})
export class BoardComponent {
  todo: any = [];
  progress: any = [];
  feedback: any = [];
  done: any = [];

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

    const secondTask: Task = {
      title: 'Second task',
      description: 'Hello World!',
      duedate: new Date(),
      prio: 'high',
      assignedTo: ['Alen Alduk'],
      category: 'Social Media',
      subtasks: [],
    };

    this.todo.push(newTask);
    this.feedback.push(secondTask);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    console.log('todo array', this.todo);
    console.log('progress array', this.progress);
    console.log('feedback array', this.feedback);
    console.log('done array', this.done);
  }
}
