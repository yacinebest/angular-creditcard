import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../helper/date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardFrom = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
  onResetForm() {
    this.cardFrom.reset();
  }


  public getControlName() { return this.cardFrom.controls.name as FormControl; }
  public getControlCardNumber() { return this.cardFrom.controls.cardNumber as FormControl; }
  public getControlExpiration() { return this.cardFrom.controls.expiration as FormControl; }
  public getControlSecurityCode() { return this.cardFrom.controls.securityCode as FormControl; }
}
