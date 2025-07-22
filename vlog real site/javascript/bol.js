$(document).ready(
    function(){
        $("button").click(d);
    }
)

function d(){
    $.ajax(
        {
            "url": "mini_loader.html",
            "method": "GET",
            "success": function(response){
                $(".from").html(response);
            }
        }
    )
}
// we want to do some input validation on this side of the code 

const email = document.querySelector("");
const password = document.querySelector("");