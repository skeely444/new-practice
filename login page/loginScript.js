function login() {
  let inputtedPassword = document.getElementById("password").value;
  const correctPassword = ['test', 'test123', 'hi'];
  if (inputtedPassword === correctPassword) {
    alert("hi")
  }
} 