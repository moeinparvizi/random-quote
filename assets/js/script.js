// generate span for background
const main = document.querySelector("main");

const addStyleLittleSpan = (span) => {
  span.classList.add("little-span");
  span.style.position = "absolute";
  span.style.backgroundColor = "#e0c46a";
  span.style.width = "5px";
  span.style.height = "5px";
  span.style.opacity = ".9";
  span.style.borderRadius = "50%";
  span.style.boxShadow = "10px 10px 155px 28px rgba(231, 111, 81,0.49)";
  span.style.top = `${Math.floor(Math.random() * (2000 - 1 + -200)) + -200}px`;
  span.style.left = `${Math.floor(Math.random() * (2000 - 1 + 1)) + -200}px`;
};
const littleSpanGenerator = () => {
  for (let i = 0; i < 100; i++) {
    const littleSpan = document.createElement("span");

    addStyleLittleSpan(littleSpan);

    main.appendChild(littleSpan);
  }
};
littleSpanGenerator();

// mouse move effect
const mouseMoveEffect = () => {
  const little = document.querySelectorAll(".little-span");
  const big = document.querySelectorAll(".big-span");
  let x, w, y, h, op;
  main.addEventListener("mousemove", (e) => {
    little.forEach((val) => {
      val.style.transition = "0s";
      x = e.offsetX;
      w = e.target.clientWidth / 20;
      y = e.offsetY;
      h = e.target.clientHeight / 20;
      op = "translate(" + (x / 20 - w / 2) + "px," + (y / 20 - h / 2) + "px)";
      val.style.transform = op;
    });
    big.forEach((val) => {
      val.style.transition = "0s";
      x = e.offsetX;
      w = e.target.clientWidth / 10;
      y = e.offsetY;
      h = e.target.clientHeight / 10;
      op = "translate(" + (x / 10 - w / 2) + "px," + (y / 10 - h / 2) + "px)";
      val.style.transform = op;
    });
  });
};

mouseMoveEffect();

// search in google button
document.querySelector(".google-search").addEventListener("click", () => {
  const from = document.querySelector(".quote-from").innerText;
  window.open("http://google.com/search?q=" + from);
});

// buttons hover effect
const buttonRole = document.querySelectorAll("div[role=button]");
buttonRole.forEach((val) => {
  val.addEventListener("mouseover", () => {
    val.classList.add("animate__animated");
    val.classList.add("animate__shakeX");
  });
  val.addEventListener("mouseleave", () => {
    val.classList.remove("animate__animated");
    val.classList.remove("animate__shakeX");
  });
});
