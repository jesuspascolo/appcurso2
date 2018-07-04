import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Headers, Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  presURL = 'https://comprasapp-39a90.firebaseio.com/proveedores.json';
  preURL = 'https://comprasapp-39a90.firebaseio.com/proveedores';

  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres, {headers})
      .pipe(map( res => {
        console.log(res.json());
        return res.json();
      }));
  }

  getProveedores() {
    return this.http.get( this.presURL )
      .pipe(map(
        res => res.json()
      ));
  }

  getProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(map( res => res.json()));
  }

  putProveedor(proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new Headers ({
      'Content-Type' : 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;
    return this.http.put( url, newpre, {headers})
      .pipe(map ( res => {
        console.log(res.json());
        return res.json();
      }));
  }

  delProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
      .pipe(map( res => res.json()));
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${this.presURL}?orderBy="nombre"&startAt="${busqueda}"endAt="${busqueda}\uf8ff"`;
    return this.http.get(url)
      .pipe(map (res => res.json()));
  }

}
