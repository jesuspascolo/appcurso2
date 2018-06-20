import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-b26a3.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-b26a3.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, {headers})
      .pipe(map(respuestaServidor => {
        console.log(respuestaServidor.json());
        return respuestaServidor.json();
      }))
  }

  getPresupuestos() {
    return this.http.get(this.presURL)
      .pipe(map(respuestaServidor => respuestaServidor.json()));
  }

  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(map(respuesta => respuesta.json()));
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
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

  delPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
      .pipe(map(respuesta => respuesta.json()));
  }

}
