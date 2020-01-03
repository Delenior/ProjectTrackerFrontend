import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectHomeComponent
  },
  {
    path: 'new-project',
    component: NewProjectFormComponent
  },
  {
    path: '',
    component: ProjectHomeComponent
  },
  {
    path: ':id/issues',
    component: ProjectTasksComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
