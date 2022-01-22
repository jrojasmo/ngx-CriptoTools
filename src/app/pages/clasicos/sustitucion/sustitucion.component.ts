import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TextUtilService } from '../../common-services/text-util.service';
import { DialogoComponent } from '../../dialogo/dialogo.component';

@Component({
  selector: 'ngx-sustitucion',
  styleUrls: ['./sustitucion.component.scss'],
  templateUrl: './sustitucion.component.html',
})
export class SustitucionComponent {

  model1 = {
    textoClaro: '',
    claveString: '',
    textoCifrado: ''
  }
  
  model2 = {
    textoCifrado: '',
    claveString: '',
    textoClaro: ''
  }

  model3 = {
    textoCifrado: '',
    monogramas: [],
    digramas: [],
    trigramas: [],
    cuatrigramas: []
  }

  monogramasColumns = ['monograma', 'frecuencia'];
  digramasColumns = ['digrama', 'frecuencia'];
  trigramasColumns = ['trigrama', 'frecuencia'];
  cuatrigramasColumns = ['cuatrigrama', 'frecuencia'];

  // Si no se da una Key el progarama asigna una automáticamente, por ejemplo:  'a','s','o','h','b','i','e','y',... (El alfabeto desordenado)

  plaintext = 'this is a plaintext'; // INPUT TEXTO PLANO          ---------------------INPUT1---------------------------
  key_substitution = '';             // INPUT KEY (No Necesaria)     ---------------------INPUT2---------------------------
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  arr_plaintext = this.plaintext.split(''); /// Array texto plano

  constructor(private dialogService: NbDialogService, private util: TextUtilService) {}

  cifrar(textoClaro, clave) {
    textoClaro = this.util.normalizeInput(textoClaro);
    if (this.verification_key(clave) != 'error') {
      this.model1.textoCifrado = this.util.normalizeInput(this.cipher(textoClaro, this.alphabet, clave));
    } else {
      this.showClaveIncorrecta();
    }
  }

  descifrar(textoCifrado, clave) {
    if (this.verification_key(clave) != 'error') {
      this.model2.textoClaro = this.util.normalizeInput(this.decipher_with_key(textoCifrado, this.alphabet, clave));
    } else {
      this.showClaveIncorrecta();
    }
  }

  generarClave($event, model) {
    $event.preventDefault();
    let alphabet_arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let key_cipher = alphabet_arr.sort(function () { return Math.random() - 0.5 }); // Array alphabeto desordenado "KEY ALEATORIA"
    model.claveString = this.util.normalizeInput(JSON.stringify(key_cipher));
    console.log('clave generada: '+model.claveString);
  }

  obtenerFrecuencias(textoCifrado) {
    if (textoCifrado != '') {
      var frecuencias = this.getFrequencies(textoCifrado);
      var monogramas = frecuencias[0];
      var datosMonogramas = [];
      var digramas = frecuencias[1];
      var datosDigramas = [];
      var trigramas = frecuencias[2];
      var datosTrigramas = [];
      var cuatrigramas = frecuencias[3];
      var datosCuatrigramas = [];

      for (var i = 0; i < monogramas.length; i++) {
        var obj = {
          data: { monograma: monogramas[i][0], frecuencia: monogramas[i][1] }
        }
        datosMonogramas.push(obj);
      }

      for (var i = 0; i < digramas.length; i++) {
        var obj2 = {
          data: { digrama: digramas[i][0], frecuencia: digramas[i][1] }
        }
        datosDigramas.push(obj2);
      }

      for (var i = 0; i < trigramas.length; i++) {
        var obj3 = {
          data: { trigrama: trigramas[i][0], frecuencia: trigramas[i][1] }
        }
        datosTrigramas.push(obj3);
      }

      for (var i = 0; i < cuatrigramas.length; i++) {
        var obj4 = {
          data: { cuatrigrama: cuatrigramas[i][0], frecuencia: cuatrigramas[i][1] }
        }
        datosCuatrigramas.push(obj4);
      }
      
      
      this.model3.monogramas = datosMonogramas;
      this.model3.digramas = datosDigramas;
      this.model3.trigramas = datosTrigramas;
      this.model3.cuatrigramas = datosCuatrigramas;
    }

  }

  clearForm($event, model) {
    $event.preventDefault();
    model.textoClaro = '';
    model.textoCifrado = '';
    model.claveString = '';
  }

  clearForm3($event) {
    $event.preventDefault();
    this.model3.textoCifrado = '';
    this.model3.monogramas = [];
    this.model3.digramas = [];
    this.model3.trigramas = [];
    this.model3.cuatrigramas = [];
  }

  showClaveIncorrecta() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Clave Incorrecta',
        content: 'La clave debe ser una permutación del alfabeto inglés como: woaplhqgdbcvizktjsenfmxruy'
      },
    });
  }

  verification_key(key_substitution) {
    key_substitution = this.util.normalizeInput(key_substitution);
    let key_substitution_arr = key_substitution.split('');
    let alphabet_key_arrset = new Set(key_substitution_arr);
    if (alphabet_key_arrset.size === 26) {
      return 'ok';
    }
    else {
      return 'error';
    }
  }
  cipher(arr_plaintext, alphabet, alphabet_key) { // FUNCION QUE CIFRA ----- ENTRADAS: (TEXTO PLANO - ALFABETO - KEY) ----- SALIDA: (TEXTO CIFRADO)
      var ciphertext_array = [];
      console.log(alphabet_key)
      for (let i in arr_plaintext) {
          if (arr_plaintext[i] != " ") {
              let ind = alphabet.indexOf(arr_plaintext[i]);
              ciphertext_array.push(alphabet_key[ind]);
          }
      }
      const ciphertext = ciphertext_array.join('').toUpperCase();
      return ciphertext; // Retorna texto cifrado ---STRING---
  }

  decipher_with_key(ciphertext, alphabet, alphabet_key) { // FUNCION QUE DECIFRA ----- ENTRADAS: (TEXTO CIFRADO - ALFABETO - KEY) ----- SALIDA: (TEXTO DECIFRADO)  
      ciphertext = ciphertext.toLowerCase();
      let arr_ciphertext = ciphertext.split('');
      let deciphertext_array = [];
      for (var i in arr_ciphertext) {
          var ind = alphabet_key.indexOf(arr_ciphertext[i]);
          deciphertext_array.push(alphabet[ind]);
      }
      const deciphertext = deciphertext_array.join('');
      return deciphertext; // Retorna texto decifrado ---STRING---
  }


  /*
  console.log(alphabet);
  const key_system = verification_key(key_substitution)

  console.log(cipher(arr_plaintext, alphabet, key_system))

  let ciphertext = cipher(arr_plaintext, alphabet, key_system);

  console.log(decipher_with_key(ciphertext, alphabet, key_system));
  */

  getFrequencies(ciphertext) {
    ciphertext = ciphertext.toLowerCase();
    var map = new Map();
    var frequencyArr = [];
    for (var j = 1; j <= 4; ++j) {
        map = new Map();
        var array = [];
        for (var i = 0; i < ciphertext.length - j + 1; i++) {
            var copy = (" " + ciphertext).slice(1);
            var substring = copy.slice(i, i + j);
            if (map.get(substring) != undefined) {
                array[map.get(substring)][1]++;
            } else {
                array.push([substring, 1]);
                map.set(substring, array.length - 1);
            }
        }
        array.sort(function (a, b) {
            if (a[1] == b[1]) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });
        frequencyArr.push(array);
    }
    return frequencyArr;
}

}
