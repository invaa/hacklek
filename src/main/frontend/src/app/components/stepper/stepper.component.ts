import {Component, OnInit} from '@angular/core';
import {UserData} from "../../../model/user-data";
import {Medicine} from "../../../model/medicince";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styles: []
})
export class StepperComponent implements OnInit {

  private userData: UserData;
  private medicines: Medicine[];

  constructor() {
  }

  ngOnInit() {
  }

  public onUserDataEvent(userData: UserData) {
    this.userData = userData;
  }

  public onMedicinesEvent(medicines: Medicine[]) {
    this.medicines = medicines;
  }

}
