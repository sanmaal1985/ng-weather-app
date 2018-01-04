import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [MatCardModule, MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule],
    exports: [MatCardModule, MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule],
    declarations: []
})
export class MaterialModule { }
