import { Component, Input } from '@angular/core';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent {
  @Input()
  fileUrl!: string;
  @Input()
  fileName!: string;

  constructor(private downloadService: DownloadService) { }

  download(): void {
    this.downloadService.downloadFile(this.fileUrl, this.fileName);
  }
}