import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Composition } from '../composition';
import { CompositionService } from '../composition.service';
import { UnitPacking } from '../unit-packing.enum';
import { UnitLength } from '../unit-length.enum';
import { UnitHeight } from '../unit-height.enum';


@Component({
  selector: 'app-composition-dialog',
  templateUrl: './composition-dialog.component.html',
  styleUrls: ['./composition-dialog.component.css']
})
export class CompositionDialogComponent implements OnInit {

  model: Composition;
  packingUnits = UnitPacking;
  lengthUnits = UnitLength;
  heightUnits = UnitHeight;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CompositionDialogComponent>,
  private compositionService: CompositionService) {
    this.model = data.model;
  }

  onSubmit() {
    this.dialogRef.close(this.model);
  }

  ngOnInit() {
  }

}

