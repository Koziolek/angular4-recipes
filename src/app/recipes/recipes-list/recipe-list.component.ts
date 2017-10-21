import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test recipe", "Simple test", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg"),
    new Recipe("Test recipe 2", "Simple test 3", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg"),
    new Recipe("Test recipe 4", "Simple test 5", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
