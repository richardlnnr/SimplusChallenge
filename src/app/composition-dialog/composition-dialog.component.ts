import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-composition-dialog',
  templateUrl: './composition-dialog.component.html',
  styleUrls: ['./composition-dialog.component.css']
})
export class CompositionDialogComponent implements OnInit {

  units = [];
  packingUnits = [];
  model: any = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CompositionDialogComponent>) {
    this.units = ['Milímetro', 'Centimetro', 'Metro'];
    this.packingUnits = ['Caixa', 'Pack', 'Unidade'];
    this.model = data.model;
  }

  onSubmit() {
    this.dialogRef.close(this.model);
  }

  ngOnInit() {
  }

}

