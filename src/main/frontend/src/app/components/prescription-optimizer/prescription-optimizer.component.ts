import {Component, Input, OnInit} from '@angular/core';
import {UserData} from "../../../model/user-data";
import {Medicine} from "../../../model/medicince";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-prescription-optimizer',
  templateUrl: './prescription-optimizer.component.html',
  styles: []
})
export class PrescriptionOptimizerComponent implements OnInit {

  @Input() userData: UserData;
  _medicines: Medicine[];

  currentMedicines: Medicine[] = [];
  analogMedicines: Medicine[] = [];
  currentPrice: number;
  analogPrice: number;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  private populateMedicine(medId: number) {
    this.apiService.getAnalogs(medId, this.userData)
      .subscribe(medicine => {
        this.currentMedicines = [...this.currentMedicines, medicine];
        this.analogMedicines = [...this.analogMedicines, medicine.analogs.length != 0 ? medicine.analogs[0] : medicine];
        this.currentPrice = this.calculatePrice(this.currentMedicines);
        this.analogPrice = this.calculatePrice(this.analogMedicines);
      })
  }

  public calculatePrice(medicines: Medicine[]): number {
    return medicines
      .map(m => m.price)
      .reduce((sum, current) => {
        return sum + current;
      }, 0);
  }

  public swap() {
    const tempMed: Medicine[] = this.currentMedicines;
    this.currentMedicines = this.analogMedicines;
    this.analogMedicines = tempMed;
    const tempPrice: number = this.currentPrice;
    this.currentPrice = this.analogPrice;
    this.analogPrice = tempPrice;
  }

  @Input()
  set medicines(medicines: Medicine[]) {
    this._medicines = medicines;
    if (medicines) {
      medicines.forEach(med => this.populateMedicine(med.id));
    }
  }

}
