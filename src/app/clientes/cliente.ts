export class Cliente {
  id: number;
  active: boolean;
  nombreApellido: string;
  email: string;
  createdAt: string;

  constructor(){
    this.id = 0;
    this.active = false;
    this.nombreApellido = this.email = this.createdAt = '';

  }
}
