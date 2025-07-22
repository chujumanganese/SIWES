$(document).ready(
    function(){
        $(".foot button").each(
            function(e){
                console.log(e);
            }
        );
    }
)

function rope(){
    const loaded = document.querySelector("main")
    $.ajax(
        {
            "url": "singlepage.html",
            "method": "GET",
            "success": function(response){
                $("main").replace(response);
            }
        }
    );
}

// window.addEventListener("scroll", yo);
const nav = document.querySelector("nav");

function yo(){
    nav.classList.add("a");
}