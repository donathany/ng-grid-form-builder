import { Component, OnInit } from '@angular/core';
import * as data from '../forms/client-example.json'; //IMPORT FORM HERE
import { FormService } from '../form-service.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-reader',
  templateUrl: './form-reader.component.html',
  styleUrls: ['./form-reader.component.css']
})

export class FormReaderComponent implements OnInit {

  // form: any = (data as any).default;
  // columns= 3;


  constructor(public formService: FormService) { }

  ngOnInit(): void {
    // console.log(data);
  }

  // submit(form: NgForm) {
  //   console.log(form.value);
  // }

}
