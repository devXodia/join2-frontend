import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { BoardComponent } from './components/dashboard/board/board.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AddTaskComponent } from './components/dashboard/add-task/add-task.component';
import { ContactsComponent } from './components/dashboard/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'board', component: BoardComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
        {
           path: 'summary',
           component: SummaryComponent
        },
        {
           path: 'board',
           component: BoardComponent
        },
        {
          path: 'add-task',
          component: AddTaskComponent
       },
       {
        path: 'contacts',
        component: ContactsComponent
     }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
