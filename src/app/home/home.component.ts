import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { BetslipService } from '../service/betslip.service';
import { SelectionService } from '../service/selection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bets: any = [];

  constructor(
    private dataService: DataService,
    private betslipService: BetslipService,
    private selectionService: SelectionService
  ) { }

  ngOnInit(): void {
    this.dataService.getBets()
      .subscribe(data =>
        this.bets = data.filter(evento => evento.markets.length > 0));
  }

  toggleInfo(apuesta: any) {
    apuesta.showInfo = !apuesta.showInfo;
  }

  changeButtonColor(selection: any) {
    selection.clicked = !selection.clicked;
    const buttonId = selection.id;

    const existingIndex = this.selectionService.getSelectedButtons().indexOf(buttonId);
    if (existingIndex > -1) {
      // Si el botón ya está en la lista, elimínalo
      this.betslipService.eliminarApuesta({ data: selection, id: buttonId });
      this.selectionService.removeSelectedButton(buttonId);
    } else {
      // Si no está en la lista, agrégalo
      this.betslipService.agregarApuesta({ data: selection, id: buttonId });
      this.selectionService.addSelectedButton(buttonId);
    }
  }

  getButtonStyle(selection: any) {
    if (this.selectionService.selectedButtons.includes(selection.id)) {
      return { 'background-color': 'green' };
    } else {
      return {};
    }
  }

}
