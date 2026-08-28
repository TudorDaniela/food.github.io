import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-search', standalone: true, imports: [CommonModule], templateUrl: './search.html', styleUrl: './search.css' })
export class SearchComponent {
  readonly recentSearches = ['Pasta', 'Healthy breakfast', 'Avocado'];
}
