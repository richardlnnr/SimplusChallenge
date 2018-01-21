import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog } from '@angular/material';


import { Composition } from '../composition';
import { CompositionService } from '../composition.service';
import { CompositionDialogComponent } from '../composition-dialog/composition-dialog.component';
import { UnitPacking } from '../unit-packing.enum';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {

  compositions: Composition[] = [];
  packingUnits = UnitPacking;

  constructor(public dialog: MatDialog, private compositionService: CompositionService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.compositionService.getCompositions()
    .subscribe(compositions => this.compositions = compositions);
  }

  add(composition: Composition): void {
    const newComposition = this.compositionService.createDefaultComposition();
    const dialogRef = this.showDialog(newComposition);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Se a composição estiver preenchida, manter o número da composição
        if (composition) {
          result.compositionNumber = composition.compositionNumber;
        } else {
          result.compositionNumber = this.compositionService.getCompositionNumberKey();
        }

        this.compositionService.addComposition(result).subscribe(addedComposition => {
          // Atualiza o código pai no filho
          if (composition) {
            composition.fatherId = addedComposition.id;
            this.compositionService.updateComposition(composition);
          }

          this.loadData();
        });
      }
    });
  }

  delete(composition: Composition): void {
    this.compositionService.deleteComposition(composition.id).subscribe(() => this.loadData());
  }

  edit(composition: Composition): void {
    this.compositionService.getComposition(composition.id).subscribe(findComposition => {
      const dialogRef = this.showDialog(findComposition);

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.compositionService.updateComposition(result).subscribe(() => this.loadData());
        }
      });
    });
  }

  showDialog(composition: Composition) {
    return this.dialog.open(CompositionDialogComponent, {
      data: { model: composition}
    });
  }

}
