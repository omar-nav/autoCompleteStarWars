import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Address } from './address';

@Injectable({
  providedIn: 'root',
})
export class AddressSuggestionsService {
  endpoint: string =
    'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates';

  constructor(private httpClient: HttpClient) {}

  searchAddress(term: string): Observable<Address[]> {
    let url = `${this.endpoint}`;

    if (!term.trim()) {
      return of([]);
    }

    const options = {
      params: {
        address: term,
        outFields: '*',
        forStorage: 'false',
        f: 'pjson',
        subregion: 'Travis County',
        region: 'TX',
        countryCode: 'USA',
      },
    };

    return this.httpClient
      .get<Address[]>(url, options)
      .pipe(map((data) => data['candidates']));
  }
}
