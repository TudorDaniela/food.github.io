
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-profile', standalone: true, imports: [], templateUrl: './profile.html', changeDetection: ChangeDetectionStrategy.Eager,
 styleUrl: './profile.css' })
export class ProfileComponent {
  readonly settings = ['Edit profile', 'Dietary preferences', 'Notifications', 'Help center'];
}
