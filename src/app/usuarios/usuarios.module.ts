import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuarioslistaComponent } from './usuarioslista/usuarioslista.component';


@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuarioslistaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ],
  exports: [
    UsuariosFormComponent
  ]
})
export class UsuariosModule { }
