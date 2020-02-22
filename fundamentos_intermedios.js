
// ejercicio 1 //

function sigma (num){
    var f=0;
    for(j=1; j<=num; j++){
        f=f+j;
    }
    return f;
}
console.log(sigma(3));

// ejercicio 2 //

function factorial(num){
    var f= 1;
    for (j=1; j<=num; j++){
        f= f*j;
    }
    return f;
}
console.log(factorial(3))

// ejercicio 3 //

// ejercicio 4//

function penultimo(arr){
    if (arr.length<2){
        return null;
    }
    return arr[arr.length-2];
}
err=["alland","jorge","juan"];
console.log(penultimo(err));

// ejercicio 5 //

function nultimo(arr,n){
    if (arr.length<n){
        return null;
    }
    return arr[arr.length-n];
}
err=[5,2,3,9,6,4,9,7];
console.log(nultimo(err,3));

// ejercicio 6 //

function segundo(arr){
    if (arr.length<2){
        return null;
    }
    var elemento_grande= arr[0];
    var pos = 0;
    for( var d=1; d<arr.length; d++){
        if(elemento_grande< arr[d]){
            elemento_grande=arr[d];
            pos= d;

        }
    }
    arr[pos]= arr [arr.length-1];
    arr.pop();
    elemento_grande= arr[0];
    for (var d=1; d<arr.length; d++){
        if (elemento_grande< arr[d]){
            elemento_grande= arr[d];
        }
    }

    return elemento_grande;
}
err= segundo([42,100,4,3,15,85]);
console.log(err);


// ejercicio 7 //

function duplicado(arr){
    var a=[];
    for (var i=0; i<arr.length; i++){
        if(i%2 == 0){
            a.push(arr[i]);
        }
        a.push(arr[i]);
    }
    return a; 
}
err=[4, "Ulysses", 42, false];
console.log(duplicado(err));

////////////////////////////////////



