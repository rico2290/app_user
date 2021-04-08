import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuarioslistaComponent } from './usuarioslista/usuarioslista.component';

const routes: Routes = [
  { path:'usuarios-form', component: UsuariosFormComponent },
  { path:'usuarios-form/:id', component: UsuariosFormComponent },
  { path:'usuarios-lista', component: UsuarioslistaComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
