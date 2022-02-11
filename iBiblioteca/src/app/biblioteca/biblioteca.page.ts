import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { Libro } from './libro.interface';
import { LibrosService } from './libros.service';
import { scaner } from './scan.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  encodedData: any;
  mostrar:boolean = false;
  scannedBarCode: scaner;
  barcodeScannerOptions: BarcodeScannerOptions;


  libros:Libro[] = [];
  termino: string='';
  constructor(private librosService:LibrosService,private scanner: BarcodeScanner, private router:Router) {
    this.encodedData = "Programming isn't about what you know";

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
   }

  ngOnInit() {

  }

  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res;
        this.mostrar=true;

        this.router.navigate(['/detalle',this.scannedBarCode.text]);
      }).catch(err => {
        alert(err);
      });
  }

  getLibros(termino:string){
    this.termino=termino;
    this.librosService.getLibros(this.termino).subscribe(datos =>{
      this.libros = datos.docs;
    });
  }

}
