import { Component, Input, Output } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { ProjectService } from '../project.service';
import { ProjectTasksComponent } from '../project-tasks/project-tasks.component';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent extends ProjectTasksComponent {


  @Input() project: Project;

  @Output() projectChange: EventEmitter<Project> = new EventEmitter();

  constructor(projectService: ProjectService, route: ActivatedRoute, snackbar: MatSnackBar) {
    super(projectService, route, snackbar);
   }


   deleteTask(task: Task) {
    this.project.tasks.splice(this.project.tasks.indexOf(task), 1);
    this.projectChange.emit(this.project);
  }
}
