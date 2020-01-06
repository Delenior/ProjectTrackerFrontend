import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  projects: Array<Project> = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe(
      response => {
        this.projects = response;
      },
      error => {
        // TODO: Error message
      }
    );
  }

  deleteProject(id: string) {
    this.projectService.delete(id).subscribe(
      response => {
        this.projects = response;
        // TODO: Success message
      },
      error => {
        // TODO: Error message
      }
    );
  }
}
