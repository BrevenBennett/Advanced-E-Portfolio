// template_v3s8biw
// service_d58zbpd
// yow_UxsncYermvRep

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_d58zbpd",
      "template_v3s8biw",
      event.target,
      "yow_UxsncYermvRep"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at breven.stars@gmail.com"
      );
    });
}
