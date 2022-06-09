// function Parralax
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translate(${x}px) translateY(${y}px)`;
  });
}

// function active Link
const linkItems = document.querySelectorAll(".nav__list .nav__item a");
const h3Tags = document.querySelectorAll("section h3");

linkItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < linkItems.length; i++) {
      linkItems[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});
