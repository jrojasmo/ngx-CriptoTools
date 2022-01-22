import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogoComponent } from '../../dialogo/dialogo.component';

@Component({
  selector: 'ngx-hill',
  styleUrls: ['./hill.component.scss'],
  templateUrl: './hill.component.html',
})
export class HillComponent {

  model = {
    clave: [7,2,3,13],
  }

  model2 = {
    clave: [7,2,3,13],
  }

  model3 = {
    textoClaro: '',
    textoCifrado: '',
    clave: ''
  }
  
  @ViewChild('canvas1')
  canvas: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas2')
  canvas2: ElementRef<HTMLCanvasElement>;

  @ViewChild('fileSelector')
  fileSelector;

  @ViewChild('fileSelector2')
  fileSelector2;

  @ViewChild('imagenClara')
  imagenClara: ElementRef<HTMLImageElement>;

  @ViewChild('imagenCifrada')
  imagenCifrada: ElementRef<HTMLImageElement>;;
  
  @ViewChild('downloadAnchor1')
  downloadAnchor1: ElementRef<HTMLAnchorElement>;

  @ViewChild('downloadAnchor2')
  downloadAnchor2: ElementRef<HTMLAnchorElement>;

  constructor(private dialogService: NbDialogService) {};

  matrixInverse = require('matrix-inverse');
  
  fileSelected($event) {
      $event.preventDefault();
      const fileList = $event.target.files;
      this.readImage(fileList[0], this.imagenClara, this.canvas);
  }

  fileSelected2($event) {
    $event.preventDefault();
    const fileList = $event.target.files;
    this.readImage(fileList[0], this.imagenCifrada, this.canvas2);
  }

  readImage(file, imgElement, canvas) {
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      var result = event.target.result.toString();
      imgElement.nativeElement.src = result;
      this.limpiarCanvas(canvas);
    });
    reader.readAsDataURL(file);
  }

  limpiarCanvas(canvas) {
    console.log('Liampiando Canvas!');
    const context = canvas.nativeElement.getContext('2d');
    context.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
  }

  cifrar() {
    console.log('Entró a Cifrar!');
    var ctx: CanvasRenderingContext2D;
    var width_image = (this.imagenClara.nativeElement.width)    // Tamaño de la imagen Ancho
    var height_image = (this.imagenClara.nativeElement.height)  // Tamaño de la imagen Alto

    this.canvas.nativeElement.width = width_image;
    this.canvas.nativeElement.height = height_image;

    ctx = this.canvas.nativeElement.getContext('2d');
    
    ctx.drawImage(this.imagenClara.nativeElement, 0, 0, width_image, height_image);
    var scannedImage = ctx.getImageData(0, 0, width_image, height_image);
    
    var scannedData = scannedImage.data;

    this.Hill_cipher(this.model.clave, width_image, height_image, scannedData);
    this.Hill_cipher(this.model.clave, width_image, height_image, scannedData);

    ctx.putImageData(scannedImage, 0, 0);

    this.downloadAnchor1.nativeElement.href = this.canvas.nativeElement.toDataURL();
  }

  descifrar() {

    var ctx: CanvasRenderingContext2D;
    var width_image = (this.imagenCifrada.nativeElement.width)    // Tamaño de la imagen Ancho
    var height_image = (this.imagenCifrada.nativeElement.height)  // Tamaño de la imagen Alto

    this.canvas2.nativeElement.width = width_image;
    this.canvas2.nativeElement.height = height_image;

    ctx = this.canvas2.nativeElement.getContext('2d');
    
    ctx.drawImage(this.imagenCifrada.nativeElement, 0, 0, width_image, height_image);
    var scannedImage = ctx.getImageData(0, 0, width_image, height_image);

    console.log('tamaño de imagen en ImageData: ' + scannedImage.width + ' , ' + scannedImage.height );
    
    var scannedData = scannedImage.data;

    console.log('Antes de descifrar:');
    console.log(scannedData);

    this.Hill_decipher(this.model2.clave, width_image, height_image, scannedData);
    this.Hill_decipher(this.model2.clave, width_image, height_image, scannedData);

    ctx.putImageData(scannedImage, 0, 0);

    this.downloadAnchor2.nativeElement.href = this.canvas2.nativeElement.toDataURL();
  }

  encontrarClave(textoClaro, textoCifrado) {
    if(textoCifrado != '' && textoClaro != '') {
      this.model3.clave = JSON.stringify(this.cryptanalysis_hill2x2(textoClaro, textoCifrado)).replace(/\[/g, ' [').replace(/\]/g, '] ');
    }
  }

  clearForm($event) {
    $event.preventDefault();
    this.imagenClara.nativeElement.src = '';
    this.limpiarCanvas(this.canvas);
  }

  clearForm2($event) {
    $event.preventDefault();
    this.imagenCifrada.nativeElement.src = '';
    this.limpiarCanvas(this.canvas2);
  }

  clearForm3($event) {
    $event.preventDefault();
    this.model3.textoClaro = '';
    this.model3.textoCifrado = '';
    this.model3.clave = '';
  }

  showClaveIncorrecta() {
    this.dialogService.open(DialogoComponent, {
      context: {
        title: 'Clave Incorrecta',
        content: 'La clave debe ser una matriz numérica de 4 valores positivos'
      },
    });
  }



    Hill_cipher(key,width,height,scannedData){ // Función que cifra la imagen pos. [j,j+4,j+ancho,j+4+ancho] con key [k_0, k_1, k_2, k_3]
      for (var i = 0; i <= ((4*width*height)) ; i+=(8*width) ){
          for(var j=i; j<i+(width*4); j+=8){
              const J_0 = scannedData[j];
              const J_1 = scannedData[j+1];
              const J_2 = scannedData[j+2];

              const J_4 = scannedData[j+4];
              const J_5 = scannedData[j+5];
              const J_6 = scannedData[j+6];

              const J_A = scannedData[j+(width*4)];
              const J_A1 = scannedData[j+(width*4)+1];
              const J_A2 = scannedData[j+(width*4)+2];

              const J_A_4 = scannedData[j+(width*4)+4];
              const J_A_5 = scannedData[j+(width*4)+5];
              const J_A_6 = scannedData[j+(width*4)+6];
              
              //console.log("ind",j,j+4,j+(width*4),j+(width*4)+4);
              //console.log("color",scannedData[j],scannedData[j+4],scannedData[j+(width*4)],scannedData[j+(width*4)+4]);

              scannedData[j] = ((J_0*key[0])+(J_A*key[1]))%256;
              scannedData[j+1] = ((J_1*key[0])+(J_A1*key[1]))%256;
              scannedData[j+2] = ((J_2*key[0])+(J_A2*key[1]))%256;

              scannedData[j+4] = ((J_4*key[0])+(J_A_4*key[1]))%256;
              scannedData[j+5] = ((J_5*key[0])+(J_A_5*key[1]))%256;
              scannedData[j+6] = ((J_6*key[0])+(J_A_6*key[1]))%256;

              scannedData[j+(4*width)] = ((J_0*key[2])+(J_A*key[3]))%256;
              scannedData[j+(4*width)+1] = ((J_1*key[2])+(J_A1*key[3]))%256;
              scannedData[j+(4*width)+2] = ((J_2*key[2])+(J_A2*key[3]))%256;

              scannedData[j+(4*width)+4] = ((J_4*key[2])+(J_A_4*key[3]))%256;
              scannedData[j+(4*width)+5] = ((J_5*key[2])+(J_A_5*key[3]))%256;
              scannedData[j+(4*width)+6] = ((J_6*key[2])+(J_A_6*key[3]))%256;

              //console.log("color cifr",scannedData[j],scannedData[j+4],scannedData[j+(width*4)],scannedData[j+(width*4)+4]);

          }
      }
      console.log(scannedData)
      return scannedData
  };

  grayscale(scannedData){      // Función que convierte una imagen a color a escala de grises
    for (let i = 0; i < scannedData.length; i += 4){
        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const averangeColorValue = total/3;
        scannedData[i] = averangeColorValue    ;  // RED
        scannedData[i+1]  = averangeColorValue ;  // GREEN
        scannedData[i+2] = averangeColorValue  ;  // BLUE
    }
  return scannedData
  };

  inverse_decipher(key_m){           // Función que calcula la inversa de una matriz 2x2 mod
    const det= Math.abs((key_m[0]*key_m[3])-(key_m[1]*key_m[2]));
    //console.log(det mod)
    var fn_key = new Array;
    fn_key.push((key_m[3]));
    fn_key.push((-key_m[1]));
    fn_key.push((-key_m[2]));
    fn_key.push((key_m[0]));
    //console.log("transpuesta",fn_key)
    for(var k=0; k <= 256; k++){
        //console.log("k",k)
        //console.log("det x k % 256",((det)*k)%256)
        if(((det*k)%256)==1){
            fn_key[0]=(((fn_key[0]+(256))*k))%256;
            fn_key[1]=(((fn_key[1]+(256))*k))%256;
            fn_key[2]=(((fn_key[2]+(256))*k))%256;
            fn_key[3]=(((fn_key[3]+(256))*k))%256;
            console.log("Key inversa = ", fn_key,k);
            return fn_key
        }
    }
  };

  Hill_decipher(key,width,height,scannedData){  // Función que decifra la imagen pos. [j,j+4,j+ancho,j+4+ancho] con key [k_0, k_1, k_2, k_3]^-1
    const inv_key = this.inverse_decipher(key);
    //console.log(height,width)
    for (var i = 0; i <=  ((4*width*height)) ; i+=(8*width) ){
        //console.log(i)
        for(var j=i; j<i+(width*4); j+=8){

            const J_0 = scannedData[j];
            const J_1 = scannedData[j+1];
            const J_2 = scannedData[j+2];

            const J_4 = scannedData[j+4];
            const J_5 = scannedData[j+5];
            const J_6 = scannedData[j+6];

            const J_A = scannedData[j+(width*4)];
            const J_A1 = scannedData[j+(width*4)+1];
            const J_A2 = scannedData[j+(width*4)+2];

            const J_A_4 = scannedData[j+(width*4)+4];
            const J_A_5 = scannedData[j+(width*4)+5];
            const J_A_6 = scannedData[j+(width*4)+6];

            //console.log("ind",j,j+4,j+(width*4),j+(width*4)+4);
            //console.log("color",scannedData[j],scannedData[j+4],scannedData[j+(width*4)],scannedData[j+(width*4)+4]);

            scannedData[j] = ((J_0*inv_key[0])+(J_A*inv_key[1]))%256;
            scannedData[j+1] = ((J_1*inv_key[0])+(J_A1*inv_key[1]))%256;
            scannedData[j+2] = ((J_2*inv_key[0])+(J_A2*inv_key[1]))%256;

            scannedData[j+4] = ((J_4*inv_key[0])+(J_A_4*inv_key[1]))%256;
            scannedData[j+5] = ((J_5*inv_key[0])+(J_A_5*inv_key[1]))%256;
            scannedData[j+6] = ((J_6*inv_key[0])+(J_A_6*inv_key[1]))%256;

            scannedData[j+(4*width)] = ((J_0*inv_key[2])+(J_A*inv_key[3]))%256;
            scannedData[j+(4*width)+1] = ((J_1*inv_key[2])+(J_A1*inv_key[3]))%256;
            scannedData[j+(4*width)+2] = ((J_2*inv_key[2])+(J_A2*inv_key[3]))%256;

            scannedData[j+(4*width)+4] = ((J_4*inv_key[2])+(J_A_4*inv_key[3]))%256;
            scannedData[j+(4*width)+5] = ((J_5*inv_key[2])+(J_A_5*inv_key[3]))%256;
            scannedData[j+(4*width)+6] = ((J_6*inv_key[2])+(J_A_6*inv_key[3]))%256;

            //console.log("color decifr",scannedData[j],scannedData[j+4],scannedData[j+(width*4)],scannedData[j+(width*4)+4]);
        }
    }
    return scannedData;
  }

  matrix_numbers(text){ 
    //Función que recibe str text ya sea el texto plano o el texto cifrado
    //La salida es la matriz de 2 columnas y 2
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let array_matrix = text.replaceAll(" ","").toLowerCase().split("");
    let matrix_2 = new Array;
    for (let i=0; i <= 2; i+=2 ){
        matrix_2.push([ (alphabet.indexOf(array_matrix[i])),(alphabet.indexOf(array_matrix[i+1]))]);
    }
    return matrix_2;
}
  mod_inv_mult(element_m){
      // Calcula en inverso multilicativo modular de element_m
      for (let i=0; i<=26; i++){
          if ((element_m*i)%26==1){
              return i;
          }
      }
  }
  sum_modular(x,y){
      // Realiza y retorna la suma modular de x,y en Z_deg(l)
      if(x+y<0){
          var z = (x+y)%26;
          while(z<0){
              z+=26;
          }
          return z;
      } else {
          let z = x+y;
          return z;
      }
  }

  inverse(key_m){           // Función que calcula la inversa de una matriz 2x2 mod
      const det=this.sum_modular((key_m[0][0]*key_m[1][1])-(key_m[0][1]*key_m[1][0]),0);
      var fn_key = new Array;
      fn_key = [[0,0],[0,0]]
      fn_key[0][0] = ((key_m[1][1]));
      fn_key[0][1] = ((-key_m[0][1]));
      fn_key[1][0] = ((-key_m[1][0]));
      fn_key[1][1] = ((key_m[0][0]));
      for(var k=0; k <= 26; k++){
          if(((det*k)%26)==1){
              fn_key[0][0] = (this.sum_modular( fn_key[0][0] , 0 ) * k)%26;
              fn_key[0][1] = (this.sum_modular( fn_key[0][1] , 0 ) * k)%26;
              fn_key[1][0] = (this.sum_modular( fn_key[1][0] , 0 ) * k)%26;
              fn_key[1][1] = (this.sum_modular( fn_key[1][1] , 0 ) * k)%26;
              console.log(fn_key,"inversa")
              return fn_key
          }
      }
  };
  key(inv_m,cipher_matrix){
      let key_matr = [[0,0],[0,0]]
      key_matr[0][0] = this.sum_modular((inv_m[0][0]*cipher_matrix[0][0]) , (inv_m[0][1]*cipher_matrix[1][0]))%26;
      key_matr[0][1] = this.sum_modular((inv_m[0][0]*cipher_matrix[0][1]) , (inv_m[0][1]*cipher_matrix[1][1]))%26;
      key_matr[1][0] = this.sum_modular((inv_m[1][0]*cipher_matrix[0][0]) , (inv_m[1][1]*cipher_matrix[1][0]))%26;
      key_matr[1][1] = this.sum_modular((inv_m[1][0]*cipher_matrix[0][1]) , (inv_m[1][1]*cipher_matrix[1][1]))%26;
      return key_matr;
  }
  cryptanalysis_hill2x2(plain_text,cipher_text){
      var cipher_mat = this.matrix_numbers(cipher_text);
      var plain_mat = this.matrix_numbers(plain_text);
      console.log(cipher_mat,"c matriz");
      console.log(plain_mat,"p matriz");
      var inv_matrix = this.inverse(plain_mat);
      var matrix_key = this.key(inv_matrix,cipher_mat);
      console.log("Key = ",matrix_key);
      return matrix_key;
  }
  /*
  p = "friday"
  c = "pqcfku"

  cryptanalysis_hill2x2(p,c)
  */
}