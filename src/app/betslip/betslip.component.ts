import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetslipService } from '../service/betslip.service';
import { SelectionService } from '../service/selection.service';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent implements OnInit {

  apuestas: { data: any, id: string }[] = [];
  constructor(
    private router: Router,
    private betslipService: BetslipService,
    private selectionService: SelectionService
  ) { }


  ngOnInit(): void {
    this.betslipService.obtenerApuestas().subscribe(apuestas => {
      this.apuestas = apuestas;
    });
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

  eliminarApuesta(id: string) {
    const apuestaAEliminar = this.apuestas.find(apuesta => apuesta.id === id);
    if (apuestaAEliminar) {
      this.betslipService.eliminarApuesta(apuestaAEliminar);
      this.selectionService.removeSelectedButton(id)
    }
  }
}
