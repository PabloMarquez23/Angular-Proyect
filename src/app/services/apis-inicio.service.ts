import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisInicioService {
  img: any[] = []; // Asegúrate de que sea un array

  constructor(private http: HttpClient) { }

  async addimg(nombre: string, raza: string) {
    let data = await this.getimg2();
    this.img.push({
      nombre: nombre,
      raza: raza,
      foto: data // Agregar directamente la URL
    });
  }

  async getimg2(): Promise<any> {
    return firstValueFrom(this.http.get('https://loremflickr.com/200/300/computing?random', { responseType: 'blob' }))
      .then(blob => URL.createObjectURL(blob)); // Convertir el blob en una URL
  }

  getimg() {
    return this.img;
  }

  clearImages() {
    this.img = []; // Limpia la lista de imágenes
  }
}
