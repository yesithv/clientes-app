import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs'; // New Angular 6

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {}

// Es un metodo sincrono, es bloqueante
  getClientesSincrono(): Cliente[] {
    return CLIENTES;
  }

getClientes(): Observable<Cliente[]>{
  return of(CLIENTES); // Se convierte en un Stream
}


}
