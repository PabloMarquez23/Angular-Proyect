import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de que esto esté aquí

interface Curso {
  materia: string;
  profesor: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  mostrarDetalles?: boolean; // Para manejar la visibilidad de los detalles
}

@Component({
  selector: 'app-listar-cursos',
  standalone: true,
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss'],
  imports: [CommonModule] // Asegúrate de incluir CommonModule aquí
})
export class ListarCursosComponent {
  cursos: Curso[] = []; // Array para almacenar los cursos

  constructor() {
    this.loadCursos(); // Cargar cursos al inicializar el componente
  }

  loadCursos() {
    const cursosGuardados = localStorage.getItem('cursos');
    this.cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }

  toggleDetalles(curso: Curso) {
    curso.mostrarDetalles = !curso.mostrarDetalles; // Alternar la visibilidad
  }
}
