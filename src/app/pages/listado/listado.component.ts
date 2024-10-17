import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {

  materia: string = '';
  profesor: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';
  cursos: any[] = [];
  cursoSeleccionadoId: number | null = null;

  constructor() {
    // Cargar los cursos almacenados en localStorage cuando se inicia el componente
    const cursosGuardados = localStorage.getItem('cursos');
    this.cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }



  getCursos() {
    return this.cursos;
  }

  verDetalles(index: number) {
    // Almacenar el índice del curso seleccionado
    this.cursoSeleccionadoId = index === this.cursoSeleccionadoId ? null : index; 
  }

  eliminarCurso(curso: any) {
    const index = this.cursos.indexOf(curso);
    if (index > -1) {
      this.cursos.splice(index, 1);
      localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }
  }
}
