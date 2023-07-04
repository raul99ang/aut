export class ClientesModel 
{
id: number = 0;
nombre:  string |undefined  ;
apellidos:  string |undefined  ;
correo:  string |undefined  ;
domicilio:  string |undefined  ;
codigo_postal_cliente:  string |undefined  ;
foto: File |undefined ;
fechaRegistro: Date |undefined  ;
qRCode:  string |undefined  ;
serviciosHechos: number = 0  ;
prepago: boolean |undefined;
credito: boolean |undefined;
metodo_pago:  string |undefined  ;
tipo_vehiculo:  string |undefined  ;
sucursal:  string |undefined  ;
id_servicio: number = 0  ;

}
