import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAppComponent } from "./header-app/header-app.component";
import { FooterAppComponent } from "./footer-app/footer-app.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderAppComponent, FooterAppComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAngular';
  fileUrl: any;
}
