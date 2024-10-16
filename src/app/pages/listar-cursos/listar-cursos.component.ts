import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit {
  cursos: any[] = []; // Array para almacenar los cursos

  constructor() {}

  ngOnInit(): void {
    this.loadCursos(); // Carga los cursos al iniciar el componente
  }

  loadCursos(): void {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]');
    this.cursos = cursosGuardados; // Asigna los cursos guardados al array
  }
}
