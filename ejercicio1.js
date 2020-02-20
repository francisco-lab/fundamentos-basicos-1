// ejercicio 1//
function retArrToNum(max) {
    var arr =[];
    
    for (var i=1; i<=255;i++) {
      
      
    }
  }
  arr= retArrToNum(255);
  console.log(arr)
  
  
// ejercicio 2//

function pares(max) {
  let sum = 0;
  for (let i = 0; i <=max; i++){
    
      if(i % 2 == 0) {
           sum+=i;
      }  
   
   }
  
  return sum;
}
p = pares(1000);
console.log(p);

// ejercicio 3//

function impares(max) {
    let sum = 0;
    
    
    for (let i = 0; i <=max; i++){
      
        if(i % 2 != 0 ) {
             sum+=i;
        }  
     
     }
    
    return sum;
  }
  
  
  p = impares(5000);
  console.log(p);

  // ejercicio 4 //

function  sumArray(x){
var c=0;
  for (var i=0; i<x.length; i++){
    c=c+ x[i];
  }
  return c;
}
  a=[1,2,8] 
  b=sumArray(a);
  console.log(b);

  // ejercicio 5//

function arraymax(d){
  var mayor = d[0];
  for(let index = 0; index<d.length; index++){
    const element= d[index]
    if(element>mayor){
      mayor = element
    }
  }
  return mayor;
}
v=[2,4,1000,10000];
ab= arraymax(v);
console.log(ab);

// ejercicio 6//
function suma(x){
  var sum = 0
  for (var i=0; i<x.length;i++){
    sum+=x[i];
  }
  return sum;
}

function prom(x){
   c=suma(x)
   return c/x.length
}
y=suma([1,3,5,7,20])
y=prom([1,3,5,7,20])
console.log(y);


// ejercicio 7//
function Array(l){
  
  
  var x=[]
  for (var y=1;y<=l;y+=2){
  x.push (y);
  }    
  return x;
  
}
y = Array(50);
console.log(y);

//ejercicio 8 //
function arr(x,y){
  var l=0;
  for(var i=0;i<x.length;i++){
    if(x[i]>y){
        l++;
    }
    
  }
    return l;
}
y=arr([1,,3,5,7,9.10],4);  
console.log(y);

// ejercicio 9 //

function dragon(x){
  for (var i=0; i<x.length; i++){
    x[i]= x[i]* x[i];
  }
  return x;
} 

y= dragon([2,4,6,8])
console.log(y);

// ejercicio 10 //

function arrayNegativos(x){
  
  for(var i=0; i<x.length; i++){
    if(x[i]< 0) {
        x[i]="0";
      
    }
  }
 return x;

}
  
y= arrayNegativos([1,2,-3,-4,-5,-6,7]);
console.log(y)

// ejercicio 11 //

function quest(x){
  max=x[0];
  min=x[0];
  suma= 0;
  prom= 0;
  for (var i=1; i<x.length; i++){
    suma= suma+x[i];
    if (max < x[i]){
      max= x[i];
      
    }
    if (min > x[i]){
        min= x[i];
    }  
  }
  avg= suma / x.length;
  return[max, min, avg];
}
y= quest([3,2,1,5,7,9,10])
console.log(y);

// ejercicio 12 //
function Alma(x){
  var primero=x[0];
    x[0]= x[x.length-1];
    x[x.length]= primero;
  return x;
}
y= Alma([3,2,1,5,7,9,10]);
console.log(y);

// ejercicio 13//

function arrayValor(x) {
  
  for(var i=0; i<x.length; i++){
    if(x[i]< 0){
        x[i]="Dojo";
      
    }
  }
 return x;
}  
y= arrayValor([1,2,-3,-4,-5,6,7]);
console.log(y)

