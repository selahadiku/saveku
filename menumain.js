// Untuk tombol menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Effect fade in
const teamCard = document.querySelectorAll(".team");

const option = {
  threshold: 1,
};

const observerFadeIn = new IntersectionObserver((entries, observerFadeIn) => {
  entries.forEach((entry) => {
    // if (!entry.isIntersecting) {
    //   return;
    // } else {
    //   entry.target.classList.add("animate-top-toggle");
    //   observerFadeIn.unobserve(entry.target);
    // }
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.animation = `anim1 .7s ${entry.target.dataset.delay} forwards ease-out`;
    }
  });
}, option);

teamCard.forEach((card) => {
  observerFadeIn.observe(card);
});
