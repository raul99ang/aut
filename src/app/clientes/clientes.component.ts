import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tbl_AbonoCreditoModel } from 'src/models/Tbl_AbonoCredito.model';
import { Tbl_ClientesModel } from 'src/models/Tbl_Clientes.model';
import { Tbl_PrepagoModel } from 'src/models/Tbl_Prepago.model';
import { Tbl_AbonoCreditoService } from 'src/services/Tbl_AbonoCredito.service';
import { Tbl_ClientesService } from 'src/services/Tbl_Clientes.service';
import { Tbl_PrepagoService } from 'src/services/Tbl_Prepago.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: Tbl_ClientesModel[] = [];
  pagosCliente: any[] = [];
  pagosClientePrepago: any[] = [];
  terminoBusqueda = '';
  clienteForm: FormGroup;
  editMode: boolean = false;
  selectedCliente: Tbl_ClientesModel | undefined;
  fileName = 'clientes.xlsx';
  constructor(
    private clientesService: Tbl_ClientesService,
    private fb: FormBuilder,
    private creditoService: Tbl_AbonoCreditoService,
    private prepagoService: Tbl_PrepagoService
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', Validators.required],
      prepago: [false],
      credito: [false],
    });
  }

  prepagotbl: Tbl_PrepagoModel = {
    idPrepago: 0,
    idCliente: 0,
    fecha: new Date(),
    idFactura: 0,
    idServicio: 0,
    vendidas: 0,
    cortesia: 0,
    utilizadas: 0,
  };
  creditotbl: Tbl_AbonoCreditoModel = {
    idAbono: 0,
    idCliente: 0,
    fecha: new Date(),
    importe: '',
  };
  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clientesService.getTbl_Clientes().then((data) => {
      this.clientes = data;
    });
  }

  onSubmit() {
    if (this.editMode) {
      if (this.selectedCliente) {
        const cliente = this.clienteForm.value;
        cliente.idCliente = this.selectedCliente.idCliente;
        this.clientesService
          .putTbl_Clientes(cliente, cliente.idCliente)
          .then(() => {
            this.loadClientes();
            this.clienteForm.reset();
            this.editMode = false;
            this.selectedCliente = undefined;
          });
      }
    } else {
      const cliente = this.clienteForm.value;
      this.clientesService.postTbl_Clientes(cliente).then(() => {
        this.loadClientes();
        this.clienteForm.reset();
      });
    }
  }

  onDelete(cliente: Tbl_ClientesModel) {
    if (
      confirm(`¿Está seguro que desea eliminar al cliente ${cliente.nombre}?`)
    ) {
      this.clientesService.deleteTbl_Clientes(cliente.idCliente).then(() => {
        this.loadClientes();
      });
    }
  }

  onEdit(cliente: Tbl_ClientesModel) {
    this.selectedCliente = cliente;
    this.editMode = true;
    this.clienteForm.setValue({
      nombre: cliente.nombre,
      domicilio: cliente.domicilio,
      email: cliente.email,
      prepago: cliente.prepago,
      credito: cliente.credito,
    });

    this.creditoService.getTbl_AbonoCredito().then((data) => {
      this.pagosCliente = data;
    });
    this.prepagoService.getTbl_Prepago().then((data) => {
      this.pagosClientePrepago = data;
    });
  }
 //verificar correlación con clientes de id pendiente
  verHistorialPagosCliente(idCliente: Tbl_ClientesModel): void {
    this.creditoService.getTbl_AbonoCredito().then((data) => {
      const historialPagos = data.map((pago) => ({
        abono: pago.idAbono,
        idCliente: pago.idCliente,
        fecha: pago.fecha,
        importe: pago.importe,
      }));
      console.log(historialPagos);
      // Aquí puedes hacer lo que necesites con el historial de pagos
    });
  }

  //verificar correlación con clientes de id pendiente
  verHistorialPagosClientePrepago(idCliente: Tbl_ClientesModel): void {
    this.prepagoService.getTbl_Prepago().then((data) => {
      const historialPagosPrepago = data.map((pago) => ({
        abono: pago.idPrepago,
        idCliente: pago.idCliente,
        fecha: pago.fecha,
        idFactura: pago.idFactura,
        idServicio: pago.idServicio,
        vendidas: pago.vendidas,
        cortesia: pago.cortesia,
        utilizadas: pago.utilizadas,
      }));
      console.log(historialPagosPrepago);
      // Aquí puedes hacer lo que necesites con el historial de pagos
    });
  }

  onCancel() {
    this.clienteForm.reset();
    this.editMode = false;
    this.selectedCliente = undefined;
  }

  filtrarClientes(): void {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    if (termino) {
      this.clientesService.getTbl_Clientes().then((data) => {
        const clientesFiltrados = data.filter(
          (cliente) =>
            cliente.idCliente!.toString().includes(termino) ||
            cliente.nombre!.toLowerCase().includes(termino) ||
            cliente.domicilio!.toLowerCase().includes(termino) ||
            cliente.email!.toLowerCase().includes(termino) ||
            cliente.credito!.toString().includes(termino) ||
            cliente.prepago!.toString().includes(termino)
        );
        this.clientes = clientesFiltrados;
      });
    } else {
      this.loadClientes();
    }
  }

  registrarAbono(tipoCliente: string) {
    const abono =
      tipoCliente === 'credito'
        ? this.clienteForm.get('abonoCredito')?.value
        : this.clienteForm.get('abonoPrepago')?.value;
  }
}
