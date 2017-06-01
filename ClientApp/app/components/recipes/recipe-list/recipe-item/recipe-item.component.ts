﻿
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model'

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Output() onRecipeSelected = new EventEmitter<void>();

    onSelected() {
        this.onRecipeSelected.emit();
    }
}
