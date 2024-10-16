import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Importa RouterModule
import { CursosComponent } from './components/cursos/cursos.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CursosComponent, ListarCursosComponent], // Agrega RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aplicacion-Angular-1';
}
