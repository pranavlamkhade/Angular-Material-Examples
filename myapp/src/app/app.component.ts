import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material Example';
  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Blog: string = '';
  Email: string = '';
  IsAccepted: number = 0;

  constructor(private fb: FormBuilder) {

    this.regiForm = fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'PlayList': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null],

    });
    }

    onChange(event: any) {
      if (event.checked == true) {
        this.IsAccepted = 1;
      } else {
        this.IsAccepted = 0;
      }
    }

    onFormSubmit(form: NgForm) {
      console.log(form);
    }


  }
