import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Input() valoracion: number = 0;
  @Output() valoracionChange = new EventEmitter<number>();
  @Output() enviarClick = new EventEmitter<void>();

  get valoracionTexto(): string {
    switch (this.valoracion) {
      case 1:
        return 'Muy mala';
      case 2:
        return 'Mala';
      case 3:
        return 'Regular';
      case 4:
        return 'Buena';
      case 5:
        return 'Excelente';
      default:
        return '';
    }
  }

  cambiarValoracion(valor: number): void {
    this.valoracion = valor;
    this.valoracionChange.emit(valor);
  }

  enviar(): void {
    this.enviarClick.emit();
  }
}
