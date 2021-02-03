import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe() {
    this.showModal = true;
  }
}
