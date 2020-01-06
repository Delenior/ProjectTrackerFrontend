import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {
}
