import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Medicine} from 'src/model/medicince';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-prescription-parser',
  templateUrl: './prescription-parser.component.html',
  styles: []
})
export class PrescriptionParserComponent implements OnInit {

  form: FormGroup;
  @Output() medicinesEvent = new EventEmitter<Medicine[]>();

  constructor() {
  }

  ngOnInit() {
  }

}
