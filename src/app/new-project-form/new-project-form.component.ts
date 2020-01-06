import {Component, ViewChild} from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../project.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NewProjectSnackBarComponent } from '../snackbars/new-project-snack-bar/new-project-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { newProjectSnackBar, errorSnackBar } from '../util/snackbar-helper';



@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent {

  project: Project = new Project();
  @ViewChild('form', null) form: FormGroup;

  constructor(private projectService: ProjectService, private router: Router, private snackbar: MatSnackBar) {
  }

  onSubmit() {
    if (this.form.valid) {
      this.projectService.createProject({...this.form.value, tasks: []} as Project).subscribe(
        res => [
          newProjectSnackBar(this.snackbar),
        this.router.navigateByUrl('projects')
        ],
        error => {
          errorSnackBar(this.snackbar);
        }
        );
      }
    }
  }
