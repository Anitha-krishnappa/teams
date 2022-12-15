import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from '@angular/material/button';
  import {MatIconModule} from '@angular/material/icon'; 
  import {MatToolbarModule} from '@angular/material/toolbar'; 
  import {MatMenuModule} from '@angular/material/menu'; 
  import {MatInputModule} from '@angular/material/input'; 
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

// MatIconModule, 
// MatMenuModule,
// MatToolbarModule,
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DatePipe } from '@angular/common';

// import { DateTimePickerComponent } from "./date-time-picker/date-time-picker.component";
@NgModule({
  imports: [ 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,  
    OwlDateTimeModule,
    OwlDateTimeModule,
    
    ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
      ],
  providers: [DatePipe]
})

export class MaterialModule {}