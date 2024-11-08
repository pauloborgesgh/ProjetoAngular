import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Resource {
  title: string;
  description: string;
  type: 'download' | 'link';
  url: string;
  icon: string;
  category: string;
}


@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css'
})
export class DownloadsComponent {
  
  resources: Resource[] = [
    {
      title: 'VS Code Setup Guide',
      description: 'Complete guide for setting up Visual Studio Code for web development',
      type: 'download',
      url: '/assets/downloads/vscode-setup-guide.pdf',
      icon: '📄',
      category: 'Development Guides'
    },
    {
      title: 'Git Cheat Sheet',
      description: 'Essential Git commands and workflows',
      type: 'download',
      url: '/assets/downloads/git-cheatsheet.pdf',
      icon: '📑',
      category: 'Development Guides'
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive web development documentation',
      type: 'link',
      url: 'https://developer.mozilla.org',
      icon: '🌐',
      category: 'Learning Resources'
    },
    {
      title: 'Stack Overflow',
      description: 'Q&A community for programmers',
      type: 'link',
      url: 'https://stackoverflow.com',
      icon: '💡',
      category: 'Learning Resources'
    },
    {
      title: 'GitHub',
      description: 'Code hosting and collaboration platform',
      type: 'link',
      url: 'https://github.com',
      icon: '🐙',
      category: 'Development Tools'
    },
    {
      title: 'CodePen',
      description: 'Online code editor for front-end development',
      type: 'link',
      url: 'https://codepen.io',
      icon: '✏️',
      category: 'Development Tools'
    },
    {
      title: 'Web Development Roadmap',
      description: 'Step-by-step guide to becoming a web developer',
      type: 'download',
      url: '/assets/downloads/web-dev-roadmap.pdf',
      icon: '🗺️',
      category: 'Career Resources'
    },
    {
      title: 'Tech Interview Handbook',
      description: 'Preparation guide for technical interviews',
      type: 'download',
      url: '/assets/downloads/tech-interview-handbook.pdf',
      icon: '📚',
      category: 'Career Resources'
    }
  ];

  get categories(): string[] {
    return [...new Set(this.resources.map(r => r.category))];
  }

  getResourcesByCategory(category: string): Resource[] {
    return this.resources.filter(r => r.category === category);
  }
  
  

}
