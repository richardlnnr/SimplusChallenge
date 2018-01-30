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
    .subscribe(compositions => {
      this.compositions = compositions;
    }
    );
  }

  add(compositionSon: Composition): void {
    const newComposition = this.compositionService.createDefaultComposition();
    const dialogRef = this.showDialog(newComposition);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Se a composição estiver preenchida, manter o número da composição
        if (compositionSon) {
          result.compositionNumber = compositionSon.compositionNumber;
          if (compositionSon.fatherId) {
            result = this.updateFather(result, compositionSon.fatherId);
          }
        } else {
          result.compositionNumber = this.compositionService.getCompositionNumberKey();
        }

        this.compositionService.addComposition(result).subscribe(addedComposition => {
          if (compositionSon) {
            compositionSon = this.updateFather(compositionSon, addedComposition.id);
            this.compositionService.updateComposition(compositionSon).subscribe(() => {
              this.compositionService.generateIndexForComposition(compositionSon.compositionNumber, null, 1).then(() => this.loadData());
            });
          } else {
            this.loadData();
          }
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

  // Atualiza o código pai no filho
  private updateFather(compositionSon: Composition, fatherId: number): Composition {
    compositionSon.fatherId = fatherId;
    return compositionSon;
  }

  private generateIndex(): void {

  }

}
