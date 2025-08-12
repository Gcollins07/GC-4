// template_5tk3w2r
// service_y2cwuci
// Rnl-swPHqBdMqDKT_
function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_y2cwuci",
      "template_5tk3w2r",
      event.target,
      "Rnl-swPHqBdMqDKT_"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temorarily unavailable. Please contact me directly at garrett.collins5@gmail.com"
      );
    });

  setTimeout(() => {}, 500);
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}
