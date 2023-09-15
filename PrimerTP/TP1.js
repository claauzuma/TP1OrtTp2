const { error } = require('console');
const fs = require('fs');

//ejercicio 1
function leerArchivoComoString(){
    let datos = fs.readFileSync('archivoParaLeer.txt','utf-8')       //.toString()
        console.log(datos)
}
leerArchivoComoString();

//ejercicio 2
const escribirTextoEnArchivo = (ruta, texto, flag) => {
    try{
        let datos = fs.writeFileSync(ruta, texto)
        console.log('Archivo escrito exitosamente');
    } catch{
        if(flag){
            let datos = fs.readFileSync(ruta, 'utf-8' )
            console.log(datos)
        } else {
            throw new Error('El archivo no existe')
        }
    }
    
}

escribirTextoEnArchivo("C:\Users\zumar\Desktop\ORT2023\TP2\PrimerTP\archivo2.txt", "Aguante Boquita", true)

//ejercicio 3

const transformarStringEnArrayDeNumeros = (text, separador) => {
    const textoSplit = text.split(separador)
    const arrayNumeros = []

    textoSplit.forEach( parte => {
        if(!isNaN(parte)){
        arrayNumeros.push(parte)
        }
    })
    return arrayNumeros
}

const texto = '123 | 456 | 789 | 1bc | 10 |';
const separador = ' | ';
console.log('Transformando String en array de numeros')
const numerosSeparados = transformarStringEnArrayDeNumeros(texto, separador);
console.log(numerosSeparados);

// ejercicio 4
const transformarArrayDeNumerosAUnSoloString = (arrayStrings, separador) => {
    const string = arrayStrings.join(separador)
    return string
}

const array= [123, 456, 789, 10] 
const separador2 = ',';
console.log('transformarArrayDeNumerosAUnSoloString')
console.log(transformarArrayDeNumerosAUnSoloString(array,separador2))


//ejercicio 5

const combinarDosArrays = (array1, array2) => {
    const arrayConcatenado = array1.concat(array2);
    
    arrayConcatenado.sort((a, b) => a - b);

    const resultado = arrayConcatenado.filter((valor, indice, array) => array.indexOf(valor) === indice);
  
    return resultado;
  }
  
  const array1 = [1, 5, 10,450, 2];
  const array2 = [2, 3, 8, 11, 33, 1];
  const resultado = combinarDosArrays(array1, array2);
  
  console.log(resultado); 
  
//ejercicio 6

const combinarNArrays = (arrays) => {

    let arrayCombinado = [].concat(...arrays);
  
    arrayCombinado =  arrayCombinado.filter((valor, indice, array) => {
      return array.indexOf(valor) === indice;
    }).sort((a, b) => a - b);
    return  arrayCombinado;
  }
  
  const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
  const resultado2 = combinarNArrays(arrays);
  console.log(resultado2);


