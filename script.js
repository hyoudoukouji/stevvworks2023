document.getElementById("enterBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "#000";
  document.querySelector(".intro").textContent = "You clicked it. The spiral is inside you now.";
  document.querySelector(".main-img").src = "https://i.imgur.com/yourScaryImage.jpg";
  alert("The curse has awakened...");
});
