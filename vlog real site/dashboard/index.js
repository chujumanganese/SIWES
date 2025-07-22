const sidebar = document.querySelector("aside");
const full = document.querySelector(".full");
window.addEventListener("resize", hide);

function hide()
{
    if(window.innerWidth < 900)
    {
        // sidebar.style.transform = "translate3d(-300px, 0, 0)";
        sidebar.style.display = "none";
        full.style.width = "100dvw";
    }else{
        sidebar.style.display = "block";
    }
}