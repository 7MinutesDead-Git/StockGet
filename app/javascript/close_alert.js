
// https://stackoverflow.com/a/17600195/13627106
document.addEventListener("DOMContentLoaded", function(event) {
    // Add event listener to close alerts when close button is pressed (alert-close class).
    const alert_close = document.querySelectorAll('.alert-close')

    alert_close.forEach((x_button) =>
        x_button.addEventListener('click', function () {
            x_button.parentElement.classList.toggle('hide-alert')
        })
    )
});