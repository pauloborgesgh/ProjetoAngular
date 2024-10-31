import { Component } from '@angular/core';
import { FooterAppComponent } from "../footer-app/footer-app.component";

@Component({
  selector: 'app-header-app',
  standalone: true,
  imports: [FooterAppComponent],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.css'
})
export class HeaderAppComponent {

}
