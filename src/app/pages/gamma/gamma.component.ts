import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { canvas } from 'leaflet';

@Component({
  selector: 'ngx-clasicos',
  styleUrls: ['./gamma.component.scss'],
  templateUrl: './gamma.component.html',
})
export class GammaComponent implements AfterViewInit {
  model = {
    coordX: 0,
    coordY: 0,
    permutacion: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    tipoGrafo: 1,
    textoClaro: '',
    textoCifrado: ''
  }

  foo() {

  }

  @ViewChild('canvas1')
  canvas: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas2')
  canvas2: ElementRef<HTMLCanvasElement>;

  context: CanvasRenderingContext2D;

  context2: CanvasRenderingContext2D;
      
  alphSize = 26;
  nodes = [];
  map = new Map();

  dict1 = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };

  dict = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  ngAfterViewInit() {
    this.dibujarGrafo();
    this.dibujarPermutacion();
  }

  clearForm1($event) {
    $event.preventDefault();
    this.model.textoClaro = '';
  }

  clearForm2($event) {
    $event.preventDefault();
    this.model.textoCifrado = '';
  }
  
  gammaGraph(x0, y0, length, graphType) {
    this.map = new Map();
    var map = this.map;
    var slopes = [];
    var maxY = 25;
    var nodes = this.nodes;
    if (y0 <= 0) maxY += Math.abs(y0);
    if (graphType == 1) {
      //natural numbers
      for (var i = 0; i <= maxY; ++i) {
        slopes.push(i);
      }
      this.nodes.push(new Node(x0, y0, 1));
      this.map.set(this.posToId(x0, y0, x0, y0, length), nodes.length - 1);
      //console.log(map.get(0));
      var i = 0;
      var generation = 1;
      while (true) {
        var x = nodes[i].posX + 1;
        var y = nodes[i].posY + slopes[i];
        if (x < length && y < this.alphSize) {
          nodes.push(new Node(x, y, generation));
          nodes[i + 1].numIn++;
          nodes[i + 1].maxSlope = slopes[i];
          nodes[i].nodeOut.push(this.posToId(x0, y0, x, y, length));
          map.set(this.posToId(x0, y0, x, y, length), nodes.length - 1);
          ++i;
        } else {
          break;
        }
      }
      //                    Generacion 2
      var size = nodes.length;
      //console.log(size);
      generation = 2;
      for (var i = 1; i < size; ++i) {
        var j = 0;
        var index = i;
        while (true) {
          var x = nodes[index].posX + 1;
          var y = nodes[index].posY + slopes[j];
          var id = this.posToId(x0, y0, x, y, length);
          var pos;
          if (map.get(id) >= 0) {
            pos = map.get(id);
          } else {
            pos = -1;
          }
          if (x < length && y < this.alphSize) {
            if (pos == -1) {
              nodes.push(new Node(x, y, generation));
              pos = nodes.length - 1;
              map.set(this.posToId(x0, y0, x, y, length), pos);
            }
            var exists = false;
            for (var k = 0; k < nodes[index].nodeOut.length; ++k) {
              if (
                nodes[index].nodeOut[k] == this.posToId(x0, y0, x, y, length)
              ) {
                exists = true;
                break;
              }
            }
            if (!exists) {
              nodes[pos].numIn++;
              nodes[pos].maxSlope = Math.max(
                slopes[j],
                nodes[pos].maxSlope
              );
              nodes[index].nodeOut.push(this.posToId(x0, y0, x, y, length));
            }
            ++j;
            index = pos;
          } else {
            break;
          }
        }
      }
      //                    Generacion 3
      generation = 3;
      var maxId =
        (length + Math.abs(Math.min(x0, 0))) *
        (this.alphSize + Math.abs(Math.min(y0, 0)));
      for (var i = 0; i <= maxId; ++i) {
        if (map.get(i) >= 0) {
          var node = nodes[map.get(i)];
          if (node.generation == 2) {
            var j = 0;
            var index = parseInt(map.get(i));
            var maxSlope = node.maxSlope;
            while (slopes[j] <= maxSlope) {
              var x = nodes[index].posX + 1;
              var y = nodes[index].posY + slopes[j];
              var id = this.posToId(x0, y0, x, y, length);
              if (map.get(id) >= 0) {
                pos = map.get(id);
              } else {
                pos = -1;
              }
              if (x < length && y < this.alphSize) {
                if (pos == -1) {
                  nodes.push(new Node(x, y, generation));
                  pos = nodes.length - 1;
                  map.set(this.posToId(x0, y0, x, y, length), pos);
                  nodes[pos].numIn++;
                }
                var exists = false;
                for (var k = 0; k < nodes[index].nodeOut.length; ++k) {
                  if (
                    nodes[index].nodeOut[k] == this.posToId(x0, y0, x, y, length)
                  ) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  nodes[pos].numIn++;
                  nodes[pos].maxSlope = Math.max(
                    slopes[j],
                    nodes[pos].maxSlope
                  );
                  nodes[index].nodeOut.push(this.posToId(x0, y0, x, y, length));
                }
                ++j;
                index = pos;
              } else {
                break;
              }
            }
          }
        }
      }
    } else {
      //triangular numbers
      for (var i = 0; (i * (i + 1)) / 2 <= maxY; ++i) {
        slopes.push((i * (i + 1)) / 2);
      }
      nodes.push(new Node(x0, y0, 1));
      map.set(this.posToId(x0, y0, x0, y0, length), nodes.length - 1);
      //console.log(map.get(0));
      var i = 0;
      //                    Generacion 1
      var generation = 1;
      while (true) {
        var x = nodes[i].posX + 1;
        var y = nodes[i].posY + slopes[i];
        if (x < length && y < this.alphSize) {
          nodes.push(new Node(x, y, generation));
          nodes[i + 1].numIn++;
          nodes[i + 1].maxSlope = slopes[i];
          nodes[i].nodeOut.push(this.posToId(x0, y0, x, y, length));
          map.set(this.posToId(x0, y0, x, y, length), nodes.length - 1);
          ++i;
        } else {
          break;
        }
      }
      //                    Generacion 2
      var size = nodes.length;
      //console.log(size);
      generation = 2;
      for (var i = 1; i < size; ++i) {
        var j = 0;
        var index = i;
        while (true) {
          var x = nodes[index].posX + 1;
          var y = nodes[index].posY + slopes[j];
          var id = this.posToId(x0, y0, x, y, length);
          if (map.get(id) >= 0) {
            pos = map.get(id);
          } else {
            pos = -1;
          }
          if (x < length && y < this.alphSize) {
            if (pos == -1) {
              nodes.push(new Node(x, y, generation));
              pos = nodes.length - 1;
              map.set(this.posToId(x0, y0, x, y, length), pos);
            }
            var exists = false;
            for (var k = 0; k < nodes[index].nodeOut.length; ++k) {
              if (
                nodes[index].nodeOut[k] == this.posToId(x0, y0, x, y, length)
              ) {
                exists = true;
                break;
              }
            }
            if (!exists) {
              nodes[pos].numIn++;
              nodes[pos].maxSlope = Math.max(
                slopes[j],
                nodes[pos].maxSlope
              );
              nodes[index].nodeOut.push(this.posToId(x0, y0, x, y, length));
            }
            ++j;
            index = pos;
          } else {
            break;
          }
        }
      }
      //                    Generacion 3
      generation = 3;
      var maxId =
        (length + Math.abs(Math.min(x0, 0))) *
        (this.alphSize + Math.abs(Math.min(y0, 0)));
      for (var i = 0; i <= maxId; ++i) {
        if (map.get(i) >= 0) {
          var node = nodes[map.get(i)];
          if (node.generation == 2) {
            var j = 1;
            var index = parseInt(map.get(i));
            var maxSlope = node.maxSlope;
            while (slopes[j] <= maxSlope) {
              var x = nodes[index].posX + 1;
              var y = nodes[index].posY + slopes[j];
              var id = this.posToId(x0, y0, x, y, length);
              if (map.get(id) >= 0) {
                pos = map.get(id);
              } else {
                pos = -1;
              }
              if (x < length && y < this.alphSize) {
                if (pos == -1) {
                  nodes.push(new Node(x, y, generation));
                  pos = nodes.length - 1;
                  map.set(this.posToId(x0, y0, x, y, length), pos);
                  nodes[pos].numIn++;
                }
                var exists = false;
                for (var k = 0; k < nodes[index].nodeOut.length; ++k) {
                  if (
                    nodes[index].nodeOut[k] == this.posToId(x0, y0, x, y, length)
                  ) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  nodes[pos].numIn++;
                  nodes[pos].maxSlope = Math.max(
                    slopes[j],
                    nodes[pos].maxSlope
                  );
                  nodes[index].nodeOut.push(this.posToId(x0, y0, x, y, length));
                }
                ++j;
                index = pos;
              } else {
                break;
              }
            }
          }
        }
      }
    }
    return nodes;
  }
  posToId(x0, y0, x, y, length) {
    var len = length;
    if (x0 < 0) {
      len += Math.abs(x0);
    }
    return (y - y0) * len + (x - x0);
  }
    // DELETE DELETE
    /////////////////////////////////////////////////////////////////////////////////////
    drawG(nodes, x0, y0, movX, movY, size) {
      var div = 20;
      //lineas del plano
      var width = this.canvas.nativeElement.width;
      var height = this.canvas.nativeElement.height;
      var colorLineas = "ffaa00";
      var posx = width / div;
      var posy = ((div - 1) * height) / div;
      var movx = width / div;
      var movy = height / div;
      var context = this.context;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "#8f9bb3";

      context.beginPath();
      context.moveTo(posx - movx * x0 - movX, 0);
      context.lineTo(posx - movx * x0 - movX, height);
      context.lineWidth = 1;
      context.strokeStyle = "#" + colorLineas;
      context.stroke();
      //y
      context.beginPath();
      context.moveTo(0, posy + movy * y0 - movY);
      context.lineTo(width, posy + movy * y0 - movY);
      context.lineWidth = 1;
      context.strokeStyle = "#" + colorLineas;
      context.stroke();
      //lineas del plano
      //punto inicial
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = "#ff3232";
      context.fillStyle = "#ff3232";
      context.arc(posx - movX, posy - movY, 3, 0, 2 * Math.PI, true);
      context.fill();
      context.stroke();
      //grid con nodos de coordenada
      for (var i = 0; i < size; ++i) {
        for (var j = 0; j < this.alphSize; ++j) {
          context.beginPath();
          context.lineWidth = 1;
          context.strokeStyle = "#598bff";
          context.fillStyle = "#598bff";
          context.arc(
            posx - movx * (x0 - i) - movX,
            posy + movy * (y0 - j) - movY,
            1,
            0,
            2 * Math.PI,
            true
          );
          context.fill();
          context.stroke();
        }
      }
      //dibujo y conexiones de nodos
      for (var i = 0; i < nodes.length; ++i) {
        var node = nodes[i];
        if (i != 0) {
          context.beginPath();
          context.lineWidth = 0.25;
          context.strokeStyle = "#30eaf3";
          context.fillStyle = "#30eaf3";
          context.arc(
            posx - movx * (x0 - node.posX) - movX,
            posy + movy * (y0 - node.posY) - movY,
            2,
            0,
            2 * Math.PI,
            true
          );
          context.fill();
          context.stroke();
        }
        var colorUnion = "30eaf3";
        for (var j = 0; j < node.nodeOut.length; ++j) {
          var pos2X = nodes[this.map.get(node.nodeOut[j])].posX;
          var pos2Y = nodes[this.map.get(node.nodeOut[j])].posY;
          context.beginPath();
          context.moveTo(
            posx - movx * (x0 - node.posX) - movX,
            posy + movy * (y0 - node.posY) - movY
          );
          context.lineTo(
            posx - movx * (x0 - pos2X) - movX,
            posy + movy * (y0 - pos2Y) - movY
          );
          context.lineWidth = 1;
          context.strokeStyle = "#" + colorUnion;
          context.stroke();
        }
      }
    }
    drawGammaGraph(nodes, x0, y0, size) {
      this.drawG(nodes, x0, y0, 0, 0, size);
      //window.addEventListener("keydown", checkKeyPressed, false);
      var i = 0;
      var j = 0;
      var context = this.canvas.nativeElement.getContext("2d");
      var width = this.canvas.nativeElement.width;
      var height = this.canvas.nativeElement.height;
      var drawG = this.drawG;
      /*function checkKeyPressed(e) {
        if (e.keyCode == "37") {
          i -= 10;
        }
        if (e.keyCode == "38") {
          j -= 10;
        }
        if (e.keyCode == "39") {
          i += 10;
        }
        if (e.keyCode == "40") {
          j += 10;
        }
        
        context.clearRect(0, 0, width, height);
        drawG(nodes, x0, y0, i, j, size);
      }*/
    }

    setLetras(permutation, div = 12) {
      var width = this.canvas2.nativeElement.width;
      var height = this.canvas2.nativeElement.height;
      var letras = [];
      var size = permutation.length;
      var x0 = width / div;
      var y0 = ((div - 1) * height) / div;
      var x = width / div;
      var y = ((div - 1) * height) / div;
      var i = 0;
      var j = 0;
      var fila = [];
      while (j < this.alphSize && i < size) {
        var arr = [];
        var arr1 = [];
        arr1.push(x - x0, y - y0);
        arr.push(arr1);
        var letra = this.dict1[(permutation[i] + j) % this.alphSize];
        arr.push(letra);
        fila.push(arr);
        ++i;
        x += width / size + 15;
        if (i == size) {
          i = 0;
          x = width / div;
          j++;
          y -= height / (this.alphSize + 2);
          letras.push(fila);
          fila = [];
        }
      }
      return letras;
    }

    drawP(permutation, x0 = 0, y0 = 0) {
      var width = this.canvas2.nativeElement.width;
      var height = this.canvas2.nativeElement.height;
      var context = this.canvas2.nativeElement.getContext("2d");
      var size = permutation.length;
      var div = 12;
      var letras = this.setLetras(permutation, div);
      //lineas del plano
      var colorLineas = "ffaa00";
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "#8f9bb3";
      //x
      context.beginPath();
      context.moveTo(width / div - x0, 0);
      context.lineTo(width / div - x0, height);
      context.lineWidth = 1;
      context.strokeStyle = "#" + colorLineas;
      context.stroke();
      //y
      context.beginPath();
      context.moveTo(0, ((div - 1) * height) / div - y0);
      context.lineTo(width, ((div - 1) * height) / div - y0);
      context.lineWidth = 1;
      context.strokeStyle = "#" + colorLineas;
      context.stroke();
      //lineas del plano
      //dibujar coordenadas
      context.beginPath();
      //context.font = "[style] [variant] [weight] [size]/[line height] [font family]";
      var sizeFont = 14; //Tamaño letra
      context.font = sizeFont + "px " + "Times New Roman, sans-serif";
      var i = 0;
      var j = 0;
      var x = width / div - x0;
      var y = ((div - 1) * height) / div - y0;
      context.moveTo(x, y);
      console.log(letras);

      for (var i = 0; i < this.alphSize; ++i) {
        for (var j = 0; j < size; ++j) {
          var letra = letras[i][j][1];
          var text = letra + " " + j + "," + i;
          context.fillText(
            text,
            x + (letras[i][j][0][0] * 0.75),
            y + letras[i][j][0][1]
          );
        }
      }
      context.stroke();
    }
    
    drawPermutation(permutation) {
      var width = this.canvas2.nativeElement.width;
      var height = this.canvas2.nativeElement.height;
      var context = this.canvas2.nativeElement.getContext("2d");
      if (permutation.length > 0 && permutation.length <= this.alphSize) {
        this.drawP(permutation, 0, 0);
        //window.addEventListener("keydown", checkKeyPressed, false);
        var i = 0;
        var j = 0;
        /*function checkKeyPressed(e) {
          if (e.keyCode == "37") {
            i -= 10;
          }
          if (e.keyCode == "38") {
            j -= 10;
          }
          if (e.keyCode == "39") {
            i += 10;
          }
          if (e.keyCode == "40") {
            j += 10;
          }
          context.clearRect(0, 0, width, height);
          this.drawP(permutation, i, j);
        }*/
      }
    }

    rmAccents = function (inputText) {
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

    normalizeInput = function (inputText) {
      return this.rmAccents(inputText)
        .replaceAll(/[^a-zA-Z]/g, "")
        .replaceAll(" ", "")
        .toLowerCase();
    };

    ranPermutation() {
      var size = 10;
      var arr = new Array(size);
      for (var i = 0; i < arr.length; i++) arr[i] = i;
      var j;
      var temp;
      for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }

    isAValidPermutation(permutation) {
      var dupMap = {};
      for (var i = 0; i < permutation.length; i++) {
        if (
          permutation.length == 0 ||
          permutation[i] < 0 ||
          permutation[i] > permutation.length - 1
        )
          return false;
        // Verificar duplicados.
        if (dupMap[permutation[i]]) return false;
        dupMap[permutation[i]] = true;
      }
      return true;
    }

    calculatePosition(shiftNumber, letter) {
      var res = this.dict[letter] - shiftNumber;
      res = (res + this.alphSize) % this.alphSize;
      return res;
    }

    cipher(x0, y0, permutation, clearText, graphType) {
      if (!this.isAValidPermutation(permutation)) {
        console.log("WHOOPS");
        return;
      }
      var text = this.normalizeInput(clearText);
      var size = permutation.length;
      var nodes = this.gammaGraph(x0, y0, size, graphType);
      //console.log(nodes);
      var cipheredText = "";
      var position = 0;
      for (var i = 0; i < text.length; ++i) {
        var y = this.calculatePosition(permutation[position], text[i]);
        var shift = 0;
        if (this.map.get(this.posToId(x0, y0, position, y, size)) >= 0) {
          shift = nodes[this.map.get(this.posToId(x0, y0, position, y, size))].numIn;
        }
        cipheredText += "(";
        cipheredText += ((shift + this.dict[text[i]]) % this.alphSize) + "," + y;
        cipheredText += ")";
        if (i < text.length - 1) cipheredText += ",";
        ++position;
        position %= size;
      }
      return cipheredText;
    }

    decipher(x0, y0, permutation, cipherText, graphType) {
      if (!this.isAValidPermutation(permutation)) {
        console.log("WHOOPS");
        return;
      }
      var size = permutation.length;
      var clearText = "";
      var position = 0;
      for (var i = 0; i < cipherText.length; ++i) {
        if (cipherText[i] == "(") {
          ++i;
          var a = "";
          while (cipherText[i] != ",") {
            a += cipherText[i];
            ++i;
          }
          ++i;
          var b = "";
          while (cipherText[i] != ")") {
            b += cipherText[i];
            ++i;
          }
          console.log(a, b);
        } else continue;
        var c = parseInt(b);
        var nodes = this.gammaGraph(x0, y0, size, graphType);
        var shift = 0;
        if (this.map.get(this.posToId(x0, y0, a, b, size)) >= 0) {
          shift = nodes[this.map.get(this.posToId(x0, y0, a, b, size))].numIn;
        }
        clearText += this.dict1[(c + permutation[position]) % this.alphSize];
        ++position;
        position %= size;
      }
    
      return clearText;
    }


    dibujarGrafo() {
      //test test
      this.context = this.canvas.nativeElement.getContext("2d");
      var permutation = this.model.permutacion.split(',').map(x=>+x);
      var x0 = this.model.coordX;
      var y0 = this.model.coordY;
      this.nodes = [];
      var nodes = this.nodes;
      nodes = this.gammaGraph(x0, y0, permutation.length, this.model.tipoGrafo);
      console.log(nodes);
      this.drawGammaGraph(nodes, x0, y0, permutation.length);
    }

    generarPermutacion() {
      var permutacion = this.ranPermutation();
      this.model.permutacion = permutacion.toString().replace(/,/g, ', ');
    }

    dibujarPermutacion() {
      var permutacion = this.model.permutacion.split(',').map(x=>+x);
      this.drawPermutation(permutacion);
    }

    cifrar() {
      var x = this.model.coordX;
      var y = this.model.coordY;
      var permutacion = this.model.permutacion.split(',').map(x=>+x);
      var textoClaro = this.model.textoClaro;
      var tipoGrafo = this.model.tipoGrafo;
      var textoCifrado = this.cipher(x, y, permutacion, textoClaro, tipoGrafo);
      this.model.textoCifrado = textoCifrado;
    }
    
    descifrar() {
      var x = this.model.coordX;
      var y = this.model.coordY;
      var permutacion = this.model.permutacion.split(',').map(x=>+x);
      var textoCifrado = this.model.textoCifrado;
      var tipoGrafo = this.model.tipoGrafo;
      var textoClaro = this.decipher(x, y, permutacion, textoCifrado, tipoGrafo);
      this.model.textoClaro = textoClaro;
    }
}

class Node {
  posX;
  posY;
  numIn;
  maxSlope;
  nodeOut;
  generation;

  constructor(posX, posY, generation) {
    this.posX = posX;
    this.posY = posY;
    this.numIn = 0;
    this.maxSlope = 0;
    this.nodeOut = [];
    this.generation = generation;
  }
}
