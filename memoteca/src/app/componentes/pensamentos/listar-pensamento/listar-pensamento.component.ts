import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
listaPensamentos = [
  {
    conteudo: 'Comunicação entre componentes',
    autoria: 'Angular',
    modelo: 'modelo3'
  },{
    conteudo: 'Comunicação entre componentes',
    autoria: 'Angular',
    modelo: 'modelo3'
  },
   {
    conteudo: 'Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes Comunicação entre componentes',
    autoria: 'Componente filho',
    modelo: 'modelo1'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
