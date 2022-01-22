import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogoComponent } from '../../dialogo/dialogo.component';
import './extend-string';
import { Aes } from './aes';

@Component({
  selector: 'ngx-aes',
  styleUrls: ['./aes.component.scss'],
  templateUrl: './aes.component.html',
})
export class AesComponent implements AfterViewInit{

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
    password = this.strToArr(this.normalizeInput(password));
    if (iv) iv = this.strToArr(this.normalizeInput(iv));
    console.log('iv cifrado: '+iv);
    canvas2.width = canvas1.width;
    canvas2.height = canvas1.height;
    var context2 = canvas2.getContext('2d');
    context2.drawImage(canvas1, 0, 0);
    var scannedImage = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    var pix = scannedImage.data;

    switch (mode) {
      case 'ecb':
        arr = this.addAlpha(this.encryptECB(this.removeAlpha(pix), password, lenKey));
        break;
      case 'cbc':
        arr = this.addAlpha(this.encryptCBC(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'ofb':
        arr = this.addAlpha(this.encryptOFB(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'cfb':
        arr = this.addAlpha(this.encryptCFB(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'ctr':
        arr = this.addAlpha(this.encryptCTR(this.removeAlpha(pix), password, lenKey, iv));
        break;
    }
    
    for (var i = 0; i < pix.length; i++) { pix[i] = arr[i]; }
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
    password = this.strToArr(this.normalizeInput(password));
    if (iv) iv = this.strToArr(this.normalizeInput(iv));
    console.log('iv descifrado: '+iv);
    canvas1.width = canvas2.width;
    canvas1.height = canvas2.height;
    var context1 = canvas1.getContext('2d');
    context1.drawImage(canvas2, 0, 0);
    var scannedImage = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    var pix = scannedImage.data;

    switch (mode) {
      case 'ecb':
        arr = this.addAlpha(this.decryptECB(this.removeAlpha(pix), password, lenKey));
        break;
      case 'cbc':
        arr = this.addAlpha(this.decryptCBC(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'ofb':
        arr = this.addAlpha(this.decryptOFB(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'cfb':
        arr = this.addAlpha(this.decryptCFB(this.removeAlpha(pix), password, lenKey, iv));
        break;
      case 'ctr':
        arr = this.addAlpha(this.decryptCTR(this.removeAlpha(pix), password, lenKey, iv));
        break;
    }
    
    for (var i = 0; i < pix.length; i++) { pix[i] = arr[i]; }
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
        content: 'La clave debe ser una matriz numérica de 4 valores positivos'
      },
    });
  }
    
  encryptECB(plaintext, password, nBits) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    //console.log(key);
    var ciphertext = this.paddingText(plaintext);
    var block = new Array(blockSize);
    var cipherBlock = new Array(blockSize);
    for(var i = 0; i < ciphertext.length/blockSize; i++){
        block = ciphertext.slice(i*blockSize, (i+1)*blockSize);
        cipherBlock = Aes.cipher(block, Aes.keyExpansion(key));
        for(var j = 0; j < blockSize; j++) ciphertext[i*blockSize+j]=cipherBlock[j];
    }
    return ciphertext;
  };

  decryptECB(ciphertext, password, nBits) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    /*
    console.log("LLAVE");
    console.log(key);
    console.log("BLOQUES");
    */
    var plaintext = this.paddingText(ciphertext);
    var block = new Array(blockSize);
    var cipherBlock = new Array(blockSize);
    for(var i = 0; i < plaintext.length/blockSize; i++){
        block = plaintext.slice(i*blockSize, (i+1)*blockSize);
        //console.log(block);
        cipherBlock = Aes.decipher(block, Aes.keyExpansion(key));
        for(var j = 0; j < blockSize; j++) plaintext[i*blockSize+j]=cipherBlock[j];
    }
    return plaintext;
  };

  encryptCBC(plaintext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var iniVec = this.completeKey(iv, 128);
    //var iniVec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    //console.log(iv);
    var ciphertext = this.paddingText(plaintext);
    var block = new Array(blockSize);
    var cipherBlock = new Array(blockSize);
    for (var i = 0; i < ciphertext.length / blockSize; i++) {
        block = ciphertext.slice(i * blockSize, (i + 1) * blockSize);
        //console.log(block);
        for (var j = 0; j < blockSize; j++) {
            block[j] ^= iniVec[j];
            //console.log(block[j] + "^" + ciphertext[(i-1)*blockSize+j]);
            //block[j] ^= ciphertext[(i - 1) * blockSize + j];
        }
        //console.log(block);
        cipherBlock = Aes.cipher(block, Aes.keyExpansion(key));
        //console.log(cipherBlock);
        for (var j = 0; j < blockSize; j++) {
            ciphertext[i * blockSize + j] = cipherBlock[j];
            iniVec[j] = ciphertext[i * blockSize + j];
        }
    }
    return ciphertext;
  };

  decryptCBC(ciphertext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var iniVec = this.completeKey(iv, 128);
    //var iniVec = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
    /*
    console.log(key);
    console.log("###################");
    console.log(iv);
    */
    var plaintext = this.paddingText(ciphertext);
    var block = new Array(blockSize);
    var cipherBlock = new Array(blockSize);
    for (var i = 0; i < plaintext.length / blockSize; i++) {
        //console.log(iniVec);
        block = plaintext.slice(i * blockSize, (i + 1) * blockSize);
        //console.log(block);
        cipherBlock = Aes.decipher(block, Aes.keyExpansion(key));
        //console.log(cipherBlock);
        for (var j = 0; j < blockSize; j++) {
            cipherBlock[j] ^= iniVec[j];
        }
        //console.log(cipherBlock);
        for (var j = 0; j < blockSize; j++) {
            plaintext[i * blockSize + j] = cipherBlock[j];
        }
        iniVec = block;
    }
    return plaintext;
  };

  encryptOFB(plaintext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var iniVec = this.completeKey(iv, 128);
    var ciphertext = this.paddingText(plaintext);
    var block = new Array(blockSize);
    for (var i = 0; i < ciphertext.length / blockSize; i++) {
        block = ciphertext.slice(i * blockSize, (i + 1) * blockSize);
        for (var j = 0; j < blockSize; j++) {
            block[j] ^= iniVec[j];
        }
        for (var j = 0; j < blockSize; j++) {
            ciphertext[i * blockSize + j] = block[j];
        }
        iniVec = Aes.cipher(iniVec, Aes.keyExpansion(key));
    }
    return ciphertext;
  };

  decryptOFB(ciphertext, password, nBits, iv) {
    return this.encryptOFB(ciphertext, password, nBits, iv);
  };

  encryptCFB(plaintext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var iniVec = this.completeKey(iv, 128);
    //var iniVec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var ciphertext = this.paddingText(plaintext);
    var block = new Array(blockSize);
    for (var i = 0; i < ciphertext.length / blockSize; i++) {
        block = ciphertext.slice(i * blockSize, (i + 1) * blockSize);
        //console.log(block);
        //console.log(iniVec);
        iniVec = Aes.cipher(iniVec, Aes.keyExpansion(key));
        //console.log(iniVec);
        for (var j = 0; j < blockSize; j++) {
            block[j] ^= iniVec[j];
        }
        //console.log(block);
        for (var j = 0; j < blockSize; j++) {
            ciphertext[i * blockSize + j] = block[j];
            iniVec[j] = ciphertext[i * blockSize + j];
        }
    }
    //console.log("//////////////////////");
    return ciphertext;
  };

  decryptCFB(ciphertext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var iniVec = this.completeKey(iv, 128);
    //var iniVec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var plaintext = this.paddingText(ciphertext);
    var block = new Array(blockSize);
    for (var i = 0; i < plaintext.length / blockSize; i++) {
        block = plaintext.slice(i * blockSize, (i + 1) * blockSize);
        //console.log(block);
        //console.log(iniVec);
        iniVec = Aes.cipher(iniVec, Aes.keyExpansion(key));
        //console.log(iniVec);
        for (var j = 0; j < blockSize; j++) {
            block[j] ^= iniVec[j];
        }
        //console.log(block);
        for (var j = 0; j < blockSize; j++) {
            iniVec[j] = plaintext[i * blockSize + j];
            plaintext[i * blockSize + j] = block[j];
        }
    }
    //console.log("//////////////////////");
    return plaintext;
  };

  encryptCTR(plaintext, password, nBits, iv) {
    var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    var key = this.completeKey(password, nBits);
    var ctr = this.completeKey(iv, 128);
    var ciphertext = this.paddingText(plaintext);
    var block = new Array(blockSize);
    var cipherCtr = new Array(blockSize);
    for (var i = 0; i < ciphertext.length / blockSize; i++) {
        // Add 1 to ctr
        for (var c = 0; c < 11; c++) ctr[15 - c] = (i >>> c * 8) & 0xff;
        for (var c = 0; c < 11; c++) ctr[15 - c - 4] = (i / 0x100000000 >>> c * 8);
        block = ciphertext.slice(i * blockSize, (i + 1) * blockSize);
        cipherCtr = Aes.cipher(ctr, Aes.keyExpansion(key));
        for (var j = 0; j < blockSize; j++) {
            block[j] ^= cipherCtr[j];
        }
        for (var j = 0; j < blockSize; j++) {
            ciphertext[i * blockSize + j] = block[j];
        }
    }
    return ciphertext;
  };

  decryptCTR(ciphertext, password, nBits, iv) {
    return this.encryptCTR(ciphertext, password, nBits, iv);
  };



  completeKey(password, nBits) {
    if (!(nBits == 128 || nBits == 192 || nBits == 256)) return [];
    // use AES itself to encrypt password to get cipher key (using plain password as source for key
    // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
    var nBytes = nBits / 8;  // no bytes in key (16/24/32)
    var pwBytes = new Array(nBytes);
    for (var i = 0; i < nBytes; i++) {  // use 1st 16/24/32 chars of password for key
        pwBytes[i] = isNaN(password[i]) ? 0 : password[i];
    }
    var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes)); // gives us 16-byte key
    key = key.concat(key.slice(0, nBytes - 16));  // expand key to 16/24/32 bytes long

    return key;
  }

  paddingText(plaintext) {
    var blockSize = 16;
    var pad = plaintext.length%blockSize;
    if(pad==0){
        return plaintext;
    } else {
        var nleft = (blockSize-pad)%blockSize;
        for(var i=0; i<nleft; i++) plaintext.push(nleft);
        return plaintext;
    }
  }

  addAlpha(s) {
    var p = [];
    for (var i = 0; i < s.length; i += 3) {
        p.push(s[i]);
        p.push(s[i + 1]);
        p.push(s[i + 2]);
        p.push(255); // Hardcodes alpha to 255.
    }
    return p;
  }

  removeAlpha(pix) {
    var s = [];
    // Removes alpha to save space.
    for (var i = 0; i < pix.length; i += 4) {
        s.push(pix[i]);
        s.push(pix[i + 1]);
        s.push(pix[i + 2]);
    }
    return s;
  }

  strToArr(str) {
    var out = new Array(str.length);
    for (var i = 0; i < out.length; i++) out[i] = str.charCodeAt(i);
    return out;
  }

  normalizeInput(inputText) {
    return this.rmAccents(inputText)
        .replaceAll(/[^a-zA-Z]/g, "")
        .replaceAll(" ", "")
        .toLowerCase();
  };

  rmAccents(inputText) {
    var accents = "ÁÄáäÓÖóöÉËéÇçÍÏíïÚÜúüÑñ";
    var noAccents = "AAaaOOooEEeeCcIIiiUUuuNn";
    return inputText
        .split("")
        .map(function (chr) {
            const accentIndex = accents.indexOf(chr);
            return accentIndex !== -1 ? noAccents[accentIndex] : chr;
        })
        .join("");
  };

  canvasArrToString(pix) {
    var s = "";
    // Removes alpha to save space.
    for (var i = 0; i < pix.length; i += 4) {
        s += (String.fromCharCode(pix[i])
            + String.fromCharCode(pix[i + 1])
            + String.fromCharCode(pix[i + 2]));
    }
    return s;
  }

  canvasStringToArr(s) {
    var p = [];
    for (var i = 0; i < s.length; i += 3) {
        for (var j = 0; j < 3; j++) {
            p.push(s.substring(i + j, i + j + 1).charCodeAt());
        }
        p.push(255); // Hardcodes alpha to 255.
    }
    return p;
  }

}