import { Component, OnInit, Input } from '@angular/core';
import { Composition } from '../composition';
import { MatDialog } from '@angular/material';
import { CompositionDialogComponent } from '../composition-dialog/composition-dialog.component';
import { CompositionService } from '../composition.service';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.css']
})
export class CompositionListComponent implements OnInit {
  @Input() composition: Composition;
  constructor(public dialog: MatDialog, private compositionService: CompositionService) { }

  delete(composition: Composition): void {
    // this.compositions = this.compositions.filter(h => h !== composition);
    this.compositionService.deleteComposition(composition.id).subscribe();
  }

  edit(composition: Composition): void {
    const dialogRef = this.dialog.open(CompositionDialogComponent, {
      data: { id: composition.id}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.loadData();
    // });
  }

  ngOnInit() {
  }

}
