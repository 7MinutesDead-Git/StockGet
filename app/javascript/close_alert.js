// Add event listener to close alerts when close button is pressed (alert-close class).
const alert_close = document.querySelectorAll('.alert-close')

alert_close.forEach((x_button) =>
    x_button.addEventListener('click', function () {
        x_button.parentElement.classList.toggle('hide-alert')
    })
)
