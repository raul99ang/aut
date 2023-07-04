import { Component, OnInit } from '@angular/core';
import { Tbl_ClientesModel } from 'src/models/Tbl_Clientes.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tbl_ClientesService } from 'src/services/Tbl_Clientes.service';


@Component({
  selector: 'app-detail-registrar-clientes',
  templateUrl: './detail-registrar-clientes.component.html',
  styleUrls: ['./detail-registrar-clientes.component.css'],
})
export class DetailRegistrarClientesComponent  implements OnInit {
  emailControl = new FormControl();
  clientes: Tbl_ClientesModel[] = [];
  terminoBusqueda = '';
  clienteForm: FormGroup;
  editMode: boolean = false;
  selectedCliente: Tbl_ClientesModel | undefined;
  fileName = 'clientes.xlsx';
  tarjetaCreditoForm: FormGroup = new FormGroup({
    'numero': new FormControl(null, Validators.required),
    'fechaExpiracion': new FormControl(null, Validators.required),
    'codigoSeguridad': new FormControl(null, Validators.required)
  });
  constructor(private clientesService: Tbl_ClientesService, private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', Validators.required],
      prepago: [false],
      credito: [false],
      //Solo agregar lo siguiente cuando los datos existan en la base de datos ya que eso mismo lo activara
      /*numero: ['', Validators.pattern('^[0-9]{16}$')],
      fechaExpiracion: ['', Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')],
      codigoSeguridad: ['', Validators.pattern('^[0-9]{3,4}$')]*/
    });
    
  }

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
        this.clientesService.putTbl_Clientes(cliente, cliente.idCliente).then(() => {
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
    if (confirm(`¿Está seguro que desea eliminar al cliente ${cliente.nombre}?`)) {
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
      credito: cliente.credito
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
        const clientesFiltrados = data.filter(cliente =>
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
  
}
