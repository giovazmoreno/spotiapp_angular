import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SporifyService } from 'src/app/services/sporify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(private router: ActivatedRoute,
    private spotify: SporifyService) {

    this.loading = true;

    this.router.params.subscribe(params => {

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(tops => {
        this.topTracks = tops
      });
  }
}
