import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos', 'delicious mexican food', 'https://en.wikipedia.org/wiki/Taco#/media/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
