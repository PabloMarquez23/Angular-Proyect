import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApisInicioService } from '../../services/apis-inicio.service';
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, AppComponent,RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  img:any
  constructor(private imgService: ApisInicioService){


  }
  async ngOnInit(): Promise<void> {
    // Esperar a que se carguen las imágenes
    await this.imgService.addimg('Renzo', 'Beagle');
    await this.imgService.addimg('Rambo', 'Koeker');
    
    // Asignar los datos de las imágenes a la variable
    this.img = this.imgService.getimg();
  }

}
