import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {

  clientes = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.clienteService.listar()
      .then(resultado => {
        this.clientes = resultado;
      });
  }
}
