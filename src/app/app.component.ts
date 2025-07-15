import { HomeComponent } from './componentes/home/home.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TecnologiasComponent, HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
