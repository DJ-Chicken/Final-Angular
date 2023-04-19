import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 15000);
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
}
