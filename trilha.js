document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('step-1').style.display = 'block';
});

function nextStep(step) {
    document.querySelectorAll('.step').forEach(function (stepElement) {
        stepElement.style.display = 'none';
    });
    document.getElementById('step-' + step).style.display = 'block';
}

function prevStep(step) {
    document.querySelectorAll('.step').forEach(function (stepElement) {
        stepElement.style.display = 'none';
    });
    document.getElementById('step-' + step).style.display = 'block';
}

function checkAnswer(step, correctAnswer) {
    const userAnswer = document.getElementById('answer-' + step).value.trim();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        nextStep(step + 1);
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}

function finish() {
    alert('Parabéns! Você completou a trilha de conhecimento.');
    document.querySelectorAll('.step').forEach(function (stepElement) {
        stepElement.style.display = 'none';
    });
    document.getElementById('step-1').style.display = 'block';
    window.location.href = 'trabalho_livre.html';
}