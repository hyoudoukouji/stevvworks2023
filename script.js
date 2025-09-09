document.getElementById("enterBtn").addEventListener("click", function() {
  alert("You shouldn't have clicked that...");
  document.body.style.backgroundColor = "#000000";
  document.querySelector(".intro").textContent = "The spiral has begun. There's no escape.";
  document.querySelector(".main-img").src = "https://i.imgur.com/yourScaryImage.jpg";
});
