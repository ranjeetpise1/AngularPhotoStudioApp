import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Shoots } from './shoots/shoots';
import { Booking } from './booking/booking';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'contact', component:Contact},
    {path:'shoots', component:Shoots},
    {path:'booking', component:Booking}
    
];
