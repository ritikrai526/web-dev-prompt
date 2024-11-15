// Get all step containers
const steps = document.querySelectorAll('.step');

// Show the first step by default
let currentStep = 0;
steps[currentStep].classList.add('active');

// Show next step
document.getElementById('next-1').addEventListener('click', () => {
    if (validateStep(1)) {
        showStep(currentStep + 1);
    }
});

// Show next step
document.getElementById('next-2').addEventListener('click', () => {
    if (validateStep(2)) {
        showStep(currentStep + 1);
    }
});

// Show previous step
document.getElementById('prev-2').addEventListener('click', () => {
    showStep(currentStep - 1);
});

// Show previous step
document.getElementById('prev-3').addEventListener('click', () => {
    showStep(currentStep - 1);
});

// Show the selected step and hide others
function showStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= steps.length) return;
    steps[currentStep].classList.remove('active');
    currentStep = stepIndex;
    steps[currentStep].classList.add('active');
    updateSummary();
}

// Validate step data (you can expand validation as needed)
function validateStep(stepNumber) {
    let valid = true;
    const inputs = steps[stepNumber].querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });
    return valid;
}

// Update summary in the last step
function updateSummary() {
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <li><strong>Name:</strong> ${document.getElementById('name').value}</li>
        <li><strong>Email:</strong> ${document.getElementById('email').value}</li>
        <li><strong>Phone:</strong> ${document.getElementById('phone').value}</li>
        <li><strong>Event Date:</strong> ${document.getElementById('event-date').value}</li>
        <li><strong>Ticket Type:</strong> ${document.getElementById('ticket-type').value}</li>
        <li><strong>Comments:</strong> ${document.getElementById('comments').value}</li>
    `;
}
