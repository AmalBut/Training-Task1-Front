
function sidebar() {
    var nav = document.getElementById("nav-sidebar");
    console.log(nav);
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            nav.style.display = "none";
        }
    });
    console.log("amaal");
}

function shareOnFacebook() {
    const url = "blog.html";
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
        "facebook-share-dialog",
        "width=800,height=600");
    return false;
}

function shareOnLinkedIn() {
    const url = "https://www.yourwebsite.com";
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url),
        "linkedin-share-dialog",
        "width=800,height=600");
    return false;
}


