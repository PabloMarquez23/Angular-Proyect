import { Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { ListadoComponent } from './pages/listado/listado.component';
import { CursosComponent } from './pages/cursos/cursos.component';




export const routes: Routes = [
  { path: 'pages/inicio', component: InicioComponent }, // Página de inicio
  { path: 'pages/cursos', component: CursosComponent }, // Listar cursos
  { path: 'pages/listado', component: ListadoComponent }, // Agregar cursos
  { path: 'pages/contactos', component: ContactosComponent }, // Página de contactos
];
