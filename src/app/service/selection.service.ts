import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selectedButtons: string[] = [];

  constructor() { }

  addSelectedButton(id: string) {
    if (!this.selectedButtons.includes(id)) {
      this.selectedButtons.push(id);
    }
    console.log(this.selectedButtons)
  }

  removeSelectedButton(id: string) {
    const index = this.selectedButtons.indexOf(id);
    if (index !== -1) {
      this.selectedButtons.splice(index, 1);
    }
    console.log(this.selectedButtons)
  }

  getSelectedButtons() {
    return this.selectedButtons;
  }
}
