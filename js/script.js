let poster = document.getElementById("poster");
let imgs = Array.from(document.querySelectorAll(".inner-imgs img"));
let img_container = document.getElementById("all-imgs");
img_container.addEventListener("click", function(e) {
    if(e.target.tagName == "IMG"){
        let new_src= e.target.getAttribute("src");
        document.querySelector(".active").classList.remove("active");
        e.target.classList.toggle("active");
        poster.setAttribute("src", new_src);

    }
})
