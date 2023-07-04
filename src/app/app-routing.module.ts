import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetailComponent } from 'src/crud/Area-detail.component';
import { AreaComponent } from 'src/crud/Area.component';
import { EmpleadoDetailComponent } from 'src/crud/Empleado-detail.component';
import { EmpleadoComponent } from 'src/crud/Empleado.component';
import { FormuDetailComponent } from 'src/crud/Formu-detail.component';
import { FormuComponent } from 'src/crud/Formu.component';
import { ServicioDetailComponent } from 'src/crud/Servicio-detail.component';
import { ServicioComponent } from 'src/crud/Servicio.component';
import { SucursalDetailComponent } from 'src/crud/Sucursal-detail.component';
import { SucursalComponent } from 'src/crud/Sucursal.component';
import { VehiculoDetailComponent } from 'src/crud/Vehiculo-detail.component';
import { VehiculoComponent } from 'src/crud/Vehiculo.component';
import { LoginComponent } from 'src/login/login.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { OpcionComponent } from './opcion/opcion.component';
import { VigilanteGuard } from './vigilante.guard';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SistemaContableComponent } from './sistema-contable/sistema-contable.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UserComponent } from 'src/crud/User.component';
import { GraficoComponentComponent } from 'src/app/grafico-component/grafico-component.component';
import { RegistroComponent } from './registro/registro.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { DetailRegistrarClientesComponent } from './registrar-clientes/detail-registrar-clientes/detail-registrar-clientes.component';
import { CortesComponent } from './cortes/cortes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosDetailComponent } from './servicios/servicios-detail/servicios-detail.component';
import { GastosComprasComponent } from './gastos-compras/gastos-compras.component';
import { UserModel } from 'src/models/User.model';
import { EmpleadosDetailComponent } from './empleados/empleados-detail/empleados-detail.component';
import { NominasComponent } from './nominas/nominas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ControlRhComponent } from './control-rh/control-rh.component';
import { LandingServiciosComponent } from './servicios/landing-servicios/landing-servicios.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { AdicionalesComponent } from './adicionales/adicionales.component';
import { RegistroLavadosComponent } from './registro-lavados/registro-lavados.component';



const routes: Routes = [

{path: '',pathMatch: 'full', redirectTo: 'Login'  },
{path: 'Landing', component: LandingComponent,canActivate: [VigilanteGuard], data: { role: 'Administrador'}},
{path: 'Area', component:AreaDetailComponent,canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: 'Empleado', component:EmpleadoDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: 'Formu', component:FormuDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: 'Servicio', component:ServicioDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: 'Sucursal', component:SucursalDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: 'Vehiculo', component:VehiculoDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "for_det", component:FormuComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: "empleado", component:EmpleadoComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: "Are", component:AreaComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "servicio", component:ServicioComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: "sucursal", component:SucursalComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}, 
{path: "vehiculo", component:VehiculoComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' } },
{path: "Login", component:LoginComponent},
{path :"nav", component:NavComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador'}},
{path:"opcion", component:OpcionComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"empleados", component:EmpleadosComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"empleados-detail", component:EmpleadosDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"sistemacontable", component:SistemaContableComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"formulario", component:FormularioComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"user", component:UserComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path:"grafico", component:GraficoComponentComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "registro", component:RegistroComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "reportes", component:ReportesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "clientes", component:ClientesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "registrar_clientes", component:RegistrarClientesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "detail_registrar_clientes", component:DetailRegistrarClientesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "cortes", component:CortesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "servicios", component:ServiciosComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "servicios_detail", component:ServiciosDetailComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "gastos_compras", component:GastosComprasComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "nominas", component:NominasComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "estadisticas", component:EstadisticasComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "landing-servicios", component:LandingServiciosComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "control_rh", component:ControlRhComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "promociones", component:PromocionesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "adicionales", component:AdicionalesComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }},
{path: "registro_lavados", component:RegistroLavadosComponent, canActivate: [VigilanteGuard], data: { role: 'Administrador' }}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }