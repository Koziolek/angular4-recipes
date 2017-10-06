import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test recipe", "Simple test", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg"),
    new Recipe("Test recipe", "Simple test", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg"),
    new Recipe("Test recipe", "Simple test", "https://c1.staticflickr.com/5/4117/4817688003_aa20a73d3d_b.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
