const user = localStorage.getItem("user");
document.getElementById("user").innerText = user || "Guest";

document.getElementById("logout").onclick = () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
};