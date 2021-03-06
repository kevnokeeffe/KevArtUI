import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { BioComponent } from './bio.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: 'bio',
    children: [
      {
        path: '',
        component: BioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioRoutingModule {}
