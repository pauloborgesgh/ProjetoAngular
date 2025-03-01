import { Component } from '@angular/core';
import { FooterAppComponent } from "../footer-app/footer-app.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-app',
  standalone: true,
  imports: [FooterAppComponent,RouterLink],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.css'
})
export class HeaderAppComponent {

}
