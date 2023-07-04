import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClientesModel } from 'src/models/Clientes.model';
import { Tbl_ClientesModel } from 'src/models/Tbl_Clientes.model';
import { ClientesService } from 'src/services/Clientes.service';
import { Tbl_ClientesService } from 'src/services/Tbl_Clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit {
  emailControl = new FormControl();
  clientes: Tbl_ClientesModel[] = [];
  terminoBusqueda = '';
  clienteForm: FormGroup;
  editMode: boolean = false;
  selectedCliente: Tbl_ClientesModel | undefined;
  fileName = 'clientes.xlsx';
  constructor(private clientesService: Tbl_ClientesService, private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', Validators.required],
      prepago: [false],
      credito: [false]
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
}
