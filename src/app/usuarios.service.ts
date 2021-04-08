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
   atualizar(usuario: Usuario ) : Observable<any> {
    return this.http.put<Usuario>(`http://localhost:8081/api-users/api/user/${usuario.id}`, usuario);
   }

  getUsuario(): Usuario {
    let  usuario: Usuario = new Usuario();
    return usuario;
  }
  /*
  getUsuarios() : Usuario[]{
    let usuario = new Usuario();
    usuario.id = 1;
    usuario.email = 'rjl@rjl.com';
    usuario.cidade = 'Fortaleza';
    usuario.endereco = 'Rua A';
    usuario.createdAt = '2021/04/08'
    return [usuario];
  }
  */
  
  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8081/api-users/api/usersWithStream');
  }

  getUsuarioById(id: number): Observable<Usuario> {
   return this.http.get<any>(`http://localhost:8081/api-users/api/user/${id}`);
 }  
}
