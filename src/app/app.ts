import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Shoots } from './shoots/shoots';
import { Contact } from './contact/contact';
import { Booking } from './booking/booking';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer, Shoots, Contact, Booking],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('photostudio');
}
