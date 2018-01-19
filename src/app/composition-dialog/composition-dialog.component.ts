import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, NgModel } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Composition } from '../composition';
import { CompositionService } from '../composition.service';


@Component({
  selector: 'app-composition-dialog',
  templateUrl: './composition-dialog.component.html',
  styleUrls: ['./composition-dialog.component.css']
})
export class CompositionDialogComponent implements OnInit {

  unitsLength = [];
  unitsHeight = [];
  packingUnits = [];
  model: Composition = null;
  isAddMode = false;
  title = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CompositionDialogComponent>,
  private compositionService: CompositionService) {
    this.unitsLength = [{Key: 'MM', Value: 'Milímetro(s)'}, {Key: 'CM', Value: 'Centímetro(s)'}, {Key: 'M', Value: 'Metro(s)'}];
    this.unitsHeight = [{Key: 'MG', Value: 'Miligramas'}, {Key: 'G', Value: 'Gramas'}, {Key: 'KG', Value: 'Kilograma(s)'}];
    this.packingUnits = [{Key: 'PL', Value: 'Palet'}, {Key: 'CX', Value: 'Caixa'}, {Key: 'PC', Value: 'Pack'},
    {Key: 'FD', Value: 'Fardo'},  {Key: 'U', Value: 'Unidade'}];

    if (data.dunCode) {
      this.title = 'Editar composição';
      compositionService.getComposition(data.dunCode).subscribe(composition => this.model = composition);
    } else {
      this.title = 'Adicionar composição';
      this.isAddMode = true;
      this.model = new Composition();
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.compositionService.addComposition(this.model);
    } else {
      this.compositionService.updateComposition(this.model);
    }

    this.dialogRef.close(this.model);
  }

  ngOnInit() {
  }

}

