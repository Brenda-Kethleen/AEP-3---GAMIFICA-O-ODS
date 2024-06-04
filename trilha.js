// script.js

// Mostrar a primeira fase ao carregar a página
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

function finish() {
    alert('Parabéns! Você completou a trilha de conhecimento.');
    document.querySelectorAll('.step').forEach(function (stepElement) {
        stepElement.style.display = 'none';
    });
    document.getElementById('step-1').style.display = 'block';
}
