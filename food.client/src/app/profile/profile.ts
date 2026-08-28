import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-profile', standalone: true, imports: [CommonModule], templateUrl: './profile.html', styleUrl: './profile.css' })
export class ProfileComponent {
  readonly settings = ['Edit profile', 'Dietary preferences', 'Notifications', 'Help center'];
}
