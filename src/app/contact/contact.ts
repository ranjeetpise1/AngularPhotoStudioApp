import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      contact:['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required]

    });
  }

  
  onSubmit(){
  
    if(this.contactForm.valid){
      console.log('Form Submitted', this.contactForm.value);
      alert("message Send Successfully");
      this.contactForm.reset();
    }

  }
}
