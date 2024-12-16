import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductlistComponent } from "./components/productlist/productlist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductlistComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shoppingAppAPI';
}