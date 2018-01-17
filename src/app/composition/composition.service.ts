import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Composition } from '../composition';



@Injectable()
export class CompositionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // Link to our api, pointing to localhost
  private compositionsApi = 'http://localhost:3000/compositions';

  candidates: Composition[] = [];

  constructor(private http: Http) {}

  // Get all users from the API
  getAll(): Promise<Composition[]> {
    return this.http.get(this.compositionsApi)
               .toPromise()
               .then(response => response.json() as Composition[])
               .catch(this.handleError);
  }

  getById(id: string): Promise<Composition> {
    const url = `${this.compositionsApi}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Composition)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.compositionsApi}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  create(candidate: Composition): Promise<Composition> {
    return this.http
      .post(this.compositionsApi, candidate, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Composition)
      .catch(this.handleError);
  }

  // JSON.stringify(hero)
  update(candidate: Composition): Promise<Composition> {
    return this.http
      .put(this.compositionsApi, candidate, {headers: this.headers})
      .toPromise()
      .then(() => candidate)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
