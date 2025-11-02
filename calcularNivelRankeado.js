/*function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    // Determina o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    // Retorna o resultado
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplos de uso
console.log(calcularNivel(5, 3));     // Ferro
console.log(calcularNivel(15, 5));    // Bronze
console.log(calcularNivel(35, 10));   // Prata
console.log(calcularNivel(65, 20));   // Ouro
console.log(calcularNivel(85, 25));   // Diamante
console.log(calcularNivel(95, 30));   // Lendário
console.log(calcularNivel(120, 40));  // Imortal

// Versão interativa para testar diferentes valores
function testarCalculadora() {
    let continuar = true;
    
    while (continuar) {
        let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
        let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));
        
        if (!isNaN(vitorias) && !isNaN(derrotas)) {
            console.log(calcularNivel(vitorias, derrotas));
        } else {
            console.log("Por favor, digite valores numéricos válidos.");
        }
        
        continuar = confirm("Deseja calcular outro nível?");
    }
}


 testarCalculadora();

 */

 function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    // Determina o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    // Retorna o resultado
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplos de uso
console.log("=== TESTES DA CALCULADORA DE NÍVEL ===");
console.log(calcularNivel(5, 3));     // Ferro
console.log(calcularNivel(15, 5));    // Bronze
console.log(calcularNivel(35, 10));   // Prata
console.log(calcularNivel(65, 20));   // Ouro
console.log(calcularNivel(85, 25));   // Diamante
console.log(calcularNivel(95, 30));   // Lendário
console.log(calcularNivel(120, 40));  // Imortal

// Versão para Node.js usando readline
const readline = require('readline');

function testarCalculadora() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntar() {
        rl.question('Digite a quantidade de vitórias: ', (vitoriasInput) => {
            const vitorias = parseInt(vitoriasInput);
            
            if (isNaN(vitorias)) {
                console.log("Por favor, digite um número válido para vitórias.");
                perguntar();
                return;
            }
            
            rl.question('Digite a quantidade de derrotas: ', (derrotasInput) => {
                const derrotas = parseInt(derrotasInput);
                
                if (isNaN(derrotas)) {
                    console.log("Por favor, digite um número válido para derrotas.");
                    rl.close();
                    return;
                }
                
                console.log(calcularNivel(vitorias, derrotas));
                console.log(""); // Linha em branco para separar
                
                rl.question('Deseja calcular outro nível? (s/n): ', (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        perguntar();
                    } else {
                        console.log("Até logo!");
                        rl.close();
                    }
                });
            });
        });
    }
    
    console.log("\n=== MODO INTERATIVO ===");
    perguntar();
}

// Descomente a linha abaixo para testar interativamente
// testarCalculadora();

// Versão simplificada sem interação
function calcularRankeamento() {
    // Dados de exemplo para diferentes jogadores
    const jogadores = [
        { nome: "Jogador1", vitorias: 8, derrotas: 5 },
        { nome: "Jogador2", vitorias: 15, derrotas: 8 },
        { nome: "Jogador3", vitorias: 30, derrotas: 12 },
        { nome: "Jogador4", vitorias: 70, derrotas: 25 },
        { nome: "Jogador5", vitorias: 88, derrotas: 30 },
        { nome: "Jogador6", vitorias: 95, derrotas: 35 },
        { nome: "Jogador7", vitorias: 150, derrotas: 45 }
    ];
    
    console.log("\n=== RANKEAMENTO DE JOGADORES ===");
    jogadores.forEach(jogador => {
        const resultado = calcularNivel(jogador.vitorias, jogador.derrotas);
        console.log(`${jogador.nome}: ${resultado}`);
    });
}

// Executar a versão simplificada
calcularRankeamento();