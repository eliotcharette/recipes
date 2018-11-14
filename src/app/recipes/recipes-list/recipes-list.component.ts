import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos', 'delicious mexican food', 'http://media.paleomg.com/2018/01/EN0A4293.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
