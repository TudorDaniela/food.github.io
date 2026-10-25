
import { Component } from '@angular/core';

@Component({ selector: 'app-add', standalone: true, imports: [], templateUrl: './add.html', styleUrl: './add.css' })
export class AddComponent {
  submitted = false;

  saveRecipe(): void {
    this.submitted = true;
  }
}
