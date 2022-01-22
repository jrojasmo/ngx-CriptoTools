import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TextUtilService } from '../../common-services/text-util.service';
import { DialogoComponent } from '../../dialogo/dialogo.component';

@Component({
  selector: 'ngx-desplazamiento',
  styleUrls: ['./desplazamiento.component.scss'],
  templateUrl: './desplazamiento.component.html',
})
export class DesplazamientoComponent {

  
  textoCifradoForm1 = '';
  
  textoClaroForm2 = '';

  textoCifradoForm3 = '';

  analisis = [];

  constructor(private dialogService: NbDialogService, private util: TextUtilService) {}

  cifrar($event) {
    var textoCifrado = this.shiftCipher($event.textoClaro, $event.clave);
    if (textoCifrado != 'error') {
      this.textoCifradoForm1 = textoCifrado;
    } else {
      this.showClaveIncorrecta();
    }
  }

  descifrar($event) {
    var textoClaro = this.shiftDecipher($event.textoCifrado, $event.clave);
    if (textoClaro != "error") {
      this.textoClaroForm2 = textoClaro;
    } else {
      this.showClaveIncorrecta();
    }
  }

  analizar(textoCifrado) {
    if (textoCifrado != '') {
      this.analisis = this.getAllDeciphers(textoCifrado);
    }
  }

  clearForm(formIndex) {
    if (formIndex == 1) {
      this.textoCifradoForm1 = '';
    } else if (formIndex == 2) {
      this.textoClaroForm2 = '';
    } else if (formIndex == 3) {
      this.textoCifradoForm3 = '';
      this.analisis = [];
    }
  }  

  showClaveIncorrecta() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Clave Incorrecta',
        content: 'La clave debe ser un número entre 0 y 25'
      },
    });
  }
  

  shiftCipher(clearText, key) {
      var size = 26;
      if (key <= size - 1 && key >= 0) {
          var normalTextCodes = this.util.getCharCodes( this.util.normalizeInput(clearText), false);
          for (var i = 0; i < normalTextCodes.length; i++) {
              normalTextCodes[i] = (normalTextCodes[i] + key) % size;
          }
          var res = this.util.codesToString(normalTextCodes, true);
          return  res;
      }
      return "error";
  }

  shiftDecipher(cipherText, key) {
    var size = 26;
    if (key <= size - 1 && key >= 0) {
        return this.shiftCipher(cipherText, Math.abs(size - key) % size);
    }
    return "error";
  }

  getAllDeciphers(cipherText) {
      var size = 26;
      var deciphereds = [];
      for (var i = 0; i < size; i++) {
          var obj = {
            data: { clave: i, texto: this.shiftDecipher(cipherText, i) }
          }
          deciphereds.push(obj);
      }
      return deciphereds;
  }

}
