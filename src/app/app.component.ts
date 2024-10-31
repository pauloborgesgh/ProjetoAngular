import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from "./header-app/header-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAngular';
}
