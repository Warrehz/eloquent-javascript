// adds an event listener to the browser window and executes function upon click
window.addEventListener("click", () => {
  console.log("awwww yeahhhh");
});

// turns the body background violet upon 'v' keypress down
window.addEventListener("keydown", event => {
   if (event.key == "v") {
     document.body.style.background = "violet";
   }
 });

// logs a message when space key is pressed in conjunction with ctrl
 window.addEventListener("keydown", event => {
   if (event.key == " " && event.ctrlKey) {
     console.log("Continuing!");
   }
 });

// event listener to mock drawing on the screen
window.addEventListener("click", event => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
