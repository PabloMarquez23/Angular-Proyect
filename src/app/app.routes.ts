import { Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component'; // Importa desde "pages"
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cursos', component: ListarCursosComponent },
  { path: 'agregar-cursos', component: CursosComponent },
  { path: 'contactos', component: ContactosComponent },
];
