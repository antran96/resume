import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'resume'
  },
  {
    path: 'resume',
    loadChildren: () => import("../models/resume/resume-routing.model").then(m => m.ResumeRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
