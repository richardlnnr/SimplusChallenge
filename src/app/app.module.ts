import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CompositionComponent } from './composition/composition.component';
import { CompositionDialogComponent } from './composition-dialog/composition-dialog.component';
import { CompositionService } from './composition/composition.service';


@NgModule({
  declarations: [
    AppComponent,
    CompositionComponent,
    CompositionDialogComponent
  ],
  entryComponents: [
    CompositionDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [CompositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
