import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-listar-cursos',
  standalone: true,  // Si es standalone
  imports: [CommonModule],  // Asegura que CommonModule está importado
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent {
  cursos: any[] = [
    {
      materia: 'Matemáticas',
      profesor: 'Juan Pérez',
      fechaInicio: '2023-10-01',
      fechaFin: '2023-12-15',
      descripcion: 'Curso de matemáticas básicas',
      mostrarDetalles: false
    },
    {
      materia: 'Historia',
      profesor: 'María López',
      fechaInicio: '2023-11-01',
      fechaFin: '2024-01-20',
      descripcion: 'Curso de historia universal',
      mostrarDetalles: false
    }
  ];

  toggleDetalles(curso: any) {
    curso.mostrarDetalles = !curso.mostrarDetalles;
  }
}
