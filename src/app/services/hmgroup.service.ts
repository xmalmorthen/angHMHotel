import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HmgroupService {
  fbUri = 'https://hmgroup-8ddb3.firebaseio.com/';
  data = {};
  loaded = false;

  constructor( private http: HttpClient
  ) { 
    this.cargarDatos();
  }

  private cargarDatos(){    
    this.http.get(this.fbUri + "Hoteles.json")
        .subscribe( (resp: any[]) =>{
          this.data = resp;
          this.loaded = true;
        });
  }
}
