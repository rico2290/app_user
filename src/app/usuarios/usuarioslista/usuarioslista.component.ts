import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarioslista',
  templateUrl: './usuarioslista.component.html',
  styleUrls: ['./usuarioslista.component.css']
})
export class UsuarioslistaComponent implements OnInit {

    usuarios: Usuario[] = [];
    usuarioSelecionado: Usuario = new Usuario();

  constructor(private service: UsuariosService, private router: Router) {

   }

  ngOnInit(): void {
    this.service
    .getUsuarios()
    .subscribe(response => this.usuarios = response);
  }

  novoCadastro(){
    this.router.navigate(['/usuarios-form']);

/* 
  preparaRemocao(usuario: Usuario){
    this.usuarioSelecionado = usuario;
  }   */
}
}
