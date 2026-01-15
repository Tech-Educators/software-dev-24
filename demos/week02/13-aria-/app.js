const notificationArea = document.getElementById('notificationArea')

const noticationButton = document.getElementById('notificationButton')

noticationButton.addEventListener('click', function() {
    notificationArea.textContent = "New email!"
})