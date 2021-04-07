import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Usuario } from './usuarios/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {
    
   }

   salvar(usuario: Usuario ) : Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8081/api-users/api/user', usuario);
   }

  getUsuario(): Usuario {
    let  usuario: Usuario = new Usuario();
    usuario.name = 'fulano Tal';
    usuario.cidade = 'Fortaleza';
    return usuario;
  }
}
