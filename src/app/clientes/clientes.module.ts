import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';

@NgModule({
  declarations: [ClientesListagemComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    ClientesListagemComponent
  ]
})
export class ClientesModule { }
