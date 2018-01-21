import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Composition } from './composition';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CompositionService {

  private compositionsApi = 'api/compositions';

  candidates: Composition[] = [];
  compositionNumber = 2;


  constructor(private http: HttpClient) {}

  // Get all data from the API
  getCompositions(): Observable<Composition[]> {
    return this.http.get<Composition[]>(this.compositionsApi).pipe(
      tap(heroes => this.log(`fetched compositions`)),
      catchError(this.handleError('getCompositions', []))
    );
  }

  getCompositionNumberKey(): number {
    return ++this.compositionNumber;
  }

  createDefaultComposition(): Composition {
    return new Composition(null, null, null, '', '0', 1, 1, '1', 1, '1', 1, '1', 1, '0', 1, '0');
  }

  getComposition(id: number): Observable<Composition> {
    const url = `${this.compositionsApi}/${id}`;
    return this.http.get<Composition>(url).pipe(
      tap(_ => this.log(`fetched Composition id=${id}`)),
      catchError(this.handleError<Composition>(`getComposition id=${id}`))
    );
  }

 //////// Save methods //////////

  /** POST: add a new composition to the server */
  addComposition (composition: Composition): Observable<Composition> {
    return this.http.post<Composition>(this.compositionsApi, composition, httpOptions).pipe(
      tap((compositionTap: Composition) => this.log(`added composition w/ id=${compositionTap.id}`)),
      catchError(this.handleError<Composition>('addComposition'))
    );
  }

  /** DELETE: delete the composition from the server */
  deleteComposition (composition: Composition | number): Observable<Composition> {
    const id = typeof composition === 'number' ? composition : composition.id;
    const url = `${this.compositionsApi}/${id}`;

    return this.http.delete<Composition>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted composition id=${id}`)),
      catchError(this.handleError<Composition>('deleteComposition'))
    );
  }

  /** PUT: update the composition on the server */
  updateComposition (composition: Composition): Observable<any> {
    return this.http.put(this.compositionsApi, composition, httpOptions).pipe(
      tap(_ => this.log(`updated composition id=${composition.dunCode}`)),
      catchError(this.handleError<any>('updateComposition'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a compositionService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add('compositionService: ' + message);
  }

}
