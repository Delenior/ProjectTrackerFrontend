import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../project.service';
import {Task} from '../models/task';
import { Project } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

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

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getProject();
    this.newTask = false;
  }

  getProject() {
    const projectId = this.route.snapshot.params['id'];
     this.projectService.getProjectById(projectId).subscribe(
       response => {
         this.project = response;
       },
       error => {
          // TODO: Error msg
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
        // Success msg
      },
      error => {
        // Error msg
      }
    );
  }
}
