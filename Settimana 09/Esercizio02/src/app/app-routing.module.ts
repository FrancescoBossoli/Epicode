import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdFormComponent } from './components/td-form/td-form.component';

const routes: Routes = [
    {
        path: "td-form",
        component: TdFormComponent
    },
    {
        path: "reactive-form",
        component: ReactiveFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
