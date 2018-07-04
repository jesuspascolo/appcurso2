import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacturasModule } from './facturas/facturas.module';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { GuardService } from './servicios/guard.service';
import { FacturasService } from './facturas/facturas.service';

import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { AddfraComponent } from './facturas/facturas/addfra/addfra.component';
import { EditfraComponent } from './facturas/facturas/editfra/editfra.component';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';

//La ruta default '**' siempre al final
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inises', component: InisesComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService] },
  { path: 'addpres', component: AddpresComponent, canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService] },
  { path: 'addfra', component: AddfraComponent, canActivate: [GuardService] },
  { path: 'editfra', component: EditfraComponent, canActivate: [GuardService] },
  { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    AddfraComponent,
    EditfraComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),//Estableciendo un array de rutas que empleará nuestra página
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService,
    GuardService,
    FacturasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
