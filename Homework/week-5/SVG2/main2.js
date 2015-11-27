/* use this to test out your function */
window.onload = function() {
  changeColor("be", "#00CED1");
  changeColor("ro", "#00BFFF");
  changeColor("at", "#1E90FF");
  changeColor("pl", "#87CEFA");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
   document.getElementById(id).style.fill = color;
}
