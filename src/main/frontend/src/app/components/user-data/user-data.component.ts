import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserData} from "../../../model/user-data";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  form: FormGroup;
  @Output() userDataEvent = new EventEmitter<UserData>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      age: ['', Validators.required],
      sex: 'M',
      alcohol: false,
      pregnancy: false
    })
  }

  ngOnInit() {
  }

  public next() {
    if (this.form.valid) {
      const userData: UserData = this.form.value;
      this.userDataEvent.emit(userData);
    }
  }

}
