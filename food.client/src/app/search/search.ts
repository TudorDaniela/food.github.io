
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'app-search', standalone: true, imports: [], templateUrl: './search.html', changeDetection: ChangeDetectionStrategy.Eager,
 styleUrl: './search.css' })
export class SearchComponent {
  readonly recentSearches = ['Pasta', 'Healthy breakfast', 'Avocado'];
}
