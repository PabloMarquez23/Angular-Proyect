import { Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarCursosComponent } from './pages/listar-cursos/listar-cursos.component';
import { CursosComponent } from './pages/cursos/cursos.component';




export const routes: Routes = [
  { path: 'pages/inicio', component: InicioComponent }, // Página de inicio
  { path: 'pages/cursos', component: ListarCursosComponent }, // Listar cursos
  { path: 'pages/listar-cursos', component: CursosComponent }, // Agregar cursos
  { path: 'pages/contactos', component: ContactosComponent }, // Página de contactos
];
