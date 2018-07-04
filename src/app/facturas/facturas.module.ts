import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddfraComponent } from './facturas/addfra/addfra.component';
import { EditfraComponent } from './facturas/editfra/editfra.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { GuardService } from '../servicios/guard.service';

const routes = [
  { path: 'addfra', component: AddfraComponent, canActivate: [GuardService] },
  { path: 'editfra', component: EditfraComponent, canActivate: [GuardService] },
  { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AddfraComponent, EditfraComponent, FacturasComponent],
  providers: [GuardService],
})
export class FacturasModule { }
