    // Получаем данные из localStorage
    const text = localStorage.getItem("headerText");
    // Отображаем текст в элементе h2
      if (text) {
            document.getElementById("displayText").innerText = text;
      }
    // Получаем данные изображения из localStorage
      const imageData = JSON.parse(localStorage.getItem("imageData"));
      if (imageData) {
    // Создаем элемент img и устанавливаем его атрибуты
        const img = document.createElement("img");
        img.id = "imageToTransfer";
        img.className = imageData.className;
        img.src = imageData.src;
        img.alt = imageData.alt;
        // Добавляем изображение в контейнер на странице
        document.getElementById("imageContainer").appendChild(img);
}
    //active btn
      const tabItem = document.querySelectorAll(".grid__img");
      var btn = document.querySelector(".btn");
      tabItem.forEach(function (element) {
        element.addEventListener("click", open);
      });
function open(evt) {
    const tabTarget = evt.currentTarget;
    tabItem.forEach(function (item) {
        item.classList.remove("is-active");
    });
    tabTarget.classList.add("is-active");
    btn.classList.add("is-active");
    var imgTarget = tabTarget;
          const imageData1 = {
          src: imgTarget.src,
          alt: imgTarget.alt,
        };
    localStorage.setItem("imageData1", JSON.stringify(imageData1));
}
    //далее
function saveImages() {
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
        window.location.href = "result.html";
}
    //К гороскопу
      const imgItem = imageData.src;
var btnHoros = document.getElementById("btn-horoscop");
btnHoros.href = imgItem.replace("images", "").slice(0, -3) + "html";