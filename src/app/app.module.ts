import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CompositionComponent } from './composition/composition.component';
import { CompositionDialogComponent } from './composition-dialog/composition-dialog.component';
import { CompositionService } from './composition.service';
import { CompositionListComponent } from './composition-list/composition-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompositionComponent,
    CompositionDialogComponent,
    CompositionListComponent
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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CompositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
