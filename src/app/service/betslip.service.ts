import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetslipService {
  private apuestasSeleccionadas = new BehaviorSubject<{ data: any, id: string, }[]>([]);

  agregarApuesta(apuesta: { data: any, id: string }) {
    const apuestas = this.apuestasSeleccionadas.value;
    apuestas.push({ ...apuesta });
    this.apuestasSeleccionadas.next(apuestas);
    console.log(apuestas);
  }

  eliminarApuesta(apuesta: { data: any, id: string }) {
    const apuestas = this.apuestasSeleccionadas.value;
    const existingIndex = apuestas.findIndex(item => item.id === apuesta.id);
    apuestas.splice(existingIndex, 1);
    this.apuestasSeleccionadas.next(apuestas);
    console.log(apuestas);
  }

  obtenerApuestas() {
    return this.apuestasSeleccionadas.asObservable();
  }

  constructor() { }
}
