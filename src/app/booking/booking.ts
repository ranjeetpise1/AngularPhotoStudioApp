import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

interface Occasion{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-booking',
  imports: [CommonModule, MatFormFieldModule,ReactiveFormsModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatCardModule, MatNativeDateModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
  providers:[provideNativeDateAdapter()],
  // changeDetection:ChangeDetectionStrategy.OnPush(),  
})
export class Booking {
  bookingForm:FormGroup;
  minDate: Date = new Date();

  occasions:Occasion[]=[
      {value:'wedding-1', viewValue:"wedding"},
      {value:'preWedding-2', viewValue:'Pre-Wedding'},
      {value:'indoor-3', viewValue:'Indoor'},
      {value:'outdoor-4', viewValue:'Outdoor'},
      {value:'modelling-5', viewValue:'Modelling'},
      {value:'babyShower-6', viewValue:'Baby Shower'},

    ];

  constructor(private fb : FormBuilder){

    

    this.bookingForm=this.fb.group(
      {
        name:['', Validators.required],
        contact:['', Validators.required],
        email:['', Validators.required],
        date:['', Validators.required],
        message:['', Validators.required],
      }
    )
  }
  onSubmit(){
    if(this.bookingForm.valid){
      console.log("Form Submitted");
      alert("Thanks For Booking. We'll touch with you...!");
      this.bookingForm.reset();
      
    }
  }
}
