import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddfraComponent } from './facturas/addfra/addfra.component';
import { EditfraComponent } from './editfra/editfra.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [AddfraComponent, EditfraComponent, FacturasComponent],
  providers: [],
})
export class FacturasModule { }
