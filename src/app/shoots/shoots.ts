import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shoots',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './shoots.html',
  styleUrl: './shoots.css'
})
export class Shoots {
  cards=[
    {
      title:'Wedding',
      image:'https://cdn.pixabay.com/photo/2022/01/28/15/26/wedding-ceremony-6974920_1280.jpg',
      description:"Together is a beautiful place to be",
    },
    {
      title:"Pre Wedding",
      image:'https://cdn.pixabay.com/photo/2020/04/08/14/01/couple-5017508_1280.jpg',
      description:"Before Wedding sharing feelings",
    },
    {
      title:"All Events",
      image:'assets/images/event.jpg',
      description:"Events are Fun and Memories",
    },
    {
      title:"Outdoor",
      image:'assets/images/outdoor.jpg',
      description:"Vibing out",
    },
    {
      title:"Modelling",
      image:'assets/images/modelling.jpg',
      description:"Showcasing",
    },
    {
      title:"Baby Shower",
      image:'assets/images/babyshower.jpg',
      description:"Babies are boss",
    }
  ]
}
