import {MatToolbarModule} from '@angular/material/toolbar';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {
}
