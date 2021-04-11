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
    mensagemSucesso: string= '';
    mensagemErro: string = '';

  constructor(private service: UsuariosService, private router: Router) {

   }

  ngOnInit(): void {
    this.service
    .getUsuarios()
    .subscribe(response => this.usuarios = response);
  }



  novoCadastro(){
    this.router.navigate(['/usuarios-form']);
  }
  preparaDelecao(usuario: Usuario){
    this.usuarioSelecionado = usuario;
  }  

  deletarUsuario(){
    this.service
      .deletar(this.usuarioSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = 'Usuario deletado com sucesso',
        this.ngOnInit(),
        setTimeout(()=> {
          this.mensagemSucesso = ''
        }, 2000)
        
    },
      error => {
        this.mensagemErro = 'Ocorreu um erro ao deletar o usuario',
        setTimeout(()=> {
          this.mensagemErro = ''
        }, 2000)
    });
  }
}
