import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

 @Input() text: string = '';
  qrCodeString: string = '';
  @Input() canvasId: string = 'qrcode-canvas';

  // Referencia al elemento canvas
  @ViewChild('qrcodeCanvas', { static: true }) qrcodeCanvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
   
  }

  buttonQr(): void{
    const qrcodeCanvas = this.qrcodeCanvasRef.nativeElement;
    QRCode.toCanvas(qrcodeCanvas, this.text || this.qrCodeString);
  }

  
  downloadQRCode() {
    const canvas = this.qrcodeCanvasRef.nativeElement;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = image;
    link.click();
  }
}
