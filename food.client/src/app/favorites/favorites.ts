
import { Component } from '@angular/core';

@Component({ selector: 'app-favorites', standalone: true, imports: [], templateUrl: './favorites.html', styleUrl: './favorites.css' })
export class FavoritesComponent {
  readonly savedRecipes = ['Creamy Chicken Chikca', 'Avocado Toast'];
}
