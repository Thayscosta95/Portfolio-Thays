import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TecnologiasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
