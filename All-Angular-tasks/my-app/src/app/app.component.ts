import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'testing-app';  
  servers:string[] = [];  
  
  onAddServer() {  
    this.servers.push('Another Server Added!');  
  }  
  
  onRemoveServer(id: number) {  
    const position = id + 1;  
    this.servers.splice(position, 1);  
  }  
}


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-app';
// }
