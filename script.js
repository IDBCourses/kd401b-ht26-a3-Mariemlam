const toggleBtn = document.getElementById("toggle-theme");
const stylesheet = document.getElementById("theme-stylesheet");

toggleBtn.addEventListener("click", function () {
  // check which mode we are in .
  if (stylesheet.getAttribute("href") == "light.css") {
    // IF IT IS SWITCH TO DARK MODE
    stylesheet.setAttribute("href", "dark.css");
    toggleBtn.textContent = "Light Mode";
  } else // OTHERWISE SWITCH TO LGHT MODE
  {
    stylesheet.setAttribute("href", "light.css");
    toggleBtn.textContent = "Light Mode";
  }
});
