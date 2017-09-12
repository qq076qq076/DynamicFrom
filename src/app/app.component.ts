import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      formarray: this.FormBuilder.array([])
    });
  }

  AddItom() {
    let add, FormArray;
    add = this.FormBuilder.group({ 'data': ['點此編輯'] });
    FormArray = this.form.get('formarray') as FormArray;
    FormArray.push(add);
    console.log(FormArray);
  }
}
