import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addfra',
  templateUrl: './addfra.component.html',
  styleUrls: ['./addfra.component.css']
})
export class AddfraComponent implements OnInit {

  facturaForm: FormGroup;
  factura: any;
  concepto: any;

  constructor() { }

  ngOnInit() {
  }

}
