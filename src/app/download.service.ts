import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  downloadFile(fileUrl: string, fileName: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
