import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'] // Corregido styleUrls
})
export class CursosComponent {
  
  materia: string = '';
  profesor: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  descripcion: string = '';

  agregarCurso(event: Event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    
    // Aquí puedes trabajar con las propiedades de la clase
    console.log('Materia:', this.materia);
    console.log('Profesor:', this.profesor);
    console.log('Fecha Inicio:', this.fechaInicio);
    console.log('Fecha Fin:', this.fechaFin);
    console.log('Descripción:', this.descripcion);
  }
}
