import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogoComponent } from '../../dialogo/dialogo.component';

@Component({
  selector: 'ngx-tdes',
  styleUrls: ['./tdes.component.scss'],
  templateUrl: './tdes.component.html',
})
export class TDesComponent implements AfterViewInit{

  model1 = {
    clave1_ecb: '',
    clave2_ecb: '',
    clave1_cbc: '',
    clave2_cbc: '',
    clave1_ofb: '',
    clave2_ofb: '',
    clave1_cfb: '',
    clave2_cfb: '',
    clave1_ctr: '',
    clave2_ctr: '',
    iv1_cbc: '',
    iv2_cbc: '',
    iv1_ofb: '',
    iv2_ofb: '',
    iv1_cfb: '',
    iv2_cfb: '',
    iv1_ctr: '',
    iv2_ctr: '',
    lenkey1_ecb: 256,
    lenkey2_ecb: 256,
    lenkey1_cbc: 256,
    lenkey2_cbc: 256,
    lenkey1_ofb: 256,
    lenkey2_ofb: 256,
    lenkey1_cfb: 256,
    lenkey2_cfb: 256,
    lenkey1_ctr: 256,
    lenkey2_ctr: 256,
  }

  @ViewChild('canvas1_ecb')
  canvas1_ecb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector1_ecb')
  fileSelector1_ecb: ElementRef<HTMLInputElement>;

  @ViewChild('canvas2_ecb')
  canvas2_ecb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector2_ecb')
  fileSelector2_ecb: ElementRef<HTMLInputElement>;

  imagenClara_ecb: HTMLImageElement;

  imagenCifrada_ecb: HTMLImageElement;
  
  @ViewChild('downloadAnchor1_ecb')
  downloadAnchor1_ecb: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2_ecb')
  downloadAnchor2_ecb: ElementRef<HTMLAnchorElement>;

  @ViewChild('canvas1_cbc')
  canvas1_cbc: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector1_cbc')
  fileSelector1_cbc: ElementRef<HTMLInputElement>;

  @ViewChild('canvas2_cbc')
  canvas2_cbc: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector2_cbc')
  fileSelector2_cbc: ElementRef<HTMLInputElement>;

  imagenClara_cbc: HTMLImageElement;

  imagenCifrada_cbc: HTMLImageElement;
  
  @ViewChild('downloadAnchor1_cbc')
  downloadAnchor1_cbc: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2_cbc')
  downloadAnchor2_cbc: ElementRef<HTMLAnchorElement>;

  @ViewChild('canvas1_ofb')
  canvas1_ofb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector1_ofb')
  fileSelector1_ofb: ElementRef<HTMLInputElement>;

  @ViewChild('canvas2_ofb')
  canvas2_ofb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector2_ofb')
  fileSelector2_ofb: ElementRef<HTMLInputElement>;

  imagenClara_ofb: HTMLImageElement;

  imagenCifrada_ofb: HTMLImageElement;
  
  @ViewChild('downloadAnchor1_ofb')
  downloadAnchor1_ofb: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2_ofb')
  downloadAnchor2_ofb: ElementRef<HTMLAnchorElement>;

  @ViewChild('canvas1_cfb')
  canvas1_cfb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector1_cfb')
  fileSelector1_cfb: ElementRef<HTMLInputElement>;

  @ViewChild('canvas2_cfb')
  canvas2_cfb: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector2_cfb')
  fileSelector2_cfb: ElementRef<HTMLInputElement>;

  imagenClara_cfb: HTMLImageElement;

  imagenCifrada_cfb: HTMLImageElement;
  
  @ViewChild('downloadAnchor1_cfb')
  downloadAnchor1_cfb: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2_cfb')
  downloadAnchor2_cfb: ElementRef<HTMLAnchorElement>;

  @ViewChild('canvas1_ctr')
  canvas1_ctr: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector1_ctr')
  fileSelector1_ctr: ElementRef<HTMLInputElement>;

  @ViewChild('canvas2_ctr')
  canvas2_ctr: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector2_ctr')
  fileSelector2_ctr: ElementRef<HTMLInputElement>;

  imagenClara_ctr: HTMLImageElement;

  imagenCifrada_ctr: HTMLImageElement;
  
  @ViewChild('downloadAnchor1_ctr')
  downloadAnchor1_ctr: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2_ctr')
  downloadAnchor2_ctr: ElementRef<HTMLAnchorElement>;

  constructor(private dialogService: NbDialogService) {
    this.imagenClara_ecb = new Image();
    this.imagenCifrada_ecb = new Image();
    this.imagenClara_cbc = new Image();
    this.imagenCifrada_cbc = new Image();
    this.imagenClara_ofb = new Image();
    this.imagenCifrada_ofb = new Image();
    this.imagenClara_cfb = new Image();
    this.imagenCifrada_cfb = new Image();
    this.imagenClara_ctr = new Image();
    this.imagenCifrada_ctr = new Image();
  };

  ngAfterViewInit(): void {
    this.setLoadEvent(this.imagenClara_ecb, this.canvas1_ecb, this.downloadAnchor1_ecb);
    this.setLoadEvent(this.imagenCifrada_ecb, this.canvas2_ecb, this.downloadAnchor2_ecb);
    this.setLoadEvent(this.imagenClara_cbc, this.canvas1_cbc, this.downloadAnchor1_cbc);
    this.setLoadEvent(this.imagenCifrada_cbc, this.canvas2_cbc, this.downloadAnchor2_cbc);
    this.setLoadEvent(this.imagenClara_ofb, this.canvas1_ofb, this.downloadAnchor1_ofb);
    this.setLoadEvent(this.imagenCifrada_ofb, this.canvas2_ofb, this.downloadAnchor2_ofb);
    this.setLoadEvent(this.imagenClara_cfb, this.canvas1_cfb, this.downloadAnchor1_cfb);
    this.setLoadEvent(this.imagenCifrada_cfb, this.canvas2_cfb, this.downloadAnchor2_cfb);
    this.setLoadEvent(this.imagenClara_ctr, this.canvas1_ctr, this.downloadAnchor1_ctr);
    this.setLoadEvent(this.imagenCifrada_ctr, this.canvas2_ctr, this.downloadAnchor2_ctr);
  }

  setLoadEvent(imagen, canvas, anchor) {
    var canvas = canvas.nativeElement;
    var context = canvas.getContext('2d');
    imagen.addEventListener('load', function() {
      canvas.width = this.width;
      canvas.height = this.height;
      context.drawImage(this, 0, 0, canvas.width, canvas.height);
      anchor.nativeElement.href = canvas.toDataURL();
    }, false);
  }
  
  fileSelected($event, form) {
      $event.preventDefault();
      const fileList = $event.target.files;
      var imagen;
      var canvas;
      switch (form) {
        case 'ecb1':
          imagen = this.imagenClara_ecb;
          canvas = this.canvas1_ecb;
          break;
        case 'ecb2':
          imagen = this.imagenCifrada_ecb;
          canvas = this.canvas2_ecb;
          break;
        case 'cbc1':
          imagen = this.imagenClara_cbc;
          canvas = this.canvas1_cbc;
          break;
        case 'cbc2':
          imagen = this.imagenCifrada_cbc;
          canvas = this.canvas2_cbc;
          break;
        case 'ofb1':
          imagen = this.imagenClara_ofb;
          canvas = this.canvas1_ofb;
          break;
        case 'ofb2':
          imagen = this.imagenCifrada_ofb;
          canvas = this.canvas2_ofb;
          break;
        case 'cfb1':
          imagen = this.imagenClara_cfb;
          canvas = this.canvas1_cfb;
          break;
        case 'cfb2':
          imagen = this.imagenCifrada_cfb;
          canvas = this.canvas2_cfb;
          break;
        case 'ctr1':
          imagen = this.imagenClara_ctr;
          canvas = this.canvas1_ctr;
          break;
        case 'ctr2':
          imagen = this.imagenCifrada_ctr;
          canvas = this.canvas2_ctr;
          break;
          
      }
      this.readImage(fileList[0], imagen, canvas);
  }

  readImage(file, imgElement, canvas) {
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      var result = event.target.result.toString();
      imgElement.src = result;
    });
    reader.readAsDataURL(file);
  }

  limpiarCanvas(canvas) {
    const context = canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
  }

  matchExact(str, r) {
    r.lastIndex = 0;
    var match = str.match(r);
    return match && str === match[0];
  }

  cifrar(mode) {
    var canvas1, canvas2, anchor, password, lenKey, iv, arr;
    switch (mode) {
      case 'ecb':
        canvas1 = this.canvas1_ecb.nativeElement;
        canvas2 = this.canvas2_ecb.nativeElement;
        anchor = this.downloadAnchor2_ecb.nativeElement;
        password = this.model1.clave1_ecb;
        lenKey = this.model1.lenkey1_ecb;
        break;
      case 'cbc':
        canvas1 = this.canvas1_cbc.nativeElement;
        canvas2 = this.canvas2_cbc.nativeElement;
        anchor = this.downloadAnchor2_cbc.nativeElement;
        password = this.model1.clave1_cbc;
        lenKey = this.model1.lenkey1_cbc;
        iv = this.model1.iv1_cbc;
        break;
      case 'ofb':
        canvas1 = this.canvas1_ofb.nativeElement;
        canvas2 = this.canvas2_ofb.nativeElement;
        anchor = this.downloadAnchor2_ofb.nativeElement;
        password = this.model1.clave1_ofb;
        lenKey = this.model1.lenkey1_ofb;
        iv = this.model1.iv1_ofb;
        break;
      case 'cfb':
        canvas1 = this.canvas1_cfb.nativeElement;
        canvas2 = this.canvas2_cfb.nativeElement;
        anchor = this.downloadAnchor2_cfb.nativeElement;
        password = this.model1.clave1_cfb;
        lenKey = this.model1.lenkey1_cfb;
        iv = this.model1.iv1_cfb;
        break;
      case 'ctr':
        canvas1 = this.canvas1_ctr.nativeElement;
        canvas2 = this.canvas2_ctr.nativeElement;
        anchor = this.downloadAnchor2_ctr.nativeElement;
        password = this.model1.clave1_ctr;
        lenKey = this.model1.lenkey1_ctr;
        iv = this.model1.iv1_ctr;
        break;
    }
    //let Key = "aab803182736cfd4f5ba091b2736c8dd5ebc0415da362cdf";
    //let IV ="9bac677ebd445127";
    //let IV_CTR = "51a7b6c1e0000000";

    var re = /[0-9A-Fa-f]{48}/g;
    if (!this.matchExact(password, re)) {
      this.showClaveIncorrecta();
      return;
    }

    if (mode !== 'ecb') {
      var re2 = /[0-9A-Fa-f]*/g;
      if (!this.matchExact(iv, re2)) {
        this.showVectorInicialIncorrecto();
        return;
      } 
    }

    password = (this.Three_keys(password,this.P48,this.P56,this.shift_table));

    canvas2.width = canvas1.width;
    canvas2.height = canvas1.height;
    var context2 = canvas2.getContext('2d');
    context2.drawImage(canvas1, 0, 0);
    var scannedImage = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    var pix = scannedImage.data;

    switch (mode) {
      case 'ecb':
        this.CipherTDES_image_ECB(pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'cbc':
        this.CipherTDES_image_CBC(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'ofb':
        this.CipherTDES_image_OFB(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'cfb':
        this.CipherTDES_image_CFB(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'ctr':
        this.CipherTDES_image_CTR(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
    }
    
    context2.putImageData(scannedImage, 0, 0);

    anchor.href = canvas2.toDataURL();
  }

  descifrar(mode) {
    var canvas1, canvas2, anchor, password, lenKey, iv, arr;
    switch (mode) {
      case 'ecb':
        canvas1 = this.canvas1_ecb.nativeElement;
        canvas2 = this.canvas2_ecb.nativeElement;
        anchor = this.downloadAnchor1_ecb.nativeElement;
        password = this.model1.clave2_ecb;
        lenKey = this.model1.lenkey2_ecb;
        break;
      case 'cbc':
        canvas1 = this.canvas1_cbc.nativeElement;
        canvas2 = this.canvas2_cbc.nativeElement;
        anchor = this.downloadAnchor1_cbc.nativeElement;
        password = this.model1.clave2_cbc;
        lenKey = this.model1.lenkey2_cbc;
        iv = this.model1.iv2_cbc;
        break;
      case 'ofb':
        canvas1 = this.canvas1_ofb.nativeElement;
        canvas2 = this.canvas2_ofb.nativeElement;
        anchor = this.downloadAnchor1_ofb.nativeElement;
        password = this.model1.clave2_ofb;
        lenKey = this.model1.lenkey2_ofb;
        iv = this.model1.iv2_ofb;
        break;
      case 'cfb':
        canvas1 = this.canvas1_cfb.nativeElement;
        canvas2 = this.canvas2_cfb.nativeElement;
        anchor = this.downloadAnchor1_cfb.nativeElement;
        password = this.model1.clave2_cfb;
        lenKey = this.model1.lenkey2_cfb;
        iv = this.model1.iv2_cfb;
        break;
      case 'ctr':
        canvas1 = this.canvas1_ctr.nativeElement;
        canvas2 = this.canvas2_ctr.nativeElement;
        anchor = this.downloadAnchor1_ctr.nativeElement;
        password = this.model1.clave2_ctr;
        lenKey = this.model1.lenkey2_ctr;
        iv = this.model1.iv2_ctr;
        break;
    }
    //let Key = "aab803182736cfd4f5ba091b2736c8dd5ebc0415da362cdf";
    //let IV ="9bac677ebd445127";
    //let IV_CTR = "51a7b6c1e0000000";

    var re = /[0-9A-Fa-f]{48}/g;
    if (!this.matchExact(password, re)) {
      this.showClaveIncorrecta();
      return;
    }

    if (mode !== 'ecb') {
      var re2 = /[0-9A-Fa-f]*/g;
      if (!this.matchExact(iv, re2)) {
        this.showVectorInicialIncorrecto();
        return;
      } 
    }

    password = (this.Three_keys(password,this.P48,this.P56,this.shift_table));
    //password = this.strToArr(this.normalizeInput(password));
    //if (iv) iv = this.strToArr(this.normalizeInput(iv));

    canvas1.width = canvas2.width;
    canvas1.height = canvas2.height;
    var context1 = canvas1.getContext('2d');
    context1.drawImage(canvas2, 0, 0);
    var scannedImage = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    var pix = scannedImage.data;

    switch (mode) {
      case 'ecb':
        this.DecipherTDES_image_ECB(pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'cbc':
        this.DecipherTDES_image_CBC(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'ofb':
        this.DecipherTDES_image_OFB(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'cfb':
        this.DecipherTDES_image_CFB(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
      case 'ctr':
        this.DecipherTDES_image_CTR(iv, pix, this.P32, password, this.IPDES, this.IPIDES, this.E_PDES, this.S8BOX);
        break;
    }
    
    
    context1.putImageData(scannedImage, 0, 0);

    anchor.href = canvas1.toDataURL();
  }

  clearForm($event, form) {
    $event.preventDefault();
    var imagen;
    var canvas;
    var anchor;
    var fileSelector;
    switch (form) {
      case 'ecb1':
        imagen = this.imagenClara_ecb;
        canvas = this.canvas1_ecb;
        anchor = this.downloadAnchor1_ecb;
        fileSelector = this.fileSelector1_ecb;
        break;
      case 'ecb2':
        imagen = this.imagenCifrada_ecb;
        canvas = this.canvas2_ecb;
        anchor = this.downloadAnchor2_ecb;
        fileSelector = this.fileSelector2_ecb;
        break;
      case 'cbc1':
        imagen = this.imagenClara_cbc;
        canvas = this.canvas1_cbc;
        anchor = this.downloadAnchor1_cbc;
        fileSelector = this.fileSelector1_cbc;
        break;
      case 'cbc2':
        imagen = this.imagenCifrada_cbc;
        canvas = this.canvas2_cbc;
        anchor = this.downloadAnchor2_cbc;
        fileSelector = this.fileSelector2_cbc;
        break;
      case 'ofb1':
        imagen = this.imagenClara_ofb;
        canvas = this.canvas1_ofb;
        anchor = this.downloadAnchor1_ofb;
        fileSelector = this.fileSelector1_ofb;
        break;
      case 'ofb2':
        imagen = this.imagenCifrada_ofb;
        canvas = this.canvas2_ofb;
        anchor = this.downloadAnchor2_ofb;
        fileSelector = this.fileSelector2_ofb;
        break;
      case 'cfb1':
        imagen = this.imagenClara_cfb;
        canvas = this.canvas1_cfb;
        anchor = this.downloadAnchor1_cfb;
        fileSelector = this.fileSelector1_cfb;
        break;
      case 'cfb2':
        imagen = this.imagenCifrada_cfb;
        canvas = this.canvas2_cfb;
        anchor = this.downloadAnchor2_cfb;
        fileSelector = this.fileSelector2_cfb;
        break;
      case 'ctr1':
        imagen = this.imagenClara_ctr;
        canvas = this.canvas1_ctr;
        anchor = this.downloadAnchor1_ctr;
        fileSelector = this.fileSelector1_ctr;
        break;
      case 'ctr2':
        imagen = this.imagenCifrada_ctr;
        canvas = this.canvas2_ctr;
        anchor = this.downloadAnchor2_ctr;
        fileSelector = this.fileSelector2_ctr;
        break;
    }
    this.limpiarCanvas(canvas);
    imagen = new Image();
    this.setLoadEvent(imagen, canvas, anchor);
    fileSelector.nativeElement.value = null;
  }

  showClaveIncorrecta() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Clave Incorrecta',
        content: 'La clave debe ser un número hexadecimal de 48 dígitos'
      },
    });
  }

  showVectorInicialIncorrecto() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Vector Inicial Incorrecto',
        content: 'El vector inicial debe ser un número hexadecimal'
      },
    });
  }


  bin2hex2(b) {
    // Binary "b" to hexadecimal
    return b.match(/.{4}/g).reduce(function(acc, i) {
        return acc + parseInt(i, 2).toString(16);
    }, '')
  }
  hex2bin(h) {
      // Hexadecimal "h" to binary
      return h.split('').reduce(function(acc, i) {
          return acc + ('000' + parseInt(i, 16).toString(2)).substr(-4, 4);
      }, '')
  }
  convertNumber(n, fromBase, toBase) {
      // Change base of number n
      if (fromBase === void 0) {
        fromBase = 10;
      }
      if (toBase === void 0) {
        toBase = 10;
      }
      return parseInt(n.toString(), fromBase).toString(toBase);
  }
  digits_bin(number){
      //make a split and create one array to save bits
      var num = number;
      var digits = num.toString().split('');
      var realDigits = digits.map(Number)
      return realDigits;
  }
  permute(l1,l2,l3){ // l1 (index list), l2 (valor list), l3(new list)
      // Swap l2 with l1(index list), and save the new list in l3
      for(var i=0; i<= l1.length -1 ; i++){
          l3.push(l2[(l1[i]-1)]);
      }
      return l3;
  }
  ConvertToDecimal(num) {
      // Binary to decimal number
      let sum = 0;
      for (let i = 0; i < num.length; i++) {
        sum += +num[i] * 2 ** (num.length - 1 - i);}
      return sum;
  }
  Shift_c(list, number_shift){
      // Shift the elemnts of the list (number_shift) times of the left -
      //- in a circular fashion.
      for (let i = 0; i < number_shift; i++) {
          let list_m = []
          for (let j = 0; j < list.length; j++) {
              if (j===list.length-1){
                  list_m.push(list[0]);
              }else{
                  list_m.push(list[j+1]);
              }
          }
          list = list_m;
      }
      return list;        
  }
  array_f(list) {
      // Complete the list with zeros and transform HEXA str to BIN array
      var final_array = [];
      let list_2 = this.hex2bin(list);
      var add_z = 64 - list_2.length;
      for (let i = 0; i < add_z; i++) {
          final_array.push("0");        
      }
      for (let i = 0; i < list_2.length; i++) {
          final_array.push(list_2[i]);
      }
      return(final_array);  
  }
  xor_bin(v1,v2) {
      // Xor between V1 and V2
      let xor_list = []
      for (let i = 0; i < v1.length ; i++) {
          var val_mod = ((parseInt(v1[i],10)+parseInt(v2[i],10))%2);
          xor_list.push(val_mod.toString());}
      return xor_list; 
  }
  Three_keys(original_key,P48,P56,shift_table) {
      //Create K_1, K_2, K_3 arrays for TDES
      var key_1 = original_key.slice(0,16);
      var key_2 = original_key.slice(16,32);
      var key_3 = original_key.slice(32,48);
      var set_key_1 = this.key_generator(key_1,P48,P56,shift_table);
      var set_key_2 = this.key_generator(key_2,P48,P56,shift_table);
      var set_key_3 = this.key_generator(key_3,P48,P56,shift_table);
      var Key_1_2_3 = [set_key_1,set_key_2,set_key_3];
      return Key_1_2_3;
  }
  key_generator(key,P48,P56,shift_table){    
      // Generate the list of 16 keys with the process of generating keys in DES 
      let listP56 = [];
      let keys_c = [];
      let keys_d = [];
      let key_list = this.hex2bin(key);
      listP56 = this.permute(P56,key_list,listP56);
      var left_k = listP56.slice(0,28);
      var right_k = listP56.slice(28,57);
      for (let i = 0; i <= 15 ; i++) {
          let K = []
          left_k = this.Shift_c(left_k,shift_table[i]);
          right_k = this.Shift_c(right_k,shift_table[i]);
          var preP48 = left_k.concat(right_k);
          keys_c.push(this.permute(P48,preP48,K));
          K = [];
          keys_d.unshift(this.permute(P48,preP48,K));
      }
      var Keys_t = [keys_c,keys_d];
      return Keys_t
  }
  CTR_plus(IV_CTR){
      // 36 bits for IV & 28 bits for COUNTER
      IV_CTR = this.array_f(IV_CTR);
      var left_IV = IV_CTR.slice(0,36);
      var right_IV = IV_CTR.slice(36,65);
      var Decimal_ctr = this.ConvertToDecimal(right_IV.join(''));
      Decimal_ctr++ ;
      var bin_ctr_array = this.convertNumber(Decimal_ctr,10,2).split("");
      while (bin_ctr_array.length != 28) {
          bin_ctr_array.unshift('0')
      }
      var comp_ctr_IV = left_IV.concat(bin_ctr_array);
      var new_IV = this.bin2hex2(comp_ctr_IV.join(''));
      return(new_IV);    
  }
  CipherDES(PlainText, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
      var PlainText2 = this.array_f(PlainText);
      let cipher_text = [];
      let PT_IP64 = [];
      let m_left_pt=[];
      let m_right_pt=[];
      var left_pt = [];
      var right_pt = [];
      PT_IP64 = this.permute(IPDES, PlainText2, PT_IP64);
      left_pt = PT_IP64.slice(0,32);
      right_pt = PT_IP64.slice(32,65);
      for (let nr = 0; nr < 16; nr++){
          let EP_48 = [];
          let EP_32 = [];
          EP_48 = this.permute(E_PDES, right_pt, EP_48);
          var Xor48 =  this.xor_bin(EP_48,Keys_t[nr]);
          let SBOX_array = []
          for (let i = 0; i < 8; i++) {
              let row1 = [];
              row1 = [Xor48[i*6],Xor48[(i*6)+5]]
              var row = row1.join('');
              var val_row = this.ConvertToDecimal(row);
              let col1 = [];
              col1 = [Xor48[(i*6)+1],Xor48[(i*6)+2],Xor48[(i*6)+3],Xor48[(i*6)+4]];
              var col = col1.join('');
              var val_col = this.ConvertToDecimal(col);
              var take_val = S8BOX[i][val_row][val_col];
              var bin_val = this.convertNumber(take_val, 10, 2);
              if (bin_val.length===4){
                  SBOX_array.push(bin_val[0],bin_val[1],bin_val[2],bin_val[3])   ;         
              }else if (bin_val.length===3){
                  SBOX_array.push("0");
                  SBOX_array.push(bin_val[0],bin_val[1],bin_val[2]);
              }else if (bin_val.length===2){
                  SBOX_array.push("0");
                  SBOX_array.push("0");
                  SBOX_array.push(bin_val[0],bin_val[1]);
              }else{
                  SBOX_array.push("0");
                  SBOX_array.push("0");
                  SBOX_array.push("0");
                  SBOX_array.push(bin_val[0]);
              }       
          }
          EP_32 = this.permute(P32,SBOX_array,EP_32);
          var final_xor = this.xor_bin(left_pt,EP_32);
          left_pt = final_xor;
          if (nr!=15) {
              m_right_pt = right_pt;
              m_left_pt = left_pt;
              left_pt = m_right_pt;
              right_pt = m_left_pt;
          }
      }
      var pre_cipher_text = left_pt.concat(right_pt);
      cipher_text=this.permute(IPIDES,pre_cipher_text,cipher_text);
      var cipher_text_hexa = this.bin2hex2(cipher_text.join(''));
      return cipher_text_hexa;
  }
  DecipherDES(CipherText, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
      var decipher_text = this.CipherDES(CipherText, P32, Keys_t[1], IPDES, IPIDES, E_PDES, S8BOX);
      return decipher_text;
  }
  Cipher_TDES(PlainText, P32, Key, IPDES, IPIDES, E_PDES, S8BOX) {
      var KEY_1 = Key[0];
      var KEY_2 = Key[1];
      var KEY_3 = Key[2];
      var out1 = this.CipherDES(PlainText, P32, KEY_1[0], IPDES, IPIDES, E_PDES, S8BOX);
      var out2 = this.DecipherDES(out1, P32, KEY_2, IPDES, IPIDES, E_PDES, S8BOX);
      var Cipher_text_TDES = this.CipherDES(out2, P32, KEY_3[0], IPDES, IPIDES, E_PDES, S8BOX);
      return(Cipher_text_TDES);
  }
  Decipher_TDES(CipherText, P32, Key, IPDES, IPIDES, E_PDES, S8BOX) {
      var KEY_1 = Key[0];
      var KEY_2 = Key[1];
      var KEY_3 = Key[2];
      var out1 = this.DecipherDES(CipherText, P32, KEY_3, IPDES, IPIDES, E_PDES, S8BOX);
      var out2 = this.CipherDES(out1, P32, KEY_2[0], IPDES, IPIDES, E_PDES, S8BOX);
      var Decipher_text_TDES = this.DecipherDES(out2, P32, KEY_1, IPDES, IPIDES, E_PDES, S8BOX);
      return(Decipher_text_TDES);
  }

  //------------------------------------ ECB -------------------------------------------

  CipherTDES_image_ECB(scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <=scannedData.length-10; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var Pl_txt_hexa = this.bin2hex2(Pl_txt.join(''));
                var cipher_pixels = this.Cipher_TDES(Pl_txt_hexa, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  };
  DecipherTDES_image_ECB(scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX){
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <= scannedData.length-10 ; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var Pl_txt_hexa = this.bin2hex2(Pl_txt.join(''));
                var cipher_pixels = this.Decipher_TDES(Pl_txt_hexa, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  }

  // --------------------------------- CBC -----------------------------------------------------

  CipherTDES_image_CBC(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
    var IV_bin = this.array_f(IV);
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <=scannedData.length-10; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                Pl_txt = this.xor_bin(Pl_txt,IV_bin);
                var Pl_txt_hexa = this.bin2hex2(Pl_txt.join(''));
                var cipher_pixels = this.Cipher_TDES(Pl_txt_hexa, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                IV_bin = ci_pi2;
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  };
  DecipherTDES_image_CBC(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX){
    var IV_bin = this.array_f(IV);
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <= scannedData.length-10 ; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var Pl_txt_hexa = this.bin2hex2(Pl_txt.join(''));
                var cipher_pixels = this.Decipher_TDES(Pl_txt_hexa, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                ci_pi2 = this.xor_bin(IV_bin,ci_pi2);
                IV_bin = Pl_txt;
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  }
  // --------------------------------- CFB -----------------------------------------------------
  CipherTDES_image_CFB(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
    //IV = array_f(IV);
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <=scannedData.length-10; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var cipher_pixels = this.Cipher_TDES(IV, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                ci_pi2 = this.xor_bin(ci_pi2,Pl_txt);
                IV = this.bin2hex2(ci_pi2.join(''));
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  };
  DecipherTDES_image_CFB(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX){
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <= scannedData.length-10 ; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var cipher_pixels = this.Cipher_TDES(IV, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                var ci_pi2 = this.array_f(cipher_pixels);
                var ci_pi2 = this.xor_bin(ci_pi2,Pl_txt);
                var IV = this.bin2hex2(Pl_txt.join(''));
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  }
  // --------------------------------- OFB -----------------------------------------------------
  CipherTDES_image_OFB(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <=scannedData.length-10; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var cipher_pixels = this.Cipher_TDES(IV, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                IV = cipher_pixels;
                var ci_pi2 = this.array_f(cipher_pixels);
                ci_pi2 = this.xor_bin(ci_pi2,Pl_txt);
                
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  };
  DecipherTDES_image_OFB(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX){
    scannedData = this.CipherTDES_image_OFB(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX)
    return scannedData;
  }
  // --------------------------------- CTR -----------------------------------------------------

  CipherTDES_image_CTR(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX) {
    var sup_sd = 0;
    var cont = 0;
    let pl_txt_verification = [];
    let array_8 = [];
    let Pl_txt = [];
    let index_array = [];
    var cont2 = 0;
    for (let i = 0; i <=scannedData.length-10; i+=1) {
        if (!((i+1)%4===0)){
            index_array.push(i);       
            cont2++;
            var Set_1_8 = this.convertNumber(scannedData[i],10,2);
            pl_txt_verification.push(Set_1_8);     
            if (cont2===8) {
                for (let i = 0; i < 8; i++) {
                    array_8 = pl_txt_verification[i].split("");
                    while (array_8.length < 8){
                        array_8.unshift("0");                    
                    }
                    for (let j = 0; j < 8; j++) {
                        Pl_txt.push(array_8[j]);
                    }
                }
                var cipher_pixels = this.Cipher_TDES(IV, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX);
                IV = this.CTR_plus(IV);
                var ci_pi2 = this.array_f(cipher_pixels);
                ci_pi2 = this.xor_bin(ci_pi2,Pl_txt);
                for (let j = 0; j < 8; j++) {
                    var color_c1 = ci_pi2.slice(j*8,(j*8)+8);
                    var color_c = color_c1.join('');
                    var color_c_d = this.convertNumber(color_c,2,10);
                    scannedData[index_array[j]]=color_c_d;
                }
                index_array = [];
                pl_txt_verification = [];
                array_8 = [];
                Pl_txt = [];
                cont2 = 0;
            }
        }
    }
    console.log(scannedData);
    return scannedData;
  };
  DecipherTDES_image_CTR(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX){
    scannedData = this.CipherTDES_image_CTR(IV, scannedData, P32, Keys_t, IPDES, IPIDES, E_PDES, S8BOX)
    return scannedData;
  }
    
  

P56 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18,  // P56 without pos 8 16 24 32 40 48 56 64
    10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ]
shift_table = [1, 1, 2, 2, 2, 2, 2, 2,
        1, 2, 2, 2, 2, 2, 2, 1 ]
P48 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10,
        23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2,
    	41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48,
	    44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ]
// 64 Table of Position of 64 bits at initial level: Initial Permutation Table
IPDES = [58, 50, 42, 34, 26, 18, 10, 2,	60, 52, 44, 36, 28, 20, 12, 4,
		62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8,
		57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
		61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7]
// 64 Final Permutation Table
IPIDES = [ 40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31,
			38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29,
			36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27,
			34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25 ]
// 48 Expansion D-box Table
E_PDES = [32, 1 , 2 , 3 , 4 , 5 , 4 , 5, 6 , 7 , 8 , 9 , 8 , 9 , 10, 11,
		12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21,
		22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1 ]
// Straight Permutation Table
P32 = [ 16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10,
		2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25 ]
// S-box Table
S8BOX = [[[14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],[ 0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
		[ 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],[15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13 ]], 	
		[[15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],[3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
		[0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],[13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9 ]],
		[ [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],[13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
		[13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],[1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12 ]],
		[ [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],[13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
		[10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],[3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14] ],
		[ [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],[14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
		[4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],[11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3 ]],
		[ [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],[10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
		[9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],[4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13] ],
		[ [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],[13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
		[1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],[6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12] ],
		[ [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],[1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
		[7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],[2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11] ] ]


}