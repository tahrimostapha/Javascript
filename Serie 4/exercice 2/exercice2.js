let text = document.getElementById("texte");
let show = document.getElementsByTagName("a")[0];
let hide = document.getElementsByTagName("a")[1];
show.addEventListener("click", function() {
  text.style.visibility = "visible";
});
hide.addEventListener("click", function() {
  text.style.visibility = "hidden";
});
