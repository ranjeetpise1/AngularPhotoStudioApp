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
      description:"Together is a beautiful place to be",
    },
    {
      title:"All Events",
      image:'https://media.istockphoto.com/id/467940720/photo/camera-operator-at-work.jpg?s=2048x2048&w=is&k=20&c=RhLvqDpIv9hTJiFnj_PzW5lDjEe92HFgt2H6amo0SPo=',
      description:"Together is a beautiful place to be",
    },
    {
      title:"Outdoor",
      image:'./img/outdoor.jpg',
      description:"Together is a beautiful place to be",
    },
    {
      title:"Modelling",
      image:'https://cdn.pixabay.com/photo/2022/01/28/15/26/wedding-ceremony-6974920_1280.jpg',
      description:"Together is a beautiful place to be",
    },
    {
      title:"Baby Shower",
      image:'https://cdn.pixabay.com/photo/2022/01/28/15/26/wedding-ceremony-6974920_1280.jpg',
      description:"Together is a beautiful place to be",
    }
  ]
}
