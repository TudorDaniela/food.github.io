
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-add', standalone: true, imports: [], templateUrl: './add.html', changeDetection: ChangeDetectionStrategy.Eager,
 styleUrl: './add.css' })
export class AddComponent {
  submitted = false;

  saveRecipe(): void {
    this.submitted = true;
  }
}
