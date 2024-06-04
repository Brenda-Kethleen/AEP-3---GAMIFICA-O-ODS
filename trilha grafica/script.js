// script.js

function nextStep(nextId) {
    const currentStep = document.querySelector('.step.current');
    currentStep.classList.remove('current');
    currentStep.classList.add('completed');
    
    const nextStep = document.getElementById('step-' + nextId);
    nextStep.classList.add('current');
}

function finish() {
    alert('Parabéns! Você completou a trilha de conhecimento.');
    document.querySelectorAll('.step').forEach(function (stepElement) {
        stepElement.classList.remove('completed', 'current');
    });
    document.getElementById('step-1').classList.add('current');
}
