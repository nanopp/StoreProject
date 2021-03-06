import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ShoppingListService]
})
export class AppComponent {
    loadedFeature = 'recipe';

    onNavigate(feature:string) {
        this.loadedFeature = feature;
    }

}
