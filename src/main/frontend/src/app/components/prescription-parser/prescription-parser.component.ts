import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Medicine} from 'src/model/medicince';
import {FormControl} from '@angular/forms';
import {ApiService} from "../../service/api.service";

import {flatMap, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-prescription-parser',
  templateUrl: './prescription-parser.component.html',
  styles: []
})
export class PrescriptionParserComponent implements OnInit {

  minLength = 3;
  userInput: FormControl = new FormControl('');
  medicinesOptions: Observable<Medicine[]>;
  selectedMedicines: Medicine[] = [];
  @Output() medicinesEvent = new EventEmitter<Medicine[]>();

  constructor(private apiService: ApiService) {
    this.medicinesOptions = this.userInput.valueChanges
      .pipe(startWith(null), flatMap(name => this.filterOptions(name)));
  }

  ngOnInit() {
  }


  public filterOptions(input: string) {
    if (input && input.length >= this.minLength) {
      return this.apiService.lookupMedicines(this.userInput.value);
    } else {
      return [];
    }
  }

  public next() {
    this.medicinesEvent.emit(this.selectedMedicines);
  }

}
