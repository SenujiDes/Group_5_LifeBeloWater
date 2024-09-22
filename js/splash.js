document.addEventListener("DOMContentLoaded", function () {
  // Redirects to the homepage after 4 seconds
  setTimeout(function () {
    window.location.href = "home.html"; // linked with the homepage link which you wants to redirect to
  }
    , 4000); // 4000 milliseconds = 4 seconds
});

//displaying each elemet according to the given time
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("box").style.display = "flex"; //After 500 milliseconds the box will be displayed
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("logo").style.display = "block"; //After 750 milliseconds the loader image will be displayed
  }, 750);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("title").style.display = "block"; //After 1000 milliseconds the title will be displayed
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("mission").style.display = "block"; //After 1250 milliseconds the mission will be displayed
  }, 1250);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("group").style.display = "block"; //After 1500 milliseconds the ground members title will be displayed
  }, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("names").style.display = "block"; //After 1750 milliseconds the names of the group memebrs will be displayed
  }, 1750);
});

