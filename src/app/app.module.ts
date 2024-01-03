import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AddTaskComponent } from './components/dashboard/add-task/add-task.component';
import { ContactsComponent } from './components/dashboard/contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignUpComponent, DashboardComponent, AddTaskComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
