import { Component, OnInit } from "@angular/core";
import { PresupuestosService } from "../../servicios/presupuestos.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: "app-presupuestos",
  templateUrl: "./presupuestos.component.html",
  styleUrls: ["./presupuestos.component.css"]
})
export class PresupuestosComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;
  cargando = false;
  resultados = false;
  noresultados = false;
  presupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.obtenerPresupuestos();
  }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges
      .subscribe(term => {
        this.busqueda = term;
        this.cargando = true;
        if ( this.busqueda.length !== 0 ) {
          this.presupuestosService.getPresupuestosSearch(this.busqueda)
            .subscribe(presupuestos => {
              this.presupuestos = [];
              for (const id$ in presupuestos) {
                const p = presupuestos[id$];
                p.id$ = id$;
                this.presupuestos.push(presupuestos[id$]);
              }
              if ( this.presupuestos.length < 1 && this.busqueda.length >= 1 ) {
                this.noresultados = true;
              } else {
                this.noresultados = false;
              }
            });
          this.cargando = false;
          this.resultados = true;
        } else {
          this.presupuestos = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$).subscribe(respuesta => {
      this.presupuestos = [];
      this.obtenerPresupuestos();
      console.log(respuesta);
    });
  }

  obtenerPresupuestos() {
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
      for (const id$ in presupuestos) {
        const p = presupuestos[id$];
        p.id$ = id$;
        this.presupuestos.push(presupuestos[id$]);
      }
      this.cargando = false;
    });
  }
}
