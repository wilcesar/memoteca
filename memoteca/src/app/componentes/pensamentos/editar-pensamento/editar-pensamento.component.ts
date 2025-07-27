import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from './../pensamento';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;
  pensamento: Pensamento ={
    id:0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
    this.formulario = this.formBuilder.group({
          conteudo: ['',Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
          autoria:['',Validators.compose([
            Validators.required,
            Validators.minLength(3)
        ])],
          modelo:['modelo1']
        })
  }
  editarPensamento(){
    console.log(this.formulario.get('autoria')?.errors);
    if(this.formulario.valid){
      this.service.editar(this.pensamento).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }
}
