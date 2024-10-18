import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApisInicioService } from '../../services/apis-inicio.service';
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, AppComponent, RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'] // Corrige esto, debe ser styleUrls
})
export class InicioComponent {
  img: any = []; // Inicializa img como un array

  constructor(private imgService: ApisInicioService) {}

  async ngOnInit(): Promise<void> {
    // Limpia imágenes al iniciar
    this.imgService.clearImages(); // Llama al método que limpia las imágenes
    await this.imgService.addimg('Renzo', 'Beagle');
    
    // Asignar los datos de las imágenes a la variable
    this.img = this.imgService.getimg();
  }
}
