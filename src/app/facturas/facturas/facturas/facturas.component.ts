import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[] = [];

  constructor(private facturasService: FacturasService) {
    this.obtenerFacturas();
  }

  ngOnInit() {}

  obtenerFacturas()
  {
    this.facturasService.getFacturas().subscribe(facturas => {
      for (const id$ in facturas) {
        const f = facturas[id$];
        f.id$ = id$;
        this.facturas.push(facturas[id$]);
      }
    });
  }

  eliminarFacturas(id$)
  {
    this.facturasService.delFactura(id$).subscribe(factura => {
      this.facturas = [];
      this.obtenerFacturas();
      console.log(factura);
    });
  }

}
