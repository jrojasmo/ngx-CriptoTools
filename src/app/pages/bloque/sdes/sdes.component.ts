import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogoComponent } from '../../dialogo/dialogo.component';
import { TextUtilService } from '../../common-services/text-util.service';

@Component({
  selector: 'ngx-sdes',
  styleUrls: ['./sdes.component.scss'],
  templateUrl: './sdes.component.html',
})
export class SDesComponent {

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

  constructor(private dialogService: NbDialogService, private util: TextUtilService) {}

  matchExact(str, r) {
    r.lastIndex = 0;
    var match = str.match(r);
    return match && str === match[0];
  }

  cifrar(textoClaro, clave) {
    //textoClaro = this.util.normalizeInput(textoClaro);
    var re2 = /[0-1]{8}/g;
    if (!this.matchExact(textoClaro, re2)) {
      this.showTextoIncorrecto();
      return;
    }
    var re = /[0-1]{10}/g;
    if (!this.matchExact(clave, re)) {
      this.showClaveIncorrecta();
      return;
    }
    var K_1 = (this.key_generator1_2(clave, this.P10, this.P8))[0];
    var K_2 = (this.key_generator1_2(clave, this.P10, this.P8))[1];
    this.model1.textoCifrado = this.SDES_cipher(this.IP, this.E_P, this.S_0, this.S_1, this.P4, K_1, K_2, textoClaro, this.IPI);
  }

  descifrar(textoCifrado, clave) {
    var re2 = /[0-1]{8}/g;
    if (!this.matchExact(textoCifrado, re2)) {
      this.showTextoIncorrecto();
      return;
    }
    var re = /[0-1]{10}/g;
    if (!this.matchExact(clave, re)) {
      this.showClaveIncorrecta();
      return;
    }
    var K_1 = (this.key_generator1_2(clave, this.P10, this.P8))[0];
    var K_2 = (this.key_generator1_2(clave, this.P10, this.P8))[1];
    this.model2.textoClaro = this.SDES_decipher(this.IP, this.E_P, this.S_0, this.S_1, this.P4, K_1, K_2, textoCifrado, this.IPI);
  }

  generarClave($event, model) {
    $event.preventDefault();
    let alphabet_arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let key_cipher = alphabet_arr.sort(function () { return Math.random() - 0.5 }); // Array alphabeto desordenado "KEY ALEATORIA"
    model.claveString = this.util.normalizeInput(JSON.stringify(key_cipher));
    console.log('clave generada: '+model.claveString);
  }

  

  clearForm($event, model) {
    $event.preventDefault();
    model.textoClaro = '';
    model.textoCifrado = '';
    model.claveString = '';
  }

  showClaveIncorrecta() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Clave Incorrecta',
        content: 'La clave debe ser un número binario de 10 dígitos'
      },
    });
  }
  
  showTextoIncorrecto() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Texto Incorrecto',
        content: 'El texto debe ser un número binario de 8 dígitos'
      },
    });
  }

  ConvertToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = Math.floor(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
  }
  ConvertToDecimal(num) {
      let sum = 0;
      for (let i = 0; i < num.length; i++) {
        sum += +num[i] * 2 ** (num.length - 1 - i);}
      return sum;
  }
  digits_bin(number){
      var num = number;
      var digits = num.toString().split('');
      var realDigits = digits.map(Number)
      return realDigits;
  }
  xor_bin(v1,v2) {
      let xor_list = []
      for (let i = 0; i < v1.length ; i++) {
          var val_mod = ((parseInt(v1[i],10)+parseInt(v2[i],10))%2);
          xor_list.push(val_mod.toString());}
      return xor_list; 
  }
  key_generator1_2(key,P10,P8){
      let key_list = this.digits_bin(key);
      let P10Key = [];
      let CI1 = [];
      let CI2 = [];
      let Key_1 = [];
      let Key_2 = [];
      for(var i=0; i <= key_list.length -1 ; i++){
          P10Key.push(key_list[(P10[i]-1)]);}
      CI1 = [P10Key[1],P10Key[2],P10Key[3],P10Key[4],P10Key[0],P10Key[6],P10Key[7],P10Key[8],P10Key[9],P10Key[5]];
      for(var j=0; j <= P8.length -1 ; j++){
          Key_1.push(CI1[(P8[j]-1)]);}
      CI2 = [CI1[2],CI1[3],CI1[4],CI1[0],CI1[1],CI1[7],CI1[8],CI1[9],CI1[5],CI1[6]];
      for(var j=0; j <= P8.length -1 ; j++){
          Key_2.push(CI2[(P8[j]-1)]);}
      let Two_Keys = [Key_1,Key_2];
      return Two_Keys;
  }
  functionX (Left ,Right, E_P, S_0, S_1, P4, KeyT){
      let EP_step = [];
      let P4_step = [];
      let S_part = [];
      let S_part2 = [];
      for(var i=0; i <= E_P.length-1 ; i++){
          EP_step.push(Right[(E_P[i]-1)]);}
      var xor = this.xor_bin(EP_step,KeyT);
      let L1_xor1 = [xor[0],xor[3]];
      let L2_xor1 = [xor[1],xor[2]];
      var L1_xor = L1_xor1.join('');
      var L2_xor = L2_xor1.join('');
      let R1_xor1 = [xor[4],xor[7]];
      let R2_xor1 = [xor[5],xor[6]]
      var R1_xor = R1_xor1.join('');
      var R2_xor = R2_xor1.join('');
      S_part = [(S_0[this.ConvertToDecimal(L1_xor)][this.ConvertToDecimal(L2_xor)]),(S_1[this.ConvertToDecimal(R1_xor)][this.ConvertToDecimal(R2_xor)])];
      for (let i = 0; i < 3; i++) {
          var at = S_part[i]
          if (at === 0) {
              S_part2.push(0);
              S_part2.push(0);
          } else if(at === 1){
              S_part2.push(0);
              S_part2.push(1);
          } else if(at === 2){
              S_part2.push(1);
              S_part2.push(0);
          } else{
              S_part2.push(1);
              S_part2.push(1);}}
      for(var i=0; i <= P4.length-1 ; i++){
          P4_step.push(S_part2[(P4[i]-1)]);}
      var xor2 = this.xor_bin(P4_step,Left);
      return xor2;
  }

  convertFromHex(hex) {
      var hex = hex.toString();//force conversion
      var str = '';
      for (var i = 0; i < hex.length; i += 2)
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      return str;
  }
  convertToHex(str) {
      var hex = '';
      for(var i=0;i<str.length;i++) {
          hex += ''+str.charCodeAt(i).toString(16);
      }
      return hex;
  }
  SDES_cipher(IP, E_P, S_0, S_1, P4, K_1, K_2, PlainText, IPI){
      let PlainTextDigits = this.digits_bin(PlainText);
      while (PlainTextDigits.length != 8){
          PlainTextDigits.unshift(0);
      }
      let stepIP = [];
      let cipherSDES = [];
      for(var i=0; i <= IP.length-1 ; i++){
          stepIP.push(PlainTextDigits[(IP[i]-1)]);}
      var RightC = [stepIP[4],stepIP[5],stepIP[6],stepIP[7]];
      var LeftC = [stepIP[0],stepIP[1],stepIP[2],stepIP[3]];
      var NewRight = this.functionX(LeftC,RightC,E_P,S_0,S_1,P4,K_1);
      var NewLeft = RightC;
      NewLeft = this.functionX(NewLeft,NewRight,E_P,S_0,S_1,P4,K_2);
      var preIPinv = NewLeft.concat(NewRight);
      for(var i=0; i <= IPI.length-1 ; i++){
          cipherSDES.push(preIPinv[(IPI[i]-1)]);}
      var cipherSDES1 = cipherSDES.join('');
      return cipherSDES1;
  }

  SDES_decipher(IP, E_P, S_0, S_1, P4, K_1, K_2, PlainText, IPI){
      var decipherSDES = this.SDES_cipher(IP, E_P, S_0, S_1, P4, K_2, K_1, PlainText, IPI);
      return decipherSDES;
  }

  P10 = [3,5,2,7,4,10,1,9,8,6];
  P8  = [6,3,7,4,8,5,10,9];
  IP = [2,6,3,1,4,8,5,7];
  IPI = [4,1,3,5,7,2,8,6];
  E_P = [4,1,2,3,2,3,4,1];
  P4 = [2,4,3,1];
  S_0 = [[1,0,3,2],[3,2,1,0],[0,2,1,3],[3,1,3,2]];
  S_1 = [[0,1,2,3],[2,0,1,3],[3,0,1,0],[2,1,0,3]];

}
