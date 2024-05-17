// JavaScript for interactive features on the homepage

// Function to greet the user
function greetUser() {
    let userName = prompt("What's your name?");
    if (userName) {
      alert("Hello, " + userName + "! Welcome to our homepage!");
    }
  }
  
  // Function to toggle a dark mode
  function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
  }