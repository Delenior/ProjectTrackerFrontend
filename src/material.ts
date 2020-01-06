import {MatButtonModule, MatInputModule, MatSlideToggleModule, MatTooltipModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSlideToggleModule, MatTooltipModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSlideToggleModule, MatTooltipModule],
})
export class MaterialModule {
}
