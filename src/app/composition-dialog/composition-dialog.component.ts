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
  model: Composition = new Composition();
  isAddMode = false;
  title = null;
  dialogSendData: any = null;

  verifyMode(id: number): void {
    if (id) {
      this.title = 'Editar composição';
      this.isAddMode = false;
    } else {
      this.title = 'Adicionar composição';
      this.isAddMode = true;
    }
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CompositionDialogComponent>,
  private compositionService: CompositionService) {
    this.unitsLength = [{Key: 'MM', Value: 'Milímetro(s)'}, {Key: 'CM', Value: 'Centímetro(s)'}, {Key: 'M', Value: 'Metro(s)'}];
    this.unitsHeight = [{Key: 'MG', Value: 'Miligramas'}, {Key: 'G', Value: 'Gramas'}, {Key: 'KG', Value: 'Kilograma(s)'}];
    this.packingUnits = [{Key: 'PL', Value: 'Palet'}, {Key: 'CX', Value: 'Caixa'}, {Key: 'PC', Value: 'Pack'},
    {Key: 'FD', Value: 'Fardo'},  {Key: 'U', Value: 'Unidade'}];

    this.dialogSendData = data;
  }

  onSubmit() {
    if (this.isAddMode) {
      this.compositionService.addComposition(this.model).subscribe(component => console.log(component));
    } else {
      this.compositionService.updateComposition(this.model).subscribe(component => console.log(component));
    }

    this.verifyMode(this.model.id);

    // this.dialogRef.close(this.model);
  }

  ngOnInit() {
    this.verifyMode(this.dialogSendData.id);
    if (this.isAddMode) {
      this.model = {id: null, dunCode: '111111', packingUnit: 'U', quantity: 1, height: 10, heightUnit: 'CM', width: 15, widthUnit: 'M',
       depth: 5, depthUnit: 'MM', grossHeight: 2, grossHeightUnit: 'KG', netHeight: 1800, netHeightUnit: 'G', levels: []};
      // this.model = new Composition();
    } else {
      this.compositionService.getComposition(this.dialogSendData.id).subscribe(composition => this.model = composition);
    }
  }

}

