import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompositionComponent } from '../composition/composition.component';

const appRoutes: Routes = [
  { path: 'compositions', component: CompositionComponent },
  { path: '',   redirectTo: '/compositions', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
