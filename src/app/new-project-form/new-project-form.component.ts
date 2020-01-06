import {Component, ViewChild} from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../project.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent {

  project: Project = new Project();
  @ViewChild('form', null) form: FormGroup;

  constructor(private projectService: ProjectService, private router: Router) {
  }

  onSubmit() {
    if (this.form.valid) {
      this.projectService.createProject({...this.form.value, tasks: []} as Project).subscribe(
        res => [
          // TODO: Success msg
          this.router.navigateByUrl('projects')
        ],
        error => {
          // TODO: Error msg
        }
        );
      }
    }
  }
