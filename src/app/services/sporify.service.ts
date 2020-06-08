import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SporifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB04eRta1ynUTFm4q_Ffbisxm7L9MK7BieaB9K59X6fEgxuhLw3BxZInv3U-SxTmsV0LbXSDlpR0H5C5zY'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));
    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDI69ubc5eOObmBMYEVAa69MOy_sWRDz-dfHH1bRT3N6DfiKixfDX7oEhxUOxgrEVcJcG2PzAzjWQEqXOQ'
    }); 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map(data => {
        return data['albums'].items;
      }))*/
    /*  .subscribe(data =>{
         console.log(data);
     }) */
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map(data => data['tracks']))
  }
}
