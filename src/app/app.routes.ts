import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Shoots } from './shoots/shoots';
import { Booking } from './booking/booking';
import { Admin } from './admin/admin';
import { Aboutus } from './aboutus/aboutus';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'contact', component:Contact},
    {path:'shoots', component:Shoots},
    {path:'booking', component:Booking},
    {path:'aboutus', component:Aboutus},
    {path:'admin', component:Admin}
];
