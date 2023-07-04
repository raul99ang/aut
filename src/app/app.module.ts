import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaComponent } from 'src/crud/Area.component';
import { AreaDetailComponent } from 'src/crud/Area-detail.component';
 import { EmpleadoComponent } from 'src/crud/Empleado.component';
import { EmpleadoDetailComponent } from 'src/crud/Empleado-detail.component';
 import { FormuComponent } from 'src/crud/Formu.component';
import { FormuDetailComponent } from 'src/crud/Formu-detail.component';
 import { ServicioComponent } from 'src/crud/Servicio.component';
import { ServicioDetailComponent } from 'src/crud/Servicio-detail.component';
 import { SucursalComponent } from 'src/crud/Sucursal.component';
import { SucursalDetailComponent } from 'src/crud/Sucursal-detail.component';
 import { VehiculoComponent } from 'src/crud/Vehiculo.component';
import { VehiculoDetailComponent } from 'src/crud/Vehiculo-detail.component';
import { LoginComponent } from '../login/login.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { OpcionComponent } from './opcion/opcion.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from 'src/crud/User.component';
import { UserDetailComponent } from 'src/crud/User-detail.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SistemaContableComponent } from './sistema-contable/sistema-contable.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficoComponentComponent } from './grafico-component/grafico-component.component';
import { RegistroComponent } from './registro/registro.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { DetailRegistrarClientesComponent } from './registrar-clientes/detail-registrar-clientes/detail-registrar-clientes.component';
import { CortesComponent } from './cortes/cortes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosDetailComponent } from './servicios/servicios-detail/servicios-detail.component';
import { GastosComprasComponent } from './gastos-compras/gastos-compras.component';
import { EmpleadosDetailComponent } from './empleados/empleados-detail/empleados-detail.component';
import { ControlRhComponent } from './control-rh/control-rh.component';
import { NominasComponent } from './nominas/nominas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LandingServiciosComponent } from './servicios/landing-servicios/landing-servicios.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { RegistroLavadosComponent } from './registro-lavados/registro-lavados.component';


 @NgModule({
  declarations: [
    AppComponent,
AreaComponent,
GraficoComponentComponent,
AreaDetailComponent,
 EmpleadoComponent,  
EmpleadoDetailComponent,
 FormuComponent,
FormuDetailComponent,
 ServicioComponent,
ServicioDetailComponent,
 SucursalComponent,
SucursalDetailComponent,
 VehiculoComponent,
VehiculoDetailComponent,
LoginComponent,
NavComponent,
LandingComponent,
OpcionComponent,
EmpleadosComponent,
SistemaContableComponent,
UserComponent,
UserDetailComponent,
FormularioComponent,
GraficoComponentComponent,
RegistroComponent,
ReportesComponent,
ClientesComponent,
RegistrarClientesComponent,
DetailRegistrarClientesComponent,
CortesComponent,
ServiciosComponent,
ServiciosDetailComponent,
GastosComprasComponent,
EmpleadosDetailComponent,
ControlRhComponent,
NominasComponent,
EstadisticasComponent,
LandingServiciosComponent,
AdicionalesComponent,
PromocionesComponent,
RegistroLavadosComponent
 ],
imports: [
  BrowserModule,
  NgApexchartsModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  BrowserAnimationsModule,
  Ng2SearchPipeModule,
  NgxPaginationModule,
  ],
  providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }