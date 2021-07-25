import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  private clienteService: ClienteService;

  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService;
  }

  ngOnInit(): void {
    // Sincrono this.clientes = this.clienteService.getClientes();
    this.clienteService.getClientes().subscribe(
      // function (clientes) => {
      //   this.clientes = clientes;
      // }
      clientes => this.clientes = clientes
    );
  }

}
