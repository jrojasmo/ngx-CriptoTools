import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { MathService } from '../../common-services/math.service';
import { TextUtilService } from '../../common-services/text-util.service';
import { DialogoComponent } from '../../dialogo/dialogo.component';

@Component({
  selector: 'ngx-afin',
  styleUrls: ['./afin.component.scss'],
  templateUrl: './afin.component.html',
})
export class AfinComponent {

  
  textoCifradoForm1 = '';
  
  textoClaroForm2 = '';

  textoCifradoForm3 = '';

  analisis = [];

  tipoClave = 'doble';

  constructor(private dialogService: NbDialogService, private util: TextUtilService, private math: MathService) {}

  cifrar($event) {
    var textoCifrado = this.affineCipher($event.textoClaro, $event.clave);
    if (textoCifrado != 'error') {
      this.textoCifradoForm1 = textoCifrado;
    } else {
      this.showClaveIncorrecta();
    }
  }

  descifrar($event) {
    var textoClaro = this.affineDecipher($event.textoCifrado, $event.clave);
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
        content: 'En la clave, a y b deben ser valores entre 0 y 25, y a debe ser primo relativo con 26'
      },
    });
  }

  findInverseModSize(a, size) {
      var b = 1;
      while (b <= size - 1) {
          if ((a * b) % size == 1) return b;
          ++b;
      }
      return b;
  }

  affineCipher(clearText, key) {
      var size = 26;
      if (
          key[1] <= size - 1 &&
          key[1] >= 0 &&
          key[0] <= size - 1 &&
          key[0] >= 0 &&
          this.math.gcd(size, key[0]) == 1
      ) {
          var normalTextCodes = this.util.getCharCodes(
            this.util.normalizeInput(clearText),
              false
          );
          for (var i = 0; i < normalTextCodes.length; i++) {
              normalTextCodes[i] = (normalTextCodes[i] * key[0] + key[1]) % size;
          }
          return this.util.codesToString(normalTextCodes, true);
      }
      return "error";
  }

  affineDecipher(cipherText, key) {
      var size = 26;
      if (
          key[1] <= size - 1 &&
          key[1] >= 0 &&
          key[0] <= size - 1 &&
          key[0] >= 0 &&
          this.math.gcd(size, key[0]) == 1
      ) {
          var newKey = [...key];
          newKey[0] = this.findInverseModSize(key[0], size);
          newKey[1] = (size - ((key[1] * newKey[0]) % 26)) % size;
          return this.affineCipher(cipherText, newKey);
      }
      return "error";
  }

  getAllDeciphers(cipherText) {
      var size = 26;
      var deciphers = [];

      for (var i = 0; i < size; i++) {
          if (this.math.gcd(26, i) == 1) {
              for (var j = 0; j < size; j++) {
                var copy = (" " + cipherText).slice(1);
                var obj = {
                  data: { clave: JSON.stringify([i, j]), texto: this.affineDecipher(copy, [i, j]) }
                }
                deciphers.push(obj);
              }
          }
      }
      return deciphers;
  }

}
