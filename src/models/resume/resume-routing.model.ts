import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeModule } from './resume.module';
import { ResumeComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: ResumeComponent
    }
];

@NgModule({
  imports: [ResumeModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }