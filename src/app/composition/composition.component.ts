import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


import { Composition } from '../composition';
import { CompositionService } from './composition.service';
import { CompositionDialogComponent } from '../composition-dialog/composition-dialog.component';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {

  compositions: Composition[] = [];

  constructor(public dialog: MatDialog, private compositionService: CompositionService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.compositionService.getAll()
    .then(compositions => this.compositions = compositions);
  }

  delete(composition: Composition) {
    this.compositionService.delete(composition._id)
    .then(() => this.loadData());
  }

  edit(composition: Composition) {
    this.compositionService.getById(composition._id)
    .then(returnCandidate => {
    });

    const dialogRef = this.dialog.open(CompositionDialogComponent, {
      data: {title: 'Editar composição', model: {...composition}}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.compositionService.update(result)
        .then(returnCandidate => {
          this.loadData();
        });
      }
    });
  }

  add() {
    const newComposition = new Composition();

    const dialogRef = this.dialog.open(CompositionDialogComponent, {
      data: {title: 'Adicionar composição', model: newComposition}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.compositionService.create(result)
        .then(addedComposition => {
          this.compositions.push(addedComposition);
        });
      }
    });
  }
}
