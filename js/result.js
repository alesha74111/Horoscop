// Получаем данные изображения из localStorage для первого
      const imageData = JSON.parse(localStorage.getItem("imageData"));
      if (imageData) {
      // Создаем элемент img и устанавливаем его атрибуты
            const img = document.createElement("img");
            img.id = "imageToTransfer";
            img.className = imageData.className;
            img.classList.add("imageA");
            img.src = imageData.src;
            img.alt = imageData.alt;
      // Добавляем изображение в контейнер на странице
      document.getElementById("imageContainerA").appendChild(img);
}
document.getElementById("displayTextA").innerText = imageData.alt;
const imageData1 = JSON.parse(localStorage.getItem("imageData1"));
if (imageData1) {
      // Создаем элемент img и устанавливаем его атрибуты
      const img = document.createElement("img");
      img.classList.add("name__img", "imageB");
      img.src = imageData1.src;
      img.alt = imageData1.alt;
      // Добавляем изображение в контейнер на странице
      document.getElementById("imageContainerB").appendChild(img);
}
document.getElementById("displayTextB").innerText = imageData1.alt;

    //К гороскопу
      const imgItem = imageData.src;
      var btnHoros = document.getElementById("btn-horoscop");
      btnHoros.href = imgItem.replace("images", "").slice(0, -3) + "html";