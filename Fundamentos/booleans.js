let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);


//tudo isso da verdadeiro
console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-982);
console.log(!!" ");
console.log(!![ ]);
console.log(!!{ });
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//tudo isso da falso
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log(!! ('' || null || 0 || "sarve"));


let nomes = ''
console.log(nomes || "Desconhecido")