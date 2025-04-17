// Receba três notas e faça a média aritmética.

    // utiliza o parsefloat para pegar todas as casas decimais que o usuário vai inserir.


let a = parseFloat (prompt("Digite a primeira nota"))
let b = parseFloat (prompt("Digite a segunda nota"))
let c = parseFloat (prompt("Digite a terceira nota"))
let media = ((a + b + c)/3)

 console.log ("A média aritmética entre a, b e c é: " + media.toFixed(2))

 // media.toFixed serve para fixar o número de casas decimais. No exemplo aqui é 2. A quantidade de casa é indicada dentro do parenteses. 