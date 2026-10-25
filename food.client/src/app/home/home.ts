
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Recipe {
  name: string;
  image: string;
  time: string;
  rating: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];

  readonly popularRecipes: Recipe[] = [
    { name: 'Creamy Chicken Chikca', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=85', time: '25 min', rating: '4.6' },
    { name: 'Avocado Toast', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=85', time: '15 min', rating: '4.5' },
    { name: 'Thai Veggie Bowl', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=85', time: '30 min', rating: '4.7' }
  ];

  readonly saladRecipes: Recipe[] = [
    { name: 'Rainbow Garden Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=85', time: '20 min', rating: '4.8' },
    { name: 'Fresh Greek Salad', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=85', time: '15 min', rating: '4.7' },
    { name: 'Roasted Veggie Salad', image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=500&q=85', time: '35 min', rating: '4.6' }
  ];
}
