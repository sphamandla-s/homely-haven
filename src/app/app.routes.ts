import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OverviewComponent } from './components/home/overview/overview.component';
import { OrdersComponent } from './components/home/orders/orders.component';
import { RentComponent } from './components/home/rent/rent.component';
import { CollectionsComponent } from './components/home/collections/collections.component';
import { AccessComponent } from './components/home/access/access.component';

export const routes: Routes = [
    {path : "", component : LandingPageComponent},
    {path : "home", component : HomePageComponent, children : [
        {path : 'overview', component : OverviewComponent},
        {path : 'orders', component : OrdersComponent},
        {path : 'rent', component : RentComponent},
        {path : 'collections', component : CollectionsComponent},
        {path : 'access', component : AccessComponent},
    ]}

];
