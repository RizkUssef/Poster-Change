let poster = document.getElementById("poster");
let img_container = document.getElementById("all-imgs");

img_container.addEventListener("click", function(e) {
    if(e.target.tagName == "IMG"){
        let new_src= e.target.getAttribute("src");
        poster.setAttribute("src", new_src);
    }
})
