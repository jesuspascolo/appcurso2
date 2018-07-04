import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  presURL = 'https://comprasapp-b26a3.firebaseio.com/facturas.json';
  preURL = 'https://comprasapp-b26a3.firebaseio.com/facturas';

  constructor(private http: Http) { }

  postFacturas(factura: any)
  {
    const newpres ) JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres, {headers})
      .pipe(map(respuesta => {
        console.log(respuesta.json());
        return respuesta.json();
      }));
  }

  getFacturas()
  {
    return this.http.get(this.preURL)
      .pipe(map(respuesta => respuesta.json()));
  }

  getFactura(id$: string)
  {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(map(respuesta => respuesta.json()));
  }

  putFactura(factura: any, id$: string) {
    const newpre = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newpre, {headers})
      .pipe(map(respuesta => {
        console.log(respuesta.json());
        return respuesta.json();
      }));
  }

  delFactura(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
      .pipe(map(respuesta => respuesta.json()));
  }

}
