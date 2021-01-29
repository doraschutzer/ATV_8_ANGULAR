import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    ClientesModule,
    SegurancaModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
