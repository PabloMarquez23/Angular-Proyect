import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'] ,// Corregido styleUrls
  imports:[CommonModule,FormsModule],
})
export class CursosComponent {
  materia: string = '';
  profesor: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';
  cursos: any[] = [];

  constructor() {
    // Cargar los cursos almacenados en localStorage cuando se inicia el componente
    const cursosGuardados = localStorage.getItem('cursos');
    this.cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }

  // Método para agregar un nuevo curso
  agregarCurso(event: Event): void {
    event.preventDefault();

    // Validar que los nombres no contengan números
    if (/\d/.test(this.materia) || /\d/.test(this.profesor)) {
      alert('El nombre del curso y el nombre del instructor no pueden contener números.');
      return;
    }

    // Crear un nuevo objeto curso
    const nuevoCurso = {
      materia: this.materia,
      profesor: this.profesor,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      descripcion: this.descripcion
    };

    // Agregar el nuevo curso al array y guardarlo en localStorage
    this.cursos.push(nuevoCurso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));

    // Limpiar el formulario
    this.limpiarFormulario();
  }

  // Método para limpiar el formulario
  limpiarFormulario(): void {
    this.materia = '';
    this.profesor = '';
    this.fechaInicio = '';
    this.fechaFin = '';
    this.descripcion = '';
  }
}
