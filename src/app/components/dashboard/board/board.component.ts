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
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [
    MatProgressBarModule,
    CdkDrag,
    CdkDropList,
    DragDropModule,
    MatDialogModule,
    EditDialogComponent,
  ],
  standalone: true,
})
export class BoardComponent {
  todo: any = [];
  progress: any = [];
  feedback: any = [];
  done: any = [];

  constructor(public dialog: MatDialog) {}

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

    this.todo.push(newTask);
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { name: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
