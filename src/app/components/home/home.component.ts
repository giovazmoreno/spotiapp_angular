import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SporifyService } from 'src/app/services/sporify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  /* paises: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any) => {
        this.paises = data;
      }); 
  }*/
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private sporify: SporifyService) {
    this.loading = true;
    this.error = false;

    this.sporify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorResponse) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorResponse.error.error.message;
      });

  }
  ngOnInit(): void {
  }

}
