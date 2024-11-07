import { Component } from '@angular/core';
import { HeaderAppComponent } from "../header-app/header-app.component";
import { FooterAppComponent } from "../footer-app/footer-app.component";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [HeaderAppComponent, FooterAppComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
