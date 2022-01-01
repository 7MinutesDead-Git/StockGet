// Add event listener to close alerts when close button is pressed (alert-close class).
const alert_close = document.querySelectorAll('.alert-close');

alert_close.forEach((alert) =>
    alert.addEventListener('click', function () {
        alert.parentElement.classList.add('hidden');
    })
);
