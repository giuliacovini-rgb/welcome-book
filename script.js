JavaScript

const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 500,
    height: 700,
    showCover: true
  }
);

pageFlip.loadFromHTML(
  document.querySelectorAll(".page")
);

const sound = document.getElementById("flipSound");

pageFlip.on("flip", () => {
  sound.currentTime = 0;
  sound.play();
});
