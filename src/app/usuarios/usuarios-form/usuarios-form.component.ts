import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Usuario } from '../usuario'
import { UsuariosService } from '../../usuarios.service'
import { param } from 'jquery';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario!: Usuario;
  success: boolean = false;
  errors: string = '' ;
  listError: any =[];
  id!: number;
  
  constructor(
    private service: UsuariosService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.usuario = new Usuario();
  }
  
  ngOnInit(): void {
    
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if (this.id) {
        this.service
        .getUsuarioById(this.id)
        .subscribe(response => this.usuario = response,
          errorResponse => this.usuario = new Usuario()
          )
          
        }
      })
      
    /* 
    let snap = this.activatedRoute.snapshot
    if (snap.params && snap.params.id) {
      this.id = snap.params.id
      this.service
      .getUsuarioById(this.id)
      .subscribe(response => this.usuario = response,
        errorResponse => this.usuario = new Usuario()
        )
    } 
    */
    

  }

  setSuccess(){
    setTimeout(() => {
      this.success = !this.success;
    },2000)
  }

  setErrors(){
    setTimeout(() => {
      this.errors = '';
    },2000)
  }


  voltarParaListar(){
    this.router.navigate(['/usuarios-lista'])
  }
  onSubmit(){
    if (this.id) {
      this.service.atualizar(this.usuario)
      .subscribe(respoense => {
        this.success = true;
        this.errors = ''; 
        this.usuario = respoense
        this.setSuccess();
      }, errorResponse =>{
        this.success = false;
        console.log(errorResponse.error);
        this.listError = errorResponse.error.fieldProblem;
        this.errors  = (errorResponse.error.title);
        
        this.setErrors();
      })
    } else {
      this.listError = []; 
      this.service.salvar(this.usuario)
      .subscribe( respoense => {
        this.success = true;
        this.listError = []; 
        this.usuario = respoense
        this.setSuccess();
        this.ngOnInit()
      }, errorResponse =>{
        this.success = false;
        this.setErrors();
        
        for (const key in errorResponse.error.fieldProblem) {
          this.listError[this.listError.length] = (errorResponse.error.fieldProblem[key].name).toString() +' '+(errorResponse.error.fieldProblem[key].message)
        }
        //this.listError = this.listError; //remover duplicatas


      })
    }
  }

}
