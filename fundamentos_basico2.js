
// ejercicio 1 //

function string(x) {
  
  for(var i=0; i<x.length; i++){
    if(x[i]>0){
        x[i]="Big";
      
    }
  }
 return x;
}  
y= string([1,2,-3,-4,-5,6,7]);
console.log(y);


// ejercicio 2 //


function arr(x){
    var min=0;
    var max=0;
    for  (var i=0; i<x.length; i++){
          if (x[i]>max){
              max=x[i];
          }
          if(x[i]<x[i-1]){
             min=x[i];
          }
    }
    console.log(min);
    return max;
  }
  y= arr([-1,3,5,-5,7,-8]);
  console.log (y)

  // ejercicio 3 //

  function x(arr){
      arrnew[];
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2==1 || arr[i]%2==1){
            arrnew.push(arr[i]);
        }
    }
    console.log(arr[(arr.length-2)]);
    return arrnew[0];
  }
  console.log(x([-1,2,3,4,5,6,7,8,9]));

  // ejercicio 4 //

  function x(arr){
    var newarray=[];
    var y=0;
    for(var i=0; i<arr.length; i++){
        y=arr[i]+arr[i];
        newarray.push(y);
    }
    return newarray;
}
console.log(x([1,2,3]));

// ejercicio 5 //

function x(arr){
    var y=0;
    var z=arr.length-1;
    for (var i=0; i<arr.length; i++){
      if (arr[i]>0){
        y= y+1;
      }
    }
    arr.pop(arr[z]);
    arr.push(y);
    return arr;
  }
  console.log(x([-1,1,1,1]));

  // ejercicio 6 //

  function x(arr){
    for (i=0; i<arr.length; i++){
      if(arr[i]% 2==1 && arr[i+1]% 2==1 && arr[i+2]% 2==1){
        console.log("que imparcial");
    }
      else{
        if (arr[i]% 2==0 && arr[i+1]% 2==0 && arr[i+2]% 2==0){
        console.log ("es para bien");  
      }
    }
  }
}
x([2,2,2]);



// ejercicio 7 //

function x(arr){
    for (var i=0; i<arr.length; i++){
console.log(arr[i]);
    if (arr[i]%2==1){
        arr[i]=arr[i+1];
    }
    }
    return arr;
}
console.log(x([1,2,3,4,5,6,7,8,9]));

// ejercicio 8 //

function x(arr){
    var z=[];
    for (var i=0; i<arr.length; i++){
        z.push(arr.[i].length);
    }
    for (var j=1; j<arr.length; j++){

    }
    arr[j]=z[j-1];
}
console.log(x(["programa","dojo","genial"]));

// ejercicio 9 //

function x(array){
    var arrnew=[];
    for (var i=0; i<array.length; i++){
        arrnew.push(array[i]+7);
    }
    return arrnew;
}
console.log(x([1,2,3]));

// ejercicio 10 //

function  x(array){
    for (var i=0; i<array.length; i++){
        [array[i],array[array.length-1-i]]=[array[array.length-1-i],array[i]]
    }
    return array;
}
console.log(x([8,7,6,5,4,3,2,1]));

// ejercicio 11 //

function x(array){
    for (var i=0; i<array.length; i++){
    if (array[i>0]){
}
    }
    return array;
}
console.log(x([1,-2,5]));

// ejercicio 12 //

function x(array){
    var z=0;
    for (var i=0; i<array.length; i++){
        if(array[i]=="comida"){
            z+=1
    console.log("yumi");
        }
        if(z==0){
        return console.log("tengo hambre"); 
        }
    
    }
}
x([2,2,2,2]);

// ejercicio 13 //

function x(array){
    for (var i=0; i<array.length/2; i++){
        if (i%2==0){
            [array[i],array[array.length-i-1]]=[array[array.length-i-1],array[i]];
        }
    }
    return array;
}
console.log(x([1,2,3,4,5,6,7]));

// ejercicio 14 //

function x(array,y){
    for (var i=0; i<array.length; i++){
        array[i]=array[i]*y;
    }
    return array;
}
console.log(x([1,2,3,4,5],2));
/////////////////////////////////////////