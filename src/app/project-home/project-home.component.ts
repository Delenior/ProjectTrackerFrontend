import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../project.service';
import { MatSnackBar } from '@angular/material';
import { deleteSnackBar, errorSnackBar } from '../util/snackbar-helper';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  projects: Array<Project> = [];
  searchText: string;

  constructor(private projectService: ProjectService, private snackbar: MatSnackBar) {
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
        errorSnackBar(this.snackbar);
      }
    );
  }

  deleteProject(id: string) {
    this.projectService.delete(id).subscribe(
      response => {
        this.projects = response;
        deleteSnackBar(this.snackbar);
      },
      error => {
        errorSnackBar(this.snackbar);
      }
    );
  }
}
