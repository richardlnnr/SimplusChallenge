import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog } from '@angular/material';


import { Composition } from '../composition';
import { CompositionService } from '../composition.service';
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

  loadData(): void {
    this.compositionService.getCompositions()
    .subscribe(compositions => { this.compositions = compositions; console.log(compositions); });
  }

  add(): void {
    const dialogRef = this.dialog.open(CompositionDialogComponent, {
      data: { id: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }
}
