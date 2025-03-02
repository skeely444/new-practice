function login() {
  let inputtedPassword = document.getElementById("password").value;
  const correctPassword = 'test'
  const  inputtedUsername = document.getElementById("username").value;
  const correctUsername  = "skeely"
  if (inputtedPassword === correctPassword && inputtedUsername === correctUsername) {
    alert("hi")
  }
} 