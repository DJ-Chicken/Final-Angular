import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  staffs = [
    {
      name: 'Andrey Gantimurov',
      position: 'CTO',
      img: '../../../assets/profile-pictures/p1.png',
      description: '(Chief Technology Officer)',
    },
    {
      name: 'Margarita Stoyanova',
      position: 'CLO',
      img: '../../../assets/profile-pictures/p2.png',
      description: '(Chief Learning Officer)',
    },
    {
      name: 'Alexander Sapozhnikov',
      position: 'CAO',
      img: '../../../assets/profile-pictures/p3.png',
      description: '(Chief Administrator Officer)',
    },
    {
      name: 'Andrey Gantimurov',
      position: 'CTO',
      img: '../../../assets/profile-pictures/p1.png',
      description: '(Chief Technology Officer)',
    },
  ];
}
