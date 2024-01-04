/* juro que é só para a fake password --> Telma */

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener for keydown event
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.keyCode === 13) {
            window.location.href = "../chapter_a/index.html";
        }
    });
});