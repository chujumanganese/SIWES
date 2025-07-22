const r = document.querySelector(".shows");
const boxs = document.querySelector(".box");
const up = document.querySelector(".bar.q1");
const downs = document.querySelector(".bar.q2");
const we = document.querySelector(".bar.q3");

r.addEventListener("click", pr);
// boxs.style.display = "none";

function pr()
{
    const t = document.querySelector(".drop-down");
    t.classList.toggle("a");
    r.classList.toggle("a");
    up.classList.toggle("a");
    downs.classList.toggle("a");
    we.classList.toggle("a");
}

window.addEventListener("load", cleard);

function cleard()
{
    
}