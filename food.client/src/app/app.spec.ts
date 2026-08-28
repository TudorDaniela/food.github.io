import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should provide Foodie categories and recipes', () => {
    expect(component.categories).toEqual(['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']);
    expect(component.popularRecipes.length).toBe(3);
    expect(component.saladRecipes.length).toBe(3);
  });
});
