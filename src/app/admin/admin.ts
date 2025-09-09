import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  adminForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.adminForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  onSubmit(){
    if(this.adminForm.valid){
      console.log("Admin form submitted");
      alert("Successfully loged admin!!!");
      this.adminForm.reset();
      
    }
  }
}
