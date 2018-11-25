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
  imageSrc: string = '';
  userInput: FormControl = new FormControl('');
  medicinesOptions: Observable<Medicine[]>;
  selectedMedicines: Medicine[] = [];
  @Output() medicinesEvent = new EventEmitter<Medicine[]>();

  constructor(private apiService: ApiService) {
    this.medicinesOptions = this.userInput.valueChanges
      .pipe(startWith(null), flatMap(name => this.lookupMedicineOptions(name)));
  }

  ngOnInit() {
  }

  public handleFileInput(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  private _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.apiService.uploadPrescription(this.imageSrc)
      .subscribe(medicines => this.selectedMedicines = this.selectedMedicines.concat(medicines));
  }

  public lookupMedicineOptions(input: string) {
    if (input && input.length >= this.minLength) {
      return this.apiService.lookupMedicines(this.userInput.value);
    } else {
      return [];
    }
  }

  public next() {
    this.medicinesEvent.emit(this.selectedMedicines);
  }

  public onMedicineSelect(medicine: Medicine) {
    this.selectedMedicines = [...this.selectedMedicines, medicine];
    this.userInput.setValue('');
  }

}
