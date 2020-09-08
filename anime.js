document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: "#nav",
    translateY: [-70, 0],
    duration: 1000,
    delay: 500,
  });
  anime({
    targets: "#name",
    translateX: [-500, 0],
    duarion: 2000,
    delay: 600,
    opacity: [0, 1],
  });
  anime({
    targets: "#info",
    delay: 2000,
    translateX: [-500, 0],
    duration: 2000,
    opacity: [0, 1],
  });
  anime({
    targets: "section10",
    delay: 4000,
    opacity: [0, 2],
  });
  anime({
    targets: ".logo",
    delay: 3300,
    translateY: [-30, 0],
    duration: 800,
    opacity: [0, 4],
    easing: "linear",
  });
  anime({
    targets: "#github",
    delay: 5000,
    opacity: [0, 9],
    duration: 800,
    easing: "linear",
  });
});
