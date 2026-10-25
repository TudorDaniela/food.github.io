
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-favorites', standalone: true, imports: [], templateUrl: './favorites.html', changeDetection: ChangeDetectionStrategy.Eager,
 styleUrl: './favorites.css' })
export class FavoritesComponent {
  readonly savedRecipes = ['Creamy Chicken Chikca', 'Avocado Toast'];
}
