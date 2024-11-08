const animationWrap = document.querySelector(".animation__wrap");
      animationWrap.addEventListener("click", toggleModal);
      function toggleModal() {
        animationWrap.classList.add("anima");
        setTimeout(function () {
          animationWrap.classList.remove("anima");
        }, 1000);
        setTimeout(function () {
          animationWrap.classList.add("is-hidden");
        }, 1800);
}
//переход на страницу
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
        btn.href = tabTarget.src.replace("/images", "").slice(0, -3) + "html";
        btn.classList.add("is-active");
      }