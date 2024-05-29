import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faDashboard, faFileContract, faParking, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { TenetsComponent } from './tenets/tenets.component';
import { ReportsComponent } from './reports/reports.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { ServicesComponent } from './services/services.component';
import { SubcontractsComponent } from './subcontracts/subcontracts.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, DashboardComponent,
    BuildingsComponent, TenetsComponent, ReportsComponent,
    ParkingsComponent, ServicesComponent, SubcontractsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  dashboardIcons = [
    { id: 0, title: "Dashboard", icon: faDashboard },
    { id: 1, title: "Buildings", icon: faBuilding },
    { id: 2, title: "Tenets", icon: faPeopleGroup },
    { id: 3, title: "Reports", icon: faPeopleGroup },
    { id: 4, title: "Parkings", icon: faParking },
    { id: 5, title: "Services", icon: faPeopleGroup },
    { id: 6, title: "Subcontracts", icon: faFileContract },
  ]

  currentActive = 0;
  isDrawerOpen: boolean = false;


  setCurrentActive(index: number) {
    this.currentActive = index;
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
}

}
