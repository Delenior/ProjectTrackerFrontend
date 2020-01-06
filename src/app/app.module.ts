import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import 'hammerjs';
import { MaterialModule } from 'src/material';
import { DeleteSnackbarComponent } from './snackbars/delete-snackbar/delete-snackbar.component';
import { NewProjectSnackBarComponent } from './snackbars/new-project-snack-bar/new-project-snack-bar.component';
import { ErrorSnackbarComponent } from './snackbars/error-snackbar/error-snackbar.component';
import { TaskUpdatedSnackbarComponent } from './snackbars/task-updated-snackbar/task-updated-snackbar.component';
import { FilterProjectPipe } from './filter-project.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectHomeComponent,
    ProjectTasksComponent,
    NewProjectFormComponent,
    NotFoundComponent,
    ProjectComponent,
    DeleteSnackbarComponent,
    NewProjectSnackBarComponent,
    ErrorSnackbarComponent,
    TaskUpdatedSnackbarComponent,
    FilterProjectPipe
  ],
  entryComponents: [DeleteSnackbarComponent, ErrorSnackbarComponent, NewProjectSnackBarComponent, TaskUpdatedSnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
