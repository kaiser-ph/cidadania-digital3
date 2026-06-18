// ==========================================
// 1. SISTEMA DO QUIZ DINÂMICO MULTI-ETAPAS
// ==========================================
let quizScore = 0;
const totalQuestions = 2;

function nextQuestion(currentNum, isCorrect, nextStep) {
    if (isCorrect) {
        quizScore++;
    }

    // Esconde a pergunta atual
    document.getElementById(`q${currentNum}`).style.display = 'none';

    if (nextStep === 'end') {
        showQuizResetButton();
    } else {
        // Mostra a próxima pergunta
        document.getElementById(nextStep).style.display = 'block';
    }
}

function showQuizResetButton() {
    const finalDiv = document.getElementById('quiz-final-result');
    finalDiv.style.display = 'block';
    
    if (quizScore === totalQuestions) {
        finalDiv.className = "feedback success";
        finalDiv.innerHTML = `🎯 Incrível! Você acertou ${quizScore}/${totalQuestions}. Suas habilidades de navegação e proteção de dados estão perfeitamente adaptadas para a realidade de 2026!`;
    } else {
        finalDiv.className = "feedback error";
        finalDiv.innerHTML = `⚠️ Alerta: Você acertou ${quizScore}/${totalQuestions}. Seus conceitos sobre links falsos e cessão de biometria facial precisam ser revisados para evitar cair em fraudes automatizadas de IA.`;
    }
}

// ==========================================
// 2. SIMULADOR DE FORÇA DE SENHAS / IA HACKER
// ==========================================
function evaluateSecurity() {
    const password = document.getElementById('password-input').value;
    const feedback = document.getElementById('simulador-feedback');
    
    if (password.length === 0) {
        feedback.style.backgroundColor = '#f1f5f9';
        feedback.style.color = '#1e293b';
        feedback.innerHTML = "Aguardando entrada...";
        return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 14) score++; // Padrão recomendado em 2026
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Renderização dos feedbacks baseados em poder de processamento hacker atual
    if (score <= 2) {
        feedback.style.backgroundColor = '#fee2e2';
        feedback.style.color = '#991b1b';
        feedback.innerHTML = "🔴 Vulnerável: Uma IA hacker de força bruta quebraria essa senha em menos de 3 segundos.";
    } else if (score === 3 || score === 4) {
        feedback.style.backgroundColor = '#fef3c7';
        feedback.style.color = '#92400e';
        feedback.innerHTML = "🟡 Segurança Moderada: Levaria de alguns dias a meses. Recomendado adicionar mais caracteres ou adotar Passkeys.";
    } else if (score === 5) {
        feedback.style.backgroundColor = '#d1fae5';
        feedback.style.color = '#065f46';
        feedback.innerHTML = "🟢 Alta Resistência: Excelente combinação de caracteres! Estrutura forte contra ataques cibernéticos convencionais.";
    }
}
