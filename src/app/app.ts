import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productscomponent } from '../components/products/products';
import { Navbarcomponent } from '../components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Productscomponent,Navbarcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components');
}
