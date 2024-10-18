import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisInicioService {
  img:any =[]
  constructor(private http: HttpClient) { 
  }

  async addimg(nombre: string, raza: string) {
    let data = await this.getimg2();
    this.img.push({
      nombre: nombre,
      raza: raza,
      foto: data // Agregar directamente la URL
    });
  }

  // Llamada a la API de Picsum Photos para obtener una imagen aleatoria
  async getimg2(): Promise<any> {
    return firstValueFrom(this.http.get('https://picsum.photos/200', { responseType: 'blob' }))
      .then(blob => URL.createObjectURL(blob)); // Convertir el blob en una URL
  }

  getimg() {
    return this.img;
  }

  getFotoimg() {
    this.http.get('https://picsum.photos/200', { responseType: 'blob' }).subscribe(data => {
      const urlObject = URL.createObjectURL(data);
      console.log(urlObject);
    });
  }
  }






