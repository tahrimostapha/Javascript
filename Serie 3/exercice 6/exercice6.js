for (let i = 1; i <= 5; i++) {
  let img = document.getElementById("image"+i);
  img.addEventListener("mouseover", function() {
    img.src = "images/image" + i + "_2.jpg";
  });
  img.addEventListener("mouseout", function() {
    img.src = "images/image" + i + ".jpg";
  });
}
