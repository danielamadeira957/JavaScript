// 1. Função para calcular o tempo restante até uma data futura
 function calcularTempoRestante(dataFutura) { 
    const agora = new Date();
    const fim = new Date(dataFutura);
    const diferencaMs = fim - agora; // Diferença em milissegundos 
    
// Se o tempo já acabou, zera o cronômetro 
if (diferencaMs <= 0) { 
    return { total: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 }; 
    } 
    
    // Cálculos matemáticos para converter milissegundos 
    const segundos = Math.floor((diferencaMs / 1000) % 60); 
    const minutos = Math.floor((diferencaMs / 1000 / 60) % 60); 
    const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 24); 
    const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    return { total: diferencaMs, dias, horas, minutos, segundos };
 }
     // Defina a data alvo aqui(Fim do ano)
     const dataAlvo = "2026-12-31T23:59:59";

    // 2. Função para atualizar o temporizador na tela
    function atualizarTemporizador() { 
    const tempo = calcularTempoRestante(dataAlvo);
    
     // Formatação visual adicionando um "0" à esquerda se for menor que 10 
     const diasFormatados = String(tempo.dias).padStart(2, '0'); 
     const horasFormatadas = String(tempo.horas).padStart(2, '0'); 
     const minutosFormatados = String(tempo.minutos).padStart(2, '0'); 
     const segundosFormatados = String(tempo.segundos).padStart(2, '0'); 
     
     // Exibe o resultado no console 
     console.log(`${diasFormatados}d ${horasFormatadas}h ${minutosFormatados}m ${segundosFormatados}s`); 
     
     // Interrompe o temporizador caso chegue a zero 
     if (tempo.total <= 0) { 
        clearInterval(intervalo); 
        console.log("Tempo esgotado!");
    } 
 } 
          
    // 3. Usa setInterval para atualizar o temporizador a cada segundo (1000ms) 
    const intervalo = setInterval(atualizarTemporizador, 1000); 
    
    // Executa uma vez imediatamente para não esperar o primeiro segundo do setInterval 
    atualizarTemporizador();