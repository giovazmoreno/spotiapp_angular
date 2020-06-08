import { Component, OnInit } from '@angular/core';
import { SporifyService } from 'src/app/services/sporify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private sporify: SporifyService) { }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.sporify.getArtistas(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      })
  }

}
