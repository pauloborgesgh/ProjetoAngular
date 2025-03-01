import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arquivos-script',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arquivos-script.component.html',
  styleUrl: './arquivos-script.component.css'
})
export class ArquivosScriptComponent {
  snippets = [
    {
      title: 'Angular Component Example',
      language: 'TypeScript',
      code: `@Component({
  selector: 'app-example',
  template: '<h1>Hello {{ name }}</h1>'
})
export class ExampleComponent {
  name = 'World';
}`,
      isOpen: false,
      copied: false
    },
    {
      title: 'React Hook Example',
      language: 'JavaScript',
      code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
      isOpen: false,
      copied: false
    },
    {
      title: 'Python Function',
      language: 'Python',
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`,
      isOpen: false,
      copied: false
    }
  ];
  snippets1 = [
    {
      title: 'Angular Component Example',
      language: 'TypeScript',
      code: `@Component({
  selector: 'app-example',
  template: '<h1>Hello {{ name }}</h1>'
})
export class ExampleComponent {
  name = 'World';
}`,
      isOpen: false,
      copied: false
    },
    {
      title: 'React Hook Example',
      language: 'JavaScript',
      code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
      isOpen: false,
      copied: false
    },
    {
      title: 'Python Function',
      language: 'Python',
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`,
      isOpen: false,
      copied: false
    }
  ];

  toggleAccordion(index: number) {
    this.snippets[index].isOpen = !this.snippets[index].isOpen;
  }

  async copyCode(code: string, event: Event) {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      const snippet = this.snippets.find(s => s.code === code);
      if (snippet) {
        snippet.copied = true;
        setTimeout(() => {
          snippet.copied = false;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
    }

    
  }

  // coluna2
  toggleAccordion2(index: number) {
    this.snippets1[index].isOpen = !this.snippets1[index].isOpen;
  }

  async copyCode2(code: string, event: Event) {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      const snippets1 = this.snippets1.find(s => s.code === code);
      if (snippets1) {
        snippets1.copied = true;
        setTimeout(() => {
          snippets1.copied = false;
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  
  }


}
