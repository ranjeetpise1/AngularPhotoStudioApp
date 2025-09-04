import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-header',
  standalone:true,
  imports: [MatToolbarModule,MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})


export class Header {
  
}
