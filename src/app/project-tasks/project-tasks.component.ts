import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../project.service';
import {Task} from '../models/task';
import { Project } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { errorSnackBar, taskUpdatedSnackBar } from '../util/snackbar-helper';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  project: Project;
  @ViewChild('form', null) form: FormGroup;
  newTask: boolean;
  task: Task;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.getProject();
    this.newTask = false;

  }

  getProject() {
    this.projectService.getProjectById(this.route.snapshot.params['id']).subscribe(
      response => {
        this.project = response;
        console.log(response);
      },
      error => {
         errorSnackBar(this.snackbar);
      }
    );
 }

  setupNewTask() {
    this.task = new Task();
    this.newTask = !this.newTask;
  }

  onSubmit() {
    if (this.form.valid) {
      this.project.tasks.push(this.task);
      this.updateProject(this.project);
      this.newTask = false;
    }
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(
      response => {
        this.project = response;
        taskUpdatedSnackBar(this.snackbar);
      },
      error => {
        errorSnackBar(this.snackbar);
      }
    );
  }
}
