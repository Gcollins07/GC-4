let isModalOpen = false;
let isDarkMode = false;
const scaleFactor = 1 / 20;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList += "dark-mode";
  } else {
    document.body.classList.remove("dark-mode");
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    if (i % 2 === 0) {
      shapes[i].style.transform = `translate(-${x}px, -${y}px)`;
    } else {
      shapes[i].style.transform = `translate(${x}px, ${y}px)`;
    }
  }
}

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

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}
