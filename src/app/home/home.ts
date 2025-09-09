import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  imagePath:string;

  constructor(){
    this.imagePath='/assets/images/camera.JPG';
  }

  ngOnInit(){}
}
