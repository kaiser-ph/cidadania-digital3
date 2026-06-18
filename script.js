/**
 * Valida a resposta selecionada pelo usuário no Quiz de Cidadania Digital.
 * @param {boolean} isCorrect - Indica se a alternativa clicada é a correta.
 */
function checkAnswer(isCorrect) {
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    if (isCorrect) {
        feedbackDiv.className = "feedback success";
        feedbackDiv.innerHTML = "🎯 Correto! Em 2026, deepfakes de vídeo e áudio em tempo real gerados por IA são armas comuns em fraudes. Nunca repasse dados confidenciais em chamadas recebidas; sempre desligue e procure os canais oficiais do banco por conta própria.";
    } else {
        feedbackDiv.className = "feedback error";
        feedbackDiv.innerHTML = "❌ Atenção! Resposta perigosa. Atualmente, os sistemas de IA imitam rostos e vozes perfeitamente em transmissões ao vivo. A única atitude 100% segura é desligar imediatamente e realizar a chamada de volta.";
    }
}
