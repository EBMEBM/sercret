// Apareixeran els pètals i el centre de la flor amb animació
document.addEventListener("DOMContentLoaded", () => {
  const petals = document.querySelectorAll(".petal");
  const center = document.querySelector(".center");
  const title = document.getElementById("title");

  // Animar els pètals
  petals.forEach((petal, index) => {
    setTimeout(() => {
      petal.style.opacity = 1;
      petal.style.transform = "scale(1)";
    }, index * 200);
  });

  // Animar el centre de la flor
  setTimeout(() => {
    center.style.opacity = 1;
    center.style.transform = "scale(1)";
  }, 1500);

  // Animar el títol
  setTimeout(() => {
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
    title.style.transition = "opacity 2s ease, transform 2s ease";
  }, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
  const petals = document.querySelectorAll(".petal");
  const center = document.querySelector(".center");

  petals.forEach((petal, index) => {
    setTimeout(() => {
      petal.style.opacity = 1;
      petal.style.transform = "scale(1)";
    }, index * 300); // Retard per a cada pètal
  });

  setTimeout(() => {
    center.style.opacity = 1;
    center.style.transform = "scale(1)";
  }, petals.length * 300);
});

