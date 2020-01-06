import { MatSnackBar } from '@angular/material';
import { DeleteSnackbarComponent } from '../snackbars/delete-snackbar/delete-snackbar.component';
import { NewProjectSnackBarComponent } from '../snackbars/new-project-snack-bar/new-project-snack-bar.component';
import { ErrorSnackbarComponent } from '../snackbars/error-snackbar/error-snackbar.component';
import { TaskUpdatedSnackbarComponent } from '../snackbars/task-updated-snackbar/task-updated-snackbar.component';

export function deleteSnackBar(snackBar: MatSnackBar) {
  snackBar.openFromComponent(DeleteSnackbarComponent, {
    duration: 2000,
  });
}

export function newProjectSnackBar(snackBar: MatSnackBar) {
  snackBar.openFromComponent(NewProjectSnackBarComponent, {
    duration: 2000,
  });
}

export function errorSnackBar(snackBar: MatSnackBar) {
  snackBar.openFromComponent(ErrorSnackbarComponent, {
    duration: 2000
  });
}


export function taskUpdatedSnackBar(snackBar: MatSnackBar) {
  snackBar.openFromComponent(TaskUpdatedSnackbarComponent, {
    duration: 2000
  });
}
