import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { WorksComponent } from './works.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: 'works',
    children: [
      {
        path: '',
        component: WorksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
