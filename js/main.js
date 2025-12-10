function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    localStorage.setItem("theme", 
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});

// Load theme on refresh
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
