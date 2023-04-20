import { Component, ViewEncapsulation } from '@angular/core';
type Tab = 'Place1' | 'Place2';

@Component({
  selector: 'app-landing-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 15000);
    this.setCenter();
  }

  moscow!: string;
  moscowTimeZone = 'Europe/Moscow';
  moscowTime!: Date;

  updateTime() {
    const nDate = new Date();
    this.moscow = new Intl.DateTimeFormat('en-US', {
      timeZone: this.moscowTimeZone,
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(nDate);
  }

  activeTab: Tab = 'Place1';
  center!: google.maps.LatLngLiteral;

  locations: Record<Tab, google.maps.LatLngLiteral> = {
    Place1: { lat: 40.73058, lng: -73.935254 },
    Place2: { lat: 40.712781, lng: -74.005969 },
  };

  setActiveTab(tab: Tab): void {
    this.activeTab = tab;
    this.setCenter();
  }

  setCenter(): void {
    this.center = this.locations[this.activeTab];
  }
}
