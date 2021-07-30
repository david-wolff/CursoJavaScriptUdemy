// Desafio: Trocar os valores das variáveis a e b.

let a = 19;

let b = 12;

console.log("A = " + a + "\nB = " + b + " <--- antes da troca\n\t\t\t...\n");


/*
* Lógica:
*
*   {
*       let c = a;
*       a = b;
*       b = c;
*    }
*/

//Operador de troca de valores '[]' = '[]' : 

[a, b] = [b, a];

console.log("\t\tA = " + a + "\n\t\tB = " + b + " <--- após a troca" );