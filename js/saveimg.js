const btnMatch = document.getElementById("btn-match");
btnMatch.addEventListener("click", saveImages);
function saveImages() {
    const text = document.getElementById("headerText").innerText;
    // Сохраняем текст в localStorage
    localStorage.setItem("headerText", text);
    // Получаем атрибуты изображения
        const image = document.getElementById("imageToTransfer");
        const imageData = {
            className: image.className,
            src: image.src,
            alt: image.alt,
            
        };
    // Сохраняем объект с данными в localStorage в формате JSON
        localStorage.setItem("imageData", JSON.stringify(imageData));
    // Переходим на вторую страницу
    window.location.href = "match.html";
}