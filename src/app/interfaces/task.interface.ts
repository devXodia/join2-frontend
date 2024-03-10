export interface Task {
  title: string;
  description: string | null;
  duedate: Date;
  prio: string;
  assignedTo: string[] | null;
  category: string;
  subtasks: string[] | null;
}
