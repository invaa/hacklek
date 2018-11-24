import {Component, Input, OnInit} from '@angular/core';
import {UserData} from "../../../model/user-data";
import {Medicine} from "../../../model/medicince";

@Component({
  selector: 'app-prescription-optimizer',
  templateUrl: './prescription-optimizer.component.html',
  styles: []
})
export class PrescriptionOptimizerComponent implements OnInit {

  @Input() _userData: UserData;
  @Input() _medicines: Medicine[];

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set userData(userData: UserData) {
    if (userData) {
      console.log(JSON.stringify(userData));
    }
    this._userData = userData;
  }

  @Input()
  set medicines(medicines: Medicine[]) {
    if (medicines) {
      console.log(JSON.stringify(medicines));
    }
    this._medicines = medicines;
  }

}
