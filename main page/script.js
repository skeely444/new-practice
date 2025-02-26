function darkMode() {
    const toggleButton = document.getElementById("toggleButton")
    const styleHref = document.getElementById("style")
    styleHref.href = "darkMode.css"
    toggleButton.innerHTML ='<i class="fa-regular fa-sun"></i>'
    toggleButton.onclick = lightMode
}
function lightMode() {
    const toggleButton = document.getElementById("toggleButton")
    const styleHref = document.getElementById("style")
    styleHref.href = "lightMode.css"
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
    toggleButton.onclick = darkMode
}